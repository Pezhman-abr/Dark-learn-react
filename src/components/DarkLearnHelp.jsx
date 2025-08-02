import { IoBookSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import styles from "./DarkLearnHelp.module.css"
import { FaPaste } from "react-icons/fa6";

function DarkLearnHelp() {
  return (
    <div className={styles.container}>
        <div>
            <span>ما چه کمکی میتونیم بهت بکنیم</span>
            <span style={{color:'var(--Font1-color)'}}> از شروع کنارتیم نمیزاریم آب تو دلت تکون بخوره</span>
        </div>
        <div className={styles.containerLastChild}>
            <div className={styles.helpInfo}>
                <div><IoBookSharp style={{color:'#1ac9e0'}} /></div>
                <div>
                    <span>تضمین کاملترین محتوا</span>
                    <span>بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.</span>
                </div>
                </div>
            <div className={styles.helpInfo}>
                <div><FaMessage style={{color:'#d6e01a'}} /></div>
                <div>
                    <span>پشتیبانی دائمی</span>
                    <span>هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.</span>
                </div>
                </div>
            <div className={styles.helpInfo}>
                <div><GiNetworkBars style={{color:'#03da4e'}} /></div>
                <div>
                    <span>پروژه محور در راستای بازار کار</span>
                    <span>کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.</span>
                </div>
                </div>
            <div className={styles.helpInfo}>
                <div><FaPaste style={{color:'#f63434'}} /></div>
                <div>
                    <span>سراغ حرفه ای ها رفتیم</span>
                    <span>به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.</span>
                </div>
                </div>
        </div>
    </div>
  )
}

export default DarkLearnHelp