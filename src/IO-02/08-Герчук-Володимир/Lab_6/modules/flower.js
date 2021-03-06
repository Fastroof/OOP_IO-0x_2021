/** @module Flower */

import Bouquet from './bouquet.js';

/** Class representing a single flower. */
export default class Flower {
  /**
   * Create a flower.
   * @param {Number} len length of the flower.
   * @param {Number} price price of the flower.
   * @param {String} color color of the flower.
   * @param {Number} freshness level of freshness of the flower.
   */
  constructor(len, price, color, freshness) {
    if (parseFloat(len) < 0 || parseFloat(freshness) < 0) {
      throw new Error('Invalid arguments');
    }

    this.len = len;
    this.price = price;
    this.color = color;
    this.freshness = freshness;
    Bouquet.bouquet.push(this);
  }
}
