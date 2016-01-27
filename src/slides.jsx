import React from 'react';

import './slides.css';

export default class Slides extends React.Component {
    render() {
        const {
            visibleSlides,
            currentSlide,
            centerMode
        } = this.props;

        const offset = centerMode ? Math.floor(visibleSlides / 2) : 0;

        const slidesStyle = {
            transform: `translate3d(calc((100% / ${visibleSlides}) * -1 * ${currentSlide - offset}), 0, 0)`
        };

        const slideStyle = {
            flex: `0 0 calc(100% / ${visibleSlides})`
        };

        const images = this.props.images.map((image, index) => {
            let slideClass = 'zlide_slide';

            // find out the slide at the border and add a fade modifier
            if (centerMode) {
                slideClass += Math.abs((index - currentSlide)) === Math.floor((visibleSlides / 2))
                    ? ' zlide_slide-fade'
                    : '';
            }

            slideClass += index === currentSlide ? ' zlide_slide-current' : '';

            return(
                <li className={slideClass} key={'carousel-slide-' + index}
                  style={slideStyle}>
                    <img className="zlide_slide_img" src={image} />
                </li>
            );
        });

        return (
            <ul className="zlide_slides"
              style={slidesStyle}>
                {images}
            </ul>
        );
    }
}

Slides.propTypes = {
    visibleSlides: React.PropTypes.number,
    currentSlide: React.PropTypes.number,
    centerMode: React.PropTypes.bool
};
