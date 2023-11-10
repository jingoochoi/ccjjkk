import React from "react"
import  ReactDOM  from "react-dom/client"
import './css/index.css'
import { Tara } from "./dc/layout/head"
import { Main } from "./dc/layout/main"
import { Foot } from "./dc/layout/foot"
function App() {
  const[menu,setMenu]=React.useState('main')
  const memu=(txt)=>{
    setMenu(txt)
  }
  return(
    <>
      <Tara ft={memu}/>
      <Main meno={menu}></Main>
      <Foot></Foot>
    </>
  )
}
const root=ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App></App>)