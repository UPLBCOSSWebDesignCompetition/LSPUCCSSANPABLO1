document.addEventListener("DOMContentLoaded", function () {
  // TOGGLE MENU
  const menu = document.querySelector("#menu");
  const sidebar = document.querySelector("#sidebar");
  const close = document.querySelector("#close");

  // open
  menu.addEventListener("click", function () {
    console.log(sidebar.style.right);
    sidebar.style.right = 0;
    close.style.display = "block";
    menu.style.display = "none";
  });
  // close
  close.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    close.style.display = "none";
    menu.style.display = "block";
  });
  // sidbar click
  sidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    close.style.display = "none";
    menu.style.display = "block";
  });

  // ROTATING SLIDER
  let degrees = 0;
  const next = document.querySelector("#next");
  const imgNext = document.querySelector("#img-next");
  const previous = document.querySelector("#previous");
  const imgPrevious = document.querySelector("#img-previous");

  const top = document.querySelector("#top");
  const bottom = document.querySelector("#bottom");

  const redDiv = document.querySelector("#sirkol");

  function isSmallScreen() {
    return window.innerWidth <= 768; // Adjust the threshold as needed
  }

  top.addEventListener("click", function () {
    console.log("top");
    degrees = degrees + 21.1764;
    if (isSmallScreen()) {
      redDiv.style.transform = `translateX(-50%) translateY(-50%) rotate(${degrees}deg)`;
    } else {
      redDiv.style.transform = `translateX(-50%) translateY(-50%) rotate(${degrees}deg) scale(1.50)`;
    }

    next.click();
    imgNext.click();
  });

  bottom.addEventListener("click", function () {
    console.log("bot");
    degrees = degrees - 21.1764;
    if (isSmallScreen()) {
      redDiv.style.transform = `translateX(-50%) translateY(-50%) rotate(${degrees}deg) `;
    } else {
      redDiv.style.transform = `translateX(-50%) translateY(-50%) rotate(${degrees}deg) scale(1.50)`;
    }

    previous.click();
    imgPrevious.click();
  });

  // SCRIPT FOR THE ANIMATION OF THE SDG17 LETTERS

  const headings = document.querySelectorAll(".text-center h1");

  headings.forEach(function (heading) {
    setTimeout(function () {
      heading.style.opacity = "1";
      heading.style.transform = "translateY(0)";
    }, 200 * (Array.from(headings).indexOf(heading) + 1));
  });
});
