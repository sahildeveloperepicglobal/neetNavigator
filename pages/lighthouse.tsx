/* eslint-disable react/no-unescaped-entities */
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
            <div className="featurescol newdesign">
              <div className="featuresheading">
                <nav className="navigation newdesign" id="mainNav">
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
                      <b> Comprehensive: </b> You won’t miss your MBBS admission
                      possibility in any college of India. MBBS Lighthouse is
                      designed on admission data of 650 medical colleges.
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
            <div className="comparision-table" style={{ flex: "1" }}>
              <table>
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>
                      MBBS <br /> Lighthouse
                    </th>
                    <th>
                      Other <br /> Applications
                    </th>
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
    heading: " What is MBBS Lighthouse?",
    content:
      "MBBS Lighthouse is India’s first advanced data analytics based online tool to guide students on their MBBS admission possibility based on NEET Score, Domicile and Category.",
  },
  {
    heading: "How does MBBS Lighthouse work?",
    content:
      "MBBS Lighthouse is designed on historical round wise, category wise, counselling wise admission data of 646 medical colleges in India. This algorithm also includes counselling rules and regulations to show eligible colleges along with available medical colleges.",
  },
  {
    heading:
      " How accurate are the admission probability reports generated by MBBS Lighthouse?",
    content:
      "MBBS Lighthouse is built on most comprehensive and authentic admission counselling data of 646 medical colleges. The data has been curated to retain uniformity in search operations. The reports are tested for six sigma levels of correctness and completeness.",
  },
  {
    heading:
      "What factors are considered when predicting NEET ranks and MBBS college admission probabilities?",
    content:
      "Medical admissions depend on 4 factors: NEET score, domicile, category and fee budget. MBBS Lighthouse has been designed to calculate the most accurate MBBS admission probability based on these factors.",
  },
  {
    heading: "Is MBBS Lighthouse available for use in all states in India?",
    content:
      "Yes, MBBS Lighthouse is designed to include MCC and all state medical admission counselling data. Therefore MBBS Lighthouse can be used by students across India. MBBS Lighthouse is the only such application which offers all India usability.",
  },
  {
    heading:
      "Can MBBS Lighthouse be used to predict admission probabilities for medical colleges outside of India?",
    content:
      "No. MBBS Lighthouse has been designed for predicting the admission probabilities for medical colleges in India only. The admission process for medical colleges outside of India is very different from medical admission counselling process in India.",
  },
  {
    heading:
      "How often are the admission probability reports and NEET rank predictions updated?",
    content:
      "MBBS Lighthouse data is updated on yearly basis. NEET Navigator is pioneer in the field of integrating advanced data analytics into the field of medical admission counselling guidance in India.",
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
