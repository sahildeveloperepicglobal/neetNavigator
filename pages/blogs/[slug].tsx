/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/blogs.module.scss";
import { useGetAllBlogs } from "@/network-requests/queries";
import { GetServerSidePropsContext } from "next";
import { Blogs } from "network-requests/types";
type SingleBlogTypes = {
  data: Blogs;
};

const SingleBlogPage = ({ data }: SingleBlogTypes) => {
  // const { data, refetch } = useGetAllBlogs();
  return (
    <>
      <section className={styles.innersec}>
        <div className="container">
          <div className={styles.mainsec}>
            <div className={styles.firstsec}>
              {" "}
              <h1>{data?.name}</h1> <img src="/image/9.jpg" alt="img" />
              <div
                dangerouslySetInnerHTML={{
                  __html: data.content.slice(0, 1000),
                }}
              ></div>
              <p> Understanding the NEET PG Exam </p>
              <p>
                The NEET PG exam is a computer-based test that consists of 300
                multiple-choice questions. The exam is conducted in a single day
                in a single session, and the total duration of the exam is three
                and a half hours. The questions in the exam are based on the
                MBBS curriculum, and the exam covers all major medical
                specialties, including medicine, surgery, pediatrics,
                gynecology, and radiology.
              </p>
              <p>
                The NEET PG exam is considered to be one of the most challenging
                medical entrance exams in India. The competition for admission
                into postgraduate medical courses is intense, and students need
                to score high marks to secure a seat in their desired course and
                college.
              </p>
              <p>Tips for NEET PG Exam Preparation</p>
              <ul>
                <li>
                  Create a Study Plan: Before starting your NEET PG exam
                  preparation, create a study plan that outlines your daily and
                  weekly study schedule. Allocate time for each subject and
                  topic, and ensure that you cover all the subjects and topics
                  included in the NEET PG exam.
                </li>
                <li>
                  Know the Exam Pattern: Familiarize yourself with the NEET PG
                  exam pattern, including the number of questions, the duration
                  of the exam, and the marking scheme. This will help you manage
                  your time better during the exam and understand the weightage
                  of different topics.
                </li>
                <li>
                  Focus on Conceptual Understanding: The NEET PG exam tests your
                  conceptual understanding of various medical topics. Therefore,
                  focus on building your understanding of the topics rather than
                  just memorizing the facts.
                </li>
                <li>
                  Practice Mock Tests: Mock tests are an excellent way to
                  evaluate your preparation and identify your strengths and
                  weaknesses. Take regular mock tests and analyze your
                  performance to improve your weak areas.
                </li>
                <li>
                  Revise Regularly: Regular revision is essential to retain what
                  you have learned. Allocate time for revision in your study
                  plan and revise the topics you have learned at regular
                  intervals.
                </li>
                <li>
                  Use Online Resources: There are many online resources
                  available, such as study materials, videos, and practice
                  tests, that can aid your NEET PG exam preparation. Use these
                  resources to supplement your study plan.
                </li>
              </ul>
              <p>Behavioral Aspects and Performance in the Exam Centre</p>
              <ul>
                <li>
                  Sleep Well: A good night’s sleep before the exam day can help
                  you stay alert and focused during the exam.
                </li>
                <li>
                  Eat a Healthy Breakfast: Eating a healthy breakfast can
                  provide you with the energy you need to sustain yourself
                  during the exam.
                </li>
                <li>
                  Reach the Exam Centre Early: Reach the exam center early to
                  avoid any last-minute rush or confusion.
                </li>
                <li>
                  Stay Calm: Stay calm and composed during the exam, and do not
                  panic if you encounter difficult questions.
                </li>
                <li>
                  Time Management: Manage your time efficiently during the exam
                  and allocate time for each question according to its
                  difficulty level.
                </li>
                <li>
                  Do Not Waste Time: Do not waste time on a difficult question.
                  Move on to the next question and come back to it later if you
                  have time.
                </li>
              </ul>
              <p>
                In conclusion, the NEET PG exam is a crucial exam for medical
                students in India, and it requires a well-planned study strategy
                and disciplined approach to crack. By following the tips
                provided in this article, you can prepare well for the exam and
                perform to the best of your abilities on the exam day. Good
                luck!
              </p>
            </div>
            <div className={styles.secondsec}>
              <div className={styles.lightbox}>
                <img src="/image/Logo.png" alt="" />
                <h2>About Light House</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <a href="#">learn more</a>
              </div>
              <div className={styles.lightbox2}>
                <h2>Latest Blogs</h2>
                <h3>
                  <a href="#">
                    Understanding the NEET PG Exam and How to Prepare for it
                  </a>
                </h3>
                <p>February 24, 2023</p>
                <h3>
                  <a href="#">
                    Preparing for Medical Admission Counselling: What to Expect
                    and How to Succeed
                  </a>
                </h3>
                <p>February 24, 2023</p>
                <h3>
                  <a href="#">How to score good in NEET exam: A Quick Guide</a>
                </h3>
                <p>February 24, 2023</p>
                <h3>
                  <a href="#">
                    Common mistakes to avoid during medical admission process in
                    India
                  </a>
                </h3>
                <p>February 24, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={css["section"]}>
        <h2 style={{ textAlign: "center" }}>{data?.name}</h2>
        <div className={css.contentsec}>
          <div className={css["sectol"]}>
            {data?.images && (
              <div
                className={css["blogheadimg"]}
                style={{ marginBottom: "30px" }}
              >
                <img src={data?.images[0]} /> <br />
              </div>
            )}
 
            {data && data?.content && (
              <div
                className={css["blog-content"]}
                dangerouslySetInnerHTML={{
                  __html: data?.content as string,
                }}
              />
            )}
          </div>
        </div>
      </section> */}
    </>
  );
};
export default SingleBlogPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const slug = context.query?.slug;

  if (slug) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${slug}/slug`
    );
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } else {
    return {
      props: {
        data: {},
      },
    };
  }
};
