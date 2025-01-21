const Video = document.querySelector(".feature-container video");
const VideoBtn = document.querySelector(
  ".feature-container .feature-content .content .pause"
);
const VideoBtnIcon = VideoBtn.querySelector("i");
var isPlaying = true;
VideoBtn.addEventListener("click", () => {
  if (isPlaying) {
    Video.pause();
    VideoBtnIcon.classList.add("fa-play");
    VideoBtnIcon.classList.remove("fa-pause");
    isPlaying = false;
  } else {
    Video.play();
    VideoBtnIcon.classList.remove("fa-play");
    VideoBtnIcon.classList.add("fa-pause");
    isPlaying = true;
  }
});
