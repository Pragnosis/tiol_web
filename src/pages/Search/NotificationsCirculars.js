import {
    Button,
    Grid,
    TextField,
    MenuItem,
    Typography,
    Select,
    InputLabel,
    FormControl,
    Container
  } from "@material-ui/core";
  import axios from "axios";
  import React, { useState } from "react";
  import {SearchLanding} from "../Search/searchLanding";
  import Backdrop from "@mui/material/Backdrop";
  import CircularProgress from "@mui/material/CircularProgress";
  import { Alert, Stack } from "@mui/material";
  import { useEffect } from "react";
  import { Layout } from '../Layout'
  import { apiConstant } from "../../services/apiConstants";
  import './Captchaverification.css';
  
  
  export const NotificaionsCirculars = () => {
    const [formData, setFormData] = useState({
      keyword: "",
      header: "",
      category: "",
      ordernumber: "",
      subCategoryValue: "",
      subSubCategoryValue: "",
      subSubSubCategoryValue: "",
    });
  
    const [searchData, setSearchData] = useState(null);
    const [DropDownSubCat, setDropDownSubCat] = useState([]);
    const [DropDownSubSubCat, setDropDownSubSubCat] = useState([]);
    const [dropDownSubSubSubCat, setDropDownSubSubSubCat] = useState([]);
    const [open, setOpen] = useState(false);
    const [dropDownCat, setDropDownCat] = useState([]);
    const [category, setCategory] = useState("")
    const [subCategoryValue, setSubCategoryValue] = useState("")
    const [subSubCategoryValue, setSubSubCategoryValue] = useState("")
    const [subSubSubCategoryValue, setSubSubSubCategoryValue] = useState("")
    const [number1] = useState(Math.floor(Math.random() * 10));
    const [number2] = useState(Math.floor(Math.random() * 10));
    const [userAnswer, setUserAnswer] = useState('');
  
    useEffect(() => {
      if (!dropDownCat.length) {
        axios
          .get(apiConstant.getNotificationCategory)
          .then((response) => {
            setDropDownCat(response.data);
            console.warn("Testing" + response.data);
          });
      }
    }, []);
  
    useEffect(() => {
      if (!dropDownCat.length) {
        axios
          .get(apiConstant.getNotificationCategory)
          .then((response) => {
            setDropDownCat(response.data);
            console.warn(response.data);
          });
      }
    }, [formData]);
  
  
    const onsubmitHandler = (e) => {
      e.preventDefault();
      const resultValue = checkCaptcha();
      if(resultValue == "true"){
      if (
        formData.keyword ||
        formData.keyword == null ||
        formData.header ||
        formData.header == null ||
        formData.ordernumber ||
        formData.ordernumber == null ||
        category ||
        category == null ||
        subCategoryValue ||
        subCategoryValue == null ||
        subSubCategoryValue ||
        subSubCategoryValue == null ||
        subSubSubCategoryValue ||
        subSubSubCategoryValue == null
      ) {
        setOpen(!open);
        axios
          .get(
            `${apiConstant.getNotificationAdvSearch}/
            ${formData.keyword || null}/
            ${formData.header || null}/
            ${formData.ordernumber || null}/
            ${category || "0"}/
            ${formData.subCategory || "0"}/
            ${formData.subsubCategory || "0"}/
            ${formData.subsubsubCategory || "0"}/0`
          )
          .then((response) => {          
            setSearchData(response);
            console.warn(response);
            setOpen(false);
          });
      } else {
        return (
         alert('Please select a anyone option')
        );
      }
    }
    else
    {
      return alert("Please enter the Correct Numeric captcha");
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

    const handleChangeEventCategory = (e, type) => {
      setCategory(e.target.value);
      const val = e.target.value;
      axios
          .get(
            `${apiConstant.getNotificationSubCategory}/${val}`
          )
          .then((response) => {
            setDropDownSubCat(response.data)          
          });
    }
  
    const handleChangeEventSubCategory = (e) => {
      setSubCategoryValue(e.target.value);
      const val = e.target.value;
      axios
          .get(
            `${apiConstant.getNotificationLevel1}/${val}`
          )
          .then((response) => {
            setDropDownSubSubCat(response.data)
          });
    }
  
    const handleChangeEventSubSubCategory = (e) => {
      setSubSubCategoryValue(e.target.value);
      const val = e.target.value;
      axios
          .get(
            `${apiConstant.getNotificationLevel2}/${val}`
          )
          .then((response) => {
            setDropDownSubSubSubCat(response.data)
          });
    }
  
  
    return <Container>
    <Layout> 
      <>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Typography variant="h5">NotificaionsCirculars</Typography>
        <br />
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
              <Typography variant="label">Title/Header</Typography>
              <TextField
                label=" "
                name="header"
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setFormData({ ...formData, header: e.target.value })
                }
                value={formData.header}
                id="header"
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
              <Typography variant="label">
                Cir/Not./Inst./Admin. Order No
              </Typography>
              <TextField
                label=" "
                variant="outlined"
                size="small"
                name="ordernumber"
                onChange={(e) =>
                  setFormData({ ...formData, ordernumber: e.target.value })
                }
                value={formData.ordernumber}
                id="ordernumber"
              />
            </Grid>{" "}
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
                  onChange={handleChangeEventCategory}
                >
                  {dropDownCat?.map((item) => (
                    <MenuItem value={item?.category_Id}>{item?.category_Name}</MenuItem>
                  ))}            
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
                <Typography variant="label">Sub Category</Typography>
                <Select
                  variant="outlined"
                  onChange={handleChangeEventSubCategory}
                >
                  {DropDownSubCat?.map((item) => (
                    <MenuItem value={item?.sub_Category_Id}>{item.sub_Category_Name}</MenuItem>
                  ))}    
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
              {" "}
              <FormControl fullWidth>
                <Typography variant="label">Sub Sub Category</Typography>
                <Select
                  variant="outlined"
                  onChange={handleChangeEventSubSubCategory}
                >
                   {DropDownSubSubCat?.map((item) => (
                    <MenuItem value={item?.sub_Level1_Id}>{item.level1_Name}</MenuItem>
                  ))}    
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
              {" "}
              <FormControl fullWidth>
                <Typography variant="label">Sub Sub SUb Category</Typography>
                <Select
                  variant="outlined"
                  onChange={e => setSubSubSubCategoryValue(e.target.value)}
                >
                   {dropDownSubSubSubCat?.map((item) => (
                    <MenuItem value={item?.sub_Level2_Id}>{item.level2_Name}</MenuItem>
                  ))}    
                </Select>
              </FormControl>
            </Grid>
            <br />
            <br />
            <p className="captcha-image">        
        {number1} + {number2}  &nbsp;&nbsp;&nbsp;&nbsp; <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="captcha-input"
      />
      </p>
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
    </Layout>
    </Container>
  };
  
  