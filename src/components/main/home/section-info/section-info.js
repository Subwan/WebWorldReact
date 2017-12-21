import React from 'react';

import TagItems from './tag-item.js';

import './section-info.css';

class ItemList extends React.Component {
    render() {
        const {
            item
          } = this.props;
        return   [
         item.marked ? (
              <a className="info__link"><mark>{item.text}</mark></a>
            ) : (
              <a className="info__link">{item.text}</a>
            ) 
          ]
    }
}


class SectionInfo extends React.Component {
    render() {
        const items = TagItems.map((item, index) =>
            <ItemList key={index} item={item} />
        );
        return (
            <div className="info">
                <div className="info__container">
                    <div className="info__item">
                        <h3 className="info__h3">Popular Post</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        <div className="info__date">
                            <svg className="icon icon-clock info__clock info__img">
                                <use href="#icon-clock"></use>
                            </svg>
                            <span className="name info__date_margin">25-September 2013</span>
                        </div>
                        <hr className="info__hr" />
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        <div className="info__date">
                            <svg className="icon icon-clock info__clock info__img">
                                <use href="#icon-clock"></use>
                            </svg>
                            <span className="name info__date_margin">25-September 2013</span>
                        </div>
                    </div>
                    <div className="info__item">
                        <h3 className="info__h3">Tags</h3>
                        <div className="info__tags">{items}</div>
                    </div>
                    <div className="info__item">
                        <h3 className="info__h3">A little about us</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't
                            look even slightly believeble.<br /><br /> If you are going to use a passege of Lirem
                            Ipsum,you need to be sure there isn't anything.
                        </p>
                    </div>
                    <div className="info__item">
                        <h3 className="info__h3">Get in touch</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                            has been the industry's standard dummy text ever since.
                        </p>
                        <ul className="info__contacts">
                            <li>
                                <svg className="icon icon-map-marker info__img info__contact-img">
                                    <use href="#icon-map-marker"></use>
                                </svg>
                                <span className="name info__contact-text_margin">Texas, US</span>
                            </li>
                            <li>
                                <svg className="icon icon-envelope info__img info__contact-img">
                                    <use href="#icon-envelope"></use>
                                </svg>
                                <a href="mailto:" className="info__link info__contact-text_margin">email@email.com</a>
                            </li>
                            <li>
                                <svg className="icon icon-phone info__img info__contact-img">
                                    <use href="#icon-phone"></use>
                                </svg>
                                <a href="tel:8900988045590" className="info__link info__contact-text_margin">890-09880-45590</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionInfo;