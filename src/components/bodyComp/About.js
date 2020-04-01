import React from "react";
import styles from "./styles.module.css";

function About() {
  return (
    <div className={styles.about_page}>
      <h1 className={styles.about_page_header}>About us</h1>
      <p className={styles.about_content}>Honeybee Labs is a small </p>
    </div>
  );
}

export default About;
