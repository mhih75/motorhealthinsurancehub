$(document).ready(function(){
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.single-item-rtl').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,  
  })
  AOS.init();
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  $('#loader-wrapper').delay(7000).fadeOut(function(){
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
  });
});

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};