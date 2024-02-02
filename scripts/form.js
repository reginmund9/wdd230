const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

//password verification
const key1 = document.querySelector("#password");
const key2 = document.querySelector("#confirm_password");

const message = document.querySelector("#messageform");

key2.addEventListener("focusout", checkSame);

function checkSame() {
    if (key1.value !== key2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        key2.style.backgroundColor = "#fff0f3";
        key2.value = "";
        key2.focus();
    } else {
        message.style.display ="none";
        key2.style.backgroundColor = "rgba(0,0,0,0.2)";
        key2.style.color = "#000";
    }
}