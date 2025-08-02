import React, { useState } from 'react'
import { Link, Outlet, replace, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";



import styles from './numberLogin.module.css'
import { useToast } from './ToastContext';

function EmailLogin() {
    const navigate = useNavigate()
    const { showToast } = useToast()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const getEmailInLoc = JSON.parse(localStorage.getItem('user')) || ""

    const submitHandler = () => {
        const emailRegex = /^(?!www\.)[\w-\.]+@[a-z A-Z]+\.[a-z A-Z]{2,3}$/
        if(!emailRegex.test(email)){
            showToast('error', "ایمیل وارد شده معتبر نیست.")
        } else if(email === getEmailInLoc.email && password === getEmailInLoc.password){
            showToast('success', "ورود با موفقیت  انجام شد")
            Cookies.set("isLoggedIn", "true", {expires: 7})
            return navigate('/' ,replace)
        } else if(email !== getEmailInLoc.email || password !== getEmailInLoc){
            showToast('error','ایمیل یا رمز عبور صحیح نمی باشد.')
        }else{
            showToast('info', 'ابتدا ثبت نام کنید')
        }

    }
  return (
     <div className={styles.container}>
            <h2>ورود با ایمیل</h2>
            <span className={styles.notAcount}>حساب کاربری ندارید؟ <Link className={styles.singUpType} to='/login/rigester'>ثبت نام کنید</Link></span>
            <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='آدرس ایمیل'/>
            <span><MdOutlineMailOutline fontSize='1.2rem' color='var(--bs-color)' /></span>
            </div>
            <div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='رمز عبور'/>
            <span><RiLockPasswordLine fontSize='1.2rem' color='var(--bs-color)' /></span>
            </div>
            <button onClick={submitHandler}>ورود</button>
            <Link className={styles.LoginOnType} to="/login/number">ورورد با موبایل</Link>
        <Outlet />
        </div>
  )
}

export default EmailLogin
