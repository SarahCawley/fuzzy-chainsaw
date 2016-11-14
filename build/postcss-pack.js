/* 
	Configures PostCSS plugins for all webpack builds.

	The settings here map to the `postcss` property on the webpack configuration.
	These plugins apply to all webpack configurations for both the site and styleguide.
*/

const cssnext = require('postcss-cssnext');
const colorAlpha = require('postcss-color-alpha');
const cssimport = require('postcss-import');
const discardEmpty = require('postcss-discard-empty');
const lostGrids = require('lost');
const cssLoop = require('postcss-for');
const cssLoopAt = require('postcss-at-rules-variables');

module.exports = [
  cssimport(), // for importing global variables/custom-selectors
  cssLoopAt(),
  cssnext({
    warnForDuplicates: false
  }),
  cssLoop(),
  colorAlpha(),
  discardEmpty(),
  lostGrids()
];