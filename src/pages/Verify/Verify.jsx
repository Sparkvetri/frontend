import React, { useEffect } from 'react'
import './verify.css'
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios'

const Verify = () => {
    const [searchparams,setSearchparams] = useSearchParams();
    const success = searchparams.get("success")
    const orderId = searchparams.get("orderId")
     const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if (response.data.success) {
            navigate("/myorders");
        }else {
            navigate("/")
        }
    }
    useEffect(()=>{
        verifyPayment();
     },[])
  return (
    <div className='verify'>
    <div className="spinner"></div>
    </div>
  )
}

export default Verify