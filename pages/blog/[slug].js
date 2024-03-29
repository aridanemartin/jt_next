import Link from "next/link";
import sanityClient from "../../client";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import styles from "@styles/SinglePost.module.scss";
import Meta from "@components/Meta/Meta";
import SanityBlock from "@components/SanityBlock/SanityBlock";
import Layout from "@components/Layout/Layout";

import timeToReadIcon from "../../public/images/icons/clock.png";
import { enhanceAltDescription } from "helpers/enhanceAltDescription";

export const SinglePost = (data) => {
  const mainImageProps = useNextSanityImage(sanityClient, data.mainImage);
  const authorImageProps = useNextSanityImage(sanityClient, data.author.image);
  return (
    <>
      <Meta
        title={`${data.title} | ${data.author.name}`}
        desc={`${data.author.description}`}
        canonical={`https://www.juliantamayo.com/blog/${data.author.slug.current}`}
        image={mainImageProps?.src}
      />
      <div>
        <div className={styles.postImageHero}>
          <Image
            src={mainImageProps?.src}
            className={styles.imageHero}
            alt={enhanceAltDescription(
              data.title +
                " | " +
                data.author.name +
                " - " +
                data.author.especialidad
            )}
            loading="eager"
            priority
            fill
            style={{
              objectFit: "cover",
            }}
            quality={60}
          />
        </div>
        <section className={styles.titleSectionWrapper}>
          <h2 className={styles.title}>{data.title}</h2>
          <div className={styles.subtitle}>
            <Link href={`/equipo/${data.author.slug.current}`}>
              <div className={styles.author}>
                <div className={styles.author__text}>
                  <p className={styles.name}>{data.author.name}</p>
                  <p className={styles.specialty}>{data.author.especialidad}</p>
                </div>
                <div className={styles.author__image}>
                  <Image
                    src={authorImageProps?.src}
                    alt={`${data.author.name} Foto de Perfil`}
                    fill
                    quality={25}
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </Link>
            <div className={styles.timeToRead}>
              <div className={styles.timeToRead__icon}>
                <Image
                  src={timeToReadIcon}
                  alt="Time to read icon"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  quality={30}
                />
              </div>
              <p className={styles.time}>
                <em>{data.timeToRead} min de lectura</em>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Layout></Layout>
      <article className={styles.contentWrapper}>
        <Layout small>
          {data.body.map((block) => (
            <>
              <SanityBlock key={block._key} sanityContent={block} />
            </>
          ))}
        </Layout>
      </article>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  // slug que el usuario escribe
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  //hace la query en relacion a la url pedida por el cliente
  const query =
    encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"]{
        title,
        body,
        mainImage,
        description,
        timeToRead,
        author->
    }`);
  const url = `https://6yfev950.api.sanity.io/v2021-08-31/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0] || [];

  return {
    props: {
      data: post,
      slug: pageSlug,
      timeToRead: post.timeToRead,
      body: post.body,
      title: post.title,
      mainImage: post.mainImage,
      description: post.description,
      author: post.author,
    },
  };
};

export default SinglePost;
