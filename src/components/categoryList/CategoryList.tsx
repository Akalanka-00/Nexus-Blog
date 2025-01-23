import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { ImageLoader } from "@/utils/ImageLoader";

export default function CategoryList() {
  const categories = [
    {
      name: "style",
      image: "images/style.png",
      link: "/blog?cat=style",
      bg: "#57c4ff31",
    },
    {
      name: "fashion",
      image: "images/fashion.png",
      link: "/blog?cat=fashion",
      bg: "#da85c731",
    },
    {
      name:"food",
      image:"images/food.png",
      link:"/blog?cat=food",
      bg:"#7fb88133"
    },
    {
      name:"travel",
      image:"images/travel.png",
      link:"/blog?cat=travel",
      bg:"#ff795736"
    },
    {
      name: "culture",
      image: "images/culture.png",
      link: "/blog?cat=culture",
      bg: "#ffb04f45",
    },
    {
      name:"coding",
      image:"images/coding.png",
      link:"/blog?cat=coding",
      bg:"#5e4fff31"
    }
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((category, index) => (
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
