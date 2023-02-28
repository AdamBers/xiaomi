function goTo(element) {
    setTimeout(function () {
        document.getElementById(element).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }, 600)
}

const range = new RangeTouch('input[type="range"]')

function rangeHandler(e) {
    let inputValue = e.target.value
    if (inputValue > 0) { document.getElementById("initial-range").style.background = "#ED712E" }
    if (inputValue == 0) { document.getElementById("initial-range").style.background = "#ED712E" }

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
    document.getElementById("output").style.left = `calc(${leftPos} - 24px)`
    goTo("q-1")
}

document.getElementById("range").addEventListener("change", (e) => rangeHandler(e))
document.getElementById("range").addEventListener("click", function (e) {
    if (e.target.value == 0) { rangeHandler(e) }
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
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '10' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}


