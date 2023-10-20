// 01.공유신발 JSX
import myData from './data.js';
import aespa from './data2.js'
// console.log(aespa)
const tdt1=[myData,aespa]
console.log("%c👞👞","font-size:30px")
function Main() {
    const [dtnb,setDtnb]=React.useState(0)
    const ft=()=>{
        setDtnb(dtnb?0:1)
        // console.log(dtnb)
    }
    return(
        <React.Fragment>
            <h1 className="tit">{dtnb?'효진이 입고':'공유가 신고'} 다닌다는 {dtnb?'의류':'신발'}</h1>
            <section>
                <h2>{dtnb?'효진이는':'공유는'} 오늘도 {dtnb?'이뽀요':'멋져브로'}</h2>
                <img src={dtnb?"https://www.sisanews.kr/news/photo/201601/16647_13007_488.jpg":"images/vans/gongyoo.jpg"} alt={dtnb?"이쁜 공효진":"멋진 공지철"} />
            </section>
            <button onClick={ft} className="bt">{dtnb?'공유choice':'효진choice'}</button>
            <div className="gwrap">
                <Good/>
            </div>
        </React.Fragment>
    )
}
// console.log(myData)
function Good() {
    return(myData.map(q=>(
        // 
            <ol class="glist">
                <li><img src={"./images/vans/vans_"+q.idx+".jpg"} alt="신발"/></li>
                <li>{q.gname}</li>
                <li>가격: {q.gprice}원</li>
            </ol>
    ))
        
    )
}
ReactDOM.render(<Main/>,document.querySelector('#root'))