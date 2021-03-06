"use strict";

const pixelBg = require("pixel-bg");

/**
 * pixelWhiteBg
 * Set white background color for a pixel.
 *
 * @name pixelWhiteBg
 * @function
 * @param {Pixel} pixel A [`Pixel`](https://github.com/IonicaBizau/pixel-class) instance.
 * @returns {Pixel} The `Pixel` instance.
 */
module.exports = function pixelWhiteBg (pixel) {
    return pixelBg(pixel, {
        r: 255
      , g: 255
      , b: 255
    });
};
