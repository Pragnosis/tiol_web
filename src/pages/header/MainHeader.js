import React, { useEffect, useState } from 'react';
import { Grid, Container, Button, Menu, MenuItem, Typography, SvgIcon } from '@mui/material';
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
import tiol_logo from "../../assets/images/tiol_logo.png"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { ReactSession } from 'react-client-session';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const MainHeader = (props) => {
    const { drawerOpenFlag, setDrawerOpenFlag } = props;
    const commonReducer = useSelector((state) => state.commonReducer);

    const [anchorE1, setAnchorE1] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [drawer1, setDrawer1] = React.useState(false);
    const [drawer2, setDrawer2] = React.useState(false);
    const [drawer3, setDrawer3] = React.useState(false);
    const [drawer4, setDrawer4] = React.useState(false);
    const [drawer5, setDrawer5] = React.useState(false);
    const [userData, setUserData] = React.useState();

    const token = window.localStorage.getItem('token')||null;

    const open1 = Boolean(anchorE1);
    const open2 = Boolean(anchorE2);

    const handleClick1 = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorE1(null);
    };

    const handleClose2 = () => {
        setAnchorE2(null);
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
    const navigate = useNavigate();
    const gotoHome = () => navigate('/')

    const logOut = () => {
        window.localStorage.clear();
    }

    useEffect(()=>{
        ReactSession.setStoreType("localStorage");
        setUserData(ReactSession.get("loginsession"));
        console.log(JSON.stringify(userData));
    },[token]);

    return (
        <>
            <Box>
                <Grid >
                    <Container style={{ borderBottom: '1px solid orangered' }}>
                        <Grid item xs={12}>
                            <Grid container alignItems='flex-end' style={{ position: "relative", height: "90px" }}>
                                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Grid item style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 1200, margin: "0 auto", width: "155px", height: "105px", backgroundColor: "#fff", textAlign: "center" }}>
                                        <img src={tiol_logo} onClick={gotoHome} alt="logo" style={{ width: "92%", margin: "15px auto", cursor: "pointer" }}></img>
                                    </Grid>
                                </Grid>
                                <Grid container item xs='6' style={{ justifyContent: 'flex-end' }} spacing={2}>
                                    <Hidden only={['xs', 'sm']}>
                                        {token==null && <Box mr={2}>
                                            <Button
                                                id='signin-button'
                                                onClick={()=>{navigate('/signin');}}
                                                startIcon={<PersonIcon />}
                                                style={{ backgroundColor: 'transparent', color: 'orangered', fontWeight: 400, fontSize: '14px' }}
                                            >
                                                sign in
                                            </Button>
                                            <Menu id='signin-menu' anchorEl={signin} open={on} onClose={hide}>

                                                <Grid p='10px 0px 10px 0px'>
                                                    {
                                                        commonReducer?.getAllFooterData?.length > 0 &&
                                                        commonReducer?.getAllFooterData?.map((item) => {
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
                                        </Box>}
                                        {token==null && <Box border='1px solid orangered' mb={0.8} mt={1}></Box>}
                                        {token==null && <Box mr={2} >
                                            <Button
                                                id='signin-button'
                                                onClick={show}
                                                startIcon={<LanguageIcon />}
                                                style={{ backgroundColor: 'transparent', color: 'orangered', fontWeight: 400, fontSize: '14px', marginLeft: "15px" }}
                                            >
                                                Subscribe
                                            </Button>
                                        </Box>}
                                        {token && <Box mr={2}>
                                            <Button
                                                id="user-button"
                                                aria-controls={open1 ? 'user-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open1 ? 'true' : undefined}
                                                onClick={handleClick1}
                                                style={{ backgroundColor: 'transparent', color: 'orangered', fontWeight: 400, fontSize: '14px' }}
                                            >
                                                {`${userData?.data.userName} [${userData?.data.accessCosumed} OF ${userData?.data.noOfAccess}]`} 
                                                <ArrowDropDownIcon />
                                            </Button>
                                            <Menu id="user-menu" anchorEl={anchorE1} open={open1} onClose={handleClose1}
                                                MenuListProps={{ 'aria-labelledby': 'user-button', }}
                                            >
                                                <MenuItem onClick={() => { navigate({pathname:'/changepassword', search:`?user=${userData?.data.userName}` }) }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>CHANGE PASSWORD</Typography></MenuItem>
                                                <MenuItem onClick={() => { logOut(); navigate("/") }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>LOGOUT</Typography></MenuItem>
                                            
                                            </Menu>
                                        </Box>}
                                        <Box>
                                            <Button
                                                id="basic-button"
                                                aria-controls={open2 ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open2 ? 'true' : undefined}
                                                onClick={handleClick2}
                                                startIcon={<SearchIcon />}
                                                style={{ backgroundColor: 'orangered', color: '#fff', fontWeight: 400, fontSize: '14px', borderRadius: "10px 10px 0px 0px"}}
                                            >
                                                SEARCH
                                            </Button>
                                            <Menu id="basic-menu" anchorEl={anchorE2} open={open2} onClose={handleClose2}
                                                MenuListProps={{ 'aria-labelledby': 'basic-button', }}
                                            >
                                                <MenuItem onClick={() => { navigate('/search/column') }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>CASE LAW ADVANCE SEARCH</Typography></MenuItem>
                                                <MenuItem onClick={() => { handleClose2(); setDrawer2(true) }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>CASE LAW QUICK SEARCH</Typography></MenuItem>
                                                <MenuItem onClick={() => { navigate('/search/circulars') }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>NOTIFICATIONS/ CIRCULARS</Typography></MenuItem>
                                                <MenuItem onClick={() => { navigate('/search/column') }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>COLUMN SEARCH</Typography></MenuItem>
                                                <MenuItem onClick={() => { handleClose2(); setDrawer5(true) }} divider> <Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>CASE STORIES/ TOP NEWS</Typography></MenuItem>
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