const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////
  console.log("%c❤️ SITE MADE WITH LOBE BY PATRICK HENG - httsp://patrickheng.com ❤️", "background-color: #686de0; color: black; padding : 20px")
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
                            ${menu('b')}
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
    for (let x of a) {
        hcode+=`
        <dl>
            <dt>2차</dt>
            <dd><a href="#">3차</dd>
        </dl>
        `
    }
  }
  console.log(hcode)