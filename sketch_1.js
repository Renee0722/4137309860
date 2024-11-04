  function setup() {
    createCanvas(windowWidth, windowHeight);  //產生一個畫布
    background("#fcd5ce")  //設定背景顏色
  }
  
  function draw() { //畫圖，每秒畫60次
    background("#fcd5ce");  //背景顏色
    rectMode(CENTER)
    noFill()  //以下所畫的物件不要充滿顏色
    stroke("#b8c0ff")  //線條的顏色
    strokeWeight(3)  //線條的粗細
    //宣告變數
    var rect_width =20 +mouseX/10 //方形的寬度
    var bc_width =20 +mouseY/10  //大圓的寬度
    var sc_width =10 +mouseX/10 //小圓的寬度
    //for迴圈
    //i=0:i為變數<要i從0開始
    //i<20: 條件判斷
    //i=i+1: i值每次改變的差距值，當回圈內程式碼執行一次後i會自動+1
    for(let j=0; j<20; j=j+1){  //產生第幾排
      for(let i=0; i<40; i=i+1){  //產生一整排物件
        if(j<5){  //0-4排的顏色
          stroke("#ffd6ff")
        } else if(j<10){  //5-9排的顏色
          stroke("#e7c6ff")
        } else{stroke("#b8c0ff")  //第10排之後的顏色
      }
        ellipse(25+50*i,25+50*j,bc_width)  // x+50,y不變
        rect(25+50*i,25+50*j,rect_width)  //畫正方形
        ellipse(50+50*i,50+50*j,sc_width)  //畫一個小圓
        }
    }
    
   }