import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

class Menu extends React.Component {
    render() {
        return(
            <div className="menu">
              <div className="menu__container">
                <div className="menu__navigation">
                  <div className="menu__link-row">
                    <Link to="/home" className="menu__link">HOME</Link>
                    <Link to="/aboutus" className="menu__link">ABOUT US</Link>
                    <a href="#service" className="menu__link">SERVICE</a>
                    <a href="#pages" className="menu__link">PAGES</a>
                    <a href="#blog" className="menu__link">BLOG</a>
                    <a href="#contactus" className="menu__link">CONTACT US</a>
                  </div>
                </div>
                <div className="menu__search">
                  <input type="text" className="form-control search__field" placeholder="Search Something" />
                </div>
              </div>
            </div>
        );
    }
}

export default Menu;