import { Box, Typography,styled } from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";

const Header=styled(Box)`
padding: 15px 24px;
background:#fff;
border-bottom:1px solid #f0f0f0;
`

const Heading=styled(Box)`
color:#878787;


`
const Container=styled(Box)`
padding:15px 24px;
background:#fff;
& > p{
    margin-buttom: 20px;
    font-size:14px;
},
& > h6{
    margin-buttom: 20px;
    padding-top:10px;
    border-top:1px solid #f0f0f0;
}

`
const Price=styled(Box)`
float:right;
`
const Discount= styled(Typography)`
padding-top:10px;
color:green;
font-weight:500;


`

const TotalView = ({ cartItems }) => {
const deliveryCharge=40
const [price,setPrice]=useState(0);
const [discount,setDiscount]=useState(0);


useEffect(()=>{
totalAmount();
},[cartItems])

const totalAmount = ()=>{
    let price=0,discount=0;
    
    cartItems.map(item => {
        price += item.price.mrp;
        discount += (item.price.mrp - item.price.cost);

    });
    
    setPrice(price)
    setDiscount(discount)
    }


        


  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
      <Typography>
        Price {cartItems?.length}
        <Price component="span">₹{price}</Price>
      </Typography>

      <Typography>
        Discount 
        <Price component="span">₹{discount}</Price>
      </Typography>

      <Typography>
        Delivery Charges 
        <Price component="span">₹{deliveryCharge}</Price>
      </Typography>

      <Typography variant="h6"   >
        Total Amount
        <Price component="span">₹{price - discount +deliveryCharge}</Price>
      </Typography>

      <Discount>You will save ₹{discount -40} on this order</Discount>
      </Container>
    </Box>
  );
};

export default TotalView;
