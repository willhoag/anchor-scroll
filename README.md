# anchor-scroll

Smooth scrolling for anchor links using scroll-to-element

[![NPM](https://nodei.co/npm/anchor-scroll.png)](https://nodei.co/npm/anchor-scroll/)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install anchor-scroll --save
```

## Usage

```js
anchorScroll = require("anchor-scroll");

anchorScroll.init({
	updateUrl: true,
	offset: 0,
	ease: 'out-bounce',
	duration: 1500,
	selector: '.smooth-scroll' // default a[href*='#']
});

anchorScroll.destroy();

```


## Dependencies

- [closest](https://github.com/ForbesLindesay/closest): Find the closest parent that matches a selector.
- [object-assign](https://github.com/sindresorhus/object-assign): ES6 Object.assign() ponyfill
- [scroll-to-element](https://github.com/willhoag/scroll-to-element): Smooth scrolling to an element via selector or node reference


## License

MIT
