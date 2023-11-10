import React from "react"
import  ReactDOM  from "react-dom/client"
import './css/index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Lays } from "./dc/layout/layout"
// import { Main } from "./dc/layout/main"
import { Mani } from "./dc/ctts/mani"
import { Crts } from "./dc/ctts/crts"
import { Comi } from "./dc/ctts/comi"
import { Move } from "./dc/ctts/move"
import { Game } from "./dc/ctts/game"
import { News } from "./dc/ctts/news"
import { Vdos } from "./dc/ctts/vdos"
import { Swps } from "./dc/plugin/swps"
import { Osts } from "./dc/ctts/osts"
export default function App() {
  /********************************************* 
    [ 리액트 라우터 ]
    -> 컴포넌트를 연결하여 특정 이벤트에 모듈을
    변경해주는 중계역할을 함
    1. <BrowserRouter> - 라우터 Root
    2. <Routes> - 개별 라우터를 묶어주는 역할
    3. <Route> - 개별 라우터
        (속성)
            (1) path : 경로를 지정함
                    (Link의 to속성 경로와 일치함!)
            (2) element : 연결할 컴포넌트 지정

        (하위 라우트 만들기)
            <Route path="/">
                <Route />
                <Route />
                <Route />
            </Route>
    4. 라우터를 구성하는 컴포넌트는 자체적으로
    내보내기 셋팅을 해야한다!
    -> export default 라우터 컴포넌트
*********************************************/
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lays/>}>
          <Route index element={<Mani></Mani>}></Route>
          <Route path="character" element={<Crts></Crts>}></Route>
          <Route path="comics" element={<Comi></Comi>}></Route>
          <Route path="movies" element={<Move></Move>}></Route>
          <Route path="games" element={<Game></Game>}></Route>
          <Route path="news" element={<News></News>}></Route>
          <Route path="video" element={<Vdos></Vdos>}></Route>
          <Route path="swiper" element={<Swps></Swps>}></Route>
          <Route path="ost" element={<Osts></Osts>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const root=ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App></App>)