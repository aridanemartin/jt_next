import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import sanityClient from '../../client';

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

import styles from '@styles/SinglePost.module.css';

export const SinglePost = (data) => {

        const mainImageProps = useNextSanityImage(
            sanityClient,
            data.mainImage
        );
        
        const authorImageProps = useNextSanityImage(
            sanityClient,
            data.author.image
        );

        const image1Props = useNextSanityImage(
            sanityClient,
            data.image1
        );

        const image2Props = useNextSanityImage(
            sanityClient,
            data.image2
        );
    

    

    return ( 
    <>
    <div>
        <div className={styles.postImageHero}>
            <h2 className={styles.title}>{data.title}</h2>
            <Image 
            {...mainImageProps}
            layout="fill"
            objectFit="none"
            className={styles.image}
            /> 
        </div>
        {/* <BlockContent blocks={data.body}/> */}
    </div>
    <article className={styles.contentWrapper}>
            <div className={styles.authorData}>
                <div className={styles.dataWrap}>
                    <p className={styles.date}>{data.author.especialidad}</p>
                    <p className={styles.author}>{data.author.name}</p>
                    <div className={styles.authorImage}>
                        <Image 
                        {...authorImageProps}
                        layout="fill"
                        objectFit="cover"
                        alt={`${data.author.name} Foto de Perfil`}
                        />
                    </div>
                </div>
            </div>
            

            <section>
                <BlockContent blocks={data.body1}/>
            </section>
            <div className={styles.postImage}>
                <Image 
                {...image1Props}
                layout="fill"
                objectFit="cover"
                alt={`${data.title} - Foto de artículo *1`}
                />
            </div>
            <section> 
                <BlockContent blocks={data.body2}/>
            </section>
            
            <div className={styles.postImage}>
                <Image 
                {...image1Props}
                layout="fill"
                objectFit="cover"
                alt={`${data.title} - Foto de artículo *2`}
                />
            </div>
            
            <section>
                <BlockContent blocks={data.body3}/>
            </section>

            <div className={styles.linksWrapper}>
            <Link 
            href="/"
            >
                <a>CONCERTAR CITA</a>
            </Link>
            <Link 
            href="/blog"
            >
                <a>Volver al blog</a>
            </Link>
            </div>
        </article>
    </>

    );
}

export const getServerSideProps = async pageContext => {
    // slug que el usuario escribe
    const pageSlug = pageContext.query.slug;
    
    if (!pageSlug) {
        return {
            notFound: true
        }
    }

    //hace la query en relacion a la url pedida por el cliente
    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"]{
        body,
        title,
        mainImage,
        description,
        body1,
        articleImage1,
        body2,
        author->
    }`);
    const url = `https://6yfev950.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const post = result.result[0];
    
    
    if(!post) {
        return {
            notFound: true
        }
    } else{
        return {
            props: { 
                data: post,
                body: post.body,
                title: post.title,
                mainImage: post.mainImage,
                description: post.description,
                body1: post.body1,
                image1: post.articleImage1,
                body2: post.body2,
                author:post.author,
                
            }
        }
    }
}

export default SinglePost;