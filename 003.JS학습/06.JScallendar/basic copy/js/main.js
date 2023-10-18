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
        preval=preval.split('-')
        preval=preval[0]+'년 '+preval[1]+'월 '+preval[2]+'일'
        $(this).parents().prev().val(preval)
    })
})