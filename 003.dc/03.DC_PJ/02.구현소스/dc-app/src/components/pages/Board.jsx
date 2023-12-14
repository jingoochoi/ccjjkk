import { Fragment, useState } from 'react'
import '../../css/board.css'
import christmas from '../data/tbdata.json'
christmas.sort((a,b)=>b.idx-a.idx)
let merry
if (localStorage.getItem('bdata')) {
    merry=JSON.parse(localStorage.getItem('bdata'))
}else{
    merry=christmas
}
export function Board() {
    const pgbl=11
    const spur=christmas.length
    // let init=0
    const[pgnb,setPgnb]=useState(1) 
    const[gift,setGift]=useState(null)
    const[mode,setMode]=useState('l')//crud(c=create,r=read,u=update(include d),d=delete(included in u))+l(list)
    const chgMode=(e)=>{
        // console.log()
        let tg=e.target.innerHTML
        switch (tg) {
            case 'Write':
                setMode('c')
                break;
            case 'List':
                setMode('l')
                break;
        }
    }
    const bind=()=>{
        // <tr>
        //     <td colSpan="5">There is no data.</td>
        // </tr>
        const temp=[]
        for (let i = (pgnb-1)*pgbl; i < pgbl*pgnb; i++) {
            if (i>=spur) {
                break
            }
            temp.push(merry[i])
        }
        // console.log(temp)
        return(
            temp.map((a,b)=>
            <tr key={b}>
                <td>{(b+1)+((pgnb-1)*pgbl)}</td>
                <td><a href="#" datatype={a.idx}>{a.tit}</a></td>
                <td>{a.writer}</td>
                <td>{a.date}</td>
                <td>{a.cnt}</td>
            </tr>
            )
        )
    }
    const link=()=>{
        let blct=Math.floor(spur/pgbl)
        let blpd=spur%pgbl
        const lim=blct+(blpd===0?0:1)
        let pgcd=[]
        for (let k = 0; k < lim; k++) {
            pgcd[k]=<Fragment key={k}>{pgnb-1===k?<b>{k+1}</b>:<a href='#' onClick={list}>{k+1}</a>}{k<lim-1?' 👨‍🎤 ':''}</Fragment>
            
        }
        return(pgcd)
    }
    const list=(e)=>{
        setPgnb(e.target.innerHTML)
        // bind()
    }
    return(
        <>
            {
                mode==='l'&&
            <table className="dtbl" id="board">
                    <caption>OPINION</caption>
                    {/* 상단 컬럼명 표시영역 */}
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Title</th>
                            <th>Writer</th>
                            <th>Date</th>
                            <th>Hits</th>
                        </tr>
                    </thead>
                    {/* 중앙 레코드 표시부분 */}
                    <tbody>
                        {bind()}
                    </tbody>
                    {/* 하단 페이징 표시부분 */}
                    <tfoot>
                        <tr>
                            <td colSpan="5" className="paging">
                                {/* 페이징번호 위치  */}
                                {link()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            }
            {
                mode==='c'&&
                (
                    <table className="dtblview writeone">
                    <caption>OPINION : Write</caption>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" className="name" size="20" readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="text" className="email" size="40" readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>
                                <input type="text" className="subject" size="60" />
                            </td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td>
                                <textarea className="content" cols="60" rows="10"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                )
            }
            {
                mode==='r'&&
                (
                    <table className="dtblview readone">
                    <caption>OPINION : Read</caption>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" className="name" size="20" readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>
                                <input type="text" className="subject" size="60" readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td>
                                <textarea
                                    className="content"
                                    cols="60"
                                    rows="10"
                                    readOnly></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                )
            }
            {
                mode==='u'&&
                (
                    <table className="dtblview updateone">
                    <caption>OPINION : Modify</caption>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" className="name" size="20" readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>
                                <input type="text" className="subject" size="60" />
                            </td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td>
                                <textarea className="content" cols="60" rows="10"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                )
            }
            <br />
            <table className="dtbl btngrp">
                <tbody>
                    <tr>
                        <td>
                            {
                                mode==='l'&&
                            <button onClick={chgMode}>
                                <a href="#">Write</a>
                            </button>
                            }
                            {
                                mode==='c'&&<>
                            <button onClick={chgMode}>
                                <a href="#">Submit</a>
                            </button>
                            <button onClick={chgMode}>
                                <a href="#">List</a>
                            </button></>
                            }
                            {
                                mode==='r'&&
                            <button onClick={chgMode}>
                                <a href="#">List</a>
                            </button>
                            }
                            {
                                mode==='u'&&<>
                            <button onClick={chgMode}>
                                <a href="#">Submit</a>
                            </button>
                            <button onClick={chgMode}>
                                <a href="#">Delete</a>
                            </button>
                            <button onClick={chgMode}>
                                <a href="#">List</a>
                            </button></>
                            }
                            {/* <button onClick={chgMode}>
                                <a href="#">Modify</a>
                            </button> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}