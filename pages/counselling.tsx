/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import React, { Component } from "react";
import { Poppins } from "next/font/google";
import css from "styles/counselling.module.scss";
import Link from "next/link";

export default function Counselling() {
  return (
    <>
      <div className={css.backimg}>
        <div className={css.addmissiondiv}>
          <h1>
            Medical Admission<strong> Counselling</strong>
          </h1>
          <p>
            NEET Navigator is India's most advanced data analytics based <br />
            Medical Admission Counselling Services
          </p>
        </div>
      </div>
      <div className="container">
        <div className={css.containerdiv}>
          <div className={css.amsblue}>
            <h5>
              <Link href={"#0"}>About</Link>
            </h5>
            <h5>
              <Link href={"#1"}>MCC Counselling</Link>
            </h5>
            <h5>
              <Link href={"#2"}>State Counselling</Link>
            </h5>
            <h5>
              <Link href={"#3"}>Eligibility Criteria</Link>
            </h5>
            <h5>
              <Link href={"#4"}>Documents Required</Link>
            </h5>
            <h5>
              <Link href={"#5"}>Reservation Categories</Link>
            </h5>
            <h5>
              <Link href={"#6"}>College Choice</Link>
            </h5>
            <h5>
              <Link href={"#7"}>Central Pool Quota</Link>
            </h5>
            <h5>
              <Link href={"#8"}>Admission Process</Link>
            </h5>
            <h5>
              <Link href={"#9"}>Service Bond</Link>
            </h5>
            <h5>
              <Link href={"#"}>Options</Link>
            </h5>
          </div>
          <section className={css.mainsection}>
            <div className={css.aboutdiv} id="0">
              <h2 className={css.h2headdiv}>
                About Medical Admission<strong> Counselling</strong>
              </h2>
              <p>
                Medical admission counselling is the process of allotting seats
                to aspiring medical students in various government and private
                medical colleges and deemed medical universities across India.
                The process is managed by central and state authorities like the
                Medical Counseling Committee (MCC) and state-level counseling
                committees, respectively.
              </p>

              <p>
                Medical admission counselling is essential process of admission
                on all clinical medical programs such as UG medical courses
                (MBBS, BDS, BAMS, BHMS) PG medical courses (MD, MS, DNB) and SS
                medical courses (D.M, M.Ch).The counseling process involves
                registration, choice filling, seat allotment, and document
                verification.
              </p>

              <p>
                During the counselling process, students can choose their
                preferred colleges and courses based on their category, rank in
                the entrance exam and the availability of seats. The medical
                admission counselling process is usually conducted online with
                last round may be conducted in offline mode, and it usually
                involves multiple rounds of seat allotment until all the
                available seats are filled.
              </p>

              <p className={css.bluepara}>
                " Medical admission counselling is an essential process for
                medical aspirants as it provides them with an opportunity to
                pursue their desired medical courses in reputed institutions
                across the country. It also ensures that the admission process
                is conducted in a fair and transparent manner, eliminating any
                biases or prejudices."
              </p>
            </div>
            <div className={css.aboutdiv} id="1">
              <h2 className={css.h2headdiv}>
                MCC <strong>Counselling</strong>
              </h2>
              <p>
                Medical admission counselling in India is a complex process that
                is managed by Ministry of Health and Family welfare MoH&FW at
                the national and state Director General of Medical Education at
                respective state levels. The Medical Counseling Committee (MCC)
                is authority under M-H&FW that manages the admission process for
                undergraduate (MBBS/BDS), postgraduate (MD/MS/DNB), and Super
                Specialty (DM/M.Ch) medical courses in India.
              </p>

              <p>
                For undergraduate courses, MCC manages seat allotment for 15% of
                all government medical college seats in India, also known as the
                All India Quota. MCC also manages the seat allotment for 100% of
                all AIIMS and Deemed universities in the country. One of the
                biggest advantages of MCC counselling is that it is free from
                any domicile condition, which means students from any part of
                India can apply for counselling.
              </p>

              <p>
                For postgraduate courses, MCC conducts admission counselling for
                50% of all India government medical college seats, known as the
                All India Quota (AIQ). MCC also manages the seat allotment for
                100% of the Diplomate of National Board (DNB) seats across
                India. However, MCC currently does not conduct admission
                counselling for AIIMS, JIPMER, and PGI Chandigarh, for which the
                admission counselling is managed by AIIMS.
              </p>

              <p>
                For Super Specialty (SS) courses, MCC conducts admission
                counselling for 100% of D.M. and M.Ch seats, except for AIIMS.
                This ensures that students have a fair chance of securing
                admission to these highly specialized courses.
              </p>

              <p>
                MCC counselling is the first medical admission counselling to
                start after the NEET exam. State admission counselling
                authorities are supposed to plan their schedules after MCC
                counselling, although some states may release the counselling
                registration stage even before MCC.
              </p>

              <p>
                The MCC counselling process is conducted in four rounds, with
                the fourth round being the stray vacancy round. The stray round
                for government medical colleges is conducted online, while the
                stray vacancy round for deemed universities is conducted at the
                respective institutions.
              </p>

              <p className={css.bluepara}>
                "MCC plays a crucial role in managing the admission process for
                medical courses in India. Its transparent and efficient
                counselling process ensures that deserving students from all
                over the country have a fair chance of securing admission to the
                best government medical colleges and deemed medical universities
                in India."
              </p>
            </div>
            <div className={css.aboutdiv} id="2">
              <h2 className={css.h2headdiv}>
                State medical admission <strong>counselling</strong>
              </h2>

              <p>
                State medical admission counselling is a crucial process for
                aspiring medical students who wish to secure admission in state
                government medical colleges and private medical colleges in
                their state. The state counselling process is conducted
                separately from the central counselling conducted by the Medical
                Counseling Committee (MCC).
              </p>

              <p>
                State medical counselling is responsible for allotting 85% of
                seats in their state government medical colleges and 100% of
                seats in private medical colleges in that state. However, the
                state medical counselling processes are often unstructured and
                complex compared to the MCC counselling process.
              </p>

              <p>
                Unlike the MCC counselling process, the state counselling
                processes have domicile dependent eligibility conditions for
                participation in counselling. The state counselling processes
                are designed to benefit candidates who are residents of the
                state and have completed their schooling in the state.
                Therefore, the eligibility criteria for state counselling
                processes often involve domicile and residency requirements.
              </p>

              <p>
                Additionally, unlike the standard reservation rules followed by
                MCC, the reservation rules for state counselling are extremely
                diverse. Each state has its own set of rules and regulations for
                the reservation of seats in medical colleges. The diversity in
                reservation rules can make it difficult for students to
                understand the eligibility criteria for admission to a
                particular college.
              </p>

              <p>
                While many states do not allow non-domicile students to
                participate in their counselling process, there are many states
                that allow non-domicile students to participate in seeking
                admission to their private medical colleges. However, there is
                quite a variety in terms of rules and regulations for different
                state medical admission counselling processes.
              </p>

              <p className={css.bluepara}>
                State medical admission counselling plays a crucial role in
                providing access to medical education to deserving candidates in
                their respective states. However, the unstructured and diverse
                nature of the state counselling processes can make it
                challenging for students to navigate the system and secure
                admission to the college and course of their choice.
              </p>
            </div>
            <div className={css.aboutdiv} id="3">
              <h2 className={css.h2headdiv}>
                Eligibility criteria for medical admission{" "}
                <strong>counselling</strong>
              </h2>
              <p>
                Understanding eligibility conditions for participation in
                medical admission counselling are crucial to ensure that
                deserving candidates get a fair chance to secure admission to
                medical colleges and universities. There are different
                eligibility conditions for participation in the Medical
                Counseling Committee (MCC) counselling and state medical
                counselling.
              </p>

              <p>
                For participation in the MCC counselling, a student must have
                qualified for the National Eligibility cum Entrance Test (NEET)
                exam of that year. It is important to note that the previous
                year's scores of NEET exams are not valid for the current year's
                counselling. Therefore, students who wish to participate in the
                MCC counselling must have qualified for the NEET exam of that
                year.
              </p>

              <p>
                For participation in MCC counselling, apart from the NEET
                qualification, there is no requirement for domicile except for
                Delhi quota seats, JIPMER and AMU internal seats. This means
                that students from any state in India can participate in the MCC
                counselling and apply for all India quota of government medical
                colleges in different states based on their merit and
                preference.
              </p>

              <p>
                However, for state medical counselling, a student is required to
                satisfy the domicile conditions applicable for that state. The
                domicile condition usually requires the student to be a resident
                of the state and to have completed their schooling in the state.
                Therefore, only students who fulfill the domicile conditions of
                a particular state are eligible to participate in the
                counselling process for medical colleges in that state.
              </p>

              <p>
                It is important to note that students who score less than the
                percentile cut-off in the NEET exam are not eligible to
                participate in either state or MCC counselling. The cut-off
                percentile varies every year and is determined by the National
                Testing Agency (NTA) based on various factors like the
                difficulty level of the exam and the number of students who
                appeared for the exam.
              </p>

              <p className={css.bluepara}>
                "The eligibility conditions for participation in medical
                admission counselling are important to ensure that only
                deserving candidates get a fair chance to secure admission to
                medical colleges and universities. The NEET qualification is
                mandatory for both state and MCC counselling, but the domicile
                conditions vary depending on state counselling process."
              </p>
            </div>
            <div className={css.aboutdiv} id="4">
              <h2 className={css.h2headdiv}>
                Documents required for medical admission{" "}
                <strong>counselling</strong>
              </h2>

              <p>
                When it comes to applying for medical admission counselling,
                there are various documents that candidates need to submit to be
                eligible for the process. Similarly, when it comes to the
                admission process, there are certain documents that are
                mandatory for candidates to submit to secure admission to
                medical colleges and universities across India.
              </p>

              <p>
                For the application process, the following documents are usually
                required:
              </p>

              <p>
                <b>NEET Admit Card:</b>Candidates need to provide the NEET admit
                card, which contains their NEET roll number, date of birth, and
                other essential details. This is an essential document as it
                establishes the candidate's eligibility for the counselling
                process.
              </p>

              <p>
                <b>NEET Scorecard:</b>The NEET scorecard contains the
                candidate's score, percentile, and All India Rank (AIR) obtained
                in the NEET exam. This document is mandatory for participation
                in counselling, as it determines the candidate's eligibility for
                admission to medical colleges and universities across India.
              </p>

              <p>
                <b>Identity Proof:</b>Candidates need to provide a valid
                government-issued identity proof, such as Aadhar card, driving
                license, or passport, to establish their identity.
              </p>

              <p>
                <b>Passport-size Photographs:</b>Candidates need to provide
                passport-size photographs for identification purposes.
              </p>

              <p>
                <b>Class 10 and Class 12 Mark Sheets:</b>Candidates need to
                submit their class 10 and class 12 mark sheets to establish
                their academic credentials.
              </p>

              <p>
                <b>Category Certificate:</b>Candidates belonging to reserved
                categories need to provide a category certificate to avail of
                the reservation benefits during the admission process.
              </p>

              <p>
                Once the application process is completed, candidates who secure
                a seat in the counselling process need to submit the following
                documents during the admission process:
              </p>

              <p>
                <b>NEET Admit Card and Scorecard:</b>The NEET Admit Card and
                Scorecard are essential documents for admission to medical
                colleges and universities in India.
              </p>

              <p>
                <b>Class 10 and Class 12 Mark Sheets:</b>Candidates need to
                submit their class 10 and class 12 mark sheets to establish
                their academic credentials.
              </p>

              <p>
                <b>Transfer Certificate:</b>Candidates need to provide the
                transfer certificate, which is a document provided by their
                previous school or college, stating that they have completed
                their education.
              </p>

              <p>
                <b>Character Certificate:</b>Candidates need to provide a
                character certificate, which is a document provided by their
                previous school or college, stating that they are of good
                character.
              </p>

              <p>
                <b>Migration Certificate:</b>Candidates who have completed their
                education from a school from any board need to provide a
                migration certificate to establish their eligibility for
                admission in medial university.
              </p>

              <p>
                <b>Medical Certificate:</b>Candidates need to provide a medical
                certificate stating that they are physically fit to pursue
                medical education.
              </p>

              <p className={css.bluepara}>
                "The documents required for the application process and
                admission process in medical counselling play a crucial role in
                establishing the eligibility of candidates for admission to
                medical colleges and universities across India. Candidates must
                ensure that they have all the necessary documents before
                applying for counselling to avoid any last-minute hassles."
              </p>
            </div>
            <div className={css.aboutdiv} id="5">
              <h2 className={css.h2headdiv}>
                Reservation categories for NEET UG <strong>counselling</strong>
              </h2>
              <p>
                India has a complex system of reservation rules for medical
                admission. The system provides opportunities to students from
                disadvantaged backgrounds to have access to higher education.
                The following are the standard reservation categories followed
                by the Medical Counseling Committee (MCC) and most state
                admission counseling:
              </p>

              <p>Scheduled Castes (SC) - 15%</p>
              <p>Scheduled Tribes (ST) - 7.5%</p>
              <p>Other Backward Classes (OBC-NCL) - 27%</p>
              <p>Economically Weaker Sections (EWS) - 10%</p>
              <p>
                In addition to the above categories, there are also reservation
                categories for persons with disabilities (PwD), children of
                armed personnel, ex serviceman and females.
              </p>

              <p>
                PwD category students can avail of horizontal reservation, which
                means they will be considered within their respective categories
                for admission but will also get additional reservation up to 5%
                of the total seats. Most states offer horizontal reservation for
                female students for admission in the government medical and
                dental colleges.
              </p>

              <p>
                The reservation categories and percentage may vary depending on
                the state. Moreover, for state admission counselling, there may
                be different subcategories within a reservation category. For
                example, in the OBC-NCL category, there may be subcategories
                such as BC-A, BC-B etc,
              </p>

              <p>
                It is also important to note that the eligibility criteria for
                each category may also differ. For instance, for EWS
                eligibility, the income criteria may different among states.
                There may be requirement of state specific category certificate
                to avail benefits.
              </p>

              <p>
                To be eligible for reservation benefits, a candidate must
                provide the necessary documentation and meet the eligibility
                criteria. The necessary documents may include caste
                certificates, income certificates, disability certificates, etc.
              </p>

              <p>
                It is important to note that reservation benefits are only
                applicable during the admission process. Once the admission
                process is complete, there is no reservation for subsequent
                years of the course. Also, candidates who take advantage of
                reservation benefits must meet the same academic standards as
                other candidates.
              </p>

              <p>
                It is worth noting that there are no reservations available for
                admission in deemed universities. In addition, at the state
                level, there may be no separate category benefit for admission
                in private medical colleges in many states. However, NEET
                qualifying criteria cut-off benefit for seeking admission in
                private and deemed medical colleges may apply.
              </p>

              <p>
                In India, there are several minority medical colleges for Jain,
                Sikh, Muslim, Christian and Boudh that offer seat reservations
                for students belonging to a particular minority community. For
                instance, a Jain minority medical college may offer 50% seats
                for Jain students. These seats are reserved to ensure that
                students from these communities have equal opportunities to
                pursue their dreams of becoming a doctor. Students who belong to
                the minority community and wish to apply for seats under this
                quota must meet the eligibility criteria specified by the
                college.
              </p>

              <p>
                In addition to minority quota seats, there are also NRI quota
                seats in most deemed and many state government medical colleges.
                These seats are reserved for Non-Resident Indians (NRIs) or NRI
                sponsored candidates. Students who wish to apply for seats under
                this quota must meet the eligibility criteria specified by the
                college.
              </p>

              <p>
                It is important to note that the admission process for minority
                and NRI quota seats may differ from the general admission
                process, and students are advised to check the guidelines and
                eligibility criteria carefully before applying. In some cases,
                students may be required to provide additional documents to
                prove their eligibility for these quota seats.
              </p>

              <p className={css.bluepara}>
                "While MCC has standardized reservation rules, state counseling
                processes can be highly diverse and complex. It is recommended
                that students research the reservation guidelines of the state
                in which they are seeking admission thoroughly. By understanding
                the reservation framework, candidates can take full advantage of
                the opportunities available to them and fulfill their
                aspirations of becoming medical professionals."
              </p>
            </div>
            <div className={css.aboutdiv} id="6">
              <h2 className={css.h2headdiv}>
                College choice filling for NEET UG <strong>counselling</strong>
              </h2>
              <p>
                College choice filling is one of the most important decisions
                that a student has to make during medical admission counselling.
                Choosing the right college can have a significant impact on a
                student's career as it can determine the quality of education
                and the exposure they receive during their course.
              </p>

              <p>
                During the counselling process, students are expected to rank
                the available colleges in order of preference. However, choosing
                the right college can be a daunting task, especially for
                students who are not familiar with the strengths and weaknesses
                of each college. This is where seeking professional help can be
                beneficial.
              </p>

              <p>
                It is essential for a student to be aware of the different
                factors that need to be considered while ranking the available
                colleges. These factors include infrastructure, academic
                excellence, research opportunities, faculty expertise, clinical
                exposure, etc. A student needs to evaluate each college based on
                these factors and rank them in order of their preference.
              </p>

              <p>
                It is important to note that the ranking of colleges should be
                based on a student's individual needs and preferences. What may
                be the best college for one student may not necessarily be the
                best for another. Therefore, it is essential to seek
                professional guidance to make informed choices.
              </p>

              <p>
                A professional consultant can provide insights into the
                different colleges participating in the counselling process,
                their admission criteria, fees, and other essential information.
                By understanding these factors, a student can make informed
                decisions and rank the colleges accordingly.
              </p>

              <p>
                It is also important to note that most students fail to get
                admission to the best medical colleges because they fail to fill
                in the right order of the choices. Therefore, it is essential to
                seek professional guidance to ensure that the right order of
                preference is filled in.
              </p>

              <p className={css.bluepara}>
                "College choice filling is a critical aspect of medical
                admission counselling. It is essential to seek professional help
                to make informed decisions and rank the available colleges based
                on individual preferences and needs. By making the right
                choices, a student can secure admission to the best college and
                fulfill their aspirations of becoming medical professionals."
              </p>
            </div>
            <div className={css.aboutdiv} id="7">
              <h2 className={css.h2headdiv}>
                Central Pool Quota in Medical <strong>Admissions</strong>
              </h2>
              <p>
                The Central Pool Quota is a reserved category for medical
                admissions that is available to students who are wards of
                Central Government employees or students who belong to the North
                Eastern states of India. The Central Pool Quota is administered
                by the Directorate General of Health Services (DGHS), Ministry
                of Health and Family Welfare, Government of India.
              </p>

              <p>
                Under the Central Pool Quota, a certain percentage of seats are
                reserved for students in all government medical colleges across
                India. The percentage of seats reserved varies from state to
                state, and the exact number of seats available under the quota
                may also vary from year to year.
              </p>

              <p>
                Students who wish to apply for the Central Pool Quota must meet
                the eligibility criteria specified by the DGHS. The eligibility
                criteria include:
              </p>

              <div>
                <p>Students must be Indian citizens</p>
                <p>
                  Students must have completed their schooling from a recognized
                  school in India
                </p>

                <p>
                  Students must have scored a minimum of 50% in their Class XII
                  examination (40% for SC/ST/OBC candidates)
                </p>

                <p>Students must meet the age criteria specified by the DGHS</p>
              </div>
              <p>
                Students who meet the eligibility criteria must then apply for
                the Central Pool Quota through the online registration process.
                The registration process usually begins in the month of May and
                is open for a limited period.
              </p>

              <p>
                Based on the NEET score of the applicants, a merit list is
                prepared, and students are selected for admission under the
                Central Pool Quota. The selected students are then allotted
                seats in government medical colleges across India based on their
                preferences and availability of seats.
              </p>

              <p>
                It is important to note that the Central Pool Quota is only
                applicable to government medical colleges and not to private or
                deemed medical colleges. Also, the quota is not applicable to
                the All India Quota seats that are filled through the NEET
                Counselling process.
              </p>

              <p className={css.bluepara}>
                "It is important to note that there are several misconceptions
                and myths surrounding the Central Pool Quota, and many students
                may fall prey to unscrupulous agents who promise admission under
                this quota in exchange for money. Students and their parents are
                advised to exercise caution and verify the authenticity of such
                claims before taking any action."
              </p>

              <p>
                The DGHS has issued several advisories and warnings against such
                fraudulent practices, and students are encouraged to seek help
                and guidance only from trusted sources such as the official
                website of the DGHS or other government websites. By staying
                informed and aware, students can make informed decisions and
                avoid falling victim to misinformation or fraud. For more
                information, please visit the website of the Directorate General
                of Health Services (DGHS), Ministry of Health and Family
                Welfare, Government of India.
              </p>
            </div>
            <div className={css.aboutdiv} id="8">
              <h2 className={css.h2headdiv}>
                Admission process after <strong>NEET UG counselling</strong>
              </h2>
              <p>
                Once a seat has been allotted to a student through the
                counselling process, the next step is to complete the admission
                process. It is important to note that seat allotment does not
                guarantee admission, and the student is required to complete a
                set of formalities in order to secure their admission.
              </p>

              <p>
                The first step in the admission process is to deposit the
                required fees to confirm the seat allotted to the student. This
                fee may vary depending on the college or institution and is
                non-refundable in most cases. Failure to do so can result in the
                cancellation of the allotted seat and forfeiture of the
                counselling fee unless free exit is allowed.
              </p>

              <p>
                After the payment of fees, the student is required to report to
                the allotted institute or the designated office of the
                counselling authority along with all their original documents.
                It is mandatory for the student to be present physically at the
                time of admission, and they cannot depute anyone else to
                complete the formalities on their behalf.
              </p>

              <p>
                During the admission process, the student and their parents or
                guardians may be required to sign various legal affidavits and
                mandatory undertakings, which are binding and must be taken
                seriously. These documents may include declarations about the
                student's eligibility criteria, their academic records, and
                their commitment to comply with the rules and regulations of the
                institution.
              </p>

              <p>
                It is important to note that even if the student wishes to
                change or shuffle their college, they are still required to
                complete the admission process formalities. If the student is
                eligible for a change of college or course, they must follow the
                guidelines and procedures set by the counselling authority and
                complete the admission process at the new institute.
              </p>

              <p className={css.bluepara}>
                "It is important for the candidate and their parents to
                understand the admission process and follow all the rules and
                regulations. Any discrepancy or non-compliance with the
                admission process can result in the cancellation of the allotted
                seat and forfeiture of the admission fee. By staying informed
                and aware, candidates can ensure a smooth and hassle-free
                admission process."
              </p>
            </div>
            <div className={css.aboutdiv} id="9">
              <h2 className={css.h2headdiv}>
                Service Bond After <strong>MBBS, MD/MS</strong>
              </h2>
              <p>
                In India, it is common for medical students to be bound by a
                service bond after completing their courses. The service bond is
                a legal agreement between the student and the state government,
                which requires the student to serve a certain period of time in
                government hospitals or healthcare facilities after completing
                their studies.
              </p>

              <p>
                The service bond is usually a condition for admission to medical
                colleges in the state. The conditions of the service bond vary
                from state to state, but the basic premise is the same. Students
                are required to serve the state by working in government
                hospitals or healthcare facilities for a certain period of time,
                usually ranging from one to five years.
              </p>

              <p>
                The purpose of the service bond is to ensure that the state has
                an adequate number of medical professionals to serve its
                population. It is also a way for the state to recoup the
                investment it has made in the education of medical students.
              </p>

              <p>
                The service bond typically includes provisions regarding the
                duration of service, the type of work the student will be
                required to perform, the location of the work, and the
                consequences of breaching the bond. Students who breach the bond
                by failing to complete the required period of service may be
                required to pay a penalty or face legal action.
              </p>

              <p className={css.bluepara}>
                "While the service bond can be seen as a burden by some
                students, it also has its advantages. Students who complete the
                service bond gain valuable experience in the field of medicine
                and public healthcare. They also have the opportunity to serve
                their community and make a difference in the lives of others."
              </p>

              <p>
                The service bond is an essential binding for students studying
                in medical colleges in India. While the conditions of the
                service bond differ from state to state, the basic premise
                remains the same. The service bond is a way for the state to
                ensure that it has an adequate number of medical professionals
                to serve its population, and for students to gain valuable
                experience and serve their community.
              </p>
            </div>
            <div className={css.aboutdiv} id="10">
              <h2 className={css.h2headdiv}>
                Options For Low NEET <strong>Scores</strong>
              </h2>
              <p>
                For students who have scored low marks in NEET, the prospect of
                getting admission to a medical college in India may seem bleak.
                However, there are still several options available to them.
              </p>

              <p>
                If students have the affordability, they can plan for admission
                in private or deemed medical colleges. It is easier for students
                with low NEET score to get seat in private and deemed medical
                colleges due to higher course fees. While the cost of education
                in private medical colleges is higher than government colleges,
                it is still a viable option for students who are determined to
                pursue a career in medicine.
              </p>

              <p>
                If students can't afford the cost of education in a private
                medical college for MBBS, they should consider other courses
                like BDS, BAMS, and BHMS. These courses are also in the field of
                healthcare and offer opportunities for students to make a
                difference in people's lives.
              </p>

              <p>
                Similarly, for PG courses, students can choose DNB or post-MBBS
                diploma as low-cost options. These courses provide opportunities
                for students to specialize in various fields of medicine and
                build a successful career.
              </p>

              <p>
                However, students should refrain from dropping a year if they
                score less than 350 in the first attempt. NEET is a highly
                competitive exam, and it is not easy to secure a high rank.
                Dropping a year may not necessarily result in better marks, and
                it can be a waste of time and effort.
              </p>

              <p>
                Additionally, students should not seek the option of studying
                abroad for medical courses. Medicine is a highly regulated
                field, and it is very tedious to come back into mainstream
                practice in India. It is essential to ensure that the medical
                college is recognized by the NMC (National Medical Commission)
                to practice in India.
              </p>

              <p className={css.bluepara}>
                "While low marks in NEET may seem like the end of the road for
                aspiring medical students, there are still several options
                available to them. Private or deemed medical colleges, BDS,
                BAMS, BHMS for undergraduate and DNB, and post-MBBS diploma for
                post graduation are viable options for students who are
                determined to pursue a career in medicine. Dropping a year and
                seeking the option of studying abroad are not recommended, as
                they can result in a waste of time, effort, and money."
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
