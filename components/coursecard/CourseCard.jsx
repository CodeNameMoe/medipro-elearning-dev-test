import React from "react";
import styles from "../coursecard/coursecard.module.css";
import Image from "next/image";
import child from "../../assets/child.jpg";
function CourseCard() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.child}
        src={child}
        alt="Picture of the author"
        width={80}
        height={80}
      />
      <span>MediPro: Learning Disabilities</span>
    </div>
  );
}

export default CourseCard;
