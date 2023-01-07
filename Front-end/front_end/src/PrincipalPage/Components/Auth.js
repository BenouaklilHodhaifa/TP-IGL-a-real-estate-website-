import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Auth = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="699323224027-gn9judmftsjiuqdg3ttb73pj9ghiambq.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={async (Response) => {
            const token = Response.credential;
            try {
              const res = axios.post(
                "http://127.0.0.1:3000/google/",
                {
                  token,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              console.log(res);
            } catch (err) {
              console.log(err);
            }
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
