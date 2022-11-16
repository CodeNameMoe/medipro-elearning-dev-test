import React from "react";
import styles from "../sidebar/sidebar.module.css";
import Image from "next/image";
import { ImHome } from "react-icons/im";
import { BiArrowBack } from "react-icons/bi";
import logo from "../../assets/mediPro-logo.png";
import CourseCard from "../coursecard/CourseCard";

function SideBar() {
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
    </div>
  );
}

export default SideBar;
