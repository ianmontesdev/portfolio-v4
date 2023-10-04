const btnSwitch = document
  .querySelector("#btn-switch")
  .addEventListener("click", onSwitch);
const switchHandler = document.querySelector("#switch-handler");
const navBar = document.querySelector("nav");
let isRight = false;

function onSwitch() {
  isRight = !isRight;

  if (isRight) {
    switchHandler.style.left = "27px";
    navBar.style.backgroundColor = "var(--yellow)";
  } else {
    switchHandler.style.left = "3px";
    navBar.style.backgroundColor = "var(--dark)";
  }
  changeView();
}

function changeView() {
  let webContainer = document.querySelector("#web-container");
  let designContainer = document.querySelector("#design-container");
  let navIcons = document.querySelectorAll(".nav-icons");
  if (isRight) {
    webContainer.style.transform = "translateX(100%)";
    designContainer.style.transform = "translateX(0%)";
  } else {
    webContainer.style.transform = "translateX(0%)";
    designContainer.style.transform = "translateX(-100%)";
  }

  navIcons.forEach((icon) => {
    if (isRight) {
      icon.style.color = "var(--dark)";
    } else {
      icon.style.color = "var(--yellow)";
    }
  });

  function openModal(url) {
    if (window.innerWidth >= 1000) {
      let modal = document.querySelector("#modal");
      console.log("hola");
      modal.innerHTML = `
    <div id="content-modal">
      <div id="close-btn" ><i class="fa-solid fa-circle-xmark"></i></div>
      <img class="modal-img" src="${url}" alt="" />
    </div>
    `;
      document
        .querySelector("#close-btn")
        .addEventListener("click", closeModal);
    } else {
      window.open(url);
    }
  }

  function closeModal() {
    let modal = document.querySelector("#modal");
    modal.innerHTML = "";
  }

  document.querySelectorAll(".photo-listener").forEach((photo) => {
    photo.addEventListener("click", function () {
      console.log(photo.getAttribute("src"));
      openModal(photo.getAttribute("src"));
    });
  });
}
