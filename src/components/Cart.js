const Cart = () => {

  const cartClose = () => {
    setTimeout(() => {
      document.querySelector('.cart').style.transform =  'translate(35vw)';
      document.querySelector('.cartBg').style.transform = 'translate(-100vw)';
    }, 200);
    document.body.style.overflow = 'visible';
  }

  const cartItems = [];

  return (
    <>
      <div className='cartBg'></div>
      <div className='cart'>
        <div className='cartHeader'>
          <button onClick={cartClose} type='button' className='cartClose'>x</button>
          <div className='cartTitle'>cart</div>
        </div>
        <div className='cartItems'>{cartItems ? <div className='cartEmpty'>CART IS EMPTY :(</div> : cartItems.map((item) => {
          return null;
        })}</div>
      </div>
    </>
  )
}

export default Cart