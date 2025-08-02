import styles from './DashboardBox.module.css'
import { IoMdCloseCircle } from "react-icons/io";
import { TfiHome } from "react-icons/tfi";
import { FaRegFolderOpen } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import { RiShutDownLine } from "react-icons/ri";
import Cookies from 'js-cookie'
import { useToast } from './ToastContext';
import { Link } from 'react-router-dom';



function DashboardBox({onClose}) {
    const { showToast } = useToast()

        const getUserInfo = JSON.parse(localStorage.getItem('user'))
        const getWalletInLoc = JSON.parse(localStorage.getItem('wallet')) || []

    const logoutHandler = () => {
        Cookies.remove('isLoggedIn')
        showToast('info' , 'خروج موفقیت آمیز بود')
    }
    
  return (
    <div className={styles.windowsModal}>
        <div className={styles.container}>
            <span onClick={onClose}><IoMdCloseCircle /></span>
            <div>
                <span>{getUserInfo.name.toUpperCase()}</span>
                <span style={{color: 'var(--bs-color)', fontSize: '0.7rem'}}>موجودی : {getWalletInLoc ? getWalletInLoc.toLocaleString('fa-IR') : '۰'} تومان</span>
            </div>
            <div>
                <ul>
                    <Link className={styles.btnLink} to='/DashboardPage/home'><li><TfiHome className={styles.profileIcons} />پیشخوان</li></Link>
                    <Link className={styles.btnLink} to='/DashboardPage/myCourse'><li><FaRegFolderOpen className={styles.profileIcons} />دوره های من</li></Link>
                    <Link className={styles.btnLink} to='/DashboardPage/tiket'><li><TiMessages className={styles.profileIcons} />تیکت های من</li></Link>
                    <Link className={styles.btnLink} to='/DashboardPage/profile'><li><CiUser className={styles.profileIcons} />جزعیات حساب</li></Link>
                </ul>
            </div>
            <div>
                <RiShutDownLine className={styles.profileIcons} />
                <span onClick={logoutHandler}>خروج</span>
            </div>
        </div>
    </div>
  )
}

export default DashboardBox