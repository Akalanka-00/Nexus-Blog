import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'


const getData =async () => {
  const res = await fetch("http://localhost:3000/api/posts",{
    cache:"no-cache",
  });

  if(!res.ok){
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  return data;
};

const CardList =async () => {

  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
      <Card/>
      <Card/>
      <Card/>
      </div>
    <Pagination/>
    </div>
  )
}

export default CardList;
