import { useContext, useEffect, useRef } from "react"
import $ from 'jquery'
import { newprdt } from "../data/newlist"
import { pcon } from "./pilotContext"

export function Newlist(p) {
  const acat=useRef(null)
  let reft=useRef(0)
  let call=useRef(1)
  // if (p.cat!==acat.current) {
  //   reft.current=0
  //   call.current=1
  // }
  useEffect(()=>{
    reft.current=0
    call.current=1
  },[p.cat])
  acat.current=p.cat
  const mymy=useContext(pcon)
  // const ctem=p.ft
  const seld=newprdt[p.cat]
    const mm=()=>{let temp=[]
    for (let x = 0; x < 9; x++) {
        temp[x]=<li className={"m"+(x+1)} key={x} onMouseEnter={info} onMouseLeave={move}>
        <a href="#" onClick={(e)=>{e.preventDefault();p.ft('m'+(x+1))}}><img src={"./images/goods/"+p.cat+"/m"+(x+1)+".png"} alt="신상품" /></a>
      </li>
        
    }
    return temp
    }
    //정규식함수(숫자 세자리마다 콤마해주는 기능)
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
    const info=(e)=>{
      const tg=$(e.currentTarget)
      let kiss=tg.attr('class')
      tg.append(`<div class="ibox"></div>`)
      tg.find('.ibox').html(
        seld[kiss].split('^').map((a,b)=>`<div>${b==2?numberWithCommas(a)+'원':a}</div>`)
      ).animate({opacity:1,top:'110%'},300,'linear')
    }
    const move=(e)=>{$(e.currentTarget).find('.ibox').remove()}
    // console.log(mm)
    
    const flow=(a)=>{
      reft.current--
      if (reft.current<-300) {
        reft.current=0
        a.append(a.find('li').first())
      }
      a.css({left:reft.current+'px'})
      if (call.current) {
        setTimeout(() => {
          flow(a)
        }, 30);
      }
    }
    const stop=()=>{}
    useEffect(()=>{
      flow($('.flist'))
    },[])
    return(
        <>      
  <h2 className="c1tit js-reveal">
    NEW {p.cat.toUpperCase()}'S ARRIVAL
    <button onClick={()=>{mymy.chgPgName('glist')}}>
        전체리스트
    </button>
  </h2>
  <div className="flowbx" onMouseEnter={()=>call.current=0} onMouseLeave={()=>{call.current=1;flow($('.flist'))}}>
    <ul className="flist">
      {mm()}
    </ul>
  </div>
        </>
    )
}