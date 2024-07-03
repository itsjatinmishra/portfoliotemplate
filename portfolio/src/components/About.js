import React from "react";
import { FaUser } from "react-icons/fa";

function About() {

  return (
    <section
      id="about"
      className="ps-lg-5 pt-5 pt-lg-0 animate position-relative d-flex align-items-center"
    >
      <div className="container py-5">
        <div className="row mb-5 pb-3 border-bottom border-2">
          <div className="col-6">
            <h1 className="m-0">About Me</h1>
          </div>
          <div className="col-6 text-end">
            <h1 className="m-0">
              <FaUser />
            </h1>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-7">
            <h4>Web Designer and Developer</h4>
            <p>
              Welcome to my portfolio! I'm passionate about creating beautiful
              and functional websites. With a keen eye for design and a strong
              foundation in web technologies, I bring ideas to life on the
              digital canvas.
            </p>
            <p>
              My skills include HTML, CSS, JavaScript, and I have experience
              working with popular web frameworks. I enjoy keeping up with the
              latest design trends and technologies to deliver modern and
              user-friendly solutions.
            </p>
            <div className="row my-5">
              <div className="col-lg-6">
                <div className="features d-flex align-items-start">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5305/5305179.png"
                    height={25}
                    className="me-2"
                    alt=""
                  />
                  <div>
                    <h5>Innovative Designs</h5>
                    <p>
                      I am an innovative designer crafting digital experiences
                      that captivate and elevate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features d-flex align-items-start">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/012/854/443/original/frontend-development-icon-style-vector.jpg"
                    height={25}
                    className="me-2"
                    alt=""
                  />
                  <div>
                    <h5>Frontend Development</h5>
                    <p>
                      I am proficient in HTML, CSS, JavaScript, and modern
                      frontend frameworks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features d-flex align-items-start">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/65/65381.png"
                    height={25}
                    className="me-2"
                    alt=""
                  />
                  <div>
                    <h5>Responsive Design</h5>
                    <p>
                      I Ensures that the websites look and function seamlessly
                      across various devices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features d-flex align-items-start">
                  <img
                    src="https://static.thenounproject.com/png/1876455-200.png"
                    height={25}
                    className="me-2"
                    alt=""
                  />
                  <div>
                    <h5>Collaborative Spirit</h5>
                    <p>
                      I enjoy collaborating with clients to understand their
                      vision and bring it to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Let's collaborate and turn your vision into a stunning online
              presence. Feel free to explore my portfolio and get in touch!
            </p>
            <a href="/contact">Contact Me</a>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <h2>Personal Information</h2>
            <ul className="m-0 p-0" type="none">
              <li className="border-bottom border-1 py-3">
                <b>Name</b> : Jatin Mishra
              </li>
              <li className="border-bottom border-1 py-3">
                <b>Age</b> : - years
              </li>
              <li className="border-bottom border-1 py-3">
                <b>Residence</b> : Ludhiana, Punjab
              </li>
              <li className="border-bottom border-1 py-3">
                <b>Email</b> :{" "}
                <a href="mailto:itsjatinmishra@gmail.com">
                  itsjatinmishra@gmail.com
                </a>
              </li>
              <li className="border-bottom border-1 py-3">
                <b>Phone</b> : <a href="tel:7681912638">+91 768-191-2638</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
