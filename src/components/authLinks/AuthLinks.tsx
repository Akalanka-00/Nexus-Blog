"use client"
import React from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'

const AuthLinks = () => {
  const status: boolean = true;
  const [open, setOpen] = React.useState(false);
  return <>
    {status ?
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
        :
      <>
      <Link href="/login" className={styles.link}>Login</Link>
    </> 
    }

    <div className={styles.burger} onClick={() => setOpen(!open)}>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    </div>

    {open &&(
      <div className={styles.responsiveMenu}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {status ?
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
        :
      <>
      <Link href="/login">Login</Link>
    </> 
    }
      </div>
    )}
  </>
}

export default AuthLinks