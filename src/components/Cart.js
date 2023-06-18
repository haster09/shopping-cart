import CartItem from './CartItem';
import { useState, useEffect } from 'react';

const Cart = ({items}) => {

  const cartClose = () => {
    setTimeout(() => {
      document.querySelector('.cart').style.transform =  'translate(35vw)';
      document.querySelector('.cartBg').style.transform = 'translate(-100vw)';
    }, 200);
    document.body.style.overflow = 'visible';
  }

  const [ cartItems, setCartItems ] = useState([])

  useEffect(() => {
    setCartItems(items)
  },[items])

  let i = 0;

  return (
    <>
      <div className='cartBg'></div>
      <div className='cart'>
        <div className='cartHeader'>
          <button onClick={cartClose} type='button' className='cartClose'>x</button>
          <div className='cartTitle'>cart</div>
        </div>
        <div className='cartItems'>{
          cartItems.length === 0 ? 
          <div className='cartEmpty'>CART IS EMPTY :(</div> : 
          cartItems.map((item) => {
            return <CartItem key={i++} item={item}/>;
        })}</div>
      </div>
    </>
  )
}

export default Cart