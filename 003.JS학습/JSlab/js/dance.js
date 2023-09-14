// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
    bcr:a=>a.getBoundingClientRect().top
  }; /////// domFn 객체 /////////////
  console.log("%c💃let's dance🕺","color: red; background-image: linear-gradient(to bottom right,red,orange,yellow,green,blue,darkblue,violet); line-height: 2; padding: 30px; font-size: 30px")
  const slidepg=domFn.qs('.slidePg')
  // console.log(slidepg)
  let hcode=''
  for (let i = 0; i < 7; i++) {
    hcode+=`
      <li><img src="./labimg/dance/${i+1}.jpg"></li>
    `
  }
  // console.log(hcode)
  hcode=`<ul>${hcode}</ul>`
  slidepg.innerHTML=hcode
  domFn.addEvt(window,'scroll',scrft)
  
  function scrft() {
    // console.log(domFn.bcr(slidepg))
    if (domFn.bcr(slidepg)==0) {
      
    }
  }