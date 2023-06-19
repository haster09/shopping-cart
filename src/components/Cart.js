import CartItem from './CartItem';
import { useState, useEffect } from 'react';

const Cart = ({items}) => {

  const cartClose = () => {
    setTimeout(() => {
      document.querySelector('.cart').style.transform =  'translate(35vw)';
      document.querySelector('.cartBg').style.transform = 'translate(-100vw)';
    }, 200);
  }

  const [ cartItems, setCartItems ] = useState([])

  const add = (e) => {
    for (let item of cartItems) {
      if (item.name.toString() === e.target.parentNode.parentNode.parentNode.id) {
        item.count += 1;
      }
    }
    setCartItems(cartItems.concat())
  }

  const remove = (e) => {
    for (let item of cartItems) {
      if (item.name.toString() === e.target.parentNode.parentNode.parentNode.id) {
        if (item.count === 1) {
          setCartItems(cartItems.splice(cartItems.indexOf(item), 1))
          console.log()
        }
        else {
          item.count -= 1;
        }
      }
    }
    setCartItems(cartItems.concat())
  }

  useEffect(() => {
    setCartItems(items)
  },[items])

  let i = 0;

  return (
    <div className='cartDiv'>
      <div className='cartBg' onClick={cartClose}></div>
      <div className='cart'>
        <div className='cartHeader'>
          <button onClick={cartClose} type='button' className='cartClose'>x</button>
          <div className='cartTitle'>cart</div>
        </div>
        <div className='cartItems'>{
          cartItems.length === 0 ? 
          <div className='cartEmpty'>CART IS EMPTY :(</div> : 
          cartItems.map((item) => {
            return <CartItem key={i++} remove={remove} add={add} item={item}/>;
        })}</div>
      </div>
    </div>
  )
}

export default Cart