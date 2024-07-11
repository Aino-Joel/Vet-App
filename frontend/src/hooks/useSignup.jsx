import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate()

  const signup = async (fName, lName, email, password, pic) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://vet-app-ffor.onrender.com/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fName, lName, email, password, pic }),
    });
    const json = await response.json();

    if (response.ok) {
      //save user to local storage
      localStorage.setItem("userInfo", JSON.stringify(json));

      //update AuthConext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);

      navigate("/home")
    } else {
        setIsLoading(false);
        setError(json.error);
    }
  };

  return { signup, isLoading, error };
};
