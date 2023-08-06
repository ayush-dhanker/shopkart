import React from "react";
import NavBar from "./NavBar";
import BreadCrumbs from "./BreadCrumbs";
import Details from "./Details";

const ProductPage = () => {
  return (
    <>
      <NavBar shadow={1} />
      <div style={{ width: "90%", margin: "auto" }}>
        <BreadCrumbs />
        <Details />
      </div>
    </>
  );
};

export default ProductPage;
