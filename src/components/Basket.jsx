import React, { useEffect, useState } from 'react'
import courseData from '../services/api';
import styles from './Basket.module.css'
import { useToast } from './ToastContext';
import { useNavigate } from 'react-router-dom';
function Basket({onClose}) {
    const [carts, setCarts] = useState([])
    const { showToast } = useToast()
    const navigate = useNavigate()
    useEffect(()=>{
        const buyProductId = JSON.parse(localStorage.getItem('productId')) || []
        const cart = courseData.filter(course => buyProductId.includes(course.id))
        // console.log(cart);
        setCarts(cart)
       

},[])
        const RemoweHandler = (id) => {
            const currentIds = JSON.parse(localStorage.getItem('productId')) || [];
            const updatedIds = currentIds.filter(pid => pid !== id);
            localStorage.setItem('productId', JSON.stringify(updatedIds));
            
            const updatedCart = carts.filter(item => item.id !== id);
            setCarts(updatedCart);
          showToast("info", "محصول از سبد خرید شما حذف شد.")
        }

    
         const isEmpty = carts.length === 0;
        const totalPrice = carts.reduce((total,item) => total + item.price, 0)

        const buyBtnHandler =() => {
          const getBuyID = carts.map(item => item.id)
          const getWalletInLoc = Number(localStorage.getItem('wallet'))
          const getMyCourseInLoc = JSON.parse(localStorage.getItem('myCourse')) || []

          console.log(getMyCourseInLoc);
          

          if(getWalletInLoc >= totalPrice  ){
            const combinedCourse = [...new Set([...getMyCourseInLoc, ...getBuyID])]
            localStorage.setItem('myCourse', JSON.stringify(combinedCourse))
            localStorage.removeItem('productId')
            const newWallet = getWalletInLoc - totalPrice;
            localStorage.setItem('wallet', newWallet)
            showToast('success' , "خرید با موفقت انجام شد")
            navigate('/DashboardPage/myCourse')
          }else{
            showToast('error', 'موجودی کافی نیست')
          }

          
          
        }
    
    
 
  

  return (
    <div className={styles.blurModal}>
        
      <div className={isEmpty ? styles.emptyBasket : styles.fullBasket}>
        {/* Header */}
        <div className={styles.basketHeaderBox}>
          <span>سبد خرید من</span>
          <span>{carts.length.toLocaleString('fa-IR')} دوره</span>
          <button className={styles.closeBsketBox} onClick={onClose}>X</button>
        </div>

        {/* Content */}
        <div className={styles.buyProductsInfo}>
          {isEmpty ? (
            <span>سبد خرید شما خالی است!</span>
          ) : (
            carts.map((item) => (
              <div className={styles.fullBasketInfoBox} key={item.id}>
                <img
                  className={styles.buyProductImg}
                  src={item.image}
                  alt={item.name}
                />
                <div className={styles.pruductNameBox}>
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                </div>
                <button className={styles.removeProduct} onClick={() => RemoweHandler(item.id)}>🗑</button>
              </div>
            ))
          )}
        </div>
          {carts.length ? (<div className={styles.totalPriceBox}>
          <div>
            <span style={{color:'#000'}}>مبلغ قابل پرداخت:</span>
            <span style={{color:'#000'}}>{Number(totalPrice).toLocaleString('fa-IR')} تومان </span>
          </div>
          <button onClick={buyBtnHandler}>مشاهده سبد خرید</button>
        </div>) : ('')}
        
      </div>
    </div>
  );
}


export default Basket

{/* {cart.map(item => (
        <h1>{item.title}</h1>
       ))} */}