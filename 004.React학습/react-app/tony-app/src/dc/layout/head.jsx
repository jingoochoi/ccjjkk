import { menu } from "../data/gnb";
import { Logo } from "../ctts/logo";
export function Tara(p) {
    const cg=(k)=>{
        p.ft(k)
    }
    return(
        <>
        <header className="toparea">
            <nav className="gnb">
                <ul style={{listStyle:'none'}}>
                    <li><Logo></Logo></li>
                    {menu.map((k,j)=><li key={j}><a href="#" onClick={()=>cg(k.txt=='HOME'?'main':k.txt)}>{k.txt}</a></li>)}
                    {/* Warning: Each child in a list should have a unique "key" prop. */}
                    {/* ∴insert key (index) */}
                </ul>
            </nav>
        </header>
        </>
    )
}