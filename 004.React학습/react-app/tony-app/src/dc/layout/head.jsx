import { menu } from "../data/gnb";
import { Logo } from "../ctts/logo";
import { Link } from "react-router-dom";
export function Tara(p) {
    /******************************************************* 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    1. <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*******************************************************/
    
    return(
        <>
        <header className="toparea">
            <nav className="gnb">
                <ul style={{listStyle:'none'}}>
                    <li><Logo></Logo></li>
                    {menu.map((k,j)=><li key={j}><Link to={k.link}>{k.txt}</Link></li>)}
                    {/* Warning: Each child in a list should have a unique "key" prop. */}
                    {/* ∴insert key (index) */}
                </ul>
            </nav>
        </header>
        </>
    )
}