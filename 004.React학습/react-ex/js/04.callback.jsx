function Mark() {
    const[sony,setSony]=React.useState(false)
    const[baga,setBaga]=React.useState(false)
    const[kang,setKang]=React.useState(false)
    // const tgsn=()=>{setSony(!sony)}
    const tgsn=React.useCallback(()=>{setSony(!sony)},[sony])
    // const tgbg=()=>{setBaga(!baga)}
    const tgbg=React.useCallback(()=>{setBaga(!baga)},[baga])
    // const tgki=()=>{setKang(!kang)}
    const tgki=React.useCallback(()=>{setKang(!kang)},[kang])
    /*
    버튼 클릭 시 하나만 바껴도 다 리랜더링->효율성 및 최적화 문제
    ∴useCallback()
    const [의존성변수, set의존성변수] = useState(초기값);
    const 콜백 = useCallback(() => {}, 
    [의존성변수]); 
     */
    return(
        <div style={{textAlign:'center'}}>
            <h1 style={{fontSize:'100px',color:'hotpink',textShadow:'3px 3px 2px #333'}}>Please give them likes</h1>
            <Show a='sonny' b={sony} c={tgsn}></Show>
            <Show a='tanaka' b={baga} c={tgbg}></Show>
            <Show a='kanginlee' b={kang} c={tgki}></Show>
        </div>
    )
}
const Show=React.memo(({a,b,c})=>{
    return(
        <div style={{padding:'10px'}}>
            <button onClick={c} style={{fontSize:'100px',cursor:'pointer'}}>{a}{b?'👍':'👎'}</button>
        </div>
    )
})//memoization for useCallback
ReactDOM.render(<Mark></Mark>,document.querySelector('#root'))