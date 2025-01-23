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
//check if it is the apple device
if (
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
) {
  VideoBtnPause.classList.add("d-none");
  VideoBtnMute.classList.add("d-none");
}

//side submenu to open/close
const SideMenuLeft = document.querySelector(
  ".feature-container .feature-content .navbar .container-fluid .side-menu-container .nav-side-left"
);
const SideMenuLeftLi = document.querySelectorAll(
  `.feature-container .feature-content .navbar .container-fluid .side-menu-container .nav-side-left ul li`
);
const SideMenuRight = document.querySelectorAll(
  `.feature-container .feature-content .navbar .container-fluid .side-menu-container .nav-side-right`
);
const SideMenuRightCloseBtn = document.querySelectorAll(
  `.feature-container .feature-content .navbar .container-fluid .side-menu-container .nav-side-right .nav-side-right-item button.btn`
);
console.log(SideMenuRight);
console.log(SideMenuRightCloseBtn);
SideMenuLeftLi.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("active-sidemenu-left");
    SideMenuRight[index].style.cssText = `transform: translateX(0);`;
    SideMenuLeftLi.forEach((removeStyle, removeIndex) => {
      if (index != removeIndex) {
        removeStyle.classList.remove("active-sidemenu-left");
        SideMenuRight[
          removeIndex
        ].style.cssText = `transform: translateX(-100%);
  z-index: 0;`;
      }
    });
  });
});

SideMenuRightCloseBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    SideMenuRight[index].style.cssText = `transform: translateX(-100%);
  z-index: 0;`;
  });
});
