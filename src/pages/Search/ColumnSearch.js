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
import { SearchLanding } from "./searchLanding";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, Stack } from "@mui/material";
import { useEffect } from "react";
import './Captchaverification.css';

export const ColumnSearch = () => {
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
  const [number1] = useState(Math.floor(Math.random() * 10));
  const [number2] = useState(Math.floor(Math.random() * 10));
  const [userAnswer, setUserAnswer] = useState('');
  const [warn, setWarn] = useState('');

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
    setOpen(true);
    const resultValue = checkCaptcha();
    if(resultValue == "true"){
    if (
     
      formData.category || formData.keyword
    ) {
      axios
        .get(
          `http://34.229.120.75:8081/api/AdvSearchNews/GetNewsIndexPagesAdvSearch/${
            formData.keyword || null
          }/${category || "0"}/${authour || null}`
        )
        .then((response) => {
          setSearchData(response);
          setOpen(false);
          setWarn(false)
        });
    } else {
      //return alert("Please select a anyone option");
      setWarn("Please select at least one filter criteria");
      setOpen(false);
      window.scrollTo(0, 0)
    }}
    else
    {
     // return alert("Please enter the Correct Numeric captcha");
     setWarn("Please enter the correct numeric captcha");
     setOpen(false);
     window.scrollTo(0, 0)
    }
  };
  const checkCaptcha = () => {
    const correctAnswer = number1 + number2;
    const parsedUserAnswer = parseInt(userAnswer, 10);

    if (parsedUserAnswer === correctAnswer) {
      return "true";
    } else {
      return "false";     
    }
  };
  const handleChangeEvent = (e) => {
    setCategory(e.target.value);
    const val = e.target.value;
    setFormData({ ...formData, category: e.target.value })
    axios
        .get(
          `http://34.229.120.75:8081/api/Utility/GetNewsTypeAuthor/${val}`
        )
        .then((response) => {
          setSelectionData(response.data)
        });
  }

  return <Container>
  <Layout>
      <Grid container item style={{marginLeft:'20px',padding:'5px 0 20px 5px',marginTop:'10px'}}>
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
     { warn && <Alert severity="error">{warn}</Alert> }
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
            <FormControl fullWidth>
            <Typography variant="label">Keyword</Typography>
            <TextField
              label=""
              name="keyword"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>
                setFormData({ ...formData, keyword: e.target.value })
              }
              value={formData.keyword}
              id="keyword"
            />
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
              <Typography variant="label">Category</Typography>
              <Select
                variant="outlined"
                onChange={handleChangeEvent}
                id='category'
                name='cateory'
                defaultValue={0}
              >
                 <MenuItem value={0}>Select</MenuItem>
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
                defaultValue={0}
                disabled={category== 0? true : false}
              >
                 <MenuItem value={0}>Select</MenuItem>              
                {selectionData?.map((item) => (
                  <MenuItem value={item?.author}>{item.author}</MenuItem>
                ))}            
              </Select>
            </FormControl>
          </Grid>
          <br />
          <br />
          <FormControl fullWidth>
          <Typography variant="label">Captcha</Typography>
          <p className="captcha-image">        
        {number1} + {number2}  = &nbsp;
      
       <TextField
              label=""
              name="captcha"
              variant="outlined"
              xs={12}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              id="keyword"
            />
      </p>
      </FormControl>
          <Button
            variant="contained"
            color="primary"
            xs={12}
            size='medium'
            onClick={(e) => {
              onsubmitHandler(e);
            }}
          >
            Search
          </Button>
        </Grid>
      </form>
            <SearchLanding searchData={searchData} />
            </Grid>
            </Grid>

        </Layout>
    </Container>
}









