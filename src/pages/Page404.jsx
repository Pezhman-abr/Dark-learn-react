import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Page404.module.css";
import MainLayout from "../layouts/MainLayout";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>

    <div className={styles.container} dir="rtl">
      <div className={styles.box}>
        <h1 className={styles.code}>۴۰۴</h1>
        <h2 className={styles.title}>صفحه پیدا نشد</h2>
        <p className={styles.text}>
          صفحه‌ای که دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد.
        </p>
        <button className={styles.button} onClick={() => navigate("/")}>
          بازگشت به خانه
        </button>
      </div>
    </div>
    </MainLayout>
  );
};

export default Page404;
