/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import React, { Component } from "react";
import { Poppins } from "next/font/google";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>contactUs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="form-section">
          <div className="question">
            <h1>
              HAVE SOME <span>QUESTIONS?</span>
            </h1>
            <p>We'd love to hear from you. Here's how you can reach us...</p>
          </div>
          <div className="form">
            <div className="formLeft" />
            <form action="email.php" method="post">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                required
              />
              <input
                type="mail"
                name="email"
                id="email"
                placeholder="what’s your email?"
                required
              />
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Message"
                defaultValue={""}
              />
              <input
                type="submit"
                defaultValue="Send Message"
                className="button"
              />
            </form>
          </div>
          <div className="banner-background">
            <img src="/img/contact-banner.png" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="meet-information">
          <span style={{ fontSize: 20, fontWeight: 500 }}>Office Timings:</span>
          <p>10:00 AM - 19:00 PM</p>
          <div className="calling">
            <span style={{ display: "block", fontSize: 20, fontWeight: 500 }}>
              General Inquiry
            </span>
            <span>Call:</span>
            <a href="tel:+919910375900"> +919910375900</a>
            <br />
            <span
              className="support"
              style={{ display: "block", fontSize: 20, fontWeight: 500 }}
            >
              MBBS Lighthouse Support:
            </span>
            <span>Call:</span>
            <a href="tel:+919717366344"> +919717366344</a>
          </div>
        </div>
      </section>

      <section>
        <div className="connect">
          <h2>
            Connect with one of our <span>global representative</span>
          </h2>
          <div className="connect-section">
            <div className="connect-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.170881090929!2d77.12718221479317!3d28.71443878238547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d011e93278603%3A0xfdc2266faf84e61c!2sNEET%20Navigator%20Educational%20Services!5e0!3m2!1sen!2sin!4v1677583470678!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="connect-address">
              <div className="headquarter">
                <h3>Headquarters</h3>
                <p>
                  NEET Navigator Educational Services B-129, North Ex Mall,
                  Sector-9, Rohini, Delhi (INDIA) 110085
                </p>
              </div>
              <div className="contact-number">
                <h3>Phone Number</h3>
                <a href="tel:+919910375900">+91 99103 75900</a>
              </div>
              <div className="email-address">
                <h3>Email Address</h3>
                <a
                  href="mailto:info@neetnavigator.com
        "
                >
                  info@neetnavigator.com{" "}
                </a>
                <br />
                <a href="mailto:lighthouse@neetnavigator.com">
                  lighthouse@neetnavigator.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
