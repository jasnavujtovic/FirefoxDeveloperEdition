const accordion = document.querySelector('.subMenu');
const dropdown = document.querySelector('.dropDown');
const arrow = document.querySelector('.fa-chevron-down');
const popup = document.querySelector('.popup');
const close = document.querySelector('.btn-promo');
const hamburger = document.querySelector('.btn-ham');
const bars = document.querySelector('.fa-bars');
const ul = document.querySelector('ul');
const navbar = document.getElementById("navbar");
const button = document.querySelector("button");


//Hide and show navbar on scroll
function scrollNav() {
  var prevScroll = window.pageYOffset;
  window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScroll ) {
        document.getElementById("navbar").style.top = "-80px";
      } else {
        document.getElementById("navbar").style.top = "0px";
      }
      prevScroll = currentScrollPos;
  }
}

scrollNav();


//Automatic show popup-promo after 3sec of page load
function popupAdd() {
  window.onload = function(){
    setTimeout(function(){
      popup.style.display = "block";
  
    }, 3000)
  }
  
  close.addEventListener('click', () => {
    popup.style.display = "none";
  })
}

popupAdd();


function hamburgerMenu() {
  hamburger.addEventListener('click', () => {
    ul.classList.toggle('active');
    navbar.classList.toggle('active');
  
      if(bars.className === 'fas fa-bars') {
        bars.setAttribute('class','fas fa-times');
        button.style.display = 'block';
      }else {
        bars.setAttribute('class','fas fa-bars');
        button.style.display = 'none';
      }
  })

}

hamburgerMenu();


//Desktop dropdown menu and mobile accordions menu
function accordionMenu() {
  accordion.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    arrow.classList.toggle('active');
});
}

accordionMenu();
