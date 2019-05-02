                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(-7.5, 20.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_32",
                        pos: ve.create(-22, 29),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_15",
                        pos: ve.create(-39.5, 23),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "concrete_wall_ext_6",
                        pos: ve.create(-36, 16),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_02",
                        pos: ve.create(-38, 22.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(-32.5, 19.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_22",
                        pos: ve.create(-20, 22),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-4.5, 29),
                        scale: .8,
                        ori: 0
                    }, {
                        type: "concrete_wall_ext_6",
                        pos: ve.create(-38.5, -22.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "house_door_02",
                        pos: ve.create(-32, -20.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "decal_pipes_05",
                        pos: ve.create(-12, -22.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "metal_wall_ext_thicker_48",
                        pos: ve.create(-15, -26),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_15",
                        pos: ve.create(-31.5, -19),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_16",
                        pos: ve.create(-12, -19),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(-2.5, -17.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(.5, -14.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(7.5, -14.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_32",
                        pos: ve.create(22, -23),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_15",
                        pos: ve.create(39.5, -17),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "concrete_wall_ext_6",
                        pos: ve.create(36, -10),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_02",
                        pos: ve.create(38, -16.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(32.5, -13.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_22",
                        pos: ve.create(20, -16),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(4.5, -23),
                        scale: .8,
                        ori: 0
                    }, {
                        type: "crate_06",
                        pos: ve.create(-12.5, -22.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_06",
                        pos: ve.create(-7, -22.75),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_crossing_compartment_01",
                        pos: ve.create(1.5, 0),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_crossing_bathroom: {
                    type: "building",
                    map: {
                        display: !1,
                        color: 6707790,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 2,
                    floor: {
                        surfaces: [{
                            type: "water",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))]
                        }],
                        imgs: [{
                            sprite: "",
                            scale: .5,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(3.75, 2))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(3.75, 2))],
                        imgs: [{
                            sprite: "map-building-crossing-bathroom-ceiling.img",
                            scale: .5,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: c({
                            toilet_03: 5,
                            toilet_04: 1
                        }),
                        pos: ve.create(2, 0),
                        scale: 1,
                        ori: 3
                    }]
                },
                bunker_crossing_compartment_01: {
                    type: "building",
                    map: {
                        display: !1,
                        color: 6707790,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 2,
                    floor: {
                        surfaces: [{
                            type: "water",
                            collision: [_e.createAabbExtents(ve.create(-1, 3), ve.create(17, 17.5))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-crossing-compartment-floor-02.img",
                            pos: ve.create(-22.5, -10),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-crossing-compartment-floor-01.img",
                            pos: ve.create(4, 3),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(4, 3), ve.create(22, 14.5)), _e.createAabbExtents(ve.create(-22, -11), ve.create(4.5, 9))],
                        scopeOut: [_e.createAabbExtents(ve.create(4, 3), ve.create(22, 14.5)), _e.createAabbExtents(ve.create(-22, -11), ve.create(4.5, 9))],
                        imgs: [{
                            sprite: "map-bunker-crossing-compartment-ceiling-01a.img",
                            pos: ve.create(-22.475, -11),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }, {
                            sprite: "map-bunker-crossing-compartment-ceiling-01b.img",
                            pos: ve.create(3.975, 3),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }],
                        vision: {
                            dist: 7,
                            width: 3
                        }
                    },
                    occupiedEmitters: [{
                        type: "bunker_bubbles_02",
                        pos: ve.create(-1.5, 0),
                        rot: 0,
                        scale: .5,
                        layer: 0
                    }],
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_13",
                        pos: ve.create(-14, 16),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(-7.5, 17.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "metal_wall_ext_thicker_18",
                        pos: ve.create(5.5, 16),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(16, 13.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_15",
                        pos: ve.create(22, 8),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(28, 4.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(17.5, 6.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "bunker_crossing_bathroom",
                        pos: ve.create(22, 4.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_15",
                        pos: ve.create(22, 1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_11",
                        pos: ve.create(16, -6),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_10",
                        pos: ve.create(9.5, -10),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(4.5, -11.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_19",
                        pos: ve.create(-9, -10),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-19.5, -8),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_10",
                        pos: ve.create(-20, -14.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_17",
                        pos: ve.create(-27, -11),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_11",
                        pos: ve.create(-23, -1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_14",
                        pos: ve.create(-19, 7.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "control_panel_04",
                        pos: ve.create(-15.25, 8.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "control_panel_03",
                        pos: ve.create(-15.5, 12.75),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "control_panel_03",
                        pos: ve.create(-15.5, 4.25),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-5, 10.25),
                        scale: .8,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-3.25, 12.5),
                        scale: .8,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(1.15, 14.85),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_03",
                        pos: ve.create(4.5, 14.85),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bookshelf_01",
                        pos: ve.create(10.5, 13),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bed_sm_01",
                        pos: ve.create(10.5, 10),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "crate_01",
                        pos: ve.create(-4.5, -6.25),
                        scale: .8,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_01",
                        pos: ve.create(-3, -2.5),
                        scale: .8,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-1, -6.25),
                        scale: .8,
                        ori: 0
                    }, {
                        type: "fire_ext_01",
                        pos: ve.create(14, -.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "refrigerator_01",
                        pos: ve.create(8.25, -6.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "oven_01",
                        pos: ve.create(12.25, -6.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "crossing_door_01",
                        pos: ve.create(-17.85, -2.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "couch_01",
                        pos: ve.create(-12, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "screen_01",
                        pos: ve.create(-12, -7.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(-23.5, -4.5),
                        scale: .8,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "loot_tier_woodaxe",
                        pos: ve.create(-23.5, -8.5),
                        scale: .8,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(-23.5, -14),
                        scale: .8,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crossing_door_01",
                        pos: ve.create(-21.5, -20.15),
                        scale: 1,
                        ori: 1
                    }]
                },
                bunker_structure_05: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1,
                        bridge: {
                            nearbyWidthMult: 1.2
                        },
                        spawnPriority: 100
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(35.5, 28.5), ve.create(6, 6)), _e.createAabbExtents(ve.create(-36, 19), ve.create(6, 6)), _e.createAabbExtents(ve.create(36, -13), ve.create(6, 6)), _e.createAabbExtents(ve.create(-35.5, -22.5), ve.create(6, 6)), _e.createAabbExtents(ve.create(0, 0), ve.create(6, 6))],
                    bridgeLandBounds: [_e.createAabbExtents(ve.create(35.5, 28.5), ve.create(5, 5)), _e.createAabbExtents(ve.create(-36, 19), ve.create(5, 5)), _e.createAabbExtents(ve.create(36, -13), ve.create(5, 5)), _e.createAabbExtents(ve.create(-35.5, -22.5), ve.create(5, 5))],
                    bridgeWaterBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(5, 5))],
                    layers: [{
                        type: "bunker_crossing_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_crossing_sublevel_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(35.6, 28.5), ve.create(2.6, 2)),
                        downDir: ve.create(-1, 0)
                    }, {
                        collision: _e.createAabbExtents(ve.create(-36, 19), ve.create(2, 2.6)),
                        downDir: ve.create(0, 1)
                    }, {
                        collision: _e.createAabbExtents(ve.create(36, -13), ve.create(2, 2.6)),
                        downDir: ve.create(0, -1)
                    }, {
                        collision: _e.createAabbExtents(ve.create(-35.5, -22.5), ve.create(2.6, 2)),
                        downDir: ve.create(1, 0)
                    }],
                    mask: [_e.createAabbExtents(ve.create(-3.7, 27), ve.create(36.5, 5)), _e.createAabbExtents(ve.create(3.7, -21), ve.create(36.5, 5)), _e.createAabbExtents(ve.create(0, 3), ve.create(30, 18.95))]
                },
                bunker_hatchet_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(0, 10), ve.create(3.6, 5.8)),
                            color: 6707790
                        }]
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 0,
                    floor: {
                        surfaces: [{
                            type: "container",
                            collision: [_e.createAabbExtents(ve.create(0, 7.75), ve.create(2, 3.25))]
                        }, {
                            type: "shack",
                            collision: [_e.createAabbExtents(ve.create(0, 13.5), ve.create(3.75, 2.5)), _e.createAabbExtents(ve.create(5, 13.75), ve.create(1.25, 2.25))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-storm-floor-02.img",
                            pos: ve.create(1.25, 10),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 10), ve.create(3.5, 5.6))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 10), ve.create(3.8, 5.9))],
                        vision: {
                            dist: 5,
                            width: 2.75,
                            linger: .5,
                            fadeRate: 6
                        },
                        imgs: [{
                            sprite: "map-building-shack-ceiling-01.img",
                            pos: ve.create(-1, 10),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }],
                        destroy: {
                            wallCount: 2,
                            particle: "shackBreak",
                            particleCount: 25,
                            residue: "none"
                        }
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_short_6",
                        pos: ve.create(0, 5.3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_short_7",
                        pos: ve.create(-2.5, 8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_short_7",
                        pos: ve.create(2.5, 8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "shack_wall_bot",
                        pos: ve.create(3.39, 8.6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "shack_wall_side_left",
                        pos: ve.create(.3, 4.52),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "shack_wall_top",
                        pos: ve.create(-3.39, 9.73),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "shack_wall_side_right",
                        pos: ve.create(0, 15.58),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_01",
                        pos: ve.create(-2, 17.9),
                        scale: .8,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(1.45, 17.7),
                        scale: .85,
                        ori: 0
                    }, {
                        type: "decal_vent_01",
                        pos: ve.create(5, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_vent_02",
                        pos: ve.create(5, -8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "tree_07",
                        pos: ve.create(6.75, -4.5),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_hatchet_sublevel_01: {
                    type: "building",
                    map: {
                        display: !1,
                        color: 6707790,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 1,
                    floor: {
                        surfaces: [{
                            type: "bunker",
                            collision: [_e.createAabbExtents(ve.create(-3, -4.4), ve.create(13, 9))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-hatchet-chamber-floor-01a.img",
                            pos: ve.create(0, -4.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hatchet-chamber-floor-01b.img",
                            pos: ve.create(0, 9.25),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hatchet-chamber-floor-01c.img",
                            pos: ve.create(-15, -9.475),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(-3, -4.4), ve.create(13, 9.25))],
                        scopeOut: [_e.createAabbExtents(ve.create(-3, -4.4), ve.create(13, 9.25))],
                        imgs: [{
                            sprite: "map-bunker-hatchet-chamber-ceiling-01.img",
                            pos: ve.create(-3, -4.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }],
                        vision: {
                            dist: 5,
                            width: 3
                        }
                    },
                    mapObjects: [{
                        type: "concrete_wall_ext_6",
                        pos: ve.create(0, 11.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(-3.5, 8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(3.5, 8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(-8.5, 5.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(8.5, 5.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(10.5, -6),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_10",
                        pos: ve.create(-10.5, -1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_14",
                        pos: ve.create(-16, -7.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_25",
                        pos: ve.create(-3.5, -14.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_02",
                        pos: ve.create(-2, 5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-5, .5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(6.75, -10.75),
                        scale: .85,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_06",
                        pos: ve.create(0, -11),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_06",
                        pos: ve.create(7, -4),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "bunker_hatchet_compartment_01",
                        pos: ve.create(-32, -1.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_hatchet_compartment_02",
                        pos: ve.create(-63.5, -4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_hatchet_compartment_03",
                        pos: ve.create(-55, 20.5),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_hatchet_compartment_01: {
                    type: "building",
                    map: {
                        display: !1,
                        color: 6707790,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 2,
                    floor: {
                        surfaces: [{
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(16, 13))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-hatchet-compartment-floor-01.img",
                            pos: ve.create(0, .5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(16, 12.5))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(16, 12.5))],
                        imgs: [{
                            sprite: "map-bunker-hatchet-compartment-ceiling-01.img",
                            pos: ve.create(0, 0),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_13",
                        pos: ve.create(10.5, 2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_11",
                        pos: ve.create(3.5, 7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_18",
                        pos: ve.create(-3.5, 14.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_21",
                        pos: ve.create(-10.5, 6),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_32",
                        pos: ve.create(0, -13),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_14",
                        pos: ve.create(-16, -6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(16, -7.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(-16, -7.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(-9, 12.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "metal_wall_ext_10",
                        pos: ve.create(8.65, -.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_10",
                        pos: ve.create(3, 5.15),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "locker_01",
                        pos: ve.create(.5, 5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(5.5, 5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(8.5, 2),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "locker_01",
                        pos: ve.create(8.5, -3),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "barrel_01",
                        pos: ve.create(1.5, -.5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "fire_ext_01",
                        pos: ve.create(.5, -11.25),
                        scale: .9,
                        ori: 1
                    }, {
                        type: "couch_01",
                        pos: ve.create(-7.5, -2.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_01",
                        pos: ve.create(-7, 8.5),
                        scale: .85,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }]
                },
                bunker_hatchet_compartment_02: {
                    type: "building",
                    map: {
                        display: !1,
                        color: 6707790,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 2,
                    floor: {
                        surfaces: [{
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(16, 15))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-hatchet-compartment-floor-02a.img",
                            pos: ve.create(4, -8.25),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hatchet-compartment-floor-02b.img",
                            pos: ve.create(.75, 6),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hatchet-compartment-floor-02c.img",
                            pos: ve.create(-14, .5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hatchet-compartment-floor-02d.img",
                            pos: ve.create(-6.27, 14.25),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(-.5, 0), ve.create(16, 15))],
                        scopeOut: [_e.createAabbExtents(ve.create(-.5, 0), ve.create(16, 15))],
                        imgs: [{
                            sprite: "map-bunker-hatchet-compartment-ceiling-02.img",
                            pos: ve.create(-.5, -.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(11.5, -10.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_13",
                        pos: ve.create(10, 4.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_11",
                        pos: ve.create(3, 9.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(6, -13),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_12",
                        pos: ve.create(-1.5, -16.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(-9, -13.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_11",
                        pos: ve.create(-13, -8.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_15",
                        pos: ve.create(-17, .5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(-12.5, 6.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_25",
                        pos: ve.create(-11, 20.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_14",
                        pos: ve.create(-4, 15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(-5.5, 15),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_01",
                        pos: ve.create(-1.25, .5),
                        scale: .85,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_01",
                        pos: ve.create(2.75, -1.75),
                        scale: .85,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_04",
                        pos: ve.create(3, 2.5),
                        scale: .85,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(-7.5, 11),
                        scale: .85,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "control_panel_06",
                        pos: ve.create(2, 6.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "control_panel_06",
                        pos: ve.create(6.75, 1.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "loot_tier_hatchet_melee",
                        pos: ve.create(6.75, 6.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_12_2",
                        pos: ve.create(-10.5, -1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_12_2",
                        pos: ve.create(-1.5, -10),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "loot_tier_imperial_skin",
                        pos: ve.create(-13.5, -4.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "loot_tier_pineapple_skin",
                        pos: ve.create(-13.5, -1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "loot_tier_tarkhany_skin",
                        pos: ve.create(-13.5, 2.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "loot_tier_spetsnaz_skin",
                        pos: ve.create(-5, -13),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "loot_tier_lumber_skin",
                        pos: ve.create(-1.5, -13),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "loot_tier_verde_skin",
                        pos: ve.create(2, -13),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_hatchet_compartment_03: {
                    type: "building",
                    map: {
                        display: !1,
                        color: 6707790,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 2,
                    floor: {
                        surfaces: [{
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(19, 10))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-hatchet-compartment-floor-03a.img",
                            pos: ve.create(-14.5, -8.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hatchet-compartment-floor-03b.img",
                            pos: ve.create(-9, 3),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hatchet-compartment-floor-03c.img",
                            pos: ve.create(5.5, -.25),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hatchet-compartment-floor-03d.img",
                            pos: ve.create(14.5, -3.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(19, 9.5))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(19, 9.5))],
                        imgs: [{
                            sprite: "map-bunker-hatchet-compartment-ceiling-03.img",
                            pos: ve.create(0, 0),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_25",
                        pos: ve.create(1.5, -4),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_18",
                        pos: ve.create(12, 3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_10",
                        pos: ve.create(1.5, 6.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_21",
                        pos: ve.create(-10.5, 10),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_01",
                        pos: ve.create(-16, -5),
                        scale: .85,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_01",
                        pos: ve.create(3, -.5),
                        scale: .85,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_06",
                        pos: ve.create(-11.75, -1.05),
                        scale: .85,
                        ori: 0
                    }, {
                        type: "crate_06",
                        pos: ve.create(-7, -1.05),
                        scale: .85,
                        ori: 0
                    }, {
                        type: "case_03",
                        pos: ve.create(-2.5, 6.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-7, 6.75),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-11, 5.5),
                        scale: .9,
                        ori: 0
                    }]
                },
                bunker_structure_06: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(1, 6), ve.create(7, 13.5))],
                    layers: [{
                        type: "bunker_hatchet_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_hatchet_sublevel_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, 8.4), ve.create(2, 2.6)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(-3, -3.7), ve.create(13, 9.5)), _e.createAabbExtents(ve.create(-48.025, 6), ve.create(32, 24.95))]
                },
                bunker_eye_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(0, 7.5), ve.create(2, 3.25)),
                            color: 6946816
                        }]
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 1,
                    floor: {
                        surfaces: [{
                            type: "container",
                            collision: [_e.createAabbExtents(ve.create(0, 7.75), ve.create(2, 3.25))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-generic-floor-01.img",
                            pos: ve.create(0, 7.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 8.25), ve.create(2, 3.25))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 8.25), ve.create(2, 3.25))],
                        imgs: [{
                            sprite: "map-bunker-generic-ceiling-01.img",
                            pos: ve.create(0, 7.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }]
                    },
                    puzzle: {
                        solution: "bunker_eye_01",
                        completeUseType: "eye_door_01",
                        completeOffDelay: 1,
                        completeUseDelay: 2,
                        errorResetDelay: 1,
                        pieceResetDelay: 2,
                        sound: {
                            fail: "door_error_01",
                            complete: ""
                        }
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_6",
                        pos: ve.create(0, 5.3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_7",
                        pos: ve.create(-2.5, 8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_7",
                        pos: ve.create(2.5, 8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bush_01",
                        pos: ve.create(5, 23),
                        scale: 1.2,
                        ori: 0
                    }]
                },
                vault_door_eye: T({
                    material: "metal",
                    hinge: ve.create(1, 3.5),
                    extents: ve.create(1, 3.5),
                    img: {
                        sprite: "map-door-02.img"
                    },
                    door: {
                        interactionRad: 1.5,
                        openSpeed: 10,
                        openOneWay: -1,
                        openDelay: .1,
                        openOnce: !0,
                        canUse: !1,
                        spriteAnchor: ve.create(.2, 1),
                        sound: {
                            open: "none",
                            close: "none",
                            change: "none"
                        }
                    }
                }),
                metal_wall_column_4x8: Z({
                    material: "metal",
                    extents: ve.create(2, 4)
                }),
                stone_wall_int_4: Z({
                    material: "stone",
                    extents: ve.create(.6, 2),
                    img: m("map-wall-04-stone.img", 16777215)
                }),
                bunker_eye_sublevel_01: {
                    type: "building",
                    map: {
                        display: !1,
                        color: 6707790,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 0,
                    floor: {
                        surfaces: [{
                            type: "bunker",
                            collision: [_e.createAabbExtents(ve.create(0, -12), ve.create(14, 17))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-eye-chamber-floor-01a.img",
                            pos: ve.create(0, -8.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-eye-chamber-floor-01b.img",
                            pos: ve.create(13, -23),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, -12), ve.create(14, 17))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, -12), ve.create(14, 17))],
                        imgs: [{
                            sprite: "map-bunker-eye-chamber-ceiling-01.img",
                            pos: ve.create(0, -12),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }],
                        vision: {
                            dist: 5,
                            width: 3
                        }
                    },
                    puzzle: {
                        solution: "bunker_eye_02",
                        completeUseType: "vault_door_eye",
                        completeOffDelay: 1,
                        completeUseDelay: 5.25,
                        errorResetDelay: 1,
                        pieceResetDelay: 10,
                        sound: {
                            fail: "door_error_01",
                            complete: "vault_change_02"
                        }
                    },
                    mapObjects: [{
                        type: "concrete_wall_ext_6",
                        pos: ve.create(0, 11.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(-3.5, 8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(3.5, 8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-7, 5.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(7, 5.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_34",
                        pos: ve.create(-10.5, -10),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(13, -26.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(15.5, -23),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(13, -19.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_24",
                        pos: ve.create(10.5, -5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_column_4x8",
                        pos: ve.create(-7.5, -29),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_column_4x8",
                        pos: ve.create(7.5, -29),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_02",
                        pos: ve.create(-2, 5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "stone_04",
                        pos: ve.create(12, -23),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "stone_wall_int_4",
                        pos: ve.create(9.4, -23),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "recorder_08",
                        pos: ve.create(7.5, 2),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(-7, 1),
                        scale: 1,
                        ori: 1,
                        puzzlePiece: "swine"
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(-7, -4),
                        scale: 1,
                        ori: 1,
                        puzzlePiece: "egg"
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(-7, -9),
                        scale: 1,
                        ori: 1,
                        puzzlePiece: "storm"
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(-7, -14),
                        scale: 1,
                        ori: 1,
                        puzzlePiece: "caduceus"
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(-7, -19),
                        scale: 1,
                        ori: 1,
                        puzzlePiece: "crossing"
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(-7, -24),
                        scale: 1,
                        ori: 1,
                        puzzlePiece: "conch"
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(7, -4),
                        scale: 1,
                        ori: 3,
                        puzzlePiece: "cloud"
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(7, -9),
                        scale: 1,
                        ori: 3,
                        puzzlePiece: "hydra"
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(7, -14),
                        scale: 1,
                        ori: 3,
                        puzzlePiece: "hatchet"
                    }, {
                        type: "control_panel_02b",
                        pos: ve.create(7, -19),
                        scale: 1,
                        ori: 3,
                        puzzlePiece: "harpsichord"
                    }, {
                        type: "candle_lit_02",
                        pos: ve.create(0, -1.5),
                        scale: .75,
                        ori: 0
                    }, {
                        type: "candle_lit_02",
                        pos: ve.create(0, -11.5),
                        scale: .75,
                        ori: 0
                    }, {
                        type: "candle_lit_02",
                        pos: ve.create(0, -21.5),
                        scale: .75,
                        ori: 0
                    }, {
                        type: "vault_door_eye",
                        pos: ve.create(3.5, -30),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "bunker_eye_compartment_01",
                        pos: ve.create(0, -39),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_eye_compartment_01: {
                    type: "building",
                    map: {
                        display: !1,
                        color: 6707790,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 2,
                    floor: {
                        surfaces: [{
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 10))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-eye-compartment-floor-01.img",
                            pos: ve.create(0, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 10))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 10))],
                        imgs: [{
                            sprite: "map-bunker-eye-compartment-ceiling-01.img",
                            pos: ve.create(0, 0),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(10.5, -2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(-10.5, -2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_18",
                        pos: ve.create(0, -10.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "loot_tier_eye_02",
                        pos: ve.create(0, -3.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "recorder_09",
                        pos: ve.create(-7, -7),
                        scale: 1,
                        ori: 2
                    }]
                },
                bunker_structure_07: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    ori: 2,
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(-1, 8), ve.create(7, 6)), _e.createAabbExtents(ve.create(-40, -70), ve.create(2, 2)), _e.createAabbExtents(ve.create(40, -70), ve.create(2, 2)), _e.createAabbExtents(ve.create(0, -30), ve.create(2, 2)), _e.createAabbExtents(ve.create(5, 23), ve.create(2, 2))],
                    layers: [{
                        type: "bunker_eye_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_eye_sublevel_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, 8.4), ve.create(2, 2.6)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(0, -22.2), ve.create(13.5, 28))]
                },
                bridge_lg_under_column: Z({
                    material: "concrete",
                    extents: ve.create(2.5, 10)
                }),
                concrete_wall_column_5x4: Z({
                    material: "concrete",
                    extents: ve.create(2.5, 2)
                }),
                bridge_rail_3: xe({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.4, 2)),
                    img: {
                        sprite: "",
                        scale: .5,
                        alpha: 1,
                        tint: 4456448,
                        zIdx: 10
                    }
                }),
                bridge_rail_12: xe({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.4, 6.5)),
                    img: {
                        sprite: "",
                        scale: .5,
                        alpha: 1,
                        tint: 4456448,
                        zIdx: 10
                    }
                }),
                bridge_lg_01: ee({}),
                bridge_lg_01x: ee({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-bridge-lg-ceiling.img",
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-03.img",
                            pos: ve.create(-10, -4),
                            scale: .4,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-07.img",
                            pos: ve.create(8, 4),
                            scale: .4,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(15, -5.25),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(-15, 5.25),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 3
                        }]
                    }
                }),
                bridge_lg_under_01: {
                    type: "building",
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 0,
                    floor: {
                        surfaces: [],
                        imgs: []
                    },
                    ceiling: {
                        scopeIn: [],
                        scopeOut: [],
                        vision: {
                            dist: 5.5,
                            width: 2.75,
                            linger: .5,
                            fadeRate: 6
                        },
                        imgs: []
                    },
                    mapObjects: [{
                        type: "bridge_lg_under_column",
                        pos: ve.create(-14, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bridge_lg_under_column",
                        pos: ve.create(14, 0),
                        scale: 1,
                        ori: 0
                    }]
                },
                bridge_lg_structure_01: {
                    type: "structure",
                    terrain: {
                        bridge: {
                            nearbyWidthMult: 5
                        }
                    },
                    layers: [{
                        type: "bridge_lg_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bridge_lg_under_01",
                        pos: ve.create(0, 0),
                        ori: 0,
                        underground: !1
                    }],
                    bridgeLandBounds: [_e.createAabbExtents(ve.create(-34, 0), ve.create(6, 9)), _e.createAabbExtents(ve.create(34, 0), ve.create(6, 9))],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, -9.5), ve.create(11.5, 1.5)),
                        downDir: ve.create(0, 1),
                        lootOnly: !0
                    }, {
                        collision: _e.createAabbExtents(ve.create(0, 9.5), ve.create(11.5, 1.5)),
                        downDir: ve.create(0, -1),
                        lootOnly: !0
                    }],
                    mask: [_e.createAabbExtents(ve.create(0, 0), ve.create(12, 8))]
                },
                bridge_xlg_under_column: Z({
                    material: "concrete",
                    extents: ve.create(2.5, 14)
                }),
                concrete_wall_column_9x4: Z({
                    material: "concrete",
                    extents: ve.create(4.5, 2)
                }),
                bridge_rail_20: xe({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.4, 10)),
                    img: {
                        sprite: "",
                        scale: .5,
                        alpha: 1,
                        tint: 4456448,
                        zIdx: 10
                    }
                }),
                bridge_xlg_01: function(e) {
                    var t = {
                        type: "building",
                        map: {
                            display: !0,
                            shapes: [{
                                collider: _e.createAabbExtents(ve.create(0, 0), ve.create(38.5, 12)),
                                color: 2894124
                            }, {
                                collider: _e.createAabbExtents(ve.create(-16, -13), ve.create(3, 1.5)),
                                color: 3618615
                            }, {
                                collider: _e.createAabbExtents(ve.create(16, -13), ve.create(3, 1.5)),
                                color: 3618615
                            }, {
                                collider: _e.createAabbExtents(ve.create(-16, 13), ve.create(3, 1.5)),
                                color: 3618615
                            }, {
                                collider: _e.createAabbExtents(ve.create(16, 13), ve.create(3, 1.5)),
                                color: 3618615
                            }]
                        },
                        terrain: {
                            grass: !0,
                            beach: !1
                        },
                        zIdx: 1,
                        floor: {
                            surfaces: [{
                                type: "asphalt",
                                collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(38.5, 12))]
                            }],
                            imgs: [{
                                sprite: "map-building-bridge-xlg-floor.img",
                                scale: .5,
                                alpha: 1,
                                tint: 16777215
                            }]
                        },
                        ceiling: {
                            scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                            scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                            imgs: []
                        },
                        mapObjects: [{
                            type: "bridge_rail_20",
                            pos: ve.create(-26, 11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "bridge_rail_20",
                            pos: ve.create(-26, -11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "bridge_rail_20",
                            pos: ve.create(26, 11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "bridge_rail_20",
                            pos: ve.create(26, -11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "concrete_wall_column_9x4",
                            pos: ve.create(-16, -13),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "concrete_wall_column_9x4",
                            pos: ve.create(-16, 13),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "concrete_wall_column_9x4",
                            pos: ve.create(16, -13),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "concrete_wall_column_9x4",
                            pos: ve.create(16, 13),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "concrete_wall_ext_5",
                            pos: ve.create(-9, 11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "concrete_wall_ext_5",
                            pos: ve.create(-9, -11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "concrete_wall_ext_5",
                            pos: ve.create(9, 11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "concrete_wall_ext_5",
                            pos: ve.create(9, -11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "bridge_rail_3",
                            pos: ve.create(-5, 11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "bridge_rail_3",
                            pos: ve.create(-5, -11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "bridge_rail_3",
                            pos: ve.create(5, 11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "bridge_rail_3",
                            pos: ve.create(5, -11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "concrete_wall_ext_7",
                            pos: ve.create(0, 11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "concrete_wall_ext_7",
                            pos: ve.create(0, -11.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "loot_tier_1",
                            pos: ve.create(-25, 3),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "loot_tier_1",
                            pos: ve.create(25, 3),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "sandbags_01",
                            pos: ve.create(-14, 6.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "sandbags_01",
                            pos: ve.create(-20, -8),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "barrel_01",
                            pos: ve.create(-14, -8),
                            scale: .9,
                            ori: 0
                        }, {
                            type: "crate_01",
                            pos: ve.create(0, 2.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "crate_01",
                            pos: ve.create(0, -2.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "crate_04",
                            pos: ve.create(0, 7.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "crate_04",
                            pos: ve.create(0, -7.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "crate_01",
                            pos: ve.create(-5, 0),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "crate_01",
                            pos: ve.create(5, 0),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "crate_01",
                            pos: ve.create(-27, -8),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "crate_01",
                            pos: ve.create(27, -8),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "sandbags_01",
                            pos: ve.create(14, 6.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "sandbags_01",
                            pos: ve.create(20, -8),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "barrel_01",
                            pos: ve.create(14, -8),
                            scale: .9,
                            ori: 0
                        }]
                    };
                    return ke.mergeDeep(t, e || {})
                }({}),
                bridge_xlg_under_01: {
                    type: "building",
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 0,
                    floor: {
                        surfaces: [],
                        imgs: []
                    },
                    ceiling: {
                        scopeIn: [],
                        scopeOut: [],
                        vision: {
                            dist: 5.5,
                            width: 2.75,
                            linger: .5,
                            fadeRate: 6
                        },
                        imgs: []
                    },
                    mapObjects: [{
                        type: "bridge_xlg_under_column",
                        pos: ve.create(-14, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bridge_xlg_under_column",
                        pos: ve.create(14, 0),
                        scale: 1,
                        ori: 0
                    }]
                },
                bridge_xlg_structure_01: {
                    type: "structure",
                    terrain: {
                        bridge: {
                            nearbyWidthMult: 5
                        }
                    },
                    layers: [{
                        type: "bridge_xlg_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bridge_xlg_under_01",
                        pos: ve.create(0, 0),
                        ori: 0,
                        underground: !1
                    }],
                    bridgeLandBounds: [_e.createAabbExtents(ve.create(-41, 0), ve.create(5, 10)), _e.createAabbExtents(ve.create(41, 0), ve.create(5, 10))],
                    bridgeWaterBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(5, 5))],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, -13.5), ve.create(11.5, 1.5)),
                        downDir: ve.create(0, 1),
                        lootOnly: !0
                    }, {
                        collision: _e.createAabbExtents(ve.create(0, 13.5), ve.create(11.5, 1.5)),
                        downDir: ve.create(0, -1),
                        lootOnly: !0
                    }],
                    mask: [_e.createAabbExtents(ve.create(0, 0), ve.create(12, 12))]
                },
                bridge_rail_28: xe({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.4, 14)),
                    img: {
                        sprite: "",
                        scale: .5,
                        alpha: 1,
                        tint: 4456448,
                        zIdx: 10
                    }
                }),
                brick_wall_ext_3_0_low: xe({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.5, 1.5)),
                    img: {
                        sprite: "",
                        scale: .5,
                        alpha: 1,
                        tint: 4456448,
                        zIdx: 10
                    }
                }),
                brick_wall_ext_11_5: Z({
                    material: "brick",
                    extents: ve.create(.5, 5.75)
                }),
                bridge_md_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(0, 0), ve.create(14, 3.5)),
                            color: 9322264
                        }]
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 1,
                    floor: {
                        surfaces: [{
                            type: "shack",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(13.5, 3.5))]
                        }],
                        imgs: [{
                            sprite: "map-building-bridge-md-floor.img",
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [],
                        scopeOut: [],
                        imgs: []
                    },
                    mapObjects: [{
                        type: "bridge_rail_28",
                        pos: ve.create(0, 3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "bridge_rail_28",
                        pos: ve.create(0, -3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "brick_wall_ext_3_0_low",
                        pos: ve.create(-6, 4.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "brick_wall_ext_3_0_low",
                        pos: ve.create(6, 4.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "brick_wall_ext_3_0_low",
                        pos: ve.create(-6, -4.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "brick_wall_ext_3_0_low",
                        pos: ve.create(6, -4.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            loot_tier_1: 1,
                            loot_tier_2: 1
                        }),
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }]
                },
                bridge_md_under_01: {
                    type: "building",
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 0,
                    floor: {
                        surfaces: [],
                        imgs: []
                    },
                    ceiling: {
                        scopeIn: [],
                        scopeOut: [],
                        vision: {
                            dist: 5.5,
                            width: 2.75,
                            linger: .5,
                            fadeRate: 6
                        },
                        imgs: []
                    },
                    mapObjects: [{
                        type: "brick_wall_ext_11_5",
                        pos: ve.create(-6, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "brick_wall_ext_11_5",
                        pos: ve.create(6, 0),
                        scale: 1,
                        ori: 0
                    }]
                },
                bridge_md_structure_01: {
                    type: "structure",
                    terrain: {
                        bridge: {
                            nearbyWidthMult: 8
                        }
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(23, 7))],
                    layers: [{
                        type: "bridge_md_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bridge_md_under_01",
                        pos: ve.create(0, 0),
                        ori: 0,
                        underground: !1
                    }],
                    bridgeLandBounds: [_e.createAabbExtents(ve.create(-15.5, 0), ve.create(3, 5)), _e.createAabbExtents(ve.create(15.5, 0), ve.create(3, 5))],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, -4.75), ve.create(5.5, 1.25)),
                        downDir: ve.create(0, 1),
                        lootOnly: !0
                    }, {
                        collision: _e.createAabbExtents(ve.create(0, 4.75), ve.create(5.5, 1.25)),
                        downDir: ve.create(0, -1),
                        lootOnly: !0
                    }],
                    mask: [_e.createAabbExtents(ve.create(0, 0), ve.create(6.5, 3.6))]
                },
                container_wall_top: Z({
                    material: "metal",
                    extents: ve.create(2.75, .4)
                }),
                container_wall_side: Z({
                    material: "metal",
                    extents: ve.create(.4, 5.5)
                }),
                container_wall_side_open: Z({
                    material: "metal",
                    extents: ve.create(.4, 6)
                }),
                container_01: k({
                    open: !1,
                    tint: 2703694,
                    ceilingSprite: "map-building-container-ceiling-01.img"
                }),
                container_02: k({
                    open: !1,
                    tint: 2703694,
                    ceilingSprite: "map-building-container-ceiling-02.img"
                }),
                container_03: k({
                    open: !1,
                    tint: 2703694,
                    ceilingSprite: "map-building-container-ceiling-03.img"
                }),
                container_04: k({
                    open: !0,
                    tint: 3560807,
                    ceilingSprite: "map-building-container-open-ceiling-01.img"
                }),
                container_01x: k({
                    open: !1,
                    tint: 2703694,
                    ceilingImgs: [{
                        sprite: "map-building-container-ceiling-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 2703694
                    }, {
                        sprite: "map-snow-05.img",
                        pos: ve.create(0, 3),
                        scale: .6,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }]
                }),
                container_06: k({
                    open: !1,
                    tint: 12227840,
                    ceilingSprite: "map-building-container-ceiling-01.img",
                    loot_spawner_01: "loot_tier_sv98",
                    loot_spawner_02: "loot_tier_scopes_sniper"
                }),
                loot_tier_1: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_world",
                    terrain: {
                        grass: !0,
                        beach: !0,
                        riverShore: !0
                    }
                },
                loot_tier_2: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_container",
                    terrain: {
                        grass: !0,
                        beach: !0,
                        riverShore: !0
                    }
                },
                loot_tier_beach: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_world",
                    terrain: {
                        grass: !1,
                        beach: !0
                    }
                },
                loot_tier_vault_floor: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_vault_floor",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_police_floor: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_police_floor",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_mansion_floor: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_mansion_floor",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_sv98: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_sv98",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_scopes_sniper: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_scopes_sniper",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_woodaxe: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_woodaxe",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_fireaxe: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_fireaxe",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_stonehammer: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_stonehammer",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_hatchet_melee: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_hatchet_melee",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_leaf_pile: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_leaf_pile",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_islander_skin: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_islander_skin",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_verde_skin: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_verde_skin",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_lumber_skin: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_lumber_skin",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_imperial_skin: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_imperial_skin",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_pineapple_skin: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_pineapple_skin",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_tarkhany_skin: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_tarkhany_skin",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_spetsnaz_skin: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_spetsnaz_skin",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_eye_01: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_eye_01",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_eye_02: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_eye_02",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_vector45: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_vector45",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_chrys_01: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_chrys_01",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_chrys_02: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_chrys_02",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_chrys_02b: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_chrys_02b",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_chrys_03: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_chrys_03",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_helmet_forest: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_forest_helmet",
                    terrain: {
                        grass: !0,
                        beach: !0
                    }
                },
                loot_tier_helmet_potato: {
                    type: "loot_spawner",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    tier: "tier_potato_helmet",
                    terrain: {
                        grass: !0,
                        beach: !1
                    }
                },
                decal_barrel_explosion: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 1),
                    height: 0,
                    img: {
                        sprite: "map-barrel-res-01.img",
                        scale: .24,
                        alpha: 1,
                        tint: 0,
                        zIdx: 9
                    }
                },
                decal_frag_explosion: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 1),
                    height: 0,
                    img: {
                        sprite: "map-barrel-res-01.img",
                        scale: .2,
                        alpha: .8,
                        tint: 0,
                        zIdx: 11
                    }
                },
                decal_frag_small_explosion: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 1),
                    height: 0,
                    img: {
                        sprite: "map-barrel-res-01.img",
                        scale: .12,
                        alpha: .8,
                        tint: 2105376,
                        zIdx: 11
                    }
                },
                decal_bomb_iron_explosion: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 1),
                    height: 0,
                    lifetime: {
                        min: 6,
                        max: 10
                    },
                    fadeChance: .6,
                    img: {
                        sprite: "map-barrel-res-01.img",
                        scale: .2,
                        alpha: .8,
                        tint: 0,
                        zIdx: 11
                    }
                },
                decal_smoke_explosion: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 1),
                    height: 0,
                    img: {
                        sprite: "map-smoke-res.img",
                        scale: .2,
                        alpha: .5,
                        tint: 16777215,
                        zIdx: 11
                    }
                },
                decal_snowball_explosion: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 1),
                    height: 0,
                    lifetime: 5,
                    fadeChance: 1,
                    img: {
                        sprite: "map-snowball-res.img",
                        scale: .2,
                        alpha: .25,
                        tint: 16777215,
                        zIdx: 11
                    }
                },
                decal_potato_explosion: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 1),
                    height: 0,
                    lifetime: 5,
                    fadeChance: 1,
                    img: {
                        sprite: "map-potato-res.img",
                        scale: .2,
                        alpha: .25,
                        tint: 16777215,
                        zIdx: 11
                    }
                },
                decal_vent_01: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 2),
                    height: 0,
                    img: {
                        sprite: "map-bunker-vent-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 0
                    }
                },
                decal_vent_02: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 2),
                    height: 0,
                    img: {
                        sprite: "map-bunker-vent-02.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 0
                    }
                },
                decal_vent_03: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 2),
                    height: 0,
                    img: {
                        sprite: "map-bunker-vent-03.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 0
                    }
                },
                decal_hydra_01: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    height: 0,
                    img: {
                        sprite: "map-bunker-hydra-floor-04.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 0
                    }
                },
                decal_pipes_01: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1, 4.5)),
                    height: 1,
                    img: {
                        sprite: "map-pipes-01.img",
                        scale: .5,
                        alpha: .96,
                        tint: 16777215,
                        zIdx: 60
                    }
                },
                decal_pipes_02: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4, 3)),
                    height: 1,
                    img: {
                        sprite: "map-pipes-02.img",
                        scale: .5,
                        alpha: .96,
                        tint: 16777215,
                        zIdx: 60
                    }
                },
                decal_pipes_03: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(10.5, 4)),
                    height: 1,
                    img: {
                        sprite: "map-pipes-03.img",
                        scale: .5,
                        alpha: .96,
                        tint: 16777215,
                        zIdx: 60
                    }
                },
                decal_pipes_04: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1, 5.5)),
                    height: 1,
                    img: {
                        sprite: "map-pipes-04.img",
                        scale: .5,
                        alpha: .96,
                        tint: 16777215,
                        zIdx: 60
                    }
                },
                decal_pipes_05: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1, 3.5)),
                    height: 1,
                    img: {
                        sprite: "map-pipes-05.img",
                        scale: .5,
                        alpha: .96,
                        tint: 16777215,
                        zIdx: 60
                    }
                },
                decal_initiative_01: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 3),
                    height: 0,
                    img: {
                        sprite: "map-decal-initiative.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 0
                    }
                },
                decal_web_01: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 1.5)),
                    height: 1,
                    img: {
                        sprite: "map-web-01.img",
                        scale: .5,
                        alpha: .75,
                        tint: 16777215,
                        zIdx: 60
                    }
                },
                decal_light_01: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.25, 3.25)),
                    height: 1,
                    img: {
                        sprite: "map-light-01.img",
                        scale: 1,
                        alpha: .5,
                        tint: 16751616,
                        zIdx: 60,
                        flicker: !0,
                        flickerMin: .9,
                        flickerMax: 1.1,
                        flickerRate: .5,
                        ignoreAdjust: !0
                    }
                },
                decal_light_02: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    height: 1,
                    img: {
                        sprite: "map-light-01.img",
                        scale: .75,
                        alpha: .5,
                        tint: 16760397,
                        zIdx: 60,
                        flicker: !0,
                        flickerMin: .8,
                        flickerMax: 1.2,
                        flickerRate: .2,
                        ignoreAdjust: !0
                    }
                },
                decal_light_03: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    height: 1,
                    img: {
                        sprite: "map-light-01.img",
                        scale: .75,
                        alpha: .5,
                        tint: 8585216,
                        zIdx: 60,
                        flicker: !0,
                        flickerMin: .8,
                        flickerMax: 1.2,
                        flickerRate: .2,
                        ignoreAdjust: !0
                    }
                },
                decal_blood_01: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 1.5)),
                    height: 0,
                    img: {
                        sprite: "part-splat-01.img",
                        scale: .25,
                        alpha: .95,
                        tint: 4001294,
                        zIdx: 0
                    }
                },
                decal_blood_02: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 1.5)),
                    height: 0,
                    img: {
                        sprite: "part-splat-02.img",
                        scale: .25,
                        alpha: .95,
                        tint: 4001294,
                        zIdx: 0
                    }
                },
                decal_blood_03: {
                    type: "decal",
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 1.5)),
                    height: 0,
                    img: {
                        sprite: "part-splat-03.img",
                        scale: .25,
                        alpha: .95,
                        tint: 4001294,
                        zIdx: 0
                    }
                },
                decal_chrys_01: {
                    type: "decal",
                    collision: _e.createCircle(ve.create(0, 0), 2),
                    height: 1,
                    img: {
                        sprite: "map-bunker-vent-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 3
                    }
                }
            };
        e.exports = {
            Defs: Pe,
            MapStateFlags: Me,
            MinScale: .125,
            MaxScale: 2.5,
            oriToRad: i,
            radToOri: r,
            getBoundingCollider: o,
            Nt: .8,
            Vt: .9,
            qt: function(e, t) {
                return e.sprite && e.sprite.visible && e.sprite.alpha < t
            }
        }
    },
    d306eab6: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function o(e, t) {
            return {
                name: e,
                defaultValue: t
            }
        }

        function n(e) {
            return new f(x.Key, e)
        }

        function s(e) {
            return new f(x.MouseButton, e)
        }

        function l(e) {
            return new f(x.MouseWheel, e)
        }
        var c, m = function() {
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
            p = a("8ee62bea"),
            d = a("ca1f6916"),
            h = a("14a25ec1"),
            u = a("6d61bfc0"),
            g = a("989ad62a"),
            y = g.Input,
            w = a("4b8d140f"),
            x = w.InputType,
            f = w.InputValue,
            b = w.Key,
            _ = w.MouseButton,
            S = w.MouseWheel,
            k = (c = {}, r(c, y.MoveLeft, o("Move Left", n(b.A))), r(c, y.MoveRight, o("Move Right", n(b.D))), r(c, y.MoveUp, o("Move Up", n(b.W))), r(c, y.MoveDown, o("Move Down", n(b.S))), r(c, y.Fire, o("Fire", s(_.Left))), r(c, y.Reload, o("Reload", n(b.R))), r(c, y.Cancel, o("Cancel", n(b.X))), r(c, y.Interact, o("Interact", n(b.F))), r(c, y.Revive, o("Revive", null)), r(c, y.Use, o("Open/Use", null)), r(c, y.Loot, o("Loot", null)), r(c, y.EquipPrimary, o("Equip Primary", n(b.One))), r(c, y.EquipSecondary, o("Equip Secondary", n(b.Two))), r(c, y.EquipMelee, o("Equip Melee", n(b.Three))), r(c, y.EquipThrowable, o("Equip Throwable", n(b.Four))), r(c, y.EquipNextWeap, o("Equip Next Weapon", l(S.Down))), r(c, y.EquipPrevWeap, o("Equip Previous Weapon", l(S.Up))), r(c, y.EquipLastWeap, o("Equip Last Weapon", n(b.Q))), r(c, y.StowWeapons, o("Stow Weapons", n(b.E))), r(c, y.EquipPrevScope, o("Equip Previous Scope", null)), r(c, y.EquipNextScope, o("Equip Next Scope", null)), r(c, y.UseBandage, o("Use Bandage", n(b.Seven))), r(c, y.UseHealthKit, o("Use Med Kit", n(b.Eight))), r(c, y.UseSoda, o("Use Soda", n(b.Nine))), r(c, y.UsePainkiller, o("Use Pills", n(b.Zero))), r(c, y.SwapWeapSlots, o("Switch Gun Slots", n(b.T))), r(c, y.ToggleMap, o("Toggle Map", n(b.M))), r(c, y.CycleUIMode, o("Toggle Minimap", n(b.V))), r(c, y.EmoteMenu, o("Emote Menu", s(_.Right))), r(c, y.TeamPingMenu, o("Team Ping Hold", n(b.C))), r(c, y.EquipOtherGun, o("Equip Other Gun", null)), r(c, y.Fullscreen, o("Full Screen", n(b.L))), r(c, y.HideUI, o("Hide UI", null)), r(c, y.TeamPingSingle, o("Team Ping Menu", null)), c),
            v = function() {
                function e(t, a) {
                    i(this, e), this.input = t, this.config = a, this.binds = [], this.boundKeys = {}, this.menuHovered = !1, this.loadBinds()
                }
                return m(e, [{
                    key: "toArray",
                    value: function() {
                        var e = new ArrayBuffer(2 * this.binds.length + 1),
                            t = new h.BitStream(e);
                        t.writeUint8(1);
                        for (var a = 0; a < this.binds.length; a++) {
                            var i = this.binds[a],
                                r = i ? i.type : 0,
                                o = i ? i.code : 0;
                            t.writeBits(3 & r, 2), t.writeUint8(255 & o)
                        }
                        var n = new Uint8Array(e, 0, t.byteIndex),
                            s = u.crc16(n),
                            l = new Uint8Array(n.length + 2);
                        return l.set(n), l[l.length - 2] = s >> 8 & 255, l[l.length - 1] = 255 & s, l
                    }
                }, {
                    key: "fromArray",
                    value: function(e) {
                        var t = new Uint8Array(e);
                        if (!t || t.length < 3) return !1;
                        var a = t[t.length - 2] << 8 | t[t.length - 1];
                        if (t = t.slice(0, t.length - 2), u.crc16(t) != a) return !1;
                        for (var i = new ArrayBuffer(t.length), r = new Uint8Array(i), o = 0; o < t.length; o++) r[o] = t[o];
                        var n = new h.BitStream(i),
                            s = n.readUint8();
                        this.clearAllBinds();
                        for (var l = 0; n.length - n.index >= 10;) {
                            var c = l++,
                                m = n.readBits(2),
                                p = n.readUint8();
                            c >= 0 && c < y.Count && m != x.None && this.setBind(c, 0 != m ? new f(m, p) : null)
                        }
                        return s < 1 && (this.upgradeBinds(s), this.saveBinds()), !0
                    }
                }, {
                    key: "toBase64",
                    value: function() {
                        return d.fromByteArray(this.toArray())
                    }
                }, {
                    key: "fromBase64",
                    value: function(e) {
                        var t = !1;
                        try {
                            t = this.fromArray(d.toByteArray(e))
                        } catch (e) {
                            console.log("Error", e)
                        }
                        return t
                    }
                }, {
                    key: "saveBinds",
                    value: function() {
                        this.config.set("binds", this.toBase64())
                    }
                }, {
                    key: "loadBinds",
                    value: function() {
                        this.fromBase64(this.config.get("binds") || "") || (this.loadDefaultBinds(), this.saveBinds())
                    }
                }, {
                    key: "upgradeBinds",
                    value: function(e) {
                        for (var t = [], a = 0; a < t.length; a++) {
                            for (var i = t[a], r = k[i].defaultValue, o = !1, n = 0; n < this.binds.length; n++)
                                if (this.binds[n] && this.binds[n].equals(r)) {
                                    o = !0;
                                    break
                                }
                            o || this.setBind(i, r)
                        }
                    }
                }, {
                    key: "clearAllBinds",
                    value: function() {
                        for (var e = 0; e < y.Count; e++) this.binds[e] = null;
                        this.boundKeys = {}
                    }
                }, {
                    key: "setBind",
                    value: function(e, t) {
                        if (t)
                            for (var a = 0; a < this.binds.length; a++) this.binds[a] && this.binds[a].equals(t) && (this.binds[a] = null);
                        var i = this.binds[e];
                        i && i.type == x.Key && (this.boundKeys[i.code] = null), this.binds[e] = t, t && t.type == x.Key && (this.boundKeys[t.code] = !0)
                    }
                }, {
                    key: "getBind",
                    value: function(e) {
                        return this.binds[e]
                    }
                }, {
                    key: "preventMenuBind",
                    value: function(e) {
                        return e && this.menuHovered && (2 == e.type || 3 == e.type)
                    }
                }, {
                    key: "isKeyBound",
                    value: function(e) {
                        return this.boundKeys[e]
                    }
                }, {
                    key: "isBindPressed",
                    value: function(e) {
                        var t = this.binds[e];
                        return !this.preventMenuBind(t) && t && this.input.isInputValuePressed(t)
                    }
                }, {
                    key: "isBindReleased",
                    value: function(e) {
                        var t = this.binds[e];
                        return !this.preventMenuBind(t) && t && this.input.isInputValueReleased(t)
                    }
                }, {
                    key: "isBindDown",
                    value: function(e) {
                        var t = this.binds[e];
                        return !this.preventMenuBind(t) && t && this.input.isInputValueDown(t)
                    }
                }, {
                    key: "loadDefaultBinds",
                    value: function() {
                        this.clearAllBinds();
                        for (var e = Object.keys(k), t = 0; t < e.length; t++) {
                            var a = e[t],
                                i = k[a];
                            this.setBind(parseInt(a), i.defaultValue)
                        }
                    }
                }]), e
            }(),
            z = function() {
                function e(t, a) {
                    var r = this;
                    i(this, e), this.input = t, this.inputBinds = a, p(".js-btn-keybind-restore").on("click", function() {
                        r.inputBinds.loadDefaultBinds(), r.inputBinds.saveBinds(), r.refresh()
                    })
                }
                return m(e, [{
                    key: "cancelBind",
                    value: function() {
                        this.input.captureNextInput(null)
                    }
                }, {
                    key: "refresh",
                    value: function() {
                        var e = this,
                            t = Object.keys(k),
                            a = this.inputBinds.binds,
                            i = p(".js-keybind-list");
                        i.empty();
                        for (var r = 0; r < t.length; r++) ! function(r) {
                            var o = t[r],
                                s = k[o],
                                l = a[o],
                                c = p("<a/>", {
                                    class: "btn-game-menu btn-darken btn-keybind-desc",
                                    text: s.name
                                }),
                                m = p("<div/>", {
                                    class: "btn-keybind-display",
                                    text: l ? l.toString() : ""
                                });
                            c.on("click", function(t) {
                                var a = p(t.target);
                                a.addClass("btn-keybind-desc-selected"), e.input.captureNextInput(function(t, i) {
                                    t.preventDefault(), t.stopPropagation();
                                    var r = [b.Control, b.Shift, b.Alt, b.Windows, b.ContextMenu, b.F1, b.F2, b.F3, b.F4, b.F5, b.F6, b.F7, b.F8, b.F9, b.F10, b.F11, b.F12];
                                    if (i.type == x.Key && -1 != r.indexOf(i.code)) return !1;
                                    if (a.removeClass("btn-keybind-desc-selected"), !i.equals(n(b.Escape))) {
                                        var s = i;
                                        i.equals(n(b.Backspace)) && (s = null), e.inputBinds.setBind(parseInt(o), s), e.inputBinds.saveBinds(), e.refresh()
                                    }
                                    return !0
                                })
                            }), i.append(p("<div/>", {
                                class: "ui-keybind-container"
                            }).append(c).append(m))
                        }(r);
                        p("#keybind-link").html(this.inputBinds.toBase64())
                    }
                }]), e
            }();
        e.exports = {
            InputBinds: v,
            InputBindUi: z
        }
    },
    d3da5587: function(e, t, a) {
        "use strict";

        function i(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function r(e) {
            return document.getElementById(e)
        }

        function o(e) {
            return 0 == e.button
        }

        function n(e) {
            return "which" in e ? 3 == e.which : 2 == e.button
        }

        function s(e) {
            return e && e.length > 4 ? "img/loot/" + e.slice(0, -4) + ".svg" : ""
        }

        function l(e, t, a) {
            if (e instanceof Array)
                for (var i = 0; i < e.length; i++) l(e[i], void 0 !== a ? t[a] : t, i);
            else if (e instanceof Object)
                for (var r = Object.keys(e), o = 0; o < r.length; o++) {
                    var n = r[o];
                    l(e[n], void 0 !== a ? t[a] : t, n)
                } else t[a] = e
        }

        function c(e, t, a) {
            if (t instanceof Array) {
                for (var i = [], r = 0; r < t.length; r++) i[r] = c(e[r], t[r], a);
                return i
            }
            if (t instanceof Object) {
                for (var o = {}, n = Object.keys(t), s = 0; s < n.length; s++) {
                    var l = n[s];
                    o[l] = c(e[l], t[l], a)
                }
                return o
            }
            return e != t || a
        }

        function m() {
            var e = [];
            for (var t in f.items) f.items.hasOwnProperty(t) && "scope" == f.items[t].type && e.push(t);
            return e
        }

        function p() {
            var e = [];
            for (var t in f.items)
                if (f.items.hasOwnProperty(t)) {
                    var a = f.items[t].type;
                    "heal" != a && "boost" != a && "ammo" != a || e.push(t)
                }
            return e
        }

        function d() {
            return ["chest", "helmet", "backpack"]
        }

        function h() {
            return [0, 1]
        }

        function u() {
            this.mobile = !1, this.touch = !1, this.pickupMessage = {
                message: "",
                ticker: 0,
                duration: 0,
                opacity: 0
            }, this.killFeed = [];
            for (var e = 0; e < C; e++) this.killFeed.push({
                text: "",
                color: "#000000",
                offset: 0,
                opacity: 0,
                ticker: Number.MAX_VALUE
            });
            this.weapons = [];
            for (var t = 0; t < f.WeaponSlot.Count; t++) this.weapons[t] = {
                slot: t,
                name: "",
                ammo: 0,
                equipped: !1,
                selectable: !1,
                opacity: 0,
                width: 0,
                ticker: 0,
                bind: D[t],
                bindStr: ""
            };
            this.ammo = {
                current: 0,
                remaining: 0,
                displayCurrent: !1,
                displayRemaining: !1
            }, this.interaction = {
                type: E.None,
                text: "",
                key: "",
                usable: !1
            }, this.scopes = [];
            for (var a = m(), i = 0; i < a.length; i++) this.scopes.push({
                type: a[i],
                visible: !1,
                equipped: !1,
                selectable: !1
            });
            this.loot = [];
            for (var r = p(), o = 0; o < r.length; o++) this.loot.push({
                type: r[o],
                count: 0,
                maximum: 0,
                selectable: !1,
                width: 0,
                ticker: 0
            });
            this.gear = [];
            for (var n = d(), s = 0; s < n.length; s++) this.gear.push({
                type: n[s],
                item: "",
                selectable: !1,
                width: 0,
                ticker: 0,
                rot: 0
            });
            this.perks = [];
            for (var l = h(), c = 0; c < l.length; c++) this.perks.push({
                type: l[c],
                subtype: "",
                width: 0,
                ticker: 0,
                pulse: !1,
                cooldown: !1,
                cooldownPct: 0,
                cooldownCount: "",
                charges: 0
            });
            this.health = 100, this.boost = 0, this.downed = !1
        }

        function g(e, t) {
            var a = this;
            this.localization = e, this.inputBinds = t, this.oldState = new u, this.newState = new u, this.frameCount = 0, this.dom = {
                debugButton: r("ui-debug-button"),
                emoteButton: r("ui-emote-button"),
                menu: {
                    touchStyles: r("btn-touch-styles"),
                    aimLine: r("btn-game-aim-line")
                },
                pickupMessage: r("ui-pickup-message"),
                killFeed: {
                    div: r("ui-killfeed-contents"),
                    lines: []
                },
                weapons: [],
                ammo: {
                    current: r("ui-current-clip"),
                    remaining: r("ui-remaining-ammo"),
                    reloadButton: r("ui-reload-button-container")
                },
                interaction: {
                    div: r("ui-interaction"),
                    key: r("ui-interaction-press"),
                    text: r("ui-interaction-description")
                },
                health: {
                    inner: r("ui-health-actual"),
                    depleted: r("ui-health-depleted")
                },
                boost: {
                    div: r("ui-boost-counter"),
                    bars: [r("ui-boost-counter-0").firstElementChild, r("ui-boost-counter-1").firstElementChild, r("ui-boost-counter-2").firstElementChild, r("ui-boost-counter-3").firstElementChild]
                },
                scopes: [],
                loot: [],
                gear: [],
                perks: []
            };
            for (var i = 0; i < C; i++) {
                var s = "ui-killfeed-" + i,
                    l = r(s);
                if (!l) {
                    l = document.createElement("div"), l.id = s, l.classList.add("killfeed-div");
                    var c = document.createElement("div");
                    c.classList.add("killfeed-text"), l.appendChild(c), this.dom.killFeed.div.appendChild(l)
                }
                this.dom.killFeed.lines.push({
                    line: l,
                    text: l.firstElementChild
                })
            }
            for (var g = 0; g < 4; g++) {
                var y = r("ui-weapon-id-" + (g + 1)),
                    w = {
                        div: y,
                        name: y.getElementsByClassName("ui-weapon-name")[0],
                        number: y.getElementsByClassName("ui-weapon-number")[0],
                        image: y.getElementsByClassName("ui-weapon-image")[0],
                        ammo: y.getElementsByClassName("ui-weapon-ammo-counter")[0]
                    };
                this.dom.weapons.push(w)
            }
            for (var x = m(), b = 0; b < x.length; b++) {
                var _ = x[b],
                    S = {
                        scopeType: _,
                        div: r("ui-scope-" + _)
                    };
                this.dom.scopes.push(S)
            }
            for (var k = p(), v = 0; v < k.length; v++) {
                var z = k[v],
                    M = r("ui-loot-" + z);
                if (M) {
                    var P = {
                        lootType: z,
                        div: M,
                        count: M.getElementsByClassName("ui-loot-count")[0],
                        image: M.getElementsByClassName("ui-loot-image")[0],
                        overlay: M.getElementsByClassName("ui-loot-overlay")[0]
                    };
                    this.dom.loot.push(P)
                }
            }
            for (var I = d(), E = 0; E < I.length; E++) {
                var D = I[E],
                    O = r("ui-armor-" + D),
                    B = {
                        gearType: D,
                        div: O,
                        level: O.getElementsByClassName("ui-armor-level")[0],
                        image: O.getElementsByClassName("ui-armor-image")[0]
                    };
                this.dom.gear.push(B)
            }
            for (var L = h(), R = 0; R < L.length; R++) {
                var F = L[R],
                    j = r("ui-perk-" + F),
                    q = {
                        perkType: F,
                        div: j,
                        divTitle: j.getElementsByClassName("tooltip-title")[0],
                        divDesc: j.getElementsByClassName("tooltip-desc")[0],
                        image: j.getElementsByClassName("ui-armor-image")[0],
                        divCooldown: j.getElementsByClassName("ui-armor-counter-inner")[0],
                        divCounter: j.getElementsByClassName("ui-ability-cooldown")[0]
                    };
                this.dom.perks.push(q)
            }
            this.uiEvents = [], this.eventListeners = [];
            var N = function(e, t, i) {
                a.eventListeners.push({
                    event: e,
                    elem: t,
                    fn: i
                }), t.addEventListener(e, i)
            };
            this.itemActions = [];
            for (var V = function(e, t, i, r) {
                    a.itemActions.push({
                        action: e,
                        type: t,
                        data: i,
                        div: r,
                        actionQueued: !1,
                        actionTime: 0
                    })
                }, G = 0; G < this.dom.weapons.length; G++) V("use", "weapon", G, this.dom.weapons[G].div), V("drop", "weapon", G, this.dom.weapons[G].div);
            for (var U = 0; U < this.dom.scopes.length; U++) {
                var H = this.dom.scopes[U];
                V("use", "scope", H.scopeType, H.div), "1xscope" != H.scopeType && V("drop", "loot", H.scopeType, H.div)
            }
            for (var W = 0; W < this.dom.loot.length; W++) {
                var K = this.dom.loot[W],
                    Z = f.items[K.lootType];
                "heal" != Z.type && "boost" != Z.type || V("use", "loot", K.lootType, K.div), V("drop", "loot", K.lootType, K.div)
            }
            for (var X = 0; X < this.dom.gear.length; X++) {
                var Y = this.dom.gear[X];
                "backpack" != Y.gearType && V("drop", "loot", Y.gearType, Y.div)
            }
            for (var J = 0; J < this.itemActions.length; J++) ! function(e) {
                var t = a.itemActions[e];
                N("mousedown", t.div, function(e) {
                    ("use" == t.action && o(e) || "drop" == t.action && n(e)) && (e.stopPropagation(), t.actionQueued = !0)
                }), N("mouseup", t.div, function(e) {
                    t.actionQueued && ("use" == t.action && o(e) || "drop" == t.action && n(e)) && (e.stopPropagation(), a.pushAction(t), t.actionQueued = !1)
                }), N("touchstart", t.div, function(e) {
                    e.changedTouches.length > 0 && (e.stopPropagation(), t.actionQueued = !0, t.actionTime = (new Date).getTime(), t.touchOsId = e.changedTouches[0].identifier)
                }), N("touchend", t.div, function(e) {
                    (new Date).getTime() - t.actionTime < A && t.actionQueued && "use" == t.action && a.pushAction(t), t.actionQueued = !1
                }), N("touchcancel", t.div, function(e) {
                    t.actionQueued = !1
                })
            }(J);
            var Q = document.getElementById("cvs");
            this.clearQueuedItemActions = function() {
                for (var e = 0; e < a.itemActions.length; e++) a.itemActions[e].actionQueued = !1;
                T.touch && Q.focus()
            }, window.addEventListener("mouseup", this.clearQueuedItemActions), window.addEventListener("focus", this.clearQueuedItemActions)
        }

        function y() {
            var e = function(e, t) {
                r(e).getElementsByClassName("ui-loot-image")[0].src = t
            };
            e("ui-loot-bandage", "img/loot/loot-medical-bandage.svg"), e("ui-loot-healthkit", "img/loot/loot-medical-healthkit.svg"), e("ui-loot-soda", "img/loot/loot-medical-soda.svg"), e("ui-loot-painkiller", "img/loot/loot-medical-pill.svg"), e("ui-loot-9mm", "img/loot/loot-ammo-box.svg"), e("ui-loot-12gauge", "img/loot/loot-ammo-box.svg"), e("ui-loot-762mm", "img/loot/loot-ammo-box.svg"), e("ui-loot-556mm", "img/loot/loot-ammo-box.svg"), e("ui-loot-50AE", "img/loot/loot-ammo-box.svg"), e("ui-loot-308sub", "img/loot/loot-ammo-box.svg"), e("ui-loot-flare", "img/loot/loot-ammo-box.svg"), e("ui-loot-45acp", "img/loot/loot-ammo-box.svg"), r("mag-glass-white").src = "img/gui/mag-glass.svg", r("ui-minimize-img").src = "img/gui/minimize.svg"
        }
        var w, x = a("6b42806d"),
            f = a("989ad62a"),
            b = a("ceee80d9"),
            _ = f.Input,
            S = f.Action,
            k = a("10899aea"),
            v = a("300e2704"),
            z = a("1901e2d9"),
            M = a("c2a798c8"),
            T = a("ce29f17f"),
            P = (a("26be8056"), f.DamageType),
            I = v.PickupMsgType,
            C = 6,
            A = 750,
            E = {
                None: 0,
                Cancel: 1,
                Loot: 2,
                Revive: 3,
                Object: 4
            },
            D = (w = {}, i(w, f.WeaponSlot.Primary, _.EquipPrimary), i(w, f.WeaponSlot.Secondary, _.EquipSecondary), i(w, f.WeaponSlot.Melee, _.EquipMelee), i(w, f.WeaponSlot.Throwable, _.EquipThrowable), w);
        g.prototype = {
            n: function() {
                for (var e = 0; e < this.eventListeners.length; e++) {
                    var t = this.eventListeners[e];
                    t.elem.removeEventListener(t.event, t.fn)
                }
                window.removeEventListener("focus", this.clearQueuedItemActions), window.removeEventListener("mouseup", this.clearQueuedItemActions)
            },
            pushAction: function(e) {
                this.uiEvents.push({
                    action: e.action,
                    type: e.type,
                    data: e.data
                })
            },
            flushInput: function() {
                this.uiEvents = []
            },
            c: function(e, t, a, i, r, o, n) {
                var s = this.newState;
                if (s.mobile = T.mobile, s.touch = T.touch, s.touch)
                    for (var m = 0; m < this.itemActions.length; m++) {
                        var p = this.itemActions[m];
                        if (p.actionQueued && "drop" == p.action) {
                            var d = (new Date).getTime(),
                                h = d - p.actionTime;
                            h >= A && (this.pushAction(p), p.actionTime = d)
                        }
                    }
                s.pickupMessage.ticker += e;
                var u = s.pickupMessage.ticker,
                    g = s.pickupMessage.duration;
                s.pickupMessage.opacity = k.smoothstep(u, 0, .2) * (1 - k.smoothstep(u, g, g + .2));
                for (var y = 0, w = 0; w < s.killFeed.length; w++) {
                    var b = s.killFeed[w];
                    b.ticker += e;
                    var _ = b.ticker;
                    b.offset = y, b.opacity = k.smoothstep(_, 0, .25) * (1 - k.smoothstep(_, 6, 6.5)), y += k.min(_ / .25, 1), T.mobile && (b.opacity = _ < 6.5 ? 1 : 0)
                }
                s.health = t.ie.dead ? 0 : k.max(t.re.health, 1), s.boost = t.re.boost, s.downed = t.ie.downed;
                var v = E.None,
                    P = null,
                    I = !0;
                if (!t.ie.dead) {
                    for (var C = null, D = 0, O = o.pe.m(), B = 0; B < O.length; B++) {
                        var L = O[B];
                        if (L.active && !L.dead && z.sameLayer(L.layer, t.layer)) {
                            var R = L.getInteraction();
                            if (R) {
                                var F = x.intersectCircle(L.collider, t.ie.pos, R.rad + t.rad);
                                F && F.pen >= D && (C = L, D = F.pen)
                            }
                        }
                    }
                    C && (v = E.Object, P = C, I = !0);
                    var j = r.ta();
                    if (j && !t.ie.downed) {
                        var q = f.items[j.name],
                            N = t.sa(f.WeaponSlot.Primary),
                            V = t.sa(f.WeaponSlot.Secondary),
                            G = N && V,
                            U = "gun" != q.type || !G || "gun" == t.na(),
                            H = !1;
                        (s.touch && "helmet" == q.type && t.ia() == q.level && j.name != t.ie.helmet || "chest" == q.type && t.ra() == q.level && j.name != t.ie.chest) && (H = !0), (U || T.uiLayout == T.UiLayout.Sm) && (v = E.Loot, P = j), I = U && (!s.touch || "gun" == q.type || "melee" == q.type || "skin" == q.type || H)
                    }
                    if (t.action.type == S.None && !t.ie.downed)
                        for (var W = i.ne(t.__id).teamId, K = i.Se.m(), Z = 0; Z < K.length; Z++) {
                            var X = K[Z];
                            if (X.active) {
                                var Y = i.ne(X.__id).teamId;
                                if (X.__id != t.__id && W == Y && X.ie.downed && !X.ie.dead && X.action.type != S.Revive) {
                                    var J = M.length(M.sub(X.ie.pos, t.ie.pos));
                                    J < f.player.reviveMaxRange && z.sameLayer(X.layer, t.layer) && (v = E.Revive, P = t, I = !0)
                                }
                            }
                        }
                    t.action.type == S.Revive && t.ie.downed && (v = E.None, P = null, I = !1), t.action.type != S.UseItem && (t.action.type != S.Revive || t.ie.downed) || a || (v = E.Cancel, P = null, I = !0)
                }
                s.interaction.type = v, s.interaction.text = this.getInteractionText(v, P), s.interaction.key = this.getInteractionKey(v), s.interaction.usable = I && !a;
                for (var Q = 0; Q < t.re.weapons.length; Q++) {
                    var $ = t.re.weapons[Q],
                        ee = s.weapons[Q];
                    ee.name = $.name, ee.ammo = $.ammo, Q == f.WeaponSlot.Throwable && (ee.ammo = t.re.inventory[$.name] || 0);
                    var te = ee.equipped;
                    ee.equipped = Q == t.re.curWeapIdx, ee.selectable = ("" != $.name || 0 == Q || 1 == Q) && !a;
                    var ae = ee.equipped ? 1 : .6,
                        ie = ae - ee.opacity,
                        re = k.min(ie, k.sign(ie) * e / .15);
                    ee.opacity = k.clamp(ee.opacity + re, 0, 1), T.mobile && (ee.opacity = ae), ee.ticker += e, ee.equipped && te || (ee.ticker = 0), this.frameCount < 2 && (ee.ticker = 1);
                    var oe = k.min(ee.ticker / .09, Math.PI),
                        ne = Math.sin(oe);
                    ee.width = ne < .001 ? 0 : ne, T.mobile && (ee.width = 0);
                    var se = n.getBind(ee.bind);
                    ee.bindStr = se ? se.toString() : ""
                }
                var le = s.weapons[t.re.curWeapIdx],
                    ce = f.items[le.name],
                    me = le.ammo,
                    pe = "throwable" == ce.type ? 0 : t.re.inventory[ce.ammo];
                s.ammo.current = me, s.ammo.remaining = pe, s.ammo.displayCurrent = "melee" != ce.type, s.ammo.displayRemaining = pe > 0;
                for (var de = 0; de < s.scopes.length; de++) {
                    var he = s.scopes[de];
                    he.visible = t.re.inventory[he.type] > 0, he.equipped = he.visible && t.re.scope == he.type, he.selectable = he.visible && !a
                }
                for (var ue = t.oa(), ge = 0; ge < s.loot.length; ge++) {
                    var ye = s.loot[ge],
                        we = ye.count;
                    ye.count = t.re.inventory[ye.type] || 0, ye.maximum = f.bagSizes[ye.type][ue], ye.selectable = ye.count > 0 && !a, ye.count > we && (ye.ticker = 0), this.frameCount < 2 && (ye.ticker = 1), ye.ticker += e;
                    var xe = k.min(ye.ticker / .05, Math.PI),
                        fe = Math.sin(xe);
                    ye.width = fe < .001 ? 0 : fe, T.mobile && (ye.width = 0)
                }
                for (var be = 0; be < s.gear.length; be++) {
                    var _e = s.gear[be],
                        Se = "";
                    "chest" == _e.type ? Se = t.ie.chest : "helmet" == _e.type ? Se = t.ie.helmet : "backpack" == _e.type && "backpack00" == (Se = t.ie.backpack) && (Se = "");
                    var ke = _e.item;
                    _e.item = Se, _e.selectable = "" != Se && !a, ke != _e.item && (_e.ticker = 0), this.frameCount < 2 && (_e.ticker = 1), _e.ticker += e;
                    var ve = k.min(_e.ticker / .05, Math.PI),
                        ze = Math.sin(ve);
                    _e.width = ze < .001 ? 0 : ze, T.mobile && (_e.width = 0)
                }
                for (var Me = 0; Me < s.perks.length; Me++) {
                    var Te = s.perks[Me],
                        Pe = t.ie.role;
                    if (1 == Te.type) {
                        if (3 != Pe) break;
                        Pe = 4
                    }
                    Te.selectable = 1 == Te.type && !a, Te.cooldown = 1 == Te.type;
                    var Ie = Te.subtype;
                    Te.subtype = Pe, Ie != Te.subtype && (Te.ticker = 0), this.frameCount < 2 && (Te.ticker = 1), Te.ticker += e;
                    var Ce = k.min(Te.ticker / .05, Math.PI),
                        Ae = Math.sin(Ce);
                    Te.width = Ae < .001 ? 0 : Ae, T.mobile && (Te.width = 0), Te.pulse = !a && !T.mobile && Te.ticker < 4
                }
                var Ee = c(this.oldState, this.newState, 0 == this.frameCount++);
                this.render(Ee, this.newState), l(this.newState, this.oldState)
            },
            render: function(e, t) {
                var a = this.dom;
                e.mobile, e.touch && (a.interaction.key.style.backgroundImage = t.touch ? "url('img/gui/tap.svg')" : "none", t.touch && (a.interaction.key.innerHTML = ""), a.menu.touchStyles.style.display = t.touch ? "flex" : "none", a.menu.aimLine.style.display = t.touch ? "block" : "none", a.ammo.reloadButton.style.display = t.touch ? "block" : "none", a.emoteButton.style.display = t.touch ? "block" : "none", a.debugButton && (a.debugButton.style.display = t.touch ? "block" : "none")), e.pickupMessage.message && (a.pickupMessage.innerHTML = t.pickupMessage.message), e.pickupMessage.opacity && (a.pickupMessage.style.opacity = t.pickupMessage.opacity);
                for (var i = 0; i < e.killFeed.length; i++) {
                    var r = e.killFeed[i],
                        o = a.killFeed.lines[i],
                        n = t.killFeed[i];
                    if (r.text && (o.text.innerHTML = n.text), r.offset) {
                        var l = T.uiLayout != T.UiLayout.Sm || T.tablet ? 35 : 15;
                        o.line.style.top = Math.floor(n.offset * l) + "px"
                    }
                    r.color && (o.text.style.color = n.color), r.opacity && (o.line.style.opacity = n.opacity)
                }
                if (e.health || e.downed) {
                    for (var c = [{
                            health: 100,
                            color: [179, 179, 179]
                        }, {
                            health: 100,
                            color: [255, 255, 255]
                        }, {
                            health: 75,
                            color: [255, 255, 255]
                        }, {
                            health: 75,
                            color: [255, 158, 158]
                        }, {
                            health: 25,
                            color: [255, 82, 82]
                        }, {
                            health: 25,
                            color: [255, 0, 0]
                        }, {
                            health: 0,
                            color: [255, 0, 0]
                        }], m = 0, p = Math.ceil(t.health); c[m].health > p && m < c.length - 1;) m++;
                    var d = c[k.max(m - 1, 0)],
                        h = c[m],
                        u = k.delerp(t.health, d.health, h.health),
                        g = [Math.floor(k.lerp(u, d.color[0], h.color[0])), Math.floor(k.lerp(u, d.color[1], h.color[1])), Math.floor(k.lerp(u, d.color[2], h.color[2]))];
                    t.downed && (g = [255, 0, 0]), a.health.inner.style.backgroundColor = "rgba(" + g[0] + ", " + g[1] + ", " + g[2] + ", 1.0)", a.health.inner.style.width = t.health + "%", a.health.depleted.style.width = t.health + "%", a.health.depleted.style.display = t.health > 0 ? "block" : "none", t.health > 25 ? a.health.inner.classList.remove("ui-bar-danger") : a.health.inner.classList.add("ui-bar-danger")
                }
                if (e.boost) {
                    for (var y = f.player.boostBreakpoints, w = 0, x = 0; x < y.length; x++) w += y[x];
                    for (var b = t.boost / 100, _ = 0; _ < a.boost.bars.length; _++) {
                        var S = y[_] / w,
                            v = k.clamp(b / S, 0, 1);
                        b = k.max(b - S, 0), a.boost.bars[_].style.width = 100 * v + "%"
                    }
                    a.boost.div.style.opacity = 0 == t.boost ? 0 : 1
                }
                e.interaction.type && (a.interaction.div.style.display = t.interaction.type == E.None ? "none" : "flex"), e.interaction.text && (a.interaction.text.innerHTML = t.interaction.text), e.interaction.key && (a.interaction.key.innerHTML = t.touch ? "" : t.interaction.key, a.interaction.key.className = a.interaction.key.innerHTML.length > 1 ? "ui-interaction-small" : "ui-interaction-large"), e.interaction.usable && (a.interaction.key.style.display = t.interaction.usable ? "block" : "none");
                for (var z = 0; z < e.weapons.length; z++) {
                    var M = e.weapons[z],
                        P = a.weapons[z],
                        I = t.weapons[z];
                    if (M.name) {
                        var C = "" != I.name,
                            A = "",
                            D = "",
                            O = !1,
                            B = 0,
                            L = 1;
                        if (C) {
                            var R = f.items[I.name];
                            A = this.localization.translate("game-hud-" + I.name) || this.localization.translate("game-" + I.name), D = R.lootImg.sprite, O = R.isDual && T.uiLayout == T.UiLayout.Sm || R.lootImg.rot, R.lootImg.rot && (B = 180 * R.lootImg.rot / Math.PI), R.lootImg.mirror && (L = -1)
                        }
                        P.name.innerHTML = A, P.image.src = s(D), P.image.style.display = C ? "inline" : "none", P.image.style.transform = O ? "rotate(" + B + "deg) scaleX(" + L + ")" : ""
                    }
                    if (M.equipped && (P.div.style.backgroundColor = I.equipped ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"), M.selectable && (P.div.style.pointerEvents = "" != I.name || I.selectable ? "auto" : "none"), M.width) {
                        var F = k.lerp(I.width, 83.33, 100);
                        P.div.style.width = F + "%"
                    }
                    M.opacity && (P.div.style.opacity = I.opacity), M.ammo && P.ammo && (P.ammo.innerHTML = I.ammo, P.ammo.style.display = I.ammo > 0 ? "block" : "none"), M.bindStr && (P.number.innerHTML = I.bindStr[0] || "")
                }
                if (e.ammo.current) {
                    var j = t.ammo.current;
                    a.ammo.current.innerHTML = j, a.ammo.current.style.color = j > 0 ? "white" : "red"
                }
                if (e.ammo.remaining) {
                    var q = t.ammo.remaining;
                    a.ammo.remaining.innerHTML = q, a.ammo.remaining.style.color = q > 0 ? "white" : "red"
                }
                e.ammo.displayCurrent && (a.ammo.current.style.opacity = t.ammo.displayCurrent ? 1 : 0), e.ammo.displayRemaining && (a.ammo.remaining.style.opacity = t.ammo.displayRemaining ? 1 : 0, a.ammo.reloadButton.style.opacity = t.ammo.displayRemaining ? 1 : 0);
                for (var N = 0; N < e.scopes.length; N++) {
                    var V = e.scopes[N],
                        G = a.scopes[N],
                        U = t.scopes[N];
                    V.visible && (G.div.style.display = U.visible ? T.mobile && !T.tablet ? "flex" : "inline-block" : "none"), V.equipped && (U.equipped ? (G.div.classList.add("ui-zoom-active"), G.div.classList.remove("ui-zoom-inactive")) : (G.div.classList.remove("ui-zoom-active"), G.div.classList.add("ui-zoom-inactive"))), V.selectable && (G.div.style.pointerEvents = U.selectable ? "auto" : "none")
                }
                for (var H = 0; H < e.loot.length; H++) {
                    var W = e.loot[H],
                        K = a.loot[H],
                        Z = t.loot[H];
                    if (W && K && Z) {
                        if ((W.count || W.maximum) && (K.count.innerHTML = Z.count, K.div.style.opacity = f.items[K.lootType].special && 0 == Z.count ? 0 : Z.count > 0 ? 1 : .25, K.div.style.color = Z.count == Z.maximum ? "#ff9900" : "#ffffff"), W.width) {
                            var X = 1 + .33 * Z.width,
                                Y = "scale(" + X + ", " + X + ")";
                            K.image.style.transform = Y, K.overlay && (K.overlay.style.transform = Y)
                        }
                        W.selectable && (K.div.style.pointerEvents = Z.selectable ? "auto" : "none")
                    }
                }
                for (var J = 0; J < e.gear.length; J++) {
                    var Q = e.gear[J],
                        $ = a.gear[J],
                        ee = t.gear[J];
                    if (Q.item) {
                        var te = "" != ee.item ? f.items[ee.item] : null,
                            ae = te ? te.level : 0;
                        $.div.style.display = te ? "block" : "none", $.level.innerHTML = this.localization.translate("game-level-" + ae), $.level.style.color = ae >= 3 ? "#ff9900" : "#ffffff", $.image.src = te ? s(te.lootImg.sprite) : ""
                    }
                    if (Q.selectable && ($.div.style.pointerEvents = ee.selectable ? "auto" : "none"), Q.width) {
                        var ie = 1 + .33 * ee.width;
                        $.image.style.transform = "scale(" + ie + ", " + ie + ")";
                        var re = "" != ee.item ? f.items[ee.item] : null;
                        re && re.lootImg.rot && ($.image.style.transform = "scale(" + ie + ", " + ie + ") rotate(" + 180 * re.lootImg.rot / Math.PI + "deg)")
                    }
                }
                for (var oe = 0; oe < e.perks.length; oe++) {
                    var ne = e.perks[oe],
                        se = a.perks[oe],
                        le = t.perks[oe];
                    if (ne.subtype) {
                        var ce = le.subtype;
                        se.divTitle.innerHTML = this.localization.translate("game-perk-title-" + ce), se.divDesc.innerHTML = this.localization.translate("game-perk-desc-" + ce), se.div.style.display = ce > 0 ? "block" : "none", se.image.src = ce > 0 ? "img/gui/perk-" + ce + ".svg" : ""
                    }
                    if (ne.pulse && (le.pulse ? se.div.classList.add("ui-perk-pulse") : se.div.classList.remove("ui-perk-pulse")), ne.width) {
                        var me = 1 + .33 * le.width;
                        se.image.style.transform = "scale(" + me + ", " + me + ")"
                    }
                }
            },
            displayPickupMessage: function(e) {
                var t = this.newState.pickupMessage;
                t.message = this.getPickupMessageText(e), t.ticker = 0, t.duration = 3
            },
            addKillFeed: function(e, t) {
                var a = this.newState.killFeed,
                    i = a[a.length - 1];
                i.text = e, i.color = t, i.ticker = 0, a.sort(function(e, t) {
                    return e.ticker - t.ticker
                })
            },
            getKillFeedText: function(e, t, a, i, r) {
                switch (i) {
                    case P.Player:
                        return t + " " + this.localization.translate(r ? "game-knocked-out" : "game-killed") + " " + e + " " + this.localization.translate("game-with") + " " + this.localization.translate("game-" + a);
                    case P.Bleeding:
                        var o = this.localization.translate(t ? "game-finally-killed" : "game-finally-bled-out");
                        return t ? t + " " + o + " " + e : e + " " + o;
                    case P.Gas:
                        var n = void 0,
                            s = void 0;
                        return r ? (n = this.localization.translate("game-the-red-zone"), s = this.localization.translate("game-knocked-out")) : s = this.localization.translate(t ? "game-finally-killed" : "game-died-outside"), n ? n + " " + s + " " + e : e + " " + s;
                    case P.Airdrop:
                        var l = b.Defs[a],
                            c = this.localization.translate("game-the-air-drop"),
                            m = void 0;
                        return m = r ? this.localization.translate("game-knocked-out") : l && !l.airdropCrate ? this.localization.translate("game-killed") : this.localization.translate("game-crushed"), c + " " + m + " " + e;
                    case P.Airstrike:
                        var p = this.localization.translate(r ? "game-knocked-out" : "game-killed");
                        return t ? t + " " + p + " " + e + " " + this.localization.translate("game-with") + " " + this.localization.translate("game-an-air-strike") : this.localization.translate("game-the-air-strike") + " " + p + " " + e;
                    default:
                        return ""
                }
            },
            getKillFeedColor: function(e, t, a, i) {
                return i ? "#efeeee" : e == t ? "#d1777c" : e == a ? "#00bfff" : "#efeeee"
            },
            getAssignRoleKillFeedText: function(e, t, a) {
                switch (e) {
                    case f.Role.FactionLeader:
                        var i = 1 == a ? this.localization.translate("game-red-leader") : this.localization.translate("game-blue-leader");
                        return t + " " + this.localization.translate("game-promoted-to") + " " + i + "!";
                    case f.Role.Lieutenant:
                        var r = this.localization.translate("game-lieutenant");
                        return t + " " + this.localization.translate("game-promoted-to") + " " + r + "!";
                    default:
                        return ""
                }
            },
            getRoleKillFeedText: function(e, t, a, i, r) {
                var o = "undefined";
                switch (r) {
                    case f.Role.FactionLeader:
                        o = 1 == t ? this.localization.translate("game-red-leader") : this.localization.translate("game-blue-leader");
                        break;
                    case f.Role.WoodsKing:
                        o = this.localization.translate("game-woods-king")
                }
                return a == P.Player ? e + " " + this.localization.translate(i ? "game-knocked-out" : "game-killed") + " " + o + "!" : o + " " + this.localization.translate(i ? "game-is-down" : "game-is-dead") + "!"
            },
            getPickupMessageText: function(e) {
                var t, a = (t = {}, i(t, I.Full, "game-not-enough-space"), i(t, I.AlreadyOwned, "game-item-already-owned"), i(t, I.AlreadyEquipped, "game-item-already-equipped"), i(t, I.BetterItemEquipped, "game-better-item-equipped"), i(t, I.GunCannotFire, "game-gun-cannot-fire"), t),
                    r = a[e] || a[I.Full];
                return this.localization.translate(r)
            },
            getInteractionText: function(e, t) {
                switch (e) {
                    case E.None:
                        return "";
                    case E.Cancel:
                        return this.localization.translate("game-cancel");
                    case E.Revive:
                        return this.localization.translate("game-revive-teammate");
                    case E.Object:
                        var a = t.getInteraction();
                        return this.localization.translate(a.action) + " " + this.localization.translate(a.object);
                    case E.Loot:
                        var i = this.localization.translate("game-" + t.name) || t.name;
                        return t.count > 1 && (i += " (" + t.count + ")"), i;
                    default:
                        return ""
                }
            },
            getInteractionKey: function(e) {
                var t = null;
                switch (e) {
                    case E.Cancel:
                        t = this.inputBinds.getBind(_.Cancel);
                        break;
                    case E.Loot:
                        t = this.inputBinds.getBind(_.Loot) || this.inputBinds.getBind(_.Interact);
                        break;
                    case E.Object:
                        t = this.inputBinds.getBind(_.Use) || this.inputBinds.getBind(_.Interact);
                        break;
                    case E.Revive:
                        t = this.inputBinds.getBind(_.Revive) || this.inputBinds.getBind(_.Interact);
                        break;
                    case E.None:
                    default:
                        t = this.inputBinds.getBind(_.Use)
                }
                return t ? t.toString() : "<Unbound>"
            }
        }, e.exports = {
            _t: g,
            loadStaticDomImages: y
        }
    },
    d49cd95c: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t, a) {
            e.moveTo(t.x, t.y), e.lineTo(a.x, a.y)
        }

        function o(e, t) {
            var a = t[0];
            e.moveTo(a.x, a.y);
            for (var i = 1; i < t.length; ++i) a = t[i], e.lineTo(a.x, a.y);
            e.closePath()
        }

        function n(e, t, a) {
            var i = t.max.x - t.min.x,
                r = t.max.y - t.min.y,
                n = x.max(t.offsetDist, .001),
                s = t.roughness,
                l = Math.round(i * s / n),
                c = Math.round(r * s / n),
                m = h.seededRand(a);
            o(e, d.generateJaggedAabbPoints(t, l, c, n, m))
        }

        function s() {
            this._ = !1, this.Ve = !1, this.display = {
                ground: new l.Graphics
            }, this.mapName = "", this.mapDef = {}, this.factionMode = !1, this.potatoMode = !1, this.seed = 0, this.width = 0, this.height = 0, this.terrain = {}, this.mapData = {
                places: [],
                objects: [],
                groundPatches: []
            }, this.mapLoaded = !1, this.mapTexture = null, this.pe = new g.Pool(_), this.Mt = new g.Pool(b), this.Tt = new g.Pool(S), this.deadObstacleIds = [], this.deadCeilingIds = [], this.solvedPuzzleIds = [], this.terrain = null, this.cameraEmitter = null, this.da = 0, this.Ft = !1, this.H = !1
        }
        var l = a("8b1dfb45"),
            c = a("34e32c48"),
            m = a("6b42806d"),
            p = a("ceee80d9"),
            d = (a("7b5bbf6e"), a("e100c355")),
            h = a("1901e2d9"),
            u = a("c2a798c8"),
            g = a("753d6e4b"),
            y = a("119e8c4c"),
            w = a("ce29f17f"),
            x = (a("26be8056"), a("300e2704"), a("10899aea")),
            f = a("989ad62a"),
            b = a("33375c30"),
            _ = (a("af8ba00f"), a("c347b8dd"), a("0c8ffd27")),
            S = a("ce089fd5"),
            k = a("4cddfd71"),
            v = function e(t, a) {
                i(this, e), this.type = t, this.river = a || null
            };
        s.prototype = {
            n: function() {
                this.mapTexture && this.mapTexture.destroy(!0), this.display.ground.destroy({
                    children: !0
                }), this.cameraEmitter && this.cameraEmitter.stop(), this.cameraEmitter = null
            },
            resize: function(e, t) {
                this.renderMap(e, t)
            },
            loadMap: function(e, t, a, i) {
                this.mapName = e.mapName;
                var r = k[this.mapName];
                if (!r) throw new Error("Failed loading mapDef " + this.mapName);
                this.mapDef = h.cloneDeep(r), this.factionMode = !!this.mapDef.gameMode.factionMode, this.potatoMode = !!this.mapDef.gameMode.potatoMode, this.seed = e.seed, this.width = e.width, this.height = e.height, this.terrain = d.generateTerrain(this.width, this.height, e.shoreInset, e.grassInset, e.rivers, this.seed), this.mapData = {
                    places: e.places,
                    objects: e.objects,
                    groundPatches: e.groundPatches
                }, this.mapLoaded = !0;
                var o = this.mapDef.biome.particles.camera;
                if (o) {
                    var n = u.normalize(u.create(1, -1));
                    this.cameraEmitter = i.addEmitter(o, u.create(0, 0), n, 1, 99999, Number.MAX_VALUE)
                }
                this.display.ground.clear(), this.renderTerrain(this.display.ground, 2 / t.ppu, a)
            },
            getMapDef: function() {
                if (!this.mapLoaded) throw new Error("Map not loaded!");
                return this.mapDef
            },
            getMapTexture: function() {
                return this.mapTexture
            },
            c: function(e, t, a, i, r, o, n, s, l, c) {
                this._ = !0, this.Ve = !0;
                for (var m = this.pe.m(), d = 0; d < m.length; d++) {
                    var h = m[d];
                    h.active && (h.c(e, this, a, i, r, t, n), h.render(s, c))
                }
                for (var g = this.Mt.m(), w = 0; w < g.length; w++) {
                    var f = g[w];
                    f.active && (f.c(e, this, i, r, o, t, n, s), f.render(s, c))
                }
                for (var b = this.Tt.m(), _ = 0; _ < b.length; _++) {
                    var S = b[_];
                    S.active && S.c(s, c)
                }
                if (this.cameraEmitter) {
                    this.cameraEmitter.pos = u.copy(s.pos), this.cameraEmitter.enabled = !0;
                    var k = 2.5 * t.Lt();
                    this.cameraEmitter.radius = x.min(k, 120);
                    var v = (y.EmitterDefs.falling_leaf, this.cameraEmitter.radius),
                        z = v * v / 14400;
                    this.cameraEmitter.rateMult = 1 / z;
                    var M = 0 == t.layer ? 1 : 0;
                    this.cameraEmitter.alpha = x.lerp(6 * e, this.cameraEmitter.alpha, M)
                }
                if (++this.da % 180 == 0) {
                    this.Ft = !0;
                    for (var T = 0, P = p.qt, I = 0; I < l.length; I++) {
                        var C = l[I];
                        C.active && !C.fade && P(C, p.Nt) && T++
                    }
                    for (var A = 0; A < m.length; A++) {
                        var E = m[A];
                        E.active && !E.dead && P(E, p.Vt) && T++
                    }
                    T && (this.H = !0)
                }
            },
            renderTerrain: function(e, t, a) {
                var i = this.width,
                    s = this.height,
                    l = this.terrain,
                    c = {
                        x: 0,
                        y: 0
                    },
                    m = {
                        x: i,
                        y: 0
                    },
                    p = {
                        x: 0,
                        y: s
                    },
                    d = {
                        x: i,
                        y: s
                    },
                    h = this.mapDef.biome.colors;
                e.beginFill(h.background), e.drawRect(-120, -120, i + 240, 120), e.drawRect(-120, s, i + 240, 120), e.drawRect(-120, -120, 120, s + 240), e.drawRect(i, -120, 120, s + 240), e.endFill(), e.beginFill(h.beach), o(e, l.shore), o(e, l.grass), e.addHole(), e.endFill(), a && (e.beginFill(h.grass), o(e, l.grass), e.endFill());
                for (var u = this.mapData.groundPatches, g = 0; g < u.length; g++) {
                    var y = u[g];
                    e.beginFill(y.color), n(e, y, this.seed), e.endFill()
                }
                e.beginFill(h.riverbank);
                for (var w = 0; w < l.rivers.length; w++) o(e, l.rivers[w].shorePoly);
                e.endFill(), e.beginFill(h.water);
                for (var x = 0; x < l.rivers.length; x++) o(e, l.rivers[x].waterPoly);
                e.endFill(), e.beginFill(h.water), e.moveTo(p.x, p.y), e.lineTo(d.x, d.y), e.lineTo(m.x, m.y), e.lineTo(c.x, c.y), o(e, l.shore), e.addHole(), e.closePath(), e.endFill();
                var b = e;
                b.lineStyle(t, 0, .15);
                for (var _ = 0; _ <= i; _ += f.map.gridSize) r(b, {
                    x: _,
                    y: 0
                }, {
                    x: _,
                    y: s
                });
                for (var S = 0; S <= s; S += f.map.gridSize) r(b, {
                    x: 0,
                    y: S
                }, {
                    x: i,
                    y: S
                })
            },
            render: function(e) {
                var t = e.pointToScreen(u.create(0, 0)),
                    a = e.pointToScreen(u.create(1, 1)),
                    i = u.sub(a, t);
                this.display.ground.position.set(t.x, t.y), this.display.ground.scale.set(i.x, i.y)
            },
            getMinimapRender: function(e) {
                var t = p.Defs[e.type],
                    a = "building" == t.type ? 750 + (t.zIdx || 0) : t.img.zIdx || 0,
                    i = [];
                if (void 0 !== t.map.shapes) i = t.map.shapes;
                else {
                    var r = null;
                    (r = "obstacle" == t.type ? t.collision : t.ceiling.scopeIn.length > 0 ? t.ceiling.scopeIn[0] : p.getBoundingCollider(e.type)) && i.push({
                        collider: m.copy(r),
                        scale: t.map.scale || 1,
                        color: t.map.color
                    })
                }
                return {
                    obj: e,
                    zIdx: a,
                    shapes: i
                }
            },
            renderMap: function(e, t) {
                if (this.mapLoaded) {
                    var a = new l.Container,
                        i = new l.Container,
                        o = this.mapDef.biome.colors,
                        n = this.mapData.places,
                        s = this.mapData.objects,
                        c = w.screenHeight;
                    w.mobile && (w.isLandscape || (c = w.screenWidth), c *= x.min(w.pixelRatio, 2));
                    var d = this.height / c,
                        h = new l.Graphics;
                    h.beginFill(o.grass), h.drawRect(0, 0, this.width, this.height), h.endFill(), this.renderTerrain(h, d, t);
                    var g = {
                            x: 0,
                            y: 0
                        },
                        y = {
                            x: this.width,
                            y: 0
                        },
                        f = {
                            x: 0,
                            y: this.height
                        },
                        b = {
                            x: this.width,
                            y: this.height
                        };
                    h.lineStyle(2 * d, 0, 1), r(h, g, f), r(h, f, b), r(h, b, y), r(h, y, g), h.position.y = this.height, h.scale.y = -1, a.addChild(h);
                    for (var _ = [], S = 0; S < s.length; S++) {
                        var k = s[S];
                        _.push(this.getMinimapRender(k))
                    }
                    _.sort(function(e, t) {
                        return e.zIdx - t.zIdx
                    });
                    for (var v = new l.Graphics, z = 0; z < _.length; z++)
                        for (var M = _[z], T = M.obj, P = 0; P < M.shapes.length; P++) {
                            var I = M.shapes[P],
                                C = m.transform(I.collider, T.pos, p.oriToRad(T.ori), T.scale),
                                A = void 0 !== I.scale ? I.scale : 1;
                            switch (v.beginFill(I.color, 1), C.type) {
                                case m.Type.Circle:
                                    v.drawCircle(C.pos.x, this.height - C.pos.y, C.rad * A);
                                    break;
                                case m.Type.Aabb:
                                    var E = u.mul(u.sub(C.max, C.min), .5),
                                        D = u.add(C.min, E);
                                    E = u.mul(E, A), v.drawRect(D.x - E.x, this.height - D.y - E.y, 2 * E.x, 2 * E.y)
                            }
                            v.endFill()
                        }
                    a.addChild(v);
                    for (var O = new l.Container, B = 0; B < n.length; B++) {
                        var L = n[B],
                            R = new l.TextStyle({
                                fontFamily: "Arial",
                                fontSize: w.mobile ? 20 : 22,
                                fontWeight: "bold",
                                fill: ["#ffffff"],
                                stroke: "#000000",
                                strokeThickness: 1,
                                dropShadow: !0,
                                dropShadowColor: "#000000",
                                dropShadowBlur: 1,
                                dropShadowAngle: Math.PI / 3,
                                dropShadowDistance: 1,
                                wordWrap: !1,
                                align: "center"
                            }),
                            F = new l.Text(L.name, R);
                        F.anchor.set(.5, .5), F.x = L.pos.x * this.height / d, F.y = L.pos.y * this.height / d, F.alpha = .75, O.addChild(F)
                    }
                    i.addChild(O), this.mapTexture ? this.mapTexture.resize(c, c) : this.mapTexture = l.RenderTexture.create(c, c, l.SCALE_MODES.LINEAR, 1), a.scale = new l.Point(c / this.height, c / this.height), e.render(a, this.mapTexture, !0), e.render(i, this.mapTexture, !1), a.destroy({
                        children: !0,
                        texture: !0,
                        baseTexture: !0
                    }), i.destroy({
                        children: !0,
                        texture: !0,
                        baseTexture: !0
                    })
                }
            },
            getGroundSurface: function(e, t) {
                for (var a = "", i = this.Mt.m(), r = 0, o = 2 & t, n = 0; n < i.length; n++) {
                    var s = i[n];
                    if (s.active && !(s.zIdx < r) && !(s.layer != t && !o || 1 == s.layer && o))
                        for (var l = 0; l < s.surfaces.length; l++)
                            for (var p = s.surfaces[l], d = 0; d < p.colliders.length; d++) {
                                var h = m.intersectCircle(p.colliders[d], e, 1e-4);
                                if (h) {
                                    r = s.zIdx, a = p.surface;
                                    break
                                }
                            }
                }
                if (a) return new v(a);
                var u = !1;
                if (1 != t)
                    for (var g = this.terrain.rivers, y = 0; y < g.length; y++) {
                        var w = g[y];
                        if (c.testPointAabb(e, w.aabb.min, w.aabb.max) && x.pointInsidePolygon(e, w.shorePoly) && (u = !0, x.pointInsidePolygon(e, w.waterPoly))) return new v("water", w)
                    }
                return new v(x.pointInsidePolygon(e, this.terrain.grass) ? u ? this.mapDef.biome.sound.riverShore : "grass" : x.pointInsidePolygon(e, this.terrain.shore) ? "sand" : "water")
            },
            isInOcean: function(e) {
                return !x.pointInsidePolygon(e, this.terrain.shore)
            },
            distanceToShore: function(e) {
                return x.distToPolygon(e, this.terrain.shore)
            },
            insideStructureStairs: function(e) {
                for (var t = this.Tt.m(), a = 0; a < t.length; a++) {
                    var i = t[a];
                    if (i.active && i.insideStairs(e)) return !0
                }
                return !1
            },
            insideStructureMask: function(e) {
                for (var t = this.Tt.m(), a = 0; a < t.length; a++) {
                    var i = t[a];
                    if (i.active && i.insideMask(e)) return !0
                }
                return !1
            },
            insideBuildingCeiling: function(e, t) {
                for (var a = this.Mt.m(), i = 0; i < a.length; i++) {
                    var r = a[i];
                    if (r.active && (!t || !(r.ceiling.visionTicker <= 0 || r.ceilingDead || r.disableScopeIn)))
                        for (var o = 0; o < r.ceiling.scopeIn.length; o++) {
                            var n = r.ceiling.scopeIn[o];
                            if (m.intersect(n, e)) return !0
                        }
                }
                return !1
            }
        }, e.exports = {
            $e: s
        }
    },
    d5ec3c16: function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("c2a798c8"), {
            desc: {
                name: "Main",
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
                    beach: 13480795,
                    riverbank: 9461284,
                    grass: 8433481,
                    underground: 1772803,
                    playerSubmerge: 2854052
                },
                valueAdjust: 1,
                sound: {
                    riverShore: "sand"
                },
                particles: {
                    camera: "",
                    ripple: "waterRipple"
                },
                tracerColors: {},
                airdrop: {
                    planeImg: "map-plane-01.img",
                    planeSound: "plane_01",
                    airdropImg: "map-chute-01.img"
                }
            },
            gameMode: {
                maxPlayers: 80
            }
        });
        e.exports = i
    },
    d84c74f8: function(e, t, a) {
        "use strict";

        function i(e) {
            var t = null;
            window.cookieconsent.initialise({
                palette: {
                    popup: {
                        background: "#3c404d",
                        text: "#d6d6d6"
                    },
                    button: {
                        background: "#8bed4f"
                    }
                },
                theme: "classic",
                position: "bottom-left",
                content: {
                    message: "This website uses ad monetization services of AdinPlay BV and uses cookies to personalize ads, ad serving, analytics and verification. By clicking 'Got it!' you confirm that you consent to setting cookies and processing your personal data for all the listed purposes. If you are under the age of consent in your jurisdiction for data processing purposes, or if you wish to deny consent, click \"Learn more\".",
                    dismiss: "Got it!",
                    deny: "Decline",
                    link: "Learn more.",
                    href: "/privacy"
                },
                revokable: !1,
                animateRevokable: !1,
                law: {
                    regionalLaw: !1
                },
                location: !1,
                onStatusChange: function(t) {
                    var a = (this.options.type, this.hasConsented()),
                        i = e.get("cookiesConsented");
                    e.set("cookiesConsented", a), o.storeGeneric("cookiesConsented", a), i != a && window.location.reload(!1)
                }
            }, function(e) {
                t = e
            }, function(e) {
                console.error(e)
            }), r("#btn-cookie-opt-out").click(function(a) {
                t && (t.setStatus("deny"), e.get("cookiesConsented") && (e.set("cookiesConsented", !1), o.storeGeneric("cookiesConsented", !1), window.location.reload(!1)))
            }), r(".btn-cookies-close").click(function(a) {
                t && (t.setStatus("allow"), e.get("cookiesConsented") || (e.set("cookiesConsented", !0), o.storeGeneric("cookiesConsented", !0), window.location.reload(!1)))
            }), r(".btn-cookie-settings").css("display", "inline-block");
            var a = r("#modal-cookie-settings");
            r(".btn-cookie-settings").click(function(e) {
                return t && (void 0 == t.getStatus() && r(this).hasClass("cc-link") && (t.setStatus("dismiss"), t.close()), a.finish(), a.css("display", "block"), r("#modal-hamburger").fadeOut(200), n.addModalCloseListener()), !1
            })
        }
        var r = a("8ee62bea"),
            o = (a("81a1fce4"), a("f398b7c7")),
            n = a("484b3444");
        e.exports = {
            showCookieConsent: i
        }
    },
    e100c355: function(e, t, a) {
        "use strict";

        function i(e, t, a, i, r) {
            var o = c.create(e.min.x, e.min.y),
                n = c.create(e.max.x, e.min.y),
                s = c.create(e.min.x, e.max.y),
                l = c.create(e.max.x, e.max.y),
                m = n.x - o.x,
                p = s.y - o.y,
                d = m / (t + 1),
                h = p / (a + 1),
                u = [];
            u.push(c.copy(o));
            for (var g = 1; g <= t; ++g) u.push(c.create(o.x + d * g, o.y + r(-i, i)));
            u.push(c.copy(n));
            for (var y = 1; y <= a; ++y) u.push(c.create(n.x + r(-i, i), n.y + h * y));
            u.push(c.copy(l));
            for (var w = 1; w <= t; ++w) u.push(c.create(l.x - d * w, l.y + r(-i, i)));
            u.push(c.copy(s));
            for (var x = 1; x <= a; ++x) u.push(c.create(s.x + r(-i, i), s.y - h * x));
            return u
        }

        function r(e, t, a, r, m, p) {
            for (var d = n.map.shoreVariation, h = n.map.grassVariation, u = l.seededRand(p), g = c.create(a, a), y = (c.create(e - a, a), c.create(a, t - a), c.create(e - a, t - a)), w = c.create(g.x, g.y), x = c.create(y.x, y.y), f = o.createAabb(w, x), b = i(f, 64, 64, d, u), _ = c.create(.5 * e, .5 * t), S = b.map(function(e) {
                    var t = c.normalize(c.sub(_, e)),
                        a = u(-h, h),
                        i = r + a;
                    return c.add(e, c.mul(t, i))
                }), k = {
                    min: c.create(0, 0),
                    max: c.create(e, t)
                }, v = [], z = 0; z < m.length; z++) {
                var M = m[z],
                    T = new s(M.points, M.width, M.looped, v, k);
                v.push(T)
            }
            return {
                shore: b,
                grass: S,
                rivers: v
            }
        }
        var o = a("6b42806d"),
            n = a("989ad62a"),
            s = (a("10899aea"), a("be22c643")),
            l = a("1901e2d9"),
            c = a("c2a798c8");
        e.exports = {
            generateJaggedAabbPoints: i,
            generateTerrain: r
        }
    },
    e2094860: function(e, t, a) {
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
            n = a("8b1dfb45"),
            s = a("6b42806d"),
            l = a("989ad62a"),
            c = (a("10899aea"), a("1901e2d9")),
            m = a("c2a798c8"),
            p = (a("26be8056"), a("ce29f17f")),
            d = (a("af8ba00f"), function() {
                function e(t, a) {
                    var r = this;
                    i(this, e), this.input = t, this.config = a, this.container = new n.Container, this.ha = new h, this.padScaleBase = 1, this.padScaleDown = .6, this.padScalePos = .25, this.moveDetected = !1, this.Rt = !1, this.ua = !1, this.touchingAim = !1, this.display = !0, this.moveStyle = "locked", this.aimStyle = "locked", this.touchAimLine = !0;
                    var o = function(e, t) {
                            var a = n.Sprite.fromImage("pad.img");
                            return a.anchor.set(.5, .5), a.scale.set(1, 1), a.alpha = .2, a.visible = !1, a.tint = t, e.addChild(a), a
                        },
                        s = function() {
                            return {
                                touched: !1,
                                centerPos: m.create(0, 0),
                                touchPos: m.create(0, 0),
                                centerSprite: o(r.container, 0),
                                touchSprite: o(r.container, 16777215)
                            }
                        };
                    this.touchPads = [s(), s()], this.playerMovement = {
                        left: !1,
                        right: !1,
                        up: !1,
                        down: !1,
                        moveLen: 0
                    }, this.analogMovement = {
                        toMoveDir: m.create(1, 0),
                        toMoveLen: 0
                    }, this.aimMovement = {
                        toAimDir: m.create(1, 0),
                        toAimLen: 0
                    }, this.leftLockedPadCenter = m.create(0, 0), this.rightLockedPadCenter = m.create(0, 0), this.padPosBase = 48, this.padPosRange = 0, this.movePadDetectMult = 1, this.shotPadDetectMult = 1.075, this.turnDirCooldown = .5, this.turnDirTicker = 0, this.mobileOffsetLandscape = 25, this.mobileOffsetPortrait = 100, this.lockedPadOffsetLandscape = m.create(126, 100), this.lockedPadOffsetPortrait = m.create(96, 160), this.lockedPadOffsetYLandscapeSafari = 120, this.lockedPadOffsetYPortraitSafari = 240;
                    var l = function(e) {
                            return -1 === ["locked", "anywhere"].indexOf(e) ? "anywhere" : e
                        },
                        c = l(a.get("touchMoveStyle")),
                        p = l(a.get("touchAimStyle"));
                    this.setMoveStyle(c), this.setAimStyle(p), this.setTouchAimLine(!!a.get("touchAimLine")), this.init()
                }
                return r(e, [{
                    key: "getTouchMovement",
                    value: function(e) {
                        return this.getMovement(e)
                    }
                }, {
                    key: "getAimMovement",
                    value: function(e, t) {
                        var a = e.re.curWeapIdx == l.WeaponSlot.Throwable;
                        return this.getAim(a, t)
                    }
                }, {
                    key: "setAimDir",
                    value: function(e) {
                        this.aimMovement.toAimDir = m.copy(e)
                    }
                }, {
                    key: "getMovement",
                    value: function(e) {
                        var t = null,
                            a = null,
                            i = !1,
                            r = void 0;
                        this.moveDetected = !1;
                        for (var o = 0; o < this.input.touches.length; o++) {
                            var n = this.input.touches[o];
                            if (!n.isDead && this.isLeftSideTouch(n.posDown.x, e)) {
                                var s = "anywhere" == this.moveStyle ? n.posDown : this.leftLockedPadCenter,
                                    l = m.sub(n.pos, s),
                                    c = m.length(l);
                                if (c > 2) {
                                    var p = (c - 2) / (this.padPosRange / this.movePadDetectMult - 2);
                                    r = p > 1e-5 ? m.div(l, p) : this.analogMovement.toMoveDir, this.analogMovement = {
                                        toMoveDir: m.create(r.x, -1 * r.y),
                                        toMoveLen: p
                                    }, this.moveDetected = !0
                                }
                                a = this.getConstrainedPos(s, n.pos, c), t = s, i = !0;
                                break
                            }
                        }
                        var d = this.touchPads[0];
                        return d.touched = i, i && "anywhere" == this.moveStyle ? d.centerPos = m.copy(t) : d.centerPos = m.copy(this.leftLockedPadCenter), d.touchPos.x = i ? a.x : this.leftLockedPadCenter.x, d.touchPos.y = i ? a.y : this.leftLockedPadCenter.y, this.analogMovement
                    }
                }, {
                    key: "getAim",
                    value: function(e, t) {
                        for (var a = !1, i = null, r = null, o = void 0, n = 0; n < this.input.touches.length; n++) {
                            var s = this.input.touches[n];
                            if (!s.isDead && !this.isLeftSideTouch(s.posDown.x, t)) {
                                var l = "anywhere" == this.aimStyle ? s.posDown : this.rightLockedPadCenter,
                                    c = m.sub(s.pos, l),
                                    p = m.length(c);
                                if (p > 2) {
                                    var d = m.sub(s.pos, l),
                                        h = m.length(d);
                                    o = h > 1e-5 ? m.div(d, h) : this.aimMovement.toAimDir, this.aimMovement = {
                                        toAimDir: m.create(o.x, -1 * o.y),
                                        toAimLen: h
                                    }
                                } else this.aimMovement.toAimLen = 0;
                                r = this.getConstrainedPos(l, s.pos, p), i = l, a = !0;
                                break
                            }
                        }
                        this.ua = this.Rt, this.Rt = this.aimMovement.toAimLen > this.padPosRange / this.shotPadDetectMult && a, this.touchingAim = a, e && this.ua && a && (this.Rt = !0);
                        var u = this.touchPads[1];
                        return u.touched = a, a && "anywhere" == this.aimStyle ? u.centerPos = m.copy(i) : u.centerPos = m.copy(this.rightLockedPadCenter), u.touchPos.x = a ? r.x : this.rightLockedPadCenter.x, u.touchPos.y = a ? r.y : this.rightLockedPadCenter.y, {
                            aimMovement: this.aimMovement,
                            touched: u.touched
                        }
                    }
                }, {
                    key: "update",
                    value: function(e, t, a, i, r) {
                        for (var o = 0; o < this.touchPads.length; o++) {
                            var n = this.touchPads[o];
                            n.centerSprite.position.x = n.centerPos.x, n.centerSprite.position.y = n.centerPos.y, n.centerSprite.scale.x = this.padScaleBase * this.padScaleDown, n.centerSprite.scale.y = this.padScaleBase * this.padScaleDown, n.centerSprite.visible = p.touch && this.display, n.touchSprite.position.x = n.touchPos.x, n.touchSprite.position.y = n.touchPos.y, n.touchSprite.scale.x = this.padScaleBase * this.padScalePos, n.touchSprite.scale.y = this.padScaleBase * this.padScalePos, n.touchSprite.visible = p.touch && this.display
                        }
                        this.ha.update(this, t, a, i, r)
                    }
                }, {
                    key: "isLeftSideTouch",
                    value: function(e, t) {
                        return e < .5 * t.screenWidth
                    }
                }, {
                    key: "getConstrainedPos",
                    value: function(e, t, a) {
                        if (a <= this.padPosRange) return t;
                        var i = t.x - e.x,
                            r = t.y - e.y,
                            o = Math.atan2(r, i);
                        return m.create(Math.cos(o) * this.padPosRange + e.x, Math.sin(o) * this.padPosRange + e.y)
                    }
                }, {
                    key: "getConstrainedPosDown",
                    value: function(e, t, a) {
                        var i = m.normalizeSafe(t);
                        return m.add(e, m.mul(i, Math.max(0, a - this.padPosRange)))
                    }
                }, {
                    key: "toggleMoveStyle",
                    value: function() {
                        this.setMoveStyle("locked" == this.moveStyle ? "anywhere" : "locked")
                    }
                }, {
                    key: "setMoveStyle",
                    value: function(e) {
                        this.moveStyle = e, this.config.set("touchMoveStyle", e);
                        var t = document.getElementById("btn-game-move-style");
                        t && ("locked" == this.moveStyle ? (t.classList.remove("unlocked-on-icon"), t.classList.add("locked-on-icon")) : (t.classList.remove("locked-on-icon"), t.classList.add("unlocked-on-icon")))
                    }
                }, {
                    key: "toggleAimStyle",
                    value: function() {
                        this.setAimStyle("locked" == this.aimStyle ? "anywhere" : "locked")
                    }
                }, {
                    key: "setAimStyle",
                    value: function(e) {
                        this.aimStyle = e, this.config.set("touchAimStyle", e);
                        var t = document.getElementById("btn-game-aim-style");
                        "locked" == this.aimStyle ? (t.classList.remove("unlocked-on-icon"), t.classList.add("locked-on-icon")) : (t.classList.remove("locked-on-icon"), t.classList.add("unlocked-on-icon"))
                    }
                }, {
                    key: "toggleAimLine",
                    value: function() {
                        this.setTouchAimLine(!this.touchAimLine)
                    }
                }, {
                    key: "setTouchAimLine",
                    value: function(e) {
                        this.touchAimLine = e, this.config.set("touchAimLine", this.touchAimLine);
                        var t = document.getElementById("btn-game-aim-line");
                        this.touchAimLine ? (t.classList.remove("aim-line-off-icon"), t.classList.add("aim-line-on-icon")) : (t.classList.remove("aim-line-on-icon"), t.classList.add("aim-line-off-icon"))
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.resize()
                    }
                }, {
                    key: "resize",
                    value: function() {
                        var e = p.isLandscape,
                            t = this.lockedPadOffsetLandscape,
                            a = this.lockedPadOffsetPortrait;
                        p.tablet && (t.x = 1 * t.x, a.x = 1.25 * a.x);
                        var i = m.create(t.x, t.y),
                            r = m.create(a.x, a.y),
                            o = m.create(p.screenWidth - t.x, t.y),
                            n = m.create(p.screenWidth - a.x, a.y);
                        if ("ios" == p.os)
                            if ("iphonex" == p.model) i.x = i.x + 56, o.x = o.x - 56, i.y = .9 * i.y, o.y = .9 * o.y;
                            else if (p.webview) p.tablet && p.webview && (i.y = 1.1 * i.y, o.y = 1.1 * o.y);
                        else {
                            var s = this.lockedPadOffsetYLandscapeSafari,
                                l = this.lockedPadOffsetYPortraitSafari;
                            p.tablet && (window.navigator.standalone, s *= 1, l *= 1), i.y = s, r.y = l, o.y = s, n.y = l
                        }
                        this.padScaleBase = e ? 1 : .8, this.padPosRange = this.padPosBase * this.padScaleBase;
                        var c = e ? i : r;
                        this.leftLockedPadCenter = m.create(c.x, p.screenHeight - c.y);
                        var d = e ? o : n;
                        this.rightLockedPadCenter = m.create(d.x, p.screenHeight - d.y), this.setMobileStyling(e)
                    }
                }, {
                    key: "setMobileStyling",
                    value: function(e) {
                        if (p.touch && (o("#btn-touch-styles").find(".btn-game-container").css("display", "inline-block"), o("#ui-emote-button").css("display", "block")), p.uiLayout == p.UiLayout.Sm ? (o("#ui-map-wrapper").addClass("ui-map-wrapper-mobile").removeClass("ui-map-wrapper-desktop"), o("#ui-settings-container-mobile").css("display", "block"), o("#ui-settings-container-desktop").css("display", "none"), o("#ui-right-center").addClass("ui-right-center-mobile").removeClass("ui-right-center-desktop"), o("#ui-leaderboard-wrapper").css("display", "none"), o("#big-map-close").css("display", "block"), o("#ui-game-menu").removeClass("ui-game-menu-desktop"), o("#btn-game-tabs").css("display", "none"), o("#ui-game-tab-settings").removeClass("ui-game-tab-settings-desktop"), o(".ui-ability-key").css("display", "none")) : (o("#ui-map-wrapper").removeClass("ui-map-wrapper-mobile").addClass("ui-map-wrapper-desktop"), o("#ui-settings-container-mobile").css("display", "none"), o("#ui-settings-container-desktop").css("display", "block"), o("#ui-right-center").removeClass("ui-right-center-mobile").addClass("ui-right-center-desktop"), o("#ui-leaderboard-wrapper").css("display", "block"), o("#big-map-close").css("display", "none"), o("#ui-game-menu").addClass("ui-game-menu-desktop"), o("#btn-game-tabs").css("display", "flex"), o("#ui-game-tab-settings").addClass("ui-game-tab-settings-desktop"), o(".ui-ability-key").css("display", "block")), p.tablet && (e ? ("ios" == p.os ? p.webview ? (o("#ui-bottom-right").addClass("ui-bottom-right-tablet-ipad-webview"), o("#ui-right-center").addClass("ui-right-center-tablet")) : (o("#ui-bottom-right").addClass("ui-bottom-right-tablet-ipad-browser"), o("#ui-right-center").addClass("ui-right-center-tablet-ipad-browser")) : (o("#ui-bottom-right").addClass("ui-bottom-right-tablet"), o("#ui-right-center").addClass("ui-right-center-tablet")), o("#ui-bottom-center-right").addClass("ui-bottom-center-right-tablet"), o("#ui-top-left").addClass("ui-top-left-tablet"), o("#ui-spectate-options-wrapper").addClass("ui-spectate-options-wrapper-tablet"), o("#ui-killfeed-wrapper").addClass("ui-killfeed-wrapper-tablet")) : (o("#ui-bottom-right").removeClass("ui-bottom-right-tablet"), o("#ui-right-center").removeClass("ui-right-center-tablet"), o("#ui-bottom-center-right").removeClass("ui-bottom-center-right-tablet"), o("#ui-top-left").removeClass("ui-top-left-tablet"), o("#ui-spectate-options-wrapper").removeClass("ui-spectate-options-wrapper-tablet"), o("#ui-killfeed-wrapper-wrapper").removeClass("ui-killfeed-wrapper-tablet"))), "ios" == p.os)
                            if ("iphonex" == p.model) {
                                var t = p.isLandscape ? "99%" : "90%",
                                    a = p.isLandscape ? 0 : 32;
                                o("#ui-game").css({
                                    height: t,
                                    top: a
                                }), o("#ui-stats-contents").css({
                                    transform: "translate(-50%) scale(0.95)",
                                    "transform-origin": "top"
                                }), e ? o("#ui-game").css({
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "93%"
                                }) : o("#ui-game").css({
                                    left: "",
                                    transform: "",
                                    width: ""
                                })
                            } else if (window.navigator.standalone && !p.tablet) o("#ui-game").css({
                            height: "95%"
                        });
                        else {
                            var i = p.isLandscape ? "86%" : "82%";
                            p.tablet ? i = "100%" : p.webview && (i = "98%"), o("#ui-game").css({
                                height: i
                            });
                            var r = p.webview && !p.tablet ? 0 : 6,
                                n = o("#ui-right-center, #ui-top-center-scopes-wrapper, #ui-top-center, #ui-menu-display");
                            n.css({
                                "margin-top": r
                            })
                        }
                        this.reorderAmmo(!p.tablet && !e)
                    }
                }, {
                    key: "reorderAmmo",
                    value: function(e) {
                        e ? (o("#ui-loot-9mm").insertBefore("#ui-loot-45acp"), o("#ui-loot-12gauge").insertBefore("#ui-loot-45acp"), o("#ui-loot-762mm").insertBefore("#ui-loot-45acp"), o("#ui-loot-556mm").insertBefore("#ui-loot-45acp"), o("#ui-loot-50AE").insertBefore("#ui-loot-45acp"), o("#ui-loot-308sub").insertBefore("#ui-loot-45acp"), o("#ui-loot-flare").insertBefore("#ui-loot-45acp")) : (o("#ui-loot-50AE").insertBefore("#ui-loot-556mm"), o("#ui-loot-9mm").insertBefore("#ui-loot-556mm"), o("#ui-loot-308sub").insertBefore("#ui-loot-556mm"), o("#ui-loot-12gauge").insertBefore("#ui-loot-556mm"), o("#ui-loot-flare").insertBefore("#ui-loot-556mm"), o("#ui-loot-762mm").insertBefore("#ui-loot-556mm"), o("#ui-loot-45acp").insertBefore("#ui-loot-556mm"))
                    }
                }, {
                    key: "hideAll",
                    value: function() {
                        this.display = !1
                    }
                }]), e
            }()),
            h = function() {
                function e() {
                    i(this, e), this.container = new n.Container, this.container.visible = !1, this.dots = []
                }
                return r(e, [{
                    key: "createDot",
                    value: function() {
                        var e = new n.Sprite;
                        return e.texture = n.Texture.fromImage("dot.img"), e.anchor.set(.5, .5), e.position.set(0, 0), e.scale.set(1, 1), e.tint = 16777215, e.alpha = 1, e.visible = !1, e
                    }
                }, {
                    key: "update",
                    value: function(e, t, a, i, r) {
                        var o = p.touch && e.touchingAim && e.touchAimLine;
                        if (o) {
                            var n = t.ie.curWeapType,
                                d = l.items[n],
                                h = 30;
                            if ("gun" == d.type) {
                                var u = l.bullets[d.bulletType].distance;
                                h = d.barrelLength + u
                            }
                            var g = t.Lt(),
                                y = Math.sqrt(1.414 * g * g);
                            h = Math.min(h, y);
                            for (var w = m.copy(t.pos), x = m.add(w, m.mul(t.dir, h)), f = a.pe.m(), b = 0; b < f.length; b++) {
                                var _ = f[b];
                                if (!(!_.active || _.dead || _.height < l.bullet.height || !_.collidable || _.isWindow) && c.sameLayer(t.layer, _.layer) && !("throwable" == d.type && _.height <= l.projectile.maxHeight)) {
                                    var S = s.intersectSegment(_.collider, w, x);
                                    if (S) {
                                        var k = m.length(m.sub(S.point, w));
                                        k < h && (h = k, x = S.point)
                                    }
                                }
                            }
                            for (var v = m.length(m.sub(x, w)), z = Math.max(Math.ceil((v - 3.5) / 1.5), 0); this.dots.length < z;) {
                                var M = this.createDot();
                                this.container.addChild(M), this.dots.push(M)
                            }
                            for (var T = 0; T < this.dots.length; T++) {
                                var P = this.dots[T],
                                    I = 3.5 + 1.5 * T,
                                    C = m.add(t.pos, m.mul(t.dir, I));
                                P.position.set(C.x, C.y), P.scale.set(.01171875, .01171875), P.visible = T < z
                            }
                            var A = i.pointToScreen(m.create(0, 0)),
                                E = i.pointToScreen(m.create(1, 1)),
                                D = m.sub(E, A);
                            this.container.position.set(A.x, A.y), this.container.scale.set(D.x, D.y), this.container.alpha = .3, r.addPIXIObj(this.container, t.layer, 19, 0)
                        }
                        this.container.visible = o
                    }
                }]), e
            }();
        e.exports = {
            Ze: d
        }
    },
    e5d16b4d: function(e, t, a) {
        "use strict";

        function i(e) {
            return "close.img" == e ? "img/gui/close.svg" : e && e.length > 4 ? "img/emotes/" + e.slice(0, -4) + ".svg" : ""
        }

        function r(e) {
            var t = 180 * Math.atan2(e.y, e.x) / Math.PI;
            return t < 0 && (t += 360), t
        }

        function o(e, t, a) {
            return t <= a ? a - t <= 180 ? t <= e && e <= a : a <= e || e <= t : t - a <= 180 ? a <= e && e <= t : t <= e || e <= a
        }

        function n(e, t, a, i, o) {
            var n = this;
            this.audioManager = e, this.uiManager = t, this.gameElem = s("#ui-game"), this.disable = !1, this.Et = null, this.playerBarn = a, this.camera = i, this.map = o, this.worldPos = f.create(0, 0), this.zIdxNext = 0, this.emoteSelector = {
                ping: g.None,
                emote: d.None
            }, this.emoteSoftTicker = 0, this.emoteHardTicker = 0, this.emoteCounter = 0, this.emoteWheelsGreyed = !1, this.teamEmotesGreyed = !1, this.wheelKeyTriggered = !1, this.emoteTimeoutTicker = 0, this.ga = !1, this.pingKeyDown = !1, this.pingMouseTriggered = !1, this.wheelDisplayed = !1, this.emoteMouseTriggered = !1, this.emoteScreenPos = f.create(0, 0), this.triggerPing = function() {
                if (this.Et) {
                    var e = void 0;
                    this.emoteSelector.ping == g.None || this.emoteWheelsGreyed ? this.emoteSelector.emote == d.None || this.emoteWheelsGreyed || (e = this.Et.pos, this.sendEmote({
                        type: this.emoteSelector.emote,
                        useLoadout: this.emoteSelector.useLoadout,
                        emoteSlot: this.emoteSelector.emoteSlot,
                        pos: e
                    }), this.uiManager.displayMapLarge(!0)) : y[this.emoteSelector.ping].pingMap && (e = this.uiManager.getWorldPosFromMapPos(this.bigmapPingPos || this.emoteScreenPos, this.map, this.camera), e || (e = this.camera.O(this.emoteScreenPos)), e.x = b.clamp(e.x, 0, this.map.width), e.y = b.clamp(e.y, 0, this.map.height), this.sendPing({
                        type: this.emoteSelector.ping,
                        pos: e
                    })), this.inputReset(), this.ga = this.pingKeyDown
                }
            }, this.triggerEmote = function() {
                if (this.Et) {
                    var e = void 0;
                    this.emoteSelector.emote == d.None || this.emoteWheelsGreyed || (e = this.Et.pos, this.sendEmote({
                        type: this.emoteSelector.emote,
                        useLoadout: this.emoteSelector.useLoadout,
                        emoteSlot: this.emoteSelector.emoteSlot,
                        pos: e
                    })), this.inputReset()
                }
            }, this.emoteTouchedPos = null, this.bigmapPingPos = null, S.touch && (this.emoteElems = s(".ui-emote"), this.emoteElems.css("pointer-events", "auto"), this.bigmapCollision = s("#big-map-collision"), this.bigmapCollision.on("touchend", function(e) {
                e.stopPropagation(), n.bigmapPingPos = {
                    x: e.originalEvent.changedTouches[0].pageX,
                    y: e.originalEvent.changedTouches[0].pageY
                }, n.emoteScreenPos = f.create(n.camera.screenWidth / 2, n.camera.screenHeight / 2), n.pingMouseTriggered = !0
            }), this.emoteButtonElem = s("#ui-emote-button"), this.emoteButtonElem.css("pointer-events", "auto"), this.emoteButtonElem.on("touchstart", function(e) {
                e.stopPropagation(), n.emoteScreenPos = f.create(n.camera.screenWidth / 2, n.camera.screenHeight / 2), n.emoteMouseTriggered = !0
            }), this.emoteElems.on("touchstart", function(e) {
                e.stopPropagation(), n.emoteTouchedPos = {
                    x: e.originalEvent.changedTouches[0].pageX,
                    y: e.originalEvent.changedTouches[0].pageY
                }
            }), s(document).on("touchstart", function(e) {
                n.wheelDisplayed && (e.stopPropagation(), n.inputReset())
            })), this.emoteWheels = s("#ui-emotes, #ui-team-pings"), this.teamEmotes = s(".ui-emote-bottom-left, .ui-emote-top-left"), this.emoteWheel = s("#ui-emotes"), this.emoteWheelData = {
                middle: {
                    parent: s("#ui-emote-middle"),
                    vA: f.create(-1, 1),
                    vC: f.create(1, 1),
                    ping: g.None,
                    emote: d.None,
                    modular: !1,
                    displayCloseIcon: !0
                },
                top: {
                    parent: s("#ui-emote-top"),
                    vA: f.create(-1, 1),
                    vC: f.create(1, 1),
                    ping: g.None,
                    emote: d.HappyFace,
                    modular: !1,
                    useLoadout: !0,
                    emoteSlot: p.Top
                },
                right: {
                    parent: s("#ui-emote-right"),
                    vA: f.create(1, 1),
                    vC: f.create(1, -1),
                    ping: g.None,
                    emote: d.ThumbsUp,
                    modular: !1,
                    useLoadout: !0,
                    emoteSlot: p.Right
                },
                bottom: {
                    parent: s("#ui-emote-bottom"),
                    vA: f.create(1, -1),
                    vC: f.create(-1, -1),
                    ping: g.None,
                    emote: d.Surviv,
                    modular: !1,
                    useLoadout: !0,
                    emoteSlot: p.Bottom
                },
                left: {
                    parent: s("#ui-emote-left"),
                    vA: f.create(-1, -1),
                    vC: f.create(-1, 1),
                    ping: g.None,
                    emote: d.SadFace,
                    modular: !1,
                    useLoadout: !0,
                    emoteSlot: p.Left
                }
            }, this.teamPingWheel = s("#ui-team-pings");
            var c = {
                middle: {
                    parent: s("#ui-team-ping-middle"),
                    vA: f.create(-1, 1),
                    vC: f.create(1, 1),
                    ping: g.None,
                    emote: d.None,
                    modular: !1,
                    displayCloseIcon: !0
                },
                top: {
                    parent: s("#ui-team-ping-top"),
                    vA: f.create(-1, 1),
                    vC: f.create(1, 1),
                    ping: g.Danger,
                    emote: d.None,
                    modular: !1
                },
                right: {
                    parent: s("#ui-team-ping-right"),
                    vA: f.create(1, 1),
                    vC: f.create(1, -1),
                    ping: g.Coming,
                    emote: d.None,
                    modular: !1
                },
                bottom: {
                    parent: s("#ui-team-ping-bottom"),
                    vA: f.create(1, -1),
                    vC: f.create(-1, -1),
                    ping: g.Help,
                    emote: d.None,
                    modular: !1
                },
                "bottom-left": {
                    parent: s("#ui-team-ping-bottom-left"),
                    vA: f.create(-1, -1),
                    vC: f.create(-1, 0),
                    ping: g.None,
                    emote: d.Medical,
                    modular: !1
                },
                "top-left": {
                    parent: s("#ui-team-ping-top-left"),
                    vA: f.create(-1, 0),
                    vC: f.create(-1, 1),
                    ping: g.None,
                    emote: d.Ammo,
                    modular: !0
                }
            };
            this.teamPingSelectors = [];
            for (var m in c)
                if (c.hasOwnProperty(m)) {
                    var u = c[m],
                        x = u.ping != g.None ? y[u.ping] : h[u.emote],
                        _ = r(u.vA),
                        z = r(u.vC),
                        M = x.texture;
                    x.displayCloseIcon && (M = "close.img"), this.teamPingSelectors.push({
                        parent: u.parent,
                        angleA: _,
                        angleC: z,
                        highlight: u.parent.find(".ui-emote-hl"),
                        highlightDisplayed: !1,
                        texture: M,
                        ping: u.ping,
                        emote: u.emote,
                        modular: u.modular
                    })
                }
            this.displayedSelectors = this.teamPingSelectors, this.baseScale = 1, this.container = new w.Container, this.container.scale = new w.Point(this.baseScale, this.baseScale), this.pingContainer = new w.Container, this.container.addChild(this.pingContainer), this.indContainer = new w.Container;
            var T = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16777215,
                    a = new w.Container,
                    i = new w.Container,
                    r = l.groupColors[e] || t,
                    o = w.Sprite.fromImage("ping-border.img");
                o.scale = new w.Point(.4, .4), o.anchor = new w.Point(.5, .5), o.tint = r, o.alpha = 0, o.visible = !0, a.addChild(o);
                var n = w.Sprite.fromImage("ping-team-danger.img");
                n.scale = new w.Point(.4, .4), n.anchor = new w.Point(.5, .5), n.tint = r, n.alpha = 0, n.visible = !0, a.addChild(n);
                var c = w.Sprite.fromImage("ping-team-danger.img");
                c.scale = new w.Point(.5, .5), c.anchor = new w.Point(.5, .5), c.tint = r, c.alpha = 0, c.visible = !0, i.addChild(c);
                var m = w.Sprite.fromImage("ping-indicator.img");
                return m.scale = new w.Point(.5, .5), m.anchor = new w.Point(.5, 0), m.alpha = 0, m.visible = !0, i.addChild(m), {
                    elem: s("#ui-team-indicators").find(".ui-indicator-ping[data-id=" + e + "]"),
                    borderElem: s("#ui-team-indicators").find(".ui-indicator-ping-border[data-id=" + e + "]"),
                    pingContainer: a,
                    indContainer: i,
                    borderSprite: {
                        sprite: o,
                        baseScale: .4
                    },
                    pingSprite: {
                        sprite: n,
                        baseScale: .4
                    },
                    indSpriteOuter: {
                        sprite: m,
                        baseScale: .5,
                        baseTint: m.tint
                    },
                    indSpriteInner: {
                        sprite: c,
                        baseScale: .5,
                        baseTint: c.tint
                    },
                    displayed: !1,
                    fadeIn: 0,
                    life: 0,
                    fadeOut: 0,
                    pos: f.create(0, 0)
                }
            };
            this.pingIndicators = [];
            for (var P = 0; P < 4; P++) {
                var I = T(P);
                this.pingContainer.addChild(I.pingContainer), this.indContainer.addChild(I.indContainer), this.pingIndicators.push({
                    ping: I
                })
            }
            this.airdropIndicator = T(k, y[g.Airdrop].tint), this.pingContainer.addChild(this.airdropIndicator.pingContainer), this.indContainer.addChild(this.airdropIndicator.indContainer), this.pingIndicators.push({
                ping: this.airdropIndicator
            }), this.airstrikeIndicator = T(v, y[g.Airstrike].tint), this.pingContainer.addChild(this.airstrikeIndicator.pingContainer), this.indContainer.addChild(this.airstrikeIndicator.indContainer), this.pingIndicators.push({
                ping: this.airstrikeIndicator
            }), this.emoteLifeIn = .75, this.emoteLife = 1, this.emoteLifeOut = .1, this.pingFadeIn = .5, this.pingLife = 4.25, this.pingFadeOut = .1, this.wedgeOpacityReset = S.touch ? 1 : .75, this.teamEmoteOpacityReset = .2, this.emotes = [], this.newPings = [], this.newEmotes = []
        }
        var s = a("8ee62bea"),
            l = a("989ad62a"),
            c = l.Input,
            m = a("b78cf179"),
            p = m.EmoteSlot,
            d = m.EmoteType,
            h = m.EmoteData,
            u = a("b198b546"),
            g = u.PingType,
            y = u.PingData,
            w = a("8b1dfb45"),
            x = a("34e32c48"),
            f = a("c2a798c8"),
            b = a("10899aea"),
            _ = a("1901e2d9"),
            S = a("ce29f17f"),
            k = (a("119e8c4c"), a("4b8d140f"), 4),
            v = 5;
        n.prototype = {
            n: function() {
                S.touch && (s(document).off("touchstart"), this.emoteButtonElem.off("touchstart"), this.emoteElems.off("touchstart"), this.bigmapCollision.off("touchend")), this.o()
            },
            o: function() {
                this.emoteWheelsGreyed = !1, this.emoteWheels.css("opacity", 1), this.teamEmotesGreyed = !1, this.teamEmotes.css("opacity", 1), this.disable = !1, this.inputReset()
            },
            hasCustomEmotes: function() {
                for (var e = 0, t = Object.keys(this.emoteWheelData), a = 0; a < t.length; a++) {
                    var i = t[a];
                    (this.emoteWheelData[i].emoteSlot > 0 || this.emoteWheelData[i].useLoadout) && e++
                }
                return e > 0
            },
            inputReset: function() {
                this.pingMouseTriggered = !1, this.ga = !1, this.emoteMouseTriggered = !1, this.wheelDisplayed = !1, this.displayWheel(this.teamPingWheel, !1), this.displayWheel(this.emoteWheel, !1), this.emoteTouchedPos = null, this.bigmapPingPos = null, this.emoteTimeoutTicker = 0;
                for (var e = 0; e < this.displayedSelectors.length; e++) {
                    var t = this.displayedSelectors[e],
                        a = h[t.emote];
                    this.teamEmotesGreyed && a.teamOnly ? t.parent.css("opacity", this.teamEmoteOpacityReset) : t.parent.css("opacity", this.wedgeOpacityReset), t.highlight.css("display", "none"), t.highlightDisplayed = !1
                }
            },
            sendPing: function(e) {
                var t = {};
                t.type = e.type, t.pos = e.pos, this.newPings.push(t), this.incrementEmote()
            },
            addPing: function(e, t) {
                if (this.Et) {
                    var a = y[e.type];
                    if (a) {
                        this.uiManager.createPing(e.type, e.pos, e.playerId, this.Et.__id, this.playerBarn, t);
                        var i = null,
                            r = a.sound;
                        if (e.type == g.Airdrop) i = this.pingIndicators[k].ping;
                        else if (e.type == g.Airstrike) i = this.pingIndicators[v].ping;
                        else {
                            var o = this.playerBarn.ne(e.playerId);
                            if (o) {
                                var n = this.playerBarn.ne(this.Et.__id).groupId,
                                    s = o.groupId;
                                if (n == s) {
                                    var l = this.playerBarn.getGroupInfo(s),
                                        c = l.playerIds.indexOf(e.playerId); - 1 !== c && (i = this.pingIndicators[c].ping)
                                }
                            }
                            var m = this.playerBarn.se(e.playerId);
                            m && m.factionLeader && (r = a.soundLeader)
                        }
                        t || e.type != g.Airstrike ? this.audioManager.playSound(r, {
                            channel: "ui"
                        }) : this.audioManager.playSound(r, {
                            channel: "ui",
                            fallOff: 1,
                            soundPos: e.pos,
                            rangeMult: 20
                        }), i && (i.pos = e.pos, i.pingSprite.sprite.texture = w.Texture.fromImage(a.texture), i.indSpriteInner.sprite.texture = w.Texture.fromImage(a.texture), i.indSpriteInner.sprite.tint = a.mapEvent ? a.tint : i.indSpriteInner.baseTint, i.indSpriteOuter.sprite.tint = a.mapEvent ? a.tint : i.indSpriteOuter.baseTint, i.fadeIn = this.pingFadeIn, i.life = this.pingLife, i.fadeOut = this.pingFadeOut, i.mapEvent = a.mapEvent, i.worldDisplay = a.worldDisplay)
                    }
                }
            },
            sendEmote: function(e) {
                var t = {};
                t.useLoadout = e.useLoadout, t.type = e.useLoadout ? e.emoteSlot : e.type, t.pos = e.pos, this.newEmotes.push(t), this.incrementEmote()
            },
            addEmote: function(e) {
                var t = h[e.type];
                if (t) {
                    for (var a = null, i = 0; i < this.emotes.length; i++) this.emotes[i].alive || a ? this.emotes[i].alive && this.emotes[i].playerId == e.playerId && (this.emotes[i].alive = !1) : a = this.emotes[i];
                    if (a || (a = {}, a.alive = !1, a.pos = f.create(0, 0), a.container = new w.Container, a.circleOuter = new w.Sprite.fromImage("emote-circle-outer.img"), a.circleOuter.anchor = new w.Point(.5, .5), a.baseScale = .55, a.circleOuter.scale = new w.Point(.8 * a.baseScale, .8 * a.baseScale), a.circleOuter.tint = 0, a.circleOuter.visible = !0, a.container.addChild(a.circleOuter), a.sprite = new w.Sprite, a.sprite.anchor = new w.Point(.5, .5), a.container.addChild(a.sprite), a.sprite.scale = new w.Point(a.baseScale, a.baseScale), a.posOffset = new w.Point(0, 4), a.container.scale = new w.Point(1, 1), a.container.visible = !1, this.emotes.push(a)), a.alive = !0, a.isNew = !0, a.type = e.type, a.playerId = e.playerId, a.pos = f.create(0, 0), a.lifeIn = this.emoteLifeIn, a.life = this.emoteLife, a.lifeOut = this.emoteLifeOut, a.zIdx = this.zIdxNext++, a.sprite.texture = w.Texture.fromImage(t.texture), a.container.visible = !1, a.baseScale = .55, a.sound = t.sound, e.type == d.Loot) {
                        var r = l.items[e.itemType];
                        if (r) {
                            a.sprite.texture = w.Texture.fromImage(r.lootImg.sprite);
                            var o = l.items[r.ammo];
                            a.circleOuter.tint = o ? o.lootImg.tintDark : 0, r.lootImg.rot ? a.sprite.rotation = r.lootImg.rot : a.sprite.rotation = 0, r.lootImg.mirror ? a.sprite.scale = new w.Point(-1 * a.baseScale, a.baseScale) : a.sprite.scale = new w.Point(a.baseScale, a.baseScale), r.sound && r.sound.deploy && (a.sound = r.sound.deploy)
                        }
                    } else a.circleOuter.tint = 0, a.sprite.rotation = 0, a.sprite.scale = new w.Point(a.baseScale, a.baseScale)
                }
            },
            incrementEmote: function() {
                ++this.emoteCounter >= l.player.emoteThreshold && (this.emoteHardTicker = this.emoteHardTicker > 0 ? this.emoteHardTicker : 1.5 * l.player.emoteHardCooldown)
            },
            c: function(e, t, a, n, s, m, p, u, y) {
                var w = this.playerBarn,
                    k = this.camera,
                    v = f.create(p.de.x, p.de.y);
                if (p.lostFocus && this.inputReset(), u.isBindPressed(c.TeamPingMenu) && (this.pingKeyDown || y || (this.pingKeyDown = !0, this.ga = !0)), u.isBindReleased(c.TeamPingMenu) && this.pingKeyDown && (this.pingKeyDown = !1, this.ga = this.wheelDisplayed), u.isBindPressed(c.TeamPingSingle) && (this.pingMouseTriggered || this.emoteMouseTriggered || (this.emoteScreenPos = f.copy(v), this.pingMouseTriggered = !0)), u.isBindReleased(c.TeamPingSingle) && this.pingMouseTriggered && this.triggerPing(), u.isBindPressed(c.EmoteMenu) && (this.pingMouseTriggered || this.emoteMouseTriggered || !this.pingKeyDown || (this.emoteScreenPos = f.copy(v), this.pingMouseTriggered = !0), this.pingMouseTriggered || (this.emoteScreenPos = f.copy(v), this.emoteMouseTriggered = !0)), u.isBindReleased(c.EmoteMenu) && (this.ga && this.pingMouseTriggered && this.triggerPing(), this.emoteMouseTriggered && this.triggerEmote()), this.Et = a, t == a.__id && !a.ie.dead || this.disable || (this.n(), this.disable = !0), !this.disable) {
                    var z = a.re.weapons[a.re.curWeapIdx],
                        M = l.items[z.name],
                        T = "";
                    if (M && (T = M.ammo ? M.ammo : T), this.wheelKeyTriggered = this.ga || this.emoteMouseTriggered, this.emoteSoftTicker -= e, this.emoteCounter >= l.player.emoteThreshold && this.emoteHardTicker > 0 ? (this.emoteHardTicker -= e, this.emoteHardTicker < 0 && (this.emoteCounter = 0)) : this.emoteSoftTicker < 0 && this.emoteCounter > 0 && (this.emoteCounter--, this.emoteSoftTicker = 1.5 * l.player.emoteSoftCooldown), !this.pingMouseTriggered && !this.emoteMouseTriggered || this.wheelDisplayed || (this.parentDisplayed = this.pingMouseTriggered ? this.teamPingWheel : this.emoteWheel, this.parentDisplayed.css({
                            display: "block",
                            left: this.emoteScreenPos.x,
                            top: this.emoteScreenPos.y
                        }), this.displayWheel(this.parentDisplayed, !0), this.wheelDisplayed = !0, this.displayedSelectors = this.pingMouseTriggered ? this.teamPingSelectors : this.emoteWheelSelectors, this.worldPos = k.O(this.emoteScreenPos)), this.wheelDisplayed)
                        if (this.emoteTimeoutTicker += e, this.emoteTimeoutTicker > 10) this.inputReset();
                        else {
                            this.emoteHardTicker > 0 && !this.emoteWheelsGreyed ? (this.emoteWheels.css("opacity", .5), this.emoteWheelsGreyed = !0) : this.emoteHardTicker <= 0 && this.emoteWheelsGreyed && (this.emoteWheels.css("opacity", 1), this.emoteWheelsGreyed = !1), this.teamEmotesGreyed || 1 != n || (this.teamEmotes.css("opacity", this.teamEmoteOpacityReset), this.teamEmotesGreyed = !0);
                            var P = null;
                            if (g.None, S.touch && (v = this.emoteTouchedPos), v) {
                                var I = f.sub(v, this.emoteScreenPos);
                                I.y *= -1;
                                for (var C = f.length(I), A = r(I), E = 0; E < this.displayedSelectors.length; E++) {
                                    var D = this.displayedSelectors[E];
                                    if (D.modular) {
                                        var O = D.emote;
                                        switch (T) {
                                            case "9mm":
                                                D.emote = d.Ammo9mm, D.texture = h[d.Ammo9mm].texture;
                                                break;
                                            case "12gauge":
                                                D.emote = d.Ammo12Gauge, D.texture = h[d.Ammo12Gauge].texture;
                                                break;
                                            case "762mm":
                                                D.emote = d.Ammo762mm, D.texture = h[d.Ammo762mm].texture;
                                                break;
                                            case "556mm":
                                                D.emote = d.Ammo556mm, D.texture = h[d.Ammo556mm].texture;
                                                break;
                                            case "50AE":
                                                D.emote = d.Ammo50AE, D.texture = h[d.Ammo50AE].texture;
                                                break;
                                            case "308sub":
                                                D.emote = d.Ammo308sub, D.texture = h[d.Ammo308sub].texture;
                                                break;
                                            case "flare":
                                                D.emote = d.AmmoFlare, D.texture = h[d.AmmoFlare].texture;
                                                break;
                                            case "45acp":
                                                D.emote = d.Ammo45acp, D.texture = h[d.Ammo45acp].texture;
                                                break;
                                            default:
                                                D.emote = d.Ammo, D.texture = h[d.Ammo].texture
                                        }
                                        if (O != D.emote) {
                                            var B = D.parent.find(".ui-emote-image"),
                                                L = i(D.texture);
                                            B.css("background-image", "url(" + L + ")")
                                        }
                                    }
                                    var R = D.ping != g.None || D.emote != d.None,
                                        F = h[D.emote],
                                        j = F.teamOnly && 1 == n;
                                    C <= 35 && !R && this.emoteHardTicker <= 0 && !j ? P = D : o(A, D.angleC, D.angleA) && C > 35 && R && this.emoteHardTicker <= 0 && !j ? P = D : D.highlightDisplayed && (D.parent.css("opacity", this.wedgeOpacityReset), D.highlight.css("display", "none"), D.highlightDisplayed = !1)
                                }
                            }
                            P && (this.emoteSelector = P, P.highlightDisplayed || (P.parent.css("opacity", 1), P.highlight.css("display", "block"), P.highlightDisplayed = !0), S.touch && this.emoteTouchedPos && (this.pingMouseTriggered ? this.triggerPing() : this.triggerEmote()))
                        }
                }
                for (var q = 0; q < this.emotes.length; q++) {
                    var N = this.emotes[q];
                    if (N.alive) {
                        var V = !1,
                            G = f.create(0, 0),
                            U = 0,
                            H = w.ve(N.playerId);
                        if (H && !H.ie.dead && (G = f.copy(H.pos), U = H.layer, V = !0), !V) {
                            var W = s.getDeadBodyById(N.playerId);
                            W && (G = f.copy(W.pos), U = W.layer, V = !0)
                        }
                        if (V) {
                            if (N.isNew) {
                                var K = h[N.type];
                                this.audioManager.playSound(N.sound, {
                                    channel: K.channel,
                                    soundPos: G,
                                    layer: U
                                })
                            }
                            N.isNew = !1, N.pos = G, N.lifeIn > 0 ? N.lifeIn -= e : N.life > 0 ? N.life -= e : N.lifeOut > 0 && (N.lifeOut -= e);
                            var Z = _.sameLayer(U, this.Et.layer) ? 3 : U;
                            m.addPIXIObj(N.container, Z, 5e4, N.zIdx), N.alive = N.alive && N.lifeOut > 0
                        } else N.alive = !1
                    }
                }
                for (var X = f.create(.5 * k.screenWidth / k.z(), .5 * k.screenHeight / k.z()), Y = {
                        min: f.sub(k.pos, X),
                        max: f.add(k.pos, X)
                    }, J = w.ne(a.__id).groupId, Q = w.getGroupInfo(J), $ = (Q.playerIds.length, 0); $ < this.pingIndicators.length; $++) {
                    var ee = this.pingIndicators[$].ping,
                        te = Q.playerIds[$],
                        ae = ee.pingContainer,
                        ie = ee.indContainer;
                    if (void 0 != te || ee.mapEvent) {
                        var re = (w.ne(te), te == this.Et.__id),
                            oe = w.se(te),
                            ne = ee.borderSprite.sprite,
                            se = ee.pingSprite.sprite,
                            le = ee.indSpriteOuter.sprite,
                            ce = ee.indSpriteInner.sprite,
                            me = !0;
                        if (ee.fadeIn -= e, ee.life -= e, ee.fadeOut -= ee.life > 0 ? 0 : e, ee.fadeOut > 0) {
                            var pe = ee.pos,
                                de = f.normalizeSafe(f.sub(pe, k.pos), f.create(1, 0)),
                                he = x.intersectRayAabb(k.pos, de, Y.min, Y.max),
                                ue = Math.atan2(de.y, -de.x) + .5 * Math.PI,
                                ge = k.pointToScreen(he),
                                ye = x.testCircleAabb(pe, l.player.radius, Y.min, Y.max),
                                we = k.pixels(ee.borderSprite.baseScale),
                                xe = k.pixels(ee.pingSprite.baseScale);
                            if (ne.scale.set(we, we), se.scale.set(xe, xe), oe && oe.dead) continue;
                            me = ee.fadeOut < 0;
                            var fe = ye ? k.pointToScreen(pe).x : b.clamp(ge.x, 64, k.screenWidth - 64),
                                be = ye ? k.pointToScreen(pe).y : b.clamp(ge.y, 64, k.screenHeight - 64),
                                _e = k.pointToScreen(pe).x,
                                Se = k.pointToScreen(pe).y;
                            se.position.x = _e, se.position.y = Se, ne.position.x = _e, ne.position.y = Se, le.position.x = fe, le.position.y = be, le.rotation = ue, ce.position.x = fe, ce.position.y = be;
                            var ke = ne.alpha <= 0 ? 1 : ne.alpha - e;
                            ne.alpha = ke;
                            var ve = k.pixels(ee.borderSprite.baseScale * (2 - ke));
                            if (ne.scale.set(ve, ve), ce.alpha = ye ? 0 : ke, ee.fadeIn > 0) {
                                var ze = 1 - ee.fadeIn / this.pingFadeIn;
                                ae.alpha = 1, ie.alpha = 1, se.alpha = 1, le.alpha = ye ? 0 : ze
                            } else le.alpha = ye ? 0 : 1;
                            if (ee.life < 0) {
                                var Me = ee.fadeOut / this.pingFadeOut;
                                ae.alpha = Me, ie.alpha = Me
                            }
                            ee.displayed || (ae.visible = ee.worldDisplay, ie.visible = !re || ee.mapEvent, ee.displayed = !0)
                        }
                        me && ee.displayed && (ae.visible = !1, ie.visible = !1, ee.displayed = !1)
                    } else ae.visible = !1, ie.visible = !1, ee.displayed = !1
                }
            },
            displayWheel: function(e, t) {
                e.css("display", t ? "block" : "none")
            },
            updateEmoteWheel: function(e) {
                var t = {
                    top: e[p.Top],
                    right: e[p.Right],
                    bottom: e[p.Bottom],
                    left: e[p.Left]
                };
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var o = h[t[a]];
                        if (this.emoteWheelData[a] && void 0 != o) {
                            var n = h[t[a]];
                            n.teamOnly || (this.emoteWheelData[a].emote = t[a])
                        }
                    }
                this.emoteWheelSelectors = [];
                for (var s in this.emoteWheelData)
                    if (this.emoteWheelData.hasOwnProperty(s)) {
                        var l = this.emoteWheelData[s],
                            c = h[l.emote],
                            m = r(l.vA),
                            d = r(l.vC),
                            u = c.texture;
                        l.displayCloseIcon && (u = "close.img"), this.emoteWheelSelectors.push(Object.assign({}, {
                            angleA: m,
                            angleC: d,
                            highlight: l.parent.find(".ui-emote-hl"),
                            highlightDisplayed: !1,
                            texture: u
                        }, l));
                        var g = l.parent.find(".ui-emote-image"),
                            y = i(u);
                        g.css("background-image", "url(" + y + ")")
                    }
            },
            render: function(e) {
                for (var t = 0; t < this.emotes.length; t++) {
                    var a = this.emotes[t];
                    if (a.container.visible = a.alive, a.alive) {
                        var i = 0;
                        if (a.lifeIn > 0) {
                            var r = 1 - a.lifeIn / this.emoteLifeIn;
                            i = b.easeOutElastic(r)
                        } else if (a.life > 0) i = 1;
                        else if (a.lifeOut > 0) {
                            var o = a.lifeOut / this.emoteLifeOut;
                            i = o
                        }
                        var n = f.add(a.pos, f.mul(a.posOffset, 1 / b.clamp(e.k, .75, 1))),
                            s = e.pointToScreen(n),
                            l = i * a.baseScale * b.clamp(e.k, .9, 1.75);
                        a.container.position.set(s.x, s.y), a.container.scale.set(l, l)
                    }
                }
            }
        }, e.exports = {
            kt: n
        }
    },
    e9735f40: function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-04-07",
                locale: "jp"
            },
            "word-order": "svo",
            "index-slogan": "2Dバトルロワイヤル",
            "index-region": "地域",
            "index-north-america": "北アメリカ",
            "index-europe": "ヨーロッパ",
            "index-asia": "アジア",
            "index-south-america": "南アメリカ",
            "index-korea": "大韓民国",
            "index-players": "プレイヤー",
            "index-play-solo": "1人で遊ぶ",
            "index-play-duo": "2人で遊ぶ",
            "index-play-squad": "4人で遊ぶ",
            "index-join-team": "チームに参加",
            "index-create-team": "チームを作成",
            "index-leave-team": "キャンセル",
            "index-joining-team": "チームに参加中",
            "index-creating-team": "チームを作成中",
            "index-invite-link": "招待リンク",
            "index-solo": "ソロ",
            "index-duo": "デュオ",
            "index-squad": "スクワッド",
            "index-auto-fill": "自動編成あり",
            "index-no-fill": "自動編成なし",
            "index-waiting-for-leader": "リーダーがゲームを開始するのを待っています",
            "index-play": "出発する",
            "index-featured-youtuber": "おすすめYoutuber",
            "index-settings": "設定",
            "index-high-resolution": "高画質モード",
            "index-screen-shake": "振動エフェクト",
            "index-master-volume": "Master Volume",
            "index-sfx-volume": "SFX Volume",
            "index-music-volume": "Music Volume",
            "index-mobile-announce": "スマートフォンでもプレイできるようになりました！",
            "index-mobile-tooltip": "スマートフォンで <span>surviv.io</span> を開いていつでもどこでもプレイしましょう！",
            "index-team-is-full": "チームは満員です！",
            "index-failed-joining-team": "チームへの参加に失敗しました",
            "index-failed-creating-team": "チームの作成に失敗しました",
            "index-failed-finding-game": "ゲームの検索に失敗しました",
            "index-failed-joining-game": "ゲームへの参加に失敗しました",
            "index-lost-connection": "チームとの接続が切断されました",
            "index-host-closed": "ホストが接続を終了しました",
            "index-invalid-protocol": "Old client version.",
            "index-view-more": "詳細",
            "index-back-to-main": "メインメニューに戻る",
            "index-most-kills": "キル数",
            "index-total-kills": "総キル数",
            "index-total-wins": "ドン勝数",
            "index-top-5-percent": "上位5%",
            "index-kill-death-ratio": "キル / デス",
            "index-mode": "Mode",
            "index-for": "For",
            "index-today": "今日",
            "index-this-week": "今週",
            "index-all-time": "全期間",
            "index-top-100": "上位100名",
            "index-rank": "順位",
            "index-player": "プレイヤー名",
            "index-total-games": "Total Games",
            "index-controls": "操作方法",
            "index-movement": "移動",
            "index-movement-ctrl": "[W] , [A] , [S] , [D]",
            "index-aim": "照準",
            "index-aim-ctrl": "マウスカーソル",
            "index-punch": "殴る",
            "index-shoot": "射撃",
            "index-shoot-ctrl": "左クリック",
            "index-change-weapons": "武器変更",
            "index-change-weapons-ctrl": "[1] 〜 [2] , スクロールホイール",
            "index-stow-weapons": "武器をしまう（拳で抵抗）",
            "index-stow-weapons-ctrl": "[3] , [E]",
            "index-swap-weapons": "直前の武器を装備",
            "index-swap-weapons-ctrl": "[Q]",
            "index-reload": "リロード",
            "index-reload-ctrl": "[R]",
            "index-scope-zoom": "スコープ倍率変更",
            "index-scope-zoom-ctrl": "倍率を左クリック",
            "index-pickup": "拾う",
            "index-loot": "奪う",
            "index-revive": "蘇生",
            "index-pickup-ctrl": "[F]",
            "index-use-medical": "医薬品の使用",
            "index-use-medical-ctrl": "アイテムを左クリック , [7]～[0]",
            "index-drop-item": "アイテムを捨てる",
            "index-drop-item-ctrl": "アイテムを右クリック",
            "index-cancel-action": "行動キャンセル",
            "index-cancel-action-ctrl": "[X]",
            "index-view-map": "マップを表示",
            "index-view-map-ctrl": "[M] , [G]",
            "index-toggle-minimap": "ミニマップ表示切替",
            "index-toggle-minimap-ctrl": "[V]",
            "index-use-ping": "チームエモートの使用",
            "index-use-ping-ctrl": "[C]を押しながら右クリックをドラッグして表示. 該当のエモート上で右クリックを離す.",
            "index-use-emote": "エモートの使用",
            "index-use-emote-ctrl": "右クリックをドラッグして表示. 該当のエモート上で右クリックを離す.",
            "index-how-to-play": "遊び方",
            "index-tips-1-desc": "Surviv.ioの勝利条件は最後の一人になるまで生き残ることです. 同じ試合では一度死亡した時点でゲームオーバーとなります.",
            "index-tips-2": "2D PUBG",
            "index-tips-2-desc": "既にPUBGやFortnite、H1Z1といった他のバトルロワイヤルゲームをプレイしたことがあるのであれば、勝利への道は目前です！Surviv.ioは2D版PUBGのようなものです.",
            "index-tips-3": "アイテムを略奪せよ",
            "index-tips-3-desc": "ゲーム開始時点では簡潔なバックパックしかありません. マップ中を駆け巡り、武器や銃弾、スコープ、医薬品など様々なアイテムを手に入れましょう. 他のプレイヤーを討ち取り戦利品をゲットしましょう！",
            "index-tips-4": "赤色 = ガスから逃げろ！",
            "index-tips-4-desc": "敵はプレイヤーだけではありません. マップの端から迫ってくるレッドゾーン内に入れば、断続的なダメージを受けて死に至る危険があります. マップに目を光らせて安全地帯で生き残りましょう.",
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
            "game-alive": "生存",
            "game-reloading": "リロード中",
            "game-using": "使用中",
            "game-reviving": "蘇生中",
            "game-revive-teammate": "チームメイトを蘇生",
            "game-equip": "装備",
            "game-cancel": "キャンセル",
            "game-open-door": "ドアを開く",
            "game-close-door": "ドアを閉める",
            "game-You": "あなた",
            "game-you": "あなた",
            "game-themselves": "自分自身",
            "game-yourself": "あなた自身",
            "game-you-died": "が死亡しました",
            "game-player-died": "が死亡しました",
            "game-with": "使用して",
            "game-knocked-out": "が気絶させました",
            "game-killed": "が殺しました",
            "game-finally-killed": "ついに殺しました",
            "game-finally-bled-out": "ついに息絶えました",
            "game-died-outside": "がセーフゾーンの外で死亡しました",
            "game-the-red-zone": "レッドゾーン",
            "game-waiting-for-players": "プレイヤーを待っています",
            "game-spectating": "観戦中",
            "game-red-zone-advances": "ガス汚染エリア拡大まで",
            "game-red-zone-advancing": "ガス汚染エリアが拡大中、安全地帯に逃げてください！",
            "game-seconds": "秒",
            "game-minutes": "分",
            "game-minute": "分",
            "game-m": "分",
            "game-s": "秒",
            "game-not-enough-space": "インベントリに空きがありません！",
            "game-item-already-owned": "既に所持しているアイテムです！",
            "game-item-already-equipped": "既に装備しているアイテムです！",
            "game-better-item-equipped": "より優れたアイテムを装備しています！",
            "game-play-new-game": "次の試合に参加する",
            "game-spectate": "観戦する",
            "game-full-screen": "全画面表示",
            "game-sound": "ミュート",
            "game-quit-game": "撤退する",
            "game-return-to-game": "試合に戻る",
            "game-hide-match-stats": "戦績を非表示",
            "game-view-match-stats": "戦績を表示",
            "game-previous-teammate": "前のチームメイト",
            "game-next-teammate": "次のチームメイト",
            "game-leave-game": "試合から離脱する",
            "game-your-results": "あなたの戦績",
            "game-chicken": "勝った！勝った！夕飯はドン勝だ！！",
            "game-won-the-game": "がゲームに勝利しました",
            "game-team-eliminated": "まあ、こんな日もあるのさ！次はもう少しツイてますように！",
            "game-solo-rank": "Solo 順位",
            "game-duo-rank": "Duo 順位",
            "game-squad-rank": "Squad 順位",
            "game-rank": "順位",
            "game-team-rank": "チーム順位",
            "game-team-kills": "チームキル数",
            "game-kill": "キル数",
            "game-kills": "キル数",
            "game-damage-dealt": "与ダメージ",
            "game-damage-taken": "被ダメージ",
            "game-survived": "生存時間",
            "game-backpack00": "ポーチ",
            "game-backpack01": "スモールバックパック",
            "game-backpack02": "レギュラーバックパック",
            "game-backpack03": "ミリタリーバックパック",
            "game-bandage": "包帯",
            "game-bandage-tooltip": "左クリックでHPを15回復します",
            "game-healing-tooltip": "75HP以上の場合は回復できません",
            "game-healthkit": "救急箱",
            "game-healthkit-tooltip": "左クリックでHPを100回復します",
            "game-soda": "ソーダ",
            "game-soda-tooltip": "左クリックでアドレナリンを25増加させます",
            "game-adrenaline-tooltip": "アドレナリンはHPを時間とともに自動回復させます",
            "game-painkiller": "鎮痛剤",
            "game-painkiller-tooltip": "左クリックでアドレナリンを50増加させます",
            "game-9mm": "9mm",
            "game-9mm-tooltip": "MP5, MAC-10, UMP9, Vector, CZ-3A1, M9, G18C用の弾薬",
            "game-12gauge": "12 gauge",
            "game-12gauge-tooltip": "M870, M1100, SPAS-12, MP220, Saiga-12用の弾薬",
            "game-762mm": "7.62mm",
            "game-762mm-tooltip": "AK-47, SCAR-H, DP-28, Mosin-Nagant, SV-98, M1, M39, OT-38用の弾薬",
            "game-556mm": "5.56mm",
            "game-556mm-tooltip": "FAMAS, M416, M4A1-S, QBB-97, Mk 12 SPR, M249用の弾薬",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "DEagle 50用の弾薬",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "AWM-S用の弾薬",
            "game-flare": "Flare",
            "game-flare-tooltip": "Flare Gun用の弾薬",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "M1911, M1A1, Model 94, Peacemaker用の弾薬",
            "game-chest01": "レベル1 ベスト",
            "game-chest02": "レベル2 ベスト",
            "game-chest03": "レベル3 ベスト",
            "game-helmet01": "レベル1 ヘルメット",
            "game-helmet02": "レベル2 ヘルメット",
            "game-helmet03": "レベル3 ヘルメット",
            "game-helmet03_forest": "シシガミのカブト",
            "game-helmet03_moon": "月読のカブト",
            "game-1xscope": "1x スコープ",
            "game-2xscope": "2x スコープ",
            "game-4xscope": "4x スコープ",
            "game-8xscope": "8x スコープ",
            "game-15xscope": "15x スコープ",
            "game-level-1": "レベル1",
            "game-level-2": "レベル2",
            "game-level-3": "レベル3",
            "game-level-4": "レベル4",
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
            "game-fists": "拳",
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
            "game-m9_dual": "Dual M9",
            "game-hud-m9_dual": "M9",
            "game-glock": "G18C",
            "game-glock_dual": "Dual G18C",
            "game-hud-glock_dual": "G18C",
            "game-ot38": "OT-38",
            "game-ot38_dual": "Dual OT-38",
            "game-hud-ot38_dual": "OT-38",
            "game-famas": "FAMAS",
            "game-hk416": "M416",
            "game-mk12": "Mk 12 SPR",
            "game-m249": "M249",
            "game-frag": "手榴弾",
            "game-hud-frag": "手榴弾",
            "game-smoke": "スモークグレネード",
            "game-hud-smoke": "スモーク",
            "game-potato": "じゃが芋",
            "game-hud-potato": "じゃが芋",
            "game-potato_heavy": "じゃが芋",
            "game-katana": "刀",
            "game-katana_rusted": "刀錆びた",
            "game-hud-katana_rusted": "刀",
            "game-katana_orchid": "花の刀",
            "game-hud-katana_orchid": "刀",
            "game-naginata": "なぎなた",
            "game-hud-naginata": "なぎなた",
            "game-barrel_01": "バレル",
            "game-silo_01": "サイロ",
            "game-oven_01": "オーブン",
            "index-play-50v50": "Play 50v50",
            "index-50v50": "50v50",
            "game-red-team": "Red Team",
            "game-blue-team": "Blue Team",
            "game-red-leader": "Red Leader",
            "game-blue-leader": "Blue Leader",
            "game-is-down": "is down",
            "game-is-dead": "is dead",
            "game-promoted-to": "promoted to",
            "game-youve-been-promoted-to": "You've been promoted to",
            "game-perk-title-1": "Leadership",
            "game-perk-desc-1": "Max adrenaline.</br>Increased size.",
            "game-perk-title-2": "Firepower",
            "game-perk-desc-2": "High-capacity magazines.",
            "game-perk-title-3": "森林王",
            "game-perk-desc-3": "Increased size.",
            "game-perk-title-4": "Smoke Bomb",
            "game-perk-desc-4": "Throw a smoke bomb at your feet."
        };
        e.exports = i
    },
    e98400ad: function(e, t, a) {
        "use strict";

        function i(e) {
            this.config = e, this.config.addModifiedListener(this.onConfigModified.bind(this)), this.enabled = !1, this.wasEnabled = !1, this.zoom = n.scopeZoomRadius.desktop["1xscope"], this.loadNewMap = !1, this.mapSeed = 0, this.printLootStats = !1, this.setEnabled(!1)
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = a("8ee62bea"),
            n = (a("8b1dfb45"), a("989ad62a")),
            s = a("10899aea"),
            l = a("1901e2d9"),
            c = (a("c2a798c8"), a("ce29f17f"), a("af8ba00f"), a("4b8d140f"));
        i.prototype = {
            n: function() {},
            onConfigModified: function(e) {
                this.refreshUi()
            },
            setEnabled: function(e) {
                this.enabled = e, this.refreshUi()
            },
            newMap: function(e) {
                this.loadNewMap = !0, this.mapSeed = Math.max(e, 1)
            },
            refreshUi: function() {
                var e = this,
                    t = this.enabled;
                o("#ui-editor").css("display", t ? "block" : "none"), o("#ui-leaderboard-wrapper,#ui-right-center").css("display", t ? "none" : "block"), o("#gameAreaWrapper").css("cursor", t ? "default" : "crosshair"), this.uiPos = o("<div/>"), this.uiZoom = o("<div/>");
                var a = function(e, t) {
                    var a = o("<div/>", {
                        class: "btn-game-menu btn-darken",
                        css: {
                            height: "30px",
                            "line-height": "28px"
                        },
                        html: e
                    });
                    return a.on("click", function(e) {
                        e.stopPropagation(), t()
                    }), a
                };
                this.uiMapSeed = o("<div/>");
                var i = o("<div/>", {
                    css: {
                        display: "flex"
                    }
                });
                i.append(a("<", function() {
                    e.newMap(e.mapSeed - 1)
                })), i.append(o("<span/>", {
                    css: {
                        width: "12px"
                    }
                })), i.append(a(">", function() {
                    e.newMap(e.mapSeed + 1)
                })), i.append(o("<span/>", {
                    css: {
                        width: "12px"
                    }
                })), i.append(a("?", function() {
                    e.newMap(l.randomInt(1, 1 << 30))
                }));
                var n = o("<div/>", {
                    css: {
                        display: "flex"
                    }
                });
                n.append(a("Loot summary", function() {
                    e.printLootStats = !0
                }));
                var s = function(t, a) {
                        var i = o("<input/>", {
                            type: "checkbox",
                            value: "value",
                            checked: e.config.get(a)
                        });
                        return i.on("click", function(t) {
                            t.stopPropagation();
                            var r = i.prop("checked");
                            e.config.set(a, r)
                        }), i
                    },
                    c = this.config.get("debug"),
                    m = o("<div/>");
                m.append(function e(t, a) {
                    var i = o("<ul/>", {
                        class: "ui-editor-list"
                    });
                    1 == a.split(".").length && i.css("padding", "0px");
                    for (var n = Object.keys(t), l = 0; l < n.length; l++) {
                        var c = n[l],
                            m = t[c],
                            p = a + "." + c,
                            d = o("<li/>", {
                                class: "ui-editor-list"
                            });
                        if ("object" == (void 0 === m ? "undefined" : r(m))) d.html("" + c), d.append(e(m, p));
                        else if ("boolean" == typeof m) {
                            var h = s(0, p),
                                u = o("<div/>", {
                                    css: {
                                        display: "inline-block"
                                    },
                                    html: c
                                });
                            d.append(h), d.append(u)
                        }
                        i.append(d)
                    }
                    return i
                }(c, "debug"));
                var p = o("<div/>");
                p.append(o("<li/>").append(this.uiPos)), p.append(o("<li/>").append(this.uiZoom)), p.append(o("<li/>").append(o("<hr/>"))), p.append(o("<li/>").append(this.uiMapSeed)), p.append(o("<li/>").append(i)), p.append(o("<li/>").append(n)), p.append(o("<li/>").append(o("<hr/>"))), p.append(o("<li/>").append(m)), o("#ui-editor-info-list").html(p)
            },
            c: function(e, t, a, i) {
                t.ue(c.Key.Plus) && (this.zoom -= 8), t.ue(c.Key.Minus) && (this.zoom += 8), t.ue(c.Key.Zero) && (this.zoom = a.Lt()), this.zoom = s.clamp(this.zoom, .5, 400);
                var r = a.pos.x.toFixed(2),
                    o = a.pos.y.toFixed(2);
                this.uiPos.html("Pos:  " + r + ", " + o), this.uiZoom.html("Zoom: " + this.zoom), this.uiMapSeed.html("Map seed: " + i.seed), this.loadNewMap || (this.mapSeed = i.seed)
            },
            renderCamera: function(e) {},
            postSerialization: function() {
                this.loadNewMap = !1, this.printLootStats = !1
            }
        }, e.exports = i
    },
    edfa1d55: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function n() {
            this.active = !1, this.retained = !0, this.sprite = new p, this.sprite.anchor.set(.5, .5), this.sprite.scale.set(1, 1), this.sprite.visible = !1, this.pos = m.create(0, 0), this.scale = 1, this.alpha = 1, this.visible = !0, this.pulse = !1, this.lifetime = 0, this.ticker = 0, this.zOrder = 0
        }

        function s() {
            this.container = new l.Container, this.mapSprites = []
        }
        var l = a("8b1dfb45"),
            c = a("10899aea"),
            m = a("c2a798c8"),
            p = function(e) {
                function t(e) {
                    i(this, t);
                    var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return a.__zOrder = -1, a
                }
                return o(t, e), t
            }(l.Sprite);
        n.prototype = {
            init: function() {
                this.active = !0, this.retained = !0, this.pos = m.create(0, 0), this.scale = 1, this.alpha = 1, this.pulse = !1, this.visible = !0, this.lifetime = Number.MAX_VALUE, this.ticker = 0, this.zOrder = 0
            },
            free: function() {
                this.active = !1, this.sprite.visible = !1
            },
            release: function() {
                this.retained = !1
            }
        }, s.prototype = {
            n: function() {
                for (var e = 0; e < this.mapSprites.length; e++) {
                    var t = this.mapSprites[e].sprite;
                    t.parent && t.parent.removeChild(t), t.destroy({
                        children: !0
                    })
                }
            },
            addSprite: function() {
                for (var e = null, t = 0; t < this.mapSprites.length; t++)
                    if (!this.mapSprites[t].active) {
                        e = this.mapSprites[t];
                        break
                    }
                return e || (e = new n, this.mapSprites.push(e), this.container.addChild(e.sprite)), e.init(), e
            },
            update: function(e, t, a) {
                for (var i = !1, r = 0; r < this.mapSprites.length; r++) {
                    var o = this.mapSprites[r];
                    if (o.active) {
                        o.zOrder != o.sprite.__zOrder && (o.sprite.__zOrder = o.zOrder, i = !0), o.ticker += e, o.pulse && (o.scale += e / 2.5);
                        var n = t.getMapPosFromWorldPos(o.pos, a),
                            s = o.scale,
                            l = c.smoothstep(o.ticker, 0, .1) * (1 - c.smoothstep(o.ticker, o.lifetime - .5, o.lifetime));
                        o.sprite.position.set(n.x, n.y), o.sprite.scale.set(s, s), o.sprite.alpha = o.alpha * l, o.sprite.visible = o.visible && o.sprite.alpha > 1e-4, o.ticker >= o.lifetime && !o.retained && o.free()
                    }
                }
                i && this.container.children.sort(function(e, t) {
                    return e.__zOrder - t.__zOrder
                })
            }
        }, e.exports = {
            MapSpriteBarn: s
        }
    },
    ef7c973f: function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Desert",
                    icon: "img/loot/loot-weapon-flare-gun.svg"
                },
                assets: {
                    audio: [{
                        name: "piano_02",
                        channel: "sfx"
                    }, {
                        name: "log_03",
                        channel: "sfx"
                    }, {
                        name: "log_04",
                        channel: "sfx"
                    }, {
                        name: "piano_music_01",
                        channel: "ambient"
                    }],
                    atlases: ["gradient", "shared", "desert"]
                },
                biome: {
                    colors: {
                        background: 6976835,
                        water: 9083726,
                        beach: 13206586,
                        riverbank: 11689508,
                        grass: 14657367,
                        underground: 4001027,
                        playerSubmerge: 5151631
                    },
                    particles: {
                        ripple: "desertRipple"
                    }
                },
                gameMode: {
                    maxPlayers: 80,
                    desertMode: !0
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    f034d167: function(e, t, a) {
        "use strict";

        function i() {
            this.bullets = []
        }
        var r = a("8b1dfb45"),
            o = a("989ad62a"),
            n = (a("8649e148"), a("34e32c48"), a("6b42806d")),
            s = a("10899aea"),
            l = a("1901e2d9"),
            c = a("c2a798c8");
        a("ce29f17f"), a("af8ba00f"), i.prototype = {
            addFlare: function(e, t, a) {
                for (var i = null, n = 0; n < this.bullets.length; n++)
                    if (!this.bullets[n].alive && !this.bullets[n].collided) {
                        i = this.bullets[n];
                        break
                    }
                i || (i = {}, i.alive = !1, i.flareContainer = new r.Container, i.flareContainer.visible = !1, i.flare = r.Sprite.fromImage("part-flare-01.img"), i.flare.anchor.set(.5, .5), i.flareContainer.addChild(i.flare), i.trailContainer = new r.Container, i.trailContainer.visible = !1, i.trailContainer.pivot.set(14.5, 0), i.bulletTrail = r.Sprite.fromImage("player-bullet-trail-02.img"), i.bulletTrail.anchor.set(.5, .5), i.trailContainer.addChild(i.bulletTrail), this.bullets.push(i));
                var l = o.bullets[e.bulletType],
                    m = 1 + e.varianceT * l.variance,
                    p = s.remap(e.distAdjIdx, 0, 32, -1, 1),
                    d = l.distance / Math.pow(o.bullet.reflectDistDecay, e.reflectCount);
                i.alive = !0, i.isNew = !0, i.collided = !1, i.flareScale = .01, i.trailScale = 1, i.timeAlive = 0, i.maxTimeAlive = 2.5, i.startPos = c.copy(e.pos), i.pos = c.copy(e.pos), i.dir = c.copy(e.dir), i.layer = e.layer, i.speed = l.speed * m, i.distance = d * m + p;
                var h = Math.atan2(i.dir.x, i.dir.y);
                i.flareContainer.rotation = h - Math.PI / 2, i.trailContainer.rotation = h - Math.PI / 2, i.layer = e.layer;
                var u = t.ve(i.playerId);
                u && 2 & u.layer && (i.layer |= 2);
                var g = o.tracerColors[l.tracerColor],
                    y = g.regular;
                u && u.isOnBrightSurface && (y = g.saturated), i.bulletTrail.scale.set(.8, l.tracerWidth), i.tracerLength = l.tracerLength, i.bulletTrail.tint = y, i.tracerAlphaRate = g.alphaRate, i.tracerAlphaMin = g.alphaMin, i.bulletTrail.alpha = 1, i.flare.scale.set(1, 1), i.flare.tint = l.flareColor, i.flare.alpha = .8, i.maxFlareScale = l.maxFlareScale, i.smokeThrottle = 0, i.flareContainer.visible = !0, i.trailContainer.visible = !0
            },
            c: function(e, t, a, i, r, o, m, p) {
                for (var d = (t.Se.m(), 0); d < this.bullets.length; d++) {
                    var h = this.bullets[d];
                    if (h.collided && (h.flareScale = s.max(h.flareScale - .5 * e, 0), h.flare.alpha = s.max(h.flare.alpha - e, 0), h.trailScale = s.max(h.trailScale - 6 * e, 0), h.bulletTrail.alpha = s.max(h.bulletTrail.alpha - e, 0), h.pos = c.add(h.pos, c.mul(h.dir, e * h.speed)), h.flare.alpha <= 0 && (h.collided = !1, h.flareContainer.visible = !1, h.trailContainer.visible = !1)), h.alive) {
                        if (h.tracerAlphaRate) {
                            var u = (r.__id, h.playerId, r.__id == h.playerId ? h.tracerAlphaRate : .9 * h.tracerAlphaRate);
                            h.bulletTrail.alpha = s.max(h.tracerAlphaMin, h.bulletTrail.alpha * u)
                        }
                        h.timeAlive += e, h.flareScale = s.easeOutExpo(h.timeAlive / h.maxTimeAlive) * h.maxFlareScale, h.smokeThrottle <= 0 ? h.smokeThrottle = .05 : h.smokeThrottle -= e;
                        var g = h.distance - c.length(c.sub(h.startPos, h.pos)),
                            y = s.min(g, e * h.speed);
                        c.copy(h.pos), h.pos = c.add(h.pos, c.mul(h.dir, y)), s.eqAbs(g, y) && (h.collided = !0, h.alive = !1);
                        var w = 0;
                        !(l.sameLayer(w, r.layer) || 2 & r.layer) || 2 & r.layer && a.insideStructureMask(n.createCircle(h.pos, 1)) || (w |= 2), o.addPIXIObj(h.trailContainer, w, 1e3, 0), o.addPIXIObj(h.flareContainer, w, 1e3, 1), h.isNew = !1
                    }
                }
            },
            render: function(e) {
                for (var t = (e.pixels(1), 0); t < this.bullets.length; t++) {
                    var a = this.bullets[t];
                    if (a.alive || a.collided) {
                        var i = e.pointToScreen(a.pos);
                        a.flareContainer.position.set(i.x, i.y);
                        var r = e.pixels(1);
                        a.flareContainer.scale.set(r * a.flareScale, r * a.flareScale);
                        var o = c.length(c.sub(a.pos, a.startPos));
                        a.trailContainer.position.set(i.x, i.y);
                        var n = s.min(15 * a.tracerLength, o / 2);
                        a.trailContainer.scale.set(r * n * a.trailScale, r)
                    }
                }
            }
        }, e.exports = {
            ot: i
        }
    },
    f2372804: function(e, t, a) {
        "use strict";
        var i = {
            "@metadata": {
                "last-updated": "2018-01-28",
                locale: "ru"
            },
            "word-order": "svo",
            "index-slogan": "Королевская Битва в 2D",
            "index-region": "Регион",
            "index-north-america": "Северная Америка",
            "index-europe": "Европа",
            "index-asia": "Азия",
            "index-south-america": "Южная Америка",
            "index-korea": "Южная Корея",
            "index-players": "игроков",
            "index-play-solo": "Играть Соло",
            "index-play-duo": "Играть в Дуэте",
            "index-play-squad": "Играть в Отряд",
            "index-join-team": "Войти в команду",
            "index-create-team": "Создать Команду",
            "index-how-to-play": "Как играть",
            "index-leave-team": "Покинуть Команду",
            "index-joining-team": "Присоединение к Команде",
            "index-creating-team": "Создание Команды",
            "index-invite-link": "Ссылка-приглашение",
            "index-invite-code": "Код приглашения",
            "index-join-team-help": "Есть ссылка на команду или код? Напиши его сюда:",
            "index-solo": "Соло",
            "index-duo": "Дуэт",
            "index-squad": "Отряд",
            "index-auto-fill": "Автозаполнение",
            "index-no-fill": "Не заполнять",
            "index-waiting-for-leader": "Ожидание лидера, чтобы начать игру",
            "index-play": "Играть",
            "index-customize-loadout": "Настраиваемые эмоции",
            "index-twitter-follow": "Следовать в Twitter",
            "index-youtube-subscribe": "Подписаться на YouTube",
            "index-facebook-like": "Лайкнуть в Facebook",
            "index-featured-youtuber": "Рекомендуемые Ютуберы",
            "index-streaming-live": "Сейчас стримят!",
            "index-settings": "Настройки",
            "index-high-resolution": "Высокое разрешение (проверьте, чтобы увеличить качество изображения)",
            "index-screen-shake": "Дрожание экрана",
            "index-master-volume": "Уровень Громкости",
            "index-sfx-volume": " Громкость Эффектов",
            "index-music-volume": "Громкость Музыки",
            "index-mobile-announce": "Теперь доступно на ваших телефонах!",
            "index-mobile-tooltip": "Вы можете зайти в surviv.io на своём телефоне, играйте в <span>surviv.io</span> в любом месте!",
            "index-version": "версия",
            "index-privacy": "Конфиденциальность",
            "index-attributions": "атрибуции",
            "index-proxy-sites": "прокси сайты",
            "index-team-is-full": "Команда заполнена!",
            "index-failed-joining-team": "Не удалось присоединиться к команде.",
            "index-failed-creating-team": "Не удалось создать команду.",
            "index-failed-finding-game": "Не удалось найти игру.",
            "index-failed-joining-game": "Не удалось присоединиться к игре.",
            "index-lost-connection": "Соединение с командой прервалось.",
            "index-host-closed": "Соединение с сервером закрыто.",
            "index-view-more": "Посмотреть ещё",
            "index-back-to-main": "Вернуться в главное меню",
            "index-most-kills": "Наибольшее кол-во убийств",
            "index-total-kills": "Всего убийств",
            "index-total-wins": "Всего побед",
            "index-top-5-percent": "Процент Топ 5",
            "index-kill-death-ratio": "Соотношение убийство-смерть",
            "index-for": "За",
            "index-today": "Сегодня",
            "index-this-week": "Эту неделю",
            "index-all-time": "Всё время",
            "index-top-100": "TOP 100",
            "index-rank": "Ранг",
            "index-player": "Игрок",
            "index-total-games": "Всего игр",
            "index-controls": "Управление",
            "index-movement": "Перемещение",
            "index-movement-ctrl": "W, A, S, D",
            "index-aim": "Целиться",
            "index-aim-ctrl": "Мышь",
            "index-punch": "Ударить",
            "index-shoot": "Выстрелить",
            "index-shoot-ctrl": "Левый Щелчок",
            "index-change-weapons": "Сменить Оружие",
            "index-change-weapons-ctrl": "1-4 или Колесо Прокрутки",
            "index-stow-weapons": "Убрать оружие из рук",
            "index-stow-weapons-ctrl": "3 или Е",
            "index-swap-weapons": "Смена на Предыдущее Оружие",
            "index-swap-weapons-ctrl": "Q",
            "index-reload": "Перезарядка",
            "index-reload-ctrl": "R",
            "index-scope-zoom": "Смена прицела",
            "index-scope-zoom-ctrl": "Левый щелчок на Прицел",
            "index-pickup": "Подобрать добычу",
            "index-loot": "Добычу",
            "index-revive": "оживление",
            "index-pickup-ctrl": "F",
            "index-use-medical": "Медицинский Предмет change on Медикамент",
            "index-use-medical-ctrl": "Левый Щелчок на Предмет или цифры от 0-7",
            "index-drop-item": "Выкинуть предмет",
            "index-drop-item-ctrl": "Правый Щелчок на Предмет",
            "index-cancel-action": "Отменить действие",
            "index-cancel-action-ctrl": "X",
            "index-view-map": "Посмотреть Карту",
            "index-view-map-ctrl": "M или G",
            "index-toggle-minimap": "Переключить режим просмотра",
            "index-toggle-minimap-ctrl": "V",
            "index-use-ping": "Использование команд",
            "index-use-ping-ctrl": "Удерживая C зажать Правую кнопку мыши и водить мышкой, затем выбрав команду отпустить",
            "index-use-emote": "Использование Эмодзи",
            "index-use-emote-ctrl": "Зажать Правую кнопку мыши и водить мышкой, затем отпустить Правую кнопку мыши",
            "index-tips-1-desc": "Цель surviv.io - остаться последним выжившим. В одном раунде у вас только одна жизнь и нет возможности возродиться.",
            "index-tips-2": "PUBG в 2D",
            "index-tips-2-desc": "Если вы играли в другие игры жанра Королевской Битвы (такие как PUBG, Fortnite или H1Z1), то вы уже знаете правила. По сути, surviv.io - это двумерный PUBG (только меньше лагает).",
            "index-tips-3": "Убивай и добывай",
            "index-tips-3-desc": "Вы начнете игру без каких-либо предметов или оружия, у вас есть только простой рюкзак. Передвигайтесь по карте, чтобы найти полезные вещи: оружие, боеприпасы, прицелы и медикаменты. Убивайте других игроков и забирайте себе их вещи!",
            "index-tips-4": "Красный - опасный!",
            "index-tips-4-desc": "Другие игроки - это не единственное, что может вас ранить. По ходу игры Красная Зона будет надвигаться с краёв карты и наносить всё больше урона, если вы окажетесь в ней. Так что посматривайте на карту и будьте осторожны!",
            "game-alive": "В живых",
            "game-reloading": "Перезарядка",
            "game-using": "Использование",
            "game-reviving": "Возрождение",
            "game-revive-teammate": "Возродить Союзника",
            "game-equip": "Взять",
            "game-cancel": "Отмена",
            "game-open-door": "Открыть дверь",
            "game-close-door": "Закрыть дверь",
            "game-You": "Вы",
            "game-you": "вы",
            "game-themselves": "себя",
            "game-yourself": "себя",
            "game-you-died": "умерли",
            "game-player-died": "Умер",
            "game-with": "с помощью",
            "game-knocked-out": "Нокаутировал",
            "game-killed": "убили",
            "game-finally-killed": "наконец убили",
            "game-finally-bled-out": "наконец умер",
            "game-died-outside": "умер за пределами безопасной зоны",
            "game-the-red-zone": "Красная зона",
            "game-waiting-for-players": "Ожидание игроков",
            "game-spectating": "Наблюдение за",
            "game-red-zone-advances": "Красная зона наступит через",
            "game-red-zone-advancing": "Красная зона наступает, доберитесь до безопасной зоны!",
            "game-seconds": "секунды",
            "game-minutes": "минуты",
            "game-minute": "минута",
            "game-m": "м",
            "game-s": "с",
            "game-not-enough-space": "Недостаточно места!",
            "game-item-already-owned": "Этот предмет уже есть!",
            "game-item-already-equipped": "Этот предмет уже экипирован!",
            "game-better-item-equipped": "Предмет получше уже есть!",
            "game-play-new-game": "Начать Новую Игру",
            "game-spectate": "Наблюдать",
            "game-full-screen": "Полный экран",
            "game-sound": "Звук",
            "game-quit-game": "Выйти из Игры",
            "game-return-to-game": "Вернуться в Игру",
            "game-hide-match-stats": "Скрыть Статистику Матча",
            "game-view-match-stats": "Посмотреть Статистику Матча",
            "game-previous-teammate": "Предыдущий Напарник",
            "game-next-teammate": "Следующий Напарник",
            "game-spectate-previous": "",
            "game-spectate-next": "",
            "game-leave-game": "Покинуть Игру",
            "game-your-results": "Твои Результаты",
            "game-chicken": "Победа, победа после обеда!",
            "game-won-the-game": "выиграл игру.",
            "game-team-eliminated": "Ваша команда потерпела поражение.",
            "game-rank": "Ранг",
            "game-team-rank": "Ранг команды",
            "game-team-kills": "Командных убийств",
            "game-kill": "Убийство",
            "game-kills": "Убийства",
            "game-damage-dealt": "Нанесённый Урон",
            "game-damage-taken": "Полученный Урон",
            "game-survived": "Выжил",
            "game-backpack00": "Патронташ",
            "game-backpack01": "Маленький Рюкзак",
            "game-backpack02": "Обычный Рюкзак",
            "game-backpack03": "Военный Рюкзак",
            "game-bandage": "Бинт",
            "game-bandage-tooltip": "Левый Щелчок, чтобы восстановить 15 здоровья.",
            "game-healing-tooltip": "Не востанавливает больше 75 здоровья.",
            "game-healthkit": "Аптечка",
            "game-healthkit-tooltip": "Левый Щелчок, чтобы восстановить 100 здоровья.",
            "game-soda": "Сода",
            "game-soda-tooltip": "Левый Щелчок, чтобы увеличить адреналин на 25.",
            "game-adrenaline-tooltip": "Адреналин со временем восстанавливает здоровье.",
            "game-painkiller": "Таблетки",
            "game-painkiller-tooltip": "Левый Щелчок, чтобы увеличить адреналин на 50.",
            "game-9mm": "9мм",
            "game-9mm-tooltip": "Патроны для M9, G18C, MP5, MAC-10, CZ-3A1, UMP9 и Vector.",
            "game-12gauge": "12 калибр",
            "game-12gauge-tooltip": "Патроны для M870, M1100, SPAS-12, Сайга-12 и MP220.",
            "game-762mm": "7.62мм",
            "game-762mm-tooltip": "Патроны для AK-47, SCAR-H, M39, Винтовка Мосина, SV-98, M1, OT-38 и DP-28.",
            "game-556mm": "5.56мм",
            "game-556mm-tooltip": "Патроны для FAMAS, M416, QBB-97, Mk 12 и M249.",
            "game-50AE": ".50 AE",
            "game-50AE-tooltip": "Патроны для DEagle 50.",
            "game-308sub": ".308 Subsonic",
            "game-308sub-tooltip": "Патроны для AWM-S.",
            "game-flare": "Flare",
            "game-flare-tooltip": "Патроны для Flare Gun.",
            "game-45acp": ".45 ACP",
            "game-45acp-tooltip": "Патроны M1911, M1A1, Model 94 для Peacemaker.",
            "game-chest01": "Жилет 1-ого уровня",
            "game-chest02": "Жилет 2-ого уровня",
            "game-chest03": "Жилет 3-ого уровня",
            "game-helmet01": "Шлем 1-ого уровня",
            "game-helmet02": "Шлем 2-ого уровня",
            "game-helmet03": "Шлем 3-ого уровня",
            "game-1xscope": "1x Прицел",
            "game-2xscope": "2x Прицел",
            "game-4xscope": "4x Прицел",
            "game-8xscope": "8x Прицел",
            "game-15xscope": "15x Прицел",
            "game-level-1": "1-й Ур.",
            "game-level-2": "2-й Ур.",
            "game-level-3": "3-й Ур.",
            "game-level-4": "4-й Ур.",
            "game-outfitBase": "Базовая Экипировка",
            "game-outfitRoyalFortune": "Королевская удача",
            "game-outfitKeyLime": "Лаймовый оттенок",
            "game-outfitCobaltShell": "Кобальтовая Оболочка",
            "game-outfitCarbonFiber": "Углеродное волокно",
            "game-outfitDarkGloves": "Профессионал",
            "game-outfitGhillie": "Маскировочный костюм",
            "game-outfitCamo": "Лесной камуфляж",
            "game-outfitRed": "Мишень",
            "game-outfitWhite": "Арктический Мститель",
            "game-outfitWoodland": "Боевой камуфляж",
            "game-outfitJester": "Шутовской Наряд",
            "game-outfitPrisoner": "Новый Чёрный",
            "game-outfitCasanova": "Сатиновая куртка",
            "game-outfitKhaki": "Положивший Начало",
            "game-fists": "удар",
            "game-woodaxe": "Топор",
            "game-woodaxe_bloody": "Окровавленный топор",
            "game-hud-woodaxe_bloody": "Топор",
            "game-katana": "Катана",
            "game-katana_rusted": "Ржавая катана",
            "game-hud-katana_rusted": "Катана",
            "game-katana_orchid": "Катана орхидея",
            "game-hud-katana_orchid": "Катана",
            "game-stonehammer": "Каменный молот",
            "game-hook": "Крюк",
            "game-pan": "Сковорода",
            "game-ak47": "AK-47",
            "game-dp28": "ДП-28",
            "game-mosin": "Винтовка Мосина",
            "game-m39": "M39 EMR",
            "game-mp5": "MP5",
            "game-mac10": "MAC-10",
            "game-ump9": "UMP9",
            "game-m870": "M870",
            "game-mp220": "MP220",
            "game-saiga": "Сайга-12",
            "game-m9": "M9",
            "game-glock": "G18C",
            "game-ot38": "ОЦ-38",
            "game-flare_gun": "Сигнальная ракетница",
            "game-flare_gun_dual": "Сигнальная ракетница",
            "game-hud-flare_gun_dual": "Сигнальная ракетница",
            "game-frag": "Осколочная Граната",
            "game-hud-frag": "Осколочная",
            "game-smoke": "Дымовая Граната",
            "game-hud-smoke": "Дымовая",
            "game-potato": "Картофель",
            "game-hud-potato": "Картофель",
            "game-potato_heavy": "Картофель",
            "game-barrel_01": "взрывом бочки",
            "game-silo_01": "a silo",
            "index-play-50v50": "Играть в 50v50",
            "index-50v50": "50v50",
            "game-red-team": "Красная команда",
            "game-blue-team": "Синяя команда",
            "game-red-leader": "расного лидера",
            "game-blue-leader": "синего лидера",
            "game-lieutenant": "лейтенанта",
            "game-is-down": "is down",
            "game-is-dead": "is dead",
            "game-promoted-to": "повышен до",
            "game-youve-been-promoted-to": "Вы были повышены до"
        };
        e.exports = i
    },
    f398b7c7: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r() {
            function e() {
                return Math.floor(Math.random() * Math.pow(2, 32)).toString(16)
            }
            return e() + e()
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
            s = function() {
                function e() {
                    i(this, e), this.instanceId = r(), this.requests = 0, this.enabled = !0, this.throttle = !1, this.throttleTimeout = 0, this.errorLogCount = 0, this.appErrorLogCount = 0
                }
                return o(e, [{
                    key: "update",
                    value: function() {
                        var e = (new Date).getTime();
                        this.throttle ? e > this.throttleTimeout && (this.throttle = !1, this.requests = 0) : this.requests = Math.max(this.requests - 1, 0)
                    }
                }, {
                    key: "sample",
                    value: function() {
                        return Math.random() <= .01
                    }
                }, {
                    key: "store",
                    value: function(e, t) {
                        if (this.enabled) {
                            if (++this.requests > 5) return this.throttleTimeout = (new Date).getTime() + 18e4, void(this.throttle = !0);
                            var a = "https://us-central1-surviv-fa40f.cloudfunctions.net/" + e;
                            t.key = "AIzaSyCrPuZeAQ2-aXZdTwZNwQJdv4rvsTE-2i8", n.ajax({
                                type: "POST",
                                dataType: "html",
                                url: a,
                                data: t,
                                timeout: 1e4
                            })
                        }
                    }
                }, {
                    key: "storeGeneric",
                    value: function(e, t) {
                        this.sample() && this.store("storeGeneric", {
                            parent: e,
                            child: t
                        })
                    }
                }, {
                    key: "logWindowOnError",
                    value: function(e) {
                        this.errorLogCount < 2 && (this.store("windowOnError", {
                            error: e
                        }), this.errorLogCount++)
                    }
                }, {
                    key: "logWindowOnAppError",
                    value: function(e) {
                        this.appErrorLogCount < 2 && (this.store("windowOnAppError", {
                            error: e
                        }), this.appErrorLogCount++)
                    }
                }, {
                    key: "logError",
                    value: function(e) {
                        this.store("errorLog", {
                            error: e
                        })
                    }
                }, {
                    key: "logTest",
                    value: function(e) {
                        this.store("testLog", {
                            error: e
                        })
                    }
                }, {
                    key: "logProxy",
                    value: function(e) {
                        this.store("onProxy", {
                            data: e
                        })
                    }
                }]), e
            }(),
            l = new s;
        setInterval(function() {
            l.update()
        }, 1e3), e.exports = l
    },
    f4ccd911: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            try {
                return e.createGain().disconnect(e.destination), !1
            } catch (e) {
                return !0
            }
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
            n = window.navigator.userAgent.indexOf("iPod") > -1 || window.navigator.userAgent.indexOf("iPhone") > -1 || window.navigator.userAgent.indexOf("iPad") > -1,
            s = null,
            l = !1,
            c = 128,
            m = function() {
                function e(t) {
                    i(this, e), this.ctx = t, this.sound = null, this.id = 0, this.volume = 1, this.volumeOld = this.volume, this.pan = 0, this.panOld = this.pan, this.sourceNode = null, this.gainNode = this.ctx.createGain(), this.pannerNode = this.ctx.createPanner(), this.pannerNode.panningModel = "equalpower", this.gainNode.connect(this.pannerNode), this.destination = null, this.paramEvents = 0, this.stopTime = 0, this.stopping = !1, this.playState = "playFinished"
                }
                return o(e, [{
                    key: "setGain",
                    value: function(e) {
                        this.stopping || (n ? this.gainNode.gain.value = e : (this.gainNode.gain.setTargetAtTime(e, this.ctx.currentTime, .02), ++this.paramEvents))
                    }
                }, {
                    key: "setPan",
                    value: function(e) {
                        this.stopping || (this.pannerNode.setPosition(e, 0, -.5), this.paramEvents += 3)
                    }
                }, {
                    key: "start",
                    value: function(e, t, a, i, r, o, s, l) {
                        this.volume = this.volumeOld = a, this.pan = this.panOld = i, this.ambient = l, this.stopping = !1, this.destination = e, this.sourceNode = this.ctx.createBufferSource(), this.sourceNode.buffer = t, this.sourceNode.connect(this.gainNode), this.pannerNode.connect(this.destination), this.sourceNode.loop = r, n ? this.gainNode.gain.value = a : (this.gainNode.gain.setValueAtTime(a, this.ctx.currentTime), ++this.paramEvents), this.setPan(i), this.sourceNode.start(this.ctx.currentTime + o, s), this.stopTime = r ? 1e100 : this.ctx.currentTime + o + t.duration - s, this.playState = "playSucceeded"
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.stopping || (this.setGain(0), this.stopTime = this.ctx.currentTime + .1, this.stopping = !0, this.playState = "playInterrupted")
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        if (this.sound.instances.splice(this.sound.instances.indexOf(this), 1), this.sound = null, this.sourceNode.stop(0), this.sourceNode.disconnect(this.gainNode), this.pannerNode.disconnect(this.destination), n) try {
                            this.sourceNode.buffer = s
                        } catch (e) {}
                        this.destination = null, this.sourceNode = null, this.playState = "playFinished"
                    }
                }, {
                    key: "reallocNodes",
                    value: function() {
                        this.gainNode.disconnect(this.pannerNode), this.gainNode = this.ctx.createGain(), this.pannerNode = this.ctx.createPanner(), this.pannerNode.panningModel = "equalpower", this.gainNode.connect(this.pannerNode), this.paramEvents = 0
                    }
                }]), e
            }(),
            p = null,
            d = function() {
                function e(t) {
                    i(this, e), this.instance = t, this.id = t.id
                }
                return o(e, [{
                    key: "check",
                    value: function(e) {
                        this.id != this.instance.id && (this.instance = p, this.id = p.id)
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.check(), this.instance.stop()
                    }
                }, {
                    key: "volume",
                    get: function() {
                        return this.check(), this.instance.volume
                    },
                    set: function(e) {
                        this.check(!0), this.instance.volume = e
                    }
                }, {
                    key: "pan",
                    get: function() {
                        return this.check(), this.instance.pan
                    },
                    set: function(e) {
                        this.check(!0), this.instance.pan = e
                    }
                }, {
                    key: "playState",
                    get: function() {
                        return this.check(), this.instance.playState
                    }
                }]), e
            }(),
            h = null,
            u = function() {
                function e(t, a, r, o, n) {
                    if (i(this, e), this.ctx = t, this.inNode = a, this.outNode = r, this.name = o, this.volume = void 0 != n.volume ? n.volume : 1, this.echoVolume = n.echoVolume || 0, this.echoDelay = n.echoDelay || 0, this.echoLowPass = n.echoLowPass || 3e3, this.stereoSpread = n.stereoSpread || 0, !l) {
                        var s = this.ctx.createGain();
                        this.inNode.connect(s), this.inNode = s
                    }
                    this.gainNode = null, this.convolverNode = null, this.echoGainNode = null, this.echoLowPassNode = null, this.echoDelayNode = null, this.stereoDelayNode = null, this.mergerNode = null, this.convolverNode = this.ctx.createConvolver(), this.echoVolume && (this.echoLowPassNode = this.ctx.createBiquadFilter(), this.echoLowPassNode.type = "lowpass", this.echoLowPassNode.frequency.setValueAtTime(this.echoLowPass, 0), this.echoLowPassNode.Q.setValueAtTime(-3.0102999566398125, 0), this.echoDelayNode = this.ctx.createDelay(this.echoDelay || .01), this.echoDelayNode.delayTime.setValueAtTime(this.echoDelay, 0)), this.stereoSpread && (this.stereoDelayNode = this.ctx.createDelay(this.stereoSpread), this.stereoDelayNode.delayTime.setValueAtTime(this.stereoSpread, 0), this.mergerNode = this.ctx.createChannelMerger(2)), this.targetLevel = 0, this.gain = 0, this.drainEndTime = 0, this.active = !1
                }
                return o(e, [{
                    key: "isConnected",
                    value: function() {
                        return null != this.gainNode
                    }
                }, {
                    key: "connect",
                    value: function() {
                        if (this.gainNode = this.ctx.createGain(), this.gainNode.channelCount = 1, this.gainNode.channelCountMode = "explicit", this.gainNode.gain.setValueAtTime(0, 0), this.echoVolume && (this.echoGainNode = this.ctx.createGain(), this.echoGainNode.channelCount = 1, this.echoGainNode.channelCountMode = "explicit", this.echoGainNode.gain.setValueAtTime(this.echoVolume, 0)), this.inNode.connect(this.gainNode), this.gainNode.connect(this.convolverNode), this.echoVolume && (this.convolverNode.connect(this.echoGainNode), this.echoGainNode.connect(this.echoLowPassNode), this.echoLowPassNode.connect(this.echoDelayNode), this.echoDelayNode.connect(this.convolverNode)), this.stereoSpread) {
                            var e = this.convolverNode.buffer;
                            e && 1 != e.numberOfChannels && console.error("stereoSpread can only be applied to mono IRs"), this.convolverNode.connect(this.stereoDelayNode), this.convolverNode.connect(this.mergerNode, 0, 0), this.stereoDelayNode.connect(this.mergerNode, 0, 1), this.mergerNode.connect(this.outNode)
                        } else this.convolverNode.connect(this.outNode)
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        this.inNode.disconnect(this.gainNode), this.gainNode.disconnect(this.convolverNode), this.echoVolume && (this.convolverNode.disconnect(this.echoGainNode), this.echoGainNode.disconnect(this.echoLowPassNode), this.echoLowPassNode.disconnect(this.echoDelayNode), this.echoDelayNode.disconnect(this.convolverNode)), this.stereoSpread ? (this.convolverNode.disconnect(this.stereoDelayNode), this.convolverNode.disconnect(this.mergerNode, 0, 0), this.stereoDelayNode.disconnect(this.mergerNode, 0, 1), this.mergerNode.disconnect(this.outNode)) : this.convolverNode.disconnect(this.outNode), this.gainNode = null, this.echoGainNode = null
                    }
                }, {
                    key: "setGain",
                    value: function(e, t, a) {
                        if (e *= this.volume, this.gain != e) {
                            if (0 == e || this.gainNode || this.connect(), 0 == e) {
                                this.echoGainNode && this.echoGainNode.gain.setValueAtTime(0, a);
                                var i = this.convolverNode.buffer,
                                    r = i ? i.duration : 0;
                                this.drainEndTime = a + r + this.echoDelay + this.stereoSpread
                            }
                            0 == this.gain && this.echoGainNode && this.echoGainNode.gain.setValueAtTime(this.echoVolume, t), this.gainNode.gain.setValueAtTime(this.gain, t), this.gainNode.gain.linearRampToValueAtTime(e, a), this.gain = e
                        }
                    }
                }]), e
            }(),
            g = function() {
                function e() {
                    var t = this;
                    if (i(this, e), this.ctx = new(window.AudioContext || window.webkitAudioContext), n) {
                        var a = this.ctx.createBuffer(1, 1, 44100),
                            o = this.ctx.createBufferSource();
                        o.buffer = a, o.connect(this.ctx.destination), o.start(), o.disconnect(this.ctx.destination), this.ctx.close(), this.ctx = new(window.AudioContext || window.webkitAudioContext)
                    }
                    l = r(this.ctx), window.audioEngine = this, this.masterGainNode = this.ctx.createGain(), this.compressorNode = this.ctx.createDynamicsCompressor(), this.masterGainNode.connect(this.compressorNode), this.compressorNode.connect(this.ctx.destination), this.reverbNode = this.ctx.createGain(), this.reverbNode.connect(this.masterGainNode), this.muffleNode = this.ctx.createGain(), this.muffleNode.gain.setValueAtTime(16, 0);
                    for (var u = [
                            [20, 1.4142, -6],
                            [40, 1.4142, -7],
                            [80, 1.4142, -10],
                            [160, 1.4142, -13],
                            [320, 1.4142, -22],
                            [640, 1.4142, -18],
                            [1280, 1.4142, -25],
                            [2560, 1.4142, -10],
                            [5120, 1.4142, -30],
                            [10240, 1.4142, -25]
                        ], g = this.muffleNode, y = 0; y < u.length; y++) {
                        var w = this.ctx.createBiquadFilter();
                        g.connect(w), g = w, w.type = "peaking", w.frequency.setValueAtTime(u[y][0], 0), w.Q.setValueAtTime(u[y][1], 0), w.gain.setValueAtTime(u[y][2], 0)
                    }
                    g.connect(this.reverbNode), this.files = {}, this.sounds = {}, this.instances = [];
                    for (var x = 0; x < c; x++) {
                        var f = new m(this.ctx);
                        this.instances[x] = f
                    }
                    if (this.instanceId = 0, this.playingInstances = [], p = new m(this.ctx), h = new d(p), this.reverbs = {}, this.activeReverbs = [], this.reverbFadeEndTime = 0, this.volume = 1, this.volumeOld = this.volume, this.muted = !1, this.mutedOld = this.muted, "suspended" == this.ctx.state) {
                        var b = function e() {
                            t.ctx.resume();
                            var a = t.ctx.createBufferSource();
                            a.buffer = t.ctx.createBuffer(1, 1, 22050), a.connect(t.ctx.destination), a.start(), setTimeout(function() {
                                "running" == t.ctx.state && (document.body.removeEventListener("mousedown", e, !1), document.body.removeEventListener("touchend", e, !1))
                            }, 0)
                        };
                        document.body.addEventListener("mousedown", b, !1), document.body.addEventListener("touchend", b, !1)
                    }
                    n && (s = this.ctx.createBuffer(1, 1, 22050)), this.onfileload = function() {}, this.PLAY_INITED = "playInited", this.PLAY_SUCCEEDED = "playSucceeded", this.PLAY_INTERRUPTED = "playInterrupted", this.PLAY_FINISHED = "playFinished", this.PLAY_FAILED = "playFailed"
                }
                return o(e, [{
                    key: "loadFile",
                    value: function(e, t) {
                        var a = this;
                        if (void 0 != this.files[e]) return t(e), this.files[e];
                        this.files[e] = {
                            buffer: null
                        };
                        var i = new XMLHttpRequest;
                        i.open("GET", e), i.responseType = "arraybuffer";
                        var r = function(t) {
                            console.error("Failed loading sound file: " + e)
                        };
                        return i.addEventListener("load", function(o) {
                            var n = i.response;
                            if (!n) return void r();
                            a.ctx.decodeAudioData(n, function(i) {
                                a.files[e].buffer = i, t(e)
                            }, function() {
                                console.error("Failed decoding sound: " + e)
                            })
                        }), i.addEventListener("abort", r), i.addEventListener("error", r), i.addEventListener("timeout", r), i.send(), this.files[e]
                    }
                }, {
                    key: "registerSound",
                    value: function(e, t, a) {
                        var i = this.loadFile(e, this.onfileload.bind(this)),
                            r = {
                                file: i,
                                canCoalesce: !!a.canCoalesce,
                                maxInstances: a.channels || 16,
                                volume: a.volume || 1,
                                instances: []
                            };
                        this.sounds[t] = r
                    }
                }, {
                    key: "play",
                    value: function(e, t) {
                        var a = this.sounds[e];
                        if (!a) return console.error("No sound named: " + e), h;
                        var i = t.filter || "none",
                            r = void 0 != t.volume ? t.volume : 1;
                        r *= a.volume, r = this.muted ? 0 : r;
                        var o = t.pan || 0,
                            n = !!t.loop,
                            s = t.delay ? .001 * t.delay : 0,
                            l = t.offset ? t.offset : 0,
                            m = t.ambient || !1;
                        if (!a.file.buffer) return h;
                        if (this.muted && !t.loop) return h;
                        if ("none" !== i && "reverb" !== i && "muffled" !== i) return console.error("Invalid filter: " + i + ". Only valid filters are 'none', 'reverb' and 'muffled'."), h;
                        if (a.canCoalesce)
                            for (var p = this.ctx.currentTime + a.file.buffer.duration, u = 0; u < a.instances.length; u++) {
                                var g = a.instances[u];
                                if (!(Math.abs(p - g.stopTime) > .03)) {
                                    var y = g.volume * g.volume + r * r,
                                        w = g.volume * g.pan + r * o,
                                        x = g.volume + r;
                                    return g.volume = Math.sqrt(y), g.pan = w / Math.max(.001, x), h
                                }
                            }
                        for (var f = 0; f < c && (++this.instanceId, this.instances[this.instanceId % c].sound); f++);
                        var b = this.instances[this.instanceId % c];
                        if (b.sound) return console.error("All " + c + " sound instances in use. You are using way too many sounds!"), h;
                        b.id = this.instanceId;
                        var _ = b.paramEvents > 150,
                            S = b.paramEvents > 20 && !(this.instanceId % 7);
                        for ((_ || S) && b.reallocNodes(); a.instances.length >= a.maxInstances;) {
                            for (var k = a.instances[0], v = 1; v < a.instances.length; v++) k.stopTime > a.instances[v].stopTime && (k = a.instances[v]);
                            k.disconnect()
                        }
                        b.sound = a, a.instances.push(b);
                        var z = "none" === i ? this.masterGainNode : "reverb" === i ? this.reverbNode : this.muffleNode;
                        return b.start(z, a.file.buffer, r, o, n, s, l, m), -1 == this.playingInstances.indexOf(b) && this.playingInstances.push(b), new d(b)
                    }
                }, {
                    key: "registerReverb",
                    value: function(e, t, a) {
                        var i = this,
                            r = new u(this.ctx, this.reverbNode, this.masterGainNode, t, a);
                        this.loadFile(e, function(e) {
                            r.convolverNode.buffer = i.files[e].buffer, i.onfileload(e)
                        }), this.reverbs[t] = r
                    }
                }, {
                    key: "setReverbs",
                    value: function(e) {
                        for (var t = 0; t < this.activeReverbs.length; t++) {
                            var a = this.activeReverbs[t];
                            e[a.name] || (a.targetLevel = 0)
                        }
                        for (var i in e)
                            if (e[i]) {
                                var r = this.reverbs[i];
                                r ? (this.reverbs[i].active || (this.activeReverbs.push(r), r.active = !0), r.targetLevel = e[i]) : console.error("No reverb named " + i)
                            }
                    }
                }, {
                    key: "stop",
                    value: function() {
                        for (var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t = 0; t < c; t++) {
                            var a = this.instances[t];
                            e && a.ambient || a.sound && a.stop()
                        }
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        "suspended" == this.ctx.state && this.ctx.resume();
                        var t = this.muted ? 0 : this.volume,
                            a = this.mutedOld ? 0 : this.volumeOld;
                        this.volumeOld = this.volume, this.mutedOld = this.muted, t != a && this.masterGainNode.gain.setTargetAtTime(t, this.ctx.currentTime, .02);
                        for (var i = this.playingInstances.length - 1; i >= 0; i--) {
                            var r = this.playingInstances[i];
                            r.volumeOld != r.volume && (r.volumeOld = r.volume, r.setGain(r.volume)), r.panOld != r.pan && (r.panOld = r.pan, r.setPan(r.pan)), r.sound && this.ctx.currentTime > r.stopTime && r.disconnect(), r.sound || this.playingInstances.splice(i, 1)
                        }
                        if (this.ctx.currentTime > this.reverbFadeEndTime) {
                            var o = this.ctx.currentTime + .006;
                            this.reverbFadeEndTime = o + .025;
                            for (var n = 0, s = 0; s < this.activeReverbs.length; s++) n += this.activeReverbs[s].targetLevel;
                            for (var l = n > 1 ? 1 / n : 1, c = 0; c < this.activeReverbs.length; c++) {
                                var m = this.activeReverbs[c],
                                    p = Math.sqrt(l * m.targetLevel);
                                m.setGain(p, o, this.reverbFadeEndTime)
                            }
                            for (var d = this.activeReverbs.length - 1; d >= 0; d--) {
                                var h = this.activeReverbs[d],
                                    u = this.ctx.currentTime > h.drainEndTime;
                                0 == h.gain && u && (h.isConnected() && h.disconnect(), h.active = !1, this.activeReverbs.splice(d, 1))
                            }
                        }
                    }
                }, {
                    key: "setMute",
                    value: function(e) {
                        this.muted = e
                    }
                }, {
                    key: "on",
                    value: function(e, t, a) {
                        if ("fileload" != e) return void console.error('Only "fileload" event supported');
                        this.onfileload = t.bind(a)
                    }
                }, {
                    key: "updatePerformanceTest",
                    value: function() {
                        var e = this;
                        if (this.runningOfflineTest = void 0 != this.runningOfflineTest && this.runningOfflineTest, !this.runningOfflineTest) {
                            this.runningOfflineTest = !0, this.offlineCtx = new OfflineAudioContext(2, 10 * this.ctx.sampleRate, this.ctx.sampleRate);
                            for (var t = this.offlineCtx.createBuffer(2, 10 * this.ctx.sampleRate, this.ctx.sampleRate), a = 0; a < t.numberOfChannels; a++)
                                for (var i = t.getChannelData(a), r = 0; r < i.length; r++) i[r] = Math.sin(r / 2333) * Math.sin(r / 5741) * 2 * Math.random() - 1;
                            var o = this.offlineCtx.createBufferSource();
                            o.buffer = t;
                            for (var n = this.offlineCtx.createConvolver(), s = this.offlineCtx.createBuffer(1, 4 * this.ctx.sampleRate, this.ctx.sampleRate), l = 0; l < s.numberOfChannels; l++)
                                for (var c = s.getChannelData(l), m = 0; m < c.length; m++) c[m] = 2 * Math.random() - 1;
                            n.buffer = s;
                            var p = {
                                volume: .7,
                                echoVolume: .5,
                                echoLowPass: 800,
                                echoDelay: .25,
                                stereoSpread: .004
                            };
                            if (p.convolverNode = n, p.echoLowPassNode = this.offlineCtx.createBiquadFilter(), p.echoLowPassNode.type = "lowpass", p.echoLowPassNode.frequency.setValueAtTime(p.echoLowPass, 0), p.echoLowPassNode.Q.setValueAtTime(-3.0102999566398125, 0), p.echoDelayNode = this.offlineCtx.createDelay(p.echoDelay || .01), p.echoDelayNode.delayTime.setValueAtTime(p.echoDelay, 0), p.stereoSpread && (p.stereoDelayNode = this.offlineCtx.createDelay(p.stereoSpread), p.stereoDelayNode.delayTime.setValueAtTime(p.stereoSpread, 0), p.mergerNode = this.offlineCtx.createChannelMerger(2)), p.gainNode = this.offlineCtx.createGain(), p.gainNode.channelCount = 1, p.gainNode.channelCountMode = "explicit", p.gainNode.gain.setValueAtTime(1, 0), p.echoGainNode = this.offlineCtx.createGain(), p.echoGainNode.channelCount = 1, p.echoGainNode.channelCountMode = "explicit", p.echoGainNode.gain.setValueAtTime(p.echoVolume, 0), p.outNode = this.offlineCtx.createGain(), p.gainNode.connect(p.convolverNode), p.stereoSpread) {
                                var d = p.convolverNode.buffer;
                                d && 1 != d.numberOfChannels && console.error("stereoSpread can only be applied to mono IRs"), p.convolverNode.connect(p.stereoDelayNode), p.convolverNode.connect(p.mergerNode, 0, 0), p.stereoDelayNode.connect(p.mergerNode, 0, 1), p.mergerNode.connect(p.outNode)
                            } else p.convolverNode.connect(p.outNode);
                            this.offlineCtx.createDynamicsCompressor(), console.log("starting convolver"), o.connect(p.gainNode), p.outNode.connect(this.offlineCtx.destination), o.start(), this.startTime = performance.now(), this.offlineCtx.oncomplete = function(t) {
                                var a = performance.now();
                                console.log("Offline render time: ", a - e.startTime), e.runningOfflineTest = !1
                            }, this.offlineCtx.startRendering()
                        }
                    }
                }]), e
            }(),
            y = {
                Sound: new g
            };
        e.exports = y
    },
    f4d48896: function(e, t, a) {
        "use strict";

        function i(e) {
            facebookConnectPlugin.login(["public_profile"], function(t) {
                e(null, t)
            }, function(t) {
                e(t)
            })
        }

        function r(e) {
            window.plugins.googleplus.login({}, function(t) {
                e(null, t)
            }, function(t) {
                e(t)
            })
        }

        function o(e) {
            window.chrome.system.memory.getInfo(e)
        }

        function n(e) {
            AppRate.preferences = {
                useLanguage: "en",
                displayAppName: "surviv.io",
                usesUntilPrompt: 1,
                promptAgainForEachNewVersion: !0,
                inAppReview: !0,
                storeAppURL: {
                    ios: "1401727934",
                    android: "market://details?id=io.surviv.surviv_io_mobile"
                },
                customLocale: {
                    title: "Enjoying surviv.io?",
                    message: "Thanks for playing! It would be a huge help if you rated us. We appreciate your support!",
                    cancelButtonLabel: "No Thanks",
                    laterButtonLabel: "Remind Me Later",
                    rateButtonLabel: "Rate surviv.io"
                },
                callbacks: {
                    handleNegativeFeedback: function() {
                        window.open("mailto:admin@surviv.io", "_system")
                    },
                    onRateDialogShow: function(e) {},
                    onButtonClicked: function(t) {
                        e(t)
                    }
                }
            }, AppRate.preferences.simpleMode = !0, AppRate.promptForRating()
        }

        function s(e, t) {
            NativeStorage.getItem(e, function(e) {
                t(null, e)
            }, function(e) {
                t(e)
            })
        }

        function l(e, t, a) {
            NativeStorage.setItem(e, t, function(e) {
                a(null, e)
            }, function(e) {
                a(e)
            })
        }
        e.exports = {
            facebookLogin: i,
            getSystemMemoryInfo: o,
            googleLogin: r,
            promptAppRate: n,
            storageGetItem: s,
            storageSetItem: l
        }
    },
    fac69c0a: function(e, t, a) {
        function i(e) {
            return a(r(e))
        }

        function r(e) {
            var t = o[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        var o = {
            "./da.js": "8f9fd353",
            "./de.js": "29d4cdc4",
            "./en.js": "5bedf25d",
            "./es.js": "a5bf0544",
            "./fr.js": "15173389",
            "./it.js": "3bff36cf",
            "./jp.js": "e9735f40",
            "./ko.js": "064c0a93",
            "./nl.js": "bdd2570b",
            "./pl.js": "0cc73a5c",
            "./pt.js": "9e5281a7",
            "./ru.js": "f2372804",
            "./sv.js": "4426a45f",
            "./th.js": "4780d986",
            "./tr.js": "7aa4bfa8",
            "./vn.js": "6b9375bf",
            "./zh-cn.js": "51683873",
            "./zh-tw.js": "9085f81b"
        };
        i.keys = function() {
            return Object.keys(o)
        }, i.resolve = r, e.exports = i, i.id = "fac69c0a"
    },
    fc096113: function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Potato",
                    icon: "img/gui/surviv.svg"
                },
                assets: {
                    audio: [{
                        name: "pumpkin_break_01",
                        channel: "sfx"
                    }, {
                        name: "potato_01",
                        channel: "sfx"
                    }, {
                        name: "potato_02",
                        channel: "sfx"
                    }, {
                        name: "potato_pickup_01",
                        channel: "ui"
                    }],
                    atlases: ["gradient", "shared", "potato"]
                },
                biome: {
                    colors: {
                        background: 2118510,
                        water: 3310251,
                        beach: 13480795,
                        riverbank: 9461284,
                        grass: 8433481,
                        underground: 1772803,
                        playerSubmerge: 2854052
                    },
                    particles: {
                        camera: "falling_potato",
                        ripple: "waterRipple"
                    },
                    frozenSprites: ["player-mash-01.img", "player-mash-02.img", "player-mash-03.img"]
                },
                gameMode: {
                    maxPlayers: 80,
                    potatoMode: !0
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    fc6a992a: function(e, t, a) {
        "use strict";

        function i() {
            this.active = !1, this.sprite = new n.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1
        }

        function r(e) {
            this.active = !1, this.pos = p.create(0, 0), this.rad = 0, this.duration = 0, this.ticker = 0, this.gfx = new n.Graphics, e.addChild(this.gfx)
        }

        function o(e) {
            this.ya = [], this.wa = [], this.airstrikeZoneContainer = new n.Container, this.audioManager = e
        }
        var n = a("8b1dfb45"),
            s = a("6b42806d"),
            l = a("989ad62a"),
            c = a("10899aea"),
            m = a("1901e2d9"),
            p = a("c2a798c8");
        a("af8ba00f"), i.prototype = {
            o: function(e, t) {
                switch (this.id = e.id, this.pos = p.copy(e.pos), this.planeDir = p.copy(e.planeDir), this.actionComplete = e.actionComplete, this.active = !0, this.dirty = !1, this.soundInstance = null, this.soundUpdateThrottle = 0, this.alpha = .75, this.renderAlpha = 1, this.spriteUpdateTime = 0, this.type = e.action, this.config = this.type == l.Plane.Airdrop ? l.airdrop : l.airstrike, this.rad = this.config.planeRad, this.type) {
                    case l.Plane.Airdrop:
                        this.sprite.texture = n.Texture.fromImage(t.getMapDef().biome.airdrop.planeImg), this.planeSound = t.getMapDef().biome.airdrop.planeSound;
                        break;
                    case l.Plane.Airstrike:
                        this.sprite.texture = n.Texture.fromImage("map-plane-02.img"), this.planeSound = "fighter_01"
                }
                this.sprite.visible = !0, this.sprite.rotation = Math.atan2(this.planeDir.x, this.planeDir.y)
            },
            n: function(e) {
                this.spriteUpdateTime < 2 || (this.soundInstance && (e.stopSound(this.soundInstance), this.soundInstance = null), this.sprite.visible = !1, this.active = !1)
            }
        }, r.prototype = {
            o: function(e, t, a) {
                this.active = !0, this.pos = p.copy(e), this.rad = t, this.duration = a, this.ticker = 0, this.renderPos = p.create(0, 0), this.renderRad = 0, this.gfx.visible = !0
            },
            c: function(e, t, a) {
                this.ticker += e, this.gfx.visible = !0, this.ticker >= this.duration && (this.gfx.visible = !1, this.active = !1)
            },
            jt: function(e, t, a) {
                var i = e.getMapPosFromWorldPos(this.pos, t),
                    r = e.getMapPosFromWorldPos(p.add(this.pos, p.create(this.rad, 0)), t),
                    o = p.length(p.sub(r, i)),
                    n = !p.eq(this.renderPos, i, 1e-4),
                    s = !c.eqAbs(this.renderRad, o, 1e-4);
                n && (this.renderPos = p.copy(i)), s && (this.renderRad = o), n && this.gfx.position.set(this.renderPos.x, this.renderPos.y), s && (this.gfx.clear(), this.gfx.lineStyle(1.5, 15400704), this.gfx.beginFill(15400704, .2), this.gfx.drawCircle(0, 0, this.renderRad), this.gfx.endFill());
                var l = c.smoothstep(this.ticker, 0, .5) * (1 - c.smoothstep(this.ticker, this.duration - .5, this.duration));
                this.gfx.alpha = l
            }
        }, o.prototype = {
            n: function() {
                for (var e = 0; e < this.ya.length; e++) this.ya[e].n(this.audioManager)
            },
            Yt: function(e, t) {
                for (var a = 0; a < this.ya.length; a++) this.ya[a].dirty = !0;
                for (var i = 0; i < e.length; i++) {
                    for (var r = e[i], o = null, n = 0; n < this.ya.length; n++) {
                        var s = this.ya[n];
                        if (s.active && s.id == r.id) {
                            o = s;
                            break
                        }
                    }
                    o || (o = this.xa(r, t)), o.dirty = !1, o.actionComplete = r.actionComplete
                }
                for (var l = 0; l < this.ya.length; l++) {
                    var c = this.ya[l];
                    c.active && c.dirty && c.n(this.audioManager)
                }
            },
            xa: function(e, t) {
                for (var a = null, r = 0; r < this.ya.length; r++)
                    if (!this.ya[r].active) {
                        a = this.ya[r];
                        break
                    }
                return a || (a = new i, this.ya.push(a)), a.o(e, t), a
            },
            Jt: function(e) {
                for (var t = null, a = 0; a < this.wa.length; a++)
                    if (!this.wa[a]) {
                        t = this.wa[a];
                        break
                    }
                return t || (t = new r(this.airstrikeZoneContainer), this.wa.push(t)), t.o(e.pos, e.rad, e.duration), t
            },
            c: function(e, t, a, i, r) {
                for (var o = 0; o < this.ya.length; o++) {
                    var n = this.ya[o];
                    if (n.active) {
                        var d = 0;
                        if (!(m.sameLayer(d, a.layer) || 2 & a.layer) || 2 & a.layer && i.insideStructureMask(s.createCircle(n.pos, 1)) || (d |= 2), n.pos = p.add(n.pos, p.mul(n.planeDir, e * n.config.planeVel)), n.actionComplete && (n.spriteUpdateTime = Math.min(n.spriteUpdateTime + e, 2), n.spriteUpdateTime, n.rad = c.lerp(n.spriteUpdateTime, n.config.planeRad, 1.25 * n.config.planeRad), n.alpha = c.lerp(n.spriteUpdateTime, .75, .5625), n.soundRangeMult = c.max(0, c.lerp(n.spriteUpdateTime, n.config.soundRangeMult, n.config.soundRangeMult - n.config.soundRangeDelta))), n.soundInstance) n.soundUpdateThrottle < 0 ? (this.audioManager.updateSound(n.soundInstance, "sfx", n.pos, {
                            layer: d,
                            rangeMult: n.config.soundRangeMult,
                            muffled: !1,
                            ignoreMinAllowable: !0,
                            fallOff: n.config.fallOff
                        }), n.soundUpdateThrottle = .1) : n.soundUpdateThrottle -= e;
                        else {
                            var h = p.length(p.sub(a.pos, n.pos)),
                                u = n.config.soundRangeMax * n.config.soundRangeMult,
                                g = 0;
                            if (n.type == l.Plane.Airstrike) {
                                var y = c.max(150, h);
                                g = 2.25 * (1 - c.clamp(c.max(0, y) / 800, 0, 1))
                            }
                            h < u && (n.soundInstance = this.audioManager.playSound(n.planeSound, {
                                channel: "sfx",
                                soundPos: n.pos,
                                layer: d,
                                loop: !0,
                                rangeMult: 2.5,
                                muffled: !1,
                                ignoreMinAllowable: !0,
                                fallOff: n.config.fallOff,
                                offset: g
                            }))
                        }
                        r.addPIXIObj(n.sprite, d, 1501, n.id);
                        var w = t.pointToScreen(n.pos),
                            x = t.pixels(n.rad / t.ppu),
                            f = n.alpha;
                        1 == a.layer ? f = 0 : (a.re.scopedIn || 1 & a.layer) && (f = .15), n.renderAlpha = c.lerp(3 * e, n.renderAlpha, f), n.sprite.position.set(w.x, w.y), n.sprite.scale.set(x, x), n.sprite.tint = 16776960, n.sprite.alpha = n.renderAlpha, n.sprite.visible = !0
                    }
                }
                for (var b = 0; b < this.wa.length; b++) {
                    var _ = this.wa[b];
                    _.active && _.c(e)
                }
            },
            renderAirstrikeZones: function(e, t, a) {
                for (var i = 0; i < this.wa.length; i++) {
                    var r = this.wa[i];
                    r.active && r.jt(e, t, a)
                }
            }
        }, e.exports = {
            mt: o
        }
    },
    fea0a94e: function(e, t, a) {
        "use strict";
        var i = (a("989ad62a"), a("1901e2d9")),
            r = (a("c2a798c8"), a("d5ec3c16")),
            o = {
                desc: {
                    name: "Potato",
                    icon: "img/gui/surviv.svg"
                },
                assets: {
                    audio: [{
                        name: "pumpkin_break_01",
                        channel: "sfx"
                    }, {
                        name: "potato_01",
                        channel: "sfx"
                    }, {
                        name: "potato_02",
                        channel: "sfx"
                    }, {
                        name: "potato_pickup_01",
                        channel: "ui"
                    }],
                    atlases: ["gradient", "shared", "potato"]
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
                    particles: {
                        camera: "falling_leaf_potato",
                        ripple: "waterRipple"
                    },
                    frozenSprites: ["player-mash-01.img", "player-mash-02.img", "player-mash-03.img"]
                },
                gameMode: {
                    potatoMode: !0
                }
            };
        e.exports = i.mergeDeep({}, r, o)
    },
    feb8fc30: function(e, t, a) {
        "use strict";

        function i() {
            this.container = new r.Container, this.container.visible = !1, this.timerBackground = r.Sprite.fromImage("timer-background.img"), this.timerBackground.anchor.set(.5, .5), this.timerBackground.scale.set(1, 1), this.container.addChild(this.timerBackground), this.gfx = new r.Graphics, this.container.addChild(this.gfx), this.counterText = new r.Text, this.counterText.anchor.set(.5, .5), this.counterText.style = {
                fontFamily: "Roboto Condensed, Arial, sans-serif",
                fontWeight: "bold",
                fontSize: s,
                align: "center",
                fill: 16777215,
                stroke: 0,
                strokeThickness: 3
            }, this.container.addChild(this.counterText), this.labelText = new r.Text, this.labelText.anchor.set(.5, .5), this.labelText.style = {
                fontFamily: "Roboto Condensed, Arial, sans-serif",
                fontWeight: "100",
                fontSize: s,
                align: "center",
                fill: 16777215
            }, this.container.addChild(this.labelText), this.screenScaleFactor = 1, this.mobileOffset = 0, this.active = !1, this.label = "", this.elapsed = 0, this.duration = 0
        }
        var r = a("8b1dfb45"),
            o = a("10899aea"),
            n = a("ce29f17f"),
            s = 24;
        i.prototype = {
            destroy: function() {
                this.container.removeChild(this.timerBackground), this.timerBackground.destroy({
                    children: !0
                }), this.container.destroy({
                    children: !0,
                    texture: !0
                })
            },
            start: function(e, t, a) {
                this.active = !0, this.label = e, this.elapsed = t, this.duration = a
            },
            stop: function() {
                this.active = !1
            },
            resize: function(e, t) {
                this.screenScaleFactor = t, n.uiLayout == n.UiLayout.Sm ? (n.tablet || this.container.scale.set(.5, .5), this.mobileOffset = n.isLandscape ? e.mobileOffsetLandscape : e.mobileOffsetPortrait) : (this.container.scale.set(1, 1), this.mobileOffset = 0)
            },
            update: function(e, t) {
                if (!this.active) return void(this.container.visible = !1);
                this.elapsed = o.min(this.elapsed + e, this.duration);
                var a = 56 + this.label.length * s * .45,
                    i = 1.5 * s,
                    r = 0 - a / 2,
                    n = 87.5 - i / 2,
                    l = o.min(this.elapsed / this.duration, 1) * Math.PI * 2 - .5 * Math.PI;
                this.gfx.clear(), this.gfx.beginFill(0, .5), this.gfx.drawRoundedRect(r, n, a, i, 5), this.gfx.endFill(), this.gfx.lineStyle(6, 16777215), this.gfx.arc(0, 0, 35, .5 * -Math.PI, l, !1), this.counterText.text = o.max(0, this.duration - this.elapsed).toFixed(1), this.labelText.position.y = 87.5, this.labelText.text = this.label, this.container.position.set(t.screenWidth / 2, t.screenHeight / 3 * this.screenScaleFactor + this.mobileOffset), this.container.visible = !0
            }
        }, e.exports = {
            $: i
        }
    }
}, ["c99e6613"]);
//# sourceMappingURL=app.a63768a7.js.map
