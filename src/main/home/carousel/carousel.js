import React from 'react';

import './carousel.css';

class Carousel extends React.Component {
    render() {
        return(
            <div id="banner" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#banner" data-slide-to="0" class="active"></li>
              <li data-target="#banner" data-slide-to="1"></li>
              <li data-target="#banner" data-slide-to="2"></li>
              <li data-target="#banner" data-slide-to="3"></li>
              <li data-target="#banner" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img class="first-slide" src="./images/banner.png" alt="First slide" />
                <div class="container">
                  <div class="carousel-caption">
                    <h1>WELCOM TO OUR WEB SITE</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the <br /> industry's standard dummy text ever since.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <img class="second-slide" src="./images/banner.png" alt="Second slide" />
                <div class="container">
                  <div class="carousel-caption">
                    <h1>WELCOM TO OUR WEB SITE</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the <br /> industry's standard dummy text ever since.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <img class="third-slide" src="./images/banner.png" alt="Third slide" />
                <div class="container">
                  <div class="carousel-caption">
                    <h1>WELCOM TO OUR WEB SITE</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the <br /> industry's standard dummy text ever since.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <img class="fourth-slide" src="./images/banner.png" alt="Fourth slide" />
                <div class="container">
                  <div class="carousel-caption">
                    <h1>WELCOM TO OUR WEB SITE</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the <br /> industry's standard dummy text ever since.
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <img class="fifth-slide" src="./images/banner.png" alt="Fifth slide" />
                <div class="container">
                  <div class="carousel-caption">
                    <h1>WELCOM TO OUR WEB SITE</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the <br /> industry's standard dummy text ever since.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="center-align">
            <a class="left carousel-control" href="#banner" role="button" data-slide="prev">
             <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
             <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#banner" role="true" data-slide="next">
             <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
             <span class="sr-only">Next</span>
            </a>
            </div>
          </div>
        );
    }
};

export default Carousel;