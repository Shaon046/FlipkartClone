import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;
const LeftComp = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: { width: "100%" },
}));

const RightComp = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  padding: "15px 5px 5px 5px",
  marginTop: "10px",
  marginLeft: "10px",
  width: "17%",
  textAlign: "center",
  [theme.breakpoints.down("md")]: { display: "none" },
}));

const MidSlide = ({ product, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftComp>
        <Slide product={product} title={title} timer={timer} />
      </LeftComp>
      <RightComp>
        <img src={adURL} alt="ads" style={{ width: "217px" }} />
      </RightComp>
    </Component>
  );
};

export default MidSlide;
