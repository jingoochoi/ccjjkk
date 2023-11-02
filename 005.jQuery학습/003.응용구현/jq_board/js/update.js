import sakura from './data.json' assert{type:'json'}
sakura.sort((a,b)=>b.idx-a.idx)
let lstn=0
const addn=a=>lstn=++a
// $('#board tbody').html(sakura.map(a=>`
// <tr>
// <td>${addn(lstn)}</td>
// <td>${a.tit}</td>
// <td>${a.writer}</td>
// <td>${a.date}</td>
// <td>${a.cnt}</td>
// </tr>
// `).join(''))
/* 
paging principle
1.setting the number of the list per page and the number of the pages
2.using 'for' as the number
3.update refer to page number
 */
const pgbl=9
let pgnb=1
const ttct=sakura.length
// console.log(ttct)
let pggg=Math.floor(ttct/pgbl)
let adov=ttct%pgbl
export const update=(a)=>{
    pgnb=a
    $('#board tbody').html('')
    lstn=(pgnb-1)*pgbl
    for (let i = (pgnb-1)*pgbl; i < pgbl*pgnb; i++) {
        if (i>=ttct) {
            break
        }
        $('#board tbody').append(`
        <tr>
        <td>${addn(lstn)}</td>
        <td>${sakura[i].tit}</td>
        <td>${sakura[i].writer}</td>
        <td>${sakura[i].date}</td>
        <td>${sakura[i].cnt}</td>
        </tr>`)
        
    }
    let nn
    $('.paging').html('')
    if (adov!=0) {
        nn=pggg+1
    }
    for (let x = 0; x < nn; x++) {
        $('.paging').append(x+1==pgnb?`<b>${x+1}</b>`:`<a href="#">${x+1}</a>`)
        if (x<nn-1) {
            $('.paging').append(' | ')
        }
    }
    $('.paging a').click(function (b) {
        b.preventDefault()
        update($(this).html())
    })
}