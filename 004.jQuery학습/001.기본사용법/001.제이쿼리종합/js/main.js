// 제이쿼리 기본 JS - main.js 

///////////////// 제이쿼리 로드구역 ///////////////////
$(() => { ///////////// jQB ////////////////////////////
    console.log("제이쿼리구역 로딩완료!");

    /*********************************************** 
                1. 대상선정 변수할당
    ***********************************************/
    // 대상1 : 버튼들 - .btns>button
    let btns = $(".btns>button");
    //    console.log("버튼개수:",btns.length);

    // 대상2 : 미니언즈 - .mi
    let mi = $(".mi");

    // 대상3 : 빌딩각방 - .building li
    let bd = $(".building li");
    // console.log("방수:",bd.length);

    // 대상4 : 메시지박스 - .msg
    let msg = $(".msg");

    //// 삽입이미지 변수 셋팅 ////////
    // 좀비 이미지 태그
    let mz1 =
        '<img src="images/mz1.png" alt="좀비1" class="mz">';
    let mz2 =
        '<img src="images/mz2.png" alt="좀비2" class="mz">';
    let zom =
        '<img src="images/zom.png" alt="좀비들" class="mz">';
    // 주사기 이미지 태그
    let inj =
        '<img src="images/inj.png" alt="주사기" class="inj">';

    // 미니언즈 가로위치 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width() * 0.05;
    // console.log("가로크기의 5%:",win5);
    // width() 가로크기, height() 세로크기
    // -> 단위없는 px 숫자값 리턴함


    /**************************************************** 
                        2. 초기화 셋팅
    ****************************************************/
    // 2-1. 버튼셋팅 : 모든버튼을 숨기고 첫번째만 보이게함
    btns.hide().first().show();
    // 버튼들.숨겨().첫번째().보여()
    // 주어는 하나! 뒤에 메서드 체인!

    // 2-2. 빌딩숫자셋팅 :
    // -> 모든 빌딩 li를 순서대로 돌면서 순번넣기 + 좀비넣기
    bd.each((idx, ele) => {
        // console.log(idx);

        // 1. 각 li요소에 글자넣기(순번)
        $(ele).text(idx);

        // 2. 좀비 + 주사기 넣기
        // append(요소) - 선택요소 내부에 맨뒤추가
        if (idx === 9) $(ele).append(mz1);
        else if (idx === 7) $(ele).append(mz2);
        else if (idx === 1) $(ele).append(zom);
        else if (idx === 2) $(ele).append(inj);

    }); /////////////// each /////////////////

    /* 
         [ for문을 사용하지 않고 돌게해주는 제이쿼리 메서드 ]
         >>> each(function(idx,ele){구현부})
         >>> each((idx,ele)=>{구현부})

         - 선택요소를 순서대로 돌면서 구현부를 실행함
         - idx 첫번째 전달변수는 순번이 전달됨(0부터)
         - ele 두번째 전달변수는 요소자신
         (this키워드와 동일-단,화살표함수가 아닐때)
         - 전달변수는 순서와 개수가 중요함!
         - 이 메서드를 사용하면 for문을 안써도 됨!
    */

    // 2-3. 모든 좀비 숨기기
    $(".mz").hide();
    // 선택요소가 여러개이면 for문을 돌듯이 모두 셋팅됨!

    /************************************************** 
             3. 버튼별 클릭 이벤트 함수 만들기
    **************************************************/

    // 3-1. "들어가기" 버튼 클릭 시작 ////////////
    btns.first() // 버튼들.첫번째()
        .click(function () {
            // console.log($(this).text(),"버튼");

            // 1. 클릭된 버튼 자신 없애기(this)
            $(this).slideUp(400);
            // slideUp(시간) 
            // -> height값이 0되며 애니메이션
            // 애니메이션 후 display:none됨
            // 반대는 slideDown(시간)

            // 2. 메지시 지우기
            msg.fadeOut(200);
            // fadeOut(시간) 
            // -> opacity가 0되며 애니메이션
            // 애니메이션 후 display:none됨
            // 반대는 fadeIn(시간)

            // 3. 이동위치정보 : 이동할 빌딩li의 위치를 알아내기
            // 이동할 li 타겟 -> bd변수(.building li)
            let tg = bd.eq(8); // 8번방
            // eq(순번) -> 선택요소들 중 몇번째 요소를 선택
            // eq는 seqence(순서) 라는 단어에서 나온말
            let tgtop = tg.offset().top; // 화면에서 top값
            let tgleft = tg.offset().left + win5;
            // 화면에서 left값 + 미니언즈 위치보정값
            console.log(`top:${tgtop} / left:${tgleft}`);
            /* 
                offset() 메서드 : 
                - 기준: 윈도우화면
                - 요소의 위치나 크기정보를 담고있음
                offset().top -> 요소의 top값
                offset().left -> 요소의 left값

                ________________________

                비교) position() 메서드
                - 기준: 포지션있는 부모박스
                - 요소의 위치나 크기정보를 담고있음
                position().top -> 요소의 top값
                position().left -> 요소의 left값
            */

            // 4. 미니언즈 이동하기
            // 대상: .mi -> mi변수
            mi.animate({
                    top: tgtop + "px",
                    left: tgleft + "px"
                }, 2000, //시간
                "easeOutElastic", //이징
                () => { //함수(애니후 콜백함수)

                    // 5. 메시지 변경
                    msg
                        .text("와~! 아늑하다! 옆방으로 가보자!")
                        .fadeIn(200); // 메시지 나타나기

                    // 6. 다음버튼 보이기
                    btns.eq(1).slideDown(400);

                }); ////// animate ///////

            // animate({CSS설정},시간,이징,함수)
            // -> CSS변경을 애니메이션 해주는 메서드
            // -> 트랜지션 설정 불필요!

        }) // 3-1. "들어가기" 버튼 클릭 끝 //////
        // 앞에 세미콜론 없어야 이어짐!!!!!!!!!!!
        // 첫번째 버튼에서 다음버튼 이어짐!
        // 3-2. "옆방으로!" 버튼 클릭 시작 ///////
        .next().click(function () {

            // console.log($(this).text(), "버튼");

            // 1. 자기자신 버튼 없애기
            $(this).fadeOut(200);

            // 2. 메시지 사라지기
            msg.slideUp(200);

            // 3. 이동위치: 9번방
            let tg = bd.eq(9);
            let tgtop = tg.offset().top;
            let tgleft = tg.offset().left + win5;

            // 4. 위치이동
            mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            },1500,"easeOutElastic",
            ()=>{ // 애니후
                // 5. 좀비 등장 -> 9번방 좀비(.mz)
                tg.find(".mz")
                .delay(2000) // 2초간 지연(애니메이션 앞)
                .fadeIn(400,()=>{ // 콜백함수

                    // 6. 메시지 띄우기
                    msg
                    .html("악!;;;; 좀비!<br>어서피하자!")
                    .fadeIn(200) // 나타나기
                    .css({left:"-134%"}); // 박스위치변경

                    // 7. 다음버튼 보이기: '윗층으로 도망가!'
                    btns.eq(2).slideDown(300);


                }); ///// fadeIn ////

                // fadeIn(시간,이징,함수)
                // find(요소) 하위요소 찾아선택
                // delay(시간) 애니메이션 앞에서 지연시간
                // html(태그) 선택요소 내부에 html태그를 넣을때

            }); ///// animate //////

        }) //// 3-2."옆방으로!" 버튼 클릭 끝 //////
        // 앞에 세미콜론 없어야 이어짐!!!!!!!!!!!
        //// 3-3."윗층으로 도망가!" 버튼 클릭 시작 //////
        .next().click(function(){
            // console.log($(this).text(), "버튼");

            // 1. 자기자신 버튼 없애기
            $(this).fadeOut(200);

            // 2. 메시지 사라지기
            msg.slideUp(200);

            // 3. 이동위치: 7번방
            let tg = bd.eq(7);
            let tgtop = tg.offset().top;
            let tgleft = tg.offset().left + win5;

            // 4. 위치이동
            mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            },1500,"easeOutElastic",
            ()=>{ // 콜백함수

                // 5. 메시지 보이기
                msg
                .text("여긴 없겠지?")
                .fadeIn(200);

                // 6. 좀비 보이기 : 현재방의 좀비
                tg.find(".mz")
                .delay(1000)
                .fadeIn(1000,"easeInExpo",
                ()=>{ // 콜백함수

                    // 7. 메시지 수정하기
                    msg.text("악! 여기도!!!");

                    // 8. 다음버튼 보이기: "다시 옆방으로!"
                    btns.eq(3).fadeIn(300);

                }); ////// fadeIn ////////

            }); /////// animate ////////

        }) ///// 3-3."윗층으로 도망가!" 버튼 클릭 끝 /////





}); ////////////////// jQB ///////////////////////////
//////////////////////////////////////////////////////