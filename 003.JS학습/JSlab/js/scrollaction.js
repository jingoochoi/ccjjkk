const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  };
//   event 'scroll'
// event that scroll moves in page with scroll
// even scroll does not move, wheel acts->wheel(unavailable in mobile)
// scroll bar location
// 1. window.scrollY (IE6~11지원안함)
// 2. document.scrollingElement.scrollTop
// 3. document.documentElement.scrollTop
// 4. document.querySelector('html').scrollTop
const scact=domFn.qsa('.scact')
// console.log(scact)
  domFn.addEvt(window,'scroll',scrft)
//   let pos1=scact[0].getBoundingClientRect().top
//   let pos2=scact[1].getBoundingClientRect().top
//   let pos3=scact[2].getBoundingClientRect().top
  function scrft() {
    // console.log(window.scrollY)
    // console.log()
    // console.log(scact[0].getBoundingClientRect().top)
    scact.forEach((a,b)=>{
        let val=scact[b].getBoundingClientRect().top
        if (val<0) {
            a.classList.add('on')
        }
    })
  }