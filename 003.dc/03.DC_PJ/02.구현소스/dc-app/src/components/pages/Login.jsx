import { useState } from 'react'
import '../../css/member.css'
import $ from 'jquery'
import { initData } from '../function/localft'
export function Login() {
    const[idfc,setIdfc]=useState('')
    const[pswd,setPswd]=useState('')
    const[ider,setIder]=useState(false)
    const[pwer,setPwer]=useState(false)
    const msgi=["This is a required entry",//필수입력
    "ID does not exist",//아이디가 존재하지 않습니다
    "Password doesn't match",//비밀번호가 일치하지 않습니다
    ]
    const msge={
        pass:'This is a required entry',
        same:'Password verification does not match',
        necc:'This is a required entry',
        emal:'Please enter a valid email format',
    }
    const[itxt,setItxt]=useState(msgi[0])
    const chgid=e=>{
        if (e.target.value!=='') {
            setIder(false)
        }else{
            setItxt(msge.necc)
            setIder(true)
        }
        setIdfc(e.target.value)
    }
    const chgpw=e=>{
        if (e.target.value!=='') {
            setPwer(false)
        }else{
            setItxt(msge.necc)
            setPwer(true)
        }
        setPswd(e.target.value)
    }
    const totalval=()=>{
        if (!idfc)setIder(true)
        if (!pswd)setPwer(true)
        if (idfc&&pswd) {
            return true
        }else return false
    }
    const smit=e=>{
        e.preventDefault()
        if (totalval()) {
            // console.log('good')
            // db(now localstorage) data comparing
            if (!localStorage.getItem('mem-data')) {
                initData()
            }
            let dtdt=localStorage.getItem('mem-data')
            dtdt=JSON.parse(dtdt)
            // console.log(dtdt)
            let nope=true
            dtdt.forEach(a=>{
                if (a['uid']===idfc) {
                    // console.log('pass')
                    setIder(false)
                    nope=false
                    if (a['pwd']===pswd) {
                        // console.log('pswd')
                        setPwer(false)
                    }else{
                        // console.log('kk')
                        setItxt(msgi[2])
                        setPwer(true)
                    }
                }
            })
            if (nope) {
                // console.log('dig')
                setItxt(msgi[1])
                setIder(true)
            }
        }else{
            // console.log('oooh')
        }
    }
    return(
        <>
            <div className="outbx">
                <section className='membx' style={{minHeight:'300px'}}>
                    <h2>LOG IN</h2>
                    <form action="process.php" method='post'>
                        <ul>
                        <li><label>ID:</label><input type="text" maxLength={20} placeholder='Please enter your ID' value={idfc} onChange={chgid} />
                            {
                                ider&&
                                <div className="msg">
                                    <small style={{color:'red',fontSize:'10px'}}>{itxt}</small>
                                </div>
                            }
                            </li>
                            <li><label>Password:</label><input type="password" maxLength={20} placeholder='Please enter your password' value={pswd} onChange={chgpw} />
                            {
                                pwer&&
                                <div className="msg">
                                    <small style={{color:'red',fontSize:'10px'}}>{itxt}</small>
                                </div>
                            }
                            </li>
                            <li style={{overflow:'hidden'}}><button className='sbtn' onClick={smit}>LOG IN</button></li>
                        </ul>
                    </form>
                </section>
            </div>
        </>
    )
}