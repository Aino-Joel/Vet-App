import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useApplyDoctor = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const applyDoctor = async (
    fName,
    lName,
    email,
    phoneNumber,
    website,
    address,
    specialization,
    experience,
    consultationFee,
    // operationTime
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "http://localhost:5000/api/user/apply-doctor-account",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
          phoneNumber,
          website,
          address,
          specialization,
          experience,
          consultationFee,
          // operationTime,
          userId: user._id,
        }),
      }
    );
    const json = await response.json();

    if (response.ok) {
      setIsLoading(false);
      console.log(json);
      navigate("/");
    } else {
      setIsLoading(false);
      setError(json.error);
    }
  };

  return { applyDoctor, isLoading, error };
};
