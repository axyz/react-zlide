import React, {Component, PropTypes} from 'react';

function _cycleInt(n, limit) {
    return n % limit;
}

export default class Zlide extends Component {
    handleClick(index) {
        this.props.onClick && this.props.onClick(index);
    }

    render() {
        const {
            visibleSlides,
            currentSlide,
            centerMode,
            className,
            easing,
            slidingDuration,
            circular,
            children
        } = this.props;

        const sideSize = Math.floor(visibleSlides / 2);
        const offset = centerMode ? sideSize : 0;
        const calcSlideWidth = `(100% / ${visibleSlides})`;
        const pos = _cycleInt(currentSlide - offset, children.length);
        const left = `calc((${calcSlideWidth} * ${currentSlide}) - ${calcSlideWidth})`;

        const style = {
            transform: `translate3d(calc(-1 * (${calcSlideWidth} * ${currentSlide})), 0, 0)`,
            transition: `transform ${slidingDuration}s 0s ${easing}`,
            left: left,
            position: 'relative',
            display: 'flex',
            padding: 0,
            margin: 0
        };

        let slides = [children[children.length - 1], ...children].map((slide, index, slides) => {
            let slideClass = 'zlide_slide';
            let order = pos;

            if (pos >= 0) {
                if (index === pos) {
                    order = 0;
                } else if (index === 0) {
                    order = children.length;
                } else {
                    order = _cycleInt(slides.length - pos + index, slides.length);
                }
            } else {
                order = (index === 0) ? children.length : _cycleInt(index - pos, children.length);
            }

            const slideStyle = {
                order: order,
                flex: `0 0 calc${calcSlideWidth}`,
                display: 'block'
            };

            slideClass += index === Math.abs(_cycleInt(currentSlide + offset, slides.length))
                ? ' zlide_slide-current'
                : '';

            return(
                <li className={slideClass}
                    key={'zlide-slide-' + index}
                    onClick={() => this.handleClick(index)}
                    style={slideStyle}>
                    {slide}
                </li>
            );
        });

        return (
            <ul className={className}
                style={style}>
                {slides}
            </ul>
        );
    }
}

Zlide.propTypes = {
    visibleSlides: PropTypes.number,
    currentSlide: PropTypes.number,
    centerMode: PropTypes.bool,
    circular: PropTypes.bool,
    easing: PropTypes.string,
    slidingDuration: PropTypes.number,
    className: PropTypes.string
};

Zlide.defaultProps = {
    visibleSlides: 3,
    currentSlide: 0,
    centerMode: true,
    className: 'zlide',
    easing: 'ease-in-out',
    slidingDuration: 0.2,
    circular: false
};
