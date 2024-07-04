import React from "react";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react"; // Import Button from flowbite-react
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Projects() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const path = useLocation().pathname;

  const handleClick = () => {
    logout();
  };

  return (
    <Navbar fluid rounded>
      <Link
        to="/home"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-green-800 via-green-500 to-green-300 rounded-lg text-white">
          FarmVet
        </span>
        Connect
      </Link>
      <div className="flex md:order-2 items-center">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>My Profile</Dropdown.Item>
          <Dropdown.Item>Notifications</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleClick}>Sign out</Dropdown.Item>
        </Dropdown>
        {!user && (
          <div className="ml-4"> 
            <Link to="/signin">
              <Button gradientDuoTone="greenToBlue" outline>
                Sign In
              </Button>
            </Link>
          </div>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/home"} as={"div"}>
          <Link to="/home">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/blogs"} as={"div"}>
          <Link to="/blogs">Blog</Link> 
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Chat</Link>
        </Navbar.Link>
<Navbar.Link active={path === "/doctor"} as={"div"}>
          <Link to="/doctor">Veterinary Doctors</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Projects;
