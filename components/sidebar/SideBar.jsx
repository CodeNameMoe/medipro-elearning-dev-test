import React, { useState } from "react";
import styles from "../sidebar/sidebar.module.css";
import Image from "next/image";
import { ImHome } from "react-icons/im";
import { BiArrowBack } from "react-icons/bi";
import logo from "../../assets/mediPro-logo.png";
import CourseCard from "../coursecard/CourseCard";
import SectionCard from "../card/SectionCard";

function SideBar() {
  const sectionTitles = [
    { title: "Introduction", id: 1 },
    { title: "Understanding Learning Disabilities", id: 2 },
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
      {sectionTitles.map((title, i) => {
        return <SectionCard title={title.title} key={i} />;
      })}
    </div>
  );
}

export default SideBar;
