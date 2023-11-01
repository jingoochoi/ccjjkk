import { whom } from "./prvd.jsx";
function Yagi() {
    const maum=React.useContext(whom)
    const seld=maum.data.find(a=>{
        if (a.이름==maum.val) {
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
        <img src={seld.이미지} alt={maum.val} style={{width:'100%',opacity:.3}} />
    </div>)
}
export default Yagi