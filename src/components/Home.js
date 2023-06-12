import first from '../images/1.jpg';
import second from '../images/2.jpg';
import third from '../images/3.jpg';
import Item from './Item.js';
import { useState } from 'react'; 

const Home = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (activeIndex === 2) {
      setActiveIndex(0);
    } 
    else {
      setActiveIndex(activeIndex+1);
    }
  }

  const previous = () => {
    if (activeIndex === 0) {
      setActiveIndex(2);
    }
    else {
      setActiveIndex(activeIndex-1);
    }
  }

  const items =  [
    {
      title: '1',
      image: first
    },
    {
      title: '2',
      image: second
    },
    {
      title: '3',
      image: third
    }
  ]

  return (
    <div className='carousel'>
      <div className='images'
      style={{ transform:  `translate(-${activeIndex * 100}%)`}}>
        {items.map((item) => {
        return <Item item={item}/>
      })}</div>
      <div className='carouselButtons'>
        <button className='carouselPrevious' onClick={previous}>prev</button>
        <button className='carouselNext'onClick={next}>next</button>
      </div>
    </div>

  );
}

export default Home;