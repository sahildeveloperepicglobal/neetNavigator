/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className={`footer`}>
        <div className="footer-left">
          <div className="leftTop-part">
            <img src="/img/NNWhite.png" alt="neet logo" />
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
            <ul>
              <li>
                <a href="mailto:Info@neetnavigator.com">
                  <img src="/img/mail.png" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+919910375900">
                  <img src="/img/whatsapp.png" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/NavigatorNeet"
                  target="_blank"
                >
                  <img src="/img/facebook.png" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/neet-navigator/"
                  target="_blank"
                >
                  <img src="/img/linkedIn.png" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/NavigatorNeet/"
                  target="_blank"
                >
                  <img src="/img/instagram.png" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/NavigatorNeet" target="_blank">
                  <img src="/img/twitter.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-middle">
          <h2>Important leads</h2>
          <ul>
            <li>
              <Link href="/medical-college">About Medical colleges</Link>
            </li>
            <li>
              <Link href="/medical-counselling">
                Medical Admission Counselling
              </Link>
            </li>
            <li>
              <Link href="/success-stories">Success Stories</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/contactUs">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Our Services</h2>
          <ul>
            <li>
              <Link href="/lighthouse">MBBS Lighthouse</Link>
            </li>
            <li>
              <Link href="/ug">NEET UG Services</Link>
            </li>
            <li>
              <Link href="/pg">NEET PG Services</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`copyright`}>
        <span>© Copyright - NEET Navigator Educational Services </span>
      </div>
      <div className="whatsapp">
        <a href="https://wa.me/+919910375900">
          <img src="/img/whatsapp1.png" alt="whatsapp image" />
        </a>
      </div>
    </>
  );
};

export default Footer;
