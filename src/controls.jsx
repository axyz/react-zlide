import React from 'react';

import './controls.css';

export default class Controls extends React.Component {
    render() {
        const {
            goPreviousSlide,
            goNextSlide
        } = this.props;

        return(
            <div className="zlide_controls">
                <a className="zlide_controls_prev" href="#" onClick={goPreviousSlide}></a>
                <a className="zlide_controls_next" href="#" onClick={goNextSlide}></a>
            </div>
        );
    }
}

Controls.propTypes = {
    goPreviousSlide: React.PropTypes.func,
    goNextSlide: React.PropTypes.func
};
