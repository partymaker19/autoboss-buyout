function buttonAnimation() {
  const button = document.querySelector(".btn");
  const container = document.querySelector(".container");

  function deleteCircleIcon(circle) {
    circle.remove();
  }

  function createCircleIcon(posX, posY) {
    const circle = document.createElement("div");

    circle.classList.add("circle");
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;

    container.appendChild(circle);

    setTimeout(() => {
      deleteCircleIcon(circle);
    }, 1000);
  }

  function handleButtonClick(event) {
    const offset = event.target.getBoundingClientRect();

    const posX = event.pageX - offset.left;
    const posY = event.pageY - offset.top;

    createCircleIcon(posX, posY);
  }

  button.addEventListener("mousedown", handleButtonClick);
}

buttonAnimation();

let fields = document.querySelectorAll(".field__file");
Array.prototype.forEach.call(fields, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector(".field__file-fake").innerText;

  input.addEventListener("change", function (e) {
    let countFiles = "";
    if (this.files && this.files.length >= 1) countFiles = this.files.length;

    if (countFiles)
      label.querySelector(".field__file-fake").innerText =
        "Выбрано файлов: " + countFiles;
    else label.querySelector(".field__file-fake").innerText = labelVal;
  });
});

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".navigation");
  const menuCloseItem = document.querySelector(".header_nav_close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header_nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header_nav_active");
  });
})();


