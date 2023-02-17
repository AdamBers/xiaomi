document.getElementById("myContacts").addEventListener("input", function (e) {
    console.log(document.getElementById("name").value.length)
    console.log(document.getElementById("email").value.length)
    console.log(document.getElementById("privacy").checked)
    console.log(document.getElementById("message").checked)


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