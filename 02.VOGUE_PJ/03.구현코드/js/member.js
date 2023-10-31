// 테스트 JS
console.log("%c　👩\n  👗\n","font-size:100px;text-align:center")
console.log("%cd","font-size:100px;background-image:linear-gradient(to bottom,blue,blue 50%,yellow 51%,yellow);padding-left:100px;padding-right:100px;line-height:1.5;color:transparent",'pray for Ukraine')
// console.log("%c●","font-size:130px;color:red;padding-left:100px;padding-right:100px;border:1px solid black;line-height:1.5;")
import aespa from './com.js'
import stayc from './dom.js'
import cdt1 from './ctgr.json' assert{type:'json'}
import mcode from './mem.js'
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
$('#conf').html(mcode.conf)
$('#chk_all').change(function(){
    let ckbx=$(this).prop('checked')
    /*
    attr()->normal attr
    prop()->normal attr+checked true/false
     */
    // if (ckbx) {
    //     // 
    //     $('.chk').prop('checked',true)
    // }else $('.chk').prop('checked',false)
    $('.chk').prop('checked',ckbx)
})
$('.chk').change(function () {
    let nb=$('.chk:checked').length
    if (nb==3) {
        $('#chk_all').prop('checked',true)
    }else $('#chk_all').prop('checked',false)
})
$('#btnN').click(function () {
    alert('비동의하셨으므로 메인으로 돌아가🐲')
    location.href='index.html'
})
$('#btnY').click(function () {
    if ($('.chk').first().prop('checked')&&$('.chk').eq(1).prop('checked')) {
        alert('통과')
        $('#conf').hide()
        $('.scont').show()
    }
})
/* 
user text form validation test
blur()
 */
const txtf=$('form.logF input[type=text][id!=email2],form.logF input[type=password]')
txtf.blur(function () {
    const gbjg=a=>a.replace(/\s/g,'')
    let gb=$(this).attr('id')=='mnm'?$(this).val().trim():gbjg($(this).val())
    $(this).val(gb)
    if (gb=='') {
        $(this).siblings('.msg').html('입력해라!!!').removeClass('on')
        $(this).val('')
        pass=false
    }
    else if ($(this).attr('id')=='mid') {
        if(vReg(gb,$(this).attr('id'))){
            // 
            $(this).siblings('.msg').html('사용가능').addClass('on')
        }else{
            $(this).siblings('.msg').html('영문자로 시작하는 6~20글자로 입력바람').removeClass('on')
            pass=false
        }
    }
    else if ($(this).attr('id')=='mpw') {
        if(vReg(gb,$(this).attr('id'))){
            // 
            $(this).siblings('.msg').html('사용가능').addClass('on')
        }else{
            $(this).siblings('.msg').html('특수문자,문자,숫자포함 형태의 5~15자리').removeClass('on')
            pass=false
        }
    }
    else if ($(this).attr('id')=='mpw2') {
        if($(this).val()==$('#mpw').val()){
            // 
            $(this).siblings('.msg').html('일치^^').addClass('on')
        }else{
            $(this).siblings('.msg').html('까먹었냐!!!').removeClass('on')
            pass=false
        }
    }
    else if ($(this).attr('id')=='email1') {
        let cplt=$('#email1').val()+'@'+($('#seleml').val()=='free'?$('#email2').val():$('#seleml').val())
        emic(cplt)
    }
    else{
        $(this).siblings('.msg').empty()
        // 
    }
    // $(this).attr('id').html('no')
})
$('#seleml').change(function () {
    if ($(this).val()=='init') {
        $('#email1').siblings('.msg').html('고르라고!!!').removeClass('on')
        $('#email2').hide()
    }
    else if ($(this).val()=='free') {
        $('#email1').siblings('.msg').html('직접 쓰세요').removeClass('on')
        $('#email2').show().val('').focus()
    }else{
    $('#email2').hide();
    $('#email1').siblings('.msg').html('').removeClass('on')
    let cplt=$('#email1').val()+'@'+($('#seleml').val()=='free'?$('#email2').val():$('#seleml').val());
    emic(cplt)}
})
$('#email1,#email2').on('keyup',function () {
    let back=$(this).attr('id')=='email1'?$('#seleml').val():$('#email2').val()
    if ($('#seleml').val()=='free') {
        back=$('#email2').val()
    }
    let cplt=$('#email1').val()+'@'+back;
    emic(cplt)
})
const emic=function (a) {
    if (vReg(a,'eml')) {
        $('#email1').siblings('.msg').html('메일형식이 맞습니다').addClass('on')
    }else{
        $('#email1').siblings('.msg').html('아니라고!!!').removeClass('on')
        pass=false
    }
}
let nn=1
$('.noon').css({cursor:'pointer',textDecoration:'line-through',opacity:1/2}).click(function(){
    $(this).prev().attr('type',nn?'text':'password')
    $(this).css({textDecoration:nn?'none':'line-through',opacity:nn?1:1/2})
    nn=nn?0:1
})
// submit button click->action page in form tag.
// stop it for validation->event.preDft()
let pass=true
$('#btnj').click((a)=>{
    a.preventDefault()
    pass=true
    $(`form.logF input[type=text][id!=email2],form.logF input[type=password]`).trigger('blur')
    if (pass) {
        alert('🎊가입을 추콰드립니돠🎊')
        location.replace='login.html'
    }
})
/*////////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////


