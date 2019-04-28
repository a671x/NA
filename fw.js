    30: [function(t, a, o) {
        'use strict';
        var r = function() {
            function t(t, a) {
                for (var o = 0x0; o < a['length']; o++) {
                    var r = a[o];
                    r['enumerable'] = r['enumerable'] || !0x1, r['configurable'] = !0x0, 'value' in r && (r['writable'] = !0x0), Object['defineProperty'](t, r['key'], r);
                }
            }
            return function(a, o, r) {
                return o && t(a['prototype'], o), r && t(a, r), a;
            };
        }();
        var s = t('../../listeners/MouseListener.js'),
            c = t('../../models/PluginModel.js'),
            p = t('../../lib/KeyBoard.js'),
            d = t('../../lib/Math2.js'),
            _0xd95da0 = t('../../lib/Item.js'),
            _0x4694d6 = t('../../lib/User.js'),
            _0x57c988 = t('../../lib/Map.js'),
            g = function(t) {
                function a(t) {
                    ! function(t, a) {
                        if (!(t instanceof a)) throw new TypeError(_0x4948(_0xf489('0x4b8')));
                    }(this, a);
                    var o = function(t, a) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !a || 'object' != typeof a && 'function' != typeof a ? t : a;
                    }(this, (a['__proto__'] || Object['getPrototypeOf'](a))['call'](this, 'AutoAim', [_0x4948('0x299'), _0x4948('0x29a'), _0xf489('0x5f0'), 'autoAimSmoothLevelCb', _0x4948(_0xf489('0x5f2')), _0x4948('0x29d'), _0xf489('0x5'), _0x4948(_0xf489('0x5f3')), _0x4948(_0xf489('0x5f4'))]));
                    return o['main'] = t, o['game'] = t['game'], o['options'] = t['options']['autoAim'], o['managers'] = t['managers'], o['obfuscate'] = t['obfuscate'], o['gameObjects'] = t['gameObjects'], o['state'] = null, o['targetTexture'] = window['PIXI'][_0x4948('0x276')][_0x4948('0x277')]('img/gui/ping-team-coming.svg'), o[_0x4948(_0xf489('0x5f6'))] = window['PIXI'][_0x4948('0x276')][_0x4948('0x277')](_0x4948('0x2a2')), o[_0x4948(_0xf489('0x5f7'))] = window['PIXI']['Texture'][_0xf489('0x5f8')]('images/heal.svg'), o['lastTargetIndicator'] = null, o['spaceKeyListeners'] = {
                        'keydown': function(t) {
                            var a = this['game']['scope'][this['obfuscate']['input']['main']][this['obfuscate']['input']['input']]['mouseButtons'];
                            0x20 == t['which'] && (a[0x0] = !0x0);
                        },
                        'keyup': function(t) {
                            var a = this['game']['scope'][this['obfuscate']['input']['main']][this['obfuscate']['input']['input']]['mouseButtons'];
                            0x20 == t['which'] && (a[0x0] = !0x1);
                        }
                    }, o['required'](o['gameObjects']['bullets'], o['gameObjects']['items'], o['gameObjects']['playerBarn']), o;
                }
                return function(t, a) {
                    if ('function' != typeof a && null !== a) throw new TypeError(_0x4948('0x279') + typeof a);
                    t['prototype'] = Object[_0x4948('0x198')](a && a['prototype'], {
                        'constructor': {
                            'value': t,
                            'enumerable': !0x1,
                            'writable': !0x0,
                            'configurable': !0x0
                        }
                    }), a && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](t, a) : t['__proto__'] = a);
                }(a, c), r(a, [{
                    'key': 'detectEnemies',
                    'value': function() {
                        var t = [];
if ( this['game']['scope'][this['obfuscate']['activePlayer']['main']].weapType != this['game']['scope'][this['obfuscate']['activePlayer']['main']][this['obfuscate']['activePlayer']['localData']].weapons["3"].name ) {
                        if (!this['game']['scope'][this['obfuscate']['playerBarn']['main']][this['obfuscate']['playerBarn']['players']][this['game']['scope'][this['obfuscate'][_0x4948('0x217')]]]) return t;
                        for (var a = this['game']['scope'][this['obfuscate']['activeId']], o = this['game']['scope'][this['obfuscate']['playerBarn']['main']][this['obfuscate']['playerBarn']['players']][a]['teamId'], r = Object['keys'](this['game']['scope'][this['obfuscate']['playerBarn']['main']][this['obfuscate']['playerBarn']['players']]), s = this['game']['scope'][this['obfuscate']['activePlayer']['main']], c = 0x0; c < r['length']; c++) {
                            var p = this['game']['scope'][this['obfuscate']['objectCreator']]['idToObj'][r[c]],
                                d = this['game']['scope'][this['obfuscate']['playerBarn']['main']][this['obfuscate']['playerBarn']['players']][r[c]];
                            p && (this['options']['showEnemiesActions'] && this['showPlayerAction'](p), _0x4694d6['playerIsActive']['call'](this, p) && !_0x4694d6['isTeammate'](a, o, d, r[c]) && _0x4694d6['canSeeEnemy'](s, p, this['options']['detectOnDifferentLevels']) && (t[r[c]] = p));
                        }}
                        return t;
                    }
                }, {
                    'key': 'getMinimalDistanceIndex',
                    'value': function(t) {
                        return t['indexOf'](Math['min']['apply'](null, t));
                    }
                }, {
                    'key': 'calculateTargetMousePosition', // a.k.a        if (null != L) {
                    'value': function(t, a, o, r, s) {
                        var c = 0x0,
                            p = 0x1 / 0x0;
                        c = this['game']['scope'][this['obfuscate']['activePlayer']['main']]['weapType'] && this['gameObjects']['items'][this['game']['scope'][this['obfuscate']['activePlayer']['main']]['weapType']]['bulletType'] ? this['gameObjects']['bullets'][this['gameObjects']['items'][this['game']['scope'][this['obfuscate']['activePlayer']['main']]['weapType']]['bulletType']]['speed'] * this['options']['forwardFiringCoeff'] : 0x3e8;
                        for (var _0xd95da0 = _0x4694d6['getSelfPos']['call'](this), g = {
                                'x': t['x'],
                                'y': t['y']
                            }, _0x23f685 = _0x57c988['calculateDistance'](_0xd95da0['x'], _0xd95da0['y'], t['x'], t['y']), _0x480a5b = (t['x'] - o['x']) / ((a - r + 0x1) / 0x3e8), _0x3fad86 = (t['y'] - o['y']) / ((a - r + 0x1) / 0x3e8), _0x2d2e2f = 0x0; _0x2d2e2f < 0xa; _0x2d2e2f++) p = _0x23f685 / c, g = {
                            'x': t['x'] + _0x480a5b * p,
                            'y': t['y'] + _0x3fad86 * p
                        }, _0x23f685 = _0x57c988['calculateDistance'](_0xd95da0['x'], _0xd95da0['y'], g['x'], g['y']);
                        var _0x5c4f84 = this['game']['scope'][this['obfuscate']['camera']]['screenWidth'] / 0x2,
                            _0x1809dc = this['game']['scope'][this['obfuscate']['camera']]['screenHeight'] / 0x2,
                            _0x2bfca5 = _0x1809dc > _0x5c4f84 ? _0x5c4f84 : _0x1809dc;
                        _0x2bfca5 = Math[_0x4948('0xa5')](_0x2bfca5 - 0x1);
                        var _0x60c02e = d['calculateRadianAngle'](_0xd95da0['x'], _0xd95da0['y'], g['x'], g['y']);
                        return {
                            'x': _0x5c4f84 + _0x2bfca5 * Math[_0x4948(_0xf489('0x60d'))](_0x60c02e),
                            'y': _0x1809dc - _0x2bfca5 * Math[_0x4948(_0xf489('0x60e'))](_0x60c02e)
                        };
                    }
                }, {
                    'key': 'getNewState',
                    'value': function() {
                        for (var t = [], a = 0x0; a < this['options']['smoothLevel']; a++) t['push']({
                            'distance': null,
                            'radianAngle': null,
                            'pos': _0x57c988['getMouseScreenPos']['call'](this),
                            'targetMousePosition': _0x57c988['getMouseScreenPos']['call'](this),
                            'timestamp': 0x0
                        });
                        return t['new'] = null, t['player'] = {
                            'nameText': {
                                'visible': !0x1,
                                'style': {
                                    'fontSize': 0x16,
                                    'fill': _0xf489('0x610')
                                }
                            }
                        }, t['averageTargetMousePosition'] = null, t['mouseRelPointPos'] = {
                            'x': 0x0,
                            'y': 0x0
                        }, t;
                    }
                }, {
                    'key': 'showTargetEnemyNick',
                    'value': function() {
                        this['state'][_0x4948('0x1b0')][_0x4948(_0xf489('0x614'))][_0xf489('0x5d9')] = !0x0, this['state'][_0xf489('0x232')]['nameText'][_0x4948('0x51')][_0x4948('0xe6')] = 0x64, this['state'][_0xf489('0x232')][_0x4948(_0xf489('0x614'))][_0x4948('0x51')]['fill'] = _0x4948('0x2b8');
                    }
                }, {
                    'key': 'hideTargetEnemyNick',
                    'value': function() {
                        this['state'][_0x4948('0x1b0')][_0x4948('0x2b7')]['visible'] = !0x1, this['state']['player'][_0x4948('0x2b7')][_0x4948('0x51')][_0x4948('0xe6')] = 0x16, this['state']['player'][_0x4948(_0xf489('0x614'))][_0x4948('0x51')][_0x4948(_0xf489('0x616'))] = _0xf489('0x610');
                    }
                }, {
                    'key': 'stateNewTriggered',
                    'value': function(t) {
                        t || this['options']['targetEnemyNicknameVisibility'] && this['hideTargetEnemyNick']();
                    }
                }, {
                    'key': 'resetTargetIndicator',
                    'value': function() {
                        var t = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : null;
                        null != this['lastTargetIndicator'] && this['lastTargetIndicator'] != t && (this['lastTargetIndicator']['visible'] = !0x1, this['lastTargetIndicator'] = null), this[_0x4948('0x2a5')] = null != t ? t : null;
                    }
                }, {
                    'key': 'updateTargetIndicator',
                    'value': function() {
                        var t = this['state']['player'],
                            a = t[this['obfuscate']['activePlayer']['netData']]['dir'];
                        if (t && t[this['obfuscate']['activePlayer']['netData']]['dir']) {
                            var o = t[_0x4948(_0xf489('0x61a'))];
                            if (o || ((o = window['PIXI']['Sprite']['from'](this[_0x4948('0x275')]))['visible'] = !0x1, o[_0xf489('0xd5')]['set'](0.6, 0.6), o['tint'] = 0xff0000, o[_0x4948('0x282')] = 0.5, t[_0x4948(_0xf489('0x5d0'))][_0x4948('0x283')](o), t[_0x4948('0x2be')] = o), o) {
                                var r = {
                                    'x': -0.5 * o[_0x4948(_0xf489('0x3b4'))] + a['x'],
                                    'y': -0.5 * o[_0x4948(_0xf489('0x3c7'))] + a['y']
                                };
                                o['position']['set'](r['x'], r['y']), o['visible'] = !0x0, this['resetTargetIndicator'](o);
                            }
                        }
                    }
                }, {
                    'key': 'updateState',
                    'value': function(t) {
                        var a = _0x4694d6['getSelfPos']['call'](this),
                            o = {
                                'x': a['x'] + this['state']['mouseRelPointPos']['x'],
                                'y': a['y'] + this['state']['mouseRelPointPos']['y']
                            },
                            r = [],
                            s = [],
                            c = [],
                            p = [],
                            _0xd95da0 = [],
                            g = Object['keys'](t);
                        if (!g['length']) return this['state']['new'] && (this['state']['new'] = !0x1, this['stateNewTriggered'](!0x1), window['aimTarget'] = null), this['resetTargetIndicator'](), void this['delEnemyInformation']();
                        for (var h = 0x0; h < g['length']; h++) {
                            var _0x117c17 = t[g[h]][this['obfuscate']['activePlayer']['netData']]['pos'],
                                _0x2338e2 = _0x57c988['calculateDistance'](a['x'], a['y'], _0x117c17['x'], _0x117c17['y']),
                                _0x3f4618 = _0x57c988['calculateDistance'](o['x'], o['y'], _0x117c17['x'], _0x117c17['y']),
                                _0x2e9975 = d['calculateRadianAngle'](a['x'], a['y'], _0x117c17['x'], _0x117c17['y']),
                                _0x37b5ed = Math['abs'](_0x2e9975 - d['calculateRadianAngle'](a['x'], a['y'], o['x'], o['y']));
                            r['push'](_0x2338e2), s['push'](_0x3f4618), c['push'](_0x2e9975), p['push'](_0x37b5ed), _0xd95da0['push'](!0x0);
                        }
                        var _0x1e857c = null;
                        if (this['options']['restrictions']) {
                            var _0x15b0ec = null,
                                _0x42c0de = this;
                            _0xd95da0 = _0xd95da0['map'](function(t, a) {
                                var o = p[a] < _0x42c0de['options']['restirctionAngle'] * Math['PI'] / 0xb4;
                                return o && (null == _0x15b0ec || s[_0x15b0ec] > s[a]) && (_0x15b0ec = a), o;
                            }), _0x1e857c = _0x15b0ec;
                        } else _0x1e857c = this['getMinimalDistanceIndex'](s);
                        if (null != _0x1e857c) {
                            this['state']['unshift']({
                                'distance': r[_0x1e857c],
                                'radianAngle': c[_0x1e857c],
                                'pos': t[g[_0x1e857c]][this['obfuscate']['activePlayer']['netData']]['pos'],
                                'timestamp': Date['now']()
                            }), this['state']['pop'](), this['state'][0x0]['targetMousePosition'] = this['calculateTargetMousePosition'](this['state'][0x0]['pos'], this['state'][0x0]['timestamp'], this['state'][0x1]['pos'], this['state'][0x1]['timestamp'], this['state']['distance']), this['state']['averageTargetMousePosition'] = {
                                'x': 0x0,
                                'y': 0x0
                            };
                            for (var _0x404386 = 0x0; _0x404386 < this['state']['length']; _0x404386++) this['state']['averageTargetMousePosition']['x'] += this['state'][_0x404386]['targetMousePosition']['x'], this['state']['averageTargetMousePosition']['y'] += this['state'][_0x404386]['targetMousePosition']['y'];
                            this['state']['averageTargetMousePosition']['x'] /= this['state']['length'], this['state']['averageTargetMousePosition']['y'] /= this['state']['length'], this['options']['targetEnemyNicknameVisibility'] && this['hideTargetEnemyNick'](), this['state']['player'] = t[g[_0x1e857c]], this['options'][_0xf489('0x62a')] && this[_0x4948('0x2b6')](), window['aimTarget'] = this['state']['player'], this['updateTargetIndicator'](), this['options']['enemyExtendedInfo'] && this['updateEnemyExtendedInfo'](), this['state']['new'] = !0x0;
                        } else this['state']['new'] = !0x1, window['aimTarget'] = null, this['resetTargetIndicator']();
                    }
                }, {
                    'key': 'updateBasicContainer',
                    'value': function(t, a) {
                        document['getElementById']('ui-cheat-info')['getElementsByClassName'](_0x4948(_0xf489('0x62e')))[0x0][_0x4948(_0xf489('0x376'))] = t;
                    }
                }, {
                    'key': 'updateArmorContainer',
                    'value': function(t) {
                        var a = document['getElementById']('ui-cheat-armor-container'),
                            o = !0x0,
                            r = !0x1,
                            s = void 0x0;
                        try {
                            for (var c, p = ['helmet', 'chest', 'backpack', 'curWeapType'][Symbol['iterator']](); !(o = (c = p['next']())['done']); o = !0x0) {
                                var d = c['value'],
                                    _0x4694d6 = a['getElementsByClassName'](d)[0x0],
                                    _0x57c988 = (_0x4694d6['getElementsByClassName']('ui-armor-counter-inner')[0x0], _0x4694d6['getElementsByClassName']('ui-armor-level')[0x0]),
                                    g = _0x4694d6['getElementsByTagName']('img')[0x0];
                                if ('' != t[d]) {
                                    var _0xa9289d = parseInt(t[d]['slice'](-0x2), 0xa);
                                    if (Number['isInteger'](_0xa9289d) && 'curWeapType' !== d ? (_0x57c988['style']['color'] = 0x3 == _0xa9289d ? 'rgb(255, 153, 0)' : 'rgb(255, 255, 255)', _0x57c988['innerHTML'] = 'P.' + _0xa9289d) : _0x57c988['innerHTML'] = '', 'backpack' === d && (d = 'pack'), _0x4948(_0xf489('0x633')) !== d) g[_0x4948(_0xf489('0x63c'))] = _0x4948(_0xf489('0x63d')) + d + '-0' + _0xa9289d + _0x4948('0x2df'), g[_0x4948('0x51')]['display'] = 'block';
                                    else {
                                        var _0x1a64d1 = _0xd95da0['getItemByName']['call'](this, t[d]);
                                        if (_0x1a64d1) {
                                            var _0x14812b = _0x1a64d1['lootImg']['sprite']['replace']('.img', '.svg');
                                            g['src'] = 'img/loot/' + _0x14812b, g['style']['display'] = 'block';
                                        }
                                    }
                                } else g['style']['display'] = 'none';
                            }
                        } catch (_0xfeb0a7) {
                            r = !0x0, s = _0xfeb0a7;
                        } finally {
                            try {
                                !o && p['return'] && p['return']();
                            } finally {
                                if (r) throw s;
                            }
                        }
                    }
                }, {
                    'key': 'updateEnemyExtendedInfo',
                    'value': function() {
                        var t = this['state']['player'],
                            a = t[this['obfuscate']['activePlayer']['netData']];
                        this['createEnemyExtendedInfo'](), this['updateBasicContainer'](t['nameText']['_text'], t[this['obfuscate']['activePlayer']['netData']]['curWeapType']), this['updateArmorContainer'](a);
                    }
                }, {
                    'key': 'createBasicContainer',
                    'value': function() {
                        var t = document[_0x4948('0x12')](_0x4948(_0xf489('0x375')));
                        t[_0x4948('0x25c')] = _0x4948(_0xf489('0x645'));
                        var a = document[_0x4948('0x12')]('div');
                        return a[_0x4948('0x25c')] = _0x4948(_0xf489('0x646')), t[_0x4948(_0xf489('0x339'))](a), t;
                    }
                }, {
                    'key': 'createArmorContainer',
                    'value': function() {
                        var t = document[_0x4948('0x12')](_0x4948(_0xf489('0x375')));
                        t['id'] = 'ui-cheat-armor-container', t[_0x4948('0x25c')] = _0x4948('0x2e7');
                        var a = !0x0,
                            o = !0x1,
                            r = void 0x0;
                        try {
                            for (var s, c = ['helmet', _0x4948(_0xf489('0x632')), _0x4948(_0xf489('0x63a')), _0xf489('0x311')][Symbol[_0x4948('0x1f4')]](); !(a = (s = c[_0x4948('0x1f5')]())[_0x4948(_0xf489('0x538'))]); a = !0x0) {
                                var p = s[_0x4948('0x11f')],
                                    d = document[_0x4948('0x12')]('div');
                                d['id'] = p, d[_0x4948('0x25c')] = _0x4948('0x2e8') + p;
                                var _0xd95da0 = document[_0x4948('0x12')](_0x4948('0x49'));
                                _0xd95da0[_0xf489('0x2b8')] = _0x4948('0x2d7');
                                var _0x4694d6 = document[_0xf489('0x374')](_0x4948(_0xf489('0x375')));
                                _0x4694d6[_0x4948('0x25c')] = _0xf489('0x647');
                                var _0x57c988 = document['createElement'](_0x4948(_0xf489('0x549')));
                                _0x57c988[_0x4948('0x25c')] = _0x4948(_0xf489('0x648')), d[_0x4948(_0xf489('0x339'))](_0xd95da0), d[_0x4948(_0xf489('0x339'))](_0x4694d6), d[_0x4948(_0xf489('0x339'))](_0x57c988), t[_0x4948(_0xf489('0x339'))](d);
                            }
                        } catch (_0x3925c9) {
                            o = !0x0, r = _0x3925c9;
                        } finally {
                            try {
                                !a && c[_0x4948('0x1f2')] && c[_0x4948('0x1f2')]();
                            } finally {
                                if (o) throw r;
                            }
                        }
                        return t;
                    }
                }, {
                    'key': 'createEnemyExtendedInfo',
                    'value': function() {
                        var t = document['getElementById'](_0x4948(_0xf489('0x649')));
                        if (!document['getElementById'](_0x4948('0x2ce'))) {
                            var a = document[_0x4948('0x12')](_0x4948(_0xf489('0x375')));
                            a['id'] = 'ui-cheat-info', a[_0x4948('0x25c')] = _0x4948(_0xf489('0x64a')), a[_0x4948('0xe')](this['createBasicContainer']()), a[_0x4948(_0xf489('0x339'))](this[_0x4948(_0xf489('0x64b'))]()), t[_0x4948(_0xf489('0x339'))](a);
                        }
                    }
                }, {
                    'key': 'removeElement',
                    'value': function(t) {
                        var a = document['getElementById'](t);
                        a[_0x4948('0x41')][_0xf489('0x2b7')](a);
                    }
                }, {
                    'key': 'delEnemyInformation',
                    'value': function() {
                        document['getElementById']('ui-cheat-info') && this['removeElement']('ui-cheat-info');
                    }
                }, {
                    'key': 'showPlayerAction',
                    'value': function(t) {
                        var a = t[this['obfuscate']['activePlayer']['netData']]['dir'],
                            o = t[_0x4948(_0xf489('0x562'))][_0x4948(_0xf489('0x344'))];
                        if (t && t[this['obfuscate']['activePlayer']['netData']]['dir']) {
                            var r = t['targetAction'];
                            if (r || ((r = window['PIXI']['Sprite']['from'](this[_0x4948(_0xf489('0x5f6'))]))['visible'] = !0x1, r[_0xf489('0xd5')]['set'](0.15, 0.15), r[_0x4948(_0xf489('0x64e'))] = 0xff0000, r[_0x4948(_0xf489('0x5d4'))] = 0.5, t[_0x4948(_0xf489('0x5d0'))]['addChild'](r), t['targetAction'] = r, r['actionType'] = 0x1), r) {
                                0x1 === o && r['actionType'] !== o ? r[_0x4948(_0xf489('0x650'))] = this[_0x4948('0x2a1')] : 0x2 === o && r['actionType'] !== o && (r[_0x4948('0x2f0')] = this[_0x4948(_0xf489('0x5f7'))]), r['actionType'] = o;
                                var s = {
                                    'x': -0.5 * r[_0x4948(_0xf489('0x3b4'))] + a['x'],
                                    'y': -1.5 * r[_0x4948(_0xf489('0x3b4'))] + a['y']
                                };
                                r['position']['set'](s['x'], s['y']), r['visible'] = 0x1 === o || 0x2 === o;
                            }
                        }
                    }
                }, {
                    'key': 'aim',
                    'value': function(t) {
                        this['game']['scope'][this['obfuscate']['input']['main']][this['obfuscate']['input']['input']][this['obfuscate']['input']['mousePos']] = t;
                    }
                }, {
                    'key': 'handleMouseEvent',
                    'value': function(t, a) {
                        if (_0xf489('0x574') === t['type']) {
                            if (0x2 === t['button'] && !p['rightClickBinded']['call'](this)) return 0x1 == this['game']['scope'][this['obfuscate']['activePlayer']['main']][this['obfuscate']['activePlayer']['localData']]['curWeapIdx'] ? void p['pressKey']['call'](this, this['gameObjects']['key']['One']) : void p['pressKey']['call'](this, this['gameObjects']['key']['Two']);
                            if ((0x0 === t['button'] || 0x2 === t['button'] && !p['rightClickBinded']['call'](this)) && this['state']['new']) {
                                var o = this['game']['scope'][this['obfuscate']['input']['main']][this['obfuscate']['input']['input']],
                                    r = t['button'];
                                o[this['obfuscate']['input']['mousePos']] = this['state']['averageTargetMousePosition'], o['mouseButtonsOld'][r] = !0x1, o['mouseButtons'][r] = !0x0;
                            } else a['defaultBOnMouseDown'](t);
                        } else if ('mousemove' === t['type']) {
                            var s = _0x4694d6['getSelfPos']['call'](this),
                                c = this['game']['scope'][this['obfuscate']['camera']]['O']({
                                    'x': t['clientX'],
                                    'y': t['clientY']
                                });
                            this['state']['mouseRelPointPos'] = { // this['state'] = s
                                'x': c['x'] - s['x'],
                                'y': c['y'] - s['y']
                            }, this['state']['new'] || a['defaultBOnMouseMove'](t);
                        }
                    }
                }, {
                    'key': 'addSpaceKeyListener',
                    'value': function() {
                        window['addEventListener']('keydown', this['spaceKeyListeners']['keydown']['bind'](this)), window['addEventListener']('keyup', this['spaceKeyListeners']['keyup']['bind'](this));
                    }
                }, {
                    'key': 'removeSpaceKeyListener',
                    'value': function() {
                        window['removeEventListener']('keydown', this['spaceKeyListeners']['keydown']), window['removeEventListener']('keyup', this['spaceKeyListeners']['keyup']);
                    }
                }, {
                    'key': 'fixEmotes',
                    'value': function() {
                        var t = this['game']['scope'][this['obfuscate']['input']['main']]['binds'],
                            a = this['game']['scope'][this['obfuscate']['input']['main']]['boundKeys'];
                        null != t[31] && 0x2 === t[31]['code'] && 0x2 === t[31]['type'] && (t[31]['type'] = 0x1, t[31]['code'] = 0x42, a[0x42] = !0x0);
                    }
                }, {
                    'key': 'updateOptions',
                    'value': function(t) {
                        this['options']['targetEnemyNicknameVisibility'] = t['targetEnemyNicknameVisibility'], this['options']['forwardFiringCoeff'] = t['forwardFiringCoeff'], this['options']['smoothLevel'] = t['smoothLevel'], this['options']['restirctionAngle'] = t['restirctionAngle'], this['options']['restirctions'] = t['restirctions'], this['options']['detectOnDifferentLevels'] = t[_0x4948('0x2a8')], this['options']['enemyExtendedInfo'] = t['enemyExtendedInfo'], this['options']['showEnemiesActions'] = t['showEnemiesActions'];
                    }
                }, {
                    'key': 'setTargetEnemyNicknameVisibility',
                    'value': function(t) {
                        this['options']['setTargetEnemyNicknameVisibility'] = t;
                    }
                }, {
                    'key': 'setForwardFiringCoeff',
                    'value': function(t) {
                        this['options']['forwardFiringCoeff'] = t;
                    }
                }, {
                    'key': 'setSmoothLevel',
                    'value': function(t) {
                        this['options']['smoothLevel'] = t;
                    }
                }, {
                    'key': 'setRestirctionAngle',
                    'value': function(t) {
                        this['options']['restirctionAngle'] = t;
                    }
                }, {
                    'key': 'setRestirctions',
                    'value': function(t) {
                        this['options']['restirctions'] = t;
                    }
                }, {
                    'key': 'setDetectOnDifferentLevels',
                    'value': function(t) {
                        this['options']['detectOnDifferentLevels'] = t;
                    }
                }, {
                    'key': 'setEnemyExtendedInfo',
                    'value': function(t) {
                        this['options']['enemyExtendedInfo'] = t;
                    }
                }, {
                    'key': 'setShowEnemiesActions',
                    'value': function(t) {
                        this['options']['showEnemiesActions'] = t;
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
                    'key': _0xf489('0x5f0'),
                    'value': function(t) {
                        this['options']['forwardFiringCoeff'] = parseFloat(t), this['setForwardFiringCoeff'](this['options']['forwardFiringCoeff']);
                    }
                }, {
                    'key': 'autoAimSmoothLevelCb',
                    'value': function(t) {
                        this['options']['smoothLevel'] = parseInt(t), this['setSmoothLevel'](this['options']['smoothLevel']);
                    }
                }, {
                    'key': 'autoAimRestirctionAngleCb',
                    'value': function(t) {
                        this['options']['restirctionAngle'] = parseInt(t), this['setRestirctionAngle'](this['options']['restirctionAngle']);
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
                        this['options']['enemyExtendedInfo'] = !this['options']['enemyExtendedInfo'], this[_0x4948('0x301')](this['options']['enemyExtendedInfo']);
                    }
                }, {
                    'key': 'autoAimShowEnemiesActionsCb',
                    'value': function() {
                        this['options']['showEnemiesActions'] = !this['options']['showEnemiesActions'], this['setShowEnemiesActions'](this['options']['showEnemiesActions']);
                    }
                }, {
                    'key': 'bind',
                    'value': function() {
                        this['state'] = this['getNewState'](), this['mouseListener'] = new s(this['obfuscate'], this['game'], this['handleMouseEvent'], this, ['mousedown', 'mousemove']), this['removeSpaceKeyListener'](), this['addSpaceKeyListener'](), this['fixEmotes'](), this['managers']['eventsManager']['add']('playerBarn','autoAimRenderCb'), this['binded'] = !0x0;
                    }
                }, {
                    'key': 'unbind',
                    'value': function() {
                        this['managers']['eventsManager']['remove']('playerBarn','autoAimRenderCb'), delete this['mouseListener']['prototype'], this['mouseListener']['destroy'](), this['removeSpaceKeyListener'](), this['resetTargetIndicator'](), this['delEnemyInformation'](), window['aimTarget'] = null, this['binded'] = !0x1;
                    }
                }]), a;
            }();
        a['exports'] = g;
    }, {
        '../../lib/Item.js': 0xb,
        '../../lib/KeyBoard.js': 0xc,
        '../../lib/Map.js': 0xd,
        '../../lib/Math2.js': 0xe,
        '../../lib/User.js': 0x10,
        '../../listeners/MouseListener.js': 0x12,
        '../../models/PluginModel.js': 0x17
    }],
