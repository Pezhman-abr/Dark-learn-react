import React, { useState } from 'react'
import { Link, Outlet, replace, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";



import styles from './numberLogin.module.css'
import { useToast } from './ToastContext';
import { Navigate } from 'react-router-dom';
function RigesterUser() {
    const navigate = useNavigate()
    const { showToast } = useToast()
    const [userName , setUserName] = useState('')
    const [phone , setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = {
        name: userName,
        phone : phone,
        email: email,
        password: password,
    }

    const submitHandler = () => {
        const emailRegex = /^(?!www\.)[\w-\.]+@[a-z A-Z]+\.[a-z A-Z]{2,3}$/
        const phoneRegex = /^09\d{9}$/;
        localStorage.setItem('user', JSON.stringify(user))

        if(!emailRegex.test(email) || userName.length < 3 || !phoneRegex.test(phone) || password.length < 8){
            showToast('error', "مقادیر وارد شده معتبر نیتسند.")
        } else {
            showToast('success', "ورود با موفقیت  انجام شد")
            Cookies.set("isLoggedIn", "true", {expires: 7})
            return navigate('/', replace)
        }

    }
  return (
     <div className={styles.container}>
            <h2>عضویت</h2>
            <span className={styles.notAcount}> قبلا ثبت نام کرده اید؟ <Link className={styles.singUpType} to='/login/number' >وارد شوید</Link></span>
            <div>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='نام کاربری'/>
            <span><FaRegUser fontSize='1.2rem' color='var(--bs-color)' /></span>
            </div><div>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='شماره موبایل'/>
            <span><FiPhone fontSize='1.2rem' color='var(--bs-color)' /></span>
            </div>
            <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='آدرس ایمیل'/>
            <span><MdOutlineMailOutline fontSize='1.2rem' color='var(--bs-color)' /></span>
            </div>
            <div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='رمز عبور'/>
            <span><RiLockPasswordLine fontSize='1.2rem' color='var(--bs-color)' /></span>
            </div>
            <button onClick={submitHandler}>ورود</button>

        <Outlet />
        </div>
  )
}

export default RigesterUser
