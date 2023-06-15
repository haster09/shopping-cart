const SaleItemTemplate = ({product}) => {

  return (
    <div className='saleItem'>
      <img src={product.image} className='saleItemImage' alt={product.name}/>
      <div className='saleItemName'>{product.name}</div>
      <div className='saleItemPreviousPrice'>{`${product.previousPrice}$`}</div>
      <div className='saleItemPrice'>{`${product.price}$`}</div>
    </div>
  )
}

export default SaleItemTemplate;