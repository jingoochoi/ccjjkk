// 쇼핑몰 배너 JS - 02.세로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window,"DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 아랫쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 top값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 top값을 0으로 변경한다!

        (2) 윗쪽 버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 top값을
            -100%로 변경한다.
            그 후 top값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/
let clicksts=0
const TIME=300
/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    // console.log("로딩완료!");
    const abtn=qsa('.abtn')
    const slide=qs('#slide')
    const indic=qsa('.indic li')
    // data-=user setting attribute
    slide.querySelectorAll('li').forEach((a,idx)=>a.setAttribute('data-seq',idx))
    abtn.forEach(a=>{addEvt(a,'click',gs)})
    
    function gs() {
        // console.log(this)
        // classList.contains(classname)=boolean whether contains classname
        if (clicksts==1) {
            return
        }
        clicksts=1
        setTimeout(() => {
            clicksts=0
        }, TIME);
        if (this.classList.contains('ab2')) {
            slide.style.top='-100%'
            slide.style.transition=TIME+'ms ease-in-out'
            setTimeout(() => {
                slide.appendChild(slide.querySelectorAll('li')[0])
                slide.style.top='0'
                slide.style.transition='none'
            }, TIME);
        }
        if (this.classList.contains('ab1')) {            
            slide.insertBefore(slide.querySelectorAll('li')[4],slide.querySelectorAll('li')[0])
            slide.style.top='-100%'
            slide.style.transition='none'
            setTimeout(() => {
                slide.style.top='0'
                slide.style.transition=TIME+'ms ease-in-out'
            }, 0);
        }
        // console.log(this)
        let nowsq=slide.querySelectorAll('li')[this.classList.contains('ab2')?1:0].getAttribute('data-seq')
        indic.forEach(function (a,idx) {
            if (idx==nowsq) {
                a.classList.add('on')
            }else a.classList.remove('on')
        })
    }
    addEvt(document,'keydown',kdft)
    function kdft() {
        // console.log('b')
        if (clicksts==1) {
            return
        }
        clicksts=1
        setTimeout(() => {
            clicksts=0
        }, 300);
        if (event.key=='ArrowRight') {
            slide.style.top='-100%'
            slide.style.transition='.3s ease-in-out'
            setTimeout(() => {
                slide.appendChild(slide.querySelectorAll('li')[0])
                slide.style.top='0'
                slide.style.transition='none'
            }, 300);
        }
        if (event.key=='ArrowLeft') {
            slide.insertBefore(slide.querySelectorAll('li')[4],slide.querySelectorAll('li')[0])
            slide.style.top='-100%'
            slide.style.transition='none'
            setTimeout(() => {
                slide.style.top='0'
                slide.style.transition='.3s ease-in-out'
            }, 0);
        }
        // console.log(this)
        let nowsq=slide.querySelectorAll('li')[event.key=='ArrowRight'?1:0].getAttribute('data-seq')
        
        indic.forEach(function (a,idx) {
            if (idx==nowsq) {
                a.classList.add('on')
            }else a.classList.remove('on')
        })
    }
} //////////////// loadFn 함수 ///////////////
