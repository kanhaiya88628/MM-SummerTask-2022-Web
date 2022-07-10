import React,{useState,useEffect} from "react";

import {useNavigate } from "react-router-dom";
import "./App.css";
import {
  Grid,
  Card,
  Input,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Link,
  CardActions,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Createpost = () => {
  const navigate = useNavigate()
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [date,setDate] = useState("")
  const [photo,setPhoto] = useState("")
  const [url,setUrl] = useState("")

  useEffect(() =>{
    if(url){
    fetch("/articles/createpost",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        title,
        body,
        date,
        pic:url
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        console.log(data.error) 
      }

      else{
        console.log("successfully created")
        navigate("/Admin")
      }
    }).catch(err=>{
      console.log(err)
    })
  }
  },[url])

  const postDetails = () =>{
    const data = new FormData()
    data.append("file",photo)
    data.append("upload_preset","MM-task")
    data.append("cloud_name","wiwiz")
    fetch("https://api.cloudinary.com/v1_1/wiwiz/image/upload",{
      method:"post",
      body:data
    })
    .then(res => res.json())
    .then(data =>{
      setUrl(data.url)
    })
    .catch(err => {
      console.log(err)
    })

    
  }

  const [data,setData] = useState([])
  useEffect(() =>{
    fetch("/articles/all")
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setData(result.posts)
    })
  },[])

  const deletePost = (articleid) =>{
    fetch(`/articles/${articleid}`,{
      method:"delete",
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res => res.json())
    .then(result =>{
      console.log(result)
      const newData = data.filter(item =>{
        return item._id !== result._id
      })
      setData(newData)
    })
  }

 
  return (
    <div>
      <Container>
        <div className="createpost_main">
        <TextField
          id="standard-textarea"
          label="Title"
          multiline
          variant="standard"
          sx={{ margin:"10px"}}
          value={title}
          onChange= {(e)=> setTitle(e.target.value)}
        />
        <TextField
          id="standard-textarea"
          label="Body"
          multiline
          variant="standard"
          sx={{ margin:"10px"}}
          value={body}
          onChange= {(e)=> setBody(e.target.value)}
        />
        <TextField
          id="standard-textarea"
          label="Date"
          multiline
          variant="standard"
          sx={{ margin:"10px"}}
          value={date}
          onChange= {(e)=> setDate(e.target.value)}
        />
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e)=>setPhoto(e.target.files[0])}
          />
          
        </label>

        <Button variant="contained" sx={{width:"150px", margin:"20px auto"}}
        onClick={()=>postDetails()}
        >Submit post</Button>
        </div>

        <div className="home-card">
        {
          data.map(item => {
            return(
              <Grid item xs={12} sm={12} md={4} className="cardItem1">
          <Card sx={{margin:"10px 10px 10px 10px"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={item.photo}
              />
              <CardContent>
              
                <Typography variant="caption">{item.date}</Typography>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="caption">{item.author.firstname}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <div className="delete_btn">
                <IconButton aria-label="delete article" onClick={()=>deletePost(item._id)}>
                  <DeleteIcon />
                </IconButton>
                
                <Button variant="contained">Update</Button>
              </div>
            </CardActions>
          </Card>
        </Grid>
            )
          })
        }
        
      </div>

      </Container>
    </div>
  );
};

export default Createpost;
