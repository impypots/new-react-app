let card1 = document.querySelector("#graycard1");
let infotab1 = document.querySelector(".infotab")

card1.addEventListener("click", () => {
    infotab1.style.display === 'none' ? infotab1.style.display = 'block' : infotab1.style.display = 'none';
}, false)