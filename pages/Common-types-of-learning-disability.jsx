import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Image from "next/image";
import data from "../data/data";
import styles from "../styles/common.module.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function Common() {
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
            src={data[2].slides[0].imgPath}
            alt="#"
            width={500}
            height={350}
            className={styles.img}
          />
        </section>

        {/* <div className={styles.dots}></div> */}
        <BsFillArrowLeftCircleFill className={styles.left} />
        <BsFillArrowRightCircleFill className={styles.right} />
      </div>
    </div>
  );
}

export default Common;
