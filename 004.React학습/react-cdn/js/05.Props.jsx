/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/
function Car(a) {
    return(
        <React.Fragment>
            <h2>my car is {a.brand}</h2>
        </React.Fragment>
    )
}
function Detail(a) {
    return(
        <React.Fragment>
            <h2>model is {a.brand.model}</h2>
            <h2>color is {a.brand.color}</h2>
            <img src="./images/ray.png" alt="ray" style={a.brand.opt} />
            {/* {inline stylesheet}
                style={{obj css}} */}
        </React.Fragment>
    )
}
function Brand() {
    return(
        <React.Fragment>
            <h1>what is your car?</h1>
            <Car brand='rei'></Car>
        </React.Fragment>
    )
}
function Ask(a) {
    const info=[
        {color:'lightblue',model:'2023style',opt:{filter:'hue-rotate(0)'}},
        {color:'teagreen',model:'2024style',opt:{filter:'hue-rotate(215deg)'}},
        {color:'hotpink',model:'2025style',opt:{filter:'hue-rotate(109deg)',opacity:'.3'}}
    ]
    return(
        <React.Fragment>
            <h1>more detail</h1>
            <Detail brand={info[a.num]}></Detail>
        </React.Fragment>
    )
}
ReactDOM.render(<div><Brand/><Ask num='0'/><Ask num='1'/><Ask num='2'/></div>,document.querySelector('#root1'))