import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import _ from "lodash";
import axios from "axios";
import { googleAuthId, baseUrl } from "../../utils/config";
import {Link} from "react-router-dom";

export default function Login() {
  const auth = (token) => {

    const postData = { token };

    axios.post("https://wlyreplitexpress.sagarworks.repl.co/api/client/sign-up", postData).then((response) => {
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
      <Link to="/home" >HOME</Link>
    </>
  );
}
