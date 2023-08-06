import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "./Cards";
import { getProduct } from "../Store/State/actions";

const Product = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => ({
    products: state.data.products,
  }));

  useEffect(() => {
    if (products.length.toString() === "0") {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => dispatch(getProduct(json)))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <Grid container spacing={{ sm: 2, lg: 2 }}>
      {products.map((ele) => (
        <Grid
          item
          xs={8}
          sm={4}
          md={3}
          lg={3}
          key={ele?.id}
          sx={{ margin: { xs: "auto" } }}
        >
          <Cards products={ele} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;
