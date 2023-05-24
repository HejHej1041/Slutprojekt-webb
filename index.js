window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 0);

})

window.addEventListener("scroll", function () {
    var navigation = document.querySelector(".navigation");
    navigation.classList.toggle("scroll", window.scrollY > 0);

})

window.addEventListener("scroll", function () {
    var primary_navigation = document.querySelector(".primary-navigation");
    primary_navigation.classList.toggle("scroll", window.scrollY > 0);

})




