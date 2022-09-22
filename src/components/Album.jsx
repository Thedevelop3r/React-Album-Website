import React from "react";
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

export default function Album() {
  const cardSize = [
    1, 2, 3, 3, 4, 2, 3, 4, 2, 3, 4,
  ];

  const AlbumCard =(id)=>{  return(
    <Card key={id}
    // {
    //     // width: "100%",
    //     // marginBottom: "2rem",
    //     // padding: "0",
    //   }
      sx={4}
      style={{
        display: "inline-block",
        width:"100%"
      }}
    >
      <CardMedia
        style={{ width: "100%", height: "350px" }}
        title="cardimg"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography
          style={{
            marginBottom: "8px",
            paddingLeft:"4px",
            borderLeft: "2px solid"
            
          }}
          variant="h4"
          color="primary"
        >
          Perfection
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "grey",
            paddingLeft: "4px",
            borderLeft: "2px solid",
            // borderRadius:"4px"
            
          }}
        >

          Balanced as it should be. Uses a random picture api that sends a new
          random picture each time it is called.
        </Typography>
      </CardContent>
    </Card>
  );
        }

  return (
    <Grid container spacing={2} columnSpacing={{xs:2, sm:2, md:3, lg:4}}>
      {cardSize.map((value, index) => (
        <Grid  key={index} item xs={12} sm={8} md={8} lg={8} xl={4}>
          <AlbumCard id={index} />
        </Grid>
      ))}
    </Grid>
  );
}
