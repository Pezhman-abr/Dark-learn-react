import React, { useState } from 'react'
import { Link, useNavigate, Outlet, replace } from 'react-router-dom'
import { useToast } from './ToastContext'
import Cookies from 'js-cookie'
import styles from './numberLogin.module.css'
import { FaPhoneAlt } from "react-icons/fa";


function NumberLogin() {
    const navigate = useNavigate()
    const [phone, setPhone] = useState('')
    const { showToast } = useToast()
    const phoneRegex = /^09\d{9}$/;
    const getuserLoginStatus = JSON.parse(localStorage.getItem('user')) || 0
    

    const submitHandler = () => {

    // console.log(getuserLoginStatus.phone);
        if(phone === getuserLoginStatus.phone){
            showToast('success' ,'ورود با موفقیت انجام شد' )
            Cookies.set("isLoggedIn", "true", {expires: 7})
            navigate('/', replace)
        }else if(!phoneRegex.test(phone)) {
            const msg = 'شماره تلفن را بصورت اعداد انگلیسی و ۱۲ رقمی وارد کنید مانند: ۰۹۱۲۳۳۳۴۴۵۵'
            showToast('error', msg)
        } else {
            showToast('info','ابتدا ثبت نام کنید')
        }

        
    }
    
  return (
    <div className={styles.container}>
        <h2>ورود با موبایل</h2>
        <span className={styles.notAcount}>حساب کاربری ندارید؟ <Link className={styles.singUpType} to='/login/rigester'>ثبت نام کنید</Link></span>
        <div>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='شماره موبایل'/>
        <span><FaPhoneAlt fontSize='1.2rem' color='var(--bs-color)' /></span>
        </div>
        <button onClick={submitHandler}>ورود</button>
        <Link className={styles.LoginOnType} to="/login/email">ورود با ایمیل</Link>
    <Outlet />
    </div>
  )
}

export default NumberLogin