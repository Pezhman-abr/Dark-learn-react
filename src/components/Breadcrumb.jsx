import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import courseData from '../services/api'
import { FaHome } from "react-icons/fa";
import styles from './Breadcrumb.module.css'

function Breadcrumb() {
    const [searchParams] = useSearchParams()
    const courseId = Number(searchParams.get('id'))
    const title = courseData.filter(course => course.id === courseId) || ""
    // console.log(title);
    
    
  return (
    <div className={styles.breadcrumb}>
        <Link to='/' className={styles.link} ><FaHome /></Link>
        <span className={styles.separator}>/</span>
        <Link to='/courses' className={styles.link} >دوره ها</Link>
        <span className={styles.separator}>/</span>
        <span className={styles.current}>{title[0].name}</span>
    </div>
  )
}

export default Breadcrumb