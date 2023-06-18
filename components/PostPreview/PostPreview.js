import Link from "next/link";
import React from "react";
import styles from "./PostPreview.module.scss";
import { enhanceAltDescription } from "helpers/enhanceAltDescription";

export const PostPreview = ({ post, link }) => {
  return (
    <Link key={post.slug.current} href={link}>
      <div className={styles.postPreviewWrapper} key={post._id}>
        <div className={styles.imgWrapper}>
          <img src={post.mainImage} alt={enhanceAltDescription(post.title)} />
        </div>
        <div className={styles.categoryWrapper}>
          {post.categories &&
            post.categories.map((category) => (
              <p
                key={category._id}
                className={styles.category + " " + styles[category.color]}
              >
                {category.title}
              </p>
            ))}
        </div>
        <p id={post.title} className={styles.postTitle}>
          {post.title}
        </p>
        <div className={styles.authorData}>
          <div className={styles.dataWrap}>
            <p className={styles.date}>{post.author.especialidad}</p>
            <p className={styles.author}>{post.author.name}</p>
            <div className={styles.authorImage}>
              <img
                src={post.authorImage}
                alt={enhanceAltDescription(
                  `${post.postTitle} | ${post.author.name}`
                )}
              />
            </div>
          </div>
        </div>
        <section
          className={styles.postDescription}
          aria-labelledby={post.title}
        >
          <p>{post.description}</p>
        </section>
      </div>
    </Link>
  );
};
