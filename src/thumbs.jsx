import React, {Component, PropTypes} from 'react';

import './thumbs.css';

export default class Thumbs extends Component {
    handleThumbClick(index) {
        this.props.onThumbClick(index);
    }

    handleThumbOver(index) {
        this.props.onThumbOver(index);
    }

    render() {
        const {
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
              onClick={() => this.handleThumbClick(index)}
              onMouseEnter={() => this.handleThumbOver(index)}>
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
    onThumbClick: PropTypes.func,
    onThumbOver: PropTypes.func,
    thumbs: PropTypes.arrayOf(PropTypes.string),
    centerMode: PropTypes.bool,
    visibleSlides: PropTypes.number
};
