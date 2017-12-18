import React from 'react';

import './section-one.css';

class SectionOne extends React.Component {
    render() {
        return (
            <div className="section-one">
                <div className="section-one__main-text">
                    <h1 className="section-one__top-header">
                        LOREM IPSUM IS <b>SIMPLY DUMMY</b> TEXT OF THE PRINTING.
                    </h1>
                    <p className="section-one__top-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It hassurvived not only five centuries.
                    </p>
                </div>
                <div className="section-one__tabs">
                    <div className="section-one__tab-one section-one__tab">
                        <a>
                            <svg className="icon icon-display section-one__icon">
                                <use href="#icon-display"></use>
                            </svg>
                        </a>
                        <h2 className="section-one__tabs-header_font-size"><b>Lorem Ipsum</b> is simpli</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting of the industry. Lorem Ipsum has been</p>
                    </div>
                    <div className="section-one__tab-two section-one__tab">
                        <a>
                            <svg className="icon icon-edit section-one__icon">
                                <use href="#icon-edit"></use>
                            </svg>
                        </a>
                        <h2 className="section-one__tabs-header_font-size"><b>Lorem Ipsum</b> is simpli</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting of the industry. Lorem Ipsum has been</p>
                    </div>
                    <div className="section-one__tab-three section-one__tab">
                        <a>
                            <svg className="icon icon-image section-one__icon">
                                <use href="#icon-image"></use>
                            </svg>
                        </a>
                        <h2 className="section-one__tabs-header_font-size"><b>Lorem Ipsum</b> is simpli</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting of the industry. Lorem Ipsum has been</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionOne;