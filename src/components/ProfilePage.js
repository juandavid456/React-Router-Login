import React from "react";  
import { useOut } from "./out";
import styles from "../Modules.css/ProfilePage.module.css"

function ProfilePage() {
  const out = useOut();
  const initial = out.user?.username?.charAt(0).toUpperCase();

  return(
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          {initial}
        </div>
        <h1 className={styles.username}>{out.user?.username}</h1>
        <p className={styles.role}>Rol: {out.user?.role}</p>
      </div>
    </div>
  );
}
export {ProfilePage};