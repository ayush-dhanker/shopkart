import React from "react";
import { Box, Paper } from "@mui/material";
import ImageListComp from "./ImageListComp";
import ProductDetails from "./ProductDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const { products } = useSelector((state) => ({
    products: state.data.products,
  }));
  const { id } = useParams();

  return (
    <Paper
      elevation={1}
      width={"100%"}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        marginTop: "2rem",
      }}
    >
      <Box width={{ xs: "100%", sm: "50%" }}>
        <ImageListComp product={products[id - 1]} />
      </Box>
      <Box width={{ xs: "100%", sm: "50%" }}>
        <ProductDetails product={products[id - 1]} />
      </Box>
    </Paper>
  );
};

export default Details;
