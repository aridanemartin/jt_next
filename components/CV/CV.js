
import styles from '@styles/CV.module.css';
import Image from 'next/image';
import Foto1 from '../../public/images/portadaIndex2.jpg';

export default function CV (){
    return(
        <div className={styles.CV__container}>
            <div className={styles.CV__foto1}>
                <Image 
                id="about" 
                src={Foto1} 
                alt="foto1"
                layout="fill"
                objectFit="cover"
                />
            </div>
            <div className={styles.CV__text}>
                <h1>Conóceme</h1>
                <h2>
                    Soy Julián Tamayo, <strong>Endocrino experto en Diabetes, Patología tiroidea y Obesidad</strong> con más de 10 años de experiencia en <br/><strong>Las Palmas de Gran Canaria</strong>.
                </h2>
                <p>
                Estudié <strong>Nutrición Humana y Dietética en la Universidad Complutense de Madrid.</strong> Posteriormente, complementé mi formación con el <strong>Experto Universitario en Nutrición Hospitalaria</strong>.<br/><br/>
Tras trabajar en múltiples sectores de la nutrición, descubrí lo importante que es la atención personalizada en consulta, debido al enorme impacto que tienen sobre la salud unos buenos hábitos alimentarios adaptados a la condición de cada persona.<br/><br/>
Para poder ofrecer una mejor atención a mis pacientes realicé la formación en <strong>Actualización en Patologías Digestivas</strong> en el <strong>Centro de Investigación en Nutrición y Salud de Madrid (CINUSA)</strong>, lo cual fue el detonante para continuar profundizando en esta área de la nutrición.<br/><br/> 
Continué mi formación cursando el <strong>Máster de Microbiota en la Universidad CEU Cardenal Herrera</strong>, ya que cada vez existe mayor evidencia acerca de la influencia del sistema digestivo en una gran parte de las patologías crónicas a las que nos enfrentamos a día de hoy.<br/><br/>
Mi equipo y yo nos esforzamos en estar siempre lo más actualizados posible con la finalidad de ofrecer a nuestros pacientes las mejores herramientas para alcanzar sus objetivos de salud.

                </p>
            </div>
        </div>
    )
}






