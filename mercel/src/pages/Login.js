import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const handleLoginSuccess = (response) => {
    // Handle successful authentication
    console.log("Authentication successful!", response);
  };

  const handleLoginFailure = (error) => {
    // Handle authentication failure
    console.error("Authentication failed!", error);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Load the Google Sign-In API script dynamically
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = initializeGoogleSignIn;
    document.body.appendChild(script);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const initializeGoogleSignIn = () => {
    // Initialize Google Sign-In
    window.google.accounts.id.initialize({
      client_id:
        "376753352567-nrckqi9r87k4633ud8d9ej32r4ulpvmk.apps.googleusercontent.com",
      callback: handleGoogleSignInCallback,
    });
  };

  const handleGoogleSignInCallback = (response) => {
    // Handle the Google Sign-In response
    if (response.error) {
      // Authentication failed
      handleLoginFailure(response.error);
    } else {
      // Authentication successful
      handleLoginSuccess(response.credential);
    }
  };

  const handleGoogleLogin = () => {
    // Trigger Google Sign-In
    window.google.accounts.id.prompt();
  };

  return (
    <>
      <div className="login-image-container">
        <h1 className="loginfont">Vinkle</h1>
      </div>
      <div className="card logincard logincard1">
        <div className="card-body bodylogin">
          <div className="row p-4">
            <div className="col">
              <h5>Login or Signup</h5>
              <p className="text-secondary">connect with our community</p>
              <br />
              <button
                type="button"
                className="btn social mb-3 googlebtn border btn-lg btn-block"
                onClick={handleGoogleLogin}
              >
                <FcGoogle className="me-3" />
                Login with Google
              </button>
              <hr className="dashed-line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
