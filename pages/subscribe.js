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
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Message from '../component/Message'
import Snackbar from '@material-ui/core/Snackbar';
import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';

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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
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
  formControl: {
    // margin: theme.spacing(1),
    // border:1,
    // borderRadius:4,
    minWidth: '100%',
    // maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function SignUp() {
  const classes = useStyles();
  const router = useRouter();
  
  const [input, setInput] =useState({
    name:'',
      mobile:'',
      email:'',
      parentContact:'',
      subjectId:[],
      class:'10th',
      school:'',
  })
  const handleChange = (e)=>{
    setShow(false)
    setE(false)
          // setOpen(false)
      setInput({
          ...input,
        [e.target.name]: e.target.value,
        })
  }
  console.log("Input",input)
  const [e,setE] = useState(false)
  const [alert,setAlert] = useState(false)
  const [showMsg,setShowMsg] = useState(false)
  const [show,setShow] = useState(null)
  const [loading,setLoading] = useState(false)
  //handle Snackbar
  const [state, setState] = React.useState({
    openS: true,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, openS } = state;

  const handleClick = (newState) => () => {
    setState({ openS: true, ...newState });
  };

  const handleCloseS = () => {
    setState({ ...state, openS: false });
  };
  // Loading application
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    // setOpen(false);
  };
  const handleToggle = () => {
    // setOpen(!open);
  };
  const submit = async (e)=>{
    setLoading(true)
    e.preventDefault()
      // console.log("mobileNo",input.mobile.length)
      // console.log('email',input.email)
      if(input.email.includes('@') || input.mobile.length === 10){
          //Using Axios
        // await axios.post('https://cdn-tutorcept.herokuapp.com/subscription/v1/orientation', input)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch((error)=>{
        //       console.log("error",error)
        //   })
//
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
          if(json.error===true){
            console.log('errr',json.error)
            setAlert(true)
          setLoading(false)

          }else{
          setLoading(false)
            setShowMsg(true)
            setOpen(!open)
          }
            // alert(json.message)
            console.log(json)
          })
        .catch(err => console.error(err));

        // setTimeout(function(){router.push('/') }, 3000);
        
            }else{
          setE(true)
          setOpen(false)

      }
  }
  // subject API
  const [subject,setSubject] = useState([])
  const [subjectName,setSubjectName] = useState([])
  const [personName, setPersonName] = React.useState([]);
  const [ids,setIds] = useState([])
  // const ids = []
  const handleChangeSubject = (event) => {
    setPersonName(event.target.value);
    
  };
  const _ids =[]
  useEffect(()=>{
    subjectName.map((name,i)=>{
          subject.map((item,j)=>{
            if(item.name === name){
              // ids.push(item._id)
              console.log("item._id",item._id)
              _ids.push(item._id)
              // setIds([
              //   ...ids,
              //   item._id
              // ])
              
              // console.log("ids",ids)
          }
          
          })
         setInput({
      ...input,
      subjectId: _ids,
    }) 
        })
    
  },[subjectName])
    // console.log("INput",input)

  // console.log("personName",personName)

  // subject API
    useEffect(()=>{
      async function fetchData() {
        // You can await here
        // const response = await MyAPI.getData(someId);
        const resSubject = await fetch("https://cdn-tutorcept.herokuapp.com/subject/v1/get")
        const subjectData = await resSubject.json()
        setSubject(subjectData.data)
        // ...
        console.log("subject",subjectData.data)
      }
      fetchData();
    },[])
    
  return (
    < >
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {showMsg?<Message message={show.message}/>:
      <>
      {loading?
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
  <CircularProgress color="inherit" />
</Backdrop>:''}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon onClick={()=> router.push('/')}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        {!show=== null?<p className='text-green-600 text-xs'>{show.message}</p>:''}
        {e?<p className='text-red-600 text-xs'>Please Enter valid Email or Mobile Number</p>:''}
        {alert?
        <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openS}
        onClose={handleCloseS}
        message={show.message}
        key={vertical + horizontal}
      />
        :''}
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
            <Grid item xs={12}>
              <TextField
              onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="school"
                label="School"
                type="text"
                id="text"
                value={input['school']}
                autoComplete="school"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="class"
                label="Class"
                type="text"
                id="text"
                defaultValue='10th'
                autoComplete="class"
                className='cursor cursor-not-allowed'
                disabled
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple" >Subject</InputLabel>
        <Select
          // labelId="demo-mutiple-checkbox-label"
          id="outlined-age-native-simple"
          // native
                required
                fullWidth
          multiple
          label="Subject"
          value={personName}
          onChange={handleChangeSubject}
          // input={<Input />}
          inputProps={{
            name: 'Subject',
            id: 'outlined-age-native-simple',
          }}
          // renderValue={(selected) => selected.join(', ')}
          renderValue={(selected) => <div className={classes.chips}>
          {selected.map((value) => {
            // console.log("selected",selected)
            setSubjectName(selected)
           return <Chip key={value} label={value} className={classes.chip} />
          })}
        </div>}

          MenuProps={MenuProps}
        >
          {subject.map((name) => (
            <MenuItem key={name.name} value={name.name}>
              <Checkbox checked={personName.indexOf(name.name) > -1} />
              <ListItemText primary={name.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
              {/* <TextField
              onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="school"
                label="School"
                type="text"
                id="text"
                value={input['school']}
                autoComplete="school"
              /> */}
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
    </>
    }
    </Container>
  
  </>
  );
}