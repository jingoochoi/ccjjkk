// 메인 페이지 JS - index.js
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { pcon } from './modules/pilotContext';
import {wheelFn,evt} from './func/jquery-autoScroll'
import { TopArea } from './layout/TopArea';
import { MainArea } from './layout/MainArea';
import { FooterArea } from './layout/FooterArea';

// 제이쿼리 
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';


// 페이지 공통 CSS
import './css/common.css';
import { Cartlist } from './modules/Cartlist';

// 최상위 Root 컴포넌트 ///////
function App(){

  // 후크상태변수 설정 : 페이지변경
  const [pgName,setPgName] = useState('main');

  // 페이지변경 상태변수 업데이트 함수
  const chgPgName = (txt) => {
    setPgName(txt);
  }; ///////// chgPgName 함수 //////
  const flag=useRef(true)//true=update  
  // false=cart component function operating
  let cval=0
  let tval=null
  if(localStorage.getItem('cute')){
    tval=JSON.parse(localStorage.getItem('cute'))
    if(tval.length!==0)cval=1
    // $('#bgbx').show()
    // $('#mycart').show()
  }
  const [tran,setTran]=useState(tval)
  const [cars,setCars]=useState(cval)
  // 랜더링 후 실행구역 ////////////
  useEffect(()=>{
    // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
    $('.ham').click(e=>{
      // 1. 전체메뉴 박스 : .mbox -> 보이기/숨기기
      $('.mbox').fadeToggle(400);

      // 2. 햄버거버튼에 클래스 'on' 넣기/빼기
      $(e.currentTarget).toggleClass('on');
      // e.target과 e.currentTarget은 다르다!
      // 후자가 햄버거 버튼 자신임!
      // console.log(e.currentTarget)

      // 3. 비디오 재생/멈춤 : 대상 - .bgm
      // get(0)은 비디오컬렉션임! -> 제이쿼리용
      const vid = $('.bgm').get(0);
      vid.paused? vid.play() : vid.pause();
      // console.log(vid.paused);
      // paused 속성 : 동영상 멈춤일때 true 리턴
      // play() 메서드 : 동영상 재생 메서드
      // pause() 메서드 : 동영상 정지 메서드

    }); //////// click ////////
    if (cars===1) {
      $(()=>{
        $('#bgbx').show()
        $('#mycart').addClass('on')
      })
    }
  },[]); ////////// useEffect //////////////
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [gmod,setGmod]=useState('F')
  const gg=useRef(false)
  // useEffect(()=>{
  //   // in case of removing some event,that setting must be summoned in react function. in that case, removeEventListener is valid.
  //   if (pgName=='main') {
  //     // window.addEventListener('wheel',wheelFn)
  //     // evt()
  //   }else{
  //     // window.removeEventListener('wheel',wheelFn)
  //   }
  // })
  // 리턴코드 //////////////////////////
  return(
      <pcon.Provider value={{chgPgName,pgName,flag,setTran,setCars,tran,gmod,setGmod,gg}}>
        <TopArea cat={pgName} />        
        <MainArea page={pgName} />
        <FooterArea />
        {
          cars&&
          <Cartlist sell={tran} flag={flag}></Cartlist>
        }
      </pcon.Provider>
  )

} ///////////// App 컴포넌트 /////////////

/* 
<button onClick={()=>chgPgName('main')}>
  메인페이지
</button>
<button onClick={()=>chgPgName('men')}>
  남성페이지
</button>
<button onClick={()=>chgPgName('women')}>
  여성페이지
</button>
<button onClick={()=>chgPgName('style')}>
  스타일페이지
</button>
*/

// 출력하기 ///////
const root = createRoot(document.querySelector('#root'));
root.render(<App />)