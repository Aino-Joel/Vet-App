import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Appointments = () => {
  // const [appointments, setAppointments] = useState();
  const [filteredAppointments, setFilteredAppointments] = useState();
  const { user } = useAuthContext();
  const [status, setStatus] = useState("Approved");

  const appointments = [
    {
      id: "1",
      patientName: "John Doe",
      date: "2024-06-28",
      time: "10:00 AM",
      status: "Approved",
    },
    {
      id: "2",
      patientName: "Jane Smith",
      date: "2024-06-29",
      time: "11:00 AM",
      status: "Pending",
    },
    {
      id: "3",
      patientName: "Alice Johnson",
      date: "2024-06-30",
      time: "09:00 AM",
      status: "Rejected",
    },
    {
      id: "4",
      patientName: "Bob Brown",
      date: "2024-07-01",
      time: "01:00 PM",
      status: "Approved",
    },
    {
      id: "5",
      patientName: "Emily Davis",
      date: "2024-07-02",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      id: "6",
      patientName: "Michael Wilson",
      date: "2024-07-03",
      time: "03:00 PM",
      status: "Rejected",
    },
  ];

  // useEffect(() => {
  //   const fetchAppointments = async () => {
  //     const response = await fetch("http://localhost:5000/api/appointments", {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     const json = await response.json();

  //     if (response.ok) {
  //       setAppointments(json);
  //     }
  //     if (response.status == 401) {
  //       navigate("/signin");
  //     }
  //   };

  //   if (user) {
  //     fetchAppointments();
  //   }
  // }, [user]);

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
                <button >Delete</button>
                <Link >
                  <button>Update</button>
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
