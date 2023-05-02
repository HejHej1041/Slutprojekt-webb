const myText = document.getElementById("myText");

myText.addEventListener("mouseover", function () {
    myText.innerHTML = "It`s worth it!";
});

myText.addEventListener("mouseout", function () {
    myText.innerHTML = "Make your bathroom proud today";
});
