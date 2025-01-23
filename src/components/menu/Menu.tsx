import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { ImageLoader } from '@/utils/ImageLoader'
import categoryList from '@/data/CategoryData'
import menuData from '@/data/MenuData'

export default function Menu () {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        {menuData.map((menu, index) => (

          <Link href={menu.link} className={styles.item} key={index}>
          <div className={styles.imageContainer}>
            <Image src={ImageLoader(menu.image)} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.category} 
            style={{backgroundColor:categoryList.filter((category)=>category.name===menu.category)[0].categoryColor}}>{menu.category}</span>
            <h3 className={styles.postTitle}>{menu.title}</h3>
            <div className={styles.detail}>
            <span className={styles.username}>{menu.username}</span>
            <span className={styles.date}> - {menu.username}</span>
          </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
