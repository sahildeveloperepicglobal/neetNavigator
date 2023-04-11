import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import React from "react";
import { useActiveMenu } from "react-active-menu";

const LightHouse = () => {
  const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
    {
      smooth: true,
    }
  );

  return (
    <div>
      <div className="lighthouse-banner">
        <div className="banner-textLight animate__animated animate__zoomInDown">
          <h1 className="banner-firstText">
            Expand your <span id="hori">HORIZON</span>
          </h1>
          <h1 id="banner-secondText" />
          <h1 className="banner-firstText">
            of <span id="banner-thirdText"> MBBS Admission</span>
          </h1>
          <a href="#">Read more</a>
        </div>
        <div
          className="light-image animate__animated animate__fadeInUp"
          id="image"
        >
          <img src="./img/05.png" alt="" />
        </div>
      </div>

      <section>
        <div className="gps-admission">
          <div className="gps-upperText container">
            {/* <h2>Introduction of<span> MBBS Lighthouse</span></h2> */}
            <h2 id="myopiya">
              <span> Myopia</span> in Medical Admissions
            </h2>
            <p>
              In India, there are more than 650 medical colleges, however
              students and parents have a narrow perspective on their medical
              admissions. People underestimate their chances of admission to
              medical schools outside of their city or state.
            </p>
            <p id="second-para">
              In order for a student to get admitted to The Best Medical College
              based on AIR, Domicile, Category, and Fee Budget, MBBS Lighthouse
              delivers the most thorough and authentic intelligence on medical
              admissions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bloxfeatures">
          <div className="featuresitems">
            <div className="featurescol">
              <div className="featuresheading">
                <nav className="navigation" id="mainNav">
                  <a
                    className="navigation__link active"
                    ref={registerTrigger("section-one")}
                  >
                    Features
                  </a>
                  <a
                    className="navigation__link"
                    ref={registerTrigger("section-two")}
                  >
                    Advantages
                  </a>
                  <a
                    className="navigation__link"
                    ref={registerTrigger("section-three")}
                  >
                    Benefits
                  </a>
                </nav>
              </div>
              <div className="featurescontent">
                <div
                  className="page-section hero"
                  ref={registerSection("section-one")}
                >
                  <h2>
                    <a className="navigation__link">Features</a>
                  </h2>
                  <ul>
                    <li>
                      <b>Authentic: </b> MBBS Lighthouse is based on most
                      authentic medical admission data of Government, Private
                      and Deemed medical institutions of All India.
                    </li>
                    <li>
                      <b>Updated: </b> MBBS Lighthouse is based on latest 2022
                      medical admission counselling data from MCC and all state
                      medical admission counselling.
                    </li>
                    <li>
                      <b>Complete: </b> MBBS Lighthouse incorporates all
                      counselling rules and regulations related to eligibility
                      conditions, counselling rounds and college information.
                    </li>
                    <li>
                      <b>User Specific: </b> MBBS Lighthouse analyzes user
                      specific data such as NEET score, domicile, category and
                      fee budget to give best medical college recommendations.
                    </li>
                    <li>
                      <b>Easy to use: </b> Both parents and students will find
                      MBBS Lighthouse's interactive interface and visualizations
                      to be incredibly user-friendly.
                    </li>
                  </ul>
                </div>
                <div
                  className="page-section second-page"
                  ref={registerSection("section-two")}
                >
                  <h2>
                    <a className="navigation__link">Advantages</a>
                  </h2>
                  <ul>
                    <li>
                      <b> Comprehensive: </b>b&gt; You won’t miss your MBBS
                      admission possibility in any college of India. MBBS
                      Lighthouse is designed on admission data of 650 medical
                      colleges.
                    </li>
                    <li>
                      <b> Convenient: </b> MBBS Lighthouse runs on cloud based
                      mobile friendly web interface which can be accessed from
                      any device, anytime.
                    </li>
                    <li>
                      <b> Customized: </b> Unlike many college predictors, MBBS
                      Lighthouse offers specific advice on basis of your NEET
                      score, domicile, NEET and State category and Fee budget.
                    </li>
                    <li>
                      <b> Cost effective: </b> MBBS Lighthouse saves on huge
                      direct and indirect costs of searching for information on
                      internet. You can get authentic data in few clicks.
                    </li>
                  </ul>
                </div>
                <div
                  className="page-section third-page"
                  ref={registerSection("section-three")}
                >
                  <h2>
                    <a className="navigation__link">Benefits</a>
                  </h2>
                  <ul>
                    <li>
                      <b> Expanded horizon: </b> With few clicks, MBBS
                      Lighthouse gives you MBBS admission possibility estimation
                      for 650 medical colleges.
                    </li>
                    <li>
                      <b> Enhanced Possibilities: </b> MBBS Lighthouse enhances
                      your MBBS admission possibilities for all government,
                      private and deemed medical institutions.
                    </li>
                    <li>
                      <b> Competitive advantage: </b> By knowing your realistic
                      MBBS admission possibilities, you can be in better control
                      of the medical admission counselling process.
                    </li>
                    <li>
                      <b> Stress reduction: </b> MBBS Lighthouse eliminates the
                      guess work from MBBS admission planning. It offers right
                      motivation and psychological safety for students.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="feature-comparison">
          {/* <div class="heading">
    <h2>Feature Comparison</h2>
  </div> */}
          <div className="contentbox">
            <div className="contentblock">
              <h4>
                Feature <span>Comparison</span>
              </h4>
            </div>
            <div className="comparision-table">
              <table>
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>MBBS Lighthouse</th>
                    <th>Other Applications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Comprehensive</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/yellow-smily -copy.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Complete</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/yellow-smily -copy.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Customized</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/red-smily.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Curated</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/yellow-smily -copy.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Correct</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/red-smily.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Credible</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/red-smily.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Cost effective</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/yellow-smily -copy.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Convenient</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/red-smily.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Consistent</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/red-smily.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Cutting edge</td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/dark-green-smily.png" alt="" />
                      </div>
                    </td>
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <img src="./img/yellow-smily -copy.png" alt="" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
    </div>
  );
};

export default LightHouse;

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
        <span className="">
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
