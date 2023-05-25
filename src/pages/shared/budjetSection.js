import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typography } from '@mui/material';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

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

const BudjetSection = (props) => {
    const classes = useStyles();
    const { videList, budjetList } = props;

    return (
        <Container style={{ marginTop: "1px" }}>
            <Grid item xs='12'>
                {
                    budjetList?.length > 0 &&
                    budjetList?.map((item) => {
                        return item?.categoryName == "Union Budget" &&
                            <Grid container item xs='12' style={{ paddingBottom: "20px" }}>
                                <Box border="1px solid #efefef" borderRadius="20px" style={{ width: "100%",border:"1px solid #000" }}>
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
        </Container>
    );
};

export default BudjetSection;