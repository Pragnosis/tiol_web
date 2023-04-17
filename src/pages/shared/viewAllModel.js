import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { CustomDialog } from '../../component/CustomDialog'

export const ViewAllModel = (props) => {
    const { togglerHandler, optionData } = props;

    const handleClose = () => {
        togglerHandler(false)
    }
    return <CustomDialog dialogTitle={optionData.categoryName} open={true} handleClose={handleClose}>
        {
            optionData?.sectionsdata?.length > 0 &&
            optionData?.sectionsdata?.map((item) => {
                return <> {
                    item.image_Path ? <Box >
                        <Grid container alignItems='center'>
                            <Grid item xs='4'>
                                <Box p={2}>
                                    <img src={item.image_Path} style={{ height: "50px", width: "100px" }} />
                                </Box>
                            </Grid>
                            <Grid item xs='8'>
                                <Box p={2}>
                                    <Typography>
                                        <Box color='orangered'>{item.date}</Box>
                                    </Typography>
                                    <Typography>
                                        <Box color='#000'>{item.headlines}</Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                        : <Box p={2} >
                            <Grid item xs='12'>
                                <Typography>
                                    <Box color='orangered'>{item.date}</Box>
                                </Typography>
                                <Typography>
                                    <Box color='#000'>{item.headlines}</Box>
                                </Typography>
                            </Grid>
                        </Box>
                }
                </>
            })
        }
    </CustomDialog>
}
