import React from 'react'
import TilesType1 from './TilesType1';
import TilesType2 from './TilesType2';
import { Grid, Container, Divider, } from '@mui/material';
import TilesType3 from './TilesType3';
import TilesType4 from './TilesType4';
import SubCat from './SubCat';
import Header from '../pages/header/NavHeader';
import ColumnSearch from './ColumnSearch';
import IndexSearch from './IndexSearch';
import NewsSearch from './NewsSearch';
import NotificationSearch from './NotificationSearch';
import QuickSearch from '../pages/home/QuickSearch';
import Newsupdate from '../pages/home/Newsupdate';
import Subcatdesc from './Subcatdesc';

const Main = () => {
  return (
    <>
      {/* <Container className='main_section_container'> */}
      <Grid direction="row" spacing={2} >

        <Grid item xs={12}>
          <Newsupdate />
        </Grid>

        {/* <Grid item xs={9}>
          <Grid container direction='row' spacing={2} >
            <Grid item xs={6}><TilesType1 /></Grid>
            <Grid item xs={6} ><TilesType1 /></Grid>
            <Grid item xs={6} ><TilesType2 /></Grid>
            <Grid item xs={6} ><TilesType2 /></Grid>
            <Grid item xs={12} ><SubCat /></Grid>
            <Divider></Divider>
            <Grid item xs={12}><ColumnSearch /></Grid>
            <Grid item xs={12}><IndexSearch /></Grid>
            <Grid item xs={12}><NewsSearch /></Grid>
            <Grid item xs={12}><NotificationSearch /></Grid>
            <Grid item xs={12}><QuickSearch /></Grid>
            <Grid item xs={12}><Subcatdesc /></Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} height="100px">
          <Grid container spacing={2}>
            <Grid item>
              <TilesType3 />
            </Grid>
            <Grid item>
              <TilesType4 />
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
      {/* </Container> */}
    </>
  )
}

export default Main;