import React from 'react';

import Carousel from './carousel/carousel.js';
import SectionOne from './section-one/section-one.js';
import SectionTwo from './section-two/secion-two.js';
import SectionInfo from './section-info/section-info.js';

class Home extends React.Component {
    render() {
        return(
          <div>
            <Carousel />
            <SectionOne />
            <SectionTwo />
            <SectionInfo />
          </div>  
        );
    }
}

export default Home;