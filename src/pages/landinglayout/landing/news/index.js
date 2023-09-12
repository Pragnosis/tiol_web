import { Box, Grid,Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Pagination } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
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

export const LandingNews = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation()
    const footerApiData = location.state

    const [caseLawdata, setCaseLawdata] = useState([])
    const [pageOriData, setPageOriData] = useState([])
    const intialCount = 10
    const [prevCount, setPrevCount] = useState(1)
    const [nextCount, setNextCount] = useState(10)
    const [getFilter, setFilter] = useState('')
    const [page,setPage] = useState(1)
    const [spinner, setSpinner] = useState(false); 

    const getDataFromSearch = (date) => {
        var filterUrl = footerApiData?.apipathfilter;;
        var replaceFromDate = filterUrl?.replace("@From_Date", date.from);
        var replaceDate = replaceFromDate?.replace("@To_Date", date.to);
        setFilter(replaceDate)
    }

    let apipath;  
    if(getFilter){
        apipath = getFilter;
    }else {
        apipath = footerApiData?.apipath;
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
                setCaseLawdata(data?.filter((o, i) => i <= intialCount))
            }
        });  
    },[apipath])

    useEffect(() => {
        window.scrollTo(0, 700)
    })

    const pageChange = (e,value) => {
        setPage(value)
        const targetCount = value;
        const Prev = (parseInt((targetCount) - 1) * intialCount) + 1;
        setPrevCount(Prev)
        const Next = (parseInt((targetCount)) * intialCount);
        setNextCount(Next)
        const localArray = pageOriData?.filter((o, i) => (Prev < i && i <= Next))
        setCaseLawdata(localArray)
    }


    const rowDataClickandler = (item) => {
        navigate("/newsdetails", { state: item })
    }


    return <Box>
        <Grid container key={footerApiData?.title}>
            <Grid item xs='12'>
                <CustomSearch getDataFromSearch={getDataFromSearch} />
            </Grid>
            <Grid item xs='12' style={{ padding: "15px 0px" }}>
                <Typography className='caselaw-heading'>{footerApiData?.title}</Typography>
            </Grid>

        {
            spinner && <Box sx={{ display: 'flex', color:'orangered', margin:'50px, auto' }}>
            <CircularProgress color="inherit"/>
            </Box>
         }

            { pageOriData?.length>1 && <>
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
                                    <Typography style={{ fontWeight: "bold", textAlign: "justify", padding: "5px 0px", color: "rgb(85 76 76 / 90%)", fontSize: "13px" }}>{item?.author}{item?.place? ` | ${item?.place}` :''}</Typography>
                                    <Typography style={{ textAlign: "justify", padding: "5px 0px", fontSize: "13px" }}>Cx - {item?.headlines}</Typography>
                                </Box>
                            </Grid>
                        }) 
                    }
                </Grid>
            </Grid>
            {pageOriData?.length > intialCount && 
            <Grid item xs='12'>
                <Box style={{ display: "flex", justifyContent: "flex-end", padding: "10px 0px 10px 0px" }}>
                <Pagination count={Math.ceil((pageOriData?.length) / 10)} page={page} onChange={pageChange} />
                </Box>
            </Grid>
            }</>}
        </Grid>
    </Box>
}