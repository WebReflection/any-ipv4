'use strict';
/*! (c) Andrea Giammarchi - ISC */

const {networkInterfaces} = require('os');

class IPv4 extends Array {
  constructor() {
    super();
    for (const [_, values] of Object.entries(networkInterfaces())) {
      for (const {address, family, internal} of values) {
        if (!internal && family === 'IPv4') {
          /* c8 ignore start */
          if (_.startsWith('wl'))
            this.unshift(address);
          else
            this.push(address);
          /* c8 ignore end */
        }
      }
    }
  }
  toString() {
    return this.length ? this[0] : '0.0.0.0';
  }
}

module.exports = new IPv4;
