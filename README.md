react-zlide
===========

Lightweight slider component for React.js

Usage
-----
Add `react-zlide` as a dependency
`$ npm install --save react-zlide`

then simply use the `Zlide` component

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Zlide from 'react-zlide';

ReactDOM.render(
    <Zlide
        slides={['path/to/img', 'path/to/img']}
        thumbs={['path/to/thumb', 'path/to/thumb']}
        initialSlide={0} // *optional set the starting slide
        visibleSlides={3} // *optional set how many slides to be shown at once (default 3)
        centerMode={true} // *optional enable centered mode (default true)
        step={1} // *optional how many items to slide when clicking next or prev (default 1)
    />,
    document.getElementById('zlide-example')
);

```

Development
-----------
Clone the repository then
`$ npm install`

use
`$ make dist`
to build

and
`make dev`
to start a dev server on `localhost:8080`

Warnings
--------
This component should not not be considered ready for production (until it will reach 1.0.0),
however testing and contributions are really welcome.
