
gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline()
tl.from(".box1",{
    xPercent:-500,
    duration:4,
    ease:"bounce"
},"1")
.from(".box2",{
    yPercent:-500,
    duration:4,
    ease:"bounce"
},"1")
.from(".box3",{
    yPercent:-500,
    duration:4,
    ease:"bounce"
},"1")
.from(".box4",{
    xPercent:500,
    duration:4,
    ease:"bounce"
},"1")
