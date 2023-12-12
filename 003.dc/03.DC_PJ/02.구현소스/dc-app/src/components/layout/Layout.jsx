// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!

import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

// Context API 불러오기
import { dcCon } from "../modules/dcContext";
import { useNavigate } from "react-router-dom";
import { useCallback, useLayoutEffect,useState } from "react";

export function Layout() {
  const [logg,setLogg]=useState(localStorage.getItem('info'))
  const [msgs,setMsgs]=useState(null)
  const lout=useCallback(()=>{
    localStorage.removeItem('info')
    setLogg(null)
    setMsgs(null)
    chgPage('/',{})
  },[])
  // 랜더링 후(화면보이기전) 실행구역 //////////
  useLayoutEffect(()=>{
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0,0);
  }); /////////// useEffect ///////////

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수
  const chgPage = useCallback((pgnm,prmt) => goNav(pgnm,prmt),[]);

  /********************************** 
   [컨텍스트 API 공유값 설정]
   1. chgPage 함수 : 라우터 이동기능   
   **********************************/
  // 리턴코드 ////////////////////////
  return (
    <dcCon.Provider value={{ chgPage,setLogg,setMsgs }}>
      <TopArea ft={chgPage} logg={logg} msgs={msgs} lout={lout}/>
      <MainArea />
      <FooterArea />
    </dcCon.Provider>
  );
} /////////// Layout 컴포넌트 ///////////