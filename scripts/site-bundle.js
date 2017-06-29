! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = { exports: {}, id: o, loaded: !1 };
        return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0) }([function(e, t, n) { n(1), n(3), n(112), e.exports = n(114) }, function(e, t, n) {
    var o = n(2);
    Y.use("node", function(e) { window.Singleton.create({ ready: function() {
                if (e.one(".collection-type-index")) {
                    if (window.innerWidth <= 640) return !1;
                    this.initializer(), this.bindUI(), this.syncUI() } }, initializer: function() {
                return this.el = e.one(".show-on-scroll"), this.el ? (this.elOffset = e.one(this.el.getData("offset-el")), this.offsetBehavior = this.el.getData("offset-behavior") || "top", this.elOffset ? (e.one("body").prepend(e.Node.create('<div class="show-on-scroll-wrapper" id="showOnScrollWrapper"></div>')), this.wrapper = e.one("#showOnScrollWrapper"), this.wrapper.setHTML(this.el._node.outerHTML), void 0) : void console.warn("No show on scroll offset element found.")) : void console.warn("No show on scroll element found.") }, bindUI: function() { this.scrollEvents(), e.one(window).on("resize", function() { this.syncUI() }, this) }, syncUI: function() { this.getVariables() }, getVariables: function() { "bottom" === this.offsetBehavior ? this.navShowPosition = this.elOffset.getY() + this.elOffset.get("offsetHeight") : this.navShowPosition = this.elOffset.getY() }, scrollEvents: function() { this.scrolling = !1, e.one(window).on("scroll", function() { this.scrolling === !1 && (this.scrolling = !0, this.scrollLogic(), o(function() { this.scrolling = !1 }, 300, this)) }, this) }, scrollLogic: function() { window.pageYOffset > this.navShowPosition ? this.wrapper.addClass("show") : this.wrapper.removeClass("show"), e.later(100, this, function() { this.scrolling === !0 && window.requestAnimationFrame(e.bind(function() { this.scrollLogic() }, this)) }) } }) }) }, function(e, t) {
    function n(e, t, n) { t = t || 100, n = n || window, e && (o && o.cancel(), o = Y.later(t, n, e)) }
    var o;
    e.exports = n }, function(e, t, n) {
    var o = n(2),
        r = n(4).VideoBackground,
        i = n(4).getVideoProps;
    Y.use(["node", "squarespace-gallery-ng"], function(e) { window.Singleton.create({ ready: function() { this.resetGalleryPosition(), e.one(".collection-type-index") && this.resetIndexGalleryPosition(), e.one(".collection-type-blog.view-list .sqs-featured-posts-gallery") && e.one("body").addClass("has-banner-image"), this.init(), this.bindUI(), this.syncUI() }, init: function() {
                if (this.forceMobileNav(), this.promotedGalleryShrink(), e.one(".has-promoted-gallery") ? (this.textShrink(".meta-description p > strong", "p"), this.textShrink(".meta-description p > em > strong", "p")) : (this.textShrink(".desc-wrapper p > strong", "p"), this.textShrink(".desc-wrapper p > em > strong", "p")), this.textShrink(".post-title a", ".post-title"), this.textShrink(".blog-item-wrapper .post-title", ".title-desc-wrapper"), this._touch = e.one(".touch-styles"), e.one(".collection-type-blog.view-list .sqs-featured-posts-gallery") && this.makeFeaturedGallery(".posts", ".post"), this.hideArrowsWhenOneSlide(), this.repositionCartButton(), !this._touch) {
                    var t = e.one("#preFooter");
                    t.inViewportRegion() === !1 && t.addClass("unscrolled"), e.one(window).on("scroll", function() { t.hasClass("unscrolled") && t.toggleClass("unscrolled", !t.inViewportRegion()) }) }
                var n = Array.prototype.slice.call(document.body.querySelectorAll("div.sqs-video-background"));
                n.map(function(e) { new r(i(e)) }) }, bindUI: function() { e.one(window).on("resize", this.syncUI, this), e.all(".mobile-nav-toggle, .body-overlay").each(function(t) { t.on("click", function() { e.one("body").toggleClass("mobile-nav-open") }) });
                var t = e.throttle(e.bind(function() { this.bindScroll("#preFooter", .6 * e.one("#preFooter").height()) }, this), 200);
                this._touch || e.one(window).on("scroll", t), e.all(".subnav").each(function(t) {
                    var n = t._node.getBoundingClientRect();
                    n.right > e.config.win.innerWidth && t.addClass("right") });
                var n = '#sidecarNav a[href^="#"], #sidecarNav a[href^="/#"], #sidecarNav a[href^="/"][href*="#"]';
                e.all(n).each(function(t) { t.on("click", function(t) { e.one("body").removeClass("mobile-nav-open") }, this) }, this), this.showIndexNavOnScroll(), this.disableHoverOnScroll() }, syncUI: function() { this.forceMobileNav(), o(function() { this.addPaddingToFooter() }, 100, this) }, bindScroll: function(t, n) {
                var o;
                if (o || (o = e.one(t + ".unscrolled")), o) {
                    var r = window.pageYOffset + e.one("body").get("winHeight"),
                        i = o.getY() + (n || 0);
                    r >= i && o.removeClass("unscrolled") } }, _atLeast: 0, forceMobileNav: function() {
                var t = e.one("#mainNavWrapper");
                if (t) {
                    var n, o, r, i = e.one("body").get("winWidth"),
                        a = e.one("#header");
                    r = e.one("#logoWrapper") ? parseInt(e.Squarespace.Template.getTweakValue("logoContainerWidth"), 10) : parseInt(e.Squarespace.Template.getTweakValue("siteTitleContainerWidth"), 10), i > this._atLeast ? (e.one("body").removeClass("force-mobile-nav"), n = a.get("offsetWidth") - parseInt(a.getStyle("paddingLeft"), 10) - parseInt(a.getStyle("paddingRight"), 10), o = t.get("offsetWidth"), o > n - r && (e.one("body").addClass(""), this._atLeast = i)) : e.one("body").addClass("") } }, makeFeaturedGallery: function(t, n) { new e.Squarespace.Gallery2({ autoHeight: !1, container: t, slides: n, elements: { next: ".next-slide, .simple .next, .sqs-gallery-controls .next", previous: ".previous-slide, .simple .previous, .sqs-gallery-controls .previous", controls: ".dots, .circles", currentIndex: ".current-index", totalSlides: ".total-slides" }, loop: !0, loaderOptions: { load: !0 }, design: "stacked", designOptions: { transition: "fade", clickBehavior: "auto" }, refreshOnResize: !0 }) }, promotedGalleryShrink: function() {
                var t, n, o, r = ".has-promoted-gallery #promotedGalleryWrapper .meta";
                e.one(r) && (t = e.one("#promotedGalleryWrapper").get("offsetHeight"), e.one(".transparent-header") && (t -= 90), e.all(r).each(function(e) { e.setStyle("display", "block"), n = e.get("offsetHeight"), n > t && (o = e.ancestor(".slide"), o.addClass("reduce-text-size"), n = e.get("offsetHeight"), n > t && (o.removeClass("reduce-text-size"), o.addClass("hide-body-text"), n = e.get("offsetHeight"), n > t && o.addClass("reduce-text-size"))), e.setAttribute("style", "") })) }, textShrink: function(t, n) { e.one(t) && e.one(t).ancestor(n) && e.all(t).each(function(t) { t.plug(e.Squarespace.TextShrink, { parentEl: t.ancestor(n) }) }) }, resetIndexGalleryPosition: function() {
                var t = ".collection-type-index .index-section .sqs-layout > .sqs-row:first-child > .sqs-col-12 > .gallery-block:first-child .sqs-gallery-block-slideshow",
                    n = ".collection-type-index .index-section .promoted-gallery-wrapper ~ .index-section-wrapper .sqs-layout > .sqs-row:first-child > .sqs-col-12 > .gallery-block:first-child",
                    o = e.one(".collection-type-index .index-section:first-child .sqs-layout > .sqs-row:first-child > .sqs-col-12 > .gallery-block:first-child .sqs-gallery-block-slideshow");
                o && e.one("body").addClass("has-banner-image"), e.one(t) && (e.one("body").addClass("has-promoted-gallery"), e.all(n).each(function(e) { e.one(".sqs-gallery-block-slideshow") && e.ancestor(".index-section-wrapper").previous(".promoted-gallery-wrapper").addClass("promoted-full").append(e) })) }, resetGalleryPosition: function() {
                var t = e.one(".collection-type-page .main-content .sqs-layout > .sqs-row:first-child > .sqs-col-12 > .gallery-block:first-child .sqs-gallery-block-slideshow"),
                    n = e.one(".collection-type-page .main-content .sqs-layout > .sqs-row:first-child > .sqs-col-12 > .gallery-block:first-child");
                t && (e.one("#promotedGalleryWrapper .row .col").append(n), e.one("body").addClass("has-promoted-gallery").addClass("has-banner-image")) }, hideArrowsWhenOneSlide: function() { e.one(".posts .post:only-child") && e.all(".circles").addClass("hidden") }, repositionCartButton: function() {
                var t = e.one("#header").get("offsetHeight"),
                    n = e.one(".sqs-cart-dropzone");
                n && (e.one(".transparent-header.has-banner-image") ? n.setStyle("top", t) : n.setStyle("top", t + 20)) }, showIndexNavOnScroll: function() {
                var t, n = function() {
                    if (e.one(".index-section")) {
                        var n = e.one(".index-section").getDOMNode();
                        t = n.getBoundingClientRect().bottom + window.pageYOffset } };
                if (n(), e.one(".collection-type-index") && window.innerWidth <= 640) {
                    var o = function() { t - window.pageYOffset <= 0 ? e.one("body").addClass("fix-header-nav") : e.one("body").removeClass("fix-header-nav") };
                    e.one(window).on("resize", function() { n() }), o(), e.one(window).on("scroll", function() { o() }, this), e.one(".mobile-nav-toggle.fixed-nav-toggle").on("click", function() { e.one("body").hasClass("fix-header-nav") && e.one("body").removeClass("fix-header-nav") }), e.one(window).on(["touchstart", "MSPointerDown"], function() { this._timeout && this._timeout.cancel(), this.isHidden = !0, this.isHidden === !0 && (e.one(".mobile-nav-toggle.fixed-nav-toggle").setStyle("opacity", 1), this.isHidden = !1) }, this), e.one(window).on(["touchend", "MSPointerUp"], function() { this._timeout = e.later(1500, this, function() { this.isHidden = !0, e.one(".mobile-nav-toggle.fixed-nav-toggle").setStyle("opacity", 0) }) }, this) } }, addPaddingToFooter: function() {
                var t = parseInt(e.one("#footer").getStyle("paddingBottom"), 10),
                    n = e.one("#siteWrapper").get("offsetHeight"),
                    o = e.one("body").get("winHeight");
                n - t <= o && e.one("#footer").setStyle("paddingBottom", o - (n - t)) }, disableHoverOnScroll: function() {
                if (e.UA.mobile) return !1;
                var t, n = ".disable-hover:not(.sqs-layout-editing), .disable-hover:not(.sqs-layout-editing) * { pointer-events: none  ; }",
                    o = document.head || document.getElementsByTagName("head")[0],
                    r = document.createElement("style"),
                    i = document.body;
                r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = n : r.appendChild(document.createTextNode(n)), o.appendChild(r), window.addEventListener("scroll", function() { clearTimeout(t), i.classList.contains("disable-hover") || i.classList.add("disable-hover"), t = setTimeout(function() { i.classList.remove("disable-hover") }, 300) }, !1) } }) }) }, function(e, t, n) {
    var o = n(5).VideoBackground,
        r = n(111);
    e.exports = { VideoBackground: o, getVideoProps: r } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0, n(6);
    var o = n(7);
    t.VideoBackground = o.VideoBackground, t.VideoFilterPropertyValues = o.VideoFilterPropertyValues, t.videoAutoplayTest = o.videoAutoplayTest }, function(e, t) {! function() {
        function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n }
        return "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, void(window.CustomEvent = e)) }() }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0;
    var r = n(8),
        i = o(r),
        a = n(110),
        s = n(92),
        c = o(s);
    t.VideoBackground = i.default, t.VideoFilterPropertyValues = a.filterProperties, t.videoAutoplayTest = c.default }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(9),
        i = o(r),
        a = n(77),
        s = o(a),
        c = n(79),
        l = o(c),
        u = n(83),
        f = o(u),
        d = n(84),
        A = o(d),
        h = n(88),
        p = o(h),
        y = n(92),
        v = o(y),
        g = !1,
        m = { container: ".background-wrapper", url: "https://youtu.be/xkEmYQvJ_68", fitMode: "fill", maxLoops: "", scaleFactor: 1, playbackSpeed: 1, filter: 1, filterStrength: 50, timeCode: { start: 0, end: null }, useCustomFallbackImage: !1 },
        b = n(110).filterOptions,
        w = n(110).filterProperties,
        x = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/,
        S = /^.*(vimeo\.com\/)([0-9]{7,}(#t\=.*s)?)/,
        k = function() {
            function e(t) {
                var n = this,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                (0, f.default)(this, e), this.windowContext = o, this.events = [], this.initializeProperties(t), (0, v.default)().then(function(e) { n.canAutoPlay = !0 }, function(e) { n.canAutoPlay = !1, n.container.classList.add("mobile"), n.logger("added mobile") }).then(function(e) { n.setDisplayEffects(), n.setFallbackImage(), n.callVideoAPI(), n.bindUI(), g === !0 && (window.vdbg = n, n.debugInterval = setInterval(function() { n.player.getCurrentTime && n.logger((n.player.getCurrentTime() / n.player.getDuration()).toFixed(2)) }, 900)) }) }
            return (0, A.default)(e, [{ key: "destroy", value: function() { this.events && this.events.forEach(function(e) {
                        return e.target.removeEventListener(e.type, e.handler, !0) }), this.events = null, this.player && "function" == typeof this.player.destroy && (this.player.iframe.classList.remove("ready"), clearTimeout(this.player.playTimeout), this.player.playTimeout = null, this.player.destroy(), this.player = {}), "number" == typeof this.timer && (clearTimeout(this.timer), this.timer = null), "number" == typeof this.debugInterval && (clearInterval(this.debugInterval), this.debugInterval = null) } }, { key: "bindUI", value: function() {
                    var e = this,
                        t = "undefined" == typeof window.orientation ? "resize" : "orientationchange",
                        n = function() {
                            if ("resize" === t && e.player.iframe) e.windowContext.requestAnimationFrame(function() { e.scaleVideo() });
                            else if (e.useCustomFallbackImage && e.windowContext.ImageLoader) {
                                var n = e.container.querySelector("img[data-src]");
                                e.windowContext.ImageLoader.load(n, !0) } };
                    this.events.push({ target: this.windowContext, type: "resize", handler: n }), this.windowContext.addEventListener(t, n, !0) } }, { key: "initializeProperties", value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (e = (0, l.default)({}, m, e), 1 === e.container.nodeType) this.container = e.container;
                    else {
                        if ("string" != typeof e.container) return console.error("Container " + e.container + " not found"), !1;
                        this.container = document.querySelector(e.container) }
                    this.videoId = this.getVideoID(e.url), this.filter = e.filter, this.filterStrength = e.filterStrength, this.useCustomFallbackImage = e.useCustomFallbackImage, this.fitMode = e.fitMode, this.maxLoops = parseInt(e.maxLoops, 10) || null, this.scaleFactor = e.scaleFactor, this.playbackSpeed = 0 === parseFloat(e.playbackSpeed) ? 1 : parseFloat(e.playbackSpeed), this.timeCode = { start: this._getStartTime(e.url) || e.timeCode.start, end: e.timeCode.end }, this.player = {}, this.currentLoop = 0 } }, { key: "getVideoID", value: function(e) { e || (e = m.url);
                    var t = e.match(x);
                    return t && t[2].length ? (this.videoSource = "youtube", t[2]) : (t = e.match(S), t && t[2].length ? (this.videoSource = "vimeo", t[2]) : "") } }, { key: "setFallbackImage", value: function() {
                    if (this.useCustomFallbackImage) {
                        var e = this.container.querySelector(".custom-fallback-image"),
                            t = document.createElement("img");
                        t.src = e.src, t.addEventListener("load", function() { e.classList.add("loaded") }) } } }, { key: "callVideoAPI", value: function() { "youtube" === this.videoSource && this.initializeYouTubeAPI(), "vimeo" === this.videoSource && this.initializeVimeoAPI() } }, { key: "initializeYouTubeAPI", value: function() {
                    var e = this;
                    if (this.canAutoPlay) {
                        if (this.windowContext.document.documentElement.querySelector('script[src*="www.youtube.com/iframe_api"].loaded')) return void this.setVideoPlayer();
                        this.player.ready = !1;
                        var t = this.windowContext.document.createElement("script");
                        t.src = "https://www.youtube.com/iframe_api";
                        var n = this.windowContext.document.getElementsByTagName("script")[0];
                        n.parentNode.insertBefore(t, n), t.addEventListener("load", function(t) { t.currentTarget.classList.add("loaded"), e.setVideoPlayer() }, !0) } } }, { key: "initializeVimeoAPI", value: function() { this.canAutoPlay && this.setVideoPlayer() } }, { key: "setVideoPlayer", value: function() {
                    if (this.player.ready) try { this.player.destroy(), this.player.ready = !1 } catch (e) {}
                    "youtube" === this.videoSource ? this.initializeYouTubePlayer() : "vimeo" === this.videoSource && this.initializeVimeoPlayer() } }, { key: "initializeYouTubePlayer", value: function() {
                    var e = this,
                        t = null;
                    if (1 !== this.windowContext.YT.loaded) return setTimeout(this.setVideoPlayer.bind(this), 100), !1;
                    var n = function(t) {
                            var n = e.player;
                            n.iframe = n.getIframe(), n.iframe.classList.add("background-video"), e.syncPlayer(), n.mute();
                            var o = new CustomEvent("ready");
                            e.container.dispatchEvent(o), document.body.classList.add("ready"), n.ready = !0, e.canAutoPlay && (e.timeCode.start >= n.getDuration() && (e.timeCode.start = 0), n.seekTo(e.timeCode.start), n.playVideo(), e.logger("playing")) },
                        o = function(n) {
                            var o = e.player,
                                r = o.getIframe(),
                                i = (o.getDuration() - e.timeCode.start) / e.playbackSpeed,
                                a = function n() {
                                    if (null === t) {
                                        if (o.getCurrentTime() + .1 >= o.getDuration()) {
                                            if (e.maxLoops && (e.currentLoop++, e.currentLoop > e.maxLoops)) return o.pauseVideo(), void(e.currentLoop = 0);
                                            t = o.getCurrentTime(), o.pauseVideo(), o.seekTo(e.timeCode.start) } } else o.getCurrentTime() < t && (t = null, o.playVideo());
                                    requestAnimationFrame(n.bind(e)) };
                            n.data === e.windowContext.YT.PlayerState.BUFFERING && 1 !== o.getVideoLoadedFraction() && (0 === o.getCurrentTime() || o.getCurrentTime() > i - -.1) ? (e.logger("BUFFERING"), e.autoPlayTestTimeout()) : n.data === e.windowContext.YT.PlayerState.PLAYING ? (null !== e.player.playTimeout && (clearTimeout(e.player.playTimeout), e.player.playTimeout = null), e.canAutoPlay || (e.canAutoPlay = !0, e.container.classList.remove("mobile")), e.logger("PLAYING"), r.classList.add("ready"), requestAnimationFrame(a.bind(e))) : n.data === e.windowContext.YT.PlayerState.ENDED && o.playVideo() },
                        r = this.container.querySelector("#player");
                    r || (r = document.createElement("div"), r.id = "player", this.container.appendChild(r)), this.player = new this.windowContext.YT.Player(r, { height: "315", width: "560", videoId: this.videoId, playerVars: { autohide: 1, autoplay: 0, controls: 0, enablejsapi: 1, iv_load_policy: 3, loop: 0, modestbranding: 1, playsinline: 1, rel: 0, showinfo: 0, wmode: "opaque" }, events: { onReady: function(e) { n(e) }, onStateChange: function(e) { o(e) } } }) } }, { key: "initializeVimeoPlayer", value: function() {
                    var e = this,
                        t = this.windowContext.document.createElement("iframe");
                    t.id = "vimeoplayer", t.classList.add("background-video");
                    var n = "&background=1";
                    t.src = "//player.vimeo.com/video/" + this.videoId + "?api=1" + n, this.container.appendChild(t), this.player.iframe = t;
                    var o = this.player,
                        r = "*",
                        i = function(t, n) {
                            var o = { method: t };
                            n && (o.value = n);
                            var i = (0, s.default)(o);
                            e.windowContext.eval("(function(ctx){ ctx.player.iframe.contentWindow.postMessage(" + i + ", " + (0, s.default)(r) + "); })")(e) };
                    o.postMessageManager = i;
                    var a = function() {
                            if (o.dimensions.width && o.dimensions.height && o.duration) { e.syncPlayer();
                                var t = new CustomEvent("ready");
                                e.container.dispatchEvent(t), document.body.classList.add("ready"), i("setVolume", "0"), i("setLoop", "true"), i("seekTo", e.timeCode.start), i("play"), i("addEventListener", "playProgress") } },
                        c = function() { o.dimensions = {}, i("getDuration"), i("getVideoHeight"), i("getVideoWidth") },
                        l = function() { clearTimeout(o.playTimeout), o.playTimeout = null, o.ready = !0, o.iframe.classList.add("ready"), e.canAutoPlay || (e.canAutoPlay = !0, e.container.classList.remove("mobile")) },
                        u = function(t) {
                            if (!/^https?:\/\/player.vimeo.com/.test(t.origin)) return !1;
                            r = t.origin;
                            var n = t.data;
                            switch ("string" == typeof n && (n = JSON.parse(n)), e.logger(n), n.event) {
                                case "ready":
                                    c();
                                    break;
                                case "playProgress":
                                case "timeupdate":
                                    i("setVolume", "0"), null !== o.playTimeout && l(), n.data.percent >= .98 && e.timeCode.start > 0 && i("seekTo", e.timeCode.start) }
                            switch (n.method) {
                                case "getVideoHeight":
                                    o.dimensions.height = n.value, a();
                                    break;
                                case "getVideoWidth":
                                    o.dimensions.width = n.value, a();
                                    break;
                                case "getDuration":
                                    o.duration = n.value, e.timeCode.start >= o.duration && (e.timeCode.start = 0), a() } },
                        f = function(e) { u(e) };
                    this.windowContext.addEventListener("message", f, !1), this.autoPlayTestTimeout(), o.destroy = function() { e.windowContext.removeEventListener("message", f), o.iframe.parentElement && o.iframe.parentElement.removeChild(o.iframe) } } }, { key: "scaleVideo", value: function(e) {
                    var t = e || this.scaleFactor,
                        n = this.player.iframe,
                        o = this._findPlayerDimensions();
                    if ("fill" !== this.fitMode) return n.style.width = "", n.style.height = "", !1;
                    var r = n.parentNode.clientWidth,
                        i = n.parentNode.clientHeight,
                        a = r / i,
                        s = o.width / o.height,
                        c = 0,
                        l = 0;
                    a > s ? (c = r * t, l = r * t / s, n.style.width = c + "px", n.style.height = l + "px") : s > a ? (c = i * t * s, l = i * t, n.style.width = c + "px", n.style.height = l + "px") : (c = r * t, l = i * t, n.style.width = c + "px", n.style.height = l + "px"), n.style.left = 0 - (c - r) / 2 + "px", n.style.top = 0 - (l - i) / 2 + "px" } }, { key: "setSpeed", value: function(e) { this.playbackSpeed = parseFloat(this.playbackSpeed), this.player.setPlaybackRate(this.playbackSpeed) } }, { key: "setDisplayEffects", value: function() { this.setFilter() } }, { key: "setFilter", value: function() {
                    var e = this.container.style,
                        t = b[this.filter - 1],
                        n = ""; "none" !== t && (n = this.getFilterStyle(t, this.filterStrength)), "blur" === t ? (e.webkitFilter = "", e.filter = "", this.container.classList.add("filter-blur"), Array.prototype.slice.call(this.container.children).forEach(function(e) { e.style.webkitFilter = n, e.style.filter = n })) : (e.webkitFilter = n, e.filter = n, this.container.classList.remove("filter-blur"), Array.prototype.slice.call(this.container.children).forEach(function(e) { e.style.webkitFilter = "", e.style.filter = "" })) } }, { key: "getFilterStyle", value: function(e, t) {
                    return e + "(" + (w[e].modifier(t) + w[e].unit) + ")" } }, { key: "_findPlayerDimensions", value: function() {
                    var e = void 0,
                        t = void 0,
                        n = this.player;
                    if ("youtube" === this.videoSource && n)
                        for (var o in n) {
                            var r = n[o];
                            if ("object" === ("undefined" == typeof r ? "undefined" : (0, i.default)(r)) && r.width && r.height) { e = r.width, t = r.height;
                                break } } else "vimeo" === this.videoSource && n && (n.dimensions ? (e = n.dimensions.width, t = n.dimensions.height) : n.iframe && (e = n.iframe.clientWidth, t = n.iframe.clientHeight));
                    return e && t || (e = this.container.clientWidth, t = this.container.clientHeight, console.warn("Video player dimensions not found.")), { width: e, height: t } } }, { key: "_getStartTime", value: function(e) {
                    var t = new p.default(e, !0),
                        n = this._getTimeParameter(t);
                    if (!n) return !1;
                    var o = /[hms]/,
                        r = /[#t=s]/,
                        i = void 0;
                    switch (this.videoSource) {
                        case "youtube":
                            i = n.split(o).filter(Boolean);
                            break;
                        case "vimeo":
                            i = n.split(r).filter(Boolean) }
                    var a = parseInt(i.pop(), 10) || 0,
                        s = 60 * parseInt(i.pop(), 10) || 0,
                        c = 3600 * parseInt(i.pop(), 10) || 0;
                    return c + s + a } }, { key: "_getTimeParameter", value: function(e) {
                    if ("youtube" === this.videoSource && (!e.query || !e.query.t) || "vimeo" === this.videoSource && !e.hash) return !1;
                    var t = void 0;
                    return "youtube" === this.videoSource ? t = e.query.t : "vimeo" === this.videoSource && (t = e.hash), t } }, { key: "autoPlayTestTimeout", value: function() {
                    var e = this;
                    this.player.playTimeout = setTimeout(function() { e.canAutoPlay = !1, e.container.classList.add("mobile"), e.logger("added mobile") }, 2500) } }, { key: "syncPlayer", value: function() { this.setDisplayEffects(), "youtube" === this.videoSource && this.setSpeed(), this.scaleVideo() } }, { key: "logger", value: function(e) { g && console.log(e) } }]), e }();
    t.default = k }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    t.__esModule = !0;
    var r = n(10),
        i = o(r),
        a = n(61),
        s = o(a),
        c = "function" == typeof s.default && "symbol" == typeof i.default ? function(e) {
            return typeof e } : function(e) {
            return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e };
    t.default = "function" == typeof s.default && "symbol" === c(i.default) ? function(e) {
        return "undefined" == typeof e ? "undefined" : c(e) } : function(e) {
        return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : c(e) } }, function(e, t, n) { e.exports = { default: n(11), __esModule: !0 } }, function(e, t, n) { n(12), n(56), e.exports = n(60).f("iterator") }, function(e, t, n) { "use strict";
    var o = n(13)(!0);
    n(16)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? { value: void 0, done: !0 } : (e = o(t, n), this._i += e.length, { value: e, done: !1 }) }) }, function(e, t, n) {
    var o = n(14),
        r = n(15);
    e.exports = function(e) {
        return function(t, n) {
            var i, a, s = String(r(t)),
                c = o(n),
                l = s.length;
            return c < 0 || c >= l ? e ? "" : void 0 : (i = s.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : (i - 55296 << 10) + (a - 56320) + 65536) } } }, function(e, t) {
    var n = Math.ceil,
        o = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e) } }, function(e, t) { e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e } }, function(e, t, n) { "use strict";
    var o = n(17),
        r = n(18),
        i = n(33),
        a = n(23),
        s = n(34),
        c = n(35),
        l = n(36),
        u = n(52),
        f = n(54),
        d = n(53)("iterator"),
        A = !([].keys && "next" in [].keys()),
        h = "@@iterator",
        p = "keys",
        y = "values",
        v = function() {
            return this };
    e.exports = function(e, t, n, g, m, b, w) { l(n, t, g);
        var x, S, k, T = function(e) {
                if (!A && e in F) return F[e];
                switch (e) {
                    case p:
                        return function() {
                            return new n(this, e) };
                    case y:
                        return function() {
                            return new n(this, e) } }
                return function() {
                    return new n(this, e) } },
            E = t + " Iterator",
            C = m == y,
            P = !1,
            F = e.prototype,
            I = F[d] || F[h] || m && F[m],
            R = I || T(m),
            M = m ? C ? T("entries") : R : void 0,
            V = "Array" == t ? F.entries || I : I;
        if (V && (k = f(V.call(new e)), k !== Object.prototype && (u(k, E, !0), o || s(k, d) || a(k, d, v))), C && I && I.name !== y && (P = !0, R = function() {
                return I.call(this) }), o && !w || !A && !P && F[d] || a(F, d, R), c[t] = R, c[E] = v, m)
            if (x = { values: C ? R : T(y), keys: b ? R : T(p), entries: M }, w)
                for (S in x) S in F || i(F, S, x[S]);
            else r(r.P + r.F * (A || P), t, x);
        return x } }, function(e, t) { e.exports = !0 }, function(e, t, n) {
    var o = n(19),
        r = n(20),
        i = n(21),
        a = n(23),
        s = "prototype",
        c = function(e, t, n) {
            var l, u, f, d = e & c.F,
                A = e & c.G,
                h = e & c.S,
                p = e & c.P,
                y = e & c.B,
                v = e & c.W,
                g = A ? r : r[t] || (r[t] = {}),
                m = g[s],
                b = A ? o : h ? o[t] : (o[t] || {})[s];
            A && (n = t);
            for (l in n) u = !d && b && void 0 !== b[l], u && l in g || (f = u ? b[l] : n[l], g[l] = A && "function" != typeof b[l] ? n[l] : y && u ? i(f, o) : v && b[l] == f ? function(e) {
                var t = function(t, n, o) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n) }
                        return new e(t, n, o) }
                    return e.apply(this, arguments) };
                return t[s] = e[s], t }(f) : p && "function" == typeof f ? i(Function.call, f) : f, p && ((g.virtual || (g.virtual = {}))[l] = f, e & c.R && m && !m[l] && a(m, l, f))) };
    c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c }, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(e, t) {
    var n = e.exports = { version: "2.4.0" }; "number" == typeof __e && (__e = n) }, function(e, t, n) {
    var o = n(22);
    e.exports = function(e, t, n) {
        if (o(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n) };
            case 2:
                return function(n, o) {
                    return e.call(t, n, o) };
            case 3:
                return function(n, o, r) {
                    return e.call(t, n, o, r) } }
        return function() {
            return e.apply(t, arguments) } } }, function(e, t) { e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e } }, function(e, t, n) {
    var o = n(24),
        r = n(32);
    e.exports = n(28) ? function(e, t, n) {
        return o.f(e, t, r(1, n)) } : function(e, t, n) {
        return e[t] = n, e } }, function(e, t, n) {
    var o = n(25),
        r = n(27),
        i = n(31),
        a = Object.defineProperty;
    t.f = n(28) ? Object.defineProperty : function(e, t, n) {
        if (o(e), t = i(t, !0), o(n), r) try {
            return a(e, t, n) } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e } }, function(e, t, n) {
    var o = n(26);
    e.exports = function(e) {
        if (!o(e)) throw TypeError(e + " is not an object!");
        return e } }, function(e, t) { e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t, n) { e.exports = !n(28) && !n(29)(function() {
        return 7 != Object.defineProperty(n(30)("div"), "a", { get: function() {
                return 7 } }).a }) }, function(e, t, n) { e.exports = !n(29)(function() {
        return 7 != Object.defineProperty({}, "a", { get: function() {
                return 7 } }).a }) }, function(e, t) { e.exports = function(e) {
        try {
            return !!e() } catch (e) {
            return !0 } } }, function(e, t, n) {
    var o = n(26),
        r = n(19).document,
        i = o(r) && o(r.createElement);
    e.exports = function(e) {
        return i ? r.createElement(e) : {} } }, function(e, t, n) {
    var o = n(26);
    e.exports = function(e, t) {
        if (!o(e)) return e;
        var n, r;
        if (t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        if ("function" == typeof(n = e.valueOf) && !o(r = n.call(e))) return r;
        if (!t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value") } }, function(e, t) { e.exports = function(e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t, n) { e.exports = n(23) }, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t) } }, function(e, t) { e.exports = {} }, function(e, t, n) { "use strict";
    var o = n(37),
        r = n(32),
        i = n(52),
        a = {};
    n(23)(a, n(53)("iterator"), function() {
        return this }), e.exports = function(e, t, n) { e.prototype = o(a, { next: r(1, n) }), i(e, t + " Iterator") } }, function(e, t, n) {
    var o = n(25),
        r = n(38),
        i = n(50),
        a = n(47)("IE_PROTO"),
        s = function() {},
        c = "prototype",
        l = function() {
            var e, t = n(30)("iframe"),
                o = i.length,
                r = "<",
                a = ">";
            for (t.style.display = "none", n(51).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(r + "script" + a + "document.F=Object" + r + "/script" + a), e.close(), l = e.F; o--;) delete l[c][i[o]];
            return l() };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s[c] = o(e), n = new s, s[c] = null, n[a] = e) : n = l(), void 0 === t ? n : r(n, t) } }, function(e, t, n) {
    var o = n(24),
        r = n(25),
        i = n(39);
    e.exports = n(28) ? Object.defineProperties : function(e, t) { r(e);
        for (var n, a = i(t), s = a.length, c = 0; s > c;) o.f(e, n = a[c++], t[n]);
        return e } }, function(e, t, n) {
    var o = n(40),
        r = n(50);
    e.exports = Object.keys || function(e) {
        return o(e, r) } }, function(e, t, n) {
    var o = n(34),
        r = n(41),
        i = n(44)(!1),
        a = n(47)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = r(e),
            c = 0,
            l = [];
        for (n in s) n != a && o(s, n) && l.push(n);
        for (; t.length > c;) o(s, n = t[c++]) && (~i(l, n) || l.push(n));
        return l } }, function(e, t, n) {
    var o = n(42),
        r = n(15);
    e.exports = function(e) {
        return o(r(e)) } }, function(e, t, n) {
    var o = n(43);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == o(e) ? e.split("") : Object(e) } }, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1) } }, function(e, t, n) {
    var o = n(41),
        r = n(45),
        i = n(46);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, c = o(t),
                l = r(c.length),
                u = i(a, l);
            if (e && n != n) {
                for (; l > u;)
                    if (s = c[u++], s != s) return !0 } else
                for (; l > u; u++)
                    if ((e || u in c) && c[u] === n) return e || u || 0; return !e && -1 } } }, function(e, t, n) {
    var o = n(14),
        r = Math.min;
    e.exports = function(e) {
        return e > 0 ? r(o(e), 9007199254740991) : 0 } }, function(e, t, n) {
    var o = n(14),
        r = Math.max,
        i = Math.min;
    e.exports = function(e, t) {
        return e = o(e), e < 0 ? r(e + t, 0) : i(e, t) } }, function(e, t, n) {
    var o = n(48)("keys"),
        r = n(49);
    e.exports = function(e) {
        return o[e] || (o[e] = r(e)) } }, function(e, t, n) {
    var o = n(19),
        r = "__core-js_shared__",
        i = o[r] || (o[r] = {});
    e.exports = function(e) {
        return i[e] || (i[e] = {}) } }, function(e, t) {
    var n = 0,
        o = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36)) } }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t, n) { e.exports = n(19).document && document.documentElement }, function(e, t, n) {
    var o = n(24).f,
        r = n(34),
        i = n(53)("toStringTag");
    e.exports = function(e, t, n) { e && !r(e = n ? e : e.prototype, i) && o(e, i, { configurable: !0, value: t }) } }, function(e, t, n) {
    var o = n(48)("wks"),
        r = n(49),
        i = n(19).Symbol,
        a = "function" == typeof i,
        s = e.exports = function(e) {
            return o[e] || (o[e] = a && i[e] || (a ? i : r)("Symbol." + e)) };
    s.store = o }, function(e, t, n) {
    var o = n(34),
        r = n(55),
        i = n(47)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null } }, function(e, t, n) {
    var o = n(15);
    e.exports = function(e) {
        return Object(o(e)) } }, function(e, t, n) { n(57);
    for (var o = n(19), r = n(23), i = n(35), a = n(53)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var l = s[c],
            u = o[l],
            f = u && u.prototype;
        f && !f[a] && r(f, a, l), i[l] = i.Array } }, function(e, t, n) { "use strict";
    var o = n(58),
        r = n(59),
        i = n(35),
        a = n(41);
    e.exports = n(16)(Array, "Array", function(e, t) { this._t = a(e), this._i = 0, this._k = t }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]]) }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries") }, function(e, t) { e.exports = function() {} }, function(e, t) { e.exports = function(e, t) {
        return { value: t, done: !!e } } }, function(e, t, n) { t.f = n(53) }, function(e, t, n) { e.exports = { default: n(62), __esModule: !0 } }, function(e, t, n) { n(63), n(74), n(75), n(76), e.exports = n(20).Symbol }, function(e, t, n) {
    "use strict";
    var o = n(19),
        r = n(34),
        i = n(28),
        a = n(18),
        s = n(33),
        c = n(64).KEY,
        l = n(29),
        u = n(48),
        f = n(52),
        d = n(49),
        A = n(53),
        h = n(60),
        p = n(65),
        y = n(66),
        v = n(67),
        g = n(70),
        m = n(25),
        b = n(41),
        w = n(31),
        x = n(32),
        S = n(37),
        k = n(71),
        T = n(73),
        E = n(24),
        C = n(39),
        P = T.f,
        F = E.f,
        I = k.f,
        R = o.Symbol,
        M = o.JSON,
        V = M && M.stringify,
        Y = "prototype",
        B = A("_hidden"),
        O = A("toPrimitive"),
        G = {}.propertyIsEnumerable,
        N = u("symbol-registry"),
        j = u("symbols"),
        L = u("op-symbols"),
        U = Object[Y],
        _ = "function" == typeof R,
        Q = o.QObject,
        D = !Q || !Q[Y] || !Q[Y].findChild,
        Z = i && l(function() {
            return 7 != S(F({}, "a", { get: function() {
                    return F(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) {
            var o = P(U, t);
            o && delete U[t], F(e, t, n), o && e !== U && F(U, t, o) } : F,
        H = function(e) {
            var t = j[e] = S(R[Y]);
            return t._k = e, t },
        W = _ && "symbol" == typeof R.iterator ? function(e) {
            return "symbol" == typeof e } : function(e) {
            return e instanceof R },
        q = function(e, t, n) {
            return e === U && q(L, t, n), m(e), t = w(t, !0), m(n), r(j, t) ? (n.enumerable ? (r(e, B) && e[B][t] && (e[B][t] = !1), n = S(n, {
                enumerable: x(0, !1)
            })) : (r(e, B) || F(e, B, x(1, {})), e[B][t] = !0), Z(e, t, n)) : F(e, t, n)
        },
        z = function(e, t) { m(e);
            for (var n, o = v(t = b(t)), r = 0, i = o.length; i > r;) q(e, n = o[r++], t[n]);
            return e },
        J = function(e, t) {
            return void 0 === t ? S(e) : z(S(e), t) },
        X = function(e) {
            var t = G.call(this, e = w(e, !0));
            return !(this === U && r(j, e) && !r(L, e)) && (!(t || !r(this, e) || !r(j, e) || r(this, B) && this[B][e]) || t) },
        K = function(e, t) {
            if (e = b(e), t = w(t, !0), e !== U || !r(j, t) || r(L, t)) {
                var n = P(e, t);
                return !n || !r(j, t) || r(e, B) && e[B][t] || (n.enumerable = !0), n } },
        $ = function(e) {
            for (var t, n = I(b(e)), o = [], i = 0; n.length > i;) r(j, t = n[i++]) || t == B || t == c || o.push(t);
            return o },
        ee = function(e) {
            for (var t, n = e === U, o = I(n ? L : b(e)), i = [], a = 0; o.length > a;) !r(j, t = o[a++]) || n && !r(U, t) || i.push(j[t]);
            return i };
    _ || (R = function() {
        if (this instanceof R) throw TypeError("Symbol is not a constructor!");
        var e = d(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) { this === U && t.call(L, n), r(this, B) && r(this[B], e) && (this[B][e] = !1), Z(this, e, x(1, n)) };
        return i && D && Z(U, e, { configurable: !0, set: t }), H(e) }, s(R[Y], "toString", function() {
        return this._k }), T.f = K, E.f = q, n(72).f = k.f = $, n(69).f = X, n(68).f = ee, i && !n(17) && s(U, "propertyIsEnumerable", X, !0), h.f = function(e) {
        return H(A(e)) }), a(a.G + a.W + a.F * !_, { Symbol: R });
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) A(te[ne++]);
    for (var te = C(A.store), ne = 0; te.length > ne;) p(te[ne++]);
    a(a.S + a.F * !_, "Symbol", { for: function(e) {
            return r(N, e += "") ? N[e] : N[e] = R(e) }, keyFor: function(e) {
            if (W(e)) return y(N, e);
            throw TypeError(e + " is not a symbol!") }, useSetter: function() { D = !0 }, useSimple: function() { D = !1 } }), a(a.S + a.F * !_, "Object", { create: J, defineProperty: q, defineProperties: z, getOwnPropertyDescriptor: K, getOwnPropertyNames: $, getOwnPropertySymbols: ee }), M && a(a.S + a.F * (!_ || l(function() {
        var e = R();
        return "[null]" != V([e]) || "{}" != V({ a: e }) || "{}" != V(Object(e)) })), "JSON", { stringify: function(e) {
            if (void 0 !== e && !W(e)) {
                for (var t, n, o = [e], r = 1; arguments.length > r;) o.push(arguments[r++]);
                return t = o[1], "function" == typeof t && (n = t), !n && g(t) || (t = function(e, t) {
                    if (n && (t = n.call(this, e, t)), !W(t)) return t }), o[1] = t, V.apply(M, o) } } }), R[Y][O] || n(23)(R[Y], O, R[Y].valueOf), f(R, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0)
}, function(e, t, n) {
    var o = n(49)("meta"),
        r = n(26),
        i = n(34),
        a = n(24).f,
        s = 0,
        c = Object.isExtensible || function() {
            return !0 },
        l = !n(29)(function() {
            return c(Object.preventExtensions({})) }),
        u = function(e) { a(e, o, { value: { i: "O" + ++s, w: {} } }) },
        f = function(e, t) {
            if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, o)) {
                if (!c(e)) return "F";
                if (!t) return "E";
                u(e) }
            return e[o].i },
        d = function(e, t) {
            if (!i(e, o)) {
                if (!c(e)) return !0;
                if (!t) return !1;
                u(e) }
            return e[o].w },
        A = function(e) {
            return l && h.NEED && c(e) && !i(e, o) && u(e), e },
        h = e.exports = { KEY: o, NEED: !1, fastKey: f, getWeak: d, onFreeze: A } }, function(e, t, n) {
    var o = n(19),
        r = n(20),
        i = n(17),
        a = n(60),
        s = n(24).f;
    e.exports = function(e) {
        var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {}); "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) }) } }, function(e, t, n) {
    var o = n(39),
        r = n(41);
    e.exports = function(e, t) {
        for (var n, i = r(e), a = o(i), s = a.length, c = 0; s > c;)
            if (i[n = a[c++]] === t) return n } }, function(e, t, n) {
    var o = n(39),
        r = n(68),
        i = n(69);
    e.exports = function(e) {
        var t = o(e),
            n = r.f;
        if (n)
            for (var a, s = n(e), c = i.f, l = 0; s.length > l;) c.call(e, a = s[l++]) && t.push(a);
        return t } }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) {
    var o = n(43);
    e.exports = Array.isArray || function(e) {
        return "Array" == o(e) } }, function(e, t, n) {
    var o = n(41),
        r = n(72).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function(e) {
            try {
                return r(e) } catch (e) {
                return a.slice() } };
    e.exports.f = function(e) {
        return a && "[object Window]" == i.call(e) ? s(e) : r(o(e)) } }, function(e, t, n) {
    var o = n(40),
        r = n(50).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return o(e, r) } }, function(e, t, n) {
    var o = n(69),
        r = n(32),
        i = n(41),
        a = n(31),
        s = n(34),
        c = n(27),
        l = Object.getOwnPropertyDescriptor;
    t.f = n(28) ? l : function(e, t) {
        if (e = i(e), t = a(t, !0), c) try {
            return l(e, t) } catch (e) {}
        if (s(e, t)) return r(!o.f.call(e, t), e[t]) } }, function(e, t) {}, function(e, t, n) { n(65)("asyncIterator") }, function(e, t, n) { n(65)("observable") }, function(e, t, n) { e.exports = { default: n(78), __esModule: !0 } }, function(e, t, n) {
    var o = n(20),
        r = o.JSON || (o.JSON = { stringify: JSON.stringify });
    e.exports = function(e) {
        return r.stringify.apply(r, arguments) } }, function(e, t, n) { e.exports = { default: n(80), __esModule: !0 } }, function(e, t, n) { n(81), e.exports = n(20).Object.assign }, function(e, t, n) {
    var o = n(18);
    o(o.S + o.F, "Object", { assign: n(82) }) }, function(e, t, n) { "use strict";
    var o = n(39),
        r = n(68),
        i = n(69),
        a = n(55),
        s = n(42),
        c = Object.assign;
    e.exports = !c || n(29)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            o = "abcdefghijklmnopqrst";
        return e[n] = 7, o.split("").forEach(function(e) { t[e] = e }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != o }) ? function(e, t) {
        for (var n = a(e), c = arguments.length, l = 1, u = r.f, f = i.f; c > l;)
            for (var d, A = s(arguments[l++]), h = u ? o(A).concat(u(A)) : o(A), p = h.length, y = 0; p > y;) f.call(A, d = h[y++]) && (n[d] = A[d]);
        return n } : c }, function(e, t) { "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    t.__esModule = !0;
    var r = n(85),
        i = o(r);
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, i.default)(e, o.key, o) } }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t } }() }, function(e, t, n) { e.exports = { default: n(86), __esModule: !0 } }, function(e, t, n) { n(87);
    var o = n(20).Object;
    e.exports = function(e, t, n) {
        return o.defineProperty(e, t, n) } }, function(e, t, n) {
    var o = n(18);
    o(o.S + o.F * !n(28), "Object", { defineProperty: n(24).f }) }, function(e, t, n) { "use strict";

    function o(e) {
        var t = l.exec(e);
        return { protocol: t[1] ? t[1].toLowerCase() : "", slashes: !!t[2], rest: t[3] ? t[3] : "" } }

    function r(e, t, n) {
        if (!(this instanceof r)) return new r(e, t, n);
        var l, f, d, A, h = c.test(e),
            p = typeof t,
            y = this,
            v = 0; "object" !== p && "string" !== p && (n = t, t = null), n && "function" != typeof n && (n = s.parse), t = a(t);
        var g = o(e);
        for (y.protocol = g.protocol || t.protocol || "", y.slashes = g.slashes || t.slashes, e = g.rest; v < u.length; v++) f = u[v], l = f[0], A = f[1], l !== l ? y[A] = e : "string" == typeof l ? ~(d = e.indexOf(l)) && ("number" == typeof f[2] ? (y[A] = e.slice(0, d), e = e.slice(d + f[2])) : (y[A] = e.slice(d), e = e.slice(0, d))) : (d = l.exec(e)) && (y[A] = d[1], e = e.slice(0, e.length - d[0].length)), y[A] = y[A] || (f[3] || "port" === A && h ? t[A] || "" : ""), f[4] && (y[A] = y[A].toLowerCase());
        n && (y.query = n(y.query)), i(y.port, y.protocol) || (y.host = y.hostname, y.port = ""), y.username = y.password = "", y.auth && (f = y.auth.split(":"), y.username = f[0] || "", y.password = f[1] || ""), y.href = y.toString() }
    var i = n(89),
        a = n(90),
        s = n(91),
        c = /^\/(?!\/)/,
        l = /^([a-z0-9.+-]+:)?(\/\/)?(.*)$/i,
        u = [
            ["#", "hash"],
            ["?", "query"],
            ["/", "pathname"],
            ["@", "auth", 1],
            [NaN, "host", void 0, 1, 1],
            [/\:(\d+)$/, "port"],
            [NaN, "hostname", void 0, 1, 1]
        ];
    r.prototype.set = function(e, t, n) {
        var o = this;
        return "query" === e ? ("string" == typeof t && t.length && (t = (n || s.parse)(t)), o[e] = t) : "port" === e ? (o[e] = t, i(t, o.protocol) ? t && (o.host = o.hostname + ":" + t) : (o.host = o.hostname, o[e] = "")) : "hostname" === e ? (o[e] = t, o.port && (t += ":" + o.port), o.host = t) : "host" === e ? (o[e] = t, /\:\d+/.test(t) && (t = t.split(":"), o.hostname = t[0], o.port = t[1])) : "protocol" === e ? (o.protocol = t, o.slashes = !n) : o[e] = t, o.href = o.toString(), o }, r.prototype.toString = function(e) { e && "function" == typeof e || (e = s.stringify);
        var t, n = this,
            o = n.protocol;
        o && ":" !== o.charAt(o.length - 1) && (o += ":");
        var r = o + (n.slashes ? "//" : "");
        return n.username && (r += n.username, n.password && (r += ":" + n.password), r += "@"), r += n.hostname, n.port && (r += ":" + n.port), r += n.pathname, t = "object" == typeof n.query ? e(n.query) : n.query, t && (r += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (r += n.hash), r }, r.qs = s, r.location = a, e.exports = r }, function(e, t) { "use strict";
    e.exports = function(e, t) {
        if (t = t.split(":")[0], e = +e, !e) return !1;
        switch (t) {
            case "http":
            case "ws":
                return 80 !== e;
            case "https":
            case "wss":
                return 443 !== e;
            case "ftp":
                return 21 !== e;
            case "gopher":
                return 70 !== e;
            case "file":
                return !1 }
        return 0 !== e } }, function(e, t, n) {
    (function(t) { "use strict";
        var o, r = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            i = { hash: 1, query: 1 };
        e.exports = function(e) { e = e || t.location || {}, o = o || n(88);
            var a, s = {},
                c = typeof e;
            if ("blob:" === e.protocol) s = new o(unescape(e.pathname), {});
            else if ("string" === c) { s = new o(e, {});
                for (a in i) delete s[a] } else if ("object" === c) {
                for (a in e) a in i || (s[a] = e[a]);
                void 0 === s.slashes && (s.slashes = r.test(e.href)) }
            return s } }).call(t, function() {
        return this }()) }, function(e, t) { "use strict";

    function n(e) {
        for (var t, n = /([^=?&]+)=?([^&]*)/g, o = {}; t = n.exec(e); o[decodeURIComponent(t[1])] = decodeURIComponent(t[2]));
        return o }

    function o(e, t) { t = t || "";
        var n = []; "string" != typeof t && (t = "?");
        for (var o in e) r.call(e, o) && n.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
        return n.length ? t + n.join("&") : "" }
    var r = Object.prototype.hasOwnProperty;
    t.stringify = o, t.parse = n }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(93),
        i = o(r),
        a = !1,
        s = 5,
        c = 200,
        l = n(109),
        u = l.OggVideo,
        f = l.Mp4Video,
        d = function() {
            return new i.default(function(e, t) {
                if ("resolve" === a) return void e(!0);
                if ("reject" === a) return void t("rejected for debugging");
                var n = document.createElement("video"),
                    o = n.style,
                    r = 0,
                    i = void 0,
                    l = function o(a) { r++, clearTimeout(i);
                        var l = a && "playing" === a.type || 0 !== n.currentTime;
                        return !l && r < s ? void(i = setTimeout(o, c)) : (n.removeEventListener("playing", o, !1), l ? e(l) : t("no autoplay: browser does not support autoplay"), void n.parentNode.removeChild(n)) };
                if (!("autoplay" in n)) return void t("no autoplay: browser does not support autoplay attribute");
                o.cssText = "position: absolute; height: 0; width: 0; overflow: hidden; visibility: hidden; z-index: -100";
                try {
                    if (n.canPlayType('video/ogg; codecs="theora"').match(/^(probably)|(maybe)/)) n.src = u;
                    else {
                        if (!n.canPlayType('video/mp4; codecs="avc1.42E01E"').match(/^(probably)|(maybe)/)) return void t("no autoplay: element does not support mp4 or ogg format");
                        n.src = f } } catch (e) {
                    return void t("no autoplay: " + e) }
                n.setAttribute("autoplay", ""), n.setAttribute("muted", "true"), n.style.cssText = "display:none", document.body.appendChild(n), setTimeout(function() { n.addEventListener("playing", l, !1), i = setTimeout(l, c) }, 0) }) };
    t.default = d }, function(e, t, n) { e.exports = { default: n(94), __esModule: !0 } }, function(e, t, n) { n(74), n(12), n(56), n(95), e.exports = n(20).Promise }, function(e, t, n) { "use strict";
    var o, r, i, a = n(17),
        s = n(19),
        c = n(21),
        l = n(96),
        u = n(18),
        f = n(26),
        d = n(22),
        A = n(97),
        h = n(98),
        p = n(102),
        y = n(103).set,
        v = n(105)(),
        g = "Promise",
        m = s.TypeError,
        b = s.process,
        w = s[g],
        b = s.process,
        x = "process" == l(b),
        S = function() {},
        k = !! function() {
            try {
                var e = w.resolve(1),
                    t = (e.constructor = {})[n(53)("species")] = function(e) { e(S, S) };
                return (x || "function" == typeof PromiseRejectionEvent) && e.then(S) instanceof t } catch (e) {} }(),
        T = function(e, t) {
            return e === t || e === w && t === i },
        E = function(e) {
            var t;
            return !(!f(e) || "function" != typeof(t = e.then)) && t },
        C = function(e) {
            return T(w, e) ? new P(e) : new r(e) },
        P = r = function(e) {
            var t, n;
            this.promise = new e(function(e, o) {
                if (void 0 !== t || void 0 !== n) throw m("Bad Promise constructor");
                t = e, n = o }), this.resolve = d(t), this.reject = d(n) },
        F = function(e) {
            try { e() } catch (e) {
                return { error: e } } },
        I = function(e, t) {
            if (!e._n) { e._n = !0;
                var n = e._c;
                v(function() {
                    for (var o = e._v, r = 1 == e._s, i = 0, a = function(t) {
                            var n, i, a = r ? t.ok : t.fail,
                                s = t.resolve,
                                c = t.reject,
                                l = t.domain;
                            try { a ? (r || (2 == e._h && V(e), e._h = 1), a === !0 ? n = o : (l && l.enter(), n = a(o), l && l.exit()), n === t.promise ? c(m("Promise-chain cycle")) : (i = E(n)) ? i.call(n, s, c) : s(n)) : c(o) } catch (e) { c(e) } }; n.length > i;) a(n[i++]);
                    e._c = [], e._n = !1, t && !e._h && R(e) }) } },
        R = function(e) { y.call(s, function() {
                var t, n, o, r = e._v;
                if (M(e) && (t = F(function() { x ? b.emit("unhandledRejection", r, e) : (n = s.onunhandledrejection) ? n({ promise: e, reason: r }) : (o = s.console) && o.error && o.error("Unhandled promise rejection", r) }), e._h = x || M(e) ? 2 : 1), e._a = void 0, t) throw t.error }) },
        M = function(e) {
            if (1 == e._h) return !1;
            for (var t, n = e._a || e._c, o = 0; n.length > o;)
                if (t = n[o++], t.fail || !M(t.promise)) return !1;
            return !0 },
        V = function(e) { y.call(s, function() {
                var t;
                x ? b.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({ promise: e, reason: e._v }) }) },
        Y = function(e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), I(t, !0)) },
        B = function(e) {
            var t, n = this;
            if (!n._d) { n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw m("Promise can't be resolved itself");
                    (t = E(e)) ? v(function() {
                        var o = { _w: n, _d: !1 };
                        try { t.call(e, c(B, o, 1), c(Y, o, 1)) } catch (e) { Y.call(o, e) } }): (n._v = e, n._s = 1, I(n, !1)) } catch (e) { Y.call({ _w: n, _d: !1 }, e) } } };
    k || (w = function(e) { A(this, w, g, "_h"), d(e), o.call(this);
        try { e(c(B, this, 1), c(Y, this, 1)) } catch (e) { Y.call(this, e) } }, o = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }, o.prototype = n(106)(w.prototype, { then: function(e, t) {
            var n = C(p(this, w));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = x ? b.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise }, catch: function(e) {
            return this.then(void 0, e) } }), P = function() {
        var e = new o;
        this.promise = e, this.resolve = c(B, e, 1), this.reject = c(Y, e, 1) }), u(u.G + u.W + u.F * !k, { Promise: w }), n(52)(w, g), n(107)(g), i = n(20)[g], u(u.S + u.F * !k, g, { reject: function(e) {
            var t = C(this),
                n = t.reject;
            return n(e), t.promise } }), u(u.S + u.F * (a || !k), g, { resolve: function(e) {
            if (e instanceof w && T(e.constructor, this)) return e;
            var t = C(this),
                n = t.resolve;
            return n(e), t.promise } }), u(u.S + u.F * !(k && n(108)(function(e) { w.all(e).catch(S) })), g, { all: function(e) {
            var t = this,
                n = C(t),
                o = n.resolve,
                r = n.reject,
                i = F(function() {
                    var n = [],
                        i = 0,
                        a = 1;
                    h(e, !1, function(e) {
                        var s = i++,
                            c = !1;
                        n.push(void 0), a++, t.resolve(e).then(function(e) { c || (c = !0, n[s] = e, --a || o(n)) }, r) }), --a || o(n) });
            return i && r(i.error), n.promise }, race: function(e) {
            var t = this,
                n = C(t),
                o = n.reject,
                r = F(function() { h(e, !1, function(e) { t.resolve(e).then(n.resolve, o) }) });
            return r && o(r.error), n.promise } }) }, function(e, t, n) {
    var o = n(43),
        r = n(53)("toStringTag"),
        i = "Arguments" == o(function() {
            return arguments }()),
        a = function(e, t) {
            try {
                return e[t] } catch (e) {} };
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = a(t = Object(e), r)) ? n : i ? o(t) : "Object" == (s = o(t)) && "function" == typeof t.callee ? "Arguments" : s } }, function(e, t) { e.exports = function(e, t, n, o) {
        if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
        return e } }, function(e, t, n) {
    var o = n(21),
        r = n(99),
        i = n(100),
        a = n(25),
        s = n(45),
        c = n(101),
        l = {},
        u = {},
        t = e.exports = function(e, t, n, f, d) {
            var A, h, p, y, v = d ? function() {
                    return e } : c(e),
                g = o(n, f, t ? 2 : 1),
                m = 0;
            if ("function" != typeof v) throw TypeError(e + " is not iterable!");
            if (i(v)) {
                for (A = s(e.length); A > m; m++)
                    if (y = t ? g(a(h = e[m])[0], h[1]) : g(e[m]), y === l || y === u) return y } else
                for (p = v.call(e); !(h = p.next()).done;)
                    if (y = r(p, g, h.value, t), y === l || y === u) return y };
    t.BREAK = l, t.RETURN = u }, function(e, t, n) {
    var o = n(25);
    e.exports = function(e, t, n, r) {
        try {
            return r ? t(o(n)[0], n[1]) : t(n) } catch (t) {
            var i = e.return;
            throw void 0 !== i && o(i.call(e)), t } } }, function(e, t, n) {
    var o = n(35),
        r = n(53)("iterator"),
        i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (o.Array === e || i[r] === e) } }, function(e, t, n) {
    var o = n(96),
        r = n(53)("iterator"),
        i = n(35);
    e.exports = n(20).getIteratorMethod = function(e) {
        if (void 0 != e) return e[r] || e["@@iterator"] || i[o(e)] } }, function(e, t, n) {
    var o = n(25),
        r = n(22),
        i = n(53)("species");
    e.exports = function(e, t) {
        var n, a = o(e).constructor;
        return void 0 === a || void 0 == (n = o(a)[i]) ? t : r(n) } }, function(e, t, n) {
    var o, r, i, a = n(21),
        s = n(104),
        c = n(51),
        l = n(30),
        u = n(19),
        f = u.process,
        d = u.setImmediate,
        A = u.clearImmediate,
        h = u.MessageChannel,
        p = 0,
        y = {},
        v = "onreadystatechange",
        g = function() {
            var e = +this;
            if (y.hasOwnProperty(e)) {
                var t = y[e];
                delete y[e], t() } },
        m = function(e) { g.call(e.data) };
    d && A || (d = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return y[++p] = function() { s("function" == typeof e ? e : Function(e), t) }, o(p), p }, A = function(e) { delete y[e] }, "process" == n(43)(f) ? o = function(e) { f.nextTick(a(g, e, 1)) } : h ? (r = new h, i = r.port2, r.port1.onmessage = m, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(e) { u.postMessage(e + "", "*") }, u.addEventListener("message", m, !1)) : o = v in l("script") ? function(e) { c.appendChild(l("script"))[v] = function() { c.removeChild(this), g.call(e) } } : function(e) { setTimeout(a(g, e, 1), 0) }), e.exports = { set: d, clear: A } }, function(e, t) { e.exports = function(e, t, n) {
        var o = void 0 === n;
        switch (t.length) {
            case 0:
                return o ? e() : e.call(n);
            case 1:
                return o ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]) }
        return e.apply(n, t) } }, function(e, t, n) {
    var o = n(19),
        r = n(103).set,
        i = o.MutationObserver || o.WebKitMutationObserver,
        a = o.process,
        s = o.Promise,
        c = "process" == n(43)(a);
    e.exports = function() {
        var e, t, n, l = function() {
            var o, r;
            for (c && (o = a.domain) && o.exit(); e;) { r = e.fn, e = e.next;
                try { r() } catch (o) {
                    throw e ? n() : t = void 0, o } }
            t = void 0, o && o.enter() };
        if (c) n = function() { a.nextTick(l) };
        else if (i) {
            var u = !0,
                f = document.createTextNode("");
            new i(l).observe(f, { characterData: !0 }), n = function() { f.data = u = !u } } else if (s && s.resolve) {
            var d = s.resolve();
            n = function() { d.then(l) } } else n = function() { r.call(o, l) };
        return function(o) {
            var r = { fn: o, next: void 0 };
            t && (t.next = r), e || (e = r, n()), t = r } } }, function(e, t, n) {
    var o = n(23);
    e.exports = function(e, t, n) {
        for (var r in t) n && e[r] ? e[r] = t[r] : o(e, r, t[r]);
        return e } }, function(e, t, n) { "use strict";
    var o = n(19),
        r = n(20),
        i = n(24),
        a = n(28),
        s = n(53)("species");
    e.exports = function(e) {
        var t = "function" == typeof r[e] ? r[e] : o[e];
        a && t && !t[s] && i.f(t, s, { configurable: !0, get: function() {
                return this } }) } }, function(e, t, n) {
    var o = n(53)("iterator"),
        r = !1;
    try {
        var i = [7][o]();
        i.return = function() { r = !0 }, Array.from(i, function() {
            throw 2 }) } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !r) return !1;
        var n = !1;
        try {
            var i = [7],
                a = i[o]();
            a.next = function() {
                return { done: n = !0 } }, i[o] = function() {
                return a }, e(i) } catch (e) {}
        return n } }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = "data:video/ogg;base64,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",
        o = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==";
    t.OggVideo = n, t.Mp4Video = o }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = ["none", "blur", "brightness", "contrast", "invert", "opacity", "saturate", "sepia", "drop-shadow", "grayscale", "hue-rotate"],
        o = { blur: { modifier: function(e) {
                    return .3 * e }, unit: "px" }, brightness: { modifier: function(e) {
                    return .009 * e + .1 }, unit: "" }, contrast: { modifier: function(e) {
                    return .4 * e + 80 }, unit: "%" }, grayscale: { modifier: function(e) {
                    return e }, unit: "%" }, "hue-rotate": { modifier: function(e) {
                    return 3.6 * e }, unit: "deg" }, invert: { modifier: function(e) {
                    return 1 }, unit: "" }, opacity: { modifier: function(e) {
                    return e }, unit: "%" }, saturate: { modifier: function(e) {
                    return 2 * e }, unit: "%" }, sepia: { modifier: function(e) {
                    return e }, unit: "%" } };
    t.filterOptions = n, t.filterProperties = o }, function(e, t) {
    var n = function(e) {
        var t = { container: e };
        return e.getAttribute("data-config-url") && (t.url = e.getAttribute("data-config-url")), e.getAttribute("data-config-playback-speed") && (t.playbackSpeed = e.getAttribute("data-config-playback-speed")), e.getAttribute("data-config-filter") && (t.filter = e.getAttribute("data-config-filter")), e.getAttribute("data-config-filter-strength") && (t.filterStrength = e.getAttribute("data-config-filter-strength")), t };
    e.exports = n }, function(e, t, n) {
    var o = n(2),
        r = n(113),
        i = n(88);
    Y.use("node", function() { window.Singleton.create({ ready: function() { this._touch = Y.one(".touch-styles"), this.bindUI(), this._touch || (this.folderRedirect(".folder-toggle", "#headerNav"), this.folderRedirect(".folder-toggle", "#footer")), this.folderActive(".folder-toggle", "#mobileNavigation"), this.folderActive(".folder-toggle", "#headerNav"), this.folderActive(".folder-toggle", "#footer"), this.folderNavExpand(".folder-nav-toggle", "#folderNav"), this.folderNavExpand(".category-nav-toggle", "#categoryNav") }, bindUI: function() { this.dataToggleBody(), this.dataToggleEl(), this.dataLightbox(), this.scrollAnchors(), Y.one(window).on("resize", this.syncUI, this) }, syncUI: function() { o(function() { r() }, 100, this) }, folderNavExpand: function(e, t) {
                var n = Y.one(t);
                n && n.one(e).on("click", function() { n.toggleClass("expanded") }) }, folderActive: function(e, t) { e = e || ".folder-toggle", t = t || "body";
                var n = Y.all(t);
                n.size() > 0 && n.each(function(t) { t.delegate("click", function(e) { e.preventDefault(), e.currentTarget.toggleClass("active"), e.currentTarget.ancestor(".folder").siblings(".folder").each(function(e) { e.one(".folder-toggle").removeClass("active") }) }, e) }) }, folderRedirect: function(e, t) { e = e || ".folder-toggle", t = t || "body";
                var n = Y.all(t);
                n.size() > 0 && n.each(function(t) { t.delegate("click", function(e) { e.preventDefault();
                        var t = e.currentTarget.getData("href");
                        t ? window.location = t : console.warn("folderRedirect: You must add a data-href attribute to the label.") }, e) }) }, dataLightbox: function() {
                var e = {};
                Y.all("[data-lightbox]").each(function(t) {
                    var n = t.getAttribute("data-lightbox");
                    e[n] = e[n] || [], e[n].push({ content: t, meta: t.getAttribute("alt") }), t.on("click", function(o) { o.halt(), new Y.Squarespace.Lightbox2({ set: e[n], currentSetIndex: Y.all("[data-lightbox]").indexOf(t), controls: { previous: !0, next: !0 } }).render() }) }) }, dataToggleBody: function() { Y.one("body").delegate("click", function(e) { Y.one("body").toggleClass(e.currentTarget.getData("toggle-body")) }, "[data-toggle-body]") }, dataToggleEl: function() { Y.one("body").delegate("click", function(e) {
                    var t = e.currentTarget;
                    t.toggleClass(t.getData("toggle")) }, "[data-toggle]") }, scrollAnchors: function() {
                if (!history.pushState) return !1;
                var e = 'a[href*="#"]';
                Y.one("body").delegate("click", function(e) {
                    var t = e.currentTarget.get("href"),
                        n = this._getSamePageHash(t);
                    n && Y.one(n) && (e.halt(), Y.one("#mobileNavToggle") && Y.one("#mobileNavToggle").set("checked", !1).simulate("change"), this.smoothScrollTo(Y.one(n).getY()), history.pushState({}, n, n)) }, e, this) }, _getSamePageHash: function(e) {
                var e = new i(e),
                    t = new i(window.location.href);
                return e.host !== t.host || e.pathname !== t.pathname || "" === e.hash ? null : e.hash }, smoothScrollTo: function(e) {
                if (!Y.Lang.isNumber(e)) try { e = parseInt(e) } catch (e) {
                    return console.warn("helpers.js: scrollTo was passed an invalid argument."), !1 }
                var t = new Y.Anim({ node: Y.one(Y.UA.gecko || Y.UA.ie || navigator.userAgent.match(/Trident.*rv.11\./) ? "html" : "body"), to: { scrollTop: e }, duration: .4, easing: "easeOut" });
                t.run(), t.on("end", function() { t.destroy() }) } }) }) }, function(e, t) {
    function n(e) { e = e || "img[data-src]", Y.one(e) && Y.all(e).each(function(e) { ImageLoader.load(e) }) }
    e.exports = n }, function(e, t, n) {
    var o = n(2),
        r = n(113),
        i = null !== document.documentElement.getAttribute("data-authenticated-account");
    i && Y.use("node", function(e) { window.Singleton.create({ ready: function() { this.bindUI() }, bindUI: function() { e.Global.on("tweak:change", function(t) { t.config && "Site Navigation" === t.config.category ? e.one("#mobileNavToggle").set("checked", !0) : e.one("#mobileNavToggle").set("checked", !1), "transparent-header" === t.getName() && o(function() { r() }, 100, this) });
                var t = e.one("body.transparent-header");
                t && (t = t.getDOMNode(), ["sqs-stacked-items-dom-deleted", "sqs-stacked-items-dom-reorder"].forEach(function(n) { e.config.win.addEventListener(n, function(e) {
                        var n = t.querySelector("#content > div");
                        n.querySelector(".banner-thumbnail-wrapper") || n.querySelector(".promoted-gallery-wrapper").children.length ? t.classList.add("has-banner-image") : t.classList.remove("has-banner-image") }.bind(this)) }.bind(this))) } }) }) }]);
