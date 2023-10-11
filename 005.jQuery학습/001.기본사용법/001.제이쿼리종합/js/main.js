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
        const gomi=(a,b,c)=>{}
        btns.first().click(function () {
            let myroom=room.eq(8)
            let pos=[]
            pos[0]=myroom.offset().top
            pos[1]=myroom.offset().left
            
        })
   })