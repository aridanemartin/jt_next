import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header(props) {
  const { title, image } = props;

  return (
    <div className={styles.postImageHero}>
      <h1 className={styles.title}>{title}</h1>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        className={styles.imageHero}
      />
    </div>
  );
}
