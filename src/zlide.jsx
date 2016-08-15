import React, {Component, PropTypes} from 'react';

function _cycleInt(n, limit) {
    return n % limit;
}

function _boundInt(n, lower, upper) {
    if (n < lower) return lower;
    if (n > upper) return upper;
    return n;
}

export default class Zlide extends Component {
    handleClick(index) {
        this.props.onClick && this.props.onClick(index);
    }

    setupSlides() {
        const {
            circular,
            children
        } = this.props;

        return circular
            ? [children[children.length - 1], ...children]
            : children;
    }

    renderSlide(slide, className, style, index) {
        return(
            <li className={className}
              key={'zlide-slide-' + index}
              onClick={() => this.handleClick(index)}
              style={style}>
                {slide}
            </li>
        );
    }

    renderSlides(slides, pos, calcSlideWidth, offset) {
        const {
            circular
        } = this.props;

        return circular
            ? this.renderCircularModeSlides(slides, pos, calcSlideWidth, offset)
            : this.renderNormalModeSlides(slides, pos, calcSlideWidth, offset);
    }

    renderNormalModeSlides(slides, pos, calcSlideWidth, offset) {
        const {
            children,
            currentSlide
        } = this.props;

        return slides.map((slide, index) => {
            let slideClass = 'zlide_slide';
            const slideStyle = {
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: `calc${calcSlideWidth}`,
                display: 'block'
            };

            slideClass += index === currentSlide
                ? ' zlide_slide-current'
                : '';

            return this.renderSlide(slide, slideClass, slideStyle, index);
        });
    }

    renderCircularModeSlides(slides, pos, calcSlideWidth, offset) {
        const {
            children,
            currentSlide
        } = this.props;

        return slides.map((slide, index) => {
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
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: `calc${calcSlideWidth}`,
                display: 'block'
            };

            slideClass += index === Math.abs(_cycleInt(currentSlide + offset, slides.length))
                ? ' zlide_slide-current'
                : '';

            return this.renderSlide(slide, slideClass, slideStyle, index);
        });
    }

    getStyle(calcSlideWidth, visibleSlides, offset) {
        const {
            circular,
            children,
            centerMode,
            currentSlide,
            slidingDuration,
            easing
        } = this.props;

        const left = circular
            ? `calc((${calcSlideWidth} * ${currentSlide}) - ${calcSlideWidth})`
            : 0;

        const translateXValue = -1 * (100 / visibleSlides) * currentSlide;
        const translateXXValue = -1 * (100 / visibleSlides) * (currentSlide - offset);
        const transform = circular
            ? `translateX(${translateXValue}%)`
            : `translateX(${translateXXValue})`;

        return {
            transform,
            transition: `transform ${slidingDuration}s 0s ${easing}`,
            left,
            position: 'relative',
            display: 'flex',
            padding: 0,
            margin: 0
        };
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
        const offset = centerMode ? sideSize : 0;
        const calcSlideWidth = `(100% / ${visibleSlides})`;
        const pos = _cycleInt(currentSlide - offset, children.length);

        const slides = this.setupSlides();

        return (
            <ul className={className}
                style={this.getStyle(calcSlideWidth, visibleSlides, offset)}>
                {this.renderSlides(slides, pos, calcSlideWidth, offset)}
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
