// DC PJ 검색모듈 컴포넌트 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Searchcat } from "./Searchcat";
import { catListData } from "../data/swiper_cat"
import $, { event } from 'jquery'
import '../../css/searching.css'
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
// 최초 원본 데이터는 컴포넌트에서 뺀다.<-리렌더링 시 초기화되기 때문임
// ->컴포넌트 바깥쪽 위에 원본 데이터를 만듬
catListData.sort((a,b)=>a.cname==b.cname?0:a.cname>b.cname?1:-1)
// console.log(temp)
export function Searching(p){
    const [kkword,setKkword]=useState(null)
    const [nm,setNm]=useState(0)
    const [selData,setSelData]=useState([[],2])
    const [ttnb,setTtnb]=useState(0)
    const alis=useRef(1)
    const fsts=useRef(0)
    const xx=useRef(null)
    useEffect(()=>{
        // console.log(xx)
        xx.current.style.color='cornflowerblue'
    })
    const sword=a=>{
        setKkword(a)
    }
    const chog=()=>{
        if (p.kword!=kkword) {
            sword(p.kword)
            $('#schin').val(p.kword)
            // schlist()
        }
    }
    function firstDo (){
        console.log('처음한번만~!',p.kword);
        const firstTemp = catListData.filter(v=>{
          if(v.cname.toLowerCase().indexOf(p.kword.toLowerCase())!==-1) return true;
        })
        
        firstTemp.sort((a,b)=>{
          return a.cname==b.cname?0:a.cname>b.cname?1:-1;
        })
      
        console.log('처음결과:',firstTemp);
        setSelData([firstTemp,2]);
        // 검색건수 상태관리변수 업데이트!
        setTtnb(firstTemp.length);
      
        
        sword(p.kword);
      
      } ///////////// firstDo 함수 ////////
      if (!fsts.current) {
        firstDo()
        fsts.current=1
      }
    if (alis.current) {
        chog()
    }
    const shownb=n=>{
        // $('.cntnum').text(n)
        setNm(n)
    }
    function schlist(e){
        let kyword=$('#schin').val()
        const news=catListData.filter(a=>
            {if (a.cname.toLowerCase().indexOf(kyword)!=-1) {
                return true
            }})
            setSelData([news,2])
            setTtnb(news.length)
    }
    const enterKey=(e)=>{
        if (e.key=='Enter') {
            alis.current=0
            setTimeout(() => {
                alis.current=1
            }, 100);
            let txt=$(e.target).val()
            sword(txt)
            // console.log(txt)
            schlist()
        }
    }
    const check=(e)=>{
        const idid=e.target.id
        const chkd=e.target.checked
        let temp=selData[0]
        let last=[]
        let nb=$('.chkhdn:checked').length
        // console.log()
        if (chkd) {
            const nows=catListData.filter(a=>{
                if (a.alignment==idid) {
                    return true
                }
            })
            if (nb>1) {
                last=[...temp,...nows]
            }
            else{last=nows}
        }
        else{
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].alignment==idid) {
                    temp.splice(i,1)
                    i--
                }
                last=temp
            }
        }
        setSelData([last,2])
        setTtnb(last.length)
    }
    const sort=(e)=>{
        const cval=e.target.value
        let temp=selData[0]
        temp.sort((a,b)=>{
            if (cval==1) {
                return a.cname==b.cname?0:a.cname>b.cname?-1:1
            }
            else if (cval==0) {
                return a.cname==b.cname?0:a.cname>b.cname?1:-1
            }
        })
        setSelData([temp,Number(cval)])
    }
    return(
        <>
            <section className="schbx">
                <div className="schopt">
                    <div className="searching">
                    <FontAwesomeIcon
                  icon={faSearch}
                  className="schbtn"
                  title="Open search"
                  onClick={schlist}
                  ref={xx}
                />
                {/* 입력창 */}
                <input
                  id="schin"
                  type="text"
                  placeholder="Filter by Keyword"
                  onKeyUp={enterKey}
                  defaultValue={kkword}
                //   react input value=>defaultValue
                // ->for readOnly setting to input value
                />
                    </div>
                    <div className="chkbx">
                        <ul>
                            <li>
                                <h2>ALIGNMENT<span className="spbtn">➕</span></h2>
                                <ol>
                                    <li>Heroes<input type="checkbox" id="hero" className="chkhdn" onChange={check}></input>
                                    <label htmlFor="hero" className="chklb"></label></li>
                                    <li>It's Complicated<input type="checkbox" id="comp" className="chkhdn" onChange={check}></input>
                                    <label htmlFor="comp" className="chklb"></label></li>
                                    <li>Villains<input type="checkbox" id="vill" className="chkhdn" onChange={check}></input>
                                    <label htmlFor="vill" className="chklb"></label></li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="listbx">
                    <h2 className="restit">BROWSE CHARACTERS ({ttnb})</h2>
                    <aside className="sortby">
                        <select name="sel" id="sel" className="sel" onChange={sort}>
                            <option value="0">A-Z</option>
                            <option value="1">Z-A</option>
                        </select>
                    </aside>
                    <Searchcat dt={selData[0]} cnt={ttnb}></Searchcat>
                </div>
            </section>
        </>
    )

} ////////////// Searching 컴포넌트 //////////