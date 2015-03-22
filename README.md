# anchor-scroll

Smooth scrolling for anchor links using scroll-to-element

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
	duration: 1500
});

anchorScroll.destroy();

```


## Dependencies

- [closest](https://github.com/ForbesLindesay/closest): Find the closest parent that matches a selector.
- [object-assign](https://github.com/sindresorhus/object-assign): ES6 Object.assign() ponyfill
- [scroll-to-element](https://github.com/willhoag/scroll-to-element): Smooth scrolling to an element via selector or node reference


## License

MIT
