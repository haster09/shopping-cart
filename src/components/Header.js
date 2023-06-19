import { Link } from 'react-router-dom';
import cart_svg from '../images/shopping-cart.svg';
import { useEffect } from 'react';

export const openCart = () => {
  document.querySelector('.cartDiv').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.cart').style.transform =  'translate(-35vw)';
    document.querySelector('.cartBg').style.transform = 'translate(100vw)';
  }, 200);
  document.body.style.overflow = 'hidden';
  document.querySelector('.cartDiv').style.overflowY = 'scroll';
}

const Header = ({count}) => {

  useEffect(() => {
    if (count === 0) {
      document.querySelector('.itemsCounter').classList.add('none');
    }
    else {
      document.querySelector('.itemsCounter').classList.remove('none');
    }
  })

  return (
    <>
      <div className='header' >
        <div className='title'><Link to='/'>COMPUTER HARDWARE</Link></div>
          <div className='navBar'>
            <div className='navItem'><Link to='/catalog'>CATALOG</Link></div>
            <div onClick={openCart} className='navItem'><img className='icon' src={cart_svg} alt='shopping-cart'/><div className='itemsCounter none'>{count}</div></div>
        </div>
      </div>
    </>
  )
}

export default Header;