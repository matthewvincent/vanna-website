module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(50);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _coreLocation = __webpack_require__(4);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(11);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(20);
    }, '/500': function _() {
      return __webpack_require__(21);
    }, '/': function _() {
      return __webpack_require__(22);
    }, '/merch': function merch() {
      return __webpack_require__(23);
    }, '/photos': function photos() {
      return __webpack_require__(24);
    }, '/tour': function tour() {
      return __webpack_require__(25);
    }, '/videos': function videos() {
      return __webpack_require__(26);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "034638b527df16c29e89f9df0d02198f.png";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(5);

  var _historyLibCreateBrowserHistory = __webpack_require__(47);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(48);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(49);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(27);

  var _albumsConfigJs = __webpack_require__(7);

  var _albumsConfigJs2 = _interopRequireDefault(_albumsConfigJs);

  var _staticVannaAlbumLogoPng = __webpack_require__(43);

  var _staticVannaAlbumLogoPng2 = _interopRequireDefault(_staticVannaAlbumLogoPng);

  var _staticPromo1Png = __webpack_require__(3);

  var _staticPromo1Png2 = _interopRequireDefault(_staticPromo1Png);

  var AlbumPromo = function AlbumPromo() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: 'album-promo' },
        _react2['default'].createElement(AlbumLogo, null)
      ),
      _react2['default'].createElement(
        AlbumTeaser,
        null,
        _react2['default'].createElement('iframe', {
          width: '560',
          height: '315',
          src: 'https://www.youtube.com/embed/aJ5YacpvT1E',
          frameBorder: '0',
          allowFullscreen: true
        })
      ),
      _react2['default'].createElement(
        'div',
        { className: 'release-info' },
        _react2['default'].createElement(
          'h1',
          null,
          'IN STORES JULY 8, 2016'
        ),
        _react2['default'].createElement(
          PreorderButton,
          {
            link: 'http://smarturl.it/VannaMA'
          },
          ' BUY CD/LP'
        ),
        _react2['default'].createElement(
          PreorderButton,
          {
            link: 'http://geni.us/AllHell'
          },
          ' BUY DIGITAL'
        )
      ),
      _react2['default'].createElement(MusicSection, { config: _albumsConfigJs2['default'] })
    );
  };

  var AlbumLogo = function AlbumLogo() {
    return _react2['default'].createElement('img', {
      src: _staticVannaAlbumLogoPng2['default'],
      className: 'album-logo'
    });
  };

  var AlbumTeaser = function AlbumTeaser(props) {
    return _react2['default'].createElement(
      'div',
      { className: 'album-teaser' },
      _react2['default'].createElement(
        'div',
        { className: 'video-background' },
        _react2['default'].createElement(
          'div',
          { className: 'responsive-video-wrapper' },
          props.children
        )
      )
    );
  };

  var PreorderButton = function PreorderButton(props) {
    return _react2['default'].createElement(
      'a',
      {
        className: 'preorder-button',
        href: props.link
      },
      _react2['default'].createElement(
        'span',
        { className: 'preorder-text' },
        props.children
      )
    );
  };

  var MusicSection = function MusicSection(_ref) {
    var config = _ref.config;

    var albums = config.map(function (album) {
      return _react2['default'].createElement(AlbumLinks, {
        key: album.title,
        image: album.thumbnail,
        spotifyLink: album.spotifyLink,
        appleLink: album.appleLink,
        title: album.title,
        storeLink: album.storeLink
      });
    });

    return _react2['default'].createElement(
      'div',
      { className: 'music-section' },
      _react2['default'].createElement(
        'div',
        { className: 'album-links-wrapper' },
        albums
      )
    );
  };

  var AlbumLinks = function AlbumLinks(_ref2) {
    var image = _ref2.image;
    var spotifyLink = _ref2.spotifyLink;
    var appleLink = _ref2.appleLink;
    var title = _ref2.title;
    var storeLink = _ref2.storeLink;
    return _react2['default'].createElement(
      'div',
      { className: "promoted-album" },
      _react2['default'].createElement(
        'a',
        { href: storeLink },
        _react2['default'].createElement('img', {
          className: 'promoted-album-thumbnail',
          src: image
        })
      ),
      _react2['default'].createElement(
        'div',
        { className: 'listen-links' },
        _react2['default'].createElement(
          'a',
          {
            className: 'spotify-link',
            href: spotifyLink
          },
          _react2['default'].createElement('i', {
            className: 'link-icon fa fa-spotify',
            'aria-hidden': 'true'
          }),
          'SPOTIFY'
        ),
        _react2['default'].createElement(
          'a',
          {
            className: 'apple-link',
            href: appleLink
          },
          _react2['default'].createElement('i', {
            className: 'link-icon fa fa-apple',
            'aria-hidden': 'true'
          }),
          'APPLE MUSIC'
        )
      )
    );
  };

  exports['default'] = AlbumPromo;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  		value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _staticVoidCoverPng = __webpack_require__(46);

  var _staticVoidCoverPng2 = _interopRequireDefault(_staticVoidCoverPng);

  var _staticAltCoverPng = __webpack_require__(40);

  var _staticAltCoverPng2 = _interopRequireDefault(_staticAltCoverPng);

  var _staticAllHellCoverPng = __webpack_require__(38);

  var _staticAllHellCoverPng2 = _interopRequireDefault(_staticAllHellCoverPng);

  var albums = [{
  		title: "AllHell",
  		spotifyLink: "https://play.spotify.com/album/6RyarsWHerKBebREiObwgk",
  		appleLink: "http://geni.us/AllHell",
  		thumbnail: _staticAllHellCoverPng2['default'],
  		storeLink: "http://smarturl.it/VannaMA"
  }, {
  		title: "Void",
  		spotifyLink: "https://play.spotify.com/album/0qH0QizOeIbULmQVXq3sEj",
  		appleLink: "http://geni.us/VANNAALT?app=itunes",
  		thumbnail: _staticVoidCoverPng2['default'],
  		storeLink: "http://smarturl.it/VannaMA"
  }, {
  		title: "ALT",
  		spotifyLink: "https://play.spotify.com/album/0CO124UhDKHk172wfuWpUO",
  		appleLink: "http://geni.us/VANNAVOID?app=itunes",
  		thumbnail: _staticAltCoverPng2['default'],
  		storeLink: "http://smarturl.it/VannaMA"
  }];

  exports['default'] = albums;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(28);

  var _socialConfigJs = __webpack_require__(9);

  var _socialConfigJs2 = _interopRequireDefault(_socialConfigJs);

  var Footer = function Footer(_ref) {
    var mobile = _ref.mobile;
    return _react2['default'].createElement(
      'footer',
      {
        className: mobile ? "mobile-footer" : "footer"
      },
      _react2['default'].createElement(Social, { config: _socialConfigJs2['default'] })
    );
  };

  var Social = function Social(_ref2) {
    var config = _ref2.config;
    return _react2['default'].createElement(
      'div',
      { className: 'social-wrapper' },
      _react2['default'].createElement(SocialLinks, { config: config })
    );
  };

  var SocialLinks = function SocialLinks(_ref3) {
    var config = _ref3.config;

    var socialList = config.map(function (i) {
      return _react2['default'].createElement(SocialButton, {
        link: i.link,
        name: i.name,
        key: i.name
      });
    });

    return _react2['default'].createElement(
      'ul',
      { className: 'social-list' },
      socialList
    );
  };

  var SocialButton = function SocialButton(_ref4) {
    var link = _ref4.link;
    var name = _ref4.name;
    return _react2['default'].createElement(
      'a',
      { href: link },
      _react2['default'].createElement('i', {
        className: "social-icon fa fa-" + name,
        'aria-hidden': 'true'
      })
    );
  };

  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  var socialLinks = [{
  	name: "facebook",
  	link: "https://www.facebook.com/vannamusic"
  }, {
  	name: "twitter",
  	link: "https://twitter.com/VannaBoston"
  }, {
  	name: "tumblr",
  	link: "http://vannaboston.tumblr.com/"
  }, {
  	name: "instagram",
  	link: "https://www.instagram.com/vannaband/"
  }];

  exports["default"] = socialLinks;
  module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  		value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _staticVannaLogoPng = __webpack_require__(45);

  var _staticVannaLogoPng2 = _interopRequireDefault(_staticVannaLogoPng);

  __webpack_require__(29);

  var Header = function Header() {
  		return _react2['default'].createElement(
  				'div',
  				null,
  				_react2['default'].createElement(
  						'div',
  						{ className: 'header-wrapper' },
  						_react2['default'].createElement(
  								'div',
  								null,
  								_react2['default'].createElement('img', { className: 'header-logo', src: _staticVannaLogoPng2['default'] })
  						)
  				)
  		);
  };

  exports['default'] = Header;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(30);

  var _Navigation = __webpack_require__(15);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _FooterFooterJs = __webpack_require__(8);

  var _FooterFooterJs2 = _interopRequireDefault(_FooterFooterJs);

  var Layout = _react2['default'].createClass({
    displayName: 'Layout',

    getInitialState: function getInitialState() {
      return {
        mobileMenuOpen: false,
        mobile: true,
        linkState: [{
          name: "Home",
          href: "/",
          show: true
        }, {
          name: "Videos",
          href: "/videos",
          show: true
        }, {
          name: "Merch",
          href: "/merch",
          show: true
        }, {
          name: "Photos",
          href: "/photos",
          show: true
        }, {
          name: "Tour",
          href: "/tour",
          show: true
        }]
      };
    },

    componentDidMount: function componentDidMount() {
      if (!matchMedia('(max-width: 768px)').matches) {
        this.setState({ mobile: false });
      }
    },

    componentWillUnmount: function componentWillUnmount() {
      setScroll();
    },

    toggleMenu: function toggleMenu(e) {
      this.setScroll();
      this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
      this.linksIn();
    },

    linksIn: function linksIn() {
      var _this = this;

      var start = undefined,
          length = undefined,
          newLinks = undefined;

      start = 0;
      newLinks = this.state.linkState.slice();
      length = newLinks.length;

      var stagger = function stagger(i) {
        if (i < length) {
          setTimeout(function () {
            newLinks[i].show = !newLinks[i].show;
            _this.setState({ linkState: newLinks });
            stagger(i + 1);
          }, 70);
        }
      };

      stagger(start);
    },

    setScroll: function setScroll() {

      var handle = function handle(e) {
        e.preventDefault();
      };

      if (this.state.mobileMenuOpen) {
        document.body.style.overflow = null;
        document.body.ontouchmove = null;
      } else {
        document.body.style.overflow = "hidden";
        document.body.ontouchmove = handle;
      }
    },

    render: function render() {

      return _react2['default'].createElement(
        'div',
        { className: 'layout-wrapper' },
        _react2['default'].createElement(
          'div',
          { className: 'layout' },
          _react2['default'].createElement(_Navigation2['default'], {
            mobile: this.state.mobile,
            mobileMenuOpen: this.state.mobileMenuOpen,
            toggleMenu: this.toggleMenu,
            linkState: this.state.linkState
          }),
          this.props.children,
          _react2['default'].createElement(_FooterFooterJs2['default'], { mobile: this.state.mobile })
        )
      );
    }
  });

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(31);

  var _coreLocation = __webpack_require__(4);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(32);

  var _merchConfigJs = __webpack_require__(14);

  var _merchConfigJs2 = _interopRequireDefault(_merchConfigJs);

  var MerchStore = function MerchStore(_ref) {
    var thumbnail = _ref.thumbnail;
    var link = _ref.link;
    var country = _ref.country;
    var name = _ref.name;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'a',
        { href: link },
        _react2['default'].createElement(
          'div',
          { className: 'merch-store' },
          _react2['default'].createElement(
            'div',
            { className: 'title-wrapper' },
            _react2['default'].createElement(
              'h1',
              { className: 'title' },
              name
            ),
            _react2['default'].createElement(
              'p',
              { className: 'country-name' },
              country
            )
          ),
          _react2['default'].createElement('img', {
            clasSName: 'merch-store-thumbnail',
            src: thumbnail
          })
        )
      )
    );
  };

  var MerchLinks = function MerchLinks(_ref2) {
    var config = _ref2.config;

    var merchList = config.map(function (i) {
      return _react2['default'].createElement(MerchStore, {
        key: i.name,
        thumbnail: i.thumbnail,
        link: i.link,
        country: i.country,
        name: i.name
      });
    });

    return _react2['default'].createElement(
      'div',
      null,
      merchList
    );
  };

  var MerchWrapper = function MerchWrapper() {
    return _react2['default'].createElement(
      'div',
      { className: 'merch-wrapper' },
      _react2['default'].createElement(MerchLinks, { config: _merchConfigJs2['default'] })
    );
  };

  exports['default'] = MerchWrapper;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  		value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _static24hundredPng = __webpack_require__(37);

  var _static24hundredPng2 = _interopRequireDefault(_static24hundredPng);

  var _staticAll_in_logoPng = __webpack_require__(39);

  var _staticAll_in_logoPng2 = _interopRequireDefault(_staticAll_in_logoPng);

  var _staticMerchnowPng = __webpack_require__(42);

  var _staticMerchnowPng2 = _interopRequireDefault(_staticMerchnowPng);

  var _staticJxrPng = __webpack_require__(41);

  var _staticJxrPng2 = _interopRequireDefault(_staticJxrPng);

  var merchStores = [{
  		name: "All In",
  		link: "http://www.allinmerch.com/mm5/merchant.mvc?Store_Code=ALLIN&Screen=CTGY&Category_Code=VAN",
  		thumbnail: _staticAll_in_logoPng2['default'],
  		country: "United States"
  }, {
  		name: "Merch Now",
  		link: "http://smarturl.it/VannaMA",
  		thumbnail: _staticMerchnowPng2['default'],
  		country: "United States"
  }, {
  		name: "24 Hundred",
  		link: " http://24hundred.net/collections/pure-noise-records/band-vanna",
  		thumbnail: _static24hundredPng2['default'],
  		country: "Australia"
  }, {
  		name: "JXR",
  		link: "http://www.shopjxr.com/category-s/181.htm",
  		thumbnail: _staticJxrPng2['default'],
  		country: "Europe"
  }];

  exports['default'] = merchStores;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(33);

  var _Link = __webpack_require__(12);

  var _Link2 = _interopRequireDefault(_Link);

  var _staticVannaBrandLogoPng = __webpack_require__(44);

  var _staticVannaBrandLogoPng2 = _interopRequireDefault(_staticVannaBrandLogoPng);

  var Navigation = function Navigation(_ref) {
    var mobile = _ref.mobile;
    var mobileMenuOpen = _ref.mobileMenuOpen;
    var toggleMenu = _ref.toggleMenu;
    var linkState = _ref.linkState;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: mobile ? "desktop-nav-hidden" : "desktop-nav-show"
        },
        _react2['default'].createElement(DesktopNav, {
          mobile: mobile,
          toggleMenu: toggleMenu,
          linkState: linkState
        })
      ),
      _react2['default'].createElement(
        'div',
        { className: mobile ? "mobile-nav-show" : "mobile-nav-hidden"
        },
        _react2['default'].createElement(MobileNav, {
          mobile: mobile,
          toggleMenu: toggleMenu,
          mobileMenuOpen: mobileMenuOpen,
          linkState: linkState
        }),
        _react2['default'].createElement('div', { className: 'mobile-navbar' })
      )
    );
  };

  var DesktopNav = function DesktopNav(_ref2) {
    var mobile = _ref2.mobile;
    var toggleMenu = _ref2.toggleMenu;
    var linkState = _ref2.linkState;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(BrandIcon, null),
      _react2['default'].createElement(Links, {
        mobile: mobile,
        toggleMenu: toggleMenu,
        linkState: linkState
      })
    );
  };

  var BrandIcon = function BrandIcon() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement('img', {
        className: 'brand',
        src: _staticVannaBrandLogoPng2['default']
      })
    );
  };

  var MobileNav = function MobileNav(_ref3) {
    var mobile = _ref3.mobile;
    var toggleMenu = _ref3.toggleMenu;
    var mobileMenuOpen = _ref3.mobileMenuOpen;
    var linkState = _ref3.linkState;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: 'mobile-navigation' },
        _react2['default'].createElement(MenuIcon, {
          toggleMenu: toggleMenu,
          mobileMenuOpen: mobileMenuOpen
        })
      ),
      _react2['default'].createElement(MobileMenu, {
        mobile: mobile,
        toggleMenu: toggleMenu,
        mobileMenuOpen: mobileMenuOpen,
        linkState: linkState
      })
    );
  };

  var MobileMenu = function MobileMenu(_ref4) {
    var mobile = _ref4.mobile;
    var toggleMenu = _ref4.toggleMenu;
    var mobileMenuOpen = _ref4.mobileMenuOpen;
    var linkState = _ref4.linkState;
    return _react2['default'].createElement(
      'div',
      { className: mobileMenuOpen ? "mobile-menu-wrapper-open" : "mobile-menu-wrapper-closed"
      },
      _react2['default'].createElement(
        'div',
        { className: mobileMenuOpen ? "mobile-menu-background mmbOpen" : "mobile-menu-background mmbClosed"
        },
        _react2['default'].createElement(Links, {
          mobile: mobile,
          toggleMenu: toggleMenu,
          mobileMenuOpen: mobileMenuOpen,
          linkState: linkState
        })
      )
    );
  };

  var Links = function Links(_ref5) {
    var mobile = _ref5.mobile;
    var toggleMenu = _ref5.toggleMenu;
    var linkState = _ref5.linkState;

    var mobileClick = function mobileClick() {
      _Link2['default'].handleClick();
      toggleMenu();
    };

    var desktopClick = function desktopClick() {
      _Link2['default'].handleClick();
    };

    var linksMapped = linkState.map(function (i, index) {
      return _react2['default'].createElement(
        'li',
        {
          className: i.show ? "Navigation-item" : "Navigation-item animate-nav-item",
          key: index
        },
        _react2['default'].createElement(
          'a',
          {
            className: 'Navigation-link',
            href: i.href,
            onClick: mobile ? mobileClick : desktopClick
          },
          ' ',
          i.name
        )
      );
    });

    return _react2['default'].createElement(
      'ul',
      { className: mobile ? "mobile-nav-links" : "desktop-navigation",
        role: 'menu'
      },
      ' ',
      linksMapped
    );
  };

  var MenuIcon = function MenuIcon(_ref6) {
    var toggleMenu = _ref6.toggleMenu;
    var mobileMenuOpen = _ref6.mobileMenuOpen;
    return _react2['default'].createElement(
      'div',
      {
        className: 'menu-icon',
        onClick: toggleMenu
      },
      _react2['default'].createElement('i', { className: mobileMenuOpen ? "fa fa-times-circle close animate-nav-item" : "fa fa-bars burger",
        'aria-hidden': 'true'
      }),
      _react2['default'].createElement(
        'span',
        { className: 'menu-title' },
        'MENU'
      )
    );
  };

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(34);

  var PhotosWrapper = function PhotosWrapper() {
    return _react2['default'].createElement(
      Photos,
      null,
      _react2['default'].createElement('iframe', {
        src: 'http://snapwidget.com/in/?u=dmFubmFiYW5kfGlufDIwMHwzfDIwfHxub3w1fG5vbmV8b25TdGFydHxub3x5ZXM=&ve=130516',
        title: 'Instagram Widget',
        className: 'snapwidget-widget',
        allowTransparency: 'true',
        frameBorder: '0',
        scrolling: 'no'
      })
    );
  };

  var Photos = function Photos(props) {
    return _react2['default'].createElement(
      'div',
      { className: 'photos' },
      props.children
    );
  };

  exports['default'] = PhotosWrapper;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(35);

  var TourDatesWrapper = _react2['default'].createClass({
  	displayName: 'TourDatesWrapper',

  	componentWillMount: function componentWillMount() {
  		var tourDates = _react2['default'].createElement(
  			'a',
  			{
  				href: 'http://www.bandsintown.com/Vanna',
  				className: 'bit-widget-initializer',
  				'data-artist': 'Vanna'
  			},
  			' Vanna Tour Dates'
  		);

  		this.setState({ tourDates: tourDates });
  	},

  	render: function render() {
  		return _react2['default'].createElement(
  			'div',
  			{ className: 'tour-dates-wrapper' },
  			this.state.tourDates
  		);
  	}
  });

  exports['default'] = TourDatesWrapper;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  var videoData = [{
  	url: "https://www.youtube.com/embed/aJ5YacpvT1E",
  	title: "Pretty Grim"
  }, {
  	url: "https://www.youtube.com/embed/dgu3kr5hmx0",
  	title: "The Beautiful People"
  }, {
  	url: "https://www.youtube.com/embed/yVj9qlt3aGE",
  	title: "Toxic Prentender"
  }, {
  	url: "https://www.youtube.com/embed/BlrNnN8kkxg",
  	title: "Digging"
  }];

  exports["default"] = videoData;
  module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  		value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(36);

  var _VideoDataJs = __webpack_require__(18);

  var _VideoDataJs2 = _interopRequireDefault(_VideoDataJs);

  var Videos = _react2['default'].createClass({
  		displayName: 'Videos',

  		getInitialState: function getInitialState() {
  				return { mobile: true };
  		},

  		componentDidMount: function componentDidMount() {
  				if (!matchMedia('(max-width: 768px)').matches) {
  						this.setState({ mobile: false });
  				}
  		},

  		render: function render() {

  				return _react2['default'].createElement(
  						'div',
  						{ className: 'videos-wrapper' },
  						_react2['default'].createElement(VideoList, {
  								data: _VideoDataJs2['default'],
  								mobile: this.state.mobile
  						})
  				);
  		}
  });

  var VideoList = function VideoList(_ref) {
  		var data = _ref.data;
  		var mobile = _ref.mobile;

  		var Iframe = undefined,
  		    videoList = undefined,
  		    height = undefined,
  		    width = undefined;

  		Iframe = 'iframe';
  		videoList = [];
  		height = mobile ? "180" : "360";
  		width = mobile ? "320" : "640";

  		data.forEach(function (v) {
  				var src = v.url;
  				var title = v.title;

  				videoList.push(_react2['default'].createElement(
  						'div',
  						{
  								className: 'video-background',
  								key: title
  						},
  						_react2['default'].createElement(
  								'div',
  								{ className: 'video' },
  								_react2['default'].createElement(Iframe, {
  										iframe: 'iframe',
  										src: src,
  										width: width,
  										height: height,
  										frameBorder: '0',
  										allowFullScreen: true
  								})
  						)
  				));
  		});

  		return _react2['default'].createElement(
  				'div',
  				null,
  				videoList
  		);
  };

  exports['default'] = Videos;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsHeaderHeaderJs = __webpack_require__(10);

  var _componentsHeaderHeaderJs2 = _interopRequireDefault(_componentsHeaderHeaderJs);

  var _componentsAlbumPromoAlbumPromoJs = __webpack_require__(6);

  var _componentsAlbumPromoAlbumPromoJs2 = _interopRequireDefault(_componentsAlbumPromoAlbumPromoJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsHeaderHeaderJs2['default'], null),
          _react2['default'].createElement(_componentsAlbumPromoAlbumPromoJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsMerchMerchJs = __webpack_require__(13);

  var _componentsMerchMerchJs2 = _interopRequireDefault(_componentsMerchMerchJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsMerchMerchJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsPhotosPhotosJs = __webpack_require__(16);

  var _componentsPhotosPhotosJs2 = _interopRequireDefault(_componentsPhotosPhotosJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsPhotosPhotosJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsTourDatesTourDatesJs = __webpack_require__(17);

  var _componentsTourDatesTourDatesJs2 = _interopRequireDefault(_componentsTourDatesTourDatesJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'tour' },
          _react2['default'].createElement(
            'div',
            { className: 'tour-header' },
            _react2['default'].createElement(
              'h1',
              null,
              'TOUR DATES'
            )
          ),
          _react2['default'].createElement(_componentsTourDatesTourDatesJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsVideosVideosJs = __webpack_require__(19);

  var _componentsVideosVideosJs2 = _interopRequireDefault(_componentsVideosVideosJs);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_componentsVideosVideosJs2['default'], null)
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n\n.album-promo {\n\twidth: 100%;\n\theight: 700px;\n\tmargin-top: 300px;\n\tmargin-bottom: 60px;\n\tpadding: 20px;\n\tbackground-color: rgba(255,255,255, 1);\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.album-logo {\n\tmargin-top: 85px;\n\tmax-width: 700px;\n}\n\n.album-teaser {\n\tmargin: auto;\n\tmargin-bottom: 40px;\n\tmargin-top: -60px;\n\tdisplay: block;\n\ttext-align: center;\n}\n\n.video-background {\n\tpadding: 100px;\n\tpadding-left: 20%;\n\tpadding-right: 20%;\n\tmargin: 0 none;\n\ttext-align: center;\n\tbackground-color: rgba(255,255,255,.5);\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.release-info {\n\tmargin: auto;\n\tcolor: white;\n\tletter-spacing: 3px;\n\theight: 180px;\n}\n\n.release-info h1 {\n\tfont-weight: 200;\n\tmargin-bottom: 40px;\n\tmargin-top: 60px;\n}\n\n\n.preorder-button {\n\tmargin: 10px;\n\tmargin-top: 60px;\n\tfont-weight: bold;\n\tfont-size: 20px;\n\tbackground-color: white;\n\ttext-decoration: none;\n\tletter-spacing: 1px;\n\tpadding: 10px;\n\tborder-radius: 2px;\n\t-webkit-transition: all .2s ease-out;\n\t-o-transition: all .2s ease-out;\n\ttransition: all .2s ease-out\n}\n\n\n.preorder-button:hover{\n\topacity: .7;\n}\n\n.preorder-text {\n\tcolor: #ebb09d;\n\tbackground:\n      -webkit-linear-gradient(\n\t\tleft, \n\t\trgba(236,180,162,1) 0%, \n\t\trgba(249,229,204,1) 100%\n\t);\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n.music-section {\n\theight: 1080px;\n\twidth: 100%;\n\tbackground: url(" + __webpack_require__(3) + ") no-repeat center center scroll;\n    -webkit-background-size: cover;\n            background-size: cover;\n    -webkit-box-shadow: 0px -4px 8px -2px rgba(0,0,0,0.25);\n            box-shadow: 0px -4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.album-links-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: reverse;\n\t-webkit-flex-direction: row-reverse;\n\t    -ms-flex-direction: row-reverse;\n\t        flex-direction: row-reverse;\n\tpadding: auto;\n\tpadding-top: 300px;\n\n}\n\n.promoted-album {\n\tbackground-color: rgba(255,255,255, .9);\n\tpadding: 40px;\n\tmargin: auto;\n\tborder-radius: 2px;\n    -webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.listen-links {\n\ttext-align: center;\n\theight: 40px;\n\tmargin-top: 10px;\n\tbackground: -webkit-gradient(linear, left top, right top, from(rgba(236,180,162,1)), to(rgba(249,229,204,1)));\n\tbackground: -webkit-linear-gradient(left, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n\tbackground: -o-linear-gradient(left, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n\tbackground: linear-gradient(to right, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n\tborder-radius: 2px;\n    -webkit-box-shadow: 4px 4px 8px -4px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -4px rgba(0,0,0,0.25);\n    -webkit-transition: all .2s ease-out;\n    -o-transition: all .2s ease-out;\n    transition: all .2s ease-out;\n}\n\n.listen-links a {\n\tpadding: 10px;\n\ttext-decoration: none;\n\tcolor: white;\n}\n\n.listen-links:hover{\n\t-webkit-transform: scale(.97);\n\t    -ms-transform: scale(.97);\n\t     -o-transform: scale(.97);\n\t        transform: scale(.97);\n}\n\n\n.link-icon {\n\tmargin-top: 12px;\n\tmargin-right: 6px;\n\tcolor: rgba(0,0,0, .7);\n}\n\n.promoted-album-thumbnail {\n\twidth: 300px;\n    -webkit-box-shadow: 4px 4px 8px -3px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -3px rgba(0,0,0,0.25);\n    -webkit-transition: all .2s ease-out;\n    -o-transition: all .2s ease-out;\n    transition: all .2s ease-out\n}\n\n.promoted-album-thumbnail:hover{\n\t-webkit-transform: scale(.97);\n\t    -ms-transform: scale(.97);\n\t     -o-transform: scale(.97);\n\t        transform: scale(.97);\n}\n\n/* ipad */\n@media (max-device-width: 1024px)  {\n\n   .promoted-album {\n   \t  margin: 0 auto;\n   \t  margin-bottom: 20px;\n   \t  display: inline-block;\n   }\n\n   .album-links-wrapper {\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-box-direction: normal;\n\t\t-webkit-flex-direction: column;\n\t\t    -ms-flex-direction: column;\n\t\t        flex-direction: column;\n\t}\n\n\t.album-promo {\n\t\twidth: 100%;\n\t\theight: 400px;\n\t\tmargin-top: 100px;\n\t\tmargin-bottom: 60px;\n\t\tpadding: 0px;\n\t\toverflow-x: hidden;\n\t}\n\n\t.album-logo {\n\t\tmargin-top: 45px;\n\t\tmax-width: 400px;\n\t}\n\n\t.music-section {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tbackground: url(" + __webpack_require__(3) + ") no-repeat center center fixed;\n\t    -webkit-background-size: cover;\n\t            background-size: cover;\n\t}\n\n\t.promoted-album-thumbnail {\n\t\twidth: 600px;\n\t}\n}\n\n/* iphone 6+ */\n@media (max-device-width: 736px)  { \n\n   .album-logo {\n\t  margin-top: 45px;\n\t  max-width: 300px;\n\t}\n\n\t.promoted-album-thumbnail {\n\t\twidth: 300px;\n\t}\n\n\t.album-promo {\n\t\theight: 300px;\n\t\twidth: 100%;\n\t\tpadding: 0px;\n\t\toverflow: hidden;\n\t}\n\n\t.album-links-wrapper {\n\t\tpadding-top: 100px;\n\t}\n\n\t.release-info{\n\t\tpadding-top: 10px;\n\t}\n\n\t.release-info h1 {\n\t\tfont-size: 20px;\n\t\tmargin-top: -10px;\n\t\tmargin-bottom: 30px;\n\t}\n\n\t.preorder-button {\n\t\tdisplay: block;\n\t\tmargin-top: 0px;\n\t}\n\n\t.album-teaser {\n\t\tmargin-bottom: 40px;\n\t\tmargin-top: -60px;\n\t}\n\n\t.video-background {\n\t\tpadding: 40px;\n\t\tpadding-left: 0%;\n\t\tpadding-right: 0%;\n\t}\n\n\t.album-links-wrapper {\n\t\tpadding-top: 40px;\n\t}\n\n\t.music-section {\n\t\tbackground: rgba(255,255,255,.5);\n\t}\n}\n\n/* iphone 6 */\n@media (max-device-width: 667px) { \n\n   .album-logo {\n\t  margin-top: 45px;\n\t  max-width: 300px;\n\t}\n\n\t.promoted-album-thumbnail {\n\t\twidth: 270px;\n\t}\n\n\t.album-promo {\n\t\theight: 300px;\n\t\tpadding: 0px;\n\t\toverflow: hidden;\n\t\tmargin-top: 40px;\n\t}\n    \n}\n\n/* iphone 5 */\n@media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 568px) {\n\n   .album-logo {\n\t  margin-top: 45px;\n\t  max-width: 300px;\n\t}\n\n\t.promoted-album {\n\t\tpadding: 20px;\n\t}\n\n\t.promoted-album-thumbnail {\n\t\twidth: 260px;\n\t}\n\n\t.album-promo {\n\t\theight: 300px;\n\t\tpadding: 0px;\n\t\toverflow: hidden;\n\t\tmargin-top: 40px;\n\t}\n}", ""]);

  // exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.social-wrapper {\n\ttext-align: left;\n\tpadding-top: 20px;\n}\n\n.social-list a {\n\tfont-size: 30px;\n\tmargin: 15px;\n\t-webkit-transition: opacity .3s ease;\n\t-o-transition: opacity .3s ease;\n\ttransition: opacity .3s ease\n}\n\n.social-list a:hover{\n\topacity: .5;\n}\n\n.fa-facebook {\n\tcolor: #3b5998;\n}\n\n.fa-tumblr {\n\tcolor: #32506d;\n}\n\n.fa-twitter {\n\tcolor: #00aced;\n}\n\n.fa-instagram {\n\tcolor: #517fa4;\n}\n\n.footer {\n\theight: 100px;\n\tmargin-top: -20px;\n\tbackground-color: rgba(255,255,255, 1);\n}\n\n.mobile-footer {\n\tmargin-top: 0px;\n\tbottom: 0;\n\theight: 85px;\n\tbackground-color: rgba(255,255,255,.5);\n}\n\n/* iphone 6+ */\n@media only screen and (max-device-width: 736px) { \n\n\t.social-wrapper {\n\t\ttext-align: center;\n\t\tpadding-top: 12px;\n\t\tmargin-right: 13%;\n\t}\n\n  \t.social-list a {\n\t\tfont-size: 24px;\n\t\tmargin: 15px;\n\t\t-webkit-transition: opacity .3s ease;\n\t\t-o-transition: opacity .3s ease;\n\t\ttransition: opacity .3s ease\n\t}\n\n  \t.social-list a:hover{\n\t\topacity: .5;\n\t}\n}", ""]);

  // exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "\n.header-logo {\n\tmargin-top: 60px;\n}\n\n/* iphone 5 */\n@media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 568px) {\n\n  \t.header-logo{\n  \t\tmargin-top: 30px;\n\t\t  width: 280px;\n\t}\n\n}\n\n/* iphone 6 */\n@media only screen \n  and (min-device-width: 375px) \n  and (max-device-width: 667px) { \n\n  \t.header-logo {\n  \t\tmargin-top: 30px;\n\t\t  width: 350px;\n\t}\n\n}\n\n/* iphone 6+ */\n@media only screen \n  and (min-device-width: 414px) \n  and (max-device-width: 736px) { \n\n  \t.header-logo {\n  \t\twidth: 400px;\n  \t}\n\n}\n\n/* ipad */\n@media only screen \n  and (min-device-width: 768px) \n  and (max-device-width: 1024px) {\n\n  \t.header-logo {\n\t\twidth: 700px;\n\t}\n\n}", ""]);

  // exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(236,180,162,1)), to(rgba(249,229,204,1)));\n  background: -webkit-linear-gradient(left, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n  background: -o-linear-gradient(left, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n  background: linear-gradient(to right, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n  background-repeat: no-repeat cover;\n  color: rgba(0,0,0, .7);\n  font-family: 'Helvetica',sans-serif;\n}\n\n.layout {\n  margin: 0 auto;\n  padding: 0;\n  text-align: center;\n  overflow: hidden;\n}\n\n", ""]);

  // exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.merch-wrapper {\n\tmargin-top: 40px;\n}\n\na {\n\ttext-decoration: none;\n}\n\n.merch-store {\n\tdisplay: inline-block;\n\tmargin: auto;\n\tmargin-bottom: 40px;\n\theight: 600px;\n\twidth: 500px;\n\tborder-radius: 2px;\n\ttext-decoration: none;\n\tborder: none;\n\tcursor: pointer;\n\tbackground: -webkit-gradient(linear, right top, left top, from(rgba(236,180,162,1)), to(rgba(249,229,204,1)));\n\tbackground: -webkit-linear-gradient(right, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n\tbackground: -o-linear-gradient(right, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n\tbackground: linear-gradient(to left, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n    -webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n    -webkit-transition: all .2s ease-out;\n    -o-transition: all .2s ease-out;\n    transition: all .2s ease-out;\n}\n\n.merch-store img {\n\topacity: .8;\n\tmax-height: 400px;\n\tmargin-top: 50px;\n\t-webkit-transition: all .2s ease-out;\n\t-o-transition: all .2s ease-out;\n\ttransition: all .2s ease-out;\n}\n\n.merch-store h1 {\n\tfont-size: 40px;\n\tletter-spacing: 3px;\n\ttext-transform: uppercase;\n\tcolor: #ebb09d;\n\tbackground: -webkit-linear-gradient(left, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n.merch-store p {\n\tfont-size: 16px;\n\tcolor: #ebb09d;\n\tbackground: -webkit-linear-gradient(left, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n.merch-store:hover{\n\t-webkit-transform: scale(.95);\n\t    -ms-transform: scale(.95);\n\t     -o-transform: scale(.95);\n\t        transform: scale(.95);\n}\n\t\n\n\n.title-wrapper {\n\theight: 100px;\n\tpadding: 10px;\n\tpadding-top: 4px;\n\tbackground-color: rgba(255,255,255, 1);\n}\n\n.country-name {\n\tmargin-top: -25px;\n}\n\n/* iphone 6+ */\n@media (max-device-width: 736px)  { \n\n\t.merch-wrapper {\n\t\tmargin-top: 20px;\n\t}\n\n\t.merch-store {\n\t\tmax-width: 100%;\n\t\theight: 550px;\n\t\t-webkit-transform: scale(.9);\n\t\t    -ms-transform: scale(.9);\n\t\t     -o-transform: scale(.9);\n\t\t        transform: scale(.9);\n\t\tmargin-bottom: 0px;\n\t\tmargin-top: 0px none;\n\t}\n\n\t.merch-store img {\n\t\tmax-width: 300px;\n\t}\n\n\t.merch-store:hover{\n\t\t-webkit-transform: scale(.9);\n\t\t    -ms-transform: scale(.9);\n\t\t     -o-transform: scale(.9);\n\t\t        transform: scale(.9);\n\t}\n}\n\n", ""]);

  // exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.desktop-navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 2em 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-right: 60px;\n}\n\n.brand {\n  position: absolute;\n  left: 40px;\n  top: 10px;\n  width: 200px;\n}\n\n.desktop-nav-hidden {\n  visibility: hidden;\n  display: none;\n}\n\n.desktop-nav-show {\n  visibility: visible;\n}\n\n.mobile-navigation {\n  position: absolute;\n  height: 100%;\n}\n\n.mobile-navbar {\n  position: relative;\n  height: 60px;\n  width: 100%;\n  z-index: 1500;\n  background-color: rgba(255,255,255,.5);\n}\n\n.mobile-nav-hidden {\n  visibility: hidden;\n}\n\n.mobile-nav-show {\n  visibility: visible;\n}\n\n.mobile-nav-links {\n  height: 350px;\n  top: 50%;\n  margin-top: -175px;\n  position: relative;\n  padding: 0px;\n\n}\n\n.mobile-nav-links li {\n\ttext-align: center;\n\tfont-size: 40px;\n\tlist-style: none;\n\tmargin-top: 20px;\n\tfont-weight: lighter;\n}\n\n.mobile-nav-links a {\n\tcolor: #ebb09d;\n\tbackground: -webkit-linear-gradient(left, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n\n.mobile-menu-background {\n  position: absolute;\n  z-index: 3000;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-color: rgba(255,255,255,1);\n  text-align: center;\n}\n\n.mobile-menu-wrapper-open {\n  opacity: 1;\n  visibility: visible;\n}\n\n.mobile-menu-wrapper-closed {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.mmbOpen a {\n  opacity: 1;\n  -webkit-transition: opacity 1.3s ease-in;\n  -o-transition: opacity 1.3s ease-in;\n  transition: opacity 1.3s ease-in;\n}\n\n.mmbClosed a {\n  opacity: 0;\n}\n\n.menu-icon {\n  position: absolute;\n  z-index: 4000;\n  width: 120px;\n  margin-top: 22px;\n  left: 100%;\n}\n\n.menu-title {\n  font-size: 15px;\n  margin-left: 4px;\n  display: inline;\n}\n\n.burger {\n  font-size: 20px;\n  display: inline-block;\n}\n\n.close {\n  font-size: 20px;\n  display: inline-block;\n}\n\n.Navigation-item {\n  padding: 0 1em;\n  opacity: 1;\n}\n.nav-item-hidden {\n  opacity: 0;\n}\n\n.animate-nav-item {\n  -webkit-animation: pulse 1s 1;\n       -o-animation: pulse 1s 1;\n          animation: pulse 1s 1;\n}\n\n.Navigation-link {\n  padding: 10px;\n  color: rgba(255,255,255, 1);\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer;\n  -webkit-transition: all .2s ease-out;\n  -o-transition: all .2s ease-out;\n  transition: all .2s ease-out;\n  border-radius: 1px\n}\n\n.Navigation-link:hover{\n\t-webkit-box-shadow: inset 0 0 0 2px white;\n\t        box-shadow: inset 0 0 0 2px white;\n}\n\n@-webkit-keyframes pulse {\n  0% { -webkit-transform: scale(.8); transform: scale(.8);  }\n  40% { -webkit-transform: scale(1.2); transform: scale(1.2);}\n  70% { -webkit-transform: scale(1); transform: scale(1); opacity: 1;}\n  90% { -webkit-transform: scale(1.03); transform: scale(1.03); }\n  100%{ -webkit-transform: scale(1); transform: scale(1); }\n}\n\n@-o-keyframes pulse {\n  0% { -o-transform: scale(.8); transform: scale(.8);  }\n  40% { -o-transform: scale(1.2); transform: scale(1.2);}\n  70% { -o-transform: scale(1); transform: scale(1); opacity: 1;}\n  90% { -o-transform: scale(1.03); transform: scale(1.03); }\n  100%{ -o-transform: scale(1); transform: scale(1); }\n}\n\n@keyframes pulse {\n  0% { -webkit-transform: scale(.8); -o-transform: scale(.8); transform: scale(.8);  }\n  40% { -webkit-transform: scale(1.2); -o-transform: scale(1.2); transform: scale(1.2);}\n  70% { -webkit-transform: scale(1); -o-transform: scale(1); transform: scale(1); opacity: 1;}\n  90% { -webkit-transform: scale(1.03); -o-transform: scale(1.03); transform: scale(1.03); }\n  100%{ -webkit-transform: scale(1); -o-transform: scale(1); transform: scale(1); }\n}\n\n/* ipad */\n@media only screen \n  and (min-device-width: 768px) \n  and (max-device-width: 1024px) \n  and (orientation: portrait) \n  and (min-device-pixel-ratio: 1) {\n\n    .mobile-nav-links {\n      height: 600px;\n      top: 50%;\n      margin-top: -300px;\n      position: relative;\n      padding: 0px;\n    }\n\n    .mobile-nav-links li {\n      text-align: center;\n      font-size: 80px;\n      list-style: none;\n      margin-top: 30px;\n      font-weight: lighter;\n    }\n\n}\n\n@media only screen and (min-width: 769px) {\n  .mobile-navigation {\n    visibility: hidden;\n  }\n\n  .mobile-navbar {\n    visibility: hidden;\n  }\n}", ""]);

  // exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "\n.photos {\n\tmargin: 5%;\n}\n.photos iframe {\n\tborder: none;\n\toverflow: hidden;\n\twidth: 100%;\n}\n\n", ""]);

  // exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);", ""]);

  // module
  exports.push([module.id, "/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n\n\n/*\n * Animations\n * -------------------------------------------------------------------------- */\n\n\n/*\n * Video\n * -------------------------------------------------------------------------- */\n\n.responsive-video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n\n.responsive-video-wrapper iframe {\n\tposition: absolute;\n\tborder: 0 none;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\t-webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n\t        box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n}\n\n.tour {\n  text-align: center;\n}\n\n.tour-dates-wrapper {\n  margin-top: 100px;\n  margin-bottom: 30px;\n}\n\n.tour-dates-wrapper a {\n  color: white;\n}\n\n.tour-header {\n  position: absolute;\n  background-color: white;\n  width: 100%;\n  margin: auto;\n  margin-top: -100px;\n  text-align: center;\n}\n\n.tour-header h1 {\n\tfont-size: 40px;\n\tcolor: #ebb09d;\n\tbackground: -webkit-linear-gradient(left, rgba(236,180,162,1) 0%, rgba(249,229,204,1) 100%);\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n\n\n/* iphone 5 */\n@media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 568px)\n  and (min-device-pixel-ratio: 2) {\n\n    .tour-dates-wrapper {\n      overflow: scroll;\n    }\n\n    .tour-header {\n      margin-bottom: 40px;\n      margin-top: 0px;\n    }\n \n}\n\n/* iphone 6 */\n@media only screen \n  and (min-device-width: 375px) \n  and (max-device-width: 667px) { \n\n\n}\n\n/* iphone 6+ */\n@media only screen \n  and (min-device-width: 414px) \n  and (max-device-width: 736px) { \n\n\n\n    .tour-dates-wrapper {\n      margin-top: 100px;\n      margin-bottom: 20px;\n    }\n\n}\n\n/* ipad */\n@media only screen \n  and (min-device-width: 768px) \n  and (max-device-width: 1024px) {\n\n\n\n}", ""]);

  // exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".videos-wrapper {\n\tmargin-top: 40px;\n\ttext-align: center;\n\tmargin-bottom: 40px;\n}\n\n.video-background {\n\tbackground-color: rgba(255,255,255, 1);\n\tborder-radius: 2px;\n\tpadding: 20px;\n\tmargin: auto;\n\tmargin-bottom: 20px;\n    -webkit-box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n            box-shadow: 4px 4px 8px -2px rgba(0,0,0,0.25);\n    max-width: 640px;\n}\n\n\n@media screen and (device-aspect-ratio: 40/71) {\n\n\t.videos-wrapper {\n\t\ttext-align: left;\n\t}\n\n\t.video-background {\n\t  padding: 0px none;\n\t  margin-left: -20px;\n\t  max-width: 320px;\n\t}\n}", ""]);

  // exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "cf597ecf00cb8e3e07bf299e0c43f535.png";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "df065f6637728b5da34d9b3c4d2e392a.png";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "20e08ad91b4bc6ea8d7c95d19cb72edc.png";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "7a495477b6d5d1fbd4bb25158cff0482.png";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "a6d8b3259b2c90680b8f1101c334f6df.png";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "8e8b99a1beeb96ad060727c53cbaf515.png";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "0232b8866ca466036703443de6f897fb.png";

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA6CAYAAAD1AhaMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFxpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wUmlnaHRzOk1hcmtlZD0iRmFsc2UiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDpCQ0QyNkM5QkY5QjlERjExOUQ0MUQ5MTI3QThBNzc4RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQThGMjY3OTAwMkQxMUU2OUUyQkFDNDY1MjAzRTdGOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQThGMjY3ODAwMkQxMUU2OUUyQkFDNDY1MjAzRTdGOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0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"

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "0577d4ff8cdb9f1c3af4f312b5486961.png";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "8f1f7513d5a1900c71bbf9afacff8e16.png";

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 49 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 50 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);