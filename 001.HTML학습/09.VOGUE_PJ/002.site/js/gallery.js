// 보그 PJ 갤러리 JS - gallery.js //

$(()=>{ ////////// jQB ///////////////////////////

    console.log("갤러리 로딩완료!");

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // 한 화면당 슬라이드 개수
        spaceBetween: 30, // 슬라이드 사이간격
        loop: true, // 무한루프
        pagination: { // 하단블릿
          el: ".swiper-pagination", // 블릿대상박스
          clickable: true, // 블릿클릭가능여부
        },
        navigation: { // 양쪽이동버튼
            nextEl: ".swiper-button-next", // 다음버튼대상
            prevEl: ".swiper-button-prev", // 이전버튼대상
          },
      });


}); ////////////// jQB ///////////////////////////