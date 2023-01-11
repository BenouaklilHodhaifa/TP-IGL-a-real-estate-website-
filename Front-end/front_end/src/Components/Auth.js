import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Auth = () => {
  const navigation = useNavigate();
  return (
    <div>
      <GoogleOAuthProvider clientId="699323224027-gn9judmftsjiuqdg3ttb73pj9ghiambq.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={async (Response) => {
            const token = Response.credential;
            const decoded = jwt_decode(token);
            try {
              const res = axios.post(
                "http://127.0.0.1:8000/google/",
                {
                  token,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              console.log((await res).data.access_token);
              localStorage.setItem(
                "Recent_token",
                (await res).data.access_token
              );
              localStorage.setItem("Recent_user", decoded.name);
              navigation("/user");
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
