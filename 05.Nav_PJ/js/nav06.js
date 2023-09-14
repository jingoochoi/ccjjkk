const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////
  console.log("%cwelcome to chicor", "background-image: linear-gradient(to bottom right,red,orange,yellow,green,blue,darkblue,violet); color: black; padding : 20px; font-size: 50px; width: 100%")
  const gnbbox=domFn.qs('.gnb')
  let hcode=''
  for (let x in mdata) {
    hcode +=
    `
    <ul>
        <li>
            <a href="#">${x}</a>
            <div class="smenu">
                <aside class="smbx">
                    <h2>
                        <div class="stit">${x}</div>
                        <a href="#">전체보기</a>
                    </h2>
                    <div class="swrap">
                        ${menu(mdata[x])}
                    </div>
                </aside>
            </div>
        </li>
    </ul>
    `
  }
  function menu(a) {
    let hcode=''
    for (let x in a) {
        hcode+=`
        <dl>
            <dt>${x}</dt>
            ${a[x].map(a=>`<dd><a href="#">${a}</dd>`).join('')}
            
        </dl>
        `
    }
    return hcode
  }
  gnbbox.innerHTML=hcode
//   배열 데이터를 바꿔서 다시 배열로 만들기->.map((a,b,c)=>{code})
// 새로 만들어진 데이터를 현재 자리에 그대로 출력코자 할 때 배열메서드 join('sth')을 이용하여 배열을 하나의 문자형 데이터로 만들어주면 편리하다
// const aa=['','',''];+씨
// const bb=aa.map(a=>a+'씨')->[' 씨',' 씨',' 씨']
//   console.log(hcode)