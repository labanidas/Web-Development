// $(window).bind("resize", function () {


//     console.log($(this).width());
//     if ($(this).width() > 1550) {
//         $('swiper').removeClass('mySwiper');


//     }
//     //  else {
//     //     $('div').addClass('mySwiper')
//     // }
// }).trigger('resize')

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    // slidesPerGroup: 3,
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 'auto',
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   })