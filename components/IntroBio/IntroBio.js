import styles from "./IntroBio.module.css";

import fotoDesktop from "../../public/images/portadaIndex.webp";
import fotoMobile from "../../public/images/portadaIndex2.jpg";
import Image from "next/image";
import LinkButton from "@components/LinkButton/LinkButton";

import logo1 from "../../public/images/logos/easdLogo.png";
import logo2 from "../../public/images/logos/getneLogo.png";
import logo3 from "../../public/images/logos/hospitalUniversitarioVirgenLogo.png";
import logo4 from "../../public/images/logos/puertaDelMarLogo.png";
import logo5 from "../../public/images/logos/RemingtonLogo.png";
import logo6 from "../../public/images/logos/sedLogo.png";
import logo7 from "../../public/images/logos/seenLogo.png";
import logo8 from "../../public/images/logos/universidadAlcalaLogo.jpg";
import logo9 from "../../public/images/logos/universidadAntioquia.jpg";
import logo10 from "../../public/images/logos/universidadDeCordoba.png";

import { useWindowSize } from "hooks/useWindowDimensions";

export default function IntroBio() {
  const size = useWindowSize();

  return (
    <div className={styles.Bio} id="bio">
      <div className={styles.Bio__image}>
        {size.width > 1100 ? (
          <Image
            src={fotoDesktop}
            alt="Julian Tamayo || Endocrino en Las Palmas"
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            src={fotoMobile}
            alt="Julian Tamayo || Endocrino en Las Palmas"
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <h2 className={styles.Bio__title}>
        <strong>Doctor Julián Tamayo</strong> <br /> Endocrinología y Nutrición
      </h2>
      <p className={styles.Bio__text}>
        Endocrino con más de 15 años de experiencia como profesional en el
        ejercicio de la medicina. Creo en un enfoque integrado de las emociones
        y las enfermedades crónicas, por lo que hago parte de un equipo de
        trabajo en pro de la recuperación de la salud y los buenos hábitos de
        mis pacientes.
        <br />
        <br /> Me apasiona la busqueda individual de los objetivos de la mano
        del paciente, de su familia y de su entorno. Estar al tanto de todos los
        avances recientes es siempre una prioridad para prestar la mejor
        atención y por eso no solo hago parte de la academia permanente
        (dictando cursos y conferencias) sino también de la formación continúa
        para dar el mejor enfoque integrado. Experto en diabetes y riesgo
        cardiovascular, así como todas las enfermedades que atañen al
        metabolismo y el eje hormonal.
      </p>
      <div className={styles.Bio__button}>
        <LinkButton text="Conóceme" link="/equipo/dr-julian-tamayo#conoceme" />
      </div>
      <div className={styles.Bio__logos}>
        <div className={styles.Bio__logo}>
          <Image
            src={logo8}
            alt={logo8}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.Bio__logo}>
          <Image
            src={logo9}
            alt={logo9}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.Bio__logo}>
          <Image
            src={logo10}
            alt={logo10}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.Bio__logo}>
          <Image
            src={logo3}
            alt={logo3}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.Bio__logo}>
          <Image
            src={logo4}
            alt={logo4}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.Bio__logo}>
          <Image
            src={logo1}
            alt={logo1}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.Bio__logo}>
          <Image
            src={logo2}
            alt={logo2}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.Bio__logo}>
          <Image
            src={logo5}
            alt={logo5}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.Bio__logo}>
          <Image
            src={logo6}
            alt={logo6}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.Bio__logo}>
          <Image
            src={logo7}
            alt={logo7}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
