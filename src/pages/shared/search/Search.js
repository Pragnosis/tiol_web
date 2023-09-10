import { Box, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useMutation } from 'react-query'
import { getErrorMessege } from '../../../component/Validator'
import CustomButton from '../../../component/CustomButton'
import { caseLawFilterdata } from '../../../services'
import { useSelector } from 'react-redux'
import { useSearchHook } from './SearchHook'

export const CustomSearch = (props) => {
    const { getDataFromSearch } = props;
    const { dateFilterMutate, oriData, afterValidate } = useSearchHook();

    const commonReducer = useSelector((state) => state.commonReducer);

    const [submitFlag, setSubmitFlag] = useState(false)
    const [filterDate, setFilterDate] = useState("");
    const [datedata, setDatedata] = useState({
        From_Date: "",
        To_Date: ""
    })

   /* useEffect(() => {
        console.log("==aaa====")
        getDataFromSearch(oriData);
    }, [oriData])

*/
    useEffect(() => {
        if (commonReducer?.currentDynamicPaedata) {
            var A = commonReducer?.currentDynamicPaedata?.apipathfilter;
            var replaceFromDate = A?.replace("From_Date", datedata.From_Date);
            var replaceDate = replaceFromDate?.replace("To_Date", datedata.To_Date);
            setFilterDate(replaceDate);
        }
    }, [commonReducer?.currentDynamicPaedata, datedata.From_Date, datedata.To_Date]);


    const afterCallBack = () => {
        dateFilterMutate(filterDate)
    }

    const submitClickHandler = () => {
        console.log("==filterDate==",datedata.From_Date,datedata.To_Date);
        afterValidate(afterCallBack)
        setSubmitFlag(true)
        const date = {
            from:datedata.From_Date,
            to:datedata.To_Date
        }
        getDataFromSearch(date)
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
                                fullWidth
                                value={datedata?.From_Date}
                                onChange={(e) => {
                                    setDatedata({ ...datedata, From_Date: e?.target?.value })
                                }}
                                errorMsz={submitFlag && getErrorMessege("From_Date", datedata?.From_Date) != ''}
                                error={submitFlag && getErrorMessege("From_Date", datedata?.From_Date)}

                            />
                            {
                                submitFlag && getErrorMessege("From_Date", datedata?.From_Date) == "" &&
                                <Typography className='validornot' style={{ fontSize: "12px", color: "red", paddingLeft: "10px" }}>
                                    {getErrorMessege("From_Date", datedata?.From_Date)}
                                </Typography>
                            }


                        </Grid>
                        <Grid item xs='4'>
                            <Typography>To Date*</Typography>
                            <TextField
                                id="date"
                                type="date"
                                fullWidth
                                value={datedata?.To_Date}
                                onChange={(e) => {
                                    setDatedata({ ...datedata, To_Date: e?.target?.value })
                                }}
                                errorMsz={submitFlag && getErrorMessege("To_Date", datedata?.To_Date, datedata?.From_Date) != ''}
                                error={submitFlag && getErrorMessege("To_Date", datedata?.To_Date, datedata?.From_Date)}
                            />
                            {
                                submitFlag && getErrorMessege("To_Date", datedata?.To_Date) == "" && <Typography className='validornot' style={{ fontSize: "12px", color: "red", paddingLeft: "10px" }}>{getErrorMessege("To_Date", datedata?.To_Date, datedata?.From_Date)}</Typography>
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
        </Grid>
    </Box>
}
