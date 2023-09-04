import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import _ from "lodash";
import axios from "axios";
<<<<<<< HEAD:wly_react/src/pages/client/Login.js
import { googleAuthId } from "../../utils/config";


export default function Login() {

    const auth = (token) => {
        let data = JSON.stringify({ token });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://wly-next-96g34gq4m-sagarworks1288.vercel.app/api/client/sign-up",
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });


    };


    return (<>
        <GoogleOAuthProvider clientId={googleAuthId}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    auth(_.get(credentialResponse, "credential", null));
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </GoogleOAuthProvider>
    </>);
}
=======
import { googleAuthId, baseUrl } from "../utils/config";

export default function Login() {
  const auth = (token) => {

    const postData = { token };

    axios.post("https://funx1650.netlify.app/.netlify/functions/sign-up", postData).then((response) => {
        console.log(JSON.stringify(response.data));
        alert(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <GoogleOAuthProvider clientId={googleAuthId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            auth(_.get(credentialResponse, "credential", null));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}
>>>>>>> e5b1c82185a321f9ac663cae7ccc4f5be460d01a:wly_react/src/pages/Login.js
