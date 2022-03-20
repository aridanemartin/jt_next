import styles from './LinkButton.module.css';
import Link from 'next/link';

export default function LinkButton(props) {
  return (
  <div className={styles.linkButtonWrapper}>
    <Link href={props.link}>
        <a className={styles.button}>
            {props.text}
        </a>
    </Link>
  </div>
  );
}

