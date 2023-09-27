// Racing PJ 메인 JS - main.js


// DOM메서드 모듈
import domFn from "./dom.js";
console.log("%c🏁🏃‍♂️🐇VS🐢","color:red;font-size:30px")
/********************************************** 
            [ 게임 기능정의 ]
    _________________________________

    1. 게임룰: 거북버튼 클릭하여 거북을
        왼쪽에서 오른쪽으로 이동함
        이때 토끼는 자동으로 이동하여
        결승선에 먼저 도달하는 레이서가 승리함
    2. 토끼의 이동속도는 레벨로 설정함
    3. 결승선 도착은 둘 중 하나가 먼저
        도착할 경우 판별함수에서 결과를
        화면에 출력한다.
    4. 포커스가 버튼에 갈 경우 마우스가
        아닌 키보드 버튼으로 조작할 수 없게함
        (마우스만 사용하도록 함!)
    5. 기본적으로 거북이동버튼 클릭시
        토끼는 자동으롤 작동됨!
    6. 토끼이동버튼은 토끼만 미리 작동가능
    7. 처음으로 버튼은 전체를 리셋함
**********************************************/

// 1. 대상선정 ///////////////////
// (1) 거북 : #t1
const turtle=domFn.qs('#t1')
// (2) 토끼 : #r1
const rabbit=domFn.qs('#r1')
// (3) 버튼 : #btns a
const button=domFn.qsa('#btns a')
// (4) 레벨 : #level
const level=domFn.qs('#level')
// (5) 메시지박스 : #msg
const message=domFn.qs('#msg')
// (6) 토끼, 거북 위치값 변수
let r1pos=0
let t1pos=0
// 토끼위치 : r1pos / 거북위치 : t1pos 

// cg(msg);

// 2. 이벤트 설정하기 ////////////
// 대상: 버튼들 - btns변수
button.forEach(a=>{
    domFn.addEvt(a,'click',gg)
})
function gg() {
    // console.log(this)
    if (this.innerHTML=='토끼출발') {
        // console.log(this)
        // rabbit.style.left=++r1pos+'px'
        goR1()
    }
    if (this.innerHTML=='거북출발') {
        if (ttst) {
            return
        }
        t1pos+=16
        turtle.style.left=++t1pos+'px'
        this.blur()
        goR1()
    }
    if (this.innerHTML=='처음으로') {
        location.reload()
    }
}
/*********************************** 
    함수명: goR1
    기능: 토끼자동이동(인터발함수)
***********************************/
let autoi
function goR1() {
    if (!autoi) {
        // 
        autoi=setInterval(() => {
            rabbit.style.left=++r1pos+'px'
            // if (650+'px'<=rabbit.style.left) {
            //     // 
            // }
            whoWinner()
        }, level.value);
    }
}

/***************************************** 
    함수명: whoWinner
    기능: 기준값 보다 레이서위치값이 큰경우
        승자를 판별하여 메시지를 보여준다!
*****************************************/
let ttst=0
function whoWinner() {
    if (r1pos>=650||t1pos>=650) {
        clearInterval(autoi)
        ttst=1
        if (t1pos>r1pos) {
            // console.log("%c🐢'🐇,잤냐ㅅㅂㅋㅋㅋ'","font-size:30px")
            message.innerHTML='🐇잤냐ㅋㅋㅋ'
            message.style.display='block'
            message.style.zIndex=333
        }
        if (r1pos>t1pos) {
            message.innerHTML='🐢ㅂㅅ'
            message.style.display='block'
            message.style.zIndex=333
        }
        domFn.qs('.cover').innerHTML=`<div 
        style='
            position:fixed;
            top:0;
            left:0;
            width:100vw;
            height:100vh;
            background-color:#000;
            opacity:0.5;
            z-index:100;
    '></div>`
    domFn.qs('#btns').style.zIndex=333
    }
}