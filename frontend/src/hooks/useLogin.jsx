import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://vet-app-ffor.onrender.com/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const user = await response.json();

    if (response.ok) {
      //save user to local storage
      localStorage.setItem("userInfo", JSON.stringify(user));

      //update AuthConext
      dispatch({ type: "LOGIN", payload: user });

      setIsLoading(false);
      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } else {
      setIsLoading(false);
      setError(user.error);
    }
  };

  return { login, isLoading, error };
};
