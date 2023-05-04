/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import css from "@/styles/footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          background: "#2b2b81",
        }}
      >
        <div className={css[`footer`]}>
          <div className={css["footer-left"]}>
            <div className={css["leftTop-part"]}>
              <img src="/img/NNWhite.png" alt="neet logo" />
              <p>
                NEET NAVIGATOR started in 2019 with advisory and training
                services to institutional clients and in 2021 NEET NAVIGATOR
                launched the personalized counselling services for
                students/parents.
              </p>
            </div>
            <div className={css["leftMiddle-part"]}>
              <h2>Address</h2>
              <p>
                North Ex Mall, B-129, Rajapur, Pocket 18, Sector 9, Rohini, New
                Delhi, Delhi 110085
              </p>
            </div>
            <div className={css["leftBottom-part"]}>
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
          <div className={css["footer-middle"]}>
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
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className={css["footer-right"]}>
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
        <div className={css[`copyright`]}>
          <span>© Copyright - NEET Navigator Educational Services </span>
        </div>
        <div className="whatsapp">
          <a href="https://wa.me/+919910375900">
            <img src="/img/whatsapp1.png" alt="whatsapp image" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
