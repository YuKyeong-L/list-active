const windowHref = location.href;
const windowHrefSplit = windowHref.split("/");
const pageName = windowHrefSplit[windowHrefSplit.length - 1];

// 추가
/*
const listIndex = document.querySelectorAll(".li");
var indexNum = pageName.replace(".html","") - 1;
listIndex.item(indexNum).classList.add("active");
*/

//추가
const spanList = document.querySelectorAll(".li span");
for (var i = 0; i < spanList.length; i++) {
  if (spanList[i].textContent + ".html" == pageName) {
    spanList[i].closest(".li").classList.add("active");
  }
}
