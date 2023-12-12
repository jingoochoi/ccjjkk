import { memo, useEffect } from 'react';
import '../css/cart.css'
import $ from 'jquery'
export const Cartlist=memo(({sell})=>{
    // const wash=JSON.parse(localStorage.getItem('cute'))
    // console.log(sell)
    const ct=sell.length
    function addComma(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    useEffect(()=>{
      $('#mycart').removeClass('on').fadeIn(300,function () {
        $(this).addClass('on')
      })
      setTimeout(() => {
        $('.cntBx').show()
      }, 2000*2);
    },[])
    const showshow=()=>{
      $('#cartlist').animate({right:'0vw'},300)
    }
    return(
        <>
            <section id="cartlist">
        <a href="#" className="cbtn cbtn2"onClick={(e)=>{e.preventDefault();$('#cartlist').animate({right:'-60vw'},300)}}>
          <span>닫기버튼</span>
        </a>
        <table>
          <caption>
            <h1> 카트 리스트</h1>
          </caption>
          <tbody>
            <tr>
              <th>상품</th>
              <th>번호</th>
              <th>상품명</th>
              <th>상품코드</th>
              <th>단가</th>
              <th>수량</th>
              <th>합계</th>
              <th>삭제</th>
            </tr>
            {sell.map((v, i) => (
              <tr key={i}>
                {/* 상품이미지 */}
                <td>
                  <img
                    src={"images/goods/" + v.cat + "/" + v.ginfo[0] + ".png"}
                    alt="item"
                  />
                </td>
                {/* 리스트순번 */}
                <td>{i + 1}</td>
                {/* 상품명 */}
                <td>{v.ginfo[1]}</td>
                {/* 상품코드 */}
                <td>{v.ginfo[2]}</td>
                {/* 상품가격 */}
                <td>{addComma(v.ginfo[3])}원</td>
                {/* 상품수량 */}
                <td>{v.num}</td>
                {/* 상품가격 총합계 */}
                <td>{addComma(v.ginfo[3] * v.num)}원</td>
                <td>
                  <button className="cfn" data-idx={v.idx}>
                    ×
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="6">총합계 :</td>
              <td>999,000원</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
      <div id='mycart' onClick={showshow}>
        <img src="./images/mycart.gif" title="product"></img>
        <div className="cntBx">{ct}</div>
      </div>
        </>
    )
})