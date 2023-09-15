// dkb js
const domft={
    // 요소선택함수 ////////
     qs : (x) => document.querySelector(x),
     qsel : (d,x) => d.querySelector(x),
     qsa : (x) => document.querySelectorAll(x),
     qsael : (e,x) => e.querySelectorAll(x),
     addevt:(a,b,c)=>a.addEventListener(b,c),
}
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
