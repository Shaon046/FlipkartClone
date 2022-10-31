import React from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/actions/cartAction'
import { useState } from "react";

const LeftContainer = styled(Box)``
// (({theme})=>({
//   minWidth: "40%",
//   padding:"40px 0 0 80px",
//   [theme.breakpoints.down('sm')]:{
//     padding:'20px 40px'
//   }
// }))


  

const Image = styled("img")({
  width: "90%",
  padding:'15px'
});

const StyledButton = styled(Button)(({theme})=>({
  width:"48%",
  height: 50,
  borderRadius: 2,
  // [theme.breakpoints.down('lg')]:{  //🎆🎆🎆
  //   width:'44%'
  // }
  // ,
  // [theme.breakpoints.down("sm")]:{
  //   width:"48%"
  // }
}))
 


const ActionItem = ({ product }) => {

  const {id}=product;
  const [quantity,setQuantity]=useState(1)
  
  const navigate=useNavigate();
  const dispatch=useDispatch();
  

  

  const addItemToCart=()=>{
    dispatch(addToCart(id,quantity));
    navigate('/cart');

  }
  
  return (
    <LeftContainer>
      <Box style={{ padding: "15px 20px ", border: "1px solid #f0f0f0" }}>
        <Image src={product.detailUrl} alt="img" />
      </Box>

      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={()=>addItemToCart()}
      >
        Add to Cart
      </StyledButton>

      
      <StyledButton variant="contained" style={{ background: "#fb641b" }}>
        Buy now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
