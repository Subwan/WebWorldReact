import React from 'react';

import CarouselItems from './items.js';
import './carousel.css';

function ItemList(props) {
    const item = props.item;
    return (
     <div className="item">
      <img className="first-slide" src={item.src} alt="Slide" />
      <div className="container">
        <div className="carousel-caption">
          <h1>{item.head}</h1>
          <p>{item.text}</p>
        </div>
      </div>
     </div>
    );
}

 
class Carousel extends React.Component {
    render() {
      const items = CarouselItems;
      const itemList = items.map((item) =>
         <ItemList item={item} />
      );
      return(
        <div id="banner" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#banner" data-slide-to="0" className="active"></li>
            <li data-target="#banner" data-slide-to="1"></li>
            <li data-target="#banner" data-slide-to="2"></li>
            <li data-target="#banner" data-slide-to="3"></li>
            <li data-target="#banner" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
           {itemList}           
          </div>
          <div className="center-align">
            <a className="left carousel-control" href="#banner" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#banner" role="true" data-slide="next">
             <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
             <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        );
    }
};

export default Carousel;