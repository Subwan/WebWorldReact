import React from 'react';

import logo from '../assets/logo.png';

class Header extends React.Component {
    render() {
        return (
         <header className="header navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="nav navbar-header">
                <img className="navbar-brand header__brand" src={logo} alt="logo" />
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#social-bar" aria-expanded="false" aria-controls="social-bar">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                </button>
              </div>
      
              <div id="social-bar" className="navbar-collapse collapse navbar-right social-bar">
                <ul className="nav navbar-nav">
                  <li><a href="#rss">
                    <svg className="icon icon-rss social-bar__icon">
                      <use href="#icon-rss"></use>
                    </svg>
                  </a></li>
                  <li><a href="#fb">
                     <svg className="icon icon-facebook social-bar__icon">
                       <use href="#icon-facebook"></use>
                     </svg>
                  </a></li>
                  <li><a href="#twitter">
                    <svg className="icon icon-twitter social-bar__icon">
                      <use href="#icon-twitter"></use>
                    </svg>
                  </a></li>
                  <li><a href="#linkedin">
                    <svg className="icon icon-linkedin2 social-bar__icon">
                      <use href="#icon-linkedin2"></use>
                    </svg>
                  </a></li>
                </ul>
              </div>
            </div>
          </header>
        )
    }
}

export default Header;