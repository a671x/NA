    "300e2704": function (e, t, a) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t, a) {
            var r = new T(a),
                i = Object.keys(t);
            f(i.length <= r.maxId, e + " contains " + i.length + " types, max " + r.maxId);
            for (var o = 0; o < i.length; o++) r.addType(i[o]);
            return z && console.log("Used " + r.nextId + " / " + r.maxId + " " + e + " types"), I.BitStream.prototype["write" + e + "Type"] = function (e) {
                this.writeBits(r.typeToId(e), a)
            }, I.BitStream.prototype["read" + e + "Type"] = function () {
                return r.idToType(this.readBits(a))
            }, r
        }

        function o(e) {
            return e ? .5 : .25
        }

        function s(e, t, a, r, i, o) {
            P[e] = {
                serializedFullSize: t,
                serializePart: a,
                serializeFull: r,
                deserializePart: i,
                deserializeFull: o
            }
        }

        function n(e, t) {
            if (t.healthDirty = e.readBoolean(), t.healthDirty && (t.health = e.readFloat(0, 100, 8)), t.boostDirty = e.readBoolean(), t.boostDirty && (t.boost = e.readFloat(0, 100, 8)), t.zoomDirty = e.readBoolean(), t.zoomDirty && (t.zoom = e.readUint8()), t.actionDirty = e.readBoolean(), t.actionDirty && (t.action = {}, t.action.time = e.readFloat(0, C.ActionMaxDuration, 8), t.action.duration = e.readFloat(0, C.ActionMaxDuration, 8), t.action.targetId = e.readUint16()), t.inventoryDirty = e.readBoolean(), t.inventoryDirty) {
                t.scope = e.readGameType(), t.inventory = {};
                for (var a = Object.keys(_.bagSizes), r = 0; r < a.length; r++) {
                    var i = a[r],
                        o = 0;
                    e.readBoolean() && (o = e.readBits(9)), t.inventory[i] = o
                }
            }
            if (t.weapsDirty = e.readBoolean(), t.weapsDirty) {
                t.curWeapIdx = e.readBits(2), t.weapons = [];
                for (var s = 0; s < _.WeaponSlot.Count; s++) {
                    var n = {};
                    n.type = e.readGameType(), n.ammo = e.readUint8(), t.weapons.push(n)
                }
            }
            t.spectatorCountDirty = e.readBoolean(), t.spectatorCountDirty && (t.spectatorCount = e.readUint8()), e.readAlignToNextByte()
        }

        function l(e, t) {
            t.players = [];
            for (var a = e.readUint8(), r = 0; r < a; r++) {
                var i = {};
                i.hasData = e.readBoolean(), i.hasData && (i.pos = e.readVec(0, 0, 1024, 1024, 11), i.visible = e.readBoolean(), i.dead = e.readBoolean(), i.downed = e.readBoolean(), i.role = "", e.readBoolean() && (i.role = e.readGameType())), t.players.push(i)
            }
            e.readAlignToNextByte()
        }

        function c(e, t) {
            t.players = [];
            for (var a = e.readUint8(), r = 0; r < a; r++) {
                var i = {};
                i.health = e.readFloat(0, 100, 7), i.disconnected = e.readBoolean(), t.players.push(i)
            }
        }

        function m(e, t) {
            t.playerId = e.readUint16(), t.teamId = e.readUint8(), t.groupId = e.readUint8(), t.name = e.readString(), t.loadout = {}, t.loadout.heal = e.readGameType(), t.loadout.boost = e.readGameType(), e.readAlignToNextByte()
        }

        function p(e, t) {
            t.mode = e.readUint8(), t.duration = e.readFloat32(), t.posOld = e.readVec(0, 0, 1024, 1024, 16), t.posNew = e.readVec(0, 0, 1024, 1024, 16), t.radOld = e.readFloat(0, 2048, 16), t.radNew = e.readFloat(0, 2048, 16)
        }

        function h(e, t) {
            t.width = e.readFloat32(), t.looped = e.readUint8(), t.points = [];
            for (var a = e.readUint8(), r = 0; r < a; r++) {
                var i = e.readVec(0, 0, 1024, 1024, 16);
                t.points.push(i)
            }
        }

        function d(e, t) {
            t.name = e.readString(), t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }

        function u(e, t) {
            t.min = e.readVec(0, 0, 1024, 1024, 16), t.max = e.readVec(0, 0, 1024, 1024, 16), t.color = e.readUint32(), t.roughness = e.readFloat32(), t.offsetDist = e.readFloat32(), t.order = e.readBits(7), t.useAsMapShape = e.readBoolean()
        }

        function g(e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.scale = e.readFloat(C.MapObjectMinScale, C.MapObjectMaxScale, 8), t.type = e.readMapType(), t.ori = e.readBits(2), e.readBits(2)
        }
        var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            w = function () {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var r = t[a];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, a, r) {
                    return a && e(t.prototype, a), r && e(t, r), t
                }
            }(),
            f = a("0e566746"),
            _ = (a("34e32c48"), a("6b42806d"), a("989ad62a")),
            b = a("8649e148"),
            x = a("10899aea"),
            S = (a("1901e2d9"), a("c2a798c8")),
            v = a("721a96bf"),
            k = a("03f4982a"),
            z = !1,
            I = a("14a25ec1");
        I.BitStream.prototype.writeBytes = function (e, t, a) {
            f(this._index % 8 == 0);
            var r = new Uint8Array(e._view._view.buffer, t, a);
            this._view._view.set(r, this._index / 8), this._index += 8 * a
        }, I.BitStream.prototype.writeString = I.BitStream.prototype.writeASCIIString, I.BitStream.prototype.readString = I.BitStream.prototype.readASCIIString, I.BitStream.prototype.writeFloat = function (e, t, a, r) {
            f(r > 0 && r < 31), f(e >= t && e <= a);
            var i = (1 << r) - 1,
                o = x.clamp(e, t, a),
                s = (o - t) / (a - t),
                n = s * i + .5;
            this.writeBits(n, r)
        }, I.BitStream.prototype.readFloat = function (e, t, a) {
            f(a > 0 && a < 31);
            var r = (1 << a) - 1;
            return e + this.readBits(a) / r * (t - e)
        }, I.BitStream.prototype.writeVec = function (e, t, a, r, i, o) {
            this.writeFloat(e.x, t, r, o), this.writeFloat(e.y, a, i, o)
        }, I.BitStream.prototype.readVec = function (e, t, a, r, i) {
            return S.create(this.readFloat(e, a, i), this.readFloat(t, r, i))
        }, I.BitStream.prototype.writeUnitVec = function (e, t) {
            this.writeVec(e, -1.0001, -1.0001, 1.0001, 1.0001, t)
        }, I.BitStream.prototype.readUnitVec = function (e) {
            return this.readVec(-1.0001, -1.0001, 1.0001, 1.0001, e)
        }, I.BitStream.prototype.writeVec32 = function (e) {
            this.writeFloat32(e.x), this.writeFloat32(e.y)
        }, I.BitStream.prototype.readVec32 = function () {
            return S.create(this.readFloat32(), this.readFloat32())
        }, I.BitStream.prototype.writeAlignToNextByte = function () {
            var e = 8 - this.index % 8;
            e < 8 && this.writeBits(0, e)
        }, I.BitStream.prototype.readAlignToNextByte = function () {
            var e = 8 - this.index % 8;
            e < 8 && this.readBits(e)
        };
        var T = function () {
            function e(t) {
                r(this, e), this._typeToId = {}, this._idToType = {}, this.nextId = 0, this.maxId = Math.pow(2, t), this.addType("")
            }
            return w(e, [{
                key: "addType",
                value: function (e) {
                    f(void 0 === this._typeToId[e], "Type " + e + " has already been defined!"), f(this.nextId < this.maxId), this._typeToId[e] = this.nextId, this._idToType[this.nextId] = e, this.nextId++
                }
            }, {
                key: "typeToId",
                value: function (e) {
                    var t = this._typeToId[e];
                    return f(void 0 !== t, "Invalid type " + e), t
                }
            }, {
                key: "idToType",
                value: function (e) {
                    var t = this._idToType[e];
                    return void 0 === t && console.error("Invalid id given to idToType", e, "max", Object.keys(this._idToType).length), t
                }
            }]), e
        }();
        i("Game", v, 10), i("Map", k, 12);
        var M = function () {
                function e(t) {
                    r(this, e);
                    var a = t instanceof ArrayBuffer ? t : null;
                    this.valid = null != a, this.valid ? (this.arrayBuf = a, this.stream = new I.BitStream(a)) : (console.log("Invalid buf type", void 0 === t ? "undefined" : y(t)), "string" == typeof t && console.log("String contents: " + t.substring(0, 1024)))
                }
                return w(e, [{
                    key: "getBuffer",
                    value: function () {
                        return new Uint8Array(this.arrayBuf, 0, this.stream.byteIndex)
                    }
                }, {
                    key: "getStream",
                    value: function () {
                        return this.stream
                    }
                }, {
                    key: "serializeMsg",
                    value: function (e, t) {
                        f(this.stream.index % 8 == 0), this.stream.writeUint8(e), t.serialize(this.stream), f(this.stream.index % 8 == 0)
                    }
                }, {
                    key: "serializeMsgStream",
                    value: function (e, t) {
                        f(this.stream.index % 8 == 0 && t.index % 8 == 0), this.stream.writeUint8(e), this.stream.writeBytes(t, 0, t.index / 8)
                    }
                }, {
                    key: "deserializeMsgType",
                    value: function () {
                        return this.stream.length - 8 * this.stream.byteIndex >= 1 ? this.stream.readUint8() : A.None
                    }
                }]), e
            }(),
            C = {
                MapNameMaxLen: 24,
                PlayerNameMaxLen: 16,
                MouseMaxDist: 64,
                SmokeMaxRad: 10,
                ActionMaxDuration: 8.5,
                AirstrikeZoneMaxRad: 256,
                AirstrikeZoneMaxDuration: 60,
                MapObjectMinScale: .125,
                MapObjectMaxScale: 2.5,
                MaxPerks: 8,
                MaxMapIndicators: 16
            },
            P = {};
        s(b.Type.Player, 32, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeUnitVec(t.dir, 8)
        }, function (e, t) {}, function (e, t) {
            t.ie = e.readVec(0, 0, 1024, 1024, 16), t.oe = e.readUnitVec(8)
        }, function (e, t) {
            t.se = e.readGameType(), t.ne = e.readGameType(), t.le = e.readGameType(), t.ce = e.readGameType(), t.me = e.readGameType(), t.pe = e.readBits(2), t.he = e.readBoolean(), t.ue = e.readBoolean(), t.ge = e.readBits(3), t.ye = e.readBits(3), t.we = e.readBits(3), t.fe = e.readBits(3), t._e = e.readBoolean(), t.be = e.readBoolean(), t.xe = e.readBoolean(), t.Se = e.readBoolean(), t.ve = e.readBoolean(), t.ke = e.readBoolean(), t.ze = e.readBits(2);
            var a = e.readBoolean();
            t.Ie = a ? e.readGameType() : "";
            var r = e.readBoolean();
            if (t.Te = r ? e.readGameType() : "", t.Me = [], e.readBoolean())
                for (var i = e.readBits(3), o = 0; o < i; o++) {
                    var s = e.readGameType(),
                        n = e.readBoolean();
                    t.Me.push({
                        type: s,
                        droppable: n
                    })
                }
            e.readAlignToNextByte()
        }), s(b.Type.Obstacle, 0, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeBits(t.ori, 2), e.writeFloat(t.scale, C.MapObjectMinScale, C.MapObjectMaxScale, 8), e.writeBits(0, 6)
        }, function (e, t) {}, function (e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.ori = e.readBits(2), t.scale = e.readFloat(C.MapObjectMinScale, C.MapObjectMaxScale, 8), e.readBits(6)
        }, function (e, t) {
            t.healthT = e.readFloat(0, 1, 8), t.type = e.readMapType(), t.layer = e.readBits(2), t.dead = e.readBoolean(), t.isDoor = e.readBoolean(), t.isDoor && (t.door = {}, t.door.open = e.readBoolean(), t.door.canUse = e.readBoolean(), t.door.seq = e.readBits(6)), t.isButton = e.readBoolean(), t.isButton && (t.button = {}, t.button.onOff = e.readBoolean(), t.button.canUse = e.readBoolean(), t.button.seq = e.readBits(6)), t.isPuzzlePiece = e.readBoolean(), t.isPuzzlePiece && (t.parentBuildingId = e.readUint16()), t.isSkin = e.readBoolean(), t.isSkin && (t.skinPlayerId = e.readUint16()), e.readBits(5)
        }), s(b.Type.Building, 0, function (e, t) {}, function (e, t) {}, function (e, t) {
            t.ceilingDead = e.readBoolean(), t.occupied = e.readBoolean(), t.ceilingDamaged = e.readBoolean(), t.hasPuzzle = e.readBoolean(), t.hasPuzzle && (t.puzzleSolved = e.readBoolean(), t.puzzleErrSeq = e.readBits(7)), e.readBits(4)
        }, function (e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.type = e.readMapType(), t.ori = e.readBits(2), t.layer = e.readBits(2)
        }), s(b.Type.Structure, 0, function (e, t) {}, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeMapType(t.type), e.writeBits(t.ori, 2), e.writeBoolean(t.interiorSoundEnabled), e.writeBoolean(t.interiorSoundAlt);
            for (var a = 0; a < _.structureLayerCount; a++) e.writeUint16(t.layerObjIds[a])
        }, function (e, t) {}, function (e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.type = e.readMapType(), t.ori = e.readBits(2), t.interiorSoundEnabled = e.readBoolean(), t.interiorSoundAlt = e.readBoolean(), t.layerObjIds = [];
            for (var a = 0; a < _.structureLayerCount; a++) {
                var r = e.readUint16();
                t.layerObjIds.push(r)
            }
        }), s(b.Type.LootSpawner, 0, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeMapType(t.type), e.writeBits(t.layer, 2), e.writeBits(0, 2)
        }, function (e, t) {}, function (e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.type = e.readMapType(), t.layer = e.readBits(2), e.readBits(2)
        }, function (e, t) {}), s(b.Type.Loot, 0, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function (e, t) {
            e.writeGameType(t.type), e.writeBits(t.layer, 2), e.writeBits(t.isOld, 4), e.writeUint8(t.count)
        }, function (e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }, function (e, t) {
            t.type = e.readGameType(), t.layer = e.readBits(2), t.isOld = e.readBits(4), t.count = e.readUint8()
        }), s(b.Type.DeadBody, 0, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function (e, t) {
            e.writeUint8(t.layer), e.writeUint16(t.playerId)
        }, function (e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16)
        }, function (e, t) {
            t.layer = e.readUint8(), t.playerId = e.readUint16()
        }), s(b.Type.Decal, 0, function (e, t) {}, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.scale, C.MapObjectMinScale, C.MapObjectMaxScale, 8), e.writeMapType(t.type), e.writeBits(t.ori, 2), e.writeBits(t.layer, 2), e.writeUint8(t.goreKills)
        }, function (e, t) {}, function (e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.scale = e.readFloat(C.MapObjectMinScale, C.MapObjectMaxScale, 8), t.type = e.readMapType(), t.ori = e.readBits(2), t.layer = e.readBits(2), t.goreKills = e.readUint8()
        }), s(b.Type.Projectile, 0, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.posZ, 0, _.projectile.maxHeight, 10), e.writeUnitVec(t.dir, 7)
        }, function (e, t) {
            e.writeGameType(t.type), e.writeBits(t.layer, 2), e.writeBits(0, 4)
        }, function (e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.posZ = e.readFloat(0, _.projectile.maxHeight, 10), t.dir = e.readUnitVec(7)
        }, function (e, t) {
            t.type = e.readGameType(), t.layer = e.readBits(2), e.readBits(4)
        }), s(b.Type.Smoke, 0, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16), e.writeFloat(t.rad, 0, C.SmokeMaxRad, 8)
        }, function (e, t) {
            e.writeBits(t.layer, 2), e.writeBits(t.interior, 6)
        }, function (e, t) {
            t.pos = e.readVec(0, 0, 1024, 1024, 16), t.rad = e.readFloat(0, C.SmokeMaxRad, 8)
        }, function (e, t) {
            t.layer = e.readBits(2), t.interior = e.readBits(6)
        }), s(b.Type.Airdrop, 0, function (e, t) {
            e.writeFloat(t.fallT, 0, 1, 7), e.writeBoolean(t.landed)
        }, function (e, t) {
            e.writeVec(t.pos, 0, 0, 1024, 1024, 16)
        }, function (e, t) {
            t.fallT = e.readFloat(0, 1, 7), t.landed = e.readBoolean()
        }, function (e, t) {
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
                RoleAnnouncement: 17,
                Stats: 18,
                UpdatePass: 19,
                AliveCounts: 20
            },
            O = function () {
                function e() {
                    r(this, e), this.protocol = 0, this.matchPriv = "", this.loadoutPriv = "", this.questPriv = "", this.name = "", this.useTouch = !1, this.isMobile = !1, this.proxy = !1, this.otherProxy = !1, this.bot = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function (e) {
                        e.writeUint32(this.protocol), e.writeString(this.matchPriv), e.writeString(this.loadoutPriv), e.writeString(this.questPriv), e.writeString(this.name, C.PlayerNameMaxLen), e.writeBoolean(this.useTouch), e.writeBoolean(this.isMobile), e.writeBoolean(this.proxy), e.writeBoolean(this.otherProxy), e.writeBoolean(this.bot), e.writeAlignToNextByte()
                    }
                }]), e
            }(),
            E = function () {
                function e() {
                    r(this, e), this.reason = ""
                }
                return w(e, [{
                    key: "deserialize",
                    value: function (e) {
                        this.reason = e.readString()
                    }
                }]), e
            }(),
            D = function () {
                function e() {
                    r(this, e), this.seq = 0, this.moveLeft = !1, this.moveRight = !1, this.moveUp = !1, this.moveDown = !1, this.shootStart = !1, this.shootHold = !1, this.portrait = !1, this.touchMoveActive = !1, this.touchMoveDir = S.create(1, 0), this.touchMoveLen = 255, this.toMouseDir = S.create(1, 0), this.toMouseLen = 0, this.inputs = [], this.useItem = ""
                }
                return w(e, [{
                    key: "addInput",
                    value: function (e) {
                        this.inputs.length < 7 && -1 === this.inputs.indexOf(e) && this.inputs.push(e)
                    }
                }, {
                    key: "serialize",
                    value: function (e) {
                        e.writeUint8(this.seq), e.writeBoolean(this.moveLeft), e.writeBoolean(this.moveRight), e.writeBoolean(this.moveUp), e.writeBoolean(this.moveDown), e.writeBoolean(this.shootStart), e.writeBoolean(this.shootHold), e.writeBoolean(this.portrait), e.writeBoolean(this.touchMoveActive), this.touchMoveActive && (e.writeUnitVec(this.touchMoveDir, 8), e.writeUint8(this.touchMoveLen)), e.writeUnitVec(this.toMouseDir, 10), e.writeFloat(this.toMouseLen, 0, C.MouseMaxDist, 8), e.writeBits(this.inputs.length, 4);
                        for (var t = 0; t < this.inputs.length; t++) e.writeUint8(this.inputs[t]);
                        e.writeGameType(this.useItem), e.writeBits(0, 6)
                    }
                }]), e
            }(),
            B = function e() {
                r(this, e)
            },
            L = function () {
                function e() {
                    r(this, e), this.item = "", this.weapIdx = 0
                }
                return w(e, [{
                    key: "serialize",
                    value: function (e) {
                        e.writeGameType(this.item), e.writeUint8(this.weapIdx), e.writeBits(0, 6)
                    }
                }]), e
            }(),
            R = function () {
                function e() {
                    r(this, e), this.pos = S.create(0, 0), this.type = "", this.isPing = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function (e) {
                        e.writeVec(this.pos, 0, 0, 1024, 1024, 16), e.writeGameType(this.type), e.writeBoolean(this.isPing), e.writeBits(0, 5)
                    }
                }]), e
            }(),
            q = function () {
                function e() {
                    r(this, e), this.teamMode = 0, this.playerId = 0, this.started = !1, this.emotes = []
                }
                return w(e, [{
                    key: "deserialize",
                    value: function (e) {
                        this.teamMode = e.readUint8(), this.playerId = e.readUint16(), this.started = e.readBoolean();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var r = e.readGameType();
                            this.emotes.push(r)
                        }
                        e.readAlignToNextByte()
                    }
                }]), e
            }(),
            F = function () {
                function e() {
                    r(this, e), this.mapName = "", this.seed = 0, this.width = 0, this.height = 0, this.shoreInset = 0, this.grassInset = 0, this.rivers = [], this.places = [], this.objects = [], this.groundPatches = []
                }
                return w(e, [{
                    key: "deserialize",
                    value: function (e) {
                        this.mapName = e.readString(C.MapNameMaxLen), this.seed = e.readUint32(), this.width = e.readUint16(), this.height = e.readUint16(), this.shoreInset = e.readUint16(), this.grassInset = e.readUint16();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var r = {};
                            h(e, r), this.rivers.push(r)
                        }
                        for (var i = e.readUint8(), o = 0; o < i; o++) {
                            var s = {};
                            d(e, s), this.places.push(s)
                        }
                        for (var n = e.readUint16(), l = 0; l < n; l++) {
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
            j = {
                DeletedObjects: 1,
                FullObjects: 2,
                ActivePlayerId: 4,
                Gas: 8,
                GasCircle: 16,
                PlayerInfos: 32,
                DeletePlayerIds: 64,
                PlayerStatus: 128,
                GroupStatus: 256,
                Bullets: 512,
                Explosions: 1024,
                Emotes: 2048,
                Planes: 4096,
                AirstrikeZones: 8192,
                MapIndicators: 16384,
                KillLeader: 32768
            },
            N = function () {
                function e() {
                    r(this, e), this.serializedObjectCache = null, this.objectReg = null, this.clientPlayer = null, this.activePlayer = null, this.grid = null, this.playerBarn = null, this.bulletBarn = null, this.gas = null, this.map = null, this.delObjIds = [], this.fullObjects = [], this.partObjects = [], this.activePlayerId = 0, this.activePlayerIdDirty = !1, this.activePlayerData = {}, this.aliveCounts = [], this.aliveDirty = !1, this.gasData = {}, this.gasDirty = !1, this.gasT = 0, this.gasTDirty = !1, this.playerInfos = [], this.deletedPlayerIds = [], this.playerStatus = {}, this.playerStatusDirty = !1, this.groupStatus = {}, this.groupStatusDirty = !1, this.bullets = [], this.explosions = [], this.emotes = [], this.planes = [], this.airstrikeZones = [], this.mapIndicators = [], this.killLeaderId = 0, this.killLeaderKills = 0, this.killLeaderDirty = !1, this.ack = 0
                }
                return w(e, [{
                    key: "deserialize",
                    value: function (e, t) {
                        var a = e.readUint16(),
                            r = 0;
                        if (0 != (a & j.DeletedObjects)) {
                            r = e.readUint16();
                            for (var i = 0; i < r; i++) this.delObjIds.push(e.readUint16())
                        }
                        var o = 0;
                        if (0 != (a & j.FullObjects)) {
                            o = e.readUint16();
                            for (var s = 0; s < o; s++) {
                                var h = {};
                                h.__type = e.readUint8(), h.__id = e.readUint16(), P[h.__type].deserializePart(e, h), P[h.__type].deserializeFull(e, h), this.fullObjects.push(h)
                            }
                        }
                        for (var d = e.readUint16(), u = 0; u < d; u++) {
                            var g = {};
                            g.__id = e.readUint16();
                            var y = t.getTypeById(g.__id, e);
                            P[y].deserializePart(e, g), this.partObjects.push(g)
                        }
                        0 != (a & j.ActivePlayerId) && (this.activePlayerId = e.readUint16(), this.activePlayerIdDirty = !0);
                        var w = {};
                        if (n(e, w), this.activePlayerData = w, 0 != (a & j.Gas)) {
                            var f = {};
                            p(e, f), this.gasData = f, this.gasDirty = !0
                        }
                        if (0 != (a & j.GasCircle) && (this.gasT = e.readFloat(0, 1, 16), this.gasTDirty = !0), 0 != (a & j.PlayerInfos))
                            for (var _ = e.readUint8(), b = 0; b < _; b++) {
                                var x = {};
                                m(e, x), this.playerInfos.push(x)
                            }
                        if (0 != (a & j.DeletePlayerIds))
                            for (var v = e.readUint8(), k = 0; k < v; k++) {
                                var z = e.readUint16();
                                this.deletedPlayerIds.push(z)
                            }
                        if (0 != (a & j.PlayerStatus)) {
                            var I = {};
                            l(e, I), this.playerStatus = I, this.playerStatusDirty = !0
                        }
                        if (0 != (a & j.GroupStatus)) {
                            var T = {};
                            c(e, T), this.groupStatus = T, this.groupStatusDirty = !0
                        }
                        if (0 != (a & j.Bullets)) {
                            for (var M = e.readUint8(), A = 0; A < M; A++) {
                                var O = {};
                                O.playerId = e.readUint16(), O.pos = e.readVec(0, 0, 1024, 1024, 16), O.dir = e.readUnitVec(8), O.bulletType = e.readGameType(), O.layer = e.readBits(2), O.varianceT = e.readFloat(0, 1, 4), O.distAdjIdx = e.readBits(4), O.clipDistance = e.readBoolean(), O.clipDistance && (O.distance = e.readFloat(0, 1024, 16)), O.shotFx = e.readBoolean(), O.shotFx && (O.shotSourceType = e.readGameType(), O.shotOffhand = e.readBoolean(), O.lastShot = e.readBoolean()), O.reflectCount = 0, O.reflectObjId = 0, e.readBoolean() && (O.reflectCount = e.readBits(2), O.reflectObjId = e.readUint16()), O.splinter = e.readBoolean(), O.splinter && (O.splinterSmall = e.readBoolean()), O.trailFx = e.readBoolean(), O.trailFx && (O.trailSaturated = e.readBoolean(), O.trailThick = e.readBoolean()), this.bullets.push(O)
                            }
                            e.readAlignToNextByte()
                        }
                        if (0 != (a & j.Explosions))
                            for (var E = e.readUint8(), D = 0; D < E; D++) {
                                var B = {};
                                B.pos = e.readVec(0, 0, 1024, 1024, 16), B.type = e.readGameType(), B.layer = e.readBits(2), e.readAlignToNextByte(), this.explosions.push(B)
                            }
                        if (0 != (a & j.Emotes))
                            for (var L = e.readUint8(), R = 0; R < L; R++) {
                                var q = {};
                                q.playerId = e.readUint16(), q.type = e.readGameType(), q.itemType = e.readGameType(), q.isPing = e.readBoolean(), q.isPing && (q.pos = e.readVec(0, 0, 1024, 1024, 16)), e.readBits(3), this.emotes.push(q)
                            }
                        if (0 != (a & j.Planes))
                            for (var F = e.readUint8(), N = 0; N < F; N++) {
                                var H = {};
                                H.id = e.readUint8();
                                var V = e.readVec(0, 0, 2048, 2048, 10);
                                H.pos = S.create(V.x - 512, V.y - 512), H.planeDir = e.readUnitVec(8), H.actionComplete = e.readBoolean(), H.action = e.readBits(3), this.planes.push(H)
                            }
                        if (0 != (a & j.AirstrikeZones))
                            for (var U = e.readUint8(), W = 0; W < U; W++) {
                                var G = {};
                                G.pos = e.readVec(0, 0, 1024, 1024, 12), G.rad = e.readFloat(0, C.AirstrikeZoneMaxRad, 8), G.duration = e.readFloat(0, C.AirstrikeZoneMaxDuration, 8), this.airstrikeZones.push(G)
                            }
                        if (0 != (a & j.MapIndicators)) {
                            for (var X = e.readUint8(), K = 0; K < X; K++) {
                                var Z = {};
                                Z.id = e.readBits(4), Z.dead = e.readBoolean(), Z.equipped = e.readBoolean(), Z.type = e.readGameType(), Z.pos = e.readVec(0, 0, 1024, 1024, 16), this.mapIndicators.push(Z)
                            }
                            e.readAlignToNextByte()
                        }
                        0 != (a & j.KillLeader) && (this.killLeaderId = e.readUint16(), this.killLeaderKills = e.readUint8(), this.killLeaderDirty = !0), this.ack = e.readUint8()
                    }
                }]), e
            }(),
            H = function () {
                function e() {
                    r(this, e), this.itemSourceType = "", this.mapSourceType = "", this.damageType = 0, this.targetId = 0, this.killerId = 0, this.killCreditId = 0, this.killerKills = 0, this.downed = !1, this.killed = !1
                }
                return w(e, [{
                    key: "deserialize",
                    value: function (e) {
                        this.damageType = e.readUint8(), this.itemSourceType = e.readGameType(), this.mapSourceType = e.readMapType(), this.targetId = e.readUint16(), this.killerId = e.readUint16(), this.killCreditId = e.readUint16(), this.killerKills = e.readUint8(), this.downed = e.readBoolean(), this.killed = e.readBoolean(), e.readAlignToNextByte()
                    }
                }]), e
            }(),
            V = function () {
                function e() {
                    r(this, e), this.playerId = 0, this.playerStats = {}
                }
                return w(e, [{
                    key: "deserialize",
                    value: function (e) {
                        var t = {};
                        t.playerId = e.readUint16(), t.timeAlive = e.readUint16(), t.kills = e.readUint8(), t.dead = e.readUint8(), t.damageDealt = e.readUint16(), t.damageTaken = e.readUint16(), this.playerStats = t
                    }
                }]), e
            }(),
            U = function () {
                function e() {
                    r(this, e), this.teamId = 0, this.teamRank = 0, this.gameOver = !1, this.winningTeamId = 0, this.playerStats = []
                }
                return w(e, [{
                    key: "deserialize",
                    value: function (e) {
                        this.teamId = e.readUint8(), this.teamRank = e.readUint8(), this.gameOver = e.readUint8(), this.winningTeamId = e.readUint8();
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var r = new V;
                            r.deserialize(e), this.playerStats.push(r.playerStats)
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
            G = function () {
                function e() {
                    r(this, e), this.type = 0, this.item = "", this.count = 0
                }
                return w(e, [{
                    key: "deserialize",
                    value: function (e) {
                        this.type = e.readUint8(), this.item = e.readGameType(), this.count = e.readUint8(), e.readBits(6)
                    }
                }]), e
            }(),
            X = function () {
                function e() {
                    r(this, e), this.specBegin = !1, this.specNext = !1, this.specPrev = !1, this.specForce = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function (e) {
                        e.writeBoolean(this.specBegin), e.writeBoolean(this.specNext), e.writeBoolean(this.specPrev), e.writeBoolean(this.specForce), e.writeBits(0, 4)
                    }
                }]), e
            }(),
            K = function () {
                function e() {
                    r(this, e), this.playerId = 0, this.killerId = 0, this.role = "", this.assigned = !1, this.killed = !1
                }
                return w(e, [{
                    key: "deserialize",
                    value: function (e) {
                        this.playerId = e.readUint16(), this.killerId = e.readUint16(), this.role = e.readGameType(), this.assigned = e.readBoolean(), this.killed = e.readBoolean(), e.readAlignToNextByte()
                    }
                }]), e
            }(),
            Z = function () {
                function e() {
                    r(this, e), this.blocked = !1, this.prerollLoaded = !1, this.prerollFreestar = !1, this.prerollAIP = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function (e) {
                        e.writeBoolean(this.blocked), e.writeBoolean(this.prerollLoaded), e.writeBoolean(this.prerollFreestar), e.writeBoolean(this.prerollAIP), e.writeBits(0, 4)
                    }
                }]), e
            }(),
            Y = function () {
                function e() {
                    r(this, e), this.emotes = [], this.custom = !1
                }
                return w(e, [{
                    key: "serialize",
                    value: function (e) {
                        for (var t = 0; t < _.EmoteSlot.Count; t++) e.writeGameType(this.emotes[t]);
                        e.writeUint8(this.custom), e.writeAlignToNextByte()
                    }
                }]), e
            }(),
            J = function () {
                function e() {
                    r(this, e), this.data = ""
                }
                return w(e, [{
                    key: "serialize",
                    value: function (e) {
                        e.writeString(this.data)
                    }
                }, {
                    key: "deserialize",
                    value: function (e) {
                        this.data = e.readString()
                    }
                }]), e
            }(),
            Q = function () {
                function e() {
                    r(this, e), this.teamAliveCounts = []
                }
                return w(e, [{
                    key: "serialize",
                    value: function (e) {
                        var t = this.teamAliveCounts.length;
                        e.writeUint8(t);
                        for (var a = 0; a < t; a++) e.writeUint8(this.teamAliveCounts[a])
                    }
                }, {
                    key: "deserialize",
                    value: function (e) {
                        for (var t = e.readUint8(), a = 0; a < t; a++) {
                            var r = e.readUint8();
                            this.teamAliveCounts.push(r)
                        }
                    }
                }]), e
            }(),
            $ = function () {
                function e() {
                    r(this, e)
                }
                return w(e, [{
                    key: "serialize",
                    value: function (e) {}
                }, {
                    key: "deserialize",
                    value: function (e) {}
                }]), e
            }();
        e.exports = {
            BitStream: I.BitStream,
            Constants: C,
            getPlayerStatusUpdateRate: o,
            MsgStream: M,
            Msg: A,
            JoinMsg: O,
            DisconnectMsg: E,
            InputMsg: D,
            EditMsg: B,
            DropItemMsg: L,
            JoinedMsg: q,
            UpdateMsg: N,
            MapMsg: F,
            KillMsg: H,
            PlayerStatsMsg: V,
            GameOverMsg: U,
            PickupMsgType: W,
            PickupMsg: G,
            SpectateMsg: X,
            EmoteMsg: R,
            RoleAnnouncementMsg: K,
            AdStatusMsg: Z,
            LoadoutMsg: Y,
            StatsMsg: J,
            UpdatePassMsg: $,
            AliveCountsMsg: Q
        }
    },
