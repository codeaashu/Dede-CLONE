var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroll:"#main",
        // markers:true,
        start:"50% 50%",
        end:"150% 50%",
        pin:true,
        scrub:2
    }
})
tl
.to("#top",{
    top:"-50%"
},"a")
.to("#bottom",{
    bottom:"-50%"
},"a")
.to("#top-h",{
    bottom:"-40%"
},"a")
.to("#bt-h",{
    top:"-40%"
},"a")
.to("#center",{
    top:"0%"
},"a")