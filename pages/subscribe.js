import React,{ useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useRouter} from 'next/router'
import axios from 'axios'

function Copyright() {
    
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const router = useRouter();

  const [input, setInput] =useState({
    name:'',
      mobile:'',
      email:'',
      parentContact:'',
  })
  const handleChange = (e)=>{
    setShow(false)
      setInput({
          ...input,
        [e.target.name]: e.target.value,
        })
  }
  const [error,setError] = useState(false)
  const [show,setShow] = useState(null)

  const submit = async (e)=>{
    e.preventDefault()
      console.log("mobileNo",input.mobile.length)
      console.log('email',input.email)
      if(input.email.includes('@') || input.mobile.length === 10){
          //Using Axios
        // await axios.post('https://cdn-tutorcept.herokuapp.com/subscription/v1/orientation', input)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch((error)=>{
        //       console.log("error",error)
        //   })

          //Using Fetch
          await fetch("https://cdn-tutorcept.herokuapp.com/subscription/v1/orientation", {
    // Adding method type
            method: "POST",
      
    // Adding body or contents to send
             body: JSON.stringify(input),
      
    // Adding headers to the request
            headers: {
        "Content-type": "application/json; charset=UTF-8"
            }
        })
  
// Converting to JSON
        .then(response => response.json())
  
// Displaying results to console
        .then(json => {
            setShow(json)
            console.log(json)})
        .catch(err => console.error(err));

        setTimeout(function(){router.push('/') }, 3000);
        
            }else{
          setError(true)
      }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon onClick={()=> router.push('/')}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        {!show=== null?<p className='text-green-600 text-xs'>{show.message}</p>:''}
        {error?<p className='text-red-600 text-xs'>Please Enter valid Email or Mobile Number</p>:''}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={handleChange}
              value={input['name']}
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={handleChange}
              value={input['mobile']}

                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                type='number'
                autoComplete="mobile"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={input['email']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="parentContact"
                label="Parents Mobile Number"
                type="number"
                id="number"
                value={input['parentContact']}
                autoComplete="parentContact"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember Me"
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Register
          </Button>
          {/* <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}