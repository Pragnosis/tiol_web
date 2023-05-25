import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomButton from '../../component/CustomButton';



export const HomeCards2 = (props) => {

    const { budjetList, videList, sectionTwoList, setSectionTwoList } = props;

    return <Container>
        <Box my={1}>
            <Grid container spacing={2} >
                <Grid container item xs='12' sm='12' md='8' lg='8' xl='8' spacing={2}>
                    {
                        sectionTwoList.length > 0 &&
                        sectionTwoList?.map((item, index) => {
                            return (index >= 3 && item?.categoryName != "News Update" && item?.categoryName != "WHAT'S NEW (OTHERS)" && item?.categoryName != "WHAT'S NEW (GST)") ? <>
                                <Grid item xs='12' md='6' lg='6'>
                                    <Box border="1px solid #efefef" borderRadius="20px" style={{ height: "100%", width: "100%" }}>
                                        <Box p={1} textAlign='center' bgcolor='#efefef' borderRadius="20px 20px 0px 0px">
                                            <Grid container alignItems='center' style={{ height: "40px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Box p={1} justifyContent='center' display='flex' alignItems='center' color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px" style={{ height: "30px" }}>
                                                    <Typography variant='h6'>{item?.column_name}</Typography>
                                                </Box>
                                                <Typography variant='h7' >
                                                    {
                                                        item?.author &&
                                                        <Box ml={1}>{`${"by"} ${item?.author}`}</Box>
                                                    }
                                                </Typography>
                                            </Grid>
                                        </Box>
                                        <img src={item?.image_Path} alt='Assets/award.jpg' style={{ width: "100%" }} />
                                        {
                                            item?.sectionsdata?.length > 0 &&
                                            item?.sectionsdata?.map((item) => {
                                                return <Box p={2} >
                                                    <Grid item xs='12'>
                                                        <Typography>
                                                            <Box color='orangered'>{item.date}</Box>
                                                        </Typography>
                                                        <Typography>
                                                            <Box color='#000'>{item.headlines}</Box>
                                                        </Typography>
                                                    </Grid>
                                                </Box>
                                            })
                                        }
                                        <Box style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}>
                                            <Grid item>
                                                <CustomButton btnText='View all' btnStyle={{ color: "orangered", fontSize: "12px" }} endIcon={<ArrowForwardIosIcon color='orangered' style={{ fontSize: "small" }} />} />
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                            </>
                                : (index > 3 && item?.categoryName != "News Update") ? <>
                                    <Grid item xs='12' sm='12' md='6' lg='6' xl='6'>
                                        <Box border="1px solid #efefef" borderRadius="20px" style={{ height: "100%", width: "100%" }}>
                                            <Box p={1} textAlign='center' bgcolor='#efefef' borderRadius="20px 20px 0px 0px">
                                                <Grid container alignItems='center' style={{ height: "40px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <Box p={1} justifyContent='center' display='flex' alignItems='center' color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px" style={{ height: "30px" }}>
                                                        <Typography variant='h6'>{item?.column_name}</Typography>
                                                    </Box>
                                                    <Typography variant='h7' >
                                                        {
                                                            item?.author &&
                                                            <Box ml={1}>{`${"by"} ${item?.author}`}</Box>
                                                        }
                                                    </Typography>
                                                </Grid>
                                            </Box>
                                            {/* <img src={item?.image_Path} alt='Assets/award.jpg' style={{ width: "100%" }} /> */}
                                            {
                                                item?.sectionsdata?.length > 0 &&
                                                item?.sectionsdata?.map((item) => {
                                                    return <Box p={1} >
                                                        <Grid item xs='12' style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #efefef" }}>
                                                            <Typography>
                                                                {item.headlines}
                                                            </Typography>
                                                            <Typography>
                                                                {item.notificationNo}
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
                <Grid item xs='12' sm='12' md='4' lg='4' xl='4'>
                    {
                        budjetList?.length > 0 &&
                        budjetList?.map((item) => {
                            return item?.categoryName !== "Union Budget" &&
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
