import React from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'

const AuthLinks = () => {
  const status: boolean = true;
  return <>
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
  </>
}

export default AuthLinks