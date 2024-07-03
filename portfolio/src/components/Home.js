// Import necessary components and libraries
import React from "react";
import profileImg from './media/profileImg.jpg';

const Home = () => {
  return (
    <section id="home" className="ps-lg-5 animate pt-5 pt-lg-0">
      <div className="container h-100 pt-5 pt-lg-0">
        <div className="row h-100 pt-5 pt-lg-0">
          <div className="col-xl-7 col-lg-8 d-lg-flex flex-column justify-content-center align-items-start">
            <img
              src={profileImg}
              width={200}
              style={{ float: "left" }}
              alt=""
              className="me-2 mb-2 d-block d-lg-none"
            />
            <div>
              <h1>Hi, I'm Jatin Mishra!</h1>
              <h4>Creative Web Designer / Developer</h4>
              <p>
                I'm a passionate UI/UX designer with a mission to create
                delightful and intuitive digital experiences. With a strong
                foundation in design principles and a keen eye for detail, I
                specialize in translating complex ideas into user-friendly
                interfaces that captivate and engage.
              </p>
              <p>
                My journey in the world of design and development has equipped
                me with a strong set of skills in UI/UX design, front-end
                development, and a meticulous attention to detail. I believe in
                the power of design to solve problems and enhance the way users
                interact with technology.
              </p>

              <p>
                If you have any inquiries, project collaborations, or just want
                to say hello, feel free to reach out using the contact form
                below. I look forward to connecting with you and exploring how
                we can bring your ideas to life!
              </p>

              <a href="/contact">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
