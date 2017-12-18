import React from 'react';
import Slider from 'react-slick';

import CarouselItems from './items.js';

import './carousel.css';

function ItemList(props) {
  const item = props.item;
  return (
    <div className="item">
      <img src={item.src} alt="Slide" />
      <div className="item__caption">
        <h1>{item.head}</h1>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    ></div>
  );
}

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
    const items = CarouselItems;
    const itemList = items.map((item) =>
      <div> <ItemList item={item} /> </div>
    );
    return (
      <div className="carousel">
        <Slider {...settings}>
          {itemList}
        </Slider>
      </div>
    );
  }
};

export default Carousel;