import styles from './LinkButton.module.css';
import Link from 'next/link';

export default function LinkButton(props) {
  console.log(props.fullWidth)
  return (
  <div className={styles.linkButtonWrapper}>
    <Link href={props.link}>
        <a className={props.fullWidth ? styles.button  + ' ' + styles.fullWidth : styles.button }>
            {props.text}
        </a>
    </Link>
  </div>
  );
}

