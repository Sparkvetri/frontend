 import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home page/Home'
import Footer from './components/Footer/Footer';
import LogInPopup from './components/LoginPopup/LogInPopup';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/Place Order/PlaceOrder';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';
     
 const App = () => {
  const [showLogin,setShowLogin] = useState(false);
   return (
    <>
    {showLogin?<LogInPopup setShowLogin={setShowLogin} />:<></>}
     <div className='app'> 
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='/myorders' element={<MyOrders/>} />
       </Routes>
      </div>
      <Footer/>
      </> )
 }
 
 export default App