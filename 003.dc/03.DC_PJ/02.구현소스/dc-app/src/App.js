import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// import {useNavigate} from 'react-router-dom'
// useNavigate(sth)->const에 담아야 한다.->const 안에 링크 주소를 삽입
// *에 링크 삽입->split('*')[0]+<a>tag+split('*')[1]
// 페이지 이동 시 스크롤 위치 상단으로->useLayoutEffect(()=>{window.scrollTo(0,0)})
export default App;
