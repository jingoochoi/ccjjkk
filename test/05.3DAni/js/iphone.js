import ive from './dom.js'
/************************************* 
        [ 아이폰 영역오버시 회전기능 ]
        1. 화면에 10등분된 투명 영역을 구현
        2. 이 영역이 이벤트 대상이 됨
        3. 오버시 변경대상인 아이폰에 회전값 변경
        4. 트랜지션으로 애니메이션 설정적용!
        5. 애니메이션 후에 이벤트박스를 보이게함
        (최초 width:0 -> width:100vw)
    *************************************/
console.log("%c🍎📱","font-size:30px")
// console.log("%c","background-image:url(./images/imgs_moving/mv0.jpg)")
const deg=[[30,-60],[30,-30],[30,0],[30,30],[30,60],[-30,-60],[-30,-30],[-30,0],[-30,30],[-30,60],]
const evt=ive.qsa('.evt div')
// console.log(evt)
const iphone=ive.qs('.iphone')
// console.log(iphone)
const screen=ive.qs('.iphone span b')
evt.forEach((a,b)=>{
    ive.addEvt(a,'mouseover',()=>rei(b))
})
function rei(a) {
    iphone.style.transform=`rotateX(${deg[a][0]}deg) rotateY(${deg[a][1]}deg)`
    iphone.style.transition='1s ease-out'
    screen.style.backgroundImage=`url(./images/imgs_moving/mv${a}.jpg)`
    screen.style.backgroundColor='white'
    screen.style.backgroundSize='100% 100%'
    screen.style.aspectRatio='83/75'
}
setTimeout(() => {
    ive.qs('.evt').style.width='100%'
}, 2300);
const curs=ive.qs('.curs')
ive.addEvt(ive.qs('.evt'),'mouseover',liz)
function liz() {
    /* mouseover/out=>this is standard(bubbling o)
        mouseenter/leave=>this.border is standard(bubbling x) */
    ive.qs('.evt').style.cursor='none'
    ive.qs('.evt').onmousemove=function (e) {
        curs.style.top=e.pageY+'px'
        curs.style.left=e.pageX+'px'
        
    }
    // ive.qs('.evt').onmouseenter=function () {
    //     curs.style.backgroundImage='url(./images/earth.png) no-repeat'
    //     // 
    // }
}