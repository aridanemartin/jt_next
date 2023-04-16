import styles from "./Layout.module.css";

export default function Layout({ children, small }) {
  return (
    <div className={small ? styles.smallLayout : styles.layoutContainer}>
      <main>{children}</main>
    </div>
  );
}
