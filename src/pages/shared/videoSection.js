import { Box, Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const VideoSection = (props) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };

    const { videList } = props;

    const _renderCarouselHtml = (videoId, videoList) => {
        return <Box mx={1}>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                pip={true}
                controls={true}
                playing={false}
                height='200px'
                width='100%'
            />
            <Typography style={{ textAlign: "center", padding: "4px" }}>{videoList?.title?.slice(0, 20)}</Typography>
        </Box>
    }

    return <Container>
        {/* <Grid container>
            {
                videList?.length > 0 &&
                videList?.map((videoList) => {
                    return <Grid item xs='9' style={{ display: "flex", textAlign: "center", alignItems: "center", marginTop: "10px" }}>
                        <Typography>
                            {videoList?.title}
                        </Typography>
                    </Grid>
                })
            }
        </Grid> */}
        {
            videList?.length > 0 &&
            videList?.map((item) => {
                return item?.sectionsdata?.length > 0 && item?.sectionsdata?.map((video) => {
                    return video?.secBannerVideo?.length >= 3 ?
                        <Grid item xs='12' style={{ padding: "5px 20px 10px 10px", borderRadius: "20px" }} spacing={5} >
                            <Box style={{ border: "2px solid #000", minHeight: "350px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", borderRadius: "20px", width: "100%" }} >
                                <Box p={2} justifyContent='center' display='flex' alignItems='center' color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px">
                                    <Typography variant='h6' style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "3px" }}>{item?.categoryName}</Typography>
                                </Box>
                                <Carousel infinite={true} deviceType={"Desktop"} itemClass="image-item" responsive={responsive}>
                                    {
                                        video.type == "Video" && video?.secBannerVideo?.length > 0 && video?.secBannerVideo?.map((videoList) => {
                                            return _renderCarouselHtml(videoList?.video_Id, videoList)
                                        })
                                    }
                                </Carousel>

                            </Box>
                        </Grid>
                        : video.type == "Video" &&
                        <Grid container item xs='12' style={{ paddingBottom: "10px" }}>
                            <Box border="1px solid #efefef" borderRadius="20px" style={{ width: "100%" }}>
                                <Box p={1} textAlign='center' bgcolor='#efefef' borderRadius="20px 20px 0px 0px">
                                    <Grid alignItems='center' style={{ height: "50px", width: "100%" }}>
                                        <Box p={1} justifyContent='center' display='flex' alignItems='center' color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px" style={{ height: "40px" }}>
                                            <Typography variant='h5'>{item?.categoryName}</Typography>
                                        </Box>
                                    </Grid>
                                </Box>
                                <Grid container item xs='12' style={{ padding: "10px 0px 20px 5px" }}>
                                    {
                                        video?.secBannerVideo?.length > 0 && video?.secBannerVideo?.map((videoList) => {
                                            return <Grid item xs='6' sm='6' md='4' lg='3'>
                                                {_renderCarouselHtml(videoList?.video_Id, videoList)}
                                            </Grid>

                                        })
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                })

            })
        }
    </Container >
}
