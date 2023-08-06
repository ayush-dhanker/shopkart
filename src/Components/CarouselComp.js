import { Paper, Typography, Button } from "@mui/material";
import React from "react";

const CarouselComp = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        height: "300px",
        width: "90%",
        bgcolor: "#fff0e2",
        margin: "auto",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <Typography
        variant={"h3"}
        color={"darkgreen"}
        width={{ xs: "100%", sm: "50%" }}
        fontWeight={700}
        textAlign={"start"}
        ml={"2rem"}
      >
        Get Upto 40% Off on Selected Headphones
        <br />
        <Button
          variant="contained"
          sx={{ bgcolor: "darkgreen", borderRadius: "16px" }}
        >
          Buy Now
        </Button>
      </Typography>
      <div id="headphone">
        <img src="/headphone.png" alt="headphone" />
      </div>
    </Paper>
  );
};

export default CarouselComp;
