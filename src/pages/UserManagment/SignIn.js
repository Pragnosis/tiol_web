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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { Layout } from '../Layout'
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, Stack } from "@mui/material";
import { useEffect } from "react";
import '../Search/Captchaverification.css';
import validator from 'validator';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import HowToRegIcon from '@mui/icons-material/HowToReg';
//import { useSession } from 'react-client-session';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import { ChangePassword } from "./ChangePassword";
import { apiConstant } from "../../services/apiConstants";
  
export const SignIn = () => {
      
  const [formData, setFormData] = useState({
      uname: "",
      pass:""
  });
  const label = { inputProps: { 'aria-label': 'Remember me' } };
  const [selectionData, setSelectionData] = useState([]);
  const [open, setOpen] = useState(false);
  const [number1] = useState(Math.floor(Math.random() * 10));
  const [number2] = useState(Math.floor(Math.random() * 10));
  const [userAnswer, setUserAnswer] = useState('');
  const [warn, setWarn] = useState('');
  const [data, setData] = useState('');
  const navigate = useNavigate();
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
else if(!formData.pass)
{setWarn("Password is mandatory");
setOpen(false);
window.scrollTo(0, 0);
return false;
}
    if(resultValue == "true"){
      
      axios
      .get(
        `${apiConstant.userChangePasswordPolicy}/${
          formData.uname
        }`
      )
      .then((response) => {
    
       // console.log("redirect0:",response);
          if(response.data===true)
          {
              console.log("redirect:",response);
              navigate({pathname:'/changepassword', search:`?user=${formData.uname}` });
             // ReactSession.setStoreType("localStorage");
             // ReactSession.set("uname",  formData.uname);
//              <Router>
//              <Routes>
// <Route
//                       path="/changepassword"
//                       element={<Navigate to="<ChangePassword>"/>}
//                   />
          
//           </Routes>
//           </Router>
              }  
          else
          {
                          axios
      .post(
        `${apiConstant.userLogin}/${
          formData.uname
        }/${
          formData.pass
        }`
      )
      .then((response) => {
       // setuname(response.data["ispresent"]);
         if(response !=null && response.data !=null && response.data["userName"])
         {
         ReactSession.setStoreType("localStorage");
          ReactSession.set("loginsession",  response);
          window.localStorage.setItem("token",response.data.token);
          console.log("Succesfuly login redirect to index page");
         console.log("get from session init");
         console.log("get from session:-",ReactSession.get("loginsession"));
         debugger
         setOpen(false);
         setWarn(false)
         navigate('/tiol-web');
         }
         else
         {
          setWarn("Either username is not active or correct kindly connect with TIOL support team in case issues not resolved");
          setOpen(false);
          window.scrollTo(0, 0);
          return false;
              }
      })
      .catch(err => {
          setWarn("Either Username or Password is wrong");
          setOpen(false);
          window.scrollTo(0, 0);
         // setWarn(false)
          return false;
        });
          }
      })
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
     
      <Typography variant="h5">Sign In</Typography>
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
        <div>
        {/* <FormControlLabel control={<Checkbox  />} label="Remember me" /> */}
        <Link
    component="button"
    variant="body2"
    onClick={() => {
      navigate('/forgotpassword');
    }}
  >
    Forgot Password
  </Link>
  &ensp;
  <Button onClick={()=>{navigate('/registration')}} variant="contained" endIcon={<HowToRegIcon />} color="primary">
Register
</Button>
  </div>
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
