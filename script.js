const slider = document.querySelector('.outercontainer');
const prev = document.querySelector('.sliderbtn .prev-btn');
const next = document.querySelector('.sliderbtn .next-btn');
const dot = document.querySelectorAll('.pagination .dot')
const items = document.querySelectorAll('.innercontainer .carcard')
const itemsWidth = items[0].scrollWidth + 20;
let isDown = false;
let startX, scrollLeft, x;
let maxWidth = slider.scrollWidth - slider.clientWidth;
window.addEventListener("resize", ()=>{
    maxWidth = slider.scrollWidth - slider.clientWidth;
})

slider.addEventListener("scroll",()=>{
    let s = Math.round(slider.scrollLeft);
    prev.disabled = (s > 0)? false : true;
    next.disabled = (s < maxWidth)? false : true;
    let i = Math.round(s / itemsWidth);
    dot.forEach((dots,index) =>{
        dots.classList.toggle("active", index === i);
    })
})

slider.addEventListener("mousedown",(e)=>{
    isDown = true;
    e.preventDefault();
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
})

slider.addEventListener("mouseleave",()=>{
    isDown = false;
})

slider.addEventListener("mouseup",()=>{
    isDown = false;
})

slider.addEventListener("mousemove",(e)=>{
    if(!isDown) return;
    e.preventDefault();
    x = e.pageX - slider.offsetLeft;
    slider.scrollLeft = scrollLeft - (x - startX) *4;
})

prev.addEventListener("click", ()=>{
    slider.scrollBy({ left: -itemsWidth, behavior: "smooth"})
})

next.addEventListener("click", ()=>{
    slider.scrollBy({left: itemsWidth, behavior: "smooth"})
})

dot.forEach((dots, index)=>{
    dots.addEventListener("click",()=>{
        dots.classList.add("active");
        slider.scrollTo({left: itemsWidth * index, behavoir: "smooth"});
        dot.forEach((inactiveDots, inactiveIndex)=>{
            if(index !== inactiveIndex){
                inactiveDots.classList.remove("active");
            }
        })
    })
})


