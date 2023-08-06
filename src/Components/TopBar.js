import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Box, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TopBar = () => {
  return (
    <Box
      sx={{
        height: "40px",
        width: "100%",
        bgcolor: "darkgreen",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        fontSize: "11px",
        alignItems: "center",
      }}
    >
      <p style={{ display: "flex", lignItems: "center" }} className="mb-0">
        <PhoneOutlinedIcon fontSize="small" />
        +91 1234567890
      </p>
      <p className="mb-0">Get 50% Off on Selected Items | Shop Now</p>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          endIcon={<ArrowDropDownIcon />}
          sx={{ textTransform: "none", color: "white" }}
        >
          Eng
        </Button>
        <Button
          endIcon={<ArrowDropDownIcon />}
          sx={{ textTransform: "none", color: "white" }}
        >
          location
        </Button>
      </Box>
    </Box>
  );
};

export default TopBar;
