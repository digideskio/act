/**
 * -----------------------------------------------------------------------------
 * ACT UNIT TESTS SETUP: helpers
 * -----------------------------------------------------------------------------
 * @author Adam Smith <adam@imaginate.life> (https://github.com/imaginate)
 * @copyright 2017 Adam A Smith <adam@imaginate.life> (https://github.com/imaginate)
 *
 * Supporting Libraries:
 * @see [vitals]{@link https://github.com/imaginate/vitals}
 * @see [log-ocd]{@link https://github.com/imaginate/log-ocd}
 *
 * Annotations:
 * @see [JSDoc3]{@link http://usejsdoc.org/}
 * @see [Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 */

'use strict';

global.assert = require('assert');
global.act = require('../../act.js');
global.log = require('log-ocd')();

require('node-vitals')('base', 'fs').mkGlobal();

log.error.setConfig({
  'logger': logError,
  'throw':  false,
  'exit':   false
});

log.error.setFormat({
  'linesAfter': 2
});

log.fail.setFormat({
  'linesAfter': 0,
  'header': {
    'spaceBefore': 0,
    'spaceAfter':  0,
    'accentMark': ''
  }
});

log.fail.setStyle({
  'header': {
    'color': 'red',
    'bg': ''
  }
});

/**
 * @param {string} result
 */
function logError(result) {
  result = remap(result, /\n/g, '\n    ');
  result = fuse('  ', result);
  console.log(result);
}
