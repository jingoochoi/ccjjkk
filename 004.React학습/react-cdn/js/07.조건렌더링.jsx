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
const movs = [
    {year:"2021",mtit:"모기어딨슈?그럼안돼유~🦟"},
    {year:"2022",mtit:"범죄도시2👮‍♂️"},
    {year:"2023",mtit:"가디언즈 오브 갤럭시3🦝"},
];
// const movs=[]
function Mvif(p) {
    return(
        <li>{p.year}년 {p.name}</li>
    )
}
function Mvcl(p) {
    const mvmv=p.list
    return(
        <React.Fragment>
            <Tits title="영화"/>
            {mvmv.length>0&&
            <div>
                <h2>개발자가 좋아하는 영화는 최근 {mvmv.length}년간 아래와 같습니다!</h2>
                <ul>{mvmv.map(h=><Mvif year={h.year} name={h.mtit}/>)}</ul>
            </div>}
            {mvmv.length==0&&
            <h2>업데이트 안 됐어요😥</h2>}
        </React.Fragment>
    )
}
ReactDOM.render(<Mvcl list={movs}/>,document.querySelector('#root4'))
/********************************************************** 
    조건 연산자(삼항연산자)를 사용하여 조건부 랜더링하기 hook
**********************************************************/
// 명화 데이터
const worksrc = {
    "피카소":"https://m.theartin.net/web/product/big/201907/30c5a0fdd153bfdfdc8f19b2f4166fa8.jpg",
    "모네":"https://dimg.donga.com/wps/NEWS/IMAGE/2015/12/11/75316598.3.jpg"
};
function Work(p) {
    return(
        <div>
            <h2>{p.pt}</h2>
            <img src={worksrc[p.pt]} alt={p.name} style={{width:'300px'}} title={p.name} />
        </div>
    )
}
function Arts(p) {
    // let sult=p.isChange Hook->
    const [sult,setSult]=React.useState(p.isChange)
    const gain=function () {
        // console.log('b')
        // setSult=!sult Hook->
        setSult(!sult)
        
    }
    return(
        <React.Fragment>
            <Tits title='명화'/>
            <button onClick={gain} style={{cursor:'pointer'}}>go to change</button>
            {sult?<Work pt='피카소' name='우는여인'/>:<Work pt='모네' name='양산을쓴여인'/>}
        </React.Fragment>
    )
}
ReactDOM.render(<Arts isChange={true}/>,document.querySelector('#root5'))

/********************************************************* 
    [ 리액트 훅크 : React Hook ]
    - 일반적으로 리액트에 사용되는 변수는 처음에 
    컴포넌트에 전달되어 초기 셋팅에 활용된다.
    그런데 이 변수가 변경될 경우 컴포넌트의 변경이
    자동적으로 이루어지지 않는다!
    이런 종류의 변수 업데이트가 가상돔과 실제돔에
    바로 반영되도록 실시간 감시역할을 하는
    리액트의 기술내용을 담고 있는 것이 후크다!

    1. 목적 : 어떤 특정 데이터가 변경될때
        이 데이터를 할당하여 사용하고 있는 컴포넌트의
        변경이 반영되도록 하고자 할때 후크를 사용한다!

    2. 구현방법:
        1) 노드JS SPA 개발환경에서는 상단에 import useState를 한다!
        -> CDN 에서는 React.useState 로 사용함!
        2) 코딩법 : useState() 메서드사용
            배열변수 = useState(초기값)
            (CDN) -> 배열변수 = React.useState(초기값)

            ((일반형))
            const [변수명,set변수명] = useState(초기값)
            -> set변수명 작성시 변수명 첫글자는 대문자로 씀
            예) 변수명 myname -> setMyname
            -> set변수명(값) : 메서드형태로 후크변수의 값을 셋팅함!

        3) 작동원리 
            - useState에 쓴 초기값이 배열변수 첫번째변수에 할당된다!
            - 코드에서 set변수명에 값을 할당하면
            useState메서드가 이것을 체크하여 이 변수를 사용한
            다른부분의 업데이트를 실행한다!
            예컨데 컴포넌트 내부에 사용한 경우 컴포넌트가 업데이트 됨!
        4) 사용결과
            - 별도의 메서드 호출없이 후크 상태변수를 사용한 곳이
            자동으로 변경될대마다 다시 갱신되는 것을 확인 할 수 있다!

        -> 뷰JS의 리액티브 데이터와 매우 유사함!

*****************************************************************/