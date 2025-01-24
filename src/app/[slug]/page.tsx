"use client";

import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import { ImageLoader } from '@/utils/ImageLoader';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
            <div className={styles.infoContainer}>
              <div className={styles.textContainer}>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                <div className={styles.userImageContainer}>
                <Image src={ImageLoader("/images/p1.jpeg")} alt='' fill className={styles.image}/>
                </div>
                <div className={styles.userTextContainer}>
                <span>John Doe</span>
                <span>01.02.2025</span>
                </div>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <Image src={ImageLoader("/images/p1.jpeg")} alt='' fill/>
              </div>
            </div>
            <div className={styles.content}>
            <div className={styles.post}>
            <div
            className={styles.description}
          >
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nobis voluptatibus, 
  provident voluptate impedit laboriosam mollitia quo tenetur r
  erum perferendis facere natus sunt molestiae, quod fugiat porro voluptas! Fugit, ratione.
  </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
            </div>
            <Menu/>
            </div>

    </div>
  )
}

export default SinglePage;