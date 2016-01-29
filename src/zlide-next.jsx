import React, {Component, PropTypes} from 'react';

export default class ZlideNext extends Component {
    render() {
        const {
            onClick,
            children
        } = this.props;

        return(
            <div className="zlide_next"
                onClick={onClick}>
                {children}
            </div>
        );
    }
}

ZlideNext.propTypes = {
    onClick: PropTypes.func
};
