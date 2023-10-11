/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="getIt()" => onClick={getIt}
*************************************************************/
function Event() {
    const aladin=lamp=>{
        document.querySelector('#tbox').innerHTML+=`
            <h1 class="tit">what is your dream</h1>
        `
        let tit=document.querySelector('.tit')
        tit.style.cssText=`
        width: 50%;
        padding: 50px 0;
        margin: 0 auto;
        border: 2px solid lime;
        transition: all 2s 1s;
        opacity: 0;
        `
        setTimeout(() => {
            tit.style.cssText=`
            width: 50%;
            padding: 50px 0;
            margin: 0 auto;
            border: 2px solid lime;
            transition: all 2s 1s;
            opacity: 1;

            border-radius: 50%;
            transform: translateY(-200px);
            font-size: 40px;
            color: white;
            background-color: rgba(0,0,0,.5);
        `
        }, 30);
    }
    return(
        <React.Fragment>
            <div id="tbox" style={{textAlign:'center'}}>
                <img src="https://images.chosun.com/resizer/SFIqPKffr3HQHoHFOxKvnN-L2YU=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NVMCI5M33KHBCY4JVHDPWRCBYY.jpg" alt="genie" onMouseOver={()=>{aladin('./images/ala4.jpg')}} />
            </div>
        </React.Fragment>
    )
}
ReactDOM.render(<Event/>,document.querySelector('#root'))