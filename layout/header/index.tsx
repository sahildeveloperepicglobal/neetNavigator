import React, { useState } from "react";
import { Poppins } from "next/font/google";
import poppins from "@/fonts/poppins";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${poppins.className} header`}>
      <div className="header-left">
        <ul className="left-flex">
          <li className="animate__animated animate__bounceInLeft">
            <a href="./index">
              {" "}
              <img src="./img/blue-logo-final 1.png" alt="logo" />
            </a>
          </li>
        </ul>
      </div>

      <div className="menubar" onClick={handleMenuClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
            fill="#000"
          ></path>
        </svg>
      </div>

      {isOpen && (
        <nav>
          <ul className="mobilemenu">
            <li>
              <a href="./lighthouse" className="unique">
                MBBS Lighthouse
              </a>
            </li>
            <li>
              <a href="./ug" className="unique">
                NEET UG Service{" "}
              </a>
            </li>
            <li>
              <a href="./pg" className="unique">
                NEET PG Service{" "}
              </a>
            </li>

            <li>
              <a href="./contactUs" className="unique">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}

      <div className="header-middle">
        <ul className="middle-flex animate__animated animate__bounceInRight">
          <li>
            <a href="./lighthouse" className="unique">
              MBBS Lighthouse
            </a>
          </li>
          <li>
            <a href="./ug" className="unique">
              NEET UG Service{" "}
            </a>
          </li>
          <li>
            <a href="./pg" className="unique">
              NEET PG Service{" "}
            </a>
          </li>

          <li>
            <a href="./contactUs" className="unique">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
