import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { ImageLoader } from "@/utils/ImageLoader";
import categoryList from "@/data/CategoryData";

export default function CategoryList() {
 
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categoryList.map((category, index) => (
            <Link href={category.link} className={styles.category} key={index} style={{backgroundColor:category.bg}}>
              <Image
                className={styles.image}
                src={ImageLoader(category.image)}
                alt=""
                width={32}
                height={32}
              />
              {category.name}
            </Link>
        ))}
      </div>
    </div>
  );
}
