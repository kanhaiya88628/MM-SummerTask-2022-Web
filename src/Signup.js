import React, {useState} from "react";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Container,
} from "@mui/material";
import { Link ,useNavigate} from "react-router-dom";
import "./App.css";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Signup = () => {
  const navigate = useNavigate()
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const PostData = ()=>{
    fetch("/admin/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstname,
        lastname,
        password,
        email
      })
    }).then(res => res.json())
    .then(data => {
      if(data.error){
        console.log(data.error) 
      }

      else{
        console.log(data.message)
        navigate("/login")
      }
    }).catch(err=>{
      console.log(err)
    })
  }


  return (
    <div className="signup-main">
      <Container>
        <div className="icon">
          <div className="icon_class">
            <PersonAddIcon fontSize="large" />
          </div>
          <div className="text">Sign Up</div>
        </div>

        <div className="first_last">
          <TextField
            id="firstname"
            type="text"
            variant="outlined"
            label="Enter First Name"
            value={firstname}
            onChange= {(e) => setFirstname(e.target.value)}
            fullWidth
          />

          <TextField
            id="lastname"
            type="text"
            variant="outlined"
            label="Enter last Name"
            value={lastname}
            onChange= {(e) => setLastname(e.target.value)}
            fullWidth
          />
        </div>

        <div className="email_pw">
          <TextField
            id="email"
            className="p-2"
            type="text"
            variant="outlined"
            label="Enter Email"
            value={email}
            onChange= {(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            id="password"
            className="p-2"
            type="password"
            variant="outlined"
            label="Enter Password"
            value={password}
            onChange= {(e) => setPassword(e.target.value)}
            fullWidth
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I agree to all terms and conditions."
          />
        </div>
        <div className="createacc-btn">
          <Button variant="contained" color="primary" onClick={() => PostData()}>
            Create Account
          </Button>
        </div>

        <div className="divider">
          <Divider variant="middle" />
          <p className="text-center">
            <Link to="/login" className="below-text">
              <h5> Already have an account?</h5>
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
