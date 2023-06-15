import products from './products';
import SaleItemTemplate from './SaleItemTemplate';

const Sale = () => {

  const productsOnSale = (arr = []) => {
    for (let product of products) {
      if (product.discount) {
        arr.push(product);
      }
    }
    return arr;
  }

  let i = 0;

  return (
    <div className='saleContainer'>
      {
        productsOnSale().map((product) => {
          return <SaleItemTemplate key={i++} product={product}/>
        })
      }
    </div>
  )
}

export default Sale;