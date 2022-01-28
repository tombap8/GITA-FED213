// 공통 기능 구현 JS - common.js //

///// 윈도우 스크롤 이벤트 함수 //////
// 스크롤 이벤트 : scroll
// window객체에 스크롤이벤트를 걸어준다!(전체스크롤)
window.addEventListener("scroll",()=>{

    // 스크롤 위치값
    let scTop = this.scrollY;
    // scrollY - 세로축 스크롤 위치값 리턴
    // this는 화살표함수에서 window객체를 나타냄

    console.log("스위:",scTop);

}); ///////////// scroll ////////////////
/////////////////////////////////////////