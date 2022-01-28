// 공통 기능 구현 JS - common.js //

/*********************************** 
            전역변수 구역
***********************************/
// 스크롤 위치값
let scTop;
// 상단영역 - #top
let top;
/***********************************/

///////////// 로드구역 //////////////////////
window.addEventListener("DOMContentLoaded",
()=>{
    console.log("로딩완료!");
    
}); //////////// 로드구역 //////////////////
///////////////////////////////////////////

///// 윈도우 스크롤 이벤트 함수 //////
// 스크롤 이벤트 : scroll
// window객체에 스크롤이벤트를 걸어준다!(전체스크롤)
window.addEventListener("scroll",()=>{

    // 스크롤 위치값
    let scTop = this.scrollY;
    // scrollY - 세로축 스크롤 위치값 리턴
    // this는 화살표함수에서 window객체를 나타냄

    /************************************************** 
        [윈도우 세로 스크롤 위치값 가져오는 방법]
        1. this.scrollY (this키워드가 window의미)
        2. window.scrollY
        3. document.scrollingElement.scrollTop
        4. document.documentElement.scrollTop
        5. document.querySelector("html").scrollTop

        참고) 가로스크롤일 경우
            scrollY -> scrollX
            scrollTop -> scrollLeft
            로 바꿔서 위와 동일함!

    **************************************************/

    console.log("스위:",scTop);

    // 변경대상 : 상단영역 - #top
    let top = document.querySelector("#top");

    //////////////////////////////
    // 상단영역 스크롤 반응하기 ///
    /////////////////////////////

    // 1. 스크롤위치가 100px이상일때
    if(scTop>=100){
        top.classList.add("on");
    } /////////// if ////////////
    // 2. 스크롤위치가 100미만일때
    else{
        top.classList.remove("on");
    } /////////// else ///////////


}); ///////////// scroll ////////////////
/////////////////////////////////////////