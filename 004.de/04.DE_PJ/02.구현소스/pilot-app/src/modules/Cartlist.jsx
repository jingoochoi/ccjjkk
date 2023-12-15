import { memo, useEffect, useState } from 'react';
import '../css/cart.css'
import $ from 'jquery'
// let nn=0
export const Cartlist=memo(({sell,flag})=>{
    // nn++
    // console.log(flag.current)
    const[bage,setBage]=useState(sell)
    const[fall,setFall]=useState(null)
    if (bage!==sell&&flag.current) {
      // console.log(bage!==sell)
      setBage(sell)
    }
    // const wash=JSON.parse(localStorage.getItem('cute'))
    // console.log(sell)
    const ct=bage.length
    console.log(ct)
    let tt=0
    // const plus=()=>{
      console.log(Array.isArray(bage))
      bage.forEach(a=>{
        tt+=a.ginfo[3]*a.num
      })
    // }
    const dels=(e)=>{
      flag.current=false
      if (confirm('지우면 배신 안 지우면 으리 아입니까?🤬')) {//window.confirm()=window basic function of checking-alert
        alert('꼭 그렇게 지워야만 속이 후련했냐!🌻')
        const sidx=$(e.target).attr('data-idx')
        const newd=bage.filter((a)=>{
          if (a.idx!==sidx) {
            return true
          }
        })
        // console.log(newd)
        localStorage.setItem('cute',JSON.stringify(newd))
        setBage(newd)
      }else alert('감사합니데이~😊')
    }
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
    const plma=(e)=>{
      let cnum=Number($(e.currentTarget).parent().siblings('.item-cnt').val())
      // $('#item-cnt').focus()
      $(e.currentTarget).parent().siblings('.item-cnt').focus()
      if ($(e.currentTarget).attr('alt')==='증가') {
        cnum++
      }else cnum--
      if (cnum<1) {
        cnum=1
      }
      $(e.currentTarget).parent().siblings('.item-cnt').val(cnum)
    }
    const sult=(e)=>{
      flag.current=false
      bage.some((a,b)=>{
        if (a.idx==$(e.currentTarget).attr('data-idx')) {
          bage[b].num=$(e.currentTarget).prev().val()
          return true
        }
      })//array some method=true(걔만 픽),false(계만 빼고 다들 픽)
        // console.log(bage)
      localStorage.setItem('cute',JSON.stringify(bage))
      setBage(bage)//기존 배열 자체가 추가 및 삭제되지 않는 한 배열 데이터가 업데이트된 것으로 인식하지 않는다. 따라서, 강제로 설정하여 리렌더링 필수
      setFall(Math.random())
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
            {bage.map((v, i) => (
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
                <td className='cnt-part'>
                  <div>
                  <span>
                    <input type="text" className="item-cnt" defaultValue={v.num} />
                    <button className='btn-insert' onClick={sult} data-idx={v.idx}>반영</button>
                    <b className="btn-cnt">
                      <img src="./images/cnt_up.png" alt="증가" onClick={plma} />
                      <img src="./images/cnt_down.png" alt="감소" onClick={plma} />
                    </b>
                  </span>
                  </div>
                </td>
                {/* 상품가격 총합계 */}
                <td>{addComma(v.ginfo[3] * v.num)}원</td>
                <td>
                  <button className="cfn" data-idx={v.idx} onClick={(e)=>{dels(e)}}>
                    ×
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="6">총합계 :</td>
              <td>{addComma(tt)}원</td>
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