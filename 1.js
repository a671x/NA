    "753d6e4b": function (e, t, a) {
        "use strict";

        function r(e) {
            o(void 0 !== e), this.creator = {
                type: e
            }, this.mt = [], this.activeCount = 0
        }

        function i(e) {
            this.idToObj = {}, this.types = {}, this.seenCount = 0
        }
        var o = a("0e566746"),
            s = a("f398b7c7");
        r.prototype = {
            alloc: function () {
                for (var e = null, t = 0; t < this.mt.length; t++)
                    if (!this.mt[t].active) {
                        e = this.mt[t];
                        break
                    }
                return e || (e = new this.creator.type, this.mt.push(e)), e.active = !0, e.o(), this.activeCount++, e
            },
            free: function (e) {
                if (e.n(), e.active = !1, this.activeCount--, this.mt.length > 128 && this.activeCount < this.mt.length / 2) {
                    for (var t = [], a = 0; a < this.mt.length; a++) this.mt[a].active && t.push(this.mt[a]);
                    this.mt = t
                }
            },
            p: function () {
                return this.mt
            }
        }, i.prototype = {
            registerType: function (e, t) {
                this.types[e] = t
            },
            getObjById: function (e) {
                return this.idToObj[e]
            },
            getTypeById: function (e, t) {
                var a = this.getObjById(e);
                if (!a) {
                    var r = {
                        instId: s.instanceId,
                        id: e,
                        ids: Object.keys(this.idToObj),
                        stream: t._view._view
                    };
                    return s.logError("getTypeById" + JSON.stringify(r)), s.storeGeneric("objectPoolErr", "getTypeById"), 0
                }
                return a.__type
            },
            updateObjFull: function (e, t, a, r) {
                var i = this.getObjById(t),
                    o = !1;
                return void 0 === i && (i = this.types[e].alloc(), i.__id = t, i.__type = e, this.idToObj[t] = i, this.seenCount++, o = !0), i.c(a, !0, o, r), i
            },
            updateObjPart: function (e, t, a) {
                var r = this.getObjById(e);
                r ? r.c(t, !1, !1, a) : (console.log("updateObjPart, missing object", e), s.storeGeneric("objectPoolErr", "updateObjPart"))
            },
            deleteObj: function (e) {
                var t = this.getObjById(e);
                void 0 === t ? (console.log("deleteObj, missing object", e), s.storeGeneric("objectPoolErr", "deleteObj")) : (this.types[t.__type].free(t), delete this.idToObj[e])
            }
        }, e.exports = {
            Pool: r,
            Creator: i
        }
    },
