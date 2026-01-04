import React from "react";
import {useNavigate, useParams,Link } from "react-router-dom";
import { author } from "./BlogData";
import  { useOut,deletePost } from "./out";

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
    
    const canDelete = Out.user?.role  === "admin";
    const canEdit = Out.user?.role  === "admin"; 

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
            <div>
                <input 
                    value={newTitle} 
                    onChange={(e) => setNewTitle(e.target.value)} 
                    />
                <textarea 
                    value={newContent} 
                    onChange={(e) => setNewContent(e.target.value)} 
                    />
                <button onClick={() => setIsEditing(false)}>Cancelar</button>
                <button onClick={onSave}>Guardar Cambios</button>
            </div>
        ) : (
            <>
                <h2>{blogpost.title}</h2>
                <p>{blogpost.content}</p>

                {canEdit && (
                    <button onClick={() => setIsEditing(true)}>Edit Post</button>
                )}
                
                <button onClick={returnToBlog}> Volver</button>
                <Link to="/blog">Volver al blog</Link>
            
                
                {canDelete && (
                    <div>
                        <button onClick={() => Out.deletePost(slug)}>Delete Post</button>
                    </div>
                )}

            </>
        )}
        </>
    );
}

export { Blogpost };