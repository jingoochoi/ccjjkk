// dkb js
window.addEventListener('DOMContentLoaded',ldfn)
function ldfn() {
    // console.log('b')
    startSS()
    let dcbx=document.querySelectorAll('.descbox')
    dcbx.forEach(e=>{e.stopPropagation()})//stop the event bubbling of event obj
}