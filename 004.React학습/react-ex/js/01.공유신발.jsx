// 01.공유신발 JSX
import myData from './data.js';
import aespa from './data2.js'
import winter from './act.js'
// console.log(aespa)
const tdt1=[myData,aespa]
console.log("%c👞👞","font-size:30px")
function Main() {
    const [dtnb,setDtnb]=React.useState(0)
    const [test,setTest]=React.useState(0)
    const [view,setView]=React.useState(0)
    React.useLayoutEffect(()=>{
        $('.imgb').hide().delay(1000).fadeIn(1000)
    })
    React.useEffect(()=>{
        $('.tit').css({transform:'scale(1.2)',transition:'1s linear'})
        setTimeout(() => {
            // 
            $('.tit').css({transform:'scale(1)'})
        }, 1000);
    },[])
    React.useEffect(winter,[])
    React.useEffect(()=>{
        // act every update
    })
    React.useEffect(()=>{
        // act one time
    },[])
    React.useEffect(()=>{
        // act when test changed
    },[test])
    React.useLayoutEffect(()=>{
        // $('.bt').hide()
        // 
    })
    const ft=()=>{
        setDtnb(dtnb?0:1)
        console.clear()
        dtnb?console.log("%c👞👞","font-size:30px"):console.log("%c👗","font-size:30px")
        // console.log(dtnb)
        // setView(view?0:1)
        // setView(1)
    }
    const tst1=()=>{
        setTest(test?0:1)
    }
    const cg=(nb)=>{
        setView(nb)
    }
    return(
        <React.Fragment>
            <h1 className="tit">{dtnb?'효진이가 입고':'공유가 신고'} 다닌다는 {dtnb?'옷':'신발'}</h1>
            <section>
                <h2>{dtnb?'효진이는':'공유는'} 오늘도 {dtnb?'이뽀요':'멋져브로'}</h2>
                <div className="imgb"><img src={dtnb?"https://www.sisanews.kr/news/photo/201601/16647_13007_488.jpg":"images/vans/gongyoo.jpg"} alt={dtnb?"이쁜 공효진":"멋진 공지철"} /></div>
            </section>
            <button onClick={ft} className="bt">{dtnb?'공유choice':'효진choice'}</button>
            <button onClick={tst1} className="bt">testo</button>
            <div className="gwrap">
                {view==0&&
                <Good idxn={dtnb} cg={cg}/>}
                {view==1&&
                <View idxn={dtnb} cg={cg}/>}
                
            </div>
        </React.Fragment>
    )
}
// console.log(myData)
function Good(p) {
    const sdt1=tdt1[p.idxn]
    return(sdt1.map(q=>(
        // 
            <a href="#" onClick={()=>p.cg(1)}>
                <ol class="glist">
                    <li><img src={p.idxn?"./images/gallery/"+q.idx+".jpg":"./images/vans/vans_"+q.idx+".jpg"} alt="신발"/></li>
                    <li>{q.gname}</li>
                    <li>가격: {q.gprice}원</li>
                </ol>
            </a>
    ))
        
    )
}
function View(p) {
    const sdt1=tdt1[p.idxn][0]
    return(
        // 
            <ol>
                <button onClick={()=>p.cg(0)}>go to list</button>
                <li><img src={p.idxn?"./images/gallery/"+sdt1.idx+".jpg":"./images/vans/vans_"+sdt1.idx+".jpg"} alt="신발"/></li>
                <li>상품명:{sdt1.gname}<br/>가격: {sdt1.gprice}원</li>
            </ol>
    
        
    )
}
function int1() {
    // 
}
ReactDOM.render(<Main/>,document.querySelector('#root'))