import React from 'react';
import ReactDOM from 'react-dom';

import {Zlide, ZlidePrev, ZlideNext, ZlideThumbs} from 'react-zlide';

ReactDOM.render(
    <div>
        <Zlide
            currentSlide={0}
            visibleSlides={3}
            centerMode
            circular
            onClick={(index) => console.log('slide click ' + index)}>
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@16.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@15.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@14.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@13.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@12.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@11.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@10.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@9.jpg" />
        </Zlide>

        <ZlidePrev
            onClick={() => console.log('prev click')}>
            prev
        </ZlidePrev>
        <ZlidePrev
           onClick={() => console.log('next click')}>
           next
        </ZlidePrev>
        <ZlideThumbs
            onClick={(index) => console.log('thumb click ' + index)}
            onOver={(index) => console.log('thumb over ' + index)}>
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@16.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@15.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@14.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@13.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@12.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@11.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@10.jpg" />
            <img src="https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@9.jpg" />
        </ZlideThumbs>
    </div>,
    document.getElementById('zlide-example')
);
