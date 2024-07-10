import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const MyBookings = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState();
  const { user } = useAuthContext();
  const [status, setStatus] = useState("Approved");

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch("http://localhost:5000/api/appointments", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setAppointments(json);
      }
      if (response.status == 401) {
        navigate("/signin");
      }
    };

    if (user) {
      fetchAppointments();
    }
  }, [user]);

  const filterAppointments = (appointments, status) => {
    const filtered = appointments.filter(
      (appointment) => appointment.status === status
    );
    setFilteredAppointments(filtered);
  };

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
      <h1 className="text-4xl font-bold text-center mb-8">My Appointments</h1>
      <div className="button-group">
        <button
          className={status === "Approved" ? "active" : ""}
          onClick={() => handleStatusChange("Approved")}
        >
          Approved
        </button>
        <button
          className={status === "Pending" ? "active" : ""}
          onClick={() => handleStatusChange("Pending")}
        >
          Pending
        </button>
        <button
          className={status === "Rejected" ? "active" : ""}
          onClick={() => handleStatusChange("Rejected")}
        >
          Rejected
        </button>
      </div>
      <div className="appointments-list">
        {filteredAppointments ? (
          filteredAppointments.map((appointment) => (
            <div key={appointment._id} className="appointment-card">
              <h3>{appointment.vetName}</h3>
              <p>Date: {appointment.date}</p>
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
                <button onClick={handleCancel(appointment._id)}>Cancel</button>
                <Link to={`/my-bookings/${appointment._id}`} >
                  <button>Update</button>
                </Link>
              </div>)}
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
