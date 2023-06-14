import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GoogleLogin } from "react-google-login";

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      <div className="login-image-container">
        <h1 className="loginfont">VINKLE </h1>
      </div>
      <div className="card logincard logincard1 ">
        <div className="card-body bodylogin">
          <div className="row p-4">
            <div className="col">
              <h1>
                Welcome to <span className="logotxt">VINKLE</span>
              </h1>
              <p>connect with our community</p>
              <br />
              <button
                type="button"
                className="btn social googlebtn border btn-lg btn-block"
              >
                <FcGoogle className="me-3" />
                Login with Google
              </button>
              <GoogleLogin
                clientId="376753352567-nrckqi9r87k4633ud8d9ej32r4ulpvmk.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
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
