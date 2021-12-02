/*1 slide bg animated*/
const paralax = document.getElementById("slide1");


window.addEventListener("scroll", function(){
    let slides = Array.from(this.document.querySelectorAll(".slide"))
    let offset = window.pageYOffset;
    slides.forEach((slide1)=>{
        slide1.style.backgroundPositionY = offset * 0.1 + "px";
    })
    //slider.style.backgroundPositionY = offset * 0.1 + "px";
}
)

/*blob animation*/
window.addEventListener("mousemove",e =>{
    let x = e.clientX;
    let y = e.clientY;

    let blobs = Array.from(document.querySelectorAll(".blob"));

    blobs.forEach((blob) =>{
        blob.style.transform = `translate(-${x * 0.05}px, -${y * 0.05}px)`;
    })

    /*const blob = document.querySelector(".blob");*/
})


/*text sliding*/
function reveal() {
    var reveals = document.querySelectorAll(".slide-in");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);


  function reveal_for_hex() {
    var reveals_hex = document.querySelectorAll(".hex");
  
    for (var i = 0; i < reveals_hex.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals_hex[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals_hex[i].classList.add("active");
      } else {
        reveals_hex[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal_for_hex);
