import styles from "@styles/Equipo.module.css";
import HeroTemplate from "@components/HeroTemplate/HeroTemplate";
import Image from "next/image";
import Link from "next/link";
import sanityClient from "../../client";
import { useNextSanityImage } from "next-sanity-image";
import bata from "../../public/images/team2.jpg";
import Layout from "@components/Layout/Layout";

const Equipo = ({ author }) => {
  function generateImageProps(index) {
    const mainImageProps = useNextSanityImage(
      sanityClient,
      author[index].image
    );
    return mainImageProps;
  }

  return (
    <>
      <div className={styles.postImageHero}>
        <h1 className={styles.title}>Conoce a nuestro equipo</h1>
        <Image
          src={bata}
          layout="fill"
          objectFit="none"
          className={styles.imageHero}
        />
      </div>
      <Layout>
        <section className={styles.cardWrapper}>
          {author.map((author, index) => {
            return (
              <>
                {author.isADoctor && (
                  <Link
                    href={`/equipo/${author.slug.current}`}
                    key={author.slug.current}
                  >
                    <a className={styles.singleCard}>
                      <div className={styles.doctorImageWrapper}>
                        <Image
                          {...generateImageProps(index)}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className={styles.cardText}>
                        <h2 className={styles.authorName}>{author.name}</h2>
                        <p className={styles.authorSpeciality}>
                          {author.especialidad}
                        </p>
                      </div>
                    </a>
                  </Link>
                )}
              </>
            )
          })}
        </section>
      </Layout>
    </>
  );
};

export default Equipo;

export const getServerSideProps = async () => {
  //hace la query en relacion a la url pedida por el cliente
  const query = encodeURIComponent(`*[ _type == "author"]`);
  const url = `${process.env.SANITY_URL}query=${query}`;
  const response = (await fetch(url).then((res) => res.json())) || [];
  const author = response.result;
  return {
    props: {
      author,
    },
  };
};
