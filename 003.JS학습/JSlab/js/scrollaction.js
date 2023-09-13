const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  };
  startSS()
//   event 'scroll'
// event that scroll moves in page with scroll
// even scroll does not move, wheel acts->wheel(unavailable in mobile)
// scroll bar location
// 1. window.scrollY (IE6~11지원안함)
// 2. document.scrollingElement.scrollTop
// 3. document.documentElement.scrollTop
// 4. document.querySelector('html').scrollTop
const scact=domFn.qsa('.hide')
// console.log(scact)
  domFn.addEvt(window,'scroll',scrft)
  domFn.addEvt(window,'scroll',mvwm)
  domFn.addEvt(window,'scroll',mvtt)
  let pos1=scact[0].offsetTop
  let pos2=scact[1].offsetTop
  let pos3=scact[2].offsetTop
  function scrft() {
    // console.log(window.scrollY)
    // console.log()
    // console.log(scact[0].getBoundingClientRect().top)
    
    const crit=window.innerHeight/4*3
    scact.forEach((a,b)=>{
      let val=scact[b].getBoundingClientRect().top
        if (val<crit) {
            a.classList.add('on')
        }else a.classList.remove('on')
    })
    
  }
  // function addon(a) {
  //   scact.forEach((a,b)=>{ let val=scact[a].getBoundingClientRect().top
  //       if (val<crit) {
  //           a.classList.add('on')
  //       }else a.classList.remove('on')}
  //       )
  // }
   // 구현내용: 글자를 박스에 넣고 하나씩 날아오면서 등장
                // 1.대상선정: .stage
                const stage = document.querySelector(".stage");
                // console.log(stage);

                // 2.데이터 변수할당
                const mytxt = "신카이 마코토";

                // 3.데이터글자 한글자씩 태그싸기
                // for of문사용!

                let hcode = ""; // 코드저장변수
                let idx = 0; // 순번변수

                for (let x of mytxt) {
                    // 띄어쓰기일 경우 특수문자처리!
                    if (x === " ") hcode +=  "&nbsp";
                    // 코드만들어 변수에 대입연산자로 넣기!
                    else
                    hcode += `<span style="transition-delay: ${idx * 0.1}s">
                    ${x}</span>`;

                    // 순번변수증가
                    idx++;
                } //////////// for of ////////////

                // console.log(hcode);

                // 4. 스테이지 박스에 글자넣기
                stage.innerHTML = hcode;

                // 5. 일정시간후 스테이지박스에 클래스 "on"주고 애니작동!
                setTimeout(() => {
                    stage.classList.add("on");                    
                }, 2000);
    let limit=document.body.clientHeight - window.innerHeight
    
    function mvwm() {
      let wtop=window.innerHeight*scrollY/limit
      domFn.qs('#woman').style.top=wtop+'px'
      if (scrollY==0) {
        domFn.qs('#woman').style.top='-20%'
      }
    }
    const tit=domFn.qs('.tit')
    function mvtt() {
      // console.log('b')
      if (scrollY>pos1 - window.innerHeight/2&&scrollY<pos2) {
        tit.style.left='30%'
        tit.style.top='50%'
        tit.style.transition='.1s'
      }
      if (scrollY>pos2 - window.innerHeight/2&&scrollY<pos3) {
        tit.style.left='70%'
        tit.style.top='50%'
        tit.style.transition='.1s'
      }
      if (scrollY>pos3 - window.innerHeight/2) {
        tit.style.left='30%'
        tit.style.top='50%'
        tit.style.transition='.1s'
      }
    }