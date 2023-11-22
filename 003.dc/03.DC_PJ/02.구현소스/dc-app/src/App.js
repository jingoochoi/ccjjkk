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
// <Link to={주소} state={{속성:값}}></Link>
// import {useNavigate} from 'react-router-dom'
// useNavigate(sth)->const에 담아야 한다.->const 안에 링크 주소를 삽입
// 이름(주소,{state:{속성:값}})
// *에 링크 삽입->split('*')[0]+<a>tag+split('*')[1]
// 페이지 이동 시 스크롤 위치 상단으로->useLayoutEffect(()=>{window.scrollTo(0,0)})
// import {useLocation} from 'react-router-dom'
// useLocation()-라우터 전달값 받기->const에 담기
// const 속성이름=이름.state.속성
// ^ 문단화->split('^')->코딩구역에서 map((a,b)=><p key={b}>{a}</p>)
export default App;
