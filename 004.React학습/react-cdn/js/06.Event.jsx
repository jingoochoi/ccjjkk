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
        setTimeout(() => {
            document.querySelectorAll('button')[0].style.display='inline-block'
        }, 3000);
        ReactDOM.render(<Images src={lamp} alt="aladin"/>,document.querySelector('#ala'))
    }
    const getLamp= function () {
        let lamp=document.querySelector('.lamp')
        ReactDOM.render(<Images src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3168457870/B.png" alt="lamp" info="false"/>,lamp)
        lamp.querySelector('img').style.cssText=`
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        border-radius: 50%;
        transition: 2s;
        `
        setTimeout(() => {
            lamp.querySelector('img').style.cssText=`
            position: absolute;
            top: 310px;
            right: calc(50% - 100px);
            width: 200px;
            border-radius: 50%;
            transition: 2s,right 2s 2s;
            `
            // 
        }, 300);
        setTimeout(() => {
            document.querySelectorAll('button')[1].style.display='inline-block'
        }, 3000);
    }
    const getFerrari=function () {
        ReactDOM.render(<Images src="./images/f.png" alt="ferrari" info="true" id="carcar" title="drive"/>,document.querySelector('#ferrari'))
        
    }
    return(
        <React.Fragment>
            <div id="tbox" style={{textAlign:'center'}}>
                <img src="https://images.chosun.com/resizer/SFIqPKffr3HQHoHFOxKvnN-L2YU=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NVMCI5M33KHBCY4JVHDPWRCBYY.jpg" alt="genie" onMouseOver={()=>{aladin('./images/ala4.jpg')}} />
            </div>
            <div className="lamp"></div>
            <button onClick={getLamp}>bring the lamp</button>
            <br /><button onClick={getFerrari}>show me the ferrari</button>
        </React.Fragment>
    )
}
function Images(p) {
    return(
        p.info?<img src={p.src} alt={p.alt} id={p.id} title={p.title} onClick={cars}/>:<img src={p.src} alt={p.alt} />
    )
}
let mc=1
function cars() {
    document.querySelector('#carcar').style.transform=mc==1?'translate(-100%,-100%) scale(.3)':'translate(0) scale(1)'
    document.querySelector('#carcar').style.transition='1s ease-in-out'
    mc==1?mc=0:mc=1
}
ReactDOM.render(<Event/>,document.querySelector('#root'))