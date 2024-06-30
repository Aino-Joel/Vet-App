import React, { useEffect, useState } from "react";
import "./Users.css";
import { useAuthContext } from "../hooks/useAuthContext";
import AdminNavbar from "../Components/AdminNavbar";

const DoctorsTable = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/doctors", {
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
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td>{doctor.fName}</td>
              <td>{doctor.lName}</td>
              <td>{doctor.email}</td>
              <td>{doctor.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;
