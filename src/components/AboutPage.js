import React from "react";
import styles from "../Modules.css/AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutCard}>
        <h1 className={styles.title}>Nuestra Misión 🎯</h1>
        <p className={styles.text}>
          Estamos construyendo una plataforma educativa para dominar React. 
          Nuestro objetivo es que navegar por la web sea una experiencia fluida y rápida.
        </p>
        
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>React</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>V6</span>
            <span className={styles.statLabel}>Router</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboutPage };