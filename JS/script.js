console.log("Welcome");

let button = document.querySelector(".js-button");
let table = document.querySelector(".main__table");
let value = document.querySelector(".main__button--value");

button.addEventListener("click", () => {
    table.classList.toggle("container__dark");
    value.innerText = table.classList.contains("container__dark") ? "jasny" : "ciemny";
});
