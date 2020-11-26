AOS.init();

document.addEventListener("scroll", function () {
  const startHeight = document.querySelector(".portfolio_intro").offsetTop;
  const scrollTop = window.scrollY;
  const navbar = document.querySelector("#navbar");

  if (scrollTop > startHeight) {
    navbar.classList.add("custom-navbar");
  } else {
    navbar.classList.remove("custom-navbar");
  }
});

document
  .querySelector(".main-circle")
  .addEventListener("mouseover", function () {
    for (circle of document.querySelectorAll(".skills-circle")) {
      circle.style.opacity = 1;
    }
  });

// document.querySelector('.main-circle').addEventListener('mouseout', function(){
//     for(circle of document.querySelectorAll('.skills-circle')){
//         circle.style.opacity = 0;
//     }
// });

document.querySelector("#scroll").addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: document.querySelector("#work_so_far").offsetTop,
  });
});

