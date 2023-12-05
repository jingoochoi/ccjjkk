import { useEffect } from "react"
import { newprdt } from "../data/newlist"
import $ from 'jquery'
import { Cartlist } from "./Cartlist"

export function Item({cat,good}) {
  const seld=newprdt[cat][good].split('^')
  // console.log(seld)
  //became array([name,code,price])
  const btbx=(e)=>{
    e.preventDefault()
    $('#bgbx').slideUp(300)
  }
  useEffect(()=>{
    const sum=$('#sum')
    const img=$('.chg_num img')
    sum.val('1')
    img.click(e=>{
      let nb=$(e.currentTarget).index()
      let vnum=Number(sum.val())
      nb?vnum--:vnum++
      if (vnum<1) {
        vnum=1
      }
      sum.val(vnum)
      $('#total').html(numberWithCommas(seld[2]*sum.val())+'원')
    })
  },[])
useEffect(()=>{$('#sum').val(1);$('#total').html(numberWithCommas(seld[2]*$('#sum').val())+'원')})
//정규식함수(숫자 세자리마다 콤마해주는 기능)
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
    return(
        <>
            <a href="#" className="cbtn" onClick={btbx}>
        <span className="ir">닫기버튼</span>
      </a>
      <div id="imbx">
        <div className="inx">
          <section className="gimg">
            <img src={"./images/goods/"+cat+"/"+good+".png"} alt="큰 이미지" />
            <div className="small">
              <a href="#">
                <img src="./images/goods/men/m1.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m2.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m3.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m4.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m5.png" alt="썸네일 이미지" />
                <img src="./images/goods/men/m6.png" alt="썸네일 이미지" />
              </a>
            </div>
          </section>
          <section className="gdesc scbar">
            <h1>HOME &gt; MEN</h1>
            <div>
              <ol>
                <li>
                  <img src="./images/dx_ico_new-28143800.gif" alt="new버튼" />
                </li>
                <li id="gtit">상품명: {seld[0]}</li>
                <li>
                  <img src="./images/icon_type02_social01.gif" alt="페이스북" />
                  <img src="./images/icon_type02_social02.gif" alt="트위터" />
                  <img src="./images/icon_mail02.gif" alt="이메일" />
                  <img src="./images/btn_source_copy.gif" alt="URL복사" />
                </li>
                <li>
                  <span>판매가</span>
                  <span id="gprice">{numberWithCommas(seld[2])}원</span>
                </li>
                <li>
                  <span>적립금</span>
                  <span>
                    <img src="./images/icon_my_m02.gif" alt="적립금" />
                    4,950(5%적립)
                  </span>
                </li>
                <li>
                  <span>무이자할부</span>
                  <span>
                    부분 무이자 할부 혜택
                    <img
                      src="./images/view_btn_nointerest_card.gif"
                      alt="무이자카드보기"
                    />
                  </span>
                </li>
                <li>
                  <span>상품코드</span> <span id="gcode">{seld[1]}</span>
                </li>
                <li>
                  <span>사이즈</span> <span>95 100 105 110</span>
                </li>
                <li>
                  <span>구매수량</span>
                  <span>
                    <input type="text" id="sum" defaultValue="1" />
                    <b className="chg_num">
                      <img src="./images/cnt_up.png" alt="증가" />
                      <img src="./images/cnt_down.png" alt="감소" />
                    </b>
                  </span>
                </li>
                <li>
                  <span>컬러</span> <span></span>
                </li>
                <li>
                  <span>권장계절</span> <span>여름</span>
                </li>
                <li className="tot">
                  <span>총합계</span> <span id="total">{numberWithCommas(seld[2])}원</span>
                </li>
              </ol>
            </div>
            <div>
              <button className="btn btn1">BUY NOW</button>
              <button className="btn">SHOPPING CART</button>
              <button className="btn">WISH LIST</button>
            </div>
          </section>
        </div>
      </div>
      <Cartlist></Cartlist>
        </>
    )
}