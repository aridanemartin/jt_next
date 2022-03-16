import styles from './Separador.module.css'        

export default function Separador(props) {
  return (
  
  <div className={styles.separadorWrap}>
    <h2 className={styles.separadorTitle}>{props.title}</h2>
    <p className={styles.separadorText}>{props.text}</p>
  </div>
  );
}
