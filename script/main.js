const name = document.querySelector('#name');
const agree = document.querySelector(".agree");
const popUp = document.querySelector(".pop-up");
const exitPopUp = document.querySelector(".cancel");
const agreeBox = document.querySelector('#agree');
const enter = document.querySelector('.enter');

name.addEventListener("keyup", () => {
    enter.disabled = !name.value;
})

agree.addEventListener('click', () => {
    popUp.style.display = "block";
});

exitPopUp.addEventListener('click', () => {
    popUp.style.display = "none";
});

enter.addEventListener('click', (e) => {
    window.location.href = "homepage.html";
    localStorage.setItem("username", name.value);
    e.preventDefault()
})

