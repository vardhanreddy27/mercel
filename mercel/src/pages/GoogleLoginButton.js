import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveUserData } from "./actions";

const GoogleLoginButton = () => {
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

  return <button onClick={handleGoogleLogin}>Sign in with Google</button>;
};

export default GoogleLoginButton;
