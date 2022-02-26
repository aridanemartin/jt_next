import styles from '@styles/BlogItem.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function BlogItem({ post, image }) {
    
    

    return (
        <div className={styles.post}>
                <div className={styles.imgWrapper}>     
                    <Image 
                        {...image}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.description}>
                    <h3 className={styles.postTitle}>{post.title}asdfasdfasdfasdfasdfasdf</h3>
                    {/* <span className={styles.postAuthor}>{post.author.name}</span><br/> */}
                    <span className={styles.postDate}></span>
                    <div className={styles.smallDivider}></div>
                    <p className={styles.postDescription}>{post.description}</p>
                </div> 
                <div className={styles.linkWrapper}>
                    {/* <Link href={`/blog/${post.slug}`}>
                        <a className={styles.link}>
                            Read More
                        </a>
                    </Link> */}
                </div>        
        </div>
    )
}
