import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.about}>
          <h3 style={{color:"var(--bs-color)", fontSize:"1.2rem"}}>دارک لرن</h3>
          <p>آموزش برنامه‌نویسی با تمرکز بر بازار کار، پروژه‌محور و رایگان</p>
        </div>

        <div className={styles.links}>
          <h4 style={{color:"var(--bs-color)", fontSize:"1.2rem"}}>لینک‌های مفید</h4>
          <ul>
            <li><Link to="/">صفحه اصلی</Link></li>
            <li><Link to="/courses">دوره‌ها</Link></li>
            <li><Link to="/contact">تماس با ما</Link></li>
            <li><Link to="/about">درباره ما</Link></li>
          </ul>
        </div>

        <div className={styles.categories}>
          <h4 style={{color:"var(--bs-color)", fontSize:"1.2rem"}}>دسته‌بندی‌ها</h4>
          <ul>
            <li><Link to="/courses?category=frontend">فرانت‌اند</Link></li>
            <li><Link to="/courses?category=backend">بک‌اند</Link></li>
            <li><Link to="/courses?category=security">امنیت</Link></li>
            <li><Link to="/courses?category=tools">ابزارها</Link></li>
          </ul>
        </div>

        <div className={styles.trust}>
          <h4 style={{color:"var(--bs-color)", fontSize:"1.2rem"}}>اعتماد شما</h4>
          <img src="/image/Group2.png" alt="نماد اعتماد" />
        </div>

      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} سبزلرن | تمامی حقوق محفوظ است.
      <p className={styles.developer}>Developed by Pezhman with ❤️</p>
      </div>
    </div>
  );
}

export default Footer