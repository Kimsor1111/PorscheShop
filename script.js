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

//main side submenu to open/close

const SideMenuLeftLi = document.querySelectorAll(
  `.side-menu-container .nav-side-left ul li`
);
const SideMenuRight = document.querySelectorAll(
  `.side-menu-container .nav-side-right`
);
const SideMenuRightCloseBtn = document.querySelectorAll(
  `.side-menu-container .nav-side-right .nav-side-right-item button.btn`
);
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

//model side submenu to open/close
const SideMenuLeftLiModel = document.querySelectorAll(
  `.side-menu-container-model .nav-side-left ul li`
);
const SideMenuRightModel = document.querySelectorAll(
  `.side-menu-container-model .nav-side-right`
);
const SideMenuRightCloseBtnModel = document.querySelectorAll(
  `.side-menu-container-model .nav-side-right button.btn`
);
const SideMenuRightImgModel = document.querySelectorAll(
  `.side-menu-container .nav-side-right .nav-side-right-item .list-image li`
);
//click on the right list image
SideMenuRightImgModel.forEach((target, index) => {
  target.addEventListener("click", () => {
    SideMenuLeftLiModel[index].classList.add("active-sidemenu-left");
    SideMenuRightModel[index].style.cssText = `transform: translateX(0);`;
    SideMenuRightImgModel.forEach((_, removeIndex) => {
      if (index != removeIndex) {
        SideMenuLeftLiModel[removeIndex].classList.remove(
          "active-sidemenu-left"
        );
        SideMenuRightModel[
          removeIndex
        ].style.cssText = `transform: translateX(-100%);`;
      }
    });
  });
});
//click on the li model
SideMenuLeftLiModel.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("active-sidemenu-left");
    SideMenuRightModel[index].style.cssText = `transform: translateX(0);`;
    SideMenuLeftLiModel.forEach((removeStyle, removeIndex) => {
      if (index != removeIndex) {
        removeStyle.classList.remove("active-sidemenu-left");
        SideMenuRightModel[
          removeIndex
        ].style.cssText = `transform: translateX(-100%);`;
      }
    });
  });
});

SideMenuRightCloseBtnModel.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    SideMenuRightModel[index].style.cssText = `transform: translateX(-100%);
    z-index: 0;`;
  });
});

// Slider
const slider = document.querySelector(".slider");
const prev = document.querySelector(".slider-btn .prev-btn");
const next = document.querySelector(".slider-btn .next-btn");
const dot = document.querySelectorAll(".pagination .dot");
const items = document.querySelectorAll(".slider-container .slider-item");
const itemsWidth = items[0].scrollWidth + 30;
let isDown = false;
let startX, scrollLeft, x;
let maxWidth = slider.scrollWidth - slider.clientWidth;
prev.disabled = true;
window.addEventListener("resize", () => {
  maxWidth = slider.scrollWidth - slider.clientWidth;
});

slider.addEventListener("scroll", () => {
  let s = Math.ceil(slider.scrollLeft);
  prev.disabled = s > 0 ? false : true;
  next.disabled = s < maxWidth ? false : true;
  let i = Math.ceil(s / itemsWidth);
  dot.forEach((dots, index) => {
    dots.classList.toggle("active", index === i);
  });
});

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  e.preventDefault();
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  x = e.pageX - slider.offsetLeft;
  slider.scrollLeft = scrollLeft - (x - startX) * 4;
});

prev.addEventListener("click", () => {
  slider.scrollBy({ left: -itemsWidth, behavior: "smooth" });
});

next.addEventListener("click", () => {
  slider.scrollBy({ left: itemsWidth, behavior: "smooth" });
});

dot.forEach((dots, index) => {
  dots.addEventListener("click", () => {
    dots.classList.add("active");
    slider.scrollTo({ left: itemsWidth * index, behavior: "smooth" });
    dot.forEach((inactiveDots, inactiveIndex) => {
      if (index !== inactiveIndex) {
        inactiveDots.classList.remove("active");
      }
    });
  });
});
