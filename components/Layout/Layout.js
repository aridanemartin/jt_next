import Nav from '@components/Nav/Nav';
import styles from './Layout.module.css';


export default function Layout({ children }) {
    return (
    <div className={styles.layoutContainer}>
        <Nav />
        <main>{children}</main>
    </div>
    )
}