/* eslint-disable react/no-unescaped-entities */
import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import React from "react";
import { useActiveMenu } from "react-active-menu";

const Uyguyyu = () => {
  const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
    {
      smooth: true,
    }
  );

  return (
    <div>
      

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
      </div>
);
}
     
