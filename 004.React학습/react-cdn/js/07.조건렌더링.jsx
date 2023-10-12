function Make() {
    return(
        <h1>i am dev.</h1>
    )
}
function Lost() {
    return(
        <h1>what is dev.</h1>
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