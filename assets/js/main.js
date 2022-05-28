

let tl = gsap.timeline()
tl.fromTo(".copyright",{
  y:"100vh",
  height:"30vh",
},{
  y:"-100vh",
  stagger:.2,
  duration:2,
  repeatDelay: 0,
  ease:"power2.inOut",
  immediateRender:true
})
tl.fromTo(".line2 , .line4 , .line6",{
  y:"100vh",
  height:"30vh",
},{
  y:"-100vh",
  stagger:.2,
  duration:2,
   repeatDelay: 0,
  ease:"power2.inOut",
  immediateRender:true
})

  .fromTo(".line1 , .line3 , .line5",{
  y:"100vh",
},{
  y:"-100vh",
  stagger:.3,
  duration:2,
  repeatDelay: 0,
  ease:"linear",
  ease:"power2.inOut",
  immediateRender:true
},"<")


  .to(".line",{
  y:"0",
  stagger:.1,
  duration:1.5,
  height:"70vh",
  ease:"power4.inOut",
})

  .fromTo(".darkline",{
    height:0,
    display:"none",
}, {
  display:"block",
  height:"30vh",
  duration:2,
  ease:"power4.inOut",
})

  .to(".eye",{
    display:"block",
})
  .to(".title",{
    y:-20,
    opacity:1,
    duration:1,
  ease:"power4.inOut",
  delay:1
})
  .from("nav",{
   y:-100 
  })
  .from("h3",{
   y:100 
  })