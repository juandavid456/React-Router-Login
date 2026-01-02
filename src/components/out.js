import React from "react";
import {Navigate, useNavigate, useLocation } from "react-router-dom";
import { adminUsers } from "./BlogData";
import blogdata from "./BlogData";


const OutContext = React.createContext();

function OutProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    const [blogPost, setBlogPost] = React.useState(blogdata);
    const [redirectTo, setRedirectTo] = React.useState(null);

    const deletePost = (slug) => {
        const newPosts = blogPost.filter(post => post.slug !== slug);
        setBlogPost(newPosts);
        navigate("/blog");
    };

    const login = ({ username }) => {
        if (adminUsers.includes(username)) {
            setUser({ username, role: "admin" });
        } else {
            setUser({ username, role: "user" });
        }
        
  
        const destino = redirectTo || "/profile";
        setRedirectTo(null); 
        navigate(destino);
    };

    const logout = () => {
        setUser(null);
        navigate("/login");
    };

    const saveCurrentRoute = (route) => {
        setRedirectTo(route);
    };

    const out = {
        user,
        login,
        logout,
        blogPost,
        setBlogPost,
        deletePost,
        redirectTo,
        saveCurrentRoute,
    };

    return (
    <OutContext.Provider value={out}>
        {children}
    </OutContext.Provider>
    );
}

function useOut() {
    const out = React.useContext(OutContext);
    return out;
}
function OutRoute({ children }) {
    const { user, saveCurrentRoute } = useOut();
    const location = useLocation();

    if (!user) {

        saveCurrentRoute(location.pathname);
        return <Navigate to="/login" />;
    }

    return children;
}

export{
    OutProvider,
    OutRoute,
    useOut
};