import React, { useEffect, useState } from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";
import styles from './GoToUpBtn.module.css'




function GoToUpBtn() {
  const [isVisible, setIsVisible] = useState(false);

  // کنترل اسکرول برای نمایش دکمه‌ها
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 900);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;
 
  return (
        <div className={styles.container}>
      <button className={styles.button} onClick={scrollToTop}><FaAngleDoubleUp /></button>
    </div>
  )
}

export default GoToUpBtn