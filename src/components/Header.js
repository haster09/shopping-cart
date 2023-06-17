import { Link } from 'react-router-dom';
import cart_svg from '../images/shopping-cart.svg'

const Header = () => {

  const openCart = () => {
    setTimeout(() => {
      document.querySelector('.cart').style.transform =  'translate(-35vw)';
      document.querySelector('.cartBg').style.transform = 'translate(100vw)';
    }, 200);
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <div className='header' >
        <div className='title'><Link to='/'>COMPUTER HARDWARE</Link></div>
          <div className='navBar'>
            <div className='navItem'><Link to='/catalog'>CATALOG</Link></div>
            <div onClick={openCart} className='navItem'><img className='icon' src={cart_svg} alt='shopping-cart'/></div>
        </div>
      </div>
    </>
  )
}

export default Header;