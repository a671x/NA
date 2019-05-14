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
            this.audioManager = e, this.uiManager = t, this.gameElem = s("#ui-game"), this.disable = !1, this.Et = null, this.playerBarn = a, this.camera = i, this.map = o, this.worldPos = f.create(0, 0), this.zIdxNext = 0, this.emoteSelector = {
                ping: g.None,
                emote: d.None
            }, this.emoteSoftTicker = 0, this.emoteHardTicker = 0, this.emoteCounter = 0, this.emoteWheelsGreyed = !1, this.teamEmotesGreyed = !1, this.wheelKeyTriggered = !1, this.emoteTimeoutTicker = 0, this.ga = !1, this.pingKeyDown = !1, this.pingMouseTriggered = !1, this.wheelDisplayed = !1, this.emoteMouseTriggered = !1, this.emoteScreenPos = f.create(0, 0), this.triggerPing = function() {
                if (this.Et) {
                    var e = void 0;
                    this.emoteSelector.ping == g.None || this.emoteWheelsGreyed ? this.emoteSelector.emote == d.None || this.emoteWheelsGreyed || (e = this.Et.pos, this.sendEmote({
                        type: this.emoteSelector.emote,
                        useLoadout: this.emoteSelector.useLoadout,
                        emoteSlot: this.emoteSelector.emoteSlot,
                        pos: e
                    }), this.uiManager.displayMapLarge(!0)) : y[this.emoteSelector.ping].pingMap && (e = this.uiManager.getWorldPosFromMapPos(this.bigmapPingPos || this.emoteScreenPos, this.map, this.camera), e || (e = this.camera.O(this.emoteScreenPos)), e.x = b.clamp(e.x, 0, this.map.width), e.y = b.clamp(e.y, 0, this.map.height), this.sendPing({
                        type: this.emoteSelector.ping,
                        pos: e
                    })), this.inputReset(), this.ga = this.pingKeyDown
                }
            }, this.triggerEmote = function() {
                if (this.Et) {
                    var e = void 0;
                    this.emoteSelector.emote == d.None || this.emoteWheelsGreyed || (e = this.Et.pos, this.sendEmote({
                        type: this.emoteSelector.emote,
                        useLoadout: this.emoteSelector.useLoadout,
                        emoteSlot: this.emoteSelector.emoteSlot,
                        pos: e
                    })), this.inputReset()
                }
            }, this.emoteTouchedPos = null, this.bigmapPingPos = null, S.touch && (this.emoteElems = s(".ui-emote"), this.emoteElems.css("pointer-events", "auto"), this.bigmapCollision = s("#big-map-collision"), this.bigmapCollision.on("touchend", function(e) {
                e.stopPropagation(), n.bigmapPingPos = {
                    x: e.originalEvent.changedTouches[0].pageX,
                    y: e.originalEvent.changedTouches[0].pageY
                }, n.emoteScreenPos = f.create(n.camera.screenWidth / 2, n.camera.screenHeight / 2), n.pingMouseTriggered = !0
            }), this.emoteButtonElem = s("#ui-emote-button"), this.emoteButtonElem.css("pointer-events", "auto"), this.emoteButtonElem.on("touchstart", function(e) {
                e.stopPropagation(), n.emoteScreenPos = f.create(n.camera.screenWidth / 2, n.camera.screenHeight / 2), n.emoteMouseTriggered = !0
            }), this.emoteElems.on("touchstart", function(e) {
                e.stopPropagation(), n.emoteTouchedPos = {
                    x: e.originalEvent.changedTouches[0].pageX,
                    y: e.originalEvent.changedTouches[0].pageY
                }
            }), s(document).on("touchstart", function(e) {
                n.wheelDisplayed && (e.stopPropagation(), n.inputReset())
            })), this.emoteWheels = s("#ui-emotes, #ui-team-pings"), this.teamEmotes = s(".ui-emote-bottom-left, .ui-emote-top-left"), this.emoteWheel = s("#ui-emotes"), this.emoteWheelData = {
                middle: {
                    parent: s("#ui-emote-middle"),
                    vA: f.create(-1, 1),
                    vC: f.create(1, 1),
                    ping: g.None,
                    emote: d.None,
                    modular: !1,
                    displayCloseIcon: !0
                },
                top: {
                    parent: s("#ui-emote-top"),
                    vA: f.create(-1, 1),
                    vC: f.create(1, 1),
                    ping: g.None,
                    emote: d.HappyFace,
                    modular: !1,
                    useLoadout: !0,
                    emoteSlot: p.Top
                },
                right: {
                    parent: s("#ui-emote-right"),
                    vA: f.create(1, 1),
                    vC: f.create(1, -1),
                    ping: g.None,
                    emote: d.ThumbsUp,
                    modular: !1,
                    useLoadout: !0,
                    emoteSlot: p.Right
                },
                bottom: {
                    parent: s("#ui-emote-bottom"),
                    vA: f.create(1, -1),
                    vC: f.create(-1, -1),
                    ping: g.None,
                    emote: d.Surviv,
                    modular: !1,
                    useLoadout: !0,
                    emoteSlot: p.Bottom
                },
                left: {
                    parent: s("#ui-emote-left"),
                    vA: f.create(-1, -1),
                    vC: f.create(-1, 1),
                    ping: g.None,
                    emote: d.SadFace,
                    modular: !1,
                    useLoadout: !0,
                    emoteSlot: p.Left
                }
            }, this.teamPingWheel = s("#ui-team-pings");
            var c = {
                middle: {
                    parent: s("#ui-team-ping-middle"),
                    vA: f.create(-1, 1),
                    vC: f.create(1, 1),
                    ping: g.None,
                    emote: d.None,
                    modular: !1,
                    displayCloseIcon: !0
                },
                top: {
                    parent: s("#ui-team-ping-top"),
                    vA: f.create(-1, 1),
                    vC: f.create(1, 1),
                    ping: g.Danger,
                    emote: d.None,
                    modular: !1
                },
                right: {
                    parent: s("#ui-team-ping-right"),
                    vA: f.create(1, 1),
                    vC: f.create(1, -1),
                    ping: g.Coming,
                    emote: d.None,
                    modular: !1
                },
                bottom: {
                    parent: s("#ui-team-ping-bottom"),
                    vA: f.create(1, -1),
                    vC: f.create(-1, -1),
                    ping: g.Help,
                    emote: d.None,
                    modular: !1
                },
                "bottom-left": {
                    parent: s("#ui-team-ping-bottom-left"),
                    vA: f.create(-1, -1),
                    vC: f.create(-1, 0),
                    ping: g.None,
                    emote: d.Medical,
                    modular: !1
                },
                "top-left": {
                    parent: s("#ui-team-ping-top-left"),
                    vA: f.create(-1, 0),
                    vC: f.create(-1, 1),
                    ping: g.None,
                    emote: d.Ammo,
                    modular: !0
                }
            };
            this.teamPingSelectors = [];
            for (var m in c)
                if (c.hasOwnProperty(m)) {
                    var u = c[m],
                        x = u.ping != g.None ? y[u.ping] : h[u.emote],
                        _ = r(u.vA),
                        z = r(u.vC),
                        M = x.texture;
                    x.displayCloseIcon && (M = "close.img"), this.teamPingSelectors.push({
                        parent: u.parent,
                        angleA: _,
                        angleC: z,
                        highlight: u.parent.find(".ui-emote-hl"),
                        highlightDisplayed: !1,
                        texture: M,
                        ping: u.ping,
                        emote: u.emote,
                        modular: u.modular
                    })
                }
            this.displayedSelectors = this.teamPingSelectors, this.baseScale = 1, this.container = new w.Container, this.container.scale = new w.Point(this.baseScale, this.baseScale), this.pingContainer = new w.Container, this.container.addChild(this.pingContainer), this.indContainer = new w.Container;
            var T = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16777215,
                    a = new w.Container,
                    i = new w.Container,
                    r = l.groupColors[e] || t,
                    o = w.Sprite.fromImage("ping-border.img");
                o.scale = new w.Point(.4, .4), o.anchor = new w.Point(.5, .5), o.tint = r, o.alpha = 0, o.visible = !0, a.addChild(o);
                var n = w.Sprite.fromImage("ping-team-danger.img");
                n.scale = new w.Point(.4, .4), n.anchor = new w.Point(.5, .5), n.tint = r, n.alpha = 0, n.visible = !0, a.addChild(n);
                var c = w.Sprite.fromImage("ping-team-danger.img");
                c.scale = new w.Point(.5, .5), c.anchor = new w.Point(.5, .5), c.tint = r, c.alpha = 0, c.visible = !0, i.addChild(c);
                var m = w.Sprite.fromImage("ping-indicator.img");
                return m.scale = new w.Point(.5, .5), m.anchor = new w.Point(.5, 0), m.alpha = 0, m.visible = !0, i.addChild(m), {
                    elem: s("#ui-team-indicators").find(".ui-indicator-ping[data-id=" + e + "]"),
                    borderElem: s("#ui-team-indicators").find(".ui-indicator-ping-border[data-id=" + e + "]"),
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
                        sprite: c,
                        baseScale: .5,
                        baseTint: c.tint
                    },
                    displayed: !1,
                    fadeIn: 0,
                    life: 0,
                    fadeOut: 0,
                    pos: f.create(0, 0)
                }
            };
            this.pingIndicators = [];
            for (var P = 0; P < 4; P++) {
                var I = T(P);
                this.pingContainer.addChild(I.pingContainer), this.indContainer.addChild(I.indContainer), this.pingIndicators.push({
                    ping: I
                })
            }
            this.airdropIndicator = T(k, y[g.Airdrop].tint), this.pingContainer.addChild(this.airdropIndicator.pingContainer), this.indContainer.addChild(this.airdropIndicator.indContainer), this.pingIndicators.push({
                ping: this.airdropIndicator
            }), this.airstrikeIndicator = T(v, y[g.Airstrike].tint), this.pingContainer.addChild(this.airstrikeIndicator.pingContainer), this.indContainer.addChild(this.airstrikeIndicator.indContainer), this.pingIndicators.push({
                ping: this.airstrikeIndicator
            }), this.emoteLifeIn = .75, this.emoteLife = 1, this.emoteLifeOut = .1, this.pingFadeIn = .5, this.pingLife = 4.25, this.pingFadeOut = .1, this.wedgeOpacityReset = S.touch ? 1 : .75, this.teamEmoteOpacityReset = .2, this.emotes = [], this.newPings = [], this.newEmotes = []
        }
        var s = a("8ee62bea"),
            l = a("989ad62a"),
            c = l.Input,
            m = a("b78cf179"),
            p = m.EmoteSlot,
            d = m.EmoteType,
            h = m.EmoteData,
            u = a("b198b546"),
            g = u.PingType,
            y = u.PingData,
            w = a("8b1dfb45"),
            x = a("34e32c48"),
            f = a("c2a798c8"),
            b = a("10899aea"),
            _ = a("1901e2d9"),
            S = a("ce29f17f"),
            k = (a("119e8c4c"), a("4b8d140f"), 4),
            v = 5;
        n.prototype = {
            n: function() {
                S.touch && (s(document).off("touchstart"), this.emoteButtonElem.off("touchstart"), this.emoteElems.off("touchstart"), this.bigmapCollision.off("touchend")), this.o()
            },
            o: function() {
                this.emoteWheelsGreyed = !1, this.emoteWheels.css("opacity", 1), this.teamEmotesGreyed = !1, this.teamEmotes.css("opacity", 1), this.disable = !1, this.inputReset()
            },
            hasCustomEmotes: function() {
                for (var e = 0, t = Object.keys(this.emoteWheelData), a = 0; a < t.length; a++) {
                    var i = t[a];
                    (this.emoteWheelData[i].emoteSlot > 0 || this.emoteWheelData[i].useLoadout) && e++
                }
                return e > 0
            },
            inputReset: function() {
                this.pingMouseTriggered = !1, this.ga = !1, this.emoteMouseTriggered = !1, this.wheelDisplayed = !1, this.displayWheel(this.teamPingWheel, !1), this.displayWheel(this.emoteWheel, !1), this.emoteTouchedPos = null, this.bigmapPingPos = null, this.emoteTimeoutTicker = 0;
                for (var e = 0; e < this.displayedSelectors.length; e++) {
                    var t = this.displayedSelectors[e],
                        a = h[t.emote];
                    this.teamEmotesGreyed && a.teamOnly ? t.parent.css("opacity", this.teamEmoteOpacityReset) : t.parent.css("opacity", this.wedgeOpacityReset), t.highlight.css("display", "none"), t.highlightDisplayed = !1
                }
            },
            sendPing: function(e) {
                var t = {};
                t.type = e.type, t.pos = e.pos, this.newPings.push(t), this.incrementEmote()
            },
            addPing: function(e, t) {
                if (this.Et) {
                    var a = y[e.type];
                    if (a) {
                        this.uiManager.createPing(e.type, e.pos, e.playerId, this.Et.__id, this.playerBarn, t);
                        var i = null,
                            r = a.sound;
                        if (e.type == g.Airdrop) i = this.pingIndicators[k].ping;
                        else if (e.type == g.Airstrike) i = this.pingIndicators[v].ping;
                        else {
                            var o = this.playerBarn.ne(e.playerId);
                            if (o) {
                                var n = this.playerBarn.ne(this.Et.__id).groupId,
                                    s = o.groupId;
                                if (n == s) {
                                    var l = this.playerBarn.getGroupInfo(s),
                                        c = l.playerIds.indexOf(e.playerId); - 1 !== c && (i = this.pingIndicators[c].ping)
                                }
                            }
                            var m = this.playerBarn.se(e.playerId);
                            m && m.factionLeader && (r = a.soundLeader)
                        }
                        t || e.type != g.Airstrike ? this.audioManager.playSound(r, {
                            channel: "ui"
                        }) : this.audioManager.playSound(r, {
                            channel: "ui",
                            fallOff: 1,
                            soundPos: e.pos,
                            rangeMult: 20
                        }), i && (i.pos = e.pos, i.pingSprite.sprite.texture = w.Texture.fromImage(a.texture), i.indSpriteInner.sprite.texture = w.Texture.fromImage(a.texture), i.indSpriteInner.sprite.tint = a.mapEvent ? a.tint : i.indSpriteInner.baseTint, i.indSpriteOuter.sprite.tint = a.mapEvent ? a.tint : i.indSpriteOuter.baseTint, i.fadeIn = this.pingFadeIn, i.life = this.pingLife, i.fadeOut = this.pingFadeOut, i.mapEvent = a.mapEvent, i.worldDisplay = a.worldDisplay)
                    }
                }
            },
            sendEmote: function(e) {
                var t = {};
                t.useLoadout = e.useLoadout, t.type = e.useLoadout ? e.emoteSlot : e.type, t.pos = e.pos, this.newEmotes.push(t), this.incrementEmote()
            },
            addEmote: function(e) {
                var t = h[e.type];
                if (t) {
                    for (var a = null, i = 0; i < this.emotes.length; i++) this.emotes[i].alive || a ? this.emotes[i].alive && this.emotes[i].playerId == e.playerId && (this.emotes[i].alive = !1) : a = this.emotes[i];
                    if (a || (a = {}, a.alive = !1, a.pos = f.create(0, 0), a.container = new w.Container, a.circleOuter = new w.Sprite.fromImage("emote-circle-outer.img"), a.circleOuter.anchor = new w.Point(.5, .5), a.baseScale = .55, a.circleOuter.scale = new w.Point(.8 * a.baseScale, .8 * a.baseScale), a.circleOuter.tint = 0, a.circleOuter.visible = !0, a.container.addChild(a.circleOuter), a.sprite = new w.Sprite, a.sprite.anchor = new w.Point(.5, .5), a.container.addChild(a.sprite), a.sprite.scale = new w.Point(a.baseScale, a.baseScale), a.posOffset = new w.Point(0, 4), a.container.scale = new w.Point(1, 1), a.container.visible = !1, this.emotes.push(a)), a.alive = !0, a.isNew = !0, a.type = e.type, a.playerId = e.playerId, a.pos = f.create(0, 0), a.lifeIn = this.emoteLifeIn, a.life = this.emoteLife, a.lifeOut = this.emoteLifeOut, a.zIdx = this.zIdxNext++, a.sprite.texture = w.Texture.fromImage(t.texture), a.container.visible = !1, a.baseScale = .55, a.sound = t.sound, e.type == d.Loot) {
                        var r = l.items[e.itemType];
                        if (r) {
                            a.sprite.texture = w.Texture.fromImage(r.lootImg.sprite);
                            var o = l.items[r.ammo];
                            a.circleOuter.tint = o ? o.lootImg.tintDark : 0, r.lootImg.rot ? a.sprite.rotation = r.lootImg.rot : a.sprite.rotation = 0, r.lootImg.mirror ? a.sprite.scale = new w.Point(-1 * a.baseScale, a.baseScale) : a.sprite.scale = new w.Point(a.baseScale, a.baseScale), r.sound && r.sound.deploy && (a.sound = r.sound.deploy)
                        }
                    } else a.circleOuter.tint = 0, a.sprite.rotation = 0, a.sprite.scale = new w.Point(a.baseScale, a.baseScale)
                }
            },
            incrementEmote: function() {
                ++this.emoteCounter >= l.player.emoteThreshold && (this.emoteHardTicker = this.emoteHardTicker > 0 ? this.emoteHardTicker : 1.5 * l.player.emoteHardCooldown)
            },
            c: function(e, t, a, n, s, m, p, u, y) {
                var w = this.playerBarn,
                    k = this.camera,
                    v = f.create(p.de.x, p.de.y);
                if (p.lostFocus && this.inputReset(), u.isBindPressed(c.TeamPingMenu) && (this.pingKeyDown || y || (this.pingKeyDown = !0, this.ga = !0)), u.isBindReleased(c.TeamPingMenu) && this.pingKeyDown && (this.pingKeyDown = !1, this.ga = this.wheelDisplayed), u.isBindPressed(c.TeamPingSingle) && (this.pingMouseTriggered || this.emoteMouseTriggered || (this.emoteScreenPos = f.copy(v), this.pingMouseTriggered = !0)), u.isBindReleased(c.TeamPingSingle) && this.pingMouseTriggered && this.triggerPing(), u.isBindPressed(c.EmoteMenu) && (this.pingMouseTriggered || this.emoteMouseTriggered || !this.pingKeyDown || (this.emoteScreenPos = f.copy(v), this.pingMouseTriggered = !0), this.pingMouseTriggered || (this.emoteScreenPos = f.copy(v), this.emoteMouseTriggered = !0)), u.isBindReleased(c.EmoteMenu) && (this.ga && this.pingMouseTriggered && this.triggerPing(), this.emoteMouseTriggered && this.triggerEmote()), this.Et = a, t == a.__id && !a.ie.dead || this.disable || (this.n(), this.disable = !0), !this.disable) {
                    var z = a.re.weapons[a.re.curWeapIdx],
                        M = l.items[z.name],
                        T = "";
                    if (M && (T = M.ammo ? M.ammo : T), this.wheelKeyTriggered = this.ga || this.emoteMouseTriggered, this.emoteSoftTicker -= e, this.emoteCounter >= l.player.emoteThreshold && this.emoteHardTicker > 0 ? (this.emoteHardTicker -= e, this.emoteHardTicker < 0 && (this.emoteCounter = 0)) : this.emoteSoftTicker < 0 && this.emoteCounter > 0 && (this.emoteCounter--, this.emoteSoftTicker = 1.5 * l.player.emoteSoftCooldown), !this.pingMouseTriggered && !this.emoteMouseTriggered || this.wheelDisplayed || (this.parentDisplayed = this.pingMouseTriggered ? this.teamPingWheel : this.emoteWheel, this.parentDisplayed.css({
                            display: "block",
                            left: this.emoteScreenPos.x,
                            top: this.emoteScreenPos.y
                        }), this.displayWheel(this.parentDisplayed, !0), this.wheelDisplayed = !0, this.displayedSelectors = this.pingMouseTriggered ? this.teamPingSelectors : this.emoteWheelSelectors, this.worldPos = k.O(this.emoteScreenPos)), this.wheelDisplayed)
                        if (this.emoteTimeoutTicker += e, this.emoteTimeoutTicker > 10) this.inputReset();
                        else {
                            this.emoteHardTicker > 0 && !this.emoteWheelsGreyed ? (this.emoteWheels.css("opacity", .5), this.emoteWheelsGreyed = !0) : this.emoteHardTicker <= 0 && this.emoteWheelsGreyed && (this.emoteWheels.css("opacity", 1), this.emoteWheelsGreyed = !1), this.teamEmotesGreyed || 1 != n || (this.teamEmotes.css("opacity", this.teamEmoteOpacityReset), this.teamEmotesGreyed = !0);
                            var P = null;
                            if (g.None, S.touch && (v = this.emoteTouchedPos), v) {
                                var I = f.sub(v, this.emoteScreenPos);
                                I.y *= -1;
                                for (var C = f.length(I), A = r(I), E = 0; E < this.displayedSelectors.length; E++) {
                                    var D = this.displayedSelectors[E];
                                    if (D.modular) {
                                        var O = D.emote;
                                        switch (T) {
                                            case "9mm":
                                                D.emote = d.Ammo9mm, D.texture = h[d.Ammo9mm].texture;
                                                break;
                                            case "12gauge":
                                                D.emote = d.Ammo12Gauge, D.texture = h[d.Ammo12Gauge].texture;
                                                break;
                                            case "762mm":
                                                D.emote = d.Ammo762mm, D.texture = h[d.Ammo762mm].texture;
                                                break;
                                            case "556mm":
                                                D.emote = d.Ammo556mm, D.texture = h[d.Ammo556mm].texture;
                                                break;
                                            case "50AE":
                                                D.emote = d.Ammo50AE, D.texture = h[d.Ammo50AE].texture;
                                                break;
                                            case "308sub":
                                                D.emote = d.Ammo308sub, D.texture = h[d.Ammo308sub].texture;
                                                break;
                                            case "flare":
                                                D.emote = d.AmmoFlare, D.texture = h[d.AmmoFlare].texture;
                                                break;
                                            case "45acp":
                                                D.emote = d.Ammo45acp, D.texture = h[d.Ammo45acp].texture;
                                                break;
                                            default:
                                                D.emote = d.Ammo, D.texture = h[d.Ammo].texture
                                        }
                                        if (O != D.emote) {
                                            var B = D.parent.find(".ui-emote-image"),
                                                L = i(D.texture);
                                            B.css("background-image", "url(" + L + ")")
                                        }
                                    }
                                    var R = D.ping != g.None || D.emote != d.None,
                                        F = h[D.emote],
                                        j = F.teamOnly && 1 == n;
                                    C <= 35 && !R && this.emoteHardTicker <= 0 && !j ? P = D : o(A, D.angleC, D.angleA) && C > 35 && R && this.emoteHardTicker <= 0 && !j ? P = D : D.highlightDisplayed && (D.parent.css("opacity", this.wedgeOpacityReset), D.highlight.css("display", "none"), D.highlightDisplayed = !1)
                                }
                            }
                            P && (this.emoteSelector = P, P.highlightDisplayed || (P.parent.css("opacity", 1), P.highlight.css("display", "block"), P.highlightDisplayed = !0), S.touch && this.emoteTouchedPos && (this.pingMouseTriggered ? this.triggerPing() : this.triggerEmote()))
                        }
                }
                for (var q = 0; q < this.emotes.length; q++) {
                    var N = this.emotes[q];
                    if (N.alive) {
                        var V = !1,
                            G = f.create(0, 0),
                            U = 0,
                            H = w.ve(N.playerId);
                        if (H && !H.ie.dead && (G = f.copy(H.pos), U = H.layer, V = !0), !V) {
                            var W = s.getDeadBodyById(N.playerId);
                            W && (G = f.copy(W.pos), U = W.layer, V = !0)
                        }
                        if (V) {
                            if (N.isNew) {
                                var K = h[N.type];
                                this.audioManager.playSound(N.sound, {
                                    channel: K.channel,
                                    soundPos: G,
                                    layer: U
                                })
                            }
                            N.isNew = !1, N.pos = G, N.lifeIn > 0 ? N.lifeIn -= e : N.life > 0 ? N.life -= e : N.lifeOut > 0 && (N.lifeOut -= e);
                            var Z = _.sameLayer(U, this.Et.layer) ? 3 : U;
                            m.addPIXIObj(N.container, Z, 5e4, N.zIdx), N.alive = N.alive && N.lifeOut > 0
                        } else N.alive = !1
                    }
                }
                for (var X = f.create(.5 * k.screenWidth / k.z(), .5 * k.screenHeight / k.z()), Y = {
                        min: f.sub(k.pos, X),
                        max: f.add(k.pos, X)
                    }, J = w.ne(a.__id).groupId, Q = w.getGroupInfo(J), $ = (Q.playerIds.length, 0); $ < this.pingIndicators.length; $++) {
                    var ee = this.pingIndicators[$].ping,
                        te = Q.playerIds[$],
                        ae = ee.pingContainer,
                        ie = ee.indContainer;
                    if (void 0 != te || ee.mapEvent) {
                        var re = (w.ne(te), te == this.Et.__id),
                            oe = w.se(te),
                            ne = ee.borderSprite.sprite,
                            se = ee.pingSprite.sprite,
                            le = ee.indSpriteOuter.sprite,
                            ce = ee.indSpriteInner.sprite,
                            me = !0;
                        if (ee.fadeIn -= e, ee.life -= e, ee.fadeOut -= ee.life > 0 ? 0 : e, ee.fadeOut > 0) {
                            var pe = ee.pos,
                                de = f.normalizeSafe(f.sub(pe, k.pos), f.create(1, 0)),
                                he = x.intersectRayAabb(k.pos, de, Y.min, Y.max),
                                ue = Math.atan2(de.y, -de.x) + .5 * Math.PI,
                                ge = k.pointToScreen(he),
                                ye = x.testCircleAabb(pe, l.player.radius, Y.min, Y.max),
                                we = k.pixels(ee.borderSprite.baseScale),
                                xe = k.pixels(ee.pingSprite.baseScale);
                            if (ne.scale.set(we, we), se.scale.set(xe, xe), oe && oe.dead) continue;
                            me = ee.fadeOut < 0;
                            var fe = ye ? k.pointToScreen(pe).x : b.clamp(ge.x, 64, k.screenWidth - 64),
                                be = ye ? k.pointToScreen(pe).y : b.clamp(ge.y, 64, k.screenHeight - 64),
                                _e = k.pointToScreen(pe).x,
                                Se = k.pointToScreen(pe).y;
                            se.position.x = _e, se.position.y = Se, ne.position.x = _e, ne.position.y = Se, le.position.x = fe, le.position.y = be, le.rotation = ue, ce.position.x = fe, ce.position.y = be;
                            var ke = ne.alpha <= 0 ? 1 : ne.alpha - e;
                            ne.alpha = ke;
                            var ve = k.pixels(ee.borderSprite.baseScale * (2 - ke));
                            if (ne.scale.set(ve, ve), ce.alpha = ye ? 0 : ke, ee.fadeIn > 0) {
                                var ze = 1 - ee.fadeIn / this.pingFadeIn;
                                ae.alpha = 1, ie.alpha = 1, se.alpha = 1, le.alpha = ye ? 0 : ze
                            } else le.alpha = ye ? 0 : 1;
                            if (ee.life < 0) {
                                var Me = ee.fadeOut / this.pingFadeOut;
                                ae.alpha = Me, ie.alpha = Me
                            }
                            ee.displayed || (ae.visible = ee.worldDisplay, ie.visible = !re || ee.mapEvent, ee.displayed = !0)
                        }
                        me && ee.displayed && (ae.visible = !1, ie.visible = !1, ee.displayed = !1)
                    } else ae.visible = !1, ie.visible = !1, ee.displayed = !1
                }
            },
            displayWheel: function(e, t) {
                e.css("display", t ? "block" : "none")
            },
            updateEmoteWheel: function(e) {
                var t = {
                    top: e[p.Top],
                    right: e[p.Right],
                    bottom: e[p.Bottom],
                    left: e[p.Left]
                };
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var o = h[t[a]];
                        if (this.emoteWheelData[a] && void 0 != o) {
                            var n = h[t[a]];
                            n.teamOnly || (this.emoteWheelData[a].emote = t[a])
                        }
                    }
                this.emoteWheelSelectors = [];
                for (var s in this.emoteWheelData)
                    if (this.emoteWheelData.hasOwnProperty(s)) {
                        var l = this.emoteWheelData[s],
                            c = h[l.emote],
                            m = r(l.vA),
                            d = r(l.vC),
                            u = c.texture;
                        l.displayCloseIcon && (u = "close.img"), this.emoteWheelSelectors.push(Object.assign({}, {
                            angleA: m,
                            angleC: d,
                            highlight: l.parent.find(".ui-emote-hl"),
                            highlightDisplayed: !1,
                            texture: u
                        }, l));
                        var g = l.parent.find(".ui-emote-image"),
                            y = i(u);
                        g.css("background-image", "url(" + y + ")")
                    }
            },
            render: function(e) {
                for (var t = 0; t < this.emotes.length; t++) {
                    var a = this.emotes[t];
                    if (a.container.visible = a.alive, a.alive) {
                        var i = 0;
                        if (a.lifeIn > 0) {
                            var r = 1 - a.lifeIn / this.emoteLifeIn;
                            i = b.easeOutElastic(r)
                        } else if (a.life > 0) i = 1;
                        else if (a.lifeOut > 0) {
                            var o = a.lifeOut / this.emoteLifeOut;
                            i = o
                        }
                        var n = f.add(a.pos, f.mul(a.posOffset, 1 / b.clamp(e.k, .75, 1))),
                            s = e.pointToScreen(n),
                            l = i * a.baseScale * b.clamp(e.k, .9, 1.75);
                        a.container.position.set(s.x, s.y), a.container.scale.set(l, l)
                    }
                }
            }
        }, e.exports = {
            kt: n
        }
    },
