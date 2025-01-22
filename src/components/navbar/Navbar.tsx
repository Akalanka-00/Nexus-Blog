import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

export default function Navbar () {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <Image src="/icons/facebook.png" alt="" width={24} height={24}/>
      <Image src="/icons/instagram.png" alt="" width={24} height={24}/>
      <Image src="/icons/tiktok.png" alt="" width={24} height={24}/>
      <Image src="/icons/youtube.png" alt="" width={24} height={24}/>
      </div>
      <div className={styles.logo}>Nexus Blog</div>
      <div className={styles.links}>
        <ThemeToggle/>
      <Link href="/">Homepage</Link>
      <Link href="/">Contact</Link>
      <Link href="/">About</Link>
      <AuthLinks/>
      </div>
      </div>
  )
}
