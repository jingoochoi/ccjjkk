
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
        <h1>{maum.val}{(maum.val=='백두산'||maum.val=='후지산')&&
            <Mage></Mage>}</h1>
        <img src={seld.이미지} alt={maum.val} style={{width:'100%'}} />
        <div style={{position:'absolute',
        width:'50%',
        bottom: 'calc(2.2vh*4)',
        left:'1vw',
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
            {btdt.map(a=><button onClick={()=>{maum.cg(a.이름)}} style={{cursor:'pointer',height:'calc(30px*2)'}}>{a.이름}mount</button>)}
        </div>
    </div>)
}
function Mage() {
    React.useEffect(()=>{
        // console.log('b')
        return(()=>{
            alert('the most high')
        })
    },[])
    return(
        <img src={'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybl9tb3VudGFpbl9pY29uX3NpbGhvdWV0dGVfbW9ub3RvbmVfc2ltcGxlX2Flc3RoZXRpY184MDFlMzliNy00MmMwLTQzZjYtYWQyNS04N2IyNjkxYTM3NTgucG5n.png'} alt="image" style={{width:'100px'}}></img>
    )
}
export default Yagi