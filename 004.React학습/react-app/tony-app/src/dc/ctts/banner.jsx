import { banData } from "../data/bann";
import '../../css/banner.css'
export function Bann(p) {
    const make=(d)=>d.map((a,b)=><li key={b}><img src={a.src} alt="img" /></li>)
    return(
        <div className="banner">
            <ul className="slider">
                {make(banData[p.ctgr])}
            </ul>
        </div>
    )
}