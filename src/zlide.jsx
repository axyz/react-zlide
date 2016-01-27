import React from 'react';

import Slides from './slides.jsx';
import Controls from './controls.jsx';
import Thumbs from './thumbs.jsx';

import './zlide.css';

export default class Zlide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: props.initialSlide
        };
    }

    goNextSlide() {
        const {
            visibleSlides,
            slides,
            centerMode,
            step
        } = this.props;

        const {
            currentSlide
        } = this.state;

        const maximumIndex = centerMode
            ? slides.length - step
            : slides.length - visibleSlides + step;

        if (currentSlide + step <= maximumIndex) {
            this.setState({
                currentSlide: currentSlide + step
            });
        }
    }

    goPreviousSlide() {
        if (this.state.currentSlide >= this.props.step) {
            this.setState({
                currentSlide: this.state.currentSlide - this.props.step
            });
        }
    }

    goToSlide(index) {
        this.setState({
            currentSlide: index
        });
    }

    render() {
        const {
            slides,
            thumbs,
            visibleSlides,
            centerMode
        } = this.props;

        const {
            currentSlide
        } = this.state;

        return (
            <div className="zlide">
                <Slides
                  images={slides}
                  visibleSlides={visibleSlides}
                  currentSlide={currentSlide}
                  centerMode={centerMode}
                />
                <Controls
                  goPreviousSlide={() => this.goPreviousSlide()}
                  goNextSlide={() => this.goNextSlide()}
                />
                <Thumbs
                  thumbs={thumbs}
                  visibleSlides={visibleSlides}
                  centerMode={centerMode}
                  goToSlide={(slide) => this.goToSlide(slide)}
                />
            </div>
        );
    }
}

Zlide.propTypes = {
    initialSlide: React.PropTypes.number,
    visibleSlides: React.PropTypes.number,
    centerMode: React.PropTypes.bool,
    step: React.PropTypes.number,
    slides: React.PropTypes.arrayOf(React.PropTypes.string),
    thumbs: React.PropTypes.arrayOf(React.PropTypes.string)
};

Zlide.defaultProps = {
    initialSlide: 0,
    visibleSlides: 3,
    centerMode: true,
    step: 1,
    slides: [],
    thumbs: []
};
