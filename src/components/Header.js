import { Link } from 'react-router-dom';
import cart_svg from '../images/shopping-cart.svg'

const Header = () => {

  return (
    <>
      <div className='header' >
        <div className='title'><Link to='/'>COMPUTER HARDWARE</Link></div>
          <div className='navBar'>
            <div className='navItem'><Link to='/catalog'>CATALOG</Link></div>
            <div className='navItem'><img className='icon' src={cart_svg} alt='shopping-cart'/></div>
        </div>
      </div>
    </>
  )
}

export default Header;