import React, {Component, PropTypes} from 'react';

export default class ZlideThumbs extends Component {
    handleClick(index) {
        this.props.onClick(index);
    }

    handleOver(index) {
        this.props.onOver(index);
    }

    render() {
        const {
            children
        } = this.props;

        const thumbnails = children.map((thumb, index) =>
            <li className="zlide_thumb"
                key={'zlide-thumb-' + index}
                onClick={() => this.handleClick(index)}
                onMouseEnter={() => this.handleOver(index)}>
                {thumb}
            </li>
        );

        return(
            <ul className="zlide_thumbs">
                {thumbnails}
            </ul>
        );
    }
}

ZlideThumbs.propTypes = {
    onClick: PropTypes.func,
    onOver: PropTypes.func,
    thumbs: PropTypes.arrayOf(PropTypes.string)
};
