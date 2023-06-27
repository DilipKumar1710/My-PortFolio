const toggleBtn = document.querySelector(".toggle-btn");
const dropDownBox = document.querySelector(".drop_down_box");
const toggleIcon = document.querySelector(".toggle-btn i");

    toggleBtn.onclick = function () {
    dropDownBox.classList.toggle('open');

    const isOpen = dropDownBox.classList.contains('open');

    toggleIcon.classList = isOpen ?
    "fa-solid fa-xmark" :
    "fa-solid fa-bars"
}