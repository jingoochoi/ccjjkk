// 미니언즈 좀비 탈출 애니 구현 JS - main.js
    /*********************************** 
        [ 요구사항정리 ]
        1. 버튼을 클릭하여 미니언즈가
        순서대로 특정위치로 이동하며
        메시지를 보여준다
        2. 각 위치별 좀비를 등장시킨다
        3. 맨윗층에서 탈출할때 헬기를 사용한다

        [ 변경대상 ]
        1. 주인공 미니언즈.mi
        2. 좀비 미니언즈들
        3. 주사기
        4. 헬기.heli

        [ 이벤트와 이벤트대상  ]
        1. 이벤트 : 클릭이벤트
        2. 이벤트대상 : 버튼들
        3. 기능구분 : 버튼글자(지시사항)

    ***********************************/
   console.log("%c💉VS🧟‍♂️","font-size:30px")
   $(()=>{
        const mini=$('.mi')
        const heli=$('.heli')
        // console.log(heli)
        const room=$('.building li')
        const btns=$('.btns button')
        const text=$('.msg')
        let zomb=`<img src="./images/mz1.png" alt="zombie" class="mz">`
        let zom1=`<img src="./images/mz2.png" alt="zombie" class="mz">`
        let zom2=`<img src="./images/zom.png" alt="zombie" class="mz">`
        let injt=`<img src="./images/inj.png" alt="injection" class="inj">`
        room.each((a,b)=>{
            $(b).text(a)
            switch (a) {
                case 9:
                    $(b).append(zomb)
                    break;
                case 7:
                    $(b).append(zom1)
                    break;
                case 2:
                    $(b).append(injt)
                    break;
                case 1:
                    $(b).append(zom2)
                    break;
            
                default:
                    break;
            }
        })
        $('.mz').hide()
        btns.hide().first().show()
        const gomi=(a,b,c)=>{
            text.fadeOut(0)
            $(a).slideUp(30)
            let myroom=room.eq(b)
            let pos=[]
            pos[0]=myroom.offset().top
            pos[1]=myroom.offset().left
            mini.animate({top:pos[0]+'px',left:pos[1]+'px'},1000,'easeOutSine',c)
        }
        btns.first().click(function () {
            let f=()=>{
                text.html('와~! 아늑하다! 옆방으로 가보자!').delay(1000).fadeIn(0)
                $(this).next().delay(1000).fadeIn(1000)
            }
            gomi(this,8,f)
        }).next().click(function () {
            let zonb=$('.mz').last()
            let f=()=>{
                zonb.show()
                text.html('no!!!').delay(1000).fadeIn(0)
                $(this).next().delay(1000).fadeIn(1000)
            }
            gomi(this,9,f)
        }).next().click(function () {
            let zonc=$('.mz').eq(1)
            let f=()=>{
                zonc.show()
                text.html('no!!!').delay(1000).fadeIn(0)
                $(this).next().delay(1000).fadeIn(1000)
            }
            gomi(this,7,f)
        }).next().click(function () {
            let zonc=$('.mz').eq(1)
            let f=()=>{
                text.html('ok,leggo').delay(1000).fadeIn(0)
                $(this).next().delay(1000).fadeIn(1000)
            }
            gomi(this,6,f)
        }).next().click(function () {
            let zonc=$('.mz').eq(1)
            let f=()=>{
                zonc.animate({bottom:room.eq(7).height()+'px'},1000,'easeOutSine').delay(1000).animate({right:room.eq(4).width() + zonc.width()*1.3},1000,'easeOutSine',()=>{
                    setTimeout(() => {
                        // 
                        mini.css({filter:'grayscale(100%)'})
                    }, 300);
                })
                text.html('uh,oh,doctor!!!').delay(4000).fadeIn(0)
                $(this).next().delay(4000).fadeIn(1000)
            }
            gomi(this,4,f)
        }).next().click(function () {
            // let ijtn=$('.inj')
            let f=()=>{
                room.eq(2).find('.inj').css({transform:'rotate(-135deg)'}).animate({right:120+'px'},1000,'easeOutSine',()=>{
                    // 
                    mini.css({filter:'grayscale(0)'})
                })
                text.html('thank you').delay(1000).fadeIn(0)
                $(this).next().delay(1000).fadeIn(1000)
            }
            gomi(this,2,f)
        }).next().click(function () {
            // let ijtn=$('.inj')
            let f=()=>{
                
                
                $(this).next().delay(1000).fadeIn(1000)
            }
            gomi(this,3,f)
        }).next().click(function () {
            // let ijtn=$('.inj')
            let f=()=>{
                
                
                $(this).next().delay(1000).fadeIn(1000)
            }
            gomi(this,1,f)
        }).next().click(function () {
            // let ijtn=$('.inj')
            let f=()=>{
                room.eq(1).find('.mz').show()
                $('.heli').animate({left:room.eq(0).offset().left/2},1000,'easeOutSine',()=>{
                    room.eq(1).find('.mz').animate({right:room.eq(0).width()},1000,'easeOutSine')
                    mini.hide()
                    $('.heli').attr('src','images/heli2.png').delay(2000).animate({left:1000+'px'},1000,'easeOutSine',()=>{
                        $('.heli').attr('src','images/heli3.png').delay(1000).animate({left:120+'%'},1000,'easeOutSine',()=>{
                            $('.tit').animate({top:120+'%'})
                            $('.building').animate({top:120+'%'})
                        })
                    })
                })
                $(this).next().delay(1000).fadeIn(1000)
            }
            gomi(this,0,f)
        })
   })