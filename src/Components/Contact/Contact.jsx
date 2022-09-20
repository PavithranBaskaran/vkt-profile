import React from "react";
import "./contact.css";
import { ImLocation } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { FaClock,FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp,IoMdMail } from "react-icons/io";


function Contact() {
  return (
    <div className="contact" style={{overflow:"hidden"}}>
      <div className="contactContainer">
        <div className="contactHead">
          <h2>Contact Us</h2>
        </div>
        <div className="contactContent">
          <div className="contactLeft">
            <div className="contactIconWrapper">
              <ImLocation className="contactIcon" />
              <div className="contactLeftItemWrapper">
                <h2>Our Office Address</h2>
                <p>88, West Colony, Dt, Komarapalayam, Tamil Nadu 638183</p>
              </div>
            </div>
            <div className="contactIconWrapper">
              <GrMail className="contactIcon" />
              <div className="contactLeftItemWrapper">
                <h2>General Enquiries</h2>
                <p>vijay@vktbrothers.in</p>
              </div>
            </div>
            <div className="contactIconWrapper">
              <FiPhoneCall className="contactIcon" />
              <div className="contactLeftItemWrapper">
                <h2>Call Us</h2>
                <p>+91 73733 00069</p>
              </div>
            </div>
            <div className="contactIconWrapper">
              <FaClock className="contactIcon" />
              <div className="contactLeftItemWrapper">
                <h2>Our Timing</h2>
                <p>Mon - Sun : 09:00 AM - 07:00 PM</p>
              </div>
            </div>
          </div>
          <div className="contactRight">
            <input
              type="text"
              className="contactField"
              placeholder="Your Name"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="contactField"
            />
            <input
              type="text"
              placeholder="Your Contact No"
              className="contactField"
            />
            <textarea
              type="textarea"
              placeholder="Your Message"
              className="contactField"
            />
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=VKT Fabs, 88, West Colony, Dt, Komarapalayam, Tamil Nadu 638183&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://mcpenation.com/">https://mcpenation.com</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footContainer">
          <AiFillInstagram className="fooIcon" onClick={() => window.open("https://www.instagram.com/vktfabs/", '_blank')}/>
          <FaLinkedin className="fooIcon" onClick={() => window.open("https://www.linkedin.com/company/vktfabs/", '_blank')}/>
          <IoLogoWhatsapp className="fooIcon" onClick={()=> window.open("https://wa.me/+917373300069")}/>
          <IoMdMail className="fooIcon" onClick={()=>window.open("mailto:vijay@vktbrothers.in")}/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
