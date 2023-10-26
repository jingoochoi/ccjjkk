import myData from './data.js';
import aespa from './data2.js'
const tdt1=[myData,aespa]
function View(p) {
    const sdt1=tdt1[p.idxn][Number(p.itnb)-1]
    return(
        // 
        <ol style={{listStyle:'none'}}>
                <button onClick={()=>p.cg(0,0)}>go to list</button>
                <li><img src={p.idxn?"./images/gallery/"+sdt1.idx+".jpg":"./images/vans/vans_"+sdt1.idx+".jpg"} alt="신발"/></li>
                <li style={{lineHeight:'3'}}>상품명:{sdt1.gname}<br/>가격: {sdt1.gprice}원</li>
            </ol>
    
        
    )
}
export{View}