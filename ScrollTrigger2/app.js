gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline(
    {
        scrollTrigger:{
            trigger:".section1",
            start:"top top",
            end:"bottom top",
            duration:5,
            markers:true,
            pin:true,
            scrub:true
        }

    }
)

tl.to(".box",{
    borderRadius:20,
    backgroundColor:"orangeRed",
    x:400,
    width:"100",
    height:"100",
    ease:"none"
    // duration:3
})
