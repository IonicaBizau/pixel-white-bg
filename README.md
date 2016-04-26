
# pixel-white-bg [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/pixel-white-bg.svg)](https://www.npmjs.com/package/pixel-white-bg) [![Downloads](https://img.shields.io/npm/dt/pixel-white-bg.svg)](https://www.npmjs.com/package/pixel-white-bg) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Set white background color for a pixel.

## :cloud: Installation

```sh
$ npm i --save pixel-white-bg
```


## :clipboard: Example



```js
const pixelWhiteBg = require("pixel-white-bg");

console.log(pixelWhiteBg({
    r: 255
  , g: 42
  , b: 7
  , a: 0.5
}));
// PixelClass { r: 255, g: 148.5, b: 131, a: 1 }
```

## :memo: Documentation


### `pixelWhiteBg(pixel)`
Set white background color for a pixel.

#### Params
- **Pixel** `pixel`: A [`Pixel`](https://github.com/IonicaBizau/pixel-class) instance.

#### Return
- **Pixel** The `Pixel` instance.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`asciify-pixel`](https://github.com/IonicaBizau/asciify-pixel#readme)—Asciifies a pixel object.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
