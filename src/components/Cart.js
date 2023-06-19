import CartItem from './CartItem';

const Cart = ({items, add, remove, sum, checkout}) => {

  const cartClose = async () => {
    setTimeout(() => {
      document.querySelector('.cart').style.transform =  'translate(35vw)';
      document.querySelector('.cartBg').style.transform = 'translate(-100vw)';
    }, 200);
    document.body.style.overflow = 'scroll';
    document.querySelector('.cartDiv').style.overflowY = 'hidden';

  }

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
          items.length === 0 ? 
          <div className='cartEmpty'>CART IS EMPTY :(</div> : 
          items.map((item) => {
            return <CartItem key={i++} add={add} remove={remove} item={item}/>;
        })}</div>
        <div className='footer'>
          <div className='sum'>{`Total: `}<span className='sumText'>{`${sum().toFixed(2)}$`}</span></div>
          <button onClick={checkout} className='checkout'>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart