/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import styles from "./comments.module.css";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }: { postSlug: any }) => {

  const { status } = useSession();
  const [desc, setDesc] = useState("");
  const { data, mutate, isLoading } = useSWR(
   `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method:"POST",
      body:JSON.stringify({desc, postSlug}),
    });
    mutate();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => {setDesc(e.target.value)}}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((comment: any) => (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.user}>
                  <Image
                    src={comment.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{comment.user.name}</span>
                    <span className={styles.date}>{comment.createdAt.substring(0,10)}</span>
                  </div>
                </div>
                <p className={styles.desc}>
                  {comment.desc}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
