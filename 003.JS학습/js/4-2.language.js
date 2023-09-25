import ddd from './dom.js'
// console.log(ddd)
import lll from './datalanguage.json' assert{type:'json'}//declaration for json type(assert{type:'json'})
// console.log(lll)
// when import data file like json, using 'Promise' is original for importing whole data file
const cont=ddd.qs('#cont img')
const sel=ddd.qs('.sel')
const gnb=ddd.qs('#gnb a')
const info=ddd.qs('#info address')
ddd.addEvt(sel,'change',function () {
    let seldt=lll[sel.value]
    console.log(lll[0])
    if (sel.value==seldt) {
        
    }
    if (sel.value=='ko') {
        console.log('어서 오세요')
    }
    if (sel.value=='en') {
        console.log('welcome')
    }
    if (sel.value=='ja') {
        console.log('いらっしゃいませ')
    }
    if (sel.value=='ch') {
        console.log('欢迎光临')
    }
    if (sel.value=='es') {
        console.log('hola')
    }
})