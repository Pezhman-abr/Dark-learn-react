import React from 'react'
import styles from './Pishkhan.module.css'
import courseData from '../../services/api';
import { FaRegUser } from "react-icons/fa";

function MyCourse() {

        const getUserInformation = JSON.parse(localStorage.getItem('myCourse')) || []

        const matchedCourse = getUserInformation.length > 0 ?
         courseData.filter(course => getUserInformation.includes(course.id))
         : null;
    
    
  return (
        <>
                <span className={styles.mayCourseSpan}>دوره های من</span>
            <div className={styles.statusViwe}>
                { getUserInformation.length > 0 ?
                    (
                        matchedCourse.map(course => <div key={course.id} className={styles.card}>
                            <img className={styles.coursImages} src={course.image} alt={course.name} />
                            <h3 className={styles.coursename}>{course.title}</h3>
                            <span className={styles.teacherName}><FaRegUser style={{marginLeft: '10px'}}/>{course.teacher2}</span>
                            
                             </div>)
                    )
                : (<span>شما هنوز دوره ای خریداری نکرده اید.</span>)}
            </div>
        </>
  )
}

export default MyCourse