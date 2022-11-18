import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Image from "next/image";
import data from "../data/data";
import styles from "../styles/understand.module.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function Understand() {
  return (
    <div>
      <SideBar />
      <div className={styles.container}>
        <div className={styles.user}>
          <FaUserCircle />
        </div>
        <h1>Understanding Learning Disabilities</h1>
        <section className={styles.window}>
          <Image
            src={data[1].slides[0].imgPath}
            alt="#"
            width={500}
            height={350}
            className={styles.img}
          />
          <p>
            {data[1].slides[0].text}
            <br />
            <br />
            {data[1].slides[1].text}
            <br />
            <br />
            {data[1].slides[2].text}
          </p>
        </section>

        {/* <div className={styles.dots}></div> */}
        <BsFillArrowLeftCircleFill className={styles.left} />
        <BsFillArrowRightCircleFill className={styles.right} />
      </div>
    </div>
  );
}

export default Understand;
