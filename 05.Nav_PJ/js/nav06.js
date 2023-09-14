const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////
  console.log("%cwelcome to chicor", "background-color: pink; color: black; padding : 20px; font-size: 50px")
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
                        <div class="swrap">
                            ${menu(mdata[x])}
                        </div>
                    </h2>
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
//   배열 데이터를 바꿔서 다시 배열로 만들기->.map((a,b,c)=>{code})
// const aa=['','',''];+씨
// const bb=aa.map(a=>a+'씨')->[' 씨',' 씨',' 씨']
  console.log(hcode)