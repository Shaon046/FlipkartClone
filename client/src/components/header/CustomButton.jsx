import React from "react";
import { styled, Box, Button, Typography} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import Profile from "./Profile";
import { DataContext } from "../../context/DataProvider";
import {Link} from 'react-router-dom'


const Wrapper = styled(Box)`
display:'flex'
margin: 0 3% 0 auto;
& > button, & > p, & > div {
    margin-right: 40px;
    font-size: 16px;
    align-item: center;
}
`;
const Container = styled(Link)`
  display: "flex";
  color:white;
  text-decoration:none;
`;

const LoginButton = styled(Button)`
  background: white;
  color: #2874f0;
  padding: 5px 40px;
  text-transform: none;
  border-radius: 2px;
  box-shadow: none;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const { account,setAccount } = useContext(DataContext);
  console.log(account,"okok");

  const openDialog = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper style={{ display: "flex" }}>
      {account ? <Profile account={account} setAccount={setAccount} /> : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container to='/cart' style={{display:'flex'}}>
        <ShoppingCartIcon style={{ display: "flex" }} />
        <Typography  >Cart</Typography>
      </Container>
      <LoginDialog open={open} handleClose={handleClose} />
    </Wrapper>
  );
};

export default CustomButton;
