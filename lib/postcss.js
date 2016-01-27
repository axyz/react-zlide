var postcssImport = require('postcss-import');
var postcssBemLinter = require('postcss-bem-linter');
var postcssNested = require('postcss-nested');
var postCssCalc = require('postcss-calc');
var autoprefixer = require('autoprefixer');
var postcssMixins = require('postcss-mixins');

function bemSelector (block, opts) {
    var ns = (opts && opts.namespace) ? opts.namespace + '-' : '';
    var WORD = '[a-z]+(?:[a-zA-Z0-9]+)*';
    var element = '(?:_' + WORD + ')';
    var modifier = '(?:(?:-' + WORD + '){1,2})?';
    return new RegExp(
        '^(\\.' + ns + block + modifier + ')+$' +
        '|^(\\.' + ns + block + element + modifier + ')+$'
    );
}

module.exports = {
    processors: [
        postcssMixins(),
        postcssNested(),
        postCssCalc(),
        autoprefixer(),
        postcssBemLinter({
            componentName: /[a-z]+(?:[a-zA-Z0-9]+)*/,
            componentSelectors: bemSelector
        })
    ]
};
