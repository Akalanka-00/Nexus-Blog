"use client"
import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";
import Link from "next/link";
import { ImageLoader } from "@/utils/ImageLoader";

const Comments = () => {
  const handleSubmit = async () => {};
  const status: boolean = true;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={() => {}}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={ImageLoader("/images/p1.jpeg")}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>02.05.2025</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            commodi similique veritatis omnis iusto fugit esse exercitationem
            inventore laborum reprehenderit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
