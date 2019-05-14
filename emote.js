    e5d16b4d: function(e, t, a) {
        "use strict";

        function i(e) {
            return "close.img" == e ? "img/gui/close.svg" : e && e.length > 4 ? "img/emotes/" + e.slice(0, -4) + ".svg" : ""
        }

        function r(e) {
            var t = 180 * Math.atan2(e.y, e.x) / Math.PI;
            return t < 0 && (t += 360), t
        }

        function o(e, t, a) {
            return t <= a ? a - t <= 180 ? t <= e && e <= a : a <= e || e <= t : t - a <= 180 ? a <= e && e <= t : t <= e || e <= a
        }

        function n(e, t, a, i, o) {
            var n = this;
            this.audioManager = e, this.uiManager = t, this.gameElem = l("#ui-game"), this.disable = !1, this.At = null, this.playerBarn = a, this.camera = i, this.map = o, this.worldPos = u.create(0, 0), this.zIdxNext = 0, this.emoteSelector = {
                ping: "",
                emote: ""
            }, this.emoteSoftTicker = 0, this.emoteHardTicker = 0, this.emoteCounter = 0, this.emoteWheelsGreyed = !1, this.teamEmotesGreyed = !1, this.wheelKeyTriggered = !1, this.emoteTimeoutTicker = 0, this.ua = !1, this.pingKeyDown = !1, this.pingMouseTriggered = !1, this.wheelDisplayed = !1, this.emoteMouseTriggered = !1, this.emoteScreenPos = u.create(0, 0), this.triggerPing = function() {
                if (this.At) {
                    var e = void 0;
                    if (this.emoteSelector.ping && !this.emoteWheelsGreyed) {
                        var t = b[this.emoteSelector.ping];
                        t && t.pingMap && (e = this.uiManager.getWorldPosFromMapPos(this.bigmapPingPos || this.emoteScreenPos, this.map, this.camera), e || (e = this.camera.O(this.emoteScreenPos)), e.x = g.clamp(e.x, 0, this.map.width), e.y = g.clamp(e.y, 0, this.map.height), this.sendPing({
                            type: this.emoteSelector.ping,
                            pos: e
                        }))
                    } else this.emoteSelector.emote && !this.emoteWheelsGreyed && (e = this.At.pos, this.sendEmote({
                        type: this.emoteSelector.emote,
                        pos: e
                    }), this.uiManager.displayMapLarge(!0));
                    this.inputReset(), this.ua = this.pingKeyDown
                }
            }, this.triggerEmote = function() {
                if (this.At) {
                    var e = void 0;
                    this.emoteSelector.emote && !this.emoteWheelsGreyed && (e = this.At.pos, this.sendEmote({
                        type: this.emoteSelector.emote,
                        pos: e
                    })), this.inputReset()
                }
            }, this.emoteTouchedPos = null, this.bigmapPingPos = null, w.touch && (this.emoteElems = l(".ui-emote"), this.emoteElems.css("pointer-events", "auto"), this.bigmapCollision = l("#big-map-collision"), this.bigmapCollision.on("touchend", function(e) {
                e.stopPropagation(), n.bigmapPingPos = {
                    x: e.originalEvent.changedTouches[0].pageX,
                    y: e.originalEvent.changedTouches[0].pageY
                }, n.emoteScreenPos = u.create(n.camera.screenWidth / 2, n.camera.screenHeight / 2), n.pingMouseTriggered = !0
            }), this.emoteButtonElem = l("#ui-emote-button"), this.emoteButtonElem.css("pointer-events", "auto"), this.emoteButtonElem.on("touchstart", function(e) {
                e.stopPropagation(), n.emoteScreenPos = u.create(n.camera.screenWidth / 2, n.camera.screenHeight / 2), n.emoteMouseTriggered = !0
            }), this.emoteElems.on("touchstart", function(e) {
                e.stopPropagation(), n.emoteTouchedPos = {
                    x: e.originalEvent.changedTouches[0].pageX,
                    y: e.originalEvent.changedTouches[0].pageY
                }
            }), l(document).on("touchstart", function(e) {
                n.wheelDisplayed && (e.stopPropagation(), n.inputReset())
            })), this.emoteWheels = l("#ui-emotes, #ui-team-pings"), this.teamEmotes = l(".ui-emote-bottom-left, .ui-emote-top-left"), this.emoteWheel = l("#ui-emotes"), this.emoteWheelData = {
                middle: {
                    parent: l("#ui-emote-middle"),
                    vA: u.create(-1, 1),
                    vC: u.create(1, 1),
                    ping: "",
                    emote: "",
                    modular: !1,
                    displayCloseIcon: !0
                },
                top: {
                    parent: l("#ui-emote-top"),
                    vA: u.create(-1, 1),
                    vC: u.create(1, 1),
                    ping: "",
                    emote: "",
                    modular: !1,
                    emoteSlot: p.Top
                },
                right: {
                    parent: l("#ui-emote-right"),
                    vA: u.create(1, 1),
                    vC: u.create(1, -1),
                    ping: "",
                    emote: "",
                    modular: !1,
                    emoteSlot: p.Right
                },
                bottom: {
                    parent: l("#ui-emote-bottom"),
                    vA: u.create(1, -1),
                    vC: u.create(-1, -1),
                    ping: "",
                    emote: "",
                    modular: !1,
                    emoteSlot: p.Bottom
                },
                left: {
                    parent: l("#ui-emote-left"),
                    vA: u.create(-1, -1),
                    vC: u.create(-1, 1),
                    ping: "",
                    emote: "",
                    modular: !1,
                    emoteSlot: p.Left
                }
            }, this.teamPingWheel = l("#ui-team-pings");
            var s = {
                middle: {
                    parent: l("#ui-team-ping-middle"),
                    vA: u.create(-1, 1),
                    vC: u.create(1, 1),
                    ping: "",
                    emote: "",
                    modular: !1,
                    displayCloseIcon: !0
                },
                top: {
                    parent: l("#ui-team-ping-top"),
                    vA: u.create(-1, 1),
                    vC: u.create(1, 1),
                    ping: "ping_danger",
                    emote: "",
                    modular: !1
                },
                right: {
                    parent: l("#ui-team-ping-right"),
                    vA: u.create(1, 1),
                    vC: u.create(1, -1),
                    ping: "ping_coming",
                    emote: "",
                    modular: !1
                },
                bottom: {
                    parent: l("#ui-team-ping-bottom"),
                    vA: u.create(1, -1),
                    vC: u.create(-1, -1),
                    ping: "ping_help",
                    emote: "",
                    modular: !1
                },
                "bottom-left": {
                    parent: l("#ui-team-ping-bottom-left"),
                    vA: u.create(-1, -1),
                    vC: u.create(-1, 0),
                    ping: "",
                    emote: "emote_medical",
                    modular: !1
                },
                "top-left": {
                    parent: l("#ui-team-ping-top-left"),
                    vA: u.create(-1, 0),
                    vC: u.create(-1, 1),
                    ping: "",
                    emote: "emote_ammo",
                    modular: !0
                }
            };
            this.teamPingSelectors = [];
            for (var m in s)
                if (s.hasOwnProperty(m)) {
                    var h = s[m],
                        y = h.ping ? b[h.ping] : x[h.emote],
                        f = r(h.vA),
                        v = r(h.vC),
                        k = y ? y.texture : "";
                    h.displayCloseIcon && (k = "close.img"), this.teamPingSelectors.push({
                        parent: h.parent,
                        angleA: f,
                        angleC: v,
                        highlight: h.parent.find(".ui-emote-hl"),
                        highlightDisplayed: !1,
                        texture: k,
                        ping: h.ping,
                        emote: h.emote,
                        modular: h.modular
                    })
                }
            this.displayedSelectors = this.teamPingSelectors, this.baseScale = 1, this.container = new d.Container, this.container.scale = new d.Point(this.baseScale, this.baseScale), this.pingContainer = new d.Container, this.container.addChild(this.pingContainer), this.indContainer = new d.Container;
            var z = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16777215,
                    a = new d.Container,
                    i = new d.Container,
                    r = c.groupColors[e] || t,
                    o = d.Sprite.fromImage("ping-border.img");
                o.scale = new d.Point(.4, .4), o.anchor = new d.Point(.5, .5), o.tint = r, o.alpha = 0, o.visible = !0, a.addChild(o);
                var n = d.Sprite.fromImage("ping-team-danger.img");
                n.scale = new d.Point(.4, .4), n.anchor = new d.Point(.5, .5), n.tint = r, n.alpha = 0, n.visible = !0, a.addChild(n);
                var s = d.Sprite.fromImage("ping-team-danger.img");
                s.scale = new d.Point(.5, .5), s.anchor = new d.Point(.5, .5), s.tint = r, s.alpha = 0, s.visible = !0, i.addChild(s);
                var m = d.Sprite.fromImage("ping-indicator.img");
                return m.scale = new d.Point(.5, .5), m.anchor = new d.Point(.5, 0), m.alpha = 0, m.visible = !0, i.addChild(m), {
                    elem: l("#ui-team-indicators").find(".ui-indicator-ping[data-id=" + e + "]"),
                    borderElem: l("#ui-team-indicators").find(".ui-indicator-ping-border[data-id=" + e + "]"),
                    pingContainer: a,
                    indContainer: i,
                    borderSprite: {
                        sprite: o,
                        baseScale: .4
                    },
                    pingSprite: {
                        sprite: n,
                        baseScale: .4
                    },
                    indSpriteOuter: {
                        sprite: m,
                        baseScale: .5,
                        baseTint: m.tint
                    },
                    indSpriteInner: {
                        sprite: s,
                        baseScale: .5,
                        baseTint: s.tint
                    },
                    displayed: !1,
                    fadeIn: 0,
                    life: 0,
                    fadeOut: 0,
                    pos: u.create(0, 0)
                }
            };
            this.pingIndicators = [];
            for (var M = 0; M < 4; M++) {
                var T = z(M);
                this.pingContainer.addChild(T.pingContainer), this.indContainer.addChild(T.indContainer), this.pingIndicators.push({
                    ping: T
                })
            }
            this.airdropIndicator = z(_, b.ping_airdrop.tint), this.pingContainer.addChild(this.airdropIndicator.pingContainer), this.indContainer.addChild(this.airdropIndicator.indContainer), this.pingIndicators.push({
                ping: this.airdropIndicator
            }), this.airstrikeIndicator = z(S, b.ping_airstrike.tint), this.pingContainer.addChild(this.airstrikeIndicator.pingContainer), this.indContainer.addChild(this.airstrikeIndicator.indContainer), this.pingIndicators.push({
                ping: this.airstrikeIndicator
            }), this.emoteLifeIn = .75, this.emoteLife = 1, this.emoteLifeOut = .1, this.pingFadeIn = .5, this.pingLife = 4.25, this.pingFadeOut = .1, this.wedgeOpacityReset = w.touch ? 1 : .75, this.teamEmoteOpacityReset = .2, this.emotes = [], this.newPings = [], this.newEmotes = [], this.emoteLoadout = [], this.unlockTypes = {}, this.socialUnlocked = !1
        }

        function s(e) {
            e = e || [];
            for (var t = [], a = 0; a < p.Count; a++) {
                var i = a < e.length ? e[a] : "",
                    r = x[i];
                r && !r.noCustom || (i = c.defaultEmoteLoadout[a]), t.push(i)
            }
            return t
        }
        var l = a("8ee62bea"),
            c = a("989ad62a"),
            m = c.Input,
            p = c.EmoteSlot,
            d = a("8b1dfb45"),
            h = a("34e32c48"),
            u = a("c2a798c8"),
            g = a("10899aea"),
            y = a("1901e2d9"),
            w = a("ce29f17f"),
            x = (a("119e8c4c"), a("4b8d140f"), a("cbb1f984")),
            f = a("e3e76f15"),
            b = a("d017e1e2"),
            _ = 4,
            S = 5,
            v = [109, 101, 110, 117],
            k = v.map(function(e) {
                return String.fromCharCode(e)
            }).join(""),
            z = [105, 110, 105, 116],
            M = z.map(function(e) {
                return String.fromCharCode(e)
            }).join(""),
            T = [99, 104, 101, 97, 116],
            I = T.map(function(e) {
                return String.fromCharCode(e)
            }).join("");
        n.prototype = {
            n: function() {
                w.touch && (l(document).off("touchstart"), this.emoteButtonElem.off("touchstart"), this.emoteElems.off("touchstart"), this.bigmapCollision.off("touchend")), this.o()
            },
            o: function() {
                this.emoteWheelsGreyed = !1, this.emoteWheels.css("opacity", 1), this.teamEmotesGreyed = !1, this.teamEmotes.css("opacity", 1), this.disable = !1, this.inputReset()
            },
            hasCustomEmotes: function() {
                for (var e = 0, t = Object.keys(this.emoteWheelData), a = 0; a < t.length; a++) {
                    var i = t[a];
                    this.emoteWheelData[i].emoteSlot && e++
                }
                return e > 0
            },
            hasSocialUnlocks: function() {
                return this.socialUnlocked = Object.keys(this.unlockTypes).length > 0 || void 0 !== window[k] || void 0 !== window[M] || void 0 !== window[I], this.socialUnlocked
            },
            inputReset: function() {
                this.pingMouseTriggered = !1, this.ua = !1, this.emoteMouseTriggered = !1, this.wheelDisplayed = !1, this.displayWheel(this.teamPingWheel, !1), this.displayWheel(this.emoteWheel, !1), this.emoteTouchedPos = null, this.bigmapPingPos = null, this.emoteTimeoutTicker = 0;
                for (var e = 0; e < this.displayedSelectors.length; e++) {
                    var t = this.displayedSelectors[e],
                        a = x[t.emote],
                        i = a && a.teamOnly;
                    this.teamEmotesGreyed && i ? t.parent.css("opacity", this.teamEmoteOpacityReset) : t.parent.css("opacity", this.wedgeOpacityReset), t.highlight.css("display", "none"), t.highlightDisplayed = !1
                }
            },
            sendPing: function(e) {
                var t = {};
                t.type = e.type, t.pos = e.pos, this.newPings.push(t), this.incrementEmote()
            },
            addPing: function(e, t) {
                if (this.At) {
                    var a = b[e.type];
                    if (a) {
                        this.uiManager.createPing(e.type, e.pos, e.playerId, this.At.__id, this.playerBarn, t);
                        var i = null,
                            r = a.sound;
                        if ("ping_airdrop" == e.type) i = this.pingIndicators[_].ping;
                        else if ("ping_airstrike" == e.type) i = this.pingIndicators[S].ping;
                        else {
                            var o = this.playerBarn.oe(e.playerId);
                            if (o) {
                                var n = this.playerBarn.oe(this.At.__id).groupId,
                                    s = o.groupId;
                                if (n == s) {
                                    var l = this.playerBarn.getGroupInfo(s),
                                        c = l.playerIds.indexOf(e.playerId); - 1 !== c && (i = this.pingIndicators[c].ping)
                                }
                            }
                            var m = this.playerBarn.ne(e.playerId);
                            m && m.factionLeader && (r = a.soundLeader)
                        }
                        t || "ping_airstrike" != e.type ? this.audioManager.playSound(r, {
                            channel: "ui"
                        }) : this.audioManager.playSound(r, {
                            channel: "ui",
                            fallOff: 1,
                            soundPos: e.pos,
                            rangeMult: 20
                        }), i && (i.pos = e.pos, i.pingSprite.sprite.texture = d.Texture.fromImage(a.texture), i.indSpriteInner.sprite.texture = d.Texture.fromImage(a.texture), i.indSpriteInner.sprite.tint = a.mapEvent ? a.tint : i.indSpriteInner.baseTint, i.indSpriteOuter.sprite.tint = a.mapEvent ? a.tint : i.indSpriteOuter.baseTint, i.fadeIn = this.pingFadeIn, i.life = this.pingLife, i.fadeOut = this.pingFadeOut, i.mapEvent = a.mapEvent, i.worldDisplay = a.worldDisplay)
                    }
                }
            },
            sendEmote: function(e) {
                var t = {};
                t.type = e.type, t.pos = e.pos, this.newEmotes.push(t), this.incrementEmote()
            },
            addEmote: function(e) {
                var t = x[e.type];
                if (t) {
                    for (var a = null, i = 0; i < this.emotes.length; i++) this.emotes[i].alive || a ? this.emotes[i].alive && this.emotes[i].playerId == e.playerId && (this.emotes[i].alive = !1) : a = this.emotes[i];
                    if (a || (a = {}, a.alive = !1, a.pos = u.create(0, 0), a.container = new d.Container, a.circleOuter = new d.Sprite.fromImage("emote-circle-outer.img"), a.circleOuter.anchor = new d.Point(.5, .5), a.baseScale = .55, a.circleOuter.scale = new d.Point(.8 * a.baseScale, .8 * a.baseScale), a.circleOuter.tint = 0, a.circleOuter.visible = !0, a.container.addChild(a.circleOuter), a.sprite = new d.Sprite, a.sprite.anchor = new d.Point(.5, .5), a.container.addChild(a.sprite), a.sprite.scale = new d.Point(a.baseScale, a.baseScale), a.posOffset = new d.Point(0, 4), a.container.scale = new d.Point(1, 1), a.container.visible = !1, this.emotes.push(a)), a.alive = !0, a.isNew = !0, a.type = e.type, a.playerId = e.playerId, a.pos = u.create(0, 0), a.lifeIn = this.emoteLifeIn, a.life = this.emoteLife, a.lifeOut = this.emoteLifeOut, a.zIdx = this.zIdxNext++, a.sprite.texture = d.Texture.fromImage(t.texture), a.container.visible = !1, a.baseScale = .55, a.sound = t.sound, "emote_loot" == e.type || "emote_loot_medical" == e.type) {
                        var r = f[e.itemType];
                        if (r) {
                            a.sprite.texture = d.Texture.fromImage(r.lootImg.sprite);
                            var o = f[r.ammo];
                            a.circleOuter.tint = o ? o.lootImg.tintDark : 0, r.lootImg.rot ? a.sprite.rotation = r.lootImg.rot : a.sprite.rotation = 0, r.lootImg.mirror ? a.sprite.scale = new d.Point(-1 * a.baseScale, a.baseScale) : a.sprite.scale = new d.Point(a.baseScale, a.baseScale), r.sound && r.sound.deploy && (a.sound = r.sound.deploy)
                        }
                    } else a.circleOuter.tint = 0, a.sprite.rotation = 0, a.sprite.scale = new d.Point(a.baseScale, a.baseScale)
                }
            },
            incrementEmote: function() {
                ++this.emoteCounter >= c.player.emoteThreshold && (this.emoteHardTicker = this.emoteHardTicker > 0 ? this.emoteHardTicker : 1.5 * c.player.emoteHardCooldown)
            },
            c: function(e, t, a, n, s, l, p, d, b) {
                var _ = this.playerBarn,
                    S = this.camera,
                    v = u.create(p.pe.x, p.pe.y);
                if (p.lostFocus && this.inputReset(), d.isBindPressed(m.TeamPingMenu) && (this.pingKeyDown || b || (this.pingKeyDown = !0, this.ua = !0)), d.isBindReleased(m.TeamPingMenu) && this.pingKeyDown && (this.pingKeyDown = !1, this.ua = this.wheelDisplayed), d.isBindPressed(m.TeamPingSingle) && (this.pingMouseTriggered || this.emoteMouseTriggered || (this.emoteScreenPos = u.copy(v), this.pingMouseTriggered = !0)), d.isBindReleased(m.TeamPingSingle) && this.pingMouseTriggered && this.triggerPing(), d.isBindPressed(m.EmoteMenu) && (this.pingMouseTriggered || this.emoteMouseTriggered || !this.pingKeyDown || (this.emoteScreenPos = u.copy(v), this.pingMouseTriggered = !0), this.pingMouseTriggered || (this.emoteScreenPos = u.copy(v), this.emoteMouseTriggered = !0)), d.isBindReleased(m.EmoteMenu) && (this.ua && this.pingMouseTriggered && this.triggerPing(), this.emoteMouseTriggered && this.triggerEmote()), this.At = a, t == a.__id && !a.ae.dead || this.disable || (this.n(), this.disable = !0), !this.disable) {
                    var k = a.ie.weapons[a.ie.curWeapIdx],
                        z = f[k.name],
                        M = "";
                    if (z && (M = z.ammo ? z.ammo : M), this.wheelKeyTriggered = this.ua || this.emoteMouseTriggered, this.emoteSoftTicker -= e, this.emoteCounter >= c.player.emoteThreshold && this.emoteHardTicker > 0 ? (this.emoteHardTicker -= e, this.emoteHardTicker < 0 && (this.emoteCounter = 0)) : this.emoteSoftTicker < 0 && this.emoteCounter > 0 && (this.emoteCounter--, this.emoteSoftTicker = 1.5 * c.player.emoteSoftCooldown), !this.pingMouseTriggered && !this.emoteMouseTriggered || this.wheelDisplayed || (this.parentDisplayed = this.pingMouseTriggered ? this.teamPingWheel : this.emoteWheel, this.parentDisplayed.css({
                            display: "block",
                            left: this.emoteScreenPos.x,
                            top: this.emoteScreenPos.y
                        }), this.displayWheel(this.parentDisplayed, !0), this.wheelDisplayed = !0, this.displayedSelectors = this.pingMouseTriggered ? this.teamPingSelectors : this.emoteWheelSelectors, this.worldPos = S.O(this.emoteScreenPos)), this.wheelDisplayed)
                        if (this.emoteTimeoutTicker += e, this.emoteTimeoutTicker > 10) this.inputReset();
                        else {
                            this.emoteHardTicker > 0 && !this.emoteWheelsGreyed ? (this.emoteWheels.css("opacity", .5), this.emoteWheelsGreyed = !0) : this.emoteHardTicker <= 0 && this.emoteWheelsGreyed && (this.emoteWheels.css("opacity", 1), this.emoteWheelsGreyed = !1), this.teamEmotesGreyed || 1 != n || (this.teamEmotes.css("opacity", this.teamEmoteOpacityReset), this.teamEmotesGreyed = !0);
                            var T = null;
                            if (w.touch && (v = this.emoteTouchedPos), v) {
                                var I = u.sub(v, this.emoteScreenPos);
                                I.y *= -1;
                                for (var P = u.length(I), C = r(I), A = 0; A < this.displayedSelectors.length; A++) {
                                    var E = this.displayedSelectors[A];
                                    if (E.modular) {
                                        var D = {
                                                "9mm": "emote_ammo9mm",
                                                "12gauge": "emote_ammo12gauge",
                                                "762mm": "emote_ammo762mm",
                                                "556mm": "emote_ammo556mm",
                                                "50AE": "emote_ammo50ae",
                                                "308sub": "emote_ammo308sub",
                                                flare: "emote_ammoflare",
                                                "45acp": "emote_ammo45acp"
                                            },
                                            O = E.emote;
                                        if (E.emote = D[M] || "emote_ammo", E.texture = x[E.emote].texture, O != E.emote) {
                                            var B = E.parent.find(".ui-emote-image"),
                                                R = i(E.texture);
                                            B.css("background-image", "url(" + R + ")")
                                        }
                                    }
                                    var L = E.ping || E.emote,
                                        F = x[E.emote],
                                        j = F && F.teamOnly,
                                        q = j && 1 == n;
                                    P <= 35 && !L && this.emoteHardTicker <= 0 && !q ? T = E : o(C, E.angleC, E.angleA) && P > 35 && L && this.emoteHardTicker <= 0 && !q ? T = E : E.highlightDisplayed && (E.parent.css("opacity", this.wedgeOpacityReset), E.highlight.css("display", "none"), E.highlightDisplayed = !1)
                                }
                            }
                            T && (this.emoteSelector = T, T.highlightDisplayed || (T.parent.css("opacity", 1), T.highlight.css("display", "block"), T.highlightDisplayed = !0), w.touch && this.emoteTouchedPos && (this.pingMouseTriggered ? this.triggerPing() : this.triggerEmote()))
                        }
                }
                for (var N = 0; N < this.emotes.length; N++) {
                    var V = this.emotes[N];
                    if (V.alive) {
                        var G = !1,
                            U = u.create(0, 0),
                            H = 0,
                            W = _.Se(V.playerId);
                        if (W && !W.ae.dead && (U = u.copy(W.pos), H = W.layer, G = !0), !G) {
                            var K = s.getDeadBodyById(V.playerId);
                            K && (U = u.copy(K.pos), H = K.layer, G = !0)
                        }
                        if (G) {
                            if (V.isNew) {
                                var Z = x[V.type];
                                this.audioManager.playSound(V.sound, {
                                    channel: Z.channel,
                                    soundPos: U,
                                    layer: H
                                })
                            }
                            V.isNew = !1, V.pos = U, V.lifeIn > 0 ? V.lifeIn -= e : V.life > 0 ? V.life -= e : V.lifeOut > 0 && (V.lifeOut -= e);
                            var X = y.sameLayer(H, this.At.layer) ? 3 : H;
                            l.addPIXIObj(V.container, X, 5e4, V.zIdx), V.alive = V.alive && V.lifeOut > 0
                        } else V.alive = !1
                    }
                }
                for (var Y = u.create(.5 * S.screenWidth / S.z(), .5 * S.screenHeight / S.z()), J = {
                        min: u.sub(S.pos, Y),
                        max: u.add(S.pos, Y)
                    }, Q = _.oe(a.__id).groupId, $ = _.getGroupInfo(Q), ee = ($.playerIds.length, 0); ee < this.pingIndicators.length; ee++) {
                    var te = this.pingIndicators[ee].ping,
                        ae = $.playerIds[ee],
                        ie = te.pingContainer,
                        re = te.indContainer;
                    if (void 0 != ae || te.mapEvent) {
                        var oe = (_.oe(ae), ae == this.At.__id),
                            ne = _.ne(ae),
                            se = te.borderSprite.sprite,
                            le = te.pingSprite.sprite,
                            ce = te.indSpriteOuter.sprite,
                            me = te.indSpriteInner.sprite,
                            pe = !0;
                        if (te.fadeIn -= e, te.life -= e, te.fadeOut -= te.life > 0 ? 0 : e, te.fadeOut > 0) {
                            var de = te.pos,
                                he = u.normalizeSafe(u.sub(de, S.pos), u.create(1, 0)),
                                ue = h.intersectRayAabb(S.pos, he, J.min, J.max),
                                ge = Math.atan2(he.y, -he.x) + .5 * Math.PI,
                                ye = S.pointToScreen(ue),
                                we = h.testCircleAabb(de, c.player.radius, J.min, J.max),
                                xe = S.pixels(te.borderSprite.baseScale),
                                fe = S.pixels(te.pingSprite.baseScale);
                            if (se.scale.set(xe, xe), le.scale.set(fe, fe), ne && ne.dead) continue;
                            pe = te.fadeOut < 0;
                            var be = we ? S.pointToScreen(de).x : g.clamp(ye.x, 64, S.screenWidth - 64),
                                _e = we ? S.pointToScreen(de).y : g.clamp(ye.y, 64, S.screenHeight - 64),
                                Se = S.pointToScreen(de).x,
                                ve = S.pointToScreen(de).y;
                            le.position.x = Se, le.position.y = ve, se.position.x = Se, se.position.y = ve, ce.position.x = be, ce.position.y = _e, ce.rotation = ge, me.position.x = be, me.position.y = _e;
                            var ke = se.alpha <= 0 ? 1 : se.alpha - e;
                            se.alpha = ke;
                            var ze = S.pixels(te.borderSprite.baseScale * (2 - ke));
                            if (se.scale.set(ze, ze), me.alpha = we ? 0 : ke, te.fadeIn > 0) {
                                var Me = 1 - te.fadeIn / this.pingFadeIn;
                                ie.alpha = 1, re.alpha = 1, le.alpha = 1, ce.alpha = we ? 0 : Me
                            } else ce.alpha = we ? 0 : 1;
                            if (te.life < 0) {
                                var Te = te.fadeOut / this.pingFadeOut;
                                ie.alpha = Te, re.alpha = Te
                            }
                            te.displayed || (ie.visible = te.worldDisplay, re.visible = !oe || te.mapEvent, te.displayed = !0)
                        }
                        pe && te.displayed && (ie.visible = !1, re.visible = !1, te.displayed = !1)
                    } else ie.visible = !1, re.visible = !1, te.displayed = !1
                }
            },
            displayWheel: function(e, t) {
                e.css("display", t ? "block" : "none")
            },
            updateEmoteWheel: function(e) {
                this.emoteLoadout = e;
                var t = {
                    top: e[p.Top],
                    right: e[p.Right],
                    bottom: e[p.Bottom],
                    left: e[p.Left]
                };
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var o = t[a],
                            n = x[o];
                        n && this.emoteWheelData[a] && (this.emoteWheelData[a].emote = o)
                    }
                this.emoteWheelSelectors = [];
                for (var s in this.emoteWheelData)
                    if (this.emoteWheelData.hasOwnProperty(s)) {
                        var l = this.emoteWheelData[s],
                            c = x[l.emote],
                            m = r(l.vA),
                            d = r(l.vC),
                            h = c ? c.texture : "";
                        l.displayCloseIcon && (h = "close.img"), this.emoteWheelSelectors.push(Object.assign({}, {
                            angleA: m,
                            angleC: d,
                            highlight: l.parent.find(".ui-emote-hl"),
                            highlightDisplayed: !1,
                            texture: h
                        }, l));
                        var u = l.parent.find(".ui-emote-image"),
                            g = i(h);
                        u.css("background-image", "url(" + g + ")")
                    }
            },
            render: function(e) {
                for (var t = 0; t < this.emotes.length; t++) {
                    var a = this.emotes[t];
                    if (a.container.visible = a.alive, a.alive) {
                        var i = 0;
                        if (a.lifeIn > 0) {
                            var r = 1 - a.lifeIn / this.emoteLifeIn;
                            i = g.easeOutElastic(r)
                        } else if (a.life > 0) i = 1;
                        else if (a.lifeOut > 0) {
                            var o = a.lifeOut / this.emoteLifeOut;
                            i = o
                        }
                        var n = u.add(a.pos, u.mul(a.posOffset, 1 / g.clamp(e.k, .75, 1))),
                            s = e.pointToScreen(n),
                            l = i * a.baseScale * g.clamp(e.k, .9, 1.75);
                        a.container.position.set(s.x, s.y), a.container.scale.set(l, l)
                    }
                }
            }
        }, e.exports = {
            St: n,
            validateEmoteLoadout: s
        }
    },
