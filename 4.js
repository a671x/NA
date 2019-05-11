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

        function r(e, t, a, i, r, o, n, s, l, c, m, p) {
            this.initialized = !1, this.teamMode = 0, this.onJoin = m, this.onQuit = p, this.pixi = e, this.Re = t, this.Le = l, this.localization = a, this.config = i, this.Fe = r, this.je = o, this.qe = n, this.adManager = s, this.textureManager = c, this.victoryMusic = null, this.ws = null, this.connecting = !1, this.connected = !1
        }
        var o = a("8b1dfb45"),
            n = a("989ad62a"),
            s = n.Input,
            l = (n.EmoteSlot, a("8649e148")),
            c = a("7510cc08"),
            m = a("10899aea"),
            p = a("300e2704"),
            d = a("c2a798c8"),
            h = a("cb171a86"),
            u = a("e3e76f15"),
            g = a("ce29f17f"),
            y = a("26be8056"),
            w = a("2701b048"),
            x = a("c73dee75"),
            f = a("1ad3d2a4"),
            b = a("72409abe"),
            _ = a("af8ba00f"),
            S = a("172c57dc"),
            v = (a("e98400ad"), a("e5d16b4d")),
            k = a("604cff9c"),
            z = a("f398b7c7"),
            M = a("f034d167"),
            T = a("a7f094a3"),
            I = a("4b8d140f"),
            P = a("a48f3bb2"),
            C = a("d49cd95c"),
            A = a("753d6e4b"),
            E = a("119e8c4c"),
            D = a("fc6a992a"),
            O = a("a508b62a"),
            B = a("bc83ef37"),
            R = a("c60b5e9f"),
            L = a("6e43d1d7"),
            F = a("0955a76e"),
            j = (a("ce089fd5"), a("e2094860")),
            q = a("3160ea28"),
            N = a("d3da5587");
        r.prototype = {
            Ne: function(e, t, a) {
                var i = this;
                if (!(this.connecting || this.connected || this.initialized)) {
                    console.log("Joining", e), this.ws && (this.ws.onerror = function() {}, this.ws.onopen = function() {}, this.ws.onmessage = function() {}, this.ws.onclose = function() {}, this.ws.close(), this.ws = null), this.connecting = !0, this.connected = !1;
                    try {
                        this.ws = new WebSocket(e), this.ws.binaryType = "arraybuffer", this.ws.onerror = function(e) {
                            i.ws && i.ws.close()
                        }, this.ws.onopen = function() {
                            i.connecting = !1, i.connected = !0;
                            var e = i.config.get("playerName"),
                                a = v.validateEmoteLoadout(i.config.get("emotes")),
                                r = new p.JoinMsg;
                            r.protocol = n.protocolVersion, r.privData = t, r.name = e, r.emotes = a, r.useTouch = g.touch, r.isMobile = g.mobile, r.bot = !1, i.q(p.Msg.Join, r, 2048)
                        }, this.ws.onmessage = function(e) {
                            for (var t = new p.MsgStream(e.data);;) {
                                var a = t.deserializeMsgType();
                                if (a == p.Msg.None) break;
                                i.Ve(a, t.getStream())
                            }
                        }, this.ws.onclose = function() {
                            var e = i.Ge && i.Ge.displayingStats,
                                t = i.connecting,
                                r = i.connected;
                            if (i.connecting = !1, i.connected = !1, t) a();
                            else if (r && !i.gameOver && !e) {
                                var o = i.disconnectMsg || "index-host-closed";
                                i.onQuit(o)
                            }
                        }
                    } catch (e) {
                        this.connecting = !1, this.connected = !1, a()
                    }
                }
            },
            o: function() {
                var e;
                this.canvasMode = this.pixi.renderer.type == o.RENDERER_TYPE.CANVAS, this._ = !1, this.Ue = 0, this.U = !1, this.He = !1, this.We = new j.Ke(this.Fe, this.config), this.te = new f.j, this.Ze = new R.Xe(this, this.canvasMode), this.Ye = new E.d(this.Ze), this.Je = new C.Qe, this.$e = new O.et, this.tt = new x.at, this.it = new M.rt, this.ot = new B.nt, this.st = new k._e, this.lt = new D.ct(this.Re), this.mt = new w.Y, this.dt = new F.p, this.ht = new b.ze, this.ut = new S.f, this.gt = new P.yt, this.wt = new T.xt(this.canvasMode), this.Ge = new q.ce(this, this.Re, this.Ye, this.lt, this.localization, this.canvasMode, this.We, this.je, this.qe, this.adManager), this.ft = new N.bt(this.localization, this.je), this._t = new v.St(this.Re, this.Ge, this.$e, this.te, this.Je), this.vt = new L.ve(this.Ye, this.Re, this.Ge);
                var t = (e = {}, i(e, l.Type.Player, this.$e.be), i(e, l.Type.Obstacle, this.Je.me), i(e, l.Type.Loot, this.gt.kt), i(e, l.Type.DeadBody, this.ht.ke), i(e, l.Type.Building, this.Je.zt), i(e, l.Type.Structure, this.Je.Mt), i(e, l.Type.Decal, this.ut.u), i(e, l.Type.Projectile, this.ot.Tt), i(e, l.Type.Smoke, this.dt.e), i(e, l.Type.Airdrop, this.mt.Z), e);
                this.It = new A.Creator;
                for (var a in t) t.hasOwnProperty(a) && this.It.registerType(a, t[a]);
                this.debugDisplay = new o.Graphics;
                for (var r = [this.Je.display.ground, this.Ze.layers[0], this.Ze.ground, this.Ze.layers[1], this.Ze.layers[2], this.Ze.layers[3], this.debugDisplay, this.wt.gasRenderer.display, this.We.container, this._t.container, this.Ge.container, this.Ge.pieTimer.container, this._t.indContainer], n = 0; n < r.length; n++) {
                    var s = r[n];
                    s && (s.interactiveChildren = !1, this.pixi.stage.addChild(s))
                }
                this.disconnectMsg = "", this.playing = !1, this.gameOver = !1, this.spectating = !1, this.inputMsgTimeout = 0, this.prevInputMsg = new p.InputMsg, this.playingTicker = 0, this.updateRecvCount = 0, this.playedAssignRoleSfx = {}, this.Pt = 0, this.Ct = 0, this.At = null, this.Et = !1, this.I = 1, this.debugZoom = 1, this.useDebugZoom = !1, this.seq = 0, this.seqInFlight = !1, this.seqSendTime = 0, this.pings = [], this.debugPingTime = 0, this.te.setShakeEnabled(this.config.get("screenShake")), this.anonPlayerNames = this.config.get("anonPlayerNames"), this.Dt(), this.initialized = !0
            },
            n: function() {
                if (this.ws && (this.ws.onmessage = function() {}, this.ws.close(), this.ws = null), this.connecting = !1, this.connected = !1, this.initialized)
                    for (this.initialized = !1, this._t.n(), this.ft.n(), this.Ge.n(), this.wt.free(), this.mt.n(), this.lt.n(), this.Je.n(), this.Ye.n(), this.Ze.n(), this.Re.stopAll(); this.pixi.stage.children.length > 0;) {
                        var e = this.pixi.stage.children[0];
                        this.pixi.stage.removeChild(e), e.destroy({
                            children: !0
                        })
                    }
            },
            Ot: function() {
                return this.initialized && this.playing && !this.spectating && !this.Ge.displayingStats
            },
            c: function(e) {
                var t = this.dt.particles,
                    a = this.Je.me.m(),
                    i = 0;
                this._ = !0;
                var r = {};
                r.render = r.render || {}, this.playing && (this.playingTicker += e), this.$e.c(e, this.Ct, this.teamMode, this.Ze, this.Ye, this.te, this.Je, this.je, this.Re, this._t.wheelKeyTriggered, this.Ge.displayingStats, this.spectating), this.updateAmbience(), this.te.pos = d.copy(this.At.pos), this.te.applyShake();
                var o = this.At.Bt(),
                    l = m.min(this.te.screenWidth, this.te.screenHeight),
                    h = m.max(this.te.screenWidth, this.te.screenHeight),
                    u = m.max(l * (16 / 9), h);
                this.te.I = .5 * u / (o * this.te.ppu);
                var w = this.At.zoomFast ? 3 : 2,
                    x = this.At.zoomFast ? 3 : 1.4,
                    f = this.te.I > this.te.k ? w : x;
                this.te.k = m.lerp(e * f, this.te.k, this.te.I), this.Re.cameraPos = d.copy(this.te.pos), this.Fe.de(I.Key.Escape) && this.Ge.toggleEscMenu(), (this.je.isBindPressed(s.ToggleMap) || this.Fe.de(I.Key.G) && !this.je.isKeyBound(I.Key.G)) && this.Ge.displayMapLarge(!1), this.je.isBindPressed(s.CycleUIMode) && this.Ge.cycleVisibilityMode(), (this.je.isBindPressed(s.HideUI) || this.Fe.de(I.Key.Escape) && !this.Ge.hudVisible) && this.Ge.cycleHud();
                var b = this.At.pos,
                    _ = this.te.O(this.Fe.pe),
                    S = d.sub(_, b),
                    v = d.length(S),
                    k = v > 1e-5 ? d.div(S, v) : d.create(1, 0);
                this._t.wheelDisplayed && (v = this.prevInputMsg.toMouseLen, k = this.prevInputMsg.toMouseDir);
                var z = new p.InputMsg;
                if (z.seq = this.seq, !this.spectating) {
                    if (g.touch) {
                        var M = this.We.getTouchMovement(this.te),
                            T = this.We.getAimMovement(this.At, this.te),
                            P = d.copy(T.aimMovement.toAimDir);
                        if (this.We.turnDirTicker -= e, this.We.moveDetected && !T.touched) {
                            var C = d.normalizeSafe(M.toMoveDir, d.create(1, 0)),
                                A = this.We.turnDirTicker < 0 ? C : T.aimMovement.toAimDir;
                            this.We.setAimDir(A), P = A
                        }
                        T.touched && (this.We.turnDirTicker = this.We.turnDirCooldown), this.We.moveDetected ? (z.touchMoveDir = d.normalizeSafe(M.toMoveDir, d.create(1, 0)), z.touchMoveLen = Math.round(255 * m.clamp(M.toMoveLen, 0, 1))) : z.touchMoveLen = 0, z.touchMoveActive = !0;
                        var E = T.aimMovement.toAimLen,
                            D = m.clamp(E / this.We.padPosRange, 0, 1) * n.player.throwableMaxMouseDist;
                        z.toMouseLen = D, z.toMouseDir = P
                    } else z.moveLeft = this.je.isBindDown(s.MoveLeft) || this.Fe.we(I.Key.Left) && !this.je.isKeyBound(I.Key.Left), z.moveRight = this.je.isBindDown(s.MoveRight) || this.Fe.we(I.Key.Right) && !this.je.isKeyBound(I.Key.Right), z.moveUp = this.je.isBindDown(s.MoveUp) || this.Fe.we(I.Key.Up) && !this.je.isKeyBound(I.Key.Up), z.moveDown = this.je.isBindDown(s.MoveDown) || this.Fe.we(I.Key.Down) && !this.je.isKeyBound(I.Key.Down), z.toMouseDir = d.copy(k), z.toMouseLen = v;
                    z.touchMoveDir = d.normalizeSafe(z.touchMoveDir, d.create(1, 0)), z.touchMoveLen = m.clamp(z.touchMoveLen, 0, 255), z.toMouseDir = d.normalizeSafe(z.toMouseDir, d.create(1, 0)), z.toMouseLen = m.clamp(z.toMouseLen, 0, p.Constants.MouseMaxDist), z.shootStart = this.je.isBindPressed(s.Fire) || this.We.Rt, z.shootHold = this.je.isBindDown(s.Fire) || this.We.Rt, z.portrait = this.te.screenWidth < this.te.screenHeight;
                    for (var O = [s.Reload, s.Revive, s.Use, s.Loot, s.Cancel, s.EquipPrimary, s.EquipSecondary, s.EquipThrowable, s.EquipMelee, s.EquipNextWeap, s.EquipPrevWeap, s.EquipLastWeap, s.EquipOtherGun, s.EquipPrevScope, s.EquipNextScope, s.StowWeapons], B = 0; B < O.length; B++) {
                        var R = O[B];
                        this.je.isBindPressed(R) && z.addInput(R)
                    }
                    if (this.je.isBindPressed(s.Interact)) {
                        for (var L = [s.Revive, s.Use, s.Loot], F = [], j = 0; j < L.length; j++) {
                            var q = L[j];
                            this.je.getBind(q) || F.push(q)
                        }
                        if (F.length == L.length) z.addInput(s.Interact);
                        else
                            for (var N = 0; N < F.length; N++) z.addInput(F[N])
                    }(this.je.isBindPressed(s.SwapWeapSlots) || this.Ge.swapWeapSlots) && (z.addInput(s.SwapWeapSlots), this.At.gunSwitchCooldown = 0), this.Ge.reloadTouched && z.addInput(s.Reload), this.Ge.interactionTouched && (z.addInput(s.Interact), z.addInput(s.Cancel));
                    for (var V = 0; V < this.ft.uiEvents.length; V++) {
                        var G = this.ft.uiEvents[V];
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
                    this.je.isBindPressed(s.UseBandage) ? z.useItem = "bandage" : this.je.isBindPressed(s.UseHealthKit) ? z.useItem = "healthkit" : this.je.isBindPressed(s.UseSoda) ? z.useItem = "soda" : this.je.isBindPressed(s.UsePainkiller) && (z.useItem = "painkiller");
                    for (var W = !1, K = 0; K < this.ft.uiEvents.length; K++) {
                        var Z = this.ft.uiEvents[K];
                        if ("drop" == Z.action) {
                            var X = new p.DropItemMsg;
                            if ("weapon" == Z.type) {
                                var Y = this.At.ie.weapons;
                                X.item = Y[Z.data].name, X.weapIdx = Z.data
                            } else {
                                var J = "";
                                J = "helmet" == Z.data ? this.At.ae.helmet : "chest" == Z.data ? this.At.ae.chest : Z.data, X.item = J
                            }
                            "" != X.item && (this.q(p.Msg.DropItem, X, 128), "fists" != X.item && (W = !0))
                        }
                    }
                    W && this.Re.playSound("loot_drop_01", {
                        channel: "ui"
                    })
                }
                var Q = this.Ge.specBegin,
                    $ = this.Ge.specNext || this.spectating && this.Fe.de(I.Key.Right),
                    ee = this.Ge.specPrev || this.spectating && this.Fe.de(I.Key.Left),
                    te = this.Fe.de(I.Key.Right) || this.Fe.de(I.Key.Left);
                if (Q || this.spectating && $ || ee) {
                    var ae = new p.SpectateMsg;
                    ae.specBegin = Q, ae.specNext = $, ae.specPrev = ee, ae.specForce = te, this.q(p.Msg.Spectate, ae, 128)
                }
                this.Ge.specBegin = !1, this.Ge.specNext = !1, this.Ge.specPrev = !1, this.Ge.reloadTouched = !1, this.Ge.interactionTouched = !1, this.Ge.swapWeapSlots = !1;
                var ie = !1;
                for (var re in z)
                    if (z.hasOwnProperty(re)) {
                        if ("inputs" == re) ie = z[re].length > 0;
                        else if ("toMouseDir" == re) {
                            var oe = m.clamp(d.dot(z[re], this.prevInputMsg[re]), -1, 1),
                                ne = m.rad2deg(Math.acos(oe));
                            ie = ne > .4
                        } else "toMouseLen" == re ? ie = Math.abs(this.prevInputMsg[re] - z[re]) > .5 : "shootStart" == re ? ie = z[re] || z[re] != this.prevInputMsg[re] : this.prevInputMsg[re] != z[re] && (ie = !0);
                        if (ie) break
                    }
                if (this.inputMsgTimeout -= e, (ie || this.inputMsgTimeout < 0) && (this.seqInFlight || (this.seq = (this.seq + 1) % 256, this.seqSendTime = Date.now(), this.seqInFlight = !0, z.seq = this.seq), this.q(p.Msg.Input, z, 128), this.inputMsgTimeout = 1, this.prevInputMsg = z), this.ft.flushInput(), this.Je.c(e, this.At, this.$e, this.Ye, this.Re, this.Le, this.Ze, this.te, t, r), this.gt.c(e, this.At, this.te, r), this.tt.c(e, this.$e, this.Je, this.te, this.At, this.Ze, this.Ye, this.Re), this.it.c(e, this.$e, this.Je, this.te, this.At, this.Ze, this.Ye, this.Re), this.ot.c(e, this.Ye, this.Re, this.At, this.Je, this.Ze, this.te), this.st.c(e, this.Je, this.$e, this.te, this.Ye, this.Re, r), this.mt.c(e, this.At, this.te, this.Je, this.Ye, this.Ze, this.Re), this.lt.c(e, this.te, this.At, this.Je, this.Ze), this.dt.c(e, this.te, this.At, this.Je, this.Ze), this.vt.c(e, this.Ct, this.$e, this.Ye, this.Re), this.Ye.c(e, this.te, r), this.ht.c(e, this.$e, this.At, this.anonPlayerNames, this.Pt, this.Je, this.te, this.Ze), this.ut.c(e, this.te, this.Ze, r), this.Ge.c(e, this.At, this.Je, this.wt, this.gt, this.$e, this.te, this.teamMode, this.Je.factionMode), this.ft.c(e, this.At, this.spectating, this.$e, this.gt, this.Je, this.je), this._t.c(e, this.Pt, this.At, this.teamMode, this.ht, this.Ze, this.Fe, this.je, this.spectating), this.We.update(e, this.At, this.Je, this.te, this.Ze), this.Ze.c(e, this.te, this.Je, r), !this.He && this.Je.Lt && (this.Je.U || this._t.hasSocialUnlocks()) && this._t.hasCustomEmotes()) {
                    this.He = !0;
                    var se = new p.LoadoutMsg;
                    se.emotes = [];
                    for (var le = 0; le < this._t.emoteLoadout.length; le++) se.emotes.push(this._t.emoteLoadout[le]);
                    se.custom = this._t.hasCustomEmotes(), this.q(p.Msg.Loadout, se, 128)
                }
                for (var ce = 0; ce < this._t.newPings.length; ce++) {
                    var me = this._t.newPings[ce],
                        pe = new p.EmoteMsg;
                    pe.type = me.type, pe.pos = me.pos, pe.isPing = !0, this.q(p.Msg.Emote, pe, 128)
                }
                this._t.newPings = [];
                for (var de = 0; de < this._t.newEmotes.length; de++) {
                    var he = this._t.newEmotes[de],
                        ue = new p.EmoteMsg;
                    ue.type = he.type, ue.pos = he.pos, ue.isPing = !1, this.q(p.Msg.Emote, ue, 128)
                }
                if (this._t.newEmotes = [], this.Ft(e, r), ++this.Ue % 30 == 0) {
                    for (var ge = c.Ie, ye = 0; ye < t.length; ye++) {
                        var we = t[ye];
                        we.active && !we.fade && ge(we, c.Me) && i++
                    }
                    for (var xe = 0; xe < a.length; xe++) {
                        var fe = a[xe];
                        fe.active && !fe.dead && ge(fe, c.Te) && i++
                    }
                    i && (this.U = !0), i && this.Et && y.U(this)
                }
            },
            Ft: function(e, t) {
                var a = this.Je.mapLoaded ? this.Je.getMapDef().biome.colors.grass : 8433481;
                this.pixi.renderer.backgroundColor = a, this.$e.render(this.te, t), this.tt.render(this.te, t), this.it.render(this.te), this.Je.render(this.te), this.wt.render(this.te), this.Ge.render(this.At.pos, this.wt, this.te, this.Je, this.lt, t), this._t.render(this.te), _.flush()
            },
            updateAmbience: function() {
                var e = this.At.pos,
                    t = 0,
                    a = 0,
                    i = 1;
                if (this.Je.isInOcean(e)) t = 1, a = 0, i = 0;
                else {
                    var r = this.Je.distanceToShore(e);
                    t = m.delerp(r, 50, 0), a = 0;
                    for (var o = 0; o < this.Je.terrain.rivers.length; o++) {
                        var n = this.Je.terrain.rivers[o],
                            s = n.spline.getClosestTtoPoint(e),
                            l = n.spline.getPos(s),
                            c = d.length(d.sub(l, e)),
                            p = n.waterWidth + 2,
                            h = m.delerp(c, 30 + p, p),
                            u = m.clamp(n.waterWidth / 8, .25, 1);
                        a = m.max(h * u, a)
                    }
                    a *= 1 - t, 1 == this.At.layer && (a = 0), i = m.clamp(1 - (t + a), 0, 1)
                }
                this.Le.getTrack("wind").volume = i, this.Le.getTrack("river").volume = a, this.Le.getTrack("waves").volume = t
            },
            Dt: function() {
                this.te.screenWidth = g.screenWidth, this.te.screenHeight = g.screenHeight, this.Je.resize(this.pixi.renderer, this.canvasMode), this.wt.resize(), this.Ge.resize(this.Je, this.te), this.We.resize(), this.Ze.resize(this.Je, this.te)
            },
            jt: function(e) {
                var t = {
                    audioManager: this.Re,
                    renderer: this.Ze,
                    particleBarn: this.Ye,
                    map: this.Je,
                    smokeBarn: this.dt,
                    decalBarn: this.ut
                };
                e.activePlayerIdDirty && (this.Ct = e.activePlayerId);
                for (var a = 0; a < e.playerInfos.length; a++) this.$e.qt(e.playerInfos[a]);
                for (var i = 0; i < e.deletedPlayerIds.length; i++) {
                    var r = e.deletedPlayerIds[i];
                    this.$e.Nt(r)
                }
                if ((e.playerInfos.length > 0 || e.deletedPlayerIds.length > 0) && this.$e.Vt(), e.playerStatusDirty) {
                    var o = this.$e.oe(this.Ct).teamId;
                    this.$e.Gt(o, e.playerStatus, this.Je.factionMode)
                }
                if (e.groupStatusDirty) {
                    var n = this.$e.oe(this.Ct).groupId;
                    this.$e.Ut(n, e.groupStatus)
                }
                for (var s = 0; s < e.delObjIds.length; s++) e.delObjIds[s], this.It.deleteObj(e.delObjIds[s]);
                for (var l = 0; l < e.fullObjects.length; l++) {
                    var c = e.fullObjects[l];
                    this.It.updateObjFull(c.__type, c.__id, c, t)
                }
                for (var m = 0; m < e.partObjects.length; m++) {
                    var p = e.partObjects[m];
                    this.It.updateObjPart(p.__id, p, t)
                }
                this.spectating = this.Ct != this.Pt, this.At = this.$e.Se(this.Ct), this.At.Ht(e.activePlayerData, this.$e), e.activePlayerData.weapsDirty && (this.Ge.weapsDirty = !0), this.spectating && (this.Ge.setSpectateTarget(this.Ct, this.Pt, this.teamMode, this.anonPlayerNames, this.$e), this.We.hideAll()), this.At.layer = this.At.ae.layer, this.Ze.setActiveLayer(this.At.layer), this.Re.activeLayer = this.At.layer;
                var d = this.At.isUnderground(this.Je);
                this.Ze.setUnderground(d), this.Re.underground = d, e.aliveDirty && (1 == e.aliveCounts.length ? this.Ge.updatePlayersAlive(e.aliveCounts[0]) : e.aliveCounts.length >= 2 && (this.Ge.updatePlayersAliveRed(e.aliveCounts[0]), this.Ge.updatePlayersAliveBlue(e.aliveCounts[1]))), this.wt.setProgress(e.gasT), e.gasDirty && this.wt.setFullState(e.gasT, e.gasData, this.Je, this.Ge);
                for (var u = 0; u < e.bullets.length; u++) {
                    var g = e.bullets[u];
                    h[g.bulletType].addFlare ? this.it.addFlare(g, this.$e, this.Ze) : this.tt.addBullet(g, this.$e, this.Ze), g.shotFx && this.vt.addShot(g.pos, g.layer, g.playerId, g.shotSourceType, g.shotOffhand, g.lastShot)
                }
                for (var y = 0; y < e.explosions.length; y++) {
                    var w = e.explosions[y];
                    this.st.addExplosion(w.type, w.pos, w.layer)
                }
                for (var x = 0; x < e.emotes.length; x++) {
                    var f = e.emotes[x];
                    f.isPing ? this._t.addPing(f, this.Je.factionMode) : this._t.addEmote(f)
                }
                this.lt.Wt(e.planes, this.Je);
                for (var b = 0; b < e.airstrikeZones.length; b++) this.lt.Kt(e.airstrikeZones[b]);
                this.Ge.se(e.mapIndicators), this.updateRecvCount++
            },
            Ve: function(e, t) {
                var a = this;
                switch (e) {
                    case p.Msg.Joined:
                        var r = new p.JoinedMsg;
                        r.deserialize(t), this.onJoin(), this.teamMode = r.teamMode, this.Pt = r.playerId, this.Et = !0, this._t.updateEmoteWheel(r.emotes), r.started || this.Ge.setWaitingForPlayers(!0), this.Ge.removeAds(), this.victoryMusic && (this.victoryMusic.stop(), this.victoryMusic = null), document.hasFocus() || this.Re.playSound("notification_start_01", {
                            channel: "ui"
                        });
                        break;
                    case p.Msg.Map:
                        var o = new p.MapMsg;
                        o.deserialize(t), this.Je.loadMap(o, this.te, this.canvasMode, this.Ye);
                        var s = this.Je.getMapDef().assets;
                        this.Re.loadSoundList(s.audio), this.textureManager.loadAtlasList(s.atlases), this.$e.onMapLoad(this.Je), this.tt.onMapLoad(this.Je), this.Ye.onMapLoad(this.Je), this.Je.renderMap(this.pixi.renderer, this.canvasMode), this.Ge.resize(this.Je, this.te);
                        break;
                    case p.Msg.Update:
                        var l = new p.UpdateMsg;
                        l.deserialize(t, this.It), this.playing = !0, this.jt(l);
                        break;
                    case p.Msg.Kill:
                        var c = new p.KillMsg;
                        c.deserialize(t);
                        var m = this.$e.oe(c.targetId),
                            d = this.$e.oe(c.killCreditId),
                            h = c.itemSourceType || c.mapSourceType,
                            g = this.$e.oe(this.Ct).teamId,
                            w = c.downed && !c.killed || c.damageType == n.DamageType.Gas || c.damageType == n.DamageType.Bleeding || c.damageType == n.DamageType.Airdrop,
                            x = w ? d : this.$e.oe(c.killerId),
                            f = m.nameTruncated,
                            b = d.nameTruncated,
                            _ = x.nameTruncated;
                        if (this.anonPlayerNames) {
                            var S = function(e) {
                                return e.playerId == a.Ct || e.teamId == g
                            };
                            S(m) || (f = m.anonName), S(d) || (b = d.anonName), S(x) || (_ = x.anonName)
                        }
                        f = y.htmlEscape(f), b = y.htmlEscape(b), _ = y.htmlEscape(_), c.killCreditId == this.Ct ? this.Ge.showKill({
                            name: b,
                            kills: c.killerKills,
                            completeKill: c.killerId == this.Ct
                        }, {
                            name: f,
                            suicide: c.killerId == c.targetId || c.killCreditId == c.targetId,
                            killed: c.killed,
                            downed: c.downed,
                            teamKill: m.teamId == d.teamId
                        }, h, c.damageType, this.spectating) : c.targetId == this.Ct && c.downed && !c.killed && this.Ge.showDowned({
                            name: b,
                            damageType: c.damageType
                        }, {
                            name: f,
                            suicide: c.killerId == c.targetId || c.killCreditId == c.targetId
                        }, h, c.damageType, this.spectating);
                        var v = this.ft.getKillFeedText(f, x.teamId ? _ : "", h, c.damageType, c.downed && !c.killed),
                            k = this.ft.getKillFeedColor(g, m.teamId, d.teamId, this.Je.factionMode);
                        if (this.ft.addKillFeed(v, k), c.type == n.DamageType.Player && this.tt.createBulletHit(this.$e, c.targetId, this.Re), c.targetRole == n.Role.FactionLeader) {
                            var z = this.ft.getRoleKillFeedText(_, m.teamId, c.damageType, c.downed && !c.killed, n.Role.FactionLeader),
                                M = this.$e.getTeamColor(m.teamId),
                                T = y.colorToHexString(M);
                            this.ft.addKillFeed(z, T), c.killed && this.Re.playSound("leader_dead_01", {
                                channel: "ui"
                            })
                        }
                        if (c.targetRole == n.Role.WoodsKing) {
                            var I = this.ft.getRoleKillFeedText(_, m.teamId, c.damageType, c.downed && !c.killed, n.Role.WoodsKing);
                            this.ft.addKillFeed(I, "#12ff00"), c.killed && this.Re.playSound("leader_dead_01", {
                                channel: "ui"
                            })
                        }
                        break;
                    case p.Msg.AssignRole:
                        var P = new p.AssignRoleMsg;
                        P.deserialize(t);
                        var C = this.$e.oe(P.playerId);
                        if (!C) break;
                        var A = this.ft.getAssignRoleKillFeedText(P.role, C.nameTruncated, C.teamId);
                        if (A) {
                            var E = this.$e.getTeamColor(C.teamId),
                                D = y.colorToHexString(E);
                            this.ft.addKillFeed(A, D)
                        }
                        if (!this.playedAssignRoleSfx[P.role]) {
                            var O, B = (O = {}, i(O, n.Role.FactionLeader, "leader_assigned_01"), i(O, n.Role.Lieutenant, "lt_assigned_01"), i(O, n.Role.Medic, "medic_assigned_01"), O),
                                R = B[P.role];
                            R && this.Re.playSound(R, {
                                channel: "ui"
                            }), this.playedAssignRoleSfx[P.role] = !0
                        }
                        this.Pt == P.playerId && this.Ge.displayAssignRoleAnnouncement(P.role, C.teamId);
                        break;
                    case p.Msg.PlayerStats:
                        var L = new p.PlayerStatsMsg;
                        L.deserialize(t), this.Ge.setLocalStats(L.playerStats), this.Ge.showTeamAd();
                        break;
                    case p.Msg.Stats:
                        var F = new p.StatsMsg;
                        F.deserialize(t), y.K(F.data, this);
                        break;
                    case p.Msg.GameOver:
                        var j = new p.GameOverMsg;
                        j.deserialize(t), this.gameOver = j.gameOver;
                        for (var q = this.$e.oe(this.Pt).teamId, N = 0; N < j.playerStats.length; N++) {
                            var V = j.playerStats[N];
                            if (V.playerId == this.Pt) {
                                this.Ge.setLocalStats(V);
                                break
                            }
                        }
                        this.Ge.showStats(j.playerStats, j.teamId, j.teamRank, j.winningTeamId, j.gameOver, q, this.teamMode, this.spectating, this.$e, this.Le, this.Re, this.Je.factionMode), q == j.winningTeamId && (this.victoryMusic = this.Re.playSound("menu_music", {
                            channel: "music",
                            delay: 1300,
                            forceStart: !0
                        })), this.We.hideAll();
                        break;
                    case p.Msg.Pickup:
                        var G = new p.PickupMsg;
                        if (G.deserialize(t), G.type == p.PickupMsgType.Success && G.item) {
                            var U = u[G.item];
                            this.Re.playSound(U.sound.pickup, {
                                channel: "ui"
                            }), "throwable" == U.type && (this.At.lastThrowablePickupSfxTicker = .3)
                        } else this.ft.displayPickupMessage(G.type);
                        break;
                    case p.Msg.Disconnect:
                        var H = new p.DisconnectMsg;
                        H.deserialize(t), this.disconnectMsg = H.reason
                }
            },
            q: function(e, t, a) {
                var i = a || 128,
                    r = new p.MsgStream(new ArrayBuffer(i));
                r.serializeMsg(e, t), this.Zt(r)
            },
            Zt: function(e) {
                if (this.ws && this.ws.readyState == this.ws.OPEN) try {
                    this.ws.send(e.getBuffer())
                } catch (e) {
                    z.storeGeneric("error", "sendMessageException"), this.ws.close()
                }
            }
        }, e.exports = {
            Xt: r
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
                    atlases: ["gradient", "loadout", "shared", "halloween"]
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
            this._ = !1, this.kt = new d.Pool(i), this.Yt = null
        }
        var o = a("8b1dfb45"),
            n = a("989ad62a"),
            s = a("10899aea"),
            l = a("1901e2d9"),
            c = a("c2a798c8"),
            m = a("e3e76f15"),
            p = (a("af8ba00f"), a("ce29f17f")),
            d = a("753d6e4b");
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
                    var r = m[this.name];
                    this.rad = n.lootRadius[r.type], this.imgScale = 1.25 * r.lootImg.scale;
                    var s = r.lootImg.innerScale || .8;
                    this.sprite.scale.set(s, s), this.sprite.texture = o.Texture.fromImage(r.lootImg.sprite), this.sprite.tint = r.lootImg.tint, this.container.texture = r.lootImg.border ? o.Texture.fromImage(r.lootImg.border) : o.Texture.EMPTY;
                    var l = m[r.ammo];
                    l ? this.container.tint = l.lootImg.tintDark : r.lootImg.borderTint ? this.container.tint = r.lootImg.borderTint : this.container.tint = 0, this.sprite.rotation = r.lootImg.rot ? r.lootImg.rot : 0, this.sprite.scale.x = r.lootImg.mirror ? -s : s, this.container.visible = !0
                }(a || t) && i.renderer.addPIXIObj(this.container, this.layer, 13, this.__id)
            }
        }, r.prototype = {
            c: function(e, t, a, i) {
                this._ = !0, this.Yt = null;
                for (var r = Number.MAX_VALUE, o = this.kt.m(), m = 0; m < o.length; m++) {
                    var d = o[m];
                    if (d.active) {
                        if (l.sameLayer(d.layer, t.layer)) {
                            var h = d.pos,
                                u = p.touch ? t.rad + d.rad * n.player.touchLootRadMult : d.rad,
                                g = c.sub(t.pos, h),
                                y = c.lengthSqr(g);
                            y < u * u && y < r && (r = y, this.Yt = d)
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
            Jt: function() {
                return this.Yt
            }
        }, e.exports = {
            yt: r
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
            this.bodySprite = o(), this.chestSprite = o(), this.helmetSprite = o(), this.backpackSprite = o(), this.handLSprite = o(), this.handRSprite = o(), this.footLSprite = o(), this.footRSprite = o(), this.hipSprite = o(), this.gunLSprites = new E, this.gunRSprites = new E, this.objectLSprite = o(), this.objectRSprite = o(), this.meleeSprite = o(), this.bodySubmergeSprite = o(), this.handLSubmergeSprite = o(), this.handRSubmergeSprite = o(), this.footLSubmergeSprite = o(), this.footRSubmergeSprite = o(), this.bodyEffectSprite = o(), this.patchSprite = o(), this.bodySprite.addChild(this.bodySubmergeSprite), this.handLSprite.addChild(this.handLSubmergeSprite), this.handRSprite.addChild(this.handRSubmergeSprite), this.footLSprite.addChild(this.footLSubmergeSprite), this.footRSprite.addChild(this.footRSubmergeSprite), this.handLContainer = new c.Container, this.handLContainer.addChild(this.gunLSprites.container), this.handLContainer.addChild(this.handLSprite), this.handLContainer.addChild(this.objectLSprite), this.handRContainer = new c.Container, this.handRContainer.addChild(this.gunRSprites.container), this.handRContainer.addChild(this.meleeSprite), this.handRContainer.addChild(this.handRSprite), this.handRContainer.addChild(this.objectRSprite), this.footLContainer = new c.Container, this.footLContainer.addChild(this.footLSprite), this.footRContainer = new c.Container, this.footRContainer.addChild(this.footRSprite), this.bodyContainer = new c.Container, this.bodyContainer.addChild(this.footLContainer), this.bodyContainer.addChild(this.footRContainer), this.bodyContainer.addChild(this.backpackSprite), this.bodyContainer.addChild(this.bodySprite), this.bodyContainer.addChild(this.chestSprite), this.bodyContainer.addChild(this.hipSprite), this.bodyContainer.addChild(this.patchSprite), this.bodyContainer.addChild(this.bodyEffectSprite), this.bodyContainer.addChild(this.handLContainer), this.bodyContainer.addChild(this.handRContainer), this.bodyContainer.addChild(this.helmetSprite), this.container = new c.Container, this.container.addChild(this.bodyContainer), this.nameText = r(), this.container.addChild(this.nameText), this.auraContainer = new c.Container, this.auraCircle = o(), this.auraContainer.addChild(this.auraCircle), this.initSubmergeSprites(), this.bones = [], this.anim = {
                type: d.None,
                data: {},
                seq: -1,
                ticker: 0,
                bones: []
            };
            for (var e = Object.keys(A).length, t = 0; t < e; t++) this.bones.push(new C), this.anim.bones.push({
                weight: 0,
                pose: new C
            });
            this.isOnBrightSurface = !1, this.wasInWater = !1, this.weapType = "", this.visualsDirty = !1, this.stepDistance = 0, this.zoomFast = !1, this.playedDryFire = !1, this.lastSwapIdx = -1, this.cycleSoundInstance = null, this.actionSoundInstance = null, this.useItemEmitter = null, this.useAbilityEmitter = null, this.downed = !1, this.wasDowned = !1, this.bleedTicker = 0, this.submersion = 0, this.gunRecoilL = 0, this.gunRecoilR = 0, this.fireDelay = 0, this.throwableState = "equip", this.throwableStatePrev = this.throwableState, this.lastThrowablePickupSfxTicker = 0, this.isNearDoorError = !1, this.doorErrorTicker = 0, this.noCeilingRevealTicker = 0, this.frozenTicker = 0, this.updateFrozenImage = !0, this.viewAabb = {
                min: w.create(0, 0),
                max: w.create(0, 0)
            }, this.auraViewFade = 0, this.auraPulseTicker = 0, this.auraPulseDir = 1, this.renderLayer = 0, this.renderZOrd = 18, this.renderZIdx = 0, this._ = !1, this.Qt = !1, this.action = {}, this.ae = {}, this.ie = {}, this.rad = m.player.radius, this.bodyRad = this.rad, this.pos = w.create(0, 0), this.posOld = w.create(0, 0), this.dir = w.create(1, 0), this.dirOld = w.create(1, 0), this.layer = 0
        }

        function s() {
            this.be = new M.Pool(n), this.$t = {}, this.playerIds = [], this.teamInfo = {}, this.groupInfo = {}, this.playerStatus = {}
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
            g = a("300e2704"),
            y = a("1901e2d9"),
            w = a("c2a798c8"),
            x = a("10899aea"),
            f = a("34e32c48"),
            b = a("6b42806d"),
            _ = a("6bad552e"),
            S = a("6d494b5c"),
            v = a("ce29f17f"),
            k = (a("af8ba00f"), a("f398b7c7")),
            z = a("26be8056"),
            M = a("753d6e4b"),
            T = a("6e43d1d7"),
            I = a("e3e76f15"),
            P = a("aca73f78"),
            C = _.Pose,
            A = _.Bones,
            E = function() {
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
                        var a = I[e],
                            i = a.worldImg;
                        if (this.gunBarrel.texture = c.Texture.fromImage(i.sprite), this.gunBarrel.anchor.set(.5, 1), this.gunBarrel.position.set(0, 0), this.gunBarrel.scale.set(.5 * i.scale.x / t, .5 * i.scale.y / t), this.gunBarrel.tint = i.tint, this.gunBarrel.visible = !0, i.magImg) {
                            var r = i.magImg;
                            this.gunMag.texture = c.Texture.fromImage(r.sprite), this.gunMag.anchor.set(.5, .5), this.gunMag.position.set(r.pos.x, r.pos.y), this.gunMag.scale.set(.25, .25), this.gunMag.tint = 16777215, this.gunMag.visible = !0, r.top ? this.container.addChild(this.gunMag) : this.container.addChildAt(this.gunMag, 0)
                        } else this.gunMag.visible = !1;
                        this.magTop = i.magImg && i.magImg.top;
                        var o = w.create(-4.25, -1.75);
                        a.pistol && a.isDual && (o = a.isDual ? w.create(-5.95, 0) : w.create(-4.75, -1.75)), this.container.position.set(o.x, o.y)
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
                    skin: "",
                    targetId: 0,
                    time: 0,
                    duration: 0,
                    throttleCount: 0,
                    throttleTicker: 0
                }, this.playAnim(d.None, -1), this.ae = {
                    pos: w.create(0, 0),
                    dir: w.create(1, 0),
                    outfit: "",
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
                    actionType: 0,
                    actionSeq: 0,
                    actionItem: "",
                    actionAltMode: 0,
                    hasStim: !1,
                    role: u.None
                }, this.ie = {
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
                this.container.visible = !1, this.auraContainer.visible = !1, this.useItemEmitter && (this.useItemEmitter.stop(), this.useItemEmitter = null), this.useAbilityEmitter && (this.useAbilityEmitter.stop(), this.useAbilityEmitter = null)
            },
            l: function(e, t, a, i) {
                this.ae.pos = w.copy(e.pos), this.ae.dir = w.copy(e.dir), t && (this.ae.outfit = e.outfit, this.ae.backpack = e.backpack, this.ae.helmet = e.helmet, this.ae.chest = e.chest, this.ae.curWeapType = e.curWeapType, this.ae.layer = e.layer, this.ae.dead = e.dead, this.ae.downed = e.downed, this.ae.disconnected = e.disconnected, this.ae.wearingPan = e.wearingPan, this.ae.frozen = e.frozen, this.ae.frozenOri = e.frozenOri, this.ae.hasStim = e.hasStim, this.ae.role = e.role, this.ae.actionType = e.actionType, this.ae.actionSeq = e.actionSeq, this.ae.actionItem = e.actionItem, this.ae.actionAltMode = e.actionAltMode, e.animSeq != this.anim.seq && this.playAnim(e.animType, e.animSeq), this.action.type = e.actionType, this.action.seq = e.actionSeq, this.action.item = e.actionItem, this.visualsDirty = !0), a && (this.isNew = !0, this.renderLayer = this.ae.layer, this.renderZOrd = 18, this.renderZIdx = this.__id)
            },
            Ht: function(e, t) {
                var a = this.ie.scope;
                if (this.ie.scopedIn = e.scopedIn, e.healthDirty && (this.ie.health = e.health), e.boostDirty && (this.ie.boost = e.boost), e.actionDirty && (this.action.time = e.action.time, this.action.duration = e.action.duration, this.action.targetId = e.action.targetId), e.inventoryDirty) {
                    this.ie.scope = e.scope, this.ie.inventory = {};
                    for (var i in m.bagSizes) m.bagSizes.hasOwnProperty(i) && (this.ie.inventory[i] = e.inventory[i])
                }
                if (e.weapsDirty) {
                    this.ie.curWeapIdx = e.curWeapIdx, this.ie.weapons = [];
                    for (var r = 0; r < m.WeaponSlot.Count; r++) {
                        var o = {};
                        o.name = e.weapons[r].name, o.ammo = e.weapons[r].ammo, this.ie.weapons.push(o)
                    }
                }
                e.spectatorCountDirty && (this.ie.spectatorCount = e.spectatorCount), this.ie.scope != a && (this.zoomFast = !0), this.ie.scopedIn && (this.zoomFast = !1)
            },
            Bt: function() {
                return (v.mobile ? m.scopeZoomRadius.mobile : m.scopeZoomRadius.desktop)[this.ae.downed || this.ie.scopedIn ? "1xscope" : this.ie.scope]
            },
            ea: function() {
                return this.ae.helmet ? I[this.ae.helmet].level : 0
            },
            ta: function() {
                return this.ae.chest ? I[this.ae.chest].level : 0
            },
            aa: function() {
                return I[this.ae.backpack].level
            },
            ia: function() {
                return I[this.ae.curWeapType].type
            },
            ra: function(e) {
                return "" !== this.ie.weapons[e].name
            },
            hasActivePan: function() {
                return this.ae.wearingPan || "pan" == this.ae.curWeapType && this.currentAnim() != d.Melee
            },
            getPanSegment: function() {
                var e = this.ae.wearingPan ? "unequipped" : "equipped";
                return I.pan.reflectSurface[e]
            },
            c: function(e, t, a, i, r, o, n, s, l, c, g, f) {
                var S = I[this.ae.curWeapType],
                    v = this.__id == l,
                    k = t.Se(l);
                this.posOld = w.copy(this.pos), this.dirOld = w.copy(this.dir), this.pos = w.copy(this.ae.pos), this.dir = w.copy(this.ae.dir), this.layer = this.ae.layer, this.downed = this.ae.downed, this._ = !0, this.Qt = !0;
                var z = this.ae.role == u.FactionLeader || this.ae.role == u.WoodsKing ? 1.25 : 1;
                if (this.rad = z * m.player.radius, !x.eqAbs(this.rad, this.bodyRad)) {
                    var M = this.rad - this.bodyRad,
                        T = Math.abs(M) > 1e-4 ? M * e * 6 : M;
                    this.bodyRad += T, this.visualsDirty = !0
                }
                if (v) {
                    var A = n.O(w.create(n.screenWidth, 0)),
                        E = w.sub(A, n.pos);
                    this.viewAabb.min = w.sub(n.pos, E), this.viewAabb.max = w.add(n.pos, E)
                }
                var D = this.weapType != this.ae.curWeapType;
                this.weapType = this.ae.curWeapType, this.lastThrowablePickupSfxTicker -= e, this.noCeilingRevealTicker -= e;
                var O = t.oe(l).groupId,
                    B = t.oe(this.__id),
                    R = B.groupId == O;
                this.nameText.text = B.name, this.nameText.visible = !v && R;
                for (var L = null, F = null, j = a.me.m(), q = 0; q < j.length; q++) {
                    var N = j[q];
                    if (N.active && !N.dead && N.layer == this.ae.layer)
                        if (N.isBush) {
                            var V = .25 * this.rad;
                            b.intersectCircle(N.collider, this.pos, V) && (L = N)
                        } else if (N.isDoor && !N.door.open && N.door.playErrorFx) {
                        var G = this.rad + .25,
                            U = w.rotate(w.create(1, 0), N.rot),
                            H = w.sub(N.pos, this.pos);
                        w.dot(H, U) < 0 && b.intersectCircle(N.collider, this.pos, G) && (F = N)
                    }
                }
                var W = null != L;
                if (W && (this.insideObstacleType = L.type), this.lastInsideObstacleTime -= e, this.wasInsideObstacle != W && this.lastInsideObstacleTime < 0 && !this.isNew) {
                    var K = P[this.insideObstacleType];
                    this.lastInsideObstacleTime = .2, i.playSound(K.sound.enter, {
                        channel: "sfx",
                        soundPos: this.pos,
                        falloff: 1,
                        layer: this.layer,
                        muffled: !0
                    });
                    for (var Z = w.normalizeSafe(w.sub(this.posOld, this.pos), w.create(1, 0)), X = W ? 1 : -1, Y = Math.floor(y.random(3, 5)), J = 0; J < Y; J++) {
                        var Q = w.mul(w.rotate(w.mul(Z, X), (Math.random() - .5) * Math.PI / 1.5), y.random(6, 8));
                        r.addParticle(K.hitParticle, this.layer, this.pos, Q)
                    }
                }
                this.wasInsideObstacle = W;
                var $ = this.isNearDoorError;
                if (this.isNearDoorError = null != F, this.doorErrorTicker -= e, this.isNearDoorError && !$ && this.doorErrorTicker <= 0) {
                    this.doorErrorTicker = .5;
                    var ee = P[F.type],
                        te = ee.door.sound.error;
                    i.playSound(te, {
                        channel: "sfx",
                        soundPos: this.pos,
                        falloff: 1,
                        layer: this.layer,
                        muffled: !0
                    })
                }
                var ae = a.getGroundSurface(this.pos, this.layer);
                this.isOnBrightSurface = 1 == this.layer && "tile" == ae.type;
                var ie = "water" == ae.type;
                if (this.updateSubmersion(e, ie, ae.river, a), this.updateFrozenState(e), this.ae.dead || (this.stepDistance += w.length(w.sub(this.posOld, this.pos)), this.stepDistance > 5 && ie || ie && !this.wasInWater ? (this.stepDistance = 0, r.addRippleParticle(this.pos, this.layer), i.playGroup("footstep_water", {
                        soundPos: this.pos,
                        fallOff: 3,
                        layer: this.layer,
                        muffled: !0
                    })) : this.stepDistance > 4 && !ie && (this.stepDistance = 0, i.playGroup("footstep_" + ae.type, {
                        soundPos: this.pos,
                        fallOff: 3,
                        layer: this.layer,
                        muffled: !0
                    })), this.wasInWater = ie), this.bleedTicker -= e, this.ae.downed && !this.ae.dead && this.action.type == p.None && this.bleedTicker < 0) {
                    this.bleedTicker = m.player.bleedTickRate;
                    var re = w.rotate(w.mul(this.dir, -1), (Math.random() - .5) * Math.PI / 3);
                    re.y *= -1, r.addParticle("bloodSplat", this.renderLayer, w.create(0, 0), w.mul(re, n.ppu), 1, Math.random() * Math.PI * 2, this.container, this.renderZOrd + 1), g || i.playSound("player_bullet_hit_02", {
                        channel: "hits",
                        soundPos: this.pos,
                        fallOff: 3,
                        layer: this.layer,
                        muffled: !0
                    })
                }
                if (this.gunSwitchCooldown -= e, this.fireDelay -= e, v && (D || this.lastSwapIdx != this.ie.curWeapIdx)) {
                    var oe = this.lastSwapIdx;
                    this.lastSwapIdx = this.ie.curWeapIdx;
                    var ne = I[this.weapType];
                    if ("melee" == ne.type || "throwable" == ne.type)("throwable" != ne.type || this.lastThrowablePickupSfxTicker <= 0) && i.playSound(ne.sound.deploy, {
                        channel: "sfx",
                        soundPos: this.pos,
                        fallOff: 3
                    });
                    else if ("gun" == ne.type) {
                        var se = "gun_switch_01",
                            le = !1;
                        if ((0 == oe || 1 == oe) && (0 == this.lastSwapIdx || 1 == this.lastSwapIdx) && this.fireDelay > 0) {
                            var ce = I[this.ie.weapons[oe].name];
                            ne && ce && void 0 !== ne.deployGroup && void 0 !== ce.deployGroup && ne.deployGroup == ce.deployGroup && (le = !0)
                        }
                        this.gunSwitchCooldown > 0 || le ? se = ne.sound.deploy : this.gunSwitchCooldown = m.player.freeSwitchCooldown, i.stopSound(this.cycleSoundInstance), this.cycleSoundInstance = i.playSound(se, {
                            channel: "activePlayer"
                        }), this.fireDelay = 0
                    }
                }
                if (i.isSoundPlaying(this.cycleSoundInstance) || (this.cycleSoundInstance = null), this.action.seq == this.action.seqOld || this.isNew || this.playActionStartEffect(v, r, i), this.action.seqOld = this.action.seq, this.updateActionEffect(v, r, i), this.action.throttleTicker -= e, this.action.throttleTicker < 0 && this.action.throttleCount > 0 && (this.action.throttleCount--, this.action.throttleTicker = .25), this.ae.hasStim && !this.useAbilityEmitter ? this.playAbilityEffect("ability_stim", this.isNew, i, r) : !this.ae.hasStim && this.useAbilityEmitter && (this.useAbilityEmitter.stop(), this.useAbilityEmitter = null), this.useAbilityEmitter && (this.useAbilityEmitter.pos = w.add(this.pos, w.create(0, .1)), this.useAbilityEmitter.layer = this.renderLayer, this.useAbilityEmitter.zOrd = this.renderZOrd + 1), v && !f) {
                    var me = this.ie.curWeapIdx,
                        pe = this.ie.weapons[me],
                        de = I[pe.name];
                    if (!this.playedDryFire && "gun" == this.ia() && (o.isBindPressed(h.Fire) || o.isBindDown(h.Fire) && "auto" == de.fireMode) && this.action.type == p.None && !c) {
                        var he = this.ie.inventory[de.ammo],
                            ue = pe.ammo;
                        0 === he && 0 === ue && (i.playSound(de.sound.empty), this.playedDryFire = !0)
                    }
                    o.isBindDown(h.Fire) || (this.playedDryFire = !1)
                }
                this.gunRecoilL = x.max(0, this.gunRecoilL - this.gunRecoilL * e * 5 - e), this.gunRecoilR = x.max(0, this.gunRecoilR - this.gunRecoilR * e * 5 - e);
                var ge = {
                    playerBarn: t,
                    map: a,
                    audioManager: i,
                    particleBarn: r
                };
                this.updateAnim(e, ge), this.currentAnim() == d.None && (this.throwableState = "equip"), this.currentAnim() != d.Cook && this.currentAnim() != d.Throw || "throwable" == S.type || this.playAnim(d.None, this.anim.seq);
                for (var ye = this.selectIdlePose(), we = _.IdlePoses[ye], xe = 0; xe < this.bones.length; xe++) {
                    var fe = xe,
                        be = we[fe] || C.identity,
                        _e = this.anim.bones[fe];
                    _e.weight > 0 ? this.bones[xe].copy(C.lerp(_e.weight, be, _e.pose)) : this.bones[xe].copy(be)
                }
                this.throwableStatePrev != this.throwableState && (this.visualsDirty = !0), this.throwableStatePrev = this.throwableState, this.visualsDirty && this.oa(t, a), this.visualsDirty = !1, this.na(e, v, k), this.sa(), this.la(v, k, a), s.addPIXIObj(this.auraContainer, this.renderLayer, this.renderZOrd - 1, this.renderZIdx);
                var Se = 2 & k.layer || 1 == (1 & k.layer) || 0 == (1 & this.layer);
                this.auraContainer.visible = !this.ae.dead && Se, s.addPIXIObj(this.container, this.renderLayer, this.renderZOrd, this.renderZIdx), this.isNew = !1
            },
            Ft: function(e, t) {
                var a = e.pointToScreen(this.pos),
                    i = e.pixels(1);
                this.container.position.set(a.x, a.y), this.container.scale.set(i, i), this.container.visible = !this.ae.dead, this.auraContainer.position.set(a.x, a.y), this.auraContainer.scale.set(i, i)
            },
            la: function(e, t, a) {
                for (var i = b.createCircle(this.pos, m.player.maxVisualRadius), r = !1, o = !1, n = !1, s = a.Mt.m(), l = 0; l < s.length; l++) {
                    var c = s[l];
                    if (c.active) {
                        for (var p = 0; p < c.stairs.length; p++) {
                            var d = c.stairs[p],
                                h = b.intersect(d.collision, i);
                            if (h) {
                                o = !0;
                                var u = w.add(d.center, w.mul(d.downDir, -3)),
                                    g = w.sub(u, this.pos),
                                    y = w.length(g);
                                g = y > 1e-4 ? w.div(g, y) : w.create(1, 0), n = S.intersectSegmentDist(a.me.m(), this.pos, g, y, .5, this.layer, !1) < y
                            }
                            e && d.noCeilingReveal && h && 0 != this.layer && (this.noCeilingRevealTicker = .25)
                        }
                        for (var x = 0; x < c.mask.length; x++)
                            if (b.intersect(c.mask[x], i)) {
                                r = !0;
                                break
                            }
                    }
                }
                var f = this.layer,
                    _ = 18;
                o && (1 & f && (1 & t.layer || !n) || 2 & t.layer && !r) && (f |= 2), !o || (1 & f) != (1 & t.layer) || r && 0 != t.layer || (f |= 2, _ += 100);
                var v = this.__id + (this.ae.downed ? 0 : 262144) + (e ? 65536 : 0) + (this.rad > 1 ? 131072 : 0);
                this.renderLayer = f, this.renderZOrd = _, this.renderZIdx = v
            },
            oa: function(e, t) {
                var a = I[this.ae.outfit],
                    i = a.skinImg,
                    r = this.bodyRad / m.player.radius;
                if (this.bodySprite.texture = c.Texture.fromImage(i.baseSprite), this.bodySprite.tint = i.baseTint, this.bodySprite.scale.set(.25, .25), this.bodySprite.visible = !0, this.ae.frozen && this.updateFrozenImage) {
                    var o = t.getMapDef().biome.frozenSprites;
                    console.log(o);
                    var n = o[Math.floor(Math.random() * o.length)],
                        s = x.oriToRad(this.ae.frozenOri) + .5 * Math.PI + (Math.random() - .5) * Math.PI * .25;
                    this.bodyEffectSprite.texture = c.Texture.fromImage(n), this.bodyEffectSprite.rotation = s, this.bodyEffectSprite.tint = 16777215, this.bodyEffectSprite.scale.set(.25, .25), this.updateFrozenImage = !1
                }
                if (t.factionMode && !a.camo) {
                    var l = e.oe(this.__id),
                        h = l.teamId,
                        g = ["player-patch-01.img", "player-patch-02.img"],
                        y = (h - 1) % g.length,
                        w = g[y],
                        f = m.teamColors[y],
                        b = x.oriToRad(3) + .5 * Math.PI;
                    this.patchSprite.texture = c.Texture.fromImage(w), this.patchSprite.rotation = b, this.patchSprite.tint = f, this.patchSprite.scale.set(.25, .25), this.patchSprite.visible = !0
                } else this.patchSprite.visible = !1;
                var _ = function(e, t, a) {
                    e.texture = c.Texture.fromImage(t), e.scale.set(.35, .35), e.tint = a, e.visible = !0
                };
                _(this.handLSprite, i.handSprite, i.handTint), _(this.handRSprite, i.handSprite, i.handTint);
                var S = function(e, t, a) {
                    e.texture = c.Texture.fromImage("player-feet-01.img"), e.scale.set(.45, .45), e.rotation = .5 * Math.PI, e.tint = t, e.visible = a
                };
                if (S(this.footLSprite, i.footTint, this.downed), S(this.footRSprite, i.footTint, this.downed), "" == this.ae.chest || a.camo) this.chestSprite.visible = !1;
                else {
                    var v = I[this.ae.chest],
                        k = v.skinImg;
                    this.chestSprite.texture = c.Texture.fromImage(k.baseSprite), this.chestSprite.scale.set(.25, .25), this.chestSprite.tint = k.baseTint, this.chestSprite.visible = !0
                }
                if ("" == this.ae.helmet || a.camo) this.helmetSprite.visible = !1;
                else {
                    var z = I[this.ae.helmet],
                        M = z.skinImg,
                        T = 3.33 * (this.downed ? 1 : -1);
                    this.helmetSprite.texture = c.Texture.fromImage(M.baseSprite), this.helmetSprite.position.set(T, 0), M.spriteScale ? this.helmetSprite.scale.set(M.spriteScale, M.spriteScale) : this.helmetSprite.scale.set(.15, .15);
                    var P = M.baseTint;
                    t.factionMode && (P = 1 == e.oe(this.__id).teamId ? M.baseTintRed : M.baseTintBlue), this.helmetSprite.tint = P, this.helmetSprite.visible = !0
                }
                if (this.aa() > 0 && !a.camo && !this.downed) {
                    var C = (I[this.ae.backpack], [10.25, 11.5, 12.75]),
                        A = this.aa(),
                        E = C[x.min(A - 1, C.length - 1)],
                        D = .5 * (.4 + .03 * A);
                    this.backpackSprite.texture = c.Texture.fromImage("player-circle-base-01.img"), this.backpackSprite.position.set(-E, 0), this.backpackSprite.scale.set(D, D), this.backpackSprite.tint = i.backpackTint, this.backpackSprite.visible = !0,
                        function(e, t, a) {
                            e.texture = c.Texture.fromImage(t), e.tint = a
                        }(this.backpackSprite, i.backpackSprite, i.backpackTint)
                } else this.backpackSprite.visible = !1;
                if (this.ae.wearingPan) {
                    var O = I.pan.hipImg;
                    this.hipSprite.texture = c.Texture.fromImage(O.sprite), this.hipSprite.position.set(O.pos.x, O.pos.y), this.hipSprite.scale.set(O.scale.x, O.scale.y), this.hipSprite.rotation = O.rot, this.hipSprite.tint = O.tint, this.hipSprite.visible = !0
                } else this.hipSprite.visible = !1;
                var B = I[this.ae.curWeapType];
                if ("gun" == B.type) {
                    this.gunRSprites.setType(this.ae.curWeapType, r), this.gunRSprites.setVisible(!0), B.isDual ? (this.gunLSprites.setType(this.ae.curWeapType, r), this.gunLSprites.setVisible(!0)) : this.gunLSprites.setVisible(!1);
                    var R = this.bodyContainer.getChildIndex(this.handRContainer),
                        L = R + 1;
                    this.gunRSprites.magTop && (L = R - 1), L = x.max(L, 0), this.bodyContainer.getChildIndex(this.handLContainer) != L && this.bodyContainer.addChildAt(this.handLContainer, L)
                } else this.gunLSprites.setVisible(!1), this.gunRSprites.setVisible(!1);
                if (this.downed != this.wasDowned)
                    if (this.wasDowned = this.downed, this.downed) {
                        var F = this.bodyContainer.getChildIndex(this.footLContainer);
                        this.bodyContainer.addChildAt(this.handLContainer, F), this.bodyContainer.addChildAt(this.handRContainer, F)
                    } else this.bodyContainer.addChild(this.handLContainer), this.bodyContainer.addChild(this.handRContainer);
                if ("melee" == B.type && "fists" != this.ae.curWeapType) {
                    var j = B.worldImg;
                    this.meleeSprite.texture = c.Texture.fromImage(j.sprite), this.meleeSprite.pivot.set(-j.pos.x, -j.pos.y), this.meleeSprite.scale.set(j.scale.x / r, j.scale.y / r), this.meleeSprite.rotation = j.rot, this.meleeSprite.tint = j.tint, this.meleeSprite.visible = !0;
                    var q = this.handRContainer.getChildIndex(this.handRSprite),
                        N = x.max(j.renderOnHand ? q + 1 : q - 1, 0);
                    this.handRContainer.getChildIndex(this.meleeSprite) != N && this.handRContainer.addChildAt(this.meleeSprite, N);
                    var V = this.bodyContainer.getChildIndex(this.handRContainer),
                        G = x.max(j.leftHandOntop ? V + 1 : V - 1, 0);
                    this.bodyContainer.getChildIndex(this.handLContainer) != G && this.bodyContainer.addChildAt(this.handLContainer, G)
                } else this.meleeSprite.visible = !1;
                if ("throwable" == B.type) {
                    var U = function(e, t) {
                            t.sprite && "none" != t.sprite ? (e.texture = c.Texture.fromImage(t.sprite), e.position.set(t.pos.x, t.pos.y), e.scale.set(t.scale, t.scale), e.rotation = .5 * Math.PI, e.visible = !0) : e.visible = !1
                        },
                        H = B.handImg[this.throwableState];
                    U(this.objectLSprite, H.left), U(this.objectRSprite, H.right)
                } else this.objectLSprite.visible = !1, this.objectRSprite.visible = !1;
                (this.downed || this.currentAnim() == d.Revive) && (this.gunLSprites.setVisible(!1), this.gunRSprites.setVisible(!1), this.meleeSprite.visible = !1, this.objectLSprite.visible = !1, this.objectRSprite.visible = !1), this.downed && (this.backpackSprite.visible = !1);
                for (var W = [this.bodySubmergeSprite, this.handLSubmergeSprite, this.handRSubmergeSprite, this.footLSubmergeSprite, this.footRSubmergeSprite], K = t.getMapDef().biome.colors.playerSubmerge, Z = 0; Z < W.length; Z++) W[Z].tint = K;
                if (this.ae.role != u.Medic || this.ae.dead || this.ae.downed || this.action.type != p.UseItem && this.action.type != p.Revive) this.auraPulseTicker = 0, this.auraPulseDir = 1, this.auraCircle.visible = !1;
                else {
                    var X = I[this.action.item],
                        Y = X ? X.aura.sprite : "part-aura-circle-01.img",
                        J = X ? X.aura.tint : 16711935,
                        Q = X ? m.player.medicHealRange : m.player.medicReviveRange;
                    Q /= 8, this.auraCircle.texture = c.Texture.fromImage(Y), this.auraCircle.scale.set(Q, Q), this.auraCircle.tint = J, this.auraCircle.visible = !0
                }
                this.bodyContainer.scale.set(r, r)
            },
            na: function(e, t, a) {
                var i = !0;
                if (t || (i = f.testCircleAabb(this.pos, this.rad, a.viewAabb.min, a.viewAabb.max)), this.auraViewFade = x.lerp(6 * e, this.auraViewFade, i ? 1 : 0), this.auraCircle.visible) {
                    this.auraPulseTicker = x.clamp(this.auraPulseTicker + e * this.auraPulseDir * 1.5, 0, 1);
                    var r = .75 * x.easeOutExpo(this.auraPulseTicker) + .25;
                    (this.auraPulseTicker >= 1 || this.auraPulseTicker <= 0) && (this.auraPulseDir *= -1), this.auraCircle.alpha = r * this.auraViewFade
                }
            },
            sa: function() {
                var e = function(e, t) {
                    e.position.set(t.pos.x, t.pos.y), e.pivot.set(-t.pivot.x, -t.pivot.y), e.rotation = t.rot
                };
                e(this.handLContainer, this.bones[A.HandL]), e(this.handRContainer, this.bones[A.HandR]), e(this.footLContainer, this.bones[A.FootL]), e(this.footRContainer, this.bones[A.FootR]);
                var t = I[this.ae.curWeapType];
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
                    !o || this.useAbilityEmitter && this.useAbilityEmitter.type == o || (this.useAbilityEmitter && this.useAbilityEmitter.stop(), this.useAbilityEmitter = i.addEmitter(o, {
                        pos: this.pos,
                        dir: w.create(0, 1),
                        scale: 1,
                        layer: this.layer
                    }))
                }
            },
            playActionStartEffect: function(e, t, a) {
                if (!e && this.action.type != p.None) {
                    if (this.action.throttleTicker = .5, !(this.action.throttleCount < 5)) return;
                    this.action.throttleCount++
                }
                var i = null;
                switch (this.action.type) {
                    case p.Reload:
                    case p.ReloadAlt:
                        var r = I[this.action.item];
                        r && (i = {
                            sound: this.action.type == p.ReloadAlt ? r.sound.reloadAlt : r.sound.reload,
                            channel: e ? "activePlayer" : "otherPlayers"
                        });
                        break;
                    case p.UseItem:
                        var o = I[this.action.item];
                        o && (i = {
                            sound: o.sound.use,
                            channel: e ? "activePlayer" : "otherPlayers"
                        })
                }
                if (a.stopSound(this.actionSoundInstance), i && (this.actionSoundInstance = a.playSound(i.sound, {
                        channel: i.channel,
                        soundPos: this.pos,
                        fallOff: 2,
                        layer: this.layer,
                        muffled: !0
                    })), this.action.type == p.Reload || this.action.type == p.ReloadAlt) {
                    var n = I[this.action.item];
                    if (n && "reload" == n.caseTiming)
                        for (var s = 0; s < n.maxReload; s++) {
                            var l = s % 2 == 0 ? -1 : 1,
                                c = Math.PI + Math.PI / 4 * l,
                                m = n.maxReload <= 2 ? 1 : x.lerp(Math.random(), .8, 1.2);
                            T.createCasingParticle(this.action.item, c, m, this.pos, this.dir, this.renderLayer, this.renderZOrd + 1, t)
                        }
                }
            },
            updateActionEffect: function(e, t, a) {
                var i = "",
                    r = {};
                switch (this.action.type) {
                    case p.UseItem:
                        i = I[this.action.item].emitter, this.ae.role == u.Medic && (r.scale = 1.5, r.radius = m.player.medicHealRange / r.scale, r.rateMult = .25);
                        break;
                    case p.Revive:
                        this.ae.downed && (i = "revive_01")
                }!i || this.useItemEmitter && this.useItemEmitter.type == i || (this.useItemEmitter && this.useItemEmitter.stop(), r.pos = this.pos, r.layer = this.layer, this.useItemEmitter = t.addEmitter(i, r)), this.useItemEmitter && (this.useItemEmitter.pos = w.add(this.pos, w.create(0, .1)), this.useItemEmitter.layer = this.renderLayer, this.useItemEmitter.zOrd = this.renderZOrd + 1), this.useItemEmitter && !i && (this.useItemEmitter.stop(), this.useItemEmitter = null), a.isSoundPlaying(this.actionSoundInstance) || (this.actionSoundInstance = null), this.actionSoundInstance && !e && a.updateSound(this.actionSoundInstance, "otherPlayers", this.pos, {
                    layer: this.layer,
                    fallOff: 2,
                    muffled: !0
                })
            },
            selectIdlePose: function() {
                var e = I[this.ae.curWeapType],
                    t = "fists";
                return t = this.downed ? "downed" : e.anim && e.anim.idlePose ? e.anim.idlePose : "gun" == e.type ? e.pistol ? e.isDual ? "dualPistol" : "pistol" : "rifle" : "throwable" == e.type ? "throwable" : "fists", _.IdlePoses[t] ? t : "fists"
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
                        var a = I[this.ae.curWeapType];
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
                    for (var i = _.Animations[this.anim.data.name], r = i.keyframes, o = -1, n = 0; this.anim.ticker >= r[n].time && n < r.length - 1;) o++, n++;
                    o = x.max(o, 0);
                    for (var s = r[o].time, l = r[n].time, c = x.min((this.anim.ticker - s) / (l - s), 1), m = r[o].bones, p = r[n].bones, h = this.anim.data.mirror, u = 0; u < this.anim.bones.length; u++) {
                        var g = this.anim.bones[u],
                            y = u;
                        h && (y = u % 2 == 0 ? u + 1 : u - 1), void 0 !== m[y] && void 0 !== p[y] && (g.weight = o == n ? c : 1, g.pose.copy(C.lerp(c, m[y], p[y])), h && (g.pose.pos.y *= -1, g.pose.pivot.y *= -1, g.pose.rot *= -1))
                    }
                    var w = n == r.length - 1 && x.eqAbs(c, 1),
                        f = this.anim.ticker;
                    w && (f += 1);
                    for (var b = 0; b < i.effects.length; b++) {
                        var S = i.effects[b];
                        S.time >= a && S.time < f && this[S.fn].apply(this, [t, S.args])
                    }
                    w && this.playAnim(d.None, this.anim.seq)
                }
            },
            animPlaySound: function(e, t) {
                var a = I[this.ae.curWeapType],
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
                if (I[this.ae.curWeapType].useThrowParticles) {
                    var a = w.rotate(w.create(.75, .75), Math.atan2(this.dir.y, this.dir.x));
                    e.particleBarn.addParticle("fragPin", this.renderLayer, w.add(this.pos, a), w.mul(w.rotate(this.dir, .5 * Math.PI), 4.5), 1, Math.random() * Math.PI * 2, null, this.renderZOrd + 1);
                    var i = w.rotate(w.create(.75, -.75), Math.atan2(this.dir.y, this.dir.x));
                    e.particleBarn.addParticle("fragLever", this.renderLayer, w.add(this.pos, i), w.mul(w.rotate(this.dir, .25 * -Math.PI), 3.5), 1, Math.random() * Math.PI * 2, null, this.renderZOrd + 1)
                }
            },
            animMeleeCollision: function(e, t) {
                var a = I[this.ae.curWeapType];
                if (a && "melee" == a.type) {
                    for (var i = Math.atan2(this.dir.y, this.dir.x), r = w.add(this.pos, w.rotate(a.attack.offset, i)), o = a.attack.rad, n = o + w.length(a.attack.offset), s = [], l = e.map.me.m(), c = 0; c < l.length; c++) {
                        var p = l[c];
                        if (!(!p.active || p.dead || p.height < m.player.meleeHeight) && y.sameLayer(p.layer, 1 & this.layer)) {
                            var d = b.intersectCircle(p.collider, r, o);
                            if (a.cleave || a.wallCheck) {
                                var h = w.normalizeSafe(w.sub(p.pos, this.pos), w.create(1, 0)),
                                    u = S.intersectSegment(e.map.me.m(), this.pos, h, n, 1, this.layer, !1);
                                u && u.id !== p.__id && (d = null)
                            }
                            if (d) {
                                var g = P[p.type],
                                    _ = w.add(r, w.mul(w.neg(d.dir), o - d.pen)),
                                    v = w.rotate(w.mul(d.dir, 7.5), (Math.random() - .5) * Math.PI / 3);
                                s.push({
                                    pen: d.pen,
                                    prio: 1,
                                    pos: _,
                                    vel: v,
                                    layer: this.renderLayer,
                                    zOrd: this.renderZOrd,
                                    particle: g.hitParticle,
                                    sound: g.sound.punch,
                                    soundFn: "playGroup"
                                })
                            }
                        }
                    }
                    for (var k = e.playerBarn.oe(this.__id).teamId, z = e.playerBarn.be.m(), M = 0; M < z.length; M++) {
                        var T = z[M];
                        if (T.active && T.__id != this.__id && !T.ae.dead && y.sameLayer(T.layer, this.layer)) {
                            var C = w.normalizeSafe(w.sub(T.pos, this.pos), w.create(1, 0)),
                                A = f.intersectCircleCircle(r, o, T.pos, T.rad);
                            if (A && x.eqAbs(n, S.intersectSegmentDist(e.map.me.m(), this.pos, C, n, m.player.meleeHeight, this.layer, !1))) {
                                var E = e.playerBarn.oe(T.__id).teamId,
                                    D = w.rotate(C, (Math.random() - .5) * Math.PI / 3),
                                    O = a.sound[t.playerHit] || a.sound.playerHit;
                                s.push({
                                    pen: A.pen,
                                    prio: E == k ? 2 : 0,
                                    pos: w.copy(T.pos),
                                    vel: D,
                                    layer: T.renderLayer,
                                    zOrd: T.renderZOrd,
                                    particle: "bloodSplat",
                                    sound: O,
                                    soundFn: "playSound"
                                })
                            }
                        }
                    }
                    s.sort(function(e, t) {
                        return e.prio == t.prio ? t.pen - e.pen : e.prio - t.prio
                    });
                    var B = s.length;
                    a.cleave || (B = x.min(B, 1));
                    for (var R = 0; R < B; R++) {
                        var L = s[R];
                        e.particleBarn.addParticle(L.particle, L.layer, L.pos, L.vel, 1, Math.random() * Math.PI * 2, null, L.zOrd + 1), e.audioManager[L.soundFn](L.sound, {
                            channel: "hits",
                            soundPos: L.pos,
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
                    r = x.remap(n, 0, s, .6, 1)
                }
                this.submersion = x.lerp(4 * e, this.submersion, r);
                var l = .8 * this.submersion,
                    c = 2 * (.9 - .4 * this.submersion),
                    m = 1 / (.1 * c);
                this.bodySubmergeSprite.scale.set(c, c), this.bodySubmergeSprite.mask.scale.set(m, m), this.bodySubmergeSprite.alpha = l, this.bodySubmergeSprite.visible = l > .001;
                for (var p = [this.handLSubmergeSprite, this.handRSubmergeSprite, this.footLSubmergeSprite, this.footRSubmergeSprite], d = 0; d < p.length; d++) p[d].alpha = this.downed ? l : 0, p[d].visible = p[d].alpha > .001
            },
            updateFrozenState: function(e) {
                this.ae.frozen ? this.frozenTicker = .25 : (this.frozenTicker -= e, this.updateFrozenImage = !0), this.bodyEffectSprite.alpha = this.ae.frozen ? 1 : x.remap(this.frozenTicker, 0, .25, 0, 1), this.bodyEffectSprite.visible = this.frozenTicker > 0
            },
            addRecoil: function(e, t, a) {
                t && (this.gunRecoilL += e), a && (this.gunRecoilR += e)
            },
            isUnderground: function(e) {
                if (1 != this.layer) return !1;
                for (var t = e.Mt.m(), a = 0; a < t.length; a++) {
                    var i = t[a];
                    if (!(i.layers.length < 2)) {
                        var r = i.layers[1];
                        if (b.intersectCircle(r.collision, this.pos, this.rad)) return r.underground
                    }
                }
                return !0
            }
        }, s.prototype = {
            onMapLoad: function(e) {},
            c: function(e, t, a, i, r, o, n, s, l, c, m, p) {
                for (var d = this.be.m(), h = 0; h < d.length; h++) {
                    var y = d[h];
                    y.active && y.c(e, this, n, l, r, s, o, i, t, c, m, p)
                }
                var f = this.oe(t),
                    b = this.Se(t);
                this.ca(t, {
                    pos: w.copy(b.ae.pos),
                    health: b.ie.health,
                    disconnected: !1,
                    dead: b.ae.dead,
                    downed: b.ae.downed,
                    factionLeader: b.ae.role == u.FactionLeader,
                    visible: !0
                });
                for (var _ = g.getPlayerStatusUpdateRate(n.teamMode, n.factionMode), S = Object.keys(this.playerStatus), v = 0; v < S.length; v++) {
                    var k = this.playerStatus[S[v]],
                        z = k.playerId,
                        M = this.oe(z),
                        T = this.Se(z);
                    T ? (k.posDelta = w.length(w.sub(T.ae.pos, k.pos)), k.posTarget = w.copy(T.ae.pos), k.posInterp = x.clamp(k.posInterp + .2 * e, e / _, 1), k.dead = T.ae.dead, k.downed = T.ae.downed) : k.posInterp = e / _;
                    var I = w.sub(k.posTarget, k.pos),
                        P = w.length(I),
                        C = P > 1e-4 ? w.div(I, P) : w.create(1, 0),
                        A = x.min(P, k.posDelta * k.posInterp);
                    k.pos = w.add(k.pos, w.mul(C, A)), k.timeSinceVisible += e, k.timeSinceUpdate += e;
                    var E = k.dead && (M.teamId == f.teamId || k.factionLeader) ? .6 : 0;
                    k.minimapAlpha = x.smoothstep(k.timeSinceVisible, 0, .1) * x.lerp(x.smoothstep(k.timeSinceUpdate, 2, 2.5), 1, E), n.factionMode || M.teamId == f.teamId || (k.minimapAlpha = 0), k.minimapVisible = k.minimapAlpha > .01
                }
            },
            render: function(e, t) {
                for (var a = this.be.m(), i = 0; i < a.length; i++) {
                    var r = a[i];
                    r.active && r.Ft(e, t)
                }
            },
            Se: function(e) {
                for (var t = this.be.m(), a = 0; a < t.length; a++) {
                    var i = t[a];
                    if (i.active && i.__id === e) return i
                }
                return null
            },
            qt: function(e) {
                this.$t[e.playerId] = {
                    playerId: e.playerId,
                    teamId: e.teamId,
                    groupId: e.groupId,
                    name: e.name,
                    nameTruncated: z.truncateString(e.name || "", "bold 16px arial", 180),
                    anonName: "Player" + (e.playerId - 2750)
                }, this.playerIds.push(e.playerId), this.playerIds.sort(function(e, t) {
                    return e - t
                })
            },
            Nt: function(e) {
                var t = this.playerIds.indexOf(e); - 1 !== t && this.playerIds.splice(t, 1), delete this.$t[e], delete this.playerStatus[e]
            },
            oe: function(e) {
                return this.$t[e] || {
                    playerId: 0,
                    groupId: 0,
                    teamId: 0,
                    name: "unknown"
                }
            },
            Vt: function() {
                this.teamInfo = {}, this.groupInfo = {};
                for (var e = Object.keys(this.$t), t = 0; t < e.length; t++) {
                    var a = this.$t[e[t]],
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
            Gt: function(e, t, a) {
                var i = this.getTeamInfo(e),
                    r = a ? this.playerIds : i.playerIds;
                if (r.length != t.players.length) return void k.logError("PlayerIds and playerStatus.players out of sync. OurLen: " + r.length + " MsgLen: " + t.players.length + " FactionMode: " + a);
                for (var o = 0; o < r.length; o++) {
                    var n = r[o],
                        s = t.players[o];
                    s.hasData && this.ca(n, s)
                }
            },
            ca: function(e, t) {
                var a = this.playerStatus[e] || {
                    playerId: e,
                    pos: w.copy(t.pos),
                    posTarget: w.copy(t.pos),
                    posDelta: w.create(0, 0),
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
                a.visible, a.minimapVisible || (a.pos = w.copy(t.pos), !a.visible && t.visible && (a.timeSinceVisible = 0)), a.visible = t.visible, a.visible && (a.timeSinceUpdate = 0), a.posTarget = w.copy(t.pos), a.posDelta = w.length(w.sub(t.pos, a.pos)), a.dead = t.dead, a.downed = t.downed, a.factionLeader = t.factionLeader, void 0 !== t.health && (a.health = t.health), void 0 !== t.disconnected && (a.disconnected = t.disconnected), this.playerStatus[e] = a
            },
            ne: function(e) {
                return this.playerStatus[e]
            },
            Ut: function(e, t) {
                var a = this.getGroupInfo(e);
                if (a.playerIds.length != t.players.length) return void k.logError("PlayerIds and groupStatus.players out of sync");
                for (var i = 0; i < a.playerIds.length; i++) {
                    var r = a.playerIds[i],
                        o = t.players[i],
                        n = this.ne(r);
                    n && (n.health = o.health, n.disconnected = o.disconnected)
                }
            },
            getGroupColor: function(e) {
                var t = this.oe(e),
                    a = this.getGroupInfo(t.groupId),
                    i = a ? a.playerIds.indexOf(e) : 0;
                return i >= 0 && i < m.groupColors.length ? m.groupColors[i] : 16777215
            },
            getTeamColor: function(e) {
                var t = e - 1;
                return t >= 0 && t < m.teamColors.length ? m.teamColors[t] : 16777215
            }
        }, e.exports = {
            et: s
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
            "game-medic": "médico",
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
            m = a("26be8056"),
            p = a("f398b7c7"),
            d = a("fa71fb59"),
            h = a("f4d48896"),
            u = a("cbb1f984"),
            g = function() {
                function e(t) {
                    var a = this;
                    i(this, e), this.profile = {}, this.loading = !1, this.nameChangeEnabled = !1, this.setNamePrompt = new d(s("#modal-account-name-change")), this.setNamePrompt.onShow(function() {
                        s("#modal-body-warning").css("display", "none"), s("#modal-account-name-title").html("Change name"), s("#modal-account-name-input").val("")
                    }), s("#modal-account-name-finish").click(function(e) {
                        e.stopPropagation();
                        var i = s("#modal-account-name-input").val();
                        t.setUsername(i, function(e) {
                            a.onSetUsername(e)
                        })
                    }), s("#modal-account-name-input").on("keypress", function(e) {
                        13 === (e.which || e.keyCode) && s("#modal-account-name-finish").trigger("click")
                    }), this.changeAvatarPrompt = new d(s("#modal-account-avatar")), this.changeAvatarPrompt.onHide(function() {
                        var e = s("#customize-account-avatar").find(".customize-emote-image").data("id");
                        t.setAvatar(e)
                    }), this.delAccountPrompt = new d(s("#modal-account-delete")), s("#modal-account-delete-finish").click(function(e) {
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
                    value: function(e, t) {
                        this.hideModals(), e.show(t)
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
                        var t = m.htmlEscape(this.profile.username);
                        s(".account-player-name").html(t);
                        var a = s(".btn-player-stats-link");
                        this.profile.slug ? (a.attr("href", "/stats/" + this.profile.slug), a.css("display", "block")) : a.css("display", "none");
                        var i = u[this.profile.avatar],
                            o = i && i.texture,
                            n = o ? r(i.texture) : "../img/gui/player-gui.svg";
                        s(".account-details-user .account-avatar").css("background-image", e ? "none" : "url(" + n + ")").addClass(e ? "" : "account-avatar-hover"), s(".account-details-user .account-avatar-loading").css("display", e ? "block" : "none"), s(".account-avatar-pulsate").css("display", o || e ? "none" : "block"), this.nameChangeEnabled = this.profile.usernameChangeTime <= 0, this.nameChangeEnabled ? s(".btn-account-change-name").removeClass("btn-account-disabled") : s(".btn-account-change-name").addClass("btn-account-disabled"), s(".btn-account-change-name").html(this.profile.usernameSet ? "Change Account Name" : "Set Account Name"), e || this.profile.usernameSet ? this.setNamePrompt.hide() : this.showModal(this.setNamePrompt, !0);
                        var l = function(e) {
                            e.addClass("btn-login-linked"), e.find("span.login-button-name").html('<div class="icon"></div>'), e.off("click")
                        };
                        this.profile.linkedFacebook && l(s(".btn-login-facebook")), this.profile.linkedGoogle && l(s(".btn-login-google")), this.profile.linkedTwitch && l(s(".btn-login-twitch")), this.profile.linkedDiscord && l(s(".btn-login-discord"))
                    }
                }, {
                    key: "hide",
                    value: function() {
                        s(".account-loggedin-block").css("display", "none"), this.setMenu(this.statsButtons), this.hideModals()
                    }
                }]), e
            }(),
            y = function() {
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
            w = function() {
                function e(t, a, r) {
                    i(this, e), this.config = t, this.loading = !1, this.loggedIn = !1, this.profile = {}, this.loginMenu = new y(a), this.profileMenu = new g(this), this.errorModal = r
                }
                return n(e, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        this.config.get("sessionCookie") && this.setSessionCookies(), s(".btn-login-facebook").click(function(t) {
                            c.webview && c.version > "1.0.0" ? e.loginWithAccessToken("/api/user/auth/facebook/token", h.facebookLogin, function(e) {
                                return e.authResponse.accessToken
                            }) : window.location.href = "/api/user/auth/facebook"
                        }), s(".btn-login-google").click(function(t) {
                            c.webview && c.version > "1.0.0" ? e.loginWithAccessToken("/api/user/auth/google/token", h.googleLogin, function(e) {
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
                            if (t) return i.profileMenu.hideModals(), void i.displayError("login_failed");
                            var n = a(r);
                            o(e + "?access_token=" + n, function(e, t) {
                                i.profileMenu.hideModals(), e ? i.displayError("login_failed") : (i.config.set("sessionCookie", t.cookie), i.setSessionCookies(), i.load())
                            })
                        })
                    }
                }, {
                    key: "load",
                    value: function() {
                        var e = this;
                        !this.loading && m.getCookie("app-data") && (this.loading = !0, this.render(), o("/api/user/profile", function(t, a) {
                            if (e.profile = {}, e.loggedIn = !1, t) p.storeGeneric("account", "load_error");
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
                            if (t) return p.storeGeneric("account", "delete_error"), void e.displayError("server_error");
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
                            if (e) return p.storeGeneric("account", "set_username_error"), void t("Failed setting username.");
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
                            if (e) return p.storeGeneric("account", "set_avatar_error"), void t.displayError("server_error");
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
        e.exports = w
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
            xt: g
        }
    },
    aaf70d05: function(e, t) {
        e.exports = {
            loadout: [{
                meta: {
                    image: "loadout-0-50-a18f2786.png",
                    size: {
                        w: 2048,
                        h: 2048
                    },
                    scale: .5
                },
                frames: {
                    "part-aura-circle-01.img": {
                        frame: {
                            x: 258,
                            y: 2,
                            w: 144,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 144,
                            h: 142
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "ping-map-pulse.img": {
                        frame: {
                            x: 2,
                            y: 2,
                            w: 252,
                            h: 252
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 252,
                            h: 252
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "part-shell-05.img": {
                        frame: {
                            x: 2,
                            y: 258,
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
                    "part-smoke-02.img": {
                        frame: {
                            x: 38,
                            y: 258,
                            w: 130,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: 0,
                            w: 130,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-smoke-03.img": {
                        frame: {
                            x: 172,
                            y: 258,
                            w: 129,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: -1,
                            w: 129,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "emote-circle-outer.img": {
                        frame: {
                            x: 406,
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
                    "gun-awc-01.img": {
                        frame: {
                            x: 406,
                            y: 134,
                            w: 26,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 26,
                            h: 116
                        },
                        sourceSize: {
                            w: 30,
                            h: 118
                        }
                    },
                    "gun-awc-02.img": {
                        frame: {
                            x: 436,
                            y: 134,
                            w: 26,
                            h: 116
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 26,
                            h: 116
                        },
                        sourceSize: {
                            w: 30,
                            h: 118
                        }
                    },
                    "gun-m249-top-01.img": {
                        frame: {
                            x: 466,
                            y: 134,
                            w: 22,
                            h: 110
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 7,
                            w: 22,
                            h: 110
                        },
                        sourceSize: {
                            w: 28,
                            h: 116
                        }
                    },
                    "gun-garand-01.img": {
                        frame: {
                            x: 492,
                            y: 134,
                            w: 20,
                            h: 109
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 8,
                            w: 20,
                            h: 109
                        },
                        sourceSize: {
                            w: 24,
                            h: 116
                        }
                    },
                    "gun-usas-01.img": {
                        frame: {
                            x: 406,
                            y: 254,
                            w: 24,
                            h: 107
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 10,
                            w: 24,
                            h: 107
                        },
                        sourceSize: {
                            w: 28,
                            h: 116
                        }
                    },
                    "pad.img": {
                        frame: {
                            x: 258,
                            y: 148,
                            w: 104,
                            h: 104
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 104,
                            h: 104
                        },
                        sourceSize: {
                            w: 104,
                            h: 104
                        }
                    },
                    "gun-scorpion-01.img": {
                        frame: {
                            x: 434,
                            y: 254,
                            w: 23,
                            h: 102
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: 3,
                            w: 23,
                            h: 102
                        },
                        sourceSize: {
                            w: 24,
                            h: 104
                        }
                    },
                    "gun-pkp-top-01.img": {
                        frame: {
                            x: 461,
                            y: 254,
                            w: 21,
                            h: 99
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 18,
                            w: 21,
                            h: 99
                        },
                        sourceSize: {
                            w: 28,
                            h: 116
                        }
                    },
                    "gun-m4a1-01.img": {
                        frame: {
                            x: 486,
                            y: 254,
                            w: 24,
                            h: 96
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: 3,
                            w: 24,
                            h: 96
                        },
                        sourceSize: {
                            w: 24,
                            h: 98
                        }
                    },
                    "gun-long-01.img": {
                        frame: {
                            x: 516,
                            y: 134,
                            w: 18,
                            h: 96
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 18,
                            h: 96
                        },
                        sourceSize: {
                            w: 16,
                            h: 94
                        }
                    },
                    "part-shell-02.img": {
                        frame: {
                            x: 366,
                            y: 148,
                            w: 32,
                            h: 95
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 95
                        },
                        sourceSize: {
                            w: 32,
                            h: 95
                        }
                    },
                    "player-helmet-forest.img": {
                        frame: {
                            x: 305,
                            y: 258,
                            w: 77,
                            h: 90
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 77,
                            h: 90
                        },
                        sourceSize: {
                            w: 88,
                            h: 88
                        }
                    },
                    "part-shell-03.img": {
                        frame: {
                            x: 2,
                            y: 392,
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
                            x: 38,
                            y: 392,
                            w: 21,
                            h: 89
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 21,
                            h: 89
                        },
                        sourceSize: {
                            w: 24,
                            h: 98
                        }
                    },
                    "player-wading-01.img": {
                        frame: {
                            x: 63,
                            y: 392,
                            w: 88,
                            h: 88
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 88,
                            h: 88
                        },
                        sourceSize: {
                            w: 86,
                            h: 86
                        }
                    },
                    "loot-melee-machete-taiga.img": {
                        frame: {
                            x: 155,
                            y: 392,
                            w: 23,
                            h: 83
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 35,
                            y: 7,
                            w: 23,
                            h: 83
                        },
                        sourceSize: {
                            w: 96,
                            h: 96
                        }
                    },
                    "part-shell-04.img": {
                        frame: {
                            x: 182,
                            y: 392,
                            w: 28,
                            h: 82
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 28,
                            h: 82
                        },
                        sourceSize: {
                            w: 28,
                            h: 82
                        }
                    },
                    "part-airdrop-03.img": {
                        frame: {
                            x: 214,
                            y: 392,
                            w: 80,
                            h: 80
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 80,
                            h: 80
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "proj-bomb-iron-01.img": {
                        frame: {
                            x: 298,
                            y: 392,
                            w: 34,
                            h: 80
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 23,
                            y: 0,
                            w: 34,
                            h: 80
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "part-airdrop-02.img": {
                        frame: {
                            x: 514,
                            y: 254,
                            w: 19,
                            h: 80
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 19,
                            h: 80
                        },
                        sourceSize: {
                            w: 19,
                            h: 80
                        }
                    },
                    "part-airdrop-02x.img": {
                        frame: {
                            x: 336,
                            y: 392,
                            w: 19,
                            h: 80
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 19,
                            h: 80
                        },
                        sourceSize: {
                            w: 19,
                            h: 80
                        }
                    },
                    "proj-smoke-nopin.img": {
                        frame: {
                            x: 359,
                            y: 392,
                            w: 78,
                            h: 79
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 78,
                            h: 79
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "proj-smoke-pin.img": {
                        frame: {
                            x: 441,
                            y: 392,
                            w: 78,
                            h: 79
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 78,
                            h: 79
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "loot-melee-bonesaw-rusted.img": {
                        frame: {
                            x: 538,
                            y: 2,
                            w: 28,
                            h: 79
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 40,
                            y: 10,
                            w: 28,
                            h: 79
                        },
                        sourceSize: {
                            w: 96,
                            h: 96
                        }
                    },
                    "loot-melee-kukri-trad.img": {
                        frame: {
                            x: 538,
                            y: 85,
                            w: 22,
                            h: 78
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 34,
                            y: 9,
                            w: 22,
                            h: 78
                        },
                        sourceSize: {
                            w: 96,
                            h: 96
                        }
                    },
                    "player-circle-base-02.img": {
                        frame: {
                            x: 2,
                            y: 486,
                            w: 76,
                            h: 76
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 76,
                            h: 76
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "player-circle-base-01.img": {
                        frame: {
                            x: 82,
                            y: 486,
                            w: 76,
                            h: 76
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 76,
                            h: 76
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "player-armor-base-01.img": {
                        frame: {
                            x: 162,
                            y: 486,
                            w: 76,
                            h: 76
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 76,
                            h: 76
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "player-helmet-moon.img": {
                        frame: {
                            x: 242,
                            y: 486,
                            w: 62,
                            h: 76
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 6,
                            w: 62,
                            h: 76
                        },
                        sourceSize: {
                            w: 88,
                            h: 88
                        }
                    },
                    "proj-mirv-nopin.img": {
                        frame: {
                            x: 308,
                            y: 486,
                            w: 52,
                            h: 74
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 0,
                            w: 52,
                            h: 74
                        },
                        sourceSize: {
                            w: 64,
                            h: 74
                        }
                    },
                    "proj-mirv-pin.img": {
                        frame: {
                            x: 364,
                            y: 486,
                            w: 52,
                            h: 74
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 52,
                            h: 74
                        },
                        sourceSize: {
                            w: 64,
                            h: 74
                        }
                    },
                    "proj-mirv-nopin-nolever.img": {
                        frame: {
                            x: 420,
                            y: 486,
                            w: 40,
                            h: 74
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 0,
                            w: 40,
                            h: 74
                        },
                        sourceSize: {
                            w: 64,
                            h: 74
                        }
                    },
                    "proj-smoke-nopin-nolever.img": {
                        frame: {
                            x: 464,
                            y: 486,
                            w: 40,
                            h: 74
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 20,
                            y: 3,
                            w: 40,
                            h: 74
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "player-ripple-01.img": {
                        frame: {
                            x: 570,
                            y: 2,
                            w: 73,
                            h: 73
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 73,
                            h: 73
                        },
                        sourceSize: {
                            w: 71,
                            h: 71
                        }
                    },
                    "loot-circle-outer-02.img": {
                        frame: {
                            x: 570,
                            y: 79,
                            w: 73,
                            h: 73
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 73,
                            h: 73
                        },
                        sourceSize: {
                            w: 73,
                            h: 73
                        }
                    },
                    "loot-circle-outer-01.img": {
                        frame: {
                            x: 570,
                            y: 156,
                            w: 73,
                            h: 73
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 73,
                            h: 73
                        },
                        sourceSize: {
                            w: 73,
                            h: 73
                        }
                    },
                    "star.img": {
                        frame: {
                            x: 2,
                            y: 566,
                            w: 74,
                            h: 72
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 74,
                            h: 72
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "player-star.img": {
                        frame: {
                            x: 80,
                            y: 566,
                            w: 74,
                            h: 72
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 74,
                            h: 72
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "ping-border.img": {
                        frame: {
                            x: 570,
                            y: 233,
                            w: 72,
                            h: 72
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 72,
                            h: 72
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "part-plank-01.img": {
                        frame: {
                            x: 570,
                            y: 309,
                            w: 72,
                            h: 72
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 72,
                            h: 72
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "part-panel-01.img": {
                        frame: {
                            x: 570,
                            y: 385,
                            w: 72,
                            h: 72
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 72,
                            h: 72
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "loot-circle-inner-01.img": {
                        frame: {
                            x: 570,
                            y: 461,
                            w: 72,
                            h: 72
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 72,
                            h: 72
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "part-woodchip-01.img": {
                        frame: {
                            x: 158,
                            y: 566,
                            w: 71,
                            h: 71
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 71,
                            h: 71
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "player-base-01.img": {
                        frame: {
                            x: 233,
                            y: 566,
                            w: 70,
                            h: 70
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 70,
                            h: 70
                        },
                        sourceSize: {
                            w: 70,
                            h: 70
                        }
                    },
                    "player-base-03.img": {
                        frame: {
                            x: 307,
                            y: 566,
                            w: 70,
                            h: 70
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 70,
                            h: 70
                        },
                        sourceSize: {
                            w: 70,
                            h: 70
                        }
                    },
                    "player-base-04.img": {
                        frame: {
                            x: 381,
                            y: 566,
                            w: 70,
                            h: 70
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 70,
                            h: 70
                        },
                        sourceSize: {
                            w: 70,
                            h: 70
                        }
                    },
                    "player-base-05.img": {
                        frame: {
                            x: 455,
                            y: 566,
                            w: 70,
                            h: 70
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 70,
                            h: 70
                        },
                        sourceSize: {
                            w: 70,
                            h: 70
                        }
                    },
                    "player-base-02.img": {
                        frame: {
                            x: 529,
                            y: 566,
                            w: 70,
                            h: 70
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 70,
                            h: 70
                        },
                        sourceSize: {
                            w: 70,
                            h: 70
                        }
                    },
                    "part-book-01.img": {
                        frame: {
                            x: 508,
                            y: 486,
                            w: 54,
                            h: 70
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 1,
                            w: 54,
                            h: 70
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "part-pot-01.img": {
                        frame: {
                            x: 647,
                            y: 2,
                            w: 48,
                            h: 69
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 2,
                            w: 48,
                            h: 69
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "player-king-woods.img": {
                        frame: {
                            x: 699,
                            y: 2,
                            w: 70,
                            h: 68
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 3,
                            w: 70,
                            h: 68
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "part-plate-01.img": {
                        frame: {
                            x: 699,
                            y: 74,
                            w: 70,
                            h: 68
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 2,
                            w: 70,
                            h: 68
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "part-splat-02.img": {
                        frame: {
                            x: 699,
                            y: 146,
                            w: 63,
                            h: 67
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 3,
                            w: 63,
                            h: 67
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "part-shell-01.img": {
                        frame: {
                            x: 699,
                            y: 217,
                            w: 28,
                            h: 67
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 28,
                            h: 67
                        },
                        sourceSize: {
                            w: 28,
                            h: 67
                        }
                    },
                    "ping-map-coming.img": {
                        frame: {
                            x: 699,
                            y: 288,
                            w: 58,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 66
                        },
                        sourceSize: {
                            w: 64,
                            h: 128
                        }
                    },
                    "player-helmet-potato.img": {
                        frame: {
                            x: 699,
                            y: 358,
                            w: 51,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 13,
                            y: 11,
                            w: 51,
                            h: 66
                        },
                        sourceSize: {
                            w: 88,
                            h: 88
                        }
                    },
                    "player-helmet-medic.img": {
                        frame: {
                            x: 699,
                            y: 428,
                            w: 51,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 11,
                            w: 51,
                            h: 66
                        },
                        sourceSize: {
                            w: 88,
                            h: 88
                        }
                    },
                    "player-helmet-lieutenant.img": {
                        frame: {
                            x: 699,
                            y: 498,
                            w: 51,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 11,
                            w: 51,
                            h: 66
                        },
                        sourceSize: {
                            w: 88,
                            h: 88
                        }
                    },
                    "player-helmet-leader.img": {
                        frame: {
                            x: 699,
                            y: 568,
                            w: 51,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 11,
                            w: 51,
                            h: 66
                        },
                        sourceSize: {
                            w: 88,
                            h: 88
                        }
                    },
                    "gun-mp220-01.img": {
                        frame: {
                            x: 731,
                            y: 217,
                            w: 22,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 22,
                            h: 66
                        },
                        sourceSize: {
                            w: 20,
                            h: 64
                        }
                    },
                    "gun-med-01.img": {
                        frame: {
                            x: 647,
                            y: 75,
                            w: 18,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 18,
                            h: 66
                        },
                        sourceSize: {
                            w: 16,
                            h: 64
                        }
                    },
                    "proj-strobe-unarmed.img": {
                        frame: {
                            x: 2,
                            y: 642,
                            w: 74,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 12,
                            w: 74,
                            h: 64
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "star-blue.img": {
                        frame: {
                            x: 80,
                            y: 642,
                            w: 68,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 2,
                            w: 68,
                            h: 64
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "star-red.img": {
                        frame: {
                            x: 152,
                            y: 642,
                            w: 68,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 2,
                            w: 68,
                            h: 64
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "croatia.img": {
                        frame: {
                            x: 224,
                            y: 642,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "alien-face.img": {
                        frame: {
                            x: 292,
                            y: 642,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "czech-republic.img": {
                        frame: {
                            x: 360,
                            y: 642,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "bolivia.img": {
                        frame: {
                            x: 428,
                            y: 642,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "denmark.img": {
                        frame: {
                            x: 496,
                            y: 642,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "disappoint-face.img": {
                        frame: {
                            x: 564,
                            y: 642,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "bosnia-and-herzegovina.img": {
                        frame: {
                            x: 632,
                            y: 642,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ecuador.img": {
                        frame: {
                            x: 700,
                            y: 642,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "brazil.img": {
                        frame: {
                            x: 773,
                            y: 2,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "angry-face.img": {
                        frame: {
                            x: 773,
                            y: 70,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "malaysia.img": {
                        frame: {
                            x: 773,
                            y: 138,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "mexico.img": {
                        frame: {
                            x: 773,
                            y: 206,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "monocle-face.img": {
                        frame: {
                            x: 773,
                            y: 274,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "netherlands.img": {
                        frame: {
                            x: 773,
                            y: 342,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "new-zealand.img": {
                        frame: {
                            x: 773,
                            y: 410,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "norway.img": {
                        frame: {
                            x: 773,
                            y: 478,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "peru.img": {
                        frame: {
                            x: 773,
                            y: 546,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "philippines.img": {
                        frame: {
                            x: 773,
                            y: 614,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "canada.img": {
                        frame: {
                            x: 2,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "finland.img": {
                        frame: {
                            x: 70,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "argentina.img": {
                        frame: {
                            x: 138,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "australia.img": {
                        frame: {
                            x: 206,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "portugal.img": {
                        frame: {
                            x: 274,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "austria.img": {
                        frame: {
                            x: 342,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "france.img": {
                        frame: {
                            x: 410,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "georgia.img": {
                        frame: {
                            x: 478,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "republic-of-poland.img": {
                        frame: {
                            x: 546,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "romania.img": {
                        frame: {
                            x: 614,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "russia.img": {
                        frame: {
                            x: 682,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "sad-face.img": {
                        frame: {
                            x: 750,
                            y: 710,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "germany.img": {
                        frame: {
                            x: 841,
                            y: 2,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-ammo-box.img": {
                        frame: {
                            x: 841,
                            y: 70,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "serbia.img": {
                        frame: {
                            x: 841,
                            y: 138,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "singapore.img": {
                        frame: {
                            x: 841,
                            y: 206,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "greece.img": {
                        frame: {
                            x: 841,
                            y: 274,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "slovakia.img": {
                        frame: {
                            x: 841,
                            y: 342,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "guatemala.img": {
                        frame: {
                            x: 841,
                            y: 410,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-scope-00.img": {
                        frame: {
                            x: 841,
                            y: 478,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "sob-face.img": {
                        frame: {
                            x: 841,
                            y: 546,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "south-korea.img": {
                        frame: {
                            x: 841,
                            y: 614,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "spain.img": {
                        frame: {
                            x: 841,
                            y: 682,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "sunglass-face.img": {
                        frame: {
                            x: 2,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-scope-01.img": {
                        frame: {
                            x: 70,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "sweden.img": {
                        frame: {
                            x: 138,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "switzerland.img": {
                        frame: {
                            x: 206,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "taiwan.img": {
                        frame: {
                            x: 274,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-log-01.img": {
                        frame: {
                            x: 342,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-scope-02.img": {
                        frame: {
                            x: 410,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "thinking-face.img": {
                        frame: {
                            x: 478,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-scope-03.img": {
                        frame: {
                            x: 546,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-scope-04.img": {
                        frame: {
                            x: 614,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "trinidad-and-tobago.img": {
                        frame: {
                            x: 682,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-heal-01.img": {
                        frame: {
                            x: 750,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "happy-face.img": {
                        frame: {
                            x: 818,
                            y: 778,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "turkey.img": {
                        frame: {
                            x: 909,
                            y: 2,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ukraine.img": {
                        frame: {
                            x: 909,
                            y: 70,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "united-kingdom.img": {
                        frame: {
                            x: 909,
                            y: 138,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "united-states-of-america.img": {
                        frame: {
                            x: 909,
                            y: 206,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "upsidedown-face.img": {
                        frame: {
                            x: 909,
                            y: 274,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "uruguay.img": {
                        frame: {
                            x: 909,
                            y: 342,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "venezuela.img": {
                        frame: {
                            x: 909,
                            y: 410,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "vietnam.img": {
                        frame: {
                            x: 909,
                            y: 478,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-deagle-dual.img": {
                        frame: {
                            x: 909,
                            y: 546,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "chile.img": {
                        frame: {
                            x: 909,
                            y: 614,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "heart-face.img": {
                        frame: {
                            x: 909,
                            y: 682,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-team-help.img": {
                        frame: {
                            x: 909,
                            y: 750,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "china.img": {
                        frame: {
                            x: 2,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-team-danger.img": {
                        frame: {
                            x: 70,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "honduras.img": {
                        frame: {
                            x: 138,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "hong-kong.img": {
                        frame: {
                            x: 206,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "hungary.img": {
                        frame: {
                            x: 274,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "belarus.img": {
                        frame: {
                            x: 342,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "imp-face.img": {
                        frame: {
                            x: 410,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "india.img": {
                        frame: {
                            x: 478,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "indonesia.img": {
                        frame: {
                            x: 546,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "israel.img": {
                        frame: {
                            x: 614,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "italy.img": {
                        frame: {
                            x: 682,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "japan.img": {
                        frame: {
                            x: 750,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-team-coming.img": {
                        frame: {
                            x: 818,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-team-airstrike.img": {
                        frame: {
                            x: 886,
                            y: 846,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-team-airdrop.img": {
                        frame: {
                            x: 977,
                            y: 2,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "joy-face.img": {
                        frame: {
                            x: 977,
                            y: 70,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m93r-dual.img": {
                        frame: {
                            x: 977,
                            y: 138,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "kazakhstan.img": {
                        frame: {
                            x: 977,
                            y: 206,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "colombia.img": {
                        frame: {
                            x: 977,
                            y: 274,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "belgium.img": {
                        frame: {
                            x: 977,
                            y: 342,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "thailand.img": {
                        frame: {
                            x: 977,
                            y: 410,
                            w: 64,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-boost-01.img": {
                        frame: {
                            x: 977,
                            y: 478,
                            w: 62,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 62,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-colt45-dual.img": {
                        frame: {
                            x: 977,
                            y: 546,
                            w: 62,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 62,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-ot38-dual.img": {
                        frame: {
                            x: 977,
                            y: 614,
                            w: 62,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 62,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m4a1.img": {
                        frame: {
                            x: 977,
                            y: 682,
                            w: 60,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 0,
                            w: 60,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "campfire.img": {
                        frame: {
                            x: 977,
                            y: 750,
                            w: 60,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 0,
                            w: 60,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-dp28.img": {
                        frame: {
                            x: 977,
                            y: 818,
                            w: 58,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 58,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-an94.img": {
                        frame: {
                            x: 2,
                            y: 914,
                            w: 58,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 58,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "snowflake.img": {
                        frame: {
                            x: 64,
                            y: 914,
                            w: 58,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 58,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-scorpion.img": {
                        frame: {
                            x: 126,
                            y: 914,
                            w: 58,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 58,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m1a1.img": {
                        frame: {
                            x: 188,
                            y: 914,
                            w: 58,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 58,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-pkp.img": {
                        frame: {
                            x: 250,
                            y: 914,
                            w: 58,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 58,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m1014.img": {
                        frame: {
                            x: 312,
                            y: 914,
                            w: 56,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 0,
                            w: 56,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "trash.img": {
                        frame: {
                            x: 372,
                            y: 914,
                            w: 56,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 0,
                            w: 56,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-flare-gun-dual.img": {
                        frame: {
                            x: 432,
                            y: 914,
                            w: 56,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 0,
                            w: 56,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "thumbs-up.img": {
                        frame: {
                            x: 492,
                            y: 914,
                            w: 54,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 0,
                            w: 54,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-ots38-dual.img": {
                        frame: {
                            x: 550,
                            y: 914,
                            w: 53,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 0,
                            w: 53,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m93r.img": {
                        frame: {
                            x: 607,
                            y: 914,
                            w: 52,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 0,
                            w: 52,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "indicator.img": {
                        frame: {
                            x: 647,
                            y: 145,
                            w: 46,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 0,
                            w: 46,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "bullets.img": {
                        frame: {
                            x: 647,
                            y: 213,
                            w: 44,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 0,
                            w: 44,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-airdrop-04.img": {
                        frame: {
                            x: 647,
                            y: 281,
                            w: 27,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 27,
                            h: 64
                        },
                        sourceSize: {
                            w: 27,
                            h: 64
                        }
                    },
                    "ping-map-danger.img": {
                        frame: {
                            x: 669,
                            y: 75,
                            w: 22,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 21,
                            y: 0,
                            w: 22,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-splat-01.img": {
                        frame: {
                            x: 663,
                            y: 914,
                            w: 64,
                            h: 63
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 4,
                            w: 64,
                            h: 63
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "heart.img": {
                        frame: {
                            x: 731,
                            y: 914,
                            w: 64,
                            h: 63
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 64,
                            h: 63
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "police.img": {
                        frame: {
                            x: 799,
                            y: 914,
                            w: 52,
                            h: 63
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 0,
                            w: 52,
                            h: 63
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "perk-2.img": {
                        frame: {
                            x: 855,
                            y: 914,
                            w: 64,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 64,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-bar.img": {
                        frame: {
                            x: 923,
                            y: 914,
                            w: 64,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 64,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "perk-3.img": {
                        frame: {
                            x: 1045,
                            y: 2,
                            w: 64,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 64,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "perk-1.img": {
                        frame: {
                            x: 1045,
                            y: 68,
                            w: 64,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 64,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "chicken-dinner.img": {
                        frame: {
                            x: 1045,
                            y: 134,
                            w: 64,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 64,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-splat-03.img": {
                        frame: {
                            x: 1045,
                            y: 200,
                            w: 63,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 2,
                            w: 63,
                            h: 62
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "surviv.img": {
                        frame: {
                            x: 1045,
                            y: 266,
                            w: 62,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 62,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-awc.img": {
                        frame: {
                            x: 1045,
                            y: 332,
                            w: 62,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 62,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-usas.img": {
                        frame: {
                            x: 1045,
                            y: 398,
                            w: 62,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 62,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "emote.img": {
                        frame: {
                            x: 1045,
                            y: 464,
                            w: 62,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 62,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m249.img": {
                        frame: {
                            x: 1045,
                            y: 530,
                            w: 58,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 1,
                            w: 58,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-mk12.img": {
                        frame: {
                            x: 1045,
                            y: 596,
                            w: 58,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 1,
                            w: 58,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-saiga.img": {
                        frame: {
                            x: 1045,
                            y: 662,
                            w: 58,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 1,
                            w: 58,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "tombstone.img": {
                        frame: {
                            x: 1045,
                            y: 728,
                            w: 58,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 58,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "cupcake.img": {
                        frame: {
                            x: 1045,
                            y: 794,
                            w: 56,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 1,
                            w: 56,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-frag-pin-02.img": {
                        frame: {
                            x: 1045,
                            y: 860,
                            w: 56,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 56,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-frag-pin-01.img": {
                        frame: {
                            x: 2,
                            y: 982,
                            w: 56,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 56,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-frag-nopin-01.img": {
                        frame: {
                            x: 62,
                            y: 982,
                            w: 55,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 2,
                            w: 55,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-frag-nopin-02.img": {
                        frame: {
                            x: 121,
                            y: 982,
                            w: 55,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 2,
                            w: 55,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m39.img": {
                        frame: {
                            x: 180,
                            y: 982,
                            w: 54,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 1,
                            w: 54,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "candy-corn.img": {
                        frame: {
                            x: 238,
                            y: 982,
                            w: 53,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 1,
                            w: 53,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "snowman.img": {
                        frame: {
                            x: 991,
                            y: 914,
                            w: 50,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 1,
                            w: 50,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "egg.img": {
                        frame: {
                            x: 295,
                            y: 982,
                            w: 50,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 1,
                            w: 50,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-colt45.img": {
                        frame: {
                            x: 647,
                            y: 349,
                            w: 48,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 1,
                            w: 48,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-frag-nopin-nolever-01.img": {
                        frame: {
                            x: 647,
                            y: 415,
                            w: 46,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 2,
                            w: 46,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "perk-5.img": {
                        frame: {
                            x: 647,
                            y: 481,
                            w: 46,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 1,
                            w: 46,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-frag-nopin-nolever-02.img": {
                        frame: {
                            x: 647,
                            y: 547,
                            w: 46,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 2,
                            w: 46,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-throwable-smoke.img": {
                        frame: {
                            x: 349,
                            y: 982,
                            w: 43,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 1,
                            w: 43,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-chest-02.img": {
                        frame: {
                            x: 603,
                            y: 566,
                            w: 40,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 1,
                            w: 40,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ice-cream.img": {
                        frame: {
                            x: 396,
                            y: 982,
                            w: 34,
                            h: 62
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 15,
                            y: 1,
                            w: 34,
                            h: 62
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m1100.img": {
                        frame: {
                            x: 434,
                            y: 982,
                            w: 61,
                            h: 61
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 61,
                            h: 61
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-qbb97.img": {
                        frame: {
                            x: 499,
                            y: 982,
                            w: 60,
                            h: 61
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 60,
                            h: 61
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m1911.img": {
                        frame: {
                            x: 563,
                            y: 982,
                            w: 54,
                            h: 61
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 2,
                            w: 54,
                            h: 61
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-hk416.img": {
                        frame: {
                            x: 621,
                            y: 982,
                            w: 54,
                            h: 61
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 1,
                            w: 54,
                            h: 61
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-potato-02.img": {
                        frame: {
                            x: 679,
                            y: 982,
                            w: 48,
                            h: 61
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 1,
                            w: 48,
                            h: 61
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "perk-4.img": {
                        frame: {
                            x: 731,
                            y: 982,
                            w: 44,
                            h: 61
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 2,
                            w: 44,
                            h: 61
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-strobe-armed.img": {
                        frame: {
                            x: 779,
                            y: 982,
                            w: 68,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 13,
                            w: 68,
                            h: 60
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "proj-strobe-arming.img": {
                        frame: {
                            x: 851,
                            y: 982,
                            w: 68,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 13,
                            w: 68,
                            h: 60
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "loot-weapon-m1911-dual.img": {
                        frame: {
                            x: 923,
                            y: 982,
                            w: 64,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 64,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m9-dual.img": {
                        frame: {
                            x: 991,
                            y: 982,
                            w: 64,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 64,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "salt.img": {
                        frame: {
                            x: 2,
                            y: 1048,
                            w: 64,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 64,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-sv98.img": {
                        frame: {
                            x: 70,
                            y: 1048,
                            w: 62,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 3,
                            w: 62,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "donut.img": {
                        frame: {
                            x: 136,
                            y: 1048,
                            w: 60,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 60,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-chest-01.img": {
                        frame: {
                            x: 200,
                            y: 1048,
                            w: 60,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 60,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-part-circle-auto-outer.img": {
                        frame: {
                            x: 1365,
                            y: 813,
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
                    "part-feather-01.img": {
                        frame: {
                            x: 328,
                            y: 1048,
                            w: 60,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 60,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "gas.img": {
                        frame: {
                            x: 392,
                            y: 1048,
                            w: 60,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 60,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-pumpshotgun.img": {
                        frame: {
                            x: 456,
                            y: 1048,
                            w: 60,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 60,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "skull.img": {
                        frame: {
                            x: 520,
                            y: 1048,
                            w: 60,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 60,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-feather-02.img": {
                        frame: {
                            x: 584,
                            y: 1048,
                            w: 60,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 60,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "mag-glass.img": {
                        frame: {
                            x: 648,
                            y: 1048,
                            w: 60,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 60,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-ump9.img": {
                        frame: {
                            x: 712,
                            y: 1048,
                            w: 58,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 2,
                            w: 58,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-famas.img": {
                        frame: {
                            x: 774,
                            y: 1048,
                            w: 58,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 2,
                            w: 58,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "flex.img": {
                        frame: {
                            x: 836,
                            y: 1048,
                            w: 56,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 2,
                            w: 56,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-medical-bandage.img": {
                        frame: {
                            x: 896,
                            y: 1048,
                            w: 54,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 2,
                            w: 54,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-scar.img": {
                        frame: {
                            x: 954,
                            y: 1048,
                            w: 54,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 2,
                            w: 54,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-vector45.img": {
                        frame: {
                            x: 1012,
                            y: 1048,
                            w: 54,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 2,
                            w: 54,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "acorn.img": {
                        frame: {
                            x: 1113,
                            y: 2,
                            w: 54,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 2,
                            w: 54,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-chest-03.img": {
                        frame: {
                            x: 1113,
                            y: 66,
                            w: 50,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 2,
                            w: 50,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-m9.img": {
                        frame: {
                            x: 1113,
                            y: 130,
                            w: 50,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 2,
                            w: 50,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-pack-01.img": {
                        frame: {
                            x: 1113,
                            y: 194,
                            w: 48,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 2,
                            w: 48,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-pack-00.img": {
                        frame: {
                            x: 1113,
                            y: 258,
                            w: 46,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 2,
                            w: 46,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-pack-02.img": {
                        frame: {
                            x: 1113,
                            y: 322,
                            w: 46,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 2,
                            w: 46,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-ots38.img": {
                        frame: {
                            x: 1113,
                            y: 386,
                            w: 42,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 11,
                            y: 2,
                            w: 42,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-flare-gun.img": {
                        frame: {
                            x: 1113,
                            y: 450,
                            w: 42,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 11,
                            y: 2,
                            w: 42,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-melee-bowie-frontier.img": {
                        frame: {
                            x: 1113,
                            y: 514,
                            w: 22,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 21,
                            y: 2,
                            w: 22,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-melee-bowie-vintage.img": {
                        frame: {
                            x: 1139,
                            y: 514,
                            w: 22,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 21,
                            y: 2,
                            w: 22,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-melee-bayonet-rugged.img": {
                        frame: {
                            x: 1113,
                            y: 578,
                            w: 20,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 22,
                            y: 2,
                            w: 20,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-melee-bayonet-woodland.img": {
                        frame: {
                            x: 1137,
                            y: 578,
                            w: 20,
                            h: 60
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 22,
                            y: 2,
                            w: 20,
                            h: 60
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-mosin.img": {
                        frame: {
                            x: 1171,
                            y: 2,
                            w: 60,
                            h: 59
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 3,
                            w: 60,
                            h: 59
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-leaf-06.img": {
                        frame: {
                            x: 1171,
                            y: 65,
                            w: 59,
                            h: 59
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 2,
                            w: 59,
                            h: 59
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-leaf-05.img": {
                        frame: {
                            x: 1171,
                            y: 128,
                            w: 59,
                            h: 59
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 2,
                            w: 59,
                            h: 59
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-leaf-04.img": {
                        frame: {
                            x: 1171,
                            y: 191,
                            w: 59,
                            h: 59
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 2,
                            w: 59,
                            h: 59
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-leaf-03.img": {
                        frame: {
                            x: 1171,
                            y: 254,
                            w: 59,
                            h: 59
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 2,
                            w: 59,
                            h: 59
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "sleepy.img": {
                        frame: {
                            x: 2,
                            y: 1112,
                            w: 64,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 64,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-shirt-04.img": {
                        frame: {
                            x: 1171,
                            y: 317,
                            w: 60,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 3,
                            w: 60,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-shirt-03.img": {
                        frame: {
                            x: 1171,
                            y: 379,
                            w: 60,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 3,
                            w: 60,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-shirt-01.img": {
                        frame: {
                            x: 1171,
                            y: 441,
                            w: 60,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 3,
                            w: 60,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "cattle.img": {
                        frame: {
                            x: 1171,
                            y: 503,
                            w: 60,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 3,
                            w: 60,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-shirt-02.img": {
                        frame: {
                            x: 1171,
                            y: 565,
                            w: 60,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 3,
                            w: 60,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-blossom-04.img": {
                        frame: {
                            x: 1171,
                            y: 627,
                            w: 59,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 4,
                            w: 59,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-blossom-03.img": {
                        frame: {
                            x: 1171,
                            y: 689,
                            w: 59,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 4,
                            w: 59,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ammo-556mm.img": {
                        frame: {
                            x: 1171,
                            y: 751,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ammo-box.img": {
                        frame: {
                            x: 1171,
                            y: 813,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ammo-9mm.img": {
                        frame: {
                            x: 1171,
                            y: 875,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ammo-762mm.img": {
                        frame: {
                            x: 1171,
                            y: 937,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ammo-308sub.img": {
                        frame: {
                            x: 1171,
                            y: 999,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-spark-02.img": {
                        frame: {
                            x: 70,
                            y: 1112,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 60,
                            h: 60
                        }
                    },
                    "part-spark-01.img": {
                        frame: {
                            x: 132,
                            y: 1112,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 60,
                            h: 60
                        }
                    },
                    "ammo-45acp.img": {
                        frame: {
                            x: 194,
                            y: 1112,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ammo-flare.img": {
                        frame: {
                            x: 256,
                            y: 1112,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ammo-12gauge.img": {
                        frame: {
                            x: 318,
                            y: 1112,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ammo-50AE.img": {
                        frame: {
                            x: 380,
                            y: 1112,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-garand.img": {
                        frame: {
                            x: 442,
                            y: 1112,
                            w: 57,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 57,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-vector.img": {
                        frame: {
                            x: 503,
                            y: 1112,
                            w: 56,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 3,
                            w: 56,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-pack-03.img": {
                        frame: {
                            x: 1113,
                            y: 642,
                            w: 54,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 3,
                            w: 54,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "pumpkin.img": {
                        frame: {
                            x: 1113,
                            y: 704,
                            w: 54,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 3,
                            w: 54,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-deagle.img": {
                        frame: {
                            x: 1113,
                            y: 766,
                            w: 53,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 3,
                            w: 53,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "chick.img": {
                        frame: {
                            x: 1113,
                            y: 828,
                            w: 52,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 3,
                            w: 52,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "tap.img": {
                        frame: {
                            x: 1113,
                            y: 890,
                            w: 50,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 3,
                            w: 50,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-spas12.img": {
                        frame: {
                            x: 1113,
                            y: 952,
                            w: 50,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 3,
                            w: 50,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-mp5.img": {
                        frame: {
                            x: 1113,
                            y: 1014,
                            w: 50,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 3,
                            w: 50,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-ot38.img": {
                        frame: {
                            x: 1059,
                            y: 982,
                            w: 46,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 3,
                            w: 46,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-throwable-mirv.img": {
                        frame: {
                            x: 563,
                            y: 1112,
                            w: 42,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 11,
                            y: 3,
                            w: 42,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-melee-huntsman-rugged.img": {
                        frame: {
                            x: 757,
                            y: 217,
                            w: 12,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 26,
                            y: 3,
                            w: 12,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-melee-huntsman-burnished.img": {
                        frame: {
                            x: 754,
                            y: 358,
                            w: 12,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 26,
                            y: 3,
                            w: 12,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-melee-pan-black-side.img": {
                        frame: {
                            x: 754,
                            y: 428,
                            w: 11,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 27,
                            y: 3,
                            w: 11,
                            h: 58
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "player-emote.img": {
                        frame: {
                            x: 609,
                            y: 1112,
                            w: 58,
                            h: 57
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 4,
                            w: 58,
                            h: 57
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "player-gui.img": {
                        frame: {
                            x: 671,
                            y: 1112,
                            w: 58,
                            h: 57
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 4,
                            w: 58,
                            h: 57
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-ak.img": {
                        frame: {
                            x: 733,
                            y: 1112,
                            w: 50,
                            h: 57
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 4,
                            w: 50,
                            h: 57
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "pineapple.img": {
                        frame: {
                            x: 1070,
                            y: 1048,
                            w: 35,
                            h: 57
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 15,
                            y: 0,
                            w: 35,
                            h: 57
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "link.img": {
                        frame: {
                            x: 787,
                            y: 1112,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-crossing.img": {
                        frame: {
                            x: 855,
                            y: 1112,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-swine.img": {
                        frame: {
                            x: 923,
                            y: 1112,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-storm.img": {
                        frame: {
                            x: 991,
                            y: 1112,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-meteor.img": {
                        frame: {
                            x: 1059,
                            y: 1112,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-conch.img": {
                        frame: {
                            x: 1127,
                            y: 1112,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-egg.img": {
                        frame: {
                            x: 2,
                            y: 1174,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-hydra.img": {
                        frame: {
                            x: 70,
                            y: 1174,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-hatchet.img": {
                        frame: {
                            x: 138,
                            y: 1174,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-chrysanthemum.img": {
                        frame: {
                            x: 206,
                            y: 1174,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-caduceus.img": {
                        frame: {
                            x: 274,
                            y: 1174,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "logo-surviv.img": {
                        frame: {
                            x: 342,
                            y: 1174,
                            w: 64,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 64,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-glock-dual.img": {
                        frame: {
                            x: 410,
                            y: 1174,
                            w: 62,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 4,
                            w: 62,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "danger.img": {
                        frame: {
                            x: 476,
                            y: 1174,
                            w: 60,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 4,
                            w: 60,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-model94.img": {
                        frame: {
                            x: 540,
                            y: 1174,
                            w: 60,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 4,
                            w: 60,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "santa-hat.img": {
                        frame: {
                            x: 604,
                            y: 1174,
                            w: 57,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 3,
                            w: 57,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-leaf-02.img": {
                        frame: {
                            x: 665,
                            y: 1174,
                            w: 56,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 4,
                            w: 56,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-blossom-01.img": {
                        frame: {
                            x: 725,
                            y: 1174,
                            w: 54,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 4,
                            w: 54,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-potato-02.img": {
                        frame: {
                            x: 783,
                            y: 1174,
                            w: 48,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 4,
                            w: 48,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-potato-01.img": {
                        frame: {
                            x: 835,
                            y: 1174,
                            w: 48,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 4,
                            w: 48,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-glock.img": {
                        frame: {
                            x: 887,
                            y: 1174,
                            w: 46,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 4,
                            w: 46,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-medical-soda.img": {
                        frame: {
                            x: 1195,
                            y: 1112,
                            w: 32,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 16,
                            y: 4,
                            w: 32,
                            h: 56
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-blossom-02.img": {
                        frame: {
                            x: 937,
                            y: 1174,
                            w: 54,
                            h: 55
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 5,
                            w: 54,
                            h: 55
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-map-airdrop.img": {
                        frame: {
                            x: 995,
                            y: 1174,
                            w: 38,
                            h: 55
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 13,
                            y: 4,
                            w: 38,
                            h: 55
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "hamburger.img": {
                        frame: {
                            x: 1037,
                            y: 1174,
                            w: 64,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 5,
                            w: 64,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "hide.img": {
                        frame: {
                            x: 1105,
                            y: 1174,
                            w: 64,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 5,
                            w: 64,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-leaf-01.img": {
                        frame: {
                            x: 1235,
                            y: 2,
                            w: 62,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 5,
                            w: 62,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-medical-healthkit.img": {
                        frame: {
                            x: 1235,
                            y: 60,
                            w: 60,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 5,
                            w: 60,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "emote-medical-healthkit.img": {
                        frame: {
                            x: 1235,
                            y: 118,
                            w: 60,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 5,
                            w: 60,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-mp220.img": {
                        frame: {
                            x: 1235,
                            y: 176,
                            w: 58,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 5,
                            w: 58,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-snowball-01.img": {
                        frame: {
                            x: 1235,
                            y: 234,
                            w: 54,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 5,
                            w: 54,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-snowball-02.img": {
                        frame: {
                            x: 1235,
                            y: 292,
                            w: 54,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 5,
                            w: 54,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "leek.img": {
                        frame: {
                            x: 1235,
                            y: 350,
                            w: 54,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 5,
                            w: 54,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-weapon-mac10.img": {
                        frame: {
                            x: 1235,
                            y: 408,
                            w: 52,
                            h: 54
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 5,
                            w: 52,
                            h: 54
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "turkey-animal.img": {
                        frame: {
                            x: 1235,
                            y: 466,
                            w: 60,
                            h: 53
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 6,
                            w: 60,
                            h: 53
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ribbon-blue.img": {
                        frame: {
                            x: 1235,
                            y: 523,
                            w: 50,
                            h: 53
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 10,
                            w: 50,
                            h: 53
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "ribbon-red.img": {
                        frame: {
                            x: 1235,
                            y: 580,
                            w: 50,
                            h: 53
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 10,
                            w: 50,
                            h: 53
                        },
                        sourceSize: {
                            w: 74,
                            h: 74
                        }
                    },
                    "ping-map-airstrike.img": {
                        frame: {
                            x: 1235,
                            y: 637,
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
                    "gun-ots38-01.img": {
                        frame: {
                            x: 1263,
                            y: 637,
                            w: 20,
                            h: 53
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 64,
                            w: 20,
                            h: 53
                        },
                        sourceSize: {
                            w: 28,
                            h: 116
                        }
                    },
                    "return-arrow.img": {
                        frame: {
                            x: 1045,
                            y: 926,
                            w: 64,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 6,
                            w: 64,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-helmet-01.img": {
                        frame: {
                            x: 1235,
                            y: 694,
                            w: 58,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 6,
                            w: 58,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "eggplant.img": {
                        frame: {
                            x: 1235,
                            y: 750,
                            w: 54,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 6,
                            w: 54,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "trunk.img": {
                        frame: {
                            x: 1235,
                            y: 806,
                            w: 54,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 6,
                            w: 54,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-map-help.img": {
                        frame: {
                            x: 1235,
                            y: 862,
                            w: 52,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 52,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-throwable-frag.img": {
                        frame: {
                            x: 1235,
                            y: 918,
                            w: 52,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 52,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "crab.img": {
                        frame: {
                            x: 1235,
                            y: 974,
                            w: 52,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 52,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "movement.img": {
                        frame: {
                            x: 1235,
                            y: 1030,
                            w: 52,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 6,
                            w: 52,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-throwable-potato.img": {
                        frame: {
                            x: 1235,
                            y: 1086,
                            w: 48,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 6,
                            w: 48,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "question.img": {
                        frame: {
                            x: 1235,
                            y: 1142,
                            w: 36,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 14,
                            y: 6,
                            w: 36,
                            h: 52
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "gun-short-01.img": {
                        frame: {
                            x: 1275,
                            y: 1142,
                            w: 18,
                            h: 52
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 18,
                            h: 52
                        },
                        sourceSize: {
                            w: 16,
                            h: 50
                        }
                    },
                    "dab-face.img": {
                        frame: {
                            x: 2,
                            y: 1234,
                            w: 72,
                            h: 50
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 11,
                            w: 72,
                            h: 50
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "forest.img": {
                        frame: {
                            x: 78,
                            y: 1234,
                            w: 62,
                            h: 50
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 7,
                            w: 62,
                            h: 50
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "potato.img": {
                        frame: {
                            x: 1173,
                            y: 1174,
                            w: 52,
                            h: 50
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 7,
                            w: 52,
                            h: 50
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "baguette.img": {
                        frame: {
                            x: 144,
                            y: 1234,
                            w: 50,
                            h: 50
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 7,
                            w: 50,
                            h: 50
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "copy.img": {
                        frame: {
                            x: 198,
                            y: 1234,
                            w: 46,
                            h: 50
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 7,
                            w: 46,
                            h: 50
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "minimize.img": {
                        frame: {
                            x: 248,
                            y: 1234,
                            w: 49,
                            h: 49
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 7,
                            w: 49,
                            h: 49
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "fish.img": {
                        frame: {
                            x: 301,
                            y: 1234,
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
                    "whale.img": {
                        frame: {
                            x: 369,
                            y: 1234,
                            w: 60,
                            h: 48
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 8,
                            w: 60,
                            h: 48
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-pumpkin-01.img": {
                        frame: {
                            x: 433,
                            y: 1234,
                            w: 54,
                            h: 48
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 8,
                            w: 54,
                            h: 48
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-airdrop-01x.img": {
                        frame: {
                            x: 491,
                            y: 1234,
                            w: 48,
                            h: 48
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 48,
                            h: 48
                        },
                        sourceSize: {
                            w: 48,
                            h: 48
                        }
                    },
                    "part-airdrop-01.img": {
                        frame: {
                            x: 543,
                            y: 1234,
                            w: 48,
                            h: 48
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 48,
                            h: 48
                        },
                        sourceSize: {
                            w: 48,
                            h: 48
                        }
                    },
                    "skull-leader.img": {
                        frame: {
                            x: 595,
                            y: 1234,
                            w: 46,
                            h: 48
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 46,
                            h: 48
                        },
                        sourceSize: {
                            w: 48,
                            h: 48
                        }
                    },
                    "teabag.img": {
                        frame: {
                            x: 1171,
                            y: 1061,
                            w: 55,
                            h: 47
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 9,
                            w: 55,
                            h: 47
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "headshot-face.img": {
                        frame: {
                            x: 645,
                            y: 1234,
                            w: 64,
                            h: 46
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 11,
                            w: 64,
                            h: 46
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-medical-pill.img": {
                        frame: {
                            x: 713,
                            y: 1234,
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
                    "pilgrim-hat.img": {
                        frame: {
                            x: 777,
                            y: 1234,
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
                            x: 841,
                            y: 1234,
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
                            x: 901,
                            y: 1234,
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
                    "part-flare-01.img": {
                        frame: {
                            x: 958,
                            y: 1234,
                            w: 46,
                            h: 46
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 46,
                            h: 46
                        },
                        sourceSize: {
                            w: 50,
                            h: 50
                        }
                    },
                    "loot-melee-pan-black.img": {
                        frame: {
                            x: 1008,
                            y: 1234,
                            w: 60,
                            h: 44
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 10,
                            w: 60,
                            h: 44
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-helmet-03.img": {
                        frame: {
                            x: 1072,
                            y: 1234,
                            w: 58,
                            h: 44
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 10,
                            w: 58,
                            h: 44
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "ping-map-woods-king.img": {
                        frame: {
                            x: 1134,
                            y: 1234,
                            w: 48,
                            h: 44
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 10,
                            w: 48,
                            h: 44
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "loot-throwable-snowball.img": {
                        frame: {
                            x: 1186,
                            y: 1234,
                            w: 44,
                            h: 44
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 10,
                            w: 44,
                            h: 44
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "cog.img": {
                        frame: {
                            x: 1234,
                            y: 1234,
                            w: 42,
                            h: 44
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 11,
                            y: 10,
                            w: 42,
                            h: 44
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "player-mash-01.img": {
                        frame: {
                            x: 1301,
                            y: 2,
                            w: 80,
                            h: 43
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 80,
                            h: 43
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "player-snow-01.img": {
                        frame: {
                            x: 1301,
                            y: 49,
                            w: 80,
                            h: 43
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 80,
                            h: 43
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "eye.img": {
                        frame: {
                            x: 1301,
                            y: 96,
                            w: 64,
                            h: 42
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 11,
                            w: 64,
                            h: 42
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "chicken.img": {
                        frame: {
                            x: 1301,
                            y: 142,
                            w: 54,
                            h: 42
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 11,
                            w: 54,
                            h: 42
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "audio-on.img": {
                        frame: {
                            x: 1301,
                            y: 188,
                            w: 48,
                            h: 42
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 11,
                            w: 48,
                            h: 42
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "player-mash-02.img": {
                        frame: {
                            x: 1301,
                            y: 234,
                            w: 74,
                            h: 41
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 0,
                            w: 74,
                            h: 41
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "player-snow-02.img": {
                        frame: {
                            x: 1301,
                            y: 279,
                            w: 74,
                            h: 41
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 0,
                            w: 74,
                            h: 41
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "loot-melee-fireaxe.img": {
                        frame: {
                            x: 1301,
                            y: 324,
                            w: 78,
                            h: 40
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: -1,
                            y: -1,
                            w: 78,
                            h: 40
                        },
                        sourceSize: {
                            w: 76,
                            h: 38
                        }
                    },
                    "loot-helmet-02.img": {
                        frame: {
                            x: 1301,
                            y: 368,
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
                    "audio-off.img": {
                        frame: {
                            x: 1301,
                            y: 412,
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
                            x: 1301,
                            y: 456,
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
                    "loot-melee-hook-silver.img": {
                        frame: {
                            x: 1359,
                            y: 142,
                            w: 22,
                            h: 40
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 21,
                            y: 12,
                            w: 22,
                            h: 40
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-mirv-mini-01.img": {
                        frame: {
                            x: 1301,
                            y: 500,
                            w: 44,
                            h: 39
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 5,
                            w: 44,
                            h: 39
                        },
                        sourceSize: {
                            w: 48,
                            h: 48
                        }
                    },
                    "proj-mirv-mini-02.img": {
                        frame: {
                            x: 1301,
                            y: 543,
                            w: 44,
                            h: 39
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 5,
                            w: 44,
                            h: 39
                        },
                        sourceSize: {
                            w: 48,
                            h: 48
                        }
                    },
                    "player-snow-03.img": {
                        frame: {
                            x: 1301,
                            y: 586,
                            w: 75,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 75,
                            h: 38
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "player-mash-03.img": {
                        frame: {
                            x: 1301,
                            y: 628,
                            w: 75,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 75,
                            h: 38
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "gg.img": {
                        frame: {
                            x: 1301,
                            y: 670,
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
                    "gun-dp28-top-01.img": {
                        frame: {
                            x: 1343,
                            y: 456,
                            w: 38,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 38,
                            h: 38
                        },
                        sourceSize: {
                            w: 40,
                            h: 40
                        }
                    },
                    "quit.img": {
                        frame: {
                            x: 1301,
                            y: 712,
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
                    "player-patch-01.img": {
                        frame: {
                            x: 1301,
                            y: 754,
                            w: 60,
                            h: 37
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 0,
                            w: 60,
                            h: 37
                        },
                        sourceSize: {
                            w: 80,
                            h: 80
                        }
                    },
                    "player-patch-red.img": {
                        frame: {
                            x: 1301,
                            y: 795,
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
                    "timer-background.img": {
                        frame: {
                            x: 1341,
                            y: 712,
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
                    "cursor-03.img": {
                        frame: {
                            x: 1301,
                            y: 835,
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
                    "cursor-01.img": {
                        frame: {
                            x: 1341,
                            y: 835,
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
                    "part-smoke-01.img": {
                        frame: {
                            x: 1301,
                            y: 875,
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
                    "close.img": {
                        frame: {
                            x: 1341,
                            y: 875,
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
                    "player-map-inner.img": {
                        frame: {
                            x: 1301,
                            y: 915,
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
                    "part-cloth-01.img": {
                        frame: {
                            x: 1341,
                            y: 915,
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
                    "player-map-outer.img": {
                        frame: {
                            x: 1301,
                            y: 955,
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
                    "part-snow-01.img": {
                        frame: {
                            x: 1341,
                            y: 955,
                            w: 35,
                            h: 36
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 35,
                            h: 36
                        },
                        sourceSize: {
                            w: 36,
                            h: 36
                        }
                    },
                    "ping-indicator.img": {
                        frame: {
                            x: 1301,
                            y: 995,
                            w: 46,
                            h: 35
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 29,
                            w: 46,
                            h: 35
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "part-pulse-01.img": {
                        frame: {
                            x: 1301,
                            y: 1034,
                            w: 34,
                            h: 34
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 34,
                            h: 34
                        },
                        sourceSize: {
                            w: 36,
                            h: 36
                        }
                    },
                    "checked.img": {
                        frame: {
