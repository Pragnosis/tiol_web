import React from 'react'
import { CustomDialog } from '../../component/CustomDialog'
import { Grid, Typography, Link } from '@material-ui/core'


export const NewsdetailModel = (props) => {
    const { togglerhandler, newsUpdate } = props;

    console.log("==newsUpdate==",newsUpdate[0])

    const handleClose = () => {
        togglerhandler(false)
    }

    return <CustomDialog maxWidth="md" dialogTitle="News" open="true" handleClose={handleClose} className='model-scroll'>
        <Grid container style={{ padding: "20px" }}>
            {
            newsUpdate[0]?.sectionsdata?.length > 0 &&
            newsUpdate[0]?.sectionsdata?.map((item) => {
                return <Grid item xs='12'>
                <Typography >
                    <Link  href={item?.url} style={{ whiteSpace: "initial", color:"black", fontSize:"14px", padding:"10px 0"}}>
                        {item?.headlines}</Link></Typography>
                </Grid>
            })
            }
        </Grid>
    </CustomDialog>
}
