import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footers from "./components/Footers";
import ApplyDoctor from "./pages/ApplyDoctor";
import Farmvisit from "./pages/Farmvisit"
import Urgentcare from "./pages/Urgentcare";
import Vetclinic from "./pages/Vetclinic";
import Videovisit from "./pages/Videovisit";
import Createpost from "./pages/Createpost";
import Singlepost from "./components/Singlepost";
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

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="/signin" element={<Signin />} />
        )}

        {user && user.isDoctor ? (
          <>
            <Route path="/createpost" element={<Createpost />} />
            <Route path="/blogs/:id/update" element={<UpdatePost />} />
            <Route path="/my-blogs" element={<MyBlogs />} />
          </>
        ) : null}

        <Route path="/about" element={<About />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/apply" element={<ApplyDoctor />} />
         <Route path ="/farmvisit" element = {<Farmvisit/>}/>
  <Route path ="/urgentcare" element = {<Urgentcare/>}/>
  <Route path ="/vetclinic" element = {<Vetclinic/>}/>
  <Route path ="/videovisit" element = {<Videovisit/>}/> 
        <Route path="/doctor/:id" element={<VetProfile />} />

        <Route path="/Videovisit" element={<DoctorProfile />} />

        <Route path="/chats" element={<ChatPage />} />

        <Route path="/rating" element={<Rating />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/:id/booking" element={<Booking />} />
        <Route path="/my-appointments" element={<Appointments />} />

        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blogpost />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}

export default App;
