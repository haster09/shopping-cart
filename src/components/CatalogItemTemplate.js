import addIcon from '../images/add-shopping-cart.svg'
import { openCart } from './Header';

const CatalogItemTemplate = ({product, getData}) => {

  const sendData = () => {
    getData({
      image: product.image,
      name: product.name,
      price: product.price,
      count: 1,
    })
    openCart();
  }

  return (
    <div className='product'>
      <img src={product.image} className='productImage' alt={product.name}/>
      <div className='productName'>{product.name}</div>
      <div className='productPreviousPrice'>{product.previousPrice ? `${product.previousPrice}$` : null}</div>
      <div className='productPrice'>{`${product.price}$`}</div>
      <div className='productBuy'><img className='productAddIcon' onClick={sendData} src={addIcon} alt='buy-item'/></div>
    </div>
  )
}

export default CatalogItemTemplate;