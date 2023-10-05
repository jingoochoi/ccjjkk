/***************************************************** 
    [ JSX란 무엇인가? ]
    - Javascript XML을 나타냄
    - 리액트에서 HTML을 쉽게 작성할 수 있다.
    - appendChild() 메서드 없이 DOM에 요소넣기가 가능함!
*****************************************************/
const myl1=<h1>I am using JSX</h1>
const root1=ReactDOM.createRoot(document.querySelectorAll('#root>div')[0])
root1.render(myl1)
// another way
const myl2=React.createElement('h1',{},'nonJSX')
ReactDOM.render(myl2,document.querySelectorAll('#root>div')[1])
/***************************************************** 
    [ 출력방식 정리! ]
    1. 한꺼번에 쓰기
    ReactDOM.render(출력할요소,대상요소)

    2. 따로쓰기
        1) 생성변수 = ReactDOM.createRoot(대상요소)
        2) 생성변수.render(출력할요소)

    _____________________________________________

    [ JSX 를 사용하거나 사용하지 않는 경우 ]
    -> 개발자의 선택사항이다!
    -> JSX는 ES6 기반의 자바스크립트 언어의 확장ㅇㅣ며
    런타임시 일반 자바스크립트로 변환된다!

    ______________________________________________

    [ JSX 표현식 ]
    JSX를 사용하면 중괄호에 표현식을 작성할 수 있다
    {........ 표현식 ........}

    -> 표현식이란 React변수, 속성, JS문법 등의 내용임

*****************************************************/
let num1=1000,num2=3
const myl3=<h1>react is {num1*num2} times better than JS</h1>
ReactDOM.render(myl3,document.querySelectorAll('#root>div')[2])
const myl4=(
    <React.Fragment>
        <h2>html block printing</h2>
        <ul>
            <li>front-end</li>
            <li>react</li>
            <li>to flutter</li>
        </ul>
    </React.Fragment>
)
ReactDOM.render(myl4,document.querySelectorAll('#root>div')[3])
/***************************************************** 
 [ JSX 태그요소 작성시 여러줄일 경우 ]
 1. 최상위를 하나 만들고 여러요소를 작성한다!
 2. 소괄호로 전체를 싸준다!(소괄호생략가능!)
 
 - 지원되는 스타일:
 1) <>태그들</>=null tag(but only for node.js)
 2) <Fragment>태그들</Fragment>=non printing
 3) <기존태그>태그들</기존태그>=printing
 
 -> 1),2)번은 CDN방식에서는 지원안함!(설치형SPA지원!)
 -> 2)번 CDN에서 사용하려면 아래와 같이 사용한다!
 <React.Fragment></React.Fragment>
 -> 1),2)번을 사용하는 이유는 쓸때 없는 태그삽입을 막는데있다!
 -> 기존태그는 <div>,<section> 등 원래있는 html태그를 말함
 (단점, 원하는 않는 태그가 삽입됨!!!)
 *****************************************************/
 const mydata = [
    {idx:1,name:"김수현",movie:"언제왔니"},
    {idx:2,name:"장우혁",movie:"형님,형~~~님"},
    {idx:3,name:"김혜수",movie:"내가쎈언니야"},
];
const myl5=(
    <React.Fragment>
        <h2>list</h2>
        <ul>
            {mydata.map(m=><li>{m.name}:{m.movie}💍</li>)}
        </ul>
    </React.Fragment>
)
 ReactDOM.render(myl5,document.querySelectorAll('#root>div')[4])
