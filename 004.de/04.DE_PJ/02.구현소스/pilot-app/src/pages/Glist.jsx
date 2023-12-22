import { useRef, useState } from 'react';
import '../css/glist.css'
import gdata from '../data/glist';
import { Item } from '../modules/Item';
import $ from 'jquery'
export function Glist() {
    const etem=useRef('m1')
    const cats=useRef('men')
    const[rand,setRand]=useState(0)
    const[curr,setCurr]=useState(gdata)
    // const[tail,setTail]=useState(false)
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    const make=()=>
        curr.map((a,b)=>
        <div key={b} onClick={()=>showtail(a.ginfo[0],a.cat)}>
        <a href="#" onClick={(e)=>e.preventDefault()}>
          [{b+1}]
          <img src={"./images/goods/"+a.cat+"/"+a.ginfo[0]+".png"} alt="dress" />{" "}
          <aside>
            <h2>{a.ginfo[1]}</h2> <h3>{numberWithCommas(a.ginfo[3])}원</h3>
          </aside>
        </a>
      </div>
        )
    const showtail=(a,b)=>{
        etem.current=a
        cats.current=b
        setRand(Math.random())
        $('#bgbx').slideDown(300)
    }
    const chck=(e)=>{
      // console.log(e.currentTarget.id)
      const idid=e.target.id
      const chkd=e.target.checked
      let temp=curr
      let last=[]
      let nb=$('.ckck:checked').length
      if(chkd){
        const dddd=gdata.filter(a=>{
          if (a.cat===idid) {
            return true
          }
        })
        if (nb>1) {
          last=[...temp,...dddd]
        }else{
          last=dddd
        }
      }else{
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].cat===idid) {
              temp.splice(i,1)
              i--
          }
          last=[...temp]
        }
      }
      setCurr(last)
    }
  return (
    <>
      <main id="cont">
        <h1 className='tit'>ALL ITEMS LIST</h1>
        <section>
          <div id="optbx">
            <label htmlFor="men">남성</label>
            <input type="checkbox" className='ckck' onChange={chck} id="men" />
            <label htmlFor="women">여성</label>
            <input type="checkbox" className='ckck' onChange={chck} id="women" />
            <label htmlFor="style">스타일</label>
            <input type="checkbox" className='ckck' onChange={chck} id="style" />
          </div>
          <div className="grid">
            {make()}
          </div>
        </section>
        {
            
        <div id="bgbx" style={{position:'fixed',top:0,left:'10vw',paddingTop:'20vh',width:'80vw',height:'100vh',backdropFilter:'blur(3px)',zIndex:333333}}><Item cat={cats.current} good={etem.current}></Item></div>
        }
      </main>
    </>
  );
}
