//for2 js
/*          <li>
                <img src="./images/dress/1.jpg" alt="dress">
                <div class="iteminfo">
                    <h3>name</h3>
                    <h4>price</h4>
                </div>
            </li> */
var listbox=document.querySelector('.listbox');
// console.log(listbox);
var hcode='';
hcode+='<ul>';
for(var i=0;i<30;i++){hcode+=`
<li>
<img src="./images/dress/${i+1}.jpg" alt="dress">
<div class="iteminfo">
    <h3>name ${i+1}</h3>
    <h4>price ${i+1}</h4>
</div>
</li>
`}
hcode+='</ul>';
listbox.innerHTML=hcode