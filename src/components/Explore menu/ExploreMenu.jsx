import React from 'react';
import './exploremenu.css';
import { menu_list } from '../../assets/assets';


const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore Our Menu</h1>
        <p className='exploremenu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="exploremenu-list">
             {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='exploremenu-list-item'>
                        <img src={item.menu_image}  className={category===item.menu_name?"active":""} alt="" />
                        <p className='exploremenu-text'>{item.menu_name}</p>
                    </div>
                )
             }) }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu