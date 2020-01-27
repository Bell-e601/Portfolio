new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    effect: 'cube',
    autoplay: {
        delay: 5000,
    },
    mousewheel: {},
    pagination: {
        el: '.project-pagination',
        bulletClass: 'project-bullet',
        bulletActiveClass: 'project-bullet-active',
        clickable: true,
    },
  });
