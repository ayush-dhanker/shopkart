import React from "react";
import DropdownBttn from "./DropdownBttn";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, Typography } from "@mui/material";
import Product from "./Product";

const Content = () => {
  const item = [
    "Headphone Type",
    "Price",
    "Review",
    "Color",
    "Material",
    "Offer",
  ];

  return (
    <>
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <Box display={{ xs: "none", md: "flex" }}>
            {item.map((ele) => (
              <DropdownBttn name={ele} key={ele} />
            ))}
          </Box>
          <DropdownBttn name={"All Filter"} icon={<TuneIcon />} />
        </div>
        <DropdownBttn name={"Sort By"} />
      </Box>
      <Typography
        paddingTop={"1rem"}
        variant="h5"
        color={"black"}
        fontWeight={600}
        width={"90%"}
        margin={"auto"}
        textAlign={"start"}
      >
        Headphones For You!
      </Typography>
      <Product />
    </>
  );
};

export default Content;
