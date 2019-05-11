    "6e43d1d7": function(e, t, a) {
        "use strict";

        function i(e, t, a, i, r, s, l, c) {
            var m = o.items[e],
                p = n.rotate(r, t),
                d = n.mul(p, 9.5 * a);
            d = n.rotate(d, (Math.random() - .5) * Math.PI / 3);
            var h = n.add(i, n.mul(r, o.player.radius + m.particle.shellOffset));
            m.particle.shellReverse && (d = n.mul(d, -1)), c.addParticle(m.ammo, s, h, d, m.particle.shellScale, -Math.atan2(p.y, p.x), null, l)
        }

        function r() {
            this.shots = []
        }
        var o = (a("8b1dfb45"), a("989ad62a")),
            n = (a("10899aea"), a("c2a798c8"));
        a("1901e2d9"), r.prototype = {
            addShot: function(e, t, a, i, r, s) {
                for (var l = null, c = 0; c < this.shots.length; c++)
                    if (!this.shots[c].active) {
                        l = this.shots[c];
                        break
                    }
                l || (l = {}, this.shots.push(l));
                var m = o.items[i];
                l.active = !0, l.pos = n.copy(e), l.layer = t, l.playerId = a, l.weaponType = i, l.offhand = r, l.lastShot = s, l.ticker = 0, l.pullDelay = void 0 !== m.pullDelay ? .45 * m.pullDelay : 0
            },
            c: function(e, t, a, r, n) {
                for (var s = 0; s < this.shots.length; s++) {
                    var l = this.shots[s];
                    if (l.active) {
                        var c = o.items[l.weaponType];
                        if (0 == l.ticker) {
                            var m = a.ve(l.playerId),
                                p = c.sound.shoot;
                            if (l.lastShot && c.sound.shootLast && (p = c.sound.shootLast), n.playSound(p, {
                                    channel: l.playerId == t ? "activePlayer" : "otherPlayers",
                                    soundPos: l.pos,
                                    layer: m ? m.layer : l.layer,
                                    muffled: !0,
                                    fallOff: c.sound.fallOff ? c.sound.fallOff : 0
                                }), m) {
                                if (m.__id == t && "single" == c.fireMode && c.pullDelay) {
                                    var d = m.re.weapons[m.re.curWeapIdx].ammo,
                                        h = d > 0 ? c.sound.cycle : c.sound.pull;
                                    n.stopSound(m.cycleSoundInstance), m.cycleSoundInstance = n.playSound(h)
                                }
                                var u = l.offhand || !c.isDual,
                                    g = !l.offhand || !c.isDual;
                                m.addRecoil(c.worldImg.recoil, u, g), m.fireDelay = c.fireDelay
                            }
                        }
                        if (l.ticker += e, l.ticker >= l.pullDelay) {
                            var y = a.ve(l.playerId);
                            y && !y.ie.dead && y.ie.curWeapType == l.weaponType && "shoot" == c.caseTiming && i(l.weaponType, Math.PI / 2 * -1, 1, y.ie.pos, y.ie.dir, y.renderLayer, y.renderZOrd + 1, r), l.active = !1
                        }
                    }
                }
            }
        }, e.exports = {
            createCasingParticle: i,
            ze: r
        }
    },
    "6ffe8b70": function(e, t, a) {
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
            o = a("1901e2d9"),
            n = a("ce29f17f"),
            s = a("26be8056"),
            l = a("f4d48896"),
            c = {
                muteAudio: !1,
                masterVolume: 1,
                soundVolume: 1,
                musicVolume: 1,
                highResTex: !0,
                screenShake: !0,
                anonPlayerNames: !1,
                touchMoveStyle: "anywhere",
                touchAimStyle: "anywhere",
                touchAimLine: !0,
                profile: null,
                playerName: "",
                region: "na",
                gameModeIdx: 2,
                teamAutoFill: !0,
                language: s.detectLanguage() || "en",
                emoteTop: 6,
                emoteRight: 4,
                emoteBottom: 7,
                emoteLeft: 5,
                emoteWin: 1,
                emoteDeath: 1,
                twitterFollow: !1,
                youtubeSubscribe: !1,
                facebookLike: !1,
                instagramFollow: !1,
                prerollGamesPlayed: 0,
                totalGamesPlayed: 0,
                promptAppRate: !0,
                cookiesConsented: !0,
                regionSelected: !1
            },
            m = function() {
                function e() {
                    i(this, e), this.loaded = !1, this.localStorageAvailable = !0, this.config = {}, this.onModifiedListeners = []
                }
                return r(e, [{
                    key: "load",
                    value: function(e) {
                        var t = this,
                            a = function(a) {
                                var i = {};
                                try {
                                    i = JSON.parse(a)
                                } catch (e) {}
                                t.config = o.mergeDeep({}, c, i), t.onModified(), t.loaded = !0, e()
                            };
                        if (n.webview && n.version > "1.0.0") l.storageGetItem("surviv_config", function(e, t) {
                            e ? (console.log("Failed loading config"), a({})) : a(t)
                        });
                        else {
                            var i = {};
                            try {
                                i = localStorage.getItem("surviv_config")
                            } catch (e) {
                                this.localStorageAvailable = !1
                            }
                            a(i)
                        }
                    }
                }, {
                    key: "store",
                    value: function() {
                        var e = JSON.stringify(this.config);
                        if (n.webview && n.version > "1.0.0") l.storageSetItem("surviv_config", e, function(e, t) {
                            e && console.log("Failed storing config")
                        });
                        else if (this.localStorageAvailable) try {
                            localStorage.setItem("surviv_config", e)
                        } catch (e) {}
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        if (e) {
                            for (var a = e.split("."), i = this.config; a.length > 1;) i = i[a.shift()];
                            i[a.shift()] = t, this.store(), this.onModified(e)
                        }
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        if (e) {
                            for (var t = e.split("."), a = this.config, i = 0; i < t.length; i++) a = a[t[i]];
                            return a
                        }
                    }
                }, {
                    key: "addModifiedListener",
                    value: function(e) {
                        this.onModifiedListeners.push(e)
                    }
                }, {
                    key: "onModified",
                    value: function(e) {
                        for (var t = 0; t < this.onModifiedListeners.length; t++) this.onModifiedListeners[t](e)
                    }
                }]), e
            }();
        e.exports = m
    },
    "72409abe": function(e, t, a) {
        "use strict";

        function i() {
            var e = {
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    fontSize: m.pixelRatio > 1 ? 30 : 24,
                    align: "center",
                    fill: 16777215,
                    stroke: 0,
                    strokeThickness: 0,
                    dropShadow: !0,
                    dropShadowColor: "#000000",
                    dropShadowBlur: 1,
                    dropShadowAngle: Math.PI / 3,
                    dropShadowDistance: 1
                },
                t = new n.Text("", e);
            return t.anchor.set(.5, .5), t.scale.set(.5, .5), t
        }

        function r() {
            this.active = !1, this.pos = c.create(0, 0), this.container = new n.Container, this.sprite = n.Sprite.fromImage("skull.img"), this.sprite.anchor.set(.5, .5), this.sprite.scale.set(.4, .4), this.sprite.tint = 5921370, this.container.addChild(this.sprite), this.nameText = i(), this.nameText.anchor.set(.5, -1), this.nameText.tint = l.rgb2hex(l.hsv2rgb(0, 0, .5)), this.container.addChild(this.nameText), this.container.visible = this.sprite
        }

        function o() {
            this.Me = new p.Pool(r)
        }
        var n = (a("0e566746"), a("8b1dfb45")),
            s = a("6b42806d"),
            l = (a("989ad62a"), a("10899aea"), a("1901e2d9")),
            c = a("c2a798c8"),
            m = a("ce29f17f"),
            p = (a("af8ba00f"), a("753d6e4b"));
        r.prototype = {
            o: function() {},
            n: function() {
                this.container.visible = !1
            },
            l: function(e, t, a, i) {
                this.pos = c.copy(e.pos), t && (this.layer = e.layer, this.playerId = e.playerId), a && (this.nameTextSet = !1, this.container.visible = !0)
            }
        }, o.prototype = {
            c: function(e, t, a, i, r, o, n, l) {
                for (var c = this.Me.m(), m = 0; m < c.length; m++) {
                    var p = c[m];
                    if (p.active) {
                        if (!p.nameTextSet) {
                            var d = t.ne(p.playerId),
                                h = d.groupId,
                                u = t.ne(r).groupId,
                                g = i && h != u ? d.anonName : d.name;
                            p.nameText.text = g, p.nameTextSet = !0
                        }
                        var y = s.createCircle(p.pos, 1),
                            w = o.insideStructureStairs(y),
                            x = p.layer,
                            f = 12;
                        0 == p.layer && 0 == a.layer && w && (x |= 2, f += 100), l.addPIXIObj(p.container, x, f, p.__id);
                        var b = n.pointToScreen(p.pos),
                            _ = n.pixels(1);
                        p.container.position.set(b.x, b.y), p.container.scale.set(_, _)
                    }
                }
            },
            getDeadBodyById: function(e) {
                for (var t = this.Me.m(), a = 0; a < t.length; a++) {
                    var i = t[a];
                    if (i.active && i.playerId == e) return i
                }
                return null
            }
        }, e.exports = {
            Te: o
        }
    },
    "7510cc08": function(e, t, a) {
        "use strict";
        var i = (a("34e32c48"), a("6b42806d")),
            r = a("ceee80d9"),
            o = a("c2a798c8"),
            n = {
                getBridgeDims: function(e) {
                    var t = r.getBoundingCollider(e),
                        a = i.toAabb(t),
                        n = o.mul(o.sub(a.max, a.min), .5),
                        s = (o.add(a.min, n), n.x > n.y),
                        l = o.create(s ? 1 : 0, s ? 0 : 1);
                    return {
                        length: 2 * o.dot(l, n),
                        width: 2 * o.dot(o.perp(l), n)
                    }
                },
                getBridgeOverlapCollider: function(e, t, a, s) {
                    var l = r.Defs[e],
                        c = n.getBridgeDims(e),
                        m = o.create(1, 0),
                        p = o.add(o.mul(m, 1.5 * c.length), o.mul(o.perp(m), c.width * l.terrain.bridge.nearbyWidthMult)),
                        d = i.createAabbExtents(o.create(0, 0), o.mul(p, .5));
                    return i.transform(d, t, a, s)
                }
            };
        e.exports = n
    },
    "753d6e4b": function(e, t, a) {
        "use strict";

        function i(e) {
            o(void 0 !== e), this.creator = {
                type: e
            }, this.Pe = [], this.activeCount = 0
        }

        function r(e) {
            this.idToObj = {}, this.types = {}, this.seenCount = 0
        }
        var o = a("0e566746"),
            n = a("f398b7c7");
        i.prototype = {
            alloc: function() {
                for (var e = null, t = 0; t < this.Pe.length; t++)
                    if (!this.Pe[t].active) {
                        e = this.Pe[t];
                        break
                    }
                return e || (e = new this.creator.type, this.Pe.push(e)), e.active = !0, e.o(), this.activeCount++, e
            },
            free: function(e) {
                if (e.n(), e.active = !1, this.activeCount--, this.Pe.length > 128 && this.activeCount < this.Pe.length / 2) {
                    for (var t = [], a = 0; a < this.Pe.length; a++) this.Pe[a].active && t.push(this.Pe[a]);
                    this.Pe = t
                }
            },
            m: function() {
                return this.Pe
            }
        }, r.prototype = {
            registerType: function(e, t) {
                this.types[e] = t
            },
            getObjById: function(e) {
                return this.idToObj[e]
            },
            getTypeById: function(e, t) {
                var a = this.getObjById(e);
                if (!a) {
                    var i = {
                        instId: n.instanceId,
                        id: e,
                        ids: Object.keys(this.idToObj),
                        stream: t._view._view
                    };
                    return n.logError("getTypeById" + JSON.stringify(i)), n.storeGeneric("objectPoolErr", "getTypeById"), 0
                }
                return a.__type
            },
            updateObjFull: function(e, t, a, i) {
                var r = this.getObjById(t),
                    o = !1;
                return void 0 === r && (r = this.types[e].alloc(), r.__id = t, r.__type = e, this.idToObj[t] = r, this.seenCount++, o = !0), r.l(a, !0, o, i), r
            },
            updateObjPart: function(e, t, a) {
                var i = this.getObjById(e);
                i ? i.l(t, !1, !1, a) : (console.log("updateObjPart, missing object", e), n.storeGeneric("objectPoolErr", "updateObjPart"))
            },
            deleteObj: function(e) {
                var t = this.getObjById(e);
                void 0 === t ? (console.log("deleteObj, missing object", e), n.storeGeneric("objectPoolErr", "deleteObj")) : (this.types[t.__type].free(t), delete this.idToObj[e])
            }
        }, e.exports = {
            Pool: i,
            Creator: r
        }
    },
    "7aa4bfa8": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-03-02",
                locale: "tr"
            },
            "word-order": "sov",
            "index-slogan": "2d Battle Royale",
            "index-region": "Bölge",
            "index-north-america": "Kuzey Amerika",
            "index-europe": "Avrupa",
            "index-asia": "Asya",
            "index-south-america": "Güney Amerika",
            "index-korea": "Güney Kore",
            "index-players": "oyuncular",
            "index-play-solo": "Tekli oyna",
            "index-play-duo": "İkili oyna",
            "index-play-squad": "Takım oyna",
            "index-create-team": "Takım Oluştur",
            "index-leave-team": "Takımdan Çık",
            "index-joining-team": "Takıma Katılınıyor",
            "index-creating-team": "Takım Oluşturuluyor",
            "index-invite-link": "Davet linki",
            "index-solo": "Tekli",
            "index-duo": "İkili",
            "index-squad": "Takım",
            "index-auto-fill": "Otomatik Oyuncu Seç",
            "index-no-fill": "Otomatik Oyuncu Seçme",
            "index-waiting-for-leader": "Liderin oyunu başlatması bekleniyor",
            "index-play": "Oyna",
            "index-featured-youtuber": "Önerilen Youtuber",
            "index-settings": "Ayarlar",
            "index-high-resolution": "Yüksek Çözünürlük (görsel kaliteyi artırmak için seç)",
            "index-screen-shake": "Ekran sallanması",
            "index-master-volume": "Ana Ses",
            "index-sfx-volume": "Ses Efekti Düzeyi",
            "index-music-volume": "Müzik Sesi",
            "index-mobile-announce": "Şimdi mobilde!",
            "index-mobile-tooltip": "Cihazınızdan <span>surviv.io</span> web sitesine girin!",
            "index-team-is-full": "Takım dolu!",
            "index-failed-joining-team": "Takıma katılım başarısız oldu.",
            "index-failed-creating-team": "Takım oluşturma başarısız oldu.",
            "index-failed-finding-game": "Oyun bulma başarısız oldu.",
            "index-failed-joining-game": "Oyuna katılım başarısız oldu.",
            "index-lost-connection": "Takım bağlantısı koptu.",
            "index-host-closed": "Host bağlantıyı kapattı.",
            "index-invalid-protocol": "Eski istemci sürümü.",
            "index-view-more": "Daha Fazla Gör",
            "index-back-to-main": "Ana Menüye Geri Dön",
            "index-most-kills": "En Çok Öldürmeler",
            "index-total-kills": "Tüm Öldürmeler",
            "index-total-wins": "Tüm Galibiyetler",
            "index-top-5-percent": "En Üst Yüzde 5",
            "index-for": "için",
            "index-kill-death-ratio": "Öldürme-Ölüm oranı",
            "index-today": "Bugün",
            "index-this-week": "Bu Hafta",
            "index-all-time": "Tüm Zamanlar",
            "index-top-100": "En İyi 100",
            "index-rank": "Sıralama",
            "index-player": "Oyuncu",
            "index-total-games": "Tüm oyunlar",
            "index-controls": "Kontroller",
            "index-movement": "Hareket",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Nişan",
            "index-aim-ctrl": "Fare",
            "index-punch": "Yumruk",
            "index-shoot": "Ateş Etme",
            "index-shoot-ctrl": "Sol-Tık",
            "index-change-weapons": "Silah Değiştirme",
            "index-change-weapons-ctrl": "1'den 4'e veya Fare Tekerleği",
            "index-stow-weapons": "Silahları Koy (Yumruk Modu)",
            "index-stow-weapons-ctrl": "3 veya E",
            "index-swap-weapons": "Önceki Silaha Geç",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Yeniden Doldur",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Yakınlaştırma",
            "index-scope-zoom-ctrl": "Yakınlaştırma üzerine sol tıkla",
            "index-pickup": "Al",
            "index-loot": "Yağmala",
            "index-revive": "İyileştir",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Tedavi Eşyası Kullan",
            "index-use-medical-ctrl": "Eşya Üzerine Sol-Tık veya 7'den 0'e kadar",
            "index-drop-item": "Eşyayı At",
            "index-drop-item-ctrl": "Sağ-Tık",
            "index-cancel-action": "Durdur",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Haritayı Göster",
            "index-view-map-ctrl": "M veya G",
            "index-toggle-minimap": "Mini Haritayı Değiştir",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Takım Komut Tekerleğini Kullan",
            "index-use-ping-ctrl": "C'ye basılı tut, sonra Sağ-Tıka basılı tut ve fareyi sürükle, sonra Sağ-Tıkı bırak",
            "index-use-emote": "Emote Tekerini Kullan",
            "index-use-emote-ctrl": "Sağ-Tıka basılı tut ve fareyi sürükle, sonra Sağ-Tıkı bırak",
            "index-how-to-play": "Nasıl Oynanır",
            "index-tips-1-desc": "surviv.io nun amacı son hayatta kalan olmaktır. Bir oyunda sadece bir kere yaşayabilirsin - yeniden doğmka yok!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "Eğer daha önce PUBG, Fortnite veya H1Z1 gibi battle royale oyunlar oynadıysan, sen zaten yolu yarılamışsın! surviv.io'yu 2D PUBG gibi düşün.",
            "index-tips-3": "Yağmala ve Öldür",
            "index-tips-3-desc": "Oyuna basit bir sırt çantası dışında hiçbir öğeyle başlamayacaksın. Ganimet bulmak için haritanın etrafında dolaş: silahlar, cephane, kapsüller ve tıbbi ürünler. Diğer oyuncuları ele ve onların ganimetlerini alabilirsin!",
            "index-tips-4": "Kırmızı = Kötü!",
            "index-tips-4-desc": "Seni incitebilecek tek şey oyuncular değil. Ölümcül kırmızı bölge harita kenarlarından içeri ilerler eğer içene girerseniz giderek daha fazla zarar görürsünüz. Haritaya bakmayı unutma ve güvende kal.",
            "game-alive": "Hayatta",
            "game-reloading": "Yeniden Dolduruluyor",
            "game-using": "Kullanılıyor",
            "game-reviving": "İyileştiriliyor",
            "game-revive-teammate": "Takım Arkadaşını İyileştir",
            "game-equip": "Kuşan",
            "game-cancel": "İptal et",
            "game-open-door": "Kapıyı aç",
            "game-close-door": "Kapıyı kapat",
            "game-You": "Sen",
            "game-you": "sen",
            "game-themselves": "kendisini",
            "game-yourself": "kendini",
            "game-you-died": "Öldün",
            "game-player-died": "öldü",
            "game-with": "ile",
            "game-knocked-out": "düştü",
            "game-killed": "öldürdü",
            "game-finally-killed": "sonunda öldürdü",
            "game-finally-bled-out": "sonunda kan kaybederek öldü",
            "game-died-outside": "güvenli bölgenin dışında öldü",
            "game-the-red-zone": "Kırmızı alan",
            "game-waiting-for-players": "Oyuncular bekleniyor",
            "game-spectating": "İzleniyor",
            "game-red-zone-advances": "Kırmızı alan içinde geliyor",
            "game-red-zone-advancing": "Kırmızı alan geliyor, güvenli bölgeye git!",
            "game-seconds": "saniyeler",
            "game-minutes": "dakikalar",
            "game-minute": "dakika",
            "game-m": "dk",
            "game-s": "sn",
            "game-not-enough-space": "Yeterli alan yok!",
            "game-item-already-owned": "Eşyaya zaten sahipsin!",
            "game-item-already-equipped": "Eşya zaten kuşanılmış!",
            "game-better-item-equipped": "Daha iyi eşya kuşanıldı!",
            "game-play-new-game": "Yeni Oyun Oyna",
            "game-spectate": "Seyret",
            "game-full-screen": "Tam Ekran",
            "game-sound": "Ses",
            "game-quit-game": "Oyundan Çık",
            "game-return-to-game": "Oyuna Geri Dön",
            "game-hide-match-stats": "Oyun İstatistiklerini Gizle",
            "game-view-match-stats": "Oyun İstatistiklerini Göster",
            "game-previous-teammate": "Önceki Takım Arkadaşı",
            "game-next-teammate": "Sonraki Takım Arkadaşı",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "Oyundan Ayrıl",
            "game-your-results": "Skorun",
            "game-chicken": "Hadi yine iyisin akşama tavuk var!",
            "game-won-the-game": "oyunu kazandı",
            "game-team-eliminated": "Takımınız yenildi.",
            "game-rank": "Sıralama",
            "game-team-rank": "Takım Sırası",
            "game-team-kills": "Takım Öldürmeleri",
            "game-kill": "Öldürme",
            "game-kills": "Öldürme",
            "game-damage-dealt": "Verilen Hasar",
            "game-damage-taken": "Alınan Hasar",
            "game-survived": "Hayatta Kaldı",
            "game-backpack00": "Torba",
            "game-backpack01": "Küçük Çanta",
            "game-backpack02": "Normal Çanta",
            "game-backpack03": "Askeri Çanta",
            "game-bandage": "Bandaj",
            "game-bandage-tooltip": "15 sağlık iyileşmek için sol tıkla.",
            "game-healing-tooltip": "75 sağlıktan sonra iyileştiremez.",
            "game-healthkit": "İlk Yardım Seti",
            "game-healthkit-tooltip": "100 sağlık iyileşmek için sol tıkla.",
            "game-soda": "Soda",
            "game-soda-tooltip": "25 adrenalin basmak için sol tıkla.",
            "game-adrenaline-tooltip": "Adrenalin, zamanla sağlığı düzeltir.",
            "game-painkiller": "Haplar",
            "game-painkiller-tooltip": "50 adrenalin basmak için sol tıkla.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 ve Vector için cephane.",
            "game-12gauge": "12 kalibre",
            "game-12gauge-tooltip": "M870, M1100, SPAS-12, Saiga-12 ve MP220 için cephane.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, OT-38 ve DP-28 için cephane.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "FAMAS, M416, M4A1-S, Mk 12 ve M249 için cephane.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "DEagle 50 için cephane.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "AWM-S için cephane.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Flare Gun için cephane.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "M1911, M1A1, Model 94 ve Peacemaker için cephane.",
            "game-chest01": "Seviye 1 Zırh",
            "game-chest02": "Seviye 2 Zırh",
            "game-chest03": "Seviye 3 Zırh",
            "game-helmet01": "Seviye 1 Kask",
            "game-helmet02": "Seviye 2 Kask",
            "game-helmet03": "Seviye 3 Kask",
            "game-1xscope": "1x Dürbün",
            "game-2xscope": "2x Dürbün",
            "game-4xscope": "4x Dürbün",
            "game-8xscope": "8x Dürbün",
            "game-15xscope": "15x Dürbün",
            "game-level-1": "Svy. 1",
            "game-level-2": "Svy. 2",
            "game-level-3": "Svy. 3",
            "game-level-4": "Svy. 4",
            "game-outfitBase": "Basit Kıyafet",
            "game-outfitWoodland": "Orman Savaşı",
            "game-outfitRoyalFortune": "Asil Servet",
            "game-outfitKeyLime": "Misket Limonu",
            "game-outfitCobaltShell": "Kobalt Kabuğu",
            "game-outfitCarbonFiber": "Karbonfiber",
            "game-outfitDarkGloves": "Profosyonel",
            "game-outfitGhillie": "Komando",
            "game-outfitCamo": "Kamuflaj",
            "game-outfitRed": "Atış Talimi",
            "game-outfitWhite": "Buzul Yenilmezi",
            "game-fists": "Yumruk",
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
            "game-famas": "FAMAS",
            "game-hk416": "M416",
            "game-mk12": "Mk 12 SPR",
            "game-m249": "M249",
            "game-frag": "El Bombası",
            "game-hud-frag": "El Bombası",
            "game-smoke": "Sis Bombası",
            "game-hud-smoke": "Sis Bombası",
            "game-potato": "Patates",
            "game-hud-potato": "Patates",
            "game-potato_heavy": "Patates",
            "game-barrel_01": "Varil",
            "game-silo_01": "Ambar",
            "game-oven_01": "ocak",
            "index-play-50v50": "50v50 oyna",
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
    "7b5bbf6e": function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t, a) {
            var i = t.length,
                r = void 0,
                o = void 0,
                n = void 0,
                s = void 0,
                l = void 0;
            return a ? (e = c.fmod(e, 1), r = ~~(e * (i - 1)), n = r, s = (n + 1) % (i - 1), o = n > 0 ? n - 1 : i - 2, l = (s + 1) % (i - 1)) : (e = c.clamp(e, 0, 1), r = ~~(e * (i - 1)), n = r == i - 1 ? r - 1 : r, s = n + 1, o = n > 0 ? n - 1 : n, l = s < i - 1 ? s + 1 : s), {
                pt: e * (i - 1) - n,
                p0: t[o],
                p1: t[n],
                p2: t[s],
                p3: t[l]
            }
        }

        function o(e, t, a, i, r) {
            return .5 * (2 * a + e * (-t + i) + e * e * (2 * t - 5 * a + 4 * i - r) + e * e * e * (3 * a - t - 3 * i + r))
        }

        function n(e, t, a, i, r) {
            return .5 * (-t + i + 2 * e * (2 * t - 5 * a + 4 * i - r) + 3 * e * e * (3 * a - t - 3 * i + r))
        }
        var s = function() {
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
            l = a("0e566746"),
            c = a("10899aea"),
            m = a("c2a798c8"),
            p = function() {
                function e(t, a) {
                    i(this, e), l(t.length > 1), this.points = [], this.arcLens = [], this.totalArcLen = 0, this.looped = a;
                    for (var r = 0; r < t.length; r++) this.points.push(m.copy(t[r]));
                    for (var o = 4 * t.length, n = this.points[0], s = 0; s <= o; s++) {
                        var c = s / o,
                            p = this.getPos(c),
                            d = 0 == s ? 0 : this.arcLens[s - 1];
                        this.arcLens[s] = d + m.length(m.sub(p, n)), n = m.copy(p)
                    }
                    this.totalArcLen = this.arcLens[this.arcLens.length - 1]
                }
                return s(e, [{
                    key: "getPos",
                    value: function(e) {
                        var t = r(e, this.points, this.looped),
                            a = t.pt,
                            i = t.p0,
                            n = t.p1,
                            s = t.p2,
                            l = t.p3;
                        return m.create(o(a, i.x, n.x, s.x, l.x), o(a, i.y, n.y, s.y, l.y))
                    }
                }, {
                    key: "getTangent",
                    value: function(e) {
                        var t = r(e, this.points, this.looped),
                            a = t.pt,
                            i = t.p0,
                            o = t.p1,
                            s = t.p2,
                            l = t.p3;
                        return m.create(n(a, i.x, o.x, s.x, l.x), n(a, i.y, o.y, s.y, l.y))
                    }
                }, {
                    key: "getNormal",
                    value: function(e) {
                        var t = this.getTangent(e);
                        return m.perp(m.normalizeSafe(t, m.create(1, 0)))
                    }
                }, {
                    key: "getClosestTtoPoint",
                    value: function(e) {
                        for (var t = Number.MAX_VALUE, a = 0, i = 0; i < this.points.length - 1; i++) {
                            var r = c.distToSegmentSq(e, this.points[i], this.points[i + 1]);
                            r < t && (t = r, a = i)
                        }
                        for (var o = a, n = o + 1, s = this.points[o], l = this.points[n], p = m.sub(l, s), d = c.clamp(m.dot(m.sub(e, s), p) / m.dot(p, p), 0, 1), h = this.points.length - 1, u = c.clamp((o + d - .1) / h, 0, 1), g = c.clamp((o + d + .1) / h, 0, 1), y = (o + d) / h, w = Number.MAX_VALUE, x = 0; x <= 8; x++) {
                            var f = c.lerp(x / 8, u, g),
                                b = this.getPos(f),
                                _ = m.lengthSqr(m.sub(b, e));
                            _ < w && (y = f, w = _)
                        }
                        var S = this.getTangent(y),
                            k = m.length(S);
                        if (k > 0) {
                            var v = this.getPos(y),
                                z = m.dot(S, m.sub(e, v)) / k,
                                M = y + z / (k * h);
                            m.lengthSqr(m.sub(e, this.getPos(M))) < m.lengthSqr(m.sub(e, v)) && (y = M)
                        }
                        return y
                    }
                }, {
                    key: "getTfromArcLen",
                    value: function(e) {
                        e = c.clamp(e, 0, this.totalArcLen);
                        for (var t = 0; e > this.arcLens[t];) t++;
                        if (0 == t) return 0;
                        var a = c.delerp(e, this.arcLens[t - 1], this.arcLens[t]),
                            i = this.arcLens.length - 1,
                            r = (t - 1) / i,
                            o = t / i;
                        return c.lerp(a, r, o)
                    }
                }, {
                    key: "getArcLen",
                    value: function(e) {
                        e = c.clamp(e, 0, 1);
                        var t = this.arcLens.length - 1,
                            a = Math.floor(e * t),
                            i = a < t - 1 ? a + 1 : a,
                            r = c.fmod(e, 1 / t) / (1 / t);
                        return c.lerp(r, this.arcLens[a], this.arcLens[i])
                    }
                }]), e
            }();
        e.exports = p
    },
    "7d64d541": function(e, t, a) {
        "use strict";

        function i() {
            this.acceptedLocales = ["da", "de", "en", "es", "fr", "it", "jp", "ko", "nl", "pl", "pt", "ru", "sv", "th", "tr", "vn", "zh-cn", "zh-tw"], this.translations = {};
            for (var e = 0; e < this.acceptedLocales.length; e++) {
                var t = this.acceptedLocales[e],
                    i = {};
                try {
                    i = a("fac69c0a")("./" + t + ".js")
                } catch (e) {
                    console.log("localization not found", t)
                }
                this.translations[t] = i
            }
            this.locale = "en"
        }
        var r = a("8ee62bea"),
            o = a("ce29f17f");
        i.prototype = {
            setLocale: function(e) {
                this.locale = -1 != this.acceptedLocales.indexOf(e) ? e : "en"
            },
            getLocale: function() {
                return this.locale
            },
            translate: function(e) {
                return this.translations[this.locale][e] || this.translations.en[e] || ""
            },
            localizeIndex: function() {
                var e = this;
                r("*[data-l10n]").each(function(t, a) {
                    var i = r(a),
                        n = i.attr("data-l10n");
                    i.hasClass("help-control") && o.touch && (n += "-touch");
                    var s = e.translate(n);
                    if (s) {
                        if (i.attr("label")) return i.attr("label", s), !0;
                        i.html(s), i.attr("data-label") && i.attr("data-label", s)
                    }
                })
            }
        }, e.exports = i
    },
    "81a1fce4": function(e, t) {
        ! function(e) {
            if (!e.hasInitialised) {
                var t = {
                    escapeRegExp: function(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    hasClass: function(e, t) {
                        var a = " ";
                        return 1 === e.nodeType && (a + e.className + a).replace(/[\n\t]/g, a).indexOf(a + t + a) >= 0
                    },
                    addClass: function(e, t) {
                        e.className += " " + t
                    },
                    removeClass: function(e, t) {
                        var a = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
                        e.className = e.className.replace(a, "")
                    },
                    interpolateString: function(e, t) {
                        var a = /{{([a-z][a-z0-9\-_]*)}}/gi;
                        return e.replace(a, function(e) {
                            return t(arguments[1]) || ""
                        })
                    },
                    getCookie: function(e) {
                        var t = "; " + document.cookie,
                            a = t.split("; " + e + "=");
                        return 2 != a.length ? void 0 : a.pop().split(";").shift()
                    },
                    setCookie: function(e, t, a, i, r) {
                        var o = new Date;
                        o.setDate(o.getDate() + (a || 365));
                        var n = [e + "=" + t, "expires=" + o.toUTCString(), "path=" + (r || "/")];
                        i && n.push("domain=" + i), document.cookie = n.join(";")
                    },
                    deepExtend: function(e, t) {
                        for (var a in t) t.hasOwnProperty(a) && (a in e && this.isPlainObject(e[a]) && this.isPlainObject(t[a]) ? this.deepExtend(e[a], t[a]) : e[a] = t[a]);
                        return e
                    },
                    throttle: function(e, t) {
                        var a = !1;
                        return function() {
                            a || (e.apply(this, arguments), a = !0, setTimeout(function() {
                                a = !1
                            }, t))
                        }
                    },
                    hash: function(e) {
                        var t, a, i, r = 0;
                        if (0 === e.length) return r;
                        for (t = 0, i = e.length; t < i; ++t) a = e.charCodeAt(t), r = (r << 5) - r + a, r |= 0;
                        return r
                    },
                    normaliseHex: function(e) {
                        return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
                    },
                    getContrast: function(e) {
                        return e = this.normaliseHex(e), (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 >= 128 ? "#000" : "#fff"
                    },
                    getLuminance: function(e) {
                        var t = parseInt(this.normaliseHex(e), 16),
                            a = 38 + (t >> 16),
                            i = 38 + (t >> 8 & 255),
                            r = 38 + (255 & t);
                        return "#" + (16777216 + 65536 * (a < 255 ? a < 1 ? 0 : a : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (r < 255 ? r < 1 ? 0 : r : 255)).toString(16).slice(1)
                    },
                    isMobile: function() {
                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    },
                    isPlainObject: function(e) {
                        return "object" == typeof e && null !== e && e.constructor == Object
                    }
                };
                e.status = {
                    deny: "deny",
                    allow: "allow",
                    dismiss: "dismiss"
                }, e.transitionEnd = function() {
                    var e = document.createElement("div"),
                        t = {
                            t: "transitionend",
                            OT: "oTransitionEnd",
                            msT: "MSTransitionEnd",
                            MozT: "transitionend",
                            WebkitT: "webkitTransitionEnd"
                        };
                    for (var a in t)
                        if (t.hasOwnProperty(a) && void 0 !== e.style[a + "ransition"]) return t[a];
                    return ""
                }(), e.hasTransition = !!e.transitionEnd;
                var a = Object.keys(e.status).map(t.escapeRegExp);
                e.customStyles = {}, e.Popup = function() {
                    function i() {
                        this.initialise.apply(this, arguments)
                    }

                    function r(e) {
                        this.openingTimeout = null, t.removeClass(e, "cc-invisible")
                    }

                    function o(t) {
                        t.style.display = "none", t.removeEventListener(e.transitionEnd, this.afterTransition), this.afterTransition = null
                    }

                    function n() {
                        var t = this.options.onInitialise.bind(this);
                        if (!window.navigator.cookieEnabled) return t(e.status.deny), !0;
                        if (window.CookiesOK || window.navigator.CookiesOK) return t(e.status.allow), !0;
                        var a = Object.keys(e.status),
                            i = this.getStatus(),
                            r = a.indexOf(i) >= 0;
                        return r && t(i), r
                    }

                    function s() {
                        var e = this.options.position.split("-"),
                            t = [];
                        return e.forEach(function(e) {
                            t.push("cc-" + e)
                        }), t
                    }

                    function l() {
                        var e = this.options,
                            a = "top" == e.position || "bottom" == e.position ? "banner" : "floating";
                        t.isMobile() && (a = "floating");
                        var i = ["cc-" + a, "cc-type-" + e.type, "cc-theme-" + e.theme];
                        return e.static && i.push("cc-static"), i.push.apply(i, s.call(this)), d.call(this, this.options.palette), this.customStyleSelector && i.push(this.customStyleSelector), i
                    }

                    function c() {
                        var e = {},
                            a = this.options;
                        a.showLink || (a.elements.link = "", a.elements.messagelink = a.elements.message), Object.keys(a.elements).forEach(function(i) {
                            e[i] = t.interpolateString(a.elements[i], function(e) {
                                var t = a.content[e];
                                return e && "string" == typeof t && t.length ? t : ""
                            })
                        });
                        var i = a.compliance[a.type];
                        i || (i = a.compliance.info), e.compliance = t.interpolateString(i, function(t) {
                            return e[t]
                        });
                        var r = a.layouts[a.layout];
                        return r || (r = a.layouts.basic), t.interpolateString(r, function(t) {
                            return e[t]
                        })
                    }

                    function m(a) {
                        var i = this.options,
                            r = document.createElement("div"),
                            o = i.container && 1 === i.container.nodeType ? i.container : document.body;
                        r.innerHTML = a;
                        var n = r.children[0];
                        return n.style.display = "none", t.hasClass(n, "cc-window") && e.hasTransition && t.addClass(n, "cc-invisible"), this.onButtonClick = p.bind(this), n.addEventListener("click", this.onButtonClick), i.autoAttach && (o.firstChild ? o.insertBefore(n, o.firstChild) : o.appendChild(n)), n
                    }

                    function p(i) {
                        var r = i.target;
                        if (t.hasClass(r, "cc-btn")) {
                            var o = r.className.match(new RegExp("\\bcc-(" + a.join("|") + ")\\b")),
                                n = o && o[1] || !1;
                            n && (this.setStatus(n), this.close(!0))
                        }
                        t.hasClass(r, "cc-close") && (this.setStatus(e.status.dismiss), this.close(!0)), t.hasClass(r, "cc-revoke") && this.revokeChoice()
                    }

                    function d(e) {
                        var a = t.hash(JSON.stringify(e)),
                            i = "cc-color-override-" + a,
                            r = t.isPlainObject(e);
                        return this.customStyleSelector = r ? i : null, r && h(a, e, "." + i), r
                    }

                    function h(a, i, r) {
                        if (e.customStyles[a]) return void++e.customStyles[a].references;
                        var o = {},
                            n = i.popup,
                            s = i.button,
                            l = i.highlight;
                        n && (n.text = n.text ? n.text : t.getContrast(n.background), n.link = n.link ? n.link : n.text, o[r + ".cc-window"] = ["color: " + n.text, "background-color: " + n.background], o[r + ".cc-revoke"] = ["color: " + n.text, "background-color: " + n.background], o[r + " .cc-link," + r + " .cc-link:active," + r + " .cc-link:visited"] = ["color: " + n.link], s && (s.text = s.text ? s.text : t.getContrast(s.background), s.border = s.border ? s.border : "transparent", o[r + " .cc-btn"] = ["color: " + s.text, "border-color: " + s.border, "background-color: " + s.background], "transparent" != s.background && (o[r + " .cc-btn:hover, " + r + " .cc-btn:focus"] = ["background-color: " + u(s.background)]), l ? (l.text = l.text ? l.text : t.getContrast(l.background), l.border = l.border ? l.border : "transparent", o[r + " .cc-highlight .cc-btn:first-child"] = ["color: " + l.text, "border-color: " + l.border, "background-color: " + l.background]) : o[r + " .cc-highlight .cc-btn:first-child"] = ["color: " + n.text]));
                        var c = document.createElement("style");
                        document.head.appendChild(c), e.customStyles[a] = {
                            references: 1,
                            element: c.sheet
                        };
                        var m = -1;
                        for (var p in o) o.hasOwnProperty(p) && c.sheet.insertRule(p + "{" + o[p].join(";") + "}", ++m)
                    }

                    function u(e) {
                        return e = t.normaliseHex(e), "000000" == e ? "#222" : t.getLuminance(e)
                    }

                    function g(a) {
                        if (t.isPlainObject(a)) {
                            var i = t.hash(JSON.stringify(a)),
                                r = e.customStyles[i];
                            if (r && !--r.references) {
                                var o = r.element.ownerNode;
                                o && o.parentNode && o.parentNode.removeChild(o), e.customStyles[i] = null
                            }
                        }
                    }

                    function y(e, t) {
                        for (var a = 0, i = e.length; a < i; ++a) {
                            var r = e[a];
                            if (r instanceof RegExp && r.test(t) || "string" == typeof r && r.length && r === t) return !0
                        }
                        return !1
                    }

                    function w() {
                        var t = this.setStatus.bind(this),
                            a = this.options.dismissOnTimeout;
                        "number" == typeof a && a >= 0 && (this.dismissTimeout = window.setTimeout(function() {
                            t(e.status.dismiss)
                        }, Math.floor(a)));
                        var i = this.options.dismissOnScroll;
                        if ("number" == typeof i && i >= 0) {
                            var r = function(a) {
                                window.pageYOffset > Math.floor(i) && (t(e.status.dismiss), window.removeEventListener("scroll", r), this.onWindowScroll = null)
                            };
                            this.onWindowScroll = r, window.addEventListener("scroll", r)
                        }
                    }
                    var x = {
                        enabled: !0,
                        container: null,
                        cookie: {
                            name: "cookieconsent_status",
                            path: "/",
                            domain: "",
                            expiryDays: 365
                        },
                        onPopupOpen: function() {},
                        onPopupClose: function() {},
                        onInitialise: function(e) {},
                        onStatusChange: function(e, t) {},
                        onRevokeChoice: function() {},
                        content: {
                            header: "Cookies used on the website!",
                            message: "This website uses cookies to ensure you get the best experience on our website.",
                            dismiss: "Got it!",
                            allow: "Allow cookies",
                            deny: "Decline",
                            link: "Learn more",
                            href: "http://cookiesandyou.com",
                            close: "&#x274c;"
                        },
                        elements: {
                            header: '<span class="cc-header">{{header}}</span>&nbsp;',
                            message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                            messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="btn-cookie-settings cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="_blank">{{link}}</a></span>',
                            dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
                            allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                            deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                            link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
                            close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
                        },
                        window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
                        revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',
                        compliance: {
                            info: '<div class="cc-compliance">{{dismiss}}</div>',
                            "opt-in": '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
                            "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>'
                        },
                        type: "info",
                        layouts: {
                            basic: "{{messagelink}}{{compliance}}",
                            "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                            "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
                        },
                        layout: "basic",
                        position: "bottom",
                        theme: "block",
                        static: !1,
                        palette: null,
                        revokable: !1,
                        animateRevokable: !0,
                        showLink: !0,
                        dismissOnScroll: !1,
                        dismissOnTimeout: !1,
                        autoOpen: !0,
                        autoAttach: !0,
                        whitelistPage: [],
                        blacklistPage: [],
                        overrideHTML: null
                    };
                    return i.prototype.initialise = function(e) {
                        this.options && this.destroy(), t.deepExtend(this.options = {}, x), t.isPlainObject(e) && t.deepExtend(this.options, e), n.call(this) && (this.options.enabled = !1), y(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), y(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
                        var a = this.options.window.replace("{{classes}}", l.call(this).join(" ")).replace("{{children}}", c.call(this)),
                            i = this.options.overrideHTML;
                        if ("string" == typeof i && i.length && (a = i), this.options.static) {
                            var r = m.call(this, '<div class="cc-grower">' + a + "</div>");
                            r.style.display = "", this.element = r.firstChild, this.element.style.display = "none", t.addClass(this.element, "cc-invisible")
                        } else this.element = m.call(this, a);
                        w.call(this), this.options.autoOpen && this.autoOpen()
                    }, i.prototype.destroy = function() {
                        this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null, g(this.options.palette), this.options = null
                    }, i.prototype.open = function(t) {
                        if (this.element) return this.isOpen() || (e.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
                    }, i.prototype.close = function(t) {
                        if (this.element) return this.isOpen() && (e.hasTransition ? this.fadeOut() : this.element.style.display = "none", t && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
                    }, i.prototype.fadeIn = function() {
                        var a = this.element;
                        if (e.hasTransition && a && (this.afterTransition && o.call(this, a), t.hasClass(a, "cc-invisible"))) {
                            if (a.style.display = "", this.options.static) {
                                var i = this.element.clientHeight;
                                this.element.parentNode.style.maxHeight = i + "px"
                            }
                            this.openingTimeout = setTimeout(r.bind(this, a), 20)
                        }
                    }, i.prototype.fadeOut = function() {
                        var a = this.element;
                        e.hasTransition && a && (this.openingTimeout && (clearTimeout(this.openingTimeout), r.bind(this, a)), t.hasClass(a, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = o.bind(this, a), a.addEventListener(e.transitionEnd, this.afterTransition), t.addClass(a, "cc-invisible")))
                    }, i.prototype.isOpen = function() {
                        return this.element && "" == this.element.style.display && (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
                    }, i.prototype.toggleRevokeButton = function(e) {
                        this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
                    }, i.prototype.revokeChoice = function(e) {
                        this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
                    }, i.prototype.hasAnswered = function(t) {
                        return Object.keys(e.status).indexOf(this.getStatus()) >= 0
                    }, i.prototype.hasConsented = function(t) {
                        var a = this.getStatus();
                        return a == e.status.allow || a == e.status.dismiss
                    }, i.prototype.autoOpen = function(e) {
                        !this.hasAnswered() && this.options.enabled && this.open()
                    }, i.prototype.setStatus = function(a) {
                        var i = this.options.cookie,
                            r = t.getCookie(i.name),
                            o = Object.keys(e.status).indexOf(r) >= 0;
                        Object.keys(e.status).indexOf(a) >= 0 ? (t.setCookie(i.name, a, i.expiryDays, i.domain, i.path), this.options.onStatusChange.call(this, a, o)) : this.clearStatus()
                    }, i.prototype.getStatus = function() {
                        return t.getCookie(this.options.cookie.name)
                    }, i.prototype.clearStatus = function() {
                        var e = this.options.cookie;
                        t.setCookie(e.name, "", -1, e.domain, e.path)
                    }, i
                }(), e.Location = function() {
                    function e(e) {
                        t.deepExtend(this.options = {}, o), t.isPlainObject(e) && t.deepExtend(this.options, e), this.currentServiceIndex = -1
                    }

                    function a(e, t, a) {
                        var i, r = document.createElement("script");
                        r.type = "text/" + (e.type || "javascript"), r.src = e.src || e, r.async = !1, r.onreadystatechange = r.onload = function() {
                            var e = r.readyState;
                            clearTimeout(i), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), r.onreadystatechange = r.onload = null)
                        }, document.body.appendChild(r), i = setTimeout(function() {
                            t.done = !0, t(), r.onreadystatechange = r.onload = null
                        }, a)
                    }

                    function i(e, t, a, i, r) {
                        var o = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
                        if (o.open(i ? "POST" : "GET", e, 1), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(r))
                            for (var n = 0, s = r.length; n < s; ++n) {
                                var l = r[n].split(":", 2);
                                o.setRequestHeader(l[0].replace(/^\s+|\s+$/g, ""), l[1].replace(/^\s+|\s+$/g, ""))
                            }
                        "function" == typeof t && (o.onreadystatechange = function() {
                            o.readyState > 3 && t(o)
                        }), o.send(i)
                    }

                    function r(e) {
                        return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
                    }
                    var o = {
                        timeout: 5e3,
                        services: ["freegeoip", "ipinfo", "maxmind"],
                        serviceDefinitions: {
                            freegeoip: function() {
                                return {
                                    url: "//freegeoip.net/json/?callback={callback}",
                                    isScript: !0,
                                    callback: function(e, t) {
                                        try {
                                            var a = JSON.parse(t);
                                            return a.error ? r(a) : {
                                                code: a.country_code
                                            }
                                        } catch (e) {
                                            return r({
                                                error: "Invalid response (" + e + ")"
                                            })
                                        }
                                    }
                                }
                            },
                            ipinfo: function() {
                                return {
                                    url: "//ipinfo.io",
                                    headers: ["Accept: application/json"],
                                    callback: function(e, t) {
                                        try {
                                            var a = JSON.parse(t);
                                            return a.error ? r(a) : {
                                                code: a.country
                                            }
                                        } catch (e) {
                                            return r({
                                                error: "Invalid response (" + e + ")"
                                            })
                                        }
                                    }
                                }
                            },
                            ipinfodb: function(e) {
                                return {
                                    url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                                    isScript: !0,
                                    callback: function(e, t) {
                                        try {
                                            var a = JSON.parse(t);
                                            return "ERROR" == a.statusCode ? r({
                                                error: a.statusMessage
                                            }) : {
                                                code: a.countryCode
                                            }
                                        } catch (e) {
                                            return r({
                                                error: "Invalid response (" + e + ")"
                                            })
                                        }
                                    }
                                }
                            },
                            maxmind: function() {
                                return {
                                    url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                                    isScript: !0,
                                    callback: function(e) {
                                        if (!window.geoip2) return void e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"));
                                        geoip2.country(function(t) {
                                            try {
                                                e({
                                                    code: t.country.iso_code
                                                })
                                            } catch (t) {
                                                e(r(t))
                                            }
                                        }, function(t) {
                                            e(r(t))
                                        })
                                    }
                                }
                            }
                        }
                    };
                    return e.prototype.getNextService = function() {
                        var e;
                        do {
                            e = this.getServiceByIdx(++this.currentServiceIndex)
                        } while (this.currentServiceIndex < this.options.services.length && !e);
                        return e
                    }, e.prototype.getServiceByIdx = function(e) {
                        var a = this.options.services[e];
                        if ("function" == typeof a) {
                            var i = a();
                            return i.name && t.deepExtend(i, this.options.serviceDefinitions[i.name](i)), i
                        }
                        return "string" == typeof a ? this.options.serviceDefinitions[a]() : t.isPlainObject(a) ? this.options.serviceDefinitions[a.name](a) : null
                    }, e.prototype.locate = function(e, t) {
                        var a = this.getNextService();
                        if (!a) return void t(new Error("No services to run"));
                        this.callbackComplete = e, this.callbackError = t, this.runService(a, this.runNextServiceOnError.bind(this))
                    }, e.prototype.setupUrl = function(e) {
                        var t = this.getCurrentServiceOpts();
                        return e.url.replace(/\{(.*?)\}/g, function(a, i) {
                            if ("callback" === i) {
                                var r = "callback" + Date.now();
                                return window[r] = function(t) {
                                    e.__JSONP_DATA = JSON.stringify(t)
                                }, r
                            }
                            if (i in t.interpolateUrl) return t.interpolateUrl[i]
                        })
                    }, e.prototype.runService = function(e, t) {
                        var r = this;
                        e && e.url && e.callback && (e.isScript ? a : i)(this.setupUrl(e), function(a) {
                            var i = a ? a.responseText : "";
                            e.__JSONP_DATA && (i = e.__JSONP_DATA, delete e.__JSONP_DATA), r.runServiceCallback.call(r, t, e, i)
                        }, this.options.timeout, e.data, e.headers)
                    }, e.prototype.runServiceCallback = function(e, t, a) {
                        var i = this,
                            r = function(t) {
                                o || i.onServiceResult.call(i, e, t)
                            },
                            o = t.callback(r, a);
                        o && this.onServiceResult.call(this, e, o)
                    }, e.prototype.onServiceResult = function(e, t) {
                        t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
                    }, e.prototype.runNextServiceOnError = function(e, t) {
                        if (e) {
                            this.logError(e);
                            var a = this.getNextService();
                            a ? this.runService(a, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
                        } else this.completeService.call(this, this.callbackComplete, t)
                    }, e.prototype.getCurrentServiceOpts = function() {
                        var e = this.options.services[this.currentServiceIndex];
                        return "string" == typeof e ? {
                            name: e
                        } : "function" == typeof e ? e() : t.isPlainObject(e) ? e : {}
                    }, e.prototype.completeService = function(e, t) {
                        this.currentServiceIndex = -1, e && e(t)
                    }, e.prototype.logError = function(e) {
                        var t = this.currentServiceIndex,
                            a = this.getServiceByIdx(t);
                        console.error("The service[" + t + "] (" + a.url + ") responded with the following error", e)
                    }, e
                }(), e.Law = function() {
                    function e(e) {
                        this.initialise.apply(this, arguments)
                    }
                    var a = {
                        regionalLaw: !0,
                        hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "UK"],
                        revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
                        explicitAction: ["HR", "IT", "ES"]
                    };
                    return e.prototype.initialise = function(e) {
                        t.deepExtend(this.options = {}, a), t.isPlainObject(e) && t.deepExtend(this.options, e)
                    }, e.prototype.get = function(e) {
                        var t = this.options;
                        return {
                            hasLaw: t.hasLaw.indexOf(e) >= 0,
                            revokable: t.revokable.indexOf(e) >= 0,
                            explicitAction: t.explicitAction.indexOf(e) >= 0
                        }
                    }, e.prototype.applyLaw = function(e, t) {
                        var a = this.get(t);
                        return a.hasLaw || (e.enabled = !1), this.options.regionalLaw && (a.revokable && (e.revokable = !0), a.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
                    }, e
                }(), e.initialise = function(t, a, i) {
                    var r = new e.Law(t.law);
                    a || (a = function() {}), i || (i = function() {}), e.getCountryCode(t, function(i) {
                        delete t.law, delete t.location, i.code && (t = r.applyLaw(t, i.code)), a(new e.Popup(t))
                    }, function(a) {
                        delete t.law, delete t.location, i(a, new e.Popup(t))
                    })
                }, e.getCountryCode = function(t, a, i) {
                    return t.law && t.law.countryCode ? void a({
                        code: t.law.countryCode
                    }) : t.location ? void new e.Location(t.location).locate(function(e) {
                        a(e || {})
                    }, i) : void a({})
                }, e.utils = t, e.hasInitialised = !0, window.cookieconsent = e
            }
        }(window.cookieconsent || {})
    },
    "8649e148": function(e, t, a) {
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
            o = a("0e566746"),
            n = {
                Invalid: 0,
                Player: 1,
                Obstacle: 2,
                Loot: 3,
                LootSpawner: 4,
                DeadBody: 5,
                Building: 6,
                Structure: 7,
                Decal: 8,
                Projectile: 9,
                Smoke: 10,
                Airdrop: 11
            },
            s = 65535,
            l = function() {
                function e() {
                    i(this, e), this.objects = [], this.idToObj = [];
                    for (var t = 0; t < s; t++) this.idToObj[t] = null;
                    this.idToType = new Uint8Array(s), this.dirtyPart = new Uint8Array(s), this.dirtyFull = new Uint8Array(s), this.idNext = 1, this.freeLists = {}
                }
                return r(e, [{
                    key: "allocId",
                    value: function(e) {
                        var t = 1;
                        if (this.idNext < s) t = this.idNext++;
                        else {
                            var a = this.freeLists[e] || [];
                            a.length > 0 ? t = a.shift() : o(!1)
                        }
                        return t
                    }
                }, {
                    key: "freeId",
                    value: function(e, t) {
                        this.freeLists[e] = this.freeLists[e] || [], this.freeLists[e].push(t)
                    }
                }, {
                    key: "register",
                    value: function(e, t) {
                        var a = this.allocId(t);
                        e.__id = a, e.__type = t, e.__arrayIdx = this.objects.length, this.objects[e.__arrayIdx] = e, this.idToObj[a] = e, this.idToType[a] = t, this.dirtyPart[a] = 1, this.dirtyFull[a] = 1
                    }
                }, {
                    key: "unregister",
                    value: function(e) {
                        o(e.__id > 0);
                        var t = this.objects.pop();
                        e !== t && (this.objects[e.__arrayIdx] = t, t.__arrayIdx = e.__arrayIdx), this.idToObj[e.__id] = null, this.freeId(e.__type, e.__id), this.idToType[e.__id] = 0, this.dirtyPart[e.__id] = 0, this.dirtyFull[e.__id] = 0, e.__id = 0, e.__type = 0
                    }
                }]), e
            }();
        e.exports = {
            MAX_ID: s,
            Type: n,
            Registrar: l
        }
    },
    "8f9fd353": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-03-17",
                locale: "da"
            },
            "word-order": "svo",
            "index-create-account": "Opret Profil",
            "index-set-account-name": "Vælg profil navn",
            "index-enter-name": "Indtast navn",
            "index-finish": "Færdig",
            "index-delete-account": "Slet Profil",
            "index-delete-account-desc": 'Indtast "DELETE" for at slette din profil:',
            "index-confirm": "Bekræft",
            "index-customize-avatar": "Tilpas Avatar",
            "index-done": "Færdig",
            "index-account": "Profil",
            "index-log-in-with": "Log ind med",
            "index-facebook": "Facebook",
            "index-google": "Google",
            "index-twitch": "Twitch",
            "index-discord": "Discord",
            "index-my-stats": "Min Statistik",
            "index-link-account": "Link Profil",
            "index-log-out": "Log Ud",
            "index-change-avatar": "Skift Avatar",
            "index-change-account-name": "Skift Profil Navn",
            "index-back": "Tilbage",
            "index-link-account-to": "Link Profil Til",
            "index-log-in-desc": "Log ind for at spore statistik!",
            "index-logging-in": "Logging in",
            "index-leaderboards": "Pointtavler",
            "index-slogan": "2d Battle Royale",
            "index-region": "Region",
            "index-north-america": "Nord Amerika",
            "index-europe": "Europa",
            "index-asia": "Asien",
            "index-south-america": "Sydamerika",
            "index-korea": "Sydkorea",
            "index-players": "Spillere",
            "index-play-solo": "Spil Solo",
            "index-play-duo": "Spil Duo",
            "index-play-squad": "Spil Hold",
            "index-create-team": "Lav Hold",
            "index-how-to-play": "Sådan spiller du",
            "index-leave-team": "Forlad Hold",
            "index-joining-team": "Tilslutter Til Hold",
            "index-creating-team": "Laver Hold",
            "index-invite-link": "Inviter Link",
            "index-solo": "Solo",
            "index-duo": "Duo",
            "index-squad": "Hold",
            "index-auto-fill": "Auto Fyld",
            "index-no-fill": "Ingen Fyld",
            "index-waiting-for-leader": "Venter på at lederen starter spillet",
            "index-play": "Spil",
            "index-featured-youtuber": "Udvalgt Youtuber",
            "index-settings": "Indstillinger",
            "index-high-resolution": "Høj opløsning (Tjek for at øge visuel kvalitet)",
            "index-screen-shake": "Skærm rystning",
            "index-master-volume": "Master Volume",
            "index-sfx-volume": "SFX Volume",
            "index-music-volume": "Music Volume",
            "index-mobile-announce": "Nu tilgængelig på mobil!",
            "index-mobile-tooltip": "Besøg <span>surviv.io</span> på din mobil for at spille på farten!",
            "index-team-is-full": "Holdet er fuldt!",
            "index-failed-joining-team": "Mislykkes at tilslutte til hold.",
            "index-failed-creating-team": "Mislykkes at oprette et hold.",
            "index-failed-finding-game": "Mislykkes at finde et spil.",
            "index-failed-joining-game": "Mislykkes at tilslutte til spil.",
            "index-lost-connection": "Mistede forbindelse til hold.",
            "index-host-closed": "Vært lukkede forbindelsen.",
            "index-view-more": "Vis mere",
            "index-back-to-main": "Tilbage til Hovedmenuen",
            "index-most-kills": "Flest Drab",
            "index-total-kills": "Total Drab",
            "index-total-wins": "Total Kampe Vundet",
            "index-top-5-percent": "Top 5 procent",
            "index-kill-death-ratio": "Drab-Død Forhold",
            "index-for": "For",
            "index-today": "Idag",
            "index-this-week": "Denne Uge",
            "index-all-time": "Altid",
            "index-top-100": "TOP 100",
            "index-rank": "Rang",
            "index-player": "Spiller",
            "index-total-games": "Samlede spil",
            "index-controls": "Taster",
            "index-movement": "Bevægelse",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Sigt",
            "index-aim-ctrl": "Mus",
            "index-punch": "Slå",
            "index-shoot": "Skyd",
            "index-shoot-ctrl": "Venstre-Klik",
            "index-change-weapons": "Skift Våben",
            "index-change-weapons-ctrl": "1 igennem 4 eller musehjul",
            "index-stow-weapons": "Gem Våben (Slå Tilstand)",
            "index-stow-weapons-ctrl": "3 eller E",
            "index-swap-weapons": "Skift til Sidst anvendet våben",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Genlad",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Sigtekorns Zoom",
            "index-scope-zoom-ctrl": "Venstre-Klik for at Zoome",
            "index-pickup": "Saml op",
            "index-loot": "Bytte",
            "index-revive": "Genoplev",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Brug Medicinsk Genstand",
            "index-use-medical-ctrl": "Venstre-Klik på Genstand eller 7 igennem 0",
            "index-drop-item": "Smid Bytte",
            "index-drop-item-ctrl": "Højre-Klik på Bytte",
            "index-cancel-action": "Annuler Handling",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Vis Kort",
            "index-view-map-ctrl": "M eller G",
            "index-toggle-minimap": "Slå Kort Til/Fra",
            "index-toggle-minimap-ctrl": "V",
            "game-alive": "I Live",
            "game-reloading": "Genlader",
            "game-using": "Bruger",
            "game-reviving": "Genoplever",
            "game-revive-teammate": "Genoplever Holdkammerat",
            "game-equip": "Udstyr",
            "game-cancel": "Annuller",
            "game-You": "Du",
            "game-you": "dig",
            "game-themselves": "dem selv",
            "game-yourself": "dig selv",
            "game-you-died": "døde",
            "game-player-died": "døde",
            "game-with": "med",
            "game-knocked-out": "slog",
            "game-killed": "dræbte",
            "game-finally-killed": "dræbte endeligt",
            "game-finally-bled-out": "blødte endeligt ud",
            "game-died-outside": "døde udenfor den sikre zone",
            "game-the-red-zone": "Den røde zone",
            "game-waiting-for-players": "Venter på spillere",
            "game-spectating": "Tilskuer",
            "game-red-zone-advances": "Rød zone rykker om",
            "game-red-zone-advancing": "Rød zone rykker, kom til den sikre zone",
            "game-seconds": "sekunder",
            "game-minutes": "minutter",
            "game-minute": "minut",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Ikke nok plads!",
            "game-item-already-owned": "Du har allerede denne genstand!",
            "game-item-already-equipped": "Genstand allerede udstyret!",
            "game-better-item-equipped": "Bedre genstand allerede udstyret!",
            "game-play-new-game": "Spil Nyt Spil",
            "game-spectate": "Tilskuer",
            "game-full-screen": "Fuld Skærm",
            "game-sound": "Lyd",
            "game-quit-game": "Forlad Spil",
            "game-return-to-game": "Tilbage Til Spillet",
            "game-hide-match-stats": "Gem Kamp Statistikken",
            "game-view-match-stats": "Vis Kamp Statistikken",
            "game-previous-teammate": "Forrige Holdkammerat",
            "game-next-teammate": "Næste Holdkammerat",
            "game-spectate-previous": "Forrige",
            "game-spectate-next": "Næste",
            "game-leave-game": "Forlad Spil",
            "game-your-results": "Dine Resultater",
            "game-chicken": "Vinder Vinder Kyllinge Middag!",
            "game-won-the-game": "Vandt Spillet.",
            "game-team-eliminated": "Din Holdkammerat blev dræbt.",
            "game-rank": "Rang",
            "game-team-rank": "Hold Rang",
            "game-team-kills": "Hold Drab",
            "game-kill": "Drab",
            "game-kills": "Drab",
            "game-damage-dealt": "Skade Gjort",
            "game-damage-taken": "Skade Taget",
            "game-survived": "Overlevet",
            "game-backpack00": "Pose",
            "game-backpack01": "Lille Taske",
            "game-backpack02": "Normal Taske",
            "game-backpack03": "Militær rygsæk",
            "game-bandage": "Bandage",
            "game-bandage-tooltip": "Venstre-Klik for at gendanne 15 Liv.",
            "game-healing-tooltip": "Kan ikke gendanne mere end 75 Liv.",
            "game-healthkit": "Førstehjælpskasse",
            "game-healthkit-tooltip": "Venstre-Klik for at gendanne 100 Liv.",
            "game-soda": "Sodavand",
            "game-soda-tooltip": "Venstre-Klik for at løfte adrenalinen med 25.",
            "game-adrenaline-tooltip": "Adrenalinen gendanner liv over tid.",
            "game-painkiller": "Piller",
            "game-painkiller-tooltip": "Venstre-klik for at løfte adrenalinen med 50.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Ammo for M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 og Vector.",
            "game-12gauge": "12 gauge",
            "game-12gauge-tooltip": "Ammo for M870, M1100, SPAS-12, Saiga-12 og MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Ammo for AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 og DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Ammo for FAMAS, M416, M4A1-S, QBB-97, Mk 12 og M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Ammo for DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Ammo for AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Ammo for Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Ammo for M1911, M1A1, Model 94 og Peacemaker.",
            "game-chest01": "Level 1 Vest",
            "game-chest02": "Level 2 Vest",
            "game-chest03": "Level 3 Vest",
            "game-helmet01": "Level 1 Hjelm",
            "game-helmet02": "Level 2 Hjelm",
            "game-helmet03": "Level 3 Hjelm",
            "game-1xscope": "1x Sigte",
            "game-2xscope": "2x Sigte",
            "game-4xscope": "4x Sigte",
            "game-8xscope": "8x Sigte",
            "game-15xscope": "15x Sigte",
            "game-level-1": "Lvl. 1",
            "game-level-2": "Lvl. 2",
            "game-level-3": "Lvl. 3",
            "game-level-4": "Lvl. 4",
            "game-outfitBase": "Basis Tøj",
            "game-outfitRoyalFortune": "Royal Rigdom",
            "game-outfitKeyLime": "Nøgle Lime",
            "game-outfitCobaltShell": "Kobalt Skal",
            "game-outfitCarbonFiber": "Kulstof Fiber",
            "game-outfitDarkGloves": "Den Professionelle",
            "game-outfitGhillie": "Ghillie Dragt",
            "game-outfitCamo": "Skov Kamo",
            "game-outfitRed": "Mål Øvelse",
            "game-outfitWhite": "Arktisk Hævner",
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
            "game-potato": "Kartoffel",
            "game-hud-potato": "Kartoffel",
            "game-potato_heavy": "Kartoffel",
            "game-barrel_01": "En Tønde",
            "game-silo_01": "En Silo",
            "index-play-50v50": "Spil 50v50",
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
    "903f46c9": function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Faction",
                    icon: "img/loot/loot-weapon-flare-gun.svg"
                },
                assets: {
                    audio: [{
                        name: "leader_dead_01",
                        channel: "ui"
                    }, {
                        name: "leader_assigned_01",
                        channel: "ui"
                    }, {
                        name: "ping_leader_01",
                        channel: "ui"
                    }, {
                        name: "lt_assigned_01",
                        channel: "ui"
                    }],
                    atlases: ["gradient", "shared", "faction"]
                },
                biome: {
                    colors: {
                        background: 333348,
                        water: 465718,
                        beach: 9328178,
                        riverbank: 6632211,
                        grass: 5136680,
                        underground: 1772803,
                        playerSubmerge: 1192009
                    }
                },
                gameMode: {
                    maxPlayers: 100,
                    factionMode: !0,
                    factions: 2
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    "9085f81b": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-02-06",
                locale: "zh-tw"
            },
            "word-order": "svo",
            "index-slogan": "2d大逃殺",
            "index-region": "地區",
            "index-north-america": "北美",
            "index-europe": "歐洲",
            "index-asia": "亞洲",
            "index-south-america": "南美",
            "index-korea": "大韓民國",
            "index-players": "玩家",
            "index-play-solo": "單人",
            "index-play-duo": "雙人",
            "index-play-squad": "4人",
            "index-create-team": "創立隊伍",
            "index-join-team": "加入隊伍",
            "index-how-to-play": "如何玩",
            "index-leave-team": "離開聯隊",
            "index-joining-team": "加入隊伍中",
            "index-creating-team": "建立隊伍中",
            "index-invite-link": "邀請的連結",
            "index-solo": "單人",
            "index-duo": "兩人",
            "index-squad": "聯隊",
            "index-auto-fill": "自動找玩家加入",
            "index-no-fill": "不加入隨機玩家",
            "index-waiting-for-leader": "等待隊長開始遊戲",
            "index-play": "開始",
            "index-featured-youtuber": "推薦的YouTube客",
            "index-settings": "設定",
            "index-high-resolution": "高解像度(提升畫面質素)",
            "index-screen-shake": "營幕震動",
            "index-team-is-full": "團隊已滿!",
            "index-failed-joining-team": "加入隊伍失敗。",
            "index-failed-creating-team": "創立隊伍失敗。",
            "index-failed-finding-game": "尋找隊伍失敗。",
            "index-failed-joining-game": "加入遊戲失敗。",
            "index-lost-connection": "和隊伍失去連接。",
            "index-host-closed": "伺服器關了連接。",
            "index-invalid-protocol": "舊版客戶端,請按F5更新.",
            "index-view-more": "查看更多",
            "index-back-to-main": "回到主畫面",
            "index-most-kills": "殺敵最多",
            "index-total-kills": "總殺數",
            "index-total-wins": "總贏數",
            "index-top-5-percent": "前5%",
            "index-kill-death-ratio": "殺敵和生還比例",
            "index-for": "For",
            "index-today": "今日",
            "index-this-week": "這個禮拜",
            "index-all-time": "所有時間",
            "index-top-100": "前一百",
            "index-rank": "排名",
            "index-player": "玩家",
            "index-total-games": "總遊戲數",
            "index-controls": "控制",
            "index-movement": "運動",
            "index-movement-ctrl": "W, A, S, D鍵",
            "index-aim": "瞄準",
            "index-aim-ctrl": "鼠標",
            "index-punch": "出拳",
            "index-shoot": "射擊",
            "index-shoot-ctrl": "滑鼠左鍵",
            "index-change-weapons": "更換武器",
            "index-change-weapons-ctrl": "1 到 4或滾輪",
            "index-stow-weapons": "收起武器(拳擊模式)",
            "index-stow-weapons-ctrl": "3或E鍵",
            "index-swap-weapons": "換到之前的武器",
            "index-swap-weapons-ctrl": "Q掣",
            "index-reload": "裝子彈",
            "index-reload-ctrl": "R掣",
            "index-scope-zoom": "變焦範圍",
            "index-scope-zoom-ctrl": "左鍵單擊放大",
            "index-pickup": "拾起",
            "index-loot": "戰利品",
            "index-revive": "恢復",
            "index-pickup-ctrl": "F鍵",
            "index-use-medical": "使用醫療物品",
            "index-use-medical-ctrl": "左鍵單擊物品或7 到 0",
            "index-drop-item": "丟棄物品",
            "index-drop-item-ctrl": "右鍵單擊物品",
            "index-cancel-action": "取消操作",
            "index-cancel-action-ctrl": "X鍵",
            "index-view-map": "查看地圖",
            "index-view-map-ctrl": "M或G鍵",
            "index-toggle-minimap": "切換小地圖",
            "index-toggle-minimap-ctrl": "V鍵",
            "game-alive": "玩家",
            "game-reloading": "裝彈",
            "game-using": "使用",
            "game-reviving": "恢復",
            "game-revive-teammate": "復活隊友",
            "game-equip": "裝備",
            "game-cancel": "撤銷",
            "game-open-door": "開門",
            "game-close-door": "關門",
            "game-You": "You",
            "game-you": "you",
            "game-themselves": "themselves",
            "game-yourself": "yourself",
            "game-you-died": "died",
            "game-player-died": "died",
            "game-with": "with",
            "game-knocked-out": "knocked out",
            "game-killed": "killed",
            "game-finally-killed": "finally killed",
            "game-finally-bled-out": "finally bled out",
            "game-died-outside": "died outside the safe zone",
            "game-the-red-zone": "The red zone",
            "game-waiting-for-players": "等待玩家",
            "game-spectating": "觀看",
            "game-red-zone-advances": "紅色區域擴大於",
            "game-red-zone-advancing": "紅色區域擴大中，快到安全區去!",
            "game-seconds": "秒",
            "game-minutes": "分",
            "game-minute": "分",
            "game-m": "分",
            "game-s": "秒",
            "game-not-enough-space": "空間不足!",
            "game-item-already-owned": "物品已擁有!",
            "game-item-already-equipped": "物品已裝備!",
            "game-better-item-equipped": "已裝備更好物品!",
            "game-play-new-game": "開始新遊戲",
            "game-spectate": "觀看",
            "game-full-screen": "全屏",
            "game-sound": "聲音",
            "game-quit-game": "離開遊戲",
            "game-return-to-game": "返回游戲",
            "game-hide-match-stats": "隱藏比賽數據",
            "game-view-match-stats": "查看比賽數據",
            "game-previous-teammate": "上個隊友",
            "game-next-teammate": "下個隊友",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "離開遊戲",
            "game-your-results": "你的戰績",
            "game-chicken": "大吉大利，今晚吃雞!",
            "game-won-the-game": "贏了遊戲。",
            "game-team-eliminated": "你的隊伍被擊敗了。",
            "game-rank": "排名",
            "game-team-rank": "聯隊排名",
            "game-team-kills": "聯隊殺",
            "game-kill": "殺",
            "game-kills": "殺",
            "game-damage-dealt": "傷害輸出",
            "game-damage-taken": "受到傷害",
            "game-survived": "生存",
            "game-backpack00": "袋子",
            "game-backpack01": "小包",
            "game-backpack02": "常規包",
            "game-backpack03": "軍用包",
            "game-bandage": "繃帶",
            "game-bandage-tooltip": "左鍵點擊恢復15生命。",
            "game-healing-tooltip": "無法治療75點以上的生命。",
            "game-healthkit": "醫藥箱",
            "game-healthkit-tooltip": "左鍵點擊恢復100生命。",
            "game-soda": "汽水",
            "game-soda-tooltip": "左鍵點擊可以增加25的腎上腺素。",
            "game-adrenaline-tooltip": "腎上腺素會隨著時間的推移而恢復血量。",
            "game-painkiller": "藥片",
            "game-painkiller-tooltip": "左鍵點擊可使腎上腺素增加50。",
            "game-9mm": "9毫米",
            "game-9mm-tooltip": "M9, G18C, MP5, Vector, CZ-3A1, MAC-10和UMP9彈藥。",
            "game-12gauge": "12計",
            "game-12gauge-tooltip": "M870, M1100, SPAS-12, Saiga-12 和 MP220彈藥。",
            "game-762mm": "7.62毫米",
            "game-762mm-tooltip": "AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 和 DP-28彈藥。",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "FAMAS, M416, M4A1-S, QBB-97, Mk 12 和 M249彈藥。",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "DEagle 50彈藥。",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "AWM-S彈藥。",
            "game-flare": "Flare",
            "game-flare-tooltip": "Flare Gun彈藥。",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "M1911, M1A1, Model 94 和 Peacemaker彈藥。",
            "game-chest01": "一級防彈衣",
            "game-chest02": "二級防彈衣",
            "game-chest03": "三級防彈衣",
            "game-helmet01": "一級頭盔",
            "game-helmet02": "二級頭盔",
            "game-helmet03": "三級頭盔",
            "game-1xscope": "1x 倍鏡",
            "game-2xscope": "2x 倍鏡",
            "game-4xscope": "4x 倍鏡",
            "game-8xscope": "8x 倍鏡",
            "game-15xscope": "15x 倍鏡",
            "game-level-1": "一級",
            "game-level-2": "二級",
            "game-level-3": "三級",
            "game-level-4": "四级",
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
            "game-frag": "碎片手榴彈",
            "game-smoke": "煙霧彈",
            "game-potato": "土豆",
            "game-hud-potato": "土豆",
            "game-potato_heavy": "土豆",
            "game-barrel_01": "a barrel",
            "game-silo_01": "a silo",
            "index-play-50v50": "50人",
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
    "927ff3fc": function(e, t) {},
    "966d985b": function(e, t, a) {
        "use strict";

        function i(e) {
            this.Ie = e, this.Ce = [], this.Ae = {}
        }
        var r = a("8b1dfb45"),
            o = a("989ad62a"),
            n = a("c2a798c8"),
            s = a("ce29f17f"),
            l = a("10899aea");
        i.prototype = {
            ce: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    a.dead ? this.Ee(a.id) : this.De(a)
                }
            },
            Oe: function(e) {
                var t = {
                    id: e.id,
                    type: e.type,
                    pos: n.copy(e.pos),
                    equipped: e.equipped,
                    mapSprite: this.Ie.addSprite(),
                    pulseSprite: this.Ie.addSprite(),
                    pulseScale: .5,
                    pulseScaleMin: .5,
                    pulseScaleMax: 1,
                    pulseTicker: 0,
                    pulseDir: 1,
                    pulseSpeed: .3
                };
                return this.Ce.push(t), this.Ae[e.id] = t, t
            },
            Ee: function(e) {
                for (var t = 0; t < this.Ce.length; t++) {
                    var a = this.Ce[t];
                    if (a.id == e) {
                        a.mapSprite.free(), a.pulseSprite.free(), this.Ce.splice(t, 1), delete this.Ae[e];
                        break
                    }
                }
            },
            De: function(e) {
                var t = this.Ae[e.id];
                t || (t = this.Oe(e)), t.pos = n.copy(e.pos), t.equipped = e.equipped;
                var a = o.items[t.type],
                    i = s.uiLayout == s.UiLayout.Sm ? .15 : .2,
                    l = t.equipped ? 655350 : 1,
                    c = t.mapSprite;
                if (c.pos = n.copy(t.pos), c.scale = 1.25 * i, c.alpha = 1, c.zOrder = l, c.visible = !0, c.sprite.texture = r.Texture.fromImage(a.mapIndicator.sprite), c.sprite.tint = a.mapIndicator.tint, a.mapIndicator.pulse) {
                    var m = t.pulseSprite;
                    m.pos = n.copy(t.pos), m.scale = 1, m.zOrder = l - 1, m.visible = !0, m.sprite.texture = r.Texture.fromImage("part-pulse-01.img"), m.sprite.tint = a.mapIndicator.pulseTint
                }
            },
            oe: function(e) {
                for (var t = 0; t < this.Ce.length; t++) {
                    var a = this.Ce[t];
                    a.pulseTicker = l.clamp(a.pulseTicker + e * a.pulseDir * a.pulseSpeed, a.pulseScaleMin, 1), a.pulseScale = a.pulseTicker * a.pulseScaleMax, (a.pulseScale >= a.pulseScaleMax || a.pulseTicker <= a.pulseScaleMin) && (a.pulseDir *= -1), a.pulseSprite.scale = a.pulseScale, a.pulseSprite.visible = a.equipped
                }
            }
        }, e.exports = {
            te: i
        }
    },
    "989ad62a": function(e, t, a) {
        "use strict";
        e.exports = {
            protocolVersion: 55,
            Input: {
                MoveLeft: 0,
                MoveRight: 1,
                MoveUp: 2,
                MoveDown: 3,
                Fire: 4,
                Reload: 5,
                Cancel: 6,
                Interact: 7,
                Revive: 8,
                Use: 9,
                Loot: 10,
                EquipPrimary: 11,
                EquipSecondary: 12,
                EquipMelee: 13,
                EquipThrowable: 14,
                EquipFragGrenade: 15,
                EquipSmokeGrenade: 16,
                EquipNextWeap: 17,
                EquipPrevWeap: 18,
                EquipLastWeap: 19,
                EquipOtherGun: 20,
                EquipPrevScope: 21,
                EquipNextScope: 22,
                UseBandage: 23,
                UseHealthKit: 24,
                UseSoda: 25,
                UsePainkiller: 26,
                StowWeapons: 27,
                SwapWeapSlots: 28,
                ToggleMap: 29,
                CycleUIMode: 30,
                EmoteMenu: 31,
                TeamPingMenu: 32,
                Fullscreen: 33,
                HideUI: 34,
                TeamPingSingle: 35,
                Count: 36
            },
            WeaponSlot: {
                Primary: 0,
                Secondary: 1,
                Melee: 2,
                Throwable: 3,
                Count: 4
            },
            WeaponType: ["gun", "gun", "melee", "throwable"],
            DamageType: {
                Player: 0,
                Bleeding: 1,
                Gas: 2,
                Airdrop: 3,
                Airstrike: 4
            },
            Action: {
                None: 0,
                Reload: 1,
                ReloadAlt: 2,
                UseItem: 3,
                Revive: 4
            },
            Anim: {
                None: 0,
                Melee: 1,
                Cook: 2,
                Throw: 3,
                CrawlForward: 4,
                CrawlBackward: 5,
                Revive: 6
            },
            Role: {
                None: 0,
                FactionLeader: 1,
                Lieutenant: 2,
                WoodsKing: 3,
                RarePotato: 5
            },
            GasMode: {
                Inactive: 0,
                Waiting: 1,
                Moving: 2
            },
            map: {
                gridSize: 16,
                shoreVariation: 3,
                grassVariation: 2
            },
            player: {
                radius: 1,
                maxVisualRadius: 3.75,
                maxInteractionRad: 3.5,
                health: 100,
                reviveHealth: 24,
                boostBreakpoints: [1, 1, 1.5, .5],
                baseSwitchDelay: .25,
                freeSwitchCooldown: 1,
                bleedTickRate: 1,
                reviveDuration: 8,
                reviveMaxRange: 5,
                crawlTime: .75,
                emoteSoftCooldown: 2,
                emoteHardCooldown: 6,
                emoteThreshold: 6,
                throwableMaxMouseDist: 18,
                cookTime: .1,
                throwTime: .3,
                meleeHeight: .25,
                touchLootRadMult: 1.4
            },
            Plane: {
                Airdrop: 0,
                Airstrike: 1
            },
            airdrop: {
                actionOffset: 0,
                fallTime: 8,
                crushDamage: 100,
                planeVel: 48,
                planeRad: 150,
                soundRangeMult: 2.5,
                soundRangeDelta: .25,
                soundRangeMax: 92,
                fallOff: 0
            },
            airstrike: {
                actionOffset: 0,
                bombJitter: 4,
                bombOffset: 2,
                bombVel: 3,
                bombCount: 20,
                planeVel: 350,
                planeRad: 120,
                soundRangeMult: 18,
                soundRangeDelta: 18,
                soundRangeMax: 48,
                fallOff: 1.25
            },
            groupColors: [16776960, 16711935, 65535, 16733184],
            teamColors: [13369344, 32511],
            bullet: {
                maxReflect: 3,
                reflectDistDecay: 1.5,
                height: .25
            },
            projectile: {
                maxHeight: 5
            },
            abilities: {
                ability_stim: {
                    cooldown: 12,
                    useTime: 0,
                    buffTime: 4,
                    sound: {
                        use: "",
                        effect: "ability_stim_01"
                    },
                    emitter: "stim_01"
                }
            },
            explosions: {
                explosion_frag: {
                    damage: 125,
                    obstacleDamage: 1.1,
                    teamDamage: !0,
                    rad: {
                        min: 5,
                        max: 12
                    },
                    shrapnelCount: 12,
                    shrapnelType: "shrapnel_frag",
                    explosionEffectType: "frag",
                    decalType: "decal_frag_explosion"
                },
                explosion_smoke: {
                    damage: 0,
                    obstacleDamage: 1,
                    teamDamage: !0,
                    rad: {
                        min: 5,
                        max: 12
                    },
                    shrapnelCount: 0,
                    shrapnelType: "shrapnel_frag",
                    explosionEffectType: "smoke",
                    decalType: "decal_smoke_explosion"
                },
                explosion_strobe: {
                    damage: 1,
                    obstacleDamage: 5,
                    teamDamage: !0,
                    rad: {
                        min: 1.5,
                        max: 2.5
                    },
                    shrapnelCount: 3,
                    shrapnelType: "shrapnel_strobe",
                    explosionEffectType: "strobe",
                    decalType: "decal_smoke_explosion"
                },
                explosion_barrel: {
                    damage: 125,
                    obstacleDamage: 1,
                    teamDamage: !0,
                    rad: {
                        min: 5,
                        max: 12
                    },
                    shrapnelCount: 12,
                    shrapnelType: "shrapnel_barrel",
                    explosionEffectType: "barrel",
                    decalType: "decal_barrel_explosion"
                },
                explosion_stove: {
                    damage: 125,
                    obstacleDamage: 2,
                    teamDamage: !0,
                    rad: {
                        min: 5,
                        max: 12
                    },
                    shrapnelCount: 16,
                    shrapnelType: "shrapnel_stove",
                    explosionEffectType: "barrel",
                    decalType: "decal_barrel_explosion"
                },
                explosion_usas: {
                    damage: 42,
                    obstacleDamage: 4,
                    teamDamage: !0,
                    rad: {
                        min: 3.5,
                        max: 6.5
                    },
                    shrapnelCount: 9,
                    shrapnelType: "shrapnel_usas",
                    explosionEffectType: "usas",
                    decalType: "decal_frag_small_explosion"
                },
                explosion_mirv: {
                    damage: 125,
                    obstacleDamage: 1.1,
                    teamDamage: !0,
                    rad: {
                        min: 5,
                        max: 12
                    },
                    shrapnelCount: 12,
                    shrapnelType: "shrapnel_frag",
                    explosionEffectType: "mirv",
                    decalType: "decal_frag_explosion"
                },
                explosion_mirv_mini: {
                    damage: 75,
                    obstacleDamage: 1.1,
                    teamDamage: !0,
                    rad: {
                        min: 4,
                        max: 8
                    },
                    shrapnelCount: 7,
                    shrapnelType: "shrapnel_mirv_mini",
                    explosionEffectType: "mirv_mini",
                    decalType: "decal_frag_small_explosion"
                },
                explosion_snowball: {
                    damage: 2,
                    obstacleDamage: 1,
                    teamDamage: !1,
                    rad: {
                        min: 1.24,
                        max: 1.25
                    },
                    shrapnelCount: 0,
                    shrapnelType: "",
                    explosionEffectType: "snowball",
                    decalType: "decal_snowball_explosion"
                },
                explosion_snowball_heavy: {
                    damage: 5,
                    obstacleDamage: 1,
                    teamDamage: !1,
                    rad: {
                        min: 1.24,
                        max: 1.25
                    },
                    shrapnelCount: 0,
                    shrapnelType: "",
                    explosionEffectType: "snowball_heavy",
                    decalType: "decal_snowball_explosion"
                },
                explosion_potato: {
                    damage: 2,
                    obstacleDamage: 1,
                    teamDamage: !1,
                    rad: {
                        min: 1.24,
                        max: 1.25
                    },
                    shrapnelCount: 0,
                    shrapnelType: "",
                    explosionEffectType: "potato",
                    decalType: "decal_potato_explosion"
                },
                explosion_potato_heavy: {
                    damage: 5,
                    obstacleDamage: 1,
                    teamDamage: !1,
                    rad: {
                        min: 1.24,
                        max: 1.25
                    },
                    shrapnelCount: 0,
                    shrapnelType: "",
                    explosionEffectType: "potato_heavy",
                    decalType: "decal_potato_explosion"
                },
                explosion_bomb_iron: {
                    damage: 40,
                    obstacleDamage: 2,
                    teamDamage: !0,
                    rad: {
                        min: 5,
                        max: 14
                    },
                    shrapnelCount: 2,
                    shrapnelType: "shrapnel_bomb_iron",
                    explosionEffectType: "bomb_iron",
                    decalType: "decal_bomb_iron_explosion"
                }
            },
            bullets: {
                bullet_mp5: {
                    damage: 11,
                    obstacleDamage: 1,
                    falloff: .8,
                    distance: 100,
                    speed: 85,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "9mm",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_ak47: {
                    damage: 13.5,
                    obstacleDamage: 1,
                    falloff: .9,
                    distance: 200,
                    speed: 100,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_scar: {
                    damage: 15,
                    obstacleDamage: 1,
                    falloff: .85,
                    distance: 175,
                    speed: 108,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_an94: {
                    damage: 17.5,
                    obstacleDamage: 1,
                    falloff: .94,
                    distance: 300,
                    speed: 110,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_model94: {
                    damage: 44,
                    obstacleDamage: 1,
                    falloff: .75,
                    distance: 175,
                    speed: 156,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "45acp",
                    tracerWidth: .12,
                    tracerLength: 1
                },
                bullet_mosin: {
                    damage: 72,
                    obstacleDamage: 1.5,
                    falloff: .95,
                    distance: 500,
                    speed: 178,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .16,
                    tracerLength: 1
                },
                bullet_sv98: {
                    damage: 80,
                    obstacleDamage: 1.5,
                    falloff: .96,
                    distance: 520,
                    speed: 182,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .2,
                    tracerLength: 1
                },
                bullet_awc: {
                    damage: 180,
                    obstacleDamage: 1.5,
                    falloff: .94,
                    distance: 300,
                    speed: 136,
                    variance: 0,
                    shrapnel: !1,
                    suppressed: !0,
                    tracerColor: "308sub",
                    tracerWidth: .2,
                    tracerLength: 1
                },
                bullet_m39: {
                    damage: 24.5,
                    obstacleDamage: 1,
                    falloff: .9,
                    distance: 400,
                    speed: 125,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_garand: {
                    damage: 32,
                    obstacleDamage: 1,
                    falloff: .9,
                    distance: 400,
                    speed: 130,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .12,
                    tracerLength: .9
                },
                bullet_buckshot: {
                    damage: 12.5,
                    obstacleDamage: 1,
                    falloff: .3,
                    speed: 66,
                    distance: 27,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "12gauge",
                    tracerWidth: .1,
                    tracerLength: .8
                },
                bullet_flechette: {
                    damage: 8.75,
                    obstacleDamage: 1,
                    falloff: .85,
                    speed: 88,
                    distance: 45,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "12gauge",
                    tracerWidth: .075,
                    tracerLength: .5
                },
                bullet_frag: {
                    damage: 12,
                    obstacleDamage: 1,
                    falloff: .3,
                    speed: 72,
                    distance: 24,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "frag",
                    tracerWidth: .1,
                    tracerLength: .5,
                    onHit: "explosion_usas"
                },
                bullet_slug: {
                    damage: 77,
                    obstacleDamage: 1,
                    falloff: .85,
                    speed: 118,
                    distance: 60,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "12gauge",
                    tracerWidth: .2,
                    tracerLength: .4
                },
                bullet_birdshot: {
                    damage: 4,
                    obstacleDamage: 1,
                    falloff: .25,
                    speed: 66,
                    distance: 25,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "12gauge",
                    tracerWidth: .1,
                    tracerLength: .1
                },
                bullet_m9: {
                    damage: 12,
                    obstacleDamage: 1,
                    falloff: .7,
                    speed: 85,
                    distance: 100,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "9mm",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_m93r: {
                    damage: 12,
                    obstacleDamage: 1,
                    falloff: .7,
                    speed: 85,
                    distance: 100,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "9mm",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_ot38: {
                    damage: 26,
                    obstacleDamage: 1,
                    falloff: .75,
                    speed: 112,
                    distance: 125,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .09,
                    tracerLength: .8
                },
                bullet_ots38: {
                    damage: 32,
                    obstacleDamage: 1,
                    falloff: .77,
                    speed: 115,
                    distance: 135,
                    variance: 0,
                    shrapnel: !1,
                    suppressed: !0,
                    tracerColor: "762mm",
                    tracerWidth: .1,
                    tracerLength: .8
                },
                bullet_colt45: {
                    damage: 29,
                    obstacleDamage: 1,
                    falloff: .7,
                    speed: 106,
                    distance: 110,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "45acp",
                    tracerWidth: .09,
                    tracerLength: .8
                },
                bullet_m1911: {
                    damage: 14,
                    obstacleDamage: 1,
                    falloff: .7,
                    speed: 80,
                    distance: 88,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "45acp",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_m1a1: {
                    damage: 13,
                    obstacleDamage: 1,
                    falloff: .8,
                    distance: 88,
                    speed: 80,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "45acp",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_deagle: {
                    damage: 35,
                    obstacleDamage: 1,
                    falloff: .75,
                    speed: 115,
                    distance: 120,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "50AE",
                    tracerWidth: .12,
                    tracerLength: .8
                },
                bullet_mac10: {
                    damage: 9.25,
                    obstacleDamage: 1,
                    falloff: .6,
                    distance: 50,
                    speed: 75,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "9mm",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_ump9: {
                    damage: 15,
                    obstacleDamage: 1,
                    falloff: .75,
                    distance: 100,
                    speed: 100,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "9mm",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_vector: {
                    damage: 7.5,
                    obstacleDamage: 1,
                    falloff: .6,
                    distance: 46,
                    speed: 88,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "9mm",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_vector45: {
                    damage: 9.5,
                    obstacleDamage: 1,
                    falloff: .6,
                    distance: 45,
                    speed: 82,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "45acp",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_scorpion: {
                    damage: 10.75,
                    obstacleDamage: 1,
                    falloff: .77,
                    distance: 120,
                    speed: 90,
                    variance: 0,
                    shrapnel: !1,
                    suppressed: !0,
                    tracerColor: "9mm",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_dp28: {
                    damage: 14,
                    obstacleDamage: 1.5,
                    falloff: .9,
                    distance: 225,
                    speed: 110,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_bar: {
                    damage: 17.5,
                    obstacleDamage: 1.75,
                    falloff: .9,
                    distance: 275,
                    speed: 114,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_pkp: {
                    damage: 18,
                    obstacleDamage: 2,
                    falloff: .9,
                    distance: 200,
                    speed: 120,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "762mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_glock: {
                    damage: 9,
                    obstacleDamage: 1,
                    falloff: .5,
                    speed: 70,
                    distance: 44,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "9mm",
                    tracerWidth: .1,
                    tracerLength: .7
                },
                bullet_famas: {
                    damage: 17,
                    obstacleDamage: 1,
                    falloff: .8,
                    distance: 150,
                    speed: 110,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "556mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_hk416: {
                    damage: 11,
                    obstacleDamage: 1,
                    falloff: .85,
                    distance: 175,
                    speed: 105,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "556mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_m4a1: {
                    damage: 14,
                    obstacleDamage: 1,
                    falloff: .82,
                    distance: 165,
                    speed: 98,
                    variance: 0,
                    shrapnel: !1,
                    suppressed: !0,
                    tracerColor: "556mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_mk12: {
                    damage: 19.5,
                    obstacleDamage: 1,
                    falloff: .9,
                    distance: 400,
                    speed: 132,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "556mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_m249: {
                    damage: 14,
                    obstacleDamage: 1.75,
                    falloff: .9,
                    distance: 220,
                    speed: 125,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "556mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_qbb97: {
                    damage: 14,
                    obstacleDamage: 1.5,
                    falloff: .9,
                    distance: 200,
                    speed: 118,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "556mm",
                    tracerWidth: .1,
                    tracerLength: .9
                },
                bullet_flare: {
                    damage: 0,
                    obstacleDamage: 1,
                    falloff: 10,
                    distance: 16,
                    speed: 4,
                    variance: 0,
                    shrapnel: !1,
                    tracerColor: "flare",
                    tracerWidth: .3,
                    tracerLength: 1.2,
                    flareColor: 16733184,
                    addFlare: !0,
                    maxFlareScale: 2
                },
                shrapnel_barrel: {
                    damage: 2,
                    obstacleDamage: 1,
                    falloff: 1,
                    speed: 20,
                    distance: 8,
                    variance: 1.5,
                    shrapnel: !0,
                    tracerColor: "shrapnel",
                    tracerWidth: .125,
                    tracerLength: .6
                },
                shrapnel_stove: {
                    damage: 5,
                    obstacleDamage: 2.5,
                    falloff: 1,
                    speed: 30,
                    distance: 24,
                    variance: 1.5,
                    shrapnel: !0,
                    tracerColor: "shrapnel",
                    tracerWidth: .125,
                    tracerLength: .6
                },
                shrapnel_frag: {
                    damage: 20,
                    obstacleDamage: 1,
                    falloff: 1,
                    speed: 20,
                    distance: 8,
                    variance: 1.5,
                    shrapnel: !0,
                    tracerColor: "shrapnel",
                    tracerWidth: .125,
                    tracerLength: .6
                },
                shrapnel_strobe: {
                    damage: 3,
                    obstacleDamage: 1,
                    falloff: 1,
                    speed: 20,
                    distance: 3,
                    variance: 1.5,
                    shrapnel: !0,
                    tracerColor: "shrapnel",
                    tracerWidth: .1,
                    tracerLength: .3
                },
                shrapnel_usas: {
                    damage: 5,
                    obstacleDamage: 1,
                    falloff: 1,
                    speed: 20,
                    distance: 5,
                    variance: 1.2,
                    shrapnel: !0,
                    tracerColor: "shrapnel",
                    tracerWidth: .1,
                    tracerLength: .5
                },
                shrapnel_mirv_mini: {
                    damage: 6,
                    obstacleDamage: 1,
                    falloff: 1,
                    speed: 20,
                    distance: 5,
                    variance: 1.3,
                    shrapnel: !0,
                    tracerColor: "shrapnel",
                    tracerWidth: .1,
                    tracerLength: .5
                },
                shrapnel_bomb_iron: {
                    damage: 40,
                    obstacleDamage: 1,
                    falloff: 1,
                    speed: 24,
                    distance: 12,
                    variance: 1.5,
                    shrapnel: !0,
                    tracerColor: "shrapnel",
                    tracerWidth: .125,
                    tracerLength: .6
                }
            },
            tracerColors: {
                "9mm": {
                    regular: 16704198,
                    saturated: 16767411,
                    alphaRate: .92,
                    alphaMin: .14
                },
                "762mm": {
                    regular: 12965630,
                    saturated: 11257087,
                    alphaRate: .94,
                    alphaMin: .2
                },
                "12gauge": {
                    regular: 16702684,
                    saturated: 16702684
                },
                "556mm": {
                    regular: 11141010,
                    saturated: 11141010,
                    alphaRate: .92,
                    alphaMin: .14
                },
                "50AE": {
                    regular: 16773256,
                    saturated: 16773256
                },
                "308sub": {
                    regular: 2435840,
                    saturated: 4608e3,
                    alphaRate: .92,
                    alphaMin: .07
                },
                flare: {
                    regular: 14869218,
                    saturated: 14869218
                },
                "45acp": {
                    regular: 15515391,
                    saturated: 15183103
                },
                shrapnel: {
                    regular: 3355443,
                    saturated: 3355443
                },
                frag: {
                    regular: 13303808,
                    saturated: 13303808
                }
            },
            items: {
                outfitBase: {
                    name: "Basic Outfit",
                    type: "skin",
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        footTint: 16303476,
                        footSprite: "player-feet-01.img",
                        backpackTint: 8480055,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 16303476,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitBarrel: {
                    name: "Fish in a Barrel",
                    type: "skin",
                    obstacleType: "barrel_01",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: .8,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 3750201,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitWoodBarrel: {
                    name: "Fish in a Wood Barrel",
                    type: "skin",
                    obstacleType: "barrel_02",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 11235106,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitStone: {
                    name: "Stoneskin",
                    type: "skin",
                    obstacleType: "stone_01",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: .9,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 7434609,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitTree: {
                    name: "Barkskin",
                    type: "skin",
                    obstacleType: "tree_07",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 4599058,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitTreeSpooky: {
                    name: "Spooky Barkskin",
                    type: "skin",
                    obstacleType: "tree_05",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 1775895,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitStump: {
                    name: "Stump Costume",
                    type: "skin",
                    obstacleType: "tree_09",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 8602624,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitBush: {
                    name: "Bush Wookie",
                    type: "skin",
                    obstacleType: "bush_01b",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 3889951,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitLeafPile: {
                    name: "Leaf Pile Wookie",
                    type: "skin",
                    obstacleType: "bush_06b",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 16731392,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitCrate: {
                    name: "Guy in a Box",
                    type: "skin",
                    obstacleType: "crate_01",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 6697728,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitTable: {
                    name: "Yard Sale",
                    type: "skin",
                    obstacleType: "table_01",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 6697728,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitSoviet: {
                    name: "Comrade in a Box",
                    type: "skin",
                    obstacleType: "crate_02",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 6697728,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitAirdrop: {
                    name: "Air Drop Costume",
                    type: "skin",
                    obstacleType: "crate_10",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 6579300,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitOven: {
                    name: "Oven Costume",
                    type: "skin",
                    obstacleType: "oven_01",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 14935011,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitRefrigerator: {
                    name: "Fridge Costume",
                    type: "skin",
                    obstacleType: "refrigerator_01b",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 7733259,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitVending: {
                    name: "Vending Costume",
                    type: "skin",
                    obstacleType: "vending_01",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16566389,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 10925,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitPumpkin: {
                    name: "Pumpkin Costume",
                    type: "skin",
                    obstacleType: "pumpkin_01",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 15889667,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitWoodpile: {
                    name: "Woodpile Costume",
                    type: "skin",
                    obstacleType: "woodpile_01",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 9455616,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitToilet: {
                    name: "Toilet Costume",
                    type: "skin",
                    obstacleType: "toilet_02",
                    camo: !0,
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16303476,
                        handSprite: "player-hands-01.img",
                        backpackTint: 8480055
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitWoodsCloak: {
                    name: "Greencloak",
                    type: "skin",
                    skinImg: {
                        baseTint: 2817792,
                        baseSprite: "player-base-02.img",
                        baseScale: 1,
                        handTint: 16711594,
                        handSprite: "player-hands-02.img",
                        footTint: 16711594,
                        footSprite: "player-feet-02.img",
                        backpackTint: 15635271,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 2817792,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitRedLeaderAged: {
                    name: "Weathered Red",
                    type: "skin",
                    skinImg: {
                        baseTint: 10098712,
                        baseSprite: "player-base-02.img",
                        baseScale: 1,
                        handTint: 16711680,
                        handSprite: "player-hands-02.img",
                        footTint: 16711680,
                        footSprite: "player-feet-02.img",
                        backpackTint: 5442572,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 10098712,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitBlueLeaderAged: {
                    name: "Stifled Blue",
                    type: "skin",
                    skinImg: {
                        baseTint: 1523353,
                        baseSprite: "player-base-02.img",
                        baseScale: 1,
                        handTint: 20223,
                        handSprite: "player-hands-02.img",
                        footTint: 20223,
                        footSprite: "player-feet-02.img",
                        backpackTint: 794700,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 1523353,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitRedLeader: {
                    name: "Red Leader",
                    type: "skin",
                    noDrop: !0,
                    skinImg: {
                        baseTint: 10158080,
                        baseSprite: "player-base-02.img",
                        baseScale: 1,
                        handTint: 16711680,
                        handSprite: "player-hands-02.img",
                        footTint: 16711680,
                        footSprite: "player-feet-02.img",
                        backpackTint: 5439488,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 8650752,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitBlueLeader: {
                    name: "Blue Leader",
                    type: "skin",
                    noDrop: !0,
                    skinImg: {
                        baseTint: 12187,
                        baseSprite: "player-base-02.img",
                        baseScale: 1,
                        handTint: 20223,
                        handSprite: "player-hands-02.img",
                        footTint: 20223,
                        footSprite: "player-feet-02.img",
                        backpackTint: 5964,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 13223,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitSpetsnaz: {
                    name: "Siberian Assault",
                    type: "skin",
                    skinImg: {
                        baseTint: 16777215,
                        baseSprite: "player-base-05.img",
                        handTint: 15000804,
                        handSprite: "player-hands-01.img",
                        footTint: 15000804,
                        footSprite: "player-feet-01.img",
                        backpackTint: 13816530,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-04.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitElf: {
                    name: "Tallow's Little Helper",
                    type: "skin",
                    skinImg: {
                        baseTint: 12845056,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 1489152,
                        handSprite: "player-hands-01.img",
                        footTint: 1489152,
                        footSprite: "player-feet-01.img",
                        backpackTint: 365312,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 1489152,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "bells_01"
                    }
                },
                outfitImperial: {
                    name: "Imperial Seal",
                    type: "skin",
                    skinImg: {
                        baseTint: 12320813,
                        baseSprite: "player-base-01.img",
                        baseScale: 1,
                        handTint: 16777215,
                        handSprite: "player-hands-01.img",
                        footTint: 16777215,
                        footSprite: "player-feet-01.img",
                        backpackTint: 12625727,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 12320813,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitLumber: {
                    name: "Woodcutter's Wrap",
                    type: "skin",
                    skinImg: {
                        baseTint: 16777215,
                        baseSprite: "player-base-04.img",
                        baseScale: 1,
                        handTint: 8258312,
                        handSprite: "player-hands-02.img",
                        footTint: 8258312,
                        footSprite: "player-feet-02.img",
                        backpackTint: 4854547,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitVerde: {
                    name: "Poncho Verde",
                    type: "skin",
                    skinImg: {
                        baseTint: 1785868,
                        baseSprite: "player-base-02.img",
                        baseScale: 1,
                        handTint: 11912587,
                        handSprite: "player-hands-02.img",
                        footTint: 11912587,
                        footSprite: "player-feet-02.img",
                        backpackTint: 11238441,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 1785868,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitPineapple: {
                    name: "Valiant Pineapple",
                    type: "skin",
                    skinImg: {
                        baseTint: 10027008,
                        baseSprite: "player-base-02.img",
                        handTint: 4985105,
                        handSprite: "player-hands-02.img",
                        footTint: 4985105,
                        footSprite: "player-feet-02.img",
                        backpackTint: 16763904,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 10027008,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitTarkhany: {
                    name: "Tarkhany Regal",
                    type: "skin",
                    skinImg: {
                        baseTint: 4927107,
                        baseSprite: "player-base-02.img",
                        handTint: 16757760,
                        handSprite: "player-hands-02.img",
                        footTint: 16757760,
                        footSprite: "player-feet-02.img",
                        backpackTint: 4661344,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 4927107,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitWaterElem: {
                    name: "Water Elemental",
                    type: "skin",
                    skinImg: {
                        baseTint: 7143401,
                        baseSprite: "player-base-02.img",
                        baseScale: 1,
                        handTint: 15990876,
                        handSprite: "player-hands-02.img",
                        footTint: 15990876,
                        footSprite: "player-feet-02.img",
                        backpackTint: 32644,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 7143401,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitHeaven: {
                    name: "Celestial Garb",
                    type: "skin",
                    skinImg: {
                        baseTint: 16777215,
                        baseSprite: "player-base-03.img",
                        baseScale: 1,
                        handTint: 13762639,
                        handSprite: "player-hands-02.img",
                        footTint: 13762639,
                        footSprite: "player-feet-02.img",
                        backpackTint: 36503,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-02.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitMeteor: {
                    name: "Falling Star",
                    type: "skin",
                    skinImg: {
                        baseTint: 9764864,
                        baseSprite: "player-base-02.img",
                        baseScale: 1,
                        handTint: 16742400,
                        handSprite: "player-hands-02.img",
                        footTint: 16742400,
                        footSprite: "player-feet-02.img",
                        backpackTint: 4727582,
                        backpackSprite: "player-circle-base-02.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 9764864,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rad: 16
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitIslander: {
                    name: "Island Time",
                    type: "skin",
                    skinImg: {
                        baseTint: 16762368,
                        baseSprite: "player-base-01.img",
                        handTint: 148992,
                        handSprite: "player-hands-01.img",
                        footTint: 148992,
                        footSprite: "player-feet-01.img",
                        backpackTint: 4495104,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 16762368,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitAqua: {
                    name: "Aquatic Avenger",
                    type: "skin",
                    skinImg: {
                        baseTint: 47778,
                        baseSprite: "player-base-01.img",
                        handTint: 65502,
                        handSprite: "player-hands-01.img",
                        footTint: 65502,
                        footSprite: "player-feet-01.img",
                        backpackTint: 536620,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 47778,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitCoral: {
                    name: "Coral Guise",
                    type: "skin",
                    skinImg: {
                        baseTint: 16736103,
                        baseSprite: "player-base-01.img",
                        handTint: 16746895,
                        handSprite: "player-hands-01.img",
                        footTint: 16746895,
                        footSprite: "player-feet-01.img",
                        backpackTint: 16772298,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 16736103,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitKhaki: {
                    name: "The Initiative",
                    type: "skin",
                    skinImg: {
                        baseTint: 12824197,
                        baseSprite: "player-base-01.img",
                        handTint: 9404516,
                        handSprite: "player-hands-01.img",
                        footTint: 9404516,
                        footSprite: "player-feet-01.img",
                        backpackTint: 4208940,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 12824197,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitCasanova: {
                    name: "Casanova Silks",
                    type: "skin",
                    skinImg: {
                        baseTint: 4327436,
                        baseSprite: "player-base-01.img",
                        handTint: 7602183,
                        handSprite: "player-hands-01.img",
                        footTint: 7602183,
                        footSprite: "player-feet-01.img",
                        backpackTint: 1052688,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 4327436,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitPrisoner: {
                    name: "The New Black",
                    type: "skin",
                    skinImg: {
                        baseTint: 16735266,
                        baseSprite: "player-base-01.img",
                        handTint: 16545059,
                        handSprite: "player-hands-01.img",
                        footTint: 16545059,
                        footSprite: "player-feet-01.img",
                        backpackTint: 16756224,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 16735266,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitJester: {
                    name: "Jester's Folly",
                    type: "skin",
                    skinImg: {
                        baseTint: 7798904,
                        baseSprite: "player-base-01.img",
                        handTint: 4915276,
                        handSprite: "player-hands-01.img",
                        footTint: 4915276,
                        footSprite: "player-feet-01.img",
                        backpackTint: 936960,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 7798904,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitWoodland: {
                    name: "Woodland Combat",
                    type: "skin",
                    skinImg: {
                        baseTint: 2831146,
                        baseSprite: "player-base-01.img",
                        handTint: 5925970,
                        handSprite: "player-hands-01.img",
                        footTint: 5925970,
                        footSprite: "player-feet-01.img",
                        backpackTint: 5056e3,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 2831146,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitRoyalFortune: {
                    name: "Royal Fortune",
                    type: "skin",
                    skinImg: {
                        baseTint: 8333091,
                        baseSprite: "player-base-01.img",
                        handTint: 15254058,
                        handSprite: "player-hands-01.img",
                        footTint: 15254058,
                        footSprite: "player-feet-01.img",
                        backpackTint: 9981696,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 8333091,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitKeyLime: {
                    name: "Key Lime",
                    type: "skin",
                    skinImg: {
                        baseTint: 13107007,
                        baseSprite: "player-base-01.img",
                        handTint: 15662941,
                        handSprite: "player-hands-01.img",
                        footTint: 15662941,
                        footSprite: "player-feet-01.img",
                        backpackTint: 12355383,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 13107007,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitCobaltShell: {
                    name: "Cobalt Shell",
                    type: "skin",
                    skinImg: {
                        baseTint: 11095,
                        baseSprite: "player-base-01.img",
                        handTint: 2711164,
                        handSprite: "player-hands-01.img",
                        footTint: 2711164,
                        footSprite: "player-feet-01.img",
                        backpackTint: 19093,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 11095,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitCarbonFiber: {
                    name: "Carbon Fiber",
                    type: "skin",
                    skinImg: {
                        baseTint: 2171169,
                        baseSprite: "player-base-01.img",
                        handTint: 1842204,
                        handSprite: "player-hands-01.img",
                        footTint: 1842204,
                        footSprite: "player-feet-01.img",
                        backpackTint: 3552822,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 2171169,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitDarkGloves: {
                    name: "The Professional",
                    type: "skin",
                    skinImg: {
                        baseTint: 16303476,
                        baseSprite: "player-base-01.img",
                        handTint: 12482560,
                        handSprite: "player-hands-01.img",
                        footTint: 12482560,
                        footSprite: "player-feet-01.img",
                        backpackTint: 10708736,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 12482560,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitDarkGhillie: {
                    name: "Incursion Ghillie",
                    type: "skin",
                    camo: !0,
                    skinImg: {
                        baseTint: 5005348,
                        baseSprite: "player-base-01.img",
                        handTint: 5005348,
                        handSprite: "player-hands-01.img",
                        footTint: 5005348,
                        footSprite: "player-feet-01.img",
                        backpackTint: 6697728,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 5005348,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitDesertGhillie: {
                    name: "Desert Ghillie",
                    type: "skin",
                    camo: !0,
                    skinImg: {
                        baseTint: 14657377,
                        baseSprite: "player-base-01.img",
                        handTint: 14657377,
                        handSprite: "player-hands-01.img",
                        footTint: 14657377,
                        footSprite: "player-feet-01.img",
                        backpackTint: 6697728,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 14657377,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitGhillie: {
                    name: "Ghillie Suit",
                    type: "skin",
                    camo: !0,
                    skinImg: {
                        baseTint: 8630096,
                        baseSprite: "player-base-01.img",
                        handTint: 8630096,
                        handSprite: "player-hands-01.img",
                        footTint: 8630096,
                        footSprite: "player-feet-01.img",
                        backpackTint: 6697728,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 8630096,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitSpringGhillie: {
                    name: "Ghillie Suit",
                    type: "skin",
                    camo: !0,
                    skinImg: {
                        baseTint: 4285194,
                        baseSprite: "player-base-01.img",
                        handTint: 4285194,
                        handSprite: "player-hands-01.img",
                        footTint: 4285194,
                        footSprite: "player-feet-01.img",
                        backpackTint: 6697728,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 4285194,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitDesertCamo: {
                    name: "Desert Camo",
                    type: "skin",
                    skinImg: {
                        baseTint: 13736782,
                        baseSprite: "player-base-01.img",
                        handTint: 11169046,
                        handSprite: "player-hands-01.img",
                        footTint: 11169046,
                        footSprite: "player-feet-01.img",
                        backpackTint: 16763778,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 13736782,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitCamo: {
                    name: "Forest Camo",
                    type: "skin",
                    skinImg: {
                        baseTint: 10066278,
                        baseSprite: "player-base-01.img",
                        handTint: 8684631,
                        handSprite: "player-hands-01.img",
                        footTint: 8684631,
                        footSprite: "player-feet-01.img",
                        backpackTint: 6710835,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 10066278,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitRed: {
                    name: "Target Practice",
                    type: "skin",
                    skinImg: {
                        baseTint: 16711680,
                        baseSprite: "player-base-01.img",
                        handTint: 13893632,
                        handSprite: "player-hands-01.img",
                        footTint: 13893632,
                        footSprite: "player-feet-01.img",
                        backpackTint: 11993088,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 16711680,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                outfitWhite: {
                    name: "Arctic Avenger",
                    type: "skin",
                    skinImg: {
                        baseTint: 14935011,
                        baseSprite: "player-base-01.img",
                        handTint: 15658734,
                        handSprite: "player-hands-01.img",
                        footTint: 15658734,
                        footSprite: "player-feet-01.img",
                        backpackTint: 14474460,
                        backpackSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-shirt-01.img",
                        tint: 14935011,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "clothes_pickup_01"
                    }
                },
                fists: {
                    name: "Fists",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "fists",
                        attackAnims: ["fists"]
                    },
                    sound: {
                        swing: "punch_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "punch_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-weapon-fists.img",
                        scale: .3,
                        rad: 25,
                        tint: 65280
                    }
                },
                karambit_rugged: {
                    name: "Karambit Rugged",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "slash",
                        attackAnims: ["slash", "fists"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-karambit-rugged.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-karambit-rugged.img",
                        pos: {
                            x: 15.5,
                            y: -5
                        },
                        rot: .5 * Math.PI,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                karambit_prismatic: {
                    name: "Karambit Prismatic",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "slash",
                        attackAnims: ["slash", "fists"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-karambit-prismatic.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-karambit-prismatic.img",
                        pos: {
                            x: 15.5,
                            y: -5
                        },
                        rot: .5 * Math.PI,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                karambit_drowned: {
                    name: "Karambit Drowned",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "slash",
                        attackAnims: ["slash", "fists"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-karambit-drowned.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-karambit-drowned.img",
                        pos: {
                            x: 15.5,
                            y: -5
                        },
                        rot: .5 * Math.PI,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                bayonet_rugged: {
                    name: "Bayonet Rugged",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "fists",
                        attackAnims: ["cut", "thrust"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-bayonet-rugged.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: .785
                    },
                    worldImg: {
                        sprite: "loot-melee-bayonet-rugged.img",
                        pos: {
                            x: -.5,
                            y: -32.5
                        },
                        rot: .785,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                bayonet_woodland: {
                    name: "Bayonet Woodland",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "fists",
                        attackAnims: ["cut", "thrust"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-bayonet-woodland.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: .785
                    },
                    worldImg: {
                        sprite: "loot-melee-bayonet-woodland.img",
                        pos: {
                            x: -.5,
                            y: -32.5
                        },
                        rot: .785,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                huntsman_rugged: {
                    name: "Huntsman Rugged",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "fists",
                        attackAnims: ["cut", "thrust"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-huntsman-rugged.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: .785
                    },
                    worldImg: {
                        sprite: "loot-melee-huntsman-rugged.img",
                        pos: {
                            x: 2.5,
                            y: -35.5
                        },
                        rot: .82,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                huntsman_burnished: {
                    name: "Huntsman Burnished",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "fists",
                        attackAnims: ["cut", "thrust"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-huntsman-burnished.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: .785
                    },
                    worldImg: {
                        sprite: "loot-melee-huntsman-burnished.img",
                        pos: {
                            x: 2.5,
                            y: -35.5
                        },
                        rot: .82,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                bowie_vintage: {
                    name: "Bowie Vintage",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "fists",
                        attackAnims: ["cut", "thrust"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-bowie-vintage.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: .785
                    },
                    worldImg: {
                        sprite: "loot-melee-bowie-vintage.img",
                        pos: {
                            x: -.5,
                            y: -32.5
                        },
                        rot: .785,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                bowie_frontier: {
                    name: "Bowie Frontier",
                    type: "melee",
                    quality: 0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: .9,
                    damageTime: .1,
                    cooldownTime: .15,
                    damage: 24,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "fists",
                        attackAnims: ["cut", "thrust"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-bowie-frontier.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: .785
                    },
                    worldImg: {
                        sprite: "loot-melee-bowie-frontier.img",
                        pos: {
                            x: -.5,
                            y: -32.5
                        },
                        rot: .785,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                machete_taiga: {
                    name: "UVSR Taiga",
                    type: "melee",
                    quality: 1,
                    cleave: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.5,
                        y: 0
                    },
                    attackRad: 1.75,
                    damageTime: .12,
                    cooldownTime: .18,
                    damage: 33,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "machete",
                        attackAnims: ["cutReverse"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-machete-taiga.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: .785
                    },
                    worldImg: {
                        sprite: "loot-melee-machete-taiga.img",
                        pos: {
                            x: -2.5,
                            y: -48.5
                        },
                        rot: 1.885,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                kukri_trad: {
                    name: "Tallow's Kukri",
                    type: "melee",
                    quality: 1,
                    cleave: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.5,
                        y: 0
                    },
                    attackRad: 1.75,
                    damageTime: .12,
                    cooldownTime: .18,
                    damage: 33,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "machete",
                        attackAnims: ["cutReverse"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "knife_deploy_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-kukri-trad.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: .785
                    },
                    worldImg: {
                        sprite: "loot-melee-kukri-trad.img",
                        pos: {
                            x: -.5,
                            y: -46.5
                        },
                        rot: 1.885,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    }
                },
                woodaxe: {
                    name: "Wood Axe",
                    type: "melee",
                    quality: 0,
                    armorPiercing: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: 1,
                    damageTime: .18,
                    cooldownTime: .18,
                    damage: 36,
                    obstacleDamage: 1.92,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "meleeTwoHanded",
                        attackAnims: ["axeSwing"]
                    },
                    sound: {
                        pickup: "heavy_pickup_01",
                        swing: "heavy_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "axe_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-woodaxe.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-woodaxe.img",
                        pos: {
                            x: -12.5,
                            y: -16
                        },
                        rot: 1.2,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215,
                        leftHandOntop: !0
                    }
                },
                woodaxe_bloody: {
                    name: "Axe Bloodstained",
                    type: "melee",
                    quality: 0,
                    armorPiercing: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: 1,
                    damageTime: .18,
                    cooldownTime: .18,
                    damage: 36,
                    obstacleDamage: 1.92,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "meleeTwoHanded",
                        attackAnims: ["axeSwing"]
                    },
                    sound: {
                        pickup: "heavy_pickup_01",
                        swing: "heavy_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "axe_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-woodaxe-bloody.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-woodaxe-bloody.img",
                        pos: {
                            x: -12.5,
                            y: -16
                        },
                        rot: 1.2,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215,
                        leftHandOntop: !0
                    }
                },
                fireaxe: {
                    name: "Fire Axe",
                    type: "melee",
                    quality: 1,
                    armorPiercing: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: 1,
                    damageTime: .21,
                    cooldownTime: .21,
                    damage: 44,
                    obstacleDamage: 2.4,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "meleeTwoHanded",
                        attackAnims: ["axeSwing"]
                    },
                    sound: {
                        pickup: "heavy_pickup_01",
                        swing: "heavy_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "axe_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-fireaxe.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-fireaxe.img",
                        pos: {
                            x: -12.5,
                            y: -4
                        },
                        rot: 1.2,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215,
                        leftHandOntop: !0
                    }
                },
                katana: {
                    name: "Katana",
                    type: "melee",
                    quality: 0,
                    armorPiercing: !0,
                    cleave: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.75,
                        y: 0
                    },
                    attackRad: 2,
                    damageTime: .2,
                    cooldownTime: .2,
                    damage: 40,
                    obstacleDamage: 1.5,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "meleeKatana",
                        attackAnims: ["katanaSwing"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "medium_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-katana.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-katana.img",
                        pos: {
                            x: 52.5,
                            y: -2
                        },
                        rot: 3,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215,
                        leftHandOntop: !0
                    }
                },
                katana_rusted: {
                    name: "Katana Rusted",
                    type: "melee",
                    quality: 0,
                    armorPiercing: !0,
                    cleave: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.75,
                        y: 0
                    },
                    attackRad: 2,
                    damageTime: .2,
                    cooldownTime: .2,
                    damage: 40,
                    obstacleDamage: 1.5,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "meleeKatana",
                        attackAnims: ["katanaSwing"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "medium_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-katana-rusted.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-katana-rusted.img",
                        pos: {
                            x: 52.5,
                            y: -2
                        },
                        rot: 3,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215,
                        leftHandOntop: !0
                    }
                },
                katana_orchid: {
                    name: "Katana Orchid",
                    type: "melee",
                    quality: 1,
                    armorPiercing: !0,
                    cleave: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.75,
                        y: 0
                    },
                    attackRad: 2,
                    damageTime: .2,
                    cooldownTime: .2,
                    damage: 40,
                    obstacleDamage: 1.5,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "meleeKatana",
                        attackAnims: ["katanaSwing"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "medium_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "knife_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-katana-orchid.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-katana-orchid.img",
                        pos: {
                            x: 52.5,
                            y: -2
                        },
                        rot: 3,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215,
                        leftHandOntop: !0
                    }
                },
                naginata: {
                    name: "Naginata",
                    type: "melee",
                    quality: 1,
                    armorPiercing: !0,
                    cleave: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 3.5,
                        y: 0
                    },
                    attackRad: 2,
                    damageTime: .27,
                    cooldownTime: .27,
                    damage: 56,
                    obstacleDamage: 1.92,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "meleeNaginata",
                        attackAnims: ["naginataSwing"]
                    },
                    sound: {
                        pickup: "heavy_pickup_01",
                        swing: "heavy_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "axe_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-naginata.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-naginata.img",
                        pos: {
                            x: 42.5,
                            y: -3
                        },
                        rot: 1.9,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215,
                        leftHandOntop: !0
                    }
                },
                stonehammer: {
                    name: "Stone Hammer",
                    type: "melee",
                    quality: 1,
                    armorPiercing: !0,
                    stonePiercing: !0,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.35,
                        y: 0
                    },
                    attackRad: 1,
                    damageTime: .25,
                    cooldownTime: .25,
                    damage: 60,
                    obstacleDamage: 1.92,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "meleeTwoHanded",
                        attackAnims: ["hammerSwing"]
                    },
                    sound: {
                        pickup: "heavy_pickup_01",
                        swing: "heavy_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "axe_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-stonehammer.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        mirror: !0,
                        rot: 2.35619
                    },
                    worldImg: {
                        sprite: "loot-melee-stonehammer.img",
                        pos: {
                            x: -12.5,
                            y: -4
                        },
                        rot: 1.2,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215,
                        leftHandOntop: !0
                    }
                },
                hook: {
                    name: "Hook",
                    type: "melee",
                    quality: 1,
                    autoAttack: !0,
                    switchDelay: .25,
                    attackOffset: {
                        x: 1.5,
                        y: 0
                    },
                    attackRad: 1,
                    damageTime: .075,
                    cooldownTime: .1,
                    damage: 18,
                    obstacleDamage: 1,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "fists",
                        attackAnims: ["hook"]
                    },
                    sound: {
                        pickup: "frag_pickup_01",
                        swing: "knife_swing_01",
                        deploy: "stow_weapon_01",
                        playerHit: "hook_hit_01"
                    },
                    lootImg: {
                        sprite: "loot-melee-hook-silver.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: .785
                    },
                    worldImg: {
                        sprite: "loot-melee-hook-silver.img",
                        pos: {
                            x: 0,
                            y: -27
                        },
                        rot: .5 * Math.PI,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215,
                        renderOnHand: !0
                    }
                },
                pan: {
                    name: "Pan",
                    type: "melee",
                    quality: 1,
                    autoAttack: !1,
                    switchDelay: .25,
                    attackOffset: {
                        x: 2,
                        y: 0
                    },
                    attackRad: 1.5,
                    damageTime: .15,
                    cooldownTime: .35,
                    damage: 60,
                    obstacleDamage: .8,
                    headshotMult: 1,
                    speed: {
                        equip: 1,
                        attack: 0
                    },
                    anim: {
                        idlePose: "fists",
                        attackAnims: ["pan"]
                    },
                    sound: {
                        pickup: "pan_pickup_01",
                        swing: "heavy_swing_01",
                        deploy: "pan_pickup_01",
                        playerHit: "pan_hit_01",
                        bullet: "pan_bullet"
                    },
                    lootImg: {
                        sprite: "loot-melee-pan-black.img",
                        tint: 16777215,
                        border: "loot-circle-outer-02.img",
                        borderTint: 16777215,
                        scale: .3,
                        rot: -.785
                    },
                    worldImg: {
                        sprite: "loot-melee-pan-black-side.img",
                        pos: {
                            x: 0,
                            y: -40
                        },
                        rot: 1.125,
                        scale: {
                            x: .35,
                            y: .35
                        },
                        tint: 16777215
                    },
                    hipImg: {
                        sprite: "loot-melee-pan-black-side.img",
                        pos: {
                            x: -17.25,
                            y: 7.5
                        },
                        rot: .78 * Math.PI,
                        scale: {
                            x: .3,
                            y: .3
                        },
                        tint: 16777215
                    },
                    reflectSurface: {
                        equipped: {
                            p0: {
                                x: 2.65,
                                y: -.125
                            },
                            p1: {
                                x: 1.35,
                                y: -.74
                            }
                        },
                        unequipped: {
                            p0: {
                                x: -.625,
                                y: -1.2
                            },
                            p1: {
                                x: -1.4,
                                y: -.25
                            }
                        }
                    }
                },
                mp5: {
                    name: "MP5",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "9mm",
                    ammoSpawnCount: 90,
                    maxClip: 30,
                    maxReload: 30,
                    extendedClip: 40,
                    extendedReload: 40,
                    reloadTime: 2,
                    fireDelay: .09,
                    switchDelay: .75,
                    barrelLength: 2.625,
                    recoilTime: 1e10,
                    moveSpread: 4,
                    shotSpread: 3,
                    bulletCount: 1,
                    bulletType: "bullet_mp5",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-mp5.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
