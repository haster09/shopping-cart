import { Link } from 'react-router-dom'

const CatalogNav = () => {
  return (
  <div className='catalogNav'>
    <Link className='catalogNavTitle' to ='/catalog'>PARTS</Link>
    <Link className='catalogNavLink' to='/catalog/cpu'>CPU</Link>
  </div>
  )
}

export default CatalogNav;