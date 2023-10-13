function Make() {
    return(
        <h1>i am dev.</h1>
    )
}
function Lost() {
    return(
        <h1>what is dev?</h1>
    )
}
function Poto(p) {
    return(
        <img src={p.src} alt={p.alt} title={p.title} />
    )
}
function Dvlp(q) {
    const is=q.dvlm
    if (is) {
        return(
            <React.Fragment>
                <Make/>
                <Poto src={q.src} alt={q.alt} title={q.title}/>
            </React.Fragment>
        )
    }
    return(
        <React.Fragment>
            <Lost/>
            <Poto src={q.src} alt={q.alt} title={q.title}/>
        </React.Fragment>
    )
}
const devImg = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];
ReactDOM.render(<Dvlp dvlm={true} src={devImg[0]} alt="kong" title="developer"/>,document.querySelector('#root1'))
ReactDOM.render(<Dvlp dvlm={false} src={devImg[1]} alt="ma" title="baby"/>,document.querySelector('#root2'))
/********************************************** 
    2. if문이 아닌 조건 표현하기
    -> 조건식 && JSX표현식
    조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
**********************************************/
function Tits(p) {
    return(
        <h1>👨‍🔧개발자👩‍🔧가 좋아하는 {p.title}</h1>
    )
}
// 음식리스트
const foods = ["스파게티🍝","짜파게티🍜","냉면🥶","라면😝","마라롱샤🦞"]
// const foods = []
function Food(p) {
    return(
        <li>개발자는 {p.name} 좋아해</li>
    )
}
function Wish(p) {
    const food=p.list
    return(
        <React.Fragment>
            <Tits title='음식'/>
            {food.length>0&&
            <div>
                <h2>개발자가 좋아하는 음식은 {food.length}가지</h2>
                <ul>
                    {food.map(a=><Food name={a}/>)}
                </ul>
            </div>}
            {food.length==0&&
            <h2>업데이트 안 됐어요😥</h2>
            }
        </React.Fragment>
    )
}
ReactDOM.render(<Wish list={foods}/>,document.querySelector('#root3'))