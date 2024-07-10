import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState();
  const { user } = useAuthContext();
  const [status, setStatus] = useState("Approved");

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch("http://localhost:5000/api/appointments/my-appointments", {
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
            <div key={appointment.id} className="appointment-card">
              <h3>{appointment.patientName}</h3>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Status: {appointment.status}</p>

              <div className="buttons">
              <button onClick={handleCancel(appointment._id)}>Cancel</button>
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
