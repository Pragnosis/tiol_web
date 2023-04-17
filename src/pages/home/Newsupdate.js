import React from 'react';
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Autoplay } from "swiper";
import { Typography } from '@mui/material';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { NewsdetailModel } from './newsdetailModel';

const useStyles = makeStyles(theme => ({
    papermanage: {
        backgroundColor: "#f4f4f4",
        "& p": {
            backgroundColor: "#f4f4f4",
            component: 'h6',
            variant: 'h6',
            fontWeight: 400,
            fontSize: '16px',
            padding: "0 0px 5px 20px"
        }
    },
    budgetWrap: {
        '& .wrap': {
            display: "inline-block",
            width: "48%",
            marginTop: "30px"
        }
    }
}));

const Newsupdate = (props) => {
    const classes = useStyles();
    const { videList, budjetList } = props;

    const [viewAll, setViewAll] = useState(false)

    const viewallclickhandler = () => {
        setViewAll(true)
    }

    return (
        <Container style={{ marginTop: "1px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px 10px 20px" }} className={classes.papermanage}>
                <Box color='orangered'>News Update</Box>
                <Box color='orangered'><DensityMediumIcon cursor='pointer' fontSize='small' onClick={viewallclickhandler} /></Box>
            </Box>
            <Swiper spaceBetween={10} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                pagination={false}
                navigation={false}
                modules={[Autoplay]}
                className="swiper"
            >
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Doordarshan Launches The Promo Of Its Upcoming Mega Show 'Swaraj'</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>MoS says rich natural resources of Chenab not exploited by previous governments, weirdly!</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>50 MW Solar Power Plant - Coal Secretary lays foundational bricks</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Story of a Speaking order</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
                <SwiperSlide className={classes.papermanage}>
                    <Typography>Supply of quality cotton seeds is key to improving productivity of cotton: Goyal</Typography>
                </SwiperSlide>
            </Swiper>
            <Typography style={{ backgroundColor: "#1d1d1c", margin: "20px 0px 20px 0px", borderRadius: "30px" }}>
                <Box style={{ height: "300px", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {
                        videList?.length > 0 &&
                        videList?.map((item) => {
                            return item?.sectionsdata?.map((section) => {
                                return section?.type == "Banner" && section?.secBannerVideo?.length > 0 &&
                                    section?.secBannerVideo?.map((itemImage) => {
                                        return itemImage?.section == "Banner Top" &&
                                            <img src={itemImage?.path} style={{ height: "300px", width: "100%", borderRadius: "30px" }} />
                                    })
                            })
                        })
                    }
                </Box>
            </Typography>
            <Grid item xs='12'>
                {
                    budjetList?.length > 0 &&
                    budjetList?.map((item) => {
                        return item?.categoryName == "Union Budget" &&
                            <Grid container item xs='12' style={{ paddingBottom: "10px" }}>
                                <Box border="1px solid #efefef" borderRadius="20px" style={{ width: "100%" }}>
                                    <Box p={1} textAlign='center' bgcolor='#efefef' borderRadius="20px 20px 0px 0px">
                                        <Grid alignItems='center' style={{ height: "50px", width: "100%" }}>
                                            <Box p={1} justifyContent='center' display='flex' alignItems='center' color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px" style={{ height: "40px" }}>
                                                <Typography variant='h5'>{item?.categoryName}</Typography>
                                            </Box>
                                        </Grid>
                                    </Box>
                                    {
                                        item?.secOtherdata?.length > 0 &&
                                        item?.secOtherdata?.map((item) => {
                                            return <>
                                                <Box className={classes.budgetWrap} p={1} dangerouslySetInnerHTML={{ __html: item.description }} />
                                            </>
                                        })
                                    }
                                </Box>
                            </Grid>
                    })
                }
            </Grid>
            {
                viewAll &&
                <NewsdetailModel togglerhandler={setViewAll} />
            }
        </Container>
    );
};

export default Newsupdate;