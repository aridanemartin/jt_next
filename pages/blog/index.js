
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '@styles/Blog.module.css';
import Header from "@components/Header/Header";
import headerImage from '../../public/images/read3.jpg';

const Blog = ({ posts }) => {

    const router = useRouter();

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
    },[])
    console.log(posts)
    return (  
        
        <>
        <Header
        title='blog'
        image={headerImage}
        />
        <div className={styles.postsContainer}>
            {mappedPosts.length && mappedPosts.map((p, index) => (
                
                    <div 
                    className={styles.postCard}
                    key={p._id}
                    onClick={() => router.push(`/blog/${p.slug.current}`)}>
                        <h2>{p.title}</h2>
                        <h3>{p.author.name}</h3>
                        <p>{p.description}</p>
                        <div className={styles.postImageWrap}>
                            <img className={styles.postImage} key={p._id} src={p.mainImage}/>
                        </div>
                        
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
        title,
        description,
        mainImage,
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