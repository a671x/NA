    "484b3444": function(e, t, a) {
        "use strict";

        function i(e, t, a, i) {
            var r = l("<div/>", {
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
                    l(this).fadeOut(250, function() {
                        l(this).remove()
                    })
                }
            })
        }

        function r(e, t) {
            var a = l("#start-menu");
            l("#btn-help").click(function() {
                var e = l("#start-help");
                a.addClass("display-help");
                var t = (e.position().top, a.css("height"));
                return e.css("display", "block"), a.animate({
                    scrollTop: t
                }, 1e3), p.storeGeneric("info", "help"), !1
            });
            var r = l("#team-mobile-link"),
                o = l("#team-mobile-link-desc"),
                n = l("#team-mobile-link-warning"),
                s = l("#team-link-input"),
                h = l("#social-share-block"),
                u = l("#news-block");
            l("#btn-join-team").click(function() {
                return l("#server-warning").css("display", "none"), s.val(""), r.css("display", "block"), o.css("display", "block"), n.css("display", "none"), a.css("display", "none"), u.css("display", "none"), h.css("display", "none"), !1
            }), l("#btn-team-mobile-link-leave").click(function() {
                return r.css("display", "none"), s.val(""), a.css("display", "block"), u.css("display", "block"), h.css("display", "block"), !1
            }), l("#team-link-input").on("keypress", function(e) {
                13 === (e.which || e.keyCode) && (l("#btn-team-mobile-link-join").trigger("click"), l(this).blur())
            }), l("#player-name-input-solo").on("keypress", function(e) {
                13 === (e.which || e.keyCode) && l(this).blur()
            }), c.mobile && "ios" != c.os && (l("#player-name-input-solo").on("focus", function() {
                if (c.isLandscape) {
                    var e = c.screenHeight,
                        t = e <= 282 ? 18 : 36;
                    document.body.scrollTop = l(this).offset().top - t
                }
            }), l("#player-name-input-solo").on("blur", function() {
                document.body.scrollTop = 0
            }));
            var g = l("#start-bottom-right"),
                y = l("#start-top-left"),
                w = l("#start-top-right"),
                x = new d(l("#ui-modal-keybind"));
            x.onShow(function() {
                g.fadeOut(200), w.fadeOut(200), l("#ui-modal-keybind-share").css("display", "none"), l("#keybind-warning").css("display", "none"), l("#ui-modal-keybind-list").css("height", "420px"), l("#keybind-code-input").html(""), t.refresh()
            }), x.onHide(function() {
                g.fadeIn(200), w.fadeIn(200), t.cancelBind()
            }), l(".btn-keybind").click(function() {
                return x.show(), !1
            }), l(".js-btn-keybind-share").click(function() {
                "block" == l("#ui-modal-keybind-share").css("display") ? (l("#ui-modal-keybind-share").css("display", "none"), l("#ui-modal-keybind-list").css("height", "420px")) : (l("#ui-modal-keybind-share").css("display", "block"), l("#ui-modal-keybind-list").css("height", "275px"))
            }), l("#keybind-link, #keybind-copy").click(function(e) {
                i("Copied!", x.selector, l("#keybind-link"), e);
                var t = l("#keybind-link").html();
                m.copyTextToClipboard(t)
            }), l("#btn-keybind-code-load").on("click", function(a) {
                var r = l("#keybind-code-input").val();
                l("#keybind-code-input").val("");
                var o = e.fromBase64(r);
                l("#keybind-warning").css("display", o ? "none" : "block"), o && (i("Loaded!", x.selector, l("#btn-keybind-code-load"), a), e.saveBinds()), t.refresh()
            });
            var f = new d(l("#modal-settings"));
            f.onShow(function() {
                g.fadeOut(200), w.fadeOut(200)
            }), f.onHide(function() {
                g.fadeIn(200), w.fadeIn(200)
            }), l(".btn-settings").click(function() {
                return f.show(), !1
            }), l(".modal-settings-text").click(function(e) {
                var t = l(this).siblings("input:checkbox");
                t.prop("checked", !t.is(":checked")), t.trigger("change")
            });
            var b = new d(l("#modal-hamburger"));
            b.onShow(function() {
                y.fadeOut(200)
            }), b.onHide(function() {
                y.fadeIn(200)
            }), l("#btn-hamburger").click(function() {
                return b.show(), !1
            });
            var _ = new d(l("#modal-mobile-account"));
            _.onShow(function() {
                w.fadeOut(200)
            }), _.onHide(function() {
                w.fadeIn(200)
            }), l(".account-details-guest, .account-details-user").click(function() {
                if (c.mobile) return _.show(), !1
            }), l("#force-refresh").click(function() {
                window.location.href = "/?t=" + Date.now()
            });
            var S = new d(l("#modal-notification")),
                v = function() {
                    return "WebSocket" in window ? m.Y() ? "ie" == c.browser ? 'Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!<br><br>¡Usa el <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">navegador Chrome</a> para una mejor experiencia de juego!<br><br><a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">구글 크롬</a> 브라우저로이 게임을 즐겨보세요.' : void 0 : 'Please use the <a href="https://surviv.io" target="_blank">official surviv.io site</a> for a better playing experience!' : 'WebSockets are required to play.<br><br>Please use the <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Chrome browser</a> for a better playing experience!'
                }();
            if (v && (S.selector.find(".modal-settings-text").html(v), S.show()), m.K(), /Android.*; wv\)/.test(navigator.userAgent) && !c.webview) {
                var k = function(e) {
                        return e.map(function(e) {
                            return String.fromCharCode(e)
                        }).join("")
                    },
                    z = document.body;
                if (z) {
                    for (p.storeGeneric("error", "wv"), p.enabled = !1; z.firstChild;) z.removeChild(z.firstChild);
                    var M = [68, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 111, 102, 102, 105, 99, 105, 97, 108, 32, 65, 110, 100, 114, 111, 105, 100, 32, 97, 112, 112, 32, 104, 101, 114, 101, 58],
                        T = l("<div/>", {
                            css: {
                                marginTop: "10%",
                                width: "100%",
                                textAlign: "center"
                            }
                        }),
                        I = l("<div/>", {
                            text: k(M),
                            css: {
                                textAlign: "center",
                                fontSize: "24px"
                            }
                        }),
                        P = [104, 116, 116, 112, 115, 58, 47, 47, 112, 108, 97, 121, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 115, 116, 111, 114, 101, 47, 97, 112, 112, 115, 47, 100, 101, 116, 97, 105, 108, 115, 63, 105, 100, 61, 105, 111, 46, 115, 117, 114, 118, 105, 118, 46, 115, 117, 114, 118, 105, 118, 95, 105, 111, 95, 109, 111, 98, 105, 108, 101],
                        C = l("<a/>", {
                            href: k(P),
                            class: "btn-download-android btn-download-app btn-darken",
                            css: {
                                marginTop: "20px",
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)"
                            }
                        });
                    T.append(I), T.append(C), z.appendChild(T[0])
                }
            }
            window.aiptag && (window.aiptag.gdprConsent = window.cookiesConsented, window.aiptag.consented = window.cookiesConsented)
        }

        function o() {
            "ios" == c.os && ("iphonex" == c.model ? c.isLandscape ? l(".main-volume-slider").css("width", "90%") : l(".main-volume-slider").css("width", "") : window.navigator.standalone || (c.isLandscape ? (l("#start-main-center").attr("style", ""), l("#modal-customize .modal-content").attr("style", "")) : l("#modal-customize .modal-content").css({
                transform: "translate(-50%, -50%) scale(0.45)",
                top: "38%"
            }))), c.tablet && (l("#featured-youtuber").remove(), l(".btn-youtube").remove()), c.touch ? l(".btn-start-fullscreen").css("display", "none") : l(".btn-start-fullscreen").css("display", "block"), l(".btn-keybind").css("display", c.mobile ? "none" : "inline-block")
        }

        function n(e) {
            var t = l("#modal-hamburger-bottom");
            t.children().slice(-3).remove(), t.children().last().removeClass("footer-after"), l("#invite-link-text").attr("data-l10n", "index-invite-code"), l("#team-code-text").css("display", "none"), l("#invite-code-text").css("display", "none"), l("#team-hide-url").css("display", "none"), l(".btn-download-ios").css("display", "none"), l(".btn-download-android").css("display", "none"), l("#mobile-download-app").css("display", "none"), l("#start-bottom-middle").css("display", "none"), e || (l("#btn-help").css("display", "none"), l("#news-block, #start-menu").css({
                height: 186
            }), l("#team-menu").css({
                height: 186,
                padding: 10
            }))
        }

        function s(e) {
            l("#team-hide-url").css("display", "none"), e ? l("#start-bottom-middle").addClass("start-bottom-middle-tablet") : l("#news-block").css({
                height: 165
            }), "android" == c.os ? (l(".btn-download-android").css("display", "block"), l(".btn-download-ios").css("display", "none")) : "ios" == c.os && (l(".btn-download-ios").css("display", "block"), l(".btn-download-android").css("display", "none")), l("#mobile-download-app").css("display", "block")
        }
        var l = a("8ee62bea"),
            c = a("ce29f17f"),
            m = a("26be8056"),
            p = a("f398b7c7"),
            d = a("fa71fb59");
        e.exports = {
            init: r,
            onResize: o,
            applyWebviewStyling: n,
            applyMobileBrowserStyling: s
        }
    },
