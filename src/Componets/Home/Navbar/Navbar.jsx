import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/icons/logo.svg";
import { AuthContext } from "../../../Authprovider/Authprovider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    return logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out",
          text: "You have been signed out successfully.",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Logout Failed",
          text: error.message,
          icon: "error",
        });
      });
  };
  const navbar = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut}>Log out</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-2xl font-bold dropdown-content justify-center items-center border flex bg-base-100 rounded-box z-1 mt-3 w-64  p-2 shadow"
          >
            {navbar}
          </ul>
        </div>
        <div>
          <img className="w-[80%]" src={img} alt="" />
        </div>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal lg:text-xl px-1">{navbar}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn border-[#FF3811] text-[#FF3811]">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
