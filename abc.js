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
            this._ = 0, this.pos = o.create(0, 0), this.ppu = 16, this.k = 1.5, this.I/* targetZoom888 */ = 1.5, this.screenWidth = 1, this.screenHeight = 1, this.shakeEnabled = !0, this.shakeInt = 0
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
            N = function() {
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
            V = {
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
            q = function() {
                function e() {
                    i(this, e), this.serializedObjectCache = null, this.objectReg = null, this.clientPlayer = null, this.activePlayer = null, this.grid = null, this.time = 0, this.playerBarn = null, this.bulletBarn = null, this.gas = null, this.map = null, this.delObjIds = [], this.fullObjects = [], this.partObjects = [], this.activePlayerId = 0, this.activePlayerIdDirty = !1, this.activePlayerData = {}, this.aliveCounts = [], this.aliveDirty = !1, this.gasT = 0, this.gasData = {}, this.gasDirty = !1, this.playerInfos = [], this.deletedPlayerIds = [], this.playerStatus = {}, this.playerStatusDirty = !1, this.groupStatus = {}, this.groupStatusDirty = !1, this.bullets = [], this.explosions = [], this.emotes = [], this.planes = [], this.airstrikeZones = [], this.mapIndicators = [], this.ack = 0
                }
                return y(e, [{
                    key: "deserialize",
                    value: function(e, t) {
                        var a = e.readUint16(),
                            i = 0;
                        if (0 != (a & V.DeletedObjects)) {
                            i = e.readUint16();
                            for (var r = 0; r < i; r++) this.delObjIds.push(e.readUint16())
                        }
                        var o = 0;
                        if (0 != (a & V.FullObjects)) {
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
                        0 != (a & V.ActivePlayerId) && (this.activePlayerId = e.readUint16(), this.activePlayerIdDirty = !0);
                        var w = {};
                        if (n(e, w), this.activePlayerData = w, 0 != (a & V.AliveCount)) {
                            for (var x = e.readUint8(), f = 0; f < x; f++) {
                                var b = e.readUint8();
                                this.aliveCounts.push(b)
                            }
                            this.aliveDirty = !0
                        }
                        if (this.gasT = e.readFloat(0, 1, 16), 0 != (a & V.Gas)) {
                            var _ = {};
                            m(e, _), this.gasData = _, this.gasDirty = !0
                        }
                        if (0 != (a & V.PlayerInfos))
                            for (var S = e.readUint8(), k = 0; k < S; k++) {
                                var z = {};
                                c(e, z), this.playerInfos.push(z)
                            }
                        if (0 != (a & V.DeletePlayerIds))
                            for (var M = e.readUint8(), T = 0; T < M; T++) {
                                var P = e.readUint16();
                                this.deletedPlayerIds.push(P)
                            }
                        if (0 != (a & V.PlayerStatus)) {
                            var I = {};
                            s(e, I), this.playerStatus = I, this.playerStatusDirty = !0
                        }
                        if (0 != (a & V.GroupStatus)) {
                            var E = {};
                            l(e, E), this.groupStatus = E, this.groupStatusDirty = !0
                        }
                        if (0 != (a & V.Bullets))
                            for (var D = e.readUint8(), O = 0; O < D; O++) {
                                var B = {};
                                B.playerId = e.readUint16(), B.bulletType = e.readItemType(), B.pos = e.readVec(0, 0, 1024, 1024, 16), B.dir = e.readUnitVec(8), B.layer = e.readBits(2), B.varianceT = e.readFloat(0, 1, 5), B.distAdjIdx = e.readBits(4), B.clipDistance = e.readBoolean(), B.clipDistance && (B.distance = e.readFloat(0, 128, 8)), B.shotFx = e.readBoolean(), B.shotFx && (B.shotSourceType = e.readItemType(), B.shotOffhand = e.readBits(7), B.lastShot = e.readBoolean()), B.reflectCount = e.readBits(2), B.reflectObjId = 0;
                                var L = e.readBoolean();
                                L && (B.reflectObjId = e.readUint16()), this.bullets.push(B)
                            }
                        if (0 != (a & V.Explosions))
                            for (var R = e.readUint8(), F = 0; F < R; F++) {
                                var j = {};
                                j.pos = e.readVec(0, 0, 1024, 1024, 16), j.type = e.readItemType(), j.layer = e.readUint8(), this.explosions.push(j)
                            }
                        if (0 != (a & V.Emotes))
                            for (var N = e.readUint8(), q = 0; q < N; q++) {
                                var G = {};
                                G.type = e.readUint8(), G.playerId = e.readUint16(), G.itemType = e.readItemType(), G.isPing = e.readBoolean(), G.isPing && (G.pos = e.readVec(0, 0, 1024, 1024, 16)), e.readBits(7), this.emotes.push(G)
                            }
                        if (0 != (a & V.Planes))
                            for (var U = e.readUint8(), H = 0; H < U; H++) {
                                var W = {};
                                W.id = e.readUint8();
                                var K = e.readVec(0, 0, 2048, 2048, 10);
                                W.pos = v.create(K.x - 512, K.y - 512), W.planeDir = e.readUnitVec(8), W.actionComplete = e.readBoolean(), W.action = e.readBits(3), this.planes.push(W)
                            }
                        if (0 != (a & V.AirstrikeZones))
                            for (var Z = e.readUint8(), X = 0; X < Z; X++) {
                                var Y = {};
                                Y.pos = e.readVec(0, 0, 1024, 1024, 12), Y.rad = e.readFloat(0, C.kAirstrikeZoneMaxRad, 8), Y.duration = e.readFloat(0, C.kAirstrikeZoneMaxDuration, 8), this.airstrikeZones.push(Y)
                            }
                        if (0 != (a & V.MapIndicators))
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
            UpdateMsg: q,
            MapMsg: N,
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
                        N = O.playerIds[F],
                        V = o.ne(N),
                        q = N == h.__id,
                        G = o.se(N);
                    if (G && s > 1) {
                        j.groupIdDisplayed || (j.groupId.css("display", "block"), j.groupIdDisplayed = !0), this.updateTeam(F, v.htmlEscape(V.name), G.health, {
                            disconnected: G.disconnected,
                            dead: G.dead,
                            downed: G.downed,
                            factionLeader: G.factionLeader
                        }, V.playerId, V.teamId, o);
                        for (var U in j.indicators)
                            if (j.indicators.hasOwnProperty(U)) {
                                var H = j.indicators[U],
                                    W = H.elem,
                                    K = !0;
                                if ((!q || H.displayAll) && !l) {
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
                        N = 250 / x.max(1, e.length),
                        V = 750 / x.max(1, e.length);
                    this.statsInfoBox.children().each(function(e, t) {
                        var a = s(t);
                        a.css("opacity", 0), a.delay(y + V + (j + e) * N).animate({
                            opacity: 1
                        }, 500, function() {
                            a.children().each(function(e, t) {
                                s(t).delay(e * N).animate({
                                    opacity: 1
                                }, 500)
                            })
                        }), a.children().each(function(e, t) {
                            s(t).css("opacity", 0), j++
                        }), j++
                    }), this.statsOptions.children().each(function(e, t) {
                        var a = s(t);
                        a.hide(), a.delay(y + V + (j + e) * N).fadeIn(500), j++
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
