var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });


let closeS = document.querySelector(".closeS");
let closeI = document.querySelector(".closeI");
let closeE = document.querySelector(".closeE");
let success = document.querySelector(".success");
let info = document.querySelector(".info");
let error = document.querySelector(".error");

closeS.addEventListener("click", function(){
success.classList.toggle("closeSuccess")

})

closeI.addEventListener("click", function(){
  info.classList.toggle("closeInfo")
  
  })

  closeE.addEventListener("click", function(){
    error.classList.toggle("closeError")
    
    })

    let closeN = Document.querySelector(".closeN")
    let headerNotification = document.querySelector(".header-notification");
    closeN.addEventListener('click', function(){
      headerNotification.classList.toggle("headerNotify")
    })