'use strict';

/**
 * Gets cookies or a cookie
 * @param {String} [name] - cookie name
 * @returns {String|Object} - cookies or a cookie value
 */
function _get(name) {
  var cookies = document.cookie ? document.cookie.split('; ') : [];
  var result = {};

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split('=');
    result[decodeURIComponent(cookie[0])] = decodeURIComponent(cookie[1]);
  }

  return name ? result[name] : result;
}

/**
 * Sets a cookie
 * @param {String} name - cookie name
 * @param {String} value - cookie value
 * @param {Object} [options] - cookie options
 */
function _set(name, value, options) {
  options = options || {};

  if (value === null) {
    options.expires = -1;
  }

  if (typeof options.expires === 'number') {
    options.expires = new Date(new Date().getTime() + (options.expires * 1000));
  }

  document.cookie = [
    encodeURIComponent(name) + '=' + encodeURIComponent(value),
    options.expires ? '; expires=' + options.expires.toUTCString() : '',
    options.domain ? '; domain=' + options.domain : '',
    options.path ? '; path=' + options.path : '',
    options.secure ? '; secure' : ''
  ].join('');
}

/**
 * Gets or sets cookies
 * @param {String} [name] - cookie name
 * @param {String} [value] - cookie value
 * @param {Object} [options] - cookie options
 * @returns {String|Object} - cookies or a cookie value
 */
function _cookee(name, value, options) {
  if (arguments.length === 0) {
    return _get();
  } else if (arguments.length === 1) {
    return _get(name);
  }

  _set(name, value, options);
}

module.exports = _cookee;
