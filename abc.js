    af8ba00f: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
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
            o = a("6b42806d"),
            n = (a("10899aea"), a("c2a798c8")),
            s = {
                Line: 0,
                Ray: 1,
                Circle: 2,
                Aabb: 3
            },
            l = function() {
                function e() {
                    i(this, e), this.shapes = []
                }
                return r(e, [{
                    key: "addLine",
                    value: function(e, t, a, i) {
                        this.shapes.push({
                            type: s.Line,
                            start: n.copy(e),
                            end: n.copy(t),
                            color: a,
                            fill: i
                        })
                    }
                }, {
                    key: "addRay",
                    value: function(e, t, a, i, r) {
                        this.shapes.push({
                            type: s.Ray,
                            pos: n.copy(e),
                            dir: n.copy(t),
                            len: a,
                            color: i,
                            fill: r
                        })
                    }
                }, {
                    key: "addCircle",
                    value: function(e, t, a, i) {
                        this.shapes.push({
                            type: s.Circle,
                            pos: n.copy(e),
                            rad: t,
                            color: a,
                            fill: i
                        })
                    }
                }, {
                    key: "addAabb",
                    value: function(e, t, a, i) {
                        this.shapes.push({
                            type: s.Aabb,
                            min: n.copy(e),
                            max: n.copy(t),
                            color: a,
                            fill: i
                        })
                    }
                }, {
                    key: "addCollider",
                    value: function(e, t, a) {
                        e.type == o.Type.Aabb ? this.addAabb(e.min, e.max, t, a) : this.addCircle(e.pos, e.rad, t, a)
                    }
                }, {
                    key: "render",
                    value: function(e, t) {}
                }, {
                    key: "flush",
                    value: function() {
                        this.shapes = []
                    }
                }]), e
            }(),
            c = new l;
        e.exports = c
    },
    b198b546: function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }
        var r, o = {
                None: 0,
                Danger: 1,
                Coming: 2,
                Help: 3,
                Ammo: 4,
                Medical: 5,
                Airdrop: 6,
                Airstrike: 7,
                WoodsKing: 8
            },
            n = (r = {}, i(r, o.None, {}), i(r, o.Danger, {
                texture: "ping-team-danger.img",
                mapTexture: "ping-map-danger.img",
                sound: "ping_danger_01",
                soundLeader: "ping_leader_01",
                pingMap: !0,
                pingLife: 4,
                mapLife: 4,
                mapEvent: !1,
                worldDisplay: !0
            }), i(r, o.Coming, {
                texture: "ping-team-coming.img",
                mapTexture: "ping-map-coming.img",
                sound: "ping_coming_01",
                soundLeader: "ping_leader_01",
                pingMap: !0,
                pingLife: 4,
                mapLife: 300,
                mapEvent: !1,
                worldDisplay: !0
            }), i(r, o.Help, {
                texture: "ping-team-help.img",
                mapTexture: "ping-map-help.img",
                sound: "ping_help_01",
                soundLeader: "ping_leader_01",
                pingMap: !0,
                pingLife: 4,
                mapLife: 4,
                mapEvent: !1,
                worldDisplay: !0
            }), i(r, o.Emote, {}), i(r, o.Airdrop, {
                texture: "ping-team-airdrop.img",
                mapTexture: "ping-map-airdrop.img",
                sound: "ping_airdrop_01",
                pingMap: !0,
                pingLife: 4,
                mapLife: 10,
                mapEvent: !0,
                worldDisplay: !1,
                tint: 16737792
            }), i(r, o.Airstrike, {
                texture: "ping-team-airstrike.img",
                mapTexture: "ping-map-airstrike.img",
                sound: "ping_airstrike_01",
                pingMap: !0,
                pingLife: 2,
                mapLife: 2,
                mapEvent: !0,
                worldDisplay: !0,
                tint: 15400704
            }), i(r, o.WoodsKing, {
                texture: "player-king-woods.img",
                mapTexture: "ping-map-woods-king.img",
                sound: "helmet03_forest_pickup_01",
                pingMap: !0,
                pingLife: 4,
                mapLife: 10,
                mapEvent: !0,
                worldDisplay: !1,
                tint: 1244928
            }), r);
        e.exports = {
            PingType: o,
            PingData: n
        }
    },
    b4f03d8a: function(e, t, a) {
        t = e.exports = a("95cc1214")(!1), t.push([e.i, '/* Breaks in Bootstrap 4 are:\n *\n * extra large devices (wide screens): 1200px,\n * large devices (desktops): 992px,\n * medium devices (tablets): 768px,\n * small devices (phones): 576px\n *\n * However... iPhone X landscape width: 812px\n * https://mydevice.io/devices/\n */\nimg {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n  user-drag: none;\n}\n#cvs {\n  -webkit-filter: none;\n          filter: none;\n}\n.click-through {\n  pointer-events: none;\n}\n#game-area-wrapper {\n  cursor: crosshair;\n  left: 0;\n  position: absolute !important;\n  top: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n#ui-game {\n  -webkit-filter: none;\n          filter: none;\n  height: 100%;\n  left: 0px;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n}\n#ui-center {\n  color: #FFF;\n  pointer-events: all;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%) scale(1);\n          transform: translateX(-50%) translateY(-50%) scale(1);\n  z-index: 10;\n}\n@media screen and (min-width: 851px) and (max-height: 768px), (max-width: 1200px) {\n  #ui-center {\n    -webkit-transform: translateX(-50%) translateY(-50%) scale(0.85);\n            transform: translateX(-50%) translateY(-50%) scale(0.85);\n  }\n}\n@media screen and (max-width: 850px) {\n  #ui-center {\n    pointer-events: all;\n    -webkit-transform: translateX(-50%) translateY(-50%) scale(0.85);\n            transform: translateX(-50%) translateY(-50%) scale(0.85);\n    z-index: 10;\n  }\n}\n@media (max-width: 850px) and (max-height: 300px) {\n  #ui-center {\n    -webkit-transform: translateX(-50%) translateY(-50%) scale(0.775);\n            transform: translateX(-50%) translateY(-50%) scale(0.775);\n  }\n}\n#ui-game-menu {\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  box-sizing: border-box;\n  display: none;\n  margin: 10px auto;\n  padding: 10px 15px;\n}\n@media screen and (max-width: 850px) {\n  #ui-game-menu {\n    height: initial;\n    padding: 4px 10px;\n    width: 190px;\n  }\n}\n@media (max-width: 850px) and (max-height: 300px) {\n  #ui-game-menu {\n    margin-top: 0px;\n  }\n}\n#ui-game-menu p {\n  bottom: 4px;\n  display: inline-block;\n  font-size: 14px;\n  position: relative;\n}\n@media screen and (max-width: 850px) {\n  #ui-game-menu p {\n    bottom: 0px;\n    font-size: 12px;\n    margin-bottom: 8px;\n    margin-top: 6px;\n  }\n}\n.ui-game-menu-desktop {\n  height: 495px;\n  width: 350px;\n}\n.btns-game-double-row {\n  display: flex;\n  position: relative;\n}\n.btns-game-double-row > .btn-game-container {\n  position: relative;\n  width: 100%;\n}\n.btns-game-double-row > .btn-game-container > .btn-double-row {\n  display: inline-block;\n}\n.btns-game-double-row > div:not(:last-child) {\n  margin-right: 2px;\n}\n.game-menu-icon-toggle {\n  background-size: 22px;\n  background-position: center;\n  background-repeat: no-repeat;\n  bottom: 13px;\n  display: inline-block;\n  height: 22px;\n  left: 60%;\n  pointer-events: none;\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 22px;\n}\n.btn-game-touch-style {\n  background-color: #50afab;\n  background-position: 4px 4px;\n  background-repeat: no-repeat;\n  background-size: 20px;\n  border: 0px;\n  border-bottom: none;\n  border-radius: 5px;\n  box-shadow: inset 0 -2px #387c79;\n  box-sizing: border-box;\n  color: white;\n  cursor: pointer;\n  display: block;\n  font-size: 14px;\n  height: 30px;\n  line-height: 30px;\n  margin: auto;\n  margin-top: 2px;\n  margin-bottom: 4px;\n  position: relative;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n  width: 100%;\n}\n.movement-icon {\n  background-image: url(../img/gui/movement.svg);\n}\n.target-icon {\n  background-image: url(../img/gui/target.svg);\n}\n.aim-line-on-icon {\n  background-image: url(../img/gui/checked.svg);\n}\n.aim-line-off-icon {\n  background-image: url(../img/gui/close.svg);\n}\n#btn-game-tabs > .btn-game-container > .btn-game-menu {\n  text-align: center;\n  color: white;\n  line-height: 36px;\n  font-size: 16px;\n  background-color: transparent;\n  border: 2px solid;\n  border-color: white;\n  box-shadow: none;\n  cursor: pointer;\n  flex: 1;\n}\n#btn-game-tabs > .btn-game-container > .btn-game-menu-selected {\n  border: 2px solid !important;\n  border-color: #00ff00 !important;\n  background-color: rgba(0, 0, 0, 0.35);\n}\n.game-menu-icon-static {\n  background-size: 36px;\n  background-position: center;\n  background-repeat: no-repeat;\n  bottom: 13px;\n  display: inline-block;\n  height: 26px;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 36px;\n}\n.settings-icon {\n  background-image: url(../img/gui/cog.svg);\n}\n.keybind-icon {\n  background-image: url(../img/gui/keyboard.svg);\n}\n#ui-game-tab-settings {\n  display: block;\n  height: initial;\n}\n.ui-game-tab-settings-desktop {\n  height: 340px;\n}\n#ui-game-tab-keybinds {\n  display: none;\n  height: 345px;\n}\n#ui-game-tab-keybinds > .btn-keybind-restore {\n  margin-top: 20px;\n}\n#ui-game-tab-keybinds > #ui-keybind-list {\n  height: 295px;\n  overflow-y: scroll;\n  pointer-events: all;\n}\n#ui-map-container {\n  position: absolute;\n  bottom: 52px;\n}\n#ui-alive-info {\n  position: absolute;\n  color: white;\n  width: 92px;\n  height: 36px;\n  top: 174px;\n  left: 96px;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n}\n#ui-alive-info > #ui-map-counter-faction {\n  bottom: 3px;\n  display: none;\n  font-size: 24px;\n  left: 12px;\n  position: absolute;\n  text-align: center;\n  width: 92px;\n}\n#ui-alive-info > #ui-map-counter-faction > .ui-players-alive-red {\n  color: #ff0000;\n  display: inline-block;\n  font-size: 24px;\n  font-weight: bold;\n  position: relative;\n}\n#ui-alive-info > #ui-map-counter-faction > .ui-players-alive-blue {\n  color: #00d2ff;\n  display: inline-block;\n  font-size: 24px;\n  font-weight: bold;\n  position: relative;\n}\n#ui-map-expand-mobile {\n  height: 190px;\n  width: 190px;\n  left: -4px;\n  top: -22px;\n  z-index: 0;\n  background-color: transparent;\n}\n#ui-map-expand img {\n  display: none;\n}\n#ui-map-minimize {\n  left: 124px;\n}\n.ui-map-wrapper-mobile {\n  bottom: initial;\n  color: #FFF;\n  display: block;\n  font-size: 16px;\n  left: 6px;\n  top: 46px;\n}\n.ui-map-wrapper-mobile .ui-players-alive {\n  left: 4px;\n}\n.ui-map-wrapper-mobile #ui-map-counter-default {\n  position: relative;\n  display: inline-block;\n  font-size: 24px;\n  text-align: center;\n  bottom: 10px;\n  left: 9px;\n}\n.ui-map-wrapper-mobile .ui-map-icon {\n  padding: 6px;\n  display: inline-block;\n  height: 24px;\n  width: 18px;\n  margin-left: 0px;\n  background-size: 24px;\n  background-repeat: no-repeat;\n  background-position: 6px 6px;\n}\n.ui-map-wrapper-mobile #ui-map-info {\n  position: absolute;\n  color: white;\n  width: 92px;\n  height: 36px;\n  top: 174px;\n  left: -2px;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n}\n.ui-map-wrapper-mobile #ui-spec-counter {\n  position: absolute;\n  color: white;\n  width: 68px;\n  height: 28px;\n  top: 135px;\n  left: 60px;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n}\n.ui-map-wrapper-mobile #ui-spec-counter-icon {\n  padding: 6px;\n  display: inline-block;\n  height: 24px;\n  width: 18px;\n  margin-left: 2px;\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: 6px 4px;\n  background-image: url(../img/gui/eye.svg);\n}\n.ui-map-wrapper-mobile #ui-spec-counter-number {\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  width: 24px;\n  text-align: center;\n  bottom: 15px;\n  left: 0px;\n}\n.ui-map-wrapper-mobile .gas-icon {\n  background-image: url(../img/gui/gas.svg);\n}\n.ui-map-wrapper-mobile .danger-icon {\n  background-image: url(../img/gui/danger.svg);\n}\n.ui-map-wrapper-mobile .alive-icon {\n  background-image: url(../img/gui/player-gui.svg);\n}\n.ui-map-wrapper-mobile .icon-pulse {\n  -webkit-animation: pulse 2s linear infinite;\n  animation: pulse 2s linear infinite;\n}\n.ui-map-wrapper-mobile .ui-settings-button {\n  position: absolute;\n  color: white;\n  border-radius: 5px;\n  pointer-events: all;\n}\n.ui-map-wrapper-mobile .ui-settings-button img {\n  position: absolute;\n  left: 6px;\n  top: 6px;\n  height: 36px;\n  width: 36px;\n  background-size: 36px;\n  background-repeat: no-repeat;\n  transform: scale(1);\n  -webkit-transition: all 100ms ease-in;\n  -webkit-transform: scale(1);\n  -ms-transition: all 100ms ease-in;\n  -ms-transform: scale(1);\n  -moz-transition: all 100ms ease-in;\n  -moz-transform: scale(1);\n  transition: all 100ms ease-in;\n  transition: opacity 0.25s ease-out;\n  -moz-transition: opacity 0.25s ease-out;\n  -webkit-transition: opacity 0.25s ease-out;\n  -o-transition: opacity 0.25s ease-out;\n}\n.ui-map-wrapper-mobile .ui-settings-button .map-img-after {\n  display: none;\n}\n.ui-map-wrapper-mobile .ui-settings-button:hover {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.ui-map-wrapper-desktop {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n}\n#ui-map-wrapper {\n  position: absolute;\n  z-index: 1;\n}\n#ui-settings-container-mobile {\n  position: relative;\n}\n#ui-menu-display {\n  cursor: pointer;\n  left: 2px;\n  top: -18px;\n  height: 48px;\n  width: 48px;\n  opacity: 0.8;\n  background-color: rgba(0, 0, 0, 0.4);\n  background-size: 48px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(../img/gui/cog.svg);\n  z-index: 1;\n}\n/**\n * ui-big-map\n */\n#big-map {\n  display: none;\n  height: 100%;\n  width: 100%;\n}\n#big-map-collision {\n  height: 100%;\n  left: 50%;\n  margin: auto;\n  pointer-events: all;\n  position: fixed;\n  top: 0px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n#big-map-close {\n  display: none;\n  position: absolute;\n  margin-left: auto;\n  height: 64px;\n  width: 64px;\n  right: 6px;\n  top: 6px;\n  border-radius: 6px;\n  background-color: rgba(0, 0, 0, 0.5);\n  background-repeat: no-repeat;\n  background-size: 48px;\n  background-position: center;\n  background-image: url(../img/gui/close.svg);\n  pointer-events: all;\n}\n/**\n * ui-right-center\n */\n#ui-right-center {\n  position: absolute;\n  color: #FFF;\n  opacity: 0.75;\n  transition: opacity 0.25s ease-out;\n  -moz-transition: opacity 0.25s ease-out;\n  -webkit-transition: opacity 0.25s ease-out;\n  -o-transition: opacity 0.25s ease-out;\n}\n.ui-right-center-desktop {\n  top: 40%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 12px;\n}\n.ui-right-center-mobile {\n  height: 100%;\n  left: 50%;\n  top: 10px;\n  -webkit-transform: translateX(-50%) scale(1);\n          transform: translateX(-50%) scale(1);\n  width: 100%;\n}\n.ui-right-center-tablet {\n  height: initial;\n  left: initial;\n  top: 12px !important;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  right: 6px;\n  width: initial;\n}\n.ui-right-center-tablet-ipad-browser {\n  height: initial;\n  left: initial;\n  top: 12px !important;\n  -webkit-transform: scale(0.65);\n          transform: scale(0.65);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  right: 6px;\n  width: initial;\n}\n@media (max-height: 600px) {\n  .ui-right-center-tablet {\n    -webkit-transform: scale(0.55);\n            transform: scale(0.55);\n  }\n  .ui-right-center-tablet-ipad-browser {\n    -webkit-transform: scale(0.55);\n            transform: scale(0.55);\n  }\n}\n/**\n * ui-bottom-right\n */\n.ui-bottom-right-tablet {\n  bottom: 25% !important;\n  right: 6px !important;\n  -webkit-transform: scale(0.8) !important;\n          transform: scale(0.8) !important;\n  -webkit-transform-origin: right !important;\n          transform-origin: right !important;\n}\n.ui-bottom-right-tablet-ipad-webview {\n  bottom: 25% !important;\n  right: 6px !important;\n  -webkit-transform: scale(0.75) !important;\n          transform: scale(0.75) !important;\n  -webkit-transform-origin: right !important;\n          transform-origin: right !important;\n}\n.ui-bottom-right-tablet-ipad-browser {\n  bottom: 30% !important;\n  right: 6px !important;\n  -webkit-transform: scale(0.65) !important;\n          transform: scale(0.65) !important;\n  -webkit-transform-origin: right !important;\n          transform-origin: right !important;\n}\n@media (max-height: 600px) {\n  .ui-bottom-right-tablet-webview {\n    bottom: 25% !important;\n    -webkit-transform: scale(0.65) !important;\n            transform: scale(0.65) !important;\n    -webkit-transform-origin: right !important;\n            transform-origin: right !important;\n  }\n  .ui-bottom-right-tablet-browser {\n    bottom: 30% !important;\n    -webkit-transform: scale(0.6) !important;\n            transform: scale(0.6) !important;\n    -webkit-transform-origin: right !important;\n            transform-origin: right !important;\n  }\n}\n/**\n * ui-bottom-center-right\n */\n.ui-bottom-center-right-tablet {\n  left: 72% !important;\n  -webkit-transform: scale(0.65) !important;\n          transform: scale(0.65) !important;\n}\n#ui-emote-button {\n  background: rgba(0, 0, 0, 0.4);\n  background-image: url(../img/gui/emote.svg);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 28px;\n  border-radius: 21px;\n  display: none;\n  height: 42px;\n  position: absolute;\n  right: 108px;\n  top: 0px;\n  width: 42px;\n}\n@media screen and (max-width: 850px) {\n  #ui-emote-button {\n    background-size: 20px;\n    border-radius: 14px;\n    bottom: 18px;\n    height: 28px;\n    right: 4px;\n    top: initial;\n    width: 28px;\n  }\n}\n/**\n * ui-top-left\n */\n.ui-top-left-tablet {\n  left: 120px !important;\n}\n/**\n * ui-spectate-options-wrapper\n */\n.ui-spectate-options-wrapper-tablet {\n  bottom: 12px !important;\n  top: initial !important;\n}\n.ui-killfeed-wrapper-tablet {\n  top: 60px !important;\n}\n@media (max-width: 850px) and (max-height: 320px) {\n  .ui-slider-container {\n    margin-bottom: 0px;\n  }\n}\n@media (max-width: 850px) and (max-height: 320px) {\n  .ui-slider-container > p {\n    width: 75px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .ui-slider-container > .slider-text {\n    margin-bottom: 0px;\n  }\n}\n@media (max-width: 850px) and (max-height: 320px) {\n  .ui-slider-container > .slider {\n    bottom: 3px;\n    width: 85px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .ui-slider-container > .slider::-webkit-slider-thumb {\n    width: 24px;\n    height: 24px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .ui-slider-container > .slider::-moz-range-thumb {\n    width: 24px;\n    height: 24px;\n  }\n}\n#ui-stats-logo {\n  background-image: url("../img/surviv_logo_full.png");\n  background-repeat: no-repeat;\n  background-size: 250px;\n  background-position: center;\n  height: 125px;\n  position: absolute;\n  left: 20px;\n  top: 8px;\n  width: 250px;\n}\n@media (max-width: 1280px), (max-height: 768px) {\n  #ui-stats-logo {\n    background-size: 175px;\n    height: 90px;\n    width: 175px;\n  }\n}\n@media screen and (max-width: 850px) {\n  #ui-stats-logo {\n    background-size: 124px;\n    bottom: 4px;\n    height: 64px;\n    left: initial;\n    right: 8px;\n    top: initial;\n    width: 124px;\n  }\n}\n.ui-hidden {\n  display: none;\n}\n.btn-game-menu {\n  /* Added from .menu-option in menu.less */\n  text-align: center;\n  line-height: 38px;\n  display: block;\n  width: 100%;\n  height: 40px;\n  border: 0px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  position: relative;\n  margin: auto;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  color: white;\n  font-size: 16px;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n  background-color: #50afab;\n  border-bottom: 2px solid #387c79;\n  box-shadow: inset 0 -2px #387c79;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n#btn-game-fullscreen {\n  background-size: 34px;\n  background-position: 4px 2px;\n  background-image: url(../img/gui/minimize.svg);\n}\n#btn-game-sound {\n  background-size: 44px;\n  background-position: 2px -3px;\n}\n#btn-game-aim-line {\n  background-size: 24px;\n  background-position: 8px 6px;\n}\n#btn-game-quit {\n  margin-top: 40px;\n  background-size: 44px;\n  background-position: -2px -3px;\n  background-image: url(../img/gui/quit.svg);\n}\n#btn-game-resume {\n  margin-top: 30px;\n  background-size: 44px;\n  background-position: -2px -3px;\n  background-image: url(../img/gui/resume.svg);\n}\n/**\n     * ui-top-center\n     */\n#ui-top-center {\n  position: absolute;\n  color: #FFF;\n  top: 80px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n#ui-top-center .top-center-text {\n  text-align: center;\n  width: 100vw;\n  padding: 8px;\n}\n#ui-waiting-text {\n  display: none;\n  color: white;\n  text-shadow: 2px 2px 0px #000000;\n  font-size: 32px;\n  font-weight: bold;\n}\n#ui-waiting-text span {\n  font-size: 32px;\n  font-weight: bold;\n}\n.top-center-text .spectate-text {\n  display: inline-block;\n  text-shadow: 2px 2px 0px #000000;\n  font-size: 24px;\n  font-weight: bold;\n  overflow: hidden;\n  height: 32px;\n}\n@media (max-width: 1024px) {\n  .top-center-text .spectate-text {\n    font-size: 18px;\n  }\n}\n.top-center-text .spectate-desc {\n  color: white;\n  margin-right: 8px;\n}\n.ui-spectate-mode {\n  display: none;\n}\n#ui-spectate-text {\n  position: relative;\n}\n#spectate-player {\n  max-width: 250px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: cyan;\n}\n/**\n     * ui-top-center-scopes\n     */\n#ui-top-center-scopes-wrapper {\n  /* Taken from ui-top-center */\n  position: absolute;\n  color: #FFF;\n  top: 0%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 100%;\n}\n#ui-top-center-scopes {\n  margin-top: 12px;\n  text-align: center;\n}\n@media (max-height: 768px), (max-width: 1200px) {\n  #ui-top-center-scopes {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n}\n.ui-zoom {\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 36px;\n  width: 64px;\n  height: 64px;\n  opacity: 0.6;\n  display: inline-block;\n}\n.ui-zoom-hover:hover {\n  opacity: 1.0;\n}\n.ui-zoom-active {\n  vertical-align: baseline;\n  opacity: 1.0;\n  transform: scale(1);\n  -webkit-transition: all 100ms ease-in;\n  -webkit-transform: scale(1);\n  -ms-transition: all 100ms ease-in;\n  -ms-transform: scale(1);\n  -moz-transition: all 100ms ease-in;\n  -moz-transform: scale(1);\n  transition: all 100ms ease-in;\n  transition: opacity 0.25s ease-out;\n  -moz-transition: opacity 0.25s ease-out;\n  -webkit-transition: opacity 0.25s ease-out;\n  -o-transition: opacity 0.25s ease-out;\n}\n.ui-zoom .ui-zoom-image {\n  width: 64px;\n  height: 64px;\n  opacity: 0.4;\n  padding: 2px;\n}\n.ui-zoom .ui-zoom-text {\n  margin-top: 14px;\n  width: 100%;\n}\n.ui-zoom .ui-zoom-level {\n  font-size: 32px;\n  text-align: center;\n  width: 100%;\n  /*cursor: inherit;*/\n}\n.ui-zoom .ui-zoom-append {\n  font-size: 24px;\n}\n.ui-zoom-inactive {\n  display: none;\n  margin-left: -8px;\n  margin-right: -8px;\n  -webkit-transition: all 100ms ease-in;\n  -webkit-transform: scale(0.5);\n  -ms-transition: all 100ms ease-in;\n  -ms-transform: scale(0.5);\n  -moz-transition: all 100ms ease-in;\n  -moz-transform: scale(0.5);\n  transition: all 100ms ease-in;\n  transform: scale(0.5);\n}\n.ui-zoom-inactive:hover {\n  cursor: pointer !important;\n  opacity: 1.0;\n}\n/**\n     * ui-team-pings and ui-emotes\n     */\n.ui-emote-wheel {\n  z-index: 3;\n  display: none;\n  position: fixed;\n}\n.ui-emote-parent {\n  opacity: 0.75;\n}\n.ui-emote-hl {\n  z-index: 2;\n  display: none;\n}\n.ui-emote {\n  position: fixed;\n  width: 256px;\n  height: 256px;\n  background-size: 256px;\n  background-repeat: no-repeat;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.ui-emote-bg-circle {\n  opacity: 0.5;\n  background-image: url(../img/gui/ping-part-circle.svg);\n}\n.ui-emote-bg-quarter {\n  opacity: 0.5;\n  background-image: url(../img/gui/ping-part-quarter.svg);\n}\n.ui-emote-bg-eighth {\n  opacity: 0.5;\n  background-image: url(../img/gui/ping-part-eighth.svg);\n}\n.ui-emote-middle .ui-emote-image {\n  width: 24px !important;\n  height: 24px !important;\n  background-size: 24px !important;\n  background-image: url(../img/gui/close.svg);\n}\n.ui-emote-top .ui-emote-image {\n  margin-top: -78px;\n  background-image: url(../img/gui/ping-team-danger.svg);\n}\n.ui-emote-right .ui-emote {\n  -webkit-transform: translate(-50%, -50%) rotate(90deg);\n          transform: translate(-50%, -50%) rotate(90deg);\n}\n.ui-emote-right .ui-emote-image {\n  margin-left: 78px;\n  background-image: url(../img/gui/ping-team-coming.svg);\n}\n.ui-emote-bottom .ui-emote {\n  -webkit-transform: translate(-50%, -50%) rotate(180deg);\n          transform: translate(-50%, -50%) rotate(180deg);\n}\n.ui-emote-bottom .ui-emote-image {\n  margin-top: 78px;\n  background-image: url(../img/gui/ping-team-help.svg);\n}\n.ui-emote-left .ui-emote {\n  -webkit-transform: translate(-50%, -50%) rotate(270deg);\n          transform: translate(-50%, -50%) rotate(270deg);\n}\n.ui-emote-left .ui-emote-image {\n  margin-left: -78px;\n  background-image: url(../img/gui/ping-team-help.svg);\n}\n.ui-emote-top-left .ui-emote-image {\n  margin-left: -80px;\n  margin-top: -30px;\n  background-image: url(../img/loot/loot-ammo-box.svg);\n}\n.ui-emote-bottom-left .ui-emote {\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n          transform: translate(-50%, -50%) rotate(-45deg);\n}\n.ui-emote-bottom-left .ui-emote-image {\n  margin-left: -80px;\n  margin-top: 30px;\n  background-image: url(../img/loot/loot-medical-healthkit.svg);\n}\n.ui-emote-circle .ui-emote-hl {\n  background-image: url(../img/gui/ping-part-circle-highlight.svg);\n}\n.ui-emote-quarter .ui-emote-hl {\n  background-image: url(../img/gui/ping-part-quarter-highlight.svg);\n}\n.ui-emote-eighth .ui-emote-hl {\n  background-image: url(../img/gui/ping-part-eighth-highlight.svg);\n}\n.ui-emote-image {\n  z-index: 1;\n  position: fixed;\n  background-repeat: no-repeat;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.ui-emote-image-large {\n  width: 64px;\n  height: 64px;\n  background-size: 64px;\n}\n.ui-emote-image-small {\n  width: 35px;\n  height: 35px;\n  background-size: 35px;\n}\n/**\n     * ui-team-indicators\n     */\n.ui-team-indicator {\n  z-index: 2;\n  display: none;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  border-radius: 32px;\n  width: 64px;\n  height: 64px;\n  background-size: 64px;\n  background-repeat: no-repeat;\n  background-image: url(../img/gui/indicator.svg);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.ui-team-indicator-pos {\n  opacity: 0.75;\n  position: relative;\n  border-radius: 24px;\n  width: 32px;\n  height: 32px;\n  top: 23px;\n  left: 32px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.ui-team-indicator-image {\n  width: 32px;\n  height: 32px;\n  background-size: 32px;\n  background-repeat: no-repeat;\n  background-image: url(../img/gui/ping-team-danger.svg);\n}\n.ui-indicator-ping-border {\n  z-index: 0;\n  display: none;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 160px;\n  height: 160px;\n  position: relative;\n  background-size: 160px;\n  background-repeat: no-repeat;\n  background-image: url(../img/gui/ping-border.svg);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/**\n     * ui-top-left\n     */\n#ui-top-left {\n  position: absolute;\n  color: #FFF;\n  font-size: 16px;\n  top: 12px;\n  left: 12px;\n  display: block;\n}\n@media (max-height: 768px), (max-width: 1200px) {\n  #ui-top-left {\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n}\n.ui-bg-standard {\n  background: rgba(0, 0, 0, 0.24);\n  border-radius: 5px;\n}\n.ui-team-member {\n  display: none;\n  position: relative;\n  width: 200px;\n  height: 32px;\n  padding: 4px;\n  margin-bottom: 8px;\n}\n.ui-team-member-name {\n  font-weight: bold;\n  text-shadow: 1px 1px 0px #000000;\n  font-size: 16px;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ui-team-member-color {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  border-radius: 7px;\n  width: 14px;\n  height: 14px;\n}\n.ui-background-yellow {\n  background-color: #ffff00;\n}\n.ui-background-blue {\n  background-color: blue;\n}\n.ui-background-red {\n  background-color: red;\n}\n.ui-background-purple {\n  background-color: #ff00ff;\n}\n.ui-background-cyan {\n  background-color: #00ffff;\n}\n.ui-background-orange {\n  background-color: #ff5400;\n}\n.ui-team-member-status {\n  display: none;\n  position: absolute;\n  top: 4px;\n  right: -38px;\n  width: 32px;\n  height: 32px;\n  background-size: 32px;\n  background-repeat: no-repeat;\n}\n.ui-team-member-status-downed {\n  border-radius: 16px;\n  display: block !important;\n  background-image: url(../img/gui/down.svg) !important;\n}\n.ui-team-member-status-dead {\n  display: block !important;\n  background-image: url(../img/gui/skull-team.svg) !important;\n  opacity: 0.5 !important;\n}\n.ui-team-member-status-disconnected {\n  display: block !important;\n  background-image: url(../img/gui/close.svg) !important;\n  opacity: 0.5 !important;\n}\n.ui-team-member-health {\n  margin-top: 4px;\n}\n.ui-team-member-health .ui-bar-inner {\n  background-color: white;\n  z-index: 1;\n  position: absolute;\n  border-radius: 4px;\n  width: 200px;\n  height: 10px;\n  transition: width 0.0s;\n  transition-property: width;\n  transition-duration: 0.0s;\n  transition-timing-function: ease-out;\n  transition-delay: initial;\n}\n.ui-team-member-health .ui-bar-danger {\n  background: rgba(255, 0, 0, 0.8);\n  -webkit-animation-name: pulse;\n          animation-name: pulse;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-fill-mode: none;\n          animation-fill-mode: none;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.ui-team-member-health .ui-health-depleted {\n  z-index: 0;\n  background: #929292;\n  transition: width 1.0s;\n  transition-property: width;\n  transition-duration: 1.0s;\n  transition-timing-function: ease-out;\n  transition-delay: initial;\n}\n#ui-spectate-options-wrapper {\n  color: #FFF;\n  display: block;\n  left: 12px;\n  position: absolute;\n  top: 12px;\n}\n@media (max-height: 768px), (max-width: 1200px) {\n  #ui-spectate-options-wrapper {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n  }\n}\n#ui-spectate-options {\n  position: relative;\n  pointer-events: all;\n  width: 100%;\n}\n#ui-spectate-buttons {\n  display: inline-block;\n  padding: 8px 8px 0px 8px;\n  text-align: center;\n  width: 192px;\n}\n#ui-spectate-options a {\n  position: relative;\n  color: white;\n  font-size: 16px;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n  background: #50afab;\n  border-bottom: 2px solid #387c79;\n  box-shadow: inset 0 -2px #387c79;\n  cursor: pointer;\n}\n#btn-spectate-prev-player {\n  margin-bottom: 24px;\n}\n#ui-spectate-stats {\n  vertical-align: top;\n  display: none;\n}\n#ui-spectate-stats-header {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 8px;\n}\n#ui-spectate-stats-table {\n  width: 100%;\n  background-color: transparent;\n  margin: auto;\n  margin-right: 0px;\n  border-collapse: collapse;\n}\n#ui-spectate-stats tbody,\n#ui-spectate-stats td,\n#ui-spectate-stats th {\n  padding: 0px 8px 8px 16px;\n  font-size: 18px;\n}\n.ui-spectate-stats-category {\n  width: 130px;\n  color: rgba(255, 255, 255, 0.75);\n}\n.ui-spectate-stats-value {\n  width: 75px;\n  color: white;\n}\n#ui-leaderboard-wrapper {\n  position: absolute;\n  color: #FFF;\n  font-size: 16px;\n  top: 12px;\n  right: 12px;\n  display: flex;\n  font-weight: bold;\n  text-align: center;\n  width: 85px;\n  display: inline-block;\n}\n@media (max-height: 768px), (max-width: 1200px) {\n  #ui-leaderboard-wrapper {\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n}\n#ui-leaderboard-alive {\n  display: none;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  margin-bottom: 8px;\n  padding: 8px;\n  height: 64px;\n  width: 72px;\n}\n#ui-leaderboard-alive-faction {\n  display: none;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  height: 74px;\n  line-height: 38px;\n  margin-bottom: 8px;\n  padding: 4px;\n  width: 78px;\n}\n#ui-leaderboard-alive-faction .ui-players-alive-red {\n  color: #ff0000;\n  display: block;\n  font-size: 36px;\n  position: relative;\n}\n#ui-leaderboard-alive-faction .ui-players-alive-blue {\n  color: #00d2ff;\n  display: block;\n  font-size: 36px;\n  position: relative;\n}\n.ui-players-alive {\n  position: relative;\n  font-size: 54px;\n}\n.ui-leaderboard-header {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\n#ui-kill-counter-wrapper {\n  display: none;\n  margin-top: 32px;\n}\n#ui-kill-counter {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  margin-bottom: 8px;\n  padding: 8px;\n  height: 64px;\n  width: 72px;\n}\n.ui-player-kills {\n  position: relative;\n  font-size: 54px;\n}\n.ui-kill-counter-header {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\n#ui-killfeed-wrapper {\n  position: absolute;\n  color: #FFF;\n  font-size: 16px;\n  top: 12px;\n  right: 12px;\n  display: flex;\n}\n@media screen and (min-width: 851px) and (max-height: 768px), (max-width: 1200px) {\n  #ui-killfeed-wrapper {\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n}\n#ui-killfeed {\n  display: inline-block;\n  margin-left: 24px;\n  height: 100px;\n}\n#ui-killfeed-contents {\n  width: 800px;\n}\n#ui-killfeed-contents .killfeed-div {\n  position: absolute;\n  right: 100px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 4px 8px;\n  border-radius: 2px;\n  height: 22px;\n  line-height: 24px;\n}\n.killfeed-div div {\n  float: left;\n  font-size: 16px;\n  font-weight: bold;\n  color: #EFEEEE;\n}\n#ui-killfeed .killfeed-text {\n  max-width: 550px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/**\n * ui-right-center\n */\n#ui-right-center:hover {\n  opacity: 1;\n}\n#ui-ammo-interactive {\n  width: 90px;\n}\n.ui-ammo {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  display: inline-block;\n  height: 52px;\n  margin-bottom: 5px;\n  margin-left: 3px;\n  margin-right: 3px;\n  width: 35px;\n}\n.ui-ammo > .ui-loot-count {\n  position: absolute;\n  font-size: 20px;\n  font-weight: bold;\n  top: 28px;\n  text-align: center;\n  width: 100%;\n}\n.ui-ammo-row {\n  display: flex;\n}\n.ui-ammo-row > div:not(:last-child) {\n  margin-right: 10px;\n}\n.ui-ammo > .ui-loot-image {\n  bottom: 0;\n  height: 22px;\n  margin-top: 5px;\n  position: absolute;\n  right: 6px;\n  top: 0;\n  width: 22px;\n}\n.ui-ammo > .ui-loot-overlay {\n  bottom: 0;\n  height: 22px;\n  margin-top: 5px;\n  position: absolute;\n  right: 6px;\n  top: 0;\n  width: 22px;\n}\n#ui-loot-ph1 {\n  opacity: 0 !important;\n}\n#ui-medical-interactive {\n  margin-bottom: 32px;\n}\n.ui-medical > .ui-loot-image {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  background-size: 30px;\n  background-repeat: no-repeat;\n  right: 5px;\n  margin-top: 1px;\n  top: 0;\n  bottom: 0;\n}\n.ui-medical:hover {\n  cursor: pointer !important;\n}\n.ui-loot {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  width: 85px;\n  height: 32px;\n  margin-left: auto;\n  margin-bottom: 5px;\n}\n.ui-loot:hover {\n  opacity: 1 !important;\n}\n.ui-outline-hover {\n  border: 2px solid rgba(0, 255, 0, 0);\n}\n.ui-outline-hover:hover {\n  -webkit-transition: border 100ms ease-out;\n  -moz-transition: border 100ms ease-out;\n  -o-transition: border 100ms ease-out;\n  border: 2px solid #00ff00;\n}\n.ui-scale-hover {\n  transform: scale(1);\n  -webkit-transition: all 100ms ease-in;\n  -webkit-transform: scale(1);\n  -ms-transition: all 100ms ease-in;\n  -ms-transform: scale(1);\n  -moz-transition: all 100ms ease-in;\n  -moz-transform: scale(1);\n  transition: all 100ms ease-in;\n}\n.ui-scale-hover:hover {\n  -webkit-transition: all 100ms ease-in;\n  -webkit-transform: scale(1.1);\n  -ms-transition: all 100ms ease-in;\n  -ms-transform: scale(1.1);\n  -moz-transition: all 100ms ease-in;\n  -moz-transform: scale(1.1);\n  transition: all 100ms ease-in;\n  transform: scale(1.1);\n}\n.ui-loot > .ui-loot-count {\n  position: absolute;\n  font-size: 24px;\n  font-weight: bold;\n  left: 10px;\n  top: 2px;\n  text-align: center;\n}\n@media (max-height: 864px), (max-width: 1024px) {\n  .ui-right-center-desktop {\n    top: 42%;\n    -webkit-transform-origin: right;\n            transform-origin: right;\n    -webkit-transform: translateY(-50%) scale(0.8);\n            transform: translateY(-50%) scale(0.8);\n  }\n  #ui-medical-interactive {\n    margin-bottom: 8px;\n  }\n}\n@media (max-height: 640px) {\n  .ui-right-center-desktop {\n    top: 42%;\n    -webkit-transform-origin: right;\n            transform-origin: right;\n    -webkit-transform: translateY(-50%) scale(0.7);\n            transform: translateY(-50%) scale(0.7);\n  }\n  #ui-medical-interactive {\n    margin-bottom: 8px;\n  }\n}\n/**\n     * ui-upper-center\n     */\n#ui-upper-center {\n  position: absolute;\n  display: flex;\n  color: #FFF;\n  top: 180px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n#ui-announcement {\n  display: none;\n  color: yellow;\n  text-shadow: 2px 2px 0px #000000;\n  font-size: 32px;\n  font-weight: bold;\n  text-align: center;\n  width: 100vw;\n}\n/**\n     * ui-lower-center\n     */\n#ui-lower-center {\n  position: absolute;\n  color: #FFF;\n  bottom: 40%;\n  left: 50%;\n}\n@media screen and (min-width: 851px) and (max-height: 768px), (max-width: 1200px) {\n  #ui-lower-center {\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n    bottom: 33%;\n  }\n}\n#ui-interaction {\n  display: flex;\n}\n#ui-interaction-press {\n  background: rgba(0, 0, 0, 0.4);\n  background-size: 80%;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  font-weight: 700;\n  margin-left: -24px;\n  text-align: center;\n}\n.ui-interaction-large {\n  font-size: 42px;\n  height: 48px;\n  width: 48px;\n}\n.ui-interaction-small {\n  font-size: 26px;\n  height: 36px;\n  line-height: 36px;\n  min-width: 24px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n#ui-interaction-outer {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  margin-left: 10px;\n  padding: 0px 15px;\n  height: 48px;\n}\n#ui-interaction-outer #ui-interaction-description {\n  margin-top: 10px;\n  font-size: 24px;\n  text-align: center;\n}\n/**\n     * ui-bottom-left\n     */\n#ui-map-container {\n  position: absolute;\n  bottom: 52px;\n}\n#ui-map-info {\n  position: absolute;\n  color: white;\n  width: 100px;\n  height: 36px;\n  bottom: 218px;\n  left: 82px;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n}\n#ui-gas-icon {\n  padding: 6px;\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  margin-left: 2px;\n  background-size: 24px;\n  background-repeat: no-repeat;\n  background-position: 6px 6px;\n}\n.gas-icon {\n  background-image: url(../img/gui/gas.svg);\n}\n.danger-icon {\n  background-image: url(../img/gui/danger.svg);\n}\n.icon-pulse {\n  -webkit-animation: pulse 2s linear infinite;\n  animation: pulse 2s linear infinite;\n}\n#ui-gas-timer {\n  position: relative;\n  display: inline-block;\n  font-size: 24px;\n  text-align: center;\n  bottom: 10px;\n  left: 0px;\n}\n#ui-spec-counter {\n  position: absolute;\n  color: white;\n  width: 68px;\n  height: 28px;\n  bottom: 218px;\n  left: 6px;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n}\n#ui-spec-counter-icon {\n  padding: 6px;\n  display: inline-block;\n  height: 24px;\n  width: 18px;\n  margin-left: 2px;\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: 6px 4px;\n  background-image: url(../img/gui/eye.svg);\n}\n#ui-spec-counter-number {\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  width: 24px;\n  text-align: center;\n  bottom: 15px;\n  left: 0px;\n}\n#ui-settings-container-desktop {\n  position: relative;\n  left: 16px;\n  bottom: 12px;\n}\n#ui-settings-container-desktop div {\n  cursor: pointer;\n}\n.ui-settings-button {\n  position: absolute;\n  color: white;\n  border-radius: 5px;\n  height: 48px;\n  width: 48px;\n  pointer-events: all;\n  opacity: 0.5;\n  background: rgba(0, 0, 0, 0.4);\n}\n#ui-map-minimize {\n  left: 185px;\n}\n.ui-settings-button img {\n  position: absolute;\n  left: 6px;\n  top: 6px;\n  height: 36px;\n  width: 36px;\n  background-size: 36px;\n  background-repeat: no-repeat;\n  transform: scale(1);\n  -webkit-transition: all 100ms ease-in;\n  -webkit-transform: scale(1);\n  -ms-transition: all 100ms ease-in;\n  -ms-transform: scale(1);\n  -moz-transition: all 100ms ease-in;\n  -moz-transform: scale(1);\n  transition: all 100ms ease-in;\n  transition: opacity 0.25s ease-out;\n  -moz-transition: opacity 0.25s ease-out;\n  -webkit-transition: opacity 0.25s ease-out;\n  -o-transition: opacity 0.25s ease-out;\n}\n.ui-settings-button .map-img-after {\n  display: none;\n}\n.ui-settings-button:hover {\n  opacity: 1;\n  -webkit-transition: all 100ms ease-in;\n  -webkit-transform: scale(1.1);\n  -ms-transition: all 100ms ease-in;\n  -ms-transform: scale(1.1);\n  -moz-transition: all 100ms ease-in;\n  -moz-transform: scale(1.1);\n  transition: all 100ms ease-in;\n  transform: scale(1.1);\n}\n/**\n     * ui-bottom-center-0\n     */\n#ui-bottom-center-0 {\n  position: absolute;\n  color: #FFF;\n  bottom: 12px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n@media (max-height: 768px), (max-width: 1200px) {\n  #ui-bottom-center-0 {\n    -webkit-transform-origin: bottom;\n            transform-origin: bottom;\n    -webkit-transform: translateX(-50%) scale(0.85);\n            transform: translateX(-50%) scale(0.85);\n  }\n}\n#ui-equipped-ammo-wrapper {\n  /* Taken from ui-bottom-center-0 */\n  position: absolute;\n  color: #FFF;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  bottom: 62px;\n}\n#ui-equipped-ammo {\n  margin-bottom: 12px;\n  text-align: center;\n  opacity: 1.0;\n}\n#ui-bullet-counter {\n  display: inline-block;\n  width: 175px;\n  height: 56px;\n  text-align: center;\n  text-shadow: 2px 2px #000000;\n}\n#ui-bullet-counter #ui-current-clip {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  font-size: 44px;\n  font-weight: bold;\n  width: 100px;\n  height: 50px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 50%;\n  position: relative;\n  text-align: center;\n}\n#ui-bullet-counter #ui-remaining-ammo {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 32px;\n  width: 65px;\n  height: 32px;\n  left: 82%;\n  position: absolute;\n  text-align: center;\n  top: 18px;\n}\n#ui-boost-counter {\n  display: inline-flex;\n  width: 412px;\n}\n#ui-boost-counter .ui-boost-base {\n  background: rgba(0, 0, 0, 0.4);\n  height: 10px;\n  margin-bottom: 8px;\n}\n#ui-boost-counter-0 {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  width: 100px;\n  margin-right: 3px;\n}\n#ui-boost-counter-0 .ui-bar-inner {\n  background: #ff901a;\n}\n#ui-boost-counter-1 {\n  width: 100px;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n#ui-boost-counter-1 .ui-bar-inner {\n  background: #ff751a;\n}\n#ui-boost-counter-2 {\n  width: 150px;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n#ui-boost-counter-2 .ui-bar-inner {\n  background: #ff6616;\n}\n#ui-boost-counter-3 {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  width: 50px;\n  margin-left: 3px;\n}\n#ui-boost-counter-3 .ui-bar-inner {\n  background: #ff5600;\n}\n.ui-boost-base .ui-bar-inner {\n  border-radius: inherit;\n  width: 0px;\n  height: 10px;\n}\n.ui-health-flair {\n  background-size: 64px;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: none;\n  height: 64px;\n  position: absolute;\n  width: 64px;\n  z-index: 2;\n}\n#ui-health-flair-left {\n  left: -32px;\n  top: 13px;\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n#ui-health-flair-right {\n  right: -32px;\n  top: 13px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n#ui-health-counter {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  width: 400px;\n  height: 32px;\n  padding: 6px;\n}\n#ui-health-counter .ui-bar-inner {\n  z-index: 1;\n  position: absolute;\n  border-radius: 5px;\n  width: 100%;\n  height: 32px;\n  transition: width 0.0s;\n  transition-property: width;\n  transition-duration: 0.0s;\n  transition-timing-function: ease-out;\n  transition-delay: initial;\n}\n#ui-health-container {\n  width: 400px;\n  position: relative;\n}\n#ui-health-counter .ui-bar-danger {\n  background: rgba(255, 0, 0, 0.8);\n  -webkit-animation-name: pulse;\n          animation-name: pulse;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-fill-mode: none;\n          animation-fill-mode: none;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n#ui-health-counter #ui-health-depleted {\n  z-index: 0;\n  background: #929292;\n  transition: width 1.0s;\n  transition-property: width;\n  transition-duration: 1.0s;\n  transition-timing-function: ease-out;\n  transition-delay: initial;\n}\n.health-bar-pulse {\n  -webkit-animation: pulsewhite 1s linear infinite;\n  animation: pulsewhite 1s linear infinite;\n}\n@-webkit-keyframes pulsewhite {\n  0% {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  50% {\n    background-color: rgba(255, 255, 255, 0.6);\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@keyframes pulsewhite {\n  0% {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  50% {\n    background-color: rgba(255, 255, 255, 0.6);\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@-webkit-keyframes pulse {\n  0% {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n  50% {\n    background-color: rgba(255, 0, 0, 0.8);\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n@keyframes pulse {\n  0% {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n  50% {\n    background-color: rgba(255, 0, 0, 0.8);\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n/**\n     * ui-bottom-center-1\n     */\n#ui-bottom-center-1 {\n  z-index: 3;\n  position: absolute;\n  color: #FFF;\n  bottom: 220px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n@media (max-height: 768px), (max-width: 1200px) {\n  #ui-bottom-center-1 {\n    -webkit-transform-origin: bottom;\n            transform-origin: bottom;\n    -webkit-transform: translateX(-50%) scale(0.85);\n            transform: translateX(-50%) scale(0.85);\n    bottom: 138px;\n  }\n}\n#ui-kills {\n  display: none;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.4);\n  color: #FFF;\n  border-radius: 5px;\n  padding: 8px;\n}\n#ui-kill-text {\n  font-size: 18px;\n}\n#ui-kill-count {\n  font-weight: bold;\n  color: #ff4100;\n  font-size: 32px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);\n}\n/**\n     * ui-bottom-center-2\n     */\n#ui-bottom-center-2 {\n  position: absolute;\n  color: #FFF;\n  bottom: 160px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n#ui-pickup-message {\n  color: white;\n  opacity: 0;\n  text-shadow: 2px 2px 0px #000000;\n  font-size: 32px;\n  font-weight: bold;\n  text-align: center;\n  width: 100vw;\n}\n/**\n * ui-bottom-center-left\n */\n#ui-bottom-center-left {\n  bottom: 12px;\n  color: #FFF;\n  pointer-events: auto;\n  position: absolute;\n  right: 73%;\n}\n@media (max-height: 768px), (max-width: 1200px) {\n  #ui-bottom-center-left {\n    right: 75%;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n}\n#ui-perk-0 {\n  border: 2px solid transparent;\n  display: none;\n  left: 4px;\n}\n#ui-perk-1 {\n  border: 2px solid transparent;\n  display: none;\n  right: 0px;\n}\n.ui-perk-pulse {\n  -webkit-animation-name: perkPulse;\n  -webkit-animation-duration: 1.5s;\n  -webkit-animation-iteration-count: 2;\n}\n@-webkit-keyframes perkPulse {\n  from {\n    background-color: rgba(0, 0, 0, 0.4);\n    -webkit-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);\n  }\n  50% {\n    background-color: rgba(255, 210, 0, 0.75);\n    -webkit-box-shadow: 0px 0px 30px #ffd200;\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.4);\n    -webkit-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);\n  }\n}\n/* Tooltip container */\n.tooltip-perk {\n  position: relative;\n}\n/* Tooltip text */\n.tooltip-perk .tooltip-text {\n  visibility: hidden;\n  width: 180px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  opacity: 0.75;\n  bottom: 115%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.tooltip-perk .tooltip-text::after {\n  content: " ";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: black transparent transparent transparent;\n}\n.tooltip-perk-title {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 4px;\n  color: yellow;\n}\n.tooltip-perk-description {\n  font-size: 16px;\n  padding: 4px;\n}\n.tooltip-perk-description span {\n  font-size: 16px;\n}\n.tooltip-perk:hover .tooltip-text {\n  visibility: visible;\n}\n/**\n * ui-bottom-center-right\n */\n#ui-bottom-center-right {\n  position: absolute;\n  color: #FFF;\n  bottom: 12px;\n  left: 73%;\n}\n@media (max-height: 768px), (max-width: 1200px) {\n  #ui-bottom-center-right {\n    left: 75%;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n}\n.ui-armor-counter {\n  position: absolute;\n  bottom: 0px;\n  display: block;\n  width: 48px;\n  height: 60px;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  margin-left: 4px;\n}\n#ui-armor-helmet {\n  right: 4px;\n}\n#ui-armor-backpack {\n  left: 60px;\n  border: 2px solid transparent;\n}\n.ui-armor-level {\n  position: relative;\n  font-size: 16px;\n  font-weight: bold;\n  bottom: 24px;\n  text-align: center;\n  text-shadow: 1px 1px #000000;\n  /*cursor: inherit;*/\n}\n.ui-armor-counter-inner {\n  z-index: 1;\n  position: absolute;\n  background: rgba(25, 25, 25, 0.75);\n  border-radius: 5px;\n  width: 100%;\n  height: 0px;\n  bottom: 0px;\n}\n.ui-armor-counter .ui-armor-count {\n  z-index: 2;\n  text-shadow: 2px 2px #000000;\n  position: relative;\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: -28px;\n  text-align: center;\n}\n.ui-armor-counter .ui-armor-image {\n  margin: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 0;\n  position: absolute;\n  height: 36px;\n  width: 36px;\n}\n.ui-ability-cooldown {\n  font-size: 38px;\n  font-weight: bold;\n  left: 50%;\n  position: absolute;\n  text-align: center;\n  text-shadow: 2px 2px #000000;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%;\n  z-index: 2;\n}\n@media screen and (max-width: 850px) {\n  .ui-ability-cooldown {\n    font-size: 20px;\n  }\n}\n.ui-ability-key {\n  font-size: 20px;\n  font-weight: bold;\n  left: 2px;\n  position: absolute;\n  bottom: -2px;\n}\n.ui-perk-mobile {\n  bottom: 0px !important;\n  left: -50px;\n  pointer-events: all;\n  top: 4px !important;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n/**\n * ui-bottom-right\n */\n#ui-bottom-right {\n  position: absolute;\n  color: #FFF;\n  bottom: 12px;\n  right: 12px;\n}\n@media (max-height: 768px), (max-width: 1200px) {\n  #ui-bottom-right {\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n}\n#ui-weapon-container {\n  width: 192px;\n}\n.ui-weapon-info {\n  margin-bottom: 5px;\n  border-radius: 5px;\n  border: 2px solid transparent;\n}\n.ui-weapon-switch {\n  position: absolute;\n  right: 0px;\n  opacity: 0.6;\n  border-radius: 5px;\n  border: 2px solid transparent;\n  width: 160px;\n  height: 60px;\n  margin-left: auto;\n  pointer-events: all;\n  cursor: pointer !important;\n}\n#ui-weapon-id-1 {\n  bottom: 210px;\n}\n#ui-weapon-id-2 {\n  bottom: 140px;\n}\n#ui-weapon-id-3 {\n  bottom: 70px;\n}\n#ui-weapon-id-4 {\n  bottom: 0px;\n}\n.ui-weapon-name {\n  position: absolute;\n  font-size: 18px;\n  font-weight: bold;\n  right: 8px;\n  margin-top: 38px;\n  text-align: center;\n}\n.ui-weapon-number {\n  position: absolute;\n  font-size: 24px;\n  font-weight: bold;\n  right: 8px;\n  text-align: center;\n}\n.ui-weapon-exp {\n  display: none;\n  position: absolute;\n  height: 32px;\n  width: 32px;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 34px;\n  right: 78px;\n  margin-top: 26px;\n  text-align: center;\n}\n.ui-weapon-image {\n  display: none;\n  position: relative;\n  height: 60px;\n  width: 60px;\n  left: 4px;\n  background-size: 60px;\n  background-repeat: no-repeat;\n}\n#ui-weapon-id-4 .ui-weapon-image {\n  height: 52px;\n  width: 52px;\n  left: 4px;\n  top: 4px;\n  background-size: 52px;\n}\n.ui-weapon-dragged {\n  position: fixed !important;\n  width: 160px !important;\n  right: initial !important;\n  bottom: initial !important;\n  pointer-events: none !important;\n}\n/**\n     * ui-stats, end game screen\n     */\n#ui-stats {\n  display: none;\n}\n#ui-stats-bg {\n  display: none;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n  pointer-events: none;\n  z-index: 2;\n}\n#ui-stats-contents {\n  border-radius: 5px;\n  color: #FFF;\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  text-align: center;\n  top: 0%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 100%;\n  z-index: 3;\n}\n@media (max-height: 860px) {\n  #ui-stats-contents {\n    top: 0%;\n  }\n}\n#ui-stats-contents-inner {\n  margin-top: 75px;\n}\n@media (max-height: 768px) {\n  #ui-stats-contents-inner {\n    margin-top: 25px;\n  }\n}\n@media screen and (max-width: 850px) {\n  #ui-stats-contents-inner {\n    margin-top: 0px;\n  }\n}\n@media (max-height: 768px) {\n  #ui-stats-header {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n  }\n}\n.ui-stats-header-title {\n  font-weight: bold;\n  font-size: 48px;\n  margin: 20px;\n  color: gold;\n}\n.ui-stats-header-reason {\n  font-size: 24px;\n}\n.ui-stats-header-overview {\n  display: inline;\n  margin: 10px;\n}\n.ui-stats-header-overview div {\n  display: inline;\n  padding-bottom: 12px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.25);\n}\n.ui-stats-header-overview div:not(:first-child) {\n  margin-left: 100px;\n}\n.ui-stats-header-red-team {\n  color: #cc0000;\n  font-weight: bold;\n}\n.ui-stats-header-blue-team {\n  color: #007eff;\n  font-weight: bold;\n}\nspan.ui-stats-header-stat {\n  font-size: 32px;\n}\nspan.ui-stats-header-value {\n  margin-left: 24px;\n  font-size: 48px;\n  font-weight: bold;\n}\n#ui-stats-info-box {\n  position: relative;\n  left: 50%;\n  margin: auto;\n  margin-top: 50px;\n  height: 190px;\n  display: flex;\n}\n@media (max-height: 768px) {\n  #ui-stats-info-box {\n    margin-top: -30px;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    -webkit-transform-origin: left;\n            transform-origin: left;\n  }\n}\n@media (max-width: 1024px) {\n  #ui-stats-info-box {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n    -webkit-transform-origin: left;\n            transform-origin: left;\n  }\n}\n.ui-stats-info-player {\n  position: relative;\n  width: 250px;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n  border: 2px solid black;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.ui-stats-info-status:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 15%;\n  left: 25%;\n  background-image: url(../img/gui/skull.svg);\n  background-repeat: no-repeat;\n  background-size: 128px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  z-index: -1;\n}\n.ui-stats-info-player-name {\n  color: gold;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: italic;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 240px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ui-stats-info-player-badge {\n  background-size: 56px;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 56px;\n  left: auto;\n  position: absolute;\n  top: -40px;\n  width: 100%;\n}\n.ui-stats-info-player-red-leader {\n  background-image: url(../img/gui/star-red.svg);\n}\n.ui-stats-info-player-red-ribbon {\n  background-image: url(../img/gui/ribbon-red.svg);\n}\n.ui-stats-info-player-blue-leader {\n  background-image: url(../img/gui/star-blue.svg);\n}\n.ui-stats-info-player-blue-ribbon {\n  background-image: url(../img/gui/ribbon-blue.svg);\n}\n.ui-stats-info {\n  display: flex;\n  height: 36px;\n  margin: auto;\n}\n.ui-stats-info > div {\n  padding: 8px;\n  font-size: 18px;\n  line-height: 12px;\n  text-align: left;\n  font-weight: bold;\n}\n.ui-stats-info > div:first-child {\n  width: 55%;\n  margin-right: 4px;\n  text-align: right;\n  font-weight: normal;\n}\n.ui-stats-reason {\n  display: flex;\n  height: 72px;\n  margin: auto;\n}\n.ui-stats-reason div {\n  padding: 8px;\n  margin: auto;\n  width: 100%;\n  text-align: center;\n  font-size: 16px;\n}\n.ui-stats-reason .ui-stats-reason-dead {\n  color: red;\n}\n.ui-stats-reason .ui-stats-reason-alive {\n  color: lawngreen;\n}\n#ui-stats-options {\n  position: absolute;\n  left: 50%;\n  margin-top: 20px;\n  min-height: 60px;\n  z-index: 1;\n}\n@media (max-height: 768px) {\n  #ui-stats-options {\n    margin-top: 8px;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n  }\n}\n.ui-stats-restart {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 200px;\n  margin: auto;\n  margin-bottom: 20px;\n}\n.ui-stats-spectate {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 102px;\n  width: 125px;\n  background: #50afab;\n  border-bottom: 2px solid #387c79;\n  box-shadow: inset 0 -2px #387c79;\n}\n.ui-stats-ad-container {\n  display: none;\n  margin-top: 80px;\n}\n@media (max-height: 768px) {\n  .ui-stats-ad-container {\n    margin-top: 70px;\n  }\n}\n/* Tooltip container */\n.tooltip {\n  position: relative;\n}\n/* Tooltip text */\n.tooltip .tooltip-text {\n  visibility: hidden;\n  width: 240px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  right: 110%;\n  opacity: 0.75;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.tooltip .tooltip-text::after {\n  content: " ";\n  position: absolute;\n  top: 50%;\n  left: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent transparent black;\n}\n.tooltip-title {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 4px;\n  color: yellow;\n}\n.tooltip-description {\n  font-size: 16px;\n  padding: 4px;\n}\n.tooltip-description span {\n  font-size: 16px;\n}\n.tooltip:hover .tooltip-text {\n  visibility: visible;\n}\n/**\n     * editor\n     */\n#ui-editor-top-center {\n  position: absolute;\n  color: #FFF;\n  top: 0%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n#ui-editor-top-right {\n  position: absolute;\n  color: #FFF;\n  font-size: 16px;\n  top: 12px;\n  right: 12px;\n}\n.ui-editor-header {\n  text-align: center;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 8px;\n}\n.ui-editor-info {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  font-size: 36px;\n  margin-bottom: 8px;\n  padding: 8px;\n}\n.ui-editor-list {\n  margin: 0px;\n  list-style: none;\n}\n#ui-editor-info-list {\n  padding: 0px;\n}\n/*\n     * Profiler\n     */\n#ui-profiler-top-left {\n  position: absolute;\n  color: #FFF;\n  font-size: 16px;\n  top: 12px;\n  left: 12px;\n  text-align: center;\n  display: flex;\n}\n.ui-profiler-list {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  margin-right: 16px;\n  padding: 8px;\n}\n.ui-profiler-list-header {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n.ui-profiler-list ul {\n  list-style: none;\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n}\n.ui-profiler-list li {\n  display: flex;\n}\n.kv {\n  font-family: monospace;\n  font-size: 14px;\n  font-weight: normal;\n}\n.kv:last-child {\n  width: 100%;\n  text-align: right;\n}\n/* Hide mobile-only elements */\n#ui-settings-container-mobile {\n  display: none;\n}\n@media screen and (max-width: 850px) {\n  * {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  /**\n * ui-touches\n */\n  .ui-touch-down {\n    display: none;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  .ui-touch-down-landscape {\n    width: 112px;\n    height: 112px;\n    border-radius: 56px;\n  }\n  .ui-touch-down-portrait {\n    width: 96px;\n    height: 96px;\n    border-radius: 48px;\n  }\n  .ui-touch-pos {\n    display: none;\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  .ui-touch-pos-landscape {\n    width: 64px;\n    height: 64px;\n    border-radius: 32px;\n  }\n  .ui-touch-pos-portrait {\n    width: 48px;\n    height: 48px;\n    border-radius: 24px;\n  }\n  .btn-game-menu {\n    position: relative;\n    margin: auto;\n    margin-top: 2px;\n    margin-bottom: 4px;\n    color: white;\n    font-size: 14px;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n    background-color: #50afab;\n    border-bottom: 2px solid #387c79;\n    box-shadow: inset 0 -2px #387c79;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    text-align: center;\n    line-height: 30px;\n    display: block;\n    width: 100%;\n    height: 30px;\n    border: 0px;\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    box-sizing: border-box;\n  }\n  #btn-game-fullscreen {\n    background-size: 22px;\n    background-position: 4px 2px;\n    background-image: url(../img/gui/minimize.svg);\n  }\n  #btn-game-aim-line {\n    background-size: 18px;\n    background-position: 6px 5px;\n    margin-bottom: 8px;\n  }\n  #btn-game-sound {\n    background-size: 30px;\n    background-position: 3px 0px;\n    margin-bottom: 8px;\n  }\n  #btn-game-quit {\n    margin-top: 20px;\n    background-size: 34px;\n    background-position: -2px -3px;\n    background-image: url(../img/gui/quit.svg);\n  }\n  #btn-game-resume {\n    margin-top: 20px;\n    background-size: 34px;\n    background-position: -1px -1px;\n    background-image: url(../img/gui/resume.svg);\n  }\n  /**\n     * ui-top-center\n     */\n  #ui-top-center {\n    position: absolute;\n    color: #FFF;\n    top: 15%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  #ui-top-center .top-center-text {\n    text-align: center;\n    width: 100vw;\n    padding: 4px;\n  }\n  #ui-waiting-text {\n    display: none;\n    color: white;\n    text-shadow: 1px 1px 0px #000000;\n    font-size: 16px;\n    font-weight: bold;\n  }\n  #ui-waiting-text span {\n    font-size: 16px;\n    font-weight: bold;\n  }\n  .top-center-text .spectate-text {\n    display: inline-block;\n    text-shadow: 1px 1px 0px #000000;\n    font-size: 16px;\n    font-weight: bold;\n    overflow: hidden;\n    height: 32px;\n  }\n  .top-center-text .spectate-desc {\n    color: white;\n    margin-right: 8px;\n  }\n  .ui-spectate-mode {\n    display: none;\n  }\n  #ui-spectate-text {\n    position: relative;\n  }\n  #spectate-player {\n    max-width: 250px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    color: cyan;\n  }\n  /**\n * ui-top-center-scopes\n */\n  #ui-top-center-scopes-wrapper {\n    position: absolute;\n    color: #FFF;\n    left: 6px;\n    top: 132px;\n    -webkit-transform: initial;\n            transform: initial;\n    width: initial;\n  }\n  #ui-top-center-scopes {\n    margin-top: 6px;\n    text-align: center;\n    color: white;\n  }\n  .ui-zoom {\n    display: inline-block;\n    margin-left: -12px;\n    margin-right: -12px;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    background: rgba(0, 0, 0, 0.3);\n    border-radius: 32px;\n    width: 42px;\n    height: 42px;\n    opacity: 0.3;\n    pointer-events: all;\n  }\n  .ui-zoom-active {\n    vertical-align: baseline;\n    opacity: 1.0;\n    margin-left: 0px;\n    margin-right: 0px;\n    -webkit-transition: all 100ms ease-in;\n    -webkit-transform: scale(1);\n    -ms-transition: all 100ms ease-in;\n    -ms-transform: scale(1);\n    -moz-transition: all 100ms ease-in;\n    -moz-transform: scale(1);\n    transition: all 100ms ease-in;\n    transition: opacity 0.25s ease-out;\n    -moz-transition: opacity 0.25s ease-out;\n    -webkit-transition: opacity 0.25s ease-out;\n    -o-transition: opacity 0.25s ease-out;\n  }\n  .ui-zoom .ui-zoom-image {\n    width: 48px;\n    height: 48px;\n    opacity: 0.4;\n    padding: 2px;\n  }\n  .ui-zoom .ui-zoom-text {\n    margin-top: 14px;\n    width: 100%;\n  }\n  .ui-zoom .ui-zoom-level {\n    font-size: 24px;\n    line-height: 16px;\n    text-align: center;\n    width: 100%;\n    /*cursor: inherit;*/\n  }\n  .ui-zoom .ui-zoom-append {\n    font-size: 24px;\n  }\n  .ui-zoom-inactive {\n    display: none;\n    margin-left: -8px;\n    margin-right: -8px;\n    transition: all 100ms ease-in;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n  /**\n     * ui-team-pings and ui-emotes\n     */\n  .ui-emote-wheel {\n    z-index: 3;\n    display: none;\n    position: fixed;\n  }\n  .ui-emote-parent {\n    opacity: 1.0;\n  }\n  .ui-emote-hl {\n    z-index: 2;\n    display: none;\n  }\n  .ui-emote {\n    position: fixed;\n    width: 256px;\n    height: 256px;\n    background-size: 256px;\n    background-repeat: no-repeat;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  .ui-emote-bg-circle {\n    opacity: 0.65;\n    background-image: url(../img/gui/ping-part-circle.svg);\n  }\n  .ui-emote-bg-quarter {\n    opacity: 0.65;\n    background-image: url(../img/gui/ping-part-quarter.svg);\n  }\n  .ui-emote-bg-eighth {\n    opacity: 0.65;\n    background-image: url(../img/gui/ping-part-eighth.svg);\n  }\n  .ui-emote-middle .ui-emote-image {\n    width: 24px !important;\n    height: 24px !important;\n    background-size: 24px !important;\n    background-image: none !important;\n  }\n  .ui-emote-top .ui-emote-image {\n    margin-top: -78px;\n    background-image: url(../img/gui/ping-team-danger.svg);\n  }\n  .ui-emote-right .ui-emote {\n    -webkit-transform: translate(-50%, -50%) rotate(90deg);\n            transform: translate(-50%, -50%) rotate(90deg);\n  }\n  .ui-emote-right .ui-emote-image {\n    margin-left: 78px;\n    background-image: url(../img/gui/ping-team-coming.svg);\n  }\n  .ui-emote-bottom .ui-emote {\n    -webkit-transform: translate(-50%, -50%) rotate(180deg);\n            transform: translate(-50%, -50%) rotate(180deg);\n  }\n  .ui-emote-bottom .ui-emote-image {\n    margin-top: 78px;\n    background-image: url(../img/gui/ping-team-help.svg);\n  }\n  .ui-emote-left .ui-emote {\n    -webkit-transform: translate(-50%, -50%) rotate(270deg);\n            transform: translate(-50%, -50%) rotate(270deg);\n  }\n  .ui-emote-left .ui-emote-image {\n    margin-left: -78px;\n    background-image: url(../img/gui/ping-team-help.svg);\n  }\n  .ui-emote-top-left .ui-emote-image {\n    margin-left: -80px;\n    margin-top: -30px;\n    background-image: url(../img/loot/loot-ammo-box.svg);\n  }\n  .ui-emote-bottom-left .ui-emote {\n    -webkit-transform: translate(-50%, -50%) rotate(-45deg);\n            transform: translate(-50%, -50%) rotate(-45deg);\n  }\n  .ui-emote-bottom-left .ui-emote-image {\n    margin-left: -80px;\n    margin-top: 30px;\n    background-image: url(../img/loot/loot-medical-healthkit.svg);\n  }\n  .ui-emote-circle .ui-emote-hl {\n    background-image: url(../img/gui/ping-part-circle-highlight.svg);\n  }\n  .ui-emote-quarter .ui-emote-hl {\n    background-image: url(../img/gui/ping-part-quarter-highlight.svg);\n  }\n  .ui-emote-eighth .ui-emote-hl {\n    background-image: url(../img/gui/ping-part-eighth-highlight.svg);\n  }\n  .ui-emote-image {\n    z-index: 1;\n    position: fixed;\n    background-repeat: no-repeat;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  .ui-emote-image-large {\n    width: 80px;\n    height: 80px;\n    background-size: 64px;\n    background-position: center;\n  }\n  .ui-emote-image-small {\n    width: 35px;\n    height: 35px;\n    background-size: 35px;\n  }\n  /**\n     * ui-team-indicators\n     */\n  .ui-team-indicator {\n    z-index: 2;\n    display: none;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    border-radius: 32px;\n    width: 64px;\n    height: 64px;\n    background-size: 64px;\n    background-repeat: no-repeat;\n    background-image: url(../img/gui/indicator.svg);\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  .ui-team-indicator-pos {\n    opacity: 0.75;\n    position: relative;\n    border-radius: 24px;\n    width: 32px;\n    height: 32px;\n    top: 23px;\n    left: 32px;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  .ui-team-indicator-image {\n    width: 32px;\n    height: 32px;\n    background-size: 32px;\n    background-repeat: no-repeat;\n    background-image: url(../img/gui/ping-team-danger.svg);\n  }\n  .ui-indicator-ping-border {\n    z-index: 0;\n    display: none;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    width: 160px;\n    height: 160px;\n    position: relative;\n    background-size: 160px;\n    background-repeat: no-repeat;\n    background-image: url(../img/gui/ping-border.svg);\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  /**\n * ui-top-left\n */\n  #ui-top-left {\n    position: absolute;\n    color: #FFF;\n    font-size: 16px;\n    top: 6px;\n    left: 6px;\n    display: block;\n  }\n  .ui-bg-standard {\n    background: rgba(0, 0, 0, 0.24);\n    border-radius: 5px;\n  }\n  #ui-team {\n    position: fixed;\n    left: 128px;\n  }\n  .ui-team-member {\n    display: none;\n    position: relative;\n    width: 110px;\n    height: 20px;\n    padding: 4px;\n    margin-bottom: 4px;\n  }\n  .ui-team-member-name {\n    font-weight: bold;\n    text-shadow: 1px 1px 0px #000000;\n    font-size: 10px;\n    max-width: 100px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .ui-team-member-color {\n    position: absolute;\n    top: 4px;\n    right: 4px;\n    border-radius: 9px;\n    width: 9px;\n    height: 9px;\n  }\n  .ui-background-yellow {\n    background-color: yellow;\n  }\n  .ui-background-blue {\n    background-color: blue;\n  }\n  .ui-background-red {\n    background-color: red;\n  }\n  .ui-background-purple {\n    background-color: purple;\n  }\n  .ui-background-cyan {\n    background-color: cyan;\n  }\n  .ui-team-member-status {\n    display: none;\n    position: absolute;\n    top: 2px;\n    right: -24px;\n    width: 20px;\n    height: 20px;\n    background-size: 20px;\n    background-repeat: no-repeat;\n  }\n  .ui-team-member-status-downed {\n    border-radius: 16px;\n    display: block !important;\n    background-image: url(../img/gui/down.svg) !important;\n  }\n  .ui-team-member-status-dead {\n    display: block !important;\n    background-image: url(../img/gui/skull-team.svg) !important;\n    opacity: 0.5 !important;\n  }\n  .ui-team-member-status-disconnected {\n    display: block !important;\n    background-image: url(../img/gui/close.svg) !important;\n    opacity: 0.5 !important;\n  }\n  .ui-team-member-health {\n    margin-top: 2px;\n  }\n  .ui-team-member-health .ui-bar-inner {\n    background-color: white;\n    z-index: 1;\n    position: absolute;\n    border-radius: 4px;\n    width: 110px;\n    height: 5px;\n    transition: width 0.0s;\n    transition-property: width;\n    transition-duration: 0.0s;\n    transition-timing-function: ease-out;\n    transition-delay: initial;\n  }\n  .ui-team-member-health .ui-bar-danger {\n    background: rgba(255, 0, 0, 0.8);\n    -webkit-animation-name: pulse;\n            animation-name: pulse;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-animation-delay: 0;\n            animation-delay: 0;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-fill-mode: none;\n            animation-fill-mode: none;\n    -webkit-animation-play-state: running;\n            animation-play-state: running;\n  }\n  .ui-team-member-health .ui-health-depleted {\n    z-index: 0;\n    background: #929292;\n    transition: width 1.0s;\n    transition-property: width;\n    transition-duration: 1.0s;\n    transition-timing-function: ease-out;\n    transition-delay: initial;\n  }\n  #ui-spectate-options-wrapper {\n    bottom: 6px;\n    position: fixed;\n    left: 6px;\n    top: initial !important;\n  }\n  #ui-spectate-options {\n    bottom: 0px;\n    z-index: 1;\n    position: absolute;\n    pointer-events: all;\n    width: 100%;\n  }\n  #ui-spectate-buttons {\n    display: inline-block;\n    width: 124px;\n    padding: 8px 8px 4px 8px;\n    text-align: center;\n  }\n  #ui-spectate-options a {\n    position: relative;\n    color: white;\n    height: 28px;\n    margin-bottom: 2px;\n    line-height: 26px;\n    font-size: 12px;\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n    background: #50afab;\n    border-bottom: 2px solid #387c79;\n    box-shadow: none;\n    cursor: pointer;\n  }\n  #btn-spectate-prev-player {\n    margin-bottom: 12px !important;\n  }\n  #btn-spectate-view-stats {\n    margin-bottom: 12px !important;\n  }\n  #ui-spectate-stats {\n    position: absolute;\n    top: 0px;\n    left: 146px;\n    width: 160px;\n    display: none;\n  }\n  #ui-spectate-stats-header {\n    text-align: center;\n    font-size: 16px;\n    font-weight: bold;\n    padding: 6px;\n    color: white;\n  }\n  #ui-spectate-stats-table {\n    width: 100%;\n    background-color: transparent;\n    margin: auto;\n    margin-right: 0px;\n    margin-bottom: 4px;\n    border-collapse: collapse;\n  }\n  #ui-spectate-stats tbody,\n  #ui-spectate-stats td,\n  #ui-spectate-stats th {\n    padding: 0px 2px 2px 14px;\n    font-size: 10px;\n  }\n  .ui-spectate-stats-category {\n    width: 75px;\n    color: rgba(255, 255, 255, 0.75);\n  }\n  .ui-spectate-stats-value {\n    width: 75px;\n    color: white;\n  }\n  /**\n     * ui-top-right\n     */\n  #ui-top-right {\n    position: absolute;\n    color: #FFF;\n    font-size: 16px;\n    top: 6px;\n    left: 6px;\n    display: flex;\n  }\n  #ui-leaderboard {\n    font-weight: bold;\n    text-align: center;\n    width: 56px;\n    display: inline-block;\n  }\n  #ui-leaderboard-alive {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    margin-bottom: -16px;\n    padding: 8px;\n    height: 32px;\n    width: 40px;\n  }\n  .ui-players-alive-pulse {\n    -webkit-animation-name: pulseAlive;\n            animation-name: pulseAlive;\n    -webkit-animation-duration: 2.0s;\n            animation-duration: 2.0s;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-fill-mode: none;\n            animation-fill-mode: none;\n    -webkit-animation-play-state: running;\n            animation-play-state: running;\n  }\n  @-webkit-keyframes pulseAlive {\n    0% {\n      color: #ffffff;\n    }\n    20% {\n      color: #ff0000;\n    }\n    40% {\n      color: #ffffff;\n    }\n    100% {\n      color: #ffffff;\n    }\n  }\n  @keyframes pulseAlive {\n    0% {\n      color: #ffffff;\n    }\n    20% {\n      color: #ff0000;\n    }\n    40% {\n      color: #ffffff;\n    }\n    100% {\n      color: #ffffff;\n    }\n  }\n  .ui-leaderboard-header {\n    font-size: 12px;\n  }\n  #ui-killfeed-wrapper {\n    top: 24px;\n    left: 6px;\n    right: initial;\n  }\n  #ui-killfeed {\n    position: absolute;\n    margin: initial;\n    top: 135px;\n  }\n  #ui-killfeed-contents {\n    width: 800px;\n  }\n  #ui-killfeed-contents .killfeed-div {\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.4);\n    padding: 3px 3px;\n    border-radius: 2px;\n    height: 8px;\n    line-height: 8px;\n    right: initial;\n  }\n  .killfeed-div span,\n  .killfeed-div div {\n    float: left;\n    font-size: 8px;\n    line-height: 8px;\n    font-weight: bold;\n    color: #EFEEEE;\n  }\n  .killfeed-red span,\n  .killfeed-red div {\n    color: #d1777c !important;\n  }\n  .killfeed-blue span,\n  .killfeed-blue div {\n    color: deepskyblue !important;\n  }\n  #ui-killfeed-contents .killfeed-red {\n    color: #d1777c;\n  }\n  #ui-killfeed-contents .killfeed-blue {\n    color: deepskyblue;\n  }\n  #ui-killfeed .killfeed-name {\n    max-width: 180px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  /**\n * ui-right-center\n */\n  #ui-ammo-interactive {\n    position: absolute;\n    right: 4px;\n    top: 0px;\n    width: 90px;\n  }\n  .ui-ammo > .ui-loot-image {\n    position: absolute;\n    height: 11px;\n    width: 11px;\n    right: 2px;\n    margin-top: 2px;\n  }\n  .ui-ammo > .ui-loot-overlay {\n    position: absolute;\n    height: 11px;\n    width: 11px;\n    right: 2px;\n    margin-top: 2px;\n  }\n  .ui-ammo {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    width: 85px;\n    height: 32px;\n    margin-left: auto;\n    margin-bottom: 5px;\n  }\n  .ui-ammo > .ui-loot-count {\n    position: absolute;\n    font-size: 24px;\n    font-weight: bold;\n    left: 10px;\n    top: 2px;\n    text-align: center;\n  }\n  .ui-ammo-row {\n    display: flex;\n  }\n  .ui-ammo-row > div:not(:last-child) {\n    margin-right: 10px;\n  }\n  #ui-loot-ph1 {\n    opacity: 0 !important;\n  }\n  #ui-ammo-interactive > .ui-ammo {\n    display: inline-block;\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    width: 38px;\n    height: 14px;\n    margin-left: auto;\n    margin-bottom: 2px;\n  }\n  .ui-ammo > .ui-loot-count {\n    position: absolute;\n    font-size: 12px;\n    font-weight: bold;\n    width: 16px;\n    left: 3px;\n    margin-top: -1px;\n    text-align: center;\n  }\n  #ui-medical-interactive {\n    display: inline-flex;\n    left: 68%;\n    position: absolute;\n    top: 0px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  #ui-medical-interactive > .ui-loot {\n    display: inline-block;\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    width: 44px;\n    height: 18px;\n    margin-left: 6px;\n    margin-bottom: 2px;\n  }\n  .ui-medical > .ui-loot-image {\n    position: absolute;\n    height: 18px;\n    width: 18px;\n    background-size: 18px;\n    background-repeat: no-repeat;\n    right: 2px;\n    margin-top: 0px;\n  }\n  .ui-medical > .ui-loot-count {\n    position: absolute;\n    font-size: 16px;\n    font-weight: bold;\n    left: 4px;\n    width: 16px;\n    margin-top: -3px;\n    text-align: center;\n  }\n  .ui-loot {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    width: 85px;\n    height: 32px;\n    margin-left: auto;\n    margin-bottom: 5px;\n  }\n  .ui-loot:hover {\n    opacity: 1 !important;\n  }\n  .ui-outline-hover {\n    border: 2px solid rgba(0, 255, 0, 0);\n  }\n  .ui-outline-hover:hover {\n    -webkit-transition: border 100ms ease-out;\n    -moz-transition: border 100ms ease-out;\n    -o-transition: border 100ms ease-out;\n    border: 2px solid rgba(0, 255, 0, 0);\n  }\n  .ui-scale-hover {\n    transform: scale(1);\n    -webkit-transition: all 100ms ease-in;\n    -webkit-transform: scale(1);\n    -ms-transition: all 100ms ease-in;\n    -ms-transform: scale(1);\n    -moz-transition: all 100ms ease-in;\n    -moz-transform: scale(1);\n    transition: all 100ms ease-in;\n  }\n  .ui-scale-hover:hover {\n    -webkit-transition: all 100ms ease-in;\n    -webkit-transform: scale(1.1);\n    -ms-transition: all 100ms ease-in;\n    -ms-transform: scale(1.1);\n    -moz-transition: all 100ms ease-in;\n    -moz-transform: scale(1.1);\n    transition: all 100ms ease-in;\n    transform: scale(1.1);\n  }\n  #ui-debug-button {\n    display: none;\n    background: rgba(0, 0, 0, 0.4);\n    position: absolute;\n    border-radius: 13px;\n    height: 26px;\n    width: 26px;\n    background-size: 18px;\n    bottom: 10px;\n    right: 38px;\n    background-position: center;\n    background-image: url(../img/gui/mag-glass.svg);\n    background-repeat: no-repeat;\n    pointer-events: auto;\n    z-index: 1;\n  }\n  /**\n * ui-upper-center\n */\n  #ui-upper-center {\n    position: absolute;\n    display: flex;\n    color: #FFF;\n    top: 84px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  #ui-announcement {\n    display: none;\n    color: yellow;\n    text-shadow: 1px 1px 0px #000000;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    width: 100vw;\n  }\n  /**\n     * ui-lower-center\n     */\n  #ui-lower-center {\n    bottom: 44%;\n    color: #FFF;\n    left: 60%;\n    position: absolute;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  #ui-interaction {\n    display: flex;\n  }\n  #ui-interaction-press {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    margin-left: -20px;\n    font-size: 34px;\n    width: 44px;\n    height: 44px;\n    background-size: 36px;\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n  #ui-interaction-outer {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    margin-left: 6px;\n    padding: 0px 6px;\n    height: 28px;\n  }\n  #ui-interaction-outer #ui-interaction-description {\n    margin-top: 5px;\n    font-size: 16px;\n    text-align: center;\n  }\n  /**\n * ui-bottom-center-0\n */\n  #ui-bottom-center-0 {\n    position: absolute;\n    color: #FFF;\n    bottom: 6px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  /**\n * ui-equipped-ammo\n */\n  #ui-equipped-ammo-wrapper {\n    /* Taken from ui-bottom-center-0 */\n    position: absolute;\n    color: #FFF;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    bottom: 78px;\n  }\n  #ui-equipped-ammo {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    text-align: center;\n    opacity: 1.0;\n  }\n  #ui-bullet-counter {\n    display: inline-block;\n    width: 175px;\n    height: 28px;\n    text-align: center;\n    text-shadow: 1px 1px #000000;\n  }\n  #ui-bullet-counter > #ui-current-clip {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    font-size: 28px;\n    font-weight: bold;\n    line-height: 30px;\n    width: 60px;\n    height: 32px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 50%;\n    position: relative;\n    text-align: center;\n  }\n  #ui-bullet-counter > #ui-remaining-ammo {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 22px;\n    width: 44px;\n    height: 22px;\n    left: 122px;\n    position: absolute;\n    text-align: center;\n    top: 10px;\n  }\n  #ui-bullet-counter > #ui-reload-button-container {\n    height: 36px;\n    left: 162px;\n    position: absolute;\n    top: 3px;\n    width: 36px;\n  }\n  #ui-reload-button-container > #ui-reload-button {\n    background: rgba(0, 0, 0, 0.4);\n    background-position: 4px 3px;\n    background-image: url(../img/gui/bullets.svg);\n    background-repeat: no-repeat;\n    background-size: 14px;\n    border-radius: 11px;\n    height: 22px;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n    width: 22px;\n  }\n  #ui-boost-counter {\n    display: inline-flex;\n    width: 206px;\n  }\n  #ui-boost-counter .ui-boost-base {\n    background: rgba(0, 0, 0, 0.4);\n    height: 6px;\n    margin-bottom: 0px;\n  }\n  #ui-boost-counter-0 {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n    width: 50px;\n    margin-right: 3px;\n  }\n  #ui-boost-counter-0 .ui-bar-inner {\n    background: #ff901a;\n  }\n  #ui-boost-counter-1 {\n    width: 50px;\n    margin-left: 3px;\n    margin-right: 3px;\n  }\n  #ui-boost-counter-1 .ui-bar-inner {\n    background: #ff751a;\n  }\n  #ui-boost-counter-2 {\n    width: 75px;\n    margin-left: 3px;\n    margin-right: 3px;\n  }\n  #ui-boost-counter-2 .ui-bar-inner {\n    background: #ff6616;\n  }\n  #ui-boost-counter-3 {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n    width: 25px;\n    margin-left: 3px;\n  }\n  #ui-boost-counter-3 .ui-bar-inner {\n    background: #ff5600;\n  }\n  .ui-boost-base .ui-bar-inner {\n    border-radius: inherit;\n    width: 0px;\n    height: 6px;\n  }\n  .ui-health-flair {\n    background-size: 36px;\n    background-repeat: no-repeat;\n    background-position: center;\n    display: none;\n    height: 36px;\n    position: absolute;\n    width: 36px;\n    z-index: 2;\n  }\n  #ui-health-flair-left {\n    left: -17px;\n    top: 14px;\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  #ui-health-flair-right {\n    right: -17px;\n    top: 14px;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n  #ui-health-counter {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    width: 200px;\n    height: 18px;\n    padding: 4px;\n  }\n  #ui-health-counter .ui-bar-inner {\n    z-index: 1;\n    position: absolute;\n    border-radius: 5px;\n    width: 100%;\n    height: 18px;\n    transition: width 0.0s;\n    transition-property: width;\n    transition-duration: 0.0s;\n    transition-timing-function: ease-out;\n    transition-delay: initial;\n  }\n  #ui-health-container {\n    width: 200px;\n    position: relative;\n  }\n  #ui-health-counter .ui-bar-danger {\n    background: rgba(255, 0, 0, 0.8);\n    -webkit-animation-name: pulse;\n            animation-name: pulse;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-animation-delay: 0;\n            animation-delay: 0;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-fill-mode: none;\n            animation-fill-mode: none;\n    -webkit-animation-play-state: running;\n            animation-play-state: running;\n  }\n  #ui-health-counter #ui-health-depleted {\n    z-index: 0;\n    background: #929292;\n    transition: width 1.0s;\n    transition-property: width;\n    transition-duration: 1.0s;\n    transition-timing-function: ease-out;\n    transition-delay: initial;\n  }\n  .health-bar-pulse {\n    -webkit-animation: pulsewhite 1s linear infinite;\n    animation: pulsewhite 1s linear infinite;\n  }\n  @-webkit-keyframes pulsewhite {\n    0% {\n      background-color: rgba(0, 0, 0, 0.6);\n    }\n    50% {\n      background-color: rgba(255, 255, 255, 0.6);\n    }\n    100% {\n      background-color: rgba(0, 0, 0, 0.6);\n    }\n  }\n  @keyframes pulsewhite {\n    0% {\n      background-color: rgba(0, 0, 0, 0.6);\n    }\n    50% {\n      background-color: rgba(255, 255, 255, 0.6);\n    }\n    100% {\n      background-color: rgba(0, 0, 0, 0.6);\n    }\n  }\n  @-webkit-keyframes pulse {\n    0% {\n      background-color: rgba(0, 0, 0, 0.8);\n    }\n    50% {\n      background-color: rgba(255, 0, 0, 0.8);\n    }\n    100% {\n      background-color: rgba(0, 0, 0, 0.8);\n    }\n  }\n  @keyframes pulse {\n    0% {\n      background-color: rgba(0, 0, 0, 0.8);\n    }\n    50% {\n      background-color: rgba(255, 0, 0, 0.8);\n    }\n    100% {\n      background-color: rgba(0, 0, 0, 0.8);\n    }\n  }\n  /**\n     * ui-bottom-center-1\n     */\n  #ui-bottom-center-1 {\n    z-index: 3;\n    position: absolute;\n    color: #FFF;\n    bottom: 23%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  #ui-kills {\n    display: none;\n    text-align: center;\n    background: rgba(0, 0, 0, 0.4);\n    color: #FFF;\n    border-radius: 5px;\n    padding: 6px;\n  }\n  #ui-kill-text {\n    font-size: 10px;\n  }\n  #ui-kill-count {\n    font-weight: bold;\n    color: #ff4100;\n    font-size: 18px;\n    margin-bottom: -3px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);\n  }\n  /**\n     * ui-bottom-center-2\n     */\n  #ui-bottom-center-2 {\n    position: absolute;\n    color: #FFF;\n    bottom: 82px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  #ui-pickup-message {\n    color: white;\n    text-shadow: 1px 1px 0px #000000;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    width: 100vw;\n  }\n  /**\n * ui-bottom-center-left\n */\n  #ui-bottom-center-left {\n    bottom: initial;\n    color: #FFF;\n    right: 70%;\n    opacity: 0.75;\n    position: absolute;\n    bottom: 6px;\n  }\n  /**\n * ui-bottom-center-right\n */\n  #ui-bottom-center-right {\n    bottom: initial;\n    color: #FFF;\n    left: 70%;\n    opacity: 0.75;\n    position: absolute;\n    bottom: 6px;\n  }\n  .ui-armor-counter {\n    position: absolute;\n    bottom: 0px;\n    display: block;\n    width: 20px;\n    height: 24px;\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    margin-left: 2px;\n  }\n  #ui-armor-helmet {\n    right: 4px;\n  }\n  #ui-armor-backpack {\n    left: 30px;\n  }\n  .ui-armor-level {\n    display: none;\n  }\n  .ui-armor-counter-inner {\n    z-index: 1;\n    position: absolute;\n    background: rgba(25, 25, 25, 0.75);\n    border-radius: 5px;\n    width: 100%;\n    height: 0px;\n    bottom: 0px;\n  }\n  .ui-armor-counter .ui-armor-count {\n    z-index: 2;\n    text-shadow: 1px 1px #000000;\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n    margin-top: -28px;\n    text-align: center;\n  }\n  .ui-armor-counter .ui-armor-image {\n    margin: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    z-index: 0;\n    position: absolute;\n    height: 18px;\n    width: 18px;\n  }\n  /**\n * ui-bottom-right\n */\n  #ui-bottom-right {\n    bottom: initial;\n    color: #FFF;\n    position: absolute;\n    right: 6px;\n    top: 225px;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  #ui-weapon-container {\n    width: 88px;\n  }\n  .ui-weapon-info {\n    margin-bottom: 5px;\n    border-radius: 5px;\n    border: 2px solid transparent;\n  }\n  .ui-weapon-switch {\n    position: absolute;\n    right: 0px;\n    opacity: 0.6;\n    border-radius: 5px;\n    border: 2px solid transparent;\n    width: 68px;\n    height: 28px;\n    margin-left: auto;\n    pointer-events: all;\n  }\n  #ui-weapon-id-1 {\n    bottom: 105px;\n  }\n  #ui-weapon-id-2 {\n    bottom: 70px;\n  }\n  #ui-weapon-id-3 {\n    bottom: 35px;\n  }\n  #ui-weapon-id-4 {\n    bottom: 0px;\n  }\n  .ui-weapon-name {\n    position: absolute;\n    font-size: 10px;\n    font-weight: bold;\n    right: 4px;\n    width: 48px;\n    margin-top: 14px;\n    text-align: right;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n  .ui-weapon-number {\n    display: none;\n    position: absolute;\n    font-size: 24px;\n    font-weight: bold;\n    right: 8px;\n    text-align: center;\n  }\n  .ui-weapon-exp {\n    display: none;\n    position: absolute;\n    height: 16px;\n    width: 16px;\n    font-size: 8px;\n    font-weight: bold;\n    line-height: 18px;\n    right: 34px;\n    margin-top: 10px;\n    text-align: center;\n  }\n  .ui-weapon-image {\n    display: none;\n    position: relative;\n    height: 28px;\n    width: 28px;\n    left: 2px;\n    bottom: 0px;\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n  #ui-weapon-id-4 .ui-weapon-image {\n    height: 24px;\n    width: 24px;\n    left: 0px;\n    top: 0px;\n    background-size: 24px;\n  }\n  #ui-emote-button {\n    background-size: 20px;\n    border-radius: 14px;\n    bottom: 18px;\n    height: 28px;\n    right: 4px;\n    top: initial;\n    width: 28px;\n  }\n  /**\n * ui-stats, end game screen\n */\n  #ui-stats-contents {\n    border-radius: 5px;\n    color: #FFF;\n    height: 100%;\n    left: 50%;\n    position: absolute;\n    text-align: center;\n    top: 0%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 100%;\n  }\n  #ui-stats-header {\n    margin-top: 14px;\n  }\n  .ui-stats-header-title {\n    font-weight: bold;\n    font-size: 24px;\n    margin: 6px;\n    color: gold;\n  }\n  .ui-stats-header-reason {\n    font-size: 12px;\n  }\n  .ui-stats-header-overview {\n    position: fixed;\n    top: 4px;\n    right: 12px;\n    margin: 5px;\n  }\n  .ui-stats-header-overview div {\n    display: block;\n    padding-bottom: 6px;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.25);\n  }\n  .ui-stats-header-overview div:not(:first-child) {\n    margin: initial;\n  }\n  span.ui-stats-header-stat {\n    font-size: 22px;\n  }\n  span.ui-stats-header-value {\n    margin-left: 12px;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  #ui-stats-info-box {\n    position: relative;\n    left: 50%;\n    margin: auto;\n    margin-top: -8px;\n    height: 100px;\n    display: flex;\n  }\n  .ui-stats-info-player {\n    position: relative;\n    width: 125px;\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 4px;\n    border: 2px solid black;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  .ui-stats-info-status:after {\n    background-image: url(../img/gui/skull.svg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 70px;\n    content: "";\n    display: block;\n    height: 100%;\n    left: initial;\n    opacity: 0.1;\n    position: absolute;\n    top: 0%;\n    width: 100%;\n    z-index: -1;\n  }\n  .ui-stats-info-player-name {\n    color: gold;\n    font-size: 12px;\n    font-weight: bold;\n    font-style: italic;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 120px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .ui-stats-info-player-badge {\n    background-size: 24px;\n    background-repeat: no-repeat;\n    background-position: center;\n    height: 56px;\n    left: auto;\n    position: absolute;\n    top: -34px;\n    width: 100%;\n  }\n  .ui-stats-info {\n    display: flex;\n    height: 18px;\n    margin: auto;\n  }\n  .ui-stats-info > div {\n    padding: 4px;\n    font-size: 9px;\n    line-height: 6px;\n    text-align: left;\n    font-weight: bold;\n  }\n  .ui-stats-info > div:first-child {\n    width: 55%;\n    margin-right: 4px;\n    text-align: right;\n    font-weight: normal;\n  }\n  .ui-stats-reason {\n    display: flex;\n    height: 72px;\n    margin: auto;\n  }\n  .ui-stats-reason div {\n    padding: 8px;\n    margin: auto;\n    width: 100%;\n    text-align: center;\n    font-size: 16px;\n  }\n  .ui-stats-reason .ui-stats-reason-dead {\n    color: red;\n  }\n  .ui-stats-reason .ui-stats-reason-alive {\n    color: lawngreen;\n  }\n  #ui-stats-options {\n    position: absolute;\n    left: 50%;\n    margin-top: 2px;\n    min-height: 30px;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    z-index: 1;\n  }\n  .ui-stats-restart {\n    position: absolute;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 130px;\n    margin: auto;\n    margin-bottom: 20px;\n  }\n  .ui-stats-spectate {\n    position: absolute;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 68px;\n    width: 88px;\n    background: #50afab;\n    border-bottom: 2px solid #387c79;\n    box-shadow: none;\n  }\n  .ui-stats-ad-container {\n    display: none;\n    margin-top: 8px;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n  /* Tooltip container */\n  .tooltip {\n    position: relative;\n  }\n  /* Tooltip text */\n  .tooltip .tooltip-text {\n    visibility: hidden !important;\n    width: 240px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 110%;\n    opacity: 0.75;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n  .tooltip .tooltip-text::after {\n    content: " ";\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    margin-top: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent transparent black;\n  }\n  .tooltip-title {\n    font-size: 18px;\n    font-weight: bold;\n    padding: 4px;\n    color: yellow;\n  }\n  .tooltip-description {\n    font-size: 16px;\n    padding: 4px;\n  }\n  .tooltip-description span {\n    font-size: 16px;\n  }\n  .tooltip-perk .tooltip-text {\n    visibility: hidden !important;\n  }\n  .tooltip-perk:hover .tooltip-text {\n    visibility: hidden !important;\n  }\n  /**\n     * editor\n     */\n  #ui-editor-top-center {\n    position: absolute;\n    color: #FFF;\n    top: 0%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  #ui-editor-top-right {\n    position: absolute;\n    color: #FFF;\n    font-size: 16px;\n    top: 6px;\n    right: 6px;\n  }\n  .ui-editor-header {\n    text-align: center;\n    font-weight: bold;\n    font-size: 16px;\n    padding: 8px;\n  }\n  .ui-editor-info {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    font-size: 36px;\n    margin-bottom: 8px;\n    padding: 8px;\n  }\n  .ui-editor-list {\n    margin: 0px;\n    padding: 0px;\n    list-style: none;\n  }\n  .ui-editor-list li div {\n    font-family: monospace;\n    font-size: 14px;\n  }\n  /*\n     * Profiler\n     */\n  #ui-profiler-top-left {\n    position: absolute;\n    color: #FFF;\n    font-size: 16px;\n    top: 6px;\n    left: 6px;\n    text-align: center;\n    display: flex;\n  }\n  .ui-profiler-list {\n    background: rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n    margin-right: 16px;\n    padding: 8px;\n  }\n  .ui-profiler-list-header {\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 8px;\n  }\n  .ui-profiler-list ul {\n    list-style: none;\n    text-align: left;\n    padding: 0px;\n    margin: 0px;\n  }\n  .ui-profiler-list li {\n    display: flex;\n  }\n  .kv {\n    font-family: monospace;\n    font-size: 14px;\n    font-weight: normal;\n  }\n  .kv:last-child {\n    width: 100%;\n    text-align: right;\n  }\n  /* Hide desktop-only elements */\n  #ui-settings-container-desktop,\n  #ui-leaderboard-wrapper {\n    display: none;\n  }\n  /* Show mobile-only elements */\n  #ui-settings-container-mobile {\n    display: block;\n  }\n}\n@media screen and (max-width: 850px) and (max-height: 360px), screen and (max-width: 850px) and (max-width: 640px) {\n  #ui-top-center {\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    -webkit-transform: translateX(-50%) scale(0.85);\n            transform: translateX(-50%) scale(0.85);\n  }\n}\n@media screen and (max-width: 850px) and (max-height: 360px), screen and (max-width: 850px) and (max-width: 640px) {\n  #ui-bottom-center-0 {\n    -webkit-transform-origin: bottom;\n            transform-origin: bottom;\n    -webkit-transform: translateX(-50%) scale(0.85);\n            transform: translateX(-50%) scale(0.85);\n  }\n}\n@media screen and (max-width: 850px) and (max-height: 360px), screen and (max-width: 850px) and (max-width: 640px) {\n  #ui-bottom-right {\n    top: 200px;\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n}\n@media screen and (max-width: 850px) and (max-width: 850px) and (orientation: landscape) {\n  .ui-stats-header-overview .ui-stats-header-left {\n    position: fixed;\n    top: -4px;\n    left: 12px;\n  }\n  .ui-stats-header-overview .ui-stats-header-right {\n    position: fixed;\n    top: -4px;\n    right: 12px;\n  }\n}\n@media screen and (max-width: 850px) and (max-height: 360px) and (max-width: 640px) {\n  .ui-stats-ad-container {\n    margin-top: 0px;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n  }\n}\n@media screen and (max-width: 850px) and (max-width: 850px) and (max-height: 320px) {\n  .ui-stats-ad-container {\n    position: fixed;\n    right: 10px;\n    top: 24px;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n  }\n}\n@media screen and (max-width: 850px) and (orientation: portrait) {\n  #ui-stats-contents {\n    margin-top: 32px;\n    margin-bottom: 16px;\n  }\n  #ui-stats-header-overview {\n    position: initial;\n  }\n  #ui-stats-info-box {\n    display: inline-block;\n    left: initial;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    -webkit-transform-origin: initial;\n            transform-origin: initial;\n    margin-top: 2px;\n    width: 100%;\n  }\n  .ui-stats-ad-container {\n    width: 100%;\n  }\n  .ui-stats-info-player {\n    display: inline-block;\n    left: initial !important;\n    margin: 8px;\n    -webkit-transform: none;\n            transform: none;\n  }\n  .ui-stats-header-overview {\n    display: inline-block;\n    position: initial;\n    width: 175px;\n  }\n  .ui-stats-header-overview div {\n    position: initial;\n    margin-bottom: 8px;\n  }\n  #ui-top-center {\n    top: 134px;\n    left: 50%;\n  }\n  #ui-top-center-scopes-wrapper {\n    display: none;\n    bottom: 42px;\n    top: initial;\n  }\n  #ui-team {\n    top: 40px;\n  }\n  .ui-team-member {\n    height: 18px;\n    margin-bottom: 4px;\n  }\n  #ui-upper-center {\n    top: 180px;\n  }\n  #ui-bottom-center-0 {\n    top: -15px;\n    bottom: initial;\n    left: 100px;\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n  #ui-bottom-center-1 {\n    bottom: 28%;\n  }\n  #ui-bottom-center-2 {\n    bottom: 218px;\n  }\n  #ui-lower-center {\n    bottom: 38%;\n    left: 38%;\n  }\n  #ui-boost-counter {\n    position: relative;\n    top: 40px;\n    left: 2px;\n  }\n  #ui-bottom-right {\n    bottom: 20px;\n    right: 6px;\n    top: initial;\n  }\n  #ui-weapon-id-1 {\n    right: 240px;\n    bottom: initial;\n  }\n  #ui-weapon-id-2 {\n    right: 160px;\n    bottom: initial;\n  }\n  #ui-weapon-id-3 {\n    right: 80px;\n    bottom: initial;\n  }\n  #ui-weapon-id-4 {\n    bottom: initial;\n  }\n  .ui-weapon-info {\n    display: inline-block;\n  }\n  #ui-bottom-center-right {\n    bottom: 9px;\n    left: 30px;\n    top: initial;\n  }\n  .ui-right-center-mobile {\n    top: 6px;\n  }\n  #ui-emote-button {\n    background-size: 20px;\n    border-radius: 14px;\n    bottom: initial;\n    height: 28px;\n    left: initial;\n    right: 4px;\n    top: 62%;\n    width: 28px;\n  }\n  #ui-debug-button {\n    top: 242px;\n  }\n  #ui-ammo-interactive {\n    margin-top: 4px;\n  }\n  #ui-ammo-interactive > .ui-ammo {\n    display: block;\n  }\n  #ui-medical-interactive {\n    display: inline-block;\n    left: initial;\n    right: 8px;\n    -webkit-transform: initial;\n            transform: initial;\n  }\n  #ui-medical-interactive > .ui-loot {\n    display: block;\n  }\n  #ui-equipped-ammo {\n    left: initial;\n    position: initial;\n    -webkit-transform: none;\n            transform: none;\n  }\n  #ui-equipped-ammo-wrapper {\n    bottom: initial;\n    color: #FFF;\n    left: initial;\n    position: absolute;\n    right: 6px;\n    top: 44%;\n    -webkit-transform: none;\n            transform: none;\n  }\n  #ui-bullet-counter {\n    width: initial;\n  }\n  #ui-bullet-counter > #ui-current-clip {\n    left: 50%;\n  }\n  #ui-bullet-counter > #ui-remaining-ammo {\n    left: initial;\n    right: 0px;\n    top: 36px;\n  }\n  #ui-bullet-counter > #ui-reload-button-container {\n    left: 36px;\n    top: 56px;\n  }\n  #ui-reload-button-container > #ui-reload-button {\n    left: initial;\n    right: 0px;\n  }\n  #big-map-collision {\n    left: initial;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n  }\n  #big-map-close {\n    bottom: initial;\n    top: 12px;\n  }\n  #ui-spectate-options-wrapper {\n    bottom: 42px;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n  #ui-spectate-options {\n    position: absolute;\n    bottom: 12px;\n  }\n  #ui-spectate-stats {\n    bottom: 0px;\n    top: initial;\n  }\n  #ui-ammo-interactive {\n    top: 96px;\n  }\n  #ui-ammo-interactive > .ui-ammo {\n    margin-bottom: 2px;\n  }\n}\n@media screen and (max-width: 850px) and (orientation: portrait) and (min-height: 668px) {\n  #ui-stats-contents {\n    margin-top: 32px;\n  }\n  #ui-stats-info-box {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  .ui-stats-ad-container {\n    margin-top: 20px;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  #ui-stats-options {\n    display: block;\n    left: initial;\n    position: initial;\n    margin: auto;\n    margin-top: 24px;\n    width: 100%;\n  }\n  .ui-stats-restart {\n    display: block;\n    position: initial;\n    -webkit-transform: initial;\n            transform: initial;\n    margin-bottom: 0px;\n  }\n  .ui-stats-spectate {\n    display: block;\n    margin: auto;\n    margin-top: 6px;\n    position: initial;\n    -webkit-transform: initial;\n            transform: initial;\n  }\n}\n@media screen and (max-width: 850px) and (orientation: portrait) and (max-height: 667px) {\n  #ui-stats-contents {\n    margin-top: 0px;\n  }\n  .ui-stats-ad-container {\n    margin-top: 20px;\n  }\n}\n@media screen and (max-width: 850px) and (orientation: portrait) and (max-height: 568px) and (max-width: 375px) {\n  #ui-bottom-center-right {\n    left: 22px;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  #ui-bottom-right {\n    right: 0px;\n  }\n  #ui-bottom-center-0 {\n    top: -20px;\n    left: 84px;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n  }\n}\n', ""])
    },
    b78cf179: function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }
        var r, o = {
                None: 0,
                Top: 1,
                Right: 2,
                Bottom: 3,
                Left: 4,
                Win: 5,
                Death: 6,
                Count: 7
            },
            n = {
                Locked: 0,
                Default: 1,
                Account: 9,
                Instagram: 10,
                Twitter: 11,
                YouTube: 12,
                Facebook: 13
            },
            s = {
                None: 0,
                Empty: 1,
                Medical: 2,
                Ammo: 3,
                ThumbsUp: 4,
                SadFace: 5,
                HappyFace: 6,
                Surviv: 7,
                Ammo9mm: 8,
                Ammo12Gauge: 9,
                Ammo762mm: 10,
                Ammo556mm: 11,
                GG: 12,
                Question: 13,
                Tombstone: 14,
                JoyFace: 15,
                SobFace: 16,
                ThinkingFace: 17,
                FlagUS: 18,
                FlagThailand: 19,
                FlagGermany: 20,
                FlagFrance: 21,
                FlagSouthKorea: 22,
                FlagBrazil: 23,
                FlagCanada: 24,
                FlagSpain: 25,
                FlagRussia: 26,
                FlagMexico: 27,
                FlagPoland: 28,
                FlagUK: 29,
                FlagColombia: 30,
                FlagUkraine: 31,
                FlagTurkey: 32,
                FlagPhilippines: 33,
                FlagCzechia: 34,
                FlagPeru: 35,
                FlagAustria: 36,
                FlagArgentina: 37,
                FlagJapan: 38,
                FlagVenezuela: 39,
                FlagVietnam: 40,
                FlagSwitzerland: 41,
                FlagNetherlands: 42,
                FlagChina: 43,
                FlagTaiwan: 44,
                FlagChile: 45,
                FlagAustralia: 46,
                FlagDenmark: 47,
                FlagItaly: 48,
                FlagSweden: 49,
                FlagEcuador: 50,
                FlagSlovakia: 51,
                FlagHungary: 52,
                FlagRomania: 53,
                FlagHongKong: 54,
                FlagIndonesia: 55,
                FlagFinland: 56,
                FlagNorway: 57,
                Heart: 58,
                Sleepy: 59,
                Flex: 60,
                AngryFace: 61,
                UpsideDownFace: 62,
                Teabag: 63,
                AlienFace: 64,
                FlagBelarus: 65,
                FlagBelgium: 66,
                FlagKazakhstan: 67,
                Egg: 68,
                Police: 69,
                DabFace: 70,
                FlagMalaysia: 71,
                FlagNewZealand: 72,
                LogoSurviv: 73,
                LogoEgg: 74,
                LogoSwine: 75,
                LogoHydra: 76,
                LogoStorm: 77,
                FlagHonduras: 78,
                LogoCaduceus: 79,
                ImpFace: 80,
                MonocleFace: 81,
                SunglassFace: 82,
                HeadshotFace: 83,
                Potato: 84,
                Leek: 85,
                Eggplant: 86,
                Baguette: 87,
                Chick: 88,
                Ammo50AE: 89,
                FlagBolivia: 90,
                FlagBosnia: 91,
                FlagCroatia: 92,
                FlagIndia: 93,
                FlagIsrael: 94,
                FlagGeorgia: 95,
                FlagGreece: 96,
                FlagGuatemala: 97,
                FlagPortugal: 98,
                FlagSerbia: 99,
                FlagSingapore: 100,
                FlagTrinidad: 101,
                FlagUruguay: 102,
                LogoConch: 103,
                Pineapple: 104,
                Coconut: 105,
                Crab: 106,
                Whale: 107,
                LogoMeteor: 108,
                Ammo308sub: 109,
                AmmoFlare: 110,
                Salt: 111,
                DisappointFace: 112,
                LogoCrossing: 113,
                Fish: 114,
                Campfire: 115,
                ChickenDinner: 116,
                Ammo45acp: 117,
                Cattle: 118,
                IceCream: 119,
                Cupcake: 120,
                Donut: 121,
                LogoHatchet: 122,
                Acorn: 123,
                Trunk: 124,
                Forest: 125,
                Pumpkin: 126,
                CandyCorn: 127,
                PilgrimHat: 128,
                TurkeyAnimal: 129,
                HeartFace: 130,
                LogoChrysanthemum: 131,
                SantaHat: 132,
                Snowman: 133,
                Snowflake: 134,
                Loot: 135
            },
            l = (r = {}, i(r, s.None, {
                texture: "",
                teamOnly: !1,
                noCustom: !0,
                category: n.Locked
            }), i(r, s.Medical, {
                texture: "emote-medical-healthkit.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.Ammo, {
                texture: "ammo-box.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.ThumbsUp, {
                texture: "thumbs-up.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.SadFace, {
                texture: "sad-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.HappyFace, {
                texture: "happy-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.Surviv, {
                texture: "surviv.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.Ammo9mm, {
                texture: "ammo-9mm.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.Ammo12Gauge, {
                texture: "ammo-12gauge.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.Ammo762mm, {
                texture: "ammo-762mm.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.Ammo556mm, {
                texture: "ammo-556mm.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.GG, {
                texture: "gg.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.Question, {
                texture: "question.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.Tombstone, {
                texture: "tombstone.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.JoyFace, {
                texture: "joy-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                youtubeSubscribe: !0,
                category: n.YouTube
            }), i(r, s.SobFace, {
                texture: "sob-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                youtubeSubscribe: !0,
                category: n.YouTube
            }), i(r, s.ThinkingFace, {
                texture: "thinking-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                youtubeSubscribe: !0,
                category: n.YouTube
            }), i(r, s.FlagUS, {
                texture: "united-states-of-america.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagThailand, {
                texture: "thailand.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagGermany, {
                texture: "germany.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagFrance, {
                texture: "france.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagSouthKorea, {
                texture: "south-korea.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagBrazil, {
                texture: "brazil.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagCanada, {
                texture: "canada.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagSpain, {
                texture: "spain.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagRussia, {
                texture: "russia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagMexico, {
                texture: "mexico.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagPoland, {
                texture: "republic-of-poland.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagUK, {
                texture: "united-kingdom.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagColombia, {
                texture: "colombia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagUkraine, {
                texture: "ukraine.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagTurkey, {
                texture: "turkey.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagPhilippines, {
                texture: "philippines.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagCzechia, {
                texture: "czech-republic.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagPeru, {
                texture: "peru.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagAustria, {
                texture: "austria.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagArgentina, {
                texture: "argentina.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagJapan, {
                texture: "japan.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagVenezuela, {
                texture: "venezuela.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagVietnam, {
                texture: "vietnam.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagSwitzerland, {
                texture: "switzerland.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagNetherlands, {
                texture: "netherlands.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagChina, {
                texture: "china.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagTaiwan, {
                texture: "taiwan.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagChile, {
                texture: "chile.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagAustralia, {
                texture: "australia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagDenmark, {
                texture: "denmark.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagItaly, {
                texture: "italy.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagSweden, {
                texture: "sweden.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagEcuador, {
                texture: "ecuador.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagSlovakia, {
                texture: "slovakia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagHungary, {
                texture: "hungary.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagRomania, {
                texture: "romania.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagHongKong, {
                texture: "hong-kong.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagIndonesia, {
                texture: "indonesia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagFinland, {
                texture: "finland.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagNorway, {
                texture: "norway.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.Heart, {
                texture: "heart.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.Sleepy, {
                texture: "sleepy.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.Flex, {
                texture: "flex.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.AngryFace, {
                texture: "angry-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                youtubeSubscribe: !0,
                category: n.YouTube
            }), i(r, s.UpsideDownFace, {
                texture: "upsidedown-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                youtubeSubscribe: !0,
                category: n.YouTube
            }), i(r, s.Teabag, {
                texture: "teabag.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.AlienFace, {
                texture: "alien-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                youtubeSubscribe: !0,
                category: n.YouTube
            }), i(r, s.FlagBelarus, {
                texture: "belarus.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagBelgium, {
                texture: "belgium.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagKazakhstan, {
                texture: "kazakhstan.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.Egg, {
                texture: "egg.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.Police, {
                texture: "police.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.DabFace, {
                texture: "dab-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                youtubeSubscribe: !0,
                category: n.YouTube
            }), i(r, s.FlagMalaysia, {
                texture: "malaysia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagNewZealand, {
                texture: "new-zealand.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.LogoSurviv, {
                texture: "logo-surviv.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.LogoEgg, {
                texture: "logo-egg.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.LogoSwine, {
                texture: "logo-swine.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.LogoHydra, {
                texture: "logo-hydra.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.LogoStorm, {
                texture: "logo-storm.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.FlagHonduras, {
                texture: "honduras.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.LogoCaduceus, {
                texture: "logo-caduceus.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.ImpFace, {
                texture: "imp-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.MonocleFace, {
                texture: "monocle-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.SunglassFace, {
                texture: "sunglass-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.HeadshotFace, {
                texture: "headshot-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Potato, {
                texture: "potato.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Leek, {
                texture: "leek.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Eggplant, {
                texture: "eggplant.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Baguette, {
                texture: "baguette.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Chick, {
                texture: "chick.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Ammo50AE, {
                texture: "ammo-50AE.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.FlagBolivia, {
                texture: "bolivia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagCroatia, {
                texture: "croatia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagIndia, {
                texture: "india.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagIsrael, {
                texture: "israel.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagGeorgia, {
                texture: "georgia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagGreece, {
                texture: "greece.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagGuatemala, {
                texture: "guatemala.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagPortugal, {
                texture: "portugal.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagSerbia, {
                texture: "serbia.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagSingapore, {
                texture: "singapore.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagTrinidad, {
                texture: "trinidad-and-tobago.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.FlagUruguay, {
                texture: "uruguay.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                facebookLike: !0,
                category: n.Facebook
            }), i(r, s.LogoConch, {
                texture: "logo-conch.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.Pineapple, {
                texture: "pineapple.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Coconut, {
                texture: "coconut.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Crab, {
                texture: "crab.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Whale, {
                texture: "whale.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.LogoMeteor, {
                texture: "logo-meteor.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.Ammo308sub, {
                texture: "ammo-308sub.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.AmmoFlare, {
                texture: "ammo-flare.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.Salt, {
                texture: "salt.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.DisappointFace, {
                texture: "disappoint-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                youtubeSubscribe: !0,
                category: n.YouTube
            }), i(r, s.LogoCrossing, {
                texture: "logo-crossing.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.Fish, {
                texture: "fish.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Campfire, {
                texture: "campfire.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.ChickenDinner, {
                texture: "chicken-dinner.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.Ammo45acp, {
                texture: "ammo-45acp.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !0,
                category: n.Locked
            }), i(r, s.Cattle, {
                texture: "cattle.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.IceCream, {
                texture: "ice-cream.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Cupcake, {
                texture: "cupcake.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Donut, {
                texture: "donut.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.LogoHatchet, {
                texture: "logo-hatchet.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.Acorn, {
                texture: "acorn.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Trunk, {
                texture: "trunk.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Forest, {
                texture: "forest.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Pumpkin, {
                texture: "pumpkin.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.CandyCorn, {
                texture: "candy-corn.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.PilgrimHat, {
                texture: "pilgrim-hat.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.TurkeyAnimal, {
                texture: "turkey-animal.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.HeartFace, {
                texture: "heart-face.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                youtubeSubscribe: !0,
                category: n.YouTube
            }), i(r, s.LogoChrysanthemum, {
                texture: "logo-chrysanthemum.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                category: n.Default
            }), i(r, s.SantaHat, {
                texture: "santa-hat.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Snowman, {
                texture: "snowman.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                instagramFollow: !0,
                category: n.Instagram
            }), i(r, s.Snowflake, {
                texture: "snowflake.img",
                sound: "emote_01",
                channel: "ui",
                teamOnly: !1,
                twitterFollow: !0,
                category: n.Twitter
            }), i(r, s.Loot, {
                texture: "",
                sound: "gun_switch_01",
                channel: "activePlayer",
                teamOnly: !1,
                noCustom: !0,
                category: n.Locked
            }), r);
        e.exports = {
            EmoteSlot: o,
            EmoteType: s,
            EmoteData: l
        }
    },
    b895abfa: function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Woods Spring",
                    icon: "img/gui/hatchet.svg"
                },
                assets: {
                    audio: [{
                        name: "vault_change_02",
                        channel: "sfx"
                    }, {
                        name: "footstep_08",
                        channel: "sfx"
                    }, {
                        name: "footstep_09",
                        channel: "sfx"
                    }, {
                        name: "helmet03_forest_pickup_01",
                        channel: "ui"
                    }, {
                        name: "ability_stim_01",
                        channel: "sfx"
                    }, {
                        name: "leader_dead_01",
                        channel: "ui"
                    }],
                    atlases: ["gradient", "shared", "woods"]
                },
                biome: {
                    colors: {
                        background: 2118510,
                        water: 3310251,
                        beach: 15709019,
                        riverbank: 9079434,
                        grass: 4351497,
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
                },
                gameMode: {
                    maxPlayers: 80,
                    woodsMode: !0
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    bc83ef37: function(e, t, a) {
        "use strict";

        function i() {
            this.sprite = new o.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1, this.strobeSprite = null
        }

        function r() {
            this.Pt = new h.Pool(i)
        }
        var o = a("8b1dfb45"),
            n = a("989ad62a"),
            s = a("ceee80d9"),
            l = a("6b42806d"),
            c = a("10899aea"),
            m = a("1901e2d9"),
            p = a("c2a798c8"),
            d = a("c73dee75"),
            h = (a("ce29f17f"), a("af8ba00f"), a("753d6e4b")),
            u = {
                grass: "frag_grass",
                sand: "frag_sand",
                water: "frag_water"
            };
        i.prototype = {
            o: function() {},
            n: function() {
                this.sprite.visible = !1, this.strobeSprite && (this.strobeSprite.visible = !1)
            },
            l: function(e, t, a, i) {
                if (t) {
                    var r = n.items[e.type];
                    this.layer = e.layer, this.type = e.type, this.rad = .5 * r.rad
                }
                if (this.posOld = a ? p.copy(e.pos) : p.copy(this.pos), this.posZOld = a ? e.posZ : this.posZ, this.pos = p.copy(e.pos), this.posZ = e.posZ, a) {
                    var s = n.items[e.type],
                        c = s.worldImg;
                    this.imgScale = c.scale, this.rot = 0, this.rotVel = s.throwPhysics.spinVel, s.throwPhysics.randomizeSpinDir && Math.random() < .5 && (this.rotVel *= -1), this.rotDrag = s.throwPhysics.spinDrag * m.random(1, 2), this.velZ = 0, this.grounded = !1, this.inWater = !1, this.lastSoundObjId = 0, this.playHitSfx = !s.explodeOnImpact, this.alwaysRenderOntop = !1;
                    var d = !0;
                    if ("bomb_iron" == this.type) {
                        this.alwaysRenderOntop = !0;
                        var h = l.createCircle(this.pos, .5);
                        i.map.insideBuildingCeiling(h, !0) && (d = !1)
                    }
                    this.sprite.texture = o.Texture.fromImage(c.sprite), this.sprite.tint = c.tint, this.sprite.alpha = 1, this.sprite.visible = d, "strobe" == e.type && (this.strobeSprite || (this.strobeSprite = new o.Sprite, this.strobeSprite.texture = o.Texture.fromImage("part-strobe-01.img"), this.strobeSprite.anchor.set(.5, .5), this.sprite.addChild(this.strobeSprite)), this.strobeSprite.scale.set(0, 0), this.strobeSprite.visible = !0, this.strobeScale = 0, this.strobeScaleMax = 12, this.strobeTicker = 0, this.strobeDir = 1, this.strobeSpeed = 1.25)
                }
            }
        }, r.prototype = {
            c: function(e, t, a, i, r, o, h) {
                for (var g = this.Pt.m(), y = 0; y < g.length; y++) {
                    var w = g[y];
                    if (w.active) {
                        var x = (n.items[w.type], w.rotDrag);
                        w.inWater && (x *= 3), w.rotVel *= 1 / (1 + e * x), w.rot += w.rotVel * e;
                        for (var f = {
                                obj: null,
                                pen: 0
                            }, b = {
                                obj: null,
                                pen: 0
                            }, _ = l.createCircle(w.pos, w.rad), S = r.pe.m(), k = 0; k < S.length; k++) {
                            var v = S[k];
                            if (v.active && !v.dead && m.sameLayer(v.layer, w.layer)) {
                                var z = l.intersect(v.collider, _);
                                if (z) {
                                    var M = v.height > w.posZ ? f : b;
                                    z.pen > M.pen && (!M.obj || M.obj.height <= v.height) && (M.obj = v, M.pen = z.pen)
                                }
                            }
                        }
                        var T = p.div(p.sub(w.pos, w.posOld), e),
                            P = p.length(T);
                        if (f.obj && f.obj.__id != w.lastSoundObjId && P > 7.5 && (w.lastSoundObjId = f.obj.__id, w.playHitSfx)) {
                            var I = p.mul(p.normalizeSafe(T, p.create(1, 0)), -1),
                                C = s.Defs[f.obj.type];
                            d.playHitFx(C.hitParticle, C.sound.bullet, w.pos, I, w.layer, t, a)
                        }
                        var A = r.getGroundSurface(w.pos, w.layer);
                        w.posZ <= .01 && (w.inWater || "water" != A.type || t.addRippleParticle(w.pos, w.layer), w.inWater = "water" == A.type);
                        var E = w.velZ;
                        if (w.velZ = (w.posZ - w.posZOld) / e, !w.isNew && !w.grounded && w.velZ >= 0 && E < 0) {
                            var D = {
                                fn: "playGroup",
                                channel: "hits",
                                name: ""
                            };
                            if (b.obj) {
                                if (w.lastSoundObjId != b.obj.__id) {
                                    w.lastSoundObjId = b.obj.__id;
                                    var O = s.Defs[b.obj.type];
                                    D.name = O.sound.bullet
                                }
                            } else w.grounded = !0, D.name = u[A.type], void 0 === D.name && (D.name = "footstep_" + A.type, D.fn = "playGroup", D.channel = "sfx");
                            D.name && w.playHitSfx && a[D.fn](D.name, {
                                channel: D.channel,
                                soundPos: w.pos,
                                layer: w.layer,
                                muffled: !0
                            })
                        }
                        "strobe" == w.type && w.strobeSprite && (w.strobeTicker = c.clamp(w.strobeTicker + e * w.strobeDir * w.strobeSpeed, 0, 1), w.strobeScale = c.easeInExpo(w.strobeTicker) * w.strobeScaleMax, w.strobeSprite.scale.set(w.strobeScale, w.strobeScale), (w.strobeScale >= w.strobeScaleMax || w.strobeTicker <= 0) && (w.strobeDir *= -1));
                        var B = w.layer,
                            L = w.posZ < .25 ? 14 : 25,
                            R = l.createCircle(w.pos, 3 * w.rad),
                            F = r.insideStructureStairs(R),
                            j = r.insideStructureMask(R);
                        !(w.posZ >= .25 && F && (1 & w.layer) == (1 & i.layer)) || j && 2 & i.layer || (B |= 2, L += 100), w.alwaysRenderOntop && 0 == i.layer && (L = 1e3, B |= 2), o.addPIXIObj(w.sprite, B, L);
                        var q = w.imgScale * c.remap(w.posZ, 0, n.projectile.maxHeight, 1, 4.75),
                            N = h.pointToScreen(w.pos),
                            V = h.pixels(q);
                        w.sprite.position.set(N.x, N.y), w.sprite.scale.set(V, V), w.sprite.rotation = w.rot, w.sprite.alpha = w.inWater ? .3 : 1
                    }
                }
            }
        }, e.exports = {
            st: r
        }
    },
    bdd2570b: function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-02-12",
                locale: "nl"
            },
            "word-order": "sov",
            "index-create-account": "Maak een account",
            "index-set-account-name": "Stel je account naam vast",
            "index-enter-name": "Voer je naam in",
            "index-finish": "Voltooid",
            "index-delete-account": "Verwijder je account",
            "index-delete-account-desc": 'Voer "DELETE" in om je account te verwijderen:',
            "index-confirm": "Bevestig",
            "index-customize-avatar": "Pas je avatar aan",
            "index-done": "Klaar",
            "index-account": "Account",
            "index-log-in-with": "Log in met",
            "index-facebook": "Facebook",
            "index-google": "Google",
            "index-twitch": "Twitch",
            "index-discord": "Discord",
            "index-my-stats": "Mijn statistieken",
            "index-link-account": "Koppel Account",
            "index-log-out": "Log uit",
            "index-change-avatar": "Verander je avatar",
            "index-change-account-name": "Verander je account naam",
            "index-back": "Terug",
            "index-link-account-to": "Koppel account aan",
            "index-log-in-desc": "Log in!",
            "index-logging-in": "Aan het inloggen",
            "index-leaderboards": "Scoreborden",
            "index-slogan": "2d Battle Royale",
            "index-region": "Regio",
            "index-north-america": "Noord-Amerika",
            "index-europe": "Europa",
            "index-asia": "Azië",
            "index-south-america": "Zuid-Amerika",
            "index-korea": "Zuid-Korea",
            "index-players": "spelers",
            "index-play-solo": "Speel Alleen",
            "index-play-duo": "Team van 2",
            "index-play-squad": "Team van 4",
            "index-create-team": "Maak een Team",
            "index-how-to-play": "Hoe te spelen",
            "index-leave-team": "Verlaat Team",
            "index-joining-team": "Aansluiten bij een Team",
            "index-creating-team": "Team aan het maken",
            "index-invite-link": "Uitnodigings Link",
            "index-solo": "Solo",
            "index-duo": "Team van 2",
            "index-squad": "Team van 4",
            "index-auto-fill": "Vullen",
            "index-no-fill": "Niet vullen",
            "index-waiting-for-leader": "Wachten op de leider om te beginnen",
            "index-play": "Speel",
            "index-featured-youtuber": "Aanbevolen Youtuber",
            "index-settings": "Opties",
            "index-high-resolution": "Hoge resolutie (Controleer verhogen van kwaliteit)",
            "index-screen-shake": "Scherm schudden",
            "index-mobile-announce": "Nu beschikbaar op mobiel!",
            "index-team-is-full": "Team is vol!",
            "index-failed-joining-team": "Gefaald aan te sluiten tot team.",
            "index-failed-creating-team": "Gefaald om team aan te maken.",
            "index-failed-finding-game": "Gefaald om een team te vinden.",
            "index-failed-joining-game": "Gefaald aan te sluiten tot team.",
            "index-lost-connection": "Connectie verloren met team.",
            "index-host-closed": "Gastheer heeft de connectie gesloten.",
            "index-view-more": "Bekijk meer",
            "index-back-to-main": "Terug naar het hoofdmenu",
            "index-most-kills": "Meeste kills",
            "index-total-kills": "Totale kills",
            "index-total-wins": "Totaal keer gewonnen",
            "index-top-5-percent": "Top 5 procent",
            "index-kill-death-ratio": "Kill-dood verhouding",
            "index-for": "Van",
            "index-today": "Vandaag",
            "index-this-week": "Deze week",
            "index-all-time": "Altijd",
            "index-top-100": "TOP 100",
            "index-rank": "Rang",
            "index-player": "Speler",
            "index-total-games": "Totale spellen",
            "index-controls": "Besturing",
            "index-movement": "Beweging",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Richten",
            "index-aim-ctrl": "Muis",
            "index-punch": "Slaan",
            "index-shoot": "Schieten",
            "index-shoot-ctrl": "Linker Klik",
            "index-change-weapons": "Verander wapens",
            "index-change-weapons-ctrl": "1 - 4 of muis wieltje",
            "index-stow-weapons": "Verberg Wapens (Slaan modus)",
            "index-stow-weapons-ctrl": "3 of E",
            "index-swap-weapons": "Ruil naar vorig wapen",
            "index-swap-weapons-ctrl": "Q",
            "index-swap-weapon-slots": "Wapen overschakelen naar andere gleuf",
            "index-swap-weapon-slots-ctrl": "T of sleep het wapen naar ander gleuf",
            "index-reload": "Herladen",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Zoombereik",
            "index-scope-zoom-ctrl": "Linker Klik op Zoom",
            "index-pickup": "Oppakken",
            "index-loot": "Buit",
            "index-revive": "Opknappen",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Gebruik Medisch Item",
            "index-use-medical-ctrl": "Linker Klik op Item of 7 - 0",
            "index-drop-item": "Laat item vallen",
            "index-drop-item-ctrl": "Rechter klik op item",
            "index-cancel-action": "Annuleer Actie",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Bekijk kaart",
            "index-view-map-ctrl": "M of G",
            "index-toggle-minimap": "Verberg HUD",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Gebruik Team ping-wiel",
            "index-use-ping-ctrl": "Houd C ingedrukt, houd daarna Recht klik ingedrukt en sleep muis, laat daarna Recht klik los",
            "index-use-emote": "Gebruik Gevoelens Wiel",
            "index-use-emote-ctrl": "Houd Recht klik ingedrukt en sleep muis, laat daarna Recht klik los",
            "index-tips-1-desc": "Het doel van surviv.io is het zijn van de laatste levende speler. Je leeft maar 1 keer per spel - er is geen respawn!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "Als je andere battle royale spellen zoals PUBG, Fortnite of H1Z1 hebt gespeeld, dan ben je al halverwege! Denk maar dat surviv.io een 2D PUBG is.",
            "index-tips-3": "Pak spullen en kill",
            "index-tips-3-desc": "Je begint het spel met geen items behalve een simpele rugtas. Beweeg door de map om buit te vinden: wapens, ammunitie, scopes en medische items. Vermoord andere spelers en pak hun spullen!",
            "index-tips-4": "Rood = Slecht!",
            "index-tips-4-desc": "Spelers zijn niet de enige die je pijn kunnen doen. De dodelijke rode zone zal insluiten vanuit de zijkanten van de map en zal je enorm veel schade aanrichten als je er in staat. Houd een oog open op de kaart en blijf veilig.",
            "game-alive": "In leven",
            "game-reloading": "Herladen",
            "game-using": "aan het gebruiken",
            "game-reviving": "aan het bijbrengen",
            "game-revive-teammate": "Knap Teamgenoot op",
            "game-equip": "Uitrusten",
            "game-cancel": "Annuleren",
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
            "game-waiting-for-players": "Aan het wachten voor spelers",
            "game-spectating": "Toeschouwen,",
            "game-red-zone-advances": "Rode zone vordert in",
            "game-red-zone-advancing": "Rode zone vordert, ga naar de veilige zone!",
            "game-seconds": "seconden",
            "game-minutes": "minuten",
            "game-minute": "minuut",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Niet genoeg plaats!",
            "game-item-already-owned": "Item is al in bezit!",
            "game-item-already-equipped": "Item is al uitgerust!",
            "game-better-item-equipped": "Beter item uitgerust!",
            "game-play-new-game": "Speel nieuw spel",
            "game-spectate": "Toeschouwen",
            "game-full-screen": "Vol scherm",
            "game-sound": "Geluid",
            "game-quit-game": "Stop met spelen",
            "game-return-to-game": "Keer terug naar spel",
            "game-hide-match-stats": "Verberg wedstrijd statistieken",
            "game-view-match-stats": "Zie wedstrijd statistieken",
            "game-previous-teammate": "Vorige Teamgenoot",
            "game-next-teammate": "Volgende Teamgenoot",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "Verlaat spel",
            "game-your-results": "Jouw resultaten",
            "game-chicken": "Gewonnen! Vanavond eten we kip!",
            "game-won-the-game": "heeft het spel gewonnen.",
            "game-team-eliminated": "Jouw team is uitgeschakeld.",
            "game-rank": "Rang",
            "game-team-rank": "Team Rang",
            "game-team-kills": "Team Kills",
            "game-kill": "Kill",
            "game-kills": "Kills",
            "game-damage-dealt": "Schade aangericht",
            "game-damage-taken": "Schade opgelopen",
            "game-survived": "Overleefd",
            "game-backpack00": "Zak",
            "game-backpack01": "Kleine rugtas",
            "game-backpack02": "Normale rugtas",
            "game-backpack03": "Militaire rugtas",
            "game-bandage": "Verband",
            "game-bandage-tooltip": "Linker klik om 15 gezondheid te herstellen.",
            "game-healing-tooltip": "Kan niet meer dan 75 gezondheid herstellen.",
            "game-healthkit": "Verbandstrommel",
            "game-healthkit-tooltip": "Linker klik om 100 gezondheid te herstellen.",
            "game-soda": "Frisdrank",
            "game-soda-tooltip": "Linker klik om je adrenaline met 25 te stimuleren.",
            "game-adrenaline-tooltip": "Adrenaline herstelt gezondheid na een tijdje.",
            "game-painkiller": "Pillen",
            "game-painkiller-tooltip": "Linker klik om je adrenaline met 50 te stimuleren.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Ammunitie voor M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 en Vector.",
            "game-12gauge": "12 gauge",
            "game-12gauge-tooltip": "Ammunitie voor M870, M1100, SPAS-12, Saiga-12 en MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Ammunitie voor AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 en DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Ammunitie voor FAMAS, M416, M4A1-S, QBB-97, Mk 12 en M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Ammunitie voor DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Ammunitie voor AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Ammunitie voor Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Ammunitie voor M1911, M1A1, Model 94 en Peacemaker.",
            "game-chest01": "Level 1 Armor",
            "game-chest02": "Level 2 Armor",
            "game-chest03": "Level 3 Armor",
            "game-helmet01": "Level 1 Helm",
            "game-helmet02": "Level 2 Helm",
            "game-helmet03": "Level 3 Helm",
            "game-1xscope": "1x Scope",
            "game-2xscope": "2x Scope",
            "game-4xscope": "4x Scope",
            "game-8xscope": "8x Scope",
            "game-15xscope": "15x Scope",
            "game-level-1": "Lvl. 1",
            "game-level-2": "Lvl. 2",
            "game-level-3": "Lvl. 3",
            "game-level-4": "Lvl. 4",
            "game-outfitBase": "Basis Outfit",
            "game-outfitRoyalFortune": "Koninklijk Fortuin",
            "game-outfitKeyLime": "Limoen",
            "game-outfitCobaltShell": "Kobalt schelp",
            "game-outfitCarbonFiber": "Koolstofvezel",
            "game-outfitDarkGloves": "De Professional",
            "game-outfitGhillie": "Ghillie Kostuum",
            "game-outfitCamo": "Bos Camouflage",
            "game-outfitRed": "Doelpraktijk",
            "game-outfitWhite": "Arctische Wreker",
            "game-fists": "Fists",
            "game-karambit_rugged": "Karambit Rugged",
            "game-hud-karambit_rugged": "Karambit",
            "game-karambit_prismatic": "Karambit Prismatic",
            "game-hud-karambit_prismatic": "Karambit",
            "game-bayonet_rugged": "Bayonet Rugged",
            "game-hud-bayonet_rugged": "Bayonet",
            "game-bayonet_woodland": "Bayonet Woodland",
            "game-hud-bayonet_woodland": "Bayonet",
            "game-huntsman_rugged": "Huntsman Rugged",
            "game-hud-huntsman_rugged": "Huntsman",
            "game-huntsman_burnished": "Huntsman Burnished",
            "game-hud-huntsman_burnished": "Huntsman",
            "game-woodaxe": "Wood Axe",
            "game-fireaxe": "Fire Axe",
            "game-hook": "Hook",
            "game-pan": "Pan",
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
            "game-frag": "Frag Granaat",
            "game-hud-frag": "Frag",
            "game-smoke": "Smoke Grenade",
            "game-hud-smoke": "Smoke",
            "game-potato": "Aardappel",
            "game-hud-potato": "Aardappel",
            "game-potato_heavy": "Aardappel",
            "game-barrel_01": "een vat",
            "game-silo_01": "een silo",
            "game-oven_01": "een oven",
            "game-control_panel_01": "Control Panel",
            "game-control_panel_02": "Control Panel",
            "game-control_panel_03": "a computer terminal",
            "game-power_box_01": "a power box",
            "game-airdrop_crate_01": "Air Drop",
            "game-airdrop_crate_02": "Air Drop",
            "index-play-50v50": "Speel 50v50",
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
    be22c643: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
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
            o = (a("989ad62a"), a("34e32c48")),
            n = a("6b42806d"),
            s = a("10899aea"),
            l = a("7b5bbf6e"),
            c = a("c2a798c8"),
            m = function() {
                function e(t, a, r, m, p) {
                    i(this, e), this.spline = new l(t, r), this.waterWidth = a, this.shoreWidth = s.clamp(.75 * a, 4, 8), this.looped = r, this.center = c.create(0, 0);
                    for (var d = 0; d < this.spline.points.length; d++) this.center = c.add(this.center, this.spline.points[d]);
                    this.center = c.div(this.center, this.spline.points.length);
                    for (var h = 0, u = 0; u < this.spline.points.length; u++) h += c.length(c.sub(this.spline.points[u], this.center));
                    h /= this.spline.points.length;
                    var g = c.mul(c.sub(p.max, p.min), .5),
                        y = c.add(p.min, g);
                    this.waterPoly = [], this.shorePoly = [], this.waterWidths = [], this.shoreWidths = [];
                    for (var w = 0; w < t.length; w++) {
                        var x = t[w],
                            f = this.spline.getNormal(w / (t.length - 1)),
                            b = !1;
                        if (!this.looped && (0 == w || w == t.length - 1)) {
                            var _ = c.sub(x, y),
                                S = c.create(0, 0),
                                k = c.create(1, 0);
                            if (Math.abs(_.x) > Math.abs(_.y) ? (S = c.create(_.x > 0 ? p.max.x : p.min.x, x.y), k = c.create(_.x > 0 ? 1 : -1, 0)) : (S = c.create(x.x, _.y > 0 ? p.max.y : p.min.y), k = c.create(0, _.y > 0 ? 1 : -1)), c.lengthSqr(c.sub(S, x)) < 1) {
                                var v = c.perp(k);
                                c.dot(f, v) < 0 && (v = c.neg(v)), f = v, b = !0
                            }
                        }
                        var z = this.waterWidth;
                        if (!this.looped) {
                            var M = t.length,
                                T = 2 * (Math.max(1 - w / M, w / M) - .5);
                            z = (1 + 1.5 * Math.pow(T, 3)) * this.waterWidth
                        }
                        this.waterWidths.push(z);
                        for (var P = this.shoreWidth, I = null, C = 0; C < m.length; C++) {
                            var A = m[C],
                                E = A.spline.getClosestTtoPoint(x),
                                D = A.spline.getPos(E),
                                O = c.length(c.sub(D, x));
                            O < 2 * A.waterWidth && (P = s.max(P, A.shoreWidth)), (0 == w || w == t.length - 1) && O < 1.5 && !b && (I = A)
                        }
                        w > 0 && (P = (this.shoreWidths[w - 1] + P) / 2), this.shoreWidths.push(P), P += z;
                        var B = function(e, t, a) {
                                var i = c.add(e, t);
                                if (!s.pointInsidePolygon(i, a)) {
                                    var r = s.rayPolygonIntersect(e, t, a);
                                    if (r) return c.mul(t, r)
                                }
                                return t
                            },
                            L = void 0,
                            R = void 0,
                            F = void 0,
                            j = void 0;
                        if (this.looped) {
                            var q = c.sub(x, this.center),
                                N = c.length(q);
                            q = N > 1e-4 ? c.div(q, N) : c.create(1, 0);
                            var V = s.lerp(Math.pow(s.min(z / h, 1), .5), z, (1 - (h - z) / N) * N),
                                G = s.lerp(Math.pow(s.min(P / h, 1), .5), P, (1 - (h - P) / N) * N);
                            L = c.add(x, c.mul(q, z)), R = c.add(x, c.mul(q, -V)), F = c.add(x, c.mul(q, P)), j = c.add(x, c.mul(q, -G))
                        } else {
                            var U = c.mul(f, z),
                                H = c.mul(f, -z),
                                W = c.mul(f, P),
                                K = c.mul(f, -P);
                            I && (U = B(x, U, I.waterPoly), H = B(x, H, I.waterPoly), W = B(x, W, I.shorePoly), K = B(x, K, I.shorePoly)), L = c.add(x, U), R = c.add(x, H), F = c.add(x, W), j = c.add(x, K)
                        }
                        L = o.clampPosToAabb(L, p), R = o.clampPosToAabb(R, p), F = o.clampPosToAabb(F, p), j = o.clampPosToAabb(j, p), this.waterPoly.splice(w, 0, L), this.waterPoly.splice(this.waterPoly.length - w, 0, R), this.shorePoly.splice(w, 0, F), this.shorePoly.splice(this.shorePoly.length - w, 0, j)
                    }
                    for (var Z = c.create(Number.MAX_VALUE, Number.MAX_VALUE), X = c.create(-Number.MAX_VALUE, -Number.MAX_VALUE), Y = 0; Y < this.shorePoly.length; Y++) Z = c.minElems(Z, this.shorePoly[Y]), X = c.maxElems(X, this.shorePoly[Y]);
                    this.aabb = n.createAabb(Z, X, 0)
                }
                return r(e, [{
                    key: "distanceToShore",
                    value: function(e) {
                        var t = this.spline.getClosestTtoPoint(e),
                            a = c.length(c.sub(e, this.spline.getPos(t)));
                        return s.max(this.waterWidth - a, 0)
                    }
                }, {
                    key: "getWaterWidth",
                    value: function(e) {
                        var t = this.spline.points.length,
                            a = s.clamp(Math.floor(e * t), 0, t);
                        return this.waterWidths[a]
                    }
                }]), e
            }();
        e.exports = m
    },
    c2a798c8: function(e, t, a) {
        "use strict";

        function i(e, t) {
            return e < t ? e : t
        }

        function r(e, t) {
            return e > t ? e : t
        }
        var o = {
            create: function(e, t) {
                return {
                    x: e,
                    y: void 0 !== t ? t : e
                }
            },
            copy: function(e) {
                return {
                    x: e.x,
                    y: e.y
                }
            },
            set: function(e, t) {
                e.x = t.x, e.y = t.y
            },
            add: function(e, t) {
                return {
                    x: e.x + t.x,
                    y: e.y + t.y
                }
            },
            sub: function(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            },
            mul: function(e, t) {
                return {
                    x: e.x * t,
                    y: e.y * t
                }
            },
            div: function(e, t) {
                return {
                    x: e.x / t,
                    y: e.y / t
                }
            },
            neg: function(e) {
                return {
                    x: -e.x,
                    y: -e.y
                }
            },
            lengthSqr: function(e) {
                return e.x * e.x + e.y * e.y
            },
            length: function(e) {
                return Math.sqrt(o.lengthSqr(e))
            },
            normalize: function(e) {
                var t = o.length(e);
                return {
                    x: t > 1e-6 ? e.x / t : e.x,
                    y: t > 1e-6 ? e.y / t : e.y
                }
            },
            normalizeSafe: function(e, t) {
                t = t || o.create(1, 0);
                var a = o.length(e);
                return {
                    x: a > 1e-6 ? e.x / a : t.x,
                    y: a > 1e-6 ? e.y / a : t.y
                }
            },
            dot: function(e, t) {
                return e.x * t.x + e.y * t.y
            },
            perp: function(e) {
                return {
                    x: -e.y,
                    y: e.x
                }
            },
            proj: function(e, t) {
                return o.mul(t, o.dot(e, t) / o.dot(t, t))
            },
            rotate: function(e, t) {
                var a = Math.cos(t),
                    i = Math.sin(t);
                return {
                    x: e.x * a - e.y * i,
                    y: e.x * i + e.y * a
                }
            },
            mulElems: function(e, t) {
                return {
                    x: e.x * t.x,
                    y: e.y * t.y
                }
            },
            divElems: function(e, t) {
                return {
                    x: e.x / t.x,
                    y: e.y / t.y
                }
            },
            minElems: function(e, t) {
                return {
                    x: i(e.x, t.x),
                    y: i(e.y, t.y)
                }
            },
            maxElems: function(e, t) {
                return {
                    x: r(e.x, t.x),
                    y: r(e.y, t.y)
                }
            },
            randomUnit: function() {
                return o.normalizeSafe(o.create(Math.random() - .5, Math.random() - .5), o.create(1, 0))
            },
            lerp: function(e, t, a) {
                return o.add(o.mul(t, 1 - e), o.mul(a, e))
            },
            eq: function(e, t, a) {
                var i = void 0 !== a ? a : 1e-4;
                return Math.abs(e.x - t.x) <= i && Math.abs(e.y - t.y) <= i
            }
        };
        e.exports = o
    },
    c347b8dd: function(e, t, a) {
        "use strict";

        function i(e) {
            var t = m.Defs[e.type],
                a = "building" == t.type || "structure" == t.type ? 1.15 : 1,
                i = [l.transform(m.getBoundingCollider(e.type), e.pos, e.rot, e.scale * a)];
            if (void 0 !== t.bridgeLandBounds)
                for (var r = 0; r < t.bridgeLandBounds.length; r++) i.push(l.transform(t.bridgeLandBounds[r], e.pos, e.rot, e.scale));
            for (var o = 0; o < i.length; o++) d.addCollider(i[o], 65535, .1)
        }

        function r(e) {
            var t = m.Defs[e.type],
                a = "building" == t.type || "structure" == t.type ? 1.1 : 1,
                i = [l.transform(m.getBoundingCollider(e.type), e.pos, e.rot, e.scale * a)];
            if (void 0 !== t.mapObstacleBounds) {
                i = [];
                for (var r = 0; r < t.mapObstacleBounds.length; r++) i.push(l.transform(t.mapObstacleBounds[r], e.pos, e.rot, e.scale))
            }
            for (var o = 0; o < i.length; o++) d.addCollider(i[o], 255, .1)
        }

        function o(e) {
            var t = m.Defs[e.type];
            if (void 0 !== t.terrain.waterEdge) {
                var a = t.terrain.waterEdge,
                    i = l.transform(m.getBoundingCollider(e.type), e.pos, e.rot, 1.15 * e.scale),
                    r = p.add(i.min, p.mul(p.sub(i.max, i.min), .5)),
                    o = p.rotate(a.dir, e.rot),
                    n = function(e, t, a) {
                        a < 0 && (t = p.neg(t)), d.addRay(e, t, Math.abs(a), 16777215, 0)
                    };
                n(r, o, a.distMin), n(p.add(r, p.mul(p.perp(o), .5)), o, a.distMax)
            }
        }

        function n(e) {
            var t = m.Defs[e.type];
            if (void 0 !== t.terrain.bridge) {
                for (var a = t.bridgeLandBounds || [], i = 0; i < a.length; i++) {
                    var r = l.transform(a[i], e.pos, e.rot, e.scale);
                    d.addCollider(r, 16742144, 0)
                }
                for (var o = t.bridgeWaterBounds || [], n = 0; n < o.length; n++) {
                    var s = l.transform(o[n], e.pos, e.rot, e.scale);
                    d.addCollider(s, 30719, 0)
                }
                var h = c.getBridgeDims(e.type),
                    u = p.rotate(p.create(1, 0), e.rot);
                d.addRay(e.pos, u, .5 * h.length, 16711680, 0), d.addRay(e.pos, p.perp(u), .5 * h.width, 65280, 0);
                var g = c.getBridgeOverlapCollider(e.type, e.pos, e.rot, e.scale);
                d.addCollider(g, 7799039, 0)
            }
        }

        function s(e, t) {
            t = Math.floor(t);
            for (var a = 0; a < t; a++) {
                var i = e.getPos(a / t),
                    r = e.getPos((a + 1) / t);
                d.addLine(i, r, 65280, 0)
            }
        }
        var l = a("6b42806d"),
            c = a("7510cc08"),
            m = a("ceee80d9"),
            p = a("c2a798c8"),
            d = a("af8ba00f");
        e.exports = {
            renderMapBuildingBounds: i,
            renderMapObstacleBounds: r,
            renderWaterEdge: o,
            renderBridge: n,
            renderSpline: s
        }
    },
    c381ef30: function(e, t, a) {
        "use strict";

        function i() {
            if (n) {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                s.apply(this, [o].concat(t))
            }
        }

        function r() {
            console.log = i, console.log("Init system logger")
        }
        var o = "[dev]",
            n = void 0 !== function(e, t) {
                t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                    i = a.exec(t);
                if (i) return i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""
            }("debug"),
            s = console.log;
        e.exports = {
            init: r
        }
    },
    c4623452: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
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
            o = a("ce29f17f"),
            n = (a("26be8056"), [{
                region: "na",
                zone: "sfo",
                url: "na-sfo-p1.surviv.io"
            }, {
                region: "na",
                zone: "mia",
                url: "na-mia-p1.surviv.io"
            }, {
                region: "na",
                zone: "nyc",
                url: "na-nyc-p1.surviv.io"
            }, {
                region: "na",
                zone: "chi",
                url: "na-chi-p1.surviv.io"
            }, {
                region: "sa",
                zone: "sao",
                url: "sa-sao-p1.surviv.io"
            }, {
                region: "eu",
                zone: "fra",
                url: "eu-fra-p1.surviv.io"
            }, {
                region: "eu",
                zone: "waw",
                url: "eu-waw-p1.surviv.io"
            }, {
                region: "as",
                zone: "sgp",
                url: "as-sgp-p1.surviv.io"
            }, {
                region: "as",
                zone: "nrt",
                url: "as-nrt-p1.surviv.io"
            }, {
                region: "as",
                zone: "hkg",
                url: "as-hkg-p1.surviv.io"
            }, {
                region: "kr",
                zone: "sel",
                url: "kr-sel-p1.surviv.io"
            }]);
        o.prod || (n = [{
            region: "na",
            zone: "sfo",
            url: "localhost:3001"
        }]);
        var s = function() {
            function e() {
                i(this, e), this.ptcDataBuf = new ArrayBuffer(1), this.tests = n.map(function(e) {
                    return {
                        region: e.region,
                        zone: e.zone,
                        url: e.url,
                        ping: 9999,
                        active: !1,
                        complete: !1,
                        ws: null,
                        sendDelay: 0,
                        sendTime: 0,
                        sendCount: 0,
                        recvCount: 0,
                        recvCountMax: 6
                    }
                }), this.testsStarted = 0, this.testsCompleted = 0, this.printSummary = !0
            }
            return r(e, [{
                key: "start",
                value: function(e) {
                    if ("WebSocket" in window) {
                        for (var t = 0, a = 0; a < this.tests.length; a++) {
                            var i = this.tests[a];
                            !i.active && !i.complete && -1 !== e.indexOf(i.region) && (i.active = !0, this.testsStarted++, t++)
                        }
                        t > 0 && (this.printSummary = !0)
                    }
                }
            }, {
                key: "update",
                value: function(e) {
                    for (var t = this, a = 0; a < this.tests.length; a++) ! function(a) {
                        var i = t.tests[a];
                        if (!i.active) return "continue";
                        if (!i.ws) {
                            var r = "https:" == window.location.protocol ? "wss://" : "ws://",
                                o = new WebSocket(r + i.url + "/ptc");
                            o.binaryType = "arraybuffer", o.onopen = function() {}, o.onmessage = function(e) {
                                var t = (Date.now() - i.sendTime) / 1e3;
                                i.ping = Math.min(i.ping, t), i.recvCount++, i.sendDelay = .125
                            }, o.onerror = function(e) {
                                o.close()
                            }, o.onclose = function() {
                                i.active = !1, i.complete = !0, i.ws = null, t.testsCompleted++
                            }, i.ws = o, i.sendDelay = 0, i.sendCount = 0, i.recvCount = 0
                        }
                        i.ws.readyState == i.ws.OPEN && (i.sendDelay -= e, i.sendCount == i.recvCount && i.sendDelay < 0 && (i.sendTime = Date.now(), i.sendCount++, i.ws.send(t.ptcDataBuf)), i.recvCount >= i.recvCountMax && i.ws.close())
                    }(a);
                    if (this.printSummary && this.isComplete()) {
                        var i = this.tests.sort(function(e, t) {
                            return e.ping - t.ping
                        });
                        console.log("Ping test results"), console.log("----------------------------------------");
                        for (var a = 0; a < i.length; a++) {
                            var r = i[a];
                            console.log("region", r.region, "zone  ", r.zone, "ping  ", r.ping)
                        }
                        this.printSummary = !1
                    }
                }
            }, {
                key: "isComplete",
                value: function() {
                    return this.testsCompleted == this.testsStarted && this.testsStarted > 0
                }
            }, {
                key: "getRegionList",
                value: function() {
                    for (var e = [], t = 0; t < n.length; t++) {
                        var a = n[t].region; - 1 === e.indexOf(a) && e.push(a)
                    }
                    return e
                }
            }, {
                key: "getRegion",
                value: function() {
                    return this.tests.sort(function(e, t) {
                        return e.ping - t.ping
                    }), this.tests[0].region
                }
            }, {
                key: "getZones",
                value: function(e) {
                    for (var t = this.tests.sort(function(e, t) {
                            return e.ping - t.ping
                        }), a = [], i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.region == e && a.push(r.zone)
                    }
                    return a
                }
            }]), e
        }();
        e.exports = s
    },
    c60b5e9f: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function n(e, t, a) {
            var i = t - e,
                r = i * a;
            return Math.abs(r) < .01 ? i : r
        }

        function s() {
            var e = new d.Graphics;
            return e.position.set(0, 0), e.scale.set(1, 1), e.__zOrd = 0, e.__zIdx = 0, e
        }

        function l(e, t, a, i, r) {
            e.moveTo(t, a), e.lineTo(t, a + r), e.lineTo(t + i, a + r), e.lineTo(t + i, a), e.lineTo(t, a), e.closePath()
        }

        function c(e, t) {
            this.game = e, this.canvasMode = t, this.zIdx = 0, this.layer = 0, this.layerAlpha = 0, this.groundAlpha = 0, this.underground = !1, this.layers = [];
            for (var a = 0; a < 4; a++) this.layers.push(new g("layer_" + a));
            this.ground = new d.Graphics, this.ground.alpha = 0, this.layerMask = s(), this.debugLayerMask = null, this.layerMaskDirty = !0, this.layerMaskActive = !1
        }
        var m = function() {
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
            p = function e(t, a, i) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, a);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, a, i)
                }
                if ("value" in r) return r.value;
                var n = r.get;
                return void 0 !== n ? n.call(i) : void 0
            },
            d = (a("0e566746"), a("8b1dfb45")),
            h = (a("6b42806d"), a("ceee80d9"), a("10899aea"), a("1901e2d9"), a("c2a798c8")),
            u = a("f398b7c7"),
            g = function(e) {
                function t(e) {
                    i(this, t);
                    var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return a.debugName = e || "", a.dirty = !0, a
                }
                return o(t, e), m(t, [{
                    key: "addSortedChild",
                    value: function(e) {
                        p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addChild", this).call(this, e), this.dirty = !0
                    }
                }, {
                    key: "checkSort",
                    value: function() {
                        return !!this.dirty && (this.children.sort(function(e, t) {
                            return e.__zOrd == t.__zOrd ? e.__zIdx - t.__zIdx : e.__zOrd - t.__zOrd
                        }), this.dirty = !1, !0)
                    }
                }]), t
            }(d.Container);
        c.prototype = {
            n: function() {
                this.layerMask.parent && this.layerMask.parent.removeChild(this.layerMark), this.layerMask.destroy(!0)
            },
            addPIXIObj: function(e, t, a, i) {
                if (!e.transform) {
                    var r = new Error,
                        o = JSON.stringify({
                            type: "addChild",
                            stack: r.stack,
                            id: u.instanceId,
                            browser: navigator.userAgent,
                            playing: this.game.playing,
                            gameOver: this.game.gameOver,
                            spectating: this.game.spectating,
                            time: this.game.playingTicker,
                            mode: this.game.teamMode,
                            video: this.game.adManager.isPlayingVideo,
                            layer: t,
                            zOrd: a,
                            zIdx: i
                        });
                    u.logError(o)
                }
                void 0 === e.__layerIdx && (e.__layerIdx = -1, e.__zOrd = -1, e.__zIdx = -1);
                var n = t;
                2 & t && (n = a >= 100 ? 3 : 2), (e.parent != this.layers[n] || e.__zOrd != a || void 0 !== i && e.__zIdx != i) && (e.__layerIdx = n, e.__zOrd = a, e.__zIdx = void 0 !== i ? i : this.zIdx++, this.layers[n].addSortedChild(e))
            },
            setActiveLayer: function(e) {
                this.layer = e
            },
            setUnderground: function(e) {
                this.underground = e
            },
            resize: function(e, t) {
                var a = e.mapLoaded ? e.getMapDef().biome.colors.underground : 1772803;
                this.ground.clear(), this.ground.beginFill(a), this.ground.drawRect(0, 0, t.screenWidth, t.screenHeight), this.ground.endFill(), this.layerMaskDirty = !0
            },
            redrawLayerMask: function(e, t) {
                var a = this.layerMask;
                if (this.canvasMode) {
                    if (a.clear(), this.layerMaskActive) {
                        a.beginFill(16777215, 1), a.drawRect(0, 0, e.screenWidth, e.screenHeight);
                        for (var i = t.Tt.m(), r = 0; r < i.length; r++) {
                            var o = i[r];
                            if (o.active)
                                for (var n = 0; n < o.mask.length; n++) {
                                    var s = o.mask[n],
                                        c = h.mul(h.sub(s.max, s.min), .5),
                                        m = h.add(s.min, c),
                                        p = e.pointToScreen(h.sub(m, c)),
                                        d = e.pointToScreen(h.add(m, c));
                                    a.drawRect(p.x, p.y, d.x - p.x, d.y - p.y)
                                }
                        }
                        a.endFill()
                    }
                } else {
                    if (this.layerMaskDirty) {
                        this.layerMaskDirty = !1, a.clear(), a.beginFill(16777215, 1), l(a, 0, 0, 1024, 1024);
                        for (var u = t.Tt.m(), g = 0; g < u.length; g++) {
                            var y = u[g];
                            if (y.active)
                                for (var w = 0; w < y.mask.length; w++) {
                                    var x = y.mask[w],
                                        f = h.mul(h.sub(x.max, x.min), .5),
                                        b = h.add(x.min, f),
                                        _ = b.x - f.x,
                                        S = b.y - f.y,
                                        k = 2 * f.x,
                                        v = 2 * f.y;
                                    l(a, _, S, k, v), a.addHole()
                                }
                        }
                        a.endFill()
                    }
                    var z = e.pointToScreen(h.create(0, 0)),
                        M = (e.pointToScreen(h.create(1, 0)), e.scaleToScreen(1));
                    a.position.set(z.x, z.y), a.scale.set(M, -M)
                }
            },
            redrawDebugLayerMask: function(e, t) {
                var a = this.debugLayerMask;
                a.clear(), a.beginFill(16711935, 1);
                for (var i = t.Tt.m(), r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (o.active)
                        for (var n = 0; n < o.mask.length; n++) {
                            var s = o.mask[n],
                                c = h.mul(h.sub(s.max, s.min), .5),
                                m = h.add(s.min, c),
                                p = m.x - c.x,
                                d = m.y - c.y,
                                u = 2 * c.x,
                                g = 2 * c.y;
                            l(a, p, d, u, g)
                        }
                }
                a.endFill();
                var y = e.pointToScreen(h.create(0, 0)),
                    w = (e.pointToScreen(h.create(1, 0)), e.scaleToScreen(1));
                a.position.set(y.x, y.y), a.scale.set(w, -w)
            },
            c: function(e, t, a, i) {
                var r = this.layer > 0 ? 1 : 0;
                this.layerAlpha += n(this.layerAlpha, r, 12 * e);
                var o = 1 == this.layer && this.underground ? 1 : 0;
                this.groundAlpha += n(this.groundAlpha, o, 12 * e), this.layers[0].alpha = 1, this.layers[1].alpha = this.layerAlpha, this.layers[2].alpha = 1, this.layers[3].alpha = 1, this.ground.alpha = this.groundAlpha, this.layers[0].visible = this.groundAlpha < 1, this.layers[1].visible = this.layerAlpha > 0, this.ground.visible = this.groundAlpha > 0, this.redrawLayerMask(t, a);
                var s = 0 == this.layer;
                s && !this.layerMaskActive ? (this.layers[2].mask = this.layerMask, this.layers[2].addChild(this.layerMask), this.layerMaskActive = !0) : !s && this.layerMaskActive && (this.layers[2].mask = null, this.layers[2].removeChild(this.layerMask), this.layerMaskActive = !1);
                for (var l = 0, c = 0; c < this.layers.length; c++) this.layers[c].checkSort() && l++
            }
        }, e.exports = {
            RenderGroup: g,
            Ye: c
        }
    },
    c73dee75: function(e, t, a) {
        "use strict";

        function i(e, t, a, i) {
            var r = Math.atan2(i.y, i.x);
            return {
                p0: h.add(a, h.rotate(e, r)),
                p1: h.add(a, h.rotate(t, r))
            }
        }

        function r(e, t, a, i, r, o, n) {
            for (var s = Math.floor(d.random(1, 2)), l = h.mul(i, 9.5), c = 0; c < s; c++) l = h.rotate(l, (Math.random() - .5) * Math.PI / 3), o.addParticle(e, r, a, l);
            n.playGroup(t, {
                channel: "hits",
                soundPos: a,
                layer: r,
                muffled: !0
            })
        }

        function o() {
            this.bullets = [], this.tracerColors = {}
        }
        var n = a("8b1dfb45"),
            s = a("34e32c48"),
            l = a("6b42806d"),
            c = a("989ad62a"),
            m = (a("8649e148"), a("ceee80d9")),
            p = a("10899aea"),
            d = a("1901e2d9"),
            h = a("c2a798c8");
        a("af8ba00f"), o.prototype = {
            onMapLoad: function(e) {
                this.tracerColors = d.mergeDeep({}, c.tracerColors, e.getMapDef().biome.tracerColors)
            },
            addBullet: function(e, t, a) {
                for (var i = null, r = 0; r < this.bullets.length; r++)
                    if (!this.bullets[r].alive && !this.bullets[r].collided) {
                        i = this.bullets[r];
                        break
                    }
                i || (i = {}, i.alive = !1, i.container = new n.Container, i.container.pivot.set(14.5, 0), i.container.visible = !1, i.bulletTrail = n.Sprite.fromImage("player-bullet-trail-02.img"), i.bulletTrail.anchor.set(.5, .5), i.container.addChild(i.bulletTrail), this.bullets.push(i));
                var o = c.bullets[e.bulletType],
                    s = 1 + e.varianceT * o.variance,
                    l = p.remap(e.distAdjIdx, 0, 16, -1, 1),
                    m = o.distance / Math.pow(c.bullet.reflectDistDecay, e.reflectCount);
                e.clipDistance && (m = e.distance), i.alive = !0, i.isNew = !0, i.collided = !1, i.scale = 1, i.playerId = e.playerId, i.startPos = h.copy(e.pos), i.pos = h.copy(e.pos), i.dir = h.copy(e.dir), i.layer = e.layer, i.speed = o.speed * s, i.distance = m * s + l, i.damageSelf = o.shrapnel || e.reflectCount > 0, i.reflectCount = e.reflectCount, i.reflectObjId = e.reflectObjId, i.whizHeard = !1;
                var d = Math.atan2(i.dir.x, i.dir.y);
                i.container.rotation = d - Math.PI / 2, i.layer = e.layer;
                var u = t.ve(i.playerId);
                u && 2 & u.layer && (i.layer |= 2);
                var g = this.tracerColors[o.tracerColor],
                    y = g.regular;
                u && u.isOnBrightSurface && (y = g.saturated), i.bulletTrail.scale.set(.8, o.tracerWidth), i.tracerLength = o.tracerLength, i.bulletTrail.tint = y, i.suppressed = !!o.suppressed, i.tracerAlphaRate = g.alphaRate, i.tracerAlphaMin = g.alphaMin, i.bulletTrail.alpha = 1, i.reflectCount > 0 && (i.bulletTrail.alpha *= .5), i.container.visible = !0, a.addPIXIObj(i.container, i.layer, 20)
            },
            c: function(e, t, a, o, n, u, g, y) {
                for (var w = t.Se.m(), x = 0; x < this.bullets.length; x++) {
                    var f = this.bullets[x];
                    if (f.collided && (f.scale = p.max(f.scale - 6 * e, 0), f.scale <= 0 && (f.collided = !1, f.container.visible = !1)), f.alive) {
                        var b = f.distance - h.length(h.sub(f.startPos, f.pos)),
                            _ = p.min(b, e * f.speed),
                            S = h.copy(f.pos);
                        if (f.pos = h.add(f.pos, h.mul(f.dir, _)), !n.ie.dead && d.sameAudioLayer(n.layer, f.layer) && h.length(h.sub(o.pos, f.pos)) < 7.5 && !f.whizHeard && f.playerId != n.__id && (y.playGroup("bullet_whiz", {
                                soundPos: f.pos,
                                fallOff: 4
                            }), f.whizHeard = !0), f.tracerAlphaRate && f.suppressed) {
                            var k = f.tracerAlphaRate;
                            f.bulletTrail.alpha = p.max(f.tracerAlphaMin, f.bulletTrail.alpha * k)
                        }
                        for (var v = [], z = a.pe.m(), M = 0; M < z.length; M++) {
                            var T = z[M];
                            if (!(!T.active || T.dead || !d.sameLayer(T.layer, f.layer) || T.height < c.bullet.height || f.reflectCount > 0 && T.__id == f.reflectObjId)) {
                                var P = l.intersectSegment(T.collider, S, f.pos);
                                P && v.push({
                                    type: "obstacle",
                                    obstacleType: T.type,
                                    collidable: T.collidable,
                                    point: P.point,
                                    normal: P.normal
                                })
                            }
                        }
                        for (var I = 0; I < w.length; I++) {
                            var C = w[I];
                            if (C.active && !C.ie.dead && (d.sameLayer(C.ie.layer, f.layer) || 2 & C.ie.layer) && (C.__id != f.playerId || f.damageSelf)) {
                                var A = null;
                                if (C.hasActivePan()) {
                                    var E = C,
                                        D = E.getPanSegment(),
                                        O = i(D.p0, D.p1, E.posOld, E.dirOld),
                                        B = i(D.p0, D.p1, E.pos, E.dir),
                                        L = s.intersectSegmentSegment(S, f.pos, O.p0, O.p1),
                                        R = s.intersectSegmentSegment(S, f.pos, B.p0, B.p1),
                                        F = R || L;
                                    if (F) {
                                        var j = h.normalize(h.perp(h.sub(B.p1, B.p0)));
                                        A = {
                                            point: F.point,
                                            normal: j
                                        }
                                    }
                                }
                                var q = s.intersectSegmentCircle(S, f.pos, C.pos, C.rad);
                                if (q && (!A || h.length(h.sub(q.point, f.startPos)) < h.length(h.sub(A.point, f.startPos))) ? v.push({
                                        type: "player",
                                        player: C,
                                        point: q.point,
                                        normal: q.normal
                                    }) : A && v.push({
                                        type: "pan",
                                        collidable: !0,
                                        point: A.point,
                                        normal: A.normal,
                                        layer: C.layer
                                    }), q || A) break
                            }
                        }
                        for (var N = 0; N < v.length; N++) {
                            var V = v[N];
                            V.dist = h.length(h.sub(V.point, S))
                        }
                        v.sort(function(e, t) {
                            return e.dist - t.dist
                        });
                        var G = !1,
                            U = t.ve(f.playerId);
                        U && (U.ie.dead || U.ie.downed) && (G = !0);
                        for (var H = !1, W = 0; W < v.length; W++) {
                            var K = v[W];
                            if ("obstacle" == K.type) {
                                var Z = m.Defs[K.obstacleType];
                                r(Z.hitParticle, Z.sound.bullet, K.point, K.normal, f.layer, g, y), H = K.collidable
                            } else if ("player" == K.type) {
                                if (!G) {
                                    var X = K.player,
                                        Y = h.sub(K.point, X.pos);
                                    Y.y *= -1, g.addParticle("bloodSplat", X.layer, h.mul(Y, o.ppu), h.create(0, 0), 1, 1, X.container), y.playGroup("player_bullet_hit", {
                                        soundPos: X.pos,
                                        fallOff: 1,
                                        layer: X.layer,
                                        muffled: !0
                                    })
                                }
                                H = !0
                            } else "pan" == K.type && (r("barrelChip", c.items.pan.sound.bullet, K.point, K.normal, K.layer, g, y), H = !0);
                            if (H) {
                                f.pos = K.point;
                                break
                            }
                        }
                        if (!(2 & f.layer)) {
                            for (var J = a.Tt.m(), Q = f.layer, $ = 0; $ < J.length; $++) {
                                var ee = J[$];
                                if (ee.active) {
                                    for (var te = !1, ae = !1, ie = 0; ie < ee.stairs.length; ie++) {
                                        var re = ee.stairs[ie];
                                        if (!re.lootOnly && l.intersectSegment(re.collision, f.pos, S)) {
                                            te = !0;
                                            break
                                        }
                                    }
                                    for (var oe = 0; oe < ee.mask.length; oe++)
                                        if (l.intersectSegment(ee.mask[oe], f.pos, S)) {
                                            ae = !0;
                                            break
                                        }
                                    te && !ae && (Q |= 2)
                                }
                            }
                            Q != f.layer && (f.layer = Q, u.addPIXIObj(f.container, f.layer, 20))
                        }(H || p.eqAbs(b, _)) && (f.collided = !0, f.alive = !1), f.isNew = !1
                    }
                }
            },
            createBulletHit: function(e, t, a) {
                var i = e.ve(t);
                i && a.playGroup("player_bullet_hit", {
                    soundPos: i.pos,
                    fallOff: 1,
                    layer: i.layer,
                    muffled: !0
                })
            },
            render: function(e, t) {
                for (var a = (e.pixels(1), 0); a < this.bullets.length; a++) {
                    var i = this.bullets[a];
                    if (i.alive || i.collided) {
                        var r = h.length(h.sub(i.pos, i.startPos)),
                            o = e.pointToScreen(i.pos);
                        i.container.position.set(o.x, o.y);
                        var n = e.pixels(1),
                            s = p.min(15 * i.tracerLength, r / 2);
                        i.container.scale.set(n * s * i.scale, n)
                    }
                }
            }
        }, e.exports = {
            it: o,
            playHitFx: r
        }
    },
    c99e6613: function(e, t, a) {
        "use strict";

        function i() {
            this.nameInput = r("#player-name-input-solo"), this.serverSelect = r("#server-select-main"), this.playMode0Btn = r("#btn-start-mode-0"), this.playMode1Btn = r("#btn-start-mode-1"), this.playMode2Btn = r("#btn-start-mode-2"), this.muteBtns = r(".btn-sound-toggle"), this.aimLineBtn = r("#btn-game-aim-line"), this.masterSliders = r(".sl-master-volume"), this.soundSliders = r(".sl-sound-volume"), this.musicSliders = r(".sl-music-volume"), this.serverWarning = r("#server-warning"), this.languageSelect = r(".language-select"), this.startMenuWrapper = r("#start-menu-wrapper"), this.gameAreaWrapper = r("#game-area-wrapper"), this.config = new u, this.config.addModifiedListener(this.onConfigModified.bind(this)), this.localization = new S, this.adManager = new m.AdManager(this.config), this.account = new c(this.config, this.localization), this.loadoutMenu = new _(this.config), this.pingTest = new v, this.audioManager = new h, this.ambience = new d, this.teamMenu = new T(this.config, this.pingTest, this.localization, this.joinGame.bind(this), this.audioManager), this.teamMenu.onLeave = this.onTeamMenuLeave.bind(this), this.pixi = null, this.textureManager = null, this.input = null, this.inputBinds = null, this.inputBindUi = null, this.game = null, this.loadComplete = !1, this.initialized = !1, this.active = !1, this.contextListener = function(e) {
                e.preventDefault()
            }, this.errorMessage = "", this.playEnabled = !1, this.quickPlayPendingModeIdx = -1, this.playTimeout = 0, this.pauseTime = 0, this.wasPlayingVideo = !1, this.checkedPingTest = !1, this.systemMemory = Number.MAX_VALUE, this.siteInfo = {}, this.siteInfoLoaded = !1, this.siteInfoApplied = !1, g.webview && g.version > "1.0.0" ? this.loadWebview() : this.loadBrowser()
        }
        a("c381ef30").init();
        var r = a("8ee62bea"),
            o = a("8b1dfb45");
        o.utils.skipHello();
        var n = a("989ad62a"),
            s = a("10899aea"),
            l = a("300e2704"),
            c = a("a68e9107"),
            m = a("2d958752"),
            p = a("259eae5b"),
            d = a("0b12821e"),
            h = a("4b528868"),
            u = a("6ffe8b70"),
            g = a("ce29f17f"),
            y = (a("e5d16b4d"), a("f398b7c7")),
            w = a("9b5f96fd"),
            x = a("26be8056"),
            f = a("4b8d140f"),
            b = a("d306eab6"),
            _ = a("153d9481"),
            S = a("7d64d541"),
            k = a("484b3444"),
            v = a("c4623452"),
            z = a("d84c74f8"),
            M = a("076760a2"),
            T = a("61fc98e9"),
            P = a("d3da5587"),
            I = a("f4d48896");
        i.prototype = {
                loadBrowser: function() {
                    var e = this;
                    this.config.load(function() {
                        e.requestSiteInfo(), e.startPingTest(), e.loadComplete = !0
                    })
                },
                loadWebview: function() {
                    var e = this;
                    document.addEventListener("deviceready", function() {
                            document.addEventListener("pause", function() {
                                e.onPause()
                            }), document.addEventListener("resume", function() {
                                e.onResume()
                            }), r("#news-block h3").html("What's New!!");
                            var t = [],
                                a = function(e) {
                                    t.push(e)
                                },
                                i = function(a) {
                                    var i = t.indexOf(a); - 1 !== i && t.splice(i, 1), 0 == t.length && (e.loadComplete = !0)
                                };
                            a("loadConfig"), a("loadSystemInfo"), e.config.load(function() {
                                e.requestSiteInfo(), e.startPingTest(), i("loadConfig")
                            }), g.version >= "1.0.8" ? I.getSystemMemoryInfo(function(t) {
                                e.systemMemory = t.capacity || Number.MAX_VALUE, i("loadSystemInfo")
                            }) : i("loadSystemInfo")
                        }, !1),
                        function(e, t, a) {
                            var i, r = g.version >= "1.0.8" ? "cordova/" + g.version : "cordova",
                                o = r + "/" + g.os + "/cordova.js",
                                n = e.getElementsByTagName(t)[0];
                            e.getElementById(a) || (i = e.createElement(t), i.id = a, i.onload = function() {}, i.src = o, n.parentNode.insertBefore(i, n))
                        }(document, "script", "cordova-js")
                },
                o: function() {
                    var e = this;
                    if (!this.initialized) {
                        if (!this.loadComplete) return void setTimeout(function() {
                            e.o()
                        }, 10);
                        if (this.initialized = !0, this.config.teamAutoFill = !0, g.webview ? k.applyWebviewStyling(g.tablet) : g.mobile && k.applyMobileBrowserStyling(g.tablet), g.webview && g.version >= "1.0.8" && setTimeout(function() {
                                e.adManager.showBannerAd()
                            }, 0), this.adManager.init(), this.account.init(), this.localization.localizeIndex(), this.nameInput.maxLength = l.Constants.kPlayerNameMaxLen, this.playMode0Btn.on("click", function() {
                                e.tryQuickStartGame(0)
                            }), this.playMode1Btn.on("click", function() {
                                e.tryQuickStartGame(1)
                            }), this.playMode2Btn.on("click", function() {
                                e.tryQuickStartGame(2)
                            }), this.serverSelect.change(function() {
                                var t = e.serverSelect.find(":selected").val();
                                e.config.set("region", t)
                            }), r(document).on("mouseup", function(e) {
                                4 != e.which && 5 != e.which || e.preventDefault()
                            }), this.nameInput.on("blur", function(t) {
                                e.setConfigFromDOM()
                            }), this.muteBtns.on("click", function(t) {
                                e.config.set("muteAudio", !e.config.get("muteAudio"))
                            }), this.muteBtns.on("mousedown", function(e) {
                                e.stopPropagation()
                            }), r(this.masterSliders).on("mousedown", function(e) {
                                e.stopPropagation()
                            }), r(this.soundSliders).on("mousedown", function(e) {
                                e.stopPropagation()
                            }), r(this.musicSliders).on("mousedown", function(e) {
                                e.stopPropagation()
                            }), this.masterSliders.on("input", function(t) {
                                var a = r(t.target).val() / 100;
                                e.audioManager.setMasterVolume(a), e.config.set("masterVolume", a)
                            }), this.soundSliders.on("input", function(t) {
                                var a = r(t.target).val() / 100;
                                e.audioManager.setSoundVolume(a), e.config.set("soundVolume", a)
                            }), this.musicSliders.on("input", function(t) {
                                var a = r(t.target).val() / 100;
                                e.audioManager.setMusicVolume(a), e.config.set("musicVolume", a)
                            }), r(".modal-settings-item").children("input").each(function(t, a) {
                                var i = r(a);
                                i.prop("checked", e.config.get(i.prop("id")))
                            }), r(".modal-settings-item > input:checkbox").change(function(t) {
                                var a = r(t.target);
                                e.config.set(a.prop("id"), a.is(":checked"))
                            }), r(".btn-fullscreen-toggle").on("click", function() {
                                x.toggleFullScreen()
                            }), this.languageSelect.on("change", function(t) {
                                var a = t.target.value;
                                a && e.config.set("language", a)
                            }), r("#btn-create-team").on("click", function() {
                                e.tryJoinTeam(!0)
                            }), r("#btn-team-mobile-link-join").on("click", function() {
                                var t = r("#team-link-input").val().trim(),
                                    a = t.indexOf("#");
                                a >= 0 && (t = t.slice(a + 1)), t.length > 0 ? (r("#team-mobile-link").css("display", "none"), e.tryJoinTeam(!1, t)) : (r("#team-mobile-link-desc").css("display", "none"), r("#team-mobile-link-warning").css("display", "none").fadeIn(100))
                            }), r("#btn-team-leave").on("click", function() {
                                window.history && window.history.replaceState("", "", "/"), e.game && e.game.n(), e.teamMenu.leave()
                            }), "WebSocket" in window)
                            if (x.authLocation()) {
                                if ("ie" == g.browser) {
                                    var t = 'Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!';
                                    t += '<br><br>¡Usa el <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">navegador Chrome</a> para una mejor experiencia de juego!', t += '<br><br><a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">구글 크롬</a> 브라우저로이 게임을 즐겨보세요.';
                                    var a = r("#modal-notification");
                                    a.find(".modal-settings-text").html(t), a.fadeIn(200)
                                }
                            } else {
                                y.logProxy(window.location.hostname);
                                var i = r("#modal-notification");
                                i.find(".modal-settings-text").html('Please use the <a href="https://surviv.io" target="_blank">official surviv.io site</a> for a better playing experience!'), i.fadeIn(200)
                            } else {
                            y.storeGeneric("error", "no_websocket");
                            var n = r("#modal-notification");
                            n.find(".modal-settings-text").html('WebSockets are required to play.<br><br>Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!'), n.fadeIn(200)
                        }
                        if (/Android.*; wv\)/.test(navigator.userAgent) && !g.webview) {
                            var s = function(e) {
                                    return e.map(function(e) {
                                        return String.fromCharCode(e)
                                    }).join("")
                                },
                                c = document.body;
                            if (c) {
                                for (y.storeGeneric("error", "wv"), y.enabled = !1; c.firstChild;) c.removeChild(c.firstChild);
                                var m = [68, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 111, 102, 102, 105, 99, 105, 97, 108, 32, 65, 110, 100, 114, 111, 105, 100, 32, 97, 112, 112, 32, 104, 101, 114, 101, 58],
                                    p = r("<div/>", {
                                        css: {
                                            marginTop: "10%",
                                            width: "100%",
                                            textAlign: "center"
                                        }
                                    }),
                                    d = r("<div/>", {
                                        text: s(m),
                                        css: {
                                            textAlign: "center",
                                            fontSize: "24px"
                                        }
                                    }),
                                    h = [104, 116, 116, 112, 115, 58, 47, 47, 112, 108, 97, 121, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 115, 116, 111, 114, 101, 47, 97, 112, 112, 115, 47, 100, 101, 116, 97, 105, 108, 115, 63, 105, 100, 61, 105, 111, 46, 115, 117, 114, 118, 105, 118, 46, 115, 117, 114, 118, 105, 118, 95, 105, 111, 95, 109, 111, 98, 105, 108, 101],
                                    u = r("<a/>", {
                                        href: s(h),
                                        class: "btn-download-android btn-download-app btn-darken",
                                        css: {
                                            marginTop: "20px",
                                            position: "absolute",
                                            left: "50%",
                                            transform: "translateX(-50%)"
                                        }
                                    });
                                p.append(d), p.append(u), c.appendChild(p[0])
                            }
                            this.game && this.game.ws && this.game.ws.close()
                        }
                        this.account.load(), this.loadoutMenu.init(this.account), this.playEnabled = !0, this.setDOMFromConfig(), this.setAppActive(!0), this.audioManager.preloadSounds();
                        var _ = document.getElementById("cvs"),
                            S = window.devicePixelRatio > 1 ? 2 : 1;
                        "ios" == g.os && (o.settings.PRECISION_FRAGMENT = "highp");
                        var v = function(e) {
                                return new o.Application({
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                    view: _,
                                    antialias: !1,
                                    resolution: S,
                                    forceCanvas: e
                                })
                            },
                            z = null;
                        try {
                            z = v(!1)
                        } catch (e) {
                            z = v(!0), y.storeGeneric("render", "forceCanvas")
                        }
                        this.pixi = z, this.pixi.renderer.plugins.interaction.destroy(), this.pixi.ticker.add(this.update, this);
                        var T = Math.min(window.screen.width, window.screen.height),
                            I = Math.max(window.screen.width, window.screen.height);
                        T *= window.devicePixelRatio, I *= window.devicePixelRatio;
                        var C = I < 1366 && T < 768,
                            A = C || !this.config.get("highResTex") ? "low" : "high";
                        (g.mobile && !g.tablet || g.webview && this.systemMemory <= 2147483648 || this.pixi.renderer.type == o.RENDERER_TYPE.CANVAS) && (A = "low");
                        var E = x.getParameterByName("textureRes");
                        E && (A = E), P.loadStaticDomImages(), this.textureManager = new M.TextureManager(this.pixi.renderer, A), this.textureManager.loadAtlasList(["gradient", "shared", "main"]), this.input = new f._e(this.pixi.view), this.inputBinds = new b.InputBinds(this.input, this.config), this.inputBindUi = new b.InputBindUi(this.input, this.inputBinds);
                        var D = function() {
                                e.setAppActive(!1), e.ambience.onGameStart(), e.adManager.onGameStart();
                                var t = void 0 != window.menu;
                                y.storeGeneric("socketOn", t)
                            },
                            O = function(t) {
                                e.game.n(), e.errorMessage = e.localization.translate(t || ""), e.teamMenu.onGameComplete(), e.ambience.onGameStop(e.audioManager), e.setAppActive(!0), "index-invalid-protocol" == t && e.showInvalidProtocolModal()
                            };
                        if (this.game = new w.$t(this.pixi, this.audioManager, this.localization, this.config, this.input, this.inputBinds, this.inputBindUi, this.adManager, this.ambience, this.textureManager, this.loadoutMenu, D, O), this.onResize(), this.tryJoinTeam(!1), k.init(this.inputBinds, this.inputBindUi), window.adsBlocked) {
                            var B = document.getElementById("main-med-rect-blocked");
                            B && (B.style.display = "block");
                            var L = document.getElementById("survivio_300x250_main");
                            L && (L.style.display = "none");
                            var R = document.getElementById("surviv-io_300x250");
                            R && (R.style.display = "none")
                        }
                        this.tryApplySiteInfo(), window.aiptag && (window.aiptag.gdprConsent = window.cookiesConsented, window.aiptag.consented = window.cookiesConsented)
                    }
                },
                onResize: function() {
                    g.onResize(), "ios" == g.os && ("iphonex" == g.model ? g.isLandscape ? r(".main-volume-slider").css("width", "90%") : r(".main-volume-slider").css("width", "") : window.navigator.standalone || (g.isLandscape ? (r("#start-main-center").attr("style", ""), r("#modal-customize .modal-content").attr("style", "")) : r("#modal-customize .modal-content").css({
                        transform: "translate(-50%, -50%) scale(0.45)",
                        top: "38%"
                    }))), g.tablet && (r("#featured-youtuber").remove(), r(".btn-youtube").remove()), g.touch ? r(".btn-start-fullscreen").css("display", "none") : r(".btn-start-fullscreen").css("display", "block"), r(".btn-keybind").css("display", g.mobile ? "none" : "inline-block"), this.pixi && this.pixi.renderer.resize(g.screenWidth, g.screenHeight), this.game && this.game.initialized && this.game.Ot(), this.refreshUi()
                },
                onPause: function() {
                    g.webview && (this.pauseTime = Date.now(), this.audioManager.setMute(!0), "ios" == g.os && this.pixi && this.pixi.ticker.remove(this.pixi.render, this.pixi))
                },
                onResume: function() {
                    g.webview && (this.game && this.game.playing && Date.now() - this.pauseTime > 3e4 ? window.location.reload(!0) : this.audioManager.setMute(this.config.get("muteAudio")), "ios" == g.os && this.pixi && this.pixi.ticker.add(this.pixi.render, this.pixi, o.UPDATE_PRIORITY.LOW))
                },
                onUnload: function() {
                    this.teamMenu.leave()
                },
                startPingTest: function() {
                    var e = this.config.get("regionSelected") ? [this.config.get("region")] : this.pingTest.getRegionList();
                    this.pingTest.start(e)
                },
                requestSiteInfo: function() {
                    var e = this,
                        t = p.resolveUrl("/api/site_info?language=" + this.localization.getLocale());
                    r.ajax(t).done(function(t, a) {
                        e.siteInfo = t || {}, e.teamMenu.siteInfo = e.siteInfo, e.siteInfoLoaded = !0, e.tryApplySiteInfo()
                    })
                },
                tryApplySiteInfo: function() {
                    if (!this.siteInfoApplied && this.siteInfoLoaded && this.initialized) {
                        var e = this.siteInfo.pops;
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; a++) {
                                var i = t[a],
                                    o = e[i],
                                    n = r("#server-opts").children('option[value="' + i + '"]');
                                n.text(n.data("label") + " [" + o + "]")
                            }
                        var s = !1,
                            l = r("#featured-streamers"),
                            c = r(".streamer-list");
                        if (!g.mobile && this.siteInfo.twitch)
                            for (var m = 0; m < this.siteInfo.twitch.length; m++) {
                                var p = this.siteInfo.twitch[m],
                                    d = r("#featured-streamer-template").clone();
                                d.attr("class", "featured-streamer streamer-tooltip").attr("id", "");
                                var h = d.find("a"),
                                    u = this.localization.translate(1 == p.viewers ? "index-viewer" : "index-viewers");
                                h.html(p.name + " <span>" + p.viewers + " " + u + "</span>"), h.css("background-image", "url(" + p.img + ")"), h.attr("href", p.url), c.append(d), s = !0
                            }
                        l.css("visibility", s ? "visible" : "hidden");
                        var y = r("#featured-youtuber"),
                            w = this.siteInfo.youtube;
                        w && r(".btn-youtuber").attr("href", this.siteInfo.youtube.link).html(this.siteInfo.youtube.name), y.css("display", w ? "block" : "none"), this.siteInfo.promptConsent && z.showCookieConsent(this.config), this.siteInfoApplied = !0
                    }
                },
                setAppActive: function(e) {
                    this.active = e, this.quickPlayPendingModeIdx = -1, this.sessionGames++, this.refreshUi()
                },
                onTeamMenuLeave: function(e) {
                    e && "" != e && window.history && window.history.replaceState("", "", "/"), this.errorMessage = e, this.setDOMFromConfig(), this.refreshUi()
                },
                setConfigFromDOM: function() {
                    var e = x.sanitizeNameInput(this.nameInput.val());
                    this.config.set("playerName", e);
                    var t = this.serverSelect.find(":selected").val();
                    this.config.set("region", t)
                },
                setDOMFromConfig: function() {
                    var e = this;
                    this.nameInput.val(this.config.get("playerName")), this.serverSelect.find("option").each(function(t, a) {
                        a.selected = a.value == e.config.get("region")
                    }), this.languageSelect.val(this.config.get("language"))
                },
                onConfigModified: function(e) {
                    var t = this.config.get("muteAudio");
                    t != this.audioManager.mute && (this.muteBtns.removeClass(t ? "audio-on-icon" : "audio-off-icon"), this.muteBtns.addClass(t ? "audio-off-icon" : "audio-on-icon"), this.audioManager.setMute(t));
                    var a = this.config.get("masterVolume");
                    this.masterSliders.val(100 * a), this.audioManager.setMasterVolume(a);
                    var i = this.config.get("soundVolume");
                    this.soundSliders.val(100 * i), this.audioManager.setSoundVolume(i);
                    var r = this.config.get("musicVolume");
                    this.musicSliders.val(100 * r), this.audioManager.setMusicVolume(r);
                    var o = this.config.get("language");
                    o != this.localization.getLocale() && (this.localization.setLocale(o), this.localization.localizeIndex()), "region" == e && (this.config.set("regionSelected", !0), this.startPingTest()), "highResTex" == e && location.reload()
                },
                refreshUi: function() {
                    var e = this;
                    this.startMenuWrapper.css("display", this.active ? "flex" : "none"), this.gameAreaWrapper.css({
                        display: this.active ? "none" : "block",
                        opacity: this.active ? 0 : 1
                    }), this.active ? (r("body").removeClass("user-select-none"), document.removeEventListener("contextmenu", this.contextListener)) : (r("body").addClass("user-select-none"), r("#start-main").stop(!0), document.addEventListener("contextmenu", this.contextListener)), r("#ad-block-left").css("display", !g.isLandscape && this.teamMenu.active ? "none" : "block");
                    var t = this.active && "" != this.errorMessage;
                    this.serverWarning.css({
                        display: "block",
                        opacity: t ? 1 : 0
                    }), this.serverWarning.html(this.errorMessage);
                    var a = function(t, a) {
                        t.html(e.quickPlayPendingModeIdx === a ? '<div class="ui-spinner"></div>' : t.attr("data-label"))
                    };
                    a(this.playMode0Btn, 0), a(this.playMode1Btn, 1), a(this.playMode2Btn, 2)
                },
                tryJoinTeam: function(e, t) {
                    if (this.active && -1 === this.quickPlayPendingModeIdx) {
                        var a = t || window.location.hash.slice(1);
                        (e || "" != a) && (this.setConfigFromDOM(), this.teamMenu.connect(e, a), this.refreshUi())
                    }
                },
                tryQuickStartGame: function(e) {
                    var t = (new Date).getTime();
                    if (this.playEnabled && -1 === this.quickPlayPendingModeIdx && !(t < this.playTimeout)) {
                        this.playTimeout = t + 1e3, this.errorMessage = "", this.quickPlayPendingModeIdx = e, this.setConfigFromDOM(), this.refreshUi();
                        var a = n.protocolVersion,
                            i = this.config.get("region"),
                            r = x.getParameterByName("region");
                        void 0 !== r && r.length > 0 && (i = r);
                        var o = this.pingTest.getZones(i),
                            s = x.getParameterByName("zone");
                        void 0 !== s && s.length > 0 && (o = [s]);
                        var l = {
                            version: a,
                            region: i,
                            zones: o,
                            playerCount: 1,
                            autoFill: !0,
                            gameModeIdx: e
                        };
                        this.findGame(l)
                    }
                },
                findGame: function(e) {
                    var t = this;
                    x.findGame(e, function(e, a) {
                        if (e) {
                            var i = {
                                full: t.localization.translate("index-failed-finding-game"),
                                invalid_protocol: t.localization.translate("index-invalid-protocol")
                            };
                            "invalid_protocol" == e && t.showInvalidProtocolModal(), t.errorMessage = i[e] || i.full, t.quickPlayPendingModeIdx = -1, t.refreshUi()
                        } else t.joinGame(a, function() {
                            t.errorMessage = t.localization.translate("index-failed-joining-game"), t.quickPlayPendingModeIdx = -1, t.refreshUi()
                        })
                    })
                },
                joinGame: function(e, t) {
                    var a = this;
                    if (!this.game) return void setTimeout(function() {
                        a.joinGame(e, t)
                    }, 250);
                    x.joinGame(this.game, e, t)
                },
                showInvalidProtocolModal: function() {
                    r("#modal-refresh").fadeIn(200)
                },
                update: function() {
                    var e = s.clamp(this.pixi.ticker.elapsedMS / 1e3, .001, 1 / 8);
                    if (this.pingTest.update(e), !this.checkedPingTest && this.pingTest.isComplete()) {
                        if (!this.config.get("regionSelected")) {
                            var t = this.pingTest.getRegion();
                            t && (this.config.set("region", t), this.setDOMFromConfig())
                        }
                        this.checkedPingTest = !0
                    }
                    if (this.audioManager.c(e), this.ambience.update(e, this.audioManager, !this.active), this.teamMenu.update(e), this.wasPlayingVideo != this.adManager.isPlayingVideo) {
                        var a = this.adManager.isPlayingVideo ? 0 : this.config.get("masterVolume");
                        this.audioManager.setMasterVolume(a)
                    }
                    this.wasPlayingVideo = this.adManager.isPlayingVideo, this.game && this.game.initialized && this.game.playing ? this.game.c(e) : this.pixi.renderer.backgroundColor = 7378501, this.input.flush()
                }
            }, a("927ff3fc"),
            function() {
                var e = a("b4f03d8a");
                ! function(e) {
                    var t = document.createElement("style");
                    t.innerHTML = e.toString(), document.body.appendChild(t)
                }(e)
            }();
        var C = new i;
        document.addEventListener("DOMContentLoaded", function(e) {
            setTimeout(function() {
                C.o()
            }, 0)
        }), window.addEventListener("load", function() {
            setTimeout(function() {
                C.o()
            }, 0)
        }), window.addEventListener("unload", function(e) {
            C.onUnload()
        }), "#_=_" == window.location.hash && (window.location.hash = "", history.pushState("", document.title, window.location.pathname)), window.addEventListener("resize", function() {
            C.onResize()
        }), window.addEventListener("hashchange", function() {
            C.tryJoinTeam(!1)
        }), window.addEventListener("beforeunload", function(e) {
            if (C.game && C.game.Bt() && !g.webview) {
                var t = "Do you want to reload the game?";
                return e.returnValue = t, t
            }
        });
        var A = [];
        window.onerror = function(e, t, a, i, r) {
            if (e = e || "undefined_error_msg", -1 != e.indexOf("').innerText") || -1 != r.stack.indexOf("cdn.rawgit.com") || -1 != r.stack.indexOf("chrome-extension://")) return void x.H();
            var o = {
                    msg: e,
                    id: y.instanceId,
                    url: t,
                    line: a,
                    column: i,
                    stacktrace: r.stack,
                    browser: navigator.userAgent
                },
                n = JSON.stringify(o); - 1 === A.indexOf(n) && (A.push(n), /tpc.googlesyndication.com/.test(n) || (/surviv\.io\/js\/.*\.js/.test(n) && -1 == o.stacktrace.indexOf("chrome-extension://") && -1 == o.stacktrace.indexOf("cdn.rawgit.com") ? -1 !== o.msg.indexOf("TypeError: null is not an object (evaluating 't.transform._parentID=-1')") ? y.logError(n) : y.logWindowOnAppError(n) : y.logWindowOnError(n)))
        }
    },
    ce089fd5: function(e, t, a) {
        "use strict";

        function i() {}
        var r = a("34e32c48"),
            o = a("6b42806d"),
            n = (a("10899aea"), a("ceee80d9")),
            s = a("c2a798c8");
        a("c347b8dd"), a("af8ba00f"), i.prototype = {
            o: function() {},
            n: function() {},
            l: function(e, t, a, i) {
                if (t) {
                    this.type = e.type, this.layer = 0, this.pos = s.copy(e.pos), this.rot = n.oriToRad(e.ori), this.scale = 1, this.aabb = o.transform(n.getBoundingCollider(this.type), this.pos, this.rot, this.scale);
                    var l = n.Defs[this.type];
                    this.layers = [];
                    for (var c = 0; c < l.layers.length; c++) {
                        var m = l.layers[c],
                            p = void 0 === m.inheritOri || m.inheritOri,
                            d = void 0 !== m.underground ? m.underground : 1 == c,
                            h = s.add(this.pos, m.pos),
                            u = n.oriToRad(p ? e.ori + m.ori : m.ori),
                            g = o.transform(n.getBoundingCollider(m.type), h, u, 1);
                        this.layers.push({
                            collision: g,
                            underground: d
                        })
                    }
                    this.stairs = [];
                    for (var y = 0; y < l.stairs.length; y++) {
                        var w = l.stairs[y],
                            x = o.transform(w.collision, this.pos, this.rot, this.scale),
                            f = s.rotate(w.downDir, this.rot),
                            b = r.splitAabb(x, f);
                        this.stairs.push({
                            collision: x,
                            center: s.add(x.min, s.mul(s.sub(x.max, x.min), .5)),
                            downDir: f,
                            downAabb: o.createAabb(b[0].min, b[0].max),
                            upAabb: o.createAabb(b[1].min, b[1].max),
                            noCeilingReveal: !!w.noCeilingReveal,
                            lootOnly: !!w.lootOnly
                        })
                    }
                    this.mask = [];
                    for (var _ = 0; _ < l.mask.length; _++) this.mask.push(o.transform(l.mask[_], this.pos, this.rot, this.scale));
                    i.renderer.layerMaskDirty = !0
                }
            },
            c: function(e, t) {},
            insideStairs: function(e) {
                for (var t = 0; t < this.stairs.length; t++)
                    if (o.intersect(this.stairs[t].collision, e)) return !0;
                return !1
            },
            insideMask: function(e) {
                for (var t = 0; t < this.mask.length; t++)
                    if (o.intersect(this.mask[t], e)) return !0;
                return !1
            }
        }, e.exports = i
    },
    ce29f17f: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
            var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                i = a.exec(t);
            if (i) return i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""
        }

        function o() {
            var e = !1;
            return function(t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e
        }

        function n() {
            var e = !1,
                t = navigator.userAgent.toLowerCase();
            return function(a) {
                /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(t) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e || /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.innerWidth >= 1023 && window.innerHeight >= 747 && (e = !0), e
        }

        function s() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        }

        function l() {
            return /Android/.test(navigator.userAgent) && !window.MSStream
        }

        function c() {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE "),
                a = e.indexOf("Trident/");
            return t > 0 || a > 0
        }

        function m() {
            return window.navigator.userAgent.indexOf("Edge/") > 0
        }

        function p() {
            return s() && (375 == screen.width && 812 == screen.height || 375 == screen.height && 812 == screen.width || 414 == screen.width && 896 == screen.height || 414 == screen.height && 896 == screen.width)
        }

        function d(e, t) {
            try {
                localStorage.setItem(e, t)
            } catch (e) {}
        }

        function h(e) {
            var t = null;
            try {
                t = localStorage.getItem(e)
            } catch (e) {}
            return t
        }
        var u = function() {
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
            g = function() {
                function e() {
                    i(this, e), this.os = "pc", s() ? this.os = "ios" : l() && (this.os = "android"), this.browser = "unknown", c() ? this.browser = "ie" : m() && (this.browser = "edge");
                    var t = "true" == r("webview");
                    t && d("surviv_webview", "true"), this.webview = t || h("surviv_webview"), this.model = "unknown", p() && (this.model = "iphonex");
                    var a = r("version");
                    a && d("surviv_version", a), this.version = h("surviv_version") || "1.0.0", this.mobile = o(), this.tablet = n(), this.touch = this.mobile || this.tablet, this.pixelRatio = window.devicePixelRatio, this.prod = !0, this.debug = !1, this.UiLayout = {
                        Lg: 0,
                        Sm: 1
                    }, this.uiLayout = this.mobile ? this.UiLayout.Sm : this.UiLayout.Lg, this.screenWidth = 0, this.screenHeight = 0, this.isLandscape = !0, this.onResize()
                }
                return u(e, [{
                    key: "onResize",
                    value: function() {
                        this.isLandscape = window.innerWidth > window.innerHeight || 90 == window.orientation || -90 == window.orientation, this.screenWidth = window.innerWidth, this.screenHeight = window.innerHeight;
                        var e = this.isLandscape ? this.screenWidth : this.screenHeight;
                        this.uiLayout = e <= 850 || this.mobile ? this.UiLayout.Sm : this.UiLayout.Lg
                    }
                }]), e
            }(),
            y = new g;
        e.exports = y
    },
    ceee80d9: function(e, t, a) {
        "use strict";

        function i(e) {
            return e % 4 * .5 * Math.PI
        }

        function r(e) {
            return Math.floor(Se.fmod(e + .25 * Math.PI, 2 * Math.PI) / (.5 * Math.PI))
        }

        function o(e) {
            if (ze[e]) return ze[e];
            var t = n(e);
            return ze[e] = t, t
        }

        function n(e) {
            var t = Pe[e];
            if ("structure" == t.type) {
                for (var a = [], r = 0; r < t.layers.length; r++) {
                    var n = t.layers[r],
                        s = i(n.ori),
                        l = _e.transform(o(n.type), n.pos, s, 1);
                    a.push(_e.toAabb(l))
                }
                for (var c = 0; c < t.stairs.length; c++) a.push(t.stairs[c].collision);
                var m = be.boundingAabb(a),
                    p = ve.create(1, 1);
                return m.min = ve.sub(m.min, p), m.max = ve.add(m.max, p), _e.createAabb(m.min, m.max)
            }
            if ("building" == t.type) {
                for (var d = [], h = 0; h < t.floor.surfaces.length; h++) d = d.concat(t.floor.surfaces[h].collision);
                d = d.concat(t.ceiling.scopeIn), d = d.concat(t.ceiling.scopeOut);
                for (var u = 0; u < t.mapObjects.length; u++) {
                    var g = t.mapObjects[u],
                        y = g.type;
                    if ("function" == typeof y && (y = y()), "" != y) {
                        var w = i(g.ori),
                            x = _e.transform(o(y), g.pos, w, g.scale);
                        d.push(_e.toAabb(x))
                    }
                }
                var f = be.boundingAabb(d);
                return _e.createAabb(f.min, f.max)
            }
            return "decal" == t.type ? _e.toAabb(t.collision) : (fe(t.collision), t.collision)
        }

        function s(e, t, a) {
            return {
                tier: e,
                min: t,
                max: a
            }
        }

        function l(e, t) {
            return {
                name: e,
                count: t
            }
        }

        function c(e) {
            var t = [];
            for (var a in e) e.hasOwnProperty(a) && t.push({
                type: a,
                weight: e[a]
            });
            fe(t.length > 0);
            for (var i = 0, r = 0; r < t.length; r++) i += t[r].weight;
            return function() {
                for (var e = ke.random(0, i), a = 0; e > t[a].weight;) e -= t[a].weight, a++;
                return t[a].type
            }
        }

        function m(e, t, a) {
            return {
                sprite: e,
                scale: .5,
                alpha: a || 1,
                tint: t || 16777215,
                zIdx: 10
            }
        }

        function p(e) {
            var t = {
                type: "obstacle",
                name: "a barrel",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .6
                },
                collision: _e.createCircle(ve.create(0, 0), 1.75),
                height: .5,
                collidable: !0,
                destructible: !0,
                explosion: "explosion_barrel",
                health: 150,
                hitParticle: "barrelChip",
                explodeParticle: "barrelBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !0,
                    color: 6447714,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-barrel-01.img",
                    scale: .4,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "barrel_bullet",
                    punch: "barrel_bullet",
                    explode: "barrel_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function d(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, 0), 1.75),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 20,
                hitParticle: "outhouseChip",
                explodeParticle: "barrelPlank",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !0,
                    color: 11235106,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-barrel-02.img",
                    residue: "map-barrel-res-02.img",
                    scale: .4,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_crate_bullet",
                    punch: "wood_crate_bullet",
                    explode: "barrel_break_02",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function h(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .9
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.8, 3.4)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                hitParticle: "clothHit",
                explodeParticle: ["woodPlank", "clothBreak"],
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-bed-02.img",
                    residue: "map-bed-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "cloth_bullet",
                    punch: "cloth_punch",
                    explode: "cloth_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function u(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.5, 1)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 75,
                hitParticle: "woodChip",
                explodeParticle: ["woodPlank", "book"],
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-bookshelf-01.img",
                    residue: "map-drawers-res.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_prop_bullet",
                    punch: "wood_prop_bullet",
                    explode: "drawers_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function g(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, 1), ve.create(2, 3.25)),
                        color: 3815994
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "container",
                        collision: [_e.createAabbExtents(ve.create(0, 1), ve.create(2, 3.25))]
                    }],
                    imgs: [{
                        sprite: "map-bunker-generic-floor-02.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, .75), ve.create(2, 3.25))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, .75), ve.create(2, 3.25))],
                    imgs: [{
                        sprite: "map-bunker-generic-ceiling-01.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }]
                },
                mapObjects: [{
                    type: "metal_wall_ext_6",
                    pos: ve.create(0, -2.2),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_7",
                    pos: ve.create(-2.5, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_7",
                    pos: ve.create(2.5, 1),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function y(e) {
            var t = {
                type: "building",
                ori: 0,
                terrain: {},
                zIdx: 2,
                floor: {
                    surfaces: [{
                        type: "container",
                        collision: [_e.createAabbExtents(ve.create(-.5, 0), ve.create(3.25, 2))]
                    }],
                    imgs: [{
                        sprite: "map-bunker-generic-floor-01.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 3
                    }]
                },
                ceiling: {
                    scopeIn: [],
                    scopeOut: [],
                    imgs: []
                },
                mapObjects: [{
                    type: "metal_wall_ext_short_6",
                    pos: ve.create(2.2, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_short_7",
                    pos: ve.create(-1, 2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_short_7",
                    pos: ve.create(-1, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.statue,
                    pos: ve.create(-1, 0),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function w(e) {
            var t = {
                type: "building",
                map: {
                    display: !1,
                    color: 6707790,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 0,
                floor: {
                    surfaces: [{
                        type: "bunker",
                        collision: [_e.createAabbExtents(ve.create(6.5, 0), ve.create(4, 3))]
                    }],
                    imgs: [{
                        sprite: "map-bunker-statue-chamber-floor-01.img",
                        pos: ve.create(3.5, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 3
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(6.5, 0), ve.create(4, 3))],
                    scopeOut: [_e.createAabbExtents(ve.create(6.5, 0), ve.create(4, 3))],
                    imgs: [{
                        sprite: "",
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }],
                    vision: {
                        dist: 5,
                        width: 3
                    }
                },
                mapObjects: [{
                    type: "concrete_wall_ext_6",
                    pos: ve.create(-4, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_thicker_15",
                    pos: ve.create(3, 3.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_thicker_15",
                    pos: ve.create(3, -3.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_thicker_10",
                    pos: ve.create(12, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.crate,
                    pos: ve.create(8.5, 0),
                    scale: .75,
                    ori: 0,
                    inheritOri: !1
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function x(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1.05,
                    createMax: 1.2,
                    destroy: 1
                },
                collision: _e.createCircle(ve.create(0, 0), 1.4),
                height: 10,
                collidable: !1,
                destructible: !0,
                health: 100,
                hitParticle: "leaf",
                explodeParticle: "leaf",
                reflectBullets: !1,
                isBush: !0,
                loot: [],
                map: {
                    display: !0,
                    color: 24320,
                    scale: 1.5
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                img: {
                    sprite: "map-bush-01.img",
                    residue: "map-bush-res-01.img",
                    scale: .5,
                    alpha: .97,
                    tint: 16777215,
                    zIdx: 60
                },
                sound: {
                    bullet: "bush_bullet",
                    punch: "bush_bullet",
                    explode: "bush_break_01",
                    enter: "bush_enter_01"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function f(e) {
            var t = {
                type: "building",
                map: {
                    display: !1,
                    color: 6707790,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                ori: 0,
                floor: {
                    surfaces: [],
                    imgs: [{
                        sprite: "",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [],
                    scopeOut: [],
                    imgs: []
                },
                mapObjects: [{
                    type: "stone_02",
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "decal_initiative_01",
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function b(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.6)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 75,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-case-deagle-01.img",
                    residue: "map-crate-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_crate_bullet",
                    punch: "wood_crate_bullet",
                    explode: "crate_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function _(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.6)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 140,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_chest", 3, 4)],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-chest-01.img",
                    residue: "map-crate-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_crate_bullet",
                    punch: "wood_crate_bullet",
                    explode: "crate_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function S(e) {
            var t = _({
                collision: _e.createAabbExtents(ve.create(0, .8), ve.create(2.25, .8)),
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, .8), ve.create(2.25, 1.6))],
                terrain: {
                    river: {
                        centerWeight: 1
                    }
                }
            });
            return ke.mergeDeep(t, e || {})
        }

        function k(e) {
            var t = [{
                    type: "container_wall_top",
                    pos: ve.create(0, 7.95),
                    scale: 1,
                    ori: 0
                }, {
                    type: "container_wall_side",
                    pos: ve.create(2.35, 2.1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "container_wall_side",
                    pos: ve.create(-2.35, 2.1),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.loot_spawner_01 || "loot_tier_2",
                    pos: ve.create(0, 3.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.loot_spawner_02 || c({
                        loot_tier_1: 2,
                        "": 1
                    }),
                    pos: ve.create(0, .05),
                    scale: 1,
                    ori: 0
                }],
                a = [{
                    type: "container_wall_side_open",
                    pos: ve.create(2.35, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "container_wall_side_open",
                    pos: ve.create(-2.35, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "loot_tier_2",
                    pos: ve.create(0, -.05),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(0, .05),
                    scale: 1,
                    ori: 0
                }];
            return {
                type: "building",
                map: {
                    display: !0,
                    color: e.mapTint || 2703694,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0,
                    riverShore: !0
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "container",
                        collision: [e.open ? _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 11)) : _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 8))]
                    }],
                    imgs: [{
                        sprite: e.open ? "map-building-container-open-floor.img" : "map-building-container-floor-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: e.tint
                    }]
                },
                ceiling: {
                    scopeIn: [e.open ? _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 5.75)) : _e.createAabbExtents(ve.create(0, 2.25), ve.create(2.5, 5.5))],
                    scopeOut: [e.open ? _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 11)) : _e.createAabbExtents(ve.create(0, -.5), ve.create(2.5, 8.75))],
                    imgs: e.ceilingImgs || [{
                        sprite: e.ceilingSprite,
                        scale: .5,
                        alpha: 1,
                        tint: e.tint
                    }]
                },
                mapObjects: e.open ? a : t
            }
        }

        function v(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .5
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 2.25)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 75,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0,
                    riverShore: !0
                },
                img: {
                    sprite: "map-crate-01.img",
                    residue: "map-crate-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_crate_bullet",
                    punch: "wood_crate_bullet",
                    explode: "crate_break_02",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function z(e) {
            var t = {
                airdropCrate: !0,
                scale: {
                    destroy: 1
                },
                destructible: !1,
                health: 200,
                hitParticle: "barrelChip",
                explodeParticle: "airdropCrate02",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1
                },
                button: {
                    interactionRad: 1,
                    interactionText: "game-unlock",
                    useOnce: !0,
                    destroyOnUse: !0,
                    useDelay: 2.5,
                    useDir: ve.create(-1, 0),
                    useImg: "map-airdrop-04.img",
                    useParticle: "airdropCrate03",
                    sound: {
                        on: "airdrop_open_01",
                        off: ""
                    }
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "airdrop_open_02"
                }
            };
            return ke.mergeDeep(v(t), e || {})
        }

        function M(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(2.5, 1)),
                height: 10,
                collidable: !0,
                destructible: !0,
                health: 20,
                hitParticle: "barrelChip",
                explodeParticle: "depositBoxGreyBreak",
                reflectBullets: !0,
                loot: [s("tier_world", 1, 1)],
                lootSpawn: {
                    offset: ve.create(0, -1),
                    spdMult: 0
                },
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-deposit-box-01.img",
                    residue: "none",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "deposit_box_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function T(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(e.hinge, e.extents),
                height: 10,
                collidable: !0,
                destructible: !0,
                health: 150,
                hitParticle: "whiteChip",
                explodeParticle: "whitePlank",
                reflectBullets: !1,
                door: {
                    interactionRad: .75,
                    canUse: !0,
                    openSpeed: 2,
                    openOneWay: 0,
                    openDelay: 0,
                    openOnce: !1,
                    autoOpen: !1,
                    autoClose: !1,
                    autoCloseDelay: 1,
                    slideToOpen: !1,
                    slideOffset: 3.5,
                    spriteAnchor: ve.create(.5, 1),
                    sound: {
                        open: e.soundOpen || "door_open_01",
                        close: e.soundClose || "door_close_01",
                        change: "",
                        error: ""
                    }
                },
                loot: [],
                img: {
                    sprite: "map-door-01.img",
                    residue: "none",
                    scale: .5,
                    alpha: 1,
                    tint: 14671839,
                    zIdx: 15
                },
                sound: {
                    bullet: "wall_wood_bullet",
                    punch: "wall_wood_bullet",
                    explode: "wall_wood_break_01",
                    enter: "none"
                }
            };
            return fe(Te[e.material]), ke.mergeDeep(t, Te[e.material], e || {})
        }

        function P(e) {
            var t = T({
                material: "concrete",
                hinge: ve.create(0, 2),
                extents: ve.create(.3, 2),
                door: {
                    interactionRad: 2,
                    openOneWay: !1,
                    openSpeed: 7,
                    autoOpen: !0,
                    autoClose: !0,
                    autoCloseDelay: 1,
                    slideToOpen: !0,
                    slideOffset: 3.75,
                    sound: {
                        open: "door_open_03",
                        close: "door_close_03",
                        error: "door_error_01"
                    },
                    casingImg: {
                        sprite: "map-door-slot-01.img",
                        pos: ve.create(-2, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 1316379,
                        zIdx: 60
                    }
                },
                img: {
                    tint: 5373952
                }
            });
            return ke.mergeDeep(t, e || {})
        }

        function I(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(2.5, 1.25)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 75,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_container", 1, 1)],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-drawers-01.img",
                    residue: "map-drawers-res.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_prop_bullet",
                    punch: "wood_prop_bullet",
                    explode: "drawers_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function C(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .9
                },
                collision: _e.createAabbExtents(ve.create(0, .2), ve.create(2.25, .7)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 50,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                lootSpawn: {
                    offset: ve.create(0, -1),
                    spdMult: 0
                },
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-gun-mount-01.img",
                    residue: "map-drawers-res.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_prop_bullet",
                    punch: "wood_prop_bullet",
                    explode: "barrel_break_02",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function A(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(1.5, .6)),
                height: 10,
                collidable: !0,
                destructible: !0,
                health: 20,
                hitParticle: "barrelChip",
                explodeParticle: "lockerBreak",
                reflectBullets: !0,
                loot: [s("tier_world", 1, 1)],
                lootSpawn: {
                    offset: ve.create(0, -1),
                    spdMult: 0
                },
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-locker-01.img",
                    residue: "",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "deposit_box_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function E(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1, 1)),
                height: .5,
                collidable: !0,
                destructible: !0,
                explosion: "explosion_barrel",
                health: 250,
                hitParticle: "barrelChip",
                explodeParticle: "depositBoxGreyBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-power-box-01.img",
                    residue: "",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "deposit_box_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function D(e) {
            var t = {
                type: "obstacle",
                name: "an oven",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(1.7, 1.3)),
                height: .5,
                collidable: !0,
                destructible: !0,
                explosion: "explosion_barrel",
                health: 200,
                hitParticle: "barrelChip",
                explodeParticle: "barrelBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1,
                    color: 14935011,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-oven-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "barrel_bullet",
                    punch: "barrel_bullet",
                    explode: "oven_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function O(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 4.25)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0,
                    riverShore: !0
                },
                img: {
                    sprite: "map-planter-01.img",
                    residue: "map-planter-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "toilet_porc_bullet",
                    punch: "toilet_porc_bullet",
                    explode: "ceramic_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function B(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, 0), 1.5),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 50,
                hitParticle: "potChip",
                explodeParticle: "potBreak",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-pot-01.img",
                    residue: "map-pot-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "toilet_porc_bullet",
                    punch: "toilet_porc_bullet",
                    explode: "toilet_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function L(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.5, .5)),
                height: .3,
                collidable: !0,
                destructible: !1,
                health: 50,
                hitParticle: "bottleBlueChip",
                explodeParticle: "bottleBlueBreak",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-bottle-02.img",
                    residue: "none",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "glass_bullet",
                    punch: "glass_bullet",
                    explode: "window_break_01",
                    enter: "none"
                },
                button: {
                    interactionRad: 1.25,
                    interactionText: "game-use",
                    useOnce: !0,
                    useType: "",
                    useDelay: .25,
                    useDir: ve.create(-1, 0),
                    useImg: "map-bottle-03.img",
                    sound: {
                        on: "button_press_01",
                        off: "button_press_01"
                    }
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function R(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, 0), 1.1),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                hitParticle: "potatoChip",
                explodeParticle: "potatoBreak",
                reflectBullets: !1,
                swapWeaponOnDestroy: !0,
                regrow: !0,
                regrowTimer: 60,
                loot: [],
                map: {
                    display: !1,
                    color: 9466197,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0,
                    riverShore: !0
                },
                img: {
                    sprite: "map-potato-01.img",
                    residue: "map-potato-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "organic_hit",
                    punch: "organic_hit",
                    explode: "pumpkin_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function F(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, 0), 1.9),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                reflectBullets: !1,
                hitParticle: "pumpkinChip",
                explodeParticle: "pumpkinBreak",
                loot: [s("tier_skins", 1, 1)],
                map: {
                    display: !0,
                    color: 15889667,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    riverShore: !0
                },
                img: {
                    sprite: "map-pumpkin-01.img",
                    residue: "map-pumpkin-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "organic_hit",
                    punch: "organic_hit",
                    explode: "pumpkin_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function j(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.9, 1.5)),
                height: .5,
                collidable: !0,
                destructible: !1,
                explosion: "explosion_barrel",
                health: 250,
                hitParticle: "barrelChip",
                explodeParticle: "depositBoxGreyBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-recorder-01.img",
                    residue: "",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "deposit_box_break_01",
                    enter: "none"
                },
                button: {
                    interactionRad: .2,
                    interactionText: "game-use",
                    useOnce: !0,
                    useType: "",
                    useDelay: .25,
                    useDir: ve.create(-1, 0),
                    useImg: "map-recorder-02.img",
                    sound: {
                        on: "",
                        off: ""
                    }
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function q(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(1.7, 1.25)),
                height: .5,
                collidable: !0,
                destructible: !1,
                health: 100,
                hitParticle: "redChip",
                explodeParticle: "woodPlank",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1,
                    color: 7733259,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-refrigerator-01.img",
                    residue: "map-crate-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "barrel_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function N(e) {
            var t = {
                type: "obstacle",
                map: {
                    display: !0,
                    color: 13278307,
                    scale: 1
                },
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .5
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.1, 1.4)),
                height: .5,
                collidable: !0,
                destructible: !1,
                health: 150,
                hitParticle: "goldChip",
                explodeParticle: "barrelBreak",
                reflectBullets: !1,
                loot: [],
                img: {
                    sprite: "map-sandbags-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_brick_bullet",
                    punch: "wall_brick_bullet",
                    explode: "crate_break_02",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function V(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1.2,
                    destroy: .5
                },
                collision: _e.createCircle(ve.create(0, 0), 1.6),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 250,
                reflectBullets: !1,
                hitParticle: "rockChip",
                explodeParticle: "rockBreak",
                loot: [],
                map: {
                    display: !0,
                    color: 11776947,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    riverShore: !0
                },
                img: {
                    sprite: "map-stone-01.img",
                    residue: "map-stone-res-01.img",
                    scale: .4,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "stone_bullet",
                    punch: "stone_bullet",
                    explode: "stone_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function G(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: .8,
                    createMax: 1.2,
                    destroy: .5
                },
                collision: _e.createCircle(ve.create(0, 0), 2.9),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 500,
                reflectBullets: !1,
                hitParticle: "rockChip",
                explodeParticle: "rockBreak",
                loot: [],
                map: {
                    display: !0,
                    color: 5197647,
                    scale: 1
                },
                terrain: {
                    grass: !1,
                    beach: !1,
                    river: {
                        centerWeight: .5
                    },
                    riverShore: !1
                },
                img: {
                    sprite: "map-stone-03.img",
                    residue: "map-stone-res-02.img",
                    scale: .4,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "stone_bullet",
                    punch: "stone_bullet",
                    explode: "stone_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function U(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2)),
                height: .5,
                collidable: !1,
                destructible: !0,
                health: 100,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-table-01.img",
                    residue: "map-table-res.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 60
                },
                sound: {
                    bullet: "wood_prop_bullet",
                    punch: "wood_prop_bullet",
                    explode: "crate_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function H(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, .25), 1.18),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                reflectBullets: !1,
                hitParticle: "whiteChip",
                explodeParticle: "toiletBreak",
                loot: [s("tier_toilet", 2, 3)],
                map: {
                    display: !1,
                    color: 11776947,
                    scale: 1
                },
                img: {
                    sprite: "map-toilet-01.img",
                    residue: "map-toilet-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "toilet_porc_bullet",
                    punch: "toilet_porc_bullet",
                    explode: "toilet_break_01",
                    enter: "none"
                },
                terrain: {
                    grass: !0,
                    beach: !1
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function W(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: .8,
                    createMax: 1,
                    destroy: .5
                },
                collision: _e.createCircle(ve.create(0, 0), 1.55),
                aabb: _e.createAabbExtents(ve.create(0, 0), ve.create(5.75, 5.75)),
                height: 10,
                collidable: !0,
                destructible: !0,
                health: 175,
                hitParticle: "woodChip",
                explodeParticle: "woodLog",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !0,
                    color: 4083758,
                    scale: 2.5
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                img: {
                    sprite: "map-tree-03.img",
                    residue: "map-tree-res-01.img",
                    scale: .7,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 800
                },
                sound: {
                    bullet: "tree_bullet",
                    punch: "tree_bullet",
                    explode: "tree_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function K(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createCircle(ve.create(0, 0), 1.6),
                aabb: _e.createAabbExtents(ve.create(0, 0), ve.create(5.75, 5.75)),
                button: {
                    interactionRad: .2,
                    interactionText: "game-use",
                    useOnce: !0,
                    useType: "",
                    useDelay: .25,
                    useDir: ve.create(-1, 0),
                    useImg: "map-tree-switch-04.img",
                    sound: {
                        on: "button_press_01",
                        off: "button_press_01"
                    }
                },
                height: .5,
                collidable: !0,
                destructible: !1,
                health: 175,
                hitParticle: "woodChip",
                explodeParticle: "woodLog",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1,
                    color: 8602624,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                img: {
                    sprite: "map-tree-switch-01.img",
                    residue: "map-tree-res-01.img",
                    scale: .5,
                    alpha: 1,
                    zIdx: 10,
                    tint: 16777215
                },
                sound: {
                    bullet: "tree_bullet",
                    punch: "tree_bullet",
                    explode: "tree_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function Z(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.copy(e.extents)),
                height: 10,
                isWall: !0,
                collidable: !0,
                destructible: !0,
                health: e.health || 150,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1
                },
                img: {},
                sound: {
                    bullet: "wall_bullet",
                    punch: "wall_bullet",
                    explode: "barrel_break_01",
                    enter: "none"
                }
            };
            return fe(Te[e.material]), ke.mergeDeep(t, Te[e.material], e || {})
        }

        function X(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createCircle(ve.create(0, 2.3), 4.6),
                height: 10,
                collidable: !0,
                destructible: !1,
                health: 300,
                hitParticle: "barrelChip",
                explodeParticle: "barrelBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1,
                    color: 6310464,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                img: {
                    sprite: "map-wheel-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "silo_bullet",
                    punch: "silo_bullet",
                    explode: "barrel_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function Y(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 1.5)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 150,
                hitParticle: "woodChip",
                explodeParticle: "woodLog",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1,
                    color: 9455616,
                    scale: .875
                },
                terrain: {},
                img: {
                    sprite: "map-woodpile-01.img",
                    residue: "map-woodpile-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "tree_bullet",
                    punch: "tree_bullet",
                    explode: "tree_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function J(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(-16, 7), ve.create(10.75, 11)),
                        color: 7820585
                    }, {
                        collider: _e.createAabbExtents(ve.create(6, 0), ve.create(11.5, 18.25)),
                        color: 9989427
                    }, {
                        collider: _e.createAabbExtents(ve.create(22, 4), ve.create(4.5, 7.5)),
                        color: 7820585
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "tile",
                        collision: [_e.createAabbExtents(ve.create(6, -1), ve.create(11.25, 18.25)), _e.createAabbExtents(ve.create(21.5, 4), ve.create(4.75, 7.25))]
                    }],
                    imgs: [{
                        sprite: "map-building-bank-floor-01.img",
                        pos: ve.create(0, 6.96),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-bank-floor-02.img",
                        pos: ve.create(9.5, -12.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(6, -1), ve.create(11.25, 18.25)), _e.createAabbExtents(ve.create(21.5, 4), ve.create(4.75, 7.25)), _e.createAabbExtents(ve.create(-15, 6), ve.create(10.75, 11))],
                    scopeOut: [_e.createAabbExtents(ve.create(6, 1.25), ve.create(15.25, 20))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-bank-ceiling-01.img",
                        pos: ve.create(-16, 7),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-bank-ceiling-02.img",
                        pos: ve.create(6, 0),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-bank-ceiling-03.img",
                        pos: ve.create(22, 8),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_23",
                    pos: ve.create(-14, 17),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_23",
                    pos: ve.create(-25.9, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_20",
                    pos: ve.create(-15.5, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-5, -7),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-5, -16.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-2.5, -19),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(6, -19),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(14.5, -19),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(17, -16.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(17, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(1, -19.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(11, -19.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-5.25, -13.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(17.25, -13.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(22, -3),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_15",
                    pos: ve.create(26, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(22, 11),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(17, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(14.5, 17),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(4.5, 17),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-1, 17.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.vault || "vault_01",
                    pos: ve.create(-12, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_wall_int_4",
                    pos: ve.create(-2.5, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_window_01",
                    pos: ve.create(1, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_wall_int_3",
                    pos: ve.create(4, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_wall_int_4",
                    pos: ve.create(6, -3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_window_01",
                    pos: ve.create(6, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_wall_int_4",
                    pos: ve.create(6, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_wall_int_4",
                    pos: ve.create(8.5, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_window_01",
                    pos: ve.create(12, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_wall_int_3",
                    pos: ve.create(15, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_wall_int_5",
                    pos: ve.create(17, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_wall_int_8",
                    pos: ve.create(21.5, 4),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(17, -2.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(17, 10.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_door_01",
                    pos: ve.create(12.5, 17.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "vending_01",
                    pos: ve.create(4.5, -16.9),
                    scale: 1,
                    ori: 2
                }, {
                    type: "stand_01",
                    pos: ve.create(7.65, -17),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(23.5, .5),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(23.5, 7.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "stand_01",
                    pos: ve.create(15, 15),
                    scale: 1,
                    ori: 3
                }, {
                    type: "fire_ext_01",
                    pos: ve.create(4.5, 16.15),
                    scale: 1,
                    ori: 3
                }, {
                    type: "bush_02",
                    pos: ve.create(-2.5, -16.25),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "bush_02",
                    pos: ve.create(14.5, -16.25),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "crate_01",
                    pos: ve.create(19.75, 13.75),
                    scale: .9,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(12, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(1, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(-16.5, -12.5),
                    scale: 1.1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-7.5, -7.25),
                    scale: .85,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(21, -7),
                    scale: .55,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(21, -16.25),
                    scale: .55,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function Q(e) {
            var t = {
                type: "building",
                map: {
                    display: !1,
                    color: 6707790,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 2,
                floor: {
                    surfaces: [{
                        type: "container",
                        collision: [_e.createAabbExtents(ve.create(-3.5, 0), ve.create(10, 10.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-vault-floor.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(-3.5, 0), ve.create(9.25, 10.5))],
                    scopeOut: [_e.createAabbExtents(ve.create(-3.5, 0), ve.create(10, 10.5))],
                    vision: {
                        dist: 7.25,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-vault-ceiling.img",
                        scale: 1,
                        alpha: 1,
                        tint: 6250335
                    }]
                },
                mapObjects: [{
                    type: "metal_wall_ext_thick_20",
                    pos: ve.create(-12.5, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_thick_20",
                    pos: ve.create(-3.5, -9.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_thick_20",
                    pos: ve.create(-3.5, 9.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_thick_6",
                    pos: ve.create(5.5, -6.45),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_thick_6",
                    pos: ve.create(5.5, 6.45),
                    scale: 1,
                    ori: 0
                }, {
                    type: "vault_door_main",
                    pos: ve.create(6.5, 3.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(-12.3, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(-12.3, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(-8, 9.3),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(-8, -9.3),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(1, 9.3),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(1, -9.3),
                    scale: 1,
                    ori: 2
                }, {
                    type: "crate_05",
                    pos: ve.create(-3.5, 6.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_05",
                    pos: ve.create(-3.5, -6.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.floor_loot || c({
                        loot_tier_vault_floor: 1
                    }),
                    pos: ve.create(-3.5, 0),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function $(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, 12), ve.create(5, 2)),
                        color: 12300935
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, -2), ve.create(24.5, 12.8)),
                        color: 3816739
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, -2), ve.create(28, 16.5)), _e.createAabbExtents(ve.create(0, 14), ve.create(7, 5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, -2), ve.create(25, 13.2)), _e.createAabbExtents(ve.create(0, 12), ve.create(5.5, 2.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-barn-floor-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, -2), ve.create(24.5, 12.8)), _e.createAabbExtents(ve.create(0, 12), ve.create(5.5, 2.5))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, -14.5), ve.create(5.5, 4)), _e.createAabbExtents(ve.create(0, 14.5), ve.create(5.5, 4))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-barn-ceiling-01.img",
                        pos: ve.create(0, -2),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-barn-ceiling-02.img",
                        pos: ve.create(0, 13.2),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_4",
                    pos: ve.create(-24.5, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(-22.5, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(-24.5, -2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-24.5, -13),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(-22.5, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-24.75, 5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-24.75, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-19.5, 10.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-19.5, -14.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_16",
                    pos: ve.create(-10, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_16",
                    pos: ve.create(10, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_16",
                    pos: ve.create(-10, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(5, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-5.5, 13),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(5.5, 13),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(-3.5, 14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(3.5, 14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(9.5, -14.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(2, 14.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-2, -14.75),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(24.5, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(22.5, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_13",
                    pos: ve.create(17.5, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_19",
                    pos: ve.create(24.5, -5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_1",
                    pos: ve.create(23.5, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(24.75, 5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(19.5, 10.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "panicroom_01",
                    pos: ve.create(19.5, -8),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_6",
                    pos: ve.create(-21, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_6",
                    pos: ve.create(-21, -4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_5",
                    pos: ve.create(-11.5, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_2",
                    pos: ve.create(-13, -4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_7",
                    pos: ve.create(-6.5, -4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(-11.5, -10),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(-7.5, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_5",
                    pos: ve.create(-3.5, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_7",
                    pos: ve.create(10.5, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_5",
                    pos: ve.create(14.5, 7.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_13",
                    pos: ve.create(14.5, -7.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_4",
                    pos: ve.create(17, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-18, -4.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(-18, .5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(-3.5, -5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_door_01",
                    pos: ve.create(14.5, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_02",
                    pos: ve.create(23, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_column_1",
                    pos: ve.create(-8, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_column_1",
                    pos: ve.create(-11, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_column_1",
                    pos: ve.create(15, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(-7.5, -12),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-12.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-5.5, 7.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-13.5, -9.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "stand_01",
                    pos: ve.create(16.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "stand_01",
                    pos: ve.create(3.5, 12.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "table_01",
                    pos: ve.create(8, -8),
                    scale: 1,
                    ori: 0
                }, {
                    type: "oven_01",
                    pos: ve.create(12.25, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "refrigerator_01",
                    pos: ve.create(8.75, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bush_02",
                    pos: ve.create(-22, -2),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "bush_02",
                    pos: ve.create(12, 8),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(-19, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(-19, 5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "loot_tier_1",
                    pos: ve.create(0, 5.5),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ee(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, 0), ve.create(31.5, 8)),
                        color: 5197647
                    }, {
                        collider: _e.createAabbExtents(ve.create(-14, -9.5), ve.create(2.5, 1.5)),
                        color: 3618615
                    }, {
                        collider: _e.createAabbExtents(ve.create(14, -9.5), ve.create(2.5, 1.5)),
                        color: 3618615
                    }, {
                        collider: _e.createAabbExtents(ve.create(-14, 9.5), ve.create(2.5, 1.5)),
                        color: 3618615
                    }, {
                        collider: _e.createAabbExtents(ve.create(14, 9.5), ve.create(2.5, 1.5)),
                        color: 3618615
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(31.5, 8))]
                    }],
                    imgs: [{
                        sprite: "map-building-bridge-lg-floor.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(16.5, 7))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(16.5, 7))],
                    vision: {
                        dist: 10
                    },
                    imgs: [{
                        sprite: "map-building-bridge-lg-ceiling.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "bridge_rail_12",
                    pos: ve.create(-22.5, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_12",
                    pos: ve.create(-22.5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_12",
                    pos: ve.create(22.5, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_12",
                    pos: ve.create(22.5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_column_5x4",
                    pos: ve.create(-14, -9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "concrete_wall_column_5x4",
                    pos: ve.create(-14, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "concrete_wall_column_5x4",
                    pos: ve.create(14, -9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "concrete_wall_column_5x4",
                    pos: ve.create(14, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "concrete_wall_ext_5",
                    pos: ve.create(-9, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_5",
                    pos: ve.create(-9, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_5",
                    pos: ve.create(9, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_5",
                    pos: ve.create(9, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_3",
                    pos: ve.create(-5, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_3",
                    pos: ve.create(-5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_3",
                    pos: ve.create(5, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_3",
                    pos: ve.create(5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_7",
                    pos: ve.create(0, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_7",
                    pos: ve.create(0, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        loot_tier_1: 2,
                        "": 1
                    }),
                    pos: ve.create(-22, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 2,
                        "": 1
                    }),
                    pos: ve.create(22, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "sandbags_01",
                    pos: ve.create(-14, 2.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barrel_01",
                    pos: ve.create(-10, 5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(0, 4.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "crate_01",
                    pos: ve.create(0, -4.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "barrel_01",
                    pos: ve.create(10, -5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "sandbags_01",
                    pos: ve.create(14, -2.75),
                    scale: 1,
                    ori: 1
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function te(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, .5), ve.create(18, 12)),
                        color: 3823128
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, -13), ve.create(17, 2)),
                        color: 6368528
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    riverShore: !0,
                    nearbyRiver: {
                        radMin: .75,
                        radMax: 1.5,
                        facingOri: 1
                    }
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, -1.5), ve.create(18, 14))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(4, -14), ve.create(3, 2.5)), _e.createAabbExtents(ve.create(-4, 13.5), ve.create(2, 1))]
                    }],
                    imgs: [{
                        sprite: "map-building-cabin-floor.img",
                        pos: ve.create(0, -1),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, .5), ve.create(19, 12)), _e.createAabbExtents(ve.create(4, -13), ve.create(3, 2))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, .5), ve.create(21, 14)), _e.createAabbExtents(ve.create(4, -13), ve.create(3, 2))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    damage: {
                        obstacleCount: 1
                    },
                    imgs: [{
                        sprite: "map-building-cabin-ceiling-01a.img",
                        pos: ve.create(0, .5),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-cabin-ceiling-01b.img",
                        pos: ve.create(4, -13),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-chimney-01.img",
                        pos: ve.create(13, 2),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        removeOnDamaged: !0
                    }]
                },
                occupiedEmitters: [{
                    type: "cabin_smoke_parent",
                    pos: ve.create(0, 0),
                    rot: 0,
                    scale: 1,
                    layer: 0,
                    parentToCeiling: !0
                }],
                mapObjects: [{
                    type: "brick_wall_ext_12",
                    pos: ve.create(-12, 12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-2, 12.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(4, 12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(11.5, 12.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(15.5, 12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-18.5, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-18.75, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-18.5, .5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-18.75, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-18.5, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-15.5, -11),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-11.5, -11.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(-4, -11),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(2, -11.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(12, -11),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_15",
                    pos: ve.create(18.5, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(18.75, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(18.5, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.cabin_wall_int_5 || "cabin_wall_int_5",
                    pos: ve.create(-10.5, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.cabin_wall_int_10 || "cabin_wall_int_10",
                    pos: ve.create(-13, 2),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.cabin_wall_int_13 || "cabin_wall_int_13",
                    pos: ve.create(-3.5, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-10.5, 2.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-4, 2),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(-16, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "stand_01",
                    pos: ve.create(-12.5, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-15, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(-16, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bed_lg_01",
                    pos: ve.create(-7, -6.75),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.cabin_mount || c({
                        gun_mount_01: 50,
                        gun_mount_05: 50,
                        gun_mount_04: 10,
                        gun_mount_02: 10,
                        gun_mount_03: 1
                    }),
                    pos: ve.create(4, 10.65),
                    scale: 1,
                    ori: 0
                }, {
                    type: "table_01",
                    pos: ve.create(4, 6.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "stove_01",
                    pos: ve.create(13, 2),
                    scale: 1,
                    ori: 3
                }, {
                    type: "woodpile_01",
                    pos: ve.create(13, -3),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(16, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(16, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.porch_01 || "",
                    pos: ve.create(-1, -13.5),
                    scale: .9,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ae(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, 0), ve.create(7, 7)),
                        color: 15181895
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, -18.9), ve.create(2, 12)),
                        color: 6171907
                    }]
                },
                terrain: {
                    waterEdge: {
                        dir: ve.create(0, 1),
                        distMin: -8.5,
                        distMax: 0
                    }
                },
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(7, 7)), _e.createAabbExtents(ve.create(0, -18.9), ve.create(2, 12))]
                    }],
                    imgs: [{
                        sprite: "map-building-hut-floor-01.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-hut-floor-02.img",
                        pos: ve.create(0, -18.9),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(6, 6))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(6, 6))],
                    vision: {
                        width: 4
                    },
                    imgs: [{
                        sprite: e.ceilingImg || "map-building-hut-ceiling-01.img",
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }],
                    destroy: {
                        wallCount: 2,
                        particle: "hutBreak",
                        particleCount: 25,
                        residue: "map-hut-res-01.img"
                    }
                },
                mapObjects: [{
                    type: "hut_wall_int_4",
                    pos: ve.create(-4, -6.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "hut_wall_int_4",
                    pos: ve.create(4, -6.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "hut_wall_int_5",
                    pos: ve.create(-6.5, 4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "hut_window_open_01",
                    pos: ve.create(-6.75, .5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "hut_wall_int_6",
                    pos: ve.create(-6.5, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "hut_wall_int_12",
                    pos: ve.create(0, 6.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "hut_wall_int_14",
                    pos: ve.create(6.5, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        pot_01: 2,
                        "": 1
                    }),
                    pos: ve.create(4.5, 4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        pot_01: 2,
                        "": 1
                    }),
                    pos: ve.create(4.5, -4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        pot_01: 2,
                        "": 1
                    }),
                    pos: ve.create(-4.5, 4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        pot_01: 2,
                        "": 1
                    }),
                    pos: ve.create(-4.5, -4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.specialLoot || "pot_01",
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ie(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(-7.75, 3), ve.create(1, 2)),
                        color: 6171907
                    }, {
                        collider: _e.createAabbExtents(ve.create(5, -4.75), ve.create(2, 1)),
                        color: 6171907
                    }, {
                        collider: _e.createAabbExtents(ve.create(1, 1.5), ve.create(8, 5.5)),
                        color: 3754050
                    }, {
                        collider: _e.createAabbExtents(ve.create(-10.65, 7), ve.create(2, 12)),
                        color: 6171907
                    }]
                },
                terrain: {},
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(1, 1.5), ve.create(8, 5.5)), _e.createAabbExtents(ve.create(-10.65, 7), ve.create(2, 12)), _e.createAabbExtents(ve.create(-7.75, 3), ve.create(1, 2)), _e.createAabbExtents(ve.create(5, -4.75), ve.create(2, 1))]
                    }],
                    imgs: [{
                        sprite: "map-building-shack-floor-03.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-hut-floor-02.img",
                        pos: ve.create(-10.65, 7),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(1, 1.5), ve.create(7.75, 5.25))],
                    scopeOut: [_e.createAabbExtents(ve.create(1, 1.5), ve.create(7.75, 5.25))],
                    vision: {
                        width: 4
                    },
                    imgs: [{
                        sprite: "map-building-shack-ceiling-03.img",
                        pos: ve.create(.5, .5),
                        scale: .667,
                        alpha: 1,
                        tint: 10461087
                    }],
                    destroy: {
                        wallCount: 3,
                        particle: "shackGreenBreak",
                        particleCount: 30,
                        residue: "map-shack-res-03.img"
                    }
                },
                bridgeLandBounds: [_e.createAabbExtents(ve.create(-1.75, -4.25), ve.create(11.25, 4.75))],
                bridgeWaterBounds: [_e.createAabbExtents(ve.create(-10.5, 15.5), ve.create(3.5, 6))],
                mapObjects: [{
                    type: "shack_wall_ext_2",
                    pos: ve.create(-6.5, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_ext_14",
                    pos: ve.create(1, 6.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "shack_wall_ext_10",
                    pos: ve.create(8.5, 2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_ext_2",
                    pos: ve.create(8, -3.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "shack_wall_ext_9",
                    pos: ve.create(-1.5, -3.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "shack_wall_ext_5",
                    pos: ve.create(-6.5, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(-4.25, -1.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(-1.25, -1.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "table_01",
                    pos: ve.create(5.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-4.75, -5.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: "crate_20",
                    pos: ve.create(-1, -5.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: "loot_tier_leaf_pile",
                    pos: ve.create(-10.65, 16),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function re(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 1995644,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(15, 25)), _e.createAabbExtents(ve.create(-15, 9), ve.create(2.5, 4.5)), _e.createAabbExtents(ve.create(17.5, -7), ve.create(4.5, 2.5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "tile",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(13, 20))]
                    }, {
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(2, 20))]
                    }],
                    imgs: e.floor_images || [{
                        sprite: "map-building-greenhouse-floor-01.img",
                        pos: ve.create(0, 10),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-greenhouse-floor-01.img",
                        pos: ve.create(0, -10),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, 21),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, -21),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(12.5, 19.5))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(14, 22))],
                    vision: {
                        dist: 7.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: e.ceiling_images || [{
                        sprite: "map-building-greenhouse-ceiling-01.img",
                        pos: ve.create(0, -9.85),
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-greenhouse-ceiling-01.img",
                        pos: ve.create(0, 9.85),
                        scale: 1,
                        alpha: 1,
                        tint: 16777215,
                        mirrorY: !0
                    }],
                    destroy: {
                        wallCount: 7,
                        particle: "greenhouseBreak",
                        particleCount: 60,
                        residue: "",
                        sound: "ceiling_break_02"
                    }
                },
                mapObjects: [{
                    type: "glass_wall_10",
                    pos: ve.create(-7, 19.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-7, -19.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-12.5, 15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-12.5, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-12.5, -15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-12.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(7, 19.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(7, -19.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(12.5, 15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(12.5, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(12.5, -15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(12.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_05",
                    pos: ve.create(2, 19.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_05",
                    pos: ve.create(-2, -19.75),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(-4.5, 14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(-7, 2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(-7, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(-4.5, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(4.5, 14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(7, 2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(7, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(4.5, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-15, 11),
                    scale: .9,
                    ori: 0
                }, {
                    type: "sandbags_02",
                    pos: ve.create(-15, 7),
                    scale: 1,
                    ori: 0
                }, {
                    type: "sandbags_02",
                    pos: ve.create(15.5, -7),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barrel_01",
                    pos: ve.create(19.5, -7),
                    scale: .9,
                    ori: 0
                }, {
                    type: "bunker_structure_08",
                    pos: ve.create(-9.5, -15.5),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function oe(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: []
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    spawnPriority: 10
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, -4), ve.create(55, 50))],
                bridgeLandBounds: [_e.createAabbExtents(ve.create(0, -4), ve.create(55, 50))],
                mapGroundPatches: [{
                    bound: _e.createAabbExtents(ve.create(0, 0), ve.create(55, 55)),
                    color: e.groundTintLt || 5195792,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(-28.5, 7), ve.create(7, 5)),
                    color: e.groundTintDk || 5986827,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(-24.5, -35), ve.create(5.5, 4.5)),
                    color: e.groundTintDk || 5986827,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(20, 10), ve.create(20, 30)),
                    color: e.groundTintDk || 5986827,
                    roughness: .05,
                    offsetDist: .5
                }],
                floor: {
                    surfaces: [{
                        type: "grass",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(55, 55))]
                    }],
                    imgs: []
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                    imgs: []
                },
                mapObjects: [{
                    type: "container_04",
                    pos: ve.create(3.75, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-1.35, 10.25),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-6, 12.25),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "barrel_01",
                    pos: ve.create(-2, 14.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "warehouse_02",
                    pos: ve.create(20, 10),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(35, 24.25),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(35, 29),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(39.75, 27),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_07",
                    pos: ve.create(47, 13),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_02",
                    pos: ve.create(50.5, 9.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "bunker_structure_06",
                    pos: ve.create(38, -12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        container_01: 1,
                        container_02: 1,
                        container_03: 1
                    }),
                    pos: ve.create(21, -32),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        container_01: 1,
                        container_02: 1,
                        container_03: 1
                    }),
                    pos: ve.create(21, -37.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "tree_07",
                    pos: ve.create(45.5, -31.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_07",
                    pos: ve.create(40.5, -36.5),
                    scale: 1.1,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(21.75, -50),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(26.75, -49),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_02",
                    pos: ve.create(44.5, -50.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_09",
                    pos: ve.create(-9, 34),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_02",
                    pos: ve.create(-13.5, 35.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_09",
                    pos: ve.create(-16.5, 32),
                    scale: 1,
                    ori: 3
                }, {
                    type: "tree_09",
                    pos: ve.create(-20, 36),
                    scale: 1,
                    ori: 2
                }, {
                    type: "tree_09",
                    pos: ve.create(-24.5, 33),
                    scale: 1,
                    ori: 3
                }, {
                    type: "tree_09",
                    pos: ve.create(-31.5, 37),
                    scale: 1,
                    ori: 2
                }, {
                    type: "tree_09",
                    pos: ve.create(-32.5, 32),
                    scale: 1,
                    ori: 1
                }, {
                    type: "tree_09",
                    pos: ve.create(-40, 35.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "tree_09",
                    pos: ve.create(-44.5, 32.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-33.5, 23.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-42.75, 21.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-30.5, 9),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        chest_02: 1,
                        case_04: 1
                    }),
                    pos: ve.create(-30.5, 4.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-25.75, 7),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-14.5, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-21, -8.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-36.5, -9),
                    scale: .9,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-34, -11.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "outhouse_01",
                    pos: ve.create(-48.5, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        outhouse_01: 5,
                        outhouse_02: 1
                    }),
                    pos: ve.create(-48.5, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "woodpile_01",
                    pos: ve.create(-51, -20.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-26.75, -36),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-22, -34),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_09",
                    pos: ve.create(-14.5, -20),
                    scale: 1,
                    ori: 1
                }, {
                    type: "tree_09",
                    pos: ve.create(-11.5, -23),
                    scale: 1,
                    ori: 2
                }, {
                    type: "tree_09",
                    pos: ve.create(-15.5, -24),
                    scale: 1,
                    ori: 0
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-37, -34),
                    scale: 1,
                    ori: 1
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-31, -47),
                    scale: 1,
                    ori: 0
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-18.75, -45.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-2.5, -35.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(.75, -37.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "tree_07",
                    pos: ve.create(1, -33),
                    scale: 1.2,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ne(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: []
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    spawnPriority: 10
                },
                mapObstacleBounds: [_e.createCircle(ve.create(0, 0), 40)],
                mapGroundPatches: [{
                    bound: _e.createAabbExtents(ve.create(5, 21.5), ve.create(5.5, 6)),
                    color: e.groundTintDk || 7563810,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(-17.75, -14), ve.create(6, 4.5)),
                    color: e.groundTintDk || 7563810,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(21.5, -10), ve.create(4.75, 3.5)),
                    color: e.groundTintDk || 7563810,
                    roughness: .05,
                    offsetDist: .5
                }],
                floor: {
                    surfaces: [{
                        type: "grass",
                        collision: []
                    }],
                    imgs: []
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                    imgs: []
                },
                mapObjects: [{
                    type: e.tree_08c || "tree_08c",
                    pos: ve.create(0, 0),
                    scale: 2,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(2.5, 19.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(7.5, 19),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(3.5, 24.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "crate_04",
                    pos: ve.create(-20.5, -13.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_04",
                    pos: ve.create(-15, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(23.5, -9.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(20, -11),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function se(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(-1.5, 20.5), ve.create(12.5, 4.5)),
                        color: 8671554
                    }, {
                        collider: _e.createAabbExtents(ve.create(-2, -23), ve.create(3, 2.5)),
                        color: 8671554
                    }, {
                        collider: _e.createAabbExtents(ve.create(-20.5, -22.5), ve.create(10, 2)),
                        color: 7750457
                    }, {
                        collider: _e.createAabbExtents(ve.create(28, 1.5), ve.create(3.75, 3)),
                        color: 7237230
                    }, {
                        collider: _e.createAabbExtents(ve.create(-3.5, -2), ve.create(28, 18.5)),
                        color: 6175023
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "tile",
                        collision: [_e.createAabbExtents(ve.create(-3.5, -2), ve.create(28, 18.5)), _e.createAabbExtents(ve.create(-1.5, 20.5), ve.create(12.5, 4.5)), _e.createAabbExtents(ve.create(0, 0), ve.create(20, 20))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(-21, -17), ve.create(11, 8)), _e.createAabbExtents(ve.create(-23, -6), ve.create(8, 3)), _e.createAabbExtents(ve.create(-2, -24), ve.create(2, 3)), _e.createAabbExtents(ve.create(28, 1.5), ve.create(3, 3))]
                    }, {
                        type: "grass",
                        collision: [_e.createAabbExtents(ve.create(-2, 4), ve.create(5, 5))]
                    }, {
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(1, 13), ve.create(2, 3.25))]
                    }],
                    imgs: [{
                        sprite: "map-building-mansion-floor-01a.img",
                        pos: ve.create(-1.5, 22),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-floor-01b.img",
                        pos: ve.create(-3.5, -2),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-floor-01c.img",
                        pos: ve.create(28.5, 1.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-floor-01d.img",
                        pos: ve.create(-15, -24),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(-15, -22.4), ve.create(17, 2.2)), _e.createAabbExtents(ve.create(-3.5, -2), ve.create(28, 18.5)), _e.createAabbExtents(ve.create(-1.5, 20.6), ve.create(12, 4.2))],
                    scopeOut: [_e.createAabbExtents(ve.create(-15, -24.4), ve.create(21, 4.2)), _e.createAabbExtents(ve.create(-3.5, -2), ve.create(28, 18.5)), _e.createAabbExtents(ve.create(-9, 23.1), ve.create(5, 6.7))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-mansion-ceiling.img",
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_9",
                    pos: ve.create(-31.5, -16.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-31.75, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_19",
                    pos: ve.create(-31.5, .5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-31.75, 11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-31.5, 15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_17",
                    pos: ve.create(-22.5, 16.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(-13.5, 20.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-13, 24.9),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_19",
                    pos: ve.create(.5, 24.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(10.5, 20.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_13",
                    pos: ve.create(17.5, 16.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(24.5, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(24.75, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_18",
                    pos: ve.create(24.5, -1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(24.75, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(24.5, -17),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(20.5, -20.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(15.5, -20.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_14",
                    pos: ve.create(7, -20.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-4, -21),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-7, -20.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_short_7",
                    pos: ve.create(28.5, 4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_short_7",
                    pos: ve.create(28.5, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-7, -20.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_column_1 || "mansion_column_1",
                    pos: ve.create(-5, -24),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_column_1 || "mansion_column_1",
                    pos: ve.create(1, -24),
                    scale: 1,
                    ori: 1
                }, {
                    type: "saferoom_01",
                    pos: ve.create(-25.5, 1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_12 || "mansion_wall_int_12",
                    pos: ve.create(-25, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-19, -2.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.mansion_wall_int_1 || "mansion_wall_int_1",
                    pos: ve.create(-30.5, 5.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_03",
                    pos: ve.create(-30.25, 5.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.mansion_wall_int_13 || "mansion_wall_int_13",
                    pos: ve.create(-20.5, 5.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_7 || "mansion_wall_int_7",
                    pos: ve.create(-19.5, 1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-14.5, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_6 || "mansion_wall_int_6",
                    pos: ve.create(-14.5, 13),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_6 || "mansion_wall_int_6",
                    pos: ve.create(-14.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_10 || "mansion_wall_int_10",
                    pos: ve.create(-10, -8.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_11 || "mansion_wall_int_11",
                    pos: ve.create(-9.5, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(-7.5, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(-1.5, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(3.5, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(-2, 9.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "stairs_01",
                    pos: ve.create(-4.5, 12),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-7.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(3.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_12",
                    pos: ve.create(-2, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(10.5, 16),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.mansion_wall_int_9 || "mansion_wall_int_9",
                    pos: ve.create(10.5, 7.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(10.5, -1),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_8 || "mansion_wall_int_8",
                    pos: ve.create(10.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_9 || "mansion_wall_int_9",
                    pos: ve.create(15.5, 4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_9 || "mansion_wall_int_9",
                    pos: ve.create(15.5, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_5 || "mansion_wall_int_5",
                    pos: ve.create(19.5, 1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(24, 1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_5 || "mansion_wall_int_5",
                    pos: ve.create(3.5, -8.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(6, -8.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.mansion_wall_int_11 || "mansion_wall_int_11",
                    pos: ve.create(5.5, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        bookshelf_01: 6,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(-27.25, 7.15),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        bookshelf_01: 6,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(-27.25, 14.85),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-11.5, -11.75),
                    scale: 1,
                    ori: 3
                }, {
                    type: "stand_01",
                    pos: ve.create(-7.5, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "stand_01",
                    pos: ve.create(3.5, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        bookshelf_01: 6,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(7.25, -16.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "piano_01",
                    pos: ve.create(14.9, -3.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "toilet_01",
                    pos: ve.create(17, 1.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "refrigerator_01",
                    pos: ve.create(22.15, 14.4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "oven_01",
                    pos: ve.create(12.75, 6.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "oven_01",
                    pos: ve.create(12.75, 10.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "table_02",
                    pos: ve.create(15.75, -14.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.entry_loot || "",
                    pos: ve.create(-2, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "loot_tier_mansion_floor",
                    pos: ve.create(-2, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(-21, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(18, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(6, 20.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(-30.15, 15),
                    scale: .8,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(1.5, 11.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(8.5, 22.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(22.5, 14.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(22.5, -18.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.tree || "tree_interior_01",
                    pos: ve.create(-2, 4),
                    scale: e.tree_scale || .6,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: e.tree_loot || "",
                    pos: ve.create(-2.25, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.tree_loot || "",
                    pos: ve.create(-1.75, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.tree_loot || "",
                    pos: ve.create(-2, 4.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.tree_loot || "",
                    pos: ve.create(-2, 3.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        bush_01: 25,
                        bush_03: 1,
                        "": e.bush_chance || 0
                    }),
                    pos: ve.create(-4.75, 1.25),
                    scale: .9,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        bush_01: 25,
                        bush_03: 1,
                        "": e.bush_chance || 0
                    }),
                    pos: ve.create(.75, 1.25),
                    scale: .9,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        bush_01: 25,
                        bush_03: 1,
                        "": e.bush_chance || 0
                    }),
                    pos: ve.create(-4.75, 6.75),
                    scale: .9,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        bush_01: 25,
                        bush_03: 1,
                        "": e.bush_chance || 0
                    }),
                    pos: ve.create(.75, 6.75),
                    scale: .9,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: e.porch_01 || "bush_01",
                    pos: ve.create(-8, -23),
                    scale: .95,
                    ori: 0
                }, {
                    type: e.porch_01 || "bush_01",
                    pos: ve.create(4, -23),
                    scale: .95,
                    ori: 0
                }, {
                    type: "shack_01",
                    pos: ve.create(-20.75, 22.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "crate_01",
                    pos: ve.create(13.25, 19.25),
                    scale: .9,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_01",
                    pos: ve.create(24, 24),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_02",
                    pos: ve.create(27, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(29, -17.25),
                    scale: .7,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function le(e) {
            var t = {
                type: "building",
                map: {
                    display: !1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 0,
                floor: {
                    surfaces: [{
                        type: "brick",
                        collision: [_e.createAabbExtents(ve.create(18, 3), ve.create(7, 13)), _e.createAabbExtents(ve.create(5, 0), ve.create(6, 10))]
                    }],
                    imgs: [{
                        sprite: "map-building-mansion-cellar-02.img",
                        pos: ve.create(-3.75, .25),
                        scale: 2,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-cellar-01a.img",
                        pos: ve.create(11.5, 5.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-cellar-01b.img",
                        pos: ve.create(28.5, 1.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-cellar-01c.img",
                        pos: ve.create(11.5, -9),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(18, 3), ve.create(7, 13)), _e.createAabbExtents(ve.create(5, 1.5), ve.create(6, 12))],
                    scopeOut: [_e.createAabbExtents(ve.create(18, 3), ve.create(7, 13)), _e.createAabbExtents(ve.create(5, 1.5), ve.create(6, 12))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: []
                },
                mapObjects: [{
                    type: "brick_wall_ext_thicker_24",
                    pos: ve.create(-2.5, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_8",
                    pos: ve.create(0, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_7",
                    pos: ve.create(5.5, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_9",
                    pos: ve.create(11.5, -11.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_7",
                    pos: ve.create(17.5, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_5",
                    pos: ve.create(21.5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_8",
                    pos: ve.create(25.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_15",
                    pos: ve.create(25.5, 11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_16",
                    pos: ve.create(16, 17.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_7",
                    pos: ve.create(9.5, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_5",
                    pos: ve.create(5.5, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_5",
                    pos: ve.create(29.5, 5.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_5",
                    pos: ve.create(29.5, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_7",
                    pos: ve.create(31.5, 1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_6",
                    pos: ve.create(4.5, 15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(1, 17.6),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(8.5, -9.53),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(11.5, -9.53),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(14.5, -9.53),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(12.75, 15.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(15.75, 15.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(18.75, 15.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(22.25, 14.25),
                    scale: .75,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        bookshelf_01: 7,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(22.75, 8),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.mansion_column_1 || "mansion_column_1",
                    pos: ve.create(5.5, 1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_column_1 || "mansion_column_1",
                    pos: ve.create(17.5, 1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mid_obs_01 || "barrel_02",
                    pos: ve.create(8.5, 1.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(11.5, 1.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: e.mid_obs_01 || "barrel_02",
                    pos: ve.create(14.5, 1.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(16.5, 7.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(11.5, -5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(.5, -4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(22.5, 14.5),
                    scale: 1,
                    ori: 3
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ce(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 8145976,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 1.4), ve.create(5.5, 6.5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(0, .15), ve.create(3.75, 4.75))]
                    }],
                    imgs: [{
                        sprite: "map-building-outhouse-floor.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 1.45), ve.create(3.6, 3.2))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 1.4), ve.create(3.8, 3.4))],
                    imgs: [{
                        sprite: "map-building-outhouse-ceiling.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }],
                    destroy: {
                        wallCount: 2,
                        particleCount: 15,
                        particle: "outhouseBreak",
                        residue: "map-outhouse-res.img"
                    }
                },
                mapObjects: [{
                    type: "outhouse_wall_top",
                    pos: ve.create(0, 4.46),
                    scale: 1,
                    ori: 0
                }, {
                    type: "outhouse_wall_side",
                    pos: ve.create(3.4, 1.73),
                    scale: 1,
                    ori: 0
                }, {
                    type: "outhouse_wall_side",
                    pos: ve.create(-3.4, 1.73),
                    scale: 1,
                    ori: 0
                }, {
                    type: "outhouse_wall_bot",
                    pos: ve.create(-2.65, -1.52),
                    scale: 1,
                    ori: 0
                }, {
                    type: "outhouse_wall_bot",
                    pos: ve.create(2.65, -1.52),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.obs || c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(0, 2),
                    scale: .95,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function me(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(-21, -8), ve.create(21.25, 14)),
                        color: 5855577
                    }, {
                        collider: _e.createAabbExtents(ve.create(-24.5, 8.5), ve.create(17.75, 9.75)),
                        color: 3355970
                    }, {
                        collider: _e.createAabbExtents(ve.create(-3.5, 12), ve.create(3.5, 6.25)),
                        color: 4278620
                    }, {
                        collider: _e.createAabbExtents(ve.create(10.35, 0), ve.create(10.5, 22)),
                        color: 3355970
                    }, {
                        collider: _e.createAabbExtents(ve.create(31.25, 12.5), ve.create(10.75, 9.5)),
                        color: 3355970
                    }, {
                        collider: _e.createAabbExtents(ve.create(-3.5, 2.5), ve.create(2.25, 2.25)),
                        color: 6310464
                    }, {
                        collider: _e.createCircle(ve.create(-30.5, -18), 1.5),
                        color: 8026746
                    }, {
                        collider: _e.createCircle(ve.create(-20.5, -10.5), 1.5),
                        color: 8026746
                    }, {
                        collider: _e.createAabbExtents(ve.create(-38.5, -7), ve.create(1.4, 3.1)),
                        color: 13278307
                    }, {
                        collider: _e.createAabbExtents(ve.create(-7.5, -19.5), ve.create(3.1, 1.4)),
                        color: 13278307
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "tile",
                        collision: [_e.createAabbExtents(ve.create(-24.5, 8.5), ve.create(17.75, 9.75)), _e.createAabbExtents(ve.create(-3.5, 12), ve.create(3.5, 6.25)), _e.createAabbExtents(ve.create(10.35, 0), ve.create(10.5, 22)), _e.createAabbExtents(ve.create(31.25, 12.5), ve.create(10.75, 9.5))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(-21.5, -13), ve.create(21, 11.5)), _e.createAabbExtents(ve.create(-3.5, 2), ve.create(3, 3.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-police-floor-01.img",
                        pos: ve.create(-9.5, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-police-floor-02.img",
                        pos: ve.create(33, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(-24.5, 8.5), ve.create(17.75, 9.75)), _e.createAabbExtents(ve.create(-3.5, 12), ve.create(3.5, 6.25)), _e.createAabbExtents(ve.create(10.35, 0), ve.create(10.5, 22)), _e.createAabbExtents(ve.create(31.25, 12.5), ve.create(10.75, 9.5))],
                    scopeOut: [_e.createAabbExtents(ve.create(12, 0), ve.create(12.75, 26))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-police-ceiling-01.img",
                        pos: ve.create(-21.5, 8.5),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-police-ceiling-02.img",
                        pos: ve.create(10.5, 0),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-police-ceiling-03.img",
                        pos: ve.create(31.96, 12.5),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_20",
                    pos: ve.create(-42, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_41",
                    pos: ve.create(-21, 18),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(-38, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_21",
                    pos: ve.create(-18, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(-7, 2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(-4, 6),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_16",
                    pos: ve.create(0, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-.5, -11),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_10",
                    pos: ve.create(0, -17.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(3.5, -22),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(6.5, -22.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(14.5, -22.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(17.5, -22),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_11",
                    pos: ve.create(21, -17),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(21.5, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_11",
                    pos: ve.create(21, -2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_20",
                    pos: ve.create(31.5, 3),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_20",
                    pos: ve.create(42, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_33",
                    pos: ve.create(25, 22),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(4.5, 22.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(2.5, 22),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(0, 20),
                    scale: 1,
                    ori: 0
                }, {
                    type: "police_wall_int_2",
                    pos: ve.create(-40.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_3",
                    pos: ve.create(-34, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "cell_door_01",
                    pos: ve.create(-35.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_8",
                    pos: ve.create(-35, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "police_wall_int_3",
                    pos: ve.create(-27, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_8",
                    pos: ve.create(-28, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "cell_door_01",
                    pos: ve.create(-21.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_3",
                    pos: ve.create(-20, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_8",
                    pos: ve.create(-21, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "cell_door_01",
                    pos: ve.create(-14.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_3",
                    pos: ve.create(-13, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_8",
                    pos: ve.create(-14, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "cell_door_01",
                    pos: ve.create(-7.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_6",
                    pos: ve.create(-7, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "police_wall_int_7",
                    pos: ve.create(-4, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_02",
                    pos: ve.create(-7, 17.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "police_wall_int_4",
                    pos: ve.create(2.5, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_window_01",
                    pos: ve.create(6, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_6",
                    pos: ve.create(10.5, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_window_01",
                    pos: ve.create(15, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_4",
                    pos: ve.create(18.5, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(21, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "police_wall_int_10",
                    pos: ve.create(21, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(21, 21.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "metal_wall_ext_10",
                    pos: ve.create(35.5, 4),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(33, 4.15),
                    scale: 1,
                    ori: 2
                }, {
                    type: "metal_wall_ext_10",
                    pos: ve.create(35.5, 21),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(33, 20.85),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(38, 20.85),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_18",
                    pos: ve.create(41, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(40.85, 7.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(40.85, 17.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "metal_wall_ext_thicker_10",
                    pos: ve.create(35.5, 12.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(38, 11.35),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(33, 13.65),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_03: 5,
                        toilet_04: 1
                    }),
                    pos: ve.create(-37, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_03: 5,
                        toilet_04: 1
                    }),
                    pos: ve.create(-23, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_03: 5,
                        toilet_04: 1
                    }),
                    pos: ve.create(-16, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_03: 5,
                        toilet_04: 1
                    }),
                    pos: ve.create(-9, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: "control_panel_01",
                    pos: ve.create(-4.5, 9.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "crate_06",
                    pos: ve.create(-24.5, 20.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(14.5, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(18.75, 12.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "fire_ext_01",
                    pos: ve.create(21.85, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(10.5, 1.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "vending_01",
                    pos: ve.create(2, -6.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "stand_01",
                    pos: ve.create(2, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bush_01",
                    pos: ve.create(2.5, -19.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "bush_01",
                    pos: ve.create(18.5, -19.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        loot_tier_police_floor: 1
                    }),
                    pos: ve.create(-38.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(-31.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(-24.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(-17.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(-10.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(-3.5, 2.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "sandbags_01",
                    pos: ve.create(-38.5, -7),
                    scale: 1,
                    ori: 3
                }, {
                    type: "sandbags_01",
                    pos: ve.create(-7.5, -19.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-30.5, -18),
                    scale: .9,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-20.5, -10.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(39, -6),
                    scale: .8,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(28, -17.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: "hedgehog_01",
                    pos: ve.create(39, -17.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(24.5, -.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function pe(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 6429724,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(19, 17.5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(14.5, 13))]
                    }],
                    imgs: [{
                        sprite: "map-building-house-floor-01.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(-1, 14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(14.5, 13))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(16.5, 15))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-house-ceiling.img",
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_12",
                    pos: ve.create(-9, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_14",
                    pos: ve.create(8, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(1, 13.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-14.5, 10),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_10",
                    pos: ve.create(-14.5, -.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-14.5, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-14.75, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-14.75, -7),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-12.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-4.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(4.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(12.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-8.5, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_window_01",
                    pos: ve.create(8.5, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(-2, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(14.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(14.5, -3),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_2",
                    pos: ve.create(14.5, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(14.75, -9),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_window_01",
                    pos: ve.create(14.75, 3),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.house_wall_int_9 || "house_wall_int_9",
                    pos: ve.create(-9.5, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_5 || "house_wall_int_5",
                    pos: ve.create(4.5, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_wall_int_9 || "house_wall_int_9",
                    pos: ve.create(9.5, -4),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_8 || "house_wall_int_8",
                    pos: ve.create(5.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_wall_int_4 || "house_wall_int_4",
                    pos: ve.create(8, 7),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(4.5, -12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(6, 2.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_door_01",
                    pos: ve.create(14, 7),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_column_1 || "house_column_1",
                    pos: ve.create(6, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_column_1 || "house_column_1",
                    pos: ve.create(6, -2.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(8, 10),
                    scale: 1,
                    ori: 1
                }, {
                    type: "stand_01",
                    pos: ve.create(12.25, -2),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(7.75, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.stand || "",
                    pos: ve.create(-12.25, -3),
                    scale: 1,
                    ori: 1
                }, {
                    type: "table_01",
                    pos: ve.create(-11.25, 1.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: "oven_01",
                    pos: ve.create(-7, 11),
                    scale: 1,
                    ori: 0
                }, {
                    type: "refrigerator_01",
                    pos: ve.create(-7, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.plant || "bush_02",
                    pos: e.plant_pos || ve.create(-12, -10.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: e.porch_01 || "",
                    pos: ve.create(4.5, -15.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: e.porch_01 || "",
                    pos: ve.create(-5.25, 15.5),
                    scale: .9,
                    ori: 2
                }, {
                    type: "loot_tier_1",
                    pos: ve.create(0, 4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(-10.25, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(-10, -8.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(-9.75, -8.25),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function de(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 4656911,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, -1), ve.create(19, 18.5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(14.5, 13))]
                    }],
                    imgs: [{
                        sprite: "map-building-house-floor-02.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(10, 14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(2.6, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(5.2, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(7.8, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, -16.25),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(2.6, -16.25),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(5.2, -16.25),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(7.8, -16.25),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(14.5, 13))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(16.5, 15))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-house-ceiling.img",
                        scale: .667,
                        alpha: 1,
                        tint: 13619151,
                        rot: 2
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_5",
                    pos: ve.create(-12.5, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-8.5, 13.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_15",
                    pos: ve.create(.5, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(13.5, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(12, 13.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-14.5, 10),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_10",
                    pos: ve.create(-14.5, -.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-14.5, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-14.75, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-14.75, -7),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-12.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-4.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_13",
                    pos: ve.create(8.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-8.5, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(-2, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(14.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(14.5, -3),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_2",
                    pos: ve.create(14.5, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(14.75, -9),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_window_01",
                    pos: ve.create(14.75, 3),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.house_wall_int_5 || "house_wall_int_5",
                    pos: ve.create(-.5, 10),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_wall_int_14 || "house_wall_int_14",
                    pos: ve.create(-7, 3),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_11 || "house_wall_int_11",
                    pos: ve.create(-8.5, -2),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_4 || "house_wall_int_4",
                    pos: ve.create(12, 1),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_4 || "house_wall_int_4",
                    pos: ve.create(12, -7),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-.5, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-3.5, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_column_1 || "house_column_1",
                    pos: ve.create(4, -3),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(-11.75, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.stand || "",
                    pos: ve.create(-12.5, 11),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-3.75, 11),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        bookshelf_01: 7,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(13, -3),
                    scale: 1,
                    ori: 3
                }, {
                    type: "table_03",
                    pos: ve.create(-8.5, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "oven_01",
                    pos: ve.create(-12.25, -11),
                    scale: 1,
                    ori: 2
                }, {
                    type: "refrigerator_01",
                    pos: ve.create(-4.5, -11),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.plant || "bush_02",
                    pos: e.plant_pos || ve.create(2, 10.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "loot_tier_1",
                    pos: ve.create(0, -4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(4.25, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(3.75, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(4, 8.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "grill_01",
                    pos: ve.create(6, -15.25),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function he(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 6707790,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(0, .9), ve.create(5.6, 3.5))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(3.75, -4), ve.create(2.25, 1.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-shack-floor-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, .9), ve.create(5.6, 3.5))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, .8), ve.create(5.9, 3.8))],
                    vision: {
                        width: 4
                    },
                    imgs: [{
                        sprite: "map-building-shack-ceiling-01.img",
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }],
                    destroy: {
                        wallCount: 2,
                        particle: "shackBreak",
                        particleCount: 25,
                        residue: "map-shack-res-01.img"
                    }
                },
                mapObjects: [{
                    type: "shack_wall_bot",
                    pos: ve.create(-1.49, -2.4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_side_left",
                    pos: ve.create(-5.55, .69),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_top",
                    pos: ve.create(-.3, 4.33),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_side_right",
                    pos: ve.create(5.55, .95),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(7.9, 2.85),
                    scale: .8,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "barrel_01",
                    pos: ve.create(7.45, -.9),
                    scale: .85,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_2: 1
                    }),
                    pos: ve.create(-2, .8),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(2, .8),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ue(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 4014894,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(0, 1), ve.create(5, 4))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(0, -4), ve.create(2, 1))]
                    }],
                    imgs: [{
                        sprite: "map-building-shack-floor-02.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 1), ve.create(4.75, 3.75))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 1), ve.create(0, 0))],
                    vision: {
                        width: 4
                    },
                    imgs: [{
                        sprite: "map-building-shack-ceiling-02.img",
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }],
                    destroy: {
                        wallCount: 2,
                        particle: "shackBreak",
                        particleCount: 25,
                        residue: "map-shack-res-02.img"
                    }
                },
                mapObjects: [{
                    type: "barn_wall_int_2",
                    pos: ve.create(-3, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_2",
                    pos: ve.create(3, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(-4.5, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(4.5, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(0, 4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barrel_01",
                    pos: ve.create(4, -4.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(0, 1),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ge(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(27, 0), ve.create(3, 12.25)),
                        color: 10066329
                    }, {
                        collider: _e.createAabbExtents(ve.create(-27, 0), ve.create(3, 12.25)),
                        color: 10066329
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, 0), ve.create(24.5, 12.25)),
                        color: 5915450
                    }]
                },
                zIdx: 1,
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(35, 16))],
                floor: {
                    surfaces: [{
                        type: "warehouse",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(32, 12.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-warehouse-floor-01.img",
                        pos: ve.create(-15.615, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-warehouse-floor-01.img",
                        pos: ve.create(15.615, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(24.5, 12.25))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(32, 12.5))],
                    vision: {
                        dist: 8,
                        width: 5
                    },
                    imgs: [{
                        sprite: "map-building-warehouse-ceiling-01.img",
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "warehouse_wall_side",
                    pos: ve.create(0, 11.9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_edge",
                    pos: ve.create(-24.4, 8.2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_edge",
                    pos: ve.create(24.4, 8.2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_side",
                    pos: ve.create(0, -11.9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_edge",
                    pos: ve.create(-24.4, -8.2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_edge",
                    pos: ve.create(24.4, -8.2),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.topLeftObs,
                    pos: ve.create(-21.25, 8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "crate_04",
                    pos: ve.create(-16.25, 8.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "crate_01",
                    pos: ve.create(-21.25, -8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "barrel_01",
                    pos: ve.create(-16.5, -8.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: e.topRightObs,
                    pos: ve.create(21.25, 8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "barrel_01",
                    pos: ve.create(16.5, 8.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: "crate_04",
                    pos: ve.create(16.25, -8.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.botRightObs,
                    pos: ve.create(21.25, -8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: c({
                        crate_02: 1,
                        crate_01: 3
                    }),
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "crate_01",
                    pos: ve.create(5, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "crate_01",
                    pos: ve.create(-5, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "crate_04",
                    pos: ve.create(0, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_04",
                    pos: ve.create(0, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(-9, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(9, -6),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ye(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(25, 0), ve.create(3, 12.25)),
                        color: 10066329
                    }, {
                        collider: _e.createAabbExtents(ve.create(-25, 0), ve.create(3, 12.25)),
                        color: 10066329
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, 0), ve.create(22.5, 12.25)),
                        color: 2240064
                    }]
                },
                zIdx: 1,
                terrain: {
                    grass: !0,
                    beach: !1
                },
                floor: {
                    surfaces: [{
                        type: "warehouse",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(27.5, 12.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-warehouse-floor-02.img",
                        pos: ve.create(-13.72, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }, {
                        sprite: "map-building-warehouse-floor-02.img",
                        pos: ve.create(13.72, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(22, 12.25))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(27.5, 12.5))],
                    vision: {
                        dist: 8,
                        width: 5
                    },
                    imgs: [{
                        sprite: "map-building-warehouse-ceiling-02.img",
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "metal_wall_ext_43",
                    pos: ve.create(0, 12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_8",
                    pos: ve.create(-21.9, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_8",
                    pos: ve.create(21.9, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_43",
                    pos: ve.create(0, -12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_8",
                    pos: ve.create(-21.9, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_8",
                    pos: ve.create(21.9, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(-18.75, 8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-14, 8.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(-18.75, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(-19.5, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(18.75, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(19.5, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(18.75, -8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "barrel_01",
                    pos: ve.create(14, -8.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: c({
                        crate_08: 24,
                        crate_09: 1
                    }),
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "crate_01",
                    pos: ve.create(0, 5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "crate_01",
                    pos: ve.create(0, -5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "crate_06",
                    pos: ve.create(4, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "crate_06",
                    pos: ve.create(-4, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barrel_01",
                    pos: ve.create(4.5, 0),
                    scale: .9,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "barrel_01",
                    pos: ve.create(-4.5, 0),
                    scale: .9,
                    ori: 0,
                    inheritOri: !1
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function we(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.4, 2)),
                height: 10,
                collidable: !0,
                destructible: !0,
                isWindow: !0,
                health: 1,
                hitParticle: "glassChip",
                explodeParticle: "windowBreak",
                reflectBullets: !1,
                loot: [],
                destroyType: "house_window_broken_01",
                img: {
                    sprite: "map-building-house-window-01.img",
                    residue: "none",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "glass_bullet",
                    punch: "glass_bullet",
                    explode: "window_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function xe(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.4, 2)),
                height: .2,
                isWall: !0,
                collidable: !0,
                destructible: !1,
                health: 100,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [],
                img: {
                    sprite: "map-building-house-window-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 4456448,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_wood_bullet",
                    punch: "wall_wood_bullet",
                    explode: "wall_wood_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }
        var fe = a("0e566746"),
            be = a("34e32c48"),
            _e = a("6b42806d"),
            Se = a("10899aea"),
            ke = a("1901e2d9"),
            ve = a("c2a798c8"),
            ze = {},
            Me = {
                DesertWheelActivated: 0
            },
            Te = {
                metal: {
                    destructible: !1,
                    reflectBullets: !0,
                    hitParticle: "barrelChip",
                    explodeParticle: "barrelBreak",
                    sound: {
                        bullet: "wall_bullet",
                        punch: "metal_punch",
                        explode: "barrel_break_01",
                        enter: "none"
                    }
                },
                wood: {
                    destructible: !0,
                    reflectBullets: !1,
                    sound: {
                        bullet: "wall_wood_bullet",
                        punch: "wall_wood_bullet",
                        explode: "wall_break_01",
                        enter: "none"
                    }
                },
                woodPerm: {
                    destructible: !1,
                    reflectBullets: !1,
                    sound: {
                        bullet: "wall_wood_bullet",
                        punch: "wall_wood_bullet",
                        explode: "wall_break_01",
                        enter: "none"
                    }
                },
                brick: {
                    destructible: !1,
                    reflectBullets: !1,
                    hitParticle: "brickChip",
                    sound: {
                        bullet: "wall_brick_bullet",
                        punch: "wall_brick_bullet",
                        explode: "wall_break_01",
                        enter: "none"
                    }
                },
                concrete: {
                    destructible: !1,
                    reflectBullets: !1,
                    hitParticle: "barrelChip",
                    sound: {
                        bullet: "concrete_hit",
                        punch: "concrete_hit",
                        explode: "wall_break_01",
                        enter: "none"
                    }
                },
                stone: {
                    destructible: !0,
                    stonePlated: !0,
                    reflectBullets: !1,
                    hitParticle: "rockChip",
                    explodeParticle: "rockBreak",
                    sound: {
                        bullet: "concrete_hit",
                        punch: "concrete_hit",
                        explode: "stone_break_01",
                        enter: "none"
                    }
                },
                glass: {
                    destructible: !0,
                    reflectBullets: !1,
                    hitParticle: "glassChip",
                    explodeParticle: "windowBreak",
                    sound: {
                        bullet: "glass_bullet",
                        punch: "glass_bullet",
                        explode: "window_break_01",
                        enter: "none"
                    }
                }
            },
            Pe = {
                barrel_01: p({}),
                barrel_01b: p({
                    img: {
                        tint: 13224393
                    },
                    loot: [s("tier_surviv", 2, 3), l("mirv", 1), l("mirv", 1), l("mirv", 1), l("outfitCarbonFiber", 1)]
                }),
                barrel_02: d({
                    health: 60
                }),
                barrel_03: d({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.25, .5)),
                    health: 20,
                    img: {
                        sprite: "map-barrel-03.img",
                        residue: "map-barrel-res-03.img",
                        scale: .45
                    }
                }),
                barrel_04: d({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.25, .5)),
                    health: 20,
                    loot: [s("tier_soviet", 2, 3)],
                    img: {
                        sprite: "map-barrel-04.img",
                        residue: "map-barrel-res-03.img",
                        scale: .45
                    }
                }),
                bed_sm_01: h({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.4, 3.4)),
                    img: {
                        sprite: "map-bed-01.img"
                    }
                }),
                bed_lg_01: h({
                    img: {
                        residue: "map-bed-res-02.img"
                    }
                }),
                bollard_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: 1
                    },
                    collision: _e.createCircle(ve.create(0, 0), 1.25),
                    height: .5,
                    collidable: !0,
                    destructible: !1,
                    health: 300,
                    hitParticle: "barrelChip",
                    explodeParticle: "barrelBreak",
                    reflectBullets: !0,
                    loot: [],
                    map: {
                        display: !0,
                        color: 6310464,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-bollard-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "silo_bullet",
                        punch: "silo_bullet",
                        explode: "barrel_break_01",
                        enter: "none"
                    }
                },
                bookshelf_01: u({
                    img: {
                        sprite: "map-bookshelf-01.img"
                    },
                    loot: [s("tier_world", 1, 1)]
                }),
                bookshelf_02: u({
                    img: {
                        sprite: "map-bookshelf-02.img"
                    },
                    loot: [s("tier_soviet", 2, 3)]
                }),
                bush_01: x({}),
                bush_01b: x({
                    img: {
                        alpha: 1
                    }
                }),
                bush_01f: x({
                    img: {
                        sprite: "map-bush-01f.img"
                    },
                    map: {
                        color: 1793032
                    }
                }),
                bush_01x: x({
                    map: {
                        color: 4545840
                    },
                    img: {
                        sprite: "map-bush-01x.img"
                    }
                }),
                bush_02: x({
                    img: {
                        residue: "map-bush-res-02.img"
                    }
                }),
                bush_03: x({
                    img: {
                        sprite: "map-bush-03.img",
                        alpha: 1
                    }
                }),
                bush_04: x({
                    hitParticle: "leafRiver",
                    explodeParticle: "leafRiver",
                    img: {
                        sprite: "map-bush-04.img",
                        residue: "map-bush-res-04.img",
                        alpha: 1,
                        scale: .25
                    },
                    terrain: {
                        grass: !0,
                        river: {
                            centerWeight: .3
                        },
                        riverShore: !0
                    },
                    sound: {
                        enter: "bush_enter_02"
                    }
                }),
                bush_05: x({
                    img: {
                        sprite: "map-bush-05.img",
                        residue: "map-bush-res-05.img"
                    },
                    map: {
                        color: 6971965
                    }
                }),
                bush_06: x({
                    collision: _e.createCircle(ve.create(0, 0), 1.75),
                    img: {
                        sprite: "map-bush-06.img",
                        residue: "map-bush-res-06.img"
                    },
                    map: {
                        display: !0,
                        color: 6971965,
                        scale: 1.5
                    }
                }),
                bush_06b: x({
                    scale: {
                        createMin: 1,
                        createMax: 1
                    },
                    collision: _e.createCircle(ve.create(0, 0), 1.75),
                    img: {
                        sprite: "map-bush-06.img",
                        residue: "map-bush-res-06.img",
                        alpha: 1
                    },
                    map: {
                        display: !0,
                        color: 14041344,
                        scale: 1.5
                    }
                }),
                bush_07: x({
                    hitParticle: "leafRiver",
                    explodeParticle: "leafRiver",
                    img: {
                        sprite: "map-bush-07.img",
                        alpha: 1,
                        scale: .5
                    },
                    sound: {
                        enter: "bush_enter_02"
                    }
                }),
                bush_07s: x({
                    hitParticle: "leafRiver",
                    explodeParticle: "leafRiver",
                    map: {
                        display: !0,
                        color: 671242,
                        scale: 1.5
                    },
                    img: {
                        sprite: "map-bush-07s.img",
                        alpha: 1,
                        scale: .5
                    },
                    sound: {
                        enter: "bush_enter_02"
                    }
                }),
                bush_07x: x({
                    img: {
                        sprite: "map-bush-07x.img"
                    }
                }),
                case_01: b({
                    loot: [l("deagle", 1)]
                }),
                case_02: b({
                    img: {
                        sprite: "map-case-deagle-02.img"
                    },
                    loot: [l("deagle", 1), l("deagle", 1)]
                }),
                case_03: b({
                    health: 140,
                    img: {
                        sprite: "map-case-hatchet-01.img",
                        residue: "map-case-hatchet-res-01.img"
                    },
                    loot: [s("tier_hatchet", 1, 1)],
                    hitParticle: "blackChip"
                }),
                case_04: b({
                    health: 140,
                    img: {
                        sprite: "map-case-flare-01.img",
                        residue: "map-case-flare-res-01.img"
                    },
                    loot: [l("flare_gun", 1)],
                    hitParticle: "blackChip",
                    map: {
                        display: !0,
                        color: 7025920,
                        scale: .85
                    }
                }),
                case_05: b({
                    health: 140,
                    img: {
                        sprite: "map-case-meteor-01.img",
                        residue: "map-case-meteor-res-01.img"
                    },
                    loot: [l("flare_gun", 1), l("strobe", 1), l("strobe", 1), l("strobe", 1), l("strobe", 1)],
                    hitParticle: "blackChip",
                    map: {
                        display: !1,
                        color: 7025920,
                        scale: .85
                    }
                }),
                case_06: b({
                    health: 140,
                    img: {
                        sprite: "map-case-chrys-01.img"
                    },
                    loot: [s("tier_chest", 2, 3), s("tier_chrys_case", 1, 1)],
                    hitParticle: "blackChip",
                    map: {
                        display: !1,
                        color: 7025920,
                        scale: .85
                    }
                }),
                chest_01: _({
                    loot: [s("tier_chest", 3, 4), s("tier_pirate_melee", 1, 1), l("outfitRoyalFortune", 1)]
                }),
                chest_02: _({
                    img: {
                        sprite: "map-chest-02.img"
                    },
                    loot: [s("tier_chest", 2, 2)],
                    map: {
                        display: !0,
                        color: 7025920,
                        scale: .85
                    }
                }),
                chest_03: S({
                    img: {
                        sprite: "map-chest-03.img"
                    },
                    loot: [s("tier_chest", 3, 5), l("outfitWaterElem", 1)]
                }),
                chest_03d: S({
                    img: {
                        sprite: "map-chest-03d.img"
                    },
                    loot: [s("tier_chest", 3, 5), l("outfitWaterElem", 1)]
                }),
                chest_03f: S({
                    img: {
                        sprite: "map-chest-03f.img"
                    },
                    loot: [s("tier_chest", 3, 5), l("outfitKhaki", 1)]
                }),
                chest_03x: S({
                    img: {
                        sprite: "map-chest-03x.img"
                    },
                    loot: [s("tier_chest", 3, 5), l("outfitWaterElem", 1)]
                }),
                control_panel_01: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.7)),
                    button: {
                        interactionRad: .75,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "cell_door_01",
                        useDelay: 1.1,
                        useDir: ve.create(-1, 0),
                        useImg: "map-control-panel-02.img",
                        sound: {
                            on: "cell_control_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-control-panel-01.img"
                    }
                }),
                control_panel_02: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.7)),
                    health: 175,
                    img: {
                        sprite: "map-control-panel-02.img"
                    }
                }),
                control_panel_02b: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.7)),
                    destructible: !1,
                    button: {
                        interactionRad: .2,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "",
                        useDelay: .25,
                        useDir: ve.create(-1, 0),
                        useImg: "map-control-panel-01.img",
                        sound: {
                            on: "button_press_01",
                            off: "button_press_01"
                        }
                    },
                    img: {
                        sprite: "map-control-panel-02.img"
                    }
                }),
                control_panel_03: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.25, 1.2)),
                    health: 150,
                    img: {
                        sprite: "map-control-panel-03.img"
                    }
                }),
                control_panel_04: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.7)),
                    button: {
                        interactionRad: .75,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "crossing_door_01",
                        useDelay: 4.25,
                        useDir: ve.create(1, 0),
                        useImg: "map-control-panel-05.img",
                        sound: {
                            on: "cell_control_02",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-control-panel-04.img"
                    }
                }),
                control_panel_06: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 1.2)),
                    health: 200,
                    img: {
                        sprite: "map-control-panel-06.img"
                    }
                }),
                switch_01: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.45, .55)),
                    destructible: !1,
                    button: {
                        interactionRad: .2,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "",
                        useDelay: .25,
                        useDir: ve.create(-1, 0),
                        useImg: "map-switch-02.img",
                        sound: {
                            on: "button_press_01",
                            off: "button_press_01"
                        }
                    },
                    img: {
                        sprite: "map-switch-01.img"
                    }
                }),
                switch_02: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.45, .55)),
                    destructible: !1,
                    img: {
                        sprite: "map-switch-02.img"
                    }
                }),
                couch_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .85
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4.5, 1.5)),
                    height: .5,
                    collidable: !0,
                    destructible: !0,
                    health: 125,
                    hitParticle: "clothHit",
                    explodeParticle: ["woodPlank", "clothBreak"],
                    reflectBullets: !1,
                    loot: [],
                    map: {
                        display: !1,
                        color: 6697728,
                        scale: .875
                    },
                    terrain: {
                        grass: !1,
                        beach: !0
                    },
                    img: {
                        sprite: "map-couch-01.img",
                        residue: "map-couch-res-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "cloth_bullet",
                        punch: "cloth_punch",
                        explode: "cloth_break_01",
                        enter: "none"
                    }
                },
                crate_01: v({}),
                crate_01x: v({
                    img: {
                        sprite: "map-crate-01x.img"
                    }
                }),
                crate_02: v({
                    health: 140,
                    loot: [s("tier_soviet", 3, 5)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-02.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_02x: v({
                    health: 140,
                    loot: [s("tier_soviet", 3, 5)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-02x.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_02f: v({
                    health: 140,
                    loot: [s("tier_guns", 3, 3), s("tier_armor", 2, 2), s("tier_packs", 1, 1)],
                    map: {
                        display: !0,
                        color: 13369344
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-02f.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_02d: v({
                    health: 140,
                    loot: [l("m1014", 1), l("helmet03_lt_aged", 1), l("outfitRedLeaderAged", 1), l("machete_taiga", 1)],
                    map: {
                        display: !0,
                        color: 13369344
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-02f.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_03: v({
                    health: 100,
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.575, 1.575)),
                    loot: [s("tier_throwables", 2, 4)],
                    map: {
                        color: 5066014,
                        scale: .875
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-03.img",
                        scale: .35
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_03x: v({
                    health: 100,
                    hitParticle: "glassChip",
                    explodeParticle: ["glassPlank"],
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.575, 1.575)),
                    loot: [l("snowball", 4), l("snowball", 4), l("snowball", 4)],
                    map: {
                        color: 31863,
                        scale: .875
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-03x.img",
                        scale: .35
                    },
                    sound: {
                        explode: "crate_break_02"
                    }
                }),
                crate_04: v({
                    health: 225,
                    destructible: !0,
                    armorPlated: !0,
                    hitParticle: "greenChip",
                    loot: [s("tier_ammo_crate", 1, 1)],
                    map: {
                        display: !0,
                        color: 5468244,
                        scale: .875
                    },
                    img: {
                        sprite: "map-crate-04.img"
                    },
                    sound: {
                        bullet: "ammo_crate_bullet",
                        punch: "ammo_crate_bullet",
                        explode: "crate_break_01"
                    }
                }),
                crate_05: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2, 2)),
                    destructible: !1,
                    hitParticle: "goldChip",
                    loot: [],
                    map: {
                        display: !1
                    },
                    img: {
                        sprite: "map-crate-05.img"
                    },
                    sound: {
                        bullet: "wall_brick_bullet",
                        punch: "wall_brick_bullet"
                    }
                }),
                crate_06: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.1)),
                    health: 175,
                    destructible: !0,
                    armorPlated: !0,
                    hitParticle: "greenChip",
                    loot: [s("tier_ammo", 1, 1)],
                    map: {
                        display: !1
                    },
                    img: {
                        sprite: "map-crate-06.img"
                    },
                    sound: {
                        bullet: "ammo_crate_bullet",
                        punch: "ammo_crate_bullet"
                    }
                }),
                crate_07: v({
                    health: 140,
                    loot: [s("tier_surviv", 4, 5), l("ak47", 1), l("ak47", 1), l("ak47", 1), l("ak47", 1), l("outfitKhaki", 1), l("outfitKhaki", 1), l("outfitKhaki", 1), l("outfitKhaki", 1)],
                    img: {
                        sprite: "map-crate-07.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_07b: v({
                    health: 140,
                    loot: [s("tier_armor", 4, 5), l("mp220", 1), l("mp220", 1), l("bar", 1), l("bar", 1), l("outfitKhaki", 1), l("outfitKhaki", 1), l("outfitKhaki", 1), l("outfitKhaki", 1)],
                    img: {
                        sprite: "map-crate-07.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_08: v({
                    health: 140,
                    loot: [s("tier_surviv", 2, 3)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-08.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_09: v({
                    health: 140,
                    loot: [s("tier_chest", 1, 2), s("tier_conch", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-09.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_10: v({
                    health: 200,
                    scale: {
                        destroy: .75
                    },
                    loot: [s("tier_airdrop_uncommon", 1, 1), s("tier_airdrop_armor", 1, 1), s("tier_medical", 2, 2), s("tier_airdrop_scopes", 1, 1), s("tier_airdrop_skins", 1, 1), s("tier_airdrop_melee", 1, 1), s("tier_airdrop_ammo", 3, 3), s("tier_airdrop_throwables", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-10.img",
                        residue: "map-crate-res-03.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_11: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    scale: {
                        destroy: .75
                    },
                    health: 200,
                    loot: [s("tier_airdrop_rare", 1, 1), s("tier_airdrop_armor", 1, 1), s("tier_medical", 2, 2), s("tier_airdrop_scopes", 1, 1), s("tier_airdrop_skins", 1, 1), s("tier_airdrop_melee", 1, 1), s("tier_airdrop_ammo", 3, 3), s("tier_airdrop_throwables", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-11.img",
                        residue: "map-crate-res-03.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_12: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.5, 3.5)),
                    scale: {
                        destroy: .75
                    },
                    health: 500,
                    loot: [s("tier_airdrop_rare", 2, 2), s("tier_airdrop_uncommon", 4, 6), s("tier_airdrop_armor", 4, 5), s("tier_medical", 12, 15), s("tier_airdrop_scopes", 6, 8), s("tier_airdrop_skins", 3, 4), s("tier_airdrop_melee", 5, 7), s("tier_airdrop_ammo", 10, 12), s("tier_airdrop_throwables", 6, 8), s("tier_katanas", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-12.img",
                        residue: "map-crate-res-03.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_13: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.5, 3.5)),
                    scale: {
                        destroy: .75
                    },
                    health: 200,
                    loot: [s("tier_airdrop_mythic", 3, 4), s("tier_airdrop_rare", 3, 4), s("tier_airdrop_armor", 6, 8), s("tier_medical", 12, 15), s("tier_airdrop_scopes", 6, 8), s("tier_airdrop_faction_skins", 1, 2), s("tier_airdrop_faction_melee", 3, 4), s("tier_airdrop_ammo", 10, 12), s("tier_airdrop_throwables", 6, 8), s("tier_katanas", 1, 1), l("strobe", 1), l("strobe", 1), l("strobe", 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-13.img",
                        residue: "map-crate-res-03.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_14: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [s("tier_knives", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-14.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_15: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [s("tier_knives", 4, 4)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-14.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_16: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [s("tier_knives", 4, 4)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-14.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_17: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [l("ot38", 1), l("ot38", 1), l("ot38", 1), l("ot38", 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-17.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_18: v({
                    health: 140,
                    loot: [s("tier_cattle_crate", 2, 3), s("tier_soviet", 1, 2)],
                    map: {
                        display: !0,
                        color: 12867840,
                        scale: .875
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-18.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_19: v({
                    health: 140,
                    loot: [s("tier_guns", 1, 3), s("tier_surviv", 2, 3)],
                    map: {
                        display: !0,
                        color: 4500224,
                        scale: .875
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-19.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_20: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.7, 1.7)),
                    health: 75,
                    hitParticle: "greenChip",
                    explodeParticle: "greenPlank",
                    loot: [s("tier_armor", 1, 1), s("tier_world", 1, 1)],
                    map: {
                        display: !0,
                        color: 3884335,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-20.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_21: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [l("outfitWhite", 1), l("outfitWhite", 1), l("ots38_dual", 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-21.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_22: v({
                    health: 140,
                    loot: [s("tier_guns", 3, 3), s("tier_armor", 2, 2), s("tier_packs", 1, 1)],
                    map: {
                        display: !0,
                        color: 32511
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-22.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_22d: v({
                    health: 140,
                    loot: [l("an94", 1), l("helmet03_lt_aged", 1), l("outfitBlueLeaderAged", 1), l("kukri_trad", 1)],
                    map: {
                        display: !0,
                        color: 32511
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-22.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                airdrop_crate_01: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    button: {
                        useImg: "map-airdrop-02.img",
                        useParticle: "airdropCrate01",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-01.img",
                        residue: "none"
                    },
                    destroyType: "crate_10",
                    explodeParticle: "airdropCrate02"
                }),
                airdrop_crate_02: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    button: {
                        useImg: "map-airdrop-02.img",
                        useParticle: "airdropCrate01",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-01.img",
                        residue: "none"
                    },
                    destroyType: "crate_11",
                    explodeParticle: "airdropCrate02"
                }),
                airdrop_crate_03: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4, 4)),
                    button: {
                        useImg: "map-airdrop-04.img",
                        useParticle: "airdropCrate03",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-03.img",
                        residue: "none"
                    },
                    destroyType: "crate_12",
                    explodeParticle: "airdropCrate04"
                }),
                airdrop_crate_04: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4, 4)),
                    button: {
                        useImg: "map-airdrop-04.img",
                        useParticle: "airdropCrate03",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-03.img",
                        residue: "none"
                    },
                    destroyType: "crate_13",
                    explodeParticle: "airdropCrate04"
                }),
                airdrop_crate_01x: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    button: {
                        useImg: "map-crate-13x.img",
                        useParticle: "airdropCrate01x",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-01x.img",
                        residue: "none"
                    },
                    destroyType: "crate_10",
                    explodeParticle: "airdropCrate02x"
                }),
                airdrop_crate_02x: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    button: {
                        useImg: "map-crate-13x.img",
                        useParticle: "airdropCrate01x",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-02x.img",
                        residue: "none"
                    },
                    destroyType: "crate_11",
                    explodeParticle: "airdropCrate02x"
                }),
                bottle_01: B({
                    collision: _e.createCircle(ve.create(0, 0), .5),
                    health: 12,
                    hitParticle: "bottleBrownChip",
                    explodeParticle: "bottleBrownBreak",
                    img: {
                        sprite: "map-bottle-01.img",
                        residue: "none"
                    },
                    loot: [],
                    sound: {
                        bullet: "glass_bullet",
                        punch: "glass_bullet",
                        explode: "window_break_01",
                        enter: "none"
                    }
                }),
                bottle_02: B({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.5, .5)),
                    health: 20,
                    hitParticle: "bottleBlueChip",
                    explodeParticle: "bottleBlueBreak",
                    img: {
                        sprite: "map-bottle-02.img",
                        residue: "none"
                    },
                    loot: [],
                    sound: {
                        bullet: "glass_bullet",
                        punch: "glass_bullet",
                        explode: "window_break_01",
                        enter: "none"
                    }
                }),
                bottle_02r: L({
                    img: {
                        tint: 13172736
                    }
                }),
                bottle_02o: L({
                    collidable: !1,
                    img: {
                        tint: 16734720
                    }
                }),
                bottle_02y: L({
                    collidable: !1,
                    img: {
                        tint: 16776960
                    }
                }),
                bottle_02g: L({
                    collidable: !1,
                    img: {
                        tint: 32768
                    }
                }),
                bottle_02b: L({
                    img: {
                        tint: 27903
                    }
                }),
                bottle_02i: L({
                    collidable: !1,
                    img: {
                        tint: 4915330
                    }
                }),
                bottle_02v: L({
                    img: {
                        tint: 15631086
                    }
                }),
                candle_01: {
                    type: "obstacle",
                    map: {
                        display: !1,
                        color: 16777215,
                        scale: 1
                    },
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .5
                    },
