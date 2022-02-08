// 쇼핑몰 배너 JS //
// 로드구역 ////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    /************************************ 
        [ 슬라이드 이동 기능정의 ]
        1. 이벤트 종류: 클릭
        2. 이벤트 대상: 이동버튼(.abtn)
        3. 변경 대상: 슬라이드 박스(#slide)
        4. 기능흐름: 
        (1) 오른쪽버튼 클릭시 
            - 선행: -100%로 하나의 슬라이드를
            이동한다
            - 후행: 왼쪽에 나가있는 첫번째 슬라이드를
            잘라서 맨뒤로 이동시킨다
            이때 left값을 다시 0으로 초기화한다!
            (기존 트랜지션을 지워야 초기화과정이 숨겨진다)
            그래야 슬라이드가 튀지 않는다!

        (2) 왼쪽버튼 클릭시 
            - 선행: 맨뒤의 슬라이드를 잘라서 맨앞으로 이동함
            이때 left값을 -100%로 왼쪽 앞에 공간을 만든다!
            (트랜지션을 지워서 이 과정이 안보이게 함!)
            - 후행: 트랜지션으로 left가 0되면서 왼쪽에서 
            슬라이드가 이동하여 들어온다!
        

        5. 추가기능: 슬라이드 위치표시 블릿
        - 블릿대상 : .indic li
        - 변경내용 : 슬라이드 순번과 같은 순번의
        li에 클래스 "on"주기(나머진 빼기-초기화)

    ************************************/

    // 이벤트 대상: .abtn
    let abtn = document.querySelectorAll(".abtn");
    // 변경 대상: #slide
    let slide = document.querySelector("#slide");
    // 추가 대상: .indic li
    let indic = document.querySelectorAll(".indic li");
    // 슬라이드 개수 구해오기
    const scnt =
        document.querySelectorAll("#slide li").length;
    // console.log("슬라이드개수:", scnt);

    // 슬라이드가 순서가 바뀌므로 처음에 슬라이드 li에
    // 클래스를 순번에 맞게 부여해 준다!
    for(let i=0;i<scnt;i++) {
        slide.querySelectorAll("li")[i]
        .classList.add("s"+i);
    } /////// for ///////////////////


    // 오른쪽버튼 클릭시
    abtn[1].onclick = () => goSlide(1);
    ///////// click /////////

    // 왼쪽버튼 클릭시
    abtn[0].onclick = () => goSlide(0);
    ///////// click /////////

    // 슬라이드 번호 전역변수
    let snum = 0;

    /******************************* 
        함수명: goSlide
        기능: 슬라이드를 다음/이전
            슬라이드로 이동시킨다!
    *******************************/
    const goSlide = dir => {
        // dir - 전달변수(1-오른쪽,0-왼쪽)
        // console.log("이동함수!", dir);

        // 1. 분기하기
        // (1) 오른쪽버튼
        if (dir) { /// dir이 1이면(1===true)

            // 1. 이동하기 : 슬라이드의 left값을 변경함
            slide.style.left = "-100%";
            slide.style.transition = "left .4s ease-in-out";

            // 2. 이동후 잘라서 끝으로 이동 + left:0
            // 이동후-> setTimeout(함수,시간)
            // 0.4초후 함수실행!
            setTimeout(()=>{
                // 2-1. 첫번째 슬라이드 맨뒤로이동
                slide.appendChild(
                    slide.querySelectorAll("li")[0]);
                // 첫번째 슬라이드 선택: #slide>li중 1번째
                // 맨뒤로 이동: appendChild(요소)
                
                // 2-2. left값 초기화 + 트랜지션해제!
                slide.style.left = "0";
                slide.style.transition = "none";

            },400); ///// setTimeout //////

        } ///////////////// if /////////////
        // (2) 왼쪽버튼
        else {
            // 1. 맨뒤요소 맨앞으로 이동하기
            slide.insertBefore(
                slide.querySelectorAll("li")[scnt-1],
                slide.querySelectorAll("li")[0]
            );
            // 맨뒤요소: #slide>li중 맨끝(개수-1)
            // 맨앞이동: insertBefore(넣을놈,넣을놈전놈)
            // insertBefore(맨뒤li,맨앞li)

            // 2. left값 -100%로 셋팅 + 트랜지션 없애기
            slide.style.left = "-100%";
            slide.style.transition = "none";

            // 3. left가 0, 트랜지션설정 - 슬라이드들어오기
            // 위의 같은 속성변경과 시차가 반드시 필요함!
            // setTimeout으로 시차를 줌!(0.01초만 줘도됨)
            setTimeout(()=>{
                slide.style.left = "0";
                slide.style.transition = "left .4s ease-in-out";
            },10);

        } ////// else /////////

        
        // 3. 블릿표시 변경하기
        // (1) 초기화 : 모든 블릿li의 class "on"제거
        for(let x of indic) x.classList.remove("on");
        // (2) 적용하기 : 해당순번의 li에 class "on"넣기
        // 해당순번은 오른쪽이동과 왼쪽이동에 따라 다르다!
        indic[snum].classList.add("on");


        // a요소 기본이동막기!
        return false;

    }; //////// goSlide 함수 /////////////
    //////////////////////////////////////


}); ///////////// load //////////////////////