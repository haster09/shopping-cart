const CatalogItemTemplate = ({product}) => {

  return (
    <div className='product'>
      <img src={product.image} className='productImage' alt={product.name}/>
      <div className='productName'>{product.name}</div>
      <div className='productPreviousPrice'>{product.previousPrice ? `${product.previousPrice}$` : null}</div>
      <div className='productPrice'>{`${product.price}$`}</div>
    </div>
  )
}

export default CatalogItemTemplate;