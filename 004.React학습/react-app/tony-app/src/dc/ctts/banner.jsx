import { banData } from "../data/bann";
import '../../css/banner.css'
import { useEffect } from "react";
export function Bann(p) {
    useEffect(()=>{},[])
    const make=(d)=>d.map((a,b)=><li key={b}><img src={a.src} alt="img" /></li>)
    return(
        <div className="banner">
            <ul className="slider">
                {make(banData[p.ctgr])}
            </ul>
        </div>
    )
}