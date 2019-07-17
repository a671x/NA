    c99e6613: function(e, t, a) {
        "use strict";

        function i() {
            this.nameInput = r("#player-name-input-solo"), this.serverSelect = r("#server-select-main"), this.playMode0Btn = r("#btn-start-mode-0"), this.playMode1Btn = r("#btn-start-mode-1"), this.playMode2Btn = r("#btn-start-mode-2"), this.muteBtns = r(".btn-sound-toggle"), this.aimLineBtn = r("#btn-game-aim-line"), this.masterSliders = r(".sl-master-volume"), this.soundSliders = r(".sl-sound-volume"), this.musicSliders = r(".sl-music-volume"), this.serverWarning = r("#server-warning"), this.languageSelect = r(".language-select"), this.startMenuWrapper = r("#start-menu-wrapper"), this.gameAreaWrapper = r("#game-area-wrapper"), this.config = new u, this.config.addModifiedListener(this.onConfigModified.bind(this)), this.localization = new S, this.adManager = new m.AdManager(this.config), this.account = new c(this.config, this.localization), this.loadoutMenu = new _(this.config), this.pingTest = new v, this.audioManager = new h, this.ambience = new d, this.teamMenu = new T(this.config, this.pingTest, this.localization, this.joinGame.bind(this), this.audioManager), this.teamMenu.onLeave = this.onTeamMenuLeave.bind(this), this.pixi = null, this.textureManager = null, this.input = null, this.inputBinds = null, this.inputBindUi = null, this.game = null, this.loadComplete = !1, this.initialized = !1, this.active = !1, this.contextListener = function(e) {
                e.preventDefault()
            }, this.errorMessage = "", this.playEnabled = !1, this.quickPlayPendingModeIdx = -1, this.playTimeout = 0, this.pauseTime = 0, this.wasPlayingVideo = !1, this.checkedPingTest = !1, this.systemMemory = Number.MAX_VALUE, this.siteInfo = {}, this.siteInfoLoaded = !1, this.siteInfoApplied = !1, g.webview && g.version > "1.0.0" ? this.loadWebview() : this.loadBrowser()
        }
        a("c381ef30").init();
        var r = a("8ee62bea"),
            o = a("8b1dfb45");
        o.utils.skipHello();
        var n = a("989ad62a"),
            s = a("10899aea"),
            l = a("300e2704"),
            c = a("a68e9107"),
            m = a("2d958752"),
            p = a("259eae5b"),
            d = a("0b12821e"),
            h = a("4b528868"),
            u = a("6ffe8b70"),
            g = a("ce29f17f"),
            y = (a("e5d16b4d"), a("f398b7c7")),
            w = a("9b5f96fd"),
            x = a("26be8056"),
            f = a("4b8d140f"),
            b = a("d306eab6"),
            _ = a("153d9481"),
            S = a("7d64d541"),
            k = a("484b3444"),
            v = a("c4623452"),
            z = a("d84c74f8"),
            M = a("076760a2"),
            T = a("61fc98e9"),
            P = a("d3da5587"),
            I = a("f4d48896");
        i.prototype = {
                loadBrowser: function() {
                    var e = this;
                    this.config.load(function() {
                        e.requestSiteInfo(), e.startPingTest(), e.loadComplete = !0
                    })
                },
                loadWebview: function() {
                    var e = this;
                    document.addEventListener("deviceready", function() {
                            document.addEventListener("pause", function() {
                                e.onPause()
                            }), document.addEventListener("resume", function() {
                                e.onResume()
                            }), r("#news-block h3").html("What's New!!");
                            var t = [],
                                a = function(e) {
                                    t.push(e)
                                },
                                i = function(a) {
                                    var i = t.indexOf(a); - 1 !== i && t.splice(i, 1), 0 == t.length && (e.loadComplete = !0)
                                };
                            a("loadConfig"), a("loadSystemInfo"), e.config.load(function() {
                                e.requestSiteInfo(), e.startPingTest(), i("loadConfig")
                            }), g.version >= "1.0.8" ? I.getSystemMemoryInfo(function(t) {
                                e.systemMemory = t.capacity || Number.MAX_VALUE, i("loadSystemInfo")
                            }) : i("loadSystemInfo")
                        }, !1),
                        function(e, t, a) {
                            var i, r = g.version >= "1.0.8" ? "cordova/" + g.version : "cordova",
                                o = r + "/" + g.os + "/cordova.js",
                                n = e.getElementsByTagName(t)[0];
                            e.getElementById(a) || (i = e.createElement(t), i.id = a, i.onload = function() {}, i.src = o, n.parentNode.insertBefore(i, n))
                        }(document, "script", "cordova-js")
                },
                o: function() {
                    var e = this;
                    if (!this.initialized) {
                        if (!this.loadComplete) return void setTimeout(function() {
                            e.o()
                        }, 10);
                        if (this.initialized = !0, this.config.teamAutoFill = !0, g.webview ? k.applyWebviewStyling(g.tablet) : g.mobile && k.applyMobileBrowserStyling(g.tablet), g.webview && g.version >= "1.0.8" && setTimeout(function() {
                                e.adManager.showBannerAd()
                            }, 0), this.adManager.init(), this.account.init(), this.localization.localizeIndex(), this.nameInput.maxLength = l.Constants.kPlayerNameMaxLen, this.playMode0Btn.on("click", function() {
                                e.tryQuickStartGame(0)
                            }), this.playMode1Btn.on("click", function() {
                                e.tryQuickStartGame(1)
                            }), this.playMode2Btn.on("click", function() {
                                e.tryQuickStartGame(2)
                            }), this.serverSelect.change(function() {
                                var t = e.serverSelect.find(":selected").val();
                                e.config.set("region", t)
                            }), r(document).on("mouseup", function(e) {
                                4 != e.which && 5 != e.which || e.preventDefault()
                            }), this.nameInput.on("blur", function(t) {
                                e.setConfigFromDOM()
                            }), this.muteBtns.on("click", function(t) {
                                e.config.set("muteAudio", !e.config.get("muteAudio"))
                            }), this.muteBtns.on("mousedown", function(e) {
                                e.stopPropagation()
                            }), r(this.masterSliders).on("mousedown", function(e) {
                                e.stopPropagation()
                            }), r(this.soundSliders).on("mousedown", function(e) {
                                e.stopPropagation()
                            }), r(this.musicSliders).on("mousedown", function(e) {
                                e.stopPropagation()
                            }), this.masterSliders.on("input", function(t) {
                                var a = r(t.target).val() / 100;
                                e.audioManager.setMasterVolume(a), e.config.set("masterVolume", a)
                            }), this.soundSliders.on("input", function(t) {
                                var a = r(t.target).val() / 100;
                                e.audioManager.setSoundVolume(a), e.config.set("soundVolume", a)
                            }), this.musicSliders.on("input", function(t) {
                                var a = r(t.target).val() / 100;
                                e.audioManager.setMusicVolume(a), e.config.set("musicVolume", a)
                            }), r(".modal-settings-item").children("input").each(function(t, a) {
                                var i = r(a);
                                i.prop("checked", e.config.get(i.prop("id")))
                            }), r(".modal-settings-item > input:checkbox").change(function(t) {
                                var a = r(t.target);
                                e.config.set(a.prop("id"), a.is(":checked"))
                            }), r(".btn-fullscreen-toggle").on("click", function() {
                                x.toggleFullScreen()
                            }), this.languageSelect.on("change", function(t) {
                                var a = t.target.value;
                                a && e.config.set("language", a)
                            }), r("#btn-create-team").on("click", function() {
                                e.tryJoinTeam(!0)
                            }), r("#btn-team-mobile-link-join").on("click", function() {
                                var t = r("#team-link-input").val().trim(),
                                    a = t.indexOf("#");
                                a >= 0 && (t = t.slice(a + 1)), t.length > 0 ? (r("#team-mobile-link").css("display", "none"), e.tryJoinTeam(!1, t)) : (r("#team-mobile-link-desc").css("display", "none"), r("#team-mobile-link-warning").css("display", "none").fadeIn(100))
                            }), r("#btn-team-leave").on("click", function() {
                                window.history && window.history.replaceState("", "", "/"), e.game && e.game.n(), e.teamMenu.leave()
                            }), "WebSocket" in window)
                            if (x.authLocation()) {
                                if ("ie" == g.browser) {
                                    var t = 'Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!';
                                    t += '<br><br>¡Usa el <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">navegador Chrome</a> para una mejor experiencia de juego!', t += '<br><br><a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">구글 크롬</a> 브라우저로이 게임을 즐겨보세요.';
                                    var a = r("#modal-notification");
                                    a.find(".modal-settings-text").html(t), a.fadeIn(200)
                                }
                            } else {
                                y.logProxy(window.location.hostname);
                                var i = r("#modal-notification");
                                i.find(".modal-settings-text").html('Please use the <a href="https://surviv.io" target="_blank">official surviv.io site</a> for a better playing experience!'), i.fadeIn(200)
                            } else {
                            y.storeGeneric("error", "no_websocket");
                            var n = r("#modal-notification");
                            n.find(".modal-settings-text").html('WebSockets are required to play.<br><br>Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!'), n.fadeIn(200)
                        }
                        if (/Android.*; wv\)/.test(navigator.userAgent) && !g.webview) {
                            var s = function(e) {
                                    return e.map(function(e) {
                                        return String.fromCharCode(e)
                                    }).join("")
                                },
                                c = document.body;
                            if (c) {
                                for (y.storeGeneric("error", "wv"), y.enabled = !1; c.firstChild;) c.removeChild(c.firstChild);
                                var m = [68, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 111, 102, 102, 105, 99, 105, 97, 108, 32, 65, 110, 100, 114, 111, 105, 100, 32, 97, 112, 112, 32, 104, 101, 114, 101, 58],
                                    p = r("<div/>", {
                                        css: {
                                            marginTop: "10%",
                                            width: "100%",
                                            textAlign: "center"
                                        }
                                    }),
                                    d = r("<div/>", {
                                        text: s(m),
                                        css: {
                                            textAlign: "center",
                                            fontSize: "24px"
                                        }
                                    }),
                                    h = [104, 116, 116, 112, 115, 58, 47, 47, 112, 108, 97, 121, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 115, 116, 111, 114, 101, 47, 97, 112, 112, 115, 47, 100, 101, 116, 97, 105, 108, 115, 63, 105, 100, 61, 105, 111, 46, 115, 117, 114, 118, 105, 118, 46, 115, 117, 114, 118, 105, 118, 95, 105, 111, 95, 109, 111, 98, 105, 108, 101],
                                    u = r("<a/>", {
                                        href: s(h),
                                        class: "btn-download-android btn-download-app btn-darken",
                                        css: {
                                            marginTop: "20px",
                                            position: "absolute",
                                            left: "50%",
                                            transform: "translateX(-50%)"
                                        }
                                    });
                                p.append(d), p.append(u), c.appendChild(p[0])
                            }
                            this.game && this.game.ws && this.game.ws.close()
                        }
                        this.account.load(), this.loadoutMenu.init(this.account), this.playEnabled = !0, this.setDOMFromConfig(), this.setAppActive(!0), this.audioManager.preloadSounds();
                        var _ = document.getElementById("cvs"),
                            S = window.devicePixelRatio > 1 ? 2 : 1;
                        "ios" == g.os && (o.settings.PRECISION_FRAGMENT = "highp");
                        var v = function(e) {
                                return new o.Application({
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                    view: _,
                                    antialias: !1,
                                    resolution: S,
                                    forceCanvas: e
                                })
                            },
                            z = null;
                        try {
                            z = v(!1)
                        } catch (e) {
                            z = v(!0), y.storeGeneric("render", "forceCanvas")
                        }
                        this.pixi = z, this.pixi.renderer.plugins.interaction.destroy(), this.pixi.ticker.add(this.update, this);
                        var T = Math.min(window.screen.width, window.screen.height),
                            I = Math.max(window.screen.width, window.screen.height);
                        T *= window.devicePixelRatio, I *= window.devicePixelRatio;
                        var C = I < 1366 && T < 768,
                            A = C || !this.config.get("highResTex") ? "low" : "high";
                        (g.mobile && !g.tablet || g.webview && this.systemMemory <= 2147483648 || this.pixi.renderer.type == o.RENDERER_TYPE.CANVAS) && (A = "low");
                        var E = x.getParameterByName("textureRes");
                        E && (A = E), P.loadStaticDomImages(), this.textureManager = new M.TextureManager(this.pixi.renderer, A), this.textureManager.loadAtlasList(["gradient", "shared", "main"]), this.input = new f._e(this.pixi.view), this.inputBinds = new b.InputBinds(this.input, this.config), this.inputBindUi = new b.InputBindUi(this.input, this.inputBinds);
                        var D = function() {
                                e.setAppActive(!1), e.ambience.onGameStart(), e.adManager.onGameStart();
                                var t = void 0 != window.menu;
                                y.storeGeneric("socketOn", t)
                            },
                            O = function(t) {
                                e.game.n(), e.errorMessage = e.localization.translate(t || ""), e.teamMenu.onGameComplete(), e.ambience.onGameStop(e.audioManager), e.setAppActive(!0), "index-invalid-protocol" == t && e.showInvalidProtocolModal()
                            };
                        if (this.game = new w.Jt(this.pixi, this.audioManager, this.localization, this.config, this.input, this.inputBinds, this.inputBindUi, this.adManager, this.ambience, this.textureManager, this.loadoutMenu, D, O), this.onResize(), this.tryJoinTeam(!1), k.init(this.inputBinds, this.inputBindUi), window.adsBlocked) {
                            var B = document.getElementById("main-med-rect-blocked");
                            B && (B.style.display = "block");
                            var L = document.getElementById("survivio_300x250_main");
                            L && (L.style.display = "none");
                            var R = document.getElementById("surviv-io_300x250");
                            R && (R.style.display = "none")
                        }
                        this.tryApplySiteInfo(), window.aiptag && (window.aiptag.gdprConsent = window.cookiesConsented, window.aiptag.consented = window.cookiesConsented)
                    }
                },
                onResize: function() {
                    g.onResize(), "ios" == g.os && ("iphonex" == g.model ? g.isLandscape ? r(".main-volume-slider").css("width", "90%") : r(".main-volume-slider").css("width", "") : window.navigator.standalone || (g.isLandscape ? (r("#start-main-center").attr("style", ""), r("#modal-customize .modal-content").attr("style", "")) : r("#modal-customize .modal-content").css({
                        transform: "translate(-50%, -50%) scale(0.45)",
                        top: "38%"
                    }))), g.tablet && (r("#featured-youtuber").remove(), r(".btn-youtube").remove()), g.touch ? r(".btn-start-fullscreen").css("display", "none") : r(".btn-start-fullscreen").css("display", "block"), r(".btn-keybind").css("display", g.mobile ? "none" : "inline-block"), this.pixi && this.pixi.renderer.resize(g.screenWidth, g.screenHeight), this.game && this.game.initialized && this.game.Et(), this.refreshUi()
                },
                onPause: function() {
                    g.webview && (this.pauseTime = Date.now(), this.audioManager.setMute(!0), "ios" == g.os && this.pixi && this.pixi.ticker.remove(this.pixi.render, this.pixi))
                },
                onResume: function() {
                    g.webview && (this.game && this.game.playing && Date.now() - this.pauseTime > 3e4 ? window.location.reload(!0) : this.audioManager.setMute(this.config.get("muteAudio")), "ios" == g.os && this.pixi && this.pixi.ticker.add(this.pixi.render, this.pixi, o.UPDATE_PRIORITY.LOW))
                },
                onUnload: function() {
                    this.teamMenu.leave()
                },
                startPingTest: function() {
                    var e = this.config.get("regionSelected") ? [this.config.get("region")] : this.pingTest.getRegionList();
                    this.pingTest.start(e)
                },
                requestSiteInfo: function() {
                    var e = this,
                        t = p.resolveUrl("/api/site_info?language=" + this.localization.getLocale());
                    r.ajax(t).done(function(t, a) {
                        e.siteInfo = t || {}, e.teamMenu.siteInfo = e.siteInfo, e.siteInfoLoaded = !0, e.tryApplySiteInfo()
                    })
                },
                tryApplySiteInfo: function() {
                    if (!this.siteInfoApplied && this.siteInfoLoaded && this.initialized) {
                        var e = this.siteInfo.pops;
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; a++) {
                                var i = t[a],
                                    o = e[i],
                                    n = r("#server-opts").children('option[value="' + i + '"]');
                                n.text(n.data("label") + " [" + o + "]")
                            }
                        var s = !1,
                            l = r("#featured-streamers"),
                            c = r(".streamer-list");
                        if (!g.mobile && this.siteInfo.twitch)
                            for (var m = 0; m < this.siteInfo.twitch.length; m++) {
                                var p = this.siteInfo.twitch[m],
                                    d = r("#featured-streamer-template").clone();
                                d.attr("class", "featured-streamer streamer-tooltip").attr("id", "");
                                var h = d.find("a"),
                                    u = this.localization.translate(1 == p.viewers ? "index-viewer" : "index-viewers");
                                h.html(p.name + " <span>" + p.viewers + " " + u + "</span>"), h.css("background-image", "url(" + p.img + ")"), h.attr("href", p.url), c.append(d), s = !0
                            }
                        l.css("visibility", s ? "visible" : "hidden");
                        var y = r("#featured-youtuber"),
                            w = this.siteInfo.youtube;
                        w && r(".btn-youtuber").attr("href", this.siteInfo.youtube.link).html(this.siteInfo.youtube.name), y.css("display", w ? "block" : "none"), this.siteInfo.promptConsent && z.showCookieConsent(this.config), this.siteInfoApplied = !0
                    }
                },
                setAppActive: function(e) {
                    this.active = e, this.quickPlayPendingModeIdx = -1, this.sessionGames++, this.refreshUi()
                },
                onTeamMenuLeave: function(e) {
                    e && "" != e && window.history && window.history.replaceState("", "", "/"), this.errorMessage = e, this.setDOMFromConfig(), this.refreshUi()
                },
                setConfigFromDOM: function() {
                    var e = x.sanitizeNameInput(this.nameInput.val());
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
                    }), this.active ? (r("body").removeClass("user-select-none"), document.removeEventListener("contextmenu", this.contextListener)) : (r("body").addClass("user-select-none"), r("#start-main").stop(!0), document.addEventListener("contextmenu", this.contextListener)), r("#ad-block-left").css("display", !g.isLandscape && this.teamMenu.active ? "none" : "block");
                    var t = this.active && "" != this.errorMessage;
                    this.serverWarning.css({
                        display: "block",
                        opacity: t ? 1 : 0
                    }), this.serverWarning.html(this.errorMessage);
                    var a = function(t, a) {
                        t.html(e.quickPlayPendingModeIdx === a ? '<div class="ui-spinner"></div>' : t.attr("data-label"))
                    };
                    a(this.playMode0Btn, 0), a(this.playMode1Btn, 1), a(this.playMode2Btn, 2), this.active ? (this.playMode2Btn.addClass("btn-potato-mode"), r("#btn-start-team").addClass("btn-potato-mode")) : (this.playMode2Btn.removeClass("btn-potato-mode"), r("#btn-start-team").removeClass("btn-potato-mode"))
                },
                tryJoinTeam: function(e, t) {
                    if (this.active && -1 === this.quickPlayPendingModeIdx) {
                        var a = t || window.location.hash.slice(1);
                        (e || "" != a) && (this.setConfigFromDOM(), this.teamMenu.connect(e, a), this.refreshUi())
                    }
                },
                tryQuickStartGame: function(e) {
                    var t = (new Date).getTime();
                    if (this.playEnabled && -1 === this.quickPlayPendingModeIdx && !(t < this.playTimeout)) {
                        this.playTimeout = t + 1e3, this.errorMessage = "", this.quickPlayPendingModeIdx = e, this.setConfigFromDOM(), this.refreshUi();
                        var a = n.protocolVersion,
                            i = this.config.get("region"),
                            r = x.getParameterByName("region");
                        void 0 !== r && r.length > 0 && (i = r);
                        var o = this.pingTest.getZones(i),
                            s = x.getParameterByName("zone");
                        void 0 !== s && s.length > 0 && (o = [s]);
                        var l = {
                            version: a,
                            region: i,
                            zones: o,
                            playerCount: 1,
                            autoFill: !0,
                            gameModeIdx: e
                        };
                        this.findGame(l)
                    }
                },
                findGame: function(e) {
                    var t = this;
                    x.findGame(e, function(e, a) {
                        if (e) {
                            var i = {
                                full: t.localization.translate("index-failed-finding-game"),
                                invalid_protocol: t.localization.translate("index-invalid-protocol")
                            };
                            "invalid_protocol" == e && t.showInvalidProtocolModal(), t.errorMessage = i[e] || i.full, t.quickPlayPendingModeIdx = -1, t.refreshUi()
                        } else t.joinGame(a, function() {
                            t.errorMessage = t.localization.translate("index-failed-joining-game"), t.quickPlayPendingModeIdx = -1, t.refreshUi()
                        })
                    })
                },
                joinGame: function(e, t) {
                    var a = this;
                    if (!this.game) return void setTimeout(function() {
                        a.joinGame(e, t)
                    }, 250);
                    x.joinGame(this.game, e, t)
                },
                showInvalidProtocolModal: function() {
                    r("#modal-refresh").fadeIn(200)
                },
                update: function() {
                    var e = s.clamp(this.pixi.ticker.elapsedMS / 1e3, .001, 1 / 8);
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
                    this.wasPlayingVideo = this.adManager.isPlayingVideo, this.game && this.game.initialized && this.game.playing ? this.game.c(e) : this.pixi.renderer.backgroundColor = 7378501, this.input.flush()
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
                C.o()
            }, 0)
        }), window.addEventListener("load", function() {
            setTimeout(function() {
                C.o()
            }, 0)
        }), window.addEventListener("unload", function(e) {
            C.onUnload()
        }), "#_=_" == window.location.hash && (window.location.hash = "", history.pushState("", document.title, window.location.pathname)), window.addEventListener("resize", function() {
            C.onResize()
        }), window.addEventListener("hashchange", function() {
            C.tryJoinTeam(!1)
        }), window.addEventListener("beforeunload", function(e) {
            if (C.game && C.game.Dt() && !g.webview) {
                var t = "Do you want to reload the game?";
                return e.returnValue = t, t
            }
        });
        var A = [];
        window.onerror = function(e, t, a, i, r) {
            if (e = e || "undefined_error_msg", -1 != e.indexOf("').innerText") || -1 != r.stack.indexOf("cdn.rawgit.com") || -1 != r.stack.indexOf("chrome-extension://")) return void x.H();
            var o = {
                    msg: e,
                    id: y.instanceId,
                    url: t,
                    line: a,
                    column: i,
                    stacktrace: r.stack,
                    browser: navigator.userAgent
                },
                n = JSON.stringify(o); - 1 === A.indexOf(n) && (A.push(n), /tpc.googlesyndication.com/.test(n) || (/surviv\.io\/js\/.*\.js/.test(n) && -1 == o.stacktrace.indexOf("chrome-extension://") && -1 == o.stacktrace.indexOf("cdn.rawgit.com") ? -1 !== o.msg.indexOf("TypeError: null is not an object (evaluating 't.transform._parentID=-1')") ? y.logError(n) : y.logWindowOnAppError(n) : y.logWindowOnError(n)))
        }
    },
