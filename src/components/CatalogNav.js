import { Link } from 'react-router-dom'

const CatalogNav = () => {
  return (
  <div className='catalogNav'>
    <Link className='catalogNavTitle' to ='/catalog'>PARTS</Link>
    <Link className='catalogNavLink cpuLink' to='/catalog/cpu'>CPU</Link>
    <Link className='catalogNavLink gpuLink' to='/catalog/gpu'>GPU</Link>
    <Link className='catalogNavLink moboLink' to='/catalog/mobo'>MOBO</Link>
    <Link className='catalogNavLink ssdLink' to='/catalog/ssd'>SSD</Link>
  </div>
  )
}

export default CatalogNav;