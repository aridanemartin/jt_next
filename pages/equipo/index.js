import styles from "@styles/Equipo.module.css";
import Image from "next/image";
import Link from "next/link";
import sanityClient from "../../client";
import { useNextSanityImage } from "next-sanity-image";
import team from "../../public/images/team2.webp";
import Layout from "@components/Layout/Layout";
import Separador from "@components/Separador/Separador";
import {useState, useEffect} from "react";

import imageUrlBuilder from "@sanity/image-url";
import Header from "@components/Header/Header";
import Meta from "@components/Meta/Meta";

const Equipo = ({ author }) => {
  
  
  // function setImageProps(index) {
  //   const mainImageProps = useNextSanityImage(
  //     sanityClient,
  //     author[index].image
  //   );
  //   return mainImageProps;
  // }

  const [mappedAuthors, setMappedAuthors] = useState([]);


    useEffect(() =>{
        if(author.length) {
            const imgBuilder = imageUrlBuilder({
                projectId: '6yfev950',
                dataset: 'production', 
            });

            setMappedAuthors(
                author.map(author => {
                    return {
                        ...author,
                        mainImage: imgBuilder.image(author.image),
                    }
                })
            )
        }else{
            setMappedAuthors([]);
        } 
    },[])

    const mappedDoctors = mappedAuthors.filter((author) => author.isADoctor === true );

    console.log(mappedDoctors);

    

  return (
    <>
     <Meta 
            title="Equipo | Dr. Julián Tamayo"
            desc="Conoce en profundidad al equipo del Doctor Julián Tamayo"
            canonical="https://www.juliantamayo.com/equipo"
            image="https://www.juliantamayo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportada4.a9e48235.jpg&w=1920&q=75"
      />
      <Header
      title="Equipo Médico"
      image={team}
      />
      <Separador 
        title="Conoce a nuestro equipo"
        text="Haz click en cualquiera de nuestros especialistas para conocer más acerca de ellos."
      />
      <Layout>
        <section className={styles.cardWrapper}>
          {mappedDoctors.map((author) => {

            console.log(author.mainImage)
            return (
              <div className={styles.singleCard}  key={author.slug.current}>
                {author.isADoctor && (
                  <Link
                    href={`/equipo/${author.slug.current}`}
                  >
                    <a >
                      <div className={styles.doctorImageWrapper}>
                        <img
                          src={author.mainImage}
                          // layout="fill"
                          // objectFit="cover"
                          // height={null}
                          // width={null}
                          alt={`${author.name}`}
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
              </div>
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
