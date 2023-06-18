import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { enhanceAltDescription } from "helpers/enhanceAltDescription";

export default function Header({ title, image }) {
  const altDescription = enhanceAltDescription(
    "Dr. Julián Tamayo | Endocrino" + title
  );

  return (
    <div className={styles.postImageHero}>
      <h1 className={styles.title}>{title}</h1>
      <Image
        src={image}
        className={styles.imageHero}
        alt={altDescription}
        quality={30}
        priority
      />
    </div>
  );
}
