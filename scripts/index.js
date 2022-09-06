function handleSelectLink(element) {
  const anchors = document.querySelectorAll(".nav-link");
  const isActive = element.classList.contains("active");

  anchors.forEach((anchorElement) => anchorElement.classList.remove("active"));

  if (!isActive) {
    element.classList.add("active");
  }
}

function handleActiveSlideImg(element) {
  const img = element.querySelector("img");

  element.classList.add("slide-img-active");
  img.classList.add("zoom-in");
}

function handleDeactiveSlideImg(element) {
  const img = element.querySelector("img");

  element.classList.remove("slide-img-active");
  img.classList.add("zoom-out");

  img.addEventListener("animationend", (event) => {
    if (event.animationName === "zoomOut") {
      img.classList.remove("zoom-in", "zoom-out");
    }
  });
}
