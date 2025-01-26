/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';


const getData =async (slug: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`,{
    cache:"no-cache",
  });

  if(!res.ok){
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  return data;
};

const SinglePage = async ({ params }: {params:any}) => {

  
  const { slug } =await params;
  const data = await getData(slug);

  return (
    <div className={styles.container}>
            <div className={styles.infoContainer}>
              <div className={styles.textContainer}>
                <h1>{data?.title}</h1>
                <div className={styles.user}>
                <div className={styles.userImageContainer}>
                <Image src={data?.user.image} alt='' fill className={styles.image}/>
                </div>
                <div className={styles.userTextContainer}>
                <span>{data?.user.name}</span>
                <span>01.02.2025</span>
                </div>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <Image src={data.img} className={`${styles.image} ${styles.featureImage}`} alt='' fill/>
              </div>
            </div>
            <div className={styles.content}>
            <div className={styles.post}>
            <div
            className={styles.description}             
            dangerouslySetInnerHTML={{ __html: data?.desc }}
            />
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
            </div>
            <Menu/>
            </div>

    </div>
  )
}

export default SinglePage;