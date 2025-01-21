//pause/play
const Video = document.querySelector(".feature-container video");
const VideoBtnPause = document.querySelector(
  ".feature-container .feature-content .content .pause"
);
const VideoBtnIconPause = VideoBtnPause.querySelector("i");
var isPlaying = true;
VideoBtnPause.addEventListener("click", () => {
  if (isPlaying) {
    Video.pause();
    VideoBtnIconPause.classList.add("fa-play");
    VideoBtnIconPause.classList.remove("fa-pause");
    isPlaying = false;
  } else {
    Video.play();
    VideoBtnIconPause.classList.remove("fa-play");
    VideoBtnIconPause.classList.add("fa-pause");
    isPlaying = true;
  }
});

//sound
var isMute = true;
const VideoBtnMute = document.querySelector(
  ".feature-container .feature-content .content .sound"
);
const VideoBtnIconMute = VideoBtnMute.querySelector("i");
VideoBtnMute.addEventListener("click", () => {
  if (isMute) {
    Video.muted = false;
    VideoBtnIconMute.classList.remove("fa-volume-xmark");
    VideoBtnIconMute.classList.add("fa-volume-high");
    isMute = false;
  } else {
    Video.muted = true;
    VideoBtnIconMute.classList.add("fa-volume-xmark");
    VideoBtnIconMute.classList.remove("fa-volume-high");
    isMute = true;
  }
});
if (
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
) {
  VideoBtnPause.classList.add("d-none");
  VideoBtnMute.classList.add("d-none");
}
