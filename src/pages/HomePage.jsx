import styles from "./HomePage.module.css"

import courseData from "../services/api"
import { Link } from "react-router-dom"
import LearningPlan from "../components/LearningPlan"
import ScrollCard from '../components/ScrollCard'
import Card from '../components/Card'
import DarkLearnHelp from "../components/DarkLearnHelp"
import ScrollCard2 from "../components/ScrollCard2"
import FreeCourse from "../components/FreeCourse"
import SearchBox from "../components/SearchBox"
import GlowBall from "../components/GlowBall"

import { IoMdArrowRoundBack } from "react-icons/io";
import GoToUpBtn from "../components/GoToUpBtn"




function HomePage() {

    const TotalTime = courseData.reduce((sum,c) => sum + c.time, 0)

    const TotalCourseStudent = courseData.reduce((sum, c) => sum + c.studentAll , 0).toLocaleString()

    
  return (

    <div>
        <nav>
        <div className={styles.container}>
          <h1 className={styles.h1elm}>دارک لرن,اولین گام برنامه نویس شدن</h1>
          <p className={styles.pelm}>با آکادمی خصوصی دارک لرن,علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن</p>
          <img className={styles.bannerimage} src="image/banner.webp" alt="banner" />
          <SearchBox />
          <div className={styles.courseInfoBox}>
            <div className={styles.courseAbout}>
                <img src="image/book-min.webp" alt="bookImage" />
                <span>{courseData.length}</span>
                <span>دوره آموزشی</span>
            </div>
            <div className={styles.courseAbout}>
                <img src="image/clock-min.webp" alt="clockImage" />
                <span>{TotalTime}</span>
                 <span>ساعت آموزش</span>
            </div>
            <div className={styles.courseAbout}>
                <img src="image/conversation-min.webp" alt="conversationImage" />
                <span>{TotalCourseStudent}</span>
                <span>دانشجو</span>
            </div>
          </div>
        </div>
        </nav>
        <GoToUpBtn />
        <section>
        <div className={styles.firstSectionTitle}>
            <div>
                <span>آخرین دوره های ما </span>
                <p style={{color:'var(--Font1-color)'}}>سکوی پرتاب شما به سمت موفقیت</p>
            </div>
            <GlowBall color="#f73bf49c" location="left" value={0} />
            <Link to='courses' className={styles.moreCourses} >همه دوره ها <IoMdArrowRoundBack /> </Link>
        </div>
        <div className={styles.levelUpCourse}>
            {courseData.slice(1,13).map(course => (
              <Card key={course.id} course={course} />
            ))}
        </div>
        </section>
          <section>
            <GlowBall color="rgba(0, 255, 255, 0.5)" location="rigth" value={0} />
            <LearningPlan />
          </section>
          <section >
            <GlowBall color='rgba(255, 80, 80, 0.6)' location='left'value={0} />
            <ScrollCard/>
          </section>
          <section>
            <GlowBall color='#fa963e' location='rigth'value={0} />
            <DarkLearnHelp />
          </section>
          <section>
            <GlowBall color='rgba(180, 80, 255, 0.6)' location='left' value={0}/>
            <ScrollCard2 />
          </section>
          <section>
            <GlowBall color='#b7e2fb' location='rigth' value={0}/>
            <FreeCourse />
          </section>
    </div>
  )
}

export default HomePage