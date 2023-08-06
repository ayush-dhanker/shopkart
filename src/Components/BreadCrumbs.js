import React from "react";
import { Link, Breadcrumbs, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const BreadCrumbs = () => {
  const { id } = useParams();
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: "2rem" }}>
      <Link underline="hover" color="inherit" href="/">
        HomePage
      </Link>
      <Typography color="inherit">Product</Typography>
      <Typography color="text.primary">Product ID : {id}</Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
