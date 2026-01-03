import React from "react";  
import { useOut } from "./out";
import styles from "../Modules.css/Logout.module.css";

function LogOutPage() {
    const out = useOut();

    const logout = (e) => {
        e.preventDefault();
        out.logout(); 
    };
 return (
        <div className={styles.container}>
            <div className={styles.logoutCard}>
                <h1 className={styles.title}>Cerrar Sesión</h1>
                <p className={styles.message}>¿Estás seguro de que quieres salir?</p>
                
                <form onSubmit={logout}> 
                    <button type="submit" className={styles.logoutBtn}>
                        Confirmar Salida
                    </button>
                </form>
            </div>
        </div>
    );
}
export {LogOutPage};