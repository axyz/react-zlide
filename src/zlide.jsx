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

    setupSlideChildren() {
        const {
            circular,
            children
        } = this.props;

        return circular
            ? [children[children.length - 1], ...children]
            : children;
    }

    renderSlide({ slideClass, slideStyle, slideChild, index }) {
        const {
            lazy,
            loadedList,
        } = this.props;
        const renderSlideChild = !lazy || (lazy && loadedList.indexOf(index) !== -1);
        return renderSlideChild
            ? (
                <li
                    key={'zlide-slide-' + index}
                    className={slideClass}
                    style={slideStyle}
                    onClick={() => this.handleClick(index)}
                >
                    {slideChild}
                </li>
            )
            : (
                <li key={`zlide-slide-${index}`} className="zlide_slide zlide_slide-lazy"></li>
            );
    }

    renderSlides(settings) {
        const {
            circular
        } = this.props;

        return circular
            ? this.renderCircularModeSlides(settings)
            : this.renderNormalModeSlides(settings);
    }

    renderNormalModeSlides({
        slideChildren,
        slideWidth,
    }) {
        const {
            currentSlide,
            loadedList,
            lazy,
        } = this.props;

        return slideChildren.map((slideChild, index) => {
            const slideStyle = {
<<<<<<< HEAD
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: `calc${calcSlideWidth}`,
=======
                flex: `0 0 calc${slideWidth}`,
>>>>>>> 35ee9db76c555100b39c9e9de84b9c5fbcf64031
                display: 'block'
            };

            let slideClass = 'zlide_slide';
            slideClass += index === currentSlide
                ? ' zlide_slide-current'
                : '';

            return this.renderSlide({ slideChild, slideClass, slideStyle, index });
        });
    }

    renderCircularModeSlides({
        slideChildren,
        slideWidth,
        pos,
        offset,
    }) {
        const {
            currentSlide,
            loadedList,
            children,
            lazy,
        } = this.props;
        const slideChildrenLength = slideChildren.length;
        const childrenLength = children.length;
        return slideChildren.map((slideChild, index) => {
            let slideClass = 'zlide_slide';
            let order = pos;

            if (pos >= 0) {
                if (index === pos) {
                    order = 0;
                } else if (index === 0) {
                    order = childrenLength;
                } else {
                    order = _cycleInt(slideChildrenLength - pos + index, slideChildrenLength);
                }
            } else {
                order = (index === 0) ? childrenLength : _cycleInt(index - pos, childrenLength);
            }

            const slideStyle = {
                order: order,
<<<<<<< HEAD
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: `calc${calcSlideWidth}`,
=======
                flex: `0 0 calc${slideWidth}`,
>>>>>>> 35ee9db76c555100b39c9e9de84b9c5fbcf64031
                display: 'block'
            };

            slideClass += index === Math.abs(_cycleInt(currentSlide + offset, slideChildrenLength))
                ? ' zlide_slide-current'
                : '';

            return this.renderSlide({ slideChild, slideClass, slideStyle, index });
        });
    }

    getStyle(calcSlideWidth, visibleSlides, offset) {
        const {
            currentSlide,
            circular,
            children,
            centerMode,
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
            className,
            visibleSlides,
            currentSlide,
            centerMode,
            circular,
            lazy,
            children
        } = this.props;

        const slideSize = Math.floor(visibleSlides / 2);
        const offset = centerMode ? slideSize : 0;
        const calcSlideWidth = `(100% / ${visibleSlides})`;
        const pos = _cycleInt(currentSlide - offset, children.length);
        const settings = {
            slideChildren: this.setupSlideChildren(),
            slideWidth: calcSlideWidth,
            pos,
            offset
        };
        const slides = this.renderSlides(settings);
        return (
<<<<<<< HEAD
            <ul className={className}
                style={this.getStyle(calcSlideWidth, visibleSlides, offset)}>
                {this.renderSlides(slides, pos, calcSlideWidth, offset)}
=======
            <ul
                className={className}
                style={this.getStyle(calcSlideWidth, offset)}
            >
                {slides}
>>>>>>> 35ee9db76c555100b39c9e9de84b9c5fbcf64031
            </ul>
        );
    }
}

Zlide.propTypes = {
    visibleSlides: PropTypes.number,
    currentSlide: PropTypes.number,
    centerMode: PropTypes.bool,
    circular: PropTypes.bool,
    lazy: PropTypes.bool,
    loadedList: PropTypes.arrayOf(PropTypes.number),
    easing: PropTypes.string,
    slidingDuration: PropTypes.number,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Zlide.defaultProps = {
    visibleSlides: 3,
    currentSlide: 0,
    centerMode: true,
    circular: false,
    lazy: false,
    loadedList: [],
    className: 'zlide',
    easing: 'ease-in-out',
    slidingDuration: 0.2,
    onClick: () => {},
};
