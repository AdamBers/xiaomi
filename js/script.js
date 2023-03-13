!function () { "use strict"; function o() { var o = window, t = document; if (!("scrollBehavior" in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) { var l, e = o.HTMLElement || o.Element, r = 468, i = { scroll: o.scroll || o.scrollTo, scrollBy: o.scrollBy, elementScroll: e.prototype.scroll || n, scrollIntoView: e.prototype.scrollIntoView }, s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now, c = (l = o.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0); o.scroll = o.scrollTo = function () { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? h.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : i.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset)) }, o.scrollBy = function () { void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset))) }, e.prototype.scroll = e.prototype.scrollTo = function () { if (void 0 !== arguments[0]) if (!0 !== f(arguments[0])) { var o = arguments[0].left, t = arguments[0].top; h.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t) } else { if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted"); i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop) } }, e.prototype.scrollBy = function () { void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop)) }, e.prototype.scrollIntoView = function () { if (!0 !== f(arguments[0])) { var l = function (o) { for (; o !== t.body && !1 === (e = p(l = o, "Y") && a(l, "Y"), r = p(l, "X") && a(l, "X"), e || r);)o = o.parentNode || o.host; var l, e, r; return o }(this), e = l.getBoundingClientRect(), r = this.getBoundingClientRect(); l !== t.body ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top), "fixed" !== o.getComputedStyle(l).position && o.scrollBy({ left: e.left, top: e.top, behavior: "smooth" })) : o.scrollBy({ left: r.left, top: r.top, behavior: "smooth" }) } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]) } } function n(o, t) { this.scrollLeft = o, this.scrollTop = t } function f(o) { if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior) return !0; if ("object" == typeof o && "smooth" === o.behavior) return !1; throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.") } function p(o, t) { return "Y" === t ? o.clientHeight + c < o.scrollHeight : "X" === t ? o.clientWidth + c < o.scrollWidth : void 0 } function a(t, l) { var e = o.getComputedStyle(t, null)["overflow" + l]; return "auto" === e || "scroll" === e } function d(t) { var l, e, i, c, n = (s() - t.startTime) / r; c = n = n > 1 ? 1 : n, l = .5 * (1 - Math.cos(Math.PI * c)), e = t.startX + (t.x - t.startX) * l, i = t.startY + (t.y - t.startY) * l, t.method.call(t.scrollable, e, i), e === t.x && i === t.y || o.requestAnimationFrame(d.bind(o, t)) } function h(l, e, r) { var c, f, p, a, h = s(); l === t.body ? (c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, a = i.scroll) : (c = l, f = l.scrollLeft, p = l.scrollTop, a = n), d({ scrollable: c, method: a, startTime: h, startX: f, startY: p, x: e, y: r }) } } "object" == typeof exports && "undefined" != typeof module ? module.exports = { polyfill: o } : o() }();





function goTo(element) {
    setTimeout(function () {
        document.getElementById(element).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }, 1000)
}

const range = new RangeTouch('input[type="range"]')

document.getElementById("output").addEventListener("click", function (e) {
    document.getElementById("initial-range").style.background = "#ED712E"
    document.getElementById("output").style.backgroundImage = "url('/img/rect_orange.svg')"
    document.getElementById("output").firstChild.style.color = "#fff"
})
document.getElementById("output").addEventListener("touchstart", function () {
    document.getElementById("initial-range").style.background = "#ED712E"
    document.getElementById("output").style.backgroundImage = "url('/img/rect_orange.svg')"
    document.getElementById("output").firstChild.style.color = "#fff"
})

var mleft = "-16px"

