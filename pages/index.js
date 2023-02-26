import styles from "../styles/Home.module.css";

import indexCover from "../public/images/portada4.jpg";
import Separador from "@components/Separador/Separador";
import IntroBio from "@components/IntroBio/IntroBio";
import HeroTemplate from "@components/HeroTemplate/HeroTemplate";
import RotatingText from "@components/RotatingText/RotatingText";
import Layout from "@components/Layout/Layout";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Meta from "@components/Meta/Meta";
import { PostPreview } from "@components/PostPreview/PostPreview";
import AdBanner from "@components/AdBanner/AdBanner";

export default function Home({ posts, adbanner }) {
  const [mappedPosts, setMappedPosts] = useState([]);
  console.log(adbanner);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "6yfev950",
        dataset: "production",
      });

      setMappedPosts(
        posts
          .slice(posts.length - 3, posts.length)
          .reverse()
          .map((post) => {
            return {
              ...post,
              mainImage: imgBuilder.image(post.mainImage),
              authorImage: imgBuilder.image(post.author.image),
              // .width(500).height(250)
            };
          })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <>
      <Meta
        title="Dr. Julián Tamayo | Endocrinologia y Nutrición"
        desc="Endocrino con más de 15 años de experiencia como profesional en el ejercicio de la medicina. Especialista en el cuidado de enfermedades crónicas."
        canonical="https://www.juliantamayo.com"
        image="https://www.juliantamayo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportada4.a9e48235.jpg&w=1920&q=75"
      />
      <HeroTemplate img={indexCover} />

      <Layout>
        <IntroBio />
      </Layout>
      {adbanner.active && (
        <AdBanner
          title={adbanner.title}
          description={adbanner.description}
          link={adbanner.link}
          linkText={adbanner.linkText}
          image={adbanner.image}
        />
      )}
      <RotatingText />
      <Layout>
        <Separador
          title="Últimos Posts"
          text="Accede a los últimos artículos de mi blog, donde podrás informarte acerca de los últimos estudios y avances en el campo de la endocrinología y nutrición a través de diferentes artículos escritos por mi equipo así como diferentes colaboradores."
        />
        <div className={styles.latestPosts}>
          {mappedPosts.map((post) => {
            return (
              <PostPreview
                key={post._id}
                post={post}
                link={`blog/${post.slug.current}`}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  //hace la query en relacion a la url pedida por el cliente
  const query = encodeURIComponent(`*[ _type == "post"] | order(_createdAt asc){
    _id,
    title,
    mainImage,
    description,
    slug,
    author->,
    categories[]->
  }`);
  const url = `${process.env.SANITY_URL}query=${query}`;
  const data = await fetch(url).then((res) => res.json());
  const posts = data.result || [];

  const query2 = encodeURIComponent(
    `*[ _type == "pagePersonalization"]{ name, adbanner{..., "image": image.asset->url} }
    `
  );
  const url2 = `${process.env.SANITY_URL}query=${query2}`;
  const data2 = await fetch(url2).then((res) => res.json());
  const { adbanner } = data2.result[0] || [];

  return { props: { posts, adbanner } };
};
