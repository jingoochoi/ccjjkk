// Pilot PJ 상단영역 공통 컴포넌트

// GNB 데이터 가져오기
import { useContext } from "react";
import { gnbData } from "../data/gnb";
import { TotalMenu } from "../modules/TotalMenu";
import $ from 'jquery'
import { pcon } from "../modules/pilotContext";
export function TopArea(props) {
  // props.cat - 카테고리명(메뉴데이터 선택용)
  const mymy=useContext(pcon)
  const chan=(e)=>{
    if (props.cat==='glist') {
      mymy.gg.current=true
      mymy.setGmod($(e.currentTarget).text().substr(0,1))
      // console.log(mymy.gmod.current)
      $(e.currentTarget).addClass('on').siblings().removeClass('on')
    }
  }
  /// GNB메뉴 리스트 만들기 함수
  const makeList = (data) => {
    return(
      gnbData[data].map((v,i)=>
        <li key={i} className={props.cat==='glist'&&i===0?'on':''} onClick={chan}>
          <a href="#">{v}</a>
        </li>
      )
    )

  }; ///////// makeList /////////



  return (
    <>
      <div id="top-area">
        <header className="top-area ibx">
          <h1 id="logo">
            <a href="#">
              <img src="./images/main_logo.png" alt="파일럿로고" />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li className="bld">배너순번 li 숨기기</li>
              {makeList(props.cat)}
            </ul>
          </nav>
          <div className="ham">
            <span></span> <span></span> <span></span>
          </div>
          {/* 전체메뉴 컴포넌트 */}
          <TotalMenu />
        </header>
      </div>
    </>
  );
} //////////////// TopArea 컴포넌트 //////////