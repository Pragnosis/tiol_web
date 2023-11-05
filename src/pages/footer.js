import { Box, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { getFooterList } from '../services';
import { useQuery } from 'react-query';
import { updateState } from '../redux/commonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export const Footer = (props) => {
    const { videList, budjetList, footerAPIEnabledFlag, setFooterAPIEnabledFlag,pageType } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const classes = useStyles();

    const { data: footerData, error: footerError } = useQuery(["Footer"], () => getFooterList(), { enabled: footerAPIEnabledFlag, retry: false })

    useEffect(() => {
        if (footerData) {
            setFooterAPIEnabledFlag(false)
            dispatch(updateState({ getAllFooterData: footerData?.data }))

        }
    }, [footerData])

    const titleClickHandler = (item) => {
        navigate(`/${(item?.title).toLowerCase().replace(/\s/g, '')}/news`, { state: item })
    }

    return <Container>
        {pageType=>0 && <Typography style={{ backgroundColor: "#1d1d1c", margin: "20px 0px 20px 0px", borderRadius: "30px" }}>
            <Box style={{ height: "250px", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {
                    videList?.length > 0 &&
                    videList?.map((item) => {
                        return item?.sectionsdata?.map((section) => {
                            return section?.type == "Banner" && section?.secBannerVideo?.length > 0 &&
                                section?.secBannerVideo?.map((itemImage) => {
                                    return itemImage?.section == "Banner Top" &&
                                        <img src={itemImage?.path} style={{ height: "250px", width: "100%", borderRadius: "30px" }} />
                                })
                        })
                    })
                }
            </Box>
        </Typography>
        }
        <Box bgcolor='#e3763c' className={classes.footerWrap}>
            <Box p={5}>
                <Grid container justifyContent='space-between'>
                    <Grid item xs='12' sm='6' md='6' lg='6' xl='6'>
                        {
                            footerData?.data?.length > 0 &&
                            footerData?.data?.map((item) => {
                                return (item?.title == "TIOL APPS") &&
                                    <Grid container justifyContent='space-between'>
                                        <Box display='flex' alignItems='center'>
                                            <Typography variant='h6'>{item?.title}</Typography>
                                            <Link href='#'>
                                                <Box bgcolor='#fff' borderRadius='50%' m='0px 5px 0px 10px' color='#e3763c' display='flex' alignItems='center'>
                                                    <AppleIcon fontSize='small' className={classes.icon} />
                                                </Box>
                                            </Link>
                                            <Link href='#'>
                                                <Box bgcolor='#fff' borderRadius='50%' m='0px 5px 0px 5px' color='#e3763c' display='flex' alignItems='center'>
                                                    <AdbIcon fontSize='small' className={classes.icon} />
                                                </Box>
                                            </Link>
                                        </Box>
                                    </Grid>
                            })
                        }
                    </Grid>
                    <Grid item xs='12' sm='6' md='6' lg='6' xl='6'>
                        {
                            footerData?.data?.length > 0 &&
                            footerData?.data?.map((item) => {
                                return (item?.title == "Follow us") &&
                                    <Grid container alignItems='center'>
                                        <Typography variant='h6'>{item?.title}</Typography>
                                        <Link href="https://www.facebook.com/Taxindiaonline/" target="_blank">
                                            <Box bgcolor='#fff' borderRadius='50%' m='0px 5px 0px 10px' color='#e3763c' display='flex' alignItems='center'>
                                                <FacebookIcon fontSize='small' className={classes.icon} />
                                            </Box>
                                        </Link>
                                        <Link href="https://twitter.com/Taxindiaonline" target="_blank">
                                            <Box bgcolor='#fff' borderRadius='50%' m='0px 5px 0px 5px' color='#e3763c' display='flex' alignItems='center'>
                                                <TwitterIcon fontSize='small' className={classes.icon} />
                                            </Box>
                                        </Link>
                                        <Link href='#' target="_blank">
                                            <Box bgcolor='#fff' borderRadius='50%' m='0px 5px 0px 5px' color='#e3763c' display='flex' alignItems='center'>
                                                <LinkedInIcon fontSize='small' className={classes.icon} />
                                            </Box>
                                        </Link>
                                        <Link href='#' target="_blank">
                                            <Box bgcolor='#fff' borderRadius='50%' m='0px 5px 0px 5px' color='#e3763c' display='flex' alignItems='center'>
                                                <InstagramIcon fontSize='small' className={classes.icon} />
                                            </Box>
                                        </Link>
                                        <Link href='#' target="_blank">
                                            <Box bgcolor='#fff' borderRadius='50%' m='0px 5px 0px 5px' color='#e3763c' display='flex' alignItems='center'>
                                                <WhatsAppIcon fontSize='small' className={classes.icon} />
                                            </Box>
                                        </Link>
                                        <Link href="https://www.youtube.com/channel/UCQ0Vsugyiz0rWM_1oiob3-g" target="_blank">
                                            <Box bgcolor='#fff' borderRadius='50%' m='0px 5px 0px 5px' color='#e3763c' display='flex' alignItems='center'>
                                                <YouTubeIcon fontSize='small' className={classes.icon} />
                                            </Box>
                                        </Link>
                                    </Grid>
                            })
                        }

                    </Grid>

                </Grid>
                <Box>
                    <Box p={3}>
                        <Grid container p='10px 0px 10px 0px'>
                            {
                                footerData?.data?.length > 0 &&
                                footerData?.data?.map((item) => {
                                    return item?.title != "Follow us" && item?.title != "TIOL APPS" &&
                                        <Grid item xs='12' sm='6' md='3' lg='3' xl='3' style={{ padding: "10px" }}>
                                            <Typography style={{ fontSize: "14px" }}><Box pb={1}>{item.title}</Box></Typography>
                                            {
                                                item?.subMenuItems?.length > 0 &&
                                                item?.subMenuItems?.map((item) => {
                                                    return <Box >
                                                        <Box display='flex' alignItems='center'>
                                                            <Box className={classes.dot}></Box>
                                                            <Link style={{ fontSize: "12px" }} >
                                                                <Typography onClick={() => titleClickHandler(item)}>
                                                                    {item.title}
                                                                </Typography>
                                                            </Link>
                                                        </Box>

                                                        {
                                                            item?.subMenuItems.length > 0 &&
                                                            item?.subMenuItems?.map((item) => {
                                                                return <Grid item xs='12' style={{ marginLeft: "15px" }}>
                                                                    <Box alignItems='center' display='flex'>
                                                                        <Box className={classes.dot}></Box>
                                                                        <Link href='apipath' target='_blank' style={{ fontSize: "12px" }}>{item.title}</Link>
                                                                    </Box>
                                                                </Grid>
                                                            })
                                                        }
                                                    </Box>
                                                })
                                            }
                                        </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Grid container>
            <Grid item xs='12' style={{ width: "100%" }}>
                <div className={classes.footerBottomWrap}>
                    {
                        budjetList?.length > 0 &&
                        budjetList?.map((item) => {
                            return item?.categoryName == "TIOL GROUP WEBSITES" &&
                                <Grid item>
                                    <Box>
                                        {
                                            item?.secOtherdata?.length > 0 &&
                                            item?.secOtherdata?.map((item) => {
                                                return <Typography className={classes.footerBottomWrap}>
                                                    <Grid item xs='12'>
                                                        <Box dangerouslySetInnerHTML={{ __html: item.description }} />
                                                    </Grid>
                                                </Typography>
                                            })
                                        }
                                    </Box>
                                </Grid>
                        })
                    }
                </div>
            </Grid>
        </Grid>





    </Container>
}

const useStyles = makeStyles(theme => ({
    footerWrap: {
        color: "#fff",
        borderRadius: "20px",
        "& p": {
            color: "#fff",
            fontSize: "13px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
        },
        "& a": {
            color: "#fff"
        }
    },
    icon: {
        margin: "5px",
        borderRadius: "50%",
    },
    dot: {
        width: "6px",
        height: "6px",
        backgroundColor: "white",
        borderRadius: "50%",
        marginRight: "8px"
    },
    footerBottomWrap: {
        marginTop: "8px",
        "& .text-wrap": {
            backgroundColor: "#f4f4f4",
            borderRadius: "20px 20px 20px 20px",
            "& .text-wrap-manage": {
                padding: "48px",
                textAlign: "center",
                color: "orangered",
                "& .text": {
                    paddingBottom: "20px",
                },

                [theme.breakpoints.between("xs", "sm")]: {
                    "& .image-wrap": {
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }
                },
                [theme.breakpoints.up("md")]: {

                    "& .image-wrap": {
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row",
                        "& .image-first": {
                            display: "flex",
                            width: "300px"
                        },
                        "& .image-second": {
                            display: "flex",
                            width: "250px"
                        },
                        "& .image-third": {
                            display: "flex",
                            width: "120px"
                        },
                    }
                },

            }
        },

        [theme.breakpoints.between("xs", "sm")]: {
            "& .image-wrap": {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            }
        },
        [theme.breakpoints.up("md")]: {
            "& .text-icon-wrap": {
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                marginTop: "32px",
                fontWeight: "bold",
                "& .text-icon": {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                },
                "& .privacy-policy": {
                    fontSize: "14px",
                    color: "#000",
                },
                "& .private-text": {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                }

            }
        },
    }
}));
