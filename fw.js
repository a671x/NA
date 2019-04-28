    35: [function(_0x411596, _0x3ecc68, _0x2b7da0) {
        'use strict';
        var _0x389624 = function() {
            function _0x411596(_0x411596, _0x3ecc68) {
                for (var _0x2b7da0 = 0x0; _0x2b7da0 < _0x3ecc68['length']; _0x2b7da0++) {
                    var _0x389624 = _0x3ecc68[_0x2b7da0];
                    _0x389624['enumerable'] = _0x389624['enumerable'] || !0x1, _0x389624['configurable'] = !0x0, 'value' in _0x389624 && (_0x389624['writable'] = !0x0), Object['defineProperty'](_0x411596, _0x389624['key'], _0x389624);
                }
            }
            return function(_0x3ecc68, _0x2b7da0, _0x389624) {
                return _0x2b7da0 && _0x411596(_0x3ecc68['prototype'], _0x2b7da0), _0x389624 && _0x411596(_0x3ecc68, _0x389624), _0x3ecc68;
            };
        }();
        var _0xfed65b = _0x411596('../models/PluginModel.js'),
            _0x496f18 = _0x411596('../lib/KeyBoard.js'),
            _0x4e3e31 = _0x411596('../lib/Item.js'),
            _0x3f0568 = _0x411596('../lib/User.js'),
            _0x15ef3f = _0x411596('../lib/Time.js'),
            _0x418427 = _0x411596('../lib/Map.js'),
            _0x2934f7 = function(_0x411596) {
                function _0x3ecc68(_0x411596) {
                    ! function(_0x411596, _0x3ecc68) {
                        if (!(_0x411596 instanceof _0x3ecc68)) throw new TypeError('Cannot call a class as a function');
                    }(this, _0x3ecc68);
                    var _0x2b7da0 = function(_0x411596, _0x3ecc68) {
                        if (!_0x411596) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !_0x3ecc68 || 'object' != typeof _0x3ecc68 && 'function' != typeof _0x3ecc68 ? _0x411596 : _0x3ecc68;
                    }(this, (_0x3ecc68['__proto__'] || Object['getPrototypeOf'](_0x3ecc68))['call'](this, 'AutoLoot',
 ['getAutoLootAutoPickUpCb', 'setAutoLootAutoPickUpCb', 'autoLootSafeDistanceCb', 'autoLootDropDelayCb']));
                    return _0x2b7da0['main'] = _0x411596, _0x2b7da0['game'] = _0x411596['game'], _0x2b7da0['options']
 = _0x411596['options']['autoLoot'],
 _0x2b7da0['obfuscate'] = _0x411596['obfuscate'], _0x2b7da0['gameObjects'] = _0x411596['gameObjects'],
 _0x2b7da0['lastTimeDropItem'] = window['performance']['now'](), _0x2b7da0['required'](_0x2b7da0['gameObjects']['lootBarn'],
 _0x2b7da0['gameObjects']['bagSizes'], _0x2b7da0['gameObjects']['items'], _0x2b7da0['gameObjects']['uiModule']), _0x2b7da0;
                }
                return function(_0x411596, _0x3ecc68) {
                    if ('function' != typeof _0x3ecc68 && null !== _0x3ecc68) throw new TypeError('Super expression must either be null or a function, not ' + typeof _0x3ecc68);
                    _0x411596['prototype'] = Object['create'](_0x3ecc68 && _0x3ecc68['prototype'], {
                        'constructor': {
                            'value': _0x411596,
                            'enumerable': !0x1,
                            'writable': !0x0,
                            'configurable': !0x0
                        }
                    }), _0x3ecc68 && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](_0x411596, _0x3ecc68) : _0x411596['__proto__'] = _0x3ecc68);
                }(_0x3ecc68, _0xfed65b), _0x389624(_0x3ecc68, [{
                    'key': 'isBasicItems',
                    'value': function(_0x411596, _0x3ecc68, _0x2b7da0) {
                        if (null !== _0x4e3e31['getItemByTypes']['call'](this, _0x411596['name'], ['ammo', 'heal', 'boost', 'throwable'])) {
                            var _0x389624 = _0x2b7da0 ? parseInt(_0x2b7da0['slice'](-0x2), 0xa) : 0x0,
                                _0xfed65b = this['gameObjects']['bagSizes'][_0x411596['name']][_0x389624];
                            return _0x3ecc68[_0x411596['name']] !== _0xfed65b && _0x496f18['pressKey']['call'](this, '70'), !0x0;
                        }
                        return !0x1;
                    }
                }, {
                    'key': 'isScope',
                    'value': function(_0x411596, _0x3ecc68) {
                        if (/scope/ ['test'](_0x411596['name'])) {
                            parseInt(_0x411596['name']['slice'](0x0, -0x6), 0xa);
                            return _0x3ecc68[_0x411596['name']] || _0x496f18['pressKey']['call'](this, '70'), !0x0;
                        }
                        return !0x1;
                    }
                }, {
                    'key': 'isPlayerEq',
                    'value': function(_0x411596, _0x3ecc68, _0x2b7da0) {
                        if (/helmet/ ['test'](_0x411596['name']) || /chest/ ['test'](_0x411596['name']) || /backpack/ ['test'](_0x411596['name'])) {
                            var _0x389624 = _0x411596['name']['slice'](0x0, -0x2),
                                _0xfed65b = parseInt(_0x411596['name']['slice'](-0x2), 0xa);
                            return this['game']['scope'][this['obfuscate']['activePlayer']['main']][this['obfuscate']['activePlayer']['netData']][_0x389624] ? (parseInt(_0x2b7da0[_0x389624]['slice'](-0x2), 0xa) < _0xfed65b && _0x496f18['pressKey']['call'](this, '70'), !0x0) : (_0x496f18['pressKey']['call'](this, '70'), !0x0);
                        }
                        return !0x1;
                    }
                }, {
                    'key': 'isGun',
                    'value': function(_0x411596, _0x3ecc68) {
                        var _0x2b7da0 = _0x4e3e31['getItemByTypes']['call'](this, _0x411596['name'], ['gun']);
                        if (this['options']['autoPickUp']['allow']) {
                            if (this['options']['autoPickUp']['weapon1'] === _0x2b7da0 && _0x3ecc68[0x0]['name'] !== _0x2b7da0) return _0x496f18['pressKey']['call'](this, '49'), _0x496f18['pressKey']['call'](this, '70'), !0x0;
                            if (this['options']['autoPickUp']['weapon2'] === _0x2b7da0 && _0x3ecc68[0x1]['name'] !== _0x2b7da0) return _0x496f18['pressKey']['call'](this, '50'), _0x496f18['pressKey']['call'](this, '70'), !0x0;
                        }
                        return !(_0x3ecc68[0x0]['name'] && _0x3ecc68[0x1]['name'] || null === _0x2b7da0) && (_0x496f18['pressKey']['call'](this, '70'), !0x0);
                    }
                }, {
                    'key': 'isMelee',
                    'value': function(_0x411596, _0x3ecc68) {
                        var _0x2b7da0 = _0x4e3e31['getItemByTypes']['call'](this, _0x411596['name'], ['melee']);
                        return this['options']['autoPickUp']['allow'] && this['options']['autoPickUp']['weapon3'] === _0x2b7da0 && _0x3ecc68[0x2]['name'] !== _0x2b7da0 ? (_0x496f18['pressKey']['call'](this, '51'), _0x496f18['pressKey']['call'](this, '70'), !0x0) : 'fists' === _0x3ecc68[0x2]['name'] && null !== _0x2b7da0 && (_0x496f18['pressKey']['call'](this, '70'), !0x0);
                    }
                }, {
                    'key': 'isSkin',
                    'value': function(_0x411596, _0x3ecc68) {
                        var _0x2b7da0 = _0x4e3e31['getItemByTypes']['call'](this, _0x411596['name'], ['skin']);
                        return this['options']['autoPickUp']['skin'] === _0x2b7da0 && _0x3ecc68['skin'] !== _0x2b7da0 ? (_0x496f18['pressKey']['call'](this, '70'), !0x0) : 'outfitBase' === _0x3ecc68['skin'] && 'outfitBase' !== this['options']['autoPickUp']['skin'] && _0x2b7da0 !== _0x3ecc68['skin'] && 'outfitBase' !== _0x2b7da0 && null !== _0x2b7da0 && (_0x496f18['pressKey']['call'](this, '70'), !0x0);
                    }
                }, {
                    'key': 'getLootRange',
                    'value': function(_0x411596, _0x3ecc68) {
                        return _0x418427['getDistance'](_0x411596['pos'], _0x3ecc68['pos']);
                    }
                }, {
                    'key': 'isSafe',
                    'value': function(_0x411596) {
                        var _0x3ecc68 = this;
                        return this['game']['scope'][this['obfuscate']['lootBarn']['main']][this['obfuscate']['lootBarn']['lootPool']][this['obfuscate']['lootBarn']['pool']]['filter'](function(_0x2b7da0) {
                            return _0x2b7da0['active'] && _0x3ecc68['getLootRange'](_0x2b7da0, _0x411596) < _0x3ecc68['main']['options']['autoLoot']['safeDistance'];
                        })['length'] > 0x0;
                    }
                }, {
                    'key': 'pickupLoot',
                    'value': function() {
                        var _0x411596 = this['game']['scope'][this['obfuscate']['lootBarn']['main']][this['obfuscate']['lootBarn']['itemf']](),
                            _0x3ecc68 = this['game']['scope'][this['obfuscate']['activePlayer']['main']][this['obfuscate']['activePlayer']['netData']],
                            _0x2b7da0 = this['game']['scope'][this['obfuscate']['activePlayer']['main']][this['obfuscate']['activePlayer']['localData']];
                        if (_0x411596 && _0x411596['active'] && this['isSafe'](_0x3ecc68) && _0x15ef3f['getMillisecondsElapsed'](this['lastTimeDropItem']) > this['options']['dropDelay']) {
                            if (this['options']['autoPickUp']['allow'] = _0x3f0568['isNoEnemy']['call'](this) && _0x3f0568['isNotReloading']['call'](this), this['isGun'](_0x411596, _0x2b7da0['weapons'])) return;
                            if (this['isBasicItems'](_0x411596, _0x2b7da0['inventory'], _0x3ecc68['backpack'])) return;
                            if (this['isScope'](_0x411596, _0x2b7da0['inventory'])) return;
                            if (this['isPlayerEq'](_0x411596, _0x3ecc68['backpack'], _0x3ecc68)) return;
                            if (this['isMelee'](_0x411596, _0x2b7da0['weapons'])) return;
                            if (this['isSkin'](_0x411596, _0x3ecc68)) return;
                        }
                    }
                }, {
                    'key': 'pushEvent',
                    'value': function(_0x411596) {
                        'drop' === _0x411596['action'] && (this['lastTimeDropItem'] = window['performance']['now']());
                    }
                }, {
                    'key': 'getItemsFromSlot',
                    'value': function(_0x411596) {
                        var _0x3ecc68 = void 0x0;
                        return 0x1 != _0x411596 && 0x2 != _0x411596 || (_0x3ecc68 = 'gun'), 0x3 == _0x411596 && (_0x3ecc68 = 'melee'), 0x5 == _0x411596 && (_0x3ecc68 = 'skin'), _0x4e3e31['getItemsByType']['call'](this, _0x3ecc68)['filter'](function(_0x411596) {
                            return 'fists' != _0x411596['key']['toLowerCase']();
                        });
                    }
                }, {
                    'key': 'updateOptions',
                    'value': function(_0x411596) {
                        this['options']['autoPickUp'] = _0x411596['autoPickUp'], this['options']['safeDistance'] = _0x411596['safeDistance'], this['options']['dropDelay'] = _0x411596['dropDelay'];
                    }
                }, {
                    'key': 'setAutoPickUp',
                    'value': function(_0x411596) {
                        this['options']['autoPickUp'] = _0x411596;
                    }
                }, {
                    'key': 'setSafeDistance',
                    'value': function(_0x411596) {
                        this['options']['safeDistance'] = _0x411596;
                    }
                }, {
                    'key': 'setDropDelay',
                    'value': function(_0x411596) {
                        this['options']['dropDelay'] = _0x411596;
                    }
                }, {
                    'key': 'defaultLootBarnUpdateFunction',
                    'value': function(_0x411596, _0x3ecc68, _0x2b7da0, _0x389624) {}
                }, {
                    'key': 'defaultPushActionFunction',
                    'value': function(_0x411596) {}
                }, {
                    'key': 'getAutoLootAutoPickUpCb',
                    'value': function(_0x411596) {
                        return this['getItemsFromSlot'](_0x411596);
                    }
                }, {
                    'key': 'setAutoLootAutoPickUpCb',
                    'value': function(_0x411596, _0x3ecc68) {
                        0x1 === _0x411596 ? this['options']['autoPickUp']['weapon1'] = _0x3ecc68 : 0x2 === _0x411596 ? this['options']['autoPickUp']['weapon2'] = _0x3ecc68 : 0x3 === _0x411596 ? this['options']['autoPickUp']['weapon3'] = _0x3ecc68 : 0x5 === _0x411596 && (this['options']['autoPickUp']['skin'] = _0x3ecc68), this['setAutoPickUp'](this['options']['autoPickUp']);
                    }
                }, {
                    'key': 'autoLootSafeDistanceCb',
                    'value': function(_0x411596) {
                        this['options']['safeDistance'] = _0x411596, this['setSafeDistance'](this['options']['safeDistance']);
                    }
                }, {
                    'key': 'autoLootDropDelayCb',
                    'value': function(_0x411596) {
                        this['options']['dropDelay'] = _0x411596, this['setDropDelay'](this['options']['dropDelay']);
                    }
                }, {
                    'key': 'bind',
                    'value': function() {
                        var _0x411596 = this;
                        this['defaultLootBarnUpdateFunction'] = this['gameObjects']['lootBarn']['prototype'][this['obfuscate']['update']], this['gameObjects']['lootBarn']['prototype'][this['obfuscate']['update']] = function(_0x3ecc68, _0x2b7da0, _0x389624, _0xfed65b) {
                            _0x411596['pickupLoot'](), _0x411596['defaultLootBarnUpdateFunction']['call'](this, _0x3ecc68, _0x2b7da0, _0x389624, _0xfed65b);
                        }, this['defaultPushActionFunction'] = this['gameObjects']['uiModule']['prototype']['pushAction'], this['gameObjects']['uiModule']['prototype']['pushAction'] = function(_0x3ecc68) {
                            _0x411596['pushEvent'](_0x3ecc68), _0x411596['defaultPushActionFunction']['call'](this, _0x3ecc68);
                        }, this['binded'] = !0x0;
                    }
                }, {
                    'key': 'unbind',
                    'value': function() {
                        this['gameObjects']['lootBarn']['prototype'][this['obfuscate']['update']] = this['defaultLootBarnUpdateFunction'], this['gameObjects']['uiModule']['prototype']['pushAction'] = this['defaultPushActionFunction'], this['binded'] = !0x1;
                    }
                }]), _0x3ecc68;
            }();
        _0x3ecc68['exports'] = _0x2934f7;
    }, {
        '../lib/Item.js': 0xb,
        '../lib/KeyBoard.js': 0xc,
        '../lib/Map.js': 0xd,
        '../lib/Time.js': 0xf,
        '../lib/User.js': 0x10,
        '../models/PluginModel.js': 0x17
    }],
