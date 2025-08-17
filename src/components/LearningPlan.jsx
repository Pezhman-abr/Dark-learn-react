import clsx from 'clsx'
import { Link } from 'react-router-dom'
import courseData from '../services/api'
import styles from "./LearningPlan.module.css"

function LearningPlan() {
    
    const countByCategory = (category) => {
        return courseData.filter(course => course.category === category).length
    }


    
  return (
    <div className={styles.LearnPlanDiv}>
        <span>نقشه راه ها</span>
        <p>نقشه های راه برای شروع اصولی یادگیری</p>
        <div className={styles.container}>

            <Link to="courses?category=frontend" style={{textDecoration: "none"}}>
                <div className={clsx(styles.planBoxDetils , styles.frontEndPLan)}>
                    <img src="/image/monitor-code-svgrepo-com.svg" alt="" />
                    <span style={{padding:'10px 0'}}>فرانت اند</span>
                    <span>{countByCategory("frontend")} دوره </span>
                </div>
            </Link>
            <Link to={`/courses?category=security`} style={{textDecoration: "none"}}>
                <div className={ clsx(styles.planBoxDetils, styles.scurityPlan)}>
                    <img src="/image/security-protection-shield-done-tick-check-svgrepo-com.svg" alt="" />
                    <span style={{padding:'10px 0'}}>امنیت</span>
                    <span>{countByCategory("security")} دوره </span>
                </div>
            </Link>
            <Link to={`/courses?category=python`} style={{textDecoration: "none"}}>
                <div className={clsx(styles.planBoxDetils, styles.phytonPlan)}>
                    <img src="/image/python-16-svgrepo-com.svg" alt="" />
                    <span style={{padding:'10px 0'}}>پایتون</span>
                    <span>{countByCategory("python")} دوره </span>
                </div>
            </Link>
            <Link to={`/courses?category=sowtware`} style={{textDecoration: "none"}}>
                <div className={clsx(styles.planBoxDetils, styles.sowftwarePlan)}>
                    <img src="/image/puzzle-piece-02-svgrepo-com.svg" alt="" />
                    <span style={{padding:'10px 0'}}>مهارت های نرم</span>
                    <span>{countByCategory("sowtware")} دوره </span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default LearningPlan