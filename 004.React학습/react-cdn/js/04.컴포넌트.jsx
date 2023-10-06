/************************************************* 
    [ 리액트 컴포넌트 ]
    - 컴포넌트는 HTML요소를 반환하는 함수다!

    [ 특징 ]
    1. 컴포넌트는 독립적이고 재사용이 가능한 코드집합
    2. JS함수와 비슷하지만
        HTML코드 반환이 필수라는 점이 다름!
    3. 컴포넌트는 다음 2가지로 생성가능함
        1) 클래스형 컴포넌트
        2) 함수형 컴포넌트
        (-> 우리는 함수형 컴포넌트에 집중할 예정!)

    -> 클래스형 컴포넌트는 리액트 초중기에 주로
    사용되었으나... React 16.8버전에서 Hooks와
    함께 더 이상 사용되지 않는다!
    Hooks는 함수형 컴포넌트에서만 사용가능하다!

    ____________________________________________

    [ 첫번째 컴포넌트 만들기! ]
    - 리액트 컴포넌트 이름은 반드시 첫글자가 대문자로 만든다!
    (안지키면 적용안됨!!!)

    [ 클래스 컴포넌트 ]
    클래스 컴포넌트에서는 
    extends React.Component 상속문이 포함돼야함!

    -> 컴포넌트에서도 메서드가 필요함
    render() 메서드는 HTML을 반환함
    (함수형 컴포넌트의 return 키워드를 
        사용할 수 있는 역할을 함!)

*************************************************/
class Gogh extends React.Component{
    render(){
        // html tag return
        return(
            <React.Fragment>
                <h2>hi, Gogh</h2>
                <img src="./images/01.png" alt="gogh" />
                <img src="./images/02.png" alt="gogh" />
                <img src="./images/03.png" alt="gogh" />
                <img src="./images/04.png" alt="gogh" />
            </React.Fragment>
        )
    }
}
ReactDOM.render(<Gogh/>,document.querySelector('#root1'))
// component return code=><name/>
// functional component
function Iron() {
    return(
        <div>
            <h2>hi, ironman</h2>
            <img src="./images/ab1.jpg" alt="ironman" />
        </div>
    )
}
ReactDOM.render(<Iron/>,document.querySelector('#root2'))