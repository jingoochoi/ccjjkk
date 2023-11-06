// 테스트 JS
// console.log("%c　👩\n  👗\n","font-size:100px;text-align:center")
// console.log("%cd","font-size:100px;background-image:linear-gradient(to bottom,blue,blue 50%,yellow 51%,yellow);padding-left:100px;padding-right:100px;line-height:1.5;color:transparent",'\npray for Ukraine')
// console.log("%c거품이 %cVogueVogue","font-size:30px","color:red;font-size:30px")
// console.log("%c●","font-size:130px;color:red;padding-left:100px;padding-right:100px;border:1px solid black;line-height:1.5;")
// import aespa from './com.js'
// import stayc from './dom.js'
// import cdt1 from './ctgr.json' assert{type:'json'}
// 부드러운 스크롤 모듈
import  {startSS, setpos } from "./smoothScroll23.js";
import Tara from './cpnt/top.jsx'
import Foot from './cpnt/foot.jsx'
import sakura from './ctgrdt.js'
// 부드러운 스크롤 적용 //////////
// startSS();
// const top=stayc.qs('.toparea')
// top.innerHTML=aespa.toparea
// const foot=stayc.qs('.footarea')
// foot.innerHTML=aespa.footarea
// top.innerHTML+=aespa.mobtn
// top.parentElement.innerHTML+=aespa.mobx
function Root() {
    return(
        <React.Fragment>
            <Tara></Tara>
            <Main></Main>
            <Foot></Foot>
        </React.Fragment>
    )
}

ReactDOM.render(<Tara/>,document.querySelector('.toparea'))
function Main() {
    const prmt=new URLSearchParams(location.search)//searching parameter obj
    const name=decodeURIComponent(prmt.get('cat'))
    // name=name.replace('&amp;','&')
    // console.log(name)
    const [now,setNow]=React.useState(name)
    const sdt1=sakura[now]
    // console.log(sdt1)
    const chgs=()=>{sets('living')}
    return(
        <React.Fragment>
            <Sbtt tit={sdt1['제목']} menu={sdt1['메뉴']} />
            <button onClick={chgs}>go</button>
            <List clsn={sdt1['경로']} tit={sdt1['타이틀']}/>
        </React.Fragment>
    )
}
function Sbtt(p) {
    const make=(u)=>u.map(k=>
            <li>
                <a href="#">{k}</a>
            </li>
        )
    return(
        <header className="cattop">
        <h2 className="cattit">{p.tit}</h2>
        {p.menu!='없음'&&
        <nav className="lnb">
            <ul>
                {make(p.menu)}
            </ul>
        </nav>}
    </header>
    )
}
ReactDOM.render(<Main/>,document.querySelector('.mainarea'))
function List(p) {
    //dangerous~HTML=해킹 우려로 데이터 안의 태그를 불편하게 적용함.->태그를 빼고 배열 데이터로 나눠 태그 안에 삽입
    const cody=g=>{//조건문인 경우 if로 바꿈
        return(<h2 dangerouslySetInnerHTML={{__html:p.tit[g]}}></h2>)
    }
    return(
        <div className={"catcon "+p.clsn}>
            <section className="pt2">
                <div className="cbx bgi bg1-1">
                    {cody(0)}
                </div>
                <div className="cbx bgi bg1-2">
                    {cody(1)}
                </div>
                <div className="cbx bgi bg1-3">
                    {cody(2)}
                </div>
            </section>
            <section className="pt2">
                <div className="cbx bgi bg2-1">
                    {cody(3)}
                </div>
                <div className="cbx bgi bg2-2">
                    {cody(4)}
                </div>
                <div className="cbx bgi bg2-3">
                    {cody(5)}
                </div>
            </section>
        </div>
    )
}

ReactDOM.render(<Foot/>,document.querySelector('.footarea'))
function Mbis() {
    return(
        <React.Fragment>
            {/* <!-- 모바일용 햄버거버튼 --> */}
        <a href="#" class="mobtn hbtn fi fi-nav-icon">
            <span class="ir">GNB button</span>
        </a>
        {/* <!-- 모바일용 검색버튼 --> */}
        <a href="#" class="mobtn sbtn fi fi-search">
            <span class="ir">search</span>
        </a>
        </React.Fragment>
    )
}