// DC PJ 검색모듈 컴포넌트 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Searchcat } from "./Searchcat";
import $, { event } from 'jquery'
import '../../css/searching.css'
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
export function Searching(p){
    const [kkword,setKkword]=useState(p.kword)
    const [nm,setNm]=useState(0)
    const alis=useRef(1)
    const sword=a=>{
        setKkword(a)
    }
    // useEffect(()=>{
    // },[])
    const chog=()=>{
        if (p.kword!=kkword) {
            sword(p.kword)
            $('#schin').val(p.kword)
        }
    }
    if (alis.current) {
        chog()
    }
    const shownb=n=>{
        // $('.cntnum').text(n)
        setNm(n)
    }
    const schlist=()=>{
        let txt=$('#schin').val()
        sword(txt)
    }
    const enterKey=(e)=>{
        alis.current=0
        setTimeout(() => {
            alis.current=1
        }, 100);
        if (e.key=='Enter') {
            let txt=$(e.target).val()
            sword(txt)
            // console.log(txt)
        }
    }
    const check=()=>{}
    const sort=()=>{}
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
                    <h2 className="restit">BROWSE CHARACTERS ({nm})</h2>
                    <aside className="sortby">
                        <select name="sel" id="sel" className="sel" onChange={sort}>
                            <option value="0">A-Z</option>
                            <option value="1">Z-A</option>
                        </select>
                    </aside>
                    <Searchcat word={kkword} moon={shownb}></Searchcat>
                </div>
            </section>
        </>
    )

} ////////////// Searching 컴포넌트 //////////