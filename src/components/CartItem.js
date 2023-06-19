import minus from '../images/minus.svg';
import plus from '../images/plus.svg';

const CartItem = ({item, remove, add}) => {

  return (
    <div className='cartItem' id={item.name}>
      <img className='cartItemImage' src={item.image} alt='product'/>
      <div className='cartItemName'>{item.name}</div>
      <div className='cartItemQuantity'>
        <button onClick={remove} className='cartItemButton'><img src={minus} alt='minus'/></button>
        <span className='cartItemNumber'>{item.count}</span>
        <button onClick={add} className='cartItemButton'><img src={plus} alt='plus'/></button>
      </div>
      <div className='cartItemPrice'>{`${(item.price * item.count).toFixed(2)}$`}</div>
    </div>
  )
}

export default CartItem;