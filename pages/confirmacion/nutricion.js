import Header from "@components/Header/Header";
import Separador from "@components/Separador/Separador";
import Layout from "@components/Layout/Layout";
import styles from "@styles/Confirmacion.module.css";
import banner from "../../public/images/hormonalFemenina.jpg";
import Link from "next/link";
import { formatLink } from "../../helpers"

export default function Nutricion({ links }) {

  console.log(links)
  return (
    <>
      <Header title="Su cita ha sido confirmada" image={banner} />
  
    <div className={styles.confirmacionWrapper}>
      
      <Separador title="Gracias por confiar en nosotros para su primera visita." />

      <Layout>
        <div className={styles.confirmacionContentWrapper}>
          <section className={styles.proteccionDatos}>
            <h2>LEY DE PROTECCIÓN DE DATOS</h2>
            <p>
              Información básica sobre protección de datos Conforme a lo
              establecido en el Reglamento (UE) 2016/679 (RGPD), así como lo
              dispuesto en la normativa nacional sobre esta materia, le
              informamos de lo siguiente:
              <br />
              <br />
              Los datos personales facilitados serán responsabilidad de la
              entidad JULIAN ANDRES TAMAYO SERRATO, además, sus datos personales
              serán utilizados para las siguientes finalidades:
              <br />
              <br />
            </p>
            <ul>
              <li>
                Realización de acciones y comunicaciones comerciales y de
                marketing para informar y fidelizar clientes.
              </li>
              <li>
                Gestionar y dar respuesta a solicitudes de información y
                presupuesto, así como mantener contacto con fines profesionales
                o empresariales con las personas físicas, incluidas las que
                representan a personas jurídicas, con las que la entidad
                mantiene relación.
              </li>
            </ul>
            <br />
            <p>
              Todo ello bajo la legitimación otorgada por Consentimiento y firma
              de la persona, Interés legítimo. No se cederán datos a terceros
              salvo obligaciones legales. No obstante es posible que
              determinados encargados del tratamiento externos puedan acceder a
              sus datos para la necesaria prestación del servicio. En cuanto a
              sus derechos, podrá reclamar ante la Autoridad de Control Nacional
              y en todo momento acceder, rectificar y suprimir sus datos,
              limitarlos o incluso oponerse a su tratamiento, solicitar su
              portabilidad a otros responsables, enviándonos una comunicación
              dirigida a Calle MONTEVIDEO, 14, 3E, CP 35007 LAS PALMAS DE GRAN
              CANARIA, Las Palmas, o bien enviándonos un email a endocrino
              (Ojuliantamayo.com. Por último, puede consultar la información
              adicional y detallada sobre nuestra política de Protección de
              datos, mediante comunicación dirigida a nuestra dirección postal.
              <br />
              <br />
            </p>
            <h2>OBTENCIÓN DE CONSENTIMIENTOS</h2>
            <p>
              Le informamos que aceptando este documento en las siguientes
              casillas estará dándonos su consentimiento expreso para llevar a
              cabo las finalidades descritas a continuación. Este consentimiento
              podrá ser retirado en cualquier momento posterior comunicándolo
              por cualquier medio fehaciente:
              <br />
              <br />
              Realización de acciones y comunicaciones comerciales y de marketing para informar y fidelizar a los clientes. SÍ
            </p>
          </section>
          <section className={styles.formularios}>
            <h2>INFORMACIÓN IMPORTANTE ANTES DE SU CITA</h2>
            <p>
              Para un uso más eficiente de su tiempo en su primera visita por
              favor haga click en el motivo de su cita y rellene formulario que le aparecerá a continuación. Nos gustaría conocer la
              causa de su primera consulta y hacerle unas preguntas previas para atenderle de la manera más personalizada posible.
            </p>
            {links.map(link => (
              <div key={link._id}>
              {link._id === "481b9885-0693-4bd1-b7b2-54624d455739" &&
              
                <ul className={styles.linkList}>
                {link.form1Title && link.form1Link &&
                  <li>
                  <Link href={formatLink(link.form1Link)}>
                    <a className={styles.formLink}>{link.form1Title}</a>
                  </Link>
                </li>
                }
                {link.form2Title && link.form2Link &&
                  <li>
                  <Link href={formatLink(link.form2Link)}>
                    <a className={styles.formLink}>{link.form2Title}</a>
                  </Link>
                </li>
                }
                {link.form3Title && link.form3Link &&
                  <li>
                  <Link href={formatLink(link.form3Link)}>
                    <a className={styles.formLink}>{link.form3Title}</a>
                  </Link>
                </li>
                }
                {link.form4Title && link.form4Link &&
                  <li>
                  <Link href={formatLink(link.form4Link)}>
                    <a className={styles.formLink}>{link.form4Title}</a>
                  </Link>
                </li>
                }
                {link.form5Title && link.form5Link &&
                  <li>
                  <Link href={formatLink(link.form5Link)}>
                    <a className={styles.formLink}>{link.form5Title}</a>
                  </Link>
                </li>
                }
                {link.form6Title && link.form6Link &&
                  <li>
                  <Link href={formatLink(link.form6Link)}>
                    <a className={styles.formLink}>{link.form6Title}</a>
                  </Link>
                </li>
                }
                {link.form7Title && link.form7Link &&
                  <li>
                  <Link href={formatLink(link.form7Link)}>
                    <a className={styles.formLink}>{link.form7Title}</a>
                  </Link>
                </li>
                }
                </ul>
              } 
              </div>
            
            
            
            ))}
            
          </section>
        </div>
      </Layout>
    </div>
    </>
  );
}

export const getServerSideProps = async () => {
  //hace la query en relacion a la url pedida por el cliente
  const query = encodeURIComponent(`*[ _type == "confirmation"]{
    _id,
    name,
    form1Title,
    form1Link,
    form2Title,
    form2Link,
    form3Title,
    form3Link,
    form4Title,
    form4Link,
    form5Title,
    form5Link,
    form6Title,
    form6Link,
    form7Title,
    form7Link
  }`);
  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());
  const links = data.result || [];

  return { props: { links } };
};
