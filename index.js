const myText = document.getElementById("myText");

myText.addEventListener("mouseover", function () {
    myText.innerHTML = "It`s worth it!";
});

myText.addEventListener("mouseout", function () {
    myText.innerHTML = "Make your bathroom proud today";
});

const elemMobileMenu = document.querySelector(".mobile-menu")
const elemPrimaryNavigation = document.querySelector(".primary-navigation")
const iconHamburger = document.querySelector(".icon-hamburger")
const btnHamburger = document.querySelector(".btn-hamburger")

btnHamburger.addEventListener("click", () => {
    elemPrimaryNavigation.classList.toggle("open");
})





