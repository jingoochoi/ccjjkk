// 큐브 애니2 JS //////////////
import stayc from './dom.js'
import j from './data_moving.json' assert{type:'json'}
// console.log(j)
/************************************* 
    [구현내용]
    - 휠에 따라 기본기능은 막고 큐브를 회전하는 속성인 로테와이를 이용한 큐브회전적용
    

*************************************/
// DOM 함수 객체 //////////////

console.log("%c🦸‍♂️MOVING🦸‍♀️","color:red;background-color:pink;line-height:2;padding:30px;font-size:30px")
const deg=40
let sts=0
let num=0
const time=300
let crtnum=0
const lim=8
let autot
const cube=stayc.qs('.cube')
const cat=stayc.qs('.catinfo')
stayc.addEvt(window,'wheel',wft)
function wft() {
    if (sts==1) {
        return sts
    }
    sts=1
    setTimeout(() => {
        sts=0
    }, time);
    // console.log('b')
    let dt=event.wheelDelta
    if (dt<0) {
        num--
        crtnum++
        if (crtnum>lim) {
            crtnum=0
        }
    }
    if (dt>0) {
        num++
        crtnum--
        if (crtnum<0) {
            crtnum=lim
        }
    }
    // console.log(j[crtnum])
    cube.style.transform=`rotateY(${deg*num}deg)`
    clearTimeout(autot)
    autot=
    setTimeout(() => {
        yoon()
    }, 1000);
    cat.classList.remove('on')
}
function yoon() {
    // console.log(j[crtnum])
    cat.innerHTML=`
        <h2>${j[crtnum].name}</h2>
        <p>${j[crtnum].desc}</p>
    `
    cat.classList.add('on')
}