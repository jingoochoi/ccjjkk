import aespa from './dom.js'
 // (1) 배열변수 선언과 할당
 const fruit = ["배", "사과", "용과", "딸기"];

 // (2) 과일명과 배경이미지명을 매칭함 -> 객체
 const frObj = {
     배: "fruits_01",
     사과: "fruits_02",
     용과: "fruits_14",
     딸기: "fruits_09",
     두리안: "fruits_17",
     바나나: "fruits_15",
     수박: "fruits_12",
     파인애플: "fruits_13",
     망고: "fruits_24",
     오렌지: "fruits_03",
     체리: "fruits_05",
     멜론: "fruits_11",
     블루베리: "fruits_20",
     레몬: "fruits_04",
 }; ////////// frObj 객체 /////
// console.log(aespa,'next level')
const mbtn=aespa.qsa('.mbtn')
const showit=aespa.qs('.showit')
const cont=aespa.qs('.cont')
// console.log(mbtn,showit,cont)
showit.innerHTML=fruit.join('🛒')
mbtn.forEach(a=>{
    aespa.addEvt(a,'click',winter)
})
function winter() {
    // console.log(this.innerHTML)
    if (this.innerHTML=='과일주세요~!') {
        let hcode=`<ul>`
        fruit.forEach(a=>{
            hcode+=`
                <li style="background:url(./addimg/${frObj[a]}.png) no-repeat center/cover;">${a}</li>
            `
        })
        hcode+=`</ul>`
        cont.innerHTML=hcode
    }
}