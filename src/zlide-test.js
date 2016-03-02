import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Zlide from './zlide.jsx';

function getZlideMock(opts) {
    const defaultOpts = {
        props: {},
        children: []
    };
    const options = Object.assign({}, defaultOpts, opts);

    return shallow(
        React.createElement(Zlide, options.props, options.children)
    );
}

test('should have 1 zlide node', t => {
    const zlide = getZlideMock();

    t.is(zlide.find('.zlide').length, 1);
});

test('when in circular mode should have children + 1 slide nodes', t => {
    const zlide = getZlideMock({
        props: {
            circular: true
        },
        children: ['SLIDE-1', 'SLIDE-2', 'SLIDE-3']
    });

    t.is(zlide.find('.zlide_slide').length, 4);
});

test('when not in circular mode should have the same number of children and slide nodes', t => {
    const zlide = getZlideMock({
        props: {
            circular: false
        },
        children: ['SLIDE-1', 'SLIDE-2', 'SLIDE-3']
    });

    t.is(zlide.find('.zlide_slide').length, 3);
});
