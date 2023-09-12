const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////
  const gnbli=domFn.qsa('.gnb>ul> li')
  gnbli.forEach(a=>{
    domFn.addEvt(a,'click',shows)
  })
  function shows() {
    // console.log(this)
  }