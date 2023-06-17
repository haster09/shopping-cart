const CarouselItem = ({ item }) => {

  return (
      <img className='carousel-img' src={item.image} alt='carousel-img'/>
  )
}

export default CarouselItem;