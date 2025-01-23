import Image from "next/image"
import styles from "./card.module.css"

import React from 'react'
import { ImageLoader } from "@/utils/ImageLoader"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src={ImageLoader("/images/p1.jpeg")} alt="post" className={styles.image} fill/>
        </div>
        <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>12th June 2021 - </span>
            <span className={styles.category}>Style</span>
            </div>    
            <Link href="/">
            <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nesciunt.</h1> 
            </Link>
            <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia inventore quod eum vitae quas non cum alias 
                
                </p>       

            <Link href="/post/1" className={styles.link}>Read More</Link>
        </div>

    </div>
  )
}

export default Card