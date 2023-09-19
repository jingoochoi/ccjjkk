// 모듈 연습 메인 JS - main.js
import dododo from "./dom.js";
import message from "./msg_format.js";
import { mTitle,sTitle,personInfo,mvData } from "./text_data.js";
// console.log(dododo)
// console.log(message)
// console.log(mTitle)
// console.log(sTitle)
// console.log(personInfo)
// console.log(mvData)
console.log("%cMODULE","background-color:pink;line-height:2;padding:30px;font-size:30px")
let h=dododo.qs('h1')
h.innerHTML=`${mTitle}`
const tpart=dododo.qs('.tpart')
tpart.innerHTML=`<h2>${sTitle}</h2>`
const p=dododo.qs('#demo')
p.innerHTML=message('kong',45)
p.innerHTML+=message('tom',59)
p.innerHTML+=message('jollie',48)
personInfo.forEach(a=>p.innerHTML+=message(a[0],a[1]))
const mvpart=dododo.qs('.mvpart')
mvData.forEach(a=>{
    mvpart.innerHTML+=`
        <ol>
            <li>🎬title:${a[0]}</li>
            <li>📦genre:${a[1]}</li>
            <li>📢director:${a[2]}</li>
            <li>✨actor:${a[3]}</li>
            <li>🎫comment:${a[4]}</li>
        </ol>
    `
})
/*************************************************** 
    
    [ import 형식 ]
    import 전달변수 from 파일경로;
    -> 반드시 가져올 모듈JS에서 export를 해줘야함!
    -> from 뒤에 경로는 반드시 상대경로일 경우
    같은 위치일 지라도 ./ 표시를 꼭해야함!(없으면 안나옴!)
    (/,./,../ 표시필수)
    -> 모듈구성은 반드시 서버형식으로 열어야 작동한다!
    (http://...) Live Server로 열기때문에 볼 수 있음!
    -> 로컬파일로 열면 작동안됨!

    [ import 시 변수명 변경하기 : 별칭사용하기 ]
    import {전달변수 as 별칭} from 파일경로;
    예) import {mymymy as m} from 파일경로;
    -> 별칭 사용이유:  단순변경요구, 같은이름 변수 피하기

    [ export ]
    one variable export
        ->export default->don't care about name(can change the name in 'import')
    two or more export
        ->export
    ____________________________________________________

    [ 모듈화를 위한 구성 ]
    1. 데이터 처리하기 위한 JS
    -> textData.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msgFormat.js
***************************************************/
