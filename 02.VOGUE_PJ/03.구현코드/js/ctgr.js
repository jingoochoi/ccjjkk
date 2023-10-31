// 테스트 JS
console.log("%c　👩\n  👗\n","font-size:100px;text-align:center")
console.log("%cd","font-size:100px;background-image:linear-gradient(to bottom,blue,blue 50%,yellow 51%,yellow);padding-left:100px;padding-right:100px;line-height:1.5;color:transparent",'pray for Ukraine')
// console.log("%c●","font-size:130px;color:red;padding-left:100px;padding-right:100px;border:1px solid black;line-height:1.5;")
import aespa from './com.js'
import stayc from './dom.js'
import cdt1 from './ctgr.json' assert{type:'json'}
// 부드러운 스크롤 모듈
import  {startSS, setpos } from "./smoothScroll23.js";
// 부드러운 스크롤 적용 //////////
startSS();
const top=stayc.qs('.toparea')
top.innerHTML=aespa.toparea
const foot=stayc.qs('.footarea')
foot.innerHTML=aespa.footarea
top.innerHTML+=aespa.mobtn
top.parentElement.innerHTML+=aespa.mobx
const hide=$('.mainarea section')
// const hide=stayc.qsa('.mainarea section')

$(window).scroll(()=>{
    let tp=$(window).scrollTop()
    // 
    if (tp>100) {
        // 
        $('#toparea').addClass('on')
    }else $('#toparea').removeClass('on')
    if (tp>300) {
        // 
        $('.tbtn').addClass('on')
    }else $('.tbtn').removeClass('on')
})
$('.tbtn').click((p)=>{
    p.preventDefault()
    setpos(0)
})
$('.hbtn').click(()=>{$('#mobx').slideToggle(300)})
$('.sbtn').click(()=>{$('.mos').slideToggle(300)})
let key1=location.href
svl1()
function svl1(){
    try {
    if (key1.indexOf('?')==-1) {
        throw 'error'
    }
    if (key1.indexOf('=')==-1) {
        throw 'error'
    }
    } catch (e) {
        alert(e)
        location.href='index.html'
    }
    key1=key1.split('?')[1].split('=')[1]
    // console.log(key1)
    key1=key1.replace('%20&amp;%20',' & ')
    key1=decodeURIComponent(key1)
    const sdt1=cdt1[key1]
    $('.mainarea').addClass(key1.replace(' & ','-')).addClass(key1.replace('#',''))
    $('.cattit').html(sdt1['제목'])
    // console.log(key1)
    if (sdt1.메뉴=='없음') {
        $('.lnb').remove()
    }else $('.lnb').html(`<ul>
    ${sdt1.메뉴.map(p=>`<li><a href="#">${p}</a></li>`).join('👗')}
    </ul>`)
    $('.catcon h2').each((p,q)=>{
        $(q).html(sdt1.타이틀[p])
    })
}
// title change
$('title').prepend(key1.toUpperCase()+' | ')