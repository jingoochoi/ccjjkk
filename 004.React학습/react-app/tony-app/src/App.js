// import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import $ from 'jquery'
window.jQuery=$
require ('jquery-ui-dist/jquery-ui')
require ('jquery-ui-touch-punch/jquery.ui.touch-punch')
function App() {
  useEffect(()=>{
    $('.App-header').click(()=>{
      window.open('https://www.naver.com/')
    })
    $('h1').draggable()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={'./images/dcm34.jpg'} style={{}} className="App-logo" alt="logo" />
        <h1>자 이제 시작이야 내 꿈을</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌍지구는 둥그니까🌍
        </a>
      </header>
    </div>
  );
}

export default App;
