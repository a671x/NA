    34: [function(_0x41e07c, _0x2a526a, _0x5cf36d) {
        'use strict';
        var _0x598fc9 = function() {
            function _0x41e07c(_0x41e07c, _0x2a526a) {
                for (var _0x5cf36d = 0x0; _0x5cf36d < _0x2a526a['length']; _0x5cf36d++) {
                    var _0x598fc9 = _0x2a526a[_0x5cf36d];
                    _0x598fc9['enumerable'] = _0x598fc9['enumerable'] || !0x1, _0x598fc9['configurable'] = !0x0, 'value' in _0x598fc9 && (_0x598fc9['writable'] = !0x0), Object['defineProperty'](_0x41e07c, _0x598fc9['key'], _0x598fc9);
                }
            }
            return function(_0x2a526a, _0x5cf36d, _0x598fc9) {
                return _0x5cf36d && _0x41e07c(_0x2a526a['prototype'], _0x5cf36d), _0x598fc9 && _0x41e07c(_0x2a526a, _0x598fc9), _0x2a526a;
            };
        }();
        var _0x1a8a9f = _0x41e07c('../../models/PluginModel.js'),
            _0x5f48f6 = _0x41e07c('../../lib/KeyBoard.js'),
            _0x3ddebd = _0x41e07c('../../lib/Item.js'),
            _0x2087c0 = _0x41e07c('../../lib/User.js'),
            _0xf77b12 = _0x41e07c('../../lib/Time.js'),
            _0x2f008f = _0x41e07c('../../lib/Map.js'),
            _0x269f4c = function(_0x41e07c) {
                function _0x2a526a(_0x41e07c) {
                    ! function(_0x41e07c, _0x2a526a) {
                        if (!(_0x41e07c instanceof _0x2a526a)) throw new TypeError('Cannot call a class as a function');
                    }(this, _0x2a526a);
                    var _0x5cf36d = function(_0x41e07c, _0x2a526a) {
                        if (!_0x41e07c) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !_0x2a526a || 'object' != typeof _0x2a526a && 'function' != typeof _0x2a526a ? _0x41e07c : _0x2a526a;
                    }(this, (_0x2a526a['__proto__'] || Object['getPrototypeOf'](_0x2a526a))['call'](this, 'AutoLoot', ['getAutoLootAutoPickUpCb', 'setAutoLootAutoPickUpCb', 'autoLootSafeDistanceCb', 'autoLootDropDelayCb']));
                    return _0x5cf36d['main'] = _0x41e07c, _0x5cf36d['game'] = _0x41e07c['game'], _0x5cf36d['options'] = _0x41e07c['options']['autoLoot'], _0x5cf36d['obfuscate'] = _0x41e07c['obfuscate'], _0x5cf36d['gameObjects'] = _0x41e07c['gameObjects'], _0x5cf36d['lastTimeDropItem'] = window['performance']['now'](), _0x5cf36d['required'](_0x5cf36d['gameObjects']['lootBarn'], _0x5cf36d['gameObjects']['bagSizes'], _0x5cf36d['gameObjects']['items'], _0x5cf36d['gameObjects']['uiModule']), _0x5cf36d;
                }
                return function(_0x41e07c, _0x2a526a) {
                    if ('function' != typeof _0x2a526a && null !== _0x2a526a) throw new TypeError('Super expression must either be null or a function, not ' + typeof _0x2a526a);
                    _0x41e07c[_0x55c2('0x3c')] = Object['create'](_0x2a526a && _0x2a526a['prototype'], {
                        'constructor': {
                            'value': _0x41e07c,
                            'enumerable': !0x1,
                            'writable': !0x0,
                            'configurable': !0x0
                        }
                    }), _0x2a526a && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](_0x41e07c, _0x2a526a) : _0x41e07c['__proto__'] = _0x2a526a);
                }(_0x2a526a, _0x1a8a9f), _0x598fc9(_0x2a526a, [{
                    'key': 'isBasicItems',
                    'value': function(_0x41e07c, _0x2a526a, _0x5cf36d) {
                        if (null !== _0x3ddebd['getItemByTypes']['call'](this, _0x41e07c['name'], ['ammo', 'heal', 'boost', 'throwable'])) {
                            var _0x598fc9 = _0x5cf36d ? parseInt(_0x5cf36d['slice'](-0x2), 0xa) : 0x0,
                                _0x1a8a9f = this['gameObjects']['bagSizes'][_0x41e07c['name']][_0x598fc9];
                            return _0x2a526a[_0x41e07c['name']] !== _0x1a8a9f && _0x5f48f6['pressKey']['call'](this, '70'), !0x0;
                        }
                        return !0x1;
                    }
                }, {
                    'key': 'isScope',
                    'value': function(_0x41e07c, _0x2a526a) {
                        if (/scope/ ['test'](_0x41e07c['name'])) {
                            parseInt(_0x41e07c['name']['slice'](0x0, -0x6), 0xa);
                            return _0x2a526a[_0x41e07c['name']] || _0x5f48f6['pressKey']['call'](this, '70'), !0x0;
                        }
                        return !0x1;
                    }
                }, {
                    'key': 'isPlayerEq',
                    'value': function(_0x41e07c, _0x2a526a, _0x5cf36d) {
                        if (/helmet/ ['test'](_0x41e07c['name']) || /chest/ ['test'](_0x41e07c['name']) || /backpack/ ['test'](_0x41e07c['name'])) {
                            var _0x598fc9 = _0x41e07c['name']['slice'](0x0, -0x2),
                                _0x1a8a9f = parseInt(_0x41e07c['name']['slice'](-0x2), 0xa);
                            return this['game']['scope'][this['obfuscate']['activePlayer']['main']][this['obfuscate']['activePlayer']['netData']][_0x598fc9] ? (parseInt(_0x5cf36d[_0x598fc9]['slice'](-0x2), 0xa) < _0x1a8a9f && _0x5f48f6['pressKey']['call'](this, '70'), !0x0) : (_0x5f48f6['pressKey']['call'](this, '70'), !0x0);
                        }
                        return !0x1;
                    }
                }, {
                    'key': 'isGun',
                    'value': function(_0x41e07c, _0x2a526a) {
                        var _0x5cf36d = _0x3ddebd['getItemByTypes']['call'](this, _0x41e07c['name'], ['gun']);
                        if (this['options']['autoPickUp']['allow']) {
                            if (this['options']['autoPickUp']['weapon1'] === _0x5cf36d && _0x2a526a[0x0]['name'] !== _0x5cf36d) return _0x5f48f6['pressKey']['call'](this, '49'), _0x5f48f6['pressKey']['call'](this, '70'), !0x0;
                            if (this['options']['autoPickUp']['weapon2'] === _0x5cf36d && _0x2a526a[0x1]['name'] !== _0x5cf36d) return _0x5f48f6['pressKey']['call'](this, '50'), _0x5f48f6['pressKey']['call'](this, '70'), !0x0;
                        }
                        return !(_0x2a526a[0x0]['name'] && _0x2a526a[0x1]['name'] || null === _0x5cf36d) && (_0x5f48f6['pressKey']['call'](this, '70'), !0x0);
                    }
                }, {
                    'key': 'isMelee',
                    'value': function(_0x41e07c, _0x2a526a) {
                        var _0x5cf36d = _0x3ddebd['getItemByTypes']['call'](this, _0x41e07c['name'], ['melee']);
                        return this['options']['autoPickUp']['allow'] && this['options']['autoPickUp']['weapon3'] === _0x5cf36d && _0x2a526a[0x2]['name'] !== _0x5cf36d ? (_0x5f48f6['pressKey']['call'](this, '51'), _0x5f48f6['pressKey']['call'](this, '70'), !0x0) : 'fists' === _0x2a526a[0x2]['name'] && null !== _0x5cf36d && (_0x5f48f6['pressKey']['call'](this, '70'), !0x0);
                    }
                }, {
                    'key': 'isSkin',
                    'value': function(_0x41e07c, _0x2a526a) {
                        var _0x5cf36d = _0x3ddebd['getItemByTypes']['call'](this, _0x41e07c['name'], ['skin']);
                        return this['options']['autoPickUp']['skin'] === _0x5cf36d && _0x2a526a['skin'] !== _0x5cf36d ? (_0x5f48f6['pressKey']['call'](this, '70'), !0x0) : 'outfitBase' === _0x2a526a['skin'] && 'outfitBase' !== this['options']['autoPickUp']['skin'] && _0x5cf36d !== _0x2a526a['skin'] && 'outfitBase' !== _0x5cf36d && null !== _0x5cf36d && (_0x5f48f6['pressKey']['call'](this, '70'), !0x0);
                    }
                }, {
                    'key': 'getLootRange',
                    'value': function(_0x41e07c, _0x2a526a) {
                        return _0x2f008f['getDistance'](_0x41e07c['pos'], _0x2a526a['pos']);
                    }
                }, {
                    'key': 'isSafe',
                    'value': function(_0x41e07c) {
                        var _0x2a526a = this;
                        return this['game']['scope'][this['obfuscate']['lootBarn']['main']][this['obfuscate']['lootBarn']['lootPool']][this['obfuscate']['lootBarn']['pool']]['filter'](function(_0x5cf36d) {
                            return _0x5cf36d['active'] && _0x2a526a['getLootRange'](_0x5cf36d, _0x41e07c) < _0x2a526a['main']['options']['autoLoot']['safeDistance'];
                        })['length'] > 0x0;
                    }
                }, {
                    'key': 'pickupLoot',
                    'value': function() {
                        var _0x41e07c = this['game']['scope'][this['obfuscate']['lootBarn']['main']][this['obfuscate']['lootBarn']['itemf']](),
                            _0x2a526a = this['game']['scope'][this['obfuscate']['activePlayer']['main']][this['obfuscate']['activePlayer']['netData']],
                            _0x5cf36d = this['game']['scope'][this['obfuscate']['activePlayer']['main']][this['obfuscate']['activePlayer']['localData']];
                        if (_0x41e07c && _0x41e07c['active'] && this['isSafe'](_0x2a526a) && _0xf77b12['getMillisecondsElapsed'](this['lastTimeDropItem']) > this['options']['dropDelay']) {
                            if (this['options']['autoPickUp']['allow'] = _0x2087c0['isNoEnemy']['call'](this) && _0x2087c0['isNotReloading']['call'](this), this['isGun'](_0x41e07c, _0x5cf36d['weapons'])) return;
                            if (this['isBasicItems'](_0x41e07c, _0x5cf36d['inventory'], _0x2a526a['backpack'])) return;
                            if (this['isScope'](_0x41e07c, _0x5cf36d['inventory'])) return;
                            if (this['isPlayerEq'](_0x41e07c, _0x2a526a['backpack'], _0x2a526a)) return;
                            if (this['isMelee'](_0x41e07c, _0x5cf36d['weapons'])) return;
                            if (this['isSkin'](_0x41e07c, _0x2a526a)) return;
                        }
                    }
                }, {
                    'key': 'pushEvent',
                    'value': function(_0x41e07c) {
                        'drop' === _0x41e07c['action'] && (this['lastTimeDropItem'] = window['performance']['now']());
                    }
                }, {
                    'key': 'getItemsFromSlot',
                    'value': function(_0x41e07c) {
                        var _0x2a526a = void 0x0;
                        return 0x1 != _0x41e07c && 0x2 != _0x41e07c || (_0x2a526a = 'gun'), 0x3 == _0x41e07c && (_0x2a526a = 'melee'), 0x5 == _0x41e07c && (_0x2a526a = 'skin'), _0x3ddebd['getItemsByType']['call'](this, _0x2a526a)['filter'](function(_0x41e07c) {
                            return 'fists' != _0x41e07c[_0x3e93('0x193')]['toLowerCase']();
                        });
                    }
                }, {
                    'key': 'updateOptions',
                    'value': function(_0x41e07c) {
                        this['options']['autoPickUp'] = _0x41e07c['autoPickUp'], this['options']['safeDistance'] = _0x41e07c['safeDistance'], this['options']['dropDelay'] = _0x41e07c['dropDelay'];
                    }
                }, {
                    'key': 'setAutoPickUp',
                    'value': function(_0x41e07c) {
                        this['options']['autoPickUp'] = _0x41e07c;
                    }
                }, {
                    'key': 'setSafeDistance',
                    'value': function(_0x41e07c) {
                        this['options']['safeDistance'] = _0x41e07c;
                    }
                }, {
                    'key': 'setDropDelay',
                    'value': function(_0x41e07c) {
                        this['options']['dropDelay'] = _0x41e07c;
                    }
                }, {
                    'key': 'defaultLootBarnUpdateFunction',
                    'value': function(_0x41e07c, _0x2a526a, _0x5cf36d, _0x598fc9) {}
                }, {
                    'key': 'defaultPushActionFunction',
                    'value': function(_0x41e07c) {}
                }, {
                    'key': 'getAutoLootAutoPickUpCb',
                    'value': function(_0x41e07c) {
                        return this['getItemsFromSlot'](_0x41e07c);
                    }
                }, {
                    'key': 'setAutoLootAutoPickUpCb',
                    'value': function(_0x41e07c, _0x2a526a) {
                        0x1 === _0x41e07c ? this['options']['autoPickUp']['weapon1'] = _0x2a526a : 0x2 === _0x41e07c ? this['options']['autoPickUp']['weapon2'] = _0x2a526a : 0x3 === _0x41e07c ? this['options']['autoPickUp']['weapon3'] = _0x2a526a : 0x5 === _0x41e07c && (this['options']['autoPickUp']['skin'] = _0x2a526a), this['setAutoPickUp'](this['options']['autoPickUp']);
                    }
                }, {
                    'key': 'autoLootSafeDistanceCb',
                    'value': function(_0x41e07c) {
                        this['options']['safeDistance'] = _0x41e07c, this['setSafeDistance'](this['options']['safeDistance']);
                    }
                }, {
                    'key': 'autoLootDropDelayCb',
                    'value': function(_0x41e07c) {
                        this['options']['dropDelay'] = _0x41e07c, this['setDropDelay'](this['options']['dropDelay']);
                    }
                }, {
                    'key': 'bind',
                    'value': function() {
                        var _0x41e07c = this;
                        this['defaultLootBarnUpdateFunction'] = this['gameObjects']['lootBarn'][_0x55c2('0x3c')][this['obfuscate']['update']], this['gameObjects']['lootBarn'][_0x55c2('0x3c')][this['obfuscate']['update']] = function(_0x2a526a, _0x5cf36d, _0x598fc9, _0x1a8a9f) {
                            _0x41e07c['pickupLoot'](), _0x41e07c['defaultLootBarnUpdateFunction']['call'](this, _0x2a526a, _0x5cf36d, _0x598fc9, _0x1a8a9f);
                        }, this['defaultPushActionFunction'] = this['gameObjects']['uiModule']['prototype']['pushAction'], this['gameObjects']['uiModule'][_0x55c2('0x3c')]['pushAction'] = function(_0x2a526a) {
                            _0x41e07c['pushEvent'](_0x2a526a), _0x41e07c['defaultPushActionFunction']['call'](this, _0x2a526a);
                        }, this['binded'] = !0x0;
                    }
                }, {
                    'key': 'unbind',
                    'value': function() {
                        this['gameObjects']['lootBarn']['prototype'][this['obfuscate']['update']] = this['defaultLootBarnUpdateFunction'], this['gameObjects']['uiModule'][_0x55c2('0x3c')]['pushAction'] = this['defaultPushActionFunction'], this['binded'] = !0x1;
                    }
                }]), _0x2a526a;
            }();
        _0x2a526a['exports'] = _0x269f4c;
    }, {
        '../../lib/Item.js': 0xb,
        '../../lib/KeyBoard.js': 0xc,
        '../../lib/Map.js': 0xd,
        '../../lib/Time.js': 0xf,
        '../../lib/User.js': 0x10,
        '../../models/PluginModel.js': 0x17
    }],
