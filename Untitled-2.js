/*!searchdetail:widget/ui/controls/imagedetail/imagedetail.js*/
define("searchdetail:widget/ui/controls/imagedetail/imagedetail", function (t) {
    function
        e(t, e) {
        this._pageModel = e.pageModel, this.$pnl = i(t), this.$img = this.$pnl.find("img"), this.$desc = i(null), this._imgInited = !0, this._showFirstObjUrl = !0, this.dutuAnchor = new
            h, this.timeout = null, this.mouseWheelFlag = !0, this.textLinkAd = new r(this.$pnl.find(".img-wrapper .text-link-ads")), i('<div
    class= "currentImg-adtext" style = "display:none" >
                <p></p>
</div > ').insertAfter(".currentImg"),this.fbLeftBottomButton=new
n, this.$img.length ? (alog && alog("speed.set", "c_imginsert", +new
                    Date), alog.fire && alog.fire("mark")) : (this.$img = i("<img />"), document.body.appendChild(this.$img[0]), this._imgInited = !1, this._showFirstObjUrl = !1), this.setJsaction(), this.opts = i.extend({ minScale: .1, maxScale: 10, descTpl: "" }, e), this.data = {}, this.scale = 1, this.dragSupport = null, this.wheelZoomable = !1} var
                        i = t("common:widget/ui/base/base"), s = (t("common:widget/ui/utils/utils"), t("common:widget/ui/base/events")), a = t("searchdetail:widget/ui/utils/lib"), o = t("searchdetail:widget/ui/controls/imagedetail/dragsupport"), h = t("searchdetail:widget/ui/controls/imagedetail/dutuanchor/dutuanchor"), r = t("searchdetail:widget/ui/controls/imagedetail/textlinkad/textlinkad"), n = t("searchdetail:widget/ui/controls/card/nsAdII_leftBottomButton/leftBottomButton"), l = t("searchdetail:widget/ui/statistic/avatar-statistic"), g = t("searchdetail:widget/ui/statistic/statistic-core"); return
    i.extend(e.prototype, s, {
        errImgData: { bigImgUrl: "//img0.bdstatic.com/img/image/error.gif", width: 318, height: 73 }, setOptions: function (t) { i.extend(this.opts, t) }, init: function () {
            var
            t = this; this.$img.length && this.dutuAnchor.init(this.$pnl, this.$img); /macintosh|mac os
            x / i.test(navigator.userAgent); !i.browser.mozilla || "onmousewheel" in
                document.body ? this.$pnl.on("mousewheel", this._onMouseWheelHandler.bind(this)) : this.$pnl.on("DOMMouseScroll", this._onMouseWheelHandler.bind(this)), t.group = t.opts.pageModel && t.opts.pageModel.getAbTestGroup(), t.group && "prevnextarrow" == t.group ? (t.$pnl.on("mouseleave", function () {
                    i(this).parent("#container").removeClass("left
right")}),t.$pnl.children(".img - wrapper").on("mousemove",function(e){var
s = e || window.event, a = i(t.$img).width(), o = i(t.$img).offset().left, h = s.pageX, r = (s.pageY, (h - o) / a), n = (i(this).parent().siblings(".img-prev"), i(this).parent().siblings(".img-next"), ""); .3 > r ? (i(this).removeClass("rightArrow").addClass("leftArrow"), i(this).closest("#container").removeClass("right").addClass("left"), i(this).closest("#container").find(".img-next").css("visibility", "hidden"), i(this).closest("#container").find(".img-prev").css("visibility", "visible"), n = "点击上翻") : (i(this).removeClass("leftArrow").addClass("rightArrow"), i(this).closest("#container").removeClass("left").addClass("right"), i(this).closest("#container").find(".img-prev").css("visibility", "hidden"), i(this).closest("#container").find(".img-next").css("visibility", "visible"), n = "点击下翻"), t.$img.attr("title", t.wheelZoomable ? "可拖动" : n)
                })) : (t.$pnl.find("img").css("cursor", "pointer"), this.$img.on("click", function () { if (t.data && (!t.dragSupport || !t.dragSupport.enabled)) { if (!t.data.fromURL || "http://" === t.data.fromURL) return; window.open(a.getRedirectUrl(t.data.fromURL, t.data.objURL, t.data.replaceUrl)), t.dispatchEvent("linkout") } 1 === +t.data.adType && l(t.data.adid, "clk") })), this.opts.descTpl && (this.$desc = i(this.opts.descTpl)), this.on("scaleChanged", function () { t.dutuAnchor.refreshPos(t.scale), t._repositionTextLinkAd(), t.fbLeftBottomButton.resize(t.$img) }), this.textLinkAd.on(r.EventType.AD_UPDATE, function () { t.autoScale() })
        }, _initImg: function () {
            this.opts.descTpl && this.$desc.appendTo(this.$pnl); var
                t = this; this.$img.get(0).onload = function () { t._imgloaded() }, this.$img.appendTo(this.$pnl), this._imgInited = !0, this.dutuAnchor.init(this.$pnl, this.$img), this.textLinkAd.reRender(), alog && alog("speed.set", "c_imginsert", +new
                    Date), alog.fire && alog.fire("mark"), a.logTime("imginsert", window.pageStartTime, (new
                        Date).getTime())
        }, _imgloaded: function () {
        alog && alog("speed.set", "c_firstPageComplete", +new
            Date), alog.fire && alog.fire("mark"), this.$img.get(0).onload = null
        }, update: function (t, e) { this.updateData(e.get("imgData"), e.get("rootImg"), e) }, updateData: function (t, e, s) {
        this.group = t.group; var
            o = t.key != this.data.key; if (o || t.bigImgUrl != this.data.bigImgUrl) {
            e = e || t, this.setDraggable(!1); var
                h = this.scale; if (o && (this.scale = 1), this._imgInited && this.$img.attr("src") != t.bigImgUrl) {
                    var
                    r = this.$img[0]; r.onload = r.onerror = null
                } if (t && t.bigImgUrl) {
                    var n = !0; i("#dutu-anchor-wrapper").hide(); var
                        l = this._showImg(t, e, s); l || (this.scale = h, this.dispatchEvent("scaleChanged", { scale: this.scale }))
                } else
                    this._showThumbImg(t); if (this._imgInited || this._initImg(), t.bigImgUrl == t.objURL) {
                        if (this._showFirstObjUrl && alog) {
                            var
                            d = (new
                                Date).getTime() - g.imgViewStart; alog && alog("speed.set", "p_switchimgobjshow", d), alog.fire && alog.fire("mark"), o && (alog && alog("speed.set", "p_switchimgthumbshow", d), alog.fire && alog.fire("mark"))
                        } this._showFirstObjUrl || (this._showFirstObjUrl = !0, alog && alog("speed.set", "c_imgobjshow", +new
                            Date), alog.fire && alog.fire("mark"), a.logTime("imgobjshow", window.pageStartTime, (new Date).getTime()))
                    } else {
                        var c = (new
                            Date).getTime() - g.imgViewStart; this._showFirstObjUrl && alog && alog("speed.set", "p_switchimgthumbshow", c), alog.fire && alog.fire("mark")
                } !!n || this.dutuAnchor.update(t, this.scale, s)
            }
        }, update_dutuAnchor: function (t, e) { this.dutuAnchor.update(t, this.scale, e, !0) }, _showImg: function (t, e, s) { { var a = this, o = !1, h = (i(".img-wrapper .currentImg").length > 0, new i.Deferred, t.bigImgUrl), r = t.objURL; t.replaceUrl } e = e || {}; var n = this.data; this.data = i.extend({}, t), this.$img.get(0).onload = this.$img.get(0).onerror = function () { a.$img.get(0).onload = a.$img.get(0).onerror = null, a.$img.show(), o = !0, i("#dutu-anchor-wrapper").show(), a.dutuAnchor.update(t, a.scale, s), a._repositionTextLinkAd(), a.fbLeftBottomButton.resize(a.$img) }; var l = i("#hdFirstImgObj"), g = !1; 220 === l.width() && 159 === l.height() && (g = !0), l.attr("data-ispreload") && "1" === i(".currentImg").attr("data-ispreload") && !g && (t.bigImgUrl = l.attr("src")); var d = new Image; return d.onload = function () { a.data.__idx_ === t.__idx_ && a.$img.attr("src") !== r && a.$img.attr("src", h) }, d.src = h, a.$img.height(), this.$desc.text(e.setTitle), e.setTitle ? this.$desc.show() : this.$desc.hide(), n.width != t.width || n.height != t.height ? (n.width && !o && a.$img.hide(), a.autoScale(), !0) : (a.$img.show(), o = !1, !1) }, _showThumbImg: function (t) { this.data = i.extend({}, t); var e = this.$img[0]; if (this.$img.attr("src") == t.bakUrl) this.$img.css({ width: "auto", height: "auto" }), this._thumbLoaded(t, e.offsetWidth, e.offsetHeight); else { var s = this; e.onload = function () { s._thumbLoaded(t, e.offsetWidth, e.offsetHeight) }, e.onerror = function () { s._thumbLoaded(t, 0, 0) }, this.$img.attr("src", t.bakUrl).css({ width: "auto", height: "auto" }) } }, _thumbLoaded: function (t, e, i) {
            var
            s = this.$img[0]; if (s.onload = s.onerror = null, this.data.key == t.key) {
                var
                a = { key: t.key, bigImgUrl: t.bakUrl, width: e, height: i }; 0 >= e && (a.width = this.errImgData.width, a.height = this.errImgData.height, this.$img.attr("src", this.errImgData.bigImgUrl)), this.data = a, this._updateImageStyle(this.$img, { width: a.width, height: a.height }), this.autoScale()
            }
        }, resetSize: function (t, e) { this.wheelZoomable || this.autoScale(t, e) }, autoScale: function (t, e) {
        t = t || this.getPnlWidth(), e = e || this.getPnlHeight(); var
            s = function (i, s) { return { top: Math.floor((e - s) / 2), left: Math.floor((t - i) / 2) } }, a = this.data.width, o = this.data.height; t >= a && e >= o || (t / e > a / o ? (a = a * e / o, o = e) : (o = o * t / a, a = t)); var
                h = s(a, o), r = this._getReservedHeight(); r.reserve && (h.top = h.top + r.topHeight), this._updateImageStyle(this.$img, i.extend({ width: a, height: o }, h)), this._updateDescPos(t, e, a, o, h), this.scale = a / this.data.width, this.dispatchEvent("scaleChanged", { scale: this.scale })
        }, _updateImageStyle: function (t, e) {
            var
            s = 2, a = {}, o = {}; if (i.isNumeric(e.left) || i.isNumeric(e.top)) {
                var
                h = { left: parseFloat(t.css("left")) || 0, top: parseFloat(t.css("top")) || 0 }, r = (i.isNumeric(e.left) ? Math.abs(e.left - h.left) : 0) + (i.isNumeric(e.top) ? Math.abs(e.top - h.top) : 0); r >= s && (a.left = (i.isNumeric(e.left) ? e.left : h.left) + "px", o.left = parseInt(a.left, 0) + "px", a.top = (i.isNumeric(e.top) ? e.top : h.top) + "px", o.top = a.top)
            } e.width >= 0 && (a.width = e.width + "px", o.width = a.width), e.height >= 0 && (a.height = e.height + "px"), t.css(a), o.top && (o.top = parseInt(o.top, 0) + parseInt(i(".currentImg").height(), 0) - 30 + "px"), o.width && parseInt(o.width, 0) > parseInt(i("#srcPic").width(), 0) && (o.width = i("#srcPic").width(), o.left = "0"), a.height && parseInt(a.height, 0) > parseInt(i("#srcPic").height(), 0) && (o.top = parseInt(i("#srcPic").height(), 0) - 30 + "px"), i(".currentImg-adtext").css(o)
        }, _getImagePosition: function (t) { return { left: parseFloat(t.css("left")) || 0, top: parseFloat(t.css("top")) || 0 } }, _getReservedHeight: function () {
            var
            t = this.textLinkAd.getHeight(); return { reserve: 0 !== this._pageModel.get("firstPic") && !!t, topHeight: 48, bottomHeight: t }
        }, _updateDescPos: function (t, e, i, s, a) {
            var
            o = !!this.$desc.text(); if (o) if (200 > i || 100 > s) this.$desc.hide(); else {
                this.$desc.show(); var
                    h = Math.min(t, i + Math.min(a.left, 0)), r = Math.max(0, a.left), n = Math.min(a.top + s, e) - (this.$desc.height() || 32); this.$desc.width(h).css({ top: n, left: r })
            }
        }, zoomChange: function (t) { this.zoom(t) }, zoom: function (t, e) {
            var
            i = t
                < this.opts.minScale; if (t = Math.max(this.opts.minScale, Math.min(t, this.opts.maxScale)), t && t != this.scale) {
                    e = e || this.getZoomCenter(); var
                        s = this.$img, a = this.data.width, o = this.data.height, h = s.width(), r = s.height(), n = this.getPnlWidth(), l = this.getPnlHeight(), g = a * t, d = o * t, c = 100, m = this._getImagePosition(s), p = { left: g / h * (m.left - e.x) + e.x, top: d / r * (m.top - e.y) + e.y }; p.left + g
                            < c ? p.left = c - g : p.left > n - c && (p.left = n - c), p.top + d < c ? p.top = c - d : p.top >
                                l - c && (p.top = l - c), this._updateImageStyle(s, { width: g, height: d, top: p.top, left: p.left }), this.scale = t, this._updateDescPos(n, l, g, d, p), this.dispatchEvent("scaleChanged", { scale: this.scale }), i || this.setDraggable(!0)
                }
        }, getPnlWidth: function () {
            return
            this.$pnl.width()
        }, getPnlHeight: function () {
            var t = this.$pnl.height(), e = this._getReservedHeight(); return
            t -= e.reserve ? e.topHeight + e.bottomHeight : e.bottomHeight
        }, getZoomCenter: function () {
            var
            t = this.$img, e = this._getImagePosition(t), i = e.left + t.width() / 2, s = e.top + t.height() / 2; return { x: i, y: s }
        }, setDraggable: function (t) {
        this.wheelZoomable = t; var
            e = this; if (t && !this.dragSupport && (this.dragSupport = e.group && "prevnextarrow" == e.group ? new
                o(this.$pnl, this.$img, { cursor: "" }) : new
                    o(this.$pnl, this.$img), this.dragSupport.on("startMove", function () { e.dutuAnchor.$element.addClass("hide"), e.$desc.hide() }), e.group && "prevnextarrow" == e.group && this.dragSupport.on("ingMove", function () {
                        i(e.$pnl).find(".img-wrapper").addClass("dragging"), i(e.$img).css("cursor", "url(//img0.bdstatic.com/img/image/grabhand.cur),
        move")}),this.dragSupport.on("endMove",function(){e.dutuAnchor.$element.removeClass("hide"),e.dutuAnchor.refreshPos(e.scale);var
        t = !!e.$desc.text(); t && e._updateDescPos(e.getPnlWidth(), e.getPnlHeight(), e.$img.width(), e.$img.height(), e.$img.position()), e.group && "prevnextarrow" == e.group && setTimeout(function () { i(e.$pnl).find(".img-wrapper").removeClass("dragging"), i(e.$img).css("cursor", "") }, 0)
                    })), this.dragSupport && (t ? this.dragSupport.enable() : this.dragSupport.disable()), e.group && "prevnextarrow" == e.group) {
                        var
                        s = ""; s = this.$pnl.find(".img-wrapper").hasClass("leftArrow") ? "点击上翻" : this.$pnl.find(".img-wrapper").hasClass("rightArrow") && "点击下翻", this.$img.attr("title", t ? "可拖动" : s)
            } else
                this.$img.attr("title", t ? "可拖动" : e.data.fromURL ? "点击查看源网页" : ""), !t && this.$img.css("cursor", e.data.fromURL ? "pointer" : "")
        }, setJsaction: function () { this.$img.attr("log-rightclick", "p=5.102") }, _onMouseWheelHandler: function (t) {
            var
            e = this, i = /macintosh|mac os x/i.test(navigator.userAgent); t = t.originalEvent || t || window.event; var
                s = Math.abs(t.deltaY), a = /^([0-9])[0-9]*(\\.\\w*)?$/; if (window.samplekey.match("UI_PC_MOUSEWHEEL:1") && i && a.test(s) || window.samplekey.match("UI_PC_MOUSEWHEEL:1") && !i && !a.test(s)) {
                    var
                    o = i ? 45 : 100; this.mouseWheelFlag && (e.wheelZoomable ? e.processWheelZoom(t) : e._processWheelSwitch(t), t.preventDefault && t.preventDefault(), t.returnValue = !1, this.mouseWheelFlag = !1), clearTimeout(this.timeout), this.timeout = setTimeout(function () { e.mouseWheelFlag = !0 }, o)
                } else
                e.wheelZoomable ? e.processWheelZoom(t) : e._processWheelSwitch(t), t.preventDefault && t.preventDefault(), t.returnValue = !1
        }, throttle: function (t, e, i) {
            var
            s = !1; return i || (i = {}), function () {
                var
                a = this, o = arguments; s || (i.leading !== !1 && t.apply(a, o), s = !0, setTimeout(function () { i.trailing !== !1 && t.apply(a, o), s = !1 }, e))
            }
        }, _processWheelSwitch: function (t) {
            var
            e = 0; t.wheelDelta ? e = t.wheelDelta / 240 : t.detail && (e = -t.detail / 6), e && e > 0 ? this.dispatchEvent("wheelPrev") : e && 0 > e && this.dispatchEvent("wheelNext")
        }, processWheelZoom: function (t) {
            var
            e = t.clientX - 14, i = t.clientY - 47, s = t.wheelDelta || -1 * t.detail, a = .25 * (s > 0 ? 1 : -1); this.zoom((1 + a) * this.scale, { x: e, y: i })
        }, _repositionTextLinkAd: function () {
            if (this.textLinkAd.isShow()) {
                var
                t = "none" === this.$img.css("display"); t && this.$img.show(); var
                    e = this.$img.position(); e.left = e.left + (this.$img.width() / 2 - this.$pnl.find(".img-wrapper
                        .text - link - ads").width()/2),this.textLinkAd.resetPosition({left:e.left,top:e.top,width:this.$img.width(),height:this.$img.height()}),t&&this.$img.hide()}}}),e});
        ;