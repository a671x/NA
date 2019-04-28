    16: [function(_0x466ba5, _0x509ac7, _0x4582aa) {
        'use strict';
        var _0x3c5157 = function() {
            function _0x466ba5(_0x466ba5, _0x509ac7) {
                for (var _0x4582aa = 0x0; _0x4582aa < _0x509ac7['length']; _0x4582aa++) {
                    var _0x3c5157 = _0x509ac7[_0x4582aa];
                    _0x3c5157['enumerable'] = _0x3c5157['enumerable'] || !0x1, _0x3c5157[_0x3e93('0x192')] = !0x0, 'value' in _0x3c5157 && (_0x3c5157['writable'] = !0x0), Object['defineProperty'](_0x466ba5, _0x3c5157[_0x3e93('0x193')], _0x3c5157);
                }
            }
            return function(_0x509ac7, _0x4582aa, _0x3c5157) {
                return _0x4582aa && _0x466ba5(_0x509ac7[_0x55c2('0x3c')], _0x4582aa), _0x3c5157 && _0x466ba5(_0x509ac7, _0x3c5157), _0x509ac7;
            };
        }();
        var _0x24bc1f = function() {
            function _0x466ba5() {
                ! function(_0x466ba5, _0x509ac7) {
                    if (!(_0x466ba5 instanceof _0x509ac7)) throw new TypeError('Cannot call a class as a function');
                }(this, _0x466ba5);
            }
            return _0x3c5157(_0x466ba5, null, [{
                'key': 'getSelfPos',
                'value': function() {
                    return this['main']['game']['scope'][this['main']['obfuscate']['activePlayer']['main']]['pos'];
                }
            }, {
                'key': 'isNoEnemy',
                'value': function() {
                    var _0x466ba5 = this['main']['game']['scope'][this['main']['obfuscate']['playerBarn']['main']][this['main']['obfuscate']['playerBarn']['players']];
                    if (!_0x466ba5[this['main']['game']['scope'][this['main']['obfuscate']['activeId']]]) return !0x1;
                    for (var _0x509ac7 = _0x466ba5[this['main']['game']['scope'][this['main']['obfuscate']['activeId']]]['teamId'], _0x4582aa = Object['keys'](_0x466ba5), _0x3c5157 = this['main']['game']['scope'][this['main']['obfuscate']['objectCreator']]['idToObj'], _0x24bc1f = 0x0; _0x24bc1f < _0x4582aa['length']; _0x24bc1f++) {
                        var _0x910638 = _0x4582aa[_0x24bc1f];
                        if (_0x3c5157[_0x910638] && !_0x3c5157[_0x910638][this['main']['obfuscate']['activePlayer']['netData']]['dead'] && !_0x3c5157[_0x910638][this['main']['obfuscate']['activePlayer']['netData']]['downed'] && _0x466ba5[_0x910638]['teamId'] != _0x509ac7) return !0x1;
                    }
                    return !0x0;
                }
            }, {
                'key': 'isNoMotion',
                'value': function() {
                    var _0x466ba5 = this['main']['game']['scope'][this['main']['obfuscate']['input']['main']][this['main']['obfuscate']['input']['input']]['keys'];
                    return !(_0x466ba5[this['main']['gameObjects']['key']['W']] || _0x466ba5[this['main']['gameObjects']['key']['D']] || _0x466ba5[this['main']['gameObjects']['key']['S']] || _0x466ba5[this['main']['gameObjects']['key']['A']]);
                }
            }, {
                'key': 'isNotReloadingOrHealing',
                'value': function() {
                    var _0x466ba5 = this['main']['game']['scope'][this['main']['obfuscate']['activePlayer']['main']]['action'];
                    return 0x1 != _0x466ba5[_0x55c2('0xc4')] && 0x2 != _0x466ba5['type'] && 0x3 != _0x466ba5[_0x55c2('0xc4')];
                }
            }, {
                'key': 'isNotReloading',
                'value': function() {
                    var _0x466ba5 = this['main']['game']['scope'][this['main']['obfuscate']['activePlayer']['main']]['action'];
                    return 0x1 != _0x466ba5[_0x55c2('0xc4')] && 0x2 != _0x466ba5[_0x55c2('0xc4')];
                }
            }, {
                'key': 'detectEnemies',
                'value': function() {
                    var _0x466ba5 = this['main']['game']['scope'][this['main']['obfuscate']['playerBarn']['main']][this['main']['obfuscate']['playerBarn']['players']],
                        _0x509ac7 = this['main']['game']['scope'][this['main']['obfuscate']['activeId']],
                        _0x4582aa = [];
                    if (!_0x466ba5[_0x509ac7]) return _0x4582aa;
                    for (var _0x3c5157 = this['main']['game']['scope'][this['main']['obfuscate']['objectCreator']]['idToObj'], _0x24bc1f = _0x466ba5[_0x509ac7]['teamId'], _0x9a0270 = Object['keys'](_0x466ba5), _0x32bc4f = 0x0; _0x32bc4f < _0x9a0270['length']; _0x32bc4f++) !_0x3c5157[_0x9a0270[_0x32bc4f]] || _0x3c5157[_0x9a0270[_0x32bc4f]][this['main']['obfuscate']['activePlayer']['netData']]['dead'] || _0x3c5157[_0x9a0270[_0x32bc4f]][this['main']['obfuscate']['activePlayer']['netData']]['downed'] || _0x466ba5[_0x9a0270[_0x32bc4f]]['teamId'] == _0x24bc1f || _0x9a0270[_0x32bc4f] != _0x509ac7 && (_0x4582aa[_0x9a0270[_0x32bc4f]] = _0x3c5157[_0x9a0270[_0x32bc4f]]);
                    return _0x4582aa;
                }
            }, {
                'key': 'playerIsActive',
                'value': function(_0x466ba5) {
                    return !_0x466ba5[this['main']['obfuscate']['activePlayer']['netData']]['dead'] && !_0x466ba5[this['main']['obfuscate']['activePlayer']['netData']]['downed'];
                }
            }, {
                'key': 'isTeammate',
                'value': function(_0x466ba5, _0x509ac7, _0x4582aa, _0x3c5157) {
                    return _0x4582aa['teamId'] == _0x509ac7 || _0x3c5157 == _0x466ba5;
                }
            }, {
                'key': 'canSeeEnemy',
                'value': function(_0x466ba5, _0x509ac7) {
                    var _0x4582aa = !0x0;
                    return !(arguments['length'] > 0x2 && void 0x0 !== arguments[0x2]) || arguments[0x2] || _0x466ba5['layer'] == _0x509ac7['layer'] || 0x2 == _0x509ac7['layer'] || 0x2 == _0x466ba5['layer'] || 0x3 == _0x509ac7['layer'] || 0x3 == _0x466ba5['layer'] || (_0x4582aa = !0x1), _0x4582aa;
                }
            }]), _0x466ba5;
        }();
        _0x509ac7['exports'] = _0x24bc1f;
    }, {}],
