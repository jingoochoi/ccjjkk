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
  console.log("%c💃let's dance🕺","color: hotpink; background-image: linear-gradient(to bottom right,red,orange,yellow,green,blue,darkblue,violet); line-height: 2; padding: 30px; font-size: 30px")
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
  const tpg=domFn.qs('.tpg')
  // let num=0
  const target=domFn.qs('.slidePg>ul')
  function scrft() {
    // console.log(domFn.bcr(tpg))
    if (domFn.bcr(tpg)<=0&&domFn.bcr(tpg)>-3000) {
      // num++
      // window.scrollTo(window.scrollX,0)
      target.style.left=domFn.bcr(tpg)+'px'
    }
    else if (domFn.bcr(target)>0) {
      target.style.left=0
    }
  }
  const gnbli=domFn.qsa('.gnb>ul>li')
  const mbg=domFn.qs('.mbg')
  gnbli.forEach(a=>{

    domFn.addEvt(a,'mouseover',ovft)
    domFn.addEvt(a,'mouseout',outft)
    function ovft() {
      let posl=this.offsetLeft
      mbg.style.left=posl+'px'
      mbg.style.opacity=1
    }
    function outft() {
      mbg.style.opacity=0
    }
  })