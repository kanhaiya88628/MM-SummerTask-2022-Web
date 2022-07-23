import React, {useState,useEffect} from "react";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
  CardActions,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "./Home.css";
import "./App.css";


const Home = () => {
  const [data,setData] = useState([])
  useEffect(() =>{
    fetch("/articles/all")
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setData(result.posts)
    })
  },[])

  const eachPost = (articleid) =>{
    fetch(`/articles/${articleid}`,{
      method:"get"
    }).then(res => res.json())
    .then(result =>{
      console.log(result)
    })
  }

  const likePost =(id) =>{
    fetch("/articles/like",{
      method:"put",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        articleId:id
      })
    }).then(res => res.json())
    .then(result=>{
      console.log(result)
    })
  }
  
  const unlikePost =(id) =>{
    fetch("/articles/unlike",{
      method:"put",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        articleId:id
      })
    }).then(res => res.json())
    .then(result=>{
      console.log(result)
    })
  }

  return (
    <Container className="grid-container">
      <div className="trending-main">
        <Button
          variant="contained"
          component={Link} to="/trendingArticles"
          className="trending-title"
          sx={{ background: "black", display: "inline", padding: "4px" }}
        >
          Trending Articles
        </Button>
        <TextField
          sx={{ marginLeft: "auto", background: "inherit" }}
          id="standard-basic"
          label="Search"
          variant="standard"
        />
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
              <div className="like-dislike">
                <IconButton aria-label="like article" onClick={() =>{likePost(item._id)}}>
                  <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="dislike article" onClick={() =>{unlikePost(item._id)}}>
                  <ThumbDownIcon />
                </IconButton>
                <Typography variant="OVERLINE TEXT">{item.likes}</Typography>

              </div>
              <Button component={Link} to="/eachpost" onClick={() => {eachPost(item._id)}}>Read more</Button>

              <Typography variant="caption">{item.views} views</Typography>

            </CardActions>
          </Card>
        </Grid>
            )
          })
        }
      
      </div>
    </Container>
  );
};

export default Home;
