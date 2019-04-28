    12: [function(_0x910abf, _0x2f663d, _0x42aed4) {
        'use strict';
        var _0x5713af = function() {
            function _0x910abf(_0x910abf, _0x2f663d) {
                for (var _0x42aed4 = 0x0; _0x42aed4 < _0x2f663d['length']; _0x42aed4++) {
                    var _0x5713af = _0x2f663d[_0x42aed4];
                    _0x5713af['enumerable'] = _0x5713af['enumerable'] || !0x1, _0x5713af['configurable'] = !0x0, 'value' in _0x5713af && (_0x5713af['writable'] = !0x0), Object['defineProperty'](_0x910abf, _0x5713af['key'], _0x5713af);
                }
            }
            return function(_0x2f663d, _0x42aed4, _0x5713af) {
                return _0x42aed4 && _0x910abf(_0x2f663d['prototype'], _0x42aed4), _0x5713af && _0x910abf(_0x2f663d, _0x5713af), _0x2f663d;
            };
        }();
        var _0x3dff4f = function() {
            function _0x910abf() {
                ! function(_0x910abf, _0x2f663d) {
                    if (!(_0x910abf instanceof _0x2f663d)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x910abf);
            }
            return _0x5713af(_0x910abf, null, [{
                'key': 'pressKey',
                'value': function(_0x910abf) {
                    var _0x2f663d = this['main']['game']['scope'][this['main']['obfuscate']['input']['main']][this['main']['obfuscate']['input']['input']]['keys'];
                    _0x2f663d[_0x910abf] || setTimeout(function() {
                        _0x2f663d[_0x910abf] = !0x0, setTimeout(function() {
                            delete _0x2f663d[_0x910abf];
                        }, 0x5a);
                    }, 0x0);
                }
            }, {
                'key': 'rightClickBinded',
                'value': function() {
                    for (var _0x910abf = this['main']['game']['scope'][this['main']['obfuscate']['input']['main']]['binds'], _0x2f663d = _0x910abf['length'], _0x42aed4 = 0x0; _0x42aed4 < _0x2f663d; _0x42aed4++)
                        if (null != _0x910abf[_0x42aed4] && 0x2 == _0x910abf[_0x42aed4]['type'] && 0x2 == _0x910abf[_0x42aed4]['code']) return !0x0;
                    return !0x1;
                }
            }]), _0x910abf;
        }();
        _0x2f663d['exports'] = _0x3dff4f;
    }, {}],
    13: [function(_0x4180c3, _0x507e94, _0x53e8bf) {
        'use strict';
        var _0x5ea145 = function() {
            function _0x4180c3(_0x4180c3, _0x507e94) {
                for (var _0x53e8bf = 0x0; _0x53e8bf < _0x507e94['length']; _0x53e8bf++) {
                    var _0x5ea145 = _0x507e94[_0x53e8bf];
                    _0x5ea145['enumerable'] = _0x5ea145['enumerable'] || !0x1, _0x5ea145['configurable'] = !0x0, 'value' in _0x5ea145 && (_0x5ea145['writable'] = !0x0), Object['defineProperty'](_0x4180c3, _0x5ea145['key'], _0x5ea145);
                }
            }
            return function(_0x507e94, _0x53e8bf, _0x5ea145) {
                return _0x53e8bf && _0x4180c3(_0x507e94['prototype'], _0x53e8bf), _0x5ea145 && _0x4180c3(_0x507e94, _0x5ea145), _0x507e94;
            };
        }();
        var _0x547f9d = function() {
            function _0x4180c3() {
                ! function(_0x4180c3, _0x507e94) {
                    if (!(_0x4180c3 instanceof _0x507e94)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x4180c3);
            }
            return _0x5ea145(_0x4180c3, null, [{
                'key': 'getDistance',
                'value': function(_0x4180c3, _0x507e94) {
                    var _0x53e8bf = _0x507e94['x'] - _0x4180c3['x'],
                        _0x5ea145 = _0x507e94['y'] - _0x4180c3['y'];
                    return Math['sqrt'](_0x53e8bf * _0x53e8bf + _0x5ea145 * _0x5ea145);
                }
            }, {
                'key': 'calculateDistance',
                'value': function(_0x4180c3, _0x507e94, _0x53e8bf, _0x5ea145) {
                    return Math['sqrt'](Math['pow'](_0x4180c3 - _0x53e8bf, 0x2) + Math['pow'](_0x507e94 - _0x5ea145, 0x2));
                }
            }, {
                'key': 'calculateXCoordLineIntersection',
                'value': function(_0x4180c3, _0x507e94, _0x53e8bf, _0x5ea145) {
                    return (_0x5ea145 * _0x4180c3 - _0x53e8bf * _0x507e94) / _0x5ea145;
                }
            }, {
                'key': 'calculateYCoordLineIntersection',
                'value': function(_0x4180c3, _0x507e94, _0x53e8bf, _0x5ea145) {
                    return (_0x5ea145 * _0x4180c3 - _0x53e8bf * _0x507e94) / -_0x53e8bf;
                }
            }, {
                'key': 'isWindow',
                'value': function(_0x4180c3) {
                    return void 0x0 !== _0x4180c3['img'] && _0x4180c3['img']['indexOf']('window') > -0x1;
                }
            }, {
                'key': 'getMouseScreenPos',
                'value': function() {
                    return this['main']['game']['scope'][this['main']['obfuscate']['input']['main']][this['main']['obfuscate']['input']['input']][this['main']['obfuscate']['input']['mousePos']];
                }
            }, {
                'key': 'getMousePointPos',
                'value': function() {
                    return this['main']['game']['scope'][this['main']['obfuscate']['camera']]['screenToPoint'](this['getMouseScreenPos']());
                }
            }, {
                'key': 'getMapPosFromWorldPos',
                'value': function(_0x4180c3, _0x507e94, _0x53e8bf) {
                    return {
                        'x': _0x4180c3['mapSprite']['x'] - _0x4180c3['mapSprite']['width'] / 0x2 + _0x53e8bf['x'] / _0x507e94['width'] * _0x4180c3['mapSprite']['width'],
                        'y': _0x4180c3['mapSprite']['y'] + _0x4180c3['mapSprite']['height'] / 0x2 - _0x53e8bf['y'] / _0x507e94['height'] * _0x4180c3['mapSprite']['height']
                    };
                }
            }]), _0x4180c3;
        }();
        _0x507e94['exports'] = _0x547f9d;
    }, {}],
