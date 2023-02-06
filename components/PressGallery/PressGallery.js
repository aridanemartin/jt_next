import Image from "next/image";
import Link from "next/link";
import styles from "./PressGallery.module.scss";
import imageUrlBuilder from "@sanity/image-url";
import Separador from "@components/Separador/Separador";

export const PressGallery = ({ data, sanityClient, author }) => {
  const builder = imageUrlBuilder(sanityClient);
  function imageUrlFor(source) {
    return builder.image(source);
  }

  if (data.every((item) => item === null)) return null;

  return (
    <>
      <Separador
        title={`Prensa`}
        text={`A continuación podrás ver algunas las apariciones en prensa de ${author}`}
      />
      <div className={styles.pressGallery}>
        {data.map((publication, index) => {
          return publication !== null ? (
            <article className={styles.articleCard} key={publication?.title}>
              <Link href={publication?.link} key={publication?.title}>
                <h1>{publication?.title}</h1>
                <p>{publication?.description}</p>
                <div className={styles.previewImage}>
                  {publication.image && (
                    <Image
                      src={imageUrlFor(publication?.image).url()}
                      alt={publication?.title}
                      fill
                    />
                  )}
                </div>
              </Link>
            </article>
          ) : null;
        })}
      </div>
    </>
  );
};
