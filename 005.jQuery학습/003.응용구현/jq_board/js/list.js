// 리스트 페이지 JS - list.js

import sakura from './data.json' assert{type:'json'}
/* 
<tr>
    <td>idx</td>
    <td>tit</td>
    <td>writer</td>
    <td>date</td>
    <td>cnt</td>
</tr>
 */
// console.log(sakura)
sakura.sort((a,b)=>b.idx-a.idx)
$('#board tbody').html(sakura.map(a=>`
<tr>
<td>${a.idx}</td>
<td>${a.tit}</td>
<td>${a.writer}</td>
<td>${a.date}</td>
<td>${a.cnt}</td>
</tr>
`).join(''))