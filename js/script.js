function goTo(element) {
    setTimeout(function () {
        document.getElementById(element).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }, 600)
}



function rangeHandler(e) {
    console.log("click")
    // e.preventDefault();
    // e.stopPropagation();
    // alert("hello")

    if (e.target.value > 0) {
        document.getElementById("initial-range").style.background = "#ED712E"
    }
    if (e.target.value == 0) {
        document.getElementById("initial-range").style.background = "#898989"
    }

    if (e.target.value == 10) {
        document.getElementById("initial-range-right").style.background = "#ED712E"
    }

    if (e.target.value < 10) {
        document.getElementById("initial-range-right").style.background = "#E7E7E7"
    }

    // document.getElementById("initial-range").style.display = "none"

    // console.log(document.getElementById("knowledge").checked = false)

    document.getElementById("knowledge").checked = false
    document.getElementById("quality").checked = false
    document.getElementById("prices").checked = false
    document.getElementById("atmosphere").checked = false
    document.getElementById("choice").checked = false
    document.getElementById("another").checked = false
    document.getElementById("send").classList.add("hidden")





    setTimeout(function () {
        document.getElementById("knowledge").style.top = document.getElementById("knowledge").labels[0].offsetHeight / 2 + 7 + "px"
        document.getElementById("quality").style.top = document.getElementById("quality").labels[0].offsetHeight / 2 + 7 + "px"
        document.getElementById("prices").style.top = document.getElementById("prices").labels[0].offsetHeight / 2 + 7 + "px"
        document.getElementById("atmosphere").style.top = document.getElementById("atmosphere").labels[0].offsetHeight / 2 + 7 + "px"
        document.getElementById("choice").style.top = document.getElementById("choice").labels[0].offsetHeight / 2 + 7 + "px"
        document.getElementById("another").style.top = document.getElementById("another").labels[0].offsetHeight / 2 + 7 + "px"
    }, 100)


    document.getElementById("output").classList.remove("hidden")
    document.getElementById("q-1").classList.remove("hidden")
    document.getElementById("q-2").classList.remove("hidden")
    document.getElementById("content").classList.remove("hidden")
    if (e.target.value <= 6) {
        document.getElementById("qp-1").classList.remove("hidden")
        document.getElementById("qp-2").classList.add("hidden")
        document.getElementById("qp-3").classList.add("hidden")
    }
    if (e.target.value == 7 || e.target.value == 8) {
        document.getElementById("qp-2").classList.remove("hidden")
        document.getElementById("qp-1").classList.add("hidden")
        document.getElementById("qp-3").classList.add("hidden")
    }
    if (e.target.value == 9 || e.target.value == 10) {
        document.getElementById("qp-3").classList.remove("hidden")
        document.getElementById("qp-2").classList.add("hidden")
        document.getElementById("qp-1").classList.add("hidden")
    }

    let leftPos = e.target.value * 10 + "%"
    document.getElementById("output").style.left = `calc(${leftPos} - 24px)`
    goTo("q-1")
}


document.getElementById("range").addEventListener("input", (e) => rangeHandler(e))
// document.getElementById("range").addEventListener("touchstart", (e) => rangeHandler(e))
// document.getElementById("range").addEventListener("touchmove", (e) => rangeHandler(e))
// document.getElementById("range").addEventListener("touchend", (e) => rangeHandler(e))

document.getElementById("q-1").addEventListener("change", function (e) {
    if (document.querySelector('input[name="grade"]:checked') !== null) {
        document.getElementById("send").classList.remove("hidden")
        goTo("send")
    } else {
        document.getElementById("send").classList.add("hidden")
    }
})

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

document.getElementById("comment1").addEventListener("change", function (e) {
    document.getElementById("comment1").blur()
    document.getElementById("comment1").inputMode = "none"
    document.getElementById("comment1").inputMode = "text"
})



// document.getElementById("range").addEventListener("touchend", (e) => rangeHandler(e))

