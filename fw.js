    12: [function(_0x372231, _0x2f1f53, _0x34d99d) {
        'use strict';
        var _0x40051f = function() {
            function _0x372231(_0x372231, _0x2f1f53) {
                for (var _0x34d99d = 0x0; _0x34d99d < _0x2f1f53['length']; _0x34d99d++) {
                    var _0x40051f = _0x2f1f53[_0x34d99d];
                    _0x40051f['enumerable'] = _0x40051f['enumerable'] || !0x1, _0x40051f['configurable'] = !0x0, 'value' in _0x40051f && (_0x40051f['writable'] = !0x0), Object['defineProperty'](_0x372231, _0x40051f['key'], _0x40051f);
                }
            }
            return function(_0x2f1f53, _0x34d99d, _0x40051f) {
                return _0x34d99d && _0x372231(_0x2f1f53['prototype'], _0x34d99d), _0x40051f && _0x372231(_0x2f1f53, _0x40051f), _0x2f1f53;
            };
        }();
        var _0x12a12b = function() {
            function _0x372231() {
                ! function(_0x372231, _0x2f1f53) {
                    if (!(_0x372231 instanceof _0x2f1f53)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x372231);
            }
            return _0x40051f(_0x372231, null, [{
                'key': 'pressKey',
                'value': function(_0x372231) {
                    var _0x2f1f53 = this['main']['game']['scope'][this['main']['obfuscate']['input']['main']][this['main']['obfuscate']['input']['input']]['keys'];
                    _0x2f1f53[_0x372231] || setTimeout(function() {
                        _0x2f1f53[_0x372231] = !0x0, setTimeout(function() {
                            delete _0x2f1f53[_0x372231];
                        }, 0x5a);
                    }, 0x0);
                }
            }, {
                'key': 'rightClickBinded',
                'value': function() {
                    for (var _0x372231 = this['main']['game']['scope'][this['main']['obfuscate']['input']['main']]['binds'], _0x2f1f53 = _0x372231['length'], _0x34d99d = 0x0; _0x34d99d < _0x2f1f53; _0x34d99d++)
                        if (null != _0x372231[_0x34d99d] && 0x2 == _0x372231[_0x34d99d]['type'] && 0x2 == _0x372231[_0x34d99d]['code']) return !0x0;
                    return !0x1;
                }
            }]), _0x372231;
        }();
        _0x2f1f53['exports'] = _0x12a12b;
    }, {}],
    13: [function(_0x2d7a88, _0x5a3142, _0x2597da) {
        'use strict';
        var _0x51928b = function() {
            function _0x2d7a88(_0x2d7a88, _0x5a3142) {
                for (var _0x2597da = 0x0; _0x2597da < _0x5a3142['length']; _0x2597da++) {
                    var _0x51928b = _0x5a3142[_0x2597da];
                    _0x51928b['enumerable'] = _0x51928b['enumerable'] || !0x1, _0x51928b['configurable'] = !0x0, 'value' in _0x51928b && (_0x51928b['writable'] = !0x0), Object['defineProperty'](_0x2d7a88, _0x51928b['key'], _0x51928b);
                }
            }
            return function(_0x5a3142, _0x2597da, _0x51928b) {
                return _0x2597da && _0x2d7a88(_0x5a3142[_0x55c2('0x3c')], _0x2597da), _0x51928b && _0x2d7a88(_0x5a3142, _0x51928b), _0x5a3142;
            };
        }();
        var _0x38ed24 = function() {
            function _0x2d7a88() {
                ! function(_0x2d7a88, _0x5a3142) {
                    if (!(_0x2d7a88 instanceof _0x5a3142)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x2d7a88);
            }
            return _0x51928b(_0x2d7a88, null, [{
                'key': 'getDistance',
                'value': function(_0x2d7a88, _0x5a3142) {
                    var _0x2597da = _0x5a3142['x'] - _0x2d7a88['x'],
                        _0x51928b = _0x5a3142['y'] - _0x2d7a88['y'];
                    return Math['sqrt'](_0x2597da * _0x2597da + _0x51928b * _0x51928b);
                }
            }, {
                'key': 'calculateDistance',
                'value': function(_0x2d7a88, _0x5a3142, _0x2597da, _0x51928b) {
                    return Math['sqrt'](Math['pow'](_0x2d7a88 - _0x2597da, 0x2) + Math['pow'](_0x5a3142 - _0x51928b, 0x2));
                }
            }, {
                'key': 'calculateXCoordLineIntersection',
                'value': function(_0x2d7a88, _0x5a3142, _0x2597da, _0x51928b) {
                    return (_0x51928b * _0x2d7a88 - _0x2597da * _0x5a3142) / _0x51928b;
                }
            }, {
                'key': 'calculateYCoordLineIntersection',
                'value': function(_0x2d7a88, _0x5a3142, _0x2597da, _0x51928b) {
                    return (_0x51928b * _0x2d7a88 - _0x2597da * _0x5a3142) / -_0x2597da;
                }
            }, {
                'key': 'isWindow',
                'value': function(_0x2d7a88) {
                    return void 0x0 !== _0x2d7a88[_0x55c2('0xa2')] && _0x2d7a88[_0x55c2('0xa2')][_0x3e93('0xa8')](_0x55c2('0x27')) > -0x1;
                }
            }, {
                'key': 'getMouseScreenPos',
                'value': function() {
                    return this['main']['game']['scope'][this['main']['obfuscate']['input']['main']][this['main']['obfuscate']['input']['input']]['mousePos'];
                }
            }, {
                'key': 'getMousePointPos',
                'value': function() {
                    return this['main']['game']['scope'][this['main']['obfuscate']['camera']]['screenToPoint'](this['getMouseScreenPos']());
                }
            }, {
                'key': 'getMapPosFromWorldPos',
                'value': function(_0x2d7a88, _0x5a3142, _0x2597da) {
                    return {
                        'x': _0x2d7a88['mapSprite']['x'] - _0x2d7a88['mapSprite']['width'] / 0x2 + _0x2597da['x'] / _0x5a3142['width'] * _0x2d7a88['mapSprite']['width'],
                        'y': _0x2d7a88['mapSprite']['y'] + _0x2d7a88['mapSprite'][_0x55c2('0x8d')] / 0x2 - _0x2597da['y'] / _0x5a3142[_0x55c2('0x8d')] * _0x2d7a88['mapSprite']['height']
                    };
                }
            }]), _0x2d7a88;
        }();
        _0x5a3142['exports'] = _0x38ed24;
    }, {}],
