import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
import { ImageLoader } from '@/utils/ImageLoader'

export default function Navbar () {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <Image src={ImageLoader("/icons/facebook.png")}  alt="" width={24} height={24}/>
      <Image src={ImageLoader("/icons/instagram.png")} alt="" width={24} height={24}/>
      <Image src={ImageLoader("/icons/tiktok.png")} alt="" width={24} height={24}/>
      <Image src={ImageLoader("/icons/youtube.png")} alt="" width={24} height={24}/>
      </div>
      <div className={styles.logo}>Nexus Blog</div>
      <div className={styles.links}>
        <ThemeToggle/>
      <Link className={styles.link} href="/">Homepage</Link>
      <Link className={styles.link} href="/">Contact</Link>
      <Link className={styles.link} href="/">About</Link>
      <AuthLinks/>
      </div>
      </div>
  )
}
