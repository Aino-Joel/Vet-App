import React, { useEffect, useState } from "react";
import "./Users.css";
import { useAuthContext } from "../hooks/useAuthContext";
import AdminNavbar from "../Components/AdminNavbar";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useToast } from "@chakra-ui/toast";

const DoctorsTable = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  const toast = useToast();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://vet-app-ffor.onrender.com/api/admin/doctors",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (user.isAdmin) {
      fetchDoctors();
    }
  }, [user]);

  const handleApprove = async (docId) => {
    try {
      const response = await fetch(
        `https://vet-app-ffor.onrender.com/api/admin/doctors/approve/${docId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (!response.ok) {
        toast({
          title: "Error Occured!",
          description: "Server Error",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-center",
        });
      }
      toast({
        title: "Doctor Approved!",
        description: "Doctor Application Approved",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-center",
      });
      window.location.reload();
      console.log(response);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Approve Doctor",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-center",
      });
    }
  };

  const handleDecline = async (docId) => {
    try {
      const response = await fetch(
        `https://vet-app-ffor.onrender.com/api/admin/doctors/decline/${docId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (!response.ok) {
        toast({
          title: "Error Occured!",
          description: "Server Error",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-center",
        });
      }
      toast({
        title: "Doctor Declined!",
        description: "Doctor Application declined",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-center",
      });
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Decline Doctor",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-center",
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <AdminNavbar />
      <table className="users-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td>{doctor.fName}</td>
              <td>{doctor.lName}</td>
              <td>{doctor.email}</td>
              <td>{doctor.status}</td>
              <td>
                <div className="actions">
                  <button
                    className="approve"
                    onClick={() => handleApprove(doctor._id)}
                  >
                    <FaCheck />
                  </button>
                  <button
                    className="decline"
                    onClick={() => handleDecline(doctor._id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;
