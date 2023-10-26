// 01.공유신발 JSX
import { Good } from './cpnt1/good.jsx'
import { View } from './cpnt1/view.jsx'
import winter from './act.js'
// console.log(aespa)

console.log("%c👞👞","font-size:30px")
function Main() {
    const [dtnb,setDtnb]=React.useState(0)
    const [test,setTest]=React.useState(0)
    const [view,setView]=React.useState(0)
    const [item,setItem]=React.useState(0)
    const [eft1,setEft1]=React.useState(0)
    React.useLayoutEffect(()=>{if(eft1)int1()})
    React.useLayoutEffect(()=>{
        $('.imgb').hide().delay(1000).fadeIn(1000)
    })
    React.useEffect(()=>{
        $('.tit').css({transform:'scale(1.3)',transition:'1s linear'})
        setTimeout(() => {
            // 
            $('.tit').css({transform:'scale(1)'})
            $('.tit').css({transform:'scale(.7)'})
        }, 1000);
        setTimeout(() => {
            $('.tit').css({transform:'scale(1)'})
            // 
        }, 2000);
        
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
        setView(0)
    }
    const tst1=()=>{
        setTest(test?0:1)
    }
    const cg=(nb,id)=>{
        event.preventDefault()
        setView(nb)
        setItem(id)
        setEft1(0)
    }
    return(
        <React.Fragment>
            <h1 className="tit">{dtnb?'효진이가 입고':'공유가 신고'} 다닌다는 {dtnb?'옷':'신발'}</h1>
            <section>
                <h2>{dtnb?'효진이는':'공유는'} 오늘도 {dtnb?'이뽀요':'멋져브로'}</h2>
                <div className="imgb"><img src={dtnb?"https://www.sisanews.kr/news/photo/201601/16647_13007_488.jpg":"images/vans/gongyoo.jpg"} alt={dtnb?"이쁜 공효진":"멋진 공지철"} /></div>
            </section>
            <button onClick={()=>{ft();setEft1(1)}} className="bt">{dtnb?'공유choice':'효진choice'}</button>
            <button onClick={tst1} className="bt">testo</button>
            <div className="gwrap">
                {view==0&&
                <Good idxn={dtnb} cg={cg}/>}
                {view==1&&
                <View idxn={dtnb} cg={cg} itnb={item}/>}
                
            </div>
        </React.Fragment>
    )
}
// console.log(myData)


function int1() {
    setTimeout(() => {
        // 
        $('.imgb img').css({filter:'brightness(130%)'})
    }, 3000);
}
ReactDOM.render(<Main/>,document.querySelector('#root'))