const btn = document.querySelector("#toTopBtn");

const scrollFunction = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

const topFunction = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.onscroll = () => scrollFunction();

btn.addEventListener("click", topFunction);
