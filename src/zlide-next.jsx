import React, {Component, PropTypes} from 'react';

export default class ZlideNext extends Component {
    render() {
        const {
            onClick,
            children,
            className
        } = this.props;

        return(
            <div className={className}
                onClick={onClick}>
                {children}
            </div>
        );
    }
}

ZlideNext.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
};

ZlideNext.defaultProps = {
    className: 'zlide_next'
};
