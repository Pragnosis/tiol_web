import React from 'react'
import { CustomDialog } from '../../component/CustomDialog'
import { Grid, Typography, Link } from '@material-ui/core'


export const NewsdetailModel = (props) => {
    const { togglerhandler, newsUpdate } = props;

    const handleClose = () => {
        togglerhandler(false)
    }

    return <CustomDialog maxWidth="md"  dialogTitle="News Update" open="true" textAlign="center" handleClose={handleClose} className='model-scroll'>
        <Grid container style={{ padding: "20px" }}>
            {
            newsUpdate[0]?.sectionsdata?.length > 0 &&
            newsUpdate[0]?.sectionsdata?.map((item) => {
                return <Grid item xs='12'>
                <Typography style={{ padding: "0 0 10px 0", fontSize:"14px",}}>
                   {item?.url!="" && <Link  href={item?.url} style={{ color:"orangered", whiteSpace: "initial",  padding:"10px 0"}}>
                        {item?.headlines}</Link>} {item?.url=="" && item?.headlines} </Typography>
                </Grid>
            })
            }
        </Grid>
    </CustomDialog>
}
