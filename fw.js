    16: [function(_0x2e6aca, _0x45c408, _0x328b05) {
        'use strict';
        var _0x30717e = function() {
            function _0x2e6aca(_0x2e6aca, _0x45c408) {
                for (var _0x328b05 = 0x0; _0x328b05 < _0x45c408['length']; _0x328b05++) {
                    var _0x30717e = _0x45c408[_0x328b05];
                    _0x30717e['enumerable'] = _0x30717e['enumerable'] || !0x1, _0x30717e['configurable'] = !0x0, 'value' in _0x30717e && (_0x30717e['writable'] = !0x0), Object['defineProperty'](_0x2e6aca, _0x30717e['key'], _0x30717e);
                }
            }
            return function(_0x45c408, _0x328b05, _0x30717e) {
                return _0x328b05 && _0x2e6aca(_0x45c408['prototype'], _0x328b05), _0x30717e && _0x2e6aca(_0x45c408, _0x30717e), _0x45c408;
            };
        }();
        var _0x55029b = function() {
            function _0x2e6aca() {
                ! function(_0x2e6aca, _0x45c408) {
                    if (!(_0x2e6aca instanceof _0x45c408)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x2e6aca);
            }
            return _0x30717e(_0x2e6aca, null, [{
                'key': 'getSelfPos',
                'value': function() {
                    return this['main']['game']['scope'][this['main']['obfuscate']['activePlayer']['main']]['pos'];
                }
            }, {
                'key': 'isNoEnemy',
                'value': function() {
                    var _0x2e6aca = this['main']['game']['scope'][this['main']['obfuscate']['playerBarn']['main']][this['main']['obfuscate']['playerBarn']['players']];
                    if (!_0x2e6aca[this['main']['game']['scope'][this['main']['obfuscate']['activeId']]]) return !0x1;
                    for (var _0x45c408 = _0x2e6aca[this['main']['game']['scope'][this['main']['obfuscate']['activeId']]]['teamId'], _0x328b05 = Object['keys'](_0x2e6aca), _0x30717e = this['main']['game']['scope'][this['main']['obfuscate']['objectCreator']]['idToObj'], _0x55029b = 0x0; _0x55029b < _0x328b05['length']; _0x55029b++) {
                        var _0x338da9 = _0x328b05[_0x55029b];
                        if (_0x30717e[_0x338da9] && !_0x30717e[_0x338da9][this['main']['obfuscate']['activePlayer']['netData']]['dead'] && !_0x30717e[_0x338da9][this['main']['obfuscate']['activePlayer']['netData']]['downed'] && _0x2e6aca[_0x338da9]['teamId'] != _0x45c408) return !0x1;
                    }
                    return !0x0;
                }
            }, {
                'key': 'isNoMotion',
                'value': function() {
                    var _0x2e6aca = this['main']['game']['scope'][this['main']['obfuscate']['input']['main']][this['main']['obfuscate']['input']['input']]['keys'];
                    return !(_0x2e6aca[this['main']['gameObjects']['key']['W']] || _0x2e6aca[this['main']['gameObjects']['key']['D']] || _0x2e6aca[this['main']['gameObjects']['key']['S']] || _0x2e6aca[this['main']['gameObjects']['key']['A']]);
                }
            }, {
                'key': 'isNotReloadingOrHealing',
                'value': function() {
                    var _0x2e6aca = this['main']['game']['scope'][this['main']['obfuscate']['activePlayer']['main']]['action'];
                    return 0x1 != _0x2e6aca['type'] && 0x2 != _0x2e6aca['type'];
                }
            }, {
                'key': 'isNotReloading',
                'value': function() {
                    return 0x1 != this['main']['game']['scope'][this['main']['obfuscate']['activePlayer']['main']]['action']['type'];
                }
            }, {
                'key': 'detectEnemies',
                'value': function() {
                    var _0x2e6aca = this['main']['game']['scope'][this['main']['obfuscate']['playerBarn']['main']][this['main']['obfuscate']['playerBarn']['players']],
                        _0x45c408 = this['main']['game']['scope'][this['main']['obfuscate']['activeId']],
                        _0x328b05 = [];
                    if (!_0x2e6aca[_0x45c408]) return _0x328b05;
                    for (var _0x30717e = this['main']['game']['scope'][this['main']['obfuscate']['objectCreator']]['idToObj'], _0x55029b = _0x2e6aca[_0x45c408]['teamId'], _0x926d2 = Object['keys'](_0x2e6aca), _0xb59072 = 0x0; _0xb59072 < _0x926d2['length']; _0xb59072++) !_0x30717e[_0x926d2[_0xb59072]] || _0x30717e[_0x926d2[_0xb59072]][this['main']['obfuscate']['activePlayer']['netData']]['dead'] || _0x30717e[_0x926d2[_0xb59072]][this['main']['obfuscate']['activePlayer']['netData']]['downed'] || _0x2e6aca[_0x926d2[_0xb59072]]['teamId'] == _0x55029b || _0x926d2[_0xb59072] != _0x45c408 && (_0x328b05[_0x926d2[_0xb59072]] = _0x30717e[_0x926d2[_0xb59072]]);
                    return _0x328b05;
                }
            }, {
                'key': 'playerIsActive',
                'value': function(_0x2e6aca) {
                    return !_0x2e6aca[this['main']['obfuscate']['activePlayer']['netData']]['dead'] && !_0x2e6aca[this['main']['obfuscate']['activePlayer']['netData']]['downed'];
                }
            }, {
                'key': 'isTeammate',
                'value': function(_0x2e6aca, _0x45c408, _0x328b05, _0x30717e) {
                    return _0x328b05['teamId'] == _0x45c408 || _0x30717e == _0x2e6aca;
                }
            }, {
                'key': 'canSeeEnemy',
                'value': function(_0x2e6aca, _0x45c408) {
                    var _0x328b05 = !0x0;
                    return !(arguments['length'] > 0x2 && void 0x0 !== arguments[0x2]) || arguments[0x2] || _0x2e6aca['layer'] == _0x45c408['layer'] || 0x2 == _0x45c408['layer'] || 0x2 == _0x2e6aca['layer'] || 0x3 == _0x45c408['layer'] || 0x3 == _0x2e6aca['layer'] || (_0x328b05 = !0x1), _0x328b05;
                }
            }]), _0x2e6aca;
        }();
        _0x45c408['exports'] = _0x55029b;
    }, {}],
