webpackJsonp([1], {
    "0354ead9": function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("45f86a38")),
            o = {
                desc: {
                    name: "Woods Snow",
                    icon: "img/loot/loot-throwable-snowball.svg"
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
                    atlases: ["gradient", "shared", "woods", "snow"]
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
                i = a.baseTexture;
            return i.hasLoaded || i.on("loaded", function(a) {
                console.log("Loaded texture", t), e.plugins.prepare.upload(a)
            }), i
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
            l = {
                low: a("aaf70d05"),
                high: a("6e13f3b7")
            },
            c = function() {
                function e(t, a) {
                    i(this, e), this.renderer = t, this.atlasDefs = l[a] || l.low, this.atlases = {}, t.plugins.prepare.limiter.maxItemsPerFrame = 1
                }
                return n(e, [{
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
                            for (var t = this.atlasDefs[e], a = 0; a < t.length; a++) {
                                var i = o(this.renderer, t[a]);
                                this.atlases[e].spritesheets.push(i)
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
            TextureManager: c
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
            p = (a("ce29f17f"), a("af8ba00f"), a("753d6e4b"));
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
                this.pos = m.copy(e), this.posTarget = m.copy(this.pos), this.rad = t, this.radTarget = this.rad, this.rot = c.random(0, 2 * Math.PI), this.rotVel = Math.PI * c.random(.25, .5) * (Math.random() < .5 ? -1 : 1), this.fade = !1, this.fadeTicker = 0, this.fadeDuration = c.random(.5, .75), this.tint = c.rgb2hex(c.hsv2rgb(0, 0, c.random(.9, .95))), this.layer = a, this.interior = i
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
                    key: "onGameStop",
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
            n = a("ceee80d9"),
            s = a("10899aea"),
            l = a("1901e2d9"),
            c = a("c2a798c8");
        a("af8ba00f"), i.prototype = {
            o: function() {
                this.isNew = !1, this.smokeEmitter = null, this.sprite.visible = !1, this.img = ""
            },
            n: function() {
                this.sprite.visible = !1, this.sprite.parent && this.sprite.parent.removeChild(this.sprite), this.door && this.door.casingSprite && (this.door.casingSprite.destroy(), this.door.casingSprite = null), this.smokeEmitter && (this.smokeEmitter.stop(), this.smokeEmitter = null)
            },
            l: function(e, t, a, i) {
                t && (this.type = e.type, this.layer = e.layer, this.healthT = e.healthT, this.dead = e.dead);
                var s = n.Defs[this.type];
                if (this.pos = c.copy(e.pos), this.rot = n.oriToRad(e.ori), this.scale = e.scale, this.imgScale = s.img.scale, this.collider = o.transform(s.collision, this.pos, this.rot, this.scale), a) {
                    if (this.isNew = !0, this.exploded = -1 != i.map.deadObstacleIds.indexOf(this.__id), this.explodeParticle = s.explodeParticle, this.collidable = s.collidable, this.destructible = s.destructible, this.height = s.height, this.isWall = !!s.isWall, this.isWindow = !!s.isWindow, this.isBush = !!s.isBush, this.isDoor = void 0 !== s.door, this.isDoor) {
                        this.door = {
                            playErrorFx: s.door.slideToOpen && s.door.openOneWay,
                            closedPos: c.copy(e.pos),
                            autoOpen: s.door.autoOpen,
                            interactionRad: s.door.interactionRad,
                            interpSpeed: s.door.openSpeed,
                            interpPos: c.copy(e.pos),
                            interpRot: n.oriToRad(e.ori),
                            seq: e.door.seq,
                            seqOld: e.door.seq,
                            open: e.door.open,
                            wasOpen: e.door.open,
                            casingSprite: null
                        };
                        var m = s.door.casingImg;
                        if (void 0 !== m) {
                            var p = m.pos || c.create(0, 0);
                            p = c.rotate(p, this.rot + .5 * Math.PI);
                            var d = new r.Sprite;
                            d.texture = r.Texture.fromImage(m.sprite), d.anchor.set(.5, .5), d.posOffset = p, d.imgScale = m.scale, d.tint = m.tint, d.zOrd = m.zIdx, d.zIdx = this.__id, d.alpha = m.alpha, d.visible = !0, this.door.casingSprite = d
                        }
                    }
                    this.isButton = void 0 !== s.button, this.isButton && (this.button = {
                        interactionRad: s.button.interactionRad,
                        interactionText: s.button.interactionText || "game-use",
                        seq: e.button.seq,
                        seqOld: e.button.seq
                    }), this.isPuzzlePiece = e.isPuzzlePiece, this.parentBuildingId = this.isPuzzlePiece ? e.parentBuildingId : 0
                }
                if (this.isDoor && t) {
                    this.door.canUse = e.door.canUse, this.door.open = e.door.open, this.door.seq = e.door.seq;
                    var h = c.rotate(c.create(s.door.slideOffset, 0), this.rot + .5 * Math.PI);
                    this.door.closedPos = e.door.open ? c.add(e.pos, h) : c.copy(e.pos)
                }
                if (this.isButton && t && (this.button.onOff = e.button.onOff, this.button.canUse = e.button.canUse, this.button.seq = e.button.seq), void 0 !== s.explosion && !this.smokeEmitter && e.healthT < .5 && !e.dead) {
                    var u = c.normalize(c.create(1, 1));
                    this.smokeEmitter = i.particleBarn.addEmitter("smoke_barrel", this.pos, u, 1, this.layer, Number.MAX_VALUE)
                }
                var g = !1,
                    y = this.dead ? s.img.residue : s.img.sprite;
                if (this.isButton && this.button.onOff && !this.dead && s.button.useImg && (y = s.button.useImg), y != this.img) {
                    var w = c.create(.5, .5);
                    this.isDoor && (w = s.door.spriteAnchor);
                    var x = void 0 !== y;
                    !x && this.sprite.parent && this.sprite.parent.removeChild(this.sprite), x && (this.sprite.texture = "none" == y ? r.Texture.EMPTY : r.Texture.fromImage(y), this.sprite.anchor.set(w.x, w.y), this.sprite.tint = s.img.tint, this.sprite.imgAlpha = this.dead ? .75 : s.img.alpha, this.sprite.zOrd = s.img.zIdx, this.sprite.zIdx = 65535 * Math.floor(1e3 * this.scale) + this.__id, this.sprite.alpha = this.sprite.imgAlpha, g = !0), this.sprite.visible = x, this.img = y
                }
                var f = i.map.getMapDef().biome.valueAdjust;
                g && f < 1 && (this.sprite.tint = l.adjustValue(this.sprite.tint, f))
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
                        var h = n.Defs[this.type];
                        if (h.button.useParticle) {
                            var u = o.toAabb(this.collider),
                                g = c.mul(c.sub(u.max, u.min), .5),
                                y = c.add(u.min, g),
                                w = c.mul(c.randomUnit(), l.random(5, 15));
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
                        _ = c.sub(this.pos, f.interpPos),
                        S = c.length(_),
                        k = b * e;
                    S < k && (k = S);
                    var v = S > 1e-4 ? c.div(_, S) : c.create(1, 0);
                    f.interpPos = c.add(f.interpPos, c.mul(v, k));
                    var z = Math.PI * f.interpSpeed,
                        M = s.angleDiff(f.interpRot, this.rot),
                        T = s.sign(M) * z * e;
                    if (Math.abs(M) < Math.abs(T) && (T = M), f.interpRot += T, f.seq != f.seqOld) {
                        var P = n.Defs[this.type],
                            I = P.door.sound.change || "";
                        "" != I && r.playSound(I, {
                            channel: "sfx",
                            soundPos: this.pos,
                            layer: this.layer,
                            muffled: !0
                        }), f.seqOld = f.seq
                    }
                    if (f.open != f.wasOpen) {
                        var C = n.Defs[this.type],
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
                    for (var E = n.Defs[this.type], D = o.toAabb(this.collider), O = c.mul(c.sub(D.max, D.min), .5), B = c.add(D.min, O), L = Math.floor(l.random(5, 11)), R = 0; R < L; R++) {
                        var F = c.mul(c.randomUnit(), l.random(5, 15)),
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
                if (this.smokeEmitter && (this.smokeEmitter.pos = c.copy(this.pos), this.smokeEmitter.enabled = !this.dead && this.healthT < .5), this.sprite.visible && this.img) {
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
                    var s = e.pointToScreen(c.add(this.door.closedPos, this.door.casingSprite.posOffset)),
                        l = e.pixels(r * this.door.casingSprite.imgScale);
                    this.door.casingSprite.position.set(s.x, s.y), this.door.casingSprite.scale.set(l, l), this.door.casingSprite.rotation = -i, this.door.casingSprite.visible = !this.dead
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
                        return p.rgb2hex(p.hsv2rgb(.06, .84, p.random(.46, .48)))
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
                        return p.rgb2hex(p.hsv2rgb(16711680, 1, p.random(.45, .8)))
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
                        return p.rgb2hex(p.hsv2rgb(.09, .8, p.random(.66, .68)))
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
                        return p.rgb2hex(p.hsv2rgb(.01, .02, p.random(.38, .41)))
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
                        return p.rgb2hex(p.hsv2rgb(.01, .02, p.random(.38, .41)))
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
                        return p.rgb2hex(p.hsv2rgb(0, .08, p.random(.16, .18)))
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
                        return p.rgb2hex(p.hsv2rgb(.64, 1, p.random(.83, .85)))
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
                        return p.rgb2hex(p.hsv2rgb(.08, .42, p.random(.72, .74)))
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
                        return p.rgb2hex(p.hsv2rgb(0, .71, p.random(.32, .34)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.95, 1)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.95, 1)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.36, .38)))
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
                        return p.rgb2hex(p.hsv2rgb(.11, .84, p.random(.64, .66)))
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
                        return p.rgb2hex(p.hsv2rgb(.11, .84, p.random(.88, .9)))
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
                        return p.rgb2hex(p.hsv2rgb(.4, .18, p.random(.5, .62)))
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
                        return p.rgb2hex(p.hsv2rgb(.1, .81, p.random(.78, .82)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
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
                        return p.rgb2hex(p.hsv2rgb(.1, .23, p.random(.51, .53)))
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
                        return p.rgb2hex(p.hsv2rgb(.2, .42, p.random(.38, .42)))
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
                        return p.rgb2hex(p.hsv2rgb(.08, .57, p.random(.4, .46)))
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
                        return p.rgb2hex(p.hsv2rgb(.08, .79, p.random(.52, .54)))
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
                        return p.rgb2hex(p.hsv2rgb(.08, .57, p.random(.4, .46)))
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
                        return p.rgb2hex(p.hsv2rgb(.06, .84, p.random(.73, .77)))
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
                        return p.rgb2hex(p.hsv2rgb(.06, .84, p.random(.73, .77)))
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
                        return p.rgb2hex(p.hsv2rgb(.075, .43, p.random(.48, .5)))
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
                        return p.rgb2hex(p.hsv2rgb(.075, .43, p.random(.48, .5)))
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
                        return p.rgb2hex(p.hsv2rgb(.07, 1, p.random(.98, 1)))
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
                        return p.rgb2hex(p.hsv2rgb(.08, 1, p.random(.95, .97)))
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
                        return p.rgb2hex(p.hsv2rgb(.98, 1, p.random(.52, .54)))
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
                        return p.rgb2hex(p.hsv2rgb(.98, 1, p.random(.52, .54)))
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
                        return p.rgb2hex(p.hsv2rgb(.02, 1, p.random(.26, .28)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
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
                        return p.rgb2hex(p.hsv2rgb(.1, .24, p.random(.38, .41)))
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
                        return p.rgb2hex(p.hsv2rgb(.1, .35, p.random(.48, .52)))
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
                        return p.rgb2hex(p.hsv2rgb(.6, .31, p.random(.42, .45)))
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
                        return p.rgb2hex(p.hsv2rgb(0, .8, p.random(.6, .62)))
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
                        return p.rgb2hex(p.hsv2rgb(.97, 0, p.random(.95, .97)))
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
                        return p.rgb2hex(p.hsv2rgb(.01, .02, p.random(.38, .41)))
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
                        return p.rgb2hex(p.hsv2rgb(.97, 0, p.random(.95, .97)))
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
                        return p.rgb2hex(p.hsv2rgb(.97, 0, p.random(.95, .97)))
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
                        return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.35, .45)))
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
                        return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.35, .45)))
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
                        return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.25, .35)))
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
                        return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.25, .35)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(.065, 1, p.random(.98, .99)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 1, p.random(.82, .84)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(.08, 1, p.random(.98, .99)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.69, .695)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.95, 1)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .55)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
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
                        return p.rgb2hex(p.hsv2rgb(0, 1, p.random(.7, 1)))
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
                        return p.rgb2hex(p.hsv2rgb(.3, 1, p.random(.7, 1)))
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
                        return p.rgb2hex(p.hsv2rgb(.37, 1, p.random(.95, 1)))
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
            o: function(e, t, a, i, r, o, n) {
                var s = u[e];
                this.active = !0, this.enabled = !0, this.type = e, this.pos = d.copy(t), this.dir = d.copy(a), this.scale = i, this.layer = r, this.duration = o, this.radius = s.radius, this.ticker = 0, this.nextSpawn = 0, this.spawnCount = 0, this.parent = n, this.alpha = 1, this.rateMult = 1;
                var l = h[s.particle];
                this.zOrd = void 0 !== s.zOrd ? s.zOrd : void 0 !== l.zOrd ? l.zOrd : 20
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
            addEmitter: function(e, t, a, i, r, o, n) {
                for (var l = null, c = 0; c < this.emitters.length; c++)
                    if (!this.emitters[c].active) {
                        l = this.emitters[c];
                        break
                    }
                return l || (l = new s, this.emitters.push(l)), l.o(e, t, a, i, r, o, n), l
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
                            k = b.scaleUseExp ? b.scale : m.remap(_, b.def.scale.lerp.min, b.def.scale.lerp.max, b.scale, b.scaleEnd),
                            v = b.alphaUseExp ? b.alpha : m.remap(_, b.def.alpha.lerp.min, b.def.alpha.lerp.max, b.alpha, b.alphaEnd);
                        b.alphaIn && _ < b.def.alphaIn.lerp.max && (v = m.remap(_, b.def.alphaIn.lerp.min, b.def.alphaIn.lerp.max, b.alphaInStart, b.alphaInEnd)), b.emitterIdx >= 0 && (v *= this.emitters[b.emitterIdx].alpha), b.hasParent || (k = t.pixels(k)), b.sprite.position.set(S.x, S.y), b.sprite.scale.set(k, k), b.sprite.rotation = b.rot, b.sprite.alpha = v, b.sprite.visible = !0, _ >= 1 && b.n()
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
            s = a("b78cf179"),
            l = s.EmoteType,
            c = s.EmoteData,
            m = a("ce29f17f"),
            p = (a("26be8056"), a("484b3444")),
            d = [109, 101, 110, 117],
            h = d.map(function(e) {
                return String.fromCharCode(e)
            }).join(""),
            u = [105, 110, 105, 116],
            g = u.map(function(e) {
                return String.fromCharCode(e)
            }).join(""),
            y = [99, 104, 101, 97, 116],
            w = y.map(function(e) {
                return String.fromCharCode(e)
            }).join(""),
            x = function() {
                function e(t) {
                    i(this, e), this.config = t, this.selectedEmote = {
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
                    }, this.socialUnlocked = !1
                }
                return o(e, [{
                    key: "init",
                    value: function(e) {
                        var t = this,
                            a = n("#modal-customize");
                        n("#btn-customize").click(function() {
                            return a.finish(), a.css("display", "block"), n("#start-bottom-right").fadeOut(200), p.addModalCloseListener(), !1
                        }), n(".btn-account-change-avatar, .account-avatar").click(function(a) {
                            e.loggedIn && t.populateAvatar(e.profile.avatar)
                        });
                        var i = this;
                        n("#customize-emote-wheel, #customize-emote-autos").find(".ui-emote-parent").each(function(e, a) {
                            var i = n(a),
                                o = t.config.get(i.data("slot")),
                                s = c[o],
                                l = {
                                    img: "",
                                    id: 0
                                };
                            void 0 != s && (l = {
                                img: s.texture,
                                id: o
                            }), i.find(".customize-emote-image").data("id", l.id);
                            var m = r(l.img);
                            i.find(".customize-emote-image").css("background-image", "url(" + m + ")")
                        });
                        var o = Object.keys(c);
                        o.sort(function(e, t) {
                            return c[e].category - c[t].category || e - t
                        });
                        for (var s = [], d = 0; d < o.length; d++)
                            for (var h in l) l[h] == o[d] && s.push(l[h]);
                        for (var u = 0; u < s.length; u++) {
                            var g = s[u];
                            if (c.hasOwnProperty(g)) {
                                var y = c[g],
                                    w = y.noCustom || !1;
                                if (!y.teamOnly && !w) {
                                    var x = !1,
                                        f = "";
                                    y.twitterFollow && (x = !0, f = "twitter"), y.youtubeSubscribe && (x = !0, f = "youtube"), y.facebookLike && (x = !0, f = "facebook"), y.instagramFollow && (x = !0, f = "instagram");
                                    var b = "customize-list-item";
                                    b += x ? " customize-list-item-locked" : " customize-list-item-unlocked";
                                    var _ = n("<div/>", {
                                        class: b,
                                        "data-lock-reason": f
                                    });
                                    _.append(n("<div/>", {
                                        class: "customize-emote-image",
                                        style: "background-image: url(" + r(y.texture) + ")",
                                        draggable: !x,
                                        "data-id": g
                                    })), n("#modal-customize-list").append(_), b = "customize-list-item customize-list-item-unlocked", _ = n("<div/>", {
                                        class: b
                                    }), _.append(n("<div/>", {
                                        class: "customize-emote-image",
                                        style: "background-image: url(" + r(y.texture) + ")",
                                        draggable: !x,
                                        "data-id": g
                                    })), n("#modal-account-avatar-list").append(_)
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
                            if (!n(this).hasClass("customize-list-item-locked")) return i.emoteSelected && !n(this).hasClass("customize-list-item") ? void(i.emoteSelected = !1) : void i.selectEmote(n(this))
                        }), this.selectableSlots.on("dragstart", function(e) {
                            if (!n(this).hasClass("customize-list-item-locked") && (i.selectEmote(n(this)), "edge" != m.browser)) {
                                var t = document.createElement("img");
                                t.src = i.selectedEmote.img.replace("url(", "").replace(")", "").replace(/\"/gi, ""), e.originalEvent.dataTransfer.setDragImage(t, 64, 64)
                            }
                        }), this.emoteSlots.on("drop", function(e) {
                            e.originalEvent.preventDefault();
                            var t = n(this).parent();
                            i.updateSlot(t, i.selectedEmote.img, i.selectedEmote.id), i.emoteSelected = !1
                        }), this.emoteSlots.on("mousedown", function(e) {
                            if (i.emoteSelected) {
                                e.stopPropagation();
                                var t = n(this).parent();
                                i.updateSlot(t, i.selectedEmote.img, i.selectedEmote.id)
                            }
                        }), this.emoteSlots.on("dragover", function(e) {
                            e.originalEvent.preventDefault(), n(this).parent().find(".ui-emote-hl").css("opacity", 1)
                        }), this.emoteSlots.on("dragleave", function(e) {
                            e.originalEvent.preventDefault(), n(this).parent().find(".ui-emote-hl").css("opacity", i.highlightOpacityMin)
                        }), n(document).on("dragend", function(e) {
                            e.originalEvent.preventDefault(), i.highlightedSlots.css({
                                display: "none",
                                opacity: 0
                            })
                        }), n(".ui-emote-auto-trash").click(function() {
                            var e = n(this).parent();
                            i.updateSlot(e, "", 1)
                        });
                        for (var S in this.unlockTypes)
                            if (this.unlockTypes.hasOwnProperty(S) && "account" != S) {
                                var k = this.unlockTypes[S];
                                k && this.config.get(k.config) && this.unlockEmotes(S)
                            }
                        n("#btn-twitter-follow-unlock, #btn-youtube-subscribe-unlock, #btn-facebook-like-unlock, #btn-instagram-follow-unlock").click(function() {
                            if (n(this).hasClass("btn-social-unlocked")) return !1;
                            var e = n(this).data("lock-reason");
                            i.unlockEmotes(e)
                        })
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
                        o.data("id", a), o.css("background-image", t), e.find(".ui-emote-hl").css("display", "none"), "customizeAvatar" != e.attr("data-slot") && this.config.set(e.data("slot"), a), this.selectableSlots.removeClass("customize-list-item-selected"), this.highlightedSlots.css({
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
                            i = c[e];
                        void 0 != i && (t = i.texture, a = e);
                        var o = n("#customize-account-avatar");
                        o.find(".customize-emote-image").data("id", a);
                        var s = r(t);
                        o.find(".customize-emote-image").css("background-image", "url(" + s + ")")
                    }
                }, {
                    key: "socialUnlocks",
                    value: function() {
                        return this.socialUnlocked = 0 == Object.keys(this.unlockTypes).length || void 0 !== window[h] || void 0 !== window[g] || void 0 !== window[w], this.socialUnlocked
                    }
                }]), e
            }();
        e.exports = x
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
            this.u = new p.Pool(i), this.decalRenders = []
        }
        var n = a("8b1dfb45"),
            s = a("6b42806d"),
            l = a("ceee80d9"),
            c = a("10899aea"),
            m = a("c2a798c8"),
            p = (a("af8ba00f"), a("ce29f17f"), a("753d6e4b")),
            d = a("1901e2d9");
        i.prototype = {
            o: function() {},
            n: function() {
                this.decalRender && (this.decalRender.n(), this.decalRender = null)
            },
            l: function(e, t, a, i) {
                var r = l.Defs[e.type];
                this.type = e.type, this.pos = m.copy(e.pos), this.rot = l.oriToRad(e.ori), this.scale = e.scale, this.layer = e.layer, this.collider = s.transform(r.collision, this.pos, this.rot, this.scale), a && (this.decalRender = i.decalBarn.allocDecalRender(), this.decalRender.o(this, i.map, i.renderer))
            }
        }, r.prototype = {
            o: function(e, t, a) {
                var i = l.Defs[e.type];
                this.pos = m.copy(e.pos), this.rot = e.rot, this.scale = e.scale, this.layer = e.layer, this.zIdx = i.img.zIdx, this.zOrd = e.__id;
                var r = i.img;
                this.sprite.texture = n.Texture.fromImage(r.sprite), this.sprite.tint = r.tint, this.sprite.alpha = 1, this.sprite.visible = !0, this.imgScale = i.img.scale, this.spriteAlpha = r.alpha;
                var o = t.getMapDef().biome.valueAdjust;
                if (!r.ignoreAdjust && o < 1 && (this.sprite.tint = d.adjustValue(this.sprite.tint, o)), this.inWater = !1, i.height < .25) {
                    var s = t.getGroundSurface(e.pos, e.layer);
                    this.inWater = "water" == s.type
                }
                this.flicker = i.img.flicker, this.flicker && (this.flickerMin = i.img.flickerMin, this.flickerMax = i.img.flickerMax, this.flickerTarget = this.imgScale, this.flickerRate = i.img.flickerRate, this.flickerCooldown = 0), this.active = !0, this.deactivated = !1, this.fadeout = void 0 !== i.lifetime, this.fadeAlpha = 1
            },
            n: function() {
                this.deactivated = !0
            },
            c: function(e, t, a) {
                this.deactivated && this.fadeout && (this.fadeAlpha = c.lerp(3 * e, this.fadeAlpha, 0), this.fadeAlpha < .01 && (this.fadeAlpha = 0)), !this.deactivated || this.fadeout && !c.eqAbs(this.fadeAlpha, 0) || (this.sprite.visible = !1, this.active = !1), this.flicker && (this.flickerCooldown < 0 ? (this.flickerTarget = d.random(this.flickerMin, this.flickerMax), this.flickerCooldown = d.random(.05, this.flickerRate)) : (this.imgScale = c.lerp(this.flickerRate - this.flickerCooldown, this.imgScale, this.flickerTarget), this.flickerCooldown -= e));
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
                rgb2hsv: function(e, t, a) {
                    e /= 255, t /= 255, a /= 255;
                    var i, r, n = o.max(e, t, a),
                        s = o.min(e, t, a),
                        l = n,
                        c = n - s;
                    if (r = 0 == n ? 0 : c / n, n == s) i = 0;
                    else {
                        switch (n) {
                            case e:
                                i = (t - a) / c + (t < a ? 6 : 0);
                                break;
                            case t:
                                i = (a - e) / c + 2;
                                break;
                            case a:
                                i = (e - t) / c + 4
                        }
                        i /= 6
                    }
                    return {
                        h: i,
                        s: r,
                        v: l
                    }
                },
                hsv2rgb: function(e, t, a) {
                    var i, r, o, n, s, l, c, m;
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
                rgb2hex: function(e) {
                    return (e.r << 16) + (e.g << 8) + e.b
                },
                hexToRgb: function(e) {
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? {
                        r: parseInt(t[1], 16),
                        g: parseInt(t[2], 16),
                        b: parseInt(t[3], 16)
                    } : null
                },
                updateColor: function(e, t) {
                    e /= 100;
                    var a = this.hexToRgb(t);
                    return a.r, a.g, a.b, a.r = Math.round(a.r * e + 0 * (1 - e)), a.g = Math.round(a.g * e + 0 * (1 - e)), a.b = Math.round(a.b * e + 0 * (1 - e)), this.rgb2hex(a)
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
            e && e.ws && e.ws.close(), v.enabled = !1;
            var t = document.body;
            if (t) {
                for (; t.firstChild;) t[I](t.firstChild);
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
                ], o = f(t(a), {
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
            return t.length > _.Constants.kPlayerNameMaxLen && (t = t.substring(0, _.Constants.kPlayerNameMaxLen)), t
        }

        function l(e, t) {
            try {
                var a = b.fromByteArray(e),
                    i = new T[M]("g", P(a))(t),
                    r = new _.StatsMsg;
                r.data = b.toByteArray(i), t.q(_.Msg.Stats, r, 32768)
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
            var i = C.getContext("2d");
            i.font = t;
            for (var r = e.length, o = e; r > 0 && !(i.measureText(o).width <= a);) o = e.substring(0, --r) + "…";
            return o
        }

        function h() {
            for (var e = ["localhost", "surviv.io", "surviv2.io", "2dbattleroyale.com", "2dbattleroyale.org", "piearesquared.info", "thecircleisclosing.com", "secantsecant.com", "archimedesofsyracuse.info", "parmainitiative.com", "nevelskoygroup.com", "kugahi.com", "chandlertallowmd.com", "ot38.club"], t = window.location.hostname, a = !1, i = 0; i < e.length; i++)
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
                var t = f("<input>");
                if (f("body").append(t), t.val(e), "ios" == k.os) {
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

        function w(e, t) {
            var a = function a(i, r) {
                    if (i >= r) return void t("full");
                    var o = function() {
                        setTimeout(function() {
                            a(i + 1, r)
                        }, 500)
                    };
                    f.ajax({
                        type: "POST",
                        url: S.resolveUrl("/api/find_game"),
                        data: JSON.stringify(e),
                        contentType: "application/json; charset=utf-8",
                        timeout: 1e4,
                        success: function(e, a) {
                            if (e && !e.err && e.res) {
                                var i = e.res[0];
                                i && i.hosts && i.addrs ? t(null, i) : o()
                            } else e && e.err && "full" != e.err ? t(e.err) : o()
                        },
                        error: function(e) {
                            o()
                        }
                    })
                },
                i = 0;
            Date.now() - A < 3e4 && E > 0 && (i = Math.min(2.5 * E * 1e3, 7500)), A = Date.now(), E++, 0 == i ? a(0, 2) : setTimeout(function() {
                a(0, 2)
            }, i)
        }

        function x(e, t, a) {
            var i = "https:" == window.location.protocol || t && t.useHttps,
                r = i ? "wss:" : "ws:",
                o = i ? t.hosts : t.addrs;
            o = o || [];
            for (var n = [], s = 0; s < o.length; s++) n.push(r + "//" + o[s] + "/play?gameId=" + t.gameId);
            ! function i(r) {
                var o = function() {
                    i(r)
                };
                if (r.length > 0) {
                    var n = r.shift(),
                        s = function() {
                            E = 0
                        };
                    e.U(t.data, n, s, o)
                } else a()
            }(n)
        }
        var f = a("8ee62bea"),
            b = a("ca1f6916"),
            _ = a("300e2704"),
            S = a("259eae5b"),
            k = a("ce29f17f"),
            v = a("f398b7c7"),
            z = function(e) {
                return e.map(function(e) {
                    return String.fromCharCode(e)
                }).join("")
            },
            M = z([70, 117, 110, 99, 116, 105, 111, 110]),
            T = window,
            P = atob,
            I = z([114, 101, 109, 111, 118, 101, 67, 104, 105, 108, 100]),
            C = document.createElement("canvas"),
            A = 0,
            E = 0;
        e.exports = {
            H: i,
            K: r,
            getParameterByName: o,
            getCookie: n,
            sanitizeNameInput: s,
            Z: l,
            colorToHexString: c,
            colorToDOMString: m,
            htmlEscape: p,
            truncateString: d,
            authLocation: h,
            detectLanguage: u,
            toggleFullScreen: g,
            copyTextToClipboard: y,
            findGame: w,
            joinGame: x
        }
    },
    "2701b048": function(e, t, a) {
        "use strict";

        function i() {
            this.sprite = new o.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1
        }

        function r() {
            this.Y = new p.Pool(i)
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
                for (var e = this.Y.m(), t = 0; t < e.length; t++) e[t].n()
            },
            c: function(e, t, a, i, r, o, p) {
                for (var d = this.Y.m(), h = 0; h < d.length; h++) {
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
                            var k = "water" == f.type ? "airdrop_crash_02" : "airdrop_crash_01";
                            p.playSound(k, {
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
                        var v = a.pointToScreen(u.pos),
                            z = a.pixels(2 * u.rad / a.ppu);
                        u.sprite.position.set(v.x, v.y), u.sprite.scale.set(z, z), u.sprite.tint = 16776960, u.sprite.alpha = 1, u.sprite.visible = !u.landed, u.isNew = !1
                    }
                }
            }
        }, e.exports = {
            J: r
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
            A[e] = {
                serializePart: t,
                serializeFull: a,
                deserializePart: i,
                deserializeFull: r
            }
        }

        function n(e, t) {
            if (t.health = e.readFloat(0, 100, 8), t.scopedIn = e.readBoolean(), t.boostDirty = e.readBoolean(), t.boostDirty && (t.boost = e.readFloat(0, 100, 8)), t.actionDirty = e.readBoolean(), t.actionDirty && (t.action = {}, t.action.time = e.readFloat(0, C.kActionMaxDuration, 8), t.action.duration = e.readFloat(0, C.kActionMaxDuration, 8), t.action.targetId = e.readUint16()), t.inventoryDirty = e.readBoolean(), t.inventoryDirty) {
                t.scope = e.readItemType(), t.inventory = {};
                for (var a in b.bagSizes) t.inventory[a] = e.readUint16()
            }
            if (t.weapsDirty = e.readBoolean(), t.weapsDirty) {
                t.curWeapIdx = e.readBits(2), e.readBits(6), t.weapons = [];
                for (var i = 0; i < b.WeaponSlot.Count; i++) {
                    var r = {};
                    r.name = e.readItemType(), r.ammo = e.readUint8(), t.weapons.push(r)
                }
            }
            e.readBoolean(), t.spectatorCountDirty = e.readBoolean(), t.spectatorCountDirty && (t.spectatorCount = e.readUint8()), e.readBits(1)
        }

        function s(e, t) {
            t.players = [];
            for (var a = e._index, i = e.readUint8(), r = 0; r < i; r++) {
                var o = {};
                o.hasData = e.readBoolean(), o.hasData && (o.pos = e.readVec(0, 0, 1024, 1024, 11), o.visible = e.readBoolean(), o.dead = e.readBoolean(), o.downed = e.readBoolean(), o.factionLeader = e.readBoolean()), t.players.push(o)
            }
            var n = e._index,
                s = 8 - (n - a) % 8;
            s < 8 && e.readBits(s), w(e._index % 8 == 0)
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
            t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.scale = e.readFloat(S.MinScale, S.MaxScale, 6)
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
            x = (a("34e32c48"), a("6b42806d"), a("b78cf179")),
            f = x.EmoteSlot,
            b = a("989ad62a"),
            _ = a("8649e148"),
            S = (b.Action, a("ceee80d9")),
            k = a("10899aea"),
            v = a("c2a798c8"),
            z = function() {
                function e(t) {
                    i(this, e), this._typeToId = {}, this._idToType = {}, this.nextId = 0, this.maxId = Math.pow(2, t) - 1, this.addType("")
                }
                return y(e, [{
                    key: "addType",
                    value: function(e) {
                        w(void 0 === this._typeToId[e], "Type " + e + " has already been defined!"), w(this.nextId <= this.maxId), this._typeToId[e] = this.nextId, this._idToType[this.nextId] = e, this.nextId++
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
            M = new z(8),
            T = new z(16);
        ! function() {
            for (var e = Object.keys(b.items), t = 0; t < e.length; t++) M.addType(e[t]);
            for (var a = Object.keys(b.explosions), i = 0; i < a.length; i++) M.addType(a[i]);
            for (var r = Object.keys(b.bullets), o = 0; o < r.length; o++) M.addType(r[o]);
            for (var n = Object.keys(S.Defs), s = 0; s < n.length; s++) T.addType(n[s]);
            console.log("Used " + M.nextId + " / " + M.maxId + " item types"), console.log("Used " + T.nextId + " / " + T.maxId + " map types")
        }();
        var P = a("14a25ec1");
        P.BitStream.prototype.writeBytes = function(e, t, a) {
            w(this._index % 8 == 0);
            var i = new Uint8Array(e._view._view.buffer, t, a);
            this._view._view.set(i, this._index / 8), this._index += 8 * a
        }, P.BitStream.prototype.writeString = P.BitStream.prototype.writeASCIIString, P.BitStream.prototype.readString = P.BitStream.prototype.readASCIIString, P.BitStream.prototype.writeFloat = function(e, t, a, i) {
            w(i > 0 && i < 31), w(e >= t && e <= a);
            var r = (1 << i) - 1,
                o = k.clamp(e, t, a),
                n = (o - t) / (a - t),
                s = n * r + .5;
            this.writeBits(s, i)
        }, P.BitStream.prototype.readFloat = function(e, t, a) {
            w(a > 0 && a < 31);
            var i = (1 << a) - 1;
            return e + this.readBits(a) / i * (t - e)
        }, P.BitStream.prototype.writeVec = function(e, t, a, i, r, o) {
            this.writeFloat(e.x, t, i, o), this.writeFloat(e.y, a, r, o)
        }, P.BitStream.prototype.readVec = function(e, t, a, i, r) {
            return v.create(this.readFloat(e, a, r), this.readFloat(t, i, r))
        }, P.BitStream.prototype.writeUnitVec = function(e, t) {
            this.writeVec(e, -1.0001, -1.0001, 1.0001, 1.0001, t)
        }, P.BitStream.prototype.readUnitVec = function(e) {
            return this.readVec(-1.0001, -1.0001, 1.0001, 1.0001, e)
        }, P.BitStream.prototype.writeVec32 = function(e) {
            this.writeFloat32(e.x), this.writeFloat32(e.y)
        }, P.BitStream.prototype.readVec32 = function() {
            return v.create(this.readFloat32(), this.readFloat32())
        }, P.BitStream.prototype.writeItemType = function(e) {
            this.writeUint8(M.typeToId(e))
        }, P.BitStream.prototype.readItemType = function() {
            return M.idToType(this.readUint8())
        }, P.BitStream.prototype.writeMapType = function(e) {
            this.writeUint16(T.typeToId(e))
        }, P.BitStream.prototype.readMapType = function() {
            return T.idToType(this.readUint16())
        };
        var I = function() {
                function e(t) {
                    i(this, e);
                    var a = t instanceof ArrayBuffer ? t : null;
                    this.valid = null != a, this.valid ? (this.arrayBuf = a, this.stream = new P.BitStream(a)) : (console.log("Invalid buf type", void 0 === t ? "undefined" : g(t)), "string" == typeof t && console.log("String contents: " + t.substring(0, 1024)))
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
                        w(this.stream.index % 8 == 0), this.stream.writeUint8(e), t.serialize(this.stream)
                    }
                }, {
                    key: "serializeMsgStream",
                    value: function(e, t) {
                        w(this.stream.index % 8 == 0 && t.index % 8 == 0), this.stream.writeUint8(e), this.stream.writeBytes(t, 0, t.index / 8)
                    }
                }, {
                    key: "deserializeMsgType",
                    value: function() {
                        return this.stream.length - 8 * this.stream.byteIndex >= 1 ? this.stream.readUint8() : E.None
                    }
                }]), e
            }(),
            C = {
                kMapNameMaxLen: 24,
                kPlayerNameMaxLen: 16,
                kMouseMaxDist: 64,
                kSmokeMaxRad: 10,
                kActionMaxDuration: 8.5,
                kAbilityMaxCooldown: 60,
                kAirstrikeZoneMaxRad: 256,
                kAirstrikeZoneMaxDuration: 60
            },
            A = {};
        o(_.Type.Player, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeUnitVec(t.dir, 8)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.dir = e.readUnitVec(8)
        }, function(e, t) {
            t.skin = e.readItemType(), t.backpack = e.readItemType(), t.helmet = e.readItemType(), t.chest = e.readItemType(), t.curWeapType = e.readItemType(), t.actionItem = e.readItemType(), t.layer = e.readBits(2), t.dead = e.readBoolean(), t.downed = e.readBoolean(), t.animType = e.readBits(3), t.animSeq = e.readBits(3), t.actionType = e.readBits(3), t.actionSeq = e.readBits(3), t.wearingPan = e.readBoolean(), t.frozen = e.readBoolean(), t.frozenOri = e.readBits(2), t.hasStim = e.readBoolean(), t.role = e.readBits(3)
        }), o(_.Type.Obstacle, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeFloat(t.scale, S.MinScale, S.MaxScale, 8), e.writeBits(0, 6)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.scale = e.readFloat(S.MinScale, S.MaxScale, 8), e.readBits(6)
        }, function(e, t) {
            t.type = e.readMapType(), t.healthT = e.readFloat(0, 1, 8), t.layer = e.readBits(2), t.dead = e.readBoolean(), t.isDoor = e.readBoolean(), t.isDoor && (t.door = {}, t.door.open = e.readBoolean(), t.door.canUse = e.readBoolean(), t.door.seq = e.readBits(6)), t.isButton = e.readBoolean(), t.isButton && (t.button = {}, t.button.onOff = e.readBoolean(), t.button.canUse = e.readBoolean(), t.button.seq = e.readBits(6)), t.isPuzzlePiece = e.readBoolean(), t.isPuzzlePiece && (t.parentBuildingId = e.readUint16()), e.readBits(2)
        }), o(_.Type.Building, function(e, t) {}, function(e, t) {}, function(e, t) {
            t.ceilingDead = e.readBoolean(), t.occupied = e.readBoolean(), t.ceilingDamaged = e.readBoolean(), t.hasPuzzle = e.readBoolean(), t.hasPuzzle && (t.puzzleSolved = e.readBoolean(), t.puzzleErrSeq = e.readBits(7)), e.readBits(4)
        }, function(e, t) {
            t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.layer = e.readBits(2), e.readBits(4)
        }), o(_.Type.Structure, function(e, t) {
            e.writeMapType(t.type), e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeBits(0, 6)
        }, function(e, t) {}, function(e, t) {
            t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), e.readBits(6)
        }, function(e, t) {}), o(_.Type.LootSpawner, function(e, t) {
            e.writeMapType(t.type), e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.layer, 2), e.writeBits(0, 6)
        }, function(e, t) {}, function(e, t) {
            t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.layer = e.readBits(2), e.readBits(6)
        }, function(e, t) {}), o(_.Type.Loot, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function(e, t) {
            e.writeItemType(t.name), e.writeUint8(t.count), e.writeBits(t.layer, 2), e.writeBits(t.isOld, 6)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }, function(e, t) {
            t.name = e.readItemType(), t.count = e.readUint8(), t.layer = e.readBits(2), t.isOld = e.readBits(6)
        }), o(_.Type.DeadBody, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function(e, t) {
            e.writeUint8(t.layer), e.writeUint16(t.playerId)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }, function(e, t) {
            t.layer = e.readUint8(), t.playerId = e.readUint16()
        }), o(_.Type.Decal, function(e, t) {
            e.writeMapType(t.type), e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeFloat(t.scale, S.MinScale, S.MaxScale, 8), e.writeBits(t.layer, 2), e.writeBits(0, 4)
        }, function(e, t) {}, function(e, t) {
            t.type = e.readMapType(), t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.scale = e.readFloat(S.MinScale, S.MaxScale, 8), t.layer = e.readBits(2), e.readBits(4)
        }, function(e, t) {}), o(_.Type.Projectile, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.posZ, 0, b.projectile.maxHeight, 10), e.writeBits(0, 6)
        }, function(e, t) {
            e.writeItemType(t.type), e.writeUint8(t.layer)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.posZ = e.readFloat(0, b.projectile.maxHeight, 10), e.readBits(6)
        }, function(e, t) {
            t.type = e.readItemType(), t.layer = e.readUint8()
        }), o(_.Type.Smoke, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.rad, 0, C.kSmokeMaxRad, 8)
        }, function(e, t) {
            e.writeBits(t.layer, 2), e.writeBits(t.interior, 6)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.rad = e.readFloat(0, C.kSmokeMaxRad, 8)
        }, function(e, t) {
            t.layer = e.readBits(2), t.interior = e.readBits(6)
        }), o(_.Type.Airdrop, function(e, t) {
            e.writeFloat(t.fallT, 0, 1, 7), e.writeBoolean(t.landed)
        }, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function(e, t) {
            t.fallT = e.readFloat(0, 1, 7), t.landed = e.readBoolean()
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        });
        var E = {
                None: 0,
                Join: 1,
                Disconnect: 2,
                Input: 3,
                Edit: 4,
                Joined: 5,
                PlayerInfo: 6,
                Update: 7,
                Kill: 8,
                GameOver: 9,
                Pickup: 10,
                Map: 11,
                Spectate: 12,
                DropItem: 13,
                Emote: 14,
                PlayerStats: 15,
                AdStatus: 16,
                Loadout: 17,
                AssignRole: 18,
                Stats: 19
            },
            D = function() {
                function e() {
                    i(this, e), this.protocol = 0, this.privData = "", this.name = "", this.emotes = [], this.useTouch = !1, this.isMobile = !1, this.bot = !1
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeUint32(this.protocol), e.writeString(this.privData), e.writeString(this.name, C.kPlayerNameMaxLen);
                        for (var t = 0; t < f.Count; t++) e.writeUint8(this.emotes[t]);
                        e.writeBoolean(this.useTouch), e.writeBoolean(this.isMobile), e.writeBoolean(this.bot), e.writeBits(0, 5)
                    }
                }]), e
            }(),
            O = function() {
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
            B = function() {
                function e() {
                    i(this, e), this.seq = 0, this.moveLeft = !1, this.moveRight = !1, this.moveUp = !1, this.moveDown = !1, this.shootStart = !1, this.shootHold = !1, this.portrait = !1, this.touchMoveActive = !1, this.touchMoveDir = v.create(1, 0), this.touchMoveLen = 255, this.toMouseDir = v.create(1, 0), this.toMouseLen = 0, this.inputs = [], this.useItem = ""
                }
                return y(e, [{
                    key: "addInput",
                    value: function(e) {
                        this.inputs.length < 7 && -1 === this.inputs.indexOf(e) && this.inputs.push(e)
                    }
                }, {
                    key: "serialize",
                    value: function(e) {
                        e.writeUint8(this.seq), e.writeBoolean(this.moveLeft), e.writeBoolean(this.moveRight), e.writeBoolean(this.moveUp), e.writeBoolean(this.moveDown), e.writeBoolean(this.shootStart), e.writeBoolean(this.shootHold), e.writeBoolean(this.portrait), e.writeBoolean(this.touchMoveActive), this.touchMoveActive && (e.writeUnitVec(this.touchMoveDir, 8), e.writeUint8(this.touchMoveLen)), e.writeUnitVec(this.toMouseDir, 10), e.writeFloat(this.toMouseLen, 0, C.kMouseMaxDist, 8), e.writeBits(this.inputs.length, 4);
                        for (var t = 0; t < this.inputs.length; t++) e.writeUint8(this.inputs[t]);
                        e.writeItemType(this.useItem)
                    }
                }]), e
            }(),
            L = function e() {
                i(this, e)
            },
            R = function() {
                function e() {
                    i(this, e), this.item = "", this.weapIdx = 0
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeItemType(this.item), e.writeUint8(this.weapIdx)
                    }
                }]), e
            }(),
            F = function() {
                function e() {
                    i(this, e), this.type = 0, this.pos = v.create(0, 0), this.useLoadout = !1, this.isPing = !1
                }
                return y(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeUint8(this.type), e.writeVec(this.pos, 0, 0, 1024, 1024, 16), e.writeBoolean(this.useLoadout), e.writeBoolean(this.isPing), e.writeBits(0, 6)
                    }
                }]), e
            }(),
            j = function() {
                function e() {
                    i(this, e), this.teamMode = 0, this.playerId = 0, this.started = !1, this.gameOpts = 0
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.teamMode = e.readUint8(), this.playerId = e.readUint16(), this.started = e.readUint8(), this.gameOpts = e.readUint8()
                    }
                }]), e
            }(),
            q = function() {
                function e() {
                    i(this, e), this.mapName = "", this.seed = 0, this.width = 0, this.height = 0, this.shoreInset = 0, this.grassInset = 0, this.rivers = [], this.places = [], this.objects = [], this.groundPatches = []
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.mapName = e.readString(C.kMapNameMaxLen), this.seed = e.readUint32(), this.width = e.readUint16(), this.height = e.readUint16(), this.shoreInset = e.readUint16(), this.grassInset = e.readUint16();
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
            N = {
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
            V = function() {
                function e() {
                    i(this, e), this.serializedObjectCache = null, this.objectReg = null, this.clientPlayer = null, this.activePlayer = null, this.grid = null, this.time = 0, this.playerBarn = null, this.bulletBarn = null, this.gas = null, this.map = null, this.delObjIds = [], this.fullObjects = [], this.partObjects = [], this.activePlayerId = 0, this.activePlayerIdDirty = !1, this.activePlayerData = {}, this.aliveCounts = [], this.aliveDirty = !1, this.gasT = 0, this.gasData = {}, this.gasDirty = !1, this.playerInfos = [], this.deletedPlayerIds = [], this.playerStatus = {}, this.playerStatusDirty = !1, this.groupStatus = {}, this.groupStatusDirty = !1, this.bullets = [], this.explosions = [], this.emotes = [], this.planes = [], this.airstrikeZones = [], this.mapIndicators = [], this.ack = 0
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e, t) {
                        var a = e.readUint16(),
                            i = 0;
                        if (0 != (a & N.DeletedObjects)) {
                            i = e.readUint16();
                            for (var r = 0; r < i; r++) this.delObjIds.push(e.readUint16())
                        }
                        var o = 0;
                        if (0 != (a & N.FullObjects)) {
                            o = e.readUint16();
                            for (var p = 0; p < o; p++) {
                                var d = {};
                                d.__type = e.readUint8(), d.__id = e.readUint16(), A[d.__type].deserializePart(e, d), A[d.__type].deserializeFull(e, d), this.fullObjects.push(d)
                            }
                        }
                        for (var h = e.readUint16(), u = 0; u < h; u++) {
                            var g = {};
                            g.__id = e.readUint16();
                            var y = t.getTypeById(g.__id, e);
                            A[y].deserializePart(e, g), this.partObjects.push(g)
                        }
                        0 != (a & N.ActivePlayerId) && (this.activePlayerId = e.readUint16(), this.activePlayerIdDirty = !0);
                        var w = {};
                        if (n(e, w), this.activePlayerData = w, 0 != (a & N.AliveCount)) {
                            for (var x = e.readUint8(), f = 0; f < x; f++) {
                                var b = e.readUint8();
                                this.aliveCounts.push(b)
                            }
                            this.aliveDirty = !0
                        }
                        if (this.gasT = e.readFloat(0, 1, 16), 0 != (a & N.Gas)) {
                            var _ = {};
                            m(e, _), this.gasData = _, this.gasDirty = !0
                        }
                        if (0 != (a & N.PlayerInfos))
                            for (var S = e.readUint8(), k = 0; k < S; k++) {
                                var z = {};
                                c(e, z), this.playerInfos.push(z)
                            }
                        if (0 != (a & N.DeletePlayerIds))
                            for (var M = e.readUint8(), T = 0; T < M; T++) {
                                var P = e.readUint16();
                                this.deletedPlayerIds.push(P)
                            }
                        if (0 != (a & N.PlayerStatus)) {
                            var I = {};
                            s(e, I), this.playerStatus = I, this.playerStatusDirty = !0
                        }
                        if (0 != (a & N.GroupStatus)) {
                            var E = {};
                            l(e, E), this.groupStatus = E, this.groupStatusDirty = !0
                        }
                        if (0 != (a & N.Bullets))
                            for (var D = e.readUint8(), O = 0; O < D; O++) {
                                var B = {};
                                B.playerId = e.readUint16(), B.bulletType = e.readItemType(), B.pos = e.readVec(0, 0, 1024, 1024, 16), B.dir = e.readUnitVec(8), B.layer = e.readBits(2), B.varianceT = e.readFloat(0, 1, 5), B.distAdjIdx = e.readBits(4), B.clipDistance = e.readBoolean(), B.clipDistance && (B.distance = e.readFloat(0, 128, 8)), B.shotFx = e.readBoolean(), B.shotFx && (B.shotSourceType = e.readItemType(), B.shotOffhand = e.readBits(7), B.lastShot = e.readBoolean()), B.reflectCount = e.readBits(2), B.reflectObjId = 0;
                                var L = e.readBoolean();
                                L && (B.reflectObjId = e.readUint16()), this.bullets.push(B)
                            }
                        if (0 != (a & N.Explosions))
                            for (var R = e.readUint8(), F = 0; F < R; F++) {
                                var j = {};
                                j.pos = e.readVec(0, 0, 1024, 1024, 16), j.type = e.readItemType(), j.layer = e.readUint8(), this.explosions.push(j)
                            }
                        if (0 != (a & N.Emotes))
                            for (var q = e.readUint8(), V = 0; V < q; V++) {
                                var G = {};
                                G.type = e.readUint8(), G.playerId = e.readUint16(), G.itemType = e.readItemType(), G.isPing = e.readBoolean(), G.isPing && (G.pos = e.readVec(0, 0, 1024, 1024, 16)), e.readBits(7), this.emotes.push(G)
                            }
                        if (0 != (a & N.Planes))
                            for (var U = e.readUint8(), H = 0; H < U; H++) {
                                var W = {};
                                W.id = e.readUint8();
                                var K = e.readVec(0, 0, 2048, 2048, 10);
                                W.pos = v.create(K.x - 512, K.y - 512), W.planeDir = e.readUnitVec(8), W.actionComplete = e.readBoolean(), W.action = e.readBits(3), this.planes.push(W)
                            }
                        if (0 != (a & N.AirstrikeZones))
                            for (var Z = e.readUint8(), X = 0; X < Z; X++) {
                                var Y = {};
                                Y.pos = e.readVec(0, 0, 1024, 1024, 12), Y.rad = e.readFloat(0, C.kAirstrikeZoneMaxRad, 8), Y.duration = e.readFloat(0, C.kAirstrikeZoneMaxDuration, 8), this.airstrikeZones.push(Y)
                            }
                        if (0 != (a & N.MapIndicators))
                            for (var J = e.readUint8(), Q = 0; Q < J; Q++) {
                                var $ = {};
                                $.id = e.readBits(6), $.dead = e.readBoolean(), $.equipped = e.readBoolean(), $.type = e.readItemType(), $.pos = e.readVec(0, 0, 1024, 1024, 16), this.mapIndicators.push($)
                            }
                        this.ack = e.readUint8()
                    }
                }]), e
            }(),
            G = function() {
                function e() {
                    i(this, e), this.itemSourceType = "", this.mapSourceType = "", this.damageType = 0, this.targetId = 0, this.killerId = 0, this.killCreditId = 0, this.killerKills = 0, this.downed = !1, this.killed = !1, this.targetRole = 0
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.damageType = e.readUint8(), this.itemSourceType = e.readItemType(), this.mapSourceType = e.readMapType(), this.targetId = e.readUint16(), this.killerId = e.readUint16(), this.killCreditId = e.readUint16(), this.killerKills = e.readUint8(), this.downed = e.readBoolean(), this.killed = e.readBoolean(), this.targetRole = e.readBits(3), e.readBits(3)
                    }
                }]), e
            }(),
            U = function() {
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
            H = function() {
                function e() {
                    i(this, e), this.teamId = 0, this.teamRank = 0, this.gameOver = !1, this.winningTeamId = 0, this.playerStats = []
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.teamId = e.readUint8(), this.teamRank = e.readUint8(), this.gameOver = e.readUint8(), this.winningTeamId = e.readUint8();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var i = new U;
                            i.deserialize(e), this.playerStats.push(i.playerStats)
                        }
                    }
                }]), e
            }(),
            W = {
                Full: 0,
                AlreadyOwned: 1,
                AlreadyEquipped: 2,
                BetterItemEquipped: 3,
                Success: 4,
                GunCannotFire: 5
            },
            K = function() {
                function e() {
                    i(this, e), this.type = 0, this.item = "", this.count = 0
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.type = e.readUint8(), this.item = e.readItemType(), this.count = e.readUint8()
                    }
                }]), e
            }(),
            Z = function() {
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
                        for (var t = 0; t < f.Count; t++) e.writeUint8(this.emotes[t]);
                        e.writeUint8(this.custom)
                    }
                }]), e
            }(),
            J = function() {
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
            Q = function() {
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
            BitStream: P.BitStream,
            Constants: C,
            getPlayerStatusUpdateRate: r,
            MsgStream: I,
            Msg: E,
            JoinMsg: D,
            DisconnectMsg: O,
            InputMsg: B,
            EditMsg: L,
            DropItemMsg: R,
            JoinedMsg: j,
            UpdateMsg: V,
            MapMsg: q,
            KillMsg: G,
            PlayerStatsMsg: U,
            GameOverMsg: H,
            PickupMsgType: W,
            PickupMsg: K,
            SpectateMsg: Z,
            EmoteMsg: F,
            AdStatusMsg: X,
            LoadoutMsg: Y,
            AssignRoleMsg: J,
            StatsMsg: Q
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
            this.game = e, this.particleBarn = a, this.localization = r, this.touch = c, this.inputBinds = m, this.inputBindUi = d, this.adManager = h, this.pieTimer = new T.$, this.gameElem = s("#ui-game"), this.statsMain = s("#ui-stats"), this.statsElem = s("#ui-stats-bg"), this.statsContentsContainer = s("#ui-stats-contents"), this.statsContents = s("#ui-stats-contents-inner"), this.statsHeader = s("#ui-stats-header"), this.statsInfoBox = s("#ui-stats-info-box"), this.statsOptions = s("#ui-stats-options"), this.statsAds = s(".ui-stats-ad-container"), this.statsLogo = s("#ui-stats-logo"), this.killElem = s("#ui-kills"), this.killText = s("#ui-kill-text"), this.killCount = s("#ui-kill-count"), this.killTimeout = null, this.escMenuElem = s("#ui-game-menu"), this.escMenuDisplayed = !1, this.topLeft = s("#ui-top-left"), this.topCenter = s("#ui-top-center-scopes"), this.waitingForPlayers = !0, this.waitingText = s("#ui-waiting-text"), this.spectating = !1, this.prevSpectatorCount = 0, this.spectatorCount = 0, this.spectatorCounterDisplayed = !1, this.spectatorCounterContainer = s("#ui-spec-counter"), this.spectatorCounter = s("#ui-spec-counter-number"), this.spectateMode = s(".ui-spectate-mode"), this.spectatedPlayerText = s("#ui-spectate-text"), this.spectatedPlayerName = "", this.spectatedPlayerId = 0, this.spectateModeStats = s("#ui-spectate-stats"), this.spectateModeStatsData = s("#ui-spectate-stats-data"), this.spectateOptionsWrapper = s("#ui-spectate-options-wrapper"), this.rightCenter = s("#ui-right-center"), this.leaderboardAlive = s("#ui-leaderboard-alive"), this.playersAlive = s(".js-ui-players-alive"), this.leaderboardAliveFaction = s("#ui-leaderboard-alive-faction"), this.playersAliveRed = s(".js-ui-players-alive-red"), this.playersAliveBlue = s(".js-ui-players-alive-blue"), this.playersAliveRedCounter = 0, this.playersAliveBlueCounter = 0, this.playerKills = s(".js-ui-player-kills"), this.kills = 0, this.announcement = s("#ui-announcement"), this.mapContainer = s("#ui-map-container"), this.mapContainerBottom = 52, this.mapInfo = s("#ui-map-info"), this.mapInfoBottom = 218, this.gasState = {}, this.gasIcon = s("#ui-gas-icon"), this.gasTimer = s("#ui-gas-timer"), this.mapMinimizeButton = s("#ui-map-minimize"), this.menuDisplayButton = s("#ui-menu-display"), this.bottomCenterRight = s("#ui-bottom-center-right"), s("#ui-map-wrapper").css("display", "block"), s("#ui-team").css("display", "block"), this.actionSeq = -1, this.displayMapDirty = !1, this.displayMapClear = !1, s(".ui-map-expand").on("mousedown", function(e) {
                e.stopPropagation()
            }), s(".ui-map-expand").on("click", function(e) {
                f.touch ? u.bigmapDisplayed || u.displayMapLarge() : f.uiLayout == f.UiLayout.Lg && u.displayMapLarge(u.bigmapDisplayed)
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
            var g = "ios" == f.os ? "none" : "block";
            (f.webview || f.touch) && (g = "none"), s("#btn-game-fullscreen").css("display", g), this.resumeButton = s("#btn-game-resume"), this.resumeButton.on("mousedown", function(e) {
                e.stopPropagation()
            }), this.resumeButton.on("click", function() {
                u.toggleEscMenu()
            }), f.touch && this.resumeButton.css("display", "none"), s("#btn-spectate-quit").on("click", function() {
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
            }), this.flairElems = s(".ui-health-flair"), this.flairId = 0, this.healthRed = new n(255, 0, 0), this.healthDarkpink = new n(255, 45, 45), this.healthLightpink = new n(255, 112, 112), this.healthWhite = new n(255, 255, 255), this.healthGrey = new n(179, 179, 179), this.minimapDisplayed = !0, this.visibilityMode = 0, this.hudVisible = !0, this.gasRenderer = new S(o, 0), this.gasSafeZoneRenderer = new k, this.sentAdStatus = !1, this.frame = 0;
            var y = this;
            this.weapsDirty = !1, this.weapSwitches = s("#ui-weapon-id-1, #ui-weapon-id-2"), this.weapNoSwitches = s("#ui-weapon-id-3, #ui-weapon-id-4"), this.weapDraggedId = 0, this.swapWeapSlots = !1, this.weapDraggedDiv = null, this.weapDragging = !1, this.weapDropped = !1, this.resetWeapSlotStyling = function() {
                y.weapDraggedDiv && (y.weapSwitches.css({
                    left: "",
                    top: ""
                }), s("#ui-game").css({
                    "pointer-events": ""
                })), y.weapDraggedDiv = null, y.weapDragging = !1, y.weapDropped = !1, y.weapSwitches.hasClass("ui-weapon-dragged") && y.weapSwitches.removeClass("ui-weapon-dragged"), y.weapNoSwitches.hasClass("ui-outline-hover") || y.weapNoSwitches.addClass("ui-outline-hover")
            }, f.touch || (this.weapSwitches.on("mousedown", function(e) {
                0 == e.button && (y.weapDraggedDiv = s(this), y.weapDraggedId = s(this).data("slot"))
            }), s("#ui-game").on("mousemove", function(e) {
                y.weapDraggedDiv && !y.weapDropped && (y.weapDragging ? (y.weapDraggedDiv.css({
                    left: e.pageX - 80,
                    top: e.pageY - 30
                }), y.weapDraggedDiv.addClass("ui-weapon-dragged")) : (s("#ui-game").css({
                    "pointer-events": "initial"
                }), y.weapNoSwitches.removeClass("ui-outline-hover"), y.weapDragging = !0))
            }), s("#ui-game, #ui-weapon-id-1, #ui-weapon-id-2").on("mouseup", function(e) {
                0 == e.button && null != y.weapDraggedDiv && (y.weapSwitches.each(function() {
                    var e = s(this).data("slot");
                    s(this).is(":hover") && y.weapDraggedId != e && (y.swapWeapSlots = !0, y.weapDropped = !0)
                }), y.swapWeapSlots || y.resetWeapSlotStyling())
            })), this.mapSpriteBarn = new M.MapSpriteBarn, this.ee = new z.te(this.mapSpriteBarn), this.playerMapSprites = [], this.playerPingSprites = {}, this.container = new l.Container, this.container.mask = new l.Graphics, this.display = {
                gas: this.gasRenderer.display,
                gasSafeZone: this.gasSafeZoneRenderer.display,
                airstrikeZones: i.airstrikeZoneContainer,
                mapSprites: this.mapSpriteBarn.container,
                teammates: new l.Container,
                player: new l.Container,
                border: new l.Graphics
            }, this.mapSprite = new l.Sprite(l.Texture.EMPTY), this.mapSprite.anchor = new l.Point(.5, .5), this.container.addChild(this.mapSprite), this.container.addChild(this.display.gas), this.container.addChild(this.display.gasSafeZone), this.container.addChild(this.display.airstrikeZones), this.container.addChild(this.display.mapSprites), this.container.addChild(this.display.teammates), this.container.addChild(this.display.player), this.container.addChild(this.display.border), this.bigmapDisplayed = !1, this.screenScaleFactor = 1;
            var x = this.getMinimapMargin(),
                b = this.getMinimapSize();
            this.minimapPos = w.create(x + b / 2, e.ae.screenHeight - b / 2 - x), this.dead = !1, this.audioManager = t, this.muteButton = s("#ui-mute-ingame"), this.muteButtonImage = this.muteButton.find("img"), this.muteOffImg = "audio-off.img", this.muteOnImg = "audio-on.img";
            var _ = this.audioManager.mute;
            this.muteButtonImage.attr("src", _ ? this.muteOffImg : this.muteOnImg), this.muteButton.on("mousedown", function(e) {
                e.stopPropagation()
            }), this.muteButton.on("click", function(e) {
                var t = u.audioManager.muteToggle();
                u.muteButtonImage.attr("src", t ? u.muteOffImg : u.muteOnImg), t = null
            }), this.displayingStats = !1, this.teamMemberHealthBarWidth = parseInt(s(".ui-team-member-health").find(".ui-bar-inner").css("width")), this.teamMemberHeight = 48, this.groupPlayerCount = 0, this.teamSelectors = [];
            for (var P = 0; P < 4; P++) {
                var I = this.topLeft,
                    C = P;
                this.teamSelectors.push({
                    teamNameHtml: "",
                    groupId: s(I).find("[data-id=" + C + "]"),
                    groupIdDisplayed: !1,
                    teamName: s(I).find("[data-id=" + C + "]").find(".ui-team-member-name"),
                    teamIcon: s(I).find("[data-id=" + C + "]").find(".ui-team-member-icon"),
                    teamStatus: s(I).find("[data-id=" + C + "]").find(".ui-team-member-status"),
                    teamHealthInner: s(I).find("[data-id=" + C + "]").find(".ui-health-actual"),
                    teamColor: s(I).find("[data-id=" + C + "]").find(".ui-team-member-color"),
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
            d = a("b198b546"),
            h = (d.PingType, d.PingData),
            u = m.Action,
            g = m.GasMode,
            y = a("300e2704"),
            w = a("c2a798c8"),
            x = a("10899aea"),
            f = (a("1901e2d9"), a("ce29f17f")),
            b = a("f398b7c7"),
            _ = a("a7f094a3"),
            S = _.GasRenderer,
            k = _.GasSafeZoneRenderer,
            v = a("26be8056"),
            z = (a("d306eab6"), a("966d985b")),
            M = a("edfa1d55"),
            T = (a("119e8c4c"), a("feb8fc30"));
        a("6e43d1d7"), r.prototype = {
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
                var p = t.ie,
                    d = t.re,
                    h = t;
                this.weapsDirty && this.resetWeapSlotStyling(), this.weapsDirty = !1, this.ee.oe(e);
                var y = x.max(Math.floor(i.duration * (1 - i.circleT)), 0),
                    _ = {
                        mode: i.mode,
                        time: y
                    };
                if (this.gasState.mode != _.mode || this.gasState.time != _.time) {
                    this.gasState = _;
                    var S = this.gasState.mode == g.Moving;
                    this.mapInfo.removeClass("icon-pulse"), this.gasIcon.removeClass("gas-icon"), this.gasIcon.removeClass("danger-icon"), S && this.mapInfo.addClass("icon-pulse"), this.gasIcon.addClass(S ? "danger-icon" : "gas-icon");
                    var k = Math.floor(this.gasState.time / 60),
                        z = this.gasState.time % 60,
                        M = ("0" + z).slice(-2);
                    this.gasTimer.html(k + ":" + M)
                }
                if (this.spectatorCount = d.spectatorCount, this.updateSpectatorCountDisplay(!1), p.dead && !this.dead && (this.dead = !0, this.pieTimer.stop()), (h.downed || this.dead) && this.resetWeapSlotStyling(), this.actionSeq != t.action.seq && (this.actionSeq = t.action.seq, this.pieTimer.stop(), t.action.type != u.None && !this.displayingStats)) {
                    var T = "",
                        P = "",
                        I = "";
                    switch (t.action.type) {
                        case u.Reload:
                        case u.ReloadAlt:
                            m.items[t.action.item] && (P = this.localization.translate("game-reloading"));
                            break;
                        case u.UseItem:
                            m.items[t.action.item] && (P = this.localization.translate("game-using"), I = this.localization.translate("game-" + t.action.item));
                            break;
                        case u.Revive:
                            var C = o.ne(t.action.targetId).name;
                            P = this.localization.translate("game-reviving"), I = h.downed ? "" : C
                    }
                    "" == P && "" == I || ("svo" == this.localization.translate("word-order") ? (T += P || "", T += I ? " " + I : "") : "sov" == this.localization.translate("word-order") && (T += I ? I + " " : "", T += P ? " " + P : ""), this.pieTimer.start(T, t.action.time, t.action.duration))
                }
                this.bigmapDisplayed || (this.mapSprite.x = this.minimapPos.x + this.mapSprite.width / 2 - t.pos.x / a.width * this.mapSprite.width, this.mapSprite.y = this.minimapPos.y - this.mapSprite.height / 2 + t.pos.y / a.height * this.mapSprite.height);
                var A = w.create(.5 * n.screenWidth / n.z(), .5 * n.screenHeight / n.z()),
                    E = {
                        min: w.sub(n.pos, A),
                        max: w.add(n.pos, A)
                    },
                    D = o.ne(t.__id).groupId,
                    O = o.getGroupInfo(D);
                if (!O) {
                    var B = {
                        playerId: t.__id,
                        groupId: D,
                        spectating: this.spectating,
                        playing: this.game.playingTicker,
                        groupInfo: o.groupInfo
                    };
                    b.logError("badTeamInfo_1: " + JSON.stringify(B))
                }
                for (var L = f.uiLayout == f.UiLayout.Sm, R = O.playerIds.length, F = 0; F < R; F++) {
                    var j = this.teamSelectors[F],
                        q = O.playerIds[F],
                        N = o.ne(q),
                        V = q == h.__id,
                        G = o.se(q);
                    if (G && s > 1) {
                        j.groupIdDisplayed || (j.groupId.css("display", "block"), j.groupIdDisplayed = !0), this.updateTeam(F, v.htmlEscape(N.name), G.health, {
                            disconnected: G.disconnected,
                            dead: G.dead,
                            downed: G.downed,
                            factionLeader: G.factionLeader
                        }, N.playerId, N.teamId, o);
                        for (var U in j.indicators)
                            if (j.indicators.hasOwnProperty(U)) {
                                var H = j.indicators[U],
                                    W = H.elem,
                                    K = !0;
                                if ((!V || H.displayAll) && !l) {
                                    var Z = G.pos,
                                        X = w.normalizeSafe(w.sub(Z, n.pos), w.create(1, 0)),
                                        Y = c.intersectRayAabb(n.pos, X, E.min, E.max),
                                        J = Math.atan2(X.y, -X.x) + .5 * Math.PI,
                                        Q = n.pointToScreen(Y),
                                        $ = c.testCircleAabb(Z, m.player.radius, E.min, E.max);
                                    if (!G.dead && !$) {
                                        var ee = 32,
                                            te = "translate(-50%, -50%) rotate(" + J + "rad)";
                                        L && (ee = 16, te += " scale(0.5)"), K = !1;
                                        var ae = "iphonex" == f.model && f.webview ? 20 : 0;
                                        W.css({
                                            left: x.clamp(Q.x, ee, n.screenWidth - ee),
                                            top: x.clamp(Q.y, ee, n.screenHeight - ee - ae),
                                            transform: te
                                        }), H.displayed || (W.css("display", "block"), H.displayed = !0)
                                    }
                                }
                                K && H.displayed && (W.css("display", "none"), H.displayed = !1)
                            }
                    }
                }
                for (var ie = R; ie < this.teamSelectors.length; ie++) {
                    var re = this.teamSelectors[ie];
                    for (var oe in re.indicators)
                        if (re.indicators.hasOwnProperty(oe)) {
                            var ne = re.indicators[oe];
                            ne.displayed && (ne.elem.css("display", "none"), ne.displayed = !1)
                        }
                    re.groupIdDisplayed && (re.groupId.css("display", "none"), re.groupIdDisplayed = !1)
                }
                if (a.factionMode) {
                    var se = o.ne(h.__id);
                    if (this.flairId != se.teamId) {
                        this.flairId = se.teamId;
                        var le = 1 == this.flairId ? "red" : "blue";
                        this.flairElems.css({
                            display: "block",
                            "background-image": "url(../img/gui/player-patch-" + le + ".svg)"
                        })
                    }
                }
                s > 1 && this.groupPlayerCount != R && f.uiLayout == f.UiLayout.Lg && (this.groupPlayerCount = R, this.spectateOptionsWrapper.css({
                    top: this.groupPlayerCount * this.teamMemberHeight + 12
                })), this.updatePlayerMapSprites(e, t, o, a), this.mapSpriteBarn.update(e, this, a), this.pieTimer.update(e, n), this.trySendAdStatus()
            },
            updatePlayerMapSprites: function(e, t, a, i) {
                for (var r = this, o = a.ne(t.__id), n = (a.getGroupInfo(o.groupId), a.getTeamInfo(o.teamId), 0), s = function(e, t, a, i, o, s, c) {
                        if (n >= r.playerMapSprites.length) {
                            var m = r.mapSpriteBarn.addSprite();
                            r.playerMapSprites.push(m)
                        }
                        var p = r.playerMapSprites[n++];
                        p.pos = w.copy(e), p.scale = t, p.alpha = a, p.visible = i, p.zOrder = o, p.sprite.texture = l.Texture.fromImage(s), p.sprite.tint = c
                    }, c = Object.keys(a.playerStatus), m = 0; m < c.length; m++) {
                    var p = a.playerStatus[c[m]],
                        d = p.playerId,
                        h = a.ne(d),
                        u = h.groupId == o.groupId,
                        g = 65535 + 2 * d;
                    d == o.playerId && (g += 131070), p.factionLeader && (g += 65535);
                    var y = "player-map-inner.img";
                    p.dead ? y = p.factionLeader ? "skull-leader.img" : "skull-outlined.img" : p.factionLeader ? y = "player-star.img" : p.downed && (y = u ? "player-map-inner.img" : "player-map-downed.img");
                    var x = u ? a.getGroupColor(d) : a.getTeamColor(h.teamId),
                        b = f.uiLayout == f.UiLayout.Sm ? .15 : .2,
                        _ = b;
                    if (_ = u ? p.dead ? 1.5 * b : p.factionLeader ? 1.25 * b : 1 * b : p.dead || p.downed || p.factionLeader ? 1.25 * b : .75 * b, s(p.pos, _, p.minimapAlpha, p.minimapVisible, g, y, x), u) {
                        var S = f.uiLayout == f.UiLayout.Sm ? .25 : .3,
                            k = p.minimapVisible && !p.factionLeader;
                        s(p.pos, S, p.minimapAlpha, k, g - 1, "player-map-outer.img", 16777215)
                    }
                }
                for (var v = this.playerMapSprites.length - 1; v >= n; v--) this.playerMapSprites[v].visible = !1
            },
            getMinimapMargin: function() {
                return f.uiLayout == f.UiLayout.Sm ? 4 : 16
            },
            getMinimapSize: function() {
                return f.uiLayout == f.UiLayout.Sm ? 192 : 256
            },
            getMinimapBorderWidth: function() {
                return f.uiLayout == f.UiLayout.Sm ? 1 : 4
            },
            createPing: function(e, t, a, i, r, o) {
                var n = this,
                    s = h[e];
                if (s) {
                    var c = function(e, a) {
                            var i = n.mapSpriteBarn.addSprite();
                            return i.pos = w.copy(t), i.scale = e, i.lifetime = s.mapLife, i.pulse = !1, i.zOrder = 100, i.sprite.texture = l.Texture.fromImage(s.mapTexture), i.sprite.tint = a, i
                        },
                        m = function(e) {
                            var a = n.mapSpriteBarn.addSprite();
                            return a.pos = w.copy(t), a.scale = 0, a.lifetime = s.pingLife, a.pulse = !0, a.zOrder = 99, a.sprite.texture = l.Texture.fromImage("ping-map-pulse.img"), a.sprite.tint = e, a
                        };
                    if (s.mapEvent) c(1.5 * (f.uiLayout == f.UiLayout.Sm ? .15 : .2), s.tint).release(), m(s.tint).release();
                    else {
                        var p = 16777215,
                            d = r.ne(i),
                            u = r.ne(a),
                            g = r.se(a);
                        d && u && g && (p = g.factionLeader ? 65280 : d.groupId == u.groupId ? r.getGroupColor(a) : r.getTeamColor(u.teamId)), this.playerPingSprites[a] || (this.playerPingSprites[a] = []);
                        for (var y = this.playerPingSprites[a], x = 0; x < y.length; x++) y[x].free();
                        var b = f.uiLayout == f.UiLayout.Sm ? .15 : .2,
                            _ = c(b, p),
                            S = m(p);
                        y.push(_), y.push(S)
                    }
                }
            },
            updateMapSprite: function(e, t, a, i) {
                e.displayed && (void 0 != e.life && (e.life -= i, e.displayed = e.life > 0, e.maxLife - e.life < .1 ? t.alpha = (e.maxLife - e.life) / .1 : e.life < .5 ? t.alpha = x.max(e.life / .5, 0) : t.alpha = 1), e.pulse && e.displayed && (e.scale = e.scale + i / 2.5, t.scale.set(e.scale, e.scale)), t.visible = a && t.alpha > 0)
            },
            le: function(e) {
                this.ee.ce(e)
            },
            getMapPosFromWorldPos: function(e, t) {
                var a = this.mapSprite.x - this.mapSprite.width / 2 + e.x / t.width * this.mapSprite.width,
                    i = this.mapSprite.y + this.mapSprite.height / 2 - e.y / t.height * this.mapSprite.height;
                return w.create(a, i)
            },
            getWorldPosFromMapPos: function(e, t, a) {
                var i = !1;
                if (f.screenWidth, this.bigmapDisplayed) {
                    var r = (a.screenWidth - this.mapSprite.width) / 2,
                        o = (a.screenHeight - this.mapSprite.height) / 2;
                    f.uiLayout != f.UiLayout.Sm || f.isLandscape || (o = 0), i = e.x > r && e.x < a.screenWidth - r && e.y > o && e.y < a.screenHeight - o
                } else if (this.minimapDisplayed) {
                    var n = this.getMinimapSize(),
                        s = this.getMinimapMargin(),
                        l = n * this.screenScaleFactor,
                        c = .5 * (l + s);
                    i = e.x > this.minimapPos.x - c && e.x < this.minimapPos.x + c && e.y > this.minimapPos.y - c && e.y < this.minimapPos.y + c
                }
                if (i) {
                    var m = w.create(this.mapSprite.x - this.mapSprite.width / 2, this.mapSprite.y + this.mapSprite.height / 2),
                        p = (e.x - m.x) / this.mapSprite.width * t.width,
                        d = (m.y - e.y) / this.mapSprite.height * t.height;
                    return w.create(p, d)
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
                if (f.webview && f.version >= "1.0.8") this.adManager.hideBannerAd();
                else if (window.aiptag) {
                    var e = [];
                    e = f.webview ? ["surviv-io_300x250_webview", "surviv-io_728x90_webview", "surviv-io_300x250_webview_2"] : f.mobile ? ["surviv-io_300x250", "surviv-io_728x90", "surviv-io_300x250_mobile_2"] : ["surviv-io_300x250", "surviv-io_728x90", "surviv-io_300x250_2"];
                    for (var t = 0; t < e.length; t++) ! function(t) {
                        var a = e[t];
                        window.aiptag.cmd.display.push(function() {
                            aipDisplayTag.destroy(a)
                        })
                    }(t)
                }
            },
            refeshMainPageAds: function() {
                if (f.webview && f.version >= "1.0.8") this.adManager.showBannerAd();
                else if (window.aiptag) {
                    var e = [];
                    f.webview ? (e = ["surviv-io_300x250_webview"], f.tablet && e.push("surviv-io_728x90_webview")) : f.mobile ? (e = ["surviv-io_300x250"], f.tablet && e.push("surviv-io_728x90")) : e = ["surviv-io_300x250", "surviv-io_728x90"];
                    for (var t = 0; t < e.length; t++) ! function(t) {
                        var a = e[t];
                        window.aiptag.cmd.display.push(function() {
                            aipDisplayTag.display(a)
                        })
                    }(t)
                }
            },
            trySendAdStatus: function() {
                if (++this.frame % 180 == 0 && !this.sentAdStatus && (window.aiptagPreroll || window.freestarPreroll || this.game.H)) {
                    this.sentAdStatus = !0;
                    var e = new y.AdStatusMsg;
                    e.blocked = window.adsBlocked, e.prerollLoaded = void 0 !== window.preroll, e.prerollFreestar = !!window.freestarPreroll, e.prerollAIP = !!window.aiptagPreroll, this.game.q(y.Msg.AdStatus, e)
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
                    type: u.None
                }, this.displayMapLarge(!0), this.displayMiniMap(), this.clearStatsElems(), this.killElem.hide(), this.clearTeamUI(), this.toggleEscMenu(!0), this.toggleLocalStats(!0), this.visibilityMode = 0, this.spectatorCount = 0, this.updatePlayerKills(0)
            },
            beginSpectating: function() {
                this.specBegin = !0
            },
            hideStats: function() {
                this.displayingStats = !1, this.statsMain.css("display", "none"), this.statsElem.stop().css({
                    display: "none",
                    opacity: 0
                }), this.statsContents.stop().hide(), f.webview && f.version >= "1.0.8" && this.adManager.hideBannerAd()
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
                        y = g ? 1750 : 2500;
                    this.setBannerAd(y, !0);
                    for (var w = n == r || c && r == t, b = c && n != t, _ = w ? this.getTitleVictoryText(b) : this.getTitleDefeatText(l, b), S = 0, k = 0; k < e.length; k++) S += e[k].kills;
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
                        P = f.uiLayout != f.UiLayout.Sm || f.tablet ? 250 : 125,
                        I = 0;
                    I -= (e.length - 1) * P / 2, I -= 10 * (e.length - 1);
                    for (var C = 0; C < e.length; C++) {
                        var A = e[C],
                            E = m.ne(A.playerId),
                            D = i(A.timeAlive),
                            O = "ui-stats-info-player";
                        O += A.dead ? " ui-stats-info-status" : "";
                        var B = function(e) {
                            return s("<div/>", {
                                class: e
                            })
                        }(O);
                        if (B.css("left", I), B.append(s("<div/>", {
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
                                var L = 1 == E.teamId ? "ui-stats-info-player-red-ribbon" : "ui-stats-info-player-blue-ribbon";
                                B.append(s("<div/>", {
                                    class: "ui-stats-info-player-badge " + L
                                }))
                        }
                        this.statsInfoBox.append(B), I += 10
                    }
                    var R = s("<a/>", {
                        class: "ui-stats-restart btn-green btn-darken menu-option",
                        html: this.localization.translate("game-play-new-game")
                    });
                    if (R.on("click", function() {
                            u.quitGame()
                        }), this.statsOptions.append(R), o || this.waitingForPlayers) R.css({
                        width: f.uiLayout != f.UiLayout.Sm || f.tablet ? 225 : 130
                    });
                    else {
                        R.css({
                            left: f.uiLayout != f.UiLayout.Sm || f.tablet ? -72 : -46
                        });
                        var F = s("<a/>", {
                            class: "btn-green btn-darken menu-option ui-stats-spectate",
                            html: this.localization.translate("game-spectate")
                        });
                        F.on("click", this.beginSpectating.bind(this)), this.statsOptions.append(F)
                    }
                    var j = 0,
                        q = 250 / x.max(1, e.length),
                        N = 750 / x.max(1, e.length);
                    this.statsInfoBox.children().each(function(e, t) {
                        var a = s(t);
                        a.css("opacity", 0), a.delay(y + N + (j + e) * q).animate({
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
                        a.hide(), a.delay(y + N + (j + e) * q).fadeIn(500), j++
                    }), this.statsElem.stop(), this.statsElem.css("display", "block"), this.statsElem.delay(y).animate({
                        opacity: 1
                    }, 1e3), this.statsContents.stop(), this.statsContents.css("display", "block"), this.statsContents.delay(y).animate({
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
                    left: f.uiLayout != f.UiLayout.Sm || f.tablet ? -72 : -46
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
                f.webview && f.version >= "1.0.8" ? setTimeout(function() {
                    i(), a.adManager.showBannerAd()
                }, r) : window.adsBlocked ? (r += 500, setTimeout(function() {
                    i(), s(f.mobile ? "#ui-stats-ad-container-mobile" : "#ui-stats-ad-container-desktop").css("display", "inline-block");
                    var e = "";
                    if (e = s(f.webview ? "#surviv-io_300x250_webview_2" : f.mobile ? "#surviv-io_300x250_mobile_2" : "#surviv-io_300x250_2")) {
                        e.html("");
                        var t = s(".ui-stats-adblock-plea").clone();
                        t.css("display", "block"), e.html(t)
                    }
                }, r)) : window.aiptag && setTimeout(function() {
                    i(), s(f.mobile ? "#ui-stats-ad-container-mobile" : "#ui-stats-ad-container-desktop").css("display", "inline-block");
                    var e = "";
                    (e = f.webview ? "surviv-io_300x250_webview_2" : f.mobile ? "surviv-io_300x250_mobile_2" : "surviv-io_300x250_2") && window.aiptag.cmd.display.push(function() {
                        aipDisplayTag.display(e)
                    })
                }, r)
            },
            setSpectateTarget: function(e, t, a, i, r) {
                if (e != this.spectatedPlayerId) {
                    this.setSpectating(!0, a);
                    var o = r.ne(e),
                        n = r.ne(t),
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
                var t = f.uiLayout == f.UiLayout.Sm ? ".js-ui-mobile-map-hidden" : "js-ui-desktop-map-hidden";
                t += ", .js-ui-map-hidden", s(2 == this.visibilityMode ? ".js-ui-hud-show" : t).css("display", this.bigmapDisplayed ? "none" : "block"), s(".js-ui-map-show").css("display", this.bigmapDisplayed ? "block" : "none"), this.updateSpectatorCountDisplay(!0), this.redraw(this.game.ae)
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
                    var e = f.uiLayout == f.UiLayout.Sm;
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
                    case g.Waiting:
                        a = this.localization.translate("game-red-zone-advances");
                        var i = Math.floor(t / 60),
                            r = t - 60 * i;
                        a += i > 1 ? " " + i + " " + this.localization.translate("game-minutes") : "", a += 1 == i ? " " + i + " " + this.localization.translate("game-minute") : "", a += r > 0 ? " " + Math.floor(r) + " " + this.localization.translate("game-seconds") : "";
                        break;
                    case g.Moving:
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
                    l = this.getMapPosFromWorldPos(w.add(n.pos, w.create(n.rad, 0)), i),
                    c = w.length(w.sub(l, s));
                this.gasRenderer.render(s, c, t.isActive());
                var m = t.circleNew,
                    p = this.getMapPosFromWorldPos(m.pos, i),
                    d = this.getMapPosFromWorldPos(w.add(m.pos, w.create(m.rad, 0)), i),
                    h = w.length(w.sub(d, p)),
                    u = this.getMapPosFromWorldPos(e, i),
                    g = t.isActive(),
                    y = t.isActive() && !this.bigmapDisplayed;
                this.gasSafeZoneRenderer.render(p, h, u, g, y), r.renderAirstrikeZones(this, i, o)
            },
            updateHealthBar: function(e, t, a, i) {
                var r = e,
                    n = .01 * i.health * r;
                n = i.dead ? 0 : x.max(n, 1), t.css("width", n), n > 0 && a && a.css("width", n);
                var s = i.health,
                    l = this.healthRed,
                    c = this.healthDarkpink;
                if (s > 25) {
                    if (i.downed) t.css({
                        backgroundColor: "red"
                    });
                    else {
                        x.eqAbs(s, 100, .2) ? (l = this.healthGrey, c = this.healthGrey) : x.eqAbs(s, 75, .2) || s >= 75 ? (l = this.healthWhite, c = this.healthWhite) : (l = this.healthDarkpink, c = this.healthLightpink);
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
                this.screenScaleFactor = f.uiLayout == f.UiLayout.Sm ? .5626 : x.min(1, x.clamp(t.screenWidth / 1280, .75, 1) * x.clamp(t.screenHeight / 1024, .75, 1)), this.pieTimer.resize(this.touch, this.screenScaleFactor), this.gasRenderer.resize(), this.mapSprite.texture = e.getMapTexture(), this.redraw(t)
            },
            redraw: function(e) {
                var t = e.screenWidth,
                    a = e.screenHeight,
                    i = this.getMinimapMargin(),
                    r = 0,
                    o = 0;
                "iphonex" == f.model && (f.isLandscape ? r += 28 : o += 32);
                var n = this.getMinimapSize(),
                    s = this.getMinimapBorderWidth(),
                    l = f.uiLayout == f.UiLayout.Sm;
                if (this.display.border.clear(), this.container.mask.clear(), this.bigmapDisplayed) {
                    var c = x.min(t, a);
                    this.mapSprite.width = c, this.mapSprite.height = c, this.mapSprite.x = t / 2, this.mapSprite.y = a / 2, this.mapSprite.alpha = 1, this.container.mask.beginFill(16777215, 1), this.container.mask.drawRect(this.mapSprite.x - this.mapSprite.width / 2, this.mapSprite.y - this.mapSprite.height / 2, this.mapSprite.width, this.mapSprite.height), this.container.mask.endFill(), f.touch && this.bigmapCollision.css({
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
            me: r
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
            l = a("ceee80d9"),
            c = a("1901e2d9"),
            m = a("c2a798c8"),
            p = a("6d494b5c");
        a("c347b8dd"), a("af8ba00f"), r.prototype = {
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
                t && (this.type = e.type, this.pos = m.copy(e.pos), this.ori = e.ori, this.rot = l.oriToRad(e.ori), this.scale = 1, this.layer = e.layer), this.ceilingDead = e.ceilingDead, this.ceilingDamaged = e.ceilingDamaged, this.occupied = e.occupied, this.hasPuzzle = e.hasPuzzle, this.hasPuzzle && (this.puzzleErrSeqModified = e.puzzleErrSeq != this.puzzleErrSeq, this.puzzleSolved = e.puzzleSolved, this.puzzleErrSeq = e.puzzleErrSeq);
                var s = l.Defs[this.type];
                if (this.interiorSound = "", s.interiorSound && (s.interiorSound.stopOnPuzzleComplete && this.puzzleSolved || s.interiorSound.startOnPuzzleComplete ? s.interiorSound.startOnPuzzleComplete && this.puzzleSolved && (this.interiorSound = s.interiorSound.sound) : this.interiorSound = s.interiorSound.sound), a) {
                    this.isNew = !0, this.playedCeilingDeadFx = void 0 !== s.ceiling.destroy && -1 != i.map.deadCeilingIds.indexOf(this.__id), this.playedSolvedPuzzleFx = this.hasPuzzle && -1 != i.map.solvedPuzzleIds.indexOf(this.__id);
                    var p = function(e) {
                        var t = e.pos || m.create(0, 0),
                            a = l.oriToRad(e.rot || 0),
                            n = r.allocSprite();
                        n.texture = o.Texture.fromImage(e.sprite), n.tint = e.tint;
                        var s = i.map.getMapDef().biome.valueAdjust;
                        return s < 1 && (n.tint = c.adjustValue(n.tint, s)), n.posOffset = m.rotate(t, r.rot), n.rotOffset = a, n.imgAlpha = e.alpha, n.alpha = n.imgAlpha, n.defScale = e.scale, n.mirrorY = !!e.mirrorY, n.visible = !0, n
                    };
                    this.bounds = n.transform(l.getBoundingCollider(this.type), this.pos, this.rot, this.scale), this.zIdx = s.zIdx || 0, this.surfaces = [];
                    for (var d = 0; d < s.floor.surfaces.length; d++) {
                        for (var h = s.floor.surfaces[d], u = {
                                surface: h.type,
                                colliders: []
                            }, g = 0; g < h.collision.length; g++) u.colliders.push(n.transform(h.collision[g], this.pos, this.rot, this.scale));
                        this.surfaces.push(u)
                    }
                    var y = Object.assign({}, {
                        dist: 5.5,
                        width: 2.75,
                        linger: 0,
                        fadeRate: 12
                    }, s.ceiling.vision);
                    this.ceiling = {
                        scopeIn: [],
                        scopeOut: [],
                        vision: y,
                        visionTicker: 0,
                        fadeAlpha: 1
                    };
                    for (var w = 0; w < s.ceiling.scopeIn.length; w++) this.ceiling.scopeIn.push(n.transform(s.ceiling.scopeIn[w], this.pos, this.rot, this.scale));
                    for (var x = 0; x < s.ceiling.scopeOut.length; x++) this.ceiling.scopeOut.push(n.transform(s.ceiling.scopeOut[x], this.pos, this.rot, this.scale));
                    this.disableScopeIn = !!s.ceiling.disableScopeIn, this.imgs = [];
                    for (var f = 0; f < s.floor.imgs.length; f++) this.imgs.push({
                        sprite: p(s.floor.imgs[f]),
                        isCeiling: !1,
                        zOrd: this.zIdx,
                        zIdx: 100 * this.__id + f
                    });
                    for (var b = 0; b < s.ceiling.imgs.length; b++) {
                        var _ = s.ceiling.imgs[b];
                        this.imgs.push({
                            sprite: p(_),
                            isCeiling: !0,
                            removeOnDamaged: !!_.removeOnDamaged,
                            zOrd: 750 - this.zIdx,
                            zIdx: 100 * this.__id + b
                        })
                    }
                    for (var S = s.occupiedEmitters || [], k = 0; k < S.length; k++) {
                        var v = S[k],
                            z = this.rot + v.rot,
                            M = m.add(this.pos, m.rotate(v.pos, z)),
                            T = m.rotate(m.create(1, 0), z),
                            P = v.scale,
                            I = null;
                        if (v.parentToCeiling) {
                            for (var C = -1, A = 0; A < this.imgs.length; A++) this.imgs[A].isCeiling && (C = A);
                            if (C >= 0) {
                                var E = this.imgs[C];
                                I = E.sprite, M = m.mul(v.pos, 32), M.y *= -1, T = m.rotate(m.create(1, 0), v.rot), P = 1 / E.sprite.defScale
                            }
                        }
                        var D = i.particleBarn.addEmitter(v.type, M, T, P, v.layer, Number.MAX_VALUE, I);
                        this.emitters.push(D)
                    }
                }
            },
            c: function(e, t, a, r, n, c, d, h) {
                if (this.hasPuzzle) {
                    var u = l.Defs[this.type];
                    if (this.puzzleErrSeqModified && (this.puzzleErrSeqModified = !1, !this.isNew)) {
                        for (var g = this, y = m.length(m.sub(c.pos, g.pos)), w = t.pe.m(), x = 0; x < w.length; x++) {
                            var f = w[x];
                            if (f.active && f.isPuzzlePiece && f.parentBuildingId == this.__id) {
                                var b = m.length(m.sub(c.pos, f.pos));
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
                    var _ = l.Defs[this.type];
                    if (void 0 !== _.ceiling.destroy) {
                        var S = this.allocSprite();
                        S.texture = o.Texture.fromImage(_.ceiling.destroy.residue), S.position.set(0, 0), S.scale.set(1, 1), S.rotation = 0, S.tint = 16777215, S.visible = !0, this.imgs[0].sprite.addChild(S), this.residue = S
                    }
                }
                this.ceiling.visionTicker -= e;
                var k = !1,
                    v = Number.MAX_VALUE,
                    z = this.ceiling.vision;
                if (!this.disableScopeIn)
                    for (var M = 0; M < this.ceiling.scopeIn.length; M++)
                        if (this.layer == c.layer || 2 & c.layer) {
                            var T = p.scanCollider(this.ceiling.scopeIn[M], t.pe.m(), c.pos, c.layer, .5, 2 * z.width, z.dist, 5);
                            if (T) {
                                k = !0, v = T.dist;
                                break
                            }
                        }
                this.ceilingDead && (k = !0), k && (this.ceiling.visionTicker = z.linger + 1e-4), c.noCeilingRevealTicker > 0 && (this.ceiling.visionTicker = 0);
                var P = this.ceiling.visionTicker > 0,
                    I = i(this.ceiling.fadeAlpha, P ? 0 : 1, e * (P ? 12 : z.fadeRate));
                this.ceiling.fadeAlpha += I, k && this.interiorSound && (n.interiorSound.name = this.interiorSound, n.interiorSound.volume = s.remap(v, z.dist + 2, 0, 0, 1));
                for (var C = 0; C < this.emitters.length; C++) this.emitters[C].enabled = this.occupied;
                for (var A = 0; A < this.imgs.length; A++) {
                    var E = this.imgs[A],
                        D = E.isCeiling ? this.ceiling.fadeAlpha : 1;
                    this.positionSprite(E.sprite, D, h), E.removeOnDamaged && this.ceilingDamaged && (E.sprite.visible = !this.ceilingDamaged);
                    var O = this.layer;
                    E.isCeiling && (this.layer == c.layer || 2 & c.layer && 1 == this.layer) && (O |= 2), d.addPIXIObj(E.sprite, O, E.zOrd, E.zIdx)
                }
            },
            destroyCeilingFx: function(e, t) {
                for (var a = l.Defs[this.type].ceiling.destroy, i = this.surfaces[0], r = 0; r < i.colliders.length; r++) {
                    for (var o = n.toAabb(i.colliders[r]), s = 0; s < a.particleCount; s++) {
                        var p = m.create(c.random(o.min.x, o.max.x), c.random(o.min.y, o.max.y)),
                            d = m.mul(m.randomUnit(), c.random(0, 15));
                        e.addParticle(a.particle, this.layer, p, d)
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
                    atlases: ["gradient", "shared", "woods"]
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
            var r = d("<div/>", {
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
                    d(this).fadeOut(250, function() {
                        d(this).remove()
                    })
                }
            })
        }

        function r(e, t) {
            var a = d("#start-menu");
            d("#btn-help").click(function() {
                var e = d("#start-help");
                a.addClass("display-help");
                var t = (e.position().top, a.css("height"));
                return e.css("display", "block"), a.animate({
                    scrollTop: t
                }, 1e3), g.storeGeneric("info", "help"), !1
            });
            var r = d("#team-mobile-link"),
                s = d("#team-mobile-link-desc"),
                c = d("#team-mobile-link-warning"),
                m = d("#team-link-input"),
                p = d("#social-share-block"),
                y = d("#news-block");
            d("#btn-join-team").click(function() {
                return d("#server-warning").css("display", "none"), m.val(""), r.css("display", "block"), s.css("display", "block"), c.css("display", "none"), a.css("display", "none"), y.css("display", "none"), p.css("display", "none"), !1
            }), d("#btn-team-mobile-link-leave").click(function() {
                return r.css("display", "none"), m.val(""), a.css("display", "block"), y.css("display", "block"), p.css("display", "block"), !1
            }), d("#team-link-input").on("keypress", function(e) {
                13 === (e.which || e.keyCode) && (d("#btn-team-mobile-link-join").trigger("click"), d(this).blur())
            }), d("#player-name-input-solo").on("keypress", function(e) {
                13 === (e.which || e.keyCode) && d(this).blur()
            }), h.mobile && "ios" != h.os && (d("#player-name-input-solo").on("focus", function() {
                if (h.isLandscape) {
                    var e = h.screenHeight,
                        t = e <= 282 ? 18 : 36;
                    document.body.scrollTop = d(this).offset().top - t
                }
            }), d("#player-name-input-solo").on("blur", function() {
                document.body.scrollTop = 0
            }));
            var w = d(".modal"),
                x = (d(".modal-content"), d("#start-bottom-right")),
                f = d("#start-top-left"),
                b = d("#start-top-right"),
                _ = d("#ui-modal-keybind");
            d(".btn-keybind").click(function() {
                return _.finish(), _.css("display", "block"), x.fadeOut(200), b.fadeOut(200), d("#ui-modal-keybind-share").css("display", "none"), d("#keybind-warning").css("display", "none"), d("#ui-modal-keybind-list").css("height", "420px"), d("#keybind-code-input").html(""), l(), t.refresh(), !1
            }), o(function(e, a) {
                (a.is(d("#ui-modal-keybind")) || a.parents("#ui-modal-keybind").length > 0) && (e.stopPropagation(), t.cancelBind())
            }), d(".js-btn-keybind-share").click(function() {
                "block" == d("#ui-modal-keybind-share").css("display") ? (d("#ui-modal-keybind-share").css("display", "none"), d("#ui-modal-keybind-list").css("height", "420px")) : (d("#ui-modal-keybind-share").css("display", "block"), d("#ui-modal-keybind-list").css("height", "275px"))
            }), d("#keybind-link, #keybind-copy").click(function(e) {
                i("Copied!", _, d("#keybind-link"), e);
                var t = d("#keybind-link").html();
                u.copyTextToClipboard(t)
            }), d("#btn-keybind-code-load").on("click", function(a) {
                var r = d("#keybind-code-input").val();
                d("#keybind-code-input").val("");
                var o = e.fromBase64(r);
                d("#keybind-warning").css("display", o ? "none" : "block"), o && (i("Loaded!", _, d("#btn-keybind-code-load"), a), e.saveBinds()), t.refresh()
            });
            var S = d("#modal-settings");
            d(".btn-settings").click(function() {
                return S.finish(), S.css("display", "block"), x.fadeOut(200), b.fadeOut(200), l(), !1
            });
            var k = d("#modal-hamburger");
            d("#btn-hamburger").click(function() {
                return k.finish(), k.css("display", "block"), f.fadeOut(200), l(), !1
            }), d(".account-details-guest, .account-details-user").click(function() {
                if (h.mobile) {
                    var e = d("#modal-mobile-account");
                    return e.finish(), e.css("display", "block"), d("#start-top-right").fadeOut(200), l(), !1
                }
            }), w.find(".close").click(function(e) {
                n(e, d(this))
            }), d(".modal-settings-text").click(function() {
                var e = d(this).siblings("input:checkbox");
                e.prop("checked", !e.is(":checked")), e.trigger("change")
            }), d("#force-refresh").click(function() {
                window.location.href = "/?t=" + Date.now()
            })
        }

        function o(e) {
            y.push(e)
        }

        function n(e, t) {
            if (d(".modal").fadeOut(200), d("#start-bottom-right").fadeIn(200), d("#start-top-left").fadeIn(200), d("#start-top-right").fadeIn(200), e && t)
                for (var a = 0; a < y.length; a++) y[a](e, t)
        }

        function s(e, t) {
            !t && d(e.target).closest(".modal-content").length || (d(".modal").each(function() {
                "block" == d(this).css("display") && n(e, d(this))
            }), d(document).off("click touchend", s))
        }

        function l() {
            d(document).on("click touchend", s)
        }

        function c() {
            d(document).off("click touchend", s)
        }

        function m(e) {
            var t = d("#modal-hamburger-bottom");
            t.children().slice(-3).remove(), t.children().last().removeClass("footer-after"), d("#invite-link-text").attr("data-l10n", "index-invite-code"), d("#team-code-text").css("display", "none"), d("#invite-code-text").css("display", "none"), d("#team-hide-url").css("display", "none"), d(".btn-download-ios").css("display", "none"), d(".btn-download-android").css("display", "none"), d("#mobile-download-app").css("display", "none"), d("#start-bottom-middle").css("display", "none"), e || (d("#btn-help").css("display", "none"), d("#news-block, #start-menu").css({
                height: 186
            }), d("#team-menu").css({
                height: 186,
                padding: 10
            }))
        }

        function p(e) {
            d("#team-hide-url").css("display", "none"), e ? d("#start-bottom-middle").addClass("start-bottom-middle-tablet") : d("#news-block").css({
                height: 165
            }), "android" == h.os ? (d(".btn-download-android").css("display", "block"), d(".btn-download-ios").css("display", "none")) : "ios" == h.os && (d(".btn-download-ios").css("display", "block"), d(".btn-download-android").css("display", "none")), d("#mobile-download-app").css("display", "block")
        }
        var d = a("8ee62bea"),
            h = a("ce29f17f"),
            u = a("26be8056"),
            g = a("f398b7c7"),
            y = [];
        e.exports = {
            init: r,
            addModalCloseListener: l,
            addModalCloseCallback: o,
            removeModalCloseListener: c,
            applyWebviewStyling: m,
            applyMobileBrowserStyling: p,
            checkCloseModals: s
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
                for (var k = l.Reverbs, v = Object.keys(k), z = 0; z < v.length; z++) {
                    var M = v[z],
                        T = k[M];
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
                    var c = 1 * this.baseVolume * this.getTypeVolume(r.type),
                        m = o.sub(this.cameraPos, a),
                        p = o.length(m),
                        d = r.maxRange * i.rangeMult;
                    n.eqAbs(d, 0) && (d = 1);
                    var h = n.clamp(Math.abs(p / d), 0, 1),
                        u = Math.pow(1 - h, 1 + 2 * i.fallOff),
                        g = r.volume * u * c;
                    if ((g = void 0 === i.layer || s.sameAudioLayer(i.layer, this.activeLayer) ? g : .5 * g) > .003 || i.ignoreMinAllowable) {
                        var y = n.clamp(m.x / d * -1, -1, 1);
                        return e.volume = g, e.pan = y, e
                    }
                }
                return null
            },
            setMasterVolume: function(e) {
                e = n.clamp(e, 0, 1), r.Sound.volume = e
            },
            _setInstanceTypeVolume: function(e, t) {
                t = n.clamp(t, 0, 1);
                for (var a = this.getTypeVolume(e), i = a > 1e-4 ? t / a : 0, r = 0; r < this.soundInstances.length; r++) {
                    var o = this.soundInstances[r];
                    o.type == e && (o.instance.volume *= i)
                }
            },
            setSoundVolume: function(e) {
                this._setInstanceTypeVolume("sound", e), this.soundVolume = e
            },
            setMusicVolume: function(e) {
                this._setInstanceTypeVolume("music", e), this.musicVolume = e
            },
            setVolume: function(e, t, a) {
                if (e) {
                    a = a || "sound";
                    var i = this.getTypeVolume(a);
                    e.volume = t * i
                }
            },
            getVolume: function(e) {
                return e ? e.volume : 0
            },
            setMute: function(e) {
                return this.mute = e, r.Sound.setMute(this.mute), this.mute
            },
            muteToggle: function() {
                return this.setMute(!this.mute)
            },
            setDelay: function(e, t) {
                e && (e.delay = t)
            },
            stopSound: function(e) {
                e && e.stop()
            },
            stopAll: function() {
                r.Sound.stop()
            },
            isSoundLoaded: function(e, t) {
                var a = this.sounds[e + t];
                return a && this.loadedFiles[a.path]
            },
            isSoundPlaying: function(e) {
                return !!e && e.playState == r.Sound.PLAY_SUCCEEDED
            },
            getTypeVolume: function(e) {
                switch (e) {
                    case "sound":
                        return this.soundVolume;
                    case "music":
                        return this.musicVolume
                }
                return 0
            }
        }, e.exports = i
    },
    "4b8d140f": function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r() {
            this.id = 0, this.pos = {
                x: 0,
                y: 0
            }, this.posOld = {
                x: 0,
                y: 0
            }, this.posDown = {
                x: 0,
                y: 0
            }, this.startTime = 0, this.lastUpdateTime = 0, this.isNew = !0, this.isDead = !1, this.osId = 0
        }

        function o(e) {
            var t = this;
            this.touchElem = e, this.keys = {}, this.keysOld = {}, this.de = {
                x: 0,
                y: 0
            }, this.he = {
                x: 0,
                y: 0
            }, this.mouseButtons = {}, this.mouseButtonsOld = {}, this.mouseWheelState = 0, this.touches = [], this.touchIdCounter = 0, this.leftTouch = null, this.rightTouch = null, this.lostFocus = !1, this.captureNextInputCb = null, this.bOnWindowFocus = function(e) {
                t.onWindowFocus(e)
            }, this.bOnKeyDown = function(e) {
                t.onKeyDown(e)
            }, this.bOnKeyUp = function(e) {
                t.onKeyUp(e)
            }, this.bOnMouseMove = function(e) {
                t.onMouseMove(e)
            }, this.bOnMouseDown = function(e) {
                t.onMouseDown(e)
            }, this.bOnMouseUp = function(e) {
                t.onMouseUp(e)
            }, this.bOnMouseWheel = function(e) {
                t.onMouseWheel(e)
            }, this.bOnTouchMove = function(e) {
                t.onTouchMove(e)
            }, this.bOnTouchStart = function(e) {
                t.onTouchStart(e)
            }, this.bOnTouchEnd = function(e) {
                t.onTouchEnd(e)
            }, this.bOnTouchCancel = function(e) {
                t.onTouchCancel(e)
            }, window.addEventListener("focus", this.bOnWindowFocus, !1), window.addEventListener("blur", this.bOnWindowFocus, !1), window.addEventListener("keydown", this.bOnKeyDown, !1), window.addEventListener("keyup", this.bOnKeyUp, !1), window.addEventListener("mousemove", this.bOnMouseMove, !1), window.addEventListener("mousedown", this.bOnMouseDown, !1), window.addEventListener("mouseup", this.bOnMouseUp, !1), window.addEventListener("wheel", this.bOnMouseWheel, {
                capture: !1,
                passive: !0
            }), this.touchElem.addEventListener("touchmove", this.bOnTouchMove, !1), this.touchElem.addEventListener("touchstart", this.bOnTouchStart, !1), this.touchElem.addEventListener("touchend", this.bOnTouchEnd, !1), this.touchElem.addEventListener("touchcancel", this.bOnTouchCancel, !1)
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
            s = (a("c2a798c8"), Object.freeze({
                Backspace: 8,
                Enter: 13,
                Shift: 16,
                Control: 17,
                Alt: 18,
                Escape: 27,
                Space: 32,
                Left: 37,
                Up: 38,
                Right: 39,
                Down: 40,
                Zero: 48,
                One: 49,
                Two: 50,
                Three: 51,
                Four: 52,
                Five: 53,
                Six: 54,
                Seven: 55,
                Eight: 56,
                Nine: 57,
                A: 65,
                B: 66,
                C: 67,
                D: 68,
                E: 69,
                F: 70,
                G: 71,
                L: 76,
                M: 77,
                N: 78,
                P: 80,
                Q: 81,
                R: 82,
                S: 83,
                T: 84,
                V: 86,
                W: 87,
                X: 88,
                Windows: 91,
                ContextMenu: 93,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                Plus: 187,
                Minus: 189,
                FwdSlash: 191,
                Tilde: 192
            })),
            l = Object.freeze({
                Left: 0,
                Middle: 1,
                Right: 2,
                Thumb1: 3,
                Thumb2: 4
            }),
            c = Object.freeze({
                None: 0,
                Up: 1,
                Down: 2
            }),
            m = {
                None: 0,
                Key: 1,
                MouseButton: 2,
                MouseWheel: 3
            },
            p = ["", "", "", "Cancel", "", "", "Help", "", "Backspace", "Tab", "", "", "Clear", "Enter", "Enter", "", "Shift", "Control", "Alt", "Pause", "Capslock", "Kana", "Eisu", "Junja", "Final", "Hanja", "", "ESC", "Convert", "Nonconvert", "Accept", "Modechange", "Space", "Page Up", "Page Down", "End", "Home", "←", "↑", "→", "↓", "Select", "Print", "Execute", "Printscreen", "Insert", "Delete", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Windows Key", "", "Context Menu", "", "Sleep", "Numpad 0", "Numpad 1", "Numpad 2", "Numpad 3", "Numpad 4", "Numpad 5", "Numpad 6", "Numpad 7", "Numpad 8", "Numpad 9", "*", "+", "Separator", "-", ".", "/", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "Num Lock", "Scroll Lock", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "Circumflex", "!", '"', "#", "$", "%", "&", "_", "(", ")", "*", "+", "|", "Hyphen Minus", "{", "}", "~", "", "", "", "", "Volume Mute", "Volume Down", "Volume Up", "", "", ";", "=", ",", "-", ".", "/", "Backquote", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "[", "\\", "]", "'", "", "Meta", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""],
            d = ["Left Mouse", "Middle Mouse", "Right Mouse", "Thumb Mouse 1", "Thumb Mouse 2"],
            h = ["", "Mouse Wheel Up", "Mouse Wheel Down"],
            u = function() {
                function e(t, a) {
                    i(this, e), this.type = t, this.code = a
                }
                return n(e, [{
                    key: "equals",
                    value: function(e) {
                        return this.type == e.type && this.code == e.code
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return this.type == m.None ? "" : this.type == m.Key ? p[this.code] || "Key " + this.code : this.type == m.MouseButton ? d[this.code] || "Mouse " + this.code : h[this.code] || "Mouse Wheel " + this.code
                    }
                }]), e
            }(),
            g = Object.freeze({
                Move: 0,
                Start: 1,
                End: 2,
                Cancel: 3
            });
        o.prototype = {
            n: function() {
                window.removeEventListener("focus", this.bOnWindowFocus), window.removeEventListener("blur", this.bOnWindowFocus), window.removeEventListener("keydown", this.bOnKeyDown), window.removeEventListener("keyup", this.bOnKeyUp), window.removeEventListener("mousemove", this.bOnMouseMove), window.removeEventListener("mousedown", this.bOnMouseDown), window.removeEventListener("mouseup", this.bOnMouseUp), window.removeEventListener("wheel", this.bOnMouseWheel), this.touchElem.removeEventListener("touchmove", this.bOnTouchMove), this.touchElem.removeEventListener("touchstart", this.bOnTouchStart), this.touchElem.removeEventListener("touchend", this.bOnTouchEnd), this.touchElem.removeEventListener("touchcancel", this.bOnTouchCancel)
            },
            onWindowFocus: function() {
                this.keys = {}, this.keysOld = {}, this.mouseButtons = {}, this.mouseButtonsOld = {}, this.mouseWheelState = 0, this.touches.length = 0, this.lostFocus = !0
            },
            flush: function() {
                this.keysOld = Object.assign({}, this.keys), this.mouseButtonsOld = Object.assign({}, this.mouseButtons), this.mouseWheelState = 0;
                for (var e = 0; e < this.touches.length; e++) this.touches[e].posOld.x = this.touches[e].pos.x, this.touches[e].posOld.y = this.touches[e].pos.y, this.touches[e].isNew = !1, this.touches[e].isDead && (this.touches.splice(e, 1), --e);
                this.lostFocus = !1
            },
            captureNextInput: function(e) {
                this.captureNextInputCb = e
            },
            checkCaptureInput: function(e, t, a) {
                return !(!this.captureNextInputCb || !this.captureNextInputCb(e, new u(t, a)) || (this.captureNextInputCb = null, 0))
            },
            isInputValuePressed: function(e) {
                switch (e.type) {
                    case m.Key:
                        return this.ue(e.code);
                    case m.MouseButton:
                        return this.ge(e.code);
                    case m.MouseWheel:
                        return this.ye() == e.code;
                    default:
                        return !1
                }
            },
            isInputValueReleased: function(e) {
                switch (e.type) {
                    case m.Key:
                        return this.we(e.code);
                    case m.MouseButton:
                        return this.xe(e.code);
                    case m.MouseWheel:
                        return this.ye() == e.code;
                    default:
                        return !1
                }
            },
            isInputValueDown: function(e) {
                switch (e.type) {
                    case m.Key:
                        return this.fe(e.code);
                    case m.MouseButton:
                        return this.be(e.code);
                    case m.MouseWheel:
                        return this.ye() == e.code;
                    default:
                        return !1
                }
            },
            onKeyDown: function(e) {
                var t = e.keyCode;
                9 == t && e.preventDefault(), this.checkCaptureInput(e, m.Key, t) || (this.keys[t] = !0)
            },
            onKeyUp: function(e) {
                this.keys[e.keyCode] = !1
            },
            fe: function(e) {
                return !!this.keys[e]
            },
            ue: function(e) {
                return !this.keysOld[e] && !!this.keys[e]
            },
            we: function(e) {
                return !!this.keysOld[e] && !this.keys[e]
            },
            onMouseMove: function(e) {
                this.he = Object.assign({}, this.de), this.de.x = e.clientX, this.de.y = e.clientY
            },
            onMouseDown: function(e) {
                var t = 0;
                t = "which" in e ? e.which - 1 : e.button, this.checkCaptureInput(e, m.MouseButton, t) || (this.mouseButtons[t] = !0)
            },
            onMouseUp: function(e) {
                var t = 0;
                t = "which" in e ? e.which - 1 : e.button, this.mouseButtons[t] = !1
            },
            onMouseWheel: function(e) {
                var t = e.deltaY < 0 ? c.Up : c.Down;
                this.checkCaptureInput(e, m.MouseWheel, t) || (this.mouseWheelState = t)
            },
            be: function(e) {
                return !!this.mouseButtons[e]
            },
            ge: function(e) {
                return !this.mouseButtonsOld[e] && !!this.mouseButtons[e]
            },
            xe: function(e) {
                return !!this.mouseButtonsOld[e] && !this.mouseButtons[e]
            },
            ye: function() {
                return this.mouseWheelState
            },
            onTouchShared: function(e, t) {
                e.cancelable && t != g.Cancel && e.preventDefault();
                for (var a = e.timeStamp || performance.now(), i = 0; i < e.changedTouches.length; i++) {
                    for (var o = e.changedTouches[i], n = o.identifier, s = o.clientX, l = o.clientY, c = null, m = 0; m < this.touches.length; m++)
                        if (this.touches[m].osId == n && !this.touches[m].isDead) {
                            c = this.touches[m];
                            break
                        }
                    t != g.Start || c || (c = new r, this.touches.push(c), ++this.touchIdCounter, c.id = this.touchIdCounter, c.osId = n, c.posOld.x = s, c.posOld.y = l, c.posDown.x = s, c.posDown.y = l, c.startTime = a, c.isNew = !0, c.isDead = !1), t != g.End && t != g.Cancel || !c || (c.isDead = !0), c && (c.pos.x = s, c.pos.y = l, c.lastUpdateTime = a)
                }
            },
            onTouchMove: function(e) {
                this.onTouchShared(e, g.Move)
            },
            onTouchStart: function(e) {
                this.onTouchShared(e, g.Start)
            },
            onTouchEnd: function(e) {
                this.onTouchShared(e, g.End)
            },
            onTouchCancel: function(e) {
                this.onTouchShared(e, g.Cancel)
            },
            getTouchById: function(e) {
                for (var t = 0; t < this.touches.length; t++)
                    if (this.touches[t].id == e) return this.touches[t];
                return null
            }
        }, e.exports = {
            _e: o,
            InputType: m,
            InputValue: u,
            Key: s,
            MouseButton: l,
            MouseWheel: c,
            Touch: r
        }
    },
    "4cddfd71": function(e, t, a) {
        "use strict";
        var i = {
            main: a("d5ec3c16"),
            main_spring: a("6afea591"),
            desert: a("ef7c973f"),
            faction: a("903f46c9"),
            halloween: a("9d3c0d8b"),
            potato: a("fc096113"),
            potato_spring: a("fea0a94e"),
            snow: a("4e269062"),
            woods: a("45f86a38"),
            woods_snow: a("0354ead9"),
            woods_spring: a("b895abfa")
        };
        e.exports = i
    },
    "4e269062": function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Snow",
                    icon: "img/loot/loot-throwable-snowball.svg"
                },
                assets: {
                    audio: [{
                        name: "snowball_01",
                        channel: "sfx"
                    }, {
                        name: "snowball_02",
                        channel: "sfx"
                    }, {
                        name: "plane_02",
                        channel: "sfx"
                    }, {
                        name: "bells_01",
                        channel: "ui"
                    }, {
                        name: "snowball_pickup_01",
                        channel: "ui"
                    }],
                    atlases: ["gradient", "shared", "snow"]
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
                        camera: "falling_snow_fast",
                        ripple: "waterRipple"
                    },
                    airdrop: {
                        planeImg: "map-plane-01x.img",
                        planeSound: "plane_02",
                        airdropImg: "map-chute-01x.img"
                    },
                    frozenSprites: ["player-snow-01.img", "player-snow-02.img", "player-snow-03.img"]
                },
                gameMode: {
                    maxPlayers: 80
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    51683873: function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-01-28",
                locale: "zh-cn"
            },
            "word-order": "sov",
            "index-slogan": "2d混战",
            "index-region": "地区",
            "index-north-america": "北美",
            "index-europe": "欧洲",
            "index-asia": "亚洲",
            "index-south-america": "南美",
            "index-korea": "大韩民国",
            "index-players": "玩家",
            "index-play-solo": "玩单挑",
            "index-play-duo": "玩双人联队",
            "index-play-squad": "玩四人联队",
            "index-join-team": "加入联队",
            "index-create-team": "创建联队",
            "index-how-to-play": "如何玩",
            "index-leave-team": "离开联队",
            "index-joining-team": "加入联队",
            "index-creating-team": "建立联队中",
            "index-invite-link": "邀请链接",
            "index-solo": "单人",
            "index-duo": "双人联队",
            "index-squad": "四人联队",
            "index-auto-fill": "自动填充",
            "index-no-fill": "不填充",
            "index-waiting-for-leader": "等待领队开始游戏。",
            "index-play": "开始",
            "index-featured-youtuber": "精选Youtube博主",
            "index-settings": "设置",
            "index-high-resolution": "高分辨率(提高视觉质量)",
            "index-screen-shake": "屏幕抖动",
            "index-team-is-full": "联队已满!",
            "index-failed-joining-team": "加入联队失败。",
            "index-failed-creating-team": "创建联队失败。",
            "index-failed-finding-game": "查找联队失败。",
            "index-failed-joining-game": "加入游戏失败。",
            "index-lost-connection": "联队连接丢失。",
            "index-host-closed": "团队主持人失去连接。",
            "index-view-more": "查看更多",
            "index-back-to-main": "回到主界面",
            "index-most-kills": "杀敌最多",
            "index-total-kills": "总杀敌",
            "index-total-wins": "总赢数",
            "index-top-5-percent": "前5%",
            "index-kill-death-ratio": "杀敌和生还比例",
            "index-for": "For",
            "index-today": "今日",
            "index-this-week": "本周",
            "index-all-time": "所有时间",
            "index-top-100": "前一百",
            "index-rank": "排名",
            "index-player": "玩家",
            "index-total-games": "总游戏数",
            "index-controls": "控制",
            "index-movement": "动作",
            "index-movement-ctrl": "W, A, S, D键",
            "index-aim": "瞄准",
            "index-aim-ctrl": "鼠标",
            "index-punch": "拳",
            "index-shoot": "射击",
            "index-shoot-ctrl": "左击",
            "index-change-weapons": "更换武器",
            "index-change-weapons-ctrl": "1-4或滚轮。",
            "index-stow-weapons": "收起武器(拳击模式)",
            "index-stow-weapons-ctrl": "3或E键",
            "index-swap-weapons": "换到之前的武器",
            "index-swap-weapons-ctrl": "Q键",
            "index-reload": "重装",
            "index-reload-ctrl": "R键",
            "index-scope-zoom": "变焦范围",
            "index-scope-zoom-ctrl": "左键单击放大",
            "index-pickup": "拾起",
            "index-loot": "掠夺",
            "index-revive": "复活",
            "index-pickup-ctrl": "F键",
            "index-use-medical": "使用医疗物品",
            "index-use-medical-ctrl": "左键单击物品或7-0",
            "index-drop-item": "丢弃物品",
            "index-drop-item-ctrl": "右键单击物品",
            "index-cancel-action": "取消动作",
            "index-cancel-action-ctrl": "X键",
            "index-view-map": "查看地图",
            "index-view-map-ctrl": "M或G键",
            "index-toggle-minimap": "切换小地图",
            "index-toggle-minimap-ctrl": "V键",
            "index-use-ping": "使用联队平轮",
            "index-use-ping-ctrl": "按住C键，同时按住右键然后移动鼠标，接着松开右键",
            "index-use-emote": "使用表情轮",
            "index-use-emote-ctrl": "按住右键然后移动鼠标，接着松开右键",
            "game-alive": "存活玩家",
            "game-reloading": "装弹",
            "game-using": "使用",
            "game-reviving": "复活中",
            "game-revive-teammate": "复活队友",
            "game-equip": "装备",
            "game-cancel": "撤销",
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
            "game-waiting-for-players": "等待其他玩家",
            "game-spectating": "观看中",
            "game-red-zone-advances": "红色区域扩大于",
            "game-red-zone-advancing": "红色区域扩大中，快到安全区域去!",
            "game-seconds": "秒",
            "game-minutes": "分",
            "game-minute": "分",
            "game-m": "分",
            "game-s": "秒",
            "game-not-enough-space": "空间不足!",
            "game-item-already-owned": "物品已拥有!",
            "game-item-already-equipped": "物品已装备!",
            "game-better-item-equipped": "已装备更好物品!",
            "game-play-new-game": "开始新游戏",
            "game-spectate": "观看",
            "game-full-screen": "全屏",
            "game-sound": "声音",
            "game-quit-game": "离开游戏",
            "game-return-to-game": "返回游戏",
            "game-hide-match-stats": "隐藏比赛数据",
            "game-view-match-stats": "查看比赛数据",
            "game-previous-teammate": "上个队友",
            "game-next-teammate": "下个队友",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "离开游戏",
            "game-your-results": "你的战绩",
            "game-chicken": "大吉大利，今晚吃鸡！",
            "game-won-the-game": "游戏赢了。",
            "game-team-eliminated": "你的队伍被击败了。",
            "game-rank": "排名",
            "game-team-rank": "联队排名",
            "game-team-kills": "联队杀敌数",
            "game-kill": "杀",
            "game-kills": "杀",
            "game-damage-dealt": "伤害输出",
            "game-damage-taken": "受到伤害",
            "game-survived": "生还",
            "game-backpack00": "袋子",
            "game-backpack01": "小包",
            "game-backpack02": "常规包",
            "game-backpack03": "军用包",
            "game-bandage": "绷带",
            "game-bandage-tooltip": "左键点击回复15点生命值。",
            "game-healing-tooltip": "无法治疗75点以上的生命值。",
            "game-healthkit": "医药包",
            "game-healthkit-tooltip": "左键点击恢复100点生命值。",
            "game-soda": "汽水",
            "game-soda-tooltip": "左键点击可以增加25点的肾上腺素。",
            "game-adrenaline-tooltip": "肾上腺素会随着时间的推移恢复血量值。",
            "game-painkiller": "药片",
            "game-painkiller-tooltip": "左键点击可以增加50点的肾上腺素。",
            "game-9mm": "9毫米",
            "game-9mm-tooltip": "给M9, MP5, G18C, Mac-10, CZ-3A1, Vector 和 UMP9的弹药。",
            "game-12gauge": "12口径",
            "game-12gauge-tooltip": "给M870, M1100, SPAS-12, Saiga-12 和 MP220的弹药。",
            "game-762mm": "7.62毫米",
            "game-762mm-tooltip": "给AK-47, SCAR-H, M39, 莫辛-纳甘步枪, M39， SV-98, M1, OT-38 和 DP-28的弹药。",
            "game-556mm": "5.56毫米",
            "game-556mm-tooltip": "给FAMAS, M416, M4A1-S, QBB-97, Mk 12 和 M249弹药。",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "给DEagle 50弹药。",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "给AWM-S弹药。",
            "game-flare": "Flare",
            "game-flare-tooltip": "给Flare Gun弹药。",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "给M1911, M1A1, Model 94 和 Peacemaker弹药。",
            "game-chest01": "一级防弹衣",
            "game-chest02": "二级防弹衣",
            "game-chest03": "三级防弹衣",
            "game-helmet01": "一级头盔",
            "game-helmet02": "二级头盔",
            "game-helmet03": "三级头盔",
            "game-1xscope": "1x 瞄准镜",
            "game-2xscope": "2x 瞄准镜",
            "game-4xscope": "4x 瞄准镜",
            "game-8xscope": "8x 瞄准镜",
            "game-15xscope": "15x 瞄准镜",
            "game-level-1": "一级",
            "game-level-2": "二级",
            "game-level-3": "三级",
            "game-level-4": "四级",
            "game-outfitBase": "基本服装",
            "game-outfitRoyalFortune": "皇家财富",
            "game-outfitKeyLime": "青柠",
            "game-outfitCobaltShell": "钴壳",
            "game-outfitCarbonFiber": "碳纤维",
            "game-outfitDarkGloves": "专业",
            "game-outfitGhillie": "吉利服",
            "game-outfitCamo": "森林迷彩",
            "game-outfitRed": "目标练习",
            "game-outfitWhite": "北极复仇者",
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
            "game-potato": "土豆",
            "game-hud-potato": "土豆",
            "game-potato_heavy": "土豆",
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
    "5bedf25d": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-03-31",
                locale: "en"
            },
            "word-order": "svo",
            "index-create-account": "Create Account",
            "index-set-account-name": "Set your account name",
            "index-enter-name": "Enter name",
            "index-finish": "Finish",
            "index-delete-account": "Delete Account",
            "index-delete-account-desc": 'Enter "DELETE" to delete your account:',
            "index-confirm": "Confirm",
            "index-customize-avatar": "Customize Avatar",
            "index-done": "Done",
            "index-account": "Account",
            "index-log-in-with": "Log in with",
            "index-facebook": "Facebook",
            "index-google": "Google",
            "index-twitch": "Twitch",
            "index-discord": "Discord",
            "index-my-stats": "My Stats",
            "index-link-account": "Link Account",
            "index-log-out": "Log Out",
            "index-change-avatar": "Change Avatar",
            "index-change-account-name": "Change Account Name",
            "index-back": "Back",
            "index-link-account-to": "Link account to",
            "index-log-in-desc": "Log in to track your stats!",
            "index-logging-in": "Logging in",
            "index-leaderboards": "Leaderboards",
            "index-slogan": "2d Battle Royale",
            "index-region": "Region",
            "index-north-america": "North America",
            "index-europe": "Europe",
            "index-asia": "Asia",
            "index-south-america": "South America",
            "index-korea": "South Korea",
            "index-players": "players",
            "index-play-solo": "Play Solo",
            "index-play-duo": "Play Duo",
            "index-play-squad": "Play Squad",
            "index-join-team": "Join Team",
            "index-create-team": "Create Team",
            "index-leave-team": "Leave Team",
            "index-joining-team": "Joining Team",
            "index-creating-team": "Creating Team",
            "index-invite-link": "Invite link",
            "index-invite-code": "Invite code",
            "index-join-team-help": "Got a team link or code? Paste it here:",
            "index-solo": "Solo",
            "index-duo": "Duo",
            "index-squad": "Squad",
            "index-auto-fill": "Auto Fill",
            "index-no-fill": "No Fill",
            "index-waiting-for-leader": "Waiting for leader to start game",
            "index-joining-game": "Joining game",
            "index-game-in-progress": "Game in progress",
            "index-play": "Play",
            "index-customize-loadout": "Customize Emotes",
            "index-twitter-follow": "Twitter Follow",
            "index-youtube-subscribe": "YouTube Subscribe",
            "index-facebook-like": "Facebook Like",
            "index-featured-youtuber": "Featured YouTuber",
            "index-streaming-live": "Streaming Live!",
            "index-viewer": "viewer",
            "index-viewers": "viewers",
            "index-settings": "Settings",
            "index-high-resolution": "High resolution (check to increase visual quality)",
            "index-screen-shake": "Screen shake",
            "index-anon-player-names": "Anonymize player names",
            "index-master-volume": "Master Volume",
            "index-sfx-volume": "SFX Volume",
            "index-music-volume": "Music Volume",
            "index-mobile-announce": "Now available on mobile!",
            "index-mobile-tooltip": "Visit <span>surviv.io</span> on your mobile device to play on the go!",
            "index-version": "ver",
            "index-privacy": "privacy",
            "index-attributions": "attributions",
            "index-proxy-sites": "proxy sites",
            "index-team-is-full": "Team is full!",
            "index-team-kicked": "You were kicked from the team!",
            "index-failed-joining-team": "Failed joining team.",
            "index-failed-creating-team": "Failed creating team.",
            "index-failed-finding-game": "Failed finding game.",
            "index-failed-joining-game": "Failed joining game.",
            "index-lost-connection": "Lost connection to team.",
            "index-host-closed": "Host closed the connection.",
            "index-invalid-protocol": "Old client version.",
            "index-view-more": "View More",
            "index-back-to-main": "Back to Main Menu",
            "index-most-kills": "Most kills",
            "index-total-kills": "Total kills",
            "index-total-wins": "Total wins",
            "index-top-5-percent": "Top 5 percent",
            "index-kill-death-ratio": "Kill-death ratio",
            "index-mode": "Mode",
            "index-for": "For",
            "index-today": "Today",
            "index-this-week": "This week",
            "index-all-time": "All time",
            "index-top-100": "TOP 100",
            "index-rank": "Rank",
            "index-player": "Player",
            "index-total-games": "Total Games",
            "index-controls": "Controls",
            "index-movement": "Movement",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Aim",
            "index-aim-ctrl": "Mouse",
            "index-punch": "Melee",
            "index-shoot": "Shoot",
            "index-shoot-ctrl": "Left-Click",
            "index-change-weapons": "Change Weapons",
            "index-change-weapons-ctrl": "1 through 4 or Scroll Wheel",
            "index-stow-weapons": "Stow Weapons (Melee Mode)",
            "index-stow-weapons-ctrl": "3 or E",
            "index-swap-weapons": "Swap to Previous Weapon",
            "index-swap-weapons-ctrl": "Q",
            "index-swap-weapon-slots": "Switch Gun Slots",
            "index-swap-weapon-slots-ctrl": "T or drag gun to other slot",
            "index-reload": "Reload",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Scope Zoom",
            "index-scope-zoom-ctrl": "Left-Click on Zoom",
            "index-pickup": "Pickup",
            "index-loot": "Loot",
            "index-revive": "Revive",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Use Medical Item",
            "index-use-medical-ctrl": "Left-Click on Item or 7 through 0",
            "index-drop-item": "Drop Item",
            "index-drop-item-ctrl": "Right-Click on Item",
            "index-cancel-action": "Cancel Action",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "View Map",
            "index-view-map-ctrl": "M or G",
            "index-toggle-minimap": "Toggle Minimap",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Use Team Ping Wheel",
            "index-use-ping-ctrl": "Hold C, then hold Right-Click and drag mouse, then release Right-Click",
            "index-use-emote": "Use Emote Wheel",
            "index-use-emote-ctrl": "Hold Right-Click and drag mouse, then release Right-Click",
            "index-how-to-play": "How to Play",
            "index-tips-1-desc": "The goal of surviv.io is to be the last player standing. You only live once per game - there is no respawn!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "If you've played other battle royale games like PUBG, Fortnite or H1Z1, then you're already halfway there! Think of surviv.io as 2D PUBG (with slightly less desync and more chicken).",
            "index-tips-3": "Loot and Kill",
            "index-tips-3-desc": "You'll begin the game with no items other than a simple backpack. Move around the map to find loot: weapons, ammo, scopes, and medical items. Eliminate other players and you can take their loot!",
            "index-tips-4": "Red = Bad!",
            "index-tips-4-desc": "Players aren't the only thing that can hurt you. The deadly red zone will move in from the sides of the map and deal increasingly greater damage if you stand in it. Keep an eye on the map and stay safe.",
            "index-movement-ctrl-touch": "Left stick",
            "index-aim-ctrl-touch": "Right stick",
            "index-shoot-ctrl-touch": "Drag right stick outside stick border",
            "index-change-weapons-ctrl-touch": "Tap weapon slot",
            "index-reload-ctrl-touch": "Tap equipped ammo counter",
            "index-scope-zoom-ctrl-touch": "Tap zoom item",
            "index-pickup-ctrl-touch": "Tap interaction button or loot name",
            "index-use-medical-ctrl-touch": "Tap medical item",
            "index-drop-item-ctrl-touch": "Touch and hold item",
            "index-cancel-action-ctrl-touch": "Tap interaction button",
            "index-view-map-ctrl-touch": "Tap minimap",
            "index-use-ping-ctrl-touch": "View map and tap anywhere on map",
            "index-use-emote-ctrl-touch": "Tap surviv icon",
            "game-alive": "Alive",
            "game-reloading": "Reloading",
            "game-use": "Use",
            "game-using": "Using",
            "game-reviving": "Reviving",
            "game-revive-teammate": "Revive Teammate",
            "game-equip": "Equip",
            "game-cancel": "Cancel",
            "game-open-door": "Open Door",
            "game-close-door": "Close Door",
            "game-unlock": "Unlock",
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
            "game-crushed": "crushed",
            "game-the-air-drop": "The air drop",
            "game-the-air-strike": "The air strike",
            "game-an-air-strike": "an air strike",
            "game-waiting-for-players": "Waiting for players",
            "game-spectating": "Spectating",
            "game-red-zone-advances": "Red zone advances in",
            "game-red-zone-advancing": "Red zone advancing! Move to the safe zone",
            "game-seconds": "seconds",
            "game-minutes": "minutes",
            "game-minute": "minute",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Not enough space!",
            "game-item-already-owned": "Item already owned!",
            "game-item-already-equipped": "Item already equipped!",
            "game-better-item-equipped": "Better item equipped!",
            "game-gun-cannot-fire": "Gun cannot be fired here!",
            "game-play-new-game": "Play New Game",
            "game-spectate": "Spectate",
            "game-full-screen": "Full Screen",
            "game-aim-line": "Aim Line",
            "game-sound": "Sound",
            "game-quit-game": "Quit Game",
            "game-return-to-game": "Return to Game",
            "game-hide-match-stats": "Hide Match Stats",
            "game-view-match-stats": "View Match Stats",
            "game-previous-teammate": "Previous Teammate",
            "game-next-teammate": "Next Teammate",
            "game-spectate-previous": "Previous Player",
            "game-spectate-next": "Next Player",
            "game-leave-game": "Leave Game",
            "game-your-results": "Your Results",
            "game-chicken": "Winner winner chicken dinner!",
            "game-won-the-game": "won the game.",
            "game-team-eliminated": "Your team was eliminated.",
            "game-solo-rank": "Solo Rank",
            "game-duo-rank": "Duo Rank",
            "game-squad-rank": "Squad Rank",
            "game-rank": "Rank",
            "game-team-rank": "Team Rank",
            "game-team-kills": "Team Kills",
            "game-kill": "Kill",
            "game-kills": "Kills",
            "game-damage-dealt": "Damage Dealt",
            "game-damage-taken": "Damage Taken",
            "game-survived": "Survived",
            "game-backpack00": "Pouch",
            "game-backpack01": "Small Pack",
            "game-backpack02": "Regular Pack",
            "game-backpack03": "Military Pack",
            "game-bandage": "Bandage",
            "game-bandage-tooltip": "Left-click to restore 15 health.",
            "game-healing-tooltip": "Cannot heal past 75 health.",
            "game-healthkit": "Med Kit",
            "game-healthkit-tooltip": "Left-click to restore 100 health.",
            "game-soda": "Soda",
            "game-soda-tooltip": "Left-click to boost adrenaline by 25.",
            "game-adrenaline-tooltip": "Adrenaline restores health over time.",
            "game-painkiller": "Pills",
            "game-painkiller-tooltip": "Left-click to boost adrenaline by 50.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Ammo for M9, G18C, MP5, MAC-10, UMP9, Vector and CZ-3A1.",
            "game-12gauge": "12 gauge",
            "game-12gauge-tooltip": "Ammo for M870, M1100, SPAS-12, Saiga-12 and MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Ammo for AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, M1, OT-38 and DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Ammo for FAMAS, M416, M4A1-S, QBB-97, Mk 12 and M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Ammo for DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Ammo for AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Ammo for Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Ammo for M1911, M1A1, Model 94 and Peacemaker.",
            "game-chest01": "Level 1 Vest",
            "game-chest02": "Level 2 Vest",
            "game-chest03": "Level 3 Vest",
            "game-helmet01": "Level 1 Helmet",
            "game-helmet02": "Level 2 Helmet",
            "game-helmet03": "Level 3 Helmet",
            "game-helmet03_leader": "Leader Helmet",
            "game-helmet03_forest": "Shishigami no Kabuto",
            "game-helmet03_moon": "Tsukuyomi no Kabuto",
            "game-helmet03_lt": "Lieutenant Helmet",
            "game-helmet03_lt_aged": "Lieutenant Helmet",
            "game-helmet03_potato": "K-pot-ato",
            "game-helmet04_leader": "Leader Helmet",
            "game-1xscope": "1x Scope",
            "game-2xscope": "2x Scope",
            "game-4xscope": "4x Scope",
            "game-8xscope": "8x Scope",
            "game-15xscope": "15x Scope",
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
            "game-outfitWoodland": "Woodland Combat",
            "game-outfitJester": "Jester's Folly",
            "game-outfitPrisoner": "The New Black",
            "game-outfitCasanova": "Casanova Silks",
            "game-outfitKhaki": "The Initiative",
            "game-outfitCoral": "Coral Guise",
            "game-outfitAqua": "Aquatic Avenger",
            "game-outfitIslander": "Island Time",
            "game-outfitMeteor": "Falling Star",
            "game-outfitHeaven": "Celestial Garb",
            "game-outfitWaterElem": "Water Elemental",
            "game-outfitVerde": "Poncho Verde",
            "game-outfitLumber": "Woodcutter's Wrap",
            "game-outfitImperial": "Imperial Seal",
            "game-outfitPineapple": "Valiant Pineapple",
            "game-outfitTarkhany": "Tarkhany Regal",
            "game-outfitDesertCamo": "Desert Camo",
            "game-outfitDesertGhillie": "Desert Ghillie",
            "game-outfitElf": "Tallow's Little Helper",
            "game-outfitSpetsnaz": "Siberian Assault",
            "game-outfitDarkGhillie": "Incursion Ghillie",
            "game-outfitRedLeaderAged": "Red Victorious",
            "game-outfitBlueLeaderAged": "Stifled Blue",
            "game-outfitWoodsCloak": "Greencloak",
            "game-outfitSpringGhillie": "Vernal Ghillie",
            "game-fists": "Fists",
            "game-karambit_rugged": "Karambit Rugged",
            "game-hud-karambit_rugged": "Karambit",
            "game-karambit_prismatic": "Karambit Prismatic",
            "game-hud-karambit_prismatic": "Karambit",
            "game-karambit_drowned": "Karambit Drowned",
            "game-hud-karambit_drowned": "Karambit",
            "game-bayonet_rugged": "Bayonet Rugged",
            "game-hud-bayonet_rugged": "Bayonet",
            "game-bayonet_woodland": "Bayonet Woodland",
            "game-hud-bayonet_woodland": "Bayonet",
            "game-huntsman_rugged": "Huntsman Rugged",
            "game-hud-huntsman_rugged": "Huntsman",
            "game-huntsman_burnished": "Huntsman Burnished",
            "game-hud-huntsman_burnished": "Huntsman",
            "game-bowie_vintage": "Bowie Vintage",
            "game-hud-bowie_vintage": "Bowie",
            "game-bowie_frontier": "Bowie Frontier",
            "game-hud-bowie_frontier": "Bowie",
            "game-woodaxe": "Wood Axe",
            "game-woodaxe_bloody": "Wood Axe Bloodstained",
            "game-hud-woodaxe_bloody": "Wood Axe",
            "game-fireaxe": "Fire Axe",
            "game-katana": "Katana",
            "game-katana_rusted": "Katana Rusted",
            "game-hud-katana_rusted": "Katana",
            "game-katana_orchid": "Katana Orchid",
            "game-hud-katana_orchid": "Katana",
            "game-naginata": "Naginata",
            "game-hud-naginata": "Naginata",
            "game-machete_taiga": "Machete Taiga",
            "game-hud-machete_taiga": "Machete",
            "game-kukri_trad": "Tallow's Kukri",
            "game-hud-kukri_trad": "Kukri",
            "game-stonehammer": "Stone Hammer",
            "game-hook": "Hook",
            "game-pan": "Pan",
            "game-ak47": "AK-47",
            "game-scar": "SCAR-H",
            "game-an94": "AN-94",
            "game-dp28": "DP-28",
            "game-mosin": "Mosin-Nagant",
            "game-sv98": "SV-98",
            "game-m39": "M39 EMR",
            "game-garand": "M1 Garand",
            "game-mp5": "MP5",
            "game-mac10": "MAC-10",
            "game-ump9": "UMP9",
            "game-vector": "Vector",
            "game-vector45": "Vector",
            "game-scorpion": "CZ-3A1",
            "game-m870": "M870",
            "game-m1100": "M1100",
            "game-m1014": "Super 90",
            "game-mp220": "MP220",
            "game-usas": "USAS-12",
            "game-saiga": "Saiga-12",
            "game-spas12": "SPAS-12",
            "game-m9": "M9",
            "game-m9_dual": "Dual M9",
            "game-hud-m9_dual": "M9",
            "game-m93r": "M93R",
            "game-m93r_dual": "Dual M93R",
            "game-hud-m93r_dual": "M93R",
            "game-glock": "G18C",
            "game-glock_dual": "Dual G18C",
            "game-hud-glock_dual": "G18C",
            "game-ot38": "OT-38",
            "game-ot38_dual": "Dual OT-38",
            "game-hud-ot38_dual": "OT-38",
            "game-ots38": "OTs-38",
            "game-ots38_dual": "Dual OTs-38",
            "game-hud-ots38_dual": "OTs-38",
            "game-deagle": "DEagle 50",
            "game-deagle_dual": "Dual DEagle 50",
            "game-hud-deagle_dual": "DEagle 50",
            "game-flare_gun": "Flare Gun",
            "game-flare_gun_dual": "Dual Flare Gun",
            "game-hud-flare_gun_dual": "Flare Gun",
            "game-famas": "FAMAS",
            "game-hk416": "M416",
            "game-m4a1": "M4A1-S",
            "game-mk12": "Mk 12 SPR",
            "game-m249": "M249",
            "game-qbb97": "QBB-97",
            "game-awc": "AWM-S",
            "game-model94": "Model 94",
            "game-colt45": "Peacemaker",
            "game-colt45_dual": "Dual Peacemaker",
            "game-hud-colt45_dual": "Peacemaker",
            "game-m1911": "M1911",
            "game-m1911_dual": "Dual M1911",
            "game-hud-m1911_dual": "M1911",
            "game-m1a1": "M1A1",
            "game-bar": "BAR M1918",
            "game-pkp": "PKP Pecheneg",
            "game-frag": "Frag Grenade",
            "game-hud-frag": "Frag",
            "game-smoke": "Smoke Grenade",
            "game-hud-smoke": "Smoke",
            "game-mirv": "MIRV Grenade",
            "game-hud-mirv": "MIRV",
            "game-mirv_mini": "MIRV Grenade",
            "game-strobe": "Strobe",
            "game-hud-strobe": "Strobe",
            "game-snowball": "Snowball",
            "game-hud-snowball": "Snowball",
            "game-snowball_heavy": "Snowball",
            "game-potato": "Potato",
            "game-hud-potato": "Potato",
            "game-potato_heavy": "Potato",
            "game-barrel_01": "a barrel",
            "game-barrel_01b": "a barrel",
            "game-silo_01": "a silo",
            "game-oven_01": "an oven",
            "game-control_panel_01": "Control Panel",
            "game-control_panel_02": "Control Panel",
            "game-control_panel_03": "a computer terminal",
            "game-control_panel_04": "a computer terminal",
            "game-control_panel_06": "a computer terminal",
            "game-power_box_01": "a power box",
            "game-airdrop_crate_01": "Air Drop",
            "game-airdrop_crate_02": "Air Drop",
            "game-stove_01": "a stove",
            "game-grill_01": "a grill",
            "index-play-50v50": "Play 50v50",
            "index-50v50": "50v50",
            "game-red-team": "Red Team",
            "game-blue-team": "Blue Team",
            "game-red-leader": "Red Leader",
            "game-blue-leader": "Blue Leader",
            "game-lieutenant": "Lieutenant",
            "game-is-down": "is down",
            "game-is-dead": "is dead",
            "game-promoted-to": "promoted to",
            "game-youve-been-promoted-to": "You've been promoted to",
            "game-woods-king": "The Woods King",
            "game-perk-title-1": "Leadership",
            "game-perk-desc-1": "</br>Max adrenaline.</br>Increased size.",
            "game-perk-title-2": "Firepower",
            "game-perk-desc-2": "High-capacity magazines.",
            "game-perk-title-3": "Gift of the Woods",
            "game-perk-desc-3": "Restore health over time.</br>Increased size.",
            "game-perk-title-4": "Windwalk",
            "game-perk-desc-4": "When taking fire, gain a short burst of speed.",
            "game-perk-title-5": "Rare Potato",
            "game-perk-desc-5": "Always rotate to a high quality weapon.",
            "index-online": "online",
            "index-news-korea": "We've officially broken out our <span class='highlight'>Korean servers</span> into their own region. To play in this region, select <span class='highlight'>South Korea</span> from the region selector."
        };
        e.exports = i
    },
    "604cff9c": function(e, t, a) {
        "use strict";

        function i() {
            this.active = !1
        }

        function r(e) {
            this.active = !1
        }

        function o() {
            this.explosions = [], this.physicsParticles = []
        }
        var n = (a("8b1dfb45"), a("6b42806d")),
            s = a("989ad62a"),
            l = (a("34e32c48"), a("ceee80d9"), a("10899aea")),
            c = a("1901e2d9"),
            m = a("c2a798c8"),
            p = (a("ce29f17f"), a("af8ba00f"), {
                frag: {
                    burst: {
                        particle: "explosionBurst",
                        scale: 1,
                        sound: {
                            grass: "explosion_01",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: .2,
                    shakeDur: .35,
                    lifetime: 2
                },
                smoke: {
                    burst: {
                        particle: "explosionBurst",
                        scale: 0,
                        sound: {
                            grass: "explosion_smoke_01",
                            water: "explosion_smoke_01"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 6
                },
                strobe: {
                    burst: {
                        particle: "explosionBurst",
                        scale: .25,
                        sound: {
                            grass: "explosion_04",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 3,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 2
                },
                barrel: {
                    burst: {
                        particle: "explosionBurst",
                        scale: 1,
                        sound: {
                            grass: "explosion_01",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: .2,
                    shakeDur: .35,
                    lifetime: 2
                },
                usas: {
                    burst: {
                        particle: "explosionUSAS",
                        scale: .75,
                        sound: {
                            grass: "explosion_03",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: .12,
                    shakeDur: .25,
                    lifetime: 1.25
                },
                mirv: {
                    burst: {
                        particle: "explosionMIRV",
                        scale: 1,
                        sound: {
                            grass: "explosion_01",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 10,
                    shakeStr: .2,
                    shakeDur: .35,
                    lifetime: 2
                },
                mirv_mini: {
                    burst: {
                        particle: "explosionMIRV",
                        scale: .75,
                        sound: {
                            grass: "explosion_03",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 3,
                    shakeStr: .1,
                    shakeDur: .2,
                    lifetime: 1.25
                },
                snowball: {
                    burst: {
                        particle: "",
                        scale: .75,
                        sound: {
                            grass: "snowball_01",
                            water: "frag_water_01"
                        }
                    },
                    scatter: {
                        particle: "snowball_impact",
                        count: 5,
                        speed: {
                            min: 5,
                            max: 25
                        }
                    },
                    rippleCount: 1,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 1
                },
                snowball_heavy: {
                    burst: {
                        particle: "",
                        scale: .75,
                        sound: {
                            grass: "snowball_02",
                            water: "frag_water_01"
                        }
                    },
                    scatter: {
                        particle: "snowball_impact",
                        count: 8,
                        speed: {
                            min: 5,
                            max: 25
                        }
                    },
                    rippleCount: 1,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 1
                },
                potato: {
                    burst: {
                        particle: "",
                        scale: .75,
                        sound: {
                            grass: "potato_01",
                            water: "frag_water_01"
                        }
                    },
                    scatter: {
                        particle: "potato_impact",
                        count: 5,
                        speed: {
                            min: 5,
                            max: 25
                        }
                    },
                    rippleCount: 1,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 1
                },
                potato_heavy: {
                    burst: {
                        particle: "",
                        scale: .75,
                        sound: {
                            grass: "potato_02",
                            water: "frag_water_01"
                        }
                    },
                    scatter: {
                        particle: "potato_impact",
                        count: 8,
                        speed: {
                            min: 5,
                            max: 25
                        }
                    },
                    rippleCount: 1,
                    shakeStr: 0,
                    shakeDur: 0,
                    lifetime: 1
                },
                bomb_iron: {
                    burst: {
                        particle: "explosionBomb",
                        scale: 2,
                        sound: {
                            grass: "explosion_01",
                            water: "explosion_02"
                        }
                    },
                    rippleCount: 12,
                    shakeStr: .25,
                    shakeDur: .4,
                    lifetime: 2
                }
            });
        i.prototype = {
            init: function(e, t, a, i) {
                this.pos = m.copy(e), this.vel = m.copy(t), this.layer = a, this.particle = i, this.ticker = 0, this.colCount = 0, this.active = !0
            },
            update: function(e, t, a) {
                var i = m.copy(this.pos);
                this.pos = m.add(this.pos, m.mul(this.vel, e)), this.vel = m.mul(this.vel, 1 / (1 + 5 * e));
                for (var r = [], o = t.pe.m(), s = 0; s < o.length; s++) {
                    var l = o[s];
                    l.active && !l.dead && c.sameLayer(this.layer, l.layer) && r.push(l.collider)
                }
                for (var p = a.Se.m(), d = 0; d < p.length; d++) {
                    var h = p[d];
                    h.active && !h.dead && c.sameLayer(this.layer, h.layer) && r.push(n.createCircle(h.pos, h.rad, 0))
                }
                for (var u = [], g = 0; g < r.length; g++) {
                    var y = n.intersectSegment(r[g], i, this.pos);
                    if (y) {
                        var w = m.length(m.sub(y.point, i));
                        u.push({
                            point: y.point,
                            normal: y.normal,
                            dist: w
                        })
                    }
                }
                if (u.sort(function(e, t) {
                        return e.dist - t.dist
                    }), u.length > 0) {
                    var x = u[0],
                        f = m.normalizeSafe(this.vel, m.create(1, 0)),
                        b = m.length(this.vel),
                        _ = m.sub(f, m.mul(x.normal, 2 * m.dot(x.normal, f))),
                        S = this.colCount++ > 0 ? .35 : 1;
                    this.pos = m.add(x.point, m.mul(x.normal, .01)), this.vel = m.mul(_, b * S)
                }
                this.particle.pos = m.copy(this.pos), this.ticker += e, this.ticker >= this.particle.life && (this.particle.n(), this.active = !1)
            }
        }, r.prototype = {
            o: function(e, t, a) {
                var i = s.explosions[e].explosionEffectType,
                    r = p[i];
                this.active = !0, this.done = !1, this.type = e, this.pos = m.copy(t), this.layer = a, this.ticker = 0, this.lifetime = r.lifetime, this.soundInstance = null, this.soundUpdateThrottle = 0
            },
            n: function() {
                this.active = !1
            },
            c: function(e, t, a, i, r, o) {
                var d = s.explosions[this.type].explosionEffectType,
                    h = p[d];
                if (0 == this.ticker) {
                    var u = !0;
                    if ("explosion_bomb_iron" == this.type) {
                        var g = n.createCircle(this.pos, .5);
                        r.insideBuildingCeiling(g, !0) && (u = !1)
                    }
                    if (u && (h.burst.particle && a.addParticle(h.burst.particle, this.layer, this.pos, m.create(0, 0), h.burst.scale, 0, null), h.scatter))
                        for (var y = 0; y < h.scatter.count; y++) {
                            var w = a.addParticle(h.scatter.particle, this.layer, this.pos, m.create(0, 0), 1, 0, null),
                                x = t.addPhysicsParticle(),
                                f = m.mul(m.randomUnit(), c.random(h.scatter.speed.min, h.scatter.speed.max));
                            x.init(this.pos, f, this.layer, w)
                        }
                    var b = r.getGroundSurface(this.pos, this.layer),
                        _ = "water" == b.type ? h.burst.sound.water : h.burst.sound.grass;
                    if (this.soundInstance = i.playSound(_, {
                            channel: "sfx",
                            soundPos: this.pos,
                            layer: this.layer,
                            muffled: !0,
                            rangeMult: 2,
                            ignoreMinAllowable: !0
                        }), "water" == b.type)
                        for (var S = 0; S < h.rippleCount; S++) {
                            var k = .5 * h.rippleCount,
                                v = m.add(this.pos, m.mul(m.randomUnit(), c.random(0, k))),
                                z = a.addRippleParticle(v, this.layer);
                            z.setDelay(.06 * S)
                        }
                }
                this.soundInstance && this.soundUpdateThrottle < 0 ? (this.soundUpdateThrottle = .1, this.soundInstance = i.updateSound(this.soundInstance, "sfx", this.pos, {
                    layer: this.layer,
                    muffled: !0
                })) : this.soundUpdateThrottle -= e, this.ticker += e;
                var M = l.min(this.ticker / h.shakeDur, 1),
                    T = l.lerp(M, h.shakeStr, 0);
                o.addShake(this.pos, T), this.ticker >= this.lifetime && (this.active = !1)
            }
        }, o.prototype = {
            addExplosion: function(e, t, a) {
                for (var i = null, o = 0; o < this.explosions.length; o++)
                    if (!this.explosions[o].active) {
                        i = this.explosions[o];
                        break
                    }
                i || (i = new r(this), this.explosions.push(i)), i.o(e, t, a)
            },
            addPhysicsParticle: function() {
                for (var e = null, t = 0; t < this.physicsParticles.length; t++) {
                    var a = this.physicsParticles[t];
                    if (!a.active) {
                        e = a;
                        break
                    }
                }
                return e || (e = new i, this.physicsParticles.push(e)), e
            },
            c: function(e, t, a, i, r, o, n) {
                for (var s = 0; s < this.explosions.length; s++) {
                    var l = this.explosions[s];
                    l.active && (l.c(e, this, r, o, t, i), l.active || l.n())
                }
                for (var c = 0; c < this.physicsParticles.length; c++) {
                    var m = this.physicsParticles[c];
                    m.active && m.update(e, t, a)
                }
            }
        }, e.exports = {
            ke: o
        }
    },
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
                function e(t, a, r, o, s) {
                    var l = this;
                    if (i(this, e), this.audioManager = s, this.playBtn = n("#btn-start-team"), this.serverWarning = n("#server-warning"), this.teamOptions = n("#btn-team-queue-mode-1, #btn-team-queue-mode-2, #btn-team-fill-auto, #btn-team-fill-none"), this.serverSelect = n("#team-server-select"), this.queueMode1 = n("#btn-team-queue-mode-1"), this.queueMode2 = n("#btn-team-queue-mode-2"), this.fillAuto = n("#btn-team-fill-auto"), this.fillNone = n("#btn-team-fill-none"), this.onLeave = null, this.config = t, this.pingTest = a, this.localization = r, this.joinGameFn = o, this.active = !1, this.joined = !1, this.create = !1, this.joiningGame = !1, this.ws = null, this.keepAliveTimeout = 0, this.siteInfo = {}, this.playerData = {}, this.roomData = {}, this.players = [], this.prevPlayerCount = 0, this.localPlayerId = 0, this.isLeader = !0, this.editingName = !1, this.displayedInvalidProtocolModal = !1, this.serverSelect.change(function() {
                            var e = l.serverSelect.find(":selected").val();
                            l.pingTest.start([e]), l.setRoomProperty("region", e)
                        }), this.queueMode1.click(function() {
                            l.setRoomProperty("gameModeIdx", 1)
                        }), this.queueMode2.click(function() {
                            l.setRoomProperty("gameModeIdx", 2)
                        }), this.fillAuto.click(function() {
                            l.setRoomProperty("autoFill", !0)
                        }), this.fillNone.click(function() {
                            l.setRoomProperty("autoFill", !1)
                        }), this.playBtn.on("click", function() {
                            l.tryStartGame()
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
                        var c = this;
                        n("#team-hide-url").click(function(e) {
                            c.hideUrl = !c.hideUrl, n("#team-desc-text, #team-code-text").css({
                                opacity: c.hideUrl ? 0 : 1
                            }), n(this).css({
                                "background-image": c.hideUrl ? "url(../img/gui/hide.svg)" : "url(../img/gui/eye.svg)"
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
                            e && "" != e && (t = r(e, this.localization)), this.onLeave(t)
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
                        var a = this;
                        switch (e) {
                            case "state":
                                this.joined = !0;
                                var i = this.roomData;
                                this.roomData = t.room, this.players = t.players, this.localPlayerId = t.localPlayerId, this.isLeader = this.getPlayerById(this.localPlayerId).isLeader, this.isLeader && (this.roomData.region = i.region, this.roomData.autoFill = i.autoFill), this.refreshUi();
                                break;
                            case "joinGame":
                                this.joiningGame = !0, this.joinGameFn(t, function() {
                                    a.leave("join_game_failed")
                                });
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
                            for (var k = 0; k < this.roomData.maxPlayers; k++) ! function(t) {
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
                                        maxLength: l.Constants.kPlayerNameMaxLen
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
                            }(k);
                            n(".icon-kick", S).click(function(t) {
                                var a = n(t.currentTarget).attr("data-playerid");
                                e.sendMessage("kick", {
                                    playerId: a
                                })
                            });
                            var v = this.players.find(function(t) {
                                    return t.playerId == e.localPlayerId
                                }),
                                z = v && !v.inGame;
                            !document.hasFocus() && this.prevPlayerCount < this.players.length && this.players.length > 1 && z && this.audioManager.playSound("notification_join_01", {
                                channel: "ui"
                            }), this.prevPlayerCount = this.players.length
                        }
                    }
                }]), e
            }();
        e.exports = d
    },
    "66141f52": function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            a = a || 2;
            var i = t && t.length,
                o = i ? t[0] * a : e.length,
                s = r(e, 0, o, a, !0),
                l = [];
            if (!s) return l;
            var c, m, d, h, u, g, y;
            if (i && (s = p(e, t, s, a)), e.length > 80 * a) {
                c = d = e[0], m = h = e[1];
                for (var w = a; w < o; w += a) u = e[w], g = e[w + 1], u < c && (c = u), g < m && (m = g), u > d && (d = u), g > h && (h = g);
                y = Math.max(d - c, h - m), y = 0 !== y ? 1 / y : 0
            }
            return n(s, l, a, c, m, y), l
        }

        function r(e, t, a, i, r) {
            var o, n;
            if (r === A(e, t, a, i) > 0)
                for (o = t; o < a; o += i) n = P(o, e[o], e[o + 1], n);
            else
                for (o = a - i; o >= t; o -= i) n = P(o, e[o], e[o + 1], n);
            return n && S(n, n.next) && (I(n), n = n.next), n
        }

        function o(e, t) {
            if (!e) return e;
            t || (t = e);
            var a, i = e;
            do {
                if (a = !1, i.steiner || !S(i, i.next) && 0 !== _(i.prev, i, i.next)) i = i.next;
                else {
                    if (I(i), (i = t = i.prev) === i.next) break;
                    a = !0
                }
            } while (a || i !== t);
            return t
        }

        function n(e, t, a, i, r, p, d) {
            if (e) {
                !d && p && g(e, i, r, p);
                for (var h, u, y = e; e.prev !== e.next;)
                    if (h = e.prev, u = e.next, p ? l(e, i, r, p) : s(e)) t.push(h.i / a), t.push(e.i / a), t.push(u.i / a), I(e), e = u.next, y = u.next;
                    else if ((e = u) === y) {
                    d ? 1 === d ? (e = c(e, t, a), n(e, t, a, i, r, p, 2)) : 2 === d && m(e, t, a, i, r, p) : n(o(e), t, a, i, r, p, 1);
                    break
                }
            }
        }

        function s(e) {
            var t = e.prev,
                a = e,
                i = e.next;
            if (_(t, a, i) >= 0) return !1;
            for (var r = e.next.next; r !== e.prev;) {
                if (f(t.x, t.y, a.x, a.y, i.x, i.y, r.x, r.y) && _(r.prev, r, r.next) >= 0) return !1;
                r = r.next
            }
            return !0
        }

        function l(e, t, a, i) {
            var r = e.prev,
                o = e,
                n = e.next;
            if (_(r, o, n) >= 0) return !1;
            for (var s = r.x < o.x ? r.x < n.x ? r.x : n.x : o.x < n.x ? o.x : n.x, l = r.y < o.y ? r.y < n.y ? r.y : n.y : o.y < n.y ? o.y : n.y, c = r.x > o.x ? r.x > n.x ? r.x : n.x : o.x > n.x ? o.x : n.x, m = r.y > o.y ? r.y > n.y ? r.y : n.y : o.y > n.y ? o.y : n.y, p = w(s, l, t, a, i), d = w(c, m, t, a, i), h = e.prevZ, u = e.nextZ; h && h.z >= p && u && u.z <= d;) {
                if (h !== e.prev && h !== e.next && f(r.x, r.y, o.x, o.y, n.x, n.y, h.x, h.y) && _(h.prev, h, h.next) >= 0) return !1;
                if (h = h.prevZ, u !== e.prev && u !== e.next && f(r.x, r.y, o.x, o.y, n.x, n.y, u.x, u.y) && _(u.prev, u, u.next) >= 0) return !1;
                u = u.nextZ
            }
            for (; h && h.z >= p;) {
                if (h !== e.prev && h !== e.next && f(r.x, r.y, o.x, o.y, n.x, n.y, h.x, h.y) && _(h.prev, h, h.next) >= 0) return !1;
                h = h.prevZ
            }
            for (; u && u.z <= d;) {
                if (u !== e.prev && u !== e.next && f(r.x, r.y, o.x, o.y, n.x, n.y, u.x, u.y) && _(u.prev, u, u.next) >= 0) return !1;
                u = u.nextZ
            }
            return !0
        }

        function c(e, t, a) {
            var i = e;
            do {
                var r = i.prev,
                    o = i.next.next;
                !S(r, o) && k(r, i, i.next, o) && z(r, o) && z(o, r) && (t.push(r.i / a), t.push(i.i / a), t.push(o.i / a), I(i), I(i.next), i = e = o), i = i.next
            } while (i !== e);
            return i
        }

        function m(e, t, a, i, r, s) {
            var l = e;
            do {
                for (var c = l.next.next; c !== l.prev;) {
                    if (l.i !== c.i && b(l, c)) {
                        var m = T(l, c);
                        return l = o(l, l.next), m = o(m, m.next), n(l, t, a, i, r, s), void n(m, t, a, i, r, s)
                    }
                    c = c.next
                }
                l = l.next
            } while (l !== e)
        }

        function p(e, t, a, i) {
            var n, s, l, c, m, p = [];
            for (n = 0, s = t.length; n < s; n++) l = t[n] * i, c = n < s - 1 ? t[n + 1] * i : e.length, m = r(e, l, c, i, !1), m === m.next && (m.steiner = !0), p.push(x(m));
            for (p.sort(d), n = 0; n < p.length; n++) h(p[n], a), a = o(a, a.next);
            return a
        }

        function d(e, t) {
            return e.x - t.x
        }

        function h(e, t) {
            if (t = u(e, t)) {
                var a = T(t, e);
                o(a, a.next)
            }
        }

        function u(e, t) {
            var a, i = t,
                r = e.x,
                o = e.y,
                n = -1 / 0;
            do {
                if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                    var s = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                    if (s <= r && s > n) {
                        if (n = s, s === r) {
                            if (o === i.y) return i;
                            if (o === i.next.y) return i.next
                        }
                        a = i.x < i.next.x ? i : i.next
                    }
                }
                i = i.next
            } while (i !== t);
            if (!a) return null;
            if (r === n) return a.prev;
            var l, c = a,
                m = a.x,
                p = a.y,
                d = 1 / 0;
            for (i = a.next; i !== c;) r >= i.x && i.x >= m && r !== i.x && f(o < p ? r : n, o, m, p, o < p ? n : r, o, i.x, i.y) && ((l = Math.abs(o - i.y) / (r - i.x)) < d || l === d && i.x > a.x) && z(i, e) && (a = i, d = l), i = i.next;
            return a
        }

        function g(e, t, a, i) {
            var r = e;
            do {
                null === r.z && (r.z = w(r.x, r.y, t, a, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
            } while (r !== e);
            r.prevZ.nextZ = null, r.prevZ = null, y(r)
        }

        function y(e) {
            var t, a, i, r, o, n, s, l, c = 1;
            do {
                for (a = e, e = null, o = null, n = 0; a;) {
                    for (n++, i = a, s = 0, t = 0; t < c && (s++, i = i.nextZ); t++);
                    for (l = c; s > 0 || l > 0 && i;) 0 !== s && (0 === l || !i || a.z <= i.z) ? (r = a, a = a.nextZ, s--) : (r = i, i = i.nextZ, l--), o ? o.nextZ = r : e = r, r.prevZ = o, o = r;
                    a = i
                }
                o.nextZ = null, c *= 2
            } while (n > 1);
            return e
        }

        function w(e, t, a, i, r) {
            return e = 32767 * (e - a) * r, t = 32767 * (t - i) * r, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e | t << 1
        }

        function x(e) {
            var t = e,
                a = e;
            do {
                t.x < a.x && (a = t), t = t.next
            } while (t !== e);
            return a
        }

        function f(e, t, a, i, r, o, n, s) {
            return (r - n) * (t - s) - (e - n) * (o - s) >= 0 && (e - n) * (i - s) - (a - n) * (t - s) >= 0 && (a - n) * (o - s) - (r - n) * (i - s) >= 0
        }

        function b(e, t) {
            return e.next.i !== t.i && e.prev.i !== t.i && !v(e, t) && z(e, t) && z(t, e) && M(e, t)
        }

        function _(e, t, a) {
            return (t.y - e.y) * (a.x - t.x) - (t.x - e.x) * (a.y - t.y)
        }

        function S(e, t) {
            return e.x === t.x && e.y === t.y
        }

        function k(e, t, a, i) {
            return !!(S(e, t) && S(a, i) || S(e, i) && S(a, t)) || _(e, t, a) > 0 != _(e, t, i) > 0 && _(a, i, e) > 0 != _(a, i, t) > 0
        }

        function v(e, t) {
            var a = e;
            do {
                if (a.i !== e.i && a.next.i !== e.i && a.i !== t.i && a.next.i !== t.i && k(a, a.next, e, t)) return !0;
                a = a.next
            } while (a !== e);
            return !1
        }

        function z(e, t) {
            return _(e.prev, e, e.next) < 0 ? _(e, t, e.next) >= 0 && _(e, e.prev, t) >= 0 : _(e, t, e.prev) < 0 || _(e, e.next, t) < 0
        }

        function M(e, t) {
            var a = e,
                i = !1,
                r = (e.x + t.x) / 2,
                o = (e.y + t.y) / 2;
            do {
                a.y > o != a.next.y > o && a.next.y !== a.y && r < (a.next.x - a.x) * (o - a.y) / (a.next.y - a.y) + a.x && (i = !i), a = a.next
            } while (a !== e);
            return i
        }

        function T(e, t) {
            var a = new C(e.i, e.x, e.y),
                i = new C(t.i, t.x, t.y),
                r = e.next,
                o = t.prev;
            return e.next = t, t.prev = e, a.next = r, r.prev = a, i.next = a, a.prev = i, o.next = i, i.prev = o, i
        }

        function P(e, t, a, i) {
            var r = new C(e, t, a);
            return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
        }

        function I(e) {
            e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
        }

        function C(e, t, a) {
            this.i = e, this.x = t, this.y = a, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }

        function A(e, t, a, i) {
            for (var r = 0, o = t, n = a - i; o < a; o += i) r += (e[n] - e[o]) * (e[o + 1] + e[n + 1]), n = o;
            return r
        }
        e.exports = i, e.exports.default = i, i.deviation = function(e, t, a, i) {
            var r = t && t.length,
                o = r ? t[0] * a : e.length,
                n = Math.abs(A(e, 0, o, a));
            if (r)
                for (var s = 0, l = t.length; s < l; s++) {
                    var c = t[s] * a,
                        m = s < l - 1 ? t[s + 1] * a : e.length;
                    n -= Math.abs(A(e, c, m, a))
                }
            var p = 0;
            for (s = 0; s < i.length; s += 3) {
                var d = i[s] * a,
                    h = i[s + 1] * a,
                    u = i[s + 2] * a;
                p += Math.abs((e[d] - e[u]) * (e[h + 1] - e[d + 1]) - (e[d] - e[h]) * (e[u + 1] - e[d + 1]))
            }
            return 0 === n && 0 === p ? 0 : Math.abs((p - n) / n)
        }, i.flatten = function(e) {
            for (var t = e[0][0].length, a = {
                    vertices: [],
                    holes: [],
                    dimensions: t
                }, i = 0, r = 0; r < e.length; r++) {
                for (var o = 0; o < e[r].length; o++)
                    for (var n = 0; n < t; n++) a.vertices.push(e[r][o][n]);
                r > 0 && (i += e[r - 1].length, a.holes.push(i))
            }
            return a
        }
    },
    "6afea591": function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Main Spring",
                    icon: "img/gui/surviv.svg",
                    mode: "main"
                },
                assets: {
                    audio: [],
                    atlases: ["gradient", "shared", "main"]
                },
                biome: {
                    colors: {
                        background: 2118510,
                        water: 3310251,
                        beach: 16035400,
                        riverbank: 9079434,
                        grass: 6066442,
                        underground: 1772803,
                        playerSubmerge: 2854052
                    },
                    sound: {
                        riverShore: "stone"
                    },
                    particles: {
                        camera: "falling_leaf_spring",
                        ripple: "waterRipple"
                    }
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    "6b42806d": function(e, t, a) {
        "use strict";
        var i = a("34e32c48"),
            r = a("10899aea"),
            o = a("c2a798c8"),
            n = {
                Type: {
                    Circle: 0,
                    Aabb: 1
                },
                createCircle: function(e, t, a) {
                    return {
                        type: n.Type.Circle,
                        pos: o.copy(e),
                        rad: t,
                        height: void 0 !== a ? a : 0
                    }
                },
                createAabb: function(e, t, a) {
                    return {
                        type: n.Type.Aabb,
                        min: o.copy(e),
                        max: o.copy(t),
                        height: void 0 !== a ? a : 0
                    }
                },
                createAabbExtents: function(e, t, a) {
                    var i = o.sub(e, t),
                        r = o.add(e, t);
                    return n.createAabb(i, r, a)
                },
                createBounding: function(e) {
                    if (1 == e.length) return n.copy(e[0]);
                    for (var t = [], a = 0, o = 0; o < e.length; o++) {
                        var s = e[o];
                        t.push(n.toAabb(s)), a = r.max(a, s.height)
                    }
                    var l = i.boundingAabb(t);
                    return n.createAabb(l.min, l.max, a)
                },
                toAabb: function(e) {
                    if (e.type == n.Type.Aabb) return n.createAabb(e.min, e.max, e.height);
                    var t = i.circleToAabb(e.pos, e.rad);
                    return n.createAabb(t.min, t.max, e.height)
                },
                copy: function(e) {
                    return e.type == n.Type.Circle ? n.createCircle(e.pos, e.rad, e.height) : n.createAabb(e.min, e.max, e.height)
                },
                transform: function(e, t, a, i) {
                    if (e.type == n.Type.Aabb) {
                        for (var s = o.mul(o.sub(e.max, e.min), .5), l = o.add(e.min, s), c = [o.create(l.x - s.x, l.y - s.y), o.create(l.x - s.x, l.y + s.y), o.create(l.x + s.x, l.y - s.y), o.create(l.x + s.x, l.y + s.y)], m = o.create(Number.MAX_VALUE, Number.MAX_VALUE), p = o.create(-Number.MAX_VALUE, -Number.MAX_VALUE), d = 0; d < c.length; d++) {
                            var h = o.add(o.rotate(o.mul(c[d], i), a), t);
                            m.x = r.min(m.x, h.x), m.y = r.min(m.y, h.y), p.x = r.max(p.x, h.x), p.y = r.max(p.y, h.y)
                        }
                        return n.createAabb(m, p, e.height)
                    }
                    return n.createCircle(o.add(o.rotate(o.mul(e.pos, i), a), t), e.rad * i, e.height)
                },
                intersectCircle: function(e, t, a) {
                    return e.type == n.Type.Aabb ? i.intersectAabbCircle(e.min, e.max, t, a) : i.intersectCircleCircle(e.pos, e.rad, t, a)
                },
                intersectAabb: function(e, t, a) {
                    return e.type == n.Type.Aabb ? i.intersectAabbAabb(e.min, e.max, t, a) : i.intersectAabbCircle(t, a, e.pos, e.rad)
                },
                intersectSegment: function(e, t, a) {
                    return e.type == n.Type.Aabb ? i.intersectSegmentAabb(t, a, e.min, e.max) : i.intersectSegmentCircle(t, a, e.pos, e.rad)
                },
                intersect: function(e, t) {
                    return t.type == n.Type.Aabb ? n.intersectAabb(e, t.min, t.max) : n.intersectCircle(e, t.pos, t.rad)
                }
            };
        e.exports = n
    },
    "6b9375bf": function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-05-13",
                locale: "vn"
            },
            "word-order": "svo",
            "index-slogan": "2d Battle Royale",
            "index-region": "Vùng",
            "index-north-america": "Bắc Mỹ",
            "index-europe": "Châu Âu",
            "index-asia": "Châu Á",
            "index-south-america": "Nam Mỹ",
            "index-korea": "Đại Hàn Dân Quốc",
            "index-players": "người chơi",
            "index-play-solo": "Chơi một người",
            "index-play-duo": "Chơi nhóm hai người",
            "index-play-squad": "Chơi nhóm bốn người",
            "index-join-team": "Vào nhóm",
            "index-create-team": "Tạo nhóm",
            "index-leave-team": "Rời nhóm",
            "index-joining-team": "Đang vào nhóm",
            "index-creating-team": "Đang tạo nhóm",
            "index-invite-link": "Đường dẫn mời chơi",
            "index-invite-code": "Mã số mời chơi",
            "index-solo": "Đơn",
            "index-duo": "Nhóm hai",
            "index-squad": "Nhóm bốn",
            "index-auto-fill": "Tự động điền",
            "index-no-fill": "Không thêm",
            "index-waiting-for-leader": "Chờ trưởng nhóm bắt đầu lượt chơi",
            "index-joining-game": "Tham gia trò chơi",
            "index-game-in-progress": "Trò chơi đang diễn ra",
            "index-play": "Chơi",
            "index-featured-youtuber": "YouTuber khách mời",
            "index-streaming-live": "Phát trực tiếp!",
            "index-settings": "Cài đặt",
            "index-high-resolution": "Độ phân giải cao (đánh dấu để tăng chất lượng hình ảnh)",
            "index-screen-shake": "Rung màn hình",
            "index-master-volume": "Âm lượng tổng",
            "index-sfx-volume": "Âm lượng SFX",
            "index-music-volume": "Music Volume",
            "index-mobile-announce": "Now available on mobile!",
            "index-mobile-tooltip": "Visit <span>surviv.io</span> on your mobile device to play on the go!",
            "index-team-is-full": "Nhóm đã đủ người!",
            "index-failed-joining-team": "Không vào được nhóm.",
            "index-failed-creating-team": "Không tạo được nhóm.",
            "index-failed-finding-game": "Không tìm được lượt chơi.",
            "index-failed-joining-game": "Không vào được lượt chơi.",
            "index-lost-connection": "Mất kết nối với nhóm.",
            "index-host-closed": "Chủ lượt chơi đã đóng kết nối.",
            "index-invalid-protocol": "Phiên bản cũ.",
            "index-view-more": "Xem thêm",
            "index-back-to-main": "Quay lại Danh mục chính",
            "index-most-kills": "Tiêu diệt nhiều nhất",
            "index-total-kills": "Tổng số bị tiêu diệt",
            "index-total-wins": "Tổng số lần thắng",
            "index-top-5-percent": "Tốp 5 phần trăm",
            "index-kill-death-ratio": 'Tỷ lệ "Tiêu diệt-Bị tiêu diệt"',
            "index-mode": "Mode",
            "index-for": "Của",
            "index-today": "Ngày hôm nay",
            "index-this-week": "Tuần này",
            "index-all-time": "Toàn bộ thời gian chơi",
            "index-top-100": "Tốp 100",
            "index-rank": "Thứ hạng",
            "index-player": "Người chơi",
            "index-total-games": "Tất cả các lượt chơi",
            "index-controls": "Kiểm soát",
            "index-movement": "Di chuyển",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Ngắm",
            "index-aim-ctrl": "Chuột",
            "index-punch": "Đấm",
            "index-shoot": "Bắn",
            "index-shoot-ctrl": "Bấm chuột trái",
            "index-change-weapons": "Đổi vũ khí",
            "index-change-weapons-ctrl": "1 đến 4 hoặc nút cuộn chuột",
            "index-stow-weapons": "Stow Weapons (Melee Mode)",
            "index-stow-weapons-ctrl": "3 hoặc E",
            "index-swap-weapons": "Đổi về vũ khí trước đó",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Nạp đạn",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Phóng to",
            "index-scope-zoom-ctrl": "Bấm chuột trái để phóng to",
            "index-pickup": "Nhặt lên",
            "index-loot": "Vật phẩm",
            "index-revive": "Hồi phục",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Sử dụng vật phẩm cứu thương",
            "index-use-medical-ctrl": "Bấm chuột trái lệ vật phẩm hoặc ấn 7-0",
            "index-drop-item": "Bỏ vật phẩm",
            "index-drop-item-ctrl": "Phải chuột phải vào vật phẩm",
            "index-cancel-action": "Hủy hành động",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Xem bản đồ",
            "index-view-map-ctrl": "M hoặc G",
            "index-toggle-minimap": "Bật bản đồ mini",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Sử dụng Cửa sổ Trò chuyện của nhóm",
            "index-use-ping-ctrl": "Giữ C, rồi giữ chuột phải và rê chuột, rồi thả chuột phải",
            "index-use-emote": "Dùng Cửa sổ Biểu cảm của nhóm",
            "index-use-emote-ctrl": "Giữ phải chuột rồi rê chuột, rồi thả phải chuột",
            "index-how-to-play": "Cách chơi",
            "index-tips-1-desc": "Mục tiêu của trò surviv.io là thành người cuối cùng còn sống sót. Bạn chỉ có một mạng cho mỗi lượt chơi - không thể tái sinh lại!",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "Nếu các bạn đã chơi những trò chơi sinh tồn kiểu PUBG, Fortnite hay H1Z1, thì bạn đã nắm được một nửa trò chơi rồi! Hãy coi trò surviv.io như là trò PUBG 2D.",
            "index-tips-3": "Kiếm vật phẩm và tiêu diệt",
            "index-tips-3-desc": "Bạn sẽ bắt đầu trò chơi mà không có vật phẩm gì ngoài một cái balo. Chạy quanh bản đồ để tìm vật phẩm như: vũ khí, đạn, ống ngắm và và vật phẩm cứu thương. Tiêu diệt những người chơi khác và bạn có thể lấy vật phẩm của họ!",
            "index-tips-4": "Màu đỏ = Không ổn!",
            "index-tips-4-desc": "Người không chỉ là thứ duy nhất có thể gây sát thương lên bạn. Vùng màu đỏ nguy hiểm sẽ di chuyển và thu nhỏ dần lại theo bản đồ và gây sát thương lớn nếu bạn nằm trong vùng màu đỏ. Hãy để ý tới bản đồ và giữ khoảng cách an toàn.",
            "index-movement-ctrl-touch": "Núm điều khiển bên trái",
            "index-aim-ctrl-touch": "Núm điều khiển bên phải",
            "index-shoot-ctrl-touch": "Kéo nút điều khiển bên phải ra ngoài mép thanh điều khiển",
            "index-change-weapons-ctrl-touch": "Chạm vào ô vũ khí",
            "index-reload-ctrl-touch": "Chạm vào bộ đếm đạn được trang bị",
            "index-scope-zoom-ctrl-touch": "Chạm vào mục thu phóng",
            "index-pickup-ctrl-touch": "Chạm vào nút tương tác hoặc tên vật phẩm",
            "index-use-medical-ctrl-touch": "Chạm vào mục y tế",
            "index-drop-item-ctrl-touch": "Chạm và giữ đồ vật",
            "index-cancel-action-ctrl-touch": "Chạm vào nút tương tác",
            "index-view-map-ctrl-touch": "Chạm vào bản đồ mini",
            "index-use-ping-ctrl-touch": "Hiển thị bản đồ và chạm vào bất kỳ vị trí nào trên bản đồ",
            "index-use-emote-ctrl-touch": "Chạm vào biểu tượng sống sót",
            "game-alive": "Còn sống",
            "game-reloading": "Nạp đạn",
            "game-use": "Use",
            "game-using": "Sử dụng",
            "game-reviving": "Hồi phục",
            "game-revive-teammate": "Hồi phục cho đồng đội",
            "game-equip": "Trang bị",
            "game-cancel": "Hủy",
            "game-open-door": "Mở cửa",
            "game-close-door": "Đóng cửa",
            "game-You": "Bạn",
            "game-you": "bạn",
            "game-themselves": "chính họ",
            "game-yourself": "chính bạn",
            "game-you-died": "đã bị tiêu diệt",
            "game-player-died": "đã bị tiêu diệt",
            "game-with": "bởi",
            "game-knocked-out": "hạ gục",
            "game-killed": "đã bị tiêu diệt",
            "game-finally-killed": "cuối cùng cũng tiêu diệt được",
            "game-finally-bled-out": "cuối cùng đã chảy máu",
            "game-died-outside": "đã bị tiêu diệt ngoài vùng an toàn",
            "game-the-red-zone": "Vùng màu đỏ",
            "game-waiting-for-players": "Đợi người chơi khác",
            "game-spectating": "Quan sát",
            "game-red-zone-advances": "Vùng màu đỏ thu hẹp dần",
            "game-red-zone-advancing": "Vùng màu đỏ đang thu hẹp dần, hãy chạy về vùng an toàn!",
            "game-seconds": "giây",
            "game-minutes": "phút",
            "game-minute": "phút",
            "game-m": "m",
            "game-s": "s",
            "game-not-enough-space": "Không đủ chỗ!",
            "game-item-already-owned": "Đã có vật phẩm này!",
            "game-item-already-equipped": "Đã trang bị vật phẩm!",
            "game-better-item-equipped": "Đã trang bị vật phẩm tốt hơn!",
            "game-play-new-game": "Chơi lượt mới",
            "game-spectate": "Xem người khác chơi",
            "game-full-screen": "Toàn màn hình",
            "game-sound": "Âm thanh",
            "game-quit-game": "Thoát khỏi lượt chơi",
            "game-return-to-game": "Trở lại lượt chơi",
            "game-hide-match-stats": "Ẩn chỉ số trận đấu",
            "game-view-match-stats": "Xem chỉ số trận đấu",
            "game-previous-teammate": "Đồng đội trước đó",
            "game-next-teammate": "Đồng đội kế tiếp",
            "game-spectate-previous": "Người chơi trước",
            "game-spectate-next": "The next player",
            "game-leave-game": "Thoát lượt chơi",
            "game-your-results": "Kết quả của bạn",
            "game-chicken": "Chiến thắng chiến thắng Cơm gà xả láng!",
            "game-won-the-game": "đã thắng lượt chơi.",
            "game-team-eliminated": "Đội của bạn đã bị tiêu diệt.",
            "game-solo-rank": "Xếp hạng Solo",
            "game-duo-rank": "Xếp hạng Duo",
            "game-squad-rank": "Xếp hạng đội hình",
            "game-rank": "Thứ hạng",
            "game-team-rank": "Thứ hạng của đội",
            "game-team-kills": "Số lượt tiêu diệt được của đội",
            "game-kill": "Tiêu diệt",
            "game-kills": "Tiêu diệt",
            "game-damage-dealt": "Sát thương gây ra",
            "game-damage-taken": "Sát thương nhận",
            "game-survived": "Đã sống sót",
            "game-backpack00": "Túi đồ",
            "game-backpack01": "Balo nhỏ",
            "game-backpack02": "Balo vừa",
            "game-backpack03": "Balo quân sự",
            "game-bandage": "Túi cứu thương",
            "game-bandage-tooltip": "Bấm chuột trái để hồi 15 máu.",
            "game-healing-tooltip": "Không thể hồi quá 75 máu.",
            "game-healthkit": "Bộ kit cứu thương",
            "game-healthkit-tooltip": "Bấm chuột trái để hồi 100 máu.",
            "game-soda": "Soda",
            "game-soda-tooltip": "Bấm chuột trái để tăng adrenalin lên 25 điểm.",
            "game-adrenaline-tooltip": "Adrenalin hồi phục máu theo thời gian.",
            "game-painkiller": "Thuốc",
            "game-painkiller-tooltip": "Bấm chuột trái để tăng adrenaline lên 50.",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "Đạn cho súng M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 và Vector.",
            "game-12gauge": "cỡ 12",
            "game-12gauge-tooltip": "Đạn cho súng M870, M1100, SPAS-12, Saiga-12 và MP220.",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "Đạn cho súng AK-47, SCAR-H, M39, Mosin-Nagant, SV-98, OT-38 và DP-28.",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "Đạn cho súng FAMAS, M416, M4A1-S, Mk 12 và M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Đạn cho súng DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Đạn cho súng AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Đạn cho súng Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Đạn cho súng M1911, M1A1, Model 94 và Peacemaker.",
            "game-chest01": "Áo giáp cấp 1",
            "game-chest02": "Áo giáp cấp 2",
            "game-chest03": "Áo giáp cấp 3",
            "game-helmet01": "Mũ cối cấp 1",
            "game-helmet02": "Mũ cối cấp 2",
            "game-helmet03": "Mũ cối cấp 3",
            "game-1xscope": "1x Kính ngắm",
            "game-2xscope": "2x Kính ngắm",
            "game-4xscope": "4x Kính ngắm",
            "game-8xscope": "8x Kính ngắm",
            "game-15xscope": "15x Kính ngắm",
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
            "game-outfitWoodland": "Woodland Combat",
            "game-outfitJester": "Jester's Folly",
            "game-outfitPrisoner": "The New Black",
            "game-outfitCasanova": "Casanova Silks",
            "game-outfitKhaki": "The Initiative",
            "game-fists": "Nắm đấm",
            "game-ak47": "AK-47",
            "game-scar": "SCAR-H",
            "game-dp28": "DP-28",
            "game-mosin": "Mosin-Nagant",
            "game-m39": "M39 EMR",
            "game-mp5": "MP5",
            "game-mac10": "MAC-10",
            "game-ump9": "UMP9",
            "game-vector": "Vector",
            "game-m870": "M870",
            "game-mp220": "MP220",
            "game-saiga": "Saiga-12",
            "game-m9": "M9",
            "game-m9_dual": "Dual M9",
            "game-hud-m9_dual": "M9",
            "game-glock": "G18C",
            "game-glock_dual": "Dual G18C",
            "game-hud-glock_dual": "G18C",
            "game-ot38": "OT-38",
            "game-ot38_dual": "Dual OT-38",
            "game-hud-ot38_dual": "OT-38",
            "game-deagle": "DEagle 50",
            "game-deagle_dual": "Dual DEagle 50",
            "game-hud-deagle_dual": "DEagle 50",
            "game-famas": "FAMAS",
            "game-hk416": "M416",
            "game-mk12": "Mk 12 SPR",
            "game-m249": "M249",
            "game-frag": "Lựu đạn",
            "game-hud-frag": "Lựu đạn",
            "game-smoke": "Lựu đạn khói",
            "game-hud-smoke": "Lựu đạn cháy",
            "game-potato": "Khoai tây",
            "game-hud-potato": "Khoai tây",
            "game-potato_heavy": "Khoai tây",
            "game-barrel_01": "một khẩu súng",
            "game-silo_01": "một chiếc xi lô",
            "game-oven_01": "một chiếc lò nướng",
            "game-control_panel_01": "Bảng điều khiển",
            "game-control_panel_02": "Bảng điều khiển",
            "game-control_panel_03": "một khối đầu cuối máy tính",
            "game-power_box_01": "một chiếc tủ điện",
            "index-play-50v50": "Chơi nhóm 50 người",
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
    "6bad552e": function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            return {
                time: e,
                bones: t
            }
        }

        function n(e, t, a) {
            return {
                time: e,
                fn: t,
                args: a
            }
        }
        var s, l, c, m, p, d, h, u, g, y, w, x, f, b, _, S, k, v, z, M, T, P, I, C, A, E, D, O, B, L, R, F, j, q, N, V, G, U, H, W, K, Z, X, Y, J, Q, $, ee = function() {
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
            te = a("989ad62a"),
            ae = (te.Anim, a("0e566746")),
            ie = a("10899aea"),
            re = a("c2a798c8"),
            oe = function() {
                function e(t, a, i) {
                    r(this, e), this.pivot = re.copy(t || re.create(0, 0)), this.rot = 0, this.pos = re.copy(i || re.create(0, 0))
                }
                return ee(e, [{
                    key: "copy",
                    value: function(e) {
                        re.set(this.pivot, e.pivot), this.rot = e.rot, re.set(this.pos, e.pos)
                    }
                }, {
                    key: "rotate",
                    value: function(e) {
                        return this.rot = e, this
                    }
                }, {
                    key: "offset",
                    value: function(e) {
                        return this.pos = re.copy(e), this
                    }
                }]), e
            }();
        oe.identity = new oe(re.create(0, 0)), oe.lerp = function(e, t, a) {
            var i = new oe;
            return i.pos = re.lerp(e, t.pos, a.pos), i.rot = ie.lerp(e, t.rot, a.rot), i.pivot = re.lerp(e, t.pivot, a.pivot), i
        };
        var ne = {
            HandL: 0,
            HandR: 1,
            FootL: 2,
            FootR: 3
        };
        ae(Object.keys(ne).length % 2 == 0);
        var se = {
                fists: (s = {}, i(s, ne.HandL, new oe(re.create(14, -12.25))), i(s, ne.HandR, new oe(re.create(14, 12.25))), s),
                slash: (l = {}, i(l, ne.HandL, new oe(re.create(18, -8.25))), i(l, ne.HandR, new oe(re.create(6, 20.25))), l),
                meleeTwoHanded: (c = {}, i(c, ne.HandL, new oe(re.create(10.5, -14.25))), i(c, ne.HandR, new oe(re.create(18, 6.25))), c),
                meleeKatana: (m = {}, i(m, ne.HandL, new oe(re.create(8.5, 13.25))), i(m, ne.HandR, new oe(re.create(-3, 17.75))), m),
                meleeNaginata: (p = {}, i(p, ne.HandL, new oe(re.create(19, -7.25))), i(p, ne.HandR, new oe(re.create(8.5, 24.25))), p),
                machete: (d = {}, i(d, ne.HandL, new oe(re.create(14, -12.25))), i(d, ne.HandR, new oe(re.create(1, 17.75))), d),
                rifle: (h = {}, i(h, ne.HandL, new oe(re.create(28, 5.25))), i(h, ne.HandR, new oe(re.create(14, 1.75))), h),
                pistol: (u = {}, i(u, ne.HandL, new oe(re.create(14, 1.75))), i(u, ne.HandR, new oe(re.create(14, 1.75))), u),
                dualPistol: (g = {}, i(g, ne.HandL, new oe(re.create(15.75, -8.75))), i(g, ne.HandR, new oe(re.create(15.75, 8.75))), g),
                throwable: (y = {}, i(y, ne.HandL, new oe(re.create(15.75, -9.625))), i(y, ne.HandR, new oe(re.create(15.75, 9.625))), y),
                downed: (w = {}, i(w, ne.HandL, new oe(re.create(14, -12.25))), i(w, ne.HandR, new oe(re.create(14, 12.25))), i(w, ne.FootL, new oe(re.create(-15.75, -9))), i(w, ne.FootR, new oe(re.create(-15.75, 9))), w)
            },
            le = te.items.fists,
            ce = te.items.hook,
            me = te.items.woodaxe,
            pe = te.items.stonehammer,
            de = te.items.katana,
            he = te.items.naginata,
            ue = {
                none: {
                    keyframes: [],
                    effects: []
                },
                fists: {
                    keyframes: [o(0, i({}, ne.HandR, new oe(re.create(14, 12.25)))), o(le.damageTime, i({}, ne.HandR, new oe(re.create(29.75, 1.75)))), o(le.cooldownTime, i({}, ne.HandR, new oe(re.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(le.damageTime, "animMeleeCollision", {})]
                },
                cut: {
                    keyframes: [o(0, i({}, ne.HandR, new oe(re.create(14, 12.25)))), o(.25 * le.damageTime, i({}, ne.HandR, new oe(re.create(14, 12.25)).rotate(.35 * -Math.PI))), o(1 * le.damageTime, i({}, ne.HandR, new oe(re.create(14, 12.25)).rotate(.35 * Math.PI))), o(le.cooldownTime, i({}, ne.HandR, new oe(re.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(le.damageTime, "animMeleeCollision", {})]
                },
                cutReverse: {
                    keyframes: [o(0, i({}, ne.HandR, new oe(re.create(1, 17.75)))), o(.4 * le.damageTime, i({}, ne.HandR, new oe(re.create(25, 6.25)).rotate(.3 * Math.PI))), o(1 * le.damageTime, i({}, ne.HandR, new oe(re.create(25, 6.25)).rotate(.5 * -Math.PI))), o(le.cooldownTime, i({}, ne.HandR, new oe(re.create(1, 17.75))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(le.damageTime, "animMeleeCollision", {})]
                },
                thrust: {
                    keyframes: [o(0, i({}, ne.HandR, new oe(re.create(14, 12.25)))), o(.4 * le.damageTime, i({}, ne.HandR, new oe(re.create(5, 12.25)).rotate(.1 * Math.PI))), o(1 * le.damageTime, i({}, ne.HandR, new oe(re.create(25, 6.25)).rotate(0 * -Math.PI))), o(le.cooldownTime, i({}, ne.HandR, new oe(re.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(le.damageTime, "animMeleeCollision", {})]
                },
                slash: {
                    keyframes: [o(0, (x = {}, i(x, ne.HandL, new oe(re.create(18, -8.25))), i(x, ne.HandR, new oe(re.create(6, 20.25))), x)), o(le.damageTime, (f = {}, i(f, ne.HandL, new oe(re.create(6, -22.25))), i(f, ne.HandR, new oe(re.create(6, 20.25)).rotate(.6 * -Math.PI)), f)), o(le.cooldownTime, (b = {}, i(b, ne.HandL, new oe(re.create(18, -8.25))), i(b, ne.HandR, new oe(re.create(6, 20.25)).rotate(0)), b))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(le.damageTime, "animMeleeCollision", {})]
                },
                hook: {
                    keyframes: [o(0, i({}, ne.HandR, new oe(re.create(14, 12.25)))), o(.25 * ce.damageTime, i({}, ne.HandR, new oe(re.create(14, 12.25)).rotate(.1 * Math.PI))), o(.75 * ce.damageTime, i({}, ne.HandR, new oe(re.create(24, 1.75)))), o(.5 * ce.cooldownTime, i({}, ne.HandR, new oe(re.create(14, 12.25)).rotate(-.3 * Math.PI))), o(.5 * ce.cooldownTime, i({}, ne.HandR, new oe(re.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(ce.damageTime, "animMeleeCollision", {})]
                },
                pan: {
                    keyframes: [o(0, i({}, ne.HandR, new oe(re.create(14, 12.25)))), o(.15, i({}, ne.HandR, new oe(re.create(22, -8.25)).rotate(.2 * -Math.PI))), o(.1, i({}, ne.HandR, new oe(re.create(28, -8.25)).rotate(.5 * Math.PI))), o(.3, i({}, ne.HandR, new oe(re.create(14, 12.25))))],
                    effects: [n(0, "animPlaySound", {
                        sound: "swing"
                    }), n(te.items.pan.damageTime, "animMeleeCollision", {})]
                },
                axeSwing: {
                    keyframes: [o(0, (_ = {}, i(_, ne.HandL, new oe(re.create(10.5, -14.25))), i(_, ne.HandR, new oe(re.create(18, 6.25))), _)), o(.4 * me.damageTime, (S = {}, i(S, ne.HandL, new oe(re.create(9, -14.25)).rotate(.4 * Math.PI)), i(S, ne.HandR, new oe(re.create(18, 6.25)).rotate(.4 * Math.PI)), S)), o(.6 * me.damageTime, (k = {}, i(k, ne.HandL, new oe(re.create(9, -14.25)).rotate(.4 * -Math.PI)), i(k, ne.HandR, new oe(re.create(18, 6.25)).rotate(.4 * -Math.PI)), k)), o(me.cooldownTime, (v = {}, i(v, ne.HandL, new oe(re.create(10.5, -14.25))), i(v, ne.HandR, new oe(re.create(18, 6.25))), v))],
                    effects: [n(me.damageTime, "animPlaySound", {
                        sound: "swing"
                    }), n(me.damageTime, "animMeleeCollision", {})]
                },
                hammerSwing: {
                    keyframes: [o(0, (z = {}, i(z, ne.HandL, new oe(re.create(10.5, -14.25))), i(z, ne.HandR, new oe(re.create(18, 6.25))), z)), o(.4 * pe.damageTime, (M = {}, i(M, ne.HandL, new oe(re.create(9, -14.25)).rotate(.4 * Math.PI)), i(M, ne.HandR, new oe(re.create(18, 6.25)).rotate(.4 * Math.PI)), M)), o(.6 * pe.damageTime, (T = {}, i(T, ne.HandL, new oe(re.create(9, -14.25)).rotate(.4 * -Math.PI)), i(T, ne.HandR, new oe(re.create(18, 6.25)).rotate(.4 * -Math.PI)), T)), o(pe.cooldownTime, (P = {}, i(P, ne.HandL, new oe(re.create(10.5, -14.25))), i(P, ne.HandR, new oe(re.create(18, 6.25))), P))],
                    effects: [n(pe.damageTime, "animPlaySound", {
                        sound: "swing"
                    }), n(pe.damageTime, "animMeleeCollision", {})]
                },
                katanaSwing: {
                    keyframes: [o(0, (I = {}, i(I, ne.HandL, new oe(re.create(8.5, 13.25))), i(I, ne.HandR, new oe(re.create(-3, 17.75))), I)), o(.3 * de.damageTime, (C = {}, i(C, ne.HandL, new oe(re.create(8.5, 13.25)).rotate(.2 * Math.PI)), i(C, ne.HandR, new oe(re.create(-3, 17.75)).rotate(.2 * Math.PI)), C)), o(.6 * de.damageTime, (A = {}, i(A, ne.HandL, new oe(re.create(8.5, 13.25)).rotate(1.2 * -Math.PI)), i(A, ne.HandR, new oe(re.create(-3, 17.75)).rotate(1.2 * -Math.PI)), A)), o(de.cooldownTime, (E = {}, i(E, ne.HandL, new oe(re.create(8.5, 13.25))), i(E, ne.HandR, new oe(re.create(-3, 17.75))), E))],
                    effects: [n(de.damageTime, "animPlaySound", {
                        sound: "swing"
                    }), n(de.damageTime, "animMeleeCollision", {})]
                },
                naginataSwing: {
                    keyframes: [o(0, (D = {}, i(D, ne.HandL, new oe(re.create(19, -7.25))), i(D, ne.HandR, new oe(re.create(8.5, 24.25))), D)), o(.3 * he.damageTime, (O = {}, i(O, ne.HandL, new oe(re.create(19, -7.25)).rotate(.3 * Math.PI)), i(O, ne.HandR, new oe(re.create(8.5, 24.25)).rotate(.3 * Math.PI)), O)), o(.6 * he.damageTime, (B = {}, i(B, ne.HandL, new oe(re.create(19, -7.25)).rotate(.85 * -Math.PI)), i(B, ne.HandR, new oe(re.create(8.5, 24.25)).rotate(.85 * -Math.PI)), B)), o(he.cooldownTime, (L = {}, i(L, ne.HandL, new oe(re.create(19, -7.25))), i(L, ne.HandR, new oe(re.create(8.5, 24.25))), L))],
                    effects: [n(me.damageTime, "animPlaySound", {
                        sound: "swing"
                    }), n(me.damageTime, "animMeleeCollision", {})]
                },
                cook: {
                    keyframes: [o(0, (R = {}, i(R, ne.HandL, new oe(re.create(15.75, -9.625))), i(R, ne.HandR, new oe(re.create(15.75, 9.625))), R)), o(.1, (F = {}, i(F, ne.HandL, new oe(re.create(14, -1.75))), i(F, ne.HandR, new oe(re.create(14, 1.75))), F)), o(.2, (j = {}, i(j, ne.HandL, new oe(re.create(14, -1.75))), i(j, ne.HandR, new oe(re.create(14, 1.75))), j)), o(.1, (q = {}, i(q, ne.HandL, new oe(re.create(22.75, -1.75))), i(q, ne.HandR, new oe(re.create(1.75, 14))), q)), o(99999, (N = {}, i(N, ne.HandL, new oe(re.create(22.75, -1.75))), i(N, ne.HandR, new oe(re.create(1.75, 14))), N))],
                    effects: [n(0, "animPlaySound", {
                        sound: "pullPin"
                    }), n(.1, "animSetThrowableState", {
                        state: "cook"
                    })]
                },
                throw: {
                    keyframes: [o(0, (V = {}, i(V, ne.HandL, new oe(re.create(22.75, -1.75))), i(V, ne.HandR, new oe(re.create(1.75, 14.175))), V)), o(.15, (G = {}, i(G, ne.HandL, new oe(re.create(5.25, -15.75))), i(G, ne.HandR, new oe(re.create(29.75, 1.75))), G)), o(te.player.throwTime, (U = {}, i(U, ne.HandL, new oe(re.create(15.75, -9.625))), i(U, ne.HandR, new oe(re.create(15.75, 9.625))), U))],
                    effects: [n(0, "animPlaySound", {
                        sound: "throwing"
                    }), n(0, "animSetThrowableState", {
                        state: "throwing"
                    }), n(0, "animThrowableParticles", {})]
                },
                crawl_forward: {
                    keyframes: [o(te.player.crawlTime / 3, (H = {}, i(H, ne.HandL, new oe(re.create(19.25, -10.5))), i(H, ne.FootL, new oe(re.create(-20.25, -9))), H)), o(te.player.crawlTime / 3, (W = {}, i(W, ne.HandL, new oe(re.create(5.25, -15.75))), i(W, ne.FootL, new oe(re.create(-11.25, -9))), W)), o(te.player.crawlTime / 3, (K = {}, i(K, ne.HandL, new oe(re.create(14, -12.25))), i(K, ne.FootL, new oe(re.create(-15.75, -9))), K))],
                    effects: []
                },
                crawl_backward: {
                    keyframes: [o(te.player.crawlTime / 3, (Z = {}, i(Z, ne.HandL, new oe(re.create(5.25, -15.75))), i(Z, ne.FootL, new oe(re.create(-11.25, -9))), Z)), o(te.player.crawlTime / 3, (X = {}, i(X, ne.HandL, new oe(re.create(19.25, -10.5))), i(X, ne.FootL, new oe(re.create(-20.25, -9))), X)), o(te.player.crawlTime / 3, (Y = {}, i(Y, ne.HandL, new oe(re.create(14, -12.25))), i(Y, ne.FootL, new oe(re.create(-15.75, -9))), Y))],
                    effects: []
                },
                revive: {
                    keyframes: [o(0, (J = {}, i(J, ne.HandL, new oe(re.create(14, -12.25))), i(J, ne.HandR, new oe(re.create(14, 12.25))), J)), o(.2, (Q = {}, i(Q, ne.HandL, new oe(re.create(24.5, -8.75))), i(Q, ne.HandR, new oe(re.create(5.25, 21))), Q)), o(te.player.reviveDuration, ($ = {}, i($, ne.HandL, new oe(re.create(24.5, -8.75))), i($, ne.HandR, new oe(re.create(5.25, 21))), $))],
                    effects: []
                }
            };
        e.exports = {
            Pose: oe,
            Bones: ne,
            IdlePoses: se,
            Animations: ue
        }
    },
    "6d494b5c": function(e, t, a) {
        "use strict";

        function i(e, t, a, i, r, n) {
            var l = e;
            return !l.active || l.dead || !l.collidable || l.isWindow || l.height < i || !s.sameLayer(l.layer, r) ? null : n && 2 & r && 0 == l.layer ? null : o.intersectSegment(l.collider, t, a)
        }

        function r(e, t, a, i, r) {
            var o = p.intersectSegmentDist(e, t, a, i, 0, r, !1);
            return l.add(t, l.mul(a, o))
        }
        var o = a("6b42806d"),
            n = a("10899aea"),
            s = a("1901e2d9"),
            l = a("c2a798c8"),
            c = a("ce29f17f"),
            m = a("af8ba00f"),
            p = {
                intersectSegment: function(e, t, a, r, o, n, s) {
                    for (var c = l.add(t, l.mul(a, r)), m = [], p = 0; p < e.length; p++) {
                        var d = e[p],
                            h = i(d, t, c, o, n, s);
                        if (h) {
                            var u = l.length(l.sub(h.point, t));
                            m.push({
                                id: d.__id,
                                dist: u
                            })
                        }
                    }
                    return m.sort(function(e, t) {
                        return e.dist - t.dist
                    }), m.length > 0 ? m[0] : null
                },
                intersectSegmentDist: function(e, t, a, r, o, s, c) {
                    for (var m = r, p = l.add(t, l.mul(a, r)), d = 0; d < e.length; d++) {
                        var h = e[d],
                            u = i(h, t, p, o, s, c);
                        u && (m = n.min(m, l.length(l.sub(u.point, t))))
                    }
                    return m
                },
                scanCollider: function(e, t, a, i, s, d, h, u) {
                    var g = o.intersectCircle(e, a, h);
                    if (!g) return null;
                    if (g.pen >= h) return {
                        dist: 0
                    };
                    var y = l.perp(g.dir),
                        w = r(t, a, l.neg(y), .5 * d, i),
                        x = r(t, a, y, .5 * d, i),
                        f = l.sub(x, w),
                        b = l.length(f);
                    f = b > 1e-4 ? l.div(f, b) : l.create(1, 0);
                    for (var _ = [], S = 0; S < u; S++) {
                        var k = S / n.max(u - 1, 1);
                        _.push(l.add(w, l.mul(f, b * k)))
                    }
                    for (var v = s, z = 0; z < _.length; z++) {
                        var M = _[z],
                            T = o.intersectCircle(e, M, h);
                        if (T) {
                            var P = l.neg(T.dir),
                                I = p.intersectSegmentDist(t, M, P, h, v, i, !0),
                                C = o.intersectSegment(e, M, l.add(M, l.mul(P, h))),
                                A = C ? l.length(l.sub(C.point, M)) : 0,
                                E = C && A <= I;
                            if (c.debug) {
                                var D = E ? 65280 : 16711680;
                                m.addRay(M, P, h, D)
                            }
                            if (E) return {
                                dist: A
                            }
                        }
                    }
                    return null
                }
            };
        e.exports = p
    },
    "6d61bfc0": function(e, t, a) {
        "use strict";

        function i(e) {
            for (var t = 0, a = 0; a < e.length; a++) {
                var i = e[a];
                t = 65535 & (r[255 & (t ^ i)] ^ t >> 8)
            }
            return t
        }
        var r = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];
        e.exports = {
            crc16: i
        }
    },
    "6e13f3b7": function(e, t) {
        e.exports = {
            shared: [{
                meta: {
                    image: "shared-0-100-06ad4031.png",
                    size: {
                        w: 4096,
                        h: 4096
                    },
                    scale: 1
                },
                frames: {
                    "map-building-mansion-floor-01b.img": {
                        frame: {
                            x: 2118,
                            y: 2,
                            w: 1825,
                            h: 1218
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 1825,
                            h: 1218
                        },
                        sourceSize: {
                            w: 1826,
                            h: 1218
                        }
                    },
                    "map-building-police-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 2,
                            w: 2112,
                            h: 1568
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 2112,
                            h: 1568
                        },
                        sourceSize: {
                            w: 2112,
                            h: 1568
                        }
                    },
                    "map-building-barn-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 1574,
                            w: 1600,
                            h: 1088
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1600,
                            h: 1088
                        },
                        sourceSize: {
                            w: 1600,
                            h: 1088
                        }
                    },
                    "map-building-police-ceiling-02.img": {
                        frame: {
                            x: 1606,
                            y: 1574,
                            w: 530,
                            h: 1080
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 530,
                            h: 1080
                        },
                        sourceSize: {
                            w: 530,
                            h: 1082
                        }
                    },
                    "map-building-cabin-floor.img": {
                        frame: {
                            x: 2140,
                            y: 1574,
                            w: 1216,
                            h: 992
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1216,
                            h: 992
                        },
                        sourceSize: {
                            w: 1216,
                            h: 992
                        }
                    },
                    "map-bunker-crossing-compartment-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 2666,
                            w: 1503,
                            h: 928
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1503,
                            h: 928
                        },
                        sourceSize: {
                            w: 1504,
                            h: 928
                        }
                    },
                    "map-building-bank-ceiling-02.img": {
                        frame: {
                            x: 3360,
                            y: 1574,
                            w: 556,
                            h: 888
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 50,
                            w: 556,
                            h: 888
                        },
                        sourceSize: {
                            w: 556,
                            h: 940
                        }
                    },
                    "map-bunker-conch-compartment-floor-01a.img": {
                        frame: {
                            x: 1509,
                            y: 2666,
                            w: 940,
                            h: 880
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 52,
                            y: 0,
                            w: 940,
                            h: 880
                        },
                        sourceSize: {
                            w: 992,
                            h: 880
                        }
                    },
                    "map-bunker-storm-chamber-floor-01.img": {
                        frame: {
                            x: 2453,
                            y: 2666,
                            w: 1264,
                            h: 870
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 48,
                            w: 1264,
                            h: 870
                        },
                        sourceSize: {
                            w: 1280,
                            h: 928
                        }
                    },
                    "map-building-hut-floor-02.img": {
                        frame: {
                            x: 3721,
                            y: 2666,
                            w: 130,
                            h: 767
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 130,
                            h: 767
                        },
                        sourceSize: {
                            w: 136,
                            h: 768
                        }
                    },
                    "map-wall-18.img": {
                        frame: {
                            x: 3855,
                            y: 2666,
                            w: 32,
                            h: 576
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 576
                        },
                        sourceSize: {
                            w: 32,
                            h: 576
                        }
                    },
                    "map-bunker-crossing-compartment-ceiling-01b.img": {
                        frame: {
                            x: 2,
                            y: 3598,
                            w: 720,
                            h: 496
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 720,
                            h: 496
                        },
                        sourceSize: {
                            w: 720,
                            h: 496
                        }
                    },
                    "map-building-police-ceiling-01.img": {
                        frame: {
                            x: 726,
                            y: 3598,
                            w: 1008,
                            h: 480
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1008,
                            h: 480
                        },
                        sourceSize: {
                            w: 1008,
                            h: 480
                        }
                    },
                    "map-building-police-ceiling-03.img": {
                        frame: {
                            x: 1738,
                            y: 3598,
                            w: 504,
                            h: 480
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 504,
                            h: 480
                        },
                        sourceSize: {
                            w: 504,
                            h: 480
                        }
                    },
                    "map-building-bank-floor-02.img": {
                        frame: {
                            x: 2246,
                            y: 3598,
                            w: 864,
                            h: 448
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 864,
                            h: 448
                        },
                        sourceSize: {
                            w: 1088,
                            h: 448
                        }
                    },
                    "map-building-hut-floor-01.img": {
                        frame: {
                            x: 3114,
                            y: 3598,
                            w: 448,
                            h: 448
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 32,
                            y: 32,
                            w: 448,
                            h: 448
                        },
                        sourceSize: {
                            w: 512,
                            h: 512
                        }
                    },
                    "map-wall-14.img": {
                        frame: {
                            x: 3891,
                            y: 2666,
                            w: 32,
                            h: 448
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 448
                        },
                        sourceSize: {
                            w: 32,
                            h: 448
                        }
                    },
                    "map-wall-14-rounded.img": {
                        frame: {
                            x: 3566,
                            y: 3598,
                            w: 32,
                            h: 448
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 448
                        },
                        sourceSize: {
                            w: 32,
                            h: 448
                        }
                    },
                    "map-wall-13-rounded.img": {
                        frame: {
                            x: 3602,
                            y: 3598,
                            w: 32,
                            h: 416
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 416
                        },
                        sourceSize: {
                            w: 32,
                            h: 416
                        }
                    },
                    "map-wall-13.img": {
                        frame: {
                            x: 3638,
                            y: 3598,
                            w: 32,
                            h: 416
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 416
                        },
                        sourceSize: {
                            w: 32,
                            h: 416
                        }
                    },
                    "map-wall-glass-12-2.img": {
                        frame: {
                            x: 3674,
                            y: 3598,
                            w: 64,
                            h: 384
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 384
                        },
                        sourceSize: {
                            w: 64,
                            h: 384
                        }
                    },
                    "map-wall-glass-12.img": {
                        frame: {
                            x: 3742,
                            y: 3598,
                            w: 32,
                            h: 384
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 384
                        },
                        sourceSize: {
                            w: 32,
                            h: 384
                        }
                    },
                    "map-wall-12.img": {
                        frame: {
                            x: 3778,
                            y: 3598,
                            w: 32,
                            h: 384
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 384
                        },
                        sourceSize: {
                            w: 32,
                            h: 384
                        }
                    },
                    "map-wall-12-rounded.img": {
                        frame: {
                            x: 3814,
                            y: 3598,
                            w: 32,
                            h: 384
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 384
                        },
                        sourceSize: {
                            w: 32,
                            h: 384
                        }
                    },
                    "map-pipes-04.img": {
                        frame: {
                            x: 3850,
                            y: 3598,
                            w: 88,
                            h: 352
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 88,
                            h: 352
                        },
                        sourceSize: {
                            w: 88,
                            h: 352
                        }
                    },
                    "map-wall-11.img": {
                        frame: {
                            x: 3947,
                            y: 2,
                            w: 32,
                            h: 352
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 352
                        },
                        sourceSize: {
                            w: 32,
                            h: 352
                        }
                    },
                    "map-wall-11-rounded.img": {
                        frame: {
                            x: 3947,
                            y: 358,
                            w: 32,
                            h: 352
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 352
                        },
                        sourceSize: {
                            w: 32,
                            h: 352
                        }
                    },
                    "map-building-vault-ceiling.img": {
                        frame: {
                            x: 2118,
                            y: 1224,
                            w: 321,
                            h: 337
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 321,
                            h: 337
                        },
                        sourceSize: {
                            w: 432,
                            h: 337
                        }
                    },
                    "map-saloon-bar-01.img": {
                        frame: {
                            x: 2443,
                            y: 1224,
                            w: 54,
                            h: 324
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 54,
                            h: 324
                        },
                        sourceSize: {
                            w: 54,
                            h: 324
                        }
                    },
                    "map-building-shack-floor-01.img": {
                        frame: {
                            x: 2501,
                            y: 1224,
                            w: 381,
                            h: 320
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 19,
                            y: 20,
                            w: 381,
                            h: 320
                        },
                        sourceSize: {
                            w: 420,
                            h: 340
                        }
                    },
                    "map-bunker-crossing-floor-01.img": {
                        frame: {
                            x: 2886,
                            y: 1224,
                            w: 320,
                            h: 320
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 320,
                            h: 320
                        },
                        sourceSize: {
                            w: 320,
                            h: 320
                        }
                    },
                    "map-building-shack-floor-02.img": {
                        frame: {
                            x: 3210,
                            y: 1224,
                            w: 320,
                            h: 320
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 320,
                            h: 320
                        },
                        sourceSize: {
                            w: 320,
                            h: 320
                        }
                    },
                    "map-wall-glass-10.img": {
                        frame: {
                            x: 3947,
                            y: 714,
                            w: 32,
                            h: 320
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 320
                        },
                        sourceSize: {
                            w: 32,
                            h: 320
                        }
                    },
                    "map-wall-10-rounded.img": {
                        frame: {
                            x: 3947,
                            y: 1038,
                            w: 32,
                            h: 320
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 320
                        },
                        sourceSize: {
                            w: 32,
                            h: 320
                        }
                    },
                    "map-wall-10.img": {
                        frame: {
                            x: 3947,
                            y: 1362,
                            w: 32,
                            h: 320
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 320
                        },
                        sourceSize: {
                            w: 32,
                            h: 320
                        }
                    },
                    "map-building-outhouse-floor.img": {
                        frame: {
                            x: 3534,
                            y: 1224,
                            w: 240,
                            h: 308
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 80,
                            y: 4,
                            w: 240,
                            h: 308
                        },
                        sourceSize: {
                            w: 400,
                            h: 316
                        }
                    },
                    "map-bunker-crossing-compartment-ceiling-01a.img": {
                        frame: {
                            x: 3778,
                            y: 1224,
                            w: 128,
                            h: 304
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 304
                        },
                        sourceSize: {
                            w: 128,
                            h: 304
                        }
                    },
                    "map-pipes-01.img": {
                        frame: {
                            x: 3983,
                            y: 2,
                            w: 90,
                            h: 288
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 90,
                            h: 288
                        },
                        sourceSize: {
                            w: 90,
                            h: 288
                        }
                    },
                    "map-wall-09-rounded.img": {
                        frame: {
                            x: 3983,
                            y: 294,
                            w: 32,
                            h: 288
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 288
                        },
                        sourceSize: {
                            w: 32,
                            h: 288
                        }
                    },
                    "map-wall-09.img": {
                        frame: {
                            x: 4019,
                            y: 294,
                            w: 32,
                            h: 288
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 288
                        },
                        sourceSize: {
                            w: 32,
                            h: 288
                        }
                    },
                    "part-shell-05.img": {
                        frame: {
                            x: 3983,
                            y: 586,
                            w: 63,
                            h: 260
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 63,
                            h: 260
                        },
                        sourceSize: {
                            w: 63,
                            h: 260
                        }
                    },
                    "map-wall-08-rounded.img": {
                        frame: {
                            x: 3983,
                            y: 850,
                            w: 32,
                            h: 256
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 256
                        },
                        sourceSize: {
                            w: 32,
                            h: 256
                        }
                    },
                    "map-wall-shack-right.img": {
                        frame: {
                            x: 4019,
                            y: 850,
                            w: 24,
                            h: 241
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 24,
                            h: 241
                        },
                        sourceSize: {
                            w: 24,
                            h: 242
                        }
                    },
                    "gun-awc-01.img": {
                        frame: {
                            x: 3983,
                            y: 1110,
                            w: 60,
                            h: 236
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 60,
                            h: 236
                        },
                        sourceSize: {
                            w: 60,
                            h: 236
                        }
                    },
                    "gun-awc-02.img": {
                        frame: {
                            x: 3983,
                            y: 1350,
                            w: 60,
                            h: 236
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 60,
                            h: 236
                        },
                        sourceSize: {
                            w: 60,
                            h: 236
                        }
                    },
                    "gun-pkp-top-01.img": {
                        frame: {
                            x: 3983,
                            y: 1590,
                            w: 56,
                            h: 232
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 56,
                            h: 232
                        },
                        sourceSize: {
                            w: 56,
                            h: 232
                        }
                    },
                    "gun-usas-01.img": {
                        frame: {
                            x: 3983,
                            y: 1826,
                            w: 56,
                            h: 232
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 56,
                            h: 232
                        },
                        sourceSize: {
                            w: 56,
                            h: 232
                        }
                    },
                    "gun-ots38-01.img": {
                        frame: {
                            x: 3983,
                            y: 2062,
                            w: 56,
                            h: 232
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 56,
                            h: 232
                        },
                        sourceSize: {
                            w: 56,
                            h: 232
                        }
                    },
                    "gun-m249-top-01.img": {
                        frame: {
                            x: 3983,
                            y: 2298,
                            w: 56,
                            h: 232
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 56,
                            h: 232
                        },
                        sourceSize: {
                            w: 56,
                            h: 232
                        }
                    },
                    "gun-garand-01.img": {
                        frame: {
                            x: 3983,
                            y: 2534,
                            w: 48,
                            h: 232
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 48,
                            h: 232
                        },
                        sourceSize: {
                            w: 48,
                            h: 232
                        }
                    },
                    "map-door-02.img": {
                        frame: {
                            x: 3983,
                            y: 2770,
                            w: 80,
                            h: 224
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 80,
                            h: 224
                        },
                        sourceSize: {
                            w: 80,
                            h: 224
                        }
                    },
                    "map-wall-07.img": {
                        frame: {
                            x: 4035,
                            y: 2534,
                            w: 32,
                            h: 224
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 224
                        },
                        sourceSize: {
                            w: 32,
                            h: 224
                        }
                    },
                    "map-wall-07-rounded.img": {
                        frame: {
                            x: 3983,
                            y: 2998,
                            w: 32,
                            h: 224
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 224
                        },
                        sourceSize: {
                            w: 32,
                            h: 224
                        }
                    },
                    "map-wall-shack-left.img": {
                        frame: {
                            x: 4047,
                            y: 850,
                            w: 24,
                            h: 222
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 24,
                            h: 222
                        },
                        sourceSize: {
                            w: 24,
                            h: 222
                        }
                    },
                    "gun-scorpion-01.img": {
                        frame: {
                            x: 4019,
                            y: 2998,
                            w: 48,
                            h: 208
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 48,
                            h: 208
                        },
                        sourceSize: {
                            w: 48,
                            h: 208
                        }
                    },
                    "map-wall-outhouse-side.img": {
                        frame: {
                            x: 4047,
                            y: 1110,
                            w: 24,
                            h: 198
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 24,
                            h: 198
                        },
                        sourceSize: {
                            w: 24,
                            h: 198
                        }
                    },
                    "gun-m4a1-01.img": {
                        frame: {
                            x: 3983,
                            y: 3226,
                            w: 48,
                            h: 196
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 48,
                            h: 196
                        },
                        sourceSize: {
                            w: 48,
                            h: 196
                        }
                    },
                    "map-pipes-05.img": {
                        frame: {
                            x: 3983,
                            y: 3426,
                            w: 90,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 90,
                            h: 192
                        },
                        sourceSize: {
                            w: 90,
                            h: 192
                        }
                    },
                    "map-wall-06-rounded.img": {
                        frame: {
                            x: 4035,
                            y: 3226,
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
                    "map-wall-06.img": {
                        frame: {
                            x: 3983,
                            y: 3622,
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
                    "part-shell-02.img": {
                        frame: {
                            x: 3983,
                            y: 3818,
                            w: 63,
                            h: 190
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 63,
                            h: 190
                        },
                        sourceSize: {
                            w: 63,
                            h: 190
                        }
                    },
                    "gun-long-01.img": {
                        frame: {
                            x: 4019,
                            y: 3622,
                            w: 32,
                            h: 188
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 188
                        },
                        sourceSize: {
                            w: 32,
                            h: 188
                        }
                    },
                    "part-shell-03.img": {
                        frame: {
                            x: 3855,
                            y: 3246,
                            w: 63,
                            h: 180
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 63,
                            h: 180
                        },
                        sourceSize: {
                            w: 63,
                            h: 180
                        }
                    },
                    "map-wall-05-rounded.img": {
                        frame: {
                            x: 3947,
                            y: 1686,
                            w: 32,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 160
                        },
                        sourceSize: {
                            w: 32,
                            h: 160
                        }
                    },
                    "map-wall-05.img": {
                        frame: {
                            x: 3947,
                            y: 1850,
                            w: 32,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 160
                        },
                        sourceSize: {
                            w: 32,
                            h: 160
                        }
                    },
                    "map-wall-04.img": {
                        frame: {
                            x: 3947,
                            y: 2014,
                            w: 32,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 128
                        },
                        sourceSize: {
                            w: 32,
                            h: 128
                        }
                    },
                    "map-wall-04-rounded.img": {
                        frame: {
                            x: 3947,
                            y: 2146,
                            w: 32,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 128
                        },
                        sourceSize: {
                            w: 32,
                            h: 128
                        }
                    },
                    "map-wall-outhouse-bot.img": {
                        frame: {
                            x: 3391,
                            y: 3550,
                            w: 72,
                            h: 24
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 72,
                            h: 24
                        },
                        sourceSize: {
                            w: 72,
                            h: 24
                        }
                    },
                    "map-door-05.img": {
                        frame: {
                            x: 4047,
                            y: 1350,
                            w: 24,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 24,
                            h: 128
                        },
                        sourceSize: {
                            w: 24,
                            h: 128
                        }
                    },
                    "map-door-01.img": {
                        frame: {
                            x: 4043,
                            y: 1590,
                            w: 24,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 24,
                            h: 128
                        },
                        sourceSize: {
                            w: 24,
                            h: 128
                        }
                    },
                    "map-door-03.img": {
                        frame: {
                            x: 3947,
                            y: 2410,
                            w: 32,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 112
                        },
                        sourceSize: {
                            w: 32,
                            h: 112
                        }
                    },
                    "map-building-house-window-res-01.img": {
                        frame: {
                            x: 3947,
                            y: 2526,
                            w: 32,
                            h: 104
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 104
                        },
                        sourceSize: {
                            w: 32,
                            h: 104
                        }
                    },
                    "map-building-house-window-01.img": {
                        frame: {
                            x: 3947,
                            y: 2634,
                            w: 32,
                            h: 104
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 104
                        },
                        sourceSize: {
                            w: 32,
                            h: 104
                        }
                    },
                    "ping-map-airstrike.img": {
                        frame: {
                            x: 3891,
                            y: 3118,
                            w: 44,
                            h: 103
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 42,
                            y: 13,
                            w: 44,
                            h: 103
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "map-crate-06.img": {
                        frame: {
                            x: 3360,
                            y: 2466,
                            w: 164,
                            h: 100
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 164,
                            h: 100
                        },
                        sourceSize: {
                            w: 164,
                            h: 100
                        }
                    },
                    "trunk.img": {
                        frame: {
                            x: 3528,
                            y: 2466,
                            w: 106,
                            h: 100
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 11,
                            y: 14,
                            w: 106,
                            h: 100
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "crab.img": {
                        frame: {
                            x: 3638,
                            y: 2466,
                            w: 100,
                            h: 100
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 14,
                            y: 14,
                            w: 100,
                            h: 100
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "gun-short-01.img": {
                        frame: {
                            x: 3947,
                            y: 2742,
                            w: 32,
                            h: 100
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 100
                        },
                        sourceSize: {
                            w: 32,
                            h: 100
                        }
                    },
                    "dab-face.img": {
                        frame: {
                            x: 3742,
                            y: 2466,
                            w: 144,
                            h: 98
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 23,
                            w: 144,
                            h: 98
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "forest.img": {
                        frame: {
                            x: 3721,
                            y: 3437,
                            w: 120,
                            h: 98
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 15,
                            w: 120,
                            h: 98
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "baguette.img": {
                        frame: {
                            x: 3845,
                            y: 3437,
                            w: 98,
                            h: 98
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 15,
                            y: 15,
                            w: 98,
                            h: 98
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "map-wall-03-rounded.img": {
                        frame: {
                            x: 3947,
                            y: 2846,
                            w: 32,
                            h: 96
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 96
                        },
                        sourceSize: {
                            w: 32,
                            h: 96
                        }
                    },
                    "map-wall-03.img": {
                        frame: {
                            x: 3947,
                            y: 2946,
                            w: 32,
                            h: 96
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 96
                        },
                        sourceSize: {
                            w: 32,
                            h: 96
                        }
                    },
                    "ping-map-woods-king.img": {
                        frame: {
                            x: 2140,
                            y: 2570,
                            w: 92,
                            h: 84
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 18,
                            y: 22,
                            w: 92,
                            h: 84
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-throwable-snowball.img": {
                        frame: {
                            x: 2236,
                            y: 2570,
                            w: 84,
                            h: 84
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 22,
                            y: 22,
                            w: 84,
                            h: 84
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "cog.img": {
                        frame: {
                            x: 2324,
                            y: 2570,
                            w: 83,
                            h: 84
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 22,
                            y: 22,
                            w: 83,
                            h: 84
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "map-bunker-vent-01.img": {
                        frame: {
                            x: 2411,
                            y: 2570,
                            w: 82,
                            h: 84
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 82,
                            h: 84
                        },
                        sourceSize: {
                            w: 84,
                            h: 84
                        }
                    },
                    "eye.img": {
                        frame: {
                            x: 2497,
                            y: 2570,
                            w: 126,
                            h: 82
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 23,
                            w: 126,
                            h: 82
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "chicken.img": {
                        frame: {
                            x: 2627,
                            y: 2570,
                            w: 106,
                            h: 82
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 11,
                            y: 23,
                            w: 106,
                            h: 82
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "map-vending-res.img": {
                        frame: {
                            x: 2737,
                            y: 2570,
                            w: 93,
                            h: 82
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 5,
                            w: 93,
                            h: 82
                        },
                        sourceSize: {
                            w: 108,
                            h: 94
                        }
                    },
                    "audio-off.img": {
                        frame: {
                            x: 2834,
                            y: 2570,
                            w: 92,
                            h: 80
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 18,
                            y: 24,
                            w: 92,
                            h: 80
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "audio-on.img": {
                        frame: {
                            x: 2930,
                            y: 2570,
                            w: 92,
                            h: 80
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 18,
                            y: 24,
                            w: 92,
                            h: 80
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "map-pot-res-01.img": {
                        frame: {
                            x: 3983,
                            y: 4012,
                            w: 80,
                            h: 80
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 32,
                            y: 32,
                            w: 80,
                            h: 80
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "gun-dp28-top-01.img": {
                        frame: {
                            x: 3026,
                            y: 2570,
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
                    "loot-weapon-fists.img": {
                        frame: {
                            x: 3110,
                            y: 2570,
                            w: 74,
                            h: 78
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 27,
                            y: 25,
                            w: 74,
                            h: 78
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-helmet-02.img": {
                        frame: {
                            x: 3188,
                            y: 2570,
                            w: 118,
                            h: 76
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 26,
                            w: 118,
                            h: 76
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "proj-mirv-mini-01.img": {
                        frame: {
                            x: 3310,
                            y: 2570,
                            w: 84,
                            h: 76
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 10,
                            w: 84,
                            h: 76
                        },
                        sourceSize: {
                            w: 96,
                            h: 96
                        }
                    },
                    "map-piano-01.img": {
                        frame: {
                            x: 3398,
                            y: 2570,
                            w: 240,
                            h: 75
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 240,
                            h: 75
                        },
                        sourceSize: {
                            w: 240,
                            h: 75
                        }
                    },
                    "map-deposit-box-02.img": {
                        frame: {
                            x: 3642,
                            y: 2570,
                            w: 160,
                            h: 74
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 160,
                            h: 74
                        },
                        sourceSize: {
                            w: 160,
                            h: 74
                        }
                    },
                    "gg.img": {
                        frame: {
                            x: 3806,
                            y: 2570,
                            w: 114,
                            h: 72
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 7,
                            y: 28,
                            w: 114,
                            h: 72
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "unlock.img": {
                        frame: {
                            x: 3890,
                            y: 2466,
                            w: 48,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 0,
                            w: 48,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "map-wall-02.img": {
                        frame: {
                            x: 3947,
                            y: 3046,
                            w: 32,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 64
                        },
                        sourceSize: {
                            w: 32,
                            h: 64
                        }
                    },
                    "map-wall-02-rounded.img": {
                        frame: {
                            x: 3947,
                            y: 3114,
                            w: 32,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 64
                        },
                        sourceSize: {
                            w: 32,
                            h: 64
                        }
                    },
                    "map-gun-mount-02.img": {
                        frame: {
                            x: 1509,
                            y: 3550,
                            w: 128,
                            h: 44
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 44
                        },
                        sourceSize: {
                            w: 128,
                            h: 56
                        }
                    },
                    "map-gun-mount-03.img": {
                        frame: {
                            x: 1641,
                            y: 3550,
                            w: 128,
                            h: 44
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 44
                        },
                        sourceSize: {
                            w: 128,
                            h: 56
                        }
                    },
                    "gun-m249-bot-01.img": {
                        frame: {
                            x: 1773,
                            y: 3550,
                            w: 76,
                            h: 44
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 76,
                            h: 44
                        },
                        sourceSize: {
                            w: 76,
                            h: 44
                        }
                    },
                    "gun-pkp-bot-01.img": {
                        frame: {
                            x: 1853,
                            y: 3550,
                            w: 76,
                            h: 44
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 76,
                            h: 44
                        },
                        sourceSize: {
                            w: 76,
                            h: 44
                        }
                    },
                    "ping-part-eighth-highlight.img": {
                        frame: {
                            x: 1933,
                            y: 3550,
                            w: 51,
                            h: 43
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 20,
                            w: 51,
                            h: 43
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-part-eighth.img": {
                        frame: {
                            x: 1988,
                            y: 3550,
                            w: 51,
                            h: 43
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 20,
                            w: 51,
                            h: 43
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "map-building-bank-window-res-01.img": {
                        frame: {
                            x: 2043,
                            y: 3550,
                            w: 44,
                            h: 43
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 46,
                            y: 55,
                            w: 44,
                            h: 43
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "pumpkin-play.img": {
                        frame: {
                            x: 2091,
                            y: 3550,
                            w: 40,
                            h: 43
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 1,
                            w: 40,
                            h: 43
                        },
                        sourceSize: {
                            w: 48,
                            h: 48
                        }
                    },
                    "part-frag-lever-01.img": {
                        frame: {
                            x: 2135,
                            y: 3550,
                            w: 48,
                            h: 40
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 40,
                            y: 44,
                            w: 48,
                            h: 40
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "hatchet.img": {
                        frame: {
                            x: 2187,
                            y: 3550,
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
                    "player-feet-01.img": {
                        frame: {
                            x: 2235,
                            y: 3550,
                            w: 38,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 38,
                            h: 38
                        },
                        sourceSize: {
                            w: 38,
                            h: 38
                        }
                    },
                    "player-hands-01.img": {
                        frame: {
                            x: 2277,
                            y: 3550,
                            w: 38,
                            h: 38
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 38,
                            h: 38
                        },
                        sourceSize: {
                            w: 38,
                            h: 38
                        }
                    },
                    "map-barrel-04.img": {
                        frame: {
                            x: 2319,
                            y: 3550,
                            w: 89,
                            h: 35
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 89,
                            h: 35
                        },
                        sourceSize: {
                            w: 89,
                            h: 35
                        }
                    },
                    "map-barrel-03.img": {
                        frame: {
                            x: 2412,
                            y: 3550,
                            w: 89,
                            h: 35
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 89,
                            h: 35
                        },
                        sourceSize: {
                            w: 89,
                            h: 35
                        }
                    },
                    "map-switch-01.img": {
                        frame: {
                            x: 4043,
                            y: 1722,
                            w: 30,
                            h: 34
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 30,
                            h: 34
                        },
                        sourceSize: {
                            w: 30,
                            h: 34
                        }
                    },
                    "gun-qbb97-bot-01.img": {
                        frame: {
                            x: 2505,
                            y: 3550,
                            w: 64,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 64,
                            h: 32
                        },
                        sourceSize: {
                            w: 64,
                            h: 32
                        }
                    },
                    "map-bottle-03.img": {
                        frame: {
                            x: 3947,
                            y: 3182,
                            w: 32,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 32
                        },
                        sourceSize: {
                            w: 32,
                            h: 32
                        }
                    },
                    "map-bottle-01.img": {
                        frame: {
                            x: 3947,
                            y: 3218,
                            w: 32,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 32
                        },
                        sourceSize: {
                            w: 32,
                            h: 32
                        }
                    },
                    "dot.img": {
                        frame: {
                            x: 3947,
                            y: 3254,
                            w: 32,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 32,
                            h: 32
                        },
                        sourceSize: {
                            w: 36,
                            h: 36
                        }
                    },
                    "map-bottle-02.img": {
                        frame: {
                            x: 3947,
                            y: 3290,
                            w: 32,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 32
                        },
                        sourceSize: {
                            w: 32,
                            h: 32
                        }
                    },
                    "map-wall-01-rounded.img": {
                        frame: {
                            x: 3947,
                            y: 3326,
                            w: 32,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 32
                        },
                        sourceSize: {
                            w: 32,
                            h: 32
                        }
                    },
                    "map-switch-02.img": {
                        frame: {
                            x: 4043,
                            y: 1760,
                            w: 30,
                            h: 32
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 30,
                            h: 32
                        },
                        sourceSize: {
                            w: 30,
                            h: 34
                        }
                    },
                    "ping-part-circle-auto-highlight.img": {
                        frame: {
                            x: 4043,
                            y: 1826,
                            w: 29,
                            h: 29
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 29,
                            h: 29
                        },
                        sourceSize: {
                            w: 29,
                            h: 29
                        }
                    },
                    "ping-part-circle.img": {
                        frame: {
                            x: 4043,
                            y: 1859,
                            w: 28,
                            h: 28
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 50,
                            y: 50,
                            w: 28,
                            h: 28
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-part-circle-auto.img": {
                        frame: {
                            x: 4043,
                            y: 1891,
                            w: 28,
                            h: 28
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 28,
                            h: 28
                        },
                        sourceSize: {
                            w: 28,
                            h: 28
                        }
                    },
                    "ping-part-circle-highlight.img": {
                        frame: {
                            x: 4043,
                            y: 1923,
                            w: 28,
                            h: 28
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 50,
                            y: 50,
                            w: 28,
                            h: 28
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-part-circle-auto-outer.img": {
                        frame: {
                            x: 4043,
                            y: 1796,
                            w: 28,
                            h: 26
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 28,
                            h: 26
                        },
                        sourceSize: {
                            w: 28,
                            h: 28
                        }
                    },
                    "map-wall-shack-top.img": {
                        frame: {
                            x: 2573,
                            y: 3550,
                            w: 360,
                            h: 24
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 360,
                            h: 24
                        },
                        sourceSize: {
                            w: 360,
                            h: 24
                        }
                    },
                    "map-wall-shack-bot.img": {
                        frame: {
                            x: 2937,
                            y: 3550,
                            w: 242,
                            h: 24
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 242,
                            h: 24
                        },
                        sourceSize: {
                            w: 242,
                            h: 24
                        }
                    },
                    "map-wall-outhouse-top.img": {
                        frame: {
                            x: 3183,
                            y: 3550,
                            w: 204,
                            h: 24
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 204,
                            h: 24
                        },
                        sourceSize: {
                            w: 204,
                            h: 24
                        }
                    },
                    "gun-med-01.img": {
                        frame: {
                            x: 3947,
                            y: 2278,
                            w: 32,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 32,
                            h: 128
                        },
                        sourceSize: {
                            w: 32,
                            h: 128
                        }
                    }
                }
            }, {
                meta: {
                    image: "shared-1-100-029c2f67.png",
                    size: {
                        w: 4096,
                        h: 4096
                    },
                    scale: 1
                },
                frames: {
                    "map-building-house-floor-02.img": {
                        frame: {
                            x: 966,
                            y: 2,
                            w: 960,
                            h: 864
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 960,
                            h: 864
                        },
                        sourceSize: {
                            w: 960,
                            h: 864
                        }
                    },
                    "map-building-house-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 2,
                            w: 960,
                            h: 864
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 960,
                            h: 864
                        },
                        sourceSize: {
                            w: 960,
                            h: 864
                        }
                    },
                    "map-building-bank-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 870,
                            w: 1696,
                            h: 802
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1696,
                            h: 802
                        },
                        sourceSize: {
                            w: 1696,
                            h: 802
                        }
                    },
                    "map-building-mansion-cellar-01a.img": {
                        frame: {
                            x: 1930,
                            y: 2,
                            w: 865,
                            h: 801
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 865,
                            h: 801
                        },
                        sourceSize: {
                            w: 866,
                            h: 802
                        }
                    },
                    "map-building-warehouse-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 1676,
                            w: 1e3,
                            h: 800
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1e3,
                            h: 800
                        },
                        sourceSize: {
                            w: 1e3,
                            h: 800
                        }
                    },
                    "map-building-mansion-ceiling.img": {
                        frame: {
                            x: 1006,
                            y: 1676,
                            w: 912,
                            h: 800
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 32,
                            w: 912,
                            h: 800
                        },
                        sourceSize: {
                            w: 1024,
                            h: 864
                        }
                    },
                    "map-building-warehouse-floor-02.img": {
                        frame: {
                            x: 2799,
                            y: 2,
                            w: 880,
                            h: 800
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 880,
                            h: 800
                        },
                        sourceSize: {
                            w: 880,
                            h: 800
                        }
                    },
                    "map-building-bridge-lg-floor.img": {
                        frame: {
                            x: 2,
                            y: 2480,
                            w: 2016,
                            h: 704
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 160,
                            y: 256,
                            w: 2016,
                            h: 704
                        },
                        sourceSize: {
                            w: 2336,
                            h: 1216
                        }
                    },
                    "map-bunker-egg-chamber-floor-01a.img": {
                        frame: {
                            x: 2799,
                            y: 806,
                            w: 722,
                            h: 697
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 13,
                            y: 0,
                            w: 722,
                            h: 697
                        },
                        sourceSize: {
                            w: 738,
                            h: 706
                        }
                    },
                    "map-building-container-open-floor.img": {
                        frame: {
                            x: 2799,
                            y: 1507,
                            w: 180,
                            h: 684
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 180,
                            h: 684
                        },
                        sourceSize: {
                            w: 180,
                            h: 692
                        }
                    },
                    "map-building-vault-floor.img": {
                        frame: {
                            x: 2983,
                            y: 1507,
                            w: 641,
                            h: 674
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 641,
                            h: 674
                        },
                        sourceSize: {
                            w: 865,
                            h: 674
                        }
                    },
                    "map-building-dock-floor-01b.img": {
                        frame: {
                            x: 1930,
                            y: 807,
                            w: 162,
                            h: 662
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 162,
                            h: 662
                        },
                        sourceSize: {
                            w: 162,
                            h: 664
                        }
                    },
                    "map-building-house-ceiling.img": {
                        frame: {
                            x: 1922,
                            y: 1676,
                            w: 720,
                            h: 648
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 720,
                            h: 648
                        },
                        sourceSize: {
                            w: 720,
                            h: 648
                        }
                    },
                    "map-building-police-floor-02.img": {
                        frame: {
                            x: 2096,
                            y: 807,
                            w: 609,
                            h: 640
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 65,
                            w: 609,
                            h: 640
                        },
                        sourceSize: {
                            w: 610,
                            h: 1570
                        }
                    },
                    "map-building-barn-ceiling-01.img": {
                        frame: {
                            x: 2022,
                            y: 2480,
                            w: 1200,
                            h: 624
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1200,
                            h: 624
                        },
                        sourceSize: {
                            w: 1200,
                            h: 624
                        }
                    },
                    "map-building-teahouse-ceiling-01.img": {
                        frame: {
                            x: 2,
                            y: 3188,
                            w: 934,
                            h: 608
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 9,
                            y: 16,
                            w: 934,
                            h: 608
                        },
                        sourceSize: {
                            w: 960,
                            h: 640
                        }
                    },
                    "map-bunker-crossing-compartment-floor-02.img": {
                        frame: {
                            x: 3226,
                            y: 2480,
                            w: 317,
                            h: 608
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 0,
                            w: 317,
                            h: 608
                        },
                        sourceSize: {
                            w: 320,
                            h: 608
                        }
                    },
                    "map-building-cabin-ceiling-01a.img": {
                        frame: {
                            x: 940,
                            y: 3188,
                            w: 912,
                            h: 576
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 912,
                            h: 576
                        },
                        sourceSize: {
                            w: 912,
                            h: 576
                        }
                    },
                    "map-building-teahouse-floor-01.img": {
                        frame: {
                            x: 1856,
                            y: 3188,
                            w: 896,
                            h: 576
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 896,
                            h: 576
                        },
                        sourceSize: {
                            w: 896,
                            h: 576
                        }
                    },
                    "map-bunker-conch-compartment-ceiling-01.img": {
                        frame: {
                            x: 2756,
                            y: 3188,
                            w: 488,
                            h: 560
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 488,
                            h: 560
                        },
                        sourceSize: {
                            w: 488,
                            h: 560
                        }
                    },
                    "map-building-container-floor-01.img": {
                        frame: {
                            x: 1702,
                            y: 870,
                            w: 180,
                            h: 531
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 180,
                            h: 531
                        },
                        sourceSize: {
                            w: 180,
                            h: 536
                        }
                    },
                    "map-bunker-conch-compartment-floor-01b.img": {
                        frame: {
                            x: 3248,
                            y: 3188,
                            w: 400,
                            h: 428
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 400,
                            h: 428
                        },
                        sourceSize: {
                            w: 400,
                            h: 448
                        }
                    },
                    "map-building-hut-ceiling-02.img": {
                        frame: {
                            x: 3683,
                            y: 2,
                            w: 378,
                            h: 393
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 15,
                            y: 15,
                            w: 378,
                            h: 393
                        },
                        sourceSize: {
                            w: 408,
                            h: 408
                        }
                    },
                    "map-building-hut-ceiling-01.img": {
                        frame: {
                            x: 3683,
                            y: 399,
                            w: 378,
                            h: 393
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 15,
                            y: 15,
                            w: 378,
                            h: 393
                        },
                        sourceSize: {
                            w: 408,
                            h: 408
                        }
                    },
                    "map-building-panicroom-ceiling.img": {
                        frame: {
                            x: 3683,
                            y: 796,
                            w: 288,
                            h: 384
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 288,
                            h: 384
                        },
                        sourceSize: {
                            w: 288,
                            h: 384
                        }
                    },
                    "map-building-panicroom-floor.img": {
                        frame: {
                            x: 3683,
                            y: 1184,
                            w: 288,
                            h: 384
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 288,
                            h: 384
                        },
                        sourceSize: {
                            w: 288,
                            h: 384
                        }
                    },
                    "map-bunker-storm-floor-02.img": {
                        frame: {
                            x: 3683,
                            y: 1572,
                            w: 320,
                            h: 380
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 320,
                            h: 380
                        },
                        sourceSize: {
                            w: 320,
                            h: 384
                        }
                    },
                    "map-building-container-open-ceiling-01.img": {
                        frame: {
                            x: 3683,
                            y: 1956,
                            w: 180,
                            h: 380
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 156,
                            w: 180,
                            h: 380
                        },
                        sourceSize: {
                            w: 180,
                            h: 692
                        }
                    },
                    "map-building-container-ceiling-02.img": {
                        frame: {
                            x: 3867,
                            y: 1956,
                            w: 180,
                            h: 380
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 180,
                            h: 380
                        },
                        sourceSize: {
                            w: 180,
                            h: 536
                        }
                    },
                    "map-building-container-ceiling-03.img": {
                        frame: {
                            x: 3683,
                            y: 2340,
                            w: 180,
                            h: 380
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 180,
                            h: 380
                        },
                        sourceSize: {
                            w: 180,
                            h: 536
                        }
                    },
                    "map-building-container-ceiling-05.img": {
                        frame: {
                            x: 3867,
                            y: 2340,
                            w: 180,
                            h: 380
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 180,
                            h: 380
                        },
                        sourceSize: {
                            w: 180,
                            h: 536
                        }
                    },
                    "map-building-container-ceiling-01.img": {
                        frame: {
                            x: 3683,
                            y: 2724,
                            w: 180,
                            h: 380
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 180,
                            h: 380
                        },
                        sourceSize: {
                            w: 180,
                            h: 536
                        }
                    },
                    "map-building-bank-ceiling-03.img": {
                        frame: {
                            x: 3683,
                            y: 3108,
                            w: 216,
                            h: 360
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 192,
                            w: 216,
                            h: 360
                        },
                        sourceSize: {
                            w: 216,
                            h: 552
                        }
                    },
                    "map-bunker-egg-chamber-ceiling-01.img": {
                        frame: {
                            x: 3683,
                            y: 3472,
                            w: 320,
                            h: 304
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 144,
                            w: 320,
                            h: 304
                        },
                        sourceSize: {
                            w: 320,
                            h: 448
                        }
                    },
                    "map-building-shack-ceiling-03.img": {
                        frame: {
                            x: 2,
                            y: 3800,
                            w: 408,
                            h: 288
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 24,
                            y: 0,
                            w: 408,
                            h: 288
                        },
                        sourceSize: {
                            w: 432,
                            h: 336
                        }
                    },
                    "map-bunker-generic-floor-01.img": {
                        frame: {
                            x: 2799,
                            y: 2195,
                            w: 295,
                            h: 281
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 0,
                            w: 295,
                            h: 281
                        },
                        sourceSize: {
                            w: 320,
                            h: 288
                        }
                    },
                    "map-bunker-generic-floor-02.img": {
                        frame: {
                            x: 3098,
                            y: 2195,
                            w: 295,
                            h: 281
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 0,
                            w: 295,
                            h: 281
                        },
                        sourceSize: {
                            w: 320,
                            h: 288
                        }
                    },
                    "map-stone-03.img": {
                        frame: {
                            x: 3397,
                            y: 2195,
                            w: 276,
                            h: 272
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 8,
                            w: 276,
                            h: 272
                        },
                        sourceSize: {
                            w: 288,
                            h: 288
                        }
                    },
                    "map-bush-04.img": {
                        frame: {
                            x: 414,
                            y: 3800,
                            w: 272,
                            h: 260
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 14,
                            y: 20,
                            w: 272,
                            h: 260
                        },
                        sourceSize: {
                            w: 300,
                            h: 300
                        }
                    },
                    "map-tree-03.img": {
                        frame: {
                            x: 690,
                            y: 3800,
                            w: 256,
                            h: 256
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 256,
                            h: 256
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "map-tree-07s.img": {
                        frame: {
                            x: 950,
                            y: 3800,
                            w: 256,
                            h: 256
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 256,
                            h: 256
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "part-smoke-03.img": {
                        frame: {
                            x: 1210,
                            y: 3800,
                            w: 256,
                            h: 256
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 256,
                            h: 256
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "part-smoke-02.img": {
                        frame: {
                            x: 1470,
                            y: 3800,
                            w: 256,
                            h: 256
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 256,
                            h: 256
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "emote-circle-outer.img": {
                        frame: {
                            x: 1730,
                            y: 3800,
                            w: 252,
                            h: 254
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 1,
                            w: 252,
                            h: 254
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "map-bunker-crossing-chamber-floor-02.img": {
                        frame: {
                            x: 1986,
                            y: 3800,
                            w: 704,
                            h: 252
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 32,
                            y: 320,
                            w: 704,
                            h: 252
                        },
                        sourceSize: {
                            w: 736,
                            h: 576
                        }
                    },
                    "map-bunker-conch-floor-01.img": {
                        frame: {
                            x: 2694,
                            y: 3800,
                            w: 580,
                            h: 252
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 10,
                            y: 2,
                            w: 580,
                            h: 252
                        },
                        sourceSize: {
                            w: 600,
                            h: 256
                        }
                    },
                    "map-bunker-crossing-chamber-floor-03.img": {
                        frame: {
                            x: 3278,
                            y: 3800,
                            w: 704,
                            h: 248
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 32,
                            y: 324,
                            w: 704,
                            h: 248
                        },
                        sourceSize: {
                            w: 736,
                            h: 576
                        }
                    },
                    "map-bunker-crossing-ceiling-01.img": {
                        frame: {
                            x: 3867,
                            y: 2724,
                            w: 192,
                            h: 230
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 64,
                            y: 0,
                            w: 192,
                            h: 230
                        },
                        sourceSize: {
                            w: 320,
                            h: 288
                        }
                    },
                    "map-bunker-generic-ceiling-01.img": {
                        frame: {
                            x: 1702,
                            y: 1405,
                            w: 192,
                            h: 230
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 64,
                            y: 0,
                            w: 192,
                            h: 230
                        },
                        sourceSize: {
                            w: 320,
                            h: 288
                        }
                    },
                    "map-bed-01.img": {
                        frame: {
                            x: 3903,
                            y: 3108,
                            w: 96,
                            h: 216
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 96,
                            h: 216
                        },
                        sourceSize: {
                            w: 96,
                            h: 216
                        }
                    },
                    "map-bunker-conch-chamber-ceiling-01.img": {
                        frame: {
                            x: 1930,
                            y: 1473,
                            w: 496,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 496,
                            h: 192
                        },
                        sourceSize: {
                            w: 496,
                            h: 192
                        }
                    },
                    "map-building-crossing-bathroom-ceiling.img": {
                        frame: {
                            x: 2430,
                            y: 1473,
                            w: 288,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 288,
                            h: 192
                        },
                        sourceSize: {
                            w: 288,
                            h: 192
                        }
                    },
                    "gun-saiga-01.img": {
                        frame: {
                            x: 3975,
                            y: 796,
                            w: 40,
                            h: 174
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 6,
                            w: 40,
                            h: 174
                        },
                        sourceSize: {
                            w: 48,
                            h: 196
                        }
                    },
                    "part-shell-04.img": {
                        frame: {
                            x: 3975,
                            y: 974,
                            w: 55,
                            h: 164
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 55,
                            h: 164
                        },
                        sourceSize: {
                            w: 55,
                            h: 164
                        }
                    },
                    "map-wall-04-stone.img": {
                        frame: {
                            x: 4019,
                            y: 796,
                            w: 40,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 40,
                            h: 160
                        },
                        sourceSize: {
                            w: 40,
                            h: 160
                        }
                    },
                    "part-airdrop-02.img": {
                        frame: {
                            x: 3975,
                            y: 1184,
                            w: 38,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 38,
                            h: 160
                        },
                        sourceSize: {
                            w: 38,
                            h: 160
                        }
                    },
                    "part-airdrop-02x.img": {
                        frame: {
                            x: 4017,
                            y: 1184,
                            w: 38,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 38,
                            h: 160
                        },
                        sourceSize: {
                            w: 38,
                            h: 160
                        }
                    },
                    "map-bed-res-02.img": {
                        frame: {
                            x: 3525,
                            y: 806,
                            w: 89,
                            h: 158
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 16,
                            w: 89,
                            h: 158
                        },
                        sourceSize: {
                            w: 96,
                            h: 192
                        }
                    },
                    "map-bed-res-01.img": {
                        frame: {
                            x: 3525,
                            y: 968,
                            w: 89,
                            h: 158
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 16,
                            w: 89,
                            h: 158
                        },
                        sourceSize: {
                            w: 96,
                            h: 192
                        }
                    },
                    "proj-bomb-iron-01.img": {
                        frame: {
                            x: 3975,
                            y: 1348,
                            w: 66,
                            h: 157
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 47,
                            y: 2,
                            w: 66,
                            h: 157
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "proj-smoke-nopin.img": {
                        frame: {
                            x: 3525,
                            y: 1130,
                            w: 152,
                            h: 155
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 3,
                            w: 152,
                            h: 155
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "map-tree-res-01.img": {
                        frame: {
                            x: 3628,
                            y: 1749,
                            w: 46,
                            h: 46
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 46,
                            h: 46
                        },
                        sourceSize: {
                            w: 48,
                            h: 48
                        }
                    },
                    "map-crate-11.img": {
                        frame: {
                            x: 2646,
                            y: 1676,
                            w: 148,
                            h: 148
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 148,
                            h: 148
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "player-armor-base-01.img": {
                        frame: {
                            x: 2646,
                            y: 1828,
                            w: 148,
                            h: 148
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 148,
                            h: 148
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "loot-circle-inner-01.img": {
                        frame: {
                            x: 2646,
                            y: 1980,
                            w: 148,
                            h: 148
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 148,
                            h: 148
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "player-circle-base-01.img": {
                        frame: {
                            x: 2646,
                            y: 2132,
                            w: 148,
                            h: 148
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 148,
                            h: 148
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "map-crate-10.img": {
                        frame: {
                            x: 1922,
                            y: 2328,
                            w: 148,
                            h: 148
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 148,
                            h: 148
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "map-sandbags-01.img": {
                        frame: {
                            x: 2074,
                            y: 2328,
                            w: 256,
                            h: 146
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 256,
                            h: 146
                        },
                        sourceSize: {
                            w: 256,
                            h: 148
                        }
                    },
                    "map-sandbags-02.img": {
                        frame: {
                            x: 3867,
                            y: 2958,
                            w: 113,
                            h: 146
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 18,
                            y: 1,
                            w: 113,
                            h: 146
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "proj-smoke-nopin-nolever.img": {
                        frame: {
                            x: 3984,
                            y: 2958,
                            w: 76,
                            h: 146
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 42,
                            y: 7,
                            w: 76,
                            h: 146
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "map-building-barn-ceiling-02.img": {
                        frame: {
                            x: 2334,
                            y: 2328,
                            w: 416,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 416,
                            h: 144
                        },
                        sourceSize: {
                            w: 416,
                            h: 144
                        }
                    },
                    "proj-mirv-pin.img": {
                        frame: {
                            x: 3547,
                            y: 2480,
                            w: 102,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 102,
                            h: 144
                        },
                        sourceSize: {
                            w: 128,
                            h: 148
                        }
                    },
                    "proj-mirv-nopin.img": {
                        frame: {
                            x: 3547,
                            y: 2628,
                            w: 102,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 26,
                            y: 2,
                            w: 102,
                            h: 144
                        },
                        sourceSize: {
                            w: 128,
                            h: 148
                        }
                    },
                    "proj-mirv-nopin-nolever.img": {
                        frame: {
                            x: 2709,
                            y: 807,
                            w: 76,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 26,
                            y: 2,
                            w: 76,
                            h: 144
                        },
                        sourceSize: {
                            w: 128,
                            h: 148
                        }
                    },
                    "part-woodchip-01.img": {
                        frame: {
                            x: 3903,
                            y: 3328,
                            w: 141,
                            h: 140
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 1,
                            w: 141,
                            h: 140
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "part-book-01.img": {
                        frame: {
                            x: 3547,
                            y: 2776,
                            w: 104,
                            h: 138
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 20,
                            y: 3,
                            w: 104,
                            h: 138
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "part-pot-01.img": {
                        frame: {
                            x: 3547,
                            y: 2918,
                            w: 94,
                            h: 136
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 25,
                            y: 4,
                            w: 94,
                            h: 136
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-door-slot-02.img": {
                        frame: {
                            x: 4007,
                            y: 1572,
                            w: 38,
                            h: 136
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 38,
                            h: 136
                        },
                        sourceSize: {
                            w: 38,
                            h: 136
                        }
                    },
                    "map-door-slot-01.img": {
                        frame: {
                            x: 4007,
                            y: 1712,
                            w: 38,
                            h: 134
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 38,
                            h: 134
                        },
                        sourceSize: {
                            w: 38,
                            h: 134
                        }
                    },
                    "part-shell-01.img": {
                        frame: {
                            x: 4003,
                            y: 3108,
                            w: 56,
                            h: 133
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 56,
                            h: 133
                        },
                        sourceSize: {
                            w: 56,
                            h: 133
                        }
                    },
                    "map-stone-res-06.img": {
                        frame: {
                            x: 3248,
                            y: 3620,
                            w: 288,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 288,
                            h: 128
                        },
                        sourceSize: {
                            w: 288,
                            h: 128
                        }
                    },
                    "spain.img": {
                        frame: {
                            x: 3540,
                            y: 3620,
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
                    "part-airdrop-04.img": {
                        frame: {
                            x: 4007,
                            y: 3472,
                            w: 54,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 54,
                            h: 128
                        },
                        sourceSize: {
                            w: 54,
                            h: 128
                        }
                    },
                    "map-door-04.img": {
                        frame: {
                            x: 4007,
                            y: 3604,
                            w: 54,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 54,
                            h: 128
                        },
                        sourceSize: {
                            w: 54,
                            h: 128
                        }
                    },
                    "gun-mp220-01.img": {
                        frame: {
                            x: 3618,
                            y: 806,
                            w: 40,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 40,
                            h: 128
                        },
                        sourceSize: {
                            w: 40,
                            h: 128
                        }
                    },
                    "ping-map-danger.img": {
                        frame: {
                            x: 3618,
                            y: 968,
                            w: 40,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 44,
                            y: 0,
                            w: 40,
                            h: 128
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "bullets.img": {
                        frame: {
                            x: 2709,
                            y: 955,
                            w: 86,
                            h: 124
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 21,
                            y: 2,
                            w: 86,
                            h: 124
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-throwable-smoke.img": {
                        frame: {
                            x: 2709,
                            y: 1083,
                            w: 84,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 22,
                            y: 3,
                            w: 84,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ice-cream.img": {
                        frame: {
                            x: 2709,
                            y: 1209,
                            w: 66,
                            h: 122
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 31,
                            y: 3,
                            w: 66,
                            h: 122
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-throwable-mirv.img": {
                        frame: {
                            x: 2709,
                            y: 1335,
                            w: 82,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 23,
                            y: 8,
                            w: 82,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "pineapple.img": {
                        frame: {
                            x: 2722,
                            y: 1473,
                            w: 68,
                            h: 112
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 30,
                            y: 1,
                            w: 68,
                            h: 112
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "loot-medical-soda.img": {
                        frame: {
                            x: 3986,
                            y: 3800,
                            w: 60,
                            h: 110
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 34,
                            y: 9,
                            w: 60,
                            h: 110
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "ping-map-airdrop.img": {
                        frame: {
                            x: 3986,
                            y: 3914,
                            w: 74,
                            h: 106
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 27,
                            y: 10,
                            w: 74,
                            h: 106
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "map-saloon-bar-02.img": {
                        frame: {
                            x: 4007,
                            y: 1850,
                            w: 54,
                            h: 92
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 54,
                            h: 92
                        },
                        sourceSize: {
                            w: 54,
                            h: 92
                        }
                    },
                    "map-deposit-box-01.img": {
                        frame: {
                            x: 2022,
                            y: 3108,
                            w: 160,
                            h: 74
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 160,
                            h: 74
                        },
                        sourceSize: {
                            w: 160,
                            h: 74
                        }
                    },
                    "map-building-cabin-ceiling-01b.img": {
                        frame: {
                            x: 2186,
                            y: 3108,
                            w: 148,
                            h: 74
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 148,
                            h: 74
                        },
                        sourceSize: {
                            w: 148,
                            h: 76
                        }
                    },
                    "cursor-01.img": {
                        frame: {
                            x: 2722,
                            y: 1589,
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
                    "player-map-inner.img": {
                        frame: {
                            x: 2338,
                            y: 3108,
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
                    "player-map-outer.img": {
                        frame: {
                            x: 2414,
                            y: 3108,
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
                    "timer-background.img": {
                        frame: {
                            x: 2490,
                            y: 3108,
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
                    "part-smoke-01.img": {
                        frame: {
                            x: 2566,
                            y: 3108,
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
                    "cursor-03.img": {
                        frame: {
                            x: 2642,
                            y: 3108,
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
                    "map-power-box-01.img": {
                        frame: {
                            x: 2718,
                            y: 3108,
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
                    "quit.img": {
                        frame: {
                            x: 2794,
                            y: 3108,
                            w: 68,
                            h: 72
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 30,
                            y: 28,
                            w: 68,
                            h: 72
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "player-patch-red.img": {
                        frame: {
                            x: 2866,
                            y: 3108,
                            w: 116,
                            h: 70
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 22,
                            y: 45,
                            w: 116,
                            h: 70
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    },
                    "part-cloth-01.img": {
                        frame: {
                            x: 2986,
                            y: 3108,
                            w: 70,
                            h: 70
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 70,
                            h: 70
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "ping-indicator.img": {
                        frame: {
                            x: 3060,
                            y: 3108,
                            w: 88,
                            h: 68
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 20,
                            y: 60,
                            w: 88,
                            h: 68
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "part-snow-01.img": {
                        frame: {
                            x: 3152,
                            y: 3108,
                            w: 68,
                            h: 68
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 68,
                            h: 68
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "close.img": {
                        frame: {
                            x: 3224,
                            y: 3108,
                            w: 68,
                            h: 68
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 2,
                            w: 68,
                            h: 68
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "submit.img": {
                        frame: {
                            x: 3296,
                            y: 3108,
                            w: 66,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 66,
                            h: 66
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "checked.img": {
                        frame: {
                            x: 3366,
                            y: 3108,
                            w: 66,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 3,
                            w: 66,
                            h: 66
                        },
                        sourceSize: {
                            w: 72,
                            h: 72
                        }
                    },
                    "resume.img": {
                        frame: {
                            x: 3436,
                            y: 3108,
                            w: 64,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 36,
                            y: 31,
                            w: 64,
                            h: 66
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "map-potato-res.img": {
                        frame: {
                            x: 4003,
                            y: 3245,
                            w: 56,
                            h: 66
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 20,
                            y: 15,
                            w: 56,
                            h: 66
                        },
                        sourceSize: {
                            w: 96,
                            h: 96
                        }
                    },
                    "map-fire-ext-01.img": {
                        frame: {
                            x: 3504,
                            y: 3108,
                            w: 83,
                            h: 65
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 83,
                            h: 65
                        },
                        sourceSize: {
                            w: 84,
                            h: 70
                        }
                    },
                    "map-column-01.img": {
                        frame: {
                            x: 3591,
                            y: 3108,
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
                    "lock.img": {
                        frame: {
                            x: 3628,
                            y: 1507,
                            w: 48,
                            h: 64
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 0,
                            w: 48,
                            h: 64
                        },
                        sourceSize: {
                            w: 64,
                            h: 64
                        }
                    },
                    "proj-frag-pin-part.img": {
                        frame: {
                            x: 3975,
                            y: 1509,
                            w: 58,
                            h: 58
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 35,
                            y: 35,
                            w: 58,
                            h: 58
                        },
                        sourceSize: {
                            w: 128,
                            h: 128
                        }
                    },
                    "skull-team.img": {
                        frame: {
                            x: 3628,
                            y: 1575,
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
                    "map-fire-ext-res.img": {
                        frame: {
                            x: 3628,
                            y: 1635,
                            w: 46,
                            h: 56
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 36,
                            y: 8,
                            w: 46,
                            h: 56
                        },
                        sourceSize: {
                            w: 84,
                            h: 70
                        }
                    },
                    "map-gun-mount-04.img": {
                        frame: {
                            x: 3525,
                            y: 1448,
                            w: 128,
                            h: 55
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 128,
                            h: 55
                        },
                        sourceSize: {
                            w: 128,
                            h: 56
                        }
                    },
                    "map-candle-01.img": {
                        frame: {
                            x: 3628,
                            y: 1695,
                            w: 50,
                            h: 50
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 50,
                            h: 50
                        },
                        sourceSize: {
                            w: 52,
                            h: 52
                        }
                    },
                    "proj-smoke-pin.img": {
                        frame: {
                            x: 3525,
                            y: 1289,
                            w: 152,
                            h: 155
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 3,
                            w: 152,
                            h: 155
                        },
                        sourceSize: {
                            w: 160,
                            h: 160
                        }
                    }
                }
            }, {
                meta: {
                    image: "shared-2-100-010154a5.png",
                    size: {
                        w: 4096,
                        h: 4096
                    },
                    scale: 1
                },
                frames: {
                    "map-building-bridge-lg-ceiling.img": {
                        frame: {
                            x: 511,
                            y: 2,
                            w: 1088,
                            h: 544
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 16,
                            w: 1088,
                            h: 544
                        },
                        sourceSize: {
                            w: 1088,
                            h: 576
                        }
                    },
                    "map-building-bank-ceiling-01.img": {
                        frame: {
                            x: 2,
                            y: 2,
                            w: 505,
                            h: 552
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 48,
                            w: 505,
                            h: 552
                        },
                        sourceSize: {
                            w: 505,
                            h: 600
                        }
                    },
                    "map-bunker-crossing-chamber-floor-01.img": {
                        frame: {
                            x: 1603,
                            y: 2,
                            w: 1826,
                            h: 542
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1826,
                            h: 542
                        },
                        sourceSize: {
                            w: 1828,
                            h: 544
                        }
                    },
                    "map-tree-08f.img": {
                        frame: {
                            x: 2,
                            y: 558,
                            w: 512,
                            h: 510
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 512,
                            h: 510
                        },
                        sourceSize: {
                            w: 512,
                            h: 512
                        }
                    },
                    "map-tree-08s.img": {
                        frame: {
                            x: 518,
                            y: 558,
                            w: 512,
                            h: 510
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 512,
                            h: 510
                        },
                        sourceSize: {
                            w: 512,
                            h: 512
                        }
                    },
                    "map-silo-01.img": {
                        frame: {
                            x: 1034,
                            y: 558,
                            w: 504,
                            h: 502
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 5,
                            w: 504,
                            h: 502
                        },
                        sourceSize: {
                            w: 512,
                            h: 512
                        }
                    },
                    "ping-map-pulse.img": {
                        frame: {
                            x: 1542,
                            y: 558,
                            w: 502,
                            h: 502
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 5,
                            y: 5,
                            w: 502,
                            h: 502
                        },
                        sourceSize: {
                            w: 512,
                            h: 512
                        }
                    },
                    "map-building-warehouse-ceiling-01.img": {
                        frame: {
                            x: 2048,
                            y: 558,
                            w: 832,
                            h: 432
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 832,
                            h: 432
                        },
                        sourceSize: {
                            w: 832,
                            h: 432
                        }
                    },
                    "map-building-warehouse-ceiling-02.img": {
                        frame: {
                            x: 2,
                            y: 1072,
                            w: 720,
                            h: 432
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 720,
                            h: 432
                        },
                        sourceSize: {
                            w: 720,
                            h: 432
                        }
                    },
                    "map-building-shack-floor-03.img": {
                        frame: {
                            x: 726,
                            y: 1072,
                            w: 568,
                            h: 408
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 0,
                            w: 568,
                            h: 408
                        },
                        sourceSize: {
                            w: 576,
                            h: 448
                        }
                    },
                    "map-bunker-conch-chamber-floor-02.img": {
                        frame: {
                            x: 1298,
                            y: 1072,
                            w: 1239,
                            h: 406
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 29,
                            w: 1239,
                            h: 406
                        },
                        sourceSize: {
                            w: 1306,
                            h: 464
                        }
                    },
                    "map-bunker-conch-chamber-floor-01.img": {
                        frame: {
                            x: 2,
                            y: 1508,
                            w: 1391,
                            h: 378
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 45,
                            y: 45,
                            w: 1391,
                            h: 378
                        },
                        sourceSize: {
                            w: 1520,
                            h: 432
                        }
                    },
                    "map-building-bridge-md-floor.img": {
                        frame: {
                            x: 1397,
                            y: 1508,
                            w: 896,
                            h: 368
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 896,
                            h: 368
                        },
                        sourceSize: {
                            w: 896,
                            h: 368
                        }
                    },
                    "map-building-mansion-floor-01a.img": {
                        frame: {
                            x: 2541,
                            y: 1072,
                            w: 802,
                            h: 317
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 5,
                            w: 802,
                            h: 317
                        },
                        sourceSize: {
                            w: 802,
                            h: 322
                        }
                    },
                    "map-bunker-storm-chamber-ceiling-01.img": {
                        frame: {
                            x: 2297,
                            y: 1508,
                            w: 592,
                            h: 304
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 112,
                            w: 592,
                            h: 304
                        },
                        sourceSize: {
                            w: 592,
                            h: 416
                        }
                    },
                    "map-bunker-crossing-chamber-ceiling-01.img": {
                        frame: {
                            x: 2,
                            y: 1890,
                            w: 1136,
                            h: 240
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 1136,
                            h: 240
                        },
                        sourceSize: {
                            w: 1136,
                            h: 240
                        }
                    },
                    "map-pipes-03.img": {
                        frame: {
                            x: 1142,
                            y: 1890,
                            w: 684,
                            h: 236
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 684,
                            h: 236
                        },
                        sourceSize: {
                            w: 684,
                            h: 236
                        }
                    },
                    "map-hut-res-01.img": {
                        frame: {
                            x: 2884,
                            y: 558,
                            w: 236,
                            h: 236
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 130,
                            y: 136,
                            w: 236,
                            h: 236
                        },
                        sourceSize: {
                            w: 512,
                            h: 512
                        }
                    },
                    "map-chute-01.img": {
                        frame: {
                            x: 3124,
                            y: 558,
                            w: 232,
                            h: 232
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 12,
                            y: 12,
                            w: 232,
                            h: 232
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "map-building-mansion-cellar-01b.img": {
                        frame: {
                            x: 2893,
                            y: 1508,
                            w: 225,
                            h: 230
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 225,
                            h: 230
                        },
                        sourceSize: {
                            w: 226,
                            h: 230
                        }
                    },
                    "map-building-mansion-floor-01c.img": {
                        frame: {
                            x: 3122,
                            y: 1508,
                            w: 225,
                            h: 228
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 225,
                            h: 228
                        },
                        sourceSize: {
                            w: 226,
                            h: 228
                        }
                    },
                    "map-building-saferoom-floor.img": {
                        frame: {
                            x: 1830,
                            y: 1890,
                            w: 352,
                            h: 224
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 352,
                            h: 224
                        },
                        sourceSize: {
                            w: 352,
                            h: 224
                        }
                    },
                    "map-building-saferoom-ceiling.img": {
                        frame: {
                            x: 2186,
                            y: 1890,
                            w: 352,
                            h: 224
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 352,
                            h: 224
                        },
                        sourceSize: {
                            w: 352,
                            h: 224
                        }
                    },
                    "map-building-outhouse-ceiling.img": {
                        frame: {
                            x: 2542,
                            y: 1890,
                            w: 272,
                            h: 224
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 64,
                            y: 0,
                            w: 272,
                            h: 224
                        },
                        sourceSize: {
                            w: 400,
                            h: 316
                        }
                    },
                    "map-bed-02.img": {
                        frame: {
                            x: 2818,
                            y: 1890,
                            w: 176,
                            h: 216
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 176,
                            h: 216
                        },
                        sourceSize: {
                            w: 176,
                            h: 216
                        }
                    },
                    "map-building-teahouse-res-01.img": {
                        frame: {
                            x: 2998,
                            y: 1890,
                            w: 282,
                            h: 208
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 115,
                            y: 152,
                            w: 282,
                            h: 208
                        },
                        sourceSize: {
                            w: 512,
                            h: 512
                        }
                    },
                    "pad.img": {
                        frame: {
                            x: 2,
                            y: 2134,
                            w: 208,
                            h: 208
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 208,
                            h: 208
                        },
                        sourceSize: {
                            w: 208,
                            h: 208
                        }
                    },
                    "map-building-shack-ceiling-01.img": {
                        frame: {
                            x: 214,
                            y: 2134,
                            w: 315,
                            h: 207
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 315,
                            h: 207
                        },
                        sourceSize: {
                            w: 315,
                            h: 255
                        }
                    },
                    "map-vat-02.img": {
                        frame: {
                            x: 533,
                            y: 2134,
                            w: 200,
                            h: 200
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 200,
                            h: 200
                        },
                        sourceSize: {
                            w: 200,
                            h: 200
                        }
                    },
                    "map-stone-res-02.img": {
                        frame: {
                            x: 737,
                            y: 2134,
                            w: 200,
                            h: 200
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 200,
                            h: 200
                        },
                        sourceSize: {
                            w: 200,
                            h: 200
                        }
                    },
                    "map-building-shack-ceiling-02.img": {
                        frame: {
                            x: 2884,
                            y: 798,
                            w: 240,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 240,
                            h: 192
                        },
                        sourceSize: {
                            w: 240,
                            h: 240
                        }
                    },
                    "map-hedgehog-01.img": {
                        frame: {
                            x: 3128,
                            y: 798,
                            w: 192,
                            h: 192
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 192
                        },
                        sourceSize: {
                            w: 192,
                            h: 192
                        }
                    },
                    "map-building-mansion-floor-01d.img": {
                        frame: {
                            x: 941,
                            y: 2134,
                            w: 1089,
                            h: 186
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 0,
                            w: 1089,
                            h: 186
                        },
                        sourceSize: {
                            w: 1090,
                            h: 194
                        }
                    },
                    "map-shack-res-01.img": {
                        frame: {
                            x: 2034,
                            y: 2134,
                            w: 305,
                            h: 181
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 60,
                            y: 49,
                            w: 305,
                            h: 181
                        },
                        sourceSize: {
                            w: 420,
                            h: 340
                        }
                    },
                    "map-bunker-conch-ceiling-01.img": {
                        frame: {
                            x: 2343,
                            y: 2134,
                            w: 380,
                            h: 180
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 380,
                            h: 180
                        },
                        sourceSize: {
                            w: 380,
                            h: 180
                        }
                    },
                    "map-bunker-egg-chamber-floor-01b.img": {
                        frame: {
                            x: 2727,
                            y: 2134,
                            w: 192,
                            h: 179
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 192,
                            h: 179
                        },
                        sourceSize: {
                            w: 194,
                            h: 180
                        }
                    },
                    "map-bunker-conch-chamber-ceiling-02.img": {
                        frame: {
                            x: 2923,
                            y: 2134,
                            w: 488,
                            h: 176
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 488,
                            h: 176
                        },
                        sourceSize: {
                            w: 488,
                            h: 176
                        }
                    },
                    "map-shack-res-03.img": {
                        frame: {
                            x: 2,
                            y: 2346,
                            w: 220,
                            h: 176
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 100,
                            y: 69,
                            w: 220,
                            h: 176
                        },
                        sourceSize: {
                            w: 420,
                            h: 340
                        }
                    },
                    "map-shack-res-02.img": {
                        frame: {
                            x: 226,
                            y: 2346,
                            w: 220,
                            h: 176
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 100,
                            y: 69,
                            w: 220,
                            h: 176
                        },
                        sourceSize: {
                            w: 420,
                            h: 340
                        }
                    },
                    "map-smoke-res.img": {
                        frame: {
                            x: 450,
                            y: 2346,
                            w: 166,
                            h: 174
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 49,
                            y: 41,
                            w: 166,
                            h: 174
                        },
                        sourceSize: {
                            w: 256,
                            h: 256
                        }
                    },
                    "map-pipes-02.img": {
                        frame: {
                            x: 620,
                            y: 2346,
                            w: 236,
                            h: 172
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 236,
                            h: 172
                        },
                        sourceSize: {
                            w: 238,
                            h: 172
                        }
                    },
                    "player-wading-01.img": {
                        frame: {
                            x: 860,
                            y: 2346,
                            w: 172,
                            h: 172
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 172,
                            h: 172
                        },
                        sourceSize: {
                            w: 172,
                            h: 172
                        }
                    },
                    "map-snow-07.img": {
                        frame: {
                            x: 1036,
                            y: 2346,
                            w: 496,
                            h: 168
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 12,
                            w: 496,
                            h: 168
                        },
                        sourceSize: {
                            w: 512,
                            h: 192
                        }
                    },
                    "map-crate-04.img": {
                        frame: {
                            x: 1536,
                            y: 2346,
                            w: 164,
                            h: 164
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 164,
                            h: 164
                        },
                        sourceSize: {
                            w: 164,
                            h: 164
                        }
                    },
                    "map-stove-01.img": {
                        frame: {
                            x: 1704,
                            y: 2346,
                            w: 208,
                            h: 161
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 8,
                            w: 208,
                            h: 161
                        },
                        sourceSize: {
                            w: 224,
                            h: 176
                        }
                    },
                    "map-table-02.img": {
                        frame: {
                            x: 1916,
                            y: 2346,
                            w: 288,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 288,
                            h: 160
                        },
                        sourceSize: {
                            w: 288,
                            h: 160
                        }
                    },
                    "map-airdrop-02.img": {
                        frame: {
                            x: 2208,
                            y: 2346,
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
                    "map-airdrop-01.img": {
                        frame: {
                            x: 2372,
                            y: 2346,
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
                    "map-building-dock-floor-01a.img": {
                        frame: {
                            x: 2536,
                            y: 2346,
                            w: 160,
                            h: 160
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 2,
                            w: 160,
                            h: 160
                        },
                        sourceSize: {
                            w: 160,
                            h: 162
                        }
                    },
                    "part-airdrop-03.img": {
                        frame: {
                            x: 2700,
                            y: 2346,
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
                    "map-table-03.img": {
                        frame: {
                            x: 2864,
                            y: 2346,
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
                    "map-wheel-01.img": {
                        frame: {
                            x: 3028,
                            y: 2346,
                            w: 312,
                            h: 156
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 312,
                            h: 156
                        },
                        sourceSize: {
                            w: 312,
                            h: 156
                        }
                    },
                    "map-crate-res-03.img": {
                        frame: {
                            x: 2,
                            y: 2526,
                            w: 216,
                            h: 154
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 1,
                            w: 216,
                            h: 154
                        },
                        sourceSize: {
                            w: 216,
                            h: 156
                        }
                    },
                    "map-wheel-03.img": {
                        frame: {
                            x: 222,
                            y: 2526,
                            w: 312,
                            h: 149
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 312,
                            h: 149
                        },
                        sourceSize: {
                            w: 312,
                            h: 156
                        }
                    },
                    "map-wheel-02.img": {
                        frame: {
                            x: 538,
                            y: 2526,
                            w: 297,
                            h: 149
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 0,
                            w: 297,
                            h: 149
                        },
                        sourceSize: {
                            w: 312,
                            h: 156
                        }
                    },
                    "map-crate-01.img": {
                        frame: {
                            x: 3284,
                            y: 1890,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-crate-08.img": {
                        frame: {
                            x: 839,
                            y: 2526,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "loot-circle-outer-01.img": {
                        frame: {
                            x: 987,
                            y: 2526,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 146,
                            h: 146
                        }
                    },
                    "map-stone-04.img": {
                        frame: {
                            x: 1135,
                            y: 2526,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-stone-05.img": {
                        frame: {
                            x: 1283,
                            y: 2526,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "ping-border.img": {
                        frame: {
                            x: 1431,
                            y: 2526,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-crate-09.img": {
                        frame: {
                            x: 1579,
                            y: 2526,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-crate-07.img": {
                        frame: {
                            x: 1727,
                            y: 2526,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-crate-02.img": {
                        frame: {
                            x: 1875,
                            y: 2526,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-crate-03.img": {
                        frame: {
                            x: 2023,
                            y: 2526,
                            w: 144,
                            h: 144
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 144,
                            h: 144
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-bush-07.img": {
                        frame: {
                            x: 2171,
                            y: 2526,
                            w: 135,
                            h: 143
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 6,
                            y: 0,
                            w: 135,
                            h: 143
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "player-star.img": {
                        frame: {
                            x: 2310,
                            y: 2526,
                            w: 148,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 148,
                            h: 142
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "star.img": {
                        frame: {
                            x: 2462,
                            y: 2526,
                            w: 148,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 3,
                            w: 148,
                            h: 142
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "map-barrel-02.img": {
                        frame: {
                            x: 2614,
                            y: 2526,
                            w: 142,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 142,
                            h: 142
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "player-ripple-01.img": {
                        frame: {
                            x: 2760,
                            y: 2526,
                            w: 142,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 142,
                            h: 142
                        },
                        sourceSize: {
                            w: 142,
                            h: 142
                        }
                    },
                    "part-panel-01.img": {
                        frame: {
                            x: 2906,
                            y: 2526,
                            w: 142,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 142,
                            h: 142
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-stone-01.img": {
                        frame: {
                            x: 3052,
                            y: 2526,
                            w: 142,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 142,
                            h: 142
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "part-plank-01.img": {
                        frame: {
                            x: 3198,
                            y: 2526,
                            w: 142,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 142,
                            h: 142
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-barrel-01.img": {
                        frame: {
                            x: 2,
                            y: 2684,
                            w: 142,
                            h: 142
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 1,
                            y: 1,
                            w: 142,
                            h: 142
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "player-base-01.img": {
                        frame: {
                            x: 148,
                            y: 2684,
                            w: 140,
                            h: 140
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 140,
                            h: 140
                        },
                        sourceSize: {
                            w: 140,
                            h: 140
                        }
                    },
                    "map-bunker-vent-03.img": {
                        frame: {
                            x: 292,
                            y: 2684,
                            w: 132,
                            h: 134
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 1,
                            w: 132,
                            h: 134
                        },
                        sourceSize: {
                            w: 136,
                            h: 136
                        }
                    },
                    "map-bunker-vent-02.img": {
                        frame: {
                            x: 428,
                            y: 2684,
                            w: 132,
                            h: 134
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 2,
                            y: 1,
                            w: 132,
                            h: 134
                        },
                        sourceSize: {
                            w: 136,
                            h: 136
                        }
                    },
                    "map-outhouse-res.img": {
                        frame: {
                            x: 564,
                            y: 2684,
                            w: 150,
                            h: 132
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 125,
                            y: 42,
                            w: 150,
                            h: 132
                        },
                        sourceSize: {
                            w: 400,
                            h: 312
                        }
                    },
                    "player-king-woods.img": {
                        frame: {
                            x: 718,
                            y: 2684,
                            w: 140,
                            h: 132
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 8,
                            w: 140,
                            h: 132
                        },
                        sourceSize: {
                            w: 148,
                            h: 148
                        }
                    },
                    "part-plate-01.img": {
                        frame: {
                            x: 862,
                            y: 2684,
                            w: 138,
                            h: 132
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 6,
                            w: 138,
                            h: 132
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-table-res.img": {
                        frame: {
                            x: 1004,
                            y: 2684,
                            w: 131,
                            h: 132
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 4,
                            y: 5,
                            w: 131,
                            h: 132
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-bush-01.img": {
                        frame: {
                            x: 1139,
                            y: 2684,
                            w: 126,
                            h: 130
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 7,
                            w: 126,
                            h: 130
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-bush-07x.img": {
                        frame: {
                            x: 1269,
                            y: 2684,
                            w: 126,
                            h: 130
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 7,
                            w: 126,
                            h: 130
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-bush-01f.img": {
                        frame: {
                            x: 1399,
                            y: 2684,
                            w: 126,
                            h: 130
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 8,
                            y: 7,
                            w: 126,
                            h: 130
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "part-splat-02.img": {
                        frame: {
                            x: 1529,
                            y: 2684,
                            w: 123,
                            h: 130
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 15,
                            y: 8,
                            w: 123,
                            h: 130
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-building-mansion-cellar-01c.img": {
                        frame: {
                            x: 1656,
                            y: 2684,
                            w: 354,
                            h: 129
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 354,
                            h: 129
                        },
                        sourceSize: {
                            w: 354,
                            h: 130
                        }
                    },
                    "map-crate-res-01.img": {
                        frame: {
                            x: 2014,
                            y: 2684,
                            w: 138,
                            h: 129
                        },
                        rotated: !1,
                        trimmed: !0,
                        spriteSourceSize: {
                            x: 3,
                            y: 9,
                            w: 138,
                            h: 129
                        },
                        sourceSize: {
                            w: 144,
                            h: 144
                        }
                    },
                    "map-table-01.img": {
                        frame: {
                            x: 2156,
                            y: 2684,
                            w: 160,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 160,
                            h: 128
                        },
                        sourceSize: {
                            w: 160,
                            h: 128
                        }
                    },
                    "map-stairs-broken-01.img": {
                        frame: {
                            x: 2320,
                            y: 2684,
                            w: 160,
                            h: 128
                        },
                        rotated: !1,
                        trimmed: !1,
                        spriteSourceSize: {
                            x: 0,
                            y: 0,
                            w: 160,
                            h: 128
                        },
                        sourceSize: {
                            w: 160,
                            h: 128
                        }
                    },
                    "south-korea.img": {
                        frame: {
                            x: 2484,
                            y: 2684,
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
                    "loot-ammo-box.img": {
                        frame: {
                            x: 2616,
                            y: 2684,
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
                    "austria.img": {
                        frame: {
                            x: 2748,
                            y: 2684,
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
                    "slovakia.img": {
                        frame: {
                            x: 2880,
                            y: 2684,
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
                    "singapore.img": {
                        frame: {
                            x: 3012,
                            y: 2684,
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
                    "uruguay.img": {
                        frame: {
                            x: 3144,
                            y: 2684,
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
                    "mexico.img": {
                        frame: {
                            x: 3276,
                            y: 2684,
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
                    "serbia.img": {
                        frame: {
                            x: 2,
                            y: 2830,
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
                    "russia.img": {
                        frame: {
                            x: 134,
                            y: 2830,
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
                    "romania.img": {
                        frame: {
                            x: 266,
                            y: 2830,
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
                    "republic-of-poland.img": {
                        frame: {
                            x: 398,
                            y: 2830,
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
