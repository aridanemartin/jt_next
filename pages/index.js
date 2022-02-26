import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import indexCover from '../public/images/portada4.jpg';
import BlogItem from '@components/BlogItem/BlogItem';
import Separador from "@components/Separador/Separador";
import IntroBio from "@components/IntroBio/IntroBio";
import HeroTemplate from '@components/HeroTemplate/HeroTemplate';
import Link from 'next/link';
import sanityClient from '../client';
import { useNextSanityImage } from 'next-sanity-image';
import RotatingText from '@components/RotatingText/RotatingText';
import Layout from '@components/Layout/Layout';
import { useEffect, useState } from 'react';
import imageUrlBuilder from "@sanity/image-url";


export default function Home({ posts }) {

  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() =>{
    if(posts.length) {
        const imgBuilder = imageUrlBuilder({
            projectId: '6yfev950',
            dataset: 'production', 
        });

        setMappedPosts(
          posts.slice((posts.length - 3), posts.length).map(post => {
                return {
                    ...post,
                    mainImage: imgBuilder.image(post.mainImage),
                    authorImage: imgBuilder.image(post.author.image),
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

      <HeroTemplate
      img={indexCover}
      /> 
      <Layout>
        <IntroBio/>
      </Layout>  
        
        <RotatingText/>

      <Layout> 
        <Separador title="Últimos Posts"/>
        <div className={styles.latestPosts}>
        {mappedPosts.map((post) => {
          return (
            <Link key={post.slug.current} href={`blog/${post.slug.current}`}>
              <div className={styles.postPreviewWrapper} key={post.id}>
                <div className={styles.imgWrapper}>
                  <img src={post.mainImage}/>
                  
                </div>
                <p className={styles.postTitle}>{post.title}</p>
                <div className={styles.authorData}>
                  <div className={styles.dataWrap}>
                      <p className={styles.date}>{post.author.especialidad}</p>
                      <p className={styles.author}>{post.author.name}</p>
                      <div className={styles.authorImage}>
                        <img src={post.authorImage}/>
                      </div>
                  </div>
                </div>
              </div>
            </Link>
          
          )
        })}
        </div>
      </Layout>
        
    </>
  )
}


export const getServerSideProps = async () => {
    
    
  //hace la query en relacion a la url pedida por el cliente
  const query = encodeURIComponent(`*[ _type == "post"]{
    title,
    mainImage,
    description,
    slug,
    author->
  }`);
  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then(res => res.json());
  const posts = data.result;

  

  if(!posts) {
      return {
          props: {
              posts: [],
          }
      }
  } else{
      return {
          props: { 
              posts, 
          }
      }
  }
}