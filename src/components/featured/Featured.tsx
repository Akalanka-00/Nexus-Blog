import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

export default function Featured () {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey John Doe Here!</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src={"/images/p1.jpeg"} fill alt=''/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nesciunt.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet odio dolorem 
            deserunt vero consequatur ut inventore nobis amet earum eius.</p>
            <button className={styles.button}>Read more.</button>
        </div>
      </div>
    </div>
  )
}
