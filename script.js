// Start Head Scripts

// Start Posts Settings And Programming Posts And Links And Content Inside The Posts And Display Post Images And Others
// Settings Of Posts Images And Posts Titles And Posts Summary
posts_no_thumb_sum = 200;
posts_thumb_sum = 120;
img_thumb_height = 195;
img_thumb_width = 290;

function removeHtmlTag(strx, chop) {
    if (strx.indexOf("<") != -1) {
        var s = strx.split("<");
        for (var i = 0; i < s.length; i++) {
            if (s[i].indexOf(">") != -1) {
                s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length);
            }
        }
        strx = s.join("");
    }
    chop = (chop < strx.length - 1) ? chop : strx.length - 2;
    while (strx.charAt(chop - 1) != ' ' && strx.indexOf(' ', chop) != -1) chop++;
    strx = strx.substring(0, chop - 1);
    return strx + '...';
}

function createSummaryAndThumb(pID, pURL, pTITLE) {
    var div = document.getElementById(pID);
    var imgtag = "";
    var img = div.getElementsByTagName("img");
    var summ = posts_no_thumb_sum;
    if (img.length >= 1) {
        imgtag = '<div class="posts-thumb"><a href="' + pURL + '" ' + pTITLE + '"><img src="' + img[0].src + '" width="' + img_thumb_width + 'px" height="' + img_thumb_height + 'px" /></a></div>';
        summ = posts_thumb_sum;
    }

    var summary = imgtag + '<div class="post-info"><div class="post-title"><a href="' + pURL + '">' + pTITLE + '</a></div></div><div class="post-summary">' + removeHtmlTag(div.innerHTML, summ) + '</div>';
    div.innerHTML = summary;
}
// Settings Of Posts Images And Posts Titles And Posts Summary



