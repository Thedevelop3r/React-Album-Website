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

export default function Album() {
  const cardSize = [
    1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4,
  ];

  const AlbumCard = (
    <Card
      sx={{
        width: "100%",
        margin: "8px 0 0 0",
        padding: "0",
      }}
    >
      <CardMedia
        style={{ width: "100%", height: "500px" }}
        title="cardimg"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography variant="h4" color="primary">
          Perfection
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "grey",
          }}
        >
          Balanced as it should be. Uses a random picture api that sends a new
          random picture each time it is called.
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Container
      sx={{ textAlign: "center" }}
      style={{
        marginTop: "30px",
        textAlign: "center",
      }}
    >
      {cardSize.map((val) => AlbumCard)}
    </Container>
  );
}
