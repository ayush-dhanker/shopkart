import { Box, Divider, Rating, Typography } from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import KeyboardReturnTwoToneIcon from "@mui/icons-material/KeyboardReturnTwoTone";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "95%" },
        margin: "auto",
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Box
        sx={{
          width: "60%",
          minHeight: "160px",
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          margin: { xs: "auto", sm: "0" },
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {product?.title}
        </Typography>
        <Typography fontSize={"12px"}>{product?.description}</Typography>
        <Rating style={{ marginTop: "1rem" }} value={product?.rating?.rate} />
      </Box>
      <Divider sx={{ width: "80%", marginTop: "1rem", marginBottom: "1rem" }} />
      <Box
        sx={{
          width: "60%",
          height: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: { xs: "auto", sm: "0" },
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          $ {product?.price}
        </Typography>
        <Typography fontSize={"12px"}>
          Suggested payments with 6 months special financing
        </Typography>
      </Box>
      <Divider sx={{ width: "80%", marginTop: "1rem", marginBottom: "1rem" }} />
      <Box
        sx={{
          width: "60%",
          height: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: { xs: "auto", sm: "0" },
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Choose a Color
        </Typography>
        <div style={{ display: "flex" }}>
          <LensIcon
            sx={{
              fontSize: "xx-large",
              color: "white",
              border: "1px solid black",
              borderRadius: "50%",
              marginRight: "1rem",
            }}
          />
          <LensIcon
            sx={{
              fontSize: "xx-large",
              color: "orange",
              border: "1px solid black",
              borderRadius: "50%",
              marginRight: "1rem",
            }}
          />
          <LensIcon
            sx={{
              fontSize: "xx-large",
              color: "yellow",
              border: "1px solid black",
              borderRadius: "50%",
              marginRight: "1rem",
            }}
          />
          <LensIcon
            sx={{
              fontSize: "xx-large",
              color: "lightblue",
              border: "1px solid black",
              borderRadius: "50%",
              marginRight: "1rem",
            }}
          />
        </div>
      </Box>
      <Divider sx={{ width: "80%", marginTop: "1rem", marginBottom: "1rem" }} />
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid lightgrey",
          borderRadius: "8px",
          margin: { xs: "auto", sm: "0" },
        }}
      >
        <div>
          <p className="delivery">
            <LocalShippingTwoToneIcon />
            <span>Free Delivery</span>
            <p>Enter your Postal Code for Delivery Availability</p>
          </p>
        </div>
        <Divider />
        <Box></Box>
        <div>
          <p className="delivery">
            <KeyboardReturnTwoToneIcon />
            <span>
              Return Delivery <br />
            </span>
            <span>Free 30 Days return policy.</span>
            <span style={{ textDecoration: "underLine" }}>Details</span>
          </p>
        </div>
      </Box>
    </Box>
  );
};

export default ProductDetails;
