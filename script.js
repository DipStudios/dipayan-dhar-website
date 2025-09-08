// Tab switching functionality
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active state
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Add active state to clicked tab
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

const path = window.location.pathname;
const isProjectsPage = path.endsWith("/projects/"); // exact match

console.log("isProjectsPage:", isProjectsPage);

const swiper = new Swiper('.swiper', {
  slidesPerView: isProjectsPage ? 1 : 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  allowTouchMove: false,
  loop: false,
});
