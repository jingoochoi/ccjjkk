import { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import '../../css/board.css'
import '../../css/boardfile.css'
import { dcCon } from '../modules/dcContext'
import christmas from '../data/tbdata.json'
import { initData } from '../function/localft'
import axios from 'axios'
christmas.sort((a,b)=>b.idx-a.idx)
let merry
if (localStorage.getItem('bdata')) {
    merry=JSON.parse(localStorage.getItem('bdata'))
}else{
    merry=christmas
    // merry=[]
}
export function Board() {
    if (!localStorage.getItem('bdata'))localStorage.setItem('bdata',JSON.stringify(christmas))
    initData()
    const mymy=useContext(dcCon)
    // console.log(mymy.logg)
    const pgbl=9
    const pgpgbl=3
    const spur=merry.length
    // let init=0
    const[pgnb,setPgnb]=useState(1)
    const pgpgnb=useRef(1)
    const[gift,setGift]=useState(null)
    const[mode,setMode]=useState('l')//crud(c=create,r=read,u=update(include d),d=delete(included in u))+l(list)
    const[bttn,setBttn]=useState(false)
    const sstt=useRef(false)
    const fist=useRef(true)
    const lodf=useRef(null)
    const updt=a=>lodf.current=a
    useEffect(()=>{
        if (mymy.logg===null) {
            setBttn(false)
        }
        if (mymy.logg===null&&mode==='c') {
            setMode('l')
        }
    },[mymy.logg])//re-render preventing
    const cdt=useRef(null)//<-react type
    const lata=useRef(null)
    const chgMode=(e)=>{
        // console.log()
        if (sstt.current) {
            sstt.current=false
            init()
        }
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
                if (a.idx==cc) {
                    return true
                }
            })
            // $(()=>{
            //     $('.readone .name').val(cdt.writer)
            //     $('.readone .subject').val(cdt.tit)
            //     $('.readone .content').val(cdt.cont)
            // })<-javascript style
            comp(cdt.current.uid)
            setMode(md)
            cunt()
        }
        else if (md==='l') {
            setMode(md)
        }
        else if (md==='u') {
            setMode(md)
        }
        else if (md==='c') {
            lata.current=JSON.parse(mymy.logg)
            setMode(md)
            // console.log('write',o,k)
            // $(()=>{
            //     $('.writeone .name').val('tomtom')
            //     $('.writeone .email').val('tom@gmail.com')
            // })<-javascript style
        }
        else if (md==='s'&&mode==='c') {
            // console.log('submit',o,k)
            if ($('.writeone .subject').val().trim()===''||$('.writeone .content').val().trim()==='') {
                alert('PLEASE FILL OUT THIS FORM')
            }else{
                const zero=x=>x<10?'0'+x:x
                let tday=new Date()
                let yy=tday.getFullYear()
                let mm=tday.getMonth()+1
                let dd=tday.getDate()
                let tenp=merry
                let aryi=tenp.map(m=>parseInt(m.idx))
                let temq={
                    "idx" : Math.max(...aryi)+1,//Math.max.apply(null,aryi)-... 이전에 쓴 방법
                    "tit" : $('.writeone .subject').val().trim(),
                    "cont" : $('.writeone .content').val().trim(),
                    "att" : lodf.current?lodf.current.name:'',
                    "date" : `${yy}-${zero(mm)}-${zero(dd)}`,
                    "uid" : lata.current.uid,
                    "unm" : lata.current.unm,
                    "cnt" : "0"
                }
                if (lodf.current) {
                    const fomm=new FormData()//폼태그 없이도 서버에 전송
                    fomm.append('file',lodf.current)
                    for (const key of fomm) {
                        // 
                    }
                    axios.post('http://localhost:3030/upload',fomm).then(a=>{
                        const {fileName}=a.data
                    }).catch(e=>alert('error'))
                    lodf.current=null
                }
                tenp.unshift(temq)
                localStorage.setItem('bdata',JSON.stringify(tenp))
                fist.current=true
                setMode('l')
            }
        }
        else if (md==='s'&&mode==='u') {
            if ($('.updateone .subject').val().trim()===''||$('.updateone .content').val().trim()==='') {
                alert('PLEASE FILL OUT THIS FORM')
            }else{
                let tenp=merry
                tenp.some(a=>{
                    if (cdt.current.idx==a.idx) {
                        a.tit=$('.updateone .subject').val()
                        a.cont=$('.updateone .content').val()
                        return true
                    }
                })
                let aryi=tenp.map(m=>parseInt(m.idx))
                // let temq={
                //     "idx" : Math.max(...aryi)+1,//Math.max.apply(null,aryi)-... 이전에 쓴 방법
                //     "tit" : $('.writeone .subject').val().trim(),
                //     "cont" : $('.writeone .content').val().trim(),
                //     "att" : "",
                //     "date" : `${yy}-${zero(mm)}-${zero(dd)}`,
                //     "uid" : lata.current.uid,
                //     "unm" : lata.current.unm,
                //     "cnt" : "0"
                // }
                // tenp.push(temq)
                localStorage.setItem('bdata',JSON.stringify(tenp))
                setMode('l')
            }
        }
        else if (md==='d'&&mode==='u') {
            console.log('delete')
            if (window.confirm('WOULD YOU REMOVE IT?')) {
                merry.some((a,b)=>{
                    if (cdt.current.idx==a.idx) {
                        merry.splice(b,1)
                        return true
                    }
                })
                localStorage.setItem('bdata',JSON.stringify(merry))
                setMode('l')
            }
        }
        
    }
    const sort=(a)=>{
        if($('#sel').val()==1) a.sort((a,b)=>a.idx-b.idx)
        else if($('#sel').val()==2) a.sort((a,b)=>b.idx-a.idx)
    }
    const init=()=>{
        merry=JSON.parse(localStorage.getItem('bdata'))
        sort(merry)
    }
    // const happy=new Year()
    if (fist.current) {
        sort(merry)
        // $('#sel').val('1')
    }
    const bind=()=>{
        fist.current=false
        // sort(merry)
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
                <td>{a.unm}</td>
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
        let pgblct=Math.floor(lim/pgpgbl)
        let pgblpd=lim%pgpgbl
        const pglim=pgblct+(pgblpd===0?0:1)
        let pgcd=[]
        pgcd.unshift(pgpgnb.current!==1?<Fragment key={-1}>
            <a href="#" style={{marginRight:'10px',color:'black',textDecoration:'none'}} onClick={(e)=>{e. preventDefault();arro(1,false)}}>맨앞</a>
            <a href="#" style={{fontSize:'20px'}} onClick={(e)=>{e. preventDefault();arro(-1,true)}}>◀ </a>
        </Fragment>:'')
        for (let k = (pgpgnb.current-1)*pgpgbl; k < pgpgbl*pgpgnb.current; k++) {
            if (k>=lim) {
                break
            }
            pgcd[k]=<Fragment key={k}>
            {/* {} */}
            {pgnb-1===k?<b>{k+1}</b>:<a href='#' onClick={list}>{k+1}</a>}
            {(k<pgpgnb.current*pgpgbl-1&&k<lim-1)?' 👨‍🎤 ':''}
            </Fragment>
            // console.log(k,blct)
        }
        // console.log(blct,blpd,lim,pgblct,pgblpd,pglim,pgnb,pgpgnb)
        pgcd.push(pgpgnb.current!==pglim?<Fragment key={100}>
            <a href="#" style={{fontSize:'20px'}} onClick={(e)=>{e.preventDefault();arro(1,true)}}> ▶</a>
            <a href="#" style={{marginLeft:'10px',color:'black',textDecoration:'none'}} onClick={(e)=>{e. preventDefault();arro(pglim,false)}}>맨뒤</a>
        </Fragment>:'')
        return(pgcd)
    }
    const arro=(a,b)=>{
        let news
        if(b){
            news=pgpgnb.current+a
            pgpgnb.current=news
            setPgnb(((pgpgnb.current-1)*pgpgbl)+1)
        }
        else {
            news=a
            pgpgnb.current=news
            // console.log(pgpgnb.current,pgpgbl,pgnb,pgbl)
            // console.log(currentTarget.innerHTML)
            if(a===1)setPgnb(((pgpgnb.current-1)*pgpgbl)+1)
            else setPgnb(pgpgnb.current+pgpgbl+1)
        }
    }
    const list=(e)=>{
        setPgnb(e.target.innerHTML)
        // bind()
    }
    const comp=(k)=>{
        if (mymy.logg!==null) {
            const fofo=JSON.parse(localStorage.getItem('mem-data'))
            const cu=fofo.find(p=>{
                if (p.uid===k) {
                    return true
                }
            })
            if (cu) {
                const cusr=JSON.parse(mymy.logg)
                if (cusr.uid===cu.uid) {
                    setBttn(true)
                }else setBttn(false)
            }else setBttn(false)
        }else{
            setBttn(false)
        }
        // return cu[c]
    }
    const cunt=()=>{
        let okok=true
        // console.log(cdt.current.idx)
        if (!sessionStorage.getItem('cnt-idx')) {
            sessionStorage.setItem('cnt-idx','[]')
        }
        let cdcx=JSON.parse(sessionStorage.getItem('cnt-idx'))
        cdcx.some(a=>{
            if (a==Number(cdt.current.idx)) {//숫자배열임ㅋㅋㅋ
                // console.log(a,cdt.current.idx,a==Number(cdt.current.idx))
                okok=false
                return true
            }
        })
        if (localStorage.getItem('info')) {
            let mono=JSON.parse(localStorage.getItem('info')).uid
            if (mono==cdt.current.uid) {
                okok=false
            }
        }
        if (okok) {
            let dbdb=JSON.parse(localStorage.getItem('bdata'))
            dbdb.some(b=>{
                if (b.idx==cdt.current.idx) {
                    b.cnt=Number(b.cnt)+1
                    return true
                }
            })
            merry=dbdb
            localStorage.setItem('bdata',JSON.stringify(dbdb))
            cdcx.push(Number(cdt.current.idx))
            sessionStorage.setItem('cnt-idx',JSON.stringify(cdcx))
        }
    }
    const sear=()=>{
        let cta4=$('.cta').val()
        let stxt=$('#stxt').val().toLowerCase().trim()
        let stst=JSON.parse(localStorage.getItem('bdata'))
        if (stxt==='') {
            alert('FEEL THE KEYWORD')
            return
        }
        sstt.current=true
        let goal=stst.filter(h=>{
            if ((h[cta4].toLowerCase()).indexOf(stxt)!==-1) {
                return true
            }
        })
        merry=goal
        if (pgnb===1) {
            setGift(Math.random())
        }else setPgnb(1)
        $('#stxt').val('').focus()
    }
    const ento=(e)=>{
        if (e.key==='Enter') {
            let cta4=$('.cta').val()
            let stxt=$('#stxt').val().toLowerCase().trim()
            let stst=JSON.parse(localStorage.getItem('bdata'))
            if (stxt==='') {
                alert('FEEL THE KEYWORD')
                return
            }
            sstt.current=true
            let goal=stst.filter(h=>{
                if ((h[cta4].toLowerCase()).indexOf(stxt)!==-1) {
                    return true
                }
            })
            merry=goal
            fist.current=true
            if (pgnb===1) {
                setGift(Math.random())
            }else setPgnb(1)
            $('#stxt').val('').focus()
        }
    }
    useEffect(()=>{
        // sort(merry)
        return(()=>{
            init()
        })
    },[])
    return(
        <>
            {
                mode==='l'&&
                <>
                <h1>OPINION</h1>
                <div className="selbx" style={{textAlign:'center'}}>
                    <select name="cta" id="cta" className="cta">
                      <option value="tit">title</option>
                      <option value="cont">contents</option>
                      <option value="unm">writer</option>
                    </select>
                    <input id="stxt" type="text" maxLength="50" onKeyUp={ento}/>
                    <button className="sbtn" onClick={sear}>Search</button>
                    <select name="sel" id="sel" className="sel" style={{marginLeft:'auto'}} onChange={()=>{sort(merry);setGift(Math.random())}}>
                      <option value="2">descending</option>
                      <option value="1">ascending</option>
                    </select>
                </div>
                <table className="dtbl" id="board">
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
                </>
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
                                <input type="text" className="name" size="20" readOnly value={lata.current.unm}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="text" className="email" size="40" readOnly value={lata.current.eml}/>
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
                        <tr>
                            <td>attachment</td>
                            <td>
                                <Atta ft={updt}></Atta>
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
                                <input type="text" className="name" size="20" readOnly value={cdt.current.unm}/>
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
                        <tr>
                            <td>Attachment</td>
                            <td>
                                <a href={'/uploaded/'+cdt.current.att} download={true}>{cdt.current.att}</a>
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
                                <input type="text" className="name" size="20" readOnly value={cdt.current.unm}/>
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
                        <tr>
                            <td>Attachment</td>
                            <td>
                                <b>{cdt.current.att}</b>
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
                                mode==='l'&&sstt.current&&<>
                            <button onClick={()=>{init();setGift(Math.random());$('#cta').val('tit')}}>
                                <a href="#">List</a>
                            </button>
                            </>
                            }
                            {
                                mode==='l'&&mymy.logg!==null&&<>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">Write</a>
                            </button>
                            </>
                            }
                            {
                                mode==='c'&&
                                <>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">Submit</a>
                            </button>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">List</a>
                            </button></>
                            }
                            {
                                mode==='r'&&
                                <>
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">List</a>
                            </button>
                            {
                                bttn&&
                            <button onClick={(e)=>chgMode(e)}>
                                <a href="#">Modify</a>
                            </button>
                            }
                            </>
                            }
                            {
                                mode==='u'&&
                                <>
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
const Atta=(p)=>{
    const [ontt,setOntt]=useState(false)
    const [load,setLoad]=useState(null)
    const drge=()=>{setOntt(true)}
    const drgl=()=>{setOntt(false)}
    const drgo=(e)=>{e.preventDefault()}
    const drip=(e)=>{
        e.preventDefault()
        setOntt(false)
        const info=e.dataTransfer.files[0]
        sett(info)
        p.ft(info)
    }
    const sett=(a)=>{
        const {name,size:byteSize,type}=a//객체값을 한꺼번에 할당하는 법
        const size=(byteSize/(1024*1024)).toFixed(2)+'mb'
        setLoad({name,size,type})
    }
    const chch=(e)=>{
        const info=e.target.files[0]
        sett(info)
        p.ft(info)
    }
    return(
        <label className='info-view' onDragEnter={drge} onDragLeave={drgl} onDragOver={drgo} onDrop={drip}>
            <input type="file" className='file' onChange={chch}/>
            {
                load&&
                <File o={load}></File>
            }
            {
                !load&&
                <>
                    <Icom></Icom>
                    <p className="info-view-msg">Click or drop the file here.</p>
                    <p className="info-view-desc">Up to 3MB per file</p>
                </>
            }
        </label>
    )
}
const File=({o})=>(
    <ul className='info-view-info'>
        {
            Object.entries(o).map(([a,b])=>
                <li key={a}>
                    <span className='info-key'>{a}-</span>
                    <span className='info-value'>{b}</span>
                </li>
            )
        }
    </ul>
)
/* 
Object.keys(obj) – 객체의 키만 담은 배열을 반환합니다.
Object.values(obj) – 객체의 값만 담은 배열을 반환합니다.
Object.entries(obj) – [키, 값] 쌍을 담은 배열을 반환합니다.
*/
const Icom=()=>(
    <svg className="icon" x="0px" y="0px" viewBox="0 0 99.09 122.88">
    <path fill="#000" d="M64.64,13,86.77,36.21H64.64V13ZM42.58,71.67a3.25,3.25,0,0,1-4.92-4.25l9.42-10.91a3.26,3.26,0,0,1,4.59-.33,5.14,5.14,0,0,1,.4.41l9.3,10.28a3.24,3.24,0,0,1-4.81,4.35L52.8,67.07V82.52a3.26,3.26,0,1,1-6.52,0V67.38l-3.7,4.29ZM24.22,85.42a3.26,3.26,0,1,1,6.52,0v7.46H68.36V85.42a3.26,3.26,0,1,1,6.51,0V96.14a3.26,3.26,0,0,1-3.26,3.26H27.48a3.26,3.26,0,0,1-3.26-3.26V85.42ZM99.08,39.19c.15-.57-1.18-2.07-2.68-3.56L63.8,1.36A3.63,3.63,0,0,0,61,0H6.62A6.62,6.62,0,0,0,0,6.62V116.26a6.62,6.62,0,0,0,6.62,6.62H92.46a6.62,6.62,0,0,0,6.62-6.62V39.19Zm-7.4,4.42v71.87H7.4V7.37H57.25V39.9A3.71,3.71,0,0,0,61,43.61Z"/>
    </svg>
)