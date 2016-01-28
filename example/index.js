import React from 'react';
import ReactDOM from 'react-dom';

import Zlide from 'react-zlide';

ReactDOM.render(
    <Zlide
        slides={[
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@16.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@15.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@14.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@13.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@12.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@11.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@10.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@9.jpg',
        ]}
        thumbs={[
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@16.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@15.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@14.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@13.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@12.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@11.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@10.jpg',
            'https://secure-i2.ztat.net//detail/NL/02/2H/00/QN/11/NL022H00Q-N11@9.jpg',
        ]}
    currentSlide={0}
    onSlideClick={(index) => console.log('slide click ' + index)}
    onThumbClick={(index) => console.log('thumb click ' + index)}
    onThumbOver={(index) => console.log('thumb over ' + index)}
    onNextClick={() => console.log('next click')}
    onPrevClick={() => console.log('prev click')}
    />,
    document.getElementById('zlide-example')
);
