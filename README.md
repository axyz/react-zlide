react-zlide
===========

Lightweight and stateless slider component for React.js

Usage
-----
Add `react-zlide` as a dependency
`$ npm install --save react-zlide`

then simply use the `Zlide` component

Note that this is a stateless component, so updating the `currentSlide` should
be handled in the model of your app (e.g. using redux or similar flux
implementations)

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Zlide from 'react-zlide';

// postcss inlined style seems not to work on isomorphic apps due to the usage
// of window global object that is not available on server side.
// temporarily I'm extracting the css on a separate file, but I'm looking for
// and open to suggestions for more elegant solutions.
import 'react-zlide/dist/react-zlide.css' // needs webpack css loader

ReactDOM.render(
    <Zlide
        slides={['path/to/img', 'path/to/img']}
        thumbs={['path/to/thumb', 'path/to/thumb']}
        currentSlide={0} // set the current slide (default 0)
        onSlideClick={(i) => ...} // action to call when clicking on slide with index `i`
        onThumbClick={(i) => ...} // action to call when clicking on thumb with index `i`
        onThumbOver={(i) => ...} // action to call when mouse enters on thumb with index `i`
        onNextClick={() => ...} // action to call when clicking on next button
        onPrevClick={() => ...} // action to call when clicking on previous button
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
