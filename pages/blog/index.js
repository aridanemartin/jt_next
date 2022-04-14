
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import styles from '@styles/Blog.module.css';
import Header from "@components/Header/Header";
import headerImage from '../../public/images/read3.webp';
import Link from 'next/link';
import Meta from "@components/Meta/Meta";

const Blog = ({ posts }) => {


    const [mappedPosts, setMappedPosts] = useState([]);


    useEffect(() =>{
        if(posts.length) {
            const imgBuilder = imageUrlBuilder({
                projectId: '6yfev950',
                dataset: 'production', 
            });

            setMappedPosts(
                posts.reverse().map(p => {
                    return {
                        ...p,
                        mainImage: imgBuilder.image(p.mainImage),
                        // .width(500).height(250)
                    }
                })
            )
        }else{
            setMappedPosts([]);
        } 
    },[posts])
    
    return (  
        
        <>
        <Meta 
            title="Blog | Dr. Julián Tamayo"
            desc="En este blog encontrarás noticias y artículos relacionados con la actualidad del mundo de la endocrinología y la nutrición."
            canonical={`https://www.juliantamayo.com/blog/`}
            image={headerImage}
        />
        <Header
        title='blog'
        image={headerImage}
        />
        <div className={styles.postsContainer}>
            {mappedPosts.length && mappedPosts.map((p) => (
                
                    <div 
                    className={styles.postCard}
                    key={p._id}
                    >
                    <Link 
                key={p._id} 
                href={`/blog/${p.slug.current}`}
                ><a>
                        <h2>{p.title}</h2>
                        <h3>{p.author.name}</h3>
                        <p>{p.description}</p>
                        <div className={styles.postImageWrap}>
                            <img 
                            className={styles.postImage} 
                            src={p.mainImage}
                            alt={p.title}
                            />
                        </div>
                        </a>
                        </Link>
                    </div>
               
                
            ))}
        </div>
        
        
        </>
        
    )
}

export default Blog;

export const getServerSideProps = async () => {
    
    //hace la query en relacion a la url pedida por el cliente
    const query = encodeURIComponent(`*[ _type == "post"]{
        _id,
        title,
        description,
        mainImage,
        slug,
        author->,
    }| order(_createdAt asc)`);
    const url = `${process.env.SANITY_URL}query=${query}`;
    const result = await fetch(url).then(res => res.json());

    if(!result.result || !result.result.length) {
        return {
            props: {
                posts: [],
            }
        }
    } else{
        return {
            props: { 
                posts: result.result,
            }
        }
    }
}