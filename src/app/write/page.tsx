"use client"

import React, { useEffect, useState } from 'react'
import styles from "./write.module.css"
import Image from 'next/image'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { app } from '@/utils/firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const WritePage = () => {

  const {  status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);


  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      if(!file) return;
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error:Error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    file && upload();
  }, [file]);

  
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }


  const slugify = (str:string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
       const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, desc: value, img:media===""?"/images/placeholder.svg" : media, slug:slugify(title), catSlug:"travel" }),
      });

      if (res.status === 201) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      }
      };

  return (
    <div className={styles.container}>
        <input className={styles.input} type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
        <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/icons/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/icons/image.png" alt="" width={16} height={16} />
                </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/icons/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/icons/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  )
}

export default WritePage