import React, {Component, PropTypes} from 'react';

import './controls.css';

export default class Controls extends Component {
    render() {
        const {
            onNextClick,
            onPrevClick
        } = this.props;

        return(
            <div className="zlide_controls">
                <a className="zlide_controls_prev" href="#" onClick={onPrevClick}></a>
                <a className="zlide_controls_next" href="#" onClick={onNextClick}></a>
            </div>
        );
    }
}

Controls.propTypes = {
    goPreviousSlide: PropTypes.func,
    goNextSlide: PropTypes.func
};
