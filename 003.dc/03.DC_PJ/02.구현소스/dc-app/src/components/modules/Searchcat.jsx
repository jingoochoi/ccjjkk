import { Link } from "react-router-dom"
import { catListData } from "../data/swiper_cat"
import '../../css/search_cat_list.css'

export function Searchcat(p) {
    const selData=catListData.filter(a=>{
        if (a.cname.toLowerCase().indexOf(p.word)!=-1) {
            return true
        }
    })
    return(
        <>
        <ul className="clist">
            {selData.map((a,b)=>(
                <li key={b}>
                    <Link 
                to="/detail"
                state={{
                  cname: a.cname,
                  cdesc: a.cdesc,
                  facts: a.facts,
                }}
                >
                  {/* 라우터 데이터 전달은 
                  state속성에 객체로 보낸다! */}
                
                  {/* 캐릭터이미지영역 */}
                  
                    <img src={a.tmsrc} alt={a.cname} />
                  
                  {/* 캐릭터타이틀영역 */}
                  
                    <h3>{a.cname}</h3>
                  
                
              </Link>
                </li>
            ))}
        </ul>
        </>
    )
}