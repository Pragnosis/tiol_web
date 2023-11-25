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
  //import { RegistrationLanding } from "./registrationLanding";
  import Backdrop from "@mui/material/Backdrop";
  import CircularProgress from "@mui/material/CircularProgress";
  import { Alert, Stack } from "@mui/material";
  import { useEffect } from "react";
  import '../Search/Captchaverification.css';
  import validator from 'validator';
  //import isEmpty from '../../validation/is-empty';
    export const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        uname: ""
    });
  
   // const [regData, setRegData] = useState(null);
    //const [unameavailability, setuname] = useState(null);
    const [selectionData, setSelectionData] = useState([]);
    //const [dropDownCat, setDropDownCat] = useState([]);
    const [open, setOpen] = useState(false);
    const [number1] = useState(Math.floor(Math.random() * 10));
    const [number2] = useState(Math.floor(Math.random() * 10));
    const [userAnswer, setUserAnswer] = useState('');
    const [warn, setWarn] = useState('');
    //const [mnumber, setMobile] = useState();
    //const mpattern = new RegExp(/^[0-9\b]+$/);
    //const patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      
    
    
  
    const onsubmitHandler = (e) => {
      e.preventDefault();
      setOpen(true);
      const resultValue = checkCaptcha();
      if(!formData.uname)
      {setWarn("User Name is mandatory");
      setOpen(false);
      window.scrollTo(0, 0);
      return false;
  }
      if(resultValue == "true"){
        
         
       if(formData.uname)
        {
            axios
        .get(
          `http://34.229.120.75:8091/api/LoginMasters/ForgetPassword/${
            formData.uname
          }`
        )
        .then((response) => {
         // setuname(response.data["ispresent"]);
           console.log("==ForgotPassword==",response.data);
           if(response.data===true)
           {
            setWarn("Your password sent successfully to your email address.");
            setOpen(false);
            window.scrollTo(0, 0);
            // setWarn(false)
            //return true;
           }
           else
           {
            setWarn("Either username is not active or correct kindly connect with TIOL support team in case issues not resolved");
            setOpen(false);
            window.scrollTo(0, 0);
           // setWarn(false)
            return false;
                }
        });
    }

       }
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
       
        <Typography variant="h5">Forgot Password</Typography>
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
            <Typography variant="label" class="required">User Name</Typography>
            <TextField
              label=""
              name="uname"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>
                setFormData({ ...formData, uname: e.target.value })
              }
              value={formData.uname}
              id="uname"
            />
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
              Submit
            </Button>
          </Grid>
        </form>
           
           
              </Grid>
              </Grid>
  
          </Layout>
      </Container>
  }
  