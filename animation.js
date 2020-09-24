const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button")

//fade out on load
animatedTags.forEach(tag =>{
  tag.style.opacity = 0
})

const fadeIn = function (){
  //look through all the animated tags and see
  //with the getBoundingClientRect of it's in the window
  let delay = 0.25
  
  animatedTags.forEach(tag=>{
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
		
    if(tagTop<window.innerHeight && tagBottom > 0){
       tag.style.animation = `fadein 1s ${delay}s both`
       delay= delay + 0.1
       }else{
         tag.style.opacity = 0
         tag.style.animation =""
       }
  })
}

//on load, run fadeIn
fadeIn()

//on scroll, run fadeIn
document.addEventListener("scroll", function(){
  fadeIn()
})

//on Browser resize, run FadeIn
window.addEventListener("resize", function(){
  fadeIn()
})


