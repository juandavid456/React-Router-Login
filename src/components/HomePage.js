import React from "react";
import styles from "../Modules.css/HomePage.module.css"; 
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.mainTitle}>¡Bienvenido a mi App de React! 🚀</h1>
      <p className={styles.subtitle}>
        Explora nuestro blog y descubre las últimas novedades sobre tecnología.
      </p>
      <Link to="/blog">
        <button className={styles.Button}>Empezar a leer</button>
      </Link>
    </div>
  );
}

export { HomePage };