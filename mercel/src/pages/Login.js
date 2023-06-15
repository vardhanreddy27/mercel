import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveUserData } from "./actions";
import GoogleLoginButton from "./GoogleLoginButton";
function Login() {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      const name = profile.getName();
      const email = profile.getEmail();
      const imageUrl = profile.getImageUrl();

      dispatch(saveUserData({ name, email, imageUrl }));
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";

    script.onload = () => {
      window.gapi.load("auth2", () => {
        window.gapi.auth2
          .init({
            client_id:
              "376753352567-nrckqi9r87k4633ud8d9ej32r4ulpvmk.apps.googleusercontent.com",
          })
          .then(() => {
            console.log("Google Sign-In API initialized");
          })
          .catch((error) => {
            console.log("Google Sign-In initialization failed:", error);
          });
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const userData = useSelector((state) => state.userData);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
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
                className="btn social mb-3 googlebtn border btn-lg btn-block"
                onClick={handleGoogleLogin}
              >
                <FcGoogle className="me-3" />
                Login with Google
              </button>
              <hr className="dashed-line" />
              <div>
                {userData ? (
                  <div>
                    <h1>Welcome, {userData.name}!</h1>
                    <img src={userData.imageUrl} alt={userData.name} />
                  </div>
                ) : (
                  <GoogleLoginButton />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
