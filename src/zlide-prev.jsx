import React, {Component, PropTypes} from 'react';

export default class ZlidePrev extends Component {
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

ZlidePrev.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
};

ZlidePrev.defaultProps = {
    className: 'zlide_prev'
};
