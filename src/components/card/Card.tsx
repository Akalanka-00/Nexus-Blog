/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import styles from "./card.module.css"
import { convert } from 'html-to-text';

import React from 'react'
import Link from "next/link"

const Card = ({ post, key}:{post:any, key:any}) => {

  const descSize = 150;
  const getPlainText = (html: string) => {
    const text =  convert(html, {
      wordwrap: false, // Keeps the string unwrapped
      selectors: [{ selector: 'img', format: 'skip' }], // Skips images, if any
    });
    return text;
  };


  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src={post.img} alt="post" className={styles.image} fill/>
        </div>
        <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>{post.createdAt.substring(0,10)} - </span>
            <span className={styles.category}>{post.catSlug}</span>
            </div>    
            <Link href={`/posts/${post.slug}`}>
            <h1 className={styles.title}>{post.title}</h1> 
            </Link>
            <p className={styles.desc}> {getPlainText(post.desc).substring(0,descSize)}{getPlainText(post.desc).length>descSize && "..."}</p>       

            <Link href={`/posts/${post.slug}`} className={styles.link}>Read More</Link>
        </div>

    </div>
  )
}

export default Card