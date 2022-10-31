import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography,styled, Button } from "@mui/material";
import { Box } from "@mui/system";
//components
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";


const Container=styled(Grid)`

padding:30px 135px ;
`

const Header=styled(Box)`
padding: 15px 24px;
background:#fff;

`
const PlaceOrderButtonWrapper=styled(Box)`
padding: 16px 22px;
background:#fff;
box-shadow: 0 -2px 10px 0 rgb(0 0 0/ 10%);
border-top:1px solid #f0f0f0;
`
const StyledButton=styled(Button)`
display:flex;
margin-left: auto;
background:#fb641b;
color: white;
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
padding: 16px 30px;
font-size: 16px;
font-weight: 500;
border-radius:2px;

`
const LeftComponent=styled(Grid)`
padding-right:15%;`


const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart {cartItems.length}</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <PlaceOrderButtonWrapper>
                <StyledButton>Place Order</StyledButton>
            </PlaceOrderButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView  cartItems={cartItems}/>
          </Grid>
        </Container>
      ) : (
        <EmptyCart/>
      )}
    </>
  );
};

export default Cart;
