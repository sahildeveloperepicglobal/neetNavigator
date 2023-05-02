/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useOnClickOutside from "../../hooks/useclick";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const ref = useOnClickOutside(() => setIsOpen(false));

  return (
    <div className={`header`} ref={ref}>
      <div className="header-left">
        <ul className="left-flex">
          <li className="animate__animated animate__bounceInLeft">
            <Link href="/">
              <img src="/img/blue-logo-final 1.png" alt="logo" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="menubar" onClick={handleMenuClick}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
          </svg>
        ) : (
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
        )}
      </div>

      {isOpen && (
        <nav>
          <ul className="mobilemenu">
            <li>
              <Link href="/lighthouse" className="unique">
                MBBS Lighthouse
              </Link>
            </li>
            <li>
              <Link href="/ug" className="unique">
                NEET UG Service{" "}
              </Link>
            </li>
            <li>
              <Link href="/pg" className="unique">
                NEET PG Service{" "}
              </Link>
            </li>

            <li>
              <Link href="/contactUs" className="unique">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="header-middle">
        <ul className="middle-flex animate__animated animate__bounceInRight">
          <li>
            <Link href="/lighthouse" className="unique">
              MBBS Lighthouse
            </Link>
          </li>
          <li>
            <Link href="/ug" className="unique">
              NEET UG Service{" "}
            </Link>
          </li>
          <li>
            <Link href="/pg" className="unique">
              NEET PG Service{" "}
            </Link>
          </li>

          <li>
            <Link href="/contactUs" className="unique">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
