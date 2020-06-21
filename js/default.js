(function() {
    var a, c, d = function(a, e) {
        return function() {
            return a.apply(e, arguments)
        }
    };
    a = function() {
        function a() {}
        return a.prototype.extend = function(e, a) {
            var b, c;
            for (b in e)
                c = e[b],
                null != c && (a[b] = c);
            return a
        }
        ,
        a.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }
        ,
        a
    }();
    c = this.WeakMap || (c = function() {
        function a() {
            this.keys = [];
            this.values = []
        }
        return a.prototype.get = function(e) {
            var a, b, c, g, h;
            h = this.keys;
            a = c = 0;
            for (g = h.length; g > c; a = ++c)
                if (b = h[a],
                b === e)
                    return this.values[a]
        }
        ,
        a.prototype.set = function(e, a) {
            var b, c, g, h, k;
            k = this.keys;
            b = g = 0;
            for (h = k.length; h > g; b = ++g)
                if (c = k[b],
                c === e)
                    return void (this.values[b] = a);
            return this.keys.push(e),
            this.values.push(a)
        }
        ,
        a
    }());
    this.WOW = function() {
        function b(e) {
            null == e && (e = {});
            this.scrollCallback = d(this.scrollCallback, this);
            this.scrollHandler = d(this.scrollHandler, this);
            this.start = d(this.start, this);
            this.scrolled = !0;
            this.config = this.util().extend(e, this.defaults);
            this.animationNameCache = new c
        }
        return b.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0
        },
        b.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement,
            "interactive" === (e = document.readyState) || "complete" === e ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
        }
        ,
        b.prototype.start = function() {
            var e, a, b, c;
            if (this.boxes = this.element.getElementsByClassName(this.config.boxClass),
            this.boxes.length) {
                if (this.disabled())
                    return this.resetStyle();
                c = this.boxes;
                a = 0;
                for (b = c.length; b > a; a++)
                    e = c[a],
                    this.applyStyle(e, !0);
                return window.addEventListener("scroll", this.scrollHandler, !1),
                window.addEventListener("resize", this.scrollHandler, !1),
                this.interval = setInterval(this.scrollCallback, 50)
            }
        }
        ,
        b.prototype.stop = function() {
            return window.removeEventListener("scroll", this.scrollHandler, !1),
            window.removeEventListener("resize", this.scrollHandler, !1),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        b.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = "" + a.className + " " + this.config.animateClass
        }
        ,
        b.prototype.applyStyle = function(a, b) {
            var c, f, g;
            return f = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            g = a.getAttribute("data-wow-iteration"),
            this.animate(function(h) {
                return function() {
                    return h.customStyle(a, b, f, c, g)
                }
            }(this))
        }
        ,
        b.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        b.prototype.resetStyle = function() {
            var a, b, c, f, g;
            f = this.boxes;
            g = [];
            b = 0;
            for (c = f.length; c > b; b++)
                a = f[b],
                g.push(a.setAttribute("style", "visibility: visible;"));
            return g
        }
        ,
        b.prototype.customStyle = function(a, b, c, f, g) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            f && this.vendorSet(a.style, {
                animationDelay: f
            }),
            g && this.vendorSet(a.style, {
                animationIterationCount: g
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        b.prototype.vendors = ["moz", "webkit"],
        b.prototype.vendorSet = function(a, b) {
            var c, f, g, h;
            h = [];
            for (c in b)
                f = b[c],
                a["" + c] = f,
                h.push(function() {
                    var b, l, h, d;
                    h = this.vendors;
                    d = [];
                    b = 0;
                    for (l = h.length; l > b; b++)
                        g = h[b],
                        d.push(a["" + g + c.charAt(0).toUpperCase() + c.substr(1)] = f);
                    return d
                }
                .call(this));
            return h
        }
        ,
        b.prototype.vendorCSS = function(a, b) {
            var c, f, g, h, k, d;
            f = window.getComputedStyle(a);
            c = f.getPropertyCSSValue(b);
            d = this.vendors;
            h = 0;
            for (k = d.length; k > h; h++)
                g = d[h],
                c = c || f.getPropertyCSSValue("-" + g + "-" + b);
            return c
        }
        ,
        b.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = window.getComputedStyle(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        b.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        b.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        b.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        b.prototype.scrollCallback = function() {
            var a;
            if (a = this.scrolled) {
                this.scrolled = !1;
                var b, c, f, g;
                f = this.boxes;
                g = [];
                b = 0;
                for (c = f.length; c > b; b++)
                    (a = f[b]) && (this.isVisible(a) ? this.show(a) : g.push(a));
                a = (this.boxes = g,
                !this.boxes.length)
            }
            return a ? this.stop() : void 0
        }
        ,
        b.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        b.prototype.isVisible = function(a) {
            var b, c, f, g, d;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            d = window.pageYOffset,
            g = d + this.element.clientHeight - c,
            f = this.offsetTop(a),
            b = f + a.clientHeight,
            g >= f && b >= d
        }
        ,
        b.prototype.util = function() {
            return this._util || (this._util = new a)
        }
        ,
        b.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        b
    }()
}
).call(this);
(function(a, c) {
    "function" === typeof define && define.amd ? define("smoothScroll", c(a)) : "object" === typeof exports ? module.smoothScroll = c(a) : a.smoothScroll = c(a)
}
)(this, function(a) {
    var c = {}, d = !!document.querySelector && !!a.addEventListener, b, e = {
        speed: 500,
        easing: "easeInOutCubic",
        offset: 0,
        updateURL: !1,
        callbackBefore: function() {},
        callbackAfter: function() {}
    }, l = function(a, b, c) {
        if ("[object Object]" === Object.prototype.toString.call(a))
            for (var e in a)
                Object.prototype.hasOwnProperty.call(a, e) && b.call(c, a[e], e, a);
        else {
            e = 0;
            for (var f = a.length; e < f; e++)
                b.call(c, a[e], e, a)
        }
    }, n = function(a, b) {
        var c = {};
        l(a, function(b, e) {
            c[e] = a[e]
        });
        l(b, function(a, e) {
            c[e] = b[e]
        });
        return c
    }, f = function(a, b, c) {
        var e = 0;
        if (a.offsetParent) {
            do
                e += a.offsetTop,
                a = a.offsetParent;
            while (a)
        }
        e = e - b - c;
        return 0 <= e ? e : 0
    }, g = function(a) {
        var b = {};
        a && (a = a.split(";"),
        a.forEach(function(a) {
            a = a.replace(/^\s+|\s+$/g, "");
            "" !== a && (a = a.split(":"),
            b[a[0]] = a[1].replace(/^\s+|\s+$/g, ""))
        }));
        return b
    }, h = function(a, b) {
        history.pushState && (b || "true" === b) && history.pushState({
            pos: a.id
        }, "", a)
    };
    c.animateScroll = function(b, c, d, l) {
        var q = n(q || e, d || {});
        d = g(b ? b.getAttribute("data-options") : null);
        q = n(q, d);
        d = document.querySelector("[data-scroll-header]");
        d = null === d ? 0 : d.offsetHeight + d.offsetTop;
        var x = a.pageYOffset, t = f(document.querySelector(c), d, parseInt(q.offset, 10)), y, z = t - x, A = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight), u = 0, r, v;
        b && "a" === b.tagName.toLowerCase() && l && l.preventDefault();
        h(c, q.updateURL);
        0 === a.pageYOffset && a.scrollTo(0, 0);
        q.callbackBefore(b, c);
        y = setInterval(function() {
            u += 16;
            r = u / parseInt(q.speed, 10);
            r = 1 < r ? 1 : r;
            var e = q.easing, d = r, f;
            "easeInQuad" === e && (f = d * d);
            "easeOutQuad" === e && (f = d * (2 - d));
            "easeInOutQuad" === e && (f = .5 > d ? 2 * d * d : -1 + (4 - 2 * d) * d);
            "easeInCubic" === e && (f = d * d * d);
            "easeOutCubic" === e && (f = --d * d * d + 1);
            "easeInOutCubic" === e && (f = .5 > d ? 4 * d * d * d : (d - 1) * (2 * d - 2) * (2 * d - 2) + 1);
            "easeInQuart" === e && (f = d * d * d * d);
            "easeOutQuart" === e && (f = 1 - --d * d * d * d);
            "easeInOutQuart" === e && (f = .5 > d ? 8 * d * d * d * d : 1 - 8 * --d * d * d * d);
            "easeInQuint" === e && (f = d * d * d * d * d);
            "easeOutQuint" === e && (f = 1 + --d * d * d * d * d);
            "easeInOutQuint" === e && (f = .5 > d ? 16 * d * d * d * d * d : 1 + 16 * --d * d * d * d * d);
            v = x + z * (f || d);
            a.scrollTo(0, Math.floor(v));
            e = a.pageYOffset;
            if (v == t || e == t || a.innerHeight + e >= A)
                clearInterval(y),
                q.callbackAfter(b, c)
        }, 16)
    }
    ;
    c.init = function(a) {
        d && (b = n(e, a || {}),
        a = document.querySelectorAll("[data-scroll]"),
        l(a, function(a) {
            a.addEventListener("click", c.animateScroll.bind(null, a, a.hash, b), !1)
        }))
    }
    ;
    return c
});
function ssc_init() {
    if (document.body) {
        var a = document.body
          , c = document.documentElement
          , d = window.innerHeight
          , b = a.scrollHeight;
        ssc_root = 0 <= document.compatMode.indexOf("CSS") ? c : a;
        ssc_activeElement = a;
        ssc_initdone = !0;
        top != self ? ssc_frame = !0 : b > d && (a.offsetHeight <= d || c.offsetHeight <= d) && (ssc_root.style.height = "auto",
        ssc_root.offsetHeight <= d && (d = document.createElement("div"),
        d.style.clear = "both",
        a.appendChild(d)));
        ssc_fixedback || (a.style.backgroundAttachment = "scroll",
        c.style.backgroundAttachment = "scroll");
        ssc_keyboardsupport && ssc_addEvent("keydown", ssc_keydown)
    }
}
function ssc_scrollArray(a, c, d, b) {
    b || (b = 1E3);
    ssc_directionCheck(c, d);
    ssc_que.push({
        x: c,
        y: d,
        lastX: 0 > c ? .99 : -.99,
        lastY: 0 > d ? .99 : -.99,
        start: +new Date
    });
    if (!ssc_pending) {
        var e = function() {
            for (var l = +new Date, n = 0, f = 0, g = 0; g < ssc_que.length; g++) {
                var h = ssc_que[g]
                  , k = l - h.start
                  , m = k >= ssc_animtime
                  , p = m ? 1 : k / ssc_animtime;
                ssc_pulseAlgorithm && (p = ssc_pulse(p));
                k = h.x * p - h.lastX >> 0;
                p = h.y * p - h.lastY >> 0;
                n += k;
                f += p;
                h.lastX += k;
                h.lastY += p;
                m && (ssc_que.splice(g, 1),
                g--)
            }
            c && (l = a.scrollLeft,
            a.scrollLeft += n,
            n && a.scrollLeft === l && (c = 0));
            d && (n = a.scrollTop,
            a.scrollTop += f,
            f && a.scrollTop === n && (d = 0));
            c || d || (ssc_que = []);
            ssc_que.length ? setTimeout(e, b / ssc_framerate + 1) : ssc_pending = !1
        };
        setTimeout(e, 0);
        ssc_pending = !0
    }
}
function ssc_wheel(a) {
    ssc_initdone || ssc_init();
    var c = a.target
      , d = ssc_overflowingAncestor(c);
    if (!d || a.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(c, "embed") && /\.pdf/i.test(c.src))
        return !0;
    var c = a.wheelDeltaX || 0
      , b = a.wheelDeltaY || 0;
    c || b || (b = a.wheelDelta || 0);
    1.2 < Math.abs(c) && (c *= ssc_stepsize / 120);
    1.2 < Math.abs(b) && (b *= ssc_stepsize / 120);
    ssc_scrollArray(d, -c, -b);
//    a.preventDefault()
}
function ssc_keydown(a) {
    var c = a.target
      , d = a.ctrlKey || a.altKey || a.metaKey;
    if (/input|textarea|embed/i.test(c.nodeName) || c.isContentEditable || a.defaultPrevented || d || ssc_isNodeName(c, "button") && a.keyCode === ssc_key.spacebar)
        return !0;
    var b;
    b = c = 0;
    var d = ssc_overflowingAncestor(ssc_activeElement)
      , e = d.clientHeight;
    d == document.body && (e = window.innerHeight);
    switch (a.keyCode) {
    case ssc_key.up:
        b = -ssc_arrowscroll;
        break;
    case ssc_key.down:
        b = ssc_arrowscroll;
        break;
    case ssc_key.spacebar:
        b = a.shiftKey ? 1 : -1;
        b = -b * e * .9;
        break;
    case ssc_key.pageup:
        b = .9 * -e;
        break;
    case ssc_key.pagedown:
        b = .9 * e;
        break;
    case ssc_key.home:
        b = -d.scrollTop;
        break;
    case ssc_key.end:
        e = d.scrollHeight - d.scrollTop - e;
        b = 0 < e ? e + 10 : 0;
        break;
    case ssc_key.left:
        c = -ssc_arrowscroll;
        break;
    case ssc_key.right:
        c = ssc_arrowscroll;
        break;
    default:
        return !0
    }
    ssc_scrollArray(d, c, b);
    a.preventDefault()
}
function ssc_mousedown(a) {
    ssc_activeElement = a.target
}
function ssc_setCache(a, c) {
    for (var d = a.length; d--; )
        ssc_cache[ssc_uniqueID(a[d])] = c;
    return c
}
function ssc_overflowingAncestor(a) {
    var c = []
      , d = ssc_root.scrollHeight;
    do {
        var b = ssc_cache[ssc_uniqueID(a)];
        if (b)
            return ssc_setCache(c, b);
        c.push(a);
        if (d === a.scrollHeight) {
            if (!ssc_frame || ssc_root.clientHeight + 10 < d)
                return ssc_setCache(c, document.body)
        } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow"),
        "scroll" === overflow || "auto" === overflow))
            return ssc_setCache(c, a)
    } while (a = a.parentNode)
}
function ssc_addEvent(a, c, d) {
    window.addEventListener(a, c, d || !1)
}
function ssc_removeEvent(a, c, d) {
    window.removeEventListener(a, c, d || !1)
}
function ssc_isNodeName(a, c) {
    return a.nodeName.toLowerCase() === c.toLowerCase()
}
function ssc_directionCheck(a, c) {
    a = 0 < a ? 1 : -1;
    c = 0 < c ? 1 : -1;
    if (ssc_direction.x !== a || ssc_direction.y !== c)
        ssc_direction.x = a,
        ssc_direction.y = c,
        ssc_que = []
}
function ssc_pulse_(a) {
    var c;
    a *= ssc_pulseScale;
    1 > a ? c = a - (1 - Math.exp(-a)) : (c = Math.exp(-1),
    --a,
    a = 1 - Math.exp(-a),
    c += a * (1 - c));
    return c * ssc_pulseNormalize
}
function ssc_pulse(a) {
    if (1 <= a)
        return 1;
    if (0 >= a)
        return 0;
    1 == ssc_pulseNormalize && (ssc_pulseNormalize /= ssc_pulse_(1));
    return ssc_pulse_(a)
}
var ssc_framerate = 150, ssc_animtime = 500, ssc_stepsize = 150, ssc_pulseAlgorithm = !0, ssc_pulseScale = 6, ssc_pulseNormalize = 1, ssc_keyboardsupport = !0, ssc_arrowscroll = 50, ssc_frame = !1, ssc_direction = {
    x: 0,
    y: 0
}, ssc_initdone = !1, ssc_fixedback = !0, ssc_root = document.documentElement, ssc_activeElement, ssc_key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
}, ssc_que = [], ssc_pending = !1, ssc_cache = {};
setInterval(function() {
    ssc_cache = {}
}, 1E4);
var ssc_uniqueID = function() {
    var a = 0;
    return function(c) {
        return c.ssc_uniqueID || (c.ssc_uniqueID = a++)
    }
}()
  , ischrome = /chrome/.test(navigator.userAgent.toLowerCase());
