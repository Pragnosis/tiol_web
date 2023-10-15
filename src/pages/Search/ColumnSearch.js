import {
  Button,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Select,
  FormControl,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { SearchLanding } from "./searchLanding";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, Stack } from "@mui/material";
import { useEffect } from "react";

const ColumnSearch = () => {
  const [formData, setFormData] = useState({
    keyword: "",
    category: "",
    authour: "",
  });

  const [searchData, setSearchData] = useState(null);
  const [selectionData, setSelectionData] = useState([]);
  const [dropDownCat, setDropDownCat] = useState([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("")
  const [authour, setAuthour] = useState("")

  const dropdownVal = [{ newsTypeId: 123, newsType: "Budget" }];

  useEffect(() => {
    if (!dropDownCat.length) {
      axios
        .get("http://34.229.120.75:8081/api/Utility/GetNewsCategory")
        .then((response) => {
          setDropDownCat(response.data);
        });
    }
  }, []);

  useEffect(() => {
    if (!dropDownCat.length) {
      axios
        .get("http://34.229.120.75:8081/api/Utility/GetNewsCategory")
        .then((response) => {
          setDropDownCat(response.data);
        });
    }
  }, [formData]);

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (
      formData.keyword ||
      formData.keyword == null ||
      formData.authour ||
      formData.authour == null ||
      formData.category ||
      formData.category == null
    ) {
      setOpen(!open);
      console.warn(formData.keyword);
      console.warn(category);
      console.warn(authour);
      axios
        .get(
          `http://34.229.120.75:8081/api/AdvSearchNews/GetNewsIndexPagesAdvSearch/${
            formData.keyword || null
          }/${category || "0"}/${authour || null}`
        )
        .then((response) => {
          setSearchData(response);
          setOpen(false);
        });
    } else {
      return alert("Please select a anyone option");
    }
  };

  const handleChangeEvent = (e) => {
    setCategory(e.target.value);
    const val = e.target.value;
    axios
        .get(
          `http://34.229.120.75:8081/api/Utility/GetNewsTypeAuthor/${val}`
        )
        .then((response) => {
          setSelectionData(response.data)
        });
  }

  return (
    <>
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
            <Typography variant="label">Keyword</Typography>
            <TextField
              label=""
              name="keyword"
              variant="outlined"
              size="small"
              onChange={(e) =>
                setFormData({ ...formData, keyword: e.target.value })
              }
              value={formData.keyword}
              id="keyword"
            />
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
              <Typography variant="label">Category</Typography>
              <Select
                variant="outlined"
                onChange={handleChangeEvent}
              >
                {dropDownCat?.map((item) => (
                  <MenuItem value={item?.newsTypeId}>{item?.newsType}</MenuItem>
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
            <FormControl fullWidth>
              <Typography variant="label">Authour</Typography>
              <Select
                variant="outlined"
                onChange={e => setAuthour(e.target.value)}
                >              
                {selectionData?.map((item) => (
                  <MenuItem value={item?.author}>{item.author}</MenuItem>
                ))}            
              </Select>
            </FormControl>
          </Grid>
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              onsubmitHandler(e);
            }}
          >
            Search
          </Button>
        </Grid>
      </form>
            <SearchLanding searchData={searchData} />
    </>
  );
};

export default ColumnSearch;








