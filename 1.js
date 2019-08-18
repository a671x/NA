    a48f3bb2: function(e, t, a) {
        "use strict";

        function i() {
            this.ticker = 0, this.container = new o.Sprite, this.container.anchor.set(.5, .5), this.container.scale.set(1, 1), this.sprite = new o.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.scale.set(.8, .8), this.container.addChild(this.sprite)
        }

        function r() {
            this._ = !1, this.At = new d.Pool(i), this.ia = null
        }
        var o = a("8b1dfb45"),
            n = a("989ad62a"),
            s = a("10899aea"),
            l = a("1901e2d9"),
            c = a("c2a798c8"),
            m = a("e3e76f15"),
            p = (a("af8ba00f"), a("ce29f17f")),
            d = a("753d6e4b");
        i.prototype = {
            o: function() {
                this.updatedData = !1
            },
            n: function() {
                this.container.visible = !1
            },
            l: function(e, t, a, i) {
                if (this.updatedData = !0, this.pos = c.copy(e.pos), t && (this.layer = e.layer, this.type = e.type, this.count = e.count, this.isOld = e.isOld), a) {
                    this.ticker = 0, this.isOld && (this.ticker = 10);
                    var r = m[this.type];
                    this.rad = n.lootRadius[r.type], this.imgScale = 1.25 * r.lootImg.scale;
                    var s = r.lootImg.innerScale || .8;
                    this.sprite.scale.set(s, s), this.sprite.texture = o.Texture.fromImage(r.lootImg.sprite), this.sprite.tint = r.lootImg.tint, this.container.texture = r.lootImg.border ? o.Texture.fromImage(r.lootImg.border) : o.Texture.EMPTY;
                    var l = m[r.ammo];
                    l ? this.container.tint = l.lootImg.tintDark : r.lootImg.borderTint ? this.container.tint = r.lootImg.borderTint : this.container.tint = 0, this.sprite.rotation = r.lootImg.rot ? r.lootImg.rot : 0, this.sprite.scale.x = r.lootImg.mirror ? -s : s, this.container.visible = !0
                }(a || t) && i.renderer.addPIXIObj(this.container, this.layer, 13, this.__id)
            }
        }, r.prototype = {
            c: function(e, t, a, i) {
                this._ = !0, this.ia = null;
                for (var r = Number.MAX_VALUE, o = this.At.m(), m = 0; m < o.length; m++) {
                    var d = o[m];
                    if (d.active) {
                        if (l.sameLayer(d.layer, t.layer)) {
                            var h = d.pos,
                                u = p.touch ? t.rad + d.rad * n.player.touchLootRadMult : d.rad,
                                g = c.sub(t.pos, h),
                                y = c.lengthSqr(g);
                            y < u * u && y < r && (r = y, this.ia = d)
                        }
                        d.ticker += e;
                        var w = s.delerp(d.ticker, 0, 1),
                            f = s.easeOutElastic(w, .75),
                            x = a.pointToScreen(d.pos),
                            b = a.pixels(d.imgScale * f);
                        d.container.position.set(x.x, x.y), d.container.scale.set(b, b)
                    }
                }
            },
            ra: function() {
                return this.ia
            }
        }, e.exports = {
            vt: r
        }
    }
