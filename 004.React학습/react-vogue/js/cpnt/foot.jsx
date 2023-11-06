export default function Foot() {
    return(
        <React.Fragment>
            <div className="blogo">
                <img src="./images/footer_logo.png" alt="하단로고"/>
            </div>
{/* <!-- 3-2.회사주소 --> */}
            <address className="addr">
                WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. 
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
        </React.Fragment>
    )
}