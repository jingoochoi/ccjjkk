import Call from "./call.js";
import aespa from './dom.js'
new Call('.dccf1')
const c2= new Call('.dccf2')
c2.nxtm()
const ccdd=$('.calender .main')
ccdd.mouseenter(function () {
    // console.log(this)
    $(this).find('.date').click(()=>{
        let preval=$(this).next().val()
        $(this).parents().prev().val(preval)
    })
})