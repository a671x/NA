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
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-med-01.img",
                        scale: {
                            x: .5,
                            y: .49
                        },
                        tint: 1184274,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .375
                    },
                    sound: {
                        shoot: "mp5_01",
                        reload: "mp5_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "mp5_switch_01"
                    }
                },
                mac10: {
                    name: "MAC-10",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "9mm",
                    ammoSpawnCount: 96,
                    maxClip: 32,
                    maxReload: 32,
                    extendedClip: 50,
                    extendedReload: 50,
                    reloadTime: 1.8,
                    fireDelay: .045,
                    switchDelay: .75,
                    barrelLength: 2.45,
                    recoilTime: 1e10,
                    moveSpread: 11,
                    shotSpread: 10,
                    bulletCount: 1,
                    bulletType: "bullet_mac10",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-mac10.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-med-01.img",
                        scale: {
                            x: .5,
                            y: .44
                        },
                        tint: 3684408,
                        leftHandOffset: 1.4,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .35
                    },
                    sound: {
                        shoot: "mac10_01",
                        reload: "mac10_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "mac10_switch_01"
                    }
                },
                ump9: {
                    name: "UMP9",
                    type: "gun",
                    quality: 0,
                    fireMode: "burst",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "9mm",
                    ammoSpawnCount: 90,
                    maxClip: 30,
                    maxReload: 30,
                    extendedClip: 40,
                    extendedReload: 40,
                    reloadTime: 1.9,
                    fireDelay: .35,
                    burstDelay: .07,
                    switchDelay: .75,
                    barrelLength: 2.7,
                    recoilTime: 1e10,
                    moveSpread: 3,
                    shotSpread: 1.5,
                    bulletCount: 1,
                    burstCount: 3,
                    bulletType: "bullet_ump9",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-ump9.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-med-01.img",
                        scale: {
                            x: .5,
                            y: .515
                        },
                        tint: 1184274,
                        leftHandOffset: 5.6,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .4
                    },
                    sound: {
                        shoot: "ump9_01",
                        reload: "ump9_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "ump9_switch_01"
                    }
                },
                vector: {
                    name: "Vector",
                    type: "gun",
                    quality: 1,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "9mm",
                    ammoSpawnCount: 99,
                    maxClip: 33,
                    maxReload: 33,
                    extendedClip: 40,
                    extendedReload: 40,
                    reloadTime: 1.6,
                    fireDelay: .038,
                    switchDelay: .75,
                    barrelLength: 2.5,
                    recoilTime: 1e10,
                    moveSpread: 4.5,
                    shotSpread: 2.5,
                    bulletCount: 1,
                    bulletType: "bullet_vector",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-vector.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-med-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 9009504,
                        leftHandOffset: 7,
                        recoil: .89
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .4
                    },
                    sound: {
                        shoot: "vector_01",
                        reload: "vector_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "vector_switch_01"
                    }
                },
                vector45: {
                    name: "Vector",
                    type: "gun",
                    quality: 1,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "45acp",
                    ammoSpawnCount: 75,
                    maxClip: 25,
                    maxReload: 25,
                    extendedClip: 32,
                    extendedReload: 32,
                    reloadTime: 1.6,
                    fireDelay: .044,
                    switchDelay: .75,
                    barrelLength: 2.5,
                    recoilTime: 1e10,
                    moveSpread: 6.5,
                    shotSpread: 4.5,
                    bulletCount: 1,
                    bulletType: "bullet_vector45",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-vector45.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-med-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 9009504,
                        leftHandOffset: 7,
                        recoil: .89
                    },
                    particle: {
                        shellScale: 1.2,
                        shellOffset: .4
                    },
                    sound: {
                        shoot: "vector_02",
                        reload: "vector_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "vector_switch_01"
                    }
                },
                scorpion: {
                    name: "CZ-3A1",
                    type: "gun",
                    quality: 1,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "9mm",
                    ammoSpawnCount: 90,
                    maxClip: 30,
                    maxReload: 30,
                    extendedClip: 40,
                    extendedReload: 40,
                    reloadTime: 2.2,
                    fireDelay: .055,
                    switchDelay: .75,
                    barrelLength: 3.6,
                    recoilTime: 1e10,
                    moveSpread: 5,
                    shotSpread: 4,
                    bulletCount: 1,
                    bulletType: "bullet_scorpion",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-scorpion.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-scorpion-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 8,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .375
                    },
                    sound: {
                        shoot: "scorpion_01",
                        reload: "scorpion_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "scorpion_switch_01"
                    }
                },
                famas: {
                    name: "FAMAS",
                    type: "gun",
                    quality: 0,
                    fireMode: "burst",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "556mm",
                    ammoSpawnCount: 75,
                    maxClip: 25,
                    maxReload: 25,
                    extendedClip: 35,
                    extendedReload: 35,
                    reloadTime: 2.3,
                    fireDelay: .35,
                    burstDelay: .07,
                    switchDelay: .75,
                    barrelLength: 2.95,
                    recoilTime: 1e10,
                    moveSpread: 2,
                    shotSpread: 1.1,
                    bulletCount: 1,
                    burstCount: 3,
                    bulletType: "bullet_famas",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-famas.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-med-01.img",
                        scale: {
                            x: .5,
                            y: .53
                        },
                        tint: 10061929,
                        leftHandOffset: 5.6,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .425
                    },
                    sound: {
                        shoot: "famas_01",
                        reload: "famas_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "famas_switch_01"
                    }
                },
                hk416: {
                    name: "M416",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "556mm",
                    ammoSpawnCount: 90,
                    maxClip: 30,
                    maxReload: 30,
                    extendedClip: 40,
                    extendedReload: 40,
                    reloadTime: 2.3,
                    fireDelay: .075,
                    switchDelay: .75,
                    barrelLength: 2.7,
                    recoilTime: 1e10,
                    moveSpread: 8,
                    shotSpread: 4,
                    bulletCount: 1,
                    bulletType: "bullet_hk416",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-hk416.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-med-01.img",
                        scale: {
                            x: .5,
                            y: .52
                        },
                        tint: 14402714,
                        leftHandOffset: 4.2,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .4
                    },
                    sound: {
                        shoot: "hk416_01",
                        reload: "hk416_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "hk416_switch_01"
                    }
                },
                m4a1: {
                    name: "M4A1-S",
                    type: "gun",
                    quality: 1,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "556mm",
                    ammoSpawnCount: 90,
                    maxClip: 30,
                    maxReload: 30,
                    extendedClip: 40,
                    extendedReload: 40,
                    reloadTime: 3.1,
                    fireDelay: .082,
                    switchDelay: .75,
                    barrelLength: 3.5,
                    recoilTime: 1e10,
                    moveSpread: 4,
                    shotSpread: 2,
                    bulletCount: 1,
                    bulletType: "bullet_m4a1",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m4a1.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-m4a1-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 7.9,
                        recoil: 1.3
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .4
                    },
                    sound: {
                        shoot: "m4a1_01",
                        reload: "m4a1_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m4a1_switch_01",
                        fallOff: 3
                    }
                },
                mk12: {
                    name: "Mk 12 SPR",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "556mm",
                    ammoSpawnCount: 60,
                    maxClip: 20,
                    maxReload: 20,
                    extendedClip: 30,
                    extendedReload: 30,
                    reloadTime: 2.4,
                    fireDelay: .15,
                    switchDelay: .75,
                    barrelLength: 3.5,
                    recoilTime: 1e10,
                    moveSpread: 3,
                    shotSpread: 1,
                    bulletCount: 1,
                    bulletType: "bullet_mk12",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-mk12.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .485
                        },
                        tint: 10984586,
                        leftHandOffset: 4.2,
                        recoil: 1.66
                    },
                    particle: {
                        shellScale: 1.3,
                        shellOffset: .55
                    },
                    sound: {
                        shoot: "mk12_01",
                        reload: "mk12_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "mk12_switch_01"
                    }
                },
                m249: {
                    name: "M249",
                    type: "gun",
                    quality: 1,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "556mm",
                    ammoSpawnCount: 200,
                    maxClip: 100,
                    maxReload: 100,
                    extendedClip: 150,
                    extendedReload: 150,
                    reloadTime: 6.7,
                    fireDelay: .08,
                    switchDelay: .75,
                    barrelLength: 3.75,
                    recoilTime: 1e10,
                    moveSpread: 6,
                    shotSpread: 1.5,
                    bulletCount: 1,
                    bulletType: "bullet_m249",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: -4
                    },
                    lootImg: {
                        sprite: "loot-weapon-m249.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-m249-top-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 13.2,
                        recoil: 1.33,
                        magImg: {
                            sprite: "gun-m249-bot-01.img",
                            pos: {
                                x: 0,
                                y: -20.5
                            }
                        }
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .5875
                    },
                    sound: {
                        shoot: "m249_01",
                        reload: "m249_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "m249_switch_01"
                    }
                },
                qbb97: {
                    name: "QBB-97",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "556mm",
                    ammoSpawnCount: 150,
                    maxClip: 75,
                    maxReload: 75,
                    extendedClip: 95,
                    extendedReload: 95,
                    reloadTime: 3.9,
                    fireDelay: .1,
                    switchDelay: .75,
                    barrelLength: 3.1,
                    recoilTime: 1e10,
                    moveSpread: .5,
                    shotSpread: 4,
                    bulletCount: 1,
                    bulletType: "bullet_qbb97",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: -2
                    },
                    lootImg: {
                        sprite: "loot-weapon-qbb97.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .425
                        },
                        tint: 1973790,
                        leftHandOffset: 8.4,
                        recoil: 1.33,
                        magImg: {
                            sprite: "gun-qbb97-bot-01.img",
                            pos: {
                                x: -1.5,
                                y: -14.25
                            }
                        }
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .5875
                    },
                    sound: {
                        shoot: "qbb97_01",
                        reload: "qbb97_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "qbb97_switch_01"
                    }
                },
                ak47: {
                    name: "AK-47",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    ammoSpawnCount: 90,
                    maxClip: 30,
                    maxReload: 30,
                    extendedClip: 40,
                    extendedReload: 40,
                    reloadTime: 2.5,
                    fireDelay: .1,
                    switchDelay: .75,
                    barrelLength: 3.15,
                    recoilTime: 1e10,
                    moveSpread: 7.5,
                    shotSpread: 2.5,
                    bulletCount: 1,
                    bulletType: "bullet_ak47",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-ak.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .435
                        },
                        tint: 6433298,
                        leftHandOffset: 2.8,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .45
                    },
                    sound: {
                        shoot: "ak47_01",
                        reload: "ak47_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "ak47_switch_01"
                    }
                },
                scar: {
                    name: "SCAR-H",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    ammoSpawnCount: 80,
                    maxClip: 20,
                    maxReload: 20,
                    extendedClip: 30,
                    extendedReload: 30,
                    reloadTime: 2.7,
                    fireDelay: .09,
                    switchDelay: .75,
                    barrelLength: 3.15,
                    recoilTime: 1e10,
                    moveSpread: 5,
                    shotSpread: 2,
                    bulletCount: 1,
                    bulletType: "bullet_scar",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-scar.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .435
                        },
                        tint: 10189640,
                        leftHandOffset: 2.8,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .45
                    },
                    sound: {
                        shoot: "scar_01",
                        reload: "scar_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "scar_switch_01"
                    }
                },
                an94: {
                    name: "AN-94",
                    type: "gun",
                    quality: 1,
                    fireMode: "burst",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    ammoSpawnCount: 90,
                    maxClip: 45,
                    maxReload: 45,
                    extendedClip: 60,
                    extendedReload: 60,
                    reloadTime: 2.35,
                    fireDelay: .24,
                    burstDelay: .025,
                    switchDelay: .75,
                    barrelLength: 3.25,
                    recoilTime: 1e10,
                    moveSpread: 4,
                    shotSpread: 1.5,
                    bulletCount: 1,
                    burstCount: 2,
                    burstSounds: 1,
                    bulletType: "bullet_an94",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-an94.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .46
                        },
                        tint: 2960685,
                        leftHandOffset: 2.85,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .45
                    },
                    sound: {
                        shoot: "an94_01",
                        reload: "an94_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "an94_switch_01"
                    }
                },
                dp28: {
                    name: "DP-28",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    ammoSpawnCount: 120,
                    maxClip: 60,
                    maxReload: 60,
                    extendedClip: 80,
                    extendedReload: 80,
                    reloadTime: 3.3,
                    fireDelay: .115,
                    switchDelay: .75,
                    barrelLength: 3.75,
                    recoilTime: 1e10,
                    moveSpread: 9,
                    shotSpread: 2,
                    bulletCount: 1,
                    bulletType: "bullet_dp28",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: -2
                    },
                    lootImg: {
                        sprite: "loot-weapon-dp28.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .53
                        },
                        tint: 1710618,
                        leftHandOffset: 8.4,
                        recoil: 1.33,
                        magImg: {
                            sprite: "gun-dp28-top-01.img",
                            pos: {
                                x: 0,
                                y: -22.5
                            },
                            top: !0
                        }
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .6
                    },
                    sound: {
                        shoot: "dp28_01",
                        reload: "dp28_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "dp28_switch_01"
                    }
                },
                bar: {
                    name: "BAR M1918",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    ammoSpawnCount: 80,
                    maxClip: 20,
                    maxReload: 20,
                    extendedClip: 40,
                    extendedReload: 40,
                    reloadTime: 2.7,
                    fireDelay: .12,
                    switchDelay: .75,
                    barrelLength: 3.7,
                    recoilTime: 1e10,
                    moveSpread: 8,
                    shotSpread: 2,
                    bulletCount: 1,
                    bulletType: "bullet_bar",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: -1.5
                    },
                    lootImg: {
                        sprite: "loot-weapon-bar.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .52
                        },
                        tint: 5065810,
                        leftHandOffset: 6.8,
                        recoil: 1.4
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .6
                    },
                    sound: {
                        shoot: "bar_01",
                        reload: "bar_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "bar_switch_01"
                    }
                },
                pkp: {
                    name: "PKP Pecheneg",
                    type: "gun",
                    quality: 1,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    ammoSpawnCount: 200,
                    maxClip: 200,
                    maxReload: 200,
                    extendedClip: 250,
                    extendedReload: 250,
                    reloadTime: 5,
                    fireDelay: .1,
                    switchDelay: .75,
                    barrelLength: 3.6,
                    recoilTime: 1e10,
                    moveSpread: 7.5,
                    shotSpread: 2.5,
                    bulletCount: 1,
                    bulletType: "bullet_pkp",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: -5
                    },
                    lootImg: {
                        sprite: "loot-weapon-pkp.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-pkp-top-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 8.5,
                        recoil: 1.33,
                        magImg: {
                            sprite: "gun-pkp-bot-01.img",
                            pos: {
                                x: 0,
                                y: -17.5
                            }
                        }
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .5875,
                        shellReverse: !0
                    },
                    sound: {
                        shoot: "pkp_01",
                        reload: "pkp_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "pkp_switch_01"
                    }
                },
                model94: {
                    name: "Model 94",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "single",
                    caseTiming: "shoot",
                    ammo: "45acp",
                    ammoSpawnCount: 64,
                    maxClip: 8,
                    maxReload: 1,
                    extendedClip: 8,
                    extendedReload: 1,
                    reloadTime: .6,
                    fireDelay: .75,
                    switchDelay: 1,
                    pullDelay: 1,
                    barrelLength: 3.7,
                    recoilTime: 1e10,
                    moveSpread: 3.5,
                    shotSpread: 2,
                    bulletCount: 1,
                    bulletType: "bullet_model94",
                    headshotMult: 1.5,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-model94.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .5175
                        },
                        tint: 10510624,
                        leftHandOffset: 2.8,
                        recoil: 2.33
                    },
                    particle: {
                        shellScale: 1.4,
                        shellOffset: .6
                    },
                    sound: {
                        shoot: "model94_01",
                        reload: "model94_reload_01",
                        cycle: "model94_cycle_01",
                        pull: "model94_cycle_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "model94_cycle_01"
                    }
                },
                mosin: {
                    name: "Mosin-Nagant",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "single",
                    reloadModeAlt: "mag",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    aimDelay: !0,
                    ammoSpawnCount: 20,
                    maxClip: 5,
                    maxReload: 1,
                    maxReloadAlt: 5,
                    extendedClip: 5,
                    extendedReload: 1,
                    extendedReloadAlt: 5,
                    reloadTime: .9,
                    reloadTimeAlt: 3,
                    fireDelay: 1.75,
                    switchDelay: 1,
                    pullDelay: 1,
                    barrelLength: 3.75,
                    recoilTime: 1e10,
                    moveSpread: 3,
                    shotSpread: 1,
                    bulletCount: 1,
                    bulletType: "bullet_mosin",
                    headshotMult: 1.5,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-mosin.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .52
                        },
                        tint: 3348992,
                        leftHandOffset: 2.8,
                        recoil: 2.33
                    },
                    particle: {
                        shellScale: 1.6,
                        shellOffset: .6
                    },
                    sound: {
                        shoot: "mosin_01",
                        reload: "mosin_reload_01",
                        reloadAlt: "mosin_reload_02",
                        cycle: "mosin_cycle_01",
                        pull: "mosin_pull_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "mosin_cycle_01"
                    }
                },
                sv98: {
                    name: "SV-98",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    aimDelay: !0,
                    ammoSpawnCount: 30,
                    maxClip: 10,
                    maxReload: 10,
                    extendedClip: 15,
                    extendedReload: 15,
                    reloadTime: 2.7,
                    fireDelay: 1.5,
                    switchDelay: 1,
                    pullDelay: .8,
                    barrelLength: 3.5,
                    recoilTime: 1e10,
                    moveSpread: 2.5,
                    shotSpread: 1,
                    bulletCount: 1,
                    bulletType: "bullet_sv98",
                    headshotMult: 1.5,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-sv98.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .4925
                        },
                        tint: 6654279,
                        leftHandOffset: 2.8,
                        recoil: 2.33
                    },
                    particle: {
                        shellScale: 1.6,
                        shellOffset: .6
                    },
                    sound: {
                        shoot: "sv98_01",
                        reload: "sv98_reload_01",
                        cycle: "sv98_cycle_01",
                        pull: "sv98_pull_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "sv98_cycle_01"
                    }
                },
                awc: {
                    name: "AWM-S",
                    type: "gun",
                    quality: 1,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "308sub",
                    aimDelay: !0,
                    ammoSpawnCount: 20,
                    maxClip: 5,
                    maxReload: 5,
                    extendedClip: 7,
                    extendedReload: 7,
                    reloadTime: 3.6,
                    fireDelay: 1.5,
                    switchDelay: 1,
                    pullDelay: 1.4,
                    barrelLength: 3.8,
                    recoilTime: 1e10,
                    moveSpread: 4,
                    shotSpread: .5,
                    bulletCount: 1,
                    bulletType: "bullet_awc",
                    headshotMult: 1,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-awc.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-awc-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 11,
                        recoil: 2.66
                    },
                    particle: {
                        shellScale: 1.5,
                        shellOffset: .6
                    },
                    sound: {
                        shoot: "awc_01",
                        reload: "awc_reload_01",
                        cycle: "awc_cycle_01",
                        pull: "awc_pull_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "awc_cycle_01",
                        fallOff: 3
                    }
                },
                m39: {
                    name: "M39 EMR",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    ammoSpawnCount: 60,
                    maxClip: 20,
                    maxReload: 20,
                    extendedClip: 30,
                    extendedReload: 30,
                    reloadTime: 2.5,
                    fireDelay: .2,
                    switchDelay: .75,
                    barrelLength: 3.5,
                    recoilTime: 1e10,
                    moveSpread: 4.25,
                    shotSpread: 1,
                    bulletCount: 1,
                    bulletType: "bullet_m39",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m39.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .4925
                        },
                        tint: 3355443,
                        leftHandOffset: 2.8,
                        recoil: 1.66
                    },
                    particle: {
                        shellScale: 1.3,
                        shellOffset: .575
                    },
                    sound: {
                        shoot: "m39_01",
                        reload: "m39_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "m39_switch_01"
                    }
                },
                garand: {
                    name: "M1 Garand",
                    type: "gun",
                    quality: 1,
                    fireMode: "single",
                    reloadMode: "clip",
                    caseTiming: "shoot",
                    ammo: "762mm",
                    ammoSpawnCount: 40,
                    maxClip: 8,
                    maxReload: 8,
                    extendedClip: 8,
                    extendedReload: 8,
                    reloadTime: 2.1,
                    fireDelay: .2,
                    switchDelay: .75,
                    barrelLength: 3.6,
                    recoilTime: .36,
                    moveSpread: 4,
                    shotSpread: 1,
                    bulletCount: 1,
                    bulletType: "bullet_garand",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-garand.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-garand-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 8,
                        recoil: 1.66
                    },
                    particle: {
                        shellScale: 1.3,
                        shellOffset: .575
                    },
                    sound: {
                        shoot: "garand_01",
                        shootLast: "garand_02",
                        reload: "garand_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "garand_switch_01"
                    }
                },
                m870: {
                    name: "M870",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "single",
                    caseTiming: "shoot",
                    ammo: "12gauge",
                    deployGroup: 1,
                    ammoSpawnCount: 10,
                    maxClip: 5,
                    maxReload: 1,
                    extendedClip: 10,
                    extendedReload: 1,
                    reloadTime: .75,
                    fireDelay: .9,
                    switchDelay: .9,
                    pullDelay: .9,
                    barrelLength: 3.15,
                    recoilTime: 1e10,
                    moveSpread: 2,
                    shotSpread: 10,
                    bulletCount: 9,
                    jitter: 1,
                    bulletType: "bullet_buckshot",
                    headshotMult: 1.5,
                    lootImg: {
                        sprite: "loot-weapon-pumpshotgun.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .435
                        },
                        tint: 3348992,
                        leftHandOffset: 7,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .45
                    },
                    sound: {
                        shoot: "m870_01",
                        reload: "m870_reload_01",
                        cycle: "m870_cycle_01",
                        pull: "m870_pull_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m870_cycle_01"
                    }
                },
                m1100: {
                    name: "M1100",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "single",
                    caseTiming: "shoot",
                    ammo: "12gauge",
                    ammoSpawnCount: 12,
                    maxClip: 4,
                    maxReload: 1,
                    extendedClip: 8,
                    extendedReload: 1,
                    reloadTime: .7,
                    fireDelay: .3,
                    switchDelay: .9,
                    barrelLength: 3.15,
                    recoilTime: 1e10,
                    moveSpread: 2,
                    shotSpread: 25,
                    bulletCount: 18,
                    jitter: 1,
                    bulletType: "bullet_birdshot",
                    headshotMult: 1.5,
                    lootImg: {
                        sprite: "loot-weapon-m1100.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .435
                        },
                        tint: 3032110,
                        leftHandOffset: 7,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .45
                    },
                    sound: {
                        shoot: "m1100_01",
                        reload: "m1100_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m1100_deploy_01"
                    }
                },
                mp220: {
                    name: "MP220",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "reload",
                    ammo: "12gauge",
                    ammoSpawnCount: 10,
                    maxClip: 2,
                    maxReload: 2,
                    extendedClip: 2,
                    extendedReload: 2,
                    reloadTime: 2.7,
                    fireDelay: .2,
                    switchDelay: .3,
                    barrelLength: 2.7,
                    recoilTime: 1e10,
                    moveSpread: 2,
                    shotSpread: 10,
                    bulletCount: 9,
                    jitter: 1,
                    bulletType: "bullet_buckshot",
                    headshotMult: 1.5,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-mp220.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-mp220-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 0,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .35
                    },
                    sound: {
                        shoot: "mp220_01",
                        reload: "mp220_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "mp220_deploy_01"
                    }
                },
                saiga: {
                    name: "Saiga-12",
                    type: "gun",
                    quality: 1,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "12gauge",
                    ammoSpawnCount: 20,
                    maxClip: 5,
                    maxReload: 5,
                    extendedClip: 8,
                    extendedReload: 8,
                    reloadTime: 2.5,
                    fireDelay: .4,
                    switchDelay: .75,
                    barrelLength: 3.75,
                    recoilTime: 1e10,
                    moveSpread: 2,
                    shotSpread: 10,
                    bulletCount: 9,
                    jitter: 1,
                    bulletType: "bullet_buckshot",
                    headshotMult: 1.5,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-saiga.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-saiga-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 8,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .45
                    },
                    sound: {
                        shoot: "saiga_01",
                        reload: "saiga_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "saiga_switch_01"
                    }
                },
                spas12: {
                    name: "SPAS-12",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "single",
                    caseTiming: "shoot",
                    ammo: "12gauge",
                    deployGroup: 1,
                    ammoSpawnCount: 18,
                    maxClip: 9,
                    maxReload: 1,
                    extendedClip: 12,
                    extendedReload: 1,
                    reloadTime: .55,
                    fireDelay: .75,
                    switchDelay: .75,
                    pullDelay: .75,
                    barrelLength: 2.8,
                    recoilTime: 1e10,
                    moveSpread: 3,
                    shotSpread: 4,
                    bulletCount: 9,
                    jitter: .2,
                    bulletType: "bullet_flechette",
                    headshotMult: 1.5,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-spas12.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .4
                        },
                        tint: 2966097,
                        leftHandOffset: 4.9,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .45
                    },
                    sound: {
                        shoot: "spas12_01",
                        reload: "spas12_reload_01",
                        cycle: "spas12_cycle_01",
                        pull: "spas12_pull_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "spas12_cycle_01"
                    }
                },
                m1014: {
                    name: "M1014",
                    type: "gun",
                    quality: 1,
                    fireMode: "single",
                    reloadMode: "single",
                    caseTiming: "shoot",
                    ammo: "12gauge",
                    ammoSpawnCount: 16,
                    maxClip: 8,
                    maxReload: 1,
                    extendedClip: 10,
                    extendedReload: 1,
                    reloadTime: .52,
                    fireDelay: .4,
                    switchDelay: .75,
                    barrelLength: 3.2,
                    recoilTime: .5,
                    moveSpread: 4,
                    shotSpread: 4,
                    bulletCount: 1,
                    jitter: .2,
                    bulletType: "bullet_slug",
                    headshotMult: 1.5,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m1014.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-long-01.img",
                        scale: {
                            x: .5,
                            y: .44
                        },
                        tint: 5656632,
                        leftHandOffset: 4.8,
                        recoil: 1.33
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .45
                    },
                    sound: {
                        shoot: "m1014_01",
                        reload: "m1014_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m1014_deploy_01"
                    }
                },
                usas: {
                    name: "USAS-12",
                    type: "gun",
                    quality: 1,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "12gauge",
                    toMouseHit: !0,
                    ammoSpawnCount: 30,
                    maxClip: 10,
                    maxReload: 10,
                    extendedClip: 20,
                    extendedReload: 20,
                    reloadTime: 2.9,
                    fireDelay: .5,
                    switchDelay: .75,
                    barrelLength: 3.65,
                    recoilTime: 1e10,
                    moveSpread: 6,
                    shotSpread: 7,
                    bulletCount: 1,
                    jitter: 1,
                    bulletType: "bullet_frag",
                    headshotMult: 1,
                    speed: {
                        equip: 0,
                        attack: -1
                    },
                    lootImg: {
                        sprite: "loot-weapon-usas.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-usas-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 16,
                        recoil: 1.5
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .35
                    },
                    sound: {
                        shoot: "usas_01",
                        reload: "usas_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_02",
                        deploy: "usas_switch_01"
                    }
                },
                m9: {
                    name: "M9",
                    type: "gun",
                    quality: 1,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "9mm",
                    ammoSpawnCount: 45,
                    dualWieldType: "m9_dual",
                    pistol: !0,
                    maxClip: 15,
                    maxReload: 15,
                    extendedClip: 30,
                    extendedReload: 30,
                    reloadTime: 1.6,
                    fireDelay: .12,
                    switchDelay: .25,
                    barrelLength: 2.2,
                    recoilTime: 1e10,
                    moveSpread: 8,
                    shotSpread: 8,
                    bulletCount: 1,
                    bulletType: "bullet_m9",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m9.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .505
                        },
                        tint: 1973790,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .25
                    },
                    sound: {
                        shoot: "m9_01",
                        reload: "m9_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m9_switch_01"
                    }
                },
                m9_dual: {
                    name: "Dual M9",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    isDual: !0,
                    pistol: !0,
                    ammo: "9mm",
                    ammoSpawnCount: 45,
                    maxClip: 30,
                    maxReload: 30,
                    extendedClip: 60,
                    extendedReload: 60,
                    reloadTime: 3.1,
                    fireDelay: .08,
                    switchDelay: .25,
                    barrelLength: 2.2,
                    recoilTime: 1e10,
                    moveSpread: 9,
                    shotSpread: 11,
                    bulletCount: 1,
                    bulletType: "bullet_m9",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m9-dual.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .505
                        },
                        tint: 1973790,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .25
                    },
                    sound: {
                        shoot: "m9_01",
                        reload: "m9_reload_02",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m9_switch_01"
                    }
                },
                m93r: {
                    name: "M93R",
                    type: "gun",
                    quality: 0,
                    fireMode: "burst",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "9mm",
                    ammoSpawnCount: 60,
                    dualWieldType: "m93r_dual",
                    pistol: !1,
                    maxClip: 20,
                    maxReload: 20,
                    extendedClip: 30,
                    extendedReload: 30,
                    reloadTime: 1.8,
                    fireDelay: .28,
                    burstDelay: .04,
                    switchDelay: .25,
                    barrelLength: 2.3,
                    recoilTime: 1e10,
                    moveSpread: 4,
                    shotSpread: 4,
                    bulletCount: 1,
                    burstCount: 3,
                    bulletType: "bullet_m93r",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m93r.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .51
                        },
                        tint: 2766875,
                        leftHandOffset: .8,
                        recoil: .5
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .25
                    },
                    sound: {
                        shoot: "m93r_01",
                        reload: "m93r_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m93r_switch_01"
                    }
                },
                m93r_dual: {
                    name: "Dual M93R",
                    type: "gun",
                    quality: 0,
                    fireMode: "burst",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    isDual: !0,
                    pistol: !0,
                    ammo: "9mm",
                    ammoSpawnCount: 60,
                    maxClip: 40,
                    maxReload: 40,
                    extendedClip: 60,
                    extendedReload: 60,
                    reloadTime: 3.3,
                    fireDelay: .18,
                    burstDelay: .04,
                    switchDelay: .25,
                    barrelLength: 2.2,
                    recoilTime: 1e10,
                    moveSpread: 6,
                    shotSpread: 7,
                    bulletCount: 1,
                    burstCount: 3,
                    bulletType: "bullet_m93r",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m93r-dual.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .51
                        },
                        tint: 2766875,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .25
                    },
                    sound: {
                        shoot: "m93r_01",
                        reload: "m93r_reload_02",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m93r_switch_01"
                    }
                },
                glock: {
                    name: "G18C",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "9mm",
                    ammoSpawnCount: 51,
                    dualWieldType: "glock_dual",
                    pistol: !0,
                    maxClip: 17,
                    maxReload: 17,
                    extendedClip: 31,
                    extendedReload: 31,
                    reloadTime: 1.95,
                    fireDelay: .06,
                    switchDelay: .25,
                    barrelLength: 2.2,
                    recoilTime: 1e10,
                    moveSpread: 10,
                    shotSpread: 12,
                    bulletCount: 1,
                    bulletType: "bullet_glock",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-glock.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .49
                        },
                        tint: 1973790,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .25
                    },
                    sound: {
                        shoot: "glock_01",
                        reload: "glock_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "glock_switch_01"
                    }
                },
                glock_dual: {
                    name: "Dual G18C",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "9mm",
                    ammoSpawnCount: 51,
                    isDual: !0,
                    pistol: !0,
                    maxClip: 34,
                    maxReload: 34,
                    extendedClip: 62,
                    extendedReload: 62,
                    reloadTime: 3.8,
                    fireDelay: .03,
                    switchDelay: .25,
                    barrelLength: 2.2,
                    recoilTime: 1e10,
                    moveSpread: 16,
                    shotSpread: 18,
                    bulletCount: 1,
                    bulletType: "bullet_glock",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-glock-dual.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .49
                        },
                        tint: 1973790,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .25
                    },
                    sound: {
                        shoot: "glock_01",
                        reload: "glock_reload_02",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "glock_switch_01"
                    }
                },
                ot38: {
                    name: "OT-38",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "reload",
                    ammo: "762mm",
                    ammoSpawnCount: 20,
                    dualWieldType: "ot38_dual",
                    pistol: !0,
                    maxClip: 5,
                    maxReload: 5,
                    extendedClip: 5,
                    extendedReload: 5,
                    reloadTime: 2,
                    fireDelay: .4,
                    switchDelay: .3,
                    barrelLength: 2.05,
                    recoilTime: 1e10,
                    moveSpread: 3,
                    shotSpread: 1.25,
                    bulletCount: 1,
                    bulletType: "bullet_ot38",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-ot38.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .4625
                        },
                        tint: 7368816,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .225
                    },
                    sound: {
                        shoot: "ot38_01",
                        reload: "ot38_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "ot38_switch_01"
                    }
                },
                ot38_dual: {
                    name: "Dual OT-38",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "reload",
                    ammo: "762mm",
                    ammoSpawnCount: 20,
                    isDual: !0,
                    pistol: !0,
                    maxClip: 10,
                    maxReload: 10,
                    extendedClip: 10,
                    extendedReload: 10,
                    reloadTime: 3.8,
                    fireDelay: .2,
                    switchDelay: .3,
                    barrelLength: 2,
                    recoilTime: 1e10,
                    moveSpread: 4,
                    shotSpread: 1.75,
                    bulletCount: 1,
                    bulletType: "bullet_ot38",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-ot38-dual.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .4625
                        },
                        tint: 7368816,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .225
                    },
                    sound: {
                        shoot: "ot38_01",
                        reload: "ot38_reload_02",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "ot38_switch_01"
                    }
                },
                ots38: {
                    name: "OTs-38",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "reload",
                    ammo: "762mm",
                    ammoSpawnCount: 20,
                    dualWieldType: "ots38_dual",
                    pistol: !0,
                    maxClip: 5,
                    maxReload: 5,
                    extendedClip: 5,
                    extendedReload: 5,
                    reloadTime: 2,
                    fireDelay: .36,
                    switchDelay: .3,
                    barrelLength: 2.05,
                    recoilTime: 1e10,
                    moveSpread: 2.4,
                    shotSpread: 1.2,
                    bulletCount: 1,
                    bulletType: "bullet_ots38",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-ots38.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-ots38-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .225
                    },
                    sound: {
                        shoot: "ots38_01",
                        reload: "ot38_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "ot38_switch_01"
                    }
                },
                ots38_dual: {
                    name: "Dual OTs-38",
                    type: "gun",
                    quality: 1,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "reload",
                    ammo: "762mm",
                    ammoSpawnCount: 40,
                    isDual: !0,
                    pistol: !0,
                    maxClip: 10,
                    maxReload: 10,
                    extendedClip: 10,
                    extendedReload: 10,
                    reloadTime: 3.8,
                    fireDelay: .18,
                    switchDelay: .3,
                    barrelLength: 2,
                    recoilTime: 1e10,
                    moveSpread: 2.8,
                    shotSpread: 1.4,
                    bulletCount: 1,
                    bulletType: "bullet_ots38",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-ots38-dual.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-ots38-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 16777215,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .225
                    },
                    sound: {
                        shoot: "ots38_01",
                        reload: "ot38_reload_02",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "ot38_switch_01"
                    }
                },
                colt45: {
                    name: "Peacemaker",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "reload",
                    ammo: "45acp",
                    ammoSpawnCount: 48,
                    dualWieldType: "colt45_dual",
                    pistol: !0,
                    maxClip: 6,
                    maxReload: 6,
                    extendedClip: 6,
                    extendedReload: 6,
                    reloadTime: 3,
                    fireDelay: .12,
                    switchDelay: .3,
                    barrelLength: 2.26,
                    recoilTime: .35,
                    moveSpread: 3,
                    shotSpread: 16,
                    bulletCount: 1,
                    bulletType: "bullet_colt45",
                    headshotMult: 1.5,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-colt45.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .52
                        },
                        tint: 12895428,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1.2,
                        shellOffset: .225
                    },
                    sound: {
                        shoot: "colt45_01",
                        reload: "colt45_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "colt45_switch_01"
                    }
                },
                colt45_dual: {
                    name: "Dual Peacemaker",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "reload",
                    ammo: "45acp",
                    ammoSpawnCount: 48,
                    isDual: !0,
                    pistol: !0,
                    maxClip: 12,
                    maxReload: 12,
                    extendedClip: 12,
                    extendedReload: 12,
                    reloadTime: 5.1,
                    fireDelay: .13,
                    switchDelay: .3,
                    barrelLength: 2.26,
                    recoilTime: .35,
                    moveSpread: 3,
                    shotSpread: 16,
                    bulletCount: 1,
                    bulletType: "bullet_colt45",
                    headshotMult: 1.5,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-colt45-dual.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .52
                        },
                        tint: 12895428,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1.2,
                        shellOffset: .225
                    },
                    sound: {
                        shoot: "colt45_01",
                        reload: "colt45_reload_02",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "colt45_switch_01"
                    }
                },
                m1911: {
                    name: "M911",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "45acp",
                    ammoSpawnCount: 28,
                    dualWieldType: "m1911_dual",
                    pistol: !0,
                    maxClip: 7,
                    maxReload: 7,
                    extendedClip: 12,
                    extendedReload: 12,
                    reloadTime: 2.1,
                    fireDelay: .13,
                    switchDelay: .25,
                    barrelLength: 2.1,
                    recoilTime: 1e10,
                    moveSpread: 7,
                    shotSpread: 6,
                    bulletCount: 1,
                    bulletType: "bullet_m1911",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m1911.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 9605778,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1.2,
                        shellOffset: .25
                    },
                    sound: {
                        shoot: "m1911_01",
                        reload: "m1911_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m1911_switch_01"
                    }
                },
                m1911_dual: {
                    name: "Dual M911",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    isDual: !0,
                    pistol: !0,
                    ammo: "45acp",
                    ammoSpawnCount: 28,
                    maxClip: 14,
                    maxReload: 14,
                    extendedClip: 24,
                    extendedReload: 24,
                    reloadTime: 3.6,
                    fireDelay: .085,
                    switchDelay: .25,
                    barrelLength: 2.1,
                    recoilTime: 1e10,
                    moveSpread: 8,
                    shotSpread: 9.5,
                    bulletCount: 1,
                    bulletType: "bullet_m1911",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m1911-dual.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .5
                        },
                        tint: 9605778,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1.2,
                        shellOffset: .25
                    },
                    sound: {
                        shoot: "m1911_01",
                        reload: "m1911_reload_02",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m1911_switch_01"
                    }
                },
                m1a1: {
                    name: "M1A1",
                    type: "gun",
                    quality: 0,
                    fireMode: "auto",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "45acp",
                    ammoSpawnCount: 90,
                    maxClip: 30,
                    maxReload: 30,
                    extendedClip: 50,
                    extendedReload: 50,
                    reloadTime: 2.8,
                    fireDelay: .095,
                    switchDelay: .75,
                    barrelLength: 2.8,
                    recoilTime: 1e10,
                    moveSpread: 6,
                    shotSpread: 6,
                    bulletCount: 1,
                    bulletType: "bullet_m1a1",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-m1a1.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-med-01.img",
                        scale: {
                            x: .5,
                            y: .53
                        },
                        tint: 3674112,
                        leftHandOffset: 5.8,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1.2,
                        shellOffset: .375
                    },
                    sound: {
                        shoot: "m1a1_01",
                        reload: "m1a1_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "m1a1_switch_01"
                    }
                },
                deagle: {
                    name: "DEagle 50",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "50AE",
                    ammoSpawnCount: 56,
                    dualWieldType: "deagle_dual",
                    pistol: !0,
                    maxClip: 7,
                    maxReload: 7,
                    extendedClip: 9,
                    extendedReload: 9,
                    reloadTime: 2.3,
                    fireDelay: .16,
                    switchDelay: .3,
                    barrelLength: 1.855,
                    recoilTime: .5,
                    moveSpread: 6,
                    shotSpread: 2.5,
                    bulletCount: 1,
                    bulletType: "bullet_deagle",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-deagle.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .54
                        },
                        tint: 14791743,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1.4,
                        shellOffset: .265
                    },
                    sound: {
                        shoot: "deagle_01",
                        reload: "deagle_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "deagle_switch_01"
                    }
                },
                deagle_dual: {
                    name: "Dual DEagle 50",
                    type: "gun",
                    quality: 1,
                    fireMode: "single",
                    reloadMode: "mag",
                    caseTiming: "shoot",
                    ammo: "50AE",
                    ammoSpawnCount: 98,
                    isDual: !0,
                    pistol: !0,
                    maxClip: 14,
                    maxReload: 14,
                    extendedClip: 18,
                    extendedReload: 18,
                    reloadTime: 4,
                    fireDelay: .12,
                    switchDelay: .3,
                    barrelLength: 1.855,
                    recoilTime: .5,
                    moveSpread: 7.5,
                    shotSpread: 3.5,
                    bulletCount: 1,
                    bulletType: "bullet_deagle",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-deagle-dual.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .54
                        },
                        tint: 14791743,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .265
                    },
                    sound: {
                        shoot: "deagle_01",
                        reload: "deagle_reload_02",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "deagle_switch_01"
                    }
                },
                flare_gun: {
                    name: "Flare Gun",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "single",
                    caseTiming: "shoot",
                    ammo: "flare",
                    dualWieldType: "flare_gun_dual",
                    pistol: !0,
                    outsideOnly: !0,
                    ammoSpawnCount: 1,
                    maxClip: 1,
                    maxReload: 1,
                    extendedClip: 1,
                    extendedReload: 1,
                    reloadTime: 2,
                    fireDelay: .4,
                    switchDelay: .3,
                    barrelLength: 2,
                    recoilTime: 1e10,
                    moveSpread: 3,
                    shotSpread: 1.25,
                    bulletCount: 1,
                    bulletType: "bullet_flare",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-flare-gun.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .4625
                        },
                        tint: 16733184,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .225
                    },
                    sound: {
                        shoot: "flare_gun_01",
                        reload: "flare_gun_reload_01",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "gun_switch_01"
                    }
                },
                flare_gun_dual: {
                    name: "Dual Flare Gun",
                    type: "gun",
                    quality: 0,
                    fireMode: "single",
                    reloadMode: "single",
                    caseTiming: "shoot",
                    ammo: "flare",
                    isDual: !0,
                    pistol: !0,
                    outsideOnly: !0,
                    ammoSpawnCount: 2,
                    maxClip: 2,
                    maxReload: 2,
                    extendedClip: 2,
                    extendedReload: 2,
                    reloadTime: 3.5,
                    fireDelay: .3,
                    switchDelay: .3,
                    barrelLength: 2,
                    recoilTime: 1e10,
                    moveSpread: 3,
                    shotSpread: 1.25,
                    bulletCount: 1,
                    bulletType: "bullet_flare",
                    headshotMult: 2,
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-weapon-flare-gun-dual.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3
                    },
                    worldImg: {
                        sprite: "gun-short-01.img",
                        scale: {
                            x: .5,
                            y: .4625
                        },
                        tint: 16733184,
                        leftHandOffset: 0,
                        recoil: 1
                    },
                    particle: {
                        shellScale: 1,
                        shellOffset: .225
                    },
                    sound: {
                        shoot: "flare_gun_01",
                        reload: "flare_gun_reload_02",
                        pickup: "gun_pickup_01",
                        empty: "empty_fire_01",
                        deploy: "gun_switch_01"
                    }
                },
                frag: {
                    name: "Frag Grenade",
                    type: "throwable",
                    quality: 0,
                    explosionType: "explosion_frag",
                    inventoryOrder: 1,
                    cookable: !0,
                    explodeOnImpact: !1,
                    playerCollision: !1,
                    fuseTime: 4,
                    aimDistance: 0,
                    rad: 1,
                    throwPhysics: {
                        playerVelMult: .6,
                        velZ: 5,
                        speed: 20,
                        spinVel: 10 * Math.PI,
                        spinDrag: 1
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-frag.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-frag-nopin-nolever-01.img",
                        scale: .12,
                        tint: 16777215
                    },
                    handImg: {
                        equip: {
                            right: {
                                sprite: "proj-frag-pin-01.img",
                                pos: {
                                    x: 4.2,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        cook: {
                            right: {
                                sprite: "proj-frag-nopin-01.img",
                                pos: {
                                    x: 4.2,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "proj-frag-pin-part.img",
                                pos: {
                                    x: 4.2,
                                    y: 4.2
                                },
                                scale: .14
                            }
                        },
                        throwing: {
                            right: {
                                sprite: "none"
                            },
                            left: {
                                sprite: "none"
                            }
                        }
                    },
                    useThrowParticles: !0,
                    sound: {
                        pullPin: "frag_pin_01",
                        throwing: "frag_throw_01",
                        pickup: "frag_pickup_01",
                        deploy: "frag_deploy_01"
                    },
                    emoteId: 206
                },
                mirv: {
                    name: "MIRV Grenade",
                    type: "throwable",
                    quality: 1,
                    explosionType: "explosion_mirv",
                    inventoryOrder: 2,
                    cookable: !0,
                    explodeOnImpact: !1,
                    playerCollision: !1,
                    fuseTime: 4,
                    aimDistance: 0,
                    rad: 1,
                    throwPhysics: {
                        playerVelMult: .6,
                        velZ: 5,
                        speed: 20,
                        spinVel: 10 * Math.PI,
                        spinDrag: 1
                    },
                    numSplit: 6,
                    splitType: "mirv_mini",
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-mirv.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-mirv-nopin-nolever.img",
                        scale: .13,
                        tint: 16777215
                    },
                    handImg: {
                        equip: {
                            right: {
                                sprite: "proj-mirv-pin.img",
                                pos: {
                                    x: 4.2,
                                    y: 4.2
                                },
                                scale: .15
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        cook: {
                            right: {
                                sprite: "proj-mirv-nopin.img",
                                pos: {
                                    x: 4.2,
                                    y: 4.2
                                },
                                scale: .15
                            },
                            left: {
                                sprite: "proj-frag-pin-part.img",
                                pos: {
                                    x: 4.2,
                                    y: 4.2
                                },
                                scale: .15
                            }
                        },
                        throwing: {
                            right: {
                                sprite: "none"
                            },
                            left: {
                                sprite: "none"
                            }
                        }
                    },
                    useThrowParticles: !0,
                    sound: {
                        pullPin: "frag_pin_01",
                        throwing: "frag_throw_01",
                        pickup: "frag_pickup_01",
                        deploy: "frag_deploy_01"
                    },
                    emoteId: 207
                },
                mirv_mini: {
                    name: "MIRV Grenade",
                    type: "throwable",
                    quality: 0,
                    explosionType: "explosion_mirv_mini",
                    inventoryOrder: 99,
                    excludeFromInventory: !0,
                    cookable: !0,
                    explodeOnImpact: !1,
                    playerCollision: !1,
                    fuseTime: 1.8,
                    fuseVariance: .3,
                    aimDistance: 0,
                    rad: 1,
                    throwPhysics: {
                        playerVelMult: .6,
                        velZ: 5,
                        speed: 20,
                        spinVel: 10 * Math.PI,
                        spinDrag: 1
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-frag.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-mirv-mini-01.img",
                        scale: .12,
                        tint: 16777215
                    },
                    useThrowParticles: !0,
                    sound: {
                        pullPin: "frag_pin_01",
                        throwing: "frag_throw_01",
                        pickup: "frag_pickup_01",
                        deploy: "frag_deploy_01"
                    }
                },
                smoke: {
                    name: "Smoke Grenade",
                    type: "throwable",
                    quality: 0,
                    explosionType: "explosion_smoke",
                    inventoryOrder: 3,
                    cookable: !1,
                    explodeOnImpact: !1,
                    playerCollision: !1,
                    fuseTime: 2.5,
                    aimDistance: 0,
                    rad: 1,
                    throwPhysics: {
                        playerVelMult: .6,
                        velZ: 5,
                        speed: 15,
                        spinVel: 10 * Math.PI,
                        spinDrag: 1
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-smoke.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-smoke-nopin-nolever.img",
                        scale: .12,
                        tint: 16777215
                    },
                    handImg: {
                        equip: {
                            right: {
                                sprite: "proj-smoke-pin.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        cook: {
                            right: {
                                sprite: "proj-smoke-nopin.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "proj-frag-pin-part.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            }
                        },
                        throwing: {
                            right: {
                                sprite: "none"
                            },
                            left: {
                                sprite: "none"
                            }
                        }
                    },
                    useThrowParticles: !0,
                    sound: {
                        pullPin: "frag_pin_01",
                        throwing: "frag_throw_01",
                        pickup: "frag_pickup_01",
                        deploy: "frag_deploy_01"
                    },
                    emoteId: 208
                },
                strobe: {
                    name: "IR Strobe",
                    type: "throwable",
                    quality: 1,
                    explosionType: "explosion_strobe",
                    inventoryOrder: 3,
                    cookable: !1,
                    explodeOnImpact: !1,
                    playerCollision: !1,
                    fuseTime: 13.5,
                    strikeDelay: 2.5,
                    aimDistance: 0,
                    rad: 1,
                    throwPhysics: {
                        playerVelMult: .6,
                        velZ: 5,
                        speed: 25,
                        spinVel: 6 * Math.PI,
                        spinDrag: 1
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-strobe.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-strobe-armed.img",
                        scale: .12,
                        tint: 16777215
                    },
                    handImg: {
                        equip: {
                            right: {
                                sprite: "proj-strobe-unarmed.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        cook: {
                            right: {
                                sprite: "proj-strobe-arming.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            }
                        },
                        throwing: {
                            right: {
                                sprite: "none"
                            },
                            left: {
                                sprite: "none"
                            }
                        }
                    },
                    useThrowParticles: !1,
                    sound: {
                        pullPin: "strobe_click_01",
                        throwing: "frag_throw_01",
                        pickup: "frag_pickup_01",
                        deploy: "frag_deploy_01"
                    },
                    emoteId: 209
                },
                snowball: {
                    name: "Snowball",
                    type: "throwable",
                    quality: 0,
                    explosionType: "explosion_snowball",
                    freezeOnImpact: !0,
                    heavyType: "snowball_heavy",
                    inventoryOrder: 0,
                    excludeFromInventory: !0,
                    cookable: !0,
                    forceMaxThrowDistance: !0,
                    explodeOnImpact: !0,
                    playerCollision: !0,
                    fuseTime: 9999,
                    aimDistance: 32,
                    rad: 1,
                    throwPhysics: {
                        playerVelMult: 0,
                        velZ: 3.35,
                        speed: 40,
                        spinVel: 10 * Math.PI,
                        spinDrag: 1,
                        fixedCollisionHeight: .25
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-snowball.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-snowball-01.img",
                        scale: .12,
                        tint: 16777215
                    },
                    handImg: {
                        equip: {
                            right: {
                                sprite: "proj-snowball-01.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        cook: {
                            right: {
                                sprite: "proj-snowball-01.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        throwing: {
                            right: {
                                sprite: "none"
                            },
                            left: {
                                sprite: "none"
                            }
                        }
                    },
                    useThrowParticles: !1,
                    sound: {
                        pullPin: "",
                        throwing: "frag_throw_01",
                        pickup: "snowball_pickup_01",
                        deploy: "frag_deploy_01"
                    }
                },
                snowball_heavy: {
                    name: "Snowball",
                    type: "throwable",
                    explosionType: "explosion_snowball_heavy",
                    inventoryOrder: 0,
                    excludeFromInventory: !0,
                    cookable: !0,
                    forceMaxThrowDistance: !0,
                    explodeOnImpact: !0,
                    playerCollision: !0,
                    fuseTime: 5,
                    aimDistance: 32,
                    rad: 1.25,
                    throwPhysics: {
                        playerVelMult: 0,
                        velZ: 3.35,
                        speed: 45,
                        spinVel: 10 * Math.PI,
                        spinDrag: 1,
                        fixedCollisionHeight: .25
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-snowball.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-snowball-02.img",
                        scale: .2,
                        tint: 16777215
                    },
                    handImg: {
                        equip: {
                            right: {
                                sprite: "proj-snowball-01.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        cook: {
                            right: {
                                sprite: "proj-snowball-01.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        throwing: {
                            right: {
                                sprite: "none"
                            },
                            left: {
                                sprite: "none"
                            }
                        }
                    },
                    useThrowParticles: !1,
                    sound: {
                        pullPin: "",
                        throwing: "frag_throw_01",
                        pickup: "frag_pickup_01",
                        deploy: "frag_deploy_01"
                    }
                },
                potato: {
                    name: "Potato",
                    type: "throwable",
                    quality: 0,
                    explosionType: "explosion_potato",
                    freezeOnImpact: !0,
                    heavyType: "potato_heavy",
                    inventoryOrder: 0,
                    cookable: !0,
                    forceMaxThrowDistance: !0,
                    explodeOnImpact: !0,
                    playerCollision: !0,
                    fuseTime: 9999,
                    aimDistance: 32,
                    rad: 1,
                    throwPhysics: {
                        playerVelMult: 0,
                        velZ: 3.35,
                        speed: 40,
                        spinVel: 10 * Math.PI,
                        spinDrag: 1,
                        fixedCollisionHeight: .25
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-potato.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-potato-01.img",
                        scale: .12,
                        tint: 16777215
                    },
                    handImg: {
                        equip: {
                            right: {
                                sprite: "proj-potato-01.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        cook: {
                            right: {
                                sprite: "proj-potato-01.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        throwing: {
                            right: {
                                sprite: "none"
                            },
                            left: {
                                sprite: "none"
                            }
                        }
                    },
                    useThrowParticles: !1,
                    sound: {
                        pullPin: "",
                        throwing: "frag_throw_01",
                        pickup: "potato_pickup_01",
                        deploy: "frag_deploy_01"
                    },
                    emoteId: 210
                },
                potato_heavy: {
                    name: "Potato",
                    type: "throwable",
                    quality: 0,
                    explosionType: "explosion_potato_heavy",
                    inventoryOrder: 0,
                    excludeFromInventory: !0,
                    cookable: !0,
                    forceMaxThrowDistance: !0,
                    explodeOnImpact: !0,
                    playerCollision: !0,
                    fuseTime: 5,
                    aimDistance: 32,
                    rad: 1.25,
                    throwPhysics: {
                        playerVelMult: 0,
                        velZ: 3.35,
                        speed: 45,
                        spinVel: 10 * Math.PI,
                        spinDrag: 1,
                        fixedCollisionHeight: .25
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-potato.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-potato-02.img",
                        scale: .2,
                        tint: 16777215
                    },
                    handImg: {
                        equip: {
                            right: {
                                sprite: "proj-potato-01.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        cook: {
                            right: {
                                sprite: "proj-potato-01.img",
                                pos: {
                                    x: 3,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        throwing: {
                            right: {
                                sprite: "none"
                            },
                            left: {
                                sprite: "none"
                            }
                        }
                    },
                    useThrowParticles: !1,
                    sound: {
                        pullPin: "",
                        throwing: "frag_throw_01",
                        pickup: "frag_pickup_01",
                        deploy: "frag_deploy_01"
                    }
                },
                bomb_iron: {
                    name: "Iron Bomb",
                    type: "throwable",
                    explosionType: "explosion_bomb_iron",
                    inventoryOrder: 1,
                    excludeFromInventory: !0,
                    cookable: !0,
                    explodeOnImpact: !0,
                    playerCollision: !1,
                    fuseTime: 4,
                    aimDistance: 0,
                    rad: 1,
                    throwPhysics: {
                        playerVelMult: .6,
                        velZ: 0,
                        speed: 20,
                        spinVel: 1 * Math.PI,
                        spinDrag: 1,
                        randomizeSpinDir: !0
                    },
                    speed: {
                        equip: 0,
                        attack: 0
                    },
                    lootImg: {
                        sprite: "loot-throwable-frag.img",
                        tint: 65280,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    worldImg: {
                        sprite: "proj-bomb-iron-01.img",
                        scale: .12,
                        tint: 16777215
                    },
                    handImg: {
                        equip: {
                            right: {
                                sprite: "proj-frag-pin-01.img",
                                pos: {
                                    x: 4.2,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "none"
                            }
                        },
                        cook: {
                            right: {
                                sprite: "proj-frag-nopin-01.img",
                                pos: {
                                    x: 4.2,
                                    y: 4.2
                                },
                                scale: .14
                            },
                            left: {
                                sprite: "proj-frag-pin-part.img",
                                pos: {
                                    x: 4.2,
                                    y: 4.2
                                },
                                scale: .14
                            }
                        },
                        throwing: {
                            right: {
                                sprite: "none"
                            },
                            left: {
                                sprite: "none"
                            }
                        }
                    },
                    useThrowParticles: !0,
                    sound: {
                        pullPin: "frag_pin_01",
                        throwing: "frag_throw_01",
                        pickup: "frag_pickup_01",
                        deploy: "frag_deploy_01"
                    }
                },
                "9mm": {
                    name: "9mm",
                    type: "ammo",
                    subtype: "standard",
                    minStackSize: 15,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 16756224,
                        tintDark: 12550912
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "762mm": {
                    name: "7.62mm",
                    type: "ammo",
                    subtype: "standard",
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 26367,
                        tintDark: 19903
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "556mm": {
                    name: "5.56mm",
                    type: "ammo",
                    subtype: "standard",
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 237056,
                        tintDark: 161536
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "12gauge": {
                    name: "12 gauge",
                    type: "ammo",
                    subtype: "standard",
                    minStackSize: 5,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 16711680,
                        tintDark: 12517376
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "50AE": {
                    name: ".50 AE",
                    type: "ammo",
                    special: !0,
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 2697513,
                        tintDark: 2039583
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "308sub": {
                    name: ".308 Subsonic",
                    type: "ammo",
                    special: !0,
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 3225600,
                        tintDark: 2435840
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                flare: {
                    name: "Flare",
                    type: "ammo",
                    special: !0,
                    minStackSize: 1,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 13911552,
                        tintDark: 13911552
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                "45acp": {
                    name: ".45 ACP",
                    type: "ammo",
                    subtype: "standard",
                    special: !0,
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 7930111,
                        tintDark: 5963967
                    },
                    sound: {
                        pickup: "ammo_pickup_01"
                    }
                },
                bandage: {
                    name: "Bandage",
                    type: "heal",
                    useTime: 3,
                    heal: 15,
                    maxHeal: 100,
                    lootImg: {
                        sprite: "loot-medical-bandage.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "bandage_pickup_01",
                        use: "bandage_use_01"
                    },
                    emitter: "heal_01"
                },
                healthkit: {
                    name: "Med Kit",
                    type: "heal",
                    useTime: 6,
                    heal: 100,
                    maxHeal: 100,
                    lootImg: {
                        sprite: "loot-medical-healthkit.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "healthkit_pickup_01",
                        use: "healthkit_use_01"
                    },
                    emitter: "heal_01"
                },
                soda: {
                    name: "Soda",
                    type: "boost",
                    useTime: 3,
                    boost: 25,
                    lootImg: {
                        sprite: "loot-medical-soda.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "soda_pickup_01",
                        use: "soda_use_01"
                    },
                    emitter: "boost_01"
                },
                painkiller: {
                    name: "Pills",
                    type: "boost",
                    useTime: 5,
                    boost: 50,
                    lootImg: {
                        sprite: "loot-medical-pill.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pills_pickup_01",
                        use: "pills_use_01"
                    },
                    emitter: "boost_01"
                },
                backpack00: {
                    name: "Pouch",
                    type: "backpack",
                    level: 0,
                    playerRad: .55,
                    tint: 16777215,
                    lootImg: {
                        sprite: "loot-pack-00.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pack_pickup_01"
                    }
                },
                backpack01: {
                    name: "Small Pack",
                    type: "backpack",
                    level: 1,
                    playerRad: .65,
                    tint: 6697728,
                    lootImg: {
                        sprite: "loot-pack-01.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pack_pickup_01"
                    }
                },
                backpack02: {
                    name: "Regular Pack",
                    type: "backpack",
                    level: 2,
                    tint: 26112,
                    playerRad: .85,
                    lootImg: {
                        sprite: "loot-pack-02.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pack_pickup_01"
                    }
                },
                backpack03: {
                    name: "Military Pack",
                    type: "backpack",
                    level: 3,
                    tint: 6710835,
                    playerRad: 1,
                    lootImg: {
                        sprite: "loot-pack-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "pack_pickup_01"
                    }
                },
                helmet01: {
                    name: "Level 1 Helmet",
                    type: "helmet",
                    level: 1,
                    damageReduction: .25,
                    skinImg: {
                        baseTint: 3244031,
                        baseTintRed: 10972011,
                        baseTintBlue: 6459582,
                        baseSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-helmet-01.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet02: {
                    name: "Level 2 Helmet",
                    type: "helmet",
                    level: 2,
                    damageReduction: .4,
                    skinImg: {
                        baseTint: 13027014,
                        baseTintRed: 10027008,
                        baseTintBlue: 20642,
                        baseSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-helmet-02.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet03: {
                    name: "Level 3 Helmet",
                    type: "helmet",
                    level: 3,
                    damageReduction: .55,
                    skinImg: {
                        baseTint: 2434341,
                        baseTintRed: 2491396,
                        baseTintBlue: 334125,
                        baseSprite: "player-circle-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-helmet-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet03_leader: {
                    name: "Leader Helmet",
                    type: "helmet",
                    level: 3,
                    damageReduction: .55,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-leader.img"
                    },
                    lootImg: {
                        sprite: "loot-helmet-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet03_forest: {
                    name: "Shishigami no Kabuto",
                    type: "helmet",
                    level: 3,
                    damageReduction: .55,
                    becomeWoodsKing: !0,
                    mapIndicator: {
                        sprite: "player-king-woods.img",
                        tint: 65280,
                        pulse: !0,
                        pulseTint: 65280
                    },
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-forest.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-forest.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3,
                        rot: .5 * Math.PI
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet03_moon: {
                    name: "Tsukuyomi no Kabuto",
                    type: "helmet",
                    level: 3,
                    damageReduction: .55,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-moon.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "loot-helmet-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet03_lt: {
                    name: "Lieutenant Helmet",
                    type: "helmet",
                    level: 3,
                    damageReduction: .55,
                    noDrop: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-lieutenant.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "loot-helmet-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet03_lt_aged: {
                    name: "Lieutenant Helmet",
                    type: "helmet",
                    level: 3,
                    damageReduction: .55,
                    becomeLieutenant: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-lieutenant.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-lieutenant.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rot: .5 * Math.PI
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet03_potato: {
                    name: "K-pot-ato",
                    type: "helmet",
                    level: 3,
                    damageReduction: .55,
                    becomePotato: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-potato.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-potato.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2,
                        rot: .5 * Math.PI
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                helmet04_leader: {
                    name: "Leader Helmet",
                    type: "helmet",
                    level: 4,
                    damageReduction: .7,
                    noDrop: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-leader.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-leader.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .3,
                        rot: .5 * Math.PI
                    },
                    sound: {
                        pickup: "helmet_pickup_01"
                    }
                },
                chest01: {
                    name: "Level 1 Vest",
                    type: "chest",
                    level: 1,
                    damageReduction: .25,
                    skinImg: {
                        baseTint: 11842740,
                        baseSprite: "player-armor-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-chest-01.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "chest_pickup_01"
                    }
                },
                chest02: {
                    name: "Level 2 Vest",
                    type: "chest",
                    level: 2,
                    damageReduction: .38,
                    skinImg: {
                        baseTint: 4934475,
                        baseSprite: "player-armor-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-chest-02.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "chest_pickup_01"
                    }
                },
                chest03: {
                    name: "Level 3 Vest",
                    type: "chest",
                    level: 3,
                    damageReduction: .45,
                    skinImg: {
                        baseTint: 0,
                        baseSprite: "player-armor-base-01.img"
                    },
                    lootImg: {
                        sprite: "loot-chest-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "chest_pickup_01"
                    }
                },
                "1xscope": {
                    name: "1x Scope",
                    type: "scope",
                    level: 1,
                    lootImg: {
                        sprite: "loot-scope-00.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                },
                "2xscope": {
                    name: "2x Scope",
                    type: "scope",
                    level: 2,
                    lootImg: {
                        sprite: "loot-scope-01.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                },
                "4xscope": {
                    name: "4x Scope",
                    type: "scope",
                    level: 4,
                    lootImg: {
                        sprite: "loot-scope-02.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                },
                "8xscope": {
                    name: "8x Scope",
                    type: "scope",
                    level: 8,
                    lootImg: {
                        sprite: "loot-scope-03.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                },
                "15xscope": {
                    name: "15x Scope",
                    type: "scope",
                    level: 15,
                    lootImg: {
                        sprite: "loot-scope-04.img",
                        tint: 16777215,
                        border: "loot-circle-outer-01.img",
                        borderTint: 0,
                        scale: .2
                    },
                    sound: {
                        pickup: "scope_pickup_01"
                    }
                }
            },
            scopeZoomRadius: {
                desktop: {
                    "1xscope": 28,
                    "2xscope": 36,
                    "4xscope": 48,
                    "8xscope": 68,
                    "15xscope": 104
                },
                mobile: {
                    "1xscope": 32,
                    "2xscope": 40,
                    "4xscope": 48,
                    "8xscope": 64,
                    "15xscope": 88
                }
            },
            bagSizes: {
                "9mm": [120, 240, 330, 420],
                "762mm": [90, 180, 240, 300],
                "556mm": [90, 180, 240, 300],
                "12gauge": [15, 30, 60, 90],
                "50AE": [49, 98, 147, 196],
                "308sub": [10, 20, 30, 40],
                flare: [2, 4, 6, 8],
                "45acp": [90, 180, 240, 300],
                frag: [3, 6, 9, 12],
                smoke: [3, 6, 9, 12],
                strobe: [2, 3, 4, 5],
                mirv: [2, 4, 6, 8],
                snowball: [10, 20, 30, 40],
                potato: [10, 20, 30, 40],
                bandage: [5, 10, 15, 30],
                healthkit: [1, 2, 3, 4],
                soda: [2, 5, 10, 15],
                painkiller: [1, 2, 3, 4],
                "1xscope": [1, 1, 1, 1],
                "2xscope": [1, 1, 1, 1],
                "4xscope": [1, 1, 1, 1],
                "8xscope": [1, 1, 1, 1],
                "15xscope": [1, 1, 1, 1]
            },
            lootRadius: {
                skin: 1,
                melee: 1.25,
                gun: 1.25,
                throwable: 1,
                ammo: 1.2,
                heal: 1,
                boost: 1,
                backpack: 1,
                helmet: 1,
                chest: 1,
                scope: 1
            }
        }
    },
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
                this.canvasMode = this.pixi.renderer.type == o.RENDERER_TYPE.CANVAS, this._ = !1, this.Ve = !1, this.Ge = 0, this.H = !1, this.Ue = !1, this.He = new j.We(this.Re, this.config), this.ae = new f.j, this.Ke = new L.Ze(this, this.canvasMode), this.Xe = new E.d(this.Ke), this.Ye = new C.Je, this.Qe = new O.$e, this.et = new x.tt, this.at = new M.it, this.rt = new B.ot, this.nt = new v.ke, this.st = new D.lt(this.Be), this.ct = new w.J, this.mt = new F.p, this.dt = new b.Te, this.ht = new S.f, this.ut = new I.gt, this.yt = new T.wt(this.canvasMode), this.Ne = new q.me(this, this.Be, this.Xe, this.st, this.localization, this.canvasMode, this.He, this.Fe, this.je, this.adManager), this.xt = new N.ft(this.localization, this.Fe), this.bt = new k._t(this.Be, this.Ne, this.Qe, this.ae, this.Ye), this.St = new R.ze(this.Xe, this.Be, this.Ne);
                var t = (e = {}, i(e, l.Type.Player, this.Qe.Se), i(e, l.Type.Obstacle, this.Ye.pe), i(e, l.Type.Loot, this.ut.kt), i(e, l.Type.DeadBody, this.dt.Me), i(e, l.Type.Building, this.Ye.vt), i(e, l.Type.Structure, this.Ye.zt), i(e, l.Type.Decal, this.ht.u), i(e, l.Type.Projectile, this.rt.Mt), i(e, l.Type.Smoke, this.mt.e), i(e, l.Type.Airdrop, this.ct.Y), e);
                this.Tt = new A.Creator;
                for (var a in t) t.hasOwnProperty(a) && this.Tt.registerType(a, t[a]);
                this.debugDisplay = new o.Graphics;
                for (var r = [this.Ye.display.ground, this.Ke.layers[0], this.Ke.ground, this.Ke.layers[1], this.Ke.layers[2], this.Ke.layers[3], this.debugDisplay, this.yt.gasRenderer.display, this.He.container, this.bt.container, this.Ne.container, this.Ne.pieTimer.container, this.bt.indContainer], n = 0; n < r.length; n++) {
                    var s = r[n];
                    s && (s.interactiveChildren = !1, this.pixi.stage.addChild(s))
                }
                this.disconnectMsg = "", this.playing = !1, this.gameOver = !1, this.spectating = !1, this.inputMsgTimeout = 0, this.prevInputMsg = new h.InputMsg, this.playingTicker = 0, this.updateRecvCount = 0, this.playedAssignRoleSfx = {}, this.Pt = 0, this.It = 0, this.Ct = null, this.At = !1, this.I = 1, this.debugZoom = 1, this.useDebugZoom = !1, this.seq = 0, this.seqInFlight = !1, this.seqSendTime = 0, this.pings = [], this.debugPingTime = 0, this.ae.setShakeEnabled(this.config.get("screenShake")), this.name = this.config.get("playerName"), this.anonPlayerNames = this.config.get("anonPlayerNames");
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
                this.bt.updateEmoteWheel(this.emoteLoadout), document.hasFocus() || this.Be.playSound("notification_start_01", {
                    channel: "ui"
                }), this.Et(), this.initialized = !0
            },
            n: function() {
                if (this.ws && (this.ws.onmessage = function() {}, this.ws.close(), this.ws = null), this.connecting = !1, this.connected = !1, this.initialized)
                    for (this.initialized = !1, this.bt.n(), this.xt.n(), this.Ne.n(), this.yt.free(), this.ct.n(), this.st.n(), this.Ye.n(), this.Xe.n(), this.Ke.n(), this.Be.stopAll(); this.pixi.stage.children.length > 0;) {
                        var e = this.pixi.stage.children[0];
                        this.pixi.stage.removeChild(e), e.destroy({
                            children: !0
                        })
                    }
            },
            Dt: function() {
                return this.initialized && this.playing && !this.spectating && !this.Ne.displayingStats
            },
            c: function(e) {
                var t = this.mt.particles,
                    a = this.Ye.pe.m(),
                    i = 0;
                this._ = !0, this.Ve = !0;
                var r = {};
                r.render = r.render || {}, this.playing && (this.playingTicker += e), this.Qe.c(e, this.It, this.teamMode, this.Ke, this.Xe, this.ae, this.Ye, this.Fe, this.Be, this.bt.wheelKeyTriggered, this.Ne.displayingStats, this.spectating), this.updateAmbience(), this.ae.pos = u.copy(this.Ct.pos), this.ae.applyShake();
                var o = this.Ct.Ot(),
                    l = d.min(this.ae.screenWidth, this.ae.screenHeight),
                    c = d.max(this.ae.screenWidth, this.ae.screenHeight),
                    m = d.max(l * (16 / 9), c);
                this.ae.I = .5 * m / (o * this.ae.ppu);
                var w = this.Ct.zoomFast ? 3 : 2,
                    x = this.Ct.zoomFast ? 3 : 1.4,
                    f = this.ae.I > this.ae.k ? w : x;
                this.ae.k = d.lerp(e * f, this.ae.k, this.ae.I), this.Be.cameraPos = u.copy(this.ae.pos), this.Re.ue(P.Key.Escape) && this.Ne.toggleEscMenu(), (this.Fe.isBindPressed(s.ToggleMap) || this.Re.ue(P.Key.G) && !this.Fe.isKeyBound(P.Key.G)) && this.Ne.displayMapLarge(!1), this.Fe.isBindPressed(s.CycleUIMode) && this.Ne.cycleVisibilityMode(), (this.Fe.isBindPressed(s.HideUI) || this.Re.ue(P.Key.Escape) && !this.Ne.hudVisible) && this.Ne.cycleHud();
                var b = this.Ct.pos,
                    _ = this.ae.O(this.Re.de),
                    S = u.sub(_, b),
                    k = u.length(S),
                    v = k > 1e-5 ? u.div(S, k) : u.create(1, 0);
                this.bt.wheelDisplayed && (k = this.prevInputMsg.toMouseLen, v = this.prevInputMsg.toMouseDir);
                var z = new h.InputMsg;
                if (z.seq = this.seq, !this.spectating) {
                    if (g.touch) {
                        var M = this.He.getTouchMovement(this.ae),
                            T = this.He.getAimMovement(this.Ct, this.ae),
                            I = u.copy(T.aimMovement.toAimDir);
                        if (this.He.turnDirTicker -= e, this.He.moveDetected && !T.touched) {
                            var C = u.normalizeSafe(M.toMoveDir, u.create(1, 0)),
                                A = this.He.turnDirTicker < 0 ? C : T.aimMovement.toAimDir;
                            this.He.setAimDir(A), I = A
                        }
                        T.touched && (this.He.turnDirTicker = this.He.turnDirCooldown), this.He.moveDetected ? (z.touchMoveDir = u.normalizeSafe(M.toMoveDir, u.create(1, 0)), z.touchMoveLen = Math.round(255 * d.clamp(M.toMoveLen, 0, 1))) : z.touchMoveLen = 0, z.touchMoveActive = !0;
                        var E = T.aimMovement.toAimLen,
                            D = d.clamp(E / this.He.padPosRange, 0, 1) * n.player.throwableMaxMouseDist;
                        z.toMouseLen = D, z.toMouseDir = I
                    } else z.moveLeft = this.Fe.isBindDown(s.MoveLeft) || this.Re.fe(P.Key.Left) && !this.Fe.isKeyBound(P.Key.Left), z.moveRight = this.Fe.isBindDown(s.MoveRight) || this.Re.fe(P.Key.Right) && !this.Fe.isKeyBound(P.Key.Right), z.moveUp = this.Fe.isBindDown(s.MoveUp) || this.Re.fe(P.Key.Up) && !this.Fe.isKeyBound(P.Key.Up), z.moveDown = this.Fe.isBindDown(s.MoveDown) || this.Re.fe(P.Key.Down) && !this.Fe.isKeyBound(P.Key.Down), z.toMouseDir = u.copy(v), z.toMouseLen = k;
                    z.touchMoveDir = u.normalizeSafe(z.touchMoveDir, u.create(1, 0)), z.touchMoveLen = d.clamp(z.touchMoveLen, 0, 255), z.toMouseDir = u.normalizeSafe(z.toMouseDir, u.create(1, 0)), z.toMouseLen = d.clamp(z.toMouseLen, 0, h.Constants.kMouseMaxDist), z.shootStart = this.Fe.isBindPressed(s.Fire) || this.He.Bt, z.shootHold = this.Fe.isBindDown(s.Fire) || this.He.Bt, z.portrait = this.ae.screenWidth < this.ae.screenHeight;
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
                    }(this.Fe.isBindPressed(s.SwapWeapSlots) || this.Ne.swapWeapSlots) && (z.addInput(s.SwapWeapSlots), this.Ct.gunSwitchCooldown = 0), this.Ne.reloadTouched && z.addInput(s.Reload), this.Ne.interactionTouched && (z.addInput(s.Interact), z.addInput(s.Cancel));
                    for (var V = 0; V < this.xt.uiEvents.length; V++) {
                        var G = this.xt.uiEvents[V];
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
                    for (var W = !1, K = 0; K < this.xt.uiEvents.length; K++) {
                        var Z = this.xt.uiEvents[K];
                        if ("drop" == Z.action) {
                            var X = new h.DropItemMsg;
                            if ("weapon" == Z.type) {
                                var Y = this.Ct.re.weapons;
                                X.item = Y[Z.data].name, X.weapIdx = Z.data
                            } else {
                                var J = "";
                                J = "helmet" == Z.data ? this.Ct.ie.helmet : "chest" == Z.data ? this.Ct.ie.chest : Z.data, X.item = J
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
                if (this.inputMsgTimeout -= e, (ie || this.inputMsgTimeout < 0) && (this.seqInFlight || (this.seq = (this.seq + 1) % 256, this.seqSendTime = Date.now(), this.seqInFlight = !0, z.seq = this.seq), this.q(h.Msg.Input, z, 128), this.inputMsgTimeout = 1, this.prevInputMsg = z), this.xt.flushInput(), this.Ye.c(e, this.Ct, this.Qe, this.Xe, this.Be, this.Le, this.Ke, this.ae, t, r), this.ut.c(e, this.Ct, this.ae, r), this.et.c(e, this.Qe, this.Ye, this.ae, this.Ct, this.Ke, this.Xe, this.Be), this.at.c(e, this.Qe, this.Ye, this.ae, this.Ct, this.Ke, this.Xe, this.Be), this.rt.c(e, this.Xe, this.Be, this.Ct, this.Ye, this.Ke, this.ae), this.nt.c(e, this.Ye, this.Qe, this.ae, this.Xe, this.Be, r), this.ct.c(e, this.Ct, this.ae, this.Ye, this.Xe, this.Ke, this.Be), this.st.c(e, this.ae, this.Ct, this.Ye, this.Ke), this.mt.c(e, this.ae, this.Ct, this.Ye, this.Ke), this.St.c(e, this.It, this.Qe, this.Xe, this.Be), this.Xe.c(e, this.ae, r), this.dt.c(e, this.Qe, this.Ct, this.anonPlayerNames, this.Pt, this.Ye, this.ae, this.Ke), this.ht.c(e, this.ae, this.Ke, r), this.Ne.c(e, this.Ct, this.Ye, this.yt, this.ut, this.Qe, this.ae, this.teamMode, this.Ye.factionMode), this.xt.c(e, this.Ct, this.spectating, this.Qe, this.ut, this.Ye, this.Fe), this.bt.c(e, this.Pt, this.Ct, this.teamMode, this.dt, this.Ke, this.Re, this.Fe, this.spectating), this.He.update(e, this.Ct, this.Ye, this.ae, this.Ke), this.Ke.c(e, this.ae, this.Ye, r), !this.Ue && this.Ye.Lt && (this.Ye.H || this.loadoutMenu.socialUnlocks()) && this.bt.hasCustomEmotes()) {
                    this.Ue = !0;
                    var se = new h.LoadoutMsg;
                    se.emotes = [];
                    for (var le = 0; le < this.emoteLoadout.length; le++) se.emotes[le] = this.emoteLoadout[le];
                    se.custom = this.bt.hasCustomEmotes(), this.q(h.Msg.Loadout, se, 128)
                }
                for (var ce = 0; ce < this.bt.newPings.length; ce++) {
                    var me = this.bt.newPings[ce],
                        pe = new h.EmoteMsg;
                    pe.type = me.type, pe.pos = me.pos, pe.useLoadout = !1, pe.teamOnly = !0, pe.isPing = !0, this.q(h.Msg.Emote, pe, 128)
                }
                this.bt.newPings = [];
                for (var de = 0; de < this.bt.newEmotes.length; de++) {
                    var he = this.bt.newEmotes[de],
                        ue = new h.EmoteMsg;
                    ue.type = he.type, ue.pos = he.pos, ue.useLoadout = he.useLoadout, ue.teamOnly = !1, ue.isPing = !1, this.q(h.Msg.Emote, ue, 128)
                }
                if (this.bt.newEmotes = [], this.Rt(e, r), ++this.Ge % 30 == 0) {
                    for (var ge = p.Ft, ye = 0; ye < t.length; ye++) {
                        var we = t[ye];
                        we.active && !we.fade && ge(we, p.jt) && i++
                    }
                    for (var xe = 0; xe < a.length; xe++) {
                        var fe = a[xe];
                        fe.active && !fe.dead && ge(fe, p.qt) && i++
                    }
                    i && (this.H = !0), i && this.At && y.H(this)
                }
            },
            Rt: function(e, t) {
                var a = this.Ye.mapLoaded ? this.Ye.getMapDef().biome.colors.grass : 8433481;
                this.pixi.renderer.backgroundColor = a, this.Qe.render(this.ae, t), this.et.render(this.ae, t), this.at.render(this.ae), this.Ye.render(this.ae), this.yt.render(this.ae), this.Ne.render(this.Ct.pos, this.yt, this.ae, this.Ye, this.st, t), this.bt.render(this.ae), _.flush()
            },
            updateAmbience: function() {
                var e = this.Ct.pos,
                    t = 0,
                    a = 0,
                    i = 1;
                if (this.Ye.isInOcean(e)) t = 1, a = 0, i = 0;
                else {
                    var r = this.Ye.distanceToShore(e);
                    t = d.delerp(r, 50, 0), a = 0;
                    for (var o = 0; o < this.Ye.terrain.rivers.length; o++) {
                        var n = this.Ye.terrain.rivers[o],
                            s = n.spline.getClosestTtoPoint(e),
                            l = n.spline.getPos(s),
                            c = u.length(u.sub(l, e)),
                            m = n.waterWidth + 2,
                            p = d.delerp(c, 30 + m, m),
                            h = d.clamp(n.waterWidth / 8, .25, 1);
                        a = d.max(p * h, a)
                    }
                    a *= 1 - t, 1 == this.Ct.layer && (a = 0), i = d.clamp(1 - (t + a), 0, 1)
                }
                this.Le.getTrack("wind").volume = i, this.Le.getTrack("river").volume = a, this.Le.getTrack("waves").volume = t
            },
            Et: function() {
                this.ae.screenWidth = g.screenWidth, this.ae.screenHeight = g.screenHeight, this.Ye.resize(this.pixi.renderer, this.canvasMode), this.yt.resize(), this.Ne.resize(this.Ye, this.ae), this.He.resize(), this.Ke.resize(this.Ye, this.ae)
            },
            Nt: function(e) {
                var t = {
                    audioManager: this.Be,
                    renderer: this.Ke,
                    particleBarn: this.Xe,
                    map: this.Ye,
                    smokeBarn: this.mt,
                    decalBarn: this.ht
                };
                e.activePlayerIdDirty && (this.It = e.activePlayerId);
                for (var a = 0; a < e.playerInfos.length; a++) this.Qe.Vt(e.playerInfos[a]);
                for (var i = 0; i < e.deletedPlayerIds.length; i++) {
                    var r = e.deletedPlayerIds[i];
                    this.Qe.Gt(r)
                }
                if ((e.playerInfos.length > 0 || e.deletedPlayerIds.length > 0) && this.Qe.Ut(), e.playerStatusDirty) {
                    var o = this.Qe.ne(this.It).teamId;
                    this.Qe.Ht(o, e.playerStatus, this.Ye.factionMode)
                }
                if (e.groupStatusDirty) {
                    var s = this.Qe.ne(this.It).groupId;
                    this.Qe.Wt(s, e.groupStatus)
                }
                for (var l = 0; l < e.delObjIds.length; l++) e.delObjIds[l], this.Tt.deleteObj(e.delObjIds[l]);
                for (var c = 0; c < e.fullObjects.length; c++) {
                    var m = e.fullObjects[c];
                    this.Tt.updateObjFull(m.__type, m.__id, m, t)
                }
                for (var p = 0; p < e.partObjects.length; p++) {
                    var d = e.partObjects[p];
                    this.Tt.updateObjPart(d.__id, d, t)
                }
                this.spectating = this.It != this.Pt, this.Ct = this.Qe.ve(this.It), this.Ct.Kt(e.activePlayerData, this.Qe), e.activePlayerData.weapsDirty && (this.Ne.weapsDirty = !0), this.spectating && (this.Ne.setSpectateTarget(this.It, this.Pt, this.teamMode, this.anonPlayerNames, this.Qe), this.He.hideAll()), this.Ct.layer = this.Ct.ie.layer, this.Ke.setActiveLayer(this.Ct.layer), this.Be.activeLayer = this.Ct.layer;
                var h = this.Ct.isUnderground(this.Ye);
                this.Ke.setUnderground(h), this.Be.underground = h, e.aliveDirty && (1 == e.aliveCounts.length ? this.Ne.updatePlayersAlive(e.aliveCounts[0]) : e.aliveCounts.length >= 2 && (this.Ne.updatePlayersAliveRed(e.aliveCounts[0]), this.Ne.updatePlayersAliveBlue(e.aliveCounts[1]))), this.yt.setProgress(e.gasT), e.gasDirty && this.yt.setFullState(e.gasT, e.gasData, this.Ye, this.Ne);
                for (var u = 0; u < e.bullets.length; u++) {
                    var g = e.bullets[u];
                    n.bullets[g.bulletType].addFlare ? this.at.addFlare(g, this.Qe, this.Ke) : this.et.addBullet(g, this.Qe, this.Ke), g.shotFx && this.St.addShot(g.pos, g.layer, g.playerId, g.shotSourceType, g.shotOffhand, g.lastShot)
                }
                for (var y = 0; y < e.explosions.length; y++) {
                    var w = e.explosions[y];
                    this.nt.addExplosion(w.type, w.pos, w.layer)
                }
                for (var x = 0; x < e.emotes.length; x++) {
                    var f = e.emotes[x];
                    f.isPing ? this.bt.addPing(f, this.Ye.factionMode) : this.bt.addEmote(f)
                }
                this.st.Zt(e.planes, this.Ye);
                for (var b = 0; b < e.airstrikeZones.length; b++) this.st.Xt(e.airstrikeZones[b]);
                this.Ne.le(e.mapIndicators), this.updateRecvCount++
            },
            qe: function(e, t) {
                var a = this;
                switch (e) {
                    case h.Msg.Joined:
                        var r = new h.JoinedMsg;
                        r.deserialize(t), this.onJoin(), this.teamMode = r.teamMode, this.Pt = r.playerId, this.At = !0, r.started || this.Ne.setWaitingForPlayers(!0), this.Ne.removeAds(), this.victoryMusic && (this.victoryMusic.stop(), this.victoryMusic = null);
                        break;
                    case h.Msg.Map:
                        var o = new h.MapMsg;
                        o.deserialize(t), this.Ye.loadMap(o, this.ae, this.canvasMode, this.Xe);
                        var s = this.Ye.getMapDef().assets;
                        this.Be.loadSoundList(s.audio), this.textureManager.loadAtlasList(s.atlases), this.Qe.onMapLoad(this.Ye), this.et.onMapLoad(this.Ye), this.Xe.onMapLoad(this.Ye), this.Ye.renderMap(this.pixi.renderer, this.canvasMode), this.Ne.resize(this.Ye, this.ae);
                        break;
                    case h.Msg.Update:
                        var l = new h.UpdateMsg;
                        l.deserialize(t, this.Tt), this.playing = !0, this.Nt(l);
                        break;
                    case h.Msg.Kill:
                        var c = new h.KillMsg;
                        c.deserialize(t);
                        var m = this.Qe.ne(c.targetId),
                            p = this.Qe.ne(c.killCreditId),
                            d = c.itemSourceType || c.mapSourceType,
                            u = this.Qe.ne(this.It).teamId,
                            g = c.downed && !c.killed || c.damageType == n.DamageType.Gas || c.damageType == n.DamageType.Bleeding || c.damageType == n.DamageType.Airdrop,
                            w = g ? p : this.Qe.ne(c.killerId),
                            x = m.nameTruncated,
                            f = p.nameTruncated,
                            b = w.nameTruncated;
                        if (this.anonPlayerNames) {
                            var _ = function(e) {
                                return e.playerId == a.It || e.teamId == u
                            };
                            _(m) || (x = m.anonName), _(p) || (f = p.anonName), _(w) || (b = w.anonName)
                        }
                        x = y.htmlEscape(x), f = y.htmlEscape(f), b = y.htmlEscape(b), c.killCreditId == this.It ? this.Ne.showKill({
                            name: f,
                            kills: c.killerKills,
                            completeKill: c.killerId == this.It
                        }, {
                            name: x,
                            suicide: c.killerId == c.targetId || c.killCreditId == c.targetId,
                            killed: c.killed,
                            downed: c.downed,
                            teamKill: m.teamId == p.teamId
                        }, d, c.damageType, this.spectating) : c.targetId == this.It && c.downed && !c.killed && this.Ne.showDowned({
                            name: f,
                            damageType: c.damageType
                        }, {
                            name: x,
                            suicide: c.killerId == c.targetId || c.killCreditId == c.targetId
                        }, d, c.damageType, this.spectating);
                        var S = this.xt.getKillFeedText(x, w.teamId ? b : "", d, c.damageType, c.downed && !c.killed),
                            k = this.xt.getKillFeedColor(u, m.teamId, p.teamId, this.Ye.factionMode);
                        if (this.xt.addKillFeed(S, k), c.type == n.DamageType.Player && this.et.createBulletHit(this.Qe, c.targetId, this.Be), c.targetRole == n.Role.FactionLeader) {
                            var v = this.xt.getRoleKillFeedText(b, m.teamId, c.damageType, c.downed && !c.killed, n.Role.FactionLeader),
                                z = this.Qe.getTeamColor(m.teamId),
                                M = y.colorToHexString(z);
                            this.xt.addKillFeed(v, M), c.killed && this.Be.playSound("leader_dead_01", {
                                channel: "ui"
                            })
                        }
                        if (c.targetRole == n.Role.WoodsKing) {
                            var T = this.xt.getRoleKillFeedText(b, m.teamId, c.damageType, c.downed && !c.killed, n.Role.WoodsKing);
                            this.xt.addKillFeed(T, "#12ff00"), c.killed && this.Be.playSound("leader_dead_01", {
                                channel: "ui"
                            })
                        }
                        break;
                    case h.Msg.AssignRole:
                        var P = new h.AssignRoleMsg;
                        P.deserialize(t);
                        var I = this.Qe.ne(P.playerId);
                        if (!I) break;
                        var C = this.xt.getAssignRoleKillFeedText(P.role, I.nameTruncated, I.teamId);
                        if (C) {
                            var A = this.Qe.getTeamColor(I.teamId),
                                E = y.colorToHexString(A);
                            this.xt.addKillFeed(C, E)
                        }
                        if (!this.playedAssignRoleSfx[P.role]) {
                            var D, O = (D = {}, i(D, n.Role.FactionLeader, "leader_assigned_01"), i(D, n.Role.Lieutenant, "lt_assigned_01"), D),
                                B = O[P.role];
                            B && this.Be.playSound(B, {
                                channel: "ui"
                            }), this.playedAssignRoleSfx[P.role] = !0
                        }
                        this.Pt == P.playerId && this.Ne.displayAssignRoleAnnouncement(P.role, I.teamId);
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
                        for (var j = this.Qe.ne(this.Pt).teamId, q = 0; q < F.playerStats.length; q++) {
                            var N = F.playerStats[q];
                            if (N.playerId == this.Pt) {
                                this.Ne.setLocalStats(N);
                                break
                            }
                        }
                        this.Ne.showStats(F.playerStats, F.teamId, F.teamRank, F.winningTeamId, F.gameOver, j, this.teamMode, this.spectating, this.Qe, this.Le, this.Be, this.Ye.factionMode), j == F.winningTeamId && (this.victoryMusic = this.Be.playSound("menu_music", {
                            channel: "music",
                            delay: 1300,
                            forceStart: !0
                        })), this.He.hideAll();
                        break;
                    case h.Msg.Pickup:
                        var V = new h.PickupMsg;
                        if (V.deserialize(t), V.type == h.PickupMsgType.Success && V.item) {
                            var G = n.items[V.item];
                            this.Be.playSound(G.sound.pickup, {
                                channel: "ui"
                            }), "throwable" == G.type && (this.Ct.lastThrowablePickupSfxTicker = .3)
                        } else this.xt.displayPickupMessage(V.type);
                        break;
                    case h.Msg.Disconnect:
                        var U = new h.DisconnectMsg;
                        U.deserialize(t), this.disconnectMsg = U.reason
                }
            },
            q: function(e, t, a) {
                var i = a || 128,
                    r = new h.MsgStream(new ArrayBuffer(i));
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
            this._ = !1, this.kt = new p.Pool(i), this.Qt = null
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
                this._ = !0, this.Qt = null;
                for (var r = Number.MAX_VALUE, o = this.kt.m(), p = 0; p < o.length; p++) {
                    var d = o[p];
                    if (d.active) {
                        if (l.sameLayer(d.layer, t.layer)) {
                            var h = d.pos,
                                u = m.touch ? t.rad + d.rad * n.player.touchLootRadMult : d.rad,
                                g = c.sub(t.pos, h),
                                y = c.lengthSqr(g);
                            y < u * u && y < r && (r = y, this.Qt = d)
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
            $t: function() {
                return this.Qt
            }
        }, e.exports = {
            gt: r
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
            this.Se = new T.Pool(n), this.ea = {}, this.playerIds = [], this.teamInfo = {}, this.groupInfo = {}, this.playerStatus = {}
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
            Kt: function(e, t) {
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
            Ot: function() {
                return (v.mobile ? m.scopeZoomRadius.mobile : m.scopeZoomRadius.desktop)[this.ie.downed || this.re.scopedIn ? "1xscope" : this.re.scope]
            },
            ta: function() {
                return this.ie.helmet ? m.items[this.ie.helmet].level : 0
            },
            aa: function() {
                return this.ie.chest ? m.items[this.ie.chest].level : 0
            },
            ia: function() {
                return m.items[this.ie.backpack].level
            },
            ra: function() {
                return m.items[this.ie.curWeapType].type
            },
            oa: function(e) {
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
                    if (!this.playedDryFire && "gun" == this.ra() && (o.isBindPressed(h.Fire) || o.isBindDown(h.Fire) && "auto" == pe.fireMode) && this.action.type == p.None && !c) {
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
                }(this.visualsDirty || this.throwableStatePrev != this.throwableState) && this.na(t, a), this.visualsDirty = !1, this.throwableStatePrev = this.throwableState, this.sa(), this.la(v, z, a), s.addPIXIObj(this.container, this.renderLayer, this.renderZOrd, this.renderZIdx), this.isNew = !1
            },
            Rt: function(e, t) {
                var a = e.pointToScreen(this.pos),
                    i = e.pixels(1);
                this.container.position.set(a.x, a.y), this.container.scale.set(i, i), this.container.visible = !this.ie.dead
            },
            la: function(e, t, a) {
                for (var i = _.createCircle(this.pos, m.player.maxVisualRadius), r = !1, o = !1, n = !1, s = a.zt.m(), l = 0; l < s.length; l++) {
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
            na: function(e, t) {
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
                if (this.ia() > 0 && !a.camo && !this.downed) {
                    var P = (m.items[this.ie.backpack], [10.25, 11.5, 12.75]),
                        I = this.ia(),
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
            sa: function() {
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
                for (var t = e.zt.m(), a = 0; a < t.length; a++) {
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
                this.ca(t, {
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
                    r.active && r.Rt(e, t)
                }
            },
            ve: function(e) {
                for (var t = this.Se.m(), a = 0; a < t.length; a++) {
                    var i = t[a];
                    if (i.active && i.__id === e) return i
                }
                return null
            },
            Vt: function(e) {
                this.ea[e.playerId] = {
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
            Gt: function(e) {
                var t = this.playerIds.indexOf(e); - 1 !== t && this.playerIds.splice(t, 1), delete this.ea[e], delete this.playerStatus[e]
            },
            ne: function(e) {
                return this.ea[e] || {
                    playerId: 0,
                    groupId: 0,
                    teamId: 0,
                    name: "unknown"
                }
            },
            Ut: function() {
                this.teamInfo = {}, this.groupInfo = {};
                for (var e = Object.keys(this.ea), t = 0; t < e.length; t++) {
                    var a = this.ea[e[t]],
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
            Ht: function(e, t, a) {
                var i = this.getTeamInfo(e),
                    r = a ? this.playerIds : i.playerIds;
                if (r.length != t.players.length) return void z.logError("PlayerIds and playerStatus.players out of sync. OurLen: " + r.length + " MsgLen: " + t.players.length + " FactionMode: " + a);
                for (var o = 0; o < r.length; o++) {
                    var n = r[o],
                        s = t.players[o];
                    s.hasData && this.ca(n, s)
                }
            },
            ca: function(e, t) {
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
            Wt: function(e, t) {
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
            $e: s
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
            wt: g
        }
    },
    aaf70d05: function(e, t) {
        e.exports = {
            shared: [{
                meta: {
                    image: "shared-0-50-0f26c72d.png",
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
                    "map-wall-12-rounded.img": {
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
                    "map-wall-glass-12.img": {
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
                    "map-wall-11.img": {
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
                    "map-wall-11-rounded.img": {
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
                    "map-wall-glass-10.img": {
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
                    "map-wall-10-rounded.img": {
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
                    "map-wall-09-rounded.img": {
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
                    "map-wall-09.img": {
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
                    "gun-awc-01.img": {
                        frame: {
                            x: 1999,
                            y: 1138,
                            w: 27,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 4,
                            w: 27,
                            h: 118
                        },
                        sourceSize: {
                            w: 34,
                            h: 122
                        }
                    },
                    "gun-awc-02.img": {
                        frame: {
                            x: 1999,
                            y: 1260,
                            w: 27,
                            h: 118
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 4,
                            w: 27,
                            h: 118
                        },
                        sourceSize: {
                            w: 34,
                            h: 122
                        }
                    },
                    "map-door-02.img": {
                        frame: {
                            x: 1999,
                            y: 1382,
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
                    "gun-m249-top-01.img": {
                        frame: {
                            x: 1999,
                            y: 1498,
                            w: 24,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 8,
                            w: 24,
                            h: 112
                        },
                        sourceSize: {
                            w: 32,
                            h: 120
                        }
                    },
                    "map-wall-07.img": {
                        frame: {
                            x: 2027,
                            y: 1498,
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
                            x: 1999,
                            y: 1614,
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
                    "gun-garand-01.img": {
                        frame: {
                            x: 2019,
                            y: 1614,
                            w: 22,
                            h: 111
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 9,
                            w: 22,
                            h: 111
                        },
                        sourceSize: {
                            w: 28,
                            h: 120
                        }
                    },
                    "map-wall-shack-left.img": {
                        frame: {
                            x: 2030,
                            y: 1138,
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
                    "gun-usas-01.img": {
                        frame: {
                            x: 1999,
                            y: 1730,
                            w: 26,
                            h: 109
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 11,
                            w: 26,
                            h: 109
                        },
                        sourceSize: {
                            w: 32,
                            h: 120
                        }
                    },
                    "gun-scorpion-01.img": {
                        frame: {
                            x: 1999,
                            y: 1843,
                            w: 25,
                            h: 104
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 4,
                            w: 25,
                            h: 104
                        },
                        sourceSize: {
                            w: 28,
                            h: 108
                        }
                    },
                    "gun-pkp-top-01.img": {
                        frame: {
                            x: 1945,
                            y: 615,
                            w: 23,
                            h: 100
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 20,
                            w: 23,
                            h: 100
                        },
                        sourceSize: {
                            w: 32,
                            h: 120
                        }
                    },
                    "map-wall-outhouse-side.img": {
                        frame: {
                            x: 2030,
                            y: 1260,
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
                    "map-wall-06-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 394,
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
                    "map-wall-06.img": {
                        frame: {
                            x: 1979,
                            y: 494,
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
                    "part-shell-02.img": {
                        frame: {
                            x: 1999,
                            y: 1951,
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
                    "map-wall-outhouse-bot.img": {
                        frame: {
                            x: 1358,
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
                    "map-wall-05.img": {
                        frame: {
                            x: 1979,
                            y: 594,
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
                    "map-wall-05-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 678,
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
                    "map-wall-04-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 762,
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
                    "map-wall-04.img": {
                        frame: {
                            x: 1979,
                            y: 830,
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
                            x: 2029,
                            y: 1730,
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
                            x: 2028,
                            y: 1843,
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
                            y: 898,
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
                    "map-building-house-window-res-01.img": {
                        frame: {
                            x: 1979,
                            y: 958,
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
                            y: 1014,
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
                            y: 1070,
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
                            y: 1122,
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
                    "loot-medical-pill.img": {
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
                    "pilgrim-hat.img": {
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
                            x: 1945,
                            y: 719,
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
                    "map-stand-01.img": {
                        frame: {
                            x: 1932,
                            y: 1240,
                            w: 40,
                            h: 45
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 40,
                            h: 45
                        },
                        sourceSize: {
                            w: 40,
                            h: 45
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
                    "gun-dp28-top-01.img": {
                        frame: {
                            x: 1242,
                            y: 1290,
                            w: 40,
                            h: 40
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 40,
                            h: 40
                        },
                        sourceSize: {
                            w: 44,
                            h: 44
                        }
                    },
                    "loot-weapon-fists.img": {
                        frame: {
                            x: 1286,
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
                            x: 1328,
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
                            x: 1452,
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
                            x: 1530,
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
                            x: 1592,
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
                    "part-smoke-01.img": {
                        frame: {
                            x: 1640,
                            y: 1290,
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
                            x: 1682,
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
                            x: 1722,
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
                            x: 1806,
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
                            x: 1890,
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
                    "map-wall-02.img": {
                        frame: {
                            x: 1979,
                            y: 1174,
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
                            y: 1210,
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
                    "pumpkin-play.img": {
                        frame: {
                            x: 1954,
                            y: 1290,
                            w: 21,
                            h: 23
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 0,
                            w: 21,
                            h: 23
                        },
                        sourceSize: {
                            w: 24,
                            h: 24
                        }
                    },
                    "player-feet-01.img": {
                        frame: {
                            x: 1958,
                            y: 1566,
                            w: 17,
                            h: 23
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 17,
                            h: 23
                        },
                        sourceSize: {
                            w: 23,
                            h: 23
                        }
                    },
                    "gun-qbb97-bot-01.img": {
                        frame: {
                            x: 758,
                            y: 1782,
                            w: 34,
                            h: 20
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 34,
                            h: 20
                        },
                        sourceSize: {
                            w: 36,
                            h: 20
                        }
                    },
                    "hatchet.img": {
                        frame: {
                            x: 796,
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
                    "map-barrel-03.img": {
                        frame: {
                            x: 823,
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
                            x: 872,
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
                            x: 921,
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
                            x: 2028,
                            y: 1911,
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
                            y: 1246,
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
                    "map-wall-01-rounded.img": {
                        frame: {
                            x: 1979,
                            y: 1267,
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
                            y: 1287,
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
                            y: 1307,
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
                    "map-bottle-01.img": {
                        frame: {
                            x: 1979,
                            y: 1327,
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
                    "ping-part-circle-highlight.img": {
                        frame: {
                            x: 1979,
                            y: 1347,
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
                    "ping-part-circle.img": {
                        frame: {
                            x: 1979,
                            y: 1367,
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
                    "ping-part-circle-auto-highlight.img": {
                        frame: {
                            x: 2028,
                            y: 1932,
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
                    "ping-part-circle-auto-outer.img": {
                        frame: {
                            x: 2029,
                            y: 1798,
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
                    "ping-part-circle-auto.img": {
                        frame: {
                            x: 2029,
                            y: 1816,
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
                            x: 943,
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
                            x: 1127,
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
                            x: 1252,
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
                    }
                }
            }, {
                meta: {
                    image: "shared-1-50-4b8493c8.png",
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
                    "map-building-container-ceiling-03.img": {
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
                    "map-building-container-ceiling-01.img": {
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
                    "map-building-container-ceiling-02.img": {
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
                    "map-building-container-ceiling-05.img": {
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
                    "map-building-bank-ceiling-03.img": {
                        frame: {
                            x: 1699,
                            y: 1248,
                            w: 108,
                            h: 181
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 95,
                            w: 108,
                            h: 181
                        },
                        sourceSize: {
                            w: 108,
                            h: 276
                        }
                    },
                    "map-bunker-egg-chamber-ceiling-01.img": {
                        frame: {
                            x: 1634,
                            y: 1589,
                            w: 160,
                            h: 153
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 71,
                            w: 160,
                            h: 153
                        },
                        sourceSize: {
                            w: 160,
                            h: 224
                        }
                    },
                    "map-building-shack-ceiling-03.img": {
                        frame: {
                            x: 2,
                            y: 1899,
                            w: 205,
                            h: 145
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 11,
                            y: 0,
                            w: 205,
                            h: 145
                        },
                        sourceSize: {
                            w: 216,
                            h: 168
                        }
                    },
                    "map-pipes-01.img": {
                        frame: {
                            x: 1970,
                            y: 622,
                            w: 45,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 45,
                            h: 144
                        },
                        sourceSize: {
                            w: 45,
                            h: 144
                        }
                    },
                    "map-bunker-generic-floor-01.img": {
                        frame: {
                            x: 211,
                            y: 1899,
                            w: 148,
                            h: 141
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 0,
                            w: 148,
                            h: 141
                        },
                        sourceSize: {
                            w: 160,
                            h: 144
                        }
                    },
                    "map-bunker-generic-floor-02.img": {
                        frame: {
                            x: 363,
                            y: 1899,
                            w: 148,
                            h: 141
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 0,
                            w: 148,
                            h: 141
                        },
                        sourceSize: {
                            w: 160,
                            h: 144
                        }
                    },
