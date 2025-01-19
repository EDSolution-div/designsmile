const backTop = document.querySelector(".back-top");

window.addEventListener("scroll",  ( ) => {
    if (window.pageYOffset > 100) {
        backTop.classList.add("active");
    } else {
        backTop.classList.remove("active");
    }
});