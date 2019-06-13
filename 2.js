    "3160ea28": function(e, t, a) {
        "use strict";

        function i(e) {
            var t = Math.floor(e / 3600),
                a = Math.floor(e / 60) % 60,
                i = Math.floor(e) % 60,
                r = "";
            return t > 0 && (r += t + "h "), (t > 0 || a > 0) && (r += a + "m "), r += i + "s"
        }

        function r(e, t, a, i, r, o, c, m, d, h) {
            var u = this;
            this.game = e, this.particleBarn = a, this.localization = r, this.touch = c, this.inputBinds = m, this.inputBindUi = d, this.adManager = h, this.pieTimer = new M.J, this.gameElem = s("#ui-game"), this.statsMain = s("#ui-stats"), this.statsElem = s("#ui-stats-bg"), this.statsContentsContainer = s("#ui-stats-contents"), this.statsContents = s("#ui-stats-contents-inner"), this.statsHeader = s("#ui-stats-header"), this.statsInfoBox = s("#ui-stats-info-box"), this.statsOptions = s("#ui-stats-options"), this.statsAds = s(".ui-stats-ad-container"), this.statsLogo = s("#ui-stats-logo"), this.killElem = s("#ui-kills"), this.killText = s("#ui-kill-text"), this.killCount = s("#ui-kill-count"), this.killTimeout = null, this.escMenuElem = s("#ui-game-menu"), this.escMenuDisplayed = !1, this.topLeft = s("#ui-top-left"), this.topCenter = s("#ui-top-center-scopes"), this.waitingForPlayers = !0, this.waitingText = s("#ui-waiting-text"), this.spectating = !1, this.prevSpectatorCount = 0, this.spectatorCount = 0, this.spectatorCounterDisplayed = !1, this.spectatorCounterContainer = s("#ui-spec-counter"), this.spectatorCounter = s("#ui-spec-counter-number"), this.spectateMode = s(".ui-spectate-mode"), this.spectatedPlayerText = s("#ui-spectate-text"), this.spectatedPlayerName = "", this.spectatedPlayerId = 0, this.spectateModeStats = s("#ui-spectate-stats"), this.spectateModeStatsData = s("#ui-spectate-stats-data"), this.spectateOptionsWrapper = s("#ui-spectate-options-wrapper"), this.rightCenter = s("#ui-right-center"), this.leaderboardAlive = s("#ui-leaderboard-alive"), this.playersAlive = s(".js-ui-players-alive"), this.leaderboardAliveFaction = s("#ui-leaderboard-alive-faction"), this.playersAliveRed = s(".js-ui-players-alive-red"), this.playersAliveBlue = s(".js-ui-players-alive-blue"), this.playersAliveRedCounter = 0, this.playersAliveBlueCounter = 0, this.playerKills = s(".js-ui-player-kills"), this.kills = 0, this.announcement = s("#ui-announcement"), this.mapContainer = s("#ui-map-container"), this.mapContainerBottom = 52, this.mapInfo = s("#ui-map-info"), this.mapInfoBottom = 218, this.gasState = {}, this.gasIcon = s("#ui-gas-icon"), this.gasTimer = s("#ui-gas-timer"), this.mapMinimizeButton = s("#ui-map-minimize"), this.menuDisplayButton = s("#ui-menu-display"), this.bottomCenterRight = s("#ui-bottom-center-right"), s("#ui-map-wrapper").css("display", "block"), s("#ui-team").css("display", "block"), this.actionSeq = -1, this.displayMapDirty = !1, this.displayMapClear = !1, s(".ui-map-expand").on("mousedown", function(e) {
                e.stopPropagation()
            }), s(".ui-map-expand").on("click", function(e) {
                x.touch ? u.bigmapDisplayed || u.displayMapLarge() : x.uiLayout == x.UiLayout.Lg && u.displayMapLarge(u.bigmapDisplayed)
            }), s("#ui-map-minimize").on("mousedown", function(e) {
                e.stopPropagation()
            }), s("#ui-map-minimize").on("click", function(e) {
                e.stopPropagation(), u.toggleMiniMap()
            }), s("#ui-menu-display").on("click", function(e) {
                e.stopPropagation(), u.toggleEscMenu()
            }), this.bigmap = s("#big-map"), this.bigmapCollision = s("#big-map-collision"), this.moveStyleButton = s("#btn-game-move-style"), this.moveStyleButton.on("touchstart", function() {
                c.toggleMoveStyle()
            }), this.aimStyleButton = s("#btn-game-aim-style"), this.aimStyleButton.on("touchstart", function() {
                c.toggleAimStyle()
            }), this.aimLineButton = s("#btn-game-aim-line"), this.aimLineButton.on("touchstart", function() {
                c.toggleAimLine()
            }), s(document).on("keyup", function(e) {
                var t = e.which || e.keyCode,
                    a = u.inputBinds.getBind(p.Fullscreen);
                a && t == a.code && !u.game.gameOver && v.toggleFullScreen()
            }), this.onTouchScreen = function(e) {
                "cvs" == e.target.id && u.toggleEscMenu(!0)
            }, s(document).on("touchstart", this.onTouchScreen), this.bigmapClose = s("#big-map-close"), this.bigmapClose.on("touchend", function(e) {
                e.stopPropagation(), u.displayMapLarge(!0)
            }), this.bigmapClose.on("mousedown", function(e) {
                e.stopPropagation()
            }), this.bigmapClose.on("click", function(e) {
                e.stopPropagation(), u.displayMapLarge(!0)
            }), this.gameTabs = s(".ui-game-tab"), this.gameTabBtns = s(".btn-game-tab-select"), this.gameKeybindBtns = s(".btn-keybind-desc"), this.currentGameTab = "settings", this.gameTabBtns.on("click", function(e) {
                u.setCurrentGameTab(s(e.target).data("tab"))
            }), this.setCurrentGameTab(this.currentGameTab), this.fullScreenButton = s("#btn-game-fullscreen"), this.fullScreenButton.on("mousedown", function(e) {
                e.stopPropagation()
            }), this.fullScreenButton.on("click", function() {
                v.toggleFullScreen(), u.toggleEscMenu()
            });
            var y = "ios" == x.os ? "none" : "block";
            (x.webview || x.touch) && (y = "none"), s("#btn-game-fullscreen").css("display", y), this.resumeButton = s("#btn-game-resume"), this.resumeButton.on("mousedown", function(e) {
                e.stopPropagation()
            }), this.resumeButton.on("click", function() {
                u.toggleEscMenu()
            }), x.touch && this.resumeButton.css("display", "none"), s("#btn-spectate-quit").on("click", function() {
                u.quitGame()
            }), s("#btn-game-quit").on("mousedown", function(e) {
                e.stopPropagation()
            }), s("#btn-game-quit").on("click", function() {
                u.quitGame()
            }), this.specStatsButton = s("#btn-spectate-view-stats"), this.specStatsButton.on("click", function() {
                u.toggleLocalStats()
            }), this.specBegin = !1, this.specNext = !1, this.specPrev = !1, this.specNextButton = s("#btn-spectate-next-player"), this.specNextButton.on("click", function() {
                u.specNext = !0
            }), this.specPrevButton = s("#btn-spectate-prev-player"), this.specPrevButton.on("click", function() {
                u.specPrev = !0
            }), this.interactionElems = s("#ui-interaction-press, #ui-interaction"), this.interactionTouched = !1, this.interactionElems.css("pointer-events", "auto"), this.interactionElems.on("touchstart", function(e) {
                e.stopPropagation(), u.interactionTouched = !0
            }), this.reloadElems = s("#ui-current-clip, #ui-remaining-ammo, #ui-reload-button-container"), this.reloadTouched = !1, this.reloadElems.css("pointer-events", "auto"), this.reloadElems.on("touchstart", function(e) {
                e.stopPropagation(), u.reloadTouched = !0
            }), this.flairElems = s(".ui-health-flair"), this.flairId = 0, this.healthRed = new n(255, 0, 0), this.healthDarkpink = new n(255, 45, 45), this.healthLightpink = new n(255, 112, 112), this.healthWhite = new n(255, 255, 255), this.healthGrey = new n(179, 179, 179), this.minimapDisplayed = !0, this.visibilityMode = 0, this.hudVisible = !0, this.gasRenderer = new _(o, 0), this.gasSafeZoneRenderer = new S, this.sentAdStatus = !1, this.frame = 0;
            var w = this;
            this.weapsDirty = !1, this.weapSwitches = s("#ui-weapon-id-1, #ui-weapon-id-2"), this.weapNoSwitches = s("#ui-weapon-id-3, #ui-weapon-id-4"), this.weapDraggedId = 0, this.swapWeapSlots = !1, this.weapDraggedDiv = null, this.weapDragging = !1, this.weapDropped = !1, this.resetWeapSlotStyling = function() {
                w.weapDraggedDiv && (w.weapSwitches.css({
                    left: "",
                    top: ""
                }), s("#ui-game").css({
                    "pointer-events": ""
                })), w.weapDraggedDiv = null, w.weapDragging = !1, w.weapDropped = !1, w.weapSwitches.hasClass("ui-weapon-dragged") && w.weapSwitches.removeClass("ui-weapon-dragged"), w.weapNoSwitches.hasClass("ui-outline-hover") || w.weapNoSwitches.addClass("ui-outline-hover")
            }, x.touch || (this.weapSwitches.on("mousedown", function(e) {
                0 == e.button && (w.weapDraggedDiv = s(this), w.weapDraggedId = s(this).data("slot"))
            }), s("#ui-game").on("mousemove", function(e) {
                w.weapDraggedDiv && !w.weapDropped && (w.weapDragging ? (w.weapDraggedDiv.css({
                    left: e.pageX - 80,
                    top: e.pageY - 30
                }), w.weapDraggedDiv.addClass("ui-weapon-dragged")) : (s("#ui-game").css({
                    "pointer-events": "initial"
                }), w.weapNoSwitches.removeClass("ui-outline-hover"), w.weapDragging = !0))
            }), s("#ui-game, #ui-weapon-id-1, #ui-weapon-id-2").on("mouseup", function(e) {
                0 == e.button && null != w.weapDraggedDiv && (w.weapSwitches.each(function() {
                    var e = s(this).data("slot");
                    s(this).is(":hover") && w.weapDraggedId != e && (w.swapWeapSlots = !0, w.weapDropped = !0)
                }), w.swapWeapSlots || w.resetWeapSlotStyling())
            })), this.mapSpriteBarn = new z.MapSpriteBarn, this.$ = new k.ee(this.mapSpriteBarn), this.playerMapSprites = [], this.playerPingSprites = {}, this.container = new l.Container, this.container.mask = new l.Graphics, this.display = {
                gas: this.gasRenderer.display,
                gasSafeZone: this.gasSafeZoneRenderer.display,
                airstrikeZones: i.airstrikeZoneContainer,
                mapSprites: this.mapSpriteBarn.container,
                teammates: new l.Container,
                player: new l.Container,
                border: new l.Graphics
            }, this.mapSprite = new l.Sprite(l.Texture.EMPTY), this.mapSprite.anchor = new l.Point(.5, .5), this.container.addChild(this.mapSprite), this.container.addChild(this.display.gas), this.container.addChild(this.display.gasSafeZone), this.container.addChild(this.display.airstrikeZones), this.container.addChild(this.display.mapSprites), this.container.addChild(this.display.teammates), this.container.addChild(this.display.player), this.container.addChild(this.display.border), this.bigmapDisplayed = !1, this.screenScaleFactor = 1;
            var f = this.getMinimapMargin(),
                b = this.getMinimapSize();
            this.minimapPos = g.create(f + b / 2, e.te.screenHeight - b / 2 - f), this.dead = !1, this.audioManager = t, this.muteButton = s("#ui-mute-ingame"), this.muteButtonImage = this.muteButton.find("img"), this.muteOffImg = "audio-off.img", this.muteOnImg = "audio-on.img";
            var T = this.audioManager.mute;
            this.muteButtonImage.attr("src", T ? this.muteOffImg : this.muteOnImg), this.muteButton.on("mousedown", function(e) {
                e.stopPropagation()
            }), this.muteButton.on("click", function(e) {
                var t = u.audioManager.muteToggle();
                u.muteButtonImage.attr("src", t ? u.muteOffImg : u.muteOnImg), t = null
            }), this.displayingStats = !1, this.teamMemberHealthBarWidth = parseInt(s(".ui-team-member-health").find(".ui-bar-inner").css("width")), this.teamMemberHeight = 48, this.groupPlayerCount = 0, this.teamSelectors = [];
            for (var I = 0; I < 4; I++) {
                var P = this.topLeft,
                    C = I;
                this.teamSelectors.push({
                    teamNameHtml: "",
                    groupId: s(P).find("[data-id=" + C + "]"),
                    groupIdDisplayed: !1,
                    teamName: s(P).find("[data-id=" + C + "]").find(".ui-team-member-name"),
                    teamIcon: s(P).find("[data-id=" + C + "]").find(".ui-team-member-icon"),
                    teamStatus: s(P).find("[data-id=" + C + "]").find(".ui-team-member-status"),
                    teamHealthInner: s(P).find("[data-id=" + C + "]").find(".ui-health-actual"),
                    teamColor: s(P).find("[data-id=" + C + "]").find(".ui-team-member-color"),
                    playerId: 0,
                    prevHealth: 0,
                    prevStatus: {
                        disconnected: !1,
                        dead: !1,
                        downed: !1,
                        factionLeader: !1
                    },
                    indicators: {
                        main: {
                            elem: s("#ui-team-indicators").find(".ui-indicator-main[data-id=" + C + "]"),
                            displayed: !1
                        }
                    }
                })
            }
            this.displayOldMapSprites = !1, this.o()
        }

        function o(e, t, a, i) {
            var r = e,
                o = t,
                n = r + (o - r) / a * i;
            return Math.floor(n)
        }

        function n(e, t, a) {
            var i, r, o;
            ! function(e, t, a) {
                i = e, r = t, o = a
            }(e, t, a), this.getColors = function() {
                return {
                    r: i,
                    g: r,
                    b: o
                }
            }
        }
        var s = a("8ee62bea"),
            l = a("8b1dfb45"),
            c = a("34e32c48"),
            m = (a("6b42806d"), a("989ad62a")),
            p = m.Input,
            d = m.Action,
            h = m.GasMode,
            u = a("300e2704"),
            g = a("c2a798c8"),
            y = a("10899aea"),
            w = (a("1901e2d9"), a("e3e76f15")),
            x = a("ce29f17f"),
            f = a("f398b7c7"),
            b = a("a7f094a3"),
            _ = b.GasRenderer,
            S = b.GasSafeZoneRenderer,
            v = a("26be8056"),
            k = (a("d306eab6"), a("966d985b")),
            z = a("edfa1d55"),
            M = (a("119e8c4c"), a("feb8fc30")),
            T = (a("6e43d1d7"), a("d017e1e2"));
        r.prototype = {
            n: function() {
                this.gasRenderer.free(), this.clearUI(), s(document).off("keyup"), s(".ui-map-expand").off("mousedown"), s(".ui-map-expand").off("click"), s("#ui-map-minimize").off("mousedown"), s("#ui-map-minimize").off("click"), s("#ui-menu-display").off("click"), this.muteButton.off("mousedown"), this.muteButton.off("click"), this.fullScreenButton.off("mousedown"), this.fullScreenButton.off("click"), this.resumeButton.off("mousedown"), this.resumeButton.off("click"), s("#btn-spectate-quit").off("click"), s("#btn-game-quit").off("mousedown"), s("#btn-game-quit").off("click"), this.specStatsButton.off("click"), this.specPrevButton.off("click"), this.specNextButton.off("click"), this.bigmapClose.off("mousedown"), this.bigmapClose.off("click"), this.weapSwitches.off("mousedown"), s("#ui-game").off("mousemove"), s("#ui-game").off("mouseup"), s("#ui-weapon-id-1").off("mouseup"), s("#ui-weapon-id-2").off("mouseup"), this.moveStyleButton.off("touchstart"), this.aimStyleButton.off("touchstart"), this.aimLineButton.off("touchstart"), this.interactionElems.off("touchstart"), this.reloadElems.off("touchstart"), this.bigmapClose.off("touchend"), s(document).off("touchstart", this.onTouchScreen), s(".ui-team-member-health").find(".ui-bar-inner").css("width", this.teamMemberHealthBarWidth), s("#ui-center").off("mouseenter mouseleave"), this.inputBinds.menuHovered = !1, this.hudVisible || this.cycleHud(), this.pieTimer.destroy(), this.clearStatsElems(), this.o()
            },
            o: function() {
                s(".js-ui-map-hidden").css("display", "block"), s("#ui-map-counter-default").css("display", "inline-block"), s("#ui-map-counter-faction").css("display", "none"), this.flairElems.css("display", "none"), this.resetTeamSelectorColors(), this.clearStatsElems(), this.setSpectating(!1), this.updateSpectatorCountDisplay(!0), this.resetWeapSlotStyling(), this.dead = !1
            },
            resetTeamSelectorColors: function() {
                for (var e = 0; e < this.teamSelectors.length; e++) this.teamSelectors[e].teamColor.removeAttr("style")
            },
            quitGame: function() {
                var e = this;
                this.game.gameOver = !0;
                var t = function() {
                    e.refeshMainPageAds(), e.game.onQuit()
                };
                this.adManager.onGameComplete(t)
            },
            c: function(e, t, a, i, r, o, n, s, l) {
                var p = t.ae,
                    u = t.ie,
                    b = t;
                this.weapsDirty && this.resetWeapSlotStyling(), this.weapsDirty = !1, this.$.re(e);
                var _ = y.max(Math.floor(i.duration * (1 - i.circleT)), 0),
                    S = {
                        mode: i.mode,
                        time: _
                    };
                if (this.gasState.mode != S.mode || this.gasState.time != S.time) {
                    this.gasState = S;
                    var k = this.gasState.mode == h.Moving;
                    this.mapInfo.removeClass("icon-pulse"), this.gasIcon.removeClass("gas-icon"), this.gasIcon.removeClass("danger-icon"), k && this.mapInfo.addClass("icon-pulse"), this.gasIcon.addClass(k ? "danger-icon" : "gas-icon");
                    var z = Math.floor(this.gasState.time / 60),
                        M = this.gasState.time % 60,
                        T = ("0" + M).slice(-2);
                    this.gasTimer.html(z + ":" + T)
                }
                if (this.spectatorCount = u.spectatorCount, this.updateSpectatorCountDisplay(!1), p.dead && !this.dead && (this.dead = !0, this.pieTimer.stop()), (b.downed || this.dead) && this.resetWeapSlotStyling(), this.actionSeq != t.action.seq && (this.actionSeq = t.action.seq, this.pieTimer.stop(), t.action.type != d.None && !this.displayingStats)) {
                    var I = "",
                        P = "",
                        C = "";
                    switch (t.action.type) {
                        case d.Reload:
                        case d.ReloadAlt:
                            w[t.action.item] && (P = this.localization.translate("game-reloading"));
                            break;
                        case d.UseItem:
                            w[t.action.item] && (P = this.localization.translate("game-using"), C = this.localization.translate("game-" + t.action.item));
                            break;
                        case d.Revive:
                            var A = o.oe(t.action.targetId).name;
                            P = this.localization.translate("game-reviving"), C = b.downed ? "" : A
                    }
                    "" == P && "" == C || ("svo" == this.localization.translate("word-order") ? (I += P || "", I += C ? " " + C : "") : "sov" == this.localization.translate("word-order") && (I += C ? C + " " : "", I += P ? " " + P : ""), this.pieTimer.start(I, t.action.time, t.action.duration))
                }
                this.bigmapDisplayed || (this.mapSprite.x = this.minimapPos.x + this.mapSprite.width / 2 - t.pos.x / a.width * this.mapSprite.width, this.mapSprite.y = this.minimapPos.y - this.mapSprite.height / 2 + t.pos.y / a.height * this.mapSprite.height);
                var E = g.create(.5 * n.screenWidth / n.z(), .5 * n.screenHeight / n.z()),
                    D = {
                        min: g.sub(n.pos, E),
                        max: g.add(n.pos, E)
                    },
                    O = o.oe(t.__id).groupId,
                    B = o.getGroupInfo(O);
                if (!B) {
                    var R = {
                        playerId: t.__id,
                        groupId: O,
                        spectating: this.spectating,
                        playing: this.game.playingTicker,
                        groupInfo: o.groupInfo
                    };
                    f.logError("badTeamInfo_1: " + JSON.stringify(R))
                }
                for (var L = x.uiLayout == x.UiLayout.Sm, F = B.playerIds.length, j = 0; j < F; j++) {
                    var q = this.teamSelectors[j],
                        N = B.playerIds[j],
                        V = o.oe(N),
                        G = N == b.__id,
                        U = o.ne(N);
                    if (U && s > 1) {
                        q.groupIdDisplayed || (q.groupId.css("display", "block"), q.groupIdDisplayed = !0), this.updateTeam(j, v.htmlEscape(V.name), U.health, {
                            disconnected: U.disconnected,
                            dead: U.dead,
                            downed: U.downed,
                            factionLeader: U.factionLeader
                        }, V.playerId, V.teamId, o);
                        for (var H in q.indicators)
                            if (q.indicators.hasOwnProperty(H)) {
                                var W = q.indicators[H],
                                    K = W.elem,
                                    Z = !0;
                                if ((!G || W.displayAll) && !l) {
                                    var X = U.pos,
                                        Y = g.normalizeSafe(g.sub(X, n.pos), g.create(1, 0)),
                                        J = c.intersectRayAabb(n.pos, Y, D.min, D.max),
                                        Q = Math.atan2(Y.y, -Y.x) + .5 * Math.PI,
                                        $ = n.pointToScreen(J),
                                        ee = c.testCircleAabb(X, m.player.radius, D.min, D.max);
                                    if (!U.dead && !ee) {
                                        var te = 32,
                                            ae = "translate(-50%, -50%) rotate(" + Q + "rad)";
                                        L && (te = 16, ae += " scale(0.5)"), Z = !1;
                                        var ie = "iphonex" == x.model && x.webview ? 20 : 0;
                                        K.css({
                                            left: y.clamp($.x, te, n.screenWidth - te),
                                            top: y.clamp($.y, te, n.screenHeight - te - ie),
                                            transform: ae
                                        }), W.displayed || (K.css("display", "block"), W.displayed = !0)
                                    }
                                }
                                Z && W.displayed && (K.css("display", "none"), W.displayed = !1)
                            }
                    }
                }
                for (var re = F; re < this.teamSelectors.length; re++) {
                    var oe = this.teamSelectors[re];
                    for (var ne in oe.indicators)
                        if (oe.indicators.hasOwnProperty(ne)) {
                            var se = oe.indicators[ne];
                            se.displayed && (se.elem.css("display", "none"), se.displayed = !1)
                        }
                    oe.groupIdDisplayed && (oe.groupId.css("display", "none"), oe.groupIdDisplayed = !1)
                }
                if (a.factionMode) {
                    var le = o.oe(b.__id);
                    if (this.flairId != le.teamId) {
                        this.flairId = le.teamId;
                        var ce = 1 == this.flairId ? "red" : "blue";
                        this.flairElems.css({
                            display: "block",
                            "background-image": "url(../img/gui/player-patch-" + ce + ".svg)"
                        })
                    }
                }
                s > 1 && this.groupPlayerCount != F && x.uiLayout == x.UiLayout.Lg && (this.groupPlayerCount = F, this.spectateOptionsWrapper.css({
                    top: this.groupPlayerCount * this.teamMemberHeight + 12
                })), this.updatePlayerMapSprites(e, t, o, a), this.mapSpriteBarn.update(e, this, a), this.pieTimer.update(e, n), this.trySendAdStatus()
            },
            updatePlayerMapSprites: function(e, t, a, i) {
                for (var r = this, o = a.oe(t.__id), n = (a.getGroupInfo(o.groupId), a.getTeamInfo(o.teamId), 0), s = function(e, t, a, i, o, s, c) {
                        if (n >= r.playerMapSprites.length) {
                            var m = r.mapSpriteBarn.addSprite();
                            r.playerMapSprites.push(m)
                        }
                        var p = r.playerMapSprites[n++];
                        p.pos = g.copy(e), p.scale = t, p.alpha = a, p.visible = i, p.zOrder = o, p.sprite.texture = l.Texture.fromImage(s), p.sprite.tint = c
                    }, c = Object.keys(a.playerStatus), m = 0; m < c.length; m++) {
                    var p = a.playerStatus[c[m]],
                        d = p.playerId,
                        h = a.oe(d),
                        u = h.groupId == o.groupId,
                        y = 65535 + 2 * d;
                    d == o.playerId && (y += 131070), p.factionLeader && (y += 65535);
                    var w = "player-map-inner.img";
                    p.dead ? w = p.factionLeader ? "skull-leader.img" : "skull-outlined.img" : p.factionLeader ? w = "player-star.img" : p.downed && (w = u ? "player-map-inner.img" : "player-map-downed.img");
                    var f = u ? a.getGroupColor(d) : a.getTeamColor(h.teamId);
                    p.factionLeader && (f = a.getTeamColor(h.teamId));
                    var b = x.uiLayout == x.UiLayout.Sm ? .15 : .2,
                        _ = b;
                    if (_ = u ? p.dead ? 1.5 * b : p.factionLeader ? 1.25 * b : 1 * b : p.dead || p.downed || p.factionLeader ? 1.25 * b : .75 * b, s(p.pos, _, p.minimapAlpha, p.minimapVisible, y, w, f), u) {
                        var S = x.uiLayout == x.UiLayout.Sm ? .25 : .3,
                            v = p.minimapVisible && !p.factionLeader;
                        s(p.pos, S, p.minimapAlpha, v, y - 1, "player-map-outer.img", 16777215)
                    }
                }
                for (var k = this.playerMapSprites.length - 1; k >= n; k--) this.playerMapSprites[k].visible = !1
            },
            getMinimapMargin: function() {
                return x.uiLayout == x.UiLayout.Sm ? 4 : 16
            },
            getMinimapSize: function() {
                return x.uiLayout == x.UiLayout.Sm ? 192 : 256
            },
            getMinimapBorderWidth: function() {
                return x.uiLayout == x.UiLayout.Sm ? 1 : 4
            },
            createPing: function(e, t, a, i, r, o) {
                var n = this,
                    s = T[e];
                if (s) {
                    var c = function(e, a) {
                            var i = n.mapSpriteBarn.addSprite();
                            return i.pos = g.copy(t), i.scale = e, i.lifetime = s.mapLife, i.pulse = !1, i.zOrder = 100, i.sprite.texture = l.Texture.fromImage(s.mapTexture), i.sprite.tint = a, i
                        },
                        m = function(e) {
                            var a = n.mapSpriteBarn.addSprite();
                            return a.pos = g.copy(t), a.scale = 0, a.lifetime = s.pingLife, a.pulse = !0, a.zOrder = 99, a.sprite.texture = l.Texture.fromImage("ping-map-pulse.img"), a.sprite.tint = e, a
                        };
                    if (s.mapEvent) c(1.5 * (x.uiLayout == x.UiLayout.Sm ? .15 : .2), s.tint).release(), m(s.tint).release();
                    else {
                        var p = 16777215,
                            d = r.oe(i),
                            h = r.oe(a),
                            u = r.ne(a);
                        d && h && u && (p = u.factionLeader ? 65280 : d.groupId == h.groupId ? r.getGroupColor(a) : r.getTeamColor(h.teamId)), this.playerPingSprites[a] || (this.playerPingSprites[a] = []);
                        for (var y = this.playerPingSprites[a], w = 0; w < y.length; w++) y[w].free();
                        var f = x.uiLayout == x.UiLayout.Sm ? .15 : .2,
                            b = c(f, p),
                            _ = m(p);
                        y.push(b), y.push(_)
                    }
                }
            },
            updateMapSprite: function(e, t, a, i) {
                e.displayed && (void 0 != e.life && (e.life -= i, e.displayed = e.life > 0, e.maxLife - e.life < .1 ? t.alpha = (e.maxLife - e.life) / .1 : e.life < .5 ? t.alpha = y.max(e.life / .5, 0) : t.alpha = 1), e.pulse && e.displayed && (e.scale = e.scale + i / 2.5, t.scale.set(e.scale, e.scale)), t.visible = a && t.alpha > 0)
            },
            se: function(e) {
                this.$.le(e)
            },
            getMapPosFromWorldPos: function(e, t) {
                var a = this.mapSprite.x - this.mapSprite.width / 2 + e.x / t.width * this.mapSprite.width,
                    i = this.mapSprite.y + this.mapSprite.height / 2 - e.y / t.height * this.mapSprite.height;
                return g.create(a, i)
            },
            getWorldPosFromMapPos: function(e, t, a) {
                var i = !1;
                if (x.screenWidth, this.bigmapDisplayed) {
                    var r = (a.screenWidth - this.mapSprite.width) / 2,
                        o = (a.screenHeight - this.mapSprite.height) / 2;
                    x.uiLayout != x.UiLayout.Sm || x.isLandscape || (o = 0), i = e.x > r && e.x < a.screenWidth - r && e.y > o && e.y < a.screenHeight - o
                } else if (this.minimapDisplayed) {
                    var n = this.getMinimapSize(),
                        s = this.getMinimapMargin(),
                        l = n * this.screenScaleFactor,
                        c = .5 * (l + s);
                    i = e.x > this.minimapPos.x - c && e.x < this.minimapPos.x + c && e.y > this.minimapPos.y - c && e.y < this.minimapPos.y + c
                }
                if (i) {
                    var m = g.create(this.mapSprite.x - this.mapSprite.width / 2, this.mapSprite.y + this.mapSprite.height / 2),
                        p = (e.x - m.x) / this.mapSprite.width * t.width,
                        d = (m.y - e.y) / this.mapSprite.height * t.height;
                    return g.create(p, d)
                }
                return !1
            },
            hideAll: function() {
                this.gameElem.css("display", "none")
            },
            showAll: function() {
                this.gameElem.css("display", "block")
            },
            removeAds: function() {
                if (x.webview && x.version >= "1.0.8") this.adManager.hideBannerAd();
                else if (window.aiptag) {
                    var e = [];
                    e = x.webview ? ["surviv-io_300x250_webview", "surviv-io_728x90_webview", "surviv-io_300x250_webview_2"] : x.mobile ? ["surviv-io_300x250", "surviv-io_728x90", "surviv-io_300x250_mobile_2"] : ["surviv-io_300x250", "surviv-io_728x90", "surviv-io_300x250_2"];
                    for (var t = 0; t < e.length; t++) ! function(t) {
                        var a = e[t];
                        window.aiptag.cmd.display.push(function() {
                            aipDisplayTag.destroy(a)
                        })
                    }(t)
                }
            },
            refeshMainPageAds: function() {
                if (x.webview && x.version >= "1.0.8") this.adManager.showBannerAd();
                else if (window.aiptag) {
                    var e = [];
                    x.webview ? (e = ["surviv-io_300x250_webview"], x.tablet && e.push("surviv-io_728x90_webview")) : x.mobile ? (e = ["surviv-io_300x250"], x.tablet && e.push("surviv-io_728x90")) : e = ["surviv-io_300x250", "surviv-io_728x90"];
                    for (var t = 0; t < e.length; t++) ! function(t) {
                        var a = e[t];
                        window.aiptag.cmd.display.push(function() {
                            aipDisplayTag.display(a)
                        })
                    }(t)
                }
            },
            trySendAdStatus: function() {
                if (++this.frame % 180 == 0 && !this.sentAdStatus && (window.aiptagPreroll || window.freestarPreroll || this.game.U)) {
                    this.sentAdStatus = !0;
                    var e = new u.AdStatusMsg;
                    e.blocked = window.adsBlocked, e.prerollLoaded = void 0 !== window.preroll, e.prerollFreestar = !!window.freestarPreroll, e.prerollAIP = !!window.aiptagPreroll, this.game.q(u.Msg.AdStatus, e)
                }
            },
            showKill: function(e, t, a, i, r) {
                var o = this,
                    n = r ? e.name : this.localization.translate("game-you").toUpperCase(),
                    s = e.completeKill ? this.localization.translate("game-killed") : this.localization.translate("game-finally-killed"),
                    l = t.downed && !t.killed;
                l && (s = this.localization.translate("game-knocked-out"));
                var c = t.suicide ? r ? this.localization.translate("game-themselves") : this.localization.translate("game-yourself").toUpperCase() : t.name,
                    p = this.localization.translate("game-" + a);
                i == m.DamageType.Airstrike && (p = this.localization.translate("game-an-air-strike"));
                var d = n + " " + s + " " + c;
                (e.completeKill || l) && p && (d += " " + this.localization.translate("game-with") + " " + p), this.killText.html(d);
                var h = "";
                l || t.suicide || t.teamKill || (h = e.kills.toString() + (1 != e.kills ? " " + this.localization.translate("game-kills") : " " + this.localization.translate("game-kill"))), this.killCount.html(h), this.killTimeout && clearTimeout(this.killTimeout), this.killElem.stop(!0), this.killElem.fadeIn(0), this.killTimeout = setTimeout(function() {
                    o.killElem.fadeOut(1e3)
                }, 6e3), r || l || this.updatePlayerKills(e.kills)
            },
            showDowned: function(e, t, a, i) {
                var r = this,
                    o = i ? t.name : this.localization.translate("game-you").toUpperCase(),
                    n = this.localization.translate("game-" + a),
                    s = e.name;
                e.damageType == m.DamageType.Gas ? s = this.localization.translate("game-the-red-zone") : e.damageType == m.DamageType.Airdrop ? s = this.localization.translate("game-the-air-drop") : e.damageType == m.DamageType.Airstrike && (s = this.localization.translate("game-the-air-strike"));
                var l = this.localization.translate("game-with"),
                    c = s + " knocked " + o + " out";
                n && e.damageType == m.DamageType.Player && (c += " " + l + " " + n), e.damageType == m.DamageType.Airstrike && e.name && (n = this.localization.translate("game-an-air-strike"), c = s + " knocked " + o + " out " + l + " " + n), this.killText.html(c), this.killCount.html(""), this.killTimeout && clearTimeout(this.killTimeout), this.killElem.stop(!0), this.killElem.fadeIn(0), this.killTimeout = setTimeout(function() {
                    r.killElem.fadeOut(1e3)
                }, 6e3)
            },
            clearUI: function() {
                this.pieTimer.stop(), this.curAction = {
                    type: d.None
                }, this.displayMapLarge(!0), this.displayMiniMap(), this.clearStatsElems(), this.killElem.hide(), this.clearTeamUI(), this.toggleEscMenu(!0), this.toggleLocalStats(!0), this.visibilityMode = 0, this.spectatorCount = 0, this.updatePlayerKills(0)
            },
            beginSpectating: function() {
                this.specBegin = !0
            },
            hideStats: function() {
                this.displayingStats = !1, this.statsMain.css("display", "none"), this.statsElem.stop().css({
                    display: "none",
                    opacity: 0
                }), this.statsContents.stop().hide(), x.webview && x.version >= "1.0.8" && this.adManager.hideBannerAd()
            },
            teamModeToString: function(e) {
                var t = {
                        unknown: "game-rank",
                        1: "game-solo-rank",
                        2: "game-duo-rank",
                        4: "game-squad-rank"
                    },
                    a = t[e] || t.unknown;
                return this.localization.translate(a)
            },
            getTitleVictoryText: function(e) {
                return e ? this.spectatedPlayerName + " " + this.localization.translate("game-won-the-game") : this.localization.translate("game-chicken")
            },
            getTitleDefeatText: function(e, t) {
                return t ? this.spectatedPlayerName + " " + this.localization.translate("game-player-died") + "." : e > 1 ? this.localization.translate("game-team-eliminated") : this.localization.translate("game-You") + " " + this.localization.translate("game-you-died") + "."
            },
            getOverviewElems: function(e, t, a, i) {
                if (i) {
                    var r = this.localization.translate("game-red-team"),
                        o = this.localization.translate("game-blue-team");
                    return '<div class="ui-stats-header-right ui-stats-header-red-team"><span class="ui-stats-header-stat">' + r + ' </span><span class="ui-stats-header-value">' + this.playersAliveRedCounter + '</span></div><div class="ui-stats-header-left ui-stats-header-blue-team"><span class="ui-stats-header-stat">' + o + ' </span><span class="ui-stats-header-value">' + this.playersAliveBlueCounter + "</span></div>"
                }
                return 1 == e ? '<div><span class="ui-stats-header-stat">' + this.teamModeToString(e) + ' </span><span class="ui-stats-header-value">#' + t + "</span></div>" : '<div class="ui-stats-header-right"><span class="ui-stats-header-stat">' + this.teamModeToString(e) + ' </span><span class="ui-stats-header-value">#' + t + '</span></div><div class="ui-stats-header-left"><span class="ui-stats-header-stat">' + this.localization.translate("game-team-kills") + ' </span><span class="ui-stats-header-value">' + a + "</span></div>"
            },
            showStats: function(e, t, a, r, o, n, l, c, m, p, d, h) {
                var u = this;
                if (!c || t == n || o) {
                    this.displayingStats = !0, this.pieTimer.stop(), this.toggleEscMenu(!0), this.displayMapLarge(!0), this.clearStatsElems(), this.setSpectating(!1, l), this.removeAds(), this.statsMain.css("display", "block"), this.statsLogo.css("display", "block"), this.statsContentsContainer.css({
                        top: ""
                    }), this.statsInfoBox.css({
                        height: ""
                    });
                    var g = n == r,
                        w = g ? 1750 : 2500;
                    this.setBannerAd(w, !0);
                    for (var f = n == r || c && r == t, b = c && n != t, _ = f ? this.getTitleVictoryText(b) : this.getTitleDefeatText(l, b), S = 0, k = 0; k < e.length; k++) S += e[k].kills;
                    var z = this.getOverviewElems(l, a, S, h),
                        M = s("<div/>").append(s("<div/>", {
                            class: "ui-stats-header-title",
                            html: _
                        })).append(s("<div/>", {
                            class: "ui-stats-header-overview",
                            html: z
                        }));
                    this.statsHeader.html(M);
                    var T = function(e, t) {
                            return s("<div/>", {
                                class: "ui-stats-info"
                            }).append(s("<div/>", {
                                html: e
                            })).append(s("<div/>", {
                                html: t
                            }))
                        },
                        I = x.uiLayout != x.UiLayout.Sm || x.tablet ? 250 : 125,
                        P = 0;
                    P -= (e.length - 1) * I / 2, P -= 10 * (e.length - 1);
                    for (var C = 0; C < e.length; C++) {
                        var A = e[C],
                            E = m.oe(A.playerId),
                            D = i(A.timeAlive),
                            O = "ui-stats-info-player";
                        O += A.dead ? " ui-stats-info-status" : "";
                        var B = function(e) {
                            return s("<div/>", {
                                class: e
                            })
                        }(O);
                        if (B.css("left", P), B.append(s("<div/>", {
                                class: "ui-stats-info-player-name",
                                html: v.htmlEscape(E.name)
                            })), B.append(T(this.localization.translate("game-kills"), "" + A.kills)).append(T(this.localization.translate("game-damage-dealt"), A.damageDealt)).append(T(this.localization.translate("game-damage-taken"), A.damageTaken)).append(T(this.localization.translate("game-survived"), D)), h && o) switch (C) {
                            case 1:
                                B.append(s("<div/>", {
                                    class: "ui-stats-info-player-badge ui-stats-info-player-red-leader"
                                }));
                                break;
                            case 2:
                                B.append(s("<div/>", {
                                    class: "ui-stats-info-player-badge ui-stats-info-player-blue-leader"
                                }));
                                break;
                            case 3:
                                var R = 1 == E.teamId ? "ui-stats-info-player-red-ribbon" : "ui-stats-info-player-blue-ribbon";
                                B.append(s("<div/>", {
                                    class: "ui-stats-info-player-badge " + R
                                }))
                        }
                        this.statsInfoBox.append(B), P += 10
                    }
                    var L = s("<a/>", {
                        class: "ui-stats-restart btn-green btn-darken menu-option",
                        html: this.localization.translate("game-play-new-game")
                    });
                    if (L.on("click", function() {
                            u.quitGame()
                        }), this.statsOptions.append(L), o || this.waitingForPlayers) L.css({
                        width: x.uiLayout != x.UiLayout.Sm || x.tablet ? 225 : 130
                    });
                    else {
                        L.css({
                            left: x.uiLayout != x.UiLayout.Sm || x.tablet ? -72 : -46
                        });
                        var F = s("<a/>", {
                            class: "btn-green btn-darken menu-option ui-stats-spectate",
                            html: this.localization.translate("game-spectate")
                        });
                        F.on("click", this.beginSpectating.bind(this)), this.statsOptions.append(F)
                    }
                    var j = 0,
                        q = 250 / y.max(1, e.length),
                        N = 750 / y.max(1, e.length);
                    this.statsInfoBox.children().each(function(e, t) {
                        var a = s(t);
                        a.css("opacity", 0), a.delay(w + N + (j + e) * q).animate({
                            opacity: 1
                        }, 500, function() {
                            a.children().each(function(e, t) {
                                s(t).delay(e * q).animate({
                                    opacity: 1
                                }, 500)
                            })
                        }), a.children().each(function(e, t) {
                            s(t).css("opacity", 0), j++
                        }), j++
                    }), this.statsOptions.children().each(function(e, t) {
                        var a = s(t);
                        a.hide(), a.delay(w + N + (j + e) * q).fadeIn(500), j++
                    }), this.statsElem.stop(), this.statsElem.css("display", "block"), this.statsElem.delay(w).animate({
                        opacity: 1
                    }, 1e3), this.statsContents.stop(), this.statsContents.css("display", "block"), this.statsContents.delay(w).animate({
                        opacity: 1
                    }, 1e3)
                }
            },
            clearStatsElems: function() {
                this.statsHeader.empty(), this.statsInfoBox.empty(), this.statsOptions.empty(), this.statsAds.css("display", "none"), this.statsContents.stop(), this.statsContents.css({
                    display: "none",
                    opacity: 0
                }), this.statsElem.stop(), this.statsElem.css({
                    display: "none",
                    opacity: 0
                }), this.statsMain.css("display", "none")
            },
            showTeamAd: function() {
                var e = this;
                this.toggleEscMenu(!0), this.displayMapLarge(!0), this.clearStatsElems(), this.statsMain.css("display", "block"), this.statsLogo.css("display", "none"), this.pieTimer.stop(), this.displayingStats = !0, this.statsHeader.html(function() {
                    var t = e.localization.translate("game-You");
                    t += " ", t += e.localization.translate("game-you-died"), t += ".";
                    var a = '<div><span class="ui-stats-header-stat">' + e.localization.translate("game-kills") + " </span>";
                    return a += '<span class="ui-stats-header-value">' + e.kills + "</span></div>", s("<div/>", {
                        class: ""
                    }).append(s("<div/>", {
                        class: "ui-stats-header-title",
                        html: t
                    })).append(s("<div/>", {
                        class: "ui-stats-header-overview",
                        html: a
                    }))
                }()), this.statsContentsContainer.css({
                    top: "10%"
                }), this.statsInfoBox.css({
                    height: 0
                });
                var t = s("<a/>", {
                    class: "ui-stats-restart btn-green btn-darken menu-option",
                    html: this.localization.translate("game-play-new-game")
                });
                t.on("click", function() {
                    e.quitGame()
                }), this.statsOptions.append(t), t.css({
                    left: x.uiLayout != x.UiLayout.Sm || x.tablet ? -72 : -46
                });
                var a = s("<a/>", {
                    class: "btn-green btn-darken menu-option ui-stats-spectate",
                    html: this.localization.translate("game-spectate")
                });
                a.on("click", this.beginSpectating.bind(this)), this.statsOptions.append(a), this.setBannerAd(2500, !1);
                var i = 0;
                this.statsOptions.children().each(function(e, t) {
                    var a = s(t);
                    a.hide(), a.delay(4100 + 300 * (i + e)).fadeIn(750), i++
                }), this.statsElem.stop(), this.statsElem.css("display", "block"), this.statsElem.delay(2500).animate({
                    opacity: 1
                }, 1e3), this.statsContents.stop(), this.statsContents.css("display", "block"), this.statsContents.delay(2500).animate({
                    opacity: 1
                }, 1e3)
            },
            setBannerAd: function(e, t) {
                var a = this,
                    i = function() {
                        a.killElem.stop(), a.killElem.hide()
                    },
                    r = Math.max(e - 150, 0);
                x.webview && x.version >= "1.0.8" ? setTimeout(function() {
                    i(), a.adManager.showBannerAd()
                }, r) : window.adsBlocked ? (r += 500, setTimeout(function() {
                    i(), s(x.mobile ? "#ui-stats-ad-container-mobile" : "#ui-stats-ad-container-desktop").css("display", "inline-block");
                    var e = "";
                    if (e = s(x.webview ? "#surviv-io_300x250_webview_2" : x.mobile ? "#surviv-io_300x250_mobile_2" : "#surviv-io_300x250_2")) {
                        e.html("");
                        var t = s(".ui-stats-adblock").clone();
                        t.css("display", "block"), e.html(t)
                    }
                }, r)) : window.aiptag && setTimeout(function() {
                    i(), s(x.mobile ? "#ui-stats-ad-container-mobile" : "#ui-stats-ad-container-desktop").css("display", "inline-block");
                    var e = "";
                    (e = x.webview ? "surviv-io_300x250_webview_2" : x.mobile ? "surviv-io_300x250_mobile_2" : "surviv-io_300x250_2") && window.aiptag.cmd.display.push(function() {
                        aipDisplayTag.display(e)
                    })
                }, r)
            },
            setSpectateTarget: function(e, t, a, i, r) {
                if (e != this.spectatedPlayerId) {
                    this.setSpectating(!0, a);
                    var o = r.oe(e),
                        n = r.oe(t),
                        s = o.name;
                    i && o.groupId != n.groupId && (s = o.anonName), this.spectatedPlayerId = e, this.spectatedPlayerName = v.htmlEscape(s), this.spectatedPlayerText.find("#spectate-player").html(this.spectatedPlayerName), this.actionSeq = -1, this.pieTimer.stop()
                }
            },
            setSpectating: function(e, t) {
                if (this.spectating != e)
                    if (this.spectating = e, this.spectating) {
                        this.spectateMode.css("display", "block"), s(".ui-zoom").removeClass("ui-zoom-hover");
                        var a = 1 == t;
                        this.specPrevButton.css("display", a ? "none" : "block"), this.specNextButton.css("display", a ? "none" : "block"), this.hideStats()
                    } else this.spectateMode.css("display", "none"), s(".ui-zoom").addClass("ui-zoom-hover")
            },
            setLocalStats: function(e) {
                var t = {
                    kills: this.localization.translate("game-kills"),
                    damageDealt: this.localization.translate("game-damage-dealt"),
                    damageTaken: this.localization.translate("game-damage-taken"),
                    timeAlive: this.localization.translate("game-survived")
                };
                this.spectateModeStatsData.empty();
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var r = t[a],
                            o = "timeAlive" == a ? i(e[a]) : e[a],
                            n = '<tr><td class="ui-spectate-stats-category">' + r + '</td><td class="ui-spectate-stats-value">' + o + "</td></tr>";
                        this.spectateModeStatsData.append(n)
                    }
            },
            toggleLocalStats: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = "none" == this.spectateModeStats.css("display") && !e;
                this.spectateModeStats.css("display", t ? "inline-block" : "none"), this.specStatsButton.html(t ? this.localization.translate("game-hide-match-stats") : this.localization.translate("game-view-match-stats"))
            },
            updatePlayersAlive: function(e) {
                this.playersAlive.html(e), this.leaderboardAlive.css("display", "block"), this.leaderboardAliveFaction.css("display", "none")
            },
            updatePlayersAliveRed: function(e) {
                this.playersAliveRed.html(e), this.playersAliveRedCounter = e, this.leaderboardAlive.css("display", "none"), this.leaderboardAliveFaction.css("display", "block"), s("#ui-map-counter-default").css("display", "none"), s("#ui-map-counter-faction").css("display", "inline-block")
            },
            updatePlayersAliveBlue: function(e) {
                this.playersAliveBlue.html(e), this.playersAliveBlueCounter = e, this.leaderboardAlive.css("display", "none"), this.leaderboardAliveFaction.css("display", "block"), s("#ui-map-counter-default").css("display", "none"), s("#ui-map-counter-faction").css("display", "inline-block")
            },
            updatePlayerKills: function(e) {
                this.playerKills.html(e), this.kills = e
            },
            displayMapLarge: function(e) {
                this.bigmapDisplayed = !e && !this.bigmapDisplayed, this.bigmapDisplayed ? this.container.alpha = 1 : this.container.alpha = this.minimapDisplayed ? 1 : 0;
                var t = x.uiLayout == x.UiLayout.Sm ? ".js-ui-mobile-map-hidden" : "js-ui-desktop-map-hidden";
                t += ", .js-ui-map-hidden", s(2 == this.visibilityMode ? ".js-ui-hud-show" : t).css("display", this.bigmapDisplayed ? "none" : "block"), s(".js-ui-map-show").css("display", this.bigmapDisplayed ? "block" : "none"), this.updateSpectatorCountDisplay(!0), this.redraw(this.game.te)
            },
            updateSpectatorCountDisplay: function(e) {
                var t = !this.bigmapDisplayed && this.spectatorCount > 0;
                e = e || this.spectatorCount > 0 && !this.spectatorCounterDisplayed || 0 == this.spectatorCount && this.spectatorCounterDisplayed, this.spectatorCount != this.prevSpectatorCount && (this.spectatorCounter.html(this.spectatorCount), this.prevSpectatorCount = this.spectatorCount), e && (this.spectatorCounterContainer.css("display", t ? "block" : "none"), this.spectatorCounterDisplayed = t)
            },
            toggleMiniMap: function() {
                this.minimapDisplayed ? this.hideMiniMap() : this.displayMiniMap()
            },
            cycleVisibilityMode: function() {
                if (!this.bigmapDisplayed) switch (this.visibilityMode) {
                    case 0:
                        this.hideMiniMap(), this.visibilityMode = 1;
                        break;
                    case 1:
                        this.displayMiniMap(), this.visibilityMode = 0
                }
            },
            cycleHud: function() {
                "none" == this.gameElem.css("display") ? (this.gameElem.css("display", "block"), this.displayMiniMap(), this.hudVisible = !0) : (this.gameElem.css("display", "none"), this.hideMiniMap(), this.hudVisible = !1)
            },
            hideMiniMap: function() {
                this.bigmapDisplayed || (this.minimapDisplayed = !1, this.container.alpha = 0, this.mapInfo.css("bottom", "auto"), this.spectatorCounterContainer.css({
                    bottom: 6,
                    left: 98
                }))
            },
            displayMiniMap: function() {
                if (!this.bigmapDisplayed) {
                    var e = x.uiLayout == x.UiLayout.Sm;
                    this.minimapDisplayed = !0, this.container.alpha = 1, this.mapInfo.css("bottom", this.mapInfoBottom), this.spectatorCounterContainer.css({
                        bottom: e ? 0 : 218,
                        left: e ? 0 : 6
                    })
                }
            },
            displayAnnouncement: function(e) {
                e.length > 0 && (this.announcement.html(e), this.announcement.fadeIn(400, function() {
                    setTimeout(function() {
                        s("#ui-announcement").fadeOut(800)
                    }, 3e3)
                }))
            },
            displayGasAnnouncement: function(e, t) {
                var a = "";
                switch (e) {
                    case h.Waiting:
                        a = this.localization.translate("game-red-zone-advances");
                        var i = Math.floor(t / 60),
                            r = t - 60 * i;
                        a += i > 1 ? " " + i + " " + this.localization.translate("game-minutes") : "", a += 1 == i ? " " + i + " " + this.localization.translate("game-minute") : "", a += r > 0 ? " " + Math.floor(r) + " " + this.localization.translate("game-seconds") : "";
                        break;
                    case h.Moving:
                        a = this.localization.translate("game-red-zone-advancing")
                }
                this.displayAnnouncement(a)
            },
            displayAssignRoleAnnouncement: function(e, t) {
                var a = this.localization.translate("game-youve-been-promoted-to"),
                    i = "";
                switch (e) {
                    case m.Role.FactionLeader:
                        i = 1 == t ? this.localization.translate("game-red-leader") : this.localization.translate("game-blue-leader");
                        break;
                    case m.Role.Lieutenant:
                        i = this.localization.translate("game-lieutenant")
                }
                if (i) {
                    var r = a + " " + i + "!";
                    this.displayAnnouncement(r.toUpperCase())
                }
            },
            setWaitingForPlayers: function(e) {
                this.waitingForPlayers = e, this.waitingText.css("display", e ? "block" : "none")
            },
            render: function(e, t, a, i, r, o) {
                var n = t.getCircle(),
                    s = this.getMapPosFromWorldPos(n.pos, i),
                    l = this.getMapPosFromWorldPos(g.add(n.pos, g.create(n.rad, 0)), i),
                    c = g.length(g.sub(l, s));
                this.gasRenderer.render(s, c, t.isActive());
                var m = t.circleNew,
                    p = this.getMapPosFromWorldPos(m.pos, i),
                    d = this.getMapPosFromWorldPos(g.add(m.pos, g.create(m.rad, 0)), i),
                    h = g.length(g.sub(d, p)),
                    u = this.getMapPosFromWorldPos(e, i),
                    y = t.isActive(),
                    w = t.isActive() && !this.bigmapDisplayed;
                this.gasSafeZoneRenderer.render(p, h, u, y, w), r.renderAirstrikeZones(this, i, o)
            },
            updateHealthBar: function(e, t, a, i) {
                var r = e,
                    n = .01 * i.health * r;
                n = i.dead ? 0 : y.max(n, 1), t.css("width", n), n > 0 && a && a.css("width", n);
                var s = i.health,
                    l = this.healthRed,
                    c = this.healthDarkpink;
                if (s > 25) {
                    if (i.downed) t.css({
                        backgroundColor: "red"
                    });
                    else {
                        y.eqAbs(s, 100, .2) ? (l = this.healthGrey, c = this.healthGrey) : y.eqAbs(s, 75, .2) || s >= 75 ? (l = this.healthWhite, c = this.healthWhite) : (l = this.healthDarkpink, c = this.healthLightpink);
                        var m = l.getColors(),
                            p = c.getColors(),
                            d = o(m.r, p.r, 45, s),
                            h = o(m.g, p.g, 45, s),
                            u = o(m.b, p.b, 45, s);
                        t.css({
                            backgroundColor: "rgba(" + d + "," + h + "," + u + ",1)"
                        })
                    }
                    t.removeClass("ui-bar-danger")
                } else t.addClass("ui-bar-danger")
            },
            updateTeam: function(e, t, a, i, r, o, n) {
                var s = this.teamSelectors[e].groupId,
                    l = this.teamSelectors[e].teamName,
                    c = this.teamSelectors[e].prevHealth,
                    m = this.teamSelectors[e].prevStatus,
                    p = i.dead != m.dead || i.disconnected != m.disconnected || i.downed != m.downed || i.factionLeader != m.factionLeader;
                if (this.teamSelectors[e].playerId != r || a != c || p) {
                    var d = (this.teamSelectors[e].teamIcon, this.teamSelectors[e].teamStatus),
                        h = this.teamSelectors[e].teamHealthInner;
                    this.teamSelectors[e].playerId = r, this.teamSelectors[e].teamNameHtml = t, l.html(t), this.updateHealthBar(this.teamMemberHealthBarWidth, h, null, {
                        health: a,
                        dead: i.dead,
                        downed: i.downed
                    }), p && (d.attr("class", "ui-team-member-status"), i.disconnected ? d.addClass("ui-team-member-status-disconnected") : i.dead ? d.addClass("ui-team-member-status-dead") : i.downed && d.addClass("ui-team-member-status-downed").addClass("icon-pulse"), l.css("opacity", i.disconnected || i.dead ? .3 : 1)), s.css("display", "block"), this.teamSelectors[e].prevStatus = i, this.teamSelectors[e].prevHealth = a
                }
            },
            clearTeamUI: function() {
                s(".ui-team-member").css("display", "none"), s(".ui-team-indicator").css("display", "none"), s(".ui-team-member-name").removeAttr("style"), s(".ui-team-member-status").removeAttr("style"), s(".ui-team-member-status").removeClass("ui-team-member-status-downed ui-team-member-status-dead ui-team-member-status-disconnected icon-pulse"), this.teamSelectors = []
            },
            resize: function(e, t) {
                this.screenScaleFactor = x.uiLayout == x.UiLayout.Sm ? .5626 : y.min(1, y.clamp(t.screenWidth / 1280, .75, 1) * y.clamp(t.screenHeight / 1024, .75, 1)), this.pieTimer.resize(this.touch, this.screenScaleFactor), this.gasRenderer.resize(), this.mapSprite.texture = e.getMapTexture(), this.redraw(t)
            },
            redraw: function(e) {
                var t = e.screenWidth,
                    a = e.screenHeight,
                    i = this.getMinimapMargin(),
                    r = 0,
                    o = 0;
                "iphonex" == x.model && (x.isLandscape ? r += 28 : o += 32);
                var n = this.getMinimapSize(),
                    s = this.getMinimapBorderWidth(),
                    l = x.uiLayout == x.UiLayout.Sm;
                if (this.display.border.clear(), this.container.mask.clear(), this.bigmapDisplayed) {
                    var c = y.min(t, a);
                    this.mapSprite.width = c, this.mapSprite.height = c, this.mapSprite.x = t / 2, this.mapSprite.y = a / 2, this.mapSprite.alpha = 1, this.container.mask.beginFill(16777215, 1), this.container.mask.drawRect(this.mapSprite.x - this.mapSprite.width / 2, this.mapSprite.y - this.mapSprite.height / 2, this.mapSprite.width, this.mapSprite.height), this.container.mask.endFill(), x.touch && this.bigmapCollision.css({
                        width: a,
                        height: t
                    })
                } else {
                    var m = 1600 * this.screenScaleFactor / 1.2,
                        p = n * this.screenScaleFactor;
                    this.mapSprite.width = m, this.mapSprite.height = m, this.mapSprite.alpha = .8;
                    var d = {
                        zoom: this.screenScaleFactor
                    };
                    document.body && ("WebkitTransform" in document.body.style ? d = {
                        "-webkit-transform": "scale(" + this.screenScaleFactor + ")"
                    } : "transform" in document.body.style && (d = {
                        transform: "scale(" + this.screenScaleFactor + ")"
                    })), this.mapContainer.css(d), this.mapContainer.css("bottom", this.mapContainerBottom * this.screenScaleFactor);
                    var h = l ? p / 2 + i : a - p / 2 - i;
                    this.minimapPos.x = i + p / 2 + r, this.minimapPos.y = h + o, this.display.border.lineStyle(s, 0), this.display.border.beginFill(0, 0);
                    var u = l ? i + s / 2 : a - p - i + s / 2;
                    this.display.border.drawRect(i + s / 2 + r, u + o, p - s, p - s), this.display.border.endFill();
                    var g = l ? i : a - p - i;
                    this.container.mask.beginFill(16777215, 1), this.container.mask.drawRect(i + r, g - .5 + o, p, p), this.container.mask.endFill()
                }
            },
            toggleEscMenu: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!this.displayingStats) {
                    if (this.escMenuDisplayed || t) return this.escMenuDisplayed = !1, this.escMenuElem.css("display", "none"), this.setCurrentGameTab("settings"), s("#ui-center").off("mouseenter mouseleave"), void(this.inputBinds.menuHovered = !1);
                    if (this.bigmapDisplayed) return void this.displayMapLarge(!0);
                    2 == this.visibilityMode && this.cycleVisibilityMode(), this.escMenuDisplayed = !0, this.escMenuElem.css("display", "block"), s("#ui-center").hover(function() {
                        e.inputBinds.menuHovered = !0
                    }, function() {
                        e.inputBinds.menuHovered = !1
                    }), this.inputBinds.menuHovered = !1
                }
            },
            setCurrentGameTab: function(e) {
                this.currentGameTab = e, this.gameTabs.css("display", "none"), this.gameTabBtns.removeClass("btn-game-menu-selected"), s("#ui-game-tab-" + this.currentGameTab).css("display", "block"), s("#btn-game-" + this.currentGameTab).addClass("btn-game-menu-selected"), "keybinds" == this.currentGameTab ? this.inputBindUi.refresh() : this.inputBindUi.cancelBind()
            }
        }, e.exports = {
            ce: r
        }
    }
