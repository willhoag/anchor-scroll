anchorScroll = require('./');

anchorScroll.init({
	updateUrl: true,
	offset: 0,
	ease: 'out-bounce',
	duration: 1500,
	selector: '.smooth-scroll' // default a[href*='#']
});

anchorScroll.destroy();
