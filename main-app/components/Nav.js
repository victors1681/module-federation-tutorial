import React from "react";
import styles from '../styles/Home.module.css'

export const Nav = ({children}) => {
    return (
        <nav className={styles.nav}>
          {children}
        </nav>
      )
}

export default Nav;