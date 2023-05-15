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

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

})


window.addEventListener("scroll", function () {
    var navigation = document.querySelector(".navigation");
    navigation.classList.toggle("sticky", window.scrollY > 0);

})

window.addEventListener("scroll", function () {
    var primary_navigation = document.querySelector(".primary-navigation");
    primary_navigation.classList.toggle("sticky", window.scrollY > 0);

})




