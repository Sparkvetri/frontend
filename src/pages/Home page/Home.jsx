import React, { useState } from 'react';
import './home.css';
import Header from '../../components/Navbar/Header/Header';
import ExploreMenu from '../../components/Explore menu/ExploreMenu'
import FoodDisplay from  '../../components/Food_display/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
 
const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <>
   <Header/>
   <ExploreMenu category={category} setCategory={setCategory}/>
   <FoodDisplay category={category}/>
   <AppDownload/>
      </>
  )
}

export default Home