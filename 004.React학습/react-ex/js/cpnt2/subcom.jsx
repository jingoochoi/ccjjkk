import { whom } from "./prvd.jsx";
function Yagi() {
    const maum=React.useContext(whom)
    const seld=maum.data.find(a=>{
        if (a.이름==maum.val) {
            return true
        }
    })
    const btdt=maum.data.filter(a=>{
        if (a.이름!=maum.val) {
            return true
        }
    })
    return (<div style={{position:'relative',
    padding:'20px',
    border:'10px dotted skyblue',
    borderRadius:'10px',
    width:'60%',
    margin:'20px auto',
    textAlign:'center'}}>
        <h1>{maum.val}</h1>
        <img src={seld.이미지} alt={maum.val} style={{width:'100%'}} />
        <div style={{position:'absolute',
        width:'50%',
        bottom: 'calc(3%*3)',
        left:'1.7%',
        padding:'15px',
        fontSize:'16px',
        color:'#fff',
        textShadow:'0 0 5px #000',
        textAlign:'left',
        borderRadius:'20px',
        backgroundColor:'rgb(0 0 0 / .4)'}}>
            <ul style={{listStyle:'none'}}>
                <li>이름 : {seld.이름}</li>
                <li>설명 : {seld.설명}</li>
                <li>높이 : {seld.높이}</li>
                <li>융기 : {seld.융기}</li>
                <li>최초등반 : {seld.최초등반}</li>
                <li>최초등반가 : {seld.최초등반가}</li>
                <li>산맥 : {seld.산맥}</li>
            </ul>
        </div>
        <div>
            {btdt.map(a=><button onClick={()=>{maum.cg()}} style={{cursor:'pointer',height:'calc(30px*2)'}}>{a.이름}mount</button>)}
        </div>
    </div>)
}
export default Yagi