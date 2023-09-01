// 큐브 애니 JS //////////////

/************************************* 
    [구현내용]
    - "돌아!"버튼을 클릭하면 멈춰있던
    큐브가 돌아감. 이때 버튼이 "멈춰!"
    버튼으로 변경되어 있음!
    - "멈춰!" 버튼을 클릭하면 돌고있던
    큐브가 멈춤. 이때 버튼이 "돌아!"
    버튼으로 변경되어 있음!

*************************************/
window.addEventListener('DOMContentLoaded',clft)
const qs=x=>document.querySelector(x)
const qa=x=>document.querySelectorAll(x)
function clft() {
    // console.log('b')
    const btngo=qs('.btngo')
    const cube=qs('.cube')
    // console.log(btngo,cube)
    btngo.onclick=()=>{
        // console.log('b')
        cube.classList.toggle('on')
    }
}