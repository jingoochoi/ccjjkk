function App() {
    const[goal,setGoal]=React.useState(0)
    const[krjp,setKrjp]=React.useState(true)
    const nara=React.useMemo(()=>{return{country:krjp?'한국':'日本'}},[krjp])
    React.useEffect(()=>{
        $('img').eq(krjp?1:0).animate({bottom:'+=100px'},300)
    },[nara])
    /*
    [흔하면서도 재미있는 현상!!!]
    useEffect의 의존성 배열에 nara를 넣었는데 goal의 state를 변경해도 useEffect가 실행된다.
    그 이유는 자바스크립트에서 객체는 원시 타입과는 다르게 값이 저장될 때 주소 값으로 저장되기 때문이다.
    그렇기 때문에 리액트에선 goal의 state가 바뀌면 App 컴포넌트가 재호출되면서 nara의 주소값이 변경이 되었기 때문에 nara가 변경이 되었다고 인식을 한다.

    여기서도 useMemo 훅을 통해 이를 방지(재사용)할 수 있다. 
     */
    return(
        <header className="head" style={{textAlign:'center'}}>
            <h1>한국vs일본<br />{krjp?'한국이':'日本が'} 몇 점차로 이깁니꽈?</h1>
            <input type="number" value={goal} onChange={e=>setGoal(e.target.value)} style={{fontSize:'30px',textAlign:'center'}}/>
            <hr />
            <h1>당신은 어느 나라 사람이십니꽈?</h1>
            <h2 style={{fontSize:'30px'}}>{nara.country}</h2>
            <button onClick={()=>{setKrjp(!krjp);setGoal(0)}} style={{fontSize:'30px'}}>nation</button>
            <img src="https://i.namu.wiki/i/_7clMYRh4lQpmab_9mRbYqcaytIydOj40IGAOjOwRW4Z2v3RbRXh00Hq5NIMwHSXA9BCFfvKZXE85JtokIyw0KRdLIoBzT9TOli_OwQ2uDBFYomQRR3DqO8DcULZ_Y8s5GmVhX9TcoL1DgvmBwfMVQ.webp" style={{height:'300px',position:'fixed',bottom:'-100px',left:'5vw',borderRadius:"50%",border:"10px double lightblue"}}/>
            <img src="https://i.namu.wiki/i/6IbJUlvAY5g8I1eD5dMFYEpaUajLlz4kZjS0vf86ssahkMsrRXDwiDujI-4tt4OqHGDLt3BbSXxxiawyDXf2tCKUBz-Vmsv9C8ZsXBNEXKkBO6zJEhlAPqodPsAsl5vh9DgcodJPjLZt6dPvFA4gnA.webp" style={{height:'300px',position:'fixed',bottom:'-100px',right:'5vw',borderRadius:"50%",border:"10px double orangered"}}/>
        </header>
    )
}
ReactDOM.render(<App></App>,document.querySelector('#root'))