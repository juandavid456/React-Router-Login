import React from "react";
import { useOut } from "./out";
import { Navigate } from "react-router-dom";
import styles from "../Modules.css/LoginPage.module.css";

function LoginPage() {
    const out = useOut();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const login = (e) => {
        e.preventDefault();
        out.login({ username });
    };

    if (out.user) {
        return <Navigate to="/profile" />;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login Page</h1>
            <form onSubmit={login} className={styles.formContainer}>
                <label>
                    Username:
                    <input
                        type="text"
                        className={styles.input}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit" className={styles.submitBtn}>Login</button>
            </form>
        </div>
    );
}

export { LoginPage };