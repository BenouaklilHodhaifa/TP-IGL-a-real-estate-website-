import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Auth = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="699323224027-gn9judmftsjiuqdg3ttb73pj9ghiambq.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={async (Response) => {
            console.log(Response.credential);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Auth;
