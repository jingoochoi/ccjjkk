// 3-3 external js
// js외부파일은 html문서에 직접 들어가 동작하므로 utf 인코딩 설정이 불필요
var mini=document.querySelectorAll('.mini');
var bluebox=document.querySelector('.Bcase');
// console.log(mini,bluebox);
for(var i=0;i<mini.length;i++){mini[i].addEventListener('click',insertMini);}
// console.log(i);
function insertMini(){
    // console.log('mini',this);
    var cnt=this.getAttribute('data-cnt');
    console.log(cnt);
    for(var j=0;j<cnt;j++){bluebox.innerHTML+=`<img src="./images/Minions.png" alt="미니언즈" class="mini" title="나를 클릭하면 열개씩 가방에 들어갈꼬얌~!" data-cnt="10" />`;}
    
}//insertmini
