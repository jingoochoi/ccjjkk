import { Link } from "react-router-dom"

import '../../css/search_cat_list.css'

export function Searchcat({dt,cnt}) {
    const selData=dt
    const ttnb=cnt
    // p.moon(ttnb)
    return(
        <>
        <ul className="clist">
            {ttnb>0&&selData.map((a,b)=>(
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
            {ttnb==0&&
            <>
            <img src="https://freepngimg.com/save/15560-red-cross-mark-png-file/640x640" alt="no" style={{margin:'0 auto',width:'300px'}} />
            <h2 style={{textAlign:'center',fontSize:'20px'}}>Sorry, we don't have any matches for that. But there's plenty more to see on DC!</h2></>}
        </ul>
        </>
    )
}