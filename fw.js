    11: [function(_0x19fe35, _0x209756, _0x476afc) {
        'use strict';
        var _0x1fa79d = function() {
            function _0x19fe35(_0x19fe35, _0x209756) {
                for (var _0x476afc = 0x0; _0x476afc < _0x209756['length']; _0x476afc++) {
                    var _0x1fa79d = _0x209756[_0x476afc];
                    _0x1fa79d['enumerable'] = _0x1fa79d['enumerable'] || !0x1, _0x1fa79d['configurable'] = !0x0, 'value' in _0x1fa79d && (_0x1fa79d['writable'] = !0x0), Object['defineProperty'](_0x19fe35, _0x1fa79d['key'], _0x1fa79d);
                }
            }
            return function(_0x209756, _0x476afc, _0x1fa79d) {
                return _0x476afc && _0x19fe35(_0x209756[_0x55c2('0x3c')], _0x476afc), _0x1fa79d && _0x19fe35(_0x209756, _0x1fa79d), _0x209756;
            };
        }();
        var _0x3343bb = function() {
            function _0x19fe35() {
                ! function(_0x19fe35, _0x209756) {
                    if (!(_0x19fe35 instanceof _0x209756)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x19fe35);
            }
            return _0x1fa79d(_0x19fe35, null, [{
                'key': 'getItemByName',
                'value': function(_0x19fe35) {
                    var _0x209756 = Object['keys'](this['main']['gameObjects']['items']),
                        _0x476afc = !0x0,
                        _0x1fa79d = !0x1,
                        _0x3343bb = void 0x0;
                    try {
                        for (var _0x53b387, _0x5abcce = _0x209756[Symbol['iterator']](); !(_0x476afc = (_0x53b387 = _0x5abcce['next']())['done']); _0x476afc = !0x0) {
                            var _0xf8ed24 = _0x53b387['value'],
                                _0x3e59bd = this['main']['gameObjects']['items'][_0xf8ed24];
                            if (_0xf8ed24 === _0x19fe35) return _0x3e59bd;
                        }
                    } catch (_0x589b31) {
                        _0x1fa79d = !0x0, _0x3343bb = _0x589b31;
                    } finally {
                        try {
                            !_0x476afc && _0x5abcce['return'] && _0x5abcce['return']();
                        } finally {
                            if (_0x1fa79d) throw _0x3343bb;
                        }
                    }
                    return null;
                }
            }, {
                'key': 'getItemByTypes',
                'value': function(_0x19fe35, _0x209756) {
                    var _0x476afc = Object['keys'](this['main']['gameObjects']['items']),
                        _0x1fa79d = !0x0,
                        _0x3343bb = !0x1,
                        _0x441b96 = void 0x0;
                    try {
                        for (var _0x33bd13, _0x18b673 = _0x476afc[Symbol['iterator']](); !(_0x1fa79d = (_0x33bd13 = _0x18b673['next']())['done']); _0x1fa79d = !0x0) {
                            var _0x3de3cb = _0x33bd13['value'],
                                _0x5458d4 = this['main']['gameObjects']['items'][_0x3de3cb],
                                _0xb7b060 = !0x0,
                                _0x3cf9aa = !0x1,
                                _0x20e7e1 = void 0x0;
                            try {
                                for (var _0x59c2ff, _0x3d6869 = _0x209756[Symbol['iterator']](); !(_0xb7b060 = (_0x59c2ff = _0x3d6869['next']())['done']); _0xb7b060 = !0x0) {
                                    var _0x4e3467 = _0x59c2ff['value'];
                                    if (_0x5458d4['type'] === _0x4e3467 && _0x3de3cb === _0x19fe35) return _0x3de3cb;
                                }
                            } catch (_0x4e22a5) {
                                _0x3cf9aa = !0x0, _0x20e7e1 = _0x4e22a5;
                            } finally {
                                try {
                                    !_0xb7b060 && _0x3d6869['return'] && _0x3d6869['return']();
                                } finally {
                                    if (_0x3cf9aa) throw _0x20e7e1;
                                }
                            }
                        }
                    } catch (_0x19f44d) {
                        _0x3343bb = !0x0, _0x441b96 = _0x19f44d;
                    } finally {
                        try {
                            !_0x1fa79d && _0x18b673['return'] && _0x18b673['return']();
                        } finally {
                            if (_0x3343bb) throw _0x441b96;
                        }
                    }
                    return null;
                }
            }, {
                'key': 'getItemsByType',
                'value': function(_0x19fe35) {
                    var _0x209756 = [],
                        _0x476afc = Object['keys'](this['main']['gameObjects']['items']),
                        _0x1fa79d = !0x0,
                        _0x3343bb = !0x1,
                        _0x3a15db = void 0x0;
                    try {
                        for (var _0x1e05f5, _0x3ef731 = _0x476afc[Symbol['iterator']](); !(_0x1fa79d = (_0x1e05f5 = _0x3ef731['next']())['done']); _0x1fa79d = !0x0) {
                            var _0x54cff0 = _0x1e05f5['value'];
                            this['main']['gameObjects']['items'][_0x54cff0][_0x55c2('0xc4')] === _0x19fe35 && _0x209756[_0x55c2('0xa')]({
                                'name': this['main']['gameObjects']['items'][_0x54cff0]['name'],
                                'key': _0x54cff0
                            });
                        }
                    } catch (_0x4e03ef) {
                        _0x3343bb = !0x0, _0x3a15db = _0x4e03ef;
                    } finally {
                        try {
                            !_0x1fa79d && _0x3ef731['return'] && _0x3ef731['return']();
                        } finally {
                            if (_0x3343bb) throw _0x3a15db;
                        }
                    }
                    return _0x209756;
                }
            }, {
                'key': 'getExplosionTypesByDecalType',
                'value': function(_0x19fe35) {
                    var _0x209756 = [],
                        _0x476afc = Object['keys'](this['main']['gameObjects']['explosions']),
                        _0x1fa79d = !0x0,
                        _0x3343bb = !0x1,
                        _0x79dee1 = void 0x0;
                    try {
                        for (var _0x3229dd, _0x10b493 = _0x476afc[Symbol['iterator']](); !(_0x1fa79d = (_0x3229dd = _0x10b493['next']())['done']); _0x1fa79d = !0x0) {
                            var _0x35d444 = _0x3229dd['value'];
                            this['main']['gameObjects']['explosions'][_0x35d444]['decalType'] === _0x19fe35 && _0x209756[_0x55c2('0xa')](this['main']['gameObjects']['explosions'][_0x35d444]['explosionEffectType']);
                        }
                    } catch (_0x57870a) {
                        _0x3343bb = !0x0, _0x79dee1 = _0x57870a;
                    } finally {
                        try {
                            !_0x1fa79d && _0x10b493['return'] && _0x10b493['return']();
                        } finally {
                            if (_0x3343bb) throw _0x79dee1;
                        }
                    }
                    return _0x209756;
                }
            }]), _0x19fe35;
        }();
        _0x209756['exports'] = _0x3343bb;
    }, {}],
