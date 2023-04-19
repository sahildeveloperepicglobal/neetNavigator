/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import React, { Component } from "react";
import { Poppins } from "next/font/google";
import Style from "@/styles/ug.module.scss";
import PlusIcon from "@/icons/PlusIcon";
import MinusIcon from "@/icons/MinusIcon";

export default function Home() {
  const [selected, setSelected] = React.useState(dataArray[0]);

  return (
    <>
      <section className={Style.homebanner}>
        <div className={`${Style.bannercontainer} container`}>
          <div
            className={`${Style.admission_banner} animate__animated animate__zoomInDown`}
          >
            <h1>
              Looking for <br /> NEET UG Admission<span>?</span>
            </h1>
            <div className={Style.bannerText}>
              <TypeAnimation
                sequence={[
                  // Same String at the start will only be typed once, initially
                  "Government",
                  1000,
                  "Private",
                  1000,
                  "Deemed",
                  1000,
                  "NRI",
                  1000,
                  "Minority",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              <p>
                NEET Navigator is India's most advanced data analytics based{" "}
                <br />
                Medical Admission Counselling Services
              </p>
            </div>
            <div className={Style.readmore}>
              <a href="https://wa.me/+919910375900">Click here</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="introduction-home container  ">
          <h2>Introduction</h2>
          <p>
            NEET Navigator is founded by Mr. Rakesh Jain who is an alumnus of
            FMS-Delhi and IIM- Ahmedabad. NEET Navigator is run by professionals
            and mentored by Dr. M.L. Singla, Ex-Dean of Faculty of Management
            Studies, Delhi University.
          </p>
          <br />
          <p>
            NEET Navigator is India’s first organization which is working
            towards building advanced intelligence based online application to
            guide students for their admission in the best medical college based
            on their NEET Rank, Domicile, Category and Fee Budget.
          </p>
          <br />
          <p>
            NEET Navigator offers medical admission counselling guidance for
            admission into INIs, government, private & deemed medical
            institutions all over India. Our expertise includes admission
            against NRI quota seats and mop-up/stray round counselling services.
          </p>
        </div>
      </section>

      <div className="propositions">
        <div className="propositions-leftPart">
          <h2>
            Value <span>Proposition</span>
          </h2>
          <p>
            In the ocean full of sharks, NEET Navigator is the dolphin in the
            shark tank. NEET Navigator value is defined by the ethics and
            honesty.
          </p>{" "}
        </div>
        <div className="propositions-rightPart ">
          <div className="props-cards" id="firstProp">
            <div className="flipbox">
              <div className="first">
                <img src="/img/ANALYTICAL.png" alt="" />
                <h3> Data Analytics</h3>
              </div>
              <div className="back">
                <p>
                  NEET Navigator shifts the focus of decision making from Gut to
                  Data. NEET Navigator uses advanced data analytics to guide you
                  for admission in The Best Medical college based on your NEET
                  Rank, Domicile, Category and Fee Budget.
                </p>
              </div>
            </div>
          </div>
          <div className="props-cards" id="secondProp">
            <div className="flipbox">
              <div className="first">
                <img src="/img/COMPRHENSIVE.png" alt="" />
                <h3> Comprehensive</h3>
              </div>
              <div className="back">
                <p>
                  NEET Navigator mines, collates and analyses the most
                  comprehensive data from all states and MCC medical admission
                  counselling. The comprehensive data expands the horizon of
                  available admission opportunities for medical aspirants.
                </p>
              </div>
            </div>
          </div>
          <div className="props-cards" id="thirdProp">
            <div className="flipbox">
              <div className="first">
                <img src="/img/ETHICAL AND TRUSTWORTHY.png" alt="" />
                <h3> Ethical and trustworthy</h3>
              </div>
              <div className="back">
                <p>
                  Medical admission counselling guidance is a field infamous for
                  corruption and cheating. NEET Navigator is managed by renowned
                  professionals from Industry and Academia. NEET Navigator
                  offers transparent and trustworthy services in the most
                  ethical manner.
                </p>
              </div>
            </div>
          </div>
          <div className="props-cards" id="fourthProp">
            <div className="flipbox">
              <div className="first">
                <img src="/img/EMPATHIC APPROACH.png" alt="" id="differ" />
                <h3> Empathetic Approach</h3>
              </div>
              <div className="back">
                <p>
                  NEET Navigator offers the most empathetic communication and
                  humane approach to entire medical admission counselling
                  process so that students and parents can have a stress-free
                  journey to their dream medical college.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container m-0">
        <>
          <div className="approach m-0">
            <h2>
              Our <span>Approach</span>
            </h2>
            <div className="our-approach container">
              <div className="radio">
                {dataArray.map((value, index) => {
                  const active = value.heading === selected.heading;
                  return (
                    <input
                      key={index}
                      type="radio"
                      checked={active}
                      onClick={() => setSelected(value)}
                    />
                  );
                })}
              </div>
              <div className="approach-rightSection">
                <ul id="activebtn">
                  {dataArray.map((value, index) => {
                    const active = value.heading === selected.heading;
                    return (
                      <li
                        key={index}
                        className={`${active ? "active" : ""} magic1`}
                        id="list1"
                        onClick={() => setSelected(value)}
                      >
                        <img src={value.url} alt="text logo image" />
                        <span>{value.heading}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="approach-text">
                <h3 id="heading"> {selected.content[0]}</h3>
                <p id="paragraph">{selected.content[1]}</p>
              </div>
            </div>
          </div>
          <div className="faqStyle-approa ">
            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-5" aria-expanded="false">
                  <span className="icon" aria-hidden="true" />
                  <span className="accordion-title">Estimation</span>
                </button>
                <div className="accordion-content">
                  <p>
                    NEET Navigator uses advanced data analytics to assess the
                    admission possibility for all India medical colleges on
                    basis of your NEET PG Rank, Domicile, Category and Fee
                    Budget (in case of Private/ Deemed Medical Institutions).
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-5" aria-expanded="false">
                  <span className="icon" aria-hidden="true" />
                  <span className="accordion-title"> Guidance</span>
                </button>
                <div className="accordion-content">
                  <p>
                    NEET Navigator uses in depth knowledge of external
                    environmental factors as well as candidate’s credentials to
                    guide the candidate on subject (Clinical/Non-clinical/
                    Para-clinical) and program (MD/MS/DNB/Diploma) selection for
                    PG studies.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-5" aria-expanded="false">
                  <span className="icon" aria-hidden="true" />
                  <span className="accordion-title">
                    Institutional Selection
                  </span>
                </button>
                <div className="accordion-content">
                  <p>
                    NEET Navigator has developed an extensive 12 factors based
                    objective institutional rating system which incorporates
                    parameters including college infrastructure, academic
                    quality and institutional reputation. NEET Navigator helps
                    you select the best medical institution to target for
                    admission.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-5" aria-expanded="false">
                  <span className="icon" aria-hidden="true" />
                  <span className="accordion-title"> Application Support</span>
                </button>
                <div className="accordion-content">
                  <p>
                    NEET Navigator guides you in selection of counselling type
                    and offers you support during filling up of counselling
                    application. NEET Navigator ensures that counselling
                    application process is 100% error free so that there is no
                    loss of opportunity.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-5" aria-expanded="false">
                  <span className="icon" aria-hidden="true" />
                  <span className="accordion-title">College List</span>
                </button>
                <div className="accordion-content">
                  <p>
                    NEET Navigator uses historical data analytics to design
                    round based highly effective college choice list. The
                    college choice list is optimized for candidate’s NEET Rank
                    and Category so that You get admission in THE BEST medical
                    college in the desired subject.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-5" aria-expanded="false">
                  <span className="icon" aria-hidden="true" />
                  <span className="accordion-title">Documentation</span>
                </button>
                <div className="accordion-content">
                  <p>
                    NEET Navigator ensures that your admission process is smooth
                    and stress free by ensuring timely guidance on requisite
                    documentation. The right documentation support ensures
                    optimization of admission opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </section>

      <section>
        <div className="container">
          <div className="services-parent">
            <h2>Services</h2>
            <div className="services">
              <div className="services-leftSection">
                <p>
                  {" "}
                  NEET Navigator offers India’s most advanced data analytics
                  based medical admission counselling guidance for admission in
                  MBBS, BDS, BAMS programs.
                </p>
                <p>
                  {" "}
                  NEET Navigator offers medical admission counselling guidance
                  services for MCC as well as All States counselling.
                </p>
                <p>
                  {" "}
                  NEET Navigator offers most precise and personalized guidance
                  for the admission in the dream medical college bases on NEET
                  UG Rank, Domicile, category and Fee Budget.
                </p>
              </div>
              <div className="services-rightSection">
                <img src="/img/services.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="why-hireHead">
            <h2>
              Why hire <span>us?</span>
            </h2>
            <div className="poem">
              <div className="first-poem">
                <div className="poem-firstLeft">
                  <img src="/img/poem1.png" alt="" />
                </div>
                <div className="poem-firstRight">
                  <p>
                    NEET Navigator, guide so true,
                    <br /> Helping students find their way through,
                    <br /> With data-backed decisions, never skew,
                    <br /> A beacon of hope, shining bright and new
                  </p>
                </div>
              </div>
              <div className="second-poem">
                <div className="poem-secondLeft">
                  <p>
                    Other counselors may make false claims,
                    <br /> Promising the impossible, playing games,
                    <br /> But NEET Navigator, true to its name,
                    <br />
                    Leads students to the best medical college, with no shame.
                  </p>
                </div>
                <div className="poem-secondRight">
                  <img src="/img/poem2.png" alt="" />
                </div>
              </div>
              <div className="third-poem">
                <div className="poem-thirdLeft">
                  <img src="/img/poem3.png" alt="" />
                </div>
                <div className="poem-thirdRight">
                  <p>
                    Honest and forthright, always fair,
                    <br /> NEET Navigator, a breath of fresh air,
                    <br /> For those seeking a medical career,
                    <br /> It's a beacon of hope, shining ever so clear.
                  </p>
                </div>
              </div>
              <div className="fourth-poem">
                <div className="poem-fourthLeft">
                  <p>
                    So let NEET Navigator be your guide,
                    <br /> As you navigate the path to success with pride,
                    <br /> With its help, you'll reach the other side,
                    <br />
                    To a future in medicine, where you'll reside.
                  </p>
                </div>
                <div className="poem-fourthRight">
                  <img src="/img/poem4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container2 faq-section">
          <div className="heading">
            <h2>Frequently</h2>{" "}
            <h2>
              Asked<span> Questions</span>
            </h2>
          </div>
          <div className="accordion">
            {faqArray.map((item, index) => {
              return <FAQComponent key={index} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

const dataArray = [
  {
    heading: `Estimation`,
    url: "./img/pg2.png",
    content: [
      `Medical Admission Possibility Estimation`,
      `NEET Navigator uses advanced data analytics to assess the admission possibility for all India medical colleges on basis of your NEET PG Rank, Domicile, Category and Fee Budget (in case of Private/ Deemed Medical Institutions).

      `,
    ],
  },
  {
    heading: `Guidance`,
    url: "./img/guid2.png",
    content: [
      `Subject/ Program Selection Guidance`,
      `NEET Navigator uses in depth knowledge of external environmental factors as well as candidate’s credentials to guide the candidate on subject (Clinical/Non-clinical/ Para-clinical) and program (MD/MS/DNB/Diploma) selection for PG studies.`,
    ],
  },
  {
    heading: `Institutional Selection`,
    url: "./img/pg3.png",
    content: [
      `Institution Selection`,
      `NEET Navigator has developed an extensive 12 factors based objective institutional rating system which incorporates parameters including college infrastructure, academic quality and institutional reputation. NEET Navigator helps you select the best medical institution to target for admission.`,
    ],
  },
  {
    heading: `Application Support`,
    url: "./img/pg4.png",
    content: [
      `Counselling Application Support`,
      `NEET Navigator guides you in selection of counselling type and offers you support during filling up of counselling application. NEET Navigator ensures that counselling application process is 100% error free so that there is no loss of opportunity.`,
    ],
  },
  {
    heading: `College List`,
    url: "./img/selection3.png",
    content: [
      `College Choice List`,
      `NEET Navigator uses historical data analytics to design round based highly effective college choice list. The college choice list is optimized for candidate’s NEET Rank and Category so that You get admission in THE BEST medical college in the desired subject.`,
    ],
  },
  {
    heading: `Documentation`,
    url: "./img/pg5.png",
    content: [
      `Documentation Support`,
      `NEET Navigator ensures that your admission process is smooth and stress free by ensuring timely guidance on requisite documentation. The right documentation support ensures optimization of admission opportunity.`,
    ],
  },
];

const faqArray = [
  {
    heading: "What is NEET UG exam?",
    content:
      "NEET (National Eligibility cum Entrance Test) UG is a national level entrance exam for admission to undergraduate medical courses in India. NEET UG is conducted by National Testing Agency (NTA). It is mandatory for students seeking admission in government and private medical colleges in India to qualify NEET exam.",
  },
  {
    heading: "Who is eligible to appear for NEET UG exam?",
    content:
      "Indian citizens and OCI (Overseas Citizen of India) card holders who have completed 17 years of age as on December 31st of the year of admission and have passed Class 12th or equivalent exam with Physics, Chemistry, Biology/Biotechnology, and English as mandatory subjects are eligible to appear for NEET exam.",
  },
  {
    heading: "How often is NEET UG exam conducted?",
    content:
      "NEET exam is conducted once a year usually in the month of May/ June. NEET 2023 is expected to be conducted in June/July 2023. Though NTA had released 7 th May 2023 as date for NEET 2023 in their calendar but NEET 2023 appears to be delayed",
  },
  {
    heading: "How to apply for NEET UG exam?",
    content:
      "The application process for NEET exam can be done online through the official website of NTA (National Testing Agency). Candidates need to fill the online application form, upload their scanned documents, and pay the exam fee to complete the application process.",
  },
  {
    heading: "What is the syllabus for NEET UG exam?",
    content:
      "The syllabus for NEET exam is based on Class 11th and 12th Physics, Chemistry, and Biology/Biotechnology syllabus. It includes topics from these subjects covered during the 2-year course.",
  },
  {
    heading: "What is the format of NEET UG exam?",
    content:
      "NEET UG exam is a pen and paper based test that consists of 180 multiple-choice questions from Physics, Chemistry, Botany and Zoology. The exam duration is 3 hours and 20 minutes.There is negative marking system in NEET UG exam. A candidate gets 4 marks for each right answer and loses 1 mark for each wrong answer.",
  },
  {
    heading: "What is the minimum qualifying score for NEET UG exam?",
    content:
      "The minimum qualifying score for NEET UG exam is 50th percentile for General and EWS category and 40th percentile for reserved categories (SC/ST/OBC). The exact qualifying score varies each year based on the difficulty level of the exam and number of candidates appearing. For NEET UG 2022, cut off marks for General/EWS category student was 117 while for OBC/SC/ST candidates, cut off marks were 93.",
  },
];

type FAQComponentProps = {
  heading?: string;
  content?: string;
};

const FAQComponent = ({ content, heading }: FAQComponentProps) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <div className="accordion-item">
      <button
        id="accordion-button-2"
        aria-expanded={selected}
        onClick={() => setSelected(!selected)}
      >
        {/* <span className="icon" aria-hidden={selected} /> */}
        <span className="icon">
          {selected ? (
            <MinusIcon height={14} width={14} />
          ) : (
            <PlusIcon height={14} width={14} />
          )}
        </span>
        <span className="accordion-title">{heading}</span>
      </button>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
};
