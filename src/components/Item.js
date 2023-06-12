const Item = ({ item }) => {

  return (
    <div className='carousel-item'>
      <img className='carousel-img' src={item.image} alt='img'/>
    </div>
  )
}

export default Item;