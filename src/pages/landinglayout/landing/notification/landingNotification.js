import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Pagination } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { CustomSearch } from '../../../shared/search/Search'
import CircularProgress from '@mui/material/CircularProgress';

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


export const LandingNotification = () => { 
    const iniState = ''
    const [caseLawdata, setCaseLawdata] = useState([])
    const [pageOriData, setPageOriData] = useState([])
    const intialCount = 10
    const [prevCount, setPrevCount] = useState(1)
    const [nextCount, setNextCount] = useState(10)
    const [getFilter, setFilter] = useState(iniState)
    const [page,setPage] = useState(0)
    const [spinner, setSpinner] = useState(false); 
    const [preUrl, setPrevUrl] =useState()
    const commonReducer = useSelector((state) => state.commonReducer);
    const navigate = useNavigate();
    const location = useLocation();
 
    const getDataFromSearch = (date) => {
        var filterUrl = apiPreUrl?.apipathfilter;;
        var replaceFromDate = filterUrl?.replace("@From_Date", date.from);
        var replaceDate = replaceFromDate?.replace("@To_Date", date.to);
        setFilter(replaceDate)
        setPrevUrl(location?.pathname)
    }

    const apiPreUrl = commonReducer?.currentClickedMenu;
    let apipath

    if(preUrl === location?.pathname){
        setFilter()
    } 
   
    if(getFilter){
        apipath = getFilter;
       }else if(apiPreUrl?.todays){
        apipath = apiPreUrl?.apipathtodayscase
       }else{
        apipath = apiPreUrl?.apipath; 
     }  
    
    useEffect(() => {
        setSpinner(true);
         fetch(apipath)  
         .then(response => response.json())
         .then(data => {
             console.log("==data==",data)
             if (data) {
                 setSpinner(false);
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
            navigate("/incometax/caselaw/sccases/details", { state: item })
        } else if(item?.news_Url?.indexOf("GetNewsById")>0){
            navigate("/newsdetails", { state: item })
        } /* else if(item?.caselawUrl?.indexOf("GetTodysCaseAllData")>0){
            const pageType = 'caselaws_details'
             navigate(`/${pageType}?page=${btoa(item?.caselawUrl)}`)
          }*/else {
            navigate("/notification/details", { state: item })
        }
    } 

    return <Box>
        <Grid container>
            <Grid item xs='12'>
                <CustomSearch getDataFromSearch={getDataFromSearch} />
            </Grid>
            <Grid item xs='12' style={{ padding: "15px 0px" }}>
                <Typography className='caselaw-heading'>{apiPreUrl?.title || apiPreUrl?.categoryName}</Typography>
            </Grid>
            {
                spinner && <Box sx={{ display: 'flex', color:'orangered', margin:'50px auto' }}>
                <CircularProgress color="inherit"/>
                </Box>
            }
            {pageOriData?.length > intialCount &&
            <Grid item xs='12'>
                <Grid container item justifyContent='space-between' alignItems='center' style={{ paddingLeft: "20px" }}>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <Typography style={{ fontSize: "13px", color: "red" }}>{prevCount}</Typography>&nbsp;--
                        <Typography style={{ fontSize: "13px", color: "red" }}>&nbsp;{nextCount}</Typography>&nbsp;out of
                        <Typography style={{ fontSize: "13px", color: "red" }}>&nbsp;...{pageOriData?.length}</Typography>&nbsp;
                    </Box>
                    <Box style={{ padding: "10px 0px 10px 0px" }}>
                        <Pagination count={Math.ceil((pageOriData?.length) / 10)} page={page} onChange={pageChange} />
                    </Box>
                </Grid>
            </Grid> }
            <Grid item xs='12'>
                <Grid container item>
                    {
                        caseLawdata?.length > 0 && caseLawdata?.map((item) => {
                            return <Grid item xs='12' style={{ margin: "10px", border: "1px solid #ccc", borderRadius: "20px", padding: "10px" }}>
                                <Box elevation={1} style={{ borderRadius: "20px 20px 0px 0px" }}>
                                    <Typography style={{ color: "#f86e38", padding: "5px 0px", cursor: "pointer" }} onClick={() => rowDataClickandler(item)} >{item?.date || item?.tiolCitation}</Typography>
                                    <Typography style={{ fontWeight: "bold", textAlign: "justify", padding: "5px 0px", color: "rgb(85 76 76 / 90%)", fontSize: "13px" }}>{item?.notification_Number || item?.header || item?.author}</Typography>
                                    <Typography style={{ textAlign: "justify", padding: "5px 0px", fontSize: "13px" }}>Cx - {item?.headlines}</Typography>
                                </Box>
                            </Grid>
                        })
                    }
                    {
                    caseLawdata?.length ==0 && <Grid item xs='12'>
                        <Typography className='no-data-found'>No Data Found</Typography>
                    </Grid>
                    }
                </Grid>
            </Grid>
            {pageOriData?.length > intialCount &&
            <Grid item xs='12'>
                <Box style={{ display: "flex", justifyContent: "flex-end", padding: "10px 0px 10px 0px" }}>
                    <Pagination count={Math.ceil((pageOriData?.length) / 10)} page={page} onChange={pageChange} />
                </Box>
            </Grid>}
        </Grid>
    </Box>
}