// 01.공유신발 JSX
import myData from './data.js';
console.log("%c👞👞","font-size:30px")
function Main() {
    return(
        <React.Fragment>
            <h1 className="tit">공유가 신고 다닌다는 신발</h1>
            <section>
                <h2>공유는 오늘도 멋져브로</h2>
                <img src="images/vans/gongyoo.jpg" alt="멋진 공지철" />
            </section>
            <div className="gwrap">
                <ol class="glist">
                    <li><img src="./images/vans/vans_1.jpg" alt="신발"/></li>
                    <li>반스명:Shine1</li>
                    <li>가격: 32,400원</li>
                </ol>
            </div>
        </React.Fragment>
    )
}
ReactDOM.render(<Main/>,document.querySelector('#root'))