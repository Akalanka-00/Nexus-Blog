import menuData from '@/data/MenuData'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPosts.module.css"
import Image from 'next/image'
import categoryList from '@/data/CategoryData'

const MenuPosts = ({ withImage }: { withImage: boolean }) => {
  return (
    <div className={styles.items}>
        {menuData.map((menu, index) => (

          <Link href={menu.link} className={styles.item} key={index}>
          {withImage && <div className={styles.imageContainer}>
            <Image src={menu.image} alt="" fill className={styles.image} />
          </div>}
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
  )
}

export default MenuPosts