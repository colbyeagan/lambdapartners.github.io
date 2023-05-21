// Script Data AOS Animation
AOS.init();

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


