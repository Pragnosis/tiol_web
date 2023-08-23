import { Box, Grid, Paper, TextField, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { caseLawArray } from '../../../../component/constant'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { caseLawDynamicdata, caseLawFilterdata, newsDynamicdata } from '../../../../services'
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

export const LandingNews = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation()
    const footerApiData = location.state

    const commonReducer = useSelector((state) => state.commonReducer);
    const [caseLawdata, setCaseLawdata] = useState([])
    const [pageOriData, setPageOriData] = useState([])
    const intialCount = 10
    const [prevCount, setPrevCount] = useState(1)
    const [nextCount, setNextCount] = useState(10)

    const { data, error } = useQuery(['GetDynamicNewsData'], () => newsDynamicdata(footerApiData?.apipath), { enabled: true, retry: false })
    useEffect(() => {
        if (data) {
            setPageOriData(data?.data)
            setCaseLawdata(data?.data.filter((o, i) => i <= intialCount))
        }
    }, [data])

    const pageChange = (e) => {
        const Prev = (parseInt((e.target.textContent) - 1) * intialCount) + 1;
        setPrevCount(Prev)
        const Next = (parseInt((e.target.textContent)) * intialCount);
        setNextCount(Next)
        const localArray = pageOriData?.filter((o, i) => (Prev < i && i <= Next))
        setCaseLawdata(localArray)
    }


    const rowDataClickandler = (item) => {
        navigate("/newsdetails", { state: item })
    }

    const getDataFromSearch = (data) => {
        setCaseLawdata(data)
    }

    return <Box>
        <Grid container>
            <Grid item xs='12'>
                <CustomSearch getDataFromSearch={getDataFromSearch} />
            </Grid>
            <Grid item xs='12' style={{ padding: "15px 0px" }}>
                <Typography className='caselaw-heading'>COLUMNS AND NEWS</Typography>
            </Grid>
            <Grid item xs='12'>
                <Grid container item justifyContent='space-between' alignItems='center' style={{ paddingLeft: "20px" }}>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <Typography style={{ fontSize: "13px", color: "red" }}>{prevCount}</Typography>&nbsp;--
                        <Typography style={{ fontSize: "13px", color: "red" }}>&nbsp;{nextCount}</Typography>&nbsp;out of
                        <Typography style={{ fontSize: "13px", color: "red" }}>&nbsp;...{pageOriData?.length}</Typography>&nbsp;
                    </Box>
                    <Box style={{ padding: "10px 0px 10px 0px" }}>
                        <Pagination count={((pageOriData?.length) - 6) / 10} onChange={pageChange} />
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
                                    <Typography style={{ textAlign: "justify", padding: "5px 0px", fontSize: "13px" }}>Cx - {item?.heading}</Typography>
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
            <Grid item xs='12'>
                <Box style={{ display: "flex", justifyContent: "flex-end", padding: "10px 0px 10px 0px" }}>
                    <Pagination count={((pageOriData?.length) - 6) / 10} onChange={pageChange} />
                </Box>
            </Grid>
        </Grid>
    </Box>
}