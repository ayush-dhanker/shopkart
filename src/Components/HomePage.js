import React from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import CarouselComp from "./CarouselComp";
import Content from "./Content";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <CarouselComp />
      <Content />
    </>
  );
};

export default HomePage;
