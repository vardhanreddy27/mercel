import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

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
  const handleLoginSuccess = (response) => {
    const { email, givenName, familyName, imageUrl } = response;

    console.log("Email:", email);
    console.log("Given Name:", givenName);
    console.log("Family Name:", familyName);
    console.log("Image URL:", imageUrl);
    console.log("Google Sign-In Response:", response);
  };
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
      handleLoginSuccess(response);
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
              <div
                id="g_id_onload"
                data-client_id="376753352567-nrckqi9r87k4633ud8d9ej32r4ulpvmk.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="http://https://mercel.vercel.app//callback"
                data-auto_prompt="false"
              ></div>

              <div
                class="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
