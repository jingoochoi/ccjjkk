window.addEventListener('DOMContentLoaded',ldft)
const qs=x=>document.querySelector(x)
const qa=x=>document.querySelectorAll(x)
function ldft() {
    // console.log('b')
    const contbox=qs('.contbox')
    // console.log(contbox)
    let hcode=''
    for(let i=1;i<=50;i++){
        hcode+=`
        <div>
        <img src="../images/dress/${i}.jpg" alt="dress">
        <a href="#" class="link">your dress</a>
        </div>
        `
    }
    // console.log(hcode)
    contbox.innerHTML=hcode
}