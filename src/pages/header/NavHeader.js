import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Grid, Menu, MenuItem } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import CustomButton from '../../component/CustomButton';
import { getMenuItems } from '../../services';
import MenuItemComp from '../../component/header/MenuItemComp';
import { Button, Hidden, Link } from '@material-ui/core';
import { Typography } from '@mui/material';



import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { updateState } from '../../redux/commonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';


function NavHeader() {
  const menuItemRef = useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const commonReducer = useSelector((state) => state.commonReducer);


  const [headerArr, setHeaderArr] = useState([])
  const [currentNavText, setCurrentNavText] = useState('')
  const [subMenuPosition, setSubMenuPosition] = useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (e, title) => {
    setCurrentNavText(title)
    setSubMenuPosition(e.currentTarget)
    setAnchorEl(e.currentTarget);

  }

  const closeMenu = () => {
    setCurrentNavText("")
    setSubMenuPosition(null);
    setAnchorEl(null);

  };

  const handleItemClickhandler = (item, routeTo, type) => {
    console.log("LinkUrl=",item,routeTo,type)
    var routeto = type === 'nested'
      ? `/${routeTo}/${item.title.replace(" ", "_")}`.toLowerCase()
      : `/${item.title.replace(" ", "_")}`.toLowerCase()
    setSubMenuPosition(null);
    setCurrentNavText("")
    // dispatch(updateState({ currentDynamicPaedata: item }));
    navigate('/'+item?.webpath)
    setTimeout(() => {
      setAnchorEl(null);
    }, 2000);
    dispatch(updateState({ currentClickedMenu: item }));
  };

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


  const { data: headerData } = useQuery(["Header"], () => getMenuItems(), { enabled: true, retry: false })

  useEffect(() => {
    headerData && setHeaderArr(headerData)
    dispatch(updateState({ mainMenuData: headerData }));
  }, [headerData])

  useEffect(() => {
    var locationArr = location.pathname.split("/");
    var localArr = [];
    headerArr.length > 0 && headerArr.map((item) => {
      if (item.title.replace(" ", "_").toLowerCase() === locationArr[1]) {
        if (item.subMenuItems.length > 0) {
          return item.subMenuItems.map((option) => {
            if (option.title.replace(" ", "_").toLowerCase() === locationArr[2]) {
              if (option.subMenuItems.length > 0) {
                return option.subMenuItems.map((subItemOption) => {
                  if (subItemOption.title.replace(" ", "_").toLowerCase() === locationArr[3]) {
                    localArr.push(subItemOption)
                  }
                })
              } else {
                localArr.push(option)
              }
            }
          })
        } else {
          localArr.push(item)
        }
      }

    });
    dispatch(updateState({ currentDynamicPaedata: localArr[0] }));

  }, [headerArr, location?.pathname])

  return (
    <>

      <Hidden only={['xs', 'sm']}>
        <Container className='main_section_container'>
          <Box py={2}>
            <Grid container justifyContent="center">
              <Grid item xs="12">
                <Grid container justifyContent='flex-end'>
                  {
                    headerArr.length > 0 && headerArr.map((item) => {
                      return <>
                        <Box>
                          <CustomButton
                            btnText={item.title}
                            aria-controls="employee-menu"
                            aria-haspopup="true"
                            size="small"
                            variant="text"
                            style={{ padding: '2px 5px 2px 5px', textTransform: "capitalize" }}
                            onClick={(e) => openMenu(e, item.title)}
                          />

                          {
                            item.subMenuItems.length > 0 ?
                              <Menu
                                id="employee-menu"
                                open={currentNavText == item.title}
                                onClose={closeMenu}
                                anchorEl={anchorEl}
                              >
                                {
                                  item.subMenuItems.map((option) => {
                                    return <div key={item.label}>
                                      {/* <Link href="javascript:void()" onClick={(e) => { e.preventDefault(); navigate(`/${option.title.toLowerCase()}`) }}> */}
                                      <MenuItemComp ref={menuItemRef} item={option} itemTitle={item.title} routeTo={`${item.title}/${option.title}`} position={subMenuPosition} handleItemClickhandler={handleItemClickhandler} />
                                      {/* </Link> */}
                                    </div>
                                  }

                                  )
                                }
                              </Menu>
                              : null
                          }
                        </Box>
                      </>
                    })
                  }

                </Grid>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Hidden>
      <Hidden only={['lg', 'md', 'xl']}>
        <Grid container item xs='12' style={{ justifyContent: 'flex-end', padding: "30px 20px 10px 0px" }} spacing={2}>
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
              <MenuItem onClick={hide} divider><Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>CHANGE PASSWORD</Typography></MenuItem>
              <MenuItem onClick={hide} divider><Typography component='h6' variant='h6' style={{ fontWeight: 400, fontSize: '14px' }}>LOGOUT</Typography></MenuItem>
            </Menu>
          </Box>
          <Box mr={2} borderLeft='1px solid orangered' >
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
        </Grid>
      </Hidden>

    </>
  )
}


export default NavHeader;

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center',
    background: '#f5f3ef',
  },
  items: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemsList: {
    display: 'flex',
    alignItems: 'center',
    width: '65%',
  },
  itemsBtn: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
  },
  scrollBtn: {
    cursor: 'pointer'
  },
  dashButton: {
    display: "flex",
    alignItems: 'center',
    background: '#004172',
    borderRadius: '20px',
    color: 'white'
  }
}))
