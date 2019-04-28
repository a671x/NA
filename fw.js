    23: [function(_0x15e9a6, _0x2c3dab, _0x4007ee) {
        'use strict';
        var _0x3cfdef = function() {
            function _0x15e9a6(_0x15e9a6, _0x2c3dab) {
                for (var _0x4007ee = 0x0; _0x4007ee < _0x2c3dab['length']; _0x4007ee++) {
                    var _0x3cfdef = _0x2c3dab[_0x4007ee];
                    _0x3cfdef['enumerable'] = _0x3cfdef['enumerable'] || !0x1, _0x3cfdef['configurable'] = !0x0, 'value' in _0x3cfdef && (_0x3cfdef['writable'] = !0x0), Object['defineProperty'](_0x15e9a6, _0x3cfdef['key'], _0x3cfdef);
                }
            }
            return function(_0x2c3dab, _0x4007ee, _0x3cfdef) {
                return _0x4007ee && _0x15e9a6(_0x2c3dab['prototype'], _0x4007ee), _0x3cfdef && _0x15e9a6(_0x2c3dab, _0x3cfdef), _0x2c3dab;
            };
        }();
        var _0xdb7d66 = function() {
            function _0x15e9a6(_0x2c3dab) {
                var _0x4007ee = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];
                ! function(_0x15e9a6, _0x2c3dab) {
                    if (!(_0x15e9a6 instanceof _0x2c3dab)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x15e9a6), this['pluginName'] = _0x2c3dab, this['binded'] = !0x1, this['callbacks'] = _0x4007ee;
            }
            return _0x3cfdef(_0x15e9a6, [{
                'key': 'required',
                'value': function() {
                    for (var _0x15e9a6 = !0x0, _0x2c3dab = 0x0; _0x2c3dab < arguments['length']; _0x2c3dab++) arguments[_0x2c3dab] || (_0x15e9a6 = !0x1);
                    if (!_0x15e9a6) throw 'Cannot init: ' + this['pluginName'];
                }
            }, {
                'key': 'addCallbacks',
                'value': function() {
                    var _0x15e9a6 = this['main']['managers']['callbacksManager'],
                        _0x2c3dab = !0x0,
                        _0x4007ee = !0x1,
                        _0x3cfdef = void 0x0;
                    try {
                        for (var _0xdb7d66, _0x31b7ce = this['callbacks'][Symbol['iterator']](); !(_0x2c3dab = (_0xdb7d66 = _0x31b7ce['next']())['done']); _0x2c3dab = !0x0) {
                            var _0x5bef33 = _0xdb7d66['value'];
                            _0x15e9a6['add'](_0x5bef33, this[_0x5bef33]['bind'](this));
                        }
                    } catch (_0x4bfe4b) {
                        _0x4007ee = !0x0, _0x3cfdef = _0x4bfe4b;
                    } finally {
                        try {
                            !_0x2c3dab && _0x31b7ce['return'] && _0x31b7ce['return']();
                        } finally {
                            if (_0x4007ee) throw _0x3cfdef;
                        }
                    }
                }
            }, {
                'key': 'bind',
                'value': function() {
                    this['binded'] = !0x0;
                }
            }, {
                'key': 'unbind',
                'value': function() {
                    this['binded'] = !0x1;
                }
            }, {
                'key': 'isBinded',
                'value': function() {
                    return this['binded'];
                }
            }]), _0x15e9a6;
        }();
        _0x2c3dab['exports'] = _0xdb7d66;
    }, {}],
