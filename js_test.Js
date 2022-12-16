const windowHref = location.href;
const windowHrefSplit = windowHref.split("/");
const pageName = windowHrefSplit[windowHrefSplit.length - 1];

//console.log(windowHref);
// http://127.0.0.1:5500/%ED%95%9C%EC%A4%84%EC%88%99%EC%A0%9C/1.html
//console.log(windowHrefSplit);
//['http:', '', '127.0.0.1:5500', '%ED%95%9C%EC%A4%84%EC%88%99%EC%A0%9C', '1.html']
//console.log(pageName);
//1.html

//해당페이지에 active 붙이기
// 1.페이지 네임이 1이니 li의 인덱스를 활용한다
// 2.li의 클래스 명을 활용

//일단 클래스가 붙어야돼서 classList.add
//if문 없이 붙이려면.. li의 span 안의 요소를 활용?

// 1. list index 활용
const listIndex = document.querySelectorAll(".li");
// //console.log(listIndex);
// //NodeList(5) [li.li, li.li, li.li, li.li, li.li]

// console.log(listIndex.item(0));
// 첫번째 li를 반환함 
//? 0부터 시작해서 너무 애매한듯
//listIndex.item(0).classList.add("active");
//1번은 킬수 있음...
var indexNum = pageName.replace(".html","") - 1;
//console.log(pageName.replace(".html",""));
listIndex.item(indexNum).classList.add("active");

//2. document에서 숫자를 찾아서 부모 li에 active 붙이기
//span 안에 있는 문자열을 찾아서 ".html" 을 뺀 pagehtml 과 대조?
//근데 이것도 if문 사용해야함

const spanList = document.querySelectorAll(".li span");
// spanList.forEach(function(item){
//     item.textContent;
// });
var indexNum1 = pageName.replace(".html","");
console.log(spanList);
for (var i = 0; i < spanList.length; i++) {
    if (spanList[i].textContent == indexNum1) {
        spanList[i].closest(".li").classList.add("active");
    }
}
//1~5

//console.log(indexNum);
//1

// if(listIndex.find(indexNum) == true){
//     listIndex.closest(indexNum).classList.add("active");
// }


pageName;
