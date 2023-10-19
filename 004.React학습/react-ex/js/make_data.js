let category = ["men","women",'kids']
let gname=['반스캐주얼','반스어얼리','반스뉴진스','반스스타일']
let gprice=['23000','55000','76000','48000','66000']
let bb = '';
let rand = (x)=> Math.floor(Math.random()*x)
for(let x=0;x<19;x++){
bb += `
{
    "idx":${x+1},
    "gname":${gname[rand(4)]},
    "category":${category[rand(3)]},
    "gprice":${gprice[rand(5)]}
},
`;
}

