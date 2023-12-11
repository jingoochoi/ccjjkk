import { useState } from 'react'
import '../../css/member.css'
import $ from 'jquery'
export function Login() {
    const[idfc,setIdfc]=useState('')
    const[pswd,setPswd]=useState('')
    const[ider,setIder]=useState(false)
    const[pwer,setPwer]=useState(false)
    const msgi=["User ID must contain a minimum of 5 characters",
    "This ID is already in use!",
    "That's a great ID!",]
    const msge={
        pass:'5 to 15 digits in the form of special characters, characters, and numbers',
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
        if (totalval) {
            console.log('good')
        }else{
            console.log('oooh')
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
                            {
                                !ider&&idfc&&
                                <div className="msg">
                                    <small style={{color:'green',fontSize:'10px'}}>{msgi[2]}</small>
                                </div>
                            }</li>
                            <li><label>Password:</label><input type="password" maxLength={20} placeholder='Please enter your password' value={pswd} onChange={chgpw} />
                            {
                                pwer&&
                                <div className="msg">
                                    <small style={{color:'red',fontSize:'10px'}}>{msge.pass}</small>
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