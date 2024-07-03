import React, { useState } from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { BsEnvelope, BsFillPinMapFill } from "react-icons/bs";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [sub, setsub] = useState("");
  const [mNo, setmNo] = useState("");
  const [msg, setmsg] = useState("");
  return (
    <section
      id="contact"
      className="py-5 ps-lg-5 animate position-relative d-flex align-items-center resume-section"
    >
      <div className="container">
        <div className="row mb-5 pb-3 border-bottom border-2">
          <div className="col-6">
            <h1 className="m-0">Contact Me</h1>
          </div>
          <div className="col-6 text-end">
            <h1 className="m-0">
              <MdConnectWithoutContact />
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <h3 className="m-0 px-2 position-relative d-inline-block border-bottom border-2">
              LET'S MEET FOR CONVERTING DREAMS INTO REALITY
            </h3>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4 text-center mt-5 mt-lg-0">
            <div className="py-5 px-4 contactBx">
              <span className="mb-2 d-inline-block">
                <LuPhoneCall />
              </span>
              <h5>Phone</h5>
              <p>
                Feel free to connect with me via phone. I'm always open to
                discussions, collaborations, or just a friendly chat about
                anything web-related!
              </p>
              <a href="tel:7681912638">+91 123-456-789</a>
            </div>
          </div>
          <div className="col-lg-4 text-center mt-5 mt-lg-0">
            <div className="py-5 px-4 contactBx">
              <span className="mb-2 d-inline-block">
                <BsFillPinMapFill />
              </span>
              <h5>Location</h5>
              <p>
                You can come to me at my location. Feel free to come to me, I
                will ensure you about my work and you'll never feel
                disappointed.
              </p>
              {/* give link of your location */}
              <a href="">View on Larger Map</a>
            </div>
          </div>
          <div className="col-lg-4 text-center mt-5 mt-lg-0">
            <div className="py-5 px-4 contactBx">
              <span className="mb-2 d-inline-block">
                <BsEnvelope />
              </span>
              <h5>Email</h5>
              <p>
                You can reach out to me via email. Feel free to drop me a
                message, and I'll get back to you as soon as possible!
              </p>
              <a href="mailto:itsjatinmishra@gmail.com">
                itsjatinmishra@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
