import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import { useAuthContext } from "../hooks/useAuthContext";
import { useParams } from "react-router-dom";

const Reschedule = () => {
    const [appointment, setAppointment] = useState("")
    const [selectedDate, setSelectedDate] = useState(appointment.date);
    const [selectedTime, setSelectedTime] = useState(appointment.time);
    const [patientName, setPatientName] = useState(appointment.patientName);
    const [email, setEmail] = useState(appointment.email);
    const [extraInfo, setExtraInfo] = useState(appointment.additionalInfo);
    const { user } = useAuthContext();
    const { id } = useParams()

    useEffect(() => {
        const fetchAppointment = async () => {
            const response = await fetch(`https://vet-app-ffor.onrender.com/api/appointments/${id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();

            if (response.ok) {
                setAppointment(json);
            }
            if (response.status == 401) {
                navigate("/signin");
            }
        };

        if (user) {
            fetchAppointment();
        }
    }, [user]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(
            `Appointment booked for ${patientName} on ${selectedDate.toDateString()} at ${selectedTime}. Extra Info: ${extraInfo}`
        );

        const updatedAppointment = {
            vetId: appointment.vetId,
            patientId: user._id,
            patientName,
            email,
            date: selectedDate,
            time: selectedTime,
            additionalInfo: extraInfo,
        };

        try {
            const response = await fetch(`http://localhost:5000/api/appointments/update/${appointment._id}`, {
                method: "POST",
                body: JSON.stringify(updatedAppointment),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();
            if (response.ok) {
                console.log(json);
                navigate(`/my-appointments`);
            }
            console.log(updatedAppointment)
        } catch {
            (error) => {
                console.error("Error creating appointment:", error);
                setIsPending(false);
            };
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg mt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Reschedule your Appointment
            </h2>
            {user && (<form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name:</label>
                    <input
                        type="text"
                        value={appointment.patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                        // placeholder='Your Name i.e John Doe'
                        className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email:</label>
                    <input
                        type="email"
                        value={appointment.email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Select Date:</label>
                    <DatePicker
                        selected={appointment.selectedDate}
                        onChange={handleDateChange}
                        dateFormat="MMMM d, yyyy"
                        minDate={new Date()}
                        required
                        className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Select Time:</label>
                    <input
                        type="time"
                        value={appointment.selectedTime}
                        onChange={handleTimeChange}
                        required
                        className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Additional Information:
                    </label>
                    <textarea
                        value={appointment.additionalInfo}
                        onChange={(e) => setExtraInfo(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Book Appointment
                </button>
            </form>)}
        </div>
    );
};

export default Reschedule;
