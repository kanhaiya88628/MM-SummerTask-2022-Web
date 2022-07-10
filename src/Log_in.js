import React,{useState} from "react";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Container,
} from "@mui/material";

import { Link,useNavigate } from "react-router-dom";
import "./App.css";
import PersonIcon from "@mui/icons-material/Person";

const Log_in = () => {
  const navigate = useNavigate()
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const PostData = ()=>{
    fetch("/admin/login",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        password,
        email
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        console.log(data.error) 
      }

      else{
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("admin",JSON.stringify(data.admin))
        console.log("successfully logged in")
        navigate("/Admin")
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="login-main">
      <Container>
        <div>
          <div className="icon">
            <div className="icon_class">
              <PersonIcon fontSize="large" />
            </div>
            <div className="text">Log in</div>
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
              label="Remember me"
            />
          </div>
          <div className="login-btn">
            <Button variant="contained" color="primary" onClick={()=>PostData()}>
              Log in
            </Button>
          </div>
          <div className="divider">
            <Divider variant="middle" />
            <p className="text-center">
              <Link to="/signup" className="below-text">
                <h5> Create New Account</h5>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Log_in;
