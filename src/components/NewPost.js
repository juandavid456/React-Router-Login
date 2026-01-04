import React from "react";
import { useOut } from "./out";
import styles from "../Modules.css/NewPost.module.css";

function NewPost() {
    const {createPost} = useOut();
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    const onSubmit = (e) => {
        e.preventDefault(); 
        createPost({ title, content }); 
    };

return (
     <div className={styles.formContainer}>
        <form onSubmit={onSubmit} className={styles.formCard}>
            <h2 className={styles.formTitle}>Crear nuevo post</h2>
            <input 
                className={styles.formInput}
                placeholder="Título" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
                className={styles.formTextarea}
                placeholder="Contenido" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
            />
            <button type="submit" className={styles.formButton}>Publicar</button>
            </form>
        </div>
    );
}
export { NewPost };