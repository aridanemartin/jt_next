import sanityClient from "../../client";
import { useNextSanityImage } from "next-sanity-image";

import Link from "next/link";
import Image from "next/image";
import styles from "@styles/SingleDoctor.module.css";
import SanityBlockContent from "@sanity/block-content-to-react";
import Layout from "@components/Layout/Layout";
import InfiniteCarrousel from "@components/InfiniteCarrousel/InfiniteCarrousel";
import Separador from "@components/Separador/Separador";
import webIcon from "../../public/images/webIcon.png";
import doctoraliaLogo from "../../public/images/logos/doctoralia.svg";
import bata from "../../public/images/bonoOnline.jpg";
import Header from "@components/Header/Header";
import { formatLink } from "../../helpers";
import Meta from "@components/Meta/Meta";
import { VideoGallery } from "@components/VideoGallery/VideoGallery";
import { PressGallery } from "@components/PressGallery/PressGallery";

export default function SingleDoctor(props) {
  const mainImageProps = useNextSanityImage(sanityClient, props.author.image);
  const servicio1Image = useNextSanityImage(
    sanityClient,
    props.author.servicio1Image
  );
  const servicio2Image = useNextSanityImage(
    sanityClient,
    props.author.servicio2Image
  );
  const servicio3Image = useNextSanityImage(
    sanityClient,
    props.author.servicio3Image
  );
  const servicio4Image = useNextSanityImage(
    sanityClient,
    props.author.servicio4Image
  );
  const servicio5Image = useNextSanityImage(
    sanityClient,
    props.author.servicio5Image
  );
  const servicio6Image = useNextSanityImage(
    sanityClient,
    props.author.servicio6Image
  );

  return (
    <div>
      <Meta
        title={`${props.author.name} | ${props.author.especialidad}`}
        desc={`${props.author.name} es miembro del equipo de doctores de Julián Tamayo.`}
        canonical={`https://www.juliantamayo.com/equipo/${props.author.slug.current}`}
        image={mainImageProps?.src}
      />
      <Header image={bata} title={`${props.author.name}`} />
      <Layout>
        <div className={styles.doctorProfileWrapper}>
          <div className={styles.doctorImageWrapper}>
            <Image
              src={mainImageProps?.src}
              alt={`${props.author.name} - Profile Picture`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <section className={styles.doctorBioWrap}>
            <h1 id="conoceme">{props.author.name}</h1>
            <h2>{props.author.especialidad}</h2>
            <SanityBlockContent blocks={props.author.bio} />
            <div className={styles.socialWrapper}>
              {props.author.web && (
                <Link
                  href={formatLink(props.author.web)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socialIcon}>
                    <Image
                      src={webIcon}
                      alt="Web Icon"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Link>
              )}
              {props.author.doctoralia && (
                <Link
                  href={formatLink(props.author.doctoralia)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socialIcon}>
                    <Image
                      src={doctoraliaLogo}
                      alt="Doctoralia Logo"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Link>
              )}
              {props.author.instagram && (
                <Link
                  href={formatLink(props.author.instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socialIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="100%"
                      height="100%"
                      alt="Instagram Icon"
                    >
                      {" "}
                      <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                    </svg>
                  </div>
                </Link>
              )}
              {props.author.youtube && (
                <Link
                  href={formatLink(props.author.youtube)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socialIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="100%"
                      height="100%"
                    >
                      <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
                    </svg>
                  </div>
                </Link>
              )}
              {props.author.twitter && (
                <Link
                  href={formatLink(props.author.twitter)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socialIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="100%"
                      height="100%"
                    >
                      {" "}
                      <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                    </svg>
                  </div>
                </Link>
              )}
              {props.author.facebook && (
                <Link
                  href={formatLink(props.author.facebook)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socialIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="100%"
                      height="100%"
                    >
                      {" "}
                      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
                    </svg>
                  </div>
                </Link>
              )}

              {props.author.linkedin && (
                <Link
                  href={formatLink(props.author.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socialIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="100%"
                      height="100%"
                    >
                      {" "}
                      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                    </svg>
                  </div>
                </Link>
              )}
              {props.author.tiktok && (
                <Link
                  href={formatLink(props.author.tiktok)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socialIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="100%"
                      height="100%"
                    >
                      {" "}
                      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
                    </svg>
                  </div>
                </Link>
              )}
            </div>
          </section>
        </div>
        <Separador
          title={`Reserva tu cita con ${props.author.name}`}
          text="Solicita cualquiera de los servicios que disponemos fácilmente desde alguno de los siguientes enlaces"
          id="cita"
        />
        <section className={styles.servicesSectionWrap}>
          {props.author.servicio1Link && (
            <Link
              href={formatLink(props.author.servicio1Link)}
              className={styles.servicesCardWrapper}
            >
              <div className={styles.servicesImage}>
                <Image
                  src={servicio1Image?.src}
                  fill
                  alt={props.author.servicio1Title}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.servicesContentWrap}>
                <div className={styles.servicesTitle}>
                  <h2>{props.author.servicio1Title}</h2>
                  {props.author.servicio1Duration && (
                    <p>{props.author.servicio1Duration} min</p>
                  )}
                </div>
                <div className={styles.servicesDescription}>
                  <SanityBlockContent
                    blocks={props.author.servicio1Description}
                  />
                </div>
                <div className={styles.servicesPrice}>
                  <p>
                    {props.author.servicio1Precio}
                    {props.author.servicio1Precio ? "€" : ""}
                  </p>
                </div>
              </div>
            </Link>
          )}
          {props.author.servicio2Link && (
            <Link
              href={formatLink(props.author.servicio2Link)}
              className={styles.servicesCardWrapper}
            >
              <div className={styles.servicesImage}>
                <Image
                  src={servicio2Image?.src}
                  fill
                  alt={props.author.servicio2Title}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.servicesContentWrap}>
                <div className={styles.servicesTitle}>
                  <h2>{props.author.servicio2Title}</h2>
                  {props.author.servicio2Duration && (
                    <p>{props.author.servicio2Duration} min</p>
                  )}
                </div>
                <div className={styles.servicesDescription}>
                  <SanityBlockContent
                    blocks={props.author.servicio2Description}
                  />
                </div>
                <div className={styles.servicesPrice}>
                  <p>
                    {props.author.servicio2Precio}
                    {props.author.servicio2Precio ? "€" : ""}
                  </p>
                </div>
              </div>
            </Link>
          )}
          {props.author.servicio3Link && (
            <Link
              href={formatLink(props.author.servicio3Link)}
              className={styles.servicesCardWrapper}
            >
              <div className={styles.servicesImage}>
                <Image
                  src={servicio3Image?.src}
                  fill
                  alt={props.author.servicio3Title}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.servicesTitle}>
                <h2>{props.author.servicio3Title}</h2>
                {props.author.servicio3Duration && (
                  <p>{props.author.servicio3Duration} min</p>
                )}
              </div>
              <div className={styles.servicesDescription}>
                <SanityBlockContent
                  blocks={props.author.servicio3Description}
                />
              </div>
              <div className={styles.servicesPrice}>
                <p>
                  {props.author.servicio3Precio}
                  {props.author.servicio3Precio ? "€" : ""}
                </p>
              </div>
            </Link>
          )}
          {props.author.servicio4Link && (
            <Link
              href={formatLink(props.author.servicio4Link)}
              className={styles.servicesCardWrapper}
            >
              <div className={styles.servicesImage}>
                <Image
                  src={servicio4Image?.src}
                  fill
                  alt={props.author.servicio4Title}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.servicesTitle}>
                <h2>{props.author.servicio4Title}</h2>
                {props.author.servicio4Duration && (
                  <p>{props.author.servicio4Duration} min</p>
                )}
              </div>
              <div className={styles.servicesDescription}>
                <SanityBlockContent
                  blocks={props.author.servicio4Description}
                />
              </div>
              <div className={styles.servicesPrice}>
                <p>
                  {props.author.servicio4Precio}
                  {props.author.servicio4Precio ? "€" : ""}
                </p>
              </div>
            </Link>
          )}
          {props.author.servicio5Link && (
            <Link
              href={formatLink(props.author.servicio5Link)}
              className={styles.servicesCardWrapper}
            >
              <div className={styles.servicesImage}>
                <Image
                  src={servicio5Image?.src}
                  fill
                  alt={props.author.servicio5Title}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.servicesTitle}>
                <h2>{props.author.servicio5Title}</h2>
                {props.author.servicio5Duration && (
                  <p>{props.author.servicio5Duration} min</p>
                )}
              </div>
              <div className={styles.servicesDescription}>
                <SanityBlockContent
                  blocks={props.author.servicio5Description}
                />
              </div>
              <div className={styles.servicesPrice}>
                <p>
                  {props.author.servicio5Precio}
                  {props.author.servicio5Precio ? "€" : ""}
                </p>
              </div>
            </Link>
          )}
          {props.author.servicio6Link && (
            <Link
              href={formatLink(props.author.servicio6Link)}
              className={styles.servicesCardWrapper}
            >
              <div className={styles.servicesImage}>
                <Image
                  src={servicio6Image?.src}
                  fill
                  alt={props.author.servicio6Title}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.servicesTitle}>
                <h2>{props.author.servicio6Title}</h2>
                {props.author.servicio6Duration && (
                  <p>{props.author.servicio6Duration} min</p>
                )}
              </div>
              <div className={styles.servicesDescription}>
                <SanityBlockContent
                  blocks={props.author.servicio6Description}
                />
              </div>
              <div className={styles.servicesPrice}>
                <p>
                  {props.author.servicio6Precio}
                  {props.author.servicio6Precio ? "€" : ""}
                </p>
              </div>
            </Link>
          )}
        </section>
        {props.author.comentario4autor && (
          <>
            <Separador
              title={`Reseñas de ${props.author.name}`}
              text="Solicita cualquiera de los servicios que disponemos fácilmente desde alguno de los siguientes enlaces"
            />

            <section className={styles.commentSectionWrap}>
              <InfiniteCarrousel
                text1={props.author.comentario1}
                autor1={props.author.comentario1autor}
                extraido1={props.author.comentario1fuente}
                text2={props.author.comentario2}
                autor2={props.author.comentario2autor}
                extraido2={props.author.comentario2fuente}
                text3={props.author.comentario3}
                autor3={props.author.comentario3autor}
                extraido3={props.author.comentario3fuente}
                text4={props.author.comentario4}
                autor4={props.author.comentario4autor}
                extraido4={props.author.comentario4fuente}
              />
            </section>
          </>
        )}
        <VideoGallery
          videoArray={[
            {
              title: `${props.author.video1title}`,
              src: `${props.author.video1url}`,
            },
            {
              title: `${props.author.video2title}`,
              src: `${props.author.video2url}`,
            },
            {
              title: `${props.author.video3title}`,
              src: `${props.author.video3url}`,
            },
            {
              title: `${props.author.video4title}`,
              src: `${props.author.video4url}`,
            },
          ]}
          author={props.author.name}
        />
        <PressGallery
          data={[
            props.author.articulo1,
            props.author.articulo2,
            props.author.articulo3,
            props.author.articulo4,
          ]}
          sanityClient={sanityClient}
          author={props.author.name}
        />
      </Layout>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  //hace la query en relacion a la url pedida por el cliente
  const query =
    encodeURIComponent(`*[ _type == "author" && slug.current == "${pageSlug}"]{
        _id,
        bio,
        slug,
        especialidad,
        image,
        name,
        web,
        instagram,
        facebook,
        youtube,
        twitter,
        doctoralia,
        tiktok,
        linkedin,
        comentario1,
        comentario1fuente,
        comentario1autor,
        comentario2,
        comentario2fuente,
        comentario2autor,
        comentario3,
        comentario3fuente,
        comentario3autor,
        comentario4,
        comentario4fuente,
        comentario4autor,
        servicio1Image,
        servicio1Title,
        servicio1Duration,
        servicio1Description,
        servicio1Link,
        servicio1Precio,
        servicio2Image,
        servicio2Title,
        servicio2Duration,
        servicio2Description,
        servicio2Link,
        servicio2Precio,
        servicio3Image,
        servicio3Title,
        servicio3Duration,
        servicio3Description,
        servicio3Link,
        servicio3Precio,
        servicio4Image,
        servicio4Title,
        servicio4Duration,
        servicio4Description,
        servicio4Link,
        servicio4Precio,
        servicio5Image,
        servicio5Title,
        servicio5Duration,
        servicio5Description,
        servicio5Link,
        servicio5Precio,
        servicio6Image,
        servicio6Title,
        servicio6Duration,
        servicio6Description,
        servicio6Link,
        servicio6Precio,
        video1title,
        video1url,
        video2title,
        video2url,
        video3title,
        video3url,
        video4title,
        video4url,
        articulo1,
        articulo2,
        articulo3,
        articulo4,       
    }`);
  const url = `https://6yfev950.api.sanity.io/v2021-08-31/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const author = result.result[0] || [];

  return { props: { author } };
};
