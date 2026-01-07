import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { author } from "./BlogData";
import { useOut } from "./out";
import styles from "../Modules.css/Blogpost.module.css";

function Blogpost() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const Out = useOut();

    const blogpost = Out.blogPost.find(post => post.slug === slug);

    const [isEditing, setIsEditing] = React.useState(false);
    const [newTitle, setNewTitle] = React.useState(blogpost?.title || "");
    const [newContent, setNewContent] = React.useState(blogpost?.content || "");


    const onSave = () => {
        Out.editPost(slug, {
            title: newTitle,
            content: newContent
        });
        setIsEditing(false);
    };

    const canDelete = Out.user?.role === "admin";
    const canEdit = Out.user?.role === "admin";

    const returnToBlog = () => {
        navigate("/blog");
    }

    if (!blogpost) {
        return (
            <div>
                <h2>Post no encontrado</h2>
                <Link to="/blog">Volver al blog</Link>
            </div>
        );
    }

    return (
        <>
            {isEditing ? (
                <div className={styles.editContainer}>
                    <label>Título del Post</label>
                    <input
                        className={styles.editInput}
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Escribe el título aquí..."
                    />
                    <label>Contenido</label>
                    <textarea
                        className={styles.editTextarea}
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        placeholder="Escribe el contenido de tu post..."
                    />
                    <div className={styles.buttonGroup}>
                        <button className={styles.cancelBtn} onClick={() => setIsEditing(false)}>Cancelar</button>
                        <button className={styles.saveBtn} onClick={onSave}>Guardar Cambios</button>
                    </div>
                </div>
            ) : (
                <>
                    <h2>{blogpost.title}</h2>
                    <p>{blogpost.content}</p>

                    <div className={styles.buttonGroup}>

                        {canEdit && (
                            <button className={styles.editBtn} onClick={() => setIsEditing(true)}>Edit Post</button>
                        )}

                        <Link to="/blog" className={styles.linkButton}>Volver al blog</Link>


                        {canDelete && (
                            <div>
                                <button className={styles.deleteBtn} onClick={() => Out.deletePost(slug)}>Delete Post</button>
                            </div>
                        )}
                    </div>

                </>
            )}
        </>
    );
}

export { Blogpost };