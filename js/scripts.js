window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        let userOver18 = document.getElementById("adultInfo");
        userOver18.setAttribute("class", "hidden");
        let userUnder18 = document.getElementById("minorInfo");
        userUnder18.setAttribute("class", "hidden");

        const age = parseInt(document.querySelector("input#userAge").value);

        if (age >= 18) {
            userOver18.removeAttribute("class");
        } else {
            userUnder18.removeAttribute("class");

        }
    };
}
