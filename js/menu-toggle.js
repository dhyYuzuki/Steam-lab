const menubtn = document.getElementById("pmenuto");
const menu = document.querySelector(".menu-list");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
