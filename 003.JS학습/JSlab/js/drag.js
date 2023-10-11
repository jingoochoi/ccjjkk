import aespa from './dom.js'
// console.log(aespa)
/*************************************** 
                [ 드래그 기능 구현을 위한 이벤트 ]
                1. 딸 -> 마우스 포인터 누름 -> mousedown

                2. 각 -> 마우스 포인터 올라옴 -> mouseup

                3. 질질 -> 마우스 움직일때 -> mousemove
                -> 드래그 상태는 "딸"상태에서 "질질"하는것!
                
                mousedown 할때 드래그 상태변수값을 1로 변경
                mouseup 할때 드래그 상태변수값을 0으로 변경
                _______________________________________

                [ 드래그 기능구현 원리 ]

                1. 마우스 포인터 위치에 따른 변화 수치를
                계산하여 요소의 top,left 위치값으로 반영한다!

                2. 프로세스
                (1) mousedown 이벤트에서는 시작위치값 저장
                (2) mousemove 이벤트에서는 움직인위치와 시작위치 차이저장
                (3) mousemove에서 차이값을 타겟요소의 left,top값에 반영
                (4) mouseup 이벤트에서는 다음 이동을 위한 마지막위치 저장
                (5) mousemove 이벤트에서 마지막위치로 부터의 이동을 계산함


            ***************************************/
const dtg=aespa.qsa('.dtg')
dtg.forEach(m=>drug(m))
function drug(m) {
    let drag=false
    let fx,fy
    let lx=0,ly=0
    let mx,my
    let rx,ry
    const trua=()=>{drag=true}
    const fals=()=>{drag=false}
    const move=()=>{
        if (drag) {
            mx=event.pageX
            my=event.pageY
        }
    }
    const fp=()=>{
        fx=event.pageX
        fy=event.pageY
    }
    const lp=()=>{
        lx+=rx
        ly+=ry
    }
    aespa.addEvt(m,'mousedown',()=>{
        trua()
        fp()
    })
    aespa.addEvt(m,'mousemove',move)
    aespa.addEvt(m,'mouseup',()=>{
        fals()
        lp()
    })
    aespa.addEvt(m,'mouseleave',fals)
}