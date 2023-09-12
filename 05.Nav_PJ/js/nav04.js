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
    let issub=domFn.qsEl(this,'.smenu')
    // console.log(issub)
    if (issub) {
        // null equals to false in condition of if
        // console.log('b')
        let hv=domFn.qsEl(issub,'ol').clientHeight
        issub.style.height=hv+'px'
        // issub.onmouseleave=function () {
        //     issub.style.height=0
        // }
        // 전체 순회하며 현재만 빼고 처리함
        // .isSameNode(compared ele)->same=true,!same=false
        gnbli.forEach(a=>{
            let sult=a.isSameNode(this)
            let target=domFn.qsEl(a,'.smenu')
            if (!sult) {
                // issub.style.height=0
                if (target) {
                    target.style.height=0
                }
            }
        })
    }
    else {
        gnbli.forEach(a=>{
            let target=domFn.qsEl(a,'.smenu')
                // issub.style.height=0
                if (target) {
                    target.style.height=0
                }
        })
    }
  }