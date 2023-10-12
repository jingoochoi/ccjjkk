import aespa from './dom.js'
const week=['日','月','火','水','木','金','土']
const isos=k=>`${k.getFullYear()}.${k.getMonth()+1}.${k.getDate()} ${week[k.getDay()]}`//current month and next
console.log("%c📆🌸☔🍁⛄📆","font-size:30px")
call()

function call() {
    const cdate=new Date()
    let year=cdate.getFullYear()
    let mnth=cdate.getMonth()
    const today=new Date()
    const yearTit=aespa.qs('.yearTit')
    const monthTit=aespa.qs('.monthTit')
    const dates=aespa.qs('.dates')
    const data=[]
    const tial=()=>{
        const prev=new Date(year,mnth+1,0)
        console.log(isos(prev))
        const htis=new Date(year,mnth+1,1)
        console.log(isos(htis))
        const last=new Date(year,mnth+2,0)
        console.log(isos(last))
        yearTit.innerHTML=year
        monthTit.innerHTML=mnth+2
        // console.log(htis.getDay())
        if (htis.getDay()!=0) {
            for (let i = 0; i < htis.getDay(); i++) {
                data.unshift(`<span style="color:#ccc" class="bm">${prev.getDate()-i}</span>`)
                // console.log(data)
            }
        }
        for (let j = 1; j <= last.getDate(); j++) {
            data.push(j)
            
        }
        // console.log(data)
        // <span style="color:#ccc" class="am">8</span>
        for (let m = 1; m <= 9; m++) {
            data.push(`<span style="color:#ccc" class="am">${m}</span>`)
            
        }
        // console.log(data)
        dates.innerHTML=data.map(u=>`<div class="date">${u}</div>`).join('')
    }
    tial()
}