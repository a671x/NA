                    var c = 1 * this.baseVolume * this.getTypeVolume(r.type),
                        m = o.sub(this.cameraPos, a),
                        p = o.length(m),
                        d = r.maxRange * i.rangeMult;
                    n.eqAbs(d, 0) && (d = 1);
                    var h = n.clamp(Math.abs(p / d), 0, 1),
                        u = Math.pow(1 - h, 1 + 2 * i.fallOff),
                        g = r.volume * u * c;
                    if ((g = void 0 === i.layer || s.sameAudioLayer(i.layer, this.activeLayer) ? g : .5 * g) > .003 || i.ignoreMinAllowable) {
                        var y = n.clamp(m.x / d * -1, -1, 1);
                        return e.volume = g, e.pan = y, e
                    }
                }
                return null
            },
            setMasterVolume: function(e) {
                e = n.clamp(e, 0, 1), r.Sound.volume = e
            },
            _setInstanceTypeVolume: function(e, t) {
                t = n.clamp(t, 0, 1);
                for (var a = this.getTypeVolume(e), i = a > 1e-4 ? t / a : 0, r = 0; r < this.soundInstances.length; r++) {
                    var o = this.soundInstances[r];
                    o.type == e && (o.instance.volume *= i)
                }
            },
            setSoundVolume: function(e) {
                this._setInstanceTypeVolume("sound", e), this.soundVolume = e
            },
            setMusicVolume: function(e) {
                this._setInstanceTypeVolume("music", e), this.musicVolume = e
            },
            setVolume: function(e, t, a) {
                if (e) {
                    a = a || "sound";
                    var i = this.getTypeVolume(a);
                    e.volume = t * i
                }
            },
            getVolume: function(e) {
                return e ? e.volume : 0
            },
            setMute: function(e) {
                return this.mute = e, r.Sound.setMute(this.mute), this.mute
            },
            muteToggle: function() {
                return this.setMute(!this.mute)
            },
            setDelay: function(e, t) {
                e && (e.delay = t)
            },
            stopSound: function(e) {
                e && e.stop()
            },
            stopAll: function() {
                r.Sound.stop()
            },
            isSoundLoaded: function(e, t) {
                var a = this.sounds[e + t];
                return a && this.loadedFiles[a.path]
            },
            isSoundPlaying: function(e) {
                return !!e && e.playState == r.Sound.PLAY_SUCCEEDED
            },
            getTypeVolume: function(e) {
                switch (e) {
                    case "sound":
                        return this.soundVolume;
                    case "music":
                        return this.musicVolume
                }
                return 0
            }
        }, e.exports = i
    },
    "4b8d140f": function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r() {
            this.id = 0, this.pos = {
                x: 0,
                y: 0
            }, this.posOld = {
                x: 0,
                y: 0
            }, this.posDown = {
                x: 0,
                y: 0
            }, this.startTime = 0, this.lastUpdateTime = 0, this.isNew = !0, this.isDead = !1, this.osId = 0
        }

        function o(e) {
            var t = this;
            this.touchElem = e, this.keys = {}, this.keysOld = {}, this.pe = s.create(0, 0), this.mouseButtons = {}, this.mouseButtonsOld = {}, this.mouseWheelState = 0, this.touches = [], this.touchIdCounter = 0, this.leftTouch = null, this.rightTouch = null, this.lostFocus = !1, this.captureNextInputCb = null, this.bOnWindowFocus = function(e) {
                t.onWindowFocus(e)
            }, this.bOnKeyDown = function(e) {
                t.onKeyDown(e)
            }, this.bOnKeyUp = function(e) {
                t.onKeyUp(e)
            }, this.bOnMouseMove = function(e) {
                t.onMouseMove(e)
            }, this.bOnMouseDown = function(e) {
                t.onMouseDown(e)
            }, this.bOnMouseUp = function(e) {
                t.onMouseUp(e)
            }, this.bOnMouseWheel = function(e) {
                t.onMouseWheel(e)
            }, this.bOnTouchMove = function(e) {
                t.onTouchMove(e)
            }, this.bOnTouchStart = function(e) {
                t.onTouchStart(e)
            }, this.bOnTouchEnd = function(e) {
                t.onTouchEnd(e)
            }, this.bOnTouchCancel = function(e) {
                t.onTouchCancel(e)
            }, window.addEventListener("focus", this.bOnWindowFocus, !1), window.addEventListener("blur", this.bOnWindowFocus, !1), window.addEventListener("keydown", this.bOnKeyDown, !1), window.addEventListener("keyup", this.bOnKeyUp, !1), window.addEventListener("mousemove", this.bOnMouseMove, !1), window.addEventListener("mousedown", this.bOnMouseDown, !1), window.addEventListener("mouseup", this.bOnMouseUp, !1), window.addEventListener("wheel", this.bOnMouseWheel, {
                capture: !1,
                passive: !0
            }), this.touchElem.addEventListener("touchmove", this.bOnTouchMove, !1), this.touchElem.addEventListener("touchstart", this.bOnTouchStart, !1), this.touchElem.addEventListener("touchend", this.bOnTouchEnd, !1), this.touchElem.addEventListener("touchcancel", this.bOnTouchCancel, !1)
        }
        var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var i = t[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, a, i) {
                    return a && e(t.prototype, a), i && e(t, i), t
                }
            }(),
            s = a("c2a798c8"),
            l = Object.freeze({
                Backspace: 8,
                Enter: 13,
                Shift: 16,
                Control: 17,
                Alt: 18,
                Escape: 27,
                Space: 32,
                Left: 37,
                Up: 38,
                Right: 39,
                Down: 40,
                Zero: 48,
                One: 49,
                Two: 50,
                Three: 51,
                Four: 52,
                Five: 53,
                Six: 54,
                Seven: 55,
                Eight: 56,
                Nine: 57,
                A: 65,
                B: 66,
                C: 67,
                D: 68,
                E: 69,
                F: 70,
                G: 71,
                L: 76,
                M: 77,
                N: 78,
                P: 80,
                Q: 81,
                R: 82,
                S: 83,
                T: 84,
                V: 86,
                W: 87,
                X: 88,
                Windows: 91,
                ContextMenu: 93,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                Plus: 187,
                Minus: 189,
                FwdSlash: 191,
                Tilde: 192
            }),
            c = Object.freeze({
                Left: 0,
                Middle: 1,
                Right: 2,
                Thumb1: 3,
                Thumb2: 4
            }),
            m = Object.freeze({
                None: 0,
                Up: 1,
                Down: 2
            }),
            p = {
                None: 0,
                Key: 1,
                MouseButton: 2,
                MouseWheel: 3
            },
            d = ["", "", "", "Cancel", "", "", "Help", "", "Backspace", "Tab", "", "", "Clear", "Enter", "Enter", "", "Shift", "Control", "Alt", "Pause", "Capslock", "Kana", "Eisu", "Junja", "Final", "Hanja", "", "ESC", "Convert", "Nonconvert", "Accept", "Modechange", "Space", "Page Up", "Page Down", "End", "Home", "←", "↑", "→", "↓", "Select", "Print", "Execute", "Printscreen", "Insert", "Delete", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Windows Key", "", "Context Menu", "", "Sleep", "Numpad 0", "Numpad 1", "Numpad 2", "Numpad 3", "Numpad 4", "Numpad 5", "Numpad 6", "Numpad 7", "Numpad 8", "Numpad 9", "*", "+", "Separator", "-", ".", "/", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "Num Lock", "Scroll Lock", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "Circumflex", "!", '"', "#", "$", "%", "&", "_", "(", ")", "*", "+", "|", "Hyphen Minus", "{", "}", "~", "", "", "", "", "Volume Mute", "Volume Down", "Volume Up", "", "", ";", "=", ",", "-", ".", "/", "Backquote", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "[", "\\", "]", "'", "", "Meta", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""],
            h = ["Left Mouse", "Middle Mouse", "Right Mouse", "Thumb Mouse 1", "Thumb Mouse 2"],
            u = ["", "Mouse Wheel Up", "Mouse Wheel Down"],
            g = function() {
                function e(t, a) {
                    i(this, e), this.type = t, this.code = a
                }
                return n(e, [{
                    key: "equals",
                    value: function(e) {
                        return this.type == e.type && this.code == e.code
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return this.type == p.None ? "" : this.type == p.Key ? d[this.code] || "Key " + this.code : this.type == p.MouseButton ? h[this.code] || "Mouse " + this.code : u[this.code] || "Mouse Wheel " + this.code
                    }
                }]), e
            }(),
            y = Object.freeze({
                Move: 0,
                Start: 1,
                End: 2,
                Cancel: 3
            });
        o.prototype = {
            n: function() {
                window.removeEventListener("focus", this.bOnWindowFocus), window.removeEventListener("blur", this.bOnWindowFocus), window.removeEventListener("keydown", this.bOnKeyDown), window.removeEventListener("keyup", this.bOnKeyUp), window.removeEventListener("mousemove", this.bOnMouseMove), window.removeEventListener("mousedown", this.bOnMouseDown), window.removeEventListener("mouseup", this.bOnMouseUp), window.removeEventListener("wheel", this.bOnMouseWheel), this.touchElem.removeEventListener("touchmove", this.bOnTouchMove), this.touchElem.removeEventListener("touchstart", this.bOnTouchStart), this.touchElem.removeEventListener("touchend", this.bOnTouchEnd), this.touchElem.removeEventListener("touchcancel", this.bOnTouchCancel)
            },
            onWindowFocus: function() {
                this.keys = {}, this.keysOld = {}, this.mouseButtons = {}, this.mouseButtonsOld = {}, this.mouseWheelState = 0, this.touches.length = 0, this.lostFocus = !0
            },
            flush: function() {
                this.keysOld = Object.assign({}, this.keys), this.mouseButtonsOld = Object.assign({}, this.mouseButtons), this.mouseWheelState = 0;
                for (var e = 0; e < this.touches.length; e++) this.touches[e].posOld.x = this.touches[e].pos.x, this.touches[e].posOld.y = this.touches[e].pos.y, this.touches[e].isNew = !1, this.touches[e].isDead && (this.touches.splice(e, 1), --e);
                this.lostFocus = !1
            },
            captureNextInput: function(e) {
                this.captureNextInputCb = e
            },
            checkCaptureInput: function(e, t, a) {
                return !(!this.captureNextInputCb || !this.captureNextInputCb(e, new g(t, a)) || (this.captureNextInputCb = null, 0))
            },
            isInputValuePressed: function(e) {
                switch (e.type) {
                    case p.Key:
                        return this.de(e.code);
                    case p.MouseButton:
                        return this.he(e.code);
                    case p.MouseWheel:
                        return this.ue() == e.code;
                    default:
                        return !1
                }
            },
            isInputValueReleased: function(e) {
                switch (e.type) {
                    case p.Key:
                        return this.ge(e.code);
                    case p.MouseButton:
                        return this.ye(e.code);
                    case p.MouseWheel:
                        return this.ue() == e.code;
                    default:
                        return !1
                }
            },
            isInputValueDown: function(e) {
                switch (e.type) {
                    case p.Key:
                        return this.we(e.code);
                    case p.MouseButton:
                        return this.xe(e.code);
                    case p.MouseWheel:
                        return this.ue() == e.code;
                    default:
                        return !1
                }
            },
            onKeyDown: function(e) {
                var t = e.keyCode;
                9 == t && e.preventDefault(), this.checkCaptureInput(e, p.Key, t) || (this.keys[t] = !0)
            },
            onKeyUp: function(e) {
                this.keys[e.keyCode] = !1
            },
            we: function(e) {
                return !!this.keys[e]
            },
            de: function(e) {
                return !this.keysOld[e] && !!this.keys[e]
            },
            ge: function(e) {
                return !!this.keysOld[e] && !this.keys[e]
            },
            onMouseMove: function(e) {
                this.pe.x = e.clientX, this.pe.y = e.clientY
            },
            onMouseDown: function(e) {
                var t = 0;
                t = "which" in e ? e.which - 1 : e.button, this.checkCaptureInput(e, p.MouseButton, t) || (this.mouseButtons[t] = !0)
            },
            onMouseUp: function(e) {
                var t = 0;
                t = "which" in e ? e.which - 1 : e.button, this.mouseButtons[t] = !1
            },
            onMouseWheel: function(e) {
                var t = e.deltaY < 0 ? m.Up : m.Down;
                this.checkCaptureInput(e, p.MouseWheel, t) || (this.mouseWheelState = t)
            },
            xe: function(e) {
                return !!this.mouseButtons[e]
            },
            he: function(e) {
                return !this.mouseButtonsOld[e] && !!this.mouseButtons[e]
            },
            ye: function(e) {
                return !!this.mouseButtonsOld[e] && !this.mouseButtons[e]
            },
            ue: function() {
                return this.mouseWheelState
            },
            onTouchShared: function(e, t) {
                e.cancelable && t != y.Cancel && e.preventDefault();
                for (var a = e.timeStamp || performance.now(), i = 0; i < e.changedTouches.length; i++) {
                    for (var o = e.changedTouches[i], n = o.identifier, s = o.clientX, l = o.clientY, c = null, m = 0; m < this.touches.length; m++)
                        if (this.touches[m].osId == n && !this.touches[m].isDead) {
                            c = this.touches[m];
                            break
                        }
                    t != y.Start || c || (c = new r, this.touches.push(c), ++this.touchIdCounter, c.id = this.touchIdCounter, c.osId = n, c.posOld.x = s, c.posOld.y = l, c.posDown.x = s, c.posDown.y = l, c.startTime = a, c.isNew = !0, c.isDead = !1), t != y.End && t != y.Cancel || !c || (c.isDead = !0), c && (c.pos.x = s, c.pos.y = l, c.lastUpdateTime = a)
                }
            },
            onTouchMove: function(e) {
                this.onTouchShared(e, y.Move)
            },
            onTouchStart: function(e) {
                this.onTouchShared(e, y.Start)
            },
            onTouchEnd: function(e) {
                this.onTouchShared(e, y.End)
            },
            onTouchCancel: function(e) {
                this.onTouchShared(e, y.Cancel)
            },
            getTouchById: function(e) {
                for (var t = 0; t < this.touches.length; t++)
                    if (this.touches[t].id == e) return this.touches[t];
                return null
            }
        }, e.exports = {
            fe: o,
            InputType: p,
            InputValue: g,
            Key: l,
            MouseButton: c,
            MouseWheel: m,
            Touch: r
        }
    },
    "4e269062": function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Snow",
                    icon: "img/loot/loot-throwable-snowball.svg"
                },
                assets: {
                    audio: [{
                        name: "snowball_01",
                        channel: "sfx"
                    }, {
                        name: "snowball_02",
                        channel: "sfx"
                    }, {
                        name: "plane_02",
                        channel: "sfx"
                    }, {
                        name: "bells_01",
                        channel: "ui"
                    }, {
                        name: "snowball_pickup_01",
                        channel: "ui"
                    }],
                    atlases: ["gradient", "loadout", "shared", "snow"]
                },
                biome: {
                    colors: {
                        background: 603705,
                        water: 806225,
                        beach: 13480795,
                        riverbank: 9461284,
                        grass: 12434877,
                        underground: 1772803,
                        playerSubmerge: 2854052
                    },
                    particles: {
                        camera: "falling_snow_fast",
                        ripple: "waterRipple"
                    },
                    airdrop: {
                        planeImg: "map-plane-01x.img",
                        planeSound: "plane_02",
                        airdropImg: "map-chute-01x.img"
                    },
                    frozenSprites: ["player-snow-01.img", "player-snow-02.img", "player-snow-03.img"]
                },
                gameMode: {
                    maxPlayers: 80
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    "4edcdb13": function(e, t, a) {
        "use strict";

        function i(e, t) {
            return r.mergeDeep({}, o[e], {
                baseType: e
            }, t)
        }
        var r = a("1901e2d9"),
            o = {
                "9mm": {
                    name: "9mm",
                    type: "ammo",
                    subtype: "standard",
                    minStackSize: 15,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 16756224,
                        tintDark: 12550912
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "762mm": {
                    name: "7.62mm",
                    type: "ammo",
                    subtype: "standard",
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 26367,
                        tintDark: 19903
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "556mm": {
                    name: "5.56mm",
                    type: "ammo",
                    subtype: "standard",
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 237056,
                        tintDark: 161536
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "12gauge": {
                    name: "12 gauge",
                    type: "ammo",
                    subtype: "standard",
                    minStackSize: 5,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 16711680,
                        tintDark: 12517376
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "50AE": {
                    name: ".50 AE",
                    type: "ammo",
                    special: !0,
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 2697513,
                        tintDark: 2039583
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "308sub": {
                    name: ".308 Subsonic",
                    type: "ammo",
                    special: !0,
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 3225600,
                        tintDark: 2435840
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                flare: {
                    name: "Flare",
                    type: "ammo",
                    special: !0,
                    minStackSize: 1,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 13911552,
                        tintDark: 13911552
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "45acp": {
                    name: ".45 ACP",
                    type: "ammo",
                    subtype: "standard",
                    special: !0,
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 7930111,
                        tintDark: 5963967
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                bandage: {
                    name: "Bandage",
                    type: "heal",
                    useTime: 3,
                    heal: 15,
                    maxHeal: 100,
                    lootImg: {
                        sprite: "loot-medical-bandage.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "bandage_pickup_01",
                        use: "bandage_use_01"
                    },
                    emitter: "heal_01",
                    aura: {
                        sprite: "part-aura-circle-01.img",
                        tint: 16711680
                    }
                },
                healthkit: {
                    name: "Med Kit",
                    type: "heal",
                    useTime: 6,
                    heal: 100,
                    maxHeal: 100,
                    lootImg: {
                        sprite: "loot-medical-healthkit.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "healthkit_pickup_01",
                        use: "healthkit_use_01"
                    },
                    emitter: "heal_01",
                    aura: {
                        sprite: "part-aura-circle-01.img",
                        tint: 16711680
                    }
                },
                soda: {
                    name: "Soda",
                    type: "boost",
                    useTime: 3,
                    boost: 25,
                    lootImg: {
                        sprite: "loot-medical-soda.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "soda_pickup_01",
                        use: "soda_use_01"
                    },
                    emitter: "boost_01",
                    aura: {
                        sprite: "part-aura-circle-01.img",
                        tint: 1676544
                    }
                },
                painkiller: {
                    name: "Pills",
                    type: "boost",
                    useTime: 5,
                    boost: 50,
                    lootImg: {
                        sprite: "loot-medical-pill.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pills_pickup_01",
                        use: "pills_use_01"
                    },
                    emitter: "boost_01",
                    aura: {
                        sprite: "part-aura-circle-01.img",
                        tint: 1676544
                    }
                },
                backpack00: {
                    name: "Pouch",
                    type: "backpack",
                    level: 0,
                    playerRad: .55,
                    tint: 16777215,
                    lootImg: {
                        sprite: "loot-pack-00.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pack_pickup_01"
                    }
                },
                backpack01: {
                    name: "Small Pack",
                    type: "backpack",
                    level: 1,
                    playerRad: .65,
                    tint: 6697728,
                    lootImg: {
                        sprite: "loot-pack-01.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pack_pickup_01"
                    }
                },
                backpack02: {
                    name: "Regular Pack",
                    type: "backpack",
                    level: 2,
                    tint: 26112,
                    playerRad: .85,
                    lootImg: {
                        sprite: "loot-pack-02.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pack_pickup_01"
                    }
                },
                backpack03: {
                    name: "Military Pack",
                    type: "backpack",
                    level: 3,
                    tint: 6710835,
                    playerRad: 1,
                    lootImg: {
                        sprite: "loot-pack-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pack_pickup_01"
                    }
                },
                helmet01: {
                    name: "Level 1 Helmet",
                    type: "helmet",
                    level: 1,
                    damageReduction: .25,
                    skinImg: {
                        baseTint: 3244031,
                        baseTintRed: 10972011,
                        baseTintBlue: 6459582,
                        baseSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-helmet-01.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet02: {
                    name: "Level 2 Helmet",
                    type: "helmet",
                    level: 2,
                    damageReduction: .4,
                    skinImg: {
                        baseTint: 13027014,
                        baseTintRed: 10027008,
                        baseTintBlue: 20642,
                        baseSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-helmet-02.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet03: {
                    name: "Level 3 Helmet",
                    type: "helmet",
                    level: 3,
                    damageReduction: .55,
                    skinImg: {
                        baseTint: 2434341,
                        baseTintRed: 2491396,
                        baseTintBlue: 334125,
                        baseSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-helmet-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet04: {
                    name: "Level 4 Helmet",
                    type: "helmet",
                    level: 4,
                    damageReduction: .7,
                    skinImg: {
                        baseTint: 2434341,
                        baseTintRed: 2491396,
                        baseTintBlue: 334125,
                        baseSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-helmet-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                chest01: {
                    name: "Level 1 Vest",
                    type: "chest",
                    level: 1,
                    damageReduction: .25,
                    skinImg: {
                        baseTint: 11842740,
                        baseSprite: "player-armor-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-chest-01.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "chest_pickup_01"
                    }
                },
                chest02: {
                    name: "Level 2 Vest",
                    type: "chest",
                    level: 2,
                    damageReduction: .38,
                    skinImg: {
                        baseTint: 4934475,
                        baseSprite: "player-armor-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-chest-02.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "chest_pickup_01"
                    }
                },
                chest03: {
                    name: "Level 3 Vest",
                    type: "chest",
                    level: 3,
                    damageReduction: .45,
                    skinImg: {
                        baseTint: 0,
                        baseSprite: "player-armor-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-chest-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "chest_pickup_01"
                    }
                },
                "1xscope": {
                    name: "1x Scope",
                    type: "scope",
                    level: 1,
                    lootImg: {
                        sprite: "loot-scope-00.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                },
                "2xscope": {
                    name: "2x Scope",
                    type: "scope",
                    level: 2,
                    lootImg: {
                        sprite: "loot-scope-01.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                },
                "4xscope": {
                    name: "4x Scope",
                    type: "scope",
                    level: 4,
                    lootImg: {
                        sprite: "loot-scope-02.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                },
                "8xscope": {
                    name: "8x Scope",
                    type: "scope",
                    level: 8,
                    lootImg: {
                        sprite: "loot-scope-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                },
                "15xscope": {
                    name: "15x Scope",
                    type: "scope",
                    level: 15,
                    lootImg: {
                        sprite: "loot-scope-04.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                }
            },
            n = {
                helmet03_leader: i("helmet03", {
                    name: "Leader Helmet",
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-leader.img"
                    }
                }),
                helmet03_forest: i("helmet03", {
                    name: "Shishigami no Kabuto",
                    becomeWoodsKing: !0,
                    mapIndicator: {
                        sprite: "player-king-woods.img",
                        tint: 65280,
                        pulse: !0,
                        pulseTint: 65280
                    },
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-forest.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-forest.img",
                        border: "loot-circle-outer-01.img",
                        scale: .3,
                        rot: .5 * Math.PI
                    }
                }),
                helmet03_moon: i("helmet03", {
                    name: "Tsukuyomi no Kabuto",
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-moon.img",
                        spriteScale: .3
                    }
                }),
                helmet03_lt: i("helmet03", {
                    name: "Lieutenant Helmet",
                    noDrop: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-lieutenant.img",
                        spriteScale: .3
                    }
                }),
                helmet03_lt_aged: i("helmet03", {
                    name: "Lieutenant Helmet",
                    becomeLieutenant: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-lieutenant.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-lieutenant.img",
                        rot: .5 * Math.PI
                    }
                }),
                helmet03_potato: i("helmet03", {
                    name: "K-pot-ato",
                    becomePotato: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-potato.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-potato.img",
                        rot: .5 * Math.PI
                    }
                }),
                helmet04_medic: i("helmet04", {
                    name: "Medic Helmet",
                    noDrop: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-medic.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-medic.img",
                        scale: .3,
                        rot: .5 * Math.PI
                    }
                }),
                helmet04_leader: i("helmet04", {
                    name: "Leader Helmet",
                    noDrop: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-leader.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-leader.img",
                        scale: .3,
                        rot: .5 * Math.PI
                    }
                })
            },
            s = r.mergeDeep({}, o, n);
        e.exports = s
    },
    51683873: function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-01-28",
                locale: "zh-cn"
            },
            "word-order": "sov",
            "index-slogan": "2d混战",
            "index-region": "地区",
            "index-north-america": "北美",
            "index-europe": "欧洲",
            "index-asia": "亚洲",
            "index-south-america": "南美",
            "index-korea": "大韩民国",
            "index-players": "玩家",
            "index-play-solo": "玩单挑",
            "index-play-duo": "玩双人联队",
            "index-play-squad": "玩四人联队",
            "index-join-team": "加入联队",
            "index-create-team": "创建联队",
            "index-how-to-play": "如何玩",
            "index-leave-team": "离开联队",
            "index-joining-team": "加入联队",
            "index-creating-team": "建立联队中",
            "index-invite-link": "邀请链接",
            "index-solo": "单人",
            "index-duo": "双人联队",
            "index-squad": "四人联队",
            "index-auto-fill": "自动填充",
            "index-no-fill": "不填充",
            "index-waiting-for-leader": "等待领队开始游戏。",
            "index-play": "开始",
            "index-featured-youtuber": "精选Youtube博主",
            "index-settings": "设置",
            "index-high-resolution": "高分辨率(提高视觉质量)",
            "index-screen-shake": "屏幕抖动",
            "index-team-is-full": "联队已满!",
            "index-failed-joining-team": "加入联队失败。",
            "index-failed-creating-team": "创建联队失败。",
            "index-failed-finding-game": "查找联队失败。",
            "index-failed-joining-game": "加入游戏失败。",
            "index-lost-connection": "联队连接丢失。",
            "index-host-closed": "团队主持人失去连接。",
            "index-view-more": "查看更多",
            "index-back-to-main": "回到主界面",
            "index-most-kills": "杀敌最多",
            "index-total-kills": "总杀敌",
            "index-total-wins": "总赢数",
            "index-top-5-percent": "前5%",
            "index-kill-death-ratio": "杀敌和生还比例",
            "index-for": "For",
            "index-today": "今日",
            "index-this-week": "本周",
            "index-all-time": "所有时间",
            "index-top-100": "前一百",
            "index-rank": "排名",
            "index-player": "玩家",
            "index-total-games": "总游戏数",
            "index-controls": "控制",
            "index-movement": "动作",
            "index-movement-ctrl": "W, A, S, D键",
            "index-aim": "瞄准",
            "index-aim-ctrl": "鼠标",
            "index-punch": "拳",
            "index-shoot": "射击",
            "index-shoot-ctrl": "左击",
            "index-change-weapons": "更换武器",
            "index-change-weapons-ctrl": "1-4或滚轮。",
            "index-stow-weapons": "收起武器(拳击模式)",
            "index-stow-weapons-ctrl": "3或E键",
            "index-swap-weapons": "换到之前的武器",
            "index-swap-weapons-ctrl": "Q键",
            "index-reload": "重装",
            "index-reload-ctrl": "R键",
            "index-scope-zoom": "变焦范围",
            "index-scope-zoom-ctrl": "左键单击放大",
            "index-pickup": "拾起",
            "index-loot": "掠夺",
            "index-revive": "复活",
            "index-pickup-ctrl": "F键",
            "index-use-medical": "使用医疗物品",
            "index-use-medical-ctrl": "左键单击物品或7-0",
            "index-drop-item": "丢弃物品",
            "index-drop-item-ctrl": "右键单击物品",
            "index-cancel-action": "取消动作",
            "index-cancel-action-ctrl": "X键",
            "index-view-map": "查看地图",
            "index-view-map-ctrl": "M或G键",
            "index-toggle-minimap": "切换小地图",
            "index-toggle-minimap-ctrl": "V键",
            "index-use-ping": "使用联队平轮",
            "index-use-ping-ctrl": "按住C键，同时按住右键然后移动鼠标，接着松开右键",
            "index-use-emote": "使用表情轮",
            "index-use-emote-ctrl": "按住右键然后移动鼠标，接着松开右键",
            "game-alive": "存活玩家",
            "game-reloading": "装弹",
            "game-using": "使用",
            "game-reviving": "复活中",
            "game-revive-teammate": "复活队友",
            "game-equip": "装备",
            "game-cancel": "撤销",
            "game-You": "You",
            "game-you": "you",
            "game-themselves": "themselves",
            "game-yourself": "yourself",
            "game-you-died": "died",
            "game-player-died": "died",
            "game-with": "with",
            "game-knocked-out": "knocked out",
            "game-killed": "killed",
            "game-finally-killed": "finally killed",
            "game-finally-bled-out": "finally bled out",
            "game-died-outside": "died outside the safe zone",
            "game-the-red-zone": "The red zone",
            "game-waiting-for-players": "等待其他玩家",
            "game-spectating": "观看中",
            "game-red-zone-advances": "红色区域扩大于",
            "game-red-zone-advancing": "红色区域扩大中，快到安全区域去!",
            "game-seconds": "秒",
            "game-minutes": "分",
            "game-minute": "分",
            "game-m": "分",
            "game-s": "秒",
            "game-not-enough-space": "空间不足!",
            "game-item-already-owned": "物品已拥有!",
            "game-item-already-equipped": "物品已装备!",
            "game-better-item-equipped": "已装备更好物品!",
            "game-play-new-game": "开始新游戏",
            "game-spectate": "观看",
            "game-full-screen": "全屏",
            "game-sound": "声音",
            "game-quit-game": "离开游戏",
            "game-return-to-game": "返回游戏",
            "game-hide-match-stats": "隐藏比赛数据",
            "game-view-match-stats": "查看比赛数据",
            "game-previous-teammate": "上个队友",
            "game-next-teammate": "下个队友",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "离开游戏",
            "game-your-results": "你的战绩",
            "game-chicken": "大吉大利，今晚吃鸡！",
            "game-won-the-game": "游戏赢了。",
            "game-team-eliminated": "你的队伍被击败了。",
            "game-rank": "排名",
            "game-team-rank": "联队排名",
            "game-team-kills": "联队杀敌数",
            "game-kill": "杀",
            "game-kills": "杀",
            "game-damage-dealt": "伤害输出",
            "game-damage-taken": "受到伤害",
            "game-survived": "生还",
            "game-backpack00": "袋子",
            "game-backpack01": "小包",
            "game-backpack02": "常规包",
            "game-backpack03": "军用包",
            "game-bandage": "绷带",
            "game-bandage-tooltip": "左键点击回复15点生命值。",
            "game-healing-tooltip": "无法治疗75点以上的生命值。",
            "game-healthkit": "医药包",
            "game-healthkit-tooltip": "左键点击恢复100点生命值。",
            "game-soda": "汽水",
            "game-soda-tooltip": "左键点击可以增加25点的肾上腺素。",
            "game-adrenaline-tooltip": "肾上腺素会随着时间的推移恢复血量值。",
            "game-painkiller": "药片",
            "game-painkiller-tooltip": "左键点击可以增加50点的肾上腺素。",
            "game-9mm": "9毫米",
            "game-9mm-tooltip": "给M9, MP5, G18C, Mac-10, CZ-3A1, Vector 和 UMP9的弹药。",
            "game-12gauge": "12口径",
            "game-12gauge-tooltip": "给M870, M1100, SPAS-12, Saiga-12 和 MP220的弹药。",
            "game-762mm": "7.62毫米",
            "game-762mm-tooltip": "给AK-47, SCAR-H, M39, 莫辛-纳甘步枪, M39， SV-98, M1, OT-38 和 DP-28的弹药。",
            "game-556mm": "5.56毫米",
            "game-556mm-tooltip": "给FAMAS, M416, M4A1-S, QBB-97, Mk 12 和 M249弹药。",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "给DEagle 50弹药。",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "给AWM-S弹药。",
            "game-flare": "Flare",
            "game-flare-tooltip": "给Flare Gun弹药。",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "给M1911, M1A1, Model 94 和 Peacemaker弹药。",
            "game-chest01": "一级防弹衣",
            "game-chest02": "二级防弹衣",
            "game-chest03": "三级防弹衣",
            "game-helmet01": "一级头盔",
            "game-helmet02": "二级头盔",
            "game-helmet03": "三级头盔",
            "game-1xscope": "1x 瞄准镜",
            "game-2xscope": "2x 瞄准镜",
            "game-4xscope": "4x 瞄准镜",
            "game-8xscope": "8x 瞄准镜",
            "game-15xscope": "15x 瞄准镜",
            "game-level-1": "一级",
            "game-level-2": "二级",
            "game-level-3": "三级",
            "game-level-4": "四级",
            "game-outfitBase": "基本服装",
            "game-outfitRoyalFortune": "皇家财富",
            "game-outfitKeyLime": "青柠",
            "game-outfitCobaltShell": "钴壳",
            "game-outfitCarbonFiber": "碳纤维",
            "game-outfitDarkGloves": "专业",
            "game-outfitGhillie": "吉利服",
            "game-outfitCamo": "森林迷彩",
            "game-outfitRed": "目标练习",
            "game-outfitWhite": "北极复仇者",
            "game-ak47": "AK-47",
            "game-dp28": "DP-28",
            "game-mosin": "Mosin-Nagant",
            "game-m39": "M39 EMR",
            "game-mp5": "MP5",
            "game-mac10": "MAC-10",
            "game-ump9": "UMP9",
            "game-m870": "M870",
            "game-mp220": "MP220",
            "game-saiga": "Saiga-12",
            "game-m9": "M9",
            "game-glock": "G18C",
            "game-ot38": "OT-38",
            "game-potato": "土豆",
            "game-hud-potato": "土豆",
            "game-potato_heavy": "土豆",
            "game-barrel_01": "a barrel",
            "game-silo_01": "a silo",
            "index-play-50v50": "Play 50v50",
            "index-50v50": "50v50",
            "game-red-team": "Red Team",
            "game-blue-team": "Blue Team",
            "game-red-leader": "Red Leader",
            "game-blue-leader": "Blue Leader",
            "game-is-down": "is down",
            "game-is-dead": "is dead",
            "game-promoted-to": "promoted to",
            "game-youve-been-promoted-to": "You've been promoted to"
        };
        e.exports = i
    },
    "5bedf25d": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-03-31",
                locale: "en"
            },
            "word-order": "svo",
            "index-create-account": "Create Account",
            "index-set-account-name": "Set your account name",
            "index-enter-name": "Enter name",
            "index-finish": "Finish",
            "index-delete-account": "Delete Account",
            "index-delete-account-desc": 'Enter "DELETE" to delete your account:',
            "index-confirm": "Confirm",
            "index-customize-avatar": "Customize Avatar",
            "index-done": "Done",
            "index-account": "Account",
            "index-log-in-with": "Log in with",
            "index-facebook": "Facebook",
            "index-google": "Google",
            "index-twitch": "Twitch",
            "index-discord": "Discord",
            "index-my-stats": "My Stats",
            "index-link-account": "Link Account",
            "index-log-out": "Log Out",
            "index-change-avatar": "Change Avatar",
            "index-change-account-name": "Change Account Name",
            "index-back": "Back",
            "index-link-account-to": "Link account to",
            "index-log-in-desc": "Log in to track your stats!",
            "index-logging-in": "Logging in",
            "index-leaderboards": "Leaderboards",
            "index-slogan": "2d Battle Royale",
            "index-region": "Region",
            "index-north-america": "North America",
            "index-europe": "Europe",
            "index-asia": "Asia",
            "index-south-america": "South America",
            "index-korea": "South Korea",
            "index-players": "players",
            "index-play-solo": "Play Solo",
            "index-play-duo": "Play Duo",
            "index-play-squad": "Play Squad",
            "index-join-team": "Join Team",
            "index-create-team": "Create Team",
            "index-leave-team": "Leave Team",
            "index-joining-team": "Joining Team",
            "index-creating-team": "Creating Team",
            "index-invite-link": "Invite link",
            "index-invite-code": "Invite code",
            "index-join-team-help": "Got a team link or code? Paste it here:",
            "index-solo": "Solo",
            "index-duo": "Duo",
            "index-squad": "Squad",
            "index-auto-fill": "Auto Fill",
            "index-no-fill": "No Fill",
            "index-waiting-for-leader": "Waiting for leader to start game",
            "index-joining-game": "Joining game",
            "index-game-in-progress": "Game in progress",
            "index-play": "Play",
            "index-customize-loadout": "Customize Emotes",
            "index-twitter-follow": "Twitter Follow",
            "index-youtube-subscribe": "YouTube Subscribe",
            "index-facebook-like": "Facebook Like",
            "index-featured-youtuber": "Featured YouTuber",
            "index-streaming-live": "Streaming Live!",
            "index-viewer": "viewer",
            "index-viewers": "viewers",
            "index-settings": "Settings",
            "index-high-resolution": "High resolution (check to increase visual quality)",
            "index-screen-shake": "Screen shake",
            "index-anon-player-names": "Anonymize player names",
            "index-master-volume": "Master Volume",
            "index-sfx-volume": "SFX Volume",
            "index-music-volume": "Music Volume",
            "index-mobile-announce": "Now available on mobile!",
            "index-mobile-tooltip": "Visit <span>surviv.io</span> on your mobile device to play on the go!",
            "index-version": "ver",
            "index-privacy": "privacy",
            "index-attributions": "attributions",
            "index-proxy-sites": "proxy sites",
            "index-team-is-full": "Team is full!",
            "index-team-kicked": "You were kicked from the team!",
            "index-failed-joining-team": "Failed joining team.",
            "index-failed-creating-team": "Failed creating team.",
            "index-failed-finding-game": "Failed finding game.",
            "index-failed-joining-game": "Failed joining game.",
            "index-lost-connection": "Lost connection to team.",
            "index-host-closed": "Host closed the connection.",
            "index-invalid-protocol": "Old client version.",
            "index-view-more": "View More",
            "index-back-to-main": "Back to Main Menu",
            "index-most-kills": "Most kills",
            "index-total-kills": "Total kills",
            "index-total-wins": "Total wins",
            "index-top-5-percent": "Top 5 percent",
            "index-kill-death-ratio": "Kill-death ratio",
            "index-mode": "Mode",
            "index-for": "For",
            "index-today": "Today",
            "index-this-week": "This week",
            "index-all-time": "All time",
            "index-top-100": "TOP 100",
            "index-rank": "Rank",
            "index-player": "Player",
            "index-total-games": "Total Games",
            "index-controls": "Controls",
            "index-movement": "Movement",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Aim",
            "index-aim-ctrl": "Mouse",
            "index-punch": "Melee",
            "index-shoot": "Shoot",
            "index-shoot-ctrl": "Left-Click",
            "index-change-weapons": "Change Weapons",
            "index-change-weapons-ctrl": "1 through 4 or Scroll Wheel",
            "index-stow-weapons": "Stow Weapons (Melee Mode)",
            "index-stow-weapons-ctrl": "3 or E",
            "index-swap-weapons": "Swap to Previous Weapon",
            "index-swap-weapons-ctrl": "Q",
            "index-swap-weapon-slots": "Switch Gun Slots",
            "index-swap-weapon-slots-ctrl": "T or drag gun to other slot",
            "index-reload": "Reload",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Scope Zoom",
            "index-scope-zoom-ctrl": "Left-Click on Zoom",
            "index-pickup": "Pickup",
            "index-loot": "Loot",
            "index-revive": "Revive",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Use Medical Item",
            "index-use-medical-ctrl": "Left-Click on Item or 7 through 0",
            "index-drop-item": "Drop Item",
            "index-drop-item-ctrl": "Right-Click on Item",
            "index-cancel-action": "Cancel Action",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "View Map",
            "index-view-map-ctrl": "M or G",
            "index-toggle-minimap": "Toggle Minimap",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Use Team Ping Wheel",
            "index-use-ping-ctrl": "Hold C, then hold Right-Click and drag mouse, then release Right-Click",
            "index-use-emote": "Use Emote Wheel",
            "index-use-emote-ctrl": "Hold Right-Click and drag mouse, then release Right-Click",
            "index-how-to-play": "How to Play",
            "index-tips-1-desc": "The goal of surviv.io is to be the last player standing. You only live once per game - there is no respawn!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "If you've played other battle royale games like PUBG, Fortnite or H1Z1, then you're already halfway there! Think of surviv.io as 2D PUBG (with slightly less desync and more chicken).",
            "index-tips-3": "Loot and Kill",
            "index-tips-3-desc": "You'll begin the game with no items other than a simple backpack. Move around the map to find loot: weapons, ammo, scopes, and medical items. Eliminate other players and you can take their loot!",
            "index-tips-4": "Red = Bad!",
            "index-tips-4-desc": "Players aren't the only thing that can hurt you. The deadly red zone will move in from the sides of the map and deal increasingly greater damage if you stand in it. Keep an eye on the map and stay safe.",
            "index-movement-ctrl-touch": "Left stick",
            "index-aim-ctrl-touch": "Right stick",
            "index-shoot-ctrl-touch": "Drag right stick outside stick border",
            "index-change-weapons-ctrl-touch": "Tap weapon slot",
            "index-reload-ctrl-touch": "Tap equipped ammo counter",
            "index-scope-zoom-ctrl-touch": "Tap zoom item",
            "index-pickup-ctrl-touch": "Tap interaction button or loot name",
            "index-use-medical-ctrl-touch": "Tap medical item",
            "index-drop-item-ctrl-touch": "Touch and hold item",
            "index-cancel-action-ctrl-touch": "Tap interaction button",
            "index-view-map-ctrl-touch": "Tap minimap",
            "index-use-ping-ctrl-touch": "View map and tap anywhere on map",
            "index-use-emote-ctrl-touch": "Tap surviv icon",
            "game-alive": "Alive",
            "game-reloading": "Reloading",
            "game-use": "Use",
            "game-using": "Using",
            "game-reviving": "Reviving",
            "game-revive-teammate": "Revive Teammate",
            "game-equip": "Equip",
            "game-cancel": "Cancel",
            "game-open-door": "Open Door",
            "game-close-door": "Close Door",
            "game-unlock": "Unlock",
            "game-You": "You",
            "game-you": "you",
            "game-themselves": "themselves",
            "game-yourself": "yourself",
            "game-you-died": "died",
            "game-player-died": "died",
            "game-with": "with",
            "game-knocked-out": "knocked out",
            "game-killed": "killed",
            "game-finally-killed": "finally killed",
            "game-finally-bled-out": "finally bled out",
            "game-died-outside": "died outside the safe zone",
            "game-the-red-zone": "The red zone",
            "game-crushed": "crushed",
            "game-the-air-drop": "The air drop",
            "game-the-air-strike": "The air strike",
            "game-an-air-strike": "an air strike",
            "game-waiting-for-players": "Waiting for players",
            "game-spectating": "Spectating",
            "game-red-zone-advances": "Red zone advances in",
            "game-red-zone-advancing": "Red zone advancing! Move to the safe zone",
            "game-seconds": "seconds",
            "game-minutes": "minutes",
            "game-minute": "minute",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Not enough space!",
            "game-item-already-owned": "Item already owned!",
            "game-item-already-equipped": "Item already equipped!",
            "game-better-item-equipped": "Better item equipped!",
            "game-gun-cannot-fire": "Gun cannot be fired here!",
            "game-play-new-game": "Play New Game",
            "game-spectate": "Spectate",
            "game-full-screen": "Full Screen",
            "game-aim-line": "Aim Line",
            "game-sound": "Sound",
            "game-quit-game": "Quit Game",
            "game-return-to-game": "Return to Game",
            "game-hide-match-stats": "Hide Match Stats",
            "game-view-match-stats": "View Match Stats",
            "game-previous-teammate": "Previous Teammate",
            "game-next-teammate": "Next Teammate",
            "game-spectate-previous": "Previous Player",
            "game-spectate-next": "Next Player",
            "game-leave-game": "Leave Game",
            "game-your-results": "Your Results",
            "game-chicken": "Winner winner chicken dinner!",
            "game-won-the-game": "won the game.",
            "game-team-eliminated": "Your team was eliminated.",
            "game-solo-rank": "Solo Rank",
            "game-duo-rank": "Duo Rank",
            "game-squad-rank": "Squad Rank",
            "game-rank": "Rank",
            "game-team-rank": "Team Rank",
            "game-team-kills": "Team Kills",
            "game-kill": "Kill",
            "game-kills": "Kills",
            "game-damage-dealt": "Damage Dealt",
            "game-damage-taken": "Damage Taken",
            "game-survived": "Survived",
            "game-backpack00": "Pouch",
            "game-backpack01": "Small Pack",
            "game-backpack02": "Regular Pack",
            "game-backpack03": "Military Pack",
            "game-bandage": "Bandage",
            "game-bandage-tooltip": "Left-click to restore 15 health.",
            "game-healing-tooltip": "Cannot heal past 75 health.",
            "game-healthkit": "Med Kit",
            "game-healthkit-tooltip": "Left-click to restore 100 health.",
            "game-soda": "Soda",
            "game-soda-tooltip": "Left-click to boost adrenaline by 25.",
            "game-adrenaline-tooltip": "Adrenaline restores health over time.",
            "game-painkiller": "Pills",
            "game-painkiller-tooltip": "Left-click to boost adrenaline by 50.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Ammo for M9, G18C, MP5, MAC-10, UMP9, Vector and CZ-3A1.",
            "game-12gauge": "12 gauge",
            "game-12gauge-tooltip": "Ammo for M870, M1100, SPAS-12, Saiga-12 and MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Ammo for AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 and DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Ammo for FAMAS, M416, M4A1-S, QBB-97, Mk 12 and M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Ammo for DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Ammo for AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Ammo for Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Ammo for M1911, M1A1, Model 94 and Peacemaker.",
            "game-chest01": "Level 1 Vest",
            "game-chest02": "Level 2 Vest",
            "game-chest03": "Level 3 Vest",
            "game-helmet01": "Level 1 Helmet",
            "game-helmet02": "Level 2 Helmet",
            "game-helmet03": "Level 3 Helmet",
            "game-helmet03_leader": "Leader Helmet",
            "game-helmet03_forest": "Shishigami no Kabuto",
            "game-helmet03_moon": "Tsukuyomi no Kabuto",
            "game-helmet03_lt": "Lieutenant Helmet",
            "game-helmet03_lt_aged": "Lieutenant Helmet",
            "game-helmet03_potato": "K-pot-ato",
            "game-helmet04_leader": "Leader Helmet",
            "game-1xscope": "1x Scope",
            "game-2xscope": "2x Scope",
            "game-4xscope": "4x Scope",
            "game-8xscope": "8x Scope",
            "game-15xscope": "15x Scope",
            "game-level-1": "Lvl. 1",
            "game-level-2": "Lvl. 2",
            "game-level-3": "Lvl. 3",
            "game-level-4": "Lvl. 4",
            "game-outfitBase": "Basic Outfit",
            "game-outfitRoyalFortune": "Royal Fortune",
            "game-outfitKeyLime": "Key Lime",
            "game-outfitCobaltShell": "Cobalt Shell",
            "game-outfitCarbonFiber": "Carbon Fiber",
            "game-outfitDarkGloves": "The Professional",
            "game-outfitGhillie": "Ghillie Suit",
            "game-outfitCamo": "Forest Camo",
            "game-outfitRed": "Target Practice",
            "game-outfitWhite": "Arctic Avenger",
            "game-outfitWoodland": "Woodland Combat",
            "game-outfitJester": "Jester's Folly",
            "game-outfitPrisoner": "The New Black",
            "game-outfitCasanova": "Casanova Silks",
            "game-outfitKhaki": "The Initiative",
            "game-outfitCoral": "Coral Guise",
            "game-outfitAqua": "Aquatic Avenger",
            "game-outfitIslander": "Island Time",
            "game-outfitMeteor": "Falling Star",
            "game-outfitHeaven": "Celestial Garb",
            "game-outfitWaterElem": "Water Elemental",
            "game-outfitVerde": "Poncho Verde",
            "game-outfitLumber": "Woodcutter's Wrap",
            "game-outfitImperial": "Imperial Seal",
            "game-outfitPineapple": "Valiant Pineapple",
            "game-outfitTarkhany": "Tarkhany Regal",
            "game-outfitDesertCamo": "Desert Camo",
            "game-outfitDesertGhillie": "Desert Ghillie",
            "game-outfitElf": "Tallow's Little Helper",
            "game-outfitSpetsnaz": "Siberian Assault",
            "game-outfitDarkGhillie": "Incursion Ghillie",
            "game-outfitRedLeaderAged": "Red Victorious",
            "game-outfitBlueLeaderAged": "Stifled Blue",
            "game-outfitWoodsCloak": "Greencloak",
            "game-outfitSpringGhillie": "Vernal Ghillie",
            "game-fists": "Fists",
            "game-karambit_rugged": "Karambit Rugged",
            "game-hud-karambit_rugged": "Karambit",
            "game-karambit_prismatic": "Karambit Prismatic",
            "game-hud-karambit_prismatic": "Karambit",
            "game-karambit_drowned": "Karambit Drowned",
            "game-hud-karambit_drowned": "Karambit",
            "game-bayonet_rugged": "Bayonet Rugged",
            "game-hud-bayonet_rugged": "Bayonet",
            "game-bayonet_woodland": "Bayonet Woodland",
            "game-hud-bayonet_woodland": "Bayonet",
            "game-huntsman_rugged": "Huntsman Rugged",
            "game-hud-huntsman_rugged": "Huntsman",
            "game-huntsman_burnished": "Huntsman Burnished",
            "game-hud-huntsman_burnished": "Huntsman",
            "game-bowie_vintage": "Bowie Vintage",
            "game-hud-bowie_vintage": "Bowie",
            "game-bowie_frontier": "Bowie Frontier",
            "game-hud-bowie_frontier": "Bowie",
            "game-woodaxe": "Wood Axe",
            "game-woodaxe_bloody": "Wood Axe Bloodstained",
            "game-hud-woodaxe_bloody": "Wood Axe",
            "game-fireaxe": "Fire Axe",
            "game-katana": "Katana",
            "game-katana_rusted": "Katana Rusted",
            "game-hud-katana_rusted": "Katana",
            "game-katana_orchid": "Katana Orchid",
            "game-hud-katana_orchid": "Katana",
            "game-naginata": "Naginata",
            "game-hud-naginata": "Naginata",
            "game-machete_taiga": "Machete Taiga",
            "game-hud-machete_taiga": "Machete",
            "game-kukri_trad": "Tallow's Kukri",
            "game-hud-kukri_trad": "Kukri",
            "game-bonesaw_rusted": "Bonesaw Rusted",
            "game-hud-bonesaw_rusted": "Bonesaw",
            "game-stonehammer": "Stone Hammer",
            "game-hook": "Hook",
            "game-pan": "Pan",
            "game-ak47": "AK-47",
            "game-scar": "SCAR-H",
            "game-an94": "AN-94",
            "game-dp28": "DP-28",
            "game-mosin": "Mosin-Nagant",
            "game-sv98": "SV-98",
            "game-m39": "M39 EMR",
            "game-garand": "M1 Garand",
            "game-mp5": "MP5",
            "game-mac10": "MAC-10",
            "game-ump9": "UMP9",
            "game-vector": "Vector",
            "game-vector45": "Vector",
            "game-scorpion": "CZ-3A1",
            "game-m870": "M870",
            "game-m1100": "M1100",
            "game-m1014": "Super 90",
            "game-mp220": "MP220",
            "game-usas": "USAS-12",
            "game-saiga": "Saiga-12",
            "game-spas12": "SPAS-12",
            "game-m9": "M9",
            "game-m9_dual": "Dual M9",
            "game-hud-m9_dual": "M9",
            "game-m93r": "M93R",
            "game-m93r_dual": "Dual M93R",
            "game-hud-m93r_dual": "M93R",
            "game-glock": "G18C",
            "game-glock_dual": "Dual G18C",
            "game-hud-glock_dual": "G18C",
            "game-ot38": "OT-38",
            "game-ot38_dual": "Dual OT-38",
            "game-hud-ot38_dual": "OT-38",
            "game-ots38": "OTs-38",
            "game-ots38_dual": "Dual OTs-38",
            "game-hud-ots38_dual": "OTs-38",
            "game-deagle": "DEagle 50",
            "game-deagle_dual": "Dual DEagle 50",
            "game-hud-deagle_dual": "DEagle 50",
            "game-flare_gun": "Flare Gun",
            "game-flare_gun_dual": "Dual Flare Gun",
            "game-hud-flare_gun_dual": "Flare Gun",
            "game-famas": "FAMAS",
            "game-hk416": "M416",
            "game-m4a1": "M4A1-S",
            "game-mk12": "Mk 12 SPR",
            "game-m249": "M249",
            "game-qbb97": "QBB-97",
            "game-awc": "AWM-S",
            "game-model94": "Model 94",
            "game-colt45": "Peacemaker",
            "game-colt45_dual": "Dual Peacemaker",
            "game-hud-colt45_dual": "Peacemaker",
            "game-m1911": "M1911",
            "game-m1911_dual": "Dual M1911",
            "game-hud-m1911_dual": "M1911",
            "game-m1a1": "M1A1",
            "game-bar": "BAR M1918",
            "game-pkp": "PKP Pecheneg",
            "game-frag": "Frag Grenade",
            "game-hud-frag": "Frag",
            "game-smoke": "Smoke Grenade",
            "game-hud-smoke": "Smoke",
            "game-mirv": "MIRV Grenade",
            "game-hud-mirv": "MIRV",
            "game-mirv_mini": "MIRV Grenade",
            "game-strobe": "Strobe",
            "game-hud-strobe": "Strobe",
            "game-snowball": "Snowball",
            "game-hud-snowball": "Snowball",
            "game-snowball_heavy": "Snowball",
            "game-potato": "Potato",
            "game-hud-potato": "Potato",
            "game-potato_heavy": "Potato",
            "game-barrel_01": "a barrel",
            "game-barrel_01b": "a barrel",
            "game-silo_01": "a silo",
            "game-oven_01": "an oven",
            "game-control_panel_01": "Control Panel",
            "game-control_panel_02": "Control Panel",
            "game-control_panel_03": "a computer terminal",
            "game-control_panel_04": "a computer terminal",
            "game-control_panel_06": "a computer terminal",
            "game-power_box_01": "a power box",
            "game-airdrop_crate_01": "Air Drop",
            "game-airdrop_crate_02": "Air Drop",
            "game-stove_01": "a stove",
            "game-grill_01": "a grill",
            "index-play-50v50": "Play 50v50",
            "index-50v50": "50v50",
            "game-red-team": "Red Team",
            "game-blue-team": "Blue Team",
            "game-red-leader": "Red Leader",
            "game-blue-leader": "Blue Leader",
            "game-lieutenant": "Lieutenant",
            "game-medic": "Medic",
            "game-is-down": "is down",
            "game-is-dead": "is dead",
            "game-promoted-to": "promoted to",
            "game-youve-been-promoted-to": "You've been promoted to",
            "game-woods-king": "The Woods King",
            "game-perk-title-1": "Leadership",
            "game-perk-desc-1": "</br>Max adrenaline.</br>Increased size.",
            "game-perk-title-2": "Firepower",
            "game-perk-desc-2": "High-capacity magazines.",
            "game-perk-title-3": "Gift of the Woods",
            "game-perk-desc-3": "Restore health over time.</br>Increased size.",
            "game-perk-title-4": "Windwalk",
            "game-perk-desc-4": "When taking fire, gain a short burst of speed.",
            "game-perk-title-5": "Rare Potato",
            "game-perk-desc-5": "Always rotate to a high quality weapon.",
            "game-perk-title-6": "Mass Medicate",
            "game-perk-desc-6": "Reviving and using medical items affects all nearby players.",
            "index-online": "online",
            "index-news-korea": "We've officially broken out our <span class='highlight'>Korean servers</span> into their own region. To play in this region, select <span class='highlight'>South Korea</span> from the region selector."
        };
        e.exports = i
    },
    "604cff9c": function(e, t, a) {
        "use strict";

        function i() {
            this.active = !1
        }

        function r(e) {
            this.active = !1
        }

        function o() {
            this.explosions = [], this.physicsParticles = []
        }
        var n = (a("8b1dfb45"), a("6b42806d")),
            s = (a("34e32c48"), a("10899aea")),
            l = a("1901e2d9"),
            c = a("c2a798c8"),
            m = a("91649371"),
            p = (a("ce29f17f"), a("af8ba00f"), {
                frag: {
                    burst: {
                        particle: "explosionBurst",
                        scale: 1,
                        sound: {
                            grass: "explosion_01",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: .2,
                    shakeDur: .35,
                    lifetime: 2
                },
                smoke: {
                    burst: {
                        particle: "explosionBurst",
                        scale: 0,
                        sound: {
                            grass: "explosion_smoke_01",
                            water: "explosion_smoke_01"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 6
                },
                strobe: {
                    burst: {
                        particle: "explosionBurst",
                        scale: .25,
                        sound: {
                            grass: "explosion_04",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 3,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 2
                },
                barrel: {
                    burst: {
                        particle: "explosionBurst",
                        scale: 1,
                        sound: {
                            grass: "explosion_01",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: .2,
                    shakeDur: .35,
                    lifetime: 2
                },
                usas: {
                    burst: {
                        particle: "explosionUSAS",
                        scale: .75,
                        sound: {
                            grass: "explosion_03",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: .12,
                    shakeDur: .25,
                    lifetime: 1.25
                },
                mirv: {
                    burst: {
                        particle: "explosionMIRV",
                        scale: 1,
                        sound: {
                            grass: "explosion_01",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: .2,
                    shakeDur: .35,
                    lifetime: 2
                },
                mirv_mini: {
                    burst: {
                        particle: "explosionMIRV",
                        scale: .75,
                        sound: {
                            grass: "explosion_03",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 3,
                    shakeStr: .1,
                    shakeDur: .2,
                    lifetime: 1.25
                },
                snowball: {
                    burst: {
                        particle: "",
                        scale: .75,
                        sound: {
                            grass: "snowball_01",
                            water: "frag_water_01"
                        }
                    },
                    scatter: {
                        particle: "snowball_impact",
                        count: 5,
                        speed: {
                            min: 5,
                            max: 25
                        }
                    },
                    rippleCount: 1,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 1
                },
                snowball_heavy: {
                    burst: {
                        particle: "",
                        scale: .75,
                        sound: {
                            grass: "snowball_02",
                            water: "frag_water_01"
                        }
                    },
                    scatter: {
                        particle: "snowball_impact",
                        count: 8,
                        speed: {
                            min: 5,
                            max: 25
                        }
                    },
                    rippleCount: 1,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 1
                },
                potato: {
                    burst: {
                        particle: "",
                        scale: .75,
                        sound: {
                            grass: "potato_01",
                            water: "frag_water_01"
                        }
                    },
                    scatter: {
                        particle: "potato_impact",
                        count: 5,
                        speed: {
                            min: 5,
                            max: 25
                        }
                    },
                    rippleCount: 1,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 1
                },
                potato_heavy: {
                    burst: {
                        particle: "",
                        scale: .75,
                        sound: {
                            grass: "potato_02",
                            water: "frag_water_01"
                        }
                    },
                    scatter: {
                        particle: "potato_impact",
                        count: 8,
                        speed: {
                            min: 5,
                            max: 25
                        }
                    },
                    rippleCount: 1,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 1
                },
                bomb_iron: {
                    burst: {
                        particle: "explosionBomb",
                        scale: 2,
                        sound: {
                            grass: "explosion_01",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 12,
                    shakeStr: .25,
                    shakeDur: .4,
                    lifetime: 2
                }
            });
        i.prototype = {
            init: function(e, t, a, i) {
                this.pos = c.copy(e), this.vel = c.copy(t), this.layer = a, this.particle = i, this.ticker = 0, this.colCount = 0, this.active = !0
            },
            update: function(e, t, a) {
                var i = c.copy(this.pos);
                this.pos = c.add(this.pos, c.mul(this.vel, e)), this.vel = c.mul(this.vel, 1 / (1 + 5 * e));
                for (var r = [], o = t.me.m(), s = 0; s < o.length; s++) {
                    var m = o[s];
                    m.active && !m.dead && l.sameLayer(this.layer, m.layer) && r.push(m.collider)
                }
                for (var p = a.be.m(), d = 0; d < p.length; d++) {
                    var h = p[d];
                    h.active && !h.dead && l.sameLayer(this.layer, h.layer) && r.push(n.createCircle(h.pos, h.rad, 0))
                }
                for (var u = [], g = 0; g < r.length; g++) {
                    var y = n.intersectSegment(r[g], i, this.pos);
                    if (y) {
                        var w = c.length(c.sub(y.point, i));
                        u.push({
                            point: y.point,
                            normal: y.normal,
                            dist: w
                        })
                    }
                }
                if (u.sort(function(e, t) {
                        return e.dist - t.dist
                    }), u.length > 0) {
                    var x = u[0],
                        f = c.normalizeSafe(this.vel, c.create(1, 0)),
                        b = c.length(this.vel),
                        _ = c.sub(f, c.mul(x.normal, 2 * c.dot(x.normal, f))),
                        S = this.colCount++ > 0 ? .35 : 1;
                    this.pos = c.add(x.point, c.mul(x.normal, .01)), this.vel = c.mul(_, b * S)
                }
                this.particle.pos = c.copy(this.pos), this.ticker += e, this.ticker >= this.particle.life && (this.particle.n(), this.active = !1)
            }
        }, r.prototype = {
            o: function(e, t, a) {
                var i = m[e].explosionEffectType,
                    r = p[i];
                this.active = !0, this.done = !1, this.type = e, this.pos = c.copy(t), this.layer = a, this.ticker = 0, this.lifetime = r.lifetime, this.soundInstance = null, this.soundUpdateThrottle = 0
            },
            n: function() {
                this.active = !1
            },
            c: function(e, t, a, i, r, o) {
                var d = m[this.type].explosionEffectType,
                    h = p[d];
                if (0 == this.ticker) {
                    var u = !0;
                    if ("explosion_bomb_iron" == this.type) {
                        var g = n.createCircle(this.pos, .5);
                        r.insideBuildingCeiling(g, !0) && (u = !1)
                    }
                    if (u && (h.burst.particle && a.addParticle(h.burst.particle, this.layer, this.pos, c.create(0, 0), h.burst.scale, 0, null), h.scatter))
                        for (var y = 0; y < h.scatter.count; y++) {
                            var w = a.addParticle(h.scatter.particle, this.layer, this.pos, c.create(0, 0), 1, 0, null),
                                x = t.addPhysicsParticle(),
                                f = c.mul(c.randomUnit(), l.random(h.scatter.speed.min, h.scatter.speed.max));
                            x.init(this.pos, f, this.layer, w)
                        }
                    var b = r.getGroundSurface(this.pos, this.layer),
                        _ = "water" == b.type ? h.burst.sound.water : h.burst.sound.grass;
                    if (this.soundInstance = i.playSound(_, {
                            channel: "sfx",
                            soundPos: this.pos,
                            layer: this.layer,
                            muffled: !0,
                            rangeMult: 2,
                            ignoreMinAllowable: !0
                        }), "water" == b.type)
                        for (var S = 0; S < h.rippleCount; S++) {
                            var v = .5 * h.rippleCount,
                                k = c.add(this.pos, c.mul(c.randomUnit(), l.random(0, v))),
                                z = a.addRippleParticle(k, this.layer);
                            z.setDelay(.06 * S)
                        }
                }
                this.soundInstance && this.soundUpdateThrottle < 0 ? (this.soundUpdateThrottle = .1, this.soundInstance = i.updateSound(this.soundInstance, "sfx", this.pos, {
                    layer: this.layer,
                    muffled: !0
                })) : this.soundUpdateThrottle -= e, this.ticker += e;
                var M = s.min(this.ticker / h.shakeDur, 1),
                    T = s.lerp(M, h.shakeStr, 0);
                o.addShake(this.pos, T), this.ticker >= this.lifetime && (this.active = !1)
            }
        }, o.prototype = {
            addExplosion: function(e, t, a) {
                for (var i = null, o = 0; o < this.explosions.length; o++)
                    if (!this.explosions[o].active) {
                        i = this.explosions[o];
                        break
                    }
                i || (i = new r(this), this.explosions.push(i)), i.o(e, t, a)
            },
            addPhysicsParticle: function() {
                for (var e = null, t = 0; t < this.physicsParticles.length; t++) {
                    var a = this.physicsParticles[t];
                    if (!a.active) {
                        e = a;
                        break
                    }
                }
                return e || (e = new i, this.physicsParticles.push(e)), e
            },
            c: function(e, t, a, i, r, o, n) {
                for (var s = 0; s < this.explosions.length; s++) {
                    var l = this.explosions[s];
                    l.active && (l.c(e, this, r, o, t, i), l.active || l.n())
                }
                for (var c = 0; c < this.physicsParticles.length; c++) {
                    var m = this.physicsParticles[c];
                    m.active && m.update(e, t, a)
                }
            }
        }, e.exports = {
            _e: o
        }
    },
    "61fc98e9": function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            var a = {
                join_full: t.translate("index-team-is-full"),
                join_not_found: t.translate("index-failed-joining-team"),
                create_failed: t.translate("index-failed-creating-team"),
                join_failed: t.translate("index-failed-joining-team"),
                join_game_failed: t.translate("index-failed-joining-game"),
                lost_conn: t.translate("index-lost-connection"),
                find_game_error: t.translate("index-failed-finding-game"),
                find_game_full: t.translate("index-failed-finding-game"),
                find_game_invalid_protocol: t.translate("index-invalid-protocol"),
                kicked: t.translate("index-team-kicked")
            };
            return a[e] || a.lost_conn
        }
        var o = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var i = t[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, a, i) {
                    return a && e(t.prototype, a), i && e(t, i), t
                }
            }(),
            n = a("8ee62bea"),
            s = a("989ad62a"),
            l = (a("10899aea"), a("300e2704")),
            c = (a("48eca919"), a("259eae5b")),
            m = a("ce29f17f"),
            p = a("26be8056"),
            d = function() {
                function e(t, a, r, o, s, l) {
                    var c = this;
                    if (i(this, e), this.playBtn = n("#btn-start-team"), this.serverWarning = n("#server-warning"), this.teamOptions = n("#btn-team-queue-mode-1, #btn-team-queue-mode-2, #btn-team-fill-auto, #btn-team-fill-none"), this.serverSelect = n("#team-server-select"), this.queueMode1 = n("#btn-team-queue-mode-1"), this.queueMode2 = n("#btn-team-queue-mode-2"), this.fillAuto = n("#btn-team-fill-auto"), this.fillNone = n("#btn-team-fill-none"), this.config = t, this.pingTest = a, this.localization = r, this.audioManager = o, this.joinGameCb = s, this.leaveCb = l, this.active = !1, this.joined = !1, this.create = !1, this.joiningGame = !1, this.ws = null, this.keepAliveTimeout = 0, this.siteInfo = {}, this.playerData = {}, this.roomData = {}, this.players = [], this.prevPlayerCount = 0, this.localPlayerId = 0, this.isLeader = !0, this.editingName = !1, this.displayedInvalidProtocolModal = !1, this.serverSelect.change(function() {
                            var e = c.serverSelect.find(":selected").val();
                            c.pingTest.start([e]), c.setRoomProperty("region", e)
                        }), this.queueMode1.click(function() {
                            c.setRoomProperty("gameModeIdx", 1)
                        }), this.queueMode2.click(function() {
                            c.setRoomProperty("gameModeIdx", 2)
                        }), this.fillAuto.click(function() {
                            c.setRoomProperty("autoFill", !0)
                        }), this.fillNone.click(function() {
                            c.setRoomProperty("autoFill", !1)
                        }), this.playBtn.on("click", function() {
                            c.tryStartGame()
                        }), n("#team-copy-url, #team-desc-text").click(function(e) {
                            var t = n("<div/>", {
                                class: "copy-toast",
                                html: "Copied!"
                            });
                            n("#start-menu-wrapper").append(t), t.css({
                                left: e.pageX - parseInt(t.css("width")) / 2,
                                top: n("#team-copy-url").offset().top
                            }), t.animate({
                                top: "-=20",
                                opacity: 1
                            }, {
                                queue: !1,
                                duration: 300,
                                complete: function() {
                                    n(this).fadeOut(250, function() {
                                        n(this).remove()
                                    })
                                }
                            });
                            var a = n("#team-url").html();
                            p.copyTextToClipboard(a)
                        }), !m.webview && !m.mobile) {
                        this.hideUrl = !1;
                        var d = this;
                        n("#team-hide-url").click(function(e) {
                            d.hideUrl = !d.hideUrl, n("#team-desc-text, #team-code-text").css({
                                opacity: d.hideUrl ? 0 : 1
                            }), n(this).css({
                                "background-image": d.hideUrl ? "url(../img/gui/hide.svg)" : "url(../img/gui/eye.svg)"
                            })
                        })
                    }
                }
                return o(e, [{
                    key: "getPlayerById",
                    value: function(e) {
                        return this.players.find(function(t) {
                            return t.playerId == e
                        })
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.joined && (this.keepAliveTimeout -= e, this.keepAliveTimeout < 0 && (this.keepAliveTimeout = 30, this.sendMessage("keepAlive", {})))
                    }
                }, {
                    key: "connect",
                    value: function(e, t) {
                        var a = this;
                        if (!this.active || t !== this.roomData.roomUrl) {
                            var i = "https:" == window.location.protocol,
                                r = i ? "wss:" : "ws:",
                                o = c.resolveRoomHost(e, t),
                                n = r + "//" + o + "/team";
                            this.active = !0, this.joined = !1, this.create = e, this.joiningGame = !1, this.editingName = !1, this.playerData = {
                                name: this.config.get("playerName")
                            }, this.roomData = {
                                roomUrl: t,
                                region: this.config.get("region"),
                                gameModeIdx: this.config.get("gameModeIdx"),
                                autoFill: this.config.get("teamAutoFill"),
                                findingGame: !1,
                                lastError: ""
                            }, this.displayedInvalidProtocolModal = !1, this.refreshUi(), this.ws && (this.ws.onclose = function() {}, this.ws.close(), this.ws = null);
                            try {
                                this.ws = new WebSocket(n), this.ws.onerror = function(e) {
                                    a.ws && a.ws.close()
                                }, this.ws.onclose = function() {
                                    var e = "";
                                    a.joiningGame || (e = a.joined ? "lost_conn" : a.create ? "create_failed" : "join_failed"), a.leave(e)
                                }, this.ws.onopen = function() {
                                    a.create ? a.sendMessage("create", {
                                        roomData: a.roomData,
                                        playerData: a.playerData
                                    }) : a.sendMessage("join", {
                                        roomUrl: a.roomData.roomUrl,
                                        playerData: a.playerData
                                    })
                                }, this.ws.onmessage = function(e) {
                                    if (a.active) {
                                        var t = JSON.parse(e.data);
                                        a.onMessage(t.type, t.data)
                                    }
                                }
                            } catch (e) {
                                this.leave(this.create ? "create_failed" : "join_failed")
                            }
                        }
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        if (this.active) {
                            this.ws && this.ws.close(), this.ws = null, this.active = !1, this.joined = !1, this.joiningGame = !1, this.refreshUi(), this.config.set("gameModeIdx", this.roomData.gameModeIdx), this.config.set("teamAutoFill", this.roomData.autoFill), this.isLeader && this.config.set("region", this.roomData.region);
                            var t = "";
                            e && "" != e && (t = r(e, this.localization)), this.leaveCb(t)
                        }
                    }
                }, {
                    key: "onGameComplete",
                    value: function() {
                        this.active && (this.joiningGame = !1, this.sendMessage("gameComplete"))
                    }
                }, {
                    key: "onMessage",
                    value: function(e, t) {
                        switch (e) {
                            case "state":
                                this.joined = !0;
                                var a = this.roomData;
                                this.roomData = t.room, this.players = t.players, this.localPlayerId = t.localPlayerId, this.isLeader = this.getPlayerById(this.localPlayerId).isLeader, this.isLeader && (this.roomData.region = a.region, this.roomData.autoFill = a.autoFill), this.refreshUi();
                                break;
                            case "joinGame":
                                this.joiningGame = !0, this.joinGameCb(t);
                                break;
                            case "keepAlive":
                                break;
                            case "kicked":
                                this.leave("kicked");
                                break;
                            case "error":
                                this.leave(t.type)
                        }
                    }
                }, {
                    key: "sendMessage",
                    value: function(e, t) {
                        if (this.ws)
                            if (this.ws.readyState === this.ws.OPEN) {
                                var a = JSON.stringify({
                                    type: e,
                                    data: t
                                });
                                this.ws.send(a)
                            } else this.ws.close()
                    }
                }, {
                    key: "setRoomProperty",
                    value: function(e, t) {
                        this.isLeader && this.roomData[e] != t && (this.roomData[e] = t, this.sendMessage("setRoomProps", this.roomData))
                    }
                }, {
                    key: "tryStartGame",
                    value: function() {
                        if (this.isLeader && !this.roomData.findingGame) {
                            var e = s.protocolVersion,
                                t = this.roomData.region,
                                a = p.getParameterByName("region");
                            void 0 !== a && a.length > 0 && (t = a);
                            var i = this.pingTest.getZones(t),
                                r = p.getParameterByName("zone");
                            void 0 !== r && r.length > 0 && (i = [r]);
                            var o = {
                                version: e,
                                region: t,
                                zones: i
                            };
                            this.sendMessage("playGame", o), this.roomData.findingGame = !0, this.refreshUi()
                        }
                    }
                }, {
                    key: "refreshUi",
                    value: function() {
                        var e = this,
                            t = function(e, t, a) {
                                e.removeClass("btn-darken btn-disabled btn-opaque btn-hollow-selected"), a ? e.addClass("btn-darken") : (e.addClass("btn-disabled"), t || e.addClass("btn-opaque")), t && e.addClass("btn-hollow-selected"), e.prop("disabled", !a)
                            };
                        n("#team-menu").css("display", this.active ? "block" : "none"), n("#start-menu").css("display", this.active ? "none" : "block"), n("#news-block").css("display", this.active ? "none" : "block"), n("#social-share-block").css("display", this.active ? "none" : "block");
                        var a = "" != this.roomData.lastError,
                            i = r(this.roomData.lastError, this.localization);
                        if (this.serverWarning.css("opacity", a ? 1 : 0), this.serverWarning.html(i), "find_game_invalid_protocol" != this.roomData.lastError || this.displayedInvalidProtocolModal || (n("#modal-refresh").fadeIn(200), this.displayedInvalidProtocolModal = !0), this.active && (n("#team-menu-joining-text").css("display", this.create ? "none" : "block"), n("#team-menu-creating-text").css("display", this.create ? "block" : "none"), n("#team-menu-connecting").css("display", this.joined ? "none" : "block"), n("#team-menu-contents").css("display", this.joined ? "block" : "none")), this.joined) {
                            for (var o = this.siteInfo.pops || {}, s = Object.keys(o), c = 0; c < s.length; c++) {
                                var d = s[c],
                                    h = o[d],
                                    u = n("#team-server-opts").children('option[value="' + d + '"]');
                                u.html(u.attr("data-label") + " [" + h + "]")
                            }
                            if (this.serverSelect.find("option").each(function(t, a) {
                                    a.selected = a.value == e.roomData.region
                                }), t(this.queueMode1, 1 == this.roomData.gameModeIdx, this.isLeader && -1 !== this.roomData.enabledGameModeIdxs.indexOf(1)), t(this.queueMode2, 2 == this.roomData.gameModeIdx, this.isLeader && -1 !== this.roomData.enabledGameModeIdxs.indexOf(2)), t(this.fillAuto, this.roomData.autoFill, this.isLeader), t(this.fillNone, !this.roomData.autoFill, this.isLeader), this.serverSelect.prop("disabled", !this.isLeader), this.roomData.roomUrl) {
                                var g = window.location.origin + "/" + this.roomData.roomUrl,
                                    y = this.roomData.roomUrl.substring(1);
                                m.webview ? n("#team-url").html(y) : (n("#team-url").html(g), n("#team-code").html(y)), window.history && window.history.replaceState("", "", this.roomData.roomUrl)
                            }
                            this.playBtn.html(this.roomData.findingGame || this.joiningGame ? '<div class="ui-spinner"></div>' : this.playBtn.attr("data-label"));
                            for (var w = !1, x = 0; x < this.players.length; x++) w |= this.players[x].inGame;
                            var f = n("#msg-wait-reason"),
                                b = n("#btn-start-team");
                            if (this.isLeader) {
                                f.html(this.localization.translate("index-game-in-progress") + "<span> ...</span>");
                                var _ = w && !this.joiningGame;
                                f.css("display", _ ? "block" : "none"), b.css("display", _ ? "none" : "block")
                            } else this.roomData.findingGame || this.joiningGame ? f.html('<div class="ui-spinner" style="margin-right:16px"></div>' + this.localization.translate("index-joining-game") + "<span> ...</span>") : w ? f.html(this.localization.translate("index-game-in-progress") + "<span> ...</span>") : f.html(this.localization.translate("index-waiting-for-leader") + "<span> ...</span>"), f.css("display", "block"), b.css("display", "none");
                            var S = n("#team-menu-member-list");
                            S.empty();
                            for (var v = 0; v < this.roomData.maxPlayers; v++) ! function(t) {
                                var a = {
                                    name: "",
                                    playerId: 0,
                                    isLeader: !1,
                                    inGame: !1,
                                    self: !1
                                };
                                if (t < e.players.length) {
                                    var i = e.players[t];
                                    a = {
                                        name: i.name,
                                        playerId: i.playerId,
                                        isLeader: i.isLeader,
                                        inGame: i.inGame,
                                        self: i.playerId == e.localPlayerId
                                    }
                                }
                                var r = n("<div/>", {
                                        class: "team-menu-member"
                                    }),
                                    o = "";
                                a.isLeader ? o = " icon-leader" : e.isLeader && 0 != a.playerId && (o = " icon-kick"), r.append(n("<div/>", {
                                    class: "icon" + o,
                                    "data-playerid": a.playerId
                                }));
                                var s = null,
                                    c = null;
                                if (e.editingName && a.self) {
                                    s = n("<input/>", {
                                        type: "text",
                                        tabindex: 0,
                                        class: "name menu-option name-text name-self-input",
                                        maxLength: l.Constants.PlayerNameMaxLen
                                    }), s.val(a.name);
                                    var m = function(t) {
                                            var i = p.sanitizeNameInput(s.val());
                                            a.name = i, e.config.set("playerName", i), e.sendMessage("changeName", {
                                                name: i
                                            }), e.editingName = !1, e.refreshUi()
                                        },
                                        d = function(t) {
                                            e.editingName = !1, e.refreshUi()
                                        };
                                    s.keypress(function(e) {
                                        if (13 === e.which) return m(), !1
                                    }), s.on("blur", d), r.append(s), c = n("<div/>", {
                                        class: "icon icon-submit-name-change"
                                    }), c.on("click", m), c.on("mousedown", function(e) {
                                        e.preventDefault(), e.stopPropagation()
                                    })
                                } else {
                                    var h = "name-text";
                                    a.self && (h += " name-self"), a.inGame && (h += " name-in-game");
                                    var u = n("<div/>", {
                                        class: "name menu-option " + h,
                                        html: p.htmlEscape(a.name)
                                    });
                                    a.self && u.on("click", function() {
                                        console.log("editing name"), e.editingName = !0, e.refreshUi()
                                    }), r.append(u)
                                }
                                c ? r.append(c) : r.append(n("<div/>", {
                                    class: "icon " + (a.inGame ? "icon-in-game" : "")
                                })), S.append(r), s && s.focus()
                            }(v);
                            n(".icon-kick", S).click(function(t) {
                                var a = n(t.currentTarget).attr("data-playerid");
                                e.sendMessage("kick", {
                                    playerId: a
                                })
                            });
                            var k = this.players.find(function(t) {
                                    return t.playerId == e.localPlayerId
                                }),
                                z = k && !k.inGame;
                            !document.hasFocus() && this.prevPlayerCount < this.players.length && this.players.length > 1 && z && this.audioManager.playSound("notification_join_01", {
                                channel: "ui"
                            }), this.prevPlayerCount = this.players.length
                        }
                    }
                }]), e
            }();
        e.exports = d
    },
    "66141f52": function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            a = a || 2;
            var i = t && t.length,
                o = i ? t[0] * a : e.length,
                s = r(e, 0, o, a, !0),
                l = [];
            if (!s) return l;
            var c, m, d, h, u, g, y;
            if (i && (s = p(e, t, s, a)), e.length > 80 * a) {
                c = d = e[0], m = h = e[1];
                for (var w = a; w < o; w += a) u = e[w], g = e[w + 1], u < c && (c = u), g < m && (m = g), u > d && (d = u), g > h && (h = g);
                y = Math.max(d - c, h - m), y = 0 !== y ? 1 / y : 0
            }
            return n(s, l, a, c, m, y), l
        }

        function r(e, t, a, i, r) {
            var o, n;
            if (r === A(e, t, a, i) > 0)
                for (o = t; o < a; o += i) n = I(o, e[o], e[o + 1], n);
            else
                for (o = a - i; o >= t; o -= i) n = I(o, e[o], e[o + 1], n);
            return n && S(n, n.next) && (P(n), n = n.next), n
        }

        function o(e, t) {
            if (!e) return e;
            t || (t = e);
            var a, i = e;
            do {
                if (a = !1, i.steiner || !S(i, i.next) && 0 !== _(i.prev, i, i.next)) i = i.next;
                else {
                    if (P(i), (i = t = i.prev) === i.next) break;
                    a = !0
                }
            } while (a || i !== t);
            return t
        }

        function n(e, t, a, i, r, p, d) {
            if (e) {
                !d && p && g(e, i, r, p);
                for (var h, u, y = e; e.prev !== e.next;)
                    if (h = e.prev, u = e.next, p ? l(e, i, r, p) : s(e)) t.push(h.i / a), t.push(e.i / a), t.push(u.i / a), P(e), e = u.next, y = u.next;
                    else if ((e = u) === y) {
                    d ? 1 === d ? (e = c(e, t, a), n(e, t, a, i, r, p, 2)) : 2 === d && m(e, t, a, i, r, p) : n(o(e), t, a, i, r, p, 1);
                    break
                }
            }
        }

        function s(e) {
            var t = e.prev,
                a = e,
                i = e.next;
            if (_(t, a, i) >= 0) return !1;
            for (var r = e.next.next; r !== e.prev;) {
                if (f(t.x, t.y, a.x, a.y, i.x, i.y, r.x, r.y) && _(r.prev, r, r.next) >= 0) return !1;
                r = r.next
            }
            return !0
        }

        function l(e, t, a, i) {
            var r = e.prev,
                o = e,
                n = e.next;
            if (_(r, o, n) >= 0) return !1;
            for (var s = r.x < o.x ? r.x < n.x ? r.x : n.x : o.x < n.x ? o.x : n.x, l = r.y < o.y ? r.y < n.y ? r.y : n.y : o.y < n.y ? o.y : n.y, c = r.x > o.x ? r.x > n.x ? r.x : n.x : o.x > n.x ? o.x : n.x, m = r.y > o.y ? r.y > n.y ? r.y : n.y : o.y > n.y ? o.y : n.y, p = w(s, l, t, a, i), d = w(c, m, t, a, i), h = e.prevZ, u = e.nextZ; h && h.z >= p && u && u.z <= d;) {
                if (h !== e.prev && h !== e.next && f(r.x, r.y, o.x, o.y, n.x, n.y, h.x, h.y) && _(h.prev, h, h.next) >= 0) return !1;
                if (h = h.prevZ, u !== e.prev && u !== e.next && f(r.x, r.y, o.x, o.y, n.x, n.y, u.x, u.y) && _(u.prev, u, u.next) >= 0) return !1;
                u = u.nextZ
            }
            for (; h && h.z >= p;) {
                if (h !== e.prev && h !== e.next && f(r.x, r.y, o.x, o.y, n.x, n.y, h.x, h.y) && _(h.prev, h, h.next) >= 0) return !1;
                h = h.prevZ
            }
            for (; u && u.z <= d;) {
                if (u !== e.prev && u !== e.next && f(r.x, r.y, o.x, o.y, n.x, n.y, u.x, u.y) && _(u.prev, u, u.next) >= 0) return !1;
                u = u.nextZ
            }
            return !0
        }

        function c(e, t, a) {
            var i = e;
            do {
                var r = i.prev,
                    o = i.next.next;
                !S(r, o) && v(r, i, i.next, o) && z(r, o) && z(o, r) && (t.push(r.i / a), t.push(i.i / a), t.push(o.i / a), P(i), P(i.next), i = e = o), i = i.next
            } while (i !== e);
            return i
        }

        function m(e, t, a, i, r, s) {
            var l = e;
            do {
                for (var c = l.next.next; c !== l.prev;) {
                    if (l.i !== c.i && b(l, c)) {
                        var m = T(l, c);
                        return l = o(l, l.next), m = o(m, m.next), n(l, t, a, i, r, s), void n(m, t, a, i, r, s)
                    }
                    c = c.next
                }
                l = l.next
            } while (l !== e)
        }

        function p(e, t, a, i) {
            var n, s, l, c, m, p = [];
            for (n = 0, s = t.length; n < s; n++) l = t[n] * i, c = n < s - 1 ? t[n + 1] * i : e.length, m = r(e, l, c, i, !1), m === m.next && (m.steiner = !0), p.push(x(m));
            for (p.sort(d), n = 0; n < p.length; n++) h(p[n], a), a = o(a, a.next);
            return a
        }

        function d(e, t) {
            return e.x - t.x
        }

        function h(e, t) {
            if (t = u(e, t)) {
                var a = T(t, e);
                o(a, a.next)
            }
        }

        function u(e, t) {
            var a, i = t,
                r = e.x,
                o = e.y,
                n = -1 / 0;
            do {
                if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                    var s = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                    if (s <= r && s > n) {
                        if (n = s, s === r) {
                            if (o === i.y) return i;
                            if (o === i.next.y) return i.next
                        }
                        a = i.x < i.next.x ? i : i.next
                    }
                }
                i = i.next
            } while (i !== t);
            if (!a) return null;
            if (r === n) return a.prev;
            var l, c = a,
                m = a.x,
                p = a.y,
                d = 1 / 0;
            for (i = a.next; i !== c;) r >= i.x && i.x >= m && r !== i.x && f(o < p ? r : n, o, m, p, o < p ? n : r, o, i.x, i.y) && ((l = Math.abs(o - i.y) / (r - i.x)) < d || l === d && i.x > a.x) && z(i, e) && (a = i, d = l), i = i.next;
            return a
        }

        function g(e, t, a, i) {
            var r = e;
            do {
                null === r.z && (r.z = w(r.x, r.y, t, a, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
            } while (r !== e);
            r.prevZ.nextZ = null, r.prevZ = null, y(r)
        }

        function y(e) {
            var t, a, i, r, o, n, s, l, c = 1;
            do {
                for (a = e, e = null, o = null, n = 0; a;) {
                    for (n++, i = a, s = 0, t = 0; t < c && (s++, i = i.nextZ); t++);
                    for (l = c; s > 0 || l > 0 && i;) 0 !== s && (0 === l || !i || a.z <= i.z) ? (r = a, a = a.nextZ, s--) : (r = i, i = i.nextZ, l--), o ? o.nextZ = r : e = r, r.prevZ = o, o = r;
                    a = i
                }
                o.nextZ = null, c *= 2
            } while (n > 1);
            return e
        }

        function w(e, t, a, i, r) {
            return e = 32767 * (e - a) * r, t = 32767 * (t - i) * r, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e | t << 1
        }

        function x(e) {
            var t = e,
                a = e;
            do {
                t.x < a.x && (a = t), t = t.next
            } while (t !== e);
            return a
        }

        function f(e, t, a, i, r, o, n, s) {
            return (r - n) * (t - s) - (e - n) * (o - s) >= 0 && (e - n) * (i - s) - (a - n) * (t - s) >= 0 && (a - n) * (o - s) - (r - n) * (i - s) >= 0
        }

        function b(e, t) {
            return e.next.i !== t.i && e.prev.i !== t.i && !k(e, t) && z(e, t) && z(t, e) && M(e, t)
        }

        function _(e, t, a) {
            return (t.y - e.y) * (a.x - t.x) - (t.x - e.x) * (a.y - t.y)
        }

        function S(e, t) {
            return e.x === t.x && e.y === t.y
        }

        function v(e, t, a, i) {
            return !!(S(e, t) && S(a, i) || S(e, i) && S(a, t)) || _(e, t, a) > 0 != _(e, t, i) > 0 && _(a, i, e) > 0 != _(a, i, t) > 0
        }

        function k(e, t) {
            var a = e;
            do {
                if (a.i !== e.i && a.next.i !== e.i && a.i !== t.i && a.next.i !== t.i && v(a, a.next, e, t)) return !0;
                a = a.next
            } while (a !== e);
            return !1
        }

        function z(e, t) {
            return _(e.prev, e, e.next) < 0 ? _(e, t, e.next) >= 0 && _(e, e.prev, t) >= 0 : _(e, t, e.prev) < 0 || _(e, e.next, t) < 0
        }

        function M(e, t) {
            var a = e,
                i = !1,
                r = (e.x + t.x) / 2,
                o = (e.y + t.y) / 2;
            do {
                a.y > o != a.next.y > o && a.next.y !== a.y && r < (a.next.x - a.x) * (o - a.y) / (a.next.y - a.y) + a.x && (i = !i), a = a.next
            } while (a !== e);
            return i
        }

        function T(e, t) {
            var a = new C(e.i, e.x, e.y),
                i = new C(t.i, t.x, t.y),
                r = e.next,
                o = t.prev;
            return e.next = t, t.prev = e, a.next = r, r.prev = a, i.next = a, a.prev = i, o.next = i, i.prev = o, i
        }

        function I(e, t, a, i) {
            var r = new C(e, t, a);
            return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
        }

        function P(e) {
            e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
        }

        function C(e, t, a) {
            this.i = e, this.x = t, this.y = a, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }

        function A(e, t, a, i) {
            for (var r = 0, o = t, n = a - i; o < a; o += i) r += (e[n] - e[o]) * (e[o + 1] + e[n + 1]), n = o;
            return r
        }
        e.exports = i, e.exports.default = i, i.deviation = function(e, t, a, i) {
            var r = t && t.length,
                o = r ? t[0] * a : e.length,
                n = Math.abs(A(e, 0, o, a));
            if (r)
                for (var s = 0, l = t.length; s < l; s++) {
                    var c = t[s] * a,
                        m = s < l - 1 ? t[s + 1] * a : e.length;
                    n -= Math.abs(A(e, c, m, a))
                }
            var p = 0;
            for (s = 0; s < i.length; s += 3) {
                var d = i[s] * a,
                    h = i[s + 1] * a,
                    u = i[s + 2] * a;
                p += Math.abs((e[d] - e[u]) * (e[h + 1] - e[d + 1]) - (e[d] - e[h]) * (e[u + 1] - e[d + 1]))
            }
            return 0 === n && 0 === p ? 0 : Math.abs((p - n) / n)
        }, i.flatten = function(e) {
            for (var t = e[0][0].length, a = {
                    vertices: [],
                    holes: [],
                    dimensions: t
                }, i = 0, r = 0; r < e.length; r++) {
                for (var o = 0; o < e[r].length; o++)
                    for (var n = 0; n < t; n++) a.vertices.push(e[r][o][n]);
                r > 0 && (i += e[r - 1].length, a.holes.push(i))
            }
            return a
        }
    },
    "6afea591": function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Main Spring",
                    icon: "img/gui/surviv.svg",
                    mode: "main"
                },
                assets: {
                    audio: [],
                    atlases: ["gradient", "loadout", "shared", "main"]
                },
                biome: {
                    colors: {
                        background: 2118510,
                        water: 3310251,
                        beach: 16035400,
                        riverbank: 9079434,
                        grass: 6066442,
                        underground: 1772803,
                        playerSubmerge: 2854052
                    },
                    sound: {
                        riverShore: "stone"
                    },
                    particles: {
                        camera: "falling_leaf_spring",
                        ripple: "waterRipple"
                    }
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    "6b42806d": function(e, t, a) {
        "use strict";
        var i = a("34e32c48"),
            r = a("10899aea"),
            o = a("c2a798c8"),
            n = {
                Type: {
                    Circle: 0,
                    Aabb: 1
                },
                createCircle: function(e, t, a) {
                    return {
                        type: n.Type.Circle,
                        pos: o.copy(e),
                        rad: t,
                        height: void 0 !== a ? a : 0
                    }
                },
                createAabb: function(e, t, a) {
                    return {
                        type: n.Type.Aabb,
                        min: o.copy(e),
                        max: o.copy(t),
                        height: void 0 !== a ? a : 0
                    }
                },
                createAabbExtents: function(e, t, a) {
                    var i = o.sub(e, t),
                        r = o.add(e, t);
                    return n.createAabb(i, r, a)
                },
                createBounding: function(e) {
                    if (1 == e.length) return n.copy(e[0]);
                    for (var t = [], a = 0, o = 0; o < e.length; o++) {
                        var s = e[o];
                        t.push(n.toAabb(s)), a = r.max(a, s.height)
                    }
                    var l = i.boundingAabb(t);
                    return n.createAabb(l.min, l.max, a)
                },
                toAabb: function(e) {
                    if (e.type == n.Type.Aabb) return n.createAabb(e.min, e.max, e.height);
                    var t = i.circleToAabb(e.pos, e.rad);
                    return n.createAabb(t.min, t.max, e.height)
                },
                copy: function(e) {
                    return e.type == n.Type.Circle ? n.createCircle(e.pos, e.rad, e.height) : n.createAabb(e.min, e.max, e.height)
                },
                transform: function(e, t, a, i) {
                    if (e.type == n.Type.Aabb) {
                        for (var s = o.mul(o.sub(e.max, e.min), .5), l = o.add(e.min, s), c = [o.create(l.x - s.x, l.y - s.y), o.create(l.x - s.x, l.y + s.y), o.create(l.x + s.x, l.y - s.y), o.create(l.x + s.x, l.y + s.y)], m = o.create(Number.MAX_VALUE, Number.MAX_VALUE), p = o.create(-Number.MAX_VALUE, -Number.MAX_VALUE), d = 0; d < c.length; d++) {
                            var h = o.add(o.rotate(o.mul(c[d], i), a), t);
                            m.x = r.min(m.x, h.x), m.y = r.min(m.y, h.y), p.x = r.max(p.x, h.x), p.y = r.max(p.y, h.y)
                        }
                        return n.createAabb(m, p, e.height)
                    }
                    return n.createCircle(o.add(o.rotate(o.mul(e.pos, i), a), t), e.rad * i, e.height)
                },
                intersectCircle: function(e, t, a) {
                    return e.type == n.Type.Aabb ? i.intersectAabbCircle(e.min, e.max, t, a) : i.intersectCircleCircle(e.pos, e.rad, t, a)
                },
                intersectAabb: function(e, t, a) {
                    return e.type == n.Type.Aabb ? i.intersectAabbAabb(e.min, e.max, t, a) : i.intersectAabbCircle(t, a, e.pos, e.rad)
                },
                intersectSegment: function(e, t, a) {
                    return e.type == n.Type.Aabb ? i.intersectSegmentAabb(t, a, e.min, e.max) : i.intersectSegmentCircle(t, a, e.pos, e.rad)
                },
                intersect: function(e, t) {
                    return t.type == n.Type.Aabb ? n.intersectAabb(e, t.min, t.max) : n.intersectCircle(e, t.pos, t.rad)
                }
            };
        e.exports = n
    },
    "6b9375bf": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-05-13",
                locale: "vn"
            },
            "word-order": "svo",
            "index-slogan": "2d Battle Royale",
            "index-region": "Vùng",
            "index-north-america": "Bắc Mỹ",
            "index-europe": "Châu Âu",
            "index-asia": "Châu Á",
            "index-south-america": "Nam Mỹ",
            "index-korea": "Đại Hàn Dân Quốc",
            "index-players": "người chơi",
            "index-play-solo": "Chơi một người",
            "index-play-duo": "Chơi nhóm hai người",
            "index-play-squad": "Chơi nhóm bốn người",
            "index-join-team": "Vào nhóm",
            "index-create-team": "Tạo nhóm",
            "index-leave-team": "Rời nhóm",
            "index-joining-team": "Đang vào nhóm",
            "index-creating-team": "Đang tạo nhóm",
            "index-invite-link": "Đường dẫn mời chơi",
            "index-invite-code": "Mã số mời chơi",
            "index-solo": "Đơn",
            "index-duo": "Nhóm hai",
            "index-squad": "Nhóm bốn",
            "index-auto-fill": "Tự động điền",
            "index-no-fill": "Không thêm",
            "index-waiting-for-leader": "Chờ trưởng nhóm bắt đầu lượt chơi",
            "index-joining-game": "Tham gia trò chơi",
            "index-game-in-progress": "Trò chơi đang diễn ra",
            "index-play": "Chơi",
            "index-featured-youtuber": "YouTuber khách mời",
            "index-streaming-live": "Phát trực tiếp!",
            "index-settings": "Cài đặt",
            "index-high-resolution": "Độ phân giải cao (đánh dấu để tăng chất lượng hình ảnh)",
            "index-screen-shake": "Rung màn hình",
            "index-master-volume": "Âm lượng tổng",
            "index-sfx-volume": "Âm lượng SFX",
            "index-music-volume": "Music Volume",
            "index-mobile-announce": "Now available on mobile!",
            "index-mobile-tooltip": "Visit <span>surviv.io</span> on your mobile device to play on the go!",
            "index-team-is-full": "Nhóm đã đủ người!",
            "index-failed-joining-team": "Không vào được nhóm.",
            "index-failed-creating-team": "Không tạo được nhóm.",
            "index-failed-finding-game": "Không tìm được lượt chơi.",
            "index-failed-joining-game": "Không vào được lượt chơi.",
            "index-lost-connection": "Mất kết nối với nhóm.",
            "index-host-closed": "Chủ lượt chơi đã đóng kết nối.",
            "index-invalid-protocol": "Phiên bản cũ.",
            "index-view-more": "Xem thêm",
            "index-back-to-main": "Quay lại Danh mục chính",
            "index-most-kills": "Tiêu diệt nhiều nhất",
            "index-total-kills": "Tổng số bị tiêu diệt",
            "index-total-wins": "Tổng số lần thắng",
            "index-top-5-percent": "Tốp 5 phần trăm",
            "index-kill-death-ratio": 'Tỷ lệ "Tiêu diệt-Bị tiêu diệt"',
            "index-mode": "Mode",
            "index-for": "Của",
            "index-today": "Ngày hôm nay",
            "index-this-week": "Tuần này",
            "index-all-time": "Toàn bộ thời gian chơi",
            "index-top-100": "Tốp 100",
            "index-rank": "Thứ hạng",
            "index-player": "Người chơi",
            "index-total-games": "Tất cả các lượt chơi",
            "index-controls": "Kiểm soát",
            "index-movement": "Di chuyển",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Ngắm",
            "index-aim-ctrl": "Chuột",
            "index-punch": "Đấm",
            "index-shoot": "Bắn",
            "index-shoot-ctrl": "Bấm chuột trái",
            "index-change-weapons": "Đổi vũ khí",
            "index-change-weapons-ctrl": "1 đến 4 hoặc nút cuộn chuột",
            "index-stow-weapons": "Stow Weapons (Melee Mode)",
            "index-stow-weapons-ctrl": "3 hoặc E",
            "index-swap-weapons": "Đổi về vũ khí trước đó",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Nạp đạn",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Phóng to",
            "index-scope-zoom-ctrl": "Bấm chuột trái để phóng to",
            "index-pickup": "Nhặt lên",
            "index-loot": "Vật phẩm",
            "index-revive": "Hồi phục",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Sử dụng vật phẩm cứu thương",
            "index-use-medical-ctrl": "Bấm chuột trái lệ vật phẩm hoặc ấn 7-0",
            "index-drop-item": "Bỏ vật phẩm",
            "index-drop-item-ctrl": "Phải chuột phải vào vật phẩm",
            "index-cancel-action": "Hủy hành động",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Xem bản đồ",
            "index-view-map-ctrl": "M hoặc G",
            "index-toggle-minimap": "Bật bản đồ mini",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Sử dụng Cửa sổ Trò chuyện của nhóm",
            "index-use-ping-ctrl": "Giữ C, rồi giữ chuột phải và rê chuột, rồi thả chuột phải",
            "index-use-emote": "Dùng Cửa sổ Biểu cảm của nhóm",
            "index-use-emote-ctrl": "Giữ phải chuột rồi rê chuột, rồi thả phải chuột",
            "index-how-to-play": "Cách chơi",
            "index-tips-1-desc": "Mục tiêu của trò surviv.io là thành người cuối cùng còn sống sót. Bạn chỉ có một mạng cho mỗi lượt chơi - không thể tái sinh lại!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "Nếu các bạn đã chơi những trò chơi sinh tồn kiểu PUBG, Fortnite hay H1Z1, thì bạn đã nắm được một nửa trò chơi rồi! Hãy coi trò surviv.io như là trò PUBG 2D.",
            "index-tips-3": "Kiếm vật phẩm và tiêu diệt",
            "index-tips-3-desc": "Bạn sẽ bắt đầu trò chơi mà không có vật phẩm gì ngoài một cái balo. Chạy quanh bản đồ để tìm vật phẩm như: vũ khí, đạn, ống ngắm và và vật phẩm cứu thương. Tiêu diệt những người chơi khác và bạn có thể lấy vật phẩm của họ!",
            "index-tips-4": "Màu đỏ = Không ổn!",
            "index-tips-4-desc": "Người không chỉ là thứ duy nhất có thể gây sát thương lên bạn. Vùng màu đỏ nguy hiểm sẽ di chuyển và thu nhỏ dần lại theo bản đồ và gây sát thương lớn nếu bạn nằm trong vùng màu đỏ. Hãy để ý tới bản đồ và giữ khoảng cách an toàn.",
            "index-movement-ctrl-touch": "Núm điều khiển bên trái",
            "index-aim-ctrl-touch": "Núm điều khiển bên phải",
            "index-shoot-ctrl-touch": "Kéo nút điều khiển bên phải ra ngoài mép thanh điều khiển",
            "index-change-weapons-ctrl-touch": "Chạm vào ô vũ khí",
            "index-reload-ctrl-touch": "Chạm vào bộ đếm đạn được trang bị",
            "index-scope-zoom-ctrl-touch": "Chạm vào mục thu phóng",
            "index-pickup-ctrl-touch": "Chạm vào nút tương tác hoặc tên vật phẩm",
            "index-use-medical-ctrl-touch": "Chạm vào mục y tế",
            "index-drop-item-ctrl-touch": "Chạm và giữ đồ vật",
            "index-cancel-action-ctrl-touch": "Chạm vào nút tương tác",
            "index-view-map-ctrl-touch": "Chạm vào bản đồ mini",
            "index-use-ping-ctrl-touch": "Hiển thị bản đồ và chạm vào bất kỳ vị trí nào trên bản đồ",
            "index-use-emote-ctrl-touch": "Chạm vào biểu tượng sống sót",
            "game-alive": "Còn sống",
            "game-reloading": "Nạp đạn",
            "game-use": "Use",
            "game-using": "Sử dụng",
            "game-reviving": "Hồi phục",
            "game-revive-teammate": "Hồi phục cho đồng đội",
            "game-equip": "Trang bị",
            "game-cancel": "Hủy",
            "game-open-door": "Mở cửa",
            "game-close-door": "Đóng cửa",
            "game-You": "Bạn",
            "game-you": "bạn",
            "game-themselves": "chính họ",
            "game-yourself": "chính bạn",
            "game-you-died": "đã bị tiêu diệt",
            "game-player-died": "đã bị tiêu diệt",
            "game-with": "bởi",
            "game-knocked-out": "hạ gục",
            "game-killed": "đã bị tiêu diệt",
            "game-finally-killed": "cuối cùng cũng tiêu diệt được",
            "game-finally-bled-out": "cuối cùng đã chảy máu",
            "game-died-outside": "đã bị tiêu diệt ngoài vùng an toàn",
            "game-the-red-zone": "Vùng màu đỏ",
            "game-waiting-for-players": "Đợi người chơi khác",
            "game-spectating": "Quan sát",
            "game-red-zone-advances": "Vùng màu đỏ thu hẹp dần",
            "game-red-zone-advancing": "Vùng màu đỏ đang thu hẹp dần, hãy chạy về vùng an toàn!",
            "game-seconds": "giây",
            "game-minutes": "phút",
            "game-minute": "phút",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Không đủ chỗ!",
            "game-item-already-owned": "Đã có vật phẩm này!",
            "game-item-already-equipped": "Đã trang bị vật phẩm!",
            "game-better-item-equipped": "Đã trang bị vật phẩm tốt hơn!",
            "game-play-new-game": "Chơi lượt mới",
            "game-spectate": "Xem người khác chơi",
            "game-full-screen": "Toàn màn hình",
            "game-sound": "Âm thanh",
            "game-quit-game": "Thoát khỏi lượt chơi",
            "game-return-to-game": "Trở lại lượt chơi",
            "game-hide-match-stats": "Ẩn chỉ số trận đấu",
            "game-view-match-stats": "Xem chỉ số trận đấu",
            "game-previous-teammate": "Đồng đội trước đó",
            "game-next-teammate": "Đồng đội kế tiếp",
            "game-spectate-previous": "Người chơi trước",
            "game-spectate-next": "The next player",
            "game-leave-game": "Thoát lượt chơi",
            "game-your-results": "Kết quả của bạn",
            "game-chicken": "Chiến thắng chiến thắng Cơm gà xả láng!",
            "game-won-the-game": "đã thắng lượt chơi.",
            "game-team-eliminated": "Đội của bạn đã bị tiêu diệt.",
            "game-solo-rank": "Xếp hạng Solo",
            "game-duo-rank": "Xếp hạng Duo",
            "game-squad-rank": "Xếp hạng đội hình",
            "game-rank": "Thứ hạng",
            "game-team-rank": "Thứ hạng của đội",
            "game-team-kills": "Số lượt tiêu diệt được của đội",
            "game-kill": "Tiêu diệt",
            "game-kills": "Tiêu diệt",
            "game-damage-dealt": "Sát thương gây ra",
            "game-damage-taken": "Sát thương nhận",
            "game-survived": "Đã sống sót",
            "game-backpack00": "Túi đồ",
            "game-backpack01": "Balo nhỏ",
            "game-backpack02": "Balo vừa",
            "game-backpack03": "Balo quân sự",
            "game-bandage": "Túi cứu thương",
            "game-bandage-tooltip": "Bấm chuột trái để hồi 15 máu.",
            "game-healing-tooltip": "Không thể hồi quá 75 máu.",
            "game-healthkit": "Bộ kit cứu thương",
            "game-healthkit-tooltip": "Bấm chuột trái để hồi 100 máu.",
            "game-soda": "Soda",
            "game-soda-tooltip": "Bấm chuột trái để tăng adrenalin lên 25 điểm.",
            "game-adrenaline-tooltip": "Adrenalin hồi phục máu theo thời gian.",
            "game-painkiller": "Thuốc",
            "game-painkiller-tooltip": "Bấm chuột trái để tăng adrenaline lên 50.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Đạn cho súng M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 và Vector.",
            "game-12gauge": "cỡ 12",
            "game-12gauge-tooltip": "Đạn cho súng M870, M1100, SPAS-12, Saiga-12 và MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Đạn cho súng AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, OT-38 và DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Đạn cho súng FAMAS, M416, M4A1-S, Mk 12 và M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Đạn cho súng DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Đạn cho súng AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Đạn cho súng Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Đạn cho súng M1911, M1A1, Model 94 và Peacemaker.",
            "game-chest01": "Áo giáp cấp 1",
            "game-chest02": "Áo giáp cấp 2",
            "game-chest03": "Áo giáp cấp 3",
            "game-helmet01": "Mũ cối cấp 1",
            "game-helmet02": "Mũ cối cấp 2",
            "game-helmet03": "Mũ cối cấp 3",
            "game-1xscope": "1x Kính ngắm",
            "game-2xscope": "2x Kính ngắm",
            "game-4xscope": "4x Kính ngắm",
            "game-8xscope": "8x Kính ngắm",
            "game-15xscope": "15x Kính ngắm",
            "game-level-1": "Lvl. 1",
            "game-level-2": "Lvl. 2",
            "game-level-3": "Lvl. 3",
            "game-level-4": "Lvl. 4",
            "game-outfitBase": "Basic Outfit",
            "game-outfitRoyalFortune": "Royal Fortune",
            "game-outfitKeyLime": "Key Lime",
            "game-outfitCobaltShell": "Cobalt Shell",
            "game-outfitCarbonFiber": "Carbon Fiber",
            "game-outfitDarkGloves": "The Professional",
            "game-outfitGhillie": "Ghillie Suit",
            "game-outfitCamo": "Forest Camo",
            "game-outfitRed": "Target Practice",
            "game-outfitWhite": "Arctic Avenger",
            "game-outfitWoodland": "Woodland Combat",
            "game-outfitJester": "Jester's Folly",
            "game-outfitPrisoner": "The New Black",
            "game-outfitCasanova": "Casanova Silks",
            "game-outfitKhaki": "The Initiative",
            "game-fists": "Nắm đấm",
            "game-ak47": "AK-47",
            "game-scar": "SCAR-H",
            "game-dp28": "DP-28",
            "game-mosin": "Mosin-Nagant",
            "game-m39": "M39 EMR",
            "game-mp5": "MP5",
            "game-mac10": "MAC-10",
            "game-ump9": "UMP9",
            "game-vector": "Vector",
            "game-m870": "M870",
            "game-mp220": "MP220",
            "game-saiga": "Saiga-12",
            "game-m9": "M9",
            "game-m9_dual": "Dual M9",
            "game-hud-m9_dual": "M9",
            "game-glock": "G18C",
            "game-glock_dual": "Dual G18C",
            "game-hud-glock_dual": "G18C",
            "game-ot38": "OT-38",
            "game-ot38_dual": "Dual OT-38",
            "game-hud-ot38_dual": "OT-38",
            "game-deagle": "DEagle 50",
            "game-deagle_dual": "Dual DEagle 50",
            "game-hud-deagle_dual": "DEagle 50",
            "game-famas": "FAMAS",
            "game-hk416": "M416",
            "game-mk12": "Mk 12 SPR",
            "game-m249": "M249",
            "game-frag": "Lựu đạn",
            "game-hud-frag": "Lựu đạn",
            "game-smoke": "Lựu đạn khói",
            "game-hud-smoke": "Lựu đạn cháy",
            "game-potato": "Khoai tây",
            "game-hud-potato": "Khoai tây",
            "game-potato_heavy": "Khoai tây",
            "game-barrel_01": "một khẩu súng",
            "game-silo_01": "một chiếc xi lô",
            "game-oven_01": "một chiếc lò nướng",
            "game-control_panel_01": "Bảng điều khiển",
            "game-control_panel_02": "Bảng điều khiển",
            "game-control_panel_03": "một khối đầu cuối máy tính",
            "game-power_box_01": "một chiếc tủ điện",
            "index-play-50v50": "Chơi nhóm 50 người",
            "index-50v50": "50v50",
            "game-red-team": "Red Team",
            "game-blue-team": "Blue Team",
            "game-red-leader": "Red Leader",
            "game-blue-leader": "Blue Leader",
            "game-is-down": "is down",
            "game-is-dead": "is dead",
            "game-promoted-to": "promoted to",
            "game-youve-been-promoted-to": "You've been promoted to"
        };
        e.exports = i
    },
    "6bad552e": function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            return {
                time: e,
                bones: t
            }
        }

        function n(e, t, a) {
            return {
                time: e,
                fn: t,
                args: a
            }
        }
        var s, l, c, m, p, d, h, u, g, y, w, x, f, b, _, S, v, k, z, M, T, I, P, C, A, E, D, O, B, R, L, F, j, q, N, V, G, U, H, W, K, Z, X, Y, J, Q, $, ee, te, ae = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var i = t[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, a, i) {
                    return a && e(t.prototype, a), i && e(t, i), t
                }
            }(),
            ie = a("989ad62a"),
            re = a("e3e76f15"),
            oe = (ie.Anim, a("0e566746")),
            ne = a("10899aea"),
            se = a("c2a798c8"),
            le = function() {
                function e(t, a, i) {
                    r(this, e), this.pivot = se.copy(t || se.create(0, 0)), this.rot = 0, this.pos = se.copy(i || se.create(0, 0))
                }
                return ae(e, [{
                    key: "copy",
                    value: function(e) {
                        se.set(this.pivot, e.pivot), this.rot = e.rot, se.set(this.pos, e.pos)
                    }
                }, {
                    key: "rotate",
                    value: function(e) {
                        return this.rot = e, this
                    }
                }, {
                    key: "offset",
                    value: function(e) {
                        return this.pos = se.copy(e), this
                    }
                }]), e
            }();
        le.identity = new le(se.create(0, 0)), le.lerp = function(e, t, a) {
            var i = new le;
            return i.pos = se.lerp(e, t.pos, a.pos), i.rot = ne.lerp(e, t.rot, a.rot), i.pivot = se.lerp(e, t.pivot, a.pivot), i
        };
        var ce = {
            HandL: 0,
            HandR: 1,
            FootL: 2,
            FootR: 3
        };
        oe(Object.keys(ce).length % 2 == 0);
        var me = {
                fists: (s = {}, i(s, ce.HandL, new le(se.create(14, -12.25))), i(s, ce.HandR, new le(se.create(14, 12.25))), s),
                slash: (l = {}, i(l, ce.HandL, new le(se.create(18, -8.25))), i(l, ce.HandR, new le(se.create(6, 20.25))), l),
                meleeTwoHanded: (c = {}, i(c, ce.HandL, new le(se.create(10.5, -14.25))), i(c, ce.HandR, new le(se.create(18, 6.25))), c),
                meleeKatana: (m = {}, i(m, ce.HandL, new le(se.create(8.5, 13.25))), i(m, ce.HandR, new le(se.create(-3, 17.75))), m),
                meleeNaginata: (p = {}, i(p, ce.HandL, new le(se.create(19, -7.25))), i(p, ce.HandR, new le(se.create(8.5, 24.25))), p),
                machete: (d = {}, i(d, ce.HandL, new le(se.create(14, -12.25))), i(d, ce.HandR, new le(se.create(1, 17.75))), d),
                rifle: (h = {}, i(h, ce.HandL, new le(se.create(28, 5.25))), i(h, ce.HandR, new le(se.create(14, 1.75))), h),
                pistol: (u = {}, i(u, ce.HandL, new le(se.create(14, 1.75))), i(u, ce.HandR, new le(se.create(14, 1.75))), u),
                dualPistol: (g = {}, i(g, ce.HandL, new le(se.create(15.75, -8.75))), i(g, ce.HandR, new le(se.create(15.75, 8.75))), g),
                throwable: (y = {}, i(y, ce.HandL, new le(se.create(15.75, -9.625))), i(y, ce.HandR, new le(se.create(15.75, 9.625))), y),
                downed: (w = {}, i(w, ce.HandL, new le(se.create(14, -12.25))), i(w, ce.HandR, new le(se.create(14, 12.25))), i(w, ce.FootL, new le(se.create(-15.75, -9))), i(w, ce.FootR, new le(se.create(-15.75, 9))), w)
            },
            pe = re.fists.attack,
            de = re.hook.attack,
            he = re.woodaxe.attack,
            ue = re.stonehammer.attack,
            ge = re.katana.attack,
            ye = re.naginata.attack,
            we = re.pan.attack,
            xe = re.saw.attack,
            fe = {
                none: {
                    keyframes: [],
                    effects: []
                },
                fists: {
                    keyframes: [o(0, i({}, ce.HandR, new le(se.create(14, 12.25)))), o(pe.damageTimes[0], i({}, ce.HandR, new le(se.create(29.75, 1.75)))), o(pe.cooldownTime, i({}, ce.HandR, new le(se.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(pe.damageTimes[0], "animMeleeCollision", {})]
                },
                cut: {
                    keyframes: [o(0, i({}, ce.HandR, new le(se.create(14, 12.25)))), o(.25 * pe.damageTimes[0], i({}, ce.HandR, new le(se.create(14, 12.25)).rotate(.35 * -Math.PI))), o(1.25 * pe.damageTimes[0], i({}, ce.HandR, new le(se.create(14, 12.25)).rotate(.35 * Math.PI))), o(pe.cooldownTime, i({}, ce.HandR, new le(se.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(pe.damageTimes[0], "animMeleeCollision", {})]
                },
                cutReverse: {
                    keyframes: [o(0, i({}, ce.HandR, new le(se.create(1, 17.75)))), o(.4 * pe.damageTimes[0], i({}, ce.HandR, new le(se.create(25, 6.25)).rotate(.3 * Math.PI))), o(1.4 * pe.damageTimes[0], i({}, ce.HandR, new le(se.create(25, 6.25)).rotate(.5 * -Math.PI))), o(pe.cooldownTime, i({}, ce.HandR, new le(se.create(1, 17.75))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(pe.damageTimes[0], "animMeleeCollision", {})]
                },
                thrust: {
                    keyframes: [o(0, i({}, ce.HandR, new le(se.create(14, 12.25)))), o(.4 * pe.damageTimes[0], i({}, ce.HandR, new le(se.create(5, 12.25)).rotate(.1 * Math.PI))), o(1.4 * pe.damageTimes[0], i({}, ce.HandR, new le(se.create(25, 6.25)).rotate(0 * -Math.PI))), o(pe.cooldownTime, i({}, ce.HandR, new le(se.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(pe.damageTimes[0], "animMeleeCollision", {})]
                },
                slash: {
                    keyframes: [o(0, (x = {}, i(x, ce.HandL, new le(se.create(18, -8.25))), i(x, ce.HandR, new le(se.create(6, 20.25))), x)), o(pe.damageTimes[0], (f = {}, i(f, ce.HandL, new le(se.create(6, -22.25))), i(f, ce.HandR, new le(se.create(6, 20.25)).rotate(.6 * -Math.PI)), f)), o(pe.cooldownTime, (b = {}, i(b, ce.HandL, new le(se.create(18, -8.25))), i(b, ce.HandR, new le(se.create(6, 20.25)).rotate(0)), b))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(pe.damageTimes[0], "animMeleeCollision", {})]
                },
                hook: {
                    keyframes: [o(0, i({}, ce.HandR, new le(se.create(14, 12.25)))), o(.25 * de.damageTimes[0], i({}, ce.HandR, new le(se.create(14, 12.25)).rotate(.1 * Math.PI))), o(de.damageTimes[0], i({}, ce.HandR, new le(se.create(24, 1.75)))), o(de.damageTimes[0] + .05, i({}, ce.HandR, new le(se.create(14, 12.25)).rotate(-.3 * Math.PI))), o(de.damageTimes[0] + .1, i({}, ce.HandR, new le(se.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(de.damageTimes[0], "animMeleeCollision", {})]
                },
                pan: {
                    keyframes: [o(0, i({}, ce.HandR, new le(se.create(14, 12.25)))), o(.15, i({}, ce.HandR, new le(se.create(22, -8.25)).rotate(.2 * -Math.PI))), o(.25, i({}, ce.HandR, new le(se.create(28, -8.25)).rotate(.5 * Math.PI))), o(.55, i({}, ce.HandR, new le(se.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(we.damageTimes[0], "animMeleeCollision", {})]
                },
                axeSwing: {
                    keyframes: [o(0, (_ = {}, i(_, ce.HandL, new le(se.create(10.5, -14.25))), i(_, ce.HandR, new le(se.create(18, 6.25))), _)), o(.4 * he.damageTimes[0], (S = {}, i(S, ce.HandL, new le(se.create(9, -14.25)).rotate(.4 * Math.PI)), i(S, ce.HandR, new le(se.create(18, 6.25)).rotate(.4 * Math.PI)), S)), o(he.damageTimes[0], (v = {}, i(v, ce.HandL, new le(se.create(9, -14.25)).rotate(.4 * -Math.PI)), i(v, ce.HandR, new le(se.create(18, 6.25)).rotate(.4 * -Math.PI)), v)), o(he.cooldownTime, (k = {}, i(k, ce.HandL, new le(se.create(10.5, -14.25))), i(k, ce.HandR, new le(se.create(18, 6.25))), k))],
                    effects: [n(he.damageTimes[0], "animPlaySound", {
                        sound: "swing"
                    }), n(he.damageTimes[0], "animMeleeCollision", {})]
                },
                hammerSwing: {
                    keyframes: [o(0, (z = {}, i(z, ce.HandL, new le(se.create(10.5, -14.25))), i(z, ce.HandR, new le(se.create(18, 6.25))), z)), o(.4 * ue.damageTimes[0], (M = {}, i(M, ce.HandL, new le(se.create(9, -14.25)).rotate(.4 * Math.PI)), i(M, ce.HandR, new le(se.create(18, 6.25)).rotate(.4 * Math.PI)), M)), o(ue.damageTimes[0], (T = {}, i(T, ce.HandL, new le(se.create(9, -14.25)).rotate(.4 * -Math.PI)), i(T, ce.HandR, new le(se.create(18, 6.25)).rotate(.4 * -Math.PI)), T)), o(ue.cooldownTime, (I = {}, i(I, ce.HandL, new le(se.create(10.5, -14.25))), i(I, ce.HandR, new le(se.create(18, 6.25))), I))],
                    effects: [n(ue.damageTimes[0], "animPlaySound", {
                        sound: "swing"
                    }), n(ue.damageTimes[0], "animMeleeCollision", {})]
                },
                katanaSwing: {
                    keyframes: [o(0, (P = {}, i(P, ce.HandL, new le(se.create(8.5, 13.25))), i(P, ce.HandR, new le(se.create(-3, 17.75))), P)), o(.3 * ge.damageTimes[0], (C = {}, i(C, ce.HandL, new le(se.create(8.5, 13.25)).rotate(.2 * Math.PI)), i(C, ce.HandR, new le(se.create(-3, 17.75)).rotate(.2 * Math.PI)), C)), o(.9 * ge.damageTimes[0], (A = {}, i(A, ce.HandL, new le(se.create(8.5, 13.25)).rotate(1.2 * -Math.PI)), i(A, ce.HandR, new le(se.create(-3, 17.75)).rotate(1.2 * -Math.PI)), A)), o(ge.cooldownTime, (E = {}, i(E, ce.HandL, new le(se.create(8.5, 13.25))), i(E, ce.HandR, new le(se.create(-3, 17.75))), E))],
                    effects: [n(ge.damageTimes[0], "animPlaySound", {
                        sound: "swing"
                    }), n(ge.damageTimes[0], "animMeleeCollision", {})]
                },
                naginataSwing: {
                    keyframes: [o(0, (D = {}, i(D, ce.HandL, new le(se.create(19, -7.25))), i(D, ce.HandR, new le(se.create(8.5, 24.25))), D)), o(.3 * ye.damageTimes[0], (O = {}, i(O, ce.HandL, new le(se.create(19, -7.25)).rotate(.3 * Math.PI)), i(O, ce.HandR, new le(se.create(8.5, 24.25)).rotate(.3 * Math.PI)), O)), o(.9 * ye.damageTimes[0], (B = {}, i(B, ce.HandL, new le(se.create(19, -7.25)).rotate(.85 * -Math.PI)), i(B, ce.HandR, new le(se.create(8.5, 24.25)).rotate(.85 * -Math.PI)), B)), o(ye.cooldownTime, (R = {}, i(R, ce.HandL, new le(se.create(19, -7.25))), i(R, ce.HandR, new le(se.create(8.5, 24.25))), R))],
                    effects: [n(he.damageTimes[0], "animPlaySound", {
                        sound: "swing"
                    }), n(he.damageTimes[0], "animMeleeCollision", {})]
                },
                sawSwing: {
                    keyframes: [o(0, i({}, ce.HandR, new le(se.create(1, 17.75)))), o(.4 * xe.damageTimes[0], i({}, ce.HandR, new le(se.create(25, 6.25)).rotate(.3 * Math.PI))), o(xe.damageTimes[0], i({}, ce.HandR, new le(se.create(25, 6.25)).rotate(.3 * -Math.PI))), o(xe.damageTimes[1] - .1, i({}, ce.HandR, new le(se.create(25, 17.75)).rotate(.25 * -Math.PI))), o(.6 * xe.damageTimes[1], i({}, ce.HandR, new le(se.create(-36, 7.75)).rotate(.25 * -Math.PI))), o(xe.damageTimes[1] + .2, i({}, ce.HandR, new le(se.create(1, 17.75))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(.4, "animPlaySound", {
                        sound: "swing"
                    }), n(xe.damageTimes[0], "animMeleeCollision", {}), n(xe.damageTimes[1], "animMeleeCollision", {
                        playerHit: "playerHit2"
                    })]
                },
                cook: {
                    keyframes: [o(0, (L = {}, i(L, ce.HandL, new le(se.create(15.75, -9.625))), i(L, ce.HandR, new le(se.create(15.75, 9.625))), L)), o(.1, (F = {}, i(F, ce.HandL, new le(se.create(14, -1.75))), i(F, ce.HandR, new le(se.create(14, 1.75))), F)), o(.3, (j = {}, i(j, ce.HandL, new le(se.create(14, -1.75))), i(j, ce.HandR, new le(se.create(14, 1.75))), j)), o(.4, (q = {}, i(q, ce.HandL, new le(se.create(22.75, -1.75))), i(q, ce.HandR, new le(se.create(1.75, 14))), q)), o(99999, (N = {}, i(N, ce.HandL, new le(se.create(22.75, -1.75))), i(N, ce.HandR, new le(se.create(1.75, 14))), N))],
                    effects: [n(0, "animPlaySound", {
                        sound: "pullPin"
                    }), n(.1, "animSetThrowableState", {
                        state: "cook"
                    })]
                },
                throw: {
                    keyframes: [o(0, (V = {}, i(V, ce.HandL, new le(se.create(22.75, -1.75))), i(V, ce.HandR, new le(se.create(1.75, 14.175))), V)), o(.15, (G = {}, i(G, ce.HandL, new le(se.create(5.25, -15.75))), i(G, ce.HandR, new le(se.create(29.75, 1.75))), G)), o(.15 + ie.player.throwTime, (U = {}, i(U, ce.HandL, new le(se.create(15.75, -9.625))), i(U, ce.HandR, new le(se.create(15.75, 9.625))), U))],
                    effects: [n(0, "animPlaySound", {
                        sound: "throwing"
                    }), n(0, "animSetThrowableState", {
                        state: "throwing"
                    }), n(0, "animThrowableParticles", {})]
                },
                crawl_forward: {
                    keyframes: [o(0, (H = {}, i(H, ce.HandL, new le(se.create(14, -12.25))), i(H, ce.FootL, new le(se.create(-15.75, -9))), H)), o(.33 * ie.player.crawlTime, (W = {}, i(W, ce.HandL, new le(se.create(19.25, -10.5))), i(W, ce.FootL, new le(se.create(-20.25, -9))), W)), o(.66 * ie.player.crawlTime, (K = {}, i(K, ce.HandL, new le(se.create(5.25, -15.75))), i(K, ce.FootL, new le(se.create(-11.25, -9))), K)), o(1 * ie.player.crawlTime, (Z = {}, i(Z, ce.HandL, new le(se.create(14, -12.25))), i(Z, ce.FootL, new le(se.create(-15.75, -9))), Z))],
                    effects: []
                },
                crawl_backward: {
                    keyframes: [o(0, (X = {}, i(X, ce.HandL, new le(se.create(14, -12.25))), i(X, ce.FootL, new le(se.create(-15.75, -9))), X)), o(.33 * ie.player.crawlTime, (Y = {}, i(Y, ce.HandL, new le(se.create(5.25, -15.75))), i(Y, ce.FootL, new le(se.create(-11.25, -9))), Y)), o(.66 * ie.player.crawlTime, (J = {}, i(J, ce.HandL, new le(se.create(19.25, -10.5))), i(J, ce.FootL, new le(se.create(-20.25, -9))), J)), o(1 * ie.player.crawlTime, (Q = {}, i(Q, ce.HandL, new le(se.create(14, -12.25))), i(Q, ce.FootL, new le(se.create(-15.75, -9))), Q))],
                    effects: []
                },
                revive: {
                    keyframes: [o(0, ($ = {}, i($, ce.HandL, new le(se.create(14, -12.25))), i($, ce.HandR, new le(se.create(14, 12.25))), $)), o(.2, (ee = {}, i(ee, ce.HandL, new le(se.create(24.5, -8.75))), i(ee, ce.HandR, new le(se.create(5.25, 21))), ee)), o(.2 + ie.player.reviveDuration, (te = {}, i(te, ce.HandL, new le(se.create(24.5, -8.75))), i(te, ce.HandR, new le(se.create(5.25, 21))), te))],
                    effects: []
                }
            };
        e.exports = {
            Pose: le,
            Bones: ce,
            IdlePoses: me,
            Animations: fe
        }
    },
    "6d494b5c": function(e, t, a) {
        "use strict";

        function i(e, t, a, i, r, n) {
            var l = e;
            return !l.active || l.dead || !l.collidable || l.isWindow || l.height < i || !s.sameLayer(l.layer, r) ? null : n && 2 & r && 0 == l.layer ? null : o.intersectSegment(l.collider, t, a)
        }

        function r(e, t, a, i, r) {
            var o = p.intersectSegmentDist(e, t, a, i, 0, r, !1);
            return l.add(t, l.mul(a, o))
        }
        var o = a("6b42806d"),
            n = a("10899aea"),
            s = a("1901e2d9"),
            l = a("c2a798c8"),
            c = a("ce29f17f"),
            m = a("af8ba00f"),
            p = {
                intersectSegment: function(e, t, a, r, o, n, s) {
                    for (var c = l.add(t, l.mul(a, r)), m = [], p = 0; p < e.length; p++) {
                        var d = e[p],
                            h = i(d, t, c, o, n, s);
                        if (h) {
                            var u = l.length(l.sub(h.point, t));
                            m.push({
                                id: d.__id,
                                dist: u
                            })
                        }
                    }
                    return m.sort(function(e, t) {
                        return e.dist - t.dist
                    }), m.length > 0 ? m[0] : null
                },
                intersectSegmentDist: function(e, t, a, r, o, s, c) {
                    for (var m = r, p = l.add(t, l.mul(a, r)), d = 0; d < e.length; d++) {
                        var h = e[d],
                            u = i(h, t, p, o, s, c);
                        u && (m = n.min(m, l.length(l.sub(u.point, t))))
                    }
                    return m
                },
                scanCollider: function(e, t, a, i, s, d, h, u) {
                    var g = o.intersectCircle(e, a, h);
                    if (!g) return null;
                    if (g.pen >= h) return {
                        dist: 0
                    };
                    var y = l.perp(g.dir),
                        w = r(t, a, l.neg(y), .5 * d, i),
                        x = r(t, a, y, .5 * d, i),
                        f = l.sub(x, w),
                        b = l.length(f);
                    f = b > 1e-4 ? l.div(f, b) : l.create(1, 0);
                    for (var _ = [], S = 0; S < u; S++) {
                        var v = S / n.max(u - 1, 1);
                        _.push(l.add(w, l.mul(f, b * v)))
                    }
                    for (var k = s, z = 0; z < _.length; z++) {
                        var M = _[z],
                            T = o.intersectCircle(e, M, h);
                        if (T) {
                            var I = l.neg(T.dir),
                                P = p.intersectSegmentDist(t, M, I, h, k, i, !0),
                                C = o.intersectSegment(e, M, l.add(M, l.mul(I, h))),
                                A = C ? l.length(l.sub(C.point, M)) : 0,
                                E = C && A <= P;
                            if (c.debug) {
                                var D = E ? 65280 : 16711680;
                                m.addRay(M, I, h, D)
                            }
                            if (E) return {
                                dist: A
                            }
                        }
                    }
                    return null
                }
            };
        e.exports = p
    },
    "6d61bfc0": function(e, t, a) {
        "use strict";

        function i(e) {
            for (var t = 0, a = 0; a < e.length; a++) {
                var i = e[a];
                t = 65535 & (r[255 & (t ^ i)] ^ t >> 8)
            }
            return t
        }
        var r = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
        e.exports = {
            crc16: i
        }
    },
    "6e13f3b7": function(e, t) {
        e.exports = {
            loadout: [{
                meta: {
                    image: "loadout-0-100-ab5ddec5.png",
                    size: {
                        w: 4096,
                        h: 4096
                    },
                    scale: 1
                },
                frames: {
                    "part-aura-circle-01.img": {
                        frame: {
                            x: 508,
                            y: 2,
                            w: 284,
                            h: 282
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 3,
                            w: 284,
                            h: 282
                        },
                        sourceSize: {
                            w: 288,
                            h: 288
                        }
                    },
                    "ping-map-pulse.img": {
                        frame: {
                            x: 2,
                            y: 2,
                            w: 502,
                            h: 502
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 5,
                            w: 502,
                            h: 502
                        },
                        sourceSize: {
                            w: 512,
                            h: 512
                        }
                    },
                    "part-shell-05.img": {
                        frame: {
                            x: 2,
                            y: 508,
                            w: 63,
                            h: 260
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 63,
                            h: 260
                        },
                        sourceSize: {
                            w: 63,
                            h: 260
                        }
                    },
                    "emote-circle-outer.img": {
                        frame: {
                            x: 69,
                            y: 508,
                            w: 252,
                            h: 254
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 1,
                            w: 252,
                            h: 254
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "part-smoke-03.img": {
                        frame: {
                            x: 325,
                            y: 508,
                            w: 255,
                            h: 251
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 1,
                            w: 255,
                            h: 251
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "part-smoke-02.img": {
                        frame: {
                            x: 796,
                            y: 2,
                            w: 256,
                            h: 250
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 256,
                            h: 250
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "gun-awc-02.img": {
                        frame: {
                            x: 796,
                            y: 256,
                            w: 47,
                            h: 228
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 9,
                            w: 47,
                            h: 228
                        },
                        sourceSize: {
                            w: 60,
                            h: 236
                        }
                    },
                    "gun-awc-01.img": {
                        frame: {
                            x: 847,
                            y: 256,
                            w: 47,
                            h: 228
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 9,
                            w: 47,
                            h: 228
                        },
                        sourceSize: {
                            w: 60,
                            h: 236
                        }
                    },
                    "gun-m249-top-01.img": {
                        frame: {
                            x: 898,
                            y: 256,
                            w: 38,
                            h: 216
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 17,
                            w: 38,
                            h: 216
                        },
                        sourceSize: {
                            w: 56,
                            h: 232
                        }
                    },
                    "gun-garand-01.img": {
                        frame: {
                            x: 940,
                            y: 256,
                            w: 34,
                            h: 214
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 19,
                            w: 34,
                            h: 214
                        },
                        sourceSize: {
                            w: 48,
                            h: 232
                        }
                    },
                    "gun-usas-01.img": {
                        frame: {
                            x: 978,
                            y: 256,
                            w: 43,
                            h: 210
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 23,
                            w: 43,
                            h: 210
                        },
                        sourceSize: {
                            w: 56,
                            h: 232
                        }
                    },
                    "pad.img": {
                        frame: {
                            x: 796,
                            y: 488,
                            w: 208,
                            h: 208
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 208,
                            h: 208
                        },
                        sourceSize: {
                            w: 208,
                            h: 208
                        }
                    },
                    "gun-scorpion-01.img": {
                        frame: {
                            x: 1008,
                            y: 488,
                            w: 41,
                            h: 200
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 9,
                            w: 41,
                            h: 200
                        },
                        sourceSize: {
                            w: 48,
                            h: 208
                        }
                    },
                    "gun-pkp-top-01.img": {
                        frame: {
                            x: 508,
                            y: 288,
                            w: 36,
                            h: 194
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 13,
                            y: 39,
                            w: 36,
                            h: 194
                        },
                        sourceSize: {
                            w: 56,
                            h: 232
                        }
                    },
                    "part-shell-02.img": {
                        frame: {
                            x: 548,
                            y: 288,
                            w: 63,
                            h: 190
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 63,
                            h: 190
                        },
                        sourceSize: {
                            w: 63,
                            h: 190
                        }
                    },
                    "gun-m4a1-01.img": {
                        frame: {
                            x: 615,
                            y: 288,
                            w: 44,
                            h: 189
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 8,
                            w: 44,
                            h: 189
                        },
                        sourceSize: {
                            w: 48,
                            h: 196
                        }
                    },
                    "gun-long-01.img": {
                        frame: {
                            x: 663,
                            y: 288,
                            w: 31,
                            h: 186
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 31,
                            h: 186
                        },
                        sourceSize: {
                            w: 32,
                            h: 188
                        }
                    },
                    "part-shell-03.img": {
                        frame: {
                            x: 698,
                            y: 288,
                            w: 63,
                            h: 180
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 63,
                            h: 180
                        },
                        sourceSize: {
                            w: 63,
                            h: 180
                        }
                    },
                    "player-helmet-forest.img": {
                        frame: {
                            x: 584,
                            y: 508,
                            w: 150,
                            h: 178
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 150,
                            h: 178
                        },
                        sourceSize: {
                            w: 176,
                            h: 176
                        }
                    },
                    "gun-saiga-01.img": {
                        frame: {
                            x: 738,
                            y: 508,
                            w: 40,
                            h: 174
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 6,
                            w: 40,
                            h: 174
                        },
                        sourceSize: {
                            w: 48,
                            h: 196
                        }
                    },
                    "player-wading-01.img": {
                        frame: {
                            x: 2,
                            y: 772,
                            w: 170,
                            h: 170
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 170,
                            h: 170
                        },
                        sourceSize: {
                            w: 172,
                            h: 172
                        }
                    },
                    "part-shell-04.img": {
                        frame: {
                            x: 176,
                            y: 772,
                            w: 55,
                            h: 164
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 55,
                            h: 164
                        },
                        sourceSize: {
                            w: 55,
                            h: 164
                        }
                    },
                    "loot-melee-machete-taiga.img": {
                        frame: {
                            x: 235,
                            y: 772,
                            w: 44,
                            h: 164
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 72,
                            y: 15,
                            w: 44,
                            h: 164
                        },
                        sourceSize: {
                            w: 192,
                            h: 192
                        }
                    },
                    "part-airdrop-03.img": {
                        frame: {
                            x: 283,
                            y: 772,
                            w: 160,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 160,
                            h: 160
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "part-airdrop-02x.img": {
                        frame: {
                            x: 447,
                            y: 772,
                            w: 38,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 38,
                            h: 160
                        },
                        sourceSize: {
                            w: 38,
                            h: 160
                        }
                    },
                    "part-airdrop-02.img": {
                        frame: {
                            x: 489,
                            y: 772,
                            w: 38,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 38,
                            h: 160
                        },
                        sourceSize: {
                            w: 38,
                            h: 160
                        }
                    },
                    "proj-bomb-iron-01.img": {
                        frame: {
                            x: 531,
                            y: 772,
                            w: 66,
                            h: 157
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 47,
                            y: 2,
                            w: 66,
                            h: 157
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "proj-smoke-pin.img": {
                        frame: {
                            x: 601,
                            y: 772,
                            w: 152,
                            h: 155
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 3,
                            w: 152,
                            h: 155
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "proj-smoke-nopin.img": {
                        frame: {
                            x: 757,
                            y: 772,
                            w: 152,
                            h: 155
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 3,
                            w: 152,
                            h: 155
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "loot-melee-bonesaw-rusted.img": {
                        frame: {
                            x: 913,
                            y: 772,
                            w: 54,
                            h: 155
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 81,
                            y: 22,
                            w: 54,
                            h: 155
                        },
                        sourceSize: {
                            w: 192,
                            h: 192
                        }
                    },
                    "loot-melee-kukri-trad.img": {
                        frame: {
                            x: 971,
                            y: 772,
                            w: 40,
                            h: 155
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 70,
                            y: 19,
                            w: 40,
                            h: 155
                        },
                        sourceSize: {
                            w: 192,
                            h: 192
                        }
                    },
                    "player-circle-base-01.img": {
                        frame: {
                            x: 1056,
                            y: 2,
                            w: 146,
                            h: 146
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 146,
                            h: 146
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "player-circle-base-02.img": {
                        frame: {
                            x: 1056,
                            y: 152,
                            w: 146,
                            h: 146
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 146,
                            h: 146
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "player-armor-base-01.img": {
                        frame: {
                            x: 1056,
                            y: 302,
                            w: 146,
                            h: 146
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 146,
                            h: 146
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "player-helmet-moon.img": {
                        frame: {
                            x: 1056,
                            y: 452,
                            w: 120,
                            h: 146
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 15,
                            w: 120,
                            h: 146
                        },
                        sourceSize: {
                            w: 176,
                            h: 176
                        }
                    },
                    "proj-smoke-nopin-nolever.img": {
                        frame: {
                            x: 1056,
                            y: 602,
                            w: 76,
                            h: 146
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 42,
                            y: 7,
                            w: 76,
                            h: 146
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "loot-circle-outer-01.img": {
                        frame: {
                            x: 1056,
                            y: 752,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 146,
                            h: 146
                        }
                    },
                    "ping-border.img": {
                        frame: {
                            x: 2,
                            y: 946,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "loot-circle-outer-02.img": {
                        frame: {
                            x: 150,
                            y: 946,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 146,
                            h: 146
                        }
                    },
                    "proj-mirv-nopin.img": {
                        frame: {
                            x: 298,
                            y: 946,
                            w: 102,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 26,
                            y: 2,
                            w: 102,
                            h: 144
                        },
                        sourceSize: {
                            w: 128,
                            h: 148
                        }
                    },
                    "proj-mirv-pin.img": {
                        frame: {
                            x: 404,
                            y: 946,
                            w: 102,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 102,
                            h: 144
                        },
                        sourceSize: {
                            w: 128,
                            h: 148
                        }
                    },
                    "proj-mirv-nopin-nolever.img": {
                        frame: {
                            x: 510,
                            y: 946,
                            w: 76,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 26,
                            y: 2,
                            w: 76,
                            h: 144
                        },
                        sourceSize: {
                            w: 128,
                            h: 148
                        }
                    },
                    "star.img": {
                        frame: {
                            x: 590,
                            y: 946,
                            w: 148,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 148,
                            h: 142
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "player-star.img": {
                        frame: {
                            x: 742,
                            y: 946,
                            w: 148,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 148,
                            h: 142
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "part-panel-01.img": {
                        frame: {
                            x: 894,
                            y: 946,
                            w: 142,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 142,
                            h: 142
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "part-plank-01.img": {
                        frame: {
                            x: 1040,
                            y: 946,
                            w: 142,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 142,
                            h: 142
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "player-ripple-01.img": {
                        frame: {
                            x: 1206,
                            y: 2,
                            w: 142,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 142,
                            h: 142
                        },
                        sourceSize: {
                            w: 142,
                            h: 142
                        }
                    },
                    "part-woodchip-01.img": {
                        frame: {
                            x: 1206,
                            y: 148,
                            w: 141,
                            h: 140
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 1,
                            w: 141,
                            h: 140
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "loot-circle-inner-01.img": {
                        frame: {
                            x: 1206,
                            y: 292,
                            w: 140,
                            h: 140
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 4,
                            w: 140,
                            h: 140
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "part-book-01.img": {
                        frame: {
                            x: 1206,
                            y: 436,
                            w: 104,
                            h: 138
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 20,
                            y: 3,
                            w: 104,
                            h: 138
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "player-base-03.img": {
                        frame: {
                            x: 1206,
                            y: 578,
                            w: 136,
                            h: 136
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 136,
                            h: 136
                        },
                        sourceSize: {
                            w: 140,
                            h: 140
                        }
                    },
                    "player-base-04.img": {
                        frame: {
                            x: 1206,
                            y: 718,
                            w: 136,
                            h: 136
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 136,
                            h: 136
                        },
                        sourceSize: {
                            w: 140,
                            h: 140
                        }
                    },
                    "player-base-01.img": {
                        frame: {
                            x: 1206,
                            y: 858,
                            w: 136,
                            h: 136
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 136,
                            h: 136
                        },
                        sourceSize: {
                            w: 140,
                            h: 140
                        }
                    },
                    "player-base-02.img": {
                        frame: {
                            x: 2,
                            y: 1094,
                            w: 136,
                            h: 136
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 136,
                            h: 136
                        },
                        sourceSize: {
                            w: 140,
                            h: 140
                        }
                    },
                    "player-base-05.img": {
                        frame: {
                            x: 142,
                            y: 1094,
                            w: 136,
                            h: 136
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 136,
                            h: 136
                        },
                        sourceSize: {
                            w: 140,
                            h: 140
                        }
                    },
                    "part-pot-01.img": {
                        frame: {
                            x: 282,
                            y: 1094,
                            w: 94,
                            h: 136
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 25,
                            y: 4,
                            w: 94,
                            h: 136
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "part-shell-01.img": {
                        frame: {
                            x: 1136,
                            y: 602,
                            w: 56,
                            h: 133
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 56,
                            h: 133
                        },
                        sourceSize: {
                            w: 56,
                            h: 133
                        }
                    },
                    "player-king-woods.img": {
                        frame: {
                            x: 380,
                            y: 1094,
                            w: 140,
                            h: 132
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 8,
                            w: 140,
                            h: 132
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "part-plate-01.img": {
                        frame: {
                            x: 524,
                            y: 1094,
                            w: 138,
                            h: 132
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 6,
                            w: 138,
                            h: 132
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "part-splat-02.img": {
                        frame: {
                            x: 666,
                            y: 1094,
                            w: 123,
                            h: 130
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 15,
                            y: 8,
                            w: 123,
                            h: 130
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "gun-mp220-01.img": {
                        frame: {
                            x: 793,
                            y: 1094,
                            w: 40,
                            h: 130
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: -1,
                            w: 40,
                            h: 130
                        },
                        sourceSize: {
                            w: 40,
                            h: 128
                        }
                    },
                    "indonesia.img": {
                        frame: {
                            x: 837,
                            y: 1094,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "israel.img": {
                        frame: {
                            x: 969,
                            y: 1094,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "italy.img": {
                        frame: {
                            x: 1101,
                            y: 1094,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "japan.img": {
                        frame: {
                            x: 1352,
                            y: 2,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-scope-04.img": {
                        frame: {
                            x: 1352,
                            y: 134,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "kazakhstan.img": {
                        frame: {
                            x: 1352,
                            y: 266,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ukraine.img": {
                        frame: {
                            x: 1352,
                            y: 398,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "greece.img": {
                        frame: {
                            x: 1352,
                            y: 530,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "guatemala.img": {
                        frame: {
                            x: 1352,
                            y: 662,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-scope-02.img": {
                        frame: {
                            x: 1352,
                            y: 794,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "argentina.img": {
                        frame: {
                            x: 1352,
                            y: 926,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "denmark.img": {
                        frame: {
                            x: 1352,
                            y: 1058,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "georgia.img": {
                        frame: {
                            x: 2,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "czech-republic.img": {
                        frame: {
                            x: 134,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-scope-01.img": {
                        frame: {
                            x: 266,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "australia.img": {
                        frame: {
                            x: 398,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "croatia.img": {
                        frame: {
                            x: 530,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "colombia.img": {
                        frame: {
                            x: 662,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "malaysia.img": {
                        frame: {
                            x: 794,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "mexico.img": {
                        frame: {
                            x: 926,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-deagle-dual.img": {
                        frame: {
                            x: 1058,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "netherlands.img": {
                        frame: {
                            x: 1190,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "new-zealand.img": {
                        frame: {
                            x: 1322,
                            y: 1234,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "norway.img": {
                        frame: {
                            x: 1484,
                            y: 2,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "peru.img": {
                        frame: {
                            x: 1484,
                            y: 134,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "philippines.img": {
                        frame: {
                            x: 1484,
                            y: 266,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "china.img": {
                        frame: {
                            x: 1484,
                            y: 398,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "chile.img": {
                        frame: {
                            x: 1484,
                            y: 530,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-scope-00.img": {
                        frame: {
                            x: 1484,
                            y: 662,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "austria.img": {
                        frame: {
                            x: 1484,
                            y: 794,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "portugal.img": {
                        frame: {
                            x: 1484,
                            y: 926,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-ammo-box.img": {
                        frame: {
                            x: 1484,
                            y: 1058,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "finland.img": {
                        frame: {
                            x: 1484,
                            y: 1190,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "belarus.img": {
                        frame: {
                            x: 2,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "republic-of-poland.img": {
                        frame: {
                            x: 134,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "romania.img": {
                        frame: {
                            x: 266,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "france.img": {
                        frame: {
                            x: 398,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "germany.img": {
                        frame: {
                            x: 530,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "honduras.img": {
                        frame: {
                            x: 662,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "hong-kong.img": {
                        frame: {
                            x: 794,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "serbia.img": {
                        frame: {
                            x: 926,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "singapore.img": {
                        frame: {
                            x: 1058,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "hungary.img": {
                        frame: {
                            x: 1190,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "slovakia.img": {
                        frame: {
                            x: 1322,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "belgium.img": {
                        frame: {
                            x: 1454,
                            y: 1366,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-scope-03.img": {
                        frame: {
                            x: 1616,
                            y: 2,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "bolivia.img": {
                        frame: {
                            x: 1616,
                            y: 134,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "south-korea.img": {
                        frame: {
                            x: 1616,
                            y: 266,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "spain.img": {
                        frame: {
                            x: 1616,
                            y: 398,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "bosnia-and-herzegovina.img": {
                        frame: {
                            x: 1616,
                            y: 530,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "brazil.img": {
                        frame: {
                            x: 1616,
                            y: 662,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "sweden.img": {
                        frame: {
                            x: 1616,
                            y: 794,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "switzerland.img": {
                        frame: {
                            x: 1616,
                            y: 926,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "taiwan.img": {
                        frame: {
                            x: 1616,
                            y: 1058,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ecuador.img": {
                        frame: {
                            x: 1616,
                            y: 1190,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "thailand.img": {
                        frame: {
                            x: 1616,
                            y: 1322,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "canada.img": {
                        frame: {
                            x: 2,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "vietnam.img": {
                        frame: {
                            x: 134,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m93r-dual.img": {
                        frame: {
                            x: 266,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "trinidad-and-tobago.img": {
                        frame: {
                            x: 398,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "india.img": {
                        frame: {
                            x: 530,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "venezuela.img": {
                        frame: {
                            x: 662,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "turkey.img": {
                        frame: {
                            x: 794,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "uruguay.img": {
                        frame: {
                            x: 926,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "united-kingdom.img": {
                        frame: {
                            x: 1058,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "united-states-of-america.img": {
                        frame: {
                            x: 1190,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "russia.img": {
                        frame: {
                            x: 1322,
                            y: 1498,
                            w: 128,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-map-coming.img": {
                        frame: {
                            x: 1233,
                            y: 1094,
                            w: 112,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 8,
                            w: 112,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 256
                        }
                    },
                    "loot-weapon-flare-gun-dual.img": {
                        frame: {
                            x: 1454,
                            y: 1498,
                            w: 110,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 0,
                            w: 110,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m93r.img": {
                        frame: {
                            x: 1568,
                            y: 1498,
                            w: 100,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 14,
                            y: 0,
                            w: 100,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "player-helmet-potato.img": {
                        frame: {
                            x: 1748,
                            y: 2,
                            w: 99,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 27,
                            y: 24,
                            w: 99,
                            h: 128
                        },
                        sourceSize: {
                            w: 176,
                            h: 176
                        }
                    },
                    "player-helmet-medic.img": {
                        frame: {
                            x: 1748,
                            y: 134,
                            w: 97,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 27,
                            y: 24,
                            w: 97,
                            h: 128
                        },
                        sourceSize: {
                            w: 176,
                            h: 176
                        }
                    },
                    "player-helmet-leader.img": {
                        frame: {
                            x: 1748,
                            y: 266,
                            w: 97,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 27,
                            y: 24,
                            w: 97,
                            h: 128
                        },
                        sourceSize: {
                            w: 176,
                            h: 176
                        }
                    },
                    "player-helmet-lieutenant.img": {
                        frame: {
                            x: 1748,
                            y: 398,
                            w: 97,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 27,
                            y: 24,
                            w: 97,
                            h: 128
                        },
                        sourceSize: {
                            w: 176,
                            h: 176
                        }
                    },
                    "indicator.img": {
                        frame: {
                            x: 1748,
                            y: 530,
                            w: 90,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 19,
                            y: 0,
                            w: 90,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-airdrop-04.img": {
                        frame: {
                            x: 1748,
                            y: 662,
                            w: 54,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 54,
                            h: 128
                        },
                        sourceSize: {
                            w: 54,
                            h: 128
                        }
                    },
                    "ping-map-danger.img": {
                        frame: {
                            x: 1806,
                            y: 662,
                            w: 40,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 44,
                            y: 0,
                            w: 40,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-team-airdrop.img": {
                        frame: {
                            x: 2,
                            y: 1630,
                            w: 126,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 126,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-team-airstrike.img": {
                        frame: {
                            x: 132,
                            y: 1630,
                            w: 126,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 126,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-team-help.img": {
                        frame: {
                            x: 262,
                            y: 1630,
                            w: 126,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 126,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-team-coming.img": {
                        frame: {
                            x: 392,
                            y: 1630,
                            w: 126,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 126,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-team-danger.img": {
                        frame: {
                            x: 522,
                            y: 1630,
                            w: 126,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 126,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "thinking-face.img": {
                        frame: {
                            x: 652,
                            y: 1630,
                            w: 124,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-ot38-dual.img": {
                        frame: {
                            x: 780,
                            y: 1630,
                            w: 121,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 1,
                            w: 121,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-colt45-dual.img": {
                        frame: {
                            x: 905,
                            y: 1630,
                            w: 120,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 1,
                            w: 120,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m4a1.img": {
                        frame: {
                            x: 1029,
                            y: 1630,
                            w: 116,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 1,
                            w: 116,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m1014.img": {
                        frame: {
                            x: 1149,
                            y: 1630,
                            w: 110,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 1,
                            w: 110,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-ots38-dual.img": {
                        frame: {
                            x: 1263,
                            y: 1630,
                            w: 105,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 1,
                            w: 105,
                            h: 126
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "gun-med-01.img": {
                        frame: {
                            x: 1748,
                            y: 794,
                            w: 30,
                            h: 126
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 30,
                            h: 126
                        },
                        sourceSize: {
                            w: 32,
                            h: 128
                        }
                    },
                    "proj-strobe-unarmed.img": {
                        frame: {
                            x: 1372,
                            y: 1630,
                            w: 147,
                            h: 125
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 25,
                            w: 147,
                            h: 125
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "star-red.img": {
                        frame: {
                            x: 1523,
                            y: 1630,
                            w: 132,
                            h: 125
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 6,
                            w: 132,
                            h: 125
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "star-blue.img": {
                        frame: {
                            x: 1659,
                            y: 1630,
                            w: 132,
                            h: 125
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 6,
                            w: 132,
                            h: 125
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "alien-face.img": {
                        frame: {
                            x: 1851,
                            y: 2,
                            w: 124,
                            h: 125
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 125
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "snowflake.img": {
                        frame: {
                            x: 1851,
                            y: 131,
                            w: 114,
                            h: 125
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 2,
                            w: 114,
                            h: 125
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-dp28.img": {
                        frame: {
                            x: 1851,
                            y: 260,
                            w: 114,
                            h: 125
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 2,
                            w: 114,
                            h: 125
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "imp-face.img": {
                        frame: {
                            x: 2,
                            y: 1760,
                            w: 126,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 2,
                            w: 126,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "disappoint-face.img": {
                        frame: {
                            x: 1851,
                            y: 389,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "sunglass-face.img": {
                        frame: {
                            x: 1851,
                            y: 517,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "heart-face.img": {
                        frame: {
                            x: 1851,
                            y: 645,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "happy-face.img": {
                        frame: {
                            x: 1851,
                            y: 773,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-heal-01.img": {
                        frame: {
                            x: 1851,
                            y: 901,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "joy-face.img": {
                        frame: {
                            x: 1851,
                            y: 1029,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-log-01.img": {
                        frame: {
                            x: 1851,
                            y: 1157,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "sad-face.img": {
                        frame: {
                            x: 1851,
                            y: 1285,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "sob-face.img": {
                        frame: {
                            x: 1851,
                            y: 1413,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "monocle-face.img": {
                        frame: {
                            x: 1851,
                            y: 1541,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "angry-face.img": {
                        frame: {
                            x: 132,
                            y: 1760,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "upsidedown-face.img": {
                        frame: {
                            x: 260,
                            y: 1760,
                            w: 124,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 124,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "campfire.img": {
                        frame: {
                            x: 388,
                            y: 1760,
                            w: 116,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 2,
                            w: 116,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-an94.img": {
                        frame: {
                            x: 508,
                            y: 1760,
                            w: 114,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 2,
                            w: 114,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-pkp.img": {
                        frame: {
                            x: 626,
                            y: 1760,
                            w: 114,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 2,
                            w: 114,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m1a1.img": {
                        frame: {
                            x: 744,
                            y: 1760,
                            w: 113,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 2,
                            w: 113,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-scorpion.img": {
                        frame: {
                            x: 861,
                            y: 1760,
                            w: 113,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 2,
                            w: 113,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "trash.img": {
                        frame: {
                            x: 978,
                            y: 1760,
                            w: 108,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 2,
                            w: 108,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "thumbs-up.img": {
                        frame: {
                            x: 1090,
                            y: 1760,
                            w: 104,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 2,
                            w: 104,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "bullets.img": {
                        frame: {
                            x: 1748,
                            y: 924,
                            w: 86,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 21,
                            y: 2,
                            w: 86,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-splat-01.img": {
                        frame: {
                            x: 1198,
                            y: 1760,
                            w: 126,
                            h: 123
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 9,
                            w: 126,
                            h: 123
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "loot-weapon-saiga.img": {
                        frame: {
                            x: 1328,
                            y: 1760,
                            w: 112,
                            h: 123
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 3,
                            w: 112,
                            h: 123
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "tombstone.img": {
                        frame: {
                            x: 1444,
                            y: 1760,
                            w: 112,
                            h: 123
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 0,
                            w: 112,
                            h: 123
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m39.img": {
                        frame: {
                            x: 1560,
                            y: 1760,
                            w: 108,
                            h: 123
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 3,
                            w: 108,
                            h: 123
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "police.img": {
                        frame: {
                            x: 1672,
                            y: 1760,
                            w: 100,
                            h: 123
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 14,
                            y: 2,
                            w: 100,
                            h: 123
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "perk-3.img": {
                        frame: {
                            x: 1776,
                            y: 1760,
                            w: 128,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 128,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "perk-1.img": {
                        frame: {
                            x: 1979,
                            y: 2,
                            w: 128,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 128,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "perk-2.img": {
                        frame: {
                            x: 1979,
                            y: 128,
                            w: 126,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 3,
                            w: 126,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-bar.img": {
                        frame: {
                            x: 1979,
                            y: 254,
                            w: 126,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 3,
                            w: 126,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "heart.img": {
                        frame: {
                            x: 1979,
                            y: 380,
                            w: 124,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 4,
                            w: 124,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-boost-01.img": {
                        frame: {
                            x: 1979,
                            y: 506,
                            w: 122,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 122,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "emote.img": {
                        frame: {
                            x: 1979,
                            y: 632,
                            w: 122,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 122,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "surviv.img": {
                        frame: {
                            x: 1979,
                            y: 758,
                            w: 122,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 122,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-mk12.img": {
                        frame: {
                            x: 1979,
                            y: 884,
                            w: 114,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 3,
                            w: 114,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "cupcake.img": {
                        frame: {
                            x: 1979,
                            y: 1010,
                            w: 108,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 3,
                            w: 108,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "candy-corn.img": {
                        frame: {
                            x: 1979,
                            y: 1136,
                            w: 104,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 3,
                            w: 104,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "snowman.img": {
                        frame: {
                            x: 1979,
                            y: 1262,
                            w: 96,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 16,
                            y: 3,
                            w: 96,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "perk-5.img": {
                        frame: {
                            x: 1979,
                            y: 1388,
                            w: 90,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 19,
                            y: 3,
                            w: 90,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-throwable-smoke.img": {
                        frame: {
                            x: 1979,
                            y: 1514,
                            w: 84,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 22,
                            y: 3,
                            w: 84,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ice-cream.img": {
                        frame: {
                            x: 1979,
                            y: 1640,
                            w: 66,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 31,
                            y: 3,
                            w: 66,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-awc.img": {
                        frame: {
                            x: 2,
                            y: 1888,
                            w: 122,
                            h: 121
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 6,
                            w: 122,
                            h: 121
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m249.img": {
                        frame: {
                            x: 128,
                            y: 1888,
                            w: 116,
                            h: 121
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 4,
                            w: 116,
                            h: 121
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "proj-frag-pin-02.img": {
                        frame: {
                            x: 248,
                            y: 1888,
                            w: 110,
                            h: 121
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 6,
                            w: 110,
                            h: 121
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "proj-frag-pin-01.img": {
                        frame: {
                            x: 362,
                            y: 1888,
                            w: 110,
                            h: 121
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 6,
                            w: 110,
                            h: 121
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "proj-frag-nopin-02.img": {
                        frame: {
                            x: 476,
                            y: 1888,
                            w: 109,
                            h: 121
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 19,
                            y: 6,
                            w: 109,
                            h: 121
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "proj-frag-nopin-01.img": {
                        frame: {
                            x: 589,
                            y: 1888,
                            w: 109,
                            h: 121
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 19,
                            y: 6,
                            w: 109,
                            h: 121
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "proj-frag-nopin-nolever-02.img": {
                        frame: {
                            x: 1748,
                            y: 1052,
                            w: 90,
                            h: 121
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 19,
                            y: 6,
                            w: 90,
                            h: 121
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "proj-frag-nopin-nolever-01.img": {
                        frame: {
                            x: 1748,
                            y: 1177,
                            w: 90,
                            h: 121
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 19,
                            y: 6,
                            w: 90,
                            h: 121
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "chicken-dinner.img": {
                        frame: {
                            x: 702,
                            y: 1888,
                            w: 128,
                            h: 120
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 128,
                            h: 120
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-splat-03.img": {
                        frame: {
                            x: 834,
                            y: 1888,
                            w: 123,
                            h: 120
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 13,
                            y: 6,
                            w: 123,
                            h: 120
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "loot-weapon-usas.img": {
                        frame: {
                            x: 961,
                            y: 1888,
                            w: 122,
                            h: 120
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 4,
                            w: 122,
                            h: 120
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-qbb97.img": {
                        frame: {
                            x: 1087,
                            y: 1888,
                            w: 118,
                            h: 120
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 4,
                            w: 118,
                            h: 120
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-pumpshotgun.img": {
                        frame: {
                            x: 1209,
                            y: 1888,
                            w: 118,
                            h: 120
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 4,
                            w: 118,
                            h: 120
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "egg.img": {
                        frame: {
                            x: 1748,
                            y: 1302,
                            w: 98,
                            h: 120
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 15,
                            y: 4,
                            w: 98,
                            h: 120
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-colt45.img": {
                        frame: {
                            x: 1748,
                            y: 1426,
                            w: 96,
                            h: 120
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 16,
                            y: 4,
                            w: 96,
                            h: 120
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-ots38.img": {
                        frame: {
                            x: 1331,
                            y: 1888,
                            w: 81,
                            h: 120
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 23,
                            y: 4,
                            w: 81,
                            h: 120
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-chest-02.img": {
                        frame: {
                            x: 1416,
                            y: 1888,
                            w: 76,
                            h: 120
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 26,
                            y: 4,
                            w: 76,
                            h: 120
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m1911-dual.img": {
                        frame: {
                            x: 1496,
                            y: 1888,
                            w: 128,
                            h: 119
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 5,
                            w: 128,
                            h: 119
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m1100.img": {
                        frame: {
                            x: 1628,
                            y: 1888,
                            w: 119,
                            h: 119
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 7,
                            w: 119,
                            h: 119
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m1911.img": {
                        frame: {
                            x: 1751,
                            y: 1888,
                            w: 107,
                            h: 119
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 5,
                            w: 107,
                            h: 119
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-hk416.img": {
                        frame: {
                            x: 1862,
                            y: 1888,
                            w: 105,
                            h: 119
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 13,
                            y: 4,
                            w: 105,
                            h: 119
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-potato-02.img": {
                        frame: {
                            x: 1971,
                            y: 1888,
                            w: 94,
                            h: 119
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 17,
                            y: 4,
                            w: 94,
                            h: 119
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "perk-4.img": {
                        frame: {
                            x: 2111,
                            y: 2,
                            w: 86,
                            h: 119
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 21,
                            y: 6,
                            w: 86,
                            h: 119
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m9-dual.img": {
                        frame: {
                            x: 1979,
                            y: 1766,
                            w: 128,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 5,
                            w: 128,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "salt.img": {
                        frame: {
                            x: 2,
                            y: 2013,
                            w: 124,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 5,
                            w: 124,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-sv98.img": {
                        frame: {
                            x: 130,
                            y: 2013,
                            w: 121,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 7,
                            w: 121,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "donut.img": {
                        frame: {
                            x: 255,
                            y: 2013,
                            w: 120,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 5,
                            w: 120,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "skull.img": {
                        frame: {
                            x: 379,
                            y: 2013,
                            w: 120,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 5,
                            w: 120,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-part-circle-auto-outer.img": {
                        frame: {
                            x: 2624,
                            y: 732,
                            w: 28,
                            h: 26
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 28,
                            h: 26
                        },
                        sourceSize: {
                            w: 28,
                            h: 28
                        }
                    },
                    "part-feather-01.img": {
                        frame: {
                            x: 625,
                            y: 2013,
                            w: 118,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 5,
                            w: 118,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-chest-01.img": {
                        frame: {
                            x: 747,
                            y: 2013,
                            w: 118,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 5,
                            w: 118,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-feather-02.img": {
                        frame: {
                            x: 869,
                            y: 2013,
                            w: 118,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 5,
                            w: 118,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-ump9.img": {
                        frame: {
                            x: 991,
                            y: 2013,
                            w: 114,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 5,
                            w: 114,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-famas.img": {
                        frame: {
                            x: 1109,
                            y: 2013,
                            w: 112,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 5,
                            w: 112,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-vector45.img": {
                        frame: {
                            x: 1225,
                            y: 2013,
                            w: 104,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 5,
                            w: 104,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-m9.img": {
                        frame: {
                            x: 1333,
                            y: 2013,
                            w: 96,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 16,
                            y: 5,
                            w: 96,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-chest-03.img": {
                        frame: {
                            x: 1433,
                            y: 2013,
                            w: 96,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 16,
                            y: 5,
                            w: 96,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-pack-00.img": {
                        frame: {
                            x: 1533,
                            y: 2013,
                            w: 90,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 19,
                            y: 5,
                            w: 90,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-pack-02.img": {
                        frame: {
                            x: 1627,
                            y: 2013,
                            w: 88,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 20,
                            y: 5,
                            w: 88,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-melee-bayonet-rugged.img": {
                        frame: {
                            x: 2111,
                            y: 125,
                            w: 36,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 46,
                            y: 5,
                            w: 36,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-melee-bayonet-woodland.img": {
                        frame: {
                            x: 2151,
                            y: 125,
                            w: 36,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 46,
                            y: 5,
                            w: 36,
                            h: 118
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "proj-strobe-arming.img": {
                        frame: {
                            x: 1719,
                            y: 2013,
                            w: 134,
                            h: 117
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 13,
                            y: 27,
                            w: 134,
                            h: 117
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "proj-strobe-armed.img": {
                        frame: {
                            x: 1857,
                            y: 2013,
                            w: 134,
                            h: 117
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 13,
                            y: 27,
                            w: 134,
                            h: 117
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "loot-weapon-mosin.img": {
                        frame: {
                            x: 1995,
                            y: 2013,
                            w: 118,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 6,
                            w: 118,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-leaf-06.img": {
                        frame: {
                            x: 2201,
                            y: 2,
                            w: 116,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 116,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "gas.img": {
                        frame: {
                            x: 2201,
                            y: 122,
                            w: 116,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 116,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-spark-02.img": {
                        frame: {
                            x: 2201,
                            y: 242,
                            w: 116,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 116,
                            h: 116
                        },
                        sourceSize: {
                            w: 120,
                            h: 120
                        }
                    },
                    "target.img": {
                        frame: {
                            x: 2201,
                            y: 362,
                            w: 116,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 116,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-leaf-05.img": {
                        frame: {
                            x: 2201,
                            y: 482,
                            w: 116,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 116,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-leaf-03.img": {
                        frame: {
                            x: 2201,
                            y: 602,
                            w: 116,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 116,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-leaf-04.img": {
                        frame: {
                            x: 2201,
                            y: 722,
                            w: 116,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 116,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-spark-01.img": {
                        frame: {
                            x: 2201,
                            y: 842,
                            w: 116,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 116,
                            h: 116
                        },
                        sourceSize: {
                            w: 120,
                            h: 120
                        }
                    },
                    "flex.img": {
                        frame: {
                            x: 2201,
                            y: 962,
                            w: 109,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 6,
                            w: 109,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-medical-bandage.img": {
                        frame: {
                            x: 2201,
                            y: 1082,
                            w: 106,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 11,
                            y: 6,
                            w: 106,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-scar.img": {
                        frame: {
                            x: 2201,
                            y: 1202,
                            w: 104,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 6,
                            w: 104,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "acorn.img": {
                        frame: {
                            x: 2201,
                            y: 1322,
                            w: 104,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 6,
                            w: 104,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-pack-01.img": {
                        frame: {
                            x: 2201,
                            y: 1442,
                            w: 94,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 17,
                            y: 6,
                            w: 94,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-flare-gun.img": {
                        frame: {
                            x: 2201,
                            y: 1562,
                            w: 82,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 23,
                            y: 6,
                            w: 82,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-melee-bowie-frontier.img": {
                        frame: {
                            x: 2201,
                            y: 1682,
                            w: 42,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 43,
                            y: 6,
                            w: 42,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-melee-bowie-vintage.img": {
                        frame: {
                            x: 2247,
                            y: 1682,
                            w: 42,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 43,
                            y: 6,
                            w: 42,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-melee-huntsman-burnished.img": {
                        frame: {
                            x: 2287,
                            y: 1562,
                            w: 24,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 52,
                            y: 6,
                            w: 24,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-melee-huntsman-rugged.img": {
                        frame: {
                            x: 2293,
                            y: 1682,
                            w: 24,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 52,
                            y: 6,
                            w: 24,
                            h: 116
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "sleepy.img": {
                        frame: {
                            x: 2,
                            y: 2135,
                            w: 124,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 7,
                            w: 124,
                            h: 114
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-garand.img": {
                        frame: {
                            x: 2201,
                            y: 1802,
                            w: 112,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 7,
                            w: 112,
                            h: 114
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "pumpkin.img": {
                        frame: {
                            x: 2201,
                            y: 1920,
                            w: 106,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 11,
                            y: 7,
                            w: 106,
                            h: 114
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-pack-03.img": {
                        frame: {
                            x: 130,
                            y: 2135,
                            w: 104,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 7,
                            w: 104,
                            h: 114
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-deagle.img": {
                        frame: {
                            x: 238,
                            y: 2135,
                            w: 104,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 7,
                            w: 104,
                            h: 114
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-mp5.img": {
                        frame: {
                            x: 346,
                            y: 2135,
                            w: 96,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 16,
                            y: 7,
                            w: 96,
                            h: 114
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-spas12.img": {
                        frame: {
                            x: 446,
                            y: 2135,
                            w: 96,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 16,
                            y: 7,
                            w: 96,
                            h: 114
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "tap.img": {
                        frame: {
                            x: 546,
                            y: 2135,
                            w: 96,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 16,
                            y: 7,
                            w: 96,
                            h: 114
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-weapon-ot38.img": {
                        frame: {
                            x: 646,
                            y: 2135,
                            w: 90,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 19,
                            y: 7,
                            w: 90,
                            h: 114
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-blossom-04.img": {
                        frame: {
                            x: 740,
                            y: 2135,
                            w: 115,
                            h: 113
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 9,
                            w: 115,
                            h: 113
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-melee-pan-black-side.img": {
                        frame: {
                            x: 2111,
                            y: 247,
                            w: 19,
                            h: 113
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 55,
                            y: 7,
                            w: 19,
                            h: 113
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "cattle.img": {
                        frame: {
                            x: 859,
                            y: 2135,
                            w: 118,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 8,
                            w: 118,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-shirt-01.img": {
                        frame: {
                            x: 981,
                            y: 2135,
                            w: 116,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 8,
                            w: 116,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-shirt-02.img": {
                        frame: {
                            x: 1101,
                            y: 2135,
                            w: 116,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 8,
                            w: 116,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-shirt-03.img": {
                        frame: {
                            x: 1221,
                            y: 2135,
                            w: 116,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 8,
                            w: 116,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-shirt-04.img": {
                        frame: {
                            x: 1341,
                            y: 2135,
                            w: 116,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 8,
                            w: 116,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-blossom-03.img": {
                        frame: {
                            x: 1461,
                            y: 2135,
                            w: 115,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 10,
                            w: 115,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ammo-308sub.img": {
                        frame: {
                            x: 1580,
                            y: 2135,
                            w: 113,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 8,
                            w: 113,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ammo-762mm.img": {
                        frame: {
                            x: 1697,
                            y: 2135,
                            w: 113,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 8,
                            w: 113,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ammo-box.img": {
                        frame: {
                            x: 1814,
                            y: 2135,
                            w: 113,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 8,
                            w: 113,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ammo-12gauge.img": {
                        frame: {
                            x: 1931,
                            y: 2135,
                            w: 113,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 8,
                            w: 113,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ammo-556mm.img": {
                        frame: {
                            x: 2048,
                            y: 2135,
