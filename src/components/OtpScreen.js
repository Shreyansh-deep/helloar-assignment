import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { requestOtp, sendOtp } from "../services/authService";
import { NavLink } from "react-router-dom";


const OtpScreen = ({ setOtpScreen, number, otpRequestId }) => {
  const [otp, setOtp] = useState("");

  const handleNumberChange = () => {
    setOtpScreen(false);
  };

  const handleResendOtp = async () => {
    await requestOtp(number);
  };

  const handleSendOtp = async () => {
    await sendOtp(number, otpRequestId, otp)
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
        <h1>OTP Verification</h1>
        <p>
          We have sent an OTP to your number. Please enter the code received to
          verify.
        </p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<div style={{width: 10}}> </div>}
          renderInput={(props) => <input {...props} style={{width: 78, height: 77, borderRadius: 10, textAlign: 'center', fontSize: 36}} />}
        />
        <NavLink to="/auth/song-app">
          <Button variant="contained" sx={{ mt: "20px" }} disabled={!otp} onClick={handleSendOtp} >
            Verify
          </Button>
        </NavLink>
        <Box display="flex" flexDirection="column" alignItems="center">
          <p onClick={handleResendOtp} style={{cursor: "pointer"}}><u>Resend OTP</u></p>
          <p onClick={handleNumberChange} style={{cursor: "pointer", }}><u>Use another number</u></p>
        </Box>
      </Box>
    </Box>
  );
};

export default OtpScreen;
