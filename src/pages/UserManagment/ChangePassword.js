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
  //import { useSession } from 'react-client-session';
  //import isEmpty from '../../validation/is-empty';
  import { ReactSession } from 'react-client-session';
  //export default ChildComponent;
  export const ChangePassword = () => {
    const [formData, setFormData] = useState({
        oldpass: "",
        pass:"",
        confpass:""

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
      
    //const { session, setSession } = useSession();
    
  
    const onsubmitHandler = (e) => {
      e.preventDefault();
      setOpen(true);
      const resultValue = checkCaptcha();
      if(!formData.oldpass)
      {setWarn("Old Password is mandatory");
      setOpen(false);
      window.scrollTo(0, 0);
      return false;
  }
      
      if(!formData.pass)
    {setWarn("Password is mandatory");
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
if(!formData.confpass)
{setWarn("Confirm Password is mandatory");
setOpen(false);
window.scrollTo(0, 0);
return false;
}
//console.log("password=",formData.pass);
  //  console.log("confirm password=",formData.confpass);
//if(formData.pass & formData.confpass)
//{
   // console.log("password=",formData.pass);
  //  console.log("confirm password=",formData.confpass);
   
  if(! (formData.pass === formData.confpass))
  {
      setWarn("Password and confirm password should be same");
      setOpen(false);
      window.scrollTo(0, 0);
      return false;
  }
//}
      if(resultValue == "true"){

       /* function ChildComponent(props) {
            console.log("parent page Data:",props.data);
            return (
              <div>{props.propValue}</div>
            );
          }*/
          
        
        
        console.log("get from session on another page:-",ReactSession.get("loginsession"));
/*        axios
        .put(
          `${apiConstant.userChangePassword}/@username/${
            formData.pass }/${
                formData.oldpass || null}`
        )
        .then((response) => {
          // setRegData(response);
           console.log("==regData==",response);
           if(response ===0)
           {
            setWarn("Old Password does not matched");
            setOpen(false);
            window.scrollTo(0, 0);
            return false;
           }
           else if (response===-1)
           {
            setWarn("The new password should not be same as earlier three passwords");
            setOpen(false);
            window.scrollTo(0, 0);
            return false;
           }
           else
           {
            setWarn("Password has been successfully changed");
           setOpen(false);
          setWarn(false)
        }
        });
*/
      
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
       
        <Typography variant="h5">Change Password</Typography>
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
            <Typography variant="label" class="required">Old Password</Typography>
            <TextField
              label=""
              name="oldpass"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>
                setFormData({ ...formData, oldpass: e.target.value })
              }
              value={formData.oldpass}
              id="oldpass"
              type="password"
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
            <Typography variant="label" class="required">Confirm Password</Typography>
            <TextField
              label=""
              name="confpass"
              variant="outlined"
              xs={12}
             // size="small"
              onChange={(e) =>
                setFormData({ ...formData, confpass: e.target.value })
              }
              value={formData.confpass}
              id="confpass"
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
              Submit
            </Button>
          </Grid>
        </form>
           
           
              </Grid>
              </Grid>
  
          </Layout>
      </Container>
  }
  