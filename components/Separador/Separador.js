import styles from '@styles/Separador.module.css'        

export default function Separador(props) {
  return (
  
  <div className={styles.separadorWrap}>
    <h2 className={styles.separadorTitle}>{props.title}</h2>
    <p className={styles.separadorText}>Accede a los últimos artículos de mi blog, donde podrás informarte acerca de los últimos estudios y avances en el campo de la endocrinología y nutrición.</p>
  </div>
  );
}
