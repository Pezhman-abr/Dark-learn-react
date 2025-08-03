import React, { useState } from 'react'
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom'
import styles from './DashboardPage.module.css'
import { HiUserCircle } from "react-icons/hi";
import { IoMdSettings ,IoMdExit } from "react-icons/io";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiWindowsLogoThin } from "react-icons/pi";
import Cookies from 'js-cookie'
import { GoHome } from "react-icons/go";
import DarkMod from '../components/DarkMod';
import GlowBall from '../components/GlowBall';



function DashboardPage() {
    const [isBoxVisible, setIsBoxVisible] = useState(false)
    const userInformation = JSON.parse(localStorage.getItem('user')) || []
    const today = new Date()
    const dateFormater = new Intl.DateTimeFormat('fa-IR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long'
    }).format(today)

    const isLoggedIn = Cookies.get('isLoggedIn') === 'true'
    if(!isLoggedIn) {
        return(<Navigate to='/login' replace />)
    }

    


  return (
    // <MainLayout >
    <div className={styles.bodyBox}>

        <GlowBall color='#ff55a1' location='rigth' value={0}/>
    <div className={styles.container}>
        <div className={ `${styles.menu} ${isBoxVisible ? styles.boxVisible : ''} `}>
            <div>
                <HiUserCircle color='#07ca5f' fontSize='4rem' />
                <div>
                    <span>{userInformation.name.toUpperCase()}</span>
                    <span style={{color: 'var(--Font2--color)', fontSize: '.7rem'}}>{userInformation.phone}</span>
                </div>
                <div>
                    <IoMdSettings className={styles.settingIcon} fontSize='1.5rem' />
                    <IoMdExit color='#f33939' className={styles.colseMenu} onClick={() => setIsBoxVisible(!isBoxVisible)} fontSize='1.5rem' />
                </div>
            </div>
                <span>دسترسی سریع</span>
            <div>
                <NavLink   className={({ isActive }) => isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink} to='/DashboardPage/home'><IoHomeOutline className={styles.menuLinkIcons} />خانه</NavLink>
                <NavLink   className={({ isActive }) => isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink} to='/DashboardPage/myCourse'><SlEnergy className={styles.menuLinkIcons} />دوره های من</NavLink>
                <NavLink   className={({ isActive }) => isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink} to='/DashboardPage/tiket'><MdOutlineLocalPostOffice className={styles.menuLinkIcons} />تیکت ها</NavLink>
                <NavLink   className={({ isActive }) => isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink} to='/DashboardPage/profile'><IoWalletOutline className={styles.menuLinkIcons} />جزعیات حساب</NavLink>
            </div>
        </div>
        <div className={styles.hederBox}>
            <div>
                <div>
                    <input type="text" placeholder='دوره های من, تیکت ها, مالی ...' />
                    <CiSearch className={styles.searchBoxIcon}  />
                </div>
                <PiWindowsLogoThin className={styles.menuBtn} onClick={() => setIsBoxVisible(!isBoxVisible)} />
                <div className={styles.dateAndIconsBox}>
                    <div>
                        <DarkMod />
                        <Link to='/'><GoHome color='var(--bs-color)' fontSize='2rem' /></Link>
                    </div>
                    <span className={styles.dateStyle}>{dateFormater}</span>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>

        </div>
                <div className={styles.developer}>
            <GlowBall color='#e88a10' location='left' value={30}/>
            <span>Developed by Pezhman with ❤️</span>
        </div>
    </div>
    // </MainLayout>
  )
}

export default DashboardPage