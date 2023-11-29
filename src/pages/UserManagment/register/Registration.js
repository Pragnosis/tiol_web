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
  import { Layout } from '../../Layout'
  //import { RegistrationLanding } from "./registrationLanding";
  import Backdrop from "@mui/material/Backdrop";
  import CircularProgress from "@mui/material/CircularProgress";
  import { Alert, Stack } from "@mui/material";
  import { useEffect } from "react";
  import { useForm } from "react-hook-form";
  import { useNavigate } from 'react-router-dom';
  import '../../Search/Captchaverification.css';
  import validator from 'validator';
import { apiConstant } from "../../../services/apiConstants";
  //import isEmpty from '../../validation/is-empty';
    export const Registration = () => {
      const {
        register,
        handleSubmit,
        watch,
        setFocus,
        formState: { errors }
      } = useForm({mode: "onChange"});

      const navigate = useNavigate();
      
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
    
  
    const onsubmitHandler = (data) => {
      // e.preventDefault();
      setOpen(true);
      const resultValue = checkCaptcha();
      alert(JSON.stringify(data));
  
      if(resultValue == "true"){
        
       if(data.userName)
        {
            axios
        .get(
          `${apiConstant.boolUserName}/${
            data.userName
          }`
        )
        .then((response) => {
         
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

    axios
        .post(
          `${apiConstant.userRegistration}/${
            data.firstName }/${
                data.middleName || null}/${
                    data.lastName }/${
                        data.email }/${
                            data.mobileNumber }/${
                                data.userName }/${
                                    data.password }
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
            setTimeout(()=>{
              navigate('/signin');
            },100)
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
    
    console.log(watch("email"));

    const onSubmit = (data) => {
      alert(JSON.stringify(data));
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
        <form onSubmit={handleSubmit(onsubmitHandler)}>
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
                  {...register("firstName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i
                  })}
                />
                {errors?.firstName?.type === "required" && <p className="error">First Name is mandatory</p>}
                {errors?.firstName?.type === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}
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
                <Typography variant="label" >Middle Name</Typography>
                <TextField
                  label=""
                  name="mname"
                  variant="outlined"
                  {...register("middleName", {
                    pattern: /^[A-Za-z]+$/i
                  })}
                />
                {errors?.lastName?.type === "pattern" && (
                  <p className="error">Alphabetical characters only</p>
                )}
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
                  {...register("lastName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i
                  })}
                />
                {errors?.lastName?.type === "required" && <p className="error">Last Name is mandatory</p>}
                {errors?.lastName?.type === "pattern" && (
                  <p className="error">Alphabetical characters only</p>
                )}
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
                  {...register("email", {
                    required: true,
                    pattern: patternEmail
                  })}
                />
                {errors?.email?.type === "required" && <p className="error">Email is mandatory</p>}
                {errors?.email?.type === "pattern" && (
                  <p className="error">Please, enter valid email</p>
                )}
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
                  {...register("mobileNumber", {
                    required: true,
                    minLength:1,
                    maxLength: 10,
                    pattern: mpattern
                  })}
                />
                {errors?.mobileNumber?.type === "required" && <p className="error">Mobile Number is mandatory</p>}
                {errors?.mobileNumber?.type === "minLength" && (
                  <p className="error">Please, enter valid Mobile number</p>
                )}
                {errors?.mobileNumber?.type === "maxLength" && (
                  <p className="error">Please, enter valid Mobile number</p>
                )}
                {errors?.mobileNumber?.type === "pattern" && (
                  <p className="error">Please, enter only number</p>
                )}
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
                  {...register("userName", {
                    required: true
                  })}
                />
                {errors?.userName?.type === "required" && <p className="error">User Name is mandatory</p>}
                
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
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                  })}
                  type="password"
                />
                {errors?.password?.type === "required" && <p className="error">Password is mandatory</p>}
                {errors?.password?.type === "pattern" && (
                  <p className="error">Please, enter 8 digit password contaning lowercase,uppercase,numbers & special character</p>
                )}
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
              type="submit"
              // onClick={(e) => {
              //   onsubmitHandler(e);
              // }}
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
  
  
  
  
  
  
  
  
  
  