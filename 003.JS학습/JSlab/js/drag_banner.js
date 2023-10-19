import aespa from './dom.js'
console.log("%c🐭💨","font-size:100px")
console.log("%c🌆","font-size:100px;background-image:linear-gradient(to bottom,red,yellow);line-height:200px;padding-left:50px;padding-right:50px")
const banbx= aespa.qsa('.banbx')
banbx.forEach(a=>{
    // 
    slideft(a)
})
// HTML태그 로딩후 loadFn함수 호출! ///
// aespa.addEvt(window,"DOMContentLoaded", slideft);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/
/****************************************** 
 함수명: loadFn
 기능: 로딩 후 버튼 이벤트 및 기능구현
 ******************************************/
function slideft(a) {
    let clicksts=0
    const TIME=300
    // console.log("로딩완료!");
    const sdprt=a
    const slide=aespa.qsEl(sdprt,'.slide')
    const abtn=aespa.qsaEl(sdprt,'.abtn')
    let indic=aespa.qsEl(sdprt,'.indic')
    // console.log(slide)
    for (let i = 0; i < aespa.qsaEl(slide,'li').length; i++) {
        indic.innerHTML+=`
        <li ${i==0?'class="on"':''}>
            <img src="labimg/dot1.png" alt="흰색">
            <img src="labimg/dot2.png" alt="회색">
        </li>
        `
        
    }
    indic=aespa.qsaEl(sdprt,'.indic li')
    // data-=user setting attribute
    slide.querySelectorAll('li').forEach((a,idx)=>a.setAttribute('data-seq',idx))
    abtn.forEach(a=>{aespa.addEvt(a,'click',gs)})

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
        let isr=this.classList.contains('ab2')
        if (this.classList.contains('ab2')) {
            rightsl()
        }
        if (this.classList.contains('ab1')) {            
            slide.insertBefore(slide.querySelectorAll('li')[4],slide.querySelectorAll('li')[0])
            // slide.style.left='-330%'
            slide.style.left=-(slide.parentElement.clientWidth*3.3-rx)+'px'
            slide.style.transition='none'
            setTimeout(() => {
                slide.style.left='-220%'
                slide.style.transition=TIME+'ms ease-in-out'
            }, 0);
        }
        chgid(isr)
        // clearauto()
    }
    
    function chgid(isr) {
        let nowsq=slide.querySelectorAll('li')[isr?1:0].getAttribute('data-seq')
        indic.forEach(function (a,idx) {
            if (idx==nowsq) {
                a.classList.add('on')
            }else a.classList.remove('on')
        })
    }
    function rightsl() {
        // console.log(TIME);
        slide.style.left='-330%'
        slide.style.transition=TIME+'ms ease-in-out'
        setTimeout(() => {
            slide.appendChild(slide.querySelectorAll('li')[0])
            slide.style.left='-220%'
            slide.style.transition='none'
        }, TIME);
    }
    aespa.addEvt(document,'keydown',kdft)
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
            slide.style.left='-330%'
            slide.style.transition='.3s ease-in-out'
            setTimeout(() => {
                slide.appendChild(slide.querySelectorAll('li')[0])
                slide.style.left='-220%'
                slide.style.transition='none'
            }, 300);
        }
        if (event.key=='ArrowLeft') {
            slide.insertBefore(slide.querySelectorAll('li')[4],slide.querySelectorAll('li')[0])
            slide.style.left='-330%'
            slide.style.transition='none'
            setTimeout(() => {
                slide.style.left='-220%'
                slide.style.transition='.3s ease-in-out'
            }, 0);
        }
        let nowsq=slide.querySelectorAll('li')[event.key=='ArrowRight'?1:0].getAttribute('data-seq')
        indic.forEach(function (a,idx) {
            if (idx==nowsq) {
                a.classList.add('on')
            }else a.classList.remove('on')
        })
    }
    let autoI;
    let autot
    function slideauto() {
        autoI= setInterval(() => {
            // abtn[1].click()
            // rightsl()
            chgid(1)
        }, 3000);
        
    }
    // slideauto()
    function clearauto() {
        clearInterval(autoI)
        clearTimeout(autot)//stop timeout overriding(gwang cl gum ji)
        autot= setTimeout(() => {
            // slideauto()
        }, 10000);
    }
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
const dtg=aespa.qsa('.dtg')//a.k.a.slide
dtg.forEach(m=>drug(m))
let rx=0;
function drug(m) {
    let drag=false
    let fx,fy
    // 첫 위치=슬라이드 최초 위치
    let lx=m.offsetLeft,ly=0
    let mx,my
    // let rx,ry
    const trua=()=>{drag=true}
    const fals=()=>{drag=false}
    const move=(o)=>{
        if (drag) {
            m.style.transition='none'
            mx=o.pageX||o.touches[0].screenX
            // my=o.pageY||o.touches[0].screenY
            rx=mx-fx
            // ry=my-fy
            // m.style.top=ry+ly+'px'
            m.style.left=rx+lx+'px'
            dtg.forEach(p=>{p.style.zIndex=0;})
            m.style.cursor='grabbing'
            m.style.zIndex=333
            if (!drag) {
                m.style.zIndex=3
            }
        }
    }
    const fp=()=>{
        fx=event.pageX||event.touches[0].screenX
        // fy=event.pageY||event.touches[0].screenY
    }
    const lp=()=>{
        lx+=rx
        // ly+=ry
    }
    aespa.addEvt(m,'mousedown',()=>{
        trua()
        fp()
    })
    aespa.addEvt(m,'mousemove',move)
    aespa.addEvt(m,'mouseup',()=>{
        fals()
        // lp()
        m.style.cursor='grab'
        lctn(m)
    })
    aespa.addEvt(m,'mouseleave',fals)

    aespa.addEvt(m,'touchstart',()=>{
        trua()
        fp()
    })
    aespa.addEvt(m,'touchmove',move)
    aespa.addEvt(m,'touchend',()=>{
        fals()
        // lp()
        lctn(m)
    })
    
}
function lctn(p) {
    let lft1=p.offsetLeft
    let pitl=p.parentElement.clientWidth*2.2
    if (lft1<-pitl-50) {
        aespa.qsEl(p.parentElement,'.ab2').click()
    }
    else if (lft1>-pitl+50) {
        aespa.qsEl(p.parentElement,'.ab1').click()
        // 
    }
    else{
        p.style.left='-220%'
        p.style.transition='left .2s ease-in-out'
    }
}