import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './NavBar.module.css'
import { FaBasketShopping } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { FaHome } from "react-icons/fa";


import Basket from './Basket';
import Cookies from 'js-cookie'
import DashboardBox from './DashboardBox';
import DarkMod from './DarkMod';
import { AiFillHome, AiOutlineBook, AiOutlineFileText, AiOutlineMessage } from "react-icons/ai";



function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showBasket, setShowBasket] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [menu, setMenu] = useState(false)
    const location = useLocation()
    const isDashboardPage = location.pathname.startsWith("/DashboardPage")

  useEffect(() => {
    
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
  }

  const interval = setInterval(() => {
    const cookieValue = Cookies.get("isLoggedIn") === 'true'
    setIsLoggedIn(cookieValue)
  }, 1);

  return () => clearInterval(interval)
  
}, []);


  
  return (
    <>
    <div className={styles.container}>
      <div>

      <img src="public/image/Group2.png" alt="darklearn-logo" />
      <TiThMenu className={styles.HamburgerMenu} onClick={() => setMenu(!menu)} />
      <nav className={`${styles.nav} ${menu ? styles.navOpen : ''}`}>
        
        <NavLink className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
          } to="/" end ><span className={styles.menuInfoIcons}><AiFillHome /></span> صفحه اصلی</NavLink>
          

        <NavLink className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
          } to="/courses" ><span className={styles.menuInfoIcons}><AiOutlineBook /></span> همه دوره ها</NavLink>
          

        <NavLink className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
          } to="/articles" end><span className={styles.menuInfoIcons}><AiOutlineFileText /></span> مقالات</NavLink>
          

        <NavLink className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
          } to="/Counseling" end ><span className={styles.menuInfoIcons}><AiOutlineMessage /></span> مشاوره برنامه نویسی</NavLink>
          

      </nav>
      </div>
      <div className={styles.loginBox}>
        <DarkMod />
        <button className={styles.basketBtn} onClick={() => setShowBasket(true)}><FaBasketShopping /></button>

        {isLoggedIn ? (
          isDashboardPage ? (
            <Link to='/'><button className={styles.loginBtn}>صفحه اصلی</button></Link>
          ) : (
        <button onClick={() => setShowProfile(true)} className={styles.dashboardBtn}>داشبورد</button>
          )
      )  : (
        <Link to='/login/number'><button className={styles.loginBtn}>ورود|عضویت</button></Link>
        )}
      </div>
    </div>
      {showBasket && <Basket onClose={() => setShowBasket(false)} />}
        {showProfile && <DashboardBox onClose ={() => setShowProfile(false)} />}
</>
  )
}

export default Navbar