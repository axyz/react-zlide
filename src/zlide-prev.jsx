import React, {Component, PropTypes} from 'react';

export default class ZlidePrev extends Component {
    render() {
        const {
            onClick,
            children
        } = this.props;

        return(
            <div className="zlide_prev"
                onClick={onClick}>
                {children}
            </div>
        );
    }
}

ZlidePrev.propTypes = {
    onClick: PropTypes.func
};
