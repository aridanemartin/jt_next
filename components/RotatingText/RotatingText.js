import { useEffect, useState } from 'react';
import styles from './RotatingText.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function RotatingText() {

    const especialidades = ['Diabetes y Síndrome Metabólico', 'Patología Tiroidea y Ecografía Tiroidea', 'Educación Nutricional', 'Diabetes Gestacional', 'Síndrome de Ovario Poliquístico', 'Salud Hormonal Femenina', 'Sobrecrecimiento Bacteriano', 'Obesidad', 'Alteraciones del colesterol', 'Videoconsulta Endocrinológica', 'Fertilidad y Reproducción', 'Trastornos Hipófosis'];

    const [counter, setCounter] = useState(0);
    
    
    useEffect(() => {
    const interval = setInterval(() => {
        if(counter===(especialidades.length-1)) {
        setCounter(0);
        }else{
        setCounter((counter) => counter + 1);
        }
    }, 3000);

    return () => {
        clearInterval(interval);
    };
    
    }, [counter]);

    return (
    <>
        
        <div className={styles.rotatingText}>
            <div className={styles.textWrap}>
                <p className={styles.especialidadesTitle}>Si necesitas ayuda en alguna de las siguientes especialidades estás en el lugar adecuado.
                </p>
                {/* <div className={styles.especialidadesListWrapper}>
                    <h2 className={styles.especialidadesList}>
                        {especialidades[counter]}
                    </h2>
                </div> */}
                <div className={styles.especialidadesListWrapper}>
                    <div className={styles.especialidadesList}>
                        <h2 className={styles.item0}>Diabetes y Síndrome<br/>Metabólico</h2>
                        <h2 className={styles.item1}>Patología Tiroidea y<br/> Ecografía Tiroidea</h2>
                        <h2 className={styles.item2}>Educación<br/> Nutricional</h2>
                        <h2 className={styles.item3}>
                        Diabetes<br/> Gestacional</h2>
                        <h2 className={styles.item4}>Síndrome de Ovario<br/> Poliquístico
                        </h2>
                        <h2 className={styles.item5}>
                        Salud Hormonal<br/> Femenina
                        </h2>
                        <h2 className={styles.item6}>
                        Sobrecrecimiento<br/> Bacteriano
                        </h2>
                        <h2 className={styles.item7}>
                        Obesidad
                        </h2>
                        <h2 className={styles.item8}>
                        Alteraciones<br/> del colesterol
                        </h2>
                        <h2 className={styles.item9}>
                        Videoconsulta<br/> Endocrinológica
                        </h2>
                        <h2 className={styles.item10}>
                        Fertilidad y<br/> Reproducción
                        </h2>
                        <h2 className={styles.item11}>
                        Trastornos<br/> Hipófisis
                        </h2>

                    </div>
                </div>
            </div>
            
                <Link href="/equipo">
                    <a className={styles.buttonWrap}>Concertar Cita</a>
                </Link>
            
        </div>
        
    </>
)
}
