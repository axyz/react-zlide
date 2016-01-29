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
            children,
            className
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
            <ul className={className}>
                {thumbnails}
            </ul>
        );
    }
}

ZlideThumbs.propTypes = {
    onClick: PropTypes.func,
    onOver: PropTypes.func,
    className: PropTypes.string
};

ZlideThumbs.defaultProps = {
    className: 'zlide_thumbs'
};
