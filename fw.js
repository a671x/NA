    31: [function(_0x476ea3, _0x23349b, _0x525dcd) {
        'use strict';
        var _0x2057d1 = function() {
            function _0x476ea3(_0x476ea3, _0x23349b) {
                for (var _0x525dcd = 0x0; _0x525dcd < _0x23349b['length']; _0x525dcd++) {
                    var _0x2057d1 = _0x23349b[_0x525dcd];
                    _0x2057d1['enumerable'] = _0x2057d1['enumerable'] || !0x1, _0x2057d1['configurable'] = !0x0, 'value' in _0x2057d1 && (_0x2057d1['writable'] = !0x0), Object['defineProperty'](_0x476ea3, _0x2057d1['key'], _0x2057d1);
                }
            }
            return function(_0x23349b, _0x525dcd, _0x2057d1) {
                return _0x525dcd && _0x476ea3(_0x23349b['prototype'], _0x525dcd), _0x2057d1 && _0x476ea3(_0x23349b, _0x2057d1), _0x23349b;
            };
        }();
        var _0x491951 = _0x476ea3('../listeners/MouseListener.js'),
            _0x31d0a7 = _0x476ea3('../models/PluginModel.js'),
            _0x2d91cf = _0x476ea3('../lib/KeyBoard.js'),
            _0x4a884d = _0x476ea3('../lib/Math2.js'),
            _0x368eb9 = _0x476ea3('../lib/Item.js'),
            _0x7a04b = _0x476ea3('../lib/User.js'),
            _0x3be2f3 = _0x476ea3('../lib/Map.js'),
            _0x243392 = function(_0x476ea3) {
                function _0x23349b(_0x476ea3) {
                    ! function(_0x476ea3, _0x23349b) {
                        if (!(_0x476ea3 instanceof _0x23349b)) throw new TypeError('Cannot call a class as a function');
                    }(this, _0x23349b);
                    var _0x525dcd = function(_0x476ea3, _0x23349b) {
                        if (!_0x476ea3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !_0x23349b || 'object' != typeof _0x23349b && 'function' != typeof _0x23349b ? _0x476ea3 : _0x23349b;
                    }(this, (_0x23349b['__proto__'] || Object['getPrototypeOf'](_0x23349b))['call'](this, 'AutoAim', ['autoAimRenderCb', 'autoAimTargetEnemyNicknameVisibilityCb', 'autoAimForwardFiringCoeffCb', 'autoAimSmoothLevelCb', 'autoAimRestirctionAngleCb', 'autoAimRestirctionsCb', 'autoAimDetectOnDifferentLevelsCb', 'autoAimEnemyExtendedInfoCb', 'autoAimShowEnemiesActionsCb']));
                    return _0x525dcd['main'] = _0x476ea3, _0x525dcd['game'] = _0x476ea3['game'], _0x525dcd['options'] = _0x476ea3['options']['autoAim'], _0x525dcd['managers'] = _0x476ea3['managers'], _0x525dcd['obfuscate'] = _0x476ea3['obfuscate'], _0x525dcd['gameObjects'] = _0x476ea3['gameObjects'], _0x525dcd['state'] = null, _0x525dcd['targetTexture'] = window['PIXI']['Texture']['fromImage']('img/gui/ping-team-coming.svg'), _0x525dcd['reloadingTexture'] = window['PIXI']['Texture']['fromImage']('https://raw.githubusercontent.com/a671x/NA/master/images/ammo.svg'), _0x525dcd['healingTexture'] = window['PIXI']['Texture']['fromImage']('https://raw.githubusercontent.com/a671x/NA/master/images/heal.svg'), _0x525dcd['lastTargetIndicator'] = null, _0x525dcd['spaceKeyListeners'] = {
                        'keydown': function(_0x476ea3) {
                            var _0x23349b = this['game']['scope'][this['obfuscate']['input']['main']][this['obfuscate']['input']['input']]['mouseButtons'];
                            0x20 == _0x476ea3['which'] && (_0x23349b[0x0] = !0x0);
                        },
                        'keyup': function(_0x476ea3) {
                            var _0x23349b = this['game']['scope'][this['obfuscate']['input']['main']][this['obfuscate']['input']['input']]['mouseButtons'];
                            0x20 == _0x476ea3['which'] && (_0x23349b[0x0] = !0x1);
                        }
                    }, _0x525dcd['required'](_0x525dcd['gameObjects']['bullets'], _0x525dcd['gameObjects']['items'], _0x525dcd['gameObjects']['playerBarn']), _0x525dcd;
                }
                return function(_0x476ea3, _0x23349b) {
                    if ('function' != typeof _0x23349b && null !== _0x23349b) throw new TypeError('Super expression must either be null or a function, not ' + typeof _0x23349b);
                    _0x476ea3['prototype'] = Object['create'](_0x23349b && _0x23349b['prototype'], {
                        'constructor': {
                            'value': _0x476ea3,
                            'enumerable': !0x1,
                            'writable': !0x0,
                            'configurable': !0x0
                        }
                    }), _0x23349b && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](_0x476ea3, _0x23349b) : _0x476ea3['__proto__'] = _0x23349b);
                }(_0x23349b, _0x31d0a7), _0x2057d1(_0x23349b, [{
                    'key': 'detectEnemies',
                    'value': function() {
                        var _0x476ea3 = [];


this['game']['scope'][this['obfuscate']['menu']].container.alpha = 0.8;
if ( this['game']['scope'][this['obfuscate']['activePlayer']['main']].weapType != this['game']['scope'][this['obfuscate']['activePlayer']['main']][this['obfuscate']['activePlayer']['localData']].weapons["3"].name ) {
                        if (!this['game']['scope'][this['obfuscate']['playerBarn']['main']][this['obfuscate']['playerBarn']['players']][this['game']['scope'][this['obfuscate']['activeId']]]) return _0x476ea3;
                        for (var _0x23349b = this['game']['scope'][this['obfuscate']['activeId']], _0x525dcd = this['game']['scope'][this['obfuscate']['playerBarn']['main']][this['obfuscate']['playerBarn']['players']][_0x23349b]['teamId'], _0x2057d1 = Object['keys'](this['game']['scope'][this['obfuscate']['playerBarn']['main']][this['obfuscate']['playerBarn']['players']]), _0x491951 = this['game']['scope'][this['obfuscate']['activePlayer']['main']], _0x31d0a7 = 0x0; _0x31d0a7 < _0x2057d1['length']; _0x31d0a7++) {
                            var _0x2d91cf = this['game']['scope'][this['obfuscate']['objectCreator']]['idToObj'][_0x2057d1[_0x31d0a7]],
                                _0x4a884d = this['game']['scope'][this['obfuscate']['playerBarn']['main']][this['obfuscate']['playerBarn']['players']][_0x2057d1[_0x31d0a7]];
                            _0x2d91cf && (this['options']['showEnemiesActions'] && this['showPlayerAction'](_0x2d91cf), _0x7a04b['playerIsActive']['call'](this, _0x2d91cf) && !_0x7a04b['isTeammate'](_0x23349b, _0x525dcd, _0x4a884d, _0x2057d1[_0x31d0a7]) && _0x7a04b['canSeeEnemy'](_0x491951, _0x2d91cf, this['options']['detectOnDifferentLevels']) && (_0x476ea3[_0x2057d1[_0x31d0a7]] = _0x2d91cf));
                        }}
                        return _0x476ea3;
                    }
                }, {
                    'key': 'getMinimalDistanceIndex',
                    'value': function(t) {
                        return t['indexOf'](Math['min']['apply'](null, t));
                    }
                }, {
                    'key': 'calculateTargetMousePosition', // a.k.a        if (null != L) {
                    'value': function(_0x476ea3, _0x23349b, _0x525dcd, _0x2057d1, _0x491951) {
                        var _0x31d0a7 = 0x0,
                            _0x2d91cf = 0x1 / 0x0;
                        _0x31d0a7 = this['game']['scope'][this['obfuscate']['activePlayer']['main']]['weapType'] && this['gameObjects']['items'][this['game']['scope'][this['obfuscate']['activePlayer']['main']]['weapType']]['bulletType'] ? this['gameObjects']['bullets'][this['gameObjects']['items'][this['game']['scope'][this['obfuscate']['activePlayer']['main']]['weapType']]['bulletType']]['speed'] * this['options']['forwardFiringCoeff'] : 0x3e8;
                        for (var _0x368eb9 = _0x7a04b['getSelfPos']['call'](this), _0x243392 = {
                                'x': _0x476ea3['x'],
                                'y': _0x476ea3['y']
                            }, _0x54b3cb = _0x3be2f3['calculateDistance'](_0x368eb9['x'], _0x368eb9['y'], _0x476ea3['x'], _0x476ea3['y']), _0x1018a3 = (_0x476ea3['x'] - _0x525dcd['x']) / ((_0x23349b - _0x2057d1 + 0x1) / 0x3e8), _0x5b9032 = (_0x476ea3['y'] - _0x525dcd['y']) / ((_0x23349b - _0x2057d1 + 0x1) / 0x3e8), _0x343fe3 = 0x0; _0x343fe3 < 0xa; _0x343fe3++) _0x2d91cf = _0x54b3cb / _0x31d0a7, _0x243392 = {
                            'x': _0x476ea3['x'] + _0x1018a3 * _0x2d91cf,
                            'y': _0x476ea3['y'] + _0x5b9032 * _0x2d91cf
                        }, _0x54b3cb = _0x3be2f3['calculateDistance'](_0x368eb9['x'], _0x368eb9['y'], _0x243392['x'], _0x243392['y']);
                        var _0x25c84e = this['game']['scope'][this['obfuscate']['camera']]['screenWidth'] / 0x2,
                            _0x52edd2 = this['game']['scope'][this['obfuscate']['camera']]['screenHeight'] / 0x2,
                            _0x11e5a3 = _0x52edd2 > _0x25c84e ? _0x25c84e : _0x52edd2;
                        _0x11e5a3 = Math['floor'](_0x11e5a3 - 0x1);
                        var _0x394f74 = _0x4a884d['calculateRadianAngle'](_0x368eb9['x'], _0x368eb9['y'], _0x243392['x'], _0x243392['y']);
                        return {
                            'x': _0x25c84e + _0x11e5a3 * Math['cos'](_0x394f74),
                            'y': _0x52edd2 - _0x11e5a3 * Math['sin'](_0x394f74)
                        };
                    }
                }, {
                    'key': 'getNewState',
                    'value': function() {
                        for (var _0x476ea3 = [], _0x23349b = 0x0; _0x23349b < this['options']['smoothLevel']; _0x23349b++) _0x476ea3['push']({
                            'distance': null,
                            'radianAngle': null,
                            'pos': _0x3be2f3['getMouseScreenPos']['call'](this),
                            'targetMousePosition': _0x3be2f3['getMouseScreenPos']['call'](this),
                            'timestamp': 0x0
                        });
                        return _0x476ea3['new'] = null, _0x476ea3['player'] = {
                            'nameText': {
                                'visible': !0x1,
                                'style': {
                                    'fontSize': 0x16,
                                    'fill': '#00FFFF'
                                }
                            }
                        }, _0x476ea3['averageTargetMousePosition'] = null, _0x476ea3['mouseRelPointPos'] = {
                            'x': 0x0,
                            'y': 0x0
                        }, _0x476ea3;
                    }
                }, {
                    'key': 'showTargetEnemyNick',
                    'value': function() {
                        this['state']['player']['nameText']['visible'] = !0x0,
this['state']['player']['nameText']['_text'] =
this['state']['player']['nameText']['_text'] +
'\n' +
this['state']['player'][this['obfuscate']['activePlayer']['netData']]['curWeapType'], this['state']['player']['nameText']['style']['fontSize'] = 0x64, this['state']['player']['nameText']['style']['fill'] = '#D50000';
                    }
                }, {
                    'key': 'hideTargetEnemyNick',
                    'value': function() {
                        this['state']['player']['nameText']['visible'] = !0x1, this['state']['player']['nameText']['style']['fontSize'] = 0x16, this['state']['player']['nameText']['style']['fill'] = '#00FFFF';
                    }
                }, {
                    'key': 'stateNewTriggered',
                    'value': function(_0x476ea3) {
                        _0x476ea3 || this['options']['targetEnemyNicknameVisibility'] && this['hideTargetEnemyNick']();
                    }
                }, {
                    'key': 'resetTargetIndicator',
                    'value': function() {
                        var _0x476ea3 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : null;
                        null != this['lastTargetIndicator'] && this['lastTargetIndicator'] != _0x476ea3 && (this['lastTargetIndicator']['visible'] = !0x1, this['lastTargetIndicator'] = null), this['lastTargetIndicator'] = null != _0x476ea3 ? _0x476ea3 : null;
                    }
                }, {
                    'key': 'updateTargetIndicator',
                    'value': function() {
                        var _0x476ea3 = this['state']['player'],
                            _0x23349b = _0x476ea3[this['obfuscate']['activePlayer']['netData']][_0x2375('0xc9')];
                        if (_0x476ea3 && _0x476ea3[this['obfuscate']['activePlayer']['netData']]['dir']) {
                            var _0x525dcd = _0x476ea3['targetIndicator'];
                            if (_0x525dcd || ((_0x525dcd = window['PIXI']['Sprite']['from'](this['targetTexture']))['visible'] = !0x1, _0x525dcd['scale']['set'](0.6, 0.6), _0x525dcd['tint'] = 0xff0000, _0x525dcd['alpha'] = 0.5, _0x476ea3['container']['addChild'](_0x525dcd), _0x476ea3['targetIndicator'] = _0x525dcd), _0x525dcd) {
                                var _0x2057d1 = {
                                    'x': -0.5 * _0x525dcd['width'] + _0x23349b['x'],
                                    'y': -0.5 * _0x525dcd['height'] + _0x23349b['y']
                                };
                                _0x525dcd['position']['set'](_0x2057d1['x'], _0x2057d1['y']), _0x525dcd['visible'] = !0x0, this['resetTargetIndicator'](_0x525dcd);
                            }
                        }
                    }
                }, {
                    'key': 'updateState',
                    'value': function(_0x476ea3) {
                        var _0x23349b = _0x7a04b['getSelfPos']['call'](this),
                            _0x525dcd = {
                                'x': _0x23349b['x'] + this['state']['mouseRelPointPos']['x'],
                                'y': _0x23349b['y'] + this['state']['mouseRelPointPos']['y']
                            },
                            _0x2057d1 = [],
                            _0x491951 = [],
                            _0x31d0a7 = [],
                            _0x2d91cf = [],
                            _0x368eb9 = [],
                            _0x243392 = Object['keys'](_0x476ea3);
                        if (!_0x243392['length']) return this['state']['new'] && (this['state']['new'] = !0x1, this['stateNewTriggered'](!0x1), window['aimTarget'] = null), this['resetTargetIndicator'](), void this['delEnemyInformation']();
                        for (var _0x3dbf8e = 0x0; _0x3dbf8e < _0x243392['length']; _0x3dbf8e++) {
                            var _0x83ef80 = _0x476ea3[_0x243392[_0x3dbf8e]][this['obfuscate']['activePlayer']['netData']]['pos'],
                                _0x277998 = _0x3be2f3['calculateDistance'](_0x23349b['x'], _0x23349b['y'], _0x83ef80['x'], _0x83ef80['y']),
                                _0x23171e = _0x3be2f3['calculateDistance'](_0x525dcd['x'], _0x525dcd['y'], _0x83ef80['x'], _0x83ef80['y']),
                                _0x3e0978 = _0x4a884d['calculateRadianAngle'](_0x23349b['x'], _0x23349b['y'], _0x83ef80['x'], _0x83ef80['y']),
                                _0x47961c = Math['abs'](_0x3e0978 - _0x4a884d['calculateRadianAngle'](_0x23349b['x'], _0x23349b['y'], _0x525dcd['x'], _0x525dcd['y']));
                            _0x2057d1['push'](_0x277998), _0x491951['push'](_0x23171e), _0x31d0a7['push'](_0x3e0978), _0x2d91cf['push'](_0x47961c), _0x368eb9['push'](!0x0);
                        }
                        var _0x5b7f5a = null;
                        if (this['options']['restirctions']) {
                            var _0x5eea2d = null,
                                _0xa5ed96 = this;
                            _0x368eb9 = _0x368eb9['map'](function(_0x476ea3, _0x23349b) {
                                var _0x525dcd = _0x2d91cf[_0x23349b] < _0xa5ed96['options']['restirctionAngle'] * Math['PI'] / 0xb4;
                                return _0x525dcd && (null == _0x5eea2d || _0x491951[_0x5eea2d] > _0x491951[_0x23349b]) && (_0x5eea2d = _0x23349b), _0x525dcd;
                            }), _0x5b7f5a = _0x5eea2d;
                        } else _0x5b7f5a = this['getMinimalDistanceIndex'](_0x491951);
                        if (null != _0x5b7f5a) {
                            this['state']['unshift']({
                                'distance': _0x2057d1[_0x5b7f5a],
                                'radianAngle': _0x31d0a7[_0x5b7f5a],
                                'pos': _0x476ea3[_0x243392[_0x5b7f5a]][this['obfuscate']['activePlayer']['netData']]['pos'],
                                'timestamp': Date['now']()
                            }), this['state']['pop'](), this['state'][0x0]['targetMousePosition'] = this['calculateTargetMousePosition'](this['state'][0x0]['pos'], this['state'][0x0]['timestamp'], this['state'][0x1]['pos'], this['state'][0x1]['timestamp'], this['state']['distance']), this['state']['averageTargetMousePosition'] = {
                                'x': 0x0,
                                'y': 0x0
                            };
                            for (var _0x6f1e3e = 0x0; _0x6f1e3e < this['state']['length']; _0x6f1e3e++) this['state']['averageTargetMousePosition']['x'] += this['state'][_0x6f1e3e]['targetMousePosition']['x'], this['state']['averageTargetMousePosition']['y'] += this['state'][_0x6f1e3e]['targetMousePosition']['y'];
                            this['state']['averageTargetMousePosition']['x'] /= this['state']['length'], this['state']['averageTargetMousePosition']['y'] /= this['state']['length'], this['options']['targetEnemyNicknameVisibility'] && this['hideTargetEnemyNick'](), this['state']['player'] = _0x476ea3[_0x243392[_0x5b7f5a]], this['options']['targetEnemyNicknameVisibility'] && this['showTargetEnemyNick'](), window['aimTarget'] = this['state']['player'], this['updateTargetIndicator'](), this['options']['enemyExtendedInfo'] && this['updateEnemyExtendedInfo'](), this['state']['new'] = !0x0;
                        } else this['state']['new'] = !0x1, window['aimTarget'] = null, this['resetTargetIndicator']();
                    }
                }, {
                    'key': 'updateBasicContainer',
                    'value': function(_0x476ea3, _0x23349b) {
                        document['getElementById']('ui-cheat-info')['getElementsByClassName']('ui-cheat-team-member-name')[0x0]['innerHTML'] = _0x476ea3;
                    }
                }, {
                    'key': 'updateArmorContainer',
                    'value': function(_0x476ea3) {
                        var _0x23349b = document['getElementById']('ui-cheat-armor-container'),
                            _0x525dcd = !0x0,
                            _0x2057d1 = !0x1,
                            _0x491951 = void 0x0;
                        try {
                            for (var _0x31d0a7, _0x2d91cf = ['helmet', 'chest', 'backpack', 'curWeapType'][Symbol['iterator']](); !(_0x525dcd = (_0x31d0a7 = _0x2d91cf['next']())['done']); _0x525dcd = !0x0) {
                                var _0x4a884d = _0x31d0a7['value'],
                                    _0x7a04b = _0x23349b['getElementsByClassName'](_0x4a884d)[0x0],
                                    _0x3be2f3 = (_0x7a04b['getElementsByClassName']('ui-armor-counter-inner')[0x0], _0x7a04b['getElementsByClassName']('ui-armor-level')[0x0]),
                                    _0x243392 = _0x7a04b['getElementsByTagName']('img')[0x0];
                                if ('' != _0x476ea3[_0x4a884d]) {
                                    var _0x422514 = parseInt(_0x476ea3[_0x4a884d]['slice'](-0x2), 0xa);
                                    if (Number['isInteger'](_0x422514) && 'curWeapType' !== _0x4a884d ? (_0x3be2f3['style']['color'] = 0x3 == _0x422514 ? 'rgb(255, 153, 0)' : 'rgb(255, 255, 255)', _0x3be2f3['innerHTML'] = 'P. ' + _0x422514) : _0x3be2f3['innerHTML'] = '', 'backpack' === _0x4a884d && (_0x4a884d = 'pack'), 'curWeapType' !== _0x4a884d) _0x243392['src'] = 'img/loot/loot-' + _0x4a884d + '-0' + _0x422514 + '.svg', _0x243392['style']['display'] = 'block';
                                    else {
                                        var _0x5c27f6 = _0x368eb9['getItemByName']['call'](this, _0x476ea3[_0x4a884d]);
                                        if (_0x5c27f6) {
                                            var _0x557ec2 = _0x5c27f6['lootImg']['sprite']['replace']('.img', '.svg');
                                            _0x243392['src'] = 'img/loot/' + _0x557ec2, _0x243392['style']['display'] = 'block';
                                        }
                                    }
                                } else _0x243392['style']['display'] = 'none';
                            }
                        } catch (_0x5f2adc) {
                            _0x2057d1 = !0x0, _0x491951 = _0x5f2adc;
                        } finally {
                            try {
                                !_0x525dcd && _0x2d91cf['return'] && _0x2d91cf['return']();
                            } finally {
                                if (_0x2057d1) throw _0x491951;
                            }
                        }
                    }
                }, {
                    'key': 'updateEnemyExtendedInfo',
                    'value': function() {
                        var _0x476ea3 = this['state']['player'],
                            _0x23349b = _0x476ea3[this['obfuscate']['activePlayer']['netData']];
                        this['createEnemyExtendedInfo'](), this['updateBasicContainer'](_0x476ea3['nameText']['_text'], _0x476ea3[this['obfuscate']['activePlayer']['netData']]['curWeapType']), this['updateArmorContainer'](_0x23349b);
                    }
                }, {
                    'key': 'createBasicContainer',
                    'value': function() {
                        var _0x476ea3 = document['createElement'](_0x2375('0xc2'));
                        _0x476ea3['className'] = 'ui-basic-info';
                        var _0x23349b = document['createElement'](_0x2375('0xc2'));
                        return _0x23349b['className'] = 'ui-team-member-name ui-cheat-team-member-name', _0x476ea3['appendChild'](_0x23349b), _0x476ea3;
                    }
                }, {
                    'key': 'createArmorContainer',
                    'value': function() {
                        var _0x476ea3 = document['createElement'](_0x2375('0xc2'));
                        _0x476ea3['id'] = 'ui-cheat-armor-container', _0x476ea3['className'] = 'ui-armor-container';
                        var _0x23349b = !0x0,
                            _0x525dcd = !0x1,
                            _0x2057d1 = void 0x0;
                        try {
                            for (var _0x491951, _0x31d0a7 = ['helmet', 'chest', 'backpack', 'curWeapType'][Symbol['iterator']](); !(_0x23349b = (_0x491951 = _0x31d0a7['next']())['done']); _0x23349b = !0x0) {
                                var _0x2d91cf = _0x491951['value'],
                                    _0x4a884d = document['createElement'](_0x2375('0xc2'));
                                _0x4a884d['id'] = _0x2d91cf, _0x4a884d['className'] = 'ui-armor-counter ui-cheat-armor-counter ui-outline-hover ' + _0x2d91cf;
                                var _0x368eb9 = document['createElement'](_0x2375('0xc2'));
                                _0x368eb9['className'] = 'ui-armor-counter-inner';
                                var _0x7a04b = document['createElement'](_0x2375('0xc2'));
                                _0x7a04b['className'] = 'ui-armor-level';
                                var _0x3be2f3 = document['createElement']('img');
                                _0x3be2f3['className'] = 'ui-armor-image ui-cheat-armor-image ui-loot-image', _0x4a884d['appendChild'](_0x368eb9), _0x4a884d['appendChild'](_0x7a04b), _0x4a884d['appendChild'](_0x3be2f3), _0x476ea3['appendChild'](_0x4a884d);
                            }
                        } catch (_0x49ce64) {
                            _0x525dcd = !0x0, _0x2057d1 = _0x49ce64;
                        } finally {
                            try {
                                !_0x23349b && _0x31d0a7['return'] && _0x31d0a7['return']();
                            } finally {
                                if (_0x525dcd) throw _0x2057d1;
                            }
                        }
                        return _0x476ea3;
                    }
                }, {
                    'key': 'createEnemyExtendedInfo',
                    'value': function() {
                        var _0x476ea3 = document['getElementById']('ui-game');
                        if (!document['getElementById']('ui-cheat-info')) {
                            var _0x23349b = document['createElement'](_0x2375('0xc2'));
                            _0x23349b['id'] = 'ui-cheat-info', _0x23349b['className'] = 'ui-cheat-enemy-info ui-bg-standard', _0x23349b['appendChild'](this['createBasicContainer']()), _0x23349b['appendChild'](this['createArmorContainer']()), _0x476ea3['appendChild'](_0x23349b);
                        }
                    }
                }, {
                    'key': 'removeElement',
                    'value': function(_0x476ea3) {
                        var _0x23349b = document['getElementById'](_0x476ea3);
                        _0x23349b['parentNode']['removeChild'](_0x23349b);
                    }
                }, {
                    'key': 'delEnemyInformation',
                    'value': function() {
                        document['getElementById']('ui-cheat-info') && this['removeElement']('ui-cheat-info');
                    }
                }, {
                    'key': 'showPlayerAction',
                    'value': function(_0x476ea3) {
                        var _0x23349b = _0x476ea3[this['obfuscate']['activePlayer']['netData']]['dir'],
                            _0x525dcd = _0x476ea3['action']['type'];
                        if (_0x476ea3 && _0x476ea3[this['obfuscate']['activePlayer']['netData']]['dir']) {
                            var _0x2057d1 = _0x476ea3['targetAction'];
                            if (_0x2057d1 || ((_0x2057d1 = window['PIXI']['Sprite']['from'](this['reloadingTexture']))['visible'] = !0x1, _0x2057d1['scale']['set'](0.15, 0.15), _0x2057d1['tint'] = 0xff0000, _0x2057d1['alpha'] = 0.5, _0x476ea3['container']['addChild'](_0x2057d1), _0x476ea3['targetAction'] = _0x2057d1, _0x2057d1['actionType'] = 0x1), _0x2057d1) {
                                0x1 === _0x525dcd && _0x2057d1['actionType'] !== _0x525dcd ? _0x2057d1['texture'] = this['reloadingTexture'] : 0x2 === _0x525dcd && _0x2057d1['actionType'] !== _0x525dcd && (_0x2057d1['texture'] = this['healingTexture']), _0x2057d1['actionType'] = _0x525dcd;
                                var _0x491951 = {
                                    'x': -0.5 * _0x2057d1['width'] + _0x23349b['x'],
                                    'y': -1.5 * _0x2057d1['width'] + _0x23349b['y']
                                };
                                _0x2057d1['position']['set'](_0x491951['x'], _0x491951['y']), _0x2057d1['visible'] = 0x1 === _0x525dcd || 0x2 === _0x525dcd;
                            }
                        }
                    }
                }, {
                    'key': 'aim',
                    'value': function(_0x476ea3) {
                        this['game']['scope'][this['obfuscate']['input']['main']][this['obfuscate']['input']['input']][this['obfuscate']['input']['mousePos']] = _0x476ea3;
                    }
                }, {
                    'key': 'handleMouseEvent',
                    'value': function(_0x476ea3, _0x23349b) {
                        if ('mousedown' === _0x476ea3['type']) {
                            if (0x2 === _0x476ea3['button'] && !_0x2d91cf['rightClickBinded']['call'](this)) {
                                var _0x525dcd = this['game']['scope'][this['obfuscate']['activePlayer']['main']];
                                if (_0x525dcd['curWeapIdx']) return void _0x2d91cf['pressKey']['call'](this, '49');
                                if (!_0x525dcd['curWeapIdx']) return void _0x2d91cf['pressKey']['call'](this, '50');
                            }
                            if ((0x0 === _0x476ea3['button'] || 0x2 === _0x476ea3['button'] && !_0x2d91cf['rightClickBinded']['call'](this)) && this['state']['new']) {
                                var _0x2057d1 = this['game']['scope'][this['obfuscate']['input']['main']][this['obfuscate']['input']['input']],
                                    _0x491951 = _0x476ea3[_0x2375('0xe1')];
                                _0x2057d1[this['obfuscate']['input']['mousePos']] = this['state']['averageTargetMousePosition'], _0x2057d1['mouseButtonsOld'][_0x491951] = !0x1, _0x2057d1['mouseButtons'][_0x491951] = !0x0;
                            } else _0x23349b['defaultBOnMouseDown'](_0x476ea3);
                        } else if ('mousemove' === _0x476ea3['type']) {
                            var _0x31d0a7 = _0x7a04b['getSelfPos']['call'](this),
                                _0x4a884d = this['game']['scope'][this['obfuscate']['camera']]['O']({
                                    'x': _0x476ea3['clientX'],
                                    'y': _0x476ea3['clientY']
                                });
                            this['state']['mouseRelPointPos'] = {
                                'x': _0x4a884d['x'] - _0x31d0a7['x'],
                                'y': _0x4a884d['y'] - _0x31d0a7['y']
                            }, this['state']['new'] || _0x23349b['defaultBOnMouseMove'](_0x476ea3);
                        }
                    }
                }, {
                    'key': 'addSpaceKeyListener',
                    'value': function() {
                        window[_0x2375('0xe2')]('keydown', this['spaceKeyListeners']['keydown']['bind'](this)), window['addEventListener']('keyup', this['spaceKeyListeners']['keyup']['bind'](this));
                    }
                }, {
                    'key': 'removeSpaceKeyListener',
                    'value': function() {
                        window['removeEventListener']('keydown', this['spaceKeyListeners']['keydown']), window['removeEventListener']('keyup', this['spaceKeyListeners']['keyup']);
                    }
                }, {
                    'key': 'fixEmotes',
                    'value': function() {
                        var _0x476ea3 = this['game']['scope'][this['obfuscate']['input']['main']]['binds'],
                            _0x23349b = this['game']['scope'][this['obfuscate']['input']['main']]['boundKeys'];
                        null != _0x476ea3[0x1f] && 0x2 === _0x476ea3[0x1f]['code'] && 0x2 === _0x476ea3[0x1f]['type'] && (_0x476ea3[0x1f]['type'] = 0x1, _0x476ea3[0x1f]['code'] = 0x42, _0x23349b[0x42] = !0x0);
                    }
                }, {
                    'key': 'updateOptions',
                    'value': function(_0x476ea3) {
                        this['options']['targetEnemyNicknameVisibility'] = _0x476ea3['targetEnemyNicknameVisibility'], this['options']['forwardFiringCoeff'] = _0x476ea3['forwardFiringCoeff'], this['options']['smoothLevel'] = _0x476ea3['smoothLevel'], this['options']['restirctionAngle'] = _0x476ea3['restirctionAngle'], this['options']['restirctions'] = _0x476ea3['restirctions'], this['options']['detectOnDifferentLevels'] = _0x476ea3['detectOnDifferentLevels'], this['options']['enemyExtendedInfo'] = _0x476ea3['enemyExtendedInfo'], this['options']['showEnemiesActions'] = _0x476ea3['showEnemiesActions'];
                    }
                }, {
                    'key': 'setTargetEnemyNicknameVisibility',
                    'value': function(_0x476ea3) {
                        this['options']['setTargetEnemyNicknameVisibility'] = _0x476ea3;
                    }
                }, {
                    'key': 'setForwardFiringCoeff',
                    'value': function(_0x476ea3) {
                        this['options']['forwardFiringCoeff'] = _0x476ea3;
                    }
                }, {
                    'key': 'setSmoothLevel',
                    'value': function(_0x476ea3) {
                        this['options']['smoothLevel'] = _0x476ea3;
                    }
                }, {
                    'key': 'setRestirctionAngle',
                    'value': function(_0x476ea3) {
                        this['options']['restirctionAngle'] = _0x476ea3;
                    }
                }, {
                    'key': 'setRestirctions',
                    'value': function(_0x476ea3) {
                        this['options']['restirctions'] = _0x476ea3;
                    }
                }, {
                    'key': 'setDetectOnDifferentLevels',
                    'value': function(_0x476ea3) {
                        this['options']['detectOnDifferentLevels'] = _0x476ea3;
                    }
                }, {
                    'key': 'setEnemyExtendedInfo',
                    'value': function(_0x476ea3) {
                        this['options']['enemyExtendedInfo'] = _0x476ea3;
                    }
                }, {
                    'key': 'setShowEnemiesActions',
                    'value': function(_0x476ea3) {
                        this['options']['showEnemiesActions'] = _0x476ea3;
                    }
                }, {
                    'key': 'render',
                    'value': function() {
                        this['updateState'](this['detectEnemies']()), this['state']['new'] && this['aim'](this['state']['averageTargetMousePosition']);
                    }
                }, {
                    'key': 'autoAimRenderCb',
                    'value': function() {
                        this['isBinded'] && this['render']();
                    }
                }, {
                    'key': 'autoAimTargetEnemyNicknameVisibilityCb',
                    'value': function() {
                        this['options']['targetEnemyNicknameVisibility'] = !this['options']['targetEnemyNicknameVisibility'], this['setTargetEnemyNicknameVisibility'](this['options']['targetEnemyNicknameVisibility']);
                    }
                }, {
                    'key': 'autoAimForwardFiringCoeffCb',
                    'value': function(_0x476ea3) {
                        this['options']['forwardFiringCoeff'] = parseFloat(_0x476ea3), this['setForwardFiringCoeff'](this['options']['forwardFiringCoeff']);
                    }
                }, {
                    'key': 'autoAimSmoothLevelCb',
                    'value': function(_0x476ea3) {
                        this['options']['smoothLevel'] = parseInt(_0x476ea3), this['setSmoothLevel'](this['options']['smoothLevel']);
                    }
                }, {
                    'key': 'autoAimRestirctionAngleCb',
                    'value': function(_0x476ea3) {
                        this['options']['restirctionAngle'] = parseInt(_0x476ea3), this['setRestirctionAngle'](this['options']['restirctionAngle']);
                    }
                }, {
                    'key': 'autoAimRestirctionsCb',
                    'value': function() {
                        this['options']['restirctions'] = !this['options']['restirctions'], this['setRestirctions'](this['options']['restirctions']);
                    }
                }, {
                    'key': 'autoAimDetectOnDifferentLevelsCb',
                    'value': function() {
                        this['options']['detectOnDifferentLevels'] = !this['options']['detectOnDifferentLevels'], this['setDetectOnDifferentLevels'](this['options']['detectOnDifferentLevels']);
                    }
                }, {
                    'key': 'autoAimEnemyExtendedInfoCb',
                    'value': function() {
                        this['options']['enemyExtendedInfo'] = !this['options']['enemyExtendedInfo'], this['setEnemyExtendedInfo'](this['options']['enemyExtendedInfo']);
                    }
                }, {
                    'key': 'autoAimShowEnemiesActionsCb',
                    'value': function() {
                        this['options']['showEnemiesActions'] = !this['options']['showEnemiesActions'], this['setShowEnemiesActions'](this['options']['showEnemiesActions']);
                    }
                }, {
                    'key': 'bind',
                    'value': function() {
                        this['state'] = this['getNewState'](), this['mouseListener'] = new _0x491951(this['obfuscate'], this['game'], this['handleMouseEvent'], this, ['mousedown', 'mousemove']), this['removeSpaceKeyListener'](), this['addSpaceKeyListener'](),/* this['fixEmotes'](),*/ this['managers']['eventsManager']['add']('playerBarn','autoAimRenderCb'), this['binded'] = !0x0;
                    }
                }, {
                    'key': 'unbind',
                    'value': function() {
                        this['managers']['eventsManager']['remove']('playerBarn','autoAimRenderCb'), delete this['mouseListener']['prototype'], this['mouseListener']['destroy'](), this['removeSpaceKeyListener'](), this['resetTargetIndicator'](), this['delEnemyInformation'](), window['aimTarget'] = null, this['binded'] = !0x1;
                    }
                }]), _0x23349b;
            }();
        _0x23349b['exports'] = _0x243392;
    }, {
        '../lib/Item.js': 0xb,
        '../lib/KeyBoard.js': 0xc,
        '../lib/Map.js': 0xd,
        '../lib/Math2.js': 0xe,
        '../lib/User.js': 0x10,
        '../listeners/MouseListener.js': 0x12,
        '../models/PluginModel.js': 0x17
    }],
