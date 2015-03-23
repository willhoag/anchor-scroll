var closest = require('closest');
var assign = require('object-assign');
var scrollTo = require('scroll-to-element');

var eventHandler;

function destroy() {
  document.removeEventListener('click', eventHandler, false);
}

function init(options) {

  destroy();

  options = assign({
    updateUrl: true
  }, options);

  eventHandler = function(ev) {
    var link = closest(ev.target, "a[href*='#']", true);
    if (link) {
      ev.preventDefault();
      if (history.pushState && options.updateUrl) {
        history.pushState(null, null, link.hash || '#');
      }
      scrollTo(link.hash || 'html', options);
    }
  };

  document.addEventListener('click', eventHandler, false);
}

module.exports = {
  init: init,
  destroy: destroy
};
