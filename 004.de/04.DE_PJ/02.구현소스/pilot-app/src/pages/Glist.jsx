import { Fragment, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import '../css/glist.css'
import gdata from '../data/glist';
import { Item } from '../modules/Item';
import $ from 'jquery'
import { pcon } from '../modules/pilotContext';
export function Glist() {
    const myde=useContext(pcon)
    const tran=useRef(JSON.parse(JSON.stringify(gdata)))
    const etem=useRef('m1')
    const cats=useRef('men')
    const[rand,setRand]=useState(0)
    const[curr,setCurr]=useState(gdata)
    const pgbl=10
    const spur=gdata.length
    const[pgnb,setPgnb]=useState(1)
    const mobl=5
    const [monb,setMonb]=useState(1)
    const moli=Math.floor(spur/mobl)+(spur%mobl!==0?1:0)
    // const[tail,setTail]=useState(false)
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    const make=()=>{
      let cval
      if (myde.gmod==='F') {
        if (curr!==gdata&&myde.gg.current) {
          tran.current=JSON.parse(JSON.stringify(gdata))
        }
        cval=tran.current.map((a,b)=>
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
      }
      if (myde.gmod==='P') {
        if (myde.gg.current&&pgnb!==1) {
          setPgnb(1)
        }
        // spur=gdata.length
        cval=[]
        for (let i = pgbl*(pgnb-1); i < pgbl*pgnb; i++) {
          if (i>=spur) {
            break
          }
          cval.push(
            <div key={i} onClick={()=>showtail(gdata[i].ginfo[0],gdata[i].cat)}>
        <a href="#" onClick={(e)=>e.preventDefault()}>
          [{i+1}]
          <img src={"./images/goods/"+gdata[i].cat+"/"+gdata[i].ginfo[0]+".png"} alt="dress" />{" "}
          <aside>
            <h2>{gdata[i].ginfo[1]}</h2> <h3>{numberWithCommas(gdata[i].ginfo[3])}원</h3>
          </aside>
        </a>
      </div>
          )
        }
      }
      if (myde.gmod==='M') {
        if (monb!==1&&myde.gg.current) {
          setMonb(1)
        }
        cval=[]
        let lim=mobl*monb
        if (lim>spur) {
          (lim)=spur
        }
        for (let i = 0; i < lim; i++) {
          cval.push(
            <div key={i} onClick={()=>showtail(gdata[i].ginfo[0],gdata[i].cat)}>
              <a href="#" onClick={(e)=>e.preventDefault()}>
                [{i+1}]
                <img src={"./images/goods/"+gdata[i].cat+"/"+gdata[i].ginfo[0]+".png"} alt="dress" />{" "}
                <aside>
                  <h2>{gdata[i].ginfo[1]}</h2> <h3>{numberWithCommas(gdata[i].ginfo[3])}원</h3>
                </aside>
              </a>
            </div>
          )
        }
      }
        return cval
    }
    const moro=()=>{
      myde.gg.current=false
      let momo=monb
      setMonb(++momo)
    }
    const link=()=>{
      let blct=Math.floor(spur/pgbl)
      let blpd=spur%pgbl
      const lim=blct+(blpd===0?0:1)
      let pgcd=[]
      for (let k = 0; k < lim; k++) {
          pgcd[k]=<Fragment key={k}>{pgnb-1===k?<b>{k+1}</b>:<a href='#' onClick={list}>{k+1}</a>}{k<lim-1?' 👕 ':''}</Fragment>
          
      }
      return(pgcd)
    }
    const list=(e)=>{
      myde.gg.current=false
      setPgnb(e.target.innerHTML)
      // bind()
    }
    const showtail=(a,b)=>{
        etem.current=a
        cats.current=b
        setRand(Math.random())
        $('#bgbx').slideDown(300)
    }
    useLayoutEffect(()=>{
      window.scrollTo(0,0)
    },[])
    const chck=(e)=>{
      myde.gg.current=false
      // console.log(e.currentTarget.id)
      const idid=e.target.id
      const chkd=e.target.checked
      
      let nb=$('.ckck:checked').length
      if(chkd){
        const dddd=gdata.filter(a=>{
          if (a.cat===idid) {
            return true
          }
        })
        if (nb>1) {
          tran.current=[...tran.current,...dddd]
        }else{
          tran.current=dddd
        }
      }else{
        const temp=JSON.parse(JSON.stringify(tran.current))
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].cat===idid) {
              temp.splice(i,1)
              i--
          }
          tran.current=[...temp]
        }
      }
      setCurr(tran.current)
    }
  return (
    <>
      <main id="cont">
        <h1 className='tit'>ALL ITEMS LIST</h1>
        {
          myde.gmod==='F'&&
          <section>
            <div id="optbx">
              <label htmlFor="men">남성</label>
              <input type="checkbox" className='ckck' onChange={chck}   id="men" defaultChecked/>
              <label htmlFor="women">여성</label>
              <input type="checkbox" className='ckck' onChange={chck}   id="women" defaultChecked/>
              <label htmlFor="style">스타일</label>
              <input type="checkbox" className='ckck' onChange={chck}   id="style" defaultChecked/>
            </div>
            <div className="grid">
              {make()}
            </div>
          </section>
        }
        {
          myde.gmod==='P'&&
          <section>
            <div className="grid">
              {make()}
            </div>
            <div id="paging">
              {link()}
            </div>
          </section>
        }
        {
          myde.gmod==='M'&&
          <section>
            <div className="grid">
              {make()}
            </div>
            {
              monb!==moli&&
            <div id="more" onClick={moro}><button className="more">
                MORE
            </button></div>
            }
          </section>
        }
        {
            
        <div id="bgbx" style={{position:'fixed',top:0,left:'10vw',paddingTop:'20vh',width:'80vw',height:'100vh',backdropFilter:'blur(3px)',zIndex:333333}}><Item cat={cats.current} good={etem.current}></Item></div>
        }
      </main>
    </>
  );
}
