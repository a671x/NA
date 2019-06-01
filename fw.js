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
            this.initialized = !1, this.teamMode = 0, this.onJoin = m, this.onQuit = p, this.pixi = e, this.Fe = t, this.je = l, this.localization = a, this.config = i, this.qe = r, this.Ne = o, this.Ve = n, this.adManager = s, this.resourceManager = c, this.victoryMusic = null, this.ws = null, this.connecting = !1, this.connected = !1
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
            Ge: function(e, t, a) {
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
                                i.Ue(a, t.getStream())
                            }
                        }, this.ws.onclose = function() {
                            var e = i.He && i.He.displayingStats,
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
                this.canvasMode = this.pixi.renderer.type == o.RENDERER_TYPE.CANVAS, this._ = !1, this.We = 0, this.U = !1, this.Ke = !1, this.Ze = new j.Xe(this.qe, this.config), this.ie = new f.j, this.Ye = new R.Je(this, this.canvasMode), this.Qe = new E.d(this.Ye), this.$e = new S.f, this.et = new C.tt(this.$e), this.at = new O.it, this.rt = new x.ot, this.nt = new M.st, this.lt = new B.ct, this.mt = new k.ve, this.dt = new D.ht(this.Fe), this.ut = new w.$, this.gt = new F.p, this.yt = new b.Te, this.wt = new P.xt, this.ft = new T.bt(this.canvasMode), this.He = new q.pe(this, this.Fe, this.Qe, this.dt, this.localization, this.canvasMode, this.Ze, this.Ne, this.Ve, this.adManager), this._t = new N.St(this.localization, this.Ne), this.vt = new v.kt(this.Fe, this.He, this.at, this.ie, this.et), this.zt = new L.ze(this.Qe, this.Fe, this.He);
                var t = (e = {}, i(e, l.Type.Player, this.at.Se), i(e, l.Type.Obstacle, this.et.de), i(e, l.Type.Loot, this.wt.Mt), i(e, l.Type.DeadBody, this.yt.Me), i(e, l.Type.Building, this.et.Tt), i(e, l.Type.Structure, this.et.It), i(e, l.Type.Decal, this.$e.u), i(e, l.Type.Projectile, this.lt.Pt), i(e, l.Type.Smoke, this.gt.e), i(e, l.Type.Airdrop, this.ut.J), e);
                this.Ct = new A.Creator;
                for (var a in t) t.hasOwnProperty(a) && this.Ct.registerType(a, t[a]);
                this.debugDisplay = new o.Graphics;
                for (var r = [this.et.display.ground, this.Ye.layers[0], this.Ye.ground, this.Ye.layers[1], this.Ye.layers[2], this.Ye.layers[3], this.debugDisplay, this.ft.gasRenderer.display, this.Ze.container, this.vt.container, this.He.container, this.He.pieTimer.container, this.vt.indContainer], n = 0; n < r.length; n++) {
                    var s = r[n];
                    s && (s.interactiveChildren = !1, this.pixi.stage.addChild(s))
                }
                this.disconnectMsg = "", this.playing = !1, this.gameOver = !1, this.spectating = !1, this.inputMsgTimeout = 0, this.prevInputMsg = new p.InputMsg, this.playingTicker = 0, this.updateRecvCount = 0, this.playedAssignRoleSfx = {}, this.At = 0, this.Et = 0, this.Dt = null, this.Ot = !1, this.I = 1, this.debugZoom = 1, this.useDebugZoom = !1, this.seq = 0, this.seqInFlight = !1, this.seqSendTime = 0, this.pings = [], this.debugPingTime = 0, this.ie.setShakeEnabled(this.config.get("screenShake")), this.anonPlayerNames = this.config.get("anonPlayerNames"), this.Bt(), this.initialized = !0
            },
            n: function() {
                if (this.ws && (this.ws.onmessage = function() {}, this.ws.close(), this.ws = null), this.connecting = !1, this.connected = !1, this.initialized)
                    for (this.initialized = !1, this.vt.n(), this._t.n(), this.He.n(), this.ft.free(), this.ut.n(), this.dt.n(), this.et.n(), this.Qe.n(), this.Ye.n(), this.Fe.stopAll(); this.pixi.stage.children.length > 0;) {
                        var e = this.pixi.stage.children[0];
                        this.pixi.stage.removeChild(e), e.destroy({
                            children: !0
                        })
                    }
            },
            Rt: function() {
                return this.initialized && this.playing && !this.spectating && !this.He.displayingStats
            },
            c: function(e) {
                var t = this.gt.particles,
                    a = this.et.de.m(),
                    i = 0;
                this._ = !0;
                var r = {};
                r.render = r.render || {}, this.playing && (this.playingTicker += e), this.at.c(e, this.Et, this.teamMode, this.Ye, this.Qe, this.ie, this.et, this.Ne, this.Fe, this.vt.wheelKeyTriggered, this.He.displayingStats, this.spectating), this.updateAmbience(), this.ie.pos = d.copy(this.Dt.pos), this.ie.applyShake();
                var o = this.Dt.Lt(),
                    l = m.min(this.ie.screenWidth, this.ie.screenHeight),
                    h = m.max(this.ie.screenWidth, this.ie.screenHeight),
                    u = m.max(l * (16 / 9), h);
                this.ie.I = .5 * u / (o * this.ie.ppu);
                var w = this.Dt.zoomFast ? 3 : 2,
                    x = this.Dt.zoomFast ? 3 : 1.4,
                    f = this.ie.I > this.ie.k ? w : x;
                this.ie.k = m.lerp(e * f, this.ie.k, this.ie.I), this.Fe.cameraPos = d.copy(this.ie.pos), this.qe.ue(I.Key.Escape) && this.He.toggleEscMenu(), (this.Ne.isBindPressed(s.ToggleMap) || this.qe.ue(I.Key.G) && !this.Ne.isKeyBound(I.Key.G)) && this.He.displayMapLarge(!1), this.Ne.isBindPressed(s.CycleUIMode) && this.He.cycleVisibilityMode(), (this.Ne.isBindPressed(s.HideUI) || this.qe.ue(I.Key.Escape) && !this.He.hudVisible) && this.He.cycleHud();
                var b = this.Dt.pos,
                    _ = this.ie.O(this.qe.he),
                    S = d.sub(_, b),
                    v = d.length(S),
                    k = v > 1e-5 ? d.div(S, v) : d.create(1, 0);
                this.vt.wheelDisplayed && (v = this.prevInputMsg.toMouseLen, k = this.prevInputMsg.toMouseDir);
                var z = new p.InputMsg;
                if (z.seq = this.seq, !this.spectating) {
                    if (g.touch) {
                        var M = this.Ze.getTouchMovement(this.ie),
                            T = this.Ze.getAimMovement(this.Dt, this.ie),
                            P = d.copy(T.aimMovement.toAimDir);
                        if (this.Ze.turnDirTicker -= e, this.Ze.moveDetected && !T.touched) {
                            var C = d.normalizeSafe(M.toMoveDir, d.create(1, 0)),
                                A = this.Ze.turnDirTicker < 0 ? C : T.aimMovement.toAimDir;
                            this.Ze.setAimDir(A), P = A
                        }
                        T.touched && (this.Ze.turnDirTicker = this.Ze.turnDirCooldown), this.Ze.moveDetected ? (z.touchMoveDir = d.normalizeSafe(M.toMoveDir, d.create(1, 0)), z.touchMoveLen = Math.round(255 * m.clamp(M.toMoveLen, 0, 1))) : z.touchMoveLen = 0, z.touchMoveActive = !0;
                        var E = T.aimMovement.toAimLen,
                            D = m.clamp(E / this.Ze.padPosRange, 0, 1) * n.player.throwableMaxMouseDist;
                        z.toMouseLen = D, z.toMouseDir = P
                    } else z.moveLeft = this.Ne.isBindDown(s.MoveLeft) || this.qe.fe(I.Key.Left) && !this.Ne.isKeyBound(I.Key.Left), z.moveRight = this.Ne.isBindDown(s.MoveRight) || this.qe.fe(I.Key.Right) && !this.Ne.isKeyBound(I.Key.Right), z.moveUp = this.Ne.isBindDown(s.MoveUp) || this.qe.fe(I.Key.Up) && !this.Ne.isKeyBound(I.Key.Up), z.moveDown = this.Ne.isBindDown(s.MoveDown) || this.qe.fe(I.Key.Down) && !this.Ne.isKeyBound(I.Key.Down), z.toMouseDir = d.copy(k), z.toMouseLen = v;
                    z.touchMoveDir = d.normalizeSafe(z.touchMoveDir, d.create(1, 0)), z.touchMoveLen = m.clamp(z.touchMoveLen, 0, 255), z.toMouseDir = d.normalizeSafe(z.toMouseDir, d.create(1, 0)), z.toMouseLen = m.clamp(z.toMouseLen, 0, p.Constants.MouseMaxDist), z.shootStart = this.Ne.isBindPressed(s.Fire) || this.Ze.Ft, z.shootHold = this.Ne.isBindDown(s.Fire) || this.Ze.Ft, z.portrait = this.ie.screenWidth < this.ie.screenHeight;
                    for (var O = [s.Reload, s.Revive, s.Use, s.Loot, s.Cancel, s.EquipPrimary, s.EquipSecondary, s.EquipThrowable, s.EquipMelee, s.EquipNextWeap, s.EquipPrevWeap, s.EquipLastWeap, s.EquipOtherGun, s.EquipPrevScope, s.EquipNextScope, s.StowWeapons], B = 0; B < O.length; B++) {
                        var R = O[B];
                        this.Ne.isBindPressed(R) && z.addInput(R)
                    }
                    if (this.Ne.isBindPressed(s.Interact)) {
                        for (var L = [s.Revive, s.Use, s.Loot], F = [], j = 0; j < L.length; j++) {
                            var q = L[j];
                            this.Ne.getBind(q) || F.push(q)
                        }
                        if (F.length == L.length) z.addInput(s.Interact);
                        else
                            for (var N = 0; N < F.length; N++) z.addInput(F[N])
                    }(this.Ne.isBindPressed(s.SwapWeapSlots) || this.He.swapWeapSlots) && (z.addInput(s.SwapWeapSlots), this.Dt.gunSwitchCooldown = 0), this.He.reloadTouched && z.addInput(s.Reload), this.He.interactionTouched && (z.addInput(s.Interact), z.addInput(s.Cancel));
                    for (var V = 0; V < this._t.uiEvents.length; V++) {
                        var G = this._t.uiEvents[V];
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
                    this.Ne.isBindPressed(s.UseBandage) ? z.useItem = "bandage" : this.Ne.isBindPressed(s.UseHealthKit) ? z.useItem = "healthkit" : this.Ne.isBindPressed(s.UseSoda) ? z.useItem = "soda" : this.Ne.isBindPressed(s.UsePainkiller) && (z.useItem = "painkiller");
                    for (var W = !1, K = 0; K < this._t.uiEvents.length; K++) {
                        var Z = this._t.uiEvents[K];
                        if ("drop" == Z.action) {
                            var X = new p.DropItemMsg;
                            if ("weapon" == Z.type) {
                                var Y = this.Dt.oe.weapons;
                                X.item = Y[Z.data].name, X.weapIdx = Z.data
                            } else {
                                var J = "";
                                J = "helmet" == Z.data ? this.Dt.re.helmet : "chest" == Z.data ? this.Dt.re.chest : Z.data, X.item = J
                            }
                            "" != X.item && (this.q(p.Msg.DropItem, X, 128), "fists" != X.item && (W = !0))
                        }
                    }
                    W && this.Fe.playSound("loot_drop_01", {
                        channel: "ui"
                    })
                }
                var Q = this.He.specBegin,
                    $ = this.He.specNext || this.spectating && this.qe.ue(I.Key.Right),
                    ee = this.He.specPrev || this.spectating && this.qe.ue(I.Key.Left),
                    te = this.qe.ue(I.Key.Right) || this.qe.ue(I.Key.Left);
                if (Q || this.spectating && $ || ee) {
                    var ae = new p.SpectateMsg;
                    ae.specBegin = Q, ae.specNext = $, ae.specPrev = ee, ae.specForce = te, this.q(p.Msg.Spectate, ae, 128)
                }
                this.He.specBegin = !1, this.He.specNext = !1, this.He.specPrev = !1, this.He.reloadTouched = !1, this.He.interactionTouched = !1, this.He.swapWeapSlots = !1;
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
                if (this.inputMsgTimeout -= e, (ie || this.inputMsgTimeout < 0) && (this.seqInFlight || (this.seq = (this.seq + 1) % 256, this.seqSendTime = Date.now(), this.seqInFlight = !0, z.seq = this.seq), this.q(p.Msg.Input, z, 128), this.inputMsgTimeout = 1, this.prevInputMsg = z), this._t.flushInput(), this.et.c(e, this.Dt, this.at, this.Qe, this.Fe, this.je, this.Ye, this.ie, t, r), this.wt.c(e, this.Dt, this.ie, r), this.rt.c(e, this.at, this.et, this.ie, this.Dt, this.Ye, this.Qe, this.Fe), this.nt.c(e, this.at, this.et, this.ie, this.Dt, this.Ye, this.Qe, this.Fe), this.lt.c(e, this.Qe, this.Fe, this.Dt, this.et, this.Ye, this.ie), this.mt.c(e, this.et, this.at, this.ie, this.Qe, this.Fe, r), this.ut.c(e, this.Dt, this.ie, this.et, this.Qe, this.Ye, this.Fe), this.dt.c(e, this.ie, this.Dt, this.et, this.Ye), this.gt.c(e, this.ie, this.Dt, this.et, this.Ye), this.zt.c(e, this.Et, this.at, this.Qe, this.Fe), this.Qe.c(e, this.ie, r), this.yt.c(e, this.at, this.Dt, this.anonPlayerNames, this.At, this.et, this.ie, this.Ye), this.$e.c(e, this.ie, this.Ye, r), this.He.c(e, this.Dt, this.et, this.ft, this.wt, this.at, this.ie, this.teamMode, this.et.factionMode), this._t.c(e, this.Dt, this.spectating, this.at, this.wt, this.et, this.Ne), this.vt.c(e, this.At, this.Dt, this.teamMode, this.yt, this.Ye, this.qe, this.Ne, this.spectating), this.Ze.update(e, this.Dt, this.et, this.ie, this.Ye), this.Ye.c(e, this.ie, this.et, r), !this.Ke && this.et.jt && (this.et.U || this.vt.hasSocialUnlocks()) && this.vt.hasCustomEmotes()) {
                    this.Ke = !0;
                    var se = new p.LoadoutMsg;
                    se.emotes = [];
                    for (var le = 0; le < this.vt.emoteLoadout.length; le++) se.emotes.push(this.vt.emoteLoadout[le]);
                    se.custom = this.vt.hasCustomEmotes(), this.q(p.Msg.Loadout, se, 128)
                }
                for (var ce = 0; ce < this.vt.newPings.length; ce++) {
                    var me = this.vt.newPings[ce],
                        pe = new p.EmoteMsg;
                    pe.type = me.type, pe.pos = me.pos, pe.isPing = !0, this.q(p.Msg.Emote, pe, 128)
                }
                this.vt.newPings = [];
                for (var de = 0; de < this.vt.newEmotes.length; de++) {
                    var he = this.vt.newEmotes[de],
                        ue = new p.EmoteMsg;
                    ue.type = he.type, ue.pos = he.pos, ue.isPing = !1, this.q(p.Msg.Emote, ue, 128)
                }
                if (this.vt.newEmotes = [], this.qt(e, r), ++this.We % 30 == 0) {
                    for (var ge = c.Ce, ye = 0; ye < t.length; ye++) {
                        var we = t[ye];
                        we.active && !we.fade && ge(we, c.Ie) && i++
                    }
                    for (var xe = 0; xe < a.length; xe++) {
                        var fe = a[xe];
                        fe.active && !fe.dead && ge(fe, c.Pe) && i++
                    }
                    i && (this.U = !0), i && this.Ot && y.U(this)
                }
            },
            qt: function(e, t) {
                var a = this.et.mapLoaded ? this.et.getMapDef().biome.colors.grass : 8433481;
                this.pixi.renderer.backgroundColor = a, this.at.render(this.ie, t), this.rt.render(this.ie, t), this.nt.render(this.ie), this.$e.render(this.ie, t, this.Dt.layer), this.et.render(this.ie), this.ft.render(this.ie), this.He.render(this.Dt.pos, this.ft, this.ie, this.et, this.dt, t), this.vt.render(this.ie), _.flush()
            },
            updateAmbience: function() {
                var e = this.Dt.pos,
                    t = 0,
                    a = 0,
                    i = 1;
                if (this.et.isInOcean(e)) t = 1, a = 0, i = 0;
                else {
                    var r = this.et.distanceToShore(e);
                    t = m.delerp(r, 50, 0), a = 0;
                    for (var o = 0; o < this.et.terrain.rivers.length; o++) {
                        var n = this.et.terrain.rivers[o],
                            s = n.spline.getClosestTtoPoint(e),
                            l = n.spline.getPos(s),
                            c = d.length(d.sub(l, e)),
                            p = n.waterWidth + 2,
                            h = m.delerp(c, 30 + p, p),
                            u = m.clamp(n.waterWidth / 8, .25, 1);
                        a = m.max(h * u, a)
                    }
                    1 == this.Dt.layer && (a = 0), i = 1
                }
                this.je.getTrack("wind").weight = i, this.je.getTrack("river").weight = a, this.je.getTrack("waves").weight = t
            },
            Bt: function() {
                this.ie.screenWidth = g.screenWidth, this.ie.screenHeight = g.screenHeight, this.et.resize(this.pixi.renderer, this.canvasMode), this.ft.resize(), this.He.resize(this.et, this.ie), this.Ze.resize(), this.Ye.resize(this.et, this.ie)
            },
            Nt: function(e) {
                var t = {
                    audioManager: this.Fe,
                    renderer: this.Ye,
                    particleBarn: this.Qe,
                    map: this.et,
                    smokeBarn: this.gt,
                    decalBarn: this.$e
                };
                e.activePlayerIdDirty && (this.Et = e.activePlayerId);
                for (var a = 0; a < e.playerInfos.length; a++) this.at.Vt(e.playerInfos[a]);
                for (var i = 0; i < e.deletedPlayerIds.length; i++) {
                    var r = e.deletedPlayerIds[i];
                    this.at.Gt(r)
                }
                if ((e.playerInfos.length > 0 || e.deletedPlayerIds.length > 0) && this.at.Ut(), e.playerStatusDirty) {
                    var o = this.at.se(this.Et).teamId;
                    this.at.Ht(o, e.playerStatus, this.et.factionMode)
                }
                if (e.groupStatusDirty) {
                    var n = this.at.se(this.Et).groupId;
                    this.at.Wt(n, e.groupStatus)
                }
                for (var s = 0; s < e.delObjIds.length; s++) e.delObjIds[s], this.Ct.deleteObj(e.delObjIds[s]);
                for (var l = 0; l < e.fullObjects.length; l++) {
                    var c = e.fullObjects[l];
                    this.Ct.updateObjFull(c.__type, c.__id, c, t)
                }
                for (var m = 0; m < e.partObjects.length; m++) {
                    var p = e.partObjects[m];
                    this.Ct.updateObjPart(p.__id, p, t)
                }
                this.spectating = this.Et != this.At, this.Dt = this.at.ke(this.Et), this.Dt.Kt(e.activePlayerData, this.at), e.activePlayerData.weapsDirty && (this.He.weapsDirty = !0), this.spectating && (this.He.setSpectateTarget(this.Et, this.At, this.teamMode, this.anonPlayerNames, this.at), this.Ze.hideAll()), this.Dt.layer = this.Dt.re.layer, this.Ye.setActiveLayer(this.Dt.layer), this.Fe.activeLayer = this.Dt.layer;
                var d = this.Dt.isUnderground(this.et);
                this.Ye.setUnderground(d), this.Fe.underground = d, e.aliveDirty && (1 == e.aliveCounts.length ? this.He.updatePlayersAlive(e.aliveCounts[0]) : e.aliveCounts.length >= 2 && (this.He.updatePlayersAliveRed(e.aliveCounts[0]), this.He.updatePlayersAliveBlue(e.aliveCounts[1]))), this.ft.setProgress(e.gasT), e.gasDirty && this.ft.setFullState(e.gasT, e.gasData, this.et, this.He);
                for (var u = 0; u < e.bullets.length; u++) {
                    var g = e.bullets[u];
                    h[g.bulletType].addFlare ? this.nt.addFlare(g, this.at, this.Ye) : this.rt.addBullet(g, this.at, this.Ye), g.shotFx && this.zt.addShot(g.pos, g.layer, g.playerId, g.shotSourceType, g.shotOffhand, g.lastShot)
                }
                for (var y = 0; y < e.explosions.length; y++) {
                    var w = e.explosions[y];
                    this.mt.addExplosion(w.type, w.pos, w.layer)
                }
                for (var x = 0; x < e.emotes.length; x++) {
                    var f = e.emotes[x];
                    f.isPing ? this.vt.addPing(f, this.et.factionMode) : this.vt.addEmote(f)
                }
                this.dt.Zt(e.planes, this.et);
                for (var b = 0; b < e.airstrikeZones.length; b++) this.dt.Xt(e.airstrikeZones[b]);
                this.He.ce(e.mapIndicators), this.updateRecvCount++
            },
            Ue: function(e, t) {
                var a = this;
                switch (e) {
                    case p.Msg.Joined:
                        var r = new p.JoinedMsg;
                        r.deserialize(t), this.onJoin(), this.teamMode = r.teamMode, this.At = r.playerId, this.Ot = !0, this.vt.updateEmoteWheel(r.emotes), r.started || this.He.setWaitingForPlayers(!0), this.He.removeAds(), this.victoryMusic && (this.victoryMusic.stop(), this.victoryMusic = null), document.hasFocus() || this.Fe.playSound("notification_start_01", {
                            channel: "ui"
                        });
                        break;
                    case p.Msg.Map:
                        var o = new p.MapMsg;
                        o.deserialize(t), this.et.loadMap(o, this.ie, this.canvasMode, this.Qe), this.resourceManager.loadMapAssets(this.et.mapName), this.at.onMapLoad(this.et), this.rt.onMapLoad(this.et), this.Qe.onMapLoad(this.et), this.et.renderMap(this.pixi.renderer, this.canvasMode), this.He.resize(this.et, this.ie);
                        break;
                    case p.Msg.Update:
                        var s = new p.UpdateMsg;
                        s.deserialize(t, this.Ct), this.playing = !0, this.Nt(s);
                        break;
                    case p.Msg.Kill:
                        var l = new p.KillMsg;
                        l.deserialize(t);
                        var c = this.at.se(l.targetId),
                            m = this.at.se(l.killCreditId),
                            d = l.itemSourceType || l.mapSourceType,
                            h = this.at.se(this.Et).teamId,
                            g = l.downed && !l.killed || l.damageType == n.DamageType.Gas || l.damageType == n.DamageType.Bleeding || l.damageType == n.DamageType.Airdrop,
                            w = g ? m : this.at.se(l.killerId),
                            x = c.nameTruncated,
                            f = m.nameTruncated,
                            b = w.nameTruncated;
                        if (this.anonPlayerNames) {
                            var _ = function(e) {
                                return e.playerId == a.Et || e.teamId == h
                            };
                            _(c) || (x = c.anonName), _(m) || (f = m.anonName), _(w) || (b = w.anonName)
                        }
                        x = y.htmlEscape(x), f = y.htmlEscape(f), b = y.htmlEscape(b), l.killCreditId == this.Et ? this.He.showKill({
                            name: f,
                            kills: l.killerKills,
                            completeKill: l.killerId == this.Et
                        }, {
                            name: x,
                            suicide: l.killerId == l.targetId || l.killCreditId == l.targetId,
                            killed: l.killed,
                            downed: l.downed,
                            teamKill: c.teamId == m.teamId
                        }, d, l.damageType, this.spectating) : l.targetId == this.Et && l.downed && !l.killed && this.He.showDowned({
                            name: f,
                            damageType: l.damageType
                        }, {
                            name: x,
                            suicide: l.killerId == l.targetId || l.killCreditId == l.targetId
                        }, d, l.damageType, this.spectating);
                        var S = this._t.getKillFeedText(x, w.teamId ? b : "", d, l.damageType, l.downed && !l.killed),
                            v = this._t.getKillFeedColor(h, c.teamId, m.teamId, this.et.factionMode);
                        if (this._t.addKillFeed(S, v), l.type == n.DamageType.Player && this.rt.createBulletHit(this.at, l.targetId, this.Fe), l.targetRole == n.Role.FactionLeader) {
                            var k = this._t.getRoleKillFeedText(b, c.teamId, l.damageType, l.downed && !l.killed, n.Role.FactionLeader),
                                z = this.at.getTeamColor(c.teamId),
                                M = y.colorToHexString(z);
                            this._t.addKillFeed(k, M), l.killed && this.Fe.playSound("leader_dead_01", {
                                channel: "ui"
                            })
                        }
                        if (l.targetRole == n.Role.WoodsKing) {
                            var T = this._t.getRoleKillFeedText(b, c.teamId, l.damageType, l.downed && !l.killed, n.Role.WoodsKing);
                            this._t.addKillFeed(T, "#12ff00"), l.killed && this.Fe.playSound("leader_dead_01", {
                                channel: "ui"
                            })
                        }
                        break;
                    case p.Msg.AssignRole:
                        var I = new p.AssignRoleMsg;
                        I.deserialize(t);
                        var P = this.at.se(I.playerId);
                        if (!P) break;
                        var C = this._t.getAssignRoleKillFeedText(I.role, P.nameTruncated, P.teamId);
                        if (C) {
                            var A = this.at.getTeamColor(P.teamId),
                                E = y.colorToHexString(A);
                            this._t.addKillFeed(C, E)
                        }
                        if (!this.playedAssignRoleSfx[I.role]) {
                            var D, O = (D = {}, i(D, n.Role.FactionLeader, "leader_assigned_01"), i(D, n.Role.Lieutenant, "lt_assigned_01"), i(D, n.Role.Medic, "medic_assigned_01"), D),
                                B = O[I.role];
                            B && this.Fe.playSound(B, {
                                channel: "ui"
                            }), this.playedAssignRoleSfx[I.role] = !0
                        }
                        this.At == I.playerId && this.He.displayAssignRoleAnnouncement(I.role, P.teamId);
                        break;
                    case p.Msg.PlayerStats:
                        var R = new p.PlayerStatsMsg;
                        R.deserialize(t), this.He.setLocalStats(R.playerStats), this.He.showTeamAd();
                        break;
                    case p.Msg.Stats:
                        var L = new p.StatsMsg;
                        L.deserialize(t), y.Z(L.data, this);
                        break;
                    case p.Msg.GameOver:
                        var F = new p.GameOverMsg;
                        F.deserialize(t), this.gameOver = F.gameOver;
                        for (var j = this.at.se(this.At).teamId, q = 0; q < F.playerStats.length; q++) {
                            var N = F.playerStats[q];
                            if (N.playerId == this.At) {
                                this.He.setLocalStats(N);
                                break
                            }
                        }
                        this.He.showStats(F.playerStats, F.teamId, F.teamRank, F.winningTeamId, F.gameOver, j, this.teamMode, this.spectating, this.at, this.je, this.Fe, this.et.factionMode), j == F.winningTeamId && (this.victoryMusic = this.Fe.playSound("menu_music", {
                            channel: "music",
                            delay: 1300,
                            forceStart: !0
                        })), this.Ze.hideAll();
                        break;
                    case p.Msg.Pickup:
                        var V = new p.PickupMsg;
                        if (V.deserialize(t), V.type == p.PickupMsgType.Success && V.item) {
                            var G = u[V.item];
                            this.Fe.playSound(G.sound.pickup, {
                                channel: "ui"
                            }), "throwable" == G.type && (this.Dt.lastThrowablePickupSfxTicker = .3)
                        } else this._t.displayPickupMessage(V.type);
                        break;
                    case p.Msg.Disconnect:
                        var U = new p.DisconnectMsg;
                        U.deserialize(t), this.disconnectMsg = U.reason
                }
            },
            q: function(e, t, a) {
                var i = a || 128,
                    r = new p.MsgStream(new ArrayBuffer(i));
                r.serializeMsg(e, t), this.Yt(r)
            },
            Yt: function(e) {
                if (this.ws && this.ws.readyState == this.ws.OPEN) try {
                    this.ws.send(e.getBuffer())
                } catch (e) {
                    z.storeGeneric("error", "sendMessageException"), this.ws.close()
                }
            }
        }, e.exports = {
            Jt: r
        }
    },
