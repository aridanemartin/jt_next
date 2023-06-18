import styles from "./AdBanner.module.scss";
import Link from "next/link";
import Image from "next/image";
import firma2 from "../../public/images/firmaBlancaCorta.png";
import mainImage from "../../public/images/leyendo.webp";

export default function AdBanner({
  title,
  description,
  link,
  linkText,
  image,
}) {
  return (
    <>
      {image ? (
        <div className={styles.AdBanner}>
          <Image
            className={styles.AdBanner__image}
            src={image}
            alt={`Dr. Julián Tamayo | ${title}`}
            fill
          />
          <div className={styles.AdBanner__overlay}>
            <div className={styles.AdBanner__overlayContent}>
              <div className={styles.AdBanner__overlayContentText}>
                <h2 className={styles.AdBanner__title}>{title}</h2>
                <p className={styles.AdBanner__text}>{description}</p>
              </div>
              <button className={styles.AdBanner__overlayContentButton}>
                <Link href={link}>{linkText}</Link>
              </button>
              <div className={styles.AdBanner__overlayContentFirma}>
                <Image
                  className={styles.AdBanner__firma}
                  src={firma2}
                  alt="Doctor Julián Tamayo | Signature"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
