export function link(){
    $('a').click(e=>e.preventDefault())
    const logo=$('.logo a')
    // const gnb=$('.gnb a,.mognb a')
    logo.click(()=>{
        location.href='index.html'
    })
    // gnb.click(e=>{location.href='ctgr.html?cat='+$(e.target).html().toLowerCase()})//no link in react
    const sns1=$('.sns a:last,.mosns a:last')
    sns1.before(`<a href="#" class="fa-solid fa-key">
    <span class="ir">로그인</span>
</a><a href="#" class="fi fi-locked">
<span class="ir">회원가입</span>
</a><a href="#" class="fa-solid fa-panorama">
<span class="ir">갤러리</span>
</a>`)
    $('.sns a,.mosns a').each((p,q)=>{
        $(q).attr('title',$(q).text())
    }).click(function () {
        let tit1=$(this).text().trim()
        let url
        switch (tit1) {
            case '인스타그램':
                url='https://www.instagram.com/VOGUEKOREA/'
                break;
            case '페이스북':
                url='https://www.facebook.com/VOGUEkr'
                break;
            case '트위터':
                url='https://twitter.com/VogueKorea'
                break;
            case '유튜브':
                url='https://www.youtube.com/user/VogueKorea'
                break;
            case '카카오스토리':
                url='https://story.kakao.com/ch/voguekr'
                break;
            case '로그인':
                url='login'
                break;
            case '회원가입':
                url='member'
                break;
            case '갤러리':
                url='gallery'
                break;
        
            default:
                break;
        }
        if (tit1=='로그인'||tit1=='회원가입'||tit1=='갤러리') {
            location.href=url+'.html'
        }
        open(url)
    })
    $('.mosns a').eq(3).after('<br>')
}