import {useNavigate, useParams,Link } from "react-router-dom";
import { author } from "./BlogData";
import  { useOut,deletePost } from "./out";

function Blogpost() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const Out = useOut() 
   
    const blogpost = Out.blogPost.find(post => post.slug === slug);
    const canDelete = Out.user?.role  === "admin" || blogpost.author === Out.user?.username;

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
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}> Volver</button>
            <p>{blogpost.content}</p>
            <Link to="/blog">Volver al blog</Link>

            {canDelete && (
                <div>
                    <button onClick={() => Out.deletePost(slug)}>delete Post</button>
                </div>
            )}
        </>
    );
}

export { Blogpost };