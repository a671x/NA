         channel: "sfx"
                    }, {
                        name: "footstep_08",
                        channel: "sfx"
                    }, {
                        name: "footstep_09",
                        channel: "sfx"
                    }, {
                        name: "snowball_01",
                        channel: "sfx"
                    }, {
                        name: "snowball_02",
                        channel: "sfx"
                    }, {
                        name: "snowball_pickup_01",
                        channel: "ui"
                    }],
                    atlases: ["gradient", "loadout", "shared", "woods", "snow"]
                },
                biome: {
                    colors: {
                        background: 603705,
                        water: 806225,
                        beach: 13480795,
                        riverbank: 9461284,
                        grass: 12434877,
                        underground: 1772803,
                        playerSubmerge: 2854052
                    },
                    particles: {
                        camera: "falling_snow_slow",
                        ripple: "waterRipple"
                    },
                    tracerColors: {
                        "762mm": {
                            regular: 9871846,
                            saturated: 11257087,
                            alphaRate: .96,
                            alphaMin: .4
                        }
                    }
                },
                gameMode: {
                    maxPlayers: 80
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    "064c0a93": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-04-07",
                locale: "ko"
            },
            "word-order": "sov",
            "index-create-account": "계정 생성",
            "index-set-account-name": "Set your account name",
            "index-enter-name": "닉네임 입력",
            "index-finish": "종료",
            "index-delete-account": "계정 삭제",
            "index-delete-account-desc": "계정 삭제를 위해서는 DELETE를 입력해 주세요 :",
            "index-confirm": "확인",
            "index-customize-avatar": "아바타 커스터마이징",
            "index-done": "완료",
            "index-account": "계정",
            "index-log-in-with": "~~로 로그인",
            "index-facebook": "페이스북",
            "index-google": "구글",
            "index-twitch": "트위치",
            "index-discord": "디스코드",
            "index-my-stats": "나의 전적",
            "index-link-account": "계정 연동",
            "index-log-out": "로그아웃",
            "index-change-avatar": "프로필 변경",
            "index-change-account-name": "닉네임 변경",
            "index-back": "뒤로",
            "index-link-account-to": "으로 계정 연동",
            "index-log-in-desc": "전적을 확인하고 싶다면 로그인하세요!",
            "index-logging-in": "Logging in",
            "index-leaderboards": "리더보드",
            "index-slogan": "2D 배틀 로얄",
            "index-region": "월드",
            "index-north-america": "북아메리카",
            "index-europe": "유럽",
            "index-asia": "아시아",
            "index-south-america": "남아메리카",
            "index-korea": "대한민국",
            "index-players": "플레이어",
            "index-play-solo": "솔로하기",
            "index-play-duo": "듀오하기",
            "index-play-squad": "스쿼드하기",
            "index-create-team": "팀 만들기",
            "index-how-to-play": "초보자 가이드",
            "index-leave-team": "팀에서 나가기",
            "index-joining-team": "팀 조인중",
            "index-creating-team": "팀 만드는중",
            "index-invite-link": "친구 초대",
            "index-solo": "솔로",
            "index-duo": "듀오",
            "index-squad": "스쿼드",
            "index-auto-fill": "Auto Fill",
            "index-no-fill": "No Fill",
            "index-waiting-for-leader": "파티장 준비중",
            "index-play": "시작",
            "index-featured-youtuber": "유튜버",
            "index-settings": "세팅",
            "index-high-resolution": "고화질 (그래픽을 높입니다)",
            "index-screen-shake": "화면 효과",
            "index-master-volume": "전체 사운드",
            "index-sfx-volume": "효과음 사운드",
            "index-music-volume": "음악 사운드",
            "index-mobile-announce": "surviv.io 모바일 버전 출시!",
            "index-mobile-tooltip": "모바일에서 <span>surviv.io</span>에 접속해서 플레이하세요!",
            "index-team-is-full": "팀이 꽉 찼습니다!",
            "index-failed-joining-team": "팀에 들어가지 못했습니다.",
            "index-failed-creating-team": "팀을 만들수 없습니다.",
            "index-failed-finding-game": "게임을 찾지 못하였습니다.",
            "index-failed-joining-game": "게임에 들어가지 못했습니다.",
            "index-lost-connection": "네트워크 연결이 끊어짐.",
            "index-host-closed": "네트워크 연결이 끊어짐.",
            "index-view-more": "더보기",
            "index-back-to-main": "메인 메뉴로",
            "index-most-kills": "최다 킬수",
            "index-total-kills": "전체 킬수",
            "index-total-wins": "승리 횟수",
            "index-top-5-percent": "Top 5",
            "index-kill-death-ratio": "K/D",
            "index-for": "For",
            "index-today": "오늘 점수",
            "index-this-week": "7 일 점수",
            "index-all-time": "All Time 점수",
            "index-top-100": "TOP 100",
            "index-rank": "랭킹",
            "index-player": "플레이어",
            "index-total-games": "전체게임 횟수",
            "index-controls": "게임 조작법",
            "index-movement": "이동",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "조준",
            "index-aim-ctrl": "마우스",
            "index-punch": "펀치",
            "index-shoot": "발사",
            "index-shoot-ctrl": "좌클릭",
            "index-change-weapons": "무기바꾸기",
            "index-change-weapons-ctrl": "1-4 or 스크롤",
            "index-stow-weapons": "무기 집어넣기",
            "index-stow-weapons-ctrl": "3 or E",
            "index-swap-weapons": "그전 무기로 바꾸기",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "리로드",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "줌 인 or 아웃",
            "index-scope-zoom-ctrl": "좌클릭으로 줌",
            "index-pickup": "줍기",
            "index-loot": "줍기",
            "index-revive": "부활",
            "index-pickup-ctrl": "F",
            "index-use-medical": "힐링",
            "index-use-medical-ctrl": "좌클릭, 7-0",
            "index-drop-item": "아이템 버리기",
            "index-drop-item-ctrl": "우클릭",
            "index-cancel-action": "행동취소",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "지도보기",
            "index-view-map-ctrl": "M or G",
            "index-toggle-minimap": "미니 맵 전환",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "듀오/스쿼드 멤버와 소통하기",
            "index-use-ping-ctrl": "C를 누른 상태에서 우클릭을 하고 마우스를 드래그해 이모티콘을 선택하세요!",
            "index-use-emote": "이모티콘 사용하기",
            "index-use-emote-ctrl": "화면에 우클릭을 누른 채 마우스를 드래그해 이모티콘을 선택하세요!",
            "index-tips-1-desc": "surviv.io의 목표는 마지막 1인, 또는 듀오, 또는 스쿼드가 되는 것입니다! 한 게임당 목숨은 한 개 - 죽으면 다시 부활할 수 없어요!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "PUBG, 포트나이트, 또는 H1Z1와 같은 배틀로얄 장르의 게임을 좋아하신다면, 이미 당신은 surviv.io의 세계에 들어와 있습니다! 이 게임은 2D로 되어 있는 배틀그라운드라고 생각하시면 됩니다(조금 더 안정적인 서버와 먹기 쉬워진 치킨과 함께요.)",
            "index-tips-3": "파밍과 전투",
            "index-tips-3-desc": "당신이 시작할 때에는 작은 공간 외에는 아무것도 주어지지 않습니다. 맵 곳곳을 돌아다니며 무기, 탄약, 조준경, 그리고 의료용 아이템을 찾아다니세요. 다른 플레이어를 사살하면 그 플레이어의 아이템을 차지할 수 있습니다!",
            "index-tips-4": "자기장 = 제 2의 적!",
            "index-tips-4-desc": "다른 플레이어만이 당신에게 데미지를 주는 것은 아닙니다. 시간이 지날 때마다 빨간색 자기장이 점점 좁혀옵니다. 자기장 안에 있다면 경기 후반으로 갈수록 높은 데미지를 받게 되죠. 지도를 보며 안전에 신경쓰세요!",
            "game-alive": "생존",
            "game-reloading": "장전중",
            "game-using": "사용중",
            "game-reviving": "부활중",
            "game-revive-teammate": "팀원부활",
            "game-equip": "착용",
            "game-cancel": "취소",
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
            "game-waiting-for-players": "플레이어 기다리느중",
            "game-spectating": "Spectating",
            "game-red-zone-advances": "빨간 구역 움직입니다!",
            "game-red-zone-advancing": "빨간 구역이 움직입니다.  안전지대로 대피하십시요.",
            "game-seconds": "s",
            "game-minutes": "m",
            "game-minute": "m",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "공간이 부족합니다!",
            "game-item-already-owned": "이 물건은 이미 소유 하고 있습니다!",
            "game-item-already-equipped": "이 물건은 이미 착용 하고 있습니다!",
            "game-better-item-equipped": "더 좋은 아이템을 착용 하고 있습니다!",
            "game-gun-cannot-fire": "이 구역에서는 총을 쏠 수 없습니다!",
            "game-play-new-game": "새로 시작하기",
            "game-spectate": "관중모드",
            "game-full-screen": "풀 스크린",
            "game-sound": "사운드",
            "game-quit-game": "나가기",
            "game-return-to-game": "돌아가기",
            "game-hide-match-stats": "게임통계 감추기",
            "game-view-match-stats": "게임통계 보이기",
            "game-previous-teammate": "이전 플레이어",
            "game-next-teammate": "다음 플레이어",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "나가기",
            "game-your-results": "랭킹",
            "game-chicken": "이겼닭! 오늘 저녁은 치킨이닭!",
            "game-won-the-game": "승리.",
            "game-team-eliminated": "그럴 수 있어. 이런 날도 있는 거지 뭐.",
            "game-rank": "랭킹",
            "game-team-rank": "팀 랭킹",
            "game-team-kills": "팀 킬",
            "game-kill": "킬",
            "game-kills": "킬",
            "game-damage-dealt": "가한 피해량",
            "game-damage-taken": "받은 피해량",
            "game-survived": "생존시간",
            "game-backpack00": "주머니",
            "game-backpack01": "작은 가방",
            "game-backpack02": "보통 가방",
            "game-backpack03": "군인 가방",
            "game-bandage": "붕대",
            "game-bandage-tooltip": "레프트 클릭 하시면 15 HP 증가합니다.",
            "game-healing-tooltip": "75 HP 이상 힐할수 없읍니다.",
            "game-healthkit": "구급 상자",
            "game-healthkit-tooltip": "레프트 클릭 하시면 100 HP 증가합니다.",
            "game-soda": "소다",
            "game-soda-tooltip": "레프트 클릭 하시면 아드레날린 25 증가합니다.",
            "game-adrenaline-tooltip": "아드레날린은 HP 지속적으로 회복시킴니다.",
            "game-painkiller": "알약",
            "game-painkiller-tooltip": "레프트 클릭 하시면 아드레날린 50 증가합니다.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "M9, G18C, MP5, MAC-10, UMP9, CZ-3A1, Vector 탄약.",
            "game-12gauge": "12 게이지",
            "game-12gauge-tooltip": "M870, M1100, SPAS-12, Saiga-12, MP220 탄약.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38, DP-28 탄약.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "FAMAS, M416, M4A1-S, QBB-97, Mk 12, M249 탄약.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "DEagle 50 탄약.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "AWM-S 탄약.",
            "game-flare": "신호탄",
            "game-flare-tooltip": "플레어 건을 위한 탄약.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "M1911, M1A1, Model 94, Peacemaker 탄약.",
            "game-chest01": "조끼 레벨 1",
            "game-chest02": "조끼 레벨 2",
            "game-chest03": "조끼 레벨 3",
            "game-helmet01": "헬멧 레벨 1",
            "game-helmet02": "헬멧 레벨 2",
            "game-helmet03": "헬멧 레벨 3",
            "game-1xscope": "1x 스코프",
            "game-2xscope": "2x 스코프",
            "game-4xscope": "4x 스코프",
            "game-8xscope": "8x 스코프",
            "game-15xscope": "15x 스코프",
            "game-level-1": "레벨 1",
            "game-level-2": "레벨 2",
            "game-level-3": "레벨 3",
            "game-level-4": "레벨 4",
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
            "game-fists": "주먹",
            "game-karambit_rugged": "Karambit Rugged",
            "game-hud-karambit_rugged": "Karambit",
            "game-karambit_prismatic": "Karambit Prismatic",
            "game-hud-karambit_prismatic": "Karambit",
            "game-bayonet_rugged": "Bayonet Rugged",
            "game-hud-bayonet_rugged": "Bayonet",
            "game-bayonet_woodland": "Bayonet Woodland",
            "game-hud-bayonet_woodland": "Bayonet",
            "game-huntsman_rugged": "Huntsman Rugged",
            "game-hud-huntsman_rugged": "Huntsman",
            "game-huntsman_burnished": "Huntsman Burnished",
            "game-hud-huntsman_burnished": "Huntsman",
            "game-woodaxe": "도끼",
            "game-hook": "갈고리",
            "game-pan": "갓라이팬",
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
            "game-flare_gun": "플레어 건",
            "game-flare_gun_dual": "플레어 건",
            "game-hud-flare_gun_dual": "플레어 건",
            "game-frag": "수류탄",
            "game-hud-frag": "수류탄",
            "game-smoke": "연막탄",
            "game-hud-smoke": "연막탄",
            "game-potato": "감자",
            "game-hud-potato": "감자",
            "game-potato_heavy": "감자",
            "game-barrel_01": "a barrel",
            "game-silo_01": "a silo",
            "game-oven_01": "an oven",
            "game-control_panel_01": "Control Panel",
            "game-control_panel_02": "Control Panel",
            "game-control_panel_03": "a computer terminal",
            "game-power_box_01": "a power box",
            "game-airdrop_crate_01": "Air Drop",
            "game-airdrop_crate_02": "Air Drop",
            "index-play-50v50": "50v50하기",
            "index-50v50": "50v50",
            "game-red-team": "Red Team",
            "game-blue-team": "Blue Team",
            "game-red-leader": "Red Leader",
            "game-blue-leader": "Blue Leader",
            "game-is-down": "is down",
            "game-is-dead": "is dead",
            "game-promoted-to": "promoted to",
            "game-youve-been-promoted-to": "You've been promoted to",
            "index-online": "온라인",
            "index-news-korea": "<span class='highlight'>한국 서버를</span> 아시아 서버에서 분리해 연결 문제를 부분적으로 해결했습니다. 한국 서버를 플레이하려면 서버 목록에서 <span class='highlight'>대한민국를</span> 선택하세요."
        };
        e.exports = i
    },
    "076760a2": function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            var a = s.Texture.fromImage(t, void 0, void 0, 1),
                i = a.baseTexture,
                r = 0;
            return i.hasLoaded || (i.on("loaded", function(a) {
                console.log("Loaded texture", t), e.plugins.prepare.upload(a)
            }), i.on("error", function(e) {
                console.log("BaseTex load error, retrying", t), r++ <= 3 && setTimeout(function() {
                    e.source && (e.updateSourceImage(""), e.updateSourceImage(t.substring(5, t.length)))
                }, 500 * (r - 1))
            })), i
        }

        function o(e, t) {
            var a = r(e, "assets/" + t.meta.image),
                i = new s.Spritesheet(a, t);
            return i.resolution = a.resolution, i.parse(function() {}), i
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
            s = (a("0e566746"), a("8b1dfb45")),
            l = a("ce29f17f"),
            c = {
                low: a("aaf70d05"),
                high: a("6e13f3b7")
            },
            m = function() {
                function e(t, a) {
                    i(this, e), this.renderer = t, this.textureRes = this.selectTextureRes(t, a), this.atlases = {}, t.plugins.prepare.limiter.maxItemsPerFrame = 1
                }
                return n(e, [{
                    key: "selectTextureRes",
                    value: function(e, t) {
                        var a = Math.min(window.screen.width, window.screen.height),
                            i = Math.max(window.screen.width, window.screen.height);
                        a *= window.devicePixelRatio, i *= window.devicePixelRatio;
                        var r = i < 1366 && a < 768,
                            o = t.get("highResTex") ? "high" : "low";
                        if ((r || l.mobile && !l.tablet || e.type == s.RENDERER_TYPE.CANVAS) && (o = "low"), e.type == s.RENDERER_TYPE.WEBGL) {
                            var n = e.gl;
                            n.getParameter(n.MAX_TEXTURE_SIZE) < 4096 && (o = "low")
                        }
                        return console.log("TextureRes", o, "screenDims", window.screen.width, window.screen.height), o
                    }
                }, {
                    key: "isAtlasLoaded",
                    value: function(e) {
                        return this.atlases[e] && this.atlases[e].loaded
                    }
                }, {
                    key: "loadAtlas",
                    value: function(e) {
                        if (!this.isAtlasLoaded(e)) {
                            console.log("Load atlas", e), this.atlases[e] = this.atlases[e] || {
                                loaded: !1,
                                spritesheets: []
                            };
                            for (var t = c[this.textureRes] || c.low, a = t[e], i = 0; i < a.length; i++) {
                                var r = o(this.renderer, a[i]);
                                this.atlases[e].spritesheets.push(r)
                            }
                            this.atlases[e].loaded = !0
                        }
                    }
                }, {
                    key: "unloadAtlas",
                    value: function(e) {
                        if (this.isAtlasLoaded(e)) {
                            console.log("Unload atlas", e);
                            for (var t = this.atlases[e], a = 0; a < t.spritesheets.length; a++) t.spritesheets[a].destroy(!0);
                            t.loaded = !1, t.spritesheets = []
                        }
                    }
                }, {
                    key: "loadAtlasList",
                    value: function(e) {
                        for (var t = Object.keys(this.atlases), a = 0; a < t.length; a++) {
                            var i = t[a]; - 1 === e.indexOf(i) && this.unloadAtlas(i)
                        }
                        for (var r = 0; r < e.length; r++) {
                            var o = e[r];
                            this.isAtlasLoaded(o) || this.loadAtlas(o)
                        }
                    }
                }, {
                    key: "unloadAllAtlases",
                    value: function() {
                        for (var e = Object.keys(this.atlases), t = 0; t < e.length; t++) {
                            var a = e[t];
                            this.unloadAtlas(a)
                        }
                    }
                }]), e
            }();
        e.exports = {
            TextureManager: m
        }
    },
    "0955a76e": function(e, t, a) {
        "use strict";

        function i() {}

        function r() {
            var e = ["part-smoke-02.img", "part-smoke-03.img"];
            this.active = !1, this.zIdx = 0, this.sprite = n.Sprite.fromImage(e[Math.floor(Math.random() * e.length)]), this.sprite.anchor = new n.Point(.5, .5), this.sprite.visible = !1
        }

        function o() {
            this.e = new p.Pool(i), this.particles = [], this.zIdx = 2147483647
        }
        var n = a("8b1dfb45"),
            s = a("6b42806d"),
            l = a("10899aea"),
            c = a("1901e2d9"),
            m = a("c2a798c8"),
            p = (a("af8ba00f"), a("753d6e4b"));
        i.prototype = {
            o: function() {},
            n: function() {
                this.particle.fadeOut(), this.particle = null
            },
            l: function(e, t, a, i) {
                this.type = e.type, this.pos = m.copy(e.pos), this.rad = e.rad, t && (this.layer = e.layer, this.interior = e.interior), a && (this.particle = i.smokeBarn.allocParticle(), this.particle.o(this.pos, this.rad, this.layer, this.interior)), this.particle.posTarget = m.copy(this.pos), this.particle.radTarget = this.rad
            }
        }, r.prototype = {
            o: function(e, t, a, i) {
                this.pos = m.copy(e), this.posTarget = m.copy(this.pos), this.rad = t, this.radTarget = this.rad, this.rot = c.random(0, 2 * Math.PI), this.rotVel = Math.PI * c.random(.25, .5) * (Math.random() < .5 ? -1 : 1), this.fade = !1, this.fadeTicker = 0, this.fadeDuration = c.random(.5, .75), this.tint = c.rgbToInt(c.hsvToRgb(0, 0, c.random(.9, .95))), this.layer = a, this.interior = i
            },
            fadeOut: function() {
                this.fade = !0
            }
        }, o.prototype = {
            allocParticle: function() {
                for (var e = null, t = 0; t < this.particles.length; t++)
                    if (!this.particles[t].active) {
                        e = this.particles[t];
                        break
                    }
                return e || (e = new r, this.particles.push(e)), e.active = !0, e.zIdx = this.zIdx--, e
            },
            c: function(e, t, a, i, r) {
                for (var o = this.e.m(), n = 0; n < o.length; n++) o[n].active;
                for (var m = 0; m < this.particles.length; m++) {
                    var p = this.particles[m];
                    if (p.active) {
                        p.rad = l.lerp(3 * e, p.rad, p.radTarget), p.pos = l.v2lerp(3 * e, p.pos, p.posTarget), p.rotVel *= 1 / (1 + .1 * e), p.rot += p.rotVel * e, p.fadeTicker += p.fade ? e : 0, p.active = p.fadeTicker < p.fadeDuration;
                        var d = .9 * l.clamp(1 - p.fadeTicker / p.fadeDuration, 0, 1),
                            h = p.layer;
                        !(c.sameLayer(p.layer, a.layer) || 2 & a.layer) || 1 != p.layer && 2 & a.layer && i.insideStructureMask(s.createCircle(p.pos, 1)) || (h |= 2);
                        var u = p.interior ? 500 : 1e3;
                        r.addPIXIObj(p.sprite, h, u, p.zIdx);
                        var g = t.pointToScreen(p.pos),
                            y = t.pixels(2 * p.rad / t.ppu);
                        p.sprite.position.set(g.x, g.y), p.sprite.scale.set(y, y), p.sprite.rotation = p.rot, p.sprite.tint = p.tint, p.sprite.alpha = d, p.sprite.visible = p.active
                    }
                }
            }
        }, e.exports = {
            p: o
        }
    },
    "0ae5a1da": function(e, t, a) {
        "use strict";
        var i = {
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
                }
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
                }
            },
            mirv_mini: {
                name: "MIRV Grenade",
                type: "throwable",
                quality: 0,
                explosionType: "explosion_mirv_mini",
                inventoryOrder: 99,
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
                }
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
                }
            },
            snowball: {
                name: "Snowball",
                type: "throwable",
                quality: 0,
                explosionType: "explosion_snowball",
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
                quality: 0,
                explosionType: "explosion_snowball_heavy",
                inventoryOrder: 0,
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
                quality: 0,
                explosionType: "explosion_bomb_iron",
                inventoryOrder: 1,
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
            }
        };
        e.exports = i
    },
    "0b12821e": function(e, t, a) {
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
            o = a("10899aea"),
            n = {
                wind: "ambient_wind_01",
                waves: "ambient_waves_01",
                river: "ambient_stream_01"
            },
            s = function() {
                function e() {
                    i(this, e), this.startedTracks = !1, this.menuMusic = null, this.menuWindFade = 0, this.ambientTracks = [], this.ambientTrackToIdx = {}, this.interiorSound = {
                        inst: null,
                        name: "",
                        volume: 0
                    }, this.ambienceVolume = 1, this.interiorVolume = 0, this.soundUpdateThrottle = 0;
                    for (var t = Object.keys(n), a = 0; a < t.length; a++) {
                        var r = t[a];
                        this.ambientTracks.push({
                            name: r,
                            inst: null,
                            volume: 0
                        }), this.ambientTrackToIdx[r] = this.ambientTracks.length - 1
                    }
                    this.initTime = Date.now()
                }
                return r(e, [{
                    key: "getTrack",
                    value: function(e) {
                        return this.ambientTracks[this.ambientTrackToIdx[e]]
                    }
                }, {
                    key: "onGameStart",
                    value: function() {
                        for (var e = 0; e < this.ambientTracks.length; e++) this.ambientTracks[e].volume = 0;
                        this.getTrack("wind").volume = 1, this.ambienceVolume = 1, this.interiorVolume = 0, this.soundUpdateThrottle = 0
                    }
                }, {
                    key: "onGameComplete",
                    value: function(e) {
                        if (this.startedTracks) {
                            var t = this.getTrack("wind"),
                                a = this.getTrack("waves"),
                                i = this.getTrack("river");
                            e.setVolume(i.inst, 0);
                            var r = e.getVolume(t.inst),
                                n = e.getVolume(a.inst),
                                s = r + n;
                            o.eqAbs(s, 0) ? e.setVolume(t.inst, 1) : e.setVolume(t.inst, 1 - n)
                        }
                        this.interiorSound.inst && e.stopSound(this.interiorSound.inst), this.interiorSound.inst = null, this.interiorSound.name = "", this.interiorSound.volume = 0
                    }
                }, {
                    key: "update",
                    value: function(e, t, a) {
                        if (!this.startedTracks) {
                            var i = [],
                                r = function(e, t) {
                                    i.push({
                                        name: e,
                                        key: t
                                    })
                                };
                            r("menu_music", "music");
                            for (var s = 0; s < this.ambientTracks.length; s++) {
                                var l = this.ambientTracks[s];
                                r(n[l.name], "ambient")
                            }
                            for (var c = 0, m = 0; m < i.length; m++) {
                                var p = i[m];
                                t.isSoundLoaded(p.name, p.key) && c++
                            }
                            if (c == i.length) {
                                this.menuMusic = t.playSound("menu_music", {
                                    channel: "music",
                                    fadeIn: !0,
                                    loop: !1,
                                    forceStart: !0
                                });
                                for (var d = 0; d < this.ambientTracks.length; d++) {
                                    var h = this.ambientTracks[d];
                                    h.inst = t.playSound(n[h.name], {
                                        channel: "ambient",
                                        startSilent: !0,
                                        loop: !0,
                                        forceStart: !0
                                    })
                                }
                                this.startedTracks = !0, console.log("Play delay", Date.now() - this.initTime)
                            }
                        }
                        if (this.startedTracks)
                            if (a) {
                                if (this.menuMusic && t.isSoundPlaying(this.menuMusic) && t.stopSound(this.menuMusic), this.menuWindFade = 1, this.soundUpdateThrottle -= e, this.soundUpdateThrottle < 0) {
                                    this.soundUpdateThrottle = .2;
                                    var u = "" != this.interiorSound.name;
                                    u && !this.interiorSound.inst && (this.interiorSound.inst = t.playSound(this.interiorSound.name, {
                                        channel: "ambient",
                                        startSilent: !0,
                                        loop: !0,
                                        forceStart: !0
                                    })), !u && this.interiorSound.inst && o.eqAbs(t.getVolume(this.interiorSound.inst), 0) && (t.stopSound(this.interiorSound.inst), this.interiorSound.inst = null);
                                    var g = u ? this.interiorSound.volume : 0;
                                    g >= this.interiorVolume ? this.interiorVolume = g : this.interiorVolume = o.max(this.interiorVolume - 10 * e, 0), this.ambienceVolume = 1 - this.interiorVolume;
                                    for (var y = 0; y < this.ambientTracks.length; y++) {
                                        var w = this.ambientTracks[y],
                                            x = o.clamp(w.volume * this.ambienceVolume, 0, 1);
                                        t.setVolume(w.inst, x)
                                    }
                                    this.interiorSound.inst && t.setVolume(this.interiorSound.inst, this.interiorVolume), this.interiorSound.name = "", this.interiorSound.volume = 0
                                }
                            } else if (this.menuMusic && !t.isSoundPlaying(this.menuMusic) && this.menuWindFade < 1) {
                            var f = this.getTrack("wind");
                            this.menuWindFade = o.min(this.menuWindFade + e, 1), t.setVolume(f.inst, this.menuWindFade)
                        }
                    }
                }]), e
            }();
        e.exports = s
    },
    "0c8ffd27": function(e, t, a) {
        "use strict";

        function i() {
            this.sprite = new r.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1
        }
        var r = a("8b1dfb45"),
            o = (a("34e32c48"), a("6b42806d")),
            n = a("10899aea"),
            s = a("1901e2d9"),
            l = a("c2a798c8"),
            c = (a("af8ba00f"), a("aca73f78"));
        i.prototype = {
            o: function() {
                this.isNew = !1, this.smokeEmitter = null, this.sprite.visible = !1, this.img = ""
            },
            n: function() {
                this.sprite.visible = !1, this.sprite.parent && this.sprite.parent.removeChild(this.sprite), this.door && this.door.casingSprite && (this.door.casingSprite.destroy(), this.door.casingSprite = null), this.smokeEmitter && (this.smokeEmitter.stop(), this.smokeEmitter = null)
            },
            l: function(e, t, a, i) {
                t && (this.type = e.type, this.layer = e.layer, this.healthT = e.healthT, this.dead = e.dead);
                var m = c[this.type];
                if (this.pos = l.copy(e.pos), this.rot = n.oriToRad(e.ori), this.scale = e.scale, this.imgScale = m.img.scale, this.collider = o.transform(m.collision, this.pos, this.rot, this.scale), a) {
                    if (this.isNew = !0, this.exploded = -1 != i.map.deadObstacleIds.indexOf(this.__id), this.explodeParticle = m.explodeParticle, this.collidable = m.collidable, this.destructible = m.destructible, this.height = m.height, this.isWall = !!m.isWall, this.isWindow = !!m.isWindow, this.isBush = !!m.isBush, this.isDoor = void 0 !== m.door, this.isDoor) {
                        this.door = {
                            playErrorFx: m.door.slideToOpen && m.door.openOneWay,
                            closedPos: l.copy(e.pos),
                            autoOpen: m.door.autoOpen,
                            interactionRad: m.door.interactionRad,
                            interpSpeed: m.door.openSpeed,
                            interpPos: l.copy(e.pos),
                            interpRot: n.oriToRad(e.ori),
                            seq: e.door.seq,
                            seqOld: e.door.seq,
                            open: e.door.open,
                            wasOpen: e.door.open,
                            casingSprite: null
                        };
                        var p = m.door.casingImg;
                        if (void 0 !== p) {
                            var d = p.pos || l.create(0, 0);
                            d = l.rotate(d, this.rot + .5 * Math.PI);
                            var h = new r.Sprite;
                            h.texture = r.Texture.fromImage(p.sprite), h.anchor.set(.5, .5), h.posOffset = d, h.imgScale = p.scale, h.tint = p.tint, h.zOrd = p.zIdx, h.zIdx = this.__id, h.alpha = p.alpha, h.visible = !0, this.door.casingSprite = h
                        }
                    }
                    this.isButton = void 0 !== m.button, this.isButton && (this.button = {
                        interactionRad: m.button.interactionRad,
                        interactionText: m.button.interactionText || "game-use",
                        seq: e.button.seq,
                        seqOld: e.button.seq
                    }), this.isPuzzlePiece = e.isPuzzlePiece, this.parentBuildingId = this.isPuzzlePiece ? e.parentBuildingId : 0
                }
                if (this.isDoor && t) {
                    this.door.canUse = e.door.canUse, this.door.open = e.door.open, this.door.seq = e.door.seq;
                    var u = l.rotate(l.create(m.door.slideOffset, 0), this.rot + .5 * Math.PI);
                    this.door.closedPos = e.door.open ? l.add(e.pos, u) : l.copy(e.pos)
                }
                if (this.isButton && t && (this.button.onOff = e.button.onOff, this.button.canUse = e.button.canUse, this.button.seq = e.button.seq), void 0 !== m.explosion && !this.smokeEmitter && e.healthT < .5 && !e.dead) {
                    var g = l.normalize(l.create(1, 1));
                    this.smokeEmitter = i.particleBarn.addEmitter("smoke_barrel", {
                        pos: this.pos,
                        dir: g,
                        layer: this.layer
                    })
                }
                var y = !1,
                    w = this.dead ? m.img.residue : m.img.sprite;
                if (this.isButton && this.button.onOff && !this.dead && m.button.useImg && (w = m.button.useImg), w != this.img) {
                    var x = l.create(.5, .5);
                    this.isDoor && (x = m.door.spriteAnchor);
                    var f = void 0 !== w;
                    !f && this.sprite.parent && this.sprite.parent.removeChild(this.sprite), f && (this.sprite.texture = "none" == w ? r.Texture.EMPTY : r.Texture.fromImage(w), this.sprite.anchor.set(x.x, x.y), this.sprite.tint = m.img.tint, this.sprite.imgAlpha = this.dead ? .75 : m.img.alpha, this.sprite.zOrd = m.img.zIdx, this.sprite.zIdx = 65535 * Math.floor(1e3 * this.scale) + this.__id, this.sprite.alpha = this.sprite.imgAlpha, y = !0), this.sprite.visible = f, this.img = w
                }
                var b = i.map.getMapDef().biome.valueAdjust;
                y && b < 1 && (this.sprite.tint = s.adjustValue(this.sprite.tint, b))
            },
            getInteraction: function() {
                return this.isButton && this.button.canUse ? {
                    rad: this.button.interactionRad,
                    action: this.button.interactionText,
                    object: "game-" + this.type
                } : this.isDoor && this.door.canUse && !this.door.autoOpen ? {
                    rad: this.door.interactionRad,
                    action: this.door.open ? "game-close-door" : "game-open-door",
                    object: ""
                } : null
            },
            c: function(e, t, a, i, r, m, p) {
                if (this.isButton) {
                    var d = this.button;
                    if (d.seq != d.seqOld) {
                        var h = c[this.type];
                        if (h.button.useParticle) {
                            var u = o.toAabb(this.collider),
                                g = l.mul(l.sub(u.max, u.min), .5),
                                y = l.add(u.min, g),
                                w = l.mul(l.randomUnit(), s.random(5, 15));
                            i.addParticle(h.button.useParticle, this.layer, y, w)
                        }
                        var x = this.button.onOff ? h.button.sound.on : h.button.sound.off;
                        x && r.playSound(x, {
                            channel: "sfx",
                            soundPos: this.pos,
                            layer: this.layer,
                            muffled: !0
                        })
                    }
                    d.seqOld = d.seq
                }
                if (this.isDoor) {
                    var f = this.door,
                        b = f.interpSpeed,
                        _ = l.sub(this.pos, f.interpPos),
                        S = l.length(_),
                        v = b * e;
                    S < v && (v = S);
                    var k = S > 1e-4 ? l.div(_, S) : l.create(1, 0);
                    f.interpPos = l.add(f.interpPos, l.mul(k, v));
                    var z = Math.PI * f.interpSpeed,
                        M = n.angleDiff(f.interpRot, this.rot),
                        T = n.sign(M) * z * e;
                    if (Math.abs(M) < Math.abs(T) && (T = M), f.interpRot += T, f.seq != f.seqOld) {
                        var I = c[this.type],
                            P = I.door.sound.change || "";
                        "" != P && r.playSound(P, {
                            channel: "sfx",
                            soundPos: this.pos,
                            layer: this.layer,
                            muffled: !0
                        }), f.seqOld = f.seq
                    }
                    if (f.open != f.wasOpen) {
                        var C = c[this.type],
                            A = f.open ? C.door.sound.open : C.door.sound.close;
                        r.playSound(A, {
                            channel: "sfx",
                            soundPos: this.pos,
                            layer: this.layer,
                            muffled: !0
                        }), f.wasOpen = f.open
                    }
                }
                if (this.dead && !this.exploded && (t.deadObstacleIds.push(this.__id), this.exploded = !0, this.smokeEmitter && (this.smokeEmitter.stop(), this.smokeEmitter = null), !this.isNew)) {
                    for (var E = c[this.type], D = o.toAabb(this.collider), O = l.mul(l.sub(D.max, D.min), .5), B = l.add(D.min, O), R = Math.floor(s.random(5, 11)), L = 0; L < R; L++) {
                        var F = l.mul(l.randomUnit(), s.random(5, 15)),
                            j = Array.isArray(this.explodeParticle) ? this.explodeParticle[Math.floor(Math.random() * this.explodeParticle.length)] : this.explodeParticle;
                        i.addParticle(j, this.layer, B, F)
                    }
                    r.playSound(E.sound.explode, {
                        channel: "sfx",
                        soundPos: B,
                        layer: this.layer,
                        muffled: !0
                    })
                }
                if (this.smokeEmitter && (this.smokeEmitter.pos = l.copy(this.pos), this.smokeEmitter.enabled = !this.dead && this.healthT < .5), this.sprite.visible && this.img) {
                    var q = this.dead ? 5 : this.sprite.zOrd,
                        N = this.sprite.zIdx,
                        V = this.layer;
                    !this.dead && q >= 50 && 0 == this.layer && 0 == m.layer && (q += 100, V |= 2), p.addPIXIObj(this.sprite, V, q, N), this.isDoor && this.door.casingSprite && p.addPIXIObj(this.door.casingSprite, V, q + this.door.casingSprite.zOrd, N)
                }
                this.isNew = !1
            },
            render: function(e, t) {
                var a = this.isDoor ? this.door.interpPos : this.pos,
                    i = this.isDoor ? this.door.interpRot : this.rot,
                    r = this.scale,
                    o = e.pointToScreen(a),
                    n = e.pixels(r * this.imgScale);
                if (this.sprite.position.set(o.x, o.y), this.sprite.scale.set(n, n), this.sprite.rotation = -i, this.sprite.alpha = this.sprite.imgAlpha, this.isDoor && this.door.casingSprite) {
                    var s = e.pointToScreen(l.add(this.door.closedPos, this.door.casingSprite.posOffset)),
                        c = e.pixels(r * this.door.casingSprite.imgScale);
                    this.door.casingSprite.position.set(s.x, s.y), this.door.casingSprite.scale.set(c, c), this.door.casingSprite.rotation = -i, this.door.casingSprite.visible = !this.dead
                }
            }
        }, e.exports = i
    },
    "0cc73a5c": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-03-03",
                locale: "pl"
            },
            "word-order": "svo",
            "index-slogan": "Battle Royale 2D",
            "index-region": "Region",
            "index-north-america": "Ameryka Północna",
            "index-europe": "Europa",
            "index-asia": "Azja",
            "index-south-america": "Ameryka Południowa",
            "index-korea": "Korea Południowa",
            "index-players": "Gracze",
            "index-play-solo": "Graj sam",
            "index-play-duo": "Graj duo",
            "index-play-squad": "Graj oddział",
            "index-create-team": "Stwórz oddział",
            "index-how-to-play": "Jak grać",
            "index-leave-team": "Opuść zespół",
            "index-joining-team": "Dołączanie do zespołu",
            "index-creating-team": "Tworzenie zespołu",
            "index-invite-link": "Link zapraszający",
            "index-solo": "Solo",
            "index-duo": "Duo",
            "index-squad": "Oddział",
            "index-auto-fill": "Automatyczne uzupełnianie",
            "index-no-fill": "Bez uzupełnianie",
            "index-waiting-for-leader": "Czekanie na przywódcę aby zaczął grę...",
            "index-play": "Graj",
            "index-featured-youtuber": "Wyróżniony YouTuber",
            "index-settings": "Ustawienia",
            "index-high-resolution": "Wysoka Rozdzielczość (zaznacz aby poprawić jakość wizualną)",
            "index-screen-shake": "Trzęsienie ekranu",
            "index-master-volume": "Głośność ogólną",
            "index-sfx-volume": "Głośność efektów dźwiękowych",
            "index-music-volume": "Głośność muzyki",
            "index-team-is-full": "Drużyna jest pełny!",
            "index-failed-joining-team": "Nie udało się dołączyć do drużyny.",
            "index-failed-creating-team": "Nie udało się stworzyć drużyny.",
            "index-failed-finding-game": "Nie udało się znaleźć gry.",
            "index-failed-joining-game": "Nie udało się dołączyć do gry.",
            "index-lost-connection": "Utracono połączenie z drużyną.",
            "index-host-closed": "Host zamknął połączenie.",
            "index-invalid-protocol": "Przestarzała wersja klienta.",
            "index-view-more": "Zobacz więcej",
            "index-back-to-main": "Powrót do Menu",
            "index-most-kills": "Najwięcej zabójstw",
            "index-total-kills": "Wszystkie zabójstwa",
            "index-total-wins": "Wszystkie wygrane",
            "index-top-5-percent": "Najlepsze 5 procent",
            "index-kill-death-ratio": "Średnia zabójstw do zgonów",
            "index-for": "Dla",
            "index-today": "Dzisiaj",
            "index-this-week": "Ten tydzień",
            "index-all-time": "Od początku",
            "index-top-100": "Najlepsze 100",
            "index-rank": "Ranga",
            "index-player": "Gracz",
            "index-total-games": "Wszystkie gry",
            "index-controls": "Sterowanie",
            "index-movement": "Ruch",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Celowanie",
            "index-aim-ctrl": "Myszka",
            "index-punch": "Uderzanie pięściami",
            "index-shoot": "Strzał",
            "index-shoot-ctrl": "Lewy przycisk myszy",
            "index-change-weapons": "Zmień bronie",
            "index-change-weapons-ctrl": "1 do 4 albo kółko myszy",
            "index-stow-weapons": "Schowaj broń (Tryb pięści)",
            "index-stow-weapons-ctrl": "3 albo E",
            "index-swap-weapons": "Zmień na poprzednią broń",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Przeładuj",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Przybliżenie lunety",
            "index-scope-zoom-ctrl": "Lewy przycisk myszy aby przybliżyć",
            "index-pickup": "Podnieś",
            "index-loot": "Łup",
            "index-revive": "Wskrześ",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Użyj przyboru medycznego",
            "index-use-medical-ctrl": "Lewy przycisk myszy na przedmiot, albo 7 - 0",
            "index-drop-item": "Upuść",
            "index-drop-item-ctrl": "Prawy przycisk myszy na przedmiot",
            "index-cancel-action": "Przerwij działanie",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Pokaż Mapę",
            "index-view-map-ctrl": "M albo G",
            "index-toggle-minimap": "Przełącz na Minimapę",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Użyj menu znaczników drużynowych",
            "index-use-ping-ctrl": "Przytrzymaj C, następnie przytrzymaj prawy przycisk myszy i ją przeciągnij, po tym puść prawy przycisk myszy",
            "index-use-emote": "Użyj menu emotikon",
            "index-use-emote-ctrl": "Przytrzymaj prawy przycisk myszy i ją przeciągnij, po tym puść prawy przycisk myszy",
            "index-tips-1-desc": "Celem surviv.io jest być ostatnim żyjącym graczem. Tutaj masz tylko jedno życie - nie ma odrodzeń!",
            "index-tips-2": "PUBG 2D",
            "index-tips-2-desc": "Jeżeli kiedykolwiek grałeś w inne gry battle royale typu PUBG, Fortnite albo H1Z1, to już jesteś w połowie drogi! Myśl o surviv.io tak jak byłby to PUBG 2D.",
            "index-tips-3": "Zabij i zabierz łup",
            "index-tips-3-desc": "Rozpoczynasz grę bez żadnych przedmiotów, nie licząc podstawowego plecaka. Poruszaj się po mapie żeby znaleźć łup: Bronie, Lunety oraz przedmioty do leczenia. Zabijaj innych graczy i zabierz ich łup!",
            "index-tips-4": "Czerwone = Złe!",
            "index-tips-4-desc": "Nie tylko gracze mogą cię zranić. Zabójcza czerwona strefa będzie się zmniejszać z różnych stron mapy i będzie również zadawać coraz więcej obrażeń jeśli będziesz w niej stał. Miej na oku całą mapę i bądź bezpieczny.",
            "game-alive": "Żywych",
            "game-reloading": "Przeładowywanie",
            "game-using": "Używanie",
            "game-reviving": "Wskrzeszanie",
            "game-revive-teammate": "Wskrześ Członka zespołu",
            "game-equip": "Weź",
            "game-cancel": "Przerwij",
            "game-open-door": "Otwórz Drzwi",
            "game-close-door": "Zamknij Drzwi",
            "game-You": "Ty",
            "game-you": "ty",
            "game-themselves": "ich samych",
            "game-yourself": "siebie",
            "game-you-died": "umarłeś",
            "game-player-died": "umarł",
            "game-with": "z",
            "game-knocked-out": "powalił",
            "game-killed": "zabił",
            "game-finally-killed": "w końcu zabił",
            "game-finally-bled-out": "w końcu się wykrwawił",
            "game-died-outside": "umarł poza bezpieczną strefą",
            "game-the-red-zone": "Czerwona strefa",
            "game-crushed": "zgnieciony",
            "game-the-air-drop": "Zrzut zaopatrzenia",
            "game-waiting-for-players": "Oczekiwanie na graczy",
            "game-spectating": "Obserwujesz",
            "game-red-zone-advances": "Czerwona strefa zmniejszy się za",
            "game-red-zone-advancing": "Czerwona strefa zmniejsza się, uciekaj do bezpiecznej strefy!",
            "game-seconds": "sekundy",
            "game-minutes": "minuty",
            "game-minute": "minuta",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Niewystarczająco miejsca!",
            "game-item-already-owned": "Już masz ten przedmiot!",
            "game-item-already-equipped": "Już używasz tego przedmiotu!",
            "game-better-item-equipped": "Posiadasz lepszy przedmiot!",
            "game-gun-cannot-fire": "Ta broń nie może tutaj strzelać!",
            "game-play-new-game": "Zagraj jeszcze raz",
            "game-spectate": "Obserwuj",
            "game-full-screen": "Pełny Ekran",
            "game-sound": "Dzwięk",
            "game-quit-game": "Wyjdź z gry",
            "game-return-to-game": "Powróć do gry",
            "game-hide-match-stats": "Ukryj statystyki meczu",
            "game-view-match-stats": "Wyświetl statystyki meczu",
            "game-previous-teammate": "Poprzedni członek zespołu",
            "game-next-teammate": "Następny członek zespołu",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "Opuść grę",
            "game-your-results": "Twoje rezultaty",
            "game-chicken": "Mecz wygrany! Kurczak podany!",
            "game-won-the-game": "wygrał grę.",
            "game-team-eliminated": "Twoja drużyna została zabita.",
            "game-rank": "Ranga",
            "game-team-rank": "Ranga drużyny",
            "game-team-kills": "Zabicia drużyny",
            "game-kill": "Zabić",
            "game-kills": "Zabić",
            "game-damage-dealt": "Zadane obrażenia",
            "game-damage-taken": "Otrzymane obrażenia",
            "game-survived": "Przetrwano",
            "game-backpack00": "Kieszeń",
            "game-backpack01": "Mała plecak",
            "game-backpack02": "Normalny plecak",
            "game-backpack03": "Wojskowy plecak",
            "game-bandage": "Bandaż",
            "game-bandage-tooltip": "Kliknij lewym przyciskiem myszy aby uleczyć się za 15 punktów zdrowia.",
            "game-healing-tooltip": "Nie można się uleczyć powyżej 75 punktów zdrowia.",
            "game-healthkit": "Apteczka",
            "game-healthkit-tooltip": "Kliknij lewym przyciskiem myszy aby uleczyć się za 100 punktów zdrowia.",
            "game-soda": "Napój gazowany",
            "game-soda-tooltip": "Kliknij lewym przyciskiem myszy aby zwiększyć adrenalinę o 25.",
            "game-adrenaline-tooltip": "Adrenalina przywraca zdrowie w miarę upływu czasu..",
            "game-painkiller": "Pigułki",
            "game-painkiller-tooltip": "Kliknij lewym przyciskiem myszy aby zwiększyć adrenalinę o 50.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Amunicja dla M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 oraz Vector.",
            "game-12gauge": "Kaliber 12",
            "game-12gauge-tooltip": "Amunicja dla M870, M1100, SPAS-12, Saiga-12 oraz MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Amunicja dla AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 oraz DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Amunicja dla FAMAS, M416, M4A1-S, QBB-97, Mk 12 oraz M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Amunicja dla DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Amunicja dla AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Amunicja dla Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Amunicja dla M1911, M1A1, Model 94 oraz Peacemaker.",
            "game-chest01": "Kamizelka Poziom 1",
            "game-chest02": "Kamizelka Poziom 2",
            "game-chest03": "Kamizelka Poziom 3",
            "game-helmet01": "Hełm Poziom 1",
            "game-helmet02": "Hełm Poziom 2",
            "game-helmet03": "Hełm Poziom 3",
            "game-1xscope": "1x Luneta",
            "game-2xscope": "2x Luneta",
            "game-4xscope": "4x Luneta",
            "game-8xscope": "8x Luneta",
            "game-15xscope": "15x Luneta",
            "game-level-1": "P. 1",
            "game-level-2": "P. 2",
            "game-level-3": "P. 3",
            "game-level-4": "P. 4",
            "game-outfitBase": "Podstawowy ubiór",
            "game-outfitRoyalFortune": "Królewska fortuna",
            "game-outfitKeyLime": "Kluczowa limonka",
            "game-outfitCobaltShell": "Kobaltowa skorupa",
            "game-outfitCarbonFiber": "Włókno węglowe",
            "game-outfitDarkGloves": "Profesionalista",
            "game-outfitGhillie": "Stój maskujący",
            "game-outfitCamo": "Leśny kamuflaż",
            "game-outfitRed": "Praktyka na celu",
            "game-outfitWhite": "Arktyczny mściciel",
            "game-outfitWoodland": "Leśna Walka",
            "game-fists": "Pięści",
            "game-karambit_rugged": "Karambit",
            "game-hud-karambit_rugged": "Karambit",
            "game-karambit_prismatic": "Karambit",
            "game-hud-karambit_prismatic": "Karambit",
            "game-karambit_drowned": "Karambit",
            "game-hud-karambit_drowned": "Karambit",
            "game-bayonet_rugged": "Bagnet",
            "game-hud-bayonet_rugged": "Bagnet",
            "game-bayonet_woodland": "Bagnet",
            "game-hud-bayonet_woodland": "Bagnet",
            "game-huntsman_rugged": "Nóż myśliwski",
            "game-hud-huntsman_rugged": "Nóż myśliwski",
            "game-huntsman_burnished": "Nóż myśliwski",
            "game-hud-huntsman_burnished": "Nóż myśliwski",
            "game-woodaxe": "Siekiera",
            "game-woodaxe_bloody": "Siekiera",
            "game-hud-woodaxe_bloody": "Siekiera",
            "game-hook": "Hak",
            "game-pan": "Patelnia",
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
            "game-frag": "Granat odłamkowy",
            "game-hud-frag": "Odłamkowy",
            "game-smoke": "Granat dymny",
            "game-hud-smoke": "Dymny",
            "game-potato": "Ziemniak",
            "game-hud-potato": "Ziemniak",
            "game-potato_heavy": "Ziemniak",
            "game-barrel_01": "beczką",
            "game-silo_01": "silosem",
            "game-oven_01": "piekarnik",
            "index-play-50v50": "Graj 50v50",
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
    "0d807371": function(e, t, a) {
        "use strict";
        var i = {
                players: {
                    m9_01: {
                        path: "audio/guns/m9_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m9_reload_01: {
                        path: "audio/guns/m9_reload_01.mp3",
                        volume: 1
                    },
                    m9_reload_02: {
                        path: "audio/guns/m9_reload_02.mp3",
                        volume: 1
                    },
                    m9_switch_01: {
                        path: "audio/guns/m9_switch_01.mp3",
                        volume: 1
                    },
                    m93r_01: {
                        path: "audio/guns/m93r_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m93r_reload_01: {
                        path: "audio/guns/m93r_reload_01.mp3",
                        volume: 1
                    },
                    m93r_reload_02: {
                        path: "audio/guns/m93r_reload_02.mp3",
                        volume: 1
                    },
                    m93r_switch_01: {
                        path: "audio/guns/m93r_switch_01.mp3",
                        volume: 1
                    },
                    glock_01: {
                        path: "audio/guns/glock_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    glock_reload_01: {
                        path: "audio/guns/glock_reload_01.mp3",
                        volume: 1
                    },
                    glock_reload_02: {
                        path: "audio/guns/glock_reload_02.mp3",
                        volume: 1
                    },
                    glock_switch_01: {
                        path: "audio/guns/glock_switch_01.mp3",
                        volume: 1
                    },
                    m1911_01: {
                        path: "audio/guns/m1911_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m1911_reload_01: {
                        path: "audio/guns/m1911_reload_01.mp3",
                        volume: 1
                    },
                    m1911_reload_02: {
                        path: "audio/guns/m1911_reload_02.mp3",
                        volume: 1
                    },
                    m1911_switch_01: {
                        path: "audio/guns/m1911_switch_01.mp3",
                        volume: 1
                    },
                    ot38_01: {
                        path: "audio/guns/ot38_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    ot38_reload_01: {
                        path: "audio/guns/ot38_reload_01.mp3",
                        volume: 1
                    },
                    ot38_reload_02: {
                        path: "audio/guns/ot38_reload_02.mp3",
                        volume: 1
                    },
                    ot38_switch_01: {
                        path: "audio/guns/ot38_switch_01.mp3",
                        volume: 1
                    },
                    ots38_01: {
                        path: "audio/guns/ots38_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    colt45_01: {
                        path: "audio/guns/colt45_01.mp3",
                        volume: 1
                    },
                    colt45_reload_01: {
                        path: "audio/guns/colt45_reload_01.mp3",
                        volume: 1
                    },
                    colt45_reload_02: {
                        path: "audio/guns/colt45_reload_02.mp3",
                        volume: 1
                    },
                    colt45_switch_01: {
                        path: "audio/guns/colt45_switch_01.mp3",
                        volume: 1
                    },
                    deagle_01: {
                        path: "audio/guns/deagle_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    deagle_reload_01: {
                        path: "audio/guns/deagle_reload_01.mp3",
                        volume: 1
                    },
                    deagle_reload_02: {
                        path: "audio/guns/deagle_reload_02.mp3",
                        volume: 1
                    },
                    deagle_switch_01: {
                        path: "audio/guns/deagle_switch_01.mp3",
                        volume: 1
                    },
                    flare_gun_01: {
                        path: "audio/guns/flare_gun_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    flare_gun_reload_01: {
                        path: "audio/guns/flare_gun_reload_01.mp3",
                        volume: 1
                    },
                    flare_gun_reload_02: {
                        path: "audio/guns/flare_gun_reload_02.mp3",
                        volume: 1
                    },
                    ak47_01: {
                        path: "audio/guns/ak47_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    ak47_reload_01: {
                        path: "audio/guns/ak47_reload_01.mp3",
                        volume: 1
                    },
                    ak47_switch_01: {
                        path: "audio/guns/ak47_switch_01.mp3",
                        volume: 1
                    },
                    an94_01: {
                        path: "audio/guns/an94_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    an94_reload_01: {
                        path: "audio/guns/an94_reload_01.mp3",
                        volume: 1
                    },
                    an94_switch_01: {
                        path: "audio/guns/an94_switch_01.mp3",
                        volume: 1
                    },
                    scar_01: {
                        path: "audio/guns/scar_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    scar_reload_01: {
                        path: "audio/guns/scar_reload_01.mp3",
                        volume: 1
                    },
                    scar_switch_01: {
                        path: "audio/guns/scar_switch_01.mp3",
                        volume: 1
                    },
                    dp28_01: {
                        path: "audio/guns/dp28_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    dp28_reload_01: {
                        path: "audio/guns/dp28_reload_01.mp3",
                        volume: 1
                    },
                    dp28_switch_01: {
                        path: "audio/guns/dp28_switch_01.mp3",
                        volume: 1
                    },
                    bar_01: {
                        path: "audio/guns/bar_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    bar_reload_01: {
                        path: "audio/guns/bar_reload_01.mp3",
                        volume: 1
                    },
                    bar_switch_01: {
                        path: "audio/guns/bar_switch_01.mp3",
                        volume: 1
                    },
                    pkp_01: {
                        path: "audio/guns/pkp_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    pkp_reload_01: {
                        path: "audio/guns/pkp_reload_01.mp3",
                        volume: 1
                    },
                    pkp_switch_01: {
                        path: "audio/guns/pkp_switch_01.mp3",
                        volume: 1
                    },
                    m870_01: {
                        path: "audio/guns/m870_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m870_reload_01: {
                        path: "audio/guns/m870_reload_01.mp3",
                        volume: 1
                    },
                    m870_cycle_01: {
                        path: "audio/guns/m870_cycle_01.mp3",
                        volume: 1
                    },
                    m870_pull_01: {
                        path: "audio/guns/m870_pull_01.mp3",
                        volume: 1
                    },
                    spas12_01: {
                        path: "audio/guns/spas12_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    spas12_reload_01: {
                        path: "audio/guns/spas12_reload_01.mp3",
                        volume: 1
                    },
                    spas12_cycle_01: {
                        path: "audio/guns/spas12_cycle_01.mp3",
                        volume: 1
                    },
                    spas12_pull_01: {
                        path: "audio/guns/spas12_pull_01.mp3",
                        volume: 1
                    },
                    mp220_01: {
                        path: "audio/guns/mp220_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    mp220_reload_01: {
                        path: "audio/guns/mp220_reload_01.mp3",
                        volume: 1
                    },
                    mp220_deploy_01: {
                        path: "audio/guns/mp220_deploy_01.mp3",
                        volume: 1
                    },
                    saiga_01: {
                        path: "audio/guns/saiga_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    saiga_reload_01: {
                        path: "audio/guns/saiga_reload_01.mp3",
                        volume: 1
                    },
                    saiga_switch_01: {
                        path: "audio/guns/saiga_switch_01.mp3",
                        volume: 1
                    },
                    usas_01: {
                        path: "audio/guns/usas_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    usas_reload_01: {
                        path: "audio/guns/usas_reload_01.mp3",
                        volume: 1
                    },
                    usas_switch_01: {
                        path: "audio/guns/usas_switch_01.mp3",
                        volume: 1
                    },
                    m1100_01: {
                        path: "audio/guns/m1100_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m1100_reload_01: {
                        path: "audio/guns/m1100_reload_01.mp3",
                        volume: 1
                    },
                    m1100_deploy_01: {
                        path: "audio/guns/m1100_deploy_01.mp3",
                        volume: 1
                    },
                    m1014_01: {
                        path: "audio/guns/m1014_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m1014_reload_01: {
                        path: "audio/guns/m1014_reload_01.mp3",
                        volume: 1
                    },
                    m1014_deploy_01: {
                        path: "audio/guns/m1014_deploy_01.mp3",
                        volume: 1
                    },
                    m39_01: {
                        path: "audio/guns/m39_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m39_reload_01: {
                        path: "audio/guns/m39_reload_01.mp3",
                        volume: 1
                    },
                    m39_switch_01: {
                        path: "audio/guns/m39_switch_01.mp3",
                        volume: 1
                    },
                    garand_01: {
                        path: "audio/guns/garand_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    garand_02: {
                        path: "audio/guns/garand_02.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    garand_reload_01: {
                        path: "audio/guns/garand_reload_01.mp3",
                        volume: 1
                    },
                    garand_switch_01: {
                        path: "audio/guns/garand_switch_01.mp3",
                        volume: 1
                    },
                    m1a1_01: {
                        path: "audio/guns/m1a1_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m1a1_reload_01: {
                        path: "audio/guns/m1a1_reload_01.mp3",
                        volume: 1
                    },
                    m1a1_switch_01: {
                        path: "audio/guns/m1a1_switch_01.mp3",
                        volume: 1
                    },
                    mp5_01: {
                        path: "audio/guns/mp5_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    mp5_reload_01: {
                        path: "audio/guns/mp5_reload_01.mp3",
                        volume: 1
                    },
                    mp5_switch_01: {
                        path: "audio/guns/mp5_switch_01.mp3",
                        volume: 1
                    },
                    mac10_01: {
                        path: "audio/guns/mac10_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    mac10_reload_01: {
                        path: "audio/guns/mac10_reload_01.mp3",
                        volume: 1
                    },
                    mac10_switch_01: {
                        path: "audio/guns/mac10_switch_01.mp3",
                        volume: 1
                    },
                    ump9_01: {
                        path: "audio/guns/ump9_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    ump9_reload_01: {
                        path: "audio/guns/ump9_reload_01.mp3",
                        volume: 1
                    },
                    ump9_switch_01: {
                        path: "audio/guns/ump9_switch_01.mp3",
                        volume: 1
                    },
                    vector_01: {
                        path: "audio/guns/vector_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    vector_02: {
                        path: "audio/guns/vector_02.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    vector_reload_01: {
                        path: "audio/guns/vector_reload_01.mp3",
                        volume: 1
                    },
                    vector_switch_01: {
                        path: "audio/guns/vector_switch_01.mp3",
                        volume: 1
                    },
                    scorpion_01: {
                        path: "audio/guns/scorpion_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    scorpion_reload_01: {
                        path: "audio/guns/scorpion_reload_01.mp3",
                        volume: 1
                    },
                    scorpion_switch_01: {
                        path: "audio/guns/scorpion_switch_01.mp3",
                        volume: 1
                    },
                    famas_01: {
                        path: "audio/guns/famas_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    famas_reload_01: {
                        path: "audio/guns/famas_reload_01.mp3",
                        volume: 1
                    },
                    famas_switch_01: {
                        path: "audio/guns/famas_switch_01.mp3",
                        volume: 1
                    },
                    hk416_01: {
                        path: "audio/guns/hk416_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    hk416_reload_01: {
                        path: "audio/guns/hk416_reload_01.mp3",
                        volume: 1
                    },
                    hk416_switch_01: {
                        path: "audio/guns/hk416_switch_01.mp3",
                        volume: 1
                    },
                    m4a1_01: {
                        path: "audio/guns/m4a1_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m4a1_reload_01: {
                        path: "audio/guns/m4a1_reload_01.mp3",
                        volume: 1
                    },
                    m4a1_switch_01: {
                        path: "audio/guns/m4a1_switch_01.mp3",
                        volume: 1
                    },
                    mk12_01: {
                        path: "audio/guns/mk12_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    mk12_reload_01: {
                        path: "audio/guns/mk12_reload_01.mp3",
                        volume: 1
                    },
                    mk12_switch_01: {
                        path: "audio/guns/mk12_switch_01.mp3",
                        volume: 1
                    },
                    m249_01: {
                        path: "audio/guns/m249_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    m249_reload_01: {
                        path: "audio/guns/m249_reload_01.mp3",
                        volume: 1.5
                    },
                    m249_switch_01: {
                        path: "audio/guns/m249_switch_01.mp3",
                        volume: 1.5
                    },
                    qbb97_01: {
                        path: "audio/guns/qbb97_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    qbb97_reload_01: {
                        path: "audio/guns/qbb97_reload_01.mp3",
                        volume: 1
                    },
                    qbb97_switch_01: {
                        path: "audio/guns/qbb97_switch_01.mp3",
                        volume: 1
                    },
                    model94_01: {
                        path: "audio/guns/model94_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    model94_reload_01: {
                        path: "audio/guns/model94_reload_01.mp3",
                        volume: 1
                    },
                    model94_cycle_01: {
                        path: "audio/guns/model94_cycle_01.mp3",
                        volume: 1
                    },
                    mosin_01: {
                        path: "audio/guns/mosin_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    mosin_reload_01: {
                        path: "audio/guns/mosin_reload_01.mp3",
                        volume: 1
                    },
                    mosin_reload_02: {
                        path: "audio/guns/mosin_reload_02.mp3",
                        volume: 1
                    },
                    mosin_cycle_01: {
                        path: "audio/guns/mosin_cycle_01.mp3",
                        volume: 1
                    },
                    mosin_pull_01: {
                        path: "audio/guns/mosin_pull_01.mp3",
                        volume: 1
                    },
                    sv98_01: {
                        path: "audio/guns/sv98_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    sv98_reload_01: {
                        path: "audio/guns/sv98_reload_01.mp3",
                        volume: 1
                    },
                    sv98_cycle_01: {
                        path: "audio/guns/sv98_cycle_01.mp3",
                        volume: 1
                    },
                    sv98_pull_01: {
                        path: "audio/guns/sv98_pull_01.mp3",
                        volume: 1
                    },
                    awc_01: {
                        path: "audio/guns/awc_01.mp3",
                        volume: 1,
                        maxInstances: 5
                    },
                    awc_reload_01: {
                        path: "audio/guns/awc_reload_01.mp3",
                        volume: 1
                    },
                    awc_cycle_01: {
                        path: "audio/guns/awc_cycle_01.mp3",
                        volume: 1
                    },
                    awc_pull_01: {
                        path: "audio/guns/awc_pull_01.mp3",
                        volume: 1
                    },
                    empty_fire_01: {
                        path: "audio/guns/empty_fire_01.mp3",
                        volume: .9
                    },
                    empty_fire_02: {
                        path: "audio/guns/empty_fire_02.mp3",
                        volume: .9
                    },
                    gun_switch_01: {
                        path: "audio/guns/gun_switch_01.mp3",
                        volume: 1
                    },
                    bandage_use_01: {
                        path: "audio/ui/bandage_use_01.mp3",
                        volume: 1
                    },
                    healthkit_use_01: {
                        path: "audio/ui/healthkit_use_01.mp3",
                        volume: 1
                    },
                    soda_use_01: {
                        path: "audio/ui/soda_use_01.mp3",
                        volume: 1
                    },
                    pills_use_01: {
                        path: "audio/ui/pills_use_01.mp3",
                        volume: 1
                    }
                },
                hits: {
                    stone_bullet_hit_01: {
                        path: "audio/hits/stone_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    wood_bullet_hit_01: {
                        path: "audio/hits/wood_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    wood_bullet_hit_02: {
                        path: "audio/hits/wood_bullet_hit_02.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    wood_bullet_hit_03: {
                        path: "audio/hits/wood_bullet_hit_03.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    wood_bullet_hit_04: {
                        path: "audio/hits/wood_bullet_hit_04.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    bush_bullet_hit_01: {
                        path: "audio/hits/bush_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    metal_bullet_hit_01: {
                        path: "audio/hits/metal_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    metal_bullet_hit_03: {
                        path: "audio/hits/metal_bullet_hit_03.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    metal_bullet_hit_04: {
                        path: "audio/hits/metal_bullet_hit_04.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 6
                    },
                    pan_bullet_hit_01: {
                        path: "audio/hits/pan_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 6
                    },
                    brick_bullet_hit_01: {
                        path: "audio/hits/brick_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    punch_hit_01: {
                        path: "audio/hits/punch_hit_01.mp3",
                        volume: 1
                    },
                    knife_hit_01: {
                        path: "audio/hits/knife_hit_01.mp3",
                        volume: 1
                    },
                    pan_hit_01: {
                        path: "audio/hits/pan_hit_01.mp3",
                        volume: 1
                    },
                    axe_hit_01: {
                        path: "audio/hits/axe_hit_01.mp3",
                        volume: 1
                    },
                    hook_hit_01: {
                        path: "audio/hits/hook_hit_01.mp3",
                        volume: 1
                    },
                    saw_hit_01: {
                        path: "audio/hits/saw_hit_01.mp3",
                        volume: 2.5
                    },
                    metal_punch_hit_01: {
                        path: "audio/hits/metal_punch_hit_01.mp3",
                        volume: 1
                    },
                    metal_punch_hit_02: {
                        path: "audio/hits/metal_punch_hit_02.mp3",
                        volume: 1
                    },
                    player_bullet_hit_01: {
                        path: "audio/hits/player_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    player_bullet_hit_02: {
                        path: "audio/hits/player_bullet_hit_02.mp3",
                        volume: 1,
                        canCoalesce: !0
                    },
                    plastic_bullet_hit_01: {
                        path: "audio/hits/plastic_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    toilet_bullet_hit_01: {
                        path: "audio/hits/toilet_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    toilet_bullet_hit_02: {
                        path: "audio/hits/toilet_bullet_hit_02.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    glass_bullet_hit_01: {
                        path: "audio/hits/glass_bullet_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    concrete_hit_01: {
                        path: "audio/hits/concrete_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    frag_grass_01: {
                        path: "audio/hits/frag_grass_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    frag_sand_01: {
                        path: "audio/hits/frag_sand_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    frag_water_01: {
                        path: "audio/hits/frag_water_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    cloth_hit_01: {
                        path: "audio/hits/cloth_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    cloth_hit_02: {
                        path: "audio/hits/cloth_hit_02.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    organic_hit_01: {
                        path: "audio/hits/organic_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    piano_hit_01: {
                        path: "audio/hits/piano_hit_01.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    },
                    piano_hit_02: {
                        path: "audio/hits/piano_hit_02.mp3",
                        volume: 1,
                        canCoalesce: !0,
                        maxInstances: 3
                    }
                },
                sfx: {
                    crate_break_01: {
                        path: "audio/sfx/crate_break_01.mp3",
                        volume: 1
                    },
                    crate_break_02: {
                        path: "audio/sfx/crate_break_02.mp3",
                        volume: 1
                    },
                    tree_break_01: {
                        path: "audio/sfx/tree_break_01.mp3",
                        volume: 1
                    },
                    bush_break_01: {
                        path: "audio/sfx/bush_break_01.mp3",
                        volume: 1
                    },
                    bush_enter_01: {
                        path: "audio/sfx/bush_enter_01.mp3",
                        volume: 1,
                        canCoalesce: !0
                    },
                    bush_enter_02: {
                        path: "audio/sfx/bush_enter_02.mp3",
                        volume: 1,
                        canCoalesce: !0
                    },
                    barrel_break_01: {
                        path: "audio/sfx/barrel_break_01.mp3",
                        volume: 1
                    },
                    barrel_break_02: {
                        path: "audio/sfx/barrel_break_02.mp3",
                        volume: 1
                    },
                    stone_break_01: {
                        path: "audio/sfx/stone_break_01.mp3",
                        volume: 1
                    },
                    wall_break_01: {
                        path: "audio/sfx/wall_break_01.mp3",
                        volume: 1
                    },
                    ceiling_break_01: {
                        path: "audio/sfx/ceiling_break_01.mp3",
                        volume: 1
                    },
                    ceiling_break_02: {
                        path: "audio/sfx/ceiling_break_02.mp3",
                        volume: 1
                    },
                    toilet_break_01: {
                        path: "audio/sfx/toilet_break_01.mp3",
                        volume: 1
                    },
                    toilet_break_02: {
                        path: "audio/sfx/toilet_break_02.mp3",
                        volume: 1
                    },
                    vending_break_01: {
                        path: "audio/sfx/vending_break_01.mp3",
                        volume: 1
                    },
                    window_break_01: {
                        path: "audio/sfx/window_break_01.mp3",
                        volume: 1
                    },
                    window_break_02: {
                        path: "audio/sfx/window_break_02.mp3",
                        volume: 1
                    },
                    drawers_break_01: {
                        path: "audio/sfx/drawers_break_01.mp3",
                        volume: 1
                    },
                    oven_break_01: {
                        path: "audio/sfx/oven_break_01.mp3",
                        volume: 1
                    },
                    deposit_box_break_01: {
                        path: "audio/sfx/deposit_box_break_01.mp3",
                        volume: 1
                    },
                    cloth_break_01: {
                        path: "audio/sfx/cloth_break_01.mp3",
                        volume: 1
                    },
                    screen_break_01: {
                        path: "audio/sfx/screen_break_01.mp3",
                        volume: 1
                    },
                    pumpkin_break_01: {
                        path: "audio/sfx/pumpkin_break_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    ceramic_break_01: {
                        path: "audio/sfx/ceramic_break_01.mp3",
                        volume: 1
                    },
                    footstep_grass_01: {
                        path: "audio/sfx/footstep_grass_01.mp3",
                        volume: 1
                    },
                    footstep_grass_02: {
                        path: "audio/sfx/footstep_grass_02.mp3",
                        volume: 1
                    },
                    footstep_metal_01: {
                        path: "audio/sfx/footstep_metal_01.mp3",
                        volume: 1
                    },
                    footstep_metal_02: {
                        path: "audio/sfx/footstep_metal_02.mp3",
                        volume: 1
                    },
                    footstep_metal_03: {
                        path: "audio/sfx/footstep_metal_03.mp3",
                        volume: 1
                    },
                    footstep_metal_04: {
                        path: "audio/sfx/footstep_metal_04.mp3",
                        volume: 1
                    },
                    footstep_metal_05: {
                        path: "audio/sfx/footstep_metal_05.mp3",
                        volume: 1
                    },
                    footstep_wood_01: {
                        path: "audio/sfx/footstep_wood_01.mp3",
                        volume: 1
                    },
                    footstep_wood_02: {
                        path: "audio/sfx/footstep_wood_02.mp3",
                        volume: 1
                    },
                    footstep_wood_03: {
                        path: "audio/sfx/footstep_wood_03.mp3",
                        volume: 1
                    },
                    footstep_sand_01: {
                        path: "audio/sfx/footstep_sand_01.mp3",
                        volume: 1
                    },
                    footstep_sand_02: {
                        path: "audio/sfx/footstep_sand_02.mp3",
                        volume: 1
                    },
                    footstep_water_01: {
                        path: "audio/sfx/footstep_water_01.mp3",
                        volume: 1
                    },
                    footstep_water_02: {
                        path: "audio/sfx/footstep_water_02.mp3",
                        volume: 1
                    },
                    footstep_tile_01: {
                        path: "audio/sfx/footstep_tile_01.mp3",
                        volume: 1
                    },
                    footstep_tile_02: {
                        path: "audio/sfx/footstep_tile_02.mp3",
                        volume: 1
                    },
                    footstep_asphalt_01: {
                        path: "audio/sfx/footstep_asphalt_01.mp3",
                        volume: 1
                    },
                    footstep_asphalt_02: {
                        path: "audio/sfx/footstep_asphalt_02.mp3",
                        volume: 1
                    },
                    footstep_brick_01: {
                        path: "audio/sfx/footstep_brick_01.mp3",
                        volume: 1
                    },
                    footstep_stone_01: {
                        path: "audio/sfx/footstep_stone_01.mp3",
                        volume: .8
                    },
                    punch_swing_01: {
                        path: "audio/sfx/punch_swing_01.mp3",
                        volume: 1
                    },
                    knife_swing_01: {
                        path: "audio/sfx/knife_swing_01.mp3",
                        volume: 1
                    },
                    medium_swing_01: {
                        path: "audio/sfx/medium_swing_01.mp3",
                        volume: 1
                    },
                    heavy_swing_01: {
                        path: "audio/sfx/heavy_swing_01.mp3",
                        volume: 1
                    },
                    bullet_whiz_01: {
                        path: "audio/sfx/bullet_whiz_01.mp3",
                        volume: 1
                    },
                    bullet_whiz_02: {
                        path: "audio/sfx/bullet_whiz_02.mp3",
                        volume: 1
                    },
                    bullet_whiz_03: {
                        path: "audio/sfx/bullet_whiz_03.mp3",
                        volume: 1
                    },
                    frag_throw_01: {
                        path: "audio/sfx/frag_throw_01.mp3",
                        volume: 1
                    },
                    frag_pin_01: {
                        path: "audio/sfx/frag_pin_01.mp3",
                        volume: 1
                    },
                    frag_deploy_01: {
                        path: "audio/ui/frag_pickup_01.mp3",
                        volume: 1
                    },
                    frag_water_01: {
                        path: "audio/hits/frag_water_01.mp3",
                        volume: 1
                    },
                    strobe_click_01: {
                        path: "audio/sfx/strobe_click_01.mp3",
                        volume: 1
                    },
                    explosion_01: {
                        path: "audio/sfx/explosion_01.mp3",
                        volume: 1
                    },
                    explosion_02: {
                        path: "audio/sfx/explosion_02.mp3",
                        volume: 1
                    },
                    explosion_03: {
                        path: "audio/sfx/explosion_03.mp3",
                        volume: 1
                    },
                    explosion_04: {
                        path: "audio/sfx/explosion_04.mp3",
                        volume: 1
                    },
                    explosion_smoke_01: {
                        path: "audio/sfx/explosion_smoke_01.mp3",
                        volume: 1
                    },
                    snowball_01: {
                        path: "audio/sfx/snowball_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    snowball_02: {
                        path: "audio/sfx/snowball_02.mp3",
                        volume: 1,
                        preload: !1
                    },
                    potato_01: {
                        path: "audio/sfx/potato_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    potato_02: {
                        path: "audio/sfx/potato_02.mp3",
                        volume: 1,
                        preload: !1
                    },
                    stow_weapon_01: {
                        path: "audio/ui/stow_weapon_01.mp3",
                        volume: 1
                    },
                    knife_deploy_01: {
                        path: "audio/ui/knife_deploy_01.mp3",
                        volume: 1
                    },
                    pan_pickup_01: {
                        path: "audio/ui/pan_pickup_01.mp3",
                        volume: 1
                    },
                    door_open_01: {
                        path: "audio/sfx/door_open_01.mp3",
                        volume: 1
                    },
                    door_close_01: {
                        path: "audio/sfx/door_close_01.mp3",
                        volume: 1
                    },
                    door_open_02: {
                        path: "audio/sfx/door_open_02.mp3",
                        volume: 1
                    },
                    door_close_02: {
                        path: "audio/sfx/door_close_02.mp3",
                        volume: 1
                    },
                    door_open_03: {
                        path: "audio/sfx/door_open_03.mp3",
                        volume: 1
                    },
                    door_close_03: {
                        path: "audio/sfx/door_close_03.mp3",
                        volume: 1
                    },
                    door_open_04: {
                        path: "audio/sfx/door_open_04.mp3",
                        volume: .8
                    },
                    door_error_01: {
                        path: "audio/sfx/door_error_01.mp3",
                        volume: 1
                    },
                    vault_change_01: {
                        path: "audio/sfx/vault_change_01.mp3",
                        volume: 1
                    },
                    vault_change_02: {
                        path: "audio/sfx/vault_change_02.mp3",
                        volume: 1,
                        preload: !1
                    },
                    vault_change_03: {
                        path: "audio/sfx/vault_change_03.mp3",
                        volume: 1,
                        preload: !1
                    },
                    cell_control_01: {
                        path: "audio/sfx/cell_control_01.mp3",
                        volume: 1
                    },
                    cell_control_02: {
                        path: "audio/sfx/cell_control_02.mp3",
                        volume: 1
                    },
                    plane_01: {
                        path: "audio/sfx/plane_01.mp3",
                        volume: 1
                    },
                    plane_02: {
                        path: "audio/sfx/plane_02.mp3",
                        volume: 1,
                        preload: !1
                    },
                    fighter_01: {
                        path: "audio/sfx/fighter_01.mp3",
                        volume: 1
                    },
                    airdrop_chute_01: {
                        path: "audio/sfx/airdrop_chute_01.mp3",
                        volume: 1
                    },
                    airdrop_fall_01: {
                        path: "audio/sfx/airdrop_fall_01.mp3",
                        volume: 1
                    },
                    airdrop_crash_01: {
                        path: "audio/sfx/airdrop_crash_01.mp3",
                        volume: 1
                    },
                    airdrop_crash_02: {
                        path: "audio/sfx/airdrop_crash_02.mp3",
                        volume: 1
                    },
                    airdrop_open_01: {
                        path: "audio/sfx/airdrop_open_01.mp3",
                        volume: 1
                    },
                    airdrop_open_02: {
                        path: "audio/sfx/airdrop_open_02.mp3",
                        volume: 1
                    },
                    button_press_01: {
                        path: "audio/sfx/button_press_01.mp3",
                        volume: 1,
                        maxInstances: 3
                    },
                    watering_01: {
                        path: "audio/sfx/watering_01.mp3",
                        volume: 1,
                        maxInstances: 3,
                        preload: !1
                    },
                    piano_02: {
                        path: "audio/sfx/piano_02.mp3",
                        volume: 1,
                        preload: !1
                    },
                    footstep_08: {
                        path: "audio/sfx/footstep_08.mp3",
                        volume: 1,
                        preload: !1
                    },
                    footstep_09: {
                        path: "audio/sfx/footstep_09.mp3",
                        volume: 1,
                        preload: !1
                    },
                    howl_01: {
                        path: "audio/sfx/howl_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    wheel_control_01: {
                        path: "audio/sfx/wheel_control_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    log_01: {
                        path: "audio/sfx/log_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    log_02: {
                        path: "audio/sfx/log_02.mp3",
                        volume: 1,
                        preload: !1
                    },
                    log_03: {
                        path: "audio/sfx/log_03.mp3",
                        volume: 1,
                        preload: !1
                    },
                    log_04: {
                        path: "audio/sfx/log_04.mp3",
                        volume: 1,
                        preload: !1
                    },
                    log_05: {
                        path: "audio/sfx/log_05.mp3",
                        volume: 1,
                        preload: !1
                    },
                    log_06: {
                        path: "audio/sfx/log_06.mp3",
                        volume: 1,
                        preload: !1
                    },
                    ability_stim_01: {
                        path: "audio/sfx/ability_stim_01.mp3",
                        volume: 4,
                        preload: !1
                    }
                },
                ambient: {
                    ambient_wind_01: {
                        path: "audio/ambient/ambient_wind_01.mp3",
                        volume: 1,
                        loadPriority: 1
                    },
                    ambient_waves_01: {
                        path: "audio/ambient/ambient_waves_01.mp3",
                        volume: 1,
                        loadPriority: 1
                    },
                    ambient_stream_01: {
                        path: "audio/ambient/ambient_stream_01.mp3",
                        volume: 1,
                        loadPriority: 1
                    },
                    piano_music_01: {
                        path: "audio/ambient/piano_music_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    ambient_wind_02: {
                        path: "audio/ambient/ambient_wind_02.mp3",
                        volume: 1,
                        preload: !1
                    }
                },
                ui: {
                    ammo_pickup_01: {
                        path: "audio/ui/ammo_pickup_01.mp3",
                        volume: 1
                    },
                    clothes_pickup_01: {
                        path: "audio/ui/clothes_pickup_01.mp3",
                        volume: 1
                    },
                    bells_01: {
                        path: "audio/sfx/plane_02.mp3",
                        volume: 1,
                        preload: !1
                    },
                    helmet_pickup_01: {
                        path: "audio/ui/helmet_pickup_01.mp3",
                        volume: 1
                    },
                    chest_pickup_01: {
                        path: "audio/ui/chest_pickup_01.mp3",
                        volume: 1
                    },
                    gun_pickup_01: {
                        path: "audio/ui/gun_pickup_01.mp3",
                        volume: 1
                    },
                    scope_pickup_01: {
                        path: "audio/ui/scope_pickup_01.mp3",
                        volume: 1
                    },
                    pack_pickup_01: {
                        path: "audio/ui/pack_pickup_01.mp3",
                        volume: 1
                    },
                    soda_pickup_01: {
                        path: "audio/ui/soda_pickup_01.mp3",
                        volume: 1
                    },
                    pills_pickup_01: {
                        path: "audio/ui/pills_pickup_01.mp3",
                        volume: 1
                    },
                    bandage_pickup_01: {
                        path: "audio/ui/bandage_pickup_01.mp3",
                        volume: 1
                    },
                    healthkit_pickup_01: {
                        path: "audio/ui/healthkit_pickup_01.mp3",
                        volume: 1
                    },
                    frag_pickup_01: {
                        path: "audio/ui/frag_pickup_01.mp3",
                        volume: 1
                    },
                    snowball_pickup_01: {
                        path: "audio/ui/snowball_pickup_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    potato_pickup_01: {
                        path: "audio/ui/potato_pickup_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    heavy_pickup_01: {
                        path: "audio/ui/heavy_pickup_01.mp3",
                        volume: 1
                    },
                    pan_pickup_01: {
                        path: "audio/ui/pan_pickup_01.mp3",
                        volume: 1
                    },
                    ping_danger_01: {
                        path: "audio/ui/ping_danger_01.mp3",
                        volume: 1
                    },
                    ping_coming_01: {
                        path: "audio/ui/ping_coming_01.mp3",
                        volume: 1
                    },
                    ping_help_01: {
                        path: "audio/ui/ping_help_01.mp3",
                        volume: 1
                    },
                    ping_leader_01: {
                        path: "audio/ui/ping_leader_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    ping_airdrop_01: {
                        path: "audio/ui/ping_airdrop_01.mp3",
                        volume: 1
                    },
                    ping_airstrike_01: {
                        path: "audio/ui/ping_airstrike_01.mp3",
                        volume: 1
                    },
                    emote_01: {
                        path: "audio/ui/emote_01.mp3",
                        volume: 1
                    },
                    loot_drop_01: {
                        path: "audio/ui/loot_drop_01.mp3",
                        volume: 1
                    },
                    notification_start_01: {
                        path: "audio/ui/notification_start_01.mp3",
                        volume: 1
                    },
                    notification_join_01: {
                        path: "audio/ui/notification_join_01.mp3",
                        volume: 1
                    },
                    leader_assigned_01: {
                        path: "audio/ui/leader_assigned_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    leader_dead_01: {
                        path: "audio/ui/leader_dead_01.mp3",
                        volume: 1.75,
                        preload: !1
                    },
                    lt_assigned_01: {
                        path: "audio/ui/lt_assigned_01.mp3",
                        volume: 1,
                        preload: !1
                    },
                    medic_assigned_01: {
                        path: "audio/ui/medic_assigned_01.mp3",
                        volume: 2,
                        preload: !1
                    },
                    helmet03_forest_pickup_01: {
                        path: "audio/ui/helmet03_forest_pickup_01.mp3",
                        volume: 1,
                        maxInstances: 1,
                        preload: !1
                    }
                },
                music: {
                    menu_music: {
                        path: "audio/ambient/menu_music_01.mp3",
                        volume: 1,
                        loadPriority: 2
                    }
                }
            },
            r = {
                footstep_grass: {
                    channel: "sfx",
                    sounds: ["footstep_grass_01", "footstep_grass_02"]
                },
                footstep_container: {
                    channel: "sfx",
                    sounds: ["footstep_metal_03"]
                },
                footstep_warehouse: {
                    channel: "sfx",
                    sounds: ["footstep_metal_01", "footstep_metal_02"]
                },
                footstep_house: {
                    channel: "sfx",
                    sounds: ["footstep_wood_02", "footstep_wood_03"]
                },
                footstep_shack: {
                    channel: "sfx",
                    sounds: ["footstep_wood_01"]
                },
                footstep_sand: {
                    channel: "sfx",
                    sounds: ["footstep_sand_01", "footstep_sand_02"]
                },
                footstep_water: {
                    channel: "sfx",
                    sounds: ["footstep_water_01", "footstep_water_02"]
                },
                footstep_tile: {
                    channel: "sfx",
                    sounds: ["footstep_tile_01", "footstep_tile_02"]
                },
                footstep_asphalt: {
                    channel: "sfx",
                    sounds: ["footstep_asphalt_01", "footstep_asphalt_02"]
                },
                footstep_brick: {
                    channel: "sfx",
                    sounds: ["footstep_brick_01"]
                },
                footstep_bunker: {
                    channel: "sfx",
                    sounds: ["footstep_metal_04", "footstep_metal_05"]
                },
                footstep_stone: {
                    channel: "sfx",
                    sounds: ["footstep_stone_01"]
                },
                player_bullet_hit: {
                    channel: "hits",
                    sounds: ["player_bullet_hit_01"]
                },
                metal_punch: {
                    channel: "hits",
                    sounds: ["metal_punch_hit_01", "metal_punch_hit_02"]
                },
                cloth_punch: {
                    channel: "hits",
                    sounds: ["cloth_hit_01"]
                },
                cloth_bullet: {
                    channel: "hits",
                    sounds: ["cloth_hit_02"]
                },
                organic_hit: {
                    channel: "hits",
                    sounds: ["organic_hit_01"]
                },
                piano_hit: {
                    channel: "hits",
                    sounds: ["piano_hit_01", "piano_hit_02"]
                },
                wall_bullet: {
                    channel: "hits",
                    sounds: ["metal_bullet_hit_01"]
                },
                wall_wood_bullet: {
                    channel: "hits",
                    sounds: ["wood_bullet_hit_02"]
                },
                wall_brick_bullet: {
                    channel: "hits",
                    sounds: ["brick_bullet_hit_01"]
                },
                stone_bullet: {
                    channel: "hits",
                    sounds: ["stone_bullet_hit_01"]
                },
                barrel_bullet: {
                    channel: "hits",
                    sounds: ["metal_bullet_hit_03"]
                },
                pan_bullet: {
                    channel: "hits",
                    sounds: ["pan_bullet_hit_01"]
                },
                silo_bullet: {
                    channel: "hits",
                    sounds: ["metal_bullet_hit_04"]
                },
                toilet_porc_bullet: {
                    channel: "hits",
                    sounds: ["toilet_bullet_hit_01"]
                },
                toilet_metal_bullet: {
                    channel: "hits",
                    sounds: ["toilet_bullet_hit_02"]
                },
                glass_bullet: {
                    channel: "hits",
                    sounds: ["glass_bullet_hit_01"]
                },
                concrete_hit: {
                    channel: "hits",
                    sounds: ["concrete_hit_01"]
                },
                wood_prop_bullet: {
                    channel: "hits",
                    sounds: ["wood_bullet_hit_03"]
                },
                wood_crate_bullet: {
                    channel: "hits",
                    sounds: ["wood_bullet_hit_04"]
                },
                ammo_crate_bullet: {
                    channel: "hits",
                    sounds: ["plastic_bullet_hit_01"]
                },
                bush_bullet: {
                    channel: "hits",
                    sounds: ["bush_bullet_hit_01"]
                },
                tree_bullet: {
                    channel: "hits",
                    sounds: ["wood_bullet_hit_01"]
                },
                player_bullet_grunt: {
                    channel: "hits",
                    sounds: ["player_bullet_hit_02"]
                },
                bullet_whiz: {
                    channel: "sfx",
                    sounds: ["bullet_whiz_01", "bullet_whiz_02", "bullet_whiz_03"]
                },
                frag_grass: {
                    channel: "hits",
                    sounds: ["frag_grass_01"]
                },
                frag_sand: {
                    channel: "hits",
                    sounds: ["frag_sand_01"]
                },
                frag_water: {
                    channel: "hits",
                    sounds: ["frag_water_01"]
                }
            },
            o = {
                activePlayer: {
                    volume: .5,
                    maxRange: 48,
                    list: "players",
                    type: "sound"
                },
                otherPlayers: {
                    volume: .5,
                    maxRange: 48,
                    list: "players",
                    type: "sound"
                },
                hits: {
                    volume: .4,
                    maxRange: 48,
                    list: "hits",
                    type: "sound"
                },
                sfx: {
                    volume: 1,
                    maxRange: 48,
                    list: "sfx",
                    type: "sound"
                },
                ambient: {
                    volume: 1,
                    maxRange: 1,
                    list: "ambient",
                    type: "sound"
                },
                ui: {
                    volume: .75,
                    maxRange: 48,
                    list: "ui",
                    type: "sound"
                },
                music: {
                    volume: 1,
                    maxRange: 1,
                    list: "music",
                    type: "music"
                }
            },
            n = {
                cathedral: {
                    path: "audio/reverb/cathedral_01.mp3",
                    volume: .7,
                    stereoSpread: .004
                },
                cave: {
                    path: "audio/reverb/cave_mono_01.mp3",
                    volume: .7,
                    echoVolume: .5,
                    echoDelay: .25,
                    echoLowPass: 800,
                    stereoSpread: .004
                }
            };
        e.exports = {
            Sounds: i,
            Groups: r,
            Channels: o,
            Reverbs: n
        }
    },
    "10899aea": function(e, t, a) {
        "use strict";
        var i = a("0e566746"),
            r = a("66141f52"),
            o = a("c2a798c8"),
            n = {
                clamp: function(e, t, a) {
                    return e < a ? e > t ? e : t : a
                },
                min: function(e, t) {
                    return e < t ? e : t
                },
                max: function(e, t) {
                    return e > t ? e : t
                },
                lerp: function(e, t, a) {
                    return t * (1 - e) + a * e
                },
                delerp: function(e, t, a) {
                    return n.clamp((e - t) / (a - t), 0, 1)
                },
                v2lerp: function(e, t, a) {
                    return o.create(n.lerp(e, t.x, a.x), n.lerp(e, t.y, a.y))
                },
                smoothstep: function(e, t, a) {
                    var i = n.clamp((e - t) / (a - t), 0, 1);
                    return i * i * (3 - 2 * i)
                },
                easeOutElastic: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3;
                    return Math.pow(2, -10 * e) * Math.sin((e - t / 4) * (2 * Math.PI) / t) + 1
                },
                easeOutExpo: function(e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                },
                easeInExpo: function(e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                },
                remap: function(e, t, a, i, r) {
                    var o = n.clamp((e - t) / (a - t), 0, 1);
                    return n.lerp(o, i, r)
                },
                eqAbs: function(e, t, a) {
                    var i = a || 1e-6;
                    return Math.abs(e - t) < i
                },
                eqRel: function(e, t, a) {
                    var i = void 0 !== a ? a : 1e-6;
                    return Math.abs(e - t) <= i * Math.max(Math.max(1, Math.abs(e)), Math.abs(t))
                },
                deg2rad: function(e) {
                    return e * Math.PI / 180
                },
                rad2deg: function(e) {
                    return 180 * e / Math.PI
                },
                fract: function(e) {
                    return e - Math.floor(e)
                },
                sign: function(e) {
                    return e < 0 ? -1 : 1
                },
                mod: function(e, t) {
                    return (e % t + t) % t
                },
                fmod: function(e, t) {
                    return e - Math.floor(e / t) * t
                },
                angleDiff: function(e, t) {
                    var a = n.fmod(t - e + Math.PI, 2 * Math.PI) - Math.PI;
                    return a < -Math.PI ? a + 2 * Math.PI : a
                },
                oriToRad: function(e) {
                    return e % 4 * .5 * Math.PI
                },
                radToOri: function(e) {
                    return Math.floor(n.fmod(e + .25 * Math.PI, 2 * Math.PI) / (.5 * Math.PI))
                },
                quantize: function(e, t, a, r) {
                    i(e >= t && e <= a);
                    var o = (1 << r) - 1,
                        s = n.clamp(e, t, a),
                        l = (s - t) / (a - t),
                        c = l * o + .5;
                    return t + (c < 0 ? Math.ceil(c) : Math.floor(c)) / o * (a - t)
                },
                v2Quantize: function(e, t, a, i, r, s) {
                    return o.create(n.quantize(e.x, t, i, s), n.quantize(e.y, a, r, s))
                },
                rayLineIntersect: function(e, t, a, i) {
                    var r = o.sub(i, a),
                        n = o.create(r.y, -r.x),
                        s = o.dot(t, n);
                    if (!(Math.abs(s) <= 1e-6)) {
                        var l = o.sub(a, e),
                            c = o.dot(n, l) / s,
                            m = o.dot(o.create(t.y, -t.x), l) / s;
                        return c >= 0 && m >= 0 && m <= 1 ? c : void 0
                    }
                },
                rayPolygonIntersect: function(e, t, a) {
                    for (var i = Number.MAX_VALUE, r = !1, o = 0, n = a.length - 1; o < a.length; n = o++) {
                        var s = this.rayLineIntersect(e, t, a[n], a[o]);
                        void 0 !== s && s < i && (r = !0, i = s)
                    }
                    return r ? i : void 0
                },
                pointInsidePolygon: function(e, t) {
                    for (var a = e.x, i = e.y, r = !1, o = t.length, n = 0, s = o - 1; n < o; s = n++) {
                        var l = t[n].x,
                            c = t[n].y,
                            m = t[s].x,
                            p = t[s].y;
                        c > i != p > i && a < (m - l) * (i - c) / (p - c) + l && (r = !r)
                    }
                    return r
                },
                distToSegmentSq: function(e, t, a) {
                    var i = o.sub(a, t),
                        r = o.dot(o.sub(e, t), i) / o.dot(i, i),
                        s = o.add(t, o.mul(i, n.clamp(r, 0, 1))),
                        l = o.sub(s, e);
                    return o.dot(l, l)
                },
                distToPolygon: function(e, t) {
                    for (var a = Number.MAX_VALUE, i = 0; i < t.length; i++) {
                        var r = t[i],
                            o = i == t.length - 1 ? t[0] : t[i + 1],
                            s = n.distToSegmentSq(e, r, o);
                        s < a && (a = s)
                    }
                    return Math.sqrt(a)
                },
                polygonArea: function(e) {
                    for (var t = [], a = 0; a < e.length; a++) t.push(e[a].x), t.push(e[a].y);
                    for (var i = r(t), o = 0, n = 0; n < i.length; n += 3) {
                        var s = i[n + 0],
                            l = i[n + 1],
                            c = i[n + 2],
                            m = t[2 * s + 0],
                            p = t[2 * s + 1],
                            d = t[2 * l + 0],
                            h = t[2 * l + 1],
                            u = t[2 * c + 0],
                            g = t[2 * c + 1];
                        o += Math.abs(.5 * (m * h + d * g + u * p - d * p - u * h - m * g))
                    }
                    return o
                },
                lineIntersects: function(e, t, a, i, r, o, n, s) {
                    if (e === a && t === i || r === n && o === s) return !1;
                    var l = (s - o) * (a - e) - (n - r) * (i - t);
                    if (0 === l) return !1;
                    var c = ((n - r) * (t - o) - (s - o) * (e - r)) / l,
                        m = ((a - e) * (t - o) - (i - t) * (e - r)) / l;
                    return !(c < 0 || c > 1 || m < 0 || m > 1) && {
                        x: e + c * (a - e),
                        y: t + c * (i - t)
                    }
                }
            };
        e.exports = n
    },
    "119e8c4c": function(e, t, a) {
        "use strict";

        function i(e, t) {
            this.min = e, this.max = t
        }

        function r(e) {
            return e instanceof i ? e.getRandom() : e
        }

        function o(e) {
            return e instanceof Function ? e() : e
        }

        function n() {
            this.active = !1, this.ticker = 0, this.def = {}, this.sprite = new c.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.scale.set(1, 1), this.sprite.visible = !1, this.hasParent = !1
        }

        function s() {
            this.active = !1
        }

        function l(e) {
            this.renderer = e, this.particles = [], this.emitters = [];
            for (var t = 0; t < 256; t++) this.particles[t] = new n(this.display);
            this.valueAdjust = 1, this.rippleParticle = "waterRipple"
        }
        var c = a("8b1dfb45"),
            m = a("10899aea"),
            p = a("1901e2d9"),
            d = a("c2a798c8");
        a("af8ba00f"), i.prototype = {
            getRandom: function() {
                return p.random(this.min, this.max)
            }
        };
        var h = {
                archwayBreak: {
                    image: ["part-panel-01.img"],
                    life: new i(.5, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.2, .35),
                        end: new i(.08, .12),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.06, .84, p.random(.46, .48)))
                    }
                },
                bloodSplat: {
                    image: ["part-splat-01.img", "part-splat-02.img", "part-splat-03.img"],
                    life: .5,
                    drag: 1,
                    rotVel: 0,
                    scale: {
                        start: .04,
                        end: new i(.15, .2),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.75, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(16711680, 1, p.random(.45, .8)))
                    }
                },
                barrelPlank: {
                    image: ["part-plank-01.img"],
                    life: new i(1, 1.5),
                    drag: new i(3, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.08, .18),
                        end: new i(.07, .17),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.09, .8, p.random(.66, .68)))
                    }
                },
                barrelChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.01, .02, p.random(.38, .41)))
                    }
                },
                barrelBreak: {
                    image: ["part-spark-02.img"],
                    life: new i(.8, 1),
                    drag: new i(1, 5),
                    rotVel: 0,
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.01, .02, p.random(.38, .41)))
                    }
                },
                blackChip: {
                    image: ["part-woodchip-01.img"],
                    life: new i(.5, 1),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, .08, p.random(.16, .18)))
                    }
                },
                blueChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.64, 1, p.random(.83, .85)))
                    }
                },
                book: {
                    image: ["part-book-01.img"],
                    life: new i(1, 1.5),
                    drag: new i(3, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.09, .19),
                        end: new i(.07, .17),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.08, .42, p.random(.72, .74)))
                    }
                },
                bottleBrownChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 5),
                    rotVel: new i(1 * Math.PI, 6 * Math.PI),
                    scale: {
                        start: new i(.02, .04),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: 7878664
                },
                bottleBrownBreak: {
                    image: ["part-spark-02.img"],
                    life: new i(.4, .8),
                    drag: new i(1, 4),
                    rotVel: new i(1 * Math.PI, 6 * Math.PI),
                    scale: {
                        start: new i(.03, .06),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: .8,
                        end: 0,
                        lerp: new i(.75, 1)
                    },
                    color: 7878664
                },
                bottleBlueChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 5),
                    rotVel: new i(1 * Math.PI, 6 * Math.PI),
                    scale: {
                        start: new i(.02, .04),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: 19544
                },
                bottleBlueBreak: {
                    image: ["part-spark-02.img"],
                    life: new i(.4, .8),
                    drag: new i(1, 4),
                    rotVel: new i(1 * Math.PI, 6 * Math.PI),
                    scale: {
                        start: new i(.03, .06),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: .8,
                        end: 0,
                        lerp: new i(.75, 1)
                    },
                    color: 19544
                },
                brickChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, .71, p.random(.32, .34)))
                    }
                },
                clothBreak: {
                    image: ["part-cloth-01.img"],
                    life: new i(.8, 1),
                    drag: new i(1, 5),
                    rotVel: 0,
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.95, 1)))
                    }
                },
                clothHit: {
                    image: ["part-cloth-01.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.95, 1)))
                    }
                },
                depositBoxGreyBreak: {
                    image: ["part-plate-01.img"],
                    life: new i(.5, 1),
                    drag: new i(7, 8),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.15, .25),
                        end: new i(.12, .2),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.36, .38)))
                    }
                },
                depositBoxGoldBreak: {
                    image: ["part-plate-01.img"],
                    life: new i(.5, 1),
                    drag: new i(6, 8),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.2, .35),
                        end: new i(.18, .25),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.11, .84, p.random(.64, .66)))
                    }
                },
                glassChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 5),
                    rotVel: new i(1 * Math.PI, 6 * Math.PI),
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: 8444415
                },
                glassPlank: {
                    image: ["part-plank-01.img"],
                    life: new i(1, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.1, .2),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 8444415
                },
                goldChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.11, .84, p.random(.88, .9)))
                    }
                },
                greenChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.4, .18, p.random(.5, .62)))
                    }
                },
                greenPlank: {
                    image: ["part-plank-01.img"],
                    life: new i(1, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.08, .16),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 3884335
                },
                greenhouseBreak: {
                    image: ["part-spark-02.img", "part-plate-01.img", "part-panel-01.img"],
                    life: new i(.5, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(1 * Math.PI, 6 * Math.PI),
                    scale: {
                        start: new i(.25, .55),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: .8,
                        end: 0,
                        lerp: new i(.75, 1)
                    },
                    color: 8444415
                },
                hutBreak: {
                    image: ["part-panel-01.img"],
                    life: new i(.5, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.25, .55),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.1, .81, p.random(.78, .82)))
                    }
                },
                leaf: {
                    image: ["part-leaf-01.img"],
                    life: new i(.5, 1),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.5, .75)))
                    }
                },
                leafRiver: {
                    image: ["part-leaf-02.img"],
                    life: new i(.5, 1),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.5, .75)))
                    }
                },
                lockerBreak: {
                    image: ["part-plate-01.img"],
                    life: new i(.5, 1),
                    drag: new i(7, 8),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.15, .2),
                        end: new i(.12, .15),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.1, .23, p.random(.51, .53)))
                    }
                },
                ltgreenChip: {
                    image: ["part-woodchip-01.img"],
                    life: new i(.5, 1),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.2, .42, p.random(.38, .42)))
                    }
                },
                outhouseChip: {
                    image: ["part-woodchip-01.img"],
                    life: new i(.5, 1),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.08, .57, p.random(.4, .46)))
                    }
                },
                outhouseBreak: {
                    image: ["part-panel-01.img"],
                    life: new i(.5, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.25, .55),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.08, .79, p.random(.52, .54)))
                    }
                },
                outhousePlank: {
                    image: ["part-plank-01.img"],
                    life: new i(1, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.1, .2),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.08, .57, p.random(.4, .46)))
                    }
                },
                potChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.06, .84, p.random(.73, .77)))
                    }
                },
                potBreak: {
                    image: ["part-pot-01.img"],
                    life: new i(.8, 1),
                    drag: new i(1, 5),
                    rotVel: 0,
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.06, .84, p.random(.73, .77)))
                    }
                },
                potatoChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.075, .43, p.random(.48, .5)))
                    }
                },
                potatoBreak: {
                    image: ["part-pumpkin-01.img"],
                    life: new i(.8, 1),
                    drag: new i(1, 5),
                    rotVel: 0,
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.075, .43, p.random(.48, .5)))
                    }
                },
                pumpkinChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.07, 1, p.random(.98, 1)))
                    }
                },
                pumpkinBreak: {
                    image: ["part-pumpkin-01.img"],
                    life: new i(.8, 1),
                    drag: new i(1, 5),
                    rotVel: 0,
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.08, 1, p.random(.95, .97)))
                    }
                },
                redChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.98, 1, p.random(.52, .54)))
                    }
                },
                redBreak: {
                    image: ["part-spark-02.img"],
                    life: new i(.8, 1),
                    drag: new i(1, 5),
                    rotVel: 0,
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.98, 1, p.random(.52, .54)))
                    }
                },
                redPlank: {
                    image: ["part-plank-01.img"],
                    life: new i(1, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.1, .2),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.02, 1, p.random(.26, .28)))
                    }
                },
                rockChip: {
                    image: ["map-stone-01.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.5, .75)))
                    }
                },
                rockBreak: {
                    image: ["map-stone-01.img"],
                    life: new i(.8, 1),
                    drag: new i(1, 5),
                    rotVel: 0,
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.5, .75)))
                    }
                },
                rockEyeChip: {
                    image: ["map-stone-01.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.03, .06),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: 2696225
                },
                rockEyeBreak: {
                    image: ["map-stone-01.img"],
                    life: new i(.8, 1),
                    drag: new i(4, 12),
                    rotVel: 0,
                    scale: {
                        start: new i(.05, .1),
                        end: new i(.03, .06),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 2696225
                },
                shackBreak: {
                    image: ["part-panel-01.img"],
                    life: new i(.5, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.25, .55),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.1, .24, p.random(.38, .41)))
                    }
                },
                shackGreenBreak: {
                    image: ["part-panel-01.img"],
                    life: new i(.5, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.25, .55),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 5730406
                },
                tanChip: {
                    image: ["part-woodchip-01.img"],
                    life: new i(.5, 1),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.1, .35, p.random(.48, .52)))
                    }
                },
                teahouseBreak: {
                    image: ["part-panel-01.img"],
                    life: new i(.5, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.25, .55),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.6, .31, p.random(.42, .45)))
                    }
                },
                teapavilionBreak: {
                    image: ["part-panel-01.img"],
                    life: new i(.5, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.25, .55),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, .8, p.random(.6, .62)))
                    }
                },
                toiletBreak: {
                    image: ["part-spark-02.img"],
                    life: new i(.8, 1),
                    drag: new i(1, 5),
                    rotVel: 0,
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.97, 0, p.random(.95, .97)))
                    }
                },
                toiletMetalBreak: {
                    image: ["part-spark-02.img"],
                    life: new i(.8, 1),
                    drag: new i(4, 5),
                    rotVel: 0,
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.01, .02, p.random(.38, .41)))
                    }
                },
                turkeyFeathersHit: {
                    image: ["part-feather-01.img", "part-feather-02.img"],
                    life: new i(1, 1.5),
                    drag: new i(1, 10),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.1, .2),
                        end: new i(.08, .12),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return 16777215
                    }
                },
                turkeyFeathersDeath: {
                    image: ["part-feather-01.img", "part-feather-02.img"],
                    life: new i(1, 1.5),
                    drag: new i(1, 10),
                    rotVel: new i(0, 3 * Math.PI),
                    scale: {
                        start: new i(.15, .25),
                        end: new i(.12, .2),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return 16777215
                    }
                },
                whiteChip: {
                    image: ["part-spark-02.img"],
                    life: .5,
                    drag: new i(1, 10),
                    rotVel: 0,
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.97, 0, p.random(.95, .97)))
                    }
                },
                whitePlank: {
                    image: ["part-plank-01.img"],
                    life: new i(1, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.1, .2),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.97, 0, p.random(.95, .97)))
                    }
                },
                windowBreak: {
                    image: ["part-spark-02.img"],
                    life: new i(.4, .8),
                    drag: new i(1, 4),
                    rotVel: new i(1 * Math.PI, 6 * Math.PI),
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: .8,
                        end: 0,
                        lerp: new i(.75, 1)
                    },
                    color: 8444415
                },
                woodChip: {
                    image: ["part-woodchip-01.img"],
                    life: new i(.5, 1),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.04, .08),
                        end: new i(.01, .02),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.05, 1, p.random(.35, .45)))
                    }
                },
                woodLog: {
                    image: ["part-log-01.img"],
                    life: new i(1, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.1, .2),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.05, 1, p.random(.35, .45)))
                    }
                },
                woodPlank: {
                    image: ["part-plank-01.img"],
                    life: new i(1, 1.5),
                    drag: new i(1, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.1, .2),
                        end: new i(.08, .18),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.05, 1, p.random(.25, .35)))
                    }
                },
                woodShard: {
                    image: ["part-spark-02.img"],
                    life: new i(1, 1.5),
                    drag: new i(3, 5),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: new i(.06, .15),
                        end: new i(.02, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.05, 1, p.random(.25, .35)))
                    }
                },
                "9mm": {
                    image: ["part-shell-01.img"],
                    life: new i(.5, .75),
                    drag: new i(3, 4),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: .0625,
                        end: .0325,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                "762mm": {
                    image: ["part-shell-02.img"],
                    life: new i(.75, 1),
                    drag: new i(1.5, 2.5),
                    rotVel: new i(2.5 * Math.PI, 2.5 * Math.PI),
                    scale: {
                        start: .075,
                        end: .045,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.925, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                "556mm": {
                    image: ["part-shell-04.img"],
                    life: new i(.75, 1),
                    drag: new i(1.5, 2.5),
                    rotVel: new i(2.5 * Math.PI, 2.5 * Math.PI),
                    scale: {
                        start: .075,
                        end: .045,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.925, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                "12gauge": {
                    image: ["part-shell-03.img"],
                    life: new i(.5, .75),
                    drag: new i(1, 2),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: .1,
                        end: .05,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                "50AE": {
                    image: ["part-shell-01.img"],
                    life: new i(.5, .75),
                    drag: new i(3, 4),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: .0625,
                        end: .0325,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                "308sub": {
                    image: ["part-shell-05.img"],
                    life: new i(.5, .75),
                    drag: new i(3, 4),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: .0625,
                        end: .0325,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                flare: {
                    image: ["part-shell-03.img"],
                    life: new i(.5, .75),
                    drag: new i(1, 2),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: .1,
                        end: .05,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                "45acp": {
                    image: ["part-shell-01.img"],
                    life: new i(.5, .75),
                    drag: new i(3, 4),
                    rotVel: new i(3 * Math.PI, 3 * Math.PI),
                    scale: {
                        start: .07,
                        end: .04,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.95, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                fragPin: {
                    image: ["part-frag-pin-01.img"],
                    life: new i(.5, .5),
                    drag: new i(.9, 1),
                    rotVel: 0,
                    scale: {
                        start: .18,
                        end: .14,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.5, 1)
                    },
                    color: 16777215
                },
                fragLever: {
                    image: ["part-frag-lever-01.img"],
                    life: new i(.5, .5),
                    drag: new i(.9, 1),
                    rotVel: 9 * Math.PI,
                    scale: {
                        start: .18,
                        end: .14,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.5, 1)
                    },
                    color: 16777215
                },
                explosionBurst: {
                    image: ["part-frag-burst-01.img"],
                    life: .5,
                    drag: 0,
                    rotVel: 0,
                    scale: {
                        start: 1,
                        end: 4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.75, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.065, 1, p.random(.98, .99)))
                    }
                },
                explosionMIRV: {
                    image: ["part-frag-burst-01.img"],
                    life: .5,
                    drag: 0,
                    rotVel: 0,
                    scale: {
                        start: 1,
                        end: 4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.75, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 1, p.random(.82, .84)))
                    }
                },
                explosionSmoke: {
                    image: ["part-smoke-01.img"],
                    life: new i(2, 3),
                    drag: 0,
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                explosionUSAS: {
                    image: ["part-frag-burst-01.img"],
                    life: .5,
                    drag: 0,
                    rotVel: 0,
                    scale: {
                        start: 1,
                        end: 4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.75, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.08, 1, p.random(.98, .99)))
                    }
                },
                explosionBomb: {
                    image: ["part-frag-burst-02.img"],
                    life: .5,
                    drag: 0,
                    rotVel: 0,
                    scale: {
                        start: 1,
                        end: 4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.75, 1)
                    },
                    color: 16777215
                },
                airdropSmoke: {
                    image: ["part-smoke-02.img", "part-smoke-03.img"],
                    zOrd: 499,
                    life: new i(1, 1.5),
                    drag: 0,
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.67, .72),
                        end: new i(.55, .61),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                airdropCrate01: {
                    image: ["part-airdrop-01.img"],
                    life: new i(.85, 1.15),
                    drag: new i(2, 2.25),
                    rotVel: new i(1 * Math.PI, 2 * Math.PI),
                    scale: {
                        start: .5,
                        end: .4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 16777215
                },
                airdropCrate01x: {
                    image: ["part-airdrop-01x.img"],
                    life: new i(.85, 1.15),
                    drag: new i(2, 2.25),
                    rotVel: new i(1 * Math.PI, 2 * Math.PI),
                    scale: {
                        start: .5,
                        end: .4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 16777215
                },
                airdropCrate02: {
                    image: ["part-airdrop-02.img"],
                    life: new i(.85, 1.15),
                    drag: new i(1.85, 2.15),
                    rotVel: new i(0, 2 * Math.PI),
                    scale: {
                        start: .5,
                        end: .4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 16777215
                },
                airdropCrate02x: {
                    image: ["part-airdrop-02x.img"],
                    life: new i(.85, 1.15),
                    drag: new i(1.85, 2.15),
                    rotVel: new i(0, 2 * Math.PI),
                    scale: {
                        start: .5,
                        end: .4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 16777215
                },
                airdropCrate03: {
                    image: ["part-airdrop-03.img"],
                    life: new i(.85, 1.15),
                    drag: new i(2, 2.25),
                    rotVel: new i(1 * Math.PI, 2 * Math.PI),
                    scale: {
                        start: .5,
                        end: .4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 16777215
                },
                airdropCrate04: {
                    image: ["part-airdrop-04.img"],
                    life: new i(.85, 1.15),
                    drag: new i(1.85, 2.15),
                    rotVel: new i(0, 2 * Math.PI),
                    scale: {
                        start: .5,
                        end: .4,
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: 16777215
                },
                cabinSmoke: {
                    image: ["part-smoke-02.img", "part-smoke-03.img"],
                    life: new i(3, 3.25),
                    drag: new i(.2, .22),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.2, .25),
                        end: new i(.6, .65),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: .7,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: .7,
                        lerp: new i(0, .1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.69, .695)))
                    }
                },
                bunkerBubbles: {
                    image: ["player-ripple-01.img"],
                    zOrd: 10,
                    life: new i(2.25, 2.5),
                    drag: new i(1.85, 2.15),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.2, .25),
                        end: new i(.65, .7),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: .25,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.95, 1)))
                    }
                },
                waterRipple: {
                    image: ["player-ripple-01.img"],
                    zOrd: 10,
                    life: 1.75,
                    drag: 0,
                    rotVel: 0,
                    scale: {
                        start: .15,
                        exp: .5
                    },
                    alpha: {
                        start: 1,
                        exp: -1
                    },
                    color: 11792639
                },
                bloodRipple: {
                    image: ["player-ripple-01.img"],
                    zOrd: 10,
                    life: 1.75,
                    drag: 0,
                    rotVel: 0,
                    scale: {
                        start: .15,
                        exp: .5
                    },
                    alpha: {
                        start: 1,
                        exp: -1
                    },
                    color: 1048833
                },
                desertRipple: {
                    image: ["player-ripple-01.img"],
                    zOrd: 10,
                    life: 1.75,
                    drag: 0,
                    rotVel: 0,
                    scale: {
                        start: .15,
                        exp: .5
                    },
                    alpha: {
                        start: 1,
                        exp: -1
                    },
                    color: 13756037
                },
                leafAutumn: {
                    image: ["part-leaf-03.img", "part-leaf-04.img", "part-leaf-05.img", "part-leaf-06.img"],
                    life: new i(10, 15),
                    drag: new i(0, 0),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.12, .15),
                        end: new i(.08, .11),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                leafHalloween: {
                    image: ["part-leaf-03.img", "part-leaf-04.img", "part-leaf-05.img", "part-leaf-06.img"],
                    life: new i(10, 15),
                    drag: new i(0, 0),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.12, .15),
                        end: new i(.08, .11),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.5, .55)))
                    },
                    ignoreValueAdjust: !0
                },
                leafSpring: {
                    image: ["part-blossom-01.img", "part-blossom-02.img", "part-blossom-03.img", "part-blossom-04.img"],
                    life: new i(10, 15),
                    drag: new i(0, 0),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.13, .15),
                        end: new i(.08, .11),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                leafPotato: {
                    image: ["part-blossom-01.img", "part-blossom-02.img", "part-blossom-03.img", "part-blossom-04.img", "part-potato-02.img"],
                    life: new i(10, 15),
                    drag: new i(0, 0),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.13, .15),
                        end: new i(.08, .11),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                potato: {
                    image: ["part-potato-02.img"],
                    life: new i(10, 15),
                    drag: new i(0, 0),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.13, .15),
                        end: new i(.08, .11),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
                    }
                },
                snow: {
                    image: ["part-snow-01.img"],
                    life: new i(10, 15),
                    drag: new i(0, 0),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.07, .12),
                        end: new i(.05, .1),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                snowball_impact: {
                    image: ["part-snow-01.img"],
                    life: new i(.5, 1),
                    drag: new i(0, 0),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.13, .23),
                        end: new i(.07, .14),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                potato_impact: {
                    image: ["part-potato-01.img"],
                    life: new i(.5, 1),
                    drag: new i(0, 0),
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.13, .23),
                        end: new i(.07, .14),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.9, 1)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 0, p.random(.9, .95)))
                    }
                },
                heal_cross: {
                    image: ["part-heal-01.img"],
                    life: new i(.75, 1),
                    drag: .25,
                    rotVel: 0,
                    scale: {
                        start: new i(.1, .12),
                        end: new i(.05, .07),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.7, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(0, 1, p.random(.7, 1)))
                    }
                },
                boost_sparkle: {
                    image: ["part-boost-01.img"],
                    life: new i(.75, 1),
                    drag: 0,
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.12, .14),
                        end: new i(.06, .08),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.7, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.3, 1, p.random(.7, 1)))
                    }
                },
                revive_cross: {
                    image: ["part-heal-01.img"],
                    life: new i(.75, 1),
                    drag: .25,
                    rotVel: 0,
                    scale: {
                        start: new i(.1, .12),
                        end: new i(.05, .07),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.7, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.83, 1, p.random(.7, 1)))
                    }
                },
                leafStim: {
                    image: ["part-blossom-01.img", "part-blossom-02.img", "part-blossom-03.img", "part-blossom-04.img"],
                    life: new i(4, 5),
                    drag: 0,
                    rotVel: new i(.25 * Math.PI, .5 * Math.PI),
                    scale: {
                        start: new i(.12, .14),
                        end: new i(.06, .08),
                        lerp: new i(0, 1)
                    },
                    alpha: {
                        start: 1,
                        end: 0,
                        lerp: new i(.7, 1)
                    },
                    alphaIn: {
                        start: 0,
                        end: 1,
                        lerp: new i(0, .05)
                    },
                    color: function() {
                        return p.rgbToInt(p.hsvToRgb(.37, 1, p.random(.95, 1)))
                    }
                }
            },
            u = {
                smoke_barrel: {
                    particle: "explosionSmoke",
                    rate: new i(.2, .3),
                    radius: 0,
                    speed: new i(2, 3),
                    angle: .1 * Math.PI,
                    maxCount: Number.MAX_VALUE
                },
                cabin_smoke_parent: {
                    particle: "cabinSmoke",
                    rate: new i(.72, .83),
                    radius: 0,
                    speed: new i(64, 96),
                    angle: .1 * Math.PI,
                    maxCount: Number.MAX_VALUE
                },
                bunker_bubbles_01: {
                    particle: "bunkerBubbles",
                    rate: new i(.3, .325),
                    radius: 0,
                    speed: new i(1.6, 1.8),
                    angle: -2.2 * Math.PI,
                    maxCount: Number.MAX_VALUE
                },
                bunker_bubbles_02: {
                    particle: "bunkerBubbles",
                    rate: new i(.4, .425),
                    radius: 0,
                    speed: new i(1.6, 1.8),
                    angle: -2.2 * Math.PI,
                    maxCount: Number.MAX_VALUE
                },
                falling_leaf: {
                    particle: "leafAutumn",
                    rate: new i(.08, .12),
                    radius: 120,
                    speed: new i(2, 3),
                    angle: .2 * Math.PI,
                    maxCount: Number.MAX_VALUE,
                    zOrd: 999
                },
                falling_leaf_halloween: {
                    particle: "leafHalloween",
                    rate: new i(.05, .06),
                    radius: 120,
                    speed: new i(2, 3),
                    angle: .2 * Math.PI,
                    maxCount: Number.MAX_VALUE,
                    zOrd: 999
                },
                falling_leaf_spring: {
                    particle: "leafSpring",
                    rate: new i(.1, .14),
                    radius: 120,
                    speed: new i(2, 3),
                    angle: .2 * Math.PI,
                    maxCount: Number.MAX_VALUE,
                    zOrd: 999
                },
                falling_leaf_potato: {
                    particle: "leafPotato",
                    rate: new i(.1, .14),
                    radius: 120,
                    speed: new i(2, 3),
                    angle: .2 * Math.PI,
                    maxCount: Number.MAX_VALUE,
                    zOrd: 999
                },
                falling_potato: {
                    particle: "potato",
                    rate: new i(.2, .24),
                    radius: 120,
                    speed: new i(2, 3),
                    angle: .2 * Math.PI,
                    maxCount: Number.MAX_VALUE,
                    zOrd: 999
                },
                falling_snow_fast: {
                    particle: "snow",
                    rate: new i(.12, .17),
                    maxRate: new i(.05, .07),
                    maxElapsed: 240,
                    radius: 70,
                    speed: new i(1, 1.5),
                    angle: .2 * Math.PI,
                    maxCount: Number.MAX_VALUE,
                    zOrd: 999
                },
                falling_snow_slow: {
                    particle: "snow",
                    rate: new i(.08, .12),
                    radius: 70,
                    speed: new i(1, 1.5),
                    angle: .2 * Math.PI,
                    maxCount: Number.MAX_VALUE,
                    zOrd: 999
                },
                heal_01: {
                    particle: "heal_cross",
                    rate: new i(.3, .35),
                    radius: 1.5,
                    speed: new i(1, 1.5),
                    angle: 0,
                    maxCount: Number.MAX_VALUE,
                    noRotate: !0
                },
                boost_01: {
                    particle: "boost_sparkle",
                    rate: new i(.3, .35),
                    radius: 1.5,
                    speed: new i(1, 1.5),
                    angle: 0,
                    maxCount: Number.MAX_VALUE
                },
                revive_01: {
                    particle: "revive_cross",
                    rate: new i(.5, .55),
                    radius: 1.5,
                    speed: new i(1, 1.5),
                    angle: 0,
                    maxCount: Number.MAX_VALUE,
                    noRotate: !0
                },
                stim_01: {
                    particle: "leafStim",
                    rate: new i(.1, .12),
                    radius: 1.5,
                    speed: new i(1, 1.5),
                    angle: 0,
                    maxCount: Number.MAX_VALUE,
                    noRotate: !0
                }
            };
        n.prototype = {
            o: function(e, t, a, i, n, s, l, m, u, g) {
                var y = h[t];
                this.active = !0, this.ticker = 0, m ? (this.hasParent = !0, m.addChild(this.sprite)) : (this.hasParent = !1, e.addPIXIObj(this.sprite, a, u)), this.pos = d.copy(i), this.vel = d.copy(n), this.rot = l, this.def = y, this.delay = 0, this.life = r(y.life), this.drag = r(y.drag), this.rotVel = r(y.rotVel) * (Math.random() < .5 ? -1 : 1), this.rotDrag = r(y.drag) / 2, this.scaleUseExp = void 0 !== y.scale.exp, this.scale = r(y.scale.start) * s, this.scaleEnd = this.scaleUseExp ? 0 : r(y.scale.end) * s, this.scaleExp = this.scaleUseExp ? y.scale.exp : 0, this.alphaUseExp = void 0 !== y.alpha.exp, this.alpha = r(y.alpha.start), this.alphaEnd = this.alphaUseExp ? 0 : r(y.alpha.end), this.alphaExp = this.alphaUseExp ? y.alpha.exp : 0, this.alphaIn = void 0 !== y.alphaIn, this.alphaInStart = this.alphaIn ? r(y.alphaIn.start) : 0, this.alphaInEnd = this.alphaIn ? r(y.alphaIn.end) : 0, this.emitterIdx = -1;
                var w = Array.isArray(y.image) ? y.image[Math.floor(Math.random() * y.image.length)] : y.image;
                this.sprite.texture = c.Texture.fromImage(w), this.sprite.tint = o(y.color), g < 1 && !y.ignoreValueAdjust && (this.sprite.tint = p.adjustValue(this.sprite.tint, g)), this.sprite.visible = !1
            },
            n: function() {
                this.active = !1, this.sprite.visible = !1
            },
            setDelay: function(e) {
                this.delay = e
            }
        }, s.prototype = {
            o: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = u[e];
                this.active = !0, this.enabled = !0, this.type = e, this.pos = t.pos ? d.copy(t.pos) : d.create(0, 0), this.dir = t.dir ? d.copy(t.dir) : d.create(0, 1), this.scale = void 0 !== t.scale ? t.scale : 1, this.layer = t.layer || 0, this.duration = void 0 !== t.duration ? t.duration : Number.MAX_VALUE, this.radius = void 0 !== t.radius ? t.radius : a.radius, this.ticker = 0, this.nextSpawn = 0, this.spawnCount = 0, this.parent = t.parent || null, this.alpha = 1, this.rateMult = void 0 !== t.rateMult ? t.rateMult : 1;
                var i = h[a.particle];
                this.zOrd = void 0 !== a.zOrd ? a.zOrd : void 0 !== i.zOrd ? i.zOrd : 20
            },
            n: function() {
                this.active = !1
            },
            stop: function() {
                this.duration = this.ticker
            }
        }, l.prototype = {
            onMapLoad: function(e) {
                this.valueAdjust = e.getMapDef().biome.valueAdjust, this.rippleParticle = e.getMapDef().biome.particles.ripple || "waterRipple"
            },
            n: function() {
                for (var e = 0; e < this.particles.length; e++) {
                    var t = this.particles[e].sprite;
                    t.parent && t.parent.removeChild(t), t.destroy({
                        children: !0
                    })
                }
            },
            addParticle: function(e, t, a, i, r, o, s, l) {
                for (var c = null, m = 0; m < this.particles.length; m++)
                    if (!this.particles[m].active) {
                        c = this.particles[m];
                        break
                    }
                return c || (c = new n, this.particles.push(c)), r = void 0 !== r ? r : 1, o = void 0 !== o ? o : Math.random() * Math.PI * 2, l = void 0 !== l ? l : h[e].zOrd || 20, c.o(this.renderer, e, t, a, i, r, o, s, l, this.valueAdjust), c
            },
            addRippleParticle: function(e, t) {
                return this.addParticle(this.rippleParticle, t, e, d.create(0, 0), 1, 0, null)
            },
            addEmitter: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = null, i = 0; i < this.emitters.length; i++)
                    if (!this.emitters[i].active) {
                        a = this.emitters[i];
                        break
                    }
                return a || (a = new s, this.emitters.push(a)), a.o(e, t), a
            },
            c: function(e, t, a) {
                for (var i = 0; i < this.emitters.length; i++) {
                    var o = this.emitters[i];
                    if (o.active && o.enabled) {
                        o.ticker, o.ticker += e, o.nextSpawn -= e;
                        for (var n = u[o.type]; o.nextSpawn <= 0 && o.spawnCount < n.maxCount;) {
                            var s = o.scale * o.radius,
                                l = d.add(o.pos, p.randomPointInCircle(s)),
                                c = d.rotate(o.dir, (Math.random() - .5) * n.angle),
                                h = d.mul(c, r(n.speed)),
                                g = n.noRotate ? 0 : Math.random() * Math.PI * 2;
                            this.addParticle(n.particle, o.layer, l, h, o.scale, g, o.parent, o.zOrd).emitterIdx = i;
                            var y = r(n.rate);
                            if (n.maxRate) {
                                var w = m.easeInExpo(m.min(1, o.ticker / n.maxElapsed)),
                                    x = r(n.maxRate);
                                y = m.lerp(w, y, x)
                            }
                            o.nextSpawn += y * o.rateMult, o.spawnCount++
                        }
                        o.ticker >= o.duration && o.n()
                    }
                }
                for (var f = 0; f < this.particles.length; f++) {
                    var b = this.particles[f];
                    if (b.active && (b.ticker += e, !(b.ticker < b.delay))) {
                        var _ = m.min((b.ticker - b.delay) / b.life, 1);
                        b.vel = d.mul(b.vel, 1 / (1 + e * b.drag)), b.pos = d.add(b.pos, d.mul(b.vel, e)), b.rotVel *= 1 / (1 + e * b.rotDrag), b.rot += b.rotVel * e, b.scaleUseExp && (b.scale += e * b.scaleExp), b.alphaUseExp && (b.alpha = m.max(b.alpha + e * b.alphaExp, 0));
                        var S = b.hasParent ? b.pos : t.pointToScreen(b.pos),
                            v = b.scaleUseExp ? b.scale : m.remap(_, b.def.scale.lerp.min, b.def.scale.lerp.max, b.scale, b.scaleEnd),
                            k = b.alphaUseExp ? b.alpha : m.remap(_, b.def.alpha.lerp.min, b.def.alpha.lerp.max, b.alpha, b.alphaEnd);
                        b.alphaIn && _ < b.def.alphaIn.lerp.max && (k = m.remap(_, b.def.alphaIn.lerp.min, b.def.alphaIn.lerp.max, b.alphaInStart, b.alphaInEnd)), b.emitterIdx >= 0 && (k *= this.emitters[b.emitterIdx].alpha), b.hasParent || (v = t.pixels(v)), b.sprite.position.set(S.x, S.y), b.sprite.scale.set(v, v), b.sprite.rotation = b.rot, b.sprite.alpha = k, b.sprite.visible = !0, _ >= 1 && b.n()
                    }
                }
            }
        }, e.exports = {
            EmitterDefs: u,
            d: l
        }
    },
    "14a25ec1": function(e, t, a) {
        "use strict";
        (function(t) {
            var i = a("10899aea");
            ! function(a) {
                function r(e, t) {
                    return n(e, t, !1)
                }

                function o(e, t) {
                    return n(e, t, !0)
                }

                function n(e, t, a) {
                    if (0 === t) return "";
                    var i = 0,
                        r = [],
                        o = !0,
                        n = !!t;
                    for (t || (t = Math.floor((e._length - e._index) / 8)); i < t;) {
                        var s = e.readUint8();
                        if (0 === s && (o = !1, !n)) break;
                        o && r.push(s), i++
                    }
                    var l = String.fromCharCode.apply(null, r);
                    if (!a) return l;
                    try {
                        return decodeURIComponent(escape(l))
                    } catch (e) {
                        return l
                    }
                }

                function s(e, t, a) {
                    for (var i = a || t.length + 1, r = 0; r < i; r++) e.writeUint8(r < t.length ? t.charCodeAt(r) : 0)
                }

                function l(e, t, a) {
                    for (var i = c(t), r = a || i.length + 1, o = 0; o < r; o++) e.writeUint8(o < i.length ? i[o] : 0)
                }

                function c(e) {
                    var t, a, i = [];
                    for (t = 0; t < e.length; t++) a = e.charCodeAt(t), a <= 127 ? i.push(a) : a <= 2047 ? (i.push(a >> 6 | 192), i.push(63 & a | 128)) : a <= 65535 ? (i.push(a >> 12 | 224), i.push(a >> 6 & 63 | 128), i.push(63 & a | 128)) : (i.push(a >> 18 | 240), i.push(a >> 12 & 63 | 128), i.push(a >> 6 & 63 | 128), i.push(63 & a | 128));
                    return i
                }
                var m = function(e, a, i) {
                    if (!(e instanceof ArrayBuffer || void 0 !== t && e instanceof t)) throw new Error("Must specify a valid ArrayBuffer or Buffer.");
                    a = a || 0, i = i || e.byteLength || e.length, this._view = new Uint8Array(e, a, i)
                };
                m._scratch = new DataView(new ArrayBuffer(8)), Object.defineProperty(m.prototype, "buffer", {
                    get: function() {
                        return t.from(this._view.buffer)
                    },
                    enumerable: !0,
                    configurable: !1
                }), Object.defineProperty(m.prototype, "byteLength", {
                    get: function() {
                        return this._view.length
                    },
                    enumerable: !0,
                    configurable: !1
                }), m.prototype._setBit = function(e, t) {
                    t ? this._view[e >> 3] |= 1 << (7 & e) : this._view[e >> 3] &= ~(1 << (7 & e))
                }, m.prototype.getBits = function(e, t, a) {
                    var r = 8 * this._view.length - e;
                    if (t > r) throw new Error("Cannot get " + t + " bit(s) from offset " + e + ", " + r + " available");
                    for (var o = 0, n = 0; n < t;) {
                        var s = t - n,
                            l = 7 & e,
                            c = this._view[e >> 3],
                            m = i.min(s, 8 - l);
                        o |= (c >> l & (1 << m) - 1) << n, e += m, n += m
                    }
                    return a ? (32 !== t && o & 1 << t - 1 && (o |= -1 ^ (1 << t) - 1), o) : o >>> 0
                }, m.prototype.setBits = function(e, t, a) {
                    var i = 8 * this._view.length - e;
                    if (a > i) throw new Error("Cannot set " + a + " bit(s) from offset " + e + ", " + i + " available");
                    for (var r = 0; r < a;) {
                        var o;
                        a - r >= 8 && 0 == (7 & e) ? (this._view[e >> 3] = 255 & t, o = 8) : (this._setBit(e, 1 & t), o = 1), t >>= o, e += o, r += o
                    }
                }, m.prototype.getBoolean = function(e) {
                    return 0 !== this.getBits(e, 1, !1)
                }, m.prototype.getInt8 = function(e) {
                    return this.getBits(e, 8, !0)
                }, m.prototype.getUint8 = function(e) {
                    return this.getBits(e, 8, !1)
                }, m.prototype.getInt16 = function(e) {
                    return this.getBits(e, 16, !0)
                }, m.prototype.getUint16 = function(e) {
                    return this.getBits(e, 16, !1)
                }, m.prototype.getInt32 = function(e) {
                    return this.getBits(e, 32, !0)
                }, m.prototype.getUint32 = function(e) {
                    return this.getBits(e, 32, !1)
                }, m.prototype.getFloat32 = function(e) {
                    return m._scratch.setUint32(0, this.getUint32(e)), m._scratch.getFloat32(0)
                }, m.prototype.getFloat64 = function(e) {
                    return m._scratch.setUint32(0, this.getUint32(e)), m._scratch.setUint32(4, this.getUint32(e + 32)), m._scratch.getFloat64(0)
                }, m.prototype.setBoolean = function(e, t) {
                    this.setBits(e, t ? 1 : 0, 1)
                }, m.prototype.setInt8 = m.prototype.setUint8 = function(e, t) {
                    this.setBits(e, t, 8)
                }, m.prototype.setInt16 = m.prototype.setUint16 = function(e, t) {
                    this.setBits(e, t, 16)
                }, m.prototype.setInt32 = m.prototype.setUint32 = function(e, t) {
                    this.setBits(e, t, 32)
                }, m.prototype.setFloat32 = function(e, t) {
                    m._scratch.setFloat32(0, t), this.setBits(e, m._scratch.getUint32(0), 32)
                }, m.prototype.setFloat64 = function(e, t) {
                    m._scratch.setFloat64(0, t), this.setBits(e, m._scratch.getUint32(0), 32), this.setBits(e + 32, m._scratch.getUint32(4), 32)
                }, m.prototype.getArrayBuffer = function(e, t) {
                    for (var a = new Uint8Array(t), i = 0; i < t; i++) a[i] = this.getUint8(e + 8 * i);
                    return a
                };
                var p = function(e, t) {
                        return function() {
                            if (this._index + t > this._length) throw new Error("Trying to read past the end of the stream");
                            var a = this._view[e](this._index);
                            return this._index += t, a
                        }
                    },
                    d = function(e, t) {
                        return function(a) {
                            this._view[e](this._index, a), this._index += t
                        }
                    },
                    h = function(e, a, i) {
                        var r = e instanceof ArrayBuffer || void 0 !== t && e instanceof t;
                        if (!(e instanceof m || r)) throw new Error("Must specify a valid BitView, ArrayBuffer or Buffer");
                        this._view = r ? new m(e, a, i) : e, this._index = 0, this._startIndex = 0, this._length = 8 * this._view.byteLength
                    };
                Object.defineProperty(h.prototype, "index", {
                    get: function() {
                        return this._index - this._startIndex
                    },
                    set: function(e) {
                        this._index = e + this._startIndex
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(h.prototype, "length", {
                    get: function() {
                        return this._length - this._startIndex
                    },
                    set: function(e) {
                        this._length = e + this._startIndex
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(h.prototype, "bitsLeft", {
                    get: function() {
                        return this._length - this._index
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(h.prototype, "byteIndex", {
                    get: function() {
                        return Math.ceil(this._index / 8)
                    },
                    set: function(e) {
                        this._index = 8 * e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(h.prototype, "buffer", {
                    get: function() {
                        return this._view.buffer
                    },
                    enumerable: !0,
                    configurable: !1
                }), Object.defineProperty(h.prototype, "view", {
                    get: function() {
                        return this._view
                    },
                    enumerable: !0,
                    configurable: !1
                }), h.prototype.readBits = function(e, t) {
                    var a = this._view.getBits(this._index, e, t);
                    return this._index += e, a
                }, h.prototype.writeBits = function(e, t) {
                    this._view.setBits(this._index, e, t), this._index += t
                }, h.prototype.readBoolean = p("getBoolean", 1), h.prototype.readInt8 = p("getInt8", 8), h.prototype.readUint8 = p("getUint8", 8), h.prototype.readInt16 = p("getInt16", 16), h.prototype.readUint16 = p("getUint16", 16), h.prototype.readInt32 = p("getInt32", 32), h.prototype.readUint32 = p("getUint32", 32), h.prototype.readFloat32 = p("getFloat32", 32), h.prototype.readFloat64 = p("getFloat64", 64), h.prototype.writeBoolean = d("setBoolean", 1), h.prototype.writeInt8 = d("setInt8", 8), h.prototype.writeUint8 = d("setUint8", 8), h.prototype.writeInt16 = d("setInt16", 16), h.prototype.writeUint16 = d("setUint16", 16), h.prototype.writeInt32 = d("setInt32", 32), h.prototype.writeUint32 = d("setUint32", 32), h.prototype.writeFloat32 = d("setFloat32", 32), h.prototype.writeFloat64 = d("setFloat64", 64), h.prototype.readASCIIString = function(e) {
                    return r(this, e)
                }, h.prototype.readUTF8String = function(e) {
                    return o(this, e)
                }, h.prototype.writeASCIIString = function(e, t) {
                    s(this, e, t)
                }, h.prototype.writeUTF8String = function(e, t) {
                    l(this, e, t)
                }, h.prototype.readBitStream = function(e) {
                    var t = new h(this._view);
                    return t._startIndex = this._index, t._index = this._index, t.length = e, this._index += e, t
                }, h.prototype.writeBitStream = function(e, t) {
                    t || (t = e.bitsLeft);
                    for (var a; t > 0;) a = i.min(t, 32), this.writeBits(e.readBits(a), a), t -= a
                }, h.prototype.readArrayBuffer = function(e) {
                    var t = this._view.getArrayBuffer(this._index, e);
                    return this._index += 8 * e, t
                }, h.prototype.writeArrayBuffer = function(e, t) {
                    this.writeBitStream(new h(e), 8 * t)
                }, e.exports = {
                    BitView: m,
                    BitStream: h
                }
            }()
        }).call(t, a("a5e2faae").Buffer)
    },
    15173389: function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-08-05",
                locale: "fr"
            },
            "word-order": "svo",
            "index-my-stats": "Mes statistiques",
            "index-leaderboards": "Classements",
            "index-slogan": "2d Battle royale",
            "index-region": "Région",
            "index-north-america": "Amérique du Nord",
            "index-europe": "Europe",
            "index-asia": "Asie",
            "index-south-america": "Amérique du Sud",
            "index-korea": "Corée du Sud",
            "index-players": "joueurs",
            "index-play-solo": "Jouer en solo",
            "index-play-duo": "Jouer en duo",
            "index-play-squad": "Jouer en squad",
            "index-join-team": "Joindre une équipe",
            "index-create-team": "Créer une équipe",
            "index-how-to-play": "Comment jouer",
            "index-leave-team": "Quitter l’équipe",
            "index-joining-team": "Rejoindre l’équipe",
            "index-creating-team": "Création d'une équipe",
            "index-invite-link": "Lien d'invitation",
            "index-solo": "Solo",
            "index-duo": "Duo",
            "index-squad": "Squad",
            "index-auto-fill": "Remplir",
            "index-no-fill": "Ne pas remplir",
            "index-waiting-for-leader": "En attente du chef pour débuter",
            "index-play": "Jouer",
            "index-featured-youtuber": "Youtubeur en vedette",
            "index-streaming-live": "Diffusions en direct!",
            "index-viewer": "spectateur",
            "index-viewers": "spectateurs",
            "index-settings": "Paramètres",
            "index-high-resolution": "Haute résolution (cocher pour une meilleure qualité)",
            "index-screen-shake": "Tremblement d'écran",
            "index-anon-player-names": "Anonymiser les noms des joueurs",
            "index-master-volume": "Volume principal",
            "index-sfx-volume": "Volume des effets",
            "index-music-volume": "Volume de la musique",
            "index-mobile-announce": "Maintenant disponible sur mobile !",
            "index-mobile-tooltip": "Visitez <span>surviv.io</span> depuis votre mobile pour pouvoir jouer partout !",
            "index-team-is-full": "L'équipe est pleine!",
            "index-failed-joining-team": "Impossible de joindre l'équipe.",
            "index-failed-creating-team": "Impossible de créer l'équipe.",
            "index-failed-finding-game": "Impossible de trouver une partie.",
            "index-failed-joining-game": "Impossible de joindre une partie.",
            "index-lost-connection": "Connexion à l'équipe perdue.",
            "index-host-closed": "L'hôte a fermé la connexion.",
            "index-view-more": "Afficher plus",
            "index-back-to-main": "Retour au menu principal",
            "index-most-kills": "Plus de meutres",
            "index-total-kills": "Total des meurtres",
            "index-total-wins": "Total des victoires",
            "index-top-5-percent": "Top 5 pour cent",
            "index-kill-death-ratio": "Ratio E/M",
            "index-for": "pour",
            "index-today": "Aujourd'hui",
            "index-this-week": "Cette semaine",
            "index-all-time": "Tous les temps",
            "index-top-100": "TOP 100",
            "index-rank": "Classement",
            "index-player": "Joueur",
            "index-total-games": "Total des parties",
            "index-controls": "Contrôles",
            "index-movement": "Mouvement",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Viser",
            "index-aim-ctrl": "Souris",
            "index-punch": "Frapper",
            "index-shoot": "Tirer",
            "index-shoot-ctrl": "Clic gauche",
            "index-change-weapons": "Changer d’armes",
            "index-change-weapons-ctrl": "1 à 4 ou molette",
            "index-stow-weapons": "Ranger les armes (Mode frapper)",
            "index-stow-weapons-ctrl": "3 ou E",
            "index-swap-weapons": "Arme précédente",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Recharger",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Zoom du scope",
            "index-scope-zoom-ctrl": "Clique gauche sur le zoom",
            "index-pickup": "Prendre",
            "index-loot": "Ramasser",
            "index-revive": "Réanimer",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Se soigner",
            "index-use-medical-ctrl": "Clique gauche sur l'objet ou 7 à 0",
            "index-drop-item": "Lâcher l'objet",
            "index-drop-item-ctrl": "Clique droit sur l'ojhet",
            "index-cancel-action": "Annuler l'action",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Voir la carte",
            "index-view-map-ctrl": "M ou G",
            "index-toggle-minimap": "Basculer la carte",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Utiliser la roue de ping d'équipe",
            "index-use-ping-ctrl": "Tenez C, puis tenez un clic droit et traînez la souris, puis lâchez le clic droit.",
            "index-use-emote": "Utiliser la roue d'émotes",
            "index-use-emote-ctrl": "Tenez un clic droit et traînez la souris, puis lâchez le clic droit.",
            "index-tips-1-desc": "Le but de surviv.io est d'être le dernier joueur vivant. Vouz vivez seulement une fois par match - pas de respawn!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": 'Si vous avez joué d\'autres jeux type "battle royale" comme PUBG, Fortnite ou H1Z1, vous êtes à moitié chemin! Pensez à surviv.io comme PUBG en 2D.',
            "index-tips-3": "Piller et tuer",
            "index-tips-3-desc": "Vous commencerez le jeu avec pas d'objets à part d'un simple sac à dos. Naviguez le terrain pour trouver du butin: des armes, balles, viseurs et objets médicaux. Éliminez les autre joueurs et vous pouver prendre leurs objets!",
            "index-tips-4": "Rouge = Mauvais!",
            "index-tips-4-desc": "Les joueurs ne sont pas les seules choses qui peuvent vous tuer. La zone rouge meutrière va venir vers vous pas les côtés du terrain et inflige des dégâts de plus en plus dangereux. Gardez un oeil sur ca carte et restez saufs. ",
            "game-alive": "En vie",
            "game-reloading": "Rechargement",
            "game-using": "Utilisation :",
            "game-reviving": "Réanimation de",
            "game-revive-teammate": "Réaminez votre coéquipier",
            "game-equip": "Équiper",
            "game-cancel": "Annuler",
            "game-open-door": "Ouvrir la porte",
            "game-close-door": "Fermer la porte",
            "game-unlock": "Déverrouiller",
            "game-You": "Vous",
            "game-you": "vous avez",
            "game-themselves": "lui-même",
            "game-yourself": "toi-même",
            "game-you-died": "êtes mort",
            "game-player-died": "est mort",
            "game-with": "avec",
            "game-knocked-out": "a assommé",
            "game-killed": "a tué",
            "game-finally-killed": "a finalemaent tué",
            "game-finally-bled-out": "est finalement mort",
            "game-died-outside": "est mort hors de la zone sûre",
            "game-the-red-zone": "La zone rouge",
            "game-crushed": "écrasé",
            "game-the-air-drop": "La caisse aérienne",
            "game-waiting-for-players": "En attente de joueurs",
            "game-spectating": "En train de regarder",
            "game-red-zone-advances": "La zone rouge avance dans",
            "game-red-zone-advancing": "La zone rouge avance, allez vers la zone sûre!",
            "game-seconds": "secondes",
            "game-minutes": "minutes",
            "game-minute": "minute",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Pas assez d'espace!",
            "game-item-already-owned": "Vous avez déjà cet objet!",
            "game-item-already-equipped": "L'objet est déjà équipé",
            "game-better-item-equipped": "Un meilleur objet est déjà équipé!",
            "game-gun-cannot-fire": "Le fusil ne peut pas être tiré ici!",
            "game-play-new-game": "Nouvelle partie",
            "game-spectate": "Regarder",
            "game-full-screen": "Plein écran",
            "game-sound": "Son",
            "game-quit-game": "Quitter la partie",
            "game-return-to-game": "Retourner au jeu",
            "game-hide-match-stats": "Masquer les statistiques",
            "game-view-match-stats": "Voir les statistiques",
            "game-previous-teammate": "Coéquipier précédent",
            "game-next-teammate": "Coéquipier suivant",
            "game-leave-game": "Quitter la partie",
            "game-your-results": "Votre résultat",
            "game-chicken": "Victoire! Les poulets sont à nous!",
            "game-won-the-game": "a gagné la partie.",
            "game-team-eliminated": "Votre équipe a été éliminée.",
            "game-solo-rank": "Classement solo",
            "game-duo-rank": "Classement duo",
            "game-squad-rank": "Classement d'équipe",
            "game-rank": "Rang",
            "game-team-rank": "Rang d'équipe",
            "game-team-kills": "Meurtres de l'équipe",
            "game-kill": "Meurtre",
            "game-kills": "Meurtres",
            "game-damage-dealt": "Dégâts infligés",
            "game-damage-taken": "Dégâts subis",
            "game-survived": "Temps survécu",
            "game-backpack00": "Poche",
            "game-backpack01": "Petit sac à dos",
            "game-backpack02": "Sac à dos régulier",
            "game-backpack03": "Sac à dos militaire",
            "game-bandage": "Pansements",
            "game-bandage-tooltip": "Clique gauche pour restaurer 15 points de vie.",
            "game-healing-tooltip": "Ne peut restaurer plus de 75 points de vie.",
            "game-healthkit": "Kit médical",
            "game-healthkit-tooltip": "Clique gauche pour restaurer 100 points de vie.",
            "game-soda": "Soda",
            "game-soda-tooltip": "Clique gauche pour augmenter l'adrénaline de 25.",
            "game-adrenaline-tooltip": "L'adrénaline restaure la vie au fil du temps.",
            "game-painkiller": "Pillules",
            "game-painkiller-tooltip": "Clique gauche pour augmenter l'adrénaline de 50.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Balles pour M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 et Vector.",
            "game-12gauge": "Calibre 12",
            "game-12gauge-tooltip": "Balles pour M870, M1100, SPAS-12, Saiga-12 et MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Balles pour AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 et DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Balles pour FAMAS, M416, M4A1-S, QBB-97, Mk 12 et M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Balles pour DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Balles pour AWM-S.",
            "game-flare": "Éclat",
            "game-flare-tooltip": "Balles pour Pistolet de détresse",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Balles pour M1911, M1A1, Model 94 et Peacemaker.",
            "game-chest01": "Veste de niveau 1",
            "game-chest02": "Veste de niveau 2",
            "game-chest03": "Veste de niveau 3",
            "game-helmet01": "Casque de niveau 1",
            "game-helmet02": "Casque de niveau 2",
            "game-helmet03": "Casque de niveau 3",
            "game-1xscope": "Viseur x1",
            "game-2xscope": "Viseur x2",
            "game-4xscope": "Viseur x4",
            "game-8xscope": "Viseur x8",
            "game-15xscope": "Viseur x15",
            "game-level-1": "Niv. 1",
            "game-level-2": "Niv. 2",
            "game-level-3": "Niv. 3",
            "game-level-4": "Niv. 4",
            "game-outfitBase": "Skin de base",
            "game-outfitRoyalFortune": "Fortune royale",
            "game-outfitKeyLime": "Key Lime",
            "game-outfitCobaltShell": "Coquille de cobalt",
            "game-outfitCarbonFiber": "Fibre de carbone",
            "game-outfitDarkGloves": "Le professionnel",
            "game-outfitGhillie": "Ghillie Suit",
            "game-outfitCamo": "Camouflage forêt",
            "game-outfitRed": "Cible d'entrainement",
            "game-outfitWhite": "Vengeur arctique",
            "game-outfitWoodland": "Combat de forêt",
            "game-fists": "Poings",
            "game-woodaxe": "Hache à bois",
            "game-katana": "Katana",
            "game-katana_rusted": "Katana rouillé",
            "game-hud-katana_rusted": "Katana",
            "game-katana_orchid": "Katana à orchidées",
            "game-hud-katana_orchid": "Katana",
            "game-stonehammer": "Marteau de pierre",
            "game-hook": "Crochet",
            "game-pan": "Poêle",
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
            "game-flare_gun": "Pistolet de détresse",
            "game-flare_gun_dual": "Pistolet de détresse",
            "game-hud-flare_gun_dual": "Pistolet de détresse",
            "game-famas": "FAMAS",
            "game-hk416": "M416",
            "game-mk12": "Mk 12 SPR",
            "game-m249": "M249",
            "game-frag": "Grenade à fragmentation",
            "game-hud-frag": "Frag.",
            "game-smoke": "Grenade fumigène",
            "game-hud-smoke": "Fumi.",
            "game-incendiary": "Grenade à incendie",
            "game-mirv": "MIRV Grenade",
            "game-hud-mirv": "MIRV",
            "game-mirv_mini": "MIRV Grenade",
            "game-strobe": "Strobe",
            "game-hud-strobe": "Strobe",
            "game-snowball": "Boule de neige",
            "game-hud-snowball": "Boule de neige",
            "game-snowball_heavy": "Boule de neige",
            "game-potato": "Patate",
            "game-hud-potato": "Patate",
            "game-potato_heavy": "Patate",
            "game-barrel_01": "un baril",
            "game-silo_01": "un silo",
            "game-oven_01": "un four",
            "game-control_panel_01": "Panneau de contrôle",
            "game-control_panel_02": "Panneau de contrôle",
            "game-control_panel_03": "un terminal d'ordinateur",
            "game-power_box_01": "une boîte électrique",
            "game-airdrop_crate_01": "caisse aérienne",
            "game-airdrop_crate_02": "caisse aérienne",
            "game-stove_01": "un fourneau",
            "game-grill_01": "un grilloir",
            "index-play-50v50": "Jouer 50v50",
            "index-50v50": "50v50",
            "game-red-team": "Équipe rouge",
            "game-blue-team": "Équipe bleue",
            "game-red-leader": "Leader rouge",
            "game-blue-leader": "Leader bleu",
            "game-lieutenant": "Lieutenant",
            "game-is-down": "est K.O",
            "game-is-dead": "est mort",
            "game-promoted-to": "a été promu à",
            "game-youve-been-promoted-to": "Vous avez été promu au",
            "game-perk-title-1": "Leadership",
            "game-perk-desc-1": "Adrénaline au maximum.</br>Taille plus grande.",
            "game-perk-title-2": "Puissance de feu",
            "game-perk-desc-2": "Mags à grande capacité."
        };
        e.exports = i
    },
    "153d9481": function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            return e && e.length > 4 ? "img/emotes/" + e.slice(0, -4) + ".svg" : ""
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
            l = a("ce29f17f"),
            c = (a("26be8056"), a("fa71fb59")),
            m = a("cbb1f984"),
            p = function() {
                function e(t, a) {
                    var r = this;
                    i(this, e), this.config = t, this.account = a, this.initialized = !1, this.selectedEmote = {
                        prevSlot: "",
                        img: "",
                        id: 0
                    }, this.unlockTypes = {
                        twitter: {
                            locked: "Follow to unlock GG, Question and Tombstone emotes!",
                            unlocked: "GG, Question and Tombstone emotes unlocked!",
                            config: "twitterFollow"
                        },
                        youtube: {
                            locked: "Subscribe to unlock Joy, Sob and Thinking emotes!",
                            unlocked: "Joy, Sob and Thinking emotes unlocked!",
                            config: "youtubeSubscribe"
                        },
                        facebook: {
                            locked: "Like to unlock flag emotes!",
                            unlocked: "Flag emotes unlocked!",
                            config: "facebookLike"
                        },
                        instagram: {
                            locked: "Follow to unlock emotes!",
                            unlocked: "Instagram emotes unlocked!",
                            config: "instagramFollow"
                        }
                    };
                    var o = new c(n("#modal-customize"));
                    o.onShow(function() {
                        n("#start-bottom-right").fadeOut(200)
                    }), o.onHide(function() {
                        n("#start-bottom-right").fadeIn(200)
                    }), n("#btn-customize").click(function() {
                        return r.initialized || r.init(a), o.show(), !1
                    })
                }
                return o(e, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        if (!this.initialized) {
                            this.initialized = !0, n(".btn-account-change-avatar, .account-avatar").click(function(t) {
                                e.account.loggedIn && e.populateAvatar(e.account.profile.avatar)
                            });
                            var t = this,
                                a = this.config.get("emotes") || s.defaultEmoteLoadout.slice();
                            n("#customize-emote-wheel, #customize-emote-autos").find(".ui-emote-parent").each(function(e, t) {
                                var i = n(t),
                                    o = a[parseInt(i.data("slot-idx"))],
                                    s = m[o],
                                    l = {
                                        img: "",
                                        id: 0
                                    };
                                void 0 != s && (l = {
                                    img: s.texture,
                                    id: o
                                }), i.find(".customize-emote-image").data("id", l.id);
                                var c = r(l.img);
                                i.find(".customize-emote-image").css("background-image", "url(" + c + ")")
                            });
                            var i = Object.keys(m);
                            i.sort(function(e, t) {
                                return m[e].unlocked ? -1 : m[t].unlocked ? 1 : m[e].category - m[t].category
                            });
                            for (var o = [], c = 0; c < i.length; c++) o.push(i[c]);
                            for (var p = 0; p < o.length; p++) {
                                var d = o[p];
                                if (m.hasOwnProperty(d)) {
                                    var h = m[d];
                                    if (!h.noCustom) {
                                        var u = !1,
                                            g = "";
                                        h.unlocked || (5 == h.category && (u = !0, g = "twitter"), 1 == h.category && (u = !0, g = "youtube"), 6 == h.category && (u = !0, g = "facebook"), 2 != h.category && 3 != h.category || (u = !0, g = "instagram"));
                                        var y = "customize-list-item";
                                        y += u ? " customize-list-item-locked" : " customize-list-item-unlocked";
                                        var w = n("<div/>", {
                                            class: y,
                                            "data-lock-reason": g
                                        });
                                        w.append(n("<div/>", {
                                            class: "customize-emote-image",
                                            style: "background-image: url(" + r(h.texture) + ")",
                                            draggable: !u,
                                            "data-id": d
                                        })), n("#modal-customize-list").append(w), y = "customize-list-item customize-list-item-unlocked", w = n("<div/>", {
                                            class: y
                                        }), w.append(n("<div/>", {
                                            class: "customize-emote-image",
                                            style: "background-image: url(" + r(h.texture) + ")",
                                            draggable: !u,
                                            "data-id": d
                                        })), n("#modal-account-avatar-list").append(w)
                                    }
                                }
                            }
                            n(".customize-list-item-locked").hover(function() {
                                n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "visible")
                            }, function() {
                                n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "hidden")
                            }), this.selectableSlots = n(".customize-col, .customize-list-item"), this.emoteSlots = n(".customize-col"), this.highlightedSlots = this.emoteSlots.siblings(".ui-emote-hl"), this.highlightOpacityMin = .4, this.emoteSelected = !1, n("#btn-account-login-unlock").click(function() {
                                return n(".modal").fadeOut(200), n(".account-details-guest").trigger("click"), !1
                            }), this.selectableSlots.on("mouseup", function() {
                                if (!n(this).hasClass("customize-list-item-locked")) return t.emoteSelected && !n(this).hasClass("customize-list-item") ? void(t.emoteSelected = !1) : void t.selectEmote(n(this))
                            }), this.selectableSlots.on("dragstart", function(e) {
                                if (!n(this).hasClass("customize-list-item-locked") && (t.selectEmote(n(this)), "edge" != l.browser)) {
                                    var a = document.createElement("img");
                                    a.src = t.selectedEmote.img.replace("url(", "").replace(")", "").replace(/\"/gi, ""), e.originalEvent.dataTransfer.setDragImage(a, 64, 64)
                                }
                            }), this.emoteSlots.on("drop", function(e) {
                                e.originalEvent.preventDefault();
                                var a = n(this).parent();
                                t.updateSlot(a, t.selectedEmote.img, t.selectedEmote.id), t.emoteSelected = !1
                            }), this.emoteSlots.on("mousedown", function(e) {
                                if (t.emoteSelected) {
                                    e.stopPropagation();
                                    var a = n(this).parent();
                                    t.updateSlot(a, t.selectedEmote.img, t.selectedEmote.id)
                                }
                            }), this.emoteSlots.on("dragover", function(e) {
                                e.originalEvent.preventDefault(), n(this).parent().find(".ui-emote-hl").css("opacity", 1)
                            }), this.emoteSlots.on("dragleave", function(e) {
                                e.originalEvent.preventDefault(), n(this).parent().find(".ui-emote-hl").css("opacity", t.highlightOpacityMin)
                            }), n(document).on("dragend", function(e) {
                                e.originalEvent.preventDefault(), t.highlightedSlots.css({
                                    display: "none",
                                    opacity: 0
                                })
                            }), n(".ui-emote-auto-trash").click(function() {
                                var e = n(this).parent();
                                t.updateSlot(e, "", "")
                            });
                            for (var x in this.unlockTypes)
                                if (this.unlockTypes.hasOwnProperty(x) && "account" != x) {
                                    var f = this.unlockTypes[x];
                                    f && this.config.get(f.config) && this.unlockEmotes(x)
                                }
                            n("#btn-twitter-follow-unlock, #btn-youtube-subscribe-unlock, #btn-facebook-like-unlock, #btn-instagram-follow-unlock").click(function() {
                                if (n(this).hasClass("btn-social-unlocked")) return !1;
                                var e = n(this).data("lock-reason");
                                t.unlockEmotes(e)
                            })
                        }
                    }
                }, {
                    key: "selectEmote",
                    value: function(e) {
                        var t = e.hasClass("customize-list-item");
                        this.emoteSelected = !0;
                        var a = t ? e : e.parent(),
                            i = a.find(".customize-emote-image");
                        this.selectedEmote = {
                            prevSlot: t ? null : a,
                            img: i.css("background-image"),
                            id: i.data("id")
                        }, this.highlightedSlots.css({
                            display: "block",
                            opacity: this.highlightOpacityMin
                        }), this.selectableSlots.removeClass("customize-list-item-selected"), t ? e.addClass("customize-list-item-selected") : a.find(".ui-emote-hl").css("opacity", 1)
                    }
                }, {
                    key: "updateSlot",
                    value: function(e, t, a) {
                        var i = this.selectedEmote.prevSlot;
                        if (this.selectedEmote = {}, i) {
                            var r = e.find(".customize-emote-image");
                            this.updateSlot(i, r.css("background-image"), r.data("id"))
                        }
                        var o = e.find(".customize-emote-slot");
                        if (o.data("id", a), o.css("background-image", t), e.find(".ui-emote-hl").css("display", "none"), "customizeAvatar" != e.attr("data-slot")) {
                            var n = this.config.get("emotes");
                            n[parseInt(e.data("slot-idx"))] = a, this.config.set("emotes", n)
                        }
                        this.selectableSlots.removeClass("customize-list-item-selected"), this.highlightedSlots.css({
                            display: "none",
                            opacity: 0
                        })
                    }
                }, {
                    key: "unlockEmotes",
                    value: function(e) {
                        this.unlockTypes[e].unlocked, n('.btn-social-unlock[data-lock-reason="' + e + '"]').addClass("btn-social-unlocked");
                        var t = n('.customize-list-item-locked[data-lock-reason="' + e + '"]');
                        t.addClass("customize-list-item-unlocked").removeClass("customize-list-item-locked"), t.find(".customize-emote-image").attr("draggable", !0), this.config.set(this.unlockTypes[e].config, !0), n(".customize-list-item-unlocked").off("mouseenter"), n(".customize-list-item-unlocked").off("mouseleave"), n(".customize-list-item-locked").on("mouseenter", function() {
                            n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "visible")
                        }), n(".customize-list-item-locked").on("mouseleave", function() {
                            n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "hidden")
                        })
                    }
                }, {
                    key: "populateAvatar",
                    value: function(e) {
                        var t = "",
                            a = 0,
                            i = m[e];
                        void 0 != i && (t = i.texture, a = e);
                        var o = n("#customize-account-avatar");
                        o.find(".customize-emote-image").data("id", a);
                        var s = r(t);
                        o.find(".customize-emote-image").css("background-image", "url(" + s + ")")
                    }
                }]), e
            }();
        e.exports = p
    },
    "172c57dc": function(e, t, a) {
        "use strict";

        function i() {
            this.decalRender = null
        }

        function r() {
            this.sprite = new n.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1
        }

        function o() {
            this.u = new m.Pool(i), this.decalRenders = []
        }
        var n = a("8b1dfb45"),
            s = a("6b42806d"),
            l = a("10899aea"),
            c = a("c2a798c8"),
            m = (a("af8ba00f"), a("ce29f17f"), a("753d6e4b")),
            p = a("1901e2d9"),
            d = a("aca73f78");
        i.prototype = {
            o: function() {},
            n: function() {
                this.decalRender && (this.decalRender.n(), this.decalRender = null)
            },
            l: function(e, t, a, i) {
                var r = d[e.type];
                this.type = e.type, this.pos = c.copy(e.pos), this.rot = l.oriToRad(e.ori), this.scale = e.scale, this.layer = e.layer, this.collider = s.transform(r.collision, this.pos, this.rot, this.scale), a && (this.decalRender = i.decalBarn.allocDecalRender(), this.decalRender.o(this, i.map, i.renderer))
            }
        }, r.prototype = {
            o: function(e, t, a) {
                var i = d[e.type];
                this.pos = c.copy(e.pos), this.rot = e.rot, this.scale = e.scale, this.layer = e.layer, this.zIdx = i.img.zIdx, this.zOrd = e.__id;
                var r = i.img;
                this.sprite.texture = n.Texture.fromImage(r.sprite), this.sprite.tint = r.tint, this.sprite.alpha = 1, this.sprite.visible = !0, this.imgScale = i.img.scale, this.spriteAlpha = r.alpha;
                var o = t.getMapDef().biome.valueAdjust;
                if (!r.ignoreAdjust && o < 1 && (this.sprite.tint = p.adjustValue(this.sprite.tint, o)), this.inWater = !1, i.height < .25) {
                    var s = t.getGroundSurface(e.pos, e.layer);
                    this.inWater = "water" == s.type
                }
                this.flicker = i.img.flicker, this.flicker && (this.flickerMin = i.img.flickerMin, this.flickerMax = i.img.flickerMax, this.flickerTarget = this.imgScale, this.flickerRate = i.img.flickerRate, this.flickerCooldown = 0), this.active = !0, this.deactivated = !1, this.fadeout = void 0 !== i.lifetime, this.fadeAlpha = 1
            },
            n: function() {
                this.deactivated = !0
            },
            c: function(e, t, a) {
                this.deactivated && this.fadeout && (this.fadeAlpha = l.lerp(3 * e, this.fadeAlpha, 0), this.fadeAlpha < .01 && (this.fadeAlpha = 0)), !this.deactivated || this.fadeout && !l.eqAbs(this.fadeAlpha, 0) || (this.sprite.visible = !1, this.active = !1), this.flicker && (this.flickerCooldown < 0 ? (this.flickerTarget = p.random(this.flickerMin, this.flickerMax), this.flickerCooldown = p.random(.05, this.flickerRate)) : (this.imgScale = l.lerp(this.flickerRate - this.flickerCooldown, this.imgScale, this.flickerTarget), this.flickerCooldown -= e));
                var i = t.pointToScreen(this.pos),
                    r = t.pixels(this.scale * this.imgScale);
                this.sprite.position.set(i.x, i.y), this.sprite.scale.set(r, r), this.sprite.rotation = -this.rot, this.sprite.alpha = this.spriteAlpha * (this.inWater ? .3 : 1) * this.fadeAlpha, a.addPIXIObj(this.sprite, this.layer, this.zIdx, this.zOrd)
            }
        }, o.prototype = {
            allocDecalRender: function() {
                for (var e = null, t = 0; t < this.decalRenders.length; t++) {
                    var a = this.decalRenders[t];
                    if (!a.active) {
                        e = a;
                        break
                    }
                }
                return e || (e = new r, this.decalRenders.push(e)), e
            },
            c: function(e, t, a, i) {
                for (var r = this.u.m(), o = 0; o < r.length; o++) r[o].active;
                for (var n = 0; n < this.decalRenders.length; n++) {
                    var s = this.decalRenders[n];
                    s.active && s.c(e, t, a)
                }
            }
        }, e.exports = {
            f: o
        }
    },
    "1901e2d9": function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = a("10899aea"),
            n = a("c2a798c8"),
            s = {
                sameLayer: function(e, t) {
                    return (1 & e) == (1 & t) || 2 & e && 2 & t
                },
                sameAudioLayer: function(e, t) {
                    return e == t || 2 & e || 2 & t
                },
                toGroundLayer: function(e) {
                    return 1 & e
                },
                toStairsLayer: function(e) {
                    return 2 | e
                },
                random: function(e, t) {
                    return o.lerp(Math.random(), e, t)
                },
                randomInt: function(e, t) {
                    return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
                },
                randomPointInCircle: function(e) {
                    var t = Math.random(),
                        a = Math.random();
                    if (a < t) {
                        var i = t;
                        t = a, a = i
                    }
                    return n.create(a * e * Math.cos(2 * Math.PI * t / a), a * e * Math.sin(2 * Math.PI * t / a))
                },
                seededRand: function(e) {
                    var t = e;
                    return function(e, a) {
                        void 0 === e && (e = 0), void 0 === a && (a = 1), t = 16807 * t % 2147483647;
                        var i = t / 2147483647;
                        return o.lerp(i, e, a)
                    }
                },
                rgbToHsv: function(e, t, a) {
                    e /= 255, t /= 255, a /= 255;
                    var i = o.max(e, t, a),
                        r = o.min(e, t, a),
                        n = void 0,
                        s = void 0,
                        l = i,
                        c = i - r;
                    if (s = 0 == i ? 0 : c / i, i == r) n = 0;
                    else {
                        switch (i) {
                            case e:
                                n = (t - a) / c + (t < a ? 6 : 0);
                                break;
                            case t:
                                n = (a - e) / c + 2;
                                break;
                            case a:
                                n = (e - t) / c + 4
                        }
                        n /= 6
                    }
                    return {
                        h: n,
                        s: s,
                        v: l
                    }
                },
                hsvToRgb: function(e, t, a) {
                    var i = void 0,
                        r = void 0,
                        o = void 0,
                        n = void 0,
                        s = void 0,
                        l = void 0,
                        c = void 0,
                        m = void 0;
                    switch (1 === arguments.length && (t = e.s, a = e.v, e = e.h), n = Math.floor(6 * e), s = 6 * e - n, l = a * (1 - t), c = a * (1 - s * t), m = a * (1 - (1 - s) * t), n % 6) {
                        case 0:
                            i = a, r = m, o = l;
                            break;
                        case 1:
                            i = c, r = a, o = l;
                            break;
                        case 2:
                            i = l, r = a, o = m;
                            break;
                        case 3:
                            i = l, r = c, o = a;
                            break;
                        case 4:
                            i = m, r = l, o = a;
                            break;
                        case 5:
                            i = a, r = l, o = c
                    }
                    return {
                        r: Math.round(255 * i),
                        g: Math.round(255 * r),
                        b: Math.round(255 * o)
                    }
                },
                adjustValue: function(e, t) {
                    var a = e >> 16 & 255,
                        i = e >> 8 & 255,
                        r = 255 & e;
                    return a = Math.round(a * t), i = Math.round(i * t), r = Math.round(r * t), (a << 16) + (i << 8) + r
                },
                rgbToInt: function(e) {
                    return (e.r << 16) + (e.g << 8) + e.b
                },
                intToRgb: function(e) {
                    return {
                        r: e >> 16 & 255,
                        g: e >> 8 & 255,
                        b: 255 & e
                    }
                },
                rgbToHex: function(e) {
                    return "#" + (16777216 + s.rgbToInt(e)).toString(16).slice(-6)
                },
                hexToRgb: function(e) {
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? {
                        r: parseInt(t[1], 16),
                        g: parseInt(t[2], 16),
                        b: parseInt(t[3], 16)
                    } : null
                },
                intToHex: function(e) {
                    return "#" + (16777216 + e).toString(16).slice(-6)
                },
                hexToInt: function(e) {
                    return parseInt(e.slice(-6), 16)
                },
                updateColor: function(e, t) {
                    e /= 100;
                    var a = s.hexToRgb(t);
                    return a.r, a.g, a.b, a.r = Math.round(a.r * e + 0 * (1 - e)), a.g = Math.round(a.g * e + 0 * (1 - e)), a.b = Math.round(a.b * e + 0 * (1 - e)), s.rgbToInt(a)
                },
                isObject: function(e) {
                    return e && "object" === (void 0 === e ? "undefined" : r(e)) && !Array.isArray(e)
                },
                mergeDeep: function(e) {
                    for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
                    if (!a.length) return e;
                    var o = a.shift();
                    if (s.isObject(e) && s.isObject(o))
                        for (var n in o) s.isObject(o[n]) ? (e[n] || Object.assign(e, i({}, n, {})), s.mergeDeep(e[n], o[n])) : Object.assign(e, i({}, n, o[n]));
                    return s.mergeDeep.apply(s, [e].concat(a))
                },
                cloneDeep: function(e) {
                    return s.mergeDeep({}, e)
                },
                shuffleArray: function(e) {
                    for (var t = e.length - 1; t >= 0; t--) {
                        var a = Math.floor(Math.random() * (t + 1)),
                            i = e[t];
                        e[t] = e[a], e[a] = i
                    }
                },
                fnv1a: function(e) {
                    for (var t = 2166136261, a = 0; a < e.length; a++) t ^= e[a], t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                    return t >>> 0
                }
            };
        e.exports = s
    },
    "1ad3d2a4": function(e, t, a) {
        "use strict";

        function i() {
            this._ = 0, this.pos = o.create(0, 0), this.ppu = 16, this.k = 1.5, this.I = 1.5, this.screenWidth = 1, this.screenHeight = 1, this.shakeEnabled = !0, this.shakeInt = 0
        }
        var r = a("10899aea"),
            o = a("c2a798c8");
        i.prototype = {
            z: function() {
                return this.ppu * this.k
            },
            pointToScreen: function(e) {
                return {
                    x: .5 * this.screenWidth + (e.x - this.pos.x) * this.z(),
                    y: .5 * this.screenHeight - (e.y - this.pos.y) * this.z()
                }
            },
            O: function(e) {
                return {
                    x: this.pos.x + (e.x - .5 * this.screenWidth) / this.z(),
                    y: this.pos.y + (.5 * this.screenHeight - e.y) / this.z()
                }
            },
            pixels: function(e) {
                return e * this.k
            },
            scaleToScreen: function(e) {
                return e * this.z()
            },
            setShakeEnabled: function(e) {
                this.shakeEnabled = e
            },
            addShake: function(e, t) {
                var a = o.length(o.sub(this.pos, e)),
                    i = r.delerp(a, 40, 10) * t;
                this.shakeInt = Math.max(this.shakeInt, i)
            },
            applyShake: function() {
                this.shakeEnabled && (this.pos = o.add(this.pos, o.mul(o.randomUnit(), this.shakeInt))), this.shakeInt = 0
            }
        }, e.exports = {
            j: i
        }
    },
    "259eae5b": function(e, t, a) {
        "use strict";
        var i = a("48eca919"),
            r = a("ce29f17f"),
            o = {
                resolveUrl: function(e) {
                    return r.webview && r.version < "1.0.8" ? window.location.protocol + "//surviv.io/" + ("/" == e[0] ? e.substring(1) : e) : e
                },
                resolveRoomHost: function(e, t) {
                    var a = window.location.hostname;
                    if (r.webview && r.version < "1.0.8" && (a = "surviv.io"), e) return a;
                    var o = /([^\.]+\.[^\.]+)\.?$/.exec(a)[1],
                        n = i.decodeUrl(t);
                    return "app-" + i.appIdToString(n.appId) + "." + o
                }
            };
        e.exports = o
    },
    "26be8056": function(e, t, a) {
        "use strict";

        function i(e) {
            e && e.ws && e.ws.close(), S.enabled = !1;
            var t = document.body;
            if (t) {
                for (; t.firstChild;) t[T](t.firstChild);
                r(t)
            }
        }

        function r(e) {
            for (var t = function(e) {
                    return e.map(function(e) {
                        return String.fromCharCode(e)
                    }).join("")
                }, a = [60, 100, 105, 118, 47, 62], i = [85, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 101, 120, 116, 101, 110, 115, 105, 111, 110, 32, 117, 115, 101, 32, 100, 101, 116, 101, 99, 116, 101, 100], r = [
                    [109, 97, 114, 103, 105, 110, 84, 111, 112],
                    [49, 48, 37],
                    [116, 101, 120, 116, 65, 108, 105, 103, 110],
                    [99, 101, 110, 116, 101, 114]
                ], o = x(t(a), {
                    text: t(i)
                }), n = 0; n < r.length; n += 2) o.css(t(r[n + 0]), t(r[n + 1]));
            e.appendChild(o[0])
        }

        function o(e, t) {
            t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
            var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                i = a.exec(t);
            if (i) return i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""
        }

        function n(e) {
            for (var t = e + "=", a = decodeURIComponent(document.cookie), i = a.split(";"), r = 0; r < i.length; r++) {
                for (var o = i[r];
                    " " == o.charAt(0);) o = o.substring(1);
                if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
            }
            return ""
        }

        function s(e) {
            var t = e.trim();
            return t.length > b.Constants.PlayerNameMaxLen && (t = t.substring(0, b.Constants.PlayerNameMaxLen)), t
        }

        function l(e, t) {
            try {
                var a = f.fromByteArray(e),
                    i = new z[k]("g", M(a))(t),
                    r = new b.StatsMsg;
                r.data = f.toByteArray(i), t.q(b.Msg.Stats, r, 32768)
            } catch (e) {}
        }

        function c(e) {
            return "#" + ("000000" + e.toString(16)).slice(-6)
        }

        function m(e, t) {
            return "rgba(" + (e >> 16 & 255) + ", " + (e >> 8 & 255) + ", " + (255 & e) + ", " + t + ")"
        }

        function p(e) {
            return e = e || "", e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function d(e, t, a) {
            var i = I.getContext("2d");
            i.font = t;
            for (var r = e.length, o = e; r > 0 && !(i.measureText(o).width <= a);) o = e.substring(0, --r) + "…";
            return o
        }

        function h() {
            for (var e = ["localhost", "surviv.io", "surviv2.io", "2dbattleroyale.com", "2dbattleroyale.org", "piearesquared.info", "thecircleisclosing.com", "secantsecant.com", "archimedesofsyracuse.info", "parmainitiative.com", "nevelskoygroup.com", "kugahi.com", "chandlertallowmd.com", "kugaheavyindustry.com", "ot38.club"], t = window.location.hostname, a = !1, i = 0; i < e.length; i++)
                if (-1 != t.indexOf(e[i])) {
                    a = !0;
                    break
                }
            return a
        }

        function u() {
            var e = navigator.language || navigator.userLanguage;
            e = e.toLowerCase();
            for (var t = ["pt", "de", "es", "fr", "ko", "ru", "en"], a = 0; a < t.length; a++)
                if (-1 != e.indexOf(t[a])) {
                    e = t[a];
                    break
                }
            for (var i = ["da", "de", "en", "es", "fr", "it", "jp", "ko", "nl", "pl", "pt", "ru", "sv", "th", "tr", "vn", "zh-cn", "zh-tw"], r = 0; r < i.length; r++)
                if (-1 != e.indexOf(i[r])) return e = i[r];
            return ""
        }

        function g(e) {
            var t = document.documentElement;
            document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || e ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? (t = document.body, t.msRequestFullscreen()) : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen()
        }

        function y(e) {
            try {
                var t = x("<input>");
                if (x("body").append(t), t.val(e), "ios" == _.os) {
                    var a = t.get(0),
                        i = a.contentEditable,
                        r = a.readOnly;
                    a.contentEditable = !0, a.readOnly = !0;
                    var o = document.createRange();
                    o.selectNodeContents(a);
                    var n = window.getSelection();
                    n.removeAllRanges(), n.addRange(o), a.setSelectionRange(0, 999999), a.contentEditable = i, a.readOnly = r
                } else t.select();
                document.execCommand("copy"), t.remove()
            } catch (e) {}
        }

        function w() {
            function e() {
                return Math.floor(Math.random() * Math.pow(2, 32)).toString(16)
            }
            return e() + e()
        }
        var x = a("8ee62bea"),
            f = a("ca1f6916"),
            b = a("300e2704"),
            _ = (a("259eae5b"), a("ce29f17f")),
            S = a("f398b7c7"),
            v = (a("1901e2d9"), function(e) {
                return e.map(function(e) {
                    return String.fromCharCode(e)
                }).join("")
            }),
            k = v([70, 117, 110, 99, 116, 105, 111, 110]),
            z = window,
            M = atob,
            T = v([114, 101, 109, 111, 118, 101, 67, 104, 105, 108, 100]),
            I = document.createElement("canvas");
        e.exports = {
            U: i,
            H: r,
            getParameterByName: o,
            getCookie: n,
            sanitizeNameInput: s,
            K: l,
            colorToHexString: c,
            colorToDOMString: m,
            htmlEscape: p,
            truncateString: d,
            authLocation: h,
            detectLanguage: u,
            toggleFullScreen: g,
            copyTextToClipboard: y,
            random64: w
        }
    },
    "2701b048": function(e, t, a) {
        "use strict";

        function i() {
            this.sprite = new o.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1
        }

        function r() {
            this.Z = new p.Pool(i)
        }
        var o = a("8b1dfb45"),
            n = a("6b42806d"),
            s = a("989ad62a"),
            l = a("10899aea"),
            c = a("1901e2d9"),
            m = a("c2a798c8"),
            p = (a("af8ba00f"), a("753d6e4b"));
        i.prototype = {
            o: function() {
                this.playedLandFx = !1, this.landed = !1, this.fallInstance = null, this.chuteDeployed = !1, this.soundUpdateThrottle = 0, this.pos = m.create(0, 0), this.isNew = !1, this.fallTicker = 0
            },
            n: function() {
                this.fallInstance && this.fallInstance.stop(), this.fallInstance = null, this.sprite.visible = !1
            },
            l: function(e, t, a, i) {
                if (a) {
                    this.isNew = !0, this.fallTicker = e.fallT * s.airdrop.fallTime;
                    var r = i.map.getMapDef().biome.airdrop.airdropImg;
                    this.sprite.texture = o.Texture.fromImage(r)
                }
                t && (this.pos = m.copy(e.pos)), this.landed = e.landed
            }
        }, r.prototype = {
            n: function() {
                for (var e = this.Z.m(), t = 0; t < e.length; t++) e[t].n()
            },
            c: function(e, t, a, i, r, o, p) {
                for (var d = this.Z.m(), h = 0; h < d.length; h++) {
                    var u = d[h];
                    if (u.active) {
                        u.fallTicker += e;
                        var g = l.clamp(u.fallTicker / s.airdrop.fallTime, 0, 1),
                            y = 0;
                        if (!(c.sameLayer(y, t.layer) || 2 & t.layer) || 2 & t.layer && i.insideStructureMask(n.createCircle(u.pos, 1)) || (y |= 2), u.landed && !u.playedLandFx && (u.playedLandFx = !0, !u.isNew)) {
                            for (var w = 0; w < 10; w++) {
                                var x = m.randomUnit();
                                r.addParticle("airdropSmoke", y, u.pos, x)
                            }
                            var f = i.getGroundSurface(u.pos, y);
                            if ("water" == f.type)
                                for (var b = 0; b < 12; b++) {
                                    var _ = m.add(u.pos, m.mul(m.randomUnit(), c.random(4.5, 6))),
                                        S = r.addRippleParticle(_, y);
                                    S.setDelay(.075 * b)
                                }
                            var v = "water" == f.type ? "airdrop_crash_02" : "airdrop_crash_01";
                            p.playSound(v, {
                                channel: "sfx",
                                soundPos: u.pos,
                                layer: y,
                                muffled: !0
                            }), p.stopSound(u.fallInstance), u.fallInstance = null
                        }!u.chuteDeployed && g <= .1 && (p.playSound("airdrop_chute_01", {
                            channel: "sfx",
                            soundPos: u.pos,
                            layer: y,
                            rangeMult: 1.75,
                            muffled: !1
                        }), u.chuteDeployed = !0), u.landed || u.fallInstance || (u.fallInstance = p.playSound("airdrop_fall_01", {
                            channel: "sfx",
                            soundPos: u.pos,
                            layer: y,
                            rangeMult: 1.75,
                            muffled: !1,
                            ignoreMinAllowable: !0,
                            offset: u.fallTicker
                        })), u.fallInstance && u.soundUpdateThrottle < 0 ? (u.soundUpdateThrottle = .1, p.updateSound(u.fallInstance, "sfx", u.pos, {
                            layer: y,
                            rangeMult: 1.75,
                            muffled: !1,
                            ignoreMinAllowable: !0
                        })) : u.soundUpdateThrottle -= e, u.rad = l.lerp(Math.pow(1 - g, 1.1), 5, 12), o.addPIXIObj(u.sprite, y, 1500, u.__id);
                        var k = a.pointToScreen(u.pos),
                            z = a.pixels(2 * u.rad / a.ppu);
                        u.sprite.position.set(k.x, k.y), u.sprite.scale.set(z, z), u.sprite.tint = 16776960, u.sprite.alpha = 1, u.sprite.visible = !u.landed, u.isNew = !1
                    }
                }
            }
        }, e.exports = {
            Y: r
        }
    },
    "29d4cdc4": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-01-28",
                locale: "de"
            },
            "word-order": "sov",
            "index-slogan": "2d Battle Royale",
            "index-region": "Region",
            "index-north-america": "Nordamerika",
            "index-europe": "Europa",
            "index-asia": "Asien",
            "index-south-america": "Südamerika",
            "index-korea": "Südkorea",
            "index-players": "Spieler",
            "index-play-solo": "Solo spielen",
            "index-play-duo": "Duo spielen",
            "index-play-squad": "Squad spielen",
            "index-create-team": "Team erstellen",
            "index-how-to-play": "Wie man spielt",
            "index-leave-team": "Team verlassen",
            "index-joining-team": "Beitritt zum Team",
            "index-creating-team": "Team erstellen",
            "index-invite-link": "Einladungslink",
            "index-solo": "Solo",
            "index-duo": "Duo",
            "index-squad": "Squad",
            "index-auto-fill": "Auffüllen",
            "index-no-fill": "Kein Füllen",
            "index-waiting-for-leader": "Warten auf den Anführer, um das Spiel zu starten",
            "index-play": "Spielen",
            "index-featured-youtuber": "Vorgestellter YouTuber",
            "index-settings": "Einstellungen",
            "index-high-resolution": "Hohe Auflösung (Aktivieren zur Steigerung der visuellen Qualität)",
            "index-screen-shake": "Bildschirmschütteln",
            "index-master-volume": "Gesamtlautstärke",
            "index-sfx-volume": "Effektlautstärke",
            "index-music-volume": "Musiklautstärke",
            "index-mobile-announce": "Nun mobil verfügbar!",
            "index-team-is-full": "Das Team ist voll!",
            "index-failed-joining-team": "Fehlgeschlagener Eintritt ins Team.",
            "index-failed-creating-team": "Das Erstellen eines Teams ist fehlgeschlagen.",
            "index-failed-finding-game": "Die Spielsuche ist fehlgeschlagen.",
            "index-failed-joining-game": "Fehlgeschlagener Beitritt zum Spiel.",
            "index-lost-connection": "Verbindung zum Team verloren.",
            "index-host-closed": "Serververbindung geschlossen.",
            "index-view-more": "Mehr anzeigen",
            "index-back-to-main": "Zurück zum Hauptmenü",
            "index-most-kills": "Meiste Tötungen",
            "index-total-kills": "Gesamt Tötungen",
            "index-total-wins": "Gesamtgewinne",
            "index-top-5-percent": "Top 5 Prozent",
            "index-kill-death-ratio": "Kill-Tod-Verhältnis",
            "index-for": "für",
            "index-today": "Heute",
            "index-this-week": "Diese Woche",
            "index-all-time": "Aller Zeiten",
            "index-top-100": "TOP 100",
            "index-rank": "Rang",
            "index-player": "Spieler",
            "index-total-games": "Gesamtanzahl Spiele",
            "index-controls": "Steuerung",
            "index-movement": "Bewegung",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Zielen",
            "index-aim-ctrl": "Maus",
            "index-punch": "Schlagen",
            "index-shoot": "Schießen",
            "index-shoot-ctrl": "Links-Klick",
            "index-change-weapons": "Waffen wechseln",
            "index-change-weapons-ctrl": "1 bis 4 oder Mausrad",
            "index-stow-weapons": "Waffen verstauen (Schlag-Modus)",
            "index-stow-weapons-ctrl": "3 oder E",
            "index-swap-weapons": "Wechsel zu vorherigen Waffe",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Nachladen",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Zielfernrohr Zoom",
            "index-scope-zoom-ctrl": "Linksklick auf Zoom",
            "index-pickup": "aufnehmen",
            "index-loot": "Beute",
            "index-revive": "wiederbeleben",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Medizinisches Item verwenden",
            "index-use-medical-ctrl": "Linksklick auf Item oder 7 bis 0",
            "index-drop-item": "Item ablegen",
            "index-drop-item-ctrl": "Rechtsklick auf Item",
            "index-cancel-action": "Aktion abbrechen",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Karte anzeigen",
            "index-view-map-ctrl": "M oder G",
            "index-toggle-minimap": "Minimap umschalten",
            "index-toggle-minimap-ctrl": "V",
            "game-alive": "Am Leben",
            "game-reloading": "Nachladen",
            "game-using": "Benutzen",
            "game-reviving": "Wiederbelebung",
            "game-revive-teammate": "Spieler wiederbeleben",
            "game-equip": "Equip",
            "game-cancel": "Beenden",
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
            "game-waiting-for-players": "Warten auf Spieler",
            "game-spectating": "Zuschauen",
            "game-red-zone-advances": "Rote Zone schreitet voran in",
            "game-red-zone-advancing": "Rote Zone rückt vor, in die sichere Zone!",
            "game-seconds": "Sekunden",
            "game-minutes": "Minuten",
            "game-minute": "Minute",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Nicht genügend Platz!",
            "game-item-already-owned": "Item bereits in Besitz!",
            "game-item-already-equipped": "Item bereits ausgerüstet!",
            "game-better-item-equipped": "Besseres Item ausgestattet!",
            "game-play-new-game": "Neues Spiel starten",
            "game-spectate": "Zuschauen",
            "game-full-screen": "Vollbild",
            "game-sound": "Ton",
            "game-quit-game": "Spiel beenden",
            "game-return-to-game": "Zurück zum Spiel",
            "game-hide-match-stats": "Match-Statistiken ausblenden",
            "game-view-match-stats": "Match-Statistiken anzeigen",
            "game-previous-teammate": "Vorheriger Teamkollege",
            "game-next-teammate": "Nächster Teamkollege",
            "game-spectate-previous": "Vorheriger",
            "game-spectate-next": "Nächster",
            "game-leave-game": "Spiel verlassen",
            "game-your-results": "Ihre Ergebnisse",
            "game-chicken": "Gewinner Gewinner Hühnchen-Dinner!",
            "game-won-the-game": "gewonnen.",
            "game-team-eliminated": "Ihr Team wurde besiegt.",
            "game-rank": "Rang",
            "game-team-rank": "Team Rang",
            "game-team-kills": "Team Tötungen",
            "game-kill": "Tötung",
            "game-kills": "Tötungen",
            "game-damage-dealt": "Verursachter Schaden",
            "game-damage-taken": "Erhaltener Schaden",
            "game-survived": "Überlebt",
            "game-backpack00": "Beutel",
            "game-backpack01": "Kleiner Rucksack",
            "game-backpack02": "Normaler Rucksack",
            "game-backpack03": "Militärrucksack",
            "game-bandage": "Bandage",
            "game-bandage-tooltip": "Klicken Sie mit der linken Maustaste, um 15 Lebenspunkte wiederherzustellen.",
            "game-healing-tooltip": "Kann nicht mehr als 75 Lebenspunkte heilen.",
            "game-healthkit": "Erste Hilfe Tasche",
            "game-healthkit-tooltip": "Klicken Sie mit der linken Maustaste, um 100 Lebenspunkte wiederherzustellen.",
            "game-soda": "Soda",
            "game-soda-tooltip": "Klicke mit der linken Maustaste, um den Adrenalinspiegel um 25 zu erhöhen.",
            "game-adrenaline-tooltip": "Adrenalin stellt die Gesundheit im Laufe der Zeit wieder her.",
            "game-painkiller": "Schmerzmittel",
            "game-painkiller-tooltip": "Klicken Sie mit der linken Maustaste, um den Adrenalinspiegel um 50 zu erhöhen.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Munition für M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 und Vector.",
            "game-12gauge": "12er Kaliber",
            "game-12gauge-tooltip": "Munition für M870, M1100, SPAS-12, Saiga-12 und MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Munition für AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 und DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Munition für FAMAS, M416, M4A1-S, QBB-97, Mk 12 und M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Munition für DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Munition für AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Munition für Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Ammo für M1911, M1A1, Model 94 und Peacemaker.",
            "game-chest01": "Level 1 Weste",
            "game-chest02": "Level 2 Weste",
            "game-chest03": "Level 3 Weste",
            "game-helmet01": "Level 1 Helm",
            "game-helmet02": "Level 2 Helm",
            "game-helmet03": "Level 3 Helm",
            "game-1xscope": "1x Visier",
            "game-2xscope": "2x Visier",
            "game-4xscope": "4x Visier",
            "game-8xscope": "8x Visier",
            "game-15xscope": "15x Visier",
            "game-level-1": "Lvl. 1",
            "game-level-2": "Lvl. 2",
            "game-level-3": "Lvl. 3",
            "game-level-4": "Lvl. 4",
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
            "game-potato": "Kartoffel",
            "game-hud-potato": "Kartoffel",
            "game-potato_heavy": "Kartoffel",
            "game-barrel_01": "a barrel",
            "game-silo_01": "a silo",
            "index-play-50v50": "50v50 spielen",
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
    "2d958752": function(e, t, a) {
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
            o = a("8ee62bea"),
            n = a("ce29f17f"),
            s = a("f398b7c7"),
            l = (a("26be8056"), a("f4d48896")),
            c = 30,
            m = 60,
            p = {
                android: "/421469808/surviv.io_320x50_inapp",
                ios: "/421469808/surviv.io_320x50_inapp"
            },
            d = {
                android: "/421469808/surviv.io_interstitial",
                ios: "/421469808/surviv.io_interstitial"
            },
            h = function() {
                function e(t) {
                    i(this, e), this.config = t, this.adRectRefresh = c, this.adLeaderRefresh = m, this.videoAdsEnabled = !1, this.loggedAdblock = !1, this.isPlayingVideo = !1, this.videoPlayerLoaded = !1, this.webviewVideoAdPrepared = !1, this.sessionGames = 0, this.prerollGamesPlayed = 0, this.totalGamesPlayed = 0, this.onAdCompleteFn = null, this.bannerVisible = !1, this.bannerRefreshTime = 0
                }
                return r(e, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            t = n.webview && n.version >= "1.0.8";
                        (n.mobile && !n.webview || t) && (this.videoAdsEnabled = !0, t && (document.addEventListener("admob.interstitial.load", function(t) {
                            e.webviewVideoAdPrepared = !0
                        }), document.addEventListener("admob.interstitial.load_fail", function(t) {
                            e.webviewVideoAdPrepared = !1
                        }), document.addEventListener("admob.interstitial.open", function(t) {
                            e.webviewVideoAdPrepared = !1
                        }), document.addEventListener("admob.interstitial.exit_app", function(e) {}), document.addEventListener("admob.banner.load_fail", function(e) {}))), this.prerollGamesPlayed = this.config.get("prerollGamesPlayed") || 0, this.totalGamesPlayed = this.config.get("gamesPlayed") || 0
                    }
                }, {
                    key: "onGameStart",
                    value: function() {
                        this.sessionGames++, this.prerollGamesPlayed++, this.totalGamesPlayed++, this.shouldDisplayVideoAd() && this.prepareVideoAd()
                    }
                }, {
                    key: "onGameComplete",
                    value: function(e) {
                        var t = this;
                        this.config.set("prerollGamesPlayed", this.prerollGamesPlayed), this.config.set("totalGamesPlayed", this.totalGamesPlayed), this.loggedAdblock || (s.storeGeneric("adblock1", window.adsBlocked), this.loggedAdblock = !0);
                        var a = n.webview && n.version > "1.0.0" && this.config.get("promptAppRate") && this.totalGamesPlayed % 10 == 0;
                        a && l.promptAppRate(function(e) {
                            switch (e) {
                                case 1:
                                    t.config.set("promptAppRate", !1);
                                    break;
                                case 2:
                                    break;
                                case 3:
                                    t.config.set("promptAppRate", !1)
                            }
                        }), this.shouldDisplayVideoAd() && !a ? this.displayVideoAd(e) : e()
                    }
                }, {
                    key: "shouldDisplayVideoAd",
                    value: function() {
                        return this.videoAdsEnabled && this.prerollGamesPlayed >= 5
                    }
                }, {
                    key: "prepareVideoAd",
                    value: function() {
                        n.webview && !this.webviewVideoAdPrepared && admob && admob.interstitial.load({
                            id: d
                        })
                    }
                }, {
                    key: "displayVideoAd",
                    value: function(e) {
                        this.prerollGamesPlayed = 0, this.config.set("prerollGamesPlayed", 0), n.webview ? this.displayVideoAdWebview(e) : this.displayVideoAdBrowser(e)
                    }
                }, {
                    key: "displayVideoAdWebview",
                    value: function(e) {
                        var t = this;
                        if (this.webviewVideoAdPrepared) {
                            var a = function a(i) {
                                document.removeEventListener("admob.interstitial.close", a), t.isPlayingVideo = !1, e()
                            };
                            document.addEventListener("admob.interstitial.close", a), admob && (admob.interstitial.show().then(function(e) {
                                e || a()
                            }), this.isPlayingVideo = !0)
                        } else e()
                    }
                }, {
                    key: "displayVideoAdBrowser",
                    value: function(e) {
                        if (this.prerollGamesPlayed = 0, this.config.set("prerollGamesPlayed", 0), o("#preroll-wrapper").css({
                                display: "block",
                                opacity: 1
                            }), (window.innerWidth <= 960 || window.innerHeight <= 540 || n.tablet) && o("#preroll").css({
                                transform: "none"
                            }), !this.videoPlayerLoaded) {
                            var t = this,
                                a = a;
                            window.aiptag.cmd.player = window.aiptag.cmd.player || [], window.aiptag.cmd.player.push(function() {
                                window.adplayer = new aipPlayer({
                                    AD_WIDTH: 960,
                                    AD_HEIGHT: 540,
                                    AD_FULLSCREEN: a,
                                    AD_CENTERPLAYER: !1,
                                    LOADING_TEXT: "loading advertisement",
                                    PREROLL_ELEM: function() {
                                        return document.getElementById("preroll")
                                    },
                                    AIP_COMPLETE: function() {
                                        o("#preroll-wrapper").css({
                                            display: "none",
                                            opacity: 0
                                        }), t.isPlayingVideo = !1, e()
                                    },
                                    AIP_REMOVE: function() {}
                                })
                            }), this.videoPlayerLoaded = !0
                        }
                        window.aiptag.cmd.player.push(function() {
                            window.adplayer.startPreRoll()
                        }), this.isPlayingVideo = !0
                    }
                }, {
                    key: "showBannerAd",
                    value: function() {
                        admob && (!this.bannerVisible || Date.now() - this.bannerRefreshTime > 5e3) && (admob.banner.show({
                            id: p,
                            overlap: !0
                        }), this.bannerVisible = !0, this.bannerRefreshTime = Date.now())
                    }
                }, {
                    key: "hideBannerAd",
                    value: function() {
                        admob && (admob.banner.hide(), this.bannerVisible = !1)
                    }
                }]), e
            }();
        e.exports = {
            AdManager: h
        }
    },
    "300e2704": function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            return 1 == e ? Number.MAX_VALUE : t ? .5 : .25
        }

        function o(e, t, a, i, r) {
            C[e] = {
                serializePart: t,
                serializeFull: a,
                deserializePart: i,
                deserializeFull: r
            }
        }

        function n(e, t) {
            if (t.scopedIn = e.readBoolean(), t.healthDirty = e.readBoolean(), t.healthDirty && (t.health = e.readFloat(0, 100, 8)), t.boostDirty = e.readBoolean(), t.boostDirty && (t.boost = e.readFloat(0, 100, 8)), t.actionDirty = e.readBoolean(), t.actionDirty && (t.action = {}, t.action.time = e.readFloat(0, P.ActionMaxDuration, 8), t.action.duration = e.readFloat(0, P.ActionMaxDuration, 8), t.action.targetId = e.readUint16()), t.inventoryDirty = e.readBoolean(), t.inventoryDirty) {
                t.scope = e.readGameType(), t.inventory = {};
                for (var a = Object.keys(x.bagSizes), i = 0; i < a.length; i++) {
                    var r = a[i];
                    t.inventory[r] = e.readBits(9)
                }
            }
            if (t.weapsDirty = e.readBoolean(), t.weapsDirty) {
                t.curWeapIdx = e.readBits(2), t.weapons = [];
                for (var o = 0; o < x.WeaponSlot.Count; o++) {
                    var n = {};
                    n.name = e.readGameType(), n.ammo = e.readUint8(), t.weapons.push(n)
                }
            }
            t.spectatorCountDirty = e.readBoolean(), t.spectatorCountDirty && (t.spectatorCount = e.readUint8()), e.readAlignToNextByte()
        }

        function s(e, t) {
            t.players = [];
            for (var a = e.readUint8(), i = 0; i < a; i++) {
                var r = {};
                r.hasData = e.readBoolean(), r.hasData && (r.pos = e.readVec(0, 0, 1024, 1024, 11), r.visible = e.readBoolean(), r.dead = e.readBoolean(), r.downed = e.readBoolean(), r.factionLeader = e.readBoolean()), t.players.push(r)
            }
            e.readAlignToNextByte()
        }

        function l(e, t) {
            t.players = [];
            for (var a = e.readUint8(), i = 0; i < a; i++) {
                var r = {};
                r.health = e.readFloat(0, 100, 7), r.disconnected = e.readBoolean(), t.players.push(r)
            }
        }

        function c(e, t) {
            t.playerId = e.readUint16(), t.teamId = e.readUint8(), t.groupId = e.readUint8(), t.name = e.readString()
        }

        function m(e, t) {
            t.mode = e.readUint8(), t.duration = e.readFloat32(), t.posOld = e.readVec(0, 0, 1024, 1024, 16), t.posNew = e.readVec(0, 0, 1024, 1024, 16), t.radOld = e.readFloat(0, 2048, 16), t.radNew = e.readFloat(0, 2048, 16)
        }

        function p(e, t) {
            t.width = e.readFloat32(), t.looped = e.readUint8(), t.points = [];
            for (var a = e.readUint8(), i = 0; i < a; i++) {
                var r = e.readVec(0, 0, 1024, 1024, 16);
                t.points.push(r)
            }
        }

        function d(e, t) {
            t.name = e.readString(), t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }

        function h(e, t) {
            t.min = e.readVec(0, 0, 1024, 1024, 16), t.max = e.readVec(0, 0, 1024, 1024, 16), t.color = e.readUint32(), t.roughness = e.readFloat32(), t.offsetDist = e.readFloat32()
        }

        function u(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.scale = e.readFloat(P.MapObjectMinScale, P.MapObjectMaxScale, 8), t.type = e.readMapType(), t.ori = e.readBits(2), e.readBits(2)
        }
        var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            y = function() {
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
            w = a("0e566746"),
            x = (a("34e32c48"), a("6b42806d"), a("989ad62a")),
            f = a("8649e148"),
            b = a("10899aea"),
            _ = a("c2a798c8"),
            S = a("f7822fec"),
            v = a("aca73f78"),
            k = function() {
                function e(t) {
                    i(this, e), this._typeToId = {}, this._idToType = {}, this.nextId = 0, this.maxId = Math.pow(2, t), this.addType("")
                }
                return y(e, [{
                    key: "addType",
                    value: function(e) {
                        w(void 0 === this._typeToId[e], "Type " + e + " has already been defined!"), w(this.nextId < this.maxId), this._typeToId[e] = this.nextId, this._idToType[this.nextId] = e, this.nextId++
                    }
                }, {
                    key: "typeToId",
                    value: function(e) {
                        var t = this._typeToId[e];
                        return w(void 0 !== t), t
                    }
                }, {
                    key: "idToType",
                    value: function(e) {
                        var t = this._idToType[e];
                        return void 0 === t && console.error("Invalid id given to idToType", e, "max", Object.keys(this._idToType).length), t
                    }
                }]), e
            }(),
            z = new k(10),
            M = new k(12);
        ! function() {
            for (var e = Object.keys(S), t = 0; t < e.length; t++) z.addType(e[t]);
            for (var a = Object.keys(v), i = 0; i < a.length; i++) M.addType(a[i]);
            console.log("Used " + z.nextId + " / " + z.maxId + " game types"), console.log("Used " + M.nextId + " / " + M.maxId + " map types")
        }();
        var T = a("14a25ec1");
        T.BitStream.prototype.writeBytes = function(e, t, a) {
            w(this._index % 8 == 0);
            var i = new Uint8Array(e._view._view.buffer, t, a);
            this._view._view.set(i, this._index / 8), this._index += 8 * a
        }, T.BitStream.prototype.writeString = T.BitStream.prototype.writeASCIIString, T.BitStream.prototype.readString = T.BitStream.prototype.readASCIIString, T.BitStream.prototype.writeFloat = function(e, t, a, i) {
            w(i > 0 && i < 31), w(e >= t && e <= a);
            var r = (1 << i) - 1,
                o = b.clamp(e, t, a),
                n = (o - t) / (a - t),
                s = n * r + .5;
            this.writeBits(s, i)
        }, T.BitStream.prototype.readFloat = function(e, t, a) {
            w(a > 0 && a < 31);
            var i = (1 << a) - 1;
            return e + this.readBits(a) / i * (t - e)
        }, T.BitStream.prototype.writeVec = function(e, t, a, i, r, o) {
            this.writeFloat(e.x, t, i, o), this.writeFloat(e.y, a, r, o)
        }, T.BitStream.prototype.readVec = function(e, t, a, i, r) {
            return _.create(this.readFloat(e, a, r), this.readFloat(t, i, r))
        }, T.BitStream.prototype.writeUnitVec = function(e, t) {
            this.writeVec(e, -1.0001, -1.0001, 1.0001, 1.0001, t)
        }, T.BitStream.prototype.readUnitVec = function(e) {
            return this.readVec(-1.0001, -1.0001, 1.0001, 1.0001, e)
        }, T.BitStream.prototype.writeVec32 = function(e) {
            this.writeFloat32(e.x), this.writeFloat32(e.y)
        }, T.BitStream.prototype.readVec32 = function() {
            return _.create(this.readFloat32(), this.readFloat32())
        }, T.BitStream.prototype.writeAlignToNextByte = function() {
            var e = 8 - this.index % 8;
            e < 8 && this.writeBits(0, e)
        }, T.BitStream.prototype.readAlignToNextByte = function() {
            var e = 8 - this.index % 8;
            e < 8 && this.readBits(e)
        }, T.BitStream.prototype.writeGameType = function(e) {
            this.writeBits(z.typeToId(e), 10)
        }, T.BitStream.prototype.readGameType = function() {
            return z.idToType(this.readBits(10))
        }, T.BitStream.prototype.writeMapType = function(e) {
            this.writeBits(M.typeToId(e), 12)
        }, T.BitStream.prototype.readMapType = function() {
            return M.idToType(this.readBits(12))
        };
        var I = function() {
                function e(t) {
                    i(this, e);
                    var a = t instanceof ArrayBuffer ? t : null;
                    this.valid = null != a, this.valid ? (this.arrayBuf = a, this.stream = new T.BitStream(a)) : (console.log("Invalid buf type", void 0 === t ? "undefined" : g(t)), "string" == typeof t && console.log("String contents: " + t.substring(0, 1024)))
                }
                return y(e, [{
                    key: "getBuffer",
                    value: function() {
                        return new Uint8Array(this.arrayBuf, 0, this.stream.byteIndex)
                    }
                }, {
                    key: "getStream",
                    value: function() {
                        return this.stream
                    }
                }, {
                    key: "serializeMsg",
                    value: function(e, t) {
                        w(this.stream.index % 8 == 0), this.stream.writeUint8(e), t.serialize(this.stream), w(this.stream.index % 8 == 0)
                    }
                }, {
                    key: "serializeMsgStream",
                    value: function(e, t) {
                        w(this.stream.index % 8 == 0 && t.index % 8 == 0), this.stream.writeUint8(e), this.stream.writeBytes(t, 0, t.index / 8)
                    }
                }, {
                    key: "deserializeMsgType",
                    value: function() {
                        return this.stream.length - 8 * this.stream.byteIndex >= 1 ? this.stream.readUint8() : A.None
                    }
                }]), e
            }(),
            P = {
                MapNameMaxLen: 24,
                PlayerNameMaxLen: 16,
                MouseMaxDist: 64,
                SmokeMaxRad: 10,
                ActionMaxDuration: 8.5,
                AirstrikeZoneMaxRad: 256,
                AirstrikeZoneMaxDuration: 60,
                MapObjectMinScale: .125,
                MapObjectMaxScale: 2.5
            },
            C = {};
        o(f.Type.Player, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeUnitVec(t.dir, 8)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.dir = e.readUnitVec(8)
        }, function(e, t) {
            t.outfit = e.readGameType(), t.backpack = e.readGameType(), t.helmet = e.readGameType(), t.chest = e.readGameType(), t.curWeapType = e.readGameType(), t.actionItem = e.readGameType(), t.layer = e.readBits(2), t.dead = e.readBoolean(), t.downed = e.readBoolean(), t.animType = e.readBits(3), t.animSeq = e.readBits(3), t.actionType = e.readBits(3), t.actionSeq = e.readBits(3), t.wearingPan = e.readBoolean(), t.frozen = e.readBoolean(), t.frozenOri = e.readBits(2), t.hasStim = e.readBoolean(), t.role = e.readBits(3), e.readBits(4)
        }), o(f.Type.Obstacle, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeFloat(t.scale, P.MapObjectMinScale, P.MapObjectMaxScale, 8), e.writeBits(0, 6)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.scale = e.readFloat(P.MapObjectMinScale, P.MapObjectMaxScale, 8), e.readBits(6)
        }, function(e, t) {
            t.healthT = e.readFloat(0, 1, 8), t.type = e.readMapType(), t.layer = e.readBits(2), t.dead = e.readBoolean(), t.isDoor = e.readBoolean(), t.isDoor && (t.door = {}, t.door.open = e.readBoolean(), t.door.canUse = e.readBoolean(), t.door.seq = e.readBits(6)), t.isButton = e.readBoolean(), t.isButton && (t.button = {}, t.button.onOff = e.readBoolean(), t.button.canUse = e.readBoolean(), t.button.seq = e.readBits(6)), t.isPuzzlePiece = e.readBoolean(), t.isPuzzlePiece && (t.parentBuildingId = e.readUint16()), e.readBits(6)
        }), o(f.Type.Building, function(e, t) {}, function(e, t) {}, function(e, t) {
            t.ceilingDead = e.readBoolean(), t.occupied = e.readBoolean(), t.ceilingDamaged = e.readBoolean(), t.hasPuzzle = e.readBoolean(), t.hasPuzzle && (t.puzzleSolved = e.readBoolean(), t.puzzleErrSeq = e.readBits(7)), e.readBits(4)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.type = e.readMapType(), t.ori = e.readBits(2), t.layer = e.readBits(2)
        }), o(f.Type.Structure, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeMapType(t.type), e.writeBits(t.ori, 2), e.writeBits(0, 2)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.type = e.readMapType(), t.ori = e.readBits(2), e.readBits(2)
        }, function(e, t) {}), o(f.Type.LootSpawner, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeMapType(t.type), e.writeBits(t.layer, 2), e.writeBits(0, 2)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.type = e.readMapType(), t.layer = e.readBits(2), e.readBits(2)
        }, function(e, t) {}), o(f.Type.Loot, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function(e, t) {
            e.writeGameType(t.name), e.writeBits(t.layer, 2), e.writeBits(t.isOld, 4), e.writeUint8(t.count)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }, function(e, t) {
            t.name = e.readGameType(), t.layer = e.readBits(2), t.isOld = e.readBits(4), t.count = e.readUint8()
        }), o(f.Type.DeadBody, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function(e, t) {
            e.writeUint8(t.layer), e.writeUint16(t.playerId)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }, function(e, t) {
            t.layer = e.readUint8(), t.playerId = e.readUint16()
        }), o(f.Type.Decal, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.scale, P.MapObjectMinScale, P.MapObjectMaxScale, 8), e.writeMapType(t.type), e.writeBits(t.ori, 2), e.writeBits(t.layer, 2)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.scale = e.readFloat(P.MapObjectMinScale, P.MapObjectMaxScale, 8), t.type = e.readMapType(), t.ori = e.readBits(2), t.layer = e.readBits(2)
        }, function(e, t) {}), o(f.Type.Projectile, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.posZ, 0, x.projectile.maxHeight, 10), e.writeBits(0, 6)
        }, function(e, t) {
            e.writeGameType(t.type), e.writeBits(t.layer, 2), e.writeBits(0, 4)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.posZ = e.readFloat(0, x.projectile.maxHeight, 10), e.readBits(6)
        }, function(e, t) {
            t.type = e.readGameType(), t.layer = e.readBits(2), e.readBits(4)
        }), o(f.Type.Smoke, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.rad, 0, P.SmokeMaxRad, 8)
        }, function(e, t) {
            e.writeBits(t.layer, 2), e.writeBits(t.interior, 6)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.rad = e.readFloat(0, P.SmokeMaxRad, 8)
        }, function(e, t) {
            t.layer = e.readBits(2), t.interior = e.readBits(6)
        }), o(f.Type.Airdrop, function(e, t) {
            e.writeFloat(t.fallT, 0, 1, 7), e.writeBoolean(t.landed)
        }, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function(e, t) {
            t.fallT = e.readFloat(0, 1, 7), t.landed = e.readBoolean()
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        });
        var A = {
                None: 0,
                Join: 1,
                Disconnect: 2,
                Input: 3,
                Edit: 4,
                Joined: 5,
                Update: 6,
                Kill: 7,
                GameOver: 8,
                Pickup: 9,
                Map: 10,
                Spectate: 11,
                DropItem: 12,
                Emote: 13,
                PlayerStats: 14,
                AdStatus: 15,
                Loadout: 16,
                AssignRole: 17,
                Stats: 18
            },
            E = function() {
                function e() {
                    i(this, e), this.protocol = 0, this.privData = "", this.name = "", this.emotes = [], this.useTouch = !1, this.isMobile = !1, this.bot = !1
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeUint32(this.protocol), e.writeString(this.privData), e.writeString(this.name, P.kPlayerNameMaxLen);
                        for (var t = 0; t < x.EmoteSlot.Count; t++) e.writeGameType(this.emotes[t]);
                        e.writeBoolean(this.useTouch), e.writeBoolean(this.isMobile), e.writeBoolean(this.bot), e.writeAlignToNextByte()
                    }
                }]), e
            }(),
            D = function() {
                function e() {
                    i(this, e), this.reason = ""
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.reason = e.readString()
                    }
                }]), e
            }(),
            O = function() {
                function e() {
                    i(this, e), this.seq = 0, this.moveLeft = !1, this.moveRight = !1, this.moveUp = !1, this.moveDown = !1, this.shootStart = !1, this.shootHold = !1, this.portrait = !1, this.touchMoveActive = !1, this.touchMoveDir = _.create(1, 0), this.touchMoveLen = 255, this.toMouseDir = _.create(1, 0), this.toMouseLen = 0, this.inputs = [], this.useItem = ""
                }
                return y(e, [{
                    key: "addInput",
                    value: function(e) {
                        this.inputs.length < 7 && -1 === this.inputs.indexOf(e) && this.inputs.push(e)
                    }
                }, {
                    key: "serialize",
                    value: function(e) {
                        e.writeUint8(this.seq), e.writeBoolean(this.moveLeft), e.writeBoolean(this.moveRight), e.writeBoolean(this.moveUp), e.writeBoolean(this.moveDown), e.writeBoolean(this.shootStart), e.writeBoolean(this.shootHold), e.writeBoolean(this.portrait), e.writeBoolean(this.touchMoveActive), this.touchMoveActive && (e.writeUnitVec(this.touchMoveDir, 8), e.writeUint8(this.touchMoveLen)), e.writeUnitVec(this.toMouseDir, 10), e.writeFloat(this.toMouseLen, 0, P.MouseMaxDist, 8), e.writeBits(this.inputs.length, 4);
                        for (var t = 0; t < this.inputs.length; t++) e.writeUint8(this.inputs[t]);
                        e.writeGameType(this.useItem), e.writeBits(0, 6)
                    }
                }]), e
            }(),
            B = function e() {
                i(this, e)
            },
            R = function() {
                function e() {
                    i(this, e), this.item = "", this.weapIdx = 0
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeGameType(this.item), e.writeUint8(this.weapIdx), e.writeBits(0, 6)
                    }
                }]), e
            }(),
            L = function() {
                function e() {
                    i(this, e), this.pos = _.create(0, 0), this.type = "", this.isPing = !1
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeVec(this.pos, 0, 0, 1024, 1024, 16), e.writeGameType(this.type), e.writeBoolean(this.isPing), e.writeBits(0, 5)
                    }
                }]), e
            }(),
            F = function() {
                function e() {
                    i(this, e), this.teamMode = 0, this.playerId = 0, this.started = !1, this.emotes = []
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.teamMode = e.readUint8(), this.playerId = e.readUint16(), this.started = e.readBoolean();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var i = e.readGameType();
                            this.emotes.push(i)
                        }
                        e.readAlignToNextByte()
                    }
                }]), e
            }(),
            j = function() {
                function e() {
                    i(this, e), this.mapName = "", this.seed = 0, this.width = 0, this.height = 0, this.shoreInset = 0, this.grassInset = 0, this.rivers = [], this.places = [], this.objects = [], this.groundPatches = []
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.mapName = e.readString(P.MapNameMaxLen), this.seed = e.readUint32(), this.width = e.readUint16(), this.height = e.readUint16(), this.shoreInset = e.readUint16(), this.grassInset = e.readUint16();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var i = {};
                            p(e, i), this.rivers.push(i)
                        }
                        for (var r = e.readUint8(), o = 0; o < r; o++) {
                            var n = {};
                            d(e, n), this.places.push(n)
                        }
                        for (var s = e.readUint16(), l = 0; l < s; l++) {
                            var c = {};
                            u(e, c), this.objects.push(c)
                        }
                        for (var m = e.readUint8(), g = 0; g < m; g++) {
                            var y = {};
                            h(e, y), this.groundPatches.push(y)
                        }
                    }
                }]), e
            }(),
            q = {
                DeletedObjects: 1,
                FullObjects: 2,
                ActivePlayerId: 4,
                AliveCount: 8,
                Gas: 16,
                PlayerInfos: 32,
                DeletePlayerIds: 64,
                PlayerStatus: 128,
                GroupStatus: 256,
                Bullets: 512,
                Explosions: 1024,
                Emotes: 2048,
                Planes: 4096,
                AirstrikeZones: 8192,
                MapIndicators: 16384
            },
            N = function() {
                function e() {
                    i(this, e), this.serializedObjectCache = null, this.objectReg = null, this.clientPlayer = null, this.activePlayer = null, this.grid = null, this.time = 0, this.playerBarn = null, this.bulletBarn = null, this.gas = null, this.map = null, this.delObjIds = [], this.fullObjects = [], this.partObjects = [], this.activePlayerId = 0, this.activePlayerIdDirty = !1, this.activePlayerData = {}, this.aliveCounts = [], this.aliveDirty = !1, this.gasT = 0, this.gasData = {}, this.gasDirty = !1, this.playerInfos = [], this.deletedPlayerIds = [], this.playerStatus = {}, this.playerStatusDirty = !1, this.groupStatus = {}, this.groupStatusDirty = !1, this.bullets = [], this.explosions = [], this.emotes = [], this.planes = [], this.airstrikeZones = [], this.mapIndicators = [], this.ack = 0
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e, t) {
                        var a = e.readUint16(),
                            i = 0;
                        if (0 != (a & q.DeletedObjects)) {
                            i = e.readUint16();
                            for (var r = 0; r < i; r++) this.delObjIds.push(e.readUint16())
                        }
                        var o = 0;
                        if (0 != (a & q.FullObjects)) {
                            o = e.readUint16();
                            for (var p = 0; p < o; p++) {
                                var d = {};
                                d.__type = e.readUint8(), d.__id = e.readUint16(), C[d.__type].deserializePart(e, d), C[d.__type].deserializeFull(e, d), this.fullObjects.push(d)
                            }
                        }
                        for (var h = e.readUint16(), u = 0; u < h; u++) {
                            var g = {};
                            g.__id = e.readUint16();
                            var y = t.getTypeById(g.__id, e);
                            C[y].deserializePart(e, g), this.partObjects.push(g)
                        }
                        0 != (a & q.ActivePlayerId) && (this.activePlayerId = e.readUint16(), this.activePlayerIdDirty = !0);
                        var w = {};
                        if (n(e, w), this.activePlayerData = w, 0 != (a & q.AliveCount)) {
                            for (var x = e.readUint8(), f = 0; f < x; f++) {
                                var b = e.readUint8();
                                this.aliveCounts.push(b)
                            }
                            this.aliveDirty = !0
                        }
                        if (this.gasT = e.readFloat(0, 1, 16), 0 != (a & q.Gas)) {
                            var S = {};
                            m(e, S), this.gasData = S, this.gasDirty = !0
                        }
                        if (0 != (a & q.PlayerInfos))
                            for (var v = e.readUint8(), k = 0; k < v; k++) {
                                var z = {};
                                c(e, z), this.playerInfos.push(z)
                            }
                        if (0 != (a & q.DeletePlayerIds))
                            for (var M = e.readUint8(), T = 0; T < M; T++) {
                                var I = e.readUint16();
                                this.deletedPlayerIds.push(I)
                            }
                        if (0 != (a & q.PlayerStatus)) {
                            var A = {};
                            s(e, A), this.playerStatus = A, this.playerStatusDirty = !0
                        }
                        if (0 != (a & q.GroupStatus)) {
                            var E = {};
                            l(e, E), this.groupStatus = E, this.groupStatusDirty = !0
                        }
                        if (0 != (a & q.Bullets))
                            for (var D = e.readUint8(), O = 0; O < D; O++) {
                                var B = {};
                                B.playerId = e.readUint16(), B.pos = e.readVec(0, 0, 1024, 1024, 16), B.dir = e.readUnitVec(8), B.bulletType = e.readGameType(), B.layer = e.readBits(2), B.varianceT = e.readFloat(0, 1, 5), B.distAdjIdx = e.readBits(4), B.clipDistance = e.readBoolean(), B.clipDistance && (B.distance = e.readFloat(0, 128, 8)), B.shotFx = e.readBoolean(), B.shotFx && (B.shotSourceType = e.readGameType(), B.shotOffhand = e.readBoolean(), B.lastShot = e.readBoolean()), B.reflectCount = 0, B.reflectObjId = 0;
                                var R = e.readBoolean();
                                R && (B.reflectCount = e.readBits(2), B.reflectObjId = e.readUint16()), e.readAlignToNextByte(), this.bullets.push(B)
                            }
                        if (0 != (a & q.Explosions))
                            for (var L = e.readUint8(), F = 0; F < L; F++) {
                                var j = {};
                                j.pos = e.readVec(0, 0, 1024, 1024, 16), j.type = e.readGameType(), j.layer = e.readBits(2), e.readBits(4), this.explosions.push(j)
                            }
                        if (0 != (a & q.Emotes))
                            for (var N = e.readUint8(), V = 0; V < N; V++) {
                                var G = {};
                                G.playerId = e.readUint16(), G.type = e.readGameType(), G.itemType = e.readGameType(), G.isPing = e.readBoolean(), G.isPing && (G.pos = e.readVec(0, 0, 1024, 1024, 16)), e.readBits(3), this.emotes.push(G)
                            }
                        if (0 != (a & q.Planes))
                            for (var U = e.readUint8(), H = 0; H < U; H++) {
                                var W = {};
                                W.id = e.readUint8();
                                var K = e.readVec(0, 0, 2048, 2048, 10);
                                W.pos = _.create(K.x - 512, K.y - 512), W.planeDir = e.readUnitVec(8), W.actionComplete = e.readBoolean(), W.action = e.readBits(3), this.planes.push(W)
                            }
                        if (0 != (a & q.AirstrikeZones))
                            for (var Z = e.readUint8(), X = 0; X < Z; X++) {
                                var Y = {};
                                Y.pos = e.readVec(0, 0, 1024, 1024, 12), Y.rad = e.readFloat(0, P.AirstrikeZoneMaxRad, 8), Y.duration = e.readFloat(0, P.AirstrikeZoneMaxDuration, 8), this.airstrikeZones.push(Y)
                            }
                        if (0 != (a & q.MapIndicators))
                            for (var J = e.readUint8(), Q = 0; Q < J; Q++) {
                                var $ = {};
                                $.id = e.readBits(6), $.dead = e.readBoolean(), $.equipped = e.readBoolean(), $.type = e.readGameType(), $.pos = e.readVec(0, 0, 1024, 1024, 16), e.readAlignToNextByte(), this.mapIndicators.push($)
                            }
                        this.ack = e.readUint8()
                    }
                }]), e
            }(),
            V = function() {
                function e() {
                    i(this, e), this.itemSourceType = "", this.mapSourceType = "", this.damageType = 0, this.targetId = 0, this.killerId = 0, this.killCreditId = 0, this.killerKills = 0, this.downed = !1, this.killed = !1, this.targetRole = 0
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.damageType = e.readUint8(), this.itemSourceType = e.readGameType(), this.mapSourceType = e.readMapType(), this.targetId = e.readUint16(), this.killerId = e.readUint16(), this.killCreditId = e.readUint16(), this.killerKills = e.readUint8(), this.downed = e.readBoolean(), this.killed = e.readBoolean(), this.targetRole = e.readBits(3), e.readBits(5)
                    }
                }]), e
            }(),
            G = function() {
                function e() {
                    i(this, e), this.playerId = 0, this.playerStats = {}
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        var t = {};
                        t.playerId = e.readUint16(), t.timeAlive = e.readUint16(), t.kills = e.readUint8(), t.dead = e.readUint8(), t.damageDealt = e.readUint16(), t.damageTaken = e.readUint16(), this.playerStats = t
                    }
                }]), e
            }(),
            U = function() {
                function e() {
                    i(this, e), this.teamId = 0, this.teamRank = 0, this.gameOver = !1, this.winningTeamId = 0, this.playerStats = []
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.teamId = e.readUint8(), this.teamRank = e.readUint8(), this.gameOver = e.readUint8(), this.winningTeamId = e.readUint8();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var i = new G;
                            i.deserialize(e), this.playerStats.push(i.playerStats)
                        }
                    }
                }]), e
            }(),
            H = {
                Full: 0,
                AlreadyOwned: 1,
                AlreadyEquipped: 2,
                BetterItemEquipped: 3,
                Success: 4,
                GunCannotFire: 5
            },
            W = function() {
                function e() {
                    i(this, e), this.type = 0, this.item = "", this.count = 0
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.type = e.readUint8(), this.item = e.readGameType(), this.count = e.readUint8(), e.readBits(6)
                    }
                }]), e
            }(),
            K = function() {
                function e() {
                    i(this, e), this.specBegin = !1, this.specNext = !1, this.specPrev = !1, this.specForce = !1
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeBoolean(this.specBegin), e.writeBoolean(this.specNext), e.writeBoolean(this.specPrev), e.writeBoolean(this.specForce), e.writeBits(0, 4)
                    }
                }]), e
            }(),
            Z = function() {
                function e() {
                    i(this, e), this.playerId = 0, this.role = 0
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.playerId = e.readUint16(), this.role = e.readUint8()
                    }
                }]), e
            }(),
            X = function() {
                function e() {
                    i(this, e), this.blocked = !1, this.prerollLoaded = !1, this.prerollFreestar = !1, this.prerollAIP = !1
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeBoolean(this.blocked), e.writeBoolean(this.prerollLoaded), e.writeBoolean(this.prerollFreestar), e.writeBoolean(this.prerollAIP), e.writeBits(0, 4)
                    }
                }]), e
            }(),
            Y = function() {
                function e() {
                    i(this, e), this.emotes = [], this.custom = !1
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        for (var t = 0; t < x.EmoteSlot.Count; t++) e.writeGameType(this.emotes[t]);
                        e.writeUint8(this.custom), e.writeAlignToNextByte()
                    }
                }]), e
            }(),
            J = function() {
                function e() {
                    i(this, e), this.data = []
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeUint32(this.data.length);
                        for (var t = 0; t < this.data.length; t++) e.writeUint8(this.data[t])
                    }
                }, {
                    key: "deserialize",
                    value: function(e) {
                        for (var t = e.readUint32(), a = 0; a < t; a++) {
                            var i = e.readUint8();
                            this.data.push(i)
                        }
                    }
                }]), e
            }();
        e.exports = {
            BitStream: T.BitStream,
            Constants: P,
            getPlayerStatusUpdateRate: r,
            MsgStream: I,
            Msg: A,
            JoinMsg: E,
            DisconnectMsg: D,
            InputMsg: O,
            EditMsg: B,
            DropItemMsg: R,
            JoinedMsg: F,
            UpdateMsg: N,
            MapMsg: j,
            KillMsg: V,
            PlayerStatsMsg: G,
            GameOverMsg: U,
            PickupMsgType: H,
            PickupMsg: W,
            SpectateMsg: K,
            EmoteMsg: L,
            AssignRoleMsg: Z,
            AdStatusMsg: X,
            LoadoutMsg: Y,
            StatsMsg: J
        }
    },
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
    },
    "33375c30": function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            var i = t - e,
                r = i * a;
            return Math.abs(r) < .001 ? i : r
        }

        function r() {
            this.sprites = [], this.emitters = []
        }
        var o = (a("0e566746"), a("8b1dfb45")),
            n = a("6b42806d"),
            s = a("10899aea"),
            l = a("7510cc08"),
            c = a("1901e2d9"),
            m = a("c2a798c8"),
            p = a("6d494b5c"),
            d = (a("c347b8dd"), a("af8ba00f"), a("aca73f78"));
        r.prototype = {
            o: function() {
                this.isNew = !1, this.residue = null, this.ceilingDead = !1, this.ceilingDamaged = !1, this.playedCeilingDeadFx = !1, this.playedSolvedPuzzleFx = !1, this.hasPuzzle = !1, this.puzzleErrSeqModified = !1, this.puzzleErrSeq = 0, this.puzzleSolved = !1, this.interiorSound = ""
            },
            n: function() {
                for (var e = 0; e < this.sprites.length; e++) {
                    var t = this.sprites[e];
                    t.active = !1, t.sprite.visible = !1, t.sprite.parent && t.sprite.parent.removeChild(t.sprite), t.sprite.removeChildren()
                }
                for (var a = 0; a < this.emitters.length; a++) this.emitters[a].stop();
                this.emitters = []
            },
            allocSprite: function() {
                for (var e = 0; e < this.sprites.length; e++) {
                    var t = this.sprites[e];
                    if (!t.active) return t.active = !0, t.sprite
                }
                var a = new o.Sprite;
                return a.anchor.set(.5, .5), this.sprites.push({
                    active: !0,
                    sprite: a
                }), a
            },
            l: function(e, t, a, i) {
                var r = this;
                t && (this.type = e.type, this.pos = m.copy(e.pos), this.ori = e.ori, this.rot = s.oriToRad(e.ori), this.scale = 1, this.layer = e.layer), this.ceilingDead = e.ceilingDead, this.ceilingDamaged = e.ceilingDamaged, this.occupied = e.occupied, this.hasPuzzle = e.hasPuzzle, this.hasPuzzle && (this.puzzleErrSeqModified = e.puzzleErrSeq != this.puzzleErrSeq, this.puzzleSolved = e.puzzleSolved, this.puzzleErrSeq = e.puzzleErrSeq);
                var p = d[this.type];
                if (this.interiorSound = "", p.interiorSound && (p.interiorSound.stopOnPuzzleComplete && this.puzzleSolved || p.interiorSound.startOnPuzzleComplete ? p.interiorSound.startOnPuzzleComplete && this.puzzleSolved && (this.interiorSound = p.interiorSound.sound) : this.interiorSound = p.interiorSound.sound), a) {
                    this.isNew = !0, this.playedCeilingDeadFx = void 0 !== p.ceiling.destroy && -1 != i.map.deadCeilingIds.indexOf(this.__id), this.playedSolvedPuzzleFx = this.hasPuzzle && -1 != i.map.solvedPuzzleIds.indexOf(this.__id);
                    var h = function(e) {
                        var t = e.pos || m.create(0, 0),
                            a = s.oriToRad(e.rot || 0),
                            n = r.allocSprite();
                        n.texture = o.Texture.fromImage(e.sprite), n.tint = e.tint;
                        var l = i.map.getMapDef().biome.valueAdjust;
                        return l < 1 && (n.tint = c.adjustValue(n.tint, l)), n.posOffset = m.rotate(t, r.rot), n.rotOffset = a, n.imgAlpha = e.alpha, n.alpha = n.imgAlpha, n.defScale = e.scale, n.mirrorY = !!e.mirrorY, n.visible = !0, n
                    };
                    this.bounds = n.transform(l.getBoundingCollider(this.type), this.pos, this.rot, this.scale), this.zIdx = p.zIdx || 0, this.surfaces = [];
                    for (var u = 0; u < p.floor.surfaces.length; u++) {
                        for (var g = p.floor.surfaces[u], y = {
                                surface: g.type,
                                colliders: []
                            }, w = 0; w < g.collision.length; w++) y.colliders.push(n.transform(g.collision[w], this.pos, this.rot, this.scale));
                        this.surfaces.push(y)
                    }
                    var x = Object.assign({}, {
                        dist: 5.5,
                        width: 2.75,
                        linger: 0,
                        fadeRate: 12
                    }, p.ceiling.vision);
                    this.ceiling = {
                        scopeIn: [],
                        scopeOut: [],
                        vision: x,
                        visionTicker: 0,
                        fadeAlpha: 1
                    };
                    for (var f = 0; f < p.ceiling.scopeIn.length; f++) this.ceiling.scopeIn.push(n.transform(p.ceiling.scopeIn[f], this.pos, this.rot, this.scale));
                    for (var b = 0; b < p.ceiling.scopeOut.length; b++) this.ceiling.scopeOut.push(n.transform(p.ceiling.scopeOut[b], this.pos, this.rot, this.scale));
                    this.disableScopeIn = !!p.ceiling.disableScopeIn, this.imgs = [];
                    for (var _ = 0; _ < p.floor.imgs.length; _++) this.imgs.push({
                        sprite: h(p.floor.imgs[_]),
                        isCeiling: !1,
                        zOrd: this.zIdx,
                        zIdx: 100 * this.__id + _
                    });
                    for (var S = 0; S < p.ceiling.imgs.length; S++) {
                        var v = p.ceiling.imgs[S];
                        this.imgs.push({
                            sprite: h(v),
                            isCeiling: !0,
                            removeOnDamaged: !!v.removeOnDamaged,
                            zOrd: 750 - this.zIdx,
                            zIdx: 100 * this.__id + S
                        })
                    }
                    for (var k = p.occupiedEmitters || [], z = 0; z < k.length; z++) {
                        var M = k[z],
                            T = this.rot + M.rot,
                            I = m.add(this.pos, m.rotate(M.pos, T)),
                            P = m.rotate(m.create(1, 0), T),
                            C = M.scale,
                            A = null;
                        if (M.parentToCeiling) {
                            for (var E = -1, D = 0; D < this.imgs.length; D++) this.imgs[D].isCeiling && (E = D);
                            if (E >= 0) {
                                var O = this.imgs[E];
                                A = O.sprite, I = m.mul(M.pos, 32), I.y *= -1, P = m.rotate(m.create(1, 0), M.rot), C = 1 / O.sprite.defScale
                            }
                        }
                        var B = i.particleBarn.addEmitter(M.type, {
                            pos: I,
                            dir: P,
                            scale: C,
                            layer: M.layer,
                            parent: A
                        });
                        this.emitters.push(B)
                    }
                }
            },
            c: function(e, t, a, r, n, l, c, h) {
                if (this.hasPuzzle) {
                    var u = d[this.type];
                    if (this.puzzleErrSeqModified && (this.puzzleErrSeqModified = !1, !this.isNew)) {
                        for (var g = this, y = m.length(m.sub(l.pos, g.pos)), w = t.me.m(), x = 0; x < w.length; x++) {
                            var f = w[x];
                            if (f.active && f.isPuzzlePiece && f.parentBuildingId == this.__id) {
                                var b = m.length(m.sub(l.pos, f.pos));
                                b < y && (g = f, y = b)
                            }
                        }
                        r.playSound(u.puzzle.sound.fail, {
                            channel: "sfx",
                            soundPos: g.pos,
                            layer: g.layer,
                            muffled: !0
                        })
                    }
                    this.puzzleSolved && !this.playedSolvedPuzzleFx && (t.solvedPuzzleIds.push(this.__id), this.playedSolvedPuzzleFx = !0, this.isNew || "none" == u.puzzle.sound.complete || r.playSound(u.puzzle.sound.complete, {
                        channel: "sfx",
                        soundPos: this.pos,
                        layer: this.layer,
                        muffled: !0
                    }))
                }
                if (this.ceilingDead && !this.playedCeilingDeadFx && (t.deadCeilingIds.push(this.__id), this.playedCeilingDeadFx = !0, this.isNew || this.destroyCeilingFx(a, r)), this.isNew = !1, this.ceilingDead && !this.residue) {
                    var _ = d[this.type];
                    if (void 0 !== _.ceiling.destroy) {
                        var S = this.allocSprite();
                        S.texture = o.Texture.fromImage(_.ceiling.destroy.residue), S.position.set(0, 0), S.scale.set(1, 1), S.rotation = 0, S.tint = 16777215, S.visible = !0, this.imgs[0].sprite.addChild(S), this.residue = S
                    }
                }
                this.ceiling.visionTicker -= e;
                var v = !1,
                    k = Number.MAX_VALUE,
                    z = this.ceiling.vision;
                if (!this.disableScopeIn)
                    for (var M = 0; M < this.ceiling.scopeIn.length; M++)
                        if (this.layer == l.layer || 2 & l.layer) {
                            var T = p.scanCollider(this.ceiling.scopeIn[M], t.me.m(), l.pos, l.layer, .5, 2 * z.width, z.dist, 5);
                            if (T) {
                                v = !0, k = T.dist;
                                break
                            }
                        }
                this.ceilingDead && (v = !0), v && (this.ceiling.visionTicker = z.linger + 1e-4), l.noCeilingRevealTicker > 0 && (this.ceiling.visionTicker = 0);
                var I = this.ceiling.visionTicker > 0,
                    P = i(this.ceiling.fadeAlpha, I ? 0 : 1, e * (I ? 12 : z.fadeRate));
                this.ceiling.fadeAlpha += P, v && this.interiorSound && (n.interiorSound.name = this.interiorSound, n.interiorSound.volume = s.remap(k, z.dist + 2, 0, 0, 1));
                for (var C = 0; C < this.emitters.length; C++) this.emitters[C].enabled = this.occupied;
                for (var A = 0; A < this.imgs.length; A++) {
                    var E = this.imgs[A],
                        D = E.isCeiling ? this.ceiling.fadeAlpha : 1;
                    this.positionSprite(E.sprite, D, h), E.removeOnDamaged && this.ceilingDamaged && (E.sprite.visible = !this.ceilingDamaged);
                    var O = this.layer;
                    E.isCeiling && (this.layer == l.layer || 2 & l.layer && 1 == this.layer) && (O |= 2), c.addPIXIObj(E.sprite, O, E.zOrd, E.zIdx)
                }
            },
            destroyCeilingFx: function(e, t) {
                for (var a = d[this.type].ceiling.destroy, i = this.surfaces[0], r = 0; r < i.colliders.length; r++) {
                    for (var o = n.toAabb(i.colliders[r]), s = 0; s < a.particleCount; s++) {
                        var l = m.create(c.random(o.min.x, o.max.x), c.random(o.min.y, o.max.y)),
                            p = m.mul(m.randomUnit(), c.random(0, 15));
                        e.addParticle(a.particle, this.layer, l, p)
                    }
                    break
                }
                t.playSound(a.sound || "ceiling_break_01", {
                    channel: "sfx",
                    soundPos: this.pos
                })
            },
            positionSprite: function(e, t, a) {
                var i = a.pointToScreen(m.add(this.pos, e.posOffset)),
                    r = a.pixels(this.scale * e.defScale);
                e.position.set(i.x, i.y), e.scale.set(r, r), e.mirrorY && (e.scale.y *= -1), e.rotation = -this.rot + e.rotOffset, e.alpha = e.imgAlpha * t
            },
            render: function(e, t) {}
        }, e.exports = r
    },
    "34e32c48": function(e, t, a) {
        "use strict";
        var i = a("10899aea"),
            r = a("c2a798c8"),
            o = {
                circleToAabb: function(e, t) {
                    var a = r.create(t);
                    return {
                        min: r.sub(e, a),
                        max: r.add(e, a)
                    }
                },
                aabbToCircle: function(e, t) {
                    var a = r.mul(r.sub(t, e), .5);
                    return {
                        pos: r.add(e, a),
                        rad: r.length(a)
                    }
                },
                lineSegmentToAabb: function(e, t) {
                    return {
                        min: r.create(e.x < t.x ? e.x : t.x, e.y < t.y ? e.y : t.y),
                        max: r.create(e.x > t.x ? e.x : t.x, e.y > t.y ? e.y : t.y)
                    }
                },
                boundingAabb: function(e) {
                    for (var t = r.create(Number.MAX_VALUE, Number.MAX_VALUE), a = r.create(-Number.MAX_VALUE, -Number.MAX_VALUE), o = 0; o < e.length; o++) {
                        var n = e[o];
                        t.x = i.min(t.x, n.min.x), t.y = i.min(t.y, n.min.y), a.x = i.max(a.x, n.max.x), a.y = i.max(a.y, n.max.y)
                    }
                    return {
                        min: t,
                        max: a
                    }
                },
                splitAabb: function(e, t) {
                    var a = r.mul(r.sub(e.max, e.min), .5),
                        i = r.add(e.min, a),
                        o = {
                            min: r.copy(e.min),
                            max: r.copy(e.max)
                        },
                        n = {
                            min: r.copy(e.min),
                            max: r.copy(e.max)
                        };
                    Math.abs(t.y) > Math.abs(t.x) ? (o.max = r.create(e.max.x, i.y), n.min = r.create(e.min.x, i.y)) : (o.max = r.create(i.x, e.max.y), n.min = r.create(i.x, e.min.y));
                    var s = r.sub(e.max, e.min);
                    return r.dot(s, t) > 0 ? [n, o] : [o, n]
                },
                scaleAabbAlongAxis: function(e, t, a) {
                    var i = r.mul(r.sub(e.max, e.min), .5),
                        o = r.add(e.min, i),
                        n = Math.abs(t.y) > Math.abs(t.x);
                    return {
                        min: r.create(n ? e.min.x : o.x - i.x * a, n ? o.y - i.y * a : e.min.y),
                        max: r.create(n ? e.max.x : o.x + i.x * a, n ? o.y + i.y * a : e.max.y)
                    }
                },
                clampPosToAabb: function(e, t) {
                    return r.minElems(r.maxElems(e, t.min), t.max)
                },
                clampPolygonToAabb: function(e, t) {
                    for (var a = [], i = 0; i < e.length; i++) a.push(o.clampPosToAabb(e[i], t));
                    return a
                },
                testPointAabb: function(e, t, a) {
                    return e.x >= t.x && e.y >= t.y && e.x <= a.x && e.y <= a.y
                },
                testCircleAabb: function(e, t, a, o) {
                    var n = r.create(i.clamp(e.x, a.x, o.x), i.clamp(e.y, a.y, o.y));
                    return r.lengthSqr(r.sub(e, n)) < t * t || e.x >= a.x && e.x <= o.x && e.y >= a.y && e.y <= o.y
                },
                testCircleCircle: function(e, t, a, i) {
                    var o = t + i;
                    return r.lengthSqr(r.sub(a, e)) < o * o
                },
                testAabbAabb: function(e, t, a, i) {
                    return e.x < i.x && e.y < i.y && a.x < t.x && a.y < t.y
                },
                testAabbPolygon: function(e, t, a) {
                    for (var i = 0; i < a.length; i++) {
                        var r = a[i],
                            n = i == a.length - 1 ? a[0] : a[i + 1];
                        if (o.intersectSegmentAabb(r, n, e, t)) return !0
                    }
                    return !1
                },
                aabbInsideAabb: function(e, t, a, i) {
                    return e.x >= a.x && e.y >= a.y && t.x <= i.x && t.y <= i.y
                },
                signedAreaTri: function(e, t, a) {
                    return (e.x - a.x) * (t.y - a.y) - (e.y - a.y) * (t.x - a.x)
                },
                intersectSegmentSegment: function(e, t, a, i) {
                    var n = o.signedAreaTri(e, t, i),
                        s = o.signedAreaTri(e, t, a);
                    if (0 != n && 0 != s && n * s < 0) {
                        var l = o.signedAreaTri(a, i, e),
                            c = l + s - n;
                        if (l * c < 0) {
                            var m = l / (l - c);
                            return {
                                point: r.add(e, r.mul(r.sub(t, e), m))
                            }
                        }
                    }
                    return null
                },
                intersectSegmentCircle: function(e, t, a, o) {
                    var n = r.sub(t, e),
                        s = i.max(r.length(n), 1e-6);
                    n = r.div(n, s);
                    var l = r.sub(e, a),
                        c = r.dot(l, n),
                        m = r.dot(l, l) - o * o;
                    if (m > 0 && c > 0) return null;
                    var p = c * c - m;
                    if (p < 0) return null;
                    var d = Math.sqrt(p),
                        h = -c - d;
                    if (h < 0 && (h = -c + d), h <= s) {
                        var u = r.add(e, r.mul(n, h));
                        return {
                            point: u,
                            normal: r.normalize(r.sub(u, a))
                        }
                    }
                    return null
                },
                intersectSegmentAabb: function(e, t, a, o) {
                    var n = 0,
                        s = Number.MAX_VALUE,
                        l = e,
                        c = r.sub(t, e),
                        m = r.length(c);
                    c = m > 1e-5 ? r.div(c, m) : r.create(1, 0);
                    var p = Math.abs(c.x),
                        d = Math.abs(c.y);
                    if (p < 1e-5 && (c.x = 2e-5, p = c.x), d < 1e-5 && (c.y = 2e-5, d = c.y), p > 1e-5) {
                        var h = (a.x - l.x) / c.x,
                            u = (o.x - l.x) / c.x;
                        if (n = i.max(n, i.min(h, u)), s = i.min(s, i.max(h, u)), n > s) return null
                    }
                    if (d > 1e-5) {
                        var g = (a.y - l.y) / c.y,
                            y = (o.y - l.y) / c.y;
                        if (n = i.max(n, i.min(g, y)), s = i.min(s, i.max(g, y)), n > s) return null
                    }
                    if (n > m) return null;
                    var w = r.add(e, r.mul(c, n)),
                        x = r.add(a, r.mul(r.sub(o, a), .5)),
                        f = r.sub(w, x),
                        b = r.mul(r.sub(a, o), .5),
                        _ = f.x / Math.abs(b.x) * 1.001,
                        S = f.y / Math.abs(b.y) * 1.001;
                    return {
                        point: w,
                        normal: r.normalizeSafe(r.create(_ < 0 ? Math.ceil(_) : Math.floor(_), S < 0 ? Math.ceil(S) : Math.floor(S)), r.create(1, 0))
                    }
                },
                intersectSegmentAabb2: function(e, t, a, i) {
                    for (var n = [{
                            a: r.create(a.x, a.y),
                            b: r.create(i.x, a.y)
                        }, {
                            a: r.create(i.x, a.y),
                            b: r.create(i.x, i.y)
                        }, {
                            a: r.create(i.x, i.y),
                            b: r.create(a.x, i.y)
                        }, {
                            a: r.create(a.x, i.y),
                            b: r.create(a.x, a.y)
                        }], s = 0; s < n.length; s++) {
                        var l = n[s],
                            c = o.intersectSegmentSegment(e, t, l.a, l.b);
                        if (c) return c
                    }
                    return null
                },
                intersectRayAabb: function(e, t, a, o) {
                    Math.abs(t.x) < 1e-5 && (t.x = 2e-5), Math.abs(t.y) < 1e-5 && (t.y = 2e-5);
                    var n = r.divElems(r.sub(a, e), t),
                        s = r.divElems(r.sub(o, e), t),
                        l = r.minElems(n, s),
                        c = r.maxElems(n, s),
                        m = i.min(c.x, c.y);
                    return m >= i.max(l.x, l.y) ? r.add(e, r.mul(t, m)) : null
                },
                intersectCircleCircle: function(e, t, a, i) {
                    var o = t + i,
                        n = r.sub(a, e),
                        s = r.lengthSqr(n);
                    if (s < o * o) {
                        var l = Math.sqrt(s);
                        return {
                            dir: l > 1e-5 ? r.div(n, l) : r.create(1, 0),
                            pen: o - l
                        }
                    }
                    return null
                },
                intersectAabbCircle: function(e, t, a, o) {
                    if (a.x >= e.x && a.x <= t.x && a.y >= e.y && a.y <= t.y) {
                        var n = r.mul(r.sub(t, e), .5),
                            s = r.add(e, n),
                            l = r.sub(a, s),
                            c = Math.abs(l.x) - n.x - o,
                            m = Math.abs(l.y) - n.y - o;
                        return c > m ? {
                            dir: r.create(l.x > 0 ? 1 : -1, 0),
                            pen: -c
                        } : {
                            dir: r.create(0, l.y > 0 ? 1 : -1),
                            pen: -m
                        }
                    }
                    var p = r.create(i.clamp(a.x, e.x, t.x), i.clamp(a.y, e.y, t.y)),
                        d = r.sub(a, p),
                        h = r.lengthSqr(d);
                    if (h < o * o) {
                        var u = Math.sqrt(h);
                        return {
                            dir: u > 1e-4 ? r.div(d, u) : r.create(1, 0),
                            pen: o - u
                        }
                    }
                    return null
                },
                intersectAabbAabb: function(e, t, a, i) {
                    var o = r.mul(r.sub(t, e), .5),
                        n = r.add(e, o),
                        s = r.mul(r.sub(i, a), .5),
                        l = r.add(a, s),
                        c = r.sub(l, n),
                        m = o.x + s.x - Math.abs(c.x);
                    if (m > 0) {
                        var p = o.y + s.y - Math.abs(c.y);
                        if (p > 0) return m > p ? {
                            dir: c.x < 0 ? r.create(-1, 0) : r.create(1, 0),
                            pen: m
                        } : {
                            dir: c.y < 0 ? r.create(0, -1) : r.create(0, 1),
                            pen: p
                        }
                    }
                    return null
                }
            };
        e.exports = o
    },
    "3bff36cf": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-02-20",
                locale: "it"
            },
            "word-order": "svo",
            "index-slogan": "2d Battle Royale",
            "index-region": "Nazione",
            "index-north-america": "America del Nord",
            "index-europe": "Europa",
            "index-asia": "Asia",
            "index-south-america": "America del Sud",
            "index-korea": "Corea del Sud",
            "index-players": "giocatori",
            "index-play-solo": "Gioca da Solo",
            "index-play-duo": "Gioca Coppia",
            "index-play-squad": "Gioca Squadra",
            "index-create-team": "Crea un Team",
            "index-how-to-play": "Come Giocare",
            "index-leave-team": "Abbandona Team",
            "index-joining-team": "Partecipando al Team",
            "index-creating-team": "Creando il Team",
            "index-invite-link": "Link d'invito",
            "index-solo": "Solo",
            "index-duo": "Coppia",
            "index-squad": "Squadra",
            "index-auto-fill": "Auto Fill",
            "index-no-fill": "No Fill",
            "index-waiting-for-leader": "Aspettando che il leader avvii la partita",
            "index-play": "Gioca",
            "index-featured-youtuber": "Youtuber in Evidenza",
            "index-settings": "Impostazioni",
            "index-high-resolution": "Alta risoluzione (Clicca per aumentare la qualità)",
            "index-screen-shake": "Vibrazione dello schermo",
            "index-master-volume": "Volume principale",
            "index-sfx-volume": "Volume effetti",
            "index-music-volume": "Volume musica",
            "index-team-is-full": "Il team è pieno!",
            "index-failed-joining-team": "Tentativo di partecipare al team fallito.",
            "index-failed-creating-team": "Tentativo di creare il team fallito.",
            "index-failed-finding-game": "Tentativo di trovare una partita fallito.",
            "index-failed-joining-game": "Tentativo di partecipare al team fallito.",
            "index-lost-connection": "Tentativo di connettersi al team fallito.",
            "index-host-closed": "L'host ha terminato la connessione.",
            "index-view-more": "Guarda di più",
            "index-back-to-main": "Ritorna al Menù principale",
            "index-most-kills": "Più Uccisioni",
            "index-total-kills": "Uccisioni Totali",
            "index-total-wins": "Vittorie Totali",
            "index-top-5-percent": "Top 5%",
            "index-kill-death-ratio": "Rapporto Uccisioni-Morti",
            "index-for": "Di",
            "index-today": "Oggi",
            "index-this-week": "Questa Settimana",
            "index-all-time": "Di Sempre",
            "index-top-100": "TOP 100",
            "index-rank": "Classifica",
            "index-player": "Giocatore",
            "index-total-games": "Partite totali",
            "index-controls": "Controlli",
            "index-movement": "Movimento",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Mira",
            "index-aim-ctrl": "Mouse",
            "index-punch": "Pugno",
            "index-shoot": "Spara",
            "index-shoot-ctrl": "Click Sinistro",
            "index-change-weapons": "Cambia Armi",
            "index-change-weapons-ctrl": "1-4 oppure scorri la rotella",
            "index-stow-weapons": "Vai in modalità pugni",
            "index-stow-weapons-ctrl": "3 oppure E",
            "index-swap-weapons": "Ritorna all'arma precedente",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Ricarica",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Zoom mirino",
            "index-scope-zoom-ctrl": "Click Sinistro sullo Zoom",
            "index-pickup": "Raccogli",
            "index-loot": "Saccheggia",
            "index-revive": "Rianima",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Usa oggetto medico",
            "index-use-medical-ctrl": "Click sinistro sull'oggetto oppure 7-0",
            "index-drop-item": "Lascia cadere oggetto",
            "index-drop-item-ctrl": "Click destro sull'oggetto",
            "index-cancel-action": "Cancella azione",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Apri la mappa",
            "index-view-map-ctrl": "M oppure G",
            "index-toggle-minimap": "Abilita/Disabilita HUD",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Use Team Ping Wheel",
            "index-use-ping-ctrl": "Tieni premuto C, dopodichè tieni premuto il tasto destro e trascina il mouse, infine rilascia il tasto destro",
            "index-use-emote": "Come Giocare",
            "index-use-emote-ctrl": "Tieni premuto il tasto destro e trascina il mouse, dopodichè rilascia il tasto destro",
            "index-tips-1-desc": "L'obiettivo di surviv.io è di rimanere l'ultimo giocatore sopravvissuto. Hai solo una vita a partita - Non puoi rinascere!",
            "index-tips-2": "PUBG in 2D",
            "index-tips-2-desc": "Se hai già giocato ad altri giochi battle royale come PUBG, Fortnite o H1Z1, allora sei già a buon punto! Immagina Surviv.io come PUBG ma in 2D.",
            "index-tips-3": "Saccheggia e Uccidi",
            "index-tips-3-desc": "Comincerai la partita con nient'altro che un semplice marsupio. Gira per la mappa per trovare: armi, munizioni, mirini e oggetti medici. Elimina gli altri giocatori in modo da rubare il loro bottino!",
            "index-tips-4": "Rosso = Dannoso!",
            "index-tips-4-desc": "I giocatori non sono l'unica cosa che può recarti del danno. La zona rossa è letale e si restringe col passare del tempo, più tempo trascorrerai all'infuori della zona, maggiore sarà il danno recato. Assicurati di dare spesso un'occhiata alla mappa per rimanere al sicuro.",
            "game-alive": "In Vita",
            "game-reloading": "Ricaricando",
            "game-using": "Usando",
            "game-reviving": "Rianimando",
            "game-revive-teammate": "Rianima compagno",
            "game-equip": "Equipaggia",
            "game-cancel": "Cancella",
            "game-You": "Tu",
            "game-you": "tu",
            "game-themselves": "se stesso",
            "game-yourself": "te stesso",
            "game-you-died": "morto",
            "game-player-died": "morto",
            "game-with": "con",
            "game-knocked-out": "messo KO",
            "game-killed": "ucciso",
            "game-finally-killed": "finalmente ucciso",
            "game-finally-bled-out": "finally bled out",
            "game-died-outside": "morto all'infuori della zona protetta",
            "game-the-red-zone": "La zona rossa",
            "game-waiting-for-players": "Aspettando altri giocatori",
            "game-spectating": "Osservando",
            "game-red-zone-advances": "La zona rossa avanzerà tra",
            "game-red-zone-advancing": "La zona rossa sta avanzando, raggiungi la zona sicura!",
            "game-seconds": "secondi",
            "game-minutes": "minuti",
            "game-minute": "minuto",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Non hai abbastanza spazio!",
            "game-item-already-owned": "Possiedi già questo oggetto!",
            "game-item-already-equipped": "Oggetto già equipaggiato!",
            "game-better-item-equipped": "Hai un miglior oggetto equipaggiato!",
            "game-play-new-game": "Gioca una Nuova Partita",
            "game-spectate": "Osserva",
            "game-full-screen": "Schermo intero",
            "game-sound": "Suono",
            "game-quit-game": "Abbandona Gioco",
            "game-return-to-game": "Ritorna al Gioco",
            "game-hide-match-stats": "Nascondi le Statistiche",
            "game-view-match-stats": "Guarda le Statistiche",
            "game-previous-teammate": "Compagno Precedente",
            "game-next-teammate": "Prossimo Compagno",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "Abbandona Gioco",
            "game-your-results": "I tuoi Risultati",
            "game-chicken": "Vittoria! Stasera si mangia pollo!",
            "game-won-the-game": "vinto la partita.",
            "game-team-eliminated": "La tua squadra è stata eliminata.",
            "game-rank": "Rank",
            "game-team-rank": "Classifica Squadra",
            "game-team-kills": "Uccisioni di Squadra",
            "game-kill": "Uccisione",
            "game-kills": "Uccisioni",
            "game-damage-dealt": "Danno provocato",
            "game-damage-taken": "Danno subito",
            "game-survived": "Resistito per",
            "game-backpack00": "Marsupio",
            "game-backpack01": "Zaino piccolo",
            "game-backpack02": "Zaino normale",
            "game-backpack03": "Zaino militaresco",
            "game-bandage": "Bende",
            "game-bandage-tooltip": "Click sinistro per rigenerare il 15% di salute.",
            "game-healing-tooltip": "Non puoi superare il 75% di salute.",
            "game-healthkit": "Kit Medico",
            "game-healthkit-tooltip": "Click sinistro per rigenerare il 100% di energia.",
            "game-soda": "Soda",
            "game-soda-tooltip": "Click sinistro per incrementare l'adrenalina del 25%.",
            "game-adrenaline-tooltip": "L'adrenalina restituisce la salute col passare del tempo.",
            "game-painkiller": "Pillole",
            "game-painkiller-tooltip": "Click sinistro per incrementare l'adrenalina del 50%.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Munizioni per M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 e Vector.",
            "game-12gauge": "Calibro 12",
            "game-12gauge-tooltip": "Munizioni per M870, M1100, SPAS-12, Saiga-12 e MP220.",
            "game-762mm": "7,62mm",
            "game-762mm-tooltip": "Munizioni per AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 e DP-28.",
            "game-556mm": "5,56mm",
            "game-556mm-tooltip": "Munizioni per FAMAS, M416, M4A1-S, QBB-97, Mk 12 e M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Munizioni per DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Munizioni per AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Munizioni per Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Munizioni per M1911, M1A1, Model 94 e Peacemaker.",
            "game-chest01": "Armatura Livello 1",
            "game-chest02": "Armatura Livello 2",
            "game-chest03": "Armatura Livello 3",
            "game-helmet01": "Casco Livello 1",
            "game-helmet02": "Casco Livello 2",
            "game-helmet03": "Casco Livello 3",
            "game-1xscope": "1x Mirino",
            "game-2xscope": "2x Mirino",
            "game-4xscope": "4x Mirino",
            "game-8xscope": "8x Mirino",
            "game-15xscope": "15x Mirino",
            "game-level-1": "Lvl. 1",
            "game-level-2": "Lvl. 2",
            "game-level-3": "Lvl. 3",
            "game-level-4": "Lvl. 4",
            "game-outfitBase": "Outfit di Base",
            "game-outfitRoyalFortune": "Fortuna Reale",
            "game-outfitKeyLime": "Key Lime",
            "game-outfitCobaltShell": "Guscio di Cobalto",
            "game-outfitCarbonFiber": "Fibra di Carbonio",
            "game-outfitDarkGloves": "Il Professionista",
            "game-outfitGhillie": "Tuta Mimetica",
            "game-outfitCamo": "Foresta Mimetica",
            "game-outfitRed": "Bersaglio Facile",
            "game-outfitWhite": "Vendicatore Artico",
            "game-fists": "Pugno",
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
            "game-frag": "Granata",
            "game-hud-frag": "Granata",
            "game-smoke": "Granata Fumogena",
            "game-hud-smoke": "Fumogena",
            "game-potato": "Patata",
            "game-hud-potato": "Patata",
            "game-potato_heavy": "Patata",
            "game-barrel_01": "un barile",
            "game-silo_01": "un silo",
            "index-play-50v50": "Gioca 50v50",
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
    "4426a45f": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-02-21",
                locale: "sv"
            },
            "word-order": "svo",
            "index-slogan": "2d Battle Royale",
            "index-region": "Region",
            "index-north-america": "Nordamerika",
            "index-europe": "Europa",
            "index-asia": "Asien",
            "index-south-america": "Sydamerika",
            "index-korea": "Sydkorea",
            "index-players": "spelare",
            "index-play-solo": "Spela Solo",
            "index-play-duo": "Spela Dubbel",
            "index-play-squad": "Spela Trupp",
            "index-create-team": "Skapa Lag",
            "index-how-to-play": "Lär dig spela",
            "index-leave-team": "Lämna lag",
            "index-joining-team": "Går med i lag",
            "index-creating-team": "Skapar lag",
            "index-invite-link": "Inbjudningslänk",
            "index-solo": "Solo",
            "index-duo": "Dubbel",
            "index-squad": "Trupp",
            "index-auto-fill": "Autofyll",
            "index-no-fill": "Ingen fyllnad",
            "index-waiting-for-leader": "Väntar på att lagledaren ska starta matchen",
            "index-play": "Spela",
            "index-featured-youtuber": "Framhävd YouTuber",
            "index-settings": "Inställningar",
            "index-high-resolution": "Hög upplösning (bocka i för att höja visuell kvalitet)",
            "index-screen-shake": "Skärmskakningar",
            "index-mobile-announce": "Nu tillgänglig på mobilen!",
            "index-mobile-tooltip": "Besök <span>surviv.io</span> på mobilen för att spela på språng!",
            "index-team-is-full": "Laget är fullt!",
            "index-failed-joining-team": "Kunde inte gå med i laget.",
            "index-failed-creating-team": "Kunde inte skapa lag.",
            "index-failed-finding-game": "Kunde inte hitta match.",
            "index-failed-joining-game": "Kunde inte gå med i match.",
            "index-lost-connection": "Tappade anslutning till laget.",
            "index-host-closed": "Värden stängde anslutningen.",
            "index-view-more": "Visa mer",
            "index-back-to-main": "Tillbaka till huvudmenyn",
            "index-most-kills": "Mest dödade",
            "index-total-kills": "Totalt dödade",
            "index-total-wins": "Totala vinster",
            "index-top-5-percent": "Topp 5 procent",
            "index-kill-death-ratio": "Kill-death ratio",
            "index-for": "",
            "index-today": "idag",
            "index-this-week": "denna vecka",
            "index-all-time": "någonsin",
            "index-top-100": "Topp 100",
            "index-rank": "Rank",
            "index-player": "Spelare",
            "index-total-games": "Antal matcher",
            "index-controls": "Kontroller",
            "index-movement": "Förflyttning",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Sikta",
            "index-aim-ctrl": "Mus",
            "index-punch": "Slå",
            "index-shoot": "Skjut",
            "index-shoot-ctrl": "Vänsterklick",
            "index-change-weapons": "Byta vapen",
            "index-change-weapons-ctrl": "1 - 4 eller skrollhjulet",
            "index-stow-weapons": "Lägg undan vapen",
            "index-stow-weapons-ctrl": "3 eller E",
            "index-swap-weapons": "Byta tillbaka till föregående vapen",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Ladda om",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Sikteszoom",
            "index-scope-zoom-ctrl": "Vänsterklicka på zoomikonen",
            "index-pickup": "Ta upp",
            "index-loot": "Ta",
            "index-revive": "Återuppliva",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Använda medicinsk utrustning",
            "index-use-medical-ctrl": "Vänsterklicka på föremål eller 7 - 0",
            "index-drop-item": "Släpp föremål",
            "index-drop-item-ctrl": "Högerklicka på föremål",
            "index-cancel-action": "Avbryt aktion",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Visa mapp",
            "index-view-map-ctrl": "M eller G",
            "index-toggle-minimap": "Initiera HUD",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Använd lagets pinghjul",
            "index-use-ping-ctrl": "Håll C, håll sedan högerklick och dra musen, släpp sedan högerklick",
            "index-use-emote": "Använd känslohjul",
            "index-use-emote-ctrl": "Håll högerklick och dra musen, släpp sedan högerklick",
            "index-tips-1-desc": "Målet med surviv.io är att bli den sista spelaren kvar. Du lever bara en gång per match - det finns bara en chans!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": 'Om du någonsin spelat andra "Herre på Täppan"-spel som PUBG, Fortnite eller H1Z1 är du redan halvvägs där! Tänk dig surviv.io som 2D PUBG.',
            "index-tips-3": "Plundra och döda",
            "index-tips-3-desc": "Du börjar matchen utan några andra föremål än en simpel ryggsäck. Rör dig runt kartan för att hitta föremål: vapen, ammunition, sikten och medicinska föremål. Eliminera andra spelare och ta deras föremål!",
            "index-tips-4": "Rött = Dåligt!",
            "index-tips-4-desc": "Spelare är inte det enda som kan skada dig. Den dödliga röda zonen kommer röra sig inåt från kartans sidor och dela ut ökande skada om du står i den. Håll ett öga på kartan och håll dig trygg.",
            "game-alive": "kvar",
            "game-reloading": "Laddar om",
            "game-using": "Använder",
            "game-reviving": "Återupplivar",
            "game-revive-teammate": "Återuppliva lagkamrat",
            "game-equip": "Ta upp",
            "game-cancel": "Avbryt",
            "game-You": "Du",
            "game-you": "du",
            "game-themselves": "sig själv",
            "game-yourself": "dig själv",
            "game-you-died": "dog",
            "game-player-died": "dog",
            "game-with": "med",
            "game-knocked-out": "knocked out",
            "game-killed": "dödade",
            "game-finally-killed": "dödade till slut",
            "game-finally-bled-out": "blödde ut till slut",
            "game-died-outside": "dog utanför den trygga zonen",
            "game-the-red-zone": "Den röda zonen",
            "game-waiting-for-players": "Väntar på spelare",
            "game-spectating": "Åskådar",
            "game-red-zone-advances": "Den röda zonen advancerar om",
            "game-red-zone-advancing": "Den röda zonen advancerar, ta dig till den säkra zonen!",
            "game-seconds": "sekunder",
            "game-minutes": "minuter",
            "game-minute": "minuter",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Inte tillräckligt utrymme!",
            "game-item-already-owned": "Du har redan föremålet!",
            "game-item-already-equipped": "Du är redan uttrustad med föremålet!",
            "game-better-item-equipped": "Du har redan ett bättre föremål!",
            "game-play-new-game": "Spela ny match",
            "game-spectate": "Åskåda",
            "game-full-screen": "Fullskärm",
            "game-sound": "Ljud",
            "game-quit-game": "Avsluta spel",
            "game-return-to-game": "Återvänd till spel",
            "game-hide-match-stats": "Dölj matchstatistik",
            "game-view-match-stats": "Visa matchstatistik",
            "game-previous-teammate": "Föregående lagkamrat",
            "game-next-teammate": "Nästa lagkamrat",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "Lämna match",
            "game-your-results": "Dina resultat",
            "game-chicken": "Vinst! Ikväll blir det kycklingmiddag!",
            "game-won-the-game": "vann matchen.",
            "game-team-eliminated": "Ditt lag blev eliminerat.",
            "game-rank": "Rank",
            "game-team-rank": "Lagrank",
            "game-team-kills": "Lagets antal dödade",
            "game-kill": "Dödad",
            "game-kills": "Dödade",
            "game-damage-dealt": "Skada utdelad",
            "game-damage-taken": "Skada mottagen",
            "game-survived": "Överlevde",
            "game-backpack00": "Påse",
            "game-backpack01": "Liten ryggsäck",
            "game-backpack02": "Vanlig ryggsäck.",
            "game-backpack03": "Militärryggsäck",
            "game-bandage": "Bandage",
            "game-bandage-tooltip": "Vänsterklicka för att återfå 15 hälsa.",
            "game-healing-tooltip": "Kan inte återge över 75% liv.",
            "game-healthkit": "Med Kit",
            "game-healthkit-tooltip": "Vänsterklicka för att återfå 100 hälsa.",
            "game-soda": "Läsk",
            "game-soda-tooltip": "Vänsterklicka för att boosta adrenalin med 25.",
            "game-adrenaline-tooltip": "Adrenalin återger liv över tid.",
            "game-painkiller": "Piller",
            "game-painkiller-tooltip": "Vänsterklicka för att boosta adrenalin med 50.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Ammo för M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 och Vector.",
            "game-12gauge": "12 gauge",
            "game-12gauge-tooltip": "Ammo för M870, M1100, SPAS-12, Saiga-12 och MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Ammo för AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 och DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Ammo för FAMAS, M416, M4A1-S, QBB-97, Mk 12 och M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Ammo för DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Ammo för AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Ammo för Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Ammo för M1911, M1A1, Model 94 och Peacemaker.",
            "game-chest01": "Level 1 Väst",
            "game-chest02": "Level 2 Väst",
            "game-chest03": "Level 3 Väst",
            "game-helmet01": "Level 1 Hjälm",
            "game-helmet02": "Level 2 Hjälm",
            "game-helmet03": "Level 3 Hjälm",
            "game-1xscope": "1x Sikte",
            "game-2xscope": "2x Sikte",
            "game-4xscope": "4x Sikte",
            "game-8xscope": "8x Sikte",
            "game-15xscope": "15x Sikte",
            "game-level-1": "Lvl. 1",
            "game-level-2": "Lvl. 2",
            "game-level-3": "Lvl. 3",
            "game-level-4": "Lvl. 4",
            "game-outfitBase": "Vanligt Outfit",
            "game-outfitRoyalFortune": "Kunlig Lycka",
            "game-outfitKeyLime": "Key Lime",
            "game-outfitCobaltShell": "Koboltskal",
            "game-outfitCarbonFiber": "Kolfiber",
            "game-outfitDarkGloves": "Proffset",
            "game-outfitGhillie": "Ghilliedräkt",
            "game-outfitCamo": "Skogskamouflage",
            "game-outfitRed": "Måltavla",
            "game-outfitWhite": "Arktisk Hämnare",
            "game-outfitWoodland": "Woodland Combat",
            "game-fists": "Slag",
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
            "game-frag": "Handgranat",
            "game-hud-frag": "Handgranat",
            "game-smoke": "Rökgranat",
            "game-hud-smoke": "Rökgranat",
            "game-potato": "Potatis",
            "game-hud-potato": "Potatis",
            "game-potato_heavy": "Potatis",
            "game-barrel_01": "en tunna",
            "game-silo_01": "en silo",
            "index-play-50v50": "Spela 50v50",
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
    "45f86a38": function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Woods",
                    icon: "img/gui/hatchet.svg"
                },
                assets: {
                    audio: [{
                        name: "vault_change_02",
                        channel: "sfx"
                    }, {
                        name: "footstep_08",
                        channel: "sfx"
                    }, {
                        name: "footstep_09",
                        channel: "sfx"
                    }],
                    atlases: ["gradient", "loadout", "shared", "woods"]
                },
                biome: {
                    colors: {
                        background: 2118510,
                        water: 3310251,
                        beach: 15709019,
                        riverbank: 7812619,
                        grass: 9339690,
                        underground: 1772803,
                        playerSubmerge: 2854052
                    },
                    particles: {
                        camera: "falling_leaf",
                        ripple: "waterRipple"
                    }
                },
                gameMode: {
                    maxPlayers: 80,
                    woodsMode: !0
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    "4780d986": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-01-28",
                locale: "th"
            },
            "word-order": "svo",
            "index-slogan": "ศึกรอยัลรอบที่ 2",
            "index-region": "ภูมิภาค",
            "index-north-america": "อเมริกาเหนือ",
            "index-europe": "ยุโรป",
            "index-asia": "เอเชีย",
            "index-south-america": "ทวีปอเมริกาใต้",
            "index-korea": "สาธารณรัฐเกาหลี",
            "index-players": "ผู้เล่น",
            "index-play-solo": "เล่นเดี่ยว",
            "index-play-duo": "เล่นคู่",
            "index-play-squad": "เล่นทีม",
            "index-create-team": "สร้างทีม",
            "index-how-to-play": "วิธีการเล่น",
            "index-leave-team": "ออกจากทีม",
            "index-joining-team": "กำลังเข้าร่วมทีม",
            "index-creating-team": "กำลังสร้างทีม",
            "index-invite-link": "ลิงก์เชิญ",
            "index-solo": "เดียว",
            "index-duo": "คู่",
            "index-squad": "ทีม",
            "index-auto-fill": "เติมอัตโนมัติ",
            "index-no-fill": "ไม่เติม",
            "index-waiting-for-leader": "กำลังรอให้ผู้นำเริ่มเกม",
            "index-play": "เล่น",
            "index-featured-youtuber": "YouTuber ที่มีชื่อเสียง",
            "index-settings": "ตั้งค่า",
            "index-high-resolution": "ความละเอียดสูง (ตรวจสอบเพื่อเพิ่มคุณภาพการมองเห็น)",
            "index-screen-shake": "สั่นหน้าจอ",
            "index-team-is-full": "ทีมเต็มแล้ว!",
            "index-failed-joining-team": "เข้าร่วมทีมล้มเหลว",
            "index-failed-creating-team": "สร้างทีมล้มเหลว",
            "index-failed-finding-game": "ค้นหาเกมล้มเหลว",
            "index-failed-joining-game": "เข้าร่วมทีมล้มเหลว",
            "index-lost-connection": "ขาดการเชื่อมต่อกับทีม",
            "index-host-closed": "เซิร์ฟเวอร์ปิดการเชื่อมต่อ",
            "index-view-more": "ดูเพิ่มเติม",
            "index-back-to-main": "กลับไปที่เมนูหลัก",
            "index-most-kills": "ฆ่ามากที่สุด",
            "index-total-kills": "ฆ่าทั้งหมด",
            "index-total-wins": "ชนะทั้งหมด",
            "index-top-5-percent": "5 เปอร์เซ็นต์แรก",
            "index-kill-death-ratio": "อัตราส่วนฆ่าตาย",
            "index-for": "For",
            "index-today": "วันนี้",
            "index-this-week": "อาทิตย์นี้",
            "index-all-time": "ตลอดเวลา",
            "index-top-100": "100 อันดับแรก",
            "index-rank": "อันดับ",
            "index-player": "ผู้เล่น",
            "index-total-games": "เกมทั้งหมด",
            "index-controls": "ควบคุม",
            "index-movement": "เคลื่อนไหว",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "เล็ง",
            "index-aim-ctrl": "เม้าส์",
            "index-punch": "ชกต่อย",
            "index-shoot": "ยิง",
            "index-shoot-ctrl": "คลิกซ้าย",
            "index-change-weapons": "เปลี่ยนอาวุธ",
            "index-change-weapons-ctrl": "1 ตลอด 4 หรือล้อเลื่อน",
            "index-stow-weapons": "เก็บรักษาอาวุธ (โหมดชกต่อย)",
            "index-stow-weapons-ctrl": "3 หรือ E",
            "index-swap-weapons": "สลับไปใช้อาวุธก่อนหน้า",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "โหลดใหม่",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "ขอบเขตการซูม",
            "index-scope-zoom-ctrl": "คลิกซ้ายเพื่อซูม",
            "index-pickup": "เก็บ",
            "index-loot": "ปล้น",
            "index-revive": "ฟื้น",
            "index-pickup-ctrl": "F",
            "index-use-medical": "ใช้ไอเทมรักษา",
            "index-use-medical-ctrl": "คลิกซ้ายที่ไอเทมหรือกด 7 ตลอด 0",
            "index-drop-item": "ทิ้งไอเทม",
            "index-drop-item-ctrl": "คลิกขวาที่ไอเทม",
            "index-cancel-action": "ยกเลิกการดำเนินการ",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "ดูแผนที่",
            "index-view-map-ctrl": "M หรือ G",
            "index-toggle-minimap": "สลับไปแผนที่เล็ก",
            "index-toggle-minimap-ctrl": "V",
            "game-alive": "มีชีวิต",
            "game-reloading": "กำลังโหลดใหม่",
            "game-using": "กำลังใช้",
            "game-reviving": "กำลังฟื้นฟู",
            "game-revive-teammate": "ฟื้น",
            "game-equip": "ติดตั้ง",
            "game-cancel": "ยกเลิก",
            "game-You": "คุณ",
            "game-you": "คุณ",
            "game-themselves": "พวกเขาเอง",
            "game-yourself": "ตัวคุณเอง",
            "game-you-died": "เสียชีวิต",
            "game-player-died": "เสียชีวิต",
            "game-with": "ด้วย",
            "game-knocked-out": "ล้ม",
            "game-killed": "ฆ่า",
            "game-finally-killed": "ฆ่าตายในที่สุด",
            "game-finally-bled-out": "เลือดออกในที่สุด",
            "game-died-outside": "ตายนอกเขตปลอดภัย",
            "game-the-red-zone": "เขตอันตราย",
            "game-waiting-for-players": "กำลังรอผู้เล่น",
            "game-spectating": "กำลังชม",
            "game-red-zone-advances": "เขตอันตรายเริ่มใน",
            "game-red-zone-advancing": "กำลังเริ่มเขตอันตราย โปรดเข้าไปในเขตปลอดภัย!",
            "game-seconds": "วินาที",
            "game-minutes": "นาที",
            "game-minute": "นาที",
            "game-m": "น.",
            "game-s": "ว.",
            "game-not-enough-space": "พื้นที่ไม่เพียงพอ!",
            "game-item-already-owned": "มีไอเทมแล้ว!",
            "game-item-already-equipped": "ติดตั้งไอเทมแล้ว!",
            "game-better-item-equipped": "ติดตั้งไอเทมที่ดีกว่าแล้ว!",
            "game-play-new-game": "เล่นเกมใหม่",
            "game-spectate": "ชม",
            "game-full-screen": "เต็มหน้าจอ",
            "game-sound": "เสียง",
            "game-quit-game": "ออกเกม",
            "game-return-to-game": "กลับไปที่เกม",
            "game-hide-match-stats": "ซ่อนสถิติการจับคู่",
            "game-view-match-stats": "ดูสถิติการจับคู่",
            "game-previous-teammate": "เพื่อนร่วมทีมก่อนหน้านี้",
            "game-next-teammate": "เพื่อนร่วมทีมต่อไป",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "ออกจากเกม",
            "game-your-results": "ผลลัพธ์ของคุณ",
            "game-chicken": "อาหารเย็นวันนี้คือไก่ทอด!",
            "game-won-the-game": "ชนะเกมแล้ว",
            "game-team-eliminated": "ทีมของคุณแพ้แล้ว",
            "game-rank": "อันดับ",
            "game-team-rank": "อันดับของทีม",
            "game-team-kills": "ทีมฆ่า",
            "game-kill": "ฆ่า",
            "game-kills": "ฆ่า",
            "game-damage-dealt": "จัดการความเสียหาย",
            "game-damage-taken": "ความเสียหายที่เกิดขึ้น",
            "game-survived": "รอดชีวิต",
            "game-backpack00": "กระเป๋า",
            "game-backpack01": "แพ็คเล็ก",
            "game-backpack02": "แพ็คทั่วไป",
            "game-backpack03": "แพ็คกองทัพ",
            "game-bandage": "ผ้าพันแผล",
            "game-bandage-tooltip": "คลิกซ้ายเพื่อฟื้นฟูสุขภาพ 15",
            "game-healing-tooltip": "ไม่สามารถรักษาสุขภาพได้ถึง 75",
            "game-healthkit": "ชุดเครื่องมือปฐมพยาบาล",
            "game-healthkit-tooltip": "คลิกซ้ายเพื่อฟื้นฟูสุขภาพ 100",
            "game-soda": "โซดา",
            "game-soda-tooltip": "คลิกซ้ายเพื่อเพิ่มอะดรีนาลีนภาย 25",
            "game-adrenaline-tooltip": "อะดรีนาลีนช่วยฟื้นฟูสุขภาพเมื่อเวลาผ่านไป",
            "game-painkiller": "ยาเม็ด",
            "game-painkiller-tooltip": "คลิกซ้ายเพื่อเพิ่มอะดรีนาลีนภาย 50",
            "game-9mm": "9 มม.",
            "game-9mm-tooltip": "กระสุนสำหรับ M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 และ Vector",
            "game-12gauge": "12 เกจ์",
            "game-12gauge-tooltip": "กระสุนสำหรับ M870, M1100, SPAS-12, Saiga-12 และ MP220",
            "game-762mm": "7.62 มม.",
            "game-762mm-tooltip": "กระสุนสำหรับ AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 และ DP-28",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "กระสุนสำหรับ FAMAS, M416, M4A1-S, QBB-97, Mk 12 และ M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "กระสุนสำหรับ DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "กระสุนสำหรับ AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "กระสุนสำหรับ Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "กระสุนสำหรับ M1911, M1A1, Model 94 และ Peacemaker.",
            "game-chest01": "เลเวล 1 เสื้อกั๊ก",
            "game-chest02": "เลเวล 2 เสื้อกั๊ก",
            "game-chest03": "เลเวล 3 เสื้อกั๊ก",
            "game-helmet01": "เลเวล 1 หมวกกันน็อก",
            "game-helmet02": "เลเวล 2 หมวกกันน็อก",
            "game-helmet03": "เลเวล 3 หมวกกันน็อก",
            "game-1xscope": "1x ขอตเขต",
            "game-2xscope": "2x ขอตเขต",
            "game-4xscope": "4x ขอตเขต",
            "game-8xscope": "8x ขอตเขต",
            "game-15xscope": "15x ขอตเขต",
            "game-level-1": "เลเวล 1",
            "game-level-2": "เลเวล 2",
            "game-level-3": "เลเวล 3",
            "game-level-4": "เลเวล 4",
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
            "game-potato": "มันฝรั่ง",
            "game-hud-potato": "มันฝรั่ง",
            "game-potato_heavy": "มันฝรั่ง",
            "game-barrel_01": "a barrel",
            "game-silo_01": "a silo",
            "index-play-50v50": "Play 50v50",
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
    "484b3444": function(e, t, a) {
        "use strict";

        function i(e, t, a, i) {
            var r = l("<div/>", {
                class: "copy-toast",
                html: e
            });
            t.append(r), r.css({
                left: i.pageX - parseInt(r.css("width")) / 2,
                top: a.offset().top
            }), r.animate({
                top: "-=25",
                opacity: 1
            }, {
                queue: !1,
                duration: 300,
                complete: function() {
                    l(this).fadeOut(250, function() {
                        l(this).remove()
                    })
                }
            })
        }

        function r(e, t) {
            var a = l("#start-menu");
            l("#btn-help").click(function() {
                var e = l("#start-help");
                a.addClass("display-help");
                var t = (e.position().top, a.css("height"));
                return e.css("display", "block"), a.animate({
                    scrollTop: t
                }, 1e3), p.storeGeneric("info", "help"), !1
            });
            var r = l("#team-mobile-link"),
                o = l("#team-mobile-link-desc"),
                n = l("#team-mobile-link-warning"),
                s = l("#team-link-input"),
                h = l("#social-share-block"),
                u = l("#news-block");
            l("#btn-join-team").click(function() {
                return l("#server-warning").css("display", "none"), s.val(""), r.css("display", "block"), o.css("display", "block"), n.css("display", "none"), a.css("display", "none"), u.css("display", "none"), h.css("display", "none"), !1
            }), l("#btn-team-mobile-link-leave").click(function() {
                return r.css("display", "none"), s.val(""), a.css("display", "block"), u.css("display", "block"), h.css("display", "block"), !1
            }), l("#team-link-input").on("keypress", function(e) {
                13 === (e.which || e.keyCode) && (l("#btn-team-mobile-link-join").trigger("click"), l(this).blur())
            }), l("#player-name-input-solo").on("keypress", function(e) {
                13 === (e.which || e.keyCode) && l(this).blur()
            }), c.mobile && "ios" != c.os && (l("#player-name-input-solo").on("focus", function() {
                if (c.isLandscape) {
                    var e = c.screenHeight,
                        t = e <= 282 ? 18 : 36;
                    document.body.scrollTop = l(this).offset().top - t
                }
            }), l("#player-name-input-solo").on("blur", function() {
                document.body.scrollTop = 0
            }));
            var g = l("#start-bottom-right"),
                y = l("#start-top-left"),
                w = l("#start-top-right"),
                x = new d(l("#ui-modal-keybind"));
            x.onShow(function() {
                g.fadeOut(200), w.fadeOut(200), l("#ui-modal-keybind-share").css("display", "none"), l("#keybind-warning").css("display", "none"), l("#ui-modal-keybind-list").css("height", "420px"), l("#keybind-code-input").html(""), t.refresh()
            }), x.onHide(function() {
                g.fadeIn(200), w.fadeIn(200), t.cancelBind()
            }), l(".btn-keybind").click(function() {
                return x.show(), !1
            }), l(".js-btn-keybind-share").click(function() {
                "block" == l("#ui-modal-keybind-share").css("display") ? (l("#ui-modal-keybind-share").css("display", "none"), l("#ui-modal-keybind-list").css("height", "420px")) : (l("#ui-modal-keybind-share").css("display", "block"), l("#ui-modal-keybind-list").css("height", "275px"))
            }), l("#keybind-link, #keybind-copy").click(function(e) {
                i("Copied!", x.selector, l("#keybind-link"), e);
                var t = l("#keybind-link").html();
                m.copyTextToClipboard(t)
            }), l("#btn-keybind-code-load").on("click", function(a) {
                var r = l("#keybind-code-input").val();
                l("#keybind-code-input").val("");
                var o = e.fromBase64(r);
                l("#keybind-warning").css("display", o ? "none" : "block"), o && (i("Loaded!", x.selector, l("#btn-keybind-code-load"), a), e.saveBinds()), t.refresh()
            });
            var f = new d(l("#modal-settings"));
            f.onShow(function() {
                g.fadeOut(200), w.fadeOut(200)
            }), f.onHide(function() {
                g.fadeIn(200), w.fadeIn(200)
            }), l(".btn-settings").click(function() {
                return f.show(), !1
            }), l(".modal-settings-text").click(function(e) {
                var t = l(this).siblings("input:checkbox");
                t.prop("checked", !t.is(":checked")), t.trigger("change")
            });
            var b = new d(l("#modal-hamburger"));
            b.onShow(function() {
                y.fadeOut(200)
            }), b.onHide(function() {
                y.fadeIn(200)
            }), l("#btn-hamburger").click(function() {
                return b.show(), !1
            });
            var _ = new d(l("#modal-mobile-account"));
            if (_.onShow(function() {
                    w.fadeOut(200)
                }), _.onHide(function() {
                    w.fadeIn(200)
                }), l(".account-details-guest, .account-details-user").click(function() {
                    if (c.mobile) return _.show(), !1
                }), l("#force-refresh").click(function() {
                    window.location.href = "/?t=" + Date.now()
                }), "WebSocket" in window)
                if (m.authLocation()) {
                    if ("ie" == c.browser) {
                        var S = 'Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!';
                        S += '<br><br>¡Usa el <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">navegador Chrome</a> para una mejor experiencia de juego!', S += '<br><br><a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">구글 크롬</a> 브라우저로이 게임을 즐겨보세요.';
                        var v = l("#modal-notification");
                        v.find(".modal-settings-text").html(S), v.fadeIn(200)
                    }
                } else {
                    p.logProxy(window.location.hostname);
                    var k = l("#modal-notification");
                    k.find(".modal-settings-text").html('Please use the <a href="https://surviv.io" target="_blank">official surviv.io site</a> for a better playing experience!'), k.fadeIn(200)
                } else {
                p.storeGeneric("error", "no_websocket");
                var z = l("#modal-notification");
                z.find(".modal-settings-text").html('WebSockets are required to play.<br><br>Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!'), z.fadeIn(200)
            }
            if (/Android.*; wv\)/.test(navigator.userAgent) && !c.webview) {
                var M = function(e) {
                        return e.map(function(e) {
                            return String.fromCharCode(e)
                        }).join("")
                    },
                    T = document.body;
                if (T) {
                    for (p.storeGeneric("error", "wv"), p.enabled = !1; T.firstChild;) T.removeChild(T.firstChild);
                    var I = [68, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 111, 102, 102, 105, 99, 105, 97, 108, 32, 65, 110, 100, 114, 111, 105, 100, 32, 97, 112, 112, 32, 104, 101, 114, 101, 58],
                        P = l("<div/>", {
                            css: {
                                marginTop: "10%",
                                width: "100%",
                                textAlign: "center"
                            }
                        }),
                        C = l("<div/>", {
                            text: M(I),
                            css: {
                                textAlign: "center",
                                fontSize: "24px"
                            }
                        }),
                        A = [104, 116, 116, 112, 115, 58, 47, 47, 112, 108, 97, 121, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 115, 116, 111, 114, 101, 47, 97, 112, 112, 115, 47, 100, 101, 116, 97, 105, 108, 115, 63, 105, 100, 61, 105, 111, 46, 115, 117, 114, 118, 105, 118, 46, 115, 117, 114, 118, 105, 118, 95, 105, 111, 95, 109, 111, 98, 105, 108, 101],
                        E = l("<a/>", {
                            href: M(A),
                            class: "btn-download-android btn-download-app btn-darken",
                            css: {
                                marginTop: "20px",
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)"
                            }
                        });
                    P.append(C), P.append(E), T.appendChild(P[0])
                }
            }
            window.aiptag && (window.aiptag.gdprConsent = window.cookiesConsented, window.aiptag.consented = window.cookiesConsented)
        }

        function o() {
            "ios" == c.os && ("iphonex" == c.model ? c.isLandscape ? l(".main-volume-slider").css("width", "90%") : l(".main-volume-slider").css("width", "") : window.navigator.standalone || (c.isLandscape ? (l("#start-main-center").attr("style", ""), l("#modal-customize .modal-content").attr("style", "")) : l("#modal-customize .modal-content").css({
                transform: "translate(-50%, -50%) scale(0.45)",
                top: "38%"
            }))), c.tablet && (l("#featured-youtuber").remove(), l(".btn-youtube").remove()), c.touch ? l(".btn-start-fullscreen").css("display", "none") : l(".btn-start-fullscreen").css("display", "block"), l(".btn-keybind").css("display", c.mobile ? "none" : "inline-block")
        }

        function n(e) {
            var t = l("#modal-hamburger-bottom");
            t.children().slice(-3).remove(), t.children().last().removeClass("footer-after"), l("#invite-link-text").attr("data-l10n", "index-invite-code"), l("#team-code-text").css("display", "none"), l("#invite-code-text").css("display", "none"), l("#team-hide-url").css("display", "none"), l(".btn-download-ios").css("display", "none"), l(".btn-download-android").css("display", "none"), l("#mobile-download-app").css("display", "none"), l("#start-bottom-middle").css("display", "none"), e || (l("#btn-help").css("display", "none"), l("#news-block, #start-menu").css({
                height: 186
            }), l("#team-menu").css({
                height: 186,
                padding: 10
            }))
        }

        function s(e) {
            l("#team-hide-url").css("display", "none"), e ? l("#start-bottom-middle").addClass("start-bottom-middle-tablet") : l("#news-block").css({
                height: 165
            }), "android" == c.os ? (l(".btn-download-android").css("display", "block"), l(".btn-download-ios").css("display", "none")) : "ios" == c.os && (l(".btn-download-ios").css("display", "block"), l(".btn-download-android").css("display", "none")), l("#mobile-download-app").css("display", "block")
        }
        var l = a("8ee62bea"),
            c = a("ce29f17f"),
            m = a("26be8056"),
            p = a("f398b7c7"),
            d = a("fa71fb59");
        e.exports = {
            init: r,
            onResize: o,
            applyWebviewStyling: n,
            applyMobileBrowserStyling: s
        }
    },
    "48eca919": function(e, t, a) {
        "use strict";

        function i(e) {
            c(e >= 0);
            var t = [];
            do {
                t.push(m[e % p]), e = Math.floor(e / p)
            } while (e > 0);
            return t.reverse().join("")
        }

        function r(e) {
            for (var t = 0, a = 0; a < e.length; a++) t = t * p + m.indexOf(e.charAt(a));
            return t
        }

        function o(e, t) {
            return c(e >= 0 && e < 16), c(t >= 0 && t < 134217728), i(t << 4 | 15 & e)
        }

        function n(e) {
            var t = r(e);
            return {
                appId: 15 & t,
                roomId: t >> 4
            }
        }

        function s(e) {
            return ("00" + e).slice(-2)
        }

        function l(e) {
            return Math.min((Math.pow(p, e) >> 4) - 1, 134217727)
        }
        var c = a("0e566746"),
            m = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789".split(""),
            p = m.length;
        e.exports = {
            encodeUrl: o,
            decodeUrl: n,
            appIdToString: s,
            maxRoomId: l
        }
    },
    "4b528868": function(e, t, a) {
        "use strict";

        function i(e) {
            this.mute = !1, this.masterVolume = 1, this.soundVolume = 1, this.musicVolume = 1, this.baseVolume = .5, this.sounds = {}, this.loadedFiles = {}, this.cameraPos = o.create(0, 0), this.activeLayer = 0, this.underground = !1, this.fadeInSounds = [], this.soundInstances = [], r.Sound.volume = .5, r.Sound.on("fileload", this.loadHandler, this)
        }
        var r = a("f4ccd911"),
            o = a("c2a798c8"),
            n = a("10899aea"),
            s = a("1901e2d9"),
            l = a("0d807371");
        i.prototype = {
            preloadSounds: function() {
                for (var e = {}, t = Object.keys(l.Sounds), a = 0; a < t.length; a++)
                    for (var i = t[a], o = l.Sounds[i], n = Object.keys(o), s = 0; s < n.length; s++) {
                        var c = n[s];
                        void 0 !== e[c] && console.log("Sound " + c + " defined multiple times!"), e[c] = !0
                    }
                for (var m = [], p = Object.keys(l.Channels), d = 0; d < p.length; d++)
                    for (var h = p[d], u = l.Channels[h], g = l.Sounds[u.list], y = Object.keys(g), w = 0; w < y.length; w++) {
                        var x = y[w],
                            f = g[x];
                        if (void 0 === f.preload || f.preload) {
                            var b = {};
                            b.canCoalesce = f.canCoalesce, b.channels = f.maxInstances, b.volume = f.volume, m.push({
                                name: x + h,
                                path: f.path,
                                options: b,
                                priority: f.loadPriority || 0
                            })
                        }
                    }
                m.sort(function(e, t) {
                    return t.priority - e.priority
                });
                for (var _ = 0; _ < m.length; _++) {
                    var S = m[_];
                    this.loadSound(S)
                }
                for (var v = l.Reverbs, k = Object.keys(v), z = 0; z < k.length; z++) {
                    var M = k[z],
                        T = v[M];
                    r.Sound.registerReverb(T.path, M, T)
                }
            },
            loadSound: function(e) {
                this.sounds[e.name] || (r.Sound.registerSound(e.path, e.name, e.options), this.sounds[e.name] = {
                    path: e.path
                })
            },
            loadSoundList: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t],
                        i = l.Sounds[a.channel][a.name],
                        r = {
                            canCoalesce: i.canCoalesce,
                            channels: i.maxInstances,
                            volume: i.volume
                        };
                    this.loadSound({
                        name: a.name + a.channel,
                        path: i.path,
                        options: r
                    })
                }
            },
            loadHandler: function(e) {
                this.loadedFiles[e] = !0
            },
            c: function(e) {
                for (var t = this.fadeInSounds.length - 1; t >= 0; t--) {
                    var a = this.fadeInSounds[t].instance;
                    if (a) {
                        var i = 1 * this.getTypeVolume(this.fadeInSounds[t].type);
                        a.volume = Math.min(i, a.volume + e), a.volume == i && this.fadeInSounds.splice(t, 1)
                    }
                }
                for (var o = this.soundInstances.length - 1; o >= 0; o--) {
                    var n = this.soundInstances[o];
                    "playFinished" != n.instance.playState && "playInterrupted" != n.instance.playState && "playFailed" != n.instance.playState || this.soundInstances.splice(o, 1)
                }
                var s = [0, 1, 1 / 3, 2 / 3],
                    l = this.underground ? s[this.activeLayer] : 0;
                r.Sound.setReverbs({
                    cathedral: l
                }), r.Sound.update(e)
            },
            playSound: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e || "none" == e) return null;
                t.channel = t.channel || "activePlayer", t.fadeIn = t.fadeIn || !1, t.startSilent = t.startSilent || !1, t.forceStart = t.forceStart || !1, t.loop = t.loop || !1, t.soundPos = t.soundPos || !1, t.fallOff = t.fallOff || 0, t.muffled = t.muffled || !1, t.delay = t.delay || 0, t.ignoreMinAllowable = t.ignoreMinAllowable || !1, t.rangeMult = t.rangeMult || 1, t.offset = t.offset || 0, t.ambient = "ambient" == t.channel || "music" == t.channel;
                var a = l.Channels[t.channel];
                if (a && (!this.mute || t.forceStart)) {
                    var i = !1,
                        c = 1 * this.baseVolume * this.getTypeVolume(a.type),
                        m = void 0 !== t.layer && !s.sameAudioLayer(t.layer, this.activeLayer),
                        p = t.muffled ? m ? "muffled" : "reverb" : "none";
                    if ("activePlayer" != t.channel && t.soundPos) {
                        var d = o.sub(this.cameraPos, t.soundPos),
                            h = o.length(d),
                            u = a.maxRange * t.rangeMult;
                        n.eqAbs(u, 0) && (u = 1);
                        var g = n.clamp(Math.abs(h / u), 0, 1),
                            y = Math.pow(1 - g, 1 + 2 * t.fallOff),
                            w = a.volume * y * c;
                        if ((w = m ? .5 * w : w) > .003 || t.ignoreMinAllowable) {
                            var x = n.clamp(d.x / u * -1, -1, 1);
                            i = r.Sound.play(e + t.channel, {
                                filter: p,
                                loop: t.loop ? -1 : 0,
                                volume: t.fadeIn || t.startSilent ? 0 : w,
                                pan: x,
                                delay: t.delay,
                                offset: t.offset,
                                ambient: t.ambient
                            })
                        }
                    } else {
                        var f = a.volume * c;
                        f = m ? .5 * f : f, i = r.Sound.play(e + t.channel, {
                            filter: p,
                            loop: t.loop ? -1 : 0,
                            volume: t.fadeIn || t.startSilent ? 0 : f,
                            delay: t.delay,
                            offset: t.offset,
                            ambient: t.ambient
                        })
                    }
                    if (i) {
                        if (t.fadeIn && this.fadeInSounds.push({
                                instance: i,
                                type: a.type
                            }), t.loop || "music" == t.channel) {
                            var b = "music" == t.channel ? "music" : "sound";
                            this.soundInstances.push({
                                instance: i,
                                type: b
                            })
                        }
                        return i
                    }
                }
                return null
            },
            playGroup: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = l.Groups[e];
                if (a) {
                    var i = a.sounds,
                        r = Math.floor(s.random(0, i.length));
                    return t.channel = a.channel, this.playSound(i[r], t)
                }
                return null
            },
            updateSound: function(e, t, a) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                i.fallOff = i.fallOff || 0, i.rangeMult = i.rangeMult || 1, i.ignoreMinAllowable = i.ignoreMinAllowable || !1;
                var r = l.Channels[t];
                if (e && r) {
