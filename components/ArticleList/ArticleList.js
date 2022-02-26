import styles from '@styles/ArticleList.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function ArticleList({ props }) {



    return (
        <div className={styles.post}>
                <div className={styles.imgWrapper}>
                    <img src={props.image} alt="" />
                    {/* <Image
                        src={image}
                        layout="fill"
                        objectFit="cover"
                    /> */}
                </div>
                <div className={styles.description}>
                    <h3>{props.description}</h3>
                    <span></span>
                    <p></p>
                </div>
                <div className={styles.linkWrapper}>
                    <Link href={`/blog/${props.slug}`}>
                        <a className={styles.link}>
                            Read More
                        </a>
                    </Link>
                </div>
        </div>
    )
}
