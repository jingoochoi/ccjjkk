$(()=>{
    $('a').click(e=>e.preventDefault())
    const logo=$('.logo a')
    const gnb=$('.gnb a')
    logo.click(()=>{
        location.href='index.html'
    })
    gnb.click(e=>{location.href='ctgr.html?cat='+$(e.target).html().toLowerCase()})
})