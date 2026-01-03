import React from "react";
import styles from "../Modules.css/HomePage.module.css"; 

function HomePage() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.mainTitle}>¡Bienvenido a mi App de React! 🚀</h1>
      <p className={styles.subtitle}>
        Explora nuestro blog y descubre las últimas novedades sobre tecnología.
      </p>
      <button className={styles.ctaButton}>Empezar a leer</button>
    </div>
  );
}

export { HomePage };