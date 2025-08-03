import React from 'react'
import courseData from '../services/api'
import styles from "./Card.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { FaStar, FaRegUser } from "react-icons/fa";


function Card({course, heigth}) {

  const navigate = useNavigate()

  const clickHandler =() => {
    navigate(`/courseinfo?id=${course.id}`)


    let previousCourses = JSON.parse(localStorage.getItem('viweCourse')) || []
      previousCourses = previousCourses.filter(id => id !== course.id)
      previousCourses.push(course.id)
      if(previousCourses.length > 12){
        previousCourses.shift()
      }
    localStorage.setItem('viweCourse', JSON.stringify(previousCourses))

  
  }
  
  return (
    <>


        <div onClick={clickHandler} className={`${styles.cardContainer} ${heigth ? styles.cardSmall : ""}`}>
          <img src={course.image} alt={course.name} loading="lazy" />
          <div className={styles.cartNameBox}>
            <h3>{course.title}</h3>
            <p>{course.title2}</p>
          </div>
          <div className={styles.courseTeacher}>
            <span style={{display:'flex', alignItems: 'center'}}><FaRegUser style={{marginLeft: '10px'}}/>{course.teacher2}</span>
            <span>{course.satisfaction} <FaStar /></span>
          </div>
          <div className={styles.coursePrice}>
            <div className={styles.studentAllForApplay}>
              <FaRegUser />
              <span>{course.studentAll.toLocaleString("fa-IR")}</span>
            </div>
            {course.pricOFF && (
              <span className={styles.offPrice}>
                {Math.floor(((course.pricOFF - course.price) / course.pricOFF) * 100).toLocaleString('fa-IR')}٪ 
               </span> 
            )}
            <div>
              <s style={{ fontSize: '.9rem', color: 'var(--Font3--color)' }}>
                {course.pricOFF.toLocaleString('fa-IR')}
              </s>
              {course.price  && 
                <span style={{ color: '#08b642' }}>
                  {course.price.toLocaleString('fa-IR')} تومان
                </span>
              }
              
            </div>
          </div>
        </div>


      </>
  )
}

export default Card