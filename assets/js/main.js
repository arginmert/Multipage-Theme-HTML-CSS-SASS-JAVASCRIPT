///RESPONSIVE MENU///

let header=document.querySelector('header');
let menuicon =document.querySelector('#menu-icon');
let menu = document.querySelector('#mainMenu');

menuicon.onclick = () =>{
  menuicon.classList.toggle('bx-x');
  menu.classList.toggle('open');
};

window.onscroll = () =>{
  menuicon.classList.remove('bx-x');
  menu.classList.remove('open');
  
  var headtop = header.offsetTop;
  if (window.pageYOffset > 100) {
    header.classList.add("downscroll");
  } else if (window.pageYOffset == headtop){
    header.classList.remove("downscroll");
  }
};

//SWIPER CAROUSEL///

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.6,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    570: {
      slidesPerView: 1.6,
    }, 
    750: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 2.6,
    }
}
});
///SAYAÇ///
let number = document.querySelectorAll(".number");
let interval=100;
number.forEach(valueNumber => {
  let startValue=0;
  let endValue= parseInt(valueNumber.getAttribute("data-value"));
  let duration=Math.floor(interval/endValue);
  let counter=setInterval(() => {
   startValue +=1;
   valueNumber.textContent=startValue;
   if (startValue==endValue) {
       clearInterval(counter);
   }
  }, duration); 
 });
///JOBS ACCORDION///

var jobs=document.querySelectorAll(".accordion-title");
var jobdetail=document.querySelector(".panel");
for (let i = 0; i < jobs.length; i++) {

    jobs[i].addEventListener("click", function() {
      this.classList.toggle(".active");
      jobdetail=this.nextElementSibling;
      if(jobdetail.style.display === "block"){
        jobdetail.style.display = "none";
      }else {
        jobdetail.style.display = "block";
      }
    });
};

///PORTFOLIO///

let portbutton= document.querySelector(".portfolio-tic");
let brand= document.querySelectorAll(".brand-card");

window.onload=() =>{
  portbutton.onclick=(selectedItem)=>{
    if(selectedItem.target.classList.contains("item")){
        portbutton.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");
        let filterName=selectedItem.target.getAttribute("data-name");
        brand.forEach((image)=>{
          let filterBrands=image.getAttribute("data-name");
          if((filterName == filterBrands)){
            image.classList.remove("hide");
            image.classList.add("show");
          }else if(filterName == "all"){

            image.classList.add("show");
          }
          else{
            image.classList.add("hide");
            image.classList.remove("show");
          }

        })
    }
  }
}