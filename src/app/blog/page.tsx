/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import styles from "./blogPage.module.css"
import CardList from '@/components/cardlist/Cardlist'
import Menu from '@/components/menu/Menu'

const BlogPage = ({ searchParams }: {searchParams: any}) => {

  const page =1 //parseInt(searchParams.get("page") || "1");
  const {cat} = searchParams;
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList page={page} category={cat}/>
            <Menu/>
        </div>
    </div>
  )
}

export default BlogPage