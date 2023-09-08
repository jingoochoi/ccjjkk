// CGV PJ 메인 페이지 JS - main.js

// DOM function obj
const domft={
    // 요소선택함수 ////////
     qs : (x) => document.querySelector(x),
     qsa : (x) => document.querySelectorAll(x),
     addevt:(a,b,c)=>a.addEventListener(b,c),
}
const postermn=domft.qsa('.postermn a')
const screen=domft.qs('.screen')
// console.log(postermn,screen)
const mvcode={
    '닥터스트레인지2':'mI9oyFMUlfg',
    '쥬라기월드:도미니언':'DSEfRVqjbFA',
    '브로커':'DpVAb7Bi5UQ',
    '범죄도시2':'aw9j_23nORs',
    '몬스터싱어':'ELuQ4sMp4yw',
    '스파이더맨:노웨이홈':'W7edvITC9g4',
}
postermn.forEach(a=>{
    domft.addevt(a,'click',function () {
        // console.log('b',this)
    })
})