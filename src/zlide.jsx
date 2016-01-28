import React, {Component, PropTypes} from 'react';

import Slides from './slides.jsx';
import Controls from './controls.jsx';
import Thumbs from './thumbs.jsx';

import './zlide.css';

export default class Zlide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            onNextClick,
            onPrevClick
        } = this.props;

        return (
            <div className="zlide">
                <Slides {...this.props} />
                <Controls
                  onPrevClick={onPrevClick}
                  onNextClick={onNextClick}
                />
                <Thumbs {...this.props} />
            </div>
        );
    }
}

Zlide.propTypes = {
    currentSlide: PropTypes.number,
    visibleSlides: PropTypes.number,
    centerMode: PropTypes.bool,
    step: PropTypes.number,
    slides: PropTypes.arrayOf(PropTypes.string),
    thumbs: PropTypes.arrayOf(PropTypes.string),
    onPrevClick: PropTypes.func,
    onNextClick: PropTypes.func,
    onThumbOver: PropTypes.func,
    onThumbClick: PropTypes.func
};

Zlide.defaultProps = {
    currentSlide: 0,
    visibleSlides: 3,
    centerMode: true,
    step: 1,
    slides: [],
    thumbs: []
};
