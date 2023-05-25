import { Box, Container, Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

export const Carts = (props) => {

    const { budjetList, videList } = props;

    return <Container>
        <Box my={1}>
            <Grid container spacing={2} >
                <Grid item xs='12'>
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
                                                    <Box m={2} dangerouslySetInnerHTML={{ __html: item.description }} />
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
