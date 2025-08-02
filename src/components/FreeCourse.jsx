
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import courseData from '../services/api'
import Card from './Card'
import styles from './FreeCourse.module.css'
import { IoMdArrowRoundBack } from "react-icons/io";

function FreeCourse() {
  return (
    <div className={styles.container}>
        <div>
            <div className={styles.freeCourseHeader}>
                <span>محبوب ترین دوره ها</span>
                <span style={{color:'var(--Font1-color)'}}>پرمخاطب ترین دوره های رایگان دارک لرن</span>
            </div>
            <Link to='courses' className={styles.moreCourses} >همه دوره ها <IoMdArrowRoundBack /></Link>
        </div>
        <div>
            {courseData.map((course) => (
                course.price === "" && <Card key={course.id} course={course} heigth="heigth" />
                
            ))}
        </div>
    </div>
  )
}

export default FreeCourse