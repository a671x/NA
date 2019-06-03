    c99e6613: function(e, t, a) {
        "use strict";

        function i() {
            var e = this;
            this.nameInput = o("#player-name-input-solo"), this.serverSelect = o("#server-select-main"), this.playMode0Btn = o("#btn-start-mode-0"), this.playMode1Btn = o("#btn-start-mode-1"), this.playMode2Btn = o("#btn-start-mode-2"), this.muteBtns = o(".btn-sound-toggle"), this.aimLineBtn = o("#btn-game-aim-line"), this.masterSliders = o(".sl-master-volume"), this.soundSliders = o(".sl-sound-volume"), this.musicSliders = o(".sl-music-volume"), this.serverWarning = o("#server-warning"), this.languageSelect = o(".language-select"), this.startMenuWrapper = o("#start-menu-wrapper"), this.gameAreaWrapper = o("#game-area-wrapper"), this.errorModal = new k(o("#modal-notification")), this.refreshModal = new k(o("#modal-refresh")), this.config = new g, this.localization = new S, this.adManager = new p.AdManager(this.config), this.account = new m(this.config, this.localization, this.errorModal), this.loadoutMenu = new _(this.config, this.account), this.pingTest = new z, this.audioManager = new u, this.ambience = new h, this.teamMenu = new I(this.config, this.pingTest, this.localization, this.audioManager, this.onTeamMenuJoinGame.bind(this), this.onTeamMenuLeave.bind(this)), this.pixi = null, this.textureManager = null, this.input = null, this.inputBinds = null, this.inputBindUi = null, this.game = null, this.sessionId = r.random64(), this.loadComplete = !1, this.initialized = !1, this.active = !1, this.contextListener = function(e) {
                e.preventDefault()
            }, this.errorMessage = "", this.quickPlayPendingModeIdx = -1, this.findGameAttempts = 0, this.findGameTime = 0, this.pauseTime = 0, this.wasPlayingVideo = !1, this.checkedPingTest = !1, this.hasFocus = !0, this.siteInfo = {}, this.siteInfoLoaded = !1, this.siteInfoApplied = !1;
            var t = function() {
                e.config.load(function() {
                    e.requestSiteInfo(), e.startPingTest(), e.loadComplete = !0
                })
            };
            y.webview && y.version > "1.0.0" ? this.loadWebviewDeps(t) : this.loadBrowserDeps(t)
        }
        var r = a("26be8056");
        r.getParameterByName("debug") || (console.log = function() {});
        var o = a("8ee62bea"),
            n = a("8b1dfb45");
        n.utils.skipHello();
        var s = a("989ad62a"),
            l = a("10899aea"),
            c = a("300e2704"),
            m = a("a68e9107"),
            p = a("2d958752"),
            d = a("259eae5b"),
            h = a("0b12821e"),
            u = a("4b528868"),
            g = a("6ffe8b70"),
            y = a("ce29f17f"),
            w = (a("e5d16b4d"), a("f398b7c7")),
            x = a("9b5f96fd"),
            f = a("4b8d140f"),
            b = a("d306eab6"),
            _ = a("153d9481"),
            S = a("7d64d541"),
            v = a("484b3444"),
            k = a("fa71fb59"),
            z = a("c4623452"),
            M = a("d84c74f8"),
            T = a("076760a2"),
            I = a("61fc98e9"),
            P = a("d3da5587");
        a("f4d48896"), i.prototype = {
                loadBrowserDeps: function(e) {
                    e()
                },
                loadWebviewDeps: function(e) {
                    var t = this;
                    document.addEventListener("deviceready", function() {
                            document.addEventListener("pause", function() {
                                t.onPause()
                            }), document.addEventListener("resume", function() {
                                t.onResume()
                            }), o("#news-block h3").html("What's New!!"), e()
                        }, !1),
                        function(e, t, a) {
                            var i, r = y.version >= "1.0.8" ? "cordova/" + y.version : "cordova",
                                o = r + "/" + y.os + "/cordova.js",
                                n = e.getElementsByTagName(t)[0];
                            e.getElementById(a) || (i = e.createElement(t), i.id = a, i.onload = function() {}, i.src = o, n.parentNode.insertBefore(i, n))
                        }(document, "script", "cordova-js")
                },
                ma: function() {
                    var e = this;
                    if (!this.initialized) {
                        if (!this.loadComplete) return void setTimeout(function() {
                            e.ma()
                        }, 10);
                        this.initialized = !0, this.config.teamAutoFill = !0, y.webview ? v.applyWebviewStyling(y.tablet) : y.mobile && v.applyMobileBrowserStyling(y.tablet), this.adManager.init(), this.account.init(), this.account.load(), y.webview && y.version >= "1.0.8" && setTimeout(function() {
                            e.adManager.showBannerAd()
                        }, 0), this.localization.localizeIndex(), this.nameInput.maxLength = c.Constants.PlayerNameMaxLen, this.playMode0Btn.on("click", function() {
                            e.tryQuickStartGame(0)
                        }), this.playMode1Btn.on("click", function() {
                            e.tryQuickStartGame(1)
                        }), this.playMode2Btn.on("click", function() {
                            e.tryQuickStartGame(2)
                        }), this.serverSelect.change(function() {
                            var t = e.serverSelect.find(":selected").val();
                            e.config.set("region", t)
                        }), o(document).on("mouseup", function(e) {
                            4 != e.which && 5 != e.which || e.preventDefault()
                        }), this.nameInput.on("blur", function(t) {
                            e.setConfigFromDOM()
                        }), this.muteBtns.on("click", function(t) {
                            e.config.set("muteAudio", !e.config.get("muteAudio"))
                        }), this.muteBtns.on("mousedown", function(e) {
                            e.stopPropagation()
                        }), o(this.masterSliders).on("mousedown", function(e) {
                            e.stopPropagation()
                        }), o(this.soundSliders).on("mousedown", function(e) {
                            e.stopPropagation()
                        }), o(this.musicSliders).on("mousedown", function(e) {
                            e.stopPropagation()
                        }), this.masterSliders.on("input", function(t) {
                            var a = o(t.target).val() / 100;
                            e.audioManager.setMasterVolume(a), e.config.set("masterVolume", a)
                        }), this.soundSliders.on("input", function(t) {
                            var a = o(t.target).val() / 100;
                            e.audioManager.setSoundVolume(a), e.config.set("soundVolume", a)
                        }), this.musicSliders.on("input", function(t) {
                            var a = o(t.target).val() / 100;
                            e.audioManager.setMusicVolume(a), e.config.set("musicVolume", a)
                        }), o(".modal-settings-item").children("input").each(function(t, a) {
                            var i = o(a);
                            i.prop("checked", e.config.get(i.prop("id")))
                        }), o(".modal-settings-item > input:checkbox").change(function(t) {
                            var a = o(t.target);
                            e.config.set(a.prop("id"), a.is(":checked"))
                        }), o(".btn-fullscreen-toggle").on("click", function() {
                            r.toggleFullScreen()
                        }), this.languageSelect.on("change", function(t) {
                            var a = t.target.value;
                            a && e.config.set("language", a)
                        }), o("#btn-create-team").on("click", function() {
                            e.tryJoinTeam(!0)
                        }), o("#btn-team-mobile-link-join").on("click", function() {
                            var t = o("#team-link-input").val().trim(),
                                a = t.indexOf("#");
                            a >= 0 && (t = t.slice(a + 1)), t.length > 0 ? (o("#team-mobile-link").css("display", "none"), e.tryJoinTeam(!1, t)) : (o("#team-mobile-link-desc").css("display", "none"), o("#team-mobile-link-warning").css("display", "none").fadeIn(100))
                        }), o("#btn-team-leave").on("click", function() {
                            window.history && window.history.replaceState("", "", "/"), e.game && e.game.n(), e.teamMenu.leave()
                        }), this.setDOMFromConfig(), this.setAppActive(!0);
                        var t = document.getElementById("cvs"),
                            a = window.devicePixelRatio > 1 ? 2 : 1;
                        "ios" == y.os && (n.settings.PRECISION_FRAGMENT = "highp");
                        var i = function(e) {
                                return new n.Application({
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                    view: t,
                                    antialias: !1,
                                    resolution: a,
                                    forceCanvas: e
                                })
                            },
                            s = null;
                        try {
                            s = i(!1)
                        } catch (e) {
                            s = i(!0)
                        }
                        this.pixi = s, this.pixi.renderer.plugins.interaction.destroy(), this.pixi.ticker.add(this.update, this), this.pixi.renderer.backgroundColor = 7378501, this.textureManager = new T.TextureManager(this.pixi.renderer, this.config), setTimeout(function() {
                            e.audioManager.preloadSounds(), e.textureManager.loadAtlasList(["gradient", "loadout", "shared", "main"])
                        }, 0), this.input = new f.fe(t), this.inputBinds = new b.InputBinds(this.input, this.config), this.inputBindUi = new b.InputBindUi(this.input, this.inputBinds);
                        var l = function() {
                                e.game.o(), e.findGameAttempts = 0, e.ambience.onGameStart(), e.adManager.onGameStart()
                            },
                            m = function(t) {
                                e.game.n(), e.errorMessage = e.localization.translate(t || ""), e.teamMenu.onGameComplete(), e.ambience.onGameComplete(e.audioManager), e.setAppActive(!0), "index-invalid-protocol" == t && e.showInvalidProtocolModal()
                            };
                        this.game = new x.Xt(this.pixi, this.audioManager, this.localization, this.config, this.input, this.inputBinds, this.inputBindUi, this.adManager, this.ambience, this.textureManager, l, m), this.onResize(), this.tryJoinTeam(!1), v.init(this.inputBinds, this.inputBindUi), P.loadStaticDomImages(), this.tryApplySiteInfo();
                        var p = this.config.get("loadId"),
                            d = this.config.get("unloadId");
                        p && p != d && console.log("Probable session crash detected!"), this.config.set("loadId", this.sessionId), this.onConfigModified(), this.config.addModifiedListener(this.onConfigModified.bind(this))
                    }
                },
                onUnload: function() {
                    this.teamMenu.leave(), this.config.set("unloadId", this.sessionId)
                },
                onResize: function() {
                    y.onResize(), v.onResize(), this.pixi && this.pixi.renderer.resize(y.screenWidth, y.screenHeight), this.game && this.game.initialized && this.game.Dt(), this.refreshUi()
                },
                onPause: function() {
                    y.webview && (this.pauseTime = Date.now(), this.audioManager.setMute(!0), "ios" == y.os && this.pixi && this.pixi.ticker.remove(this.pixi.render, this.pixi))
                },
                onResume: function() {
                    y.webview && (this.game && this.game.playing && Date.now() - this.pauseTime > 3e4 ? window.location.reload(!0) : this.audioManager.setMute(this.config.get("muteAudio")), "ios" == y.os && this.pixi && this.pixi.ticker.add(this.pixi.render, this.pixi, n.UPDATE_PRIORITY.LOW))
                },
                startPingTest: function() {
                    var e = this.config.get("regionSelected") ? [this.config.get("region")] : this.pingTest.getRegionList();
                    this.pingTest.start(e)
                },
                requestSiteInfo: function() {
                    var e = this,
                        t = d.resolveUrl("/api/site_info?language=" + this.localization.getLocale());
                    o.ajax(t).done(function(t, a) {
                        e.siteInfo = t || {}, e.teamMenu.siteInfo = e.siteInfo, e.siteInfoLoaded = !0, e.tryApplySiteInfo()
                    })
                },
                tryApplySiteInfo: function() {
                    if (!this.siteInfoApplied && this.siteInfoLoaded && this.initialized) {
                        var e = this.siteInfo.pops;
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; a++) {
                                var i = t[a],
                                    r = e[i],
                                    n = o("#server-opts").children('option[value="' + i + '"]');
                                n.text(n.data("label") + " [" + r + "]")
                            }
                        var s = !1,
                            l = o("#featured-streamers"),
                            c = o(".streamer-list");
                        if (!y.mobile && this.siteInfo.twitch)
                            for (var m = 0; m < this.siteInfo.twitch.length; m++) {
                                var p = this.siteInfo.twitch[m],
                                    d = o("#featured-streamer-template").clone();
                                d.attr("class", "featured-streamer streamer-tooltip").attr("id", "");
                                var h = d.find("a"),
                                    u = this.localization.translate(1 == p.viewers ? "index-viewer" : "index-viewers");
                                h.html(p.name + " <span>" + p.viewers + " " + u + "</span>"), h.css("background-image", "url(" + p.img + ")"), h.attr("href", p.url), c.append(d), s = !0
                            }
                        l.css("visibility", s ? "visible" : "hidden");
                        var g = o("#featured-youtuber"),
                            w = this.siteInfo.youtube;
                        if (w && o(".btn-youtuber").attr("href", this.siteInfo.youtube.link).html(this.siteInfo.youtube.name), g.css("display", w ? "block" : "none"), this.siteInfo.promptConsent && M.showCookieConsent(this.config), window.adsBlocked) {
                            if (["US"].includes(this.siteInfo.country)) {
                                var x = o("#ad-block-left").find(".surviv-shirts");
                                x && (x.addClass("surviv-shirts"), x.css("display", "block")), o(".adblock-plea").remove()
                            } else {
                                var f = o("#ad-block-left").find(".adblock-plea");
                                f && (f.addClass("adblock-plea"), f.css("display", "block")), o(".surviv-shirts").remove()
                            }
                            var b = document.getElementById("survivio_300x250_main");
                            b && (b.style.display = "none");
                            var _ = document.getElementById("surviv-io_300x250");
                            _ && (_.style.display = "none")
                        }
                        this.siteInfoApplied = !0
                    }
                },
                setAppActive: function(e) {
                    this.active = e, this.quickPlayPendingModeIdx = -1, this.sessionGames++, this.refreshUi(), e && this.errorModal.hide()
                },
                onTeamMenuJoinGame: function(e) {
                    this.joinGame(e)
                },
                onTeamMenuLeave: function(e) {
                    e && "" != e && window.history && window.history.replaceState("", "", "/"), this.errorMessage = e, this.setDOMFromConfig(), this.refreshUi()
                },
                setConfigFromDOM: function() {
                    var e = r.sanitizeNameInput(this.nameInput.val());
                    this.config.set("playerName", e);
                    var t = this.serverSelect.find(":selected").val();
                    this.config.set("region", t)
                },
                setDOMFromConfig: function() {
                    var e = this;
                    this.nameInput.val(this.config.get("playerName")), this.serverSelect.find("option").each(function(t, a) {
                        a.selected = a.value == e.config.get("region")
                    }), this.languageSelect.val(this.config.get("language"))
                },
                onConfigModified: function(e) {
                    var t = this.config.get("muteAudio");
                    t != this.audioManager.mute && (this.muteBtns.removeClass(t ? "audio-on-icon" : "audio-off-icon"), this.muteBtns.addClass(t ? "audio-off-icon" : "audio-on-icon"), this.audioManager.setMute(t));
                    var a = this.config.get("masterVolume");
                    this.masterSliders.val(100 * a), this.audioManager.setMasterVolume(a);
                    var i = this.config.get("soundVolume");
                    this.soundSliders.val(100 * i), this.audioManager.setSoundVolume(i);
                    var r = this.config.get("musicVolume");
                    this.musicSliders.val(100 * r), this.audioManager.setMusicVolume(r);
                    var o = this.config.get("language");
                    o != this.localization.getLocale() && (this.localization.setLocale(o), this.localization.localizeIndex()), "region" == e && (this.config.set("regionSelected", !0), this.startPingTest()), "highResTex" == e && location.reload()
                },
                refreshUi: function() {
                    var e = this;
                    this.startMenuWrapper.css("display", this.active ? "flex" : "none"), this.gameAreaWrapper.css({
                        display: this.active ? "none" : "block",
                        opacity: this.active ? 0 : 1
                    }), this.active ? (o("body").removeClass("user-select-none"), document.removeEventListener("contextmenu", this.contextListener)) : (o("body").addClass("user-select-none"), o("#start-main").stop(!0), document.addEventListener("contextmenu", this.contextListener)), o("#ad-block-left").css("display", !y.isLandscape && this.teamMenu.active ? "none" : "block");
                    var t = this.active && "" != this.errorMessage;
                    this.serverWarning.css({
                        display: "block",
                        opacity: t ? 1 : 0
                    }), this.serverWarning.html(this.errorMessage);
                    var a = function(t, a) {
                        t.html(e.quickPlayPendingModeIdx === a ? '<div class="ui-spinner"></div>' : t.attr("data-label"))
                    };
                    a(this.playMode0Btn, 0), a(this.playMode1Btn, 1), a(this.playMode2Btn, 2)
                },
                tryJoinTeam: function(e, t) {
                    if (this.active && -1 === this.quickPlayPendingModeIdx) {
                        var a = t || window.location.hash.slice(1);
                        (e || "" != a) && (this.setConfigFromDOM(), this.teamMenu.connect(e, a), this.refreshUi())
                    }
                },
                tryQuickStartGame: function(e) {
                    var t = this;
                    if (-1 === this.quickPlayPendingModeIdx) {
                        this.errorMessage = "", this.quickPlayPendingModeIdx = e, this.setConfigFromDOM(), this.refreshUi();
                        var a = 0;
                        this.findGameAttempts > 0 && Date.now() - this.findGameTime < 3e4 ? a = Math.min(2.5 * this.findGameAttempts * 1e3, 7500) : this.findGameAttempts = 0, this.findGameTime = Date.now(), this.findGameAttempts++;
                        var i = s.protocolVersion,
                            o = this.config.get("region"),
                            n = r.getParameterByName("region");
                        void 0 !== n && n.length > 0 && (o = n);
                        var l = this.pingTest.getZones(o),
                            c = r.getParameterByName("zone");
                        void 0 !== c && c.length > 0 && (l = [c]);
                        var m = {
                                version: i,
                                region: o,
                                zones: l,
                                playerCount: 1,
                                autoFill: !0,
                                gameModeIdx: e
                            },
                            p = function() {
                                t.findGame(m, function(e, a) {
                                    if (e) return void t.onJoinGameError(e);
                                    t.joinGame(a)
                                })
                            };
                        0 == a ? p() : setTimeout(function() {
                            p()
                        }, a)
                    }
                },
                findGame: function(e, t) {
                    ! function a(i, r) {
                        if (i >= r) return void t("full");
                        var n = function() {
                            setTimeout(function() {
                                a(i + 1, r)
                            }, 500)
                        };
                        o.ajax({
                            type: "POST",
                            url: d.resolveUrl("/api/find_game"),
                            data: JSON.stringify(e),
                            contentType: "application/json; charset=utf-8",
                            timeout: 1e4,
                            success: function(e) {
                                if (e && e.err && "full" != e.err) return void t(e.err);
                                var a = e && e.res ? e.res[0] : null;
                                a && a.hosts && a.addrs ? t(null, a) : n()
                            },
                            error: function(e) {
                                n()
                            }
                        })
                    }(0, 2)
                },
                joinGame: function(e) {
                    var t = this;
                    if (!this.game) return void setTimeout(function() {
                        t.joinGameImpl(o, e)
                    }, 250);
                    for (var a = "https:" == window.location.protocol || e && e.useHttps, i = a ? "wss:" : "ws:", r = (a ? e.hosts : e.addrs) || [], o = [], n = 0; n < r.length; n++) o.push(i + "//" + r[n] + "/play?gameId=" + e.gameId);
                    ! function e(a, i) {
                        var r = a.shift();
                        if (!r) return void t.onJoinGameError("join_game_failed");
                        console.log("Joining", r, i.zone);
                        var o = function() {
                            e(a, i)
                        };
                        t.game.Ne(r, i.data, o)
                    }(o, e)
                },
                onJoinGameError: function(e) {
                    var t = {
                        full: this.localization.translate("index-failed-finding-game"),
                        invalid_protocol: this.localization.translate("index-invalid-protocol"),
                        join_game_failed: this.localization.translate("index-failed-joining-game")
                    };
                    "invalid_protocol" == e && this.showInvalidProtocolModal(), this.errorMessage = t[e] || t.full, this.quickPlayPendingModeIdx = -1, this.teamMenu.leave("join_game_failed"), this.refreshUi()
                },
                showInvalidProtocolModal: function() {
                    this.refreshModal.show(!0)
                },
                update: function() {
                    var e = l.clamp(this.pixi.ticker.elapsedMS / 1e3, .001, 1 / 8);
                    if (this.pingTest.update(e), !this.checkedPingTest && this.pingTest.isComplete()) {
                        if (!this.config.get("regionSelected")) {
                            var t = this.pingTest.getRegion();
                            t && (this.config.set("region", t), this.setDOMFromConfig())
                        }
                        this.checkedPingTest = !0
                    }
                    if (this.audioManager.c(e), this.ambience.update(e, this.audioManager, !this.active), this.teamMenu.update(e), this.wasPlayingVideo != this.adManager.isPlayingVideo) {
                        var a = this.adManager.isPlayingVideo ? 0 : this.config.get("masterVolume");
                        this.audioManager.setMasterVolume(a)
                    }
                    this.wasPlayingVideo = this.adManager.isPlayingVideo, this.game && this.game.initialized && this.game.playing && (this.active && this.setAppActive(!1), this.game.c(e)), this.input.flush()
                }
            }, a("927ff3fc"),
            function() {
                var e = a("b4f03d8a");
                ! function(e) {
                    var t = document.createElement("style");
                    t.innerHTML = e.toString(), document.body.appendChild(t)
                }(e)
            }();
        var C = new i;
        document.addEventListener("DOMContentLoaded", function(e) {
            setTimeout(function() {
                C.ma()
            }, 0)
        }), window.addEventListener("load", function() {
            setTimeout(function() {
                C.ma()
            }, 0)
        }), window.addEventListener("unload", function(e) {
            C.onUnload()
        }), "#_=_" == window.location.hash && (window.location.hash = "", history.pushState("", document.title, window.location.pathname)), window.addEventListener("resize", function() {
            C.onResize()
        }), window.addEventListener("hashchange", function() {
            C.tryJoinTeam(!1)
        }), window.addEventListener("beforeunload", function(e) {
            if (C.game && C.game.Ot() && !y.webview) {
                var t = "Do you want to reload the game?";
                return e.returnValue = t, t
            }
        }), window.addEventListener("onfocus", function() {
            C.hasFocus = !0
        }), window.addEventListener("onblur", function() {
            C.hasFocus = !1
        });
        var A = [];
        window.onerror = function(e, t, a, i, o) {
            if (e = e || "undefined_error_msg", -1 != e.indexOf("').innerText") || -1 != o.stack.indexOf("cdn.rawgit.com") || -1 != o.stack.indexOf("chrome-extension://")) return void r.U();
            var n = {
                    msg: e,
                    id: C.sessionId,
                    url: t,
                    line: a,
                    column: i,
                    stacktrace: o.stack,
                    browser: navigator.userAgent
                },
                s = JSON.stringify(n); - 1 === A.indexOf(s) && (A.push(s), /tpc.googlesyndication.com/.test(s) || (/surviv\.io\/js\/.*\.js/.test(s) && -1 == n.stacktrace.indexOf("chrome-extension://") && -1 == n.stacktrace.indexOf("cdn.rawgit.com") ? -1 !== n.msg.indexOf("TypeError: null is not an object (evaluating 't.transform._parentID=-1')") ? w.logError(s) : w.logWindowOnAppError(s) : w.logWindowOnError(s)))
        }
    },
