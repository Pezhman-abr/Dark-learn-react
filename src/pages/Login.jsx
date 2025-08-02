import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link, Navigate, Outlet } from 'react-router-dom'
import GlowBall from '../components/GlowBall'
import styles from './Login.module.css'
import Cookies from 'js-cookie'


function Login() {

  const isLoggedIn = Cookies.get('isLoggedIn') === 'true'
  if(isLoggedIn){
    return <Navigate to='/dashboardPage'replace />
  }
  
  return (
    <>
      <GlowBall color="rgba(255, 80, 80, 1)" location="left"  value='15%'/>
    <div className={styles.bodyCon}>
    <div className={styles.container} >
      <div className={styles.logoImgAndName}>
        <img  src="../public/image/Group2.png" alt="DarkLearn logo" />
        <h1>دارک لرن</h1>
      </div>
      <Outlet />
    <p>با عضویت در سایت, تمامی قوانین و شرایط استفاده از خدمات <span>دارک لرن</span> را پذیرفته اید.</p>

    </div>
    </div>
      <GlowBall color="rgba(0, 255, 255, 1)" location="right"  value='15%'/>
    </>
  )
}

export default Login