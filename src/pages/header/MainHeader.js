import React, { useState } from 'react';
import { Grid, Container, Button, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Card, Hidden, Link } from '@material-ui/core';
import NavHeader from './NavHeader';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import MenuBarComp from "../menubar";
import { sidebarArr2 } from "../menubar/constant";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const MainHeader = (props) => {
    const { drawerOpenFlag, setDrawerOpenFlag, footerList } = props;


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawer1, setDrawer1] = React.useState(false);
    const [drawer2, setDrawer2] = React.useState(false);
    const [drawer3, setDrawer3] = React.useState(false);
    const [drawer4, setDrawer4] = React.useState(false);
    const [drawer5, setDrawer5] = React.useState(false);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [signin, setSignin] = useState(null);
    const [on, setOn] = useState(false);

    const hide = () => {
        setSignin(null);
        setOn(false);

    };

    const show = (e) => {
        setSignin(e.currentTarget);
        setOn(true);
    };

    const [hideDrawer, setHideDrawer] = useState(false)

    const menuClickhandler = () => {
        setHideDrawer(!hideDrawer)
    }


    return (
        <>
            <Box>
                <Grid container style={{ borderBottom: '1px solid orangered' }}>
                    <Container>
                        <Grid item xs={12}>
                            <Grid container alignItems='flex-end' style={{ position: "relative", height: "90px" }}>
                                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Grid item style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 1200, margin: "0 auto", width: "155px", height: "105px", backgroundColor: "#fff", textAlign: "center" }}>
                                        <img src='Assets/tiol_logo.png' alt="logo" style={{ width: "92%", margin: "15px auto" }}></img>
                                    </Grid>
                                </Grid>
                                <Grid container item xs='6' style={{ justifyContent: 'flex-end' }} spacing={2}>
                                    <Hidden only={['xs', 'sm']}>
                                        <Box mr={2}>
                                            <Button
                                                id='signin-button'
                                                onClick={show}
                                                startIcon={<PersonIcon />}
                                                style={{ backgroundColor: 'transparent', color: 'orangered', fontWeight: 400, fontSize: '14px' }}
                                            >
                                                sign in
                                            </Button>
                                            <Menu id='signin-menu' anchorEl={signin} open={on} onClose={hide}>

                                                <Grid p='10px 0px 10px 0px'>
                                                    {
                                                        footerList?.length > 0 &&
                                                        footerList?.map((item) => {
                                                            return item?.title == "TIOL INFO" &&
                                                                item?.subMenuItems?.length > 0 &&
                                                                item?.subMenuItems?.map((item) => {
                                                                    return item?.title == "SUBSCRIPTIONS" &&
                                                                        item?.subMenuItems?.length > 0 &&
                                                                        item?.subMenuItems?.map((item) => {
                                                                            return <MenuItem onClick={hide} divider><Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>
                                                                                {item?.title}
                                                                            </Typography></MenuItem>
                                                                        })
                                                                })

                                                        })
                                                    }
                                                </Grid>

                                            </Menu>
                                        </Box>
                                        <Box border='1px solid orangered' mb={0.8} mt={1}></Box>
                                        <Box mr={2} >
                                            <Button
                                                id='signin-button'
                                                onClick={show}
                                                startIcon={<LanguageIcon />}
                                                style={{ backgroundColor: 'transparent', color: 'orangered', fontWeight: 400, fontSize: '14px', marginLeft: "15px" }}
                                            >
                                                Subscribe
                                            </Button>
                                        </Box>
                                        <Box>
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                                startIcon={<SearchIcon />}
                                                style={{ backgroundColor: 'orangered', color: '#fff', fontWeight: 400, fontSize: '14px', borderRadius: "10px 10px 0px 0px", marginBottom: "-10px" }}
                                            >
                                                SEARCH
                                            </Button>
                                            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                                                MenuListProps={{ 'aria-labelledby': 'basic-button', }}
                                            >
                                                <MenuItem onClick={() => { handleClose(); setDrawer1(true) }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>CASE LAW ADVANCE SEARCH</Typography></MenuItem>
                                                <MenuItem onClick={() => { handleClose(); setDrawer2(true) }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>CASE LAW QUICK SEARCH</Typography></MenuItem>
                                                <MenuItem onClick={() => { handleClose(); setDrawer3(true) }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>NOTIFICATIONS/ CIRCULARS</Typography></MenuItem>
                                                <MenuItem onClick={() => { handleClose(); setDrawer4(true) }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>COLUMN SEARCH</Typography></MenuItem>
                                                <MenuItem onClick={() => { handleClose(); setDrawer5(true) }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>CASE STORIES/ TOP NEWS</Typography></MenuItem>
                                            </Menu>
                                        </Box>
                                    </Hidden>
                                    <Hidden only={['lg', 'md', 'xl']}>
                                        <Box>
                                            <IconButton
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                aria-label="menu"
                                                onClick={() => setDrawerOpenFlag(!drawerOpenFlag)}
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                        </Box>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Container>
                </Grid>
                <NavHeader />
            </Box>
        </>
    );
};

export default MainHeader;