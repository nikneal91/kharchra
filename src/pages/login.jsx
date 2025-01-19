import React from 'react';
import { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Login, 2: OTP Verification
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      // Simulate sending OTP
      console.log("OTP sent to:", phoneNumber);
      setStep(2);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp) {
      // Simulate OTP verification
      console.log("OTP entered:", otp);
      navigate('/kharchra/profile');
    }
  };


    const handleSuccess = (credentialResponse) => {
        console.log("Login Success:", credentialResponse);
        alert("Login Successful! Token: " + credentialResponse.credential);
      };
    
      const handleError = () => {
        console.error("Login Failed");
        alert("Login failed. Please try again!");
      };

    return (<>
 <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {step === 1 && (
          <form onSubmit={handlePhoneSubmit}>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Login with Phone Number
            </h1>
            <label className="block mb-2 text-gray-600">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300"
            >
              Continue
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Enter OTP
            </h1>
            <label className="block mb-2 text-gray-600">OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-green-300"
            >
              Verify OTP
            </button>
          </form>
        )}
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          <h1 className="text-center text-1xl font-bold text-gray-700 mb-6 p-4">
            Google Login Demo
          </h1>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
          />
    </GoogleOAuthProvider></div>
    </div>
        </>);
};

export default Login;