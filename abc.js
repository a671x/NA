    be22c643: function(e, t, a) {
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
            o = (a("989ad62a"), a("34e32c48")),
            n = a("6b42806d"),
            s = a("10899aea"),
            l = a("7b5bbf6e"),
            c = a("c2a798c8"),
            m = function() {
                function e(t, a, r, m, p) {
                    i(this, e), this.spline = new l(t, r), this.waterWidth = a, this.shoreWidth = s.clamp(.75 * a, 4, 8), this.looped = r, this.center = c.create(0, 0);
                    for (var d = 0; d < this.spline.points.length; d++) this.center = c.add(this.center, this.spline.points[d]);
                    this.center = c.div(this.center, this.spline.points.length);
                    for (var h = 0, u = 0; u < this.spline.points.length; u++) h += c.length(c.sub(this.spline.points[u], this.center));
                    h /= this.spline.points.length;
                    var g = c.mul(c.sub(p.max, p.min), .5),
                        y = c.add(p.min, g);
                    this.waterPoly = [], this.shorePoly = [], this.waterWidths = [], this.shoreWidths = [];
                    for (var w = 0; w < t.length; w++) {
                        var x = t[w],
                            f = this.spline.getNormal(w / (t.length - 1)),
                            b = !1;
                        if (!this.looped && (0 == w || w == t.length - 1)) {
                            var _ = c.sub(x, y),
                                S = c.create(0, 0),
                                k = c.create(1, 0);
                            if (Math.abs(_.x) > Math.abs(_.y) ? (S = c.create(_.x > 0 ? p.max.x : p.min.x, x.y), k = c.create(_.x > 0 ? 1 : -1, 0)) : (S = c.create(x.x, _.y > 0 ? p.max.y : p.min.y), k = c.create(0, _.y > 0 ? 1 : -1)), c.lengthSqr(c.sub(S, x)) < 1) {
                                var v = c.perp(k);
                                c.dot(f, v) < 0 && (v = c.neg(v)), f = v, b = !0
                            }
                        }
                        var z = this.waterWidth;
                        if (!this.looped) {
                            var M = t.length,
                                T = 2 * (Math.max(1 - w / M, w / M) - .5);
                            z = (1 + 1.5 * Math.pow(T, 3)) * this.waterWidth
                        }
                        this.waterWidths.push(z);
                        for (var P = this.shoreWidth, I = null, C = 0; C < m.length; C++) {
                            var A = m[C],
                                E = A.spline.getClosestTtoPoint(x),
                                D = A.spline.getPos(E),
                                O = c.length(c.sub(D, x));
                            O < 2 * A.waterWidth && (P = s.max(P, A.shoreWidth)), (0 == w || w == t.length - 1) && O < 1.5 && !b && (I = A)
                        }
                        w > 0 && (P = (this.shoreWidths[w - 1] + P) / 2), this.shoreWidths.push(P), P += z;
                        var B = function(e, t, a) {
                                var i = c.add(e, t);
                                if (!s.pointInsidePolygon(i, a)) {
                                    var r = s.rayPolygonIntersect(e, t, a);
                                    if (r) return c.mul(t, r)
                                }
                                return t
                            },
                            L = void 0,
                            R = void 0,
                            F = void 0,
                            j = void 0;
                        if (this.looped) {
                            var q = c.sub(x, this.center),
                                N = c.length(q);
                            q = N > 1e-4 ? c.div(q, N) : c.create(1, 0);
                            var V = s.lerp(Math.pow(s.min(z / h, 1), .5), z, (1 - (h - z) / N) * N),
                                G = s.lerp(Math.pow(s.min(P / h, 1), .5), P, (1 - (h - P) / N) * N);
                            L = c.add(x, c.mul(q, z)), R = c.add(x, c.mul(q, -V)), F = c.add(x, c.mul(q, P)), j = c.add(x, c.mul(q, -G))
                        } else {
                            var U = c.mul(f, z),
                                H = c.mul(f, -z),
                                W = c.mul(f, P),
                                K = c.mul(f, -P);
                            I && (U = B(x, U, I.waterPoly), H = B(x, H, I.waterPoly), W = B(x, W, I.shorePoly), K = B(x, K, I.shorePoly)), L = c.add(x, U), R = c.add(x, H), F = c.add(x, W), j = c.add(x, K)
                        }
                        L = o.clampPosToAabb(L, p), R = o.clampPosToAabb(R, p), F = o.clampPosToAabb(F, p), j = o.clampPosToAabb(j, p), this.waterPoly.splice(w, 0, L), this.waterPoly.splice(this.waterPoly.length - w, 0, R), this.shorePoly.splice(w, 0, F), this.shorePoly.splice(this.shorePoly.length - w, 0, j)
                    }
                    for (var Z = c.create(Number.MAX_VALUE, Number.MAX_VALUE), X = c.create(-Number.MAX_VALUE, -Number.MAX_VALUE), Y = 0; Y < this.shorePoly.length; Y++) Z = c.minElems(Z, this.shorePoly[Y]), X = c.maxElems(X, this.shorePoly[Y]);
                    this.aabb = n.createAabb(Z, X, 0)
                }
                return r(e, [{
                    key: "distanceToShore",
                    value: function(e) {
                        var t = this.spline.getClosestTtoPoint(e),
                            a = c.length(c.sub(e, this.spline.getPos(t)));
                        return s.max(this.waterWidth - a, 0)
                    }
                }, {
                    key: "getWaterWidth",
                    value: function(e) {
                        var t = this.spline.points.length,
                            a = s.clamp(Math.floor(e * t), 0, t);
                        return this.waterWidths[a]
                    }
                }]), e
            }();
        e.exports = m
    },
    c2a798c8: function(e, t, a) {
        "use strict";

        function i(e, t) {
            return e < t ? e : t
        }

        function r(e, t) {
            return e > t ? e : t
        }
        var o = {
            create: function(e, t) {
                return {
                    x: e,
                    y: void 0 !== t ? t : e
                }
            },
            copy: function(e) {
                return {
                    x: e.x,
                    y: e.y
                }
            },
            set: function(e, t) {
                e.x = t.x, e.y = t.y
            },
            add: function(e, t) {
                return {
                    x: e.x + t.x,
                    y: e.y + t.y
                }
            },
            sub: function(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            },
            mul: function(e, t) {
                return {
                    x: e.x * t,
                    y: e.y * t
                }
            },
            div: function(e, t) {
                return {
                    x: e.x / t,
                    y: e.y / t
                }
            },
            neg: function(e) {
                return {
                    x: -e.x,
                    y: -e.y
                }
            },
            lengthSqr: function(e) {
                return e.x * e.x + e.y * e.y
            },
            length: function(e) {
                return Math.sqrt(o.lengthSqr(e))
            },
            normalize: function(e) {
                var t = o.length(e);
                return {
                    x: t > 1e-6 ? e.x / t : e.x,
                    y: t > 1e-6 ? e.y / t : e.y
                }
            },
            normalizeSafe: function(e, t) {
                t = t || o.create(1, 0);
                var a = o.length(e);
                return {
                    x: a > 1e-6 ? e.x / a : t.x,
                    y: a > 1e-6 ? e.y / a : t.y
                }
            },
            dot: function(e, t) {
                return e.x * t.x + e.y * t.y
            },
            perp: function(e) {
                return {
                    x: -e.y,
                    y: e.x
                }
            },
            proj: function(e, t) {
                return o.mul(t, o.dot(e, t) / o.dot(t, t))
            },
            rotate: function(e, t) {
                var a = Math.cos(t),
                    i = Math.sin(t);
                return {
                    x: e.x * a - e.y * i,
                    y: e.x * i + e.y * a
                }
            },
            mulElems: function(e, t) {
                return {
                    x: e.x * t.x,
                    y: e.y * t.y
                }
            },
            divElems: function(e, t) {
                return {
                    x: e.x / t.x,
                    y: e.y / t.y
                }
            },
            minElems: function(e, t) {
                return {
                    x: i(e.x, t.x),
                    y: i(e.y, t.y)
                }
            },
            maxElems: function(e, t) {
                return {
                    x: r(e.x, t.x),
                    y: r(e.y, t.y)
                }
            },
            randomUnit: function() {
                return o.normalizeSafe(o.create(Math.random() - .5, Math.random() - .5), o.create(1, 0))
            },
            lerp: function(e, t, a) {
                return o.add(o.mul(t, 1 - e), o.mul(a, e))
            },
            eq: function(e, t, a) {
                var i = void 0 !== a ? a : 1e-4;
                return Math.abs(e.x - t.x) <= i && Math.abs(e.y - t.y) <= i
            }
        };
        e.exports = o
    },
    c347b8dd: function(e, t, a) {
        "use strict";

        function i(e) {
            var t = m.Defs[e.type],
                a = "building" == t.type || "structure" == t.type ? 1.15 : 1,
                i = [l.transform(m.getBoundingCollider(e.type), e.pos, e.rot, e.scale * a)];
            if (void 0 !== t.bridgeLandBounds)
                for (var r = 0; r < t.bridgeLandBounds.length; r++) i.push(l.transform(t.bridgeLandBounds[r], e.pos, e.rot, e.scale));
            for (var o = 0; o < i.length; o++) d.addCollider(i[o], 65535, .1)
        }

        function r(e) {
            var t = m.Defs[e.type],
                a = "building" == t.type || "structure" == t.type ? 1.1 : 1,
                i = [l.transform(m.getBoundingCollider(e.type), e.pos, e.rot, e.scale * a)];
            if (void 0 !== t.mapObstacleBounds) {
                i = [];
                for (var r = 0; r < t.mapObstacleBounds.length; r++) i.push(l.transform(t.mapObstacleBounds[r], e.pos, e.rot, e.scale))
            }
            for (var o = 0; o < i.length; o++) d.addCollider(i[o], 255, .1)
        }

        function o(e) {
            var t = m.Defs[e.type];
            if (void 0 !== t.terrain.waterEdge) {
                var a = t.terrain.waterEdge,
                    i = l.transform(m.getBoundingCollider(e.type), e.pos, e.rot, 1.15 * e.scale),
                    r = p.add(i.min, p.mul(p.sub(i.max, i.min), .5)),
                    o = p.rotate(a.dir, e.rot),
                    n = function(e, t, a) {
                        a < 0 && (t = p.neg(t)), d.addRay(e, t, Math.abs(a), 16777215, 0)
                    };
                n(r, o, a.distMin), n(p.add(r, p.mul(p.perp(o), .5)), o, a.distMax)
            }
        }

        function n(e) {
            var t = m.Defs[e.type];
            if (void 0 !== t.terrain.bridge) {
                for (var a = t.bridgeLandBounds || [], i = 0; i < a.length; i++) {
                    var r = l.transform(a[i], e.pos, e.rot, e.scale);
                    d.addCollider(r, 16742144, 0)
                }
                for (var o = t.bridgeWaterBounds || [], n = 0; n < o.length; n++) {
                    var s = l.transform(o[n], e.pos, e.rot, e.scale);
                    d.addCollider(s, 30719, 0)
                }
                var h = c.getBridgeDims(e.type),
                    u = p.rotate(p.create(1, 0), e.rot);
                d.addRay(e.pos, u, .5 * h.length, 16711680, 0), d.addRay(e.pos, p.perp(u), .5 * h.width, 65280, 0);
                var g = c.getBridgeOverlapCollider(e.type, e.pos, e.rot, e.scale);
                d.addCollider(g, 7799039, 0)
            }
        }

        function s(e, t) {
            t = Math.floor(t);
            for (var a = 0; a < t; a++) {
                var i = e.getPos(a / t),
                    r = e.getPos((a + 1) / t);
                d.addLine(i, r, 65280, 0)
            }
        }
        var l = a("6b42806d"),
            c = a("7510cc08"),
            m = a("ceee80d9"),
            p = a("c2a798c8"),
            d = a("af8ba00f");
        e.exports = {
            renderMapBuildingBounds: i,
            renderMapObstacleBounds: r,
            renderWaterEdge: o,
            renderBridge: n,
            renderSpline: s
        }
    },
    c381ef30: function(e, t, a) {
        "use strict";

        function i() {
            if (n) {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                s.apply(this, [o].concat(t))
            }
        }

        function r() {
            console.log = i, console.log("Init system logger")
        }
        var o = "[dev]",
            n = void 0 !== function(e, t) {
                t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                    i = a.exec(t);
                if (i) return i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""
            }("debug"),
            s = console.log;
        e.exports = {
            init: r
        }
    },
    c4623452: function(e, t, a) {
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
            o = a("ce29f17f"),
            n = (a("26be8056"), [{
                region: "na",
                zone: "sfo",
                url: "na-sfo-p1.surviv.io"
            }, {
                region: "na",
                zone: "mia",
                url: "na-mia-p1.surviv.io"
            }, {
                region: "na",
                zone: "nyc",
                url: "na-nyc-p1.surviv.io"
            }, {
                region: "na",
                zone: "chi",
                url: "na-chi-p1.surviv.io"
            }, {
                region: "sa",
                zone: "sao",
                url: "sa-sao-p1.surviv.io"
            }, {
                region: "eu",
                zone: "fra",
                url: "eu-fra-p1.surviv.io"
            }, {
                region: "eu",
                zone: "waw",
                url: "eu-waw-p1.surviv.io"
            }, {
                region: "as",
                zone: "sgp",
                url: "as-sgp-p1.surviv.io"
            }, {
                region: "as",
                zone: "nrt",
                url: "as-nrt-p1.surviv.io"
            }, {
                region: "as",
                zone: "hkg",
                url: "as-hkg-p1.surviv.io"
            }, {
                region: "kr",
                zone: "sel",
                url: "kr-sel-p1.surviv.io"
            }]);
        o.prod || (n = [{
            region: "na",
            zone: "sfo",
            url: "localhost:3001"
        }]);
        var s = function() {
            function e() {
                i(this, e), this.ptcDataBuf = new ArrayBuffer(1), this.tests = n.map(function(e) {
                    return {
                        region: e.region,
                        zone: e.zone,
                        url: e.url,
                        ping: 9999,
                        active: !1,
                        complete: !1,
                        ws: null,
                        sendDelay: 0,
                        sendTime: 0,
                        sendCount: 0,
                        recvCount: 0,
                        recvCountMax: 6
                    }
                }), this.testsStarted = 0, this.testsCompleted = 0, this.printSummary = !0
            }
            return r(e, [{
                key: "start",
                value: function(e) {
                    if ("WebSocket" in window) {
                        for (var t = 0, a = 0; a < this.tests.length; a++) {
                            var i = this.tests[a];
                            !i.active && !i.complete && -1 !== e.indexOf(i.region) && (i.active = !0, this.testsStarted++, t++)
                        }
                        t > 0 && (this.printSummary = !0)
                    }
                }
            }, {
                key: "update",
                value: function(e) {
                    for (var t = this, a = 0; a < this.tests.length; a++) ! function(a) {
                        var i = t.tests[a];
                        if (!i.active) return "continue";
                        if (!i.ws) {
                            var r = "https:" == window.location.protocol ? "wss://" : "ws://",
                                o = new WebSocket(r + i.url + "/ptc");
                            o.binaryType = "arraybuffer", o.onopen = function() {}, o.onmessage = function(e) {
                                var t = (Date.now() - i.sendTime) / 1e3;
                                i.ping = Math.min(i.ping, t), i.recvCount++, i.sendDelay = .125
                            }, o.onerror = function(e) {
                                o.close()
                            }, o.onclose = function() {
                                i.active = !1, i.complete = !0, i.ws = null, t.testsCompleted++
                            }, i.ws = o, i.sendDelay = 0, i.sendCount = 0, i.recvCount = 0
                        }
                        i.ws.readyState == i.ws.OPEN && (i.sendDelay -= e, i.sendCount == i.recvCount && i.sendDelay < 0 && (i.sendTime = Date.now(), i.sendCount++, i.ws.send(t.ptcDataBuf)), i.recvCount >= i.recvCountMax && i.ws.close())
                    }(a);
                    if (this.printSummary && this.isComplete()) {
                        var i = this.tests.sort(function(e, t) {
                            return e.ping - t.ping
                        });
                        console.log("Ping test results"), console.log("----------------------------------------");
                        for (var a = 0; a < i.length; a++) {
                            var r = i[a];
                            console.log("region", r.region, "zone  ", r.zone, "ping  ", r.ping)
                        }
                        this.printSummary = !1
                    }
                }
            }, {
                key: "isComplete",
                value: function() {
                    return this.testsCompleted == this.testsStarted && this.testsStarted > 0
                }
            }, {
                key: "getRegionList",
                value: function() {
                    for (var e = [], t = 0; t < n.length; t++) {
                        var a = n[t].region; - 1 === e.indexOf(a) && e.push(a)
                    }
                    return e
                }
            }, {
                key: "getRegion",
                value: function() {
                    return this.tests.sort(function(e, t) {
                        return e.ping - t.ping
                    }), this.tests[0].region
                }
            }, {
                key: "getZones",
                value: function(e) {
                    for (var t = this.tests.sort(function(e, t) {
                            return e.ping - t.ping
                        }), a = [], i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.region == e && a.push(r.zone)
                    }
                    return a
                }
            }]), e
        }();
        e.exports = s
    },
    c60b5e9f: function(e, t, a) {
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

        function n(e, t, a) {
            var i = t - e,
                r = i * a;
            return Math.abs(r) < .01 ? i : r
        }

        function s() {
            var e = new d.Graphics;
            return e.position.set(0, 0), e.scale.set(1, 1), e.__zOrd = 0, e.__zIdx = 0, e
        }

        function l(e, t, a, i, r) {
            e.moveTo(t, a), e.lineTo(t, a + r), e.lineTo(t + i, a + r), e.lineTo(t + i, a), e.lineTo(t, a), e.closePath()
        }

        function c(e, t) {
            this.game = e, this.canvasMode = t, this.zIdx = 0, this.layer = 0, this.layerAlpha = 0, this.groundAlpha = 0, this.underground = !1, this.layers = [];
            for (var a = 0; a < 4; a++) this.layers.push(new g("layer_" + a));
            this.ground = new d.Graphics, this.ground.alpha = 0, this.layerMask = s(), this.debugLayerMask = null, this.layerMaskDirty = !0, this.layerMaskActive = !1
        }
        var m = function() {
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
            p = function e(t, a, i) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, a);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, a, i)
                }
                if ("value" in r) return r.value;
                var n = r.get;
                return void 0 !== n ? n.call(i) : void 0
            },
            d = (a("0e566746"), a("8b1dfb45")),
            h = (a("6b42806d"), a("ceee80d9"), a("10899aea"), a("1901e2d9"), a("c2a798c8")),
            u = a("f398b7c7"),
            g = function(e) {
                function t(e) {
                    i(this, t);
                    var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return a.debugName = e || "", a.dirty = !0, a
                }
                return o(t, e), m(t, [{
                    key: "addSortedChild",
                    value: function(e) {
                        p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addChild", this).call(this, e), this.dirty = !0
                    }
                }, {
                    key: "checkSort",
                    value: function() {
                        return !!this.dirty && (this.children.sort(function(e, t) {
                            return e.__zOrd == t.__zOrd ? e.__zIdx - t.__zIdx : e.__zOrd - t.__zOrd
                        }), this.dirty = !1, !0)
                    }
                }]), t
            }(d.Container);
        c.prototype = {
            n: function() {
                this.layerMask.parent && this.layerMask.parent.removeChild(this.layerMark), this.layerMask.destroy(!0)
            },
            addPIXIObj: function(e, t, a, i) {
                if (!e.transform) {
                    var r = new Error,
                        o = JSON.stringify({
                            type: "addChild",
                            stack: r.stack,
                            id: u.instanceId,
                            browser: navigator.userAgent,
                            playing: this.game.playing,
                            gameOver: this.game.gameOver,
                            spectating: this.game.spectating,
                            time: this.game.playingTicker,
                            mode: this.game.teamMode,
                            video: this.game.adManager.isPlayingVideo,
                            layer: t,
                            zOrd: a,
                            zIdx: i
                        });
                    u.logError(o)
                }
                void 0 === e.__layerIdx && (e.__layerIdx = -1, e.__zOrd = -1, e.__zIdx = -1);
                var n = t;
                2 & t && (n = a >= 100 ? 3 : 2), (e.parent != this.layers[n] || e.__zOrd != a || void 0 !== i && e.__zIdx != i) && (e.__layerIdx = n, e.__zOrd = a, e.__zIdx = void 0 !== i ? i : this.zIdx++, this.layers[n].addSortedChild(e))
            },
            setActiveLayer: function(e) {
                this.layer = e
            },
            setUnderground: function(e) {
                this.underground = e
            },
            resize: function(e, t) {
                var a = e.mapLoaded ? e.getMapDef().biome.colors.underground : 1772803;
                this.ground.clear(), this.ground.beginFill(a), this.ground.drawRect(0, 0, t.screenWidth, t.screenHeight), this.ground.endFill(), this.layerMaskDirty = !0
            },
            redrawLayerMask: function(e, t) {
                var a = this.layerMask;
                if (this.canvasMode) {
                    if (a.clear(), this.layerMaskActive) {
                        a.beginFill(16777215, 1), a.drawRect(0, 0, e.screenWidth, e.screenHeight);
                        for (var i = t.zt.m(), r = 0; r < i.length; r++) {
                            var o = i[r];
                            if (o.active)
                                for (var n = 0; n < o.mask.length; n++) {
                                    var s = o.mask[n],
                                        c = h.mul(h.sub(s.max, s.min), .5),
                                        m = h.add(s.min, c),
                                        p = e.pointToScreen(h.sub(m, c)),
                                        d = e.pointToScreen(h.add(m, c));
                                    a.drawRect(p.x, p.y, d.x - p.x, d.y - p.y)
                                }
                        }
                        a.endFill()
                    }
                } else {
                    if (this.layerMaskDirty) {
                        this.layerMaskDirty = !1, a.clear(), a.beginFill(16777215, 1), l(a, 0, 0, 1024, 1024);
                        for (var u = t.zt.m(), g = 0; g < u.length; g++) {
                            var y = u[g];
                            if (y.active)
                                for (var w = 0; w < y.mask.length; w++) {
                                    var x = y.mask[w],
                                        f = h.mul(h.sub(x.max, x.min), .5),
                                        b = h.add(x.min, f),
                                        _ = b.x - f.x,
                                        S = b.y - f.y,
                                        k = 2 * f.x,
                                        v = 2 * f.y;
                                    l(a, _, S, k, v), a.addHole()
                                }
                        }
                        a.endFill()
                    }
                    var z = e.pointToScreen(h.create(0, 0)),
                        M = (e.pointToScreen(h.create(1, 0)), e.scaleToScreen(1));
                    a.position.set(z.x, z.y), a.scale.set(M, -M)
                }
            },
            redrawDebugLayerMask: function(e, t) {
                var a = this.debugLayerMask;
                a.clear(), a.beginFill(16711935, 1);
                for (var i = t.zt.m(), r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (o.active)
                        for (var n = 0; n < o.mask.length; n++) {
                            var s = o.mask[n],
                                c = h.mul(h.sub(s.max, s.min), .5),
                                m = h.add(s.min, c),
                                p = m.x - c.x,
                                d = m.y - c.y,
                                u = 2 * c.x,
                                g = 2 * c.y;
                            l(a, p, d, u, g)
                        }
                }
                a.endFill();
                var y = e.pointToScreen(h.create(0, 0)),
                    w = (e.pointToScreen(h.create(1, 0)), e.scaleToScreen(1));
                a.position.set(y.x, y.y), a.scale.set(w, -w)
            },
            c: function(e, t, a, i) {
                var r = this.layer > 0 ? 1 : 0;
                this.layerAlpha += n(this.layerAlpha, r, 12 * e);
                var o = 1 == this.layer && this.underground ? 1 : 0;
                this.groundAlpha += n(this.groundAlpha, o, 12 * e), this.layers[0].alpha = 1, this.layers[1].alpha = this.layerAlpha, this.layers[2].alpha = 1, this.layers[3].alpha = 1, this.ground.alpha = this.groundAlpha, this.layers[0].visible = this.groundAlpha < 1, this.layers[1].visible = this.layerAlpha > 0, this.ground.visible = this.groundAlpha > 0, this.redrawLayerMask(t, a);
                var s = 0 == this.layer;
                s && !this.layerMaskActive ? (this.layers[2].mask = this.layerMask, this.layers[2].addChild(this.layerMask), this.layerMaskActive = !0) : !s && this.layerMaskActive && (this.layers[2].mask = null, this.layers[2].removeChild(this.layerMask), this.layerMaskActive = !1);
                for (var l = 0, c = 0; c < this.layers.length; c++) this.layers[c].checkSort() && l++
            }
        }, e.exports = {
            RenderGroup: g,
            Ze: c
        }
    },
    c73dee75: function(e, t, a) {
        "use strict";

        function i(e, t, a, i) {
            var r = Math.atan2(i.y, i.x);
            return {
                p0: h.add(a, h.rotate(e, r)),
                p1: h.add(a, h.rotate(t, r))
            }
        }

        function r(e, t, a, i, r, o, n) {
            for (var s = Math.floor(d.random(1, 2)), l = h.mul(i, 9.5), c = 0; c < s; c++) l = h.rotate(l, (Math.random() - .5) * Math.PI / 3), o.addParticle(e, r, a, l);
            n.playGroup(t, {
                channel: "hits",
                soundPos: a,
                layer: r,
                muffled: !0
            })
        }

        function o() {
            this.bullets = [], this.tracerColors = {}
        }
        var n = a("8b1dfb45"),
            s = a("34e32c48"),
            l = a("6b42806d"),
            c = a("989ad62a"),
            m = (a("8649e148"), a("ceee80d9")),
            p = a("10899aea"),
            d = a("1901e2d9"),
            h = a("c2a798c8");
        a("af8ba00f"), o.prototype = {
            onMapLoad: function(e) {
                this.tracerColors = d.mergeDeep({}, c.tracerColors, e.getMapDef().biome.tracerColors)
            },
            addBullet: function(e, t, a) {
                for (var i = null, r = 0; r < this.bullets.length; r++)
                    if (!this.bullets[r].alive && !this.bullets[r].collided) {
                        i = this.bullets[r];
                        break
                    }
                i || (i = {}, i.alive = !1, i.container = new n.Container, i.container.pivot.set(14.5, 0), i.container.visible = !1, i.bulletTrail = n.Sprite.fromImage("player-bullet-trail-02.img"), i.bulletTrail.anchor.set(.5, .5), i.container.addChild(i.bulletTrail), this.bullets.push(i));
                var o = c.bullets[e.bulletType],
                    s = 1 + e.varianceT * o.variance,
                    l = p.remap(e.distAdjIdx, 0, 16, -1, 1),
                    m = o.distance / Math.pow(c.bullet.reflectDistDecay, e.reflectCount);
                e.clipDistance && (m = e.distance), i.alive = !0, i.isNew = !0, i.collided = !1, i.scale = 1, i.playerId = e.playerId, i.startPos = h.copy(e.pos), i.pos = h.copy(e.pos), i.dir = h.copy(e.dir), i.layer = e.layer, i.speed = o.speed * s, i.distance = m * s + l, i.damageSelf = o.shrapnel || e.reflectCount > 0, i.reflectCount = e.reflectCount, i.reflectObjId = e.reflectObjId, i.whizHeard = !1;
                var d = Math.atan2(i.dir.x, i.dir.y);
                i.container.rotation = d - Math.PI / 2, i.layer = e.layer;
                var u = t.ve(i.playerId);
                u && 2 & u.layer && (i.layer |= 2);
                var g = this.tracerColors[o.tracerColor],
                    y = g.regular;
                u && u.isOnBrightSurface && (y = g.saturated), i.bulletTrail.scale.set(.8, o.tracerWidth), i.tracerLength = o.tracerLength, i.bulletTrail.tint = y, i.suppressed = !!o.suppressed, i.tracerAlphaRate = g.alphaRate, i.tracerAlphaMin = g.alphaMin, i.bulletTrail.alpha = 1, i.reflectCount > 0 && (i.bulletTrail.alpha *= .5), i.container.visible = !0, a.addPIXIObj(i.container, i.layer, 20)
            },
            c: function(e, t, a, o, n, u, g, y) {
                for (var w = t.Se.m(), x = 0; x < this.bullets.length; x++) {
                    var f = this.bullets[x];
                    if (f.collided && (f.scale = p.max(f.scale - 6 * e, 0), f.scale <= 0 && (f.collided = !1, f.container.visible = !1)), f.alive) {
                        var b = f.distance - h.length(h.sub(f.startPos, f.pos)),
                            _ = p.min(b, e * f.speed),
                            S = h.copy(f.pos);
                        if (f.pos = h.add(f.pos, h.mul(f.dir, _)), !n.ie.dead && d.sameAudioLayer(n.layer, f.layer) && h.length(h.sub(o.pos, f.pos)) < 7.5 && !f.whizHeard && f.playerId != n.__id && (y.playGroup("bullet_whiz", {
                                soundPos: f.pos,
                                fallOff: 4
                            }), f.whizHeard = !0), f.tracerAlphaRate && f.suppressed) {
                            var k = f.tracerAlphaRate;
                            f.bulletTrail.alpha = p.max(f.tracerAlphaMin, f.bulletTrail.alpha * k)
                        }
                        for (var v = [], z = a.pe.m(), M = 0; M < z.length; M++) {
                            var T = z[M];
                            if (!(!T.active || T.dead || !d.sameLayer(T.layer, f.layer) || T.height < c.bullet.height || f.reflectCount > 0 && T.__id == f.reflectObjId)) {
                                var P = l.intersectSegment(T.collider, S, f.pos);
                                P && v.push({
                                    type: "obstacle",
                                    obstacleType: T.type,
                                    collidable: T.collidable,
                                    point: P.point,
                                    normal: P.normal
                                })
                            }
                        }
                        for (var I = 0; I < w.length; I++) {
                            var C = w[I];
                            if (C.active && !C.ie.dead && (d.sameLayer(C.ie.layer, f.layer) || 2 & C.ie.layer) && (C.__id != f.playerId || f.damageSelf)) {
                                var A = null;
                                if (C.hasActivePan()) {
                                    var E = C,
                                        D = E.getPanSegment(),
                                        O = i(D.p0, D.p1, E.posOld, E.dirOld),
                                        B = i(D.p0, D.p1, E.pos, E.dir),
                                        L = s.intersectSegmentSegment(S, f.pos, O.p0, O.p1),
                                        R = s.intersectSegmentSegment(S, f.pos, B.p0, B.p1),
                                        F = R || L;
                                    if (F) {
                                        var j = h.normalize(h.perp(h.sub(B.p1, B.p0)));
                                        A = {
                                            point: F.point,
                                            normal: j
                                        }
                                    }
                                }
                                var q = s.intersectSegmentCircle(S, f.pos, C.pos, C.rad);
                                if (q && (!A || h.length(h.sub(q.point, f.startPos)) < h.length(h.sub(A.point, f.startPos))) ? v.push({
                                        type: "player",
                                        player: C,
                                        point: q.point,
                                        normal: q.normal
                                    }) : A && v.push({
                                        type: "pan",
                                        collidable: !0,
                                        point: A.point,
                                        normal: A.normal,
                                        layer: C.layer
                                    }), q || A) break
                            }
                        }
                        for (var N = 0; N < v.length; N++) {
                            var V = v[N];
                            V.dist = h.length(h.sub(V.point, S))
                        }
                        v.sort(function(e, t) {
                            return e.dist - t.dist
                        });
                        var G = !1,
                            U = t.ve(f.playerId);
                        U && (U.ie.dead || U.ie.downed) && (G = !0);
                        for (var H = !1, W = 0; W < v.length; W++) {
                            var K = v[W];
                            if ("obstacle" == K.type) {
                                var Z = m.Defs[K.obstacleType];
                                r(Z.hitParticle, Z.sound.bullet, K.point, K.normal, f.layer, g, y), H = K.collidable
                            } else if ("player" == K.type) {
                                if (!G) {
                                    var X = K.player,
                                        Y = h.sub(K.point, X.pos);
                                    Y.y *= -1, g.addParticle("bloodSplat", X.layer, h.mul(Y, o.ppu), h.create(0, 0), 1, 1, X.container), y.playGroup("player_bullet_hit", {
                                        soundPos: X.pos,
                                        fallOff: 1,
                                        layer: X.layer,
                                        muffled: !0
                                    })
                                }
                                H = !0
                            } else "pan" == K.type && (r("barrelChip", c.items.pan.sound.bullet, K.point, K.normal, K.layer, g, y), H = !0);
                            if (H) {
                                f.pos = K.point;
                                break
                            }
                        }
                        if (!(2 & f.layer)) {
                            for (var J = a.zt.m(), Q = f.layer, $ = 0; $ < J.length; $++) {
                                var ee = J[$];
                                if (ee.active) {
                                    for (var te = !1, ae = !1, ie = 0; ie < ee.stairs.length; ie++) {
                                        var re = ee.stairs[ie];
                                        if (!re.lootOnly && l.intersectSegment(re.collision, f.pos, S)) {
                                            te = !0;
                                            break
                                        }
                                    }
                                    for (var oe = 0; oe < ee.mask.length; oe++)
                                        if (l.intersectSegment(ee.mask[oe], f.pos, S)) {
                                            ae = !0;
                                            break
                                        }
                                    te && !ae && (Q |= 2)
                                }
                            }
                            Q != f.layer && (f.layer = Q, u.addPIXIObj(f.container, f.layer, 20))
                        }(H || p.eqAbs(b, _)) && (f.collided = !0, f.alive = !1), f.isNew = !1
                    }
                }
            },
            createBulletHit: function(e, t, a) {
                var i = e.ve(t);
                i && a.playGroup("player_bullet_hit", {
                    soundPos: i.pos,
                    fallOff: 1,
                    layer: i.layer,
                    muffled: !0
                })
            },
            render: function(e, t) {
                for (var a = (e.pixels(1), 0); a < this.bullets.length; a++) {
                    var i = this.bullets[a];
                    if (i.alive || i.collided) {
                        var r = h.length(h.sub(i.pos, i.startPos)),
                            o = e.pointToScreen(i.pos);
                        i.container.position.set(o.x, o.y);
                        var n = e.pixels(1),
                            s = p.min(15 * i.tracerLength, r / 2);
                        i.container.scale.set(n * s * i.scale, n)
                    }
                }
            }
        }, e.exports = {
            tt: o,
            playHitFx: r
        }
    },
    c99e6613: function(e, t, a) {
        "use strict";

        function i() {
            this.nameInput = r("#player-name-input-solo"), this.serverSelect = r("#server-select-main"), this.playMode0Btn = r("#btn-start-mode-0"), this.playMode1Btn = r("#btn-start-mode-1"), this.playMode2Btn = r("#btn-start-mode-2"), this.muteBtns = r(".btn-sound-toggle"), this.aimLineBtn = r("#btn-game-aim-line"), this.masterSliders = r(".sl-master-volume"), this.soundSliders = r(".sl-sound-volume"), this.musicSliders = r(".sl-music-volume"), this.serverWarning = r("#server-warning"), this.languageSelect = r(".language-select"), this.startMenuWrapper = r("#start-menu-wrapper"), this.gameAreaWrapper = r("#game-area-wrapper"), this.config = new u, this.config.addModifiedListener(this.onConfigModified.bind(this)), this.localization = new S, this.adManager = new m.AdManager(this.config), this.account = new c(this.config, this.localization), this.loadoutMenu = new _(this.config), this.pingTest = new v, this.audioManager = new h, this.ambience = new d, this.teamMenu = new T(this.config, this.pingTest, this.localization, this.joinGame.bind(this), this.audioManager), this.teamMenu.onLeave = this.onTeamMenuLeave.bind(this), this.pixi = null, this.textureManager = null, this.input = null, this.inputBinds = null, this.inputBindUi = null, this.game = null, this.loadComplete = !1, this.initialized = !1, this.active = !1, this.contextListener = function(e) {
                e.preventDefault()
            }, this.errorMessage = "", this.playEnabled = !1, this.quickPlayPendingModeIdx = -1, this.playTimeout = 0, this.pauseTime = 0, this.wasPlayingVideo = !1, this.checkedPingTest = !1, this.systemMemory = Number.MAX_VALUE, this.siteInfo = {}, this.siteInfoLoaded = !1, this.siteInfoApplied = !1, g.webview && g.version > "1.0.0" ? this.loadWebview() : this.loadBrowser()
        }
        a("c381ef30").init();
        var r = a("8ee62bea"),
            o = a("8b1dfb45");
        o.utils.skipHello();
        var n = a("989ad62a"),
            s = a("10899aea"),
            l = a("300e2704"),
            c = a("a68e9107"),
            m = a("2d958752"),
            p = a("259eae5b"),
            d = a("0b12821e"),
            h = a("4b528868"),
            u = a("6ffe8b70"),
            g = a("ce29f17f"),
            y = (a("e5d16b4d"), a("f398b7c7")),
            w = a("9b5f96fd"),
            x = a("26be8056"),
            f = a("4b8d140f"),
            b = a("d306eab6"),
            _ = a("153d9481"),
            S = a("7d64d541"),
            k = a("484b3444"),
            v = a("c4623452"),
            z = a("d84c74f8"),
            M = a("076760a2"),
            T = a("61fc98e9"),
            P = a("d3da5587"),
            I = a("f4d48896");
        i.prototype = {
                loadBrowser: function() {
                    var e = this;
                    this.config.load(function() {
                        e.requestSiteInfo(), e.startPingTest(), e.loadComplete = !0
                    })
                },
                loadWebview: function() {
                    var e = this;
                    document.addEventListener("deviceready", function() {
                            document.addEventListener("pause", function() {
                                e.onPause()
                            }), document.addEventListener("resume", function() {
                                e.onResume()
                            }), r("#news-block h3").html("What's New!!");
                            var t = [],
                                a = function(e) {
                                    t.push(e)
                                },
                                i = function(a) {
                                    var i = t.indexOf(a); - 1 !== i && t.splice(i, 1), 0 == t.length && (e.loadComplete = !0)
                                };
                            a("loadConfig"), a("loadSystemInfo"), e.config.load(function() {
                                e.requestSiteInfo(), e.startPingTest(), i("loadConfig")
                            }), g.version >= "1.0.8" ? I.getSystemMemoryInfo(function(t) {
                                e.systemMemory = t.capacity || Number.MAX_VALUE, i("loadSystemInfo")
                            }) : i("loadSystemInfo")
                        }, !1),
                        function(e, t, a) {
                            var i, r = g.version >= "1.0.8" ? "cordova/" + g.version : "cordova",
                                o = r + "/" + g.os + "/cordova.js",
                                n = e.getElementsByTagName(t)[0];
                            e.getElementById(a) || (i = e.createElement(t), i.id = a, i.onload = function() {}, i.src = o, n.parentNode.insertBefore(i, n))
                        }(document, "script", "cordova-js")
                },
                o: function() {
                    var e = this;
                    if (!this.initialized) {
                        if (!this.loadComplete) return void setTimeout(function() {
                            e.o()
                        }, 10);
                        if (this.initialized = !0, this.config.teamAutoFill = !0, g.webview ? k.applyWebviewStyling(g.tablet) : g.mobile && k.applyMobileBrowserStyling(g.tablet), g.webview && g.version >= "1.0.8" && setTimeout(function() {
                                e.adManager.showBannerAd()
                            }, 0), this.adManager.init(), this.account.init(), this.localization.localizeIndex(), this.nameInput.maxLength = l.Constants.kPlayerNameMaxLen, this.playMode0Btn.on("click", function() {
                                e.tryQuickStartGame(0)
                            }), this.playMode1Btn.on("click", function() {
                                e.tryQuickStartGame(1)
                            }), this.playMode2Btn.on("click", function() {
                                e.tryQuickStartGame(2)
                            }), this.serverSelect.change(function() {
                                var t = e.serverSelect.find(":selected").val();
                                e.config.set("region", t)
                            }), r(document).on("mouseup", function(e) {
                                4 != e.which && 5 != e.which || e.preventDefault()
                            }), this.nameInput.on("blur", function(t) {
                                e.setConfigFromDOM()
                            }), this.muteBtns.on("click", function(t) {
                                e.config.set("muteAudio", !e.config.get("muteAudio"))
                            }), this.muteBtns.on("mousedown", function(e) {
                                e.stopPropagation()
                            }), r(this.masterSliders).on("mousedown", function(e) {
                                e.stopPropagation()
                            }), r(this.soundSliders).on("mousedown", function(e) {
                                e.stopPropagation()
                            }), r(this.musicSliders).on("mousedown", function(e) {
                                e.stopPropagation()
                            }), this.masterSliders.on("input", function(t) {
                                var a = r(t.target).val() / 100;
                                e.audioManager.setMasterVolume(a), e.config.set("masterVolume", a)
                            }), this.soundSliders.on("input", function(t) {
                                var a = r(t.target).val() / 100;
                                e.audioManager.setSoundVolume(a), e.config.set("soundVolume", a)
                            }), this.musicSliders.on("input", function(t) {
                                var a = r(t.target).val() / 100;
                                e.audioManager.setMusicVolume(a), e.config.set("musicVolume", a)
                            }), r(".modal-settings-item").children("input").each(function(t, a) {
                                var i = r(a);
                                i.prop("checked", e.config.get(i.prop("id")))
                            }), r(".modal-settings-item > input:checkbox").change(function(t) {
                                var a = r(t.target);
                                e.config.set(a.prop("id"), a.is(":checked"))
                            }), r(".btn-fullscreen-toggle").on("click", function() {
                                x.toggleFullScreen()
                            }), this.languageSelect.on("change", function(t) {
                                var a = t.target.value;
                                a && e.config.set("language", a)
                            }), r("#btn-create-team").on("click", function() {
                                e.tryJoinTeam(!0)
                            }), r("#btn-team-mobile-link-join").on("click", function() {
                                var t = r("#team-link-input").val().trim(),
                                    a = t.indexOf("#");
                                a >= 0 && (t = t.slice(a + 1)), t.length > 0 ? (r("#team-mobile-link").css("display", "none"), e.tryJoinTeam(!1, t)) : (r("#team-mobile-link-desc").css("display", "none"), r("#team-mobile-link-warning").css("display", "none").fadeIn(100))
                            }), r("#btn-team-leave").on("click", function() {
                                window.history && window.history.replaceState("", "", "/"), e.game && e.game.n(), e.teamMenu.leave()
                            }), "WebSocket" in window)
                            if (x.authLocation()) {
                                if ("ie" == g.browser) {
                                    var t = 'Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!';
                                    t += '<br><br>¡Usa el <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">navegador Chrome</a> para una mejor experiencia de juego!', t += '<br><br><a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">구글 크롬</a> 브라우저로이 게임을 즐겨보세요.';
                                    var a = r("#modal-notification");
                                    a.find(".modal-settings-text").html(t), a.fadeIn(200)
                                }
                            } else {
                                y.logProxy(window.location.hostname);
                                var i = r("#modal-notification");
                                i.find(".modal-settings-text").html('Please use the <a href="https://surviv.io" target="_blank">official surviv.io site</a> for a better playing experience!'), i.fadeIn(200)
                            } else {
                            y.storeGeneric("error", "no_websocket");
                            var n = r("#modal-notification");
                            n.find(".modal-settings-text").html('WebSockets are required to play.<br><br>Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!'), n.fadeIn(200)
                        }
                        if (/Android.*; wv\)/.test(navigator.userAgent) && !g.webview) {
                            var s = function(e) {
                                    return e.map(function(e) {
                                        return String.fromCharCode(e)
                                    }).join("")
                                },
                                c = document.body;
                            if (c) {
                                for (y.storeGeneric("error", "wv"), y.enabled = !1; c.firstChild;) c.removeChild(c.firstChild);
                                var m = [68, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 111, 102, 102, 105, 99, 105, 97, 108, 32, 65, 110, 100, 114, 111, 105, 100, 32, 97, 112, 112, 32, 104, 101, 114, 101, 58],
                                    p = r("<div/>", {
                                        css: {
                                            marginTop: "10%",
                                            width: "100%",
                                            textAlign: "center"
                                        }
                                    }),
                                    d = r("<div/>", {
                                        text: s(m),
                                        css: {
                                            textAlign: "center",
                                            fontSize: "24px"
                                        }
                                    }),
                                    h = [104, 116, 116, 112, 115, 58, 47, 47, 112, 108, 97, 121, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 115, 116, 111, 114, 101, 47, 97, 112, 112, 115, 47, 100, 101, 116, 97, 105, 108, 115, 63, 105, 100, 61, 105, 111, 46, 115, 117, 114, 118, 105, 118, 46, 115, 117, 114, 118, 105, 118, 95, 105, 111, 95, 109, 111, 98, 105, 108, 101],
                                    u = r("<a/>", {
                                        href: s(h),
                                        class: "btn-download-android btn-download-app btn-darken",
                                        css: {
                                            marginTop: "20px",
                                            position: "absolute",
                                            left: "50%",
                                            transform: "translateX(-50%)"
                                        }
                                    });
                                p.append(d), p.append(u), c.appendChild(p[0])
                            }
                            this.game && this.game.ws && this.game.ws.close()
                        }
                        this.account.load(), this.loadoutMenu.init(this.account), this.playEnabled = !0, this.setDOMFromConfig(), this.setAppActive(!0), this.audioManager.preloadSounds();
                        var _ = document.getElementById("cvs"),
                            S = window.devicePixelRatio > 1 ? 2 : 1;
                        "ios" == g.os && (o.settings.PRECISION_FRAGMENT = "highp");
                        var v = function(e) {
                                return new o.Application({
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                    view: _,
                                    antialias: !1,
                                    resolution: S,
                                    forceCanvas: e
                                })
                            },
                            z = null;
                        try {
                            z = v(!1)
                        } catch (e) {
                            z = v(!0), y.storeGeneric("render", "forceCanvas")
                        }
                        this.pixi = z, this.pixi.renderer.plugins.interaction.destroy(), this.pixi.ticker.add(this.update, this);
                        var T = Math.min(window.screen.width, window.screen.height),
                            I = Math.max(window.screen.width, window.screen.height);
                        T *= window.devicePixelRatio, I *= window.devicePixelRatio;
                        var C = I < 1366 && T < 768,
                            A = C || !this.config.get("highResTex") ? "low" : "high";
                        (g.mobile && !g.tablet || g.webview && this.systemMemory <= 2147483648 || this.pixi.renderer.type == o.RENDERER_TYPE.CANVAS) && (A = "low");
                        var E = x.getParameterByName("textureRes");
                        E && (A = E), P.loadStaticDomImages(), this.textureManager = new M.TextureManager(this.pixi.renderer, A), this.textureManager.loadAtlasList(["gradient", "shared", "main"]), this.input = new f._e(this.pixi.view), this.inputBinds = new b.InputBinds(this.input, this.config), this.inputBindUi = new b.InputBindUi(this.input, this.inputBinds);
                        var D = function() {
                                e.setAppActive(!1), e.ambience.onGameStart(), e.adManager.onGameStart();
                                var t = void 0 != window.menu;
                                y.storeGeneric("socketOn", t)
                            },
                            O = function(t) {
                                e.game.n(), e.errorMessage = e.localization.translate(t || ""), e.teamMenu.onGameComplete(), e.ambience.onGameStop(e.audioManager), e.setAppActive(!0), "index-invalid-protocol" == t && e.showInvalidProtocolModal()
                            };
                        if (this.game = new w.Jt(this.pixi, this.audioManager, this.localization, this.config, this.input, this.inputBinds, this.inputBindUi, this.adManager, this.ambience, this.textureManager, this.loadoutMenu, D, O), this.onResize(), this.tryJoinTeam(!1), k.init(this.inputBinds, this.inputBindUi), window.adsBlocked) {
                            var B = document.getElementById("main-med-rect-blocked");
                            B && (B.style.display = "block");
                            var L = document.getElementById("survivio_300x250_main");
                            L && (L.style.display = "none");
                            var R = document.getElementById("surviv-io_300x250");
                            R && (R.style.display = "none")
                        }
                        this.tryApplySiteInfo(), window.aiptag && (window.aiptag.gdprConsent = window.cookiesConsented, window.aiptag.consented = window.cookiesConsented)
                    }
                },
                onResize: function() {
                    g.onResize(), "ios" == g.os && ("iphonex" == g.model ? g.isLandscape ? r(".main-volume-slider").css("width", "90%") : r(".main-volume-slider").css("width", "") : window.navigator.standalone || (g.isLandscape ? (r("#start-main-center").attr("style", ""), r("#modal-customize .modal-content").attr("style", "")) : r("#modal-customize .modal-content").css({
                        transform: "translate(-50%, -50%) scale(0.45)",
                        top: "38%"
                    }))), g.tablet && (r("#featured-youtuber").remove(), r(".btn-youtube").remove()), g.touch ? r(".btn-start-fullscreen").css("display", "none") : r(".btn-start-fullscreen").css("display", "block"), r(".btn-keybind").css("display", g.mobile ? "none" : "inline-block"), this.pixi && this.pixi.renderer.resize(g.screenWidth, g.screenHeight), this.game && this.game.initialized && this.game.Et(), this.refreshUi()
                },
                onPause: function() {
                    g.webview && (this.pauseTime = Date.now(), this.audioManager.setMute(!0), "ios" == g.os && this.pixi && this.pixi.ticker.remove(this.pixi.render, this.pixi))
                },
                onResume: function() {
                    g.webview && (this.game && this.game.playing && Date.now() - this.pauseTime > 3e4 ? window.location.reload(!0) : this.audioManager.setMute(this.config.get("muteAudio")), "ios" == g.os && this.pixi && this.pixi.ticker.add(this.pixi.render, this.pixi, o.UPDATE_PRIORITY.LOW))
                },
                onUnload: function() {
                    this.teamMenu.leave()
                },
                startPingTest: function() {
                    var e = this.config.get("regionSelected") ? [this.config.get("region")] : this.pingTest.getRegionList();
                    this.pingTest.start(e)
                },
                requestSiteInfo: function() {
                    var e = this,
                        t = p.resolveUrl("/api/site_info?language=" + this.localization.getLocale());
                    r.ajax(t).done(function(t, a) {
                        e.siteInfo = t || {}, e.teamMenu.siteInfo = e.siteInfo, e.siteInfoLoaded = !0, e.tryApplySiteInfo()
                    })
                },
                tryApplySiteInfo: function() {
                    if (!this.siteInfoApplied && this.siteInfoLoaded && this.initialized) {
                        var e = this.siteInfo.pops;
                        if (e)
                            for (var t = Object.keys(e), a = 0; a < t.length; a++) {
                                var i = t[a],
                                    o = e[i],
                                    n = r("#server-opts").children('option[value="' + i + '"]');
                                n.text(n.data("label") + " [" + o + "]")
                            }
                        var s = !1,
                            l = r("#featured-streamers"),
                            c = r(".streamer-list");
                        if (!g.mobile && this.siteInfo.twitch)
                            for (var m = 0; m < this.siteInfo.twitch.length; m++) {
                                var p = this.siteInfo.twitch[m],
                                    d = r("#featured-streamer-template").clone();
                                d.attr("class", "featured-streamer streamer-tooltip").attr("id", "");
                                var h = d.find("a"),
                                    u = this.localization.translate(1 == p.viewers ? "index-viewer" : "index-viewers");
                                h.html(p.name + " <span>" + p.viewers + " " + u + "</span>"), h.css("background-image", "url(" + p.img + ")"), h.attr("href", p.url), c.append(d), s = !0
                            }
                        l.css("visibility", s ? "visible" : "hidden");
                        var y = r("#featured-youtuber"),
                            w = this.siteInfo.youtube;
                        w && r(".btn-youtuber").attr("href", this.siteInfo.youtube.link).html(this.siteInfo.youtube.name), y.css("display", w ? "block" : "none"), this.siteInfo.promptConsent && z.showCookieConsent(this.config), this.siteInfoApplied = !0
                    }
                },
                setAppActive: function(e) {
                    this.active = e, this.quickPlayPendingModeIdx = -1, this.sessionGames++, this.refreshUi()
                },
                onTeamMenuLeave: function(e) {
                    e && "" != e && window.history && window.history.replaceState("", "", "/"), this.errorMessage = e, this.setDOMFromConfig(), this.refreshUi()
                },
                setConfigFromDOM: function() {
                    var e = x.sanitizeNameInput(this.nameInput.val());
                    this.config.set("playerName", e);
                    var t = this.serverSelect.find(":selected").val();
                    this.config.set("region", t)
                },
                setDOMFromConfig: function() {
                    var e = this;
                    this.nameInput.val(this.config.get("playerName")), this.serverSelect.find("option").each(function(t, a) {
                        a.selected = a.value == e.config.get("region")
                    }), this.languageSelect.val(this.config.get("language"))
                },
                onConfigModified: function(e) {
                    var t = this.config.get("muteAudio");
                    t != this.audioManager.mute && (this.muteBtns.removeClass(t ? "audio-on-icon" : "audio-off-icon"), this.muteBtns.addClass(t ? "audio-off-icon" : "audio-on-icon"), this.audioManager.setMute(t));
                    var a = this.config.get("masterVolume");
                    this.masterSliders.val(100 * a), this.audioManager.setMasterVolume(a);
                    var i = this.config.get("soundVolume");
                    this.soundSliders.val(100 * i), this.audioManager.setSoundVolume(i);
                    var r = this.config.get("musicVolume");
                    this.musicSliders.val(100 * r), this.audioManager.setMusicVolume(r);
                    var o = this.config.get("language");
                    o != this.localization.getLocale() && (this.localization.setLocale(o), this.localization.localizeIndex()), "region" == e && (this.config.set("regionSelected", !0), this.startPingTest()), "highResTex" == e && location.reload()
                },
                refreshUi: function() {
                    var e = this;
                    this.startMenuWrapper.css("display", this.active ? "flex" : "none"), this.gameAreaWrapper.css({
                        display: this.active ? "none" : "block",
                        opacity: this.active ? 0 : 1
                    }), this.active ? (r("body").removeClass("user-select-none"), document.removeEventListener("contextmenu", this.contextListener)) : (r("body").addClass("user-select-none"), r("#start-main").stop(!0), document.addEventListener("contextmenu", this.contextListener)), r("#ad-block-left").css("display", !g.isLandscape && this.teamMenu.active ? "none" : "block");
                    var t = this.active && "" != this.errorMessage;
                    this.serverWarning.css({
                        display: "block",
                        opacity: t ? 1 : 0
                    }), this.serverWarning.html(this.errorMessage);
                    var a = function(t, a) {
                        t.html(e.quickPlayPendingModeIdx === a ? '<div class="ui-spinner"></div>' : t.attr("data-label"))
                    };
                    a(this.playMode0Btn, 0), a(this.playMode1Btn, 1), a(this.playMode2Btn, 2), this.active ? (this.playMode2Btn.addClass("btn-potato-mode"), r("#btn-start-team").addClass("btn-potato-mode")) : (this.playMode2Btn.removeClass("btn-potato-mode"), r("#btn-start-team").removeClass("btn-potato-mode"))
                },
                tryJoinTeam: function(e, t) {
                    if (this.active && -1 === this.quickPlayPendingModeIdx) {
                        var a = t || window.location.hash.slice(1);
                        (e || "" != a) && (this.setConfigFromDOM(), this.teamMenu.connect(e, a), this.refreshUi())
                    }
                },
                tryQuickStartGame: function(e) {
                    var t = (new Date).getTime();
                    if (this.playEnabled && -1 === this.quickPlayPendingModeIdx && !(t < this.playTimeout)) {
                        this.playTimeout = t + 1e3, this.errorMessage = "", this.quickPlayPendingModeIdx = e, this.setConfigFromDOM(), this.refreshUi();
                        var a = n.protocolVersion,
                            i = this.config.get("region"),
                            r = x.getParameterByName("region");
                        void 0 !== r && r.length > 0 && (i = r);
                        var o = this.pingTest.getZones(i),
                            s = x.getParameterByName("zone");
                        void 0 !== s && s.length > 0 && (o = [s]);
                        var l = {
                            version: a,
                            region: i,
                            zones: o,
                            playerCount: 1,
                            autoFill: !0,
                            gameModeIdx: e
                        };
                        this.findGame(l)
                    }
                },
                findGame: function(e) {
                    var t = this;
                    x.findGame(e, function(e, a) {
                        if (e) {
                            var i = {
                                full: t.localization.translate("index-failed-finding-game"),
                                invalid_protocol: t.localization.translate("index-invalid-protocol")
                            };
                            "invalid_protocol" == e && t.showInvalidProtocolModal(), t.errorMessage = i[e] || i.full, t.quickPlayPendingModeIdx = -1, t.refreshUi()
                        } else t.joinGame(a, function() {
                            t.errorMessage = t.localization.translate("index-failed-joining-game"), t.quickPlayPendingModeIdx = -1, t.refreshUi()
                        })
                    })
                },
                joinGame: function(e, t) {
                    var a = this;
                    if (!this.game) return void setTimeout(function() {
                        a.joinGame(e, t)
                    }, 250);
                    x.joinGame(this.game, e, t)
                },
                showInvalidProtocolModal: function() {
                    r("#modal-refresh").fadeIn(200)
                },
                update: function() {
                    var e = s.clamp(this.pixi.ticker.elapsedMS / 1e3, .001, 1 / 8);
                    if (this.pingTest.update(e), !this.checkedPingTest && this.pingTest.isComplete()) {
                        if (!this.config.get("regionSelected")) {
                            var t = this.pingTest.getRegion();
                            t && (this.config.set("region", t), this.setDOMFromConfig())
                        }
                        this.checkedPingTest = !0
                    }
                    if (this.audioManager.c(e), this.ambience.update(e, this.audioManager, !this.active), this.teamMenu.update(e), this.wasPlayingVideo != this.adManager.isPlayingVideo) {
                        var a = this.adManager.isPlayingVideo ? 0 : this.config.get("masterVolume");
                        this.audioManager.setMasterVolume(a)
                    }
                    this.wasPlayingVideo = this.adManager.isPlayingVideo, this.game && this.game.initialized && this.game.playing ? this.game.c(e) : this.pixi.renderer.backgroundColor = 7378501, this.input.flush()
                }
            }, a("927ff3fc"),
            function() {
                var e = a("b4f03d8a");
                ! function(e) {
                    var t = document.createElement("style");
                    t.innerHTML = e.toString(), document.body.appendChild(t)
                }(e)
            }();
        var C = new i;
        document.addEventListener("DOMContentLoaded", function(e) {
            setTimeout(function() {
                C.o()
            }, 0)
        }), window.addEventListener("load", function() {
            setTimeout(function() {
                C.o()
            }, 0)
        }), window.addEventListener("unload", function(e) {
            C.onUnload()
        }), "#_=_" == window.location.hash && (window.location.hash = "", history.pushState("", document.title, window.location.pathname)), window.addEventListener("resize", function() {
            C.onResize()
        }), window.addEventListener("hashchange", function() {
            C.tryJoinTeam(!1)
        }), window.addEventListener("beforeunload", function(e) {
            if (C.game && C.game.Dt() && !g.webview) {
                var t = "Do you want to reload the game?";
                return e.returnValue = t, t
            }
        });
        var A = [];
        window.onerror = function(e, t, a, i, r) {
            if (e = e || "undefined_error_msg", -1 != e.indexOf("').innerText") || -1 != r.stack.indexOf("cdn.rawgit.com") || -1 != r.stack.indexOf("chrome-extension://")) return void x.H();
            var o = {
                    msg: e,
                    id: y.instanceId,
                    url: t,
                    line: a,
                    column: i,
                    stacktrace: r.stack,
                    browser: navigator.userAgent
                },
                n = JSON.stringify(o); - 1 === A.indexOf(n) && (A.push(n), /tpc.googlesyndication.com/.test(n) || (/surviv\.io\/js\/.*\.js/.test(n) && -1 == o.stacktrace.indexOf("chrome-extension://") && -1 == o.stacktrace.indexOf("cdn.rawgit.com") ? -1 !== o.msg.indexOf("TypeError: null is not an object (evaluating 't.transform._parentID=-1')") ? y.logError(n) : y.logWindowOnAppError(n) : y.logWindowOnError(n)))
        }
    },
    ce089fd5: function(e, t, a) {
        "use strict";

        function i() {}
        var r = a("34e32c48"),
            o = a("6b42806d"),
            n = (a("10899aea"), a("ceee80d9")),
            s = a("c2a798c8");
        a("c347b8dd"), a("af8ba00f"), i.prototype = {
            o: function() {},
            n: function() {},
            l: function(e, t, a, i) {
                if (t) {
                    this.type = e.type, this.layer = 0, this.pos = s.copy(e.pos), this.rot = n.oriToRad(e.ori), this.scale = 1, this.aabb = o.transform(n.getBoundingCollider(this.type), this.pos, this.rot, this.scale);
                    var l = n.Defs[this.type];
                    this.layers = [];
                    for (var c = 0; c < l.layers.length; c++) {
                        var m = l.layers[c],
                            p = void 0 === m.inheritOri || m.inheritOri,
                            d = void 0 !== m.underground ? m.underground : 1 == c,
                            h = s.add(this.pos, m.pos),
                            u = n.oriToRad(p ? e.ori + m.ori : m.ori),
                            g = o.transform(n.getBoundingCollider(m.type), h, u, 1);
                        this.layers.push({
                            collision: g,
                            underground: d
                        })
                    }
                    this.stairs = [];
                    for (var y = 0; y < l.stairs.length; y++) {
                        var w = l.stairs[y],
                            x = o.transform(w.collision, this.pos, this.rot, this.scale),
                            f = s.rotate(w.downDir, this.rot),
                            b = r.splitAabb(x, f);
                        this.stairs.push({
                            collision: x,
                            center: s.add(x.min, s.mul(s.sub(x.max, x.min), .5)),
                            downDir: f,
                            downAabb: o.createAabb(b[0].min, b[0].max),
                            upAabb: o.createAabb(b[1].min, b[1].max),
                            noCeilingReveal: !!w.noCeilingReveal,
                            lootOnly: !!w.lootOnly
                        })
                    }
                    this.mask = [];
                    for (var _ = 0; _ < l.mask.length; _++) this.mask.push(o.transform(l.mask[_], this.pos, this.rot, this.scale));
                    i.renderer.layerMaskDirty = !0
                }
            },
            c: function(e, t) {},
            insideStairs: function(e) {
                for (var t = 0; t < this.stairs.length; t++)
                    if (o.intersect(this.stairs[t].collision, e)) return !0;
                return !1
            },
            insideMask: function(e) {
                for (var t = 0; t < this.mask.length; t++)
                    if (o.intersect(this.mask[t], e)) return !0;
                return !1
            }
        }, e.exports = i
    },
    ce29f17f: function(e, t, a) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
            var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                i = a.exec(t);
            if (i) return i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""
        }

        function o() {
            var e = !1;
            return function(t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e
        }

        function n() {
            var e = !1,
                t = navigator.userAgent.toLowerCase();
            return function(a) {
                /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(t) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), e || /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.innerWidth >= 1023 && window.innerHeight >= 747 && (e = !0), e
        }

        function s() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        }

        function l() {
            return /Android/.test(navigator.userAgent) && !window.MSStream
        }

        function c() {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE "),
                a = e.indexOf("Trident/");
            return t > 0 || a > 0
        }

        function m() {
            return window.navigator.userAgent.indexOf("Edge/") > 0
        }

        function p() {
            return s() && (375 == screen.width && 812 == screen.height || 375 == screen.height && 812 == screen.width || 414 == screen.width && 896 == screen.height || 414 == screen.height && 896 == screen.width)
        }

        function d(e, t) {
            try {
                localStorage.setItem(e, t)
            } catch (e) {}
        }

        function h(e) {
            var t = null;
            try {
                t = localStorage.getItem(e)
            } catch (e) {}
            return t
        }
        var u = function() {
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
            g = function() {
                function e() {
                    i(this, e), this.os = "pc", s() ? this.os = "ios" : l() && (this.os = "android"), this.browser = "unknown", c() ? this.browser = "ie" : m() && (this.browser = "edge");
                    var t = "true" == r("webview");
                    t && d("surviv_webview", "true"), this.webview = t || h("surviv_webview"), this.model = "unknown", p() && (this.model = "iphonex");
                    var a = r("version");
                    a && d("surviv_version", a), this.version = h("surviv_version") || "1.0.0", this.mobile = o(), this.tablet = n(), this.touch = this.mobile || this.tablet, this.pixelRatio = window.devicePixelRatio, this.prod = !0, this.debug = !1, this.UiLayout = {
                        Lg: 0,
                        Sm: 1
                    }, this.uiLayout = this.mobile ? this.UiLayout.Sm : this.UiLayout.Lg, this.screenWidth = 0, this.screenHeight = 0, this.isLandscape = !0, this.onResize()
                }
                return u(e, [{
                    key: "onResize",
                    value: function() {
                        this.isLandscape = window.innerWidth > window.innerHeight || 90 == window.orientation || -90 == window.orientation, this.screenWidth = window.innerWidth, this.screenHeight = window.innerHeight;
                        var e = this.isLandscape ? this.screenWidth : this.screenHeight;
                        this.uiLayout = e <= 850 || this.mobile ? this.UiLayout.Sm : this.UiLayout.Lg
                    }
                }]), e
            }(),
            y = new g;
        e.exports = y
    },
    ceee80d9: function(e, t, a) {
        "use strict";

        function i(e) {
            return e % 4 * .5 * Math.PI
        }

        function r(e) {
            return Math.floor(Se.fmod(e + .25 * Math.PI, 2 * Math.PI) / (.5 * Math.PI))
        }

        function o(e) {
            if (ze[e]) return ze[e];
            var t = n(e);
            return ze[e] = t, t
        }

        function n(e) {
            var t = Pe[e];
            if ("structure" == t.type) {
                for (var a = [], r = 0; r < t.layers.length; r++) {
                    var n = t.layers[r],
                        s = i(n.ori),
                        l = _e.transform(o(n.type), n.pos, s, 1);
                    a.push(_e.toAabb(l))
                }
                for (var c = 0; c < t.stairs.length; c++) a.push(t.stairs[c].collision);
                var m = be.boundingAabb(a),
                    p = ve.create(1, 1);
                return m.min = ve.sub(m.min, p), m.max = ve.add(m.max, p), _e.createAabb(m.min, m.max)
            }
            if ("building" == t.type) {
                for (var d = [], h = 0; h < t.floor.surfaces.length; h++) d = d.concat(t.floor.surfaces[h].collision);
                d = d.concat(t.ceiling.scopeIn), d = d.concat(t.ceiling.scopeOut);
                for (var u = 0; u < t.mapObjects.length; u++) {
                    var g = t.mapObjects[u],
                        y = g.type;
                    if ("function" == typeof y && (y = y()), "" != y) {
                        var w = i(g.ori),
                            x = _e.transform(o(y), g.pos, w, g.scale);
                        d.push(_e.toAabb(x))
                    }
                }
                var f = be.boundingAabb(d);
                return _e.createAabb(f.min, f.max)
            }
            return "decal" == t.type ? _e.toAabb(t.collision) : (fe(t.collision), t.collision)
        }

        function s(e, t, a) {
            return {
                tier: e,
                min: t,
                max: a
            }
        }

        function l(e, t) {
            return {
                name: e,
                count: t
            }
        }

        function c(e) {
            var t = [];
            for (var a in e) e.hasOwnProperty(a) && t.push({
                type: a,
                weight: e[a]
            });
            fe(t.length > 0);
            for (var i = 0, r = 0; r < t.length; r++) i += t[r].weight;
            return function() {
                for (var e = ke.random(0, i), a = 0; e > t[a].weight;) e -= t[a].weight, a++;
                return t[a].type
            }
        }

        function m(e, t, a) {
            return {
                sprite: e,
                scale: .5,
                alpha: a || 1,
                tint: t || 16777215,
                zIdx: 10
            }
        }

        function p(e) {
            var t = {
                type: "obstacle",
                name: "a barrel",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .6
                },
                collision: _e.createCircle(ve.create(0, 0), 1.75),
                height: .5,
                collidable: !0,
                destructible: !0,
                explosion: "explosion_barrel",
                health: 150,
                hitParticle: "barrelChip",
                explodeParticle: "barrelBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !0,
                    color: 6447714,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-barrel-01.img",
                    scale: .4,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "barrel_bullet",
                    punch: "barrel_bullet",
                    explode: "barrel_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function d(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, 0), 1.75),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 20,
                hitParticle: "outhouseChip",
                explodeParticle: "barrelPlank",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !0,
                    color: 11235106,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-barrel-02.img",
                    residue: "map-barrel-res-02.img",
                    scale: .4,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_crate_bullet",
                    punch: "wood_crate_bullet",
                    explode: "barrel_break_02",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function h(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .9
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.8, 3.4)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                hitParticle: "clothHit",
                explodeParticle: ["woodPlank", "clothBreak"],
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-bed-02.img",
                    residue: "map-bed-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "cloth_bullet",
                    punch: "cloth_punch",
                    explode: "cloth_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function u(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.5, 1)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 75,
                hitParticle: "woodChip",
                explodeParticle: ["woodPlank", "book"],
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-bookshelf-01.img",
                    residue: "map-drawers-res.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_prop_bullet",
                    punch: "wood_prop_bullet",
                    explode: "drawers_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function g(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, 1), ve.create(2, 3.25)),
                        color: 3815994
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
                        collision: [_e.createAabbExtents(ve.create(0, 1), ve.create(2, 3.25))]
                    }],
                    imgs: [{
                        sprite: "map-bunker-generic-floor-02.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, .75), ve.create(2, 3.25))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, .75), ve.create(2, 3.25))],
                    imgs: [{
                        sprite: "map-bunker-generic-ceiling-01.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }]
                },
                mapObjects: [{
                    type: "metal_wall_ext_6",
                    pos: ve.create(0, -2.2),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_7",
                    pos: ve.create(-2.5, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_7",
                    pos: ve.create(2.5, 1),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function y(e) {
            var t = {
                type: "building",
                ori: 0,
                terrain: {},
                zIdx: 2,
                floor: {
                    surfaces: [{
                        type: "container",
                        collision: [_e.createAabbExtents(ve.create(-.5, 0), ve.create(3.25, 2))]
                    }],
                    imgs: [{
                        sprite: "map-bunker-generic-floor-01.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 3
                    }]
                },
                ceiling: {
                    scopeIn: [],
                    scopeOut: [],
                    imgs: []
                },
                mapObjects: [{
                    type: "metal_wall_ext_short_6",
                    pos: ve.create(2.2, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_short_7",
                    pos: ve.create(-1, 2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_short_7",
                    pos: ve.create(-1, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.statue,
                    pos: ve.create(-1, 0),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function w(e) {
            var t = {
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
                        collision: [_e.createAabbExtents(ve.create(6.5, 0), ve.create(4, 3))]
                    }],
                    imgs: [{
                        sprite: "map-bunker-statue-chamber-floor-01.img",
                        pos: ve.create(3.5, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 3
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(6.5, 0), ve.create(4, 3))],
                    scopeOut: [_e.createAabbExtents(ve.create(6.5, 0), ve.create(4, 3))],
                    imgs: [{
                        sprite: "",
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }],
                    vision: {
                        dist: 5,
                        width: 3
                    }
                },
                mapObjects: [{
                    type: "concrete_wall_ext_6",
                    pos: ve.create(-4, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_thicker_15",
                    pos: ve.create(3, 3.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_thicker_15",
                    pos: ve.create(3, -3.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_thicker_10",
                    pos: ve.create(12, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.crate,
                    pos: ve.create(8.5, 0),
                    scale: .75,
                    ori: 0,
                    inheritOri: !1
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function x(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1.05,
                    createMax: 1.2,
                    destroy: 1
                },
                collision: _e.createCircle(ve.create(0, 0), 1.4),
                height: 10,
                collidable: !1,
                destructible: !0,
                health: 100,
                hitParticle: "leaf",
                explodeParticle: "leaf",
                reflectBullets: !1,
                isBush: !0,
                loot: [],
                map: {
                    display: !0,
                    color: 24320,
                    scale: 1.5
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                img: {
                    sprite: "map-bush-01.img",
                    residue: "map-bush-res-01.img",
                    scale: .5,
                    alpha: .97,
                    tint: 16777215,
                    zIdx: 60
                },
                sound: {
                    bullet: "bush_bullet",
                    punch: "bush_bullet",
                    explode: "bush_break_01",
                    enter: "bush_enter_01"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function f(e) {
            var t = {
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
                ori: 0,
                floor: {
                    surfaces: [],
                    imgs: [{
                        sprite: "",
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
                    type: "stone_02",
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "decal_initiative_01",
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function b(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.6)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 75,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-case-deagle-01.img",
                    residue: "map-crate-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_crate_bullet",
                    punch: "wood_crate_bullet",
                    explode: "crate_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function _(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.6)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 140,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_chest", 3, 4)],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-chest-01.img",
                    residue: "map-crate-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_crate_bullet",
                    punch: "wood_crate_bullet",
                    explode: "crate_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function S(e) {
            var t = _({
                collision: _e.createAabbExtents(ve.create(0, .8), ve.create(2.25, .8)),
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, .8), ve.create(2.25, 1.6))],
                terrain: {
                    river: {
                        centerWeight: 1
                    }
                }
            });
            return ke.mergeDeep(t, e || {})
        }

        function k(e) {
            var t = [{
                    type: "container_wall_top",
                    pos: ve.create(0, 7.95),
                    scale: 1,
                    ori: 0
                }, {
                    type: "container_wall_side",
                    pos: ve.create(2.35, 2.1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "container_wall_side",
                    pos: ve.create(-2.35, 2.1),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.loot_spawner_01 || "loot_tier_2",
                    pos: ve.create(0, 3.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.loot_spawner_02 || c({
                        loot_tier_1: 2,
                        "": 1
                    }),
                    pos: ve.create(0, .05),
                    scale: 1,
                    ori: 0
                }],
                a = [{
                    type: "container_wall_side_open",
                    pos: ve.create(2.35, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "container_wall_side_open",
                    pos: ve.create(-2.35, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "loot_tier_2",
                    pos: ve.create(0, -.05),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(0, .05),
                    scale: 1,
                    ori: 0
                }];
            return {
                type: "building",
                map: {
                    display: !0,
                    color: e.mapTint || 2703694,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0,
                    riverShore: !0
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "container",
                        collision: [e.open ? _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 11)) : _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 8))]
                    }],
                    imgs: [{
                        sprite: e.open ? "map-building-container-open-floor.img" : "map-building-container-floor-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: e.tint
                    }]
                },
                ceiling: {
                    scopeIn: [e.open ? _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 5.75)) : _e.createAabbExtents(ve.create(0, 2.25), ve.create(2.5, 5.5))],
                    scopeOut: [e.open ? _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 11)) : _e.createAabbExtents(ve.create(0, -.5), ve.create(2.5, 8.75))],
                    imgs: e.ceilingImgs || [{
                        sprite: e.ceilingSprite,
                        scale: .5,
                        alpha: 1,
                        tint: e.tint
                    }]
                },
                mapObjects: e.open ? a : t
            }
        }

        function v(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .5
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 2.25)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 75,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0,
                    riverShore: !0
                },
                img: {
                    sprite: "map-crate-01.img",
                    residue: "map-crate-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_crate_bullet",
                    punch: "wood_crate_bullet",
                    explode: "crate_break_02",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function z(e) {
            var t = {
                airdropCrate: !0,
                scale: {
                    destroy: 1
                },
                destructible: !1,
                health: 200,
                hitParticle: "barrelChip",
                explodeParticle: "airdropCrate02",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1
                },
                button: {
                    interactionRad: 1,
                    interactionText: "game-unlock",
                    useOnce: !0,
                    destroyOnUse: !0,
                    useDelay: 2.5,
                    useDir: ve.create(-1, 0),
                    useImg: "map-airdrop-04.img",
                    useParticle: "airdropCrate03",
                    sound: {
                        on: "airdrop_open_01",
                        off: ""
                    }
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "airdrop_open_02"
                }
            };
            return ke.mergeDeep(v(t), e || {})
        }

        function M(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(2.5, 1)),
                height: 10,
                collidable: !0,
                destructible: !0,
                health: 20,
                hitParticle: "barrelChip",
                explodeParticle: "depositBoxGreyBreak",
                reflectBullets: !0,
                loot: [s("tier_world", 1, 1)],
                lootSpawn: {
                    offset: ve.create(0, -1),
                    spdMult: 0
                },
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-deposit-box-01.img",
                    residue: "none",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "deposit_box_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function T(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(e.hinge, e.extents),
                height: 10,
                collidable: !0,
                destructible: !0,
                health: 150,
                hitParticle: "whiteChip",
                explodeParticle: "whitePlank",
                reflectBullets: !1,
                door: {
                    interactionRad: .75,
                    canUse: !0,
                    openSpeed: 2,
                    openOneWay: 0,
                    openDelay: 0,
                    openOnce: !1,
                    autoOpen: !1,
                    autoClose: !1,
                    autoCloseDelay: 1,
                    slideToOpen: !1,
                    slideOffset: 3.5,
                    spriteAnchor: ve.create(.5, 1),
                    sound: {
                        open: e.soundOpen || "door_open_01",
                        close: e.soundClose || "door_close_01",
                        change: "",
                        error: ""
                    }
                },
                loot: [],
                img: {
                    sprite: "map-door-01.img",
                    residue: "none",
                    scale: .5,
                    alpha: 1,
                    tint: 14671839,
                    zIdx: 15
                },
                sound: {
                    bullet: "wall_wood_bullet",
                    punch: "wall_wood_bullet",
                    explode: "wall_wood_break_01",
                    enter: "none"
                }
            };
            return fe(Te[e.material]), ke.mergeDeep(t, Te[e.material], e || {})
        }

        function P(e) {
            var t = T({
                material: "concrete",
                hinge: ve.create(0, 2),
                extents: ve.create(.3, 2),
                door: {
                    interactionRad: 2,
                    openOneWay: !1,
                    openSpeed: 7,
                    autoOpen: !0,
                    autoClose: !0,
                    autoCloseDelay: 1,
                    slideToOpen: !0,
                    slideOffset: 3.75,
                    sound: {
                        open: "door_open_03",
                        close: "door_close_03",
                        error: "door_error_01"
                    },
                    casingImg: {
                        sprite: "map-door-slot-01.img",
                        pos: ve.create(-2, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 1316379,
                        zIdx: 60
                    }
                },
                img: {
                    tint: 5373952
                }
            });
            return ke.mergeDeep(t, e || {})
        }

        function I(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(2.5, 1.25)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 75,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_container", 1, 1)],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-drawers-01.img",
                    residue: "map-drawers-res.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_prop_bullet",
                    punch: "wood_prop_bullet",
                    explode: "drawers_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function C(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .9
                },
                collision: _e.createAabbExtents(ve.create(0, .2), ve.create(2.25, .7)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 50,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                lootSpawn: {
                    offset: ve.create(0, -1),
                    spdMult: 0
                },
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-gun-mount-01.img",
                    residue: "map-drawers-res.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wood_prop_bullet",
                    punch: "wood_prop_bullet",
                    explode: "barrel_break_02",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function A(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(1.5, .6)),
                height: 10,
                collidable: !0,
                destructible: !0,
                health: 20,
                hitParticle: "barrelChip",
                explodeParticle: "lockerBreak",
                reflectBullets: !0,
                loot: [s("tier_world", 1, 1)],
                lootSpawn: {
                    offset: ve.create(0, -1),
                    spdMult: 0
                },
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-locker-01.img",
                    residue: "",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "deposit_box_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function E(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1, 1)),
                height: .5,
                collidable: !0,
                destructible: !0,
                explosion: "explosion_barrel",
                health: 250,
                hitParticle: "barrelChip",
                explodeParticle: "depositBoxGreyBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-power-box-01.img",
                    residue: "",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "deposit_box_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function D(e) {
            var t = {
                type: "obstacle",
                name: "an oven",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(1.7, 1.3)),
                height: .5,
                collidable: !0,
                destructible: !0,
                explosion: "explosion_barrel",
                health: 200,
                hitParticle: "barrelChip",
                explodeParticle: "barrelBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1,
                    color: 14935011,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-oven-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "barrel_bullet",
                    punch: "barrel_bullet",
                    explode: "oven_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function O(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 4.25)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0,
                    riverShore: !0
                },
                img: {
                    sprite: "map-planter-01.img",
                    residue: "map-planter-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "toilet_porc_bullet",
                    punch: "toilet_porc_bullet",
                    explode: "ceramic_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function B(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, 0), 1.5),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 50,
                hitParticle: "potChip",
                explodeParticle: "potBreak",
                reflectBullets: !1,
                loot: [s("tier_world", 1, 1)],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-pot-01.img",
                    residue: "map-pot-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "toilet_porc_bullet",
                    punch: "toilet_porc_bullet",
                    explode: "toilet_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function L(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.5, .5)),
                height: .3,
                collidable: !0,
                destructible: !1,
                health: 50,
                hitParticle: "bottleBlueChip",
                explodeParticle: "bottleBlueBreak",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !0,
                    color: 6697728,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-bottle-02.img",
                    residue: "none",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "glass_bullet",
                    punch: "glass_bullet",
                    explode: "window_break_01",
                    enter: "none"
                },
                button: {
                    interactionRad: 1.25,
                    interactionText: "game-use",
                    useOnce: !0,
                    useType: "",
                    useDelay: .25,
                    useDir: ve.create(-1, 0),
                    useImg: "map-bottle-03.img",
                    sound: {
                        on: "button_press_01",
                        off: "button_press_01"
                    }
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function R(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, 0), 1.1),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                hitParticle: "potatoChip",
                explodeParticle: "potatoBreak",
                reflectBullets: !1,
                swapWeaponOnDestroy: !0,
                regrow: !0,
                regrowTimer: 60,
                loot: [],
                map: {
                    display: !1,
                    color: 9466197,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !0,
                    riverShore: !0
                },
                img: {
                    sprite: "map-potato-01.img",
                    residue: "map-potato-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "organic_hit",
                    punch: "organic_hit",
                    explode: "pumpkin_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function F(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, 0), 1.9),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                reflectBullets: !1,
                hitParticle: "pumpkinChip",
                explodeParticle: "pumpkinBreak",
                loot: [s("tier_skins", 1, 1)],
                map: {
                    display: !0,
                    color: 15889667,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    riverShore: !0
                },
                img: {
                    sprite: "map-pumpkin-01.img",
                    residue: "map-pumpkin-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "organic_hit",
                    punch: "organic_hit",
                    explode: "pumpkin_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function j(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.9, 1.5)),
                height: .5,
                collidable: !0,
                destructible: !1,
                explosion: "explosion_barrel",
                health: 250,
                hitParticle: "barrelChip",
                explodeParticle: "depositBoxGreyBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1
                },
                terrain: {
                    grass: !1,
                    beach: !0
                },
                img: {
                    sprite: "map-recorder-01.img",
                    residue: "",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "deposit_box_break_01",
                    enter: "none"
                },
                button: {
                    interactionRad: .2,
                    interactionText: "game-use",
                    useOnce: !0,
                    useType: "",
                    useDelay: .25,
                    useDir: ve.create(-1, 0),
                    useImg: "map-recorder-02.img",
                    sound: {
                        on: "",
                        off: ""
                    }
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function q(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, .15), ve.create(1.7, 1.25)),
                height: .5,
                collidable: !0,
                destructible: !1,
                health: 100,
                hitParticle: "redChip",
                explodeParticle: "woodPlank",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1,
                    color: 7733259,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-refrigerator-01.img",
                    residue: "map-crate-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_bullet",
                    punch: "metal_punch",
                    explode: "barrel_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function N(e) {
            var t = {
                type: "obstacle",
                map: {
                    display: !0,
                    color: 13278307,
                    scale: 1
                },
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .5
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.1, 1.4)),
                height: .5,
                collidable: !0,
                destructible: !1,
                health: 150,
                hitParticle: "goldChip",
                explodeParticle: "barrelBreak",
                reflectBullets: !1,
                loot: [],
                img: {
                    sprite: "map-sandbags-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_brick_bullet",
                    punch: "wall_brick_bullet",
                    explode: "crate_break_02",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function V(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1.2,
                    destroy: .5
                },
                collision: _e.createCircle(ve.create(0, 0), 1.6),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 250,
                reflectBullets: !1,
                hitParticle: "rockChip",
                explodeParticle: "rockBreak",
                loot: [],
                map: {
                    display: !0,
                    color: 11776947,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    riverShore: !0
                },
                img: {
                    sprite: "map-stone-01.img",
                    residue: "map-stone-res-01.img",
                    scale: .4,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "stone_bullet",
                    punch: "stone_bullet",
                    explode: "stone_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function G(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: .8,
                    createMax: 1.2,
                    destroy: .5
                },
                collision: _e.createCircle(ve.create(0, 0), 2.9),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 500,
                reflectBullets: !1,
                hitParticle: "rockChip",
                explodeParticle: "rockBreak",
                loot: [],
                map: {
                    display: !0,
                    color: 5197647,
                    scale: 1
                },
                terrain: {
                    grass: !1,
                    beach: !1,
                    river: {
                        centerWeight: .5
                    },
                    riverShore: !1
                },
                img: {
                    sprite: "map-stone-03.img",
                    residue: "map-stone-res-02.img",
                    scale: .4,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "stone_bullet",
                    punch: "stone_bullet",
                    explode: "stone_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function U(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2)),
                height: .5,
                collidable: !1,
                destructible: !0,
                health: 100,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1,
                    color: 6697728,
                    scale: .875
                },
                terrain: {
                    grass: !0,
                    beach: !0
                },
                img: {
                    sprite: "map-table-01.img",
                    residue: "map-table-res.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 60
                },
                sound: {
                    bullet: "wood_prop_bullet",
                    punch: "wood_prop_bullet",
                    explode: "crate_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function H(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .8
                },
                collision: _e.createCircle(ve.create(0, .25), 1.18),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 100,
                reflectBullets: !1,
                hitParticle: "whiteChip",
                explodeParticle: "toiletBreak",
                loot: [s("tier_toilet", 2, 3)],
                map: {
                    display: !1,
                    color: 11776947,
                    scale: 1
                },
                img: {
                    sprite: "map-toilet-01.img",
                    residue: "map-toilet-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "toilet_porc_bullet",
                    punch: "toilet_porc_bullet",
                    explode: "toilet_break_01",
                    enter: "none"
                },
                terrain: {
                    grass: !0,
                    beach: !1
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function W(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: .8,
                    createMax: 1,
                    destroy: .5
                },
                collision: _e.createCircle(ve.create(0, 0), 1.55),
                aabb: _e.createAabbExtents(ve.create(0, 0), ve.create(5.75, 5.75)),
                height: 10,
                collidable: !0,
                destructible: !0,
                health: 175,
                hitParticle: "woodChip",
                explodeParticle: "woodLog",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !0,
                    color: 4083758,
                    scale: 2.5
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                img: {
                    sprite: "map-tree-03.img",
                    residue: "map-tree-res-01.img",
                    scale: .7,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 800
                },
                sound: {
                    bullet: "tree_bullet",
                    punch: "tree_bullet",
                    explode: "tree_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function K(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createCircle(ve.create(0, 0), 1.6),
                aabb: _e.createAabbExtents(ve.create(0, 0), ve.create(5.75, 5.75)),
                button: {
                    interactionRad: .2,
                    interactionText: "game-use",
                    useOnce: !0,
                    useType: "",
                    useDelay: .25,
                    useDir: ve.create(-1, 0),
                    useImg: "map-tree-switch-04.img",
                    sound: {
                        on: "button_press_01",
                        off: "button_press_01"
                    }
                },
                height: .5,
                collidable: !0,
                destructible: !1,
                health: 175,
                hitParticle: "woodChip",
                explodeParticle: "woodLog",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1,
                    color: 8602624,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                img: {
                    sprite: "map-tree-switch-01.img",
                    residue: "map-tree-res-01.img",
                    scale: .5,
                    alpha: 1,
                    zIdx: 10,
                    tint: 16777215
                },
                sound: {
                    bullet: "tree_bullet",
                    punch: "tree_bullet",
                    explode: "tree_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function Z(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.copy(e.extents)),
                height: 10,
                isWall: !0,
                collidable: !0,
                destructible: !0,
                health: e.health || 150,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1
                },
                img: {},
                sound: {
                    bullet: "wall_bullet",
                    punch: "wall_bullet",
                    explode: "barrel_break_01",
                    enter: "none"
                }
            };
            return fe(Te[e.material]), ke.mergeDeep(t, Te[e.material], e || {})
        }

        function X(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createCircle(ve.create(0, 2.3), 4.6),
                height: 10,
                collidable: !0,
                destructible: !1,
                health: 300,
                hitParticle: "barrelChip",
                explodeParticle: "barrelBreak",
                reflectBullets: !0,
                loot: [],
                map: {
                    display: !1,
                    color: 6310464,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                img: {
                    sprite: "map-wheel-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "silo_bullet",
                    punch: "silo_bullet",
                    explode: "barrel_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function Y(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: .75
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 1.5)),
                height: .5,
                collidable: !0,
                destructible: !0,
                health: 150,
                hitParticle: "woodChip",
                explodeParticle: "woodLog",
                reflectBullets: !1,
                loot: [],
                map: {
                    display: !1,
                    color: 9455616,
                    scale: .875
                },
                terrain: {},
                img: {
                    sprite: "map-woodpile-01.img",
                    residue: "map-woodpile-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "tree_bullet",
                    punch: "tree_bullet",
                    explode: "tree_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function J(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(-16, 7), ve.create(10.75, 11)),
                        color: 7820585
                    }, {
                        collider: _e.createAabbExtents(ve.create(6, 0), ve.create(11.5, 18.25)),
                        color: 9989427
                    }, {
                        collider: _e.createAabbExtents(ve.create(22, 4), ve.create(4.5, 7.5)),
                        color: 7820585
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "tile",
                        collision: [_e.createAabbExtents(ve.create(6, -1), ve.create(11.25, 18.25)), _e.createAabbExtents(ve.create(21.5, 4), ve.create(4.75, 7.25))]
                    }],
                    imgs: [{
                        sprite: "map-building-bank-floor-01.img",
                        pos: ve.create(0, 6.96),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-bank-floor-02.img",
                        pos: ve.create(9.5, -12.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(6, -1), ve.create(11.25, 18.25)), _e.createAabbExtents(ve.create(21.5, 4), ve.create(4.75, 7.25)), _e.createAabbExtents(ve.create(-16, 6), ve.create(10.25, 11))],
                    scopeOut: [_e.createAabbExtents(ve.create(6, 1.25), ve.create(15.25, 20))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-bank-ceiling-01.img",
                        pos: ve.create(-16, 7),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-bank-ceiling-02.img",
                        pos: ve.create(6, 0),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-bank-ceiling-03.img",
                        pos: ve.create(22, 8),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_23",
                    pos: ve.create(-14, 17),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_23",
                    pos: ve.create(-25.9, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_20",
                    pos: ve.create(-15.5, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-5, -7),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-5, -16.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-2.5, -19),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(6, -19),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(14.5, -19),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(17, -16.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(17, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(1, -19.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(11, -19.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-5.25, -13.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(17.25, -13.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(22, -3),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_15",
                    pos: ve.create(26, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(22, 11),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(17, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(14.5, 17),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(4.5, 17),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-1, 17.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.vault || "vault_01",
                    pos: ve.create(-12, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_wall_int_4",
                    pos: ve.create(-2.5, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_window_01",
                    pos: ve.create(1, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_wall_int_3",
                    pos: ve.create(4, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_wall_int_4",
                    pos: ve.create(6, -3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_window_01",
                    pos: ve.create(6, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_wall_int_4",
                    pos: ve.create(6, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_wall_int_4",
                    pos: ve.create(8.5, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_window_01",
                    pos: ve.create(12, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_wall_int_3",
                    pos: ve.create(15, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_wall_int_5",
                    pos: ve.create(17, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bank_wall_int_8",
                    pos: ve.create(21.5, 4),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(17, -2.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(17, 10.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_door_01",
                    pos: ve.create(12.5, 17.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "vending_01",
                    pos: ve.create(4.5, -16.9),
                    scale: 1,
                    ori: 2
                }, {
                    type: "stand_01",
                    pos: ve.create(7.65, -17),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(23.5, .5),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(23.5, 7.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "stand_01",
                    pos: ve.create(15, 15),
                    scale: 1,
                    ori: 3
                }, {
                    type: "fire_ext_01",
                    pos: ve.create(4.5, 16.15),
                    scale: 1,
                    ori: 3
                }, {
                    type: "bush_02",
                    pos: ve.create(-2.5, -16.25),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "bush_02",
                    pos: ve.create(14.5, -16.25),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "crate_01",
                    pos: ve.create(19.75, 13.75),
                    scale: .9,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(12, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(1, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(-16.5, -12.5),
                    scale: 1.1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-7.5, -7.25),
                    scale: .85,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(21, -7),
                    scale: .55,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(21, -16.25),
                    scale: .55,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function Q(e) {
            var t = {
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
                        type: "container",
                        collision: [_e.createAabbExtents(ve.create(-3.5, 0), ve.create(10, 10.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-vault-floor.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(-3.5, 0), ve.create(10.25, 10.75))],
                    scopeOut: [_e.createAabbExtents(ve.create(-3.5, 0), ve.create(11, 11.5))],
                    vision: {
                        dist: 7.25,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-vault-ceiling.img",
                        scale: 1,
                        alpha: 1,
                        tint: 6250335
                    }]
                },
                mapObjects: [{
                    type: "metal_wall_ext_thick_20",
                    pos: ve.create(-12.5, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_thick_20",
                    pos: ve.create(-3.5, -9.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_thick_20",
                    pos: ve.create(-3.5, 9.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_thick_6",
                    pos: ve.create(5.5, -6.45),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_thick_6",
                    pos: ve.create(5.5, 6.45),
                    scale: 1,
                    ori: 0
                }, {
                    type: "vault_door_main",
                    pos: ve.create(6.5, 3.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(-12.3, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(-12.3, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(-8, 9.3),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(-8, -9.3),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(1, 9.3),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        deposit_box_01: 3,
                        deposit_box_02: e.gold_box || 1
                    }),
                    pos: ve.create(1, -9.3),
                    scale: 1,
                    ori: 2
                }, {
                    type: "crate_05",
                    pos: ve.create(-3.5, 6.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_05",
                    pos: ve.create(-3.5, -6.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.floor_loot || c({
                        loot_tier_vault_floor: 1
                    }),
                    pos: ve.create(-3.5, 0),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function $(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, 12), ve.create(5, 2)),
                        color: 12300935
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, -2), ve.create(24.5, 12.8)),
                        color: 3816739
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, -2), ve.create(28, 16.5)), _e.createAabbExtents(ve.create(0, 14), ve.create(7, 5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, -2), ve.create(25, 13.2)), _e.createAabbExtents(ve.create(0, 12), ve.create(5.5, 2.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-barn-floor-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, -2), ve.create(24.5, 12.8)), _e.createAabbExtents(ve.create(0, 12), ve.create(5.5, 2.5))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, -14.5), ve.create(5.5, 4)), _e.createAabbExtents(ve.create(0, 14.5), ve.create(5.5, 4))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-barn-ceiling-01.img",
                        pos: ve.create(0, -2),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-barn-ceiling-02.img",
                        pos: ve.create(0, 13.2),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_4",
                    pos: ve.create(-24.5, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(-22.5, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(-24.5, -2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-24.5, -13),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(-22.5, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-24.75, 5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-24.75, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-19.5, 10.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-19.5, -14.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_16",
                    pos: ve.create(-10, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_16",
                    pos: ve.create(10, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_16",
                    pos: ve.create(-10, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(5, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-5.5, 13),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(5.5, 13),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(-3.5, 14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(3.5, 14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(9.5, -14.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(2, 14.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-2, -14.75),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(24.5, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(22.5, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_13",
                    pos: ve.create(17.5, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_19",
                    pos: ve.create(24.5, -5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_1",
                    pos: ve.create(23.5, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(24.75, 5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(19.5, 10.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "panicroom_01",
                    pos: ve.create(19.5, -8),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_6",
                    pos: ve.create(-21, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_6",
                    pos: ve.create(-21, -4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_5",
                    pos: ve.create(-11.5, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_2",
                    pos: ve.create(-13, -4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_7",
                    pos: ve.create(-6.5, -4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(-11.5, -10),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(-7.5, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_5",
                    pos: ve.create(-3.5, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_7",
                    pos: ve.create(10.5, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_5",
                    pos: ve.create(14.5, 7.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_13",
                    pos: ve.create(14.5, -7.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_4",
                    pos: ve.create(17, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-18, -4.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(-18, .5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(-3.5, -5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_door_01",
                    pos: ve.create(14.5, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_02",
                    pos: ve.create(23, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_column_1",
                    pos: ve.create(-8, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_column_1",
                    pos: ve.create(-11, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_column_1",
                    pos: ve.create(15, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(-7.5, -12),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-12.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-5.5, 7.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-13.5, -9.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "stand_01",
                    pos: ve.create(16.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "stand_01",
                    pos: ve.create(3.5, 12.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "table_01",
                    pos: ve.create(8, -8),
                    scale: 1,
                    ori: 0
                }, {
                    type: "oven_01",
                    pos: ve.create(12.25, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "refrigerator_01",
                    pos: ve.create(8.75, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bush_02",
                    pos: ve.create(-22, -2),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "bush_02",
                    pos: ve.create(12, 8),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(-19, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(-19, 5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "loot_tier_1",
                    pos: ve.create(0, 5.5),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ee(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, 0), ve.create(31.5, 8)),
                        color: 5197647
                    }, {
                        collider: _e.createAabbExtents(ve.create(-14, -9.5), ve.create(2.5, 1.5)),
                        color: 3618615
                    }, {
                        collider: _e.createAabbExtents(ve.create(14, -9.5), ve.create(2.5, 1.5)),
                        color: 3618615
                    }, {
                        collider: _e.createAabbExtents(ve.create(-14, 9.5), ve.create(2.5, 1.5)),
                        color: 3618615
                    }, {
                        collider: _e.createAabbExtents(ve.create(14, 9.5), ve.create(2.5, 1.5)),
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
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(31.5, 8))]
                    }],
                    imgs: [{
                        sprite: "map-building-bridge-lg-floor.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(16.5, 7))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(16.5, 7))],
                    vision: {
                        dist: 10
                    },
                    imgs: [{
                        sprite: "map-building-bridge-lg-ceiling.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "bridge_rail_12",
                    pos: ve.create(-22.5, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_12",
                    pos: ve.create(-22.5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_12",
                    pos: ve.create(22.5, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_12",
                    pos: ve.create(22.5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_column_5x4",
                    pos: ve.create(-14, -9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "concrete_wall_column_5x4",
                    pos: ve.create(-14, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "concrete_wall_column_5x4",
                    pos: ve.create(14, -9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "concrete_wall_column_5x4",
                    pos: ve.create(14, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "concrete_wall_ext_5",
                    pos: ve.create(-9, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_5",
                    pos: ve.create(-9, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_5",
                    pos: ve.create(9, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_5",
                    pos: ve.create(9, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_3",
                    pos: ve.create(-5, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_3",
                    pos: ve.create(-5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_3",
                    pos: ve.create(5, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bridge_rail_3",
                    pos: ve.create(5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_7",
                    pos: ve.create(0, 7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_7",
                    pos: ve.create(0, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        loot_tier_1: 2,
                        "": 1
                    }),
                    pos: ve.create(-22, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 2,
                        "": 1
                    }),
                    pos: ve.create(22, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "sandbags_01",
                    pos: ve.create(-14, 2.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barrel_01",
                    pos: ve.create(-10, 5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(0, 4.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "crate_01",
                    pos: ve.create(0, -4.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "barrel_01",
                    pos: ve.create(10, -5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "sandbags_01",
                    pos: ve.create(14, -2.75),
                    scale: 1,
                    ori: 1
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function te(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, .5), ve.create(18, 12)),
                        color: 3823128
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, -13), ve.create(17, 2)),
                        color: 6368528
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    riverShore: !0,
                    nearbyRiver: {
                        radMin: .75,
                        radMax: 1.5,
                        facingOri: 1
                    }
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, -1.5), ve.create(18, 14))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(4, -14), ve.create(3, 2.5)), _e.createAabbExtents(ve.create(-4, 13.5), ve.create(2, 1))]
                    }],
                    imgs: [{
                        sprite: "map-building-cabin-floor.img",
                        pos: ve.create(0, -1),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, .5), ve.create(19, 12)), _e.createAabbExtents(ve.create(4, -13), ve.create(3, 2))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, .5), ve.create(21, 14)), _e.createAabbExtents(ve.create(4, -13), ve.create(3, 2))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    damage: {
                        obstacleCount: 1
                    },
                    imgs: [{
                        sprite: "map-building-cabin-ceiling-01a.img",
                        pos: ve.create(0, .5),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-cabin-ceiling-01b.img",
                        pos: ve.create(4, -13),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-chimney-01.img",
                        pos: ve.create(13, 2),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        removeOnDamaged: !0
                    }]
                },
                occupiedEmitters: [{
                    type: "cabin_smoke_parent",
                    pos: ve.create(0, 0),
                    rot: 0,
                    scale: 1,
                    layer: 0,
                    parentToCeiling: !0
                }],
                mapObjects: [{
                    type: "brick_wall_ext_12",
                    pos: ve.create(-12, 12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-2, 12.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(4, 12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(11.5, 12.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(15.5, 12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-18.5, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-18.75, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-18.5, .5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-18.75, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-18.5, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-15.5, -11),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-11.5, -11.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(-4, -11),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(2, -11.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(12, -11),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_15",
                    pos: ve.create(18.5, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(18.75, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(18.5, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.cabin_wall_int_5 || "cabin_wall_int_5",
                    pos: ve.create(-10.5, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.cabin_wall_int_10 || "cabin_wall_int_10",
                    pos: ve.create(-13, 2),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.cabin_wall_int_13 || "cabin_wall_int_13",
                    pos: ve.create(-3.5, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-10.5, 2.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-4, 2),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(-16, 9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "stand_01",
                    pos: ve.create(-12.5, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-15, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(-16, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "bed_lg_01",
                    pos: ve.create(-7, -6.75),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.cabin_mount || c({
                        gun_mount_01: 50,
                        gun_mount_05: 50,
                        gun_mount_04: 10,
                        gun_mount_02: 10,
                        gun_mount_03: 1
                    }),
                    pos: ve.create(4, 10.65),
                    scale: 1,
                    ori: 0
                }, {
                    type: "table_01",
                    pos: ve.create(4, 6.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "stove_01",
                    pos: ve.create(13, 2),
                    scale: 1,
                    ori: 3
                }, {
                    type: "woodpile_01",
                    pos: ve.create(13, -3),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(16, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(16, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.porch_01 || "",
                    pos: ve.create(-1, -13.5),
                    scale: .9,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ae(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(0, 0), ve.create(7, 7)),
                        color: 15181895
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, -18.9), ve.create(2, 12)),
                        color: 6171907
                    }]
                },
                terrain: {
                    waterEdge: {
                        dir: ve.create(0, 1),
                        distMin: -8.5,
                        distMax: 0
                    }
                },
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(7, 7)), _e.createAabbExtents(ve.create(0, -18.9), ve.create(2, 12))]
                    }],
                    imgs: [{
                        sprite: "map-building-hut-floor-01.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-hut-floor-02.img",
                        pos: ve.create(0, -18.9),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(6, 6))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(6, 6))],
                    vision: {
                        width: 4
                    },
                    imgs: [{
                        sprite: e.ceilingImg || "map-building-hut-ceiling-01.img",
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }],
                    destroy: {
                        wallCount: 2,
                        particle: "hutBreak",
                        particleCount: 25,
                        residue: "map-hut-res-01.img"
                    }
                },
                mapObjects: [{
                    type: "hut_wall_int_4",
                    pos: ve.create(-4, -6.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "hut_wall_int_4",
                    pos: ve.create(4, -6.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "hut_wall_int_5",
                    pos: ve.create(-6.5, 4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "hut_window_open_01",
                    pos: ve.create(-6.75, .5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "hut_wall_int_6",
                    pos: ve.create(-6.5, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "hut_wall_int_12",
                    pos: ve.create(0, 6.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "hut_wall_int_14",
                    pos: ve.create(6.5, 0),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        pot_01: 2,
                        "": 1
                    }),
                    pos: ve.create(4.5, 4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        pot_01: 2,
                        "": 1
                    }),
                    pos: ve.create(4.5, -4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        pot_01: 2,
                        "": 1
                    }),
                    pos: ve.create(-4.5, 4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        pot_01: 2,
                        "": 1
                    }),
                    pos: ve.create(-4.5, -4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.specialLoot || "pot_01",
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ie(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(-7.75, 3), ve.create(1, 2)),
                        color: 6171907
                    }, {
                        collider: _e.createAabbExtents(ve.create(5, -4.75), ve.create(2, 1)),
                        color: 6171907
                    }, {
                        collider: _e.createAabbExtents(ve.create(1, 1.5), ve.create(8, 5.5)),
                        color: 3754050
                    }, {
                        collider: _e.createAabbExtents(ve.create(-10.65, 7), ve.create(2, 12)),
                        color: 6171907
                    }]
                },
                terrain: {},
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(1, 1.5), ve.create(8, 5.5)), _e.createAabbExtents(ve.create(-10.65, 7), ve.create(2, 12)), _e.createAabbExtents(ve.create(-7.75, 3), ve.create(1, 2)), _e.createAabbExtents(ve.create(5, -4.75), ve.create(2, 1))]
                    }],
                    imgs: [{
                        sprite: "map-building-shack-floor-03.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-hut-floor-02.img",
                        pos: ve.create(-10.65, 7),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(1, 1.5), ve.create(7.75, 5.25))],
                    scopeOut: [_e.createAabbExtents(ve.create(1, 1.5), ve.create(7.75, 5.25))],
                    vision: {
                        width: 4
                    },
                    imgs: [{
                        sprite: "map-building-shack-ceiling-03.img",
                        pos: ve.create(.5, .5),
                        scale: .667,
                        alpha: 1,
                        tint: 10461087
                    }],
                    destroy: {
                        wallCount: 3,
                        particle: "shackGreenBreak",
                        particleCount: 30,
                        residue: "map-shack-res-03.img"
                    }
                },
                bridgeLandBounds: [_e.createAabbExtents(ve.create(-1.75, -4.25), ve.create(11.25, 4.75))],
                bridgeWaterBounds: [_e.createAabbExtents(ve.create(-10.5, 15.5), ve.create(3.5, 6))],
                mapObjects: [{
                    type: "shack_wall_ext_2",
                    pos: ve.create(-6.5, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_ext_14",
                    pos: ve.create(1, 6.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "shack_wall_ext_10",
                    pos: ve.create(8.5, 2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_ext_2",
                    pos: ve.create(8, -3.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "shack_wall_ext_9",
                    pos: ve.create(-1.5, -3.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "shack_wall_ext_5",
                    pos: ve.create(-6.5, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(-4.25, -1.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "pot_01",
                    pos: ve.create(-1.25, -1.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "table_01",
                    pos: ve.create(5.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-4.75, -5.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: "crate_20",
                    pos: ve.create(-1, -5.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: "loot_tier_leaf_pile",
                    pos: ve.create(-10.65, 16),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function re(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 1995644,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(15, 25)), _e.createAabbExtents(ve.create(-15, 9), ve.create(2.5, 4.5)), _e.createAabbExtents(ve.create(17.5, -7), ve.create(4.5, 2.5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "tile",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(13, 20))]
                    }, {
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(2, 20))]
                    }],
                    imgs: e.floor_images || [{
                        sprite: "map-building-greenhouse-floor-01.img",
                        pos: ve.create(0, 10),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-greenhouse-floor-01.img",
                        pos: ve.create(0, -10),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, 21),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, -21),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(12.5, 19.5))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(14, 22))],
                    vision: {
                        dist: 7.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: e.ceiling_images || [{
                        sprite: "map-building-greenhouse-ceiling-01.img",
                        pos: ve.create(0, -9.85),
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-greenhouse-ceiling-01.img",
                        pos: ve.create(0, 9.85),
                        scale: 1,
                        alpha: 1,
                        tint: 16777215,
                        mirrorY: !0
                    }],
                    destroy: {
                        wallCount: 7,
                        particle: "greenhouseBreak",
                        particleCount: 60,
                        residue: "",
                        sound: "ceiling_break_02"
                    }
                },
                mapObjects: [{
                    type: "glass_wall_10",
                    pos: ve.create(-7, 19.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-7, -19.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-12.5, 15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-12.5, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-12.5, -15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-12.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(7, 19.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(7, -19.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(12.5, 15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(12.5, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(12.5, -15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(12.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_05",
                    pos: ve.create(2, 19.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_05",
                    pos: ve.create(-2, -19.75),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(-4.5, 14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(-7, 2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(-7, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(-4.5, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(4.5, 14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(7, 2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(7, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        planter_01: 1,
                        planter_02: 1,
                        planter_03: 1
                    }),
                    pos: ve.create(4.5, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-15, 11),
                    scale: .9,
                    ori: 0
                }, {
                    type: "sandbags_02",
                    pos: ve.create(-15, 7),
                    scale: 1,
                    ori: 0
                }, {
                    type: "sandbags_02",
                    pos: ve.create(15.5, -7),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barrel_01",
                    pos: ve.create(19.5, -7),
                    scale: .9,
                    ori: 0
                }, {
                    type: "bunker_structure_08",
                    pos: ve.create(-9.5, -15.5),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function oe(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: []
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    spawnPriority: 10
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, -4), ve.create(55, 50))],
                bridgeLandBounds: [_e.createAabbExtents(ve.create(0, -4), ve.create(55, 50))],
                mapGroundPatches: [{
                    bound: _e.createAabbExtents(ve.create(0, 0), ve.create(55, 55)),
                    color: e.groundTintLt || 5195792,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(-28.5, 7), ve.create(7, 5)),
                    color: e.groundTintDk || 5986827,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(-24.5, -35), ve.create(5.5, 4.5)),
                    color: e.groundTintDk || 5986827,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(20, 10), ve.create(20, 30)),
                    color: e.groundTintDk || 5986827,
                    roughness: .05,
                    offsetDist: .5
                }],
                floor: {
                    surfaces: [{
                        type: "grass",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(55, 55))]
                    }],
                    imgs: []
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                    imgs: []
                },
                mapObjects: [{
                    type: "container_04",
                    pos: ve.create(3.75, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-1.35, 10.25),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-6, 12.25),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "barrel_01",
                    pos: ve.create(-2, 14.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "warehouse_02",
                    pos: ve.create(20, 10),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(35, 24.25),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(35, 29),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(39.75, 27),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_07",
                    pos: ve.create(47, 13),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_02",
                    pos: ve.create(50.5, 9.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "bunker_structure_06",
                    pos: ve.create(38, -12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        container_01: 1,
                        container_02: 1,
                        container_03: 1
                    }),
                    pos: ve.create(21, -32),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        container_01: 1,
                        container_02: 1,
                        container_03: 1
                    }),
                    pos: ve.create(21, -37.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "tree_07",
                    pos: ve.create(45.5, -31.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_07",
                    pos: ve.create(40.5, -36.5),
                    scale: 1.1,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(21.75, -50),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(26.75, -49),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_02",
                    pos: ve.create(44.5, -50.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_09",
                    pos: ve.create(-9, 34),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_02",
                    pos: ve.create(-13.5, 35.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_09",
                    pos: ve.create(-16.5, 32),
                    scale: 1,
                    ori: 3
                }, {
                    type: "tree_09",
                    pos: ve.create(-20, 36),
                    scale: 1,
                    ori: 2
                }, {
                    type: "tree_09",
                    pos: ve.create(-24.5, 33),
                    scale: 1,
                    ori: 3
                }, {
                    type: "tree_09",
                    pos: ve.create(-31.5, 37),
                    scale: 1,
                    ori: 2
                }, {
                    type: "tree_09",
                    pos: ve.create(-32.5, 32),
                    scale: 1,
                    ori: 1
                }, {
                    type: "tree_09",
                    pos: ve.create(-40, 35.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "tree_09",
                    pos: ve.create(-44.5, 32.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-33.5, 23.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-42.75, 21.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-30.5, 9),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        chest_02: 1,
                        case_04: 1
                    }),
                    pos: ve.create(-30.5, 4.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-25.75, 7),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-14.5, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-21, -8.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-36.5, -9),
                    scale: .9,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-34, -11.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "outhouse_01",
                    pos: ve.create(-48.5, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        outhouse_01: 5,
                        outhouse_02: 1
                    }),
                    pos: ve.create(-48.5, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "woodpile_01",
                    pos: ve.create(-51, -20.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-26.75, -36),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(-22, -34),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_09",
                    pos: ve.create(-14.5, -20),
                    scale: 1,
                    ori: 1
                }, {
                    type: "tree_09",
                    pos: ve.create(-11.5, -23),
                    scale: 1,
                    ori: 2
                }, {
                    type: "tree_09",
                    pos: ve.create(-15.5, -24),
                    scale: 1,
                    ori: 0
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-37, -34),
                    scale: 1,
                    ori: 1
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-31, -47),
                    scale: 1,
                    ori: 0
                }, {
                    type: "woodpile_02",
                    pos: ve.create(-18.75, -45.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-2.5, -35.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(.75, -37.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "tree_07",
                    pos: ve.create(1, -33),
                    scale: 1.2,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ne(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: []
                },
                terrain: {
                    grass: !0,
                    beach: !1,
                    spawnPriority: 10
                },
                mapObstacleBounds: [_e.createCircle(ve.create(0, 0), 40)],
                mapGroundPatches: [{
                    bound: _e.createAabbExtents(ve.create(5, 21.5), ve.create(5.5, 6)),
                    color: e.groundTintDk || 7563810,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(-17.75, -14), ve.create(6, 4.5)),
                    color: e.groundTintDk || 7563810,
                    roughness: .05,
                    offsetDist: .5
                }, {
                    bound: _e.createAabbExtents(ve.create(21.5, -10), ve.create(4.75, 3.5)),
                    color: e.groundTintDk || 7563810,
                    roughness: .05,
                    offsetDist: .5
                }],
                floor: {
                    surfaces: [{
                        type: "grass",
                        collision: []
                    }],
                    imgs: []
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                    imgs: []
                },
                mapObjects: [{
                    type: e.tree_08c || "tree_08c",
                    pos: ve.create(0, 0),
                    scale: 2,
                    ori: 0
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(2.5, 19.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(7.5, 19),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: c({
                        crate_01: 4,
                        crate_19: 1
                    }),
                    pos: ve.create(3.5, 24.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "crate_04",
                    pos: ve.create(-20.5, -13.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_04",
                    pos: ve.create(-15, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(23.5, -9.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(20, -11),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function se(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(-1.5, 20.5), ve.create(12.5, 4.5)),
                        color: 8671554
                    }, {
                        collider: _e.createAabbExtents(ve.create(-2, -23), ve.create(3, 2.5)),
                        color: 8671554
                    }, {
                        collider: _e.createAabbExtents(ve.create(-20.5, -22.5), ve.create(10, 2)),
                        color: 7750457
                    }, {
                        collider: _e.createAabbExtents(ve.create(28, 1.5), ve.create(3.75, 3)),
                        color: 7237230
                    }, {
                        collider: _e.createAabbExtents(ve.create(-3.5, -2), ve.create(28, 18.5)),
                        color: 6175023
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "tile",
                        collision: [_e.createAabbExtents(ve.create(-3.5, -2), ve.create(28, 18.5)), _e.createAabbExtents(ve.create(-1.5, 20.5), ve.create(12.5, 4.5)), _e.createAabbExtents(ve.create(0, 0), ve.create(20, 20))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(-21, -17), ve.create(11, 8)), _e.createAabbExtents(ve.create(-23, -6), ve.create(8, 3)), _e.createAabbExtents(ve.create(-2, -24), ve.create(2, 3)), _e.createAabbExtents(ve.create(28, 1.5), ve.create(3, 3))]
                    }, {
                        type: "grass",
                        collision: [_e.createAabbExtents(ve.create(-2, 4), ve.create(5, 5))]
                    }, {
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(1, 13), ve.create(2, 3.25))]
                    }],
                    imgs: [{
                        sprite: "map-building-mansion-floor-01a.img",
                        pos: ve.create(-1.5, 22),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-floor-01b.img",
                        pos: ve.create(-3.5, -2),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-floor-01c.img",
                        pos: ve.create(28.5, 1.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-floor-01d.img",
                        pos: ve.create(-15, -24),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(-15, -22.4), ve.create(17, 2.2)), _e.createAabbExtents(ve.create(-3.5, -2), ve.create(28, 18.5)), _e.createAabbExtents(ve.create(-1.5, 20.6), ve.create(12, 4.2))],
                    scopeOut: [_e.createAabbExtents(ve.create(-15, -24.4), ve.create(21, 4.2)), _e.createAabbExtents(ve.create(-3.5, -2), ve.create(28, 18.5)), _e.createAabbExtents(ve.create(-9, 23.1), ve.create(5, 6.7))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-mansion-ceiling.img",
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_9",
                    pos: ve.create(-31.5, -16.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-31.75, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_19",
                    pos: ve.create(-31.5, .5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-31.75, 11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-31.5, 15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_17",
                    pos: ve.create(-22.5, 16.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(-13.5, 20.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-13, 24.9),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_19",
                    pos: ve.create(.5, 24.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(10.5, 20.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_13",
                    pos: ve.create(17.5, 16.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(24.5, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(24.75, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_18",
                    pos: ve.create(24.5, -1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(24.75, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(24.5, -17),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(20.5, -20.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(15.5, -20.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_14",
                    pos: ve.create(7, -20.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-4, -21),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-7, -20.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_short_7",
                    pos: ve.create(28.5, 4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_short_7",
                    pos: ve.create(28.5, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(-7, -20.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_column_1 || "mansion_column_1",
                    pos: ve.create(-5, -24),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_column_1 || "mansion_column_1",
                    pos: ve.create(1, -24),
                    scale: 1,
                    ori: 1
                }, {
                    type: "saferoom_01",
                    pos: ve.create(-25.5, 1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_12 || "mansion_wall_int_12",
                    pos: ve.create(-25, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-19, -2.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.mansion_wall_int_1 || "mansion_wall_int_1",
                    pos: ve.create(-30.5, 5.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_03",
                    pos: ve.create(-30.25, 5.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.mansion_wall_int_13 || "mansion_wall_int_13",
                    pos: ve.create(-20.5, 5.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_7 || "mansion_wall_int_7",
                    pos: ve.create(-19.5, 1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-14.5, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_6 || "mansion_wall_int_6",
                    pos: ve.create(-14.5, 13),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_6 || "mansion_wall_int_6",
                    pos: ve.create(-14.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_10 || "mansion_wall_int_10",
                    pos: ve.create(-10, -8.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_11 || "mansion_wall_int_11",
                    pos: ve.create(-9.5, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(-7.5, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(-1.5, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(3.5, 14),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_12",
                    pos: ve.create(-2, 9.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "stairs_01",
                    pos: ve.create(-4.5, 12),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(-7.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_10",
                    pos: ve.create(3.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "glass_wall_12",
                    pos: ve.create(-2, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(10.5, 16),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.mansion_wall_int_9 || "mansion_wall_int_9",
                    pos: ve.create(10.5, 7.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(10.5, -1),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_8 || "mansion_wall_int_8",
                    pos: ve.create(10.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.mansion_wall_int_9 || "mansion_wall_int_9",
                    pos: ve.create(15.5, 4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_9 || "mansion_wall_int_9",
                    pos: ve.create(15.5, -1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_5 || "mansion_wall_int_5",
                    pos: ve.create(19.5, 1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(24, 1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_wall_int_5 || "mansion_wall_int_5",
                    pos: ve.create(3.5, -8.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(6, -8.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.mansion_wall_int_11 || "mansion_wall_int_11",
                    pos: ve.create(5.5, -14.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        bookshelf_01: 6,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(-27.25, 7.15),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        bookshelf_01: 6,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(-27.25, 14.85),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-11.5, -11.75),
                    scale: 1,
                    ori: 3
                }, {
                    type: "stand_01",
                    pos: ve.create(-7.5, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "stand_01",
                    pos: ve.create(3.5, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        bookshelf_01: 6,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(7.25, -16.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "piano_01",
                    pos: ve.create(14.9, -3.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "toilet_01",
                    pos: ve.create(17, 1.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "refrigerator_01",
                    pos: ve.create(22.15, 14.4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "oven_01",
                    pos: ve.create(12.75, 6.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "oven_01",
                    pos: ve.create(12.75, 10.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "table_02",
                    pos: ve.create(15.75, -14.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.entry_loot || "",
                    pos: ve.create(-2, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "loot_tier_mansion_floor",
                    pos: ve.create(-2, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(-21, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(18, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(6, 20.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(-30.15, 15),
                    scale: .8,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(1.5, 11.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(8.5, 22.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(22.5, 14.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(22.5, -18.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.tree || "tree_interior_01",
                    pos: ve.create(-2, 4),
                    scale: e.tree_scale || .6,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: e.tree_loot || "",
                    pos: ve.create(-2.25, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.tree_loot || "",
                    pos: ve.create(-1.75, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.tree_loot || "",
                    pos: ve.create(-2, 4.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.tree_loot || "",
                    pos: ve.create(-2, 3.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        bush_01: 25,
                        bush_03: 1,
                        "": e.bush_chance || 0
                    }),
                    pos: ve.create(-4.75, 1.25),
                    scale: .9,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        bush_01: 25,
                        bush_03: 1,
                        "": e.bush_chance || 0
                    }),
                    pos: ve.create(.75, 1.25),
                    scale: .9,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        bush_01: 25,
                        bush_03: 1,
                        "": e.bush_chance || 0
                    }),
                    pos: ve.create(-4.75, 6.75),
                    scale: .9,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        bush_01: 25,
                        bush_03: 1,
                        "": e.bush_chance || 0
                    }),
                    pos: ve.create(.75, 6.75),
                    scale: .9,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: e.porch_01 || "bush_01",
                    pos: ve.create(-8, -23),
                    scale: .95,
                    ori: 0
                }, {
                    type: e.porch_01 || "bush_01",
                    pos: ve.create(4, -23),
                    scale: .95,
                    ori: 0
                }, {
                    type: "shack_01",
                    pos: ve.create(-20.75, 22.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "crate_01",
                    pos: ve.create(13.25, 19.25),
                    scale: .9,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "tree_01",
                    pos: ve.create(24, 24),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_02",
                    pos: ve.create(27, -4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(29, -17.25),
                    scale: .7,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function le(e) {
            var t = {
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
                    surfaces: [{
                        type: "brick",
                        collision: [_e.createAabbExtents(ve.create(18, 3), ve.create(7, 13)), _e.createAabbExtents(ve.create(5, 0), ve.create(6, 10))]
                    }],
                    imgs: [{
                        sprite: "map-building-mansion-cellar-02.img",
                        pos: ve.create(-3.75, .25),
                        scale: 2,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-cellar-01a.img",
                        pos: ve.create(11.5, 5.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-cellar-01b.img",
                        pos: ve.create(28.5, 1.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-mansion-cellar-01c.img",
                        pos: ve.create(11.5, -9),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(18, 3), ve.create(7, 13)), _e.createAabbExtents(ve.create(5, 1.5), ve.create(6, 12))],
                    scopeOut: [_e.createAabbExtents(ve.create(18, 3), ve.create(7, 13)), _e.createAabbExtents(ve.create(5, 1.5), ve.create(6, 12))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: []
                },
                mapObjects: [{
                    type: "brick_wall_ext_thicker_24",
                    pos: ve.create(-2.5, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_8",
                    pos: ve.create(0, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_7",
                    pos: ve.create(5.5, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_9",
                    pos: ve.create(11.5, -11.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_7",
                    pos: ve.create(17.5, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_5",
                    pos: ve.create(21.5, -7.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_8",
                    pos: ve.create(25.5, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_15",
                    pos: ve.create(25.5, 11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_16",
                    pos: ve.create(16, 17.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_7",
                    pos: ve.create(9.5, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_5",
                    pos: ve.create(5.5, 10.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_5",
                    pos: ve.create(29.5, 5.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_thicker_5",
                    pos: ve.create(29.5, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "concrete_wall_ext_7",
                    pos: ve.create(31.5, 1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_thicker_6",
                    pos: ve.create(4.5, 15),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(1, 17.6),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(8.5, -9.53),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(11.5, -9.53),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(14.5, -9.53),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(12.75, 15.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(15.75, 15.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        barrel_03: 9,
                        barrel_04: 1
                    }),
                    pos: ve.create(18.75, 15.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(22.25, 14.25),
                    scale: .75,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        bookshelf_01: 7,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(22.75, 8),
                    scale: 1,
                    ori: 3
                }, {
                    type: e.mansion_column_1 || "mansion_column_1",
                    pos: ve.create(5.5, 1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mansion_column_1 || "mansion_column_1",
                    pos: ve.create(17.5, 1.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.mid_obs_01 || "barrel_02",
                    pos: ve.create(8.5, 1.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(11.5, 1.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: e.mid_obs_01 || "barrel_02",
                    pos: ve.create(14.5, 1.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(16.5, 7.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_02 || "",
                    pos: ve.create(11.5, -5.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(.5, -4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(22.5, 14.5),
                    scale: 1,
                    ori: 3
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ce(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 8145976,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 1.4), ve.create(5.5, 6.5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(0, .15), ve.create(3.75, 4.75))]
                    }],
                    imgs: [{
                        sprite: "map-building-outhouse-floor.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 1.45), ve.create(3.6, 3.2))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 1.4), ve.create(3.8, 3.4))],
                    imgs: [{
                        sprite: "map-building-outhouse-ceiling.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }],
                    destroy: {
                        wallCount: 2,
                        particleCount: 15,
                        particle: "outhouseBreak",
                        residue: "map-outhouse-res.img"
                    }
                },
                mapObjects: [{
                    type: "outhouse_wall_top",
                    pos: ve.create(0, 4.46),
                    scale: 1,
                    ori: 0
                }, {
                    type: "outhouse_wall_side",
                    pos: ve.create(3.4, 1.73),
                    scale: 1,
                    ori: 0
                }, {
                    type: "outhouse_wall_side",
                    pos: ve.create(-3.4, 1.73),
                    scale: 1,
                    ori: 0
                }, {
                    type: "outhouse_wall_bot",
                    pos: ve.create(-2.65, -1.52),
                    scale: 1,
                    ori: 0
                }, {
                    type: "outhouse_wall_bot",
                    pos: ve.create(2.65, -1.52),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.obs || c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(0, 2),
                    scale: .95,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function me(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(-21, -8), ve.create(21.25, 14)),
                        color: 5855577
                    }, {
                        collider: _e.createAabbExtents(ve.create(-24.5, 8.5), ve.create(17.75, 9.75)),
                        color: 3355970
                    }, {
                        collider: _e.createAabbExtents(ve.create(-3.5, 12), ve.create(3.5, 6.25)),
                        color: 4278620
                    }, {
                        collider: _e.createAabbExtents(ve.create(10.35, 0), ve.create(10.5, 22)),
                        color: 3355970
                    }, {
                        collider: _e.createAabbExtents(ve.create(31.25, 12.5), ve.create(10.75, 9.5)),
                        color: 3355970
                    }, {
                        collider: _e.createAabbExtents(ve.create(-3.5, 2.5), ve.create(2.25, 2.25)),
                        color: 6310464
                    }, {
                        collider: _e.createCircle(ve.create(-30.5, -18), 1.5),
                        color: 8026746
                    }, {
                        collider: _e.createCircle(ve.create(-20.5, -10.5), 1.5),
                        color: 8026746
                    }, {
                        collider: _e.createAabbExtents(ve.create(-38.5, -7), ve.create(1.4, 3.1)),
                        color: 13278307
                    }, {
                        collider: _e.createAabbExtents(ve.create(-7.5, -19.5), ve.create(3.1, 1.4)),
                        color: 13278307
                    }]
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "tile",
                        collision: [_e.createAabbExtents(ve.create(-24.5, 8.5), ve.create(17.75, 9.75)), _e.createAabbExtents(ve.create(-3.5, 12), ve.create(3.5, 6.25)), _e.createAabbExtents(ve.create(10.35, 0), ve.create(10.5, 22)), _e.createAabbExtents(ve.create(31.25, 12.5), ve.create(10.75, 9.5))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(-21.5, -13), ve.create(21, 11.5)), _e.createAabbExtents(ve.create(-3.5, 2), ve.create(3, 3.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-police-floor-01.img",
                        pos: ve.create(-9.5, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-police-floor-02.img",
                        pos: ve.create(33, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(-24.5, 8.5), ve.create(17.75, 9.75)), _e.createAabbExtents(ve.create(-3.5, 12), ve.create(3.5, 6.25)), _e.createAabbExtents(ve.create(10.35, 0), ve.create(10.5, 22)), _e.createAabbExtents(ve.create(31.25, 12.5), ve.create(10.75, 9.5))],
                    scopeOut: [_e.createAabbExtents(ve.create(12, 0), ve.create(12.75, 26))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-police-ceiling-01.img",
                        pos: ve.create(-21.5, 8.5),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-police-ceiling-02.img",
                        pos: ve.create(10.5, 0),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-police-ceiling-03.img",
                        pos: ve.create(31.96, 12.5),
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_20",
                    pos: ve.create(-42, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_41",
                    pos: ve.create(-21, 18),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(-38, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_21",
                    pos: ve.create(-18, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(-7, 2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_7",
                    pos: ve.create(-4, 6),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_16",
                    pos: ve.create(0, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-.5, -11),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_10",
                    pos: ve.create(0, -17.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(3.5, -22),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(6.5, -22.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(14.5, -22.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_6",
                    pos: ve.create(17.5, -22),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_11",
                    pos: ve.create(21, -17),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(21.5, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_11",
                    pos: ve.create(21, -2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_20",
                    pos: ve.create(31.5, 3),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_20",
                    pos: ve.create(42, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_33",
                    pos: ve.create(25, 22),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(4.5, 22.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(2.5, 22),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(0, 20),
                    scale: 1,
                    ori: 0
                }, {
                    type: "police_wall_int_2",
                    pos: ve.create(-40.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_3",
                    pos: ve.create(-34, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "cell_door_01",
                    pos: ve.create(-35.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_8",
                    pos: ve.create(-35, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "police_wall_int_3",
                    pos: ve.create(-27, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_8",
                    pos: ve.create(-28, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "cell_door_01",
                    pos: ve.create(-21.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_3",
                    pos: ve.create(-20, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_8",
                    pos: ve.create(-21, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "cell_door_01",
                    pos: ve.create(-14.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_3",
                    pos: ve.create(-13, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_8",
                    pos: ve.create(-14, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "cell_door_01",
                    pos: ve.create(-7.5, 8),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_6",
                    pos: ve.create(-7, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "police_wall_int_7",
                    pos: ve.create(-4, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_02",
                    pos: ve.create(-7, 17.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "police_wall_int_4",
                    pos: ve.create(2.5, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_window_01",
                    pos: ve.create(6, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_6",
                    pos: ve.create(10.5, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bank_window_01",
                    pos: ve.create(15, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "police_wall_int_4",
                    pos: ve.create(18.5, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(21, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "police_wall_int_10",
                    pos: ve.create(21, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(21, 21.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "metal_wall_ext_10",
                    pos: ve.create(35.5, 4),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(33, 4.15),
                    scale: 1,
                    ori: 2
                }, {
                    type: "metal_wall_ext_10",
                    pos: ve.create(35.5, 21),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(33, 20.85),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(38, 20.85),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_18",
                    pos: ve.create(41, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(40.85, 7.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(40.85, 17.5),
                    scale: 1,
                    ori: 3
                }, {
                    type: "metal_wall_ext_thicker_10",
                    pos: ve.create(35.5, 12.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(38, 11.35),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        locker_01: 8,
                        locker_02: 1
                    }),
                    pos: ve.create(33, 13.65),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_03: 5,
                        toilet_04: 1
                    }),
                    pos: ve.create(-37, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_03: 5,
                        toilet_04: 1
                    }),
                    pos: ve.create(-23, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_03: 5,
                        toilet_04: 1
                    }),
                    pos: ve.create(-16, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: c({
                        toilet_03: 5,
                        toilet_04: 1
                    }),
                    pos: ve.create(-9, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: "control_panel_01",
                    pos: ve.create(-4.5, 9.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "crate_06",
                    pos: ve.create(-24.5, 20.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(14.5, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(18.75, 12.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "fire_ext_01",
                    pos: ve.create(21.85, 12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(10.5, 1.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "vending_01",
                    pos: ve.create(2, -6.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "stand_01",
                    pos: ve.create(2, -14.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "bush_01",
                    pos: ve.create(2.5, -19.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "bush_01",
                    pos: ve.create(18.5, -19.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: c({
                        loot_tier_police_floor: 1
                    }),
                    pos: ve.create(-38.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(-31.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(-24.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(-17.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(-10.5, 4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(-3.5, 2.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "sandbags_01",
                    pos: ve.create(-38.5, -7),
                    scale: 1,
                    ori: 3
                }, {
                    type: "sandbags_01",
                    pos: ve.create(-7.5, -19.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-30.5, -18),
                    scale: .9,
                    ori: 0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-20.5, -10.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(39, -6),
                    scale: .8,
                    ori: 0
                }, {
                    type: "tree_01",
                    pos: ve.create(28, -17.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: "hedgehog_01",
                    pos: ve.create(39, -17.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(24.5, -.5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function pe(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 6429724,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(19, 17.5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(14.5, 13))]
                    }],
                    imgs: [{
                        sprite: "map-building-house-floor-01.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(-1, 14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(14.5, 13))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(16.5, 15))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-house-ceiling.img",
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_12",
                    pos: ve.create(-9, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_14",
                    pos: ve.create(8, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(1, 13.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-14.5, 10),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_10",
                    pos: ve.create(-14.5, -.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-14.5, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-14.75, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-14.75, -7),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-12.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-4.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(4.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(12.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-8.5, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_window_01",
                    pos: ve.create(8.5, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(-2, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(14.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(14.5, -3),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_2",
                    pos: ve.create(14.5, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(14.75, -9),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_window_01",
                    pos: ve.create(14.75, 3),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.house_wall_int_9 || "house_wall_int_9",
                    pos: ve.create(-9.5, -1),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_5 || "house_wall_int_5",
                    pos: ve.create(4.5, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_wall_int_9 || "house_wall_int_9",
                    pos: ve.create(9.5, -4),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_8 || "house_wall_int_8",
                    pos: ve.create(5.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_wall_int_4 || "house_wall_int_4",
                    pos: ve.create(8, 7),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(4.5, -12.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(6, 2.5),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_door_01",
                    pos: ve.create(14, 7),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_column_1 || "house_column_1",
                    pos: ve.create(6, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_column_1 || "house_column_1",
                    pos: ve.create(6, -2.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(8, 10),
                    scale: 1,
                    ori: 1
                }, {
                    type: "stand_01",
                    pos: ve.create(12.25, -2),
                    scale: 1,
                    ori: 3
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(7.75, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.stand || "",
                    pos: ve.create(-12.25, -3),
                    scale: 1,
                    ori: 1
                }, {
                    type: "table_01",
                    pos: ve.create(-11.25, 1.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: "oven_01",
                    pos: ve.create(-7, 11),
                    scale: 1,
                    ori: 0
                }, {
                    type: "refrigerator_01",
                    pos: ve.create(-7, 1),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.plant || "bush_02",
                    pos: e.plant_pos || ve.create(-12, -10.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: e.porch_01 || "",
                    pos: ve.create(4.5, -15.5),
                    scale: .9,
                    ori: 0
                }, {
                    type: e.porch_01 || "",
                    pos: ve.create(-5.25, 15.5),
                    scale: .9,
                    ori: 2
                }, {
                    type: "loot_tier_1",
                    pos: ve.create(0, 4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(-10.25, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(-10, -8.75),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(-9.75, -8.25),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function de(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 4656911,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, -1), ve.create(19, 18.5))],
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "house",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(14.5, 13))]
                    }],
                    imgs: [{
                        sprite: "map-building-house-floor-02.img",
                        pos: ve.create(0, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(10, 14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(2.6, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(5.2, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(7.8, -14.5),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, -16.25),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(2.6, -16.25),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(5.2, -16.25),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(7.8, -16.25),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(14.5, 13))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(16.5, 15))],
                    vision: {
                        dist: 5.5,
                        width: 2.75,
                        linger: .5,
                        fadeRate: 6
                    },
                    imgs: [{
                        sprite: "map-building-house-ceiling.img",
                        scale: .667,
                        alpha: 1,
                        tint: 13619151,
                        rot: 2
                    }]
                },
                mapObjects: [{
                    type: "brick_wall_ext_5",
                    pos: ve.create(-12.5, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-8.5, 13.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_15",
                    pos: ve.create(.5, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_3",
                    pos: ve.create(13.5, 13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(12, 13.25),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-14.5, 10),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_10",
                    pos: ve.create(-14.5, -.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_4",
                    pos: ve.create(-14.5, -10.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-14.75, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(-14.75, -7),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-12.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_5",
                    pos: ve.create(-4.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "brick_wall_ext_13",
                    pos: ve.create(8.5, -13),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_window_01",
                    pos: ve.create(-8.5, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "house_door_01",
                    pos: ve.create(-2, -13.25),
                    scale: 1,
                    ori: 3
                }, {
                    type: "brick_wall_ext_8",
                    pos: ve.create(14.5, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_9",
                    pos: ve.create(14.5, -3),
                    scale: 1,
                    ori: 0
                }, {
                    type: "brick_wall_ext_2",
                    pos: ve.create(14.5, -11.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_window_01",
                    pos: ve.create(14.75, -9),
                    scale: 1,
                    ori: 2
                }, {
                    type: "house_window_01",
                    pos: ve.create(14.75, 3),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.house_wall_int_5 || "house_wall_int_5",
                    pos: ve.create(-.5, 10),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_wall_int_14 || "house_wall_int_14",
                    pos: ve.create(-7, 3),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_11 || "house_wall_int_11",
                    pos: ve.create(-8.5, -2),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_4 || "house_wall_int_4",
                    pos: ve.create(12, 1),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.house_wall_int_4 || "house_wall_int_4",
                    pos: ve.create(12, -7),
                    scale: 1,
                    ori: 1
                }, {
                    type: "house_door_01",
                    pos: ve.create(-.5, 3.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "house_door_01",
                    pos: ve.create(-3.5, -1.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.house_column_1 || "house_column_1",
                    pos: ve.create(4, -3),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        toilet_01: 5,
                        toilet_02: 1
                    }),
                    pos: ve.create(-11.75, .5),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.stand || "",
                    pos: ve.create(-12.5, 11),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        drawers_01: 7,
                        drawers_02: 1
                    }),
                    pos: ve.create(-3.75, 11),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        bookshelf_01: 7,
                        bookshelf_02: 1
                    }),
                    pos: ve.create(13, -3),
                    scale: 1,
                    ori: 3
                }, {
                    type: "table_03",
                    pos: ve.create(-8.5, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: "oven_01",
                    pos: ve.create(-12.25, -11),
                    scale: 1,
                    ori: 2
                }, {
                    type: "refrigerator_01",
                    pos: ve.create(-4.5, -11),
                    scale: 1,
                    ori: 2
                }, {
                    type: e.plant || "bush_02",
                    pos: e.plant_pos || ve.create(2, 10.5),
                    scale: 1,
                    ori: 0,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "loot_tier_1",
                    pos: ve.create(0, -4.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(4.25, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(3.75, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.plant_loot || "",
                    pos: ve.create(4, 8.25),
                    scale: 1,
                    ori: 0
                }, {
                    type: "grill_01",
                    pos: ve.create(6, -15.25),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function he(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 6707790,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(0, .9), ve.create(5.6, 3.5))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(3.75, -4), ve.create(2.25, 1.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-shack-floor-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, .9), ve.create(5.6, 3.5))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, .8), ve.create(5.9, 3.8))],
                    vision: {
                        width: 4
                    },
                    imgs: [{
                        sprite: "map-building-shack-ceiling-01.img",
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }],
                    destroy: {
                        wallCount: 2,
                        particle: "shackBreak",
                        particleCount: 25,
                        residue: "map-shack-res-01.img"
                    }
                },
                mapObjects: [{
                    type: "shack_wall_bot",
                    pos: ve.create(-1.49, -2.4),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_side_left",
                    pos: ve.create(-5.55, .69),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_top",
                    pos: ve.create(-.3, 4.33),
                    scale: 1,
                    ori: 0
                }, {
                    type: "shack_wall_side_right",
                    pos: ve.create(5.55, .95),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(7.9, 2.85),
                    scale: .8,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "barrel_01",
                    pos: ve.create(7.45, -.9),
                    scale: .85,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_2: 1
                    }),
                    pos: ve.create(-2, .8),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(2, .8),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ue(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    color: 4014894,
                    scale: 1
                },
                terrain: {
                    grass: !0,
                    beach: !1
                },
                zIdx: 1,
                floor: {
                    surfaces: [{
                        type: "shack",
                        collision: [_e.createAabbExtents(ve.create(0, 1), ve.create(5, 4))]
                    }, {
                        type: "asphalt",
                        collision: [_e.createAabbExtents(ve.create(0, -4), ve.create(2, 1))]
                    }],
                    imgs: [{
                        sprite: "map-building-shack-floor-02.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 1), ve.create(4.75, 3.75))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 1), ve.create(0, 0))],
                    vision: {
                        width: 4
                    },
                    imgs: [{
                        sprite: "map-building-shack-ceiling-02.img",
                        scale: .667,
                        alpha: 1,
                        tint: 16777215
                    }],
                    destroy: {
                        wallCount: 2,
                        particle: "shackBreak",
                        particleCount: 25,
                        residue: "map-shack-res-02.img"
                    }
                },
                mapObjects: [{
                    type: "barn_wall_int_2",
                    pos: ve.create(-3, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_2",
                    pos: ve.create(3, -2.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(-4.5, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(4.5, 1),
                    scale: 1,
                    ori: 0
                }, {
                    type: "barn_wall_int_8",
                    pos: ve.create(0, 4.5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barrel_01",
                    pos: ve.create(4, -4.5),
                    scale: .8,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1
                    }),
                    pos: ve.create(0, 1),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ge(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(27, 0), ve.create(3, 12.25)),
                        color: 10066329
                    }, {
                        collider: _e.createAabbExtents(ve.create(-27, 0), ve.create(3, 12.25)),
                        color: 10066329
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, 0), ve.create(24.5, 12.25)),
                        color: 5915450
                    }]
                },
                zIdx: 1,
                terrain: {
                    grass: !0,
                    beach: !1
                },
                mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(35, 16))],
                floor: {
                    surfaces: [{
                        type: "warehouse",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(32, 12.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-warehouse-floor-01.img",
                        pos: ve.create(-15.615, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-warehouse-floor-01.img",
                        pos: ve.create(15.615, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(24.5, 12.25))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(32, 12.5))],
                    vision: {
                        dist: 8,
                        width: 5
                    },
                    imgs: [{
                        sprite: "map-building-warehouse-ceiling-01.img",
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "warehouse_wall_side",
                    pos: ve.create(0, 11.9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_edge",
                    pos: ve.create(-24.4, 8.2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_edge",
                    pos: ve.create(24.4, 8.2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_side",
                    pos: ve.create(0, -11.9),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_edge",
                    pos: ve.create(-24.4, -8.2),
                    scale: 1,
                    ori: 0
                }, {
                    type: "warehouse_wall_edge",
                    pos: ve.create(24.4, -8.2),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.topLeftObs,
                    pos: ve.create(-21.25, 8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "crate_04",
                    pos: ve.create(-16.25, 8.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: "crate_01",
                    pos: ve.create(-21.25, -8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "barrel_01",
                    pos: ve.create(-16.5, -8.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: e.topRightObs,
                    pos: ve.create(21.25, 8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "barrel_01",
                    pos: ve.create(16.5, 8.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: "crate_04",
                    pos: ve.create(16.25, -8.75),
                    scale: 1,
                    ori: 1
                }, {
                    type: e.botRightObs,
                    pos: ve.create(21.25, -8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: c({
                        crate_02: 1,
                        crate_01: 3
                    }),
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "crate_01",
                    pos: ve.create(5, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "crate_01",
                    pos: ve.create(-5, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: e.ignoreMapSpawnReplacement
                }, {
                    type: "crate_04",
                    pos: ve.create(0, 5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_04",
                    pos: ve.create(0, -5),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(-9, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: e.decoration_01 || "",
                    pos: ve.create(9, -6),
                    scale: 1,
                    ori: 0
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function ye(e) {
            var t = {
                type: "building",
                map: {
                    display: !0,
                    shapes: [{
                        collider: _e.createAabbExtents(ve.create(25, 0), ve.create(3, 12.25)),
                        color: 10066329
                    }, {
                        collider: _e.createAabbExtents(ve.create(-25, 0), ve.create(3, 12.25)),
                        color: 10066329
                    }, {
                        collider: _e.createAabbExtents(ve.create(0, 0), ve.create(22.5, 12.25)),
                        color: 2240064
                    }]
                },
                zIdx: 1,
                terrain: {
                    grass: !0,
                    beach: !1
                },
                floor: {
                    surfaces: [{
                        type: "warehouse",
                        collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(27.5, 12.5))]
                    }],
                    imgs: [{
                        sprite: "map-building-warehouse-floor-02.img",
                        pos: ve.create(-13.72, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }, {
                        sprite: "map-building-warehouse-floor-02.img",
                        pos: ve.create(13.72, 0),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }]
                },
                ceiling: {
                    scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(22, 12.25))],
                    scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(27.5, 12.5))],
                    vision: {
                        dist: 8,
                        width: 5
                    },
                    imgs: [{
                        sprite: "map-building-warehouse-ceiling-02.img",
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }]
                },
                mapObjects: [{
                    type: "metal_wall_ext_43",
                    pos: ve.create(0, 12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_8",
                    pos: ve.create(-21.9, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_8",
                    pos: ve.create(21.9, 8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_43",
                    pos: ve.create(0, -12),
                    scale: 1,
                    ori: 1
                }, {
                    type: "metal_wall_ext_8",
                    pos: ve.create(-21.9, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "metal_wall_ext_8",
                    pos: ve.create(21.9, -8.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(-18.75, 8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "barrel_01",
                    pos: ve.create(-14, 8.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(-18.75, -6),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(-19.5, -9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_06",
                    pos: ve.create(18.75, 6),
                    scale: 1,
                    ori: 0
                }, {
                    type: c({
                        loot_tier_1: 1,
                        "": 1
                    }),
                    pos: ve.create(19.5, 9.5),
                    scale: 1,
                    ori: 0
                }, {
                    type: "crate_01",
                    pos: ve.create(18.75, -8.75),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "barrel_01",
                    pos: ve.create(14, -8.75),
                    scale: .9,
                    ori: 0
                }, {
                    type: c({
                        crate_08: 24,
                        crate_09: 1
                    }),
                    pos: ve.create(0, 0),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "crate_01",
                    pos: ve.create(0, 5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "crate_01",
                    pos: ve.create(0, -5),
                    scale: 1,
                    ori: 0,
                    inheritOri: !1,
                    ignoreMapSpawnReplacement: !0
                }, {
                    type: "crate_06",
                    pos: ve.create(4, -5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "crate_06",
                    pos: ve.create(-4, 5),
                    scale: 1,
                    ori: 1
                }, {
                    type: "barrel_01",
                    pos: ve.create(4.5, 0),
                    scale: .9,
                    ori: 0,
                    inheritOri: !1
                }, {
                    type: "barrel_01",
                    pos: ve.create(-4.5, 0),
                    scale: .9,
                    ori: 0,
                    inheritOri: !1
                }]
            };
            return ke.mergeDeep(t, e || {})
        }

        function we(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.4, 2)),
                height: 10,
                collidable: !0,
                destructible: !0,
                isWindow: !0,
                health: 1,
                hitParticle: "glassChip",
                explodeParticle: "windowBreak",
                reflectBullets: !1,
                loot: [],
                destroyType: "house_window_broken_01",
                img: {
                    sprite: "map-building-house-window-01.img",
                    residue: "none",
                    scale: .5,
                    alpha: 1,
                    tint: 16777215,
                    zIdx: 10
                },
                sound: {
                    bullet: "glass_bullet",
                    punch: "glass_bullet",
                    explode: "window_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }

        function xe(e) {
            var t = {
                type: "obstacle",
                scale: {
                    createMin: 1,
                    createMax: 1,
                    destroy: 1
                },
                collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.4, 2)),
                height: .2,
                isWall: !0,
                collidable: !0,
                destructible: !1,
                health: 100,
                hitParticle: "woodChip",
                explodeParticle: "woodPlank",
                reflectBullets: !1,
                loot: [],
                img: {
                    sprite: "map-building-house-window-res-01.img",
                    scale: .5,
                    alpha: 1,
                    tint: 4456448,
                    zIdx: 10
                },
                sound: {
                    bullet: "wall_wood_bullet",
                    punch: "wall_wood_bullet",
                    explode: "wall_wood_break_01",
                    enter: "none"
                }
            };
            return ke.mergeDeep(t, e || {})
        }
        var fe = a("0e566746"),
            be = a("34e32c48"),
            _e = a("6b42806d"),
            Se = a("10899aea"),
            ke = a("1901e2d9"),
            ve = a("c2a798c8"),
            ze = {},
            Me = {
                DesertWheelActivated: 0
            },
            Te = {
                metal: {
                    destructible: !1,
                    reflectBullets: !0,
                    hitParticle: "barrelChip",
                    explodeParticle: "barrelBreak",
                    sound: {
                        bullet: "wall_bullet",
                        punch: "metal_punch",
                        explode: "barrel_break_01",
                        enter: "none"
                    }
                },
                wood: {
                    destructible: !0,
                    reflectBullets: !1,
                    sound: {
                        bullet: "wall_wood_bullet",
                        punch: "wall_wood_bullet",
                        explode: "wall_break_01",
                        enter: "none"
                    }
                },
                woodPerm: {
                    destructible: !1,
                    reflectBullets: !1,
                    sound: {
                        bullet: "wall_wood_bullet",
                        punch: "wall_wood_bullet",
                        explode: "wall_break_01",
                        enter: "none"
                    }
                },
                brick: {
                    destructible: !1,
                    reflectBullets: !1,
                    hitParticle: "brickChip",
                    sound: {
                        bullet: "wall_brick_bullet",
                        punch: "wall_brick_bullet",
                        explode: "wall_break_01",
                        enter: "none"
                    }
                },
                concrete: {
                    destructible: !1,
                    reflectBullets: !1,
                    hitParticle: "barrelChip",
                    sound: {
                        bullet: "concrete_hit",
                        punch: "concrete_hit",
                        explode: "wall_break_01",
                        enter: "none"
                    }
                },
                stone: {
                    destructible: !0,
                    stonePlated: !0,
                    reflectBullets: !1,
                    hitParticle: "rockChip",
                    explodeParticle: "rockBreak",
                    sound: {
                        bullet: "concrete_hit",
                        punch: "concrete_hit",
                        explode: "stone_break_01",
                        enter: "none"
                    }
                },
                glass: {
                    destructible: !0,
                    reflectBullets: !1,
                    hitParticle: "glassChip",
                    explodeParticle: "windowBreak",
                    sound: {
                        bullet: "glass_bullet",
                        punch: "glass_bullet",
                        explode: "window_break_01",
                        enter: "none"
                    }
                }
            },
            Pe = {
                barrel_01: p({}),
                barrel_01b: p({
                    img: {
                        tint: 13224393
                    },
                    loot: [s("tier_surviv", 2, 3), l("mirv", 1), l("mirv", 1), l("mirv", 1), l("outfitCarbonFiber", 1)]
                }),
                barrel_02: d({
                    health: 60
                }),
                barrel_03: d({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.25, .5)),
                    health: 20,
                    img: {
                        sprite: "map-barrel-03.img",
                        residue: "map-barrel-res-03.img",
                        scale: .45
                    }
                }),
                barrel_04: d({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.25, .5)),
                    health: 20,
                    loot: [s("tier_soviet", 2, 3)],
                    img: {
                        sprite: "map-barrel-04.img",
                        residue: "map-barrel-res-03.img",
                        scale: .45
                    }
                }),
                bed_sm_01: h({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.4, 3.4)),
                    img: {
                        sprite: "map-bed-01.img"
                    }
                }),
                bed_lg_01: h({
                    img: {
                        residue: "map-bed-res-02.img"
                    }
                }),
                bollard_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: 1
                    },
                    collision: _e.createCircle(ve.create(0, 0), 1.25),
                    height: .5,
                    collidable: !0,
                    destructible: !1,
                    health: 300,
                    hitParticle: "barrelChip",
                    explodeParticle: "barrelBreak",
                    reflectBullets: !0,
                    loot: [],
                    map: {
                        display: !0,
                        color: 6310464,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-bollard-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "silo_bullet",
                        punch: "silo_bullet",
                        explode: "barrel_break_01",
                        enter: "none"
                    }
                },
                bookshelf_01: u({
                    img: {
                        sprite: "map-bookshelf-01.img"
                    },
                    loot: [s("tier_world", 1, 1)]
                }),
                bookshelf_02: u({
                    img: {
                        sprite: "map-bookshelf-02.img"
                    },
                    loot: [s("tier_soviet", 2, 3)]
                }),
                bush_01: x({}),
                bush_01b: x({
                    img: {
                        alpha: 1
                    }
                }),
                bush_01f: x({
                    img: {
                        sprite: "map-bush-01f.img"
                    },
                    map: {
                        color: 1793032
                    }
                }),
                bush_01x: x({
                    map: {
                        color: 4545840
                    },
                    img: {
                        sprite: "map-bush-01x.img"
                    }
                }),
                bush_02: x({
                    img: {
                        residue: "map-bush-res-02.img"
                    }
                }),
                bush_03: x({
                    img: {
                        sprite: "map-bush-03.img",
                        alpha: 1
                    }
                }),
                bush_04: x({
                    hitParticle: "leafRiver",
                    explodeParticle: "leafRiver",
                    img: {
                        sprite: "map-bush-04.img",
                        residue: "map-bush-res-04.img",
                        alpha: 1,
                        scale: .25
                    },
                    terrain: {
                        grass: !0,
                        river: {
                            centerWeight: .3
                        },
                        riverShore: !0
                    },
                    sound: {
                        enter: "bush_enter_02"
                    }
                }),
                bush_05: x({
                    img: {
                        sprite: "map-bush-05.img",
                        residue: "map-bush-res-05.img"
                    },
                    map: {
                        color: 6971965
                    }
                }),
                bush_06: x({
                    collision: _e.createCircle(ve.create(0, 0), 1.75),
                    img: {
                        sprite: "map-bush-06.img",
                        residue: "map-bush-res-06.img"
                    },
                    map: {
                        display: !0,
                        color: 6971965,
                        scale: 1.5
                    }
                }),
                bush_06b: x({
                    scale: {
                        createMin: 1,
                        createMax: 1
                    },
                    collision: _e.createCircle(ve.create(0, 0), 1.75),
                    img: {
                        sprite: "map-bush-06.img",
                        residue: "map-bush-res-06.img",
                        alpha: 1
                    },
                    map: {
                        display: !0,
                        color: 14041344,
                        scale: 1.5
                    }
                }),
                bush_07: x({
                    hitParticle: "leafRiver",
                    explodeParticle: "leafRiver",
                    img: {
                        sprite: "map-bush-07.img",
                        alpha: 1,
                        scale: .5
                    },
                    sound: {
                        enter: "bush_enter_02"
                    }
                }),
                bush_07s: x({
                    hitParticle: "leafRiver",
                    explodeParticle: "leafRiver",
                    map: {
                        display: !0,
                        color: 671242,
                        scale: 1.5
                    },
                    img: {
                        sprite: "map-bush-07s.img",
                        alpha: 1,
                        scale: .5
                    },
                    sound: {
                        enter: "bush_enter_02"
                    }
                }),
                bush_07x: x({
                    img: {
                        sprite: "map-bush-07x.img"
                    }
                }),
                case_01: b({
                    loot: [l("deagle", 1)]
                }),
                case_02: b({
                    img: {
                        sprite: "map-case-deagle-02.img"
                    },
                    loot: [l("deagle", 1), l("deagle", 1)]
                }),
                case_03: b({
                    health: 140,
                    img: {
                        sprite: "map-case-hatchet-01.img",
                        residue: "map-case-hatchet-res-01.img"
                    },
                    loot: [s("tier_hatchet", 1, 1)],
                    hitParticle: "blackChip"
                }),
                case_04: b({
                    health: 140,
                    img: {
                        sprite: "map-case-flare-01.img",
                        residue: "map-case-flare-res-01.img"
                    },
                    loot: [l("flare_gun", 1)],
                    hitParticle: "blackChip",
                    map: {
                        display: !0,
                        color: 7025920,
                        scale: .85
                    }
                }),
                case_05: b({
                    health: 140,
                    img: {
                        sprite: "map-case-meteor-01.img",
                        residue: "map-case-meteor-res-01.img"
                    },
                    loot: [l("flare_gun", 1), l("strobe", 1), l("strobe", 1), l("strobe", 1), l("strobe", 1)],
                    hitParticle: "blackChip",
                    map: {
                        display: !1,
                        color: 7025920,
                        scale: .85
                    }
                }),
                case_06: b({
                    health: 140,
                    img: {
                        sprite: "map-case-chrys-01.img"
                    },
                    loot: [s("tier_chest", 2, 3), s("tier_chrys_case", 1, 1)],
                    hitParticle: "blackChip",
                    map: {
                        display: !1,
                        color: 7025920,
                        scale: .85
                    }
                }),
                chest_01: _({
                    loot: [s("tier_chest", 3, 4), s("tier_pirate_melee", 1, 1), l("outfitRoyalFortune", 1)]
                }),
                chest_02: _({
                    img: {
                        sprite: "map-chest-02.img"
                    },
                    loot: [s("tier_chest", 2, 2)],
                    map: {
                        display: !0,
                        color: 7025920,
                        scale: .85
                    }
                }),
                chest_03: S({
                    img: {
                        sprite: "map-chest-03.img"
                    },
                    loot: [s("tier_chest", 3, 5), l("outfitWaterElem", 1)]
                }),
                chest_03d: S({
                    img: {
                        sprite: "map-chest-03d.img"
                    },
                    loot: [s("tier_chest", 3, 5), l("outfitWaterElem", 1)]
                }),
                chest_03f: S({
                    img: {
                        sprite: "map-chest-03f.img"
                    },
                    loot: [s("tier_chest", 3, 5), l("outfitKhaki", 1)]
                }),
                chest_03x: S({
                    img: {
                        sprite: "map-chest-03x.img"
                    },
                    loot: [s("tier_chest", 3, 5), l("outfitWaterElem", 1)]
                }),
                control_panel_01: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.7)),
                    button: {
                        interactionRad: .75,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "cell_door_01",
                        useDelay: 1.1,
                        useDir: ve.create(-1, 0),
                        useImg: "map-control-panel-02.img",
                        sound: {
                            on: "cell_control_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-control-panel-01.img"
                    }
                }),
                control_panel_02: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.7)),
                    health: 175,
                    img: {
                        sprite: "map-control-panel-02.img"
                    }
                }),
                control_panel_02b: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.7)),
                    destructible: !1,
                    button: {
                        interactionRad: .2,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "",
                        useDelay: .25,
                        useDir: ve.create(-1, 0),
                        useImg: "map-control-panel-01.img",
                        sound: {
                            on: "button_press_01",
                            off: "button_press_01"
                        }
                    },
                    img: {
                        sprite: "map-control-panel-02.img"
                    }
                }),
                control_panel_03: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.25, 1.2)),
                    health: 150,
                    img: {
                        sprite: "map-control-panel-03.img"
                    }
                }),
                control_panel_04: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.7)),
                    button: {
                        interactionRad: .75,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "crossing_door_01",
                        useDelay: 4.25,
                        useDir: ve.create(1, 0),
                        useImg: "map-control-panel-05.img",
                        sound: {
                            on: "cell_control_02",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-control-panel-04.img"
                    }
                }),
                control_panel_06: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 1.2)),
                    health: 200,
                    img: {
                        sprite: "map-control-panel-06.img"
                    }
                }),
                switch_01: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.45, .55)),
                    destructible: !1,
                    button: {
                        interactionRad: .2,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "",
                        useDelay: .25,
                        useDir: ve.create(-1, 0),
                        useImg: "map-switch-02.img",
                        sound: {
                            on: "button_press_01",
                            off: "button_press_01"
                        }
                    },
                    img: {
                        sprite: "map-switch-01.img"
                    }
                }),
                switch_02: E({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.45, .55)),
                    destructible: !1,
                    img: {
                        sprite: "map-switch-02.img"
                    }
                }),
                couch_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .85
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4.5, 1.5)),
                    height: .5,
                    collidable: !0,
                    destructible: !0,
                    health: 125,
                    hitParticle: "clothHit",
                    explodeParticle: ["woodPlank", "clothBreak"],
                    reflectBullets: !1,
                    loot: [],
                    map: {
                        display: !1,
                        color: 6697728,
                        scale: .875
                    },
                    terrain: {
                        grass: !1,
                        beach: !0
                    },
                    img: {
                        sprite: "map-couch-01.img",
                        residue: "map-couch-res-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "cloth_bullet",
                        punch: "cloth_punch",
                        explode: "cloth_break_01",
                        enter: "none"
                    }
                },
                crate_01: v({}),
                crate_01x: v({
                    img: {
                        sprite: "map-crate-01x.img"
                    }
                }),
                crate_02: v({
                    health: 140,
                    loot: [s("tier_soviet", 3, 5)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-02.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_02x: v({
                    health: 140,
                    loot: [s("tier_soviet", 3, 5)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-02x.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_02f: v({
                    health: 140,
                    loot: [s("tier_guns", 3, 3), s("tier_armor", 2, 2), s("tier_packs", 1, 1)],
                    map: {
                        display: !0,
                        color: 13369344
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-02f.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_02d: v({
                    health: 140,
                    loot: [l("m1014", 1), l("helmet03_lt_aged", 1), l("outfitRedLeaderAged", 1), l("machete_taiga", 1)],
                    map: {
                        display: !0,
                        color: 13369344
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-02f.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_03: v({
                    health: 100,
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.575, 1.575)),
                    loot: [s("tier_throwables", 2, 4)],
                    map: {
                        color: 5066014,
                        scale: .875
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-03.img",
                        scale: .35
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_03x: v({
                    health: 100,
                    hitParticle: "glassChip",
                    explodeParticle: ["glassPlank"],
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.575, 1.575)),
                    loot: [l("snowball", 4), l("snowball", 4), l("snowball", 4)],
                    map: {
                        color: 31863,
                        scale: .875
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-03x.img",
                        scale: .35
                    },
                    sound: {
                        explode: "crate_break_02"
                    }
                }),
                crate_04: v({
                    health: 225,
                    destructible: !0,
                    armorPlated: !0,
                    hitParticle: "greenChip",
                    loot: [s("tier_ammo_crate", 1, 1)],
                    map: {
                        display: !0,
                        color: 5468244,
                        scale: .875
                    },
                    img: {
                        sprite: "map-crate-04.img"
                    },
                    sound: {
                        bullet: "ammo_crate_bullet",
                        punch: "ammo_crate_bullet",
                        explode: "crate_break_01"
                    }
                }),
                crate_05: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2, 2)),
                    destructible: !1,
                    hitParticle: "goldChip",
                    loot: [],
                    map: {
                        display: !1
                    },
                    img: {
                        sprite: "map-crate-05.img"
                    },
                    sound: {
                        bullet: "wall_brick_bullet",
                        punch: "wall_brick_bullet"
                    }
                }),
                crate_06: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.25, 1.1)),
                    health: 175,
                    destructible: !0,
                    armorPlated: !0,
                    hitParticle: "greenChip",
                    loot: [s("tier_ammo", 1, 1)],
                    map: {
                        display: !1
                    },
                    img: {
                        sprite: "map-crate-06.img"
                    },
                    sound: {
                        bullet: "ammo_crate_bullet",
                        punch: "ammo_crate_bullet"
                    }
                }),
                crate_07: v({
                    health: 140,
                    loot: [s("tier_surviv", 4, 5), l("ak47", 1), l("ak47", 1), l("ak47", 1), l("ak47", 1), l("outfitKhaki", 1), l("outfitKhaki", 1), l("outfitKhaki", 1), l("outfitKhaki", 1)],
                    img: {
                        sprite: "map-crate-07.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_07b: v({
                    health: 140,
                    loot: [s("tier_armor", 4, 5), l("mp220", 1), l("mp220", 1), l("bar", 1), l("bar", 1), l("outfitKhaki", 1), l("outfitKhaki", 1), l("outfitKhaki", 1), l("outfitKhaki", 1)],
                    img: {
                        sprite: "map-crate-07.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_08: v({
                    health: 140,
                    loot: [s("tier_surviv", 2, 3)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-08.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_09: v({
                    health: 140,
                    loot: [s("tier_chest", 1, 2), s("tier_conch", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-09.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_10: v({
                    health: 200,
                    scale: {
                        destroy: .75
                    },
                    loot: [s("tier_airdrop_uncommon", 1, 1), s("tier_airdrop_armor", 1, 1), s("tier_medical", 2, 2), s("tier_airdrop_scopes", 1, 1), s("tier_airdrop_skins", 1, 1), s("tier_airdrop_melee", 1, 1), s("tier_airdrop_ammo", 3, 3), s("tier_airdrop_throwables", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-10.img",
                        residue: "map-crate-res-03.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_11: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    scale: {
                        destroy: .75
                    },
                    health: 200,
                    loot: [s("tier_airdrop_rare", 1, 1), s("tier_airdrop_armor", 1, 1), s("tier_medical", 2, 2), s("tier_airdrop_scopes", 1, 1), s("tier_airdrop_skins", 1, 1), s("tier_airdrop_melee", 1, 1), s("tier_airdrop_ammo", 3, 3), s("tier_airdrop_throwables", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-11.img",
                        residue: "map-crate-res-03.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_12: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.5, 3.5)),
                    scale: {
                        destroy: .75
                    },
                    health: 500,
                    loot: [s("tier_airdrop_rare", 2, 2), s("tier_airdrop_uncommon", 4, 6), s("tier_airdrop_armor", 4, 5), s("tier_medical", 12, 15), s("tier_airdrop_scopes", 6, 8), s("tier_airdrop_skins", 3, 4), s("tier_airdrop_melee", 5, 7), s("tier_airdrop_ammo", 10, 12), s("tier_airdrop_throwables", 6, 8), s("tier_katanas", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-12.img",
                        residue: "map-crate-res-03.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_13: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.5, 3.5)),
                    scale: {
                        destroy: .75
                    },
                    health: 200,
                    loot: [s("tier_airdrop_mythic", 3, 4), s("tier_airdrop_rare", 3, 4), s("tier_airdrop_armor", 6, 8), s("tier_medical", 12, 15), s("tier_airdrop_scopes", 6, 8), s("tier_airdrop_faction_skins", 1, 2), s("tier_airdrop_faction_melee", 3, 4), s("tier_airdrop_ammo", 10, 12), s("tier_airdrop_throwables", 6, 8), s("tier_katanas", 1, 1), l("strobe", 1), l("strobe", 1), l("strobe", 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-13.img",
                        residue: "map-crate-res-03.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_14: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [s("tier_knives", 1, 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-14.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_15: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [s("tier_knives", 4, 4)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-14.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_16: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [s("tier_knives", 4, 4)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-14.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_17: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [l("ot38", 1), l("ot38", 1), l("ot38", 1), l("ot38", 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-17.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_18: v({
                    health: 140,
                    loot: [s("tier_cattle_crate", 2, 3), s("tier_soviet", 1, 2)],
                    map: {
                        display: !0,
                        color: 12867840,
                        scale: .875
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-18.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_19: v({
                    health: 140,
                    loot: [s("tier_guns", 1, 3), s("tier_surviv", 2, 3)],
                    map: {
                        display: !0,
                        color: 4500224,
                        scale: .875
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-19.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_20: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.7, 1.7)),
                    health: 75,
                    hitParticle: "greenChip",
                    explodeParticle: "greenPlank",
                    loot: [s("tier_armor", 1, 1), s("tier_world", 1, 1)],
                    map: {
                        display: !0,
                        color: 3884335,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-20.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_21: v({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.7, 1.25)),
                    health: 100,
                    loot: [l("outfitWhite", 1), l("outfitWhite", 1), l("ots38_dual", 1)],
                    map: {
                        display: !1
                    },
                    terrain: {
                        grass: !0,
                        beach: !0
                    },
                    img: {
                        sprite: "map-crate-21.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_22: v({
                    health: 140,
                    loot: [s("tier_guns", 3, 3), s("tier_armor", 2, 2), s("tier_packs", 1, 1)],
                    map: {
                        display: !0,
                        color: 32511
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-22.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                crate_22d: v({
                    health: 140,
                    loot: [l("an94", 1), l("helmet03_lt_aged", 1), l("outfitBlueLeaderAged", 1), l("kukri_trad", 1)],
                    map: {
                        display: !0,
                        color: 32511
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-crate-22.img"
                    },
                    sound: {
                        explode: "crate_break_01"
                    }
                }),
                airdrop_crate_01: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    button: {
                        useImg: "map-airdrop-02.img",
                        useParticle: "airdropCrate01",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-01.img",
                        residue: "none"
                    },
                    destroyType: "crate_10",
                    explodeParticle: "airdropCrate02"
                }),
                airdrop_crate_02: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    button: {
                        useImg: "map-airdrop-02.img",
                        useParticle: "airdropCrate01",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-01.img",
                        residue: "none"
                    },
                    destroyType: "crate_11",
                    explodeParticle: "airdropCrate02"
                }),
                airdrop_crate_03: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4, 4)),
                    button: {
                        useImg: "map-airdrop-04.img",
                        useParticle: "airdropCrate03",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-03.img",
                        residue: "none"
                    },
                    destroyType: "crate_12",
                    explodeParticle: "airdropCrate04"
                }),
                airdrop_crate_04: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4, 4)),
                    button: {
                        useImg: "map-airdrop-04.img",
                        useParticle: "airdropCrate03",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-03.img",
                        residue: "none"
                    },
                    destroyType: "crate_13",
                    explodeParticle: "airdropCrate04"
                }),
                airdrop_crate_01x: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    button: {
                        useImg: "map-crate-13x.img",
                        useParticle: "airdropCrate01x",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-01x.img",
                        residue: "none"
                    },
                    destroyType: "crate_10",
                    explodeParticle: "airdropCrate02x"
                }),
                airdrop_crate_02x: z({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2.5)),
                    button: {
                        useImg: "map-crate-13x.img",
                        useParticle: "airdropCrate01x",
                        sound: {
                            on: "airdrop_open_01",
                            off: ""
                        }
                    },
                    img: {
                        sprite: "map-airdrop-02x.img",
                        residue: "none"
                    },
                    destroyType: "crate_11",
                    explodeParticle: "airdropCrate02x"
                }),
                bottle_01: B({
                    collision: _e.createCircle(ve.create(0, 0), .5),
                    health: 12,
                    hitParticle: "bottleBrownChip",
                    explodeParticle: "bottleBrownBreak",
                    img: {
                        sprite: "map-bottle-01.img",
                        residue: "none"
                    },
                    loot: [],
                    sound: {
                        bullet: "glass_bullet",
                        punch: "glass_bullet",
                        explode: "window_break_01",
                        enter: "none"
                    }
                }),
                bottle_02: B({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.5, .5)),
                    health: 20,
                    hitParticle: "bottleBlueChip",
                    explodeParticle: "bottleBlueBreak",
                    img: {
                        sprite: "map-bottle-02.img",
                        residue: "none"
                    },
                    loot: [],
                    sound: {
                        bullet: "glass_bullet",
                        punch: "glass_bullet",
                        explode: "window_break_01",
                        enter: "none"
                    }
                }),
                bottle_02r: L({
                    img: {
                        tint: 13172736
                    }
                }),
                bottle_02o: L({
                    collidable: !1,
                    img: {
                        tint: 16734720
                    }
                }),
                bottle_02y: L({
                    collidable: !1,
                    img: {
                        tint: 16776960
                    }
                }),
                bottle_02g: L({
                    collidable: !1,
                    img: {
                        tint: 32768
                    }
                }),
                bottle_02b: L({
                    img: {
                        tint: 27903
                    }
                }),
                bottle_02i: L({
                    collidable: !1,
                    img: {
                        tint: 4915330
                    }
                }),
                bottle_02v: L({
                    img: {
                        tint: 15631086
                    }
                }),
                candle_01: {
                    type: "obstacle",
                    map: {
                        display: !1,
                        color: 16777215,
                        scale: 1
                    },
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .5
                    },
                    collision: _e.createCircle(ve.create(0, 0), .5),
                    height: .5,
                    collidable: !1,
                    destructible: !1,
                    health: 150,
                    hitParticle: "goldChip",
                    explodeParticle: "barrelBreak",
                    reflectBullets: !1,
                    loot: [],
                    img: {
                        sprite: "map-candle-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "none",
                        punch: "none",
                        explode: "none",
                        enter: "none"
                    }
                },
                deposit_box_01: M({
                    img: {
                        sprite: "map-deposit-box-01.img"
                    },
                    loot: [s("tier_world", 1, 1)]
                }),
                deposit_box_02: M({
                    explodeParticle: "depositBoxGoldBreak",
                    img: {
                        sprite: "map-deposit-box-02.img"
                    },
                    loot: [s("tier_soviet", 1, 2), s("tier_guns", 1, 1)]
                }),
                drawers_01: I({
                    img: {
                        sprite: "map-drawers-01.img"
                    },
                    loot: [s("tier_container", 1, 1)]
                }),
                drawers_02: I({
                    img: {
                        sprite: "map-drawers-02.img"
                    },
                    loot: [s("tier_soviet", 2, 3)]
                }),
                fire_ext_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .8
                    },
                    collision: _e.createCircle(ve.create(.35, 0), 1),
                    height: .5,
                    collidable: !0,
                    destructible: !0,
                    createSmoke: !0,
                    health: 75,
                    hitParticle: "redChip",
                    explodeParticle: "redBreak",
                    reflectBullets: !0,
                    loot: [],
                    map: {
                        display: !1,
                        color: 6697728,
                        scale: .875
                    },
                    terrain: {
                        grass: !1,
                        beach: !0
                    },
                    img: {
                        sprite: "map-fire-ext-01.img",
                        residue: "map-fire-ext-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "barrel_bullet",
                        punch: "barrel_bullet",
                        explode: "explosion_smoke_01",
                        enter: "none"
                    }
                },
                grill_01: D({
                    collision: _e.createCircle(ve.create(0, 0), 1.55),
                    img: {
                        sprite: "map-grill-01.img"
                    }
                }),
                gun_mount_01: C({
                    loot: [l("m870", 1)],
                    img: {
                        sprite: "map-gun-mount-01.img"
                    }
                }),
                gun_mount_02: C({
                    loot: [l("mp220", 1)],
                    img: {
                        sprite: "map-gun-mount-02.img"
                    }
                }),
                gun_mount_03: C({
                    loot: [l("qbb97", 1)],
                    img: {
                        sprite: "map-gun-mount-03.img"
                    }
                }),
                gun_mount_04: C({
                    loot: [l("woodaxe_bloody", 1)],
                    img: {
                        sprite: "map-gun-mount-04.img"
                    }
                }),
                gun_mount_05: C({
                    loot: [l("m1100", 1)],
                    img: {
                        sprite: "map-gun-mount-05.img"
                    }
                }),
                locker_01: A({
                    img: {
                        sprite: "map-locker-01.img"
                    },
                    loot: [s("tier_world", 1, 1)]
                }),
                locker_02: A({
                    img: {
                        sprite: "map-locker-02.img"
                    },
                    loot: [s("tier_police", 1, 1)]
                }),
                locker_03: A({
                    img: {
                        sprite: "map-locker-03.img"
                    },
                    loot: [l("outfitKhaki", 1), l("ak47", 1), l("backpack02", 1)]
                }),
                oven_01: D(),
                piano_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .75
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3.75, 1)),
                    height: .5,
                    collidable: !0,
                    destructible: !1,
                    health: 75,
                    hitParticle: "woodChip",
                    explodeParticle: ["woodPlank", "book"],
                    reflectBullets: !1,
                    loot: [s("tier_world", 1, 1)],
                    map: {
                        display: !1,
                        color: 6697728,
                        scale: .875
                    },
                    terrain: {
                        grass: !1,
                        beach: !0
                    },
                    img: {
                        sprite: "map-piano-01.img",
                        residue: "map-drawers-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "piano_hit",
                        punch: "piano_hit",
                        explode: "drawers_break_01",
                        enter: "none"
                    }
                },
                planter_01: O({}),
                planter_02: O({
                    img: {
                        sprite: "map-planter-02.img"
                    }
                }),
                planter_03: O({
                    img: {
                        sprite: "map-planter-03.img"
                    }
                }),
                planter_04: O({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 1.5)),
                    img: {
                        sprite: "map-planter-04.img"
                    },
                    destructible: !1,
                    button: {
                        interactionRad: .1,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "",
                        useDelay: .25,
                        useDir: ve.create(1, 0),
                        useImg: "map-planter-05.img",
                        sound: {
                            on: "watering_01",
                            off: "watering_01"
                        }
                    }
                }),
                planter_06: O({
                    img: {
                        sprite: "map-planter-06.img",
                        residue: "map-planter-res-02.img"
                    }
                }),
                planter_07: O({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 1.5)),
                    img: {
                        sprite: "map-planter-07.img",
                        residue: "map-planter-res-03.img"
                    },
                    destructible: !0
                }),
                pot_01: B({}),
                pot_02: B({
                    img: {
                        sprite: "map-pot-02.img"
                    },
                    loot: [l("spas12", 1), l("outfitIslander", 1)]
                }),
                pot_03: B({
                    img: {
                        sprite: "map-pot-03.img"
                    }
                }),
                pot_04: B({
                    img: {
                        sprite: "map-pot-03.img"
                    },
                    loot: [l("outfitWoodsCloak", 1), l("backpack03", 1)]
                }),
                pot_05: B({
                    img: {
                        sprite: "map-pot-03.img"
                    },
                    loot: [s("tier_pavilion", 1, 1)]
                }),
                potato_01: R({}),
                potato_02: R({
                    img: {
                        sprite: "map-potato-02.img"
                    }
                }),
                potato_03: R({
                    img: {
                        sprite: "map-potato-03.img"
                    }
                }),
                power_box_01: E(),
                pumpkin_01: F(),
                pumpkin_02: F({
                    health: 140,
                    img: {
                        sprite: "map-pumpkin-02.img"
                    },
                    loot: [s("tier_guns", 1, 2), s("tier_surviv", 1, 2), s("tier_skins", 1, 1)]
                }),
                refrigerator_01: q(),
                refrigerator_01b: q({
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: 1
                    },
                    health: 250
                }),
                recorder_01: j({
                    button: {
                        sound: {
                            on: "log_01"
                        }
                    }
                }),
                recorder_02: j({
                    button: {
                        sound: {
                            on: "log_02"
                        }
                    }
                }),
                recorder_03: j({
                    button: {
                        sound: {
                            on: "log_03"
                        }
                    }
                }),
                recorder_04: j({
                    button: {
                        sound: {
                            on: "log_04"
                        }
                    }
                }),
                recorder_05: j({
                    button: {
                        sound: {
                            on: "log_05"
                        }
                    }
                }),
                recorder_06: j({
                    button: {
                        sound: {
                            on: "log_06"
                        }
                    }
                }),
                recorder_07: j({
                    button: {
                        sound: {
                            on: "footstep_07"
                        }
                    }
                }),
                recorder_08: j({
                    button: {
                        sound: {
                            on: "footstep_08"
                        }
                    }
                }),
                recorder_09: j({
                    button: {
                        sound: {
                            on: "footstep_09"
                        }
                    }
                }),
                recorder_10: j({
                    button: {
                        sound: {
                            on: "cell_control_03"
                        }
                    }
                }),
                recorder_11: j({
                    button: {
                        sound: {
                            on: "log_11"
                        }
                    }
                }),
                screen_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .85
                    },
                    collision: _e.createAabbExtents(ve.create(0, .05), ve.create(4, .2)),
                    height: .5,
                    collidable: !0,
                    destructible: !0,
                    health: 25,
                    hitParticle: "clothHit",
                    explodeParticle: "barrelBreak",
                    reflectBullets: !1,
                    loot: [],
                    map: {
                        display: !1,
                        color: 6697728,
                        scale: .875
                    },
                    terrain: {
                        grass: !1,
                        beach: !0
                    },
                    img: {
                        sprite: "map-screen-01.img",
                        residue: "map-screen-res-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "cloth_bullet",
                        punch: "cloth_punch",
                        explode: "screen_break_01",
                        enter: "none"
                    }
                },
                sandbags_01: N({}),
                sandbags_02: N({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.1, 1.4)),
                    img: {
                        sprite: "map-sandbags-02.img"
                    }
                }),
                silo_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: 1
                    },
                    collision: _e.createCircle(ve.create(0, 0), 7.75),
                    height: 10,
                    collidable: !0,
                    destructible: !1,
                    health: 300,
                    hitParticle: "barrelChip",
                    explodeParticle: "barrelBreak",
                    reflectBullets: !0,
                    loot: [],
                    map: {
                        display: !0,
                        color: 4079166,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-silo-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "silo_bullet",
                        punch: "silo_bullet",
                        explode: "barrel_break_01",
                        enter: "none"
                    }
                },
                stairs_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: 1
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(2.5, 2)),
                    height: .5,
                    collidable: !1,
                    destructible: !0,
                    health: 100,
                    hitParticle: "woodChip",
                    explodeParticle: "woodPlank",
                    reflectBullets: !1,
                    loot: [],
                    map: {
                        display: !1,
                        color: 6697728,
                        scale: .875
                    },
                    terrain: {
                        grass: !1,
                        beach: !0
                    },
                    img: {
                        sprite: "map-stairs-broken-01.img",
                        residue: "map-table-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 60
                    },
                    sound: {
                        bullet: "wood_prop_bullet",
                        punch: "wood_prop_bullet",
                        explode: "crate_break_01",
                        enter: "none"
                    }
                },
                stand_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .75
                    },
                    collision: _e.createAabbExtents(ve.create(0, .15), ve.create(1.25, 1.25)),
                    height: .5,
                    collidable: !0,
                    destructible: !0,
                    health: 75,
                    hitParticle: "woodChip",
                    explodeParticle: "woodPlank",
                    reflectBullets: !1,
                    loot: [s("tier_world", 1, 1)],
                    map: {
                        display: !1,
                        color: 6697728,
                        scale: .875
                    },
                    terrain: {
                        grass: !1,
                        beach: !0
                    },
                    img: {
                        sprite: "map-stand-01.img",
                        residue: "map-drawers-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "wood_prop_bullet",
                        punch: "wood_prop_bullet",
                        explode: "drawers_break_01",
                        enter: "none"
                    }
                },
                stone_01: V({}),
                stone_01b: V({
                    img: {
                        residue: "map-stone-res-01b.img"
                    }
                }),
                stone_01f: V({
                    map: {
                        display: !0,
                        color: 8224125,
                        scale: 1
                    }
                }),
                stone_01x: V({
                    map: {
                        display: !0,
                        color: 6052956,
                        scale: 1
                    },
                    img: {
                        sprite: "map-stone-01x.img",
                        residue: "map-stone-res-01x.img"
                    }
                }),
                stone_02: V({
                    img: {
                        tint: 15066597
                    },
                    loot: [s("tier_surviv", 2, 3), l("ak47", 1), l("outfitKhaki", 1)]
                }),
                stone_03: G({}),
                stone_03b: G({
                    img: {
                        sprite: "map-stone-03b.img",
                        residue: "map-stone-res-01.img"
                    }
                }),
                stone_03f: G({
                    img: {
                        sprite: "map-stone-03f.img",
                        residue: "map-stone-res-02f.img"
                    }
                }),
                stone_03x: G({
                    img: {
                        sprite: "map-stone-03x.img",
                        residue: "map-stone-res-02x.img"
                    }
                }),
                stone_04: V({
                    stonePlated: !0,
                    scale: {
                        createMin: .8,
                        createMax: .8,
                        destroy: .75
                    },
                    hitParticle: "rockEyeChip",
                    explodeParticle: "rockEyeBreak",
                    loot: [s("tier_eye_block", 1, 1)],
                    terrain: {
                        grass: !0,
                        beach: !0,
                        riverShore: !0
                    },
                    map: {
                        display: !0,
                        color: 1512466,
                        scale: 1
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.8, 1.8)),
                    img: {
                        sprite: "map-stone-04.img",
                        residue: "map-stone-res-04.img"
                    }
                }),
                stone_05: V({
                    stonePlated: !0,
                    hitParticle: "rockEyeChip",
                    explodeParticle: "rockEyeBreak",
                    loot: [s("tier_eye_stone", 1, 1)],
                    terrain: {
                        grass: !0,
                        beach: !0,
                        riverShore: !0
                    },
                    map: {
                        display: !0,
                        color: 1512466,
                        scale: 1
                    },
                    collision: _e.createCircle(ve.create(0, 0), 1.7),
                    img: {
                        sprite: "map-stone-05.img",
                        residue: "map-stone-res-01b.img"
                    }
                }),
                stone_06: V({
                    stonePlated: !0,
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .8
                    },
                    height: 10,
                    terrain: {
                        grass: !0,
                        beach: !0,
                        riverShore: !0
                    },
                    map: {
                        display: !0,
                        color: 3618615,
                        scale: 1
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4.5, 2)),
                    img: {
                        sprite: "map-stone-06.img",
                        scale: .5,
                        residue: "map-stone-res-06.img"
                    }
                }),
                stove_01: E({
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .85
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(3, 2.25)),
                    disableBuildingOccupied: !0,
                    damageCeiling: !0,
                    explosion: "explosion_stove",
                    height: 10,
                    health: 500,
                    img: {
                        sprite: "map-stove-01.img"
                    },
                    sound: {
                        bullet: "wall_bullet",
                        punch: "metal_punch",
                        explode: "oven_break_01",
                        enter: "none"
                    }
                }),
                stove_02: E({
                    collision: _e.createCircle(ve.create(0, 0), 1.5),
                    disableBuildingOccupied: !0,
                    damageCeiling: !0,
                    explosion: "explosion_stove",
                    height: 10,
                    health: 400,
                    img: {
                        sprite: "map-stove-02.img"
                    },
                    sound: {
                        bullet: "wall_bullet",
                        punch: "metal_punch",
                        explode: "oven_break_01",
                        enter: "none"
                    }
                }),
                table_01: U(),
                table_01x: U({
                    img: {
                        sprite: "map-table-01x.img"
                    }
                }),
                table_02: U({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4.5, 2.5)),
                    health: 125,
                    img: {
                        sprite: "map-table-02.img",
                        residue: "map-table-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 60
                    }
                }),
                table_02x: U({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4.5, 2.5)),
                    health: 125,
                    img: {
                        sprite: "map-table-02x.img",
                        residue: "map-table-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 60
                    }
                }),
                table_03: U({
                    collision: _e.createCircle(ve.create(0, 0), 2.5),
                    health: 125,
                    img: {
                        sprite: "map-table-03.img",
                        residue: "map-table-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 60
                    }
                }),
                table_03x: U({
                    collision: _e.createCircle(ve.create(0, 0), 2.5),
                    health: 125,
                    img: {
                        sprite: "map-table-03x.img",
                        residue: "map-table-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 60
                    }
                }),
                toilet_01: H({
                    img: {
                        sprite: "map-toilet-01.img"
                    },
                    loot: [s("tier_toilet", 2, 3)]
                }),
                toilet_02: H({
                    img: {
                        sprite: "map-toilet-02.img"
                    },
                    loot: [s("tier_soviet", 3, 4)]
                }),
                toilet_02b: H({
                    img: {
                        sprite: "map-toilet-02.img",
                        tint: 11842740
                    },
                    loot: [l("fireaxe", 1)]
                }),
                toilet_03: H({
                    reflectBullets: !0,
                    hitParticle: "barrelChip",
                    explodeParticle: "toiletMetalBreak",
                    img: {
                        sprite: "map-toilet-03.img",
                        residue: "map-toilet-res-02.img"
                    },
                    loot: [s("tier_world", 1, 2)],
                    sound: {
                        bullet: "toilet_metal_bullet",
                        punch: "toilet_metal_bullet",
                        explode: "toilet_break_02"
                    }
                }),
                toilet_04: H({
                    reflectBullets: !0,
                    hitParticle: "barrelChip",
                    explodeParticle: "toiletMetalBreak",
                    img: {
                        sprite: "map-toilet-04.img",
                        residue: "map-toilet-res-02.img"
                    },
                    loot: [s("tier_soviet", 2, 3)],
                    sound: {
                        bullet: "toilet_metal_bullet",
                        punch: "toilet_metal_bullet",
                        explode: "toilet_break_02"
                    }
                }),
                tree_01: W(),
                tree_interior_01: W({
                    img: {
                        zIdx: 200
                    }
                }),
                tree_08f: W({
                    scale: {
                        createMin: 1.2,
                        createMax: 1.6
                    },
                    health: 200,
                    map: {
                        color: 995844,
                        scale: 3
                    },
                    img: {
                        sprite: "map-tree-08f.img",
                        residue: "map-tree-res-01.img",
                        scale: .35,
                        zIdx: 801
                    }
                }),
                tree_01x: W({
                    img: {
                        sprite: "map-tree-01x.img"
                    }
                }),
                tree_02: W({
                    health: 120,
                    collision: _e.createCircle(ve.create(0, 0), 1.6),
                    aabb: _e.createAabbExtents(ve.create(0, 0), ve.create(1.6, 1.6)),
                    height: .5,
                    loot: [l("woodaxe", 1)],
                    map: {
                        display: !1
                    },
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .9
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-tree-04.img",
                        scale: .5,
                        zIdx: 10
                    }
                }),
                tree_03: W({
                    img: {
                        tint: 11645361
                    },
                    loot: [s("tier_surviv", 2, 3), l("mosin", 1), l("outfitWoodland", 1)]
                }),
                tree_05: W({
                    collision: _e.createCircle(ve.create(0, 0), 2.3),
                    aabb: _e.createAabbExtents(ve.create(0, 0), ve.create(12, 12)),
                    scale: {
                        createMin: 1.2,
                        createMax: 1.3
                    },
                    health: 400,
                    map: {
                        color: 5911831,
                        scale: 3
                    },
                    img: {
                        sprite: "map-tree-05.img",
                        residue: "map-tree-res-02.img",
                        tint: 16777215,
                        scale: .7,
                        zIdx: 801
                    }
                }),
                tree_05b: W({
                    collision: _e.createCircle(ve.create(0, 0), 2.3),
                    aabb: _e.createAabbExtents(ve.create(0, 0), ve.create(12, 12)),
                    scale: {
                        createMin: 1,
                        createMax: 1
                    },
                    health: 500,
                    loot: [s("tier_shotguns", 1, 1), s("tier_lmgs", 1, 1), l("outfitTreeSpooky", 1)],
                    map: {
                        color: 5911831,
                        scale: 3
                    },
                    img: {
                        sprite: "map-tree-05.img",
                        residue: "map-tree-res-02.img",
                        tint: 16777215,
                        scale: .7,
                        zIdx: 801
                    }
                }),
                tree_05c: W({
                    collision: _e.createCircle(ve.create(0, 0), 1.05),
                    aabb: _e.createAabbExtents(ve.create(0, 0), ve.create(4, 4)),
                    scale: {
                        createMin: 1.6,
                        createMax: 1.6
                    },
                    health: 200,
                    map: {
                        color: 9064739,
                        scale: 3
                    },
                    img: {
                        sprite: "map-tree-05c.img",
                        residue: "map-tree-res-02.img",
                        tint: 16777215,
                        scale: .35,
                        zIdx: 801
                    }
                }),
                tree_06: W({
                    img: {
                        sprite: "map-tree-06.img"
                    },
                    map: {
                        color: 7700520
                    }
                }),
                tree_07: W({
                    scale: {
                        createMin: 1,
                        createMax: 1.2
                    },
                    map: {
                        color: 5199637,
                        scale: 2.5
                    },
                    img: {
                        sprite: "map-tree-07.img"
                    }
                }),
                tree_07s: W({
                    scale: {
                        createMin: 1,
                        createMax: 1.2
                    },
                    map: {
                        color: 16697057,
                        scale: 2.5
                    },
                    img: {
                        sprite: "map-tree-07s.img"
                    },
                    terrain: {
                        grass: !0,
                        beach: !1,
                        riverShore: !0
                    }
                }),
                tree_07sr: W({
                    scale: {
                        createMin: 1,
                        createMax: 1.2
                    },
                    map: {
                        color: 16697057,
                        scale: 2.5
                    },
                    img: {
                        sprite: "map-tree-07s.img"
                    },
                    terrain: {
                        grass: !1,
                        beach: !1,
                        riverShore: !0
                    }
                }),
                tree_08: W({
                    scale: {
                        createMin: 1.2,
                        createMax: 1.4
                    },
                    health: 225,
                    map: {
                        color: 11033868,
                        scale: 2.5
                    },
                    img: {
                        sprite: "map-tree-08.img",
                        residue: "map-tree-res-02.img",
                        scale: .35
                    }
                }),
                tree_08b: W({
                    scale: {
                        createMin: 1.75,
                        createMax: 2
                    },
                    health: 300,
                    map: {
                        color: 9647632,
                        scale: 3
                    },
                    img: {
                        sprite: "map-tree-08.img",
                        residue: "map-tree-res-02.img",
                        tint: 14383224,
                        scale: .35,
                        zIdx: 801
                    }
                }),
                tree_08c: W({
                    scale: {
                        createMin: 1.75,
                        createMax: 2
                    },
                    health: 500,
                    loot: [s("tier_shotguns", 2, 3), s("tier_lmgs", 2, 3), l("outfitWoodland", 1)],
                    map: {
                        color: 7817749,
                        scale: 3
                    },
                    img: {
                        sprite: "map-tree-08.img",
                        residue: "map-tree-res-02.img",
                        tint: 11645361,
                        scale: .35,
                        zIdx: 801
                    }
                }),
                tree_08s: W({
                    scale: {
                        createMin: 1.2,
                        createMax: 1.4
                    },
                    health: 225,
                    map: {
                        color: 16746936,
                        scale: 2.5
                    },
                    img: {
                        sprite: "map-tree-08s.img",
                        residue: "map-tree-res-02.img",
                        scale: .35
                    },
                    terrain: {
                        grass: !0,
                        beach: !1,
                        riverShore: !0
                    }
                }),
                tree_08sb: W({
                    scale: {
                        createMin: 1.75,
                        createMax: 2
                    },
                    health: 300,
                    map: {
                        color: 16734619,
                        scale: 3
                    },
                    img: {
                        sprite: "map-tree-08s.img",
                        residue: "map-tree-res-02.img",
                        tint: 14383224,
                        scale: .35,
                        zIdx: 801
                    },
                    terrain: {
                        grass: !0,
                        beach: !1,
                        riverShore: !0
                    }
                }),
                tree_08sc: W({
                    scale: {
                        createMin: 1.75,
                        createMax: 2
                    },
                    health: 500,
                    loot: [s("tier_shotguns", 2, 3), s("tier_lmgs", 2, 3), l("outfitWoodland", 1)],
                    map: {
                        color: 8268107,
                        scale: 3
                    },
                    img: {
                        sprite: "map-tree-08s.img",
                        residue: "map-tree-res-02.img",
                        tint: 11645361,
                        scale: .35,
                        zIdx: 801
                    }
                }),
                tree_08sr: W({
                    scale: {
                        createMin: 1.2,
                        createMax: 1.4
                    },
                    health: 225,
                    map: {
                        color: 16746936,
                        scale: 2.5
                    },
                    img: {
                        sprite: "map-tree-08s.img",
                        residue: "map-tree-res-02.img",
                        scale: .35
                    },
                    terrain: {
                        grass: !1,
                        beach: !1,
                        riverShore: !0
                    }
                }),
                tree_09: W({
                    health: 120,
                    collision: _e.createCircle(ve.create(0, 0), 1.6),
                    aabb: _e.createAabbExtents(ve.create(0, 0), ve.create(5.75, 5.75)),
                    height: .5,
                    map: {
                        display: !0,
                        color: 8602624,
                        scale: 1
                    },
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .75
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-tree-09.img",
                        scale: .5,
                        zIdx: 10
                    }
                }),
                tree_10: W({
                    collision: _e.createCircle(ve.create(0, 0), 1.25),
                    scale: {
                        createMin: .9,
                        createMax: 1.1
                    },
                    map: {
                        color: 7571807,
                        scale: 2.5
                    },
                    img: {
                        sprite: "map-tree-10.img"
                    }
                }),
                tree_11: W({
                    collision: _e.createCircle(ve.create(0, 0), 1.25),
                    scale: {
                        createMin: 1,
                        createMax: 1
                    },
                    img: {
                        sprite: "map-tree-11.img",
                        scale: .5,
                        alpha: .92,
                        zIdx: 201
                    }
                }),
                tree_switch_01: K({
                    img: {
                        sprite: "map-tree-switch-01.img"
                    }
                }),
                tree_switch_02: K({
                    img: {
                        sprite: "map-tree-switch-02.img"
                    }
                }),
                tree_switch_03: K({
                    img: {
                        sprite: "map-tree-switch-03.img"
                    }
                }),
                vat_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .9
                    },
                    collision: _e.createCircle(ve.create(0, 0), 2),
                    height: .5,
                    collidable: !0,
                    destructible: !0,
                    health: 250,
                    reflectBullets: !1,
                    hitParticle: "glassChip",
                    explodeParticle: "windowBreak",
                    loot: [],
                    map: {
                        display: !0,
                        color: 11776947,
                        scale: 1
                    },
                    terrain: {
                        grass: !1,
                        beach: !1
                    },
                    img: {
                        sprite: "map-vat-01.img",
                        residue: "map-vat-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "glass_bullet",
                        punch: "glass_bullet",
                        explode: "window_break_01",
                        enter: "none"
                    }
                },
                vat_02: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .95
                    },
                    collision: _e.createCircle(ve.create(0, 0), 3.1),
                    height: .5,
                    collidable: !0,
                    destructible: !1,
                    health: 1e3,
                    reflectBullets: !1,
                    hitParticle: "glassChip",
                    explodeParticle: "windowBreak",
                    loot: [],
                    map: {
                        display: !0,
                        color: 11776947,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    img: {
                        sprite: "map-vat-02.img",
                        residue: "map-vat-res.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "glass_bullet",
                        punch: "glass_bullet",
                        explode: "window_break_01",
                        enter: "none"
                    }
                },
                vending_01: function(e) {
                    var t = {
                        type: "obstacle",
                        scale: {
                            createMin: 1,
                            createMax: 1,
                            destroy: .75
                        },
                        collision: _e.createAabbExtents(ve.create(0, .15), ve.create(1.7, 1.25)),
                        height: .5,
                        collidable: !0,
                        destructible: !0,
                        health: 150,
                        hitParticle: "blueChip",
                        explodeParticle: ["windowBreak", "lockerBreak"],
                        reflectBullets: !0,
                        loot: [s("tier_vending_soda", 1, 3), l("soda", 1)],
                        map: {
                            display: !1,
                            color: 10925,
                            scale: .875
                        },
                        terrain: {
                            grass: !0,
                            beach: !0
                        },
                        img: {
                            sprite: "map-vending-soda-01.img",
                            residue: "map-vending-res.img",
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            zIdx: 10
                        },
                        sound: {
                            bullet: "wall_bullet",
                            punch: "metal_punch",
                            explode: "vending_break_01",
                            enter: "none"
                        }
                    };
                    return ke.mergeDeep(t, {})
                }(),
                wheel_01: X({
                    button: {
                        interactionRad: 1,
                        interactionText: "game-use",
                        useOnce: !0,
                        useType: "",
                        useDelay: 2.5,
                        useDir: ve.create(-1, 0),
                        useImg: "map-wheel-02.img",
                        sound: {
                            on: "wheel_control_01",
                            off: ""
                        }
                    }
                }),
                wheel_02: X({
                    img: {
                        sprite: "map-wheel-02.img"
                    }
                }),
                wheel_03: X({
                    img: {
                        sprite: "map-wheel-03.img"
                    }
                }),
                woodpile_01: Y({}),
                woodpile_02: Y({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(6, 3)),
                    health: 400,
                    destructible: !0,
                    img: {
                        sprite: "map-woodpile-02.img",
                        residue: "map-woodpile-res-02.img"
                    }
                }),
                bank_window_01: {
                    type: "obstacle",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: 1
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.4, 2)),
                    height: 10,
                    collidable: !0,
                    destructible: !0,
                    isWindow: !0,
                    health: 75,
                    hitParticle: "glassChip",
                    explodeParticle: ["windowBreak", "redPlank"],
                    reflectBullets: !1,
                    loot: [],
                    img: {
                        sprite: "map-building-bank-window-01.img",
                        residue: "map-building-bank-window-res-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    },
                    sound: {
                        bullet: "glass_bullet",
                        punch: "glass_bullet",
                        explode: "window_break_02",
                        enter: "none"
                    }
                },
                house_door_01: T({
                    material: "wood",
                    hinge: ve.create(0, 2),
                    extents: ve.create(.3, 2)
                }),
                house_door_02: T({
                    material: "metal",
                    hinge: ve.create(0, 2),
                    extents: ve.create(.3, 2),
                    door: {
                        sound: {
                            open: "door_open_02",
                            close: "door_close_02"
                        }
                    },
                    img: {
                        tint: 4934475
                    }
                }),
                house_door_03: T({
                    material: "wood",
                    hinge: ve.create(0, 2),
                    extents: ve.create(.5, 1.75),
                    img: {
                        sprite: "map-door-03.img"
                    }
                }),
                house_door_05: T({
                    material: "glass",
                    hinge: ve.create(0, 2),
                    extents: ve.create(.3, 2),
                    img: {
                        sprite: "map-door-05.img"
                    }
                }),
                crossing_door_01: T({
                    material: "metal",
                    hinge: ve.create(0, 2),
                    extents: ve.create(.3, 2),
                    door: {
                        canUse: !1,
                        openOnce: !0,
                        sound: {
                            open: "door_open_02",
                            close: "door_close_02"
                        }
                    },
                    img: {
                        tint: 3159362
                    }
                }),
                cell_door_01: T({
                    material: "metal",
                    hinge: ve.create(0, 2),
                    extents: ve.create(.3, 2),
                    door: {
                        canUse: !1,
                        openOnce: !0,
                        sound: {
                            open: "door_open_02",
                            close: "door_close_02"
                        }
                    },
                    img: {
                        tint: 1776411
                    }
                }),
                eye_door_01: T({
                    material: "metal",
                    hinge: ve.create(0, 2),
                    extents: ve.create(.3, 2),
                    door: {
                        canUse: !1,
                        openOnce: !0,
                        openOneWay: -1,
                        sound: {
                            open: "door_open_02",
                            close: "door_close_02"
                        }
                    },
                    img: {
                        tint: 921102
                    }
                }),
                lab_door_01: P({
                    img: {
                        tint: 5373952
                    }
                }),
                lab_door_02: P({
                    door: {
                        openOneWay: !0,
                        slideOffset: -3.75,
                        casingImg: {
                            pos: ve.create(6, 0)
                        }
                    },
                    img: {
                        tint: 5373952
                    }
                }),
                lab_door_03: P({
                    door: {
                        openOneWay: !0
                    },
                    img: {
                        tint: 5373952
                    }
                }),
                house_window_01: we(),
                house_window_broken_01: xe(),
                lab_window_01: we({
                    destroyType: "lab_window_broken_01"
                }),
                lab_window_broken_01: xe({
                    img: {
                        tint: 1316379
                    }
                }),
                container_05_collider: Z({
                    material: "metal",
                    extents: ve.create(2.75, 6)
                }),
                container_05: {
                    type: "building",
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .5
                    },
                    zIdx: 1,
                    map: {
                        display: !0,
                        color: 11485762,
                        scale: 1
                    },
                    terrain: {
                        grass: !1,
                        beach: !1
                    },
                    floor: {
                        surfaces: [{
                            type: "container",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))]
                        }],
                        imgs: [{
                            sprite: "",
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 2.4), ve.create(2.5, 5.75))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 2.4), ve.create(2.5, 5.75))],
                        imgs: [{
                            sprite: "map-building-container-ceiling-05.img",
                            scale: .5,
                            alpha: 1,
                            tint: 11485762
                        }]
                    },
                    mapObjects: [{
                        type: "container_05_collider",
                        pos: ve.create(0, 2.4),
                        scale: 1,
                        ori: 0
                    }]
                },
                greenhouse_01: re({}),
                greenhouse_02: re({
                    floor_images: [{
                        sprite: "map-building-greenhouse-floor-02.img",
                        pos: ve.create(0, 10),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }, {
                        sprite: "map-building-greenhouse-floor-02.img",
                        pos: ve.create(0, -10),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, 21),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 0
                    }, {
                        sprite: "map-building-porch-01.img",
                        pos: ve.create(0, -21),
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        rot: 2
                    }],
                    ceiling_images: [{
                        sprite: "map-building-greenhouse-ceiling-02.img",
                        scale: 1,
                        alpha: 1,
                        tint: 16777215
                    }],
                    mapObjects: [{
                        type: "glass_wall_10",
                        pos: ve.create(-7, 19.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(-7, -19.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(-12.5, 15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(-12.5, 5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(-12.5, -15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(-12.5, -5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(7, 19.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(7, -19.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(12.5, 15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(12.5, 5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(12.5, -15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_10",
                        pos: ve.create(12.5, -5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "house_door_05",
                        pos: ve.create(2, 19.75),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_05",
                        pos: ve.create(-2, -19.75),
                        scale: 1,
                        ori: 3
                    }, {
                        type: c({
                            planter_06: 2,
                            "": 1
                        }),
                        pos: ve.create(-4.5, 14.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_06: 2,
                            "": 1
                        }),
                        pos: ve.create(-7, 2.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            planter_06: 2,
                            "": 1
                        }),
                        pos: ve.create(-7, -2.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            planter_06: 2,
                            "": 1
                        }),
                        pos: ve.create(-4.5, -14.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_06: 2,
                            "": 1
                        }),
                        pos: ve.create(4.5, 14.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_06: 2,
                            "": 1
                        }),
                        pos: ve.create(7, 2.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            planter_06: 2,
                            "": 1
                        }),
                        pos: ve.create(7, -2.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            planter_06: 2,
                            "": 1
                        }),
                        pos: ve.create(4.5, -14.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-15, 11),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "sandbags_02",
                        pos: ve.create(-15, 7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "sandbags_02",
                        pos: ve.create(15.5, -7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(19.5, -7),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "bunker_structure_08b",
                        pos: ve.create(-9.5, -15.5),
                        scale: 1,
                        ori: 0
                    }]
                }),
                bunker_chrys_01: {
                    type: "building",
                    map: {
                        display: !1,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(0, 10), ve.create(3.6, 5.8)),
                            color: 6707790
                        }]
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 2,
                    floor: {
                        surfaces: [{
                            type: "container",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 3.25))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-generic-floor-03.img",
                            pos: ve.create(0, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, -.25), ve.create(1.5, 3.25))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, -.25), ve.create(1.5, 3.25))],
                        imgs: [{
                            sprite: "map-bunker-generic-ceiling-02.img",
                            pos: ve.create(0, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_5",
                        pos: ve.create(0, -3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_7",
                        pos: ve.create(-2, .1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_7",
                        pos: ve.create(2, .1),
                        scale: 1,
                        ori: 0
                    }]
                },
                lab_door_chrys: T({
                    destructible: !1,
                    material: "concrete",
                    hinge: ve.create(0, 2),
                    extents: ve.create(.3, 2),
                    door: {
                        canUse: !1,
                        openOnce: !0,
                        openOneWay: !1,
                        openSpeed: 7,
                        autoOpen: !1,
                        autoClose: !1,
                        slideToOpen: !0,
                        slideOffset: 3.75,
                        sound: {
                            open: "door_open_03",
                            close: "door_close_03",
                            error: "door_error_01"
                        },
                        casingImg: {
                            sprite: "map-door-slot-01.img",
                            pos: ve.create(-2, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 1316379,
                            zIdx: 60
                        }
                    },
                    img: {
                        tint: 5373952
                    }
                }),
                bunker_chrys_sublevel_01: {
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
                            collision: [_e.createAabbExtents(ve.create(11, -12), ve.create(14.5, 9))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-chrys-chamber-floor-01a.img",
                            pos: ve.create(0, 1.85),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-chrys-chamber-floor-01b.img",
                            pos: ve.create(11, -10.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(11, -12), ve.create(14.5, 9))],
                        scopeOut: [_e.createAabbExtents(ve.create(11, -12), ve.create(14.5, 9))],
                        imgs: [{
                            sprite: "map-bunker-chrys-chamber-ceiling-01.img",
                            pos: ve.create(11.5, -11),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }]
                    },
                    puzzle: {
                        solution: "bunker_chrys_01",
                        completeUseType: "lab_door_chrys",
                        completeOffDelay: 1,
                        completeUseDelay: 2,
                        errorResetDelay: 1,
                        pieceResetDelay: 10,
                        sound: {
                            fail: "door_error_01",
                            complete: "none"
                        }
                    },
                    mapObjects: [{
                        type: "concrete_wall_ext_5",
                        pos: ve.create(0, 4),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_26",
                        pos: ve.create(-3, -8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_9",
                        pos: ve.create(3, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_19",
                        pos: ve.create(14, -3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_25",
                        pos: ve.create(11, -20),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(25, -5.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(25, -17.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(4.5, -4.15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_03",
                        pos: ve.create(8, -4.15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(.5, -16.5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(12, -9.5),
                        scale: .8,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(12, -13.5),
                        scale: .8,
                        ori: 0
                    }, {
                        type: "couch_01",
                        pos: ve.create(15.5, -11.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "screen_01",
                        pos: ve.create(23, -11.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "switch_01",
                        pos: ve.create(18.5, -4.25),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "ichi"
                    }, {
                        type: "switch_01",
                        pos: ve.create(21.5, -4.25),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "shi"
                    }, {
                        type: "switch_01",
                        pos: ve.create(18.5, -18.75),
                        scale: 1,
                        ori: 2,
                        puzzlePiece: "ni"
                    }, {
                        type: "switch_01",
                        pos: ve.create(21.5, -18.75),
                        scale: 1,
                        ori: 2,
                        puzzlePiece: "san"
                    }, {
                        type: "lab_door_chrys",
                        pos: ve.create(25.5, -9.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "bunker_chrys_compartment_01",
                        pos: ve.create(39.5, -6),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_chrys_compartment_02",
                        pos: ve.create(43.5, 19),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_chrys_compartment_03",
                        pos: ve.create(43.5, 43),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_chrys_sublevel_01b: {
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
                            collision: [_e.createAabbExtents(ve.create(11, -12), ve.create(14.5, 9))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-chrys-chamber-floor-01a.img",
                            pos: ve.create(0, 1.85),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-chrys-chamber-floor-01b.img",
                            pos: ve.create(11, -10.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(11, -12), ve.create(14.5, 9))],
                        scopeOut: [_e.createAabbExtents(ve.create(11, -12), ve.create(14.5, 9))],
                        imgs: [{
                            sprite: "map-bunker-chrys-chamber-ceiling-01.img",
                            pos: ve.create(11.5, -11),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }]
                    },
                    mapObjects: [{
                        type: "concrete_wall_ext_5",
                        pos: ve.create(0, 4),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_26",
                        pos: ve.create(-3, -8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_9",
                        pos: ve.create(3, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_19",
                        pos: ve.create(14, -3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_25",
                        pos: ve.create(11, -20),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(25, -5.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(25, -17.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(4.5, -4.15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(.5, -16.5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(12, -9.5),
                        scale: .8,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_01",
                        pos: ve.create(12, -13.5),
                        scale: .8,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "couch_01",
                        pos: ve.create(15.5, -11.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "switch_02",
                        pos: ve.create(18.5, -4.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "switch_02",
                        pos: ve.create(21.5, -4.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "switch_02",
                        pos: ve.create(18.5, -18.75),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "switch_02",
                        pos: ve.create(21.5, -18.75),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(25.5, -9.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "bunker_chrys_compartment_01b",
                        pos: ve.create(39.5, -6),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_chrys_compartment_02b",
                        pos: ve.create(43.5, 19),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_chrys_compartment_03b",
                        pos: ve.create(43.5, 43),
                        scale: 1,
                        ori: 0
                    }]
                },
                vault_door_chrys_01: T({
                    material: "metal",
                    hinge: ve.create(1, 3.5),
                    extents: ve.create(1, 3.5),
                    img: {
                        sprite: "map-door-02.img"
                    },
                    door: {
                        interactionRad: 1.5,
                        openSpeed: .23,
                        openOneWay: -1,
                        openDelay: 4.1,
                        openOnce: !0,
                        spriteAnchor: ve.create(.2, 1),
                        sound: {
                            open: "none",
                            close: "none",
                            change: "vault_change_01"
                        }
                    }
                }),
                vault_door_chrys_02: T({
                    material: "metal",
                    hinge: ve.create(1, 3.5),
                    extents: ve.create(1, 3.5),
                    img: {
                        sprite: "map-door-02.img"
                    },
                    door: {
                        canUse: !1,
                        spriteAnchor: ve.create(.2, 1)
                    }
                }),
                bunker_chrys_compartment_01: {
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
                            collision: [_e.createAabbExtents(ve.create(0, 2), ve.create(14, 13))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-floor-01a.img",
                            pos: ve.create(-12.5, -4.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-chrys-compartment-floor-01b.img",
                            pos: ve.create(3.5, 2),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 2), ve.create(14, 13))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 2), ve.create(14, 13))],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-ceiling-01a.img",
                            pos: ve.create(-10.5, -2.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }, {
                            sprite: "map-bunker-chrys-compartment-ceiling-01b.img",
                            pos: ve.create(4, 3),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }]
                    },
                    puzzle: {
                        solution: "bunker_chrys_02",
                        completeUseType: "vault_door_chrys_01",
                        completeOffDelay: 1,
                        completeUseDelay: 5.5,
                        errorResetDelay: 1,
                        pieceResetDelay: 10,
                        sound: {
                            fail: "door_error_01",
                            complete: "vault_change_03"
                        }
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-11, -2),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-11, 1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_27",
                        pos: ve.create(.5, -9),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_42",
                        pos: ve.create(15.5, 10.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_34",
                        pos: ve.create(-7.5, 17),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_column_4x8",
                        pos: ve.create(-3.5, 14.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_column_4x8",
                        pos: ve.create(11.5, 14.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            crate_01: 2,
                            crate_04: 1
                        }),
                        pos: ve.create(1.5, 5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            crate_01: 2,
                            crate_04: 1
                        }),
                        pos: ve.create(1.5, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            crate_01: 2,
                            crate_04: 1
                        }),
                        pos: ve.create(6.5, 5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            crate_01: 2,
                            crate_04: 1
                        }),
                        pos: ve.create(6.5, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "vault_door_chrys_01",
                        pos: ve.create(.5, 15.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "loot_tier_chrys_01",
                        pos: ve.create(12, -5.5),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_chrys_compartment_01b: {
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
                            collision: [_e.createAabbExtents(ve.create(0, 2), ve.create(14, 13))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-floor-01a.img",
                            pos: ve.create(-12.5, -4.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-chrys-compartment-floor-01c.img",
                            pos: ve.create(3.5, 2),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 2), ve.create(14, 13))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 2), ve.create(14, 13))],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-ceiling-01a.img",
                            pos: ve.create(-10.5, -2.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }, {
                            sprite: "map-bunker-chrys-compartment-ceiling-01b.img",
                            pos: ve.create(4, 3),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }]
                    },
                    puzzle: {
                        solution: "bunker_chrys_02",
                        completeUseType: "vault_door_chrys_02",
                        completeOffDelay: 1,
                        completeUseDelay: 5.5,
                        errorResetDelay: 1,
                        pieceResetDelay: 10,
                        sound: {
                            fail: "door_error_01",
                            complete: "vault_change_03"
                        }
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-11, -2),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-11, 1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_27",
                        pos: ve.create(.5, -9),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_42",
                        pos: ve.create(15.5, 10.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_34",
                        pos: ve.create(-7.5, 17),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_column_4x8",
                        pos: ve.create(-3.5, 14.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_column_4x8",
                        pos: ve.create(11.5, 14.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(-.5, 7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(2.5, 7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(5.5, 7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(8.5, 7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(-.5, 4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(8.5, 4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(-.5, 1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(8.5, 1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(-.5, -2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(2.5, -2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(5.5, -2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            planter_07: 2,
                            "": 1
                        }),
                        pos: ve.create(8.5, -2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "vault_door_chrys_02",
                        pos: ve.create(.5, 15.5),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_chrys_compartment_02: {
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
                            type: "bunker",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 10))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-floor-02a.img",
                            pos: ve.create(0, -2.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-chrys-compartment-floor-02b.img",
                            pos: ve.create(0, 9.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 11))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 11))],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-ceiling-02a.img",
                            pos: ve.create(0, 8.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }, {
                            sprite: "map-bunker-chrys-compartment-ceiling-02b.img",
                            pos: ve.create(0, -2.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-8, 6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(8, 6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(-7.5, 10.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(7.5, 10.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-4, 12),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(4, 12),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "loot_tier_chrys_02",
                        pos: ve.create(8, -6.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "glass_wall_12",
                        pos: ve.create(0, 5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "control_panel_06",
                        pos: ve.create(-8.5, 1.5),
                        scale: 1,
                        ori: 1
                    }]
                },
                bunker_chrys_compartment_02b: {
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
                            type: "bunker",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 10))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-floor-02a.img",
                            pos: ve.create(0, -2.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-chrys-compartment-floor-02c.img",
                            pos: ve.create(0, 9.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 11))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 11))],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-ceiling-02a.img",
                            pos: ve.create(0, 8.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }, {
                            sprite: "map-bunker-chrys-compartment-ceiling-02b.img",
                            pos: ve.create(0, -2.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-8, 6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(8, 6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(-7.5, 10.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(7.5, 10.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-4, 12),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(4, 12),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "loot_tier_chrys_01",
                        pos: ve.create(8, -6.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "control_panel_06",
                        pos: ve.create(-8.5, 1.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "control_panel_06",
                        pos: ve.create(8.5, 1.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "stone_wall_int_4",
                        pos: ve.create(0, 10.9),
                        scale: 1,
                        ori: 1
                    }]
                },
                bunker_chrys_compartment_03: {
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
                            type: "bunker",
                            collision: [_e.createAabbExtents(ve.create(0, -1), ve.create(10, 14))]
                        }, {
                            type: "grass",
                            collision: [_e.createAabbExtents(ve.create(0, 11), ve.create(10, 4)), _e.createAabbExtents(ve.create(-7, -3), ve.create(3, 3)), _e.createAabbExtents(ve.create(8, -3), ve.create(2, 3))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-floor-03a.img",
                            pos: ve.create(0, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 13))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 13))],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-ceiling-03a.img",
                            pos: ve.create(0, -9.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731,
                            rot: 0
                        }, {
                            sprite: "map-bunker-chrys-compartment-ceiling-03b.img",
                            pos: ve.create(0, 3),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731,
                            rot: 0
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(-7.5, -8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(7.5, -8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-11, -7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(11, -7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(-11.5, 4.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(11.5, 4.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(0, 13),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_01",
                        pos: ve.create(0, 4.75),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(3, .5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(-3, .5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "wheel_03",
                        pos: ve.create(0, 9.1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wheel_03",
                        pos: ve.create(-7.6, 1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wheel_03",
                        pos: ve.create(7.6, 1),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "loot_tier_chrys_03",
                        pos: ve.create(0, -5.5),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_chrys_compartment_03b: {
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
                            type: "bunker",
                            collision: [_e.createAabbExtents(ve.create(0, -1), ve.create(10, 14))]
                        }, {
                            type: "grass",
                            collision: [_e.createAabbExtents(ve.create(0, 11), ve.create(10, 4)), _e.createAabbExtents(ve.create(-7, -3), ve.create(3, 3)), _e.createAabbExtents(ve.create(8, -3), ve.create(2, 3))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-floor-03a.img",
                            pos: ve.create(0, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 13))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 13))],
                        imgs: [{
                            sprite: "map-bunker-chrys-compartment-ceiling-03a.img",
                            pos: ve.create(0, -9.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731,
                            rot: 0
                        }, {
                            sprite: "map-bunker-chrys-compartment-ceiling-03b.img",
                            pos: ve.create(0, 3),
                            scale: 1,
                            alpha: 1,
                            tint: 6182731,
                            rot: 0
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(-7.5, -8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(7.5, -8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-11, -7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(11, -7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(-11.5, 4.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(11.5, 4.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(0, 13),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_01",
                        pos: ve.create(0, 4.75),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(3, .5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(-3, .5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "wheel_03",
                        pos: ve.create(0, 9.1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wheel_03",
                        pos: ve.create(-7.6, 1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wheel_02",
                        pos: ve.create(7.6, 1),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "case_05",
                        pos: ve.create(0, -5.5),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_structure_08: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    ori: 0,
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(5, 5), ve.create(15, 15))],
                    layers: [{
                        type: "bunker_chrys_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_chrys_sublevel_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 2.6)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(11.5, -12.25), ve.create(14, 9.5)), _e.createAabbExtents(ve.create(40, 20), ve.create(14.45, 35))]
                },
                bunker_structure_08b: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    ori: 0,
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(5, 5), ve.create(15, 15))],
                    layers: [{
                        type: "bunker_chrys_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_chrys_sublevel_01b",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 2.6)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(11.5, -12.25), ve.create(14, 9.5)), _e.createAabbExtents(ve.create(40, 20), ve.create(14.45, 35))]
                },
                hedgehog_wall: Z({
                    material: "metal",
                    extents: ve.create(3, .5),
                    height: .5,
                    map: {
                        display: !0,
                        color: 5854285,
                        scale: 1
                    }
                }),
                hedgehog_01: {
                    type: "building",
                    map: {
                        display: !1,
                        color: 6707790,
                        scale: 1
                    },
                    terrain: {
                        grass: !1,
                        beach: !0
                    },
                    floor: {
                        surfaces: [],
                        imgs: [{
                            sprite: "map-hedgehog-01.img",
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
                        type: "hedgehog_wall",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "hedgehog_wall",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }]
                },
                cache_01: f({}),
                cache_02: f({
                    mapObjects: [{
                        type: "tree_03",
                        pos: ve.create(0, 0),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "decal_initiative_01",
                        pos: ve.create(0, 0),
                        scale: 1.2,
                        ori: 0,
                        inheritOri: !1
                    }]
                }),
                cache_03: f({
                    mapObjects: [{
                        type: "bush_06",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "loot_tier_leaf_pile",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }]
                }),
                cache_04: f({
                    mapObjects: [{
                        type: "pumpkin_01",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_light_01",
                        pos: ve.create(0, 0),
                        scale: 1.5,
                        ori: 0,
                        inheritOri: !1
                    }]
                }),
                cache_05: f({
                    mapObjects: [{
                        type: "pumpkin_02",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_light_01",
                        pos: ve.create(0, 0),
                        scale: 1.5,
                        ori: 0,
                        inheritOri: !1
                    }]
                }),
                cache_06: f({
                    mapObjects: [{
                        type: "bush_07",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "loot_tier_leaf_pile",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }]
                }),
                cache_07: f({
                    mapObjects: [{
                        type: "barrel_01b",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_initiative_01",
                        pos: ve.create(0, 0),
                        scale: 1.1,
                        ori: 0,
                        inheritOri: !1
                    }]
                }),
                candle_lit_01: f({
                    mapObjects: [{
                        type: "candle_01",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_light_02",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }]
                }),
                candle_lit_02: f({
                    mapObjects: [{
                        type: "candle_01",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_light_03",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }]
                }),
                hut_wall_int_4: Z({
                    material: "wood",
                    extents: ve.create(.5, 2),
                    hitParticle: "tanChip",
                    img: m("map-wall-04.img", 4608e3)
                }),
                hut_wall_int_5: Z({
                    material: "wood",
                    extents: ve.create(.5, 2.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-05.img", 4608e3)
                }),
                hut_wall_int_6: Z({
                    material: "wood",
                    extents: ve.create(.5, 3),
                    hitParticle: "tanChip",
                    img: m("map-wall-06.img", 4608e3)
                }),
                hut_wall_int_12: Z({
                    material: "wood",
                    extents: ve.create(.5, 6),
                    hitParticle: "tanChip",
                    img: m("map-wall-12.img", 4608e3)
                }),
                hut_wall_int_14: Z({
                    material: "wood",
                    extents: ve.create(.5, 7),
                    hitParticle: "tanChip",
                    img: m("map-wall-14.img", 4608e3)
                }),
                hut_window_open_01: xe({
                    img: {
                        tint: 7681026
                    }
                }),
                hut_01: ae({}),
                hut_01x: ae({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-hut-ceiling-01.img",
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-04.img",
                            pos: ve.create(4.5, .5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-05.img",
                            pos: ve.create(-.5, 5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }]
                    }
                }),
                hut_02: ae({
                    ceilingImg: "map-building-hut-ceiling-02.img",
                    specialLoot: "pot_02"
                }),
                hut_02x: ae({
                    specialLoot: "pot_02",
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-hut-ceiling-02.img",
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-04.img",
                            pos: ve.create(4.5, .5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-05.img",
                            pos: ve.create(.5, -4.5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 3
                        }]
                    }
                }),
                warehouse_wall_side: Z({
                    material: "metal",
                    extents: ve.create(25, .6)
                }),
                warehouse_wall_edge: Z({
                    material: "metal",
                    extents: ve.create(.6, 3.2)
                }),
                warehouse_01: ge({
                    topLeftObs: "crate_01",
                    topRightObs: "crate_01",
                    botRightObs: "crate_01",
                    ignoreMapSpawnReplacement: !0
                }),
                warehouse_01b: ge({
                    topLeftObs: "crate_01",
                    topRightObs: "crate_01",
                    botRightObs: "crate_01",
                    decoration_01: "candle_lit_01",
                    ignoreMapSpawnReplacement: !0
                }),
                warehouse_01f: ge({
                    topLeftObs: "crate_01",
                    topRightObs: "crate_01",
                    botRightObs: "crate_01",
                    ignoreMapSpawnReplacement: !1
                }),
                warehouse_01x: ge({
                    topLeftObs: "crate_01",
                    topRightObs: "crate_01",
                    botRightObs: "crate_01",
                    ignoreMapSpawnReplacement: !0,
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-warehouse-ceiling-01.img",
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-04.img",
                            pos: ve.create(7.5, 5),
                            scale: .9,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }, {
                            sprite: "map-snow-05.img",
                            pos: ve.create(-8.5, 4),
                            scale: .9,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(22.25, 11.25),
                            scale: .75,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(-22.25, -11.25),
                            scale: .75,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }]
                    }
                }),
                warehouse_02: ye({}),
                warehouse_02x: ye({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-warehouse-ceiling-02.img",
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-04.img",
                            pos: ve.create(0, 4),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(20.25, -9.75),
                            scale: .75,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(-20.25, 9.75),
                            scale: .75,
                            alpha: 1,
                            tint: 16777215,
                            rot: 3
                        }]
                    }
                }),
                warehouse_complex_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(26, 70.5), ve.create(47, 7.5)),
                            color: 5855577
                        }, {
                            collider: _e.createAabbExtents(ve.create(15.5, 52.5), ve.create(57.5, 10.5)),
                            color: 5855577
                        }, {
                            collider: _e.createAabbExtents(ve.create(33, 11), ve.create(75, 31)),
                            color: 5855577
                        }, {
                            collider: _e.createAabbExtents(ve.create(5, -30), ve.create(47, 10)),
                            color: 5855577
                        }, {
                            collider: _e.createAabbExtents(ve.create(-39.75, 11.25), ve.create(2, 51)),
                            color: 16109568
                        }, {
                            collider: _e.createCircle(ve.create(-39, 55), 1.25),
                            color: 6310464
                        }, {
                            collider: _e.createCircle(ve.create(-39, 20.5), 1.25),
                            color: 6310464
                        }, {
                            collider: _e.createCircle(ve.create(-39, 2), 1.25),
                            color: 6310464
                        }, {
                            collider: _e.createCircle(ve.create(-39, -31.5), 1.25),
                            color: 6310464
                        }, {
                            collider: _e.createAabbExtents(ve.create(-28, -30), ve.create(2, 2)),
                            color: 6697728
                        }, {
                            collider: _e.createAabbExtents(ve.create(-23, -33), ve.create(2, 2)),
                            color: 6697728
                        }, {
                            collider: _e.createAabbExtents(ve.create(7, 70), ve.create(2, 2)),
                            color: 6697728
                        }, {
                            collider: _e.createAabbExtents(ve.create(12, 72), ve.create(2, 2)),
                            color: 6697728
                        }, {
                            collider: _e.createCircle(ve.create(-26.5, 54.75), 1.75),
                            color: 8026746
                        }, {
                            collider: _e.createCircle(ve.create(-23.5, 57), 1.75),
                            color: 8026746
                        }, {
                            collider: _e.createCircle(ve.create(84, -15.5), 1.75),
                            color: 8026746
                        }, {
                            collider: _e.createCircle(ve.create(40, -35), 1.5),
                            color: 8026746
                        }, {
                            collider: _e.createCircle(ve.create(65, 61), 1.5),
                            color: 8026746
                        }, {
                            collider: _e.createAabbExtents(ve.create(44.5, -25), ve.create(1.4, 3.1)),
                            color: 13278307
                        }, {
                            collider: _e.createAabbExtents(ve.create(58, 47.5), ve.create(1.4, 3.1)),
                            color: 13278307
                        }]
                    },
                    terrain: {
                        waterEdge: {
                            dir: ve.create(-1, 0),
                            distMin: 72,
                            distMax: 72
                        }
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(26, 70.5), ve.create(47, 7.5)), _e.createAabbExtents(ve.create(15.5, 52.5), ve.create(57.5, 10.5)), _e.createAabbExtents(ve.create(33, 11), ve.create(75, 31)), _e.createAabbExtents(ve.create(5, -30), ve.create(47, 10))],
                    floor: {
                        surfaces: [{
                            type: "asphalt",
                            collision: [_e.createAabbExtents(ve.create(26, 70.5), ve.create(47, 7.5)), _e.createAabbExtents(ve.create(15.5, 52.5), ve.create(57.5, 10.5)), _e.createAabbExtents(ve.create(33, 11), ve.create(75, 31)), _e.createAabbExtents(ve.create(5, -30), ve.create(47, 10))]
                        }],
                        imgs: [{
                            sprite: "map-complex-warehouse-floor-01.img",
                            pos: ve.create(-31.5, 37.25),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-complex-warehouse-floor-01.img",
                            pos: ve.create(-31.5, -14.25),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215,
                            mirrorY: !0
                        }, {
                            sprite: "map-complex-warehouse-floor-02.img",
                            pos: ve.create(25.95, 19),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-complex-warehouse-floor-03.img",
                            pos: ve.create(90.4, 26.5),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215,
                            mirrorY: !0
                        }, {
                            sprite: "map-complex-warehouse-floor-03.img",
                            pos: ve.create(90.4, -4.5),
                            scale: 1,
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
                        type: "warehouse_02",
                        pos: ve.create(5, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "warehouse_02",
                        pos: ve.create(70, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "warehouse_02",
                        pos: ve.create(18, 55),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bollard_01",
                        pos: ve.create(-39, 55),
                        scale: 1,
                        ori: 2
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1,
                            container_06: .12
                        }),
                        pos: ve.create(-37.5, 38),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bollard_01",
                        pos: ve.create(-39, 20.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "bollard_01",
                        pos: ve.create(-39, 2),
                        scale: 1,
                        ori: 2
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1,
                            container_06: .12
                        }),
                        pos: ve.create(-37.5, -15),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "bollard_01",
                        pos: ve.create(-39, -31.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "crate_01",
                        pos: ve.create(-28, -30),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(-23, -33),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "container_04",
                        pos: ve.create(-11.5, -26.575),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1,
                            container_05: 2,
                            container_06: .12,
                            "": .75
                        }),
                        pos: ve.create(-6, -29),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1,
                            container_05: 2,
                            container_06: .12,
                            "": .75
                        }),
                        pos: ve.create(9.5, -29),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "container_04",
                        pos: ve.create(15, -26.575),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "shack_02",
                        pos: ve.create(37, -30),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(44.5, -25),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(84, -15.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1,
                            container_05: 2,
                            container_06: .12,
                            "": .75
                        }),
                        pos: ve.create(-3, 22),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "container_04",
                        pos: ve.create(-5.425, 27.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1,
                            container_05: 2,
                            container_06: .12,
                            "": .75
                        }),
                        pos: ve.create(-3, 33),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "container_04",
                        pos: ve.create(28, 22),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "container_04",
                        pos: ve.create(28, 27.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "container_04",
                        pos: ve.create(28, 33),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1,
                            container_05: 2,
                            container_06: .12,
                            "": .75
                        }),
                        pos: ve.create(53, 22),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "container_04",
                        pos: ve.create(55.425, 27.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1,
                            container_05: 2,
                            container_06: .12,
                            "": .75
                        }),
                        pos: ve.create(53, 33),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "container_04",
                        pos: ve.create(84, 22),
                        scale: 1,
                        ori: 3
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1,
                            container_05: 2,
                            container_06: .12,
                            "": .75
                        }),
                        pos: ve.create(86.425, 27.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-26.5, 54.75),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-23.5, 57),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(7, 70),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(12, 72),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "shack_02",
                        pos: ve.create(60, 58),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(58, 47.5),
                        scale: 1,
                        ori: 1
                    }]
                },
                logging_complex_01: oe({}),
                logging_complex_01s: oe({
                    groundTintLt: 3361294,
                    groundTintDk: 2437648
                }),
                logging_complex_02: ne({}),
                logging_complex_02s: ne({
                    groundTintDk: 2437648,
                    tree_08c: "tree_08sc"
                }),
                junkyard_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: []
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    ori: 0,
                    mapObstacleBounds: [_e.createCircle(ve.create(0, 0), 37)],
                    mapGroundPatches: [{
                        bound: _e.createAabbExtents(ve.create(-8.5, 24), ve.create(13, 9)),
                        color: 1446402
                    }, {
                        bound: _e.createAabbExtents(ve.create(26.75, 8.5), ve.create(8, 5.5)),
                        color: 1446402
                    }, {
                        bound: _e.createAabbExtents(ve.create(23.75, -15.5), ve.create(7, 5.5)),
                        color: 1446402
                    }, {
                        bound: _e.createAabbExtents(ve.create(-23.5, -10), ve.create(4.75, 3.5)),
                        color: 1446402
                    }],
                    floor: {
                        surfaces: [{
                            type: "grass",
                            collision: []
                        }],
                        imgs: []
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        imgs: []
                    },
                    mapObjects: [{
                        type: "tree_05b",
                        pos: ve.create(0, 0),
                        scale: 1.5,
                        ori: 0
                    }, {
                        type: "candle_lit_01",
                        pos: ve.create(-9, 3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "candle_lit_01",
                        pos: ve.create(9, 3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "candle_lit_01",
                        pos: ve.create(-6.5, -7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "candle_lit_01",
                        pos: ve.create(6.5, -7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "candle_lit_01",
                        pos: ve.create(0, 9),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-2.5, 29.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-6.5, 29),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-10.5, 29.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-14.5, 30),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(1.5, 23.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-2.5, 24.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-6.5, 24),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-10.5, 24),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-14.5, 23.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-18.5, 24.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-2.5, 18.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-6.5, 18),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-10.5, 18.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            refrigerator_01: 3,
                            "": 1
                        }),
                        pos: ve.create(-14.5, 19),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            "": 1,
                            table_01: 3
                        }),
                        pos: ve.create(22.5, 6),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            "": 1,
                            table_01: 3
                        }),
                        pos: ve.create(29, 6),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            "": 1,
                            table_01: 3
                        }),
                        pos: ve.create(24.5, 11),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            "": 1,
                            table_01: 3
                        }),
                        pos: ve.create(31, 11),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            oven_01: 3,
                            "": 1
                        }),
                        pos: ve.create(20, -13),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            oven_01: 3,
                            "": 1
                        }),
                        pos: ve.create(24, -12.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            oven_01: 3,
                            "": 1
                        }),
                        pos: ve.create(28, -13.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            oven_01: 3,
                            "": 1
                        }),
                        pos: ve.create(22, -18.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            oven_01: 3,
                            "": 1
                        }),
                        pos: ve.create(26, -18.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            "": 1,
                            cache_03: 3
                        }),
                        pos: ve.create(-.5, -23),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            "": 1,
                            cache_03: 3
                        }),
                        pos: ve.create(-6, -24),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            "": 1,
                            cache_03: 3
                        }),
                        pos: ve.create(-3, -27.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            "": 1,
                            vending_01: 3
                        }),
                        pos: ve.create(-25.5, -9.25),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            "": 1,
                            vending_01: 3
                        }),
                        pos: ve.create(-22, -11),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }]
                },
                archway_column_1: Z({
                    material: "wood",
                    extents: ve.create(1, 1),
                    img: Object.assign(m("map-column-01.img", 7290644), {
                        residue: "map-drawers-res.img"
                    })
                }),
                archway_01: {
                    type: "building",
                    map: {
                        display: !0,
                        color: 7813914,
                        scale: 1
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    floor: {
                        surfaces: [{
                            type: "grass",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(10, 1))]
                        }],
                        imgs: []
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(10.5, 2))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(10.5, 2))],
                        disableScopeIn: !0,
                        imgs: [{
                            sprite: "map-building-archway-ceiling-01.img",
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }],
                        destroy: {
                            wallCount: 1,
                            particle: "archwayBreak",
                            particleCount: 15,
                            residue: "map-archway-res-01.img"
                        }
                    },
                    mapObjects: [{
                        type: "archway_column_1",
                        pos: ve.create(-10, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "archway_column_1",
                        pos: ve.create(10, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "loot_tier_1",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }]
                },
                desert_town_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: []
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(65, 102)), _e.createAabbExtents(ve.create(0, 0), ve.create(20, 120)), _e.createAabbExtents(ve.create(-60, 40), ve.create(10, 5))],
                    mapGroundPatches: [{
                        bound: _e.createAabbExtents(ve.create(0, 0), ve.create(60, 95)),
                        color: 12813354,
                        roughness: .1,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(0, 0), ve.create(10, 96)),
                        color: 9396511,
                        roughness: .1,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(-33, 40), ve.create(27, 5)),
                        color: 9396511,
                        roughness: .1,
                        offsetDist: 1
                    }],
                    floor: {
                        surfaces: [{
                            type: "grass",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(55, 25))]
                        }],
                        imgs: []
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        imgs: []
                    },
                    mapObjects: [{
                        type: "archway_01",
                        pos: ve.create(0, 95),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "archway_01",
                        pos: ve.create(0, -95),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "police_01",
                        pos: ve.create(40, -50),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "cabin_01",
                        pos: ve.create(37, 20),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "cabin_01",
                        pos: ve.create(35, 70),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "barn_01",
                        pos: ve.create(-34, -60),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "bank_01b",
                        pos: ve.create(-35, 0),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "saloon_structure_01",
                        pos: ve.create(-35, 70),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(5, 76),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-6.75, 71),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "sandbags_02",
                        pos: ve.create(-6.75, 67),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "sandbags_02",
                        pos: ve.create(-50, 42),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-4, 44),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-1.5, 46.5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "crate_18",
                        pos: ve.create(.25, 42),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-21, 31.5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(-15, 31.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(13, 34),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "sandbags_02",
                        pos: ve.create(7, 8),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-7.25, -12.5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(-7.25, -22),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_18",
                        pos: ve.create(2.5, -56.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-1.5, -59),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(1.5, -61),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(-5.5, -74),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "sandbags_02",
                        pos: ve.create(7.5, -82),
                        scale: 1,
                        ori: 0
                    }]
                },
                desert_town_02: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: []
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, -3), ve.create(50, 60)), _e.createAabbExtents(ve.create(0, 0), ve.create(60, 15))],
                    mapGroundPatches: [{
                        bound: _e.createAabbExtents(ve.create(0, -3), ve.create(45, 55)),
                        color: 12813354,
                        roughness: .1,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(0, 0), ve.create(46, 10)),
                        color: 9396511,
                        roughness: .1,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(0, 2), ve.create(5, 50.5)),
                        color: 9396511,
                        roughness: .1,
                        offsetDist: 1
                    }],
                    floor: {
                        surfaces: [{
                            type: "grass",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))]
                        }],
                        imgs: []
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        imgs: []
                    },
                    mapObjects: [{
                        type: "archway_01",
                        pos: ve.create(45, 0),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "archway_01",
                        pos: ve.create(-45, 0),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_red_01",
                        pos: ve.create(24, 30),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "house_red_02",
                        pos: ve.create(-24, 30),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "bank_01b",
                        pos: ve.create(-10, -34),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "shack_01",
                        pos: ve.create(31, -26),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "outhouse_01",
                        pos: ve.create(28, -46),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "tree_06",
                        pos: ve.create(29, -36),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-4.75, 34),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "sandbags_02",
                        pos: ve.create(-4.75, 30),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(-9, 10),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_18",
                        pos: ve.create(2.5, 1.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-2, -1),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(1.5, -3),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(16, -10),
                        scale: 1,
                        ori: 1
                    }]
                },
                statue_01: V({
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .5
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4.4, 4.4)),
                    destructible: !1,
                    map: {
                        display: !0,
                        color: 5723991,
                        scale: 1
                    },
                    img: {
                        sprite: "map-statue-01.img",
                        scale: .5
                    }
                }),
                statue_03: V({
                    stonePlated: !0,
                    health: 500,
                    height: 10,
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .85
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4.4, 4.4)),
                    destructible: !0,
                    map: {
                        display: !0,
                        color: 5723991,
                        scale: 1
                    },
                    img: {
                        sprite: "map-statue-03.img",
                        scale: .5,
                        residue: ""
                    }
                }),
                statue_04: V({
                    stonePlated: !0,
                    health: 500,
                    height: 10,
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .85
                    },
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(4.4, 4.4)),
                    destructible: !0,
                    map: {
                        display: !0,
                        color: 5723991,
                        scale: 1
                    },
                    img: {
                        sprite: "map-statue-04.img",
                        scale: .5,
                        residue: ""
                    }
                }),
                statue_top_01: V({
                    health: 500,
                    height: 10,
                    collision: _e.createCircle(ve.create(0, 0), 2.45),
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .8
                    },
                    destructible: !0,
                    map: {
                        display: !1,
                        color: 5723991,
                        scale: 1
                    },
                    img: {
                        sprite: "map-statue-top-01.img",
                        residue: "",
                        scale: .5,
                        zIdx: 60
                    }
                }),
                statue_top_02: V({
                    health: 500,
                    height: 10,
                    collision: _e.createCircle(ve.create(0, 0), 2.45),
                    scale: {
                        createMin: 1,
                        createMax: 1,
                        destroy: .8
                    },
                    destructible: !0,
                    map: {
                        display: !1,
                        color: 5723991,
                        scale: 1
                    },
                    img: {
                        sprite: "map-statue-top-02.img",
                        residue: "",
                        scale: .5,
                        zIdx: 60
                    }
                }),
                statue_structure_01: {
                    type: "building",
                    ori: 0,
                    terrain: {},
                    floor: {
                        surfaces: [],
                        imgs: [{
                            sprite: "",
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
                        type: "statue_01",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "statue_top_01",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }]
                },
                statue_structure_02: {
                    type: "building",
                    ori: 0,
                    terrain: {},
                    floor: {
                        surfaces: [],
                        imgs: [{
                            sprite: "",
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
                        type: "statue_01",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "statue_top_02",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }]
                },
                statue_building_03: y({
                    statue: "statue_03"
                }),
                statue_underground_03: w({
                    crate: "crate_02d"
                }),
                statue_structure_03: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 5), ve.create(7.5, 12.5))],
                    layers: [{
                        type: "statue_building_03",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "statue_underground_03",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(-1, 0), ve.create(2.6, 2)),
                        downDir: ve.create(1, 0)
                    }],
                    mask: [_e.createAabbExtents(ve.create(5.7, 0), ve.create(4, 4))]
                },
                statue_building_04: y({
                    statue: "statue_04"
                }),
                statue_underground_04: w({
                    crate: "crate_22d"
                }),
                statue_structure_04: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 5), ve.create(7.5, 12.5))],
                    layers: [{
                        type: "statue_building_04",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "statue_underground_04",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(-1, 0), ve.create(2.6, 2)),
                        downDir: ve.create(1, 0)
                    }],
                    mask: [_e.createAabbExtents(ve.create(5.7, 0), ve.create(4, 4))]
                },
                river_town_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(70.75, .5), ve.create(30, 54.5)),
                            color: 3815994
                        }, {
                            collider: _e.createAabbExtents(ve.create(77.5, 64), ve.create(23, 10)),
                            color: 3815994
                        }, {
                            collider: _e.createAabbExtents(ve.create(111, -29.5), ve.create(10.5, 24.5)),
                            color: 3815994
                        }, {
                            collider: _e.createAabbExtents(ve.create(50, 0), ve.create(4.4, 4.4)),
                            color: 5723991
                        }]
                    },
                    terrain: {
                        bridge: {
                            nearbyWidthMult: 1
                        },
                        spawnPriority: 100
                    },
                    bridgeLandBounds: [_e.createAabbExtents(ve.create(-41, 0), ve.create(6, 10)), _e.createAabbExtents(ve.create(41, 0), ve.create(6, 10)), _e.createAabbExtents(ve.create(81, 0), ve.create(40, 54)), _e.createAabbExtents(ve.create(78, 64), ve.create(23, 10)), _e.createAabbExtents(ve.create(-76, -22), ve.create(36, 24)), _e.createAabbExtents(ve.create(-72, 22), ve.create(27, 25))],
                    bridgeWaterBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(5, 5))],
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(71, 0), ve.create(31, 56)), _e.createAabbExtents(ve.create(77, 65), ve.create(24, 10)), _e.createAabbExtents(ve.create(112, -30), ve.create(10, 26)), _e.createAabbExtents(ve.create(106, 19.5), ve.create(8, 7.25)), _e.createAabbExtents(ve.create(-71, 32), ve.create(27, 15)), _e.createAabbExtents(ve.create(-71, 16), ve.create(8, 6)), _e.createAabbExtents(ve.create(-75, -34), ve.create(40, 19)), _e.createAabbExtents(ve.create(-57, -10), ve.create(5, 11)), _e.createAabbExtents(ve.create(-86, -10), ve.create(5, 11)), _e.createAabbExtents(ve.create(-21, 0), ve.create(100, 8)), _e.createAabbExtents(ve.create(-109, 30), ve.create(7, 7.25)), _e.createAabbExtents(ve.create(0, 0), ve.create(40, 15))],
                    mapGroundPatches: [{
                        bound: _e.createAabbExtents(ve.create(-20, 0), ve.create(100, 6)),
                        color: 6632211,
                        roughness: .05,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(-71, 10), ve.create(2, 9)),
                        color: 6632211,
                        roughness: 0,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(-57, -10), ve.create(2, 9)),
                        color: 6632211,
                        roughness: 0,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(-109, 30), ve.create(6, 6.25)),
                        color: 3293977,
                        roughness: .05,
                        offsetDist: .5
                    }, {
                        bound: _e.createAabbExtents(ve.create(-86, -10), ve.create(2, 9)),
                        color: 6632211,
                        roughness: 0,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(106, 19.5), ve.create(7, 6.25)),
                        color: 3293977,
                        roughness: .05,
                        offsetDist: .5
                    }],
                    floor: {
                        surfaces: [{
                            type: "grass",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))]
                        }, {
                            type: "asphalt",
                            collision: [_e.createAabbExtents(ve.create(70.75, .5), ve.create(30, 54.5)), _e.createAabbExtents(ve.create(77.5, 64), ve.create(23, 10)), _e.createAabbExtents(ve.create(111, -29.5), ve.create(10.5, 24.5))]
                        }],
                        imgs: [{
                            sprite: "map-complex-warehouse-floor-04.img",
                            pos: ve.create(81, 10),
                            scale: 1,
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
                        type: "bridge_xlg_structure_01",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barn_01",
                        pos: ve.create(-71, 30),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "house_red_01",
                        pos: ve.create(-56, -30),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "house_red_02",
                        pos: ve.create(-96, -30),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "sandbags_02",
                        pos: ve.create(-68, 2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            crate_02: 1,
                            crate_01: 3
                        }),
                        pos: ve.create(-85, 1),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            crate_02: 1,
                            crate_01: 3
                        }),
                        pos: ve.create(-90, -1),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_02f",
                        pos: ve.create(-106.5, 32.25),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(-111.25, 32.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(-108, 27.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "statue_structure_01",
                        pos: ve.create(-50, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1
                        }),
                        pos: ve.create(45, 36),
                        scale: 1,
                        ori: 2
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1
                        }),
                        pos: ve.create(51, 36),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "shack_02",
                        pos: ve.create(47, 20),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "warehouse_02",
                        pos: ve.create(78, 40),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1
                        }),
                        pos: ve.create(95, 44),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "statue_structure_02",
                        pos: ve.create(50, 0),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "crate_01",
                        pos: ve.create(74.5, -.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(79.5, .25),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(106, 22),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(104.5, 17.25),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_22",
                        pos: ve.create(109.25, 17.25),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1
                        }),
                        pos: ve.create(85, -13),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1
                        }),
                        pos: ve.create(45, -36),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "shack_02",
                        pos: ve.create(47, -20),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "warehouse_02",
                        pos: ve.create(86, -30),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1
                        }),
                        pos: ve.create(72, -47),
                        scale: 1,
                        ori: 1
                    }]
                },
                river_town_02: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: []
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    oris: [0, 1],
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(61, -3), ve.create(24, 21)), _e.createAabbExtents(ve.create(46, -36), ve.create(6, 14)), _e.createAabbExtents(ve.create(-68, 0), ve.create(27, 8)), _e.createAabbExtents(ve.create(0, 0), ve.create(14, 14)), _e.createAabbExtents(ve.create(-80, 32), ve.create(4, 4)), _e.createAabbExtents(ve.create(-16, 13), ve.create(5, 2.5)), _e.createAabbExtents(ve.create(16, -13), ve.create(5, 2.5)), _e.createAabbExtents(ve.create(-76.5, 19.5), ve.create(2.5, 2.5)), _e.createAabbExtents(ve.create(-62, -18), ve.create(2.5, 2.5))],
                    mapGroundPatches: [{
                        bound: _e.createAabbExtents(ve.create(-5, 0), ve.create(70, 6)),
                        color: 9585940,
                        roughness: .05,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(-71, 10), ve.create(2, 9)),
                        color: 9585940,
                        roughness: .05,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(-76, 19), ve.create(10.5, 8)),
                        color: 9585940,
                        roughness: .1,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(-57, -10), ve.create(2, 9)),
                        color: 9585940,
                        roughness: .05,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(-63, -19), ve.create(11.5, 8.5)),
                        color: 9585940,
                        roughness: .1,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(0, 0), ve.create(14, 10)),
                        color: 8405016,
                        roughness: .3,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(0, 0), ve.create(9, 22)),
                        color: 8405016,
                        roughness: .3,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(0, 0), ve.create(4, 33)),
                        color: 8405016,
                        roughness: .3,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(61, -3), ve.create(22, 19)),
                        color: 3815994,
                        roughness: .15,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(45, -34), ve.create(5.75, 14)),
                        color: 3815994,
                        roughness: .15,
                        offsetDist: 1
                    }, {
                        bound: _e.createAabbExtents(ve.create(69, -10), ve.create(4, 3.75)),
                        color: 14657367,
                        roughness: .2,
                        offsetDist: 1
                    }],
                    floor: {
                        surfaces: [{
                            type: "grass",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))]
                        }, {
                            type: "asphalt",
                            collision: [_e.createAabbExtents(ve.create(61, -3), ve.create(22, 19)), _e.createAabbExtents(ve.create(45, -34), ve.create(5.75, 14))]
                        }],
                        imgs: [{
                            sprite: "map-complex-warehouse-floor-05.img",
                            pos: ve.create(81, 10),
                            scale: 1,
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
                        type: "stone_06",
                        pos: ve.create(-16, 13),
                        scale: 1,
                        ori: 0,
                        inheritOri: !0
                    }, {
                        type: "stone_06",
                        pos: ve.create(16, -13),
                        scale: 1,
                        ori: 0,
                        inheritOri: !0
                    }, {
                        type: "sandbags_02",
                        pos: ve.create(-68, 2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            crate_02: 1,
                            crate_01: 4
                        }),
                        pos: ve.create(-85, 1),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            crate_02: 1,
                            crate_01: 4
                        }),
                        pos: ve.create(-90, -1),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "statue_structure_03",
                        pos: ve.create(-50, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-80, 32),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            crate_02: 1,
                            crate_01: 4
                        }),
                        pos: ve.create(-76.5, 19.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            crate_02: 1,
                            crate_01: 4
                        }),
                        pos: ve.create(-62, -18),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "statue_structure_04",
                        pos: ve.create(50, 0),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "tree_06",
                        pos: ve.create(69, -10),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(74.5, -.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(79.5, .25),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: c({
                            container_01: 1,
                            container_02: 1,
                            container_03: 1
                        }),
                        pos: ve.create(45, -36),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "tree_05c",
                        pos: ve.create(0, 2),
                        scale: 2,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "case_05",
                        pos: ve.create(0, -2),
                        scale: 1,
                        ori: 0,
                        inheritOri: !0
                    }]
                },
                shack_wall_top: Z({
                    material: "wood",
                    extents: ve.create(5.6, .35),
                    height: 10,
                    img: m("map-wall-shack-top.img")
                }),
                shack_wall_side_left: Z({
                    material: "wood",
                    extents: ve.create(.35, 3.43),
                    height: 10,
                    img: m("map-wall-shack-left.img")
                }),
                shack_wall_side_right: Z({
                    material: "wood",
                    extents: ve.create(.35, 3.8),
                    height: 10,
                    img: m("map-wall-shack-right.img")
                }),
                shack_wall_bot: Z({
                    material: "wood",
                    extents: ve.create(3.75, .35),
                    height: 10,
                    img: m("map-wall-shack-bot.img")
                }),
                shack_01: he(),
                shack_01x: he({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-shack-ceiling-01.img",
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-05.img",
                            pos: ve.create(-4, 2.5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-04.img",
                            pos: ve.create(3.5, -.5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }]
                    }
                }),
                shack_02: ue({}),
                shack_02x: ue({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-shack-ceiling-02.img",
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-05.img",
                            pos: ve.create(-2, 1),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }]
                    }
                }),
                shack_wall_ext_2: Z({
                    material: "wood",
                    extents: ve.create(.5, 1),
                    hitParticle: "tanChip",
                    img: m("map-wall-02.img", 12556639)
                }),
                shack_wall_ext_5: Z({
                    material: "wood",
                    extents: ve.create(.5, 2.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-05.img", 12556639)
                }),
                shack_wall_ext_9: Z({
                    material: "wood",
                    extents: ve.create(.5, 4.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-09.img", 12556639)
                }),
                shack_wall_ext_10: Z({
                    material: "wood",
                    extents: ve.create(.5, 5),
                    hitParticle: "tanChip",
                    img: m("map-wall-10.img", 12556639)
                }),
                shack_wall_ext_14: Z({
                    material: "wood",
                    extents: ve.create(.5, 7),
                    hitParticle: "tanChip",
                    img: m("map-wall-14.img", 12556639)
                }),
                shack_03a: ie({
                    terrain: {
                        bridge: {
                            nearbyWidthMult: 1
                        },
                        nearbyRiver: {
                            radMin: .75,
                            radMax: 1.5,
                            facingOri: 1
                        }
                    }
                }),
                shack_03b: ie({
                    terrain: {
                        waterEdge: {
                            dir: ve.create(0, 1),
                            distMin: 4,
                            distMax: 5
                        }
                    },
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(-7.75, 3), ve.create(1, 2)),
                            color: 6171907
                        }, {
                            collider: _e.createAabbExtents(ve.create(5, -4.75), ve.create(2, 1)),
                            color: 6171907
                        }, {
                            collider: _e.createAabbExtents(ve.create(1, 1.5), ve.create(8, 5.5)),
                            color: 5730406
                        }, {
                            collider: _e.createAabbExtents(ve.create(-10.65, 9), ve.create(2, 12)),
                            color: 6171907
                        }]
                    },
                    floor: {
                        surfaces: [{
                            type: "shack",
                            collision: [_e.createAabbExtents(ve.create(1, 1.5), ve.create(8, 5.5)), _e.createAabbExtents(ve.create(-10.65, 9), ve.create(2, 12)), _e.createAabbExtents(ve.create(-7.75, 3), ve.create(1, 2)), _e.createAabbExtents(ve.create(5, -4.75), ve.create(2, 1))]
                        }],
                        imgs: [{
                            sprite: "map-building-shack-floor-03.img",
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-hut-floor-02.img",
                            pos: ve.create(-10.65, 9),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-shack-ceiling-03.img",
                            pos: ve.create(.5, .5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }]
                    }
                }),
                shack_03x: ie({
                    terrain: {
                        bridge: {
                            nearbyWidthMult: 1
                        },
                        nearbyRiver: {
                            radMin: .75,
                            radMax: 1.5,
                            facingOri: 1
                        }
                    },
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-shack-ceiling-03.img",
                            pos: ve.create(.5, .5),
                            scale: .667,
                            alpha: 1,
                            tint: 10461087
                        }, {
                            sprite: "map-snow-01.img",
                            pos: ve.create(3.75, 1.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }]
                    }
                }),
                outhouse_wall_top: Z({
                    material: "wood",
                    extents: ve.create(3.2, .35),
                    height: 10,
                    hitParticle: "outhouseChip",
                    explodeParticle: "outhousePlank",
                    health: 100,
                    img: m("map-wall-outhouse-top.img")
                }),
                outhouse_wall_side: Z({
                    material: "wood",
                    extents: ve.create(.35, 3.1),
                    height: 10,
                    hitParticle: "outhouseChip",
                    explodeParticle: "outhousePlank",
                    health: 100,
                    img: m("map-wall-outhouse-side.img")
                }),
                outhouse_wall_bot: Z({
                    material: "wood",
                    extents: ve.create(1.15, .35),
                    height: 10,
                    hitParticle: "outhouseChip",
                    explodeParticle: "outhousePlank",
                    health: 100,
                    img: m("map-wall-outhouse-bot.img")
                }),
                outhouse_01: ce({}),
                outhouse_01x: ce({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-outhouse-ceiling.img",
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-04.img",
                            pos: ve.create(2.25, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }]
                    }
                }),
                outhouse_02: ce({
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 1.45), ve.create(3.6, 3.2))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 1.4), ve.create(3.8, 3.4))],
                        imgs: [{
                            sprite: "map-building-outhouse-ceiling.img",
                            scale: .5,
                            alpha: 1,
                            tint: 13735576
                        }],
                        destroy: {
                            wallCount: 2,
                            particleCount: 15,
                            particle: "outhouseBreak",
                            residue: "map-outhouse-res.img"
                        }
                    },
                    obs: "toilet_02b"
                }),
                brick_wall_ext_1: Z({
                    material: "brick",
                    extents: ve.create(.5, .5)
                }),
                brick_wall_ext_2: Z({
                    material: "brick",
                    extents: ve.create(.5, 1)
                }),
                brick_wall_ext_3: Z({
                    material: "brick",
                    extents: ve.create(.5, 1.5)
                }),
                brick_wall_ext_4: Z({
                    material: "brick",
                    extents: ve.create(.5, 2)
                }),
                brick_wall_ext_5: Z({
                    material: "brick",
                    extents: ve.create(.5, 2.5)
                }),
                brick_wall_ext_6: Z({
                    material: "brick",
                    extents: ve.create(.5, 3)
                }),
                brick_wall_ext_7: Z({
                    material: "brick",
                    extents: ve.create(.5, 3.5)
                }),
                brick_wall_ext_8: Z({
                    material: "brick",
                    extents: ve.create(.5, 4)
                }),
                brick_wall_ext_9: Z({
                    material: "brick",
                    extents: ve.create(.5, 4.5)
                }),
                brick_wall_ext_10: Z({
                    material: "brick",
                    extents: ve.create(.5, 5)
                }),
                brick_wall_ext_11: Z({
                    material: "brick",
                    extents: ve.create(.5, 5.5)
                }),
                brick_wall_ext_12: Z({
                    material: "brick",
                    extents: ve.create(.5, 6)
                }),
                brick_wall_ext_13: Z({
                    material: "brick",
                    extents: ve.create(.5, 6.5)
                }),
                brick_wall_ext_14: Z({
                    material: "brick",
                    extents: ve.create(.5, 7)
                }),
                brick_wall_ext_15: Z({
                    material: "brick",
                    extents: ve.create(.5, 7.5)
                }),
                brick_wall_ext_16: Z({
                    material: "brick",
                    extents: ve.create(.5, 8)
                }),
                brick_wall_ext_17: Z({
                    material: "brick",
                    extents: ve.create(.5, 8.5)
                }),
                brick_wall_ext_18: Z({
                    material: "brick",
                    extents: ve.create(.5, 9)
                }),
                brick_wall_ext_19: Z({
                    material: "brick",
                    extents: ve.create(.5, 9.5)
                }),
                brick_wall_ext_20: Z({
                    material: "brick",
                    extents: ve.create(.5, 10)
                }),
                brick_wall_ext_21: Z({
                    material: "brick",
                    extents: ve.create(.5, 10.5)
                }),
                brick_wall_ext_23: Z({
                    material: "brick",
                    extents: ve.create(.5, 11.5)
                }),
                brick_wall_ext_33: Z({
                    material: "brick",
                    extents: ve.create(.5, 16.5)
                }),
                brick_wall_ext_41: Z({
                    material: "brick",
                    extents: ve.create(.5, 20.5)
                }),
                brick_wall_ext_short_7: Z({
                    material: "brick",
                    extents: ve.create(.5, 3.5),
                    height: .5
                }),
                brick_wall_ext_thicker_4: Z({
                    material: "brick",
                    extents: ve.create(1.5, 2)
                }),
                brick_wall_ext_thicker_5: Z({
                    material: "brick",
                    extents: ve.create(1.5, 2.5)
                }),
                brick_wall_ext_thicker_6: Z({
                    material: "brick",
                    extents: ve.create(1.5, 3)
                }),
                brick_wall_ext_thicker_7: Z({
                    material: "brick",
                    extents: ve.create(1.5, 3.5)
                }),
                brick_wall_ext_thicker_8: Z({
                    material: "brick",
                    extents: ve.create(1.5, 4)
                }),
                brick_wall_ext_thicker_9: Z({
                    material: "brick",
                    extents: ve.create(1.5, 4.5)
                }),
                brick_wall_ext_thicker_15: Z({
                    material: "brick",
                    extents: ve.create(1.5, 7.5)
                }),
                brick_wall_ext_thicker_16: Z({
                    material: "brick",
                    extents: ve.create(1.5, 8)
                }),
                brick_wall_ext_thicker_24: Z({
                    material: "brick",
                    extents: ve.create(1.5, 12)
                }),
                metal_wall_ext_3: Z({
                    material: "metal",
                    extents: ve.create(.5, 1.5)
                }),
                metal_wall_ext_4: Z({
                    material: "metal",
                    extents: ve.create(.5, 2)
                }),
                metal_wall_ext_5: Z({
                    material: "metal",
                    extents: ve.create(.5, 2.5)
                }),
                metal_wall_ext_6: Z({
                    material: "metal",
                    extents: ve.create(.5, 3)
                }),
                metal_wall_ext_7: Z({
                    material: "metal",
                    extents: ve.create(.5, 3.5)
                }),
                metal_wall_ext_8: Z({
                    material: "metal",
                    extents: ve.create(.5, 4)
                }),
                metal_wall_ext_9: Z({
                    material: "metal",
                    extents: ve.create(.5, 4.5)
                }),
                metal_wall_ext_10: Z({
                    material: "metal",
                    extents: ve.create(.5, 5)
                }),
                metal_wall_ext_12: Z({
                    material: "metal",
                    extents: ve.create(.5, 6)
                }),
                metal_wall_ext_18: Z({
                    material: "metal",
                    extents: ve.create(.5, 9)
                }),
                metal_wall_ext_43: Z({
                    material: "metal",
                    extents: ve.create(.5, 21.5)
                }),
                metal_wall_ext_short_6: Z({
                    material: "metal",
                    extents: ve.create(.5, 3),
                    height: .5
                }),
                metal_wall_ext_short_7: Z({
                    material: "metal",
                    extents: ve.create(.5, 3.5),
                    height: .5
                }),
                metal_wall_ext_thick_6: Z({
                    material: "metal",
                    extents: ve.create(1, 3)
                }),
                metal_wall_ext_thick_20: Z({
                    material: "metal",
                    extents: ve.create(1, 10)
                }),
                metal_wall_ext_thicker_4: Z({
                    material: "metal",
                    extents: ve.create(1.5, 2)
                }),
                metal_wall_ext_thicker_5: Z({
                    material: "metal",
                    extents: ve.create(1.5, 2.5)
                }),
                metal_wall_ext_thicker_6: Z({
                    material: "metal",
                    extents: ve.create(1.5, 3)
                }),
                metal_wall_ext_thicker_7: Z({
                    material: "metal",
                    extents: ve.create(1.5, 3.5)
                }),
                metal_wall_ext_thicker_8: Z({
                    material: "metal",
                    extents: ve.create(1.5, 4)
                }),
                metal_wall_ext_thicker_9: Z({
                    material: "metal",
                    extents: ve.create(1.5, 4.5)
                }),
                metal_wall_ext_thicker_10: Z({
                    material: "metal",
                    extents: ve.create(1.5, 5)
                }),
                metal_wall_ext_thicker_11: Z({
                    material: "metal",
                    extents: ve.create(1.5, 5.5)
                }),
                metal_wall_ext_thicker_12: Z({
                    material: "metal",
                    extents: ve.create(1.5, 6)
                }),
                metal_wall_ext_thicker_13: Z({
                    material: "metal",
                    extents: ve.create(1.5, 6.5)
                }),
                metal_wall_ext_thicker_14: Z({
                    material: "metal",
                    extents: ve.create(1.5, 7)
                }),
                metal_wall_ext_thicker_15: Z({
                    material: "metal",
                    extents: ve.create(1.5, 7.5)
                }),
                metal_wall_ext_thicker_16: Z({
                    material: "metal",
                    extents: ve.create(1.5, 8)
                }),
                metal_wall_ext_thicker_17: Z({
                    material: "metal",
                    extents: ve.create(1.5, 8.5)
                }),
                metal_wall_ext_thicker_18: Z({
                    material: "metal",
                    extents: ve.create(1.5, 9)
                }),
                metal_wall_ext_thicker_19: Z({
                    material: "metal",
                    extents: ve.create(1.5, 9.5)
                }),
                metal_wall_ext_thicker_20: Z({
                    material: "metal",
                    extents: ve.create(1.5, 10)
                }),
                metal_wall_ext_thicker_21: Z({
                    material: "metal",
                    extents: ve.create(1.5, 10.5)
                }),
                metal_wall_ext_thicker_22: Z({
                    material: "metal",
                    extents: ve.create(1.5, 11)
                }),
                metal_wall_ext_thicker_23: Z({
                    material: "metal",
                    extents: ve.create(1.5, 11.5)
                }),
                metal_wall_ext_thicker_24: Z({
                    material: "metal",
                    extents: ve.create(1.5, 12)
                }),
                metal_wall_ext_thicker_25: Z({
                    material: "metal",
                    extents: ve.create(1.5, 12.5)
                }),
                metal_wall_ext_thicker_26: Z({
                    material: "metal",
                    extents: ve.create(1.5, 13)
                }),
                metal_wall_ext_thicker_27: Z({
                    material: "metal",
                    extents: ve.create(1.5, 13.5)
                }),
                metal_wall_ext_thicker_28: Z({
                    material: "metal",
                    extents: ve.create(1.5, 14.5)
                }),
                metal_wall_ext_thicker_29: Z({
                    material: "metal",
                    extents: ve.create(1.5, 14.5)
                }),
                metal_wall_ext_thicker_32: Z({
                    material: "metal",
                    extents: ve.create(1.5, 16)
                }),
                metal_wall_ext_thicker_34: Z({
                    material: "metal",
                    extents: ve.create(1.5, 17)
                }),
                metal_wall_ext_thicker_35: Z({
                    material: "metal",
                    extents: ve.create(1.5, 17.5)
                }),
                metal_wall_ext_thicker_42: Z({
                    material: "metal",
                    extents: ve.create(1.5, 21)
                }),
                metal_wall_ext_thicker_48: Z({
                    material: "metal",
                    extents: ve.create(1.5, 24)
                }),
                glass_wall_10: Z({
                    material: "glass",
                    extents: ve.create(.5, 5),
                    health: 50,
                    img: m("map-wall-glass-10.img")
                }),
                glass_wall_12: Z({
                    material: "glass",
                    extents: ve.create(.5, 6),
                    health: 50,
                    img: m("map-wall-glass-12.img")
                }),
                glass_wall_12_2: Z({
                    material: "glass",
                    extents: ve.create(1, 6),
                    health: 5e3,
                    img: m("map-wall-glass-12-2.img")
                }),
                concrete_wall_ext_2: Z({
                    material: "concrete",
                    extents: ve.create(.5, 1)
                }),
                concrete_wall_ext_5: Z({
                    material: "concrete",
                    extents: ve.create(.5, 2.5)
                }),
                concrete_wall_ext_6: Z({
                    material: "concrete",
                    extents: ve.create(.5, 3)
                }),
                concrete_wall_ext_7: Z({
                    material: "concrete",
                    extents: ve.create(.5, 3.5)
                }),
                concrete_wall_ext_8: Z({
                    material: "concrete",
                    extents: ve.create(.5, 4)
                }),
                concrete_wall_ext_11: Z({
                    material: "concrete",
                    extents: ve.create(.5, 5.5)
                }),
                concrete_wall_ext_13: Z({
                    material: "concrete",
                    extents: ve.create(.5, 6.5)
                }),
                concrete_wall_ext_15: Z({
                    material: "concrete",
                    extents: ve.create(.5, 7.5)
                }),
                concrete_wall_ext_16: Z({
                    material: "concrete",
                    extents: ve.create(.5, 8)
                }),
                concrete_wall_ext_17: Z({
                    material: "concrete",
                    extents: ve.create(.5, 8.5)
                }),
                panicroom_01: {
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
                            type: "container",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(4.5, 6))]
                        }],
                        imgs: [{
                            sprite: "map-building-panicroom-floor.img",
                            scale: .5,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(4.5, 6))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(4.5, 6))],
                        imgs: [{
                            sprite: "map-building-panicroom-ceiling.img",
                            scale: .5,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_12",
                        pos: ve.create(-4, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_3",
                        pos: ve.create(-2, 5.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_7",
                        pos: ve.create(0, -5.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_12",
                        pos: ve.create(4, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "loot_tier_2",
                        pos: ve.create(0, -.05),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            loot_tier_1: 1,
                            "": 1
                        }),
                        pos: ve.create(0, .05),
                        scale: 1,
                        ori: 0
                    }]
                },
                barn_wall_int_2: Z({
                    material: "wood",
                    extents: ve.create(.5, 1),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-02-rounded.img", 7173701)
                }),
                barn_wall_int_4: Z({
                    material: "wood",
                    extents: ve.create(.5, 2),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-04-rounded.img", 7173701)
                }),
                barn_wall_int_5: Z({
                    material: "wood",
                    extents: ve.create(.5, 2.5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-05-rounded.img", 7173701)
                }),
                barn_wall_int_6: Z({
                    material: "wood",
                    extents: ve.create(.5, 3),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-06-rounded.img", 7173701)
                }),
                barn_wall_int_7: Z({
                    material: "wood",
                    extents: ve.create(.5, 3.5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-07-rounded.img", 7173701)
                }),
                barn_wall_int_8: Z({
                    material: "wood",
                    extents: ve.create(.5, 4),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-08-rounded.img", 7173701)
                }),
                barn_wall_int_11: Z({
                    material: "wood",
                    extents: ve.create(.5, 5.5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-11-rounded.img", 7173701)
                }),
                barn_wall_int_13: Z({
                    material: "wood",
                    extents: ve.create(.5, 6.5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-13-rounded.img", 7173701)
                }),
                barn_column_1: Z({
                    material: "concrete",
                    extents: ve.create(1, 1),
                    hitParticle: "ltgreenChip",
                    img: m("map-column-01.img", 2764060)
                }),
                barn_01: $({}),
                barn_01x: $({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-barn-ceiling-01.img",
                            pos: ve.create(0, -2),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-barn-ceiling-02.img",
                            pos: ve.create(0, 13.2),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-01.img",
                            pos: ve.create(-14.5, 5.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-02.img",
                            pos: ve.create(-.5, -9),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-03.img",
                            pos: ve.create(14.5, 5.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }]
                    }
                }),
                bank_wall_int_3: Z({
                    material: "wood",
                    extents: ve.create(.5, 1.5),
                    img: m("map-wall-03-rounded.img", 7951934)
                }),
                bank_wall_int_4: Z({
                    material: "wood",
                    extents: ve.create(.5, 2),
                    img: m("map-wall-04-rounded.img", 7951934)
                }),
                bank_wall_int_5: Z({
                    material: "wood",
                    extents: ve.create(.5, 2.5),
                    img: m("map-wall-05-rounded.img", 7951934)
                }),
                bank_wall_int_8: Z({
                    material: "wood",
                    extents: ve.create(.5, 4),
                    img: m("map-wall-08-rounded.img", 7951934)
                }),
                bank_01: J({}),
                bank_01b: J({
                    vault: "vault_01b"
                }),
                bank_01x: J({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-bank-ceiling-01.img",
                            pos: ve.create(-16, 7),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-bank-ceiling-02.img",
                            pos: ve.create(6, 0),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-bank-ceiling-03.img",
                            pos: ve.create(22, 8),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-02.img",
                            pos: ve.create(-13, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }, {
                            sprite: "map-snow-04.img",
                            pos: ve.create(1.25, 9.25),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(13.75, 15.25),
                            scale: .75,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(15.25, -15.75),
                            scale: .75,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }]
                    }
                }),
                vault_door_main: T({
                    material: "metal",
                    hinge: ve.create(1, 3.5),
                    extents: ve.create(1, 3.5),
                    img: {
                        sprite: "map-door-02.img"
                    },
                    door: {
                        interactionRad: 1.5,
                        openSpeed: .23,
                        openOneWay: -1,
                        openDelay: 4.1,
                        openOnce: !0,
                        spriteAnchor: ve.create(.2, 1),
                        sound: {
                            open: "none",
                            close: "none",
                            change: "vault_change_01"
                        }
                    }
                }),
                vault_01: Q({}),
                vault_01b: Q({
                    gold_box: 9,
                    floor_loot: "loot_tier_stonehammer"
                }),
                police_wall_int_2: Z({
                    material: "wood",
                    extents: ve.create(.5, 1),
                    img: m("map-wall-02-rounded.img", 1777447)
                }),
                police_wall_int_3: Z({
                    material: "wood",
                    extents: ve.create(.5, 1.5),
                    img: m("map-wall-03-rounded.img", 1777447)
                }),
                police_wall_int_4: Z({
                    material: "wood",
                    extents: ve.create(.5, 2),
                    img: m("map-wall-04-rounded.img", 1777447)
                }),
                police_wall_int_6: Z({
                    material: "wood",
                    extents: ve.create(.5, 3),
                    img: m("map-wall-06-rounded.img", 1777447)
                }),
                police_wall_int_7: Z({
                    material: "wood",
                    extents: ve.create(.5, 3.5),
                    img: m("map-wall-07-rounded.img", 1777447)
                }),
                police_wall_int_8: Z({
                    material: "wood",
                    extents: ve.create(.5, 4),
                    img: m("map-wall-08-rounded.img", 1777447)
                }),
                police_wall_int_10: Z({
                    material: "wood",
                    extents: ve.create(.5, 5),
                    img: m("map-wall-10-rounded.img", 1777447)
                }),
                police_01: me({}),
                police_01x: me({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-police-ceiling-01.img",
                            pos: ve.create(-21.5, 8.5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-police-ceiling-02.img",
                            pos: ve.create(10.5, 0),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-police-ceiling-03.img",
                            pos: ve.create(31.96, 12.5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-01.img",
                            pos: ve.create(13, 17.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 3
                        }, {
                            sprite: "map-snow-02.img",
                            pos: ve.create(-21, 14),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-03.img",
                            pos: ve.create(30.25, 6.25),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }, {
                            sprite: "map-snow-07.img",
                            pos: ve.create(4.5, -3.25),
                            scale: .6,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(-40.25, 14.75),
                            scale: .75,
                            alpha: 1,
                            tint: 16777215,
                            rot: 3
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(-38.75, .75),
                            scale: .75,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }]
                    }
                }),
                house_wall_int_4: Z({
                    material: "wood",
                    extents: ve.create(.5, 2),
                    hitParticle: "tanChip",
                    img: m("map-wall-04-rounded.img", 10584424)
                }),
                house_wall_int_5: Z({
                    material: "wood",
                    extents: ve.create(.5, 2.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-05-rounded.img", 10584424)
                }),
                house_wall_int_8: Z({
                    material: "wood",
                    extents: ve.create(.5, 4),
                    hitParticle: "tanChip",
                    img: m("map-wall-08-rounded.img", 10584424)
                }),
                house_wall_int_9: Z({
                    material: "wood",
                    extents: ve.create(.5, 4.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-09-rounded.img", 10584424)
                }),
                house_wall_int_11: Z({
                    material: "wood",
                    extents: ve.create(.5, 5.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-11-rounded.img", 10584424)
                }),
                house_wall_int_14: Z({
                    material: "wood",
                    extents: ve.create(.5, 7),
                    hitParticle: "tanChip",
                    img: m("map-wall-14-rounded.img", 10584424)
                }),
                house_column_1: Z({
                    material: "concrete",
                    extents: ve.create(1, 1),
                    hitParticle: "tanChip",
                    img: m("map-column-01.img", 5587506)
                }),
                house_red_01: pe({
                    stand: "stand_01"
                }),
                house_red_01b: pe({
                    porch_01: "cache_05",
                    stand: "stand_01"
                }),
                house_red_01x: pe({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-house-ceiling.img",
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-01.img",
                            pos: ve.create(-5.5, 8.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-02.img",
                            pos: ve.create(4.5, -7),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    }
                }),
                house_red_02: de({
                    stand: "stand_01"
                }),
                house_red_02x: de({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-house-ceiling.img",
                            scale: .667,
                            alpha: 1,
                            tint: 13619151,
                            rot: 2
                        }, {
                            sprite: "map-snow-02.img",
                            pos: ve.create(3.5, 6),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }, {
                            sprite: "map-snow-01.img",
                            pos: ve.create(-4.5, -8),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 3
                        }]
                    }
                }),
                cabin_wall_int_5: Z({
                    material: "wood",
                    extents: ve.create(.5, 2.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-05-rounded.img", 10584424)
                }),
                cabin_wall_int_10: Z({
                    material: "wood",
                    extents: ve.create(.5, 5),
                    hitParticle: "tanChip",
                    img: m("map-wall-10-rounded.img", 10584424)
                }),
                cabin_wall_int_13: Z({
                    material: "wood",
                    extents: ve.create(.5, 6.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-13-rounded.img", 10584424)
                }),
                cabin_01: te({}),
                cabin_01x: te({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-cabin-ceiling-01a.img",
                            pos: ve.create(0, .5),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-cabin-ceiling-01b.img",
                            pos: ve.create(4, -13),
                            scale: .667,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-01.img",
                            pos: ve.create(-13, 6),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }, {
                            sprite: "map-snow-02.img",
                            pos: ve.create(-3.5, -6.25),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }, {
                            sprite: "map-snow-03.img",
                            pos: ve.create(10.75, 8.25),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-chimney-01.img",
                            pos: ve.create(13, 2),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            removeOnDamaged: !0
                        }]
                    }
                }),
                cabin_02: te({
                    cabin_mount: "gun_mount_02",
                    porch_01: "cache_05"
                }),
                dock_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(2.5, 0), ve.create(2.4, 10.25)),
                            color: 8862486
                        }, {
                            collider: _e.createAabbExtents(ve.create(-2.45, 7.75), ve.create(2.6, 2.5)),
                            color: 8862486
                        }]
                    },
                    terrain: {
                        grass: !0,
                        beach: !1,
                        bridge: {
                            nearbyWidthMult: .75
                        }
                    },
                    bridgeLandBounds: [_e.createAabbExtents(ve.create(2.5, -10.5), ve.create(2.5, 1.5))],
                    bridgeWaterBounds: [_e.createAabbExtents(ve.create(0, 7.75), ve.create(5.5, 3.5))],
                    zIdx: 1,
                    floor: {
                        surfaces: [{
                            type: "shack",
                            collision: [_e.createAabbExtents(ve.create(2.5, 0), ve.create(2.4, 10.25)), _e.createAabbExtents(ve.create(-2.45, 7.75), ve.create(2.6, 2.5))]
                        }],
                        imgs: [{
                            sprite: "map-building-dock-floor-01a.img",
                            pos: ve.create(-2.5, 7.85),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-dock-floor-01b.img",
                            pos: ve.create(2.5, 0),
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
                        type: "bollard_01",
                        pos: ve.create(-4.25, 7.75),
                        scale: .8,
                        ori: 2
                    }, {
                        type: c({
                            barrel_01: 1,
                            crate_01: 1
                        }),
                        pos: ve.create(3, 8.25),
                        scale: .75,
                        ori: 0
                    }]
                },
                mansion_wall_int_1: Z({
                    material: "wood",
                    extents: ve.create(.5, .5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-01-rounded.img", 16768917)
                }),
                mansion_wall_int_5: Z({
                    material: "wood",
                    extents: ve.create(.5, 2.5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-05-rounded.img", 16768917)
                }),
                mansion_wall_int_6: Z({
                    material: "wood",
                    extents: ve.create(.5, 3),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-06-rounded.img", 16768917)
                }),
                mansion_wall_int_7: Z({
                    material: "wood",
                    extents: ve.create(.5, 3.5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-07-rounded.img", 16768917)
                }),
                mansion_wall_int_8: Z({
                    material: "wood",
                    extents: ve.create(.5, 4),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-08-rounded.img", 16768917)
                }),
                mansion_wall_int_9: Z({
                    material: "wood",
                    extents: ve.create(.5, 4.5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-09-rounded.img", 16768917)
                }),
                mansion_wall_int_10: Z({
                    material: "wood",
                    extents: ve.create(.5, 5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-10-rounded.img", 16768917)
                }),
                mansion_wall_int_11: Z({
                    material: "wood",
                    extents: ve.create(.5, 5.5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-11-rounded.img", 16768917)
                }),
                mansion_wall_int_12: Z({
                    material: "wood",
                    extents: ve.create(.5, 6),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-12-rounded.img", 16768917)
                }),
                mansion_wall_int_13: Z({
                    material: "wood",
                    extents: ve.create(.5, 6.5),
                    hitParticle: "ltgreenChip",
                    img: m("map-wall-13-rounded.img", 16768917)
                }),
                mansion_column_1: Z({
                    material: "concrete",
                    extents: ve.create(1, 1),
                    hitParticle: "tanChip",
                    img: m("map-column-01.img", 7432016)
                }),
                saferoom_01: {
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
                            type: "container",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(6, 4))]
                        }],
                        imgs: [{
                            sprite: "map-building-saferoom-floor.img",
                            scale: .5,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(5, 3))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(5, 3))],
                        imgs: [{
                            sprite: "map-building-saferoom-ceiling.img",
                            scale: .5,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_7",
                        pos: ve.create(-5, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_6",
                        pos: ve.create(1.5, 3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_9",
                        pos: ve.create(0, -3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_7",
                        pos: ve.create(5, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            case_01: 1,
                            case_02: .025,
                            chest_02: 1
                        }),
                        pos: ve.create(2.5, 0),
                        scale: 1,
                        ori: 3
                    }]
                },
                mansion_01: se({}),
                mansion_01x: se({
                    ceiling: {
                        imgs: [{
                            sprite: "map-building-mansion-ceiling.img",
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-snow-01.img",
                            pos: ve.create(6, 19.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }, {
                            sprite: "map-snow-02.img",
                            pos: ve.create(-16, 8),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }, {
                            sprite: "map-snow-03.img",
                            pos: ve.create(20.25, -1.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 1
                        }, {
                            sprite: "map-snow-04.img",
                            pos: ve.create(10.25, -13.25),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-05.img",
                            pos: ve.create(10.25, 6.25),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-snow-07.img",
                            pos: ve.create(-21.25, -20.25),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }, {
                            sprite: "map-snow-06.img",
                            pos: ve.create(-29.75, 13.25),
                            scale: .75,
                            alpha: 1,
                            tint: 16777215,
                            rot: 3
                        }]
                    },
                    tree: "tree_11",
                    tree_scale: 1,
                    tree_loot: "loot_tier_1",
                    bush_chance: 999
                }),
                mansion_02: se({
                    decoration_01: "decal_web_01",
                    decoration_02: "candle_lit_01",
                    porch_01: "cache_05",
                    entry_loot: ""
                }),
                mansion_cellar_01: le({}),
                mansion_cellar_02: le({
                    decoration_01: "decal_web_01",
                    decoration_02: "candle_lit_01",
                    mid_obs_01: "pumpkin_01"
                }),
                mansion_structure_01: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    layers: [{
                        type: "mansion_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "mansion_cellar_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(28, 1.5), ve.create(3, 2.55)),
                        downDir: ve.create(-1, 0),
                        noCeilingReveal: !0
                    }, {
                        collision: _e.createAabbExtents(ve.create(1, 13.5), ve.create(2, 3.5)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(10, -.1), ve.create(15, 10.1)), _e.createAabbExtents(ve.create(17.5, 13.5), ve.create(7.49, 3.49))]
                },
                mansion_structure_02: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    layers: [{
                        type: "mansion_02",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "mansion_cellar_02",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(28, 1.5), ve.create(3, 2.55)),
                        downDir: ve.create(-1, 0),
                        noCeilingReveal: !0
                    }, {
                        collision: _e.createAabbExtents(ve.create(1, 13.5), ve.create(2, 3.5)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(10, -.1), ve.create(15, 10.1)), _e.createAabbExtents(ve.create(17.5, 13.5), ve.create(7.49, 3.49))]
                },
                saloon_column_1: Z({
                    material: "woodPerm",
                    extents: ve.create(1, 1),
                    hitParticle: "blackChip",
                    img: m("map-column-01.img", 1710618)
                }),
                saloon_bar_small: xe({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 5)),
                    img: {
                        sprite: "",
                        scale: .5,
                        alpha: 1,
                        tint: 4456448,
                        zIdx: 10
                    }
                }),
                saloon_bar_large: xe({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(1.5, 7.5)),
                    img: {
                        sprite: "",
                        scale: .5,
                        alpha: 1,
                        tint: 4456448,
                        zIdx: 10
                    }
                }),
                saloon_bar_back_large: xe({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.75, 5)),
                    img: {
                        sprite: "map-saloon-bar-01.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    }
                }),
                saloon_bar_back_small: xe({
                    collision: _e.createAabbExtents(ve.create(0, 0), ve.create(.75, 1.5)),
                    img: {
                        sprite: "map-saloon-bar-02.img",
                        scale: .5,
                        alpha: 1,
                        tint: 16777215,
                        zIdx: 10
                    }
                }),
                saloon_door_secret: T({
                    destructible: !1,
                    material: "wood",
                    hitParticle: "woodChip",
                    hinge: ve.create(0, 2),
                    extents: ve.create(.75, 2),
                    door: {
                        canUse: !1,
                        openOnce: !0,
                        openOneWay: !1,
                        openSpeed: 36,
                        autoOpen: !1,
                        autoClose: !1,
                        slideToOpen: !0,
                        slideOffset: 4.5,
                        sound: {
                            open: ""
                        }
                    },
                    img: {
                        sprite: "map-door-04.img",
                        residue: "map-drawers-res.img",
                        scale: .5,
                        tint: 16777215,
                        zIdx: 9
                    }
                }),
                wood_perm_wall_ext_5: Z({
                    material: "woodPerm",
                    extents: ve.create(.5, 2.5),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_6: Z({
                    material: "woodPerm",
                    extents: ve.create(.5, 3),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_7: Z({
                    material: "woodPerm",
                    extents: ve.create(.5, 3.5),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_14: Z({
                    material: "woodPerm",
                    extents: ve.create(.5, 7),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_17: Z({
                    material: "woodPerm",
                    extents: ve.create(.5, 8.5),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_35: Z({
                    material: "woodPerm",
                    extents: ve.create(.5, 17.5),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_thicker_6: Z({
                    material: "woodPerm",
                    extents: ve.create(1.5, 3),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_thicker_7: Z({
                    material: "woodPerm",
                    extents: ve.create(1.5, 3.5),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_thicker_8: Z({
                    material: "woodPerm",
                    extents: ve.create(1.5, 4),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_thicker_10: Z({
                    material: "woodPerm",
                    extents: ve.create(1.5, 5),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_thicker_12: Z({
                    material: "woodPerm",
                    extents: ve.create(1.5, 6),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_thicker_13: Z({
                    material: "woodPerm",
                    extents: ve.create(1.5, 6.5),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_thicker_18: Z({
                    material: "woodPerm",
                    extents: ve.create(1.5, 9),
                    hitParticle: "blackChip"
                }),
                wood_perm_wall_ext_thicker_21: Z({
                    material: "woodPerm",
                    extents: ve.create(1.5, 10.5),
                    hitParticle: "blackChip"
                }),
                saloon_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(0, 0), ve.create(20.5, 20.5)),
                            color: 5252110
                        }, {
                            collider: _e.createAabbExtents(ve.create(-1, 1), ve.create(19, 19)),
                            color: 4337194
                        }, {
                            collider: _e.createAabbExtents(ve.create(-3, 3), ve.create(17, 17)),
                            color: 2499104
                        }, {
                            collider: _e.createAabbExtents(ve.create(-23.5, 1), ve.create(3, 2)),
                            color: 3485483
                        }]
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(22.5, 22.5))],
                    zIdx: 1,
                    floor: {
                        surfaces: [{
                            type: "house",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(20.5, 20.5)), _e.createAabbExtents(ve.create(-23.5, 1), ve.create(3, 2))]
                        }],
                        imgs: [{
                            sprite: "map-building-saloon-floor-01.img",
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-saloon-ceiling-02.img",
                            pos: ve.create(-23.5, 1),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(-1, 1), ve.create(19, 19))],
                        scopeOut: [_e.createAabbExtents(ve.create(1, -1), ve.create(21.5, 21.5))],
                        vision: {
                            dist: 5.5,
                            width: 2.75,
                            linger: .5,
                            fadeRate: 6
                        },
                        damage: {
                            obstacleCount: 1
                        },
                        imgs: [{
                            sprite: "map-building-saloon-ceiling-01.img",
                            pos: ve.create(0, 0),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-building-saloon-ceiling-02.img",
                            pos: ve.create(-23.5, 1),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-chimney-01.img",
                            pos: ve.create(-3, 3),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            removeOnDamaged: !0
                        }]
                    },
                    occupiedEmitters: [{
                        type: "cabin_smoke_parent",
                        pos: ve.create(0, 0),
                        rot: 0,
                        scale: 1,
                        layer: 0,
                        parentToCeiling: !0
                    }],
                    interiorSound: {
                        sound: "piano_music_01",
                        stopOnPuzzleComplete: !0
                    },
                    puzzle: {
                        solution: "saloon",
                        completeUseType: "saloon_door_secret",
                        completeOffDelay: 1,
                        completeUseDelay: 2,
                        errorResetDelay: 1,
                        pieceResetDelay: 10,
                        sound: {
                            fail: "door_error_01",
                            complete: "piano_02"
                        }
                    },
                    mapObjects: [{
                        type: "wood_perm_wall_ext_17",
                        pos: ve.create(-20, 11),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_5",
                        pos: ve.create(-23, 3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_5",
                        pos: ve.create(-26, 1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_5",
                        pos: ve.create(-22, 1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_5",
                        pos: ve.create(-23, -1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_14",
                        pos: ve.create(-20, -7.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_35",
                        pos: ve.create(-3, 20),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_6",
                        pos: ve.create(-16.5, -14),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_window_01",
                        pos: ve.create(-12, -14.25),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_7",
                        pos: ve.create(-7, -14),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_window_01",
                        pos: ve.create(-2, -14.25),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_7",
                        pos: ve.create(3, -14),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_6",
                        pos: ve.create(14, 16.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "house_window_01",
                        pos: ve.create(14.25, 12),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_7",
                        pos: ve.create(14, 7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "house_window_01",
                        pos: ve.create(14.25, 2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_7",
                        pos: ve.create(14, -3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "saloon_bar_back_large",
                        pos: ve.create(-18.75, 7.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "saloon_door_secret",
                        pos: ve.create(-18.75, 2.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "saloon_bar_back_small",
                        pos: ve.create(-18.75, -2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-18.75, 11.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-18.75, 10),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-18.75, 9),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-18.75, 6),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-18.75, 5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-18.75, 3.75),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_02v",
                        pos: ve.create(-18.75, -1.75),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "violet"
                    }, {
                        type: "saloon_bar_large",
                        pos: ve.create(-11, 5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "saloon_bar_small",
                        pos: ve.create(-14.5, -4),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-10.75, 11),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_02r",
                        pos: ve.create(-11, 8),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "red"
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-11, 6.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-10.75, 5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-11, 1.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-10.75, -1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_02b",
                        pos: ve.create(-11, -2.5),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "blue"
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-13, -4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-15, -4.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_01",
                        pos: ve.create(-16.5, -4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_02",
                        pos: ve.create(-17.5, 17.5),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "barrel"
                    }, {
                        type: "piano_01",
                        pos: ve.create(-18, -9.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "loot_tier_1",
                        pos: ve.create(-16, -9.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            gun_mount_01: 100,
                            gun_mount_02: 10
                        }),
                        pos: ve.create(-.5, 18.75),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "gun"
                    }, {
                        type: "barrel_02",
                        pos: ve.create(-3, -7),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "barrel_02",
                        pos: ve.create(-.5, -4.5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "stove_02",
                        pos: ve.create(-3, 3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_02g",
                        pos: ve.create(7.25, 10.5),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "green"
                    }, {
                        type: "table_03",
                        pos: ve.create(7.25, 10.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "table_03",
                        pos: ve.create(7.25, .5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bottle_02i",
                        pos: ve.create(12.5, 4.5),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "indigo"
                    }, {
                        type: "crate_01",
                        pos: ve.create(11, 17),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "bottle_02y",
                        pos: ve.create(8, 18.5),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "yellow"
                    }, {
                        type: "crate_01",
                        pos: ve.create(-23, 11.5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "bush_01",
                        pos: ve.create(-23.5, 7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(-23, -5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "saloon_column_1",
                        pos: ve.create(-19.5, -17.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_02",
                        pos: ve.create(-10, -16.5),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "bottle_02o",
                        pos: ve.create(3.75, -17.5),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "orange"
                    }, {
                        type: "saloon_column_1",
                        pos: ve.create(5.5, -17.5),
                        scale: 1,
                        ori: 0,
                        puzzlePiece: "column"
                    }, {
                        type: "saloon_column_1",
                        pos: ve.create(17.5, 19.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_02",
                        pos: ve.create(16.5, 9),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "saloon_column_1",
                        pos: ve.create(17.5, -5.5),
                        scale: 1,
                        ori: 0
                    }]
                },
                saloon_cellar_01: {
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
                            type: "brick",
                            collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(15, 9))]
                        }],
                        imgs: [{
                            sprite: "map-building-saloon-cellar-01.img",
                            pos: ve.create(0, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(15, 9))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(15, 9))],
                        imgs: [{
                            sprite: "",
                            pos: ve.create(-2, 3.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }],
                        vision: {
                            dist: 7,
                            width: 3
                        }
                    },
                    mapObjects: [{
                        type: "wood_perm_wall_ext_thicker_18",
                        pos: ve.create(-8, 10),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_5",
                        pos: ve.create(1.5, 7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_thicker_12",
                        pos: ve.create(-4.5, 4),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_thicker_13",
                        pos: ve.create(-16, 2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_thicker_8",
                        pos: ve.create(-13.5, -6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_thicker_7",
                        pos: ve.create(-8, -8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_thicker_13",
                        pos: ve.create(0, -10),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_thicker_7",
                        pos: ve.create(8, -8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_thicker_8",
                        pos: ve.create(13.5, -6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_thicker_13",
                        pos: ve.create(16, 2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_thicker_10",
                        pos: ve.create(12.5, 10),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "wood_perm_wall_ext_thicker_6",
                        pos: ve.create(9, 5.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "wood_perm_wall_ext_thicker_21",
                        pos: ve.create(0, 1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "loot_tier_vector45",
                        pos: ve.create(0, -4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_04",
                        pos: ve.create(-3, -8.03),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "barrel_04",
                        pos: ve.create(0, -8.03),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "barrel_04",
                        pos: ve.create(3, -8.03),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "recorder_04",
                        pos: ve.create(12.5, 6.5),
                        scale: 1,
                        ori: 0
                    }]
                },
                saloon_structure_01: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    layers: [{
                        type: "saloon_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "saloon_cellar_01",
                        pos: ve.create(-19, -6),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(-19.5, .75), ve.create(1.5, 2)),
                        downDir: ve.create(-1, 0)
                    }],
                    mask: [_e.createAabbExtents(ve.create(-30, .75), ve.create(10, 5))]
                },
                teahouse_wall_int_3: Z({
                    material: "wood",
                    extents: ve.create(.5, 1.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-03.img", 5505024, .95)
                }),
                teahouse_wall_int_4: Z({
                    material: "wood",
                    extents: ve.create(.5, 2),
                    hitParticle: "tanChip",
                    img: m("map-wall-04.img", 5505024, .95)
                }),
                teahouse_wall_int_5: Z({
                    material: "wood",
                    extents: ve.create(.5, 2.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-05.img", 5505024, .95)
                }),
                teahouse_wall_int_7: Z({
                    material: "wood",
                    extents: ve.create(.5, 3.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-07.img", 5505024, .95)
                }),
                teahouse_wall_int_12: Z({
                    material: "wood",
                    extents: ve.create(.5, 6),
                    hitParticle: "tanChip",
                    img: m("map-wall-12.img", 5505024, .95)
                }),
                teahouse_wall_int_13: Z({
                    material: "wood",
                    extents: ve.create(.5, 6.5),
                    hitParticle: "tanChip",
                    img: m("map-wall-13.img", 5505024, .95)
                }),
                teahouse_wall_int_14: Z({
                    material: "wood",
                    extents: ve.create(.5, 7),
                    hitParticle: "tanChip",
                    img: m("map-wall-14.img", 5505024, .95)
                }),
                teahouse_wall_int_18: Z({
                    material: "wood",
                    extents: ve.create(.5, 9),
                    hitParticle: "tanChip",
                    img: m("map-wall-18.img", 5505024, .95)
                }),
                teahouse_door_01: P({
                    img: {
                        tint: 14537141,
                        alpha: .95
                    },
                    door: {
                        interactionRad: 2,
                        openOneWay: !1,
                        openSpeed: 7,
                        autoOpen: !1,
                        autoClose: !1,
                        autoCloseDelay: 1,
                        slideToOpen: !0,
                        slideOffset: 3.75,
                        sound: {
                            open: "door_open_04",
                            close: "door_open_04",
                            error: "door_error_01"
                        },
                        casingImg: {
                            sprite: "map-door-slot-02.img",
                            pos: ve.create(-2, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 3211264,
                            zIdx: 60
                        }
                    }
                }),
                teahouse_window_open_01: xe({
                    img: {
                        tint: 12216619
                    }
                }),
                teahouse_01: function(e) {
                    var t = {
                        type: "building",
                        map: {
                            display: !0,
                            shapes: [{
                                collider: _e.createAabbExtents(ve.create(0, 0), ve.create(14, 9)),
                                color: 4608356
                            }, {
                                collider: _e.createAabbExtents(ve.create(0, 0), ve.create(7.5, 3.75)),
                                color: 5793921
                            }, {
                                collider: _e.createAabbExtents(ve.create(9, -10.15), ve.create(2, 1.5)),
                                color: 7354635
                            }, {
                                collider: _e.createAabbExtents(ve.create(-9, 10.15), ve.create(2, 1.5)),
                                color: 7354635
                            }]
                        },
                        terrain: {
                            grass: !0,
                            beach: !1
                        },
                        floor: {
                            surfaces: [{
                                type: "shack",
                                collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(14, 9)), _e.createAabbExtents(ve.create(9, -10.15), ve.create(2, 1.5)), _e.createAabbExtents(ve.create(-9, 10.15), ve.create(2, 1.5))]
                            }],
                            imgs: [{
                                sprite: "map-building-teahouse-floor-01.img",
                                pos: ve.create(0, 0),
                                scale: .5,
                                alpha: 1,
                                tint: 16777215
                            }, {
                                sprite: "map-building-teahouse-floor-02.img",
                                pos: ve.create(9, -10.25),
                                scale: .5,
                                alpha: 1,
                                tint: 16777215
                            }, {
                                sprite: "map-building-teahouse-floor-02.img",
                                pos: ve.create(-9, 10.25),
                                scale: .5,
                                alpha: 1,
                                tint: 16777215,
                                rot: 2
                            }]
                        },
                        ceiling: {
                            scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(12, 7))],
                            scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(14, 9))],
                            vision: {
                                width: 4
                            },
                            imgs: [{
                                sprite: "map-building-teahouse-ceiling-01.img",
                                scale: .5,
                                alpha: 1,
                                tint: 16777215
                            }],
                            destroy: {
                                wallCount: 3,
                                particle: "teahouseBreak",
                                particleCount: 25,
                                residue: "map-building-teahouse-res-01.img"
                            }
                        },
                        mapObjects: [{
                            type: "teahouse_window_open_01",
                            pos: ve.create(-6.5, -6.75),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "teahouse_window_open_01",
                            pos: ve.create(11.75, 1.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "teahouse_wall_int_7",
                            pos: ve.create(11.5, -3.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "teahouse_wall_int_4",
                            pos: ve.create(11.5, 5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "teahouse_door_01",
                            pos: ve.create(-7, 6.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "teahouse_wall_int_18",
                            pos: ve.create(2, 6.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "teahouse_wall_int_3",
                            pos: ve.create(-9.5, -6.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "teahouse_wall_int_12",
                            pos: ve.create(1, -6.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "teahouse_wall_int_14",
                            pos: ve.create(-11.5, 0),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "teahouse_door_01",
                            pos: ve.create(7, -6.5),
                            scale: 1,
                            ori: 3
                        }, {
                            type: "pot_03",
                            pos: ve.create(9.5, 4.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "pot_03",
                            pos: ve.create(-9.5, -1.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "pot_03",
                            pos: ve.create(-9.5, -4.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "case_06",
                            pos: ve.create(0, 0),
                            scale: 1,
                            ori: 0
                        }]
                    };
                    return ke.mergeDeep(t, e || {})
                }({}),
                teapavilion_01: function(e) {
                    var t = {
                        type: "building",
                        map: {
                            display: !0,
                            shapes: [{
                                collider: _e.createAabbExtents(ve.create(0, 0), ve.create(9, 9)),
                                color: 10555920
                            }, {
                                collider: _e.createAabbExtents(ve.create(0, 0), ve.create(3.5, 3.5)),
                                color: 16727611
                            }, {
                                collider: _e.createAabbExtents(ve.create(0, -10.15), ve.create(2, 1.5)),
                                color: 7354635
                            }]
                        },
                        terrain: {
                            grass: !0,
                            beach: !1
                        },
                        mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(11, 11)), _e.createAabbExtents(ve.create(0, -20), ve.create(4, 12))],
                        ori: 0,
                        floor: {
                            surfaces: [{
                                type: "shack",
                                collision: [_e.createAabbExtents(ve.create(0, 0), ve.create(9, 9)), _e.createAabbExtents(ve.create(0, -10.15), ve.create(2, 1.5))]
                            }],
                            imgs: [{
                                sprite: "map-building-pavilion-floor-01.img",
                                pos: ve.create(0, 0),
                                scale: .5,
                                alpha: 1,
                                tint: 16777215
                            }, {
                                sprite: "map-building-teahouse-floor-02.img",
                                pos: ve.create(0, -10.25),
                                scale: .5,
                                alpha: 1,
                                tint: 16777215
                            }]
                        },
                        ceiling: {
                            scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(7, 7))],
                            scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(9, 9))],
                            vision: {
                                width: 4
                            },
                            imgs: [{
                                sprite: "map-building-pavilion-ceiling-01.img",
                                scale: .5,
                                alpha: 1,
                                tint: 16777215
                            }],
                            destroy: {
                                wallCount: 3,
                                particle: "teapavilionBreak",
                                particleCount: 15,
                                residue: "map-building-pavilion-res-01.img"
                            }
                        },
                        mapObjects: [{
                            type: "teahouse_wall_int_12",
                            pos: ve.create(0, 6.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "teahouse_wall_int_13",
                            pos: ve.create(6.5, .5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "teahouse_wall_int_13",
                            pos: ve.create(-6.5, .5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "teahouse_wall_int_5",
                            pos: ve.create(-4.5, -6.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "teahouse_wall_int_5",
                            pos: ve.create(4.5, -6.5),
                            scale: 1,
                            ori: 1
                        }, {
                            type: "teahouse_door_01",
                            pos: ve.create(-2, -6.5),
                            scale: 1,
                            ori: 3
                        }, {
                            type: "pot_04",
                            pos: ve.create(4.5, 4.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "pot_05",
                            pos: ve.create(-4.5, 4.5),
                            scale: 1,
                            ori: 0
                        }, {
                            type: "loot_tier_helmet_forest",
                            pos: ve.create(0, 0),
                            scale: 1,
                            ori: 0
                        }]
                    };
                    return ke.mergeDeep(t, e || {})
                }({
                    terrain: {
                        lakeCenter: !0
                    }
                }),
                teahouse_complex_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: []
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 0), ve.create(24, 18))],
                    mapGroundPatches: [{
                        bound: _e.createAabbExtents(ve.create(0, 0), ve.create(21, 15)),
                        color: 6066442,
                        roughness: .05,
                        offsetDist: .25
                    }],
                    floor: {
                        surfaces: [{
                            type: "grass",
                            collision: []
                        }],
                        imgs: []
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        imgs: []
                    },
                    mapObjects: [{
                        type: "teahouse_01",
                        pos: ve.create(0, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_02",
                        pos: ve.create(12, 11),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_02",
                        pos: ve.create(-16, -6),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "tree_07s",
                        pos: ve.create(-3, 12),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "tree_07s",
                        pos: ve.create(-15, 12),
                        scale: .9,
                        ori: 0
                    }, {
                        type: c({
                            tree_08s: 2,
                            "": 1
                        }),
                        pos: ve.create(-10, -13),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            tree_08s: 2,
                            "": 1
                        }),
                        pos: ve.create(-17.5, 2.5),
                        scale: 1.2,
                        ori: 0
                    }, {
                        type: c({
                            tree_08s: 2,
                            "": 1
                        }),
                        pos: ve.create(18, -6.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            tree_08s: 2,
                            "": 1
                        }),
                        pos: ve.create(17.5, 5),
                        scale: 1.2,
                        ori: 0
                    }, {
                        type: "tree_07s",
                        pos: ve.create(3, -12),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "tree_07s",
                        pos: ve.create(15, -12),
                        scale: .9,
                        ori: 0
                    }]
                },
                bunker_egg_01: {
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
                        scopeIn: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 0), ve.create(0, 0))],
                        vision: {
                            dist: 5,
                            width: 2.75,
                            linger: .5,
                            fadeRate: 6
                        },
                        imgs: []
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
                        type: "tree_01",
                        pos: ve.create(5, 8),
                        scale: 1.05,
                        ori: 0
                    }, {
                        type: "tree_01",
                        pos: ve.create(-5, 7.5),
                        scale: 1.1,
                        ori: 0
                    }, {
                        type: "tree_01",
                        pos: ve.create(-1.25, 15.75),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_vent_01",
                        pos: ve.create(-5, -0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "stone_01",
                        pos: ve.create(-5.75, -1.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "decal_vent_02",
                        pos: ve.create(4.5, -8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bush_01",
                        pos: ve.create(5.75, -6.75),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_egg_sublevel_01: {
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
                            collision: [_e.createAabbExtents(ve.create(0, -4.5), ve.create(10, 9))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-egg-chamber-floor-01a.img",
                            pos: ve.create(-.15, -4.6),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-egg-chamber-floor-01b.img",
                            pos: ve.create(0, 9.24),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, -4.5), ve.create(10, 9))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, -4.5), ve.create(10, 9))],
                        imgs: [{
                            sprite: "map-bunker-egg-chamber-ceiling-01.img",
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
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
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(-10.5, -3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(10.5, -3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_24",
                        pos: ve.create(0, -14.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_02",
                        pos: ve.create(-2, 5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "crate_07",
                        pos: ve.create(0, -4.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-7, -11),
                        scale: .9,
                        ori: 0
                    }]
                },
                bunker_egg_sublevel_02: {
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
                            collision: [_e.createAabbExtents(ve.create(0, -4.5), ve.create(10, 9))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-egg-chamber-floor-01a.img",
                            pos: ve.create(-.15, -4.6),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-egg-chamber-floor-01b.img",
                            pos: ve.create(0, 9.25),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, -4.5), ve.create(10, 9))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, -4.5), ve.create(10, 9))],
                        imgs: [{
                            sprite: "map-bunker-egg-chamber-ceiling-01.img",
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
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
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(-10.5, -3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(10.5, -3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_24",
                        pos: ve.create(0, -14.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_02",
                        pos: ve.create(-2, 5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "crate_07b",
                        pos: ve.create(0, -4.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-7, -11),
                        scale: .9,
                        ori: 0
                    }]
                },
                bunker_structure_01: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 5), ve.create(7.5, 12.5))],
                    layers: [{
                        type: "bunker_egg_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_egg_sublevel_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, 8.4), ve.create(2, 2.6)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(0, -3.7), ve.create(10, 9.5))]
                },
                bunker_structure_01b: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 5), ve.create(7.5, 12.5))],
                    layers: [{
                        type: "bunker_egg_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_egg_sublevel_02",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, 8.4), ve.create(2, 2.6)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(0, -3.7), ve.create(10, 9.5))]
                },
                bunker_hydra_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(20.25, 3.5), ve.create(6.25, 5.5)),
                            color: 2894892
                        }, {
                            collider: _e.createAabbExtents(ve.create(32.25, 3.5), ve.create(6.75, 9.25)),
                            color: 3815994
                        }]
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 0,
                    floor: {
                        surfaces: [{
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(20.25, 3.5), ve.create(6.25, 5.5)), _e.createAabbExtents(ve.create(32.25, 3.5), ve.create(6.75, 9.25))]
                        }, {
                            type: "container",
                            collision: [_e.createAabbExtents(ve.create(16.25, 3.5), ve.create(3.25, 2)), _e.createAabbExtents(ve.create(-16.5, -90.75), ve.create(2, 3.25)), _e.createAabbExtents(ve.create(40, -50.5), ve.create(2, 3.25))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-hydra-floor-01.img",
                            pos: ve.create(25.75, 3.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-generic-floor-01.img",
                            pos: ve.create(-16.5, -90),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }, {
                            sprite: "map-bunker-generic-floor-01.img",
                            pos: ve.create(40, -51),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(19.25, 3.5), ve.create(6.25, 5.5)), _e.createAabbExtents(ve.create(32.25, 3.5), ve.create(6.75, 9.25))],
                        scopeOut: [_e.createAabbExtents(ve.create(19.25, 3.5), ve.create(6.25, 5.5)), _e.createAabbExtents(ve.create(32.25, 3.5), ve.create(6.75, 9.25))],
                        imgs: [{
                            sprite: "map-bunker-hydra-ceiling-01.img",
                            pos: ve.create(25.75, 3.5),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
                        }],
                        vision: {
                            dist: 5,
                            width: 2.75,
                            linger: .5,
                            fadeRate: 6
                        }
                    },
                    mapObjects: [{
                        type: "concrete_wall_ext_13",
                        pos: ve.create(18.75, 9.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "concrete_wall_ext_13",
                        pos: ve.create(18.75, -2.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "concrete_wall_ext_11",
                        pos: ve.create(12.75, 3.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "concrete_wall_ext_7",
                        pos: ve.create(25.75, 9),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "concrete_wall_ext_7",
                        pos: ve.create(25.75, -2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "concrete_wall_ext_2",
                        pos: ve.create(26.25, 12.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "concrete_wall_ext_2",
                        pos: ve.create(26.25, -5.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "concrete_wall_ext_8",
                        pos: ve.create(35.25, 12.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "concrete_wall_ext_8",
                        pos: ve.create(35.25, -5.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "concrete_wall_ext_17",
                        pos: ve.create(38.75, 3.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "police_wall_int_7",
                        pos: ve.create(32.75, 8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "police_wall_int_2",
                        pos: ve.create(33.25, 4.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_01",
                        pos: ve.create(38.25, 4.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: c({
                            toilet_03: 5,
                            toilet_04: 1
                        }),
                        pos: ve.create(35.75, 10.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_08",
                        pos: ve.create(35.75, -2.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_short_6",
                        pos: ve.create(13, 3.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_short_7",
                        pos: ve.create(17, 6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_short_7",
                        pos: ve.create(17, 1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "decal_vent_01",
                        pos: ve.create(-1.5, 8),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_vent_02",
                        pos: ve.create(8, -.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_short_6",
                        pos: ve.create(-16.5, -87.75),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_short_7",
                        pos: ve.create(-19, -91),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_short_7",
                        pos: ve.create(-14, -91),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_vent_01",
                        pos: ve.create(-15.15, -79.55),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_short_6",
                        pos: ve.create(40, -53.25),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_short_7",
                        pos: ve.create(37.5, -50),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_short_7",
                        pos: ve.create(42.5, -50),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_vent_02",
                        pos: ve.create(40, -60.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "tree_01",
                        pos: ve.create(-11.5, -92),
                        scale: 1.05,
                        ori: 0
                    }, {
                        type: "tree_01",
                        pos: ve.create(-21.5, -92.5),
                        scale: 1.1,
                        ori: 0
                    }, {
                        type: "tree_01",
                        pos: ve.create(-17.5, -83.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "tree_01",
                        pos: ve.create(45, -50),
                        scale: 1.05,
                        ori: 0
                    }, {
                        type: "tree_01",
                        pos: ve.create(35, -50.5),
                        scale: 1.1,
                        ori: 0
                    }, {
                        type: "tree_01",
                        pos: ve.create(38.75, -42.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_hydra_01",
                        pos: ve.create(3.5, -48.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }]
                },
                bunker_hydra_sublevel_01: {
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
                            collision: [_e.createAabbExtents(ve.create(3.5, 3), ve.create(9.5, 9))]
                        }, {
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(-15.5, -79.5), ve.create(3, 8)), _e.createAabbExtents(ve.create(40.5, -62), ve.create(9.5, 8))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-hydra-chamber-floor-01a.img",
                            pos: ve.create(17.5, 3.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hydra-chamber-floor-01b.img",
                            pos: ve.create(3.5, 2.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hydra-chamber-floor-02.img",
                            pos: ve.create(-15.5, -83),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-hydra-chamber-floor-03.img",
                            pos: ve.create(40.5, -58.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(3.5, 2.25), ve.create(10, 10)), _e.createAabbExtents(ve.create(-15, -77), ve.create(5.5, 10.5)), _e.createAabbExtents(ve.create(38, -62), ve.create(11.5, 8))],
                        scopeOut: [_e.createAabbExtents(ve.create(3.5, 2.25), ve.create(10, 10)), _e.createAabbExtents(ve.create(-15, -77), ve.create(5.5, 10.5)), _e.createAabbExtents(ve.create(38, -62), ve.create(11.5, 8))],
                        imgs: [{
                            sprite: "map-bunker-hydra-chamber-ceiling-01.img",
                            pos: ve.create(7, 2),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }, {
                            sprite: "map-bunker-hydra-chamber-ceiling-02.img",
                            pos: ve.create(-13.5, -76.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }, {
                            sprite: "map-bunker-hydra-chamber-ceiling-03.img",
                            pos: ve.create(38, -62),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }],
                        vision: {
                            dist: 10,
                            width: 3
                        }
                    },
                    mapObjects: [{
                        type: "concrete_wall_ext_6",
                        pos: ve.create(20, 3.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(16.5, 7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(16.5, 0),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(14, 12),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(14, -5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_21",
                        pos: ve.create(2, 13.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_21",
                        pos: ve.create(-7, 2.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(-3, -6.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(10, -6.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_02",
                        pos: ve.create(13.5, 5.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(-.5, -7.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(7.5, -7.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(0, 7.25),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_01",
                        pos: ve.create(10.25, -2.75),
                        scale: .9,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_01",
                        pos: ve.create(10.25, 9.75),
                        scale: .9,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-3.5, -3),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_23",
                        pos: ve.create(-20, -83),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_19",
                        pos: ve.create(-11, -79),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(-13, -90.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "concrete_wall_ext_6",
                        pos: ve.create(-16.5, -94),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_02",
                        pos: ve.create(-18.5, -87.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "locker_01",
                        pos: ve.create(-12.15, -79),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "locker_01",
                        pos: ve.create(-12.15, -74.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "locker_01",
                        pos: ve.create(-12.15, -83.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "concrete_wall_ext_6",
                        pos: ve.create(40, -47),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(36.5, -50.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(43.5, -50.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(33, -53),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(30, -55),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(30, -66),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_16",
                        pos: ve.create(36.5, -71),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(48.25, -70),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_13",
                        pos: ve.create(50, -62),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(48.25, -54),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "house_door_02",
                        pos: ve.create(38, -53.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "crate_08",
                        pos: ve.create(34, -67),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "locker_01",
                        pos: ve.create(46.5, -55.15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(48.9, -57.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "locker_01",
                        pos: ve.create(48.9, -62),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "locker_01",
                        pos: ve.create(48.9, -66.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "locker_01",
                        pos: ve.create(46.5, -68.85),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "bunker_hydra_compartment_01",
                        pos: ve.create(3.5, -18.95),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_hydra_compartment_02",
                        pos: ve.create(6, -50),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_hydra_compartment_03",
                        pos: ve.create(10.5, -74.95),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_hydra_compartment_01: {
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
                            collision: [_e.createAabbExtents(ve.create(0, 1.5), ve.create(9.5, 12.5))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-hydra-compartment-floor-01.img",
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, 1.25), ve.create(10, 10))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, 1.25), ve.create(10, 10))],
                        imgs: [{
                            sprite: "map-bunker-hydra-compartment-ceiling-01.img",
                            pos: ve.create(0, 1.25),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_17",
                        pos: ve.create(-9.75, 3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(-6.5, 9.75),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(6.5, 10.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_18",
                        pos: ve.create(10.5, 1.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(-7.5, -6.75),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(8, -7.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_08",
                        pos: ve.create(6.5, 6.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "sandbags_01",
                        pos: ve.create(4.75, 1.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(-4, -8.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(4, -8.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "locker_01",
                        pos: ve.create(-6, 8.4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(-8.35, 6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "locker_01",
                        pos: ve.create(-8.35, 1.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "locker_01",
                        pos: ve.create(-8.35, -3),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "locker_01",
                        pos: ve.create(-6, -5.4),
                        scale: 1,
                        ori: 2
                    }]
                },
                metal_wall_column_5x12: Z({
                    material: "metal",
                    extents: ve.create(2.5, 6)
                }),
                bunker_hydra_compartment_02: {
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
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(-2.5, 16), ve.create(22, 4)), _e.createAabbExtents(ve.create(-2.5, 9.5), ve.create(6, 2.5)), _e.createAabbExtents(ve.create(0, -4.5), ve.create(25, 17))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-hydra-compartment-floor-02.img",
                            pos: ve.create(0, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(-2, 3), ve.create(22.5, 19.5))],
                        scopeOut: [_e.createAabbExtents(ve.create(-2, 3), ve.create(22.5, 19.5))],
                        imgs: [{
                            sprite: "map-bunker-hydra-compartment-ceiling-02.img",
                            pos: ve.create(0, 1),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_21",
                        pos: ve.create(-17, 21.75),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_21",
                        pos: ve.create(12, 21.75),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_42",
                        pos: ve.create(-26, -.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_29",
                        pos: ve.create(21, 6),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(-19, -18.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-18.5, -14),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(-15, -15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_9",
                        pos: ve.create(-9, -16),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_9",
                        pos: ve.create(4, -16),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(10, -15),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_11",
                        pos: ve.create(17, -14),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_column_5x12",
                        pos: ve.create(-14.5, 13),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_column_5x12",
                        pos: ve.create(9.5, 13),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "control_panel_03",
                        pos: ve.create(-7, 12),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "control_panel_03",
                        pos: ve.create(2, 12),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "lab_window_01",
                        pos: ve.create(-7, 7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_window_01",
                        pos: ve.create(-4, 7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_window_01",
                        pos: ve.create(-1, 7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_window_01",
                        pos: ve.create(2, 7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_4",
                        pos: ve.create(-9, 8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_4",
                        pos: ve.create(4, 8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(-20.5, 13),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(15.5, 13),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "crate_01",
                        pos: ve.create(-17.5, 7.75),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "vat_01",
                        pos: ve.create(-12.25, 7.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "vat_01",
                        pos: ve.create(-12, -2.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "vat_01",
                        pos: ve.create(-18, -2.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "vat_02",
                        pos: ve.create(-2.5, 1.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "power_box_01",
                        pos: ve.create(-2.5, -3),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "crate_01",
                        pos: ve.create(12.5, 7.75),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "vat_01",
                        pos: ve.create(7.25, 7.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "vat_01",
                        pos: ve.create(7, -2.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "vat_01",
                        pos: ve.create(13, -2.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "vat_01",
                        pos: ve.create(-10.75, -11.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(-4.5, -16.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "vat_01",
                        pos: ve.create(5.75, -11.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "fire_ext_01",
                        pos: ve.create(1.5, -14.15),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_door_03",
                        pos: ve.create(-20.5, -16.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_door_02",
                        pos: ve.create(20.5, -8.5),
                        scale: 1,
                        ori: 2
                    }]
                },
                bunker_hydra_compartment_03: {
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
                            type: "bunker",
                            collision: [_e.createAabbExtents(ve.create(0, 2), ve.create(9, 8.75))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-hydra-compartment-floor-03.img",
                            pos: ve.create(0, -.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, .75), ve.create(10, 7.75))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, .75), ve.create(10, 7.75))],
                        imgs: [{
                            sprite: "map-bunker-hydra-compartment-ceiling-03.img",
                            pos: ve.create(0, 1),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }]
                    },
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_17",
                        pos: ve.create(-10.5, -1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_18",
                        pos: ve.create(0, -8),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_18",
                        pos: ve.create(10.5, -1),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_14",
                        pos: ve.create(2, 6),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_01",
                        pos: ve.create(-6.5, -1.5),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_01",
                        pos: ve.create(-1.75, 2),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-2, -2),
                        scale: .9,
                        ori: 0
                    }, {
                        type: "case_03",
                        pos: ve.create(7, -4),
                        scale: 1,
                        ori: 3
                    }]
                },
                bunker_structure_02: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(25.5, 3.5), ve.create(16, 11.5)), _e.createAabbExtents(ve.create(-16.5, -89.5), ve.create(7, 7.5)), _e.createAabbExtents(ve.create(40, -47.25), ve.create(6.5, 7.25)), _e.createAabbExtents(ve.create(3.5, -48.5), ve.create(3, 3))],
                    layers: [{
                        type: "bunker_hydra_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_hydra_sublevel_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(16.4, 3.5), ve.create(2.6, 2)),
                        downDir: ve.create(-1, 0)
                    }, {
                        collision: _e.createAabbExtents(ve.create(-16.5, -90.4), ve.create(2, 3.1)),
                        downDir: ve.create(0, 1)
                    }, {
                        collision: _e.createAabbExtents(ve.create(40, -50.5), ve.create(2, 3.1)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(3.5, -7.2), ve.create(10.75, 20)), _e.createAabbExtents(ve.create(-15, -79.75), ve.create(5, 8.5)), _e.createAabbExtents(ve.create(39, -61.85), ve.create(12, 9)), _e.createAabbExtents(ve.create(3.5, -49.2), ve.create(23.49, 21.99)), _e.createAabbExtents(ve.create(10.5, -76.7), ve.create(10, 5.5))]
                },
                bunker_storm_01: {
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
                            collision: [_e.createAabbExtents(ve.create(0, 13.5), ve.create(3.75, 2.5))]
                        }, {
                            type: "asphalt",
                            collision: [_e.createAabbExtents(ve.create(5, 13.75), ve.create(1.25, 2.25))]
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
                        pos: ve.create(-5, -0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_vent_02",
                        pos: ve.create(4.5, -8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "stone_01",
                        pos: ve.create(-4.25, -1.5),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "bush_01",
                        pos: ve.create(3.75, -6.75),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_storm_sublevel_01: {
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
                            collision: [_e.createAabbExtents(ve.create(1, -4.4), ve.create(10.5, 9))]
                        }, {
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(19, -5.5), ve.create(7.5, 8))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-storm-chamber-floor-01.img",
                            pos: ve.create(8.5, -1),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(8.5, -4.5), ve.create(18, 9.5))],
                        scopeOut: [_e.createAabbExtents(ve.create(8.5, -4.5), ve.create(18, 9.5))],
                        imgs: [{
                            sprite: "map-bunker-storm-chamber-ceiling-01.img",
                            pos: ve.create(8.5, -1),
                            scale: 1,
                            alpha: 1,
                            tint: 16777215
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
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(-10.5, -3),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_21",
                        pos: ve.create(-1.5, -14.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_10",
                        pos: ve.create(10.5, -11),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_10",
                        pos: ve.create(12.5, -11),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_15",
                        pos: ve.create(21.5, -14.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_15",
                        pos: ve.create(27.5, -5.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_17",
                        pos: ve.create(20.5, 3.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_9",
                        pos: ve.create(10.5, 2.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(12.5, 0),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "house_door_02",
                        pos: ve.create(-2, 5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "crate_01",
                        pos: ve.create(-6.5, 1.5),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_04",
                        pos: ve.create(6, -1.2),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_04",
                        pos: ve.create(3.9, -6.4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "control_panel_03",
                        pos: ve.create(16, -11.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "control_panel_02",
                        pos: ve.create(20, -11.25),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "control_panel_03",
                        pos: ve.create(24, -11.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "crate_08",
                        pos: ve.create(23.5, -.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: c({
                            case_03: 1,
                            chest_02: 9
                        }),
                        pos: ve.create(16.5, .25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(11.5, -2),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-7, -11),
                        scale: .9,
                        ori: 0
                    }]
                },
                bunker_structure_03: {
                    type: "structure",
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(0, 6), ve.create(7, 16.5))],
                    layers: [{
                        type: "bunker_storm_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_storm_sublevel_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(0, 8.4), ve.create(2, 2.6)),
                        downDir: ve.create(0, -1)
                    }],
                    mask: [_e.createAabbExtents(ve.create(8.5, -3.7), ve.create(18, 9.5))]
                },
                bunker_conch_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(20, 3.35), ve.create(5.5, 2.5)),
                            color: 2703694
                        }, {
                            collider: _e.createAabbExtents(ve.create(46.5, -32.55), ve.create(5.5, 2.5)),
                            color: 2703694
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
                            collision: [_e.createAabbExtents(ve.create(16.25, 3.5), ve.create(3.25, 2)), _e.createAabbExtents(ve.create(44.25, -32.5), ve.create(3.25, 2)), _e.createAabbExtents(ve.create(22, 3.35), ve.create(8, 2.5)), _e.createAabbExtents(ve.create(50.5, -32.55), ve.create(8, 2.5))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-conch-floor-01.img",
                            pos: ve.create(20.75, 3.45),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-conch-floor-01.img",
                            pos: ve.create(48.75, -32.45),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(19, 3.35), ve.create(5.5, 2.5)), _e.createAabbExtents(ve.create(47.5, -32.55), ve.create(5.5, 2.5))],
                        scopeOut: [_e.createAabbExtents(ve.create(22, 3.35), ve.create(8, 2.5)), _e.createAabbExtents(ve.create(50.5, -32.55), ve.create(8, 2.5))],
                        imgs: [{
                            sprite: "map-bunker-conch-ceiling-01.img",
                            pos: ve.create(19.25, 3.35),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-conch-ceiling-01.img",
                            pos: ve.create(47.25, -32.55),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }],
                        vision: {}
                    },
                    mapObjects: [{
                        type: "container_wall_top",
                        pos: ve.create(13.7, 3.35),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "container_wall_side",
                        pos: ve.create(19.6, 5.7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "container_wall_side",
                        pos: ve.create(19.6, 1),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(24, 9),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "crate_01",
                        pos: ve.create(18, -2),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "container_wall_top",
                        pos: ve.create(41.7, -32.55),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "container_wall_side",
                        pos: ve.create(47.6, -34.9),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "container_wall_side",
                        pos: ve.create(47.6, -30.2),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "crate_01",
                        pos: ve.create(47, -27),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(40, -37),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_vent_03",
                        pos: ve.create(-2, -13.5),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_conch_sublevel_01: {
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
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(1, 4), ve.create(12.5, 3.5)), _e.createAabbExtents(ve.create(28, -30), ve.create(13.5, 4.5))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-conch-chamber-floor-01.img",
                            pos: ve.create(4, 5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-conch-chamber-floor-02.img",
                            pos: ve.create(34.86, -29.9),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(1, 3.5), ve.create(12.5, 5)), _e.createAabbExtents(ve.create(26.75, -30), ve.create(15.25, 4.5))],
                        scopeOut: [_e.createAabbExtents(ve.create(1, 3.5), ve.create(12.5, 5)), _e.createAabbExtents(ve.create(26.75, -30), ve.create(15.25, 4.5))],
                        imgs: [{
                            sprite: "map-bunker-conch-chamber-ceiling-01.img",
                            pos: ve.create(-2, 3.5),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }, {
                            sprite: "map-bunker-conch-chamber-ceiling-02.img",
                            pos: ve.create(26.25, -29.9),
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
                        type: "bunker_bubbles_01",
                        pos: ve.create(-2, -13.5),
                        rot: 0,
                        scale: .5,
                        layer: 0
                    }],
                    mapObjects: [{
                        type: "house_door_02",
                        pos: ve.create(13.5, 1.35),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "concrete_wall_ext_6",
                        pos: ve.create(20, 3.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(16.5, 6.7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_29",
                        pos: ve.create(7, 0),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_16",
                        pos: ve.create(5.5, 9),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_9",
                        pos: ve.create(-7, 7),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_10",
                        pos: ve.create(-13, 3.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(9.5, 7.85),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(5, 7.85),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "locker_01",
                        pos: ve.create(.5, 7.85),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "decal_pipes_01",
                        pos: ve.create(-4.5, 5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "house_door_02",
                        pos: ve.create(41.5, -34.55),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "concrete_wall_ext_6",
                        pos: ve.create(48, -32.4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_20",
                        pos: ve.create(38.5, -35.9),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_13",
                        pos: ve.create(42, -29.2),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(34, -26.7),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_8",
                        pos: ve.create(27, -33.4),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_11",
                        pos: ve.create(20, -30.9),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_18",
                        pos: ve.create(23.5, -23.9),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "decal_pipes_04",
                        pos: ve.create(22, -29.9),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "loot_tier_2",
                        pos: ve.create(31, -30),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_conch_compartment_01",
                        pos: ve.create(-1.5, -12.4),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_conch_compartment_01: {
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
                            collision: [_e.createAabbExtents(ve.create(1, -2.5), ve.create(15, 15.5))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-conch-compartment-floor-01a.img",
                            pos: ve.create(-3, -.75),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }, {
                            sprite: "map-bunker-conch-compartment-floor-01b.img",
                            pos: ve.create(9.75, -17.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(-1.5, -1), ve.create(12.5, 12)), _e.createAabbExtents(ve.create(9.5, -14.5), ve.create(4, 2.5))],
                        scopeOut: [_e.createAabbExtents(ve.create(-1.5, -1), ve.create(12.5, 12)), _e.createAabbExtents(ve.create(9.5, -14.5), ve.create(4, 2.5))],
                        imgs: [{
                            sprite: "map-bunker-conch-compartment-ceiling-01.img",
                            pos: ve.create(-.75, -5.5),
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
                        type: "bunker_bubbles_01",
                        pos: ve.create(-.5, -1),
                        rot: 0,
                        scale: .5,
                        layer: 0
                    }],
                    mapObjects: [{
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(-11.5, 8.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_4",
                        pos: ve.create(-15, 7.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_11",
                        pos: ve.create(-15.5, .5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(-13.5, -6.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(-11.5, -11.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_13",
                        pos: ve.create(-3.5, -13.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_5",
                        pos: ve.create(4.5, -14.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_13",
                        pos: ve.create(9.5, -18.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_7",
                        pos: ve.create(13.5, -11.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_19",
                        pos: ve.create(11.5, -.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_19",
                        pos: ve.create(3.5, 10.5),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(-10, 11),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "control_panel_03",
                        pos: ve.create(-12.25, 4.25),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "control_panel_02",
                        pos: ve.create(-12, .25),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "fire_ext_01",
                        pos: ve.create(-3, 8.75),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "crate_09",
                        pos: ve.create(2.75, 6.25),
                        scale: 1,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(7.5, 6.25),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "decal_pipes_02",
                        pos: ve.create(7.25, 7.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-3.75, -2),
                        scale: .8,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "barrel_01",
                        pos: ve.create(-1.25, -4.25),
                        scale: .8,
                        ori: 0,
                        inheritOri: !1
                    }, {
                        type: "crate_01",
                        pos: ve.create(-7.5, -9.5),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "crate_01",
                        pos: ve.create(3.5, -9.5),
                        scale: 1,
                        ori: 0,
                        ignoreMapSpawnReplacement: !0
                    }, {
                        type: "decal_pipes_03",
                        pos: ve.create(-5.25, -9.25),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "lab_door_01",
                        pos: ve.create(13.5, -17),
                        scale: 1,
                        ori: 0
                    }]
                },
                bunker_structure_04: {
                    type: "structure",
                    terrain: {
                        waterEdge: {
                            dir: ve.create(-1, 0),
                            distMin: 15,
                            distMax: 16
                        }
                    },
                    mapObstacleBounds: [_e.createAabbExtents(ve.create(21, 3.5), ve.create(9.5, 8)), _e.createAabbExtents(ve.create(48, -32.5), ve.create(10, 8))],
                    layers: [{
                        type: "bunker_conch_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }, {
                        type: "bunker_conch_sublevel_01",
                        pos: ve.create(0, 0),
                        ori: 0
                    }],
                    stairs: [{
                        collision: _e.createAabbExtents(ve.create(16.9, 3.5), ve.create(2.6, 2)),
                        downDir: ve.create(-1, 0)
                    }, {
                        collision: _e.createAabbExtents(ve.create(44.9, -32.5), ve.create(2.6, 2)),
                        downDir: ve.create(-1, 0)
                    }],
                    mask: [_e.createAabbExtents(ve.create(-1.5, -9.2), ve.create(15.7, 22)), _e.createAabbExtents(ve.create(28.25, -32), ve.create(14, 8))]
                },
                bunker_crossing_stairs_01: g({}),
                bunker_crossing_stairs_01b: g({
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(0, .75), ve.create(2, 3.25))],
                        scopeOut: [_e.createAabbExtents(ve.create(0, .75), ve.create(2, 3.25))],
                        imgs: [{
                            sprite: "map-bunker-crossing-ceiling-01.img",
                            pos: ve.create(0, 0),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }]
                    }
                }),
                bunker_crossing_01: {
                    type: "building",
                    map: {
                        display: !0,
                        shapes: [{
                            collider: _e.createAabbExtents(ve.create(0, 0), ve.create(5, 5)),
                            color: 1984867
                        }]
                    },
                    terrain: {
                        grass: !0,
                        beach: !1
                    },
                    zIdx: 0,
                    floor: {
                        surfaces: [],
                        imgs: [{
                            sprite: "map-bunker-crossing-floor-01.img",
                            pos: ve.create(0, 0),
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
                        type: "bunker_crossing_stairs_01b",
                        pos: ve.create(34.5, 28.5),
                        scale: 1,
                        ori: 3
                    }, {
                        type: "bunker_crossing_stairs_01b",
                        pos: ve.create(-36, 20),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "bunker_crossing_stairs_01b",
                        pos: ve.create(36, -14),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "bunker_crossing_stairs_01",
                        pos: ve.create(-34.5, -22.5),
                        scale: 1,
                        ori: 1
                    }]
                },
                bunker_crossing_sublevel_01: {
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
                            type: "tile",
                            collision: [_e.createAabbExtents(ve.create(0, 3.25), ve.create(38, 28))]
                        }],
                        imgs: [{
                            sprite: "map-bunker-crossing-chamber-floor-01.img",
                            pos: ve.create(-11.44, 24),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }, {
                            sprite: "map-bunker-crossing-chamber-floor-03.img",
                            pos: ve.create(28.5, 23.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 2
                        }, {
                            sprite: "map-bunker-crossing-chamber-floor-02.img",
                            pos: ve.create(-28.5, -17.5),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }, {
                            sprite: "map-bunker-crossing-chamber-floor-01.img",
                            pos: ve.create(11.45, -18),
                            scale: .5,
                            alpha: 1,
                            tint: 16777215,
                            rot: 0
                        }]
                    },
                    ceiling: {
                        scopeIn: [_e.createAabbExtents(ve.create(-3, 27.5), ve.create(35.1, 5)), _e.createAabbExtents(ve.create(3, -21.5), ve.create(35.1, 5)), _e.createAabbExtents(ve.create(-4, 20.5), ve.create(3, 3)), _e.createAabbExtents(ve.create(4, -14.5), ve.create(3, 3))],
                        scopeOut: [_e.createAabbExtents(ve.create(-3, -27.5), ve.create(35, 5)), _e.createAabbExtents(ve.create(3, -21.5), ve.create(35, 5)), _e.createAabbExtents(ve.create(-4, 20.5), ve.create(3, 3)), _e.createAabbExtents(ve.create(4, -14.5), ve.create(3, 3))],
                        imgs: [{
                            sprite: "map-bunker-crossing-chamber-ceiling-01.img",
                            pos: ve.create(-3.5, 24),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335
                        }, {
                            sprite: "map-bunker-crossing-chamber-ceiling-01.img",
                            pos: ve.create(3.5, -18),
                            scale: 1,
                            alpha: 1,
                            tint: 6250335,
                            rot: 2
                        }],
                        vision: {
                            dist: 7,
                            width: 3
                        }
                    },
                    mapObjects: [{
                        type: "concrete_wall_ext_6",
                        pos: ve.create(38.5, 28.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "house_door_02",
                        pos: ve.create(32, 30.5),
                        scale: 1,
                        ori: 2
                    }, {
                        type: "decal_pipes_05",
                        pos: ve.create(13, 28.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_48",
                        pos: ve.create(15, 32),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_35",
                        pos: ve.create(21.5, 25),
                        scale: 1,
                        ori: 1
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(2.5, 23.5),
                        scale: 1,
                        ori: 0
                    }, {
                        type: "metal_wall_ext_thicker_6",
                        pos: ve.create(-.5, 20.5),
                        scale: 1,
