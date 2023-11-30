import { useEffect } from "react"
import $ from 'jquery'
import { newprdt } from "../data/newlist"

export function Newlist(p) {
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
    const info=(e)=>{
      const tg=$(e.currentTarget)
      let kiss=tg.attr('class')
      tg.append(`<div class="ibox"></div>`)
      tg.find('.ibox').html(
        seld[kiss].split('^').map((a)=>`<div>${a}</div>`)
      ).animate({opacity:1,top:'110%'},300,'linear')
    }
    const move=(e)=>{$(e.currentTarget).find('.ibox').remove()}
    // console.log(mm)
    let reft=0
    let call=1
    const flow=(a)=>{
      reft--
      if (reft<-300) {
        reft=0
        a.append(a.find('li').first())
      }
      a.css({left:reft+'px'})
      if (call) {
        setTimeout(() => {
          flow(a)
        }, 30);
      }
    }
    const stop=()=>{}
    useEffect(()=>{
      flow($('.flist'))
    })
    return(
        <>      
  <h2 className="c1tit js-reveal">
    NEW {p.cat.toUpperCase()}'S ARRIVAL
    <button>
        전체리스트
    </button>
  </h2>
  <div className="flowbx" onMouseEnter={()=>call=0} onMouseLeave={()=>{call=1;flow($('.flist'))}}>
    <ul className="flist">
      {mm()}
    </ul>
  </div>
        </>
    )
}