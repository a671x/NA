    "61fc98e9": function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            var a = {
                join_full: t.translate("index-team-is-full"),
                join_not_found: t.translate("index-failed-joining-team"),
                create_failed: t.translate("index-failed-creating-team"),
                join_failed: t.translate("index-failed-joining-team"),
                join_game_failed: t.translate("index-failed-joining-game"),
                lost_conn: t.translate("index-lost-connection"),
                find_game_error: t.translate("index-failed-finding-game"),
                find_game_full: t.translate("index-failed-finding-game"),
                find_game_invalid_protocol: t.translate("index-invalid-protocol"),
                kicked: t.translate("index-team-kicked")
            };
            return a[e] || a.lost_conn
        }
        var o = function() {
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
            n = a("8ee62bea"),
            s = a("989ad62a"),
            l = (a("10899aea"), a("300e2704")),
            c = (a("48eca919"), a("259eae5b")),
            m = a("ce29f17f"),
            p = a("26be8056"),
            d = function() {
                function e(t, a, r, o, s, l) {
                    var c = this;
                    if (i(this, e), this.playBtn = n("#btn-start-team"), this.serverWarning = n("#server-warning"), this.teamOptions = n("#btn-team-queue-mode-1, #btn-team-queue-mode-2, #btn-team-fill-auto, #btn-team-fill-none"), this.serverSelect = n("#team-server-select"), this.queueMode1 = n("#btn-team-queue-mode-1"), this.queueMode2 = n("#btn-team-queue-mode-2"), this.fillAuto = n("#btn-team-fill-auto"), this.fillNone = n("#btn-team-fill-none"), this.config = t, this.pingTest = a, this.localization = r, this.audioManager = o, this.joinGameCb = s, this.leaveCb = l, this.active = !1, this.joined = !1, this.create = !1, this.joiningGame = !1, this.ws = null, this.keepAliveTimeout = 0, this.siteInfo = {}, this.playerData = {}, this.roomData = {}, this.players = [], this.prevPlayerCount = 0, this.localPlayerId = 0, this.isLeader = !0, this.editingName = !1, this.displayedInvalidProtocolModal = !1, this.serverSelect.change(function() {
                            var e = c.serverSelect.find(":selected").val();
                            c.pingTest.start([e]), c.setRoomProperty("region", e)
                        }), this.queueMode1.click(function() {
                            c.setRoomProperty("gameModeIdx", 1)
                        }), this.queueMode2.click(function() {
                            c.setRoomProperty("gameModeIdx", 2)
                        }), this.fillAuto.click(function() {
                            c.setRoomProperty("autoFill", !0)
                        }), this.fillNone.click(function() {
                            c.setRoomProperty("autoFill", !1)
                        }), this.playBtn.on("click", function() {
                            c.tryStartGame()
                        }), n("#team-copy-url, #team-desc-text").click(function(e) {
                            var t = n("<div/>", {
                                class: "copy-toast",
                                html: "Copied!"
                            });
                            n("#start-menu-wrapper").append(t), t.css({
                                left: e.pageX - parseInt(t.css("width")) / 2,
                                top: n("#team-copy-url").offset().top
                            }), t.animate({
                                top: "-=20",
                                opacity: 1
                            }, {
                                queue: !1,
                                duration: 300,
                                complete: function() {
                                    n(this).fadeOut(250, function() {
                                        n(this).remove()
                                    })
                                }
                            });
                            var a = n("#team-url").html();
                            p.copyTextToClipboard(a)
                        }), !m.webview && !m.mobile) {
                        this.hideUrl = !1;
                        var d = this;
                        n("#team-hide-url").click(function(e) {
                            d.hideUrl = !d.hideUrl, n("#team-desc-text, #team-code-text").css({
                                opacity: d.hideUrl ? 0 : 1
                            }), n(this).css({
                                "background-image": d.hideUrl ? "url(../img/gui/hide.svg)" : "url(../img/gui/eye.svg)"
                            })
                        })
                    }
                }
                return o(e, [{
                    key: "getPlayerById",
                    value: function(e) {
                        return this.players.find(function(t) {
                            return t.playerId == e
                        })
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.joined && (this.keepAliveTimeout -= e, this.keepAliveTimeout < 0 && (this.keepAliveTimeout = 30, this.sendMessage("keepAlive", {})))
                    }
                }, {
                    key: "connect",
                    value: function(e, t) {
                        var a = this;
                        if (!this.active || t !== this.roomData.roomUrl) {
                            var i = "https:" == window.location.protocol,
                                r = i ? "wss:" : "ws:",
                                o = c.resolveRoomHost(e, t),
                                n = r + "//" + o + "/team";
                            this.active = !0, this.joined = !1, this.create = e, this.joiningGame = !1, this.editingName = !1, this.playerData = {
                                name: this.config.get("playerName")
                            }, this.roomData = {
                                roomUrl: t,
                                region: this.config.get("region"),
                                gameModeIdx: this.config.get("gameModeIdx"),
                                autoFill: this.config.get("teamAutoFill"),
                                findingGame: !1,
                                lastError: ""
                            }, this.displayedInvalidProtocolModal = !1, this.refreshUi(), this.ws && (this.ws.onclose = function() {}, this.ws.close(), this.ws = null);
                            try {
                                this.ws = new WebSocket(n), this.ws.onerror = function(e) {
                                    a.ws && a.ws.close()
                                }, this.ws.onclose = function() {
                                    var e = "";
                                    a.joiningGame || (e = a.joined ? "lost_conn" : a.create ? "create_failed" : "join_failed"), a.leave(e)
                                }, this.ws.onopen = function() {
                                    a.create ? a.sendMessage("create", {
                                        roomData: a.roomData,
                                        playerData: a.playerData
                                    }) : a.sendMessage("join", {
                                        roomUrl: a.roomData.roomUrl,
                                        playerData: a.playerData
                                    })
                                }, this.ws.onmessage = function(e) {
                                    if (a.active) {
                                        var t = JSON.parse(e.data);
                                        a.onMessage(t.type, t.data)
                                    }
                                }
                            } catch (e) {
                                this.leave(this.create ? "create_failed" : "join_failed")
                            }
                        }
                    }
                }, {
                    key: "leave",
                    value: function(e) {
                        if (this.active) {
                            this.ws && this.ws.close(), this.ws = null, this.active = !1, this.joined = !1, this.joiningGame = !1, this.refreshUi(), this.config.set("gameModeIdx", this.roomData.gameModeIdx), this.config.set("teamAutoFill", this.roomData.autoFill), this.isLeader && this.config.set("region", this.roomData.region);
                            var t = "";
                            e && "" != e && (t = r(e, this.localization)), this.leaveCb(t)
                        }
                    }
                }, {
                    key: "onGameComplete",
                    value: function() {
                        this.active && (this.joiningGame = !1, this.sendMessage("gameComplete"))
                    }
                }, {
                    key: "onMessage",
                    value: function(e, t) {
                        switch (e) {
                            case "state":
                                this.joined = !0;
                                var a = this.roomData;
                                this.roomData = t.room, this.players = t.players, this.localPlayerId = t.localPlayerId, this.isLeader = this.getPlayerById(this.localPlayerId).isLeader, this.isLeader && (this.roomData.region = a.region, this.roomData.autoFill = a.autoFill), this.refreshUi();
                                break;
                            case "joinGame":
                                this.joiningGame = !0, this.joinGameCb(t);
                                break;
                            case "keepAlive":
                                break;
                            case "kicked":
                                this.leave("kicked");
                                break;
                            case "error":
                                this.leave(t.type)
                        }
                    }
                }, {
                    key: "sendMessage",
                    value: function(e, t) {
                        if (this.ws)
                            if (this.ws.readyState === this.ws.OPEN) {
                                var a = JSON.stringify({
                                    type: e,
                                    data: t
                                });
                                this.ws.send(a)
                            } else this.ws.close()
                    }
                }, {
                    key: "setRoomProperty",
                    value: function(e, t) {
                        this.isLeader && this.roomData[e] != t && (this.roomData[e] = t, this.sendMessage("setRoomProps", this.roomData))
                    }
                }, {
                    key: "tryStartGame",
                    value: function() {
                        if (this.isLeader && !this.roomData.findingGame) {
                            var e = s.protocolVersion,
                                t = this.roomData.region,
                                a = p.getParameterByName("region");
                            void 0 !== a && a.length > 0 && (t = a);
                            var i = this.pingTest.getZones(t),
                                r = p.getParameterByName("zone");
                            void 0 !== r && r.length > 0 && (i = [r]);
                            var o = {
                                version: e,
                                region: t,
                                zones: i
                            };
                            this.sendMessage("playGame", o), this.roomData.findingGame = !0, this.refreshUi()
                        }
                    }
                }, {
                    key: "refreshUi",
                    value: function() {
                        var e = this,
                            t = function(e, t, a) {
                                e.removeClass("btn-darken btn-disabled btn-opaque btn-hollow-selected"), a ? e.addClass("btn-darken") : (e.addClass("btn-disabled"), t || e.addClass("btn-opaque")), t && e.addClass("btn-hollow-selected"), e.prop("disabled", !a)
                            };
                        n("#team-menu").css("display", this.active ? "block" : "none"), n("#start-menu").css("display", this.active ? "none" : "block"), n("#news-block").css("display", this.active ? "none" : "block"), n("#social-share-block").css("display", this.active ? "none" : "block");
                        var a = "" != this.roomData.lastError,
                            i = r(this.roomData.lastError, this.localization);
                        if (this.serverWarning.css("opacity", a ? 1 : 0), this.serverWarning.html(i), "find_game_invalid_protocol" != this.roomData.lastError || this.displayedInvalidProtocolModal || (n("#modal-refresh").fadeIn(200), this.displayedInvalidProtocolModal = !0), this.active && (n("#team-menu-joining-text").css("display", this.create ? "none" : "block"), n("#team-menu-creating-text").css("display", this.create ? "block" : "none"), n("#team-menu-connecting").css("display", this.joined ? "none" : "block"), n("#team-menu-contents").css("display", this.joined ? "block" : "none")), this.joined) {
                            for (var o = this.siteInfo.pops || {}, s = Object.keys(o), c = 0; c < s.length; c++) {
                                var d = s[c],
                                    h = o[d],
                                    u = n("#team-server-opts").children('option[value="' + d + '"]');
                                u.html(u.attr("data-label") + " [" + h + "]")
                            }
                            if (this.serverSelect.find("option").each(function(t, a) {
                                    a.selected = a.value == e.roomData.region
                                }), t(this.queueMode1, 1 == this.roomData.gameModeIdx, this.isLeader && -1 !== this.roomData.enabledGameModeIdxs.indexOf(1)), t(this.queueMode2, 2 == this.roomData.gameModeIdx, this.isLeader && -1 !== this.roomData.enabledGameModeIdxs.indexOf(2)), t(this.fillAuto, this.roomData.autoFill, this.isLeader), t(this.fillNone, !this.roomData.autoFill, this.isLeader), this.serverSelect.prop("disabled", !this.isLeader), this.roomData.roomUrl) {
                                var g = window.location.origin + "/" + this.roomData.roomUrl,
                                    y = this.roomData.roomUrl.substring(1);
                                m.webview ? n("#team-url").html(y) : (n("#team-url").html(g), n("#team-code").html(y)), window.history && window.history.replaceState("", "", this.roomData.roomUrl)
                            }
                            this.playBtn.html(this.roomData.findingGame || this.joiningGame ? '<div class="ui-spinner"></div>' : this.playBtn.attr("data-label"));
                            for (var w = !1, x = 0; x < this.players.length; x++) w |= this.players[x].inGame;
                            var f = n("#msg-wait-reason"),
                                b = n("#btn-start-team");
                            if (this.isLeader) {
                                f.html(this.localization.translate("index-game-in-progress") + "<span> ...</span>");
                                var _ = w && !this.joiningGame;
                                f.css("display", _ ? "block" : "none"), b.css("display", _ ? "none" : "block")
                            } else this.roomData.findingGame || this.joiningGame ? f.html('<div class="ui-spinner" style="margin-right:16px"></div>' + this.localization.translate("index-joining-game") + "<span> ...</span>") : w ? f.html(this.localization.translate("index-game-in-progress") + "<span> ...</span>") : f.html(this.localization.translate("index-waiting-for-leader") + "<span> ...</span>"), f.css("display", "block"), b.css("display", "none");
                            var S = n("#team-menu-member-list");
                            S.empty();
                            for (var v = 0; v < this.roomData.maxPlayers; v++) ! function(t) {
                                var a = {
                                    name: "",
                                    playerId: 0,
                                    isLeader: !1,
                                    inGame: !1,
                                    self: !1
                                };
                                if (t < e.players.length) {
                                    var i = e.players[t];
                                    a = {
                                        name: i.name,
                                        playerId: i.playerId,
                                        isLeader: i.isLeader,
                                        inGame: i.inGame,
                                        self: i.playerId == e.localPlayerId
                                    }
                                }
                                var r = n("<div/>", {
                                        class: "team-menu-member"
                                    }),
                                    o = "";
                                a.isLeader ? o = " icon-leader" : e.isLeader && 0 != a.playerId && (o = " icon-kick"), r.append(n("<div/>", {
                                    class: "icon" + o,
                                    "data-playerid": a.playerId
                                }));
                                var s = null,
                                    c = null;
                                if (e.editingName && a.self) {
                                    s = n("<input/>", {
                                        type: "text",
                                        tabindex: 0,
                                        class: "name menu-option name-text name-self-input",
                                        maxLength: l.Constants.PlayerNameMaxLen
                                    }), s.val(a.name);
                                    var m = function(t) {
                                            var i = p.sanitizeNameInput(s.val());
                                            a.name = i, e.config.set("playerName", i), e.sendMessage("changeName", {
                                                name: i
                                            }), e.editingName = !1, e.refreshUi()
                                        },
                                        d = function(t) {
                                            e.editingName = !1, e.refreshUi()
                                        };
                                    s.keypress(function(e) {
                                        if (13 === e.which) return m(), !1
                                    }), s.on("blur", d), r.append(s), c = n("<div/>", {
                                        class: "icon icon-submit-name-change"
                                    }), c.on("click", m), c.on("mousedown", function(e) {
                                        e.preventDefault(), e.stopPropagation()
                                    })
                                } else {
                                    var h = "name-text";
                                    a.self && (h += " name-self"), a.inGame && (h += " name-in-game");
                                    var u = n("<div/>", {
                                        class: "name menu-option " + h,
                                        html: p.htmlEscape(a.name)
                                    });
                                    a.self && u.on("click", function() {
                                        console.log("editing name"), e.editingName = !0, e.refreshUi()
                                    }), r.append(u)
                                }
                                c ? r.append(c) : r.append(n("<div/>", {
                                    class: "icon " + (a.inGame ? "icon-in-game" : "")
                                })), S.append(r), s && s.focus()
                            }(v);
                            n(".icon-kick", S).click(function(t) {
                                var a = n(t.currentTarget).attr("data-playerid");
                                e.sendMessage("kick", {
                                    playerId: a
                                })
                            });
                            var k = this.players.find(function(t) {
                                    return t.playerId == e.localPlayerId
                                }),
                                z = k && !k.inGame;
                            !document.hasFocus() && this.prevPlayerCount < this.players.length && this.players.length > 1 && z && this.audioManager.playSound("notification_join_01", {
                                channel: "ui"
                            }), this.prevPlayerCount = this.players.length
                        }
                    }
                }]), e
            }();
        e.exports = d
    },
