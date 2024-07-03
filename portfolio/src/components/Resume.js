import React from "react";
import { ImFontSize } from "react-icons/im";
import { LiaAddressCardSolid } from "react-icons/lia";

function Resume() {
  return (
    <section
      id="resume"
      className="py-5 ps-lg-5 animate position-relative d-flex align-items-center resume-section"
    >
      <div className="container">
        <div className="row mb-5 pb-3 border-bottom border-2">
          <div className="col-6">
            <h1 className="m-0">My Resume</h1>
          </div>
          <div className="col-6 text-end">
            <h1 className="m-0">
              <LiaAddressCardSolid />
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 text-center">
            <h3 className="border-bottom d-inline-block border-2 position-relative px-2">
              Education
            </h3>
            <ul className="education text-start">
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>Bachelors of Computer Applications</h4>
                  <h5>SCD GOVERNMENT COLLEGE, Ludhiana</h5>
                  <p className="info">
                    I am a recent BCA graduate from SCD Government College,
                    bringing a strong foundation in computer applications and a
                    passion for problem-solving to the professional arena.
                  </p>
                </div>
                <span className="year">
                  <span className="to">2023</span>
                  <span className="from">2020</span>
                </span>
              </li>

              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>Higher Secondary (+2)</h4>
                  <h5>Devgan Convent School, Ludhiana</h5>
                  <p className="info">
                    I successfully completed my +2 education from Devgan Convent
                    School, Ludhiana, in 2020, demonstrating a commitment to
                    academic excellence and personal growth.
                  </p>
                </div>
                <span className="year">
                  <span className="to">2020</span>
                  <span className="from">2019</span>
                </span>
              </li>

              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>Matriculation</h4>
                  <h5>Agape Public School, Ludhiana</h5>
                  <p className="info">
                    I successfully completed my matriculation from Agape Public
                    School, Ludhiana, in 2018, equipped with a solid academic
                    foundation and a proactive approach to learning.
                  </p>
                </div>
                <span className="year">
                  <span className="to">2018</span>
                  <span className="from">2017</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 text-center">
            <h3 className="border-bottom d-inline-block border-2 position-relative px-2">
              Experience
            </h3>
            <ul className="education text-start">
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>Web Designer &amp; Developer</h4>
                  <h5>Ludhiana, Punjab</h5>
                  <p className="info">
                    Well, I am fresher, during my academic journey, I actively
                    participated in web projects, gaining hands-on experience
                    and honing my skills.
                  </p>
                  <h5 className="mt-3">Skills</h5>
                  <p className="info">
                    <b>Web</b> : HTML, CSS, JAVASCRIPT, BOOTSTRAP, MATERIALUI,
                    REACT, FIREBASE, MONGO DB.
                    <br />
                    <b>LANGUAGES</b> : JAVA & C++
                  </p>
                  <h5 className="mt-3">Projects</h5>
                  <ul className="m-0 p-0 ps-4" type="">
                    <li className="p-0 m-0">Food ordering E-commerce website (food4u)</li>
                    <li className="p-0 m-0">In Progress: Banking System Project</li>
                    <li className="p-0 m-0">Ongoing: Billing System</li>
                  </ul>
                </div>
                <span className="year">
                  <span className="to">Present</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
