const videoBtn = document.querySelector(".video__btn");
const videoTag = document.querySelector("video");
const videoOverlay = document.querySelector(".video__container");

// Video play---------------------
videoBtn.addEventListener("click", () => {
  if (videoTag.paused == true) {
    videoTag.play();
    videoBtn.classList.add("paused");
    videoOverlay.classList.add("hidden");
  } else {
    videoTag.pause();
    videoBtn.classList.remove("paused");
    videoOverlay.classList.remove("hidden");
  }
});
