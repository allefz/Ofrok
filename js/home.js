const show = document.querySelector("#show");

show.addEventListener("click", function (e) {
    e.preventDefault();

    const number = document.querySelector("#number");

    let value = number.value;

    let skull = '☘';

    let warning = document.querySelector("span");

    if (value <= 50 && value > 0) {
        for (let i = 0; i < value - 1; i++) {
            skull = skull + "☘"
        }   

        document.querySelector("h2").innerHTML = skull;
        warning.innerHTML = ""
        number.style.boxShadow = "1px -1px 7px 7px #39d313";
    }
    else {
        warning.innerHTML = "O número deve ser entre 0 e 50"
        number.style.boxShadow = "1px -1px 7px 7px #da3636";
    }

})
