import { useRef, useState } from 'react';
import '../css/glist.css'
import gdata from '../data/glist';
import { Item } from '../modules/Item';
import $ from 'jquery'
export function Glist() {
    const etem=useRef('m1')
    const cats=useRef('men')
    const[rand,setRand]=useState(0)
    // const[tail,setTail]=useState(false)
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    const make=()=>
        gdata.map((a,b)=>
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
  return (
    <>
      <main id="cont">
        <h1 className='tit'>ALL ITEMS LIST</h1>
        <section>
          <div id="optbx">
            <label htmlFor="men">남성</label>
            <input type="checkbox" id="men" defaultChecked/>
            <label htmlFor="women">여성</label>
            <input type="checkbox" id="women" defaultChecked/>
            <label htmlFor="style">스타일</label>
            <input type="checkbox" id="style" defaultChecked/>
          </div>
          <div className="grid">
            {make()}
          </div>
        </section>
        {
            
        <div id="bgbx" style={{position:'fixed',top:0,paddingTop:'20vh',height:'80vh',backdropFilter:'blur(3px)',zIndex:333333}}><Item cat={cats.current} good={etem.current}></Item></div>
        }
      </main>
    </>
  );
}
