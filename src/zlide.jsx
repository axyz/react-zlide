import React, {Component, PropTypes} from 'react';

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
            circular,
            children
        } = this.props;

        const sideSize = Math.floor(visibleSlides / 2);
        let offset = 0;

        if (centerMode) {
            offset = sideSize;

            if (circular) {
                if (currentSlide < sideSize) {
                    offset = offset - sideSize;
                } else if (currentSlide >= children.length - sideSize) {
                    offset = offset + sideSize;
                }
            }
        }

        const style = {
            transform: `translate3d(calc((100% / ${visibleSlides}) * -1 * ${currentSlide - offset}), 0, 0)`,
            position: 'relative',
            display: 'flex',
            padding: 0,
            margin: 0
        };

        const slideStyle = {
            flex: `0 0 calc(100% / ${visibleSlides})`,
            display: 'block'
        };

        let slides = children.map((slide, index) => {
            let slideClass = 'zlide_slide';

            slideClass += index === currentSlide ? ' zlide_slide-current' : '';

            return(
                <li className={slideClass}
                    key={'zlide-slide-' + index}
                    onClick={() => this.handleClick(index)}
                    style={slideStyle}>
                    {slide}
                </li>
            );
        });

        if (circular) {
            if (currentSlide < sideSize) {
                for (let i = 0; i < sideSize; i++) {
                    slides.unshift(slides.pop());
                }
            } else if (currentSlide >= sideSize) {
                for (let i = 0; i < sideSize; i++) {
                    slides.push(slides.shift());
                }
            }
        }


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
    className: PropTypes.string
};

Zlide.defaultProps = {
    visibleSlides: 3,
    currentSlide: 0,
    centerMode: true,
    className: 'zlide',
    circular: false
};
