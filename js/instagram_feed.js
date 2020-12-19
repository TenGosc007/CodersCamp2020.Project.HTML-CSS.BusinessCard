const userFeed = new Instafeed({
  get: "user",
  target: "instafeed-container",
  limit: 24,
  resolution: "low_resolution",
  accessToken:
    "IGQVJXMVpKclptQU1ZANVJNV3I4S1ZAvRE0wem5vb1hWdnpzLXg1YUpETFY0SGlKdXlOS0dkcXF0WE1TUzNBeHRVTTlMQmJoTExfWmp5dG1PZAjRqeDFuS24wWEdhVGZARQ0pNOWY3b0pxeEZA4TUh1WkxVWQZDZD",
});

userFeed.run();

// Gallery
const img = document.querySelector("#instafeed-container");
const closeBtn = document.querySelector("#fullSize");
let imgDiv;

function clickHandler(e) {
  e.preventDefault();
  if (e.target.tagName === "IMG") {
    console.log(e.target.src);

    imgDiv = document.querySelector("#fullSize");
    imgDiv.style.display = "flex";
    imgDiv.innerHTML = `<img src="${e.target.src}" alt="Image" class="full-size-img" />`;

    const closeDiv = document.createElement("div");
    closeDiv.classList.add("full-size-close");
    closeDiv.innerHTML = '<i class="fas fa-times"></i>';
    imgDiv.appendChild(closeDiv);
  }
}

function closeHandler(e) {
  if (e.target.tagName !== "IMG") {
    imgDiv.style.display = "none";
  }

  console.log(e.target);
}

img.addEventListener("click", clickHandler);
closeBtn.addEventListener("click", closeHandler);
