import ddd from './dom.js'
// console.log(ddd)
import lll from './datalanguage.json' assert{type:'json'}//declaration for json type(assert{type:'json'})
// console.log(lll)
// when import data file like json, using 'Promise' is original for importing whole data file
const cont=ddd.qs('#cont img')
const sel=ddd.qs('.sel')
const gnb=ddd.qsa('#gnb a')
const info=ddd.qs('#info address')
ddd.addEvt(sel,'change',function () {
    let seldt=lll[sel.value]
    // console.log(lll.ko['메뉴'])
    gnb.forEach((a,b)=>{
        a.innerHTML=seldt['메뉴'][b]
    })
    cont.src=`images/${sel.value}.jpg`
    info.innerHTML=seldt['주소']
    if (sel.value=='ko') {
        console.log("%c어서 오세요🥘","font-size:30px")
    }
    if (sel.value=='en') {
        console.log("%cwelcome🍔","font-size:30px")
    }
    if (sel.value=='ja') {
        console.log("%cいらっしゃいませ🍙","font-size:30px")
    }
    if (sel.value=='ch') {
        console.log("%c欢迎光临🍢","font-size:30px")
    }
    if (sel.value=='es') {
        console.log("%chola🍤","font-size:30px")
    }
})