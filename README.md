react-zlide
===========

Lightweight and stateless slider component for React.js

Usage
-----
Add `react-zlide` as a dependency

`$ npm install --save react-zlide`

then simply use the provided components

Note that all the components are stateless, so updating the `currentSlide` should
be handled in the model of your app (e.g. using redux or similar flux
implementations)

The components are also unstyled (except for the slide layout and transform).

For the `Zlide` component to work correctly, please be sure to have support for
`calc`, `flex` and `transform` or eventually be sure to use polyfills.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import { Zlide, ZlidePrev, ZlideNext, ZlideThumbs } from 'react-zlide';

ReactDOM.render(
    <div>
        <Zlide
            currentSlide={0} // use your store to update it default to 0
            visibleSlides={3} // how many slides to show at once default to 3
            centerMode // default to true
            circular // infinite slideshow default to false
            onClick={(index) => console.log('slide click ' + index)}>

            ... // slides (e.g. <img> tags)

        </Zlide>

        // you may probably want to bind an action that updates the currentSlide
        // on your store to the `onClick` event
        <ZlidePrev onClick={() => console.log('prev click')}>

            prev

        </ZlidePrev>

        <ZlidePrev onClick={() => console.log('next click')}>

           next

        </ZlidePrev>

        <ZlideThumbs
            onClick={(index) => console.log('thumb click ' + index)}
            onOver={(index) => console.log('thumb over ' + index)}>

            ... // thumbs (e.g. smaller <img> tags)

        </ZlideThumbs>
    </div>,
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
