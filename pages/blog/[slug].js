import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import sanityClient from "../../client";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import styles from "@styles/SinglePost.module.css";
import Meta from "@components/Meta/Meta";

export const SinglePost = (data) => {
  const mainImageProps = useNextSanityImage(sanityClient, data.mainImage);

  const authorImageProps = useNextSanityImage(sanityClient, data.author.image);

  const image1Props = useNextSanityImage(sanityClient, data.image1);

  const image2Props = useNextSanityImage(sanityClient, data.image2);

  return (
    <>
      <Meta
        title={`${data.title} | ${data.author.name}`}
        desc={`${data.author.description}`}
        canonical={`https://www.juliantamayo.com/blog/${data.author.slug.current}`}
        image={mainImageProps.src}
      />
      <div>
        <div className={styles.postImageHero}>
          <h2 className={styles.title}>{data.title}</h2>
          <Image
            {...mainImageProps}
            layout="fill"
            objectFit="cover"
            className={styles.imageHero}
            alt="Article Banner"
          />
        </div>
      </div>
      <article className={styles.contentWrapper}>
        <Link href={`/equipo/${data.author.slug.current}#conoceme`}>
          <div className={styles.authorData}>
            <div className={styles.dataWrap}>
              <p className={styles.date}>{data.author.especialidad}</p>
              <p className={styles.author}>{data.author.name}</p>
              <div className={styles.authorImage}>
                <Image
                  {...authorImageProps}
                  layout="fill"
                  objectFit="cover"
                  alt={`${data.author.name} Foto de Perfil`}
                />
              </div>
            </div>
          </div>
        </Link>

        {data.body1 && (
          <section className={styles.blockContent}>
            <BlockContent blocks={data.body1} />
          </section>
        )}

        {data.image1 && (
          <div className={styles.postImage}>
            <Image
              {...image1Props}
              layout="fill"
              objectFit="cover"
              alt={`${data.title} - Foto de artículo *2`}
            />
          </div>
        )}

        {data.body2 && (
          <section className={styles.blockContent}>
            <BlockContent blocks={data.body2} />
          </section>
        )}

        {data.image2 && (
          <div className={styles.postImage}>
            <Image
              {...image2Props}
              layout="fill"
              objectFit="cover"
              alt={`${data.title} - Foto de artículo *2`}
            />
          </div>
        )}

        {data.body3 ? (
          <section className={styles.blockContent}>
            <BlockContent blocks={data.body3} />
          </section>
        ) : (
          ""
        )}

        <div className={styles.linksWrapper}>
          <Link
            href={`/equipo/${data.author.slug.current}#cita`}
            className={styles.concertarCita}
          >
            Concertar cita con {data.author.name}
          </Link>
          <Link href="/blog" className={styles.backToBlog}>
            Volver al blog
          </Link>
        </div>
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
        mainImage,
        description,
        body1,
        articleImage1,
        body2,
        articleImage2,
        body3,
        author->
    }`);
  const url = `https://6yfev950.api.sanity.io/v2021-08-31/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0] || [];

  return {
    props: {
      data: post,
      body3: post.body3,
      title: post.title,
      mainImage: post.mainImage,
      description: post.description,
      body1: post.body1,
      image1: post.articleImage1,
      body2: post.body2,
      image2: post.articleImage2,
      author: post.author,
    },
  };
};

export default SinglePost;
