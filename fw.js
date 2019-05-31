    fc6a992a: function(e, t, a) {
        "use strict";

        function i() {
            this.active = !1, this.sprite = new n.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1
        }

        function r(e) {
            this.active = !1, this.pos = p.create(0, 0), this.rad = 0, this.duration = 0, this.ticker = 0, this.gfx = new n.Graphics, e.addChild(this.gfx)
        }

        function o(e) {
            this.ga = [], this.ya = [], this.airstrikeZoneContainer = new n.Container, this.audioManager = e
        }
        var n = a("8b1dfb45"),
            s = a("6b42806d"),
            l = a("989ad62a"),
            c = a("10899aea"),
            m = a("1901e2d9"),
            p = a("c2a798c8");
        a("af8ba00f"), i.prototype = {
            o: function(e, t) {
                switch (this.id = e.id, this.pos = p.copy(e.pos), this.planeDir = p.copy(e.planeDir), this.actionComplete = e.actionComplete, this.active = !0, this.dirty = !1, this.soundInstance = null, this.soundUpdateThrottle = 0, this.alpha = .75, this.renderAlpha = 1, this.spriteUpdateTime = 0, this.type = e.action, this.config = this.type == l.Plane.Airdrop ? l.airdrop : l.airstrike, this.rad = this.config.planeRad, this.type) {
                    case l.Plane.Airdrop:
                        this.sprite.texture = n.Texture.fromImage(t.getMapDef().biome.airdrop.planeImg), this.planeSound = t.getMapDef().biome.airdrop.planeSound;
                        break;
                    case l.Plane.Airstrike:
                        this.sprite.texture = n.Texture.fromImage("map-plane-02.img"), this.planeSound = "fighter_01"
                }
                this.sprite.visible = !0, this.sprite.rotation = Math.atan2(this.planeDir.x, this.planeDir.y)
            },
            n: function(e) {
                this.spriteUpdateTime < 2 || (this.soundInstance && (e.stopSound(this.soundInstance), this.soundInstance = null), this.sprite.visible = !1, this.active = !1)
            }
        }, r.prototype = {
            o: function(e, t, a) {
                this.active = !0, this.pos = p.copy(e), this.rad = t, this.duration = a, this.ticker = 0, this.renderPos = p.create(0, 0), this.renderRad = 0, this.gfx.visible = !0
            },
            c: function(e, t, a) {
                this.ticker += e, this.gfx.visible = !0, this.ticker >= this.duration && (this.gfx.visible = !1, this.active = !1)
            },
            Ft: function(e, t, a) {
                var i = e.getMapPosFromWorldPos(this.pos, t),
                    r = e.getMapPosFromWorldPos(p.add(this.pos, p.create(this.rad, 0)), t),
                    o = p.length(p.sub(r, i)),
                    n = !p.eq(this.renderPos, i, 1e-4),
                    s = !c.eqAbs(this.renderRad, o, 1e-4);
                n && (this.renderPos = p.copy(i)), s && (this.renderRad = o), n && this.gfx.position.set(this.renderPos.x, this.renderPos.y), s && (this.gfx.clear(), this.gfx.lineStyle(1.5, 15400704), this.gfx.beginFill(15400704, .2), this.gfx.drawCircle(0, 0, this.renderRad), this.gfx.endFill());
                var l = c.smoothstep(this.ticker, 0, .5) * (1 - c.smoothstep(this.ticker, this.duration - .5, this.duration));
                this.gfx.alpha = l
            }
        }, o.prototype = {
            n: function() {
                for (var e = 0; e < this.ga.length; e++) this.ga[e].n(this.audioManager)
            },
            Wt: function(e, t) {
                for (var a = 0; a < this.ga.length; a++) this.ga[a].dirty = !0;
                for (var i = 0; i < e.length; i++) {
                    for (var r = e[i], o = null, n = 0; n < this.ga.length; n++) {
                        var s = this.ga[n];
                        if (s.active && s.id == r.id) {
                            o = s;
                            break
                        }
                    }
                    o || (o = this.wa(r, t)), o.dirty = !1, o.actionComplete = r.actionComplete
                }
                for (var l = 0; l < this.ga.length; l++) {
                    var c = this.ga[l];
                    c.active && c.dirty && c.n(this.audioManager)
                }
            },
            wa: function(e, t) {
                for (var a = null, r = 0; r < this.ga.length; r++)
                    if (!this.ga[r].active) {
                        a = this.ga[r];
                        break
                    }
                return a || (a = new i, this.ga.push(a)), a.o(e, t), a
            },
            Kt: function(e) {
                for (var t = null, a = 0; a < this.ya.length; a++)
                    if (!this.ya[a]) {
                        t = this.ya[a];
                        break
                    }
                return t || (t = new r(this.airstrikeZoneContainer), this.ya.push(t)), t.o(e.pos, e.rad, e.duration), t
            },
            c: function(e, t, a, i, r) {
                for (var o = 0; o < this.ga.length; o++) {
                    var n = this.ga[o];
                    if (n.active) {
                        var d = 0;
                        if (!(m.sameLayer(d, a.layer) || 2 & a.layer) || 2 & a.layer && i.insideStructureMask(s.createCircle(n.pos, 1)) || (d |= 2), n.pos = p.add(n.pos, p.mul(n.planeDir, e * n.config.planeVel)), n.actionComplete && (n.spriteUpdateTime = Math.min(n.spriteUpdateTime + e, 2), n.spriteUpdateTime, n.rad = c.lerp(n.spriteUpdateTime, n.config.planeRad, 1.25 * n.config.planeRad), n.alpha = c.lerp(n.spriteUpdateTime, .75, .5625), n.soundRangeMult = c.max(0, c.lerp(n.spriteUpdateTime, n.config.soundRangeMult, n.config.soundRangeMult - n.config.soundRangeDelta))), n.soundInstance) n.soundUpdateThrottle < 0 ? (this.audioManager.updateSound(n.soundInstance, "sfx", n.pos, {
                            layer: d,
                            rangeMult: n.config.soundRangeMult,
                            muffled: !1,
                            ignoreMinAllowable: !0,
                            fallOff: n.config.fallOff
                        }), n.soundUpdateThrottle = .1) : n.soundUpdateThrottle -= e;
                        else {
                            var h = p.length(p.sub(a.pos, n.pos)),
                                u = n.config.soundRangeMax * n.config.soundRangeMult,
                                g = 0;
                            if (n.type == l.Plane.Airstrike) {
                                var y = c.max(150, h);
                                g = 2.25 * (1 - c.clamp(c.max(0, y) / 800, 0, 1))
                            }
                            h < u && (n.soundInstance = this.audioManager.playSound(n.planeSound, {
                                channel: "sfx",
                                soundPos: n.pos,
                                layer: d,
                                loop: !0,
                                rangeMult: 2.5,
                                muffled: !1,
                                ignoreMinAllowable: !0,
                                fallOff: n.config.fallOff,
                                offset: g
                            }))
                        }
                        r.addPIXIObj(n.sprite, d, 1501, n.id);
                        var w = t.pointToScreen(n.pos),
                            x = t.pixels(n.rad / t.ppu),
                            f = n.alpha;
                        1 == a.layer ? f = 0 : (a.ie.scopedIn || 1 & a.layer) && (f = .15), n.renderAlpha = c.lerp(3 * e, n.renderAlpha, f), n.sprite.position.set(w.x, w.y), n.sprite.scale.set(x, x), n.sprite.tint = 16776960, n.sprite.alpha = n.renderAlpha, n.sprite.visible = !0
                    }
                }
                for (var b = 0; b < this.ya.length; b++) {
                    var _ = this.ya[b];
                    _.active && _.c(e)
                }
            },
            renderAirstrikeZones: function(e, t, a) {
                for (var i = 0; i < this.ya.length; i++) {
                    var r = this.ya[i];
                    r.active && r.Ft(e, t, a)
                }
            }
        }, e.exports = {
            ct: o
        }
    },
