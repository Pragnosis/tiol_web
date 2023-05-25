import { Box, Grid, Paper, TextField, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { caseLawArray } from '../../../component/constant'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { caseLawDynamicdata, caseLawFilterdata } from '../../../services'
import CustomButton from '../../../component/CustomButton'
import { Pagination } from '@mui/material'
import { getErrorMessege } from '../../../component/Validator'
import { useNavigate } from 'react-router-dom'

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

const LandingCaseLaw = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const commonReducer = useSelector((state) => state.commonReducer);
    const [caseLawdata, setCaseLawdata] = useState([])
    const [oriData, setOriData] = useState([])
    const [pagedata, setPagedata] = useState({})
    const [datedata, setDatedata] = useState({
        From_Date: "",
        To_Date: ""
    })
    const [filterDate, setFilterDate] = useState("");
    const intialCount = 10
    const [submitFlag, setSubmitFlag] = useState(false)
    const [prevCount, setPrevCount] = useState(1)
    const [nextCount, setNextCount] = useState(10)

    useEffect(() => {
        if (commonReducer?.currentDynamicPaedata) {
            setPagedata(commonReducer.currentDynamicPaedata);
        }
    }, [commonReducer?.currentDynamicPaedata]);

    const { data, error } = useQuery(['GetDynamicCaselawData'], () => caseLawDynamicdata(commonReducer?.currentDynamicPaedata?.apipath), { enabled: true, retry: false })
    useEffect(() => {
        if (data) {
            setOriData(data?.data)
            setCaseLawdata(data?.data.filter((o, i) => i <= intialCount))
        }
    }, [data])

    const { mutate: dateFilterMutate } = useMutation(caseLawFilterdata, {
        onSuccess: (data, context, variables) => onSuccessFilterDate(data, context, variables),
        onError: (data, context, variables) => onErrorFilterDate(data, context, variables),
    })

    const onSuccessFilterDate = (data) => {
        setOriData(data?.data)
        // setCaseLawdata(data?.data)
        setCaseLawdata(data?.data.filter((o, i) => i <= intialCount))
    }
    const onErrorFilterDate = () => {

    }


    useEffect(() => {
        if (commonReducer?.currentDynamicPaedata) {
            var A = commonReducer.currentDynamicPaedata.apipathfilter;
            var replaceFromDate = A.replace("From_Date", datedata.From_Date);
            var replaceDate = replaceFromDate.replace("To_Date", datedata.To_Date);
            setFilterDate(replaceDate);
        }
    }, [commonReducer?.currentDynamicPaedata, datedata.From_Date, datedata.To_Date]);


    const afterValidate = (callBack) => {
        var errorMszDom = [];
        setTimeout(() => {
            errorMszDom = document.getElementsByClassName("validornot");
            if (errorMszDom.length > 0) {
                callBack()
            }
        }, 1000);
    }

    const afterCallBack = () => {
        dateFilterMutate(filterDate)
    }

    const submitClickHandler = () => {
        afterValidate(afterCallBack)
        // dateFilterMutate(filterDate)

        setSubmitFlag(true)
    }

    const pageChange = (e) => {
        const Prev = (parseInt((e.target.textContent) - 1) * intialCount) + 1;
        setPrevCount(Prev)
        const Next = (parseInt((e.target.textContent)) * intialCount);
        setNextCount(Next)
        const localArray = oriData?.filter((o, i) => (Prev < i && i <= Next))
        setCaseLawdata(localArray)
    }

    const rowDataClickandler = (item) => {
        console.log('itemccccccc', item)
        navigate("/incometax/caselaw/sccases/details",{state:item})
    }

    return <Box>
        <Grid container>
            <Grid item xs='12'>
                <Box style={{ border: "1px solid #ccc", margin: "0px 10px 0px 10px" }}>
                    <Grid container item alignItems='center' spacing={2} style={{ margin: "10px", padding: "20px" }}>
                        <Grid item xs='4'>
                            <Typography>From Date*</Typography>
                            <TextField
                                id="date"
                                type="date"
                                className={classes.textField}
                                fullWidth
                                value={datedata?.From_Date}
                                onChange={(e) => {
                                    setDatedata({ ...datedata, From_Date: e?.target?.value })
                                }}
                                errorMsz={submitFlag && getErrorMessege("From_Date", datedata?.From_Date) != ''}
                                error={submitFlag && getErrorMessege("From_Date", datedata?.From_Date)}

                            />
                            {
                                submitFlag && getErrorMessege("From_Date", datedata?.From_Date) != "" && <Typography className='validornot' style={{ fontSize: "12px", color: "red", paddingLeft: "10px" }}>{getErrorMessege("From_Date", datedata?.From_Date)}</Typography>
                            }


                        </Grid>
                        <Grid item xs='4'>
                            <Typography>To Date*</Typography>
                            <TextField
                                id="date"
                                type="date"
                                className={classes.textField}
                                fullWidth
                                value={datedata?.To_Date}
                                onChange={(e) => {
                                    setDatedata({ ...datedata, To_Date: e?.target?.value })
                                }}
                                errorMsz={submitFlag && getErrorMessege("To_Date", datedata?.To_Date, datedata?.From_Date) != ''}
                                error={submitFlag && getErrorMessege("To_Date", datedata?.To_Date, datedata?.From_Date)}
                            />
                            {
                                submitFlag && <Typography className='validornot' style={{ fontSize: "12px", color: "red", paddingLeft: "10px" }}>{getErrorMessege("To_Date", datedata?.To_Date, datedata?.From_Date)}</Typography>
                            }
                        </Grid>
                        <Grid item xs='2'>
                            <CustomButton
                                variant='contained'
                                btnText='Search'
                                onClick={submitClickHandler}
                                style={{ marginTop: "20px", backgroundColor: "orangered", color: "#fff" }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs='12'>
                <Grid container item justifyContent='space-between' alignItems='center'>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <Typography style={{ fontSize: "13px", color: "red" }}>{prevCount}</Typography>&nbsp;--
                        <Typography style={{ fontSize: "13px", color: "red" }}>&nbsp;{nextCount}</Typography>&nbsp;out of
                        <Typography style={{ fontSize: "13px", color: "red" }}>&nbsp;...{oriData?.length}</Typography>&nbsp;
                    </Box>
                    <Box style={{ padding: "10px 0px 10px 0px" }}>
                        <Pagination count={((oriData?.length) - 6) / 10} onChange={pageChange} />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs='12'>
                <Grid container item>
                    {
                        caseLawdata?.length > 0 && caseLawdata?.map((item) => {
                            return <Grid item xs='12' style={{ margin: "10px" }}>
                                <Box elevation={1} style={{ borderRadius: "20px 20px 0px 0px" }}>
                                    <Typography style={{ color: "#f86e38", borderBottom: "1px solid #ccc", padding: "5px 0px 10px 10px", backgroundColor: "rgb(239, 239, 239)", borderRadius: "20px 20px 0px 0px", cursor: "pointer" }} onClick={() => rowDataClickandler(item)} >{item?.tiolCitation}</Typography>
                                    <Typography style={{ fontWeight: "bold", textAlign: "justify", padding: '10px 10px 5px 10px' }}>{item?.header}</Typography>
                                    <Typography style={{ textAlign: "justify", padding: '10px 10px 5px 10px' }}>{item?.headlines}</Typography>
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
            <Grid item xs='12'>
                <Box style={{ display: "flex", justifyContent: "flex-end", padding: "10px 0px 10px 0px" }}>
                    <Pagination count={10} onChange={pageChange} />
                </Box>
            </Grid>
        </Grid>
    </Box>
}

export default LandingCaseLaw;