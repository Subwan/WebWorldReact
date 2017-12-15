import React from 'react';

import Carousel from './carousel/carousel.js';
import SectionOne from './section-one/section-one.js';

class Home extends React.Component {
    render() {
        return(
          <div>
            <Carousel />
            <SectionOne />
          </div>  
        );
    }
}

export default Home;