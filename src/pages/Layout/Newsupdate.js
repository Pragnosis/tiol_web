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
// import { NewsdetailModel } from './newsdetailModel';

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
            marginTop: "30px",
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
            {
                viewAll &&
                <NewsdetailModel togglerhandler={setViewAll} />
            }
        </Container>
    );
};

export default Newsupdate;