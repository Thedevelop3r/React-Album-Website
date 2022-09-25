import React, { useEffect, useState } from "react";

import {
  Typography,
  CardActions,
  Menu,
  AppBar,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { PhotoCamera } from "@mui/icons-material";
import { borderRadius } from "@mui/system";

// importing styles




export default function Album() {
  const cardSize = [
    1,
    2,
    3,
    3,
    4,
    2,
    3,
    3,
    4,
    2,
    3,
    3,
    4,
    2,
    3,
    3,
    4,
    2,
    3,
    3,
    4,
    ,
    2,
    3,
    3,
    4,
    ,
    2,
    3,
    3,
    4,
    ,
    2,
    3,
    3,
    4,
  ];

  const AlbumCard =(id)=>{   
    return (
      <Card className="_card" key={id}>
        <CardMedia
          className="_cardmedia"
          title="random-img"
          image="https://source.unsplash.com/random"
        />
        <CardContent className="_cardcontent">
          <Typography variant="h4" color="primary" className="_cardheading">
            Perfection
          </Typography>
          <Typography variant="body2" className="_cardbody">
            Balanced as it should be. Uses a random picture api that sends a new
            random picture each time it is called.
          </Typography>
        </CardContent>
      </Card>
    );
        }

  return (
   <div className="_cardcontainer" >
    {cardSize.map((value, index)=>{

     return <AlbumCard key={index} id={index}/>
    }) }
   </div>
  );
}