(function(e) {
    var t = function(t, n) {
        var i = e.extend({}, e.fn.nivoSlider.defaults, n),
            r = {
                currentSlide: 0,
                currentImage: "",
                totalSlides: 0,
                running: !1,
                paused: !1,
                stop: !1,
                controlNavEl: !1
            },
            o = e(t);
        o.data("nivo:vars", r).addClass("nivoSlider");
        var a = o.children();
        a.each(function() {
            var t = e(this),
                n = "";
            t.is("img") || (t.is("a") && (t.addClass("nivo-imageLink"), n = t), t = t.find("img:first"));
            var i = 0 === i ? t.attr("width") : t.width(),
                o = 0 === o ? t.attr("height") : t.height();
            "" !== n && n.css("display", "none"), t.css("display", "none"), r.totalSlides++
        }), i.randomStart && (i.startSlide = Math.floor(Math.random() * r.totalSlides)), i.startSlide > 0 && (i.startSlide >= r.totalSlides && (i.startSlide = r.totalSlides - 1), r.currentSlide = i.startSlide), r.currentImage = e(a[r.currentSlide]).is("img") ? e(a[r.currentSlide]) : e(a[r.currentSlide]).find("img:first"), e(a[r.currentSlide]).is("a") && e(a[r.currentSlide]).css("display", "block");
        var s = e("<img/>").addClass("nivo-main-image");
        s.attr("src", r.currentImage.attr("src")).show(), o.append(s), e(window).resize(function() {
            o.children("img").width(o.width()), s.attr("src", r.currentImage.attr("src")), s.stop().height("auto"), e(".nivo-slice").remove(), e(".nivo-box").remove()
        }), o.append(e('<div class="nivo-caption"></div>'));
        var l = function(t) {
            var n = e(".nivo-caption", o);
            if ("" != r.currentImage.attr("title") && void 0 != r.currentImage.attr("title")) {
                var i = r.currentImage.attr("title");
                "#" == i.substr(0, 1) && (i = e(i).html()), "block" == n.css("display") ? setTimeout(function() {
                    n.html(i)
                }, t.animSpeed) : (n.html(i), n.stop().fadeIn(t.animSpeed))
            } else n.stop().fadeOut(t.animSpeed)
        };
        l(i);
        var c = 0;
        if (!i.manualAdvance && a.length > 1 && (c = setInterval(function() {
                f(o, a, i, !1)
            }, i.pauseTime)), i.directionNav && (o.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + i.prevText + '</a><a class="nivo-nextNav">' + i.nextText + "</a></div>"), e(o).on("click", "a.nivo-prevNav", function() {
                return r.running ? !1 : (clearInterval(c), c = "", r.currentSlide -= 2, f(o, a, i, "prev"), void 0)
            }), e(o).on("click", "a.nivo-nextNav", function() {
                return r.running ? !1 : (clearInterval(c), c = "", f(o, a, i, "next"), void 0)
            })), i.controlNav) {
            r.controlNavEl = e('<div class="nivo-controlNav"></div>'), o.after(r.controlNavEl);
            for (var u = 0; a.length > u; u++)
                if (i.controlNavThumbs) {
                    r.controlNavEl.addClass("nivo-thumbs-enabled");
                    var d = a.eq(u);
                    d.is("img") || (d = d.find("img:first")), d.attr("data-thumb") && r.controlNavEl.append('<a class="nivo-control" rel="' + u + '"><img src="' + d.attr("data-thumb") + '" alt="" /></a>')
                } else r.controlNavEl.append('<a class="nivo-control" rel="' + u + '">' + (u + 1) + "</a>");
            e("a:eq(" + r.currentSlide + ")", r.controlNavEl).addClass("active"), e("a", r.controlNavEl).bind("click", function() {
                return r.running ? !1 : e(this).hasClass("active") ? !1 : (clearInterval(c), c = "", s.attr("src", r.currentImage.attr("src")), r.currentSlide = e(this).attr("rel") - 1, f(o, a, i, "control"), void 0)
            })
        }
        i.pauseOnHover && o.hover(function() {
            r.paused = !0, clearInterval(c), c = ""
        }, function() {
            r.paused = !1, "" !== c || i.manualAdvance || (c = setInterval(function() {
                f(o, a, i, !1)
            }, i.pauseTime))
        }), o.bind("nivo:animFinished", function() {
            s.attr("src", r.currentImage.attr("src")), r.running = !1, e(a).each(function() {
                e(this).is("a") && e(this).css("display", "none")
            }), e(a[r.currentSlide]).is("a") && e(a[r.currentSlide]).css("display", "block"), "" !== c || r.paused || i.manualAdvance || (c = setInterval(function() {
                f(o, a, i, !1)
            }, i.pauseTime)), i.afterChange.call(this)
        });
        var h = function(t, n, i) {
                e(i.currentImage).parent().is("a") && e(i.currentImage).parent().css("display", "block"), e('img[src="' + i.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
                for (var r = e('img[src="' + i.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? e('img[src="' + i.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : e('img[src="' + i.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height(), o = 0; n.slices > o; o++) {
                    var a = Math.round(t.width() / n.slices);
                    o === n.slices - 1 ? t.append(e('<div class="nivo-slice" name="' + o + '"><img src="' + i.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (a + o * a - a) + 'px;" /></div>').css({
                        left: a * o + "px",
                        width: t.width() - a * o + "px",
                        height: r + "px",
                        opacity: "0",
                        overflow: "hidden"
                    })) : t.append(e('<div class="nivo-slice" name="' + o + '"><img src="' + i.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (a + o * a - a) + 'px;" /></div>').css({
                        left: a * o + "px",
                        width: a + "px",
                        height: r + "px",
                        opacity: "0",
                        overflow: "hidden"
                    }))
                }
                e(".nivo-slice", t).height(r), s.stop().animate({
                    height: e(i.currentImage).height()
                }, n.animSpeed)
            },
            p = function(t, n, i) {
                e(i.currentImage).parent().is("a") && e(i.currentImage).parent().css("display", "block"), e('img[src="' + i.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
                for (var r = Math.round(t.width() / n.boxCols), o = Math.round(e('img[src="' + i.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / n.boxRows), a = 0; n.boxRows > a; a++)
                    for (var l = 0; n.boxCols > l; l++) l === n.boxCols - 1 ? (t.append(e('<div class="nivo-box" name="' + l + '" rel="' + a + '"><img src="' + i.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * a + "px; left:-" + r * l + 'px;" /></div>').css({
                        opacity: 0,
                        left: r * l + "px",
                        top: o * a + "px",
                        width: t.width() - r * l + "px"
                    })), e('.nivo-box[name="' + l + '"]', t).height(e('.nivo-box[name="' + l + '"] img', t).height() + "px")) : (t.append(e('<div class="nivo-box" name="' + l + '" rel="' + a + '"><img src="' + i.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * a + "px; left:-" + r * l + 'px;" /></div>').css({
                        opacity: 0,
                        left: r * l + "px",
                        top: o * a + "px",
                        width: r + "px"
                    })), e('.nivo-box[name="' + l + '"]', t).height(e('.nivo-box[name="' + l + '"] img', t).height() + "px"));
                s.stop().animate({
                    height: e(i.currentImage).height()
                }, n.animSpeed)
            },
            f = function(t, n, i, r) {
                var o = t.data("nivo:vars");
                if (o && o.currentSlide === o.totalSlides - 1 && i.lastSlide.call(this), (!o || o.stop) && !r) return !1;
                i.beforeChange.call(this), r ? ("prev" === r && s.attr("src", o.currentImage.attr("src")), "next" === r && s.attr("src", o.currentImage.attr("src"))) : s.attr("src", o.currentImage.attr("src")), o.currentSlide++, o.currentSlide === o.totalSlides && (o.currentSlide = 0, i.slideshowEnd.call(this)), 0 > o.currentSlide && (o.currentSlide = o.totalSlides - 1), o.currentImage = e(n[o.currentSlide]).is("img") ? e(n[o.currentSlide]) : e(n[o.currentSlide]).find("img:first"), i.controlNav && (e("a", o.controlNavEl).removeClass("active"), e("a:eq(" + o.currentSlide + ")", o.controlNavEl).addClass("active")), l(i), e(".nivo-slice", t).remove(), e(".nivo-box", t).remove();
                var a = i.effect,
                    c = "";
                "random" === i.effect && (c = ["sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse"], a = c[Math.floor(Math.random() * (c.length + 1))], void 0 === a && (a = "fade")), -1 !== i.effect.indexOf(",") && (c = i.effect.split(","), a = c[Math.floor(Math.random() * c.length)], void 0 === a && (a = "fade")), o.currentImage.attr("data-transition") && (a = o.currentImage.attr("data-transition")), o.running = !0;
                var u = 0,
                    d = 0,
                    f = "",
                    m = "",
                    v = "",
                    b = "";
                if ("sliceDown" === a || "sliceDownRight" === a || "sliceDownLeft" === a) h(t, i, o), u = 0, d = 0, f = e(".nivo-slice", t), "sliceDownLeft" === a && (f = e(".nivo-slice", t)._reverse()), f.each(function() {
                    var n = e(this);
                    n.css({
                        top: "0px"
                    }), d === i.slices - 1 ? setTimeout(function() {
                        n.animate({
                            opacity: "1.0"
                        }, i.animSpeed, "", function() {
                            t.trigger("nivo:animFinished")
                        })
                    }, 100 + u) : setTimeout(function() {
                        n.animate({
                            opacity: "1.0"
                        }, i.animSpeed)
                    }, 100 + u), u += 50, d++
                });
                else if ("sliceUp" === a || "sliceUpRight" === a || "sliceUpLeft" === a) h(t, i, o), u = 0, d = 0, f = e(".nivo-slice", t), "sliceUpLeft" === a && (f = e(".nivo-slice", t)._reverse()), f.each(function() {
                    var n = e(this);
                    n.css({
                        bottom: "0px"
                    }), d === i.slices - 1 ? setTimeout(function() {
                        n.animate({
                            opacity: "1.0"
                        }, i.animSpeed, "", function() {
                            t.trigger("nivo:animFinished")
                        })
                    }, 100 + u) : setTimeout(function() {
                        n.animate({
                            opacity: "1.0"
                        }, i.animSpeed)
                    }, 100 + u), u += 50, d++
                });
                else if ("sliceUpDown" === a || "sliceUpDownRight" === a || "sliceUpDownLeft" === a) {
                    h(t, i, o), u = 0, d = 0;
                    var y = 0;
                    f = e(".nivo-slice", t), "sliceUpDownLeft" === a && (f = e(".nivo-slice", t)._reverse()), f.each(function() {
                        var n = e(this);
                        0 === d ? (n.css("top", "0px"), d++) : (n.css("bottom", "0px"), d = 0), y === i.slices - 1 ? setTimeout(function() {
                            n.animate({
                                opacity: "1.0"
                            }, i.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + u) : setTimeout(function() {
                            n.animate({
                                opacity: "1.0"
                            }, i.animSpeed)
                        }, 100 + u), u += 50, y++
                    })
                } else if ("fold" === a) h(t, i, o), u = 0, d = 0, e(".nivo-slice", t).each(function() {
                    var n = e(this),
                        r = n.width();
                    n.css({
                        top: "0px",
                        width: "0px"
                    }), d === i.slices - 1 ? setTimeout(function() {
                        n.animate({
                            width: r,
                            opacity: "1.0"
                        }, i.animSpeed, "", function() {
                            t.trigger("nivo:animFinished")
                        })
                    }, 100 + u) : setTimeout(function() {
                        n.animate({
                            width: r,
                            opacity: "1.0"
                        }, i.animSpeed)
                    }, 100 + u), u += 50, d++
                });
                else if ("fade" === a) h(t, i, o), m = e(".nivo-slice:first", t), m.css({
                    width: t.width() + "px"
                }), m.animate({
                    opacity: "1.0"
                }, 2 * i.animSpeed, "", function() {
                    t.trigger("nivo:animFinished")
                });
                else if ("slideInRight" === a) h(t, i, o), m = e(".nivo-slice:first", t), m.css({
                    width: "0px",
                    opacity: "1"
                }), m.animate({
                    width: t.width() + "px"
                }, 2 * i.animSpeed, "", function() {
                    t.trigger("nivo:animFinished")
                });
                else if ("slideInLeft" === a) h(t, i, o), m = e(".nivo-slice:first", t), m.css({
                    width: "0px",
                    opacity: "1",
                    left: "",
                    right: "0px"
                }), m.animate({
                    width: t.width() + "px"
                }, 2 * i.animSpeed, "", function() {
                    m.css({
                        left: "0px",
                        right: ""
                    }), t.trigger("nivo:animFinished")
                });
                else if ("boxRandom" === a) p(t, i, o), v = i.boxCols * i.boxRows, d = 0, u = 0, b = g(e(".nivo-box", t)), b.each(function() {
                    var n = e(this);
                    d === v - 1 ? setTimeout(function() {
                        n.animate({
                            opacity: "1"
                        }, i.animSpeed, "", function() {
                            t.trigger("nivo:animFinished")
                        })
                    }, 100 + u) : setTimeout(function() {
                        n.animate({
                            opacity: "1"
                        }, i.animSpeed)
                    }, 100 + u), u += 20, d++
                });
                else if ("boxRain" === a || "boxRainReverse" === a || "boxRainGrow" === a || "boxRainGrowReverse" === a) {
                    p(t, i, o), v = i.boxCols * i.boxRows, d = 0, u = 0;
                    var x = 0,
                        w = 0,
                        k = [];
                    k[x] = [], b = e(".nivo-box", t), ("boxRainReverse" === a || "boxRainGrowReverse" === a) && (b = e(".nivo-box", t)._reverse()), b.each(function() {
                        k[x][w] = e(this), w++, w === i.boxCols && (x++, w = 0, k[x] = [])
                    });
                    for (var C = 0; 2 * i.boxCols > C; C++) {
                        for (var _ = C, T = 0; i.boxRows > T; T++) _ >= 0 && i.boxCols > _ && (function(n, r, o, s, l) {
                            var c = e(k[n][r]),
                                u = c.width(),
                                d = c.height();
                            ("boxRainGrow" === a || "boxRainGrowReverse" === a) && c.width(0).height(0), s === l - 1 ? setTimeout(function() {
                                c.animate({
                                    opacity: "1",
                                    width: u,
                                    height: d
                                }, i.animSpeed / 1.3, "", function() {
                                    t.trigger("nivo:animFinished")
                                })
                            }, 100 + o) : setTimeout(function() {
                                c.animate({
                                    opacity: "1",
                                    width: u,
                                    height: d
                                }, i.animSpeed / 1.3)
                            }, 100 + o)
                        }(T, _, u, d, v), d++), _--;
                        u += 100
                    }
                }
            },
            g = function(e) {
                for (var t, n, i = e.length; i; t = parseInt(Math.random() * i, 10), n = e[--i], e[i] = e[t], e[t] = n);
                return e
            },
            m = function(e) {
                this.console && console.log !== void 0 && console.log(e)
            };
        return this.stop = function() {
            e(t).data("nivo:vars").stop || (e(t).data("nivo:vars").stop = !0, m("Stop Slider"))
        }, this.start = function() {
            e(t).data("nivo:vars").stop && (e(t).data("nivo:vars").stop = !1, m("Start Slider"))
        }, i.afterLoad.call(this), this
    };
    e.fn.nivoSlider = function(n) {
        return this.each(function() {
            var i = e(this);
            if (i.data("nivoslider")) return i.data("nivoslider");
            var r = new t(this, n);
            i.data("nivoslider", r)
        })
    }, e.fn.nivoSlider.defaults = {
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3e3,
        startSlide: 0,
        directionNav: !0,
        controlNav: !0,
        controlNavThumbs: !1,
        pauseOnHover: !0,
        manualAdvance: !1,
        prevText: "Prev",
        nextText: "Next",
        randomStart: !1,
        beforeChange: function() {},
        afterChange: function() {},
        slideshowEnd: function() {},
        lastSlide: function() {},
        afterLoad: function() {}
    }, e.fn._reverse = [].reverse
})(jQuery);



$(function() {
    $(".recent-slider").each(function() {
        $(this).append("<div id=\"slider\"></div>");
        var a = $(this).attr("data-label"),
            f = $(this);
        $.ajax({
            type: "GET",
            url: "/feeds/posts/summary/-/" + a + "?max-results=" + 10 + "&alt=json-in-script",
            async: !0,
            contentType: "application/json",
            dataType: "jsonp",
            success: function(g) {
                for (var j = 0; j < g.feed.entry.length; j++) {
                    for (var k = g.feed.entry[j], m = 0; m < k.link.length; m++)
                        if ("alternate" == k.link[m].rel) {
                            var q = k.link[m].href;
                            break
                        } try {
                        var t = k.media$thumbnail.url.replace("s72-c", "h300-w1200-no")
                    } catch (y) {
                        var t = "https://lh3.googleusercontent.com/24RAodFW8xxgzHpVBAthJHsf_szjRoa3-KzlAEdFgB6X6A5Gmlm-nCvt5nRkE95T52PmHSE4Mf5wvNGoRUgIXjjHi4PjiucY3RimpoVdiTPKQN5Jdj2n9-9bW0wUSzQcirYstqGO8Unv5v7RMU5JD_Q-lEuBgtUfXEmHxOs6ENvJBanzORTRCVXwSzYNRJxijualu8mHhR5S6DG8l4CIo6uADoudrzXGsz7oszRXccZK_FbasxG5xJ9O0mtPuIVavRO8Or89er61NiJIctiUWV0YqtMMOqK214VSjs8-lAx_7LmkneNOrkP7NdXvGTK0fxHgRBiHL7Tm2weLM33LjyMEzY4ygL68Hx81iJK4D-YRmUa8NJhpEKs8q93jgjwJ3ZrgDSzn2pKI-y3c5VWrYf-H38_lWOIMf7uuTOzKUOqoQYZLN8bhFYVyB4bLUwfX0gDtTT38QsV6MILDBQZl6gHQrHt1C8Lpp9EZ0x-1Vl2r2HeKlXS60iuRKZdfSWZNbibE2y9GCfdbBzRUGa-G3GRkQstDu2UBtNOo6WHZ4GI=w600-h250-no"
                    }
                    var v = k.title.$t,
                        w = k.summary.$t.substr(0, 180);
                    f.find("#slider").append("<a href=\"" + q + "\"><img src=\"" + t + "\" title=\"<a href='" + q + "'><h3>" + v + "</h3></a><p>" + w + "</p>\"/></a>")
                }
                $("#slider").nivoSlider({
                    effect: "random",
                    pauseTime: 5e3
                })
            }
        })
    })
});
// End Posts Settings And Programming Posts And Links And Content Inside The Posts And Display Post Images And Others






// Google Analytics Stats Tracking
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5V67BV8PBK');
// Google Analytics Stats Tracking






// Ads In Posts From In Layout
$(function() {
    "use strict";
    $("#postAD-top")["append"]($("#HTML201"));
    $("#postAD-bottom")["append"]($("#HTML203"));
    var _0x8468x0 = Math["floor"]($(".post-body *")["length"] / 2);
    $(".post-body *:eq(" + _0x8468x0 + ")")["after"]($("#HTML202"));
});
// Ads In Posts From In Layout

// End Head Scripts
