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
let plane = document.querySelector('.purchase i');
let purchase = document.querySelector('.purchase');

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    darkContainers.forEach((darkContainer) => {
      darkContainer.classList.add('invisible');
    });
    plane.classList.add('show');
  });
  button.addEventListener('mouseout', () => {
    darkContainers.forEach((darkContainer) => {
      darkContainer.classList.remove('invisible');
    });
    plane.classList.remove('show');
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    plane.classList.add('done');
    purchase.classList.add('done');
    window.setTimeout(function () {
      window.location.href = 'http://localhost/vcs-project/purchased.php';
    }, 2000);
  });
});

var width = window.innerWidth;

if (width < 1023) {
  new fullpage("#fullpage", {
    autoScrolling: true
  });
}


new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  parallax: true,

  anchors: ['section1', 'section2', 'section3', 'section4', 'section5']
});