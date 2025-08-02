import { FcPrevious , FcNext } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import courseData from "../services/api";
import Card from "./Card"
import styles from "./ScrollCard.module.css"

// const data = courseData.filter(course => {
//   return(
//     course.studentAll > 1500 && course.price > 0
//   )
// })
const data = courseData.filter(course => {
  const courseYear = new Date(course.apdateData).getFullYear();
  return  courseYear >= 2024;
});

function ScrollCard2() {
  return (
    
    <div className={styles.container}>
      <div className={styles.papulerCourseHeader}>
      <span>جدیدترین ها</span>
      <span style={{color:'var(--Font1-color)'}}>دوره های جدید, فرصت های نو</span>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation = {{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }}
        autoplay={{
          delay: 3000,     // هر ۳ ثانیه اسلاید بعدی
          disableOnInteraction: false, // حتی بعد از تعامل کاربر، ادامه بده
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          300: {slidesPerView: 1},
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        
      >
      <div className="custom-prev"><FcPrevious /></div>
      <div className="custom-next"><FcNext /></div>

        {data.map((course) => (
          <SwiperSlide key={course.id}>
            <div className={styles.scrollBox}>
                  <Card course={course} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export  default ScrollCard2