import { Fragment, useCallback, useRef, useState } from 'react'
import $ from 'jquery'
import '../../css/board.css'
import christmas from '../data/tbdata.json'
christmas.sort((a,b)=>b.idx-a.idx)
let merry
if (localStorage.getItem('bdata')) {
    merry=JSON.parse(localStorage.getItem('bdata'))
}else{
    merry=christmas
    // merry=[]
}
export function Board() {
    const pgbl=11
    const spur=merry.length
    // let init=0
    const[pgnb,setPgnb]=useState(1) 
    const[gift,setGift]=useState(null)
    const[mode,setMode]=useState('l')//crud(c=create,r=read,u=update(include d),d=delete(included in u))+l(list)
    const cdt=useRef(null)//<-react type
    const chgMode=(e)=>{
        // console.log()
        let txt=$(e.currentTarget).find('a').text()
        let md
        switch (txt) {
            case 'List':
                md='l'
                break;
            case 'Write':
                md='c'
                break;
            case 'Modify':
                md='u'
                break;
            case 'Submit':
                md='s'
                break;
            case 'Delete':
                md='d'
                break;
        
            default:
                md='r'
                // break;
        }
        if (md==='r'&&txt!=='Submit') {
            // console.log('read',o,k)
            let cc=$(e.currentTarget).attr('data-idx')
            cdt.current=merry.find(a=>{
                if (a.idx===cc) {
                    return true
                }
            })
            // $(()=>{
            //     $('.readone .name').val(cdt.writer)
            //     $('.readone .subject').val(cdt.tit)
            //     $('.readone .content').val(cdt.cont)
            // })<-javascript style
            setMode(md)
        }
        else if (md==='l') {
            setMode(md)
        }
        else if (md==='u') {
            setMode(md)
        }
        else if (md==='c') {
            setMode(md)
            // console.log('write',o,k)
            $(()=>{
                $('.writeone .name').val('tomtom')
                $('.writeone .email').val('tom@gmail.com')
            })
        }
        else if (md==='s'&&mode==='c') {
            // console.log('submit',o,k)
            $('.writeone .name').val('tomtom')
            $('.writeone .email').val('tom@gmail.com')
        }
        // else if (md==='l'&&txt==='Delete') {
        //     // console.log('delete',o,k)
        // }
        
    }
    const bind=()=>{
        const temp=[]
        for (let i = (pgnb-1)*pgbl; i < pgbl*pgnb; i++) {
            if (i>=spur) {
                break
            }
            temp.push(merry[i])
        }
        // console.log(temp)
        if (temp.length===0) {
            return(
                <tr>
                    <td colSpan="5">There is no data.</td>
                </tr>
            )
        }
        return(
            temp.map((a,b)=>
            <tr key={b}>
                <td>{(b+1)+((pgnb-1)*pgbl)}</td>
                <td><a href="#" data-idx={a.idx} onClick={(e)=>{chgMode(e)}}>{a.tit}</a></td>
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
                                <input type="text" className="name" size="20" readOnly value={cdt.current.writer}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>
                                <input type="text" className="subject" size="60" readOnly value={cdt.current.tit}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td>
                                <textarea
                                    className="content"
                                    cols="60"
                                    rows="10"
                                    readOnly
                                    value={cdt.current.cont}></textarea>
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
                                <input type="text" className="name" size="20" readOnly value={cdt.current.writer}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>
                                <input type="text" className="subject" size="60" defaultValue={cdt.current.tit}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td>
                                <textarea className="content" cols="60" rows="10" defaultValue={cdt.current.cont}></textarea>
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
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">Write</a>
                            </button>
                            }
                            {
                                mode==='c'&&<>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">Submit</a>
                            </button>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">List</a>
                            </button></>
                            }
                            {
                                mode==='r'&&<>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">List</a>
                            </button>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">Modify</a>
                            </button></>
                            }
                            {
                                mode==='u'&&<>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">Submit</a>
                            </button>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">Delete</a>
                            </button>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">List</a>
                            </button></>
                            }
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}