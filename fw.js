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
            this.touchElem = e, this.keys = {}, this.keysOld = {}, this.he = s.create(0, 0), this.mouseButtons = {}, this.mouseButtonsOld = {}, this.mouseWheelState = 0, this.touches = [], this.touchIdCounter = 0, this.leftTouch = null, this.rightTouch = null, this.lostFocus = !1, this.captureNextInputCb = null, this.bOnWindowFocus = function(e) {
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
                        return this.ue(e.code);
                    case p.MouseButton:
                        return this.ge(e.code);
                    case p.MouseWheel:
                        return this.ye() == e.code;
                    default:
                        return !1
                }
            },
            isInputValueReleased: function(e) {
                switch (e.type) {
                    case p.Key:
                        return this.we(e.code);
                    case p.MouseButton:
                        return this.xe(e.code);
                    case p.MouseWheel:
                        return this.ye() == e.code;
                    default:
                        return !1
                }
            },
            isInputValueDown: function(e) {
                switch (e.type) {
                    case p.Key:
                        return this.fe(e.code);
                    case p.MouseButton:
                        return this.be(e.code);
                    case p.MouseWheel:
                        return this.ye() == e.code;
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
            fe: function(e) {
                return !!this.keys[e]
            },
            ue: function(e) {
                return !this.keysOld[e] && !!this.keys[e]
            },
            we: function(e) {
                return !!this.keysOld[e] && !this.keys[e]
            },
            onMouseMove: function(e) {
                this.he.x = e.clientX, this.he.y = e.clientY
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
            be: function(e) {
                return !!this.mouseButtons[e]
            },
            ge: function(e) {
                return !this.mouseButtonsOld[e] && !!this.mouseButtons[e]
            },
            xe: function(e) {
                return !!this.mouseButtonsOld[e] && !this.mouseButtons[e]
            },
            ye: function() {
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
            _e: o,
            InputType: p,
            InputValue: g,
            Key: l,
            MouseButton: c,
            MouseWheel: m,
            Touch: r
        }
    },
