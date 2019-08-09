    "4edcdb13": function(e, t, a) {
        "use strict";

        function i(e, t) {
            return r.mergeDeep({}, o[e], {
                baseType: e
            }, t)
        }
        var r = a("1901e2d9"),
            o = {
                "9mm": {
                    name: "9mm",
                    type: "ammo",
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
                potato_ammo: {
                    name: "Potato Ammo",
                    type: "ammo",
                    special: !0,
                    hideUi: !0,
                    minStackSize: 10,
                    lootImg: {
                        sprite: "loot-ammo-box.img",
                        scale: .2,
                        tint: 7618334,
                        tintDark: 7618334
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
                    emitter: "heal_01",
                    aura: {
                        sprite: "part-aura-circle-01.img",
                        tint: 16711680
                    }
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
                    emitter: "heal_01",
                    aura: {
                        sprite: "part-aura-circle-01.img",
                        tint: 16711680
                    }
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
                    emitter: "boost_01",
                    aura: {
                        sprite: "part-aura-circle-01.img",
                        tint: 1676544
                    }
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
                    emitter: "boost_01",
                    aura: {
                        sprite: "part-aura-circle-01.img",
                        tint: 1676544
                    }
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
                helmet04: {
                    name: "Level 4 Helmet",
                    type: "helmet",
                    level: 4,
                    damageReduction: .7,
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
            n = {
                helmet03_leader: i("helmet03", {
                    name: "Leader Helmet",
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-leader.img"
                    }
                }),
                helmet03_forest: i("helmet03", {
                    name: "Shishigami no Kabuto",
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
                        border: "loot-circle-outer-01.img",
                        scale: .3,
                        rot: .5 * Math.PI
                    }
                }),
                helmet03_moon: i("helmet03", {
                    name: "Tsukuyomi no Kabuto",
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-moon.img",
                        spriteScale: .3
                    }
                }),
                helmet03_lt: i("helmet03", {
                    name: "Lieutenant Helmet",
                    noDrop: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-lieutenant.img",
                        spriteScale: .3
                    }
                }),
                helmet03_lt_aged: i("helmet03", {
                    name: "Lieutenant Helmet",
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
                        rot: .5 * Math.PI
                    }
                }),
                helmet03_potato: i("helmet03", {
                    name: "K-pot-ato",
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
                        rot: .5 * Math.PI
                    }
                }),
                helmet04_medic: i("helmet04", {
                    name: "Medic Helmet",
                    noDrop: !0,
                    skinImg: {
                        baseTint: 16777215,
                        baseTintRed: 16777215,
                        baseTintBlue: 16777215,
                        baseSprite: "player-helmet-medic.img",
                        spriteScale: .3
                    },
                    lootImg: {
                        sprite: "player-helmet-medic.img",
                        scale: .3,
                        rot: .5 * Math.PI
                    }
                }),
                helmet04_leader: i("helmet04", {
                    name: "Leader Helmet",
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
                        scale: .3,
                        rot: .5 * Math.PI
                    }
                })
            },
            s = r.mergeDeep({}, o, n);
        e.exports = s
    },
