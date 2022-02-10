// 카테고리 페이지 JS - category.js

// Get방식으로 넘어온 값 받기!
let pm = location.href;

// 에러방지를 위해 물음표 존재여부 체크하기!!!
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
    // 첫 페이지로 돌아가!
} ////////////// if ///////////////

// url로 받은 문자값 가공하기!
pm = pm.split("?")[1].split("=")[1];

console.log("URL값->",pm);