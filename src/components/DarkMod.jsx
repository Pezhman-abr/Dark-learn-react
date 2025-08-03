import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import styles from './NavBar.module.css'



function DarkMod() {
        const [isDarkMod, setIsDarkMod] = useState("")

          const darkModHandler =()=>{
        
            const isDark = document.documentElement.classList.toggle("dark")
            localStorage.setItem("theme", isDark ? "dark" : "light");
            setIsDarkMod(prev => !prev)
          }
    
  return (
    <button className={styles.darkModBtn} onClick={darkModHandler}>{isDarkMod ? <MdDarkMode className={styles.darkModIcon} /> : <IoSunny className={styles.darkModIcon} />}</button>
  )
}

export default DarkMod