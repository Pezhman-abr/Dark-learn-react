import React from 'react'
import { FaBook } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

import styles from './Pishkhan.module.css'
import courseData from '../../services/api';
import Card from '../Card';

function Pishkhan() {

    const getUserInformation = JSON.parse(localStorage.getItem('viweCourse')) || []

        const matchedCourse = getUserInformation.length > 0 ?
         courseData.filter(course => getUserInformation.includes(course.id))
         : null;

         const getWalletInLoc = JSON.parse(localStorage.getItem('wallet')) || 0
        const getMyCourseInLoc = JSON.parse(localStorage.getItem('myCourse')) || 0
        

    const firstBox = [
        {
            id:1,
            icone : <FaBook color='#4fd09c' className={styles.twoBoxIcons} />,
            value : getMyCourseInLoc.length ? [getMyCourseInLoc.length.toLocaleString('fa-IR'),"دوره "] :  '۰',
            name : "دوره های من"
        },
        {
            id:2,
            icone : <IoNewspaperOutline color='#7f92e8' className={styles.twoBoxIcons} />,
            value : [0,'پرسش '],
            name : "پرسش و پاسخ"
        },
        {
            id:3,
            icone : <HiOutlineMailOpen color='#d2ec74' className={styles.twoBoxIcons} />,
            value : [0,'تیکت '],
            name : "تیکت ها"
        },
        {
            id:4,
            icone : <LiaMoneyBillWaveAltSolid color='#45af71' className={styles.twoBoxIcons} />,
            value : getWalletInLoc ? [getWalletInLoc.toLocaleString('fa-IR'),'تومان '] : '۰',
            name : "کیف پول"
        },
    ]


  return (
    <div>
        <div className={styles.firstBoxCon}>
            {firstBox.map(item => {
                return(
                    <div key={item.id} className={styles.infosBox}>
                        {item.icone}
                        <div>
                            <span>{item.value[0].toLocaleString('fa-IR')} {item.value[1]}</span>
                            <span>{item.name}</span>
                        </div>
                    </div>
                )
            })}
        </div>
            <span className={styles.viweStatuss}>اخیرا مشاهده شده</span>
        <div className={styles.statusViwe}>
            { getUserInformation.length > 0 ?
                (
                    matchedCourse.map(course => <div key={course.id} className={styles.card}>
                        <img className={styles.coursImages} src={course.image} alt={course.name} />
                        <h3 className={styles.coursename}>{course.title}</h3>
                         </div>)
                )
            : (<span>هنوز دوره مشاهده نکرده اید .</span>)}
        </div>
        <div></div>
    </div>
  )
}

export default Pishkhan