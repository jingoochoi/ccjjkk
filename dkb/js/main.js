// dkb js
const domft={
    // 요소선택함수 ////////
     qs : (x) => document.querySelector(x),
     qsel : (d,x) => d.querySelector(x),
     qsa : (x) => document.querySelectorAll(x),
     qsael : (e,x) => e.querySelectorAll(x),
     addevt:(a,b,c)=>a.addEventListener(b,c),
}
console.log("%c👹🧡👰&🕴🧡👩‍🍳","background-color:pink;line-height:2;padding:30px;font-size:30px")
window.addEventListener('DOMContentLoaded',ldfn)
function ldfn() {
    // console.log('b')
    startSS()
    let dcbx=document.querySelectorAll('.descbox')
    dcbx.forEach(e=>{
        e.onwheel=e=>e.stopPropagation()
    })//stop the event bubbling of event obj
    const livebx=domft.qs('.livebox')
    // console.log(livebx)
    let hcode='<ul>'
    livept.forEach(a=>{
        hcode+=`
        <li>
            <figure>
                <img src="imgs/live_photo/${a.img}.jpg" alt="${a.title}">
                <figcaption>${a.title}</figcaption>
            </figure>
        </li>
        `
        // console.log(hcode)
        
    })
    hcode+='</ul>'
    livebx.innerHTML=hcode
}
const gnbli=domft.qsa('.gnb>ul>li')
gnbli.forEach(a=>{
    let atxt=domft.qsel(a,'a').innerHTML
    // console.log(menudt[atxt])
    let gnbdt=menudt[atxt]
    if (gnbdt) {
        // undefined also 'false'
        a.innerHTML+=`
            <div class="smenu">
                <aside class="smbx">
                    <h2>${atxt}</h2>
                    <ol>
                    ${gnbdt.map(a=>`

                    <li>
                        <a href="#">${a}</a>
                    </li>
                    `).join('')}
                    </ol>
                </aside>
            </div>
        `
    }
})
/************************************* 
  [ 상위메뉴 li오버시 하위메뉴 보이기 ]
  이벤트 대상: .gnb>ul>li
  변경 대상: .smenu
*************************************/
// 1. 대상선정
const gnb = domft.qsa('.gnb>ul>li');

// 2. 이벤트 설정하기
// 이벤트 종류: mouseover / mouseout
gnb.forEach(ele=>{
    if (domft.qsel(ele,'.smenu')) {
        
        domft.addevt(ele,'mouseover',overFn);
        domft.addevt(ele,'mouseout',outFn);
    }
});

// 3.함수만들기
function overFn(){
  // console.log('오버',this);
  // 1.하위 .smbx 높이값 알아오기
  let hv = domft.qsel(this,'.smbx').clientHeight;
  // console.log('높이:',hv);
  // 2.하위 서브메뉴박스 만큼 .smenu 높이값 주기
  domft.qsel(this,'.smenu').style.height = hv + 'px';
} //////////// overFn 함수 ////////////

function outFn(){
  // console.log('아웃',this);
  // 서브메뉴 박스 높이값 0만들기!
  domft.qsel(this,'.smenu').style.height = '0px';
} //////////// outFn 함수 ////////////
