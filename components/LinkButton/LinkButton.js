import styles from '@styles/LinkButton.module.css';
import Link from 'next/link';

export default function LinkButton(props) {
  return (
  <div className={styles.linkButtonWrapper}>
    <Link href={props.link}>
        <a className={styles.Bio__button}>
            {props.text}
        </a>
    </Link>
  </div>
  );
}

