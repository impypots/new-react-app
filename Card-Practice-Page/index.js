let card1 = document.querySelector("#graycard1");
let card2 = document.querySelector("#graycard2");
let card3 = document.querySelector("#graycard3");
let infotab = document.querySelectorAll(".infotab");
let infotableft = document.querySelector(".infotableft")

card1.addEventListener("click", () => {
    if (infotab[0].style.transform === 'scaleX(0)') {
        infotab[0].style.transform = 'scaleX(1)';
        infotab[1].style.transform = 'scaleX(0)';
        infotableft.style.transform = 'scaleX(0)';
    } else {
        infotab[0].style.transform = 'scaleX(0)';
    }
}, false)

card2.addEventListener("click", () => {
    if (infotab[1].style.transform === 'scaleX(0)') {
        infotab[1].style.transform = 'scaleX(1)';
        infotab[0].style.transform = 'scaleX(0)';
        infotableft.style.transform = 'scaleX(0)';
    } else {
        infotab[1].style.transform = 'scaleX(0)';
    }
}, false)

card3.addEventListener("click", () => {
    if (infotableft.style.transform === 'scaleX(0)') {
        infotableft.style.transform = 'scaleX(1)';
        infotab[0].style.transform = 'scaleX(0)';
        infotab[1].style.transform = 'scaleX(0)';
    } else {
        infotableft.style.transform = 'scaleX(0)';
    }
}, false)


// infotab[0].style.transform === 'scaleX(0)' ? infotab[0].style.transform = 'scaleX(1)': infotab[0].style.transform = 'scaleX(0)';