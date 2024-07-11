import { useState } from "react";
import { useToast } from "@chakra-ui/toast";
import { useAuthContext } from "./useAuthContext";

export const useApplyDoctor = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const toast = useToast();
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
    consultationFee
    // operationTime
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://vet-app-ffor.onrender.com/api/user/apply-doctor-account",
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
      if (json == "Already Exists") {
        toast({
          title: "Already Exists",
          description: "Already Exists",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-center",
        });
      } else {
        toast({
          title: "Successful Application!",
          description: "Successful Application",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-center",
        });
      }
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else {
      setIsLoading(false);
      setError(json.error);
    }
  };

  return { applyDoctor, isLoading, error };
};
