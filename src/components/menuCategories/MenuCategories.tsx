import React from 'react'
import styles from "./menuCategories.module.css"
import categoryList from '@/data/CategoryData'
import Link from 'next/link'
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        {categoryList.map((category, index) => (
            <Link href={category.link} className={styles.categoryItem} key={index} style={{backgroundColor:category.bg}}>{category.name}</Link>
        ))}
    </div>
  )
}

export default MenuCategories