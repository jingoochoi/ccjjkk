import { Link } from 'react-router-dom'
import '../../css/member.css'
import { useContext, useState } from 'react'
import { clearData, initData } from '../function/localft'
import $ from 'jquery'
import { dcCon } from '../modules/dcContext'
export function Member() {
    const mymy=useContext(dcCon)
    const[idfc,setIdfc]=useState('')
    const[pswd,setPswd]=useState('')
    const[cfpw,setCfpw]=useState('')
    const[name,setName]=useState('')
    const[mail,setMail]=useState('')
    const[ider,setIder]=useState(false)
    const[pwer,setPwer]=useState(false)
    const[cfer,setCfer]=useState(false)
    const[nmer,setNmer]=useState(false)
    const[emer,setEmer]=useState(false)
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
        const valid = /^[A-Za-z0-9+]{5,}$/;//do not use ''
        if (valid.test(e.target.value)) {
            initData()
            let data=localStorage.getItem('mem-data')
            data=JSON.parse(data)
            let cool=true
            data.forEach(a=>{
                if (a.uid===e.target.value) {
                    setItxt(msgi[1])
                    setIder(true)
                    cool=false
                }
            })
            if (cool) {
                setItxt(msgi[0])
                setIder(false)
            }
        }else{
            setIder(true)
        }
        setIdfc(e.target.value)
    }
    const chgpw=e=>{
        const valid =/^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;//do not use ''
        if (valid.test(e.target.value)) {
            setPwer(false)
        }else{
            setPwer(true)
        }
        setPswd(e.target.value)
    }
    const chgcf=e=>{
        
        if (e.target.value===pswd) {
            setCfer(false)
        }else{
            setCfer(true)
        }
        setCfpw(e.target.value)
    }
    const chgnm=e=>{
        
        if (e.target.value!=='') {
            setNmer(false)
        }else{
            setNmer(true)
        }
        setName(e.target.value)
    }
    const chgem=e=>{
        const valid =/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;//do not use ''
        if (valid.test(e.target.value)) {
            setEmer(false)
        }else{
            setEmer(true)
        }
        setMail(e.target.value)
    }
    const ttcc=()=>{
        if (!idfc)setIder(true)
        if (!pswd)setPwer(true)
        if (!cfpw)setCfer(true)
        if (!name)setNmer(true)
        if (!mail)setEmer(true)
        if (idfc&&pswd&&cfpw&&name&&mail&&!ider&&!pwer&&!cfer&&!nmer&&!emer) {
            return true
        }else return false
    }
    const smit=e=>{
        e.preventDefault()
        if (ttcc()) {
            // alert('WELCOME MY HERO')
            initData()
            let data=localStorage.getItem('mem-data')
            data=JSON.parse(data)
            let newd={
                "idx": data.length+1,
                "uid": idfc,
                "pwd": pswd,
                "unm": name,
                "eml": mail
            }
            data.push(newd)
            localStorage.setItem('mem-data',JSON.stringify(data))
            $('.sbtn').text('WELCOME MY HERO')
            setTimeout(() => {
                mymy.chgPage('login',{})
            }, 1000);
        }else{
            alert(`ARE YOU VILLAIN?\nIF YOU ARE HERO, PLEASE FILL THE FORMS`)
        }
    }
    return(
        <>
            <div className="outbx">
                <section className='membx'>
                    <h2>Join Us</h2>
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
                            <li><label>Confirm Password:</label><input type="password" maxLength={20} placeholder='Please enter your password' value={cfpw} onChange={chgcf} />
                            {
                                cfer&&
                                <div className="msg">
                                    <small style={{color:'red',fontSize:'10px'}}>{msge.same}</small>
                                </div>
                            }
                            </li>
                            <li><label>User Name:</label><input type="text" maxLength={20} placeholder='Please enter your name' value={name} onChange={chgnm} />
                            {
                                nmer&&
                                <div className="msg">
                                    <small style={{color:'red',fontSize:'10px'}}>{msge.necc}</small>
                                </div>
                            }
                            </li>
                            <li><label>Email:</label><input type="text" maxLength={50} placeholder='Please enter your email address' value={mail} onChange={chgem} />
                            {
                                emer&&
                                <div className="msg">
                                    <small style={{color:'red',fontSize:'10px'}}>{msge.emal}</small>
                                </div>
                            }
                            </li>
                            <li style={{overflow:'hidden'}}><button className='sbtn' onClick={smit}>SUBMIT</button></li>
                            <li>Are You Already A Member? <Link to="/login">LOG IN</Link></li>
                        </ul>
                    </form>
                </section>
            </div>
        </>
    )
}