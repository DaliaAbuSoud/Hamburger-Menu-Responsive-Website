var hamburgrMenu = document.querySelector(".menu-button");

var menuWrapper = document.querySelector(".menu-wrapper");

hamburgrMenu.addEventListener("click", function(event) {
    menuWrapper.classList.add("on");
});

var closeButton = document.querySelector("#x");

closeButton.addEventListener("click", function(event) {
    menuWrapper.classList.remove("on");
});
