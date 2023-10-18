import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import {TbArrowDownRight} from "react-icons/tb"
export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo' >Games For You</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
          </div>
        )}


      </div>
      <div className='presentation'><video className="video"  muted autoplay={"autoplay"} preload="auto" loop><source src={require('./video/jake.mp4')} type="video/mp4" /></video></div>
      <div className='bottom'><TbArrowDownRight/></div>
    </header>
  )
}
