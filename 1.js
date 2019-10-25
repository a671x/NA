    "33375c30": function(e, t, a) {
        "use strict";

        function r(e, t, a) {
            var r = t - e,
                i = r * a;
            return Math.abs(i) < .001 ? r : i
        }

        function i() {
            this.sprites = [], this.particleEmitters = [], this.soundEmitters = []
        }
        var o = (a("0e566746"), a("8b1dfb45")),
            s = a("6b42806d"),
            n = a("10899aea"),
            l = a("7510cc08"),
            c = a("1901e2d9"),
            m = a("c2a798c8"),
            p = a("6d494b5c"),
            h = (a("c347b8dd"), a("af8ba00f"), a("03f4982a"));
        i.prototype = {
            o: function() {
                this.isNew = !1, this.residue = null, this.ceilingDead = !1, this.ceilingDamaged = !1, this.playedCeilingDeadFx = !1, this.playedSolvedPuzzleFx = !1, this.hasPuzzle = !1, this.puzzleErrSeqModified = !1, this.puzzleErrSeq = 0, this.puzzleSolved = !1, this.soundEmitterTicker = 0
            },
            n: function() {
                for (var e = 0; e < this.sprites.length; e++) {
                    var t = this.sprites[e];
                    t.active = !1, t.sprite.visible = !1, t.sprite.parent && t.sprite.parent.removeChild(t.sprite), t.sprite.removeChildren()
                }
                for (var a = 0; a < this.particleEmitters.length; a++) this.particleEmitters[a].stop();
                this.particleEmitters = [];
                for (var r = 0; r < this.soundEmitters.length; r++) this.soundEmitters[r].instance && this.soundEmitters[r].instance.stop();
                this.soundEmitters = []
            },
            allocSprite: function() {
                for (var e = 0; e < this.sprites.length; e++) {
                    var t = this.sprites[e];
                    if (!t.active) return t.active = !0, t.sprite
                }
                var a = new o.Sprite;
                return a.anchor.set(.5, .5), this.sprites.push({
                    active: !0,
                    sprite: a
                }), a
            },
            c: function(e, t, a, r) {
                var i = this;
                t && (this.type = e.type, this.pos = m.copy(e.pos), this.ori = e.ori, this.rot = n.oriToRad(e.ori), this.scale = 1, this.layer = e.layer), this.ceilingDead = e.ceilingDead, this.ceilingDamaged = e.ceilingDamaged, this.occupied = e.occupied, this.hasPuzzle = e.hasPuzzle, this.hasPuzzle && (this.puzzleErrSeqModified = e.puzzleErrSeq != this.puzzleErrSeq, this.puzzleSolved = e.puzzleSolved, this.puzzleErrSeq = e.puzzleErrSeq);
                var p = h[this.type];
                if (a) {
                    this.isNew = !0, this.playedCeilingDeadFx = void 0 !== p.ceiling.destroy && -1 != r.map.deadCeilingIds.indexOf(this.__id), this.playedSolvedPuzzleFx = this.hasPuzzle && -1 != r.map.solvedPuzzleIds.indexOf(this.__id);
                    var d = function(e) {
                        var t = e.pos || m.create(0, 0),
                            a = n.oriToRad(e.rot || 0),
                            s = i.allocSprite();
                        s.texture = o.Texture.fromImage(e.sprite), s.tint = e.tint;
                        var l = r.map.getMapDef().biome.valueAdjust;
                        return l < 1 && (s.tint = c.adjustValue(s.tint, l)), s.posOffset = m.rotate(t, i.rot), s.rotOffset = a, s.imgAlpha = e.alpha, s.alpha = s.imgAlpha, s.defScale = e.scale, s.mirrorY = !!e.mirrorY, s.visible = !0, s
                    };
                    this.bounds = s.transform(l.getBoundingCollider(this.type), this.pos, this.rot, this.scale), this.zIdx = p.zIdx || 0, this.surfaces = [];
                    for (var u = 0; u < p.floor.surfaces.length; u++) {
                        for (var g = p.floor.surfaces[u], y = {
                                type: g.type,
                                data: g.data || {},
                                colliders: []
                            }, w = 0; w < g.collision.length; w++) y.colliders.push(s.transform(g.collision[w], this.pos, this.rot, this.scale));
                        this.surfaces.push(y)
                    }
                    var f = Object.assign({}, {
                        dist: 5.5,
                        width: 2.75,
                        linger: 0,
                        fadeRate: 12
                    }, p.ceiling.vision);
                    this.ceiling = {
                        zoomRegions: [],
                        vision: f,
                        visionTicker: 0,
                        fadeAlpha: 1
                    };
                    for (var b = 0; b < p.ceiling.zoomRegions.length; b++) {
                        var _ = p.ceiling.zoomRegions[b];
                        this.ceiling.zoomRegions.push({
                            zoomIn: _.zoomIn ? s.transform(_.zoomIn, this.pos, this.rot, this.scale) : null,
                            zoomOut: _.zoomOut ? s.transform(_.zoomOut, this.pos, this.rot, this.scale) : null
                        })
                    }
                    this.imgs = [];
                    for (var x = 0; x < p.floor.imgs.length; x++) this.imgs.push({
                        sprite: d(p.floor.imgs[x]),
                        isCeiling: !1,
                        zOrd: this.zIdx,
                        zIdx: 100 * this.__id + x
                    });
                    for (var S = 0; S < p.ceiling.imgs.length; S++) {
                        var v = p.ceiling.imgs[S];
                        this.imgs.push({
                            sprite: d(v),
                            isCeiling: !0,
                            removeOnDamaged: !!v.removeOnDamaged,
                            zOrd: 750 - this.zIdx,
                            zIdx: 100 * this.__id + S
                        })
                    }
                    for (var z = p.occupiedEmitters || [], k = 0; k < z.length; k++) {
                        var I = z[k],
                            T = void 0 !== I.rot ? I.rot : 0,
                            M = this.rot + T,
                            P = m.add(this.pos, m.rotate(I.pos, M)),
                            C = I.dir || m.create(1, 0),
                            A = m.rotate(C, M),
                            O = I.scale,
                            E = null;
                        if (I.parentToCeiling) {
                            for (var D = -1, B = 0; B < this.imgs.length; B++) this.imgs[B].isCeiling && (D = B);
                            if (D >= 0) {
                                var R = this.imgs[D];
                                E = R.sprite, P = m.mul(I.pos, 32), P.y *= -1, A = m.rotate(m.create(1, 0), I.rot), O = 1 / R.sprite.defScale
                            }
                        }
                        var L = r.particleBarn.addEmitter(I.type, {
                            pos: P,
                            dir: A,
                            scale: O,
                            layer: I.layer,
                            parent: E
                        });
                        this.particleEmitters.push(L)
                    }
                    for (var q = p.soundEmitters || [], F = 0; F < q.length; F++) {
                        var j = q[F],
                            N = m.add(this.pos, m.rotate(j.pos, this.rot));
                        this.soundEmitters.push({
                            instance: null,
                            sound: j.sound,
                            channel: j.channel,
                            pos: N,
                            range: j.range,
                            falloff: j.falloff,
                            volume: j.volume
                        })
                    }
                }
            },
            m: function(e, t, a, i, s, l, d, u) {
                if (this.hasPuzzle) {
                    var g = h[this.type];
                    if (this.puzzleErrSeqModified && (this.puzzleErrSeqModified = !1, !this.isNew)) {
                        for (var y = this, w = m.length(m.sub(l.pos, y.pos)), f = t.ye.p(), b = 0; b < f.length; b++) {
                            var _ = f[b];
                            if (_.active && _.isPuzzlePiece && _.parentBuildingId == this.__id) {
                                var x = m.length(m.sub(l.pos, _.pos));
                                x < w && (y = _, w = x)
                            }
                        }
                        i.playSound(g.puzzle.sound.fail, {
                            channel: "sfx",
                            soundPos: y.pos,
                            layer: y.layer,
                            filter: "muffled"
                        })
                    }
                    this.puzzleSolved && !this.playedSolvedPuzzleFx && (t.solvedPuzzleIds.push(this.__id), this.playedSolvedPuzzleFx = !0, this.isNew || "none" == g.puzzle.sound.complete || i.playSound(g.puzzle.sound.complete, {
                        channel: "sfx",
                        soundPos: this.pos,
                        layer: this.layer,
                        filter: "muffled"
                    }))
                }
                if (this.ceilingDead && !this.playedCeilingDeadFx && (t.deadCeilingIds.push(this.__id), this.playedCeilingDeadFx = !0, this.isNew || this.destroyCeilingFx(a, i)), this.isNew = !1, this.ceilingDead && !this.residue) {
                    var S = h[this.type];
                    if (void 0 !== S.ceiling.destroy) {
                        var v = this.allocSprite();
                        v.texture = o.Texture.fromImage(S.ceiling.destroy.residue), v.position.set(0, 0), v.scale.set(1, 1), v.rotation = 0, v.tint = 16777215, v.visible = !0, this.imgs[0].sprite.addChild(v), this.residue = v
                    }
                }
                this.ceiling.visionTicker -= e;
                for (var z = this.ceiling.vision, k = !1, I = 0; I < this.ceiling.zoomRegions.length; I++) {
                    var T = this.ceiling.zoomRegions[I].zoomIn;
                    if (T && (this.layer == l.layer || 2 & l.layer) && p.scanCollider(T, t.ye.p(), l.pos, l.layer, .5, 2 * z.width, z.dist, 5)) {
                        k = !0;
                        break
                    }
                }
                this.ceilingDead && (k = !0), k && (this.ceiling.visionTicker = z.linger + 1e-4), l.noCeilingRevealTicker > 0 && !this.ceilingDead && (this.ceiling.visionTicker = 0);
                var M = this.ceiling.visionTicker > 0,
                    P = r(this.ceiling.fadeAlpha, M ? 0 : 1, e * (M ? 12 : z.fadeRate));
                this.ceiling.fadeAlpha += P, k && l.noCeilingRevealTicker <= 0 && 2 & l.layer && !c.sameLayer(l.layer, this.layer) && (this.ceiling.fadeAlpha = 0);
                for (var C = 0; C < this.particleEmitters.length; C++) this.particleEmitters[C].enabled = this.occupied;
                if (this.soundEmitterTicker += e, this.soundEmitterTicker > .1) {
                    this.soundEmitterTicker = 0;
                    for (var A = 0; A < this.soundEmitters.length; A++) {
                        var O = this.soundEmitters[A];
                        if (!O.instance && i.isSoundLoaded(O.sound, O.channel) && (O.instance = i.playSound(O.sound, {
                                channel: O.channel,
                                loop: !0,
                                forceStart: !0,
                                startSilent: !0
                            })), O.instance) {
                            var E = m.sub(u.pos, O.pos),
                                D = m.length(E),
                                B = n.remap(D, O.range.min, O.range.max, 1, 0),
                                R = Math.pow(B, O.falloff),
                                L = n.lerp(this.ceiling.fadeAlpha, 1, .25),
                                q = i.baseVolume * i.getTypeVolume("sound") * O.volume * R * L;
                            c.sameAudioLayer(this.layer, l.layer) || (q = 0), q < .003 && (q = 0), O.instance.volume = q
                        }
                    }
                }
                for (var F = 0; F < this.imgs.length; F++) {
                    var j = this.imgs[F],
                        N = j.isCeiling ? this.ceiling.fadeAlpha : 1;
                    this.positionSprite(j.sprite, N, u), j.removeOnDamaged && this.ceilingDamaged && (j.sprite.visible = !this.ceilingDamaged);
                    var H = this.layer;
                    j.isCeiling && (this.layer == l.layer || 2 & l.layer && 1 == this.layer) && (H |= 2), d.addPIXIObj(j.sprite, H, j.zOrd, j.zIdx)
                }
            },
            isInsideCeiling: function(e) {
                for (var t = 0; t < this.ceiling.zoomRegions.length; t++) {
                    var a = this.ceiling.zoomRegions[t].zoomIn;
                    if (a && s.intersect(a, e)) return !0
                }
                return !1
            },
            getDistanceToBuilding: function(e, t) {
                for (var a = t, r = 0; r < this.ceiling.zoomRegions.length; r++) {
                    var i = this.ceiling.zoomRegions[r].zoomIn;
                    if (i) {
                        var o = s.intersectCircle(i, e, t);
                        o && (a = n.clamp(t - o.pen, 0, a))
                    }
                }
                return a
            },
            destroyCeilingFx: function(e, t) {
                for (var a = h[this.type].ceiling.destroy, r = this.surfaces[0], i = 0; i < r.colliders.length; i++) {
                    for (var o = s.toAabb(r.colliders[i]), n = 0; n < a.particleCount; n++) {
                        var l = m.create(c.random(o.min.x, o.max.x), c.random(o.min.y, o.max.y)),
                            p = m.mul(m.randomUnit(), c.random(0, 15));
                        e.addParticle(a.particle, this.layer, l, p)
                    }
                    break
                }
                t.playSound(a.sound || "ceiling_break_01", {
                    channel: "sfx",
                    soundPos: this.pos
                })
            },
            positionSprite: function(e, t, a) {
                var r = a.pointToScreen(m.add(this.pos, e.posOffset)),
                    i = a.pixels(this.scale * e.defScale);
                e.position.set(r.x, r.y), e.scale.set(i, i), e.mirrorY && (e.scale.y *= -1), e.rotation = -this.rot + e.rotOffset, e.alpha = e.imgAlpha * t
            },
            render: function(e, t, a) {}
        }, e.exports = i
    },
