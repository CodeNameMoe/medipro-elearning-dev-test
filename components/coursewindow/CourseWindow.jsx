import { React } from "react";
import styles from "../coursewindow/coursewindow.module.css";
import Image from "next/image";
import data from "../../data/data";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import img1 from "../../public/1.jpg";
import { useState } from "react";

function CourseWindow() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <FaUserCircle />
      </div>
      <h1>Introduction</h1>
      <section className={styles.window}>
        <Image
          src={data[0].slides[0].imgPath}
          alt="#"
          width={600}
          height={350}
          className={styles.img}
        />
        <p>
          {data[0].slides[0].text}
          <br />
          <br />
          {data[0].slides[1].text}
          <br />
          <br />
          <Image
            src={data[0].slides[1].imgPath}
            alt="#"
            width={600}
            height={350}
            className={styles.img}
          />
          <br />
          {data[0].slides[2].text}
          <br />
          <br />
          {data[0].slides[3].text}
        </p>
      </section>

      {/* 
      <div className={styles.dots}></div> */}
      <BsFillArrowLeftCircleFill className={styles.left} />
      <BsFillArrowRightCircleFill className={styles.right} />
    </div>
  );
}

export default CourseWindow;
