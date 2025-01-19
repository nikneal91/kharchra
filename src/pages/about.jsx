import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const About = () => {
   
    return (<>
        <div className='text-center p-4'>
            <h1 className="text-2xl font-bold text-gray-700 mb-6"> About Us </h1>
            <p>Welcome to our website. We are dedicated to providing the best service possible.</p>
            <p>Our team is composed of experienced professionals who are passionate about what they do.</p>
            <p>Thank you for visiting our site. We hope you find what you are looking for.</p>
        </div>
        </>);
};

export default About;