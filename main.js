let icon = document.querySelector("#icon");
let list = document.querySelector("#list")

icon.addEventListener('click', () => {
    list.classList.toggle('show');
  });
icon.mouseup = function () {
    list.classList.remove('show');
}
icon.addEventListener('click', () => {
    list.classList.toggle('hide');
  });
