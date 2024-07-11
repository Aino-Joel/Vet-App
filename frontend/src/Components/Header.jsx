import React from "react";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react"; // Import Button from flowbite-react
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import NotificationBadge, { Effect } from "react-notification-badge";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const notification = user.unseenNotifications

  const handleClick = () => {
    logout();
    navigate("/signin");
  };

  return (
    <Navbar fluid rounded>
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-green-800 via-green-500 to-green-300 rounded-lg text-white">
          FarmVet
        </span>
        Connect
      </Link>
      <div className="flex md:order-2 items-center">
        {user ? (
          <div className="flex md:order-2 items-center">
            <Menu>
              <MenuButton p={1}>
                <NotificationBadge
                  count={notification.length}
                  effect={Effect.SCALE}
                />
                <BellIcon fontSize="2xl" m={1} />
              </MenuButton>
              <MenuList pl={2}>
                {!notification.length && "No New Notifications"}
                {notification.map((notif, index) => (
                  notif && notif.onClickPath && notif.message ? (
                    <Link to={notif.onClickPath} key={index}>
                      <MenuItem>
                        {notif.message}
                      </MenuItem>
                    </Link>
                  ) : null
                ))}
              </MenuList>
            </Menu>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={user ? user.pic : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{`${user.fName} ${user.lName}`}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>My Profile</Dropdown.Item>
              {user.isDoctor ? (<Link to="/my-bookings"><Dropdown.Item>
                Bookings
              </Dropdown.Item></Link>) : (<Link to="/my-appointments"><Dropdown.Item>
                Appointments
              </Dropdown.Item></Link>)}
              {user.isDoctor && (<Link to="/my-blogs"><Dropdown.Item>
                My Blogs
              </Dropdown.Item></Link>)}
              <Dropdown.Item>
                <Link to="/apply">Doctor Application</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleClick}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        ) : (
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
      {user.isAdmin ? (<span style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        padding: '10px',
        borderRadius: '5px'
      }}>
        ADMIN Dashboard
      </span>
      ) : (<Navbar.Collapse>
        <Navbar.Link active={path === "/home"} as={"div"}>
          <Link to="/home">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/blogs"} as={"div"}>
          <Link to="/blogs">Blog</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/chats"} as={"div"}>
          <Link to="/chats">Chat</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/doctor"} as={"div"}>
          <Link to="/doctor">Veterinary Doctors</Link>
        </Navbar.Link>
      </Navbar.Collapse>)}
    </Navbar>
  );
}

export default Header;
