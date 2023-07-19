import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

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

  const initializeGoogleSignIn = () => {
    // Initialize Google Sign-In
    window.google.accounts.id.initialize({
      client_id:
        "376753352567-nrckqi9r87k4633ud8d9ej32r4ulpvmk.apps.googleusercontent.com",
      scope: "email profile https://www.googleapis.com/auth/user.birthday.read",
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
  const decodeJWT = (credential) => {
    // Split the credential to retrieve the JWT
    const jwt = credential.split(".")[1];
    const decodedData = atob(jwt);

    // Parse the decoded JWT
    const decodedToken = JSON.parse(decodedData);

    return decodedToken;
  };
  const handleGoogleLogin = () => {
    // Trigger Google Sign-In
    window.google.accounts.id.prompt();
  };
  const dispatch = useDispatch();

  const handleLoginSuccess = (response) => {
    const decodedToken = decodeJWT(response.credential);
    const given_name = decodedToken.given_name;
    const email = decodedToken.email;
    const picture = decodedToken.picture;

    const requestBody = { given_name, email, picture };
    dispatch(setUser({ given_name, email, picture }));
    // Send a POST request to the serverless function
    fetch("https://mercel.vercel.app/api/saveUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data accordingly
        navigate("/Dashboard");
      })
      .catch((error) => {
        navigate("/Dashboard");

        console.error("Failed to save :", error);
        // Handle the error condition
      });
  };
  return (
    <>
      <div className="login-image-container">
        <h1 className="loginfont">Vinkle</h1>
      </div>
      <div className="card logincard logincard1">
        <div className="card-body bodylogin">
          <div className="row p-4">
            <div className="col ">
              <h1 className="font-weight-bold">Login or Signup</h1>
              <p className="text-secondary">connect with our community</p>
              <br />
              <div className="input-group mb-3 ">
        <div className="input-group-prepend">
          <div className="input-group-text shadow-sm form-control loginnumbericonborder"><div className="font-weight-bold">+91</div></div>
        </div>
        <input type="tel"           id="mobile number"
 className="form-control loginnumberborder  shadow-sm" placeholder="Enter Mobile Number" />
      </div>

      <button
                type="button"
                className="btn shadow-sm mb-3 googlebtn background border btn-lg btn-block"
              >
Continue              </button>
              <button
                type="button"
                className="btn shadow-sm social mb-3 googlebtn border btn-lg btn-block"
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
