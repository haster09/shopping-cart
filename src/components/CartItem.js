const CartItem = ({item}) => {
  return (
    <div className='cartItem'>
      <div className='cartItemImage'>{item.image}</div>
      <div className='cartItemName'>{item.name}</div>
      <div className='cartItemQuantity'>1</div>
    </div>
  )
}

export default CartItem;