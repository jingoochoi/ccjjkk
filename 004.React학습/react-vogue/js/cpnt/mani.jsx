import sakura from '../ctgrdt.js'
// console.log(sakura)
export default function Main(p) {
    
    const sdt1=sakura[p.ctgr]
    // console.log(sdt1)
    // const chgs=()=>{sets('living')}
    return(
        <div id="mainarea">
            <main class="mainarea ibx">
            <Sbtt tit={sdt1['제목']} menu={sdt1['메뉴']} />
            
            <List clsn={sdt1['경로']} tit={sdt1['타이틀']}/>
            </main>
        </div>
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
// ReactDOM.render(<Main/>,document.querySelector('.mainarea'))
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