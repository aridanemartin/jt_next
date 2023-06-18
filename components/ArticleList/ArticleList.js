import styles from "@styles/ArticleList.module.css";
import Link from "next/link";
import Image from "next/image";
import { enhanceAltDescription } from "helpers/enhanceAltDescription";

export default function ArticleList({ description, image, slug }) {
  const altDescription = enhanceAltDescription(description);

  return (
    <div className={styles.post}>
      <div className={styles.imgWrapper}>
        <Image
          src={image}
          fill
          style={{ objectFit: "cover" }}
          alt={altDescription}
        />
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
