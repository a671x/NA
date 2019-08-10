    "300e2704": function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t, a) {
            var i = new P(a),
                r = Object.keys(t);
            f(r.length <= i.maxId, e + " contains " + r.length + " types, max " + i.maxId);
            for (var o = 0; o < r.length; o++) i.addType(r[o]);
            return console.log("Used " + i.nextId + " / " + i.maxId + " " + e + " types"), I.BitStream.prototype["write" + e + "Type"] = function(e) {
                this.writeBits(i.typeToId(e), a)
            }, I.BitStream.prototype["read" + e + "Type"] = function() {
                return i.idToType(this.readBits(a))
            }, i
        }

        function o(e, t) {
            return 1 == e ? Number.MAX_VALUE : t ? .5 : .25
        }

        function n(e, t, a, i, r) {
            E[e] = {
                serializePart: t,
                serializeFull: a,
                deserializePart: i,
                deserializeFull: r
            }
        }

        function s(e, t) {
            if (t.healthDirty = e.readBoolean(), t.healthDirty && (t.health = e.readFloat(0, 100, 8)), t.boostDirty = e.readBoolean(), t.boostDirty && (t.boost = e.readFloat(0, 100, 8)), t.zoomDirty = e.readBoolean(), t.zoomDirty && (t.zoom = e.readUint8()), t.actionDirty = e.readBoolean(), t.actionDirty && (t.action = {}, t.action.time = e.readFloat(0, A.ActionMaxDuration, 8), t.action.duration = e.readFloat(0, A.ActionMaxDuration, 8), t.action.targetId = e.readUint16()), t.inventoryDirty = e.readBoolean(), t.inventoryDirty) {
                t.scope = e.readItemType(), t.inventory = {};
                for (var a = Object.keys(x.bagSizes), i = 0; i < a.length; i++) {
                    var r = a[i],
                        o = 0;
                    e.readBoolean() && (o = e.readBits(9)), t.inventory[r] = o
                }
            }
            if (t.weapsDirty = e.readBoolean(), t.weapsDirty) {
                t.curWeapIdx = e.readBits(2), t.weapons = [];
                for (var n = 0; n < x.WeaponSlot.Count; n++) {
                    var s = {};
                    s.type = e.readItemType(), s.ammo = e.readUint8(), t.weapons.push(s)
                }
            }
            if (t.perksDirty = e.readBoolean(), t.perksDirty) {
                t.perks = [];
                for (var l = e.readUint8(), c = 0; c < l; c++) {
                    var m = e.readItemType();
                    t.perks.push(m)
                }
            }
            t.spectatorCountDirty = e.readBoolean(), t.spectatorCountDirty && (t.spectatorCount = e.readUint8()), e.readAlignToNextByte()
        }

        function l(e, t) {
            t.players = [];
            for (var a = e.readUint8(), i = 0; i < a; i++) {
                var r = {};
                r.hasData = e.readBoolean(), r.hasData && (r.pos = e.readVec(0, 0, 1024, 1024, 11), r.visible = e.readBoolean(), r.dead = e.readBoolean(), r.downed = e.readBoolean(), r.role = "", e.readBoolean() && (r.role = e.readRoleType())), t.players.push(r)
            }
            e.readAlignToNextByte()
        }

        function c(e, t) {
            t.players = [];
            for (var a = e.readUint8(), i = 0; i < a; i++) {
                var r = {};
                r.health = e.readFloat(0, 100, 7), r.disconnected = e.readBoolean(), t.players.push(r)
            }
        }

        function m(e, t) {
            t.playerId = e.readUint16(), t.teamId = e.readUint8(), t.groupId = e.readUint8(), t.name = e.readString()
        }

        function p(e, t) {
            t.mode = e.readUint8(), t.duration = e.readFloat32(), t.posOld = e.readVec(0, 0, 1024, 1024, 16), t.posNew = e.readVec(0, 0, 1024, 1024, 16), t.radOld = e.readFloat(0, 2048, 16), t.radNew = e.readFloat(0, 2048, 16)
        }

        function d(e, t) {
            t.width = e.readFloat32(), t.looped = e.readUint8(), t.points = [];
            for (var a = e.readUint8(), i = 0; i < a; i++) {
                var r = e.readVec(0, 0, 1024, 1024, 16);
                t.points.push(r)
            }
        }

        function h(e, t) {
            t.name = e.readString(), t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }

        function u(e, t) {
            t.min = e.readVec(0, 0, 1024, 1024, 16), t.max = e.readVec(0, 0, 1024, 1024, 16), t.color = e.readUint32(), t.roughness = e.readFloat32(), t.offsetDist = e.readFloat32(), t.order = e.readBits(7), t.useAsMapShape = e.readBoolean()
        }

        function g(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.scale = e.readFloat(A.MapObjectMinScale, A.MapObjectMaxScale, 8), t.type = e.readMapType(), t.ori = e.readBits(2), e.readBits(2)
        }
        var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            w = function() {
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
            f = a("0e566746"),
            x = (a("34e32c48"), a("6b42806d"), a("989ad62a")),
            b = a("8649e148"),
            _ = a("10899aea"),
            S = a("c2a798c8"),
            v = a("cb171a86"),
            k = a("91649371"),
            z = a("e3e76f15"),
            M = a("aca73f78"),
            T = a("e3924edb"),
            I = a("14a25ec1");
        I.BitStream.prototype.writeBytes = function(e, t, a) {
            f(this._index % 8 == 0);
            var i = new Uint8Array(e._view._view.buffer, t, a);
            this._view._view.set(i, this._index / 8), this._index += 8 * a
        }, I.BitStream.prototype.writeString = I.BitStream.prototype.writeASCIIString, I.BitStream.prototype.readString = I.BitStream.prototype.readASCIIString, I.BitStream.prototype.writeFloat = function(e, t, a, i) {
            f(i > 0 && i < 31), f(e >= t && e <= a);
            var r = (1 << i) - 1,
                o = _.clamp(e, t, a),
                n = (o - t) / (a - t),
                s = n * r + .5;
            this.writeBits(s, i)
        }, I.BitStream.prototype.readFloat = function(e, t, a) {
            f(a > 0 && a < 31);
            var i = (1 << a) - 1;
            return e + this.readBits(a) / i * (t - e)
        }, I.BitStream.prototype.writeVec = function(e, t, a, i, r, o) {
            this.writeFloat(e.x, t, i, o), this.writeFloat(e.y, a, r, o)
        }, I.BitStream.prototype.readVec = function(e, t, a, i, r) {
            return S.create(this.readFloat(e, a, r), this.readFloat(t, i, r))
        }, I.BitStream.prototype.writeUnitVec = function(e, t) {
            this.writeVec(e, -1.0001, -1.0001, 1.0001, 1.0001, t)
        }, I.BitStream.prototype.readUnitVec = function(e) {
            return this.readVec(-1.0001, -1.0001, 1.0001, 1.0001, e)
        }, I.BitStream.prototype.writeVec32 = function(e) {
            this.writeFloat32(e.x), this.writeFloat32(e.y)
        }, I.BitStream.prototype.readVec32 = function() {
            return S.create(this.readFloat32(), this.readFloat32())
        }, I.BitStream.prototype.writeAlignToNextByte = function() {
            var e = 8 - this.index % 8;
            e < 8 && this.writeBits(0, e)
        }, I.BitStream.prototype.readAlignToNextByte = function() {
            var e = 8 - this.index % 8;
            e < 8 && this.readBits(e)
        };
        var P = function() {
            function e(t) {
                i(this, e), this._typeToId = {}, this._idToType = {}, this.nextId = 0, this.maxId = Math.pow(2, t), this.addType("")
            }
            return w(e, [{
                key: "addType",
                value: function(e) {
                    f(void 0 === this._typeToId[e], "Type " + e + " has already been defined!"), f(this.nextId < this.maxId), this._typeToId[e] = this.nextId, this._idToType[this.nextId] = e, this.nextId++
                }
            }, {
                key: "typeToId",
                value: function(e) {
                    var t = this._typeToId[e];
                    return f(void 0 !== t, "Invalid type " + e), t
                }
            }, {
                key: "idToType",
                value: function(e) {
                    var t = this._idToType[e];
                    return void 0 === t && console.error("Invalid id given to idToType", e, "max", Object.keys(this._idToType).length), t
                }
            }]), e
        }();
        r("Bullet", v, 6), r("Explosion", k, 5), r("Item", z, 10), r("Map", M, 12), r("Role", T, 3);
        var C = function() {
                function e(t) {
                    i(this, e);
                    var a = t instanceof ArrayBuffer ? t : null;
                    this.valid = null != a, this.valid ? (this.arrayBuf = a, this.stream = new I.BitStream(a)) : (console.log("Invalid buf type", void 0 === t ? "undefined" : y(t)), "string" == typeof t && console.log("String contents: " + t.substring(0, 1024)))
                }
                return w(e, [{
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
                        f(this.stream.index % 8 == 0), this.stream.writeUint8(e), t.serialize(this.stream), f(this.stream.index % 8 == 0)
                    }
                }, {
                    key: "serializeMsgStream",
                    value: function(e, t) {
                        f(this.stream.index % 8 == 0 && t.index % 8 == 0), this.stream.writeUint8(e), this.stream.writeBytes(t, 0, t.index / 8)
                    }
                }, {
                    key: "deserializeMsgType",
                    value: function() {
                        return this.stream.length - 8 * this.stream.byteIndex >= 1 ? this.stream.readUint8() : D.None
                    }
                }]), e
            }(),
            A = {
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
            E = {};
        n(b.Type.Player, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeUnitVec(t.dir, 8)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.dir = e.readUnitVec(8)
        }, function(e, t) {
            t.outfit = e.readItemType(), t.backpack = e.readItemType(), t.helmet = e.readItemType(), t.chest = e.readItemType(), t.curWeapType = e.readItemType(), t.actionItem = e.readItemType(), t.layer = e.readBits(2), t.dead = e.readBoolean(), t.downed = e.readBoolean(), t.animType = e.readBits(3), t.animSeq = e.readBits(3), t.actionType = e.readBits(3), t.actionSeq = e.readBits(3), t.wearingPan = e.readBoolean(), t.frozen = e.readBoolean(), t.frozenOri = e.readBits(2), t.isLarge = e.readBoolean(), t.windwalk = e.readBoolean(), t.passiveHeal = e.readBoolean(), t.role = e.readRoleType(), e.readBits(2)
        }), n(b.Type.Obstacle, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeFloat(t.scale, A.MapObjectMinScale, A.MapObjectMaxScale, 8), e.writeBits(0, 6)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.scale = e.readFloat(A.MapObjectMinScale, A.MapObjectMaxScale, 8), e.readBits(6)
        }, function(e, t) {
            t.healthT = e.readFloat(0, 1, 8), t.type = e.readMapType(), t.layer = e.readBits(2), t.dead = e.readBoolean(), t.isDoor = e.readBoolean(), t.isDoor && (t.door = {}, t.door.open = e.readBoolean(), t.door.canUse = e.readBoolean(), t.door.seq = e.readBits(6)), t.isButton = e.readBoolean(), t.isButton && (t.button = {}, t.button.onOff = e.readBoolean(), t.button.canUse = e.readBoolean(), t.button.seq = e.readBits(6)), t.isPuzzlePiece = e.readBoolean(), t.isPuzzlePiece && (t.parentBuildingId = e.readUint16()), e.readBits(6)
        }), n(b.Type.Building, function(e, t) {}, function(e, t) {}, function(e, t) {
            t.ceilingDead = e.readBoolean(), t.occupied = e.readBoolean(), t.ceilingDamaged = e.readBoolean(), t.hasPuzzle = e.readBoolean(), t.hasPuzzle && (t.puzzleSolved = e.readBoolean(), t.puzzleErrSeq = e.readBits(7)), e.readBits(4)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.type = e.readMapType(), t.ori = e.readBits(2), t.layer = e.readBits(2)
        }), n(b.Type.Structure, function(e, t) {}, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeMapType(t.type), e.writeBits(t.ori, 2), e.writeBoolean(t.interiorSoundEnabled), e.writeBoolean(t.interiorSoundAlt);
            for (var a = 0; a < x.structureLayerCount; a++) e.writeUint16(t.layerObjIds[a])
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.type = e.readMapType(), t.ori = e.readBits(2), t.interiorSoundEnabled = e.readBoolean(), t.interiorSoundAlt = e.readBoolean(), t.layerObjIds = [];
            for (var a = 0; a < x.structureLayerCount; a++) {
                var i = e.readUint16();
                t.layerObjIds.push(i)
            }
        }), n(b.Type.LootSpawner, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeMapType(t.type), e.writeBits(t.layer, 2), e.writeBits(0, 2)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.type = e.readMapType(), t.layer = e.readBits(2), e.readBits(2)
        }, function(e, t) {}), n(b.Type.Loot, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function(e, t) {
            e.writeItemType(t.type), e.writeBits(t.layer, 2), e.writeBits(t.isOld, 4), e.writeUint8(t.count)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }, function(e, t) {
            t.type = e.readItemType(), t.layer = e.readBits(2), t.isOld = e.readBits(4), t.count = e.readUint8()
        }), n(b.Type.DeadBody, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function(e, t) {
            e.writeUint8(t.layer), e.writeUint16(t.playerId)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }, function(e, t) {
            t.layer = e.readUint8(), t.playerId = e.readUint16()
        }), n(b.Type.Decal, function(e, t) {}, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.scale, A.MapObjectMinScale, A.MapObjectMaxScale, 8), e.writeMapType(t.type), e.writeBits(t.ori, 2), e.writeBits(t.layer, 2), e.writeUint8(t.goreKills)
        }, function(e, t) {}, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.scale = e.readFloat(A.MapObjectMinScale, A.MapObjectMaxScale, 8), t.type = e.readMapType(), t.ori = e.readBits(2), t.layer = e.readBits(2), t.goreKills = e.readUint8()
        }), n(b.Type.Projectile, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.posZ, 0, x.projectile.maxHeight, 10), e.writeUnitVec(t.dir, 7)
        }, function(e, t) {
            e.writeItemType(t.type), e.writeBits(t.layer, 2), e.writeBits(0, 4)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.posZ = e.readFloat(0, x.projectile.maxHeight, 10), t.dir = e.readUnitVec(7)
        }, function(e, t) {
            t.type = e.readItemType(), t.layer = e.readBits(2), e.readBits(4)
        }), n(b.Type.Smoke, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.rad, 0, A.SmokeMaxRad, 8)
        }, function(e, t) {
            e.writeBits(t.layer, 2), e.writeBits(t.interior, 6)
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.rad = e.readFloat(0, A.SmokeMaxRad, 8)
        }, function(e, t) {
            t.layer = e.readBits(2), t.interior = e.readBits(6)
        }), n(b.Type.Airdrop, function(e, t) {
            e.writeFloat(t.fallT, 0, 1, 7), e.writeBoolean(t.landed)
        }, function(e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function(e, t) {
            t.fallT = e.readFloat(0, 1, 7), t.landed = e.readBoolean()
        }, function(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        });
        var D = {
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
            O = function() {
                function e() {
                    i(this, e), this.protocol = 0, this.privData = "", this.name = "", this.emotes = [], this.useTouch = !1, this.isMobile = !1, this.bot = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeUint32(this.protocol), e.writeString(this.privData), e.writeString(this.name, A.PlayerNameMaxLen);
                        for (var t = 0; t < x.EmoteSlot.Count; t++) e.writeItemType(this.emotes[t]);
                        e.writeBoolean(this.useTouch), e.writeBoolean(this.isMobile), e.writeBoolean(this.bot), e.writeAlignToNextByte()
                    }
                }]), e
            }(),
            B = function() {
                function e() {
                    i(this, e), this.reason = ""
                }
                return w(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.reason = e.readString()
                    }
                }]), e
            }(),
            R = function() {
                function e() {
                    i(this, e), this.seq = 0, this.moveLeft = !1, this.moveRight = !1, this.moveUp = !1, this.moveDown = !1, this.shootStart = !1, this.shootHold = !1, this.portrait = !1, this.touchMoveActive = !1, this.touchMoveDir = S.create(1, 0), this.touchMoveLen = 255, this.toMouseDir = S.create(1, 0), this.toMouseLen = 0, this.inputs = [], this.useItem = ""
                }
                return w(e, [{
                    key: "addInput",
                    value: function(e) {
                        this.inputs.length < 7 && -1 === this.inputs.indexOf(e) && this.inputs.push(e)
                    }
                }, {
                    key: "serialize",
                    value: function(e) {
                        e.writeUint8(this.seq), e.writeBoolean(this.moveLeft), e.writeBoolean(this.moveRight), e.writeBoolean(this.moveUp), e.writeBoolean(this.moveDown), e.writeBoolean(this.shootStart), e.writeBoolean(this.shootHold), e.writeBoolean(this.portrait), e.writeBoolean(this.touchMoveActive), this.touchMoveActive && (e.writeUnitVec(this.touchMoveDir, 8), e.writeUint8(this.touchMoveLen)), e.writeUnitVec(this.toMouseDir, 10), e.writeFloat(this.toMouseLen, 0, A.MouseMaxDist, 8), e.writeBits(this.inputs.length, 4);
                        for (var t = 0; t < this.inputs.length; t++) e.writeUint8(this.inputs[t]);
                        e.writeItemType(this.useItem), e.writeBits(0, 6)
                    }
                }]), e
            }(),
            L = function e() {
                i(this, e)
            },
            F = function() {
                function e() {
                    i(this, e), this.item = "", this.weapIdx = 0
                }
                return w(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeItemType(this.item), e.writeUint8(this.weapIdx), e.writeBits(0, 6)
                    }
                }]), e
            }(),
            j = function() {
                function e() {
                    i(this, e), this.pos = S.create(0, 0), this.type = "", this.isPing = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeVec(this.pos, 0, 0, 1024, 1024, 16), e.writeItemType(this.type), e.writeBoolean(this.isPing), e.writeBits(0, 5)
                    }
                }]), e
            }(),
            q = function() {
                function e() {
                    i(this, e), this.teamMode = 0, this.playerId = 0, this.started = !1, this.emotes = []
                }
                return w(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.teamMode = e.readUint8(), this.playerId = e.readUint16(), this.started = e.readBoolean();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var i = e.readItemType();
                            this.emotes.push(i)
                        }
                        e.readAlignToNextByte()
                    }
                }]), e
            }(),
            N = function() {
                function e() {
                    i(this, e), this.mapName = "", this.seed = 0, this.width = 0, this.height = 0, this.shoreInset = 0, this.grassInset = 0, this.rivers = [], this.places = [], this.objects = [], this.groundPatches = []
                }
                return w(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.mapName = e.readString(A.MapNameMaxLen), this.seed = e.readUint32(), this.width = e.readUint16(), this.height = e.readUint16(), this.shoreInset = e.readUint16(), this.grassInset = e.readUint16();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var i = {};
                            d(e, i), this.rivers.push(i)
                        }
                        for (var r = e.readUint8(), o = 0; o < r; o++) {
                            var n = {};
                            h(e, n), this.places.push(n)
                        }
                        for (var s = e.readUint16(), l = 0; l < s; l++) {
                            var c = {};
                            g(e, c), this.objects.push(c)
                        }
                        for (var m = e.readUint8(), p = 0; p < m; p++) {
                            var y = {};
                            u(e, y), this.groundPatches.push(y)
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
            G = function() {
                function e() {
                    i(this, e), this.serializedObjectCache = null, this.objectReg = null, this.clientPlayer = null, this.activePlayer = null, this.grid = null, this.playerBarn = null, this.bulletBarn = null, this.gas = null, this.map = null, this.delObjIds = [], this.fullObjects = [], this.partObjects = [], this.activePlayerId = 0, this.activePlayerIdDirty = !1, this.activePlayerData = {}, this.aliveCounts = [], this.aliveDirty = !1, this.gasT = 0, this.gasData = {}, this.gasDirty = !1, this.playerInfos = [], this.deletedPlayerIds = [], this.playerStatus = {}, this.playerStatusDirty = !1, this.groupStatus = {}, this.groupStatusDirty = !1, this.bullets = [], this.explosions = [], this.emotes = [], this.planes = [], this.airstrikeZones = [], this.mapIndicators = [], this.ack = 0
                }
                return w(e, [{
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
                            for (var n = 0; n < o; n++) {
                                var d = {};
                                d.__type = e.readUint8(), d.__id = e.readUint16(), E[d.__type].deserializePart(e, d), E[d.__type].deserializeFull(e, d), this.fullObjects.push(d)
                            }
                        }
                        for (var h = e.readUint16(), u = 0; u < h; u++) {
                            var g = {};
                            g.__id = e.readUint16();
                            var y = t.getTypeById(g.__id, e);
                            E[y].deserializePart(e, g), this.partObjects.push(g)
                        }
                        0 != (a & V.ActivePlayerId) && (this.activePlayerId = e.readUint16(), this.activePlayerIdDirty = !0);
                        var w = {};
                        if (s(e, w), this.activePlayerData = w, 0 != (a & V.AliveCount)) {
                            for (var f = e.readUint8(), x = 0; x < f; x++) {
                                var b = e.readUint8();
                                this.aliveCounts.push(b)
                            }
                            this.aliveDirty = !0
                        }
                        if (this.gasT = e.readFloat(0, 1, 16), 0 != (a & V.Gas)) {
                            var _ = {};
                            p(e, _), this.gasData = _, this.gasDirty = !0
                        }
                        if (0 != (a & V.PlayerInfos))
                            for (var v = e.readUint8(), k = 0; k < v; k++) {
                                var z = {};
                                m(e, z), this.playerInfos.push(z)
                            }
                        if (0 != (a & V.DeletePlayerIds))
                            for (var M = e.readUint8(), T = 0; T < M; T++) {
                                var I = e.readUint16();
                                this.deletedPlayerIds.push(I)
                            }
                        if (0 != (a & V.PlayerStatus)) {
                            var P = {};
                            l(e, P), this.playerStatus = P, this.playerStatusDirty = !0
                        }
                        if (0 != (a & V.GroupStatus)) {
                            var C = {};
                            c(e, C), this.groupStatus = C, this.groupStatusDirty = !0
                        }
                        if (0 != (a & V.Bullets))
                            for (var D = e.readUint8(), O = 0; O < D; O++) {
                                var B = {};
                                B.playerId = e.readUint16(), B.pos = e.readVec(0, 0, 1024, 1024, 16), B.dir = e.readUnitVec(8), B.bulletType = e.readBulletType(), B.layer = e.readBits(2), B.varianceT = e.readFloat(0, 1, 5), B.distAdjIdx = e.readBits(4), B.clipDistance = e.readBoolean(), B.clipDistance && (B.distance = e.readFloat(0, 128, 8)), B.shotFx = e.readBoolean(), B.shotFx && (B.shotSourceType = e.readItemType(), B.shotOffhand = e.readBoolean(), B.lastShot = e.readBoolean()), B.reflectCount = 0, B.reflectObjId = 0;
                                var R = e.readBoolean();
                                R && (B.reflectCount = e.readBits(2), B.reflectObjId = e.readUint16()), e.readAlignToNextByte(), this.bullets.push(B)
                            }
                        if (0 != (a & V.Explosions))
                            for (var L = e.readUint8(), F = 0; F < L; F++) {
                                var j = {};
                                j.pos = e.readVec(0, 0, 1024, 1024, 16), j.type = e.readExplosionType(), j.layer = e.readBits(2), e.readAlignToNextByte(), this.explosions.push(j)
                            }
                        if (0 != (a & V.Emotes))
                            for (var q = e.readUint8(), N = 0; N < q; N++) {
                                var G = {};
                                G.playerId = e.readUint16(), G.type = e.readItemType(), G.itemType = e.readItemType(), G.isPing = e.readBoolean(), G.isPing && (G.pos = e.readVec(0, 0, 1024, 1024, 16)), e.readBits(3), this.emotes.push(G)
                            }
                        if (0 != (a & V.Planes))
                            for (var U = e.readUint8(), H = 0; H < U; H++) {
                                var W = {};
                                W.id = e.readUint8();
                                var K = e.readVec(0, 0, 2048, 2048, 10);
                                W.pos = S.create(K.x - 512, K.y - 512), W.planeDir = e.readUnitVec(8), W.actionComplete = e.readBoolean(), W.action = e.readBits(3), this.planes.push(W)
                            }
                        if (0 != (a & V.AirstrikeZones))
                            for (var Z = e.readUint8(), X = 0; X < Z; X++) {
                                var Y = {};
                                Y.pos = e.readVec(0, 0, 1024, 1024, 12), Y.rad = e.readFloat(0, A.AirstrikeZoneMaxRad, 8), Y.duration = e.readFloat(0, A.AirstrikeZoneMaxDuration, 8), this.airstrikeZones.push(Y)
                            }
                        if (0 != (a & V.MapIndicators))
                            for (var J = e.readUint8(), Q = 0; Q < J; Q++) {
                                var $ = {};
                                $.id = e.readBits(6), $.dead = e.readBoolean(), $.equipped = e.readBoolean(), $.type = e.readItemType(), $.pos = e.readVec(0, 0, 1024, 1024, 16), e.readAlignToNextByte(), this.mapIndicators.push($)
                            }
                        this.ack = e.readUint8()
                    }
                }]), e
            }(),
            U = function() {
                function e() {
                    i(this, e), this.itemSourceType = "", this.mapSourceType = "", this.damageType = 0, this.targetId = 0, this.killerId = 0, this.killCreditId = 0, this.killerKills = 0, this.downed = !1, this.killed = !1, this.role = ""
                }
                return w(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.damageType = e.readUint8(), this.itemSourceType = e.readItemType(), this.mapSourceType = e.readMapType(), this.targetId = e.readUint16(), this.killerId = e.readUint16(), this.killCreditId = e.readUint16(), this.killerKills = e.readUint8(), this.downed = e.readBoolean(), this.killed = e.readBoolean(), this.role = e.readRoleType(), e.readAlignToNextByte()
                    }
                }]), e
            }(),
            H = function() {
                function e() {
                    i(this, e), this.playerId = 0, this.playerStats = {}
                }
                return w(e, [{
                    key: "deserialize",
                    value: function(e) {
                        var t = {};
                        t.playerId = e.readUint16(), t.timeAlive = e.readUint16(), t.kills = e.readUint8(), t.dead = e.readUint8(), t.damageDealt = e.readUint16(), t.damageTaken = e.readUint16(), this.playerStats = t
                    }
                }]), e
            }(),
            W = function() {
                function e() {
                    i(this, e), this.teamId = 0, this.teamRank = 0, this.gameOver = !1, this.winningTeamId = 0, this.playerStats = []
                }
                return w(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.teamId = e.readUint8(), this.teamRank = e.readUint8(), this.gameOver = e.readUint8(), this.winningTeamId = e.readUint8();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var i = new H;
                            i.deserialize(e), this.playerStats.push(i.playerStats)
                        }
                    }
                }]), e
            }(),
            K = {
                Full: 0,
                AlreadyOwned: 1,
                AlreadyEquipped: 2,
                BetterItemEquipped: 3,
                Success: 4,
                GunCannotFire: 5
            },
            Z = function() {
                function e() {
                    i(this, e), this.type = 0, this.item = "", this.count = 0
                }
                return w(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.type = e.readUint8(), this.item = e.readItemType(), this.count = e.readUint8(), e.readBits(6)
                    }
                }]), e
            }(),
            X = function() {
                function e() {
                    i(this, e), this.specBegin = !1, this.specNext = !1, this.specPrev = !1, this.specForce = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeBoolean(this.specBegin), e.writeBoolean(this.specNext), e.writeBoolean(this.specPrev), e.writeBoolean(this.specForce), e.writeBits(0, 4)
                    }
                }]), e
            }(),
            Y = function() {
                function e() {
                    i(this, e), this.playerId = 0, this.role = ""
                }
                return w(e, [{
                    key: "deserialize",
                    value: function(e) {
                        this.playerId = e.readUint16(), this.role = e.readRoleType(), e.readAlignToNextByte()
                    }
                }]), e
            }(),
            J = function() {
                function e() {
                    i(this, e), this.blocked = !1, this.prerollLoaded = !1, this.prerollFreestar = !1, this.prerollAIP = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function(e) {
                        e.writeBoolean(this.blocked), e.writeBoolean(this.prerollLoaded), e.writeBoolean(this.prerollFreestar), e.writeBoolean(this.prerollAIP), e.writeBits(0, 4)
                    }
                }]), e
            }(),
            Q = function() {
                function e() {
                    i(this, e), this.emotes = [], this.custom = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function(e) {
                        for (var t = 0; t < x.EmoteSlot.Count; t++) e.writeItemType(this.emotes[t]);
                        e.writeUint8(this.custom), e.writeAlignToNextByte()
                    }
                }]), e
            }(),
            $ = function() {
                function e() {
                    i(this, e), this.data = []
                }
                return w(e, [{
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
            BitStream: I.BitStream,
            Constants: A,
            getPlayerStatusUpdateRate: o,
            MsgStream: C,
            Msg: D,
            JoinMsg: O,
            DisconnectMsg: B,
            InputMsg: R,
            EditMsg: L,
            DropItemMsg: F,
            JoinedMsg: q,
            UpdateMsg: G,
            MapMsg: N,
            KillMsg: U,
            PlayerStatsMsg: H,
            GameOverMsg: W,
            PickupMsgType: K,
            PickupMsg: Z,
            SpectateMsg: X,
            EmoteMsg: j,
            AssignRoleMsg: Y,
            AdStatusMsg: J,
            LoadoutMsg: Q,
            StatsMsg: $
        }
    }
