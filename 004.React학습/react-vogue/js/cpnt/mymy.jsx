import { link } from "../linksys2.js";
// console.log(link)
export default function Tara(p) {
  React.useEffect(link,[]);//when click gnb,no-repeat sns
  const gogo=(k)=>p.item(k)
  
  return (
    
      <div id="toparea">
            <header class="toparea ibx comarea">

            
      <div className="tmenu">
        {/* <!-- 1-1-1.sns박스 --> */}
        <div className="sns">
          <a
            href="https://www.instagram.com/VOGUEKOREA/"
            className="fi fi-instagram"
          >
            <span className="ir">인스타그램</span>
          </a>
          <a href="https://www.facebook.com/VOGUEkr" className="fi fi-facebook">
            <span className="ir">페이스북</span>
          </a>
          <a href="https://twitter.com/VogueKorea" className="fi fi-twitter">
            <span className="ir">트위터</span>
          </a>
          <a
            href="https://www.youtube.com/user/VogueKorea"
            className="fi fi-youtube-play"
          >
            <span className="ir">유튜브</span>
          </a>
          <a href="#" className="fi cas">
            <span className="ir">카카오스토리</span>
          </a>
        </div>
        {/* <!-- 1-1-2.사이드메뉴 --> */}
        <div className="sideMenu">
          <ul className="smbx">
            <li>
              <a href="#">SIDE MENU</a>
              {/* <!-- 서브메뉴 --> */}
              <ol className="smsub">
                <li>
                  <a href="#">회사 소개</a>
                </li>
                <li>
                  <a href="#">광고 및 제휴</a>
                </li>
                <li>
                  <a href="#">개인정보 처리방침</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#">SUBSCRIBE</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- 1-2.로고박스 --> */}
      <h1 className="logo">
        <a href="#">
          <img src="./images/mlogo.png" alt="메인로고" />
        </a>
      </h1>
      {/* <!-- 1-3.GNB박스 --> */}
      <Menu memo={gogo}></Menu>
      <Mbis></Mbis>
      </header>
      <Mbib></Mbib>
        </div>
  );
}
function Menu(p) {
  const gnbt = [
    "FASHION",
    "BEAUTY",
    "LIVING",
    "PEOPLE",
    "VIDEO",
    "RUNWAY",
    "TIME & GEM",
    "SHOPPING",
  ];
  const mncl = (f) => {
    p.memo(f.toLowerCase())
  };
  return(
    <nav className="gnb">
        <ul>
          {gnbt.map((p) => (
            <li>
              <a
                href="#"
                onClick={() => {
                  mncl(p);
                }}
              >
                {p}
              </a>
            </li>
          ))}

          <li>
            {/* <!-- 돋보기 검색버튼 --> */}
            <i href="#" className="fi fi-search">
              <span className="ir">search</span>
            </i>
          </li>
        </ul>
      </nav>
  )
}
function Mbis() {
  const sld1=()=>{$('#mobx').slideToggle(300)}
  const sld2=()=>{$('.mos').slideToggle(300)}
  return(
      <React.Fragment>
          {/* <!-- 모바일용 햄버거버튼 --> */}
      <a href="#" className="mobtn hbtn fi fi-nav-icon" onClick={sld1}>
          <span className="ir">GNB button</span>
      </a>
      {/* <!-- 모바일용 검색버튼 --> */}
      <a href="#" className="mobtn sbtn fi fi-search" onClick={sld2}>
          <span className="ir">search</span>
      </a>
      </React.Fragment>
  )
}
function Mbib() {
  return(
    <React.Fragment>
      {/* <!-- 1.4.모바일 검색박스 --> */}
        <div className="mos">
            <div className="mwrap">
                {/* <!-- 입력창박스 --> */}
                <div id="search">
                    <input type="text" className="search"/>
                </div>
                {/* <!-- 검색버튼 --> */}
                <button className="scbtn fi fi-search">
                    <span className="ir">돋보기검색아이콘</span>
                </button>
            </div>
        </div>

        {/* <!-- 1.5.모바일 전체메뉴 --> */}
        <div id="mobx">
            {/* <!-- 1.5-1.모바일 GNB 메뉴 --> */}
            <nav className="mognb">
                <ul>
                    <li>
                        <a href="#">FASHION</a>
                    </li>
                    <li>
                        <a href="#">BEAUTY</a>
                    </li>
                    <li>
                        <a href="#">LIVING</a>
                    </li>
                    <li>
                        <a href="#">PEOPLE</a>
                    </li>
                    <li>
                        <a href="#">VIDEO</a>
                    </li>
                    <li>
                        <a href="#">RUNWAY</a>
                    </li>
                    <li>
                        <a href="#">SHOPPING</a>
                    </li>
                </ul>
            </nav>
            {/* <!-- 1.5-2.모바일 sns 메뉴 --> */}
            <div className="mosns">
                <a href="#" className="fi fi-instagram">
                    <span className="ir">인스타그램</span>
                </a>
                <a href="#" className="fi fi-facebook">
                    <span className="ir">페이스북</span>
                </a>
                <a href="#" className="fi fi-twitter">
                    <span className="ir">트위터</span>
                </a>
                <a href="#" className="fi fi-youtube-play">
                    <span className="ir">유튜브</span>
                </a>
                <a href="#">
                    <span className="ir">카카오스토리</span>
                </a>

            </div>
            {/* <!-- 1.5-3.매거진박스 --> */}
            <figure className="magbox">
                {/* <!-- 잡지커버이미지 --> */}
                <a className="mcover" href="#">
                    <img src="./images/cover.jpg" alt="보그표지"/>
                </a>
                {/* <!-- 잡지설명 --> */}
                <figcaption>
                    정기구독을 신청하면 최대 30% 할인혜택을 드립니다!
                </figcaption>
                {/* <!-- 정기구독버튼 --> */}
                <button className="magbtn">정기구독 신청</button>
            </figure>

            {/* <!-- 하단링크박스 --> */}
            <ul className="moblink">
                <li>
                    <a href="#">회사소개 /</a>
                </li>
                <li>
                    <a href="#">광고 및 제휴 /</a>
                </li>
                <li>
                    <a href="#">
                        <strong>개인정보 처리방침</strong>
                    </a>
                </li>
            </ul>
        </div>
    </React.Fragment>
  )
}
