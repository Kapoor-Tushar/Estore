const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".login_button");
const submitInfo = document.querySelector(".submit_info");

let curSlide = 0;
let maxSlide = slides.length - 1;

const goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
    // console.log(i, s);
  });
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
const btnLeft = document.querySelector(".slider_btn--left");
const btnRight = document.querySelector(".slider_btn--right");
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;
  if (name == null || name == "") {
    submitInfo.textContent = "Name can't be blank";
    return false;
  } else if (password.length == 0 || password.length < 6) {
    submitInfo.textContent = "Password must be at least 6 characters long.";
    return false;
  }
}
