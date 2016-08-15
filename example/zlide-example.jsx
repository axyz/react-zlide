import React, { Component } from 'react';
import Zlide from 'react-zlide';
import { connect } from 'react-redux';
import * as actions from './action-creators';

class ZlideExample extends Component {
    render() {
        return(
            <div>
                <Zlide
                    currentSlide={this.props.currentSlide}
                    visibleSlides={this.props.visibleSlides}
                    centerMode={true}
                    circular={true}
                    lazy={true}
                    loadedList={this.props.loadedList}
                    onClick={(index) => this.props.dispatch(actions.goTo(index))}
                >
                    <img src="https://mosaic01.ztat.net/nvg/media/large_hd/NL/02/2H/00/QN/11/NL022H00Q-N11@16.jpg" />
                    <img src="https://mosaic01.ztat.net/nvg/media/large_hd/NL/02/2H/00/QN/11/NL022H00Q-N11@15.jpg" />
                    <img src="https://mosaic01.ztat.net/nvg/media/large_hd/NL/02/2H/00/QN/11/NL022H00Q-N11@14.jpg" />
                    <img src="https://mosaic01.ztat.net/nvg/media/large_hd/NL/02/2H/00/QN/11/NL022H00Q-N11@13.jpg" />
                    <img src="https://mosaic01.ztat.net/nvg/media/large_hd/NL/02/2H/00/QN/11/NL022H00Q-N11@12.jpg" />
                    <img src="https://mosaic01.ztat.net/nvg/media/large_hd/NL/02/2H/00/QN/11/NL022H00Q-N11@11.jpg" />
                    <img src="https://mosaic01.ztat.net/nvg/media/large_hd/NL/02/2H/00/QN/11/NL022H00Q-N11@10.jpg" />
                    <img src="https://mosaic01.ztat.net/nvg/media/large_hd/NL/02/2H/00/QN/11/NL022H00Q-N11@9.jpg" />
                </Zlide>
            
                <div
                    style={{ textAlign: 'center' }}
                >
                    <span
                        onClick={() => this.props.dispatch(actions.prev())}
                    >
                        prev
                    </span>
                    <span> | </span>
                    <span
                        onClick={() => this.props.dispatch(actions.next())}
                    >
                        next
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visibleSlides: state.visibleSlides,
        currentSlide: state.currentSlide,
        loadedList: state.loadedList,
    };
};

export default connect(mapStateToProps)(ZlideExample);
