// 07_18.js
// pool Oe
// alloc: func
    "753d6e4b": function(e, t, a) {
        "use strict";

        function i(e) {
            o(void 0 !== e), this.creator = {
                type: e
            }, this.Oe = [], this.activeCount = 0
        }

        function r(e) {
            this.idToObj = {}, this.types = {}, this.seenCount = 0
        }
        var o = a("0e566746"),
            n = a("f398b7c7");
        i.prototype = {
            alloc: function() {
                for (var e = null, t = 0; t < this.Oe.length; t++)
                    if (!this.Oe[t].active) {
                        e = this.Oe[t];
                        break
                    }
                return e || (e = new this.creator.type, this.Oe.push(e)), e.active = !0, e.o(), this.activeCount++, e
            },
            free: function(e) {
                if (e.n(), e.active = !1, this.activeCount--, this.Oe.length > 128 && this.activeCount < this.Oe.length / 2) {
                    for (var t = [], a = 0; a < this.Oe.length; a++) this.Oe[a].active && t.push(this.Oe[a]);
                    this.Oe = t
                }
            },
            m: function() {
                return this.Oe
            }
