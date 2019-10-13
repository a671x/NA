// 10_08.js
// pool Be
// alloc: func
    "753d6e4b": function(e, t, a) {
        "use strict";

        function r(e) {
            o(void 0 !== e), this.creator = {
                type: e
            }, this.Be = [], this.activeCount = 0
        }

        function i(e) {
            this.idToObj = {}, this.types = {}, this.seenCount = 0
        }
        var o = a("0e566746"),
            s = a("f398b7c7");
        r.prototype = {
            alloc: function() {
                for (var e = null, t = 0; t < this.Be.length; t++)
                    if (!this.Be[t].active) {
                        e = this.Be[t];
                        break
                    }
                return e || (e = new this.creator.type, this.Be.push(e)), e.active = !0, e.o(), this.activeCount++, e
            },
            free: function(e) {
                if (e.n(), e.active = !1, this.activeCount--, this.Be.length > 128 && this.activeCount < this.Be.length / 2) {
                    for (var t = [], a = 0; a < this.Be.length; a++) this.Be[a].active && t.push(this.Be[a]);
                    this.Be = t
                }
            },
            p: function() {
                return this.Be
            }
        }, i.prototype = {
            registerType: function(e, t) {
                this.types[e] = t
            },
