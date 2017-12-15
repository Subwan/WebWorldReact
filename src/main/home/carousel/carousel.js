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

      // <div id="banner" className="carousel slide" data-ride="carousel">
      //   <ol className="carousel-indicators">
      //     <li data-target="#banner" data-slide-to="0" className="active"></li>
      //     <li data-target="#banner" data-slide-to="1"></li>
      //     <li data-target="#banner" data-slide-to="2"></li>
      //     <li data-target="#banner" data-slide-to="3"></li>
      //     <li data-target="#banner" data-slide-to="4"></li>
      //   </ol>
      //   <div className="carousel-inner" role="listbox">
      //     {itemList}
      //   </div>
      //   <div className="center-align">
      //     <a className="left carousel-control" href="#banner" role="button" data-slide="prev">
      //       <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
      //       <span className="sr-only">Previous</span>
      //     </a>
      //     <a className="right carousel-control" href="#banner" role="true" data-slide="next">
      //       <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
      //       <span className="sr-only">Next</span>
      //     </a>
      //   </div>
      // </div>
    );
  }
};

export default Carousel;