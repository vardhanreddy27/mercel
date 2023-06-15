import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
function Login() {
  return (
    <>
      <div className="login-image-container">
        <h1 className="loginfont">Vinkle</h1>
      </div>
      <div className="card logincard logincard1 ">
        <div className="card-body bodylogin">
          <div className="row p-4">
            <div className="col">
              <h5>Login or Signup</h5>
              <p className="text-secondary">connect with our community</p>
              <br />
              <button
                type="button"
                className="btn social googlebtn border btn-lg btn-block"
              >
                <FcGoogle className="me-3" />
                Login with Google
              </button>
              <br />
              <hr className="dashed-line" />
              <br />
              <button
                type="button"
                className="btn social applebtn border btn-lg btn-block"
              >
                <FaApple className="me-3" /> Login with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
