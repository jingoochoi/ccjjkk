import { useState } from 'react'
import '../../css/board.css'
import christmas from '../data/tbdata.json'
let merry
if (localStorage.getItem('bdata')) {
    merry=JSON.parse(localStorage.getItem('bdata'))
}else{
    merry=christmas
}
export function Board() {
    const[gift,setGift]=useState(merry)
    const[mode,setMode]=useState('l')//crud(c=create,r=read,u=update,d=delete(+u))+l
    const chgMode=(e)=>{
        // console.log()
        let tg=e.target.innerHTML
        if (tg==='Write') {
            setMode('c')
            window.location.reload()
        }
        if (tg==='List') {
            setMode('l')
            window.location.reload()
        }
        if (tg==='Write') {
            setMode('c')
            window.location.reload()
        }
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
                        <tr>
                            <td colSpan="5">There is no data.</td>
                        </tr>
                    </tbody>
                    {/* 하단 페이징 표시부분 */}
                    <tfoot>
                        <tr>
                            <td colSpan="5" className="paging">
                                {/* 페이징번호 위치  */}
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