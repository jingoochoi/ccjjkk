// 패션인트로 데이터 JS 

export const fsData = {
    men:{
        isrc:"./images/men02.png",
        ialt:"공유다!",
        tit:["MEN'S","ESSENTIALS"]
    },
    women:{
        isrc:"./images/women01.png",
        ialt:"여자",
        tit:["WOMEN'S","ESSENTIALS"]
    },
    // 스타일 데이터는 배열로 2개를 사용함!
    style:{
        isrc:["./images/style02.png","./images/style03.png"],
        ialt:["여자스타일","공유스타일"],
        tit:[["MEN'S","STYLE"],["WOMEN'S","STYLE"]]
    },
    submen1:{
        isrc: "./images/sub/men/03.disc.png",
        ialt: "공유다!",
        tit: ["MEN'S", "ESSENTIALS"],
    },
    // 서브페이지용 데이터는 구성이 다름
  sub: {
    men: [
      {
        isrc: "./images/sub/men/03.disc.png",
        ialt: "공유다!",
        tit: ["MEN'S", "ESSENTIALS"],
      },
      {
        isrc: ["./images/sub/men/04.disc.png", "./images/sub/men/05.disc.png"],
        ialt: ["남자스타일", "공유스타일"],
        tit: [
          ["MEN'S", "STYLE"],
          ["WOMEN'S", "STYLE"],
        ],
      },
    ],
    women: [
      {
        isrc: "./images/sub/women/03.disc.png",
        ialt: "여자",
        tit: ["WOMEN'S", "ESSENTIALS"],
      },
      {
        isrc: ["./images/sub/women/04.disc.png", "./images/sub/women/05.disc.png"],
        ialt: ["여자스타일", "고은스타일"],
        tit: [
          ["MEN'S", "STYLE"],
          ["WOMEN'S", "STYLE"],
        ],
      },
    ],
    // 스타일 데이터는 배열로 2개를 사용함!
    style: [
      {
        isrc: "./images/sub/style/03.disc.png",
        ialt: "스타일",
        tit: ["WOMEN'S", "ESSENTIALS"],
      },
      {
        isrc: ["./images/sub/style/04.disc.png", "./images/sub/style/05.disc.png"],
        ialt: ["스타일", "스타일"],
        tit: [
          ["MEN'S", "STYLE"],
          ["WOMEN'S", "STYLE"],
        ],
      },
    ],
  },
}; //////////// fsData ////////////