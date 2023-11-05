import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { TbArrowDownRight } from "react-icons/tb"
import Order from './Order';

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
  return (<div>{
    props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сумма:{new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}
const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нету :(</h2>
    </div>
  )
}

export default function Header(props) {
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
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}

          </div>
        )}


      </div>
      <div className='presentation'><video className="video" muted autoPlay={"autoplay"} preload="auto" loop><source src={require('./video/jake.mp4')} type="video/mp4" /></video></div>
      <div className='bottom'><TbArrowDownRight /></div>
    </header>
  )
}
