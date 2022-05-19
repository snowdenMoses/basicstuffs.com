gsap.registerPlugin(ScrollTrigger);


// Scrolling Horizontally
// let sections = gsap.utils.toArray(".section")

// gsap.to(sections,{
//     xPercent:-100 * (sections.length - 1),
//     ease:"none",
//     scrollTrigger:{
//         end:() => `${document.querySelector('.container').offsetHeight}`,
//         trigger:".container",
//         scrub:1,
//         pin:true,
//         pinSpacing:false,
//         snap:1/(sections.length-1)
//     }
// })


let section_height = document.querySelector('.section1').offsetHeight
let tl = gsap.timeline()

    ScrollTrigger.create({
        animation:tl,
        start:"top top",
        end:"+="+section_height*4,
        trigger:".container",
        scrub:true,
        pin:true,
       anticipatePin:1,
})

tl.from(".section2",{
    xPercent:-100,
})
.from(".section3",{
    yPercent:-100,
})
.from(".section4",{
    xPercent:100,
})


    

