// 테스트 JS
console.log("%c　👩\n  👗\n","font-size:100px;text-align:center")
console.log("%cd","font-size:100px;background-image:linear-gradient(to bottom,blue,blue 50%,yellow 51%,yellow);padding-left:100px;padding-right:100px;line-height:1.5;color:transparent",'\npray for Ukraine')
console.log("%c거품이 %cVogueVogue","font-size:30px","color:red;font-size:30px")
// console.log("%c●","font-size:130px;color:red;padding-left:100px;padding-right:100px;border:1px solid black;line-height:1.5;")
import aespa from './com.js'
import stayc from './dom.js'
// import cdt1 from './ctgr.json' assert{type:'json'}
// 부드러운 스크롤 모듈
import  {startSS, setpos } from "./smoothScroll23.js";
import { link } from './linksys2.js'
import sakura from './ctgrdt.js'
// 부드러운 스크롤 적용 //////////
// startSS();
// const top=stayc.qs('.toparea')
// top.innerHTML=aespa.toparea
// const foot=stayc.qs('.footarea')
// foot.innerHTML=aespa.footarea
// top.innerHTML+=aespa.mobtn
// top.parentElement.innerHTML+=aespa.mobx

function Tara() {
    React.useLayoutEffect(link)
    const gnbt=['FASHION','BEAUTY','LIVING','PEOPLE','VIDEO','RUNWAY','TIME & GEM','SHOPPING']
    const mncl=(f)=>{}
    return(
        <React.Fragment>
            <div className="tmenu">
    {/* <!-- 1-1-1.sns박스 --> */}
    <div className="sns">
        <a href="https://www.instagram.com/VOGUEKOREA/" className="fi fi-instagram">
            <span className="ir">인스타그램</span>
        </a>
        <a href="https://www.facebook.com/VOGUEkr" className="fi fi-facebook">
            <span className="ir">페이스북</span>
        </a>
        <a href="https://twitter.com/VogueKorea" className="fi fi-twitter">
            <span className="ir">트위터</span>
        </a>
        <a href="https://www.youtube.com/user/VogueKorea" className="fi fi-youtube-play">
            <span className="ir">유튜브</span>
        </a>
        <a href="#" className="fi cas">
            <span className="ir">카카오스토리</span>
        </a>
    </div>
    {/* <!-- 1-1-2.사이드메뉴 --> */}
    <div className="sideMenu">
        <ul className="smbx">
            <li>
                <a href="#">SIDE MENU</a>
                {/* <!-- 서브메뉴 --> */}
                <ol className="smsub">
                    <li>
                        <a href="#">회사 소개</a>
                    </li>
                    <li>
                        <a href="#">광고 및 제휴</a>
                    </li>
                    <li>
                        <a href="#">개인정보 처리방침</a>
                    </li>
                </ol>
            </li>
            <li>
                <a href="#">SUBSCRIBE</a>
            </li>
        </ul>
    </div>
</div>
{/* <!-- 1-2.로고박스 --> */}
<h1 className="logo">
    <a href="#">
        <img src="./images/mlogo.png" alt="메인로고" />
    </a>
</h1>
{/* <!-- 1-3.GNB박스 --> */}
<nav className="gnb">
    <ul>
        {gnbt.map(p=><li>
            <a href="#" onClick={()=>{mncl(p)}}>{p}</a>
        </li>)}
        
        <li>
            {/* <!-- 돋보기 검색버튼 --> */}
            <i href="#" className="fi fi-search">
                <span className="ir">search</span>
            </i>
        </li>
    </ul>
</nav>
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
function Foot() {
    return(
        <React.Fragment>
            <div class="blogo">
                <img src="./images/footer_logo.png" alt="하단로고"/>
            </div>
{/* <!-- 3-2.회사주소 --> */}
            <address class="addr">
                WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. 
                ALL RIGHTS RESERVED. VOGUE.COM KOREA IS OPERATED 
                BY DOOSAN MAGAZINE.
            </address>
{/* <!-- 3-3.하단링크 --> */}
            <ul class="blink">
                <li>
                    <a href="#">정기구독</a>
                </li>
                <li>
                    <a href="#">회사소개</a>
                </li>
                <li>
                    <a href="#">광고 및 제휴</a>
                </li>
                <li>
                    <a href="#">개인정보 처리방침</a>
                </li>
            </ul>
        </React.Fragment>
    )
}
ReactDOM.render(<Foot/>,document.querySelector('.footarea'))