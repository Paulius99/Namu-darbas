const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.3
        }s`;
      }
    });
    //burger Animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

TweenMax.defaultEase = Linear.easeOut;



let buttons = document.querySelectorAll('.price-btn');
let darkContainers = document.querySelectorAll('.darken');

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    darkContainers.forEach((darkContainer) => {
      darkContainer.classList.add('invisible');
      console.log('done');
    });
  });
  button.addEventListener('mouseout', () => {
    darkContainers.forEach((darkContainer) => {
      darkContainer.classList.remove('invisible');
      console.log('done');
    });
  });
});



new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  parallax: true
});