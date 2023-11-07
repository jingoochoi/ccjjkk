// 테스트 JS
console.log("%c　👩\n  👗\n","font-size:100px;text-align:center")
// console.log("%cd","font-size:100px;background-image:linear-gradient(to bottom,blue,blue 50%,yellow 51%,yellow);padding-left:100px;padding-right:100px;line-height:1.5;color:transparent",'\npray for Ukraine')
console.log("%c거품이 %cVogueVogue","font-size:30px","color:red;font-size:30px")
// console.log("%c●","font-size:130px;color:red;padding-left:100px;padding-right:100px;border:1px solid black;line-height:1.5;")
// import aespa from './com.js'
// import stayc from './dom.js'
// import cdt1 from './ctgr.json' assert{type:'json'}
// 부드러운 스크롤 모듈
import  {startSS, setpos } from "./smoothScroll23.js";
import { ctxt } from "./cpnt/ctxt.jsx";
import Tara from './cpnt/mymy.jsx'
import Foot from './cpnt/foot.jsx'
import Main from "./cpnt/mani.jsx";
$('.hbtn').click(()=>{$('#mobx').slideToggle(300)})
$('.sbtn').click(()=>{$('.mos').slideToggle(300)})
// 부드러운 스크롤 적용 //////////
// startSS();
// const top=stayc.qs('.toparea')
// top.innerHTML=aespa.toparea
// const foot=stayc.qs('.footarea')
// foot.innerHTML=aespa.footarea
// top.innerHTML+=aespa.mobtn
// top.parentElement.innerHTML+=aespa.mobx
function Root() {
    const prmt=new URLSearchParams(location.search)//searching parameter obj
    const name=decodeURIComponent(prmt.get('cat'))
    // name=name.replace('&amp;','&')
    // console.log(name)
    // if (!name) {
    //     location.href='index.html'
    // }
    const [now,setNow]=React.useState(name)
    const cats=(v)=>{
        setNow(v)
        history.pushState(null,null,'?cat='+encodeURIComponent(v))
    }
    return(
        <ctxt.Provider value={{cats}}>
            <Tara></Tara>
            <Main ctgr={now}></Main>
            <Foot></Foot>
        </ctxt.Provider>
    )
}
ReactDOM.render(<Root></Root>,document.querySelector('#root'))
// ReactDOM.render(<Tara/>,document.querySelector('.toparea'))


// ReactDOM.render(<Foot/>,document.querySelector('.footarea'))
