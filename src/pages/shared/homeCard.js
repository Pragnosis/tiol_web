import { Box, Button, Card, Container, Grid, Typography, Link} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../component/CustomButton';
import { ViewAllModel } from './viewAllModel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom'



export const HomeCard = (props) => {
    const { sectionOneListList, setSectionOneListList } = props;
    const navigate = useNavigate();

    const [viewData, setViewData] = useState(false)
    const [optionData, setOptionData] = useState({})

    const viewAllclickhandler = (option, viewIndex) => {
        setOptionData(option)
        setViewData(true)
    }

    const rowDataClickandler = (pageType, item) => {
        navigate(`/${pageType}?page=${btoa(item)}`)
    }

    const rowDataClickByCategory = (id,todaysupdate="")=>{
        if(todaysupdate){
            navigate(`/news_list?catid=${id}&todaysupdate=true`)
        }else {
            navigate(`/news_list?catid=${id}`)
        }
    }

    return <>
        <Container>
            <Grid container justifyContent='space-between'>

                {
                    sectionOneListList.length > 0 &&
                    sectionOneListList?.map((item, index) => {
                        return index < 3 &&
                            <Grid item xs='12' sm='6' md='4' lg='4' style={{ padding: "5px 20px 10px 10px", borderRadius: "20px" }} spacing={5} >
                                <Box style={{ border: "2px solid #efefef", minHeight: "600px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", borderRadius: "20px", width: "100%" }} >
                                    <Box p={2} justifyContent='center' display='flex' alignItems='center' color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px">
                                        <Typography variant='h6' style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "3px" }}>{item?.categoryName}</Typography>
                                    </Box>
                                    {
                                        item?.sectionsdata?.length > 0 &&
                                        item?.sectionsdata?.map((item) => {
                                            return <> {
                                                item.image_Path ? <Box >
                                                    <Grid container alignItems='center'>
                                                        <Grid item xs='12' sm='8' lg='4' >
                                                            <Box p={2}>
                                                                <img src={item.image_Path} style={{ height: "50px", width: "100px" }} />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs='12' sm='8' lg='8' >
                                                            <Box p={2}>
                                                                <Typography variant='h7'>
                                                                    <Box> <Link onClick={() => rowDataClickandler('news_details',item?.url)} style={{ whiteSpace: "initial", color:"orangered" }}>{item?.date}</Link>
                                                           <span style={{fontSize:'14px'}}> {item?.author ? ` by ${item?.author}`: ''}{item?.place ? ` | ${item?.place}`: ''}</span></Box>
                                                           
                                                                </Typography>
                                                                <Typography variant='h7'>
                                                                    <Box style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} color='#000'>{item.headlines}</Box>
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                    : <Box p={2} >
                                                        <Grid item xs='12'>
                                                            <Typography>
                                                                 <Box> <Link onClick={() => rowDataClickandler('caselaws_details',item?.url)} style={{ whiteSpace: "initial", color:"orangered" }}>{item?.date}</Link>
                                                           <span style={{fontSize:'14px'}}> {item?.author ? ` by ${item?.author}`: ''}{item?.place ? ` | ${item?.place}`: ''}</span></Box>
                                                           
                                                            </Typography>
                                                            <Typography>
                                                                <Box color='#000' style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.headlines}</Box>
                                                            </Typography>
                                                        </Grid>
                                                    </Box>
                                            }
                                            </>
                                        })
                                    }
                                    <Box pt={2}>
                                        {
                                            (item?.categoryName == "TODAY'S CASE (DIRECT TAX)" || item?.categoryName == "TODAY'S CASE (INDIRECT TAX)") &&
                                            <>
                                                <Box style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}>
                                                    <Grid item>
                                                        <CustomButton btnText="View today's updates" onClick={() => rowDataClickByCategory(item?.category,'todaysupdate')}  btnStyle={{ color: "orangered", fontSize: "12px" }} endIcon={<ArrowForwardIosIcon color='orangered' style={{ fontSize: "small" }} />} />
                                                    </Grid>
                                                </Box>
                                            </>

                                        }

                                        <Box style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}>
                                            <Grid item>
                                                <CustomButton btnText='View all' onClick={() => rowDataClickByCategory(item?.category)} btnStyle={{ color: "orangered", fontSize: "12px" }} /*onClick={() => viewAllclickhandler(item, index)}*/ endIcon={<ArrowForwardIosIcon color='orangered' style={{ fontSize: "small" }} />} />
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                    })
                }
            </Grid>
        </Container>

        {
            viewData &&
            <ViewAllModel togglerHandler={setViewData} optionData={optionData} />
        }
    </>
}
