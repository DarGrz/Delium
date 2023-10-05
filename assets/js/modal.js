const myModal = document.querySelector(".my-modal");
const wrapper = document.getElementById("wrapper");
var executed = false;

// Show Modal after provided time

// const modalTimer = () => {
//   if (localStorage.getItem("modal") === null) {
//     setTimeout(() => {
//       myModal.classList.add("modal-open");
//       body.classList.add("wrapper-blur");
//     }, "10000");
//   }
// };
// modalTimer();

showModalOnScroll = () => {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (
      !executed &&
      Math.ceil(scrolled) >= 2400 &&
      Math.ceil(scrolled) <= 2600
    ) {
      myModal.classList.add("modal-open");
      wrapper.classList.add("wrapper-blur");
      document.body.style.overflow = "hidden";
      executed = true;
    }
  });
};
showModalOnScroll();

// Modal Close Btn
const closeModal = (e) => {
  myModal.classList.remove("modal-open");
  wrapper.classList.remove("wrapper-blur");
  document.body.style.overflow = "scroll";
  // localStorage.setItem("modal", "on");
};
