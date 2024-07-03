import React from "react";
import { FaCode } from "react-icons/fa6";
import { FiCodesandbox } from "react-icons/fi";

function Service() {
  return (
    <section
      id="service"
      className="py-5 ps-lg-5 animate position-relative d-flex align-items-center resume-section"
    >
      <div className="container">
        <div className="row mb-5 pb-3 border-bottom border-2">
          <div className="col-lg-6">
            <h1 className="m-0">My Service</h1>
          </div>
          <div className="col-lg-6 text-end">
            <h1 className="m-0">
              <FaCode />
            </h1>
          </div>
        </div>

        <div className="row justify-content-around pt-5">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="position-relative serviceBx py-5 px-4">
              <span className="position-absolute">
                <FaCode />
              </span>
              <h2>Website Development</h2>
              <p>
                I'm passionate about creating visually appealing and
                user-friendly websites. Through my academic background, I've
                acquired skills in HTML, CSS, JavaScript, Bootstrap, MaterialUI,
                React, Firebase, and MongoDB. Currently, I'm working on exciting
                projects like a Food Ordering E-commerce website (food4u) and
                projects related to Banking and Billing Systems. My goal is to
                blend creativity with technology to craft engaging online
                experiences.
              </p>
              <a href="/contact">Contact Me</a>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="position-relative serviceBx py-5 px-4">
              <span className="position-absolute">
                <FiCodesandbox />
              </span>
              <h2>Website Developer</h2>
              <p>
                I'm passionate about crafting digital experiences. In addition
                to my technical skills, I bring a creative mindset to design
                visually appealing and user-friendly interfaces. My projects
                include the ongoing development of a Banking System and a
                Billing System. Eager to expand my knowledge and contribute
                innovative solutions to the ever-evolving field of web
                development.
              </p>
              <a href="/contact">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
