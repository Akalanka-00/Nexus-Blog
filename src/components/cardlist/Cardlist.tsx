/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'


const getData =async (page: number, category: string) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${category || ""}`,{
    cache:"no-cache",
  });

  if(!res.ok){
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  return data;
};

const CardList =async ({page, category}: {page: number, category: string}) => {

  const {posts, count} = await getData(page, category);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE* (page-1) >0;
  const hasNext = POST_PER_PAGE* (page-1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category} Posts</h1>
      <div className={styles.posts}>
      {posts?.map((post: any) => (
        <Card post={post} key={post._id}/>
      ))}
      </div>
    <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default CardList;
