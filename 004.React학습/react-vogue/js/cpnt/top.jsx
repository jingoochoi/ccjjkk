import { link } from "../linksys2.js";
// console.log(link)
export default function Tara() {
  React.useLayoutEffect(link);
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
  const mncl = (f) => {};
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
