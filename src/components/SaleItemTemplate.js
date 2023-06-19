import addIcon from '../images/add-shopping-cart.svg'
import { Link } from 'react-router-dom';

const SaleItemTemplate = ({product}) => {

  return (
    <div className='saleItem'>
      <img src={product.image} className='saleItemImage' alt={product.name}/>
      <div className='saleItemName'>{product.name}</div>
      <div className='saleItemPreviousPrice'>{`${product.previousPrice}$`}</div>
      <div className='saleItemPrice'>{`${product.price}$`}</div>
      <div className='saleBuy'><Link to='/catalog'><img className='productAddIcon' src={addIcon} alt='buy-item'/></Link></div>
    </div>
  )
}

export default SaleItemTemplate;