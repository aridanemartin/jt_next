import styles from "./InfiniteCarrousel.module.css";
import Image from "next/image";
import leftCuote from "../../public/images/left-quote.png";
import SanityBlockContent from "@sanity/block-content-to-react";

export default function InfiniteCarrousel(props) {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {/* los textos se duplican para crear el efecto  */}
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.slideText}>
            <SanityBlockContent
              className={styles.slideText}
              blocks={props.text1}
            />
          </div>

          <div className={styles.grupoWrap}>
            <p className={styles.author}>{props.autor1}</p>
            <p className={styles.grupo}>Comentario Extraido de</p>
            <p className={styles.description}>{props.extraido1}</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.slideText}>
            <SanityBlockContent
              className={styles.slideText}
              blocks={props.text2}
            />
          </div>
          <div className={styles.grupoWrap}>
            <p className={styles.author}>{props.autor2}</p>
            <p className={styles.grupo}>Comentario Extraido de</p>
            <p className={styles.description}>Doctoralia</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.slideText}>
            <SanityBlockContent
              className={styles.slideText}
              blocks={props.text3}
            />
          </div>
          <div className={styles.grupoWrap}>
            <p className={styles.author}>{props.autor3}</p>
            <p className={styles.grupo}>Comentario Extraido de</p>
            <p className={styles.description}>Doctoralia</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.slideText}>
            <SanityBlockContent
              className={styles.slideText}
              blocks={props.text4}
            />
          </div>
          <div className={styles.grupoWrap}>
            <p className={styles.author}>{props.autor4}</p>
            <p className={styles.grupo}>Comentario Extraido de</p>
            <p className={styles.description}>Doctoralia</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.slideText}>
            <SanityBlockContent
              className={styles.slideText}
              blocks={props.text1}
            />
          </div>
          <div className={styles.grupoWrap}>
            <p className={styles.author}>{props.autor1}</p>
            <p className={styles.grupo}>Comentario Extraido de</p>
            <p className={styles.description}>Doctoralia</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.slideText}>
            <SanityBlockContent
              className={styles.slideText}
              blocks={props.text2}
            />
          </div>
          <div className={styles.grupoWrap}>
            <p className={styles.author}>{props.autor2}</p>
            <p className={styles.grupo}>Comentario Extraido de</p>
            <p className={styles.description}>Doctoralia</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.slideText}>
            <SanityBlockContent
              className={styles.slideText}
              blocks={props.text3}
            />
          </div>
          <div className={styles.grupoWrap}>
            <p className={styles.author}>{props.autor3}</p>
            <p className={styles.grupo}>Comentario Extraido de</p>
            <p className={styles.description}>Doctoralia</p>
          </div>
        </section>
        <section className={styles.cslide}>
          <div className={styles.imageWrap}>
            <Image src={leftCuote} layout="fill" objectFit="cover" />
          </div>
          <div className={styles.slideText}>
            <SanityBlockContent
              className={styles.slideText}
              blocks={props.text4}
            />
          </div>
          <div className={styles.grupoWrap}>
            <p className={styles.author}>{props.autor4}</p>
            <p className={styles.grupo}>Comentario Extraido de</p>
            <p className={styles.description}>Doctoralia</p>
          </div>
        </section>
      </div>
    </div>
  );
}
