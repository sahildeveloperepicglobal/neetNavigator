import React from "react";
import Style from "@/styles/pg.module.scss";
import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import { TypeAnimation } from "react-type-animation";

export default function Pg() {
  const [selected, setSelected] = React.useState(dataArray[0]);

  return (
    <>
      <section className={Style.homebanner}>
        <div className={`${Style.bannercontainer} container`}>
          <div
            className={`${Style.admission_banner} animate__animated animate__zoomInDown`}
          >
            <h1>
              Looking for <br />
              NEET PG Admission<span>?</span>
            </h1>
            <div className={Style.bannerText}>
              <TypeAnimation
                sequence={["MD", 3000, "MS", 3000, "DNB", 3000, "MDS", 3000]}
                speed={300}
                repeat={Infinity}
              />
              <p>
                NEET Navigator is India s most advanced data analytics based{" "}
                <br />
                Medical Admission Counselling Services
              </p>
            </div>
            <div className={Style.readmore}>
              <a href="https://wa.me/+919910375900">Click here</a>
            </div>
          </div>
        </div>
        <section>
          <div className="introduction-home container  ">
            <h2>Introduction</h2>
            <p>
              NEET Navigator is founded by Mr. Rakesh Jain who is an alumnus of
              FMS-Delhi and IIM- Ahmedabad. NEET Navigator is run by
              professionals and mentored by Dr. M.L. Singla, Ex-Dean of Faculty
              of Management Studies, Delhi University.
            </p>
            <br />
            <p>
              NEET Navigator is India’s first organization which is working
              towards building advanced intelligence based online application to
              guide students for their admission in the best medical college
              based on their NEET Rank, Domicile, Category and Fee Budget.
            </p>
            <br />
            <p>
              NEET Navigator offers medical admission counselling guidance for
              admission into INIs, government, private & deemed medical
              institutions all over India. Our expertise includes admission
              against NRI quota seats and mop-up/stray round counselling
              services.
            </p>
          </div>
        </section>
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

      <section className="container mtp-14 mbp-14">
        <>
          <div className="approach ">
            <h2>
              Our <span>Approach</span>
            </h2>
            <div className="our-approach dasktop-d-block mobile-d-none p-0">
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
          <div className="accordion dasktop-d-none mobile-d-block">
            {dataArray.map((item, index) => {
              return (
                <FAQComponent
                  key={index}
                  heading={item.heading}
                  content={item.content[1]}
                />
              );
            })}
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
    heading: "Who conducts NEET PG exam?",
    content:
      "NEET PG exam is conducted by National Board of Examination in Medical Sciences (NBEMS). NEET PG is single eligibility cum entrance test for admission to MD/MS/PG Diploma Courses in all India government, private and deemed medical institutions except for AIIMS across India, JIPMER puducherry, PGIMER Chandigarh, NIMHANS Bangalore and Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum.",
  },
  {
    heading: "What is the exam pattern of NEET PG 2023?",
    content:
      "The exam comprises of 200 Multiple Choice Questions with each question having 4 response options/ distractors in English language only. Candidates are required to select the correct/best/most appropriate response/answer out of the 4 response options provided in each question. Time allotted is 3 hrs 30 minutes.",
  },
  {
    heading: "Is there a negative marking in NEET PG 2023?",
    content:
      "Yes, There shall be 25% negative marking for incorrect answers. That means while 4 marks will be awarded for right answer, 1 mark will be deducted for wrong attempt. No marks will be deducted for un-attempted questions.",
  },
  {
    heading: "When will the admit cards for NEET PG 2023 be released?",
    content:
      "Admit cards shall be made live on National Board of Examination in Medical Sciences website https://nbe.edu.in on 27 February 2023. Please note that while candidates will be informed via SMS/ Email alert regarding",
  },
  {
    heading: "What is the last time to report to test centre for NEET PG 2023?",
    content:
      "Candidates are required to report at the ‘Reporting Counter’ of test venue at as per time indicated in their admit cards. The reporting counter will close 30 minutes prior to the test start time i.e 9 AM. Therefore all candidates must report at least before 8.30 AM.",
  },
  {
    heading: "What is the address of the NEET PG 2023 Test centres?",
    content:
      "Exact address and location of the test centres shall be indicated in the candidate’s admit card. NBEMS doesn’t issue any list of test centres",
  },
  {
    heading: "What is the process for PG admissions in AIIMS?",
    content:
      "A candidate must appear in INI-CET for seeking PG admission in AIIMS across India, JIPMER Puducherry, PGIMER Chandigarh, NIMHANS Bangalore and Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum.",
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
