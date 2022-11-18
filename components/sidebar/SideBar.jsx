import React, { useState } from "react";
import styles from "../sidebar/sidebar.module.css";
import Image from "next/image";
import { ImHome } from "react-icons/im";
import { BiArrowBack } from "react-icons/bi";
import logo from "../../public/mediPro-logo.png";
import CourseCard from "../coursecard/CourseCard";
import SectionCard from "../card/SectionCard";
import Link from "next/link";

function SideBar() {
  let sectionTitles = [
    { title: "Introduction", id: 1 },
    {
      title: "Understanding Learning Disabilities",
      id: 2,
    },
    { title: "Common types of learning disability", id: 3 },
    { title: "Causes", id: 4 },
    { title: "Statistics", id: 5 },
    { title: "Support", id: 6 },
    { title: "Treatment/Management", id: 7 },
    { title: "Legislation", id: 8 },
    { title: "Patients at risk of HARM", id: 9 },
    { title: "Barriers to Support", id: 10 },
    { title: "Inequalities in Health for Learning Disabilities", id: 11 },
    { title: "Access to healthcare", id: 12 },
    { title: "Annual health checks", id: 13 },
    { title: "Associated health conditions", id: 14 },
    { title: "Reasonable adjustments", id: 15 },
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ImHome className={styles.home} />
        <Image
          className={styles.logo}
          src={logo}
          alt="Picture of the author"
          width={100}
          height={30}
        />
        <BiArrowBack className={styles.arrow} />
      </nav>
      <CourseCard />
      <Link href="/" className={styles.link}>
        <SectionCard title={sectionTitles[0].title} />
      </Link>
      <Link href="/Understanding-Learning-Disabilities" className={styles.link}>
        <SectionCard title={sectionTitles[1].title} />
      </Link>
      <Link href="/Common-types-of-learning-disability" className={styles.link}>
        <SectionCard title={sectionTitles[2].title} />
      </Link>
      <Link href="/Causes" className={styles.link}>
        <SectionCard title={sectionTitles[3].title} />
      </Link>
      <Link href="/Statistics" className={styles.link}>
        <SectionCard title={sectionTitles[4].title} />
      </Link>
      <Link href="/Support" className={styles.link}>
        <SectionCard title={sectionTitles[5].title} />
      </Link>
      <Link href="/Treatment-Management" className={styles.link}>
        <SectionCard title={sectionTitles[6].title} />
      </Link>
      <Link href="/Legislation" className={styles.link}>
        <SectionCard title={sectionTitles[7].title} />
      </Link>
      <Link href="/Patients-at-risk-of-HARM" className={styles.link}>
        <SectionCard title={sectionTitles[8].title} />
      </Link>
      <Link href="/Barriers-to-Support" className={styles.link}>
        <SectionCard title={sectionTitles[9].title} />
      </Link>
      <Link
        href="/Inequalities-in-Health-for-Learning-Disabilities"
        className={styles.link}
      >
        <SectionCard title={sectionTitles[10].title} />
      </Link>
      <Link href="/Access-to-healthcare" className={styles.link}>
        <SectionCard title={sectionTitles[11].title} />
      </Link>
      <Link href="/Annual-health-checks" className={styles.link}>
        <SectionCard title={sectionTitles[12].title} />
      </Link>
      <Link href="/Associated-health-conditions" className={styles.link}>
        <SectionCard title={sectionTitles[13].title} />
      </Link>
      <Link href="/Reasonable-adjustments" className={styles.link}>
        <SectionCard title={sectionTitles[14].title} />
      </Link>
    </div>
  );
}

export default SideBar;
