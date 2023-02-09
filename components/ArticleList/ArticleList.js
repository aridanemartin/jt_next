import styles from "@styles/ArticleList.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ArticleList({ props }) {
  return (
    <div className={styles.post}>
      <div className={styles.imgWrapper}>
        {/* <img src={props.image} alt="" /> */}
        <Image src={image} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.description}>
        <h3>{props.description}</h3>
        <span></span>
        <p></p>
      </div>
      <div className={styles.linkWrapper}>
        <Link className={styles.link} href={`/blog/${props.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
