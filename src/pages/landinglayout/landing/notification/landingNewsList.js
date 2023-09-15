import { Box, Grid, Paper, TextField, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { caseLawArray } from '../../../../component/constant'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { caseLawDynamicdata, caseLawFilterdata, newsDynamicdata, notificationDynamicdata,getNotificationDetailsData } from '../../../../services'
import CustomButton from '../../../../component/CustomButton'
import { Pagination } from '@mui/material'
import { getErrorMessege } from '../../../../component/Validator'
import { useLocation, useNavigate } from 'react-router-dom'
import { Layout } from '../../../Layout'
import { CustomSearch } from '../../../shared/search/Search'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


export const LandingNewsList = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
 

    const commonReducer = useSelector((state) => state.commonReducer?.newsList);
    const [caseLawdata, setCaseLawdata] = useState([])
    const [pageOriData, setPageOriData] = useState(null)
    const intialCount = 10
    const [prevCount, setPrevCount] = useState(1)
    const [nextCount, setNextCount] = useState(10)
    const [getFilter, setFilter] = useState('');
    const [page,setPage] = useState(1)
   
    const params = new URLSearchParams(location?.search);
    const catId = params.get('catid');
    const catdata = commonReducer.filter(items => items.category == catId )[0]
    const heading= catdata?.categoryName;
    let apipath;

    const getDataFromSearch = (date) => {
        var filterUrl = catdata?.apipathfilter;
        var replaceFromDate = filterUrl?.replace("@From_Date", date.from);
        var replaceDate = replaceFromDate?.replace("@To_Date", date.to);
        setFilter(replaceDate)
    }

    const todaysupdate = params.get('todaysupdate');
    if(getFilter){
        apipath = getFilter;
    } else if(todaysupdate){
        apipath = catdata?.apipathtodayscase;
    } else {
        apipath = catdata?.apipath;
    }
 
/*const { data, error } = useQuery(['GetAllDetailsData'], () => notificationDynamicdata(apiPath), { enabled: true, retry: false })

    useEffect(() => {
        if (data) {
            setPageOriData(data?.data)
            setCaseLawdata(data?.data.filter((o, i) => i <= intialCount))
        } 
    }, [data])
*/
    useEffect(() => {
       // setSpinner(true);
        fetch(apipath)  
        .then(response => response.json())
        .then(data => {
            console.log("==data==",data)
            if (data) {
                //setSpinner(false);
                setPageOriData(data)
                setCaseLawdata(data?.filter((o, i) => i < intialCount))
            }
        });  
    },[apipath])

    useEffect(() => {
        window.scrollTo(0, 700)
    }, [])

    const pageChange = (e,value) => {
        setPage(value)
        const targetCount = value;
        const Prev = (parseInt(targetCount) - 1) * intialCount + 1;
        setPrevCount(Prev)
        const Next =  parseInt(targetCount * intialCount);;
        setNextCount(Next)
        const localArray = pageOriData.slice(Prev-1, Next);
        setCaseLawdata(localArray)
    }

    const rowDataClickandler = (item) => {
        if(item?.url?.indexOf("GetCaselawById")>0){
           const pageType = 'caselaws_details'
            navigate(`/${pageType}?page=${btoa(item?.url)}`)
        } else if(item?.url?.indexOf("GetNewsById")>0){
            const pageType = 'news_details'
            navigate(`/${pageType}?page=${btoa(item?.url)}`)
        } else if(item?.url?.indexOf("GetNotificationById")>0){
            const pageType = 'notification'
            navigate(`/${pageType}?page=${btoa(item?.url)}`)
        } else {
            navigate("/notification/details", { state: item })
        }
    }

    return <Box>
        <Grid container>
         
            <Grid item xs='12'>
                <CustomSearch getDataFromSearch={getDataFromSearch} />
            </Grid>
            <Grid item xs='12' style={{ padding: "15px 0px" }}>
                <Typography className='caselaw-heading'>{heading}</Typography>
            </Grid>
            <Grid item xs='12'>
                <Grid container item justifyContent='space-between' alignItems='center' style={{ paddingLeft: "20px" }}>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <Typography style={{ fontSize: "13px", color: "red" }}>{prevCount}</Typography>&nbsp;-
                        <Typography style={{ fontSize: "13px", color: "red" }}>&nbsp;{nextCount}</Typography>&nbsp;out of
                        <Typography style={{ fontSize: "13px", color: "red" }}>&nbsp;...{pageOriData?.length}</Typography>&nbsp;
                    </Box>
                    <Box style={{ padding: "10px 0px 10px 0px" }}>
                    <Pagination count={Math.ceil((pageOriData?.length) / 10)} page={page} onChange={pageChange} />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs='12'>
                <Grid container item>
                    {
                        caseLawdata?.length > 0 && caseLawdata?.map((item) => {
                            return <Grid item xs='12' style={{ margin: "10px", border: "1px solid #ccc", borderRadius: "20px", padding: "10px" }}>
                                <Box elevation={1} style={{ borderRadius: "20px 20px 0px 0px" }}>
                                    <Typography style={{ color: "#f86e38", padding: "5px 0px", cursor: "pointer" }} onClick={() => rowDataClickandler(item)} >{item?.date}</Typography>
                                    <Typography style={{ fontWeight: "bold", textAlign: "justify", padding: "5px 0px", color: "rgb(85 76 76 / 90%)", fontSize: "13px" }}>{item?.author}</Typography>
                                    <Typography style={{ textAlign: "justify", padding: "5px 0px", fontSize: "13px" }}>Cx - {item?.headlines}</Typography>
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
            <Grid item xs='12'>
                <Box style={{ display: "flex", justifyContent: "flex-end", padding: "10px 0px 10px 0px" }}>
                <Pagination count={Math.ceil((pageOriData?.length) / 10)} page={page} onChange={pageChange} />
                </Box>
            </Grid>
        </Grid>
    </Box>
}