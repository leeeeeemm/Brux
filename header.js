//when i scroll dow the page, at a certain point
//add a class to makethe header white
const headerTag = document.querySelector("header")

const toggleHeader = function (){
  const pixels = window.pageYOffset
  
  if(pixels >60){
     headerTag.classList.add("scrolled")
     }else{
       headerTag.classList.remove("scrolled")
     }
}

const fadeBox = function(){
  const pixels = window.pageYOffset
  //to make the fade in more slowly 
  const alpha = Math.min(pixels / 1000, 0.25) //Math.min => not ever exceed a certain number
  
  headerTag.style.boxShadow = `0 0 10px rgba(0, 0 ,0, ${alpha})`
}

fadeBox()
toggleHeader()

document.addEventListener("scroll", function(){
  toggleHeader()
  fadeBox()
})