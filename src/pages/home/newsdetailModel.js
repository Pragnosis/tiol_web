import React from 'react'
import { CustomDialog } from '../../component/CustomDialog'
import { Grid, Typography } from '@material-ui/core'


export const NewsdetailModel = (props) => {
    const { togglerhandler } = props;

    const Arr = [
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Doordarshan Launches The Promo Of Its Upcoming Mega Show 'Swaraj'" },
        { value: "MoS says rich natural resources of Chenab not exploited by previous governments, weirdly!" },
        { value: "50 MW Solar Power Plant - Coal Secretary lays foundational bricks" },
        { value: "Story of a Speaking order" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },
        { value: "Supply of quality cotton seeds is key to improving productivity of cotton: Goyal" },

    ]

    const handleClose = () => {
        togglerhandler(false)
    }

    return <CustomDialog maxWidth="sm" dialogTitle="News" open="true" handleClose={handleClose} >
        <Grid container style={{ padding: "20px" }}>
            {
                Arr.length > 0 &&
                Arr.map((item) => {
                    return <Grid item xs='12'>
                        <Typography> {item.value}</Typography>
                    </Grid>
                })
            }
        </Grid>
    </CustomDialog>
}
