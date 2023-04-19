/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { TypeAnimation } from "react-type-animation";
import React from "react";

import Style from "@/styles/home.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";

export default function Home() {
  const [selected, setSelected] = React.useState(dataArray[0]);
  var settingss = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          autoplaySpeed: 1000,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  };
  var settings = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2.9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          autoplaySpeed: 2000,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  var settings2 = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2.9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          autoplaySpeed: 2000,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  var settings3 = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2.9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          autoplaySpeed: 2000,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <section className={Style.homebanner}>
        <div className={`${Style.bannercontainer} container`}>
          <div
            className={`${Style.admission_banner} animate__animated animate__zoomInDown`}
          >
            <h1>India s MBBS Admission College Predictor</h1>
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
      </section>

      <section>
        <div className={`${Style.introduction_home} container  text-center`}>
          <h2>
            NEET Navigator <span>Introduction</span>{" "}
          </h2>
          <p>
            In India, students and parents fail to get the best outcome from
            medical admission counselling process. As a result, they either lose
            an opportunity of admission or they take admission in a medical
            college which may not be as good as they could have got or worse,
            they lose money due to fake promises and poor guidance.
          </p>

          <br />

          <p id="home-para2">
            NEET Navigator offers India’s most authentic and advanced data
            analytics based medical admission counselling guidance for NEET UG
            (MBBS/BDS/BAMS), NEET PG (MD/MS/DNB/MDS) and NEET SS (DM/M.CH) in
            all India Government, Private and Deemed medical institutions.
          </p>
        </div>
      </section>

      <section className="mt-70">
        <div className="container2">
          <div className="background">
            <div className="row">
              <div className="who-we">
                <h2>
                  Problem <span>Statement</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="cards">
                {problemStatement.map((items, index) => (
                  <div className="first-card upper-card " key={index}>
                    <div className="card-image">
                      <img src={items.url} alt="" />
                    </div>
                    <h3>{items.heading}</h3>

                    <ReactReadMoreReadLess>{items.pre}</ReactReadMoreReadLess>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="aboutUs-parent">
          <div className="about-us">
            <h2>
              About <span> Us</span>
            </h2>
            <div className="aboutUs-section">
              <div className="aboutUs-left">
                <div className="about-combination">
                  <p>
                    NEET Navigator is founded by Mr. Rakesh Jain who is an
                    alumnus of FMS-Delhi and IIM- Ahmedabad. NEET Navigator is
                    run by professionals and mentored by Dr. M.L. Singla,
                    Ex-Dean of Faculty of Management Studies, Delhi University.
                  </p>
                  <br />
                  <p className="aboutUs-para">
                    NEET Navigator is India’s first organization which is
                    working towards building advanced intelligence based online
                    application to guide students for their admission in the
                    best medical college based on their NEET Rank, Domicile,
                    Category and Fee Budget.
                  </p>
                  <br />
                  <p className="aboutUs-para">
                    NEET Navigator offers medical admission counselling guidance
                    for admission into INIs, government, private &amp; deemed
                    medical institutions all over India. Our expertise includes
                    admission against NRI quota seats and mop-up/stray round
                    counselling services.
                  </p>
                </div>
              </div>
              <div className="aboutUs-right">
                <img src="./img/about-us.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobil-d-block dsktop-d-none">
        <div className="container2 faq-section">
          <div className="heading">
            <h2>
              Our
              <span> Approach</span>
            </h2>
          </div>
          <div className="accordion">
            {dataArray.map((item, index) => {
              return <FAQApproach key={index} {...item} />;
            })}
          </div>
        </div>
      </section>

      <section className={`${Style.approachsection}   mobile-d-none`}>
        <>
          <div className={`${Style.headingmin} approach m-0`}>
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
        </>
      </section>

      <section>
        <div className="stories">
          <div className="success-stories">
            <div className="story-text">
              <h2 id="success">Success</h2>
              <h2 id="success">Stories</h2>
              <h6>Choices Best of the Best</h6>
            </div>

            <div className="slider moslider" id="first-slide">
              <ul className="sliderapproch">
                <Slider {...settings3}>
                  <li>
                    <div className="image-textContainer first-card">
                      <img src="./img/anika jain.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Anika Jain.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Anika Jain</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image-textContainer second-card">
                      <img src="./img/diksha jain.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Diksha Jain.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Diksha Jain</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image-textContainer third-card">
                      <img src="./img/diksha midha.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Diksha Midha.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Diksha Midha</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image-textContainer second-card">
                      <img src="./img/diksha jain.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Diksha Jain.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Diksha Jain</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </Slider>
              </ul>
            </div>
            <div className="slider moslider" id="second-slide">
              <ul className="middle-slider">
                <Slider {...settings2}>
                  <li>
                    <div className="image-textContainer sixth-card">
                      <img src="./img/ravi.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Ravi.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Ravi</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image-textContainer fourth-card">
                      <img src="./img/diksha singhal.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img
                            src="./img/story-logo/Diksha Singhal.png"
                            alt=""
                          />
                        </div>
                        <div className="student-details">
                          <p>Diksha Singhal</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image-textContainer fifth-card">
                      <img src="./img/palak rathi.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Palak Rathi.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Palak Rathi</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </Slider>
              </ul>
            </div>
            <div className="slider moslider" id="last-slide">
              <ul className="sliderapproch right-slider">
                <Slider {...settings}>
                  <li>
                    <div className="image-textContainer twelve-card">
                      <img src="./img/shruti jain.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Shruti Jain.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Shruti Jain</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image-textContainer thirteenth-card">
                      <img src="./img/tanya.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Taniya.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Taniya</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image-textContainer fourteenth-card">
                      <img src="./img/vasudha.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Vasudha.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Vasudha</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="image-textContainer thirteenth-card">
                      <img src="./img/tanya.jpg" alt="" />
                      <div className="stories-studentSection">
                        <div className="image-logo">
                          <img src="./img/story-logo/Taniya.png" alt="" />
                        </div>
                        <div className="student-details">
                          <p>Taniya</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="assistant-youGo container2">
          <h2>
            Featured Medical <span>Colleges</span>
          </h2>

          <div className="colleges-marqouter    colleges-marq">
            <Slider {...settingss}>
              {collegeslogo.map((logo) => (
                // eslint-disable-next-line react/jsx-key
                <img src={logo.url} />
              ))}
            </Slider>
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

const collegeslogo = [
  {
    id: `1`,
    url: `./img/1.png`,
  },
  {
    id: `2`,
    url: `./img/2.png`,
  },
  {
    id: `3`,
    url: `./img/3.png`,
  },
  {
    id: `4`,
    url: `./img/4.png`,
  },
  {
    id: `5`,
    url: `./img/5.png`,
  },
  {
    id: `6`,
    url: `./img/6.png`,
  },
  {
    id: `7`,
    url: `./img/7.png`,
  },
  {
    id: `8`,
    url: `./img/8.png`,
  },
  {
    id: `9`,
    url: `./img/9.png`,
  },
  {
    id: `10`,
    url: `./img/10.png`,
  },
  {
    id: `11`,
    url: `./img/11.png`,
  },
  {
    id: `12`,
    url: `./img/12.png`,
  },
  {
    id: `13`,
    url: `./img/13.png`,
  },
  {
    id: `14`,
    url: `./img/14.png`,
  },
  {
    id: `15`,
    url: `./img/15.png`,
  },
  {
    id: `16`,
    url: `./img/16.png`,
  },
  {
    id: `17`,
    url: `./img/17.png`,
  },
  {
    id: `18`,
    url: `./img/18.png`,
  },
  {
    id: `19`,
    url: `./img/19.png`,
  },
  {
    id: `20`,
    url: `./img/20.png`,
  },
  {
    id: `21`,
    url: `./img/21.png`,
  },
  {
    id: `22`,
    url: `./img/22.png`,
  },
  {
    id: `23`,
    url: `./img/24.png`,
  },
  {
    id: `24`,
    url: `./img/25.png`,
  },
  {
    id: `25`,
    url: `./img/26.png`,
  },
  {
    id: `26`,
    url: `./img/27.png`,
  },
];

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

const problemStatement = [
  {
    heading: `Knowledge gap`,
    url: "./img/knowledge-gap.png",
    pre: `Medical admission counselling is a highly complex process. Students and parents lack knowledge about eligibility conditions, counselling rules, college comparison and even basic data such admission cut off and college fees. In the absence of comprehensive data, their decision making gets limited to familiar medical colleges`,
  },
  {
    heading: `Information gap `,
    url: "./img/info-gap.png",
    pre: `Finding the right and reliable information on Google or YouTube medical admission counselling can be highly frustrating and stressful for students and parents. In search for reliable information, students end up getting Information which may be outdated, irrelevant and in some cases, even wrong.`,
  },
  {
    heading: `Analytics gap`,
    url: "./img/ANALYTICAL-gap.png",
    pre: `Medical admission counselling data can be overwhelming. What is right what is answer for a student or parents. Moreover, there is a need to analyze the data for intelligence on wrong and which data shall be considered for decision making, these questions can be difficult to medical admission decision making.`,
  },
  {
    heading: `Guidance gap`,
    url: "./img/guidence-gap.png",
    pre: `medical admission guidance is notorious for lack of ethical and professional counsellors. “MBBS admission means Millions of rupees” this is the most common impression. There are too many dream merchants and cheats in the market. It is difficult to find genuine and professional guide for medical admissions`,
  },
];

interface T {
  children: React.ReactNode | React.ReactNode[];
}

const ReactReadMoreReadLess = ({ children }: T) => {
  const [showMore, setShowMore] = React.useState(false);

  const onShowMore = React.useCallback(() => {
    setShowMore(!showMore);
  }, [showMore]);
  return (
    <React.Fragment>
      <div className="ReactReadMoreReadLess">
        <p
          style={{
            display: "-webkit-box",
            WebkitLineClamp: showMore ? "10" : "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            transition: "all 200ms ease",
          }}
        >
          {children}
        </p>
        <a onClick={onShowMore} className="ReactReadMoreReadLess">
          {showMore ? "Read Less" : "Read More"}
        </a>
      </div>
    </React.Fragment>
  );
};

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

type FAQApproach = {
  heading?: string;
  content?: string;
};

const FAQApproach = ({ content, heading }: FAQApproach) => {
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
