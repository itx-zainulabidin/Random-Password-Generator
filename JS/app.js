// HTML ELements
const input = document.querySelector(".input");
const btn = document.querySelector('.btn');
const passwordDiv = document.querySelector(".password-div");

// source
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const lettersUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const $symbols = ['!', '$', '&'];


function password(letters, lettersUpperCase, numbers, symbols) {
    let str = "";
    str += lettersUpperCase[randomNumber(26)]
    str += letters[randomNumber(26)]
    str += symbols[randomNumber(3)]
    str += numbers[randomNumber(9)]
    str += lettersUpperCase[randomNumber(26)]
    str += letters[randomNumber(26)]
    str += numbers[randomNumber(9)]
    str += letters[randomNumber(26)]
    return str;
}
function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

btn.addEventListener("click", () => {
    input.value = password(letters, lettersUpperCase, numbers, $symbols)
    navigator.clipboard.writeText(input.value)
    passwordDiv.classList.add("active");
    setTimeout(() => {
        passwordDiv.classList.remove("active");
    }, 1000);
})

