// 공통 기능 구현 JS - common.js //

/*********************************** 
            전역변수 구역
***********************************/
// 스크롤 위치값
let scTop;
// 상단영역 - #top
let topA;
/***********************************/

///////////// 로드구역 //////////////////////
window.addEventListener("DOMContentLoaded",
()=>{
    console.log("로딩완료!");

    // 변경대상 : 상단영역 - #top (전역변수 top)
    topA = document.querySelector("#top");

}); //////////// 로드구역 //////////////////
///////////////////////////////////////////

///// 윈도우 스크롤 이벤트 함수 //////
// 스크롤 이벤트 : scroll
// window객체에 스크롤이벤트를 걸어준다!(전체스크롤)
window.addEventListener("scroll",()=>{

    // 스크롤 위치값(전역변수 scTop)
    scTop = this.scrollY;
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

    // console.log("스위:",scTop);

    // 변경대상 : 상단영역 - #top -> 전역변수 topA

    //////////////////////////////
    // 상단영역 스크롤 반응하기 ///
    /////////////////////////////

    // 1. 스크롤위치가 100px이상일때
    if(scTop>=100){
        topA.classList.add("on");
    } /////////// if ////////////
    // 2. 스크롤위치가 100미만일때
    else{
        topA.classList.remove("on");
    } /////////// else ///////////

    /*********************************************** 
        [ 클래스 관리객체 : classList ]
        1. 삽입 메서드 : add(클래스명)
        2. 제거 메서드 : remove(클래스명)
        3. 삽입/제거 전환 메서드 : toggle(클래스명)
    ***********************************************/


}); //////////////////// scroll ////////////////////////
////////////////////////////////////////////////////////