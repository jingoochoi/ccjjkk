// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////
  const stage=domFn.qs('.stage')
//   console.log(stage)
const mytxt='you are so good?!'
let hcode=''
let seqnum=0
for (let x of mytxt) {
    // console.log(x)
    if (x==' ') {
        hcode+='&nbsp;'
    }else
    hcode+=`<span>${x}</span>`
}
// console.log(hcode)
stage.innerHTML=hcode