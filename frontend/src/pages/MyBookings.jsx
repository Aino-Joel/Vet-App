import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaCheck, FaTimes } from "react-icons/fa";
import { format } from 'date-fns';

const MyBookings = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState();
  const { user } = useAuthContext();
  const [status, setStatus] = useState("pending");
  const [isLoading, setIsLoading] = useState(true)

  const filterAppointments = (appointments, status) => {
    const filtered = appointments.filter(
      (appointment) => appointment.status === status
    );
    setFilteredAppointments(filtered);
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch("https://vet-app-ffor.onrender.com/api/appointments/my-bookings", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json)
      if (response.ok) {
        setAppointments(json);
        setIsLoading(false)
        filterAppointments(json, status);
      }
      if (response.status == 401) {
        navigate("/signin");
      }
    };

    if (user) {
      fetchAppointments();
    }
  }, [user]);

  

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    filterAppointments(appointments, newStatus);
  };

  const handleApprove = async (appId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/appointments/approve/${appId}`,
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
        title: "Appointment Approved!",
        description: "Appointment Approved",
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
        description: "Failed to Approve Appointment",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-center",
      });
    }
  };

  const handleDecline = async (appId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/appointments/decline/${appId}`,
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
        title: "Appointment Declined!",
        description: "Appointment declined",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-center",
      });
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Decline Appointment",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-center",
      });
    }
  };

  const handleCancel = async (appId) => {
    const response = await fetch(`http://localhost:5000/api/appointments/${appId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })

    if (response.ok) {
      navigate("/my-appointments");
    };
  };

  return (
    <div className="appointments-container">
      {isLoading ? (<h1>Loading...</h1>) : (<><h1 className="text-4xl font-bold text-center mb-8">My Appointments</h1>
      <div className="button-group">
        <button
          className={status === "approved" ? "active" : ""}
          onClick={() => handleStatusChange("approved")}
        >
          Approved
        </button>
        <button
          className={status === "pending" ? "active" : ""}
          onClick={() => handleStatusChange("pending")}
        >
          Pending
        </button>
        <button
          className={status === "rejected" ? "active" : ""}
          onClick={() => handleStatusChange("rejected")}
        >
          Rejected
        </button>
      </div>
      <div className="appointments-list">
        {filteredAppointments ? (
          filteredAppointments.map((appointment) => (
            <div key={appointment._id} className="appointment-card">
              <h3>{appointment.patientName}</h3>
              <p>Date: {format(appointment.date, 'd MMMM, yyyy')}</p>
              <p>Time: {appointment.time}</p>
              <p>Status: {appointment.status}</p>

              {status === "pending" ? (<div className="actions">
                <button
                  className="approve"
                  onClick={() => handleApprove(appointment._id)}
                >
                  <FaCheck />
                </button>
                <button
                  className="decline"
                  onClick={() => handleDecline(appointment._id)}
                >
                  <FaTimes />
                </button>
              </div>) : (<div className="buttons">
                <button onClick={() => handleCancel(appointment._id)}>Cancel</button>
                <Link to={`/my-bookings/${appointment._id}`} >
                  <button>Update</button>
                </Link>
              </div>)}
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div> </>)}
    </div>
  );
};

export default MyBookings;
