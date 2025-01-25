"use client"

import React, { useState } from 'react'
import styles from "./write.module.css"
import Image from 'next/image'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


const WritePage = () => {

    const handleSubmit = async () => {
        console.log("submit");
      };

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
        <input className={styles.input} type='text' placeholder='Title'/>
        <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/icons/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => console.log(e.target.files)}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <Image src="/icons/image.png" alt="" width={16} height={16} />
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