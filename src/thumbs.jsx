import React from 'react';

import './thumbs.css';

export default class Thumbs extends React.Component {
    handleMouseEnter(index) {
        this.props.goToSlide(index);
    }

    render() {
        const {
            handleMouseEnter,
            thumbs,
            centerMode,
            visibleSlides
        } = this.props;

        const thumbsStyle = centerMode
            ? {
                width: `calc(100% / ${visibleSlides})`,
                margin: 'auto'
            }
            : {};

        const thumbnails = thumbs.map((thumb, index) =>
            <li className="zlide_thumb"
              key={'zlide-thumb-' + index}
              onMouseEnter={() => this.handleMouseEnter(index)}>
                <img className="zlide_thumb_img" src={thumb} />
            </li>
        );

        return(
            <ul className="zlide_thumbs"
              style={thumbsStyle}>
                {thumbnails}
            </ul>
        );
    }
}

Thumbs.propTypes = {
    goToSlide: React.PropTypes.func,
    thumbs: React.PropTypes.arrayOf(React.PropTypes.string),
    centerMode: React.PropTypes.bool,
    visibleSlides: React.PropTypes.number
};
