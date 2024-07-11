import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Appointments = () => {
  const [appointments, setAppointments] = useState();
  const [filteredAppointments, setFilteredAppointments] = useState();
  const { user } = useAuthContext();
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch("https://vet-app-ffor.onrender.com/api/appointments/my-appointments", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json)
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

  const handleCancel = async (appId) => {
    const response = await fetch(`https://vet-app-ffor.onrender.com/api/appointments/${appId}`, {
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
            <div key={appointment.id} className="appointment-card">
              <h3>{appointment.vetName}</h3>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Status: {appointment.status}</p>

              <div className="buttons">
              <button onClick={() => handleCancel(appointment._id)}>Cancel</button>
                <Link to={`/my-appointments/${appointment._id}`} >
                  <button>Reschedule</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default Appointments;
