// import React from "react";

export default function Foot() {
    const[cgft,setCgft]=React.useState(0)
    return(
        <React.Fragment>
            <div style={{textAlign:'center'}}>
                <button onClick={()=>{setCgft(cgft?0:1)}}>logo</button>
            </div>
            <Ftmm st={cgft}></Ftmm>
        </React.Fragment>
    )
}
const Ftmm = React.memo((p) => {
    return (<React.Fragment>
        <div id="footarea">
        <footer class="footarea ibx comarea">

        
        <div className="blogo">
            <img src={p.st==0?"./images/footer_logo.png":'https://media.tenor.com/roL8BtIs724AAAAd/vogue-celine-vogue.gif'} alt="하단로고"/>
        </div>
{/* <!-- 3-2.회사주소 --> */}
        <address className="addr">
            {p.st}WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. 
            ALL RIGHTS RESERVED. VOGUE.COM KOREA IS OPERATED 
            BY DOOSAN MAGAZINE.
        </address>
{/* <!-- 3-3.하단링크 --> */}
        <ul className="blink">
            <li>
                <a href="#">정기구독</a>
            </li>
            <li>
                <a href="#">회사소개</a>
            </li>
            <li>
                <a href="#">광고 및 제휴</a>
            </li>
            <li>
                <a href="#">개인정보 처리방침</a>
            </li>
        </ul>
        </footer>
    </div>
    <a href="#" class="tbtn fi fi-angle-up">
    <span class="ir">위로가기버튼</span>
</a>
    </React.Fragment>)
});