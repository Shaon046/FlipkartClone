import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { authenticarteSignup, authenticarteLogin } from "../../service/api";
import { useState } from "react";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 70%;
  width: 30%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: white;
    font-weight: 500;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div & > Button & > Typography {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: white;
  height: 48px;
  border-radius: 2px;
  margin: 10px;
`;
const RequestOTPButton = styled(Button)`
  text-transform: none;
  background: white;
  color: #2874f0;
  box-shadow: 0 2px 4px 0 rgb(224, 224, 224);
  height: 48px;
  border-radius: 2px;
  margin: 10px;
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  color: #2874f0;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: RGB(228 0 0);
  margin-top: 10px;
  font-weight: 600;
`;

const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signUp: {
    view: "signup",
    heading: `LoLooks like you're new here!`,
    subHeading: "Sign up with your mobile number to get startedgin",
  },
};

const signUpInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValue = {
  username: "",
  password: "",
};

const LoginDialog = (props) => {
  //states🎆🎆🎆🎆🎆
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [login, setLogin] = useState(loginInitialValue);
  const [signUp, setSignUp] = useState(signUpInitialValue);
  const [error, setError] = useState(false);
  const { setAccount } = useContext(DataContext);

  const toggleSignUp = () => {
    toggleAccount(accountInitialValue.signUp);
  };

  const switchs = () => {
    toggleAccount(accountInitialValue.login);
  };

  const onInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value }); // use one onchange fn for multiple test field; you have to write e.target.name inside [], bcz we will use this as a key 🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆
  };

  const signupUser = async () => {
    let response = await authenticarteSignup(signUp);
    console.log(response);
    setAccount(signUp.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    const response = await authenticarteLogin(login);
    console.log(response);
    if (response.status === 200) {
      props.handleClose();
      setAccount(response.data.data.firstname);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={() => {
        props.handleClose();
        switchs();
      }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>

          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Username "
                onChange={(e) => onValueChange(e)}
                name="username"
              />
              {error && (
                <Error>Please Enter a valid username and password</Error>
              )}

              <TextField
                variant="standard"
                label="Enter Password"
                onChange={(e) => onValueChange(e)}
                name="password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>
                {account.heading}
              </LoginButton>

              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTPButton>Request OTP</RequestOTPButton>

              <CreateAccount onClick={() => toggleSignUp()}>
                {account.subHeading}
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Firstname"
                onChange={(e) => onInputChange(e)}
                name="firstname"
              />
              <TextField
                variant="standard"
                label="Enter Lastname"
                onChange={(e) => onInputChange(e)}
                name="lastname"
              />
              <TextField
                variant="standard"
                label="Enter Username"
                onChange={(e) => onInputChange(e)}
                name="username"
              />
              <TextField
                variant="standard"
                label="Enter Email"
                onChange={(e) => onInputChange(e)}
                name="email"
              />
              <TextField
                variant="standard"
                label="Enter Password"
                onChange={(e) => onInputChange(e)}
                name="password"
              />
              <TextField
                variant="standard"
                label="Enter Phone"
                onChange={(e) => onInputChange(e)}
                name="phone"
              />

              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
