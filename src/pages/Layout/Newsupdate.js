import React, { useEffect } from 'react';
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Autoplay } from "swiper";
import { Typography } from '@mui/material';
import { Box, Container, Grid, makeStyles,Link } from '@material-ui/core';
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
            marginTop: "30px",
        }
    }
}));

const Newsupdate = (props) => {
    const classes = useStyles();
    const { videList, budjetList, sectionData } = props;

    const [viewAll, setViewAll] = useState(false)
    const [updateNews, setUpdateNews] = useState([])

    const viewallclickhandler = () => {
        setViewAll(true)
    }

    useEffect(()=>{
        let newArray = sectionData?.filter(function(item)
        {
             return  item?.categoryName === "News Update"
        });
        setUpdateNews({...newArray,...updateNews})
console.log("==updateNews==",updateNews);
    },[sectionData])

    return updateNews && (
        <Container style={{ marginTop: "1px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px 10px 20px" }} className={classes.papermanage}>
                <Box color='orangered'>
                News Update
                </Box>
                <Box color='orangered'><DensityMediumIcon cursor='pointer' fontSize='small' onClick={viewallclickhandler} /></Box>
            </Box>
            <Swiper spaceBetween={10} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                pagination={false}
                navigation={false}
                modules={[Autoplay]}
                className="swiper"
            >
            {
                updateNews[0]?.sectionsdata?.length > 0 &&
                updateNews[0]?.sectionsdata?.map((item) => {
                return <SwiperSlide className={classes.papermanage}>
                    <Typography style={{fontSize:"14px"}}>
                   {item?.url!= "" && <Link  href={item?.url} style={{ whiteSpace: "initial", color:"orangered" }}>
                        {item?.headlines}</Link>}{item?.url== "" && item?.headlines}</Typography>
                </SwiperSlide>
                })
            }
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
                <NewsdetailModel togglerhandler={setViewAll} newsUpdate={updateNews}/>
            }
        </Container>
    );
};

export default Newsupdate;