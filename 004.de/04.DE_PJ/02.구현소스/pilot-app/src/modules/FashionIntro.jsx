// Pilot PJ - 패션인트로 컴포넌트 ////////

// 패션 인트로 데이터 불러오기
import { fsData } from "../data/fashion_intro";

// 패션 인트로 CSS 불러오기
import "../css/fashion_intro.css";
import { useContext } from "react";
import { pcon } from "./pilotContext";
import { event } from "jquery";

export function FashionIntro(props) {
  // props.cat - 카테고리 분류명

  // 선택데이터
  let selData = fsData[props.cat];
  if (props.subcat!=='etc') {
    selData=fsData[props.cat][props.subcat[0]][props.subcat[1]]
  }

  // 새로적용할 스타일객체
  const newStyle = {};
  // 'women'일 경우 값을 셋팅
  if (props.cat == "women") newStyle.flexDirection = "row-reverse";
  const mymy=useContext(pcon)
  
  return (
    <div id={props.cat} className="fs-page">
      <ul
        className="pgc"
        style={newStyle}
        //   style={props.cat=='women'?{flexDirection:'row-reverse'}:{}}
      >
        {
          props.subcat==='etc'&&
        <li className="imgc">
          <img
            src={
              props.cat == "style" ? 
              selData.isrc[0] : selData.isrc
            }
            alt={
              props.cat == "style" ? 
              selData.ialt[0] : selData.ialt
            }
          />
        </li>
        }
        {
          props.subcat==='etc'&&
        <li className="txtc">
          {props.cat != "style" && (
            <h2>
              <a href="#" onClick={() => mymy.chgPgName(props.cat)}>
                {selData.tit[0]} <br />
                {selData.tit[1]}
              </a>
            </h2>
          )}
          {props.cat == "style" && (
            <>
              <h2 className="tm">
                <a href="#" onClick={() => mymy.chgPgName(props.cat)}>
                  {selData.tit[0][0]} <br />
                  {selData.tit[0][1]}
                </a>
              </h2>
              <h2 className="tw">
                <a href="#" onClick={() => mymy.chgPgName(props.cat)}>
                  {selData.tit[1][0]} <br />
                  {selData.tit[1][1]}
                </a>
              </h2>
            </>
          )}
        </li>
        }
        {/* 스타일 패션에서만 나오는 이미지 */}
        {props.cat == "style" && (
          <li className="imgc">
            <img src={selData.isrc[1]} alt={selData.ialt[1]} />
          </li>
        )}
        {
          props.cat==='sub'&&props.subcat[1]===0&&
          <>
          <li className="txtc">
            <h2>
              <a href="#">
                {selData.tit[0]} <br />
                {selData.tit[1]}
              </a>
            </h2>
          </li>
            <li className="imgc">
          <img
            src={
              selData.isrc
            }
            alt={
              selData.ialt
            }
          />
        </li>
          </>
        }
        {
          props.cat==='sub'&&props.subcat[1]===1&&
          <>
          <li className="imgc">
          <img
            src={
              selData.isrc[0]
            }
            alt={
              selData.ialt[0]
            }
          />
        </li>
          <li className="txtc">
            <h2 className="tm">
              <a href="#">
                {selData.tit[0][0]} <br />
                {selData.tit[0][1]}
              </a>
            </h2>
            <h2 className="tw">
              <a href="#">
                {selData.tit[1][0]} <br />
                {selData.tit[1][1]}
              </a>
            </h2>
          </li>
            <li className="imgc">
          <img
            src={
              selData.isrc[1]
            }
            alt={
              selData.ialt[1]
            }
          />
        </li>
          </>
        }
      </ul>
    </div>
  );
} //////////// FashionIntro 컴포넌트 ////////