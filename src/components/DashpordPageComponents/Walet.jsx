import React, { useState } from 'react'
import styles from './wallet.module.css'
import { useToast } from '../ToastContext';
function Walet() {

    const [price, setPrice] = useState(0)
      const {showToast} = useToast();

      
    
    const increaceWalet = () => {
        const getAmount = Number(localStorage.getItem('wallet')) || 0
         const newAmount = getAmount + Number(price)
        localStorage.setItem('wallet' , newAmount)
        const numberPrice = Number(price)
        showToast('success', `موجودی شما به مقدار  ${numberPrice.toLocaleString('fa-IR')} تومان افزایش یافت`)  
    }
    
  return (
    <div className={styles.container}>
        <span>افزایش موجودی کیف پول</span>
        <input type="number" onChange={e => setPrice(e.target.value)} placeholder='مبلغ را وارد کنید'  />
        <button onClick={increaceWalet} >شارژ کیف پول</button>
    </div>
  )
}

export default Walet