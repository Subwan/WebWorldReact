import React from 'react';

import SectionTwoItems from './items.js';

import './section-two.css';

function ItemList(props) {
    const item = props.item;
    return (
        <div className="section-two__item">
            <img src={item.src} />
            <div className="section-two__item-text">
                <h3 className="section-two__item-header_font-size"><b>{item.head}</b></h3>
                <p>{item.text}</p>
            </div>
        </div>
    );
}

class SectionTwo extends React.Component {
    render() {
        const itemList = SectionTwoItems.map((item, index) =>
            <ItemList key={index} item={item} />
        );
        return (
            <div className="section-two">
                <div className="section-two__background-image">
                    <div className="section-two__container">
                        {itemList}
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionTwo;