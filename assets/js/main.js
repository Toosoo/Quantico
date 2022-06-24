let tl = gsap.timeline();

tl.to(".scroll", {
  y: 50,
  yoyo: true,
  ease: "power4.inOut",
  duration: 1.5,
  repeat: -1,
});

let menu = document.querySelector(".menu");
overlay = document.querySelector(".overlay");
navContainer = document.querySelector(" ul");
navLinks = document.querySelectorAll(" ul li a");


let timeline = gsap.timeline();
document.querySelector(".menu").addEventListener("click", () => {
  menuAnimation()
  if(menu.classList.contains("inactive")){
    menu.classList.add("active")
    menu.classList.remove("inactive")
    timeline.restart()
    timeline.timeScale(1)

  }
  else if(menu.classList.contains("active")){
    timeline.timeScale(3)
    timeline.reverse()
    menu.classList.add("inactive")
    menu.classList.remove("active")
  }
});


function menuAnimation(){
  
  timeline.to(navContainer, {
    keyframes:{
      "20%": {y:"50%",x:"50%",backgroundColor:"#000000db"},
      "100%":  {left:"-50%",top:"-50%",borderRadius:0, width:"100vw",height:"100vh",trasnformOrigin:"center center"},
    },
  duration:2,
  ease:"power4.inOut"
  })

  timeline.to(".left-x", {
    transformOrigin:"center center",
    rotate:120,
    y:-10
  },"<1");
  timeline.to(".right-x", {
    transformOrigin:"center center",
    rotate:-120,
  },"<");
  timeline.to(".hidden-x", {
    opacity:0
  },"<");
  timeline.to(navLinks, {
    keyframes:{
      "0%": {display:"block",opacity:0, stagger:0},
      "50%": {opacity:1,stagger:.5},
      "100%": {y:-50,delay:1, stagger:.5},
    },
    ease:"power4.inOut",
    duration:4,
   
   },"<");
}