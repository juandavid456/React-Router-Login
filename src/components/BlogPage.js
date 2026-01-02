import React from "react";
import { Link,Outlet } from "react-router-dom";
import { useOut } from "./out";
import { Blogpost } from "./Blogpost";
import styles from "../Modules.css/BlogPage.module.css";

export function BlogPage() {
  const Out = useOut();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explora nuestro Blog</h1>

      <Outlet/>

      <ul className={styles.postGrid}>
        {Out.blogPost.map((post, idx) => (
          <BlogLink key={post.slug ?? idx} post={post} />
        ))}
      </ul>
    </div>
  );
}

function BlogLink({ post }) {
  return (
    <li className={styles.postCard}>
      <Link className={styles.blogLink} to={`/blog/${post.slug}`}>
        {post.title}
      </Link>
    </li>
  );
}