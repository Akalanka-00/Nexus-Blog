import React, { useState } from 'react'
import styles from "./write.module.css"
import Image from 'next/image'

const WritePage = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
        <input type='text' placeholder='Title'/>
        <div className={styles.editor}>
            <button className={styles.button}>
                <Image src="/icons/plus.png" alt='' width={16} height={16}/>
            </button>
            {open && 
            <div className={styles.add}>
                <button className={styles.addButton}>
                <Image src="/icons/plus.png" alt='' width={16} height={16}/>
            </button>

            <button className={styles.addButton}>
                <Image src="/icons/external.png" alt='' width={16} height={16}/>
            </button>

            <button className={styles.addButton}>
                <Image src="/icons/video.png" alt='' width={16} height={16}/>
            </button>
            </div>
            }
        </div>
    </div>
  )
}

export default WritePage