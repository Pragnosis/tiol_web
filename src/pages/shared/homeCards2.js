import { Box, Container, Grid, Typography, Link } from '@material-ui/core'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomButton from '../../component/CustomButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'



export const HomeCards2 = (props) => {
    const { budjetList, videList, sectionTwoList, setSectionTwoList } = props;
    const commonReducer = useSelector((state) => state.commonReducer);
    const navigate = useNavigate();
    const rowDataClickandler = (item,category) => {
        let pageType
        if(item.indexOf("GetNotificationById")>0){
            pageType = 'notification_details'
            navigate(`/${pageType}?page=${btoa(item)}`)
        } else if(item.indexOf("CaselawIndexPage")>0){
            pageType = 'caselaws'
            navigate(`/${pageType}?page=${btoa(item)}`)
        } else if(item.indexOf("GetNewsById")>0){
            pageType = 'news_details'
            navigate(`/${pageType}?page=${btoa(item)}`)
        }
        
    }

    const rowDataClickByCategory = (id)=>{
        navigate(`/news_list?catid=${id}`)
    }

    return <Container>
        <Box my={1}>
            <Grid container spacing={2} >
                <Grid item xs='12' sm='12' md='8' lg='8' xl='8'>
                    <Grid container item spacing={2}>
                        {
                            sectionTwoList.length > 0 &&
                            sectionTwoList?.map((item, index) => {
                                return (index >= 3 && item?.categoryName != "News Update" && item?.categoryName != "WHAT'S NEW (OTHERS)" && item?.categoryName != "WHAT'S NEW (GST)") ? <>
                                    <Grid item xs='12' md='6' lg='6'>
                                        <Box border="1px solid #efefef" borderRadius="20px">
                                            <Box p={1} textAlign='center' bgcolor='#efefef' borderRadius="20px 20px 0px 0px">
                                                <Grid container alignItems='center' style={{ height: "40px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <Box p={1} justifyContent='center' display='flex' alignItems='center' color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px" style={{ height: "30px" }}>
                                                        <Typography variant='h6'>{item?.categoryName}</Typography>
                                                    </Box>
                                                    <Typography variant='h7' >
                                                        {
                                                            item?.categoryAuthor &&
                                                            <Box ml={1}>{`${"by"} ${item?.categoryAuthor}`}</Box>
                                                        }
                                                    </Typography>
                                                </Grid>
                                            </Box>
                                            <Box style={{ minHeight: "200px" }}>
                                                <img src={item?.categoryImagePath} alt='Assets/award.jpg' style={{ width: "100%" }} />
                                            </Box>
                                            {
                                                item?.sectionsdata?.length > 0 &&
                                                item?.sectionsdata?.map((item) => {
                                                    return <Box p={2} >
                                                        <Grid item xs='12'>
                                                            <Typography>
                                                           <Box> <Link onClick={() => rowDataClickandler(item?.url)}  style={{ whiteSpace: "initial", color:"orangered" }}>{item?.date}</Link>
                                                           <span style={{fontSize:'14px'}}> {item?.author ? ` | by ${item?.author}`: ''}{item?.place ? ` | ${item?.place}`: ''}</span></Box>
                                                            </Typography>
                                                            <Typography>
                                                                <Box color='#000'>{item.headlines}</Box>
                                                            </Typography>
                                                        </Grid>
                                                    </Box>
                                                })
                                            }
                                            <Grid container item justifyContent='flex-end' style={{ paddingTop: "10px" }}>
                                               <div></div>
                                            </Grid>
                                            <Grid container item justifyContent='flex-end'>
                                                <CustomButton btnText='View all'  onClick={() => rowDataClickByCategory(item?.category)} btnStyle={{ color: "orangered", fontSize: "12px" }} endIcon={<ArrowForwardIosIcon color='orangered' style={{ fontSize: "small" }} />} />
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </>
                                    : (index > 3 && item?.categoryName != "News Update") ? <>
                                        <Grid item xs='12' sm='12' md='6' lg='6' xl='6'>
                                            <Box border="1px solid #efefef" borderRadius="20px" style={{ height: "100%", width: "100%" }}>
                                                <Box p={1} textAlign='center' bgcolor='#efefef' borderRadius="20px 20px 0px 0px">
                                                    <Grid container alignItems='center' style={{ height: "40px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                        <Box p={1} justifyContent='center' display='flex' alignItems='center' color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px" style={{ height: "30px" }}>
                                                            <Typography variant='h6'>{item?.categoryName}</Typography>
                                                        </Box>
                                                        <Typography variant='h7' >
                                                            {
                                                                item?.categoryAuthor &&
                                                                <Box ml={1}>{`${"by"} ${item?.categoryAuthor}`}</Box>
                                                            }
                                                        </Typography>
                                                    </Grid>
                                                </Box>
                                                {
                                                    item?.sectionsdata?.length > 0 &&
                                                    item?.sectionsdata?.map((item) => {
                                                        return <Box p={1} >
                                                            <Grid item xs='12' style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #efefef" }}>
                                                                <Typography>
                                                                    {item.headlines}
                                                                </Typography>
                                                                <Typography>
                                                                    <Link onClick={() => rowDataClickandler(item?.url)}  style={{ whiteSpace: "initial", color:"orangered" }}>{item?.notificationNo}</Link>
                                                                </Typography>
                                                            </Grid>
                                                        </Box>
                                                    })
                                                }
                                            </Box>
                                        </Grid>
                                    </>
                                        : ""
                            })

                        }
                    </Grid>
                </Grid>
                <Grid item xs='12' sm='12' md='4' lg='4' xl='4'>
                    {
                        budjetList?.length > 0 &&
                        budjetList?.map((item) => {
                            return item?.categoryName !== "Union Budget" && item?.categoryName !=="TIOL GROUP WEBSITES" &&
                                <Grid container item xs='12' style={{ marginBottom: "16px" }}>
                                    <Box border="1px solid #efefef" borderRadius="20px" style={{ width: "100%" }}>
                                        <Box p={1} textAlign='center' bgcolor='#efefef' borderRadius="20px 20px 0px 0px">
                                            <Grid container alignItems='center' style={{ justifyContent: "center", alignItems: "center" }}>
                                                <Box p={1} color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px" style={{ height: "40px" }}>
                                                    <Typography variant='h6'>{item?.categoryName}</Typography>
                                                </Box>
                                            </Grid>
                                        </Box>
                                        {
                                            item?.secOtherdata?.length > 0 &&
                                            item?.secOtherdata?.map((item) => {
                                                return <>
                                                    <Box m={2} textAlign='center' dangerouslySetInnerHTML={{ __html: item.description }} />
                                                </>
                                            })
                                        }
                                    </Box>
                                </Grid>
                        })
                    }
                    <Typography style={{ backgroundColor: "#1d1d1c", margin: "20px 0px 20px 0px", borderRadius: "30px" }}>
                        <Box style={{ height: "300px", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {
                                videList?.length > 0 &&
                                videList?.map((item) => {
                                    return item?.sectionsdata?.map((section) => {
                                        return section?.type == "Banner" && section?.secBannerVideo?.length > 0 &&
                                            section?.secBannerVideo?.map((itemImage) => {
                                                return itemImage?.section == "Banner Right" &&
                                                    <img src={itemImage?.path} style={{ height: "300px", width: "100%", borderRadius: "30px" }} />
                                            })
                                    })
                                })
                            }
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </Container >
}
