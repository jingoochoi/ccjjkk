// JS 페이지간 데이터 전달하기 : 서브페이지 JS - sub.js
console.log("%c👗👚👒","font-size:30px")
let pm=location.href
if (pm.indexOf('?')==-1) {
    location.href='Get01.html'
    alert('No!!!!!!!!!!!!!!!!!!!!!!!!!')
}
if (pm.indexOf('=')==-1) {
    location.href='Get01.html'
    alert('No!!!!!!!!!!!!!!!!!!!!!!!!!')
}
pm=pm.split('?')[1]
pm=pm.split('=')[1]
pm=decodeURIComponent(pm)
 /// 데이터 셋업하기! //////
 let sdata = {
    레드샵: {
        배경색: "red",
        이미지: "shop_red.jpg",
    },
    오렌지샵: {
        배경색: "orange",
        이미지: "shop_orange.jpg",
    },
    블루샵: {
        배경색: "blue",
        이미지: "shop_blue.jpg",
    },
    블랙샵: {
        배경색: "black",
        이미지: "shop_black.jpg",
    },
    그린샵: {
        배경색: "green",
        이미지: "shop_green.jpg",
    },
}; ///////// sdata객체 /////////////
// console.log(sdata[pm])
let title=document.querySelector('#title')
let main=document.querySelector('#main')
// let pmm=Object.keys(sdata)
title.style.backgroundColor=`${sdata[pm].배경색}`
title.innerHTML=pm
main.style.background=`url(images/${sdata[pm].이미지})`