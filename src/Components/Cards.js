import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const Cards = ({ products }) => {
  return (
    <>
      <Card
        style={{
          margin: "10px 10px",
          position: "relative",
          borderRadius: "15px",
          height: "500px",
        }}
      >
        <CardMedia
          image={products?.image}
          component="img"
          style={{
            width: "100%",
            height: "55%",
            borderRadius: "15px",
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "80px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontWeight: "bold" }}>
              {products?.title}
            </Typography>
            <Typography>★ {products?.rating?.rate}</Typography>
          </Box>
          <Typography
            style={{
              fontWeight: "500",
              marginTop: "1em",
              textAlign: "left",
              color: "#545252",
            }}
          >
            {products.category}
            <br />${products?.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/productPage/${products?.id}`}>
            <Button size="small" variant="outlined" sx={{ marginLeft: "1em" }}>
              Add To Cart
            </Button>
          </Link>
        </CardActions>
        <i
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            color: "black",
            opacity: "0.45",
          }}
        >
          <FavoriteIcon />
        </i>
      </Card>
    </>
  );
};

export default Cards;
