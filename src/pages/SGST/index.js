import {
  Button,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Select,
  FormControl,
  Container,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { Layout } from '../Layout'
import { SearchLanding } from "./SGSTLanding";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, Stack } from "@mui/material";
import { useEffect } from "react";


export const SGSTPage = () => {
  /*const [formData, setFormData] = useState({
    keyword: "",
    category: "",
    authour: "",
  });*/

  const [searchData, setSearchData] = useState(null);
  const [selectionData, setSelectionData] = useState([]);
  const [dropDownState, setDropDownState] = useState([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("")
  const [dropDownUT, setDropDownUT] = useState([])


  useEffect(() => {
    if (!dropDownState.length) {
      axios
        .get("http://34.229.120.75:8081/api/SGSTIndexPage/GetSGSTState")
        .then((response) => {
          setDropDownState(response.data);
        });
    }
  }, []);

  useEffect(() => {
    if (!dropDownUT.length) {
      axios
        .get("http://34.229.120.75:8081/api/SGSTIndexPage/GetSGSTUT")
        .then((response) => {
          setDropDownUT(response.data);
          console.log('UT-', response);
        });
    }
  }, []);




  const handleChangeEvent = (e) => {
    setCategory(e.target.value);
    const val = e.target.value;
    let state = 'null';
    let ut = 'null';
    if (e.target.name == 'state') {
      state = val;
    } else {
      ut = val;
    }

    const url = encodeURI(`http://34.229.120.75:8081/api/SGSTIndexPage/GetSGSTIndexPage/GST Act (multiple years)/${state}/${ut}`);
    //const newUrl =`http://34.229.120.75:8081/api/SGSTIndexPage/GetSGSTIndexPage/${url}`
    /*setFormData({ ...formData, category: e.target.value })*/
    console.log('==url==', url)
     axios
         .get(
           url
         )
         .then((response) => {
           setSelectionData(response.data)
         });
  }

  return <Container>
    <Layout>
      <Grid container item style={{ marginLeft: '20px', padding: '5px 0 20px 5px', marginTop: '10px' }}>
        <Grid item xs='8'>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          <Typography variant="h5">Column Search</Typography>
          <br />
          <br />
          <form noValidate autoComplete="off">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                direction="row"
                container
                item
                justifyContent="space-between"
                alignItems="center"
                xs={12}
                spacing={3}
              >

              </Grid>
              <br />
              <br />
              <Grid
                direction="row"
                container
                item
                justifyContent="space-between"
                alignItems="center"
                xs={12}
                spacing={3}
              >
                <FormControl fullWidth>
                  <Typography variant="label">state</Typography>
                  <Select
                    variant="outlined"
                    onChange={handleChangeEvent}
                    id='state'
                    name='state'
                    defaultValue={0}
                  >
                    <MenuItem value={0}>Select</MenuItem>
                    {dropDownState?.map((item) => (
                      <MenuItem value={item?.state}>{item?.state}</MenuItem>
                    ))}
                    {/* <MenuItem value={2}>
                   hsbds
                  </MenuItem>
                  <MenuItem value={3}>
                   sdgsd
                  </MenuItem> */}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <Typography variant="label">UT</Typography>
                  <Select
                    variant="outlined"
                    onChange={handleChangeEvent}
                    id='ut'
                    name='ut'
                    defaultValue={0}
                  >
                    <MenuItem value={0}>Select</MenuItem>
                    {dropDownUT?.map((item) => (
                      <MenuItem value={item?.ut}>{item?.ut}</MenuItem>
                    ))}
                    {/* <MenuItem value={2}>
                   hsbds
                  </MenuItem>
                  <MenuItem value={3}>
                   sdgsd
                  </MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              <br />
              <br />
              <Grid
                direction="row"
                container
                item
                justifyContent="space-between"
                alignItems="center"
                xs={12}
                spacing={3}

              >
              </Grid>
              <br />
              <br />


            </Grid>
          </form>
          <SearchLanding searchData={selectionData} />
        </Grid>
      </Grid>

    </Layout>
  </Container>
}









