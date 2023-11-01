import { mtInfo } from "./mountain.js";
import { whom } from "./cpnt2/prvd.jsx";
import Yagi from "./cpnt2/subcom.jsx";
function Home() {
    return <Room aa="world mount" bb="🗻"></Room>
}
function Room({aa,bb}) {
    return <Pack ee={aa} ff={bb}></Pack>
}
function Pack({ee,ff}) {
    return <Case ii={ee} jj={ff}></Case>
}
function Case({ii,jj}) {
    return <div style={{padding:'20px',borderRadius:'10px',width:'60%',textAlign:'center',fontSize:'30px',backgroundImage:'linear-gradient(to bottom,skyblue,navy)',margin:'20px auto',color:'pink'}}>{ii+jj}</div>
}
ReactDOM.render(<Home/>,document.querySelector('#root1'))

function Huge() {
    const data=mtInfo
    const [val,setVal]=React.useState('백두산')
    const cg=(a)=>{
        setVal(a)
        // console.log(a)
    }
    return(
        <whom.Provider value={{val,cg,data}}>
            <Habj></Habj>
        </whom.Provider>
    )
}
function Habj() {
    return <Abba></Abba>
}
function Abba() {
    return <Adul></Adul>
}
function Adul() {
    return <Sonn></Sonn>
}
function Sonn() {
    return <Yagi></Yagi>
}
ReactDOM.render(<Huge/>,document.querySelector('#root2'))