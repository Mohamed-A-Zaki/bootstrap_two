// Start Nicescroll jQuery Plugin

$("body").niceScroll();

// End Nicescroll jQuery Plugin

// strat navbar

let nav_bar = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY >= nav_bar.offsetHeight) {
    nav_bar.classList.add("scrolled");
  } else {
    nav_bar.classList.remove("scrolled");
  }
};

// end navbar

// start tabs section

let tabs = document.querySelectorAll(".tabs ul li");

let tab_content = document.querySelectorAll(".tabs .content div");

tabs.forEach((element, index) => {
  element.onclick = function () {
    tabs.forEach((element) => {
      element.classList.remove("active");
    });
    this.classList.add("active");
    tab_content.forEach((element) => {
      element.classList.remove("active");
    });
    tab_content[index].classList.add("active");
  };
});

// end tabs section