ischrome && (ssc_addEvent("mousedown", ssc_mousedown),
ssc_addEvent("mousewheel", ssc_wheel),
ssc_addEvent("load", ssc_init));
(function() {
    var a = jQuery
      , c = function() {
        function a() {
            this.fadeDuration = 500;
            this.fitImagesInViewport = !0;
            this.resizeDuration = 700;
            this.positionFromTop = 50;
            this.showImageNumberLabel = !0;
            this.wrapAround = this.alwaysShowNavOnTouchDevices = !1
        }
        return a.prototype.albumLabel = function(a, b) {
            return "Image " + a + " of " + b
        }
        ,
        a
    }()
      , d = function() {
        function b(a) {
            this.options = a;
            this.album = [];
            this.currentImageIndex = void 0;
            this.init()
        }
        return b.prototype.init = function() {
            this.enable();
            this.build()
        }
        ,
        b.prototype.enable = function() {
            var b = this;
            a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) {
                return b.start(a(c.currentTarget)),
                !1
            })
        }
        ,
        b.prototype.build = function() {
            var b = this;
            a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body"));
            this.$lightbox = a("#lightbox");
            this.$overlay = a("#lightboxOverlay");
            this.$outerContainer = this.$lightbox.find(".lb-outerContainer");
            this.$container = this.$lightbox.find(".lb-container");
            this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10);
            this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10);
            this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10);
            this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10);
            this.$overlay.hide().on("click", function() {
                return b.end(),
                !1
            });
            this.$lightbox.hide().on("click", function(c) {
                return "lightbox" === a(c.target).attr("id") && b.end(),
                !1
            });
            this.$outerContainer.on("click", function(c) {
                return "lightbox" === a(c.target).attr("id") && b.end(),
                !1
            });
            this.$lightbox.find(".lb-prev").on("click", function() {
                return b.changeImage(0 === b.currentImageIndex ? b.album.length - 1 : b.currentImageIndex - 1),
                !1
            });
            this.$lightbox.find(".lb-next").on("click", function() {
                return b.changeImage(b.currentImageIndex === b.album.length - 1 ? 0 : b.currentImageIndex + 1),
                !1
            });
            this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
                return b.end(),
                !1
            })
        }
        ,
        b.prototype.start = function(b) {
            function c(a) {
                d.album.push({
                    link: a.attr("href"),
                    title: a.attr("data-title") || a.attr("title")
                })
            }
            var d = this
              , f = a(window);
            f.on("resize", a.proxy(this.sizeOverlay, this));
            a("select, object, embed").css({
                visibility: "hidden"
            });
            this.sizeOverlay();
            this.album = [];
            var g, h = 0;
            if (g = b.attr("data-lightbox")) {
                g = a(b.prop("tagName") + '[data-lightbox="' + g + '"]');
                for (var k = 0; k < g.length; k = ++k)
                    c(a(g[k])),
                    g[k] === b[0] && (h = k)
            } else if ("lightbox" === b.attr("rel"))
                c(b);
            else
                for (g = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]'),
                k = 0; k < g.length; k = ++k)
                    c(a(g[k])),
                    g[k] === b[0] && (h = k);
            b = f.scrollTop() + this.options.positionFromTop;
            f = f.scrollLeft();
            this.$lightbox.css({
                top: b + "px",
                left: f + "px"
            }).fadeIn(this.options.fadeDuration);
            this.changeImage(h)
        }
        ,
        b.prototype.changeImage = function(b) {
            var c = this;
            this.disableKeyboardNav();
            var d = this.$lightbox.find(".lb-image");
            this.$overlay.fadeIn(this.options.fadeDuration);
            a(".lb-loader").fadeIn("slow");
            this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide();
            this.$outerContainer.addClass("animating");
            var f = new Image;
            f.onload = function() {
                var g, h, k, m, p, w;
                d.attr("src", c.album[b].link);
                a(f);
                d.width(f.width);
                d.height(f.height);
                c.options.fitImagesInViewport && (w = a(window).width(),
                p = a(window).height(),
                m = w - c.containerLeftPadding - c.containerRightPadding - 20,
                k = p - c.containerTopPadding - c.containerBottomPadding - 120,
                (f.width > m || f.height > k) && (f.width / m > f.height / k ? (h = m,
                g = parseInt(f.height / (f.width / h), 10),
                d.width(h),
                d.height(g)) : (g = k,
                h = parseInt(f.width / (f.height / g), 10),
                d.width(h),
                d.height(g))));
                c.sizeContainer(d.width(), d.height())
            }
            ;
            f.src = this.album[b].link;
            this.currentImageIndex = b
        }
        ,
        b.prototype.sizeOverlay = function() {
            this.$overlay.width(a(window).width()).height(a(document).height())
        }
        ,
        b.prototype.sizeContainer = function(a, b) {
            function c() {
                d.$lightbox.find(".lb-dataContainer").width(k);
                d.$lightbox.find(".lb-prevLink").height(m);
                d.$lightbox.find(".lb-nextLink").height(m);
                d.showImage()
            }
            var d = this
              , g = this.$outerContainer.outerWidth()
              , h = this.$outerContainer.outerHeight()
              , k = a + this.containerLeftPadding + this.containerRightPadding
              , m = b + this.containerTopPadding + this.containerBottomPadding;
            g !== k || h !== m ? this.$outerContainer.animate({
                width: k,
                height: m
            }, this.options.resizeDuration, "swing", function() {
                c()
            }) : c()
        }
        ,
        b.prototype.showImage = function() {
            this.$lightbox.find(".lb-loader").hide();
            this.$lightbox.find(".lb-image").fadeIn("slow");
            this.updateNav();
            this.updateDetails();
            this.preloadNeighboringImages();
            this.enableKeyboardNav()
        }
        ,
        b.prototype.updateNav = function() {
            var a = !1;
            try {
                document.createEvent("TouchEvent"),
                a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1
            } catch (b) {}
            this.$lightbox.find(".lb-nav").show();
            1 < this.album.length && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"),
            this.$lightbox.find(".lb-prev, .lb-next").show()) : (0 < this.currentImageIndex && (this.$lightbox.find(".lb-prev").show(),
            a && this.$lightbox.find(".lb-prev").css("opacity", "1")),
            this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(),
            a && this.$lightbox.find(".lb-next").css("opacity", "1"))))
        }
        ,
        b.prototype.updateDetails = function() {
            var b = this;
            "undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function() {
                location.href = a(this).attr("href")
            });
            1 < this.album.length && this.options.showImageNumberLabel ? this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn("fast") : this.$lightbox.find(".lb-number").hide();
            this.$outerContainer.removeClass("animating");
            this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
                return b.sizeOverlay()
            })
        }
        ,
        b.prototype.preloadNeighboringImages = function() {
            this.album.length > this.currentImageIndex + 1 && ((new Image).src = this.album[this.currentImageIndex + 1].link);
            0 < this.currentImageIndex && ((new Image).src = this.album[this.currentImageIndex - 1].link)
        }
        ,
        b.prototype.enableKeyboardNav = function() {
            a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this))
        }
        ,
        b.prototype.disableKeyboardNav = function() {
            a(document).off(".keyboard")
        }
        ,
        b.prototype.keyboardAction = function(a) {
            a = a.keyCode;
            var b = String.fromCharCode(a).toLowerCase();
            27 === a || b.match(/x|o|c/) ? this.end() : "p" === b || 37 === a ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && 1 < this.album.length && this.changeImage(this.album.length - 1) : ("n" === b || 39 === a) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && 1 < this.album.length && this.changeImage(0))
        }
        ,
        b.prototype.end = function() {
            this.disableKeyboardNav();
            a(window).off("resize", this.sizeOverlay);
            this.$lightbox.fadeOut(this.options.fadeDuration);
            this.$overlay.fadeOut(this.options.fadeDuration);
            a("select, object, embed").css({
                visibility: "visible"
            })
        }
        ,
        b
    }();
    a(function() {
        var a = new c;
        new d(a)
    })
}
).call(this);

