import myData from './data.js';
import aespa from './data2.js'
const tdt1=[myData,aespa]
function Good(p) {
    const sdt1=tdt1[p.idxn]
    const item=sdt1.find(q=>{if(q.idx==p.itnb)return true})
    return(sdt1.map(q=>(
        // 
            <a href="#" onClick={()=>p.cg(1,q.idx)}>
                <ol class="glist">
                    <li><img src={p.idxn?"./images/gallery/"+q.idx+".jpg":"./images/vans/vans_"+q.idx+".jpg"} alt="신발"/></li>
                    <li>{q.gname}</li>
                    <li>가격: {q.gprice}원</li>
                </ol>
            </a>
    ))
        
    )
}
export {Good}