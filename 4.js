    "9b5f96fd": function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function r(e, t, a, i, r, o, n, s, l, c, m, p, d) {
            this.initialized = !1, this.teamMode = 0, this.onJoin = p, this.onQuit = d, this.pixi = e, this.Be = t, this.Le = l, this.localization = a, this.config = i, this.Re = r, this.Fe = o, this.je = n, this.adManager = s, this.textureManager = c, this.loadoutMenu = m, this.victoryMusic = null, this.ws = null, this.connecting = !1, this.connected = !1
        }
        var o = a("8b1dfb45"),
            n = a("989ad62a"),
            s = n.Input,
            l = a("8649e148"),
            c = a("b78cf179"),
            m = c.EmoteSlot,
            p = (c.EmoteData, a("ceee80d9")),
            d = a("10899aea"),
            h = a("300e2704"),
            u = a("c2a798c8"),
            g = a("ce29f17f"),
            y = a("26be8056"),
            w = a("2701b048"),
            x = a("c73dee75"),
            f = a("1ad3d2a4"),
            b = a("72409abe"),
            _ = a("af8ba00f"),
            S = a("172c57dc"),
            k = (a("e98400ad"), a("e5d16b4d")),
            v = a("604cff9c"),
            z = a("f398b7c7"),
            M = a("f034d167"),
            T = a("a7f094a3"),
            P = a("4b8d140f"),
            I = a("a48f3bb2"),
            C = a("d49cd95c"),
            A = a("753d6e4b"),
            E = a("119e8c4c"),
            D = a("fc6a992a"),
            O = a("a508b62a"),
            B = a("bc83ef37"),
            L = a("c60b5e9f"),
            R = a("6e43d1d7"),
            F = a("0955a76e"),
            j = (a("ce089fd5"), a("e2094860")),
            q = a("3160ea28"),
            N = a("d3da5587");
        r.prototype = {
            U: function(e, t, a, i) {
                var r = this;
                if (!(this.connecting || this.connected || this.initialized)) {
                    console.log("Joining", t), this.ws && (this.ws.onerror = function() {}, this.ws.onopen = function() {}, this.ws.onmessage = function() {}, this.ws.onclose = function() {}, this.ws.close(), this.ws = null), this.connecting = !0, this.connected = !1;
                    try {
                        this.ws = new WebSocket(t), this.ws.binaryType = "arraybuffer", this.ws.onerror = function(e) {
                            r.ws && r.ws.close()
                        }, this.ws.onopen = function() {
                            r.connecting = !1, r.connected = !0, r.o();
                            var t = new h.JoinMsg;
                            t.protocol = n.protocolVersion, t.privData = e, t.name = r.name, t.emotes = r.emoteLoadout, t.useTouch = g.touch, t.isMobile = g.mobile, t.bot = !1, r.q(h.Msg.Join, t, 2048), a()
                        }, this.ws.onmessage = function(e) {
                            for (var t = new h.MsgStream(e.data);;) {
                                var a = t.deserializeMsgType();
                                if (a == h.Msg.None) break;
                                r.qe(a, t.getStream())
                            }
                        }, this.ws.onclose = function() {
                            var e = r.Ne && r.Ne.displayingStats,
                                t = r.connecting,
                                a = r.connected;
                            if (r.connecting = !1, r.connected = !1, t) i();
                            else if (a && !r.gameOver && !e) {
                                var o = "";
                                o = r.disconnectMsg && "" != r.disconnectMsg ? r.disconnectMsg : "index-host-closed", r.onQuit(o)
                            }
                        }
                    } catch (e) {
                        this.connecting = !1, this.connected = !1, i()
                    }
                }
            },
            o: function() {
                var e;
                this.canvasMode = this.pixi.renderer.type == o.RENDERER_TYPE.CANVAS, this._ = !1, this.Ve = !1, this.Ge = !1, this.Ue = !1, this.He = 0, this.H = !1, this.We = !1, this.Ke = new j.Ze(this.Re, this.config), this.ae = new f.j, this.Xe = new L.Ye(this, this.canvasMode), this.Je = new E.d(this.Xe), this.Qe = new C.$e, this.et = new O.tt, this.at = new x.it, this.rt = new M.ot, this.nt = new B.st, this.lt = new v.ke, this.ct = new D.mt(this.Be), this.dt = new w.J, this.ht = new F.p, this.ut = new b.Te, this.gt = new S.f, this.yt = new I.wt, this.xt = new T.ft(this.canvasMode), this.Ne = new q.me(this, this.Be, this.Je, this.ct, this.localization, this.canvasMode, this.Ke, this.Fe, this.je, this.adManager), this.bt = new N._t(this.localization, this.Fe), this.St = new k.kt(this.Be, this.Ne, this.et, this.ae, this.Qe), this.vt = new R.ze(this.Je, this.Be, this.Ne);
                var t = (e = {}, i(e, l.Type.Player, this.et.Se), i(e, l.Type.Obstacle, this.Qe.pe), i(e, l.Type.Loot, this.yt.zt), i(e, l.Type.DeadBody, this.ut.Me), i(e, l.Type.Building, this.Qe.Mt), i(e, l.Type.Structure, this.Qe.Tt), i(e, l.Type.Decal, this.gt.u), i(e, l.Type.Projectile, this.nt.Pt), i(e, l.Type.Smoke, this.ht.e), i(e, l.Type.Airdrop, this.dt.Y), e);
                this.It = new A.Creator;
                for (var a in t) t.hasOwnProperty(a) && this.It.registerType(a, t[a]);
                this.debugDisplay = new o.Graphics;
                for (var r = [this.Qe.display.ground, this.Xe.layers[0], this.Xe.ground, this.Xe.layers[1], this.Xe.layers[2], this.Xe.layers[3], this.debugDisplay, this.xt.gasRenderer.display, this.Ke.container, this.St.container, this.Ne.container, this.Ne.pieTimer.container, this.St.indContainer], n = 0; n < r.length; n++) {
                    var s = r[n];
                    s && (s.interactiveChildren = !1, this.pixi.stage.addChild(s))
                }
                this.disconnectMsg = "", this.playing = !1, this.gameOver = !1, this.spectating = !1, this.inputMsgTimeout = 0, this.prevInputMsg = new h.InputMsg, this.playingTicker = 0, this.updateRecvCount = 0, this.playedAssignRoleSfx = {}, this.Ct = 0, this.At = 0, this.Et = null, this.Dt = !1, this.I = 1, this.debugZoom = 1, this.useDebugZoom = !1, this.seq = 0, this.seqInFlight = !1, this.seqSendTime = 0, this.pings = [], this.debugPingTime = 0, this.ae.setShakeEnabled(this.config.get("screenShake")), this.name = this.config.get("playerName"), this.anonPlayerNames = this.config.get("anonPlayerNames");
                var c = {
                    emoteTop: m.Top,
                    emoteRight: m.Right,
                    emoteBottom: m.Bottom,
                    emoteLeft: m.Left,
                    emoteWin: m.Win,
                    emoteDeath: m.Death
                };
                this.emoteLoadout = [], this.emoteLoadout[m.None] = 0;
                for (var p = Object.keys(c), u = 0; u < p.length; u++) {
                    var g = p[u],
                        y = parseInt(this.config.get(g)),
                        _ = d.clamp(y, 1, 255);
                    this.emoteLoadout[c[g]] = _
                }
                this.St.updateEmoteWheel(this.emoteLoadout), document.hasFocus() || this.Be.playSound("notification_start_01", {
                    channel: "ui"
                }), this.Ot(), this.initialized = !0
            },
            n: function() {
                if (this.ws && (this.ws.onmessage = function() {}, this.ws.close(), this.ws = null), this.connecting = !1, this.connected = !1, this.initialized)
                    for (this.initialized = !1, this.St.n(), this.bt.n(), this.Ne.n(), this.xt.free(), this.dt.n(), this.ct.n(), this.Qe.n(), this.Je.n(), this.Xe.n(), this.Be.stopAll(); this.pixi.stage.children.length > 0;) {
                        var e = this.pixi.stage.children[0];
                        this.pixi.stage.removeChild(e), e.destroy({
                            children: !0
                        })
                    }
            },
            Bt: function() {
                return this.initialized && this.playing && !this.spectating && !this.Ne.displayingStats
            },
            c: function(e) {
                var t = this.ht.particles,
                    a = this.Qe.pe.m(),
                    i = 0;
                this._ = !0, this.Ve = !0, this.Ge = !0, this.Ue = !0;
                var r = {};
                r.render = r.render || {}, this.playing && (this.playingTicker += e), this.et.c(e, this.At, this.teamMode, this.Xe, this.Je, this.ae, this.Qe, this.Fe, this.Be, this.St.wheelKeyTriggered, this.Ne.displayingStats, this.spectating), this.updateAmbience(), this.ae.pos = u.copy(this.Et.pos), this.ae.applyShake();
                var o = this.Et.Lt(),
                    l = d.min(this.ae.screenWidth, this.ae.screenHeight),
                    c = d.max(this.ae.screenWidth, this.ae.screenHeight),
                    m = d.max(l * (16 / 9), c);
                this.ae.I = .5 * m / (o * this.ae.ppu);
                var w = this.Et.zoomFast ? 3 : 2,
                    x = this.Et.zoomFast ? 3 : 1.4,
                    f = this.ae.I > this.ae.k ? w : x;
                this.ae.k = d.lerp(e * f, this.ae.k, this.ae.I), this.Be.cameraPos = u.copy(this.ae.pos), this.Re.ue(P.Key.Escape) && this.Ne.toggleEscMenu(), (this.Fe.isBindPressed(s.ToggleMap) || this.Re.ue(P.Key.G) && !this.Fe.isKeyBound(P.Key.G)) && this.Ne.displayMapLarge(!1), this.Fe.isBindPressed(s.CycleUIMode) && this.Ne.cycleVisibilityMode(), (this.Fe.isBindPressed(s.HideUI) || this.Re.ue(P.Key.Escape) && !this.Ne.hudVisible) && this.Ne.cycleHud();
                var b = this.Et.pos,
                    _ = this.ae.O(this.Re.de),
                    S = u.sub(_, b),
                    k = u.length(S),
                    v = k > 1e-5 ? u.div(S, k) : u.create(1, 0);
                this.St.wheelDisplayed && (k = this.prevInputMsg.toMouseLen, v = this.prevInputMsg.toMouseDir);
                var z = new h.InputMsg;
                if (z.seq = this.seq, !this.spectating) {
                    if (g.touch) {
                        var M = this.Ke.getTouchMovement(this.ae),
                            T = this.Ke.getAimMovement(this.Et, this.ae),
                            I = u.copy(T.aimMovement.toAimDir);
                        if (this.Ke.turnDirTicker -= e, this.Ke.moveDetected && !T.touched) {
                            var C = u.normalizeSafe(M.toMoveDir, u.create(1, 0)),
                                A = this.Ke.turnDirTicker < 0 ? C : T.aimMovement.toAimDir;
                            this.Ke.setAimDir(A), I = A
                        }
                        T.touched && (this.Ke.turnDirTicker = this.Ke.turnDirCooldown), this.Ke.moveDetected ? (z.touchMoveDir = u.normalizeSafe(M.toMoveDir, u.create(1, 0)), z.touchMoveLen = Math.round(255 * d.clamp(M.toMoveLen, 0, 1))) : z.touchMoveLen = 0, z.touchMoveActive = !0;
                        var E = T.aimMovement.toAimLen,
                            D = d.clamp(E / this.Ke.padPosRange, 0, 1) * n.player.throwableMaxMouseDist;
                        z.toMouseLen = D, z.toMouseDir = I
                    } else z.moveLeft = this.Fe.isBindDown(s.MoveLeft) || this.Re.fe(P.Key.Left) && !this.Fe.isKeyBound(P.Key.Left), z.moveRight = this.Fe.isBindDown(s.MoveRight) || this.Re.fe(P.Key.Right) && !this.Fe.isKeyBound(P.Key.Right), z.moveUp = this.Fe.isBindDown(s.MoveUp) || this.Re.fe(P.Key.Up) && !this.Fe.isKeyBound(P.Key.Up), z.moveDown = this.Fe.isBindDown(s.MoveDown) || this.Re.fe(P.Key.Down) && !this.Fe.isKeyBound(P.Key.Down), z.toMouseDir = u.copy(v), z.toMouseLen = k;
                    z.touchMoveDir = u.normalizeSafe(z.touchMoveDir, u.create(1, 0)), z.touchMoveLen = d.clamp(z.touchMoveLen, 0, 255), z.toMouseDir = u.normalizeSafe(z.toMouseDir, u.create(1, 0)), z.toMouseLen = d.clamp(z.toMouseLen, 0, h.Constants.kMouseMaxDist), z.shootStart = this.Fe.isBindPressed(s.Fire) || this.Ke.Rt, z.shootHold = this.Fe.isBindDown(s.Fire) || this.Ke.Rt, z.portrait = this.ae.screenWidth < this.ae.screenHeight;
                    for (var O = [s.Reload, s.Revive, s.Use, s.Loot, s.Cancel, s.EquipPrimary, s.EquipSecondary, s.EquipThrowable, s.EquipMelee, s.EquipNextWeap, s.EquipPrevWeap, s.EquipLastWeap, s.EquipOtherGun, s.EquipPrevScope, s.EquipNextScope, s.StowWeapons], B = 0; B < O.length; B++) {
                        var L = O[B];
                        this.Fe.isBindPressed(L) && z.addInput(L)
                    }
                    if (this.Fe.isBindPressed(s.Interact)) {
                        for (var R = [s.Revive, s.Use, s.Loot], F = [], j = 0; j < R.length; j++) {
                            var q = R[j];
                            this.Fe.getBind(q) || F.push(q)
                        }
                        if (F.length == R.length) z.addInput(s.Interact);
                        else
                            for (var N = 0; N < F.length; N++) z.addInput(F[N])
                    }(this.Fe.isBindPressed(s.SwapWeapSlots) || this.Ne.swapWeapSlots) && (z.addInput(s.SwapWeapSlots), this.Et.gunSwitchCooldown = 0), this.Ne.reloadTouched && z.addInput(s.Reload), this.Ne.interactionTouched && (z.addInput(s.Interact), z.addInput(s.Cancel));
                    for (var V = 0; V < this.bt.uiEvents.length; V++) {
                        var G = this.bt.uiEvents[V];
                        if ("use" == G.action)
                            if ("weapon" == G.type) {
                                var U = {
                                        0: s.EquipPrimary,
                                        1: s.EquipSecondary,
                                        2: s.EquipMelee,
                                        3: s.EquipThrowable
                                    },
                                    H = U[G.data];
                                H && z.addInput(H)
                            } else z.useItem = G.data
                    }
                    this.Fe.isBindPressed(s.UseBandage) ? z.useItem = "bandage" : this.Fe.isBindPressed(s.UseHealthKit) ? z.useItem = "healthkit" : this.Fe.isBindPressed(s.UseSoda) ? z.useItem = "soda" : this.Fe.isBindPressed(s.UsePainkiller) && (z.useItem = "painkiller");
                    for (var W = !1, K = 0; K < this.bt.uiEvents.length; K++) {
                        var Z = this.bt.uiEvents[K];
                        if ("drop" == Z.action) {
                            var X = new h.DropItemMsg;
                            if ("weapon" == Z.type) {
                                var Y = this.Et.re.weapons;
                                X.item = Y[Z.data].name, X.weapIdx = Z.data
                            } else {
                                var J = "";
                                J = "helmet" == Z.data ? this.Et.ie.helmet : "chest" == Z.data ? this.Et.ie.chest : Z.data, X.item = J
                            }
                            "" != X.item && (this.q(h.Msg.DropItem, X, 128), "fists" != X.item && (W = !0))
                        }
                    }
                    W && this.Be.playSound("loot_drop_01", {
                        channel: "ui"
                    })
                }
                var Q = this.Ne.specBegin,
                    $ = this.Ne.specNext || this.spectating && this.Re.ue(P.Key.Right),
                    ee = this.Ne.specPrev || this.spectating && this.Re.ue(P.Key.Left),
                    te = this.Re.ue(P.Key.Right) || this.Re.ue(P.Key.Left);
                if (Q || this.spectating && $ || ee) {
                    var ae = new h.SpectateMsg;
                    ae.specBegin = Q, ae.specNext = $, ae.specPrev = ee, ae.specForce = te, this.q(h.Msg.Spectate, ae, 128)
                }
                this.Ne.specBegin = !1, this.Ne.specNext = !1, this.Ne.specPrev = !1, this.Ne.reloadTouched = !1, this.Ne.interactionTouched = !1, this.Ne.swapWeapSlots = !1;
                var ie = !1;
                for (var re in z)
                    if (z.hasOwnProperty(re)) {
                        if ("inputs" == re) ie = z[re].length > 0;
                        else if ("toMouseDir" == re) {
                            var oe = d.clamp(u.dot(z[re], this.prevInputMsg[re]), -1, 1),
                                ne = d.rad2deg(Math.acos(oe));
                            ie = ne > .4
                        } else "toMouseLen" == re ? ie = Math.abs(this.prevInputMsg[re] - z[re]) > .5 : "shootStart" == re ? ie = z[re] || z[re] != this.prevInputMsg[re] : this.prevInputMsg[re] != z[re] && (ie = !0);
                        if (ie) break
                    }
                if (this.inputMsgTimeout -= e, (ie || this.inputMsgTimeout < 0) && (this.seqInFlight || (this.seq = (this.seq + 1) % 256, this.seqSendTime = Date.now(), this.seqInFlight = !0, z.seq = this.seq), this.q(h.Msg.Input, z, 128), this.inputMsgTimeout = 1, this.prevInputMsg = z), this.bt.flushInput(), this.Qe.c(e, this.Et, this.et, this.Je, this.Be, this.Le, this.Xe, this.ae, t, r), this.yt.c(e, this.Et, this.ae, r), this.at.c(e, this.et, this.Qe, this.ae, this.Et, this.Xe, this.Je, this.Be), this.rt.c(e, this.et, this.Qe, this.ae, this.Et, this.Xe, this.Je, this.Be), this.nt.c(e, this.Je, this.Be, this.Et, this.Qe, this.Xe, this.ae), this.lt.c(e, this.Qe, this.et, this.ae, this.Je, this.Be, r), this.dt.c(e, this.Et, this.ae, this.Qe, this.Je, this.Xe, this.Be), this.ct.c(e, this.ae, this.Et, this.Qe, this.Xe), this.ht.c(e, this.ae, this.Et, this.Qe, this.Xe), this.vt.c(e, this.At, this.et, this.Je, this.Be), this.Je.c(e, this.ae, r), this.ut.c(e, this.et, this.Et, this.anonPlayerNames, this.Ct, this.Qe, this.ae, this.Xe), this.gt.c(e, this.ae, this.Xe, r), this.Ne.c(e, this.Et, this.Qe, this.xt, this.yt, this.et, this.ae, this.teamMode, this.Qe.factionMode), this.bt.c(e, this.Et, this.spectating, this.et, this.yt, this.Qe, this.Fe), this.St.c(e, this.Ct, this.Et, this.teamMode, this.ut, this.Xe, this.Re, this.Fe, this.spectating), this.Ke.update(e, this.Et, this.Qe, this.ae, this.Xe), this.Xe.c(e, this.ae, this.Qe, r), !this.We && this.Qe.Ft && (this.Qe.H || this.loadoutMenu.socialUnlocks()) && this.St.hasCustomEmotes()) {
                    this.We = !0;
                    var se = new h.LoadoutMsg;
                    se.emotes = [];
                    for (var le = 0; le < this.emoteLoadout.length; le++) se.emotes[le] = this.emoteLoadout[le];
                    se.custom = this.St.hasCustomEmotes(), this.q(h.Msg.Loadout, se, 128)
                }
                for (var ce = 0; ce < this.St.newPings.length; ce++) {
                    var me = this.St.newPings[ce],
                        pe = new h.EmoteMsg;
                    pe.type = me.type, pe.pos = me.pos, pe.useLoadout = !1, pe.teamOnly = !0, pe.isPing = !0, this.q(h.Msg.Emote, pe, 128)
                }
                this.St.newPings = [];
                for (var de = 0; de < this.St.newEmotes.length; de++) {
                    var he = this.St.newEmotes[de],
                        ue = new h.EmoteMsg;
                    ue.type = he.type, ue.pos = he.pos, ue.useLoadout = he.useLoadout, ue.teamOnly = !1, ue.isPing = !1, this.q(h.Msg.Emote, ue, 128)
                }
                if (this.St.newEmotes = [], this.jt(e, r), ++this.He % 30 == 0) {
                    for (var ge = p.qt, ye = 0; ye < t.length; ye++) {
                        var we = t[ye];
                        we.active && !we.fade && ge(we, p.Nt) && i++
                    }
                    for (var xe = 0; xe < a.length; xe++) {
                        var fe = a[xe];
                        fe.active && !fe.dead && ge(fe, p.Vt) && i++
                    }
                    i && (this.H = !0), i && this.Dt && y.H(this)
                }
            },
            jt: function(e, t) {
                var a = this.Qe.mapLoaded ? this.Qe.getMapDef().biome.colors.grass : 8433481;
                this.pixi.renderer.backgroundColor = a, this.et.render(this.ae, t), this.at.render(this.ae, t), this.rt.render(this.ae), this.Qe.render(this.ae), this.xt.render(this.ae), this.Ne.render(this.Et.pos, this.xt, this.ae, this.Qe, this.ct, t), this.St.render(this.ae), _.flush()
            },
            updateAmbience: function() {
                var e = this.Et.pos,
                    t = 0,
                    a = 0,
                    i = 1;
                if (this.Qe.isInOcean(e)) t = 1, a = 0, i = 0;
                else {
                    var r = this.Qe.distanceToShore(e);
                    t = d.delerp(r, 50, 0), a = 0;
                    for (var o = 0; o < this.Qe.terrain.rivers.length; o++) {
                        var n = this.Qe.terrain.rivers[o],
                            s = n.spline.getClosestTtoPoint(e),
                            l = n.spline.getPos(s),
                            c = u.length(u.sub(l, e)),
                            m = n.waterWidth + 2,
                            p = d.delerp(c, 30 + m, m),
                            h = d.clamp(n.waterWidth / 8, .25, 1);
                        a = d.max(p * h, a)
                    }
                    a *= 1 - t, 1 == this.Et.layer && (a = 0), i = d.clamp(1 - (t + a), 0, 1)
                }
                this.Le.getTrack("wind").volume = i, this.Le.getTrack("river").volume = a, this.Le.getTrack("waves").volume = t
            },
            Ot: function() {
                this.ae.screenWidth = g.screenWidth, this.ae.screenHeight = g.screenHeight, this.Qe.resize(this.pixi.renderer, this.canvasMode), this.xt.resize(), this.Ne.resize(this.Qe, this.ae), this.Ke.resize(), this.Xe.resize(this.Qe, this.ae)
            },
            Gt: function(e) {
                var t = {
                    audioManager: this.Be,
                    renderer: this.Xe,
                    particleBarn: this.Je,
                    map: this.Qe,
                    smokeBarn: this.ht,
                    decalBarn: this.gt
                };
                e.activePlayerIdDirty && (this.At = e.activePlayerId);
                for (var a = 0; a < e.playerInfos.length; a++) this.et.Ut(e.playerInfos[a]);
                for (var i = 0; i < e.deletedPlayerIds.length; i++) {
                    var r = e.deletedPlayerIds[i];
                    this.et.Ht(r)
                }
                if ((e.playerInfos.length > 0 || e.deletedPlayerIds.length > 0) && this.et.Wt(), e.playerStatusDirty) {
                    var o = this.et.ne(this.At).teamId;
                    this.et.Kt(o, e.playerStatus, this.Qe.factionMode)
                }
                if (e.groupStatusDirty) {
                    var s = this.et.ne(this.At).groupId;
                    this.et.Zt(s, e.groupStatus)
                }
                for (var l = 0; l < e.delObjIds.length; l++) e.delObjIds[l], this.It.deleteObj(e.delObjIds[l]);
                for (var c = 0; c < e.fullObjects.length; c++) {
                    var m = e.fullObjects[c];
                    this.It.updateObjFull(m.__type, m.__id, m, t)
                }
                for (var p = 0; p < e.partObjects.length; p++) {
                    var d = e.partObjects[p];
                    this.It.updateObjPart(d.__id, d, t)
                }
                this.spectating = this.At != this.Ct, this.Et = this.et.ve(this.At), this.Et.Xt(e.activePlayerData, this.et), e.activePlayerData.weapsDirty && (this.Ne.weapsDirty = !0), this.spectating && (this.Ne.setSpectateTarget(this.At, this.Ct, this.teamMode, this.anonPlayerNames, this.et), this.Ke.hideAll()), this.Et.layer = this.Et.ie.layer, this.Xe.setActiveLayer(this.Et.layer), this.Be.activeLayer = this.Et.layer;
                var h = this.Et.isUnderground(this.Qe);
                this.Xe.setUnderground(h), this.Be.underground = h, e.aliveDirty && (1 == e.aliveCounts.length ? this.Ne.updatePlayersAlive(e.aliveCounts[0]) : e.aliveCounts.length >= 2 && (this.Ne.updatePlayersAliveRed(e.aliveCounts[0]), this.Ne.updatePlayersAliveBlue(e.aliveCounts[1]))), this.xt.setProgress(e.gasT), e.gasDirty && this.xt.setFullState(e.gasT, e.gasData, this.Qe, this.Ne);
                for (var u = 0; u < e.bullets.length; u++) {
                    var g = e.bullets[u];
                    n.bullets[g.bulletType].addFlare ? this.rt.addFlare(g, this.et, this.Xe) : this.at.addBullet(g, this.et, this.Xe), g.shotFx && this.vt.addShot(g.pos, g.layer, g.playerId, g.shotSourceType, g.shotOffhand, g.lastShot)
                }
                for (var y = 0; y < e.explosions.length; y++) {
                    var w = e.explosions[y];
                    this.lt.addExplosion(w.type, w.pos, w.layer)
                }
                for (var x = 0; x < e.emotes.length; x++) {
                    var f = e.emotes[x];
                    f.isPing ? this.St.addPing(f, this.Qe.factionMode) : this.St.addEmote(f)
                }
                this.ct.Yt(e.planes, this.Qe);
                for (var b = 0; b < e.airstrikeZones.length; b++) this.ct.Jt(e.airstrikeZones[b]);
                this.Ne.le(e.mapIndicators), this.updateRecvCount++
            },
            qe: function(e, t) {
                var a = this;
                switch (e) {
                    case h.Msg.Joined:
                        var r = new h.JoinedMsg;
                        r.deserialize(t), this.onJoin(), this.teamMode = r.teamMode, this.Ct = r.playerId, this.Dt = !0, r.started || this.Ne.setWaitingForPlayers(!0), this.Ne.removeAds(), this.victoryMusic && (this.victoryMusic.stop(), this.victoryMusic = null);
                        break;
                    case h.Msg.Map:
                        var o = new h.MapMsg;
                        o.deserialize(t), this.Qe.loadMap(o, this.ae, this.canvasMode, this.Je);
                        var s = this.Qe.getMapDef().assets;
                        this.Be.loadSoundList(s.audio), this.textureManager.loadAtlasList(s.atlases), this.et.onMapLoad(this.Qe), this.at.onMapLoad(this.Qe), this.Je.onMapLoad(this.Qe), this.Qe.renderMap(this.pixi.renderer, this.canvasMode), this.Ne.resize(this.Qe, this.ae);
                        break;
                    case h.Msg.Update:
                        var l = new h.UpdateMsg;
                        l.deserialize(t, this.It), this.playing = !0, this.Gt(l);
                        break;
                    case h.Msg.Kill:
                        var c = new h.KillMsg;
                        c.deserialize(t);
                        var m = this.et.ne(c.targetId),
                            p = this.et.ne(c.killCreditId),
                            d = c.itemSourceType || c.mapSourceType,
                            u = this.et.ne(this.At).teamId,
                            g = c.downed && !c.killed || c.damageType == n.DamageType.Gas || c.damageType == n.DamageType.Bleeding || c.damageType == n.DamageType.Airdrop,
                            w = g ? p : this.et.ne(c.killerId),
                            x = m.nameTruncated,
                            f = p.nameTruncated,
                            b = w.nameTruncated;
                        if (this.anonPlayerNames) {
                            var _ = function(e) {
                                return e.playerId == a.At || e.teamId == u
                            };
                            _(m) || (x = m.anonName), _(p) || (f = p.anonName), _(w) || (b = w.anonName)
                        }
                        x = y.htmlEscape(x), f = y.htmlEscape(f), b = y.htmlEscape(b), c.killCreditId == this.At ? this.Ne.showKill({
                            name: f,
                            kills: c.killerKills,
                            completeKill: c.killerId == this.At
                        }, {
                            name: x,
                            suicide: c.killerId == c.targetId || c.killCreditId == c.targetId,
                            killed: c.killed,
                            downed: c.downed,
                            teamKill: m.teamId == p.teamId
                        }, d, c.damageType, this.spectating) : c.targetId == this.At && c.downed && !c.killed && this.Ne.showDowned({
                            name: f,
                            damageType: c.damageType
                        }, {
                            name: x,
                            suicide: c.killerId == c.targetId || c.killCreditId == c.targetId
                        }, d, c.damageType, this.spectating);
                        var S = this.bt.getKillFeedText(x, w.teamId ? b : "", d, c.damageType, c.downed && !c.killed),
                            k = this.bt.getKillFeedColor(u, m.teamId, p.teamId, this.Qe.factionMode);
                        if (this.bt.addKillFeed(S, k), c.type == n.DamageType.Player && this.at.createBulletHit(this.et, c.targetId, this.Be), c.targetRole == n.Role.FactionLeader) {
                            var v = this.bt.getRoleKillFeedText(b, m.teamId, c.damageType, c.downed && !c.killed, n.Role.FactionLeader),
                                z = this.et.getTeamColor(m.teamId),
                                M = y.colorToHexString(z);
                            this.bt.addKillFeed(v, M), c.killed && this.Be.playSound("leader_dead_01", {
                                channel: "ui"
                            })
                        }
                        if (c.targetRole == n.Role.WoodsKing) {
                            var T = this.bt.getRoleKillFeedText(b, m.teamId, c.damageType, c.downed && !c.killed, n.Role.WoodsKing);
                            this.bt.addKillFeed(T, "#12ff00"), c.killed && this.Be.playSound("leader_dead_01", {
                                channel: "ui"
                            })
                        }
                        break;
                    case h.Msg.AssignRole:
                        var P = new h.AssignRoleMsg;
                        P.deserialize(t);
                        var I = this.et.ne(P.playerId);
                        if (!I) break;
                        var C = this.bt.getAssignRoleKillFeedText(P.role, I.nameTruncated, I.teamId);
                        if (C) {
                            var A = this.et.getTeamColor(I.teamId),
                                E = y.colorToHexString(A);
                            this.bt.addKillFeed(C, E)
                        }
                        if (!this.playedAssignRoleSfx[P.role]) {
                            var D, O = (D = {}, i(D, n.Role.FactionLeader, "leader_assigned_01"), i(D, n.Role.Lieutenant, "lt_assigned_01"), D),
                                B = O[P.role];
                            B && this.Be.playSound(B, {
                                channel: "ui"
                            }), this.playedAssignRoleSfx[P.role] = !0
                        }
                        this.Ct == P.playerId && this.Ne.displayAssignRoleAnnouncement(P.role, I.teamId);
                        break;
                    case h.Msg.PlayerStats:
                        var L = new h.PlayerStatsMsg;
                        L.deserialize(t), this.Ne.setLocalStats(L.playerStats), this.Ne.showTeamAd();
                        break;
                    case h.Msg.Stats:
                        var R = new h.StatsMsg;
                        R.deserialize(t), y.Z(R.data, this);
                        break;
                    case h.Msg.GameOver:
                        var F = new h.GameOverMsg;
                        F.deserialize(t), this.gameOver = F.gameOver;
                        for (var j = this.et.ne(this.Ct).teamId, q = 0; q < F.playerStats.length; q++) {
                            var N = F.playerStats[q];
                            if (N.playerId == this.Ct) {
                                this.Ne.setLocalStats(N);
                                break
                            }
                        }
                        this.Ne.showStats(F.playerStats, F.teamId, F.teamRank, F.winningTeamId, F.gameOver, j, this.teamMode, this.spectating, this.et, this.Le, this.Be, this.Qe.factionMode), j == F.winningTeamId && (this.victoryMusic = this.Be.playSound("menu_music", {
                            channel: "music",
                            delay: 1300,
                            forceStart: !0
                        })), this.Ke.hideAll();
                        break;
                    case h.Msg.Pickup:
                        var V = new h.PickupMsg;
                        if (V.deserialize(t), V.type == h.PickupMsgType.Success && V.item) {
                            var G = n.items[V.item];
                            this.Be.playSound(G.sound.pickup, {
                                channel: "ui"
                            }), "throwable" == G.type && (this.Et.lastThrowablePickupSfxTicker = .3)
                        } else this.bt.displayPickupMessage(V.type);
                        break;
                    case h.Msg.Disconnect:
                        var U = new h.DisconnectMsg;
                        U.deserialize(t), this.disconnectMsg = U.reason
                }
            },
            q: function(e, t, a) {
                var i = a || 128,
                    r = new h.MsgStream(new ArrayBuffer(i));
                r.serializeMsg(e, t), this.Qt(r)
            },
            Qt: function(e) {
                if (this.ws && this.ws.readyState == this.ws.OPEN) try {
                    this.ws.send(e.getBuffer())
                } catch (e) {
                    z.storeGeneric("error", "sendMessageException"), this.ws.close()
                }
            }
        }, e.exports = {
            $t: r
        }
    },
    "9d3c0d8b": function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Halloween",
                    icon: "img/emotes/pumpkin.svg"
                },
                assets: {
                    audio: [{
                        name: "log_01",
                        channel: "sfx"
                    }, {
                        name: "log_02",
                        channel: "sfx"
                    }, {
                        name: "pumpkin_break_01",
                        channel: "sfx"
                    }, {
                        name: "vault_change_02",
                        channel: "sfx"
                    }],
                    atlases: ["gradient", "shared", "halloween"]
                },
                biome: {
                    colors: {
                        background: 1507328,
                        water: 2621440,
                        beach: 6570254,
                        riverbank: 3939077,
                        grass: 2171908,
                        underground: 1181697,
                        playerSubmerge: 1310720
                    },
                    particles: {
                        ripple: "bloodRipple",
                        camera: "falling_leaf_halloween"
                    },
                    valueAdjust: .3
                },
                gameMode: {
                    maxPlayers: 80
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    "9e5281a7": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-01-28",
                locale: "pt"
            },
            "word-order": "svo",
            "index-slogan": "Batalha Real 2D",
            "index-region": "Região",
            "index-north-america": "América do Norte",
            "index-europe": "Europa",
            "index-asia": "Ásia",
            "index-south-america": "América do Sul",
            "index-korea": "Coreia do Sul",
            "index-players": "jogadores",
            "index-play-solo": "Jogar Sozinho",
            "index-play-duo": "Jogar em Duplas",
            "index-play-squad": "Jogar em Tropas",
            "index-create-team": "Criar Equipe",
            "index-join-team": "Junte-se à Equipe",
            "index-how-to-play": "Como Jogar",
            "index-leave-team": "Abandonar Equipe",
            "index-joining-team": "Entrando na Equipe",
            "index-creating-team": "Criando Equipe",
            "index-invite-link": "Link de Convite",
            "index-solo": "Solo",
            "index-duo": "Dupla",
            "index-squad": "Tropa",
            "index-auto-fill": "Preencher",
            "index-no-fill": "Não Preencher",
            "index-waiting-for-leader": "Esperando o líder começar",
            "index-play": "Jogar",
            "index-featured-youtuber": "YouTuber em Destaque",
            "index-settings": "Configurações",
            "index-high-resolution": "Alta resolução (marque para melhorar a qualidade visual)",
            "index-screen-shake": "Tremer a tela",
            "index-master-volume": "Volume geral",
            "index-sfx-volume": "Volume de efeitos sonoros",
            "index-music-volume": "Volume da música",
            "index-mobile-announce": "Agora disponível no celular!",
            "index-mobile-tooltip": "Visite <span>surviv.io</span> no seu dispositivo móvel para jogar em qualquer lugar!",
            "index-team-is-full": "A equipe está cheia!",
            "index-failed-joining-team": "Falha ao entrar na equipe.",
            "index-failed-creating-team": "Falha ao criar a equipe.",
            "index-failed-finding-game": "Falha ao encontrar jogo.",
            "index-failed-joining-game": "Falha ao entrar no jogo.",
            "index-lost-connection": "Perda de conexão com a equipe.",
            "index-host-closed": "Conexão fechada do servidor.",
            "index-view-more": "Ver Mais",
            "index-back-to-main": "Voltar ao Menu Principal",
            "index-most-kills": "Maior Número de Kills",
            "index-total-kills": "Total de Kills",
            "index-total-wins": "Total de Vitórias",
            "index-top-5-percent": "Top 5 porcento",
            "index-kill-death-ratio": "Taxa de assinatados/mortes",
            "index-for": "para",
            "index-today": "Hoje",
            "index-this-week": "Esta Semana",
            "index-all-time": "Todos os Tempos",
            "index-top-100": "TOP 100",
            "index-rank": "Classificação",
            "index-player": "Jogador",
            "index-total-games": "Total de jogos",
            "index-controls": "Controles",
            "index-movement": "Movimentação",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Mira",
            "index-aim-ctrl": "Mouse",
            "index-punch": "Soco",
            "index-shoot": "Atirar",
            "index-shoot-ctrl": "Clique com botão esquerdo",
            "index-change-weapons": "Trocar de Armas",
            "index-change-weapons-ctrl": "1 até 4 ou Roda do Mouse",
            "index-stow-weapons": "Guardar Armas (Modo Soco)",
            "index-stow-weapons-ctrl": "3 ou E",
            "index-swap-weapons": "Alternar para a Arma Anterior",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Recarregar",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Alcance do Zoom",
            "index-scope-zoom-ctrl": "Clique com o botão esquerdo no Zoom",
            "index-pickup": "Pegar",
            "index-loot": "Saquear",
            "index-revive": "Reviver",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Usar Item Médico",
            "index-use-medical-ctrl": "Clique com o Botão esquerdo sobre o Item ou pressione 7 até 0",
            "index-drop-item": "Soltar Item",
            "index-drop-item-ctrl": "Clique com o Botão direito no Item",
            "index-cancel-action": "Cancelar Ação",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Ver Mapa",
            "index-view-map-ctrl": "M ou G",
            "index-toggle-minimap": "Alternar para Minimapa",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Use o cículo de ping",
            "index-use-ping-ctrl": "Segure C, depois então Botão direito do mouse e arreste o mouse, então solte o botão direito",
            "index-use-emote": "Use a roda de Emote",
            "index-use-emote-ctrl": "Segure o Botão direito do mouse e arraste o mouse e solte o Botão direito do mouse",
            "index-tips-1-desc": "Seu objetivo o surviv.io é ser o ultimo jogador de pé. Você só vive uma vez por partida. Não tem respawn!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "Se você já jogou outros jogos de battle royale como PUBG, Fortnite ou H1Z1, então você já caminhou metade do caminho! Agora, pense em surviv.io como 2D PUBG (com um pouco menos de desync e mais frangotes).",
            "index-tips-3": "Lootear e matar",
            "index-tips-3-desc": "Você começará no jogo sem itens além de uma simples mochila. Movimente-se pelo mapa para encontrar itens: armas, munição, miras e itens médicos. Elimine outros jogadores e você pode levar o seu loote.",
            "index-tips-4": "Vermelho = Ruim",
            "index-tips-4-desc": "Jogadores não são a única coisa que pode te ferir. A mortal zona vermelha se moverá nos arredores do mapa e causará dano cada vez mais forte se você estiver nele. Fique de olho no mapa e se mantenha seguro.",
            "game-alive": "Vivos",
            "game-reloading": "Recarregando",
            "game-using": "Usando",
            "game-reviving": "Revivendo",
            "game-revive-teammate": "Reviver",
            "game-equip": "Equipar",
            "game-cancel": "Cancelar",
            "game-You": "Você",
            "game-you": "você",
            "game-themselves": "a si próprios",
            "game-yourself": "a si próprio",
            "game-you-died": "morreu",
            "game-player-died": "morreu",
            "game-with": "com",
            "game-knocked-out": "derrubou",
            "game-killed": "matou",
            "game-finally-killed": "finalmente matou",
            "game-finally-bled-out": "finalmente se libertou",
            "game-died-outside": "morreu fora da zona de segurança",
            "game-the-red-zone": "A zona vermelha",
            "game-waiting-for-players": "Esperando jogadores",
            "game-spectating": "Assistindo",
            "game-red-zone-advances": "A zona vermelha avança em",
            "game-red-zone-advancing": "Zona vermelha avançando, vá para a zona segura!",
            "game-seconds": "segundos",
            "game-minutes": "minutos",
            "game-minute": "minuto",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Espaço insuficiente!",
            "game-item-already-owned": "O jogador já possui o item!",
            "game-item-already-equipped": "Item já equipado!",
            "game-better-item-equipped": "Melhor item equipado!",
            "game-play-new-game": "Jogar Partida",
            "game-spectate": "Assistir",
            "game-full-screen": "Tela Cheia",
            "game-sound": "Som",
            "game-quit-game": "Sair do Jogo",
            "game-return-to-game": "Voltar ao Jogo",
            "game-hide-match-stats": "Esconder Estatísticas",
            "game-view-match-stats": "Visualizar Estatísticas",
            "game-previous-teammate": "Colega Anterior",
            "game-next-teammate": "Próximo Colega",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "Sair do Jogo",
            "game-your-results": "Seus Resultados",
            "game-chicken": "Hoje vamos comer frango no jantar!",
            "game-won-the-game": "ganhou o jogo.",
            "game-team-eliminated": "Sua equipe foi derrotada.",
            "game-rank": "Classificação",
            "game-team-rank": "Classificação da Equipe",
            "game-team-kills": "Kills da Equipe",
            "game-kill": "Kill",
            "game-kills": "Kills",
            "game-damage-dealt": "Dano Causado",
            "game-damage-taken": "Dando Recebido",
            "game-survived": "Sobreviveu por",
            "game-backpack00": "Bolsa",
            "game-backpack01": "Pacote Pequeno",
            "game-backpack02": "Pacote Regular",
            "game-backpack03": "Pacote Militar",
            "game-bandage": "Bandagem",
            "game-bandage-tooltip": "Clique com o botão esquerdo para restaurar 15 de vida.",
            "game-healing-tooltip": "Não é possível curar quando a vida é maior que 75.",
            "game-healthkit": "Kit Médico",
            "game-healthkit-tooltip": "Clique com o botão esquerdo para restaurar 100 de vida.",
            "game-soda": "Soda",
            "game-soda-tooltip": "Clique com o botão esquerdo para aumentar a adrenalina em 25.",
            "game-adrenaline-tooltip": "A adrenalina restaura a vida com o passar do tempo.",
            "game-painkiller": "Pílulas",
            "game-painkiller-tooltip": "Clique com o botão esquerdo para aumentar a adrenalina em 50.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Munição para M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 e Vector.",
            "game-12gauge": "Calibre 12",
            "game-12gauge-tooltip": "Munição para M870, M1100, SPAS-12, Saiga-12 e MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Munição para AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 e DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Munição para FAMAS, M416, M4A1-S, QBB-97, Mk 12 e M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Munição para DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Munição para AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Munição para Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Munição para M1911, M1A1, Model 94 e Peacemaker.",
            "game-chest01": "Colete Nível 1",
            "game-chest02": "Colete Nível 2",
            "game-chest03": "Colete Nível 3",
            "game-helmet01": "Capacete Nível 1",
            "game-helmet02": "Capacete Nível 2",
            "game-helmet03": "Capacete Nível 3",
            "game-1xscope": "1x Mira",
            "game-2xscope": "2x Mira",
            "game-4xscope": "4x Mira",
            "game-8xscope": "8x Mira",
            "game-15xscope": "15x Mira",
            "game-level-1": "Nvl. 1",
            "game-level-2": "Nvl. 2",
            "game-level-3": "Nvl. 3",
            "game-level-4": "Nvl. 4",
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
            "game-frag": "Granada de Fragmento",
            "game-hud-frag": "Fragmento",
            "game-potato": "Batata",
            "game-hud-potato": "Batata",
            "game-potato_heavy": "Batata",
            "game-barrel_01": "um barril",
            "game-silo_01": "a silo",
            "index-play-50v50": "Jogar 50v50",
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
    a48f3bb2: function(e, t, a) {
        "use strict";

        function i() {
            this.ticker = 0, this.container = new o.Sprite, this.container.anchor.set(.5, .5), this.container.scale.set(1, 1), this.sprite = new o.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.scale.set(.8, .8), this.container.addChild(this.sprite)
        }

        function r() {
            this._ = !1, this.zt = new p.Pool(i), this.ea = null
        }
        var o = a("8b1dfb45"),
            n = a("989ad62a"),
            s = a("10899aea"),
            l = a("1901e2d9"),
            c = a("c2a798c8"),
            m = (a("af8ba00f"), a("ce29f17f")),
            p = a("753d6e4b");
        i.prototype = {
            o: function() {
                this.updatedData = !1
            },
            n: function() {
                this.container.visible = !1
            },
            l: function(e, t, a, i) {
                if (this.updatedData = !0, this.pos = c.copy(e.pos), t && (this.layer = e.layer, this.name = e.name, this.count = e.count, this.isOld = e.isOld), a) {
                    this.ticker = 0, this.isOld && (this.ticker = 10);
                    var r = n.items[this.name];
                    this.rad = n.lootRadius[r.type], this.imgScale = 1.25 * r.lootImg.scale;
                    var s = r.lootImg.innerScale || .8;
                    this.sprite.scale.set(s, s), this.sprite.texture = o.Texture.fromImage(r.lootImg.sprite), this.sprite.tint = r.lootImg.tint, this.container.texture = r.lootImg.border ? o.Texture.fromImage(r.lootImg.border) : o.Texture.EMPTY;
                    var l = n.items[r.ammo];
                    l ? this.container.tint = l.lootImg.tintDark : r.lootImg.borderTint ? this.container.tint = r.lootImg.borderTint : this.container.tint = 0, this.sprite.rotation = r.lootImg.rot ? r.lootImg.rot : 0, this.sprite.scale.x = r.lootImg.mirror ? -s : s, this.container.visible = !0
                }(a || t) && i.renderer.addPIXIObj(this.container, this.layer, 13, this.__id)
            }
        }, r.prototype = {
            c: function(e, t, a, i) {
                this._ = !0, this.ea = null;
                for (var r = Number.MAX_VALUE, o = this.zt.m(), p = 0; p < o.length; p++) {
                    var d = o[p];
                    if (d.active) {
                        if (l.sameLayer(d.layer, t.layer)) {
                            var h = d.pos,
                                u = m.touch ? t.rad + d.rad * n.player.touchLootRadMult : d.rad,
                                g = c.sub(t.pos, h),
                                y = c.lengthSqr(g);
                            y < u * u && y < r && (r = y, this.ea = d)
                        }
                        d.ticker += e;
                        var w = s.delerp(d.ticker, 0, 1),
                            x = s.easeOutElastic(w, .75),
                            f = a.pointToScreen(d.pos),
                            b = a.pixels(d.imgScale * x);
                        d.container.position.set(f.x, f.y), d.container.scale.set(b, b)
                    }
                }
            },
            ta: function() {
                return this.ea
            }
        }, e.exports = {
            wt: r
        }
    },
    a508b62a: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r() {
            var e = {
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    fontSize: v.pixelRatio > 1 ? 30 : 22,
                    align: "center",
                    fill: 65535,
                    stroke: 0,
                    strokeThickness: 0,
                    dropShadow: !0,
                    dropShadowColor: "#000000",
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 1
                },
                t = new c.Text("", e);
            return t.anchor.set(.5, .5), t.scale.set(.5, .5), t.position.set(0, 30), t.visible = !1, t
        }

        function o() {
            var e = new c.Sprite;
            return e.texture = c.Texture.EMPTY, e.anchor.set(.5, .5), e.scale.set(1, 1), e.tint = 16777215, e.visible = !1, e
        }

        function n() {
            this.bodySprite = o(), this.chestSprite = o(), this.helmetSprite = o(), this.backpackSprite = o(), this.handLSprite = o(), this.handRSprite = o(), this.footLSprite = o(), this.footRSprite = o(), this.hipSprite = o(), this.gunLSprites = new A, this.gunRSprites = new A, this.objectLSprite = o(), this.objectRSprite = o(), this.meleeSprite = o(), this.bodySubmergeSprite = o(), this.handLSubmergeSprite = o(), this.handRSubmergeSprite = o(), this.footLSubmergeSprite = o(), this.footRSubmergeSprite = o(), this.bodyEffectSprite = o(), this.patchSprite = o(), this.bodySprite.addChild(this.bodySubmergeSprite), this.handLSprite.addChild(this.handLSubmergeSprite), this.handRSprite.addChild(this.handRSubmergeSprite), this.footLSprite.addChild(this.footLSubmergeSprite), this.footRSprite.addChild(this.footRSubmergeSprite), this.handLContainer = new c.Container, this.handLContainer.addChild(this.gunLSprites.container), this.handLContainer.addChild(this.handLSprite), this.handLContainer.addChild(this.objectLSprite), this.handRContainer = new c.Container, this.handRContainer.addChild(this.gunRSprites.container), this.handRContainer.addChild(this.meleeSprite), this.handRContainer.addChild(this.handRSprite), this.handRContainer.addChild(this.objectRSprite), this.footLContainer = new c.Container, this.footLContainer.addChild(this.footLSprite), this.footRContainer = new c.Container, this.footRContainer.addChild(this.footRSprite), this.bodyContainer = new c.Container, this.bodyContainer.addChild(this.footLContainer), this.bodyContainer.addChild(this.footRContainer), this.bodyContainer.addChild(this.backpackSprite), this.bodyContainer.addChild(this.bodySprite), this.bodyContainer.addChild(this.chestSprite), this.bodyContainer.addChild(this.hipSprite), this.bodyContainer.addChild(this.patchSprite), this.bodyContainer.addChild(this.bodyEffectSprite), this.bodyContainer.addChild(this.handLContainer), this.bodyContainer.addChild(this.handRContainer), this.bodyContainer.addChild(this.helmetSprite), this.container = new c.Container, this.container.addChild(this.bodyContainer), this.nameText = r(), this.container.addChild(this.nameText), this.initSubmergeSprites(), this.bones = [], this.anim = {
                type: d.None,
                data: {},
                seq: -1,
                ticker: 0,
                bones: []
            };
            for (var e = Object.keys(C).length, t = 0; t < e; t++) this.bones.push(new I), this.anim.bones.push({
                weight: 0,
                pose: new I
            });
            this.isOnBrightSurface = !1, this.wasInWater = !1, this.weapType = "", this.visualsDirty = !1, this.stepDistance = 0, this.zoomFast = !1, this.playedDryFire = !1, this.lastSwapIdx = -1, this.cycleSoundInstance = null, this.actionSoundInstance = null, this.useItemEmitter = null, this.useAbilityEmitter = null, this.downed = !1, this.wasDowned = !1, this.bleedTicker = 0, this.submersion = 0, this.gunRecoilL = 0, this.gunRecoilR = 0, this.fireDelay = 0, this.throwableState = "equip", this.throwableStatePrev = this.throwableState, this.lastThrowablePickupSfxTicker = 0, this.isNearDoorError = !1, this.doorErrorTicker = 0, this.noCeilingRevealTicker = 0, this.frozenTicker = 0, this.updateFrozenImage = !0, this.renderLayer = 0, this.renderZOrd = 18, this.renderZIdx = 0, this._ = !1, this.action = {}, this.ie = {}, this.re = {}, this.rad = m.player.radius, this.bodyRad = this.rad, this.pos = x.create(0, 0), this.posOld = x.create(0, 0), this.dir = x.create(1, 0), this.dirOld = x.create(1, 0), this.layer = 0
        }

        function s() {
            this.Se = new T.Pool(n), this.aa = {}, this.playerIds = [], this.teamInfo = {}, this.groupInfo = {}, this.playerStatus = {}
        }
        var l = function() {
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
            c = a("8b1dfb45"),
            m = a("989ad62a"),
            p = m.Action,
            d = m.Anim,
            h = m.Input,
            u = m.Role,
            g = a("ceee80d9"),
            y = a("300e2704"),
            w = a("1901e2d9"),
            x = a("c2a798c8"),
            f = a("10899aea"),
            b = a("34e32c48"),
            _ = a("6b42806d"),
            S = a("6bad552e"),
            k = a("6d494b5c"),
            v = a("ce29f17f"),
            z = (a("af8ba00f"), a("f398b7c7")),
            M = a("26be8056"),
            T = a("753d6e4b"),
            P = a("6e43d1d7"),
            I = S.Pose,
            C = S.Bones,
            A = function() {
                function e() {
                    i(this, e), this.gunBarrel = o(), this.gunMag = o(), this.container = new c.Container, this.container.addChild(this.gunBarrel), this.container.addChild(this.gunMag), this.container.rotation = .5 * Math.PI, this.container.visible = !1, this.magTop = !1
                }
                return l(e, [{
                    key: "setVisible",
                    value: function(e) {
                        this.container.visible = e
                    }
                }, {
                    key: "setType",
                    value: function(e, t) {
                        var a = m.items[e],
                            i = a.worldImg;
                        if (this.gunBarrel.texture = c.Texture.fromImage(i.sprite), this.gunBarrel.anchor.set(.5, 1), this.gunBarrel.position.set(0, 0), this.gunBarrel.scale.set(.5 * i.scale.x / t, .5 * i.scale.y / t), this.gunBarrel.tint = i.tint, this.gunBarrel.visible = !0, i.magImg) {
                            var r = i.magImg;
                            this.gunMag.texture = c.Texture.fromImage(r.sprite), this.gunMag.anchor.set(.5, .5), this.gunMag.position.set(r.pos.x, r.pos.y), this.gunMag.scale.set(.25, .25), this.gunMag.tint = 16777215, this.gunMag.visible = !0, r.top ? this.container.addChild(this.gunMag) : this.container.addChildAt(this.gunMag, 0)
                        } else this.gunMag.visible = !1;
                        this.magTop = i.magImg && i.magImg.top;
                        var o = x.create(-4.25, -1.75);
                        a.pistol && a.isDual && (o = a.isDual ? x.create(-5.95, 0) : x.create(-4.75, -1.75)), this.container.position.set(o.x, o.y)
                    }
                }]), e
            }();
        n.prototype = {
            o: function() {
                this.isNew = !1, this.wasInsideObstacle = !1, this.insideObstacleType = "", this.lastInsideObstacleTime = 0, this.lastSwapIdx = -1, this.actionSoundInstance = null, this.action = {
                    type: p.None,
                    seq: -1,
                    seqOld: -1,
                    item: "",
                    targetId: 0,
                    time: 0,
                    duration: 0,
                    throttleCount: 0,
                    throttleTicker: 0
                }, this.playAnim(d.None, -1), this.ie = {
                    pos: x.create(0, 0),
                    dir: x.create(1, 0),
                    skin: "",
                    backpack: "",
                    helmet: "",
                    chest: "",
                    curWeapType: "",
                    layer: 0,
                    dead: !1,
                    downed: !1,
                    wearingPan: !1,
                    frozen: !1,
                    frozenOri: 0,
                    hasStim: !1,
                    role: u.None
                }, this.re = {
                    health: 100,
                    boost: 0,
                    scopedIn: !1,
                    scope: "",
                    curWeapIdx: 0,
                    weapons: [],
                    inventory: [],
                    spectatorCount: 0
                }
            },
            n: function() {
                this.container.visible = !1, this.useItemEmitter && (this.useItemEmitter.stop(), this.useItemEmitter = null), this.useAbilityEmitter && (this.useAbilityEmitter.stop(), this.useAbilityEmitter = null)
            },
            l: function(e, t, a, i) {
                this.ie.pos = x.copy(e.pos), this.ie.dir = x.copy(e.dir), t && (this.ie.skin = e.skin, this.ie.backpack = e.backpack, this.ie.helmet = e.helmet, this.ie.chest = e.chest, this.ie.curWeapType = e.curWeapType, this.ie.layer = e.layer, this.ie.dead = e.dead, this.ie.downed = e.downed, this.ie.disconnected = e.disconnected, this.ie.wearingPan = e.wearingPan, this.ie.frozen = e.frozen, this.ie.frozenOri = e.frozenOri, this.ie.hasStim = e.hasStim, this.ie.role = e.role, e.animSeq != this.anim.seq && this.playAnim(e.animType, e.animSeq), this.action.type = e.actionType, this.action.seq = e.actionSeq, this.action.item = e.actionItem, this.visualsDirty = !0), a && (this.isNew = !0, this.renderLayer = this.ie.layer, this.renderZOrd = 18, this.renderZIdx = this.__id)
            },
            Xt: function(e, t) {
                var a = this.re.scope;
                if (this.re.health = e.health, this.re.scopedIn = e.scopedIn, e.boostDirty && (this.re.boost = e.boost), e.actionDirty && (this.action.time = e.action.time, this.action.duration = e.action.duration, this.action.targetId = e.action.targetId), e.inventoryDirty) {
                    this.re.scope = e.scope, this.re.inventory = {};
                    for (var i in m.bagSizes) m.bagSizes.hasOwnProperty(i) && (this.re.inventory[i] = e.inventory[i])
                }
                if (e.weapsDirty) {
                    this.re.curWeapIdx = e.curWeapIdx, this.re.weapons = [];
                    for (var r = 0; r < m.WeaponSlot.Count; r++) {
                        var o = {};
                        o.name = e.weapons[r].name, o.ammo = e.weapons[r].ammo, this.re.weapons.push(o)
                    }
                }
                e.spectatorCountDirty && (this.re.spectatorCount = e.spectatorCount), this.re.scope != a && (this.zoomFast = !0), this.re.scopedIn && (this.zoomFast = !1)
            },
            Lt: function() {
                return (v.mobile ? m.scopeZoomRadius.mobile : m.scopeZoomRadius.desktop)[this.ie.downed || this.re.scopedIn ? "1xscope" : this.re.scope]
            },
            ia: function() {
                return this.ie.helmet ? m.items[this.ie.helmet].level : 0
            },
            ra: function() {
                return this.ie.chest ? m.items[this.ie.chest].level : 0
            },
            oa: function() {
                return m.items[this.ie.backpack].level
            },
            na: function() {
                return m.items[this.ie.curWeapType].type
            },
            sa: function(e) {
                return "" !== this.re.weapons[e].name
            },
            hasActivePan: function() {
                return this.ie.wearingPan || "pan" == this.ie.curWeapType && this.currentAnim() != d.Melee
            },
            getPanSegment: function() {
                var e = this.ie.wearingPan ? "unequipped" : "equipped";
                return m.items.pan.reflectSurface[e]
            },
            c: function(e, t, a, i, r, o, n, s, l, c, y, b) {
                var k = m.items[this.ie.curWeapType],
                    v = this.__id == l,
                    z = t.ve(l);
                this.posOld = x.copy(this.pos), this.dirOld = x.copy(this.dir), this.pos = x.copy(this.ie.pos), this.dir = x.copy(this.ie.dir), this.layer = this.ie.layer, this.downed = this.ie.downed, this._ = !0, this.Ve = !0;
                var M = this.ie.role == u.FactionLeader || this.ie.role == u.WoodsKing ? 1.25 : 1;
                if (this.rad = M * m.player.radius, !f.eqAbs(this.rad, this.bodyRad)) {
                    var T = this.rad - this.bodyRad,
                        P = Math.abs(T) > 1e-4 ? T * e * 6 : T;
                    this.bodyRad += P, this.visualsDirty = !0
                }
                var C = this.weapType != this.ie.curWeapType;
                this.weapType = this.ie.curWeapType, this.lastThrowablePickupSfxTicker -= e, this.noCeilingRevealTicker -= e;
                var A = t.ne(l).groupId,
                    E = t.ne(this.__id),
                    D = E.groupId == A;
                this.nameText.text = E.name, this.nameText.visible = !v && D;
                for (var O = null, B = null, L = a.pe.m(), R = 0; R < L.length; R++) {
                    var F = L[R];
                    if (F.active && !F.dead && F.layer == this.ie.layer)
                        if (F.isBush) {
                            var j = .25 * this.rad;
                            _.intersectCircle(F.collider, this.pos, j) && (O = F)
                        } else if (F.isDoor && !F.door.open && F.door.playErrorFx) {
                        var q = this.rad + .25,
                            N = x.rotate(x.create(1, 0), F.rot),
                            V = x.sub(F.pos, this.pos);
                        x.dot(V, N) < 0 && _.intersectCircle(F.collider, this.pos, q) && (B = F)
                    }
                }
                var G = null != O;
                if (G && (this.insideObstacleType = O.type), this.lastInsideObstacleTime -= e, this.wasInsideObstacle != G && this.lastInsideObstacleTime < 0 && !this.isNew) {
                    var U = g.Defs[this.insideObstacleType];
                    this.lastInsideObstacleTime = .2, i.playSound(U.sound.enter, {
                        channel: "sfx",
                        soundPos: this.pos,
                        falloff: 1,
                        layer: this.layer,
                        muffled: !0
                    });
                    for (var H = x.normalizeSafe(x.sub(this.posOld, this.pos), x.create(1, 0)), W = G ? 1 : -1, K = Math.floor(w.random(3, 5)), Z = 0; Z < K; Z++) {
                        var X = x.mul(x.rotate(x.mul(H, W), (Math.random() - .5) * Math.PI / 1.5), w.random(6, 8));
                        r.addParticle(U.hitParticle, this.layer, this.pos, X)
                    }
                }
                this.wasInsideObstacle = G;
                var Y = this.isNearDoorError;
                if (this.isNearDoorError = null != B, this.doorErrorTicker -= e, this.isNearDoorError && !Y && this.doorErrorTicker <= 0) {
                    this.doorErrorTicker = .5;
                    var J = g.Defs[B.type],
                        Q = J.door.sound.error;
                    i.playSound(Q, {
                        channel: "sfx",
                        soundPos: this.pos,
                        falloff: 1,
                        layer: this.layer,
                        muffled: !0
                    })
                }
                var $ = a.getGroundSurface(this.pos, this.layer);
                this.isOnBrightSurface = 1 == this.layer && "tile" == $.type;
                var ee = "water" == $.type;
                if (this.updateSubmersion(e, ee, $.river, a), this.updateFrozenState(e), this.ie.dead || (this.stepDistance += x.length(x.sub(this.posOld, this.pos)), this.stepDistance > 5 && ee || ee && !this.wasInWater ? (this.stepDistance = 0, r.addRippleParticle(this.pos, this.layer), i.playGroup("footstep_water", {
                        soundPos: this.pos,
                        fallOff: 3,
                        layer: this.layer,
                        muffled: !0
                    })) : this.stepDistance > 4 && !ee && (this.stepDistance = 0, i.playGroup("footstep_" + $.type, {
                        soundPos: this.pos,
                        fallOff: 3,
                        layer: this.layer,
                        muffled: !0
                    })), this.wasInWater = ee), this.bleedTicker -= e, this.ie.downed && !this.ie.dead && this.action.type == p.None && this.bleedTicker < 0) {
                    this.bleedTicker = m.player.bleedTickRate;
                    var te = x.rotate(x.mul(this.dir, -1), (Math.random() - .5) * Math.PI / 3);
                    te.y *= -1, r.addParticle("bloodSplat", this.renderLayer, x.create(0, 0), x.mul(te, n.ppu), 1, Math.random() * Math.PI * 2, this.container, this.renderZOrd + 1), y || i.playSound("player_bullet_hit_02", {
                        channel: "hits",
                        soundPos: this.pos,
                        fallOff: 3,
                        layer: this.layer,
                        muffled: !0
                    })
                }
                if (this.gunSwitchCooldown -= e, this.fireDelay -= e, v && (C || this.lastSwapIdx != this.re.curWeapIdx)) {
                    var ae = this.lastSwapIdx;
                    this.lastSwapIdx = this.re.curWeapIdx;
                    var ie = m.items[this.weapType];
                    if ("melee" == ie.type || "throwable" == ie.type)("throwable" != ie.type || this.lastThrowablePickupSfxTicker <= 0) && i.playSound(ie.sound.deploy, {
                        channel: "sfx",
                        soundPos: this.pos,
                        fallOff: 3
                    });
                    else if ("gun" == ie.type) {
                        var re = "gun_switch_01",
                            oe = !1;
                        if ((0 == ae || 1 == ae) && (0 == this.lastSwapIdx || 1 == this.lastSwapIdx) && this.fireDelay > 0) {
                            var ne = m.items[this.re.weapons[ae].name];
                            ie && ne && void 0 !== ie.deployGroup && void 0 !== ne.deployGroup && ie.deployGroup == ne.deployGroup && (oe = !0)
                        }
                        this.gunSwitchCooldown > 0 || oe ? re = ie.sound.deploy : this.gunSwitchCooldown = m.player.freeSwitchCooldown, i.stopSound(this.cycleSoundInstance), this.cycleSoundInstance = i.playSound(re, {
                            channel: "activePlayer"
                        }), this.fireDelay = 0
                    }
                }
                if (i.isSoundPlaying(this.cycleSoundInstance) || (this.cycleSoundInstance = null), this.action.seq == this.action.seqOld || this.isNew || this.playActionStartEffect(v, r, i), this.action.seqOld = this.action.seq, this.action.throttleTicker -= e, this.action.throttleTicker < 0 && this.action.throttleCount > 0 && (this.action.throttleCount--, this.action.throttleTicker = .25), i.isSoundPlaying(this.actionSoundInstance) || (this.actionSoundInstance = null), this.actionSoundInstance && !v && i.updateSound(this.actionSoundInstance, "otherPlayers", this.pos, {
                        layer: this.layer,
                        fallOff: 2,
                        muffled: !0
                    }), this.action.type == p.UseItem) {
                    var se = m.items[this.action.item],
                        le = se.emitter;
                    !le || this.useItemEmitter && this.useItemEmitter.type == le || (this.useItemEmitter && this.useItemEmitter.stop(), this.useItemEmitter = r.addEmitter(le, this.pos, x.create(0, 1), 1, this.layer, Number.MAX_VALUE, null))
                }
                if (this.useItemEmitter && this.action.type != p.UseItem && (this.useItemEmitter.stop(), this.useItemEmitter = null), this.useItemEmitter && (this.useItemEmitter.pos = x.add(this.pos, x.create(0, .1)), this.useItemEmitter.layer = this.renderLayer, this.useItemEmitter.zOrd = this.renderZOrd + 1), this.ie.hasStim && !this.useAbilityEmitter ? this.playAbilityEffect("ability_stim", this.isNew, i, r) : !this.ie.hasStim && this.useAbilityEmitter && (this.useAbilityEmitter.stop(), this.useAbilityEmitter = null), this.useAbilityEmitter && (this.useAbilityEmitter.pos = x.add(this.pos, x.create(0, .1)), this.useAbilityEmitter.layer = this.renderLayer, this.useAbilityEmitter.zOrd = this.renderZOrd + 1), v && !b) {
                    var ce = this.re.curWeapIdx,
                        me = this.re.weapons[ce],
                        pe = m.items[me.name];
                    if (!this.playedDryFire && "gun" == this.na() && (o.isBindPressed(h.Fire) || o.isBindDown(h.Fire) && "auto" == pe.fireMode) && this.action.type == p.None && !c) {
                        var de = this.re.inventory[pe.ammo],
                            he = me.ammo;
                        0 === de && 0 === he && (i.playSound(pe.sound.empty), this.playedDryFire = !0)
                    }
                    o.isBindDown(h.Fire) || (this.playedDryFire = !1)
                }
                this.gunRecoilL = f.max(0, this.gunRecoilL - this.gunRecoilL * e * 5 - e), this.gunRecoilR = f.max(0, this.gunRecoilR - this.gunRecoilR * e * 5 - e);
                var ue = {
                    playerBarn: t,
                    map: a,
                    audioManager: i,
                    particleBarn: r
                };
                this.updateAnim(e, ue), this.currentAnim() == d.None && (this.throwableState = "equip"), this.currentAnim() != d.Cook && this.currentAnim() != d.Throw || "throwable" == k.type || this.playAnim(d.None, this.anim.seq);
                for (var ge = this.selectIdlePose(), ye = S.IdlePoses[ge], we = 0; we < this.bones.length; we++) {
                    var xe = we,
                        fe = ye[xe] || I.identity,
                        be = this.anim.bones[xe];
                    be.weight > 0 ? this.bones[we].copy(I.lerp(be.weight, fe, be.pose)) : this.bones[we].copy(fe)
                }(this.visualsDirty || this.throwableStatePrev != this.throwableState) && this.la(t, a), this.visualsDirty = !1, this.throwableStatePrev = this.throwableState, this.ca(), this.ma(v, z, a), s.addPIXIObj(this.container, this.renderLayer, this.renderZOrd, this.renderZIdx), this.isNew = !1
            },
            jt: function(e, t) {
                var a = e.pointToScreen(this.pos),
                    i = e.pixels(1);
                this.container.position.set(a.x, a.y), this.container.scale.set(i, i), this.container.visible = !this.ie.dead
            },
            ma: function(e, t, a) {
                for (var i = _.createCircle(this.pos, m.player.maxVisualRadius), r = !1, o = !1, n = !1, s = a.Tt.m(), l = 0; l < s.length; l++) {
                    var c = s[l];
                    if (c.active) {
                        for (var p = 0; p < c.stairs.length; p++) {
                            var d = c.stairs[p],
                                h = _.intersect(d.collision, i);
                            if (h) {
                                o = !0;
                                var u = x.add(d.center, x.mul(d.downDir, -3)),
                                    g = x.sub(u, this.pos),
                                    y = x.length(g);
                                g = y > 1e-4 ? x.div(g, y) : x.create(1, 0), n = k.intersectSegmentDist(a.pe.m(), this.pos, g, y, .5, this.layer, !1) < y
                            }
                            e && d.noCeilingReveal && h && 0 != this.layer && (this.noCeilingRevealTicker = .25)
                        }
                        for (var w = 0; w < c.mask.length; w++)
                            if (_.intersect(c.mask[w], i)) {
                                r = !0;
                                break
                            }
                    }
                }
                var f = this.layer,
                    b = 18;
                o && (1 & f && (1 & t.layer || !n) || 2 & t.layer && !r) && (f |= 2), !o || (1 & f) != (1 & t.layer) || r && 0 != t.layer || (f |= 2, b += 100);
                var S = this.__id + (this.ie.downed ? 0 : 262144) + (e ? 65536 : 0) + (this.rad > 1 ? 131072 : 0);
                this.renderLayer = f, this.renderZOrd = b, this.renderZIdx = S
            },
            la: function(e, t) {
                var a = m.items[this.ie.skin],
                    i = a.skinImg,
                    r = this.bodyRad / m.player.radius;
                if (this.bodySprite.texture = c.Texture.fromImage(i.baseSprite), this.bodySprite.tint = i.baseTint, this.bodySprite.scale.set(.25, .25), this.bodySprite.visible = !0, this.ie.frozen && this.updateFrozenImage) {
                    var o = t.getMapDef().biome.frozenSprites;
                    console.log(o);
                    var n = o[Math.floor(Math.random() * o.length)],
                        s = g.oriToRad(this.ie.frozenOri) + .5 * Math.PI + (Math.random() - .5) * Math.PI * .25;
                    this.bodyEffectSprite.texture = c.Texture.fromImage(n), this.bodyEffectSprite.rotation = s, this.bodyEffectSprite.tint = 16777215, this.bodyEffectSprite.scale.set(.25, .25), this.updateFrozenImage = !1
                }
                if (t.factionMode && !a.camo) {
                    var l = e.ne(this.__id),
                        p = l.teamId,
                        h = ["player-patch-01.img", "player-patch-02.img"],
                        u = (p - 1) % h.length,
                        y = h[u],
                        w = m.teamColors[u],
                        x = g.oriToRad(3) + .5 * Math.PI;
                    this.patchSprite.texture = c.Texture.fromImage(y), this.patchSprite.rotation = x, this.patchSprite.tint = w, this.patchSprite.scale.set(.25, .25), this.patchSprite.visible = !0
                } else this.patchSprite.visible = !1;
                var b = function(e, t, a) {
                    e.texture = c.Texture.fromImage(t), e.scale.set(.35, .35), e.tint = a, e.visible = !0
                };
                b(this.handLSprite, i.handSprite, i.handTint), b(this.handRSprite, i.handSprite, i.handTint);
                var _ = function(e, t, a) {
                    e.texture = c.Texture.fromImage("player-feet-01.img"), e.scale.set(.45, .45), e.rotation = .5 * Math.PI, e.tint = t, e.visible = a
                };
                if (_(this.footLSprite, i.footTint, this.downed), _(this.footRSprite, i.footTint, this.downed), "" == this.ie.chest || a.camo) this.chestSprite.visible = !1;
                else {
                    var S = m.items[this.ie.chest],
                        k = S.skinImg;
                    this.chestSprite.texture = c.Texture.fromImage(k.baseSprite), this.chestSprite.scale.set(.25, .25), this.chestSprite.tint = k.baseTint, this.chestSprite.visible = !0
                }
                if ("" == this.ie.helmet || a.camo) this.helmetSprite.visible = !1;
                else {
                    var v = m.items[this.ie.helmet],
                        z = v.skinImg,
                        M = 3.33 * (this.downed ? 1 : -1);
                    this.helmetSprite.texture = c.Texture.fromImage(z.baseSprite), this.helmetSprite.position.set(M, 0), z.spriteScale ? this.helmetSprite.scale.set(z.spriteScale, z.spriteScale) : this.helmetSprite.scale.set(.15, .15);
                    var T = z.baseTint;
                    t.factionMode && (T = 1 == e.ne(this.__id).teamId ? z.baseTintRed : z.baseTintBlue), this.helmetSprite.tint = T, this.helmetSprite.visible = !0
                }
                if (this.oa() > 0 && !a.camo && !this.downed) {
                    var P = (m.items[this.ie.backpack], [10.25, 11.5, 12.75]),
                        I = this.oa(),
                        C = P[f.min(I - 1, P.length - 1)],
                        A = .5 * (.4 + .03 * I);
                    this.backpackSprite.texture = c.Texture.fromImage("player-circle-base-01.img"), this.backpackSprite.position.set(-C, 0), this.backpackSprite.scale.set(A, A), this.backpackSprite.tint = i.backpackTint, this.backpackSprite.visible = !0,
                        function(e, t, a) {
                            e.texture = c.Texture.fromImage(t), e.tint = a
                        }(this.backpackSprite, i.backpackSprite, i.backpackTint)
                } else this.backpackSprite.visible = !1;
                if (this.ie.wearingPan) {
                    var E = m.items.pan.hipImg;
                    this.hipSprite.texture = c.Texture.fromImage(E.sprite), this.hipSprite.position.set(E.pos.x, E.pos.y), this.hipSprite.scale.set(E.scale.x, E.scale.y), this.hipSprite.rotation = E.rot, this.hipSprite.tint = E.tint, this.hipSprite.visible = !0
                } else this.hipSprite.visible = !1;
                var D = m.items[this.ie.curWeapType];
                if ("gun" == D.type) {
                    this.gunRSprites.setType(this.ie.curWeapType, r), this.gunRSprites.setVisible(!0), D.isDual ? (this.gunLSprites.setType(this.ie.curWeapType, r), this.gunLSprites.setVisible(!0)) : this.gunLSprites.setVisible(!1);
                    var O = this.bodyContainer.getChildIndex(this.handRContainer),
                        B = O + 1;
                    this.gunRSprites.magTop && (B = O - 1), B = f.max(B, 0), this.bodyContainer.getChildIndex(this.handLContainer) != B && this.bodyContainer.addChildAt(this.handLContainer, B)
                } else this.gunLSprites.setVisible(!1), this.gunRSprites.setVisible(!1);
                if (this.downed != this.wasDowned)
                    if (this.wasDowned = this.downed, this.downed) {
                        var L = this.bodyContainer.getChildIndex(this.footLContainer);
                        this.bodyContainer.addChildAt(this.handLContainer, L), this.bodyContainer.addChildAt(this.handRContainer, L)
                    } else this.bodyContainer.addChild(this.handLContainer), this.bodyContainer.addChild(this.handRContainer);
                if ("melee" == D.type && "fists" != this.ie.curWeapType) {
                    var R = D.worldImg;
                    this.meleeSprite.texture = c.Texture.fromImage(R.sprite), this.meleeSprite.pivot.set(-R.pos.x, -R.pos.y), this.meleeSprite.scale.set(R.scale.x / r, R.scale.y / r), this.meleeSprite.rotation = R.rot, this.meleeSprite.tint = R.tint, this.meleeSprite.visible = !0;
                    var F = this.handRContainer.getChildIndex(this.handRSprite),
                        j = f.max(R.renderOnHand ? F + 1 : F - 1, 0);
                    this.handRContainer.getChildIndex(this.meleeSprite) != j && this.handRContainer.addChildAt(this.meleeSprite, j);
                    var q = this.bodyContainer.getChildIndex(this.handRContainer),
                        N = f.max(R.leftHandOntop ? q + 1 : q - 1, 0);
                    this.bodyContainer.getChildIndex(this.handLContainer) != N && this.bodyContainer.addChildAt(this.handLContainer, N)
                } else this.meleeSprite.visible = !1;
                if ("throwable" == D.type) {
                    var V = function(e, t) {
                            t.sprite && "none" != t.sprite ? (e.texture = c.Texture.fromImage(t.sprite), e.position.set(t.pos.x, t.pos.y), e.scale.set(t.scale, t.scale), e.rotation = .5 * Math.PI, e.visible = !0) : e.visible = !1
                        },
                        G = D.handImg[this.throwableState];
                    V(this.objectLSprite, G.left), V(this.objectRSprite, G.right)
                } else this.objectLSprite.visible = !1, this.objectRSprite.visible = !1;
                (this.downed || this.currentAnim() == d.Revive) && (this.gunLSprites.setVisible(!1), this.gunRSprites.setVisible(!1), this.meleeSprite.visible = !1, this.objectLSprite.visible = !1, this.objectRSprite.visible = !1), this.downed && (this.backpackSprite.visible = !1);
                for (var U = [this.bodySubmergeSprite, this.handLSubmergeSprite, this.handRSubmergeSprite, this.footLSubmergeSprite, this.footRSubmergeSprite], H = t.getMapDef().biome.colors.playerSubmerge, W = 0; W < U.length; W++) U[W].tint = H;
                this.bodyContainer.scale.set(r, r)
            },
            ca: function() {
                var e = function(e, t) {
                    e.position.set(t.pos.x, t.pos.y), e.pivot.set(-t.pivot.x, -t.pivot.y), e.rotation = t.rot
                };
                e(this.handLContainer, this.bones[C.HandL]), e(this.handRContainer, this.bones[C.HandR]), e(this.footLContainer, this.bones[C.FootL]), e(this.footRContainer, this.bones[C.FootR]);
                var t = m.items[this.ie.curWeapType];
                !this.downed && this.currentAnim() != d.Revive && "gun" == t.type && t.worldImg.leftHandOffset && (this.handLContainer.position.x += t.worldImg.leftHandOffset), this.handLContainer.position.x -= 1.125 * this.gunRecoilL, this.handRContainer.position.x -= 1.125 * this.gunRecoilR, this.bodyContainer.rotation = -Math.atan2(this.dir.y, this.dir.x)
            },
            playAbilityEffect: function(e, t, a, i) {
                var r = m.abilities[e];
                if (r) {
                    t || a.playSound(r.sound.effect, {
                        channel: "sfx",
                        soundPos: this.pos,
                        fallOff: 1,
                        layer: this.layer,
                        muffled: !0
                    });
                    var o = r.emitter;
                    !o || this.useAbilityEmitter && this.useAbilityEmitter.type == o || (this.useAbilityEmitter && this.useAbilityEmitter.stop(), this.useAbilityEmitter = i.addEmitter(o, this.pos, x.create(0, .1), 1, this.layer, Number.MAX_VALUE, null))
                }
            },
            playActionStartEffect: function(e, t, a) {
                if (!e && this.action.type != p.None) {
                    if (this.action.throttleTicker = .5, !(this.action.throttleCount < 5)) return;
                    this.action.throttleCount++
                }
                var i = {};
                switch (this.action.type) {
                    case p.Reload:
                    case p.ReloadAlt:
                        var r = m.items[this.action.item];
                        r && (i = {
                            sound: this.action.type == p.ReloadAlt ? r.sound.reloadAlt : r.sound.reload,
                            channel: e ? "activePlayer" : "otherPlayers"
                        });
                        break;
                    case p.UseItem:
                        var o = m.items[this.action.item];
                        o && (i = {
                            sound: o.sound.use,
                            channel: e ? "activePlayer" : "otherPlayers"
                        })
                }
                if (a.stopSound(this.actionSoundInstance), i.sound && (this.actionSoundInstance = a.playSound(i.sound, {
                        channel: i.channel,
                        soundPos: this.pos,
                        fallOff: 2,
                        layer: this.layer,
                        muffled: !0
                    })), this.action.type == p.Reload || this.action.type == p.ReloadAlt) {
                    var n = m.items[this.action.item];
                    if (n && "reload" == n.caseTiming)
                        for (var s = 0; s < n.maxReload; s++) {
                            var l = s % 2 == 0 ? -1 : 1,
                                c = Math.PI + Math.PI / 4 * l,
                                d = n.maxReload <= 2 ? 1 : f.lerp(Math.random(), .8, 1.2);
                            P.createCasingParticle(this.action.item, c, d, this.pos, this.dir, this.renderLayer, this.renderZOrd + 1, t)
                        }
                }
            },
            selectIdlePose: function() {
                var e = m.items[this.ie.curWeapType],
                    t = "fists";
                return t = this.downed ? "downed" : e.anim && e.anim.idlePose ? e.anim.idlePose : "gun" == e.type ? e.pistol ? e.isDual ? "dualPistol" : "pistol" : "rifle" : "throwable" == e.type ? "throwable" : "fists", S.IdlePoses[t] ? t : "fists"
            },
            selectAnim: function(e) {
                var t = function(e, t) {
                    return {
                        name: e,
                        mirror: !!t && Math.random() < .5
                    }
                };
                switch (e) {
                    case d.None:
                        return t("none", !1);
                    case d.Cook:
                        return t("cook", !1);
                    case d.Throw:
                        return t("throw", !1);
                    case d.Revive:
                        return t("revive", !1);
                    case d.CrawlForward:
                        return t("crawl_forward", !0);
                    case d.CrawlBackward:
                        return t("crawl_backward", !0);
                    case d.Melee:
                        var a = m.items[this.ie.curWeapType];
                        if (!a.anim || !a.anim.attackAnims) return t("fists", !0);
                        var i = a.anim.attackAnims,
                            r = Math.floor(Math.random() * i.length),
                            o = i[r];
                        return t(o, "fists" == o && 1 == i.length);
                    default:
                        return t("none", !1)
                }
            },
            currentAnim: function() {
                return this.anim.type
            },
            playAnim: function(e, t) {
                this.anim.type = e, this.anim.data = this.selectAnim(e), this.anim.seq = t, this.anim.ticker = 0;
                for (var a = 0; a < this.bones.length; a++) {
                    var i = this.anim.bones[a];
                    i.weight = 0, i.pose.copy(this.bones[a])
                }
            },
            updateAnim: function(e, t) {
                if ("none" == this.anim.data.name && this.playAnim(d.None, this.anim.seq), this.currentAnim() != d.None) {
                    var a = this.anim.ticker;
                    this.anim.ticker += 1 * e;
                    for (var i = S.Animations[this.anim.data.name], r = i.keyframes, o = this.anim.ticker, n = -1, s = 0; o >= r[s].time && s < r.length - 1;) o -= r[s].time, n++, s++;
                    n = f.max(n, 0);
                    for (var l = f.min(o / r[s].time, 1), c = r[n].bones, m = r[s].bones, p = this.anim.data.mirror, h = 0; h < this.anim.bones.length; h++) {
                        var u = this.anim.bones[h],
                            g = h;
                        p && (g = h % 2 == 0 ? h + 1 : h - 1), void 0 !== c[g] && void 0 !== m[g] && (u.weight = n == s ? l : 1, u.pose.copy(I.lerp(l, c[g], m[g])), p && (u.pose.pos.y *= -1, u.pose.pivot.y *= -1, u.pose.rot *= -1))
                    }
                    var y = s == r.length - 1 && f.eqAbs(l, 1),
                        w = this.anim.ticker;
                    y && (w += 1);
                    for (var x = 0; x < i.effects.length; x++) {
                        var b = i.effects[x];
                        b.time >= a && b.time < w && this[b.fn].apply(this, [t, b.args])
                    }
                    y && this.playAnim(d.None, this.anim.seq)
                }
            },
            animPlaySound: function(e, t) {
                var a = m.items[this.ie.curWeapType],
                    i = a.sound[t.sound];
                i && e.audioManager.playSound(i, {
                    channel: "sfx",
                    soundPos: this.pos,
                    fallOff: 3,
                    layer: this.layer,
                    muffled: !0
                })
            },
            animSetThrowableState: function(e, t) {
                this.throwableState = t.state
            },
            animThrowableParticles: function(e, t) {
                if (m.items[this.ie.curWeapType].useThrowParticles) {
                    var a = x.rotate(x.create(.75, .75), Math.atan2(this.dir.y, this.dir.x));
                    e.particleBarn.addParticle("fragPin", this.renderLayer, x.add(this.pos, a), x.mul(x.rotate(this.dir, .5 * Math.PI), 4.5), 1, Math.random() * Math.PI * 2, null, this.renderZOrd + 1);
                    var i = x.rotate(x.create(.75, -.75), Math.atan2(this.dir.y, this.dir.x));
                    e.particleBarn.addParticle("fragLever", this.renderLayer, x.add(this.pos, i), x.mul(x.rotate(this.dir, .25 * -Math.PI), 3.5), 1, Math.random() * Math.PI * 2, null, this.renderZOrd + 1)
                }
            },
            animMeleeCollision: function(e, t) {
                var a = m.items[this.ie.curWeapType];
                if (a && "melee" == a.type && a.attackOffset) {
                    for (var i = Math.atan2(this.dir.y, this.dir.x), r = x.add(this.pos, x.rotate(a.attackOffset, i)), o = a.attackRad, n = o + x.length(a.attackOffset), s = [], l = e.map.pe.m(), c = 0; c < l.length; c++) {
                        var p = l[c];
                        if (!(!p.active || p.dead || p.height < m.player.meleeHeight) && w.sameLayer(p.layer, 1 & this.layer)) {
                            var d = _.intersectCircle(p.collider, r, o);
                            if (a.cleave || a.wallCheck) {
                                var h = x.normalizeSafe(x.sub(p.pos, this.pos), x.create(1, 0)),
                                    u = k.intersectSegment(e.map.pe.m(), this.pos, h, n, 1, this.layer, !1);
                                u && u.id !== p.__id && (d = null)
                            }
                            if (d) {
                                var y = g.Defs[p.type],
                                    S = x.add(r, x.mul(x.neg(d.dir), o - d.pen)),
                                    v = x.rotate(x.mul(d.dir, 7.5), (Math.random() - .5) * Math.PI / 3);
                                s.push({
                                    pen: d.pen,
                                    prio: 1,
                                    pos: S,
                                    vel: v,
                                    layer: this.renderLayer,
                                    zOrd: this.renderZOrd,
                                    particle: y.hitParticle,
                                    sound: y.sound.punch,
                                    soundFn: "playGroup"
                                })
                            }
                        }
                    }
                    for (var z = e.playerBarn.ne(this.__id).teamId, M = e.playerBarn.Se.m(), T = 0; T < M.length; T++) {
                        var P = M[T];
                        if (P.active && P.__id != this.__id && !P.ie.dead && w.sameLayer(P.layer, this.layer)) {
                            var I = x.normalizeSafe(x.sub(P.pos, this.pos), x.create(1, 0)),
                                C = b.intersectCircleCircle(r, o, P.pos, P.rad);
                            if (C && f.eqAbs(n, k.intersectSegmentDist(e.map.pe.m(), this.pos, I, n, m.player.meleeHeight, this.layer, !1))) {
                                var A = e.playerBarn.ne(P.__id).teamId,
                                    E = x.rotate(I, (Math.random() - .5) * Math.PI / 3);
                                s.push({
                                    pen: C.pen,
                                    prio: A == z ? 2 : 0,
                                    pos: x.copy(P.pos),
                                    vel: E,
                                    layer: P.renderLayer,
                                    zOrd: P.renderZOrd,
                                    particle: "bloodSplat",
                                    sound: a.sound.playerHit,
                                    soundFn: "playSound"
                                })
                            }
                        }
                    }
                    s.sort(function(e, t) {
                        return e.prio == t.prio ? t.pen - e.pen : e.prio - t.prio
                    });
                    var D = s.length;
                    a.cleave || (D = f.min(D, 1));
                    for (var O = 0; O < D; O++) {
                        var B = s[O];
                        e.particleBarn.addParticle(B.particle, B.layer, B.pos, B.vel, 1, Math.random() * Math.PI * 2, null, B.zOrd + 1), e.audioManager[B.soundFn](B.sound, {
                            channel: "hits",
                            soundPos: B.pos,
                            layer: this.layer,
                            muffled: !0
                        })
                    }
                }
            },
            initSubmergeSprites: function() {
                var e = function(e, t) {
                    e.texture = c.Texture.fromImage(t), e.anchor.set(.5, .5), e.tint = 16777215, e.alpha = 0, e.visible = !1
                };
                e(this.bodySubmergeSprite, "player-wading-01.img"), e(this.handLSubmergeSprite, "player-hands-01.img"), e(this.handRSubmergeSprite, "player-hands-01.img"), e(this.footLSubmergeSprite, "player-feet-01.img"), e(this.footRSubmergeSprite, "player-feet-01.img");
                var t = new c.Graphics;
                t.beginFill(16711680, .5), t.drawCircle(0, 0, 76 * .1), t.position.set(0, 0), this.bodySubmergeSprite.addChild(t), this.bodySubmergeSprite.mask = t, this.bodySubmergeSprite.scale.set(.5, .5)
            },
            updateSubmersion: function(e, t, a, i) {
                var r = 0;
                if (t) {
                    var o = a && !i.isInOcean(this.pos),
                        n = o ? a.distanceToShore(this.pos) : i.distanceToShore(this.pos),
                        s = o ? 12 : 16;
                    r = f.remap(n, 0, s, .6, 1)
                }
                this.submersion = f.lerp(4 * e, this.submersion, r);
                var l = .8 * this.submersion,
                    c = 2 * (.9 - .4 * this.submersion),
                    m = 1 / (.1 * c);
                this.bodySubmergeSprite.scale.set(c, c), this.bodySubmergeSprite.mask.scale.set(m, m), this.bodySubmergeSprite.alpha = l, this.bodySubmergeSprite.visible = l > .001;
                for (var p = [this.handLSubmergeSprite, this.handRSubmergeSprite, this.footLSubmergeSprite, this.footRSubmergeSprite], d = 0; d < p.length; d++) p[d].alpha = this.downed ? l : 0, p[d].visible = p[d].alpha > .001
            },
            updateFrozenState: function(e) {
                this.ie.frozen ? this.frozenTicker = .25 : (this.frozenTicker -= e, this.updateFrozenImage = !0), this.bodyEffectSprite.alpha = this.ie.frozen ? 1 : f.remap(this.frozenTicker, 0, .25, 0, 1), this.bodyEffectSprite.visible = this.frozenTicker > 0
            },
            addRecoil: function(e, t, a) {
                t && (this.gunRecoilL += e), a && (this.gunRecoilR += e)
            },
            isUnderground: function(e) {
                if (1 != this.layer) return !1;
                for (var t = e.Tt.m(), a = 0; a < t.length; a++) {
                    var i = t[a];
                    if (!(i.layers.length < 2)) {
                        var r = i.layers[1];
                        if (_.intersectCircle(r.collision, this.pos, this.rad)) return r.underground
                    }
                }
                return !0
            }
        }, s.prototype = {
            onMapLoad: function(e) {},
            c: function(e, t, a, i, r, o, n, s, l, c, m, p) {
                for (var d = this.Se.m(), h = 0; h < d.length; h++) {
                    var g = d[h];
                    g.active && g.c(e, this, n, l, r, s, o, i, t, c, m, p)
                }
                var w = this.ne(t),
                    b = this.ve(t);
                this.pa(t, {
                    pos: x.copy(b.ie.pos),
                    health: b.re.health,
                    disconnected: !1,
                    dead: b.ie.dead,
                    downed: b.ie.downed,
                    factionLeader: b.ie.role == u.FactionLeader,
                    visible: !0
                });
                for (var _ = y.getPlayerStatusUpdateRate(n.teamMode, n.factionMode), S = Object.keys(this.playerStatus), k = 0; k < S.length; k++) {
                    var v = this.playerStatus[S[k]],
                        z = v.playerId,
                        M = this.ne(z),
                        T = this.ve(z);
                    T ? (v.posDelta = x.length(x.sub(T.ie.pos, v.pos)), v.posTarget = x.copy(T.ie.pos), v.posInterp = f.clamp(v.posInterp + .2 * e, e / _, 1), v.dead = T.ie.dead, v.downed = T.ie.downed) : v.posInterp = e / _;
                    var P = x.sub(v.posTarget, v.pos),
                        I = x.length(P),
                        C = I > 1e-4 ? x.div(P, I) : x.create(1, 0),
                        A = f.min(I, v.posDelta * v.posInterp);
                    v.pos = x.add(v.pos, x.mul(C, A)), v.timeSinceVisible += e, v.timeSinceUpdate += e;
                    var E = v.dead && (M.teamId == w.teamId || v.factionLeader) ? .6 : 0;
                    v.minimapAlpha = f.smoothstep(v.timeSinceVisible, 0, .1) * f.lerp(f.smoothstep(v.timeSinceUpdate, 2, 2.5), 1, E), n.factionMode || M.teamId == w.teamId || (v.minimapAlpha = 0), v.minimapVisible = v.minimapAlpha > .01
                }
            },
            render: function(e, t) {
                for (var a = this.Se.m(), i = 0; i < a.length; i++) {
                    var r = a[i];
                    r.active && r.jt(e, t)
                }
            },
            ve: function(e) {
                for (var t = this.Se.m(), a = 0; a < t.length; a++) {
                    var i = t[a];
                    if (i.active && i.__id === e) return i
                }
                return null
            },
            Ut: function(e) {
                this.aa[e.playerId] = {
                    playerId: e.playerId,
                    teamId: e.teamId,
                    groupId: e.groupId,
                    name: e.name,
                    nameTruncated: M.truncateString(e.name || "", "bold 16px arial", 180),
                    anonName: "Player" + (e.playerId - 2750)
                }, this.playerIds.push(e.playerId), this.playerIds.sort(function(e, t) {
                    return e - t
                })
            },
            Ht: function(e) {
                var t = this.playerIds.indexOf(e); - 1 !== t && this.playerIds.splice(t, 1), delete this.aa[e], delete this.playerStatus[e]
            },
            ne: function(e) {
                return this.aa[e] || {
                    playerId: 0,
                    groupId: 0,
                    teamId: 0,
                    name: "unknown"
                }
            },
            Wt: function() {
                this.teamInfo = {}, this.groupInfo = {};
                for (var e = Object.keys(this.aa), t = 0; t < e.length; t++) {
                    var a = this.aa[e[t]],
                        i = a.playerId,
                        r = a.teamId;
                    this.teamInfo[r] = this.teamInfo[r] || {
                        teamId: r,
                        playerIds: []
                    }, this.teamInfo[r].playerIds.push(i);
                    var o = a.groupId;
                    this.groupInfo[o] = this.groupInfo[o] || {
                        groupId: o,
                        playerIds: []
                    }, this.groupInfo[o].playerIds.push(i)
                }
                for (var n = Object.keys(this.teamInfo), s = 0; s < n.length; s++) this.teamInfo[n[s]].playerIds.sort(function(e, t) {
                    return e - t
                });
                for (var l = Object.keys(this.groupInfo), c = 0; c < l.length; c++) this.groupInfo[l[c]].playerIds.sort(function(e, t) {
                    return e - t
                })
            },
            getTeamInfo: function(e) {
                return this.teamInfo[e]
            },
            getGroupInfo: function(e) {
                return this.groupInfo[e]
            },
            Kt: function(e, t, a) {
                var i = this.getTeamInfo(e),
                    r = a ? this.playerIds : i.playerIds;
                if (r.length != t.players.length) return void z.logError("PlayerIds and playerStatus.players out of sync. OurLen: " + r.length + " MsgLen: " + t.players.length + " FactionMode: " + a);
                for (var o = 0; o < r.length; o++) {
                    var n = r[o],
                        s = t.players[o];
                    s.hasData && this.pa(n, s)
                }
            },
            pa: function(e, t) {
                var a = this.playerStatus[e] || {
                    playerId: e,
                    pos: x.copy(t.pos),
                    posTarget: x.copy(t.pos),
                    posDelta: x.create(0, 0),
                    health: 100,
                    posInterp: 0,
                    visible: !1,
                    dead: !1,
                    downed: !1,
                    disconnected: !1,
                    factionLeader: !1,
                    timeSinceUpdate: 0,
                    timeSinceVisible: 0,
                    minimapAlpha: 0,
                    minimapVisible: !1
                };
                a.visible, a.minimapVisible || (a.pos = x.copy(t.pos), !a.visible && t.visible && (a.timeSinceVisible = 0)), a.visible = t.visible, a.visible && (a.timeSinceUpdate = 0), a.posTarget = x.copy(t.pos), a.posDelta = x.length(x.sub(t.pos, a.pos)), a.dead = t.dead, a.downed = t.downed, a.factionLeader = t.factionLeader, void 0 !== t.health && (a.health = t.health), void 0 !== t.disconnected && (a.disconnected = t.disconnected), this.playerStatus[e] = a
            },
            se: function(e) {
                return this.playerStatus[e]
            },
            Zt: function(e, t) {
                var a = this.getGroupInfo(e);
                if (a.playerIds.length != t.players.length) return void z.logError("PlayerIds and groupStatus.players out of sync");
                for (var i = 0; i < a.playerIds.length; i++) {
                    var r = a.playerIds[i],
                        o = t.players[i],
                        n = this.se(r);
                    n && (n.health = o.health, n.disconnected = o.disconnected)
                }
            },
            getGroupColor: function(e) {
                var t = this.ne(e),
                    a = this.getGroupInfo(t.groupId),
                    i = a ? a.playerIds.indexOf(e) : 0;
                return i >= 0 && i < m.groupColors.length ? m.groupColors[i] : 16777215
            },
            getTeamColor: function(e) {
                var t = e - 1;
                return t >= 0 && t < m.teamColors.length ? m.teamColors[t] : 16777215
            }
        }, e.exports = {
            tt: s
        }
    },
    a5bf0544: function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-01-28",
                locale: "es"
            },
            "word-order": "svo",
            "index-create-account": "Crear cuenta",
            "index-set-account-name": "Configurar su nombre",
            "index-enter-name": "Ingrese su nombre",
            "index-finish": "Terminar",
            "index-delete-account": "Borrar cuenta",
            "index-delete-account-desc": 'Ingresa "DELETE" para eliminar tu cuenta:',
            "index-confirm": "Confirmar",
            "index-customize-avatar": "Personalizar avatar",
            "index-done": "Hecho",
            "index-account": "Cuenta",
            "index-log-in-with": "Inicia sesión con",
            "index-facebook": "Facebook",
            "index-google": "Google",
            "index-twitch": "Twitch",
            "index-discord": "Discord",
            "index-my-stats": "Mis estadísticas",
            "index-link-account": "Enlazar cuentas",
            "index-log-out": "Cerrar sesión",
            "index-change-avatar": "Cambiar avatar",
            "index-change-account-name": "Cambiar el nombre",
            "index-back": "Atrás",
            "index-link-account-to": "Enlace con",
            "index-log-in-desc": "Iniciar sesión!",
            "index-logging-in": "Iniciando sección",
            "index-leaderboards": "Ránking",
            "index-slogan": "2d Battle Royale",
            "index-region": "Región",
            "index-north-america": "Norteamérica",
            "index-europe": "Europa",
            "index-asia": "Asia",
            "index-south-america": "Sudamerica",
            "index-korea": "Corea del Sur",
            "index-players": "Jugadores",
            "index-play-solo": "Jugar Solo",
            "index-play-duo": "Jugar Dúo",
            "index-play-squad": "Jugar Squad",
            "index-join-team": "Entrar equipo",
            "index-create-team": "Crear equipo",
            "index-how-to-play": "Como Jugar",
            "index-leave-team": "Dejar el equipo",
            "index-joining-team": "Uniendose al equipo",
            "index-creating-team": "Creando equipo",
            "index-invite-link": "Enlace de invitación",
            "index-invite-code": "Codigo de invitacion",
            "index-join-team-help": "Tienes un enlace de equipo?  Pegalo aqui:",
            "index-solo": "Solo",
            "index-duo": "Dúo",
            "index-squad": "Squad",
            "index-auto-fill": "Emparejar",
            "index-no-fill": "No Emparejar",
            "index-waiting-for-leader": "Esperando al Líder para comenzar el juego",
            "index-play": "Jugar",
            "index-featured-youtuber": "YouTuber Destacado",
            "index-streaming-live": "¡En Directo!",
            "index-settings": "Configuración",
            "index-high-resolution": "Resolución alta (activar para mejorar la calidad visual)",
            "index-screen-shake": "Temblor de la pantalla",
            "index-master-volume": "Volumen principal",
            "index-sfx-volume": "Volumen de efectos de sonido",
            "index-music-volume": "Volumen de la música",
            "index-mobile-announce": "Ahora disponible para móvil!",
            "index-mobile-tooltip": "¡Visita <span>surviv.io</span> en tu dispositivo móvil para jugar en el camino!",
            "index-team-is-full": "¡El equipo esta lleno!",
            "index-failed-joining-team": "Fallo al unirse al equipo.",
            "index-failed-creating-team": "Fallo al crear el equipo.",
            "index-failed-finding-game": "Fallo al encontrar una partida.",
            "index-failed-joining-game": "Fallo al unirse a la partida.",
            "index-lost-connection": "Se perdio la conección al equipo.",
            "index-host-closed": "El servidor cerro la conexion.",
            "index-view-more": "Ver más",
            "index-back-to-main": "Volver al menú principal",
            "index-most-kills": "Mas Muertes",
            "index-total-kills": "Total de muertes",
            "index-total-wins": "Total de Victorias",
            "index-top-5-percent": "% De top 5",
            "index-kill-death-ratio": "Proporcion de K/D",
            "index-for": "Por",
            "index-today": "Hoy",
            "index-this-week": "Esta semana",
            "index-all-time": "Siempre",
            "index-top-100": "TOP 100",
            "index-rank": "Posición",
            "index-player": "Jugador",
            "index-total-games": "Partidas Jugadas",
            "index-controls": "Controles",
            "index-movement": "Movimiento",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Apuntar",
            "index-aim-ctrl": "Ratón",
            "index-punch": "Golpear",
            "index-shoot": "Disparar",
            "index-shoot-ctrl": "Click Izquierdo",
            "index-change-weapons": "Cambiar arma",
            "index-change-weapons-ctrl": "1 hasta 4 ó Rueda del Ratón",
            "index-stow-weapons": "Guardar arma (Puños)",
            "index-stow-weapons-ctrl": "3 o E",
            "index-swap-weapons": "Cambiar a arma anterior",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Recargar",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Zoom de la mirilla",
            "index-scope-zoom-ctrl": "Click Izquierdo en la mirilla",
            "index-pickup": "Recoger",
            "index-loot": "Agarrar",
            "index-revive": "Revivir",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Usar objeto medico",
            "index-use-medical-ctrl": "Click izquierdo en el objeto ó 7 hasta 0",
            "index-drop-item": "Soltar objeto",
            "index-drop-item-ctrl": "Click derecho en el objeto",
            "index-cancel-action": "Cancelar acción",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Vér el mapa",
            "index-view-map-ctrl": "M ó G",
            "index-toggle-minimap": "Desactivar minimapa",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Usar la rueda comunicacion de equipo",
            "index-use-ping-ctrl": "Presiona C, despues manten apretado click derecho y mueve el mouse, despues suelta el click derecho",
            "index-use-emote": "Usar la rueda de emoticonos",
            "index-use-emote-ctrl": "Manten presionado click derecho y mueve el mouse, despues suelta el click derecho",
            "index-tips-1-desc": "La meta de surviv.io es ser el ultimo jugador vivo. Solo tienes una vida - no reapareces!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "Si has jugado otros juegos del estilo Battle Royale como PUBG, Fortnite o H1Z1, entonces sabes un poco como funcionan las cosas! Piensa que surviv.io es PUBG en 2D.",
            "index-tips-3": "Encuentra suministros y mata",
            "index-tips-3-desc": "Comenzaras el juego con una bolsa. Muevete por el mapa para encontrar suministros: Armas, municion, mirillas, y objetos medicos. Elimina los otros jugadores y puedes tomar sus suministros!",
            "index-tips-4": "Rojo-Malo!",
            "index-tips-4-desc": "Los otros jugadores no son,los unicos que pueden lastimarte. La mortal zona roja se mueve hacia dentro desde los lados del mapa y reparte daño cada vez mas fuerte. Manten un ojo en el mapa y quedate asalvo.",
            "game-alive": "Vivos",
            "game-reloading": "Recargando",
            "game-using": "Usando",
            "game-reviving": "Reviviendo",
            "game-revive-teammate": "Revivir miembro",
            "game-equip": "Equipar",
            "game-cancel": "Cancelar",
            "game-open-door": "Abrir la puerta",
            "game-close-door": "Cerrar la puerta",
            "game-unlock": "Desbloquear",
            "game-You": "Tu",
            "game-you": "tu",
            "game-themselves": "a si mismo",
            "game-yourself": "a ti mismo",
            "game-you-died": "has muerto",
            "game-player-died": "ha muerto",
            "game-with": "con",
            "game-knocked-out": "dejo fuera de combate a",
            "game-killed": "mato",
            "game-finally-killed": "finalmente mato a",
            "game-finally-bled-out": "se desangro",
            "game-died-outside": "murió fuera de la zona segura",
            "game-the-red-zone": "la zona roja",
            "game-crushed": "aplastó a",
            "game-the-air-drop": "Un air drop",
            "game-waiting-for-players": "Esperando jugadores",
            "game-spectating": "Espectando a",
            "game-red-zone-advances": "La zona roja se mueve en",
            "game-red-zone-advancing": "La zona roja se mueve, ve a la zona segura!",
            "game-seconds": "segundos",
            "game-minutes": "minutos",
            "game-minute": "minuto",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "¡No hay sufficiente espacio!",
            "game-item-already-owned": "¡Objeto ya adquirido!",
            "game-item-already-equipped": "¡Objeto ya esta equipado!",
            "game-better-item-equipped": "¡Mejor objeto equipado!",
            "game-gun-cannot-fire": "¡La pistola no dispara aquí!",
            "game-play-new-game": "Jugar otra partida",
            "game-spectate": "Espectar",
            "game-full-screen": "Pantalla completa",
            "game-sound": "Sonido",
            "game-quit-game": "Salir de la partida",
            "game-return-to-game": "Volver a la partida",
            "game-hide-match-stats": "Esconder tus resultados de la partida",
            "game-view-match-stats": "Ver tus resultados de la partida",
            "game-previous-teammate": "Miembro del equipo anterior",
            "game-next-teammate": "Miembro del equipo siguiente",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "Salir de la partida",
            "game-your-results": "Tus resultados",
            "game-chicken": "¡A ganar a ganar pollo para cenar!",
            "game-won-the-game": "ganó la partida.",
            "game-team-eliminated": "Tu equipo ha sido eliminado.",
            "game-rank": "Posición",
            "game-team-rank": "Posición del equipo",
            "game-team-kills": "Muertes de equipo",
            "game-kill": "Muerte",
            "game-kills": "Muertes",
            "game-damage-dealt": "Daño repartido",
            "game-damage-taken": "Daño recibido",
            "game-survived": "Sobreviviste",
            "game-backpack00": "Bolsa",
            "game-backpack01": "Mochila pequeña",
            "game-backpack02": "Mochila mediana",
            "game-backpack03": "Mochila militar",
            "game-bandage": "Vendas",
            "game-bandage-tooltip": "Click izquierdo para curar 15 de salud.",
            "game-healing-tooltip": "No puede curar mas cuando estas a 75 de salud.",
            "game-healthkit": "Botiquín",
            "game-healthkit-tooltip": "Click izquierdo para curar 100 de salud.",
            "game-soda": "Soda",
            "game-soda-tooltip": "Click izquierdo para aumentar 25 de adrenalina.",
            "game-adrenaline-tooltip": "La adrenalina te cura mientras pasa el tiempo.",
            "game-painkiller": "Píldora",
            "game-painkiller-tooltip": "Click izquierdo para aumentar 50 de adrenalina.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Munición para la M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 y Vector.",
            "game-12gauge": "Calibre 12",
            "game-12gauge-tooltip": "Munición para la M870, M1100, SPAS-12, Saiga-12 y MP220.",
            "game-762mm": "7,62mm",
            "game-762mm-tooltip": "Munición para AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 y DP-28.",
            "game-556mm": "5,56mm",
            "game-556mm-tooltip": "Munición para FAMAS, M416, M4A1-S, QBB-97, Mk 12 y M249.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Munición para AWM-S.",
            "game-flare": "Bengalas",
            "game-flare-tooltip": "Munición para Pistola de bengalas.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Munición para M1911, M1A1, Model 94 y Peacemaker.",
            "game-chest01": "Chaleco de nivel 1",
            "game-chest02": "Chaleco de nivel 2",
            "game-chest03": "Chaleco de nivel 3",
            "game-helmet01": "Casco de nivel 1",
            "game-helmet02": "Casco de nivel 2",
            "game-helmet03": "Casco de nivel 3",
            "game-1xscope": "1x Mira",
            "game-2xscope": "2x Mira",
            "game-4xscope": "4x Mira",
            "game-8xscope": "8x Mira",
            "game-15xscope": "15x Mira",
            "game-level-1": "Nvl. 1",
            "game-level-2": "Nvl. 2",
            "game-level-3": "Nvl. 3",
            "game-level-4": "Nvl. 4",
            "game-outfitBase": "Traje Básico",
            "game-outfitRoyalFortune": "Fortuna Real",
            "game-outfitKeyLime": "Limero",
            "game-outfitCobaltShell": "Armadura de Cobalto",
            "game-outfitCarbonFiber": "Fibra de Carbono",
            "game-outfitDarkGloves": "El Profesional",
            "game-outfitGhillie": "Traje Ghillie",
            "game-outfitCamo": "Camuflaje de Bosque ",
            "game-outfitRed": "Práctica de Tiro",
            "game-outfitWhite": "Vengador del Ártico",
            "game-outfitDesertGhillie": "Ghillie de Desierto",
            "game-outfitDesertCamo": "Camuflaje de Desierto ",
            "game-fists": "Puños",
            "game-karambit_rugged": "Karambit Básico",
            "game-hud-karambit_rugged": "Karambit",
            "game-karambit_prismatic": "Karambit Prismático",
            "game-hud-karambit_prismatic": "Karambit",
            "game-bayonet_rugged": "Bayoneta Básico",
            "game-hud-bayonet_rugged": "Bayoneta",
            "game-bayonet_woodland": "Bayoneta Bosque",
            "game-hud-bayonet_woodland": "Bayoneta",
            "game-huntsman_rugged": "Cazador Básico",
            "game-hud-huntsman_rugged": "Cazador",
            "game-huntsman_burnished": "Cazador Bruñido",
            "game-hud-huntsman_burnished": "Cazador",
            "game-bowie_vintage": "Bowie Vendimia",
            "game-hud-bowie_vintage": "Bowie",
            "game-bowie_frontier": "Bowie Frontera",
            "game-hud-bowie_frontier": "Bowie",
            "game-woodaxe": "Hacha",
            "game-stonehammer": "Martillo",
            "game-hook": "Gancho",
            "game-pan": "Sartén",
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
            "game-flare_gun": "Pistola de bengalas",
            "game-hud-flare_gun": "P. de bengalas",
            "game-flare_gun_dual": "Pistola de bengalas",
            "game-hud-flare_gun_dual": "P. de bengalas",
            "game-frag": "Granada de Fragmentacion",
            "game-hud-frag": "Fragmen.",
            "game-smoke": "Granada de Humo",
            "game-hud-smoke": "Humo",
            "game-potato": "Patata",
            "game-hud-potato": "Patata",
            "game-potato_heavy": "Patata",
            "game-barrel_01": "un barril",
            "game-silo_01": "un silo",
            "game-oven_01": "un horno",
            "game-control_panel_01": "Panel de control",
            "game-control_panel_02": "Panel de control",
            "game-control_panel_03": "un terminal de computadora",
            "game-control_panel_04": "un terminal de computadora",
            "game-control_panel_06": "un terminal de computadora",
            "game-power_box_01": "una caja de poder",
            "game-airdrop_crate_01": "Air Drop",
            "game-airdrop_crate_02": "Air Drop",
            "game-stove_01": "una estufa",
            "game-grill_01": "una parilla",
            "index-play-50v50": "Jugar 50v50",
            "index-50v50": "50v50",
            "game-red-team": "Equipo rojo",
            "game-blue-team": "Equipo azul",
            "game-red-leader": "líder rojo",
            "game-blue-leader": "líder azul",
            "game-lieutenant": "teniente",
            "game-is-down": "ha caído",
            "game-is-dead": "ha muerto",
            "game-promoted-to": "ascendió a",
            "game-youve-been-promoted-to": "Has sido ascendido a",
            "game-woods-king": "El Rey Bosque",
            "game-perk-title-1": "Liderazgo",
            "game-perk-desc-1": "Adrenalina maxima.</br>Aumento de tamaño.",
            "game-perk-title-2": "Bandolera",
            "game-perk-desc-2": "Cargadores extendidos.",
            "game-perk-title-3": "Don de los Bosques",
            "game-perk-desc-3": "Pasivamente regenera su vida.</br>Aumento de tamaño.",
            "game-perk-title-4": "Viento Viajando",
            "game-perk-desc-4": "Si recibes disparos mientras corres, te moverás más rápido."
        };
        e.exports = i
    },
    a68e9107: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            return e && e.length > 4 ? "img/emotes/" + e.slice(0, -4) + ".svg" : ""
        }

        function o(e, t, a) {
            "function" == typeof t && (a = t, t = null);
            var i = {
                url: l.resolveUrl(e),
                type: "POST",
                timeout: 1e4,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            };
            t && (i.contentType = "application/json; charset=utf-8", i.data = JSON.stringify(t)), s.ajax(i).done(function(e, t) {
                a(null, e)
            }).fail(function(e) {
                a(e)
            })
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
            s = a("8ee62bea"),
            l = a("259eae5b"),
            c = a("ce29f17f"),
            m = a("b78cf179"),
            p = (m.EmoteType, m.EmoteData),
            d = a("26be8056"),
            h = a("f398b7c7"),
            u = a("484b3444"),
            g = a("f4d48896"),
            y = function() {
                function e(t) {
                    i(this, e), this.selector = t, this.enabled = !0, this.onToggle = function() {}
                }
                return n(e, [{
                    key: "onToggle",
                    value: function(e) {
                        this.onToggle = e
                    }
                }, {
                    key: "isVisible",
                    value: function() {
                        return "none" != this.selector.css("display")
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.selector.css("display", "block"), this.onToggle(this.isVisible()), u.addModalCloseListener()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.selector.css("display", "none"), this.onToggle(this.isVisible()), u.removeModalCloseListener()
                    }
                }]), e
            }(),
            w = function() {
                function e(t) {
                    var a = this;
                    i(this, e), this.profile = {}, this.loading = !1, this.nameChangeEnabled = !1, this.setNamePrompt = new y(s("#modal-account-name-change")), this.setNamePrompt.onToggle(function() {
                        s("#modal-body-warning").css("display", "none"), s("#modal-account-name-title").html("Change name"), s("#modal-account-name-input").val("")
                    }), s("#modal-account-name-finish").click(function(e) {
                        e.stopPropagation();
                        var i = s("#modal-account-name-input").val();
                        t.setUsername(i, function(e) {
                            a.onSetUsername(e)
                        })
                    }), s("#modal-account-name-input").on("keypress", function(e) {
                        13 === (e.which || e.keyCode) && s("#modal-account-name-finish").trigger("click")
                    }), this.changeAvatarPrompt = new y(s("#modal-account-avatar")), u.addModalCloseCallback(function(e, a) {
                        if (a.parents("#modal-account-avatar").length > 0) {
                            e.stopPropagation();
                            var i = s("#customize-account-avatar").find(".customize-emote-image").data("id");
                            t.setAvatar(i)
                        }
                    }), this.delAccountPrompt = new y(s("#modal-account-delete")), s("#modal-account-delete-finish").click(function(e) {
                        e.stopPropagation(), "DELETE" == s("#modal-account-delete-input").val() && t.deleteUser(), a.hideModals()
                    }), s("#modal-account-delete-input").on("keypress", function(e) {
                        13 === (e.which || e.keyCode) && s("#modal-account-delete-finish").trigger("click")
                    }), this.modals = [this.setNamePrompt, this.changeAvatarPrompt, this.delAccountPrompt];
                    var r = s(".account-loggedin-stats"),
                        o = s(".account-loggedin-buttons-main"),
                        n = s(".account-loggedin-buttons-settings"),
                        l = s(".account-loggedin-buttons-link-account");
                    s(".account-details-user").click(function(e) {
                        e.stopPropagation(), a.activeMenu != r ? a.setMenu(r) : a.setMenu(o)
                    }), s(".btn-account-settings").click(function(e) {
                        e.stopPropagation(), a.setMenu(n)
                    }), s(".btn-account-link").click(function(e) {
                        e.stopPropagation(), a.setMenu(l)
                    }), s(".btn-account-back").click(function(e) {
                        e.stopPropagation(), a.setMenu(o)
                    }), s(".btn-account-change-name").click(function(e) {
                        e.stopPropagation(), a.profile.usernameChangeTime <= 0 && (a.showModal(a.setNamePrompt), s("#modal-account-name-title").html("Change name"), a.setMenu(r))
                    }), s(".btn-account-change-avatar, .account-avatar").click(function(e) {
                        e.stopPropagation(), void 0 != a.profile.avatar && (a.showModal(a.changeAvatarPrompt), a.setMenu(r))
                    }), s(".btn-account-delete").click(function(e) {
                        e.stopPropagation(), s("#modal-account-delete-input").val(""), a.showModal(a.delAccountPrompt), a.setMenu(r)
                    }), this.menus = [r, o, n, l], this.activeMenu = r, this.statsButtons = r, this.menuListener = function(e) {
                        s(e.target).closest(s(".account-loggedin-block")).length || a.setMenu(r)
                    }
                }
                return n(e, [{
                    key: "setMenu",
                    value: function(e) {
                        for (var t = 0; t < this.menus.length; t++) this.menus[t].css("display", "none");
                        e.css("display", "block"), this.activeMenu = e, e != this.statsButtons ? s(document).on("click touchend", this.menuListener) : s(document).off("click touchend", this.menuListener)
                    }
                }, {
                    key: "showModal",
                    value: function(e) {
                        this.hideModals(), e.show()
                    }
                }, {
                    key: "hideModals",
                    value: function() {
                        for (var e = 0; e < this.modals.length; e++) this.modals[e].hide()
                    }
                }, {
                    key: "onSetUsername",
                    value: function(e) {
                        var t = {
                                failed: "Failed setting username.",
                                invalid: "Invalid username.",
                                taken: "Name already taken!",
                                change_time_not_expired: "Username has already been set recently."
                            },
                            a = t[e] || t.failed;
                        s("#modal-body-warning").hide(), s("#modal-body-warning div").html(a), s("#modal-body-warning").fadeIn()
                    }
                }, {
                    key: "show",
                    value: function(e) {
                        s(".account-loggedin-block").css("display", "block"), this.setMenu(this.statsButtons);
                        var t = d.htmlEscape(this.profile.username);
                        s(".account-player-name").html(t);
                        var a = s(".btn-player-stats-link");
                        this.profile.slug ? (a.attr("href", "/stats/" + this.profile.slug), a.css("display", "block")) : a.css("display", "none");
                        var i = this.profile.avatar,
                            o = p[i],
                            n = o && o.texture,
                            l = n ? r(o.texture) : "../img/gui/player-gui.svg";
                        s(".account-details-user .account-avatar").css("background-image", e ? "none" : "url(" + l + ")").addClass(e ? "" : "account-avatar-hover"), s(".account-details-user .account-avatar-loading").css("display", e ? "block" : "none"), s(".account-avatar-pulsate").css("display", n || e ? "none" : "block"), this.nameChangeEnabled = this.profile.usernameChangeTime <= 0, this.nameChangeEnabled ? s(".btn-account-change-name").removeClass("btn-account-disabled") : s(".btn-account-change-name").addClass("btn-account-disabled"), s(".btn-account-change-name").html(this.profile.usernameSet ? "Change Account Name" : "Set Account Name"), e || this.profile.usernameSet ? this.setNamePrompt.hide() : (this.showModal(this.setNamePrompt), u.removeModalCloseListener());
                        var c = function(e) {
                            e.addClass("btn-login-linked"), e.find("span.login-button-name").html('<div class="icon"></div>'), e.off("click")
                        };
                        this.profile.linkedFacebook && c(s(".btn-login-facebook")), this.profile.linkedGoogle && c(s(".btn-login-google")), this.profile.linkedTwitch && c(s(".btn-login-twitch")), this.profile.linkedDiscord && c(s(".btn-login-discord"))
                    }
                }, {
                    key: "hide",
                    value: function() {
                        s(".account-loggedin-block").css("display", "none"), this.setMenu(this.statsButtons), this.hideModals()
                    }
                }]), e
            }(),
            x = function() {
                function e(t) {
                    var a = this;
                    i(this, e), this.leaderboard = s(".account-login-leaderboard"), this.loginButtons = s(".account-login-buttons"), this.localization = t, this.loginVisible = !1, this.clickListener = function(e) {
                        s(e.target).closest(a.loginButtons).length || a.showLogin(!1)
                    }, s(".account-details-guest").click(function(e) {
                        e.stopPropagation(), a.showLogin(!a.loginVisible)
                    })
                }
                return n(e, [{
                    key: "showLogin",
                    value: function(e) {
                        this.loginButtons.css("display", e || c.mobile ? "block" : "none"), this.leaderboard.css("display", e ? "none" : "block"), this.loginVisible = e, e && !c.mobile ? s(document).on("click touchend", this.clickListener) : s(document).off("click touchend", this.clickListener)
                    }
                }, {
                    key: "show",
                    value: function(e) {
                        s(".account-login-block").css("display", "block");
                        var t = s(".account-login-block");
                        t.find(".account-avatar-loading").css("display", e ? "block" : "none"), t.find(".account-avatar").css("background-image", e ? "none" : 'url("../img/gui/player-gui.svg")'), t.find(".account-name").html(e ? this.localization.translate("index-logging-in") + "..." : this.localization.translate("index-log-in-desc")), this.loginButtons.enabled = !e
                    }
                }, {
                    key: "hide",
                    value: function() {
                        s(".account-login-block").css("display", "none"), this.showLogin(!1)
                    }
                }]), e
            }(),
            f = function() {
                function e(t, a) {
                    i(this, e), this.config = t, this.loading = !1, this.loggedIn = !1, this.profile = {}, this.loginMenu = new x(a), this.profileMenu = new w(this), this.errorModal = new y(s("#modal-notification"))
                }
                return n(e, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        this.config.get("sessionCookie") && this.setSessionCookies(), s(".btn-login-facebook").click(function(t) {
                            c.webview && c.version > "1.0.0" ? e.loginWithAccessToken("/api/user/auth/facebook/token", g.facebookLogin, function(e) {
                                return e.authResponse.accessToken
                            }) : window.location.href = "/api/user/auth/facebook"
                        }), s(".btn-login-google").click(function(t) {
                            c.webview && c.version > "1.0.0" ? e.loginWithAccessToken("/api/user/auth/google/token", g.googleLogin, function(e) {
                                return e.accessToken
                            }) : window.location.href = "/api/user/auth/google"
                        }), s(".btn-login-twitch").click(function(e) {
                            window.location.href = "/api/user/auth/twitch"
                        }), s(".btn-login-discord").click(function(e) {
                            window.location.href = "/api/user/auth/discord"
                        }), s(".btn-account-logout").click(function(t) {
                            e.logout()
                        })
                    }
                }, {
                    key: "setSessionCookies",
                    value: function() {
                        this.clearSessionCookies(), document.cookie = this.config.get("sessionCookie"), document.cookie = "app-data=" + Date.now()
                    }
                }, {
                    key: "clearSessionCookies",
                    value: function() {
                        document.cookie = "app-sid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;", document.cookie = "app-data=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    }
                }, {
                    key: "loginWithAccessToken",
                    value: function(e, t, a) {
                        var i = this;
                        t(function(t, r) {
                            if (t) return u.checkCloseModals(null, !0), void i.displayError("login_failed");
                            var n = a(r);
                            o(e + "?access_token=" + n, function(e, t) {
                                u.checkCloseModals(null, !0), e ? i.displayError("login_failed") : (i.config.set("sessionCookie", t.cookie), i.setSessionCookies(), i.load())
                            })
                        })
                    }
                }, {
                    key: "load",
                    value: function() {
                        var e = this;
                        !this.loading && d.getCookie("app-data") && (this.loading = !0, this.render(), o("/api/user/profile", function(t, a) {
                            if (e.profile = {}, e.loggedIn = !1, t) h.storeGeneric("account", "load_error");
                            else if (a.banned) e.displayError("account_banned");
                            else if (e.loggedIn = void 0 !== a.profile, e.loggedIn) {
                                e.profile = a.profile;
                                var i = e.config.get("profile") || {};
                                i.slug = a.profile.slug, e.config.set("profile", i)
                            } else e.config.set("sessionCookie", null);
                            e.loading = !1, e.render()
                        }))
                    }
                }, {
                    key: "logout",
                    value: function() {
                        this.config.set("profile", null), this.config.set("sessionCookie", null), o("/api/user/logout", function(e, t) {
                            window.location.reload()
                        })
                    }
                }, {
                    key: "deleteUser",
                    value: function() {
                        var e = this;
                        this.config.set("profile", null), this.config.set("sessionCookie", null), o("/api/user/delete", function(t, a) {
                            if (t) return h.storeGeneric("account", "delete_error"), void e.displayError("server_error");
                            window.location.reload()
                        })
                    }
                }, {
                    key: "setUsername",
                    value: function(e, t) {
                        var a = this;
                        o("/api/user/username", {
                            username: e
                        }, function(e, i) {
                            if (e) return h.storeGeneric("account", "set_username_error"), void t("Failed setting username.");
                            "success" == i.result ? a.load() : t(i.result)
                        })
                    }
                }, {
                    key: "setAvatar",
                    value: function(e) {
                        var t = this;
                        this.loggedIn && e != this.profile.avatar && o("/api/user/avatar", {
                            avatar: e
                        }, function(e, a) {
                            if (e) return h.storeGeneric("account", "set_avatar_error"), void t.displayError("server_error");
                            t.load()
                        })
                    }
                }, {
                    key: "displayError",
                    value: function(e) {
                        var t = {
                            server_error: "Internal server error, please try again later.",
                            facebook_account_in_use: "Failed linking Facebook account.<br/>Account already in use!",
                            google_account_in_use: "Failed linking Google account.<br/>Account already in use!",
                            twitch_account_in_use: "Failed linking Twitch account.<br/>Account already in use!",
                            discord_account_in_use: "Failed linking Discord account.<br/>Account already in use!",
                            account_banned: "Account banned.",
                            login_failed: "Login failed."
                        };
                        t[e] && (s("#modal-notification").find(".modal-settings-text").html(t[e]), this.errorModal.show())
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.profileMenu.profile = this.profile, this.loggedIn ? (this.profileMenu.show(this.loading), this.loginMenu.hide(), this.profile.errorFlash.length > 0 && this.displayError(this.profile.errorFlash[0])) : (this.profileMenu.hide(), this.loginMenu.show(this.loading))
                    }
                }]), e
            }();
        e.exports = f
    },
    a7f094a3: function(e, t, a) {
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
            o = a("8b1dfb45"),
            n = a("989ad62a"),
            s = n.GasMode,
            l = a("10899aea"),
            c = a("c2a798c8"),
            m = a("26be8056"),
            p = 1e5,
            d = 512,
            h = function() {
                function e(t, a) {
                    if (i(this, e), this.gasColorDOMString = "", this.display = null, this.canvas = null, t) this.canvas = document.createElement("canvas"), this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.display = new o.Sprite(o.Texture.fromCanvas(this.canvas)), this.gasColorDOMString = m.colorToDOMString(a, .6);
                    else {
                        this.display = new o.Graphics;
                        var r = this.display;
                        r.clear(), r.beginFill(a, .6), r.moveTo(-p, -p), r.lineTo(p, -p), r.lineTo(p, p), r.lineTo(-p, p), r.closePath(), r.moveTo(0, 1);
                        for (var n = 1; n < d; n++) {
                            var s = n / d,
                                l = Math.sin(2 * Math.PI * s),
                                c = Math.cos(2 * Math.PI * s);
                            r.lineTo(l, c)
                        }
                        r.closePath(), r.addHole()
                    }
                    this.display.visible = !1
                }
                return r(e, [{
                    key: "free",
                    value: function() {
                        this.display.destroy(!0)
                    }
                }, {
                    key: "resize",
                    value: function() {
                        null != this.canvas && (this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.display.texture.update())
                    }
                }, {
                    key: "render",
                    value: function(e, t, a) {
                        if (null != this.canvas) {
                            var i = this.canvas,
                                r = i.getContext("2d");
                            r.clearRect(0, 0, i.width, i.height), r.beginPath(), r.fillStyle = this.gasColorDOMString, r.rect(0, 0, i.width, i.height), r.arc(e.x, e.y, t, 0, 2 * Math.PI, !0), r.fill()
                        } else {
                            var o = c.copy(e),
                                n = t;
                            n < .1 && (n = 1, o.x += .5 * p);
                            var s = this.display;
                            s.position.set(o.x, o.y), s.scale.set(n, n)
                        }
                        this.display.visible = a
                    }
                }]), e
            }(),
            u = function() {
                function e() {
                    i(this, e), this.display = new o.Container, this.circleGfx = new o.Graphics, this.lineGfx = new o.Graphics, this.display.addChild(this.circleGfx), this.display.addChild(this.lineGfx), this.circleGfx.visible = !1, this.lineGfx.visible = !1, this.safePos = c.create(0, 0), this.safeRad = 0, this.playerPos = c.create(0, 0)
                }
                return r(e, [{
                    key: "render",
                    value: function(e, t, a, i, r) {
                        if (this.circleGfx.visible = i, this.lineGfx.visible = r, i || r) {
                            var o = !c.eq(this.safePos, e, 1e-4),
                                n = Math.abs(this.safeRad - t) > 1e-4,
                                s = !c.eq(this.playerPos, a, 1e-4);
                            if (o && (this.safePos.x = e.x, this.safePos.y = e.y), n && (this.safeRad = t), s && (this.playerPos.x = a.x, this.playerPos.y = a.y), o && this.circleGfx.position.set(this.safePos.x, this.safePos.y), n && (this.circleGfx.clear(), this.circleGfx.lineStyle(1.5, 16777215), this.circleGfx.drawCircle(0, 0, t)), o || n || s) {
                                var l = c.length(c.sub(a, e)) < t,
                                    m = l ? .5 : 1;
                                this.lineGfx.clear(), this.lineGfx.lineStyle(2, 65280, m), this.lineGfx.moveTo(a.x, a.y), this.lineGfx.lineTo(e.x, e.y)
                            }
                        }
                    }
                }]), e
            }(),
            g = function() {
                function e(t) {
                    i(this, e);
                    var a = 1024 * (Math.sqrt(2) + .01);
                    this.mode = s.Inactive, this.circleT = 0, this.duration = 0, this.circleOld = {
                        pos: c.create(0, 0),
                        rad: a
                    }, this.circleNew = {
                        pos: c.create(0, 0),
                        rad: a
                    }, this.gasRenderer = new h(t, 16711680)
                }
                return r(e, [{
                    key: "free",
                    value: function() {
                        this.gasRenderer.free()
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.gasRenderer.resize()
                    }
                }, {
                    key: "isActive",
                    value: function() {
                        return this.mode != s.Inactive
                    }
                }, {
                    key: "getCircle",
                    value: function() {
                        var e = this.mode == s.Moving ? this.circleT : 0;
                        return {
                            pos: c.lerp(e, this.circleOld.pos, this.circleNew.pos),
                            rad: l.lerp(e, this.circleOld.rad, this.circleNew.rad)
                        }
                    }
                }, {
                    key: "setProgress",
                    value: function(e) {
                        this.circleT = e
                    }
                }, {
                    key: "setFullState",
                    value: function(e, t, a, i) {
                        if (t.mode != this.mode) {
                            var r = Math.ceil(t.duration * (1 - e));
                            i.setWaitingForPlayers(!1), i.displayGasAnnouncement(t.mode, r)
                        }
                        this.mode = t.mode, this.duration = t.duration, this.circleT = e, this.circleOld.pos = c.copy(t.posOld), this.circleOld.rad = t.radOld, this.circleNew.pos = c.copy(t.posNew), this.circleNew.rad = t.radNew
                    }
                }, {
                    key: "render",
                    value: function(e) {
                        var t = this.getCircle(),
                            a = e.pointToScreen(t.pos),
                            i = e.scaleToScreen(t.rad);
                        this.gasRenderer.render(a, i, this.isActive())
                    }
                }]), e
            }();
        e.exports = {
            GasRenderer: h,
            GasSafeZoneRenderer: u,
            ft: g
        }
    },
    aaf70d05: function(e, t) {
        e.exports = {
            shared: [{
                meta: {
                    image: "shared-0-50-d99958b6.png",
                    size: {
                        w: 2048,
                        h: 2048
                    },
                    scale: .5
                },
                frames: {
                    "map-building-mansion-floor-01b.img": {
                        frame: {
                            x: 1062,
                            y: 2,
                            w: 913,
                            h: 609
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 913,
                            h: 609
                        },
                        sourceSize: {
                            w: 913,
                            h: 609
                        }
                    },
                    "map-building-police-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 2,
                            w: 1056,
                            h: 784
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1056,
                            h: 784
                        },
                        sourceSize: {
                            w: 1056,
                            h: 784
                        }
                    },
                    "map-building-barn-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 790,
                            w: 800,
                            h: 544
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 800,
                            h: 544
                        },
                        sourceSize: {
                            w: 800,
                            h: 544
                        }
                    },
                    "map-building-police-ceiling-02.img": {
                        frame: {
                            x: 806,
                            y: 790,
                            w: 265,
                            h: 541
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 265,
                            h: 541
                        },
                        sourceSize: {
                            w: 265,
                            h: 541
                        }
                    },
                    "map-building-cabin-floor.img": {
                        frame: {
                            x: 1075,
                            y: 790,
                            w: 608,
                            h: 496
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 608,
                            h: 496
                        },
                        sourceSize: {
                            w: 608,
                            h: 496
                        }
                    },
                    "map-bunker-crossing-compartment-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 1338,
                            w: 752,
                            h: 464
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 752,
                            h: 464
                        },
                        sourceSize: {
                            w: 752,
                            h: 464
                        }
                    },
                    "map-building-bank-ceiling-02.img": {
                        frame: {
                            x: 1687,
                            y: 790,
                            w: 278,
                            h: 446
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 24,
                            w: 278,
                            h: 446
                        },
                        sourceSize: {
                            w: 278,
                            h: 470
                        }
                    },
                    "map-bunker-conch-compartment-floor-01a.img": {
                        frame: {
                            x: 758,
                            y: 1338,
                            w: 470,
                            h: 440
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 26,
                            y: 0,
                            w: 470,
                            h: 440
                        },
                        sourceSize: {
                            w: 496,
                            h: 440
                        }
                    },
                    "map-bunker-storm-chamber-floor-01.img": {
                        frame: {
                            x: 1232,
                            y: 1338,
                            w: 632,
                            h: 436
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 23,
                            w: 632,
                            h: 436
                        },
                        sourceSize: {
                            w: 640,
                            h: 464
                        }
                    },
                    "map-building-hut-floor-02.img": {
                        frame: {
                            x: 1868,
                            y: 1338,
                            w: 66,
                            h: 384
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 66,
                            h: 384
                        },
                        sourceSize: {
                            w: 68,
                            h: 384
                        }
                    },
                    "map-wall-18.img": {
                        frame: {
                            x: 1938,
                            y: 1338,
                            w: 16,
                            h: 288
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 288
                        },
                        sourceSize: {
                            w: 16,
                            h: 288
                        }
                    },
                    "map-building-police-ceiling-01.img": {
                        frame: {
                            x: 2,
                            y: 1806,
                            w: 504,
                            h: 240
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 504,
                            h: 240
                        },
                        sourceSize: {
                            w: 504,
                            h: 240
                        }
                    },
                    "map-building-police-ceiling-03.img": {
                        frame: {
                            x: 510,
                            y: 1806,
                            w: 252,
                            h: 240
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 252,
                            h: 240
                        },
                        sourceSize: {
                            w: 252,
                            h: 240
                        }
                    },
                    "map-building-hut-floor-01.img": {
                        frame: {
                            x: 766,
                            y: 1806,
                            w: 226,
                            h: 226
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 15,
                            y: 15,
                            w: 226,
                            h: 226
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "map-building-bank-floor-02.img": {
                        frame: {
                            x: 996,
                            y: 1806,
                            w: 433,
                            h: 224
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 433,
                            h: 224
                        },
                        sourceSize: {
                            w: 544,
                            h: 224
                        }
                    },
                    "map-wall-14-rounded.img": {
                        frame: {
                            x: 1958,
                            y: 1338,
                            w: 16,
                            h: 224
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 224
                        },
                        sourceSize: {
                            w: 16,
                            h: 224
                        }
                    },
                    "map-wall-14.img": {
                        frame: {
                            x: 1433,
                            y: 1806,
                            w: 16,
                            h: 224
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 224
                        },
                        sourceSize: {
                            w: 16,
                            h: 224
                        }
                    },
                    "map-building-warehouse-ceiling-01.img": {
                        frame: {
                            x: 1453,
                            y: 1806,
                            w: 416,
                            h: 216
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 416,
                            h: 216
                        },
                        sourceSize: {
                            w: 416,
                            h: 216
                        }
                    },
                    "map-wall-13-rounded.img": {
                        frame: {
                            x: 1873,
                            y: 1806,
                            w: 16,
                            h: 208
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 208
                        },
                        sourceSize: {
                            w: 16,
                            h: 208
                        }
                    },
                    "map-wall-13.img": {
                        frame: {
                            x: 1893,
                            y: 1806,
                            w: 16,
                            h: 208
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 208
                        },
                        sourceSize: {
                            w: 16,
                            h: 208
                        }
                    },
                    "map-wall-glass-12-2.img": {
                        frame: {
                            x: 1913,
                            y: 1806,
                            w: 32,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 192
                        },
                        sourceSize: {
                            w: 32,
                            h: 192
                        }
                    },
                    "map-wall-glass-12.img": {
                        frame: {
                            x: 1949,
                            y: 1806,
                            w: 16,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 192
                        },
                        sourceSize: {
                            w: 16,
                            h: 192
                        }
                    },
                    "map-wall-12.img": {
                        frame: {
                            x: 1979,
                            y: 2,
                            w: 16,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 192
                        },
                        sourceSize: {
                            w: 16,
                            h: 192
                        }
                    },
                    "map-wall-12-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 198,
                            w: 16,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 192
                        },
                        sourceSize: {
                            w: 16,
                            h: 192
                        }
                    },
                    "map-pipes-04.img": {
                        frame: {
                            x: 1999,
                            y: 2,
                            w: 44,
                            h: 176
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 44,
                            h: 176
                        },
                        sourceSize: {
                            w: 44,
                            h: 176
                        }
                    },
                    "map-wall-11-rounded.img": {
                        frame: {
                            x: 1999,
                            y: 182,
                            w: 16,
                            h: 176
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 176
                        },
                        sourceSize: {
                            w: 16,
                            h: 176
                        }
                    },
                    "map-wall-11.img": {
                        frame: {
                            x: 2019,
                            y: 182,
                            w: 16,
                            h: 176
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 176
                        },
                        sourceSize: {
                            w: 16,
                            h: 176
                        }
                    },
                    "map-building-vault-ceiling.img": {
                        frame: {
                            x: 1062,
                            y: 615,
                            w: 161,
                            h: 169
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 161,
                            h: 169
                        },
                        sourceSize: {
                            w: 216,
                            h: 169
                        }
                    },
                    "map-saloon-bar-01.img": {
                        frame: {
                            x: 1999,
                            y: 362,
                            w: 27,
                            h: 162
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 27,
                            h: 162
                        },
                        sourceSize: {
                            w: 27,
                            h: 162
                        }
                    },
                    "map-building-shack-floor-01.img": {
                        frame: {
                            x: 1227,
                            y: 615,
                            w: 192,
                            h: 161
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 9,
                            w: 192,
                            h: 161
                        },
                        sourceSize: {
                            w: 210,
                            h: 170
                        }
                    },
                    "map-building-shack-floor-02.img": {
                        frame: {
                            x: 1423,
                            y: 615,
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
                    "map-bunker-crossing-floor-01.img": {
                        frame: {
                            x: 1587,
                            y: 615,
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
                    "map-wall-10.img": {
                        frame: {
                            x: 1999,
                            y: 528,
                            w: 16,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 160
                        },
                        sourceSize: {
                            w: 16,
                            h: 160
                        }
                    },
                    "map-wall-10-rounded.img": {
                        frame: {
                            x: 2019,
                            y: 528,
                            w: 16,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 160
                        },
                        sourceSize: {
                            w: 16,
                            h: 160
                        }
                    },
                    "map-wall-glass-10.img": {
                        frame: {
                            x: 1999,
                            y: 692,
                            w: 16,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 160
                        },
                        sourceSize: {
                            w: 16,
                            h: 160
                        }
                    },
                    "map-building-outhouse-floor.img": {
                        frame: {
                            x: 1751,
                            y: 615,
                            w: 122,
                            h: 155
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 39,
                            y: 1,
                            w: 122,
                            h: 155
                        },
                        sourceSize: {
                            w: 200,
                            h: 158
                        }
                    },
                    "map-bunker-crossing-compartment-ceiling-01a.img": {
                        frame: {
                            x: 1877,
                            y: 615,
                            w: 64,
                            h: 152
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 152
                        },
                        sourceSize: {
                            w: 64,
                            h: 152
                        }
                    },
                    "map-wall-09.img": {
                        frame: {
                            x: 2019,
                            y: 692,
                            w: 16,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 144
                        },
                        sourceSize: {
                            w: 16,
                            h: 144
                        }
                    },
                    "map-wall-09-rounded.img": {
                        frame: {
                            x: 1999,
                            y: 856,
                            w: 16,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 144
                        },
                        sourceSize: {
                            w: 16,
                            h: 144
                        }
                    },
                    "part-shell-05.img": {
                        frame: {
                            x: 1999,
                            y: 1004,
                            w: 32,
                            h: 130
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 130
                        },
                        sourceSize: {
                            w: 32,
                            h: 130
                        }
                    },
                    "map-wall-08-rounded.img": {
                        frame: {
                            x: 2019,
                            y: 856,
                            w: 16,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 128
                        },
                        sourceSize: {
                            w: 16,
                            h: 128
                        }
                    },
                    "map-wall-shack-right.img": {
                        frame: {
                            x: 2030,
                            y: 362,
                            w: 12,
                            h: 121
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 12,
                            h: 121
                        },
                        sourceSize: {
                            w: 12,
                            h: 121
                        }
                    },
                    "gun-awc-02.img": {
                        frame: {
                            x: 1999,
                            y: 1138,
                            w: 23,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 4,
                            w: 23,
                            h: 114
                        },
                        sourceSize: {
                            w: 30,
                            h: 118
                        }
                    },
                    "gun-awc-01.img": {
                        frame: {
                            x: 1999,
                            y: 1256,
                            w: 23,
                            h: 114
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 4,
                            w: 23,
                            h: 114
                        },
                        sourceSize: {
                            w: 30,
                            h: 118
                        }
                    },
                    "map-door-02.img": {
                        frame: {
                            x: 1999,
                            y: 1374,
                            w: 40,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 40,
                            h: 112
                        },
                        sourceSize: {
                            w: 40,
                            h: 112
                        }
                    },
                    "map-wall-07.img": {
                        frame: {
                            x: 2026,
                            y: 1138,
                            w: 16,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 112
                        },
                        sourceSize: {
                            w: 16,
                            h: 112
                        }
                    },
                    "map-wall-07-rounded.img": {
                        frame: {
                            x: 2026,
                            y: 1256,
                            w: 16,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 112
                        },
                        sourceSize: {
                            w: 16,
                            h: 112
                        }
                    },
                    "map-wall-shack-left.img": {
                        frame: {
                            x: 1999,
                            y: 1490,
                            w: 12,
                            h: 111
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 12,
                            h: 111
                        },
                        sourceSize: {
                            w: 12,
                            h: 111
                        }
                    },
                    "gun-m249-top-01.img": {
                        frame: {
                            x: 2015,
                            y: 1490,
                            w: 20,
                            h: 108
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 8,
                            w: 20,
                            h: 108
                        },
                        sourceSize: {
                            w: 28,
                            h: 116
                        }
                    },
                    "gun-garand-01.img": {
                        frame: {
                            x: 1999,
                            y: 1605,
                            w: 18,
                            h: 107
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 9,
                            w: 18,
                            h: 107
                        },
                        sourceSize: {
                            w: 24,
                            h: 116
                        }
                    },
                    "gun-usas-01.img": {
                        frame: {
                            x: 2021,
                            y: 1605,
                            w: 22,
                            h: 105
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 11,
                            w: 22,
                            h: 105
                        },
                        sourceSize: {
                            w: 28,
                            h: 116
                        }
                    },
                    "gun-scorpion-01.img": {
                        frame: {
                            x: 1999,
                            y: 1716,
                            w: 21,
                            h: 100
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 21,
                            h: 100
                        },
                        sourceSize: {
                            w: 24,
                            h: 104
                        }
                    },
                    "map-wall-outhouse-side.img": {
                        frame: {
                            x: 2024,
                            y: 1716,
                            w: 12,
                            h: 99
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 12,
                            h: 99
                        },
                        sourceSize: {
                            w: 12,
                            h: 99
                        }
                    },
                    "gun-pkp-top-01.img": {
                        frame: {
                            x: 1999,
                            y: 1820,
                            w: 19,
                            h: 96
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 20,
                            w: 19,
                            h: 96
                        },
                        sourceSize: {
                            w: 28,
                            h: 116
                        }
                    },
                    "map-wall-06.img": {
                        frame: {
                            x: 2022,
                            y: 1820,
                            w: 16,
                            h: 96
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 96
                        },
                        sourceSize: {
                            w: 16,
                            h: 96
                        }
                    },
                    "map-wall-06-rounded.img": {
                        frame: {
                            x: 1999,
                            y: 1920,
                            w: 16,
                            h: 96
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 96
                        },
                        sourceSize: {
                            w: 16,
                            h: 96
                        }
                    },
                    "gun-m4a1-01.img": {
                        frame: {
                            x: 2019,
                            y: 1920,
                            w: 22,
                            h: 94
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 22,
                            h: 94
                        },
                        sourceSize: {
                            w: 24,
                            h: 98
                        }
                    },
                    "gun-long-01.img": {
                        frame: {
                            x: 1979,
                            y: 394,
                            w: 16,
                            h: 94
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 94
                        },
                        sourceSize: {
                            w: 16,
                            h: 94
                        }
                    },
                    "part-shell-03.img": {
                        frame: {
                            x: 1938,
                            y: 1630,
                            w: 32,
                            h: 90
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 90
                        },
                        sourceSize: {
                            w: 32,
                            h: 90
                        }
                    },
                    "gun-saiga-01.img": {
                        frame: {
                            x: 1945,
                            y: 615,
                            w: 20,
                            h: 89
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 20,
                            h: 89
                        },
                        sourceSize: {
                            w: 24,
                            h: 98
                        }
                    },
                    "map-wall-outhouse-bot.img": {
                        frame: {
                            x: 1377,
                            y: 1782,
                            w: 36,
                            h: 12
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 36,
                            h: 12
                        },
                        sourceSize: {
                            w: 36,
                            h: 12
                        }
                    },
                    "map-wall-05-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 576,
                            w: 16,
                            h: 80
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 80
                        },
                        sourceSize: {
                            w: 16,
                            h: 80
                        }
                    },
                    "map-wall-04.img": {
                        frame: {
                            x: 1979,
                            y: 660,
                            w: 16,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 64
                        },
                        sourceSize: {
                            w: 16,
                            h: 64
                        }
                    },
                    "gun-med-01.img": {
                        frame: {
                            x: 1979,
                            y: 728,
                            w: 16,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 64
                        },
                        sourceSize: {
                            w: 16,
                            h: 64
                        }
                    },
                    "map-wall-04-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 796,
                            w: 16,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 64
                        },
                        sourceSize: {
                            w: 16,
                            h: 64
                        }
                    },
                    "map-door-01.img": {
                        frame: {
                            x: 1979,
                            y: 864,
                            w: 12,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 12,
                            h: 64
                        },
                        sourceSize: {
                            w: 12,
                            h: 64
                        }
                    },
                    "map-door-05.img": {
                        frame: {
                            x: 1979,
                            y: 932,
                            w: 12,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 12,
                            h: 64
                        },
                        sourceSize: {
                            w: 12,
                            h: 64
                        }
                    },
                    "map-door-03.img": {
                        frame: {
                            x: 1979,
                            y: 1e3,
                            w: 16,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 56
                        },
                        sourceSize: {
                            w: 16,
                            h: 56
                        }
                    },
                    "ping-map-airstrike.img": {
                        frame: {
                            x: 1945,
                            y: 708,
                            w: 24,
                            h: 53
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 20,
                            y: 6,
                            w: 24,
                            h: 53
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "map-building-house-window-res-01.img": {
                        frame: {
                            x: 1979,
                            y: 1060,
                            w: 16,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 52
                        },
                        sourceSize: {
                            w: 16,
                            h: 52
                        }
                    },
                    "map-building-house-window-01.img": {
                        frame: {
                            x: 1979,
                            y: 1116,
                            w: 16,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 52
                        },
                        sourceSize: {
                            w: 16,
                            h: 52
                        }
                    },
                    "gun-short-01.img": {
                        frame: {
                            x: 1979,
                            y: 1172,
                            w: 16,
                            h: 50
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 50
                        },
                        sourceSize: {
                            w: 16,
                            h: 50
                        }
                    },
                    "fish.img": {
                        frame: {
                            x: 1868,
                            y: 1726,
                            w: 64,
                            h: 48
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 8,
                            w: 64,
                            h: 48
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "map-recorder-01.img": {
                        frame: {
                            x: 1936,
                            y: 1726,
                            w: 32,
                            h: 48
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 48
                        },
                        sourceSize: {
                            w: 32,
                            h: 48
                        }
                    },
                    "map-wall-03.img": {
                        frame: {
                            x: 1979,
                            y: 1226,
                            w: 16,
                            h: 48
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 48
                        },
                        sourceSize: {
                            w: 16,
                            h: 48
                        }
                    },
                    "map-wall-03-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 1278,
                            w: 16,
                            h: 48
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 48
                        },
                        sourceSize: {
                            w: 16,
                            h: 48
                        }
                    },
                    "pilgrim-hat.img": {
                        frame: {
                            x: 1687,
                            y: 1240,
                            w: 60,
                            h: 46
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 9,
                            w: 60,
                            h: 46
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-medical-pill.img": {
                        frame: {
                            x: 1751,
                            y: 1240,
                            w: 60,
                            h: 46
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 9,
                            w: 60,
                            h: 46
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "coconut.img": {
                        frame: {
                            x: 1815,
                            y: 1240,
                            w: 56,
                            h: 46
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 9,
                            w: 56,
                            h: 46
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-throwable-strobe.img": {
                        frame: {
                            x: 1875,
                            y: 1240,
                            w: 53,
                            h: 46
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 11,
                            w: 53,
                            h: 46
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "map-saloon-bar-02.img": {
                        frame: {
                            x: 1932,
                            y: 1240,
                            w: 27,
                            h: 46
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 27,
                            h: 46
                        },
                        sourceSize: {
                            w: 27,
                            h: 46
                        }
                    },
                    "loot-helmet-02.img": {
                        frame: {
                            x: 1075,
                            y: 1290,
                            w: 60,
                            h: 40
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 12,
                            w: 60,
                            h: 40
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "audio-on.img": {
                        frame: {
                            x: 1139,
                            y: 1290,
                            w: 48,
                            h: 40
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 12,
                            w: 48,
                            h: 40
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "audio-off.img": {
                        frame: {
                            x: 1191,
                            y: 1290,
                            w: 47,
                            h: 40
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 12,
                            w: 47,
                            h: 40
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-fists.img": {
                        frame: {
                            x: 1242,
                            y: 1290,
                            w: 38,
                            h: 40
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 13,
                            y: 12,
                            w: 38,
                            h: 40
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "map-piano-01.img": {
                        frame: {
                            x: 1284,
                            y: 1290,
                            w: 120,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 120,
                            h: 38
                        },
                        sourceSize: {
                            w: 120,
                            h: 38
                        }
                    },
                    "map-building-cabin-ceiling-01b.img": {
                        frame: {
                            x: 1408,
                            y: 1290,
                            w: 74,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 74,
                            h: 38
                        },
                        sourceSize: {
                            w: 74,
                            h: 38
                        }
                    },
                    "gg.img": {
                        frame: {
                            x: 1486,
                            y: 1290,
                            w: 58,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 13,
                            w: 58,
                            h: 38
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-mirv-mini-01.img": {
                        frame: {
                            x: 1548,
                            y: 1290,
                            w: 44,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 5,
                            w: 44,
                            h: 38
                        },
                        sourceSize: {
                            w: 48,
                            h: 48
                        }
                    },
                    "quit.img": {
                        frame: {
                            x: 1596,
                            y: 1290,
                            w: 36,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 14,
                            y: 13,
                            w: 36,
                            h: 38
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "map-deposit-box-02.img": {
                        frame: {
                            x: 1636,
                            y: 1290,
                            w: 80,
                            h: 37
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 80,
                            h: 37
                        },
                        sourceSize: {
                            w: 80,
                            h: 37
                        }
                    },
                    "map-deposit-box-01.img": {
                        frame: {
                            x: 1720,
                            y: 1290,
                            w: 80,
                            h: 37
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 80,
                            h: 37
                        },
                        sourceSize: {
                            w: 80,
                            h: 37
                        }
                    },
                    "player-patch-red.img": {
                        frame: {
                            x: 1804,
                            y: 1290,
                            w: 60,
                            h: 36
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 22,
                            w: 60,
                            h: 36
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "gun-dp28-top-01.img": {
                        frame: {
                            x: 1868,
                            y: 1290,
                            w: 36,
                            h: 36
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 36,
                            h: 36
                        },
                        sourceSize: {
                            w: 40,
                            h: 40
                        }
                    },
                    "cursor-03.img": {
                        frame: {
                            x: 1908,
                            y: 1290,
                            w: 36,
                            h: 36
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 36,
                            h: 36
                        },
                        sourceSize: {
                            w: 36,
                            h: 36
                        }
                    },
                    "unlock.img": {
                        frame: {
                            x: 1948,
                            y: 1290,
                            w: 26,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 26,
                            h: 32
                        },
                        sourceSize: {
                            w: 32,
                            h: 32
                        }
                    },
                    "map-wall-02.img": {
                        frame: {
                            x: 1979,
                            y: 1330,
                            w: 16,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 32
                        },
                        sourceSize: {
                            w: 16,
                            h: 32
                        }
                    },
                    "map-wall-02-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 1366,
                            w: 16,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 32
                        },
                        sourceSize: {
                            w: 16,
                            h: 32
                        }
                    },
                    "map-candle-01.img": {
                        frame: {
                            x: 1999,
                            y: 2020,
                            w: 26,
                            h: 26
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 26,
                            h: 26
                        },
                        sourceSize: {
                            w: 26,
                            h: 26
                        }
                    },
                    "hatchet.img": {
                        frame: {
                            x: 758,
                            y: 1782,
                            w: 23,
                            h: 20
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 2,
                            w: 23,
                            h: 20
                        },
                        sourceSize: {
                            w: 24,
                            h: 24
                        }
                    },
                    "player-hands-01.img": {
                        frame: {
                            x: 785,
                            y: 1782,
                            w: 19,
                            h: 19
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 19,
                            h: 19
                        },
                        sourceSize: {
                            w: 19,
                            h: 19
                        }
                    },
                    "player-feet-01.img": {
                        frame: {
                            x: 2030,
                            y: 487,
                            w: 13,
                            h: 19
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 13,
                            h: 19
                        },
                        sourceSize: {
                            w: 19,
                            h: 19
                        }
                    },
                    "map-barrel-03.img": {
                        frame: {
                            x: 808,
                            y: 1782,
                            w: 45,
                            h: 18
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 45,
                            h: 18
                        },
                        sourceSize: {
                            w: 45,
                            h: 18
                        }
                    },
                    "map-barrel-04.img": {
                        frame: {
                            x: 857,
                            y: 1782,
                            w: 45,
                            h: 18
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 45,
                            h: 18
                        },
                        sourceSize: {
                            w: 45,
                            h: 18
                        }
                    },
                    "dot.img": {
                        frame: {
                            x: 906,
                            y: 1782,
                            w: 18,
                            h: 18
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 18,
                            h: 18
                        },
                        sourceSize: {
                            w: 18,
                            h: 18
                        }
                    },
                    "map-switch-02.img": {
                        frame: {
                            x: 1979,
                            y: 1402,
                            w: 15,
                            h: 17
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 15,
                            h: 17
                        },
                        sourceSize: {
                            w: 15,
                            h: 17
                        }
                    },
                    "map-switch-01.img": {
                        frame: {
                            x: 1979,
                            y: 1423,
                            w: 15,
                            h: 17
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 15,
                            h: 17
                        },
                        sourceSize: {
                            w: 15,
                            h: 17
                        }
                    },
                    "gun-qbb97-bot-01.img": {
                        frame: {
                            x: 928,
                            y: 1782,
                            w: 30,
                            h: 16
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 30,
                            h: 16
                        },
                        sourceSize: {
                            w: 32,
                            h: 16
                        }
                    },
                    "ping-part-circle.img": {
                        frame: {
                            x: 1979,
                            y: 1444,
                            w: 16,
                            h: 16
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 24,
                            y: 24,
                            w: 16,
                            h: 16
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-part-circle-highlight.img": {
                        frame: {
                            x: 1979,
                            y: 1464,
                            w: 16,
                            h: 16
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 24,
                            y: 24,
                            w: 16,
                            h: 16
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "map-bottle-01.img": {
                        frame: {
                            x: 1979,
                            y: 1484,
                            w: 16,
                            h: 16
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 16
                        },
                        sourceSize: {
                            w: 16,
                            h: 16
                        }
                    },
                    "map-bottle-02.img": {
                        frame: {
                            x: 1979,
                            y: 1504,
                            w: 16,
                            h: 16
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 16
                        },
                        sourceSize: {
                            w: 16,
                            h: 16
                        }
                    },
                    "map-wall-01-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 1524,
                            w: 16,
                            h: 16
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 16
                        },
                        sourceSize: {
                            w: 16,
                            h: 16
                        }
                    },
                    "map-bottle-03.img": {
                        frame: {
                            x: 1979,
                            y: 1544,
                            w: 16,
                            h: 16
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 16
                        },
                        sourceSize: {
                            w: 16,
                            h: 16
                        }
                    },
                    "ping-part-circle-auto-highlight.img": {
                        frame: {
                            x: 1979,
                            y: 1564,
                            w: 15,
                            h: 15
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 15,
                            h: 15
                        },
                        sourceSize: {
                            w: 15,
                            h: 15
                        }
                    },
                    "ping-part-circle-auto.img": {
                        frame: {
                            x: 2029,
                            y: 2020,
                            w: 14,
                            h: 14
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 14,
                            h: 14
                        },
                        sourceSize: {
                            w: 14,
                            h: 14
                        }
                    },
                    "ping-part-circle-auto-outer.img": {
                        frame: {
                            x: 1979,
                            y: 1583,
                            w: 14,
                            h: 14
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 14,
                            h: 14
                        },
                        sourceSize: {
                            w: 14,
                            h: 14
                        }
                    },
                    "map-wall-shack-top.img": {
                        frame: {
                            x: 962,
                            y: 1782,
                            w: 180,
                            h: 12
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 180,
                            h: 12
                        },
                        sourceSize: {
                            w: 180,
                            h: 12
                        }
                    },
                    "map-wall-shack-bot.img": {
                        frame: {
                            x: 1146,
                            y: 1782,
                            w: 121,
                            h: 12
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 121,
                            h: 12
                        },
                        sourceSize: {
                            w: 121,
                            h: 12
                        }
                    },
                    "map-wall-outhouse-top.img": {
                        frame: {
                            x: 1271,
                            y: 1782,
                            w: 102,
                            h: 12
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 102,
                            h: 12
                        },
                        sourceSize: {
                            w: 102,
                            h: 12
                        }
                    },
                    "map-wall-05.img": {
                        frame: {
                            x: 1979,
                            y: 492,
                            w: 16,
                            h: 80
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 16,
                            h: 80
                        },
                        sourceSize: {
                            w: 16,
                            h: 80
                        }
                    }
                }
            }, {
                meta: {
                    image: "shared-1-50-138c8ea1.png",
                    size: {
                        w: 2048,
                        h: 2048
                    },
                    scale: .5
                },
                frames: {
                    "map-building-house-floor-01.img": {
                        frame: {
                            x: 486,
                            y: 2,
                            w: 480,
                            h: 432
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 480,
                            h: 432
                        },
                        sourceSize: {
                            w: 480,
                            h: 432
                        }
                    },
                    "map-building-house-floor-02.img": {
                        frame: {
                            x: 2,
                            y: 2,
                            w: 480,
                            h: 432
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 480,
                            h: 432
                        },
                        sourceSize: {
                            w: 480,
                            h: 432
                        }
                    },
                    "map-building-mansion-ceiling.img": {
                        frame: {
                            x: 2,
                            y: 438,
                            w: 457,
                            h: 402
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 15,
                            w: 457,
                            h: 402
                        },
                        sourceSize: {
                            w: 512,
                            h: 432
                        }
                    },
                    "map-building-bank-floor-01.img": {
                        frame: {
                            x: 970,
                            y: 2,
                            w: 848,
                            h: 401
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 848,
                            h: 401
                        },
                        sourceSize: {
                            w: 848,
                            h: 401
                        }
                    },
                    "map-building-mansion-cellar-01a.img": {
                        frame: {
                            x: 970,
                            y: 407,
                            w: 433,
                            h: 401
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 433,
                            h: 401
                        },
                        sourceSize: {
                            w: 433,
                            h: 401
                        }
                    },
                    "map-building-warehouse-floor-01.img": {
                        frame: {
                            x: 463,
                            y: 438,
                            w: 500,
                            h: 400
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 500,
                            h: 400
                        },
                        sourceSize: {
                            w: 500,
                            h: 400
                        }
                    },
                    "map-building-warehouse-floor-02.img": {
                        frame: {
                            x: 2,
                            y: 844,
                            w: 440,
                            h: 400
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 440,
                            h: 400
                        },
                        sourceSize: {
                            w: 440,
                            h: 400
                        }
                    },
                    "map-building-bridge-lg-floor.img": {
                        frame: {
                            x: 446,
                            y: 844,
                            w: 1010,
                            h: 354
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 79,
                            y: 127,
                            w: 1010,
                            h: 354
                        },
                        sourceSize: {
                            w: 1168,
                            h: 608
                        }
                    },
                    "map-bunker-egg-chamber-floor-01a.img": {
                        frame: {
                            x: 1407,
                            y: 407,
                            w: 361,
                            h: 348
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 0,
                            w: 361,
                            h: 348
                        },
                        sourceSize: {
                            w: 369,
                            h: 353
                        }
                    },
                    "map-building-container-open-floor.img": {
                        frame: {
                            x: 1460,
                            y: 844,
                            w: 90,
                            h: 343
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 90,
                            h: 343
                        },
                        sourceSize: {
                            w: 90,
                            h: 346
                        }
                    },
                    "map-building-vault-floor.img": {
                        frame: {
                            x: 2,
                            y: 1248,
                            w: 322,
                            h: 337
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 322,
                            h: 337
                        },
                        sourceSize: {
                            w: 433,
                            h: 337
                        }
                    },
                    "map-building-dock-floor-01b.img": {
                        frame: {
                            x: 1554,
                            y: 844,
                            w: 81,
                            h: 332
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 81,
                            h: 332
                        },
                        sourceSize: {
                            w: 81,
                            h: 332
                        }
                    },
                    "map-building-house-ceiling.img": {
                        frame: {
                            x: 328,
                            y: 1248,
                            w: 360,
                            h: 324
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 360,
                            h: 324
                        },
                        sourceSize: {
                            w: 360,
                            h: 324
                        }
                    },
                    "map-building-police-floor-02.img": {
                        frame: {
                            x: 692,
                            y: 1248,
                            w: 305,
                            h: 321
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 32,
                            w: 305,
                            h: 321
                        },
                        sourceSize: {
                            w: 305,
                            h: 785
                        }
                    },
                    "map-building-barn-ceiling-01.img": {
                        frame: {
                            x: 1001,
                            y: 1248,
                            w: 600,
                            h: 312
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 600,
                            h: 312
                        },
                        sourceSize: {
                            w: 600,
                            h: 312
                        }
                    },
                    "map-building-teahouse-ceiling-01.img": {
                        frame: {
                            x: 2,
                            y: 1589,
                            w: 468,
                            h: 306
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 7,
                            w: 468,
                            h: 306
                        },
                        sourceSize: {
                            w: 480,
                            h: 320
                        }
                    },
                    "map-bunker-crossing-compartment-floor-02.img": {
                        frame: {
                            x: 1639,
                            y: 844,
                            w: 159,
                            h: 304
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 159,
                            h: 304
                        },
                        sourceSize: {
                            w: 160,
                            h: 304
                        }
                    },
                    "map-building-cabin-ceiling-01a.img": {
                        frame: {
                            x: 474,
                            y: 1589,
                            w: 456,
                            h: 288
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 456,
                            h: 288
                        },
                        sourceSize: {
                            w: 456,
                            h: 288
                        }
                    },
                    "map-building-teahouse-floor-01.img": {
                        frame: {
                            x: 934,
                            y: 1589,
                            w: 448,
                            h: 288
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 448,
                            h: 288
                        },
                        sourceSize: {
                            w: 448,
                            h: 288
                        }
                    },
                    "map-bunker-conch-compartment-ceiling-01.img": {
                        frame: {
                            x: 1386,
                            y: 1589,
                            w: 244,
                            h: 280
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 244,
                            h: 280
                        },
                        sourceSize: {
                            w: 244,
                            h: 280
                        }
                    },
                    "map-building-container-floor-01.img": {
                        frame: {
                            x: 1605,
                            y: 1248,
                            w: 90,
                            h: 266
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 90,
                            h: 266
                        },
                        sourceSize: {
                            w: 90,
                            h: 268
                        }
                    },
                    "map-bunker-conch-compartment-floor-01b.img": {
                        frame: {
                            x: 1822,
                            y: 2,
                            w: 200,
                            h: 214
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 200,
                            h: 214
                        },
                        sourceSize: {
                            w: 200,
                            h: 224
                        }
                    },
                    "map-building-hut-ceiling-02.img": {
                        frame: {
                            x: 1822,
                            y: 220,
                            w: 190,
                            h: 197
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 7,
                            w: 190,
                            h: 197
                        },
                        sourceSize: {
                            w: 204,
                            h: 204
                        }
                    },
                    "map-building-hut-ceiling-01.img": {
                        frame: {
                            x: 1822,
                            y: 421,
                            w: 190,
                            h: 197
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 7,
                            w: 190,
                            h: 197
                        },
                        sourceSize: {
                            w: 204,
                            h: 204
                        }
                    },
                    "map-building-panicroom-ceiling.img": {
                        frame: {
                            x: 1822,
                            y: 622,
                            w: 144,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 192
                        },
                        sourceSize: {
                            w: 144,
                            h: 192
                        }
                    },
                    "map-building-panicroom-floor.img": {
                        frame: {
                            x: 1822,
                            y: 818,
                            w: 144,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 192
                        },
                        sourceSize: {
                            w: 144,
                            h: 192
                        }
                    },
                    "map-building-container-open-ceiling-01.img": {
                        frame: {
                            x: 1822,
                            y: 1014,
                            w: 90,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 77,
                            w: 90,
                            h: 192
                        },
                        sourceSize: {
                            w: 90,
                            h: 346
                        }
                    },
                    "map-bunker-storm-floor-02.img": {
                        frame: {
                            x: 1822,
                            y: 1210,
                            w: 160,
                            h: 191
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 160,
                            h: 191
                        },
                        sourceSize: {
                            w: 160,
                            h: 192
                        }
                    },
                    "map-building-container-ceiling-05.img": {
                        frame: {
                            x: 1916,
                            y: 1014,
                            w: 90,
                            h: 191
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 90,
                            h: 191
                        },
                        sourceSize: {
                            w: 90,
                            h: 268
                        }
                    },
                    "map-building-container-ceiling-03.img": {
                        frame: {
                            x: 1822,
                            y: 1405,
                            w: 90,
                            h: 191
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 90,
                            h: 191
                        },
                        sourceSize: {
                            w: 90,
                            h: 268
                        }
                    },
                    "map-building-container-ceiling-01.img": {
                        frame: {
                            x: 1916,
                            y: 1405,
                            w: 90,
                            h: 191
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 90,
                            h: 191
                        },
                        sourceSize: {
                            w: 90,
                            h: 268
                        }
                    },
                    "map-building-container-ceiling-02.img": {
                        frame: {
                            x: 1822,
                            y: 1600,
                            w: 90,
                            h: 191
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 90,
                            h: 191
                        },
                        sourceSize: {
                            w: 90,
                            h: 268
                        }
                    },
