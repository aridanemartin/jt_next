import styles from "./LinkButton.module.css";
import Link from "next/link";

export default function LinkButton(props) {
  return (
    <div className={styles.linkButtonWrapper}>
      <Link
        href={props.link}
        className={
          props.fullWidth
            ? styles.button + " " + styles.fullWidth
            : styles.button
        }
      >
        {props.text}
      </Link>
    </div>
  );
}
