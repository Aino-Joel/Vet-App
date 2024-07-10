import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./Components/Header";
import Footers from "./Components/Footers";
import ApplyDoctor from "./pages/ApplyDoctor";
import Createpost from "./pages/Createpost";
import Singlepost from "./Components/Singlepost";
import { useAuthContext } from "./hooks/useAuthContext";
import ChatPage from "./pages/chatPage";
import Rating from "./pages/Rating";
import Doctor from "./pages/Doctor";
import "./Docprofile.css";
import "./App.css";
import Booking from "./pages/Booking";
import DoctorProfile from "./pages/DoctorsProfile";

import Blogs from "./pages/Blogs";
import Blogpost from "./pages/Blogpost";
import VetProfile from "./pages/VetProfile";
import Appointments from "./pages/Appointments";
import UpdatePost from "./pages/UpdatePost";
import MyBlogs from "./pages/MyBlogs";
import Cards from "./pages/Cards";
import Feeds from "./pages/Feeds";
import Admin from "./pages/Admin";
import Location from "./pages/Location";
import Settings from "./pages/Settings";
import Landing from "./pages/Landing";
import UsersTable from "./pages/Users";
import DoctorsTable from "./pages/Doctors";
import MyBookings from "./pages/MyBookings";
import Reschedule from "./pages/Reschedule";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      {user ? <Header /> : null}

      <Routes>
        {user ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}

        {user && user.isDoctor ? (
          <>
            <Route path="/createpost" element={<Createpost />} />
            <Route path="/blogs/:id/update" element={<UpdatePost />} />
            <Route path="/my-blogs" element={<MyBlogs />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/my-bookings/:id" element={<Reschedule />} />
          </>
        ) : null}

        {user && user.isAdmin ? (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/users" element={<UsersTable />} />
            <Route path="/doctors" element={<DoctorsTable />} />
          </>
        ) : null}

        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/apply" element={<ApplyDoctor />} />

        <Route path="/doctor/:id" element={<VetProfile />} />

        <Route path="/Videovisit" element={<DoctorProfile />} />

        <Route path="/chats" element={<ChatPage />} />

        <Route path="/rating" element={<Rating />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/:id/booking" element={<Booking />} />
        <Route path="/my-appointments" element={<Appointments />} />
        <Route path="/my-appointments/:id" element={<Reschedule />} />

        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blogpost />} />

        <Route path="/feeds" element={<Feeds />} />
        <Route path="/location" element={<Location />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {user ? <Footers /> : null}
    </BrowserRouter>
  );
}

export default App;
