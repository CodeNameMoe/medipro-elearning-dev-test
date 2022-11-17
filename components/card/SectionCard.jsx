import React from "react";
import styles from "../card/sectioncard.module.css";
import { FiChevronsDown } from "react-icons/fi";

function SectionCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.arrow}>
        <FiChevronsDown className={styles.down} />
      </div>
      <span>{props.title}</span>
    </div>
  );
}

export default SectionCard;
