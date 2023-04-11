import React from "react";
import { Poppins } from "next/font/google";
import poppins from "@/fonts/poppins";

const Footer = () => {
  return (
    <>
      <div className={`${poppins.className} footer`}>
        <div className="footer-left">
          <div className="leftTop-part">
            {/* <img src="./img/blue-logo-final 1.png" alt="neet logo" /> */}
            <img src="./img/NNWhite.png" alt="neet logo" />
            <p>
              NEET NAVIGATOR started in 2019 with advisory and training services
              to institutional clients and in 2021 NEET NAVIGATOR launched the
              personalized counselling services for students/parents.
            </p>
          </div>
          <div className="leftMiddle-part">
            <h2>Address</h2>
            <p>
              North Ex Mall, B-129, Rajapur, Pocket 18, Sector 9, Rohini, New
              Delhi, Delhi 110085
            </p>
          </div>
          <div className="leftBottom-part">
            <h2>Connect with us</h2>
            <a href="mailto:Info@neetnavigator.com">
              <img src="./img/mail.png" />
            </a>
            <a href="https://wa.me/+919910375900">
              <img src="./img/whatsapp.png" />
            </a>
            <a href="https://www.facebook.com/NavigatorNeet" target="_blank">
              <img src="./img/facebook.png" />
            </a>
            <a
              href="https://www.linkedin.com/company/neet-navigator/"
              target="_blank"
            >
              <img src="./img/linkedIn.png" />
            </a>
            <a href="https://www.instagram.com/NavigatorNeet/" target="_blank">
              <img src="./img/instagram.png" />
            </a>
            <a href="https://twitter.com/NavigatorNeet" target="_blank">
              <img src="./img/twitter.png" />
            </a>
          </div>
        </div>
        <div className="footer-middle">
          <h2>Important leads</h2>
          <ul>
            <li>
              <a href="./medical-college">About Medical colleges</a>
            </li>
            <li>
              <a href="./medical-counselling">Medical Admission Counselling</a>
            </li>
            <li>
              <a href="#">Success Stories</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="./aboutUs">About Us</a>
            </li>
            <li>
              <a href="./contactUs">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Our Services</h2>
          <ul>
            <li>
              <a href="./lighthouse">MBBS Lighthouse</a>
            </li>
            <li>
              <a href="./ug">NEET UG Services</a>
            </li>
            <li>
              <a href="./pg">NEET PG Services</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${poppins.className} copyright`}>
        <span>© Copyright - NEET Navigator Educational Services </span>
      </div>
    </>
  );
};

export default Footer;
