import React from 'react';

import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__rights">
                        <p className="no-margin">2013 Web world. All rights reserved. Theme by cssautther</p>
                    </div>
                    <div className="footer__social" className="social-links">
                        <a href="#rss" className="social-link">
                            <svg className="icon icon-rss social-bar__icon">
                                <use href="#icon-rss"></use>
                            </svg>
                        </a>
                        <a href="#fb" className="social-link">
                            <svg className="icon icon-facebook social-bar__icon">
                                <use href="#icon-facebook"></use>
                            </svg>
                        </a>
                        <a href="#twitter" className="social-link">
                            <svg className="icon icon-twitter social-bar__icon">
                                <use href="#icon-twitter"></use>
                            </svg>
                        </a>
                        <a href="#linkedin" className="social-link">
                            <svg className="icon icon-linkedin2 social-bar__icon">
                                <use href="#icon-linkedin2"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;