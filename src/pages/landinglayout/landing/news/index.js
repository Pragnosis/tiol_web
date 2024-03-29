import { Box, Grid,Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
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
    const clearDataFromSearch = () =>{
        setFilter(false)
        apipath = footerApiData?.apipath;
    }
 
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
                setPageOriData(data)
                setCaseLawdata(data?.filter((o, i) => i < intialCount))
            }
        })
        .finally(() => {
            setSpinner(false);
        }); 
    },[apipath])

    useEffect(() => {
        window.scrollTo(0, 700)
    })

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
        navigate("/newsdetails", { state: item })
    }


    return <Box>
        <Grid container key={footerApiData?.title}>
       { (caseLawdata?.length > 0 || getFilter) && 
            <Grid item xs='12'>
                <CustomSearch getDataFromSearch={getDataFromSearch} clearDataFromSearch={clearDataFromSearch}/>
            </Grid>
        }    
            <Grid item xs='12' style={{ padding: "15px 0px" }}>
                <Typography className='caselaw-heading'>{footerApiData?.title || footerApiData?.categoryName}</Typography>
            </Grid>

        {
            spinner &&  <Grid item xs='12'><Box sx={{ display: 'flex', position:'absolute', left:'38%' }}>
            <CircularProgress sx={{ color:'orangered'  }}/>
            </Box>
            </Grid>
         }

{pageOriData?.length > intialCount &&
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
}
            <Grid item xs='12'>
                <Grid container item>
                    {
                        caseLawdata?.length > 0 ? caseLawdata?.map((item) => {
                            return <Grid item xs='12' style={{ margin: "10px", border: "1px solid #ccc", borderRadius: "20px", padding: "10px" }}>
                                <Box elevation={1} style={{ borderRadius: "20px 20px 0px 0px" }}>
                                    <Typography style={{ color: "#f86e38", padding: "5px 0px", cursor: "pointer" }} onClick={() => rowDataClickandler(item)} >{item?.date}</Typography>
                                    <Typography style={{ fontWeight: "bold", textAlign: "justify", padding: "5px 0px", color: "rgb(85 76 76 / 90%)", fontSize: "13px" }}>{item?.author}{item?.place? ` | ${item?.place}` :''}</Typography>
                                    <Typography style={{ textAlign: "justify", padding: "5px 0px", fontSize: "13px" }}>Cx - {item?.headlines}</Typography>
                                </Box>
                            </Grid>
                        }) 
                        :  !spinner && <Grid item xs='12'>
                        <Typography className='no-data-found'>{getFilter ? 'No data was found for the selection criteria, please try with other criteria.':'No Data Found'}</Typography>
                    </Grid>
                    }
                </Grid>
            </Grid>
            {pageOriData?.length > intialCount && 
            <Grid item xs='12'>
                <Box style={{ display: "flex", justifyContent: "flex-end", padding: "10px 0px 10px 0px" }}>
                <Pagination count={Math.ceil((pageOriData?.length) / 10)} page={page} onChange={pageChange} />
                </Box>
            </Grid>
            }
        </Grid>
    </Box>
}