import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { useLocation } from 'react-router-dom'
import courseData from '../services/api'
import Breadcrumb from '../components/Breadcrumb'
import styles from './CourseInfoPage.module.css'
import Cookies from 'js-cookie'
import {FiInfo, FiClock, FiCalendar, FiVideo, FiBriefcase, FiUsers} from "react-icons/fi"
import { FaUsers, FaStar } from "react-icons/fa";
import { useToast } from '../components/ToastContext'
import GlowBall from '../components/GlowBall'


function CourseInfoPage() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = Number(searchParams.get("id"))
  const {showToast} = useToast();
  console.log(id);
  
    
  const course = courseData.find(course => course.id === id)
  console.log(course);
  
  const courseInfo = [
    { id:1,
      name: "وضعیت دوره",
      value: course?.status,
      icon: <FiInfo color='var(--bs-color)' fontSize='2rem' />
    },
    { id:2,
      name: "مدت زمان دوره",
      value: course?.time,
      icon: <FiClock color='var(--bs-color)' fontSize='2rem'/>
    },
    { id:3,
      name: "آخرین بروزرسانی",
      value: course?.apdateData,
      icon: <FiCalendar color='var(--bs-color)' fontSize='2rem'/>
    },
    { id:4,
      name: "روش پشتیبانی",
      value: course?.support,
      icon: <FiUsers color='var(--bs-color)' fontSize='2rem'/>
    },
    { id:5,
      name: "پیش نیاز",
      value: course?.prerequisite,
      icon: <FiBriefcase color='var(--bs-color)' fontSize='2rem'/>
    },
    { id:6,
      name: "نوع مشاهده",
      value: course?.ViewType,
      icon: <FiVideo color='var(--bs-color)' fontSize='2rem'/>
    },
    
  ]
  const BuyButtonHandler = () => {
    const isLoggedIn = Cookies.get("isLoggedIn") === 'true'
    const myCourse = JSON.parse(localStorage.getItem('myCourse')) || []
    const ids = JSON.parse(localStorage.getItem('productId')) || []

    if(!isLoggedIn) {
      showToast('error' ,"ابتدا وارد یا ثبت نام کنید")
      return
    } else if(myCourse.includes(course.id)) {
      showToast('info', 'شما قبلا این دوره را خریداری کرده اید')
      return
    }else if (!ids.includes(course.id)){
      ids.push(course.id)
      localStorage.setItem('productId', JSON.stringify(ids))
      showToast("success", 'محصول با موفقیت اضافه شد')

    }else{
      showToast('info', 'این محصول قبلا به سبد خرید شما اضافه شده.')
    }
  }
    
  return (
    <MainLayout>
      <div style={{marginTop:'130px'}}>

        {course ? (
          <>
          
          <Breadcrumb />
            <GlowBall color="#f7e43b" location="rigth" value={0} />

            <div className={styles.container}>
              <div>
                <h2 className={styles.courseTitle}>{course.title}</h2>
                <p className={styles.courseDesc}>{course.desc}</p>
                <div className={styles.priceAndBuyBtn}>
                  <button className={styles.addToBasket} onClick={BuyButtonHandler}>افزودن به سبد خرید</button>
                  {course.price.toLocaleString('fa-IR') && <h3>{course.price.toLocaleString('fa-IR')} تومان </h3>}
                </div>
              </div>
              <div className={styles.imgBox} >
                <img className={styles.imageBox} src={course.decImage} alt={course.name} />
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.CourseInfoBox}>
                {courseInfo.map(info => (
                  <div key={info.id} className={styles.infoChild}>
                    <div>{info.icon}</div>
                    <div className={styles.infoBoxValue}>
                      <span >{info.name}</span>
                      <span >{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.container3}>
                <div>
                  <div>
                  <FaUsers color='var(--bs-color)' fontSize='2.2rem' />
                  <div className={styles.spanInfo}>
                    <span>{course.studentAll.toLocaleString('fa-IR')}</span>
                    <span >دانشجو</span>
                  </div>
                  </div>
                  <div>
                    <FaStar color='yellow' fontSize='2rem' />
                    <div className={styles.spanInfo}>
                    <span>{course.satisfaction}</span>
                    <span >رضایت</span>
                    </div>
                  </div>
                </div>
                <div className={styles.ProgressBox}>
                  <div className={styles.progressInfo}>
                    <span>درصد تکمیل دوره</span>
                    <span>{course.Progress}</span>
                  </div>
                  <input style={{direction:'ltr', color:'red'}} type="range" min={0} max={100} value={course.progCompate} readOnly />
                </div>
              </div>
            </div>
            <GlowBall color="#f73b80" location="left" value={0} />

          </>

        ) : (
          <p>دوره‌ای با این شناسه پیدا نشد.</p>
        )}
      </div>
    </MainLayout>
  )
}

export default CourseInfoPage


