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
