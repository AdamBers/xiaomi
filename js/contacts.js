document.getElementById("myContacts").addEventListener("input", function (e) {
    if (document.getElementById("name").value.length > 0 &&
        document.getElementById("email").value.length > 0 &&
        document.getElementById("privacy").checked == true &&
        document.getElementById("message").checked == true
    ) {
        document.getElementById("send").classList.remove("hidden")
    } else {
        document.getElementById("send").classList.add("hidden")
    }
})

document.getElementById("name").addEventListener("change", function () {
    document.getElementById("name").blur()
    document.getElementById("name").inputMode = "none"
    document.getElementById("name").inputMode = "text"
})

document.getElementById("email").addEventListener("change", function () {
    document.getElementById("email").blur()
    document.getElementById("email").inputMode = "none"
    document.getElementById("email").inputMode = "text"
})

function checkBoxHandler() {
    console.log("defined")
}