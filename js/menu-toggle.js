const menubnt = document.getElementById("pmenuto");
const menu = document.querySelector(".menu-list");

menubnt.addEventListener("click", function () {
    menu.classList.toggle("active");
});