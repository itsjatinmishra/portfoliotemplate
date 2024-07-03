import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaAddressCard, FaEnvelope, FaUser } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { Link } from "react-router-dom";
import profileImg from "./media/profileImg.jpg";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  // Function to handle menu item clicks
  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header style={{ zIndex: 999 }} className="position-relative">
      <div className="container-fluid p-0 d-none d-lg-block">
        <div className="row m-0 p-0">
          <div
            className="col-lg-1 p-0 position-fixed h-100 bg-light"
            style={{ top: 0, left: 0 }}
          >
            <nav>
              <div className="myProfile position-relative">
                <img src={profileImg} className="img-fluid" alt="" />
                <h5
                  className="m-0 text-white w-100 py-1 px-1 text-center"
                  style={{ bottom: 0, left: 0, zIndex: 1, fontSize: "15px" }}
                >
                  Jatin Mishra
                </h5>
              </div>
              <ul className="nav navbar-nav">
                <li className="nav-item px-2 py-2">
                  <Link
                    className="nav-link border-bottom border-1"
                    to="/"
                    onClick={() => handleMenuClick("")}
                  >
                    <span className="me-2">
                      <IoHome />
                    </span>
                    Home
                  </Link>
                </li>
                <li className="nav-item px-2 py-2">
                  <Link
                    className="nav-link border-bottom border-1"
                    to="/about"
                    onClick={() => handleMenuClick("section2")}
                  >
                    <span className="me-2">
                      <FaUser />
                    </span>
                    About Me
                  </Link>
                </li>
                <li className="nav-item px-2 py-2">
                  <Link
                    className="nav-link border-bottom border-1"
                    to="/service"
                    onClick={() => handleMenuClick("section3")}
                  >
                    <span className="me-2">
                      <FaAddressCard />
                    </span>
                    My Service
                  </Link>
                </li>
                <li className="nav-item px-2 py-2">
                  <Link
                    className="nav-link border-bottom border-1"
                    to="/resume"
                    onClick={() => handleMenuClick("section4")}
                  >
                    <span className="me-2">
                      <ImBriefcase />
                    </span>
                    My Resume
                  </Link>
                </li>
                <li className="nav-item px-2 py-2">
                  <Link
                    className="nav-link border-bottom border-1"
                    to="/contact"
                    onClick={() => handleMenuClick("section5")}
                  >
                    <span className="me-2">
                      <FaEnvelope />
                    </span>
                    Contact Me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary d-block d-lg-none">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Jatin Mishra
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav">
              <li className="nav-item px-2 py-2">
                <Link
                  className="nav-link border-bottom border-1"
                  to="/"
                  onClick={() => handleMenuClick("")}
                >
                  <span className="me-2">
                    <IoHome />
                  </span>
                  Home
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className="nav-link border-bottom border-1"
                  to="/about"
                  onClick={() => handleMenuClick("section2")}
                >
                  <span className="me-2">
                    <FaUser />
                  </span>
                  About Me
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className="nav-link border-bottom border-1"
                  to="/service"
                  onClick={() => handleMenuClick("section3")}
                >
                  <span className="me-2">
                    <FaAddressCard />
                  </span>
                  My Service
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className="nav-link border-bottom border-1"
                  to="/resume"
                  onClick={() => handleMenuClick("section4")}
                >
                  <span className="me-2">
                    <ImBriefcase />
                  </span>
                  My Resume
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className="nav-link border-bottom border-1"
                  to="/contact"
                  onClick={() => handleMenuClick("section5")}
                >
                  <span className="me-2">
                    <FaEnvelope />
                  </span>
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Sidebar;
