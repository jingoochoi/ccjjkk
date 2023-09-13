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
const mytxt='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
let hcode=''
let seqnum=0
for (let x of mytxt) {
    // console.log(x)
    if (x==' ') {
        hcode+='&nbsp;'
    }else
    hcode+=`<span style="transition-delay: ${seqnum*0.03}s">${x}</span>`

    seqnum++
}
// console.log(hcode)
stage.innerHTML=hcode
// setTimeout(() => {
    
    
//         stage.classList.add('on')
    
// }, 3000);
stage.onclick=function () {
    stage.classList.toggle('on')
}