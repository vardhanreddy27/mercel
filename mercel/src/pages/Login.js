import React from "react";

function Login() {
  return (
    <>
      <div className="login-image-container">
        <img src="./logo.svg" alt="" className="logo-image" />
      </div>
      <div className="container">
        <div className="row text-center dashed-line-center mt-4">
          <h1 className="loginfont">Welcome to vinkle</h1>
          <p className="loginfont">connect with our community</p>
          <div className="mywidth">
            <button
              type="button"
              className="btn sbtn btn-outline-secondary btn-lg btn-block"
            >
              google
            </button>
          </div>
          <hr className="dashed-line" />
          <div className="mywidth">
            <button
              type="button"
              className="btn sbtn btn-outline-secondary btn-lg btn-block"
            >
              apple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
