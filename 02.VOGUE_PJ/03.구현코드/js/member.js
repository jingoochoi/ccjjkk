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
$('.hbtn').click(()=>{$('#mobx').slideToggle(300)})
$('.sbtn').click(()=>{$('.mos').slideToggle(300)})
/* 
user text form validation test
blur()
 */
const txtf=$('form.logF input[type=text][id!=email2],form.logF input[type=password]')
txtf.blur(function () {
    const gbjg=a=>a.replace(/\s/,'')
    if (gbjg($(this).val())=='') {
        $(this).siblings('.msg').html('입력해라!!!')
        $(this).val('')
    }else{
        $(this).siblings('.msg').empty()
        // 
    }
    // $(this).attr('id').html('no')
})
