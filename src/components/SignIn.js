import React from "react";
import PhoneInput from "react-phone-input-2";
import { Box, Button, Typography } from "@mui/material";
import { requestOtp } from "../services/authService";
import 'react-phone-input-2/lib/material.css'

const SignIn = ({ setOtpScreen, setNumber, number, setOtpRequestId }) => {
  

  const handleNumberChange = (value) => {
    setNumber(value);
  };

  const handleSignIn = async () => {
    const data = await requestOtp(number)
    if(!data || !data.requestId) return
    setOtpScreen(true)
    setOtpRequestId(data.requestId)
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ width: "100%", maxWidth: "415px" }}
      >
        <Typography color="primary" variant="h4">
          Sign In
        </Typography>
        <p>
          Please enter your mobile number to login. We will send an OTP to
          verify your number.
        </p>
        <PhoneInput
          country={"in"}
          value={number}
          onChange={handleNumberChange}
          inputStyle={{width: "100%!important"}}
        />
        <Button
          onClick={handleSignIn}
          variant="contained"
          sx={{ mt: "20px" }}
          disabled={!number}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
