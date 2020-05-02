const agree = document.querySelector(".agree");
const popUp = document.querySelector(".pop-up");
const exitPopUp = document.querySelector(".cancel");
const agreeBox = document.querySelector('#agree');
const enter = document.querySelector('.enter');

agree.addEventListener('click', () => {
    event.stopPropagation();
    popUp.style.display = "block";
});

exitPopUp.addEventListener('click', () => {
    popUp.style.display = "none";
});

agreeBox.addEventListener('change', () => {
    if(agreeBox.checked) {
        enter.style.pointerEvents = "all";
    } else {
        enter.style.pointerEvents = "none";
    }
})
