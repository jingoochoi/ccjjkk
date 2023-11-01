import { mtInfo } from "./mountain.js";
import { whom } from "./cpnt2/prvd.jsx";
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
    return(
        <whom.Provider value={}>
            <Habj></Habj>
        </whom.Provider>
    )
}