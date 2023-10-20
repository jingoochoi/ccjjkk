// 01.공유신발 JSX
import myData from './data.js';
import aespa from './data2.js'
// console.log(aespa)
const tdt1=[myData,aespa]
console.log("%c👞👞","font-size:30px")
function Main() {
    const ft=()=>{}
    return(
        <React.Fragment>
            <h1 className="tit">공유가 신고 다닌다는 신발</h1>
            <section>
                <h2>공유는 오늘도 멋져브로</h2>
                <img src="images/vans/gongyoo.jpg" alt="멋진 공지철" />
            </section>
            <button onClick={ft} className="bt">효진choice</button>
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