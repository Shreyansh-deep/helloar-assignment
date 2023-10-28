import { useState } from "react";
import SignIn from "./SignIn";
import OtpScreen from "./OtpScreen";


function Auth() {

  const [number, setNumber] = useState(null);
  const [otpScreen, setOtpScreen] = useState(false)
  const [otpRequestId, setOtpRequestId] = useState(null)

  return (
    <div className="App">
      {!otpScreen && <SignIn setNumber={setNumber} setOtpScreen={setOtpScreen} number={number} setOtpRequestId={setOtpRequestId}/>}
      {otpScreen && <OtpScreen setOtpScreen={setOtpScreen} number={number} otpRequestId={otpRequestId} />}
    </div>
  );
}

export default Auth;
