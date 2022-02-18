// 보그 PJ 갤러리 JS - gallery.js //

$(()=>{ ////////// jQB ///////////////////////////

    console.log("갤러리 로딩완료!");

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


}); ////////////// jQB ///////////////////////////