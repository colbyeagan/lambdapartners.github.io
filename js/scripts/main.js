// Script Data AOS Animation
AOS.init({
  disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  }
});

// Configure the modal
const btnOpenModal = document.querySelector('.js-modal-foundation-button');
const btnCloseModal = document.querySelector('.js-close');

if(btnOpenModal){
  btnOpenModal.addEventListener('click', (Event) => {
    Event.preventDefault();
    let html = document.body;
     // add the class to the html (not to the specific element)
     html.classList.add('show-modal'); // selecting
  })
}
if (btnCloseModal){
  btnCloseModal.addEventListener('click', (Event) => {
    Event.preventDefault();
    let html = document.body;
     // add the class to the html (not to the specific element)
     html.classList.remove('show-modal'); // selecting
  })
}

// Script for Hero Slide
const progressSlide = document.querySelector('.js-progress'); // get progress bar
const swiper = new Swiper(".slide-principal", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false // autoplay nao para de funcionar
  },
  effect: 'fade',
  pagination: {
    el: ".slide-principal .swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  on: { // get some elements from swiper slide
      init : function () { // when slide starts
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('animate'); // faz a barra crescer
        progressSlide.classList.add('active'); // da opacidade
      }, 
      slideChangeTransitionStart : function (){ // when the transition start
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('active');
      }, 
      slideChangeTransitionEnd : function (){ // when the transiction finish
        progressSlide.classList.add('animate'); // um apos o outro - nao pode adicionar junto
      }
    }
});
const swiperInvestments = new Swiper(".slide-investments-principal", {
  slidesPerView: 'auto',
  spaceBetween: 5,
  direction: "horizontal",
  freeMode: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  autoplay: {
    delay: 500,
    disableOnInteraction: false // autoplay nao para de funcionar
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // when window width is >= 320px
  320: {
    spaceBetween: 10
  },
});
const swiperProperties = new Swiper(".s-custom-property__slide", {
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false // autoplay nao para de funcionar
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
const swiperOtherProperties = new Swiper(".s-slide-other", {
  slidesPerView: 2,
  spaceBetween: 15,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false // autoplay nao para de funcionar
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    }
  }
  
});
const swiperSocialMedia = new Swiper(".slide-social-media", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".s-social-media__post .container .s-social-media__post__title .swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    320 : {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
});
const swiperFoundation= new Swiper(".s-foundation-slide", {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false // autoplay nao para de funcionar
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperCharitable = new Swiper(".slide-charitable-principal", {
  slidesPerView: 'auto',
  spaceBetween: 5,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false // autoplay nao para de funcionar
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // when window width is >= 320px
  320: {
    spaceBetween: 10
  },
});
const swiperTestimonials = new Swiper(".s-testimonials-slide", {
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false // autoplay nao para de funcionar
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Button Scroll Top
const btnScrollTop = document.getElementById("js-btn-scroll-top");
const imgBtnScrollTop = document.getElementById("js-img-footer");
if(btnScrollTop){
  btnScrollTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }),
  btnScrollTop.addEventListener('mouseover', () => {
    imgBtnScrollTop.setAttribute('src', '/assets/icons/icon-arrow-up-footer-black.svg');
  }),
  btnScrollTop.addEventListener('mouseleave', () => {
    imgBtnScrollTop.setAttribute('src', '/assets/icons/icon-arrow-up-footer.svg');
  })
}
// Add class active to menu button
const menuButton = document.getElementById('js-menu-button');
if(menuButton){
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('is-active'); // add the CSS configuration on this button
        document.documentElement.classList.toggle('menu-opened');
    })
}

// Menu Header Change >20 scroll
const header = document.getElementById("js-header");
if(header){
  function fixedMenu() {
    if (window.pageYOffset > 50) {
      header.classList.add("changeHeight");
    } else {
      header.classList.remove("changeHeight");
    }
  }
  document.addEventListener("scroll", fixedMenu);
}