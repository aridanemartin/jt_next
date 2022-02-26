import { useEffect, useState } from 'react';
import styles from './RotatingText.module.css';
import { motion, AnimatePresence } from 'framer-motion';

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
    }, 2000);

    return () => {
        clearInterval(interval);
    };
    
    }, [counter]);

    return (
    <div className={styles.rotatingText}>
        <div className={styles.textWrap}>
            <p className={styles.especialidadesTitle}>Si necesitas ayuda en alguna de las siguientes especialidades estás en el sitio adecuado.
            </p>
            <AnimatePresence>
                <motion.h2 
                className={styles.especialidadesList}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                    {especialidades[counter]}
                </motion.h2>
            </AnimatePresence>
        </div>
    </div>
)
}
