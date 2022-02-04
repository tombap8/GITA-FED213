// 공통 기능 구현 JS - common.js //

///////////// 로드구역 //////////////////////
window.addEventListener("DOMContentLoaded",
    () => {
        console.log("로딩완료!");

        /// 부드러운 스크롤 호출!(제이쿼리 아님!)
        startSS();

        /*********************************** 
                    로드구역 전역변수
        ***********************************/
        // (1) 스크롤 위치값
        let scTop;
        // (2) 스크롤 등장요소 위치값
        let scPos = []; // 배열변수
        // (3) 스크롤 등장요소
        let scAct = document.querySelectorAll(".scAct");
        // (4) 보이는 화면의 절반(등장위치보정)
        let winH = window.innerHeight/2;
        // window.innerHeight는 윈도우의 창높이(스크롤미포함)

        /***********************************/
        
        /////////////////////////////////////////////
        /// 페이지 등장요소의 페이지 위치값 셋팅하기 ///
        /////////////////////////////////////////////
        // offsetTop은 선택요소의 맨위로 부터의 top값!
        // for(시작값;한계값;증감){코드}
        for(let i=0; i<scAct.length;i++){
            scPos[i] = scAct[i].offsetTop;
            console.log("페이지위치값",i,"번째:",scPos[i]);
        } ///////// for문 ////////////////////////

        /****************************************** 
            함수명: scAction
            기능: 스크롤 위치값이 설정범위에 들어가면
                해당 순번의 요소가 등장한다!
        ******************************************/
       const scAction = seq => { // seq 순번

            // console.log("순번:",seq);

            if (scTop > scPos[seq]-winH && // 시작위치
                scTop < scPos[seq]) { // 끝위치
                scAct[seq].classList.add("on");
            } ///////// if ////////////////////

       }; /////////// scAction 함수 ////////////////////
       /////////////////////////////////////////////////


        // 변경대상 /////////////////////
        // 상단영역 - #top
        let topA = document.querySelector("#top");
        // 위로가기 버튼 - .tbtn
        let tbtn = document.querySelector(".tbtn");

        /////// 위로가기버튼 클릭시 맨위로 가기! ///////
        /// 부드러운 스크롤의 위치변수 pos에 0값을 주면 위로이동함
        tbtn.onclick = () => {pos=0; return false;};
        // return false -> a요소의 기본이동기능을 못하게 막음!

        ///// 윈도우 스크롤 이벤트 함수 //////
        // 스크롤 이벤트 : scroll
        // window객체에 스크롤이벤트를 걸어준다!(전체스크롤)
        window.addEventListener("scroll", () => {

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
            if (scTop >= 100) {
                topA.classList.add("on");
            } /////////// if ////////////
            // 2. 스크롤위치가 100px미만일때
            else {
                topA.classList.remove("on");
            } /////////// else ///////////

            /////////////////////////////////
            // 위로가기버튼 스크롤 반응하기 ///
            /////////////////////////////////

            // 1. 스크롤위치가 200px초과일때
            if (scTop > 200) {
                tbtn.classList.add("on");
            } /////////// if ////////////
            // 2. 스크롤위치가 200px이하일때
            else {
                tbtn.classList.remove("on");
            } /////////// else ///////////


            /////////////////////////////////
            /////// 등장액션 클래스 주기 /////
            /////////////////////////////////

            // scAct 변수에 담긴 등장액션할 요소의 개수만큼
            // scPos 배열변수에 위치값이 셋팅되어 있다!
            // 이 배열을 이용하여 forEach() 메서드로
            // 위치체크를 하여 클래스"on"을 넣어주는 함수
            // scAction() 함수를 순번과 함께 호출해 준다!!!

            scPos.forEach((val,idx)=>scAction(idx));
            // 배열객체.forEach((배열값,순번)=>{});

            /* 
            배열객체.forEach(function(item,index,arr){})
            
            - forEach는 함수내부에 3가지 값을
            전달한다!
            1. item : 배열의 값
            2. index : 배열의 순번(0부터~)
            3. arr : 배열객체자신!
            -> 전달변수의 숫자와 순서가 중요함!
            -> 전달변수명은 다르게 쓸 수 있음!

            _________________________

            다르게 표현해 보자!
                        
            배열객체.forEach((배열값)=>{})
            배열객체.forEach((배열값,순번)=>{})
            배열객체.forEach((배열값,순번,배열자신)=>{})
                    
          */

            /*********************************************** 
                [ 클래스 관리객체 : classList ]
                1. 삽입 메서드 : add(클래스명)
                2. 제거 메서드 : remove(클래스명)
                3. 삽입/제거 전환 메서드 : toggle(클래스명)
            ***********************************************/


        }); //////////////////// scroll ////////////////////////
        ////////////////////////////////////////////////////////


    }); //////////// 로드구역 //////////////////
///////////////////////////////////////////