function rangeHandler(e) {
    var inputValue = e.target.value



    if (e.target.id == "initial-range") {
        inputValue = 0
        document.getElementById("range").value = 0
        console.log(document.getElementById("range").value)
        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--thumbLeftMargin', mleft);
            e.style.setProperty('--min', e.min == '' ? '0' : e.min);
            e.style.setProperty('--max', e.max == '' ? '10' : e.max);
            e.addEventListener('input', () => e.style.setProperty('--value', e.value));
        }
        document.getElementById("output").firstChild.innerHTML = "0"
    }

    if (e.target.id == "initial-range-right") {
        inputValue = 10
        document.getElementById("range").value = inputValue
        // document.getElementById("range").click()
        console.log(document.getElementById("range").value)
        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--thumbLeftMargin', mleft);
            e.style.setProperty('--min', e.min == '' ? '0' : e.min);
            e.style.setProperty('--max', e.max == '' ? '10' : e.max);
            e.addEventListener('input', () => e.style.setProperty('--value', e.value));
        }
        document.getElementById("output").firstChild.innerHTML = "10"

    }

    mleft = inputValue * 3.2 - 16 + "px"
    // console.log(mleft)

    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
        e.style.setProperty('--thumbLeftMargin', mleft);
    }


    if (inputValue > 8) {
        document.getElementById("myForm").action = "end_2.html"
    }
    if (inputValue < 9) {
        document.getElementById("myForm").action = "contacts.html"
    }


    if (inputValue == 0) {
        // document.getElementById("output").style.marginLeft = "-10px"
    }




    document.getElementById("initial-range").style.background = "#ED712E"
    document.getElementById("output").style.backgroundImage = "url('/img/rect_orange.svg')"
    document.getElementById("output").firstChild.style.color = "#fff"

    if (inputValue == 10) { document.getElementById("initial-range-right").style.background = "#ED712E" }
    if (inputValue < 10) { document.getElementById("initial-range-right").style.background = "#E7E7E7" }

    document.getElementById("knowledge").checked = false
    document.getElementById("quality").checked = false
    document.getElementById("prices").checked = false
    document.getElementById("atmosphere").checked = false
    document.getElementById("choice").checked = false
    document.getElementById("another").checked = false
    document.getElementById("send").classList.add("hidden")

    document.getElementById("output").classList.remove("hidden")
    document.getElementById("q-1").classList.remove("hidden")
    document.getElementById("q-2").classList.remove("hidden")
    document.getElementById("content").classList.remove("hidden")

    if (inputValue <= 6) {
        document.getElementById("qp-1").classList.remove("hidden")
        document.getElementById("qp-2").classList.add("hidden")
        document.getElementById("qp-3").classList.add("hidden")
    }
    if (inputValue == 7 || inputValue == 8) {
        document.getElementById("qp-2").classList.remove("hidden")
        document.getElementById("qp-1").classList.add("hidden")
        document.getElementById("qp-3").classList.add("hidden")
    }
    if (inputValue == 9 || inputValue == 10) {
        document.getElementById("qp-3").classList.remove("hidden")
        document.getElementById("qp-2").classList.add("hidden")
        document.getElementById("qp-1").classList.add("hidden")
    }

    let leftPos = inputValue * 10 + "%"
    document.getElementById("output").style.left = `calc(${leftPos} - 0px)`
    // goTo("q-1")
}




document.getElementById("range").addEventListener("input", (e) => rangeHandler(e))
document.getElementById("range").addEventListener("click", function (e) {
    goTo("q-1")

    if (e.target.value == 0) { rangeHandler(e) }
})
document.getElementById("range").addEventListener("touchend", function (e) {
    goTo("q-1")
})

document.getElementById("q-1").addEventListener("change", function (e) {
    if (document.querySelector('input[name="grade"]:checked') !== null) {
        document.getElementById("send").classList.remove("hidden")
        goTo("send")
    } else {
        document.getElementById("send").classList.add("hidden")
    }
})

document.getElementById("comment1").addEventListener("change", function (e) {
    document.getElementById("comment1").blur()
    document.getElementById("comment1").inputMode = "none"
    document.getElementById("comment1").inputMode = "text"
})



for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--thumbLeftMargin', mleft);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '10' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

