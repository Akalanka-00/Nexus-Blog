import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/modals/category.modal";

const getData =async () => {
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-cache",
  });

  if(!res.ok){
    throw new Error("Something went wrong!");
  }
  const data = await res.json();
  return data;
};


export default async function CategoryList() {
 
const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((category:Category) => (
            <Link href={category.link} className={styles.category} key={category._id} style={{backgroundColor:category.bg}}>
              <Image
                className={styles.image}
                src={category.img}
                alt={category.slug}
                width={32}
                height={32}
              />
              {category.title}
            </Link>
        ))}
      </div>
    </div>
  );
}
