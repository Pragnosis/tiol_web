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
    export const Registration = () => {
    const [formData, setFormData] = useState({
        fname: "",
        mname: "",
        lname: "",
        email: "",
        mnumber: "",
        uname: "",
        pass: "",
    });
  
    const [regData, setRegData] = useState(null);
    const [unameavailability, setuname] = useState(null);
    const [selectionData, setSelectionData] = useState([]);
    const [dropDownCat, setDropDownCat] = useState([]);
    const [open, setOpen] = useState(false);
    const [number1] = useState(Math.floor(Math.random() * 10));
    const [number2] = useState(Math.floor(Math.random() * 10));
    const [userAnswer, setUserAnswer] = useState('');
    const [warn, setWarn] = useState('');
    const [mnumber, setMobile] = useState();
    const mpattern = new RegExp(/^[0-9\b]+$/);
    const patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      
    
    function handlemobileNo(event) {
        let new_mobile = event.target.value;
       
        if (!mpattern.test(new_mobile)) {
         setWarn("Please, enter only number");
              setOpen(false);
              window.scrollTo(0, 0);
        } 
        else if(new_mobile.length != 10){
            setWarn("Please, enter valid Mobile number");
              setOpen(false);
              window.scrollTo(0, 0);
        }
        else
        {
            setMobile(new_mobile);
        }
        }
    
  
    const onsubmitHandler = (e) => {
      e.preventDefault();
      setOpen(true);
      const resultValue = checkCaptcha();
      if(!formData.fname )
      {setWarn("First Name is mandatory");
      setOpen(false);
      window.scrollTo(0, 0);
      return false;

  }
      else if(!formData.lname)
      {setWarn("Last Name is mandatory");
      setOpen(false);
      window.scrollTo(0, 0);
      return false;
  }
  else  if(!formData.email)
  {setWarn("Email is mandatory");
  setOpen(false);
  window.scrollTo(0, 0);
  return false;
}
      else  if(!formData.mnumber)
      {setWarn("Mobile Number is mandatory");
      setOpen(false);
      window.scrollTo(0, 0);
      return false;
  }
 
      else  if(!formData.uname)
      {setWarn("User Name is mandatory");
      setOpen(false);
      window.scrollTo(0, 0);
      return false;
  }
      else  if(!formData.pass)
      {setWarn("Password is mandatory");
      setOpen(false);
      window.scrollTo(0, 0);
      return false;
  }
         if (!patternEmail.test(formData.email)) {
          setWarn("Please, enter valid email");
               setOpen(false);
               window.scrollTo(0, 0);
               return false;
              // formData.email=useState(true);
         } 
         if (!mpattern.test(formData.mnumber)) {
          setWarn("Please, enter only number");
               setOpen(false);
               window.scrollTo(0, 0);
               return false;
             //  formData.mnumber=useState(true);
         } 
         else if(formData.mnumber.length != 10){
             setWarn("Please, enter valid Mobile number");
               setOpen(false);
               window.scrollTo(0, 0);
               return false;
         }
      
         if (!validator.isStrongPassword(formData.pass, { 
          minLength: 8, minLowercase: 1, 
          minUppercase: 1, minNumbers: 1, minSymbols: 1 
      })) { 
          setWarn("Please, enter 8 digit password contaning lowercase,uppercase,numbers & special character");
          setOpen(false);
          window.scrollTo(0, 0);
          return false;
      }
      if(resultValue == "true"){
        
       if(formData.uname)
        {
            axios
        .get(
          `http://34.229.120.75:8081/api/Utility/BoolUsername/${
            formData.uname
          }`
        )
        .then((response) => {
         // setuname(response.data["ispresent"]);
           //console.log("==unameAvailability1==",setuname);
           if(response.data["ispresent"]===true)
           {
            setWarn("Username already used");
            setOpen(false);
            window.scrollTo(0, 0);
            return false;
           }
           else
           {
          setOpen(false);
          setWarn(false)
        }
        });
    }

/*console.log("RegPostURL",`http://34.229.120.75:8091/api/RegisterOnline/PostTblRegistrationOnline/${
    formData.fname || null}/${
        formData.mname || null}/${
            formData.lname || null}/${
                formData.email || null}/${
                    formData.mnumber || null}/${
                        formData.uname || null}/${
                            formData.pass || null}
    `)*/


    axios
        .post(
          `http://34.229.120.75:8091/api/RegisterOnline/PostTblRegistrationOnline/${
            formData.fname }/${
                formData.mname || null}/${
                    formData.lname }/${
                        formData.email }/${
                            formData.mnumber }/${
                                formData.uname }/${
                                    formData.pass }
            `
        )
        .then((response) => {
           setRegData(response);
           console.log("==regData==",response.data);
           if(response.data ==-1)
           {
            setWarn("User already registered");
            setOpen(false);
            window.scrollTo(0, 0);
            return false;
           }
           else if (response.data>0)
           {
            setWarn("User Created");
            setOpen(false);
            window.scrollTo(0, 0);
            return false;
           }
           else
           {
          setOpen(false);
          setWarn(false)
        }
        });
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
       
        <Typography variant="h5">New Registration</Typography>
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
            <Typography variant="label" class="required">First Name</Typography>
            <TextField
              label=""
              name="fname"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>
                setFormData({ ...formData, fname: e.target.value })
              }
              value={formData.fname}
              id="fname"
              
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
            <Typography variant="label">Middle Name</Typography>
            <TextField
              label=""
              name="mname"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>
                setFormData({ ...formData, mname: e.target.value })
              }
              value={formData.mname}
              id="mname"
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
            <Typography variant="label" class="required">Last Name</Typography>
            <TextField
              label=""
              name="lname"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>
                setFormData({ ...formData, lname: e.target.value })
              }
              value={formData.lname}
              id="lname"
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
            <Typography variant="label" class="required">Email</Typography>
            <TextField
              label=""
              name="email"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              id="email"
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
            <Typography variant="label" class="required">Mobile Number</Typography>
            <TextField
              label=""
              name="mnumber"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>  setFormData({ ...formData, mnumber: e.target.value })}
            //  onChange={(e) =>  setFormData({handlemobile})
             //onChange={handlemobileNo}
              
              value={formData.mnumber}
              id="mnumber"
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
            <Typography variant="label" class="required">Password</Typography>
            <TextField
              label=""
              name="pass"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>
                setFormData({ ...formData, pass: e.target.value })
              }
              value={formData.pass}
              id="pass"
              type="password"
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
              Save
            </Button>
          </Grid>
        </form>
            
              </Grid>
              </Grid>
  
          </Layout>
      </Container>
  }
  
  
  
  
  
  
  
  
  
  